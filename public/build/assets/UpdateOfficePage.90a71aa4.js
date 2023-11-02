import{_ as c}from"./ProvinceList.655fb416.js";import{a as d,B as l,b as p,d as o,C as f,z as u,W as _,f as v,r as b,o as g}from"./app.8f761c41.js";import{A as x}from"./AdminLayout.adcac2e0.js";import{_ as h}from"./InputError.949bd501.js";import{a as y,_ as w}from"./TextInput.11d1c01d.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";import"./combobox.9c6b43ee.js";import"./transition.2da8e22a.js";import"./Dropdown.65581d49.js";import"./eprris.ccf75d97.js";const k={layout:x,components:{InputError:h,TextInput:y,InputLabel:w},props:{provinces:Object,office:Object},setup({office:n,provinces:t}){d();const i=l({municipality:"",province:""}),e=()=>{i.put(route("rdrrmc.office.update",n.id))},r=t?Object.values(t).map(a=>a.province):[];return{form:i,handleSubmit:e,convertedProvince:r}},components:{ProvinceList:c}},P={class:"mt-10 sm:mt-0"},S={class:"md:grid place-content-center"},j={class:"mt-5 md:col-span-2 md:mt-0 w-full"},B={class:"overflow-hidden shadow sm:rounded-md w-[700px]"},O={class:"bg-white px-4 py-5 sm:p-6"},I={class:"grid grid-cols-2 gap-6 w-full"},L={class:"col-span-6"},M=o("label",{for:"first-name",class:"block text-sm font-medium text-gray-700"},"Municipality",-1),U={class:"col-span-6"},A=o("label",{for:"first-name",class:"block text-sm font-medium text-gray-700"},"Province",-1),C=o("div",{class:"bg-gray-50 px-4 py-3 text-right sm:px-6"},[o("button",{type:"submit",class:"inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},"Save")],-1);function E(n,t,i,e,r,a){const m=b("v-select");return g(),p("div",P,[o("div",S,[o("div",j,[o("form",{onSubmit:t[2]||(t[2]=f((...s)=>e.handleSubmit&&e.handleSubmit(...s),["prevent"]))},[o("div",B,[o("div",O,[o("div",I,[o("div",L,[M,u(o("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>e.form.municipality=s),type:"text",name:"first-name",id:"first-name",autocomplete:"given-name",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"},null,512),[[_,e.form.municipality]])]),o("div",U,[A,v(m,{options:e.convertedProvince,modelValue:e.form.province,"onUpdate:modelValue":t[1]||(t[1]=s=>e.form.province=s)},null,8,["options","modelValue"])])])]),C])],32)])])])}const J=V(k,[["render",E]]);export{J as default};
