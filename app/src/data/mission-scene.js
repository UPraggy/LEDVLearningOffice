// ============================================================================
// mission-scene.js — FONTE ÚNICA da CENA DE CABEÇALHO de cada missão (SVG 1200x675)
// ----------------------------------------------------------------------------
// Antes: 1 arquivo .svg por missão (225 assets) que mudavam só texto/min/nº.
// Agora: 1 builder paramétrico. O front renderiza INLINE via
// `buildMissionScene({ trilha, missao, total })` e injeta título/tempo/nº/
// palavras dinamicamente — sem precisar de centenas de assets.
//
// Usado em dois lugares (igual scene-templates.js):
//   • App   → Missao.jsx renderiza inline (dangerouslySetInnerHTML).
//   • Build → scripts/generate-mission-images.mjs grava 1 SVG por missão como
//             preview/fallback estático em public/generated/missions/.
//
// ESM puro, sem dependências de Node → importável no navegador.
// Paleta/fontes alinhadas aos tokens reais do app (--mod-*, honey/coral,
// Fraunces / Plus Jakarta Sans).
// ============================================================================

import { ensureContrast } from '../lib/design-kit.js';

const F_DISPLAY = "'Fraunces', Georgia, serif";
const F_BODY = "'Plus Jakarta Sans', system-ui, sans-serif";

// Tema por módulo — cores derivadas dos tokens CSS do projeto.
export const THEMES = {
  computador: { bg: '#EEF1F8', paper: '#F7F4EC', ink: '#1B2A4E', accent: '#4F6BA0', warm: '#D49545' },
  celular:    { bg: '#E9F2F7', paper: '#F7F4EC', ink: '#1B2A4E', accent: '#4F7CAC', warm: '#D49545' },
  mercado:    { bg: '#FBEEE6', paper: '#FBF7EE', ink: '#1B2A4E', accent: '#D93E20', warm: '#D49545' },
  seguranca:  { bg: '#E9F1EA', paper: '#F6F3EA', ink: '#203A2B', accent: '#4F7A55', warm: '#D93E20' },
  ingles:     { bg: '#F0E9F6', paper: '#F7F2EC', ink: '#39245B', accent: '#6B3F7A', warm: '#D49545' },
};

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------
export function esc(v) {
  return String(v ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function norm(s) {
  return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}
function seedOf(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return Math.abs(h);
}
/** Clareia (p>0) ou escurece (p<0) um hex em ~p%. */
export function shade(hex, p = 0) {
  const n = parseInt(String(hex).replace('#', ''), 16);
  if (Number.isNaN(n)) return hex;
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const tgt = p < 0 ? 0 : 255, a = Math.min(Math.abs(p), 100) / 100;
  r = Math.round((tgt - r) * a + r);
  g = Math.round((tgt - g) * a + g);
  b = Math.round((tgt - b) * a + b);
  return '#' + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
const idfy = (hex) => String(hex).replace('#', '').toLowerCase();
function wrap(text, max, maxLines) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  const out = []; let line = '';
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > max && line) { out.push(line); line = w; } else { line = next; }
    if (out.length >= maxLines) break;
  }
  if (line && out.length < maxLines) out.push(line);
  return out;
}

