const CACHE_NAME='garuda-esp-nusantara-v21-implemented-final';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.json','./assets/icon.svg','./assets/logo-garuda.png','./assets/logo-square.png','./assets/logo-brand.png','./assets/course-thumb-bali.png','./assets/courses-reference.png','./assets/materials-reference.png','./assets/landing-hero.png','./assets/landing-approved-full.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
