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

/** Moldura de "app" — card branco com cabeçalho colorido + badge. */
export function frame({ headerFill = '#254B63', title, sub, badge }) {
  const initial = badge || (title ? String(title)[0].toUpperCase() : '•');
  return `
  <rect width="1000" height="640" fill="#E9EEF2"/>
  <rect x="48" y="34" width="904" height="572" rx="30" fill="#fff" stroke="#D9CFB8" stroke-width="3"/>
  <rect x="48" y="34" width="904" height="108" rx="30" fill="${headerFill}"/>
  <rect x="48" y="92" width="904" height="50" fill="${headerFill}"/>
  <circle cx="126" cy="88" r="34" fill="#4F7A55"/>
  <text x="126" y="98" text-anchor="middle" fill="#fff" font-family="Arial" font-size="30" font-weight="700">${esc(initial)}</text>
  <text x="180" y="80" fill="#fff" font-family="Arial" font-size="26" font-weight="700">${esc(title)}</text>
  <text x="180" y="116" fill="#BFD2DE" font-family="Arial" font-size="20" font-weight="700">${esc(sub)}</text>`;
}

const open = (label) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="640" viewBox="0 0 1000 640" role="img" aria-label="${esc(label)}">`;
const close = `</svg>`;

/** Envelopa um corpo em um <svg> completo com rótulo acessível. */
export function wrap(label, body) {
  return `${open(label)}${body}\n${close}`;
}

// ícone de "enviar" reutilizável (seta dentro de círculo verde)
const sendBtn = (cx, cy) =>
  `<circle cx="${cx}" cy="${cy}" r="38" fill="#4F7A55"/>` +
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
  <rect x="60" y="470" width="400" height="80" rx="12" fill="#E25B3F"/>
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
  <rect x="72" y="476" width="320" height="68" rx="14" fill="#E25B3F"/>
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
  <rect x="140" y="500" width="720" height="84" rx="42" fill="#E25B3F"/>
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
};
