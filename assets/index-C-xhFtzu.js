var Fr=Object.defineProperty;var Br=(n,e,t)=>e in n?Fr(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var E=(n,e,t)=>Br(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();class $r{goHome(e){window.location.hash=e?`#/home?room=${encodeURIComponent(e)}`:"#/home"}goLobby(e){window.location.hash=`#/lobby?room=${encodeURIComponent(e)}`}goGame(e){window.location.hash=`#/game?room=${encodeURIComponent(e)}`}goResult(e){window.location.hash=`#/result?room=${encodeURIComponent(e)}`}getCurrentRoute(){const e=window.location.hash||"#/home",[t,s=""]=e.replace("#","").split("?"),r=new URLSearchParams(s).get("room")??void 0;return t==="/lobby"?{page:"lobby",roomCode:r}:t==="/game"?{page:"game",roomCode:r}:t==="/result"?{page:"result",roomCode:r}:{page:"home",roomCode:r}}getInviteLink(e){const t=new URL(window.location.href);return t.hash=`#/home?room=${encodeURIComponent(e)}`,t.toString()}}const Vr=()=>{};var _s={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(n,e){if(!n)throw Ae(e)},Ae=function(n){return new Error("Firebase Database ("+li.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Wr=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},xn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(t[u],t[h],t[d],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ci(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Wr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Ur;const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ur extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hi=function(n){const e=ci(n);return xn.encodeByteArray(e,!0)},vt=function(n){return hi(n).replace(/\./g,"")},un=function(n){try{return xn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n){return di(void 0,n)}function di(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!zr(t)||(n[t]=di(n[t],e[t]));return n}function zr(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=()=>jr().__FIREBASE_DEFAULTS__,qr=()=>{if(typeof process>"u"||typeof _s>"u")return;const n=_s.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Yr=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&un(n[1]);return e&&JSON.parse(e)},ui=()=>{try{return Vr()||Gr()||qr()||Yr()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Kr=n=>{var e,t;return(t=(e=ui())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Qr=n=>{const e=Kr(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},fi=()=>{var n;return(n=ui())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Xr(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[vt(JSON.stringify(t)),vt(JSON.stringify(o)),""].join(".")}const We={};function Zr(){const n={prod:[],emulator:[]};for(const e of Object.keys(We))We[e]?n.emulator.push(e):n.prod.push(e);return n}function eo(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ms=!1;function to(n,e){if(typeof window>"u"||typeof document>"u"||!On(window.location.host)||We[n]===e||We[n]||ms)return;We[n]=e;function t(d){return`__firebase__banner__${d}`}const s="__firebase__banner",r=Zr().prod.length>0;function o(){const d=document.getElementById(s);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function l(d,p){d.setAttribute("width","24"),d.setAttribute("id",p),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function c(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{ms=!0,o()},d}function u(d,p){d.setAttribute("id",p),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function h(){const d=eo(s),p=t("text"),_=document.getElementById(p)||document.createElement("span"),g=t("learnmore"),N=document.getElementById(g)||document.createElement("a"),$=t("preprendIcon"),j=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const le=d.element;a(le),u(N,g);const Jt=c();l(j,$),le.append(j,_,N,Jt),document.body.appendChild(le)}r?(_.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(no())}function so(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function io(){return li.NODE_ADMIN===!0}function ro(){try{return typeof indexedDB=="object"}catch{return!1}}function oo(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="FirebaseError";class rt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ao,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?lo(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rt(i,a,s)}}function lo(n,e){return n.replace(co,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const co=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n){return JSON.parse(n)}function P(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=qe(un(r[0])||""),t=qe(un(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},ho=function(n){const e=mi(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},uo=function(n){const e=mi(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ie(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function gs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function bt(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Ct(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(ys(r)&&ys(o)){if(!Ct(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function ys(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Bt(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,f(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},$t=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n){return n&&n._delegate?n._delegate:n}class Ye{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new it;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yo(e))try{this.getOrInitializeService({instanceIdentifier:ce})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ce){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ce){return this.instances.has(e)}getOptions(e=ce){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:go(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ce){return this.component?this.component.multipleInstances?e:ce:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function go(n){return n===ce?void 0:n}function yo(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(S||(S={}));const bo={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Co=S.INFO,wo={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},Eo=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=wo[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gi{constructor(e){this.name=e,this._logLevel=Co,this._logHandler=Eo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const Io=(n,e)=>e.some(t=>n instanceof t);let vs,bs;function So(){return vs||(vs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function To(){return bs||(bs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yi=new WeakMap,fn=new WeakMap,vi=new WeakMap,Zt=new WeakMap,Mn=new WeakMap;function ko(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(te(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&yi.set(t,n)}).catch(()=>{}),Mn.set(e,n),e}function Ro(n){if(fn.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});fn.set(n,e)}let pn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return fn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vi.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return te(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function No(n){pn=n(pn)}function Ao(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(en(this),e,...t);return vi.set(s,e.sort?e.sort():[e]),te(s)}:To().includes(n)?function(...e){return n.apply(en(this),e),te(yi.get(this))}:function(...e){return te(n.apply(en(this),e))}}function Po(n){return typeof n=="function"?Ao(n):(n instanceof IDBTransaction&&Ro(n),Io(n,So())?new Proxy(n,pn):n)}function te(n){if(n instanceof IDBRequest)return ko(n);if(Zt.has(n))return Zt.get(n);const e=Po(n);return e!==n&&(Zt.set(n,e),Mn.set(e,n)),e}const en=n=>Mn.get(n);function Do(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=te(o);return s&&o.addEventListener("upgradeneeded",l=>{s(te(o.result),l.oldVersion,l.newVersion,te(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const xo=["get","getKey","getAll","getAllKeys","count"],Oo=["put","add","delete","clear"],tn=new Map;function Cs(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(tn.get(e))return tn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Oo.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||xo.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return tn.set(e,r),r}No(n=>({...n,get:(e,t,s)=>Cs(e,t)||n.get(e,t,s),has:(e,t)=>!!Cs(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Lo(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Lo(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _n="@firebase/app",ws="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=new gi("@firebase/app"),Fo="@firebase/app-compat",Bo="@firebase/analytics-compat",$o="@firebase/analytics",Vo="@firebase/app-check-compat",Wo="@firebase/app-check",Uo="@firebase/auth",Ho="@firebase/auth-compat",zo="@firebase/database",jo="@firebase/data-connect",Go="@firebase/database-compat",qo="@firebase/functions",Yo="@firebase/functions-compat",Ko="@firebase/installations",Qo="@firebase/installations-compat",Xo="@firebase/messaging",Jo="@firebase/messaging-compat",Zo="@firebase/performance",ea="@firebase/performance-compat",ta="@firebase/remote-config",na="@firebase/remote-config-compat",sa="@firebase/storage",ia="@firebase/storage-compat",ra="@firebase/firestore",oa="@firebase/ai",aa="@firebase/firestore-compat",la="firebase",ca="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="[DEFAULT]",ha={[_n]:"fire-core",[Fo]:"fire-core-compat",[$o]:"fire-analytics",[Bo]:"fire-analytics-compat",[Wo]:"fire-app-check",[Vo]:"fire-app-check-compat",[Uo]:"fire-auth",[Ho]:"fire-auth-compat",[zo]:"fire-rtdb",[jo]:"fire-data-connect",[Go]:"fire-rtdb-compat",[qo]:"fire-fn",[Yo]:"fire-fn-compat",[Ko]:"fire-iid",[Qo]:"fire-iid-compat",[Xo]:"fire-fcm",[Jo]:"fire-fcm-compat",[Zo]:"fire-perf",[ea]:"fire-perf-compat",[ta]:"fire-rc",[na]:"fire-rc-compat",[sa]:"fire-gcs",[ia]:"fire-gcs-compat",[ra]:"fire-fst",[aa]:"fire-fst-compat",[oa]:"fire-vertex","fire-js":"fire-js",[la]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new Map,da=new Map,gn=new Map;function Es(n,e){try{n.container.addComponent(e)}catch(t){Q.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Et(n){const e=n.name;if(gn.has(e))return Q.debug(`There were multiple attempts to register component ${e}.`),!1;gn.set(e,n);for(const t of wt.values())Es(t,n);for(const t of da.values())Es(t,n);return!0}function ua(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function fa(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ne=new _i("app","Firebase",pa);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ne.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=ca;function bi(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:mn,automaticDataCollectionEnabled:!0},e),i=s.name;if(typeof i!="string"||!i)throw ne.create("bad-app-name",{appName:String(i)});if(t||(t=fi()),!t)throw ne.create("no-options");const r=wt.get(i);if(r){if(Ct(t,r.options)&&Ct(s,r.config))return r;throw ne.create("duplicate-app",{appName:i})}const o=new vo(i);for(const l of gn.values())o.addComponent(l);const a=new _a(t,s,o);return wt.set(i,a),a}function ga(n=mn){const e=wt.get(n);if(!e&&n===mn&&fi())return bi();if(!e)throw ne.create("no-app",{appName:n});return e}function Ce(n,e,t){var s;let i=(s=ha[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Q.warn(a.join(" "));return}Et(new Ye(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="firebase-heartbeat-database",va=1,Ke="firebase-heartbeat-store";let nn=null;function Ci(){return nn||(nn=Do(ya,va,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ke)}catch(t){console.warn(t)}}}}).catch(n=>{throw ne.create("idb-open",{originalErrorMessage:n.message})})),nn}async function ba(n){try{const t=(await Ci()).transaction(Ke),s=await t.objectStore(Ke).get(wi(n));return await t.done,s}catch(e){if(e instanceof rt)Q.warn(e.message);else{const t=ne.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Q.warn(t.message)}}}async function Is(n,e){try{const s=(await Ci()).transaction(Ke,"readwrite");await s.objectStore(Ke).put(e,wi(n)),await s.done}catch(t){if(t instanceof rt)Q.warn(t.message);else{const s=ne.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Q.warn(s.message)}}}function wi(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=1024,wa=30;class Ea{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Sa(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ss();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>wa){const o=Ta(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Q.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ss(),{heartbeatsToSend:s,unsentEntries:i}=Ia(this._heartbeatsCache.heartbeats),r=vt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Q.warn(t),""}}}function Ss(){return new Date().toISOString().substring(0,10)}function Ia(n,e=Ca){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ts(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ts(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Sa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ro()?oo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ba(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Is(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Is(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ts(n){return vt(JSON.stringify({version:2,heartbeats:n})).length}function Ta(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(n){Et(new Ye("platform-logger",e=>new Mo(e),"PRIVATE")),Et(new Ye("heartbeat",e=>new Ea(e),"PRIVATE")),Ce(_n,ws,n),Ce(_n,ws,"esm2017"),Ce("fire-js","")}ka("");var Ra="firebase",Na="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ce(Ra,Na,"app");var ks={};const Rs="@firebase/database",Ns="1.0.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei="";function Aa(n){Ei=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),P(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:qe(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return G(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Pa(e)}}catch{}return new Da},de=Ii("localStorage"),xa=Ii("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new gi("@firebase/database"),Oa=(function(){let n=1;return function(){return n++}})(),Si=function(n){const e=_o(n),t=new po;t.update(e);const s=t.digest();return xn.encodeByteArray(s)},ot=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ot.apply(null,s):typeof s=="object"?e+=P(s):e+=s,e+=" "}return e};let Ue=null,As=!0;const Ma=function(n,e){f(!0,"Can't turn on custom loggers persistently."),we.logLevel=S.VERBOSE,Ue=we.log.bind(we)},O=function(...n){if(As===!0&&(As=!1,Ue===null&&xa.get("logging_enabled")===!0&&Ma()),Ue){const e=ot.apply(null,n);Ue(e)}},at=function(n){return function(...e){O(n,...e)}},yn=function(...n){const e="FIREBASE INTERNAL ERROR: "+ot(...n);we.error(e)},X=function(...n){const e=`FIREBASE FATAL ERROR: ${ot(...n)}`;throw we.error(e),new Error(e)},F=function(...n){const e="FIREBASE WARNING: "+ot(...n);we.warn(e)},La=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&F("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ln=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Fa=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Se="[MIN_NAME]",fe="[MAX_NAME]",me=function(n,e){if(n===e)return 0;if(n===Se||e===fe)return-1;if(e===Se||n===fe)return 1;{const t=Ps(n),s=Ps(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Ba=function(n,e){return n===e?0:n<e?-1:1},Me=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+P(e))},Fn=function(n){if(typeof n!="object"||n===null)return P(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=P(e[s]),t+=":",t+=Fn(n[e[s]]);return t+="}",t},Ti=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function M(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ki=function(n){f(!Ln(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},$a=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Va=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Wa(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Ua=new RegExp("^-?(0*)\\d{1,10}$"),Ha=-2147483648,za=2147483647,Ps=function(n){if(Ua.test(n)){const e=Number(n);if(e>=Ha&&e<=za)return e}return null},De=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw F("Exception was thrown by user callback.",t),e},Math.floor(0))}},ja=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},He=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,fa(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){F(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(O("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',F(e)}}class mt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}mt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="5",Ri="v",Ni="s",Ai="r",Pi="f",Di=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xi="ls",Oi="p",vn="ac",Mi="websocket",Li="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=de.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&de.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ya(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Bi(n,e,t){f(typeof e=="string","typeof type must == string"),f(typeof t=="object","typeof params must == object");let s;if(e===Mi)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Li)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ya(n)&&(t.ns=n.namespace);const i=[];return M(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.counters_={}}incrementCounter(e,t=1){G(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Hr(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn={},rn={};function $n(n){const e=n.toString();return sn[e]||(sn[e]=new Ka),sn[e]}function Qa(n,e){const t=n.toString();return rn[t]||(rn[t]=e()),rn[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&De(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="start",Ja="close",Za="pLPCommand",el="pRTLPCB",$i="id",Vi="pw",Wi="ser",tl="cb",nl="seg",sl="ts",il="d",rl="dframe",Ui=1870,Hi=30,ol=Ui-Hi,al=25e3,ll=3e4;class be{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=at(e),this.stats_=$n(t),this.urlFn=l=>(this.appCheckToken&&(l[vn]=this.appCheckToken),Bi(t,Li,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Xa(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ll)),Fa(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vn((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ds)this.id=a,this.password=l;else if(o===Ja)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ds]="t",s[Wi]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[tl]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ri]=Bn,this.transportSessionId&&(s[Ni]=this.transportSessionId),this.lastSessionId&&(s[xi]=this.lastSessionId),this.applicationId&&(s[Oi]=this.applicationId),this.appCheckToken&&(s[vn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Di.test(location.hostname)&&(s[Ai]=Pi);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){be.forceAllow_=!0}static forceDisallow(){be.forceDisallow_=!0}static isAvailable(){return be.forceAllow_?!0:!be.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$a()&&!Va()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=P(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=hi(t),i=Ti(s,ol);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[rl]="t",s[$i]=e,s[Vi]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=P(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Vn{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Oa(),window[Za+this.uniqueCallbackIdentifier]=e,window[el+this.uniqueCallbackIdentifier]=t,this.myIFrame=Vn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){O("frame writing exception"),a.stack&&O(a.stack),O(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||O("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$i]=this.myID,e[Vi]=this.myPW,e[Wi]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Hi+s.length<=Ui;){const o=this.pendingSegs.shift();s=s+"&"+nl+i+"="+o.seg+"&"+sl+i+"="+o.ts+"&"+il+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(al)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{O("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=16384,hl=45e3;let It=null;typeof MozWebSocket<"u"?It=MozWebSocket:typeof WebSocket<"u"&&(It=WebSocket);class U{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=at(this.connId),this.stats_=$n(t),this.connURL=U.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Ri]=Bn,typeof location<"u"&&location.hostname&&Di.test(location.hostname)&&(o[Ai]=Pi),t&&(o[Ni]=t),s&&(o[xi]=s),i&&(o[vn]=i),r&&(o[Oi]=r),Bi(e,Mi,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,de.set("previous_websocket_failure",!0);try{let s;io(),this.mySock=new It(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){U.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&It!==null&&!U.forceDisallow_}static previouslyFailed(){return de.isInMemoryStorage||de.get("previous_websocket_failure")===!0}markConnectionHealthy(){de.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=qe(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=P(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ti(t,cl);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(hl))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}U.responsesRequiredToBeHealthy=2;U.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{static get ALL_TRANSPORTS(){return[be,U]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=U&&U.isAvailable();let s=t&&!U.previouslyFailed();if(e.webSocketOnly&&(t||F("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[U];else{const i=this.transports_=[];for(const r of Qe.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Qe.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qe.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=6e4,ul=5e3,fl=10*1024,pl=100*1024,on="t",xs="d",_l="s",Os="r",ml="e",Ms="o",Ls="a",Fs="n",Bs="p",gl="h";class yl{constructor(e,t,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=at("c:"+this.id+":"),this.transportManager_=new Qe(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=He(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pl?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fl?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(on in e){const t=e[on];t===Ls?this.upgradeIfSecondaryHealthy_():t===Os?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ms&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Me("t",e),s=Me("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bs,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ls,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fs,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Me("t",e),s=Me("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Me(on,e);if(xs in e){const s=e[xs];if(t===gl){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Fs){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===_l?this.onConnectionShutdown_(s):t===Os?this.onReset_(s):t===ml?yn("Server Error: "+s):t===Ms?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Bn!==s&&F("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),He(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dl))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):He(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ul))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bs,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(de.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends ji{static getInstance(){return new St}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!pi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=32,Vs=768;class w{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function C(){return new w("")}function y(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function re(n){return n.pieces_.length-n.pieceNum_}function T(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new w(n.pieces_,e)}function Wn(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function vl(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Xe(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Gi(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new w(e,0)}function k(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof w)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new w(t,0)}function b(n){return n.pieceNum_>=n.pieces_.length}function L(n,e){const t=y(n),s=y(e);if(t===null)return e;if(t===s)return L(T(n),T(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function bl(n,e){const t=Xe(n,0),s=Xe(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=me(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function Un(n,e){if(re(n)!==re(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function V(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(re(n)>re(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Cl{constructor(e,t){this.errorPrefix_=t,this.parts_=Xe(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=$t(this.parts_[s]);qi(this)}}function wl(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=$t(e),qi(n)}function El(n){const e=n.parts_.pop();n.byteLength_-=$t(e),n.parts_.length>0&&(n.byteLength_-=1)}function qi(n){if(n.byteLength_>Vs)throw new Error(n.errorPrefix_+"has a key path longer than "+Vs+" bytes ("+n.byteLength_+").");if(n.parts_.length>$s)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$s+") or object contains a cycle "+he(n))}function he(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ji{static getInstance(){return new Hn}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=1e3,Il=300*1e3,Ws=30*1e3,Sl=1.3,Tl=3e4,kl="server_kill",Us=3;class K extends zi{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=K.nextPersistentConnectionId_++,this.log_=at("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Le,this.maxReconnectDelay_=Il,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&St.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(P(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new it,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;K.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&G(e,"w")){const s=Ie(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();F(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uo(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ws)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ho(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+P(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):yn("Unrecognized action received from server: "+P(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Le,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Le,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Tl&&(this.reconnectDelay_=Le),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Sl)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+K.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?O("getToken() completed but was canceled"):(O("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new yl(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{F(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(kl)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&F(h),l())}}}interrupt(e){O("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){O("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gs(this.interruptReasons_)&&(this.reconnectDelay_=Le,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Fn(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new w(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){O("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Us&&(this.reconnectDelay_=Ws,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){O("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Us&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ei.replace(/\./g,"-")]=1,pi()?e["framework.cordova"]=1:so()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=St.getInstance().currentlyOnline();return gs(this.interruptReasons_)&&e}}K.nextPersistentConnectionId_=0;K.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new v(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new v(Se,e),i=new v(Se,t);return this.compare(s,i)!==0}minPost(){return v.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ut;class Yi extends Vt{static get __EMPTY_NODE(){return ut}static set __EMPTY_NODE(e){ut=e}compare(e,t){return me(e.name,t.name)}isDefinedOn(e){throw Ae("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return v.MIN}maxPost(){return new v(fe,ut)}makePost(e,t){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new v(e,ut)}toString(){return".key"}}const Ee=new Yi;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class x{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??x.RED,this.left=i??B.EMPTY_NODE,this.right=r??B.EMPTY_NODE}copy(e,t,s,i,r){return new x(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return B.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return B.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,x.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,x.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}x.RED=!0;x.BLACK=!1;class Rl{copy(e,t,s,i,r){return this}insert(e,t,s){return new x(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class B{constructor(e,t=B.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new B(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,x.BLACK,null,null))}remove(e){return new B(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,x.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ft(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ft(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ft(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ft(this.root_,null,this.comparator_,!0,e)}}B.EMPTY_NODE=new Rl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(n,e){return me(n.name,e.name)}function zn(n,e){return me(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn;function Al(n){bn=n}const Ki=function(n){return typeof n=="number"?"number:"+ki(n):"string:"+n},Qi=function(n){if(n.isLeafNode()){const e=n.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&G(e,".sv"),"Priority must be a string or number.")}else f(n===bn||n.isEmpty(),"priority of unexpected type.");f(n===bn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs;class D{static set __childrenNodeConstructor(e){Hs=e}static get __childrenNodeConstructor(){return Hs}constructor(e,t=D.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Qi(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new D(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:D.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return b(e)?this:y(e)===".priority"?this.priorityNode_:D.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:D.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=y(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(f(s!==".priority"||re(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,D.__childrenNodeConstructor.EMPTY_NODE.updateChild(T(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ki(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ki(this.value_):e+=this.value_,this.lazyHash_=Si(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===D.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof D.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=D.VALUE_TYPE_ORDER.indexOf(t),r=D.VALUE_TYPE_ORDER.indexOf(s);return f(i>=0,"Unknown leaf type: "+t),f(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}D.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi,Ji;function Pl(n){Xi=n}function Dl(n){Ji=n}class xl extends Vt{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?me(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return v.MIN}maxPost(){return new v(fe,new D("[PRIORITY-POST]",Ji))}makePost(e,t){const s=Xi(e);return new v(t,new D("[PRIORITY-POST]",s))}toString(){return".priority"}}const R=new xl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=Math.log(2);class Ml{constructor(e){const t=r=>parseInt(Math.log(r)/Ol,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Tt=function(n,e,t,s){n.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new x(d,h.node,x.BLACK,null,null);{const p=parseInt(u/2,10)+l,_=i(l,p),g=i(p+1,c);return h=n[p],d=t?t(h):h,new x(d,h.node,x.BLACK,_,g)}},r=function(l){let c=null,u=null,h=n.length;const d=function(_,g){const N=h-_,$=h;h-=_;const j=i(N+1,$),le=n[N],Jt=t?t(le):le;p(new x(Jt,le.node,g,null,j))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const g=l.nextBitIsOne(),N=Math.pow(2,l.count-(_+1));g?d(N,x.BLACK):(d(N,x.BLACK),d(N,x.RED))}return u},o=new Ml(n.length),a=r(o);return new B(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let an;const ye={};class Y{static get Default(){return f(ye&&R,"ChildrenNode.ts has not been loaded"),an=an||new Y({".priority":ye},{".priority":R}),an}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ie(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof B?t:null}hasIndex(e){return G(this.indexSet_,e.toString())}addIndex(e,t){f(e!==Ee,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(v.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Tt(s,e.getCompare()):a=ye;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Y(u,c)}addToIndexes(e,t){const s=bt(this.indexes_,(i,r)=>{const o=Ie(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),i===ye)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(v.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Tt(a,o.getCompare())}else return ye;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new v(e.name,a))),l.insert(e,e.node)}});return new Y(s,this.indexSet_)}removeFromIndexes(e,t){const s=bt(this.indexes_,i=>{if(i===ye)return i;{const r=t.get(e.name);return r?i.remove(new v(e.name,r)):i}});return new Y(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fe;class m{static get EMPTY_NODE(){return Fe||(Fe=new m(new B(zn),null,Y.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Qi(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fe}updatePriority(e){return this.children_.isEmpty()?this:new m(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Fe:t}}getChild(e){const t=y(e);return t===null?this:this.getImmediateChild(t).getChild(T(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(f(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new v(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Fe:this.priorityNode_;return new m(i,o,r)}}updateChild(e,t){const s=y(e);if(s===null)return t;{f(y(e)!==".priority"||re(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(T(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(R,(o,a)=>{t[o]=a.val(e),s++,r&&m.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ki(this.getPriority().val())+":"),this.forEachChild(R,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Si(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new v(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new v(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new v(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,v.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,v.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===lt?-1:0}withIndex(e){if(e===Ee||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new m(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ee||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(R),i=t.getIterator(R);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ee?null:this.indexMap_.get(e.toString())}}m.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ll extends m{constructor(){super(new B(zn),m.EMPTY_NODE,Y.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return m.EMPTY_NODE}isEmpty(){return!1}}const lt=new Ll;Object.defineProperties(v,{MIN:{value:new v(Se,m.EMPTY_NODE)},MAX:{value:new v(fe,lt)}});Yi.__EMPTY_NODE=m.EMPTY_NODE;D.__childrenNodeConstructor=m;Al(lt);Dl(lt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=!0;function A(n,e=null){if(n===null)return m.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new D(t,A(e))}if(!(n instanceof Array)&&Fl){const t=[];let s=!1;if(M(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=A(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new v(o,l)))}}),t.length===0)return m.EMPTY_NODE;const r=Tt(t,Nl,o=>o.name,zn);if(s){const o=Tt(t,R.getCompare());return new m(r,A(e),new Y({".priority":o},{".priority":R}))}else return new m(r,A(e),Y.Default)}else{let t=m.EMPTY_NODE;return M(n,(s,i)=>{if(G(n,s)&&s.substring(0,1)!=="."){const r=A(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(A(e))}}Pl(A);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends Vt{constructor(e){super(),this.indexPath_=e,f(!b(e)&&y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?me(e.name,t.name):r}makePost(e,t){const s=A(e),i=m.EMPTY_NODE.updateChild(this.indexPath_,s);return new v(t,i)}maxPost(){const e=m.EMPTY_NODE.updateChild(this.indexPath_,lt);return new v(fe,e)}toString(){return Xe(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l extends Vt{compare(e,t){const s=e.node.compareTo(t.node);return s===0?me(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return v.MIN}maxPost(){return v.MAX}makePost(e,t){const s=A(e);return new v(t,s)}toString(){return".value"}}const Vl=new $l;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n){return{type:"value",snapshotNode:n}}function Te(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Je(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ze(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Wl(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Je(t,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Te(t,s)):o.trackChildChange(Ze(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(R,(i,r)=>{t.hasChild(i)||s.trackChildChange(Je(i,r))}),t.isLeafNode()||t.forEachChild(R,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ze(i,r,o))}else s.trackChildChange(Te(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?m.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.indexedFilter_=new jn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=et.getStartPost_(e),this.endPost_=et.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new v(t,s))||(s=m.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=m.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(m.EMPTY_NODE);const r=this;return t.forEachChild(R,(o,a)=>{r.matches(new v(o,a))||(i=i.updateImmediateChild(o,m.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new et(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new v(t,s))||(s=m.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=m.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=m.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(m.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,m.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;f(a.numChildren()===this.limit_,"");const l=new v(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Ze(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Je(t,h));const g=a.updateImmediateChild(t,m.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Te(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Je(c.name,c.node)),r.trackChildChange(Te(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,m.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=R}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Se}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===R}copy(){const e=new Gn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hl(n){return n.loadsAllData()?new jn(n.getIndex()):n.hasLimit()?new Ul(n):new et(n)}function zs(n){const e={};if(n.isDefault())return e;let t;if(n.index_===R?t="$priority":n.index_===Vl?t="$value":n.index_===Ee?t="$key":(f(n.index_ instanceof Bl,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=P(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=P(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+P(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=P(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+P(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function js(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==R&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends zi{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=at("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=kt.getListenId_(e,s),a={};this.listens_[o]=a;const l=zs(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ie(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=kt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=zs(e._queryParams),s=e._path.toString(),i=new it;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fo(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=qe(a.responseText)}catch{F("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&F("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.rootNode_=m.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return{value:null,children:new Map}}function er(n,e,t){if(b(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=y(e);n.children.has(s)||n.children.set(s,Rt());const i=n.children.get(s);e=T(e),er(i,e,t)}}function Cn(n,e,t){n.value!==null?t(e,n.value):jl(n,(s,i)=>{const r=new w(e.toString()+"/"+s);Cn(i,r,t)})}function jl(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&M(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=10*1e3,ql=30*1e3,Yl=300*1e3;class Kl{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Gl(e);const s=Gs+(ql-Gs)*Math.random();He(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;M(e,(i,r)=>{r>0&&G(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),He(this.reportStats_.bind(this),Math.floor(Math.random()*2*Yl))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(H||(H={}));function qn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Kn(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=H.ACK_USER_WRITE,this.source=qn()}operationForChild(e){if(b(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new w(e));return new Nt(C(),t,this.revert)}}else return f(y(this.path)===e,"operationForChild called for unrelated child."),new Nt(T(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.source=e,this.path=t,this.type=H.LISTEN_COMPLETE}operationForChild(e){return b(this.path)?new tt(this.source,C()):new tt(this.source,T(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=H.OVERWRITE}operationForChild(e){return b(this.path)?new pe(this.source,C(),this.snap.getImmediateChild(e)):new pe(this.source,T(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=H.MERGE}operationForChild(e){if(b(this.path)){const t=this.children.subtree(new w(e));return t.isEmpty()?null:t.value?new pe(this.source,C(),t.value):new ke(this.source,C(),t)}else return f(y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ke(this.source,T(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(b(e))return this.isFullyInitialized()&&!this.filtered_;const t=y(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Xl(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Wl(o.childName,o.snapshotNode))}),Be(n,i,"child_removed",e,s,t),Be(n,i,"child_added",e,s,t),Be(n,i,"child_moved",r,s,t),Be(n,i,"child_changed",e,s,t),Be(n,i,"value",e,s,t),i}function Be(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Zl(n,a,l)),o.forEach(a=>{const l=Jl(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Jl(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Zl(n,e,t){if(e.childName==null||t.childName==null)throw Ae("Should only compare child_ events.");const s=new v(e.childName,e.snapshotNode),i=new v(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(n,e){return{eventCache:n,serverCache:e}}function ze(n,e,t,s){return Wt(new oe(e,t,s),n.serverCache)}function tr(n,e,t,s){return Wt(n.eventCache,new oe(e,t,s))}function At(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function _e(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln;const ec=()=>(ln||(ln=new B(Ba)),ln);class I{static fromObject(e){let t=new I(null);return M(e,(s,i)=>{t=t.set(new w(s),i)}),t}constructor(e,t=ec()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:C(),value:this.value};if(b(e))return null;{const s=y(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(T(e),t);return r!=null?{path:k(new w(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(b(e))return this;{const t=y(e),s=this.children.get(t);return s!==null?s.subtree(T(e)):new I(null)}}set(e,t){if(b(e))return new I(t,this.children);{const s=y(e),r=(this.children.get(s)||new I(null)).set(T(e),t),o=this.children.insert(s,r);return new I(this.value,o)}}remove(e){if(b(e))return this.children.isEmpty()?new I(null):new I(null,this.children);{const t=y(e),s=this.children.get(t);if(s){const i=s.remove(T(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new I(null):new I(this.value,r)}else return this}}get(e){if(b(e))return this.value;{const t=y(e),s=this.children.get(t);return s?s.get(T(e)):null}}setTree(e,t){if(b(e))return t;{const s=y(e),r=(this.children.get(s)||new I(null)).setTree(T(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new I(this.value,o)}}fold(e){return this.fold_(C(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(k(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,C(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(b(e))return null;{const r=y(e),o=this.children.get(r);return o?o.findOnPath_(T(e),k(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,C(),t)}foreachOnPath_(e,t,s){if(b(e))return this;{this.value&&s(t,this.value);const i=y(e),r=this.children.get(i);return r?r.foreachOnPath_(T(e),k(t,i),s):new I(null)}}foreach(e){this.foreach_(C(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(k(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.writeTree_=e}static empty(){return new z(new I(null))}}function je(n,e,t){if(b(e))return new z(new I(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=L(i,e);return r=r.updateChild(o,t),new z(n.writeTree_.set(i,r))}else{const i=new I(t),r=n.writeTree_.setTree(e,i);return new z(r)}}}function wn(n,e,t){let s=n;return M(t,(i,r)=>{s=je(s,k(e,i),r)}),s}function qs(n,e){if(b(e))return z.empty();{const t=n.writeTree_.setTree(e,new I(null));return new z(t)}}function En(n,e){return ge(n,e)!=null}function ge(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(L(t.path,e)):null}function Ys(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(R,(s,i)=>{e.push(new v(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new v(s,i.value))}),e}function se(n,e){if(b(e))return n;{const t=ge(n,e);return t!=null?new z(new I(t)):new z(n.writeTree_.subtree(e))}}function In(n){return n.writeTree_.isEmpty()}function Re(n,e){return nr(C(),n.writeTree_,e)}function nr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=nr(k(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(k(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n,e){return or(e,n)}function tc(n,e,t,s,i){f(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=je(n.visibleWrites,e,t)),n.lastWriteId=s}function nc(n,e,t,s){f(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=wn(n.visibleWrites,e,t),n.lastWriteId=s}function sc(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function ic(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);f(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&rc(a,s.path)?i=!1:V(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return oc(n),!0;if(s.snap)n.visibleWrites=qs(n.visibleWrites,s.path);else{const a=s.children;M(a,l=>{n.visibleWrites=qs(n.visibleWrites,k(s.path,l))})}return!0}else return!1}function rc(n,e){if(n.snap)return V(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&V(k(n.path,t),e))return!0;return!1}function oc(n){n.visibleWrites=sr(n.allWrites,ac,C()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function ac(n){return n.visible}function sr(n,e,t){let s=z.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)V(t,o)?(a=L(t,o),s=je(s,a,r.snap)):V(o,t)&&(a=L(o,t),s=je(s,C(),r.snap.getChild(a)));else if(r.children){if(V(t,o))a=L(t,o),s=wn(s,a,r.children);else if(V(o,t))if(a=L(o,t),b(a))s=wn(s,C(),r.children);else{const l=Ie(r.children,y(a));if(l){const c=l.getChild(T(a));s=je(s,C(),c)}}}else throw Ae("WriteRecord should have .snap or .children")}}return s}function ir(n,e,t,s,i){if(!s&&!i){const r=ge(n.visibleWrites,e);if(r!=null)return r;{const o=se(n.visibleWrites,e);if(In(o))return t;if(t==null&&!En(o,C()))return null;{const a=t||m.EMPTY_NODE;return Re(o,a)}}}else{const r=se(n.visibleWrites,e);if(!i&&In(r))return t;if(!i&&t==null&&!En(r,C()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(V(c.path,e)||V(e,c.path))},a=sr(n.allWrites,o,e),l=t||m.EMPTY_NODE;return Re(a,l)}}}function lc(n,e,t){let s=m.EMPTY_NODE;const i=ge(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(R,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=se(n.visibleWrites,e);return t.forEachChild(R,(o,a)=>{const l=Re(se(r,new w(o)),a);s=s.updateImmediateChild(o,l)}),Ys(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=se(n.visibleWrites,e);return Ys(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function cc(n,e,t,s,i){f(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=k(e,t);if(En(n.visibleWrites,r))return null;{const o=se(n.visibleWrites,r);return In(o)?i.getChild(t):Re(o,i.getChild(t))}}function hc(n,e,t,s){const i=k(e,t),r=ge(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=se(n.visibleWrites,i);return Re(o,s.getNode().getImmediateChild(t))}else return null}function dc(n,e){return ge(n.visibleWrites,e)}function uc(n,e,t,s,i,r,o){let a;const l=se(n.visibleWrites,e),c=ge(l,C());if(c!=null)a=c;else if(t!=null)a=Re(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function fc(){return{visibleWrites:z.empty(),allWrites:[],lastWriteId:-1}}function Pt(n,e,t,s){return ir(n.writeTree,n.treePath,e,t,s)}function Qn(n,e){return lc(n.writeTree,n.treePath,e)}function Ks(n,e,t,s){return cc(n.writeTree,n.treePath,e,t,s)}function Dt(n,e){return dc(n.writeTree,k(n.treePath,e))}function pc(n,e,t,s,i,r){return uc(n.writeTree,n.treePath,e,t,s,i,r)}function Xn(n,e,t){return hc(n.writeTree,n.treePath,e,t)}function rr(n,e){return or(k(n.treePath,e),n.writeTree)}function or(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;f(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),f(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Ze(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Je(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Te(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ze(s,e.snapshotNode,i.oldSnap));else throw Ae("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const ar=new mc;class Jn{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new oe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xn(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_e(this.viewCache_),r=pc(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(n){return{filter:n}}function yc(n,e){f(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function vc(n,e,t,s,i){const r=new _c;let o,a;if(t.type===H.OVERWRITE){const c=t;c.source.fromUser?o=Sn(n,e,c.path,c.snap,s,i,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!b(c.path),o=xt(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===H.MERGE){const c=t;c.source.fromUser?o=Cc(n,e,c.path,c.children,s,i,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Tn(n,e,c.path,c.children,s,i,a,r))}else if(t.type===H.ACK_USER_WRITE){const c=t;c.revert?o=Ic(n,e,c.path,s,i,r):o=wc(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===H.LISTEN_COMPLETE)o=Ec(n,e,t.path,s,r);else throw Ae("Unknown operation type: "+t.type);const l=r.getChanges();return bc(e,o,l),{viewCache:o,changes:l}}function bc(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=At(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Zi(At(e)))}}function lr(n,e,t,s,i,r){const o=e.eventCache;if(Dt(s,t)!=null)return e;{let a,l;if(b(t))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=_e(e),u=c instanceof m?c:m.EMPTY_NODE,h=Qn(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Pt(s,_e(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=y(t);if(c===".priority"){f(re(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Ks(s,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=T(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Ks(s,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Xn(s,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return ze(e,a,o.isFullyInitialized()||b(t),n.filter.filtersNodes())}}function xt(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(b(t))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=y(t);if(!l.isCompleteForPath(t)&&re(t)>1)return e;const _=T(t),N=l.getNode().getImmediateChild(p).updateChild(_,s);p===".priority"?c=u.updatePriority(l.getNode(),N):c=u.updateChild(l.getNode(),p,N,_,ar,null)}const h=tr(e,c,l.isFullyInitialized()||b(t),u.filtersNodes()),d=new Jn(i,h,r);return lr(n,h,t,i,d,a)}function Sn(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const u=new Jn(i,e,r);if(b(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ze(e,c,!0,n.filter.filtersNodes());else{const h=y(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=ze(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=T(t),p=a.getNode().getImmediateChild(h);let _;if(b(d))_=s;else{const g=u.getCompleteChild(h);g!=null?Wn(d)===".priority"&&g.getChild(Gi(d)).isEmpty()?_=g:_=g.updateChild(d,s):_=m.EMPTY_NODE}if(p.equals(_))l=e;else{const g=n.filter.updateChild(a.getNode(),h,_,d,u,o);l=ze(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Qs(n,e){return n.eventCache.isCompleteForChild(e)}function Cc(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=k(t,l);Qs(e,y(u))&&(a=Sn(n,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=k(t,l);Qs(e,y(u))||(a=Sn(n,a,u,c,i,r,o))}),a}function Xs(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Tn(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;b(t)?c=s:c=new I(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),_=Xs(n,p,d);l=xt(n,l,new w(h),_,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const _=e.serverCache.getNode().getImmediateChild(h),g=Xs(n,_,d);l=xt(n,l,new w(h),g,i,r,o,a)}}),l}function wc(n,e,t,s,i,r,o){if(Dt(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(b(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return xt(n,e,t,l.getNode().getChild(t),i,r,a,o);if(b(t)){let c=new I(null);return l.getNode().forEachChild(Ee,(u,h)=>{c=c.set(new w(u),h)}),Tn(n,e,t,c,i,r,a,o)}else return e}else{let c=new I(null);return s.foreach((u,h)=>{const d=k(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Tn(n,e,t,c,i,r,a,o)}}function Ec(n,e,t,s,i){const r=e.serverCache,o=tr(e,r.getNode(),r.isFullyInitialized()||b(t),r.isFiltered());return lr(n,o,t,s,ar,i)}function Ic(n,e,t,s,i,r){let o;if(Dt(s,t)!=null)return e;{const a=new Jn(s,e,i),l=e.eventCache.getNode();let c;if(b(t)||y(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Pt(s,_e(e));else{const h=e.serverCache.getNode();f(h instanceof m,"serverChildren would be complete if leaf node"),u=Qn(s,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=y(t);let h=Xn(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,T(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,m.EMPTY_NODE,T(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Pt(s,_e(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Dt(s,C())!=null,ze(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new jn(s.getIndex()),r=Hl(s);this.processor_=gc(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(m.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(m.EMPTY_NODE,a.getNode(),null),u=new oe(l,o.isFullyInitialized(),i.filtersNodes()),h=new oe(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Wt(h,u),this.eventGenerator_=new Ql(this.query_)}get query(){return this.query_}}function Tc(n){return n.viewCache_.serverCache.getNode()}function kc(n){return At(n.viewCache_)}function Rc(n,e){const t=_e(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!b(e)&&!t.getImmediateChild(y(e)).isEmpty())?t.getChild(e):null}function Js(n){return n.eventRegistrations_.length===0}function Nc(n,e){n.eventRegistrations_.push(e)}function Zs(n,e,t){const s=[];if(t){f(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function ei(n,e,t,s){e.type===H.MERGE&&e.source.queryId!==null&&(f(_e(n.viewCache_),"We should always have a full cache before handling merges"),f(At(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=vc(n.processor_,i,e,t,s);return yc(n.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,cr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Ac(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(R,(r,o)=>{s.push(Te(r,o))}),t.isFullyInitialized()&&s.push(Zi(t.getNode())),cr(n,s,t.getNode(),e)}function cr(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Xl(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ot;class hr{constructor(){this.views=new Map}}function Pc(n){f(!Ot,"__referenceConstructor has already been defined"),Ot=n}function Dc(){return f(Ot,"Reference.ts has not been loaded"),Ot}function xc(n){return n.views.size===0}function Zn(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return f(r!=null,"SyncTree gave us an op for an invalid query."),ei(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(ei(o,e,t,s));return r}}function dr(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Pt(t,i?s:null),l=!1;a?l=!0:s instanceof m?(a=Qn(t,s),l=!1):(a=m.EMPTY_NODE,l=!1);const c=Wt(new oe(a,l,!1),new oe(s,i,!1));return new Sc(e,c)}return o}function Oc(n,e,t,s,i,r){const o=dr(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Nc(o,t),Ac(o,t)}function Mc(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=ae(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Zs(c,t,s)),Js(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Zs(l,t,s)),Js(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ae(n)&&r.push(new(Dc())(e._repo,e._path)),{removed:r,events:o}}function ur(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ie(n,e){let t=null;for(const s of n.views.values())t=t||Rc(s,e);return t}function fr(n,e){if(e._queryParams.loadsAllData())return Ht(n);{const s=e._queryIdentifier;return n.views.get(s)}}function pr(n,e){return fr(n,e)!=null}function ae(n){return Ht(n)!=null}function Ht(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mt;function Lc(n){f(!Mt,"__referenceConstructor has already been defined"),Mt=n}function Fc(){return f(Mt,"Reference.ts has not been loaded"),Mt}let Bc=1;class ti{constructor(e){this.listenProvider_=e,this.syncPointTree_=new I(null),this.pendingWriteTree_=fc(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _r(n,e,t,s,i){return tc(n.pendingWriteTree_,e,t,s,i),i?xe(n,new pe(qn(),e,t)):[]}function $c(n,e,t,s){nc(n.pendingWriteTree_,e,t,s);const i=I.fromObject(t);return xe(n,new ke(qn(),e,i))}function ee(n,e,t=!1){const s=sc(n.pendingWriteTree_,e);if(ic(n.pendingWriteTree_,e)){let r=new I(null);return s.snap!=null?r=r.set(C(),!0):M(s.children,o=>{r=r.set(new w(o),!0)}),xe(n,new Nt(s.path,r,t))}else return[]}function ct(n,e,t){return xe(n,new pe(Yn(),e,t))}function Vc(n,e,t){const s=I.fromObject(t);return xe(n,new ke(Yn(),e,s))}function Wc(n,e){return xe(n,new tt(Yn(),e))}function Uc(n,e,t){const s=ts(n,t);if(s){const i=ns(s),r=i.path,o=i.queryId,a=L(r,e),l=new tt(Kn(o),a);return ss(n,r,l)}else return[]}function Lt(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||pr(o,e))){const l=Mc(o,e,t,s);xc(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,p)=>ae(p));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=jc(d);for(let _=0;_<p.length;++_){const g=p[_],N=g.query,$=vr(n,g);n.listenProvider_.startListening(Ge(N),nt(n,N),$.hashFn,$.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(Ge(e),null):c.forEach(d=>{const p=n.queryToTagMap.get(zt(d));n.listenProvider_.stopListening(Ge(d),p)}))}Gc(n,c)}return a}function mr(n,e,t,s){const i=ts(n,s);if(i!=null){const r=ns(i),o=r.path,a=r.queryId,l=L(o,e),c=new pe(Kn(a),l,t);return ss(n,o,c)}else return[]}function Hc(n,e,t,s){const i=ts(n,s);if(i){const r=ns(i),o=r.path,a=r.queryId,l=L(o,e),c=I.fromObject(t),u=new ke(Kn(a),l,c);return ss(n,o,u)}else return[]}function kn(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,p)=>{const _=L(d,i);r=r||ie(p,_),o=o||ae(p)});let a=n.syncPointTree_.get(i);a?(o=o||ae(a),r=r||ie(a,C())):(a=new hr,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=m.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,_)=>{const g=ie(_,C());g&&(r=r.updateImmediateChild(p,g))}));const c=pr(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=zt(e);f(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=qc();n.queryToTagMap.set(d,p),n.tagToQueryMap.set(p,d)}const u=Ut(n.pendingWriteTree_,i);let h=Oc(a,e,t,u,r,l);if(!c&&!o&&!s){const d=fr(a,e);h=h.concat(Yc(n,e,d))}return h}function es(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=L(o,e),c=ie(a,l);if(c)return c});return ir(i,e,r,t,!0)}function zc(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=L(c,t);s=s||ie(u,h)});let i=n.syncPointTree_.get(t);i?s=s||ie(i,C()):(i=new hr,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new oe(s,!0,!1):null,a=Ut(n.pendingWriteTree_,e._path),l=dr(i,e,a,r?o.getNode():m.EMPTY_NODE,r);return kc(l)}function xe(n,e){return gr(e,n.syncPointTree_,null,Ut(n.pendingWriteTree_,C()))}function gr(n,e,t,s){if(b(n.path))return yr(n,e,t,s);{const i=e.get(C());t==null&&i!=null&&(t=ie(i,C()));let r=[];const o=y(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=rr(s,o);r=r.concat(gr(a,l,c,u))}return i&&(r=r.concat(Zn(i,n,s,t))),r}}function yr(n,e,t,s){const i=e.get(C());t==null&&i!=null&&(t=ie(i,C()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=rr(s,o),u=n.operationForChild(o);u&&(r=r.concat(yr(u,a,l,c)))}),i&&(r=r.concat(Zn(i,n,s,t))),r}function vr(n,e){const t=e.query,s=nt(n,t);return{hashFn:()=>(Tc(e)||m.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Uc(n,t._path,s):Wc(n,t._path);{const r=Wa(i,t);return Lt(n,t,null,r)}}}}function nt(n,e){const t=zt(e);return n.queryToTagMap.get(t)}function zt(n){return n._path.toString()+"$"+n._queryIdentifier}function ts(n,e){return n.tagToQueryMap.get(e)}function ns(n){const e=n.indexOf("$");return f(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new w(n.substr(0,e))}}function ss(n,e,t){const s=n.syncPointTree_.get(e);f(s,"Missing sync point for query tag that we're tracking");const i=Ut(n.pendingWriteTree_,e);return Zn(s,t,i,null)}function jc(n){return n.fold((e,t,s)=>{if(t&&ae(t))return[Ht(t)];{let i=[];return t&&(i=ur(t)),M(s,(r,o)=>{i=i.concat(o)}),i}})}function Ge(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Fc())(n._repo,n._path):n}function Gc(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=zt(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function qc(){return Bc++}function Yc(n,e,t){const s=e._path,i=nt(n,e),r=vr(n,t),o=n.listenProvider_.startListening(Ge(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)f(!ae(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!b(c)&&u&&ae(u))return[Ht(u).query];{let d=[];return u&&(d=d.concat(ur(u).map(p=>p.query))),M(h,(p,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Ge(u),nt(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new is(t)}node(){return this.node_}}class rs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=k(this.path_,e);return new rs(this.syncTree_,t)}node(){return es(this.syncTree_,this.path_)}}const Kc=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ni=function(n,e,t){if(!n||typeof n!="object")return n;if(f(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Qc(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Xc(n[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Qc=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:f(!1,"Unexpected server value: "+n)}},Xc=function(n,e,t){n.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&f(!1,"Unexpected increment value: "+s);const i=e.node();if(f(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},br=function(n,e,t,s){return os(e,new rs(t,n),s)},Cr=function(n,e,t){return os(n,new is(e),t)};function os(n,e,t){const s=n.getPriority().val(),i=ni(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=ni(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new D(a,A(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new D(i))),o.forEachChild(R,(a,l)=>{const c=os(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ls(n,e){let t=e instanceof w?e:new w(e),s=n,i=y(t);for(;i!==null;){const r=Ie(s.node.children,i)||{children:{},childCount:0};s=new as(i,s,r),t=T(t),i=y(t)}return s}function Oe(n){return n.node.value}function wr(n,e){n.node.value=e,Rn(n)}function Er(n){return n.node.childCount>0}function Jc(n){return Oe(n)===void 0&&!Er(n)}function jt(n,e){M(n.node.children,(t,s)=>{e(new as(t,n,s))})}function Ir(n,e,t,s){t&&e(n),jt(n,i=>{Ir(i,e,!0)})}function Zc(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ht(n){return new w(n.parent===null?n.name:ht(n.parent)+"/"+n.name)}function Rn(n){n.parent!==null&&eh(n.parent,n.name,n)}function eh(n,e,t){const s=Jc(t),i=G(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Rn(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Rn(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=/[\[\].#$\/\u0000-\u001F\u007F]/,nh=/[\[\].#$\u0000-\u001F\u007F]/,cn=10*1024*1024,cs=function(n){return typeof n=="string"&&n.length!==0&&!th.test(n)},Sr=function(n){return typeof n=="string"&&n.length!==0&&!nh.test(n)},sh=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Sr(n)},ih=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Ln(n)||n&&typeof n=="object"&&G(n,".sv")},rh=function(n,e,t,s){Gt(Bt(n,"value"),e,t)},Gt=function(n,e,t){const s=t instanceof w?new Cl(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+he(s));if(typeof e=="function")throw new Error(n+"contains a function "+he(s)+" with contents = "+e.toString());if(Ln(e))throw new Error(n+"contains "+e.toString()+" "+he(s));if(typeof e=="string"&&e.length>cn/3&&$t(e)>cn)throw new Error(n+"contains a string greater than "+cn+" utf8 bytes "+he(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(M(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!cs(o)))throw new Error(n+" contains an invalid key ("+o+") "+he(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);wl(s,o),Gt(n,a,s),El(s)}),i&&r)throw new Error(n+' contains ".value" child '+he(s)+" in addition to actual children.")}},oh=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Xe(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!cs(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(bl);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&V(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},ah=function(n,e,t,s){const i=Bt(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];M(e,(o,a)=>{const l=new w(o);if(Gt(i,a,k(t,l)),Wn(l)===".priority"&&!ih(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),oh(i,r)},Tr=function(n,e,t,s){if(!Sr(t))throw new Error(Bt(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lh=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Tr(n,e,t)},kr=function(n,e){if(y(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},ch=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!cs(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!sh(t))throw new Error(Bt(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qt(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Un(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Rr(n,e,t){qt(n,t),Nr(n,s=>Un(s,e))}function W(n,e,t){qt(n,t),Nr(n,s=>V(s,e)||V(e,s))}function Nr(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(dh(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function dh(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ue&&O("event: "+t.toString()),De(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="repo_interrupt",fh=25;class ph{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new hh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rt(),this.transactionQueueTree_=new as,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _h(n,e,t){if(n.stats_=$n(n.repoInfo_),n.forceRestClient_||ja())n.server_=new kt(n.repoInfo_,(s,i,r,o)=>{si(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ii(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{P(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new K(n.repoInfo_,e,(s,i,r,o)=>{si(n,s,i,r,o)},s=>{ii(n,s)},s=>{gh(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Qa(n.repoInfo_,()=>new Kl(n.stats_,n.server_)),n.infoData_=new zl,n.infoSyncTree_=new ti({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=ct(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),hs(n,"connected",!1),n.serverSyncTree_=new ti({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);W(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function mh(n){const t=n.infoData_.getNode(new w(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Yt(n){return Kc({timestamp:mh(n)})}function si(n,e,t,s,i){n.dataUpdateCount++;const r=new w(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=bt(t,c=>A(c));o=Hc(n.serverSyncTree_,r,l,i)}else{const l=A(t);o=mr(n.serverSyncTree_,r,l,i)}else if(s){const l=bt(t,c=>A(c));o=Vc(n.serverSyncTree_,r,l)}else{const l=A(t);o=ct(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ne(n,r)),W(n.eventQueue_,a,o)}function ii(n,e){hs(n,"connected",e),e===!1&&Ch(n)}function gh(n,e){M(e,(t,s)=>{hs(n,t,s)})}function hs(n,e,t){const s=new w("/.info/"+e),i=A(t);n.infoData_.updateSnapshot(s,i);const r=ct(n.infoSyncTree_,s,i);W(n.eventQueue_,s,r)}function ds(n){return n.nextWriteId_++}function yh(n,e,t){const s=zc(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=A(i).withIndex(e._queryParams.getIndex());kn(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=ct(n.serverSyncTree_,e._path,r);else{const a=nt(n.serverSyncTree_,e);o=mr(n.serverSyncTree_,e._path,r,a)}return W(n.eventQueue_,e._path,o),Lt(n.serverSyncTree_,e,t,null,!0),r},i=>(dt(n,"get for query "+P(e)+" failed: "+i),Promise.reject(new Error(i))))}function vh(n,e,t,s,i){dt(n,"set",{path:e.toString(),value:t,priority:s});const r=Yt(n),o=A(t,s),a=es(n.serverSyncTree_,e),l=Cr(o,a,r),c=ds(n),u=_r(n.serverSyncTree_,e,l,c,!0);qt(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,p)=>{const _=d==="ok";_||F("set at "+e+" failed: "+d);const g=ee(n.serverSyncTree_,c,!_);W(n.eventQueue_,e,g),Nn(n,i,d,p)});const h=fs(n,e);Ne(n,h),W(n.eventQueue_,h,[])}function bh(n,e,t,s){dt(n,"update",{path:e.toString(),value:t});let i=!0;const r=Yt(n),o={};if(M(t,(a,l)=>{i=!1,o[a]=br(k(e,a),A(l),n.serverSyncTree_,r)}),i)O("update() called with empty data.  Don't do anything."),Nn(n,s,"ok",void 0);else{const a=ds(n),l=$c(n.serverSyncTree_,e,o,a);qt(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,u)=>{const h=c==="ok";h||F("update at "+e+" failed: "+c);const d=ee(n.serverSyncTree_,a,!h),p=d.length>0?Ne(n,e):e;W(n.eventQueue_,p,d),Nn(n,s,c,u)}),M(t,c=>{const u=fs(n,k(e,c));Ne(n,u)}),W(n.eventQueue_,e,[])}}function Ch(n){dt(n,"onDisconnectEvents");const e=Yt(n),t=Rt();Cn(n.onDisconnect_,C(),(i,r)=>{const o=br(i,r,n.serverSyncTree_,e);er(t,i,o)});let s=[];Cn(t,C(),(i,r)=>{s=s.concat(ct(n.serverSyncTree_,i,r));const o=fs(n,i);Ne(n,o)}),n.onDisconnect_=Rt(),W(n.eventQueue_,C(),s)}function wh(n,e,t){let s;y(e._path)===".info"?s=kn(n.infoSyncTree_,e,t):s=kn(n.serverSyncTree_,e,t),Rr(n.eventQueue_,e._path,s)}function Eh(n,e,t){let s;y(e._path)===".info"?s=Lt(n.infoSyncTree_,e,t):s=Lt(n.serverSyncTree_,e,t),Rr(n.eventQueue_,e._path,s)}function Ih(n){n.persistentConnection_&&n.persistentConnection_.interrupt(uh)}function dt(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),O(t,...e)}function Nn(n,e,t,s){e&&De(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ar(n,e,t){return es(n.serverSyncTree_,e,t)||m.EMPTY_NODE}function us(n,e=n.transactionQueueTree_){if(e||Kt(n,e),Oe(e)){const t=Dr(n,e);f(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Sh(n,ht(e),t)}else Er(e)&&jt(e,t=>{us(n,t)})}function Sh(n,e,t){const s=t.map(c=>c.currentWriteId),i=Ar(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];f(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=L(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{dt(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(ee(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Kt(n,ls(n.transactionQueueTree_,e)),us(n,n.transactionQueueTree_),W(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)De(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{F("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Ne(n,e)}},o)}function Ne(n,e){const t=Pr(n,e),s=ht(t),i=Dr(n,t);return Th(n,i,s),s}function Th(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=L(t,l.path);let u=!1,h;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(ee(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=fh)u=!0,h="maxretry",i=i.concat(ee(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Ar(n,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Gt("transaction failed: Data returned ",p,l.path);let _=A(p);typeof p=="object"&&p!=null&&G(p,".priority")||(_=_.updatePriority(d.getPriority()));const N=l.currentWriteId,$=Yt(n),j=Cr(_,d,$);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=j,l.currentWriteId=ds(n),o.splice(o.indexOf(N),1),i=i.concat(_r(n.serverSyncTree_,l.path,j,l.currentWriteId,l.applyLocally)),i=i.concat(ee(n.serverSyncTree_,N,!0))}else u=!0,h="nodata",i=i.concat(ee(n.serverSyncTree_,l.currentWriteId,!0))}W(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,(function(d){setTimeout(d,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Kt(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)De(s[a]);us(n,n.transactionQueueTree_)}function Pr(n,e){let t,s=n.transactionQueueTree_;for(t=y(e);t!==null&&Oe(s)===void 0;)s=ls(s,t),e=T(e),t=y(e);return s}function Dr(n,e){const t=[];return xr(n,e,t),t.sort((s,i)=>s.order-i.order),t}function xr(n,e,t){const s=Oe(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);jt(e,i=>{xr(n,i,t)})}function Kt(n,e){const t=Oe(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,wr(e,t.length>0?t:void 0)}jt(e,s=>{Kt(n,s)})}function fs(n,e){const t=ht(Pr(n,e)),s=ls(n.transactionQueueTree_,e);return Zc(s,i=>{hn(n,i)}),hn(n,s),Ir(s,i=>{hn(n,i)}),t}function hn(n,e){const t=Oe(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(f(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(ee(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?wr(e,void 0):t.length=r+1,W(n.eventQueue_,ht(e),i);for(let o=0;o<s.length;o++)De(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Rh(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):F(`Invalid query segment '${t}' in query '${n}'`)}return e}const ri=function(n,e){const t=Nh(n),s=t.namespace;t.domain==="firebase.com"&&X(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&X("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||La();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Fi(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new w(t.pathString)}},Nh=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=kh(n.substring(u,h)));const d=Rh(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+P(this.snapshot.exportVal())}}class Ph{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return b(this._path)?null:Wn(this._path)}get ref(){return new J(this._repo,this._path)}get _queryIdentifier(){const e=js(this._queryParams),t=Fn(e);return t==="{}"?"default":t}get _queryObject(){return js(this._queryParams)}isEqual(e){if(e=Pe(e),!(e instanceof ps))return!1;const t=this._repo===e._repo,s=Un(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+vl(this._path)}}class J extends ps{constructor(e,t){super(e,t,new Gn,!1)}get parent(){const e=Gi(this._path);return e===null?null:new J(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class st{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new w(e),s=An(this.ref,e);return new st(this._node.getChild(t),s,R)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new st(i,An(this.ref,s),R)))}hasChild(e){const t=new w(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Z(n,e){return n=Pe(n),n._checkNotDeleted("ref"),e!==void 0?An(n._root,e):n._root}function An(n,e){return n=Pe(n),y(n._path)===null?lh("child","path",e):Tr("child","path",e),new J(n._repo,k(n._path,e))}function Dh(n){return kr("remove",n._path),gt(n,null)}function gt(n,e){n=Pe(n),kr("set",n._path),rh("set",e,n._path);const t=new it;return vh(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function oi(n,e){ah("update",e,n._path);const t=new it;return bh(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function xh(n){n=Pe(n);const e=new Or(()=>{}),t=new Qt(e);return yh(n._repo,n,t).then(s=>new st(s,new J(n._repo,n._path),n._queryParams.getIndex()))}class Qt{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Ah("value",this,new st(e.snapshotNode,new J(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ph(this,e,t):null}matches(e){return e instanceof Qt?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Oh(n,e,t,s,i){const r=new Or(t,void 0),o=new Qt(r);return wh(n._repo,n,o),()=>Eh(n._repo,n,o)}function Mh(n,e,t,s){return Oh(n,"value",e)}Pc(J);Lc(J);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="FIREBASE_DATABASE_EMULATOR_HOST",Pn={};let Fh=!1;function Bh(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=On(r);n.repoInfo_=new Fi(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function $h(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||X("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),O("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ri(r,i),a=o.repoInfo,l;typeof process<"u"&&ks&&(l=ks[Lh]),l?(r=`http://${l}?ns=${a.namespace}`,o=ri(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new qa(n.name,n.options,e);ch("Invalid Firebase Database URL",o),b(o.path)||X("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Wh(a,n,c,new Ga(n,t));return new Uh(u,n)}function Vh(n,e){const t=Pn[e];(!t||t[n.key]!==n)&&X(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Ih(n),delete t[n.key]}function Wh(n,e,t,s){let i=Pn[e.name];i||(i={},Pn[e.name]=i);let r=i[n.toURLString()];return r&&X("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ph(n,Fh,t,s),i[n.toURLString()]=r,r}class Uh{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_h(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new J(this._repo,C())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Vh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&X("Cannot call "+e+" on a deleted database.")}}function Hh(n=ga(),e){const t=ua(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Qr("database");s&&zh(t,...s)}return t}function zh(n,e,t,s={}){n=Pe(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Ct(s,r.repoInfo_.emulatorOptions))return;X("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&X('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new mt(mt.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Jr(s.mockUserToken,n.app.options.projectId);o=new mt(a)}On(e)&&(Xr(e),to("Database",!0)),Bh(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(n){Aa(ma),Et(new Ye("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return $h(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ce(Rs,Ns,n),Ce(Rs,Ns,"esm2017")}K.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};K.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};jh();const ve={apiKey:"AIzaSyBSYPtrO2epyTqzUPLNPImvuhm3mNQ7dpQ",authDomain:"sudoku-duel-5ea35.firebaseapp.com",databaseURL:"https://sudoku-duel-5ea35-default-rtdb.europe-west1.firebasedatabase.app",projectId:"sudoku-duel-5ea35",storageBucket:"sudoku-duel-5ea35.firebasestorage.app",messagingSenderId:"115243796177",appId:"1:115243796177:web:55c762dc83e8493236a7f0"};function Gh(){return!!(ve.apiKey&&ve.authDomain&&ve.databaseURL&&ve.projectId&&ve.appId)}class qh{constructor(){E(this,"app",null);E(this,"database",null)}ensureDatabase(){if(!Gh())throw new Error("Firebase is not configured. Fill src/config/firebaseConfig.ts first.");return(!this.app||!this.database)&&(this.app=bi(ve),this.database=Hh(this.app)),this.database}async createRoom(e){const t=this.ensureDatabase();await gt(Z(t,`rooms/${e.roomCode}`),e)}async getRoom(e){const t=this.ensureDatabase(),s=await xh(Z(t,`rooms/${e}`));return s.exists()?s.val():null}subscribeToRoom(e,t){const s=this.ensureDatabase(),i=Z(s,`rooms/${e}`);return Mh(i,r=>{t(r.exists()?r.val():null)})}async updateRoom(e,t){const s=this.ensureDatabase();await oi(Z(s,`rooms/${e}`),t)}async updatePlayer(e,t,s){const i=this.ensureDatabase();await oi(Z(i,`rooms/${e}/players/${t}`),s)}async addActiveEffect(e,t){const s=this.ensureDatabase();await gt(Z(s,`rooms/${e}/activeEffects/${t.id}`),t)}async removeActiveEffect(e,t){const s=this.ensureDatabase();await Dh(Z(s,`rooms/${e}/activeEffects/${t}`))}async setRestartVote(e,t){const s=this.ensureDatabase();await gt(Z(s,`rooms/${e}/restartVotes/${t}`),Date.now())}}const pt=2,Yh=4,ue={easy:{label:"Easy",durationSeconds:300},medium:{label:"Medium",durationSeconds:480},hard:{label:"Hard",durationSeconds:720}},$e={correctCell:100,completedBlock:1e3,completedBoard:1e4,timeBonusPerTenSeconds:100,errorPenaltyStep:.25},Kh=1,Qh=2,Ft=[{type:"dark-flash",label:"Dark Flash",description:"Darkens opponent board for 5 seconds.",durationSeconds:5,weight:40},{type:"freeze-notes",label:"Freeze Notes",description:"Disables opponent notes for 10 seconds.",durationSeconds:10,weight:30},{type:"erase-notes",label:"Erase Notes",description:"Erases notes in selected opponent block.",durationSeconds:0,weight:20},{type:"peek-block",label:"Peek Block",description:"Shows selected opponent block for 5 seconds.",durationSeconds:5,weight:10}];function Xh(n=6){const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let t="";for(let s=0;s<n;s+=1)t+=e[Math.floor(Math.random()*e.length)];return t}function Dn(n="id"){return`${n}-${Date.now()}-${Math.random().toString(36).slice(2,10)}`}const ai=[{id:"easy-001",difficulty:"easy",puzzle:[5,3,0,0,7,0,0,0,0,6,0,0,1,9,5,0,0,0,0,9,8,0,0,0,0,6,0,8,0,0,0,6,0,0,0,3,4,0,0,8,0,3,0,0,1,7,0,0,0,2,0,0,0,6,0,6,0,0,0,0,2,8,0,0,0,0,4,1,9,0,0,5,0,0,0,0,8,0,0,7,9],solution:[5,3,4,6,7,8,9,1,2,6,7,2,1,9,5,3,4,8,1,9,8,3,4,2,5,6,7,8,5,9,7,6,1,4,2,3,4,2,6,8,5,3,7,9,1,7,1,3,9,2,4,8,5,6,9,6,1,5,3,7,2,8,4,2,8,7,4,1,9,6,3,5,3,4,5,2,8,6,1,7,9]},{id:"medium-001",difficulty:"medium",puzzle:[0,0,0,6,0,0,4,0,0,7,0,0,0,0,3,6,0,0,0,0,0,0,9,1,0,8,0,0,0,0,0,0,0,0,0,0,0,5,0,1,8,0,0,0,3,0,0,0,3,0,6,0,4,5,0,4,0,2,0,0,0,6,0,9,0,3,0,0,0,0,0,0,0,2,0,0,0,0,1,0,0],solution:[5,8,1,6,7,2,4,3,9,7,9,2,8,4,3,6,5,1,3,6,4,5,9,1,7,8,2,4,3,8,9,5,7,2,1,6,2,5,6,1,8,4,9,7,3,1,7,9,3,2,6,8,4,5,8,4,5,2,1,9,3,6,7,9,1,3,7,6,8,5,2,4,6,2,7,4,3,5,1,9,8]},{id:"hard-001",difficulty:"hard",puzzle:[0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,1,0,9,5,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,1,0,9,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,6,3,0,9,0,0,0,0,0,0,0,0,0,0,0,4,9,0,0,0,0,0,0,0],solution:[9,5,6,3,8,4,7,1,2,8,3,4,7,1,2,5,9,6,7,2,1,6,9,5,8,4,3,1,6,9,8,2,3,4,5,7,5,4,7,1,6,9,2,3,8,2,8,3,5,4,7,1,6,9,6,7,2,4,3,8,9,5,1,3,1,5,9,7,6,4,2,8,4,9,8,2,5,1,3,7,6]}];class Mr{getPuzzleById(e){const t=ai.find(s=>s.id===e);if(!t)throw new Error(`Puzzle not found: ${e}`);return t}getRandomPuzzleByDifficulty(e){const t=ai.filter(s=>s.difficulty===e);if(t.length===0)throw new Error(`No puzzles for difficulty: ${e}`);return t[Math.floor(Math.random()*t.length)]}createBoard(e){const t=e.puzzle.map((s,i)=>{const r=Math.floor(i/9),o=i%9,a=Math.floor(r/3)*3+Math.floor(o/3),l=s===0?null:s;return{index:i,row:r,column:o,block:a,givenValue:l,currentValue:l,solutionValue:e.solution[i],notes:[],isGiven:l!==null,isCorrect:l!==null,isWrong:!1}});return{puzzleId:e.id,cells:t}}enterValue(e,t,s){const i=e.cells[t];if(!i||i.isGiven)return{board:e,isCorrect:!1,isCompleted:this.isBoardCompleted(e)};const r=i.solutionValue===s,o={...e,cells:e.cells.map(a=>a.index!==t?a:{...a,currentValue:s,notes:r?[]:a.notes,isCorrect:r,isWrong:!r})};return{board:o,isCorrect:r,isCompleted:this.isBoardCompleted(o)}}clearValue(e,t){return{...e,cells:e.cells.map(s=>s.index!==t||s.isGiven?s:{...s,currentValue:null,notes:[],isCorrect:!1,isWrong:!1})}}toggleNote(e,t,s){return{...e,cells:e.cells.map(i=>{if(i.index!==t||i.isGiven||i.currentValue!==null)return i;const o=i.notes.includes(s)?i.notes.filter(a=>a!==s):[...i.notes,s].sort((a,l)=>a-l);return{...i,notes:o}})}}eraseNotesInBlock(e,t){return{...e,cells:e.cells.map(s=>s.block!==t?s:{...s,notes:[]})}}calculateProgress(e){const t=e.cells.filter(s=>s.isCorrect).length;return Math.round(t/e.cells.length*100)}createPublicBoard(e){return e.cells.map(t=>t.isCorrect&&t.currentValue?t.currentValue:0)}isBoardCompleted(e){return e.cells.every(t=>t.isCorrect&&t.currentValue===t.solutionValue)}}class Jh{constructor(e){E(this,"sudokuService",new Mr);this.firebaseService=e}async createRoom(e){const t=Xh(),s=Dn("player"),i=Date.now(),r=this.createPlayer(s,e,"host"),o={roomCode:t,status:"waiting",difficulty:"easy",puzzleId:null,createdAt:i,startedAt:null,finishedAt:null,durationSeconds:ue.easy.durationSeconds,hostPlayerId:s,players:{[s]:r},activeEffects:{},restartVotes:{},winnerPlayerId:null,finishReason:null};return await this.firebaseService.createRoom(o),{roomCode:t,playerId:s}}async joinRoom(e,t){const s=await this.firebaseService.getRoom(e);if(!s)throw new Error("Room not found.");if(Object.values(s.players).length>=pt)throw new Error("Room is full.");const r=Dn("player"),o=this.createPlayer(r,t,"guest");return await this.firebaseService.updateRoom(e,{status:"lobby",players:{...s.players,[r]:o}}),{playerId:r}}async setReady(e,t,s){await this.firebaseService.updatePlayer(e,t,{ready:s})}async setDifficulty(e,t){await this.firebaseService.updateRoom(e,{difficulty:t,durationSeconds:ue[t].durationSeconds})}async tryStartGame(e,t){const s=Object.values(t.players);if(t.status==="playing"||t.status==="finished"||s.length!==pt||!s.every(c=>c.ready))return;const i=this.sudokuService.getRandomPuzzleByDifficulty(t.difficulty),r=this.sudokuService.createBoard(i),o=this.sudokuService.createPublicBoard(r),a=this.sudokuService.calculateProgress(r),l={};for(const[c,u]of Object.entries(t.players))l[c]={...u,score:0,errors:0,progress:a,isFrozen:!1,finishedAt:null,abilities:u.abilities??[],completedRows:[],completedColumns:[],completedBlocks:[],publicBoard:o};await this.firebaseService.updateRoom(e,{status:"playing",puzzleId:i.id,startedAt:Date.now(),durationSeconds:ue[t.difficulty].durationSeconds,players:l,activeEffects:{},restartVotes:{},winnerPlayerId:null,finishReason:null})}async finishGame(e,t,s){await this.firebaseService.updateRoom(e,{status:"finished",finishedAt:Date.now(),finishReason:t,winnerPlayerId:s,restartVotes:{}})}async resetRoomForRematch(e){const t=await this.firebaseService.getRoom(e);if(!t)throw new Error("Room not found.");const s={};for(const[i,r]of Object.entries(t.players))s[i]={...r,ready:!1,connected:!0,score:0,errors:0,progress:0,isFrozen:!1,finishedAt:null,abilities:[],completedRows:[],completedColumns:[],completedBlocks:[],publicBoard:Array(81).fill(0)};await this.firebaseService.updateRoom(e,{status:Object.keys(s).length>=pt?"lobby":"waiting",puzzleId:null,startedAt:null,finishedAt:null,durationSeconds:ue[t.difficulty].durationSeconds,players:s,activeEffects:{},restartVotes:{},winnerPlayerId:null,finishReason:null})}async requestRestart(e,t){await this.firebaseService.setRestartVote(e,t);const s=await this.firebaseService.getRoom(e);if(!s)throw new Error("Room not found.");const i=Object.keys(s.players),r=s.restartVotes??{};return i.length>=pt&&i.every(a=>typeof r[a]=="number")?(await this.resetRoomForRematch(e),"restarted"):"waiting"}async leaveRoom(e,t){const s=await this.firebaseService.getRoom(e);if(!s)return;if(s.status==="playing"){await this.finishGame(e,"player-left",this.findOpponentId(s,t));return}const i={...s.players};delete i[t],await this.firebaseService.updateRoom(e,{players:i,status:Object.keys(i).length===0?"finished":"waiting"})}createPlayer(e,t,s){return{id:e,nickname:t,role:s,ready:!1,connected:!0,score:0,errors:0,progress:0,isFrozen:!1,finishedAt:null,abilities:[],completedRows:[],completedColumns:[],completedBlocks:[],publicBoard:Array(81).fill(0)}}findOpponentId(e,t){const s=Object.values(e.players).find(i=>i.id!==t);return(s==null?void 0:s.id)??null}}class Zh{constructor(){E(this,"playerIdKey","sudoku-duel:player-id");E(this,"nicknameKey","sudoku-duel:nickname")}savePlayerId(e){localStorage.setItem(this.playerIdKey,e)}getPlayerId(){return localStorage.getItem(this.playerIdKey)}saveNickname(e){localStorage.setItem(this.nicknameKey,e)}getNickname(){return localStorage.getItem(this.nicknameKey)}clearSession(){localStorage.removeItem(this.playerIdKey)}}class ed{getMultiplier(e){return e>=4?0:1-e*$e.errorPenaltyStep}getCellScore(e){return Math.round($e.correctCell*this.getMultiplier(e))}getBlockScore(e){return Math.round($e.completedBlock*this.getMultiplier(e))}getCompletionScore(e){return Math.round($e.completedBoard*this.getMultiplier(e))}getTimeBonus(e,t){const s=Math.floor(Math.max(0,e)/10);return Math.round(s*$e.timeBonusPerTenSeconds*this.getMultiplier(t))}}function td(n){const e=n.reduce((s,i)=>s+i.weight,0);let t=Math.random()*e;for(const s of n)if(t-=s.weight,t<=0)return s.item;return n[n.length-1].item}class nd{rollAbility(){return Math.random()>Kh?null:this.getRandomAbilityByWeight()}getRandomAbilityByWeight(){return td(Ft.map(e=>({item:e.type,weight:e.weight})))}isBlockTargetAbility(e){return e==="peek-block"||e==="erase-notes"}createEffect(e,t,s,i){const r=Ft.find(c=>c.type===e);if(!r)throw new Error(`Unknown ability: ${e}`);if(this.isBlockTargetAbility(e)&&(i===void 0||i<0||i>8))throw new Error("Selected block index must be between 0 and 8.");const o=Date.now(),a=Math.max(r.durationSeconds,3)*1e3,l={id:Dn("effect"),type:e,fromPlayerId:t,targetPlayerId:s,createdAt:o,expiresAt:o+a};return i!==void 0&&(l.payload={blockIndex:i}),l}removeAbilityFromInventory(e,t){const s=e.indexOf(t);return s===-1?e:[...e.slice(0,s),...e.slice(s+1)]}addAbilityToInventory(e,t){return e.length>=Qh?e:[...e,t]}}class sd{getRowIndex(e){return Math.floor(e/9)}getColumnIndex(e){return e%9}getBlockIndex(e){const t=this.getRowIndex(e),s=this.getColumnIndex(e);return Math.floor(t/3)*3+Math.floor(s/3)}getBlockCellIndexes(e){const t=Math.floor(e/3)*3,s=e%3*3,i=[];for(let r=t;r<t+3;r+=1)for(let o=s;o<s+3;o+=1)i.push(r*9+o);return i}isBlockCompleted(e,t){return this.getBlockCellIndexes(t).every(i=>e.cells[i].isCorrect)}getNewCompletedBlocks(e,t){const s=[];for(let i=0;i<9;i+=1)t.includes(i)||this.isBlockCompleted(e,i)&&s.push(i);return s}}function id(n){const e=Math.max(0,n),t=Math.floor(e/60),s=e%60;return`${t}:${s.toString().padStart(2,"0")}`}class rd{getRemainingSeconds(e,t){const s=Math.floor((Date.now()-e)/1e3);return Math.max(0,t-s)}isTimeEnded(e,t){return this.getRemainingSeconds(e,t)<=0}formatTime(e){return id(e)}}class Xt{constructor(e="app"){E(this,"root");const t=document.getElementById(e);if(!t)throw new Error("Root element not found.");this.root=t}setHTML(e){this.root.innerHTML=e}clear(){this.root.innerHTML=""}}class od extends Xt{render(e="",t=""){this.setHTML(`
      <main class="page home-page polished-page">
        <section class="card hero-card polished-card">
          <div class="hero-badge">TypeScript · Firebase · Realtime Duel</div>
          <p class="eyebrow">Semester project</p>
          <h1>Sudoku Duel</h1>
          <p class="muted hero-text">
            Create a private room, invite your opponent, solve the same Sudoku and win by accuracy, speed and score.
          </p>

          <div class="home-rules-grid">
            <div><strong>100</strong><span>points per correct cell</span></div>
            <div><strong>4</strong><span>mistakes freeze player</span></div>
            <div><strong>2</strong><span>players in one room</span></div>
          </div>

          <label class="field">
            <span>Nickname</span>
            <input id="nickname-input" type="text" maxlength="20" placeholder="Vlad" value="${t}" />
          </label>

          <button id="create-room-button" class="primary-button full-width-button">Create room</button>

          <div class="divider"><span>or join existing room</span></div>

          <label class="field">
            <span>Room code</span>
            <input id="room-code-input" type="text" maxlength="8" placeholder="ABCD12" value="${e}" />
          </label>

          <button id="join-room-button" class="secondary-button full-width-button">Join room</button>
        </section>
      </main>
    `)}getNickname(){var e;return((e=document.getElementById("nickname-input"))==null?void 0:e.value.trim())??""}getRoomCode(){var e;return((e=document.getElementById("room-code-input"))==null?void 0:e.value.trim().toUpperCase())??""}onCreateRoom(e){var t;(t=document.getElementById("create-room-button"))==null||t.addEventListener("click",e)}onJoinRoom(e){var t;(t=document.getElementById("join-room-button"))==null||t.addEventListener("click",e)}showError(e){alert(e)}}class ad extends Xt{render(e,t,s){const i=e.players[t],r=e.hostPlayerId===t,o=Object.values(e.players),a=o.filter(c=>c.ready).length,l=s||`${window.location.origin}${window.location.pathname}#/home?room=${encodeURIComponent(e.roomCode)}`;this.setHTML(`
      <main class="page lobby-page polished-page">
        <section class="card lobby-card polished-card">
          <div class="lobby-topline">
            <div>
              <p class="eyebrow">Room</p>
              <h1>${e.roomCode}</h1>
            </div>
            <span class="lobby-status-pill">${a}/${o.length} ready</span>
          </div>

          <p class="muted">Send this code or invite link to your opponent. The match starts automatically when both players press Ready.</p>

          <div class="copy-box invite-copy-box">
            <input id="invite-link" value="${l}" readonly />
            <button id="copy-invite-button" class="secondary-button">Copy</button>
          </div>

          <div class="players-list lobby-players-list">
            ${o.map(c=>`
              <div class="player-card lobby-player-card ${c.ready?"ready":""}">
                <div>
                  <strong>${c.nickname}</strong>
                  <span>${c.role}${c.id===t?" · you":""}</span>
                </div>
                <em>${c.ready?"Ready":"Waiting"}</em>
              </div>
            `).join("")}
          </div>

          <label class="field">
            <span>Difficulty ${r?"":"(host only)"}</span>
            <select id="difficulty-select" ${r?"":"disabled"}>
              ${Object.keys(ue).map(c=>`
                <option value="${c}" ${e.difficulty===c?"selected":""}>
                  ${ue[c].label} · ${Math.round(ue[c].durationSeconds/60)} min
                </option>
              `).join("")}
            </select>
          </label>

          <div class="lobby-actions">
            <button id="ready-button" class="primary-button">
              ${i!=null&&i.ready?"Cancel ready":"Ready"}
            </button>
            <button id="leave-button" class="ghost-button">Leave room</button>
          </div>
        </section>
      </main>
    `)}onReadyChange(e){var t;(t=document.getElementById("ready-button"))==null||t.addEventListener("click",()=>{var i;const s=((i=document.getElementById("ready-button"))==null?void 0:i.textContent)??"";e(s.includes("Ready"))})}onDifficultyChange(e){var t;(t=document.getElementById("difficulty-select"))==null||t.addEventListener("change",s=>{e(s.target.value)})}onCopyInviteLink(e){var t;(t=document.getElementById("copy-invite-button"))==null||t.addEventListener("click",e)}onLeaveRoom(e){var t;(t=document.getElementById("leave-button"))==null||t.addEventListener("click",e)}}class ld{render(e){if(e.length===0)return`
        <div class="ability-panel ability-panel--empty">
          <p>No abilities yet.</p>
          <span>Complete a 3x3 block to get one.</span>
        </div>
      `;const t=e.reduce((s,i)=>(s[i]=(s[i]??0)+1,s),{});return`
      <div class="ability-panel">
        ${Object.entries(t).map(([s,i])=>{const r=s,o=Ft.find(a=>a.type===r);return`
            <button
              type="button"
              class="ability-button ability-button--${r}"
              data-ability-type="${r}"
              title="${(o==null?void 0:o.description)??r}"
            >
              <span class="ability-button__name">${(o==null?void 0:o.label)??r}</span>
              <span class="ability-button__count">×${i}</span>
            </button>
          `}).join("")}
      </div>
    `}}class cd{render(e,t){return t?`
      <section class="status-card ${t.isFrozen?"frozen":""}">
        <p class="eyebrow">${e}</p>
        <h3>${t.nickname}</h3>
        <dl>
          <div><dt>Score</dt><dd>${t.score}</dd></div>
          <div><dt>Errors</dt><dd>${t.errors}/4</dd></div>
          <div><dt>Progress</dt><dd>${t.progress}%</dd></div>
          <div><dt>Status</dt><dd>${t.isFrozen?"Frozen":"Playing"}</dd></div>
        </dl>
      </section>
    `:`<section class="status-card muted">${e}: waiting...</section>`}}class hd{render(e,t,s=[]){const i=t!==null?e.cells[t]:null;return`
      <div class="sudoku-board">
        ${e.cells.map(r=>this.renderCell(r,i,t)).join("")}
      </div>
    `}renderCell(e,t,s){const i=["sudoku-cell"];if(e.isGiven&&i.push("sudoku-cell--given"),e.isCorrect&&i.push("sudoku-cell--correct"),e.isWrong&&i.push("sudoku-cell--wrong"),s===e.index&&i.push("sudoku-cell--selected"),t&&t.index!==e.index){const o=t.row===e.row,a=t.column===e.column,l=t.block===e.block,c=t.currentValue??t.givenValue,u=e.currentValue??e.givenValue,h=c!==null&&u!==null&&c===u;(o||a)&&i.push("sudoku-cell--related-line"),l&&i.push("sudoku-cell--related-block"),h&&i.push("sudoku-cell--same-value")}(e.column===2||e.column===5)&&i.push("sudoku-cell--border-right-heavy"),(e.row===2||e.row===5)&&i.push("sudoku-cell--border-bottom-heavy"),e.column===0&&i.push("sudoku-cell--border-left-heavy"),e.row===0&&i.push("sudoku-cell--border-top-heavy");const r=e.currentValue??e.givenValue;return`
      <button type="button" class="${i.join(" ")}" data-cell-index="${e.index}">
        ${r?`<span class="sudoku-cell__value">${r}</span>`:this.renderNotes(e.notes)}
      </button>
    `}renderNotes(e){return`
      <div class="sudoku-cell__notes">
        ${Array.from({length:9},(t,s)=>{const i=s+1;return`
            <span class="sudoku-cell__note">
              ${e.includes(i)?i:""}
            </span>
          `}).join("")}
      </div>
    `}}class dd extends Xt{constructor(){super(...arguments);E(this,"boardView",new hd);E(this,"abilityPanelView",new ld);E(this,"playerStatusView",new cd)}render(t){const s=t.room.players[t.currentPlayerId],i=Object.values(t.room.players).find(g=>g.id!==t.currentPlayerId),r=Object.values(t.room.activeEffects??{}),o=r.filter(g=>g.targetPlayerId===t.currentPlayerId&&g.expiresAt>Date.now()),a=r.filter(g=>g.fromPlayerId===t.currentPlayerId&&g.expiresAt>Date.now()),l=o.some(g=>g.type==="dark-flash"),c=o.some(g=>g.type==="freeze-notes"),u=t.room.restartVotes??{},h=typeof u[t.currentPlayerId]=="number",d=i?typeof u[i.id]=="number":!1,p=h||d,_=h?"Waiting...":d?"Accept restart":"Restart match";this.setHTML(`
      <main class="page game-page">
        <header class="game-header game-header--compact">
          <div>
            <p class="eyebrow">${t.room.difficulty} duel</p>
            <p class="muted game-control-hint">
              Click a cell, then press 1-9 or use the number buttons. Notes mode writes notes instead of answers.
            </p>
          </div>
        </header>

        <section class="game-layout">
          <aside class="sidebar">
            ${this.playerStatusView.render("You",s)}
            ${this.playerStatusView.render("Opponent",i)}
            <section class="card small-card">
              <div class="ability-card-header">
                <h3>Abilities</h3>
                <span>${((s==null?void 0:s.abilities)??[]).length}/2</span>
              </div>
              ${this.abilityPanelView.render((s==null?void 0:s.abilities)??[])}
            </section>
            ${this.renderPeekPreview(a,i,t.board)}
          </aside>

          <section class="board-section ${l?"board-section--dark-flash":""}">
            ${s!=null&&s.isFrozen?'<div class="freeze-banner">You are frozen after 4 mistakes. Wait for match end.</div>':""}
            ${c?'<div class="ability-status-banner">Freeze Notes is active. Notes are temporarily disabled.</div>':""}
            <div class="board-timer" aria-label="Remaining time">${t.formattedTime}</div>
            <div class="game-actions board-game-actions">
              <button
                type="button"
                id="restart-match-button"
                class="secondary-button compact-action-button ${h?"button-disabled":""}"
                ${h?"disabled":""}
              >${_}</button>
              <button type="button" id="surrender-button" class="ghost-button compact-action-button danger-action-button">Surrender</button>
            </div>
            ${p?`
              <div class="restart-request-banner restart-request-banner--board">
                ${h?"Restart request sent. Waiting for the opponent to accept.":"Opponent requested a restart. Press Accept restart to return both players to the lobby."}
              </div>
            `:""}
            ${this.boardView.render(t.board,t.selectedCellIndex,o)}
            <div class="number-pad" aria-label="Number pad">
              ${Array.from({length:9},(g,N)=>{const $=N+1;return`<button type="button" class="number-button${t.selectedNumber===$?" active":""}" data-number="${$}">${$}</button>`}).join("")}
              <button type="button" id="clear-cell-button" class="number-button clear">Clear</button>
              <button
                type="button"
                id="notes-toggle"
                class="number-button notes-pad-button ${t.notesMode?"active":""} ${c?"button-disabled":""}"
                ${c?"disabled":""}
              >
                ${c?"Notes: FROZEN":`Notes: ${t.notesMode?"ON":"OFF"}`}
              </button>
            </div>
          </section>
        </section>

        ${this.renderAbilityBlockModal(t.pendingAbility,i)}
      </main>
    `)}onNumberClick(t){this.root.querySelectorAll("[data-number]").forEach(s=>{s.addEventListener("click",()=>t(Number(s.dataset.number)))})}onCellClick(t){this.root.querySelectorAll("[data-cell-index]").forEach(s=>{s.addEventListener("click",()=>t(Number(s.dataset.cellIndex)))})}onCellRightClick(t){this.root.querySelectorAll("[data-cell-index]").forEach(s=>{s.addEventListener("contextmenu",i=>{i.preventDefault(),t(Number(s.dataset.cellIndex))})})}onClearClick(t){var s;(s=this.root.querySelector("#clear-cell-button"))==null||s.addEventListener("click",t)}onNotesToggle(t){var s;(s=this.root.querySelector("#notes-toggle"))==null||s.addEventListener("click",t)}onAbilityClick(t){this.root.querySelectorAll("[data-ability-type]").forEach(s=>{s.addEventListener("click",()=>t(s.dataset.abilityType))})}onAbilityBlockSelect(t){this.root.querySelectorAll("[data-ability-block]").forEach(s=>{s.addEventListener("click",()=>t(Number(s.dataset.abilityBlock)))})}onAbilityCancel(t){var s,i;(s=this.root.querySelector("#ability-cancel-button"))==null||s.addEventListener("click",t),(i=this.root.querySelector("[data-ability-modal-backdrop]"))==null||i.addEventListener("click",t)}onSurrenderClick(t){var s;(s=this.root.querySelector("#surrender-button"))==null||s.addEventListener("click",t)}onRestartMatchClick(t){var s;(s=this.root.querySelector("#restart-match-button"))==null||s.addEventListener("click",t)}renderAbilityBlockModal(t,s){if(!t)return"";const i=Ft.find(o=>o.type===t),r=t==="peek-block";return`
      <div class="ability-modal" role="dialog" aria-modal="true" aria-label="Choose opponent block">
        <div class="ability-modal__backdrop" data-ability-modal-backdrop></div>
        <section class="ability-modal__card">
          <div class="ability-modal__header">
            <div>
              <p class="eyebrow">Ability target</p>
              <h2>${(i==null?void 0:i.label)??t}</h2>
              <p class="muted">
                ${r?"Choose one opponent 3x3 block to reveal only the numbers they have already entered.":"Choose one opponent 3x3 block where notes should be erased."}
              </p>
            </div>
            <button type="button" id="ability-cancel-button" class="ghost-button">Cancel</button>
          </div>

          <div class="ability-block-grid">
            ${Array.from({length:9},(o,a)=>`
              <button type="button" class="ability-block-card" data-ability-block="${a}">
                <span class="ability-block-card__title">Block ${a+1}</span>
                ${this.renderMiniBlock([],a,!1)}
              </button>
            `).join("")}
          </div>

          <p class="ability-modal__hint">
            Cancel will close this window and the ability will stay in your inventory.
          </p>
        </section>
      </div>
    `}renderPeekPreview(t,s,i){var u;const r=t.find(h=>{var d;return h.type==="peek-block"&&((d=h.payload)==null?void 0:d.blockIndex)!==void 0});if(!r||!s||((u=r.payload)==null?void 0:u.blockIndex)===void 0)return"";const o=Math.max(0,Math.ceil((r.expiresAt-Date.now())/1e3)),a=i.cells.map(h=>h.isGiven?h.givenValue??0:0),l=s.publicBoard??[],c=a.map((h,d)=>{const p=l[d]??0;return p>0?p:h});return`
      <section class="card small-card peek-preview-card">
        <div class="ability-card-header">
          <h3>Peek Block</h3>
          <span>${o}s</span>
        </div>
        <p class="muted">Opponent block ${r.payload.blockIndex+1}</p>
        ${this.renderMiniBlock(c,r.payload.blockIndex,!0)}
      </section>
    `}renderMiniBlock(t,s,i){const r=this.getBlockIndexes(s);return`
      <div class="mini-block-grid ${i?"mini-block-grid--values":"mini-block-grid--empty"}">
        ${r.map(o=>{const a=t[o]??0;return`<span>${i&&a>0?a:""}</span>`}).join("")}
      </div>
    `}getBlockIndexes(t){const s=Math.floor(t/3)*3,i=t%3*3,r=[];for(let o=0;o<3;o+=1)for(let a=0;a<3;a+=1)r.push((s+o)*9+i+a);return r}}class ud extends Xt{render(e){const t=e.players.find(i=>i.playerId===e.winnerPlayerId),s=[...e.players].sort((i,r)=>r.score-i.score);this.setHTML(`
      <main class="page result-page polished-page">
        <section class="card result-card polished-card result-card--celebration">
          <div class="result-hero">
            <div class="result-trophy" aria-hidden="true">${e.isDraw?"=":"★"}</div>
            <p class="eyebrow">Match finished</p>
            <h1>${e.isDraw?"Draw match":`${(t==null?void 0:t.nickname)??"Unknown"} wins`}</h1>
            <p class="muted result-reason">${this.formatReason(e.reason)}</p>
          </div>

          <div class="result-list result-grid">
            ${s.map((i,r)=>`
              <div class="player-card result-player-card ${i.playerId===e.winnerPlayerId?"winner":""}">
                <div class="result-player-topline">
                  <div>
                    <span class="result-place">#${r+1}</span>
                    <strong>${i.nickname}</strong>
                  </div>
                  <span class="player-status-pill ${i.isFrozen?"danger":"ok"}">
                    ${i.isFrozen?"Frozen":"Active"}
                  </span>
                </div>
                <dl>
                  <div><dt>Score</dt><dd>${i.score}</dd></div>
                  <div><dt>Errors</dt><dd>${i.errors}/4</dd></div>
                  <div><dt>Progress</dt><dd>${i.progress}%</dd></div>
                </dl>
              </div>
            `).join("")}
          </div>

          <div class="result-actions">
            <button id="play-again-button" class="primary-button">Play again</button>
            <button id="back-home-button" class="secondary-button">Back to home</button>
          </div>
        </section>
      </main>
    `)}onPlayAgain(e){var t;(t=document.getElementById("play-again-button"))==null||t.addEventListener("click",e)}onBackHome(e){var t;(t=document.getElementById("back-home-button"))==null||t.addEventListener("click",e)}formatReason(e){return{completed:"Sudoku completed","time-ended":"Timer ended","both-frozen":"Both players are frozen","player-left":"Opponent left the room",surrendered:"Player surrendered"}[e]??e}}class fd{constructor(e,t,s,i){this.homeView=e,this.roomService=t,this.storageService=s,this.router=i}init(){const t=this.router.getCurrentRoute().roomCode??"",s=this.storageService.getNickname()??"";this.homeView.render(t,s),this.homeView.onCreateRoom(()=>void this.handleCreateRoom()),this.homeView.onJoinRoom(()=>void this.handleJoinRoom())}destroy(){}async handleCreateRoom(){try{const e=this.getValidNickname(),{roomCode:t,playerId:s}=await this.roomService.createRoom(e);this.storageService.saveNickname(e),this.storageService.savePlayerId(s),this.router.goLobby(t)}catch(e){this.homeView.showError(e instanceof Error?e.message:"Failed to create room.")}}async handleJoinRoom(){try{const e=this.getValidNickname(),t=this.homeView.getRoomCode();if(!t)throw new Error("Enter room code.");const{playerId:s}=await this.roomService.joinRoom(t,e);this.storageService.saveNickname(e),this.storageService.savePlayerId(s),this.router.goLobby(t)}catch(e){this.homeView.showError(e instanceof Error?e.message:"Failed to join room.")}}getValidNickname(){const e=this.homeView.getNickname();if(e.length<2)throw new Error("Nickname must contain at least 2 characters.");return e}}class pd{constructor(e,t,s,i,r){E(this,"unsubscribe",null);E(this,"roomCode","");this.lobbyView=e,this.roomService=t,this.firebaseService=s,this.storageService=i,this.router=r}init(e){this.roomCode=e,this.unsubscribe=this.firebaseService.subscribeToRoom(e,t=>{this.handleRoomUpdate(t)})}destroy(){var e;(e=this.unsubscribe)==null||e.call(this)}async handleRoomUpdate(e){if(!e){this.router.goHome(this.roomCode);return}const t=this.storageService.getPlayerId();if(!t||!e.players[t]){this.router.goHome(e.roomCode);return}if(e.status==="playing"){this.router.goGame(e.roomCode);return}if(e.status==="finished"){this.router.goResult(e.roomCode);return}const s=this.router.getInviteLink(e.roomCode);this.lobbyView.render(e,t,s),this.lobbyView.onReadyChange(i=>void this.handleReadyChange(i)),this.lobbyView.onDifficultyChange(i=>void this.handleDifficultyChange(i)),this.lobbyView.onCopyInviteLink(()=>void navigator.clipboard.writeText(s)),this.lobbyView.onLeaveRoom(()=>void this.handleLeaveRoom(t)),await this.roomService.tryStartGame(e.roomCode,e)}async handleReadyChange(e){const t=this.storageService.getPlayerId();t&&await this.roomService.setReady(this.roomCode,t,e)}async handleDifficultyChange(e){await this.roomService.setDifficulty(this.roomCode,e)}async handleLeaveRoom(e){await this.roomService.leaveRoom(this.roomCode,e),this.storageService.clearSession(),this.router.goHome()}}class _d{constructor(e,t,s,i,r,o,a,l,c,u){E(this,"roomCode","");E(this,"room",null);E(this,"board",null);E(this,"selectedCellIndex",null);E(this,"selectedNumber",null);E(this,"pendingAbility",null);E(this,"notesMode",!1);E(this,"unsubscribe",null);E(this,"timerIntervalId",null);E(this,"appliedInstantEffectIds",new Set);E(this,"hasSyncedInitialPublicBoard",!1);E(this,"keyboardHandler",e=>{this.handleKeyboardInput(e)});this.gameView=e,this.roomService=t,this.firebaseService=s,this.storageService=i,this.sudokuService=r,this.scoreService=o,this.abilityService=a,this.regionService=l,this.timerService=c,this.router=u}init(e){this.roomCode=e,document.addEventListener("keydown",this.keyboardHandler),this.unsubscribe=this.firebaseService.subscribeToRoom(e,t=>{this.handleRoomUpdate(t)}),this.timerIntervalId=window.setInterval(()=>{this.checkFinishConditions(),this.render()},1e3)}destroy(){var e;document.removeEventListener("keydown",this.keyboardHandler),(e=this.unsubscribe)==null||e.call(this),this.timerIntervalId!==null&&window.clearInterval(this.timerIntervalId)}async handleRoomUpdate(e){if(!e){this.router.goHome();return}if(e.status==="finished"){this.router.goResult(e.roomCode);return}if(e.status==="lobby"||e.status==="waiting"){this.router.goLobby(e.roomCode);return}this.room=e;const t=this.storageService.getPlayerId();if((t?Object.values(e.activeEffects??{}).some(i=>i.targetPlayerId===t&&i.type==="freeze-notes"&&i.expiresAt>Date.now()):!1)&&(this.notesMode=!1),!this.board&&e.puzzleId){const i=this.sudokuService.getPuzzleById(e.puzzleId);this.board=this.sudokuService.createBoard(i),this.syncInitialPublicBoard()}this.closePendingAbilityIfItNoLongerExists(e),this.applyIncomingEffects(e),this.render()}handleKeyboardInput(e){const t=e.target;if((t==null?void 0:t.tagName)==="INPUT"||(t==null?void 0:t.tagName)==="SELECT"||(t==null?void 0:t.tagName)==="TEXTAREA")return;const s=e.key;if(/^[1-9]$/.test(s)){e.preventDefault(),this.handleNumberAction(Number(s));return}if(s==="Backspace"||s==="Delete"||s==="0"){e.preventDefault(),this.handleClearCell();return}if(s.toLowerCase()==="n"){e.preventDefault(),this.handleNotesToggle();return}s==="Escape"&&(this.pendingAbility=null,this.selectedNumber=null,this.render())}handleCellClick(e){if(this.selectedCellIndex===e){this.selectedCellIndex=null,this.selectedNumber=null,this.render();return}this.selectedCellIndex=e,this.selectedNumber=null,this.render()}handleCellRightClick(e){if(this.selectedCellIndex=e,this.selectedNumber===null){this.render();return}this.addNoteToSelectedCell(this.selectedNumber).finally(()=>{this.selectedNumber=null,this.render()})}async handleNumberButtonClick(e){await this.handleNumberAction(e)}async handleNumberAction(e){if(this.selectedNumber=e,this.selectedCellIndex===null){this.render();return}await this.handleNumberInput(e),this.selectedNumber=null,this.render()}async handleNumberInput(e){const t=this.storageService.getPlayerId();if(!this.room||!this.board||!t||this.selectedCellIndex===null)return;const s=this.room.players[t];if(!s||s.isFrozen)return;const i=this.board.cells[this.selectedCellIndex];if(!i||i.isGiven||i.isCorrect)return;if(this.notesMode){if(!this.canUseNotes()){this.notesMode=!1;return}this.board=this.sudokuService.toggleNote(this.board,this.selectedCellIndex,e);return}const r=s.completedBlocks??[],o=this.sudokuService.enterValue(this.board,this.selectedCellIndex,e);this.board=o.board;let a=s.score,l=s.errors,c=s.isFrozen,u=s.finishedAt??null,h=[...s.abilities??[]],d=[...s.completedBlocks??[]];if(o.isCorrect){a+=this.scoreService.getCellScore(l);const p=this.regionService.getNewCompletedBlocks(this.board,r);for(const _ of p){d.push(_),a+=this.scoreService.getBlockScore(l);const g=this.abilityService.rollAbility();g&&(h=this.abilityService.addAbilityToInventory(h,g))}if(o.isCompleted){const _=this.getRemainingSeconds();a+=this.scoreService.getCompletionScore(l),a+=this.scoreService.getTimeBonus(_,l),u=Date.now()}}else l+=1,l>=Yh&&(c=!0);this.selectedCellIndex=null,this.selectedNumber=null,await this.firebaseService.updatePlayer(this.roomCode,t,{score:a,errors:l,progress:this.sudokuService.calculateProgress(this.board),isFrozen:c,finishedAt:u,abilities:h,completedBlocks:d,publicBoard:this.sudokuService.createPublicBoard(this.board)}),await this.checkFinishConditions()}async addNoteToSelectedCell(e){const t=this.storageService.getPlayerId();if(!this.room||!this.board||!t||this.selectedCellIndex===null)return;const s=this.room.players[t];if(!s||s.isFrozen||!this.canUseNotes())return;const i=this.board.cells[this.selectedCellIndex];!i||i.isGiven||i.isCorrect||(this.board=this.sudokuService.toggleNote(this.board,this.selectedCellIndex,e))}handleClearCell(){if(!this.board||this.selectedCellIndex===null)return;const e=this.board.cells[this.selectedCellIndex];!e||e.isGiven||e.isCorrect||(this.board=this.sudokuService.clearValue(this.board,this.selectedCellIndex),this.selectedNumber=null,this.render())}handleNotesToggle(){if(!this.canUseNotes()){this.notesMode=!1,this.render();return}this.notesMode=!this.notesMode,this.selectedNumber=null,this.render()}async handleAbilityUse(e){const t=this.storageService.getPlayerId();if(!this.room||!t)return;const s=this.room.players[t],i=Object.values(this.room.players).find(o=>o.id!==t);if(!(!s||!i||s.isFrozen||!(s.abilities??[]).includes(e))){if(this.abilityService.isBlockTargetAbility(e)){this.pendingAbility=e,this.render();return}await this.activateAbility(e)}}async handleAbilityBlockSelect(e){this.pendingAbility!==null&&await this.activateAbility(this.pendingAbility,e)}handleAbilityCancel(){this.pendingAbility=null,this.render()}async handleSurrender(){const e=this.storageService.getPlayerId();if(!this.room||!e)return;const t=Object.values(this.room.players).find(i=>i.id!==e);window.confirm("Surrender this match? Your opponent will win.")&&await this.roomService.finishGame(this.roomCode,"surrendered",(t==null?void 0:t.id)??null)}async handleRestartMatch(){const e=this.storageService.getPlayerId();if(!this.room||!e||typeof(this.room.restartVotes??{})[e]=="number")return;const s=Object.entries(this.room.restartVotes??{}).some(([o])=>o!==e);if(!window.confirm(s?"Accept restart request? Both players will return to the lobby.":"Request a match restart? The game will restart only after the opponent accepts."))return;await this.roomService.requestRestart(this.roomCode,e)==="restarted"&&this.router.goLobby(this.roomCode)}async activateAbility(e,t){const s=this.storageService.getPlayerId();if(!this.room||!s)return;const i=this.room.players[s],r=Object.values(this.room.players).find(c=>c.id!==s);if(!i||!r||i.isFrozen)return;const o=i.abilities??[];if(!o.includes(e)){this.pendingAbility=null,this.render();return}if(this.abilityService.isBlockTargetAbility(e)&&(t===void 0||Number.isNaN(t)||t<0||t>8))return;const a=this.abilityService.createEffect(e,s,r.id,t),l=this.abilityService.removeAbilityFromInventory(o,e);try{await this.firebaseService.addActiveEffect(this.roomCode,a),await this.firebaseService.updatePlayer(this.roomCode,s,{abilities:l}),this.pendingAbility=null}catch(c){console.error("Failed to activate ability",c),alert("Ability was not activated. Please try again.")}this.render()}async checkFinishConditions(){if(!this.room||this.room.status!=="playing")return;const e=Object.values(this.room.players),t=e.length===2&&e.every(a=>a.isFrozen===!0||typeof a.finishedAt=="number"),s=e.length===2&&e.every(a=>a.isFrozen===!0),i=typeof this.room.startedAt=="number"&&this.timerService.isTimeEnded(this.room.startedAt,this.room.durationSeconds);if(!t&&!i)return;const r=this.resolveWinner(this.room),o=s?"both-frozen":i?"time-ended":"completed";await this.roomService.finishGame(this.roomCode,o,r)}resolveWinner(e){const t=Object.values(e.players),[s,i]=t;return!s||!i?(s==null?void 0:s.id)??null:s.score!==i.score?s.score>i.score?s.id:i.id:s.errors!==i.errors?s.errors<i.errors?s.id:i.id:typeof s.finishedAt=="number"&&typeof i.finishedAt=="number"&&s.finishedAt!==i.finishedAt?s.finishedAt<i.finishedAt?s.id:i.id:null}applyIncomingEffects(e){var i;const t=this.storageService.getPlayerId();if(!t||!this.board)return;const s=Object.values(e.activeEffects??{}).filter(r=>r.targetPlayerId===t&&r.expiresAt>Date.now());for(const r of s)r.type==="erase-notes"&&((i=r.payload)==null?void 0:i.blockIndex)!==void 0&&!this.appliedInstantEffectIds.has(r.id)&&(this.board=this.sudokuService.eraseNotesInBlock(this.board,r.payload.blockIndex),this.appliedInstantEffectIds.add(r.id),this.firebaseService.removeActiveEffect(this.roomCode,r.id).catch(()=>{}))}closePendingAbilityIfItNoLongerExists(e){const t=this.storageService.getPlayerId();if(!t||this.pendingAbility===null)return;const s=e.players[t];(!s||!(s.abilities??[]).includes(this.pendingAbility))&&(this.pendingAbility=null)}async syncInitialPublicBoard(){const e=this.storageService.getPlayerId();if(this.hasSyncedInitialPublicBoard||!this.board||!this.room||!e)return;const t=this.room.players[e];if(!t)return;const s=t.publicBoard??[],i=this.sudokuService.createPublicBoard(this.board);if(!(i.some(a=>a>0)&&(s.length!==81||s.every(a=>a===0)))){this.hasSyncedInitialPublicBoard=!0;return}this.hasSyncedInitialPublicBoard=!0,await this.firebaseService.updatePlayer(this.roomCode,e,{progress:this.sudokuService.calculateProgress(this.board),publicBoard:i})}canUseNotes(){return!this.hasActiveEffect("freeze-notes")}hasActiveEffect(e){const t=this.storageService.getPlayerId();return!this.room||!t?!1:Object.values(this.room.activeEffects??{}).some(s=>s.targetPlayerId===t&&s.type===e&&s.expiresAt>Date.now())}getRemainingSeconds(){var e;return typeof((e=this.room)==null?void 0:e.startedAt)!="number"?0:this.timerService.getRemainingSeconds(this.room.startedAt,this.room.durationSeconds)}render(){const e=this.storageService.getPlayerId();if(!this.room||!this.board||!e||typeof this.room.startedAt!="number")return;const t=this.getRemainingSeconds();this.gameView.render({room:this.room,board:this.board,currentPlayerId:e,selectedCellIndex:this.selectedCellIndex,selectedNumber:this.selectedNumber,pendingAbility:this.pendingAbility,notesMode:this.notesMode,remainingSeconds:t,formattedTime:this.timerService.formatTime(t)}),this.gameView.onCellClick(s=>this.handleCellClick(s)),this.gameView.onCellRightClick(s=>this.handleCellRightClick(s)),this.gameView.onNumberClick(s=>void this.handleNumberButtonClick(s)),this.gameView.onClearClick(()=>this.handleClearCell()),this.gameView.onNotesToggle(()=>this.handleNotesToggle()),this.gameView.onAbilityClick(s=>void this.handleAbilityUse(s)),this.gameView.onAbilityBlockSelect(s=>void this.handleAbilityBlockSelect(s)),this.gameView.onAbilityCancel(()=>this.handleAbilityCancel()),this.gameView.onSurrenderClick(()=>void this.handleSurrender()),this.gameView.onRestartMatchClick(()=>void this.handleRestartMatch())}}class md{constructor(e,t,s,i){E(this,"roomCode","");E(this,"unsubscribe",null);this.resultView=e,this.firebaseService=t,this.roomService=s,this.router=i}async init(e){this.roomCode=e;const t=await this.firebaseService.getRoom(e);if(!t){this.router.goHome();return}this.resultView.render(this.buildResult(t)),this.resultView.onBackHome(()=>this.router.goHome()),this.resultView.onPlayAgain(()=>void this.handlePlayAgain()),this.unsubscribe=this.firebaseService.subscribeToRoom(e,s=>{if(!s){this.router.goHome();return}(s.status==="lobby"||s.status==="waiting")&&this.router.goLobby(s.roomCode)})}destroy(){var e;(e=this.unsubscribe)==null||e.call(this)}async handlePlayAgain(){await this.roomService.resetRoomForRematch(this.roomCode),this.router.goLobby(this.roomCode)}buildResult(e){const t=Object.values(e.players).map(s=>({playerId:s.id,nickname:s.nickname,score:s.score,errors:s.errors,progress:s.progress,finishedAt:s.finishedAt??null,isFrozen:s.isFrozen}));return{winnerPlayerId:e.winnerPlayerId??null,isDraw:(e.winnerPlayerId??null)===null,reason:e.finishReason??"completed",players:t}}}const yt=new qh,_t=new Jh(yt),dn=new Zh,gd=new Mr,yd=new ed,vd=new nd,bd=new sd,Cd=new rd,Ve=new $r;let q=null;function wd(){q!=null&&q.destroy&&q.destroy(),q=null}function Lr(){wd();const n=Ve.getCurrentRoute();if(n.page==="lobby"&&n.roomCode){const t=new pd(new ad,_t,yt,dn,Ve);q=t,t.init(n.roomCode);return}if(n.page==="game"&&n.roomCode){const t=new _d(new dd,_t,yt,dn,gd,yd,vd,bd,Cd,Ve);q=t,t.init(n.roomCode);return}if(n.page==="result"&&n.roomCode){const t=new md(new ud,yt,_t,Ve);q=t,t.init(n.roomCode);return}const e=new fd(new od,_t,dn,Ve);q=e,e.init()}window.addEventListener("hashchange",Lr);Lr();
