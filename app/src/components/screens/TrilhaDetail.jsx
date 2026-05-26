import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Lock, CheckCircle2, Play, Trophy } from 'lucide-react';
import Icone from '../subComponents/Icone.jsx';
import { TRILHAS, MODULOS, MISSOES } from '../../data/estrutura.js';
import { useApp } from '../subComponents/AppContext.jsx';
import { trilhaTemConteudo } from '../../data/conteudo/index.js';
import '../../assets/css/TrilhaDetail.css';

export default function TrilhaDetail({ ativaResp }) {
  const { trilhaId } = useParams();
  const { progresso } = useApp();
  const trilha = TRILHAS.find(t => t.id === trilhaId);
  if (!trilha) return <Navigate to="/modulos" replace />;
  const modulo = MODULOS.find(m => m.id === trilha.modulo);
  const missoes = MISSOES[trilhaId] || [];
  const feitas = new Set(progresso.missoesCompletas);
  const temConteudo = trilhaTemConteudo(trilhaId);

  let primeiroPendente = null;
  for (const m of missoes) {
    if (!feitas.has(`${trilhaId}-${m.id}`)) { primeiroPendente = m.id; break; }
  }

  return (
    <main className="screen">
          <Link to={`/modulo/${trilha.modulo}`} className="btn btn-ghost btn-sm" style={{ marginBottom: 'var(--s-4)' }}>
            <ArrowLeft size={14} /> {modulo?.nome}
          </Link>

          <header style={{ marginBottom: 'var(--s-7)', display: 'flex', gap: 'var(--s-5)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{
              width: 84, height: 84, borderRadius: 'var(--r-lg)',
              background: trilha.cor || modulo.cor, color: '#fff',
              display: 'grid', placeItems: 'center',
            }}>
              <Icone nome={trilha.iconeNome} size={40} />
            </div>
            <div style={{ flex: 1, minWidth: 260 }}>
              <span className="t-kicker">Trilha {String(trilha.ordem).padStart(2, '0')} · {missoes.length} missões</span>
              <h1 style={{ fontSize: 'clamp(28px,4.5vw,46px)', margin: 'var(--s-2) 0 var(--s-2)' }}>{trilha.nome}</h1>
              <p style={{ color: 'var(--ink-soft)' }}>{trilha.desc}</p>
            </div>
          </header>

          {!temConteudo && (
            <div className="panel" style={{ marginBottom: 'var(--s-5)', borderStyle: 'dashed' }}>
              <strong>Conteúdo em produção.</strong> Os títulos das missões já estão definidos, mas o material rico está sendo escrito. Você pode espiar a lista abaixo.
            </div>
          )}

          <section className="trilha-missoes">
            {missoes.map((m, idx) => {
              const id = `${trilhaId}-${m.id}`;
              const feita = feitas.has(id);
              const podeFazer = temConteudo && (feita || m.id === primeiroPendente || feitas.has(`${trilhaId}-${m.id - 1}`));
              const projeto = idx === missoes.length - 1;
              return (
                <Link key={m.id}
                  to={podeFazer ? `/missao/${trilhaId}/${m.id}` : '#'}
                  onClick={(e) => { if (!podeFazer) e.preventDefault(); }}
                  className={`trilha-item ${podeFazer ? '' : 'disabled'} ${feita ? 'feita' : ''} ${m.id === primeiroPendente ? 'atual' : ''}`}
                >
                  <div className="num-icon">
                    {feita ? <CheckCircle2 size={20} /> : (podeFazer ? m.id : <Lock size={16} />)}
                  </div>
                  <div className="info">
                    <div className="title-row">
                      <strong>{projeto ? 'Projeto: ' : ''}{m.titulo}</strong>
                      {projeto && <span className="chip chip-honey"><Trophy size={11} /> projeto</span>}
                    </div>
                    <div className="desc">{m.desc}</div>
                    <div className="meta">
                      <span className="chip"><Clock size={11} /> {m.tempo} min</span>
                      <span className="chip chip-honey">+{m.xp} XP</span>
                      {podeFazer && !feita && <span className="play"><Play size={14} /> Começar</span>}
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>
        </main>
  );
}
