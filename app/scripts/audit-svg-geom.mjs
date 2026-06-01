// ============================================================================
// audit-svg-geom.mjs — Auditoria GEOMÉTRICA dos SVGs estáticos gerados.
// Parseia cada elemento (rect/circle/ellipse/line/text/image/path) e calcula
// o bounding-box real, comparando com o viewBox declarado. Flagra "objeto
// cortado" (bbox excede a moldura) e viewBox ausente/zero.
// Uso: node scripts/audit-svg-geom.mjs
// ============================================================================
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIRS = ['public/generated/missions', 'public/generated/interactive'];
const TOL = 6; // px de tolerância (stroke/half-pixel)
const out = [];

function nums(re, s) { const a = []; let m; while ((m = re.exec(s))) a.push(+m[1]); return a; }
function attr(tag, name) { const m = tag.match(new RegExp(`\\b${name}="(-?[\\d.]+)"`)); return m ? +m[1] : null; }

function bboxOf(svg) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  const acc = (x, y) => { if (x < minX) minX = x; if (y < minY) minY = y; if (x > maxX) maxX = x; if (y > maxY) maxY = y; };
  // rect
  for (const m of svg.matchAll(/<rect\b[^>]*>/g)) {
    const t = m[0], x = attr(t, 'x') ?? 0, y = attr(t, 'y') ?? 0, w = attr(t, 'width') ?? 0, h = attr(t, 'height') ?? 0;
    if (w > 0 && h > 0) { acc(x, y); acc(x + w, y + h); }
  }
  // circle
  for (const m of svg.matchAll(/<circle\b[^>]*>/g)) {
    const t = m[0], cx = attr(t, 'cx') ?? 0, cy = attr(t, 'cy') ?? 0, r = attr(t, 'r') ?? 0;
    if (r > 0) { acc(cx - r, cy - r); acc(cx + r, cy + r); }
  }
  // ellipse
  for (const m of svg.matchAll(/<ellipse\b[^>]*>/g)) {
    const t = m[0], cx = attr(t, 'cx') ?? 0, cy = attr(t, 'cy') ?? 0, rx = attr(t, 'rx') ?? 0, ry = attr(t, 'ry') ?? 0;
    if (rx > 0) { acc(cx - rx, cy - ry); acc(cx + rx, cy + ry); }
  }
  // line
  for (const m of svg.matchAll(/<line\b[^>]*>/g)) {
    const t = m[0], x1 = attr(t, 'x1') ?? 0, y1 = attr(t, 'y1') ?? 0, x2 = attr(t, 'x2') ?? 0, y2 = attr(t, 'y2') ?? 0;
    acc(x1, y1); acc(x2, y2);
  }
  // image
  for (const m of svg.matchAll(/<image\b[^>]*>/g)) {
    const t = m[0], x = attr(t, 'x') ?? 0, y = attr(t, 'y') ?? 0, w = attr(t, 'width') ?? 0, h = attr(t, 'height') ?? 0;
    if (w > 0) { acc(x, y); acc(x + w, y + h); }
  }
  // path: pega todos os pares numéricos do atributo d (aprox.)
  for (const m of svg.matchAll(/<path\b[^>]*\bd="([^"]+)"/g)) {
    const coords = nums(/(-?\d+(?:\.\d+)?)/g, m[1]);
    for (let i = 0; i + 1 < coords.length; i += 2) acc(coords[i], coords[i + 1]);
  }
  // polygon/polyline points
  for (const m of svg.matchAll(/<(?:polygon|polyline)\b[^>]*\bpoints="([^"]+)"/g)) {
    const coords = nums(/(-?\d+(?:\.\d+)?)/g, m[1]);
    for (let i = 0; i + 1 < coords.length; i += 2) acc(coords[i], coords[i + 1]);
  }
  return { minX, minY, maxX, maxY };
}

for (const dir of DIRS) {
  let files;
  try { files = readdirSync(dir).filter(f => f.endsWith('.svg')); }
  catch { continue; }
  for (const f of files) {
    const svg = readFileSync(join(dir, f), 'utf8');
    const vb = svg.match(/viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/);
    if (!vb) { out.push({ f: `${dir}/${f}`, msg: 'sem viewBox' }); continue; }
    const W = +vb[1], H = +vb[2];
    const b = bboxOf(svg);
    if (!isFinite(b.minX)) { out.push({ f: `${dir}/${f}`, msg: 'sem elementos desenháveis' }); continue; }
    const over = [];
    if (b.minX < -TOL) over.push(`esq ${b.minX.toFixed(0)}`);
    if (b.minY < -TOL) over.push(`topo ${b.minY.toFixed(0)}`);
    if (b.maxX > W + TOL) over.push(`dir ${b.maxX.toFixed(0)}>${W}`);
    if (b.maxY > H + TOL) over.push(`base ${b.maxY.toFixed(0)}>${H}`);
    if (over.length) out.push({ f: `${dir}/${f}`, msg: 'CORTE: ' + over.join(', ') });
  }
}

console.log(`\n== AUDITORIA GEOMÉTRICA (arquivos estáticos) ==`);
if (!out.length) { console.log('OK — nenhum objeto cortado.\n'); process.exit(0); }
// agrupa por tipo de overflow
const byEdge = {};
for (const o of out) { const edges = (o.msg.match(/esq|topo|dir|base|sem/g) || []).join('+'); byEdge[edges] = (byEdge[edges] || 0) + 1; }
console.log('Por borda:', JSON.stringify(byEdge));
console.log(`Total: ${out.length}\n`);
for (const o of out.slice(0, 80)) console.log(`  ${o.f}  →  ${o.msg}`);
process.exit(1);
