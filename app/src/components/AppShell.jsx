/* =========================================================================
   APP SHELL — sidebar fixa esquerda + main + bottom-nav mobile + FAB fonte.
   Substitui o TopMenu antigo. Cada screen agora só renderiza seu <main>.
   ========================================================================= */
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Grid3x3, Calendar, MessageSquare, User, Trophy, PenLine, Layers, Settings, Brain, BookOpenCheck, Zap, MapPin } from 'lucide-react';
import { useApp } from './subComponents/AppContext.jsx';
import { useEffect, useState } from 'react';
import GlobalVar from './subComponents/GlobalVar.jsx';
import Marca from './subComponents/Marca.jsx';
import Avatar from './subComponents/Avatar.jsx';
import InstalarApp from './subComponents/InstalarApp.jsx';
import '../assets/css/AppShell.css';

const APRENDER = [
  { to: '/',          label: 'Início',  Icon: Home,           end: true },
  { to: '/modulos',   label: 'Módulos', Icon: Grid3x3 },
  { to: '/agenda',    label: 'Agenda',  Icon: Calendar },
  { to: '/mentor',    label: 'Mentor',  Icon: MessageSquare, badgeKey: 'mentorNew' },
  { to: '/perfil',    label: 'Perfil',  Icon: User },
];
const MAIS = [
  { to: '/trofeus',       label: 'Troféus',       Icon: Trophy },
  { to: '/arcade',        label: 'Arcade Diário', Icon: Zap },
  { to: '/lugares',       label: 'Lugares próximos', Icon: MapPin },
  { to: '/revisao',       label: 'Revisão',       Icon: Brain },
  { to: '/kata',          label: 'Kata diário',   Icon: BookOpenCheck },
  { to: '/diario',        label: 'Diário',        Icon: PenLine },
  { to: '/anatomia',      label: 'Anatomia',      Icon: Layers },
  { to: '/configuracoes', label: 'Configurações', Icon: Settings },
];

const BOTTOM = [
  { to: '/',         label: 'Início',  Icon: Home, end: true },
  { to: '/modulos',  label: 'Módulos', Icon: Grid3x3 },
  { to: '/agenda',   label: 'Agenda',  Icon: Calendar },
  { to: '/mentor',   label: 'Mentor',  Icon: MessageSquare, badgeKey: 'mentorNew' },
  { to: '/perfil',   label: 'Perfil',  Icon: User },
];

function SidebarItem({ to, label, Icon, end, badge }) {
  return (
    <NavLink to={to} end={end} className={({ isActive }) => `sb-item ${isActive ? 'active' : ''}`}>
      <Icon size={20} />
      <span>{label}</span>
      {!!badge && <span className="badge">{badge}</span>}
    </NavLink>
  );
}

function BottomItem({ to, label, Icon, end, badge }) {
  return (
    <NavLink to={to} end={end} className={({ isActive }) => `bn-btn ${isActive ? 'active' : ''}`}
      style={{ position: 'relative' }}>
      <Icon />
      <span>{label}</span>
      {!!badge && (
        <span style={{
          position: 'absolute', top: 6, right: 12,
          background: 'var(--coral)', color: '#fff',
          fontSize: 9, fontWeight: 700, fontFamily: 'var(--f-mono)',
          minWidth: 16, height: 16, borderRadius: 99, padding: '0 4px',
          display: 'grid', placeItems: 'center',
        }}>{badge}</span>
      )}
    </NavLink>
  );
}

export default function AppShell({ children }) {
  const { progresso, alternarFonte, alternarSom } = useApp();
  const somAtivo = progresso.preferencias?.somAtivo !== false;
  const mentorNew = (progresso.mentorInbox || []).filter(m => m.status === 'new').length;
  const badgeMap = { mentorNew: mentorNew || 0 };

  const user = progresso.user || {};
  const nomeCurto = (user.nome || 'Estudante').split(' ').slice(0, 2).join(' ');
  const inits = (user.nome || 'E').split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
  const nivelNome = GlobalVar.nomeNivel(user.nivelNum || 1);
  const fontStep = progresso.preferencias?.fontStep ?? (progresso.preferencias?.fonteGrande ? 1 : 0);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="mk"><Marca tamanho={20} /></div>
          <span>Escritório</span>
        </div>

        <div className="sb-section-label">Aprender</div>
        {APRENDER.map(i => (
          <SidebarItem key={i.to} {...i}
            badge={i.badgeKey ? badgeMap[i.badgeKey] : 0} />
        ))}

        <div className="sb-section-label">Mais</div>
        {MAIS.map(i => <SidebarItem key={i.to} {...i} />)}

        <div className="sb-user" title="Seu perfil">
          <Avatar user={user} size={36} />
          <div className="info">
            <strong>{nomeCurto}</strong>
            <span>{nivelNome} · {(user.xp || 0).toLocaleString('pt-BR')} XP</span>
          </div>
        </div>
      </aside>

      <main className="content">
        {children}
      </main>

      <nav className="bottomnav" aria-label="navegação rápida">
        {BOTTOM.map(i => (
          <BottomItem key={i.to} {...i}
            badge={i.badgeKey ? badgeMap[i.badgeKey] : 0} />
        ))}
      </nav>

      {/* FAB de fonte (canto inferior esquerdo) */}
      <button className="acc-fab" onClick={alternarFonte}
        title={`Fonte: ${['Pequeno','Normal','Grande'][fontStep] || 'Normal'} — clique para alternar`}
        aria-label="Mudar tamanho da fonte">
        <small>A</small><strong>A</strong>
      </button>

      <InstalarApp />
    </div>
  );
}
