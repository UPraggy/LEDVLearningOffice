// ============================================================================
// generate-interactive-scenes.mjs
// Gera as TELAS SIMULADAS (cenas) usadas pelas interações `hotspot` e `imagem`
// que exigem uma tela realista pra o aluno clicar/observar.
//
// Saída: app/public/generated/interactive/<slug>.svg  (1000x640)
//
// Estilo de referência (mantido fiel às cenas escritas à mão):
//   - Card branco arredondado com borda #D9CFB8
//   - Cabeçalho em navy (#254B63 / #1B2A4E) por contexto
//   - Bolhas/papéis bege #F2EBDD, tinta #1A2540
//   - Verde de ação #4F7A55, laranja de alerta #E25B3F
//
// IMPORTANTE: as porcentagens das `areas` de cada hotspot vivem em
// src/data/conteudo/_interacoes-exemplo.js. Cada cena abaixo documenta, no
// comentário ANCHORS, as regiões-chave em % (x,y,w,h) pra facilitar o wiring.
//
// Rode com:  node scripts/generate-interactive-scenes.mjs
// ============================================================================

import { mkdirSync, writeFileSync, readdirSync, unlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const OUT = join(root, 'public', 'generated', 'interactive');

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------
const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Quebra texto em linhas <tspan> a partir de x,y com dy fixo. */
function tspans(lines, x, dy = 38) {
  return lines
    .map((ln, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : dy}">${esc(ln)}</tspan>`)
    .join('');
}

/** Moldura de "app" — card branco com cabeçalho colorido. */
function frame({ headerFill = '#254B63', title, sub, badge }) {
  const initial = badge || (title ? title[0].toUpperCase() : '•');
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

// ---------------------------------------------------------------------------
// CENAS
// Cada item: { slug, label, body }  →  arquivo <slug>.svg
// ANCHORS documenta regiões-chave em % pra o wiring dos hotspots.
// ---------------------------------------------------------------------------
const SCENES = [];
const scene = (slug, label, body) => SCENES.push({ slug, label, body });

// 1) WhatsApp — golpe do "chefe" pedindo cartões-presente -------------------
// ANCHORS: topo/contato "Diretoria · novo número" = {x:14,y:14,w:50,h:9} (ok)
scene('wpp-chefe', 'Conversa de WhatsApp do falso chefe', `
  ${frame({ headerFill: '#254B63', title: 'Diretoria RH', sub: 'novo número · online', badge: 'D' })}
  <rect x="92" y="184" width="640" height="150" rx="24" fill="#F2EBDD"/>
  <path d="M92 218 l-24 -6 l24 -24 z" fill="#F2EBDD"/>
  <text x="124" y="226" fill="#1A2540" font-family="Arial" font-size="24">${tspans([
    'Está em reunião? Preciso de um favor rápido e',
    'sigiloso. Compre 5 cartões-presente de R$ 200 e',
    'me mande os códigos. Depois te reembolso.',
  ], 124)}</text>
  <text x="700" y="320" fill="#7A8294" font-family="Arial" font-size="17">10:47</text>
  <rect x="92" y="356" width="540" height="92" rx="24" fill="#F2EBDD"/>
  <text x="124" y="392" fill="#1A2540" font-family="Arial" font-size="24">${tspans([
    'É urgente, não comente com ninguém do',
    'escritório por enquanto. Confio em você.',
  ], 124, 34)}</text>
  <text x="600" y="434" fill="#7A8294" font-family="Arial" font-size="17">10:48</text>
  <rect x="92" y="486" width="800" height="74" rx="37" fill="#F2EBDD"/>
  <text x="132" y="530" fill="#9AA2B4" font-family="Arial" font-size="23">Mensagem</text>
  <circle cx="850" cy="523" r="38" fill="#4F7A55"/>
  <path d="M835 523 h30 M854 511 l14 12 l-14 12" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
`);

// 2) SMS — banco falso bloqueando conta -------------------------------------
// ANCHORS: link encurtado "kbz.lat/..." = {x:8,y:62,w:50,h:11} (ok)
scene('sms-banco', 'SMS suspeito de banco', `
  ${frame({ headerFill: '#1B2A4E', title: 'Mensagens', sub: 'remetente: +55 11 9 ****-2213', badge: 'M' })}
  <rect x="92" y="190" width="720" height="250" rx="24" fill="#F2EBDD"/>
  <path d="M92 226 l-24 -6 l24 -24 z" fill="#F2EBDD"/>
  <text x="124" y="240" fill="#1A2540" font-family="Arial" font-size="24" font-weight="700">BANCO: aviso de segurança</text>
  <text x="124" y="288" fill="#1A2540" font-family="Arial" font-size="23">${tspans([
    'Detectamos acesso indevido. Sua conta será',
    'BLOQUEADA hoje. Regularize agora em:',
  ], 124, 34)}</text>
  <text x="124" y="404" fill="#1B5FA8" font-family="Arial" font-size="26" font-weight="700" text-decoration="underline">http://kbz.lat/banco-seguro</text>
  <text x="700" y="430" fill="#7A8294" font-family="Arial" font-size="17">hoje 09:12</text>
`);

// 3) PIX — tela de confirmação (conferir NOME do recebedor) ------------------
// ANCHORS: bloco nome/cpf topo = {x:8,y:26,w:84,h:20} (ok)
//          valor = {x:34,y:50,w:32,h:12}  botão = {x:14,y:78,w:72,h:13}
scene('pix-confirmacao', 'Tela de confirmação de PIX', `
  ${frame({ headerFill: '#1B7A4B', title: 'Banco · PIX', sub: 'confirme os dados', badge: '$' })}
  <rect x="92" y="190" width="816" height="118" rx="18" fill="#F4F1E8" stroke="#D9CFB8" stroke-width="2"/>
  <text x="120" y="226" fill="#7A8294" font-family="Arial" font-size="19">Você está enviando para</text>
  <text x="120" y="262" fill="#1A2540" font-family="Arial" font-size="28" font-weight="700">J. P. SANTOS COMERCIO ME</text>
  <text x="120" y="294" fill="#4A5670" font-family="Arial" font-size="21">CPF/CNPJ ••• 41.882/0001-09 · Banco 077</text>
  <text x="120" y="356" fill="#7A8294" font-family="Arial" font-size="19">Valor</text>
  <text x="120" y="402" fill="#1A2540" font-family="Arial" font-size="36" font-weight="700">R$ 1.250,00</text>
  <rect x="140" y="500" width="720" height="84" rx="42" fill="#1B7A4B"/>
  <text x="500" y="552" text-anchor="middle" fill="#fff" font-family="Arial" font-size="27" font-weight="700">Confirmar pagamento</text>
`);

// 4) Área de trabalho do Windows (clicar no Iniciar) ------------------------
// ANCHORS: botão Iniciar canto inf. esquerdo = {x:1,y:91,w:9,h:8} (ok)
scene('windows-desktop', 'Área de trabalho do Windows', `
  <rect width="1000" height="640" fill="#1E5C8A"/>
  <rect width="1000" height="640" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#2E6FA3"/><stop offset="1" stop-color="#15405F"/></linearGradient></defs>
  <!-- ícones -->
  <g font-family="Arial" fill="#fff" text-anchor="middle">
    <rect x="44" y="40" width="64" height="52" rx="8" fill="#F2EBDD"/><text x="76" y="120" font-size="17">Arquivos</text>
    <rect x="44" y="150" width="64" height="52" rx="8" fill="#4F7CAC"/><text x="76" y="230" font-size="17">Navegador</text>
    <rect x="44" y="260" width="64" height="52" rx="8" fill="#3D7A4E"/><text x="76" y="340" font-size="17">E-mail</text>
  </g>
  <!-- barra de tarefas -->
  <rect x="0" y="586" width="1000" height="54" fill="#0E2A40"/>
  <rect x="14" y="592" width="44" height="42" rx="8" fill="#2E6FA3"/>
  <rect x="22" y="600" width="12" height="12" fill="#fff"/><rect x="38" y="600" width="12" height="12" fill="#fff"/>
  <rect x="22" y="616" width="12" height="12" fill="#fff"/><rect x="38" y="616" width="12" height="12" fill="#fff"/>
  <rect x="78" y="592" width="42" height="42" rx="8" fill="#19374F"/>
  <rect x="128" y="592" width="42" height="42" rx="8" fill="#19374F"/>
  <text x="930" y="619" fill="#fff" font-family="Arial" font-size="19" text-anchor="end">09:41</text>
`);

// 5) Navegador — barra de endereço com domínio falso ------------------------
// ANCHORS: barra de endereço = {x:9,y:13,w:74,h:8} (ok)
scene('navegador-url', 'Barra de endereço do navegador', `
  <rect width="1000" height="640" fill="#DDE3EC"/>
  <rect x="0" y="0" width="1000" height="118" fill="#EDF1F7"/>
  <!-- abas -->
  <rect x="30" y="14" width="260" height="46" rx="12" fill="#fff"/>
  <text x="58" y="44" fill="#3A4356" font-family="Arial" font-size="20">Banco do Brasil</text>
  <!-- barra de endereço -->
  <rect x="90" y="72" width="740" height="46" rx="23" fill="#fff" stroke="#C4CCDA" stroke-width="2"/>
  <text x="118" y="102" fill="#B23A2E" font-family="Arial" font-size="22" font-weight="700">⚠ não seguro</text>
  <text x="270" y="102" fill="#1A2540" font-family="Arial" font-size="22">http://bb-atendimento-cliente.<tspan font-weight="700" fill="#B23A2E">top</tspan>/login</text>
  <!-- página -->
  <rect x="0" y="118" width="1000" height="522" fill="#fff"/>
  <rect x="0" y="118" width="1000" height="90" fill="#F4D000"/>
  <text x="60" y="176" fill="#0A3D91" font-family="Arial" font-size="34" font-weight="700">Banco do Brasil</text>
  <text x="60" y="280" fill="#1A2540" font-family="Arial" font-size="24">Acesse sua conta para evitar o bloqueio:</text>
  <rect x="60" y="320" width="420" height="58" rx="10" fill="#F4F1E8" stroke="#C4CCDA"/>
  <text x="80" y="357" fill="#9AA2B4" font-family="Arial" font-size="22">Agência e conta</text>
  <rect x="60" y="396" width="420" height="58" rx="10" fill="#F4F1E8" stroke="#C4CCDA"/>
  <text x="80" y="433" fill="#9AA2B4" font-family="Arial" font-size="22">Senha</text>
  <rect x="60" y="480" width="240" height="62" rx="10" fill="#0A3D91"/>
  <text x="180" y="520" text-anchor="middle" fill="#fff" font-family="Arial" font-size="23" font-weight="700">Entrar</text>
`);

// 6) Site gov.br falso (cobrança indevida) ----------------------------------
// ANCHORS: botão "Pagar taxa R$ 47,90" = {x:6,y:73,w:40,h:13} (ok)
scene('site-gov-falso', 'Site falso imitando o gov.br', `
  <rect width="1000" height="640" fill="#EDF1F7"/>
  <rect x="0" y="0" width="1000" height="60" fill="#fff" stroke="#C4CCDA" stroke-width="2"/>
  <rect x="30" y="16" width="640" height="30" rx="15" fill="#F4F1E8"/>
  <text x="48" y="38" fill="#1A2540" font-family="Arial" font-size="18">http://gov-br-beneficio.<tspan font-weight="700" fill="#B23A2E">online</tspan>/inss</text>
  <rect x="0" y="60" width="1000" height="78" fill="#1351B4"/>
  <text x="40" y="110" fill="#fff" font-family="Arial" font-size="34" font-weight="700">gov.br</text>
  <text x="40" y="206" fill="#1A2540" font-family="Arial" font-size="30" font-weight="700">Liberação do seu benefício</text>
  <text x="40" y="262" fill="#4A5670" font-family="Arial" font-size="23">${tspans([
    'Há um valor a receber em seu nome. Para liberar,',
    'pague a taxa de regularização abaixo via PIX.',
  ], 40, 34)}</text>
  <rect x="40" y="320" width="500" height="70" rx="10" fill="#FCEEDB" stroke="#E0A93B" stroke-width="2"/>
  <text x="64" y="364" fill="#9A6A12" font-family="Arial" font-size="23" font-weight="700">Valor a receber: R$ 3.480,00</text>
  <rect x="60" y="470" width="400" height="80" rx="12" fill="#E25B3F"/>
  <text x="260" y="520" text-anchor="middle" fill="#fff" font-family="Arial" font-size="25" font-weight="700">Pagar taxa R$ 47,90</text>
`);

// 7) Excel — fórmula com erro -----------------------------------------------
// (usado como `imagem` de apoio; sem hotspot obrigatório)
scene('excel-erro', 'Planilha com fórmula retornando erro', `
  <rect width="1000" height="640" fill="#E6E9EC"/>
  <rect x="0" y="0" width="1000" height="64" fill="#1E7145"/>
  <text x="32" y="42" fill="#fff" font-family="Arial" font-size="24" font-weight="700">Planilha — Vendas</text>
  <!-- barra de fórmula -->
  <rect x="0" y="64" width="1000" height="48" fill="#F4F1E8" stroke="#C4CCDA"/>
  <text x="24" y="95" fill="#7A8294" font-family="Arial" font-size="20">fx</text>
  <text x="64" y="95" fill="#1A2540" font-family="Consolas, monospace" font-size="22">=PROCV(E2; A:C; 3; 0)</text>
  <!-- grade -->
  <g font-family="Arial" font-size="20" fill="#1A2540">
    ${[0,1,2,3,4].map(c => `<rect x="${40+c*180}" y="120" width="180" height="44" fill="#DDE3EC" stroke="#C4CCDA"/><text x="${130+c*180}" y="149" text-anchor="middle" font-weight="700">${['A','B','C','D','E'][c]}</text>`).join('')}
    ${[0,1,2,3,4,5].map(r => [0,1,2,3,4].map(c => {
      const x=40+c*180, y=164+r*70;
      const isErr = (c===2 && r===1);
      return `<rect x="${x}" y="${y}" width="180" height="70" fill="${isErr?'#FBE3DE':'#fff'}" stroke="#C4CCDA"/>` +
        (isErr ? `<text x="${x+90}" y="${y+44}" text-anchor="middle" fill="#B23A2E" font-weight="700">#N/D</text>` : '');
    }).join('')).join('')}
  </g>
