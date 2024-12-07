import{o as ft,c as vt,b as pt,O as mt,p as P,I as _e,K as A,r as g,j as h,P as ht,m as S,F as qe,l as D,L as x,q as $,s as M,x as z,z as gt,H as wt,R as yt,y as bt,n as Et}from"./app-BI7OEea5.js";function bn(e,t){return ft(),vt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[pt("path",{"fill-rule":"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}function De(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function te(){let e=[],t={addEventListener(n,l,r,a){return n.addEventListener(l,r,a),t.add(()=>n.removeEventListener(l,r,a))},requestAnimationFrame(...n){let l=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(l))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let l=setTimeout(...n);t.add(()=>clearTimeout(l))},microTask(...n){let l={current:!0};return De(()=>{l.current&&n[0]()}),t.add(()=>{l.current=!1})},style(n,l,r){let a=n.style.getPropertyValue(l);return Object.assign(n.style,{[l]:r}),this.add(()=>{Object.assign(n.style,{[l]:a})})},group(n){let l=te();return n(l),this.add(()=>l.dispose())},add(n){return e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let r of e.splice(l,1))r()}},dispose(){for(let n of e.splice(0))n()}};return t}var je;let St=Symbol("headlessui.useid"),Tt=0;const pe=(je=mt)!=null?je:function(){return P(St,()=>`${++Tt}`)()};function E(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function k(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,k),l}var Lt=Object.defineProperty,$t=(e,t,n)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Be=(e,t,n)=>($t(e,typeof t!="symbol"?t+"":t,n),n);let Ft=class{constructor(){Be(this,"current",this.detect()),Be(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},ne=new Ft;function G(e){if(ne.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=E(e);if(t)return t.ownerDocument}return document}let Te=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var B=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(B||{}),Ge=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ge||{}),Ot=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ot||{});function Ye(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Te)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Ke=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Ke||{});function ze(e,t=0){var n;return e===((n=G(e))==null?void 0:n.body)?!1:k(t,{0(){return e.matches(Te)},1(){let l=e;for(;l!==null;){if(l.matches(Te))return!0;l=l.parentElement}return!1}})}function Sn(e){let t=G(e);_e(()=>{t&&!ze(t.activeElement,0)&&U(e)})}var Pt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Pt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function U(e){e==null||e.focus({preventScroll:!0})}let At=["textarea","input"].join(",");function Dt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,At))!=null?n:!1}function Ct(e,t=n=>n){return e.slice().sort((n,l)=>{let r=t(n),a=t(l);if(r===null||a===null)return 0;let i=r.compareDocumentPosition(a);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Tn(e,t){return ee(Ye(),t,{relativeTo:e})}function ee(e,t,{sorted:n=!0,relativeTo:l=null,skipElements:r=[]}={}){var a;let i=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,o=Array.isArray(e)?n?Ct(e):e:Ye(e);r.length>0&&o.length>1&&(o=o.filter(f=>!r.includes(f))),l=l??i.activeElement;let u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(l))-1;if(t&4)return Math.max(0,o.indexOf(l))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},m=0,c=o.length,v;do{if(m>=c||m+c<=0)return 0;let f=s+m;if(t&16)f=(f+c)%c;else{if(f<0)return 3;if(f>=c)return 1}v=o[f],v==null||v.focus(d),m+=u}while(v!==i.activeElement);return t&6&&Dt(v)&&v.select(),2}function Xe(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Nt(){return/Android/gi.test(window.navigator.userAgent)}function xt(){return Xe()||Nt()}function se(e,t,n){ne.isServer||A(l=>{document.addEventListener(e,t,n),l(()=>document.removeEventListener(e,t,n))})}function Qe(e,t,n){ne.isServer||A(l=>{window.addEventListener(e,t,n),l(()=>window.removeEventListener(e,t,n))})}function Mt(e,t,n=h(()=>!0)){function l(a,i){if(!n.value||a.defaultPrevented)return;let o=i(a);if(o===null||!o.getRootNode().contains(o))return;let u=function s(d){return typeof d=="function"?s(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let s of u){if(s===null)continue;let d=s instanceof HTMLElement?s:E(s);if(d!=null&&d.contains(o)||a.composed&&a.composedPath().includes(d))return}return!ze(o,Ke.Loose)&&o.tabIndex!==-1&&a.preventDefault(),t(a,o)}let r=g(null);se("pointerdown",a=>{var i,o;n.value&&(r.value=((o=(i=a.composedPath)==null?void 0:i.call(a))==null?void 0:o[0])||a.target)},!0),se("mousedown",a=>{var i,o;n.value&&(r.value=((o=(i=a.composedPath)==null?void 0:i.call(a))==null?void 0:o[0])||a.target)},!0),se("click",a=>{xt()||r.value&&(l(a,()=>r.value),r.value=null)},!0),se("touchend",a=>l(a,()=>a.target instanceof HTMLElement?a.target:null),!0),Qe("blur",a=>l(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var fe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(fe||{}),I=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(I||{});function R({visible:e=!0,features:t=0,ourProps:n,theirProps:l,...r}){var a;let i=Je(l,n),o=Object.assign(r,{props:i});if(e||t&2&&i.static)return be(o);if(t&1){let u=(a=i.unmount)==null||a?0:1;return k(u,{0(){return null},1(){return be({...r,props:{...i,hidden:!0,style:{display:"none"}}})}})}return be(o)}function be({props:e,attrs:t,slots:n,slot:l,name:r}){var a,i;let{as:o,...u}=et(e,["unmount","static"]),s=(a=n.default)==null?void 0:a.call(n,l),d={};if(l){let m=!1,c=[];for(let[v,f]of Object.entries(l))typeof f=="boolean"&&(m=!0),f===!0&&c.push(v);m&&(d["data-headlessui-state"]=c.join(" "))}if(o==="template"){if(s=Ze(s??[]),Object.keys(u).length>0||Object.keys(t).length>0){let[m,...c]=s??[];if(!kt(m)||c.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(u).concat(Object.keys(t)).map(p=>p.trim()).filter((p,y,C)=>C.indexOf(p)===y).sort((p,y)=>p.localeCompare(y)).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let v=Je((i=m.props)!=null?i:{},u,d),f=ht(m,v,!0);for(let p in v)p.startsWith("on")&&(f.props||(f.props={}),f.props[p]=v[p]);return f}return Array.isArray(s)&&s.length===1?s[0]:s}return S(o,Object.assign({},u,d),{default:()=>s})}function Ze(e){return e.flatMap(t=>t.type===qe?Ze(t.children):[t])}function Je(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let l of e)for(let r in l)r.startsWith("on")&&typeof l[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(l[r])):t[r]=l[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(l=>[l,void 0])));for(let l in n)Object.assign(t,{[l](r,...a){let i=n[l];for(let o of i){if(r instanceof Event&&r.defaultPrevented)return;o(r,...a)}}});return t}function et(e,t=[]){let n=Object.assign({},e);for(let l of t)l in n&&delete n[l];return n}function kt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var ve=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ve||{});let Le=D({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var l;let{features:r,...a}=e,i={"aria-hidden":(r&2)===2?!0:(l=a["aria-hidden"])!=null?l:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return R({ourProps:i,theirProps:a,slot:{},attrs:n,slots:t,name:"Hidden"})}}}),tt=Symbol("Context");var L=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(L||{});function Rt(){return Ce()!==null}function Ce(){return P(tt,null)}function Ht(e){x(tt,e)}var nt=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(nt||{});function jt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let _=[];jt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&_[0]!==t.target&&(_.unshift(t.target),_=_.filter(n=>n!=null&&n.isConnected),_.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function lt(e,t,n,l){ne.isServer||A(r=>{e=e??window,e.addEventListener(t,n,l),r(()=>e.removeEventListener(t,n,l))})}var J=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(J||{});function Bt(){let e=g(0);return Qe("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function rt(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=E(n);l instanceof HTMLElement&&t.add(l)}return t}var at=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(at||{});let Q=Object.assign(D({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:g(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let r=g(null);l({el:r,$el:r});let a=h(()=>G(r)),i=g(!1);$(()=>i.value=!0),M(()=>i.value=!1),Ut({ownerDocument:a},h(()=>i.value&&!!(e.features&16)));let o=Wt({ownerDocument:a,container:r,initialFocus:h(()=>e.initialFocus)},h(()=>i.value&&!!(e.features&2)));Vt({ownerDocument:a,container:r,containers:e.containers,previousActiveElement:o},h(()=>i.value&&!!(e.features&8)));let u=Bt();function s(v){let f=E(r);f&&(p=>p())(()=>{k(u.value,{[J.Forwards]:()=>{ee(f,B.First,{skipElements:[v.relatedTarget]})},[J.Backwards]:()=>{ee(f,B.Last,{skipElements:[v.relatedTarget]})}})})}let d=g(!1);function m(v){v.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function c(v){if(!i.value)return;let f=rt(e.containers);E(r)instanceof HTMLElement&&f.add(E(r));let p=v.relatedTarget;p instanceof HTMLElement&&p.dataset.headlessuiFocusGuard!=="true"&&(ot(f,p)||(d.value?ee(E(r),k(u.value,{[J.Forwards]:()=>B.Next,[J.Backwards]:()=>B.Previous})|B.WrapAround,{relativeTo:v.target}):v.target instanceof HTMLElement&&U(v.target)))}return()=>{let v={},f={ref:r,onKeydown:m,onFocusout:c},{features:p,initialFocus:y,containers:C,...T}=e;return S(qe,[!!(p&4)&&S(Le,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:ve.Focusable}),R({ourProps:f,theirProps:{...t,...T},slot:v,attrs:t,slots:n,name:"FocusTrap"}),!!(p&4)&&S(Le,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:ve.Focusable})])}}}),{features:at});function It(e){let t=g(_.slice());return z([e],([n],[l])=>{l===!0&&n===!1?De(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=_.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function Ut({ownerDocument:e},t){let n=It(t);$(()=>{A(()=>{var l,r;t.value||((l=e.value)==null?void 0:l.activeElement)===((r=e.value)==null?void 0:r.body)&&U(n())},{flush:"post"})}),M(()=>{t.value&&U(n())})}function Wt({ownerDocument:e,container:t,initialFocus:n},l){let r=g(null),a=g(!1);return $(()=>a.value=!0),M(()=>a.value=!1),$(()=>{z([t,n,l],(i,o)=>{if(i.every((s,d)=>(o==null?void 0:o[d])===s)||!l.value)return;let u=E(t);u&&De(()=>{var s,d;if(!a.value)return;let m=E(n),c=(s=e.value)==null?void 0:s.activeElement;if(m){if(m===c){r.value=c;return}}else if(u.contains(c)){r.value=c;return}m?U(m):ee(u,B.First|B.NoScroll)===Ge.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),r}function Vt({ownerDocument:e,container:t,containers:n,previousActiveElement:l},r){var a;lt((a=e.value)==null?void 0:a.defaultView,"focus",i=>{if(!r.value)return;let o=rt(n);E(t)instanceof HTMLElement&&o.add(E(t));let u=l.value;if(!u)return;let s=i.target;s&&s instanceof HTMLElement?ot(o,s)?(l.value=s,U(s)):(i.preventDefault(),i.stopPropagation(),U(u)):U(l.value)},!0)}function ot(e,t){for(let n of e)if(n.contains(t))return!0;return!1}function _t(e){let t=gt(e.getSnapshot());return M(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function qt(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(r){return l.add(r),()=>l.delete(r)},dispatch(r,...a){let i=t[r].call(n,...a);i&&(n=i,l.forEach(o=>o()))}}}function Gt(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,r=l.clientWidth-l.offsetWidth,a=e-r;n.style(l,"paddingRight",`${a}px`)}}}function Yt(){return Xe()?{before({doc:e,d:t,meta:n}){function l(r){return n.containers.flatMap(a=>a()).some(a=>a.contains(r))}t.microTask(()=>{var r;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let o=te();o.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>o.dispose()))}let a=(r=window.scrollY)!=null?r:window.pageYOffset,i=null;t.addEventListener(e,"click",o=>{if(o.target instanceof HTMLElement)try{let u=o.target.closest("a");if(!u)return;let{hash:s}=new URL(u.href),d=e.querySelector(s);d&&!l(d)&&(i=d)}catch{}},!0),t.addEventListener(e,"touchstart",o=>{if(o.target instanceof HTMLElement)if(l(o.target)){let u=o.target;for(;u.parentElement&&l(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(o.target,"touchAction","none")}),t.addEventListener(e,"touchmove",o=>{if(o.target instanceof HTMLElement){if(o.target.tagName==="INPUT")return;if(l(o.target)){let u=o.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&o.preventDefault()}else o.preventDefault()}},{passive:!1}),t.add(()=>{var o;let u=(o=window.scrollY)!=null?o:window.pageYOffset;a!==u&&window.scrollTo(0,a),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function Kt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function zt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let q=qt(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:te(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:zt(n)},r=[Yt(),Gt(),Kt()];r.forEach(({before:a})=>a==null?void 0:a(l)),r.forEach(({after:a})=>a==null?void 0:a(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});q.subscribe(()=>{let e=q.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",r=n.count!==0;(r&&!l||!r&&l)&&q.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&q.dispatch("TEARDOWN",n)}});function Xt(e,t,n){let l=_t(q),r=h(()=>{let a=e.value?l.value.get(e.value):void 0;return a?a.count>0:!1});return z([e,t],([a,i],[o],u)=>{if(!a||!i)return;q.dispatch("PUSH",a,n);let s=!1;u(()=>{s||(q.dispatch("POP",o??a,n),s=!0)})},{immediate:!0}),r}let Ee=new Map,Z=new Map;function Ie(e,t=g(!0)){A(n=>{var l;if(!t.value)return;let r=E(e);if(!r)return;n(function(){var i;if(!r)return;let o=(i=Z.get(r))!=null?i:1;if(o===1?Z.delete(r):Z.set(r,o-1),o!==1)return;let u=Ee.get(r);u&&(u["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",u["aria-hidden"]),r.inert=u.inert,Ee.delete(r))});let a=(l=Z.get(r))!=null?l:0;Z.set(r,a+1),a===0&&(Ee.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0)})}function Qt({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let l=g(null),r=G(l);function a(){var i,o,u;let s=[];for(let d of e)d!==null&&(d instanceof HTMLElement?s.push(d):"value"in d&&d.value instanceof HTMLElement&&s.push(d.value));if(t!=null&&t.value)for(let d of t.value)s.push(d);for(let d of(i=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?i:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(E(l))||d.contains((u=(o=E(l))==null?void 0:o.getRootNode())==null?void 0:u.host)||s.some(m=>d.contains(m))||s.push(d));return s}return{resolveContainers:a,contains(i){return a().some(o=>o.contains(i))},mainTreeNodeRef:l,MainTreeNode(){return n!=null?null:S(Le,{features:ve.Hidden,ref:l})}}}let it=Symbol("ForcePortalRootContext");function Zt(){return P(it,!1)}let Ue=D({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return x(it,e.force),()=>{let{force:l,...r}=e;return R({theirProps:r,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}}),ut=Symbol("StackContext");var $e=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))($e||{});function Jt(){return P(ut,()=>{})}function en({type:e,enabled:t,element:n,onUpdate:l}){let r=Jt();function a(...i){l==null||l(...i),r(...i)}$(()=>{z(t,(i,o)=>{i?a(0,e,n):o===!0&&a(1,e,n)},{immediate:!0,flush:"sync"})}),M(()=>{t.value&&a(1,e,n)}),x(ut,a)}let tn=Symbol("DescriptionContext");function nn({slot:e=g({}),name:t="Description",props:n={}}={}){let l=g([]);function r(a){return l.value.push(a),()=>{let i=l.value.indexOf(a);i!==-1&&l.value.splice(i,1)}}return x(tn,{register:r,slot:e,name:t,props:n}),h(()=>l.value.length>0?l.value.join(" "):void 0)}function ln(e){let t=G(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}const Fe=new WeakMap;function rn(e){var t;return(t=Fe.get(e))!=null?t:0}function We(e,t){let n=t(rn(e));return n<=0?Fe.delete(e):Fe.set(e,n),n}let an=D({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=g(null),r=h(()=>G(l)),a=Zt(),i=P(st,null),o=g(a===!0||i==null?ln(l.value):i.resolveTarget());o.value&&We(o.value,c=>c+1);let u=g(!1);$(()=>{u.value=!0}),A(()=>{a||i!=null&&(o.value=i.resolveTarget())});let s=P(Oe,null),d=!1,m=bt();return z(l,()=>{if(d||!s)return;let c=E(l);c&&(M(s.register(c),m),d=!0)}),M(()=>{var c,v;let f=(c=r.value)==null?void 0:c.getElementById("headlessui-portal-root");!f||o.value!==f||We(o.value,p=>p-1)||o.value.children.length>0||(v=o.value.parentElement)==null||v.removeChild(o.value)}),()=>{if(!u.value||o.value===null)return null;let c={ref:l,"data-headlessui-portal":""};return S(wt,{to:o.value},R({ourProps:c,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),Oe=Symbol("PortalParentContext");function on(){let e=P(Oe,null),t=g([]);function n(a){return t.value.push(a),e&&e.register(a),()=>l(a)}function l(a){let i=t.value.indexOf(a);i!==-1&&t.value.splice(i,1),e&&e.unregister(a)}let r={register:n,unregister:l,portals:t};return[t,D({name:"PortalWrapper",setup(a,{slots:i}){return x(Oe,r),()=>{var o;return(o=i.default)==null?void 0:o.call(i)}}})]}let st=Symbol("PortalGroupContext"),un=D({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=yt({resolveTarget(){return e.target}});return x(st,l),()=>{let{target:r,...a}=e;return R({theirProps:a,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}});var sn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(sn||{});let Pe=Symbol("DialogContext");function Ne(e){let t=P(Pe,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ne),n}return t}let de="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Ln=D({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:de},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:r}){var a,i;let o=(a=e.id)!=null?a:`headlessui-dialog-${pe()}`,u=g(!1);$(()=>{u.value=!0});let s=!1,d=h(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(s||(s=!0,console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),m=g(0),c=Ce(),v=h(()=>e.open===de&&c!==null?(c.value&L.Open)===L.Open:e.open),f=g(null),p=h(()=>G(f));if(r({el:f,$el:f}),!(e.open!==de||c!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof v.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${v.value===de?void 0:e.open}`);let y=h(()=>u.value&&v.value?0:1),C=h(()=>y.value===0),T=h(()=>m.value>1),W=P(Pe,null)!==null,[le,re]=on(),{resolveContainers:Y,mainTreeNodeRef:ae,MainTreeNode:oe}=Qt({portals:le,defaultContainers:[h(()=>{var w;return(w=K.panelRef.value)!=null?w:f.value})]}),he=h(()=>T.value?"parent":"leaf"),ie=h(()=>c!==null?(c.value&L.Closing)===L.Closing:!1),ge=h(()=>W||ie.value?!1:C.value),we=h(()=>{var w,b,F;return(F=Array.from((b=(w=p.value)==null?void 0:w.querySelectorAll("body > *"))!=null?b:[]).find(O=>O.id==="headlessui-portal-root"?!1:O.contains(E(ae))&&O instanceof HTMLElement))!=null?F:null});Ie(we,ge);let N=h(()=>T.value?!0:C.value),X=h(()=>{var w,b,F;return(F=Array.from((b=(w=p.value)==null?void 0:w.querySelectorAll("[data-headlessui-portal]"))!=null?b:[]).find(O=>O.contains(E(ae))&&O instanceof HTMLElement))!=null?F:null});Ie(X,N),en({type:"Dialog",enabled:h(()=>y.value===0),element:f,onUpdate:(w,b)=>{if(b==="Dialog")return k(w,{[$e.Add]:()=>m.value+=1,[$e.Remove]:()=>m.value-=1})}});let H=nn({name:"DialogDescription",slot:h(()=>({open:v.value}))}),j=g(null),K={titleId:j,panelRef:g(null),dialogState:y,setTitleId(w){j.value!==w&&(j.value=w)},close(){t("close",!1)}};x(Pe,K);let ke=h(()=>!(!C.value||T.value));Mt(Y,(w,b)=>{w.preventDefault(),K.close(),_e(()=>b==null?void 0:b.focus())},ke);let Re=h(()=>!(T.value||y.value!==0));lt((i=p.value)==null?void 0:i.defaultView,"keydown",w=>{Re.value&&(w.defaultPrevented||w.key===nt.Escape&&(w.preventDefault(),w.stopPropagation(),K.close()))});let He=h(()=>!(ie.value||y.value!==0||W));return Xt(p,He,w=>{var b;return{containers:[...(b=w.containers)!=null?b:[],Y]}}),A(w=>{if(y.value!==0)return;let b=E(f);if(!b)return;let F=new ResizeObserver(O=>{for(let ye of O){let ue=ye.target.getBoundingClientRect();ue.x===0&&ue.y===0&&ue.width===0&&ue.height===0&&K.close()}});F.observe(b),w(()=>F.disconnect())}),()=>{let{open:w,initialFocus:b,...F}=e,O={...n,ref:f,id:o,role:d.value,"aria-modal":y.value===0?!0:void 0,"aria-labelledby":j.value,"aria-describedby":H.value},ye={open:y.value===0};return S(Ue,{force:!0},()=>[S(an,()=>S(un,{target:f.value},()=>S(Ue,{force:!1},()=>S(Q,{initialFocus:b,containers:Y,features:C.value?k(he.value,{parent:Q.features.RestoreFocus,leaf:Q.features.All&~Q.features.FocusLock}):Q.features.None},()=>S(re,{},()=>R({ourProps:O,theirProps:{...F,...n},slot:ye,attrs:n,slots:l,visible:y.value===0,features:fe.RenderStrategy|fe.Static,name:"Dialog"})))))),S(oe)])}}}),$n=D({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:l}){var r;let a=(r=e.id)!=null?r:`headlessui-dialog-panel-${pe()}`,i=Ne("DialogPanel");l({el:i.panelRef,$el:i.panelRef});function o(u){u.stopPropagation()}return()=>{let{...u}=e,s={id:a,ref:i.panelRef,onClick:o};return R({ourProps:s,theirProps:u,slot:{open:i.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}}),Fn=D({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n}){var l;let r=(l=e.id)!=null?l:`headlessui-dialog-title-${pe()}`,a=Ne("DialogTitle");return $(()=>{a.setTitleId(r),M(()=>a.setTitleId(null))}),()=>{let{...i}=e;return R({ourProps:{id:r},theirProps:i,slot:{open:a.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}}});function dn(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Se(e,...t){e&&t.length>0&&e.classList.add(...t)}function ce(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Ae=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Ae||{});function cn(e,t){let n=te();if(!e)return n.dispose;let{transitionDuration:l,transitionDelay:r}=getComputedStyle(e),[a,i]=[l,r].map(o=>{let[u=0]=o.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,d)=>d-s);return u});return a!==0?n.setTimeout(()=>t("finished"),a+i):t("finished"),n.add(()=>t("cancelled")),n.dispose}function Ve(e,t,n,l,r,a){let i=te(),o=a!==void 0?dn(a):()=>{};return ce(e,...r),Se(e,...t,...n),i.nextFrame(()=>{ce(e,...n),Se(e,...l),i.add(cn(e,u=>(ce(e,...l,...t),Se(e,...r),o(u))))}),i.add(()=>ce(e,...t,...n,...l,...r)),i.add(()=>o("cancelled")),i.dispose}function V(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let xe=Symbol("TransitionContext");var fn=(e=>(e.Visible="visible",e.Hidden="hidden",e))(fn||{});function vn(){return P(xe,null)!==null}function pn(){let e=P(xe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function mn(){let e=P(Me,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Me=Symbol("NestingContext");function me(e){return"children"in e?me(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function dt(e){let t=g([]),n=g(!1);$(()=>n.value=!0),M(()=>n.value=!1);function l(a,i=I.Hidden){let o=t.value.findIndex(({id:u})=>u===a);o!==-1&&(k(i,{[I.Unmount](){t.value.splice(o,1)},[I.Hidden](){t.value[o].state="hidden"}}),!me(t)&&n.value&&(e==null||e()))}function r(a){let i=t.value.find(({id:o})=>o===a);return i?i.state!=="visible"&&(i.state="visible"):t.value.push({id:a,state:"visible"}),()=>l(a,I.Unmount)}return{children:t,register:r,unregister:l}}let ct=fe.RenderStrategy,hn=D({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:r}){let a=g(0);function i(){a.value|=L.Opening,t("beforeEnter")}function o(){a.value&=~L.Opening,t("afterEnter")}function u(){a.value|=L.Closing,t("beforeLeave")}function s(){a.value&=~L.Closing,t("afterLeave")}if(!vn()&&Rt())return()=>S(wn,{...e,onBeforeEnter:i,onAfterEnter:o,onBeforeLeave:u,onAfterLeave:s},l);let d=g(null),m=h(()=>e.unmount?I.Unmount:I.Hidden);r({el:d,$el:d});let{show:c,appear:v}=pn(),{register:f,unregister:p}=mn(),y=g(c.value?"visible":"hidden"),C={value:!0},T=pe(),W={value:!1},le=dt(()=>{!W.value&&y.value!=="hidden"&&(y.value="hidden",p(T),s())});$(()=>{let N=f(T);M(N)}),A(()=>{if(m.value===I.Hidden&&T){if(c.value&&y.value!=="visible"){y.value="visible";return}k(y.value,{hidden:()=>p(T),visible:()=>f(T)})}});let re=V(e.enter),Y=V(e.enterFrom),ae=V(e.enterTo),oe=V(e.entered),he=V(e.leave),ie=V(e.leaveFrom),ge=V(e.leaveTo);$(()=>{A(()=>{if(y.value==="visible"){let N=E(d);if(N instanceof Comment&&N.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function we(N){let X=C.value&&!v.value,H=E(d);!H||!(H instanceof HTMLElement)||X||(W.value=!0,c.value&&i(),c.value||u(),N(c.value?Ve(H,re,Y,ae,oe,j=>{W.value=!1,j===Ae.Finished&&o()}):Ve(H,he,ie,ge,oe,j=>{W.value=!1,j===Ae.Finished&&(me(le)||(y.value="hidden",p(T),s()))})))}return $(()=>{z([c],(N,X,H)=>{we(H),C.value=!1},{immediate:!0})}),x(Me,le),Ht(h(()=>k(y.value,{visible:L.Open,hidden:L.Closed})|a.value)),()=>{let{appear:N,show:X,enter:H,enterFrom:j,enterTo:K,entered:ke,leave:Re,leaveFrom:He,leaveTo:w,...b}=e,F={ref:d},O={...b,...v.value&&c.value&&ne.isServer?{class:Et([n.class,b.class,...re,...Y])}:{}};return R({theirProps:O,ourProps:F,slot:{},slots:l,attrs:n,features:ct,visible:y.value==="visible",name:"TransitionChild"})}}}),gn=hn,wn=D({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l}){let r=Ce(),a=h(()=>e.show===null&&r!==null?(r.value&L.Open)===L.Open:e.show);A(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let i=g(a.value?"visible":"hidden"),o=dt(()=>{i.value="hidden"}),u=g(!0),s={show:a,appear:h(()=>e.appear||!u.value)};return $(()=>{A(()=>{u.value=!1,a.value?i.value="visible":me(o)||(i.value="hidden")})}),x(Me,o),x(xe,s),()=>{let d=et(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),m={unmount:e.unmount};return R({ourProps:{...m,as:"template"},theirProps:{},slot:{},slots:{...l,default:()=>[S(gn,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...m,...d},l.default)]},attrs:{},features:ct,visible:i.value==="visible",name:"Transition"})}}});export{R as A,$n as G,fe as N,Ct as O,wn as S,Fn as V,Ln as Y,Sn as _,pe as a,L as b,nt as c,ze as d,Ke as e,B as f,hn as h,G as i,Ce as l,E as o,bn as r,Ht as t,k as u,Tn as v,Mt as w};
