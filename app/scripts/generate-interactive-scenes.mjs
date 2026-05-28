// ============================================================================
// generate-interactive-scenes.mjs
// Gera os SVGs PADRÃO (preview/fallback) das cenas simuladas a partir da
// FONTE ÚNICA `src/data/scene-templates.js`.
//
// O app renderiza as cenas INLINE (dinâmicas) via Interacoes.jsx, passando
// `cenaTpl`+`cenaData` (hotspot) ou `tpl`+`tplData` (imagem). Estes arquivos
// .svg servem como:
//   • fallback para itens que usam `cenaImg`/`url` apontando para o arquivo;
//   • preview/documentação visual de cada template.
//
// Saída: app/public/generated/interactive/<slug>.svg  (1000x640)
//
// Rode com:  node scripts/generate-interactive-scenes.mjs
// ============================================================================

import { mkdirSync, writeFileSync, readdirSync, unlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  SCENE_BUILDERS,
  SCENE_SLUGS,
  SCENE_LABELS,
  buildScene,
} from '../src/data/scene-templates.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const OUT = join(root, 'public', 'generated', 'interactive');

mkdirSync(OUT, { recursive: true });

// arquivos gerenciados por este gerador (1 por template)
const managed = new Set(SCENE_SLUGS.map((s) => `${s}.svg`));

// remove apenas o que ESTE gerador produz (mantém wpp-golpe/email-phishing à mão)
for (const f of readdirSync(OUT)) {
  if (managed.has(f)) {
    try { unlinkSync(join(OUT, f)); } catch {}
  }
}

let n = 0;
for (const slug of SCENE_SLUGS) {
  const label = SCENE_LABELS[slug] || slug;
  // dados padrão = defaults internos de cada builder (data = {})
  const svg = `${buildScene(slug, {}, label)}\n`;
  writeFileSync(join(OUT, `${slug}.svg`), svg, 'utf8');
  n++;
}

console.log(`✓ ${n} cenas padrão geradas em public/generated/interactive/`);
for (const slug of SCENE_SLUGS) {
  console.log(`   - ${slug}.svg  (${SCENE_LABELS[slug] || slug})`);
}

// sanity: confirma que cada builder produz SVG não-vazio
const broken = SCENE_SLUGS.filter((s) => !SCENE_BUILDERS[s] || buildScene(s, {}).length < 100);
if (broken.length) {
  console.warn('⚠ templates suspeitos (saída curta):', broken.join(', '));
}
