// Service worker da Central de Dados — cacheia o "esqueleto" do app
// (HTML/CSS/JS/libs) para a página abrir mesmo sem internet.
// Os dados clínicos em si ficam no IndexedDB (cache separado, dentro do index.html).
const CACHE_NAME = 'central-aps-v1';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

const CDN_LIBS = [
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.28/jspdf.plugin.autotable.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@700;800&display=swap',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => caches.open(CACHE_NAME))
      .then((cache) => Promise.allSettled(CDN_LIBS.map((url) => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((nomes) => Promise.all(nomes.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Nunca cachear/interceptar chamadas ao Supabase — precisam sempre ir pra rede,
  // pra não misturar com o fallback de dados do IndexedDB feito no index.html.
  if (url.hostname.includes('supabase.co')) return;

  // Stale-while-revalidate: responde rápido com o que tem em cache
  // e atualiza o cache em segundo plano quando há rede.
  event.respondWith(
    caches.match(req).then((cached) => {
      const buscaRede = fetch(req)
        .then((resp) => {
          if (resp && resp.status === 200) {
            const copia = resp.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copia));
          }
          return resp;
        })
        .catch(() => cached);
      return cached || buscaRede;
    })
  );
});
