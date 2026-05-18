var Fr=Object.defineProperty;var Br=(n,e,t)=>e in n?Fr(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var E=(n,e,t)=>Br(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class $r{goHome(e){window.location.hash=e?`#/home?room=${encodeURIComponent(e)}`:"#/home"}goLobby(e){window.location.hash=`#/lobby?room=${encodeURIComponent(e)}`}goGame(e){window.location.hash=`#/game?room=${encodeURIComponent(e)}`}goResult(e){window.location.hash=`#/result?room=${encodeURIComponent(e)}`}getCurrentRoute(){const e=window.location.hash||"#/home",[t,i=""]=e.replace("#","").split("?"),r=new URLSearchParams(i).get("room")??void 0;return t==="/lobby"?{page:"lobby",roomCode:r}:t==="/game"?{page:"game",roomCode:r}:t==="/result"?{page:"result",roomCode:r}:{page:"home",roomCode:r}}getInviteLink(e){const t=new URL(window.location.href);return t.hash=`#/home?room=${encodeURIComponent(e)}`,t.toString()}}const Vr=()=>{};var _i={};/**
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
 */const ls={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const f=function(n,e){if(!n)throw Ae(e)},Ae=function(n){return new Error("Firebase Database ("+ls.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const cs=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Wr=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Dn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),i.push(t[u],t[d],t[h],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cs(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Wr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new Ur;const h=r<<2|a>>4;if(i.push(h),c!==64){const p=a<<4&240|c>>2;if(i.push(p),d!==64){const _=c<<6&192|d;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ur extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hs=function(n){const e=cs(n);return Dn.encodeByteArray(e,!0)},gt=function(n){return hs(n).replace(/\./g,"")},dn=function(n){try{return Dn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Hr(n){return ds(void 0,n)}function ds(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!zr(t)||(n[t]=ds(n[t],e[t]));return n}function zr(n){return n!=="__proto__"}/**
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
 */function Gr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jr=()=>Gr().__FIREBASE_DEFAULTS__,qr=()=>{if(typeof process>"u"||typeof _i>"u")return;const n=_i.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Yr=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&dn(n[1]);return e&&JSON.parse(e)},us=()=>{try{return Vr()||jr()||qr()||Yr()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Kr=n=>{var e,t;return(t=(e=us())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Qr=n=>{const e=Kr(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},fs=()=>{var n;return(n=us())===null||n===void 0?void 0:n.config};/**
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
 */class st{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Mn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Xr(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Jr(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[gt(JSON.stringify(t)),gt(JSON.stringify(o)),""].join(".")}const We={};function Zr(){const n={prod:[],emulator:[]};for(const e of Object.keys(We))We[e]?n.emulator.push(e):n.prod.push(e);return n}function eo(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let mi=!1;function to(n,e){if(typeof window>"u"||typeof document>"u"||!Mn(window.location.host)||We[n]===e||We[n]||mi)return;We[n]=e;function t(h){return`__firebase__banner__${h}`}const i="__firebase__banner",r=Zr().prod.length>0;function o(){const h=document.getElementById(i);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,p){h.setAttribute("width","24"),h.setAttribute("id",p),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function c(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{mi=!0,o()},h}function u(h,p){h.setAttribute("id",p),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function d(){const h=eo(i),p=t("text"),_=document.getElementById(p)||document.createElement("span"),b=t("learnmore"),R=document.getElementById(b)||document.createElement("a"),G=t("preprendIcon"),j=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const ae=h.element;a(ae),u(R,b);const Qt=c();l(j,G),ae.append(j,_,R,Qt),document.body.appendChild(ae)}r?(_.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function no(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ps(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(no())}function io(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function so(){return ls.NODE_ADMIN===!0}function ro(){try{return typeof indexedDB=="object"}catch{return!1}}function oo(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const ao="FirebaseError";class rt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=ao,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?lo(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new rt(s,a,i)}}function lo(n,e){return n.replace(co,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const co=/\{\$([^}]+)}/g;/**
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
 */const ms=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=qe(dn(r[0])||""),t=qe(dn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},ho=function(n){const e=ms(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},uo=function(n){const e=ms(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function z(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ie(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function gi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function yt(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function vt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(yi(r)&&yi(o)){if(!vt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function yi(n){return n!==null&&typeof n=="object"}/**
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
 */function fo(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class po{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Lt(n,e){return`${n} failed: ${e} argument `}/**
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
 */const _o=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,f(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ft=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Pe(n){return n&&n._delegate?n._delegate:n}class Ye{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class mo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new st;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yo(e))try{this.getOrInitializeService({instanceIdentifier:ce})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ce){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ce){return this.instances.has(e)}getOptions(e=ce){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:go(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ce){return this.component?this.component.multipleInstances?e:ce:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function go(n){return n===ce?void 0:n}function yo(n){return n.instantiationMode==="EAGER"}/**
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
 */var S;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(S||(S={}));const bo={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Co=S.INFO,wo={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},Eo=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=wo[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gs{constructor(e){this.name=e,this._logLevel=Co,this._logHandler=Eo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const Io=(n,e)=>e.some(t=>n instanceof t);let vi,bi;function So(){return vi||(vi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function To(){return bi||(bi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ys=new WeakMap,un=new WeakMap,vs=new WeakMap,Xt=new WeakMap,On=new WeakMap;function ko(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ee(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ys.set(t,n)}).catch(()=>{}),On.set(e,n),e}function No(n){if(un.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});un.set(n,e)}let fn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return un.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vs.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ee(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ro(n){fn=n(fn)}function Ao(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Jt(this),e,...t);return vs.set(i,e.sort?e.sort():[e]),ee(i)}:To().includes(n)?function(...e){return n.apply(Jt(this),e),ee(ys.get(this))}:function(...e){return ee(n.apply(Jt(this),e))}}function Po(n){return typeof n=="function"?Ao(n):(n instanceof IDBTransaction&&No(n),Io(n,So())?new Proxy(n,fn):n)}function ee(n){if(n instanceof IDBRequest)return ko(n);if(Xt.has(n))return Xt.get(n);const e=Po(n);return e!==n&&(Xt.set(n,e),On.set(e,n)),e}const Jt=n=>On.get(n);function xo(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=ee(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ee(o.result),l.oldVersion,l.newVersion,ee(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Do=["get","getKey","getAll","getAllKeys","count"],Mo=["put","add","delete","clear"],Zt=new Map;function Ci(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Zt.get(e))return Zt.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Mo.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Do.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Zt.set(e,r),r}Ro(n=>({...n,get:(e,t,i)=>Ci(e,t)||n.get(e,t,i),has:(e,t)=>!!Ci(e,t)||n.has(e,t)}));/**
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
 */class Oo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Lo(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Lo(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pn="@firebase/app",wi="0.13.2";/**
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
 */const Q=new gs("@firebase/app"),Fo="@firebase/app-compat",Bo="@firebase/analytics-compat",$o="@firebase/analytics",Vo="@firebase/app-check-compat",Wo="@firebase/app-check",Uo="@firebase/auth",Ho="@firebase/auth-compat",zo="@firebase/database",Go="@firebase/data-connect",jo="@firebase/database-compat",qo="@firebase/functions",Yo="@firebase/functions-compat",Ko="@firebase/installations",Qo="@firebase/installations-compat",Xo="@firebase/messaging",Jo="@firebase/messaging-compat",Zo="@firebase/performance",ea="@firebase/performance-compat",ta="@firebase/remote-config",na="@firebase/remote-config-compat",ia="@firebase/storage",sa="@firebase/storage-compat",ra="@firebase/firestore",oa="@firebase/ai",aa="@firebase/firestore-compat",la="firebase",ca="11.10.0";/**
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
 */const _n="[DEFAULT]",ha={[pn]:"fire-core",[Fo]:"fire-core-compat",[$o]:"fire-analytics",[Bo]:"fire-analytics-compat",[Wo]:"fire-app-check",[Vo]:"fire-app-check-compat",[Uo]:"fire-auth",[Ho]:"fire-auth-compat",[zo]:"fire-rtdb",[Go]:"fire-data-connect",[jo]:"fire-rtdb-compat",[qo]:"fire-fn",[Yo]:"fire-fn-compat",[Ko]:"fire-iid",[Qo]:"fire-iid-compat",[Xo]:"fire-fcm",[Jo]:"fire-fcm-compat",[Zo]:"fire-perf",[ea]:"fire-perf-compat",[ta]:"fire-rc",[na]:"fire-rc-compat",[ia]:"fire-gcs",[sa]:"fire-gcs-compat",[ra]:"fire-fst",[aa]:"fire-fst-compat",[oa]:"fire-vertex","fire-js":"fire-js",[la]:"fire-js-all"};/**
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
 */const bt=new Map,da=new Map,mn=new Map;function Ei(n,e){try{n.container.addComponent(e)}catch(t){Q.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ct(n){const e=n.name;if(mn.has(e))return Q.debug(`There were multiple attempts to register component ${e}.`),!1;mn.set(e,n);for(const t of bt.values())Ei(t,n);for(const t of da.values())Ei(t,n);return!0}function ua(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function fa(n){return n==null?!1:n.settings!==void 0}/**
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
 */const pa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},te=new _s("app","Firebase",pa);/**
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
 */class _a{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}}/**
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
 */const ma=ca;function bs(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:_n,automaticDataCollectionEnabled:!0},e),s=i.name;if(typeof s!="string"||!s)throw te.create("bad-app-name",{appName:String(s)});if(t||(t=fs()),!t)throw te.create("no-options");const r=bt.get(s);if(r){if(vt(t,r.options)&&vt(i,r.config))return r;throw te.create("duplicate-app",{appName:s})}const o=new vo(s);for(const l of mn.values())o.addComponent(l);const a=new _a(t,i,o);return bt.set(s,a),a}function ga(n=_n){const e=bt.get(n);if(!e&&n===_n&&fs())return bs();if(!e)throw te.create("no-app",{appName:n});return e}function Ce(n,e,t){var i;let s=(i=ha[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Q.warn(a.join(" "));return}Ct(new Ye(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ya="firebase-heartbeat-database",va=1,Ke="firebase-heartbeat-store";let en=null;function Cs(){return en||(en=xo(ya,va,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ke)}catch(t){console.warn(t)}}}}).catch(n=>{throw te.create("idb-open",{originalErrorMessage:n.message})})),en}async function ba(n){try{const t=(await Cs()).transaction(Ke),i=await t.objectStore(Ke).get(ws(n));return await t.done,i}catch(e){if(e instanceof rt)Q.warn(e.message);else{const t=te.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Q.warn(t.message)}}}async function Ii(n,e){try{const i=(await Cs()).transaction(Ke,"readwrite");await i.objectStore(Ke).put(e,ws(n)),await i.done}catch(t){if(t instanceof rt)Q.warn(t.message);else{const i=te.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Q.warn(i.message)}}}function ws(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ca=1024,wa=30;class Ea{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Sa(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Si();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>wa){const o=Ta(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Q.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Si(),{heartbeatsToSend:i,unsentEntries:s}=Ia(this._heartbeatsCache.heartbeats),r=gt(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Q.warn(t),""}}}function Si(){return new Date().toISOString().substring(0,10)}function Ia(n,e=Ca){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ti(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ti(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Sa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ro()?oo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ba(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ii(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ii(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ti(n){return gt(JSON.stringify({version:2,heartbeats:n})).length}function Ta(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function ka(n){Ct(new Ye("platform-logger",e=>new Oo(e),"PRIVATE")),Ct(new Ye("heartbeat",e=>new Ea(e),"PRIVATE")),Ce(pn,wi,n),Ce(pn,wi,"esm2017"),Ce("fire-js","")}ka("");var Na="firebase",Ra="11.10.0";/**
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
 */Ce(Na,Ra,"app");var ki={};const Ni="@firebase/database",Ri="1.0.20";/**
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
 */let Es="";function Aa(n){Es=n}/**
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
 */class xa{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return z(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Is=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Pa(e)}}catch{}return new xa},de=Is("localStorage"),Da=Is("sessionStorage");/**
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
 */const we=new gs("@firebase/database"),Ma=(function(){let n=1;return function(){return n++}})(),Ss=function(n){const e=_o(n),t=new po;t.update(e);const i=t.digest();return Dn.encodeByteArray(i)},ot=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ot.apply(null,i):typeof i=="object"?e+=P(i):e+=i,e+=" "}return e};let Ue=null,Ai=!0;const Oa=function(n,e){f(!0,"Can't turn on custom loggers persistently."),we.logLevel=S.VERBOSE,Ue=we.log.bind(we)},M=function(...n){if(Ai===!0&&(Ai=!1,Ue===null&&Da.get("logging_enabled")===!0&&Oa()),Ue){const e=ot.apply(null,n);Ue(e)}},at=function(n){return function(...e){M(n,...e)}},gn=function(...n){const e="FIREBASE INTERNAL ERROR: "+ot(...n);we.error(e)},X=function(...n){const e=`FIREBASE FATAL ERROR: ${ot(...n)}`;throw we.error(e),new Error(e)},F=function(...n){const e="FIREBASE WARNING: "+ot(...n);we.warn(e)},La=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&F("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ln=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Fa=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Se="[MIN_NAME]",fe="[MAX_NAME]",me=function(n,e){if(n===e)return 0;if(n===Se||e===fe)return-1;if(e===Se||n===fe)return 1;{const t=Pi(n),i=Pi(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Ba=function(n,e){return n===e?0:n<e?-1:1},Oe=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+P(e))},Fn=function(n){if(typeof n!="object"||n===null)return P(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=P(e[i]),t+=":",t+=Fn(n[e[i]]);return t+="}",t},Ts=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function O(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ks=function(n){f(!Ln(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},$a=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Va=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Wa(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Ua=new RegExp("^-?(0*)\\d{1,10}$"),Ha=-2147483648,za=2147483647,Pi=function(n){if(Ua.test(n)){const e=Number(n);if(e>=Ha&&e<=za)return e}return null},xe=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw F("Exception was thrown by user callback.",t),e},Math.floor(0))}},Ga=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},He=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class ja{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,fa(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){F(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class qa{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(M("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',F(e)}}class _t{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_t.OWNER="owner";/**
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
 */const Bn="5",Ns="v",Rs="s",As="r",Ps="f",xs=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ds="ls",Ms="p",yn="ac",Os="websocket",Ls="long_polling";/**
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
 */class Fs{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=de.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&de.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ya(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Bs(n,e,t){f(typeof e=="string","typeof type must == string"),f(typeof t=="object","typeof params must == object");let i;if(e===Os)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ls)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ya(n)&&(t.ns=n.namespace);const s=[];return O(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Ka{constructor(){this.counters_={}}incrementCounter(e,t=1){z(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Hr(this.counters_)}}/**
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
 */const tn={},nn={};function $n(n){const e=n.toString();return tn[e]||(tn[e]=new Ka),tn[e]}function Qa(n,e){const t=n.toString();return nn[t]||(nn[t]=e()),nn[t]}/**
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
 */class Xa{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&xe(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const xi="start",Ja="close",Za="pLPCommand",el="pRTLPCB",$s="id",Vs="pw",Ws="ser",tl="cb",nl="seg",il="ts",sl="d",rl="dframe",Us=1870,Hs=30,ol=Us-Hs,al=25e3,ll=3e4;class be{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=at(e),this.stats_=$n(t),this.urlFn=l=>(this.appCheckToken&&(l[yn]=this.appCheckToken),Bs(t,Ls,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Xa(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ll)),Fa(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vn((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===xi)this.id=a,this.password=l;else if(o===Ja)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[xi]="t",i[Ws]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[tl]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ns]=Bn,this.transportSessionId&&(i[Rs]=this.transportSessionId),this.lastSessionId&&(i[Ds]=this.lastSessionId),this.applicationId&&(i[Ms]=this.applicationId),this.appCheckToken&&(i[yn]=this.appCheckToken),typeof location<"u"&&location.hostname&&xs.test(location.hostname)&&(i[As]=Ps);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){be.forceAllow_=!0}static forceDisallow(){be.forceDisallow_=!0}static isAvailable(){return be.forceAllow_?!0:!be.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$a()&&!Va()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=P(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=hs(t),s=Ts(i,ol);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[rl]="t",i[$s]=e,i[Vs]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=P(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Vn{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ma(),window[Za+this.uniqueCallbackIdentifier]=e,window[el+this.uniqueCallbackIdentifier]=t,this.myIFrame=Vn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){M("frame writing exception"),a.stack&&M(a.stack),M(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||M("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$s]=this.myID,e[Vs]=this.myPW,e[Ws]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Hs+i.length<=Us;){const o=this.pendingSegs.shift();i=i+"&"+nl+s+"="+o.seg+"&"+il+s+"="+o.ts+"&"+sl+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(al)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{M("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const cl=16384,hl=45e3;let wt=null;typeof MozWebSocket<"u"?wt=MozWebSocket:typeof WebSocket<"u"&&(wt=WebSocket);class W{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=at(this.connId),this.stats_=$n(t),this.connURL=W.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Ns]=Bn,typeof location<"u"&&location.hostname&&xs.test(location.hostname)&&(o[As]=Ps),t&&(o[Rs]=t),i&&(o[Ds]=i),s&&(o[yn]=s),r&&(o[Ms]=r),Bs(e,Os,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,de.set("previous_websocket_failure",!0);try{let i;so(),this.mySock=new wt(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){W.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&wt!==null&&!W.forceDisallow_}static previouslyFailed(){return de.isInMemoryStorage||de.get("previous_websocket_failure")===!0}markConnectionHealthy(){de.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=qe(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=P(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Ts(t,cl);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(hl))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}W.responsesRequiredToBeHealthy=2;W.healthyTimeout=3e4;/**
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
 */class Qe{static get ALL_TRANSPORTS(){return[be,W]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=W&&W.isAvailable();let i=t&&!W.previouslyFailed();if(e.webSocketOnly&&(t||F("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[W];else{const s=this.transports_=[];for(const r of Qe.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Qe.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qe.globalTransportInitialized_=!1;/**
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
 */const dl=6e4,ul=5e3,fl=10*1024,pl=100*1024,sn="t",Di="d",_l="s",Mi="r",ml="e",Oi="o",Li="a",Fi="n",Bi="p",gl="h";class yl{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=at("c:"+this.id+":"),this.transportManager_=new Qe(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=He(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pl?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fl?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sn in e){const t=e[sn];t===Li?this.upgradeIfSecondaryHealthy_():t===Mi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Oi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Oe("t",e),i=Oe("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Li,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Oe("t",e),i=Oe("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Oe(sn,e);if(Di in e){const i=e[Di];if(t===gl){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Fi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===_l?this.onConnectionShutdown_(i):t===Mi?this.onReset_(i):t===ml?gn("Server Error: "+i):t===Oi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Bn!==i&&F("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),He(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dl))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):He(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ul))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(de.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class zs{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Gs{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Et extends Gs{static getInstance(){return new Et}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ps()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const $i=32,Vi=768;class w{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function C(){return new w("")}function g(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function se(n){return n.pieces_.length-n.pieceNum_}function T(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new w(n.pieces_,e)}function Wn(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function vl(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Xe(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function js(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new w(e,0)}function k(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof w)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new w(t,0)}function v(n){return n.pieceNum_>=n.pieces_.length}function L(n,e){const t=g(n),i=g(e);if(t===null)return e;if(t===i)return L(T(n),T(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function bl(n,e){const t=Xe(n,0),i=Xe(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=me(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function Un(n,e){if(se(n)!==se(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function $(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(se(n)>se(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Cl{constructor(e,t){this.errorPrefix_=t,this.parts_=Xe(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ft(this.parts_[i]);qs(this)}}function wl(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ft(e),qs(n)}function El(n){const e=n.parts_.pop();n.byteLength_-=Ft(e),n.parts_.length>0&&(n.byteLength_-=1)}function qs(n){if(n.byteLength_>Vi)throw new Error(n.errorPrefix_+"has a key path longer than "+Vi+" bytes ("+n.byteLength_+").");if(n.parts_.length>$i)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$i+") or object contains a cycle "+he(n))}function he(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Hn extends Gs{static getInstance(){return new Hn}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Le=1e3,Il=300*1e3,Wi=30*1e3,Sl=1.3,Tl=3e4,kl="server_kill",Ui=3;class K extends zs{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=K.nextPersistentConnectionId_++,this.log_=at("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Le,this.maxReconnectDelay_=Il,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Et.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(P(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new st,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;K.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&z(e,"w")){const i=Ie(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();F(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uo(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ho(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+P(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):gn("Unrecognized action received from server: "+P(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Le,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Le,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Tl&&(this.reconnectDelay_=Le),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Sl)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+K.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?M("getToken() completed but was canceled"):(M("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new yl(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{F(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(kl)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&F(d),l())}}}interrupt(e){M("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){M("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gi(this.interruptReasons_)&&(this.reconnectDelay_=Le,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Fn(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new w(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){M("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ui&&(this.reconnectDelay_=Wi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){M("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ui&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Es.replace(/\./g,"-")]=1,ps()?e["framework.cordova"]=1:io()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Et.getInstance().currentlyOnline();return gi(this.interruptReasons_)&&e}}K.nextPersistentConnectionId_=0;K.nextConnectionId_=0;/**
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
 */class y{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new y(e,t)}}/**
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
 */class Bt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new y(Se,e),s=new y(Se,t);return this.compare(i,s)!==0}minPost(){return y.MIN}}/**
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
 */let ut;class Ys extends Bt{static get __EMPTY_NODE(){return ut}static set __EMPTY_NODE(e){ut=e}compare(e,t){return me(e.name,t.name)}isDefinedOn(e){throw Ae("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return y.MIN}maxPost(){return new y(fe,ut)}makePost(e,t){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new y(e,ut)}toString(){return".key"}}const Ee=new Ys;/**
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
 */class ft{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class D{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??D.RED,this.left=s??B.EMPTY_NODE,this.right=r??B.EMPTY_NODE}copy(e,t,i,s,r){return new D(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return B.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return B.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,D.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,D.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}D.RED=!0;D.BLACK=!1;class Nl{copy(e,t,i,s,r){return this}insert(e,t,i){return new D(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class B{constructor(e,t=B.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new B(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,D.BLACK,null,null))}remove(e){return new B(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,D.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ft(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ft(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ft(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ft(this.root_,null,this.comparator_,!0,e)}}B.EMPTY_NODE=new Nl;/**
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
 */function Rl(n,e){return me(n.name,e.name)}function zn(n,e){return me(n,e)}/**
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
 */let vn;function Al(n){vn=n}const Ks=function(n){return typeof n=="number"?"number:"+ks(n):"string:"+n},Qs=function(n){if(n.isLeafNode()){const e=n.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&z(e,".sv"),"Priority must be a string or number.")}else f(n===vn||n.isEmpty(),"priority of unexpected type.");f(n===vn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Hi;class x{static set __childrenNodeConstructor(e){Hi=e}static get __childrenNodeConstructor(){return Hi}constructor(e,t=x.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Qs(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new x(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:x.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return v(e)?this:g(e)===".priority"?this.priorityNode_:x.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:x.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=g(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||se(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,x.__childrenNodeConstructor.EMPTY_NODE.updateChild(T(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ks(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ks(this.value_):e+=this.value_,this.lazyHash_=Ss(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===x.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof x.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=x.VALUE_TYPE_ORDER.indexOf(t),r=x.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+t),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}x.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Xs,Js;function Pl(n){Xs=n}function xl(n){Js=n}class Dl extends Bt{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?me(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return y.MIN}maxPost(){return new y(fe,new x("[PRIORITY-POST]",Js))}makePost(e,t){const i=Xs(e);return new y(t,new x("[PRIORITY-POST]",i))}toString(){return".priority"}}const N=new Dl;/**
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
 */const Ml=Math.log(2);class Ol{constructor(e){const t=r=>parseInt(Math.log(r)/Ml,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const It=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=n[l],h=t?t(d):d,new D(h,d.node,D.BLACK,null,null);{const p=parseInt(u/2,10)+l,_=s(l,p),b=s(p+1,c);return d=n[p],h=t?t(d):d,new D(h,d.node,D.BLACK,_,b)}},r=function(l){let c=null,u=null,d=n.length;const h=function(_,b){const R=d-_,G=d;d-=_;const j=s(R+1,G),ae=n[R],Qt=t?t(ae):ae;p(new D(Qt,ae.node,b,null,j))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const b=l.nextBitIsOne(),R=Math.pow(2,l.count-(_+1));b?h(R,D.BLACK):(h(R,D.BLACK),h(R,D.RED))}return u},o=new Ol(n.length),a=r(o);return new B(i||e,a)};/**
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
 */let rn;const ye={};class Y{static get Default(){return f(ye&&N,"ChildrenNode.ts has not been loaded"),rn=rn||new Y({".priority":ye},{".priority":N}),rn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ie(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof B?t:null}hasIndex(e){return z(this.indexSet_,e.toString())}addIndex(e,t){f(e!==Ee,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(y.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=It(i,e.getCompare()):a=ye;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Y(u,c)}addToIndexes(e,t){const i=yt(this.indexes_,(s,r)=>{const o=Ie(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===ye)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),It(a,o.getCompare())}else return ye;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new y(e.name,a))),l.insert(e,e.node)}});return new Y(i,this.indexSet_)}removeFromIndexes(e,t){const i=yt(this.indexes_,s=>{if(s===ye)return s;{const r=t.get(e.name);return r?s.remove(new y(e.name,r)):s}});return new Y(i,this.indexSet_)}}/**
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
 */let Fe;class m{static get EMPTY_NODE(){return Fe||(Fe=new m(new B(zn),null,Y.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Qs(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fe}updatePriority(e){return this.children_.isEmpty()?this:new m(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Fe:t}}getChild(e){const t=g(e);return t===null?this:this.getImmediateChild(t).getChild(T(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(f(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new y(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Fe:this.priorityNode_;return new m(s,o,r)}}updateChild(e,t){const i=g(e);if(i===null)return t;{f(g(e)!==".priority"||se(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(T(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(N,(o,a)=>{t[o]=a.val(e),i++,r&&m.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ks(this.getPriority().val())+":"),this.forEachChild(N,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Ss(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new y(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new y(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,y.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,y.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===lt?-1:0}withIndex(e){if(e===Ee||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new m(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ee||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(N),s=t.getIterator(N);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ee?null:this.indexMap_.get(e.toString())}}m.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ll extends m{constructor(){super(new B(zn),m.EMPTY_NODE,Y.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return m.EMPTY_NODE}isEmpty(){return!1}}const lt=new Ll;Object.defineProperties(y,{MIN:{value:new y(Se,m.EMPTY_NODE)},MAX:{value:new y(fe,lt)}});Ys.__EMPTY_NODE=m.EMPTY_NODE;x.__childrenNodeConstructor=m;Al(lt);xl(lt);/**
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
 */const Fl=!0;function A(n,e=null){if(n===null)return m.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new x(t,A(e))}if(!(n instanceof Array)&&Fl){const t=[];let i=!1;if(O(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=A(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new y(o,l)))}}),t.length===0)return m.EMPTY_NODE;const r=It(t,Rl,o=>o.name,zn);if(i){const o=It(t,N.getCompare());return new m(r,A(e),new Y({".priority":o},{".priority":N}))}else return new m(r,A(e),Y.Default)}else{let t=m.EMPTY_NODE;return O(n,(i,s)=>{if(z(n,i)&&i.substring(0,1)!=="."){const r=A(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(A(e))}}Pl(A);/**
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
 */class Bl extends Bt{constructor(e){super(),this.indexPath_=e,f(!v(e)&&g(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?me(e.name,t.name):r}makePost(e,t){const i=A(e),s=m.EMPTY_NODE.updateChild(this.indexPath_,i);return new y(t,s)}maxPost(){const e=m.EMPTY_NODE.updateChild(this.indexPath_,lt);return new y(fe,e)}toString(){return Xe(this.indexPath_,0).join("/")}}/**
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
 */class $l extends Bt{compare(e,t){const i=e.node.compareTo(t.node);return i===0?me(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return y.MIN}maxPost(){return y.MAX}makePost(e,t){const i=A(e);return new y(t,i)}toString(){return".value"}}const Vl=new $l;/**
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
 */function Zs(n){return{type:"value",snapshotNode:n}}function Te(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Je(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ze(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Wl(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Gn{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Je(t,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Te(t,i)):o.trackChildChange(Ze(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(N,(s,r)=>{t.hasChild(s)||i.trackChildChange(Je(s,r))}),t.isLeafNode()||t.forEachChild(N,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Ze(s,r,o))}else i.trackChildChange(Te(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?m.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class et{constructor(e){this.indexedFilter_=new Gn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=et.getStartPost_(e),this.endPost_=et.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new y(t,i))||(i=m.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=m.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(m.EMPTY_NODE);const r=this;return t.forEachChild(N,(o,a)=>{r.matches(new y(o,a))||(s=s.updateImmediateChild(o,m.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Ul{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new et(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new y(t,i))||(i=m.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=m.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=m.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(m.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,m.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,p)=>d(p,h)}else o=this.index_.getCompare();const a=e;f(a.numChildren()===this.limit_,"");const l=new y(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,l);if(u&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Ze(t,i,d)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Je(t,d));const b=a.updateImmediateChild(t,m.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Te(h.name,h.node)),b.updateImmediateChild(h.name,h.node)):b}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Je(c.name,c.node)),r.trackChildChange(Te(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,m.EMPTY_NODE)):e}}/**
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
 */class jn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=N}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Se}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===N}copy(){const e=new jn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hl(n){return n.loadsAllData()?new Gn(n.getIndex()):n.hasLimit()?new Ul(n):new et(n)}function zi(n){const e={};if(n.isDefault())return e;let t;if(n.index_===N?t="$priority":n.index_===Vl?t="$value":n.index_===Ee?t="$key":(f(n.index_ instanceof Bl,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=P(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=P(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+P(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=P(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+P(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Gi(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==N&&(e.i=n.index_.toString()),e}/**
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
 */class St extends zs{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=at("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=St.getListenId_(e,i),a={};this.listens_[o]=a;const l=zi(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),Ie(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,t){const i=St.getListenId_(e,t);delete this.listens_[i]}get(e){const t=zi(e._queryParams),i=e._path.toString(),s=new st;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fo(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=qe(a.responseText)}catch{F("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&F("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */function Tt(){return{value:null,children:new Map}}function er(n,e,t){if(v(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=g(e);n.children.has(i)||n.children.set(i,Tt());const s=n.children.get(i);e=T(e),er(s,e,t)}}function bn(n,e,t){n.value!==null?t(e,n.value):Gl(n,(i,s)=>{const r=new w(e.toString()+"/"+i);bn(s,r,t)})}function Gl(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class jl{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&O(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const ji=10*1e3,ql=30*1e3,Yl=300*1e3;class Kl{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new jl(e);const i=ji+(ql-ji)*Math.random();He(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;O(e,(s,r)=>{r>0&&z(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),He(this.reportStats_.bind(this),Math.floor(Math.random()*2*Yl))}}/**
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
 */var U;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(U||(U={}));function qn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Kn(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class kt{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=U.ACK_USER_WRITE,this.source=qn()}operationForChild(e){if(v(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new w(e));return new kt(C(),t,this.revert)}}else return f(g(this.path)===e,"operationForChild called for unrelated child."),new kt(T(this.path),this.affectedTree,this.revert)}}/**
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
 */class tt{constructor(e,t){this.source=e,this.path=t,this.type=U.LISTEN_COMPLETE}operationForChild(e){return v(this.path)?new tt(this.source,C()):new tt(this.source,T(this.path))}}/**
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
 */class pe{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=U.OVERWRITE}operationForChild(e){return v(this.path)?new pe(this.source,C(),this.snap.getImmediateChild(e)):new pe(this.source,T(this.path),this.snap)}}/**
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
 */class ke{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=U.MERGE}operationForChild(e){if(v(this.path)){const t=this.children.subtree(new w(e));return t.isEmpty()?null:t.value?new pe(this.source,C(),t.value):new ke(this.source,C(),t)}else return f(g(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ke(this.source,T(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class re{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(v(e))return this.isFullyInitialized()&&!this.filtered_;const t=g(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Ql{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Xl(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Wl(o.childName,o.snapshotNode))}),Be(n,s,"child_removed",e,i,t),Be(n,s,"child_added",e,i,t),Be(n,s,"child_moved",r,i,t),Be(n,s,"child_changed",e,i,t),Be(n,s,"value",e,i,t),s}function Be(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Zl(n,a,l)),o.forEach(a=>{const l=Jl(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Jl(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Zl(n,e,t){if(e.childName==null||t.childName==null)throw Ae("Should only compare child_ events.");const i=new y(e.childName,e.snapshotNode),s=new y(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function $t(n,e){return{eventCache:n,serverCache:e}}function ze(n,e,t,i){return $t(new re(e,t,i),n.serverCache)}function tr(n,e,t,i){return $t(n.eventCache,new re(e,t,i))}function Nt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function _e(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let on;const ec=()=>(on||(on=new B(Ba)),on);class I{static fromObject(e){let t=new I(null);return O(e,(i,s)=>{t=t.set(new w(i),s)}),t}constructor(e,t=ec()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:C(),value:this.value};if(v(e))return null;{const i=g(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(T(e),t);return r!=null?{path:k(new w(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(v(e))return this;{const t=g(e),i=this.children.get(t);return i!==null?i.subtree(T(e)):new I(null)}}set(e,t){if(v(e))return new I(t,this.children);{const i=g(e),r=(this.children.get(i)||new I(null)).set(T(e),t),o=this.children.insert(i,r);return new I(this.value,o)}}remove(e){if(v(e))return this.children.isEmpty()?new I(null):new I(null,this.children);{const t=g(e),i=this.children.get(t);if(i){const s=i.remove(T(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new I(null):new I(this.value,r)}else return this}}get(e){if(v(e))return this.value;{const t=g(e),i=this.children.get(t);return i?i.get(T(e)):null}}setTree(e,t){if(v(e))return t;{const i=g(e),r=(this.children.get(i)||new I(null)).setTree(T(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new I(this.value,o)}}fold(e){return this.fold_(C(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(k(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,C(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(v(e))return null;{const r=g(e),o=this.children.get(r);return o?o.findOnPath_(T(e),k(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,C(),t)}foreachOnPath_(e,t,i){if(v(e))return this;{this.value&&i(t,this.value);const s=g(e),r=this.children.get(s);return r?r.foreachOnPath_(T(e),k(t,s),i):new I(null)}}foreach(e){this.foreach_(C(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(k(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class H{constructor(e){this.writeTree_=e}static empty(){return new H(new I(null))}}function Ge(n,e,t){if(v(e))return new H(new I(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=L(s,e);return r=r.updateChild(o,t),new H(n.writeTree_.set(s,r))}else{const s=new I(t),r=n.writeTree_.setTree(e,s);return new H(r)}}}function Cn(n,e,t){let i=n;return O(t,(s,r)=>{i=Ge(i,k(e,s),r)}),i}function qi(n,e){if(v(e))return H.empty();{const t=n.writeTree_.setTree(e,new I(null));return new H(t)}}function wn(n,e){return ge(n,e)!=null}function ge(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(L(t.path,e)):null}function Yi(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(N,(i,s)=>{e.push(new y(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new y(i,s.value))}),e}function ne(n,e){if(v(e))return n;{const t=ge(n,e);return t!=null?new H(new I(t)):new H(n.writeTree_.subtree(e))}}function En(n){return n.writeTree_.isEmpty()}function Ne(n,e){return nr(C(),n.writeTree_,e)}function nr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=nr(k(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(k(n,".priority"),i)),t}}/**
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
 */function Vt(n,e){return or(e,n)}function tc(n,e,t,i,s){f(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Ge(n.visibleWrites,e,t)),n.lastWriteId=i}function nc(n,e,t,i){f(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Cn(n.visibleWrites,e,t),n.lastWriteId=i}function ic(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function sc(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);f(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&rc(a,i.path)?s=!1:$(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return oc(n),!0;if(i.snap)n.visibleWrites=qi(n.visibleWrites,i.path);else{const a=i.children;O(a,l=>{n.visibleWrites=qi(n.visibleWrites,k(i.path,l))})}return!0}else return!1}function rc(n,e){if(n.snap)return $(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&$(k(n.path,t),e))return!0;return!1}function oc(n){n.visibleWrites=ir(n.allWrites,ac,C()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function ac(n){return n.visible}function ir(n,e,t){let i=H.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)$(t,o)?(a=L(t,o),i=Ge(i,a,r.snap)):$(o,t)&&(a=L(o,t),i=Ge(i,C(),r.snap.getChild(a)));else if(r.children){if($(t,o))a=L(t,o),i=Cn(i,a,r.children);else if($(o,t))if(a=L(o,t),v(a))i=Cn(i,C(),r.children);else{const l=Ie(r.children,g(a));if(l){const c=l.getChild(T(a));i=Ge(i,C(),c)}}}else throw Ae("WriteRecord should have .snap or .children")}}return i}function sr(n,e,t,i,s){if(!i&&!s){const r=ge(n.visibleWrites,e);if(r!=null)return r;{const o=ne(n.visibleWrites,e);if(En(o))return t;if(t==null&&!wn(o,C()))return null;{const a=t||m.EMPTY_NODE;return Ne(o,a)}}}else{const r=ne(n.visibleWrites,e);if(!s&&En(r))return t;if(!s&&t==null&&!wn(r,C()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&($(c.path,e)||$(e,c.path))},a=ir(n.allWrites,o,e),l=t||m.EMPTY_NODE;return Ne(a,l)}}}function lc(n,e,t){let i=m.EMPTY_NODE;const s=ge(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(N,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=ne(n.visibleWrites,e);return t.forEachChild(N,(o,a)=>{const l=Ne(ne(r,new w(o)),a);i=i.updateImmediateChild(o,l)}),Yi(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=ne(n.visibleWrites,e);return Yi(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function cc(n,e,t,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=k(e,t);if(wn(n.visibleWrites,r))return null;{const o=ne(n.visibleWrites,r);return En(o)?s.getChild(t):Ne(o,s.getChild(t))}}function hc(n,e,t,i){const s=k(e,t),r=ge(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=ne(n.visibleWrites,s);return Ne(o,i.getNode().getImmediateChild(t))}else return null}function dc(n,e){return ge(n.visibleWrites,e)}function uc(n,e,t,i,s,r,o){let a;const l=ne(n.visibleWrites,e),c=ge(l,C());if(c!=null)a=c;else if(t!=null)a=Ne(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=h.getNext();for(;p&&u.length<s;)d(p,i)!==0&&u.push(p),p=h.getNext();return u}else return[]}function fc(){return{visibleWrites:H.empty(),allWrites:[],lastWriteId:-1}}function Rt(n,e,t,i){return sr(n.writeTree,n.treePath,e,t,i)}function Qn(n,e){return lc(n.writeTree,n.treePath,e)}function Ki(n,e,t,i){return cc(n.writeTree,n.treePath,e,t,i)}function At(n,e){return dc(n.writeTree,k(n.treePath,e))}function pc(n,e,t,i,s,r){return uc(n.writeTree,n.treePath,e,t,i,s,r)}function Xn(n,e,t){return hc(n.writeTree,n.treePath,e,t)}function rr(n,e){return or(k(n.treePath,e),n.writeTree)}function or(n,e){return{treePath:n,writeTree:e}}/**
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
 */class _c{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;f(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Ze(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Je(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Te(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Ze(i,e.snapshotNode,s.oldSnap));else throw Ae("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class mc{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const ar=new mc;class Jn{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new re(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xn(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_e(this.viewCache_),r=pc(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function gc(n){return{filter:n}}function yc(n,e){f(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function vc(n,e,t,i,s){const r=new _c;let o,a;if(t.type===U.OVERWRITE){const c=t;c.source.fromUser?o=In(n,e,c.path,c.snap,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!v(c.path),o=Pt(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===U.MERGE){const c=t;c.source.fromUser?o=Cc(n,e,c.path,c.children,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Sn(n,e,c.path,c.children,i,s,a,r))}else if(t.type===U.ACK_USER_WRITE){const c=t;c.revert?o=Ic(n,e,c.path,i,s,r):o=wc(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===U.LISTEN_COMPLETE)o=Ec(n,e,t.path,i,r);else throw Ae("Unknown operation type: "+t.type);const l=r.getChanges();return bc(e,o,l),{viewCache:o,changes:l}}function bc(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Nt(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Zs(Nt(e)))}}function lr(n,e,t,i,s,r){const o=e.eventCache;if(At(i,t)!=null)return e;{let a,l;if(v(t))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=_e(e),u=c instanceof m?c:m.EMPTY_NODE,d=Qn(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Rt(i,_e(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=g(t);if(c===".priority"){f(se(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Ki(i,t,u,l);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=T(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Ki(i,t,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Xn(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return ze(e,a,o.isFullyInitialized()||v(t),n.filter.filtersNodes())}}function Pt(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(v(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),p,null)}else{const p=g(t);if(!l.isCompleteForPath(t)&&se(t)>1)return e;const _=T(t),R=l.getNode().getImmediateChild(p).updateChild(_,i);p===".priority"?c=u.updatePriority(l.getNode(),R):c=u.updateChild(l.getNode(),p,R,_,ar,null)}const d=tr(e,c,l.isFullyInitialized()||v(t),u.filtersNodes()),h=new Jn(s,d,r);return lr(n,d,t,s,h,a)}function In(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new Jn(s,e,r);if(v(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ze(e,c,!0,n.filter.filtersNodes());else{const d=g(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=ze(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=T(t),p=a.getNode().getImmediateChild(d);let _;if(v(h))_=i;else{const b=u.getCompleteChild(d);b!=null?Wn(h)===".priority"&&b.getChild(js(h)).isEmpty()?_=b:_=b.updateChild(h,i):_=m.EMPTY_NODE}if(p.equals(_))l=e;else{const b=n.filter.updateChild(a.getNode(),d,_,h,u,o);l=ze(e,b,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Qi(n,e){return n.eventCache.isCompleteForChild(e)}function Cc(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=k(t,l);Qi(e,g(u))&&(a=In(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=k(t,l);Qi(e,g(u))||(a=In(n,a,u,c,s,r,o))}),a}function Xi(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Sn(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;v(t)?c=i:c=new I(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),_=Xi(n,p,h);l=Pt(n,l,new w(d),_,s,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const p=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!p){const _=e.serverCache.getNode().getImmediateChild(d),b=Xi(n,_,h);l=Pt(n,l,new w(d),b,s,r,o,a)}}),l}function wc(n,e,t,i,s,r,o){if(At(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(v(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Pt(n,e,t,l.getNode().getChild(t),s,r,a,o);if(v(t)){let c=new I(null);return l.getNode().forEachChild(Ee,(u,d)=>{c=c.set(new w(u),d)}),Sn(n,e,t,c,s,r,a,o)}else return e}else{let c=new I(null);return i.foreach((u,d)=>{const h=k(t,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Sn(n,e,t,c,s,r,a,o)}}function Ec(n,e,t,i,s){const r=e.serverCache,o=tr(e,r.getNode(),r.isFullyInitialized()||v(t),r.isFiltered());return lr(n,o,t,i,ar,s)}function Ic(n,e,t,i,s,r){let o;if(At(i,t)!=null)return e;{const a=new Jn(i,e,s),l=e.eventCache.getNode();let c;if(v(t)||g(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Rt(i,_e(e));else{const d=e.serverCache.getNode();f(d instanceof m,"serverChildren would be complete if leaf node"),u=Qn(i,d)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=g(t);let d=Xn(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=n.filter.updateChild(l,u,d,T(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,m.EMPTY_NODE,T(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Rt(i,_e(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||At(i,C())!=null,ze(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Sc{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Gn(i.getIndex()),r=Hl(i);this.processor_=gc(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(m.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(m.EMPTY_NODE,a.getNode(),null),u=new re(l,o.isFullyInitialized(),s.filtersNodes()),d=new re(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=$t(d,u),this.eventGenerator_=new Ql(this.query_)}get query(){return this.query_}}function Tc(n){return n.viewCache_.serverCache.getNode()}function kc(n){return Nt(n.viewCache_)}function Nc(n,e){const t=_e(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!v(e)&&!t.getImmediateChild(g(e)).isEmpty())?t.getChild(e):null}function Ji(n){return n.eventRegistrations_.length===0}function Rc(n,e){n.eventRegistrations_.push(e)}function Zi(n,e,t){const i=[];if(t){f(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function es(n,e,t,i){e.type===U.MERGE&&e.source.queryId!==null&&(f(_e(n.viewCache_),"We should always have a full cache before handling merges"),f(Nt(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=vc(n.processor_,s,e,t,i);return yc(n.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,cr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Ac(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(N,(r,o)=>{i.push(Te(r,o))}),t.isFullyInitialized()&&i.push(Zs(t.getNode())),cr(n,i,t.getNode(),e)}function cr(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Xl(n.eventGenerator_,e,t,s)}/**
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
 */let xt;class hr{constructor(){this.views=new Map}}function Pc(n){f(!xt,"__referenceConstructor has already been defined"),xt=n}function xc(){return f(xt,"Reference.ts has not been loaded"),xt}function Dc(n){return n.views.size===0}function Zn(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),es(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(es(o,e,t,i));return r}}function dr(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Rt(t,s?i:null),l=!1;a?l=!0:i instanceof m?(a=Qn(t,i),l=!1):(a=m.EMPTY_NODE,l=!1);const c=$t(new re(a,l,!1),new re(i,s,!1));return new Sc(e,c)}return o}function Mc(n,e,t,i,s,r){const o=dr(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Rc(o,t),Ac(o,t)}function Oc(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=oe(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Zi(c,t,i)),Ji(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Zi(l,t,i)),Ji(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!oe(n)&&r.push(new(xc())(e._repo,e._path)),{removed:r,events:o}}function ur(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ie(n,e){let t=null;for(const i of n.views.values())t=t||Nc(i,e);return t}function fr(n,e){if(e._queryParams.loadsAllData())return Wt(n);{const i=e._queryIdentifier;return n.views.get(i)}}function pr(n,e){return fr(n,e)!=null}function oe(n){return Wt(n)!=null}function Wt(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Dt;function Lc(n){f(!Dt,"__referenceConstructor has already been defined"),Dt=n}function Fc(){return f(Dt,"Reference.ts has not been loaded"),Dt}let Bc=1;class ts{constructor(e){this.listenProvider_=e,this.syncPointTree_=new I(null),this.pendingWriteTree_=fc(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _r(n,e,t,i,s){return tc(n.pendingWriteTree_,e,t,i,s),s?De(n,new pe(qn(),e,t)):[]}function $c(n,e,t,i){nc(n.pendingWriteTree_,e,t,i);const s=I.fromObject(t);return De(n,new ke(qn(),e,s))}function Z(n,e,t=!1){const i=ic(n.pendingWriteTree_,e);if(sc(n.pendingWriteTree_,e)){let r=new I(null);return i.snap!=null?r=r.set(C(),!0):O(i.children,o=>{r=r.set(new w(o),!0)}),De(n,new kt(i.path,r,t))}else return[]}function ct(n,e,t){return De(n,new pe(Yn(),e,t))}function Vc(n,e,t){const i=I.fromObject(t);return De(n,new ke(Yn(),e,i))}function Wc(n,e){return De(n,new tt(Yn(),e))}function Uc(n,e,t){const i=ti(n,t);if(i){const s=ni(i),r=s.path,o=s.queryId,a=L(r,e),l=new tt(Kn(o),a);return ii(n,r,l)}else return[]}function Mt(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||pr(o,e))){const l=Oc(o,e,t,i);Dc(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(h,p)=>oe(p));if(u&&!d){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const p=Gc(h);for(let _=0;_<p.length;++_){const b=p[_],R=b.query,G=vr(n,b);n.listenProvider_.startListening(je(R),nt(n,R),G.hashFn,G.onComplete)}}}!d&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(je(e),null):c.forEach(h=>{const p=n.queryToTagMap.get(Ut(h));n.listenProvider_.stopListening(je(h),p)}))}jc(n,c)}return a}function mr(n,e,t,i){const s=ti(n,i);if(s!=null){const r=ni(s),o=r.path,a=r.queryId,l=L(o,e),c=new pe(Kn(a),l,t);return ii(n,o,c)}else return[]}function Hc(n,e,t,i){const s=ti(n,i);if(s){const r=ni(s),o=r.path,a=r.queryId,l=L(o,e),c=I.fromObject(t),u=new ke(Kn(a),l,c);return ii(n,o,u)}else return[]}function Tn(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,p)=>{const _=L(h,s);r=r||ie(p,_),o=o||oe(p)});let a=n.syncPointTree_.get(s);a?(o=o||oe(a),r=r||ie(a,C())):(a=new hr,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=m.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((p,_)=>{const b=ie(_,C());b&&(r=r.updateImmediateChild(p,b))}));const c=pr(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Ut(e);f(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=qc();n.queryToTagMap.set(h,p),n.tagToQueryMap.set(p,h)}const u=Vt(n.pendingWriteTree_,s);let d=Mc(a,e,t,u,r,l);if(!c&&!o&&!i){const h=fr(a,e);d=d.concat(Yc(n,e,h))}return d}function ei(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=L(o,e),c=ie(a,l);if(c)return c});return sr(s,e,r,t,!0)}function zc(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const d=L(c,t);i=i||ie(u,d)});let s=n.syncPointTree_.get(t);s?i=i||ie(s,C()):(s=new hr,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new re(i,!0,!1):null,a=Vt(n.pendingWriteTree_,e._path),l=dr(s,e,a,r?o.getNode():m.EMPTY_NODE,r);return kc(l)}function De(n,e){return gr(e,n.syncPointTree_,null,Vt(n.pendingWriteTree_,C()))}function gr(n,e,t,i){if(v(n.path))return yr(n,e,t,i);{const s=e.get(C());t==null&&s!=null&&(t=ie(s,C()));let r=[];const o=g(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=rr(i,o);r=r.concat(gr(a,l,c,u))}return s&&(r=r.concat(Zn(s,n,i,t))),r}}function yr(n,e,t,i){const s=e.get(C());t==null&&s!=null&&(t=ie(s,C()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=rr(i,o),u=n.operationForChild(o);u&&(r=r.concat(yr(u,a,l,c)))}),s&&(r=r.concat(Zn(s,n,i,t))),r}function vr(n,e){const t=e.query,i=nt(n,t);return{hashFn:()=>(Tc(e)||m.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Uc(n,t._path,i):Wc(n,t._path);{const r=Wa(s,t);return Mt(n,t,null,r)}}}}function nt(n,e){const t=Ut(e);return n.queryToTagMap.get(t)}function Ut(n){return n._path.toString()+"$"+n._queryIdentifier}function ti(n,e){return n.tagToQueryMap.get(e)}function ni(n){const e=n.indexOf("$");return f(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new w(n.substr(0,e))}}function ii(n,e,t){const i=n.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=Vt(n.pendingWriteTree_,e);return Zn(i,t,s,null)}function Gc(n){return n.fold((e,t,i)=>{if(t&&oe(t))return[Wt(t)];{let s=[];return t&&(s=ur(t)),O(i,(r,o)=>{s=s.concat(o)}),s}})}function je(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Fc())(n._repo,n._path):n}function jc(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Ut(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function qc(){return Bc++}function Yc(n,e,t){const i=e._path,s=nt(n,e),r=vr(n,t),o=n.listenProvider_.startListening(je(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)f(!oe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!v(c)&&u&&oe(u))return[Wt(u).query];{let h=[];return u&&(h=h.concat(ur(u).map(p=>p.query))),O(d,(p,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(je(u),nt(n,u))}}return o}/**
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
 */class si{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new si(t)}node(){return this.node_}}class ri{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=k(this.path_,e);return new ri(this.syncTree_,t)}node(){return ei(this.syncTree_,this.path_)}}const Kc=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ns=function(n,e,t){if(!n||typeof n!="object")return n;if(f(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Qc(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Xc(n[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Qc=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:f(!1,"Unexpected server value: "+n)}},Xc=function(n,e,t){n.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},br=function(n,e,t,i){return oi(e,new ri(t,n),i)},Cr=function(n,e,t){return oi(n,new si(e),t)};function oi(n,e,t){const i=n.getPriority().val(),s=ns(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=ns(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new x(a,A(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new x(s))),o.forEachChild(N,(a,l)=>{const c=oi(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class ai{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function li(n,e){let t=e instanceof w?e:new w(e),i=n,s=g(t);for(;s!==null;){const r=Ie(i.node.children,s)||{children:{},childCount:0};i=new ai(s,i,r),t=T(t),s=g(t)}return i}function Me(n){return n.node.value}function wr(n,e){n.node.value=e,kn(n)}function Er(n){return n.node.childCount>0}function Jc(n){return Me(n)===void 0&&!Er(n)}function Ht(n,e){O(n.node.children,(t,i)=>{e(new ai(t,n,i))})}function Ir(n,e,t,i){t&&e(n),Ht(n,s=>{Ir(s,e,!0)})}function Zc(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ht(n){return new w(n.parent===null?n.name:ht(n.parent)+"/"+n.name)}function kn(n){n.parent!==null&&eh(n.parent,n.name,n)}function eh(n,e,t){const i=Jc(t),s=z(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,kn(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,kn(n))}/**
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
 */const th=/[\[\].#$\/\u0000-\u001F\u007F]/,nh=/[\[\].#$\u0000-\u001F\u007F]/,an=10*1024*1024,ci=function(n){return typeof n=="string"&&n.length!==0&&!th.test(n)},Sr=function(n){return typeof n=="string"&&n.length!==0&&!nh.test(n)},ih=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Sr(n)},sh=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Ln(n)||n&&typeof n=="object"&&z(n,".sv")},rh=function(n,e,t,i){zt(Lt(n,"value"),e,t)},zt=function(n,e,t){const i=t instanceof w?new Cl(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+he(i));if(typeof e=="function")throw new Error(n+"contains a function "+he(i)+" with contents = "+e.toString());if(Ln(e))throw new Error(n+"contains "+e.toString()+" "+he(i));if(typeof e=="string"&&e.length>an/3&&Ft(e)>an)throw new Error(n+"contains a string greater than "+an+" utf8 bytes "+he(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(O(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ci(o)))throw new Error(n+" contains an invalid key ("+o+") "+he(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);wl(i,o),zt(n,a,i),El(i)}),s&&r)throw new Error(n+' contains ".value" child '+he(i)+" in addition to actual children.")}},oh=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=Xe(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!ci(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(bl);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&$(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},ah=function(n,e,t,i){const s=Lt(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];O(e,(o,a)=>{const l=new w(o);if(zt(s,a,k(t,l)),Wn(l)===".priority"&&!sh(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),oh(s,r)},Tr=function(n,e,t,i){if(!Sr(t))throw new Error(Lt(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lh=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Tr(n,e,t)},kr=function(n,e){if(g(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},ch=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ci(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ih(t))throw new Error(Lt(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class hh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gt(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Un(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Nr(n,e,t){Gt(n,t),Rr(n,i=>Un(i,e))}function V(n,e,t){Gt(n,t),Rr(n,i=>$(i,e)||$(e,i))}function Rr(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(dh(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function dh(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Ue&&M("event: "+t.toString()),xe(i)}}}/**
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
 */const uh="repo_interrupt",fh=25;class ph{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new hh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tt(),this.transactionQueueTree_=new ai,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _h(n,e,t){if(n.stats_=$n(n.repoInfo_),n.forceRestClient_||Ga())n.server_=new St(n.repoInfo_,(i,s,r,o)=>{is(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ss(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{P(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new K(n.repoInfo_,e,(i,s,r,o)=>{is(n,i,s,r,o)},i=>{ss(n,i)},i=>{gh(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Qa(n.repoInfo_,()=>new Kl(n.stats_,n.server_)),n.infoData_=new zl,n.infoSyncTree_=new ts({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=ct(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),hi(n,"connected",!1),n.serverSyncTree_=new ts({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);V(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function mh(n){const t=n.infoData_.getNode(new w(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function jt(n){return Kc({timestamp:mh(n)})}function is(n,e,t,i,s){n.dataUpdateCount++;const r=new w(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=yt(t,c=>A(c));o=Hc(n.serverSyncTree_,r,l,s)}else{const l=A(t);o=mr(n.serverSyncTree_,r,l,s)}else if(i){const l=yt(t,c=>A(c));o=Vc(n.serverSyncTree_,r,l)}else{const l=A(t);o=ct(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Re(n,r)),V(n.eventQueue_,a,o)}function ss(n,e){hi(n,"connected",e),e===!1&&Ch(n)}function gh(n,e){O(e,(t,i)=>{hi(n,t,i)})}function hi(n,e,t){const i=new w("/.info/"+e),s=A(t);n.infoData_.updateSnapshot(i,s);const r=ct(n.infoSyncTree_,i,s);V(n.eventQueue_,i,r)}function di(n){return n.nextWriteId_++}function yh(n,e,t){const i=zc(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=A(s).withIndex(e._queryParams.getIndex());Tn(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=ct(n.serverSyncTree_,e._path,r);else{const a=nt(n.serverSyncTree_,e);o=mr(n.serverSyncTree_,e._path,r,a)}return V(n.eventQueue_,e._path,o),Mt(n.serverSyncTree_,e,t,null,!0),r},s=>(dt(n,"get for query "+P(e)+" failed: "+s),Promise.reject(new Error(s))))}function vh(n,e,t,i,s){dt(n,"set",{path:e.toString(),value:t,priority:i});const r=jt(n),o=A(t,i),a=ei(n.serverSyncTree_,e),l=Cr(o,a,r),c=di(n),u=_r(n.serverSyncTree_,e,l,c,!0);Gt(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(h,p)=>{const _=h==="ok";_||F("set at "+e+" failed: "+h);const b=Z(n.serverSyncTree_,c,!_);V(n.eventQueue_,e,b),Nn(n,s,h,p)});const d=fi(n,e);Re(n,d),V(n.eventQueue_,d,[])}function bh(n,e,t,i){dt(n,"update",{path:e.toString(),value:t});let s=!0;const r=jt(n),o={};if(O(t,(a,l)=>{s=!1,o[a]=br(k(e,a),A(l),n.serverSyncTree_,r)}),s)M("update() called with empty data.  Don't do anything."),Nn(n,i,"ok",void 0);else{const a=di(n),l=$c(n.serverSyncTree_,e,o,a);Gt(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,u)=>{const d=c==="ok";d||F("update at "+e+" failed: "+c);const h=Z(n.serverSyncTree_,a,!d),p=h.length>0?Re(n,e):e;V(n.eventQueue_,p,h),Nn(n,i,c,u)}),O(t,c=>{const u=fi(n,k(e,c));Re(n,u)}),V(n.eventQueue_,e,[])}}function Ch(n){dt(n,"onDisconnectEvents");const e=jt(n),t=Tt();bn(n.onDisconnect_,C(),(s,r)=>{const o=br(s,r,n.serverSyncTree_,e);er(t,s,o)});let i=[];bn(t,C(),(s,r)=>{i=i.concat(ct(n.serverSyncTree_,s,r));const o=fi(n,s);Re(n,o)}),n.onDisconnect_=Tt(),V(n.eventQueue_,C(),i)}function wh(n,e,t){let i;g(e._path)===".info"?i=Tn(n.infoSyncTree_,e,t):i=Tn(n.serverSyncTree_,e,t),Nr(n.eventQueue_,e._path,i)}function Eh(n,e,t){let i;g(e._path)===".info"?i=Mt(n.infoSyncTree_,e,t):i=Mt(n.serverSyncTree_,e,t),Nr(n.eventQueue_,e._path,i)}function Ih(n){n.persistentConnection_&&n.persistentConnection_.interrupt(uh)}function dt(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),M(t,...e)}function Nn(n,e,t,i){e&&xe(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Ar(n,e,t){return ei(n.serverSyncTree_,e,t)||m.EMPTY_NODE}function ui(n,e=n.transactionQueueTree_){if(e||qt(n,e),Me(e)){const t=xr(n,e);f(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Sh(n,ht(e),t)}else Er(e)&&Ht(e,t=>{ui(n,t)})}function Sh(n,e,t){const i=t.map(c=>c.currentWriteId),s=Ar(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];f(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=L(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{dt(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat(Z(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();qt(n,li(n.transactionQueueTree_,e)),ui(n,n.transactionQueueTree_),V(n.eventQueue_,e,u);for(let h=0;h<d.length;h++)xe(d[h])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{F("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}Re(n,e)}},o)}function Re(n,e){const t=Pr(n,e),i=ht(t),s=xr(n,t);return Th(n,s,i),i}function Th(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=L(t,l.path);let u=!1,d;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(Z(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=fh)u=!0,d="maxretry",s=s.concat(Z(n.serverSyncTree_,l.currentWriteId,!0));else{const h=Ar(n,l.path,o);l.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){zt("transaction failed: Data returned ",p,l.path);let _=A(p);typeof p=="object"&&p!=null&&z(p,".priority")||(_=_.updatePriority(h.getPriority()));const R=l.currentWriteId,G=jt(n),j=Cr(_,h,G);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=j,l.currentWriteId=di(n),o.splice(o.indexOf(R),1),s=s.concat(_r(n.serverSyncTree_,l.path,j,l.currentWriteId,l.applyLocally)),s=s.concat(Z(n.serverSyncTree_,R,!0))}else u=!0,d="nodata",s=s.concat(Z(n.serverSyncTree_,l.currentWriteId,!0))}V(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,(function(h){setTimeout(h,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}qt(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)xe(i[a]);ui(n,n.transactionQueueTree_)}function Pr(n,e){let t,i=n.transactionQueueTree_;for(t=g(e);t!==null&&Me(i)===void 0;)i=li(i,t),e=T(e),t=g(e);return i}function xr(n,e){const t=[];return Dr(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Dr(n,e,t){const i=Me(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Ht(e,s=>{Dr(n,s,t)})}function qt(n,e){const t=Me(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,wr(e,t.length>0?t:void 0)}Ht(e,i=>{qt(n,i)})}function fi(n,e){const t=ht(Pr(n,e)),i=li(n.transactionQueueTree_,e);return Zc(i,s=>{ln(n,s)}),ln(n,i),Ir(i,s=>{ln(n,s)}),t}function ln(n,e){const t=Me(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(f(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Z(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?wr(e,void 0):t.length=r+1,V(n.eventQueue_,ht(e),s);for(let o=0;o<i.length;o++)xe(i[o])}}/**
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
 */function kh(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Nh(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):F(`Invalid query segment '${t}' in query '${n}'`)}return e}const rs=function(n,e){const t=Rh(n),i=t.namespace;t.domain==="firebase.com"&&X(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&X("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||La();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Fs(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new w(t.pathString)}},Rh=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(s=kh(n.substring(u,d)));const h=Nh(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class Ah{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+P(this.snapshot.exportVal())}}class Ph{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Mr{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class pi{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return v(this._path)?null:Wn(this._path)}get ref(){return new J(this._repo,this._path)}get _queryIdentifier(){const e=Gi(this._queryParams),t=Fn(e);return t==="{}"?"default":t}get _queryObject(){return Gi(this._queryParams)}isEqual(e){if(e=Pe(e),!(e instanceof pi))return!1;const t=this._repo===e._repo,i=Un(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+vl(this._path)}}class J extends pi{constructor(e,t){super(e,t,new jn,!1)}get parent(){const e=js(this._path);return e===null?null:new J(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class it{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new w(e),i=Rn(this.ref,e);return new it(this._node.getChild(t),i,N)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new it(s,Rn(this.ref,i),N)))}hasChild(e){const t=new w(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function le(n,e){return n=Pe(n),n._checkNotDeleted("ref"),e!==void 0?Rn(n._root,e):n._root}function Rn(n,e){return n=Pe(n),g(n._path)===null?lh("child","path",e):Tr("child","path",e),new J(n._repo,k(n._path,e))}function xh(n){return kr("remove",n._path),An(n,null)}function An(n,e){n=Pe(n),kr("set",n._path),rh("set",e,n._path);const t=new st;return vh(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function os(n,e){ah("update",e,n._path);const t=new st;return bh(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Dh(n){n=Pe(n);const e=new Mr(()=>{}),t=new Yt(e);return yh(n._repo,n,t).then(i=>new it(i,new J(n._repo,n._path),n._queryParams.getIndex()))}class Yt{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Ah("value",this,new it(e.snapshotNode,new J(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ph(this,e,t):null}matches(e){return e instanceof Yt?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Mh(n,e,t,i,s){const r=new Mr(t,void 0),o=new Yt(r);return wh(n._repo,n,o),()=>Eh(n._repo,n,o)}function Oh(n,e,t,i){return Mh(n,"value",e)}Pc(J);Lc(J);/**
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
 */const Lh="FIREBASE_DATABASE_EMULATOR_HOST",Pn={};let Fh=!1;function Bh(n,e,t,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=Mn(r);n.repoInfo_=new Fs(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function $h(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||X("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),M("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=rs(r,s),a=o.repoInfo,l;typeof process<"u"&&ki&&(l=ki[Lh]),l?(r=`http://${l}?ns=${a.namespace}`,o=rs(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new qa(n.name,n.options,e);ch("Invalid Firebase Database URL",o),v(o.path)||X("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Wh(a,n,c,new ja(n,t));return new Uh(u,n)}function Vh(n,e){const t=Pn[e];(!t||t[n.key]!==n)&&X(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Ih(n),delete t[n.key]}function Wh(n,e,t,i){let s=Pn[e.name];s||(s={},Pn[e.name]=s);let r=s[n.toURLString()];return r&&X("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ph(n,Fh,t,i),s[n.toURLString()]=r,r}class Uh{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_h(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new J(this._repo,C())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Vh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&X("Cannot call "+e+" on a deleted database.")}}function Hh(n=ga(),e){const t=ua(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Qr("database");i&&zh(t,...i)}return t}function zh(n,e,t,i={}){n=Pe(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&vt(i,r.repoInfo_.emulatorOptions))return;X("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&X('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new _t(_t.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:Jr(i.mockUserToken,n.app.options.projectId);o=new _t(a)}Mn(e)&&(Xr(e),to("Database",!0)),Bh(r,s,i,o)}/**
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
 */function Gh(n){Aa(ma),Ct(new Ye("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return $h(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Ce(Ni,Ri,n),Ce(Ni,Ri,"esm2017")}K.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};K.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Gh();const ve={apiKey:"AIzaSyBSYPtrO2epyTqzUPLNPImvuhm3mNQ7dpQ",authDomain:"sudoku-duel-5ea35.firebaseapp.com",databaseURL:"https://sudoku-duel-5ea35-default-rtdb.europe-west1.firebasedatabase.app",projectId:"sudoku-duel-5ea35",storageBucket:"sudoku-duel-5ea35.firebasestorage.app",messagingSenderId:"115243796177",appId:"1:115243796177:web:55c762dc83e8493236a7f0"};function jh(){return!!(ve.apiKey&&ve.authDomain&&ve.databaseURL&&ve.projectId&&ve.appId)}class qh{constructor(){E(this,"app",null);E(this,"database",null)}ensureDatabase(){if(!jh())throw new Error("Firebase is not configured. Fill src/config/firebaseConfig.ts first.");return(!this.app||!this.database)&&(this.app=bs(ve),this.database=Hh(this.app)),this.database}async createRoom(e){const t=this.ensureDatabase();await An(le(t,`rooms/${e.roomCode}`),e)}async getRoom(e){const t=this.ensureDatabase(),i=await Dh(le(t,`rooms/${e}`));return i.exists()?i.val():null}subscribeToRoom(e,t){const i=this.ensureDatabase(),s=le(i,`rooms/${e}`);return Oh(s,r=>{t(r.exists()?r.val():null)})}async updateRoom(e,t){const i=this.ensureDatabase();await os(le(i,`rooms/${e}`),t)}async updatePlayer(e,t,i){const s=this.ensureDatabase();await os(le(s,`rooms/${e}/players/${t}`),i)}async addActiveEffect(e,t){const i=this.ensureDatabase();await An(le(i,`rooms/${e}/activeEffects/${t.id}`),t)}async removeActiveEffect(e,t){const i=this.ensureDatabase();await xh(le(i,`rooms/${e}/activeEffects/${t}`))}}const cn=2,Yh=4,ue={easy:{label:"Easy",durationSeconds:300},medium:{label:"Medium",durationSeconds:480},hard:{label:"Hard",durationSeconds:720}},$e={correctCell:100,completedBlock:1e3,completedBoard:1e4,timeBonusPerTenSeconds:100,errorPenaltyStep:.25},Kh=1,Qh=2,Ot=[{type:"dark-flash",label:"Dark Flash",description:"Darkens opponent board for 5 seconds.",durationSeconds:5,weight:40},{type:"freeze-notes",label:"Freeze Notes",description:"Disables opponent notes for 10 seconds.",durationSeconds:10,weight:30},{type:"erase-notes",label:"Erase Notes",description:"Erases notes in selected opponent block.",durationSeconds:0,weight:20},{type:"peek-block",label:"Peek Block",description:"Shows selected opponent block for 5 seconds.",durationSeconds:5,weight:10}];function Xh(n=6){const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let t="";for(let i=0;i<n;i+=1)t+=e[Math.floor(Math.random()*e.length)];return t}function xn(n="id"){return`${n}-${Date.now()}-${Math.random().toString(36).slice(2,10)}`}const as=[{id:"easy-001",difficulty:"easy",puzzle:[5,3,0,0,7,0,0,0,0,6,0,0,1,9,5,0,0,0,0,9,8,0,0,0,0,6,0,8,0,0,0,6,0,0,0,3,4,0,0,8,0,3,0,0,1,7,0,0,0,2,0,0,0,6,0,6,0,0,0,0,2,8,0,0,0,0,4,1,9,0,0,5,0,0,0,0,8,0,0,7,9],solution:[5,3,4,6,7,8,9,1,2,6,7,2,1,9,5,3,4,8,1,9,8,3,4,2,5,6,7,8,5,9,7,6,1,4,2,3,4,2,6,8,5,3,7,9,1,7,1,3,9,2,4,8,5,6,9,6,1,5,3,7,2,8,4,2,8,7,4,1,9,6,3,5,3,4,5,2,8,6,1,7,9]},{id:"medium-001",difficulty:"medium",puzzle:[0,0,0,6,0,0,4,0,0,7,0,0,0,0,3,6,0,0,0,0,0,0,9,1,0,8,0,0,0,0,0,0,0,0,0,0,0,5,0,1,8,0,0,0,3,0,0,0,3,0,6,0,4,5,0,4,0,2,0,0,0,6,0,9,0,3,0,0,0,0,0,0,0,2,0,0,0,0,1,0,0],solution:[5,8,1,6,7,2,4,3,9,7,9,2,8,4,3,6,5,1,3,6,4,5,9,1,7,8,2,4,3,8,9,5,7,2,1,6,2,5,6,1,8,4,9,7,3,1,7,9,3,2,6,8,4,5,8,4,5,2,1,9,3,6,7,9,1,3,7,6,8,5,2,4,6,2,7,4,3,5,1,9,8]},{id:"hard-001",difficulty:"hard",puzzle:[0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,1,0,9,5,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,1,0,9,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,6,3,0,9,0,0,0,0,0,0,0,0,0,0,0,4,9,0,0,0,0,0,0,0],solution:[9,5,6,3,8,4,7,1,2,8,3,4,7,1,2,5,9,6,7,2,1,6,9,5,8,4,3,1,6,9,8,2,3,4,5,7,5,4,7,1,6,9,2,3,8,2,8,3,5,4,7,1,6,9,6,7,2,4,3,8,9,5,1,3,1,5,9,7,6,4,2,8,4,9,8,2,5,1,3,7,6]}];class Or{getPuzzleById(e){const t=as.find(i=>i.id===e);if(!t)throw new Error(`Puzzle not found: ${e}`);return t}getRandomPuzzleByDifficulty(e){const t=as.filter(i=>i.difficulty===e);if(t.length===0)throw new Error(`No puzzles for difficulty: ${e}`);return t[Math.floor(Math.random()*t.length)]}createBoard(e){const t=e.puzzle.map((i,s)=>{const r=Math.floor(s/9),o=s%9,a=Math.floor(r/3)*3+Math.floor(o/3),l=i===0?null:i;return{index:s,row:r,column:o,block:a,givenValue:l,currentValue:l,solutionValue:e.solution[s],notes:[],isGiven:l!==null,isCorrect:l!==null,isWrong:!1}});return{puzzleId:e.id,cells:t}}enterValue(e,t,i){const s=e.cells[t];if(!s||s.isGiven)return{board:e,isCorrect:!1,isCompleted:this.isBoardCompleted(e)};const r=s.solutionValue===i,o={...e,cells:e.cells.map(a=>a.index!==t?a:{...a,currentValue:i,notes:r?[]:a.notes,isCorrect:r,isWrong:!r})};return{board:o,isCorrect:r,isCompleted:this.isBoardCompleted(o)}}clearValue(e,t){return{...e,cells:e.cells.map(i=>i.index!==t||i.isGiven?i:{...i,currentValue:null,notes:[],isCorrect:!1,isWrong:!1})}}toggleNote(e,t,i){return{...e,cells:e.cells.map(s=>{if(s.index!==t||s.isGiven||s.currentValue!==null)return s;const o=s.notes.includes(i)?s.notes.filter(a=>a!==i):[...s.notes,i].sort((a,l)=>a-l);return{...s,notes:o}})}}eraseNotesInBlock(e,t){return{...e,cells:e.cells.map(i=>i.block!==t?i:{...i,notes:[]})}}calculateProgress(e){const t=e.cells.filter(i=>i.isCorrect).length;return Math.round(t/e.cells.length*100)}createPublicBoard(e){return e.cells.map(t=>t.isCorrect&&t.currentValue?t.currentValue:0)}isBoardCompleted(e){return e.cells.every(t=>t.isCorrect&&t.currentValue===t.solutionValue)}}class Jh{constructor(e){E(this,"sudokuService",new Or);this.firebaseService=e}async createRoom(e){const t=Xh(),i=xn("player"),s=Date.now(),r=this.createPlayer(i,e,"host"),o={roomCode:t,status:"waiting",difficulty:"easy",puzzleId:null,createdAt:s,startedAt:null,finishedAt:null,durationSeconds:ue.easy.durationSeconds,hostPlayerId:i,players:{[i]:r},activeEffects:{},winnerPlayerId:null,finishReason:null};return await this.firebaseService.createRoom(o),{roomCode:t,playerId:i}}async joinRoom(e,t){const i=await this.firebaseService.getRoom(e);if(!i)throw new Error("Room not found.");if(Object.values(i.players).length>=cn)throw new Error("Room is full.");const r=xn("player"),o=this.createPlayer(r,t,"guest");return await this.firebaseService.updateRoom(e,{status:"lobby",players:{...i.players,[r]:o}}),{playerId:r}}async setReady(e,t,i){await this.firebaseService.updatePlayer(e,t,{ready:i})}async setDifficulty(e,t){await this.firebaseService.updateRoom(e,{difficulty:t,durationSeconds:ue[t].durationSeconds})}async tryStartGame(e,t){const i=Object.values(t.players);if(t.status==="playing"||t.status==="finished"||i.length!==cn||!i.every(c=>c.ready))return;const s=this.sudokuService.getRandomPuzzleByDifficulty(t.difficulty),r=this.sudokuService.createBoard(s),o=this.sudokuService.createPublicBoard(r),a=this.sudokuService.calculateProgress(r),l={};for(const[c,u]of Object.entries(t.players))l[c]={...u,score:0,errors:0,progress:a,isFrozen:!1,finishedAt:null,abilities:u.abilities??[],completedRows:[],completedColumns:[],completedBlocks:[],publicBoard:o};await this.firebaseService.updateRoom(e,{status:"playing",puzzleId:s.id,startedAt:Date.now(),durationSeconds:ue[t.difficulty].durationSeconds,players:l,activeEffects:{},winnerPlayerId:null,finishReason:null})}async finishGame(e,t,i){await this.firebaseService.updateRoom(e,{status:"finished",finishedAt:Date.now(),finishReason:t,winnerPlayerId:i})}async resetRoomForRematch(e){const t=await this.firebaseService.getRoom(e);if(!t)throw new Error("Room not found.");const i={};for(const[s,r]of Object.entries(t.players))i[s]={...r,ready:!1,connected:!0,score:0,errors:0,progress:0,isFrozen:!1,finishedAt:null,abilities:[],completedRows:[],completedColumns:[],completedBlocks:[],publicBoard:Array(81).fill(0)};await this.firebaseService.updateRoom(e,{status:Object.keys(i).length>=cn?"lobby":"waiting",puzzleId:null,startedAt:null,finishedAt:null,durationSeconds:ue[t.difficulty].durationSeconds,players:i,activeEffects:{},winnerPlayerId:null,finishReason:null})}async leaveRoom(e,t){const i=await this.firebaseService.getRoom(e);if(!i)return;if(i.status==="playing"){await this.finishGame(e,"player-left",this.findOpponentId(i,t));return}const s={...i.players};delete s[t],await this.firebaseService.updateRoom(e,{players:s,status:Object.keys(s).length===0?"finished":"waiting"})}createPlayer(e,t,i){return{id:e,nickname:t,role:i,ready:!1,connected:!0,score:0,errors:0,progress:0,isFrozen:!1,finishedAt:null,abilities:[],completedRows:[],completedColumns:[],completedBlocks:[],publicBoard:Array(81).fill(0)}}findOpponentId(e,t){const i=Object.values(e.players).find(s=>s.id!==t);return(i==null?void 0:i.id)??null}}class Zh{constructor(){E(this,"playerIdKey","sudoku-duel:player-id");E(this,"nicknameKey","sudoku-duel:nickname")}savePlayerId(e){localStorage.setItem(this.playerIdKey,e)}getPlayerId(){return localStorage.getItem(this.playerIdKey)}saveNickname(e){localStorage.setItem(this.nicknameKey,e)}getNickname(){return localStorage.getItem(this.nicknameKey)}clearSession(){localStorage.removeItem(this.playerIdKey)}}class ed{getMultiplier(e){return e>=4?0:1-e*$e.errorPenaltyStep}getCellScore(e){return Math.round($e.correctCell*this.getMultiplier(e))}getBlockScore(e){return Math.round($e.completedBlock*this.getMultiplier(e))}getCompletionScore(e){return Math.round($e.completedBoard*this.getMultiplier(e))}getTimeBonus(e,t){const i=Math.floor(Math.max(0,e)/10);return Math.round(i*$e.timeBonusPerTenSeconds*this.getMultiplier(t))}}function td(n){const e=n.reduce((i,s)=>i+s.weight,0);let t=Math.random()*e;for(const i of n)if(t-=i.weight,t<=0)return i.item;return n[n.length-1].item}class nd{rollAbility(){return Math.random()>Kh?null:this.getRandomAbilityByWeight()}getRandomAbilityByWeight(){return td(Ot.map(e=>({item:e.type,weight:e.weight})))}isBlockTargetAbility(e){return e==="peek-block"||e==="erase-notes"}createEffect(e,t,i,s){const r=Ot.find(c=>c.type===e);if(!r)throw new Error(`Unknown ability: ${e}`);if(this.isBlockTargetAbility(e)&&(s===void 0||s<0||s>8))throw new Error("Selected block index must be between 0 and 8.");const o=Date.now(),a=Math.max(r.durationSeconds,3)*1e3,l={id:xn("effect"),type:e,fromPlayerId:t,targetPlayerId:i,createdAt:o,expiresAt:o+a};return s!==void 0&&(l.payload={blockIndex:s}),l}removeAbilityFromInventory(e,t){const i=e.indexOf(t);return i===-1?e:[...e.slice(0,i),...e.slice(i+1)]}addAbilityToInventory(e,t){return e.length>=Qh?e:[...e,t]}}class id{getRowIndex(e){return Math.floor(e/9)}getColumnIndex(e){return e%9}getBlockIndex(e){const t=this.getRowIndex(e),i=this.getColumnIndex(e);return Math.floor(t/3)*3+Math.floor(i/3)}getBlockCellIndexes(e){const t=Math.floor(e/3)*3,i=e%3*3,s=[];for(let r=t;r<t+3;r+=1)for(let o=i;o<i+3;o+=1)s.push(r*9+o);return s}isBlockCompleted(e,t){return this.getBlockCellIndexes(t).every(s=>e.cells[s].isCorrect)}getNewCompletedBlocks(e,t){const i=[];for(let s=0;s<9;s+=1)t.includes(s)||this.isBlockCompleted(e,s)&&i.push(s);return i}}function sd(n){const e=Math.max(0,n),t=Math.floor(e/60),i=e%60;return`${t}:${i.toString().padStart(2,"0")}`}class rd{getRemainingSeconds(e,t){const i=Math.floor((Date.now()-e)/1e3);return Math.max(0,t-i)}isTimeEnded(e,t){return this.getRemainingSeconds(e,t)<=0}formatTime(e){return sd(e)}}class Kt{constructor(e="app"){E(this,"root");const t=document.getElementById(e);if(!t)throw new Error("Root element not found.");this.root=t}setHTML(e){this.root.innerHTML=e}clear(){this.root.innerHTML=""}}class od extends Kt{render(e="",t=""){this.setHTML(`
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
    `)}getNickname(){var e;return((e=document.getElementById("nickname-input"))==null?void 0:e.value.trim())??""}getRoomCode(){var e;return((e=document.getElementById("room-code-input"))==null?void 0:e.value.trim().toUpperCase())??""}onCreateRoom(e){var t;(t=document.getElementById("create-room-button"))==null||t.addEventListener("click",e)}onJoinRoom(e){var t;(t=document.getElementById("join-room-button"))==null||t.addEventListener("click",e)}showError(e){alert(e)}}class ad extends Kt{render(e,t,i){const s=e.players[t],r=e.hostPlayerId===t,o=Object.values(e.players),a=o.filter(c=>c.ready).length,l=i||`${window.location.origin}${window.location.pathname}#/home?room=${encodeURIComponent(e.roomCode)}`;this.setHTML(`
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
              ${s!=null&&s.ready?"Cancel ready":"Ready"}
            </button>
            <button id="leave-button" class="ghost-button">Leave room</button>
          </div>
        </section>
      </main>
    `)}onReadyChange(e){var t;(t=document.getElementById("ready-button"))==null||t.addEventListener("click",()=>{var s;const i=((s=document.getElementById("ready-button"))==null?void 0:s.textContent)??"";e(i.includes("Ready"))})}onDifficultyChange(e){var t;(t=document.getElementById("difficulty-select"))==null||t.addEventListener("change",i=>{e(i.target.value)})}onCopyInviteLink(e){var t;(t=document.getElementById("copy-invite-button"))==null||t.addEventListener("click",e)}onLeaveRoom(e){var t;(t=document.getElementById("leave-button"))==null||t.addEventListener("click",e)}}class ld{render(e){if(e.length===0)return`
        <div class="ability-panel ability-panel--empty">
          <p>No abilities yet.</p>
          <span>Complete a 3x3 block to get one.</span>
        </div>
      `;const t=e.reduce((i,s)=>(i[s]=(i[s]??0)+1,i),{});return`
      <div class="ability-panel">
        ${Object.entries(t).map(([i,s])=>{const r=i,o=Ot.find(a=>a.type===r);return`
            <button
              type="button"
              class="ability-button ability-button--${r}"
              data-ability-type="${r}"
              title="${(o==null?void 0:o.description)??r}"
            >
              <span class="ability-button__name">${(o==null?void 0:o.label)??r}</span>
              <span class="ability-button__count">×${s}</span>
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
    `:`<section class="status-card muted">${e}: waiting...</section>`}}class hd{render(e,t,i=[]){const s=t!==null?e.cells[t]:null;return`
      <div class="sudoku-board">
        ${e.cells.map(r=>this.renderCell(r,s,t)).join("")}
      </div>
    `}renderCell(e,t,i){const s=["sudoku-cell"];if(e.isGiven&&s.push("sudoku-cell--given"),e.isCorrect&&s.push("sudoku-cell--correct"),e.isWrong&&s.push("sudoku-cell--wrong"),i===e.index&&s.push("sudoku-cell--selected"),t&&t.index!==e.index){const o=t.row===e.row,a=t.column===e.column,l=t.block===e.block,c=t.currentValue??t.givenValue,u=e.currentValue??e.givenValue,d=c!==null&&u!==null&&c===u;(o||a)&&s.push("sudoku-cell--related-line"),l&&s.push("sudoku-cell--related-block"),d&&s.push("sudoku-cell--same-value")}(e.column===2||e.column===5)&&s.push("sudoku-cell--border-right-heavy"),(e.row===2||e.row===5)&&s.push("sudoku-cell--border-bottom-heavy"),e.column===0&&s.push("sudoku-cell--border-left-heavy"),e.row===0&&s.push("sudoku-cell--border-top-heavy");const r=e.currentValue??e.givenValue;return`
      <button type="button" class="${s.join(" ")}" data-cell-index="${e.index}">
        ${r?`<span class="sudoku-cell__value">${r}</span>`:this.renderNotes(e.notes)}
      </button>
    `}renderNotes(e){return`
      <div class="sudoku-cell__notes">
        ${Array.from({length:9},(t,i)=>{const s=i+1;return`
            <span class="sudoku-cell__note">
              ${e.includes(s)?s:""}
            </span>
          `}).join("")}
      </div>
    `}}class dd extends Kt{constructor(){super(...arguments);E(this,"boardView",new hd);E(this,"abilityPanelView",new ld);E(this,"playerStatusView",new cd)}render(t){const i=t.room.players[t.currentPlayerId],s=Object.values(t.room.players).find(u=>u.id!==t.currentPlayerId),r=Object.values(t.room.activeEffects??{}),o=r.filter(u=>u.targetPlayerId===t.currentPlayerId&&u.expiresAt>Date.now()),a=r.filter(u=>u.fromPlayerId===t.currentPlayerId&&u.expiresAt>Date.now()),l=o.some(u=>u.type==="dark-flash"),c=o.some(u=>u.type==="freeze-notes");this.setHTML(`
      <main class="page game-page">
        <header class="game-header">
          <div>
            <p class="eyebrow">${t.room.difficulty} duel</p>
            <h1>${t.formattedTime}</h1>
            <p class="muted game-control-hint">
              Click a cell, then press 1-9 or use the number buttons. Notes mode writes notes instead of answers.
            </p>
          </div>

          <div class="game-actions">
            <button type="button" id="restart-match-button" class="secondary-button compact-action-button">Restart match</button>
            <button type="button" id="surrender-button" class="ghost-button compact-action-button danger-action-button">Surrender</button>
          </div>
        </header>

        <section class="game-layout">
          <aside class="sidebar">
            ${this.playerStatusView.render("You",i)}
            ${this.playerStatusView.render("Opponent",s)}
            <section class="card small-card">
              <div class="ability-card-header">
                <h3>Abilities</h3>
                <span>${((i==null?void 0:i.abilities)??[]).length}/2</span>
              </div>
              ${this.abilityPanelView.render((i==null?void 0:i.abilities)??[])}
            </section>
            ${this.renderPeekPreview(a,s,t.board)}
          </aside>

          <section class="board-section ${l?"board-section--dark-flash":""}">
            ${i!=null&&i.isFrozen?'<div class="freeze-banner">You are frozen after 4 mistakes. Wait for match end.</div>':""}
            ${c?'<div class="ability-status-banner">Freeze Notes is active. Notes are temporarily disabled.</div>':""}
            ${this.boardView.render(t.board,t.selectedCellIndex,o)}
            <div class="number-pad" aria-label="Number pad">
              ${Array.from({length:9},(u,d)=>{const h=d+1;return`<button type="button" class="number-button${t.selectedNumber===h?" active":""}" data-number="${h}">${h}</button>`}).join("")}
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

        ${this.renderAbilityBlockModal(t.pendingAbility,s)}
      </main>
    `)}onNumberClick(t){this.root.querySelectorAll("[data-number]").forEach(i=>{i.addEventListener("click",()=>t(Number(i.dataset.number)))})}onCellClick(t){this.root.querySelectorAll("[data-cell-index]").forEach(i=>{i.addEventListener("click",()=>t(Number(i.dataset.cellIndex)))})}onCellRightClick(t){this.root.querySelectorAll("[data-cell-index]").forEach(i=>{i.addEventListener("contextmenu",s=>{s.preventDefault(),t(Number(i.dataset.cellIndex))})})}onClearClick(t){var i;(i=this.root.querySelector("#clear-cell-button"))==null||i.addEventListener("click",t)}onNotesToggle(t){var i;(i=this.root.querySelector("#notes-toggle"))==null||i.addEventListener("click",t)}onAbilityClick(t){this.root.querySelectorAll("[data-ability-type]").forEach(i=>{i.addEventListener("click",()=>t(i.dataset.abilityType))})}onAbilityBlockSelect(t){this.root.querySelectorAll("[data-ability-block]").forEach(i=>{i.addEventListener("click",()=>t(Number(i.dataset.abilityBlock)))})}onAbilityCancel(t){var i,s;(i=this.root.querySelector("#ability-cancel-button"))==null||i.addEventListener("click",t),(s=this.root.querySelector("[data-ability-modal-backdrop]"))==null||s.addEventListener("click",t)}onSurrenderClick(t){var i;(i=this.root.querySelector("#surrender-button"))==null||i.addEventListener("click",t)}onRestartMatchClick(t){var i;(i=this.root.querySelector("#restart-match-button"))==null||i.addEventListener("click",t)}renderAbilityBlockModal(t,i){if(!t)return"";const s=Ot.find(o=>o.type===t),r=t==="peek-block";return`
      <div class="ability-modal" role="dialog" aria-modal="true" aria-label="Choose opponent block">
        <div class="ability-modal__backdrop" data-ability-modal-backdrop></div>
        <section class="ability-modal__card">
          <div class="ability-modal__header">
            <div>
              <p class="eyebrow">Ability target</p>
              <h2>${(s==null?void 0:s.label)??t}</h2>
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
    `}renderPeekPreview(t,i,s){var u;const r=t.find(d=>{var h;return d.type==="peek-block"&&((h=d.payload)==null?void 0:h.blockIndex)!==void 0});if(!r||!i||((u=r.payload)==null?void 0:u.blockIndex)===void 0)return"";const o=Math.max(0,Math.ceil((r.expiresAt-Date.now())/1e3)),a=s.cells.map(d=>d.isGiven?d.givenValue??0:0),l=i.publicBoard??[],c=a.map((d,h)=>{const p=l[h]??0;return p>0?p:d});return`
      <section class="card small-card peek-preview-card">
        <div class="ability-card-header">
          <h3>Peek Block</h3>
          <span>${o}s</span>
        </div>
        <p class="muted">Opponent block ${r.payload.blockIndex+1}</p>
        ${this.renderMiniBlock(c,r.payload.blockIndex,!0)}
      </section>
    `}renderMiniBlock(t,i,s){const r=this.getBlockIndexes(i);return`
      <div class="mini-block-grid ${s?"mini-block-grid--values":"mini-block-grid--empty"}">
        ${r.map(o=>{const a=t[o]??0;return`<span>${s&&a>0?a:""}</span>`}).join("")}
      </div>
    `}getBlockIndexes(t){const i=Math.floor(t/3)*3,s=t%3*3,r=[];for(let o=0;o<3;o+=1)for(let a=0;a<3;a+=1)r.push((i+o)*9+s+a);return r}}class ud extends Kt{render(e){const t=e.players.find(s=>s.playerId===e.winnerPlayerId),i=[...e.players].sort((s,r)=>r.score-s.score);this.setHTML(`
      <main class="page result-page polished-page">
        <section class="card result-card polished-card result-card--celebration">
          <div class="result-hero">
            <div class="result-trophy" aria-hidden="true">${e.isDraw?"=":"★"}</div>
            <p class="eyebrow">Match finished</p>
            <h1>${e.isDraw?"Draw match":`${(t==null?void 0:t.nickname)??"Unknown"} wins`}</h1>
            <p class="muted result-reason">${this.formatReason(e.reason)}</p>
          </div>

          <div class="result-list result-grid">
            ${i.map((s,r)=>`
              <div class="player-card result-player-card ${s.playerId===e.winnerPlayerId?"winner":""}">
                <div class="result-player-topline">
                  <div>
                    <span class="result-place">#${r+1}</span>
                    <strong>${s.nickname}</strong>
                  </div>
                  <span class="player-status-pill ${s.isFrozen?"danger":"ok"}">
                    ${s.isFrozen?"Frozen":"Active"}
                  </span>
                </div>
                <dl>
                  <div><dt>Score</dt><dd>${s.score}</dd></div>
                  <div><dt>Errors</dt><dd>${s.errors}/4</dd></div>
                  <div><dt>Progress</dt><dd>${s.progress}%</dd></div>
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
    `)}onPlayAgain(e){var t;(t=document.getElementById("play-again-button"))==null||t.addEventListener("click",e)}onBackHome(e){var t;(t=document.getElementById("back-home-button"))==null||t.addEventListener("click",e)}formatReason(e){return{completed:"Sudoku completed","time-ended":"Timer ended","both-frozen":"Both players are frozen","player-left":"Opponent left the room",surrendered:"Player surrendered"}[e]??e}}class fd{constructor(e,t,i,s){this.homeView=e,this.roomService=t,this.storageService=i,this.router=s}init(){const t=this.router.getCurrentRoute().roomCode??"",i=this.storageService.getNickname()??"";this.homeView.render(t,i),this.homeView.onCreateRoom(()=>void this.handleCreateRoom()),this.homeView.onJoinRoom(()=>void this.handleJoinRoom())}destroy(){}async handleCreateRoom(){try{const e=this.getValidNickname(),{roomCode:t,playerId:i}=await this.roomService.createRoom(e);this.storageService.saveNickname(e),this.storageService.savePlayerId(i),this.router.goLobby(t)}catch(e){this.homeView.showError(e instanceof Error?e.message:"Failed to create room.")}}async handleJoinRoom(){try{const e=this.getValidNickname(),t=this.homeView.getRoomCode();if(!t)throw new Error("Enter room code.");const{playerId:i}=await this.roomService.joinRoom(t,e);this.storageService.saveNickname(e),this.storageService.savePlayerId(i),this.router.goLobby(t)}catch(e){this.homeView.showError(e instanceof Error?e.message:"Failed to join room.")}}getValidNickname(){const e=this.homeView.getNickname();if(e.length<2)throw new Error("Nickname must contain at least 2 characters.");return e}}class pd{constructor(e,t,i,s,r){E(this,"unsubscribe",null);E(this,"roomCode","");this.lobbyView=e,this.roomService=t,this.firebaseService=i,this.storageService=s,this.router=r}init(e){this.roomCode=e,this.unsubscribe=this.firebaseService.subscribeToRoom(e,t=>{this.handleRoomUpdate(t)})}destroy(){var e;(e=this.unsubscribe)==null||e.call(this)}async handleRoomUpdate(e){if(!e){this.router.goHome(this.roomCode);return}const t=this.storageService.getPlayerId();if(!t||!e.players[t]){this.router.goHome(e.roomCode);return}if(e.status==="playing"){this.router.goGame(e.roomCode);return}if(e.status==="finished"){this.router.goResult(e.roomCode);return}const i=this.router.getInviteLink(e.roomCode);this.lobbyView.render(e,t,i),this.lobbyView.onReadyChange(s=>void this.handleReadyChange(s)),this.lobbyView.onDifficultyChange(s=>void this.handleDifficultyChange(s)),this.lobbyView.onCopyInviteLink(()=>void navigator.clipboard.writeText(i)),this.lobbyView.onLeaveRoom(()=>void this.handleLeaveRoom(t)),await this.roomService.tryStartGame(e.roomCode,e)}async handleReadyChange(e){const t=this.storageService.getPlayerId();t&&await this.roomService.setReady(this.roomCode,t,e)}async handleDifficultyChange(e){await this.roomService.setDifficulty(this.roomCode,e)}async handleLeaveRoom(e){await this.roomService.leaveRoom(this.roomCode,e),this.storageService.clearSession(),this.router.goHome()}}class _d{constructor(e,t,i,s,r,o,a,l,c,u){E(this,"roomCode","");E(this,"room",null);E(this,"board",null);E(this,"selectedCellIndex",null);E(this,"selectedNumber",null);E(this,"pendingAbility",null);E(this,"notesMode",!1);E(this,"unsubscribe",null);E(this,"timerIntervalId",null);E(this,"appliedInstantEffectIds",new Set);E(this,"hasSyncedInitialPublicBoard",!1);E(this,"keyboardHandler",e=>{this.handleKeyboardInput(e)});this.gameView=e,this.roomService=t,this.firebaseService=i,this.storageService=s,this.sudokuService=r,this.scoreService=o,this.abilityService=a,this.regionService=l,this.timerService=c,this.router=u}init(e){this.roomCode=e,document.addEventListener("keydown",this.keyboardHandler),this.unsubscribe=this.firebaseService.subscribeToRoom(e,t=>{this.handleRoomUpdate(t)}),this.timerIntervalId=window.setInterval(()=>{this.checkFinishConditions(),this.render()},1e3)}destroy(){var e;document.removeEventListener("keydown",this.keyboardHandler),(e=this.unsubscribe)==null||e.call(this),this.timerIntervalId!==null&&window.clearInterval(this.timerIntervalId)}async handleRoomUpdate(e){if(!e){this.router.goHome();return}if(e.status==="finished"){this.router.goResult(e.roomCode);return}this.room=e;const t=this.storageService.getPlayerId();if((t?Object.values(e.activeEffects??{}).some(s=>s.targetPlayerId===t&&s.type==="freeze-notes"&&s.expiresAt>Date.now()):!1)&&(this.notesMode=!1),!this.board&&e.puzzleId){const s=this.sudokuService.getPuzzleById(e.puzzleId);this.board=this.sudokuService.createBoard(s),this.syncInitialPublicBoard()}this.closePendingAbilityIfItNoLongerExists(e),this.applyIncomingEffects(e),this.render()}handleKeyboardInput(e){const t=e.target;if((t==null?void 0:t.tagName)==="INPUT"||(t==null?void 0:t.tagName)==="SELECT"||(t==null?void 0:t.tagName)==="TEXTAREA")return;const i=e.key;if(/^[1-9]$/.test(i)){e.preventDefault(),this.handleNumberAction(Number(i));return}if(i==="Backspace"||i==="Delete"||i==="0"){e.preventDefault(),this.handleClearCell();return}if(i.toLowerCase()==="n"){e.preventDefault(),this.handleNotesToggle();return}i==="Escape"&&(this.pendingAbility=null,this.selectedNumber=null,this.render())}handleCellClick(e){if(this.selectedCellIndex===e){this.selectedCellIndex=null,this.selectedNumber=null,this.render();return}this.selectedCellIndex=e,this.selectedNumber=null,this.render()}handleCellRightClick(e){if(this.selectedCellIndex=e,this.selectedNumber===null){this.render();return}this.addNoteToSelectedCell(this.selectedNumber).finally(()=>{this.selectedNumber=null,this.render()})}async handleNumberButtonClick(e){await this.handleNumberAction(e)}async handleNumberAction(e){if(this.selectedNumber=e,this.selectedCellIndex===null){this.render();return}await this.handleNumberInput(e),this.selectedNumber=null,this.render()}async handleNumberInput(e){const t=this.storageService.getPlayerId();if(!this.room||!this.board||!t||this.selectedCellIndex===null)return;const i=this.room.players[t];if(!i||i.isFrozen)return;const s=this.board.cells[this.selectedCellIndex];if(!s||s.isGiven||s.isCorrect)return;if(this.notesMode){if(!this.canUseNotes()){this.notesMode=!1;return}this.board=this.sudokuService.toggleNote(this.board,this.selectedCellIndex,e);return}const r=i.completedBlocks??[],o=this.sudokuService.enterValue(this.board,this.selectedCellIndex,e);this.board=o.board;let a=i.score,l=i.errors,c=i.isFrozen,u=i.finishedAt??null,d=[...i.abilities??[]],h=[...i.completedBlocks??[]];if(o.isCorrect){a+=this.scoreService.getCellScore(l);const p=this.regionService.getNewCompletedBlocks(this.board,r);for(const _ of p){h.push(_),a+=this.scoreService.getBlockScore(l);const b=this.abilityService.rollAbility();b&&(d=this.abilityService.addAbilityToInventory(d,b))}if(o.isCompleted){const _=this.getRemainingSeconds();a+=this.scoreService.getCompletionScore(l),a+=this.scoreService.getTimeBonus(_,l),u=Date.now()}}else l+=1,l>=Yh&&(c=!0);this.selectedCellIndex=null,this.selectedNumber=null,await this.firebaseService.updatePlayer(this.roomCode,t,{score:a,errors:l,progress:this.sudokuService.calculateProgress(this.board),isFrozen:c,finishedAt:u,abilities:d,completedBlocks:h,publicBoard:this.sudokuService.createPublicBoard(this.board)}),await this.checkFinishConditions()}async addNoteToSelectedCell(e){const t=this.storageService.getPlayerId();if(!this.room||!this.board||!t||this.selectedCellIndex===null)return;const i=this.room.players[t];if(!i||i.isFrozen||!this.canUseNotes())return;const s=this.board.cells[this.selectedCellIndex];!s||s.isGiven||s.isCorrect||(this.board=this.sudokuService.toggleNote(this.board,this.selectedCellIndex,e))}handleClearCell(){if(!this.board||this.selectedCellIndex===null)return;const e=this.board.cells[this.selectedCellIndex];!e||e.isGiven||e.isCorrect||(this.board=this.sudokuService.clearValue(this.board,this.selectedCellIndex),this.selectedNumber=null,this.render())}handleNotesToggle(){if(!this.canUseNotes()){this.notesMode=!1,this.render();return}this.notesMode=!this.notesMode,this.selectedNumber=null,this.render()}async handleAbilityUse(e){const t=this.storageService.getPlayerId();if(!this.room||!t)return;const i=this.room.players[t],s=Object.values(this.room.players).find(o=>o.id!==t);if(!(!i||!s||i.isFrozen||!(i.abilities??[]).includes(e))){if(this.abilityService.isBlockTargetAbility(e)){this.pendingAbility=e,this.render();return}await this.activateAbility(e)}}async handleAbilityBlockSelect(e){this.pendingAbility!==null&&await this.activateAbility(this.pendingAbility,e)}handleAbilityCancel(){this.pendingAbility=null,this.render()}async handleSurrender(){const e=this.storageService.getPlayerId();if(!this.room||!e)return;const t=Object.values(this.room.players).find(s=>s.id!==e);window.confirm("Surrender this match? Your opponent will win.")&&await this.roomService.finishGame(this.roomCode,"surrendered",(t==null?void 0:t.id)??null)}async handleRestartMatch(){!this.room||!window.confirm("Restart this match and return both players to the lobby?")||(await this.roomService.resetRoomForRematch(this.roomCode),this.router.goLobby(this.roomCode))}async activateAbility(e,t){const i=this.storageService.getPlayerId();if(!this.room||!i)return;const s=this.room.players[i],r=Object.values(this.room.players).find(c=>c.id!==i);if(!s||!r||s.isFrozen)return;const o=s.abilities??[];if(!o.includes(e)){this.pendingAbility=null,this.render();return}if(this.abilityService.isBlockTargetAbility(e)&&(t===void 0||Number.isNaN(t)||t<0||t>8))return;const a=this.abilityService.createEffect(e,i,r.id,t),l=this.abilityService.removeAbilityFromInventory(o,e);try{await this.firebaseService.addActiveEffect(this.roomCode,a),await this.firebaseService.updatePlayer(this.roomCode,i,{abilities:l}),this.pendingAbility=null}catch(c){console.error("Failed to activate ability",c),alert("Ability was not activated. Please try again.")}this.render()}async checkFinishConditions(){if(!this.room||this.room.status!=="playing")return;const e=Object.values(this.room.players),t=e.length===2&&e.every(a=>a.isFrozen===!0||typeof a.finishedAt=="number"),i=e.length===2&&e.every(a=>a.isFrozen===!0),s=typeof this.room.startedAt=="number"&&this.timerService.isTimeEnded(this.room.startedAt,this.room.durationSeconds);if(!t&&!s)return;const r=this.resolveWinner(this.room),o=i?"both-frozen":s?"time-ended":"completed";await this.roomService.finishGame(this.roomCode,o,r)}resolveWinner(e){const t=Object.values(e.players),[i,s]=t;return!i||!s?(i==null?void 0:i.id)??null:i.score!==s.score?i.score>s.score?i.id:s.id:i.errors!==s.errors?i.errors<s.errors?i.id:s.id:typeof i.finishedAt=="number"&&typeof s.finishedAt=="number"&&i.finishedAt!==s.finishedAt?i.finishedAt<s.finishedAt?i.id:s.id:null}applyIncomingEffects(e){var s;const t=this.storageService.getPlayerId();if(!t||!this.board)return;const i=Object.values(e.activeEffects??{}).filter(r=>r.targetPlayerId===t&&r.expiresAt>Date.now());for(const r of i)r.type==="erase-notes"&&((s=r.payload)==null?void 0:s.blockIndex)!==void 0&&!this.appliedInstantEffectIds.has(r.id)&&(this.board=this.sudokuService.eraseNotesInBlock(this.board,r.payload.blockIndex),this.appliedInstantEffectIds.add(r.id),this.firebaseService.removeActiveEffect(this.roomCode,r.id).catch(()=>{}))}closePendingAbilityIfItNoLongerExists(e){const t=this.storageService.getPlayerId();if(!t||this.pendingAbility===null)return;const i=e.players[t];(!i||!(i.abilities??[]).includes(this.pendingAbility))&&(this.pendingAbility=null)}async syncInitialPublicBoard(){const e=this.storageService.getPlayerId();if(this.hasSyncedInitialPublicBoard||!this.board||!this.room||!e)return;const t=this.room.players[e];if(!t)return;const i=t.publicBoard??[],s=this.sudokuService.createPublicBoard(this.board);if(!(s.some(a=>a>0)&&(i.length!==81||i.every(a=>a===0)))){this.hasSyncedInitialPublicBoard=!0;return}this.hasSyncedInitialPublicBoard=!0,await this.firebaseService.updatePlayer(this.roomCode,e,{progress:this.sudokuService.calculateProgress(this.board),publicBoard:s})}canUseNotes(){return!this.hasActiveEffect("freeze-notes")}hasActiveEffect(e){const t=this.storageService.getPlayerId();return!this.room||!t?!1:Object.values(this.room.activeEffects??{}).some(i=>i.targetPlayerId===t&&i.type===e&&i.expiresAt>Date.now())}getRemainingSeconds(){var e;return typeof((e=this.room)==null?void 0:e.startedAt)!="number"?0:this.timerService.getRemainingSeconds(this.room.startedAt,this.room.durationSeconds)}render(){const e=this.storageService.getPlayerId();if(!this.room||!this.board||!e||typeof this.room.startedAt!="number")return;const t=this.getRemainingSeconds();this.gameView.render({room:this.room,board:this.board,currentPlayerId:e,selectedCellIndex:this.selectedCellIndex,selectedNumber:this.selectedNumber,pendingAbility:this.pendingAbility,notesMode:this.notesMode,remainingSeconds:t,formattedTime:this.timerService.formatTime(t)}),this.gameView.onCellClick(i=>this.handleCellClick(i)),this.gameView.onCellRightClick(i=>this.handleCellRightClick(i)),this.gameView.onNumberClick(i=>void this.handleNumberButtonClick(i)),this.gameView.onClearClick(()=>this.handleClearCell()),this.gameView.onNotesToggle(()=>this.handleNotesToggle()),this.gameView.onAbilityClick(i=>void this.handleAbilityUse(i)),this.gameView.onAbilityBlockSelect(i=>void this.handleAbilityBlockSelect(i)),this.gameView.onAbilityCancel(()=>this.handleAbilityCancel()),this.gameView.onSurrenderClick(()=>void this.handleSurrender()),this.gameView.onRestartMatchClick(()=>void this.handleRestartMatch())}}class md{constructor(e,t,i,s){E(this,"roomCode","");E(this,"unsubscribe",null);this.resultView=e,this.firebaseService=t,this.roomService=i,this.router=s}async init(e){this.roomCode=e;const t=await this.firebaseService.getRoom(e);if(!t){this.router.goHome();return}this.resultView.render(this.buildResult(t)),this.resultView.onBackHome(()=>this.router.goHome()),this.resultView.onPlayAgain(()=>void this.handlePlayAgain()),this.unsubscribe=this.firebaseService.subscribeToRoom(e,i=>{if(!i){this.router.goHome();return}(i.status==="lobby"||i.status==="waiting")&&this.router.goLobby(i.roomCode)})}destroy(){var e;(e=this.unsubscribe)==null||e.call(this)}async handlePlayAgain(){await this.roomService.resetRoomForRematch(this.roomCode),this.router.goLobby(this.roomCode)}buildResult(e){const t=Object.values(e.players).map(i=>({playerId:i.id,nickname:i.nickname,score:i.score,errors:i.errors,progress:i.progress,finishedAt:i.finishedAt??null,isFrozen:i.isFrozen}));return{winnerPlayerId:e.winnerPlayerId??null,isDraw:(e.winnerPlayerId??null)===null,reason:e.finishReason??"completed",players:t}}}const mt=new qh,pt=new Jh(mt),hn=new Zh,gd=new Or,yd=new ed,vd=new nd,bd=new id,Cd=new rd,Ve=new $r;let q=null;function wd(){q!=null&&q.destroy&&q.destroy(),q=null}function Lr(){wd();const n=Ve.getCurrentRoute();if(n.page==="lobby"&&n.roomCode){const t=new pd(new ad,pt,mt,hn,Ve);q=t,t.init(n.roomCode);return}if(n.page==="game"&&n.roomCode){const t=new _d(new dd,pt,mt,hn,gd,yd,vd,bd,Cd,Ve);q=t,t.init(n.roomCode);return}if(n.page==="result"&&n.roomCode){const t=new md(new ud,mt,pt,Ve);q=t,t.init(n.roomCode);return}const e=new fd(new od,pt,hn,Ve);q=e,e.init()}window.addEventListener("hashchange",Lr);Lr();
