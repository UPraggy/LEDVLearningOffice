// ============================================================================
// scene-for-mission.js
// Escolhe, de forma DETERMINÍSTICA, uma cena interativa (slug de
// scene-templates.js) relevante para cada missão — sem precisar editar os
// 225 arquivos de conteúdo. Usado para "plugar" a biblioteca de cenas como
// ilustração de cada missão (Missao.jsx → buildScene).
//
// Estratégia:
//   1) tenta casar palavras-chave do título/descrição com um slug específico;
//   2) se não casar, sorteia (seed estável) dentro do pool do módulo;
//   3) gera dados de legenda coerentes via dataForScene().
// ============================================================================
import { SCENE_BUILDERS } from './scene-templates.js';

// hash FNV-like estável → inteiro não-negativo
function seedOf(str) {
  let h = 2166136261 >>> 0;
  const s = String(str ?? '');
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

const norm = (s) =>
  String(s ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

// palavra-chave (substring já normalizada) → slug preferido
const KEYWORDS = [
  [['procv', 'buscar valor', 'busca de preco', 'cruzar dados'], 'excel-procv'],
  [['planilha', 'excel', 'soma', 'orcamento', 'orcar', 'calcul', 'tabela'], 'excel-soma'],
  [['pix'], 'pix-confirmacao'],
  [['boleto', 'comprovante', 'devolucao'], 'pix-recebido'],
  [['whatsapp', 'zap', 'chefe', 'mensagem'], 'wpp-chefe'],
  [['sms', 'torpedo'], 'sms-banco'],
  [['phishing', 'lista de e-mail', 'caixa de entrada'], 'email-lista'],
  [['entrega', 'encomenda', 'correio', 'rastreio'], 'email-entrega'],
  [['redigir', 'escrever email', 'enviar email', 'curriculo por email'], 'email-redacao'],
  [['email', 'e-mail'], 'email-lista'],
  [['virus', 'malware', 'infect'], 'popup-virus'],
  [['atualiz', 'update'], 'popup-atualizacao'],
  [['ligacao', 'telefonema', 'chamada suspeita'], 'ligacao-golpe'],
  [['loja', 'instalar', 'baixar app', 'aplicativo falso'], 'loja-app'],
  [['gov', 'governo', 'beneficio', 'auxilio', 'inss'], 'sms-gov'],
  [['site falso', 'site oficial', 'gov.br'], 'site-gov-falso'],
  [['senha', 'seguranca', 'fraude', 'golpe', 'protec'], 'wpp-chefe'],
  [['nuvem', 'backup', 'drive', 'salvar arquivo', 'sincroniz'], 'nuvem-backup'],
  [['arquivo', 'pasta', 'explorador', 'organizar'], 'janela-arquivos'],
  [['navegador', 'url', 'endereco do site', 'link', 'site'], 'navegador-url'],
  [['busca', 'pesquis', 'google', 'procurar na internet'], 'busca-web'],
  [['area de trabalho', 'desktop', 'windows', 'menu iniciar'], 'windows-desktop'],
  [['curriculo', 'carta', 'documento', 'word', 'texto', 'digit'], 'editor-texto'],
  [['ia', 'inteligencia artificial', 'assistente', 'chatbot', 'chat'], 'ia-chat'],
  [['ingles', 'traduc', 'translate', 'idioma'], 'tradutor'],
  [['foto', 'camera', 'galeria', 'imagem', 'selfie'], 'galeria-fotos'],
  [['video', 'reuni', 'meet', 'zoom', 'chamada de video'], 'videochamada'],
  [['saude', 'sus', 'consulta', 'medic', 'vacina', 'remedio'], 'app-saude'],
  [['mapa', 'rota', 'endereco', 'localiz', 'gps', 'como chegar'], 'mapa-rota'],
  [['agenda', 'calendario', 'compromisso', 'evento', 'lembrete', 'marcar'], 'agenda-evento'],
];

// pools por módulo (fallback quando nenhuma palavra-chave casa)
const POOLS = {
  seguranca: ['wpp-chefe', 'sms-banco', 'site-gov-falso', 'popup-virus', 'ligacao-golpe', 'email-lista', 'pix-recebido', 'loja-app'],
  computador: ['windows-desktop', 'navegador-url', 'janela-arquivos', 'editor-texto', 'busca-web', 'nuvem-backup', 'ia-chat'],
  celular: ['videochamada', 'galeria-fotos', 'app-saude', 'mapa-rota', 'agenda-evento'],
  mercado: ['excel-soma', 'excel-procv', 'pix-confirmacao', 'site-gov-falso'],
  ingles: ['tradutor', 'email-redacao', 'busca-web', 'ia-chat'],
};

const ALL = Object.keys(SCENE_BUILDERS);

/**
 * Retorna o slug de cena interativa mais adequado para a missão.
 * @returns {string} slug existente em SCENE_BUILDERS
 */
export function sceneForMission(trilha, missao) {
  const hay = norm(`${missao?.titulo || ''} ${missao?.desc || ''} ${trilha?.nome || ''}`);
  for (const [keys, slug] of KEYWORDS) {
    if (SCENE_BUILDERS[slug] && keys.some((k) => hay.includes(k))) return slug;
  }
  const pool = (POOLS[trilha?.modulo] || ALL).filter((s) => SCENE_BUILDERS[s]);
  const list = pool.length ? pool : ALL;
  const seed = seedOf(`${trilha?.id || ''}-${missao?.id || ''}`);
  return list[seed % list.length];
}

export default sceneForMission;
