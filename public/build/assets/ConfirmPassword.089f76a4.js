import{B as n,c as d,g as t,o as l,f as a,u as o,H as c,d as e,n as u,C as p,s as f}from"./app.027fc9ac.js";import{G as _}from"./GuestLayout.d2b2f55d.js";import{_ as w}from"./InputError.6e8e5f7e.js";import{_ as b,a as h}from"./TextInput.c1c642c1.js";import{_ as g}from"./PrimaryButton.f80cd7f3.js";import"./eprris.ccf75d97.js";import"./_plugin-vue_export-helper.cdc0426e.js";const x=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),y=["onSubmit"],C={class:"flex justify-end mt-4"},V=f(" Confirm "),S={__name:"ConfirmPassword",setup(v){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(B,r)=>(l(),d(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),x,e("form",{onSubmit:p(i,["prevent"])},[e("div",null,[a(b,{for:"password",value:"Password"}),a(h,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=m=>o(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(w,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",C,[a(g,{class:u(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[V]),_:1},8,["class","disabled"])])],40,y)]),_:1}))}};export{S as default};
