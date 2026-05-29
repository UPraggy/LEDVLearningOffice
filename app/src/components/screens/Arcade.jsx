/* Modo Arcade Diário — 3 microdesafios encadeados, +40 XP no fim. */
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, ArrowLeft, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { useApp } from '../subComponents/AppContext.jsx';
import GlobalVar from '../subComponents/GlobalVar.jsx';
import Som from '../subComponents/Som.jsx';
import { ARCADE_POOL } from '../../data/arcade-pool.js';
import { filtrarPorNivel } from '../../data/daily-utils.js';
import '../../assets/css/Arcade.css';

function pegarSessao(seed, poolBase = ARCADE_POOL) {
  // Sorteia 3 itens determinísticos pelo dia (mesmos pra todos no dia)
  const tipos = ['decida_rapido', 'acha_o_erro', 'verdade_mito'];
  const out = [];
  for (const tipo of tipos) {
    const pool = poolBase.filter(p => p.tipo === tipo);
    if (!pool.length) continue;
    const idx = Math.abs(seed + tipo.charCodeAt(0)) % pool.length;
    out.push(pool[idx]);
    seed = (seed * 31) >>> 0;
  }
  return out;
}

export default function Arcade() {
  const { progresso, bonusXP, atualizar } = useApp();
  const navigate = useNavigate();
  const hoje = GlobalVar.diaAtualFunc();
  const seed = Math.abs([...hoje].reduce((s, c) => (s * 31 + c.charCodeAt(0)) >>> 0, 0));
  const poolNivel = useMemo(() => filtrarPorNivel(ARCADE_POOL, progresso), [progresso]);
  const sessao = useMemo(() => pegarSessao(seed, poolNivel), [seed, poolNivel]);

  const arcEstado = (progresso.modoArcade || {})[hoje] || { resolvido: false, acertos: 0 };
  const [idx, setIdx] = useState(0);
  const [escolha, setEscolha] = useState(null);
  const [resultado, setResultado] = useState([]);   // [ok|err]
  const [fim, setFim] = useState(arcEstado.resolvido);

  if (fim) {
    const acertos = arcEstado.acertos || resultado.filter(r => r === 'ok').length;
    return (
      <div className="screen">
        <button className="back" onClick={() => navigate('/')}><ArrowLeft size={14} /> Início</button>
        <div className="arcade-final">
          <Zap size={48} color="var(--streak)" />
          <span className="kicker">Sessão concluída</span>
          <span className="xpwon">+40 XP</span>
          <h2>Você acertou {acertos} de 3.</h2>
          <p style={{ color: 'var(--ink-soft)', maxWidth: '40ch' }}>
            Ofensiva atualizada para hoje. Volte amanhã para a próxima rodada.
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>Voltar pra Home</button>
        </div>
      </div>
    );
  }

  const q = sessao[idx];
  if (!q) return null;

  const responder = (val) => {
    if (escolha !== null) return;
    setEscolha(val);
    let ok = false;
    if (q.tipo === 'decida_rapido') ok = val === q.resposta;
    else if (q.tipo === 'verdade_mito') ok = val === q.resposta;
    else if (q.tipo === 'acha_o_erro') ok = val === q.resposta;
    Som.tocar(ok ? 'success' : 'error');
    setResultado(r => [...r, ok ? 'ok' : 'err']);
  };

  const proxima = () => {
    if (idx + 1 < sessao.length) {
      setIdx(i => i + 1);
      setEscolha(null);
    } else {
      const acertos = resultado.filter(r => r === 'ok').length;
      const novo = { ...(progresso.modoArcade || {}), [hoje]: { resolvido: true, acertos } };
      atualizar({ modoArcade: novo });
      bonusXP(40);
      Som.tocar('complete');
      setFim(true);
    }
  };

  return (
    <div className="screen">
      <button className="back" onClick={() => navigate('/')}><ArrowLeft size={14} /> Início</button>
      <div className="hello">
        <div>
          <div className="kicker"><Zap size={11} style={{ verticalAlign: '-2px', marginRight: 4 }} /> Arcade Diário</div>
          <h1 className="bighi">Desafio <em>{idx + 1}</em> de 3.</h1>
        </div>
      </div>

      <div className="arcade-session">
        <div className="arcade-pips">
          {sessao.map((_, i) => (
            <span key={i} className={resultado[i] || (i === idx ? 'atual' : '')} />
          ))}
        </div>

        <div className="arcade-q">
          <span className="tema">{q.tema?.toUpperCase()} · {q.tipo.replace(/_/g, ' ')}</span>
          <h3>{q.pergunta}</h3>

          {q.tipo === 'decida_rapido' && (
            <div className="arcade-opts">
              {q.opcoes.map((op, i) => {
                let cls = '';
                if (escolha !== null) {
                  if (i === q.resposta) cls = 'right';
                  else if (i === escolha) cls = 'wrong';
                }
                return (
                  <button key={i} className={`arcade-opt ${cls}`} onClick={() => responder(i)} disabled={escolha !== null && !cls}>
                    <span className="letra">{i === 0 ? 'A' : 'B'}</span>
                    <span>{op}</span>
                  </button>
                );
              })}
            </div>
          )}

          {q.tipo === 'verdade_mito' && (
            <div className="arcade-opts" style={{ gridTemplateColumns: '1fr 1fr' }}>
              {['verdade', 'mito'].map((op, i) => {
                let cls = '';
                if (escolha !== null) {
                  if (op === q.resposta) cls = 'right';
                  else if (op === escolha) cls = 'wrong';
                }
                return (
                  <button key={op} className={`arcade-opt ${cls}`} onClick={() => responder(op)} disabled={escolha !== null && !cls}>
                    <span className="letra">{i === 0 ? 'V' : 'M'}</span>
                    <span style={{ textTransform: 'capitalize' }}>{op}</span>
                  </button>
                );
              })}
            </div>
          )}

          {q.tipo === 'acha_o_erro' && (
            <>
              <pre className="find-error-code"><code>{q.codigo}</code></pre>
              <div className="find-error-options arcade-opts">
                {q.opcoes.map((op, i) => {
                  let cls = '';
                  if (escolha !== null) {
                    if (i === q.resposta) cls = 'right';
                    else if (i === escolha) cls = 'wrong';
                  }
                  return (
                    <button key={i} className={`arcade-opt ${cls}`} onClick={() => responder(i)} disabled={escolha !== null && !cls}>
                      <span className="letra">{['A', 'B', 'C', 'D'][i]}</span>
                      <span>{op}</span>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {escolha !== null && (() => {
            const ok = resultado[idx] === 'ok';
            return (
              <div className={`arcade-feedback ${ok ? 'ok' : ''}`}>
                {ok ? <CheckCircle2 size={16} style={{ verticalAlign: '-3px', marginRight: 6 }} />
                    : <XCircle size={16} style={{ verticalAlign: '-3px', marginRight: 6 }} />}
                {ok ? q.feedback_ok : q.feedback_err}
              </div>
            );
          })()}
        </div>

        {escolha !== null && (
          <button className="btn btn-primary btn-lg" onClick={proxima} style={{ alignSelf: 'center' }}>
            {idx + 1 < sessao.length ? 'Próximo' : 'Finalizar'} <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
