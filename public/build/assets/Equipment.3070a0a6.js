import{L as o}from"./MunicipalityLayout.b9816a59.js";import{_ as r}from"./Table.1a3b4bda.js";import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{b as m,d as l,t as i,f as c,F as p,r as b,o as d}from"./app.027fc9ac.js";import"./PendingTransactions.4e98a45c.js";import"./Dropdown.6a0edb48.js";import"./eprris.ccf75d97.js";import"./moment.9709ab41.js";const _={layout:o,components:{Table:r},props:{equipments:Object,name:Object,filters:[Array,Object]},setup(){return{tableHeader:[{name:"Equipment Name"},{name:"Serviceable"},{name:"Poor"},{name:"Unusable"},{name:"Actions"}]}}},f={class:"text-right mb-2 font-bold text-lg"};function u(t,y,e,a,k,q){const n=b("Table");return d(),m(p,null,[l("h4",f,i(e.name.municipality_name),1),c(n,{tableHeader:a.tableHeader,tableBody:e.equipments.data,links:e.equipments.links,filters:e.filters},null,8,["tableHeader","tableBody","links","filters"])],64)}const O=s(_,[["render",u]]);export{O as default};
