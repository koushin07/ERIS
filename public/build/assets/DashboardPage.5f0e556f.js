import{A as h}from"./AdminLayout.5b5996a3.js";import"./auto.2566e592.js";import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{p as x,Q as g,o as d,b as _,a as m,R as b,d as e,f as a,g as i,s,t as c,F as v,m as w,r as y}from"./app.027fc9ac.js";import"./Dropdown.6a0edb48.js";import"./eprris.ccf75d97.js";const $={setup(){return x(()=>{const t=document.getElementById("equipment");new g(t,{type:"line",data:{labels:["Total","denied","confirmed"],datasets:[{label:"# Total",data:[10,2,5],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)"],borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}})}),{}}},k={id:"equipment"};function q(t,n,o,f,p,u){return d(),_("canvas",k)}const A=l($,[["render",q]]),C={layout:h,components:{MostUsed:A},props:{unverifieds:Array,count_unverified:Number,prov_unverified:Number},setup(){const t=w,n=m();return t.on("notify-admin",()=>{b.get("/api/recents").then(o=>n.value=o.data)}),{recents:n}}},N=e("span",{class:"text-2xl mb-10 font-bold text-black"}," Admin Site ",-1),j={class:"grid grid-flow-row md:grid-cols-6 gap-2"},B={class:"flex flex-col w-full gap-10 col-span-4"},E={class:"px-3 gap-2 h-full w-full"},T={class:"flex flex-col"},M=e("span",{class:"text-xl p-2 text-center font-semibold bg-orange-200"}," Offices ",-1),V={class:"grid gap-2 border-2 border-orange-200 px-5"},D={class:"flex flex-row justify-between"},F=s(" Municipality "),I={class:"grid place-content-center"},P={class:"font-semibold text-center text-red-600"},R=e("span",{class:"text-red-300"}," unverified: ",-1),S=e("hr",null,null,-1),L={class:"flex flex-row justify-between"},O=s(" Province "),Q={class:"grid place-content-center"},U={class:"font-semibold text-center text-red-600"},W=e("span",{class:"text-red-300"}," unverified: ",-1),Z={class:"px-3 gap-2 h-full w-full"},z={class:"flex flex-col"},G=e("span",{class:"text-xl p-2 text-center font-semibold bg-orange-200"}," Inventory ",-1),H={class:"grid gap-2 border-2 border-orange-200 px-5"},J={class:"flex flex-row justify-between"},K=s(" Equipment "),X=e("hr",null,null,-1),Y={class:"px-3 gap-2 h-full w-full"},ee={class:"flex flex-col"},te=e("span",{class:"text-xl p-2 text-center font-semibold bg-orange-200"}," Transactions ",-1),se={class:"grid gap-2 border-2 border-orange-200 px-5"},oe={class:"flex flex-row justify-between"},ne=s(" Equipment Request ");function re(t,n,o,f,p,u){const r=y("inertia-link");return d(),_(v,null,[N,e("div",j,[e("div",B,[e("div",E,[e("div",T,[M,e("div",V,[e("div",D,[a(r,{href:t.route("rdrrmc.municipalities"),class:"text-lg font-noraml hover:text-orange-300"},{default:i(()=>[F]),_:1},8,["href"]),e("div",I,[e("span",P,[R,s(" "+c(o.count_unverified),1)])])]),S,e("div",L,[a(r,{href:t.route("rdrrmc.provinces"),class:"text-lg font-noraml hover:text-orange-300"},{default:i(()=>[O]),_:1},8,["href"]),e("div",Q,[e("span",U,[W,s(" "+c(o.prov_unverified),1)])])])])])]),e("div",Z,[e("div",z,[G,e("div",H,[e("div",J,[a(r,{href:t.route("rdrrmc.consolidated.index"),class:"text-lg font-noraml hover:text-orange-300"},{default:i(()=>[K]),_:1},8,["href"])]),X])])]),e("div",Y,[e("div",ee,[te,e("div",se,[e("div",oe,[a(r,{href:t.route("rdrrmc.transaction"),class:"text-lg font-noraml hover:text-orange-300"},{default:i(()=>[ne]),_:1},8,["href"])])])])])])])],64)}const fe=l(C,[["render",re]]);export{fe as default};
