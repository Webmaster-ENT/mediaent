import{u as h,c as i,a as r,b as s,d as e,w as y,e as v,t as l,f as n,g,v as f,F as p,r as k,o as d,H as w,h as x,L as N}from"./app-ccd702ac.js";import{_ as u}from"./InputLabel-04654926.js";import{_}from"./TextInput-f91e671a.js";import{_ as V}from"./Ckeditor-4ba6c64d.js";import{C}from"./index-eb229a45.js";import"./Ckeditor.vue_vue_type_style_index_0_lang-583541cc.js";const S={class:"py-5"},L={class:"mx-auto sm:px-6 lg:px-8"},U={class:"bg-white overflow-hidden sm:rounded-lg"},j={class:"p-6 bg-white"},B={className:"flex items-center justify-between mb-6"},F={class:"flex justify-between items-center"},D=["onSubmit"],O={className:"grid grid-cols-4 gap-4"},T={className:"col-span-3"},$={class:"mb-4"},H={key:0,className:"text-red-600"},I={className:"mb-4"},M={key:0,className:"text-red-600"},R={className:"mb-4"},A=e("option",{value:"draft",selected:""},"Draft",-1),E=e("option",{value:"show"},"Show",-1),q=[A,E],z={key:0,className:"text-red-600"},G={className:"mb-4"},J=["value"],K={key:0,className:"text-red-600"},P={className:"mb-4"},Q=["src"],W={key:0,className:"text-red-600"},X=e("div",{className:"mt-4"},[e("button",{type:"submit",className:"inline-flex items-center px-4 py-2 bg-primary dark:bg-primary border border-transparent rounded-md font-semibold text-xs text-white dark:text-white uppercase tracking-widest hover:bg-primary/80 dark:hover:bg-primary/90 focus:bg-primary/80 dark:focus:bg-primary/80 active:bg-primary dark:active:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-primary transition ease-in-out duration-150 disabled:bg-primary/80"}," Save ")],-1),Y={props:["id"],data(){return{previewimage:null}},methods:{upload(c){let t=c.target.files[0];this.previewimage=URL.createObjectURL(t)}}},ae=Object.assign(Y,{__name:"Create",props:{categories:Object},setup(c){const t=h({title:"",body:"",status:"draft",thumbnail:null,category_id:null}),b=()=>{t.post(route("article.store"))};return(m,a)=>(d(),i(p,null,[r(s(w),{title:"Article"}),e("div",S,[e("div",L,[e("div",U,[e("div",j,[e("div",B,[e("div",F,[r(s(C),{class:"w-4 h-4"}),r(s(N),{href:m.route("article.index")},{default:y(()=>[x("Back")]),_:1},8,["href"])])]),e("form",{name:"createForm",onSubmit:v(b,["prevent"]),enctype:"multipart/form-data"},[e("div",O,[e("div",T,[e("div",$,[r(u,{for:"title",value:"Title"}),r(_,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:s(t).title,"onUpdate:modelValue":a[0]||(a[0]=o=>s(t).title=o),autofocus:""},null,8,["modelValue"]),s(t).errors.title?(d(),i("span",H,l(s(t).errors.title),1)):n("",!0)]),e("div",I,[r(u,{for:"body",value:"Body"}),r(V,{id:"body",modelValue:s(t).body,"onUpdate:modelValue":a[1]||(a[1]=o=>s(t).body=o),autofocus:""},null,8,["modelValue"]),s(t).errors.body?(d(),i("span",M,l(s(t).errors.body),1)):n("",!0)])]),e("div",null,[e("div",R,[r(u,{for:"status",value:"Status"}),g(e("select",{id:"status","onUpdate:modelValue":a[2]||(a[2]=o=>s(t).status=o),class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50"},q,512),[[f,s(t).status]]),s(t).errors.status?(d(),i("span",z,l(s(t).errors.status),1)):n("",!0)]),e("div",G,[r(u,{for:"category_id",value:"Category"}),g(e("select",{id:"category_id","onUpdate:modelValue":a[3]||(a[3]=o=>s(t).category_id=o),class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50",autofocus:""},[(d(!0),i(p,null,k(c.categories,o=>(d(),i("option",{value:o.id,key:o.id},[e("p",null,l(o.name),1)],8,J))),128))],512),[[f,s(t).category_id]]),s(t).errors.category_id?(d(),i("span",K,l(s(t).errors.category_id),1)):n("",!0)]),e("div",P,[r(u,{for:"thumbnail",value:"Thumbnail"}),r(_,{id:"thumbnail",type:"file",class:"mt-1 block w-full rounded-none shadow-none",name:"thumbnail",onChange:m.upload,onInput:a[4]||(a[4]=o=>s(t).thumbnail=o.target.files[0]),multiple:""},null,8,["onChange"]),e("img",{src:m.previewimage,alt:"",class:"w-30 mt-4 rounded-md"},null,8,Q),s(t).errors.thumbnail?(d(),i("span",W,l(s(t).errors.thumbnail),1)):n("",!0)])])]),X],40,D)])])])])],64))}});export{ae as default};
