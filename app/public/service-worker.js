// service-worker.js
// Este service worker faz o app funcionar offline (cache) e ser instalável.
// Versione a cada deploy mudando o número abaixo:
const CACHE_VERSION = 'escritorio-v5';
const PIPER_CACHE  = 'escritorio-piper-v1';

// COI: injeta COOP/COEP nas respostas same-origin para reativar crossOriginIsolated
// em hosts estáticos (GitHub Pages não envia esses headers). Habilita SharedArrayBuffer
// → threads do onnxruntime (voz Piper mais rápida). 'credentialless' não bloqueia
// recursos cross-origin sem credenciais (ex.: Google Fonts).
function withCOI(res) {
  if (!res || res.type !== 'basic') return res; // só same-origin
  const h = new Headers(res.headers);
  h.set('Cross-Origin-Embedder-Policy', 'credentialless');
  h.set('Cross-Origin-Opener-Policy', 'same-origin');
  h.set('Cross-Origin-Resource-Policy', 'cross-origin');
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers: h });
}

// Arquivos críticos que devem estar disponíveis offline desde a primeira visita.
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

// Ao instalar: pré-carrega os arquivos essenciais
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

// Ao ativar: limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_VERSION)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

// Estratégia de fetch:
// - HTML: network-first (sempre tenta buscar versão nova)
// - Outros (JS, CSS, imagens, fontes): cache-first com fallback de rede
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Só lida com GET
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Cache especial pro modelo Piper (stale-while-revalidate, separado pra não estourar limite)
  if (url.pathname.startsWith('/piper/')) {
    event.respondWith(
      caches.open(PIPER_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        const networkPromise = fetch(request).then((resp) => {
          if (resp && resp.ok) cache.put(request, resp.clone());
          return resp;
        }).catch(() => cached);
        return cached || networkPromise;
      }).then(withCOI)
    );
    return;
  }

  const isHTML = request.mode === 'navigate' ||
                 (request.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('/index.html')))
        .then(withCOI)
    );
    return;
  }

  // Cache-first pra assets
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        // Só faz cache de respostas válidas
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const copy = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
        return response;
      });
    }).then(withCOI)
  );
});

// Notificações push (estrutura básica — implementar quando tiver backend)
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Nova missão te esperando';
  const options = {
    body: data.body || 'Que tal manter sua sequência hoje?',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-72.png',
    vibrate: [100, 50, 100],
    tag: data.tag || 'default',
    data: { url: data.url || '/' },
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || '/')
  );
});
