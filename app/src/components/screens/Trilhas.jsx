import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Lock, CheckCircle2 } from 'lucide-react';
import Icone from '../subComponents/Icone.jsx';
import { MODULOS, TRILHAS, MISSOES } from '../../data/estrutura.js';
import { useApp } from '../subComponents/AppContext.jsx';
import { trilhaTemConteudo } from '../../data/conteudo/index.js';

export default function Trilhas({ ativaResp }) {
  const { modId } = useParams();
  const { progresso } = useApp();
  const modulo = MODULOS.find(m => m.id === modId);
  if (!modulo) return <Navigate to="/modulos" replace />;

  const trilhas = TRILHAS.filter(t => t.modulo === modId).sort((a, b) => a.ordem - b.ordem);
  const feitas = new Set(progresso.missoesCompletas);

  return (
    <main className="screen">
          <Link to="/modulos" className="btn btn-ghost btn-sm" style={{ marginBottom: 'var(--s-4)' }}>
            <ArrowLeft size={14} /> Módulos
          </Link>

          <header style={{ marginBottom: 'var(--s-7)', display: 'flex', alignItems: 'flex-start', gap: 'var(--s-5)', flexWrap: 'wrap' }}>
            <div style={{
              width: 84, height: 84, borderRadius: 'var(--r-lg)',
              background: modulo.cor, color: '#fff',
              display: 'grid', placeItems: 'center', flexShrink: 0,
            }}>
              <Icone nome="Layers" size={36} />
            </div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <span className="t-kicker">{modulo.subtitulo}</span>
              <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', margin: 'var(--s-2) 0 var(--s-3)' }}>{modulo.nome}</h1>
              <p style={{ color: 'var(--ink-soft)', maxWidth: '60ch' }}>{modulo.desc}</p>
            </div>
          </header>

          <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px,1fr))' }}>
            {trilhas.map((t) => {
              const missoes = MISSOES[t.id] || [];
              const totalM = missoes.length;
              const feitosM = missoes.filter(m => feitas.has(`${t.id}-${m.id}`)).length;
              const pct = totalM ? Math.round(feitosM / totalM * 100) : 0;
              const concluida = pct === 100;
              const temConteudo = trilhaTemConteudo(t.id);
              return (
                <Link key={t.id} to={`/trilha/${t.id}`}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--r-lg)',
                    padding: 'var(--s-5)',
                    display: 'flex', flexDirection: 'column', gap: 'var(--s-3)',
                    color: 'inherit', textDecoration: 'none',
                    boxShadow: 'var(--sh-1)',
                    transition: 'transform var(--t-micro), box-shadow var(--t-micro)',
                    opacity: temConteudo ? 1 : .65,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--sh-2)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--sh-1)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)' }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 'var(--r-md)',
                      background: 'var(--paper-warm)',
                      color: t.cor || modulo.cor,
                      display: 'grid', placeItems: 'center',
                    }}>
                      <Icone nome={t.iconeNome} size={24} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <span className="t-mono" style={{ fontSize: 10, color: 'var(--ink-mute)' }}>
                        Trilha {String(t.ordem).padStart(2, '0')} · {totalM} missões
                      </span>
                      <h3 style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 20, letterSpacing: '-.01em' }}>{t.nome}</h3>
                    </div>
                    {concluida ? <CheckCircle2 size={20} color="var(--sage)" /> : <ChevronRight size={18} color="var(--ink-mute)" />}
                  </div>
                  <p style={{ color: 'var(--ink-soft)', fontSize: 14, margin: 0 }}>{t.desc}</p>
                  <div className="progress"><span style={{ width: `${pct}%`, background: t.cor || modulo.cor }} /></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--ink-mute)', fontFamily: 'var(--f-mono)' }}>
                    <span>{feitosM}/{totalM} feitas</span>
                    {!temConteudo && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Lock size={11} /> em produção</span>}
                  </div>
                </Link>
              );
            })}
          </section>
        </main>
  );
}
