// ============================================================
//  SERVICE WORKER — Control de Cajas ABC Ximple
//  Permite instalar la app en cualquier Android / iPhone
// ============================================================

const CACHE = 'cajas-v1';
const FILES = [
  './',
  './index.html',
  './config.js',
  './manifest.json'
];

// Instalar: guarda los archivos en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
  self.skipWaiting();
});

// Activar: elimina cachés viejos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: sirve desde caché si no hay red (para los archivos de la app)
// Los datos del Sheet siempre van a la red para estar actualizados
self.addEventListener('fetch', e => {
  const url = e.request.url;
  // Datos de Google Sheets → siempre red (datos frescos)
  if (url.includes('docs.google.com') || url.includes('googleapis.com')) {
    e.respondWith(fetch(e.request));
    return;
  }
  // Archivos de la app → caché primero, luego red
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
