import{B as u,h as f,c as _,g as s,o as a,f as o,u as e,H as p,b as h,e as g,d as i,n as y,L as b,C as v,s as n}from"./app.8f761c41.js";import{G as k}from"./GuestLayout.a9ef4a09.js";import{_ as x}from"./PrimaryButton.2036d97d.js";import"./eprris.ccf75d97.js";import"./_plugin-vue_export-helper.cdc0426e.js";const w=i("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],L={class:"mt-4 flex items-center justify-between"},C=n(" Resend Verification Email "),E=n("Log Out"),z={__name:"VerifyEmail",props:{status:String},setup(r){const c=r,t=u(),d=()=>{t.post(route("verification.send"))},l=f(()=>c.status==="verification-link-sent");return(m,N)=>(a(),_(k,null,{default:s(()=>[o(e(p),{title:"Email Verification"}),w,e(l)?(a(),h("div",V," A new verification link has been sent to the email address you provided during registration. ")):g("",!0),i("form",{onSubmit:v(d,["prevent"])},[i("div",L,[o(x,{class:y({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[C]),_:1},8,["class","disabled"]),o(e(b),{href:m.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:s(()=>[E]),_:1},8,["href"])])],40,B)]),_:1}))}};export{z as default};
