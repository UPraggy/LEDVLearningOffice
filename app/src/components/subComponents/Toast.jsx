/* =========================================================================
   TOAST — sistema global de notificações.
   API:
     const { mostrar, mostrarTrofeu } = useToast();
     mostrar({ titulo, descricao, variante?, duracao?, icone? })
     mostrarTrofeu(idTrofeu)        // resolve nome+desc do TROFEUS
   Banner aparece abaixo do TopMenu, anima entrada/saída,
   auto-dismiss em 5s (ou clique no X). Som ao aparecer.
   ========================================================================= */
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Trophy, X, Flame, Sparkles } from 'lucide-react';
import { TROFEUS } from '../../data/estrutura.js';
import Som from './Som.jsx';
import '../../assets/css/Toast.css';

const Ctx = createContext(null);

const ICONES = {
  trofeu: Trophy,
  streak: Flame,
  xp: Sparkles,
};

function Toast({ toast, onClose }) {
  const [saindo, setSaindo] = useState(false);
  const Icon = ICONES[toast.icone] || Trophy;

  useEffect(() => {
    const t = setTimeout(() => {
      setSaindo(true);
      setTimeout(onClose, 250);
    }, toast.duracao || 5000);
    return () => clearTimeout(t);
  }, [toast.id, toast.duracao, onClose]);

  return (
    <div className={`toast ${toast.variante || ''} ${saindo ? 'leaving' : ''}`} role="status" aria-live="polite">
      <div className="icone"><Icon size={22} /></div>
      <div className="corpo">
        {toast.kicker && <span className="kicker">{toast.kicker}</span>}
        <span className="titulo">{toast.titulo}</span>
        {toast.descricao && <span className="desc">{toast.descricao}</span>}
      </div>
      <button className="fechar" aria-label="Fechar" onClick={() => { setSaindo(true); setTimeout(onClose, 250); }}>
        <X size={16} />
      </button>
    </div>
  );
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const seqRef = useRef(1);

  const mostrar = useCallback((opts) => {
    const id = seqRef.current++;
    setToasts(prev => [...prev, { id, ...opts }]);
    // som conforme variante
    const variantSound = opts.variante === 'aviso' ? 'error'
      : opts.icone === 'streak' ? 'streak'
      : opts.icone === 'xp' ? 'xp'
      : 'streak';
    Som.tocar(variantSound);
    return id;
  }, []);

  const dispensar = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const mostrarTrofeu = useCallback((idTrofeu) => {
    const t = TROFEUS.find(x => x.id === idTrofeu);
    if (!t) return;
    mostrar({
      kicker: 'Troféu desbloqueado',
      titulo: t.nome,
      descricao: t.desc,
      icone: t.tipo === 'ofensiva' ? 'streak' : 'trofeu',
      duracao: 5500,
    });
  }, [mostrar]);

  const api = { mostrar, mostrarTrofeu, dispensar };

  return (
    <Ctx.Provider value={api}>
      {children}
      <div className="toast-stack">
        {toasts.map(t => (
          <Toast key={t.id} toast={t} onClose={() => dispensar(t.id)} />
        ))}
      </div>
    </Ctx.Provider>
  );
}

export function useToast() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useToast fora do ToastProvider');
  return v;
}
