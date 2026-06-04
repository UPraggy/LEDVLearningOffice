// audit-text.mjs — Texto fora do viewBox = rótulo cortado (objeto incompleto).
// Cobre: (1) SVGs estáticos gerados; (2) todas as cenas vivas (SCENE_BUILDERS)
// e (3) headers buildMissionScene de uma amostra de missões.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { TRILHAS, MISSOES } from '../src/data/estrutura.js';
import { buildMissionScene } from '../src/data/mission-scene.js';
import { buildScene, SCENE_BUILDERS } from '../src/data/scene-templates.js';

const TOL = 4;
const prob = [];

// mede UMA linha (x, texto, fontSize, anchor) contra as bordas
function checkLine(x, y, fs, anchor, txt, W, H, id) {
  if (!isFinite(x) || !isFinite(y) || !txt) return;
  const w = txt.length * fs * 0.55;
  let x0 = x, x1 = x;
  if (anchor === 'middle') { x0 = x - w / 2; x1 = x + w / 2; }
  else if (anchor === 'end') { x0 = x - w; }
  else { x1 = x + w; }
  const out = [];
  if (x0 < -TOL) out.push(`esq ${x0.toFixed(0)}`);
  if (x1 > W + TOL) out.push(`dir ${x1.toFixed(0)}>${W}`);
  if (y > H + TOL) out.push(`base ${y}>${H}`);
  if (out.length) prob.push(`${id}: "${txt.slice(0, 28)}" ${out.join(', ')}`);
}

// extrai <text>; se houver <tspan>, mede CADA tspan como linha própria
function checkText(svg, W, H, id) {
  for (const m of svg.matchAll(/<text\b([^>]*)>([\s\S]*?)<\/text>/g)) {
    const t = m[1];
    const tx = +(t.match(/\bx="(-?[\d.]+)"/)?.[1] ?? NaN);
    const ty = +(t.match(/\by="(-?[\d.]+)"/)?.[1] ?? NaN);
    const fs = +(t.match(/font-size="(-?[\d.]+)"/)?.[1] ?? 16);
    const anchor = (t.match(/text-anchor="(\w+)"/)?.[1]) || 'start';
    const inner = m[2];
    const tspans = [...inner.matchAll(/<tspan\b([^>]*)>([\s\S]*?)<\/tspan>/g)];
    if (tspans.length) {
      let cy = ty;
      for (const ts of tspans) {
        const a = ts[1];
        const sx = +(a.match(/\bx="(-?[\d.]+)"/)?.[1] ?? tx);
        const dy = +(a.match(/\bdy="(-?[\d.]+)"/)?.[1] ?? 0);
        cy += dy;
        checkLine(sx, cy, fs, anchor, ts[2].replace(/<[^>]+>/g, '').trim(), W, H, id);
      }
    } else {
      checkLine(tx, ty, fs, anchor, inner.replace(/<[^>]+>/g, '').trim(), W, H, id);
    }
  }
}

// 1) estáticos
for (const dir of ['public/generated/missions', 'public/generated/interactive']) {
  let files; try { files = readdirSync(dir).filter(f => f.endsWith('.svg')); } catch { continue; }
  for (const f of files) {
    const svg = readFileSync(join(dir, f), 'utf8');
    const vb = svg.match(/viewBox="0 0 (\d+) (\d+)"/); if (!vb) continue;
    checkText(svg, +vb[1], +vb[2], `${dir}/${f}`);
  }
}
// 2) cenas vivas
for (const slug of Object.keys(SCENE_BUILDERS)) checkText(buildScene(slug, {}, slug), 1000, 640, `scene:${slug}`);
// 3) headers vivos (todas)
const byId = Object.fromEntries(TRILHAS.map(t => [t.id, t]));
for (const [tid, ms] of Object.entries(MISSOES)) {
  const tr = byId[tid]; if (!tr) continue;
  for (const m of ms) checkText(buildMissionScene({ trilha: tr, missao: m, total: ms.length }), 1200, 675, `hdr:${tid}/${m.id}`);
}

console.log(`\n== AUDITORIA DE TEXTO (rótulos cortados) ==`);
if (!prob.length) console.log('OK — nenhum rótulo fora do viewBox.\n');
else { console.log(`Cortes de texto: ${prob.length}\n`); prob.slice(0, 100).forEach(s => console.log('  ' + s)); }
process.exit(prob.length ? 1 : 0);
