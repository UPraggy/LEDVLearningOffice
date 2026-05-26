/* =========================================================================
   INTERAÇÕES — motor de exercícios e mini-jogos.
   Lê o array `interacoes[]` da missão. Cada item tem `tipo` e payload.
   Tipos suportados:
     choose       — múltipla escolha (1 correta)
     multi        — múltipla escolha (várias corretas)
     true_false   — verdadeiro/falso (atalho do choose)
     fill_blank   — completar frase com tokens
     drag_match   — parear A↔B (clique-clique)
     sort_order   — colocar passos na ordem certa
     find_error   — caçar erros em texto/código
     hotspot      — clicar na região certa de uma "tela" simulada
     flashcard    — deck virável EN↔PT (ideal pra inglês)
     sim_planilha — preencher célula de planilha com fórmula
     sim_chat     — conversa simulada (analisar mensagens)
     time_pressure— decida em N segundos (timer ring + 2 opções) — v6
     quick_combo  — 5 perguntas rápidas em sequência sem sair — v6
     memory_pairs — jogo da memória virar cartas (par termo↔uso) — v6
     transform    — entrada → saída com checklist de critérios — v6
     calc_live    — sliders/inputs ajustar até bater meta — v6
     scenario_branch — escolha sua aventura (2-3 nós + final) — v6
     drag_zones   — categorizar itens em "pastas" (click-to-zone) — v6
   Cada acerto pode dar +XP bônus (default 5). Feedback imediato,
   nunca punitivo. Voz: "Quase. Pista X." em vez de "Errado".
   ========================================================================= */
import { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, XCircle, RotateCw, Sparkles, Lightbulb, Timer, ArrowRight } from 'lucide-react';
import Som from './subComponents/Som.jsx';
import '../assets/css/Interacoes.css';

// ===== util =====
const LETRAS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

function Feedback({ status, certoMsg, erroMsg }) {
  if (status === 'ok') return (
    <div className="feedback"><CheckCircle2 size={18} /><span>{certoMsg || 'Isso! Você pegou a ideia.'}</span></div>
  );
  if (status === 'err') return (
    <div className="feedback"><Lightbulb size={18} /><span>{erroMsg || 'Quase. Leia de novo e tente.'}</span></div>
  );
  return null;
}

// ============================================================
// CHOOSE / MULTI / TRUE_FALSE
// ============================================================
function ChooseInteracao({ item, onDone }) {
  const [sel, setSel] = useState(item.tipo === 'multi' ? [] : null);
  const [status, setStatus] = useState(null);
  const opcoes = item.opcoes || [];
  const isMulti = item.tipo === 'multi';
  const isTF = item.tipo === 'true_false';

  const toggle = (i) => {
    if (status === 'ok') return;
    if (isMulti) setSel(s => s.includes(i) ? s.filter(x => x !== i) : [...s, i]);
    else setSel(i);
  };

  const verificar = () => {
    let ok = false;
    if (isMulti) {
      const corretas = (item.respostas || []).slice().sort().join(',');
      ok = [...sel].sort().join(',') === corretas;
    } else {
      ok = sel === item.resposta;
    }
    setStatus(ok ? 'ok' : 'err'); Som.tocar(ok ? 'success' : 'error');
    if (ok) onDone?.();
  };

  const reset = () => { setSel(isMulti ? [] : null); setStatus(null); };

  return (
    <div className={`inter-card ${status || ''}`}>
      <div className="head">
        <span className="tag">{isTF ? 'Verdadeiro ou falso' : (isMulti ? 'Escolha tudo que se aplica' : 'Escolha a melhor resposta')}</span>
      </div>
      <p className="prompt">{item.prompt}</p>
      <div className={isTF ? 'tf-row' : 'choose-grid'}>
        {opcoes.map((op, i) => {
          const escolhido = isMulti ? sel.includes(i) : sel === i;
          let cls = '';
          if (status === 'ok') {
            const corretas = isMulti ? (item.respostas || []) : [item.resposta];
            if (corretas.includes(i)) cls = 'right';
          } else if (status === 'err') {
            if (escolhido) cls = 'wrong';
          } else if (escolhido) cls = 'sel';
          return (
            <button key={i} className={`choose-opt ${cls}`} onClick={() => toggle(i)}>
              {!isTF && <span className="letra">{LETRAS[i]}</span>}
              <span>{op}</span>
            </button>
          );
        })}
      </div>
      <Feedback status={status} certoMsg={item.feedback_ok} erroMsg={item.feedback_err} />
      <div className="inter-foot">
        <span className="xp-bonus">+{item.xp || 5} XP bônus</span>
        {status === 'err' ? (
          <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCw size={14} /> Tentar de novo</button>
        ) : status !== 'ok' ? (
          <button className="btn btn-primary btn-sm"
            disabled={isMulti ? sel.length === 0 : sel === null}
            style={{ opacity: (isMulti ? sel.length > 0 : sel !== null) ? 1 : .5 }}
            onClick={verificar}>Verificar</button>
        ) : null}
      </div>
    </div>
  );
}

