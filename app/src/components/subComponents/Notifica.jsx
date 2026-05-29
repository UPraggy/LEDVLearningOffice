/* =========================================================================
   Notifica — sistema de notificação LOCAL (sem servidor).
   Usa a Notification API + intervalos no Service Worker para "lembretes".
   Não é push real (que precisa de servidor + VAPID), mas mostra notificação
   na barra do celular/desktop quando o app fica em background com SW ativo.

   Atalhos:
   - pedir permissão (1x)
   - agendar lembrete em "X ms"
   - cancelar agendamento
   - notificação imediata
   ========================================================================= */

import { asset } from '../../lib/asset.js';

const TIMERS_KEY = 'escritorio-notif-timers';

export default class Notifica {
  static suportado() {
    return typeof window !== 'undefined'
      && 'Notification' in window
      && 'serviceWorker' in navigator;
  }
  static permissao() {
    if (!Notifica.suportado()) return 'denied';
    return Notification.permission;
  }
  static async pedirPermissao() {
    if (!Notifica.suportado()) return 'denied';
    if (Notification.permission === 'granted') return 'granted';
    if (Notification.permission === 'denied') return 'denied';
    return await Notification.requestPermission();
  }

  /** Dispara notificação na hora. */
  static async mostrar(titulo, body, opts = {}) {
    if (Notifica.permissao() !== 'granted') return false;
    try {
      // Preferimos via SW pra funcionar quando aba estiver fechada
      if (navigator.serviceWorker?.ready) {
        const reg = await navigator.serviceWorker.ready;
        await reg.showNotification(titulo, {
          body,
          icon: asset('/icons/icon-192.png'),
          badge: asset('/icons/icon-72.png'),
          vibrate: [200, 100, 200],
          tag: opts.tag || 'escritorio',
          data: { url: opts.url || '/', ...opts },
          actions: opts.actions || [],
        });
      } else {
        new Notification(titulo, { body, icon: asset('/icons/icon-192.png') });
      }
      return true;
    } catch (e) {
      console.warn('Notifica.mostrar falhou:', e);
      return false;
    }
  }

  /** Agenda notificação local em "delayMs". Usa setTimeout — só funciona
   *  com a aba aberta. Pra background real, precisaria de Push Server. */
  static agendar({ id, delayMs, titulo, body, url }) {
    if (!Notifica.suportado()) return null;
    const timers = JSON.parse(localStorage.getItem(TIMERS_KEY) || '{}');
    if (timers[id]) clearTimeout(timers[id].timeoutId);
    const timeoutId = setTimeout(() => {
      Notifica.mostrar(titulo, body, { tag: id, url });
      const t = JSON.parse(localStorage.getItem(TIMERS_KEY) || '{}');
      delete t[id];
      localStorage.setItem(TIMERS_KEY, JSON.stringify(t));
    }, delayMs);
    timers[id] = { fireAt: Date.now() + delayMs, titulo, body, url };
    localStorage.setItem(TIMERS_KEY, JSON.stringify(timers));
    // Guarda também o timeoutId em memória — não persiste reload, mas
    // o reagendador (`reativarPendentes`) refaz tudo.
    if (!Notifica._mem) Notifica._mem = {};
    Notifica._mem[id] = timeoutId;
    return id;
  }

  static cancelar(id) {
    if (Notifica._mem?.[id]) {
      clearTimeout(Notifica._mem[id]);
      delete Notifica._mem[id];
    }
    const timers = JSON.parse(localStorage.getItem(TIMERS_KEY) || '{}');
    delete timers[id];
    localStorage.setItem(TIMERS_KEY, JSON.stringify(timers));
  }

  /** Reativa timers persistidos (chame no boot do app). */
  static reativarPendentes() {
    if (!Notifica.suportado()) return;
    const timers = JSON.parse(localStorage.getItem(TIMERS_KEY) || '{}');
    const now = Date.now();
    if (!Notifica._mem) Notifica._mem = {};
    for (const [id, t] of Object.entries(timers)) {
      const delay = t.fireAt - now;
      if (delay <= 0) {
        Notifica.mostrar(t.titulo, t.body, { tag: id, url: t.url });
        delete timers[id];
      } else {
        Notifica._mem[id] = setTimeout(() => {
          Notifica.mostrar(t.titulo, t.body, { tag: id, url: t.url });
          const cur = JSON.parse(localStorage.getItem(TIMERS_KEY) || '{}');
          delete cur[id];
          localStorage.setItem(TIMERS_KEY, JSON.stringify(cur));
        }, delay);
      }
    }
    localStorage.setItem(TIMERS_KEY, JSON.stringify(timers));
  }

  /** Atalho — lembrete diário às HH:MM (hoje ou amanhã). */
  static lembreteDiario({ horaHHMM = '19:00', titulo, body, url }) {
    const [hh, mm] = horaHHMM.split(':').map(Number);
    const agora = new Date();
    const alvo = new Date();
    alvo.setHours(hh, mm, 0, 0);
    if (alvo <= agora) alvo.setDate(alvo.getDate() + 1);
    return Notifica.agendar({
      id: 'lembrete-diario',
      delayMs: alvo - agora,
      titulo, body, url,
    });
  }

  static listarAgendados() {
    return JSON.parse(localStorage.getItem(TIMERS_KEY) || '{}');
  }

  /** Alerta imediato — usado quando o aluno desbloqueia troféu. Idempotente
   *  no mesmo "tag" pra não duplicar se o usuário trocar de tela rápido. */
  static async trofeu(nomeTrofeu) {
    return Notifica.mostrar('Novo troféu conquistado', nomeTrofeu, {
      tag: 'trofeu-' + nomeTrofeu.toLowerCase().replace(/\s+/g, '-'),
      url: '/trofeus',
    });
  }

  /** Lembrete de risco da ofensiva — agenda pra HH:00 do mesmo dia caso o
   *  aluno ainda não tenha aberto o app. Default: alerta 21h. */
  static lembreteRiscoStreak({ horaHHMM = '21:00', streak = 0 } = {}) {
    const [hh, mm] = horaHHMM.split(':').map(Number);
    const agora = new Date();
    const alvo = new Date();
    alvo.setHours(hh, mm, 0, 0);
    if (alvo <= agora) return null; // já passou — não agenda hoje
    return Notifica.agendar({
      id: 'streak-risco',
      delayMs: alvo - agora,
      titulo: `Sua ofensiva de ${streak} dia${streak > 1 ? 's' : ''} está em risco`,
      body: 'Faz 1 missão curtinha — 3 minutos resolvem. Não perca o que já construiu.',
      url: '/',
    });
  }

  /** Alerta de Arcade liberado (1× por dia). */
  static async arcadeLiberado() {
    return Notifica.mostrar('Arcade Diário disponível', 'Modo relâmpago de hoje está liberado — bônus de XP se acertar tudo.', {
      tag: 'arcade',
      url: '/arcade',
    });
  }

  /** Alerta de marco semanal (1× por semana). */
  static async marcoSemana(qtdMissoes) {
    return Notifica.mostrar(`Você fez ${qtdMissoes} missões essa semana`, 'Bom ritmo. Olha sua estante de troféus pra ver o quanto avançou.', {
      tag: 'marco-semana',
      url: '/perfil',
    });
  }
}
