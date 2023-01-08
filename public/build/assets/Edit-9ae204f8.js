import{r as h,m as y,o as i,c as d,d as g,a,u as t,e as b,F as x,H as v,b as o,L as V,g as N,h as w,t as n,i as m}from"./app-88b19bbb.js";import{_ as k}from"./AuthenticatedLayout-380cbd98.js";import{_ as c}from"./InputLabel-cc9fc150.js";import{_ as p}from"./TextInput-6e427b9b.js";import"./ApplicationLogo-15da669d.js";const $=["value"],B={__name:"Textarea",props:["modelValue"],emits:["update:modelValue"],setup(_){const s=h(null);return y(()=>{s.value.hasAttribute("autofocus")&&s.value.focus()}),(e,u)=>(i(),d("textarea",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:_.modelValue,onInput:u[0]||(u[0]=f=>e.$emit("update:modelValue",f.target.value)),ref_key:"input",ref:s},null,40,$))}},C=o("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Create Post ",-1),F={class:"py-12"},S={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},U={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},T={class:"p-6 bg-white border-b border-gray-200"},j={className:"flex items-center justify-between mb-6"},D=["onSubmit"],E={className:"flex flex-col"},H={className:"mb-4"},L={key:0,className:"text-red-600"},M={className:"mb-4"},A={key:0,className:"text-red-600"},I={className:"mb-4"},O={key:0,className:"text-red-600"},P={className:"mb-4"},q={key:0,className:"text-red-600"},z=o("div",{className:"mt-4"},[o("button",{type:"submit",className:"px-6 py-2 font-bold text-white bg-green-500 rounded"}," Save ")],-1),W={__name:"Edit",props:{article:Object},setup(_){const s=_,e=g({id:s.article.id,title:s.article.title,category_id:s.article.category_id,body:s.article.body,status:s.article.status,thumbnail:s.article.thumbnail}),u=()=>{e.put(route("article.update",s.article.id))};return(f,l)=>(i(),d(x,null,[a(t(v),{title:"Dashboard"}),a(k,null,{header:b(()=>[C]),default:b(()=>[o("div",F,[o("div",S,[o("div",U,[o("div",T,[o("div",j,[a(t(V),{className:"px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none",href:f.route("article.index")},{default:b(()=>[N(" Back ")]),_:1},8,["href"])]),o("form",{name:"createForm",onSubmit:w(u,["prevent"])},[o("div",E,[o("div",H,[a(c,{for:"title",value:"Title"}),a(p,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:t(e).title,"onUpdate:modelValue":l[0]||(l[0]=r=>t(e).title=r),autofocus:""},null,8,["modelValue"]),t(e).errors.title?(i(),d("span",L,n(t(e).errors.title),1)):m("",!0)]),o("div",M,[a(c,{for:"thumbnail",value:"thumbnail"}),a(p,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:t(e).thumbnail,"onUpdate:modelValue":l[1]||(l[1]=r=>t(e).thumbnail=r),autofocus:""},null,8,["modelValue"]),t(e).errors.thumbnail?(i(),d("span",A,n(t(e).errors.thumbnail),1)):m("",!0)]),o("div",I,[a(c,{for:"slug",value:"Category"}),a(p,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:t(e).category_id,"onUpdate:modelValue":l[2]||(l[2]=r=>t(e).category_id=r),autofocus:""},null,8,["modelValue"]),t(e).errors.category_id?(i(),d("span",O,n(t(e).errors.category_id),1)):m("",!0)]),o("div",P,[a(c,{for:"body",value:"Body"}),a(B,{id:"body",class:"mt-1 block w-full",modelValue:t(e).body,"onUpdate:modelValue":l[3]||(l[3]=r=>t(e).body=r),autofocus:""},null,8,["modelValue"]),t(e).errors.body?(i(),d("span",q,n(t(e).errors.body),1)):m("",!0)])]),z],40,D)])])])])]),_:1})],64))}};export{W as default};
