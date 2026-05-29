/* =========================================================================
   useVoiceSynthesis - TTS offline com Piper Cadu (pt-BR).
   - Carrega o modelo so na primeira chamada (lazy).
   - Cacheia em escopo de modulo: uma unica instancia para toda a app.
   - A voz do app e somente Piper/Cadu; nao usa voz do sistema.
   ========================================================================= */
import { useCallback, useEffect, useRef, useState } from 'react';
import { textoToIds } from '../lib/pt-g2p.js';
import { asset } from '../lib/asset.js';

let _ort = null;
let _session = null;
let _config = null;
let _loading = null;
let _audioCtx = null;

async function loadOrt() {
  if (_ort) return _ort;
  const mod = await import('onnxruntime-web');
  try {
    mod.env.wasm.wasmPaths = asset('/piper/wasm/');
    const hasSAB = typeof SharedArrayBuffer !== 'undefined';
    mod.env.wasm.numThreads = hasSAB ? Math.min(4, navigator.hardwareConcurrency || 2) : 1;
    mod.env.wasm.simd = true;
    mod.env.wasm.proxy = false;
    mod.env.logLevel = 'warning';
  } catch (e) {
    console.warn('[Piper] Configuracao ORT falhou:', e);
  }
  _ort = mod;
  return mod;
}

async function loadModel() {
  if (_session && _config) return { session: _session, config: _config };
  if (_loading) return _loading;
  _loading = (async () => {
    const ort = await loadOrt();
    console.info('[Piper] Baixando modelo Cadu (~60MB) - so na primeira vez...');
    const [modelResp, configResp] = await Promise.all([
      fetch(asset('/piper/cadu.onnx')),
      fetch(asset('/piper/cadu.onnx.json')),
    ]);
    if (!modelResp.ok || !configResp.ok) {
      throw new Error(`Falha ao baixar modelo Piper (model=${modelResp.status} cfg=${configResp.status})`);
    }
    const [buf, json] = await Promise.all([modelResp.arrayBuffer(), configResp.json()]);
    console.info(`[Piper] Modelo baixado (${(buf.byteLength / 1048576).toFixed(1)}MB). Criando sessao ONNX...`);
    _session = await ort.InferenceSession.create(buf, {
      executionProviders: ['wasm'],
      graphOptimizationLevel: 'all',
    });
    _config = json;
    console.info('[Piper] Cadu pronto. inputs:', _session.inputNames, 'outputs:', _session.outputNames);
    return { session: _session, config: _config };
  })();
  try {
    return await _loading;
  } catch (e) {
    _loading = null;
    throw e;
  }
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

export function useVoiceSynthesis() {
  const [pronto, setPronto] = useState(!!(_session && _config));
  const [carregando, setCarregando] = useState(false);
  const [falando, setFalando] = useState(false);
  const [erro, setErro] = useState(null);
  const sourceRef = useRef(null);

  const parar = useCallback(() => {
    try { sourceRef.current?.stop(); } catch {}
    sourceRef.current = null;
    setFalando(false);
  }, []);

  useEffect(() => () => parar(), [parar]);

  const preload = useCallback(async () => {
    if (pronto || carregando) return;
    setCarregando(true);
    try {
      await loadModel();
      setPronto(true);
      setErro(null);
    } catch (e) {
      console.warn('[Piper] Modelo Cadu nao carregou:', e?.message);
      setPronto(false);
      setErro('piper');
    } finally {
      setCarregando(false);
    }
  }, [pronto, carregando]);

  const speak = useCallback(async (texto) => {
    if (!texto || typeof texto !== 'string') return;
    parar();

    if (!pronto && !carregando) await preload();
    if (!_session || !_config) {
      setErro('piper');
      setFalando(false);
      return;
    }

    setFalando(true);
    try {
      const ort = await loadOrt();
      const { session, config } = await loadModel();
      const ids = textoToIds(texto, config);
      if (ids.length < 4) { setFalando(false); return; }

      const sampleRate = config.audio?.sample_rate || 22050;
      const lengthScale = config.inference?.length_scale ?? 1.0;
      const noiseScale = config.inference?.noise_scale ?? 0.667;
      const noiseW = config.inference?.noise_w ?? 0.8;

      const inputIds = BigInt64Array.from(ids.map(BigInt));
      const feeds = {
        input: new ort.Tensor('int64', inputIds, [1, ids.length]),
        input_lengths: new ort.Tensor('int64', BigInt64Array.from([BigInt(ids.length)]), [1]),
        scales: new ort.Tensor('float32', Float32Array.from([noiseScale, lengthScale, noiseW]), [3]),
      };
      const output = await session.run(feeds);
      const audioFloat = output.output?.data ?? Object.values(output)[0]?.data;
      if (!audioFloat) throw new Error('Saida de audio vazia');

      const ctx = getCtx();
      if (!ctx) {
        setErro('piper');
        setFalando(false);
        return;
      }
      const buffer = ctx.createBuffer(1, audioFloat.length, sampleRate);
      buffer.copyToChannel(audioFloat, 0);
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      source.onended = () => setFalando(false);
      source.start();
      sourceRef.current = source;
      setErro(null);
    } catch (e) {
      console.warn('[Piper] Sintese Cadu falhou:', e?.message);
      setErro('piper');
      setFalando(false);
    }
  }, [pronto, carregando, preload, parar]);

  return { speak, parar, preload, pronto, carregando, falando, erro };
}
