/* Change this name to make every phone throw away its saved copy and download the app again. */
const CACHE = 'career-saathi-v1';

const FILES = [
  './',
  'index.html',
  'manifest.webmanifest',
  'fonts/bricolage-grotesque-latin-500-normal.woff2',
  'fonts/bricolage-grotesque-latin-600-normal.woff2',
  'fonts/dm-sans-latin-400-normal.woff2',
  'fonts/dm-sans-latin-500-normal.woff2',
  'fonts/ibm-plex-mono-latin-400-normal.woff2',
  'fonts/noto-sans-devanagari-devanagari-400-normal.woff2',
  'fonts/noto-sans-devanagari-devanagari-500-normal.woff2',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.filter(name => name !== CACHE).map(name => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

/* Answer from the saved copy so the app opens at once and works offline,
   and refresh that copy in the background so the next visit is up to date. */
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  const isPage = request.mode === 'navigate';
  const saved = caches.open(CACHE).then(cache => cache.match(request, { ignoreSearch: isPage }));
  const fresh = fetch(request).then(response => {
    if (response.ok && response.type === 'basic') {
      const copy = response.clone();
      event.waitUntil(caches.open(CACHE).then(cache => cache.put(request, copy)));
    }
    return response;
  });

  event.respondWith(
    saved.then(hit => hit || fresh.catch(() => (isPage ? caches.match('./') : Response.error())))
  );
  event.waitUntil(fresh.catch(() => {}));
});
