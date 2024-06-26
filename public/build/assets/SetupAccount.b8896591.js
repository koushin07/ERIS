import{B as m,a as p,b as f,d as e,C as g,z as a,W as n,u as t,f as l,a1 as i,o as x}from"./app.8f761c41.js";import{_ as d}from"./InputError.949bd501.js";const b={class:"flex items-center min-h-screen p-6 shadow dark:bg-gray-900"},y={class:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow dark:bg-gray-800"},k={class:"flex flex-col overflow-y-auto md:flex-row"},w=e("div",{class:"h-32 md:h-auto md:w-1/2"},[e("img",{"aria-hidden":"true",class:"object-cover w-full h-full dark:hidden",src:"landingpage/loginbackground.png",alt:"Office"})],-1),h={class:"flex items-center justify-center p-6 sm:p-12 md:w-1/2"},_=["onSubmit"],v=e("h1",{class:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"}," Setup Your Account ",-1),V={class:"block text-sm"},U=e("span",{class:"text-gray-700 dark:text-gray-400"},"Email",-1),S=e("span",{class:"text-gray-700 dark:text-gray-400"},"Person In-Charge",-1),q={class:"flex flex-row space-x-3"},C={class:"block text-sm"},B={class:"block text-sm"},j={class:"flex flex-row space-x-3"},A={class:"block text-sm"},M={class:"block text-sm"},P={class:"block text-sm"},D=e("span",{class:"text-gray-700 dark:text-gray-400"},"Address",-1),E={class:"block text-sm"},F=e("span",{class:"text-gray-700 dark:text-gray-400"},"Contact",-1),N={class:"block mt-4 text-sm"},$={class:"flex flex-row justify-between"},z=e("span",{class:"text-gray-700 dark:text-gray-400"},"Password",-1),I=["type"],L={class:"block mt-4 text-sm"},O=e("span",{class:"text-gray-700 dark:text-gray-400"},"Confirm Password",-1),T=["type"],W=e("button",{type:"submit",class:"block px-4 w-full py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-orange-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-orange-700 focus:outline-none focus:shadow-outline-orange"}," Set Up ",-1),K={__name:"SetupAccount",setup(Y){const s=m({address:"",contact:"",firstname:"",lastname:"",middlename:"",suffix:"",email:"",password:"",password_confirmation:""}),u=p(!1),c=()=>{s.post(route("setup"),{onSuccess:()=>s.reset("password","password_confirmation")})};return(G,o)=>(x(),f("div",b,[e("div",y,[e("div",k,[w,e("div",h,[e("form",{onSubmit:g(c,["prevent"]),class:"w-full"},[v,e("label",V,[U,a(e("input",{"onUpdate:modelValue":o[0]||(o[0]=r=>t(s).email=r),required:"",type:"email",class:"block rounded-lg w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"},null,512),[[n,t(s).email]]),l(d,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),S,e("div",q,[e("label",C,[a(e("input",{"onUpdate:modelValue":o[1]||(o[1]=r=>t(s).firstname=r),required:"",type:"text",placeholder:"First name",class:"block rounded-lg w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"},null,512),[[n,t(s).firstname]]),l(d,{class:"mt-2",message:t(s).errors.firstname},null,8,["message"])]),e("label",B,[a(e("input",{"onUpdate:modelValue":o[2]||(o[2]=r=>t(s).lastname=r),required:"",type:"text",placeholder:"Last name",class:"block rounded-lg w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"},null,512),[[n,t(s).lastname]]),l(d,{class:"mt-2",message:t(s).errors.lastname},null,8,["message"])])]),e("div",j,[e("label",A,[a(e("input",{"onUpdate:modelValue":o[3]||(o[3]=r=>t(s).middlename=r),type:"text",placeholder:"middle name",class:"block rounded-lg w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"},null,512),[[n,t(s).middlename]]),l(d,{class:"mt-2",message:t(s).errors.middlename},null,8,["message"])]),e("label",M,[a(e("input",{"onUpdate:modelValue":o[4]||(o[4]=r=>t(s).suffix=r),type:"text",placeholder:"Suffix",class:"block rounded-lg w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"},null,512),[[n,t(s).suffix]]),l(d,{class:"mt-2",message:t(s).errors.suffix},null,8,["message"])])]),e("label",P,[D,a(e("input",{"onUpdate:modelValue":o[5]||(o[5]=r=>t(s).address=r),required:"",type:"text",class:"block rounded-lg w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"},null,512),[[n,t(s).address]]),l(d,{class:"mt-2",message:t(s).errors.address},null,8,["message"])]),e("label",E,[F,a(e("input",{"onUpdate:modelValue":o[6]||(o[6]=r=>t(s).contact=r),required:"",type:"tel",class:"block rounded-lg w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"},null,512),[[n,t(s).contact]]),l(d,{class:"mt-2",message:t(s).errors.contact},null,8,["message"])]),e("label",N,[e("div",$,[z,e("div",{onClick:o[7]||(o[7]=r=>u.value=!u.value),class:"text-gray-700 hover:cursor-pointer dark:text-gray-400"},"Show")]),a(e("input",{"onUpdate:modelValue":o[8]||(o[8]=r=>t(s).password=r),class:"block rounded-lg w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input",placeholder:"***************",type:u.value?"text":"password",required:""},null,8,I),[[i,t(s).password]]),l(d,{class:"mt-2",message:t(s).errors.password},null,8,["message"])]),e("label",L,[O,a(e("input",{"onUpdate:modelValue":o[9]||(o[9]=r=>t(s).password_confirmation=r),class:"block rounded-lg w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input",placeholder:"***************",type:u.value?"text":"password",required:""},null,8,T),[[i,t(s).password_confirmation]]),l(d,{class:"mt-2",message:t(s).errors.password_confirmation},null,8,["message"])]),W],40,_)])])])]))}};export{K as default};
