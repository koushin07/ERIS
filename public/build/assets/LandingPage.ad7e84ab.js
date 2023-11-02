import{a as v,B as y,b as n,d as e,C as w,e as d,f as l,n as P,g as k,F as x,q as C,$ as m,r,o as c,t as g,v as L,x as q,s as I}from"./app.8f761c41.js";import{_ as D}from"./InputError.949bd501.js";import{a as S,_ as O}from"./TextInput.11d1c01d.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";const j="/build/assets/AFP.d54dd93e.png",V="/build/assets/DILG.681dd9c8.png",M="/build/assets/DOH.63aaa75f.png",F="/build/assets/OCD.9cefe553.png",H="/build/assets/PNP.ba2f65d2.png";const R={components:{TextInput:S,InputLabel:O,InputError:D},setup(){const o=v(!1),a=y({email:"",password:"",remember:!1});return{showpassword:o,agencies:[{name:"Armed Forces of the Philippines (AFP)",text:"Search, Rescue, and Retrieval",img:j},{name:"Department of Interior and Local Government (DILG)",text:"Management of the dead and missing",img:V},{name:"Department of Health (DOH)",text:"Wash, Health, Nutrition and  Psychological Services",img:M},{name:"Office of Civil Defense (OCD)",text:"Logistics and Emergency Telecommunications",img:F},{name:"Philippine National Police (PNP)",text:"Law and Order",img:H}],submit:()=>{a.post(route("login"),{onFinish:()=>a.reset("password")})},form:a}}},t=o=>(L("data-v-52ec6ebe"),o=o(),q(),o),E={class:"full-page flex justify-center md:justify-between",id:"home"},G=m('<div class="hidden md:flex flex-col animate-fade-in-down" data-v-52ec6ebe><nav class="navbar flex p-7 antialiased font-sans" data-v-52ec6ebe><div class="hidden md:flex space-x-6 text-white" data-v-52ec6ebe><a href="#home" class="m-4 my-3 rounded-lg text-xl" data-v-52ec6ebe>Home</a><a class="m-4 my-3 rounded-lg text-xl" data-v-52ec6ebe>Services</a><a href="#rdrrmc" class="m-2 my-3 rounded-lg text-xl" data-v-52ec6ebe>About</a><a href="#contact" class="m-4 my-3 rounded-lg text-xl" data-v-52ec6ebe>Contact</a></div></nav></div>',1),T={class:"flex m-2 py-10 bg-white animate-fade-in-down"},z={class:"flex flex-col space-y-10"},A=t(()=>e("h1",{class:"font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-orange-600 to-pink-400",style:{"font-family":"Courier","font-size":"3rem"}},"Login",-1)),B={key:0,class:"font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-orange-600 to-pink-400",style:{"font-family":"Courier","font-size":"2rem"}},U={class:"flex flex-col space-y-10"},W={key:0,class:"relative flex flex-col z-0"},J={key:1,class:"relative flex flex-col z-0 pb-10 space-y-2"},K={class:"flex justify-between"},Q={class:"flex flex-col"},X={key:0,type:"submit",class:"text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium text-sm px-5 py-2.5 mx-5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"},Y=I(" Register Here "),Z={class:"body"},$={class:"flex flex-col p-16 py-4 md:py-16 h-fit md:h-screen",id:"rdrrmc"},ee=t(()=>e("div",{class:"px-10 py-4"},[e("h1",{class:"font-semibold text-black text-4xl antialiased"},"RDRRMC")],-1)),se={class:"grid md:grid-cols-2 gap-11 justify-evenly"},te={class:"text-center"},ae=["src"],oe=m('<div class="text-center" data-v-52ec6ebe><p class="font-semibold text-justify pb-5" data-v-52ec6ebe>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nulla iure maiores, sed praesentium error voluptates velit optio tempore accusamus, sequi accusantium quis cumque in corporis ratione odit cum dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nulla iure maiores, sed praesentium error voluptates velit optio tempore accusamus, sequi accusantium quis cumque in corporis ratione odit cum dolore.</p><p class="font-semibold text-justify" data-v-52ec6ebe>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, sequi ipsa! Nostrum optio quo sint tempora illo accusamus quisquam fugiat vitae soluta consequatur, assumenda ex harum architecto eligendi cupiditate adipisci!</p><a type="button" href="#provinces" class="mt-10 w-full py-3 border-2 rounded-3xl border-black" data-v-52ec6ebe><h3 class="text-black font-semibold" data-v-52ec6ebe>Provinces</h3></a></div>',1),ie={class:"h-fit md:h-screen",id:"provinces"},ne=t(()=>e("h1",{class:"text-center font-bold text-2xl"},"Provinces",-1)),le={class:"flex flex-col md:flex-row justify-evenly py-10 space-y-9 md:space-x-9"},ce={class:"grid grid-rows-1 place-items-center"},de=["src"],re=t(()=>e("span",{class:"text-xl font-semibold p-0 text-black"},"Province of Misamis Occidental",-1)),me=t(()=>e("span",{class:"font-semibold p-0 text-slate-700"},"Orogueta City",-1)),pe={class:"grid grid-rows-1 place-items-center"},ue=["src"],fe=t(()=>e("span",{class:"text-xl font-semibold p-0 text-black"},"Province of Camiguin",-1)),xe=t(()=>e("span",{class:"font-semibold p-0 text-slate-700"},"Mambajao",-1)),ge={class:"grid grid-rows-1 place-items-center"},_e=["src"],be=t(()=>e("span",{class:"text-xl font-semibold p-0 text-black"},"Province of Lanao Del Norte",-1)),he=t(()=>e("span",{class:"font-semibold p-0 text-slate-700"},"Tubod",-1)),ve={class:"flex flex-col md:flex-row space-y-9 md:space-x-9 justify-evenly md:pt-16"},ye={class:"grid grid-rows-1 place-items-center"},we=["src"],Pe=t(()=>e("span",{class:"text-xl font-semibold p-0 text-black"},"Province of Bukidnon",-1)),ke=t(()=>e("span",{class:"font-semibold p-0 text-slate-700"},"Malaybalay City",-1)),Ce={class:"grid grid-rows-1 place-items-center"},Le=["src"],qe=t(()=>e("span",{class:"text-xl font-semibold p-0 text-black"},"Province of Misamis Oriental",-1)),Ie=t(()=>e("span",{class:"font-semibold p-0 text-slate-700"},"Cagayan De Oro City",-1)),De=m('<section class="h-fit md:h-screen" id="contact" data-v-52ec6ebe><div class="flex flex-col space-y-11 justify-center" data-v-52ec6ebe><div class="flex flex-col space-y-3 text-center" data-v-52ec6ebe><h1 class="text-2xl font-bold font-serif" data-v-52ec6ebe>Contact Us</h1><span class="text-md font-sans px-10 text-justify" data-v-52ec6ebe>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quae porro eaque quisquam esse recusandae distinctio iste, suscipit minus laboriosam, alias repellendus voluptatum beatae voluptate reiciendis ipsum deleniti. Voluptatibus, assumenda?</span></div><div class="flex flex-col md:flex-row-reverse space-y-2 md:px-16 md:gap-56" data-v-52ec6ebe><div class="flex flex-col self-center w-4/5 bg-white px-10 py-16 drop-shadow-xl space-y-12 contact h-full" data-v-52ec6ebe><h2 class="font-bold text-3xl pt-5" data-v-52ec6ebe>Send Message</h2></div><div class="grid grid-cols-2 md:grid-cols-1 self-center md:self-stretch w-4/5 py-20 text-center" data-v-52ec6ebe><span class="text-xs md:text-lg antialiased text-gray-500" data-v-52ec6ebe><i class="fa-solid fa-envelope pr-1 md:text-xl" data-v-52ec6ebe></i>Canaresmiko3@gmail.com</span><span class="text-xs md:text-lg antialiased text-gray-500" data-v-52ec6ebe><i class="fa-solid fa-phone-flip pr-1 md:text-xl" data-v-52ec6ebe></i>223-3321 / +639533221805</span><span class="text-xs md:text-lg antialiased col-span-2 md:col-span-1 text-gray-500 pl-1" data-v-52ec6ebe><i class="fa-solid fa-location-dot pr-1 md:text-xl" data-v-52ec6ebe></i>Pedro Pagalan St. Poblacion, Naawan, 9023 Misamis oriental</span></div></div></div></section>',1),Se={class:"h-fit md:h-screen"},Oe=t(()=>e("h1",{class:"py-10 px-20 font-bold text-4xl"},"Lead government agencies and their response cluster",-1)),Ne={class:"grid grid-rows-1 md:grid-cols-3 gap-2"},je=["src"],Ve={class:"text-lg font-semibold p-0 text-black text-center"},Me={class:"font-semibold p-0 text-slate-700"};function Fe(o,a,_,s,He,Re){const p=r("InputLabel"),u=r("TextInput"),f=r("InputError"),b=r("inertia-link");return c(),n(x,null,[e("section",E,[G,e("div",T,[e("form",{class:"flex flex-col pt-0 px-14 pb-2 font-sans",onSubmit:a[3]||(a[3]=w((...i)=>s.submit&&s.submit(...i),["prevent"]))},[e("div",z,[A,o.$page.props.auth.user?d("",!0):(c(),n("h4",B,"Log in to EPRRIS"))]),e("div",U,[o.$page.props.auth.user?d("",!0):(c(),n("div",W,[l(p,{for:"email",value:"email"}),l(u,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s.form.email,"onUpdate:modelValue":a[0]||(a[0]=i=>s.form.email=i),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),l(f,{class:"mt-2",message:s.form.errors.email},null,8,["message"])])),o.$page.props.auth.user?d("",!0):(c(),n("div",J,[e("div",K,[l(p,{for:"password",value:"Password"}),e("a",{class:P(["text-sm font-bold cursor-pointer",s.showpassword?"text-blue-500":""]),type:"button",onClick:a[1]||(a[1]=i=>s.showpassword=!s.showpassword)},"show",2)]),l(u,{id:"password",type:s.showpassword?"text":"password",class:"mt-1 block w-full",modelValue:s.form.password,"onUpdate:modelValue":a[2]||(a[2]=i=>s.form.password=i),required:"",autocomplete:"current-password"},null,8,["type","modelValue"]),l(f,{class:"mt-2",message:s.form.errors.password},null,8,["message"])])),e("div",Q,[o.$page.props.auth.user?d("",!0):(c(),n("button",X,"Sign in")),l(b,{href:o.route("register"),class:"tex-lg text-orange-400 underline text-center font-semibold"},{default:k(()=>[Y]),_:1},8,["href"])])])],32)])]),e("div",Z,[e("section",$,[ee,e("div",se,[e("div",te,[e("img",{src:"landingpage/binan.jpg",class:"border-transparent rounded-md drop-shadow-lg"},null,8,ae)]),oe])]),e("section",ie,[ne,e("div",le,[e("div",ce,[e("img",{src:"landingpage/logos/Mis_Occ.svg",class:"w-24"},null,8,de),re,me]),e("div",pe,[e("img",{src:"landingpage/logos/Camiguin_Seal.png",class:"w-24"},null,8,ue),fe,xe]),e("div",ge,[e("img",{src:"landingpage/logos/PGLDN-LOGO.png",class:"w-28"},null,8,_e),be,he])]),e("div",ve,[e("div",ye,[e("img",{src:"landingpage/logos/Ph_seal_bukidnon.png",class:"w-24"},null,8,we),Pe,ke]),e("div",Ce,[e("img",{src:"landingpage/logos/Ph_seal_misamis_oriental.2.png",class:"w-24"},null,8,Le),qe,Ie])])]),De,e("section",Se,[Oe,e("div",Ne,[(c(!0),n(x,null,C(s.agencies,(i,h)=>(c(),n("div",{class:"grid grid-rows-1 place-items-center py-10",key:h},[e("img",{src:i.img,class:"w-24"},null,8,je),e("span",Ve,g(i.name),1),e("span",Me,g(i.text),1)]))),128))])])])],64)}const Ae=N(R,[["render",Fe],["__scopeId","data-v-52ec6ebe"]]);export{Ae as default};
