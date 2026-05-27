/* Mentor - Carlos Mendes. Mensagens dinamicas, responder, ir pra missao. */
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, MessageSquare, Send, RotateCw } from 'lucide-react';
import { useApp } from '../subComponents/AppContext.jsx';
import BotaoVoz from '../subComponents/BotaoVoz.jsx';
import { RESPOSTAS_RAPIDAS, respostaAutomatica } from '../../data/mentor-pool.js';
import '../../assets/css/Screens.css';

function tempoRel(ts) {
  const dif = Date.now() - ts;
  const dias = Math.floor(dif / 86400000);
  if (dias === 0) {
    const d = new Date(ts);
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }
  if (dias === 1) return 'ontem';
  return `${dias} dias`;
}

export default function Mentor() {
  const { progresso, marcarMentorLida, responderMentor, atualizarInboxMentor } = useApp();
  const navigate = useNavigate();
  const items = useMemo(() => progresso.mentorInbox || [], [progresso.mentorInbox]);
  const [openId, setOpenId] = useState(items[0]?.id || null);
  const [composing, setComposing] = useState(false);
  const [draft, setDraft] = useState('');
  const [autoResp, setAutoResp] = useState(null);

  const item = items.find(i => i.id === openId);

  useEffect(() => {
    if (item?.status === 'new') marcarMentorLida(item.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId]);

  useEffect(() => { atualizarInboxMentor(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function abrir(id) {
    setOpenId(prev => prev === id ? null : id);
    setComposing(false);
    setDraft('');
    setAutoResp(null);
  }

  function enviarResposta(texto) {
    if (!item) return;
    const t = (texto || draft).trim();
    if (!t) return;
    responderMentor(item.id, t);
    setAutoResp(respostaAutomatica());
    setDraft('');
    setComposing(false);
  }

  function irMissao() {
    const a = item?.acao;
    if (!a) return;
    if (a.tipo === 'missao') navigate(`/missao/${a.trilhaId}/${a.missaoId}`);
    else if (a.tipo === 'modulo') navigate(`/modulo/${a.modId}`);
    else if (a.tipo === 'rota') navigate(a.rota);
  }

  return (
    <div className="screen">
      <div className="hello">
        <div>
          <div className="kicker">Coordenador · Carlos Mendes</div>
          <h1 className="bighi">Caixa do <em>Mentor</em>.</h1>
        </div>
        <button className="btn btn-ghost btn-sm" onClick={atualizarInboxMentor} title="Atualizar mensagens">
          <RotateCw size={14} /> Atualizar
        </button>
      </div>
      <p className="lede">Seu mentor virtual escreve aqui. Ele acompanha sua ofensiva, sugere a proxima missao e responde quando voce fala.</p>

      <div className="mentor-grid">
        <div className="mentor-list">
          {items.length === 0 && (
            <div className="empty">
              <div className="empty-ic"><MessageSquare size={22} /></div>
              <h4>Sem mensagens</h4>
              <p>Conclua missoes - o mentor manda dicas conforme seu progresso.</p>
            </div>
          )}

          {items.map(m => {
            const expanded = openId === m.id;
            return (
              <article key={m.id} className={`mentor-card mc-${m.status} ${expanded ? 'open' : ''}`}>
                <div
                  className="mentor-card-main"
                  role="button"
                  tabIndex={0}
                  onClick={() => abrir(m.id)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') abrir(m.id); }}
                >
                  <div className="mc-avatar" data-c={m.color}>CM</div>
                  <div className="mc-body">
                    <div className="mc-row">
                      <strong>{m.from}</strong>
                      <span className="mc-time">{tempoRel(m.ts)}</span>
                    </div>
                    <h5>{m.title}</h5>
                    <p>{m.body}</p>
                    <div className="mc-tags">
                      <span className="chip" data-c={m.color}>{m.tag}</span>
                      {m.status === 'new' && <span className="chip chip-coral">novo</span>}
                      {m.status === 'replied' && <span className="chip chip-sage">respondido</span>}
                    </div>
                  </div>
                </div>

                {expanded && (
                  <div className="mentor-card-detail">
                    <div className="md-head">
                      <div className="mc-avatar" data-c={m.color}>CM</div>
                      <div>
                        <strong>{m.from}</strong>
                        <br /><span>{m.role} · {tempoRel(m.ts)}</span>
                      </div>
                      <BotaoVoz texto={`${m.title}. ${m.body}`} compacto />
                    </div>

                    <h3>{m.title}</h3>
                    <p>{m.body}</p>

                    {m.respostaAluno && (
                      <div className="mentor-reply">
                        <div className="kicker">Voce respondeu · {tempoRel(m.respondidoEm)}</div>
                        <p>"{m.respostaAluno}"</p>
                      </div>
                    )}

                    {autoResp && (
                      <div className="mentor-auto">
                        <div className="kicker">Carlos Mendes</div>
                        <p>{autoResp}</p>
                      </div>
                    )}

                    <div className="md-actions">
                      {m.acao && (
                        <button className="btn btn-primary" onClick={irMissao}>
                          {m.acao.tipo === 'missao' ? 'Ir para a missao' : 'Abrir modulo'}
                          <ChevronRight size={16} />
                        </button>
                      )}
                      {!composing && !m.respostaAluno && (
                        <button className="btn btn-ghost" onClick={() => setComposing(true)}>
                          <Send size={14} /> Responder
                        </button>
                      )}
                    </div>

                    {composing && (
                      <div className="composer mentor-composer">
                        <span className="kicker">Respostas rapidas</span>
                        <div className="mentor-quick-replies">
                          {RESPOSTAS_RAPIDAS.map((r, i) => (
                            <button key={i} className="chip" onClick={() => enviarResposta(r)}>{r}</button>
                          ))}
                        </div>
                        <textarea className="input" placeholder="Ou escreva uma resposta..."
                          value={draft} onChange={e => setDraft(e.target.value)} />
                        <div className="composer-actions">
                          <button className="btn btn-primary" disabled={!draft.trim()}
                            style={{ opacity: draft.trim() ? 1 : .5 }}
                            onClick={() => enviarResposta()}>
                            <Send size={14} /> Enviar
                          </button>
                          <button className="btn btn-ghost" onClick={() => { setComposing(false); setDraft(''); }}>
                            Cancelar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
