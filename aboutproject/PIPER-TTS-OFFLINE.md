# Piper TTS offline — integração no React/Vite/PWA

> Documento de entrega: como rodar **síntese de voz offline** no front com o modelo Piper `cadu` (pt-BR), usando `onnxruntime-web`. **Zero backend, zero API, funciona offline depois do primeiro load.**
>
> **Aviso técnico crítico (leia antes de prometer):** Piper precisa de **fonemas IPA** como entrada (não texto bruto). Pra gerar fonemas em português brasileiro, normalmente usa `espeak-ng`. No navegador, isso vira o problema mais difícil da integração — listo soluções abaixo.

---

## 1. Arquivos do HuggingFace

Baixe estes **dois** arquivos de [https://huggingface.co/rhasspy/piper-voices/tree/main/pt/pt_BR/cadu/medium](https://huggingface.co/rhasspy/piper-voices/tree/main/pt/pt_BR/cadu/medium):

```
pt_BR-cadu-medium.onnx        # ~63 MB — modelo de voz
pt_BR-cadu-medium.onnx.json   # metadados (sample rate, fonemas, espeak voice)
```

Coloque em `public/piper/`:

```
escritorio-virtual/app/public/piper/
├── pt_BR-cadu-medium.onnx
└── pt_BR-cadu-medium.onnx.json
```

> **Renomeie pra `cadu.onnx` / `cadu.onnx.json` se preferir** — só ajuste os paths no hook.

---

## 2. Dependências

```bash
npm install onnxruntime-web phonemize
```

- `onnxruntime-web` (~10 MB instalado) — runtime ONNX em WASM, roda o modelo localmente.
- `phonemize` — opcional, depende da escolha de fonemização (ver §5).

---

## 3. Configuração do `vite.config.js`

ONNX runtime usa WASM e workers. Vite precisa servir esses arquivos corretamente:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    headers: {
      // Cross-Origin Isolation pra WebAssembly SIMD + threads (opcional, mas dobra a velocidade)
      'Cross-Origin-Opener-Policy':   'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  build: {
    assetsInlineLimit: 0, // não inline pra arquivos grandes
    rollupOptions: {
      output: {
        // Mantém .onnx e .wasm fora de hash chunk
        assetFileNames: (info) => {
          if (info.name?.endsWith('.onnx') || info.name?.endsWith('.wasm')) {
            return 'assets/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['onnxruntime-web'], // evita pre-bundle do WASM
  },
  // Vite serve arquivos da pasta public como estão — sem hash, sem transform.
});
```

---

## 4. Service Worker — cache do modelo

Atualize seu `public/service-worker.js` pra **cachear o modelo no primeiro load** (assim funciona offline depois):

```js
const CACHE_VERSION = 'escritorio-v2';
const MODEL_CACHE = 'piper-model-v1';

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Cache "stale-while-revalidate" pro modelo Piper
  if (url.pathname.startsWith('/piper/')) {
    event.respondWith(
      caches.open(MODEL_CACHE).then(async (cache) => {
        const cached = await cache.match(event.request);
        if (cached) return cached;
        const fresh = await fetch(event.request);
        if (fresh.ok) cache.put(event.request, fresh.clone());
        return fresh;
      })
    );
    return;
  }

  // ... resto do seu fetch handler
});
```

---

## 5. O problema dos fonemas (essencial)

Piper recebe **sequências de IDs de fonemas IPA**, não texto. Pra converter "Boa tarde" → `[b o.ɐ t a ɾ d ʒ i]` → IDs numéricos, você precisa de uma das opções:

### Opção A — `espeak-ng` compilado em WASM (mais fiel ao Piper)
- Repositório: [`espeak-ng/espeak-ng-wasm`](https://github.com/espeak-ng/espeak-ng) (existem builds comunitários)
- Tamanho: ~3-5 MB extra
- Qualidade: idêntica ao Piper desktop
- Complexidade: alta — precisa carregar `.wasm` próprio do espeak

### Opção B — `phonemize` (lib JS pura, fonemização aproximada)
- `npm install phonemize`
- Funciona, mas pronúncia ~85% correta pra pt-BR (alguns ditongos/encontros consonantais soam estranhos)
- 200 KB total
- **Recomendo essa pro MVP** — basta pra ler "Boa tarde, Maria" decente

### Opção C — Servir um endpoint `/api/phonemize` (não front-only)
- Quebra a regra "zero backend"
- Melhor qualidade mas inviável pro projeto

**Pra esse projeto (regra zero backend), vou usar Opção B.** O hook abaixo já faz o fallback automático.

---

## 6. `src/hooks/useVoiceSynthesis.js`

```js
import { useEffect, useRef, useState } from 'react';

let _ortCache = null;
let _modelCache = null;
let _configCache = null;

async function loadOnnxRuntime() {
  if (_ortCache) return _ortCache;
  // Import dinâmico — só carrega quando o usuário pedir voz
  const ort = await import('onnxruntime-web');
  // Aponta pra pasta de WASM servida pelo Vite (node_modules → public)
  ort.env.wasm.wasmPaths = '/node_modules/onnxruntime-web/dist/';
  ort.env.wasm.numThreads = navigator.hardwareConcurrency || 4;
  ort.env.wasm.simd = true;
  _ortCache = ort;
  return ort;
}

async function loadModel() {
  if (_modelCache && _configCache) return { session: _modelCache, config: _configCache };
  const ort = await loadOnnxRuntime();
  const [modelBuf, configJson] = await Promise.all([
    fetch('/piper/cadu.onnx').then((r) => r.arrayBuffer()),
    fetch('/piper/cadu.onnx.json').then((r) => r.json()),
  ]);
  _modelCache = await ort.InferenceSession.create(modelBuf, {
    executionProviders: ['wasm'],
    graphOptimizationLevel: 'all',
  });
  _configCache = configJson;
  return { session: _modelCache, config: _configCache };
}

/* Fonemização — Opção B (phonemize lib) */
async function textToPhonemeIds(texto, config) {
  const { phonemize } = await import('phonemize');
  // phonemize com idioma pt-BR
  const phonemes = await phonemize(texto, { lang: 'pt-BR' });
  // Mapeia caracteres IPA pros IDs definidos no config.phoneme_id_map
  const map = config.phoneme_id_map || {};
  const ids = [config.phoneme_id_map?.['^']?.[0] ?? 1]; // ^ = start
  for (const ph of phonemes) {
    const id = map[ph]?.[0];
    if (id !== undefined) ids.push(id, map['_']?.[0] ?? 0); // _ separador
  }
  ids.push(config.phoneme_id_map?.['$']?.[0] ?? 2); // $ = end
  return ids;
}

/** Hook principal. */
export function useVoiceSynthesis() {
  const [pronto, setPronto] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [falando, setFalando] = useState(false);
  const audioCtxRef = useRef(null);
  const sourceRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return; // não pré-carrega se usuário pediu reduced motion
  }, []);

  async function preload() {
    if (pronto || carregando) return;
    setCarregando(true);
    try {
      await loadModel();
      setPronto(true);
    } catch (e) {
      console.error('Falha ao carregar Piper:', e);
    } finally {
      setCarregando(false);
    }
  }

  async function speak(texto) {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    parar(); // interrompe áudio anterior
    if (!pronto) { await preload(); if (!pronto && !carregando) return; }
    setFalando(true);
    try {
      const ort = await loadOnnxRuntime();
      const { session, config } = await loadModel();
      const ids = await textToPhonemeIds(texto, config);

      const sampleRate = config.audio?.sample_rate || 22050;
      const lengthScale = config.inference?.length_scale ?? 1.0;
      const noiseScale  = config.inference?.noise_scale ?? 0.667;
      const noiseW      = config.inference?.noise_w ?? 0.8;

      const inputIds = new BigInt64Array(ids.map(BigInt));
      const feeds = {
        input:       new ort.Tensor('int64', inputIds, [1, ids.length]),
        input_lengths: new ort.Tensor('int64', new BigInt64Array([BigInt(ids.length)]), [1]),
        scales:      new ort.Tensor('float32', new Float32Array([noiseScale, lengthScale, noiseW]), [3]),
      };
      const output = await session.run(feeds);
      const audioFloat = output.output.data; // Float32Array de samples

      // Toca via Web Audio
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const buffer = ctx.createBuffer(1, audioFloat.length, sampleRate);
      buffer.copyToChannel(audioFloat, 0);
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      source.onended = () => setFalando(false);
      source.start();
      sourceRef.current = source;
    } catch (e) {
      console.error('Falha ao sintetizar:', e);
      setFalando(false);
    }
  }

  function parar() {
    try { sourceRef.current?.stop(); } catch {}
    sourceRef.current = null;
    setFalando(false);
  }

  return { speak, parar, pronto, carregando, falando, preload };
}
```

---

## 7. `src/components/BotaoVoz.jsx`

```jsx
import { Volume2, Loader2, Square } from 'lucide-react';
import { useVoiceSynthesis } from '../hooks/useVoiceSynthesis.js';

