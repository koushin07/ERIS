import{a as v,o as r,b as i,d as e,f as a,g as l,u as p,F as k,s as S,q as D,t as d,e as C,R as Y,B as G,j as J,C as T,n as R,i as K,U as j,V as X,p as Z,k as z,r as I,T as ee,z as N,A as te,W as se,v as ae,x as oe}from"./app.8f761c41.js";import{C as ne}from"./ContentBox.cc59c672.js";import{L as re}from"./MunicipalityLayout.f73087f0.js";import{_ as ie}from"./EquipmentList.5ee3ca70.js";import{L as B,a as le,_ as ce}from"./AddIncident.24035115.js";import{N as O,_ as E,U as F}from"./dialog.9bd92eb8.js";import{e as q,f as L}from"./transition.2da8e22a.js";/* empty css                                                                          */import{_ as de}from"./Pagination.030ddf76.js";import{h as A}from"./moment.9709ab41.js";import{_ as ue}from"./InvoiceModal.3419c9d8.js";import{_ as pe}from"./_plugin-vue_export-helper.cdc0426e.js";import"./PendingTransactions.d992f2e3.js";import"./Dropdown.65581d49.js";import"./eprris.ccf75d97.js";import"./combobox.9c6b43ee.js";import"./ProvinceList.655fb416.js";import"./QuantityModal.b45b06f4.js";const me=e("button",{class:"bg-"},null,-1),_e=S(" Request "),fe=[me,_e],he=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),ve={class:"fixed inset-0 overflow-y-auto"},ge={class:"flex min-h-full items-center justify-center p-4 text-center"},xe=e("i",{class:"fa-solid fa-x text-lg"},null,-1),be=[xe],ye={class:"mt-4"},we=e("div",{class:"mt-4"},[e("div",{class:"mt-4 grid place-content-center"})],-1),ke={__name:"TransactionModal",props:{equipments:Object,provinces:Object,incident:String},emits:["submit"],setup(h,{emit:o}){const n=h;v("");const t=v(!1);function c(){t.value=!1}function g(b){o("submit",b)}function x(){t.value=!0}return(b,$)=>(r(),i(k,null,[e("div",{onClick:x},fe),a(p(L),{appear:"",show:t.value,as:"template"},{default:l(()=>[a(p(O),{as:"div",onClose:c,class:"relative z-50"},{default:l(()=>[a(p(q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[he]),_:1}),e("div",ve,[e("div",ge,[a(p(q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[a(p(E),{class:"w-[1000px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:l(()=>[a(p(F),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900 flex justify-end"},{default:l(()=>[e("button",{class:"grid place-content-center hover:scale-110 hover:text-orange-500",onClick:c},be)]),_:1}),e("div",ye,[a(B,{onSubmitted:g,equipments:n.equipments,provinces:n.provinces,incident:n.incident},null,8,["equipments","provinces","incident"])]),we]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])],64))}},$e={class:"flex flex-col overflow-hidden"},Ce=e("span",{class:"text-lg text-center font-semibold font-sans"},"Status",-1),Ie={class:"flex border-2 flex-col justify-between overflow-y-auto rounded-lg p-4 space-y-2 scrollbar"},je={class:"grid grid-cols-1"},qe={class:"font-bold text-sm text-gray-700"},Me={class:"text-xs text-gray-700"},De={key:0,class:"text-slate-400 text-sm font-thin italic"},Se={key:1,class:"text-green-400 text-base font-semibold"},Te={key:2,class:"text-red-400 text-base font-semibold"},ze={__name:"StatusCard",props:{selected:String,statuses:Array,equipments:Object,provinces:Object},emits:["submit"],setup(h,{emit:o}){return(n,t)=>(r(),i("div",$e,[Ce,e("div",Ie,[(r(!0),i(k,null,D(h.statuses,(c,g)=>(r(),i("div",{key:g,class:"flex justify-between pr-2 border-b pb-2 border-red-200 last:border-transparent"},[e("div",je,[e("span",qe,d(c.owner),1),e("span",Me,d(c.equipment)+":"+d(c.quantity),1)]),c.status=="pending"?(r(),i("span",De,"Pending...")):c.status=="accepted"?(r(),i("span",Se,"Accepted")):c.status=="denied"?(r(),i("span",Te,"Denied")):C("",!0)]))),128))])]))}},Oe=e("button",{class:"text-blue-400"}," details ",-1),Ee=[Oe],Le=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Ne={class:"fixed inset-0 overflow-y-auto"},Ae={class:"flex min-h-full items-center justify-center p-4 text-center"},Re={class:"flex flex-row justify-between p-2"},Be={class:"text-lg font-bold"},Fe={key:0,class:"table-auto pt-2 w-full text-sm border-x text-gray-500 dark:text-gray-400"},Ve={class:"text-xs text-gray-700 text-center uppercase bg-header dark:bg-gray-700 dark:text-gray-400"},He={class:"max-h-full even:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700"},Ue={scope:"row",class:"text-center p-4"},Pe={class:"text-center"},Qe={class:"text-center"},We={key:0,class:"text-green-500"},Ye={key:1,class:"text-red-500"},Ge={key:2,class:"text-gray-500"},Je={class:"text-center"},Ke={class:"text-center"},Xe={class:"text-center"},Ze={class:"text-center"},et={class:"text-center"},tt=e("button",{class:"text-green-500"},[e("span",{class:"text-center"},"add")],-1),st={__name:"DetailModal",props:{incident:String,detail:String,name:String,equipments:Object,provinces:Object},emits:["submit"],setup(h,{emit:o}){const n=h,t=v(!1);v(null);const c=v({}),g=()=>{console.log(n.detail),Y.get("/api/requestEquip/"+n.detail).then(_=>{c.value=_.data,console.log(_.data),b()})};function x(){t.value=!1}function b(){t.value=!0}const $=[{name:"equipment"},{name:"municipality"},{name:"status"},{name:"borrowed quantity"},{name:"contact"},{name:"address"},{name:"personel"},{name:"action"}],u=v(!0);return(_,f)=>(r(),i(k,null,[e("div",{onClick:g},Ee),a(p(L),{appear:"",show:t.value,as:"template"},{default:l(()=>[a(p(O),{as:"div",onClose:x,class:"relative z-50"},{default:l(()=>[a(p(q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[Le]),_:1}),e("div",Ne,[e("div",Ae,[a(p(q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[a(p(E),{class:"w-fit transform overflow-hidden rounded bg-white p-2 text-left align-middle shadow-xl transition-all"},{default:l(()=>[e("div",Re,[e("span",Be,d(n.incident),1)]),u.value?(r(),i("table",Fe,[e("thead",Ve,[e("tr",null,[(r(),i(k,null,D($,(m,s)=>e("th",{scope:"col",class:"py-3 px-10 capitalize",key:s},d(m.name),1)),64))])]),e("tbody",null,[(r(!0),i(k,null,D(c.value,(m,s)=>(r(),i("tr",He,[e("td",Ue,d(m.name),1),e("td",Pe,d(m.municipality),1),e("td",Qe,[m.status==="accepted"?(r(),i("span",We,d(m.status),1)):C("",!0),m.status==="denied"?(r(),i("span",Ye,d(m.status),1)):C("",!0),m.status==="pending"?(r(),i("span",Ge,d(m.status),1)):C("",!0)]),e("td",Je,d(m.quantity),1),e("td",Ke,d(m.contact),1),e("td",Xe,d(m.address),1),e("td",Ze,d(m.owner),1),e("td",et,[a(le,{detail:n.detail,equipments:c.value,incident:m.incident,incident_summary:m.incident_summary,provinces:h.provinces},{trigger:l(()=>[tt]),_:2},1032,["detail","equipments","incident","incident_summary","provinces"])])]))),256))])])):C("",!0)]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])],64))}},at=e("button",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})])],-1),ot=[at],nt=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),rt={class:"fixed inset-0 overflow-y-auto"},it={class:"flex min-h-full items-center justify-center p-4 text-center"},lt=e("i",{class:"fa-solid fa-x text-lg"},null,-1),ct=[lt],dt={class:"grid place-content-center"},ut={class:"max-w-xl"},pt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 text-gray-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})],-1),mt=e("span",{class:"font-medium text-gray-600"},[S(" Drop Incident Report to Attach, or "),e("span",{class:"text-blue-600 underline"},"browse")],-1),_t=[pt,mt],ft={key:0,class:"mt-5 flex flex-row justify-between rounded-lg bg-green-400 p-3 animate-fade-in-down"},ht={class:"font-semibold text-sm"},vt={key:1,class:"flex justify-end col-span-2 pt-5 animate-fade-in-down"},gt={class:"mt-4"},xt={__name:"FileUploadModal",props:{detail_id:String},setup(h){const n=G({id:h.detail_id,docs:""}),t=J(),c=u=>{n.docs=u.dataTransfer.files[0],console.log(u.dataTransfer.files),console.log(n.docs)},g=async()=>{n.post(route("municipality.incident.store"),{forceFormData:!0,onError:u=>{console.log(u)},onSuccess:()=>{t.success("Report submitted"),open.value=!1,n.reset("id","docs"),b()}})},x=v(!1);function b(){x.value=!1}function $(){x.value=!0}return(u,_)=>(r(),i(k,null,[e("div",{onClick:$},ot),a(p(L),{appear:"",show:x.value,as:"template"},{default:l(()=>[a(p(O),{as:"div",onClose:b,class:"relative z-50"},{default:l(()=>[a(p(q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[nt]),_:1}),e("div",rt,[e("div",it,[a(p(q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[a(p(E),{class:"w-[600px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:l(()=>[a(p(F),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900 flex justify-end"},{default:l(()=>[e("button",{class:"grid place-content-center hover:scale-110 hover:text-orange-500",onClick:b},ct)]),_:1}),e("div",dt,[e("div",ut,[e("label",{onDragover:_[1]||(_[1]=T(f=>u.hover=!0,["prevent"])),onDrop:_[2]||(_[2]=T(()=>{},["prevent"])),onDragleave:_[3]||(_[3]=T(f=>u.hover=!1,["prevent"])),class:R([u.hover?"border-gray-400":"","flex flex-col justify-evenly w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"])},[e("span",{class:"flex items-center space-x-2",onDrop:c},_t,32),e("input",{type:"file",name:"docs",onInput:_[0]||(_[0]=f=>p(n).docs=f.target.files[0]),class:"hidden"},null,32)],34),p(n).docs?(r(),i("div",ft,[e("span",ht,d(p(n).docs.name),1),e("i",{class:"fa-solid fa-x text-sm text-center h-3 hover:scale-110",onClick:_[4]||(_[4]=(...f)=>u.resetDocs&&u.resetDocs(...f))})])):C("",!0),p(n).docs?(r(),i("div",vt,[e("button",{onClick:g,class:"bg-orange-500 px-5 text-sm py-2 rounded-xl hover:bg-orange-700"},"save")])):C("",!0)])]),e("div",gt,[K(u.$slots,"footer")])]),_:3})]),_:3})])])]),_:3})]),_:3},8,["show"])],64))}};const bt={props:{histories:Object,equipments:Object,provinces:Object,queryString:[Array,Object]},components:{ContentBox:ne,Head:j.Head,EquipmentList:ie,LocalTransactions:B,newIncident:ce,TransactionModal:ke,StatusCard:ze,DetailModal:st,moment:A,Pagination:de,InvoiceModal:ue,FileUploadModal:xt},layout:re,setup({histories:h,queryString:o}){const n=v(!1),t=v(),c=v("Filter"),g=v(""),{pendings:x,confirmed:b,denied:$}=X(),u=v(""),_=v(!1),f=v();o!=null&&o.name&&(c.value="name",f.value=o.name),o!=null&&o.id&&(c.value="id",f.value=o.id);const m=[{name:"INCIDENT ID"},{name:"INCIDENT"},{name:"ACQUIRED"},{name:"REQUEST"},{name:"DATE"},{name:"SIT. REP."},{name:"ACTION"}],s=[{name:"Incidents",nagivated:!1},{name:"Cart",nagivated:!1},{name:"Approved",nagivated:!1}],M=y=>{g.value=y},V=(y,W)=>{console.log(y),y.value=y,x.value=W},H=async y=>{y.incidents=u,console.log(y.incidents),y.post("/api/request",{preserveScroll:!0,onFinish:()=>{g.value="",u.value=""}})},U=Object.values(h.data).map(y=>y.incident),P=()=>{g.value.push({incident:""})},Q=()=>{t&&j.Inertia.get(z().url.value,{date:t.value},{preserveState:!0}),c.value==="name"&&(z().url.value.includes("id")?j.Inertia.get("/municipality/request",{name:f.value,date:t.value},{preserveState:!0}):j.Inertia.get("/municipality/request",{name:f.value,date:t.value},{preserveState:!0})),c.value==="ID"&&t&&(z().url.value.includes("name")?j.Inertia.get("/municipality/request",{id:f.value,date:t.value},{preserveState:!0}):j.Inertia.get("/municipality/request",{id:f.value,date:t.value},{preserveState:!0}))};return Z(()=>{b(),$()}),{searchInput:f,convertedIncident:U,tabs:s,search:Q,tableHeader:m,incident:u,isEditable:n,handleSubmit:H,incidents:g,newIncident:P,getIncident:M,getStatuses:V,pendings:x,moment:A,date:t,drop:_,filter:c}}},w=h=>(ae("data-v-6a16d668"),h=h(),oe(),h),yt={class:"flex flex-col space-y-8 bg-white p-2"},wt={class:"flex flex-row justify-between"},kt=w(()=>e("button",{class:"text-lg text-white font-semibold bg-orange-300 rounded w-fit px-4 py-1"},[e("span",{class:"mr-2"},"New"),e("i",{class:"fa-solid fa-plus"})],-1)),$t={class:"grid grid-cols-3 w-2/3 gap-2"},Ct={class:"col-span-2"},It={class:"flex"},jt=w(()=>e("label",{for:"location-search",class:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"},"Your Email",-1)),qt=w(()=>e("svg",{"aria-hidden":"true",class:"w-4 h-4 ml-1",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)),Mt={class:"ring-1 ring-black ring-opacity-5 z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"},Dt={class:"py-1 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdown-button-2"},St=w(()=>e("div",{class:"inline-flex items-center"}," Incident Name ",-1)),Tt=[St],zt=w(()=>e("div",{class:"inline-flex items-center"}," Incident ID ",-1)),Ot=[zt],Et={class:"relative w-full"},Lt=w(()=>e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)),Nt=w(()=>e("span",{class:"sr-only"},"Search",-1)),At=[Lt,Nt],Rt={class:"flex flex-row justify-end"},Bt=S("Reset Filters"),Ft={class:"table-auto w-full text-sm border-x border-b border-orange-200 text-gray-500 dark:text-orange-400"},Vt={class:"text-xs text-gray-700 text-center uppercase bg-orange-300 dark:bg-gray-700 dark:text-gray-400"},Ht={scope:"row",class:"p-4 text-center"},Ut={scope:"row",class:"p-4 text-center"},Pt={scope:"row",class:"text-center"},Qt={class:"text-center"},Wt={class:"text-center"},Yt={key:0,class:"text-center"},Gt=["href"],Jt=w(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})],-1)),Kt=[Jt],Xt=w(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),Zt={key:1,class:"text-center"},es={class:"flex justify-center"},ts={class:"text-center"},ss={class:"flex justify-center"},as=w(()=>e("i",{class:"fa-regular fa-folder-open w-5 h-5"},null,-1)),os={class:"bg-white"};function ns(h,o,n,t,c,g){const x=I("Head"),b=I("new-incident"),$=I("Datepicker"),u=I("inertia-link"),_=I("File-upload-modal"),f=I("Pagination"),m=I("content-box");return r(),i(k,null,[a(x,{title:"My Request"}),a(m,null,{default:l(()=>[e("div",yt,[e("div",wt,[a(b,{equipments:n.equipments,provinces:n.provinces},{trigger:l(()=>[kt]),_:1},8,["equipments","provinces"]),e("div",$t,[a($,{modelValue:t.date,"onUpdate:modelValue":o[0]||(o[0]=s=>t.date=s),class:"w-full h-8 rounded",placeholder:"Input Date Here"},null,8,["modelValue"]),e("div",Ct,[e("div",It,[jt,e("button",{onClick:o[1]||(o[1]=s=>t.drop=!t.drop),class:"flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600",type:"button"},[S(d(t.filter)+" ",1),qt]),a(ee,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:l(()=>[N(e("div",{class:"absolute z-40 mt-10 rounded-md shadow-lg",style:{display:"none"},onClick:o[4]||(o[4]=s=>t.drop=!1)},[e("div",Mt,[e("ul",Dt,[e("li",null,[e("button",{type:"button",onClick:o[2]||(o[2]=s=>t.filter="name"),class:"inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white",role:"menuitem"},Tt)]),e("li",null,[e("button",{type:"button",onClick:o[3]||(o[3]=s=>t.filter="ID"),class:"inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white",role:"menuitem"},Ot)])])])],512),[[te,t.drop]])]),_:1}),e("div",Et,[N(e("input",{type:"search","onUpdate:modelValue":o[5]||(o[5]=s=>t.searchInput=s),class:"block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500",placeholder:"Search...",required:""},null,512),[[se,t.searchInput]]),e("button",{onClick:o[6]||(o[6]=(...s)=>t.search&&t.search(...s)),class:"absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},At)])])])])]),e("div",Rt,[a(u,{href:"/municipality/request",class:"border-2 border-gray-400 px-2 rounded"},{default:l(()=>[Bt]),_:1})]),e("table",Ft,[e("thead",Vt,[e("tr",null,[(r(!0),i(k,null,D(t.tableHeader,(s,M)=>(r(),i("th",{scope:"col",class:"py-3 px-6",key:M},d(s.name),1))),128))])]),e("tbody",null,[n.histories?(r(!0),i(k,{key:0},D(n.histories.data,(s,M)=>(r(),i("tr",{class:"max-h-full even:bg-orange-200 text-orange-600 even:text-slate-600 bg-white border-b dark:bg-gray-800 dark:border-gray-700",key:M},[e("td",Ht,d(s.incident_id),1),e("td",Ut,d(s.incident),1),e("td",Pt,d(s.acquired),1),e("td",Qt,d(s.authorize_quantity),1),e("td",Wt,d(t.moment(s.created_at).format("llll")),1),s.file_path?(r(),i("td",Yt,[e("a",{href:"/report/"+s.id,type:"button",target:"_blank",class:"mr-4 font-medium text-green-600 dark:text-orange-500 hover:underline"},Kt,8,Gt),a(u,{href:"/report/"+s.id,method:"delete",type:"button",class:"font-medium text-red-600 dark:text-orange-500 hover:underline"},{default:l(()=>[Xt]),_:2},1032,["href"])])):(r(),i("td",Zt,[e("div",es,[a(_,{detail_id:s.id},null,8,["detail_id"])])])),e("td",ts,[e("div",ss,[a(u,{class:R([s.acquired?"text-green-400":"text-blue-400","underline"]),href:"/municipality/request/"+s.id,data:{incident:s.incident,summary:s.incident_summary},method:"get"},{default:l(()=>[as]),_:2},1032,["class","href","data"])])])]))),128)):C("",!0)])]),e("div",os,[a(f,{links:n.histories.links},null,8,["links"])])])]),_:1})],64)}const $s=pe(bt,[["render",ns],["__scopeId","data-v-6a16d668"]]);export{$s as default};