// ============================================================
// FILL_BLANK — completar frase com tokens
// ============================================================
function FillBlank({ item, onDone }) {
  const partes = item.frase.split('___'); // marcador
  const blanks = partes.length - 1;
  const [escolhas, setEscolhas] = useState(Array(blanks).fill(null));
  const [foco, setFoco] = useState(0);
  const [status, setStatus] = useState(null);
  const tokens = item.tokens || [];
  const usados = new Set(escolhas.filter(Boolean));

  const colocar = (t) => {
    if (status === 'ok') return;
    setEscolhas(prev => {
      const c = [...prev]; c[foco] = t; return c;
    });
    setFoco(f => Math.min(f + 1, blanks - 1));
  };
  const limparBlank = (i) => {
    if (status === 'ok') return;
    setEscolhas(prev => { const c = [...prev]; c[i] = null; return c; });
    setFoco(i);
  };

  const verificar = () => {
    const ok = escolhas.every((e, i) => e === item.respostas[i]);
    setStatus(ok ? 'ok' : 'err'); Som.tocar(ok ? 'success' : 'error');
    if (ok) onDone?.();
  };
  const reset = () => { setEscolhas(Array(blanks).fill(null)); setFoco(0); setStatus(null); };

  return (
    <div className={`inter-card ${status || ''}`}>
      <div className="head"><span className="tag">Complete a frase</span></div>
      {item.prompt && <p className="prompt">{item.prompt}</p>}
      <div className="fill-line">
        {partes.map((p, i) => (
          <span key={i}>
            {p}
            {i < blanks && (
              <span
                onClick={() => escolhas[i] && limparBlank(i)}
                className={`fill-blank ${escolhas[i] ? '' : 'empty'} ${
                  status === 'ok' ? 'right'
                    : status === 'err' && escolhas[i] !== item.respostas[i] ? 'wrong'
                    : status === 'err' ? 'right' : ''
                }`}
                onFocus={() => setFoco(i)}
              >{escolhas[i] || ''}</span>
            )}
          </span>
        ))}
      </div>
      <div className="fill-tokens">
        {tokens.map((t, i) => (
          <button key={i} className={`fill-token ${usados.has(t) ? 'usado' : ''}`}
            disabled={usados.has(t)} onClick={() => colocar(t)}>{t}</button>
        ))}
      </div>
      <Feedback status={status} certoMsg={item.feedback_ok} erroMsg={item.feedback_err} />
      <div className="inter-foot">
        <span className="xp-bonus">+{item.xp || 8} XP bônus</span>
        {status === 'err' ? (
          <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCw size={14} /> De novo</button>
        ) : status !== 'ok' ? (
          <button className="btn btn-primary btn-sm"
            disabled={escolhas.some(e => !e)}
            style={{ opacity: escolhas.every(Boolean) ? 1 : .5 }}
            onClick={verificar}>Verificar</button>
        ) : null}
      </div>
    </div>
  );
}

// ============================================================
// DRAG_MATCH — parear com 2 cliques (A → B). Sem drag pra acessibilidade.
// ============================================================
function DragMatch({ item, onDone }) {
  const [selA, setSelA] = useState(null);
  const [pares, setPares] = useState({}); // {a: b}
  const [status, setStatus] = useState(null);

  const colA = item.colA || [];
  const colB = item.colB || [];
  const corretos = item.pares || []; // [[a,b],...]

  const matched = Object.keys(pares).length;
  const todosFeitos = matched === colA.length;

  const matchedB = new Set(Object.values(pares));

  const clickA = (i) => {
    if (status === 'ok') return;
    if (pares[i] !== undefined) {
      // desfaz
      const c = { ...pares }; delete c[i]; setPares(c); return;
    }
    setSelA(i);
  };
  const clickB = (j) => {
    if (status === 'ok' || matchedB.has(j)) return;
    if (selA === null) return;
    setPares(p => ({ ...p, [selA]: j }));
    setSelA(null);
  };

  const verificar = () => {
    const ok = Object.entries(pares).every(([a, b]) =>
      corretos.some(([ca, cb]) => Number(ca) === Number(a) && Number(cb) === Number(b)));
    setStatus(ok ? 'ok' : 'err'); Som.tocar(ok ? 'success' : 'error');
    if (ok) onDone?.();
  };
  const reset = () => { setSelA(null); setPares({}); setStatus(null); };

  return (
    <div className={`inter-card ${status || ''}`}>
      <div className="head"><span className="tag">{item.titulo_curto || 'Combine as duplas'}</span></div>
      {item.prompt && <p className="prompt">{item.prompt}</p>}
      <div className="match-grid">
        <div className="match-col">
          <span className="titulo">{item.labelA || 'A'}</span>
          {colA.map((t, i) => {
            const isMatched = pares[i] !== undefined;
            const cls = isMatched
              ? `matched col-a ${status === 'ok' ? '' : status === 'err' ? '' : ''}`
              : selA === i ? 'sel' : '';
            return <div key={i} className={`match-item ${cls}`} onClick={() => clickA(i)}>{t}</div>;
          })}
        </div>
        <div className="match-col">
          <span className="titulo">{item.labelB || 'B'}</span>
          {colB.map((t, j) => {
            const isMatched = matchedB.has(j);
            const cls = isMatched ? 'matched col-b locked' : selA === null ? '' : '';
            return <div key={j} className={`match-item ${cls}`} onClick={() => clickB(j)}>{t}</div>;
          })}
        </div>
      </div>
      <Feedback status={status} certoMsg={item.feedback_ok} erroMsg={item.feedback_err} />
      <div className="inter-foot">
        <span className="xp-bonus">+{item.xp || 10} XP bônus</span>
        {status === 'err' ? (
          <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCw size={14} /> De novo</button>
        ) : status !== 'ok' ? (
          <button className="btn btn-primary btn-sm" disabled={!todosFeitos}
            style={{ opacity: todosFeitos ? 1 : .5 }}
            onClick={verificar}>Conferir pares</button>
        ) : null}
      </div>
    </div>
  );
}

