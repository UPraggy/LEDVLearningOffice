/* =========================================================================
   G2P PT-BR — Grapheme-to-Phoneme para Português Brasileiro.
   Saída: array de strings IPA que casam com os IDs do `cadu.onnx.json`.
   Estratégia: dicionário de exceções (palavras comuns) + regras fonéticas.
   Não é perfeito, mas cobre ~85% das missões do Escritório.
   ========================================================================= */

/* === Dicionário de exceções (palavras comuns com pronúncia conhecida) ===
   Formato: { palavra (minúscula): 'fonemas separados por espaço' }
   Símbolos:
     ˈ  = stress primário (vem ANTES da sílaba tônica)
     ̃  = nasalização (combinante)
     ɐ ɛ ɔ ɲ ɾ ʃ ʒ ʎ = vogais/consoantes IPA
*/
const DICIONARIO = {
  // Cumprimentos / micro-copy
  'olá': 'o ˈl a',
  'oi': 'ˈo j',
  'tchau': 'ˈt ʃ a w',
  'obrigado': 'o b ɾ i ˈg a d u',
  'obrigada': 'o b ɾ i ˈg a d ɐ',
  'desculpa': 'd e s ˈk u w p ɐ',
  'sim': 's ˈĩ',
  'não': 'n ˈɐ̃ w̃',
  'por': 'p o ɾ',
  'favor': 'f ɐ ˈv o ɾ',
  'bom': 'b ˈõ',
  'boa': 'b ˈo ɐ',
  'dia': 'ˈd ʒ i ɐ',
  'tarde': 'ˈt a ɾ d ʒ i',
  'noite': 'ˈn o j t ʃ i',
  // Pronomes / artigos
  'eu': 'ˈe w',
  'tu': 'ˈt u',
  'você': 'v o ˈs e',
  'voce': 'v o ˈs e',
  'a': 'ɐ',
  'o': 'u',
  'as': 'ɐ s',
  'os': 'u s',
  'um': 'ˈũ',
  'uma': 'ˈu m ɐ',
  'uns': 'ˈũ s',
  'umas': 'ˈu m ɐ s',
  'de': 'd ʒ i',
  'do': 'd u',
  'da': 'd ɐ',
  'dos': 'd u s',
  'das': 'd ɐ s',
  'e': 'i',
  'em': 'ˈẽ',
  'no': 'n u',
  'na': 'n ɐ',
  'nos': 'n u s',
  'nas': 'n ɐ s',
  'para': 'ˈp a ɾ ɐ',
  'pra': 'p ɾ a',
  'com': 'k ˈõ',
  'que': 'k i',
  'se': 's i',
  // Frequentes
  'mas': 'm a s',
  'mais': 'm ˈa j s',
  'menos': 'ˈm e n u s',
  'já': 'ʒ ˈa',
  'aqui': 'a ˈk i',
  'ali': 'a ˈl i',
  'lá': 'l ˈa',
  'casa': 'ˈk a z ɐ',
  'rua': 'ˈʁ u ɐ',
  'hoje': 'ˈo ʒ i',
  'ontem': 'ˈõ t ẽ',
  'amanhã': 'a m ɐ ˈɲ ɐ̃',
  'depois': 'd e ˈp o j s',
  'antes': 'ˈɐ̃ t ʃ i s',
  'agora': 'a ˈg o ɾ ɐ',
  'sempre': 'ˈs ẽ p ɾ i',
  'nunca': 'ˈn ũ k ɐ',
  // Pessoas
  'pessoa': 'p e ˈs o ɐ',
  'gente': 'ˈʒ ẽ t ʃ i',
  'amigo': 'a ˈm i g u',
  'família': 'f ɐ ˈm i l j ɐ',
  'filho': 'ˈf i ʎ u',
  'filha': 'ˈf i ʎ ɐ',
  'mãe': 'm ˈɐ̃ j',
  'pai': 'p ˈa j',
  // Trabalho/tecnologia
  'escritório': 'i s k ɾ i ˈt ɔ ɾ j u',
  'computador': 'k õ p u t a ˈd o ɾ',
  'celular': 's e l u ˈl a ɾ',
  'internet': 'ĩ t e ɾ ˈn ɛ t ʃ i',
  'arquivo': 'a ɾ ˈk i v u',
  'arquivos': 'a ɾ ˈk i v u s',
  'pasta': 'ˈp a s t ɐ',
  'pastas': 'ˈp a s t ɐ s',
  'senha': 'ˈs e ɲ ɐ',
  'segurança': 's e g u ˈɾ ɐ̃ s ɐ',
  'banco': 'ˈb ɐ̃ k u',
  'mensagem': 'm ẽ ˈs a ʒ ẽ',
  'trabalho': 't ɾ a ˈb a ʎ u',
  'mercado': 'm e ɾ ˈk a d u',
  'tecla': 'ˈt ɛ k l ɐ',
  'célula': 'ˈs ɛ l u l ɐ',
  'fórmula': 'ˈf ɔ ɾ m u l ɐ',
  // PIX
  'pix': 'ˈp i k s',
  'golpe': 'ˈg o w p i',
  'golpes': 'ˈg o w p i s',
  // Verbos comuns
  'aprender': 'a p ɾ ẽ ˈd e ɾ',
  'aprenda': 'a ˈp ɾ ẽ d ɐ',
  'fazer': 'f a ˈz e ɾ',
  'faz': 'f ˈa s',
  'ter': 't ˈe ɾ',
  'ser': 's ˈe ɾ',
  'ir': 'ˈi ɾ',
  'estar': 'i s ˈt a ɾ',
  'sou': 's ˈo w',
  'é': 'ˈɛ',
  'são': 's ɐ̃ w̃',
  'está': 'i s ˈt a',
  // Conectores
  'porque': 'p o ɾ ˈk e',
  'então': 'ẽ ˈt ɐ̃ w̃',
  'assim': 'a ˈs ĩ',
  'também': 't ɐ̃ ˈb ẽ',
  'só': 's ˈɔ',
  'só': 's ˈɔ',
  // Tempo
  'hora': 'ˈo ɾ ɐ',
  'minuto': 'm i ˈn u t u',
  'minutos': 'm i ˈn u t u s',
  'semana': 's e ˈm ɐ n ɐ',
  'mês': 'm ˈe s',
  'ano': 'ˈɐ n u',
  // Botões/ações
  'clique': 'ˈk l i k i',
  'clicar': 'k l i ˈk a ɾ',
  'digite': 'd ʒ i ˈʒ i t ʃ i',
  'aperte': 'a ˈp ɛ ɾ t ʃ i',
  'salvar': 's a w ˈv a ɾ',
  'abrir': 'a ˈb ɾ i ɾ',
  'fechar': 'f e ˈʃ a ɾ',
  // App
  'missão': 'm i ˈs ɐ̃ w̃',
  'missões': 'm i ˈs õ j s',
  'trilha': 'ˈt ɾ i ʎ ɐ',
  'módulo': 'ˈm ɔ d u l u',
  'troféu': 't ɾ o ˈf ɛ w',
  'ofensiva': 'o f ẽ ˈs i v ɐ',
  'maria': 'm a ˈɾ i ɐ',
  'rafael': 'ʁ a f a ˈɛ w',
};

