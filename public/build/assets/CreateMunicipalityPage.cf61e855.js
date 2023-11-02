import{_ as g}from"./InputError.949bd501.js";import{_ as w,a as v}from"./TextInput.11d1c01d.js";import{_ as V}from"./PrimaryButton.2036d97d.js";import{B as y,b,d as t,f as e,g as x,n as P,C as k,s as f,r as n,o as I}from"./app.8f761c41.js";import{_ as B}from"./MunicipalityList.52863c55.js";import{_ as C}from"./ProvinceList.655fb416.js";import{A as U}from"./AdminLayout.adcac2e0.js";import{_ as q}from"./_plugin-vue_export-helper.cdc0426e.js";import"./combobox.9c6b43ee.js";import"./transition.2da8e22a.js";import"./Dropdown.65581d49.js";import"./eprris.ccf75d97.js";const L={layout:U,components:{InputError:g,InputLabel:w,PrimaryButton:V,TextInput:v,MunicipalityList:B,ProvinceList:C},props:{provinces:Array},setup({provinces:i}){console.log(i);let s=y({name:"",email:"",password:"",password_confirmation:"",lat:"",long:"",province:"",terms:!1});const c=()=>{s.post(route("municipalityRegistration"),{onSuccess:()=>{s.reset("password","password_confirmation")}})},o=i?Object.values(i).map(d=>d.province):[];function u(d){s.province=d.province}return{convertedProvince:o,form:s,submit:c,getProvince:u}}},E={class:"mt-4"},M={class:"mt-4"},N={class:"mt-4 w-ful"},T={class:"grid lg:grid-flow-col gap-10"},A=t("span",{class:"text-sm text-slate-300"},[f("Get Coordintes "),t("a",{href:"https://www.gps-coordinates.net/",target:"_blank",class:"text-blue-500 underline"},"Here")],-1),j={class:"mt-4"},R={class:"mt-4"},S={class:"flex items-center justify-end mt-4"},z=f(" Register New Municipality ");function F(i,s,c,o,u,d){const a=n("InputLabel"),p=n("v-select"),r=n("InputError"),m=n("TextInput"),_=n("PrimaryButton");return I(),b("form",{onSubmit:s[7]||(s[7]=k((...l)=>o.submit&&o.submit(...l),["prevent"])),autocomplete:"off"},[t("div",null,[e(a,{for:"name",value:"Province"}),e(p,{options:o.convertedProvince,modelValue:o.form.province,"onUpdate:modelValue":s[0]||(s[0]=l=>o.form.province=l)},null,8,["options","modelValue"]),e(r,{class:"mt-2",message:o.form.errors.province},null,8,["message"])]),t("div",E,[e(a,{for:"municipality",value:"municipality"}),e(m,{id:"municipality",type:"text",class:"mt-1 block w-full",modelValue:o.form.name,"onUpdate:modelValue":s[1]||(s[1]=l=>o.form.name=l),required:"",autocomplete:"municipality"},null,8,["modelValue"]),e(r,{class:"mt-2",message:o.form.errors.name},null,8,["message"])]),t("div",M,[e(a,{for:"email",value:"Email"}),e(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o.form.email,"onUpdate:modelValue":s[2]||(s[2]=l=>o.form.email=l),required:"",autocomplete:"email"},null,8,["modelValue"]),e(r,{class:"mt-2",message:o.form.errors.email},null,8,["message"])]),t("div",N,[t("div",T,[t("div",null,[e(a,{for:"latitude",value:"latitude"}),e(m,{id:"latitude",type:"text",class:"mt-1 w-full block",modelValue:o.form.lat,"onUpdate:modelValue":s[3]||(s[3]=l=>o.form.lat=l),required:"",autocomplete:"latitude"},null,8,["modelValue"]),e(r,{class:"mt-2",message:o.form.errors.lat},null,8,["message"])]),t("div",null,[e(a,{for:"longitute",value:"longitute"}),e(m,{id:"longitute",type:"text",class:"mt-1 w-full block",modelValue:o.form.long,"onUpdate:modelValue":s[4]||(s[4]=l=>o.form.long=l),required:"",autocomplete:"longitute"},null,8,["modelValue"]),e(r,{class:"mt-2",message:o.form.errors.long},null,8,["message"])])]),A]),t("div",j,[e(a,{for:"password",value:"Password"}),e(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o.form.password,"onUpdate:modelValue":s[5]||(s[5]=l=>o.form.password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(r,{class:"mt-2",message:o.form.errors.password},null,8,["message"])]),t("div",R,[e(a,{for:"password_confirmation",value:"Confirm Password"}),e(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:o.form.password_confirmation,"onUpdate:modelValue":s[6]||(s[6]=l=>o.form.password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(r,{class:"mt-2",message:o.form.errors.password_confirmation},null,8,["message"])]),t("div",S,[e(_,{class:P(["ml-4",{"opacity-25":o.form.processing}]),disabled:o.form.processing},{default:x(()=>[z]),_:1},8,["class","disabled"])])],32)}const $=q(L,[["render",F]]);export{$ as default};
