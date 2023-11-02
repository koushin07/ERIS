import{L as g}from"./MunicipalityLayout.92b79982.js";import{C as k}from"./ContentBox.6aa44b1c.js";import{H as w,a as n,D as b,c as v,g as y,U as C,k as D,r as x,o as a,d as e,f as j,b as c,q as h,t as l,F as f,R as B}from"./app.4093ea43.js";import{h as M}from"./moment.9709ab41.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";import"./PendingTransactions.b0a53db4.js";import"./Dropdown.38f40bcb.js";import"./eprris.ccf75d97.js";const H={layout:g,components:{ContentBox:k,Head:w},props:{incidents:Object,provinces:Array},setup(){const i=n(),s=n(),r=n(),o=n(),m=[{name:"Incident"},{name:"File Name"},{name:"Date"},{name:"Action"}],u=()=>{C.Inertia.get(D().url.value,{date:o.value},{preserveState:!0})};return b(i,d=>{B.get("/api/municipalities/"+d.province).then(p=>r.value=p.data)}),{tableHeader:m,municipalities:r,moment:M,province:i,municipality:s,date:o,search:u}}},V={class:"flex flex-row pt-2 space-x-10 justify-between pb-2"},N={class:"flex flex-row space-x-10 justify-start w-3/4"},A={class:"table-auto w-full text-sm border-x-2 border-b-2 border-orange-200 text-gray-500 dark:text-gray-400"},F={class:"text-xs text-stone-900 text-center uppercase bg-orange-300 dark:bg-gray-700 dark:text-gray-400"},I={class:"flex flex-row justify-center py-1"},z={class:"max-h-full even:bg-orange-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700"},P={scope:"row",class:"text-center p-4"},S={scope:"row",class:"text-center p-4"},U={class:"text-center"},q={class:"text-center gap-"},E=["href"],O=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})],-1),R=[O],Y=e("a",{type:"button",class:"font-medium text-red-600 dark:text-orange-500 hover:underline"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})])],-1);function G(i,s,r,o,m,u){const d=x("Datepicker"),p=x("Content-box");return a(),v(p,{class:"h-fit p-7 flex flex-col space-y-3"},{default:y(()=>[e("div",V,[e("div",N,[j(d,{modelValue:o.date,"onUpdate:modelValue":s[0]||(s[0]=t=>o.date=t),"show-now-button":"",class:"w-1/5","enable-time-picker":!1,"aria-placeholder":"Date"},null,8,["modelValue"])])]),e("table",A,[e("thead",F,[e("tr",null,[(a(!0),c(f,null,h(o.tableHeader,(t,_)=>(a(),c("th",{scope:"col",class:"py-2 px-6",key:_},[e("div",I,[e("span",null,l(t.name),1)])]))),128))])]),e("tbody",null,[(a(!0),c(f,null,h(r.incidents.data,(t,_)=>(a(),c("tr",z,[e("td",P,l(t.incident),1),e("td",S,l(t.filename),1),e("td",U,l(o.moment(t.INC_submitted_at).format("MMMM DD Y")),1),e("td",q,[e("a",{href:"/report/"+t.id,type:"button",target:"_blank",class:"mr-4 font-medium text-green-600 dark:text-orange-500 hover:underline"},R,8,E),Y])]))),256))])])]),_:1})}const ee=L(H,[["render",G]]);export{ee as default};