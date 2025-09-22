const CACHE_NAME = "portfolio-v2";
const CRITICAL_ASSETS = [
  "/",
  "/fonts/Matter-Light.woff2",
  "/fonts/Matter-Medium.woff2",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CRITICAL_ASSETS);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
