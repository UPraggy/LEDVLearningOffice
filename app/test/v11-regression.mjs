import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { MISSOES } from '../src/data/estrutura.js';
import { KATAS } from '../src/data/katas/index.js';

const root = fileURLToPath(new URL('..', import.meta.url));
const read = (path) => readFileSync(join(root, path), 'utf8');

const voice = read('src/hooks/useVoiceSynthesis.js');
assert.equal(/speechSynthesis|SpeechSynthesisUtterance|fallbackSpeak|fallbackRef/.test(voice), false,
  'Voz deve ser somente Piper/Cadu; nao pode cair para Web Speech/voz do sistema.');

const botaoVoz = read('src/components/subComponents/BotaoVoz.jsx');
assert.equal(/fallback|voz do sistema/i.test(botaoVoz), false,
  'UI de voz nao deve sugerir fallback para voz do sistema.');

const configuracoes = read('src/components/screens/Configuracoes.jsx');
assert.equal(/fallback|voz do sistema/i.test(configuracoes), false,
  'Configuracoes nao devem exibir fallback de voz do sistema.');

const arcadePool = read('src/data/arcade-pool.js');
const achaErroBlocks = [...arcadePool.matchAll(/\{\s*id:\s*'e\d'[\s\S]*?\n  \}/g)].map(m => m[0]);
assert.ok(achaErroBlocks.length >= 3, 'Pool do Arcade deve manter desafios acha_o_erro variados.');
for (const block of achaErroBlocks) {
  assert.match(block, /codigo:/, 'acha_o_erro deve mostrar texto/codigo neutro.');
  assert.match(block, /opcoes:\s*\[/, 'acha_o_erro deve usar botoes de alternativa.');
  assert.doesNotMatch(block, /tokens:/, 'acha_o_erro nao deve usar tokens clicaveis que entregam o erro.');
}

const arcade = read('src/components/screens/Arcade.jsx');
assert.equal(/arcade-token/.test(arcade), false,
  'Arcade nao deve renderizar tokens clicaveis no acha_o_erro.');
assert.match(arcade, /find-error-code|find-error-options/,
  'Arcade deve renderizar acha_o_erro como codigo neutro + alternativas.');

const interacoes = read('src/data/conteudo/_interacoes-exemplo.js');
const imagens = [...interacoes.matchAll(/tipo:\s*'imagem'[\s\S]*?url:\s*'([^']+)'/g)].map(m => m[1]);
assert.ok(imagens.length >= 8, 'Missoes precisam de pelo menos 8 imagens de exemplo.');
for (const url of imagens) {
  assert.match(url, /^\/generated\/(missions|interactive)\//,
    'Imagens de missoes devem ser assets locais gerados no projeto, nao URLs externas.');
}

let totalMissoes = 0;
for (const [trilhaId, missoes] of Object.entries(MISSOES)) {
  for (const missao of missoes) {
    totalMissoes++;
    const path = join(root, 'public', 'generated', 'missions', `${trilhaId}-${missao.id}.svg`);
    assert.ok(existsSync(path), `Imagem local ausente para ${trilhaId}-${missao.id}`);
  }
}
assert.ok(totalMissoes > 200, 'O teste deve cobrir todas as missoes do catalogo.');

// Katas: 1 por dia do ano (>=365), schema valido e ids unicos.
assert.ok(KATAS.length >= 365, `Katas devem ser >= 365 (1/dia). Atual: ${KATAS.length}`);
const kataIds = new Set();
const cores = new Set(['coral', 'navy', 'plum', 'sage', 'sky']);
for (const k of KATAS) {
  assert.ok(!kataIds.has(k.id), `Kata com id duplicado: ${k.id}`);
  kataIds.add(k.id);
  assert.ok([1, 2, 3].includes(k.nivel), `Kata ${k.id} com nivel invalido.`);
  assert.ok(Array.isArray(k.opcoes) && k.opcoes.length === 4, `Kata ${k.id} precisa de 4 opcoes.`);
  assert.ok(typeof k.resposta === 'number' && k.resposta >= 0 && k.resposta <= 3, `Kata ${k.id} com resposta fora de 0-3.`);
  assert.ok(cores.has(k.cor), `Kata ${k.id} com cor invalida.`);
  for (const f of ['modulo', 'titulo', 'cenario', 'explicacao']) {
    assert.ok(k[f], `Kata ${k.id} sem campo ${f}.`);
  }
}

console.log('v11 regression checks passed');
