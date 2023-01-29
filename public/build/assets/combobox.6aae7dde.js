import{o as h,m as Y,u as $,y as Z,c as ee,l as U,a as te,P as oe,b as le,V as N,w as K,t as j,R as F,p as ae,O as ne,d as T}from"./transition.b8c95726.js";import{a as D,p as _,G as V,h as S,I as B,J as O,K as ue,M as W,F as ie,D as J,y as re,N as A,O as se}from"./app.027fc9ac.js";function ve(e){throw new Error("Unexpected object: "+e)}var P=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(P||{});function pe(e,a){let l=a.resolveItems();if(l.length<=0)return null;let s=a.resolveActiveIndex(),t=s!=null?s:-1,o=(()=>{switch(e.focus){case 0:return l.findIndex(u=>!a.resolveDisabled(u));case 1:{let u=l.slice().reverse().findIndex((b,m,f)=>t!==-1&&f.length-m-1>=t?!1:!a.resolveDisabled(b));return u===-1?u:l.length-1-u}case 2:return l.findIndex((u,b)=>b<=t?!1:!a.resolveDisabled(u));case 3:{let u=l.slice().reverse().findIndex(b=>!a.resolveDisabled(b));return u===-1?u:l.length-1-u}case 4:return l.findIndex(u=>a.resolveId(u)===e.id);case 5:return null;default:ve(e)}})();return o===-1?s:o}function q(e,a){if(e)return e;let l=a!=null?a:"button";if(typeof l=="string"&&l.toLowerCase()==="button")return"button"}function de(e,a){let l=D(q(e.value.type,e.value.as));return _(()=>{l.value=q(e.value.type,e.value.as)}),V(()=>{var s;l.value||!h(a)||h(a)instanceof HTMLButtonElement&&!((s=h(a))!=null&&s.hasAttribute("type"))&&(l.value="button")}),l}function be({container:e,accept:a,walk:l,enabled:s}){V(()=>{let t=e.value;if(!t||s!==void 0&&!s.value)return;let o=Y(e);if(!o)return;let u=Object.assign(m=>a(m),{acceptNode:a}),b=o.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,u,!1);for(;b.nextNode();)l(b.currentNode)})}function G(e={},a=null,l=[]){for(let[s,t]of Object.entries(e))Q(l,z(a,s),t);return l}function z(e,a){return e?e+"["+a+"]":a}function Q(e,a,l){if(Array.isArray(l))for(let[s,t]of l.entries())Q(e,z(a,s.toString()),t);else l instanceof Date?e.push([a,l.toISOString()]):typeof l=="boolean"?e.push([a,l?"1":"0"]):typeof l=="string"?e.push([a,l]):typeof l=="number"?e.push([a,`${l}`]):l==null?e.push([a,""]):G(l,a,e)}function ce(e,a,l){let s=D(l==null?void 0:l.value),t=S(()=>e.value!==void 0);return[S(()=>t.value?e.value:s.value),function(o){return t.value||(s.value=o),a==null?void 0:a(o)}]}function fe(e,a){return e===a}var me=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(me||{}),xe=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(xe||{}),Oe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Oe||{});let X=Symbol("ComboboxContext");function E(e){let a=se(X,null);if(a===null){let l=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,E),l}return a}let Re=B({name:"Combobox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>fe},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},name:{type:String},nullable:{type:Boolean,default:!1},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:a,attrs:l,emit:s}){let t=D(1),o=D(null),u=D(null),b=D(null),m=D(null),f=D({static:!1,hold:!1}),i=D([]),y=D(null),n=D(1),g=D(!1);function c(v=d=>d){let d=y.value!==null?i.value[y.value]:null,p=ne(v(i.value.slice()),R=>h(R.dataRef.domRef)),r=d?p.indexOf(d):null;return r===-1&&(r=null),{options:p,activeOptionIndex:r}}let C=S(()=>e.multiple?1:0),w=S(()=>e.nullable),[k,L]=ce(S(()=>e.modelValue),v=>s("update:modelValue",v),S(()=>e.defaultValue)),x={comboboxState:t,value:k,mode:C,compare(v,d){if(typeof e.by=="string"){let p=e.by;return(v==null?void 0:v[p])===(d==null?void 0:d[p])}return e.by(v,d)},nullable:w,inputRef:u,labelRef:o,buttonRef:b,optionsRef:m,disabled:S(()=>e.disabled),options:i,change(v){L(v)},activeOptionIndex:S(()=>{if(g.value&&y.value===null&&i.value.length>0){let v=i.value.findIndex(d=>!d.dataRef.disabled);if(v!==-1)return v}return y.value}),activationTrigger:n,optionsPropsRef:f,closeCombobox(){g.value=!1,!e.disabled&&t.value!==1&&(t.value=1,y.value=null)},openCombobox(){if(g.value=!0,e.disabled||t.value===0)return;let v=i.value.findIndex(d=>{let p=O(d.dataRef.value);return $(C.value,{[0]:()=>x.compare(O(x.value.value),O(p)),[1]:()=>O(x.value.value).some(r=>x.compare(O(r),O(p)))})});v!==-1&&(y.value=v),t.value=0},goToOption(v,d,p){if(g.value=!1,e.disabled||m.value&&!f.value.static&&t.value===1)return;let r=c();if(r.activeOptionIndex===null){let I=r.options.findIndex(M=>!M.dataRef.disabled);I!==-1&&(r.activeOptionIndex=I)}let R=pe(v===P.Specific?{focus:P.Specific,id:d}:{focus:v},{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:I=>I.id,resolveDisabled:I=>I.dataRef.disabled});y.value=R,n.value=p!=null?p:1,i.value=r.options},selectOption(v){let d=i.value.find(r=>r.id===v);if(!d)return;let{dataRef:p}=d;L($(C.value,{[0]:()=>p.value,[1]:()=>{let r=O(x.value.value).slice(),R=O(p.value),I=r.findIndex(M=>x.compare(R,O(M)));return I===-1?r.push(R):r.splice(I,1),r}}))},selectActiveOption(){if(x.activeOptionIndex.value===null)return;let{dataRef:v,id:d}=i.value[x.activeOptionIndex.value];L($(C.value,{[0]:()=>v.value,[1]:()=>{let p=O(x.value.value).slice(),r=O(v.value),R=p.findIndex(I=>x.compare(r,O(I)));return R===-1?p.push(r):p.splice(R,1),p}})),x.goToOption(P.Specific,d)},registerOption(v,d){let p={id:v,dataRef:d},r=c(R=>[...R,p]);if(y.value===null){let R=d.value.value;$(C.value,{[0]:()=>x.compare(O(x.value.value),O(R)),[1]:()=>O(x.value.value).some(I=>x.compare(O(I),O(R)))})&&(r.activeOptionIndex=r.options.indexOf(p))}i.value=r.options,y.value=r.activeOptionIndex,n.value=1},unregisterOption(v){let d=c(p=>{let r=p.findIndex(R=>R.id===v);return r!==-1&&p.splice(r,1),p});i.value=d.options,y.value=d.activeOptionIndex,n.value=1}};Z([u,b,m],()=>x.closeCombobox(),S(()=>t.value===0)),ue(X,x),ee(S(()=>$(t.value,{[0]:U.Open,[1]:U.Closed})));let H=S(()=>x.activeOptionIndex.value===null?null:i.value[x.activeOptionIndex.value].dataRef.value);return()=>{let{name:v,disabled:d,...p}=e,r={open:t.value===0,disabled:d,activeIndex:x.activeOptionIndex.value,activeOption:H.value,value:k.value};return W(ie,[...v!=null&&k.value!=null?G({[v]:k.value}).map(([R,I])=>W(te,oe({features:le.Hidden,key:R,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:R,value:I}))):[],N({theirProps:{...l,...K(p,["modelValue","defaultValue","nullable","multiple","onUpdate:modelValue","by"])},ourProps:{},slot:r,slots:a,attrs:l,name:"Combobox"})])}}});B({name:"ComboboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(e,{attrs:a,slots:l}){let s=E("ComboboxLabel"),t=`headlessui-combobox-label-${j()}`;function o(){var u;(u=h(s.inputRef))==null||u.focus({preventScroll:!0})}return()=>{let u={open:s.comboboxState.value===0,disabled:s.disabled.value},b={id:t,ref:s.labelRef,onClick:o};return N({ourProps:b,theirProps:e,slot:u,attrs:a,slots:l,name:"ComboboxLabel"})}}});let Se=B({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"}},setup(e,{attrs:a,slots:l,expose:s}){let t=E("ComboboxButton"),o=`headlessui-combobox-button-${j()}`;s({el:t.buttonRef,$el:t.buttonRef});function u(f){t.disabled.value||(t.comboboxState.value===0?t.closeCombobox():(f.preventDefault(),t.openCombobox()),A(()=>{var i;return(i=h(t.inputRef))==null?void 0:i.focus({preventScroll:!0})}))}function b(f){switch(f.key){case T.ArrowDown:f.preventDefault(),f.stopPropagation(),t.comboboxState.value===1&&t.openCombobox(),A(()=>{var i;return(i=t.inputRef.value)==null?void 0:i.focus({preventScroll:!0})});return;case T.ArrowUp:f.preventDefault(),f.stopPropagation(),t.comboboxState.value===1&&(t.openCombobox(),A(()=>{t.value.value||t.goToOption(P.Last)})),A(()=>{var i;return(i=t.inputRef.value)==null?void 0:i.focus({preventScroll:!0})});return;case T.Escape:if(t.comboboxState.value!==0)return;f.preventDefault(),t.optionsRef.value&&!t.optionsPropsRef.value.static&&f.stopPropagation(),t.closeCombobox(),A(()=>{var i;return(i=t.inputRef.value)==null?void 0:i.focus({preventScroll:!0})});return}}let m=de(S(()=>({as:e.as,type:a.type})),t.buttonRef);return()=>{var f,i;let y={open:t.comboboxState.value===0,disabled:t.disabled.value,value:t.value.value},n={ref:t.buttonRef,id:o,type:m.value,tabindex:"-1","aria-haspopup":!0,"aria-controls":(f=h(t.optionsRef))==null?void 0:f.id,"aria-expanded":t.disabled.value?void 0:t.comboboxState.value===0,"aria-labelledby":t.labelRef.value?[(i=h(t.labelRef))==null?void 0:i.id,o].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:b,onClick:u};return N({ourProps:n,theirProps:e,slot:y,attrs:a,slots:l,name:"ComboboxButton"})}}}),he=B({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function}},emits:{change:e=>!0},setup(e,{emit:a,attrs:l,slots:s,expose:t}){let o=E("ComboboxInput"),u=`headlessui-combobox-input-${j()}`;t({el:o.inputRef,$el:o.inputRef});let b=D(o.value.value),m=()=>{var n;let g=o.value.value;return h(o.inputRef)?typeof e.displayValue<"u"?(n=e.displayValue(g))!=null?n:"":typeof g=="string"?g:"":""};_(()=>{J([o.value],()=>b.value=m(),{flush:"sync",immediate:!0}),J([b,o.comboboxState],([n,g],[c,C])=>{let w=h(o.inputRef);!w||(C===0&&g===1||n!==c)&&(w.value=n)},{immediate:!0})});function f(n){switch(n.key){case T.Backspace:case T.Delete:if(o.mode.value!==0||!o.nullable.value)return;let g=n.currentTarget;requestAnimationFrame(()=>{if(g.value===""){o.change(null);let c=h(o.optionsRef);c&&(c.scrollTop=0),o.goToOption(P.Nothing)}});break;case T.Enter:if(o.comboboxState.value!==0||n.isComposing)return;if(n.preventDefault(),n.stopPropagation(),o.activeOptionIndex.value===null){o.closeCombobox();return}o.selectActiveOption(),o.mode.value===0&&o.closeCombobox();break;case T.ArrowDown:return n.preventDefault(),n.stopPropagation(),$(o.comboboxState.value,{[0]:()=>o.goToOption(P.Next),[1]:()=>o.openCombobox()});case T.ArrowUp:return n.preventDefault(),n.stopPropagation(),$(o.comboboxState.value,{[0]:()=>o.goToOption(P.Previous),[1]:()=>{o.openCombobox(),A(()=>{o.value.value||o.goToOption(P.Last)})}});case T.Home:case T.PageUp:return n.preventDefault(),n.stopPropagation(),o.goToOption(P.First);case T.End:case T.PageDown:return n.preventDefault(),n.stopPropagation(),o.goToOption(P.Last);case T.Escape:if(o.comboboxState.value!==0)return;n.preventDefault(),o.optionsRef.value&&!o.optionsPropsRef.value.static&&n.stopPropagation(),o.closeCombobox();break;case T.Tab:if(o.comboboxState.value!==0)return;o.mode.value===0&&o.selectActiveOption(),o.closeCombobox();break}}function i(n){a("change",n)}function y(n){o.openCombobox(),a("change",n)}return()=>{var n,g,c,C,w,k;let L={open:o.comboboxState.value===0},x={"aria-controls":(n=o.optionsRef.value)==null?void 0:n.id,"aria-expanded":o.disabled.value?void 0:o.comboboxState.value===0,"aria-activedescendant":o.activeOptionIndex.value===null||(g=o.options.value[o.activeOptionIndex.value])==null?void 0:g.id,"aria-multiselectable":o.mode.value===1?!0:void 0,"aria-labelledby":(w=(c=h(o.labelRef))==null?void 0:c.id)!=null?w:(C=h(o.buttonRef))==null?void 0:C.id,id:u,onKeydown:f,onChange:i,onInput:y,role:"combobox",type:(k=l.type)!=null?k:"text",tabIndex:0,ref:o.inputRef},H=K(e,["displayValue"]);return N({ourProps:x,theirProps:H,slot:L,attrs:l,slots:s,features:F.RenderStrategy|F.Static,name:"ComboboxInput"})}}}),Ce=B({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(e,{attrs:a,slots:l,expose:s}){let t=E("ComboboxOptions"),o=`headlessui-combobox-options-${j()}`;s({el:t.optionsRef,$el:t.optionsRef}),V(()=>{t.optionsPropsRef.value.static=e.static}),V(()=>{t.optionsPropsRef.value.hold=e.hold});let u=ae(),b=S(()=>u!==null?u.value===U.Open:t.comboboxState.value===0);return be({container:S(()=>h(t.optionsRef)),enabled:S(()=>t.comboboxState.value===0),accept(m){return m.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:m.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(m){m.setAttribute("role","none")}}),()=>{var m,f,i,y;let n={open:t.comboboxState.value===0},g={"aria-activedescendant":t.activeOptionIndex.value===null||(m=t.options.value[t.activeOptionIndex.value])==null?void 0:m.id,"aria-labelledby":(y=(f=h(t.labelRef))==null?void 0:f.id)!=null?y:(i=h(t.buttonRef))==null?void 0:i.id,id:o,ref:t.optionsRef,role:"listbox"},c=K(e,["hold"]);return N({ourProps:g,theirProps:c,slot:n,attrs:a,slots:l,features:F.RenderStrategy|F.Static,visible:b.value,name:"ComboboxOptions"})}}}),Ie=B({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(e,{slots:a,attrs:l,expose:s}){let t=E("ComboboxOption"),o=`headlessui-combobox-option-${j()}`,u=D(null);s({el:u,$el:u});let b=S(()=>t.activeOptionIndex.value!==null?t.options.value[t.activeOptionIndex.value].id===o:!1),m=S(()=>$(t.mode.value,{[0]:()=>t.compare(O(t.value.value),O(e.value)),[1]:()=>O(t.value.value).some(c=>t.compare(O(c),O(e.value)))})),f=S(()=>({disabled:e.disabled,value:e.value,domRef:u}));_(()=>t.registerOption(o,f)),re(()=>t.unregisterOption(o)),V(()=>{t.comboboxState.value===0&&(!b.value||t.activationTrigger.value!==0&&A(()=>{var c,C;return(C=(c=h(u))==null?void 0:c.scrollIntoView)==null?void 0:C.call(c,{block:"nearest"})}))});function i(c){if(e.disabled)return c.preventDefault();t.selectOption(o),t.mode.value===0&&t.closeCombobox()}function y(){if(e.disabled)return t.goToOption(P.Nothing);t.goToOption(P.Specific,o)}function n(){e.disabled||b.value||t.goToOption(P.Specific,o,0)}function g(){e.disabled||!b.value||t.optionsPropsRef.value.hold||t.goToOption(P.Nothing)}return()=>{let{disabled:c}=e,C={active:b.value,selected:m.value,disabled:c},w={id:o,ref:u,role:"option",tabIndex:c===!0?void 0:-1,"aria-disabled":c===!0?!0:void 0,"aria-selected":m.value,disabled:void 0,onClick:i,onFocus:y,onPointermove:n,onMousemove:n,onPointerleave:g,onMouseleave:g};return N({ourProps:w,theirProps:e,slot:C,attrs:l,slots:a,name:"ComboboxOption"})}}});export{Re as A,he as B,Ie as H,Se as L,Ce as j};
