import{A as y}from"./AdminLayout.8e413472.js";import{C}from"./ContentBox.6aa44b1c.js";import{a as c,D as V,c as x,g as f,U as j,k as D,r as d,o as a,d as e,f as u,b as p,q as g,t as r,F as k,e as M}from"./app.4093ea43.js";import{h as B}from"./moment.9709ab41.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Dropdown.38f40bcb.js";import"./eprris.ccf75d97.js";const F={layout:y,components:{ContentBox:C},props:{incidents:Object,provinces:Object},setup(){const i=c(),n=c(),s=c(),o=c(),_=()=>{j.Inertia.get(D().url.value,{date:o.value,municipality:n.value.id},{preserveState:!0})};return V(i,l=>{axios.get("/api/municipalities/"+l.province).then(m=>s.value=m.data)}),{search:_,province:i,municipality:n,date:o,municipalities:s,tableHeader:[{name:"Incident"},{name:"File Name"},{name:"From"},{name:"Date"},{name:"Action"}],moment:B}}},H={class:"flex flex-row pt-2 space-x-10 justify-between pb-10"},N={class:"flex flex-row w-full space-x-10"},U={class:"table-auto w-full text-sm border-x-2 border-b-2 border-orange-200 text-gray-500 dark:text-gray-400"},A={class:"text-xs text-stone-900 text-center uppercase bg-orange-300 dark:bg-gray-700 dark:text-gray-400"},P={class:"flex flex-row justify-center py-1"},S={class:"max-h-full even:bg-orange-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700"},z={scope:"row",class:"text-center p-4"},I={scope:"row",class:"text-center p-4"},O={scope:"row",class:"text-center p-4"},q={class:"text-center"},E={class:"text-center gap-"},R=["href"],Y=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})],-1),G=[Y],J=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1);function K(i,n,s,o,_,w){const l=d("v-select"),m=d("Datepicker"),b=d("inertia-link"),v=d("Content-box");return a(),x(v,{class:"h-fit p-7 flex flex-col space-y-3"},{default:f(()=>[e("div",H,[e("div",N,[u(l,{modelValue:o.province,"onUpdate:modelValue":n[0]||(n[0]=t=>o.province=t),class:"w-1/5",options:s.provinces,label:"province",placeholder:"Provinces"},null,8,["modelValue","options"]),u(l,{modelValue:o.municipality,"onUpdate:modelValue":n[1]||(n[1]=t=>o.municipality=t),class:"w-1/5",options:o.municipalities,label:"municipality",placeholder:"Municipality"},null,8,["modelValue","options"]),u(m,{modelValue:o.date,"onUpdate:modelValue":n[2]||(n[2]=t=>o.date=t),"show-now-button":"",class:"w-1/5","enable-time-picker":!1,"aria-placeholder":"Date"},null,8,["modelValue"])]),e("button",{class:"bg-button px-2 text-white rounded justify-end",onClick:n[3]||(n[3]=(...t)=>o.search&&o.search(...t))}," Search ")]),e("table",U,[e("thead",A,[e("tr",null,[(a(!0),p(k,null,g(o.tableHeader,(t,h)=>(a(),p("th",{scope:"col",class:"py-2 px-6",key:h},[e("div",P,[e("span",null,r(t.name),1)])]))),128))])]),e("tbody",null,[(a(!0),p(k,null,g(s.incidents.data,(t,h)=>(a(),p("tr",S,[e("td",z,r(t.incident),1),e("td",I,r(t.filename),1),e("td",O,r(t.municipality),1),e("td",q,r(o.moment(t.submitted_at).format("MMMM DD Y")),1),e("td",E,[e("a",{href:"/report/"+t.id,type:"button",target:"_blank",class:"mr-4 font-medium text-green-600 dark:text-orange-500 hover:underline"},G,8,R),i.$page.props.auth.user.assign_office.municipality?(a(),x(b,{key:0,method:"delete",type:"button",class:"font-medium text-red-600 dark:text-orange-500 hover:underline",href:"/province/incident/"+t.id},{default:f(()=>[J]),_:2},1032,["href"])):M("",!0)])]))),256))])])]),_:1})}const te=L(F,[["render",K]]);export{te as default};
