import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    fs: { strict: false },
    // Headers pra WASM SIMD/threads do onnxruntime (SharedArrayBuffer requer COOP+COEP)
    headers: {
      'Cross-Origin-Opener-Policy':   'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    },
  },
  preview: {
    port: 4173,
    headers: {
      'Cross-Origin-Opener-Policy':   'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    },
  },
  optimizeDeps: {
    // ORT é WASM-heavy, deixa Vite tratar como external sem pre-bundle
    exclude: ['onnxruntime-web'],
  },
  build: {
    target: 'es2020',
    assetsInlineLimit: 0, // não inline arquivos grandes (.onnx)
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('onnxruntime-web')) return 'ort';
          if (id.includes('lucide-react')) return 'icons';
          if (id.includes('react-router-dom')) return 'router';
          if (id.includes('node_modules/react')) return 'react';
        },
      },
    },
  },
  resolve: {
    alias: {
      '@data': '/src/data',
    },
  },
})
