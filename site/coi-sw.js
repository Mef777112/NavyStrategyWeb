// GitHub Pages cannot send COOP/COEP headers. Without them the browser withholds
// SharedArrayBuffer and the multithreaded Unity player cannot start, so this worker
// adds the headers to every same-origin response.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.cache === "only-if-cached" && request.mode !== "same-origin") return;
  // Cross-origin requests (lobby API) go through CORS and need no rewrite.
  if (new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(request).then(response => {
    if (response.status === 0) return response;
    const headers = new Headers(response.headers);
    headers.set("Cross-Origin-Opener-Policy", "same-origin");
    headers.set("Cross-Origin-Embedder-Policy", "require-corp");
    headers.set("Cross-Origin-Resource-Policy", "same-origin");
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  }));
});
