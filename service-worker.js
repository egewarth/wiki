"use strict";var precacheConfig=[["/wiki/index.html","5a6e6742fcaab19e54cc647322dd0f39"],["/wiki/static/css/main.25ffe4dc.css","3187517d8d54c1cdc9a59cf41d83d2a5"],["/wiki/static/js/main.cb5d86cc.js","932f81162e33e05c131761df748da87c"],["/wiki/static/media/Drive.4ecf4455.png","4ecf44558a5a4828debbad12277a5bf5"],["/wiki/static/media/GitHub.648080ce.png","648080ce7e0c4b61886f817044908203"],["/wiki/static/media/Hangouts.e1ec4753.png","e1ec4753698ac9f9198ca2c2ce49dbf7"],["/wiki/static/media/Telegram.7f20825f.png","7f20825f0911cfdbeb63f4ec351ab9ae"],["/wiki/static/media/ZenHub.5fbc53a9.png","5fbc53a94a10c73bf01d4f39e71ac88f"],["/wiki/static/media/amanda.635c9641.jpeg","635c9641f512aefeabd1d2d58ef61573"],["/wiki/static/media/background.e3f6aa34.jpeg","e3f6aa3467649b7cdf836c638dc78881"],["/wiki/static/media/bruno.a4c8e9f6.jpeg","a4c8e9f620117af159bde148e1e20dd9"],["/wiki/static/media/calebe.a7b1cd0e.jpeg","a7b1cd0eeb9c26cbc8712c3315719534"],["/wiki/static/media/img1.3926c2bd.jpg","3926c2bd6131c242eddfb8bd0668ed41"],["/wiki/static/media/img2.4828469a.jpg","4828469a35f20615a0bda9e07c1c49fa"],["/wiki/static/media/img3.2c58897a.jpeg","2c58897a74b7316c9443acc494376ff5"],["/wiki/static/media/img4.1ba7d94c.jpg","1ba7d94ce0a0aae8e7dcd42be759c83e"],["/wiki/static/media/indiara.d3bf624c.jpeg","d3bf624c11ec2c7f493a8bfc6a2610d9"],["/wiki/static/media/isaque.6643ff94.jpeg","6643ff946f7fe7c985a0b614d34cfb8a"],["/wiki/static/media/joao.ebe89278.jpg","ebe89278662d391bd7f0721027606fa4"],["/wiki/static/media/luciana.a5ea98fc.jpeg","a5ea98fc72707dba45b469926391af2c"],["/wiki/static/media/luciana.d24d51b2.jpg","d24d51b2b647cc0bbce8fd8e0fe8760b"],["/wiki/static/media/martha.6823e785.jpg","6823e785d4e50b437f3f4361c00c7e97"],["/wiki/static/media/martha.8769728a.jpeg","8769728ab2092c93929752e74958beb4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,i){var c=new URL(e);return i&&c.pathname.match(i)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],i=new URL(a,self.location),c=createCacheKey(i,hashParamName,t,/\.\w{8}\./);return[i.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(i){return setOfCachedUrls(i).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return i.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),i="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,i),e=urlsToCacheKeys.has(t));var c="/wiki/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});