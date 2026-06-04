/* HomePage rica — 9 blocos do proto. */
import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Gift, Star, Shield, Lightbulb, Zap, Trophy, Flame, ChevronRight,
  Grid3x3, Calendar, MessageSquare, PenLine, Layers, CheckCircle2, BookOpenCheck, Brain,
} from 'lucide-react';
import { useApp } from '../subComponents/AppContext.jsx';
import GlobalVar from '../subComponents/GlobalVar.jsx';
import Som from '../subComponents/Som.jsx';
import BotaoVoz from '../subComponents/BotaoVoz.jsx';
import { TROFEUS } from '../../data/estrutura.js';
import { DESAFIOS_SEMANA } from '../../data/desafio-semana-pool.js';
import { RELAMPAGO_POOL } from '../../data/relampago-pool.js';
import { escolherDoDia, diasRestantesSemana, isoWeekKey, seedDoTexto } from '../../data/daily-utils.js';
import '../../assets/css/HomePage.css';
import '../../assets/css/Arcade.css';

const ICON_RECOMP = { star: Star, shield: Shield, lamp: Lightbulb, bolt: Zap, trophy: Trophy, flame: Flame };

function diaSemana() {
  return ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'][new Date().getDay()];
}

function saudacao() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return 'Bom dia';
  if (h >= 12 && h < 18) return 'Boa tarde';
  return 'Boa noite';
}