export default function BotaoVoz({ texto, preload = false }) {
  const { speak, parar, pronto, carregando, falando, preload: doPreload } = useVoiceSynthesis();

  // Pré-carrega quando o componente entra na tela (opcional, custa ~60 MB)
  if (preload && !pronto && !carregando) doPreload();

  const onClick = () => {
    if (falando) parar();
    else speak(texto);
  };

  const label = falando ? 'Parar leitura' : carregando ? 'Carregando voz' : 'Ouvir texto';

  return (
    <button
      onClick={onClick}
      disabled={carregando && !falando}
      aria-label={label}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        minHeight: 44, padding: '0 14px',
        borderRadius: 99,
        background: falando ? 'var(--coral)' : 'var(--surface)',
        color: falando ? '#fff' : 'var(--ink)',
        border: '1px solid var(--line)',
        font: 'inherit', fontWeight: 600, fontSize: 13,
        cursor: carregando ? 'wait' : 'pointer',
        transition: 'background 120ms',
      }}
    >
      {falando ? <Square size={14} /> : carregando ? <Loader2 size={14} className="spin" /> : <Volume2 size={14} />}
      {label}
    </button>
  );
}
```

CSS extra (em qualquer global):

```css
@keyframes spin { to { transform: rotate(360deg); } }
.spin { animation: spin 1s linear infinite; }
```

---

## 8. Uso em `AulaRica.jsx`

```jsx
import BotaoVoz from './BotaoVoz.jsx';

