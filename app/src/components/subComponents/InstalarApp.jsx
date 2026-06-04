/* InstalarApp — convite discreto pra instalar o PWA no primeiro acesso.
   - Android/Chrome/Edge: usa o evento beforeinstallprompt (instala com 1 toque).
   - iOS/Safari: não tem esse evento → mostra o passo a passo (Compartilhar → Adicionar à Tela de Início).
   - Some pra sempre se o usuário dispensar ou se o app já estiver instalado. */
import { useEffect, useState } from 'react';
import { Download, Share, Plus, X } from 'lucide-react';

const CHAVE_DISMISS = 'escritorio-install-dispensado';

const isIOS = () =>
  /iphone|ipad|ipod/i.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

const jaInstalado = () =>
  window.matchMedia?.('(display-mode: standalone)').matches ||
  window.navigator.standalone === true;

export default function InstalarApp() {
  const [prompt, setPrompt] = useState(null);  // evento beforeinstallprompt guardado
  const [visivel, setVisivel] = useState(false);
  const [modoIOS, setModoIOS] = useState(false);

  useEffect(() => {
    if (jaInstalado()) return;
    try { if (localStorage.getItem(CHAVE_DISMISS)) return; } catch { /* ignore */ }

    // Caminho 1 — navegadores com instalação nativa
    const onPrompt = (e) => {
      e.preventDefault();
      setPrompt(e);
      setModoIOS(false);
      setVisivel(true);
    };
    window.addEventListener('beforeinstallprompt', onPrompt);

    // Some sozinho se o app for instalado durante a sessão
    const onInstalled = () => { dispensar(); };
    window.addEventListener('appinstalled', onInstalled);

    // Caminho 2 — iOS não dispara beforeinstallprompt: mostra instruções após um tempo
    let t;
    if (isIOS()) {
      t = setTimeout(() => { setModoIOS(true); setVisivel(true); }, 2500);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt);
      window.removeEventListener('appinstalled', onInstalled);
      if (t) clearTimeout(t);
    };
  }, []);

  const dispensar = () => {
    try { localStorage.setItem(CHAVE_DISMISS, '1'); } catch { /* ignore */ }
    setVisivel(false);
  };

  const instalar = async () => {
    if (!prompt) return;
    prompt.prompt();
    try { await prompt.userChoice; } catch { /* ignore */ }
    dispensar();
  };

  if (!visivel) return null;

  return (
    <div role="dialog" aria-label="Instalar o app" style={S.wrap}>
      <div style={S.card}>
        <button onClick={dispensar} aria-label="Fechar" style={S.x}><X size={18} /></button>
        <div style={S.row}>
          <div style={S.icon}><Download size={22} color="#fff" /></div>
          <div style={{ minWidth: 0 }}>
            <strong style={S.titulo}>Instalar o Escritório</strong>
            <p style={S.sub}>Abre rápido, funciona offline e seu progresso fica mais seguro.</p>
          </div>
        </div>

        {modoIOS ? (
          <ol style={S.passos}>
            <li style={S.passo}><Share size={16} /> Toque em <b>Compartilhar</b> na barra do Safari.</li>
            <li style={S.passo}><Plus size={16} /> Escolha <b>Adicionar à Tela de Início</b>.</li>
          </ol>
        ) : (
          <div style={S.acoes}>
            <button className="btn btn-primary" onClick={instalar}>
              <Download size={16} /> Instalar agora
            </button>
            <button className="btn btn-ghost" onClick={dispensar}>Agora não</button>
          </div>
        )}
        {modoIOS && (
          <button className="btn btn-ghost" onClick={dispensar} style={{ marginTop: 'var(--s-3)' }}>Entendi</button>
        )}
      </div>
    </div>
  );
}

const S = {
  wrap: {
    position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 200,
    display: 'flex', justifyContent: 'center', padding: '12px',
    paddingBottom: 'calc(12px + env(safe-area-inset-bottom))',
    pointerEvents: 'none',
  },
  card: {
    pointerEvents: 'auto', position: 'relative',
    width: 'min(440px, 100%)',
    background: 'var(--surface)', color: 'var(--ink)',
    border: '1px solid var(--line)', borderRadius: 18,
    boxShadow: 'var(--sh-3, 0 12px 40px rgba(0,0,0,.22))',
    padding: 'var(--s-5)',
  },
  x: {
    position: 'absolute', top: 10, right: 10, width: 32, height: 32,
    display: 'grid', placeItems: 'center', borderRadius: '50%',
    background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--ink-mute)',
  },
  row: { display: 'flex', gap: 'var(--s-3)', alignItems: 'flex-start', paddingRight: 28 },
  icon: {
    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
    background: 'linear-gradient(135deg, var(--honey), var(--coral))',
    display: 'grid', placeItems: 'center',
  },
  titulo: { fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 18, display: 'block' },
  sub: { color: 'var(--ink-soft)', fontSize: 14, margin: '4px 0 0' },
  acoes: { display: 'flex', gap: 'var(--s-3)', marginTop: 'var(--s-4)', flexWrap: 'wrap' },
  passos: { margin: 'var(--s-4) 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 'var(--s-2)' },
  passo: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--ink-soft)' },
};
