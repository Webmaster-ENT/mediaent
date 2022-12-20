import{O as j,z as V,Q as b,R as B,g as m,a as r,b as n,w as u,F as g,o as d,H as D,d as s,h as p,v as y,e as k,c as v,D as N,r as P,C as U,t as c}from"./app-ca577fa4.js";import{_ as A,a as E}from"./AuthenticatedLayout-2708d8be.js";import{a as F}from"./TextInput-56afc9df.js";import{_ as $}from"./PrimaryButton-4e0ddc79.js";import{_ as H}from"./SelectInput-ed23fbec.js";import{_ as O}from"./DangerButton-1fef13be.js";import{r as C,a as w,_ as z,b as G}from"./Pagination-27f50247.js";import L from"./Create-d66a2ac5.js";import M from"./Edit-5c03208b.js";import Q from"./Delete-3aec0b14.js";import R from"./DeleteBulk-d6dc78ef.js";import{_ as T}from"./Checkbox-43c22e56.js";import q from"./Permission-177a8e54.js";import"./index-b2f45f9f.js";import"./SecondaryButton-47b38e23.js";const J={class:"space-y-4"},K={class:"px-4 sm:px-0"},W={class:"rounded-lg overflow-hidden w-fit"},X={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},Y={class:"flex justify-between p-2"},Z={class:"flex space-x-2"},ee={class:"overflow-x-auto scrollbar-table"},se={class:"w-full"},te={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},le={class:"dark:bg-gray-900/50 text-left"},re={class:"px-2 py-4 text-center"},oe=s("th",{class:"px-2 py-4 text-center"},"#",-1),ae={class:"flex justify-between items-center"},ne=s("span",null,"Name",-1),de={class:"flex justify-between items-center"},ie=s("span",null,"Guard",-1),pe=s("th",{class:"px-2 py-4"},"Permission",-1),ce={class:"flex justify-between items-center"},me=s("span",null,"Created",-1),ue={class:"flex justify-between items-center"},fe=s("span",null,"Updated",-1),_e=s("th",{class:"px-2 py-4 sr-only"},"Action",-1),he={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},ye=["value"],we={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},be={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ve={class:"whitespace-nowrap py-4 px-2 sm:py-3"},xe=["onClick"],ge={key:1,class:"whitespace-nowrap py-4 px-2 sm:py-3"},ke={class:"whitespace-nowrap py-4 px-2 sm:py-3"},$e={class:"whitespace-nowrap py-4 px-2 sm:py-3"},Oe={class:"whitespace-nowrap py-4 px-2 sm:py-3"},Ce={class:"flex justify-center items-center"},Se={class:"rounded-md overflow-hidden"},Ie={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},Qe={__name:"Index",props:{title:String,filters:Object,roles:Object,permissions:Object,breadcrumbs:Object,perPage:Number},setup(f){const a=f,e=j({params:{search:a.filters.search,field:a.filters.field,order:a.filters.order,perPage:a.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,permissionOpen:!1,role:null,dataSet:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}]}),_=o=>{e.params.field=o,e.params.order=e.params.order==="asc"?"desc":"asc"};V(()=>b.exports._.cloneDeep(e.params),b.exports.debounce(()=>{let o=b.exports.pickBy(e.params);B.Inertia.get(route("role.index"),o,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const S=o=>{var t;o.target.checked===!1?e.selectedId=[]:(t=a.roles)==null||t.data.forEach(i=>{e.selectedId.push(i.id)})},I=()=>{var o;((o=a.roles)==null?void 0:o.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1};return(o,t)=>{const i=P("tooltip");return d(),m(g,null,[r(n(D),{title:a.title},null,8,["title"]),r(A,null,{default:u(()=>[r(E,{title:f.title,breadcrumbs:f.breadcrumbs},null,8,["title","breadcrumbs"]),s("div",J,[s("div",K,[s("div",W,[p(r($,{class:"rounded-none",onClick:t[0]||(t[0]=l=>e.createOpen=!0)},{default:u(()=>[k(" Add ")]),_:1},512),[[y,o.can(["create role"])]]),r(L,{show:e.createOpen,onClose:t[1]||(t[1]=l=>e.createOpen=!1),permissions:a.permissions},null,8,["show","permissions"]),r(M,{show:e.editOpen,onClose:t[2]||(t[2]=l=>e.editOpen=!1),role:e.role,permissions:a.permissions},null,8,["show","role","permissions"]),r(Q,{show:e.deleteOpen,onClose:t[3]||(t[3]=l=>e.deleteOpen=!1),role:e.role},null,8,["show","role"]),r(R,{show:e.deleteBulkOpen,onClose:t[4]||(t[4]=l=>(e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[])),selectedId:e.selectedId},null,8,["show","selectedId"]),r(q,{show:e.permissionOpen,onClose:t[5]||(t[5]=l=>e.permissionOpen=!1),role:e.role},null,8,["show","role"])])]),s("div",X,[s("div",Y,[s("div",Z,[r(H,{modelValue:e.params.perPage,"onUpdate:modelValue":t[6]||(t[6]=l=>e.params.perPage=l),dataSet:e.dataSet},null,8,["modelValue","dataSet"]),p((d(),v(O,{onClick:t[7]||(t[7]=l=>e.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:u(()=>[r(n(C),{class:"w-5 h-5"})]),_:1})),[[y,e.selectedId.length!=0&&o.can(["delete role"])],[i,"Delete All Selected"]])]),r(F,{modelValue:e.params.search,"onUpdate:modelValue":t[8]||(t[8]=l=>e.params.search=l),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:"Search..."},null,8,["modelValue"])]),s("div",ee,[s("table",se,[s("thead",te,[s("tr",le,[s("th",re,[r(T,{checked:e.multipleSelect,"onUpdate:checked":t[9]||(t[9]=l=>e.multipleSelect=l),onChange:S},null,8,["checked"])]),oe,s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[10]||(t[10]=l=>_("name"))},[s("div",ae,[ne,r(n(w),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[11]||(t[11]=l=>_("email"))},[s("div",de,[ie,r(n(w),{class:"w-4 h-4"})])]),pe,s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[12]||(t[12]=l=>_("created_at"))},[s("div",ce,[me,r(n(w),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[13]||(t[13]=l=>_("updated_at"))},[s("div",ue,[fe,r(n(w),{class:"w-4 h-4"})])]),_e])]),s("tbody",null,[(d(!0),m(g,null,N(f.roles.data,(l,x)=>(d(),m("tr",{key:x,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[s("td",he,[p(s("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",onChange:I,value:l.id,"onUpdate:modelValue":t[14]||(t[14]=h=>e.selectedId=h)},null,40,ye),[[U,e.selectedId]])]),s("td",we,c(++x),1),s("td",be,c(l.name),1),s("td",ve,c(l.guard_name),1),l.permissions.length!=0?p((d(),m("td",{key:0,onClick:h=>(e.permissionOpen=!0,e.role=l),class:"whitespace-nowrap py-4 px-2 sm:py-3 cursor-pointer text-blue-600 dark:text-blue-400 font-bold underline"},[k(c(l.permissions.length)+" permission",1)],8,xe)),[[i,"Click to details"]]):(d(),m("td",ge,"No permission")),s("td",ke,c(l.created_at),1),s("td",$e,c(l.updated_at),1),s("td",Oe,[s("div",Ce,[s("div",Se,[p((d(),v($,{type:"button",onClick:h=>(e.editOpen=!0,e.role=l),class:"px-2 py-1.5 rounded-none"},{default:u(()=>[r(n(G),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[y,o.can(["update role"])],[i,"Edit"]]),p((d(),v(O,{type:"button",onClick:h=>(e.deleteOpen=!0,e.role=l),class:"px-2 py-1.5 rounded-none"},{default:u(()=>[r(n(C),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[y,o.can(["delete role"])],[i,"Delete"]])])])])]))),128))])])]),s("div",Ie,[r(z,{links:a.roles,filters:e.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{Qe as default};