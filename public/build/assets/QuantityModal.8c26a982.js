import{a as i,o as b,b as g,d as e,i as _,f as t,g as a,u as o,z as h,W as x,w,F as k}from"./app.027fc9ac.js";import{N as q,_ as C}from"./dialog.aec603e9.js";import{e as f,f as M}from"./transition.b8c95726.js";const N=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),j={class:"fixed inset-0 overflow-y-auto"},B={class:"flex min-h-full items-center justify-center p-4 text-center"},K={class:"grid grid-flow-row gap-5"},V=["onKeyup","placeholder"],S={__name:"QuantityModal",props:{muni:Object,placeholder:String},emits:["submit"],setup(r,{emit:p}){const n=r,l=i(!1),s=i(null);i(!1);function c(){l.value=!1}function m(){l.value=!0}function u(){n.muni.quantity>=s.value?(p("submit",s,n.muni),c()):alert("only "+n.muni.quantity+" is available")}return(v,d)=>(b(),g(k,null,[e("div",{onClick:m},[_(v.$slots,"trigger")]),t(o(M),{appear:"",show:l.value,as:"template"},{default:a(()=>[t(o(q),{as:"div",onClose:c,class:"relative z-50"},{default:a(()=>[t(o(f),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[N]),_:1}),e("div",j,[e("div",B,[t(o(f),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[t(o(C),{class:"grid place-content-center w-full max-w-md transform overflow-hidden rounded bg-slate-50 p-6 text-left align-middle shadow-xl transition-all"},{default:a(()=>[e("div",K,[h(e("input",{type:"number",onKeyup:w(u,["enter"]),name:"quantity",class:"rounded text-center",placeholder:r.placeholder,"onUpdate:modelValue":d[0]||(d[0]=y=>s.value=y)},null,40,V),[[x,s.value]])]),e("div",{class:"mt-4 grid place-content-center"},[e("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-orange-300 px-4 py-2 text-sm font-medium hover:bg-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:u}," Proceed ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])],64))}};export{S as _};
