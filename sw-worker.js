!function(){"use strict";var e={895:function(){try{self["workbox:cacheable-response:6.1.5"]&&_()}catch(e){}},913:function(){try{self["workbox:core:6.1.5"]&&_()}catch(e){}},550:function(){try{self["workbox:expiration:6.1.5"]&&_()}catch(e){}},977:function(){try{self["workbox:precaching:6.1.5"]&&_()}catch(e){}},80:function(){try{self["workbox:routing:6.1.5"]&&_()}catch(e){}},873:function(){try{self["workbox:strategies:6.1.5"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}!function(){s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}s(80);const n=e=>e&&"object"==typeof e?e:{handle:e};class a{constructor(e,t,s="GET"){this.handler=n(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=n(e)}}class r extends a{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}const i=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"");class c{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const n=s.origin===location.origin,{params:a,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return void 0;let o;try{o=i.handle({url:s,request:e,event:t,params:a})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async n=>{if(h){0;try{return await h.handle({url:s,request:e,event:t,params:a})}catch(e){n=e}}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const a=this._routes.get(s.method)||[];for(const r of a){let a;const i=r.match({url:e,sameOrigin:t,request:s,event:n});if(i)return a=i,(Array.isArray(i)&&0===i.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=void 0),{route:r,params:a}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,n(e))}setCatchHandler(e){this._catchHandler=n(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this._routes.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this._routes.get(e.method).splice(s,1)}}let o;const h=()=>(o||(o=new c,o.addFetchListener(),o.addCacheListener()),o);function l(e,s,n){let i;if("string"==typeof e){const t=new URL(e,location.href);0;i=new a((({url:e})=>e.href===t.href),s,n)}else if(e instanceof RegExp)i=new r(e,s,n);else if("function"==typeof e)i=new a(e,s,n);else{if(!(e instanceof a))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});i=e}return h().registerRoute(i),i}const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},d=e=>[u.prefix,e,u.suffix].filter((e=>e&&e.length>0)).join("-"),p=e=>e||d(u.precache),f=e=>e||d(u.runtime);function w(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const m=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class _{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new g,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let n=y(e);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i={...a,cacheName:n};s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,s){const n=y(e);var a;await(a=0,new Promise((e=>setTimeout(e,a))));const r=await this.getCacheKey(n,"write");if(!s)throw new t("cache-put-with-no-response",{url:i(r.url)});const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),d=u?await async function(e,t,s,n){const a=w(t.url,s);if(t.url===a)return e.match(t,n);const r={...n,ignoreSearch:!0},i=await e.keys(t,r);for(const t of i)if(a===w(t.url,s))return e.match(t,n)}(l,r.clone(),["__WB_REVISION__"],h):null;try{await l.put(r,u?c.clone():c)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of m)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:d,newResponse:c.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=y(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a={...n,state:s};return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class R{constructor(e={}){this.cacheName=f(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new _(this,{event:t,request:s,params:n}),r=this._getResponse(a,s,t);return[r,this._awaitComplete(r,a,s,t)]}async _getResponse(e,s,n){let a;await e.runCallbacks("handlerWillStart",{event:n,request:s});try{if(a=await this._handle(s,e),!a||"error"===a.type)throw new t("no-response",{url:s.url})}catch(t){for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:t,event:n,request:s}),a)break;if(!a)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))a=await t({event:n,request:s,response:a});return a}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(e){r=e}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}class v extends R{async _handle(e,s){let n,a=await s.cacheMatch(e);if(a)0;else{0;try{a=await s.fetchAndCachePut(e)}catch(e){n=e}0}if(!a)throw new t("no-response",{url:e.url,error:n});return a}}const b={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};s(895);class x{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}class C{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new x(e)}}function q(e){e.then((()=>{}))}class U{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise(((e,t)=>{let s=!1;setTimeout((()=>{s=!0,t(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}})),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map((e=>e.key))}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:a,includeKeys:r=!1}={}){return await this.transaction([e],"readonly",((i,c)=>{const o=i.objectStore(e),h=t?o.index(t):o,l=[],u=h.openCursor(s,n);u.onsuccess=()=>{const e=u.result;e?(l.push(r?e:e.value),a&&l.length>=a?c(l):e.continue()):c(l)}}))}async transaction(e,t,s){return await this.open(),await new Promise(((n,a)=>{const r=this._db.transaction(e,t);r.onabort=()=>a(r.error),r.oncomplete=()=>n(),s(r,(e=>n(e)))}))}async _call(e,t,s,...n){return await this.transaction([t],s,((s,a)=>{const r=s.objectStore(t),i=r[e].apply(r,n);i.onsuccess=()=>a(i.result)}))}close(){this._db&&(this._db.close(),this._db=null)}}U.prototype.OPEN_TIMEOUT=2e3;const T={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(T))for(const s of t)s in IDBObjectStore.prototype&&(U.prototype[s]=async function(t,...n){return await this._call(s,t,e,...n)});s(550);const k="cache-entries",N=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class L{constructor(e){this._cacheName=e,this._db=new U("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore(k,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise(((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}}))})(this._cacheName)}async setTimestamp(e,t){const s={url:e=N(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put(k,s)}async getTimestamp(e){return(await this._db.get(k,this._getId(e))).timestamp}async expireEntries(e,t){const s=await this._db.transaction(k,"readwrite",((s,n)=>{const a=s.objectStore(k).index("timestamp").openCursor(null,"prev"),r=[];let i=0;a.onsuccess=()=>{const s=a.result;if(s){const n=s.value;n.cacheName===this._cacheName&&(e&&n.timestamp<e||t&&i>=t?r.push(s.value):i++),s.continue()}else n(r)}})),n=[];for(const e of s)await this._db.delete(k,e.id),n.push(e.url);return n}_getId(e){return this._cacheName+"|"+N(e)}}class E{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new L(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,q(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}function P(e,t){const s=t();return e.waitUntil(s),s}s(977);function K(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(n,location.href),r=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:r.href}}class M{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class A{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let S,O;async function D(e,s){let n=null;if(e.url){n=new URL(e.url).origin}if(n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const a=e.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=s?s(r):r,c=function(){if(void 0===S){const e=new Response("");if("body"in e)try{new Response(e.body),S=!0}catch(e){S=!1}S=!1}return S}()?a.body:await a.blob();return new Response(c,i)}class W extends R{constructor(e={}){e.cacheName=p(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(W.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let n;if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return n=await s.fetch(e),n}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const n=await s.fetch(e);if(!await s.cachePut(e,n.clone()))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==W.copyRedirectedCacheableResponsesPlugin&&(n===W.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(W.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}W.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},W.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await D(e):e};class I{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new W({cacheName:p(e),plugins:[...t,new A({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:a}=K(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return P(e,(async()=>{const t=new M;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:n,cache:a,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return P(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params={cacheKey:s,...t.params},this.strategy.handle(t))}}const H=()=>(O||(O=new I),O);class j extends a{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(e);if(t)return{cacheKey:t}}}),e.strategy)}}var F;(function(e){H().precache(e)})([{'revision':null,'url':'/resto-vite-demo/298.02b71e78f0a1c9a38632.bundle.js'},{'revision':null,'url':'/resto-vite-demo/666.02b71e78f0a1c9a38632.bundle.js'},{'revision':'9d24af1011e538890792c83b94572cd5','url':'/resto-vite-demo/favicon.ico'},{'revision':'0db76ac524f1f284fa90d90abe5540e6','url':'/resto-vite-demo/header-hero-large.jpg'},{'revision':'4346fb3834a9697e985e6e93cc165c2f','url':'/resto-vite-demo/header-hero-small.jpg'},{'revision':'9fdce9478770645d25cdd8d6b3954e99','url':'/resto-vite-demo/icons/icon-128x128.png'},{'revision':'9def29b96fa0752818e9e203cfd851d8','url':'/resto-vite-demo/icons/icon-144x144.png'},{'revision':'d7bf4938bdebf3b8e110118cb894cc39','url':'/resto-vite-demo/icons/icon-152x152.png'},{'revision':'e460b2a8b1a93381f852a5e7e3e438c8','url':'/resto-vite-demo/icons/icon-192x192.png'},{'revision':'7a5178f9736a4a556a4463e2be72902e','url':'/resto-vite-demo/icons/icon-384x384.png'},{'revision':'f8f1358f724bd90d288159ad0824b7e8','url':'/resto-vite-demo/icons/icon-512x512.png'},{'revision':'0c7373eb547896a422649e9dfdbb47bc','url':'/resto-vite-demo/icons/icon-72x72.png'},{'revision':'26eb23c89646f7d5900ee887cad86033','url':'/resto-vite-demo/icons/icon-96x96.png'},{'revision':'0db76ac524f1f284fa90d90abe5540e6','url':'/resto-vite-demo/images/header-hero-large.jpg'},{'revision':'4346fb3834a9697e985e6e93cc165c2f','url':'/resto-vite-demo/images/header-hero-small.jpg'},{'revision':'8e3305f7a8f567af2cb5b1a0f160bec4','url':'/resto-vite-demo/index.html'},{'revision':null,'url':'/resto-vite-demo/main-a51fa3f5.02b71e78f0a1c9a38632.bundle.js'},{'revision':null,'url':'/resto-vite-demo/main-ca0940c6.02b71e78f0a1c9a38632.bundle.js'},{'revision':'a88d6a77d798d4e8b7be88b03a1d0868','url':'/resto-vite-demo/manifest.json'},{'revision':'c53f928b39c6b23478f77dc66407c407','url':'/resto-vite-demo/styles.css'}]),function(e){const t=H();l(new j(t,e))}(F),l((function(e){return"navigate"===e.request.mode}),new class extends R{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(b),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,s){const n=[];const a=[];let r;if(this._networkTimeoutSeconds){const{id:t,promise:i}=this._getTimeoutPromise({request:e,logs:n,handler:s});r=t,a.push(i)}const i=this._getNetworkPromise({timeoutId:r,request:e,logs:n,handler:s});a.push(i);const c=await s.waitUntil((async()=>await s.waitUntil(Promise.race(a))||await i)());if(!c)throw new t("no-response",{url:e.url});return c}_getTimeoutPromise({request:e,logs:t,handler:s}){let n;return{promise:new Promise((t=>{n=setTimeout((async()=>{t(await s.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:n}){let a,r;try{r=await n.fetchAndCachePut(t)}catch(e){a=e}return e&&clearTimeout(e),!a&&r||(r=await n.cacheMatch(t)),r}}({cacheName:"pages",plugins:[new C({statuses:[200]})]})),l("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;500&display=swap",new v({plugins:[new C({statuses:[0,200,201]})]})),l("https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap",new v({plugins:[new C({statuses:[0,200,201]})]})),l("https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css",new v({plugins:[new C({statuses:[0,200,201]})]})),l((function(e){var t=e.request;return"style"===t.destination||"script"===t.destination||"worker"===t.destination}),new class extends R{constructor(e){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(b)}async _handle(e,s){const n=s.fetchAndCachePut(e).catch((()=>{}));let a,r=await s.cacheMatch(e);if(r)0;else{0;try{r=await n}catch(e){a=e}}if(!r)throw new t("no-response",{url:e.url,error:a});return r}}({cacheName:"assets",plugins:[new C({statuses:[200]})]})),l((function(e){return"image"===e.request.destination}),new v({cacheName:"images",plugins:[new C({statuses:[200]}),new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const a=this._isResponseDateFresh(n),r=this._getCacheExpiration(s);q(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){0}return a?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),m.add(t))}_getCacheExpiration(e){if(e===f())throw new t("expire-custom-caches-only");let s=this._cacheExpirations.get(e);return s||(s=new E(e,this._config),this._cacheExpirations.set(e,s)),s}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}({maxEntries:50,maxAgeSeconds:2592e3})]})),l("https://restaurant-api.dicoding.dev",new v({plugins:[new C({statuses:[200,201]})]})),l((function(e){var t=e.url;return"https://restaurant-api.dicoding.dev"===t.origin&&t.pathname.startsWith("/images/")}),new v({cacheName:"image-cache",plugins:[new C({statuses:[200,201]})]})),l((function(e){return"https://restaurant-api.dicoding.dev"===e.url.origin}),new v({cacheName:"api-cache",plugins:[new C({statuses:[200,201]})]}))}()}();