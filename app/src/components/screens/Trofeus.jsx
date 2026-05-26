/* Trofeus v9 — cores por módulo + ícones únicos + filtros + tiers */
import { useMemo, useState } from 'react';
import { Trophy, Lock, Flame, Star, Shield, Sparkles, Languages, Grid3x3, Award } from 'lucide-react';
import { TROFEUS, progressoTrofeu } from '../../data/estrutura.js';
import { useApp } from '../subComponents/AppContext.jsx';
import TrofeuIcone from '../subComponents/TrofeuIcone.jsx';
import '../../assets/css/Trofeus.css';

const TIPO_LABEL = {
  marco: 'Marcos da jornada', ofensiva: 'Ofensiva',
  dominio: 'Trilhas dominadas', especial: 'Módulos completos', ingles: 'Inglês',
};
const TIPO_ICON = { marco: Star, ofensiva: Flame, dominio: Shield, especial: Sparkles, ingles: Languages };
const TIPO_ORDER = ['marco', 'ofensiva', 'dominio', 'especial', 'ingles'];
const FILTROS = [
  { id: 'todos', label: 'Todos', Ic: Grid3x3 },
  { id: 'novos', label: 'Conquistados', Ic: Trophy },
  { id: 'close', label: 'Quase lá', Ic: Award },
];

export default function Trofeus() {
  const { progresso } = useApp();
  const ganhos = new Set(progresso.trofeus || []);
  const [filtro, setFiltro] = useState('todos');

  const trofeusEnr = useMemo(() => TROFEUS.map(t => {
    const pct = progressoTrofeu(t, progresso);
    const done = ganhos.has(t.id);
    const close = !done && pct >= 60;
    const novo = done && (progresso.trofeus || []).slice(-3).includes(t.id);
    return { ...t, pct, done, close, novo, locked: !done && !close };
  }), [progresso, ganhos]);

  const filtrados = useMemo(() => {
    if (filtro === 'novos') return trofeusEnr.filter(t => t.done);
    if (filtro === 'close') return trofeusEnr.filter(t => t.close);
    return trofeusEnr;
  }, [trofeusEnr, filtro]);

  const total = TROFEUS.length;
  const cntDone = trofeusEnr.filter(t => t.done).length;
  const cntClose = trofeusEnr.filter(t => t.close).length;

  const porTipo = useMemo(() => {
    const obj = {};
    for (const t of filtrados) (obj[t.tipo] = obj[t.tipo] || []).push(t);
    return obj;
  }, [filtrados]);

  return (
    <div className="screen">
      <div className="hello">
        <div>
          <div className="kicker">Sua coleção · sem ranking, só celebração</div>
          <h1 className="bighi">Troféus <em>desbloqueados</em>.</h1>
        </div>
      </div>

      <div className="troph-hero">
        <div>
          <span className="kicker">Coleção</span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
            <span className="nums">{cntDone}<span> / {total}</span></span>
          </div>
          <div className="bar"><i style={{ width: `${Math.round(cntDone / total * 100)}%` }} /></div>
        </div>
        <div className="troph-hero-medal"><Trophy size={42} /></div>
      </div>

      <div className="troph-filters">
        {FILTROS.map(f => {
          const Ic = f.Ic;
          const cnt = f.id === 'novos' ? cntDone : f.id === 'close' ? cntClose : total;
          return (
            <button key={f.id} className={filtro === f.id ? 'active' : ''} onClick={() => setFiltro(f.id)}>
              <Ic size={14} /> {f.label} <span className="cnt">{cnt}</span>
            </button>
          );
        })}
      </div>

      {TIPO_ORDER.filter(tipo => porTipo[tipo]?.length).map(tipo => {
        const Ic = TIPO_ICON[tipo] || Trophy;
        const list = porTipo[tipo];
        const totalCat = TROFEUS.filter(x => x.tipo === tipo).length;
        const feitosCat = trofeusEnr.filter(x => x.tipo === tipo && x.done).length;
        return (
          <div key={tipo} className="troph-section">
            <h2>
              <Ic size={16} color="var(--ink-soft)" />
              {TIPO_LABEL[tipo] || tipo}
              <span className="label-cnt">{feitosCat}/{totalCat}</span>
            </h2>
            <div className="troph-grid">
              {list.map(t => (
                <div key={t.id} data-tier={t.tier}
                  className={`troph-card ${t.done ? 'done' : ''} ${t.close ? 'close' : ''} ${t.locked ? 'locked' : ''}`}>
                  {t.tier && <span className="tier-tag">{t.tier}</span>}
                  {t.novo && <span className="badge-new">novo</span>}
                  <div className={`troph-medal mod-${t.mod || 'honey'}`}>
                    {t.done || t.close ? <TrofeuIcone nome={t.icon} size={34} /> : <Lock size={22} />}
                  </div>
                  <h4>{t.nome}</h4>
                  <div className="desc">{t.desc}</div>
                  {!t.done && t.pct > 0 && (
                    <>
                      <div className="progresso-bar"><i style={{ width: `${t.pct}%` }} /></div>
                      <div className="req">{t.pct}% — faltam {100 - t.pct}%</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {filtrados.length === 0 && (
        <div className="empty">
          <div className="empty-ic"><Trophy size={22} /></div>
          <h4>Nada por aqui ainda</h4>
          <p>Tente outro filtro ou conclua mais missões.</p>
        </div>
      )}
    </div>
  );
}
