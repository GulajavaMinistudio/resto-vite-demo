(self.webpackChunkrestoran_vite_dicoding=self.webpackChunkrestoran_vite_dicoding||[]).push([[826],{674:function(t,e,n){"use strict";var r=n(137),s=n(757),o=n.n(s),a=n(29),i=n(658),c=i.Z.DATABASE_NAME,u=i.Z.DATABASE_VERSION,l=i.Z.OBJECT_STORE_NAME,d=(0,a.X3)(c,u,{upgrade:function(t){t.createObjectStore(l,{keyPath:"id"})}}),h={getResto:function(t){return(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",{});case 2:return e.next=4,d;case 4:return e.abrupt("return",e.sent.get(l,t));case 5:case"end":return e.stop()}}),e)})))()},getAllRestos:function(){return(0,r.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d;case 2:return t.abrupt("return",t.sent.getAll(l));case 3:case"end":return t.stop()}}),t)})))()},putResto:function(t){return(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&Object.prototype.hasOwnProperty.call(t,"id")){e.next=2;break}return e.abrupt("return",{});case 2:return e.next=4,d;case 4:return e.abrupt("return",e.sent.put(l,t));case 5:case"end":return e.stop()}}),e)})))()},deleteResto:function(t){return(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d;case 2:return e.abrupt("return",e.sent.delete(l,t));case 3:case"end":return e.stop()}}),e)})))()}};e.Z=h},752:function(t,e,n){"use strict";var r=n(137),s=n(610),o=n(991),a=n(757),i=n.n(a),c=n(285),u=n(658),l=function(){function t(){(0,s.Z)(this,t)}var e,n,a;return(0,o.Z)(t,null,[{key:"getListRestoran",value:(a=(0,r.Z)(i().mark((function t(){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(c.Z.LIST_RESTO);case 3:return e=t.sent,t.next=6,e.json();case 6:return n=t.sent,t.abrupt("return",n.restaurants);case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",Promise.reject(new Error("Gagal mengolah data request ".concat(t.t0))));case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),function(){return a.apply(this,arguments)})},{key:"getDetailRestoran",value:(n=(0,r.Z)(i().mark((function t(){var e,n,r,s=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:0,t.prev=1,t.next=4,fetch(c.Z.DETAIL_RESTO(e));case 4:return n=t.sent,t.next=7,n.json();case 7:return r=t.sent,t.abrupt("return",r.restaurant);case 11:return t.prev=11,t.t0=t.catch(1),t.abrupt("return",Promise.reject(new Error("Gagal mengolah data request ".concat(t.t0))));case 14:case"end":return t.stop()}}),t,null,[[1,11]])}))),function(){return n.apply(this,arguments)})},{key:"sendCommentReview",value:(e=(0,r.Z)(i().mark((function t(e){var n,r,s,o,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,r=e.name,s=e.review,o=fetch(c.Z.SENDREVIEW,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8","X-Auth-Token":u.Z.APIKEY_RESTO},body:JSON.stringify({id:n,name:r,review:s})}).then((function(t){return t.json()})),t.next=4,o;case 4:if(!1!==(a=t.sent).error){t.next=7;break}return t.abrupt("return",Promise.resolve(a));case 7:return t.abrupt("return",Promise.reject(new Error("Gagal mengirim komentar review")));case 8:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})}]),t}();e.Z=l},285:function(t,e,n){"use strict";var r=n(658),s={LIST_RESTO:"".concat(r.Z.BASE_URL,"list"),DETAIL_RESTO:function(t){return"".concat(r.Z.BASE_URL,"detail/").concat(t)},SENDREVIEW:"".concat(r.Z.BASE_URL,"review"),LARGEIMAGE:function(t){return"".concat(r.Z.BASE_IMAGE_URL_LARGE).concat(t)}};e.Z=s},658:function(t,e){"use strict";e.Z={APIKEY_RESTO:"12345",BASE_URL:"https://restaurant-api.dicoding.dev/",BASE_IMAGE_URL_SMALL:"https://restaurant-api.dicoding.dev/images/small/",BASE_IMAGE_URL_MEDIUM:"https://restaurant-api.dicoding.dev/images/medium/",BASE_IMAGE_URL_LARGE:"https://restaurant-api.dicoding.dev/images/large/",DEFAULT_LANGUAGE:"en-us",CACHE_NAME:"RESTO-CATALOG",DATABASE_NAME:"resto-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurant"}},931:function(t,e,n){"use strict";n(666),n(90),n(770);var r=new(n(196).Z)({button:document.querySelector(".toggle-menus"),drawer:document.querySelector(".menu"),content:document.querySelector(".content")});window.addEventListener("hashchange",(function(){r.renderPage()})),window.addEventListener("load",(function(){r.renderPage()})),"serviceWorker"in navigator&&window.addEventListener("load",(function(){try{navigator.serviceWorker.register("/resto-vite-demo/sw-worker.js")}catch(t){console.log(t)}}))},801:function(t,e,n){"use strict";var r=n(542),s=n(777),o=n(553),a={"/":r.Z,"/beranda":r.Z,"/detail/:id":s.Z,"/favorite":o.Z};e.Z=a},472:function(t,e){"use strict";var n={parseActiveUrlWithCombiner:function(){var t=window.location.hash.slice(1).toLowerCase(),e=this.urlSplitter(t);return console.log(t),console.log(e),console.log(this.urlCombiner(e)),this.urlCombiner(e)},parseActiveUrlWithoutCombiner:function(){var t=window.location.hash.slice(1).toLowerCase();return this.urlSplitter(t)},urlSplitter:function(t){var e=t.split("/");return{resource:e[1]||null,id:e[2]||null,verb:e[3]||null}},urlCombiner:function(t){return(t.resource?"/".concat(t.resource):"/")+(t.id?"/:id":"")+(t.verb?"/".concat(t.verb):"")}};e.Z=n},868:function(t,e,n){"use strict";var r=n(137),s=n(757),o=n.n(s),a=n(674),i=n(285),c={init:function(t){var e=this;return(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.favoritedButtonEl=document.querySelector("#liked-button"),e.favoriteButtonEl=document.querySelector("#like-button"),e.showMenuButtonEl=document.querySelector("#lihat-menu"),e.heroImageContainer=document.querySelector(".hero-image"),e.menuSectionEl=document.querySelector("#content-resto"),e.favoritedButtonEl.classList.add("hide-fav-icon"),e.favoriteButtonEl.classList.add("show-fav-icon"),e.restoItem=t,e.setBackgroundCarousel(),n.next=11,e.checkFavoriteDbState();case 11:return n.next=13,e.setListenerButton();case 13:case"end":return n.stop()}}),n)})))()},checkFavoriteDbState:function(){var t=this;return(0,r.Z)(o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.restoItem.id,e.next=3,a.Z.getResto(n);case 3:r=e.sent,!!r?t.showButtonFavorited():t.hideButtonFavorited();case 6:case"end":return e.stop()}}),e)})))()},setListenerButton:function(){var t=this;return(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.favoritedButtonEl.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),t.removeDataResto()})),t.favoriteButtonEl.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),t.saveDataResto()})),t.showMenuButtonEl.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),t.menuSectionEl.scrollIntoView({behavior:"smooth"})}));case 3:case"end":return e.stop()}}),e)})))()},showButtonFavorited:function(){this.favoritedButtonEl.classList.remove("hide-fav-icon"),this.favoritedButtonEl.classList.add("show-fav-icon"),this.favoriteButtonEl.classList.add("hide-fav-icon"),this.favoriteButtonEl.classList.remove("show-fav-icon")},hideButtonFavorited:function(){this.favoritedButtonEl.classList.remove("show-fav-icon"),this.favoritedButtonEl.classList.add("hide-fav-icon"),this.favoriteButtonEl.classList.add("show-fav-icon"),this.favoriteButtonEl.classList.remove("hide-fav-icon")},saveDataResto:function(){var t=this;return(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t.restoItem.id){e.next=6;break}return e.next=4,a.Z.putResto(t.restoItem);case 4:return e.next=6,t.checkFavoriteDbState();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},removeDataResto:function(){var t=this;return(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.deleteResto(t.restoItem.id);case 3:return e.next=5,t.checkFavoriteDbState();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},setBackgroundCarousel:function(){var t=i.Z.LARGEIMAGE(this.restoItem.pictureId);this.heroImageContainer.style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),\n        url('".concat(t,"')")}};e.Z=c},379:function(t,e,n){"use strict";var r=n(137),s=n(757),o=n.n(s),a=n(316),i=n(752),c=n(699),u={init:function(t){this.successSendCallback=t,this.sendCommentButton=document.querySelector("#button-comment"),this.inputUsername=document.querySelector("#input-name"),this.inputCommentText=document.querySelector("#input-comment"),this.setCommentButtonListener(),a.Z.init()},setIdRestoranDetail:function(t){this.idResto=t},setCommentButtonListener:function(){var t=this;this.sendCommentButton.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),t.getDataCommentInput()}))},getDataCommentInput:function(){this.stringUsername=this.inputUsername.value,this.stringComment=this.inputCommentText.value,this.stringUsername&&this.stringComment?this.stringUsername.length>3?this.stringComment.length>10?this.sendComment():a.Z.showToast("Silahkan isi komentar dengan benar"):a.Z.showToast("Silahkan isi nama dengan benar"):a.Z.showToast("Nama dan isi komentar tidak boleh kosong")},sendComment:function(){var t=this;return(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.showProgressBar(!1);case 2:return e.prev=2,e.next=5,t.showProgressBar(!0);case 5:return e.next=7,i.Z.sendCommentReview({id:t.idResto,name:t.stringUsername,review:t.stringComment});case 7:return!1===(n=e.sent).error?setTimeout((function(){a.Z.showToast("Sukses mengirim komentar"),t.successSendCallback(n)}),1e3):a.Z.showToast("Gagal mengirim komentar"),e.next=11,t.showProgressBar(!1);case 11:e.next=19;break;case 13:return e.prev=13,e.t0=e.catch(2),console.log(e.t0),a.Z.showToast("Gagal mengirim komentar"),e.next=19,t.showProgressBar(!1);case 19:case"end":return e.stop()}}),e,null,[[2,13]])})))()},showProgressBar:function(){var t=arguments;return(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===(t.length>0&&void 0!==t[0]&&t[0])?c.Z.showProgressBar():c.Z.hideProgressBar();case 2:case"end":return e.stop()}}),e)})))()}};e.Z=u},189:function(t,e){"use strict";e.Z={init:function(t){var e=this,n=t.button,r=t.drawer,s=t.content;n.addEventListener("click",(function(t){e.toggleDrawer(t,n,r)})),s.addEventListener("click",(function(t){e.closeDrawer(t,n,r)}))},toggleDrawer:function(t,e,n){t.stopPropagation(),e.classList.toggle("active"),n.classList.toggle("active")},closeDrawer:function(t,e,n){t.stopPropagation(),n.classList.remove("open"),e.classList.remove("open")}}},371:function(t,e){"use strict";var n={init:function(){this.liElementMenu=document.querySelectorAll(".menu ul li")},setActiveStatusNavbar:function(t){this.liElementMenu.forEach((function(e,n){var r=e.querySelector("a");n===t?r.classList.add("active"):r.classList.remove("active")}))}};e.Z=n},699:function(t,e){"use strict";var n={init:function(){this.isLoading=!1,this.progressElement=document.querySelector("#progress")},showProgressBar:function(){!1===this.isLoading&&(this.progressElement.classList.remove("hide-progress"),this.progressElement.classList.add("show-progress"),this.isLoading=!0)},hideProgressBar:function(){var t=this;this.progressElement.classList.remove("show-progress"),this.progressElement.classList.add("hide-progress"),setTimeout((function(){t.progressElement.classList.remove("show-progress"),t.progressElement.classList.remove("hide-progress"),t.isLoading=!1}),2800)}};e.Z=n},503:function(t,e){"use strict";e.Z=function(t){return t.reduce((function(t,e,n){var r=t;return r+=0===n?e.name:", ".concat(e.name)}),"")}},316:function(t,e){"use strict";var n={init:function(){this.isToastShow=!1,this.toastElement=document.querySelector("#toasts")},showToast:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";!1===this.isToastShow&&(this.toastElement.innerText=e,this.toastElement.classList.add("show"),this.isToastShow=!0,setTimeout((function(){t.toastElement.classList.remove("show"),t.isToastShow=!1}),3e3))}};e.Z=n}}]);