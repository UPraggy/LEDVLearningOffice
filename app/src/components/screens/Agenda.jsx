/* Agenda — heatmap 8 semanas + próximas missões + recordes. */
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Flame, ChevronRight, Plus } from 'lucide-react';
import { useApp } from '../subComponents/AppContext.jsx';
import GlobalVar from '../subComponents/GlobalVar.jsx';
import { TRILHAS, MODULOS, MISSOES } from '../../data/estrutura.js';
import '../../assets/css/Screens.css';

const corModulo = (id) => ({ computador: 'navy', celular: 'sky', mercado: 'coral', seguranca: 'sage', ingles: 'plum' })[id] || 'navy';

export default function Agenda() {
  const { progresso } = useApp();
  const user = progresso.user || {};

  /* 8x7 = 56 dias terminando hoje */
  const heatmap = useMemo(() => {
    const hoje = new Date();
    const arr = [];
    for (let i = 55; i >= 0; i--) {
      const d = new Date(hoje); d.setDate(d.getDate() - i);
      const iso = d.toISOString().split('T')[0];
      const n = (progresso.atividadePorDia || {})[iso] || 0;
      const nivel = n === 0 ? 0 : n === 1 ? 1 : n <= 3 ? 2 : 3;
      arr.push({ iso, n, nivel });
    }
    return arr;
  }, [progresso.atividadePorDia]);

  /* Próximas missões = primeira pendente das 3 primeiras trilhas do módulo atual + mix */
  const proximas = useMemo(() => {
    const feitas = new Set(progresso.missoesCompletas);
    const out = [];
    const ordemHorarios = ['Hoje · 18:00', 'Amanhã · 08:00', 'Sexta · 09:30', 'Sábado · 10:00'];
    let idx = 0;
    for (const t of TRILHAS) {
      const m = (MISSOES[t.id] || []).find(mi => !feitas.has(`${t.id}-${mi.id}`));
      if (!m) continue;
      out.push({
        rotulo: ordemHorarios[idx] || `Daqui ${idx + 1}d`,
        trilhaId: t.id, missaoId: m.id,
        titulo: m.titulo,
        moduloId: t.modulo,
        moduloNome: MODULOS.find(mm => mm.id === t.modulo)?.nome || t.modulo,
        color: corModulo(t.modulo),
      });
      idx++;
      if (idx >= 4) break;
    }
    return out;
  }, [progresso.missoesCompletas]);

  return (
    <div className="screen">
      <div className="hello">
        <div>
          <div className="kicker">Suas 8 semanas · ofensiva ativa</div>
          <h1 className="bighi">A força da <em>repetição</em>.</h1>
        </div>
        <div className="hello-stamps">
          <span className="streak-pill" style={{ background: 'rgba(224,122,58,.15)', color: 'var(--streak)', border: '1px solid rgba(224,122,58,.3)' }}>
            <Flame size={16} fill="currentColor" /> {user.streak || 0} dias
          </span>
        </div>
      </div>

      <div className="heatmap-card">
        <div className="hm-grid">
          <div className="hm-labels">
            {['SEG','TER','QUA','QUI','SEX','SAB','DOM'].map(d => <span key={d}>{d}</span>)}
          </div>
          <div className="hm-cells">
            {heatmap.map((c, i) => (
              <div key={i} className={`hm-cell hm-${c.nivel}`} title={`${c.iso} — ${c.n} missões`} />
            ))}
          </div>
        </div>
        <div className="hm-legend">
          <span className="kicker" style={{ margin: 0 }}>Menos</span>
          <span className="hm-cell hm-0" />
          <span className="hm-cell hm-1" />
          <span className="hm-cell hm-2" />
          <span className="hm-cell hm-3" />
          <span className="kicker" style={{ margin: 0 }}>Mais</span>
        </div>
      </div>

      <section className="block">
        <div className="block-head">
          <h2>Próximas missões agendadas</h2>
          <button className="btn-link"><Plus size={14} /> Adicionar</button>
        </div>
        <div className="agenda-list">
          {proximas.map((p, i) => (
            <Link key={i} to={`/missao/${p.trilhaId}/${p.missaoId}`} className="ag-item">
              <div className="ag-day">
                {p.rotulo.split('·')[0].trim()}
                <small>{p.rotulo.split('·')[1]?.trim() || ''}</small>
              </div>
              <div className="ag-divider" data-color={p.color} />
              <div className="ag-body">
                <h5>{p.titulo}</h5>
                <span className="chip" data-c={p.color}>{p.moduloNome}</span>
              </div>
              <button className="btn-ghico" aria-label="Mais"><ChevronRight size={18} /></button>
            </Link>
          ))}
          {proximas.length === 0 && (
            <div className="empty">
              <div className="empty-ic"><Plus size={22} /></div>
              <h4>Sem missões agendadas</h4>
              <p>Quando você concluir uma trilha, sugiro a próxima por aqui.</p>
            </div>
          )}
        </div>
      </section>

      <section className="block">
        <div className="block-head"><h2>Recordes pessoais</h2></div>
        <div className="record-grid">
          <div className="rec-card"><strong>{progresso.recordes?.maiorStreak || 0}</strong><span>maior ofensiva (dias)</span></div>
          <div className="rec-card"><strong>{progresso.recordes?.maxMissoesDia || 0}</strong><span>missões num só dia</span></div>
          <div className="rec-card"><strong>{progresso.recordes?.maxXpDia || 0}</strong><span>XP ganho num dia</span></div>
        </div>
      </section>
    </div>
  );
}
