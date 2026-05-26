import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import GlobalVar from './GlobalVar.jsx';
import Som from './Som.jsx';
import Notifica from './Notifica.jsx';
import { ToastProvider, useToast } from './Toast.jsx';

const Ctx = createContext(null);

// Estado de boot guardado FORA do componente — sobrevive ao remount do StrictMode.
// Chamamos tickDia uma única vez por carregamento do app.
let _bootResult = null;
function getBoot() {
  if (_bootResult) return _bootResult;
  _bootResult = GlobalVar.tickDia(GlobalVar.carregarProgresso());
  return _bootResult;
}
let _bootToastShown = false;

function AppProviderInner({ children }) {
  const toast = useToast();
  const [progresso, setProgresso] = useState(() => getBoot().progresso);

  // Mostra troféus de ofensiva ganhos no boot (ex: streak chegou a 7)
  useEffect(() => {
    if (_bootToastShown) return;
    _bootToastShown = true;
    Notifica.reativarPendentes();
    const novos = getBoot().trofeusNovos || [];
    if (!novos.length) return;
    setTimeout(() => {
      novos.forEach((id, i) => setTimeout(() => toast.mostrarTrofeu(id), i * 600));
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // aplica preferência de fontStep (0 small / 1 normal / 2 large)
  useEffect(() => {
    const fs = progresso?.preferencias?.fontStep ?? (progresso?.preferencias?.fonteGrande ? 1 : 0);
    document.documentElement.dataset.fontstep = String(fs);
    // retro-compat
    document.documentElement.dataset.fontsize = fs >= 1 ? 'lg' : '';
  }, [progresso?.preferencias?.fontStep, progresso?.preferencias?.fonteGrande]);

  // alto contraste
  useEffect(() => {
    const hc = !!progresso?.preferencias?.altoContraste;
    document.documentElement.dataset.contrast = hc ? 'high' : '';
  }, [progresso?.preferencias?.altoContraste]);

  // aplica preferência de som (default: ligado)
  useEffect(() => {
    const ativo = progresso?.preferencias?.somAtivo !== false;
    Som.setMuted(!ativo);
  }, [progresso?.preferencias?.somAtivo]);

  const api = useMemo(() => ({
    progresso,
    /** patch parcial em qualquer slice (user, preferencias...) */
    atualizar(patch) {
      setProgresso(p => {
        const novo = {
          ...p,
          ...patch,
          user: { ...p.user, ...(patch.user || {}) },
          preferencias: { ...p.preferencias, ...(patch.preferencias || {}) },
        };
        GlobalVar.salvarProgresso(novo);
        return novo;
      });
    },
    /** Conclui missão. Retorna `{ trofeusNovos, subiuNivel }` pra que o caller
     *  (a tela de Missão) decida como mostrar — celebração ou toast.
     *  Por padrão NÃO dispara toast, pra evitar duplicar com a celebração. */
    concluirMissao(trilhaId, missaoId, xp, { comToast = false } = {}) {
      let resultado = { trofeusNovos: [], subiuNivel: false };
      setProgresso(p => {
        const r = GlobalVar.concluirMissao(p, trilhaId, missaoId, xp);
        resultado = { trofeusNovos: r.trofeusNovos, subiuNivel: r.subiuNivel };
        if (comToast && r.trofeusNovos?.length) {
          setTimeout(() => {
            r.trofeusNovos.forEach((id, i) => setTimeout(() => toast.mostrarTrofeu(id), i * 800));
          }, 800);
        }
        return r.progresso;
      });
      return resultado;
    },
    /** Acesso direto ao sistema de toasts (uso geral). */
    toast,
    /** XP bônus de acerto em interação — soma direto, sem marcar missão concluída. */
    bonusXP(xp) {
      setProgresso(p => {
        const xpNovo = (p.user.xp || 0) + (xp || 0);
        const novo = { ...p, user: { ...p.user, xp: xpNovo } };
        GlobalVar.salvarProgresso(novo);
        return novo;
      });
    },
    alternarFonte() {
      setProgresso(p => {
        const atual = p.preferencias?.fontStep ?? (p.preferencias?.fonteGrande ? 1 : 0);
        const proximo = (atual + 1) % 3; // cicla 0→1→2→0
        const novo = { ...p, preferencias: { ...p.preferencias, fontStep: proximo, fonteGrande: proximo >= 1 } };
        GlobalVar.salvarProgresso(novo);
        return novo;
      });
    },
    setPreferencia(chave, valor) {
      setProgresso(p => {
        const novo = { ...p, preferencias: { ...p.preferencias, [chave]: valor } };
        GlobalVar.salvarProgresso(novo);
        return novo;
      });
    },
    /** Abre a caixa do dia (1× por dia). Retorna a recompensa. */
    abrirCaixaDoDia() {
      const r = GlobalVar.abrirCaixaDoDia(progresso);
      if (r.recompensa) {
        setProgresso(r.progresso);
        Som.tocar(r.recompensa.tier === 'legendary' ? 'level' : r.recompensa.tier === 'epic' ? 'streak' : 'xp');
      }
      return r.recompensa;
    },
    podeAbrirCaixa: GlobalVar.podeAbrirCaixaHoje(progresso),
    marcarMentorLida(id) { setProgresso(p => GlobalVar.marcarMentorLida(p, id)); },
    responderMentor(id, texto) { setProgresso(p => GlobalVar.responderMentor(p, id, texto)); },
    atualizarInboxMentor() { setProgresso(p => GlobalVar.atualizarInboxMentor(p)); },
    addDiario(entry) { setProgresso(p => GlobalVar.addDiario(p, entry)); },
    removerDiario(id) { setProgresso(p => GlobalVar.removerDiario(p, id)); },
    alternarSom() {
      setProgresso(p => {
        const atual = p.preferencias?.somAtivo !== false; // default true
        const novo = { ...p, preferencias: { ...p.preferencias, somAtivo: !atual } };
        GlobalVar.salvarProgresso(novo);
        // toca um blip de confirmação se acabou de LIGAR
        if (!atual) { Som.setMuted(false); Som.tocar('toggle'); }
        else { Som.tocar('toggle'); Som.setMuted(true); }
        return novo;
      });
    },
    resetar() {
      GlobalVar.resetarProgresso();
      setProgresso(GlobalVar.carregarProgresso());
    },
  }), [progresso, toast]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

/** Wrapper público — sempre envolve com ToastProvider primeiro,
 *  pra que useToast() dentro de AppProviderInner funcione. */
export function AppProvider({ children }) {
  return (
    <ToastProvider>
      <AppProviderInner>{children}</AppProviderInner>
    </ToastProvider>
  );
}

export function useApp() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useApp fora do AppProvider');
  return v;
}