`);

// 8) E-mail de phishing — falso prêmio/entrega ------------------------------
// ANCHORS: remetente (domínio errado) = {x:11,y:28,w:62,h:8} (ok)
//          botão "Rastrear / pagar taxa" = {x:7,y:74,w:32,h:10}
scene('email-entrega', 'E-mail falso sobre entrega de encomenda', `
  ${frame({ headerFill: '#1B2A4E', title: 'Caixa de entrada', sub: 'há 3 minutos', badge: 'B' })}
  <text x="72" y="200" fill="#7A8294" font-family="Arial" font-size="20">De:</text>
  <text x="120" y="200" fill="#1A2540" font-family="Arial" font-size="25" font-weight="700">correios@entrega-rastreio.<tspan fill="#B23A2E">click</tspan></text>
  <text x="72" y="256" fill="#7A8294" font-family="Arial" font-size="20">Assunto:</text>
  <text x="190" y="256" fill="#1A2540" font-family="Arial" font-size="24">Sua encomenda está retida</text>
  <text x="72" y="324" fill="#4A5670" font-family="Arial" font-size="23">${tspans([
    'Há uma taxa alfandegária pendente de R$ 9,90.',
    'Pague em até 24h para liberar a entrega, senão o',
    'pacote será devolvido ao remetente.',
  ], 72, 36)}</text>
  <rect x="72" y="476" width="320" height="68" rx="14" fill="#E25B3F"/>
  <text x="232" y="519" text-anchor="middle" fill="#fff" font-family="Arial" font-size="23" font-weight="700">Pagar e rastrear</text>
