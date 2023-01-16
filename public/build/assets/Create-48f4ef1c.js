import{u as h,c as d,a,b as s,d as e,w as y,e as v,t as l,f as n,g as _,v as g,F as b,r as k,o as i,H as w,h as x,L as N}from"./app-12f7aa5e.js";import{_ as u}from"./InputLabel-0888d1f3.js";import{_ as f}from"./TextInput-12a65dbf.js";import{_ as V,r as S}from"./ChevronLeftIcon-84527e2f.js";const C={class:"py-5"},U={class:"mx-auto sm:px-6 lg:px-8"},j={class:"bg-white overflow-hidden sm:rounded-lg"},B={class:"p-6 bg-white"},L={className:"flex items-center justify-between mb-6"},F={class:"flex justify-between items-center"},D=["onSubmit"],O={className:"grid grid-cols-4 gap-4"},T={className:"col-span-3"},$={class:"mb-4"},H={key:0,className:"text-red-600"},M={className:"mb-4"},R={key:0,className:"text-red-600"},A={className:"mb-4"},E=e("option",{value:"draft",selected:""}," Draft ",-1),I=e("option",{value:"show"},"Show",-1),q=[E,I],z={key:0,className:"text-red-600"},G={className:"mb-4"},J=["value"],K={key:0,className:"text-red-600"},P={className:"mb-4"},Q=["src"],W={class:"m-2 p-2"},X=["src"],Y={key:0,className:"text-red-600"},Z=e("div",{className:"mt-4"},[e("button",{type:"submit",className:"px-6 py-2 font-bold text-white bg-blue-500 rounded"}," Save ")],-1),ee={props:["id"],data(){return{previewimage:null}},methods:{upload(c){let t=c.target.files[0];this.previewimage=URL.createObjectURL(t)}}},re=Object.assign(ee,{__name:"Create",props:{categories:Object},setup(c){const t=h({title:"",body:"",status:"draft",thumbnail:null,category_id:null}),p=()=>{t.post(route("article.store"))};return(m,r)=>(i(),d(b,null,[a(s(w),{title:"Article"}),e("div",C,[e("div",U,[e("div",j,[e("div",B,[e("div",L,[e("div",F,[a(s(S),{class:"w-4 h-4"}),a(s(N),{href:m.route("article.index")},{default:y(()=>[x("Back")]),_:1},8,["href"])])]),e("form",{name:"createForm",onSubmit:v(p,["prevent"]),enctype:"multipart/form-data"},[e("div",O,[e("div",T,[e("div",$,[a(u,{for:"title",value:"Title"}),a(f,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:s(t).title,"onUpdate:modelValue":r[0]||(r[0]=o=>s(t).title=o),autofocus:""},null,8,["modelValue"]),s(t).errors.title?(i(),d("span",H,l(s(t).errors.title),1)):n("",!0)]),e("div",M,[a(u,{for:"body",value:"Body"}),a(V,{id:"body",modelValue:s(t).body,"onUpdate:modelValue":r[1]||(r[1]=o=>s(t).body=o),autofocus:""},null,8,["modelValue"]),s(t).errors.body?(i(),d("span",R,l(s(t).errors.body),1)):n("",!0)])]),e("div",null,[e("div",A,[a(u,{for:"status",value:"Status"}),_(e("select",{id:"status","onUpdate:modelValue":r[2]||(r[2]=o=>s(t).status=o),class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50"},q,512),[[g,s(t).status]]),s(t).errors.status?(i(),d("span",z,l(s(t).errors.status),1)):n("",!0)]),e("div",G,[a(u,{for:"category_id",value:"Category"}),_(e("select",{id:"category_id","onUpdate:modelValue":r[3]||(r[3]=o=>s(t).category_id=o),class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50",autofocus:""},[(i(!0),d(b,null,k(c.categories,o=>(i(),d("option",{value:o.id},[e("p",null,l(o.name),1)],8,J))),256))],512),[[g,s(t).category_id]]),s(t).errors.category_id?(i(),d("span",K,l(s(t).errors.category_id),1)):n("",!0)]),e("div",P,[a(u,{for:"thumbnail",value:"Thumbnail"}),a(f,{id:"thumbnail",type:"file",class:"mt-1 block w-full rounded-none shadow-none",name:"thumbnail",onChange:m.upload,onInput:r[4]||(r[4]=o=>s(t).thumbnail=o.target.files[0]),multiple:""},null,8,["onChange"]),e("img",{src:m.previewimage,alt:"",class:"w-30"},null,8,Q),e("div",W,[e("img",{src:s(t).thumbnail,class:"w-32",alt:""},null,8,X)]),s(t).errors.thumbnail?(i(),d("span",Y,l(s(t).errors.thumbnail),1)):n("",!0)])])]),Z],40,D)])])])])],64))}});export{re as default};
