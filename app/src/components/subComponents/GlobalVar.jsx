/* =========================================================================
   GlobalVar — classe estática global (padrão DevProfile do Rafael).
   Concentra: endpoints, wrappers localStorage, formatadores BR, ESTADO DO
   PROGRESSO do usuário (front-only — chave 'escritorio-progresso').
   Tudo síncrono. Funções de gamificação reusam estrutura.js.
   ========================================================================= */
import {
  MODULOS, TRILHAS, MISSOES, NIVEIS, XP_POR_NIVEL,
  atualizarOfensiva, avaliarTrofeus, nivelPorXP,
} from '../../data/estrutura.js';
import { gerarInbox as gerarInboxMentor } from '../../data/mentor-pool.js';

const CHAVE = 'escritorio-progresso';

const PROGRESSO_INICIAL = {
  user: {
    nome: '',
    idade: '',
    moduloInicial: '',
    xp: 0,
    nivelNum: 1,
    streak: 0,
    escudos: 0,
    ultimaVisita: null,
  },
  missoesCompletas: [],
  trofeus: [],
  preferencias: {
    fonteGrande: false,         // legado — mantido pra retrocompat
    fontStep: 0,                // 0 17px, 1 19px, 2 21px
    altoContraste: false,
    audiencia: 'mix',           // jovem | adulto | mix
    moduloAtual: '',
    onboardingFeito: false,
    somAtivo: true,
    vozLigada: true,        // botão "Ouvir" aparece nas aulas por padrão
    vozAutoPlay: true,      // toca aula automaticamente ao entrar
    notifLigado: false,     // notificações locais
    horaLembrete: '19:00',  // lembrete diário (HH:MM)
  },
  caixaDoDiaUltima: null,        // ISO date da última caixa aberta
  caixaDoDiaTotal: 0,            // contador (pra troféu "7 caixas seguidas")
  atividadePorDia: {},            // { 'YYYY-MM-DD': nMissoesDoDia }
  atividadeRecente: [],           // [{ tipo, titulo, sub, ts }]
  diario: [],                     // [{ id, ts, title, body }]
  agenda: [],                     // [{ id, dataISO, hora, trilhaId, missaoId, titulo, color }]
  mentorInbox: [],                // [{ id, from, role, title, body, ts, status: 'new'|'read'|'replied', tag, color }]
  recordes: { maiorStreak: 0, maxMissoesDia: 0, maxXpDia: 0 },
  // Onda 9 — SRS (spaced repetition)
  srs: {},                       // { 'card-id': { interval, next, ease, reps } }
  katas: {},                     // { 'YYYY-MM-DD': { kataId, resolvido, tentativas } }
};

export default class GlobalVar {
  static serverIp = '';
  static serverPort = '';

  static getLocalStorage(chave) {
    try { return JSON.parse(localStorage.getItem(chave)); }
    catch { return null; }
  }
  static setLocalStorage(chave, valor) {
    return localStorage.setItem(chave, JSON.stringify(valor));
  }

  /* ===== PROGRESSO ===== */
  static carregarProgresso() {
    const salvo = GlobalVar.getLocalStorage(CHAVE);
    if (!salvo) return JSON.parse(JSON.stringify(PROGRESSO_INICIAL));
    return { ...PROGRESSO_INICIAL, ...salvo, user: { ...PROGRESSO_INICIAL.user, ...(salvo.user || {}) }, preferencias: { ...PROGRESSO_INICIAL.preferencias, ...(salvo.preferencias || {}) } };
  }
  static salvarProgresso(p) {
    GlobalVar.setLocalStorage(CHAVE, p);
  }
  static resetarProgresso() {
    localStorage.removeItem(CHAVE);
  }

  /** Marca login do dia + atualiza streak. Idempotente.
   *  Também avalia troféus de ofensiva — retorna `{ progresso, trofeusNovos:[] }`. */
  static tickDia(p) {
    const hoje = new Date().toISOString().split('T')[0];
    const user = atualizarOfensiva(p.user, hoje);
    let parcial = { ...p, user };
    // Ganho de escudo a cada 10 dias (max 2) — só se aumentou o streak
    if (user.streak > (p.user.streak || 0) && user.streak > 0 && user.streak % 10 === 0) {
      const escudos = Math.min(2, (user.escudos || 0) + 1);
      parcial = { ...parcial, user: { ...user, escudos } };
    }
    // Atualiza recorde de streak
    const novoMaiorStreak = Math.max(p.recordes?.maiorStreak || 0, parcial.user.streak || 0);
    parcial = { ...parcial, recordes: { ...(p.recordes || {}), maiorStreak: novoMaiorStreak } };
    // Seed mentorInbox se vazio
    if (!parcial.mentorInbox || parcial.mentorInbox.length === 0) {
      parcial = { ...parcial, mentorInbox: GlobalVar.seedMentorInbox(parcial) };
    }
    const ganhos = avaliarTrofeus(parcial);
    const jaTinha = new Set(p.trofeus || []);
    const trofeusNovos = ganhos.filter(g => !jaTinha.has(g));
    const trofeus = Array.from(new Set([...(p.trofeus || []), ...ganhos]));
    const novo = { ...parcial, trofeus };
    GlobalVar.salvarProgresso(novo);
    return { progresso: novo, trofeusNovos };
  }

