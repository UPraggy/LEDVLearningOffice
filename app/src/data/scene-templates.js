// ============================================================================
// scene-templates.js  —  FONTE ÚNICA das cenas simuladas (SVG paramétrico)
// ----------------------------------------------------------------------------
// Cada template é uma FUNÇÃO `(data = {}) => svgString` com geometria FIXA.
// Só o TEXTO/valores mudam via `data`; as porcentagens das `areas` dos
// hotspots continuam válidas porque nenhum elemento se move.
//
// Usado em dois lugares:
//   • App  → Interacoes.jsx renderiza inline com dangerouslySetInnerHTML
//            (seguro: todo texto dinâmico passa por esc()).
//   • Build → scripts/generate-interactive-scenes.mjs grava 1 SVG padrão por
//            template em public/generated/interactive/<slug>.svg (preview/fallback).
//
// ESM puro, sem dependências de Node — pode ser importado no navegador.
// ============================================================================

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------
// Toolkit de design (contraste WCAG, cor, elevação) — ver docs/DESIGN-KB.md
import { ensureContrast } from '../lib/design-kit.js';

export const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Quebra um array de linhas em <tspan> a partir de x, com dy fixo. */
export function tspans(lines, x, dy = 38) {
  return (lines || [])
    .map((ln, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : dy}">${esc(ln)}</tspan>`)
    .join('');
}

/** Aceita string ("a|b|c") ou array; devolve array de linhas. */
export function lines(v, fallback = []) {
  if (Array.isArray(v)) return v;
  if (typeof v === 'string' && v.length) return v.split('|');
  return fallback;
}

// ---------------------------------------------------------------------------
// paleta + utilidades de cor
// ---------------------------------------------------------------------------
/** Tokens do projeto (alinhados ao CSS). */
export const PAL = {
  computador: '#1B2A4E',
  celular: '#4F7CAC',
  ingles: '#6B3F7A',
  mercado: '#D93E20',
  seguranca: '#4F7A55',
  honey: '#D49545',
  coral: '#D93E20',
  sage: '#4F7A55',
  ink: '#1A2540',
  inkSoft: '#5A6173',
  inkMute: '#9AA2B4',
  paper: '#F4F1E8',
  paperWarm: '#EFE9DB',
  line: '#D9CFB8',
  ok: '#3F8A4F',
  warn: '#C9A227',
  danger: '#C0392B',
};

/** Clareia (p>0) ou escurece (p<0) um hex em ~p%. */
export function shade(hex, p = 0) {
  const n = parseInt(String(hex).replace('#', ''), 16);
  if (Number.isNaN(n)) return hex;
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const t = p < 0 ? 0 : 255, a = Math.min(Math.abs(p), 100) / 100;
  r = Math.round((t - r) * a + r);
  g = Math.round((t - g) * a + g);
  b = Math.round((t - b) * a + b);
  return '#' + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
const idfy = (hex) => String(hex).replace('#', '').toLowerCase();

// ---------------------------------------------------------------------------
// <defs> globais — injetados em TODA cena (sombras suaves, gradientes base)
// ---------------------------------------------------------------------------
const DEFS = `
  <linearGradient id="bg-paper" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#EEF2F6"/><stop offset="1" stop-color="#DFE6EC"/>
  </linearGradient>
  <radialGradient id="bg-glow" cx="0.5" cy="0.08" r="0.9">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.5"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="sheen" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.22"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
  </linearGradient>
  <filter id="sh-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="10" stdDeviation="16" flood-color="#16203A" flood-opacity="0.18"/>
  </filter>
  <filter id="sh-card" x="-40%" y="-40%" width="180%" height="180%">
    <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#16203A" flood-opacity="0.13"/>
  </filter>`;

const open = (label) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="640" viewBox="0 0 1000 640" role="img" aria-label="${esc(label)}"><defs>${DEFS}</defs>`;
const close = `</svg>`;

/** Envelopa um corpo em um <svg> completo com rótulo acessível. */
export function wrap(label, body) {
  return `${open(label)}${body}\n${close}`;
}

/** Fundo padrão de cena (gradiente claro + leve brilho no topo). */
export const sceneBg = () =>
  `<rect width="1000" height="640" fill="url(#bg-paper)"/>` +
  `<rect width="1000" height="320" fill="url(#bg-glow)"/>`;

/** Card branco arredondado com sombra suave + borda fina. */
export function card(x, y, w, h, o = {}) {
  const { rx = 18, fill = '#ffffff', stroke = '#E6DDC8', sw = 2, shadow = 'soft' } = o;
  const filt = shadow ? ` filter="url(#sh-${shadow})"` : '';
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"${filt}/>` +
    (stroke ? `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="none" stroke="${stroke}" stroke-width="${sw}"/>` : '');
}

/** Pílula/etiqueta com texto centralizado. */
export function pill(x, y, w, h, text, o = {}) {
  const { fill = '#EFE9DB', textFill = '#1A2540', size = 18, weight = 700, rx = h / 2 } = o;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"/>` +
    `<text x="${x + w / 2}" y="${y + h / 2 + size * 0.34}" text-anchor="middle" fill="${textFill}" font-family="Arial" font-size="${size}" font-weight="${weight}">${esc(text)}</text>`;
}

/** Botão de ação preenchido. */
export function btn(x, y, w, h, text, o = {}) {
  const { fill = '#4F7A55', textFill = '#ffffff', size = 24, rx = 14, sheen = true } = o;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" filter="url(#sh-card)"/>` +
    (sheen ? `<rect x="${x}" y="${y}" width="${w}" height="${h / 2}" rx="${rx}" fill="url(#sheen)"/>` : '') +
    `<text x="${x + w / 2}" y="${y + h / 2 + size * 0.34}" text-anchor="middle" fill="${textFill}" font-family="Arial" font-size="${size}" font-weight="700">${esc(text)}</text>`;
}

/** Avatar circular com inicial e anel sutil. */
export function avatar(cx, cy, r, initial, o = {}) {
  const { fill = '#4F7CAC', ring = 'rgba(255,255,255,.35)' } = o;
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/>` +
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${ring}" stroke-width="3"/>` +
    `<text x="${cx}" y="${cy + r * 0.34}" text-anchor="middle" fill="#fff" font-family="Arial" font-size="${Math.round(r * 0.95)}" font-weight="700">${esc(String(initial || '•')[0].toUpperCase())}</text>`;
}

/** Balão de chat com rabicho opcional ('l' esquerda, 'r' direita). */
export function bubble(x, y, w, h, o = {}) {
  const { fill = '#F2EBDD', rx = 22, tail = 'l' } = o;
  let t = '';
  if (tail === 'l') t = `<path d="M${x} ${y + 34} l-22 -6 l22 -22 z" fill="${fill}"/>`;
  else if (tail === 'r') t = `<path d="M${x + w} ${y + 34} l22 -6 l-22 -22 z" fill="${fill}"/>`;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"/>${t}`;
}

/** Moldura de "app" — card branco com cabeçalho em gradiente + avatar.
 *  Geometria preservada (header 108px, avatar 126/88, título 180/80). */
export function frame({ headerFill = '#254B63', title, sub, badge, subFill }) {
  const initial = badge || (title ? String(title)[0].toUpperCase() : '•');
  const gid = `hg-${idfy(headerFill)}`;
  const g2 = shade(headerFill, -24);
  // subtítulo com contraste garantido (WCAG) contra o tom médio do header
  const mid = shade(headerFill, -8);
  const subColor = ensureContrast(subFill || shade(headerFill, 58), mid, 4.2);
  return `
  ${sceneBg()}
  ${card(48, 34, 904, 572, { rx: 30, stroke: '#E2D8C2', sw: 2, shadow: 'soft' })}
  <linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${shade(headerFill, 8)}"/><stop offset="1" stop-color="${g2}"/></linearGradient>
  <path d="M48 64 a30 30 0 0 1 30 -30 h844 a30 30 0 0 1 30 30 v78 h-904 z" fill="url(#${gid})"/>
  <path d="M48 64 a30 30 0 0 1 30 -30 h844 a30 30 0 0 1 30 30 v34 h-904 z" fill="url(#sheen)"/>
  ${avatar(126, 88, 34, initial, { fill: shade(headerFill, 30) })}
  <text x="180" y="80" fill="#fff" font-family="Arial" font-size="26" font-weight="700">${esc(title)}</text>
  <text x="180" y="116" fill="${subColor}" font-family="Arial" font-size="20" font-weight="700">${esc(sub)}</text>`;
}

// ícone de "enviar" reutilizável (seta dentro de círculo verde)
const sendBtn = (cx, cy) =>
  `<circle cx="${cx}" cy="${cy}" r="38" fill="#4F7A55" filter="url(#sh-card)"/>` +
  `<circle cx="${cx}" cy="${cy}" r="38" fill="url(#sheen)"/>` +
  `<path d="M${cx - 15} ${cy} h30 M${cx + 4} ${cy - 12} l14 12 l-14 12" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`;

// ---------------------------------------------------------------------------
// SCENE_BUILDERS — map slug → (data) => corpo do SVG (sem o <svg> externo)
// ---------------------------------------------------------------------------
export const SCENE_BUILDERS = {
  // 1) WhatsApp — golpe do "chefe" --------------------------------------------
  // ANCHORS: bolha1 link/pedido; rodapé caixa de msg
  'wpp-chefe': (d = {}) => {
    const t = {
      title: 'Diretoria RH', sub: 'novo número · online', badge: 'D',
      hora1: '10:47', hora2: '10:48',
      msg1: 'Está em reunião? Preciso de um favor rápido e|sigiloso. Compre 5 cartões-presente de R$ 200 e|me mande os códigos. Depois te reembolso.',
      msg2: 'É urgente, não comente com ninguém do|escritório por enquanto. Confio em você.',
      ...d,
    };
    return `
  ${frame({ headerFill: '#254B63', title: t.title, sub: t.sub, badge: t.badge })}
  <rect x="92" y="184" width="640" height="150" rx="24" fill="#F2EBDD"/>
  <path d="M92 218 l-24 -6 l24 -24 z" fill="#F2EBDD"/>
  <text x="124" y="226" fill="#1A2540" font-family="Arial" font-size="24">${tspans(lines(t.msg1), 124)}</text>
  <text x="700" y="320" fill="#7A8294" font-family="Arial" font-size="17">${esc(t.hora1)}</text>
  <rect x="92" y="356" width="540" height="92" rx="24" fill="#F2EBDD"/>
  <text x="124" y="392" fill="#1A2540" font-family="Arial" font-size="24">${tspans(lines(t.msg2), 124, 34)}</text>
  <text x="600" y="434" fill="#7A8294" font-family="Arial" font-size="17">${esc(t.hora2)}</text>
  <rect x="92" y="486" width="800" height="74" rx="37" fill="#F2EBDD"/>
  <text x="132" y="530" fill="#9AA2B4" font-family="Arial" font-size="23">Mensagem</text>
  ${sendBtn(850, 523)}`;
  },

  // 2) SMS — banco falso ------------------------------------------------------
  // ANCHORS: link {x:8,y:62,w:50,h:11}
  'sms-banco': (d = {}) => {
    const t = {
      title: 'Mensagens', sub: 'remetente: +55 11 9 ****-2213', badge: 'M',
      cabecalho: 'BANCO: aviso de segurança',
      corpo: 'Detectamos acesso indevido. Sua conta será|BLOQUEADA hoje. Regularize agora em:',
      link: 'http://kbz.lat/banco-seguro', hora: 'hoje 09:12',
      ...d,
    };
    return `
  ${frame({ headerFill: '#1B2A4E', title: t.title, sub: t.sub, badge: t.badge })}
  <rect x="92" y="190" width="720" height="250" rx="24" fill="#F2EBDD"/>
  <path d="M92 226 l-24 -6 l24 -24 z" fill="#F2EBDD"/>
  <text x="124" y="240" fill="#1A2540" font-family="Arial" font-size="24" font-weight="700">${esc(t.cabecalho)}</text>
  <text x="124" y="288" fill="#1A2540" font-family="Arial" font-size="23">${tspans(lines(t.corpo), 124, 34)}</text>
  <text x="124" y="404" fill="#1B5FA8" font-family="Arial" font-size="26" font-weight="700" text-decoration="underline">${esc(t.link)}</text>
  <text x="700" y="430" fill="#7A8294" font-family="Arial" font-size="17">${esc(t.hora)}</text>`;
  },

  // 3) PIX — confirmação ------------------------------------------------------
  // ANCHORS: bloco nome {x:8,y:26,w:84,h:20}; botão {x:14,y:78,w:72,h:13}
  'pix-confirmacao': (d = {}) => {
    const t = {
      title: 'Banco · PIX', sub: 'confirme os dados', badge: '$',
      recebedor: 'J. P. SANTOS COMERCIO ME',
      doc: 'CPF/CNPJ ••• 41.882/0001-09 · Banco 077',
      valor: 'R$ 1.250,00', botao: 'Confirmar pagamento',
      ...d,
    };
    return `
  ${frame({ headerFill: '#1B7A4B', title: t.title, sub: t.sub, badge: t.badge })}
  <rect x="92" y="190" width="816" height="118" rx="18" fill="#F4F1E8" stroke="#D9CFB8" stroke-width="2"/>
  <text x="120" y="226" fill="#7A8294" font-family="Arial" font-size="19">Você está enviando para</text>
  <text x="120" y="262" fill="#1A2540" font-family="Arial" font-size="28" font-weight="700">${esc(t.recebedor)}</text>
  <text x="120" y="294" fill="#4A5670" font-family="Arial" font-size="21">${esc(t.doc)}</text>
  <text x="120" y="356" fill="#7A8294" font-family="Arial" font-size="19">Valor</text>
  <text x="120" y="402" fill="#1A2540" font-family="Arial" font-size="36" font-weight="700">${esc(t.valor)}</text>
  <rect x="140" y="500" width="720" height="84" rx="42" fill="#1B7A4B"/>
  <text x="500" y="552" text-anchor="middle" fill="#fff" font-family="Arial" font-size="27" font-weight="700">${esc(t.botao)}</text>`;
  },

  // 4) Área de trabalho Windows ----------------------------------------------
  // ANCHORS: Iniciar {x:1,y:91,w:9,h:8}
  'windows-desktop': (d = {}) => {
    const t = {
      ico1: 'Arquivos', ico2: 'Navegador', ico3: 'E-mail', hora: '09:41',
      ...d,
    };
    return `
  <rect width="1000" height="640" fill="#1E5C8A"/>
  <rect width="1000" height="640" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#2E6FA3"/><stop offset="1" stop-color="#15405F"/></linearGradient></defs>
  <g font-family="Arial" fill="#fff" text-anchor="middle">
    <rect x="44" y="40" width="64" height="52" rx="8" fill="#F2EBDD"/><text x="76" y="120" font-size="17">${esc(t.ico1)}</text>
    <rect x="44" y="150" width="64" height="52" rx="8" fill="#4F7CAC"/><text x="76" y="230" font-size="17">${esc(t.ico2)}</text>
    <rect x="44" y="260" width="64" height="52" rx="8" fill="#3D7A4E"/><text x="76" y="340" font-size="17">${esc(t.ico3)}</text>
  </g>
  <rect x="0" y="586" width="1000" height="54" fill="#0E2A40"/>
  <rect x="14" y="592" width="44" height="42" rx="8" fill="#2E6FA3"/>
  <rect x="22" y="600" width="12" height="12" fill="#fff"/><rect x="38" y="600" width="12" height="12" fill="#fff"/>
  <rect x="22" y="616" width="12" height="12" fill="#fff"/><rect x="38" y="616" width="12" height="12" fill="#fff"/>
  <rect x="78" y="592" width="42" height="42" rx="8" fill="#19374F"/>
  <rect x="128" y="592" width="42" height="42" rx="8" fill="#19374F"/>
  <text x="930" y="619" fill="#fff" font-family="Arial" font-size="19" text-anchor="end">${esc(t.hora)}</text>`;
  },

  // 5) Navegador — URL falsa --------------------------------------------------
  // ANCHORS: barra de endereço {x:9,y:13,w:74,h:8}
  'navegador-url': (d = {}) => {
    const t = {
      aba: 'Banco do Brasil', urlBase: 'http://bb-atendimento-cliente.', urlTld: 'top', urlPath: '/login',
      marca: 'Banco do Brasil', chamada: 'Acesse sua conta para evitar o bloqueio:',
      campo1: 'Agência e conta', campo2: 'Senha', botao: 'Entrar',
      ...d,
    };
    return `
  <rect width="1000" height="640" fill="#DDE3EC"/>
  <rect x="0" y="0" width="1000" height="118" fill="#EDF1F7"/>
  <rect x="30" y="14" width="260" height="46" rx="12" fill="#fff"/>
  <text x="58" y="44" fill="#3A4356" font-family="Arial" font-size="20">${esc(t.aba)}</text>
  <rect x="90" y="72" width="740" height="46" rx="23" fill="#fff" stroke="#C4CCDA" stroke-width="2"/>
  <text x="118" y="102" fill="#B23A2E" font-family="Arial" font-size="22" font-weight="700">⚠ não seguro</text>
  <text x="270" y="102" fill="#1A2540" font-family="Arial" font-size="22">${esc(t.urlBase)}<tspan font-weight="700" fill="#B23A2E">${esc(t.urlTld)}</tspan>${esc(t.urlPath)}</text>
  <rect x="0" y="118" width="1000" height="522" fill="#fff"/>
  <rect x="0" y="118" width="1000" height="90" fill="#F4D000"/>
  <text x="60" y="176" fill="#0A3D91" font-family="Arial" font-size="34" font-weight="700">${esc(t.marca)}</text>
  <text x="60" y="280" fill="#1A2540" font-family="Arial" font-size="24">${esc(t.chamada)}</text>
  <rect x="60" y="320" width="420" height="58" rx="10" fill="#F4F1E8" stroke="#C4CCDA"/>
  <text x="80" y="357" fill="#9AA2B4" font-family="Arial" font-size="22">${esc(t.campo1)}</text>
  <rect x="60" y="396" width="420" height="58" rx="10" fill="#F4F1E8" stroke="#C4CCDA"/>
  <text x="80" y="433" fill="#9AA2B4" font-family="Arial" font-size="22">${esc(t.campo2)}</text>
  <rect x="60" y="480" width="240" height="62" rx="10" fill="#0A3D91"/>
  <text x="180" y="520" text-anchor="middle" fill="#fff" font-family="Arial" font-size="23" font-weight="700">${esc(t.botao)}</text>`;
  },

  // 6) Site gov.br falso ------------------------------------------------------
  // ANCHORS: botão pagar {x:6,y:73,w:40,h:13}
  'site-gov-falso': (d = {}) => {
    const t = {
      urlBase: 'http://gov-br-beneficio.', urlTld: 'online', urlPath: '/inss',
      titulo: 'Liberação do seu benefício',
      corpo: 'Há um valor a receber em seu nome. Para liberar,|pague a taxa de regularização abaixo via PIX.',
      valorReceber: 'Valor a receber: R$ 3.480,00', botao: 'Pagar taxa R$ 47,90',
      ...d,
    };
    return `
  <rect width="1000" height="640" fill="#EDF1F7"/>
  <rect x="0" y="0" width="1000" height="60" fill="#fff" stroke="#C4CCDA" stroke-width="2"/>
  <rect x="30" y="16" width="640" height="30" rx="15" fill="#F4F1E8"/>
  <text x="48" y="38" fill="#1A2540" font-family="Arial" font-size="18">${esc(t.urlBase)}<tspan font-weight="700" fill="#B23A2E">${esc(t.urlTld)}</tspan>${esc(t.urlPath)}</text>
  <rect x="0" y="60" width="1000" height="78" fill="#1351B4"/>
  <text x="40" y="110" fill="#fff" font-family="Arial" font-size="34" font-weight="700">gov.br</text>
  <text x="40" y="206" fill="#1A2540" font-family="Arial" font-size="30" font-weight="700">${esc(t.titulo)}</text>
  <text x="40" y="262" fill="#4A5670" font-family="Arial" font-size="23">${tspans(lines(t.corpo), 40, 34)}</text>
  <rect x="40" y="320" width="500" height="70" rx="10" fill="#FCEEDB" stroke="#E0A93B" stroke-width="2"/>
  <text x="64" y="364" fill="#9A6A12" font-family="Arial" font-size="23" font-weight="700">${esc(t.valorReceber)}</text>
  <rect x="60" y="470" width="400" height="80" rx="12" fill="#D93E20"/>
  <text x="260" y="520" text-anchor="middle" fill="#fff" font-family="Arial" font-size="25" font-weight="700">${esc(t.botao)}</text>`;
  },

  // 7) Excel — fórmula com erro ----------------------------------------------
  'excel-erro': (d = {}) => {
    const t = {
      titulo: 'Planilha — Vendas', formula: '=PROCV(E2; A:C; 3; 0)',
      erro: '#N/D', errCol: 2, errRow: 1,
      ...d,
    };
    const head = [0, 1, 2, 3, 4]
      .map((c) => `<rect x="${40 + c * 180}" y="120" width="180" height="44" fill="#DDE3EC" stroke="#C4CCDA"/><text x="${130 + c * 180}" y="149" text-anchor="middle" font-weight="700">${['A', 'B', 'C', 'D', 'E'][c]}</text>`)
      .join('');
    const cells = [0, 1, 2, 3, 4, 5]
      .map((r) => [0, 1, 2, 3, 4].map((c) => {
        const x = 40 + c * 180, y = 164 + r * 70;
        const isErr = c === t.errCol && r === t.errRow;
        return `<rect x="${x}" y="${y}" width="180" height="70" fill="${isErr ? '#FBE3DE' : '#fff'}" stroke="#C4CCDA"/>` +
          (isErr ? `<text x="${x + 90}" y="${y + 44}" text-anchor="middle" fill="#B23A2E" font-weight="700">${esc(t.erro)}</text>` : '');
      }).join('')).join('');
    return `
  <rect width="1000" height="640" fill="#E6E9EC"/>
  <rect x="0" y="0" width="1000" height="64" fill="#1E7145"/>
  <text x="32" y="42" fill="#fff" font-family="Arial" font-size="24" font-weight="700">${esc(t.titulo)}</text>
  <rect x="0" y="64" width="1000" height="48" fill="#F4F1E8" stroke="#C4CCDA"/>
  <text x="24" y="95" fill="#7A8294" font-family="Arial" font-size="20">fx</text>
  <text x="64" y="95" fill="#1A2540" font-family="Consolas, monospace" font-size="22">${esc(t.formula)}</text>
  <g font-family="Arial" font-size="20" fill="#1A2540">
    ${head}
    ${cells}
  </g>`;
  },

  // 8) E-mail falso de entrega ------------------------------------------------
  // ANCHORS: remetente {x:11,y:28,w:62,h:8}; botão {x:7,y:74,w:32,h:10}
  'email-entrega': (d = {}) => {
    const t = {
      title: 'Caixa de entrada', sub: 'há 3 minutos', badge: 'B',
      deBase: 'correios@entrega-rastreio.', deTld: 'click',
      assunto: 'Sua encomenda está retida',
      corpo: 'Há uma taxa alfandegária pendente de R$ 9,90.|Pague em até 24h para liberar a entrega, senão o|pacote será devolvido ao remetente.',
      botao: 'Pagar e rastrear',
      ...d,
    };
    return `
  ${frame({ headerFill: '#1B2A4E', title: t.title, sub: t.sub, badge: t.badge })}
  <text x="72" y="200" fill="#7A8294" font-family="Arial" font-size="20">De:</text>
  <text x="120" y="200" fill="#1A2540" font-family="Arial" font-size="25" font-weight="700">${esc(t.deBase)}<tspan fill="#B23A2E">${esc(t.deTld)}</tspan></text>
  <text x="72" y="256" fill="#7A8294" font-family="Arial" font-size="20">Assunto:</text>
  <text x="190" y="256" fill="#1A2540" font-family="Arial" font-size="24">${esc(t.assunto)}</text>
  <text x="72" y="324" fill="#4A5670" font-family="Arial" font-size="23">${tspans(lines(t.corpo), 72, 36)}</text>
  <rect x="72" y="476" width="320" height="68" rx="14" fill="#D93E20"/>
  <text x="232" y="519" text-anchor="middle" fill="#fff" font-family="Arial" font-size="23" font-weight="700">${esc(t.botao)}</text>`;
  },

  // 9) Grupo de WhatsApp com link de promoção falsa ---------------------------
  // ANCHORS: link {x:10,y:55,w:62,h:9}
  'wpp-promo': (d = {}) => {
    const t = {
      title: 'Família ❤', sub: 'grupo · 18 membros', badge: 'F',
      autor: 'Tia Cláudia', msg1: 'Gente, olha que oferta!! 😍',
      destaque: 'SUPERMERCADO dando R$ 500 em compras!',
      chamada: 'Só responder o cadastro neste link 👇',
      link: 'promo-mercado.brindes-vip.xyz',
      ...d,
    };
    return `
  ${frame({ headerFill: '#254B63', title: t.title, sub: t.sub, badge: t.badge })}
  <rect x="92" y="184" width="430" height="86" rx="22" fill="#F2EBDD"/>
  <text x="120" y="220" fill="#4F7A55" font-family="Arial" font-size="18" font-weight="700">${esc(t.autor)}</text>
  <text x="120" y="252" fill="#1A2540" font-family="Arial" font-size="22">${esc(t.msg1)}</text>
  <rect x="92" y="288" width="700" height="180" rx="22" fill="#F2EBDD"/>
  <text x="120" y="328" fill="#4F7A55" font-family="Arial" font-size="18" font-weight="700">${esc(t.autor)}</text>
  <text x="120" y="362" fill="#1A2540" font-family="Arial" font-size="23" font-weight="700">${esc(t.destaque)}</text>
  <text x="120" y="402" fill="#1A2540" font-family="Arial" font-size="22">${esc(t.chamada)}</text>
  <text x="120" y="446" fill="#1B5FA8" font-family="Arial" font-size="23" font-weight="700" text-decoration="underline">${esc(t.link)}</text>
  <rect x="92" y="500" width="800" height="74" rx="37" fill="#F2EBDD"/>
  <text x="132" y="544" fill="#9AA2B4" font-family="Arial" font-size="23">Mensagem</text>
  ${sendBtn(850, 537)}`;
  },

  // 10) Pop-up falso de vírus -------------------------------------------------
  // ANCHORS: X fechar {x:80,y:30,w:9,h:9}; botão {x:30,y:64,w:40,h:11}
  'popup-virus': (d = {}) => {
    const t = {
      site: 'www.noticias-do-dia.info', tituloPopup: '⚠ Alerta de segurança',
      manchete: 'Seu computador está infectado!',
      l1: '5 vírus encontrados. Limpe agora para',
      l2: 'proteger seus dados bancários.',
      botao: 'Limpar agora (grátis)',
      ...d,
    };
    return `
  <rect width="1000" height="640" fill="#33414F"/>
  <rect x="0" y="0" width="1000" height="40" fill="#1E2933"/>
  <text x="20" y="27" fill="#9AA2B4" font-family="Arial" font-size="16">${esc(t.site)}</text>
  <rect x="230" y="140" width="540" height="360" rx="18" fill="#fff"/>
  <rect x="230" y="140" width="540" height="64" rx="18" fill="#C0392B"/>
  <rect x="230" y="180" width="540" height="24" fill="#C0392B"/>
  <text x="262" y="182" fill="#fff" font-family="Arial" font-size="24" font-weight="700">${esc(t.tituloPopup)}</text>
  <text x="724" y="182" fill="#fff" font-family="Arial" font-size="28" font-weight="700" text-anchor="middle">✕</text>
  <text x="500" y="262" text-anchor="middle" fill="#1A2540" font-family="Arial" font-size="26" font-weight="700">${esc(t.manchete)}</text>
  <text x="500" y="306" text-anchor="middle" fill="#4A5670" font-family="Arial" font-size="21">${esc(t.l1)}</text>
  <text x="500" y="334" text-anchor="middle" fill="#4A5670" font-family="Arial" font-size="21">${esc(t.l2)}</text>
  <rect x="300" y="392" width="400" height="72" rx="12" fill="#27AE60"/>
  <text x="500" y="438" text-anchor="middle" fill="#fff" font-family="Arial" font-size="24" font-weight="700">${esc(t.botao)}</text>`;
  },

  // ==========================================================================
  // NOVOS TEMPLATES — ampliam a cobertura por trilha
  // ==========================================================================

  // 11) SMS de golpe genérico (gov / prêmio) ----------------------------------
  // ANCHORS: link {x:8,y:62,w:50,h:11} (mesmo layout de sms-banco)
  'sms-gov': (d = {}) => SCENE_BUILDERS['sms-banco']({
    title: 'Mensagens', sub: 'remetente: GOV-BR', badge: 'M',
    cabecalho: 'GOV.BR: benefício liberado',
    corpo: 'Você tem R$ 1.200 a receber. Confirme seus|dados em até 24h pelo link oficial:',
    link: 'http://gov-br.benef-2024.top', hora: 'hoje 11:05',
    ...d,
  }),

  // 12) Explorador de arquivos (achar/abrir pasta) ----------------------------
  // ANCHORS: pasta-alvo (1ª) {x:30,y:33,w:40,h:9}; lixeira (lateral) {x:5,y:70,w:20,h:7}
  'janela-arquivos': (d = {}) => {
    const t = {
      titulo: 'Explorador de Arquivos', caminho: 'Este Computador › Documentos',
      pastas: 'Documentos|Imagens|Downloads|Trabalho',
      arquivo: 'relatorio-vendas.xlsx',
      ...d,
    };
    const ps = lines(t.pastas);
    const rows = ps.map((p, i) => {
      const y = 200 + i * 70;
      return `<rect x="296" y="${y}" width="600" height="58" rx="8" fill="${i === 0 ? '#E8F0F7' : '#F4F1E8'}" stroke="#C4CCDA"/>` +
        `<rect x="316" y="${y + 16}" width="34" height="26" rx="4" fill="#E0A93B"/>` +
        `<text x="368" y="${y + 38}" fill="#1A2540" font-family="Arial" font-size="22">${esc(p)}</text>`;
    }).join('');
    return `
  <rect width="1000" height="640" fill="#EDF1F7"/>
  <rect x="0" y="0" width="1000" height="56" fill="#F7F9FC" stroke="#C4CCDA"/>
  <text x="28" y="36" fill="#1A2540" font-family="Arial" font-size="22" font-weight="700">${esc(t.titulo)}</text>
  <rect x="0" y="56" width="1000" height="44" fill="#fff" stroke="#C4CCDA"/>
  <text x="28" y="84" fill="#4A5670" font-family="Arial" font-size="19">${esc(t.caminho)}</text>
  <rect x="0" y="100" width="270" height="540" fill="#F2EBDD"/>
  <text x="28" y="150" fill="#4A5670" font-family="Arial" font-size="19" font-weight="700">Acesso rápido</text>
  <text x="40" y="200" fill="#1A2540" font-family="Arial" font-size="20">⭐ Favoritos</text>
  <text x="40" y="250" fill="#1A2540" font-family="Arial" font-size="20">💻 Este Computador</text>
  <rect x="28" y="490" width="214" height="50" rx="8" fill="#E8E0CC"/>
  <text x="48" y="522" fill="#1A2540" font-family="Arial" font-size="20">🗑 Lixeira</text>
  ${rows}
  <text x="296" y="190" fill="#7A8294" font-family="Arial" font-size="18">Pastas</text>`;
  },

  // 13) Planilha — soma simples (=SOMA) ---------------------------------------
  // ANCHORS: célula do total {x:62,y:75,w:18,h:9}; barra de fórmula {x:6,y:11,w:60,h:7}
  'excel-soma': (d = {}) => {
    const t = {
      titulo: 'Planilha — Orçamento', formula: '=SOMA(B2:B6)',
      cabecalhos: 'Item|Valor', total: 'R$ 0,00',
      itens: 'Aluguel;R$ 900|Luz;R$ 180|Água;R$ 90|Mercado;R$ 600|Internet;R$ 110',
      ...d,
    };
    const its = lines(t.itens);
    const grid = its.map((row, i) => {
      const [nome, val] = String(row).split(';');
      const y = 232 + i * 60;
      return `<rect x="40" y="${y}" width="360" height="60" fill="#fff" stroke="#C4CCDA"/><text x="60" y="${y + 38}" font-size="21">${esc(nome)}</text>` +
        `<rect x="400" y="${y}" width="260" height="60" fill="#fff" stroke="#C4CCDA"/><text x="420" y="${y + 38}" font-size="21">${esc(val)}</text>`;
    }).join('');
    const yTot = 232 + its.length * 60;
    return `
  <rect width="1000" height="640" fill="#E6E9EC"/>
  <rect x="0" y="0" width="1000" height="64" fill="#1E7145"/>
  <text x="32" y="42" fill="#fff" font-family="Arial" font-size="24" font-weight="700">${esc(t.titulo)}</text>
  <rect x="0" y="64" width="1000" height="48" fill="#F4F1E8" stroke="#C4CCDA"/>
  <text x="24" y="95" fill="#7A8294" font-family="Arial" font-size="20">fx</text>
  <text x="64" y="95" fill="#1A2540" font-family="Consolas, monospace" font-size="22">${esc(t.formula)}</text>
  <g font-family="Arial" fill="#1A2540">
    <rect x="40" y="160" width="360" height="60" fill="#DDE3EC" stroke="#C4CCDA"/><text x="60" y="198" font-size="21" font-weight="700">${esc(lines(t.cabecalhos)[0] || 'Item')}</text>
    <rect x="400" y="160" width="260" height="60" fill="#DDE3EC" stroke="#C4CCDA"/><text x="420" y="198" font-size="21" font-weight="700">${esc(lines(t.cabecalhos)[1] || 'Valor')}</text>
    ${grid}
    <rect x="40" y="${yTot}" width="360" height="64" fill="#EAF3EC" stroke="#1E7145" stroke-width="2"/><text x="60" y="${yTot + 40}" font-size="22" font-weight="700">TOTAL</text>
    <rect x="400" y="${yTot}" width="260" height="64" fill="#EAF3EC" stroke="#1E7145" stroke-width="2"/><text x="420" y="${yTot + 40}" font-size="23" font-weight="700" fill="#1E7145">${esc(t.total)}</text>
  </g>`;
  },

  // 14) Tela de ligação recebida (golpe por telefone) -------------------------
  // ANCHORS: botão recusar (vermelho, esq) {x:24,y:78,w:18,h:14}; atender (verde, dir) {x:58,y:78,w:18,h:14}
  'ligacao-golpe': (d = {}) => {
    const t = {
      chamador: 'Central do seu Banco', numero: '+55 11 4002-8922',
      aviso: 'chamada não identificada',
      ...d,
    };
    return `
  <rect width="1000" height="640" fill="#121A24"/>
  <rect width="1000" height="640" fill="url(#gc)"/>
  <defs><linearGradient id="gc" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#1B2A4E"/><stop offset="1" stop-color="#0E1622"/></linearGradient></defs>
  <text x="500" y="150" text-anchor="middle" fill="#9AA2B4" font-family="Arial" font-size="22">${esc(t.aviso)}</text>
  <circle cx="500" cy="270" r="78" fill="#2E3B4E"/>
  <text x="500" y="290" text-anchor="middle" fill="#fff" font-family="Arial" font-size="60" font-weight="700">?</text>
  <text x="500" y="400" text-anchor="middle" fill="#fff" font-family="Arial" font-size="34" font-weight="700">${esc(t.chamador)}</text>
  <text x="500" y="446" text-anchor="middle" fill="#BFD2DE" font-family="Arial" font-size="24">${esc(t.numero)}</text>
  <circle cx="330" cy="540" r="56" fill="#E03B3B"/>
  <path d="M308 540 q22 -18 44 0" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" transform="rotate(135 330 540)"/>
  <circle cx="670" cy="540" r="56" fill="#27AE60"/>
  <path d="M650 528 q20 -16 40 0" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/>
  <text x="330" y="624" text-anchor="middle" fill="#9AA2B4" font-family="Arial" font-size="18">Recusar</text>
  <text x="670" y="624" text-anchor="middle" fill="#9AA2B4" font-family="Arial" font-size="18">Atender</text>`;
  },

  // 15) Loja de apps — app falso vs oficial -----------------------------------
  // ANCHORS: badge "verificado/oficial" {x:8,y:30,w:30,h:10}; botão instalar {x:70,y:30,w:22,h:10}
  'loja-app': (d = {}) => {
    const t = {
      title: 'Loja de Aplicativos', sub: 'resultado da busca', badge: 'L',
      app: 'Banco Oficial', dev: 'Desenvolvedor desconhecido',
      nota: '★ 2,1 · 312 avaliações', selo: 'NÃO verificado', botao: 'Instalar',
      ...d,
    };
    return `
  ${frame({ headerFill: '#254B63', title: t.title, sub: t.sub, badge: t.badge })}
  <rect x="80" y="190" width="100" height="100" rx="22" fill="#1351B4"/>
  <text x="130" y="252" text-anchor="middle" fill="#fff" font-family="Arial" font-size="46" font-weight="700">$</text>
  <text x="210" y="222" fill="#1A2540" font-family="Arial" font-size="28" font-weight="700">${esc(t.app)}</text>
  <text x="210" y="258" fill="#B23A2E" font-family="Arial" font-size="20">${esc(t.dev)}</text>
  <text x="210" y="290" fill="#7A8294" font-family="Arial" font-size="20">${esc(t.nota)}</text>
  <rect x="80" y="320" width="300" height="50" rx="12" fill="#FBE3DE" stroke="#B23A2E" stroke-width="2"/>
  <text x="100" y="353" fill="#B23A2E" font-family="Arial" font-size="20" font-weight="700">⚠ ${esc(t.selo)}</text>
  <rect x="700" y="190" width="200" height="64" rx="14" fill="#27AE60"/>
  <text x="800" y="231" text-anchor="middle" fill="#fff" font-family="Arial" font-size="24" font-weight="700">${esc(t.botao)}</text>
  <rect x="80" y="420" width="820" height="150" rx="14" fill="#F4F1E8"/>
  <text x="104" y="460" fill="#4A5670" font-family="Arial" font-size="20" font-weight="700">Permissões solicitadas:</text>
  <text x="104" y="498" fill="#1A2540" font-family="Arial" font-size="20">📷 Câmera   📍 Localização   📇 Contatos</text>
  <text x="104" y="536" fill="#1A2540" font-family="Arial" font-size="20">💬 SMS   📞 Chamadas   🗂 Todos os arquivos</text>`;
  },

  // 16) Caixa de e-mail (lista) — identificar o phishing ----------------------
  // ANCHORS: e-mail suspeito (linha 2) {x:6,y:42,w:88,h:13}
  'email-lista': (d = {}) => {
    const t = {
      title: 'Caixa de entrada', sub: '3 não lidos', badge: '@',
      // cada item: "remetente;assunto;flag(ok|bad)"
      itens: 'Maria (RH);Folha de ponto de maio;ok|premios@sorteio-online.win;VOCÊ GANHOU um iPhone!;bad|Escola Municipal;Reunião de pais;ok',
      ...d,
    };
    const its = lines(t.itens).slice(0, 3);
    const rows = its.map((row, i) => {
      const [rem, ass, flag] = String(row).split(';');
      const y = 180 + i * 110;
      const bad = flag === 'bad';
      return `<rect x="72" y="${y}" width="856" height="96" rx="14" fill="${bad ? '#FBE3DE' : '#F4F1E8'}" stroke="${bad ? '#E0A93B' : '#D9CFB8'}" stroke-width="2"/>` +
        `<text x="100" y="${y + 40}" fill="${bad ? '#B23A2E' : '#1A2540'}" font-family="Arial" font-size="22" font-weight="700">${esc(rem)}</text>` +
        `<text x="100" y="${y + 74}" fill="#4A5670" font-family="Arial" font-size="21">${esc(ass)}</text>`;
    }).join('');
    return `
  ${frame({ headerFill: '#1B2A4E', title: t.title, sub: t.sub, badge: t.badge })}
  ${rows}`;
  },

  // 17) Notificação de PIX recebido (boato/golpe do "recebi por engano") ------
  // ANCHORS: valor {x:30,y:40,w:40,h:12}; botão devolver {x:14,y:75,w:72,h:13}
  'pix-recebido': (d = {}) => {
    const t = {
      title: 'Banco · PIX', sub: 'comprovante', badge: '$',
      remetente: 'CLEBER A. DA SILVA', valor: 'R$ 850,00',
      aviso: 'Recebi por engano, pode me devolver?',
      botao: 'Devolver agora',
      ...d,
    };
    return `
  ${frame({ headerFill: '#1B7A4B', title: t.title, sub: t.sub, badge: t.badge })}
  <text x="500" y="220" text-anchor="middle" fill="#1B7A4B" font-family="Arial" font-size="24" font-weight="700">PIX recebido ✓</text>
  <text x="500" y="300" text-anchor="middle" fill="#1A2540" font-family="Arial" font-size="46" font-weight="700">${esc(t.valor)}</text>
  <text x="500" y="346" text-anchor="middle" fill="#4A5670" font-family="Arial" font-size="22">de ${esc(t.remetente)}</text>
  <rect x="140" y="380" width="720" height="80" rx="16" fill="#F2EBDD"/>
  <text x="500" y="428" text-anchor="middle" fill="#1A2540" font-family="Arial" font-size="22">${esc(t.aviso)}</text>
  <rect x="140" y="500" width="720" height="84" rx="42" fill="#D93E20"/>
  <text x="500" y="552" text-anchor="middle" fill="#fff" font-family="Arial" font-size="27" font-weight="700">${esc(t.botao)}</text>`;
  },

  // 18) Janela de senha / atualização falsa -----------------------------------
  // ANCHORS: botão "Atualizar agora" {x:30,y:62,w:40,h:12}; X fechar {x:84,y:22,w:8,h:9}
  'popup-atualizacao': (d = {}) => {
    const t = {
      site: 'www.video-gratis.stream', titulo: 'Atualização necessária',
      manchete: 'Seu navegador está desatualizado',
      l1: 'Instale a atualização para continuar',
      l2: 'assistindo. É rápido e gratuito.',
      botao: 'Atualizar agora',
      ...d,
    };
    return `
  <rect width="1000" height="640" fill="#2B3440"/>
  <rect x="0" y="0" width="1000" height="40" fill="#1E2933"/>
  <text x="20" y="27" fill="#9AA2B4" font-family="Arial" font-size="16">${esc(t.site)}</text>
  <rect x="210" y="130" width="580" height="380" rx="18" fill="#fff"/>
  <rect x="210" y="130" width="580" height="70" rx="18" fill="#2E6FA3"/>
  <rect x="210" y="170" width="580" height="30" fill="#2E6FA3"/>
  <text x="244" y="175" fill="#fff" font-family="Arial" font-size="24" font-weight="700">${esc(t.titulo)}</text>
  <text x="744" y="175" fill="#fff" font-family="Arial" font-size="26" font-weight="700" text-anchor="middle">✕</text>
  <text x="500" y="270" text-anchor="middle" fill="#1A2540" font-family="Arial" font-size="26" font-weight="700">${esc(t.manchete)}</text>
  <text x="500" y="318" text-anchor="middle" fill="#4A5670" font-family="Arial" font-size="21">${esc(t.l1)}</text>
  <text x="500" y="348" text-anchor="middle" fill="#4A5670" font-family="Arial" font-size="21">${esc(t.l2)}</text>
  <rect x="300" y="396" width="400" height="76" rx="12" fill="#2E6FA3"/>
  <text x="500" y="444" text-anchor="middle" fill="#fff" font-family="Arial" font-size="24" font-weight="700">${esc(t.botao)}</text>`;
  },

  // 19) Videochamada — reunião online ----------------------------------------
  // ANCHORS: botão desligar (rodapé central); câmera/microfone
  'videochamada': (d = {}) => {
    const t = {
      title: 'Reunião da equipe', sub: '4 participantes · 00:14:32', badge: '📹',
      p1: 'Ana', p2: 'Você', p3: 'Carlos', p4: 'Beatriz',
      legenda: 'Ana está compartilhando a tela',
      ...d,
    };
    const tile = (x, y, nome, fill, falando) => `
  <rect x="${x}" y="${y}" width="396" height="178" rx="18" fill="${fill}"/>
  ${falando ? `<rect x="${x}" y="${y}" width="396" height="178" rx="18" fill="none" stroke="#6BD08A" stroke-width="5"/>` : ''}
  <circle cx="${x + 198}" cy="${y + 74}" r="40" fill="#ffffff" opacity="0.92"/>
  <text x="${x + 198}" y="${y + 86}" text-anchor="middle" fill="#1B2A4E" font-family="Arial" font-size="34" font-weight="700">${esc(String(nome)[0])}</text>
  <rect x="${x + 14}" y="${y + 138}" width="${20 + String(nome).length * 12}" height="28" rx="14" fill="rgba(0,0,0,.45)"/>
  <text x="${x + 26}" y="${y + 158}" fill="#fff" font-family="Arial" font-size="18" font-weight="700">${esc(nome)}</text>`;
    return `
  ${frame({ headerFill: '#4F7CAC', title: t.title, sub: t.sub, badge: t.badge })}
  ${tile(92, 168, t.p1, '#2E4A63', true)}
  ${tile(512, 168, t.p2, '#3A5A78', false)}
  ${tile(92, 360, t.p3, '#2E4A63', false)}
  ${tile(512, 360, t.p4, '#3A5A78', false)}
  <rect x="300" y="556" width="400" height="34" rx="8" fill="#F4F1E8"/>
  <text x="500" y="580" text-anchor="middle" fill="#5A6173" font-family="Arial" font-size="18">${esc(t.legenda)}</text>`;
  },

  // 20) Nuvem / backup — arquivos sincronizados ------------------------------
  // ANCHORS: lista de arquivos; barra de progresso
  'nuvem-backup': (d = {}) => {
    const t = {
      title: 'Meu Drive', sub: 'backup automático · 12 GB de 15 GB', badge: '☁',
      f1: 'Documentos pessoais', f2: 'Fotos família 2025', f3: 'Comprovantes',
      f4: 'Currículo.docx', status: 'Tudo salvo na nuvem · há 2 minutos',
      ...d,
    };
    const row = (y, nome, ok) => `
  <rect x="92" y="${y}" width="816" height="64" rx="14" fill="#F4F1E8" stroke="#D9CFB8" stroke-width="2"/>
  <rect x="112" y="${y + 16}" width="32" height="32" rx="7" fill="#4F7CAC"/>
  <text x="172" y="${y + 41}" fill="#1A2540" font-family="Arial" font-size="23" font-weight="700">${esc(nome)}</text>
  <circle cx="864" cy="${y + 32}" r="18" fill="${ok ? '#4F7A55' : '#C9A227'}"/>
  <path d="M856 ${y + 32} l6 7 l12 -14" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
    return `
  ${frame({ headerFill: '#3A5A78', title: t.title, sub: t.sub, badge: t.badge })}
  ${row(176, t.f1, true)}
  ${row(252, t.f2, true)}
  ${row(328, t.f3, true)}
  ${row(404, t.f4, true)}
  <rect x="92" y="496" width="816" height="14" rx="7" fill="#E2DAC8"/>
  <rect x="92" y="496" width="652" height="14" rx="7" fill="#4F7A55"/>
  <text x="92" y="556" fill="#4F7A55" font-family="Arial" font-size="22" font-weight="700">${esc(t.status)}</text>`;
  },

  // 21) Galeria de fotos -------------------------------------------------------
  // ANCHORS: foto selecionada; barra de ações (compartilhar/apagar)
  'galeria-fotos': (d = {}) => {
    const t = {
      title: 'Galeria', sub: '128 fotos · álbum Família', badge: '🖼',
      a1: 'Compartilhar', a2: 'Editar', a3: 'Apagar',
      ...d,
    };
    const tones = ['#7FA8C9', '#D49545', '#9BBF8A', '#C97F7F', '#B59BCF', '#7FBFB5', '#D4B45A', '#A0A8B8', '#8AB0D4'];
    let thumbs = '';
    for (let i = 0; i < 9; i++) {
      const cx = 92 + (i % 3) * 276;
      const cy = 168 + Math.floor(i / 3) * 124;
      const sel = i === 1;
      thumbs += `
  <rect x="${cx}" y="${cy}" width="256" height="108" rx="14" fill="${tones[i]}"/>
  <circle cx="${cx + 60}" cy="${cy + 38}" r="20" fill="#ffffff" opacity="0.85"/>
  <path d="M${cx + 16} ${cy + 92} l52 -42 l38 30 l40 -34 l66 56 z" fill="#ffffff" opacity="0.4"/>
  ${sel ? `<rect x="${cx}" y="${cy}" width="256" height="108" rx="14" fill="none" stroke="#4F7CAC" stroke-width="6"/>` : ''}`;
    }
    return `
  ${frame({ headerFill: '#4F7CAC', title: t.title, sub: t.sub, badge: t.badge })}
  ${thumbs}
  <rect x="92" y="540" width="816" height="58" rx="16" fill="#F4F1E8" stroke="#D9CFB8" stroke-width="2"/>
  <text x="200" y="577" text-anchor="middle" fill="#1A2540" font-family="Arial" font-size="22" font-weight="700">${esc(t.a1)}</text>
  <text x="500" y="577" text-anchor="middle" fill="#1A2540" font-family="Arial" font-size="22" font-weight="700">${esc(t.a2)}</text>
  <text x="800" y="577" text-anchor="middle" fill="#C0392B" font-family="Arial" font-size="22" font-weight="700">${esc(t.a3)}</text>`;
  },

  // 22) Editor de texto — Word / Docs -----------------------------------------
  // ANCHORS: barra de ferramentas; corpo do documento
  'editor-texto': (d = {}) => {
    const t = {
      title: 'Carta de apresentação.docx', sub: 'salvo automaticamente', badge: 'W',
      cabecalho: 'Prezado(a) recrutador(a),',
      corpo: 'Escrevo para demonstrar meu interesse na vaga|de atendente anunciada. Tenho experiência em|atendimento ao público e organização de rotinas.|Coloco-me à disposição para uma entrevista.',
      assinatura: 'Atenciosamente, Maria Souza',
      ...d,
    };
    return `
  ${frame({ headerFill: '#1B2A4E', title: t.title, sub: t.sub, badge: t.badge })}
  <rect x="92" y="160" width="816" height="52" rx="12" fill="#EEE9DC"/>
  <text x="116" y="194" fill="#1B2A4E" font-family="Georgia" font-size="24" font-weight="700">B</text>
  <text x="156" y="194" fill="#1B2A4E" font-family="Georgia" font-size="24" font-style="italic">I</text>
  <text x="192" y="194" fill="#1B2A4E" font-family="Arial" font-size="24" text-decoration="underline">U</text>
  <rect x="236" y="176" width="2" height="22" fill="#C9C0AC"/>
  <text x="262" y="194" fill="#5A6173" font-family="Arial" font-size="20">Arial · 12</text>
  <rect x="148" y="236" width="704" height="346" rx="6" fill="#ffffff" stroke="#E2DAC8" stroke-width="2"/>
  <text x="186" y="296" fill="#1A2540" font-family="Georgia" font-size="24" font-weight="700">${esc(t.cabecalho)}</text>
  <text x="186" y="346" fill="#2A3550" font-family="Georgia" font-size="22">${tspans(lines(t.corpo), 186, 40)}</text>
  <text x="186" y="548" fill="#2A3550" font-family="Georgia" font-size="22" font-style="italic">${esc(t.assinatura)}</text>`;
  },

  // 23) Busca na web — resultados ---------------------------------------------
  // ANCHORS: caixa de busca; 1º resultado
  'busca-web': (d = {}) => {
    const t = {
      title: 'Buscar', sub: 'navegador · resultados', badge: '🔍',
      query: 'como emitir segunda via da conta de luz',
      r1t: 'Segunda via de conta — site oficial da distribuidora',
      r1u: 'www.distribuidora.com.br › segunda-via',
      r1d: 'Acesse com seu CPF e o número da instalação para baixar a|fatura em PDF sem custo.',
      r2t: 'Como pagar a conta de luz pelo aplicativo',
      r2u: 'www.distribuidora.com.br › app',
      ...d,
    };
    return `
  ${frame({ headerFill: '#1B2A4E', title: t.title, sub: t.sub, badge: t.badge })}
  <rect x="92" y="168" width="816" height="64" rx="32" fill="#F4F1E8" stroke="#C9C0AC" stroke-width="2"/>
  <circle cx="140" cy="200" r="14" fill="none" stroke="#7A8294" stroke-width="4"/>
  <line x1="151" y1="211" x2="164" y2="224" stroke="#7A8294" stroke-width="4" stroke-linecap="round"/>
  <text x="186" y="209" fill="#1A2540" font-family="Arial" font-size="24">${esc(t.query)}</text>
  <text x="92" y="296" fill="#1B5FA8" font-family="Arial" font-size="26" font-weight="700">${esc(t.r1t)}</text>
  <text x="92" y="328" fill="#3F8A4F" font-family="Arial" font-size="19">${esc(t.r1u)}</text>
  <text x="92" y="364" fill="#3A4256" font-family="Arial" font-size="21">${tspans(lines(t.r1d), 92, 30)}</text>
  <line x1="92" y1="448" x2="908" y2="448" stroke="#E2DAC8" stroke-width="2"/>
  <text x="92" y="500" fill="#1B5FA8" font-family="Arial" font-size="26" font-weight="700">${esc(t.r2t)}</text>
  <text x="92" y="532" fill="#3F8A4F" font-family="Arial" font-size="19">${esc(t.r2u)}</text>`;
  },

  // 24) App de saúde — Meu SUS / agenda --------------------------------------
  // ANCHORS: cartão de consulta; botão confirmar
  'app-saude': (d = {}) => {
    const t = {
      title: 'Meu SUS Digital', sub: 'olá, Maria', badge: '＋',
      tituloCard: 'Consulta agendada',
      especialidade: 'Clínico geral · UBS Centro',
      quando: 'Quarta, 12 de junho · 09:30',
      info: 'Leve documento com foto e cartão do SUS.',
      botao: 'Confirmar presença',
      ...d,
    };
    return `
  ${frame({ headerFill: '#4F7A55', title: t.title, sub: t.sub, badge: t.badge })}
  <rect x="92" y="178" width="816" height="220" rx="22" fill="#F1F5EE" stroke="#BcdBBF" stroke-width="2"/>
  <rect x="92" y="178" width="12" height="220" rx="6" fill="#4F7A55"/>
  <text x="132" y="232" fill="#3C5E42" font-family="Arial" font-size="20" font-weight="700" letter-spacing="1">${esc(String(t.tituloCard).toUpperCase())}</text>
  <text x="132" y="288" fill="#1A2540" font-family="Arial" font-size="30" font-weight="700">${esc(t.especialidade)}</text>
  <text x="132" y="334" fill="#2A3550" font-family="Arial" font-size="26">${esc(t.quando)}</text>
  <text x="132" y="376" fill="#5A6173" font-family="Arial" font-size="21">${esc(t.info)}</text>
  <rect x="300" y="470" width="400" height="78" rx="14" fill="#4F7A55"/>
  <text x="500" y="519" text-anchor="middle" fill="#fff" font-family="Arial" font-size="26" font-weight="700">${esc(t.botao)}</text>`;
  },

  // 25) Mapa / rota ------------------------------------------------------------
  // ANCHORS: pino destino; card de chegada
  'mapa-rota': (d = {}) => {
    const t = {
      title: 'Mapas', sub: 'rota a pé', badge: '📍',
      destino: 'UBS Centro — Rua das Flores, 120',
      tempo: '12 min', dist: '900 m',
      ...d,
    };
    return `
  ${frame({ headerFill: '#4F7CAC', title: t.title, sub: t.sub, badge: t.badge })}
  <rect x="92" y="160" width="816" height="290" rx="18" fill="#E7EEDF"/>
  <path d="M120 200 h300 v90 h180 v110 h260" fill="none" stroke="#C9C0AC" stroke-width="10" stroke-linecap="round"/>
  <path d="M120 200 h300 v90 h180" fill="none" stroke="#4F7CAC" stroke-width="12" stroke-linecap="round"/>
  <circle cx="120" cy="200" r="16" fill="#fff" stroke="#4F7CAC" stroke-width="6"/>
  <path d="M600 372 c0 -34 -26 -52 -26 -78 a26 26 0 1 1 52 0 c0 26 -26 44 -26 78 z" fill="#D93E20"/>
  <circle cx="600" cy="296" r="11" fill="#fff"/>
  <rect x="92" y="468" width="816" height="118" rx="18" fill="#F4F1E8" stroke="#D9CFB8" stroke-width="2"/>
  <text x="120" y="512" fill="#1A2540" font-family="Arial" font-size="25" font-weight="700">${esc(t.destino)}</text>
  <text x="120" y="556" fill="#4F7A55" font-family="Arial" font-size="24" font-weight="700">${esc(t.tempo)} · ${esc(t.dist)}</text>`;
  },

  // 26) Agenda / calendário — evento ------------------------------------------
  // ANCHORS: bloco do evento; botão lembrete
  'agenda-evento': (d = {}) => {
    const t = {
      title: 'Agenda', sub: 'junho de 2025', badge: '📅',
      dia: 'Quarta, 12', hora: '09:30 – 10:30',
      evento: 'Consulta na UBS Centro', local: 'Rua das Flores, 120',
      botao: 'Criar lembrete',
      ...d,
    };
    const hours = ['08:00', '09:00', '10:00', '11:00'];
    let grid = '';
    hours.forEach((h, i) => {
      const y = 200 + i * 86;
      grid += `
  <text x="108" y="${y + 8}" fill="#7A8294" font-family="Arial" font-size="20">${h}</text>
  <line x1="184" y1="${y}" x2="908" y2="${y}" stroke="#E2DAC8" stroke-width="2"/>`;
    });
    return `
  ${frame({ headerFill: '#6B3F7A', title: t.title, sub: t.sub, badge: t.badge })}
  ${grid}
  <rect x="200" y="296" width="690" height="150" rx="14" fill="#EFE6F2" stroke="#6B3F7A" stroke-width="2"/>
  <rect x="200" y="296" width="10" height="150" rx="5" fill="#6B3F7A"/>
  <text x="234" y="346" fill="#3F2249" font-family="Arial" font-size="27" font-weight="700">${esc(t.evento)}</text>
  <text x="234" y="386" fill="#5A4163" font-family="Arial" font-size="22">${esc(t.hora)} · ${esc(t.local)}</text>
  <rect x="600" y="496" width="290" height="72" rx="14" fill="#6B3F7A"/>
  <text x="745" y="542" text-anchor="middle" fill="#fff" font-family="Arial" font-size="24" font-weight="700">${esc(t.botao)}</text>`;
  },

  // 27) Planilha — PROCV / busca de valor -------------------------------------
  // ANCHORS: barra de fórmula; célula resultado
  'excel-procv': (d = {}) => {
    const t = {
      title: 'precos.xlsx', sub: 'Planilha', badge: 'X',
      formula: '=PROCV("Arroz"; A2:B5; 2; 0)',
      itens: 'Arroz|Feijão|Açúcar|Café',
      precos: 'R$ 6,90|R$ 8,50|R$ 4,20|R$ 14,00',
      resultado: 'R$ 6,90',
      ...d,
    };
    const itens = lines(t.itens);
    const precos = lines(t.precos);
    let rows = '';
    for (let i = 0; i < 4; i++) {
      const y = 300 + i * 56;
      const destaque = i === 0;
      rows += `
  <rect x="92" y="${y}" width="380" height="56" fill="${destaque ? '#FBEEDB' : '#fff'}" stroke="#D9CFB8" stroke-width="1.5"/>
  <rect x="472" y="${y}" width="240" height="56" fill="${destaque ? '#FBEEDB' : '#fff'}" stroke="#D9CFB8" stroke-width="1.5"/>
  <text x="116" y="${y + 37}" fill="#1A2540" font-family="Arial" font-size="23">${esc(itens[i] || '')}</text>
  <text x="496" y="${y + 37}" fill="#1A2540" font-family="Arial" font-size="23">${esc(precos[i] || '')}</text>`;
    }
    return `
  ${frame({ headerFill: '#D93E20', title: t.title, sub: t.sub, badge: t.badge })}
  <rect x="92" y="168" width="816" height="56" rx="10" fill="#F4F1E8" stroke="#C9C0AC" stroke-width="2"/>
  <text x="112" y="204" fill="#7A8294" font-family="Courier New" font-size="22" font-weight="700">fx</text>
  <text x="160" y="204" fill="#1A2540" font-family="Courier New" font-size="22">${esc(t.formula)}</text>
  <rect x="92" y="244" width="380" height="48" fill="#EBE4D3" stroke="#D9CFB8" stroke-width="1.5"/>
  <rect x="472" y="244" width="240" height="48" fill="#EBE4D3" stroke="#D9CFB8" stroke-width="1.5"/>
  <text x="116" y="276" fill="#5A6173" font-family="Arial" font-size="21" font-weight="700">Produto</text>
  <text x="496" y="276" fill="#5A6173" font-family="Arial" font-size="21" font-weight="700">Preço</text>
  ${rows}
  <rect x="760" y="300" width="148" height="56" rx="8" fill="#1B7A4B"/>
  <text x="834" y="337" text-anchor="middle" fill="#fff" font-family="Arial" font-size="24" font-weight="700">${esc(t.resultado)}</text>
  <text x="760" y="392" fill="#5A6173" font-family="Arial" font-size="18">resultado do PROCV</text>`;
  },

  // 28) Assistente de IA — chat -----------------------------------------------
  // ANCHORS: resposta da IA; caixa de pergunta
  'ia-chat': (d = {}) => {
    const t = {
      title: 'Assistente', sub: 'pergunte em linguagem simples', badge: '✦',
      pergunta: 'Como faço um currículo simples?',
      resposta: 'Claro! Comece com seu nome e contato. Depois liste|suas experiências e cursos, do mais recente para o|mais antigo. Quer que eu monte um modelo pra você?',
      placeholder: 'Digite sua pergunta…',
      ...d,
    };
    return `
  ${frame({ headerFill: '#1B2A4E', title: t.title, sub: t.sub, badge: t.badge })}
  <rect x="430" y="172" width="478" height="78" rx="22" fill="#4F7CAC"/>
  <text x="908" y="218" text-anchor="end" fill="#fff" font-family="Arial" font-size="23">${esc(t.pergunta)}</text>
  <circle cx="124" cy="320" r="30" fill="#1B2A4E"/>
  <text x="124" y="330" text-anchor="middle" fill="#fff" font-family="Arial" font-size="26" font-weight="700">✦</text>
  <rect x="92" y="290" width="700" height="170" rx="22" fill="#F2EBDD"/>
  <text x="124" y="338" fill="#1A2540" font-family="Arial" font-size="23">${tspans(lines(t.resposta), 124, 38)}</text>
  <rect x="92" y="506" width="800" height="74" rx="37" fill="#F4F1E8" stroke="#C9C0AC" stroke-width="2"/>
  <text x="132" y="551" fill="#9AA2B4" font-family="Arial" font-size="23">${esc(t.placeholder)}</text>
  ${sendBtn(850, 543)}`;
  },

  // 29) Tradutor — PT ⇄ EN -----------------------------------------------------
  // ANCHORS: painel origem; painel tradução
  'tradutor': (d = {}) => {
    const t = {
      title: 'Tradutor', sub: 'Português → Inglês', badge: '🌐',
      origem: 'Bom dia! Eu gostaria de|agendar uma reunião.',
      destino: 'Good morning! I would like|to schedule a meeting.',
      langA: 'Português', langB: 'Inglês',
      ...d,
    };
    return `
  ${frame({ headerFill: '#6B3F7A', title: t.title, sub: t.sub, badge: t.badge })}
  <rect x="92" y="172" width="392" height="380" rx="18" fill="#F4F1E8" stroke="#D9CFB8" stroke-width="2"/>
  <text x="120" y="216" fill="#6B3F7A" font-family="Arial" font-size="20" font-weight="700" letter-spacing="1">${esc(String(t.langA).toUpperCase())}</text>
  <text x="120" y="280" fill="#1A2540" font-family="Arial" font-size="26">${tspans(lines(t.origem), 120, 42)}</text>
  <circle cx="500" cy="362" r="36" fill="#6B3F7A"/>
  <path d="M484 354 h26 m-10 -10 l12 10 l-12 10 M516 370 h-26 m10 -10 l-12 10 l12 10" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="516" y="172" width="392" height="380" rx="18" fill="#EFE6F2" stroke="#C7AED1" stroke-width="2"/>
  <text x="544" y="216" fill="#6B3F7A" font-family="Arial" font-size="20" font-weight="700" letter-spacing="1">${esc(String(t.langB).toUpperCase())}</text>
  <text x="544" y="280" fill="#1A2540" font-family="Arial" font-size="26">${tspans(lines(t.destino), 544, 42)}</text>`;
  },

  // 30) E-mail — redigindo mensagem -------------------------------------------
  // ANCHORS: campos para/assunto; botão enviar
  'email-redacao': (d = {}) => {
    const t = {
      title: 'Nova mensagem', sub: 'redigir e-mail', badge: '✉',
      para: 'recrutamento@empresa.com.br',
      assunto: 'Candidatura — vaga de atendente',
      corpo: 'Olá, segue meu currículo em anexo para a vaga|anunciada. Tenho disponibilidade para entrevista|nesta semana. Obrigada pela atenção.',
      anexo: 'curriculo-maria.pdf',
      botao: 'Enviar',
      ...d,
    };
    return `
  ${frame({ headerFill: '#1B2A4E', title: t.title, sub: t.sub, badge: t.badge })}
  <text x="108" y="200" fill="#7A8294" font-family="Arial" font-size="20">Para</text>
  <text x="200" y="200" fill="#1A2540" font-family="Arial" font-size="22" font-weight="700">${esc(t.para)}</text>
  <line x1="92" y1="218" x2="908" y2="218" stroke="#E2DAC8" stroke-width="2"/>
  <text x="108" y="262" fill="#7A8294" font-family="Arial" font-size="20">Assunto</text>
  <text x="220" y="262" fill="#1A2540" font-family="Arial" font-size="22" font-weight="700">${esc(t.assunto)}</text>
  <line x1="92" y1="280" x2="908" y2="280" stroke="#E2DAC8" stroke-width="2"/>
  <text x="108" y="332" fill="#2A3550" font-family="Arial" font-size="23">${tspans(lines(t.corpo), 108, 40)}</text>
  <rect x="108" y="470" width="300" height="50" rx="10" fill="#F4F1E8" stroke="#C9C0AC" stroke-width="2"/>
  <rect x="124" y="484" width="22" height="22" rx="4" fill="#4F7CAC"/>
  <text x="160" y="502" fill="#1A2540" font-family="Arial" font-size="20">${esc(t.anexo)}</text>
  <rect x="108" y="540" width="200" height="60" rx="14" fill="#4F7A55"/>
  <text x="208" y="579" text-anchor="middle" fill="#fff" font-family="Arial" font-size="24" font-weight="700">${esc(t.botao)}</text>`;
  },

  // ======================= SEGURANÇA (novas) =======================
  'wifi-publico': (d = {}) => {
    const t = { title: 'Wi-Fi', sub: 'redes disponíveis', badge: '⌃', rede: 'CAFE_GRATIS_WIFI', aviso: 'Rede aberta — sem senha', ...d };
    return `${frame({ headerFill: PAL.seguranca, title: t.title, sub: t.sub, badge: t.badge })}
  ${card(92, 180, 816, 140, { rx: 16, stroke: PAL.line })}
  <path d="M180 250 a70 50 0 0 1 120 0" fill="none" stroke="${PAL.seguranca}" stroke-width="8" stroke-linecap="round"/>
  <path d="M205 268 a40 30 0 0 1 70 0" fill="none" stroke="${PAL.seguranca}" stroke-width="8" stroke-linecap="round"/>
  <circle cx="240" cy="288" r="9" fill="${PAL.seguranca}"/>
  <text x="330" y="232" fill="${PAL.ink}" font-family="Arial" font-size="26" font-weight="700">${esc(t.rede)}</text>
  ${pill(330, 252, 300, 40, t.aviso, { fill: '#F6E4DF', textFill: PAL.danger, size: 18 })}
  ${pill(330, 304, 110, 34, 'Conectar', { fill: PAL.seguranca, textFill: '#fff', size: 16 })}
  ${card(92, 350, 816, 200, { rx: 16, fill: '#FBF6EA', stroke: PAL.line })}
  <text x="124" y="402" fill="${PAL.danger}" font-family="Arial" font-size="24" font-weight="700">⚠ Cuidado em redes públicas</text>
  <text x="124" y="448" fill="${PAL.inkSoft}" font-family="Arial" font-size="22">${tspans(['Evite acessar banco ou senhas.', 'Outras pessoas podem ver o que você envia.'], 124, 36)}</text>`;
  },
  'senha-forte': (d = {}) => {
    const t = { title: 'Criar senha', sub: 'segurança da conta', badge: '🔒', senha: '••••••••••', nivel: 'Forte', barras: 4, ...d };
    const cols = ['#C0392B', '#D49545', '#C9A227', PAL.ok];
    const bars = Array.from({ length: 4 }).map((_, i) =>
      `<rect x="${124 + i * 180}" y="330" width="160" height="16" rx="8" fill="${i < t.barras ? cols[Math.min(t.barras - 1, 3)] : '#E6DDC8'}"/>`).join('');
    return `${frame({ headerFill: PAL.celular, title: t.title, sub: t.sub, badge: t.badge })}
  <text x="124" y="220" fill="${PAL.inkSoft}" font-family="Arial" font-size="22">Sua senha</text>
  ${card(124, 240, 752, 64, { rx: 12, stroke: PAL.line, shadow: 'card' })}
  <text x="148" y="282" fill="${PAL.ink}" font-family="Arial" font-size="30" font-weight="700" letter-spacing="3">${esc(t.senha)}</text>
  ${bars}
  <text x="124" y="382" fill="${PAL.ok}" font-family="Arial" font-size="24" font-weight="700">Nível: ${esc(t.nivel)}</text>
  ${card(124, 410, 752, 150, { rx: 14, fill: '#F1F6EF', stroke: PAL.line })}
  <text x="150" y="456" fill="${PAL.sage}" font-family="Arial" font-size="22" font-weight="700">Boa senha tem:</text>
  <text x="150" y="498" fill="${PAL.inkSoft}" font-family="Arial" font-size="21">${tspans(['• letras, números e símbolos', '• 8 ou mais caracteres — sem datas óbvias'], 150, 32)}</text>`;
  },
  'dois-fatores': (d = {}) => {
    const t = { title: 'Verificação', sub: 'código em 2 etapas', badge: '#', codigo: '4 8 2 1 9 0', origem: 'Enviado por SMS', ...d };
    return `${frame({ headerFill: PAL.celular, title: t.title, sub: t.sub, badge: t.badge })}
  <text x="500" y="226" text-anchor="middle" fill="${PAL.ink}" font-family="Arial" font-size="26" font-weight="700">Digite o código recebido</text>
  <text x="500" y="262" text-anchor="middle" fill="${PAL.inkSoft}" font-family="Arial" font-size="20">${esc(t.origem)}</text>
  ${t.codigo.replace(/\s/g, '').split('').slice(0, 6).map((c, i) =>
    `${card(180 + i * 110, 300, 84, 96, { rx: 14, stroke: PAL.line, shadow: 'card' })}<text x="${222 + i * 110}" y="366" text-anchor="middle" fill="${PAL.ink}" font-family="Arial" font-size="44" font-weight="700">${esc(c)}</text>`).join('')}
  ${btn(330, 440, 340, 66, 'Confirmar', { fill: PAL.celular })}
  <text x="500" y="556" text-anchor="middle" fill="${PAL.inkMute}" font-family="Arial" font-size="18">Nunca compartilhe este código com ninguém.</text>`;
  },
  'cartao-bloqueado': (d = {}) => SCENE_BUILDERS['sms-banco']({
    title: 'CARTÕES', sub: 'mensagem', remet: 'CARTAOSEGURO',
    texto: 'Seu cartão foi BLOQUEADO por segurança.|Desbloqueie agora: cartao-seguro.net/ok',
    hora: 'agora', ...d,
  }),
  'nota-falsa': (d = {}) => SCENE_BUILDERS['email-entrega']({
    title: 'E-mail', sub: 'caixa de entrada', de: 'Receita <fiscal@nota-br.org>',
    assunto: 'Nota fiscal pendente — regularize',
    corpo: 'Há uma nota fiscal em seu CPF aguardando.|Baixe o documento e regularize hoje.',
    botao: 'Baixar nota', ...d,
  }),

  // ======================= CELULAR (novas) =======================
  'config-celular': (d = {}) => {
    const t = { title: 'Ajustes', sub: 'configurações', badge: '⚙', itens: 'Wi-Fi|Bluetooth|Notificações|Tela e brilho|Sons|Acessibilidade', ...d };
    const rows = lines(t.itens).slice(0, 6).map((it, i) =>
      `${card(92, 178 + i * 70, 816, 58, { rx: 12, stroke: PAL.line, shadow: 0 })}
       <circle cx="132" cy="${207 + i * 70}" r="18" fill="${shade(PAL.celular, 38 - i * 4)}"/>
       <text x="172" y="${215 + i * 70}" fill="${PAL.ink}" font-family="Arial" font-size="23" font-weight="700">${esc(it)}</text>
       <text x="884" y="${215 + i * 70}" text-anchor="end" fill="${PAL.inkMute}" font-family="Arial" font-size="26">›</text>`).join('');
    return `${frame({ headerFill: PAL.celular, title: t.title, sub: t.sub, badge: t.badge })}${rows}`;
  },
  'contatos': (d = {}) => {
    const t = { title: 'Contatos', sub: 'agenda', badge: '☰', nomes: 'Ana Souza|Carlos Lima|Dona Maria|Farmácia|João Neto', ...d };
    const cl = ['#D93E20', '#4F7CAC', '#6B3F7A', '#4F7A55', '#D49545'];
    const rows = lines(t.nomes).slice(0, 5).map((nm, i) => {
      const cy = 210 + i * 80;
      return `<line x1="92" y1="${cy + 42}" x2="908" y2="${cy + 42}" stroke="${PAL.line}" stroke-width="1.5"/>
       ${avatar(140, cy, 28, nm, { fill: cl[i % cl.length] })}
       <text x="190" y="${cy + 10}" fill="${PAL.ink}" font-family="Arial" font-size="25" font-weight="700">${esc(nm)}</text>
       <circle cx="868" cy="${cy}" r="22" fill="#EEF4EE"/>
       <path d="M857 ${cy + 4} q6 -14 22 -6 q-6 14 -22 6 z" fill="${PAL.sage}"/>`;
    }).join('');
    return `${frame({ headerFill: PAL.celular, title: t.title, sub: t.sub, badge: t.badge })}${rows}`;
  },
  'qr-code': (d = {}) => {
    const t = { title: 'Pagar com QR', sub: 'aponte a câmera', badge: '▣', valor: 'R$ 38,50', loja: 'Padaria Pão Quente', ...d };
    let qr = '';
    const m = [[1,1,1,0,1,0,1,1,1],[1,0,1,0,0,1,0,0,1],[1,1,1,1,0,0,1,1,1],[0,0,0,1,1,1,0,0,0],[1,0,1,0,1,0,1,0,1],[0,1,0,1,1,0,0,1,0],[1,1,1,0,0,1,1,1,1],[1,0,1,1,0,0,1,0,0],[1,1,1,0,1,1,1,0,1]];
    m.forEach((row, y) => row.forEach((v, x) => { if (v) qr += `<rect x="${408 + x * 30}" y="${190 + y * 30}" width="30" height="30" fill="${PAL.ink}"/>`; }));
    return `${frame({ headerFill: PAL.celular, title: t.title, sub: t.sub, badge: t.badge })}
  ${card(380, 162, 318, 318, { rx: 18, stroke: PAL.line, shadow: 'card' })}${qr}
  <text x="500" y="528" text-anchor="middle" fill="${PAL.ink}" font-family="Arial" font-size="30" font-weight="700">${esc(t.valor)}</text>
  <text x="500" y="562" text-anchor="middle" fill="${PAL.inkSoft}" font-family="Arial" font-size="20">${esc(t.loja)}</text>`;
  },
  'notificacoes': (d = {}) => {
    const t = { title: 'Notificações', sub: 'central', badge: '🔔', avisos: 'WhatsApp · 3 mensagens novas|Agenda · Consulta às 14h|Banco · Compra aprovada|Clima · Vai chover hoje', ...d };
    const rows = lines(t.avisos).slice(0, 4).map((a, i) =>
      `${card(92, 178 + i * 100, 816, 84, { rx: 16, stroke: PAL.line, shadow: 'card' })}
       <circle cx="138" cy="${220 + i * 100}" r="22" fill="${shade(PAL.celular, 30 - i * 6)}"/>
       <text x="184" y="${214 + i * 100}" fill="${PAL.ink}" font-family="Arial" font-size="23" font-weight="700">${esc(a.split(' · ')[0])}</text>
       <text x="184" y="${244 + i * 100}" fill="${PAL.inkSoft}" font-family="Arial" font-size="20">${esc(a.split(' · ')[1] || '')}</text>`).join('');
    return `${frame({ headerFill: PAL.celular, title: t.title, sub: t.sub, badge: t.badge })}${rows}`;
  },

  // ======================= COMPUTADOR (novas) =======================
  'impressora': (d = {}) => {
    const t = { title: 'Imprimir', sub: 'documento.pdf', badge: '🖨', impressora: 'HP DeskJet 2700', copias: '1', botao: 'Imprimir', ...d };
    return `${frame({ headerFill: PAL.computador, title: t.title, sub: t.sub, badge: t.badge })}
  <text x="108" y="214" fill="${PAL.inkSoft}" font-family="Arial" font-size="22">Impressora</text>
  ${card(108, 232, 500, 60, { rx: 12, stroke: PAL.line, shadow: 0 })}
  <text x="132" y="270" fill="${PAL.ink}" font-family="Arial" font-size="23" font-weight="700">${esc(t.impressora)}</text>
  <text x="108" y="338" fill="${PAL.inkSoft}" font-family="Arial" font-size="22">Cópias</text>
  ${card(108, 356, 160, 60, { rx: 12, stroke: PAL.line, shadow: 0 })}
  <text x="148" y="394" fill="${PAL.ink}" font-family="Arial" font-size="26" font-weight="700">${esc(t.copias)}</text>
  ${card(648, 200, 260, 320, { rx: 14, fill: '#fff', stroke: PAL.line, shadow: 'card' })}
  <rect x="676" y="228" width="204" height="264" fill="#F4F1E8"/>
  <text x="700" y="276" fill="${PAL.inkMute}" font-family="Arial" font-size="16">${tspans(['Pré-visualização', 'da página…'], 700, 26)}</text>
  ${btn(108, 460, 220, 64, t.botao, { fill: PAL.computador })}`;
  },
  'download-arquivo': (d = {}) => {
    const t = { title: 'Downloads', sub: 'navegador', badge: '⤓', arquivo: 'manual-inscricao.pdf', pct: 72, origem: 'gov.br', ...d };
    const w = Math.round((Math.max(0, Math.min(100, t.pct)) / 100) * 700);
    return `${frame({ headerFill: PAL.computador, title: t.title, sub: t.sub, badge: t.badge })}
  ${card(92, 200, 816, 150, { rx: 16, stroke: PAL.line, shadow: 'card' })}
  <rect x="124" y="232" width="56" height="72" rx="6" fill="#EAF0F6"/>
  <text x="152" y="278" text-anchor="middle" fill="${PAL.computador}" font-family="Arial" font-size="16" font-weight="700">PDF</text>
  <text x="208" y="252" fill="${PAL.ink}" font-family="Arial" font-size="24" font-weight="700">${esc(t.arquivo)}</text>
  <text x="208" y="286" fill="${PAL.inkSoft}" font-family="Arial" font-size="19">De: ${esc(t.origem)}</text>
  <rect x="208" y="306" width="700" height="14" rx="7" fill="#E6DDC8"/>
  <rect x="208" y="306" width="${w}" height="14" rx="7" fill="${PAL.celular}"/>
  <text x="884" y="252" text-anchor="end" fill="${PAL.celular}" font-family="Arial" font-size="22" font-weight="700">${t.pct}%</text>
  ${card(92, 380, 816, 170, { rx: 14, fill: '#FBF6EA', stroke: PAL.line })}
  <text x="124" y="430" fill="${PAL.honey}" font-family="Arial" font-size="23" font-weight="700">Antes de abrir um download:</text>
  <text x="124" y="476" fill="${PAL.inkSoft}" font-family="Arial" font-size="21">${tspans(['confira se o site é confiável e o tipo do arquivo.', 'Desconfie de .exe e .zip de origem desconhecida.'], 124, 34)}</text>`;
  },
  'lixeira': (d = {}) => {
    const t = { title: 'Lixeira', sub: '3 itens', badge: '🗑', itens: 'foto-antiga.jpg|rascunho.docx|planilha-velha.xlsx', ...d };
    const rows = lines(t.itens).slice(0, 3).map((it, i) =>
      `${card(92, 200 + i * 80, 816, 64, { rx: 12, stroke: PAL.line, shadow: 0 })}
       <rect x="124" y="${218 + i * 80}" width="34" height="34" rx="6" fill="#EAF0F6"/>
       <text x="178" y="${242 + i * 80}" fill="${PAL.ink}" font-family="Arial" font-size="22" font-weight="700">${esc(it)}</text>`).join('');
    return `${frame({ headerFill: PAL.computador, title: t.title, sub: t.sub, badge: t.badge })}${rows}
  ${pill(92, 470, 250, 50, 'Restaurar item', { fill: PAL.sage, textFill: '#fff', size: 18 })}
  ${pill(360, 470, 250, 50, 'Esvaziar lixeira', { fill: '#F6E4DF', textFill: PAL.danger, size: 18 })}
  <text x="92" y="560" fill="${PAL.inkMute}" font-family="Arial" font-size="18">Esvaziar apaga de vez — não dá para voltar.</text>`;
  },
  'wifi-conectar': (d = {}) => {
    const t = { title: 'Conectar Wi-Fi', sub: 'escolha a rede', badge: '⌃', redes: 'Casa_Silva 🔒|Vizinho_204 🔒|NET_2G 🔒|Convidados', ...d };
    const rows = lines(t.redes).slice(0, 4).map((r, i) =>
      `${card(92, 190 + i * 86, 816, 70, { rx: 14, stroke: PAL.line, shadow: i === 0 ? 'card' : 0, fill: i === 0 ? '#EAF0F6' : '#fff' })}
       <path d="M150 ${236 + i * 86} a34 24 0 0 1 56 0" fill="none" stroke="${PAL.computador}" stroke-width="6" stroke-linecap="round"/>
       <circle cx="178" cy="${242 + i * 86}" r="6" fill="${PAL.computador}"/>
       <text x="240" y="${234 + i * 86}" fill="${PAL.ink}" font-family="Arial" font-size="23" font-weight="700">${esc(r)}</text>
       ${i === 0 ? `<text x="884" y="${234 + i * 86}" text-anchor="end" fill="${PAL.sage}" font-family="Arial" font-size="20" font-weight="700">Conectado</text>` : ''}`).join('');
    return `${frame({ headerFill: PAL.computador, title: t.title, sub: t.sub, badge: t.badge })}${rows}`;
  },

  // ======================= MERCADO / TRABALHO (novas) =======================
  'boleto-pagar': (d = {}) => {
    const t = { title: 'Boleto', sub: 'pagamento', badge: '|||', valor: 'R$ 142,90', venc: '15/06/2026', benef: 'Companhia de Água', ...d };
    let bars = '';
    for (let i = 0; i < 60; i++) bars += `<rect x="${120 + i * 12}" y="430" width="${(i % 3) + 2}" height="90" fill="${PAL.ink}"/>`;
    return `${frame({ headerFill: PAL.mercado, title: t.title, sub: t.sub, badge: t.badge })}
  <text x="108" y="216" fill="${PAL.inkSoft}" font-family="Arial" font-size="22">Beneficiário</text>
  <text x="108" y="252" fill="${PAL.ink}" font-family="Arial" font-size="26" font-weight="700">${esc(t.benef)}</text>
  <text x="108" y="320" fill="${PAL.inkSoft}" font-family="Arial" font-size="22">Vencimento</text>
  <text x="108" y="356" fill="${PAL.ink}" font-family="Arial" font-size="26" font-weight="700">${esc(t.venc)}</text>
  <text x="640" y="320" fill="${PAL.inkSoft}" font-family="Arial" font-size="22">Valor</text>
  <text x="640" y="360" fill="${PAL.mercado}" font-family="Arial" font-size="34" font-weight="700">${esc(t.valor)}</text>
  ${bars}
  ${btn(108, 540, 260, 60, 'Pagar boleto', { fill: PAL.mercado })}`;
  },
  'extrato-banco': (d = {}) => {
    const t = { title: 'Extrato', sub: 'conta corrente', badge: 'R$', saldo: 'R$ 1.284,30',
      lin: 'Salário|+ 1.800,00|Mercado Bom Preço|- 213,40|Conta de luz|- 142,90|PIX recebido|+ 50,00', ...d };
    const arr = lines(t.lin);
    let rows = '';
    for (let i = 0; i < 4; i++) {
      const nome = arr[i * 2] || '', val = arr[i * 2 + 1] || '';
      const pos = val.trim().startsWith('+');
      rows += `${card(92, 260 + i * 78, 816, 64, { rx: 12, stroke: PAL.line, shadow: 0 })}
       <text x="124" y="${300 + i * 78}" fill="${PAL.ink}" font-family="Arial" font-size="22" font-weight="700">${esc(nome)}</text>
       <text x="884" y="${300 + i * 78}" text-anchor="end" fill="${pos ? PAL.ok : PAL.danger}" font-family="Arial" font-size="24" font-weight="700">${esc(val)}</text>`;
    }
    return `${frame({ headerFill: PAL.mercado, title: t.title, sub: t.sub, badge: t.badge })}
  ${card(92, 178, 816, 64, { rx: 14, fill: shade(PAL.mercado, 84), stroke: 0, shadow: 0 })}
  <text x="124" y="206" fill="${PAL.inkSoft}" font-family="Arial" font-size="19">Saldo atual</text>
  <text x="124" y="234" fill="${PAL.ink}" font-family="Arial" font-size="26" font-weight="700">${esc(t.saldo)}</text>${rows}`;
  },
  'carrinho-compras': (d = {}) => {
    const t = { title: 'Carrinho', sub: 'loja online', badge: '🛒', itens: 'Fone de ouvido|R$ 79,90|Capa de celular|R$ 24,50|Cabo USB|R$ 19,90', total: 'R$ 124,30', ...d };
    const arr = lines(t.itens);
    let rows = '';
    for (let i = 0; i < 3; i++) {
      rows += `${card(92, 190 + i * 84, 816, 68, { rx: 12, stroke: PAL.line, shadow: 0 })}
       <rect x="120" y="${208 + i * 84}" width="46" height="46" rx="8" fill="#F0E6D2"/>
       <text x="186" y="${238 + i * 84}" fill="${PAL.ink}" font-family="Arial" font-size="22" font-weight="700">${esc(arr[i * 2] || '')}</text>
       <text x="884" y="${238 + i * 84}" text-anchor="end" fill="${PAL.ink}" font-family="Arial" font-size="22" font-weight="700">${esc(arr[i * 2 + 1] || '')}</text>`;
    }
    return `${frame({ headerFill: PAL.mercado, title: t.title, sub: t.sub, badge: t.badge })}${rows}
  <text x="124" y="494" fill="${PAL.inkSoft}" font-family="Arial" font-size="24">Total</text>
  <text x="884" y="496" text-anchor="end" fill="${PAL.mercado}" font-family="Arial" font-size="32" font-weight="700">${esc(t.total)}</text>
  ${btn(92, 522, 816, 64, 'Finalizar compra', { fill: PAL.mercado })}`;
  },
  'planilha-grafico': (d = {}) => {
    const t = { title: 'Vendas', sub: 'gráfico do mês', badge: '▦', vals: '40|65|50|85|70', meses: 'Jan|Fev|Mar|Abr|Mai', ...d };
    const vs = lines(t.vals).map(Number), ms = lines(t.meses);
    const max = Math.max(...vs, 1);
    let cols = '';
    vs.slice(0, 5).forEach((v, i) => {
      const h = Math.round((v / max) * 240), x = 170 + i * 130, y = 500 - h;
      cols += `<rect x="${x}" y="${y}" width="84" height="${h}" rx="8" fill="${shade(PAL.mercado, 10 + i * 6)}"/>
       <text x="${x + 42}" y="${y - 12}" text-anchor="middle" fill="${PAL.ink}" font-family="Arial" font-size="18" font-weight="700">${v}</text>
       <text x="${x + 42}" y="534" text-anchor="middle" fill="${PAL.inkSoft}" font-family="Arial" font-size="18">${esc(ms[i] || '')}</text>`;
    });
    return `${frame({ headerFill: PAL.mercado, title: t.title, sub: t.sub, badge: t.badge })}
  <line x1="140" y1="500" x2="884" y2="500" stroke="${PAL.line}" stroke-width="2"/>
  <line x1="140" y1="220" x2="140" y2="500" stroke="${PAL.line}" stroke-width="2"/>${cols}`;
  },
  'recibo-venda': (d = {}) => {
    const t = { title: 'Recibo', sub: 'venda concluída', badge: '✓', valor: 'R$ 56,00', forma: 'PIX', data: '28/05/2026 · 10:42', loja: 'Bazar da Esquina', ...d };
    return `${frame({ headerFill: PAL.sage, title: t.title, sub: t.sub, badge: t.badge })}
  <circle cx="500" cy="250" r="56" fill="#EAF3EA"/>
  <path d="M474 250 l18 20 l36 -40" fill="none" stroke="${PAL.ok}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="500" y="356" text-anchor="middle" fill="${PAL.ink}" font-family="Arial" font-size="30" font-weight="700">Pagamento recebido</text>
  <text x="500" y="404" text-anchor="middle" fill="${PAL.sage}" font-family="Arial" font-size="40" font-weight="700">${esc(t.valor)}</text>
  ${card(220, 440, 560, 130, { rx: 14, fill: '#FBF8F0', stroke: PAL.line })}
  <text x="250" y="482" fill="${PAL.inkSoft}" font-family="Arial" font-size="20">Forma: <tspan fill="${PAL.ink}" font-weight="700">${esc(t.forma)}</tspan></text>
  <text x="250" y="516" fill="${PAL.inkSoft}" font-family="Arial" font-size="20">${esc(t.data)}</text>
  <text x="250" y="550" fill="${PAL.inkSoft}" font-family="Arial" font-size="20">${esc(t.loja)}</text>`;
  },

  // ======================= INGLÊS (novas) =======================
  'flashcard-ingles': (d = {}) => {
    const t = { title: 'Inglês', sub: 'cartão de estudo', badge: 'EN', en: 'Welcome', pt: 'Bem-vindo(a)', dica: 'Diz-se: uél-cãm', ...d };
    return `${frame({ headerFill: PAL.ingles, title: t.title, sub: t.sub, badge: t.badge })}
  ${card(220, 200, 560, 240, { rx: 22, fill: '#FBF7FA', stroke: shade(PAL.ingles, 70), shadow: 'card' })}
  <text x="500" y="300" text-anchor="middle" fill="${PAL.ingles}" font-family="Georgia, serif" font-size="54" font-weight="700">${esc(t.en)}</text>
  <line x1="320" y1="334" x2="680" y2="334" stroke="${shade(PAL.ingles, 60)}" stroke-width="2"/>
  <text x="500" y="384" text-anchor="middle" fill="${PAL.ink}" font-family="Arial" font-size="32">${esc(t.pt)}</text>
  ${pill(330, 470, 340, 50, t.dica, { fill: shade(PAL.ingles, 80), textFill: PAL.ingles, size: 20 })}`;
  },
  'menu-restaurante': (d = {}) => {
    const t = { title: 'Menu', sub: 'restaurant', badge: '🍽', itens: 'Water|Água|Coffee|Café|Chicken|Frango|Salad|Salada', ...d };
    const arr = lines(t.itens);
    let rows = '';
    for (let i = 0; i < 4; i++) {
      rows += `<text x="124" y="${236 + i * 76}" fill="${PAL.ingles}" font-family="Georgia, serif" font-size="28" font-weight="700">${esc(arr[i * 2] || '')}</text>
       <text x="884" y="${236 + i * 76}" text-anchor="end" fill="${PAL.inkSoft}" font-family="Arial" font-size="24">${esc(arr[i * 2 + 1] || '')}</text>
       <line x1="124" y1="${256 + i * 76}" x2="884" y2="${256 + i * 76}" stroke="${PAL.line}" stroke-width="1.5" stroke-dasharray="4 6"/>`;
    }
    return `${frame({ headerFill: PAL.ingles, title: t.title, sub: t.sub, badge: t.badge })}${rows}`;
  },
  'placas-aeroporto': (d = {}) => {
    const t = { title: 'Airport', sub: 'placas comuns', badge: '✈', itens: 'Departures|Embarque|Arrivals|Desembarque|Exit|Saída|Gate|Portão', ...d };
    const arr = lines(t.itens);
    let rows = '';
    for (let i = 0; i < 4; i++) {
      rows += `${card(92, 184 + i * 96, 816, 80, { rx: 12, fill: shade(PAL.ingles, 12 + i * 4), stroke: 0, shadow: 'card' })}
       <text x="124" y="${234 + i * 96}" fill="#fff" font-family="Arial" font-size="28" font-weight="700">${esc(arr[i * 2] || '')}</text>
       <text x="884" y="${234 + i * 96}" text-anchor="end" fill="#E6DAEA" font-family="Arial" font-size="22">${esc(arr[i * 2 + 1] || '')}</text>`;
    }
    return `${frame({ headerFill: PAL.ingles, title: t.title, sub: t.sub, badge: t.badge })}${rows}`;
  },
  'dialogo-ingles': (d = {}) => {
    const t = { title: 'Conversation', sub: 'diálogo simples', badge: '💬',
      a: 'Hello! How are you?', b: 'I am fine, thank you!', c: 'Nice to meet you.', ...d };
    return `${frame({ headerFill: PAL.ingles, title: t.title, sub: t.sub, badge: t.badge })}
  ${bubble(120, 190, 460, 80, { fill: shade(PAL.ingles, 78), tail: 'l' })}
  <text x="148" y="238" fill="${PAL.ink}" font-family="Arial" font-size="24">${esc(t.a)}</text>
  ${bubble(420, 300, 460, 80, { fill: shade(PAL.celular, 72), tail: 'r' })}
  <text x="448" y="348" fill="${PAL.ink}" font-family="Arial" font-size="24">${esc(t.b)}</text>
  ${bubble(120, 410, 460, 80, { fill: shade(PAL.ingles, 78), tail: 'l' })}
  <text x="148" y="458" fill="${PAL.ink}" font-family="Arial" font-size="24">${esc(t.c)}</text>`;
  },

  // ======================= IA / GERAL (novas) =======================
  'ia-resumo': (d = {}) => {
    const t = { title: 'Assistente', sub: 'resumir texto', badge: 'IA',
      pedido: 'Resuma este texto em 2 frases:', resp: 'O texto explica como pagar contas pelo|aplicativo do banco com segurança, usando|senha e confirmação em duas etapas.', ...d };
    return `${frame({ headerFill: PAL.computador, title: t.title, sub: t.sub, badge: t.badge })}
  ${bubble(420, 188, 460, 70, { fill: shade(PAL.celular, 72), tail: 'r' })}
  <text x="448" y="230" fill="${PAL.ink}" font-family="Arial" font-size="22">${esc(t.pedido)}</text>
  ${card(120, 296, 600, 230, { rx: 18, fill: '#F4F6FA', stroke: PAL.line, shadow: 'card' })}
  ${avatar(150, 326, 18, '✦', { fill: PAL.computador })}
  <text x="184" y="334" fill="${PAL.inkSoft}" font-family="Arial" font-size="18" font-weight="700">Resposta</text>
  <text x="150" y="382" fill="${PAL.ink}" font-family="Arial" font-size="22">${tspans(lines(t.resp), 150, 36)}</text>`;
  },
  'formulario-online': (d = {}) => {
    const t = { title: 'Cadastro', sub: 'formulário online', badge: '▤', campos: 'Nome completo|E-mail|Telefone', botao: 'Enviar', ...d };
    const rows = lines(t.campos).slice(0, 3).map((c, i) =>
      `<text x="124" y="${214 + i * 100}" fill="${PAL.inkSoft}" font-family="Arial" font-size="21">${esc(c)}</text>
       ${card(124, 228 + i * 100, 752, 58, { rx: 10, stroke: PAL.line, shadow: 0 })}`).join('');
    return `${frame({ headerFill: PAL.celular, title: t.title, sub: t.sub, badge: t.badge })}${rows}
  ${btn(124, 520, 240, 62, t.botao, { fill: PAL.celular })}`;
  },
  'teclado-digitar': (d = {}) => {
    const t = { title: 'Teclado', sub: 'digitando', badge: '⌨', texto: 'bom dia', ...d };
    const r1 = 'QWERTYUIOP'.split(''), r2 = 'ASDFGHJKL'.split(''), r3 = 'ZXCVBNM'.split('');
    const key = (ch, x, y) => `${card(x, y, 76, 64, { rx: 10, stroke: PAL.line, shadow: 0 })}<text x="${x + 38}" y="${y + 42}" text-anchor="middle" fill="${PAL.ink}" font-family="Arial" font-size="26" font-weight="700">${ch}</text>`;
    let kb = '';
    r1.forEach((c, i) => kb += key(c, 78 + i * 84, 360));
    r2.forEach((c, i) => kb += key(c, 120 + i * 84, 434));
    r3.forEach((c, i) => kb += key(c, 162 + i * 84, 508));
    return `${frame({ headerFill: PAL.celular, title: t.title, sub: t.sub, badge: t.badge })}
  ${card(92, 188, 816, 120, { rx: 14, stroke: PAL.line, shadow: 'card' })}
  <text x="124" y="262" fill="${PAL.ink}" font-family="Arial" font-size="34" font-weight="700">${esc(t.texto)}<tspan fill="${PAL.celular}">|</tspan></text>${kb}`;
  },
  'calculadora': (d = {}) => {
    const t = { title: 'Calculadora', sub: 'conta simples', badge: '=', visor: '12 + 8', resultado: '20', ...d };
    const keys = ['7','8','9','÷','4','5','6','×','1','2','3','-','0','.','=','+'];
    let grid = '';
    keys.forEach((k, i) => {
      const col = i % 4, row = Math.floor(i / 4), x = 300 + col * 110, y = 320 + row * 70;
      const op = ['÷','×','-','+','='].includes(k);
      grid += `${card(x, y, 96, 58, { rx: 12, fill: op ? shade(PAL.computador, 12) : '#fff', stroke: PAL.line, shadow: 0 })}
       <text x="${x + 48}" y="${y + 39}" text-anchor="middle" fill="${op ? '#fff' : PAL.ink}" font-family="Arial" font-size="26" font-weight="700">${k}</text>`;
    });
    return `${frame({ headerFill: PAL.computador, title: t.title, sub: t.sub, badge: t.badge })}
  ${card(300, 188, 426, 110, { rx: 14, fill: '#0F1830', stroke: 0, shadow: 'card' })}
  <text x="700" y="232" text-anchor="end" fill="#9FB4D6" font-family="Arial" font-size="24">${esc(t.visor)}</text>
  <text x="700" y="280" text-anchor="end" fill="#fff" font-family="Arial" font-size="40" font-weight="700">${esc(t.resultado)}</text>${grid}`;
  },
  'video-tutorial': (d = {}) => {
    const t = { title: 'Vídeo-aula', sub: 'tutorial', badge: '▶', titulo: 'Como fazer um PIX', canal: 'Inclusão Digital', dur: '6:24', ...d };
    return `${frame({ headerFill: PAL.coral, title: t.title, sub: t.sub, badge: t.badge })}
  ${card(92, 178, 816, 300, { rx: 16, fill: '#1A2030', stroke: 0, shadow: 'card' })}
  <circle cx="500" cy="328" r="56" fill="rgba(255,255,255,.92)"/>
  <path d="M484 300 l40 28 l-40 28 z" fill="${PAL.coral}"/>
  <rect x="92" y="452" width="816" height="6" fill="rgba(255,255,255,.25)"/>
  <rect x="92" y="452" width="300" height="6" fill="${PAL.coral}"/>
  <text x="92" y="430" fill="#fff" font-family="Arial" font-size="20" opacity="0.85">${esc(t.dur)}</text>
  <text x="92" y="520" fill="${PAL.ink}" font-family="Arial" font-size="28" font-weight="700">${esc(t.titulo)}</text>
  <text x="92" y="556" fill="${PAL.inkSoft}" font-family="Arial" font-size="22">${esc(t.canal)}</text>`;
  },
  'mensagem-audio': (d = {}) => {
    const t = { title: 'Áudio', sub: 'mensagem de voz', badge: '🎤', dur: '0:08', quem: 'Dona Maria', ...d };
    let wave = '';
    for (let i = 0; i < 38; i++) { const h = 10 + ((i * 7) % 40); wave += `<rect x="${240 + i * 16}" y="${300 - h / 2}" width="6" height="${h}" rx="3" fill="${i < 14 ? PAL.celular : shade(PAL.celular, 50)}"/>`; }
    return `${frame({ headerFill: PAL.celular, title: t.title, sub: t.sub, badge: t.badge })}
  ${avatar(160, 300, 40, t.quem, { fill: PAL.sage })}
  ${card(220, 250, 700, 100, { rx: 50, fill: '#EAF0F6', stroke: 0, shadow: 'card' })}
  <circle cx="280" cy="300" r="30" fill="${PAL.celular}"/>
  <path d="M270 285 l24 15 l-24 15 z" fill="#fff"/>${wave}
  <text x="500" y="430" text-anchor="middle" fill="${PAL.inkSoft}" font-family="Arial" font-size="22">${esc(t.quem)} · ${esc(t.dur)}</text>`;
  },
  'mapa-onibus': (d = {}) => {
    const t = { title: 'Ônibus', sub: 'horários', badge: '🚌', linha: 'Linha 305 — Centro', proximo: 'Chega em 4 min', ponto: 'Ponto: Av. Brasil, 1200', ...d };
    return `${frame({ headerFill: PAL.celular, title: t.title, sub: t.sub, badge: t.badge })}
  ${card(92, 180, 816, 110, { rx: 16, fill: shade(PAL.celular, 76), stroke: 0, shadow: 'card' })}
  <rect x="124" y="206" width="64" height="56" rx="10" fill="${PAL.celular}"/>
  <rect x="134" y="216" width="44" height="22" rx="4" fill="#fff"/>
  <circle cx="138" cy="262" r="6" fill="${PAL.ink}"/><circle cx="178" cy="262" r="6" fill="${PAL.ink}"/>
  <text x="210" y="226" fill="${PAL.ink}" font-family="Arial" font-size="24" font-weight="700">${esc(t.linha)}</text>
  <text x="210" y="262" fill="${PAL.sage}" font-family="Arial" font-size="22" font-weight="700">${esc(t.proximo)}</text>
  ${card(92, 312, 816, 240, { rx: 16, fill: '#EAF1E9', stroke: PAL.line })}
  <path d="M150 520 q200 -180 360 -120 q160 60 340 -120" fill="none" stroke="${PAL.celular}" stroke-width="8" stroke-linecap="round" stroke-dasharray="2 18"/>
  <circle cx="150" cy="520" r="14" fill="${PAL.sage}"/>
  <circle cx="850" cy="280" r="16" fill="${PAL.mercado}"/>
  <text x="150" y="500" fill="${PAL.inkSoft}" font-family="Arial" font-size="18">Você</text>
  <text x="92" y="586" fill="${PAL.inkSoft}" font-family="Arial" font-size="20">${esc(t.ponto)}</text>`;
  },
};

/**
 * Constrói o SVG completo de uma cena.
 * @param {string} slug   chave em SCENE_BUILDERS
 * @param {object} data   sobreposições de texto/valores
 * @param {string} [label] rótulo acessível (aria-label)
 * @returns {string} SVG completo, ou '' se o slug não existir
 */
export function buildScene(slug, data = {}, label) {
  const fn = SCENE_BUILDERS[slug];
  if (!fn) return '';
  return wrap(label || slug, fn(data));
}

/** Lista de slugs disponíveis (útil pra o gerador). */
export const SCENE_SLUGS = Object.keys(SCENE_BUILDERS);

/** Rótulos amigáveis pra preview/aria. */
export const SCENE_LABELS = {
  'wpp-chefe': 'Conversa de WhatsApp do falso chefe',
  'sms-banco': 'SMS suspeito de banco',
  'pix-confirmacao': 'Tela de confirmação de PIX',
  'windows-desktop': 'Área de trabalho do Windows',
  'navegador-url': 'Barra de endereço do navegador',
  'site-gov-falso': 'Site falso imitando o gov.br',
  'excel-erro': 'Planilha com fórmula retornando erro',
  'email-entrega': 'E-mail falso sobre entrega de encomenda',
  'wpp-promo': 'Mensagem de grupo com link de promoção falsa',
  'popup-virus': 'Pop-up falso de vírus no navegador',
  'sms-gov': 'SMS falso de benefício do governo',
  'janela-arquivos': 'Explorador de arquivos do Windows',
  'excel-soma': 'Planilha com soma de orçamento',
  'ligacao-golpe': 'Tela de ligação recebida suspeita',
  'loja-app': 'Loja de aplicativos com app falso',
  'email-lista': 'Lista de e-mails para identificar phishing',
  'pix-recebido': 'Comprovante de PIX recebido (golpe da devolução)',
  'popup-atualizacao': 'Pop-up falso de atualização do navegador',
  'videochamada': 'Reunião por videochamada com participantes',
  'nuvem-backup': 'Arquivos com backup automático na nuvem',
  'galeria-fotos': 'Galeria de fotos do celular',
  'editor-texto': 'Editor de texto com carta sendo escrita',
  'busca-web': 'Resultados de uma busca na internet',
  'app-saude': 'Aplicativo de saúde com consulta agendada',
  'mapa-rota': 'Mapa com rota até um endereço',
  'agenda-evento': 'Agenda com um compromisso marcado',
  'excel-procv': 'Planilha usando PROCV para buscar um preço',
  'ia-chat': 'Conversa com um assistente de inteligência artificial',
  'tradutor': 'Tradutor de português para inglês',
  'email-redacao': 'Tela de redação de um novo e-mail',
  'wifi-publico': 'Aviso de risco em rede Wi-Fi pública',
  'senha-forte': 'Medidor de força de uma senha',
  'dois-fatores': 'Código de verificação em duas etapas',
  'cartao-bloqueado': 'SMS falso de cartão bloqueado',
  'nota-falsa': 'E-mail falso de nota fiscal pendente',
  'config-celular': 'Tela de configurações do celular',
  'contatos': 'Lista de contatos da agenda',
  'qr-code': 'Pagamento por QR Code',
  'notificacoes': 'Central de notificações do celular',
  'impressora': 'Diálogo de impressão de documento',
  'download-arquivo': 'Barra de progresso de download',
  'lixeira': 'Lixeira do computador com arquivos',
  'wifi-conectar': 'Lista de redes Wi-Fi para conectar',
  'boleto-pagar': 'Boleto bancário com código de barras',
  'extrato-banco': 'Extrato bancário no aplicativo',
  'carrinho-compras': 'Carrinho de uma loja online',
  'planilha-grafico': 'Planilha com gráfico de vendas',
  'recibo-venda': 'Recibo de venda concluída',
  'flashcard-ingles': 'Cartão de estudo de inglês',
  'menu-restaurante': 'Cardápio bilíngue (inglês/português)',
  'placas-aeroporto': 'Placas de aeroporto em inglês',
  'dialogo-ingles': 'Diálogo simples em inglês',
  'ia-resumo': 'Assistente de IA resumindo um texto',
  'formulario-online': 'Formulário de cadastro online',
  'teclado-digitar': 'Teclado virtual sendo digitado',
  'calculadora': 'Calculadora com conta simples',
  'video-tutorial': 'Vídeo-aula em reprodução',
  'mensagem-audio': 'Mensagem de áudio no celular',
  'mapa-onibus': 'Horário de ônibus com rota',
};
