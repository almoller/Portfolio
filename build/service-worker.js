"use strict";var precacheConfig=[["/index.html","04d6ce989b7e22853165b90fbf0aa6bd"],["/static/css/main.f96868ab.css","8fba7de2c1e2454692201e405c23fa1c"],["/static/js/main.f0ae6a21.js","9a21a873792a7e671e2a68b23e9ae629"],["/static/media/3d.a8f48e89.jpg","a8f48e8909ae384bb597365321085d5c"],["/static/media/Broads-Fork.7a3e765d.jpg","7a3e765de728854383a50de0448ba086"],["/static/media/alan-logo.f2d4a794.png","f2d4a794eed40aa654dbce6aeefabea9"],["/static/media/alan-profile-pic.22348998.jpg","223489988e04f45ad54c9e9148048a8f"],["/static/media/coding-badge-UofU.42fa061a.png","42fa061ab1586f03105d5663a06c80ce"],["/static/media/escalante-2.06506c1a.jpg","06506c1a5aaaefc8390f0c7a31a7c67b"],["/static/media/escalante-2.349e1396.jpg","349e1396b030400cf823975d60f1b297"],["/static/media/graphicDesign.cba25de8.jpg","cba25de8d93a6d7e4d000aa6944ba2bd"],["/static/media/photography.0c90d003.jpg","0c90d003545917d5d6e030fb4e64bc4d"],["/static/media/portfolioDesign.eea6bd07.jpg","eea6bd07b54948e8f5c654ccfb8e1727"],["/static/media/portfolioWeb.bf321a09.jpg","bf321a0914c41ac0e232e8b69ce1380c"],["/static/media/topography.977e3fd0.png","977e3fd0f430205e51e65488c11fdddc"],["/static/media/typography.de078b29.jpg","de078b299d80b0c9f10363370daa6aa8"],["/static/media/wild_oliva.86f4c239.png","86f4c2397325bcd6305c75abc235ece3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});