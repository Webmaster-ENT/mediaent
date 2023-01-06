import{G as I,D as j,J as g,K as V,c as m,b as o,d,w as f,F as x,o as i,H as B,a as s,h as c,p as y,e as w,t as r,s as v,i as D,M as N,N as P}from"./app-655895f6.js";import{_ as U}from"./AuthenticatedLayout-8d581d8e.js";import{_ as E}from"./Breadcrumb-7249469f.js";import{_ as A}from"./TextInput-ed5d16c6.js";import{_ as F}from"./PrimaryButton-990bcccf.js";import{r as $,a as b,_ as G,b as H,c as M}from"./Pagination-a56eb3a1.js";import{_ as J}from"./SelectInput-456ca768.js";import{_ as O}from"./DangerButton-7605e33a.js";import K from"./Create-b41045e4.js";import L from"./Edit-19b53ed7.js";import T from"./Delete-ab98af30.js";import q from"./DeleteBulk-cf05753b.js";import{_ as z}from"./Checkbox-169b0d7f.js";import Q from"./Permission-7d69c668.js";import"./ApplicationLogo-abd9c064.js";import"./InputError-ac89e9e1.js";import"./InputLabel-4d46fbf2.js";import"./SecondaryButton-cbcc45b9.js";const R={class:"space-y-4"},W={class:"px-4 sm:px-0"},X={class:"rounded-lg overflow-hidden w-fit"},Y={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},Z={class:"flex justify-between p-2"},ee={class:"flex space-x-2"},se={class:"overflow-x-auto scrollbar-table"},te={class:"w-full"},le={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},ae={class:"dark:bg-gray-900/50 text-left"},oe={class:"px-2 py-4 text-center"},re=s("th",{class:"px-2 py-4 text-center"},"#",-1),ne={class:"flex justify-between items-center"},ie={class:"flex justify-between items-center"},de=s("span",null,"Guard",-1),pe={class:"px-2 py-4"},ce={class:"flex justify-between items-center"},me={class:"flex justify-between items-center"},ue=s("th",{class:"px-2 py-4 sr-only"},"Action",-1),fe={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},he=["value"],_e={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},ye={class:"whitespace-nowrap py-4 px-2 sm:py-3"},be={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ge=["onClick"],we=["onClick"],ve={key:2,class:"whitespace-nowrap py-4 px-2 sm:py-3"},ke={class:"whitespace-nowrap py-4 px-2 sm:py-3"},xe={class:"whitespace-nowrap py-4 px-2 sm:py-3"},$e={class:"whitespace-nowrap py-4 px-2 sm:py-3"},Oe={class:"flex justify-center items-center"},Ce={class:"rounded-md overflow-hidden"},Se={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},qe={__name:"Index",props:{title:String,filters:Object,roles:Object,permissions:Object,breadcrumbs:Object,perPage:Number},setup(h){const n=h,e=I({params:{search:n.filters.search,field:n.filters.field,order:n.filters.order,perPage:n.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,permissionOpen:!1,role:null,dataSet:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}]}),_=a=>{e.params.field=a,e.params.order=e.params.order==="asc"?"desc":"asc"};j(()=>g._.cloneDeep(e.params),g.debounce(()=>{let a=g.pickBy(e.params);V.Inertia.get(route("role.index"),a,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const C=a=>{var t;a.target.checked===!1?e.selectedId=[]:(t=n.roles)==null||t.data.forEach(p=>{e.selectedId.push(p.id)})},S=()=>{var a;((a=n.roles)==null?void 0:a.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1};return(a,t)=>{const p=N("tooltip");return i(),m(x,null,[o(d(B),{title:n.title},null,8,["title"]),o(U,null,{default:f(()=>[o(E,{title:h.title,breadcrumbs:h.breadcrumbs},null,8,["title","breadcrumbs"]),s("div",R,[s("div",W,[s("div",X,[c(o(F,{class:"rounded-none",onClick:t[0]||(t[0]=l=>e.createOpen=!0)},{default:f(()=>[w(r(a.lang().button.add),1)]),_:1},512),[[y,a.can(["create role"])]]),o(K,{show:e.createOpen,onClose:t[1]||(t[1]=l=>e.createOpen=!1),permissions:n.permissions},null,8,["show","permissions"]),o(L,{show:e.editOpen,onClose:t[2]||(t[2]=l=>e.editOpen=!1),role:e.role,permissions:n.permissions},null,8,["show","role","permissions"]),o(T,{show:e.deleteOpen,onClose:t[3]||(t[3]=l=>e.deleteOpen=!1),role:e.role},null,8,["show","role"]),o(q,{show:e.deleteBulkOpen,onClose:t[4]||(t[4]=l=>(e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[])),selectedId:e.selectedId},null,8,["show","selectedId"]),o(Q,{show:e.permissionOpen,onClose:t[5]||(t[5]=l=>e.permissionOpen=!1),role:e.role},null,8,["show","role"])])]),s("div",Y,[s("div",Z,[s("div",ee,[o(J,{modelValue:e.params.perPage,"onUpdate:modelValue":t[6]||(t[6]=l=>e.params.perPage=l),dataSet:e.dataSet},null,8,["modelValue","dataSet"]),c((i(),v(O,{onClick:t[7]||(t[7]=l=>e.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:f(()=>[o(d($),{class:"w-5 h-5"})]),_:1})),[[y,e.selectedId.length!=0&&a.can(["delete role"])],[p,a.lang().tooltip.delete_selected]])]),o(A,{modelValue:e.params.search,"onUpdate:modelValue":t[8]||(t[8]=l=>e.params.search=l),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:a.lang().placeholder.search},null,8,["modelValue","placeholder"])]),s("div",se,[s("table",te,[s("thead",le,[s("tr",ae,[s("th",oe,[o(z,{checked:e.multipleSelect,"onUpdate:checked":t[9]||(t[9]=l=>e.multipleSelect=l),onChange:C},null,8,["checked"])]),re,s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[10]||(t[10]=l=>_("name"))},[s("div",ne,[s("span",null,r(a.lang().label.name),1),o(d(b),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[11]||(t[11]=l=>_("email"))},[s("div",ie,[de,o(d(b),{class:"w-4 h-4"})])]),s("th",pe,r(a.lang().label.permission),1),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[12]||(t[12]=l=>_("created_at"))},[s("div",ce,[s("span",null,r(a.lang().label.created),1),o(d(b),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[13]||(t[13]=l=>_("updated_at"))},[s("div",me,[s("span",null,r(a.lang().label.updated),1),o(d(b),{class:"w-4 h-4"})])]),ue])]),s("tbody",null,[(i(!0),m(x,null,D(h.roles.data,(l,k)=>(i(),m("tr",{key:k,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[s("td",fe,[c(s("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",onChange:S,value:l.id,"onUpdate:modelValue":t[14]||(t[14]=u=>e.selectedId=u)},null,40,he),[[P,e.selectedId]])]),s("td",_e,r(++k),1),s("td",ye,r(l.name),1),s("td",be,r(l.guard_name),1),l.permissions.length==n.permissions.length?c((i(),m("td",{key:0,onClick:u=>(e.permissionOpen=!0,e.role=l),class:"whitespace-nowrap py-4 px-2 sm:py-3 cursor-pointer text-blue-600 dark:text-blue-400 font-bold underline"},[w(r(a.lang().label.all_permission),1)],8,ge)),[[p,a.lang().tooltip.detail]]):l.permissions.length!=0?c((i(),m("td",{key:1,onClick:u=>(e.permissionOpen=!0,e.role=l),class:"whitespace-nowrap py-4 px-2 sm:py-3 cursor-pointer text-blue-600 dark:text-blue-400 font-bold underline"},[w(r(l.permissions.length)+" "+r(a.lang().label.permission),1)],8,we)),[[p,a.lang().tooltip.detail]]):(i(),m("td",ve,r(a.lang().label.no_permission),1)),s("td",ke,r(l.created_at),1),s("td",xe,r(l.updated_at),1),s("td",$e,[s("div",Oe,[s("div",Ce,[c((i(),v(H,{type:"button",onClick:u=>(e.editOpen=!0,e.role=l),class:"px-2 py-1.5 rounded-none"},{default:f(()=>[o(d(M),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[y,a.can(["update role"])],[p,a.lang().tooltip.edit]]),c((i(),v(O,{type:"button",onClick:u=>(e.deleteOpen=!0,e.role=l),class:"px-2 py-1.5 rounded-none"},{default:f(()=>[o(d($),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[y,a.can(["delete role"])],[p,a.lang().tooltip.delete]])])])])]))),128))])])]),s("div",Se,[o(G,{links:n.roles,filters:e.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{qe as default};
