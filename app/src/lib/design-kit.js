// ============================================================================
// design-kit.js — TOOLKIT DE DESIGN (ESM puro, browser + node)
// ----------------------------------------------------------------------------
// Base de design traduzida em código: cor, contraste (WCAG), harmonias,
// escalas de espaçamento/tipografia, elevação/sombra, gradientes harmônicos,
// easing e raios. Sem dependências — importável no navegador e em scripts .mjs.
//
// A teoria por trás de cada função está documentada em docs/DESIGN-KB.md.
// Fontes consolidadas: WCAG 2.1 (W3C), Material Design 3, Refactoring UI
// (Wathan & Schoger), Interaction Design Foundation (Gestalt/cor), IBM Carbon.
// ============================================================================

// ---------------------------------------------------------------------------
// 1. COR — conversões
// ---------------------------------------------------------------------------
const clamp = (n, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, n));
const round = (n) => Math.round(n);

/** "#1B2A4E" | "1b2a4e" | "#abc" → {r,g,b} (0–255). */
export function hexToRgb(hex) {
  let h = String(hex).trim().replace(/^#/, '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const n = parseInt(h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

/** {r,g,b} (0–255) → "#rrggbb". */
export function rgbToHex({ r, g, b }) {
  const h = (v) => clamp(round(v), 0, 255).toString(16).padStart(2, '0');
  return `#${h(r)}${h(g)}${h(b)}`;
}

/** {r,g,b} 0–255 → {h:0–360, s:0–1, l:0–1}. */
export function rgbToHsl({ r, g, b }) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return { h, s, l };
}

/** {h,s,l} → {r,g,b} 0–255. */
export function hslToRgb({ h, s, l }) {
  h = ((h % 360) + 360) % 360; s = clamp(s); l = clamp(l);
  if (s === 0) { const v = round(l * 255); return { r: v, g: v, b: v }; }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hk = h / 360;
  const t = (n) => {
    let x = hk + n;
    if (x < 0) x += 1; if (x > 1) x -= 1;
    if (x < 1 / 6) return p + (q - p) * 6 * x;
    if (x < 1 / 2) return q;
    if (x < 2 / 3) return p + (q - p) * (2 / 3 - x) * 6;
    return p;
  };
  return { r: round(t(1 / 3) * 255), g: round(t(0) * 255), b: round(t(-1 / 3) * 255) };
}

export const hexToHsl = (hex) => rgbToHsl(hexToRgb(hex));
export const hslToHex = (hsl) => rgbToHex(hslToRgb(hsl));

// ---------------------------------------------------------------------------
// 2. CONTRASTE — WCAG 2.1
// ---------------------------------------------------------------------------
/** Luminância relativa (WCAG): canais sRGB linearizados. 0 (preto) – 1 (branco). */
export function relativeLuminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  const lin = (c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/** Razão de contraste WCAG entre duas cores: 1 (igual) – 21 (preto/branco). */
export function contrastRatio(a, b) {
  const la = relativeLuminance(a), lb = relativeLuminance(b);
  const hi = Math.max(la, lb), lo = Math.min(la, lb);
  return (hi + 0.05) / (lo + 0.05);
}

/**
 * Classifica o contraste. largeText = texto >=24px ou >=18.66px bold.
 * Retorna { ratio, AA, AAA, level }.
 */
export function wcag(fg, bg, largeText = false) {
  const ratio = contrastRatio(fg, bg);
  const aa = largeText ? 3 : 4.5;
  const aaa = largeText ? 4.5 : 7;
  let level = 'Reprovado';
  if (ratio >= aaa) level = 'AAA';
  else if (ratio >= aa) level = 'AA';
  else if (ratio >= 3) level = 'AA Grande';
  return { ratio: Math.round(ratio * 100) / 100, AA: ratio >= aa, AAA: ratio >= aaa, level };
}

/** Escolhe a cor (de uma lista) com MAIOR contraste sobre `bg`. Default preto/branco. */
export function bestTextOn(bg, candidates = ['#FFFFFF', '#10151F']) {
  let best = candidates[0], bestR = 0;
  for (const c of candidates) {
    const r = contrastRatio(c, bg);
    if (r > bestR) { bestR = r; best = c; }
  }
  return best;
}

/** Garante contraste mínimo escurecendo/clareando `fg` em passos até atingir `min`. */
export function ensureContrast(fg, bg, min = 4.5) {
  if (contrastRatio(fg, bg) >= min) return fg;
  const bgLum = relativeLuminance(bg);
  const dir = bgLum > 0.4 ? -1 : 1; // bg claro → escurece o texto; bg escuro → clareia
  let { h, s, l } = hexToHsl(fg);
  for (let i = 0; i < 24; i++) {
    l = clamp(l + dir * 0.04);
    const c = hslToHex({ h, s, l });
    if (contrastRatio(c, bg) >= min) return c;
  }
  return dir < 0 ? '#10151F' : '#FFFFFF';
}

// ---------------------------------------------------------------------------
// 3. MANIPULAÇÃO DE COR
// ---------------------------------------------------------------------------
/** Clareia (p>0) ou escurece (p<0) por p% de luminância HSL. Ex.: lighten('#333',20). */
export function lighten(hex, p) {
  const hsl = hexToHsl(hex);
  hsl.l = clamp(hsl.l + p / 100);
  return hslToHex(hsl);
}
export const darken = (hex, p) => lighten(hex, -p);

export function saturate(hex, p) {
  const hsl = hexToHsl(hex);
  hsl.s = clamp(hsl.s + p / 100);
  return hslToHex(hsl);
}
export const desaturate = (hex, p) => saturate(hex, -p);

/** Rotaciona a matiz em `deg` graus na roda de cores. */
export function rotate(hex, deg) {
  const hsl = hexToHsl(hex);
  hsl.h = (hsl.h + deg) % 360;
  return hslToHex(hsl);
}

/** Mistura duas cores. w=0 → a, w=1 → b (interpolação linear em RGB). */
export function mix(a, b, w = 0.5) {
  const A = hexToRgb(a), B = hexToRgb(b);
  return rgbToHex({
    r: A.r + (B.r - A.r) * w,
    g: A.g + (B.g - A.g) * w,
    b: A.b + (B.b - A.b) * w,
  });
}

/** Versão acinzentada (tone) — mistura com cinza neutro. */
export const tone = (hex, w = 0.2) => mix(hex, '#8C8C8C', w);

// ---------------------------------------------------------------------------
// 4. HARMONIAS (roda de cores)
// ---------------------------------------------------------------------------
export function complement(hex) { return [hex, rotate(hex, 180)]; }
export function analogous(hex, step = 30) { return [rotate(hex, -step), hex, rotate(hex, step)]; }
export function triadic(hex) { return [hex, rotate(hex, 120), rotate(hex, 240)]; }
export function tetradic(hex) { return [hex, rotate(hex, 90), rotate(hex, 180), rotate(hex, 270)]; }
export function splitComplement(hex, step = 30) { return [hex, rotate(hex, 180 - step), rotate(hex, 180 + step)]; }

/** Rampa monocromática de N tons (claro→escuro) de uma matiz. */
export function monochrome(hex, n = 5) {
  const { h, s } = hexToHsl(hex);
  const out = [];
  for (let i = 0; i < n; i++) {
    const l = 0.88 - (i / (n - 1)) * 0.72; // 0.88 → 0.16
    out.push(hslToHex({ h, s: clamp(s * (0.6 + 0.4 * (i / (n - 1)) + 0.2)), l }));
  }
  return out;
}

/** Rampa de tints (mistura c/ branco) e shades (c/ preto) a partir de uma cor base. */
export function scale(hex, steps = 9) {
  const out = [];
  const half = Math.floor(steps / 2);
  for (let i = 0; i < steps; i++) {
    if (i < half) out.push(mix('#FFFFFF', hex, (i + 1) / (half + 1)));
    else if (i === half) out.push(hex);
    else out.push(mix(hex, '#000000', (i - half) / (steps - half)));
  }
  return out;
}

// ---------------------------------------------------------------------------
// 5. ESCALAS — espaçamento e tipografia
// ---------------------------------------------------------------------------
/** Escala de espaçamento base-8 (densidade UI). Use spacing(2)=16. */
export const SPACING_BASE = 8;
export const spacing = (n) => n * SPACING_BASE;
export const SPACE = { xs: 4, sm: 8, md: 16, lg: 24, xl: 40, xxl: 64 }; // 4-8-16-24-40-64

/** Razões modulares para escala tipográfica. */
export const RATIOS = {
  minorThird: 1.2, majorThird: 1.25, perfectFourth: 1.333,
  goldenRatio: 1.618, augmentedFourth: 1.414, perfectFifth: 1.5,
};

/** Gera N tamanhos de fonte a partir de base e razão. typeScale(16,1.25,5). */
export function typeScale(base = 16, ratio = RATIOS.perfectFourth, steps = 6) {
  return Array.from({ length: steps }, (_, i) => Math.round(base * Math.pow(ratio, i)));
}

/** Raios de canto coerentes. */
export const RADII = { sm: 6, md: 12, lg: 20, xl: 32, pill: 999 };

// ---------------------------------------------------------------------------
// 6. ELEVAÇÃO / SOMBRAS (profundidade)
// ---------------------------------------------------------------------------
/**
 * Sistema de elevação 0–5. Quanto maior, mais "longe" da superfície:
 * sombra mais difusa, deslocamento maior, opacidade um pouco menor.
 * Retorna parâmetros usáveis em <feDropShadow> e em box-shadow CSS.
 */
export const ELEVATION = [
  { dy: 0, blur: 0, opacity: 0 },
  { dy: 2, blur: 4, opacity: 0.16 },
  { dy: 4, blur: 8, opacity: 0.18 },
  { dy: 8, blur: 16, opacity: 0.2 },
  { dy: 14, blur: 24, opacity: 0.22 },
  { dy: 22, blur: 40, opacity: 0.24 },
];

/** <filter> de sombra suave (SVG) para um nível de elevação. */
export function svgShadow(id, level = 2, color = '#10151F') {
  const e = ELEVATION[clamp(level, 0, ELEVATION.length - 1)];
  return `<filter id="${id}" x="-40%" y="-40%" width="180%" height="180%">`
    + `<feDropShadow dx="0" dy="${e.dy}" stdDeviation="${e.blur / 2}" `
    + `flood-color="${color}" flood-opacity="${e.opacity}"/></filter>`;
}

/** box-shadow CSS para um nível de elevação. */
export function cssShadow(level = 2, color = '16,21,31') {
  const e = ELEVATION[clamp(level, 0, ELEVATION.length - 1)];
  return `0 ${e.dy}px ${e.blur}px rgba(${color},${e.opacity})`;
}

// ---------------------------------------------------------------------------
// 7. GRADIENTES HARMÔNICOS
// ---------------------------------------------------------------------------
/**
 * Par de paradas para um gradiente bonito a partir de UMA cor.
 * Em vez de só clarear/escurear, rotaciona levemente a matiz (hue shift),
 * o que dá gradientes mais ricos e "vivos" (dica de design moderno).
 */
export function gradientStops(hex, { amount = 16, hueShift = 12 } = {}) {
  const top = saturate(lighten(rotate(hex, hueShift), amount), 6);
  const bottom = darken(rotate(hex, -hueShift / 2), amount);
  return [top, bottom];
}

/** Bloco <linearGradient> pronto (vertical por padrão). */
export function svgLinearGradient(id, hex, opts = {}) {
  const [a, b] = gradientStops(hex, opts);
  const { x1 = 0, y1 = 0, x2 = 0, y2 = 1 } = opts;
  return `<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">`
    + `<stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
}

// ---------------------------------------------------------------------------
// 8. MOVIMENTO (easing) — referência p/ animações
// ---------------------------------------------------------------------------
export const EASING = {
  standard: 'cubic-bezier(0.2, 0, 0, 1)',     // entra/sai natural (Material)
  decelerate: 'cubic-bezier(0, 0, 0, 1)',      // entrada
  accelerate: 'cubic-bezier(0.3, 0, 1, 1)',    // saída
  emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // leve overshoot
};
export const DURATION = { fast: 120, base: 200, slow: 320, slower: 480 }; // ms

// ---------------------------------------------------------------------------
// 9. AUDITORIA — avalia uma paleta e devolve um relatório usável no inspector
// ---------------------------------------------------------------------------
/**
 * Recebe pares {fg,bg,large?,label?} e devolve linhas com ratio/level.
 * Usado pelo Visual Inspector para a matriz de contraste.
 */
export function auditContrast(pairs) {
  return pairs.map((p) => ({
    label: p.label || `${p.fg} on ${p.bg}`,
    fg: p.fg, bg: p.bg,
    ...wcag(p.fg, p.bg, !!p.large),
  }));
}

export default {
  hexToRgb, rgbToHex, rgbToHsl, hslToRgb, hexToHsl, hslToHex,
  relativeLuminance, contrastRatio, wcag, bestTextOn, ensureContrast,
  lighten, darken, saturate, desaturate, rotate, mix, tone,
  complement, analogous, triadic, tetradic, splitComplement, monochrome, scale,
  spacing, SPACE, RATIOS, typeScale, RADII,
  ELEVATION, svgShadow, cssShadow, gradientStops, svgLinearGradient,
  EASING, DURATION, auditContrast,
};
