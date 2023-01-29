import{B as q,a as _,h as j,o as w,b as k,d as e,f as d,g as u,u as o,C as $,t as y,z as r,W as i,n as h,X as N,F as S,j as A,i as B,R as z,v as D,x as E}from"./app.027fc9ac.js";import{N as U,_ as C,U as V}from"./dialog.aec603e9.js";import{e as g,f as M}from"./transition.b8c95726.js";import{_ as F}from"./_plugin-vue_export-helper.cdc0426e.js";const I=e("button",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})])],-1),O=[I],R=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),L={class:"fixed inset-0 overflow-y-auto"},P={class:"flex min-h-full items-center justify-center p-4 text-center"},Q=e("span",{class:"text-lg font-medium leading-6 text-gray-900"}," Equipmet Details",-1),H=e("i",{class:"fa-solid fa-x text-lg"},null,-1),T=[H],W={class:"mt-2"},G=["onSubmit"],X={class:""},J={class:"px-4 py-5 bg-white sm:p-6"},K={class:"grid grid-cols-6 gap-6"},Y={class:"col-span-6 flex flex-col border p-2 rounded"},Z={class:"text-base text-slate-500 pb-2"},ee={class:"flex flex-row space-x-6"},te={class:"col-span-6 sm:col-span-6 lg:col-span-2"},oe=e("label",{for:"model_number",class:"block text-sm font-medium text-gray-700"},"Serviceable",-1),se={class:"col-span-6 sm:col-span-6 lg:col-span-2"},le=e("label",{for:"model_number",class:"block text-sm font-medium text-gray-700"},"Unusable",-1),ne={class:"col-span-6 sm:col-span-6 lg:col-span-2"},ae=e("label",{for:"model_number",class:"block text-sm font-medium text-gray-700"},"Poor",-1),re={class:"col-span-6 sm:col-span-6 lg:col-span-2"},ie=e("label",{for:"model_number",class:"block text-sm font-medium text-gray-700"},"Model Number",-1),de={class:"col-span-6 sm:col-span-3 lg:col-span-2"},ue=e("label",{for:"serial_number",class:"block text-sm font-medium text-gray-700"},"Serial Number",-1),ce={class:"col-span-6 sm:col-span-3 lg:col-span-2"},me=e("label",{for:"unit",class:"block text-sm font-medium text-gray-700"},"Unit ",-1),fe={class:"col-span-6 sm:col-span-3"},be=e("label",{for:"code",class:"block text-sm font-medium text-gray-700"},"Code ",-1),pe={class:"col-span-6 sm:col-span-3"},_e=e("label",{for:"asset_id",class:"block text-sm font-medium text-gray-700"},"asset ID ",-1),ge={class:"col-span-6 sm:col-span-3"},ve=e("label",{for:"category",class:"block text-sm font-medium text-gray-700"},"Category",-1),xe={value:"none",selected:"",disabled:"",hidden:""},ye=e("option",null,"Water Rescue",-1),he=e("option",null,"Fire and Rescue",-1),we=e("option",null,"Protective Gears",-1),ke={class:"col-span-6"},$e=e("label",{for:"asset_desc",class:"block text-sm font-medium text-gray-700"},"Asset Description",-1),Se={class:"col-span-6"},Ue=e("label",{for:"remarks",class:"block text-sm font-medium text-gray-700"},"Remarks",-1),Ce=e("div",{class:"mr-7 flex justify-end"},[e("button",{type:"submit",class:"inline-flex justify-center rounded-md border border-transparent bg-orange-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"}," Update ")],-1),it={__name:"EditModal",props:{form:Object},setup(m){const a=m,l=q({attrs:a.form.attrs_id,detail_id:a.form.detail_id,code:a.form.code,asset_desc:a.form.asset_desc,category:a.form.category,unit:a.form.unit,model_number:a.form.model_number,serial_number:a.form.serial_number,asset_id:a.form.asset_id,remarks:a.form.remarks,serviceable:a.form.serviceable,unserviceable:a.form.unserviceable,poor:a.form.poor});_();const n=j(()=>a.form.serviceable+a.form.unserviceable+a.form.poor);function v(){l.serviceable+l.unserviceable+l.poor<=n.value?l.put(route("municipality.inventory.update",a.form.id),{onSuccess:p=>{b()},onError:p=>{alert(Object.values(p))}}):alert("Quantity Exceed")}const f=_(!1);function b(){f.value=!1}function x(){f.value=!0}return(p,t)=>(w(),k(S,null,[e("div",{onClick:x},O),d(o(M),{appear:"",show:f.value,as:"template"},{default:u(()=>[d(o(U),{as:"div",onClose:b,class:"relative z-10"},{default:u(()=>[d(o(g),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:u(()=>[R]),_:1}),e("div",L,[e("div",P,[d(o(g),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:u(()=>[d(o(C),{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:u(()=>[d(o(V),{as:"h3",class:"flex flex-row justify-between mx-4"},{default:u(()=>[Q,e("button",{class:"grid place-content-center hover:scale-110 hover:text-orange-500",onClick:b},T)]),_:1}),e("div",W,[e("form",{onSubmit:$(v,["prevent"])},[e("div",X,[e("div",J,[e("div",K,[e("div",Y,[e("span",Z,"Quantity: "+y(o(n)),1),e("div",ee,[e("div",te,[oe,r(e("input",{type:"number",name:"model_number",id:"model_number","onUpdate:modelValue":t[0]||(t[0]=s=>o(l).serviceable=s),required:"",class:h([o(l).serviceable>o(n)?"border-red":"","mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"])},null,2),[[i,o(l).serviceable]])]),e("div",se,[le,r(e("input",{type:"number",name:"model_number",id:"model_number","onUpdate:modelValue":t[1]||(t[1]=s=>o(l).unserviceable=s),required:"",class:h([o(l).unserviceable>o(n)?"border-red":"","mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"])},null,2),[[i,o(l).unserviceable]])]),e("div",ne,[ae,r(e("input",{type:"number",name:"model_number",id:"model_number","onUpdate:modelValue":t[2]||(t[2]=s=>o(l).poor=s),required:"",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[i,o(l).poor]])])])]),e("div",re,[ie,r(e("input",{type:"text",name:"model_number",id:"model_number","onUpdate:modelValue":t[3]||(t[3]=s=>o(l).model_number=s),required:"",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[i,o(l).model_number]])]),e("div",de,[ue,r(e("input",{type:"text",name:"serial_number",id:"serial_number","onUpdate:modelValue":t[4]||(t[4]=s=>o(l).serial_number=s),required:"",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[i,o(l).serial_number]])]),e("div",ce,[me,r(e("input",{type:"number",name:"unit",id:"unit","onUpdate:modelValue":t[5]||(t[5]=s=>o(l).unit=s),required:"",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[i,o(l).unit]])]),e("div",fe,[be,r(e("input",{type:"text",name:"code",id:"code",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md","onUpdate:modelValue":t[6]||(t[6]=s=>o(l).code=s),required:""},null,512),[[i,o(l).code]])]),e("div",pe,[_e,r(e("input",{type:"text",name:"asset_id",id:"asset_id",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md","onUpdate:modelValue":t[7]||(t[7]=s=>o(l).asset_id=s),required:""},null,512),[[i,o(l).asset_id]])])]),e("div",ge,[ve,r(e("select",{class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[8]||(t[8]=s=>o(l).category=s),required:""},[e("option",xe,y(o(l).category),1),ye,he,we],512),[[N,o(l).category]])]),e("div",ke,[$e,r(e("input",{type:"text",name:"asset_desc",id:"asset_desc","onUpdate:modelValue":t[9]||(t[9]=s=>o(l).asset_desc=s),required:"",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[i,o(l).asset_desc]])]),e("div",Se,[Ue,r(e("input",{type:"text",name:"remarks",id:"remarks","onUpdate:modelValue":t[10]||(t[10]=s=>o(l).remarks=s),required:"",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[i,o(l).remarks]])])])]),Ce],40,G)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])],64))}};const c=m=>(D("data-v-3c9fbdc2"),m=m(),E(),m),Ve=c(()=>e("button",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})])],-1)),Me=[Ve],qe=c(()=>e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)),je={class:"fixed inset-0 overflow-y-auto"},Ne={class:"flex min-h-full items-center justify-center p-4 text-center"},Ae=c(()=>e("i",{class:"fa-solid fa-x text-lg"},null,-1)),Be=[Ae],ze={class:"flex flex-col space-y-10"},De=c(()=>e("span",{class:"text-xl font-semibold"}," Update Status ",-1)),Ee=["onSubmit"],Fe={class:"flex flex-row space-x-6"},Ie={class:"mb-6"},Oe=c(()=>e("label",{for:"custom-input-number",class:"w-full text-gray-700 text-sm font-semibold"},"Serviceable ",-1)),Re={class:"flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1"},Le={type:"button",class:"bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"},Pe={type:"button",class:"bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"},Qe={class:"mb-6"},He=c(()=>e("label",{for:"custom-input-number",class:"w-full text-gray-700 text-sm font-semibold"},"Poor ",-1)),Te={class:"flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1"},We={type:"button",class:"bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"},Ge={type:"button",class:"bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"},Xe={class:"grid grid-flow-col place-content-center"},Je={class:"mb-6"},Ke=c(()=>e("label",{for:"custom-input-number",class:"w-full text-gray-700 text-sm font-semibold"},"Unusable ",-1)),Ye={class:"flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1"},Ze={type:"button",class:"bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"},et={type:"button",class:"bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"},tt=c(()=>e("button",{type:"submit",class:"text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-500 dark:focus:ring-orange-800"},"Add",-1)),ot={class:"mt-4"},st={__name:"StatusModal",props:{detail_id:String},setup(m){const a=m,l=A(),n=_({serviceable:0,poor:0,unserviceable:0});function v(){z.get("/api/add-quantity/"+a.detail_id,{params:{serviceable:n.value.serviceable,poor:n.value.poor,unserviceable:n.value.unserviceable}}).then(p=>{l.success("Quantity Added")})}const f=_(!1);function b(){f.value=!1}function x(){f.value=!0}return(p,t)=>(w(),k(S,null,[e("div",{onClick:x},Me),d(o(M),{appear:"",show:f.value,as:"template"},{default:u(()=>[d(o(U),{as:"div",onClose:b,class:"relative z-50"},{default:u(()=>[d(o(g),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:u(()=>[qe]),_:1}),e("div",je,[e("div",Ne,[d(o(g),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:u(()=>[d(o(C),{class:"w-[600px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:u(()=>[d(o(V),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900 flex justify-end"},{default:u(()=>[e("button",{class:"grid place-content-center hover:scale-110 hover:text-orange-500",onClick:b},Be)]),_:1}),e("div",ze,[De,e("form",{onSubmit:$(v,["prevent"])},[e("div",Fe,[e("div",Ie,[Oe,e("div",Re,[e("button",Le,[e("span",{class:"m-auto text-2xl font-thin",onClick:t[0]||(t[0]=s=>n.value.serviceable--)},"\u2212")]),r(e("input",{type:"number",class:"outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none",name:"custom-input-number","onUpdate:modelValue":t[1]||(t[1]=s=>n.value.serviceable=s)},null,512),[[i,n.value.serviceable]]),e("button",Pe,[e("span",{class:"m-auto text-2xl font-thin",onClick:t[2]||(t[2]=s=>n.value.serviceable++)},"+")])])]),e("div",Qe,[He,e("div",Te,[e("button",We,[e("span",{class:"m-auto text-2xl font-thin",onClick:t[3]||(t[3]=s=>n.value.poor--)},"\u2212")]),r(e("input",{type:"number",class:"outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none",name:"custom-input-number","onUpdate:modelValue":t[4]||(t[4]=s=>n.value.poor=s)},null,512),[[i,n.value.poor]]),e("button",Ge,[e("span",{class:"m-auto text-2xl font-thin",onClick:t[5]||(t[5]=s=>n.value.poor++)},"+")])])])]),e("div",Xe,[e("div",Je,[Ke,e("div",Ye,[e("button",Ze,[e("span",{class:"m-auto text-2xl font-thin",onClick:t[6]||(t[6]=s=>n.value.unserviceable--)},"\u2212")]),r(e("input",{type:"number",class:"outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none",name:"custom-input-number","onUpdate:modelValue":t[7]||(t[7]=s=>n.value.unserviceable=s)},null,512),[[i,n.value.unserviceable]]),e("button",et,[e("span",{class:"m-auto text-2xl font-thin",onClick:t[8]||(t[8]=s=>n.value.unserviceable++)},"+")])])])]),tt],40,Ee)]),e("div",ot,[B(p.$slots,"footer",{},void 0,!0)])]),_:3})]),_:3})])])]),_:3})]),_:3},8,["show"])],64))}},dt=F(st,[["__scopeId","data-v-3c9fbdc2"]]);export{dt as S,it as _};
