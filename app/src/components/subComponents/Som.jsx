/* =========================================================================
   SOM — efeitos sintetizados via Web Audio API.
   Sem assets: tudo é gerado em tempo real (osciladores + envelope).
   Voz sonora alinhada à voz da marca: calmo, quente, não infantil, não arcade.
   Volume baixo por padrão. Mute persistido em `preferencias.somAtivo` (default true).
   Acessibilidade: honra `prefers-reduced-motion` (desativa sons celebrativos longos).
   ========================================================================= */

let _ctx = null;
let _muted = false;
let _baseGain = 0.18;        // volume mestre — discreto
let _ready = false;
const _dev = typeof import.meta !== 'undefined' && import.meta.env?.DEV;

function getCtx() {
  if (typeof window === 'undefined') return null;
  if (!_ctx) {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      _ctx = new AC();
      if (_dev) console.debug('[Som] AudioContext criado', _ctx.state);
    } catch (e) {
      if (_dev) console.debug('[Som] falha ao criar AudioContext', e);
      return null;
    }
  }
  // Em browsers que travam o audio antes do 1º gesto, resume em qualquer interação.
  if (_ctx.state === 'suspended') {
    _ctx.resume()
      .then(() => { _ready = true; if (_dev) console.debug('[Som] AudioContext retomado'); })
      .catch((e) => { if (_dev) console.debug('[Som] resume bloqueado', e); });
  } else {
    _ready = true;
  }
  return _ctx;
}

/* "Destrava" o audio na primeira interação real do usuário. */
function _arm() {
  const arm = () => {
    _ready = true;
    const ctx = getCtx();
    if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {});
    window.removeEventListener('pointerdown', arm, true);
    window.removeEventListener('click', arm, true);
    window.removeEventListener('keydown', arm, true);
    window.removeEventListener('touchstart', arm, true);
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('pointerdown', arm, { once: true, capture: true });
    window.addEventListener('click', arm, { once: true, capture: true });
    window.addEventListener('keydown', arm, { once: true, capture: true });
    window.addEventListener('touchstart', arm, { once: true, capture: true });
  }
}
_arm();

function reduceMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Toca uma "nota" curta. {freq, dur, tipo, vol, ataque, decay, fim?, slideTo?} */
function nota({ freq = 440, dur = 0.12, tipo = 'sine', vol = 1, ataque = 0.005, decay = 0.08, slideTo = null }) {
  const ctx = getCtx();
  if (!ctx) return;
  const t0 = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = tipo;
  osc.frequency.setValueAtTime(freq, t0);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(0.0001, slideTo), t0 + dur);
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(_baseGain * vol, t0 + ataque);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + ataque + decay + dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + ataque + decay + dur + 0.05);
}

function noise({ dur = 0.08, vol = 0.5, freqLP = 1200 }) {
  const ctx = getCtx();
  if (!ctx) return;
  const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = freqLP;
  const gain = ctx.createGain();
  gain.gain.value = _baseGain * vol;
  src.connect(filter).connect(gain).connect(ctx.destination);
  src.start();
}

/* ===========================================================
   PRESETS — vocabulário sonoro da marca
   =========================================================== */
