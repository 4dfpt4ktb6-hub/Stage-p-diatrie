const V="v2";
const CORE=["./","index.html","manifest.webmanifest","logo.svg","icons/icon-180.png","icons/icon-192.png","icons/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
function put(req,res){if(res&&(res.ok||res.type==="opaque")){const c=res.clone();caches.open(V).then(ch=>ch.put(req,c))}return res}
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;
// Pages : réseau d'abord (mises à jour), cache si hors ligne
if(r.mode==="navigate"){e.respondWith(fetch(r).then(n=>put(r,n)).catch(()=>caches.match(r).then(c=>c||caches.match("index.html"))));return}
// Le reste (icônes, polices) : cache d'abord
e.respondWith(caches.match(r).then(c=>c||fetch(r).then(n=>put(r,n))))});