/* === Regras de substituição (aplicadas SEM passar pelo dicionário) === */

/** Quebra texto em palavras e pontuações. */
function tokenize(texto) {
  const tokens = [];
  let buf = '';
  const PUNC = '.,!?;:()-—';
  for (const c of texto) {
    if (/\s/.test(c)) {
      if (buf) { tokens.push({ tipo: 'palavra', valor: buf }); buf = ''; }
      tokens.push({ tipo: 'espaço', valor: ' ' });
    } else if (PUNC.includes(c)) {
      if (buf) { tokens.push({ tipo: 'palavra', valor: buf }); buf = ''; }
      tokens.push({ tipo: 'punc', valor: c });
    } else {
      buf += c;
    }
  }
  if (buf) tokens.push({ tipo: 'palavra', valor: buf });
  return tokens;
}

/** Substitui blocos de grafemas portugueses por IPA. Ordem importa. */
const RULES = [
  // Dígrafos
  ['lh', 'ʎ'],
  ['nh', 'ɲ'],
  ['ch', 'ʃ'],
  ['rr', 'ʁ'],
  ['ss', 's'],
  ['qu', 'k'], // assume "qu" como /k/ (caso comum); "guarani" será raro
  ['gu', 'g'],
  // Vogais nasais
  ['am', 'ɐ̃'], ['an', 'ɐ̃'], ['ã', 'ɐ̃'],
  ['em', 'ẽ'], ['en', 'ẽ'],
  ['im', 'ĩ'], ['in', 'ĩ'],
  ['om', 'õ'], ['on', 'õ'], ['õ', 'õ'],
  ['um', 'ũ'], ['un', 'ũ'],
  // ç
  ['ç', 's'],
  // x → ʃ (heurística — não perfeito)
  ['x', 'ʃ'],
];

