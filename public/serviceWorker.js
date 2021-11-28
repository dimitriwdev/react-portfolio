const CACHE_NAME = "cache-v1";
const urlsToCache = ["/", "index.html", "offline.html"];

// add cache
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

// fetch cache
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cache) => {
      return (
        cache || fetch(e.request).catch(() => caches.match("offline.html"))
      );
    })
  );
});

// delete
self.addEventListener("activate", (e) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);

  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
