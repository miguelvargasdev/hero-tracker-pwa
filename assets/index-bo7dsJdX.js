(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const b="modulepreload",y=function(e){return"/hero-tracker-pwa/"+e},p={},g=function(t,r,s){let o=Promise.resolve();if(r&&r.length>0){const n=document.getElementsByTagName("link");o=Promise.all(r.map(i=>{if(i=y(i),i in p)return;p[i]=!0;const l=i.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(!!s)for(let c=n.length-1;c>=0;c--){const u=n[c];if(u.href===i&&(!l||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${h}`))return;const a=document.createElement("link");if(a.rel=l?"stylesheet":b,l||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),l)return new Promise((c,u)=>{a.addEventListener("load",c),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})}))}return o.then(()=>t()).catch(n=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n})};function v(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function S(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function s(){return this instanceof s?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var o=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(r,s,o.get?o:{enumerable:!0,get:function(){return e[s]}})}),r}var d={exports:{}};d.exports=m;d.exports.isMobile=m;d.exports.default=m;const w=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,O=/CrOS/,E=/android|ipad|playbook|silk/i;function m(e){e||(e={});let t=e.ua;if(!t&&typeof navigator<"u"&&(t=navigator.userAgent),t&&t.headers&&typeof t.headers["user-agent"]=="string"&&(t=t.headers["user-agent"]),typeof t!="string")return!1;let r=w.test(t)&&!O.test(t)||!!e.tablet&&E.test(t);return!r&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&t.indexOf("Macintosh")!==-1&&t.indexOf("Safari")!==-1&&(r=!0),r}var _=d.exports;const P=v(_),x=P(),$="Health Tracker",M="contact@miguelvargas.dev",j="https://github.com/suren-atoyan/react-pwa",C={app:{crash:{title:"Oooops... Sorry, I guess, something went wrong. You can:",options:{email:`contact with author by this email - ${M}`,reset:"Press here to reset the application"}}},loader:{fail:"Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea"},images:{failed:"something went wrong during image loading :("},404:"Hey bro? What are you looking for?"},N={options:{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3},maxSnack:x?3:4},T={delay:300,minimumLoading:700},A={image:"/cover.png",description:"Starter kit for modern web applications"},D="https://giphy.com/embed/xTiN0L7EW5trfOvEk0";function f(){return Math.floor(Math.random()*256)}function k(){const e=f(),t=f(),r=f();return[`rgb(${e}, ${t}, ${r})`,`rgb(${255-e}, ${255-t}, ${255-r})`]}function R(){const[e,t]=k(),r=["font-size: 40px",`color: ${e}`,`border: 1px solid ${t}`,`background-color: ${t}`,"border-radius: 5px","padding: 10px"].join(";");console.log(`%c=== ${$} ===`,r)}Promise.all([g(()=>import("./Root-VVsl7yV3.js"),__vite__mapDeps([0,1,2])),g(()=>import("./App-tx0xxGEZ.js").then(e=>e.A),__vite__mapDeps([3,1]))]).then(([{default:e},{default:t}])=>{e(t)});R();export{g as _,v as a,D as b,A as d,M as e,S as g,T as l,C as m,N as n,j as r,$ as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Root-VVsl7yV3.js","assets/index-nIs87xjZ.js","assets/index.esm-L7heoHBQ.js","assets/App-tx0xxGEZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}