  /** Caixa do Dia (mystery box) — só pode abrir 1× por dia. */
  static podeAbrirCaixaHoje(p) {
    const hoje = GlobalVar.diaAtualFunc();
    return p.caixaDoDiaUltima !== hoje;
  }
  static abrirCaixaDoDia(p) {
    if (!GlobalVar.podeAbrirCaixaHoje(p)) return { progresso: p, recompensa: null };
    const RECOMPENSAS = [
      { id: 'xp40',     t: '+40 XP',          sub: 'surpresa rápida',         ic: 'star',    tier: 'common',    weight: 30, xp: 40 },
      { id: 'xp80',     t: '+80 XP',          sub: 'bom dia animado',          ic: 'star',    tier: 'common',    weight: 20, xp: 80 },
      { id: 'xp150',    t: '+150 XP',         sub: 'caixa de prata',           ic: 'star',    tier: 'rare',      weight: 14, xp: 150 },
      { id: 'shield',   t: '+1 Escudo',       sub: 'protege 1 dia',            ic: 'shield',  tier: 'rare',      weight: 12, escudo: 1 },
      { id: 'tip',      t: 'Dica do dia',     sub: 'micro-conhecimento',       ic: 'lamp',    tier: 'common',    weight: 10 },
      { id: 'x2',       t: '×2 XP por 1h',    sub: 'dobro nas próximas',       ic: 'bolt',    tier: 'epic',      weight: 8 },
      { id: 'trophy',   t: 'Troféu raro',     sub: 'caixa de ouro',            ic: 'trophy',  tier: 'legendary', weight: 4 },
      { id: 'streakup', t: '+1 Ofensiva',     sub: 'adianta a chama',          ic: 'flame',   tier: 'epic',      weight: 2, streak: 1 },
    ];
    const total = RECOMPENSAS.reduce((s, r) => s + r.weight, 0);
    let r = Math.random() * total;
    let picked = RECOMPENSAS[0];
    for (const it of RECOMPENSAS) { r -= it.weight; if (r <= 0) { picked = it; break; } }

    let user = { ...p.user };
    if (picked.xp) user.xp = (user.xp || 0) + picked.xp;
    if (picked.escudo) user.escudos = (user.escudos || 0) + picked.escudo;
    if (picked.streak) user.streak = (user.streak || 0) + picked.streak;
    const novo = {
      ...p, user,
      caixaDoDiaUltima: GlobalVar.diaAtualFunc(),
      caixaDoDiaTotal: (p.caixaDoDiaTotal || 0) + 1,
    };
    GlobalVar.salvarProgresso(novo);
    return { progresso: novo, recompensa: picked };
  }

  /** Registra ação na atividade recente (timeline curta). */
  static addAtividade(p, item) {
    const ts = Date.now();
    const atividadeRecente = [{ ts, ...item }, ...(p.atividadeRecente || [])].slice(0, 20);
    const novo = { ...p, atividadeRecente };
    GlobalVar.salvarProgresso(novo);
    return novo;
  }

  /** Conta missões do dia em `atividadePorDia` — pra heatmap. */
  static incrementarAtividadeDia(p) {
    const hoje = GlobalVar.diaAtualFunc();
    const atual = (p.atividadePorDia || {})[hoje] || 0;
    const atividadePorDia = { ...(p.atividadePorDia || {}), [hoje]: atual + 1 };
    const recordes = {
      ...(p.recordes || {}),
      maxMissoesDia: Math.max(p.recordes?.maxMissoesDia || 0, atual + 1),
    };
    return { ...p, atividadePorDia, recordes };
  }

  /** Mensagens do mentor — usa pool dinâmico (mentor-pool.js).
   *  Recebe o progresso e a inbox existente; merge sem duplicar. */
  static seedMentorInbox(p) {
    return GlobalVar.limitarMentorDiario(gerarInboxMentor(p, p.mentorInbox || []));
  }

  /** Recalcula mentor (chamar quando o progresso muda significativamente). */
  static atualizarInboxMentor(p) {
    const inbox = GlobalVar.limitarMentorDiario(gerarInboxMentor(p, p.mentorInbox || []));
    const novo = { ...p, mentorInbox: inbox };
    GlobalVar.salvarProgresso(novo);
    return novo;
  }

