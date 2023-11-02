import{a as c,k as _,D as v,c as M,g as d,r as l,o as r,d as e,z as j,W as P,f as m,b as u,q as g,t as s,F as x,U as y}from"./app.8f761c41.js";import{C as L}from"./ContentBox.cc59c672.js";import{_ as S}from"./Table.98acb314.js";import{P as V}from"./ProvinceLayout.077c6682.js";import{_ as q}from"./Pagination.030ddf76.js";import{h as D}from"./moment.9709ab41.js";import{_ as O}from"./_plugin-vue_export-helper.cdc0426e.js";import"./PendingTransactions.d992f2e3.js";import"./Dropdown.65581d49.js";import"./eprris.ccf75d97.js";const T={layout:V,components:{Pagination:q,ContentBox:L,Table:S},props:{equipments:Object,name:Object,filters:[Array,Object],municipalities:Object},setup(h){c(_().url.value);const o=c(h.search),n=c({}),a=[{name:"equipment"},{name:"available"},{name:"damages"},{name:"municipality"},{name:"date Recieved"},{name:"action"}],p=c();return v(o,i=>{y.Inertia.get(_().url.value,{search:i},{preserveState:!0})}),v(p,i=>{y.Inertia.get(_().url.value,{municipality:i.municipality},{preserveState:!0})}),{tableHead:a,search:o,tableBody:n,moment:D,municipality:p}}},z={class:"flex flex-col space-y-5"},I={class:"grid grid-cols-4 place-content-between"},U=e("span",{class:"text-base font-bold col-span-2 md:col-span-3"},"Consolidated Inventory",-1),A={class:"relative col-span-2 md:col-span-1"},F={class:"relative w-full max-w-xl mr-6 focus-within:text-purple-500"},H=e("div",{class:"absolute inset-y-0 flex items-center pl-2"},[e("svg",{class:"w-4 h-4","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),N={class:"relative"},E={class:"flex flex-row justify-center py-1"},R={class:"max-h-full even:bg-orange-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700"},W={scope:"row",class:"text-center p-4"},Y={class:"text-center"},G={class:"text-center"},J={class:"text-center"},K={class:"text-center"},Q={class:"text-center"},X=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"})],-1),Z={class:"bg-white"};function $(h,o,n,a,p,i){const b=l("v-select"),w=l("inertia-link"),k=l("Table"),B=l("Pagination"),C=l("ContentBox");return r(),M(C,null,{default:d(()=>[e("div",z,[e("div",I,[U,e("div",A,[e("div",F,[H,j(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>a.search=t),class:"w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input",type:"text",placeholder:"Search for projects","aria-label":"Search"},null,512),[[P,a.search]])])]),m(b,{options:n.municipalities,label:"municipality",modelValue:a.municipality,"onUpdate:modelValue":o[1]||(o[1]=t=>a.municipality=t)},null,8,["options","modelValue"])]),e("div",N,[m(k,null,{header:d(()=>[e("tr",null,[(r(!0),u(x,null,g(a.tableHead,(t,f)=>(r(),u("th",{scope:"col",class:"py-3 px-6",key:f},[e("div",E,[e("span",null,s(t.name),1)])]))),128))])]),body:d(()=>[(r(!0),u(x,null,g(n.equipments.data,(t,f)=>(r(),u("tr",R,[e("td",W,s(t.name),1),e("td",Y,s(t.available),1),e("td",G,s(t.damages),1),e("td",J,s(t.municipality),1),e("td",K,s(a.moment(t.recieved_at).format("MMMM DD Y")),1),e("td",Q,[m(w,{type:"button",href:"/province/consolidatedShow/"+t.id,data:{municipality:t.municipality},class:"font-medium text-orange-600 dark:text-orange-500 hover:underline"},{default:d(()=>[X]),_:2},1032,["href","data"])])]))),256))]),_:1}),e("div",Z,[m(B,{links:n.equipments.links},null,8,["links"])])])])]),_:1})}const de=O(T,[["render",$]]);export{de as default};