// ---------------------------------------------------------------------------
// Primitivas de objeto — desenham numa posição explícita (cx, cy).
// ---------------------------------------------------------------------------
export const P = {
  laptop(cx, cy, t) {
    return `
      <rect x="${cx-150}" y="${cy-110}" width="300" height="200" rx="16" fill="#fff" stroke="${t.ink}" stroke-width="9"/>
      <rect x="${cx-128}" y="${cy-90}" width="256" height="158" rx="8" fill="${t.bg}"/>
      <path d="M${cx-190} ${cy+96} h380 l-26 34 h-328 z" fill="#fff" stroke="${t.ink}" stroke-width="9"/>`;
  },
  phone(cx, cy, t) {
    return `
      <rect x="${cx-92}" y="${cy-150}" width="184" height="320" rx="30" fill="#fff" stroke="${t.ink}" stroke-width="9"/>
      <rect x="${cx-66}" y="${cy-112}" width="132" height="244" rx="8" fill="${t.bg}"/>
      <circle cx="${cx}" cy="${cy+150}" r="11" fill="${t.ink}" opacity=".3"/>`;
  },
  monitor(cx, cy, t) {
    return `
      <rect x="${cx-170}" y="${cy-120}" width="340" height="220" rx="14" fill="#fff" stroke="${t.ink}" stroke-width="9"/>
      <rect x="${cx-146}" y="${cy-98}" width="292" height="176" rx="6" fill="${t.bg}"/>
      <rect x="${cx-26}" y="${cy+100}" width="52" height="40" fill="${t.ink}" opacity=".8"/>
      <rect x="${cx-80}" y="${cy+138}" width="160" height="16" rx="8" fill="${t.ink}"/>`;
  },
  chatBubbles(cx, cy, t) {
    return `
      <rect x="${cx-130}" y="${cy-70}" width="170" height="60" rx="18" fill="${t.bg}" stroke="${t.ink}" stroke-width="5"/>
      <path d="M${cx-118} ${cy-12} l0 26 l26 -26 z" fill="${t.bg}" stroke="${t.ink}" stroke-width="5"/>
      <rect x="${cx-40}" y="${cy+20}" width="170" height="60" rx="18" fill="${t.accent}" />
      <path d="M${cx+118} ${cy+78} l0 26 l-26 -26 z" fill="${t.accent}"/>
      <path d="M${cx-110} ${cy-46} h120 M${cx-110} ${cy-26} h84" stroke="${t.ink}" stroke-width="6" stroke-linecap="round" opacity=".5"/>
      <path d="M${cx-20} ${cy+44} h120 M${cx-20} ${cy+64} h70" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".85"/>`;
  },
  envelope(cx, cy, t, alert) {
    return `
      <rect x="${cx-130}" y="${cy-86}" width="260" height="172" rx="14" fill="#fff" stroke="${t.ink}" stroke-width="9"/>
      <path d="M${cx-130} ${cy-78} L${cx} ${cy+18} L${cx+130} ${cy-78}" fill="none" stroke="${t.ink}" stroke-width="9" stroke-linejoin="round"/>
      ${alert ? `<circle cx="${cx+118}" cy="${cy-78}" r="34" fill="${t.warm}"/><rect x="${cx+112}" y="${cy-98}" width="12" height="26" rx="6" fill="#fff"/><circle cx="${cx+118}" cy="${cy-58}" r="6.5" fill="#fff"/>` : ''}`;
  },
  shield(cx, cy, t, ok = true) {
    return `
      <path d="M${cx} ${cy-110} L${cx+96} ${cy-72} L${cx+78} ${cy+44} C${cx+66} ${cy+108} ${cx+34} ${cy+150} ${cx} ${cy+176} C${cx-34} ${cy+150} ${cx-66} ${cy+108} ${cx-78} ${cy+44} L${cx-96} ${cy-72} Z" fill="#fff" stroke="${t.ink}" stroke-width="9"/>
      ${ok
        ? `<path d="M${cx-34} ${cy+6} L${cx-6} ${cy+36} L${cx+44} ${cy-30}" fill="none" stroke="${t.accent}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>`
        : `<path d="M${cx-30} ${cy-24} L${cx+30} ${cy+40} M${cx+30} ${cy-24} L${cx-30} ${cy+40}" stroke="${t.warm}" stroke-width="18" stroke-linecap="round"/>`}`;
  },
  hook(cx, cy, t) {
    return `
      <path d="M${cx} ${cy-120} V${cy+40} a44 44 0 1 1 -44 -44" fill="none" stroke="${t.warm}" stroke-width="12" stroke-linecap="round"/>
      <path d="M${cx-44} ${cy-4} l-18 -22 l28 -6 z" fill="${t.warm}"/>
      <circle cx="${cx}" cy="${cy-120}" r="9" fill="${t.warm}"/>`;
  },
  lock(cx, cy, t) {
    return `
      <rect x="${cx-78}" y="${cy-30}" width="156" height="130" rx="18" fill="#fff" stroke="${t.ink}" stroke-width="9"/>
      <path d="M${cx-46} ${cy-30} v-26 a46 46 0 0 1 92 0 v26" fill="none" stroke="${t.ink}" stroke-width="9"/>
      <circle cx="${cx}" cy="${cy+24}" r="16" fill="${t.accent}"/>
      <rect x="${cx-7}" y="${cy+34}" width="14" height="34" rx="7" fill="${t.accent}"/>`;
  },
  sheet(cx, cy, t) {
    const rows = [0,1,2,3].map(i => `<line x1="${cx-160}" y1="${cy-70+i*46}" x2="${cx+160}" y2="${cy-70+i*46}" stroke="${t.ink}" opacity=".16" stroke-width="4"/>`).join('');
    const cols = [0,1,2].map(i => `<line x1="${cx-80+i*80}" y1="${cy-116}" x2="${cx-80+i*80}" y2="${cy+108}" stroke="${t.ink}" opacity=".16" stroke-width="4"/>`).join('');
    return `
      <rect x="${cx-170}" y="${cy-120}" width="340" height="240" rx="16" fill="#fff" stroke="${t.ink}" stroke-width="9"/>
      <rect x="${cx-170}" y="${cy-120}" width="340" height="42" rx="16" fill="${t.accent}" opacity=".85"/>
      ${rows}${cols}
      <rect x="${cx+12}" y="${cy-66}" width="60" height="30" rx="6" fill="${t.warm}" opacity=".6"/>`;
  },
  barChart(cx, cy, t) {
    const bars = [70,120,90,160].map((h,i) => `<rect x="${cx-130+i*68}" y="${cy+80-h}" width="44" height="${h}" rx="8" fill="${i===3?t.accent:t.ink}" opacity="${i===3?1:.78}"/>`).join('');
    return `<path d="M${cx-150} ${cy+82} h300 M${cx-150} ${cy+82} v-180" stroke="${t.ink}" stroke-width="7" stroke-linecap="round"/>${bars}<path d="M${cx-120} ${cy-26} l64 -44 l60 30 l66 -64" fill="none" stroke="${t.warm}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`;
  },
  coins(cx, cy, t) {
    return [0,1,2].map(i => `<ellipse cx="${cx}" cy="${cy-i*22}" rx="64" ry="22" fill="${t.warm}" stroke="${t.ink}" stroke-width="5"/>`).join('') +
      `<ellipse cx="${cx}" cy="${cy-66}" rx="64" ry="22" fill="#fff" stroke="${t.ink}" stroke-width="5"/><text x="${cx}" y="${cy-58}" text-anchor="middle" fill="${t.ink}" font-family="${F_BODY}" font-size="26" font-weight="700">R$</text>`;
  },
  qr(cx, cy, t) {
    let cells = ''; const s = 22;
    for (let r = 0; r < 6; r++) for (let c = 0; c < 6; c++) {
      if ((r * 7 + c * 3 + (r ^ c)) % 2 === 0) cells += `<rect x="${cx-66+c*s}" y="${cy-66+r*s}" width="${s}" height="${s}" fill="${t.ink}"/>`;
    }
    return `<rect x="${cx-82}" y="${cy-82}" width="164" height="164" rx="14" fill="#fff" stroke="${t.ink}" stroke-width="7"/>${cells}`;
  },
  folder(cx, cy, t) {
    return `<path d="M${cx-120} ${cy-70} h90 l24 30 h126 a14 14 0 0 1 14 14 v96 a14 14 0 0 1 -14 14 h-240 a14 14 0 0 1 -14 -14 v-112 a14 14 0 0 1 14 -14 z" fill="${t.warm}" stroke="${t.ink}" stroke-width="8"/>`;
  },
  browser(cx, cy, t) {
    return `
      <rect x="${cx-170}" y="${cy-110}" width="340" height="220" rx="14" fill="#fff" stroke="${t.ink}" stroke-width="9"/>
      <path d="M${cx-170} ${cy-66} h340" stroke="${t.ink}" stroke-width="7"/>
      <circle cx="${cx-146}" cy="${cy-88}" r="8" fill="${t.warm}"/><circle cx="${cx-120}" cy="${cy-88}" r="8" fill="${t.accent}"/><circle cx="${cx-94}" cy="${cy-88}" r="8" fill="${t.ink}" opacity=".4"/>
      <rect x="${cx-60}" y="${cy-98}" width="220" height="20" rx="10" fill="${t.bg}"/>
      <rect x="${cx-140}" y="${cy-40}" width="280" height="18" rx="9" fill="${t.ink}" opacity=".18"/>
      <rect x="${cx-140}" y="${cy-8}" width="200" height="18" rx="9" fill="${t.ink}" opacity=".14"/>
      <rect x="${cx-140}" y="${cy+40}" width="150" height="40" rx="12" fill="${t.accent}"/>`;
  },
  cloud(cx, cy, t) {
    return `<path d="M${cx-90} ${cy+20} a52 52 0 0 1 16 -100 a64 64 0 0 1 120 -6 a46 46 0 0 1 8 92 z" fill="#fff" stroke="${t.ink}" stroke-width="9"/><path d="M${cx} ${cy+30} v60 M${cx-26} ${cy+58} l26 32 l26 -32" fill="none" stroke="${t.accent}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`;
  },
  speech(cx, cy, t, txt, fill, color) {
    return `<rect x="${cx-86}" y="${cy-52}" width="172" height="100" rx="26" fill="${fill}" stroke="${t.ink}" stroke-width="6"/><path d="M${cx-50} ${cy+46} l-6 34 l40 -30 z" fill="${fill}" stroke="${t.ink}" stroke-width="6"/><text x="${cx}" y="${cy+12}" text-anchor="middle" fill="${color}" font-family="${F_DISPLAY}" font-size="40" font-weight="700">${esc(txt)}</text>`;
  },
  globe(cx, cy, t) {
    return `<circle cx="${cx}" cy="${cy}" r="96" fill="${t.bg}" stroke="${t.ink}" stroke-width="9"/><ellipse cx="${cx}" cy="${cy}" rx="44" ry="96" fill="none" stroke="${t.ink}" stroke-width="6" opacity=".5"/><path d="M${cx-96} ${cy} h192 M${cx-86} ${cy-46} h172 M${cx-86} ${cy+46} h172" stroke="${t.ink}" stroke-width="6" opacity=".5"/>`;
  },
  doc(cx, cy, t) {
    return `<rect x="${cx-100}" y="${cy-120}" width="200" height="250" rx="12" fill="#fff" stroke="${t.ink}" stroke-width="9"/><path d="M${cx-66} ${cy-72} h132 M${cx-66} ${cy-36} h132 M${cx-66} ${cy} h132 M${cx-66} ${cy+36} h88" stroke="${t.ink}" stroke-width="7" stroke-linecap="round" opacity=".4"/><circle cx="${cx+62}" cy="${cy+92}" r="30" fill="${t.accent}"/><path d="M${cx+48} ${cy+92} l10 12 l20 -24" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`;
  },
  badge(cx, cy, t) {
    return `<circle cx="${cx}" cy="${cy}" r="60" fill="${t.warm}" stroke="${t.ink}" stroke-width="7"/><path d="M${cx-26} ${cy} l16 18 l34 -40" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M${cx-30} ${cy+54} l-14 56 l44 -26 l44 26 l-14 -56" fill="${t.warm}" stroke="${t.ink}" stroke-width="6"/>`;
  },
  clock(cx, cy, t) {
    return `<circle cx="${cx}" cy="${cy}" r="92" fill="#fff" stroke="${t.ink}" stroke-width="9"/><path d="M${cx} ${cy} v-56 M${cx} ${cy} l42 26" stroke="${t.accent}" stroke-width="10" stroke-linecap="round"/>`;
  },
  plate(cx, cy, t) {
    return `<circle cx="${cx}" cy="${cy}" r="96" fill="#fff" stroke="${t.ink}" stroke-width="9"/><circle cx="${cx}" cy="${cy}" r="56" fill="${t.accent}" opacity=".35"/><circle cx="${cx-14}" cy="${cy-8}" r="22" fill="${t.warm}"/>`;
  },
  // --- novas primitivas p/ mais variedade ---
  videocall(cx, cy, t) {
    return `
      <rect x="${cx-170}" y="${cy-114}" width="340" height="220" rx="16" fill="#fff" stroke="${t.ink}" stroke-width="9"/>
      <rect x="${cx-150}" y="${cy-94}" width="150" height="84" rx="8" fill="${t.bg}"/><circle cx="${cx-75}" cy="${cy-58}" r="20" fill="${t.accent}"/><path d="M${cx-101} ${cy-12} a26 26 0 0 1 52 0 z" fill="${t.accent}"/>
      <rect x="${cx+8}" y="${cy-94}" width="142" height="84" rx="8" fill="${t.bg}"/><circle cx="${cx+79}" cy="${cy-58}" r="20" fill="${t.warm}"/><path d="M${cx+53} ${cy-12} a26 26 0 0 1 52 0 z" fill="${t.warm}"/>
      <rect x="${cx-150}" y="${cy+18}" width="300" height="64" rx="32" fill="${t.ink}" opacity=".08"/>
      <circle cx="${cx-56}" cy="${cy+50}" r="22" fill="${t.accent}"/><circle cx="${cx+4}" cy="${cy+50}" r="22" fill="${t.ink}" opacity=".5"/><circle cx="${cx+64}" cy="${cy+50}" r="22" fill="${t.warm}"/>`;
  },
  camera(cx, cy, t) {
    return `
      <rect x="${cx-120}" y="${cy-78}" width="240" height="170" rx="20" fill="#fff" stroke="${t.ink}" stroke-width="9"/>
      <path d="M${cx-78} ${cy-78} l22 -30 h72 l22 30 z" fill="#fff" stroke="${t.ink}" stroke-width="9" stroke-linejoin="round"/>
      <circle cx="${cx}" cy="${cy+12}" r="52" fill="${t.bg}" stroke="${t.ink}" stroke-width="9"/>
      <circle cx="${cx}" cy="${cy+12}" r="24" fill="${t.accent}"/>
      <circle cx="${cx+86}" cy="${cy-50}" r="8" fill="${t.warm}"/>`;
  },
  pin(cx, cy, t) {
    return `<path d="M${cx} ${cy-110} a74 74 0 0 1 74 74 c0 54 -74 142 -74 142 c0 0 -74 -88 -74 -142 a74 74 0 0 1 74 -74 z" fill="${t.accent}" stroke="${t.ink}" stroke-width="9"/><circle cx="${cx}" cy="${cy-32}" r="28" fill="#fff"/>`;
  },
  heart(cx, cy, t) {
    return `<path d="M${cx} ${cy+78} C${cx-120} ${cy-12} ${cx-78} ${cy-104} ${cx} ${cy-44} C${cx+78} ${cy-104} ${cx+120} ${cy-12} ${cx} ${cy+78} Z" fill="#fff" stroke="${t.ink}" stroke-width="9"/><path d="M${cx-58} ${cy-12} h32 l14 -28 l20 56 l14 -28 h36" fill="none" stroke="${t.accent}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`;
  },
  spark(cx, cy, t) {
    return `<path d="M${cx} ${cy-92} l20 56 l56 20 l-56 20 l-20 56 l-20 -56 l-56 -20 l56 -20 z" fill="${t.warm}" stroke="${t.ink}" stroke-width="7" stroke-linejoin="round"/><path d="M${cx+72} ${cy-78} l8 22 l22 8 l-22 8 l-8 22 l-8 -22 l-22 -8 l22 -8 z" fill="${t.accent}"/>`;
  },
};