  static limitarMentorDiario(inbox) {
    const inicioHoje = new Date();
    inicioHoje.setHours(0, 0, 0, 0);
    let novasHoje = 0;
    return (inbox || []).filter(m => {
      const criadaHoje = (m.ts || 0) >= inicioHoje.getTime();
      if (m.status !== 'new' || !criadaHoje) return true;
      novasHoje += 1;
      return novasHoje <= 2;
    });
  }

  static marcarMentorLida(p, id) {
    const inbox = (p.mentorInbox || []).map(m => m.id === id && m.status === 'new' ? { ...m, status: 'read' } : m);
    const novo = { ...p, mentorInbox: inbox };
    GlobalVar.salvarProgresso(novo);
    return novo;
  }

  /** Aluno respondeu ao mentor. Marca status=replied e guarda resposta. */
  static responderMentor(p, id, textoResposta) {
    const inbox = (p.mentorInbox || []).map(m => {
      if (m.id !== id) return m;
      return {
        ...m, status: 'replied',
        respostaAluno: textoResposta,
        respondidoEm: Date.now(),
      };
    });
    const novo = { ...p, mentorInbox: inbox };
    GlobalVar.salvarProgresso(novo);
    return novo;
  }

  static addDiario(p, entry) {
    const nova = { id: 'd' + Date.now(), ts: Date.now(), ...entry };
    const diario = [nova, ...(p.diario || [])];
    const novo = { ...p, diario };
    GlobalVar.salvarProgresso(novo);
    return novo;
  }

  static removerDiario(p, id) {
    const diario = (p.diario || []).filter(d => d.id !== id);
    const novo = { ...p, diario };
    GlobalVar.salvarProgresso(novo);
    return novo;
  }

  /** SRS — algoritmo SM-2 simplificado.
   *  qualidade: 0 (errou), 3 (acertou difícil), 5 (fácil). */
  static atualizarSRS(p, cardId, qualidade) {
    const srs = { ...(p.srs || {}) };
    const atual = srs[cardId] || { interval: 0, next: 0, ease: 2.5, reps: 0 };
    let ease = atual.ease + (0.1 - (5 - qualidade) * (0.08 + (5 - qualidade) * 0.02));
    ease = Math.max(1.3, ease);
    let interval, reps;
    if (qualidade < 3) { interval = 1; reps = 0; }            // errou → revisar amanhã
    else {
      reps = atual.reps + 1;
      if (reps === 1) interval = 1;
      else if (reps === 2) interval = 6;
      else interval = Math.round(atual.interval * ease);
    }
    const next = Date.now() + interval * 86400000;
    srs[cardId] = { interval, next, ease, reps };
    const novo = { ...p, srs };
    GlobalVar.salvarProgresso(novo);
    return novo;
  }
  /** Quantos cartões SRS estão vencidos pra revisar. */
  static cartoesPraRevisarSRS(p, deck) {
    const now = Date.now();
    return (deck || []).filter(c => {
      const e = (p.srs || {})[c.id];
      return !e || e.next <= now;
    });
  }

  /** Kata diário — qual é o desafio de hoje, e o estado dele. */
  static kataDeHoje(p, katas) {
    const hoje = GlobalVar.diaAtualFunc();
    if (!katas?.length) return null;
    // hash determinístico do dia: índice baseado em dias desde epoch
    const idx = Math.floor(new Date(hoje + 'T00:00:00').getTime() / 86400000) % katas.length;
    const kata = katas[idx];
    const estado = (p.katas || {})[hoje] || { kataId: kata.id, resolvido: false, tentativas: 0 };
    return { kata, estado };
  }
  static marcarKata(p, resolvido) {
    const hoje = GlobalVar.diaAtualFunc();
    const atual = (p.katas || {})[hoje] || { resolvido: false, tentativas: 0 };
    const novoEstado = { ...atual, resolvido, tentativas: (atual.tentativas || 0) + 1 };
    const novo = { ...p, katas: { ...(p.katas || {}), [hoje]: novoEstado } };
    GlobalVar.salvarProgresso(novo);
    return novo;
  }

  static exportarDiarioMD(p) {
    const entries = p.diario || [];
    if (!entries.length) return '# Diário do Escritório\n\nNenhuma anotação ainda.\n';
    return '# Diário do Escritório\n\n' + entries.map(e => {
      const d = new Date(e.ts).toLocaleString('pt-BR');
      return `## ${e.title}\n_${d}_\n\n${e.body}\n`;
    }).join('\n---\n\n');
  }

