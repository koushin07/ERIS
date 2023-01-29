import{C as v}from"./ContentBox.31243bc9.js";import{P as w}from"./ProvinceLayout.4c891ccd.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";import{a as b,Z as u,b as r,f,g as p,F as _,r as C,o as d,d as e,q as h,t as c,e as x}from"./app.027fc9ac.js";import"./PendingTransactions.4e98a45c.js";import"./Dropdown.6a0edb48.js";import"./eprris.ccf75d97.js";const q={props:{locals:Array,regionals:Array},layout:w,components:{ContentBox:v},setup(){const n=b(!1),a=b(!1),l=u({name:"",code:"",asset_desc:"",category:"",unit:null,model:null,serial:null,asset_id:null,remarks:""}),s=u({name:"",code:"",asset_desc:"",category:"",unit:null,model:null,serial:null,asset_id:null,remarks:""});return{localToggle:n,equipment:l,openForm:o=>{n.value=!n.value,l.name=o.equipment_name,l.code=o.code,l.asset_desc=o.asset_desc,l.category=o.category,l.unit=o.unit,l.model=o.model_number,l.serial=o.serial_number,l.asset_id=o.asset_id,l.remarks=o.remarks},regional:s,openRegion:o=>{a.value=!a.value,s.name=o.equipment_name,s.code=o.code,s.asset_desc=o.asset_desc,s.category=o.category,s.unit=o.unit,s.model=o.model_number,s.serial=o.serial_number,s.asset_id=o.asset_id,s.remarks=o.remarks},toggleRegion:a}}},j=e("h1",{class:"text-semibold text-center tex-lg pb-10"},"Local Transactions",-1),N={class:"grid grid-cols-5 gap-5 place-content-center"},z={class:"flex flex-col z-0 justify-between col-span-2"},F={class:"flex flex-col overflow-hidden h-[480px]"},T={class:"flex flex-col justify-between overflow-y-auto border-2 rounded-lg space-y-2 scrollbar"},A=["onClick"],B={class:"grid grid-cols-1 text-start"},R={class:"font-bold text-base text-gray-700 uppercase"},D={class:"text-xs text-gray-700 uppercase"},L={class:"flex flex-col z-0 h-full justify-between col-span-3"},P={class:"flex flex-col overflow-hidden h-full"},S={key:0,class:"flex flex-col animate-fade-in-down justify-between overflow-y-auto border-2 rounded-lg space-y-2 scrollbar p-5"},V={class:"flex flex-row justify-between"},I={class:"font-bold text-2xl font-sans antialiased capitalize"},M={class:"grid grid-cols-2 gap-10 h-full w-full"},U={class:"grid grid-rows-3 gap-10"},E={class:"flex flex-col"},Z=e("label",{class:"text-sm font-bold"},"Serial Number",-1),G=["placeholder"],H={class:"flex flex-col"},J=e("label",{class:"text-sm font-bold"},"Code",-1),K=["placeholder"],O={class:"flex flex-col"},Q=e("label",{class:"text-sm font-bold"},"Asset ID",-1),W=["placeholder"],X={class:"grid grid-rows-3 gap-10"},Y={class:"flex flex-col"},$=e("label",{class:"text-sm font-bold"},"Unit",-1),ee=["placeholder"],se={class:"flex flex-col"},oe=e("label",{class:"text-sm font-bold"},"Model Number",-1),le=["placeholder"],te={class:"flex flex-col"},re=e("label",{class:"text-sm font-bold"},"Category",-1),de=["placeholder"],ce=e("h1",{class:"text-semibold text-center tex-lg pb-10"},"Cross Transactions",-1),ne={class:"grid grid-cols-5 gap-5 place-content-center"},ae={class:"flex flex-col z-0 justify-between col-span-2"},ie={class:"flex flex-col overflow-hidden h-[480px]"},_e={class:"flex flex-col justify-between overflow-y-auto border-2 rounded-lg space-y-2 scrollbar"},be=["onClick"],ue={class:"grid grid-cols-1 text-start"},fe={class:"font-bold text-base text-gray-700 uppercase"},pe={class:"text-xs text-gray-700 uppercase"},he={class:"flex flex-col z-0 h-full justify-between col-span-3"},xe={class:"flex flex-col overflow-hidden h-full"},me={key:0,class:"flex flex-col animate-fade-in-down justify-between overflow-y-auto border-2 rounded-lg space-y-2 scrollbar p-5"},ge={class:"flex flex-row justify-between"},ye={class:"font-bold text-2xl font-sans antialiased capitalize"},ve={class:"grid grid-cols-2 gap-10 h-full w-full"},we={class:"grid grid-rows-3 gap-10"},ke={class:"flex flex-col"},Ce=e("label",{class:"text-sm font-bold"},"Serial Number",-1),qe=["placeholder"],je={class:"flex flex-col"},Ne=e("label",{class:"text-sm font-bold"},"Code",-1),ze=["placeholder"],Fe={class:"flex flex-col"},Te=e("label",{class:"text-sm font-bold"},"Asset ID",-1),Ae=["placeholder"],Be={class:"grid grid-rows-3 gap-10"},Re={class:"flex flex-col"},De=e("label",{class:"text-sm font-bold"},"Unit",-1),Le=["placeholder"],Pe={class:"flex flex-col"},Se=e("label",{class:"text-sm font-bold"},"Model Number",-1),Ve=["placeholder"],Ie={class:"flex flex-col"},Me=e("label",{class:"text-sm font-bold"},"Category",-1),Ue=["placeholder"];function Ee(n,a,l,s,m,g){const o=C("Content-box");return d(),r(_,null,[f(o,null,{default:p(()=>[j,e("div",N,[e("div",z,[e("div",F,[e("div",T,[(d(!0),r(_,null,h(l.locals,(t,i)=>(d(),r("button",{key:i,onClick:y=>s.openForm(t),class:"flex justify-between border-b p-4 hover:bg-slate-200 border-grey-200 last:border-transparent"},[e("div",B,[e("span",R,c(t.borrower),1),e("span",D,c(t.equipment),1)])],8,A))),128))])])]),e("div",L,[e("div",P,[s.localToggle?(d(),r("form",S,[e("div",V,[e("h1",I,c(s.equipment.name),1)]),e("div",M,[e("div",U,[e("div",E,[Z,e("input",{type:"number",disabled:"",placeholder:s.equipment.serial,class:"border-b-2 border-0 px-2 py-1 focus:ring-0 focus:border-b-blue-600"},null,8,G)]),e("div",H,[J,e("input",{type:"text",disabled:"",placeholder:s.equipment.code,class:"border-b-2 border-0 px-2 py-1 focus:ring-0 focus:border-b-blue-600"},null,8,K)]),e("div",O,[Q,e("input",{type:"number",disabled:"",placeholder:s.equipment.asset_id,class:"border-b-2 border-0 px-2 py-1 focus:ring-0 focus:border-b-blue-600"},null,8,W)])]),e("div",X,[e("div",Y,[$,e("input",{type:"number",disabled:"",placeholder:s.equipment.unit,class:"border-b-2 border-0 px-2 py-1 focus:ring-0 focus:border-b-blue-600"},null,8,ee)]),e("div",se,[oe,e("input",{type:"number",disabled:"",placeholder:s.equipment.model,class:"border-b-2 border-0 px-2 py-1 focus:ring-0 focus:border-b-blue-600"},null,8,le)]),e("div",te,[re,e("input",{type:"text",disabled:"",placeholder:s.equipment.category,class:"border-b-2 border-0 px-2 py-1 focus:ring-0 focus:border-b-blue-600"},null,8,de)])])])])):x("",!0)])])])]),_:1}),f(o,null,{default:p(()=>[ce,e("div",ne,[e("div",ae,[e("div",ie,[e("div",_e,[(d(!0),r(_,null,h(l.regionals,(t,i)=>(d(),r("button",{key:i,onClick:y=>s.openForm(t),class:"flex justify-between border-b p-4 hover:bg-slate-200 border-grey-200 last:border-transparent"},[e("div",ue,[e("span",fe,c(t.borrower),1),e("span",pe,c(t.equipment),1)])],8,be))),128))])])]),e("div",he,[e("div",xe,[s.toggleRegion?(d(),r("form",me,[e("div",ge,[e("h1",ye,c(s.regional.name),1)]),e("div",ve,[e("div",we,[e("div",ke,[Ce,e("input",{type:"number",disabled:"",placeholder:s.regional.serial,class:"border-b-2 border-0 px-2 py-1 focus:ring-0 focus:border-b-blue-600"},null,8,qe)]),e("div",je,[Ne,e("input",{type:"text",disabled:"",placeholder:s.regional.code,class:"border-b-2 border-0 px-2 py-1 focus:ring-0 focus:border-b-blue-600"},null,8,ze)]),e("div",Fe,[Te,e("input",{type:"number",disabled:"",placeholder:s.regional.asset_id,class:"border-b-2 border-0 px-2 py-1 focus:ring-0 focus:border-b-blue-600"},null,8,Ae)])]),e("div",Be,[e("div",Re,[De,e("input",{type:"number",disabled:"",placeholder:s.regional.unit,class:"border-b-2 border-0 px-2 py-1 focus:ring-0 focus:border-b-blue-600"},null,8,Le)]),e("div",Pe,[Se,e("input",{type:"number",disabled:"",placeholder:s.regional.model,class:"border-b-2 border-0 px-2 py-1 focus:ring-0 focus:border-b-blue-600"},null,8,Ve)]),e("div",Ie,[Me,e("input",{type:"text",disabled:"",placeholder:s.regional.category,class:"border-b-2 border-0 px-2 py-1 focus:ring-0 focus:border-b-blue-600"},null,8,Ue)])])])])):x("",!0)])])])]),_:1})],64)}const We=k(q,[["render",Ee]]);export{We as default};
