import{u as h,c as i,a as r,b as s,d as e,w as y,e as v,t as l,f as n,g,v as p,F as f,r as k,o as d,H as w,h as x,L as N}from"./app-91c3a5ed.js";import{_ as u}from"./InputLabel-fe425aee.js";import{_}from"./TextInput-42ffdec0.js";import{_ as V}from"./Ckeditor-8eeabb03.js";import{r as S}from"./ChevronLeftIcon-80e426e3.js";import"./Ckeditor.vue_vue_type_style_index_0_lang-4ed7f1f2.js";const C={class:"py-5"},U={class:"mx-auto sm:px-6 lg:px-8"},j={class:"bg-white overflow-hidden sm:rounded-lg"},B={class:"p-6 bg-white"},L={className:"flex items-center justify-between mb-6"},F={class:"flex justify-between items-center"},D=["onSubmit"],O={className:"grid grid-cols-4 gap-4"},T={className:"col-span-3"},$={class:"mb-4"},H={key:0,className:"text-red-600"},M={className:"mb-4"},R={key:0,className:"text-red-600"},A={className:"mb-4"},E=e("option",{value:"draft",selected:""}," Draft ",-1),I=e("option",{value:"show"},"Show",-1),q=[E,I],z={key:0,className:"text-red-600"},G={className:"mb-4"},J=["value"],K={key:0,className:"text-red-600"},P={className:"mb-4"},Q=["src"],W={key:0,className:"text-red-600"},X=e("div",{className:"mt-4"},[e("button",{type:"submit",className:"inline-flex items-center px-4 py-2 bg-primary dark:bg-primary border border-transparent rounded-md font-semibold text-xs text-white dark:text-white uppercase tracking-widest hover:bg-primary/80 dark:hover:bg-primary/90 focus:bg-primary/80 dark:focus:bg-primary/80 active:bg-primary dark:active:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-primary transition ease-in-out duration-150 disabled:bg-primary/80"}," Save ")],-1),Y={props:["id"],data(){return{previewimage:null}},methods:{upload(c){let t=c.target.files[0];this.previewimage=URL.createObjectURL(t)}}},ae=Object.assign(Y,{__name:"Create",props:{categories:Object},setup(c){const t=h({title:"",body:"",status:"draft",thumbnail:null,category_id:null}),b=()=>{t.post(route("article.store"))};return(m,a)=>(d(),i(f,null,[r(s(w),{title:"Article"}),e("div",C,[e("div",U,[e("div",j,[e("div",B,[e("div",L,[e("div",F,[r(s(S),{class:"w-4 h-4"}),r(s(N),{href:m.route("article.index")},{default:y(()=>[x("Back")]),_:1},8,["href"])])]),e("form",{name:"createForm",onSubmit:v(b,["prevent"]),enctype:"multipart/form-data"},[e("div",O,[e("div",T,[e("div",$,[r(u,{for:"title",value:"Title"}),r(_,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:s(t).title,"onUpdate:modelValue":a[0]||(a[0]=o=>s(t).title=o),autofocus:""},null,8,["modelValue"]),s(t).errors.title?(d(),i("span",H,l(s(t).errors.title),1)):n("",!0)]),e("div",M,[r(u,{for:"body",value:"Body"}),r(V,{id:"body",modelValue:s(t).body,"onUpdate:modelValue":a[1]||(a[1]=o=>s(t).body=o),autofocus:""},null,8,["modelValue"]),s(t).errors.body?(d(),i("span",R,l(s(t).errors.body),1)):n("",!0)])]),e("div",null,[e("div",A,[r(u,{for:"status",value:"Status"}),g(e("select",{id:"status","onUpdate:modelValue":a[2]||(a[2]=o=>s(t).status=o),class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50"},q,512),[[p,s(t).status]]),s(t).errors.status?(d(),i("span",z,l(s(t).errors.status),1)):n("",!0)]),e("div",G,[r(u,{for:"category_id",value:"Category"}),g(e("select",{id:"category_id","onUpdate:modelValue":a[3]||(a[3]=o=>s(t).category_id=o),class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50",autofocus:""},[(d(!0),i(f,null,k(c.categories,o=>(d(),i("option",{value:o.id},[e("p",null,l(o.name),1)],8,J))),256))],512),[[p,s(t).category_id]]),s(t).errors.category_id?(d(),i("span",K,l(s(t).errors.category_id),1)):n("",!0)]),e("div",P,[r(u,{for:"thumbnail",value:"Thumbnail"}),r(_,{id:"thumbnail",type:"file",class:"mt-1 block w-full rounded-none shadow-none",name:"thumbnail",onChange:m.upload,onInput:a[4]||(a[4]=o=>s(t).thumbnail=o.target.files[0]),multiple:""},null,8,["onChange"]),e("img",{src:m.previewimage,alt:"",class:"w-30 mt-4 rounded-md"},null,8,Q),s(t).errors.thumbnail?(d(),i("span",W,l(s(t).errors.thumbnail),1)):n("",!0)])])]),X],40,D)])])])])],64))}});export{ae as default};
