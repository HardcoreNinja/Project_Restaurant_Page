(()=>{"use strict";var n,e,r,t,o,a,c,i,s,u,d,l,p,f,v={426:(n,e,r)=>{r.d(e,{Z:()=>p});var t=r(81),o=r.n(t),a=r(645),c=r.n(a),i=r(667),s=r.n(i),u=new URL(r(68),r.b),d=c()(o()),l=s()(u);d.push([n.id,"@font-face {\r\n  font-family: 'Lato';\r\n  src: url("+l+") format('woff2');\r\n}\r\n\r\n:root{\r\n  background: orange;\r\n}  \r\n\r\n*{\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Lato';\r\n}\r\n\r\n#content{\r\n  display: grid; \r\n  grid-template-rows: 1fr 7fr;\r\n  grid-template-areas:\r\n  \"nav\"\r\n  \"body\"\r\n  ;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  max-width: 100vw;\r\n  max-height: 100vh;\r\n}\r\n\r\n#nav{\r\n  grid-area: nav;\r\n  background: rgb(36, 41, 46);\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  place-content: flex-end center;\r\n  place-items: flex-end center;\r\n  gap: 2vw;\r\n}\r\n\r\n.navButton{\r\n  background: rgb(214, 0, 107); \r\n  width: 100px; \r\n  height: 50px;\r\n  border-radius: 5px;\r\n  transition: 1.0s;\r\n  border: 1px solid black\r\n}\r\n\r\n.navButton:hover{\r\n  transform: scale(1.2);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n}\r\n\r\n#body{\r\n  grid-area: body;\r\n  background: rgb(47, 54, 61);\r\n}",""]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);t&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],u=t.base?s[0]+t.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=r(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var v=o(f,t);t.byIndex=i,e.splice(i,0,{identifier:l,updater:v,references:1})}c.push(l)}return c}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=r(a[c]);e[i].references--}for(var s=t(n,o),u=0;u<a.length;u++){var d=r(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},68:(n,e,r)=>{n.exports=r.p+"c7400fcad9e48ca9043f.ttf"}},m={};function h(n){var e=m[n];if(void 0!==e)return e.exports;var r=m[n]={id:n,exports:{}};return v[n](r,r.exports,h),r.exports}h.m=v,h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var r in e)h.o(e,r)&&!h.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;h.g.importScripts&&(n=h.g.location+"");var e=h.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=n})(),h.b=document.baseURI||self.location.href,h.nc=void 0,n=h(379),e=h.n(n),r=h(795),t=h.n(r),o=h(569),a=h.n(o),c=h(565),i=h.n(c),s=h(216),u=h.n(s),d=h(589),l=h.n(d),p=h(426),(f={}).styleTagTransform=l(),f.setAttributes=i(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=u(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,function(){const n=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("id","nav");const r=document.createElement("div");r.setAttribute("id","body"),r.innerHTML="body",n.append(e,r)}(),function(){const n=document.querySelector("#nav");let e=document.createElement("button");e.innerHTML="Home",e.classList.add("navButton");let r=document.createElement("button");r.innerHTML="Menu",r.classList.add("navButton");let t=document.createElement("button");t.innerHTML="Contact",t.classList.add("navButton"),n.append(e,r,t)}()})();