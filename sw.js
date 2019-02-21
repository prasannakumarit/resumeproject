self.addEventListener('install',function(evnet){
  event.waituntil(
    caches.open('v1').then(function(cache){
    return cache.addAll([
    ]);

    })

  );
});

self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.match(event.request).then(function(resp)
    return resp || fetch(event.request).then(function(response){
     return caches.open('v1').then(function(caches){
       cache.put(event.request,response.clone());
       return response;
  });
});
})
);
});