const PRESETS = {
  click:    () => nota({ freq: 580, dur: 0.04, tipo: 'sine',     vol: 0.45, decay: 0.05 }),
  hover:    () => nota({ freq: 720, dur: 0.02, tipo: 'sine',     vol: 0.18, decay: 0.04 }),
  toggle:   () => nota({ freq: 480, dur: 0.06, tipo: 'triangle', vol: 0.45, decay: 0.07, slideTo: 660 }),
  // Sucesso: arpejo C-E-G (curto, suave)
  success: () => {
    nota({ freq: 523.25, dur: 0.08, tipo: 'sine', vol: 0.55, decay: 0.10 });
    setTimeout(() => nota({ freq: 659.25, dur: 0.08, tipo: 'sine', vol: 0.55, decay: 0.10 }), 70);
    setTimeout(() => nota({ freq: 783.99, dur: 0.18, tipo: 'sine', vol: 0.65, decay: 0.18 }), 140);
  },
  // Erro: tom grave + ruído curtinho (gentil, não punitivo)
  error: () => {
    nota({ freq: 220, dur: 0.10, tipo: 'sine',     vol: 0.50, decay: 0.10, slideTo: 165 });
    noise({ dur: 0.06, vol: 0.10, freqLP: 600 });
  },
  // XP — shimmer alto curto
  xp: () => {
    nota({ freq: 1046, dur: 0.05, tipo: 'sine',     vol: 0.35, decay: 0.10 });
    setTimeout(() => nota({ freq: 1318, dur: 0.05, tipo: 'sine', vol: 0.30, decay: 0.12 }), 50);
  },
  // Streak — sino quente (passou de dia)
  streak: () => {
    nota({ freq: 880, dur: 0.10, tipo: 'triangle', vol: 0.50, decay: 0.40 });
    setTimeout(() => nota({ freq: 1318, dur: 0.20, tipo: 'sine', vol: 0.40, decay: 0.50 }), 60);
  },
  // Subir de nível — coral progressivo (3 notas + harmônica)
  level: () => {
    if (reduceMotion()) return PRESETS.success();
    nota({ freq: 392, dur: 0.10, tipo: 'sine', vol: 0.55, decay: 0.10 });
    setTimeout(() => nota({ freq: 523, dur: 0.10, tipo: 'sine', vol: 0.55, decay: 0.10 }), 80);
    setTimeout(() => nota({ freq: 659, dur: 0.10, tipo: 'sine', vol: 0.55, decay: 0.10 }), 160);
    setTimeout(() => {
      nota({ freq: 783, dur: 0.30, tipo: 'sine', vol: 0.65, decay: 0.40 });
      nota({ freq: 1175, dur: 0.30, tipo: 'sine', vol: 0.25, decay: 0.40 });
    }, 240);
  },
  // Missão concluída — celebração curta (mais cheia que success)
  complete: () => {
    if (reduceMotion()) return PRESETS.success();
    const seq = [
      { f: 523, d: 0.10 },
      { f: 659, d: 0.10 },
      { f: 783, d: 0.10 },
      { f: 1046, d: 0.28 },
    ];
    let acc = 0;
    seq.forEach((n, i) => {
      setTimeout(() => {
        nota({ freq: n.f, dur: n.d, tipo: 'sine', vol: 0.55, decay: 0.15 });
        if (i === seq.length - 1) nota({ freq: n.f * 1.5, dur: n.d, tipo: 'sine', vol: 0.25, decay: 0.18 });
      }, acc);
      acc += 80;
    });
  },
  // Onboarding/transição — gentil sobre passos
  step: () => nota({ freq: 660, dur: 0.05, tipo: 'sine', vol: 0.40, decay: 0.08, slideTo: 880 }),
  // Flip card
  flip: () => nota({ freq: 360, dur: 0.04, tipo: 'triangle', vol: 0.35, decay: 0.06, slideTo: 540 }),
};

/* ===========================================================
   API pública
   =========================================================== */
const Som = {
  /** Toca um preset. Ignora se mutado ou sem contexto. */
  tocar(nome) {
    if (_muted) return;
    const fn = PRESETS[nome];
    if (!fn) return;
    getCtx();
    try { fn(); } catch {}
  },
  /** Prepara o AudioContext durante um gesto do usuario, sem som perceptivel. */
  warmup() {
    const ctx = getCtx();
    if (!ctx || _muted || !_ready) return;
    try {
      const gain = ctx.createGain();
      gain.gain.value = 0.0001;
      const osc = ctx.createOscillator();
      osc.frequency.value = 440;
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.01);
    } catch (e) {
      if (_dev) console.debug('[Som] warmup falhou', e);
    }
  },
  setMuted(v) { _muted = !!v; },
  isMuted() { return _muted; },
  setVolume(v) { _baseGain = Math.max(0, Math.min(1, v)); },
  /** Atalho para ligar em click/handlers JSX. */
  on(nome) { return () => Som.tocar(nome); },
};

export default Som;
