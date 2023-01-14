import{D as S,m as I,E as b,G as j,c as g,a as r,b as d,w as c,F as k,o as i,H as V,d as s,h as m,A as _,e as B,t as o,z as w,i as D,I as P,J as E}from"./app-ce84355e.js";import{_ as N}from"./AuthenticatedLayout-d7290906.js";import{_ as U}from"./Breadcrumb-1d6b3d70.js";import{_ as A}from"./TextInput-4ebedda5.js";import{_ as F}from"./PrimaryButton-0c7deb70.js";import{_ as G}from"./SelectInput-3b6ba499.js";import{_ as x}from"./DangerButton-1eb93eb6.js";import{r as $,a as h,_ as H,b as z}from"./Pagination-198add1f.js";import J from"./Create-bce35b65.js";import L from"./Edit-d355eb62.js";import M from"./Delete-9469cc6f.js";import T from"./DeleteBulk-7f853260.js";import{_ as q}from"./Checkbox-d5636cf2.js";import{_ as K}from"./InfoButton-092be7c5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./InputError-e6b63ba6.js";import"./InputLabel-4859fe7d.js";import"./SecondaryButton-4e32faa2.js";const Q={class:"space-y-4"},R={class:"px-4 sm:px-0"},W={class:"rounded-lg overflow-hidden w-fit"},X={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},Y={class:"flex justify-between p-2"},Z={class:"flex space-x-2"},ee={class:"overflow-x-auto scrollbar-table"},se={class:"w-full"},te={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},ae={class:"dark:bg-gray-900/50 text-left"},le={class:"px-2 py-4 text-center"},re=s("th",{class:"px-2 py-4 text-center"},"#",-1),oe={class:"flex justify-between items-center"},ne={class:"flex justify-between items-center"},de=s("span",null,"Guard",-1),ie={class:"flex justify-between items-center"},pe={class:"flex justify-between items-center"},ce=s("th",{class:"px-2 py-4 sr-only"},"Action",-1),me={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},ue=["value"],fe={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},_e={class:"whitespace-nowrap py-4 px-2 sm:py-3"},he={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ye={class:"whitespace-nowrap py-4 px-2 sm:py-3"},be={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ge={class:"whitespace-nowrap py-4 px-2 sm:py-3"},we={class:"flex justify-center items-center"},ve={class:"rounded-md overflow-hidden"},ke={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},ze={__name:"Index",props:{title:String,filters:Object,permissions:Object,breadcrumbs:Object,perPage:Number},setup(u){const n=u,e=S({params:{search:n.filters.search,field:n.filters.field,order:n.filters.order,perPage:n.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,permission:null,dataSet:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}]}),f=l=>{e.params.field=l,e.params.order=e.params.order==="asc"?"desc":"asc"};I(()=>b._.cloneDeep(e.params),b.debounce(()=>{let l=b.pickBy(e.params);j.Inertia.get(route("permission.index"),l,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const O=l=>{var t;l.target.checked===!1?e.selectedId=[]:(t=n.permissions)==null||t.data.forEach(p=>{e.selectedId.push(p.id)})},C=()=>{var l;((l=n.permissions)==null?void 0:l.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1};return(l,t)=>{const p=P("tooltip");return i(),g(k,null,[r(d(V),{title:n.title},null,8,["title"]),r(N,null,{default:c(()=>[r(U,{title:u.title,breadcrumbs:u.breadcrumbs},null,8,["title","breadcrumbs"]),s("div",Q,[s("div",R,[s("div",W,[m(r(F,{class:"rounded-none",onClick:t[0]||(t[0]=a=>e.createOpen=!0)},{default:c(()=>[B(o(l.lang().button.add),1)]),_:1},512),[[_,l.can(["create permission"])]]),r(J,{show:e.createOpen,onClose:t[1]||(t[1]=a=>e.createOpen=!1)},null,8,["show"]),r(L,{show:e.editOpen,onClose:t[2]||(t[2]=a=>e.editOpen=!1),permission:e.permission},null,8,["show","permission"]),r(M,{show:e.deleteOpen,onClose:t[3]||(t[3]=a=>e.deleteOpen=!1),permission:e.permission},null,8,["show","permission"]),r(T,{show:e.deleteBulkOpen,onClose:t[4]||(t[4]=a=>(e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[])),selectedId:e.selectedId},null,8,["show","selectedId"])])]),s("div",X,[s("div",Y,[s("div",Z,[r(G,{modelValue:e.params.perPage,"onUpdate:modelValue":t[5]||(t[5]=a=>e.params.perPage=a),dataSet:e.dataSet},null,8,["modelValue","dataSet"]),m((i(),w(x,{onClick:t[6]||(t[6]=a=>e.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:c(()=>[r(d($),{class:"w-5 h-5"})]),_:1})),[[_,e.selectedId.length!=0&&l.can(["delete permission"])],[p,l.lang().tooltip.delete_selected]])]),r(A,{modelValue:e.params.search,"onUpdate:modelValue":t[7]||(t[7]=a=>e.params.search=a),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:l.lang().placeholder.search},null,8,["modelValue","placeholder"])]),s("div",ee,[s("table",se,[s("thead",te,[s("tr",ae,[s("th",le,[r(q,{checked:e.multipleSelect,"onUpdate:checked":t[8]||(t[8]=a=>e.multipleSelect=a),onChange:O},null,8,["checked"])]),re,s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[9]||(t[9]=a=>f("name"))},[s("div",oe,[s("span",null,o(l.lang().label.name),1),r(d(h),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[10]||(t[10]=a=>f("guard"))},[s("div",ne,[de,r(d(h),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[11]||(t[11]=a=>f("created_at"))},[s("div",ie,[s("span",null,o(l.lang().label.created),1),r(d(h),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[12]||(t[12]=a=>f("updated_at"))},[s("div",pe,[s("span",null,o(l.lang().label.updated),1),r(d(h),{class:"w-4 h-4"})])]),ce])]),s("tbody",null,[(i(!0),g(k,null,D(u.permissions.data,(a,v)=>(i(),g("tr",{key:v,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[s("td",me,[m(s("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",onChange:C,value:a.id,"onUpdate:modelValue":t[13]||(t[13]=y=>e.selectedId=y)},null,40,ue),[[E,e.selectedId]])]),s("td",fe,o(++v),1),s("td",_e,o(a.name),1),s("td",he,o(a.guard_name),1),s("td",ye,o(a.created_at),1),s("td",be,o(a.updated_at),1),s("td",ge,[s("div",we,[s("div",ve,[m((i(),w(K,{type:"button",onClick:y=>(e.editOpen=!0,e.permission=a),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[r(d(z),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[_,l.can(["update permission"])],[p,l.lang().tooltip.edit]]),m((i(),w(x,{type:"button",onClick:y=>(e.deleteOpen=!0,e.permission=a),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[r(d($),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[_,l.can(["delete permission"])],[p,l.lang().tooltip.delete]])])])])]))),128))])])]),s("div",ke,[r(H,{links:n.permissions,filters:e.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{ze as default};
