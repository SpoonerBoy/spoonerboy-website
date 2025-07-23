/* Minimal PWA service-worker registration */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
/* sw.js (optional) */
/*
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
*/
