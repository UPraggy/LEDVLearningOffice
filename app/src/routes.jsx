import { useEffect, useLayoutEffect, useState } from 'react';
import { BrowserRouter, Routes as Router, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider, useApp } from './components/subComponents/AppContext.jsx';
import AppShell from './components/AppShell.jsx';

import Onboarding from './components/screens/Onboarding.jsx';
import HomePage from './components/screens/HomePage.jsx';
import Modulos from './components/screens/Modulos.jsx';
import Trilhas from './components/screens/Trilhas.jsx';
import Certificado from './components/screens/Certificado.jsx';
import TrilhaDetail from './components/screens/TrilhaDetail.jsx';
import Missao from './components/screens/Missao.jsx';
import Trofeus from './components/screens/Trofeus.jsx';
import Perfil from './components/screens/Perfil.jsx';
import Agenda from './components/screens/Agenda.jsx';
import Mentor from './components/screens/Mentor.jsx';
import Diario from './components/screens/Diario.jsx';
import Anatomia from './components/screens/Anatomia.jsx';
import Configuracoes from './components/screens/Configuracoes.jsx';
import Revisao from './components/screens/Revisao.jsx';
import Kata from './components/screens/Kata.jsx';
import Arcade from './components/screens/Arcade.jsx';
import LugaresProximos from './components/screens/LugaresProximos.jsx';

function ScrollToTop() {
  const loc = useLocation();
  // useLayoutEffect roda antes do paint; o rAF garante um 2º passe caso a tela
  // recém-montada reposicione o scroll (ordem de effects entre irmãos).
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const aoTopo = () => {
      // form de 2 argumentos: máxima compatibilidade, sem 'behavior'
      window.scrollTo(0, 0);
      if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      document.querySelector('main.content')?.scrollTo?.(0, 0);
    };
    aoTopo();
    const r = requestAnimationFrame(aoTopo);
    return () => cancelAnimationFrame(r);
  }, [loc.pathname]);
  return null;
}

function GuardaOnboarding({ children }) {
  const { progresso } = useApp();
  if (!progresso.preferencias.onboardingFeito) return <Navigate to="/bem-vindo" replace />;
  return children;
}

function Layout({ children }) {
  const loc = useLocation();
  // Onboarding fullscreen (sem sidebar) + tela de Missão também (foco)
  const fullscreen = loc.pathname === '/bem-vindo' || loc.pathname.startsWith('/missao/');
  if (fullscreen) return children;
  return <AppShell>{children}</AppShell>;
}

function ConteudoRotas({ ativaResp }) {
  return (
    <Layout>
      <ScrollToTop />
      <Router>
        <Route path="/bem-vindo" element={<Onboarding ativaResp={ativaResp} />} />
        <Route path="/" element={<GuardaOnboarding><HomePage ativaResp={ativaResp} /></GuardaOnboarding>} />
        <Route path="/modulos" element={<GuardaOnboarding><Modulos ativaResp={ativaResp} /></GuardaOnboarding>} />
        <Route path="/modulo/:modId" element={<GuardaOnboarding><Trilhas ativaResp={ativaResp} /></GuardaOnboarding>} />
        <Route path="/certificado/:modId" element={<GuardaOnboarding><Certificado /></GuardaOnboarding>} />
        <Route path="/trilha/:trilhaId" element={<GuardaOnboarding><TrilhaDetail ativaResp={ativaResp} /></GuardaOnboarding>} />
        <Route path="/missao/:trilhaId/:missaoId" element={<GuardaOnboarding><Missao ativaResp={ativaResp} /></GuardaOnboarding>} />
        <Route path="/agenda" element={<GuardaOnboarding><Agenda ativaResp={ativaResp} /></GuardaOnboarding>} />
        <Route path="/mentor" element={<GuardaOnboarding><Mentor ativaResp={ativaResp} /></GuardaOnboarding>} />
        <Route path="/diario" element={<GuardaOnboarding><Diario ativaResp={ativaResp} /></GuardaOnboarding>} />
        <Route path="/anatomia" element={<GuardaOnboarding><Anatomia ativaResp={ativaResp} /></GuardaOnboarding>} />
        <Route path="/configuracoes" element={<GuardaOnboarding><Configuracoes ativaResp={ativaResp} /></GuardaOnboarding>} />
        <Route path="/revisao" element={<GuardaOnboarding><Revisao ativaResp={ativaResp} /></GuardaOnboarding>} />
        <Route path="/kata" element={<GuardaOnboarding><Kata ativaResp={ativaResp} /></GuardaOnboarding>} />
        <Route path="/arcade" element={<GuardaOnboarding><Arcade ativaResp={ativaResp} /></GuardaOnboarding>} />
        <Route path="/lugares" element={<GuardaOnboarding><LugaresProximos ativaResp={ativaResp} /></GuardaOnboarding>} />
        <Route path="/trofeus" element={<GuardaOnboarding><Trofeus ativaResp={ativaResp} /></GuardaOnboarding>} />
        <Route path="/perfil" element={<GuardaOnboarding><Perfil ativaResp={ativaResp} /></GuardaOnboarding>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Router>
    </Layout>
  );
}

export default function Routes() {
  const [ativaResp, setAtivaResp] = useState(null);

  useEffect(() => {
    const checa = () => setAtivaResp(window.matchMedia('(max-width: 767px)').matches);
    checa();
    window.addEventListener('resize', checa);
    return () => window.removeEventListener('resize', checa);
  }, []);

  if (ativaResp == null) return null;

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <AppProvider>
        <ConteudoRotas ativaResp={ativaResp} />
      </AppProvider>
    </BrowserRouter>
  );
}
