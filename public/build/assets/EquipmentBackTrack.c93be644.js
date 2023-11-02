import{P as I}from"./ProvinceLayout.077c6682.js";import{L as P}from"./MunicipalityLayout.f73087f0.js";import{H as B,a as u,D as m,b as i,f as d,d as t,t as s,g as w,F as h,r as p,o as _,q as v,e as M,U as x,k as b,v as H,x as A}from"./app.8f761c41.js";import{C as V}from"./ContentBox.cc59c672.js";import{_ as D,S as E}from"./StatusModal.7d542e28.js";import{_ as O}from"./Pagination.030ddf76.js";import{h as U}from"./moment.9709ab41.js";import{A as T}from"./AdminLayout.adcac2e0.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";import"./PendingTransactions.d992f2e3.js";import"./Dropdown.65581d49.js";import"./eprris.ccf75d97.js";import"./dialog.9bd92eb8.js";import"./transition.2da8e22a.js";const F={layout:(r,a)=>!a.props.auth.user.assign_office.municipality&&!a.props.auth.user.assign_office.province?r(T,()=>a):a.props.auth.user.assign_office.municipality?r(P,()=>a):r(I,()=>a),components:{ContentBox:V,EditModal:D,Pagination:O,Head:B,StatusModal:E},props:{equipments:Object,owned:Object,borrow:Object,tracks:Object},setup(){const r=[{name:"category"},{name:"Model number"},{name:"Serial number"},{name:"Unit"},{name:"Code"},{name:"Asset ID"},{name:"Action"}],a=u(),c=u(),o=u(),f=u(),k=u({});return m(a,l=>{x.Inertia.get(b().url.value,{search:l},{preserveState:!0})}),m(c,l=>{x.Inertia.get(b().url.value,{status:l},{preserveState:!0})}),m(o,l=>{x.Inertia.get(b().url.value,{category:l},{preserveState:!0})}),m(f,l=>{x.Inertia.get(b().url.value,{date:l},{preserveState:!0})}),{tableHeader:r,moment:U,search:a,equipmentStatus:c,category:o,date:f,collapsible:k}}},n=r=>(H("data-v-2f6c5b11"),r=r(),A(),r),Y={class:"flex flex-col justify-end h-fit p-5"},R={class:"text-xl font-bold"},z={class:"box-content flex flex-col w-full space-y-3"},G=n(()=>t("span",{class:"text-xl text-start font-semibold border-b-2 border-gray-100 p-3"}," Attributes ",-1)),J={class:"flex flex-row place-content-end space-x-10 border-b-gray-100 p-3 border-b-2"},K={class:"relative"},Q={class:"table-auto w-full text-sm border-x border-orange-200 text-gray-500 dark:text-gray-400"},W={class:"text-xs text-gray-700 text-center uppercase bg-orange-300 dark:bg-gray-700 dark:text-gray-400"},X={class:"max-h-full even:bg-gray-200 bg-white border-b drop-shadow dark:bg-gray-800 dark:border-gray-700"},Z={scope:"row",class:"text-center p-4"},$={class:"text-center"},tt={class:"text-center"},et={class:"text-center"},st={class:"text-center"},ot={class:"text-center"},at={class:"text-center"},rt=["onClick"],nt=n(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1)),ct=[nt],lt={key:0,class:"m-4 border max-h-full shadow bg-gray-50 dark:bg-gray-800 dark:border-gray-700"},it={scope:"row",class:"text-center p-4"},dt={class:"flex flex-col"},_t=n(()=>t("span",{class:"text-slate-500"}," Serviceable ",-1)),pt={class:""},ut=n(()=>t("td",{class:"text-center"},null,-1)),mt={scope:"row",class:"text-center p-4"},ht={class:"flex flex-col"},xt=n(()=>t("span",{class:"text-slate-500"}," Poor ",-1)),bt={class:""},ft=n(()=>t("td",{class:"text-center"},null,-1)),gt={scope:"row",class:"text-center p-4"},wt={class:"flex flex-col"},vt=n(()=>t("span",{class:"text-slate-500"}," Unusable ",-1)),kt={class:""},yt=n(()=>t("td",{class:"text-center"},null,-1)),St={key:0,class:"text-center"},Mt={href:"javascript:void(0)",type:"button",class:"font-medium text-orange-600 dark:text-orange-500 hover:underline flex flex-row justify-center space-x-4"},Ct={class:"bg-white"},jt=n(()=>t("span",{class:"text-xl font-semibold p-4"}," Transaction History ",-1)),qt={class:"table-auto w-full text-sm border-x text-gray-500 dark:text-gray-400"},Lt=n(()=>t("thead",{class:"text-xs text-gray-700 text-center uppercase bg-orange-300 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{scope:"col",rowspan:"2",class:"text-base p-2 border-r-2"}," municipality "),t("th",{scope:"col",rowspan:"1",colspan:"2",class:"text-base p-2"}," TOTAL "),t("th",{scope:"col",rowspan:"1",colspan:"3",class:"text-base p-2 border-x-2 border-b-2"}," Status "),t("th",{scope:"col",rowspan:"1",colspan:"2",class:"text-base p-2 border-b-2"}," Date "),t("th",{scope:"col",rowspan:"2",colspan:"",class:"text- p-2 border-l-2"}," Action ")]),t("tr",{class:""},[t("th",{scope:"col",rowspan:"1",colspan:"1",class:"text-sm p-2 border-t-2"},"borrowed"),t("th",{scope:"col",rowspan:"1",colspan:"1",class:"text-sm p-2 border-r-2 border-t-2"},"return"),t("th",{scope:"col",rowspan:"1",colspan:"1",class:"text-sm p-2"},"Serviceable"),t("th",{scope:"col",rowspan:"1",colspan:"1",class:"text-sm p-2"},"Unusable"),t("th",{scope:"col",rowspan:"1",colspan:"1",class:"text-sm p-2 border-r-2"},"Poor"),t("th",{scope:"col",rowspan:"1",colspan:"1",class:"text-sm p-2 border-r-2"},"borrowed"),t("th",{scope:"col",rowspan:"1",colspan:"1",class:"text-sm p-2"},"return")])],-1)),It={class:"max-h-full even:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700"},Pt={scope:"row",class:"text-center p-4"},Bt={class:"text-lg font-semibold"},Ht={class:"block text-sm"},At={class:"text-center"},Vt={class:"text-center"},Dt={class:"text-center"},Et={class:"text-center"},Ot={class:"text-center"},Ut={class:"text-center"},Tt={class:"text-center"},Nt={class:"text-center"},Ft=n(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 text-orange-300"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"})],-1)),Yt={class:"bg-white"};function Rt(r,a,c,o,f,k){const l=p("Head"),C=p("v-select"),j=p("EditModal"),q=p("StatusModal"),y=p("Pagination"),S=p("Content-box"),L=p("inertia-link");return _(),i(h,null,[d(l,{title:c.equipments.name},null,8,["title"]),t("div",Y,[t("span",R,s(c.equipments.name),1)]),d(S,{class:"h-fit"},{default:w(()=>[t("div",z,[G,t("div",J,[d(C,{options:["Serviceable","Poor","Unusable"],placeholder:"Status",class:"w-1/3",modelValue:o.equipmentStatus,"onUpdate:modelValue":a[0]||(a[0]=e=>o.equipmentStatus=e)},null,8,["modelValue"])]),t("div",K,[t("table",Q,[t("thead",W,[t("tr",null,[(_(!0),i(h,null,v(o.tableHeader,(e,g)=>(_(),i("th",{scope:"col",class:"py-3 px-6",key:g},s(e.name),1))),128))])]),(_(!0),i(h,null,v(c.owned.data,(e,g)=>(_(),i("tbody",null,[t("tr",X,[t("td",Z,s(e.category),1),t("td",$,s(e.model_number),1),t("td",tt,s(e.serial_number),1),t("td",et,s(e.unit),1),t("td",st,s(e.code),1),t("td",ot,s(e.asset_id),1),t("td",at,[t("button",{onClick:zt=>o.collapsible=o.collapsible===e?"":e,type:"button",class:"font-medium dark:text-orange-500 hover:underline"},ct,8,rt)])]),Object.keys(o.collapsible).length!==0&&o.collapsible.serial_number===e.serial_number?(_(),i("tr",lt,[t("td",it,[t("div",dt,[_t,t("span",pt,s(e.serviceable),1)])]),ut,t("td",mt,[t("div",ht,[xt,t("span",bt,s(e.poor),1)])]),ft,t("td",gt,[t("div",wt,[vt,t("span",kt,s(e.unserviceable),1)])]),yt,r.$page.props.auth.user.assign_office.municipality?(_(),i("td",St,[t("div",Mt,[d(j,{form:e},null,8,["form"]),d(q,{detail_id:e.detail_id},null,8,["detail_id"])])])):M("",!0)])):M("",!0)]))),256))]),t("div",Ct,[d(y,{links:c.owned.links},null,8,["links"])])])])]),_:1}),d(S,null,{default:w(()=>[jt,t("table",qt,[Lt,t("tbody",null,[(_(!0),i(h,null,v(c.borrow.data,(e,g)=>(_(),i("tr",It,[t("td",Pt,[t("span",Bt,s(e.municipality),1),t("span",Ht,s(e.borrower),1)]),t("td",At,s(e.total_borrow),1),t("td",Vt,s(e.total_return),1),t("td",Dt,s(e.serviceable),1),t("td",Et,s(e.unserviceable),1),t("td",Ot,s(e.poor),1),t("td",Ut,s(o.moment(e.date_borrow).format("MMMM DD Y, H:m:a")),1),t("td",Tt,s(e.date_returned)+" "+s(o.moment(e.date_returned).isValid()?o.moment(e.date_returned):"Not Yet Returned"),1),t("td",Nt,[d(L,{href:"/borrow-attrs/"+e.eqip_id,type:"button",class:"font-medium text-orange-600 dark:text-orange-500 hover:underline"},{default:w(()=>[Ft]),_:2},1032,["href"])])]))),256))])]),t("div",Yt,[d(y,{links:c.borrow.links},null,8,["links"])])]),_:1})],64)}const ne=N(F,[["render",Rt],["__scopeId","data-v-2f6c5b11"]]);export{ne as default};