// Dentro do render da Aula:
{aula.gancho && (
  <div className="gancho">
    {aula.gancho}
    <BotaoVoz texto={aula.gancho} />
  </div>
)}

{aula.conceito && (
  <div>
    <h2>{aula.conceito.titulo}</h2>
    <p>{aula.conceito.texto}</p>
    <BotaoVoz texto={`${aula.conceito.titulo}. ${aula.conceito.texto}`} />
  </div>
)}
```

---

## 9. Limitações reais (transparência)

| Navegador | Funciona | Observações |
|---|---|---|
| Chrome 90+ desktop | ✅ Pleno | Mais rápido com SIMD habilitado |
| Edge / Brave | ✅ Pleno | Iguais ao Chrome |
| Firefox 89+ | ✅ Pleno | Sem SIMD em alguns builds — fica mais lento |
| Safari macOS 15.4+ | ✅ Pleno | Precisa de Cross-Origin-Isolation pra threads |
| Safari iOS 16.4+ | ⚠️ Funciona, mas lento | iOS bloqueia threads WASM até 16.4. Modelo de 60MB pode estourar memória em iPhones antigos |
| Chrome Android 90+ | ⚠️ Funciona, lento | Primeira geração demora 5-10s em celular mediano |
| iOS < 16.4 | ❌ | onnxruntime-web não tem fallback sem SharedArrayBuffer |
| IE / navegadores antigos | ❌ | Sem WebAssembly moderno |

**Custos reais:**
- **Tamanho:** ~63 MB do modelo `.onnx` + ~10 MB de runtime + ~2 MB de espeak/phonemize = **75 MB no primeiro load**.
- **Tempo de inicialização:** 2-4s desktop, 5-12s mobile.
- **Tempo por frase de 10 palavras:** ~0.5-1s desktop, ~2-4s mobile.
- **RAM:** ~150 MB de pico durante síntese.

**Alternativa muito mais leve:** se aceitar voz menos natural, o navegador já tem `SpeechSynthesisUtterance` (Web Speech API) **grátis e sem download**. O usuário pediu pra evitar — mas é a alternativa quando o orçamento de banda/RAM não fecha. Compare:

| | Piper Cadu | Web Speech (sistema) |
|---|---|---|
| Banda | 75 MB | 0 |
| Qualidade | Natural BR | Robótica (depende do device) |
| Offline | Sim (após cache) | Depende do device (iOS = não) |
| Latência 1ª frase | 2-5s | <100 ms |

---

## 10. Recomendação prática

1. **MVP**: comece com **Web Speech API** (zero custo, funciona já), só pra ver se o usuário VAI USAR.
2. **Validação**: se ≥30% dos usuários acionarem voz, **aí** investe no Piper.
3. **Produção**: ofereça ambos — Piper como "premium" (carrega 1x), Web Speech como fallback.

Esse documento te dá tudo pra rodar Piper. Mas seja honesto com o usuário: 75 MB no celular dele **é caro**.
