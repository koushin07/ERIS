import{L as h}from"./MunicipalityLayout.f73087f0.js";import{_ as u}from"./Table.98acb314.js";import{a as _,b as s,d as t,F as m,q as f,t as c,R as v,o,f as g,g as x,r as b}from"./app.8f761c41.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";import"./PendingTransactions.d992f2e3.js";import"./Dropdown.65581d49.js";import"./eprris.ccf75d97.js";import"./moment.9709ab41.js";const k={layout:h,props:{provinces:Object},setup(){const i=_(""),a=_([]);return{tableHeader:[{name:"Equipment Name"},{name:"Status"},{name:"Quantity"},{name:"Actions"}],name:i,municipalities:a,getProvince:l=>{v.get(`http://127.0.0.1:8000/province/${l.province}`).then(d=>{a.value=d.data}),i.value=l.province_name}}},components:{Table:u}},y={class:"container p-4"},P={class:"flex flex-1 w-full flex-col sm:flex-row gap-4"},C={class:"flex flex-col rounded-lg bg-white sm:w-4/12 p-4"},j={class:"grid grid-cols-1 gap-2 m-2"},q=t("h4",{class:"text-center font-bold text-lg"},"Provinces",-1),B={class:"h-fit"},L={class:"mb-1 text-md font-bold leading-normal dark:text-white text-slate-700"},N=["onClick"],S=t("i",{class:"fa-solid fa-angle-right"},null,-1),E=[S],F={class:"z-0 h-full p-5 rounded-lg bg-white w-full sm:w-8/12"},H={class:""},V={class:"text-center font-bold text-lg"},$={class:"h-fit overflow-x-auto scrollbar"},z={class:"mb-1 text-md font-bold leading-normal dark:text-white text-slate-700"},A=t("i",{class:"fa-solid fa-folder-open"},null,-1),D={key:1,class:"text-center font-semibold text-lg pt-10"};function M(i,a,r,n,l,d){const p=b("inertia-link");return o(),s("div",y,[t("div",P,[t("div",C,[t("div",j,[q,t("div",B,[(o(!0),s(m,null,f(r.provinces,e=>(o(),s("div",{class:"flex justify-between items-center p-2 gap-5",key:e.id},[t("span",L,c(e.province),1),t("button",{onClick:O=>n.getProvince(e),type:"button",class:"transition duration-300 ease-in-out hover:scale-125"},E,8,N)]))),128))])])]),t("div",F,[t("div",H,[t("h4",V," Municipalitis of "+c(n.name),1),t("div",$,[n.municipalities.length!==0?(o(!0),s(m,{key:0},f(n.municipalities,e=>(o(),s("div",{class:"flex justify-between items-center p-2 gap-5",key:e.id},[t("span",z,c(e.municipality),1),g(p,{href:i.route("equipment.show",e.id),class:"transition duration-300 ease-in-out hover:scale-125"},{default:x(()=>[A]),_:2},1032,["href"])]))),128)):(o(),s("h6",D,"Select Province"))])])])])])}const W=w(k,[["render",M]]);export{W as default};
