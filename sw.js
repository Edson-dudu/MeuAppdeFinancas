
const CACHE_NAME = 'financas-v1';
const urlsToCache = ['/MeuAppdeFinancas/', '/MeuAppdeFinancas/index.html', '/MeuAppdeFinancas/manifest.json'];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
