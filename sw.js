const C='pulsecare-v5',A=['/','/manifest.json','/icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const isNavigation=e.request.mode==='navigate';
 if(isNavigation){
   e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{if(r.ok)caches.open(C).then(c=>c.put('/',r.clone()));return r}).catch(()=>caches.match('/') ));
   return;
 }
 e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request).then(r=>{if(r.ok)caches.open(C).then(c=>c.put(e.request,r.clone()));return r}).catch(()=>caches.match('/'))));
});