`);

// 9) Mensagem em grupo com link de promoção falsa ---------------------------
// ANCHORS: link da "promoção" = {x:10,y:55,w:62,h:9} (ok)
scene('wpp-promo', 'Mensagem de grupo com link de promoção falsa', `
  ${frame({ headerFill: '#254B63', title: 'Família ❤', sub: 'grupo · 18 membros', badge: 'F' })}
  <rect x="92" y="184" width="430" height="86" rx="22" fill="#F2EBDD"/>
  <text x="120" y="220" fill="#4F7A55" font-family="Arial" font-size="18" font-weight="700">Tia Cláudia</text>
  <text x="120" y="252" fill="#1A2540" font-family="Arial" font-size="22">Gente, olha que oferta!! 😍</text>
  <rect x="92" y="288" width="700" height="180" rx="22" fill="#F2EBDD"/>
  <text x="120" y="328" fill="#4F7A55" font-family="Arial" font-size="18" font-weight="700">Tia Cláudia</text>
  <text x="120" y="362" fill="#1A2540" font-family="Arial" font-size="23" font-weight="700">SUPERMERCADO dando R$ 500 em compras!</text>
  <text x="120" y="402" fill="#1A2540" font-family="Arial" font-size="22">Só responder o cadastro neste link 👇</text>
  <text x="120" y="446" fill="#1B5FA8" font-family="Arial" font-size="23" font-weight="700" text-decoration="underline">promo-mercado.brindes-vip.xyz</text>
  <rect x="92" y="500" width="800" height="74" rx="37" fill="#F2EBDD"/>
  <text x="132" y="544" fill="#9AA2B4" font-family="Arial" font-size="23">Mensagem</text>
  <circle cx="850" cy="537" r="38" fill="#4F7A55"/>
  <path d="M835 537 h30 M854 525 l14 12 l-14 12" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
