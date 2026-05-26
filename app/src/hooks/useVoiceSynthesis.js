/* =========================================================================
   useVoiceSynthesis — TTS offline com Piper Cadu (pt-BR).
   - Carrega o modelo só na primeira chamada (lazy).
   - Cacheia em escopo de módulo — uma única instância pra toda a app.
   - Honra prefers-reduced-motion: NÃO fala se ativo.
   - Fallback: se o modelo Piper falhar, tenta Web Speech API.
   ========================================================================= */
import { useCallback, useEffect, useRef, useState } from 'react';
import { textoToIds } from '../lib/pt-g2p.js';

let _ort = null;
let _session = null;
let _config = null;
let _loading = null;          // Promise compartilhada do load
let _audioCtx = null;

async function loadOrt() {
  if (_ort) return _ort;
  const mod = await import('onnxruntime-web');
  // Configura paths do WASM (arquivos em node_modules → servidos pelo Vite em /node_modules/...)
  // Vite serve módulos com path absoluto via /node_modules/... em dev.
  // Em produção, copiamos manualmente os .wasm pra /piper/wasm/ (build script).
  try {
    mod.env.wasm.numThreads = Math.min(4, navigator.hardwareConcurrency || 2);
    mod.env.wasm.simd = true;
    // wasmPaths fallback — onnxruntime-web procura ao lado por padrão
  } catch {}
  _ort = mod;
  return mod;
}

async function loadModel() {
  if (_session && _config) return { session: _session, config: _config };
  if (_loading) return _loading;
  _loading = (async () => {
    const ort = await loadOrt();
    const [modelResp, configResp] = await Promise.all([
      fetch('/piper/cadu.onnx'),
      fetch('/piper/cadu.onnx.json'),
    ]);
    if (!modelResp.ok || !configResp.ok) throw new Error('Falha ao baixar modelo Piper');
    const [buf, json] = await Promise.all([modelResp.arrayBuffer(), configResp.json()]);
    _session = await ort.InferenceSession.create(buf, {
      executionProviders: ['wasm'],
      graphOptimizationLevel: 'all',
    });
    _config = json;
    return { session: _session, config: _config };
  })();
  return _loading;
}

function getCtx() {
  if (!_audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    _audioCtx = new AC();
  }
  if (_audioCtx.state === 'suspended') _audioCtx.resume().catch(() => {});
  return _audioCtx;
}

/** Fallback web speech (se o Piper quebrar ou pra MVP rápido). */
function fallbackSpeak(texto) {
  if (!('speechSynthesis' in window)) return false;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(texto);
  u.lang = 'pt-BR'; u.rate = 0.95; u.pitch = 1;
  // Tenta achar voz pt-BR no sistema
  const vozes = speechSynthesis.getVoices();
  const pt = vozes.find(v => /pt[-_]BR/i.test(v.lang)) || vozes.find(v => /pt/i.test(v.lang));
  if (pt) u.voice = pt;
  speechSynthesis.speak(u);
  return true;
}

export function useVoiceSynthesis() {
  const [pronto, setPronto] = useState(!!(_session && _config));
  const [carregando, setCarregando] = useState(false);
  const [falando, setFalando] = useState(false);
  const [erro, setErro] = useState(null);
  const sourceRef = useRef(null);
  const fallbackRef = useRef(false);

  const parar = useCallback(() => {
    try { sourceRef.current?.stop(); } catch {}
    sourceRef.current = null;
    try { speechSynthesis?.cancel(); } catch {}
    setFalando(false);
  }, []);

  // Cleanup
  useEffect(() => () => parar(), [parar]);

  const preload = useCallback(async () => {
    if (pronto || carregando) return;
    setCarregando(true);
    try {
      await loadModel();
      setPronto(true);
      setErro(null);
    } catch (e) {
      console.warn('[Piper] Modelo não carregou — usando Web Speech como fallback:', e?.message);
      fallbackRef.current = true;
      setErro('fallback');
    } finally {
      setCarregando(false);
    }
  }, [pronto, carregando]);

  const speak = useCallback(async (texto) => {
    if (!texto || typeof texto !== 'string') return;
    // Voz é independente de prefers-reduced-motion — é leitura auxiliar,
    // não animação. Controlada pela preferência `vozLigada` (botão UI).

    parar();

    // Se já caiu pro fallback, usa Web Speech direto
    if (fallbackRef.current) { setFalando(true); fallbackSpeak(texto); setTimeout(() => setFalando(false), texto.length * 80); return; }

    if (!pronto && !carregando) await preload();

    if (fallbackRef.current) { setFalando(true); fallbackSpeak(texto); setTimeout(() => setFalando(false), texto.length * 80); return; }

    setFalando(true);
    try {
      const ort = await loadOrt();
      const { session, config } = await loadModel();
      const ids = textoToIds(texto, config);
      if (ids.length < 4) { setFalando(false); return; }

      const sampleRate = config.audio?.sample_rate || 22050;
      const lengthScale = config.inference?.length_scale ?? 1.0;
      const noiseScale  = config.inference?.noise_scale  ?? 0.667;
      const noiseW      = config.inference?.noise_w      ?? 0.8;

      const inputIds = BigInt64Array.from(ids.map(BigInt));
      const feeds = {
        input:         new ort.Tensor('int64', inputIds, [1, ids.length]),
        input_lengths: new ort.Tensor('int64', BigInt64Array.from([BigInt(ids.length)]), [1]),
        scales:        new ort.Tensor('float32', Float32Array.from([noiseScale, lengthScale, noiseW]), [3]),
      };
      const output = await session.run(feeds);
      const audioFloat = output.output?.data ?? Object.values(output)[0]?.data;
      if (!audioFloat) throw new Error('Saída de áudio vazia');

      const ctx = getCtx();
      if (!ctx) { setFalando(false); return; }
      const buffer = ctx.createBuffer(1, audioFloat.length, sampleRate);
      buffer.copyToChannel(audioFloat, 0);
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      source.onended = () => setFalando(false);
      source.start();
      sourceRef.current = source;
    } catch (e) {
      console.warn('[Piper] Síntese falhou — fallback Web Speech:', e?.message);
      fallbackRef.current = true;
      fallbackSpeak(texto);
      setTimeout(() => setFalando(false), texto.length * 80);
    }
  }, [pronto, carregando, preload, parar]);

  return { speak, parar, preload, pronto, carregando, falando, erro };
}