// ---------------------------------------------------------------------------
// Composição da cena por módulo + palavra-chave + variante (seed).
// `variant` (0..2) reposiciona / troca o objeto-acento p/ dar variedade
// entre missões do mesmo grupo, sem perder a identidade do tema.
// ---------------------------------------------------------------------------
export function buildScene(modulo, text, t, seed) {
  const k = norm(text);
  const has = (...words) => words.some(w => k.includes(w));
  const cx = 600, cy = 350;
  const v = seed % 3;

  if (modulo === 'seguranca') {
    if (has('senha', '2fa', 'autentic', 'biometr')) return P.lock(cx - 60, cy, t) + P.shield(cx + 200, cy - 10, t, true);
    if (has('pix', 'banco', 'golpe do', 'dinheiro', 'cartao')) return P.phone(cx - 150, cy, t) + P.shield(cx + 150, cy, t, true) + P.coins(cx + 150, cy + 150, t);
    if (has('vaz', 'invad', 'hacker', 'ataque')) return P.lock(cx - 30, cy, t) + P.hook(cx + 230, cy - 30, t);
    if (has('privac', 'dados', 'rastr')) return P.shield(cx - 30, cy, t, true) + P.lock(cx + 230, cy + 6, t);
    const segVar = [
      P.envelope(cx - 160, cy, t, true) + P.hook(cx + 70, cy - 40, t) + P.shield(cx + 250, cy + 10, t, true),
      P.phone(cx - 150, cy, t) + P.hook(cx + 90, cy - 30, t) + P.shield(cx + 250, cy + 6, t, true),
      P.lock(cx - 40, cy, t) + P.shield(cx + 210, cy - 6, t, true),
    ];
    return segVar[v];
  }
  if (modulo === 'mercado') {
    if (has('excel', 'planilha', 'planilh', 'procv', 'formula', 'soma', 'tabela', 'dados', 'celula', 'format', 'grafico', 'media', 'filtro', 'cont.se', 'cont se', 'celul')) {
      return v === 1 ? P.sheet(cx - 30, cy, t) : P.sheet(cx - 160, cy, t) + P.barChart(cx + 200, cy - 10, t);
    }
    if (has('curriculo', 'linkedin', 'entrevista', 'carreira', 'vaga', 'emprego', 'perfil', 'recrut')) return P.doc(cx - 120, cy, t) + P.badge(cx + 180, cy + 60, t);
    if (has('ia', 'prompt', 'intelig', 'chatbot', 'automa', 'chatgpt', 'gemini', 'claude')) return P.monitor(cx - 120, cy, t) + P.spark(cx + 220, cy - 20, t);
    if (has('freela', 'cliente', 'negocia', 'preco', 'venda', 'salario')) return P.laptop(cx - 140, cy, t) + P.coins(cx + 230, cy + 60, t);
    if (has('email', 'e-mail', 'comunica', 'escrev', 'mensagem')) return P.monitor(cx - 130, cy, t) + P.envelope(cx + 230, cy, t, false);
    const mercVar = [
      P.barChart(cx - 120, cy, t) + P.coins(cx + 230, cy + 60, t),
      P.sheet(cx - 150, cy, t) + P.spark(cx + 220, cy - 10, t),
      P.doc(cx - 110, cy, t) + P.badge(cx + 200, cy + 50, t),
    ];
    return mercVar[v];
  }
  if (modulo === 'celular') {
    if (has('whatsapp', 'wpp', 'mensagem', 'grupo', 'conversa', 'audio', 'etiqueta')) return P.phone(cx - 160, cy, t) + P.chatBubbles(cx + 170, cy, t);
    if (has('pix', 'pagamento', 'banco', 'qr', 'pagar', 'receber')) return P.phone(cx - 150, cy, t) + P.qr(cx + 170, cy - 30, t) + P.coins(cx + 170, cy + 140, t);
    if (has('gov', 'cnh', 'inss', 'documento', 'beneficio')) return P.phone(cx - 120, cy, t) + P.shield(cx + 200, cy, t, true);
    if (has('saude', 'sus', 'vacina', 'exame', 'telemedicina', 'remedio')) return P.phone(cx - 150, cy, t) + P.heart(cx + 210, cy - 10, t);
    if (has('maps', 'mapa', 'rota', 'uber', 'transporte', 'direc', 'mobilidade', 'localiza')) return P.phone(cx - 150, cy, t) + P.pin(cx + 210, cy - 4, t);
    if (has('foto', 'backup', 'armazen', 'espaco', 'memoria', 'camera', 'imagem')) return P.phone(cx - 150, cy, t) + P.camera(cx + 200, cy - 6, t);
    if (has('nuvem', 'cloud', 'drive')) return P.phone(cx - 150, cy, t) + P.cloud(cx + 200, cy - 20, t);
    if (has('config', 'ajuste', 'organiz', 'dominio', 'atalho')) return P.phone(cx - 120, cy, t) + P.folder(cx + 210, cy + 20, t);
    const celVar = [
      P.phone(cx, cy, t) + P.chatBubbles(cx + 250, cy - 10, t),
      P.phone(cx - 150, cy, t) + P.pin(cx + 200, cy - 4, t),
      P.phone(cx - 150, cy, t) + P.camera(cx + 200, cy - 6, t),
    ];
    return celVar[v];
  }
  if (modulo === 'ingles') {
    const pairs = [['Hello', 'Hi'], ['Yes', 'No'], ['Good', 'Day'], ['Thanks', 'Please'], ['Nice', 'You'], ['See', 'Soon']];
    if (has('numero', 'number', 'hora', 'time', 'cor', 'color', 'data')) return P.clock(cx - 180, cy, t) + P.speech(cx + 140, cy - 20, t, 'One', t.bg, t.ink);
    if (has('comida', 'food', 'restaurant', 'gosto')) return P.plate(cx - 160, cy, t) + P.speech(cx + 160, cy - 20, t, 'Food', t.accent, '#fff');
    if (has('rotina', 'routine', 'dia', 'day', 'present simple')) return P.clock(cx - 170, cy, t) + P.globe(cx + 180, cy, t);
    if (has('lugar', 'place', 'direc', 'viaj', 'travel', 'mapa')) return P.pin(cx - 150, cy, t) + P.globe(cx + 190, cy, t);
    if (has('passado', 'past', 'histor', 'story', 'narr')) return P.doc(cx - 130, cy, t) + P.speech(cx + 180, cy - 20, t, 'Was', t.bg, t.ink);
    if (has('plano', 'future', 'futuro', 'will', 'going')) return P.clock(cx - 170, cy, t) + P.spark(cx + 200, cy - 10, t);
    if (has('trabalho', 'work', 'job', 'entrevista', 'curriculo', 'email')) return P.doc(cx - 130, cy, t) + P.badge(cx + 180, cy + 50, t);
    if (has('conversa', 'opini', 'speak', 'talk')) return P.speech(cx - 60, cy - 50, t, 'Yes', t.bg, t.ink) + P.speech(cx + 160, cy + 30, t, 'Sure', t.accent, '#fff');
    const pr = pairs[seed % pairs.length];
    return P.globe(cx - 220, cy, t) + P.speech(cx + 30, cy - 60, t, pr[0], t.bg, t.ink) + P.speech(cx + 230, cy + 40, t, pr[1], t.accent, '#fff');
  }
  /* computador */
  if (has('arquivo', 'pasta', 'organiz', 'atalho', 'ergonom', 'fundament')) return P.monitor(cx - 130, cy, t) + P.folder(cx + 220, cy + 20, t);
  if (has('navegador', 'internet', 'site', 'pesquis', 'busca', 'aba', 'download', 'favorit')) return P.browser(cx, cy, t);
  if (has('word', 'texto', 'document', 'escrev', 'docs')) return P.monitor(cx - 130, cy, t) + P.doc(cx + 230, cy, t);
  if (has('email', 'e-mail', 'correio')) return P.monitor(cx - 130, cy, t) + P.envelope(cx + 230, cy, t, false);
  if (has('nuvem', 'cloud', 'drive', 'backup', 'calendar', 'colabora', 'workspace')) return P.laptop(cx - 130, cy, t) + P.cloud(cx + 220, cy - 10, t);
  if (has('reuni', 'meet', 'zoom', 'teams', 'video', 'chamada')) return P.videocall(cx, cy, t);
  const compVar = [
    P.monitor(cx - 110, cy, t) + P.folder(cx + 240, cy + 30, t),
    P.laptop(cx - 120, cy, t) + P.browser(cx + 230, cy, t).replace(/width="340"/, 'width="260"'),
    P.monitor(cx - 120, cy, t) + P.doc(cx + 240, cy, t),
  ];
  return compVar[v];
}

