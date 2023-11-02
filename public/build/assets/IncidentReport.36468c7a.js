import{j as _,a as u,B as g,o as r,b as l,d as e,F as x,q as h,t as d,C as c,n as y,e as f,s as w}from"./app.8f761c41.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";const j={props:{reports:Object},setup(){const i=_(),t=u(!1),a=u(""),s=g({id:null,docs:""});return{drop:n=>{s.docs=n.dataTransfer.files[0],console.log(n.dataTransfer.files),console.log(s.docs)},open:t,selected:a,incident:s,submitReport:async()=>{s.post(route("municipality.incident.store"),{forceFormData:!0,onError:n=>{console.log(n)},onFinish:()=>{i.success("Report submitted"),t.value=!1,s.reset("id","docs")}})},openReport:(n,m)=>{a.value=m,s.id=n,t.value=!0},resetDocs:()=>{s.reset()}}}},D=e("h1",{class:"text-2xl pb-6 text-center"},"Incident Report",-1),R={class:"grid grid-cols-5 gap-5 place-content-center"},C={class:"flex flex-col z-0 justify-between col-span-2"},B={class:"flex flex-col overflow-hidden h-[480px]"},F={class:"flex flex-col justify-between overflow-y-auto border-2 rounded-lg space-y-2 scrollbar"},I=["onClick"],z={class:"grid grid-cols-1 text-start"},T={class:"font-bold text-base text-gray-700 uppercase"},M={class:"text-xs text-gray-700 uppercase"},N={key:0,class:"flex flex-col z-0 h-full justify-between col-span-3"},V={class:"flex flex-col overflow-hidden h-full"},A={class:"flex flex-row justify-between"},E={class:"font-bold text-2xl font-sans antialiased capitalize"},L={class:"grid gap-10 h-full w-full pt-5"},S={class:"grid place-content-center"},q={class:"max-w-xl"},O=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 text-gray-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})],-1),G=e("span",{class:"font-medium text-gray-600"},[w(" Drop Incident Report to Attach, or "),e("span",{class:"text-blue-600 underline"},"browse")],-1),H=[O,G],J={key:0,class:"mt-5 flex flex-row justify-between rounded-lg bg-green-400 p-3 animate-fade-in-down"},K={class:"font-semibold text-sm"},P={key:1,class:"flex justify-end col-span-2 pt-5 animate-fade-in-down"},Q=e("button",{type:"submit",class:"bg-orange-500 px-5 text-sm py-2 rounded-xl hover:bg-orange-700"},"save",-1),U=[Q];function W(i,t,a,s,b,v){return r(),l(x,null,[D,e("div",R,[e("div",C,[e("div",B,[e("div",F,[(r(!0),l(x,null,h(a.reports,(o,p)=>(r(),l("button",{key:p,onClick:n=>s.openReport(o.id,o.incident),class:"flex justify-between border-b p-4 hover:bg-slate-200 border-grey-200 last:border-transparent"},[e("div",z,[e("span",T,d(o.incident),1),e("span",M,d(o.incident_summary),1)])],8,I))),128))])])]),s.open?(r(),l("div",N,[e("div",V,[s.incident.id?(r(),l("form",{key:0,onSubmit:t[6]||(t[6]=c((...o)=>s.submitReport&&s.submitReport(...o),["prevent"])),class:"flex flex-col animate-fade-in-down justify-between overflow-y-auto border-2 rounded-lg space-y-2 scrollbar p-5"},[e("div",A,[e("h1",E,d(s.selected),1)]),e("div",L,[e("div",S,[e("div",q,[e("label",{onDragover:t[2]||(t[2]=c(o=>i.hover=!0,["prevent"])),onDrop:t[3]||(t[3]=c(()=>{},["prevent"])),onDragleave:t[4]||(t[4]=c(o=>i.hover=!1,["prevent"])),class:y([i.hover?"border-gray-400":"","flex flex-col justify-evenly w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"])},[e("span",{class:"flex items-center space-x-2",onDrop:t[0]||(t[0]=(...o)=>s.drop&&s.drop(...o))},H,32),e("input",{type:"file",name:"docs",onInput:t[1]||(t[1]=o=>s.incident.docs=o.target.files[0]),class:"hidden"},null,32)],34),s.incident.docs?(r(),l("div",J,[e("span",K,d(s.incident.docs.name),1),e("i",{class:"fa-solid fa-x text-sm text-center h-3 hover:scale-110",onClick:t[5]||(t[5]=(...o)=>s.resetDocs&&s.resetDocs(...o))})])):f("",!0),s.incident.docs?(r(),l("div",P,U)):f("",!0)])])])],32)):f("",!0)])])):f("",!0)])],64)}const Z=k(j,[["render",W]]);export{Z as I};
