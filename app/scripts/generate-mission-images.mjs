/* =========================================================================
   Gerador de imagens de missão — PREVIEW/FALLBACK estático.
   A lógica de desenho vive em `src/data/mission-scene.js` (FONTE ÚNICA),
   que o app também usa para renderizar a cena INLINE (Missao.jsx).
   Este script só percorre TRILHAS/MISSOES e grava 1 .svg por missão como
   fallback para quem abrir /generated/missions/<trilha>-<missao>.svg direto.
   ========================================================================= */
import { mkdirSync, writeFileSync, readdirSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { MISSOES, TRILHAS } from '../src/data/estrutura.js';
import { buildMissionScene } from '../src/data/mission-scene.js';

const root = fileURLToPath(new URL('..', import.meta.url));
const outDir = join(root, 'public', 'generated', 'missions');
mkdirSync(outDir, { recursive: true });

for (const f of readdirSync(outDir)) { if (f.endsWith('.svg')) unlinkSync(join(outDir, f)); }

let count = 0;
for (const trilha of TRILHAS) {
  const missoes = MISSOES[trilha.id] || [];
  for (const missao of missoes) {
    const svg = buildMissionScene({ trilha, missao, total: missoes.length });
    writeFileSync(join(outDir, `${trilha.id}-${missao.id}.svg`), svg, 'utf8');
    count++;
  }
}
console.log(`generated ${count} mission images in ${outDir}`);