  /** Conclui uma missão: soma XP, level, troféus, salva.
   *  Retorna `{ progresso, trofeusNovos:[], subiuNivel:bool }`. */
  static concluirMissao(p, trilhaId, missaoId, xp) {
    const id = `${trilhaId}-${missaoId}`;
    if (p.missoesCompletas.includes(id)) return { progresso: p, trofeusNovos: [], subiuNivel: false };
    const missoesCompletas = [...p.missoesCompletas, id];
    const xpNovo = (p.user.xp || 0) + (xp || 0);
    const nivelAntes = p.user.nivelNum || 1;
    const nivelNum = nivelPorXP(xpNovo);
    let parcial = {
      ...p,
      missoesCompletas,
      user: { ...p.user, xp: xpNovo, nivelNum },
    };
    // Conta no heatmap + recorde
    parcial = GlobalVar.incrementarAtividadeDia(parcial);
    // Atividade recente
    const TR = TRILHAS.find(t => t.id === trilhaId);
    const M = (MISSOES[trilhaId] || []).find(m => String(m.id) === String(missaoId));
    parcial.atividadeRecente = [{
      ts: Date.now(), tipo: 'missao',
      titulo: M?.titulo || 'Missão concluída',
      sub: `${TR?.nome || ''} · agora · +${xp || 0} XP`,
    }, ...(p.atividadeRecente || [])].slice(0, 20);

    const ganhos = avaliarTrofeus(parcial);
    const jaTinha = new Set(p.trofeus || []);
    const trofeusNovos = ganhos.filter(g => !jaTinha.has(g));
    const trofeus = Array.from(new Set([...(p.trofeus || []), ...ganhos]));
    // Troféus novos viram entrada de atividade também
    if (trofeusNovos.length) {
      const trAtv = trofeusNovos.map(id => ({
        ts: Date.now(), tipo: 'trofeu',
        titulo: `Troféu desbloqueado`, sub: id,
      }));
      parcial.atividadeRecente = [...trAtv, ...parcial.atividadeRecente].slice(0, 20);
    }
    if (nivelNum > nivelAntes) {
      parcial.atividadeRecente = [{
        ts: Date.now(), tipo: 'nivel',
        titulo: `Subiu para ${GlobalVar.nomeNivel(nivelNum)}`,
        sub: `nível ${nivelNum}`,
      }, ...parcial.atividadeRecente].slice(0, 20);
    }
    const novo = { ...parcial, trofeus };
    GlobalVar.salvarProgresso(novo);
    return { progresso: novo, trofeusNovos, subiuNivel: nivelNum > nivelAntes };
  }

  /* ===== EXPORT / IMPORT (multi-aparelho via JSON) ===== */
  static exportarJSON() {
    const p = GlobalVar.carregarProgresso();
    return JSON.stringify(p, null, 2);
  }
  static importarJSON(texto) {
    const obj = JSON.parse(texto);
    GlobalVar.salvarProgresso(obj);
    return obj;
  }

  /* ===== FORMATADORES BR ===== */
  static converterDataDMA(dataISO) {
    const d = new Date(dataISO);
    return `${String(d.getUTCDate()).padStart(2, '0')}/${String(d.getUTCMonth() + 1).padStart(2, '0')}/${d.getUTCFullYear()}`;
  }
  static diaAtualFunc() {
    return new Date().toISOString().split('T')[0];
  }

  /* ===== HELPERS DE DOMÍNIO ===== */
  static moduloPorId(id) { return MODULOS.find(m => m.id === id); }
  static trilhasDoModulo(modId) {
    return TRILHAS.filter(t => t.modulo === modId).sort((a, b) => a.ordem - b.ordem);
  }
  static missoesDaTrilha(tid) { return MISSOES[tid] || []; }
  static nomeNivel(n) { return NIVEIS[(n || 1) - 1] || NIVEIS[0]; }

  /** Próximo nível: { proximo, faltam, total } */
  static infoNivel(xp) {
    const n = nivelPorXP(xp);
    const idx = n - 1;
    const xpAtual = XP_POR_NIVEL[idx] || 0;
    const xpProx = XP_POR_NIVEL[idx + 1];
    if (xpProx == null) return { nivel: n, faltam: 0, total: 0, pct: 100 };
    const total = xpProx - xpAtual;
    const feito = xp - xpAtual;
    return {
      nivel: n,
      faltam: xpProx - xp,
      total,
      pct: Math.max(0, Math.min(100, Math.round((feito / total) * 100))),
    };
  }

  /** Próxima missão pendente do usuário (sequencial por trilha). */
  static proximaMissao(p) {
    const ordemModulos = MODULOS.map(m => m.id);
    for (const modId of ordemModulos) {
      const trilhas = GlobalVar.trilhasDoModulo(modId);
      for (const t of trilhas) {
        const ms = MISSOES[t.id] || [];
        for (const m of ms) {
          const id = `${t.id}-${m.id}`;
          if (!p.missoesCompletas.includes(id)) {
            return { trilha: t, missao: m };
          }
        }
      }
    }
    return null;
  }
}