// ============================================================
// SORT_ORDER — colocar passos em ordem
// ============================================================
function SortOrder({ item, onDone }) {
  const initial = useMemo(() => {
    // Embaralhar uma vez por item
    const arr = (item.passos || []).map((t, i) => ({ t, id: i }));
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [item]);
  const [lista, setLista] = useState(initial);
  const [status, setStatus] = useState(null);

  const mover = (i, dir) => {
    if (status === 'ok') return;
    const j = i + dir;
    if (j < 0 || j >= lista.length) return;
    const c = [...lista];
    [c[i], c[j]] = [c[j], c[i]];
    setLista(c);
  };
  const verificar = () => {
    const ok = lista.every((it, i) => it.id === i);
    setStatus(ok ? 'ok' : 'err'); Som.tocar(ok ? 'success' : 'error');
    if (ok) onDone?.();
  };
  const reset = () => { setLista(initial); setStatus(null); };

  return (
    <div className={`inter-card ${status || ''}`}>
      <div className="head"><span className="tag">Coloque na ordem</span></div>
      {item.prompt && <p className="prompt">{item.prompt}</p>}
      <div className="sort-list">
        {lista.map((it, i) => {
          const certo = status === 'ok' || (status === 'err' && it.id === i);
          const errado = status === 'err' && it.id !== i;
          return (
            <div key={it.id} className={`sort-item ${certo ? 'right' : ''} ${errado ? 'wrong' : ''}`}>
              <span className="pos">{i + 1}</span>
              <span>{it.t}</span>
              <span className="ctrls">
                <button disabled={i === 0 || status === 'ok'} onClick={() => mover(i, -1)}>↑</button>
                <button disabled={i === lista.length - 1 || status === 'ok'} onClick={() => mover(i, 1)}>↓</button>
              </span>
            </div>
          );
        })}
      </div>
      <Feedback status={status} certoMsg={item.feedback_ok} erroMsg={item.feedback_err} />
      <div className="inter-foot">
        <span className="xp-bonus">+{item.xp || 10} XP bônus</span>
        {status === 'err' ? (
          <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCw size={14} /> Reembaralhar</button>
        ) : status !== 'ok' ? (
          <button className="btn btn-primary btn-sm" onClick={verificar}>Conferir ordem</button>
        ) : null}
      </div>
    </div>
  );
}

// ============================================================
// FIND_ERROR — marcar tokens errados em um texto
// ============================================================
function FindError({ item, onDone }) {
  const tokens = item.tokens || []; // [{txt, ok?: bool, sep?: bool}]
  const [marcados, setMarcados] = useState(new Set());
  const [status, setStatus] = useState(null);

  const toggle = (i) => {
    if (status === 'ok') return;
    const t = tokens[i]; if (t.sep) return;
    setMarcados(prev => {
      const c = new Set(prev);
      if (c.has(i)) c.delete(i); else c.add(i);
      return c;
    });
  };
  const verificar = () => {
    const erradosCorretos = tokens
      .map((t, i) => (t.ok === false ? i : null))
      .filter(x => x !== null);
    const set = new Set(erradosCorretos);
    const ok = marcados.size === set.size && [...marcados].every(i => set.has(i));
    setStatus(ok ? 'ok' : 'err'); Som.tocar(ok ? 'success' : 'error');
    if (ok) onDone?.();
  };
  const reset = () => { setMarcados(new Set()); setStatus(null); };

  return (
    <div className={`inter-card ${status || ''}`}>
      <div className="head"><span className="tag">Caça ao erro · clique no que está errado</span></div>
      {item.prompt && <p className="prompt">{item.prompt}</p>}
      <div className="find-text">
        {tokens.map((t, i) => {
          if (t.sep) return <span key={i}>{t.txt}</span>;
          const flagged = marcados.has(i);
          const showAns = status === 'ok' || status === 'err';
          const right = showAns && t.ok === false && flagged;
          const missed = status === 'err' && t.ok === false && !flagged;
          return (
            <span key={i}
              className={`find-token ${flagged ? 'flagged' : ''} ${right ? 'right' : ''} ${missed ? 'missed' : ''}`}
              onClick={() => toggle(i)}>{t.txt}</span>
          );
        })}
      </div>
      <Feedback status={status} certoMsg={item.feedback_ok} erroMsg={item.feedback_err} />
      <div className="inter-foot">
        <span className="xp-bonus">+{item.xp || 12} XP bônus</span>
        {status === 'err' ? (
          <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCw size={14} /> Limpar marcas</button>
        ) : status !== 'ok' ? (
          <button className="btn btn-primary btn-sm" onClick={verificar} disabled={marcados.size === 0}
            style={{ opacity: marcados.size > 0 ? 1 : .5 }}>Conferir</button>
        ) : null}
      </div>
    </div>
  );
}

// ============================================================
// HOTSPOT — clicar numa região da "tela simulada"
// ============================================================
function Hotspot({ item, onDone }) {
  const [click, setClick] = useState(null);
  const [status, setStatus] = useState(null);
  // areas: [{x, y, w, h, ok?}] em %
  const onClickStage = (e) => {
    if (status === 'ok') return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    const area = (item.areas || []).find(a => x >= a.x && x <= a.x + a.w && y >= a.y && y <= a.y + a.h);
    setClick({ x, y, area });
    const ok = area && area.ok;
    setStatus(ok ? 'ok' : 'err'); Som.tocar(ok ? 'success' : 'error');
    if (ok) onDone?.();
  };
  const reset = () => { setClick(null); setStatus(null); };

  return (
    <div className={`inter-card ${status || ''}`}>
      <div className="head"><span className="tag">Aponte e clique</span></div>
      {item.prompt && <p className="prompt">{item.prompt}</p>}
      <div className="hotspot-stage" onClick={onClickStage}>
        <div className="hotspot-bg">{item.cena || '🖥️ tela simulada'}</div>
        {/* mostra retângulos apenas quando há tentativa */}
        {status && (item.areas || []).map((a, i) => (
          <div key={i} className={`hotspot-area ${a.ok ? 'right' : ''}`}
            style={{ left: `${a.x}%`, top: `${a.y}%`, width: `${a.w}%`, height: `${a.h}%` }} />
        ))}
        {click && (
          <div style={{ position: 'absolute', left: `${click.x}%`, top: `${click.y}%`,
            transform: 'translate(-50%,-50%)', pointerEvents: 'none' }}>
            {status === 'ok' ? <CheckCircle2 size={32} color="var(--sage)" />
              : <XCircle size={32} color="var(--coral)" />}
          </div>
        )}
      </div>
      <Feedback status={status} certoMsg={item.feedback_ok} erroMsg={item.feedback_err} />
      <div className="inter-foot">
        <span className="xp-bonus">+{item.xp || 8} XP bônus</span>
        {status === 'err' && (
          <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCw size={14} /> Tentar de novo</button>
        )}
      </div>
    </div>
  );
}

// ============================================================
// FLASHCARD — deck virável (útil pra vocabulário/Inglês)
// ============================================================
function Flashdeck({ item, onDone }) {
  const cards = item.cards || [];
  const [idx, setIdx] = useState(0);
  const [flip, setFlip] = useState(false);
  const [conhecidas, setConhecidas] = useState(new Set());
  const total = cards.length;
  const c = cards[idx];

  const proxima = (acertou) => {
    if (acertou) {
      setConhecidas(prev => new Set([...prev, idx]));
      Som.tocar('xp');
    }
    if (idx + 1 < total) { setIdx(i => i + 1); setFlip(false); }
    else if (acertou && conhecidas.size + 1 >= total) { Som.tocar('success'); onDone?.(); }
  };

  if (!c) return null;

  return (
    <div className="inter-card">
      <div className="head">
        <span className="tag">Flashcard · {idx + 1} de {total}</span>
        <span className="xp-bonus" style={{ marginLeft: 'auto' }}>+{item.xp || 6} XP bônus</span>
      </div>
      {item.prompt && <p className="prompt">{item.prompt}</p>}
      <div className="flashdeck">
        <div className={`flashcard ${flip ? 'flip' : ''}`} onClick={() => { setFlip(f => !f); Som.tocar('flip'); }}>
          <div className="flashcard-inner">
            <div className="flashcard-face front">{c.frente}</div>
            <div className="flashcard-face back">{c.verso}</div>
          </div>
        </div>
        <div className="flash-tools">
          <span className="pill">Clique no card pra virar</span>
        </div>
        <div style={{ display: 'flex', gap: 'var(--s-3)', marginTop: 'var(--s-3)' }}>
          <button className="btn btn-ghost" onClick={() => proxima(false)}>Revisar mais tarde</button>
          <button className="btn btn-primary" onClick={() => proxima(true)}><Sparkles size={14} /> Sei essa</button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SIM_PLANILHA — sandbox de planilha mini (preencher fórmula)
// ============================================================
function SimPlanilha({ item, onDone }) {
  const [valor, setValor] = useState('');
  const [status, setStatus] = useState(null);
  const cols = item.cols || ['A', 'B', 'C'];
  const linhas = item.linhas || [];
  const alvo = item.celulaAlvo || { col: 'C', linha: 2 };
  const verificar = () => {
    const v = (valor || '').trim().replace(/\s+/g, '').toUpperCase();
    const aceitas = (item.respostas || []).map(r => r.replace(/\s+/g, '').toUpperCase());
    const ok = aceitas.includes(v);
    setStatus(ok ? 'ok' : 'err'); Som.tocar(ok ? 'success' : 'error');
    if (ok) onDone?.();
  };
  const reset = () => { setValor(''); setStatus(null); };

  return (
    <div className={`inter-card ${status || ''}`}>
      <div className="head"><span className="tag">Planilha simulada · digite a fórmula</span></div>
      {item.prompt && <p className="prompt">{item.prompt}</p>}
      <div className="sim-grid" style={{ gridTemplateColumns: `40px repeat(${cols.length}, 1fr)` }}>
        <div className="cell head"></div>
        {cols.map(c => <div key={c} className="cell head">{c}</div>)}
        {linhas.map((row, li) => (
          <>
            <div key={`l${li}`} className="cell head">{li + 1}</div>
            {cols.map((c, ci) => {
              const ehAlvo = alvo.col === c && alvo.linha === li + 1;
              return (
                <div key={`${c}${li}`} className={`cell ${ehAlvo ? 'input' : ''}`}>
                  {ehAlvo ? (
                    <input value={valor} placeholder="=" onChange={e => setValor(e.target.value)} />
                  ) : (row[ci] ?? '')}
                </div>
              );
            })}
          </>
        ))}
      </div>
      <Feedback status={status} certoMsg={item.feedback_ok} erroMsg={item.feedback_err} />
      <div className="inter-foot">
        <span className="xp-bonus">+{item.xp || 15} XP bônus</span>
        {status === 'err' ? (
          <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCw size={14} /> Limpar</button>
        ) : status !== 'ok' ? (
          <button className="btn btn-primary btn-sm" onClick={verificar} disabled={!valor.trim()}
            style={{ opacity: valor.trim() ? 1 : .5 }}>Calcular</button>
        ) : null}
      </div>
    </div>
  );
}

// ============================================================
// SIM_CHAT — conversa simulada com mensagens; usuário escolhe ação
// ============================================================
function SimChat({ item, onDone }) {
  const mensagens = item.mensagens || []; // [{de:'outro'|'eu'|'alerta', txt}]
  const [escolha, setEscolha] = useState(null);
  const [status, setStatus] = useState(null);
  const verificar = () => {
    const ok = escolha === item.resposta;
    setStatus(ok ? 'ok' : 'err'); Som.tocar(ok ? 'success' : 'error');
    if (ok) onDone?.();
  };
  const reset = () => { setEscolha(null); setStatus(null); };

  return (
    <div className={`inter-card ${status || ''}`}>
      <div className="head"><span className="tag">Conversa simulada · você decide</span></div>
      {item.prompt && <p className="prompt">{item.prompt}</p>}
      <div className="chat-sim">
        {mensagens.map((m, i) => (
          <div key={i} className={`chat-bubble ${m.de}`}>{m.txt}</div>
        ))}
      </div>
      <div className="choose-grid" style={{ marginTop: 'var(--s-3)' }}>
        {(item.acoes || []).map((a, i) => {
          let cls = '';
          if (status === 'ok' && i === item.resposta) cls = 'right';
          else if (status === 'err' && i === escolha) cls = 'wrong';
          else if (escolha === i) cls = 'sel';
          return (
            <button key={i} className={`choose-opt ${cls}`}
              onClick={() => status !== 'ok' && setEscolha(i)}>
              <span className="letra">{LETRAS[i]}</span><span>{a}</span>
            </button>
          );
        })}
      </div>
      <Feedback status={status} certoMsg={item.feedback_ok} erroMsg={item.feedback_err} />
      <div className="inter-foot">
        <span className="xp-bonus">+{item.xp || 12} XP bônus</span>
        {status === 'err' ? (
          <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCw size={14} /> Reescolher</button>
        ) : status !== 'ok' ? (
          <button className="btn btn-primary btn-sm" disabled={escolha === null}
            style={{ opacity: escolha !== null ? 1 : .5 }} onClick={verificar}>Decidir</button>
        ) : null}
      </div>
    </div>
  );
}

// ============================================================
// TIMER_RING — anel SVG usado pelo time_pressure
// ============================================================
function TimerRing({ total, restante }) {
  const C = 2 * Math.PI * 24;
  const pct = Math.max(0, restante / total);
  const offset = C * (1 - pct);
  const urgente = restante <= 3;
  return (
    <div className={`timer-ring ${urgente ? 'urgente' : ''}`}>
      <svg width="56" height="56" viewBox="0 0 56 56">
        <circle className="track" cx="28" cy="28" r="24" />
        <circle className="fill" cx="28" cy="28" r="24"
          strokeDasharray={C} strokeDashoffset={offset} />
      </svg>
      <span className="num">{Math.max(0, Math.ceil(restante))}</span>
    </div>
  );
}

// ============================================================
// TIME_PRESSURE — decida em N segundos (golpe/seguro / sim/não / qualquer 2-3 opções)
// ============================================================
function TimePressure({ item, onDone }) {
  const total = item.segundos || 10;
  const [restante, setRestante] = useState(total);
  const [escolha, setEscolha] = useState(null);
  const [status, setStatus] = useState(null);
  const startRef = useRef(Date.now());
  useEffect(() => {
    if (status) return;
    const id = setInterval(() => {
      const passado = (Date.now() - startRef.current) / 1000;
      const r = total - passado;
      if (r <= 0) { setRestante(0); setStatus('err'); Som.tocar('error'); clearInterval(id); }
      else setRestante(r);
    }, 100);
    return () => clearInterval(id);
  }, [status, total]);
  const responder = (i) => {
    if (status) return;
    setEscolha(i);
    const ok = i === item.resposta;
    setStatus(ok ? 'ok' : 'err');
    Som.tocar(ok ? 'success' : 'error');
    if (ok) onDone?.();
  };
  const reset = () => { startRef.current = Date.now(); setRestante(total); setEscolha(null); setStatus(null); };
  return (
    <div className={`inter-card ${status || ''}`}>
      <div className="head">
        <span className="tag" style={{ background: 'rgba(224,122,58,.15)', color: '#b25420', borderColor: 'rgba(224,122,58,.4)' }}>
          <Timer size={11} style={{ verticalAlign: 'text-bottom', marginRight: 4 }} />
          Decida em {total}s
        </span>
        <div style={{ marginLeft: 'auto' }}><TimerRing total={total} restante={restante} /></div>
      </div>
      {item.cenario && (
        <div className="tx-base" style={{ borderLeftColor: 'var(--streak)' }}>
          <div className="lbl" style={{ color: 'var(--streak)' }}>O que apareceu</div>
          <span>{item.cenario}</span>
        </div>
      )}
      <p className="prompt">{item.prompt}</p>
      <div className="tf-row">
        {(item.opcoes || []).map((o, i) => {
          let cls = '';
          if (status === 'ok' && i === item.resposta) cls = 'right';
          else if (status === 'err' && i === escolha) cls = 'wrong';
          else if (status === 'err' && i === item.resposta) cls = 'right';
          else if (escolha === i) cls = 'sel';
          return <button key={i} className={`choose-opt ${cls}`} onClick={() => responder(i)}>{o}</button>;
        })}
      </div>
      <Feedback status={status}
        certoMsg={item.feedback_ok || 'Reflexo bom. Em 10 segundos você lê o sinal.'}
        erroMsg={escolha === null ? 'O tempo acabou — sem pressa nas próximas: leia o nome, leia o link.' : item.feedback_err} />
      <div className="inter-foot">
        <span className="xp-bonus">+{item.xp || 15} XP bônus</span>
        {status === 'err' && (
          <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCw size={14} /> Outra rodada</button>
        )}
      </div>
    </div>
  );
}

// ============================================================
// QUICK_COMBO — 5 perguntas rápidas em sequência sem sair da tela
// ============================================================
function QuickCombo({ item, onDone }) {
  const perguntas = item.perguntas || [];
  const [idx, setIdx] = useState(0);
  const [resultado, setResultado] = useState([]); // [ok|err]
  const [sel, setSel] = useState(null);
  const total = perguntas.length;
  const fim = idx >= total;

  if (fim) {
    const acertos = resultado.filter(r => r === 'ok').length;
    const erros = total - acertos;
    const xpGanho = acertos * (item.xpPorAcerto || 4);
    const bom = acertos >= Math.ceil(total * 0.6);
    return (
      <div className={`inter-card ${bom ? 'ok' : 'err'}`}>
        <div className="head"><span className="tag">Combo concluído</span></div>
        <div className="combo-dots">
          {resultado.map((r, i) => <span key={i} className={r} />)}
        </div>
        <div className="combo-resumo">
          <div className="stat acertos"><div className="num">{acertos}</div><div className="lbl">Acertos</div></div>
          <div className="stat erros"><div className="num">{erros}</div><div className="lbl">A revisar</div></div>
          <div className="stat xp"><div className="num">+{xpGanho}</div><div className="lbl">XP bônus</div></div>
        </div>
        <Feedback status={bom ? 'ok' : 'err'}
          certoMsg={item.feedback_ok || `${acertos} de ${total}. Você tem ritmo.`}
          erroMsg={item.feedback_err || `${acertos} de ${total}. Volte na Aula e tente o combo de novo.`} />
        <div className="inter-foot">
          <span className="xp-bonus">+{xpGanho} XP somados</span>
          <button className="btn btn-ghost btn-sm" onClick={() => { setIdx(0); setResultado([]); setSel(null); }}>
            <RotateCw size={14} /> Refazer combo
          </button>
        </div>
      </div>
    );
  }

  const q = perguntas[idx];
  const responder = (i) => {
    if (sel !== null) return;
    setSel(i);
    const ok = i === q.resposta;
    Som.tocar(ok ? 'success' : 'error');
    setTimeout(() => {
      setResultado(r => [...r, ok ? 'ok' : 'err']);
      setSel(null);
      const novoIdx = idx + 1;
      setIdx(novoIdx);
      if (novoIdx >= total) onDone?.();
    }, 700);
  };

  return (
    <div className="inter-card">
      <div className="head">
        <span className="tag">Combo rápido · {idx + 1} de {total}</span>
        <span className="xp-bonus" style={{ marginLeft: 'auto' }}>+{item.xpPorAcerto || 4} por acerto</span>
      </div>
      <div className="combo-dots">
        {Array.from({ length: total }).map((_, i) => (
          <span key={i} className={resultado[i] || (i === idx ? 'atual' : '')} />
        ))}
      </div>
      <p className="prompt"><strong>{q.prompt}</strong></p>
      <div className="tf-row">
        {(q.opcoes || []).map((o, i) => {
          let cls = '';
          if (sel !== null && i === q.resposta) cls = 'right';
          else if (sel === i && i !== q.resposta) cls = 'wrong';
          return <button key={i} className={`choose-opt ${cls}`} disabled={sel !== null} onClick={() => responder(i)}>{o}</button>;
        })}
      </div>
    </div>
  );
}

// ============================================================
// MEMORY_PAIRS — jogo da memória (clique pra virar duas)
// ============================================================
function MemoryPairs({ item, onDone }) {
  const pares = item.pares || []; // [{a, b}]
  const cards = useMemo(() => {
    const arr = [];
    pares.forEach((p, i) => {
      arr.push({ id: `a${i}`, par: i, face: p.a });
      arr.push({ id: `b${i}`, par: i, face: p.b });
    });
    // embaralha
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [item]);
  const [viradas, setViradas] = useState(new Set());
  const [matched, setMatched] = useState(new Set());
  const [travado, setTravado] = useState(false);

  const clicar = (i) => {
    if (travado) return;
    if (viradas.has(i) || matched.has(i)) return;
    const nov = new Set([...viradas, i]);
    setViradas(nov);
    if (nov.size === 2) {
      setTravado(true);
      const [a, b] = [...nov];
      const ok = cards[a].par === cards[b].par;
      Som.tocar(ok ? 'success' : 'flip');
      setTimeout(() => {
        if (ok) {
          const m = new Set([...matched, a, b]);
          setMatched(m);
          if (m.size === cards.length) { Som.tocar('xp'); onDone?.(); }
        }
        setViradas(new Set());
        setTravado(false);
      }, 800);
    } else {
      Som.tocar('flip');
    }
  };

  return (
    <div className="inter-card">
      <div className="head">
        <span className="tag">Memória com propósito</span>
        <span style={{ marginLeft: 'auto', fontFamily: 'var(--f-mono)', fontSize: 12, color: 'var(--ink-mute)' }}>
          {matched.size / 2}/{pares.length} pares
        </span>
      </div>
      {item.prompt && <p className="prompt">{item.prompt}</p>}
      <div className="mem-grid">
        {cards.map((c, i) => {
          const v = viradas.has(i) || matched.has(i);
          return (
            <div key={c.id}
              className={`mem-card ${v ? 'viradacard' : ''} ${matched.has(i) ? 'matched' : ''}`}
              onClick={() => clicar(i)}>
              <div className="mem-card-inner">
                <div className="mem-face back">?</div>
                <div className="mem-face front">{c.face}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="inter-foot">
        <span className="xp-bonus">+{item.xp || 12} XP ao completar</span>
        <button className="btn btn-ghost btn-sm" onClick={() => { setViradas(new Set()); setMatched(new Set()); }}>
          <RotateCw size={14} /> Reembaralhar
        </button>
      </div>
    </div>
  );
}

// ============================================================
// TRANSFORM — entrada → saída controlada (frase informal → formal, senha fraca → forte)
// ============================================================
function Transform({ item, onDone }) {
  const [valor, setValor] = useState(item.valorInicial || '');
  const [status, setStatus] = useState(null);
  const criterios = item.criterios || []; // [{ id, label, regex?, fn? }]
  const avaliar = (v) => criterios.map(c => {
    if (c.regex) return new RegExp(c.regex).test(v);
    if (c.minLen) return v.length >= c.minLen;
    if (c.maxLen) return v.length <= c.maxLen;
    if (c.contem) return v.toLowerCase().includes(String(c.contem).toLowerCase());
    if (c.naoContem) return !v.toLowerCase().includes(String(c.naoContem).toLowerCase());
    return false;
  });
  const passes = avaliar(valor);
  const todosOk = criterios.length > 0 && passes.every(Boolean);
  const verificar = () => {
    if (todosOk) { setStatus('ok'); Som.tocar('success'); onDone?.(); }
    else { setStatus('err'); Som.tocar('error'); }
  };
  return (
    <div className={`inter-card ${status || ''}`}>
      <div className="head"><span className="tag">Transforme · {item.titulo_curto || 'reescreva com critérios'}</span></div>
      {item.prompt && <p className="prompt">{item.prompt}</p>}
      <div className="tx-box">
        {item.base && (
          <div className="tx-base">
            <div className="lbl">Antes</div>
            <span>{item.base}</span>
          </div>
        )}
        <div>
          <div className="lbl" style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--sage)', fontWeight: 700, marginBottom: 4 }}>
            Depois — sua versão
          </div>
          <textarea className="tx-input" value={valor}
            onChange={e => setValor(e.target.value)}
            placeholder={item.placeholder || 'Escreva aqui...'} />
        </div>
        <div className="tx-criterios">
          {criterios.map((c, i) => (
            <span key={i} className={`tx-criterio ${passes[i] ? 'ok' : 'miss'}`}>{c.label}</span>
          ))}
        </div>
      </div>
      <Feedback status={status} certoMsg={item.feedback_ok || 'Bateu todos os critérios. Bem feito.'}
        erroMsg={item.feedback_err || 'Falta marcar todos os critérios. Olha a checklist verde.'} />
      <div className="inter-foot">
        <span className="xp-bonus">+{item.xp || 12} XP bônus</span>
        {status !== 'ok' && (
          <button className="btn btn-primary btn-sm" disabled={!todosOk}
            style={{ opacity: todosOk ? 1 : .5 }} onClick={verificar}>Conferir</button>
        )}
      </div>
    </div>
  );
}

// ============================================================
// CALC_LIVE — ajustar valores até bater a meta (juros, desconto, fórmula)
// ============================================================
function CalcLive({ item, onDone }) {
  const variaveis = item.variaveis || []; // [{ id, label, min, max, step, init, sufixo? }]
  const [vals, setVals] = useState(() => {
    const o = {};
    variaveis.forEach(v => o[v.id] = v.init ?? v.min ?? 0);
    return o;
  });
  const [status, setStatus] = useState(null);

  // Avalia fórmula em forma SEGURA (apenas variáveis numéricas + operadores)
  const calcular = () => {
    try {
      const expr = (item.formula || '').replace(/[a-zA-Z_]+/g, (m) => Number(vals[m] ?? 0));
      // só permite dígitos/operadores
      if (!/^[\d+\-*/().\s,]+$/.test(expr)) return NaN;
      // eslint-disable-next-line no-new-func
      return Function(`"use strict"; return (${expr.replace(/,/g, '.')});`)();
    } catch { return NaN; }
  };
  const resultado = calcular();
  const meta = item.meta;
  const tol = item.tolerancia ?? 0.5;
  const acertou = Number.isFinite(resultado) && Math.abs(resultado - meta) <= tol;

  useEffect(() => {
    if (acertou && status !== 'ok') {
      setStatus('ok'); Som.tocar('success'); onDone?.();
    }
  }, [acertou, status, onDone]);

  return (
    <div className={`inter-card ${status || ''}`}>
      <div className="head"><span className="tag">Ajuste até bater a meta</span></div>
      {item.prompt && <p className="prompt">{item.prompt}</p>}
      <div className="calc-card">
        {variaveis.map(v => (
          <div key={v.id} className="calc-row">
            <span className="lbl">{v.label}</span>
            <input type="range" min={v.min} max={v.max} step={v.step || 1}
              value={vals[v.id]}
              onChange={e => setVals({ ...vals, [v.id]: Number(e.target.value) })} />
            <span className="val">{vals[v.id]}{v.sufixo || ''}</span>
          </div>
        ))}
      </div>
      <div className={`calc-result ${acertou ? 'bom' : ''}`}>
        <div>
          <div className="meta">{item.labelResultado || 'Resultado'}</div>
          <div className="big">{Number.isFinite(resultado) ? (item.formatResultado === 'reais'
            ? `R$ ${resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
            : `${resultado.toFixed(2)}${item.sufixoResultado || ''}`) : '—'}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="meta">Meta</div>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: 14, fontWeight: 700, color: 'var(--ink-soft)' }}>
            {item.formatResultado === 'reais'
              ? `R$ ${meta.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
              : `${meta}${item.sufixoResultado || ''}`}
            <span style={{ color: 'var(--ink-mute)', fontWeight: 400 }}> ±{tol}</span>
          </div>
        </div>
      </div>
      <Feedback status={status} certoMsg={item.feedback_ok || 'Ajustou direitinho. Bom feeling de número.'} />
      <div className="inter-foot">
        <span className="xp-bonus">+{item.xp || 15} XP bônus</span>
      </div>
    </div>
  );
}

// ============================================================
// SCENARIO_BRANCH — escolha sua aventura (2-3 nós + final)
// ============================================================
function ScenarioBranch({ item, onDone }) {
  const nodos = item.nodos || {}; // { id: { narrativa, opcoes:[{txt, prox, ok?}], final?:{titulo,texto,bom} } }
  const [atual, setAtual] = useState(item.inicio || 'start');
  const [historico, setHistorico] = useState([]);
  const nodo = nodos[atual];

  if (!nodo) return null;

  if (nodo.final) {
    const bom = !!nodo.final.bom;
    return (
      <div className="inter-card">
        <div className="head"><span className="tag">Final · sua decisão</span></div>
        <div className={`branch-final ${bom ? '' : 'ruim'}`}>
          <h4>{nodo.final.titulo}</h4>
          <p style={{ color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.5 }}>{nodo.final.texto}</p>
        </div>
        <Feedback status={bom ? 'ok' : 'err'}
          certoMsg={nodo.final.feedback || 'Você fez as escolhas certas.'}
          erroMsg={nodo.final.feedback || 'Esse final foi um susto. Refaça e escolha diferente nos pontos críticos.'} />
        <div className="inter-foot">
          <span className="xp-bonus">+{item.xp || 18} XP bônus</span>
          <button className="btn btn-ghost btn-sm" onClick={() => {
            setAtual(item.inicio || 'start'); setHistorico([]);
          }}><RotateCw size={14} /> Recomeçar a história</button>
        </div>
        {(() => {
          if (bom) { Som.tocar('success'); onDone?.(); }
          else Som.tocar('error');
          return null;
        })()}
      </div>
    );
  }

  const escolher = (op) => {
    setHistorico(h => [...h, atual]);
    setAtual(op.prox);
    Som.tocar('step');
  };

  return (
    <div className="inter-card">
      <div className="head">
        <span className="tag">Escolha sua decisão</span>
        <span style={{ marginLeft: 'auto', fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--ink-mute)' }}>
          Cena {historico.length + 1}
        </span>
      </div>
      <div className="branch-trilho" aria-hidden>
        {Array.from({ length: item.totalCenas || 4 }).map((_, i) => (
          <span key={i} className={i <= historico.length ? 'feito' : ''} />
        ))}
      </div>
      <div className="branch-node">
        <div className="narrativa">{nodo.narrativa}</div>
        <div className="choose-grid">
          {(nodo.opcoes || []).map((op, i) => (
            <button key={i} className="choose-opt" onClick={() => escolher(op)}>
              <span className="letra">{LETRAS[i]}</span>
              <span>{op.txt}</span>
              <ArrowRight size={14} style={{ marginLeft: 'auto', color: 'var(--ink-mute)' }} />
            </button>
          ))}
        </div>
      </div>
      <div className="inter-foot">
        <span className="xp-bonus">+{item.xp || 18} XP no final bom</span>
      </div>
    </div>
  );
}

// ============================================================
// DRAG_ZONES — arrastar itens pra categorias (click-to-zone, sem drag real)
// ============================================================
function DragZones({ item, onDone }) {
  const zonas = item.zonas || []; // [{ id, titulo, desc? }]
  const itensIni = item.itens || []; // [{ txt, zona }]
  const [selIdx, setSelIdx] = useState(null);
  const [alocacao, setAlocacao] = useState({}); // { itemIdx: zonaId }
  const [status, setStatus] = useState(null);
  const restantes = itensIni.map((_, i) => i).filter(i => alocacao[i] === undefined);
  const todosAlocados = restantes.length === 0;

  const colocarNaZona = (zonaId) => {
    if (status === 'ok' || selIdx === null) return;
    setAlocacao(a => ({ ...a, [selIdx]: zonaId }));
    setSelIdx(null);
    Som.tocar('click');
  };
  const tirar = (i) => {
    if (status === 'ok') return;
    setAlocacao(a => { const c = { ...a }; delete c[i]; return c; });
  };
  const verificar = () => {
    const ok = itensIni.every((it, i) => alocacao[i] === it.zona);
    setStatus(ok ? 'ok' : 'err');
    Som.tocar(ok ? 'success' : 'error');
    if (ok) onDone?.();
  };
  const reset = () => { setAlocacao({}); setSelIdx(null); setStatus(null); };

  return (
    <div className={`inter-card ${status || ''}`}>
      <div className="head"><span className="tag">Categorize</span></div>
      {item.prompt && <p className="prompt">{item.prompt}</p>}
      <div className="itens-disponiveis">
        {restantes.length === 0 && status !== 'ok' && (
          <span style={{ color: 'var(--ink-mute)', fontSize: 13 }}>Todos categorizados — confira abaixo.</span>
        )}
        {restantes.map(i => (
          <button key={i} className={`item-livre ${selIdx === i ? 'sel' : ''}`}
            onClick={() => setSelIdx(s => s === i ? null : i)}>
            {itensIni[i].txt}
          </button>
        ))}
      </div>
      <div className="zones">
        {zonas.map(z => {
          const dentro = itensIni
            .map((it, i) => ({ it, i }))
            .filter(({ i }) => alocacao[i] === z.id);
          let cls = '';
          if (status === 'ok') cls = 'right';
          else if (status === 'err') {
            const tudoCerto = dentro.every(({ it }) => it.zona === z.id) && dentro.length > 0;
            cls = tudoCerto ? 'right' : (dentro.length > 0 ? 'wrong' : '');
          } else if (selIdx !== null) cls = 'target';
          return (
            <div key={z.id} className={`zone ${cls}`} onClick={() => colocarNaZona(z.id)}>
              <span className="titulo">{z.titulo}</span>
              {z.desc && <span className="desc">{z.desc}</span>}
              <div className="itens">
                {dentro.map(({ it, i }) => (
                  <span key={i} className="item-zona"
                    onClick={(e) => { e.stopPropagation(); tirar(i); }}>{it.txt} ×</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <Feedback status={status} certoMsg={item.feedback_ok} erroMsg={item.feedback_err} />
      <div className="inter-foot">
        <span className="xp-bonus">+{item.xp || 12} XP bônus</span>
        {status === 'err' ? (
          <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCw size={14} /> Recomeçar</button>
        ) : status !== 'ok' ? (
          <button className="btn btn-primary btn-sm" disabled={!todosAlocados}
            style={{ opacity: todosAlocados ? 1 : .5 }} onClick={verificar}>Conferir</button>
        ) : null}
      </div>
    </div>
  );
}

// ============================================================
// DISPATCHER — recebe `interacoes` e renderiza tudo
// ============================================================
const TIPOS = {
  choose: ChooseInteracao,
  multi: ChooseInteracao,
  true_false: ChooseInteracao,
  fill_blank: FillBlank,
  drag_match: DragMatch,
  sort_order: SortOrder,
  find_error: FindError,
  hotspot: Hotspot,
  flashcard: Flashdeck,
  sim_planilha: SimPlanilha,
  sim_chat: SimChat,
  // v6 — novos
  time_pressure: TimePressure,
  quick_combo: QuickCombo,
  memory_pairs: MemoryPairs,
  transform: Transform,
  calc_live: CalcLive,
  scenario_branch: ScenarioBranch,
  drag_zones: DragZones,
};

export default function Interacoes({ interacoes = [], onAcerto }) {
  const [feitos, setFeitos] = useState(new Set());

  if (!interacoes.length) return null;

  return (
    <div className="interacoes-wrap">
      <div className="inter-progress" aria-label="Progresso dos exercícios">
        {interacoes.map((_, i) => (
          <span key={i} className={`seg ${feitos.has(i) ? 'feito' : i === feitos.size ? 'atual' : ''}`} />
        ))}
      </div>
      {interacoes.map((it, i) => {
        const C = TIPOS[it.tipo];
        if (!C) return (
          <div key={i} className="inter-card">
            <div className="head"><span className="tag">Exercício</span></div>
            <p className="prompt">Tipo "{it.tipo}" não suportado ainda.</p>
          </div>
        );
        return (
          <C key={i} item={it}
            onDone={() => {
              setFeitos(prev => new Set([...prev, i]));
              onAcerto?.(it.xp || 5);
            }}
          />
        );
      })}
    </div>
  );
}
