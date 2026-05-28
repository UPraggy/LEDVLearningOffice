import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Flame, Type } from 'lucide-react';
import { MarcaLockup } from './subComponents/Marca.jsx';
import { useApp } from './subComponents/AppContext.jsx';
import IconeSom from './subComponents/IconeSom.jsx';
import '../assets/css/TopMenu.css';

const ITENS = [
  { to: '/', label: 'Início', end: true },
  { to: '/modulos', label: 'Módulos' },
  { to: '/trofeus', label: 'Troféus' },
  { to: '/perfil', label: 'Perfil' },
];

export default function TopMenu({ ativaResp }) {
  const { progresso, alternarFonte, alternarSom } = useApp();
  const [aberto, setAberto] = useState(false);
  const navigate = useNavigate();
  const streak = progresso.user.streak || 0;
  const somAtivo = progresso.preferencias?.somAtivo !== false;

  return (
    <>
      <header className="topMenu">
        <a className="brand" onClick={(e) => { e.preventDefault(); navigate('/'); }} href="/">
          <MarcaLockup pequeno />
        </a>

        {!ativaResp && (
          <nav className="nav-pill" aria-label="seções">
            {ITENS.map(i => (
              <NavLink key={i.to} to={i.to} end={i.end}
                className={({ isActive }) => isActive ? 'active' : ''}>
                {i.label}
              </NavLink>
            ))}
          </nav>
        )}

        <div className="right">
          {streak > 0 && (
            <div className="streak-mini" title="Sua ofensiva">
              <Flame size={18} fill="currentColor" />
              <span>{streak}</span>
            </div>
          )}
          <button className="menu-toggle" onClick={alternarSom}
            aria-label={somAtivo ? 'Desligar som' : 'Ligar som'}
            title={somAtivo ? 'Som ligado' : 'Som desligado'}>
            <IconeSom ativo={somAtivo} size={18} />
          </button>
          <button className="menu-toggle" onClick={alternarFonte} aria-label="Aumentar fonte" title="Aumentar fonte">
            <Type size={18} />
          </button>
          {ativaResp && (
            <button className="menu-toggle" onClick={() => setAberto(true)} aria-label="Abrir menu">
              <Menu size={22} />
            </button>
          )}
        </div>
      </header>

      {ativaResp && (
        <>
          <div className={`lateralBackdrop ${aberto ? 'aberto' : ''}`} onClick={() => setAberto(false)} />
          <aside className={`lateralMenu ${aberto ? 'aberto' : ''}`} aria-hidden={!aberto}>
            <div className="lat-head">
              <MarcaLockup pequeno />
              <button className="lat-close" onClick={() => setAberto(false)} aria-label="Fechar"><X size={20} /></button>
            </div>
            {ITENS.map(i => (
              <NavLink key={i.to} to={i.to} end={i.end} onClick={() => setAberto(false)}
                className={({ isActive }) => isActive ? 'active' : ''}>
                {i.label}
              </NavLink>
            ))}
          </aside>
        </>
      )}
    </>
  );
}