`);

// 10) Pop-up falso de "vírus detectado" -------------------------------------
// ANCHORS: X de fechar = {x:80,y:30,w:9,h:9} (ok)  botão "Limpar agora" = {x:30,y:64,w:40,h:11}
scene('popup-virus', 'Pop-up falso de vírus no navegador', `
  <rect width="1000" height="640" fill="#33414F"/>
  <rect x="0" y="0" width="1000" height="40" fill="#1E2933"/>
  <text x="20" y="27" fill="#9AA2B4" font-family="Arial" font-size="16">www.noticias-do-dia.info</text>
  <!-- pop-up -->
  <rect x="230" y="140" width="540" height="360" rx="18" fill="#fff"/>
  <rect x="230" y="140" width="540" height="64" rx="18" fill="#C0392B"/>
  <rect x="230" y="180" width="540" height="24" fill="#C0392B"/>
  <text x="262" y="182" fill="#fff" font-family="Arial" font-size="24" font-weight="700">⚠ Alerta de segurança</text>
  <text x="724" y="182" fill="#fff" font-family="Arial" font-size="28" font-weight="700" text-anchor="middle">✕</text>
  <text x="500" y="262" text-anchor="middle" fill="#1A2540" font-family="Arial" font-size="26" font-weight="700">Seu computador está infectado!</text>
  <text x="500" y="306" text-anchor="middle" fill="#4A5670" font-family="Arial" font-size="21">5 vírus encontrados. Limpe agora para</text>
  <text x="500" y="334" text-anchor="middle" fill="#4A5670" font-family="Arial" font-size="21">proteger seus dados bancários.</text>
  <rect x="300" y="392" width="400" height="72" rx="12" fill="#27AE60"/>
  <text x="500" y="438" text-anchor="middle" fill="#fff" font-family="Arial" font-size="24" font-weight="700">Limpar agora (grátis)</text>
`);

// ---------------------------------------------------------------------------
// build
// ---------------------------------------------------------------------------
mkdirSync(OUT, { recursive: true });

// remove apenas os arquivos que ESTE gerador produz (mantém wpp-golpe/email-phishing à mão)
const managed = new Set(SCENES.map((s) => `${s.slug}.svg`));
for (const f of readdirSync(OUT)) {
  if (managed.has(f)) {
    try { unlinkSync(join(OUT, f)); } catch {}
  }
}

let n = 0;
for (const s of SCENES) {
  const svg = `${open(s.label)}${s.body}\n${close}\n`;
  writeFileSync(join(OUT, `${s.slug}.svg`), svg, 'utf8');
  n++;
}
console.log(`✓ ${n} cenas interativas geradas em public/generated/interactive/`);
for (const s of SCENES) console.log(`   - ${s.slug}.svg  (${s.label})`);
