import{C as I,l as S,D as b,E as j,c as g,a as r,b as d,w as c,F as k,o as i,H as V,d as s,g as m,z as h,h as B,t as o,y as w,r as P,G as D,I as U}from"./app-31bf2fcd.js";import{_ as E,a as N}from"./Breadcrumb-3cf1e645.js";import{_ as T}from"./TextInput-665afa2c.js";import{_ as A}from"./PrimaryButton-1cbbaef8.js";import{_ as F}from"./SelectInput-cc00832e.js";import{_ as x}from"./DangerButton-53b0bd49.js";import{_ as G}from"./Pagination-7989e888.js";import{T as $,a as _,P as H}from"./index-8a7bef87.js";import z from"./Create-831edba6.js";import L from"./Edit-09a0b0dc.js";import M from"./Delete-4d279248.js";import q from"./DeleteBulk-1c1ed524.js";import{_ as J}from"./Checkbox-419c811e.js";import{_ as K}from"./InfoButton-07febbfd.js";import"./open-closed-97173cec.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./InputError-900ba23a.js";import"./InputLabel-36e1725d.js";import"./SecondaryButton-03bbd897.js";const Q={class:"space-y-4"},R={class:"px-4 sm:px-0"},W={class:"rounded-lg overflow-hidden w-fit"},X={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},Y={class:"flex justify-between p-2"},Z={class:"flex space-x-2"},ee={class:"overflow-x-auto scrollbar-table"},se={class:"w-full"},te={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},ae={class:"dark:bg-gray-900/50 text-left"},le={class:"px-2 py-4 text-center"},re=s("th",{class:"px-2 py-4 text-center"},"#",-1),oe={class:"flex justify-between items-center"},ne={class:"flex justify-between items-center"},de=s("span",null,"Guard",-1),ie={class:"flex justify-between items-center"},pe={class:"flex justify-between items-center"},ce=s("th",{class:"px-2 py-4 sr-only"},"Action",-1),me={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},ue=["value"],fe={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},he={class:"whitespace-nowrap py-4 px-2 sm:py-3"},_e={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ye={class:"whitespace-nowrap py-4 px-2 sm:py-3"},be={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ge={class:"whitespace-nowrap py-4 px-2 sm:py-3"},we={class:"flex justify-center items-center"},ve={class:"rounded-md overflow-hidden"},ke={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},ze={__name:"Index",props:{title:String,filters:Object,permissions:Object,breadcrumbs:Object,perPage:Number},setup(u){const n=u,e=I({params:{search:n.filters.search,field:n.filters.field,order:n.filters.order,perPage:n.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,permission:null,dataSet:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}]}),f=l=>{e.params.field=l,e.params.order=e.params.order==="asc"?"desc":"asc"};S(()=>b._.cloneDeep(e.params),b.debounce(()=>{let l=b.pickBy(e.params);j.Inertia.get(route("permission.index"),l,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const C=l=>{var t;l.target.checked===!1?e.selectedId=[]:(t=n.permissions)==null||t.data.forEach(p=>{e.selectedId.push(p.id)})},O=()=>{var l;((l=n.permissions)==null?void 0:l.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1};return(l,t)=>{const p=U("tooltip");return i(),g(k,null,[r(d(V),{title:n.title},null,8,["title"]),r(E,null,{default:c(()=>[r(N,{title:u.title,breadcrumbs:u.breadcrumbs},null,8,["title","breadcrumbs"]),s("div",Q,[s("div",R,[s("div",W,[m(r(A,{class:"rounded-none",onClick:t[0]||(t[0]=a=>e.createOpen=!0)},{default:c(()=>[B(o(l.lang().button.add),1)]),_:1},512),[[h,l.can(["create permission"])]]),r(z,{show:e.createOpen,onClose:t[1]||(t[1]=a=>e.createOpen=!1)},null,8,["show"]),r(L,{show:e.editOpen,onClose:t[2]||(t[2]=a=>e.editOpen=!1),permission:e.permission},null,8,["show","permission"]),r(M,{show:e.deleteOpen,onClose:t[3]||(t[3]=a=>e.deleteOpen=!1),permission:e.permission},null,8,["show","permission"]),r(q,{show:e.deleteBulkOpen,onClose:t[4]||(t[4]=a=>(e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[])),selectedId:e.selectedId},null,8,["show","selectedId"])])]),s("div",X,[s("div",Y,[s("div",Z,[r(F,{modelValue:e.params.perPage,"onUpdate:modelValue":t[5]||(t[5]=a=>e.params.perPage=a),dataSet:e.dataSet},null,8,["modelValue","dataSet"]),m((i(),w(x,{onClick:t[6]||(t[6]=a=>e.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:c(()=>[r(d($),{class:"w-5 h-5"})]),_:1})),[[h,e.selectedId.length!=0&&l.can(["delete permission"])],[p,l.lang().tooltip.delete_selected]])]),r(T,{modelValue:e.params.search,"onUpdate:modelValue":t[7]||(t[7]=a=>e.params.search=a),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:l.lang().placeholder.search},null,8,["modelValue","placeholder"])]),s("div",ee,[s("table",se,[s("thead",te,[s("tr",ae,[s("th",le,[r(J,{checked:e.multipleSelect,"onUpdate:checked":t[8]||(t[8]=a=>e.multipleSelect=a),onChange:C},null,8,["checked"])]),re,s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[9]||(t[9]=a=>f("name"))},[s("div",oe,[s("span",null,o(l.lang().label.name),1),r(d(_),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[10]||(t[10]=a=>f("guard"))},[s("div",ne,[de,r(d(_),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[11]||(t[11]=a=>f("created_at"))},[s("div",ie,[s("span",null,o(l.lang().label.created),1),r(d(_),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[12]||(t[12]=a=>f("updated_at"))},[s("div",pe,[s("span",null,o(l.lang().label.updated),1),r(d(_),{class:"w-4 h-4"})])]),ce])]),s("tbody",null,[(i(!0),g(k,null,P(u.permissions.data,(a,v)=>(i(),g("tr",{key:v,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[s("td",me,[m(s("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",onChange:O,value:a.id,"onUpdate:modelValue":t[13]||(t[13]=y=>e.selectedId=y)},null,40,ue),[[D,e.selectedId]])]),s("td",fe,o(++v),1),s("td",he,o(a.name),1),s("td",_e,o(a.guard_name),1),s("td",ye,o(a.created_at),1),s("td",be,o(a.updated_at),1),s("td",ge,[s("div",we,[s("div",ve,[m((i(),w(K,{type:"button",onClick:y=>(e.editOpen=!0,e.permission=a),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[r(d(H),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[h,l.can(["update permission"])],[p,l.lang().tooltip.edit]]),m((i(),w(x,{type:"button",onClick:y=>(e.deleteOpen=!0,e.permission=a),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[r(d($),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[h,l.can(["delete permission"])],[p,l.lang().tooltip.delete]])])])])]))),128))])])]),s("div",ke,[r(G,{links:n.permissions,filters:e.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{ze as default};
