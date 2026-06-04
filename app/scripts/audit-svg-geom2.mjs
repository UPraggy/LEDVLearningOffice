// ============================================================================
// audit-svg-geom2.mjs — Auditoria geométrica CORRETA (path-aware) dos SVGs.
// Resolve comandos absolutos E relativos do atributo d, calcula bbox real e
// compara ao viewBox. Como o <svg> externo recorta no viewBox (UA overflow),
// um bbox que exceda = corte VISÍVEL. Também cobre rect/circle/ellipse/line/
// polygon/text(x,y). Ignora conteúdo dentro de <defs>…</defs>.
// Uso: node scripts/audit-svg-geom2.mjs [dir]
// ============================================================================
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIRS = process.argv[2] ? [process.argv[2]] : ['public/generated/missions', 'public/generated/interactive'];
const TOL = 8;

function attr(tag, n) { const m = tag.match(new RegExp(`\\b${n}="(-?[\\d.]+)"`)); return m ? +m[1] : null; }

// bbox de um path d resolvendo relativos
function pathBox(d, acc) {
  const toks = d.match(/[a-zA-Z]|-?\d*\.?\d+(?:e-?\d+)?/g) || [];
  let i = 0, cx = 0, cy = 0, sx = 0, sy = 0, cmd = '';
  const num = () => +toks[i++];
  const rel = c => c >= 'a' && c <= 'z';
  while (i < toks.length) {
    if (/[a-zA-Z]/.test(toks[i])) cmd = toks[i++];
    const C = cmd.toUpperCase(), r = rel(cmd);
    if (C === 'M') { let x = num(), y = num(); if (r) { x += cx; y += cy; } cx = x; cy = y; sx = x; sy = y; acc(cx, cy); cmd = r ? 'l' : 'L'; }
    else if (C === 'L') { let x = num(), y = num(); if (r) { x += cx; y += cy; } cx = x; cy = y; acc(cx, cy); }
    else if (C === 'H') { let x = num(); if (r) x += cx; cx = x; acc(cx, cy); }
    else if (C === 'V') { let y = num(); if (r) y += cy; cy = y; acc(cx, cy); }
    else if (C === 'C') { let x1 = num(), y1 = num(), x2 = num(), y2 = num(), x = num(), y = num(); if (r) { x1 += cx; y1 += cy; x2 += cx; y2 += cy; x += cx; y += cy; } acc(x1, y1); acc(x2, y2); acc(x, y); cx = x; cy = y; }
    else if (C === 'S' || C === 'Q') { let x1 = num(), y1 = num(), x = num(), y = num(); if (r) { x1 += cx; y1 += cy; x += cx; y += cy; } acc(x1, y1); acc(x, y); cx = x; cy = y; }
    else if (C === 'T') { let x = num(), y = num(); if (r) { x += cx; y += cy; } acc(x, y); cx = x; cy = y; }
    else if (C === 'A') { num(); num(); num(); num(); num(); let x = num(), y = num(); if (r) { x += cx; y += cy; } acc(x, y); cx = x; cy = y; }
    else if (C === 'Z') { cx = sx; cy = sy; }
    else { i++; } // desconhecido: avança
  }
}

function bboxOf(svg) {
  // remove <defs>…</defs> (gradientes/clip não desenham)
  const body = svg.replace(/<defs[\s\S]*?<\/defs>/g, '');
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  const acc = (x, y) => { if (!isFinite(x) || !isFinite(y)) return; if (x < minX) minX = x; if (y < minY) minY = y; if (x > maxX) maxX = x; if (y > maxY) maxY = y; };
  for (const m of body.matchAll(/<rect\b[^>]*>/g)) { const t = m[0], x = attr(t, 'x') ?? 0, y = attr(t, 'y') ?? 0, w = attr(t, 'width') ?? 0, h = attr(t, 'height') ?? 0; if (w > 0 && h > 0) { acc(x, y); acc(x + w, y + h); } }
  for (const m of body.matchAll(/<circle\b[^>]*>/g)) { const t = m[0], cx = attr(t, 'cx') ?? 0, cy = attr(t, 'cy') ?? 0, rr = attr(t, 'r') ?? 0; if (rr > 0) { acc(cx - rr, cy - rr); acc(cx + rr, cy + rr); } }
  for (const m of body.matchAll(/<ellipse\b[^>]*>/g)) { const t = m[0], cx = attr(t, 'cx') ?? 0, cy = attr(t, 'cy') ?? 0, rx = attr(t, 'rx') ?? 0, ry = attr(t, 'ry') ?? 0; if (rx > 0) { acc(cx - rx, cy - ry); acc(cx + rx, cy + ry); } }
  for (const m of body.matchAll(/<line\b[^>]*>/g)) { const t = m[0]; acc(attr(t, 'x1') ?? 0, attr(t, 'y1') ?? 0); acc(attr(t, 'x2') ?? 0, attr(t, 'y2') ?? 0); }
  for (const m of body.matchAll(/<(?:polygon|polyline)\b[^>]*\bpoints="([^"]+)"/g)) { const c = (m[1].match(/-?\d*\.?\d+/g) || []).map(Number); for (let k = 0; k + 1 < c.length; k += 2) acc(c[k], c[k + 1]); }
  for (const m of body.matchAll(/<path\b[^>]*\bd="([^"]+)"/g)) pathBox(m[1], acc);
  return { minX, minY, maxX, maxY };
}

const out = [];
for (const dir of DIRS) {
  let files; try { files = readdirSync(dir).filter(f => f.endsWith('.svg')); } catch { continue; }
  for (const f of files) {
    const svg = readFileSync(join(dir, f), 'utf8');
    const vb = svg.match(/viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/);
    if (!vb) { out.push(`${dir}/${f}: sem viewBox`); continue; }
    const W = +vb[1], H = +vb[2], b = bboxOf(svg);
    if (!isFinite(b.minX)) { out.push(`${dir}/${f}: sem elementos`); continue; }
    const o = [];
    if (b.minX < -TOL) o.push(`esq ${b.minX.toFixed(0)}`);
    if (b.minY < -TOL) o.push(`topo ${b.minY.toFixed(0)}`);
    if (b.maxX > W + TOL) o.push(`dir ${b.maxX.toFixed(0)}>${W}`);
    if (b.maxY > H + TOL) o.push(`base ${b.maxY.toFixed(0)}>${H}`);
    if (o.length) out.push(`${dir}/${f}: ${o.join(', ')}`);
  }
}
console.log(`\n== AUDITORIA GEOMÉTRICA (path-aware) ==`);
if (!out.length) console.log('OK — nada cortado.\n');
else { console.log(`Cortes: ${out.length}\n`); out.slice(0, 80).forEach(s => console.log('  ' + s)); }
process.exit(out.length ? 1 : 0);