export default function HomePage() {
  const { progresso, abrirCaixaDoDia, podeAbrirCaixa, toast, atualizar } = useApp();
  const navigate = useNavigate();
  const user = progresso.user || {};
  const nomeCurto = (user.nome || 'Estudante').split(' ')[0];
  const infoNivel = GlobalVar.infoNivel(user.xp || 0);
  const nivelNome = GlobalVar.nomeNivel(infoNivel.nivel);
  const sealLetter = nivelNome.charAt(0).toUpperCase();
  const proxima = GlobalVar.proximaMissao(progresso);

  const [recompensa, setRecompensa] = useState(null);
  const [opening, setOpening] = useState(false);
  function abrir() {
    if (!podeAbrirCaixa || opening) return;
    setOpening(true);
    Som.tocar('flip');
    setTimeout(() => {
      const r = abrirCaixaDoDia();
      setRecompensa(r);
      setOpening(false);
      if (r) toast?.mostrar({ kicker: 'Caixa do dia', titulo: r.t, descricao: r.sub, icone: r.ic === 'shield' ? 'streak' : 'xp' });
    }, 700);
  }
  const RewardIc = recompensa && (ICON_RECOMP[recompensa.ic] || Gift);

  const desafioSemana = useMemo(() => {
    const weekKey = isoWeekKey();
    const ativo = DESAFIOS_SEMANA[seedDoTexto(weekKey) % DESAFIOS_SEMANA.length] || DESAFIOS_SEMANA[0];
    const seteDiasAtras = Date.now() - 7 * 86400000;
    const feitas = (progresso.atividadeRecente || [])
      .filter(a => a.tipo === 'missao' && a.ts >= seteDiasAtras && ativo.match.test(`${a.titulo || ''} ${a.sub || ''}`))
      .length;
    return {
      titulo: 'Semana da Segurança',
      sub: 'Cumpra 5 missões do módulo Segurança até domingo',
      reward: 'Troféu Guarda-costas + 200 XP',
      ...ativo,
      progress: Math.min(ativo.total, feitas),
      total: ativo.total,
      modulo: ativo.modulo,
      diasRestantes: diasRestantesSemana(),
    };
  }, [progresso.atividadeRecente]);

  const quaseLa = useMemo(() => {
    const ganhos = new Set(progresso.trofeus || []);
    return TROFEUS.filter(t => !ganhos.has(t.id)).slice(0, 3);
  }, [progresso.trofeus]);

  const last7 = useMemo(() => {
    const hoje = new Date(); const arr = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(hoje); d.setDate(d.getDate() - i);
      const iso = d.toISOString().split('T')[0];
      const n = (progresso.atividadePorDia || {})[iso] || 0;
      const nivel = n === 0 ? 0 : n === 1 ? 1 : n <= 3 ? 2 : 3;
      arr.push({ iso, n, nivel, today: i === 0, label: ['D','S','T','Q','Q','S','S'][d.getDay()] });
    }
    return arr;
  }, [progresso.atividadePorDia]);

  const hoje = GlobalVar.diaAtualFunc();
  const relampagoAtual = useMemo(() => escolherDoDia(RELAMPAGO_POOL, progresso, hoje, 'relampago'), [progresso, hoje]);
  const relampagoEstado = relampagoAtual ? (progresso.relampago || {})[hoje] : null;
  const [lightAns, setLightAns] = useState(() => relampagoEstado?.id === relampagoAtual?.id ? relampagoEstado.escolha : null);
  useEffect(() => {
    setLightAns(relampagoEstado?.id === relampagoAtual?.id ? relampagoEstado.escolha : null);
  }, [relampagoEstado?.id, relampagoEstado?.escolha, relampagoAtual?.id]);
  function respLight(idx) {
    if (lightAns !== null || !relampagoAtual) return;
    setLightAns(idx);
    const ok = idx === relampagoAtual.resposta;
    atualizar({
      relampago: {
        ...(progresso.relampago || {}),
        [hoje]: { id: relampagoAtual.id, escolha: idx, ok },
      },
    });
    Som.tocar(ok ? 'success' : 'error');
  }

  const arcadeDone = !!(progresso.modoArcade || {})[hoje]?.resolvido;
  const [invite, setInvite] = useState(() => {
    // Mostra popup uma única vez por dia se ainda não fez o arcade
    if (arcadeDone) return false;
    return progresso.preferencias?.arcadeInviteUltima !== hoje;
  });
  function fecharInvite() {
    setInvite(false);
    if (progresso.preferencias) progresso.preferencias.arcadeInviteUltima = hoje;
  }

  const ativ = (progresso.atividadeRecente || []).slice(0, 4);
  function actIcon(tipo) {
    if (tipo === 'trofeu') return { Ic: Trophy, cls: 'ac-trophy' };
    if (tipo === 'nivel') return { Ic: Star, cls: 'ac-lvl' };
    return { Ic: CheckCircle2, cls: 'ac-done' };
  }
  function tempoRel(ts) {
    const dif = Date.now() - ts;
    const dias = Math.floor(dif / 86400000);
    if (dias === 0) return 'hoje';
    if (dias === 1) return 'ontem';
    if (dias < 7) return `${dias} dias atrás`;
    return `${Math.floor(dias / 7)} semana${dias >= 14 ? 's' : ''} atrás`;
  }
  const xpTeto = infoNivel.faltam > 0 ? (user.xp || 0) + infoNivel.faltam : (user.xp || 0);
  const mentorNew = (progresso.mentorInbox || []).filter(m => m.status === 'new').length;

  return (
    <div className="screen">
      <div className="hello">
        <div>
          <div className="kicker">{diaSemana()} · {new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}</div>
          <h1 className="bighi">{saudacao()}, <em>{nomeCurto}</em>.</h1>
        </div>
        <div className="hello-stamps">
          <span className="streak-pill"><Flame size={16} fill="currentColor" /> {user.streak || 0} dias</span>
          {(user.escudos || 0) > 0 && (
            <span className="shield-pill" title={`${user.escudos} escudo(s) — protege 1 dia perdido`}>
              <Shield size={14} fill="currentColor" />
              {user.escudos}
            </span>
          )}
          <span className="lvl-stamp"><em>{infoNivel.nivel}</em> {nivelNome}</span>
        </div>
      </div>

      <div className={`mystery-box ${recompensa ? 'opened' : ''} ${opening ? 'spinning' : ''}`}>
        {!recompensa && (
          <>
            <div className="mb-burst" onClick={abrir} role="button" tabIndex={0}>
              <Gift size={56} />
            </div>
            <div className="mb-info">
              <span className="kicker">Caixa do dia · {podeAbrirCaixa ? 'só hoje' : 'volte amanhã'}</span>
              <h3>Sua surpresa de <em>hoje</em></h3>
              <p>Toda manhã uma caixa nova. Pode vir XP extra, escudo, dica rara, ou um troféu que nem você imaginava existir.</p>
              <button className="btn btn-dark" disabled={!podeAbrirCaixa || opening} onClick={abrir} style={{ opacity: podeAbrirCaixa ? 1 : .6 }}>
                {opening ? 'Abrindo...' : podeAbrirCaixa ? 'Abrir caixa' : 'Já abriu hoje'}
              </button>
            </div>
          </>
        )}
        {recompensa && RewardIc && (
          <div className="mb-reveal">
            <div className={`mb-rev-ic tier-${recompensa.tier}`}><RewardIc size={48} /></div>
            <span className="kicker" style={{ color: 'var(--honey-soft)' }}>
              {recompensa.tier === 'legendary' ? '🎉 Lendária!' : recompensa.tier === 'epic' ? 'Épica!' : recompensa.tier === 'rare' ? 'Rara' : 'Diária'}
            </span>
            <h3>{recompensa.t}</h3>
            <p>{recompensa.sub}</p>
            <div className="mb-meta"><small>Volte amanhã para a próxima.</small></div>
          </div>
        )}
      </div>

      <div className="xp-card">
        <div>
          <span className="kicker">Para o próximo nível</span>
          <div className="xp-line">
            <strong>{(user.xp || 0).toLocaleString('pt-BR')}</strong>
            <span>/ {xpTeto.toLocaleString('pt-BR')} XP</span>
          </div>
          <div className="xpbar"><i style={{ width: `${infoNivel.pct}%` }} /></div>
          <span className="xp-note">
            {infoNivel.faltam > 0
              ? <>Faltam <strong>{infoNivel.faltam} XP</strong> para virar <strong>{GlobalVar.nomeNivel(infoNivel.nivel + 1)}</strong>.</>
              : <>Você atingiu o nível máximo — <strong>Coordenador</strong>.</>}
          </span>
        </div>
        <div className="seal-big">{sealLetter}</div>
      </div>

      {proxima && (
        <div className="daily-card" onClick={() => navigate(`/missao/${proxima.trilha.id}/${proxima.missao.id}`)}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-2)', flexWrap: 'wrap' }}>
              <span className="stamp">Sua missão de hoje</span>
              <span onClick={(e) => e.stopPropagation()}>
                <BotaoVoz texto={`Sua missão de hoje: ${proxima.missao.titulo}. ${proxima.missao.desc || ''}`} compacto />
              </span>
            </div>
            <h3>{proxima.missao.titulo}</h3>
            <div className="daily-meta">
              <span className="chip">{proxima.trilha.nome}</span>
              <span className="time"><Zap size={12} /> {proxima.missao.tempo} min · +{proxima.missao.xp} XP</span>
            </div>
          </div>
          <button className="btn btn-primary btn-lg">Começar agora <ChevronRight size={18} /></button>
        </div>
      )}

      {/* Arcade Diário card */}
      <Link to="/arcade" className={`arcade-card ${arcadeDone ? 'done' : ''}`} style={{ textDecoration: 'none' }}>
        <div className="arcade-ic">
          {arcadeDone ? <CheckCircle2 size={28} /> : <Zap size={28} />}
        </div>
        <div>
          <h3>{arcadeDone ? 'Arcade concluído hoje' : 'Arcade Diário'}</h3>
          <p>{arcadeDone ? 'Volte amanhã · ofensiva atualizada.' : '3 desafios rápidos · ~2 min · +40 XP'}</p>
        </div>
        {!arcadeDone && (
          <button className="btn btn-primary" onClick={(e) => { e.preventDefault(); navigate('/arcade'); }}>
            Começar <ChevronRight size={16} />
          </button>
        )}
      </Link>

      <div className="week-challenge">
        <div>
          <span className="kicker">Desafio da semana · {desafioSemana.diasRestantes} dias restantes</span>
          <h3>{desafioSemana.titulo}</h3>
          <p>{desafioSemana.sub}</p>
          <div className="wc-progress">
            <div className="wc-bar"><i style={{ width: `${desafioSemana.progress / desafioSemana.total * 100}%` }} /></div>
            <span className="wc-cnt">{desafioSemana.progress}/{desafioSemana.total}</span>
          </div>
          <div className="wc-reward"><Trophy size={14} color="var(--honey)" /><strong>{desafioSemana.reward}</strong></div>
        </div>
        <button className="wc-cta" onClick={() => navigate(`/modulo/${desafioSemana.modulo}`)}>
          <Shield size={28} /><span>Continuar</span>
        </button>
      </div>

      <section className="block">
        <div className="block-head">
          <h2><Zap size={18} color="var(--coral)" style={{ verticalAlign: '-4px', marginRight: 4 }} /> Quase lá</h2>
          <Link to="/trofeus" className="btn-link">Ver coleção <ChevronRight size={12} /></Link>
        </div>
        <div className="near-row">
          {quaseLa.map(t => (
            <div key={t.id} className="near-card">
              <div className="near-medal medal-gold"><Trophy size={22} /></div>
              <div className="near-info">
                <strong>{t.nome}</strong>
                <small>{t.desc}</small>
                <div className="bar"><i style={{ width: '60%' }} /></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="quick-row">
        <Link to="/modulos" className="quick"><Grid3x3 size={22} /><span>Módulos</span></Link>
        <Link to="/agenda" className="quick"><Calendar size={22} /><span>Agenda</span></Link>
        <Link to="/mentor" className="quick">
          <MessageSquare size={22} /><span>Caixa do Mentor</span>
          {mentorNew > 0 && <span className="badge">{mentorNew}</span>}
        </Link>
        <Link to="/revisao" className="quick"><Brain size={22} /><span>Revisão</span></Link>
        <Link to="/kata" className="quick"><BookOpenCheck size={22} /><span>Kata diário</span></Link>
        <Link to="/diario" className="quick"><PenLine size={22} /><span>Diário</span></Link>
        <Link to="/trofeus" className="quick"><Trophy size={22} /><span>Troféus</span></Link>
        <Link to="/anatomia" className="quick"><Layers size={22} /><span>Anatomia</span></Link>
      </div>

      <div className="two-col">
        <section className="block">
          <div className="block-head">
            <h2>Sua semana</h2>
            <Link to="/agenda" className="btn-link">Ver agenda <ChevronRight size={12} /></Link>
          </div>
          <div className="weekstrip">
            {last7.map((d, i) => (
              <div key={i} className={`weekday ${d.today ? 'today' : ''}`}>
                <span className="wd-l">{d.label}</span>
                <span className={`wd-cell hm-${d.nivel}`}>{d.n > 0 ? d.n : ''}</span>
              </div>
            ))}
          </div>
          <p className="block-note">
            {user.streak ? `${user.streak} dia(s) seguidos cumpridos.` : 'Sem ofensiva ativa.'} Hoje ainda — vai uma missão rápida?
          </p>
        </section>

        <section className="block">
          <div className="block-head">
            <h2>Desafio relâmpago</h2>
            <span className="kicker" style={{ margin: 0 }}>~2 min</span>
          </div>
          <div className="lightning">
            <div className="l-q">"{relampagoAtual?.pergunta || 'Desafio relampago indisponivel hoje.'}"</div>
            <div className="l-opts">
              {(relampagoAtual?.opcoes || []).map((op, i) => {
                let cls = '';
                if (lightAns !== null) {
                  if (i === relampagoAtual.resposta) cls = 'right';
                  else if (i === lightAns) cls = 'wrong';
                }
                return <button key={i} className={`l-opt ${cls}`} onClick={() => respLight(i)}>{op}</button>;
              })}
            </div>
            {lightAns !== null && relampagoAtual && (
              <p style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 6 }}>
                {lightAns === relampagoAtual.resposta ? relampagoAtual.feedback_ok : relampagoAtual.feedback_err}
              </p>
            )}
          </div>
          <div className="lightning" style={{ display: 'none' }}>
            <div className="l-q">"Você recebe um WhatsApp do seu filho pedindo PIX em um número novo. O que faz primeiro?"</div>
            <div className="l-opts">
              {['Faço o PIX', 'Ligo no número antigo', 'Peço um áudio'].map((op, i) => {
                let cls = '';
                if (lightAns !== null) {
                  if (i === 1) cls = 'right';
                  else if (i === lightAns) cls = 'wrong';
                }
                return <button key={i} className={`l-opt ${cls}`} onClick={() => respLight(i)}>{op}</button>;
              })}
            </div>
            {lightAns !== null && (
              <p style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 6 }}>
                {lightAns === 1 ? 'Boa. Liga no número da agenda. Áudio e foto são clonados por IA.'
                  : 'Quase. Áudio não confirma nada hoje — só ligação no número antigo.'}
              </p>
            )}
          </div>
        </section>
      </div>

      <section className="block">
        <div className="block-head"><h2>Atividade recente</h2></div>
        {ativ.length === 0 && (
          <p style={{ color: 'var(--ink-mute)', fontSize: 14 }}>Nada por aqui ainda — conclua sua primeira missão pra começar.</p>
        )}
        <ul className="activity">
          {ativ.map((a, i) => {
            const { Ic, cls } = actIcon(a.tipo);
            return (
              <li key={i}>
                <div className={`ac-ic ${cls}`}><Ic size={18} /></div>
                <div className="ac-body">
                  <strong>{a.titulo}</strong>
                  <span>{a.sub || ''} · {tempoRel(a.ts)}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Popup convite arcade — só se não fez hoje */}
      {invite && (
        <div className="arcade-invite" role="dialog" aria-live="polite">
          <button className="close" onClick={fecharInvite} aria-label="Fechar">×</button>
          <div className="ic"><Zap size={20} /></div>
          <div>
            <strong>Arcade Diário</strong>
            <p>3 desafios rápidos. ~2 minutos. Ganhe +40 XP e mantém a ofensiva.</p>
            <button className="btn btn-primary btn-sm" onClick={() => { fecharInvite(); navigate('/arcade'); }}>Vamos lá</button>
          </div>
        </div>
      )}
    </div>
  );
}
