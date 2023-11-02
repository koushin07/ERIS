import{B as f,b as v,d as t,f as l,u as s,g as w,n as _,C as V,r as g,o as b,s as x}from"./app.4093ea43.js";import{_ as d}from"./InputError.0fe2a68f.js";import{a as r,_ as m}from"./TextInput.ea075d2c.js";import{_ as y}from"./PrimaryButton.4f7f1a0a.js";const k=["onSubmit"],U={class:"mt-4"},N={class:"grid grid-cols-2 gap-2 w-fit border rounded mt-4 p-2"},C=t("span",{class:"mt-4 col-span-2"},"Personnel In-charge",-1),q={class:""},P={class:""},B={class:"mt-4"},S={class:"mt-4"},$={class:"mt-4"},A={class:"mt-4"},j={class:"mt-4"},E={class:"mt-4"},F={class:"flex items-center justify-end mt-4"},M=x(" Register New Municipality "),O={__name:"RegisterAsProvince",props:{provinces:Array},setup(i){const u=i;let e=f({firstname:"",lastname:"",middlename:"",address:"",contact:"",suffix:"",email:"",password:"",password_confirmation:"",province:"",terms:!1});u.provinces&&Object.values(u.provinces).map(n=>[n.province,n.id]);const c=()=>{console.log("sbumit as prov"),e.post(route("register"),{onSuccess:()=>e.reset("password","password_confirmation")})};return(n,a)=>{const p=g("v-select");return b(),v("form",{onSubmit:V(c,["prevent"]),autocomplete:"off"},[t("div",null,[l(m,{for:"name",value:"Province"}),l(p,{options:i.provinces,label:"province",reduce:o=>o.id,modelValue:s(e).province,"onUpdate:modelValue":a[0]||(a[0]=o=>s(e).province=o)},null,8,["options","reduce","modelValue"])]),t("div",U,[l(m,{for:"email",value:"Email"}),l(r,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":a[1]||(a[1]=o=>s(e).email=o),required:"",autocomplete:"email"},null,8,["modelValue"]),l(d,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",N,[C,t("div",q,[l(m,{for:"firstname",value:"First Name"}),l(r,{id:"firstname",type:"text",class:"mt-1 block w-full",modelValue:s(e).firstname,"onUpdate:modelValue":a[2]||(a[2]=o=>s(e).firstname=o),autocomplete:"firstname"},null,8,["modelValue"]),l(d,{class:"mt-2",message:s(e).errors.firstname},null,8,["message"])]),t("div",P,[l(m,{for:"lastname",value:"Last Name"}),l(r,{id:"lastname",type:"text",class:"mt-1 block w-full",modelValue:s(e).lastname,"onUpdate:modelValue":a[3]||(a[3]=o=>s(e).lastname=o),autocomplete:"lastname"},null,8,["modelValue"]),l(d,{class:"mt-2",message:s(e).errors.lastname},null,8,["message"])]),t("div",B,[l(m,{for:"middlename",value:"middle Name"}),l(r,{id:"middlename",type:"text",class:"mt-1 block w-full",modelValue:s(e).middlename,"onUpdate:modelValue":a[4]||(a[4]=o=>s(e).middlename=o),autocomplete:"middlename"},null,8,["modelValue"]),l(d,{class:"mt-2",message:s(e).errors.middlename},null,8,["message"])]),t("div",S,[l(m,{for:"suffix",value:"Suffix"}),l(r,{id:"suffix",type:"text",class:"mt-1 block w-full",modelValue:s(e).suffix,"onUpdate:modelValue":a[5]||(a[5]=o=>s(e).suffix=o),autocomplete:"suffix"},null,8,["modelValue"]),l(d,{class:"mt-2",message:s(e).errors.suffix},null,8,["message"])])]),t("div",$,[l(m,{for:"contact",value:"Contact"}),l(r,{id:"contact",type:"number",class:"mt-1 block w-full",modelValue:s(e).contact,"onUpdate:modelValue":a[6]||(a[6]=o=>s(e).contact=o),required:"",autocomplete:"contact"},null,8,["modelValue"]),l(d,{class:"mt-2",message:s(e).errors.contact},null,8,["message"])]),t("div",A,[l(m,{for:"address",value:"Address"}),l(r,{id:"address",type:"text",class:"mt-1 block w-full",modelValue:s(e).address,"onUpdate:modelValue":a[7]||(a[7]=o=>s(e).address=o),required:"",autocomplete:"address"},null,8,["modelValue"]),l(d,{class:"mt-2",message:s(e).errors.address},null,8,["message"])]),t("div",j,[l(m,{for:"password",value:"Password"}),l(r,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[8]||(a[8]=o=>s(e).password=o),required:"",autocomplete:"new-password"},null,8,["modelValue"]),l(d,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",E,[l(m,{for:"password_confirmation",value:"Confirm Password"}),l(r,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":a[9]||(a[9]=o=>s(e).password_confirmation=o),required:"",autocomplete:"new-password"},null,8,["modelValue"]),l(d,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),t("div",F,[l(y,{class:_(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:w(()=>[M]),_:1},8,["class","disabled"])])],40,k)}}};export{O as default};
