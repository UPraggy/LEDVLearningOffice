// ============================================================================
// audit-interacoes.mjs — Caça imagens/cenas quebradas nas INTERAÇÕES.
// Para cada interação dentro de CONTEUDOS, verifica:
//   • tpl/cenaTpl que NÃO existe em SCENE_BUILDERS  → buildScene devolve '' →
//     cai no <img src=url>; se não houver url/cenaImg, vira imagem quebrada.
//   • tipo 'imagem'/'hotspot' SEM tpl E SEM url/cenaImg → nada renderiza.
//   • url/cenaImg apontando p/ arquivo inexistente em public/.
//   • buildScene(tpl) que retorna vazio mesmo com slug "existente".
// Uso: node scripts/audit-interacoes.mjs
// ============================================================================
import { existsSync } from 'node:fs';
import { CONTEUDOS } from '../src/data/conteudo/index.js';
import { buildScene, SCENE_BUILDERS } from '../src/data/scene-templates.js';

const keys = new Set(Object.keys(SCENE_BUILDERS));
const prob = [];
const add = (chave, tipo, msg) => prob.push({ chave, tipo, msg });

// percorre recursivamente procurando objetos de interação
function walk(node, chave) {
  if (Array.isArray(node)) { node.forEach(n => walk(n, chave)); return; }
  if (!node || typeof node !== 'object') return;

  const tipo = node.tipo;
  const temTpl = 'tpl' in node || 'cenaTpl' in node;
  const tpl = node.tpl || node.cenaTpl;
  const url = node.url || node.cenaImg;

  if (temTpl) {
    if (!keys.has(tpl)) {
      // slug inexistente; só é grave se não houver fallback de imagem
      if (!url) add(chave, tipo || '?', `tpl inexistente "${tpl}" e SEM url fallback → imagem quebrada`);
      else add(chave, tipo || '?', `tpl inexistente "${tpl}" (usa fallback url ${url})`);
    } else {
      let svg = '';
      try { svg = buildScene(tpl, node.tplData || node.cenaData || {}, 'x'); } catch (e) { add(chave, tipo, `throw em ${tpl}: ${e.message}`); }
      if (!svg && !url) add(chave, tipo || '?', `buildScene("${tpl}") vazio e SEM url fallback`);
    }
  }

  // imagem/hotspot sem nenhuma fonte
  if ((tipo === 'imagem' || tipo === 'hotspot') && !temTpl && !url) {
    add(chave, tipo, 'interação de imagem SEM tpl e SEM url/cenaImg');
  }

  // arquivo estático inexistente
  for (const campo of ['url', 'cenaImg']) {
    const v = node[campo];
    if (typeof v === 'string' && v.startsWith('/')) {
      if (!existsSync('public' + v)) add(chave, tipo || '?', `${campo} aponta p/ arquivo inexistente: ${v}`);
    }
  }

  for (const k of Object.keys(node)) walk(node[k], chave);
}

for (const [chave, c] of Object.entries(CONTEUDOS)) walk(c, chave);

console.log(`\n== AUDITORIA DE INTERAÇÕES ==`);
console.log(`Conteúdos: ${Object.keys(CONTEUDOS).length} | SCENE_BUILDERS: ${keys.size}`);
const graves = prob.filter(p => /quebrada|vazio|inexistente: |SEM tpl|throw/.test(p.msg));
console.log(`Problemas: ${prob.length}  (graves: ${graves.length})\n`);
for (const p of prob.slice(0, 120)) console.log(`  [${p.chave}] (${p.tipo}) ${p.msg}`);
process.exit(graves.length ? 1 : 0);
