import{o,b as s,t as l,i as r,a as i,p as d}from"./app.4093ea43.js";const c={class:"block font-medium text-sm text-gray-700"},m={key:0},p={key:1},g={__name:"InputLabel",props:["value"],setup(t){return(e,a)=>(o(),s("label",c,[t.value?(o(),s("span",m,l(t.value),1)):(o(),s("span",p,[r(e.$slots,"default")]))]))}},_=["v-model"],v={__name:"TextInput",props:["modelValue"],emits:["update:modelValue"],setup(t){const e=i(null);return d(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),(a,n)=>(o(),s("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm","v-model":t.modelValue,onInput:n[0]||(n[0]=u=>a.$emit("update:modelValue",u.target.value)),ref_key:"input",ref:e},null,40,_))}};export{g as _,v as a};
