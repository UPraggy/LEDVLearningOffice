import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import { MODULOS, TRILHAS, MISSOES } from '../../data/estrutura.js';
import { useApp } from '../subComponents/AppContext.jsx';

export default function Modulos({ ativaResp }) {
  const { progresso } = useApp();
  const feitas = new Set(progresso.missoesCompletas);

  const stats = (modId) => {
    const trilhas = TRILHAS.filter(t => t.modulo === modId);
    const total = trilhas.reduce((s, t) => s + (MISSOES[t.id] || []).length, 0);
    const feitos = trilhas.reduce((s, t) =>
      s + (MISSOES[t.id] || []).filter(m => feitas.has(`${t.id}-${m.id}`)).length, 0);
    return { trilhas: trilhas.length, total, feitos, pct: total ? Math.round(feitos / total * 100) : 0 };
  };

  return (
    <main className="screen">
          <header style={{ marginBottom: 'var(--s-7)' }}>
            <span className="t-kicker">Escolha por onde quer caminhar hoje</span>
            <h1 style={{ fontSize: 'clamp(36px,5vw,56px)', margin: 'var(--s-3) 0 var(--s-4)' }}>
              Cinco módulos. Um <em style={{ color: 'var(--coral)', fontStyle: 'italic', fontWeight: 500 }}>ritmo</em> só seu.
            </h1>
            <p style={{ color: 'var(--ink-soft)', maxWidth: '62ch', fontSize: 17 }}>
              Cada módulo é uma área da sua vida digital. Você pode pular entre eles à vontade — o progresso fica salvo neste aparelho.
            </p>
          </header>

          <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: 'var(--s-5)' }}>
            {MODULOS.map(m => {
              const s = stats(m.id);
              return (
                <Link key={m.id} to={`/modulo/${m.id}`}
                  style={{
                    background: 'var(--surface-2)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--r-xl)',
                    padding: 'var(--s-6)',
                    display: 'flex', flexDirection: 'column', gap: 'var(--s-3)',
                    color: 'inherit', textDecoration: 'none',
                    minHeight: 240,
                    boxShadow: 'var(--sh-1)',
                    position: 'relative', overflow: 'hidden',
                    transition: 'transform var(--t-micro), box-shadow var(--t-micro)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--sh-2)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--sh-1)'; }}
                >
                  <div style={{
                    position: 'absolute', right: -40, top: -40,
                    width: 160, height: 160, borderRadius: '50%',
                    background: `radial-gradient(circle, ${m.cor}26, transparent 70%)`,
                  }} />
                  <span className="t-mono" style={{ color: m.cor, fontSize: 11 }}>Módulo · {s.trilhas} trilhas</span>
                  <h3 style={{
                    fontFamily: 'var(--f-display)', fontWeight: 600,
                    fontSize: 30, letterSpacing: '-.02em', lineHeight: 1.05,
                  }}>{m.nome}</h3>
                  <p style={{ color: 'var(--ink-soft)', fontSize: 15 }}>{m.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--ink-mute)', fontSize: 12 }}>
                    <Users size={14} /> {m.publico}
                  </div>
                  <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div className="progress"><span style={{ width: `${s.pct}%`, background: m.cor }} /></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '.06em' }}>
                      <span>{s.feitos}/{s.total} missões</span>
                      <span style={{ color: m.cor, fontWeight: 700 }}>Entrar <ArrowRight size={11} style={{ verticalAlign: 'middle' }} /></span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>
        </main>
  );
}
