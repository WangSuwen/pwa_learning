importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");
var cacheStorageKey = 'minimal-pwa-1'
var cacheList=[
  // '/',
  // 'index.html',
  // 'main.css',
  // 'daotong.jpeg'
]
self.addEventListener('install',e =>{
  e.waitUntil(
    caches.open(cacheStorageKey)
    .then(cache => cache.addAll(cacheList))
    .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate',function(e){
  e.waitUntil(
    //获取所有cache名称
    caches.keys().then(cacheNames => {
      return Promise.all(
        // 获取所有不同于当前版本名称cache下的内容
        cacheNames.filter(cacheNames => {
          return cacheNames !== cacheStorageKey
        }).map(cacheNames => {
          return caches.delete(cacheNames)
        })
      );
    }).then(() => {
      return self.clients.claim()
    })
  )
})

/**
 * sw文件 更新时，自动更新所有页面
 */
// 安装阶段跳过等待，直接进入 active
/* self.addEventListener('install', function (event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
      Promise.all([
          // 更新客户端
          self.clients.claim(),
          // 清理旧版本
          caches.keys().then(function (cacheList) {
              return Promise.all(
                cacheNames.filter(cacheNames => {
                  return cacheNames !== cacheStorageKey
                }).map(cacheNames => {
                  return caches.delete(cacheNames)
                })
              );
          })
      ])
  );
}); */

self.addEventListener('fetch',function(e){
  e.respondWith(
    caches.match(e.request).then(function(response){
      if(response != null){
        return response
      }
      return fetch(e.request.url)
    })
  )
})

