import{_ as w}from"./Pagination.0e0edfff.js";import{A as y}from"./AdminLayout.5b5996a3.js";import{H as b,a as k,D as v,b as a,d as e,z as A,W as P,F as f,q as u,f as C,U as h,r as j,o,t as d,k as B}from"./app.027fc9ac.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Dropdown.6a0edb48.js";import"./eprris.ccf75d97.js";const V={layout:y,components:{Pagination:w,Head:b},props:{provinces:Object,filters:[Array,Object]},setup(p){const i=[{name:"Office"},{name:"email"},{name:"Personel"},{name:" Action"}],n=k(p.search);return v(n,s=>{h.Inertia.get(B().url.value,{search:s},{preserveState:!0})}),{verify:s=>{h.Inertia.post("/api/verify/"+s)},fullname:(s,c,t,l)=>{const x=s||"",m=c||"",_=t?t.charAt(0):"";return`${m} ${_} ${x} ${l||""}`},tableHeader:i,search:n}}},z={class:"flex flex-row justify-between flex-row-reverse pb-5"},D={class:"flex items-center"},H=e("label",{for:"simple-search",class:"sr-only"},"Search",-1),S={class:"relative w-full"},L=e("div",{class:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),O=e("span",{class:"text-xl font-bold p-2"},"Provinces",-1),$={class:"table-auto w-full text-sm text-gray-500 dark:text-gray-400 border-2 border-orange-300"},q={class:"text-xs text-gray-700 text-center uppercase bg-orange-300 dark:bg-gray-700 dark:text-gray-400"},F={class:"max-h-full even:bg-orange-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700"},I={scope:"row",class:"text-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"},N={scope:"row",class:"text-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"},U={scope:"row",class:"text-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"},E={scope:"row",class:"text-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"},T={key:0,class:"flex flex-row justify-center"},W=["onClick"],G=["onClick"],J={key:1,class:"flex flex-row space-x-1 justify-center"},K=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 text-green-500"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"})],-1),Q=e("span",{class:"font-semibold text-green-500"}," Verified ",-1),R=[K,Q];function X(p,i,n,r,g,s){const c=j("Pagination");return o(),a(f,null,[e("div",z,[e("form",D,[H,e("div",S,[L,A(e("input",{type:"text",id:"simple-search",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search","onUpdate:modelValue":i[0]||(i[0]=t=>r.search=t),required:""},null,512),[[P,r.search]])])]),O]),e("table",$,[e("thead",q,[e("tr",null,[(o(!0),a(f,null,u(r.tableHeader,(t,l)=>(o(),a("th",{scope:"col",class:"py-3 px-6",key:l},d(t.name),1))),128))])]),e("tbody",null,[(o(!0),a(f,null,u(n.provinces.data,(t,l)=>(o(),a("tr",F,[e("td",I,d(t.province),1),e("td",N,d(t.email),1),e("td",U,d(r.fullname(t.firstname,t.lastname,t.middlename,t.suffix)),1),e("td",E,[t.must_reset_password?(o(),a("div",T,[e("button",{onClick:x=>r.verify(t.id),class:"text-sm hover:bg-green-600 mx-2 text-center bg-green-500 px-2 rounded text-white tracking-wide"},"Verify",8,W),e("button",{onClick:x=>r.verify(t.id),class:"text-sm hover:bg-red-600 mx-2 text-center bg-red-500 px-2 rounded text-white tracking-wide"},"Deny",8,G)])):(o(),a("div",J,R))])]))),256))])]),C(c,{links:n.provinces.links},null,8,["links"])],64)}const oe=M(V,[["render",X]]);export{oe as default};
