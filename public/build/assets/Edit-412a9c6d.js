<<<<<<< Updated upstream
<<<<<<<< HEAD:public/build/assets/Edit-412a9c6d.js
import{u as y,c as d,a,b as e,d as t,w as v,e as k,t as n,f as c,g as p,v as b,F as f,r as w,o as l,H as x,h as N,L as V}from"./app-951b8744.js";import{_ as u}from"./InputLabel-a43e8c5e.js";import{_}from"./TextInput-8396224a.js";import{_ as S}from"./Ckeditor-080bec74.js";import{r as U}from"./ChevronLeftIcon-1e460b9d.js";const j={class:"py-5"},B={class:"mx-auto sm:px-6 lg:px-8"},C={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},L={class:"p-6 bg-white"},D={className:"flex items-center justify-between mb-6"},F={class:"flex justify-between items-center"},O=["onSubmit"],T={className:"grid grid-cols-4 gap-4"},$={className:"col-span-3"},A={class:"mb-4"},E={key:0,className:"text-red-600"},H={className:"mb-4"},M={key:0,className:"text-red-600"},R={className:"mb-4"},I=t("option",{value:"draft",selected:""}," Draft ",-1),q=t("option",{value:"show"},"Show",-1),z=[I,q],G={key:0,className:"text-red-600"},J={className:"mb-4"},K=["value"],P={key:0,className:"text-red-600"},Q={className:"mb-4"},W=["src"],X={key:0,className:"text-red-600"},Y=t("div",{className:"mt-4"},[t("button",{type:"submit",className:"inline-flex items-center px-4 py-2 bg-primary dark:bg-primary border border-transparent rounded-md font-semibold text-xs text-white dark:text-white uppercase tracking-widest hover:bg-primary/80 dark:hover:bg-primary/90 focus:bg-primary/80 dark:focus:bg-primary/80 active:bg-primary dark:active:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-primary transition ease-in-out duration-150 disabled:bg-primary/80"}," Save ")],-1),Z={props:["id"],data(){return{previewimage:null}},methods:{upload(m){let i=m.target.files[0];this.previewimage=URL.createObjectURL(i)}}},oe=Object.assign(Z,{__name:"Edit",props:{article:Object,categories:Array,thumbnail:String},setup(m){const i=m,s=y({id:i.article.id,title:i.article.title,category_id:i.article.category_id,body:i.article.body,status:i.article.status,thumbnail:i.article.thumbnail,_method:"put"}),h=()=>{s.post(route("article.update",i.article.id))};return(g,o)=>(l(),d(f,null,[a(e(x),{title:"Article"}),t("div",j,[t("div",B,[t("div",C,[t("div",L,[t("div",D,[t("div",F,[a(e(U),{class:"w-4 h-4"}),a(e(V),{href:g.route("article.index")},{default:v(()=>[N("Back")]),_:1},8,["href"])])]),t("form",{onSubmit:k(h,["prevent"]),enctype:"multipart/form-data"},[t("div",T,[t("div",$,[t("div",A,[a(u,{for:"title",value:"Title"}),a(_,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:e(s).title,"onUpdate:modelValue":o[0]||(o[0]=r=>e(s).title=r),autofocus:""},null,8,["modelValue"]),e(s).errors.title?(l(),d("span",E,n(e(s).errors.title),1)):c("",!0)]),t("div",H,[a(u,{for:"body",class:"mb-1",value:"Body"}),a(S,{id:"body",modelValue:e(s).body,"onUpdate:modelValue":o[1]||(o[1]=r=>e(s).body=r),autofocus:""},null,8,["modelValue"]),e(s).errors.body?(l(),d("span",M,n(e(s).errors.body),1)):c("",!0)])]),t("div",null,[t("div",R,[a(u,{for:"status",value:"Status"}),p(t("select",{id:"status","onUpdate:modelValue":o[2]||(o[2]=r=>e(s).status=r),class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50"},z,512),[[b,e(s).status]]),e(s).errors.status?(l(),d("span",G,n(e(s).errors.status),1)):c("",!0)]),t("div",J,[a(u,{for:"category_id",value:"Category"}),p(t("select",{id:"category_id","onUpdate:modelValue":o[3]||(o[3]=r=>e(s).category_id=r),class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50",autofocus:""},[(l(!0),d(f,null,w(m.categories,r=>(l(),d("option",{value:r.id},[t("p",null,n(r.name),1)],8,K))),256))],512),[[b,e(s).category_id]]),e(s).errors.category_id?(l(),d("span",P,n(e(s).errors.category_id),1)):c("",!0)]),t("div",Q,[a(u,{for:"thumbnail",value:"Thumbnail"}),a(_,{id:"thumbnail",type:"file",class:"mt-1 block w-full rounded-none shadow-none",name:"thumbnail",onChange:g.upload,onInput:o[4]||(o[4]=r=>e(s).thumbnail=r.target.files[0]),multiple:""},null,8,["onChange"]),t("img",{src:g.previewimage==null?"../../"+e(s).thumbnail:g.previewimage,alt:"",class:"w-30 mt-4 rounded-md"},null,8,W),e(s).errors.thumbnail?(l(),d("span",X,n(e(s).errors.thumbnail),1)):c("",!0)])])]),Y],40,O)])])])])],64))}});export{oe as default};
========
import{u as y,c as d,a,b as e,d as t,w as v,e as k,t as n,f as c,g as p,v as b,F as f,r as w,o as l,H as x,h as N,L as V}from"./app-54cd0e01.js";import{_ as u}from"./InputLabel-c1230c76.js";import{_}from"./TextInput-3391c49a.js";import{_ as S}from"./Ckeditor-7d57ffea.js";import{r as U}from"./ChevronLeftIcon-ce7f5d8b.js";const j={class:"py-5"},B={class:"mx-auto sm:px-6 lg:px-8"},C={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},L={class:"p-6 bg-white"},D={className:"flex items-center justify-between mb-6"},F={class:"flex justify-between items-center"},O=["onSubmit"],T={className:"grid grid-cols-4 gap-4"},$={className:"col-span-3"},A={class:"mb-4"},E={key:0,className:"text-red-600"},H={className:"mb-4"},M={key:0,className:"text-red-600"},R={className:"mb-4"},I=t("option",{value:"draft",selected:""}," Draft ",-1),q=t("option",{value:"show"},"Show",-1),z=[I,q],G={key:0,className:"text-red-600"},J={className:"mb-4"},K=["value"],P={key:0,className:"text-red-600"},Q={className:"mb-4"},W=["src"],X={key:0,className:"text-red-600"},Y=t("div",{className:"mt-4"},[t("button",{type:"submit",className:"inline-flex items-center px-4 py-2 bg-primary dark:bg-primary border border-transparent rounded-md font-semibold text-xs text-white dark:text-white uppercase tracking-widest hover:bg-primary/80 dark:hover:bg-primary/90 focus:bg-primary/80 dark:focus:bg-primary/80 active:bg-primary dark:active:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-primary transition ease-in-out duration-150 disabled:bg-primary/80"}," Save ")],-1),Z={props:["id"],data(){return{previewimage:null}},methods:{upload(m){let i=m.target.files[0];this.previewimage=URL.createObjectURL(i)}}},oe=Object.assign(Z,{__name:"Edit",props:{article:Object,categories:Array,thumbnail:String},setup(m){const i=m,s=y({id:i.article.id,title:i.article.title,category_id:i.article.category_id,body:i.article.body,status:i.article.status,thumbnail:i.article.thumbnail,_method:"put"}),h=()=>{s.post(route("article.update",i.article.id))};return(g,o)=>(l(),d(f,null,[a(e(x),{title:"Article"}),t("div",j,[t("div",B,[t("div",C,[t("div",L,[t("div",D,[t("div",F,[a(e(U),{class:"w-4 h-4"}),a(e(V),{href:g.route("article.index")},{default:v(()=>[N("Back")]),_:1},8,["href"])])]),t("form",{onSubmit:k(h,["prevent"]),enctype:"multipart/form-data"},[t("div",T,[t("div",$,[t("div",A,[a(u,{for:"title",value:"Title"}),a(_,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:e(s).title,"onUpdate:modelValue":o[0]||(o[0]=r=>e(s).title=r),autofocus:""},null,8,["modelValue"]),e(s).errors.title?(l(),d("span",E,n(e(s).errors.title),1)):c("",!0)]),t("div",H,[a(u,{for:"body",class:"mb-1",value:"Body"}),a(S,{id:"body",modelValue:e(s).body,"onUpdate:modelValue":o[1]||(o[1]=r=>e(s).body=r),autofocus:""},null,8,["modelValue"]),e(s).errors.body?(l(),d("span",M,n(e(s).errors.body),1)):c("",!0)])]),t("div",null,[t("div",R,[a(u,{for:"status",value:"Status"}),p(t("select",{id:"status","onUpdate:modelValue":o[2]||(o[2]=r=>e(s).status=r),class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50"},z,512),[[b,e(s).status]]),e(s).errors.status?(l(),d("span",G,n(e(s).errors.status),1)):c("",!0)]),t("div",J,[a(u,{for:"category_id",value:"Category"}),p(t("select",{id:"category_id","onUpdate:modelValue":o[3]||(o[3]=r=>e(s).category_id=r),class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50",autofocus:""},[(l(!0),d(f,null,w(m.categories,r=>(l(),d("option",{value:r.id},[t("p",null,n(r.name),1)],8,K))),256))],512),[[b,e(s).category_id]]),e(s).errors.category_id?(l(),d("span",P,n(e(s).errors.category_id),1)):c("",!0)]),t("div",Q,[a(u,{for:"thumbnail",value:"Thumbnail"}),a(_,{id:"thumbnail",type:"file",class:"mt-1 block w-full rounded-none shadow-none",name:"thumbnail",onChange:g.upload,onInput:o[4]||(o[4]=r=>e(s).thumbnail=r.target.files[0]),multiple:""},null,8,["onChange"]),t("img",{src:g.previewimage==null?"../../"+e(s).thumbnail:g.previewimage,alt:"",class:"w-30 mt-4 rounded-md"},null,8,W),e(s).errors.thumbnail?(l(),d("span",X,n(e(s).errors.thumbnail),1)):c("",!0)])])]),Y],40,O)])])])])],64))}});export{oe as default};
>>>>>>>> 194ef19a618395a2d7ba3951227ad70577c442cb:public/build/assets/Edit-fe692991.js
=======
import{u as y,c as d,a,b as e,d as t,w as v,e as k,t as n,f as c,g as p,v as b,F as f,r as w,o as l,H as x,h as N,L as V}from"./app-951b8744.js";import{_ as u}from"./InputLabel-a43e8c5e.js";import{_}from"./TextInput-8396224a.js";import{_ as S}from"./Ckeditor-080bec74.js";import{r as U}from"./ChevronLeftIcon-1e460b9d.js";const j={class:"py-5"},B={class:"mx-auto sm:px-6 lg:px-8"},C={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},L={class:"p-6 bg-white"},D={className:"flex items-center justify-between mb-6"},F={class:"flex justify-between items-center"},O=["onSubmit"],T={className:"grid grid-cols-4 gap-4"},$={className:"col-span-3"},A={class:"mb-4"},E={key:0,className:"text-red-600"},H={className:"mb-4"},M={key:0,className:"text-red-600"},R={className:"mb-4"},I=t("option",{value:"draft",selected:""}," Draft ",-1),q=t("option",{value:"show"},"Show",-1),z=[I,q],G={key:0,className:"text-red-600"},J={className:"mb-4"},K=["value"],P={key:0,className:"text-red-600"},Q={className:"mb-4"},W=["src"],X={key:0,className:"text-red-600"},Y=t("div",{className:"mt-4"},[t("button",{type:"submit",className:"inline-flex items-center px-4 py-2 bg-primary dark:bg-primary border border-transparent rounded-md font-semibold text-xs text-white dark:text-white uppercase tracking-widest hover:bg-primary/80 dark:hover:bg-primary/90 focus:bg-primary/80 dark:focus:bg-primary/80 active:bg-primary dark:active:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-primary transition ease-in-out duration-150 disabled:bg-primary/80"}," Save ")],-1),Z={props:["id"],data(){return{previewimage:null}},methods:{upload(m){let i=m.target.files[0];this.previewimage=URL.createObjectURL(i)}}},oe=Object.assign(Z,{__name:"Edit",props:{article:Object,categories:Array,thumbnail:String},setup(m){const i=m,s=y({id:i.article.id,title:i.article.title,category_id:i.article.category_id,body:i.article.body,status:i.article.status,thumbnail:i.article.thumbnail,_method:"put"}),h=()=>{s.post(route("article.update",i.article.id))};return(g,o)=>(l(),d(f,null,[a(e(x),{title:"Article"}),t("div",j,[t("div",B,[t("div",C,[t("div",L,[t("div",D,[t("div",F,[a(e(U),{class:"w-4 h-4"}),a(e(V),{href:g.route("article.index")},{default:v(()=>[N("Back")]),_:1},8,["href"])])]),t("form",{onSubmit:k(h,["prevent"]),enctype:"multipart/form-data"},[t("div",T,[t("div",$,[t("div",A,[a(u,{for:"title",value:"Title"}),a(_,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:e(s).title,"onUpdate:modelValue":o[0]||(o[0]=r=>e(s).title=r),autofocus:""},null,8,["modelValue"]),e(s).errors.title?(l(),d("span",E,n(e(s).errors.title),1)):c("",!0)]),t("div",H,[a(u,{for:"body",class:"mb-1",value:"Body"}),a(S,{id:"body",modelValue:e(s).body,"onUpdate:modelValue":o[1]||(o[1]=r=>e(s).body=r),autofocus:""},null,8,["modelValue"]),e(s).errors.body?(l(),d("span",M,n(e(s).errors.body),1)):c("",!0)])]),t("div",null,[t("div",R,[a(u,{for:"status",value:"Status"}),p(t("select",{id:"status","onUpdate:modelValue":o[2]||(o[2]=r=>e(s).status=r),class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50"},z,512),[[b,e(s).status]]),e(s).errors.status?(l(),d("span",G,n(e(s).errors.status),1)):c("",!0)]),t("div",J,[a(u,{for:"category_id",value:"Category"}),p(t("select",{id:"category_id","onUpdate:modelValue":o[3]||(o[3]=r=>e(s).category_id=r),class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50",autofocus:""},[(l(!0),d(f,null,w(m.categories,r=>(l(),d("option",{value:r.id},[t("p",null,n(r.name),1)],8,K))),256))],512),[[b,e(s).category_id]]),e(s).errors.category_id?(l(),d("span",P,n(e(s).errors.category_id),1)):c("",!0)]),t("div",Q,[a(u,{for:"thumbnail",value:"Thumbnail"}),a(_,{id:"thumbnail",type:"file",class:"mt-1 block w-full rounded-none shadow-none",name:"thumbnail",onChange:g.upload,onInput:o[4]||(o[4]=r=>e(s).thumbnail=r.target.files[0]),multiple:""},null,8,["onChange"]),t("img",{src:g.previewimage==null?"../../"+e(s).thumbnail:g.previewimage,alt:"",class:"w-30 mt-4 rounded-md"},null,8,W),e(s).errors.thumbnail?(l(),d("span",X,n(e(s).errors.thumbnail),1)):c("",!0)])])]),Y],40,O)])])])])],64))}});export{oe as default};
>>>>>>> Stashed changes
