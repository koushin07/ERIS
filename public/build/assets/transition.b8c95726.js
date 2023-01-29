import{P as de,M as k,F as fe,O as P,K as T,G as E,a as g,h as S,I as M,p as w,y as G,D as ce}from"./app.027fc9ac.js";function y(e,t,...r){if(e in t){let a=t[e];return typeof a=="function"?a(...r):a}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,y),n}var V=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(V||{}),m=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(m||{});function U({visible:e=!0,features:t=0,ourProps:r,theirProps:n,...a}){var l;let o=pe(n,r),i=Object.assign(a,{props:o});if(e||t&2&&o.static)return $(i);if(t&1){let u=(l=o.unmount)==null||l?0:1;return y(u,{[0](){return null},[1](){return $({...a,props:{...o,hidden:!0,style:{display:"none"}}})}})}return $(i)}function $({props:e,attrs:t,slots:r,slot:n,name:a}){var l;let{as:o,...i}=Q(e,["unmount","static"]),u=(l=r.default)==null?void 0:l.call(r,n),d={};if(n){let s=!1,c=[];for(let[f,p]of Object.entries(n))typeof p=="boolean"&&(s=!0),p===!0&&c.push(f);s&&(d["data-headlessui-state"]=c.join(" "))}if(o==="template"){if(u=K(u),Object.keys(i).length>0||Object.keys(t).length>0){let[s,...c]=u!=null?u:[];if(!ve(s)||c.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${a} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(i).concat(Object.keys(t)).sort((f,p)=>f.localeCompare(p)).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));return de(s,Object.assign({},i,d))}return Array.isArray(u)&&u.length===1?u[0]:u}return k(o,Object.assign({},i,d),u)}function K(e){return e.flatMap(t=>t.type===fe?K(t.children):[t])}function pe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let a in n)a.startsWith("on")&&typeof n[a]=="function"?(r[a]!=null||(r[a]=[]),r[a].push(n[a])):t[a]=n[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](a,...l){let o=r[n];for(let i of o){if(a instanceof Event&&a.defaultPrevented)return;i(a,...l)}}});return t}function Ve(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function Q(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}function ve(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let me=0;function he(){return++me}function be(){return he()}var ge=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(ge||{});function x(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let z=Symbol("Context");var F=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(F||{});function ye(){return J()!==null}function J(){return P(z,null)}function we(e){T(z,e)}const Y=typeof window>"u"||typeof document>"u";function Ee(e){if(Y)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=x(e);if(t)return t.ownerDocument}return document}let H=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Se=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Se||{}),Fe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Fe||{}),Oe=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Oe||{});function Le(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(H))}var X=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(X||{});function Ae(e,t=0){var r;return e===((r=Ee(e))==null?void 0:r.body)?!1:y(t,{[0](){return e.matches(H)},[1](){let n=e;for(;n!==null;){if(n.matches(H))return!0;n=n.parentElement}return!1}})}function Ke(e){e==null||e.focus({preventScroll:!0})}let Te=["textarea","input"].join(",");function xe(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Te))!=null?r:!1}function Pe(e,t=r=>r){return e.slice().sort((r,n)=>{let a=t(r),l=t(n);if(a===null||l===null)return 0;let o=a.compareDocumentPosition(l);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Qe(e,t,r=!0,n=null){var a;let l=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,o=Array.isArray(e)?r?Pe(e):e:Le(e);n=n!=null?n:l.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(n))-1;if(t&4)return Math.max(0,o.indexOf(n))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},s=0,c=o.length,f;do{if(s>=c||s+c<=0)return 0;let p=u+s;if(t&16)p=(p+c)%c;else{if(p<0)return 3;if(p>=c)return 1}f=o[p],f==null||f.focus(d),s+=i}while(f!==l.activeElement);return t&6&&xe(f)&&f.select(),f.hasAttribute("tabindex")||f.setAttribute("tabindex","0"),2}function D(e,t,r){Y||E(n=>{document.addEventListener(e,t,r),n(()=>document.removeEventListener(e,t,r))})}function ze(e,t,r=S(()=>!0)){function n(l,o){if(!r.value||l.defaultPrevented)return;let i=o(l);if(i===null||!i.ownerDocument.documentElement.contains(i))return;let u=function d(s){return typeof s=="function"?d(s()):Array.isArray(s)||s instanceof Set?s:[s]}(e);for(let d of u){if(d===null)continue;let s=d instanceof HTMLElement?d:x(d);if(s!=null&&s.contains(i))return}return!Ae(i,X.Loose)&&i.tabIndex!==-1&&l.preventDefault(),t(l,i)}let a=g(null);D("mousedown",l=>{r.value&&(a.value=l.target)},!0),D("click",l=>{!a.value||(n(l,()=>a.value),a.value=null)},!0),D("blur",l=>n(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var je=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(je||{});let Je=M({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:r}){return()=>{let{features:n,...a}=e,l={"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return U({ourProps:l,theirProps:a,slot:{},attrs:r,slots:t,name:"Hidden"})}}});function Z(){let e=[],t=[],r={enqueue(n){t.push(n)},addEventListener(n,a,l,o){return n.addEventListener(a,l,o),r.add(()=>n.removeEventListener(a,l,o))},requestAnimationFrame(...n){let a=requestAnimationFrame(...n);r.add(()=>cancelAnimationFrame(a))},nextFrame(...n){r.requestAnimationFrame(()=>{r.requestAnimationFrame(...n)})},setTimeout(...n){let a=setTimeout(...n);r.add(()=>clearTimeout(a))},add(n){e.push(n)},dispose(){for(let n of e.splice(0))n()},async workQueue(){for(let n of t.splice(0))await n()}};return r}function Ne(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function C(e,...t){e&&t.length>0&&e.classList.add(...t)}function A(e,...t){e&&t.length>0&&e.classList.remove(...t)}var B=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(B||{});function $e(e,t){let r=Z();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:a}=getComputedStyle(e),[l,o]=[n,a].map(i=>{let[u=0]=i.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,s)=>s-d);return u});return l!==0?r.setTimeout(()=>t("finished"),l+o):t("finished"),r.add(()=>t("cancelled")),r.dispose}function _(e,t,r,n,a,l){let o=Z(),i=l!==void 0?Ne(l):()=>{};return A(e,...a),C(e,...t,...r),o.nextFrame(()=>{A(e,...r),C(e,...n),o.add($e(e,u=>(A(e,...n,...t),C(e,...a),i(u))))}),o.add(()=>A(e,...t,...r,...n,...a)),o.add(()=>i("cancelled")),o.dispose}function b(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let R=Symbol("TransitionContext");var De=(e=>(e.Visible="visible",e.Hidden="hidden",e))(De||{});function Ce(){return P(R,null)!==null}function He(){let e=P(R,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Be(){let e=P(I,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let I=Symbol("NestingContext");function j(e){return"children"in e?j(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function ee(e){let t=g([]),r=g(!1);w(()=>r.value=!0),G(()=>r.value=!1);function n(l,o=m.Hidden){let i=t.value.findIndex(({id:u})=>u===l);i!==-1&&(y(o,{[m.Unmount](){t.value.splice(i,1)},[m.Hidden](){t.value[i].state="hidden"}}),!j(t)&&r.value&&(e==null||e()))}function a(l){let o=t.value.find(({id:i})=>i===l);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:l,state:"visible"}),()=>n(l,m.Unmount)}return{children:t,register:a,unregister:n}}let te=V.RenderStrategy,ke=M({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:r,slots:n,expose:a}){if(!Ce()&&ye())return()=>k(Ue,{...e,onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave")},n);let l=g(null),o=g("visible"),i=S(()=>e.unmount?m.Unmount:m.Hidden);a({el:l,$el:l});let{show:u,appear:d}=He(),{register:s,unregister:c}=Be(),f={value:!0},p=be(),O={value:!1},q=ee(()=>{O.value||(o.value="hidden",c(p),t("afterLeave"))});w(()=>{let v=s(p);G(v)}),E(()=>{if(i.value===m.Hidden&&!!p){if(u&&o.value!=="visible"){o.value="visible";return}y(o.value,{hidden:()=>c(p),visible:()=>s(p)})}});let ne=b(e.enter),re=b(e.enterFrom),ae=b(e.enterTo),W=b(e.entered),le=b(e.leave),oe=b(e.leaveFrom),ie=b(e.leaveTo);w(()=>{E(()=>{if(o.value==="visible"){let v=x(l);if(v instanceof Comment&&v.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function ue(v){let N=f.value&&!d.value,h=x(l);!h||!(h instanceof HTMLElement)||N||(O.value=!0,u.value&&t("beforeEnter"),u.value||t("beforeLeave"),v(u.value?_(h,ne,re,ae,W,L=>{O.value=!1,L===B.Finished&&t("afterEnter")}):_(h,le,oe,ie,W,L=>{O.value=!1,L===B.Finished&&(j(q)||(o.value="hidden",c(p),t("afterLeave")))})))}return w(()=>{ce([u],(v,N,h)=>{ue(h),f.value=!1},{immediate:!0})}),T(I,q),we(S(()=>y(o.value,{visible:F.Open,hidden:F.Closed}))),()=>{let{appear:v,show:N,enter:h,enterFrom:L,enterTo:Re,entered:Ie,leave:qe,leaveFrom:We,leaveTo:_e,...se}=e;return U({theirProps:se,ourProps:{ref:l},slot:{},slots:n,attrs:r,features:te,visible:o.value==="visible",name:"TransitionChild"})}}}),Me=ke,Ue=M({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:r,slots:n}){let a=J(),l=S(()=>e.show===null&&a!==null?y(a.value,{[F.Open]:!0,[F.Closed]:!1}):e.show);E(()=>{if(![!0,!1].includes(l.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=g(l.value?"visible":"hidden"),i=ee(()=>{o.value="hidden"}),u=g(!0),d={show:l,appear:S(()=>e.appear||!u.value)};return w(()=>{E(()=>{u.value=!1,l.value?o.value="visible":j(i)||(o.value="hidden")})}),T(I,i),T(R,d),()=>{let s=Q(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),c={unmount:e.unmount};return U({ourProps:{...c,as:"template"},theirProps:{},slot:{},slots:{...n,default:()=>[k(Me,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...r,...c,...s},n.default)]},attrs:{},features:te,visible:o.value==="visible",name:"Transition"})}}});export{Se as M,Fe as N,Pe as O,Ve as P,V as R,U as V,Je as a,je as b,we as c,ge as d,ke as e,Ue as f,Y as g,Ke as h,Qe as i,F as l,Ee as m,x as o,J as p,Z as s,be as t,y as u,Q as w,ze as y};
