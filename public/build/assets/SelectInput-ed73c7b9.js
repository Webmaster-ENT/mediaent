import{j as u,o as r,c as a,F as s,r as i,t as c}from"./app-95aa28db.js";const g=["value"],m=["value"],k={__name:"SelectInput",props:["modelValue","dataSet"],emits:["update:modelValue"],setup(t){const l=u(null);return(d,o)=>(r(),a("select",{class:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50",value:t.modelValue,onInput:o[0]||(o[0]=e=>d.$emit("update:modelValue",e.target.value)),ref_key:"input",ref:l},[(r(!0),a(s,null,i(t.dataSet,(e,n)=>(r(),a("option",{key:n,value:e.value},c(e.label),9,m))),128))],40,g))}};export{k as _};