/** Aplica regras de palavra → IPA aproximado. */
function regrasPalavra(palavra) {
  let s = palavra.toLowerCase();
  for (const [from, to] of RULES) {
    s = s.split(from).join(to);
  }
  // r entre vogais → ɾ; início ou após consoante → ʁ
  s = s.replace(/([aeiouɐɛɔ])r([aeiouɐɛɔ])/g, '$1ɾ$2');
  s = s.replace(/^r/, 'ʁ');
  s = s.replace(/(?<=[mnlsʃ])r/g, 'ʁ');
  // c antes de e/i → s, senão k
  s = s.replace(/c([ei])/g, 's$1');
  s = s.replace(/c/g, 'k');
  // g antes de e/i → ʒ, senão g (já tratado)
  s = s.replace(/g([ei])/g, 'ʒ$1');
  // d/t antes de i → palatalização (dʒ / tʃ)
  s = s.replace(/d(i)/g, 'dʒ$1');
  s = s.replace(/t(i)/g, 'tʃ$1');
  // s no fim de palavra → s
  // l no fim → w (velarização) — opcional
  s = s.replace(/l$/, 'w');
  // separa em "fonemas" (caracteres únicos ou compostos)
  // Quebra em chars unicode, agrupando combinantes
  const out = [];
  let i = 0;
  while (i < s.length) {
    let ch = s[i];
    // combina nasal/stress com letra anterior
    while (i + 1 < s.length && /[̃̌ˈˌː]/.test(s[i + 1])) {
      ch += s[i + 1]; i++;
    }
    out.push(ch);
    i++;
  }
  return out.filter(c => c && c !== '_');
}

/** Converte tokens IPA pra IDs usando o `phoneme_id_map` do config Piper.
 *  Caracteres com nasal (a + ̃ = ã) são emitidos como 2 IDs em sequência. */
export function ipaToIds(ipaTokens, config) {
  const map = config.phoneme_id_map || {};
  const ids = [];
  const startId = map['^']?.[0] ?? 1;
  const endId   = map['$']?.[0] ?? 2;
  const sepId   = map['_']?.[0] ?? 0;
  ids.push(startId, sepId);
  for (const tok of ipaTokens) {
    // Emite cada caractere unicode individualmente; combinantes nasais (̃)
    // têm IDs próprios (̃ = 141) e devem vir DEPOIS da vogal base.
    for (const c of tok) {
      const id = map[c]?.[0];
      if (id !== undefined) {
        ids.push(id, sepId);
      }
    }
  }
  ids.push(endId, sepId);
  return ids;
}

/** Converte texto pt-BR → array de fonemas IPA. */
export function textoToIPA(texto) {
  const tokens = tokenize(texto);
  const out = [];
  for (const t of tokens) {
    if (t.tipo === 'palavra') {
      const lower = t.valor.toLowerCase();
      const dic = DICIONARIO[lower];
      if (dic) {
        // Dicionário tem fonemas separados por espaço
        for (const ph of dic.split(' ').filter(Boolean)) out.push(ph);
      } else {
        for (const ph of regrasPalavra(t.valor)) out.push(ph);
      }
      // pequena pausa entre palavras
      out.push(' ');
    } else if (t.tipo === 'punc') {
      // espelha pontuação na saída (mapa do Piper aceita)
      out.push(t.valor);
    } else if (t.tipo === 'espaço') {
      out.push(' ');
    }
  }
  return out;
}

/** Helper completo: texto → IDs prontos pro modelo. */
export function textoToIds(texto, config) {
  const ipa = textoToIPA(texto);
  return ipaToIds(ipa, config);
}
