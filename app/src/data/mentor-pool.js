/* =========================================================================
   POOL DO MENTOR — Carlos Mendes (mentor virtual).
   Mensagens geradas dinamicamente conforme estado do progresso.
   Cada gerador retorna `null` se o gatilho não se aplica.
   ========================================================================= */
import { MODULOS, TRILHAS, MISSOES } from './estrutura.js';

const DIA = 86_400_000;

function pegarProxima(progresso) {
  const feitas = new Set(progresso.missoesCompletas || []);
  for (const t of TRILHAS) {
    const ms = MISSOES[t.id] || [];
    for (const m of ms) {
      if (!feitas.has(`${t.id}-${m.id}`)) return { trilha: t, missao: m };
    }
  }
  return null;
}

function tempoRel(ts) {
  const dif = Date.now() - ts;
  if (dif < DIA) return 'hoje';
  if (dif < 2 * DIA) return 'ontem';
  return `${Math.floor(dif / DIA)} dias`;
}

const POOL = [
  /* Saudação de retorno */
  {
    id: 'g-retorno',
    cond: (p) => (p.user?.streak || 0) >= 1,
    msg: (p) => ({
      title: `Bem-vindo de volta, ${p.user?.nome?.split(' ')[0] || ''}.`,
      body: `Você está há ${p.user.streak} dia${p.user.streak > 1 ? 's' : ''} seguido${p.user.streak > 1 ? 's' : ''}. Manter a chama é metade do trabalho — a outra metade é fazer 1 missão hoje.`,
      tag: 'recap', color: 'sage',
    }),
  },
  /* Sugere próxima missão */
  {
    id: 'g-proxima',
    cond: () => true,
    msg: (p) => {
      const prox = pegarProxima(p);
      if (!prox) return null;
      const mod = MODULOS.find(m => m.id === prox.trilha.modulo);
      return {
        title: `Sua tarefa de hoje: ${prox.missao.titulo}`,
        body: `Trilha "${prox.trilha.nome}" · ${prox.missao.tempo} min · +${prox.missao.xp} XP. ${mod ? `Módulo ${mod.nome}.` : ''} Quando concluir, me responde aqui dizendo como foi.`,
        tag: 'missão', color: 'navy',
        acao: { tipo: 'missao', trilhaId: prox.trilha.id, missaoId: prox.missao.id },
      };
    },
  },
  /* Sugere PIX/Segurança quem ainda não começou Seg */
  {
    id: 'g-seg',
    cond: (p) => {
      const feitas = (p.missoesCompletas || []);
      const segFeitas = feitas.filter(x => x.startsWith('amb-seg-') || x.startsWith('sec-')).length;
      return segFeitas === 0;
    },
    msg: () => ({
      title: 'Você sabe identificar um golpe de WhatsApp?',
      body: 'Antes da próxima onda de Excel ou e-mail, recomendo fortemente fazer 1 missão de Segurança. É a coisa mais valiosa que esse curso ensina — em valor real de prejuízo evitado.',
      tag: 'prep', color: 'coral',
      acao: { tipo: 'modulo', modId: 'seguranca' },
    }),
  },
  /* Parabéns por ofensiva forte */
  {
    id: 'g-streak-marco',
    cond: (p) => [7, 14, 30, 60, 100].includes(p.user?.streak),
    msg: (p) => ({
      title: `${p.user.streak} dias seguidos. Repare nisso.`,
      body: `Manter uma rotina durante ${p.user.streak} dias seguidos não é talento — é caráter. Continue do mesmo jeito: 1 missão por dia, sem pressa.`,
      tag: 'celebra', color: 'sage',
    }),
  },
  /* Volta depois de sumiço */
  {
    id: 'g-sumiu',
    cond: (p) => {
      const ultima = p.user?.ultimaVisita;
      if (!ultima) return false;
      const dif = Date.now() - new Date(ultima + 'T00:00:00').getTime();
      return dif > 3 * DIA;
    },
    msg: () => ({
      title: 'Que bom te ver de volta.',
      body: 'Pular alguns dias acontece — o importante é voltar. Hoje, faça só 1 missão pra reativar o ritmo. Nem precisa ser longa.',
      tag: 'volta', color: 'coral',
    }),
  },
  /* Dica de Excel pra quem está em pc-excel */
  {
    id: 'g-dica-excel',
    cond: (p) => {
      const feitas = (p.missoesCompletas || []);
      const excelFeitas = feitas.filter(x => x.startsWith('pc-excel-')).length;
      return excelFeitas >= 2 && excelFeitas < 8;
    },
    msg: () => ({
      title: 'Dica rápida: a tecla F4 no Excel',
      body: 'Quando estiver editando uma fórmula, pressione F4 pra alternar entre $A$1, A$1, $A1 e A1. Esse atalho economiza dezenas de segundos por planilha — multiplicado por uma semana de trabalho, é uma manhã inteira.',
      tag: 'dica', color: 'navy',
    }),
  },
  /* Recapitulação semanal */
  {
    id: 'g-recap-semana',
    cond: (p) => {
      const feitas = (p.missoesCompletas || []).length;
      return feitas > 0 && feitas % 5 === 0;
    },
    msg: (p) => ({
      title: `${p.missoesCompletas.length} missões concluídas — parabéns.`,
      body: `Você acabou de bater um marco redondo. Olha pra trás: cada uma dessas missões representa uma habilidade nova que entrou pro seu currículo. Continue.`,
      tag: 'recap', color: 'sage',
    }),
  },
];

/** Resposta automática do mentor quando o aluno responde uma mensagem. */
const RESPOSTAS_AUTO = [
  'Boa. Anotado. Volto amanhã com a próxima.',
  'Perfeito. Continue do mesmo jeito.',
  'Entendi. Próxima missão já está no seu caminho.',
  'Combinado. Se travar em algo, me diz aqui.',
  'Show. Você está construindo um hábito de verdade.',
];

export function respostaAutomatica() {
  return RESPOSTAS_AUTO[Math.floor(Math.random() * RESPOSTAS_AUTO.length)];
}

/** Gera/atualiza a inbox do mentor com base no progresso atual. */
export function gerarInbox(progresso, inboxExistente = []) {
  const existentesIds = new Set(inboxExistente.map(m => m.id));
  const novas = [];
  const agora = Date.now();
  let i = 0;
  for (const item of POOL) {
    if (existentesIds.has(item.id)) continue;
    if (!item.cond(progresso)) continue;
    const m = item.msg(progresso);
    if (!m) continue;
    novas.push({
      id: item.id,
      from: 'Carlos Mendes', role: 'Coordenador',
      ts: agora - i * DIA, status: 'new',
      ...m,
    });
    i++;
  }
  // Mantém todas as existentes e adiciona as novas no topo
  return [...novas, ...inboxExistente].slice(0, 12);
}

/** Sugestões de resposta rápida que o aluno pode mandar ao mentor. */
export const RESPOSTAS_RAPIDAS = [
  'Vou fazer agora.',
  'Pode deixar.',
  'Vou tentar amanhã, hoje estou cansado(a).',
  'Tive dificuldade — pode explicar mais?',
  'Concluí, valeu pela dica.',
  'Obrigado(a).',
];
