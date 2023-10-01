import{u as y,c as d,a as r,b as e,d as t,w as v,e as k,t as n,f as c,g as p,v as b,F as f,r as w,o as l,H as x,h as N,L as V}from"./app-16ecd9e4.js";import{_ as u}from"./InputLabel-7d84f288.js";import{_}from"./TextInput-b0bc02ab.js";import{_ as S}from"./Ckeditor-899fcd73.js";import{C}from"./index-190b2432.js";import"./Ckeditor.vue_vue_type_style_index_0_lang-7b4a5422.js";const L={class:"py-5"},U={class:"mx-auto sm:px-6 lg:px-8"},j={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},B={class:"p-6 bg-white"},D={className:"flex items-center justify-between mb-6"},F={class:"flex justify-between items-center"},O=["onSubmit"],T={className:"grid grid-cols-4 gap-4"},$={className:"col-span-3"},A={class:"mb-4"},E={key:0,className:"text-red-600"},H={className:"mb-4"},I={key:0,className:"text-red-600"},M={className:"mb-4"},R=t("option",{value:"draft",selected:""},"Draft",-1),q=t("option",{value:"show"},"Show",-1),z=[R,q],G={key:0,className:"text-red-600"},J={className:"mb-4"},K=["value"],P={key:0,className:"text-red-600"},Q={className:"mb-4"},W=["src"],X={key:0,className:"text-red-600"},Y=t("div",{className:"mt-4"},[t("button",{type:"submit",className:"inline-flex items-center px-4 py-2 bg-primary dark:bg-primary border border-transparent rounded-md font-semibold text-xs text-white dark:text-white uppercase tracking-widest hover:bg-primary/80 dark:hover:bg-primary/90 focus:bg-primary/80 dark:focus:bg-primary/80 active:bg-primary dark:active:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-primary transition ease-in-out duration-150 disabled:bg-primary/80"}," Save ")],-1),Z={props:["id"],data(){return{previewimage:null}},methods:{upload(m){let i=m.target.files[0];this.previewimage=URL.createObjectURL(i)}}},ie=Object.assign(Z,{__name:"Edit",props:{article:Object,categories:Array,thumbnail:String},setup(m){const i=m,s=y({id:i.article.id,title:i.article.title,category_id:i.article.category_id,body:i.article.body,status:i.article.status,thumbnail:i.article.thumbnail,_method:"put"}),h=()=>{s.post(route("article.update",i.article.id))};return(g,a)=>(l(),d(f,null,[r(e(x),{title:"Article"}),t("div",L,[t("div",U,[t("div",j,[t("div",B,[t("div",D,[t("div",F,[r(e(C),{class:"w-4 h-4"}),r(e(V),{href:g.route("article.index")},{default:v(()=>[N("Back")]),_:1},8,["href"])])]),t("form",{onSubmit:k(h,["prevent"]),enctype:"multipart/form-data"},[t("div",T,[t("div",$,[t("div",A,[r(u,{for:"title",value:"Title"}),r(_,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:e(s).title,"onUpdate:modelValue":a[0]||(a[0]=o=>e(s).title=o),autofocus:""},null,8,["modelValue"]),e(s).errors.title?(l(),d("span",E,n(e(s).errors.title),1)):c("",!0)]),t("div",H,[r(u,{for:"body",class:"mb-1",value:"Body"}),r(S,{id:"body",modelValue:e(s).body,"onUpdate:modelValue":a[1]||(a[1]=o=>e(s).body=o),autofocus:""},null,8,["modelValue"]),e(s).errors.body?(l(),d("span",I,n(e(s).errors.body),1)):c("",!0)])]),t("div",null,[t("div",M,[r(u,{for:"status",value:"Status"}),p(t("select",{id:"status","onUpdate:modelValue":a[2]||(a[2]=o=>e(s).status=o),class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50"},z,512),[[b,e(s).status]]),e(s).errors.status?(l(),d("span",G,n(e(s).errors.status),1)):c("",!0)]),t("div",J,[r(u,{for:"category_id",value:"Category"}),p(t("select",{id:"category_id","onUpdate:modelValue":a[3]||(a[3]=o=>e(s).category_id=o),class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50",autofocus:""},[(l(!0),d(f,null,w(m.categories,o=>(l(),d("option",{value:o.id,key:o.id},[t("p",null,n(o.name),1)],8,K))),128))],512),[[b,e(s).category_id]]),e(s).errors.category_id?(l(),d("span",P,n(e(s).errors.category_id),1)):c("",!0)]),t("div",Q,[r(u,{for:"thumbnail",value:"Thumbnail"}),r(_,{id:"thumbnail",type:"file",class:"mt-1 block w-full rounded-none shadow-none",name:"thumbnail",onChange:g.upload,onInput:a[4]||(a[4]=o=>e(s).thumbnail=o.target.files[0]),multiple:""},null,8,["onChange"]),t("img",{src:g.previewimage==null?"../../"+e(s).thumbnail:g.previewimage,alt:"",class:"w-30 mt-4 rounded-md"},null,8,W),e(s).errors.thumbnail?(l(),d("span",X,n(e(s).errors.thumbnail),1)):c("",!0)])])]),Y],40,O)])])])])],64))}});export{ie as default};
