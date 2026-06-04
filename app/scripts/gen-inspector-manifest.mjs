// gen-inspector-manifest.mjs — manifesto p/ o modo Galeria do Visual Inspector.
// Lista TODAS as SVGs estáticas (missões + interativas) e agrupa missões por
// trilha/módulo, lendo a estrutura real do app. Escreve public/inspector-manifest.json.
import { readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { TRILHAS, MISSOES } from '../src/data/estrutura.js';

const svgs = dir => { try { return readdirSync(dir).filter(f => f.endsWith('.svg')).map(f => f.slice(0, -4)); } catch { return []; } };
const interactive = svgs('public/generated/interactive').sort();
const missionsAll = new Set(svgs('public/generated/missions'));

const byId = Object.fromEntries(TRILHAS.map(t => [t.id, t]));
const trilhas = {};
for (const [tid, ms] of Object.entries(MISSOES)) {
  const tr = byId[tid]; if (!tr) continue;
  trilhas[tid] = {
    nome: tr.nome || tr.titulo || tid,
    modulo: tr.modulo || tr.mod || '',
    missoes: ms.map(m => `${tid}-${m.id}`).filter(s => missionsAll.has(s)),
  };
}

const manifest = {
  geradoEm: new Date().toISOString(),
  totalMissoes: missionsAll.size,
  totalInterativas: interactive.length,
  interactive,
  trilhas,
};
writeFileSync('public/inspector-manifest.json', JSON.stringify(manifest));
console.log(`manifest: ${missionsAll.size} missões em ${Object.keys(trilhas).length} trilhas + ${interactive.length} interativas`);
