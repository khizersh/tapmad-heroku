import { precacheAndRoute } from "workbox-precaching";
precacheAndRoute(self.__WB_MANIFEST);

const cacheName = "v1";

const cachePages = ["/", "about"];

self.addEventListener("install", function(event) {
  console.log("Hello world from the Service Worker 🤙");

  event.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(cachePages);
    })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
