import{n as d,h as u,N as n,d as l,o as p,c as i,P as k}from"./app-12de82bd.js";const m=["value"],y={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(r,{emit:o}){const s=r,e=d({get(){return s.checked},set(a){o("update:checked",a)}});return(a,t)=>u((p(),i("input",{type:"checkbox",value:r.value,"onUpdate:modelValue":t[0]||(t[0]=c=>k(e)?e.value=c:null),class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800"},null,8,m)),[[n,l(e)]])}};export{y as _};
