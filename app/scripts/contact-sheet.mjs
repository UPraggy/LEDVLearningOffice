// Gera uma folha de contato HTML com as cenas REAIS (header + aula) para
// inspeção visual no navegador. Foca em Excel + amostra de outras trilhas.
import { writeFileSync } from 'node:fs';
import { TRILHAS, MISSOES } from '../src/data/estrutura.js';
import { buildMissionScene } from '../src/data/mission-scene.js';
import { buildScene, SCENE_BUILDERS } from '../src/data/scene-templates.js';
import { sceneForMission } from '../src/data/scene-for-mission.js';

const byId = Object.fromEntries(TRILHAS.map(t => [t.id, t]));
// trilhas-alvo: excel + uma de cada módulo
const alvo = ['pc-excel-pro', 'pc-excel', 'mer-planilha', 'en-a1-basico', 'amb-seg', 'mob-pix'];
let cards = '';
for (const tid of alvo) {
  const ms = MISSOES[tid]; const tr = byId[tid];
  if (!ms || !tr) { cards += `<h2>${tid} — AUSENTE</h2>`; continue; }
  cards += `<h2>${tid} — ${tr.nome || tr.titulo || ''}</h2>`;
  for (const m of ms.slice(0, 6)) {
    const header = buildMissionScene({ trilha: tr, missao: m, total: ms.length });
    const slug = sceneForMission(tr, m);
    const cena = SCENE_BUILDERS[slug] ? buildScene(slug, {}, slug) : '<i>—</i>';
    cards += `<div class="card">
      <div class="lbl">${m.id} · ${m.titulo}</div>
      <figure class="mission-visual"><div class="mission-visual-svg">${header}</div></figure>
      <div class="cena-ilustra"><div class="cena-ilustra-svg">${cena}</div></div>
      <div class="slug">cena: ${slug}</div>
    </div>`;
  }
}
// galeria de TODOS os scene-builders
cards += `<h2>Todos os SCENE_BUILDERS (${Object.keys(SCENE_BUILDERS).length})</h2>`;
for (const slug of Object.keys(SCENE_BUILDERS)) {
  cards += `<div class="card"><div class="lbl">${slug}</div>
    <div class="cena-ilustra"><div class="cena-ilustra-svg">${buildScene(slug, {}, slug)}</div></div></div>`;
}

const html = `<!doctype html><meta charset=utf8><title>Contact Sheet</title>
<style>
  :root{--surface:#fff;--line:#dfe5ea;--r-md:12px;--r-lg:16px;--sh-1:0 1px 3px #0002;--s-4:14px;--s-5:18px}
  body{font:14px system-ui;margin:0;padding:20px;background:#f3f5f7;color:#152}
  h2{margin:28px 0 10px;font-size:15px;color:#345;border-bottom:2px solid #cdd;padding-bottom:4px}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:16px}
  .card{background:#fff;border:1px solid var(--line);border-radius:12px;padding:10px}
  .lbl{font-weight:600;font-size:12px;margin-bottom:6px;color:#234}
  .slug{font-size:11px;color:#789;margin-top:4px}
  .mission-visual{margin:0 0 8px;border:1px solid var(--line);border-radius:var(--r-md);overflow:hidden;background:var(--surface)}
  .mission-visual .mission-visual-svg{width:100%;display:block;aspect-ratio:16/9;object-fit:cover}
  .mission-visual .mission-visual-svg svg{width:100%;height:100%;display:block}
  .cena-ilustra{border:1px solid var(--line);border-radius:var(--r-lg);overflow:hidden;background:#E9EEF2}
  .cena-ilustra .cena-ilustra-svg svg{width:100%;height:auto;display:block}
</style>
<div class="grid">${cards}</div>`;

writeFileSync('contact-sheet.html', html);
console.log('Escrito contact-sheet.html');