// ---------------------------------------------------------------------------
// API pública
// ---------------------------------------------------------------------------
/**
 * Monta o SVG completo da cena de cabeçalho de uma missão.
 * @param {object} args
 * @param {object} args.trilha  { id, modulo, nome }
 * @param {object} args.missao  { id, titulo, desc?, tempo }
 * @param {number} args.total   total de missões na trilha (p/ "01/06")
 * @returns {string} SVG completo (1200x675)
 */
export function buildMissionScene({ trilha, missao, total }) {
  const t = THEMES[trilha?.modulo] || THEMES.computador;
  const seed = seedOf(`${trilha?.id}-${missao?.id}`);
  const title = wrap(missao?.titulo, 30, 2);
  const n = String(missao?.id).padStart(2, '0');
  const tot = String(total || 1).padStart(2, '0');
  const scene = buildScene(trilha?.modulo, `${missao?.titulo} ${missao?.desc || ''}`, t, seed);
  const dots = [0,1,2,3,4].map(i => {
    const x = 120 + ((seed >> (i*3)) % 980);
    const y = 120 + ((seed >> (i*2+1)) % 360);
    const r = 4 + ((seed >> i) % 5);
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="${t.ink}" opacity=".06"/>`;
  }).join('');

  const gBg = `mbg-${idfy(t.bg)}`;
  const gHead = `mhd-${idfy(t.ink)}`;
  const gAcc = `macc-${idfy(t.accent)}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" role="img" aria-label="${esc(missao?.titulo)}">
  <defs>
    <linearGradient id="${gBg}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${shade(t.bg, 26)}"/><stop offset="1" stop-color="${shade(t.bg, -8)}"/></linearGradient>
    <linearGradient id="${gHead}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${shade(t.ink, 14)}"/><stop offset="1" stop-color="${shade(t.ink, -18)}"/></linearGradient>
    <linearGradient id="${gAcc}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${shade(t.accent, 12)}"/><stop offset="1" stop-color="${shade(t.accent, -16)}"/></linearGradient>
    <linearGradient id="m-sheen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <radialGradient id="m-glow" cx="0.5" cy="0.1" r="0.9"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <filter id="m-panel" x="-12%" y="-12%" width="124%" height="124%"><feDropShadow dx="0" dy="14" stdDeviation="24" flood-color="${shade(t.ink, -40)}" flood-opacity=".16"/></filter>
    <filter id="m-obj" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="${shade(t.ink, -40)}" flood-opacity=".18"/></filter>
  </defs>
  <rect width="1200" height="675" fill="url(#${gBg})"/>
  <rect width="1200" height="360" fill="url(#m-glow)"/>
  <circle cx="1080" cy="40" r="190" fill="${t.accent}" opacity=".12"/>
  <circle cx="120" cy="660" r="220" fill="${t.warm}" opacity=".10"/>
  ${dots}
  <rect x="64" y="150" width="1072" height="430" rx="40" fill="${t.paper}" filter="url(#m-panel)"/>
  <rect x="64" y="150" width="1072" height="430" rx="40" fill="none" stroke="${shade(t.ink, 78)}" stroke-width="2"/>
  <rect x="64" y="150" width="1072" height="200" rx="40" fill="url(#m-sheen)"/>
  <g filter="url(#m-obj)">${scene}</g>
  <path d="M0 0 h1200 v96 a24 24 0 0 1 -24 24 h-1152 a24 24 0 0 1 -24 -24 z" fill="url(#${gHead})"/>
  <path d="M0 0 h1200 v44 a24 24 0 0 1 -24 24 h-1152 a24 24 0 0 1 -24 -24 z" fill="url(#m-sheen)"/>
  <text x="72" y="52" fill="${ensureContrast(shade(t.warm, 12), shade(t.ink, -10), 4.5)}" font-family="${F_BODY}" font-size="22" font-weight="700" letter-spacing="5">${esc(String(trilha?.nome || '').toUpperCase())}</text>
  <text x="72" y="98" fill="#fff" font-family="${F_DISPLAY}" font-size="40" font-weight="700">${esc(title[0] || missao?.titulo)}</text>
  <rect x="64" y="600" width="170" height="46" rx="23" fill="url(#${gHead})" filter="url(#m-obj)"/>
  <text x="92" y="631" fill="#fff" font-family="${F_BODY}" font-size="21" font-weight="700">Missão ${n}</text>
  <rect x="248" y="600" width="138" height="46" rx="23" fill="url(#${gAcc})" filter="url(#m-obj)"/>
  <text x="280" y="631" fill="#fff" font-family="${F_BODY}" font-size="21" font-weight="700">${esc(missao?.tempo)} min</text>
  <text x="1136" y="631" text-anchor="end" fill="${t.ink}" font-family="${F_BODY}" font-size="20" font-weight="700" opacity=".5">${n}/${tot}</text>
</svg>`;
}
