// ============================================================================
// audit-all.mjs — Teste TOTAL do sistema de missões/cenas.
// Exercita os DOIS builders de SVG (cabeçalho + cena-ilustra) para CADA missão,
// valida completude de conteúdo (aula/prática/desafio/validação) e detecta:
//   • SVG vazio / sem </svg> / com "undefined"|"NaN"
//   • slug de cena inexistente em SCENE_BUILDERS
//   • objeto desenhado FORA do viewBox (corte) — header 1200x675 e cena 1000x640
// Uso: node scripts/audit-all.mjs
// ============================================================================
import { TRILHAS, MISSOES } from '../src/data/estrutura.js';
import { CONTEUDOS } from '../src/data/conteudo/index.js';
import { buildMissionScene } from '../src/data/mission-scene.js';
import { buildScene, SCENE_BUILDERS } from '../src/data/scene-templates.js';
import { sceneForMission } from '../src/data/scene-for-mission.js';

const trilhaById = Object.fromEntries(TRILHAS.map(t => [t.id, t]));
const problemas = [];
const add = (sev, trilhaId, missaoId, tipo, msg) =>
  problemas.push({ sev, trilha: trilhaId, missao: missaoId, tipo, msg });

// --- valida estrutura básica de um SVG string ---
function checaSvg(svg, { w, h }, ctx) {
  if (!svg || typeof svg !== 'string' || svg.length < 40) { add('ERRO', ctx.t, ctx.m, ctx.tipo, 'SVG vazio/curto'); return; }
  if (!/<\/svg>\s*$/.test(svg.trim())) add('ERRO', ctx.t, ctx.m, ctx.tipo, 'sem </svg> final');
  if (/undefined/.test(svg)) add('ERRO', ctx.t, ctx.m, ctx.tipo, 'contém "undefined"');
  if (/NaN/.test(svg)) add('ERRO', ctx.t, ctx.m, ctx.tipo, 'contém "NaN"');
  if (/(fill|stroke)="(#)?"/.test(svg)) add('AVISO', ctx.t, ctx.m, ctx.tipo, 'cor vazia');
  // detecção de corte: coords numéricas grosseiramente fora do viewBox
  const margem = 80; // tolerância p/ sombras/strokes
  let fora = 0, total = 0;
  const re = /\b(x|cx|x1|x2)="(-?\d+(?:\.\d+)?)"/g; let mm;
  while ((mm = re.exec(svg))) { total++; const v = +mm[2]; if (v < -margem || v > w + margem) fora++; }
  const reY = /\b(y|cy|y1|y2)="(-?\d+(?:\.\d+)?)"/g;
  while ((mm = reY.exec(svg))) { total++; const v = +mm[2]; if (v < -margem || v > h + margem) fora++; }
  if (fora > 0) add('CORTE', ctx.t, ctx.m, ctx.tipo, `${fora}/${total} coords fora do viewBox ${w}x${h}`);
}

let nMiss = 0;
for (const [trilhaId, missoes] of Object.entries(MISSOES)) {
  const trilha = trilhaById[trilhaId];
  if (!trilha) { add('ERRO', trilhaId, '-', 'wiring', 'trilha em MISSOES sem entrada em TRILHAS'); continue; }
  for (const m of missoes) {
    nMiss++;
    // 1) Cena de cabeçalho (sempre renderiza)
    let header = '';
    try { header = buildMissionScene({ trilha, missao: { id: m.id, titulo: m.titulo, desc: m.desc, tempo: m.tempo }, total: missoes.length }); }
    catch (e) { add('ERRO', trilhaId, m.id, 'header', 'throw: ' + e.message); }
    checaSvg(header, { w: 1200, h: 675 }, { t: trilhaId, m: m.id, tipo: 'header' });

    // 2) Cena-ilustra (aula)
    const slug = sceneForMission(trilha, m);
    if (!SCENE_BUILDERS[slug]) add('ERRO', trilhaId, m.id, 'cena', `slug inexistente: ${slug}`);
    else {
      let cena = '';
      try { cena = buildScene(slug, {}, slug); }
      catch (e) { add('ERRO', trilhaId, m.id, 'cena', `throw em ${slug}: ${e.message}`); }
      checaSvg(cena, { w: 1000, h: 640 }, { t: trilhaId, m: m.id, tipo: `cena:${slug}` });
    }

    // 3) Conteúdo rico (se existir) — completude
    const c = CONTEUDOS[`${trilhaId}-${m.id}`];
    if (c) {
      if (!c.aula) add('AVISO', trilhaId, m.id, 'conteudo', 'sem aula');
      if (!c.pratica || !(c.pratica.passos || []).length) add('AVISO', trilhaId, m.id, 'conteudo', 'prática sem passos');
      if (!c.desafio || !(c.desafio.requisitos || []).length) add('AVISO', trilhaId, m.id, 'conteudo', 'desafio sem requisitos');
      if (!(c.validacao || []).length) add('AVISO', trilhaId, m.id, 'conteudo', 'sem validação');
    }
  }
}

// --- também valida TODOS os SCENE_BUILDERS isoladamente (preview/arcade) ---
for (const slug of Object.keys(SCENE_BUILDERS)) {
  let svg = '';
  try { svg = buildScene(slug, {}, slug); }
  catch (e) { add('ERRO', '(builder)', slug, 'scene-builder', 'throw: ' + e.message); continue; }
  checaSvg(svg, { w: 1000, h: 640 }, { t: '(builder)', m: slug, tipo: 'scene-builder' });
}

// --- relatório ---
const porSev = problemas.reduce((a, p) => ((a[p.sev] = (a[p.sev] || 0) + 1), a), {});
console.log(`\n== AUDITORIA DE CENAS ==`);
console.log(`Missões testadas: ${nMiss} | Scene-builders: ${Object.keys(SCENE_BUILDERS).length}`);
console.log(`Resumo: ${JSON.stringify(porSev)}\n`);

const ordem = { ERRO: 0, CORTE: 1, AVISO: 2 };
problemas.sort((a, b) => (ordem[a.sev] - ordem[b.sev]) || a.trilha.localeCompare(b.trilha));
// agrupa CORTE por tipo de cena/header pra enxergar padrão
const cortes = problemas.filter(p => p.sev === 'CORTE');
const cortePorAlvo = cortes.reduce((a, p) => ((a[p.tipo.split(':')[0] === 'cena' ? p.tipo : p.tipo] = (a[p.tipo] || 0) + 1), a), {});
if (cortes.length) {
  console.log('— CORTES agrupados por alvo —');
  for (const [k, v] of Object.entries(cortes.reduce((a,p)=>((a[p.tipo]=(a[p.tipo]||0)+1),a),{})).sort((x,y)=>y[1]-x[1]))
    console.log(`  ${String(v).padStart(4)}×  ${k}`);
  console.log('');
}
const erros = problemas.filter(p => p.sev === 'ERRO');
if (erros.length) {
  console.log('— ERROS (primeiros 60) —');
  for (const p of erros.slice(0, 60)) console.log(`  [${p.trilha}/${p.missao}] ${p.tipo}: ${p.msg}`);
  console.log('');
}
const avisos = problemas.filter(p => p.sev === 'AVISO');
if (avisos.length) {
  console.log('— AVISOS (primeiros 40) —');
  for (const p of avisos.slice(0, 40)) console.log(`  [${p.trilha}/${p.missao}] ${p.tipo}: ${p.msg}`);
}
console.log(`\nTotal problemas: ${problemas.length}`);
process.exit(erros.length ? 1 : 0);
