import{C as S,l as j,D as g,E as V,c as m,a as o,b as d,w as f,F as x,o as i,H as B,d as s,g as c,z as y,h as w,t as r,y as v,r as P,G as D,I as U}from"./app-8521b5f5.js";import{_ as E,a as N}from"./Breadcrumb-02aa5735.js";import{_ as T}from"./TextInput-f4d5a70c.js";import{_ as A}from"./PrimaryButton-f193d88b.js";import{_ as F}from"./InfoButton-02ce1062.js";import{_ as G}from"./SelectInput-4d28b6d0.js";import{_ as $}from"./DangerButton-98f000a0.js";import{_ as H}from"./Pagination-23452d19.js";import{T as C,a as b,P as z}from"./index-b3b182e5.js";import L from"./Create-5ceee106.js";import M from"./Edit-6494e165.js";import q from"./Delete-c6ab9372.js";import J from"./DeleteBulk-2b39e62f.js";import{_ as K}from"./Checkbox-443efd07.js";import Q from"./Permission-bc2fa0b2.js";import"./open-closed-f7982a25.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./InputError-f52356e1.js";import"./InputLabel-7bb2fd7b.js";import"./SecondaryButton-7609af2d.js";const R={class:"space-y-4"},W={class:"px-4 sm:px-0"},X={class:"rounded-lg overflow-hidden w-fit"},Y={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},Z={class:"flex justify-between p-2"},ee={class:"flex space-x-2"},se={class:"overflow-x-auto scrollbar-table"},te={class:"w-full"},le={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},ae={class:"dark:bg-gray-900/50 text-left"},oe={class:"px-2 py-4 text-center"},re=s("th",{class:"px-2 py-4 text-center"},"#",-1),ne={class:"flex justify-between items-center"},ie={class:"flex justify-between items-center"},de=s("span",null,"Guard",-1),pe={class:"px-2 py-4"},ce={class:"flex justify-between items-center"},me={class:"flex justify-between items-center"},ue=s("th",{class:"px-2 py-4 sr-only"},"Action",-1),fe={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},he=["value"],_e={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},ye={class:"whitespace-nowrap py-4 px-2 sm:py-3"},be={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ge=["onClick"],we=["onClick"],ve={key:2,class:"whitespace-nowrap py-4 px-2 sm:py-3"},ke={class:"whitespace-nowrap py-4 px-2 sm:py-3"},xe={class:"whitespace-nowrap py-4 px-2 sm:py-3"},$e={class:"whitespace-nowrap py-4 px-2 sm:py-3"},Ce={class:"flex justify-center items-center"},Oe={class:"rounded-md overflow-hidden"},Ie={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},Qe={__name:"Index",props:{title:String,filters:Object,roles:Object,permissions:Object,breadcrumbs:Object,perPage:Number},setup(h){const n=h,e=S({params:{search:n.filters.search,field:n.filters.field,order:n.filters.order,perPage:n.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,permissionOpen:!1,role:null,dataSet:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}]}),_=a=>{e.params.field=a,e.params.order=e.params.order==="asc"?"desc":"asc"};j(()=>g._.cloneDeep(e.params),g.debounce(()=>{let a=g.pickBy(e.params);V.Inertia.get(route("role.index"),a,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const O=a=>{var t;a.target.checked===!1?e.selectedId=[]:(t=n.roles)==null||t.data.forEach(p=>{e.selectedId.push(p.id)})},I=()=>{var a;((a=n.roles)==null?void 0:a.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1};return(a,t)=>{const p=U("tooltip");return i(),m(x,null,[o(d(B),{title:n.title},null,8,["title"]),o(E,null,{default:f(()=>[o(N,{title:h.title,breadcrumbs:h.breadcrumbs},null,8,["title","breadcrumbs"]),s("div",R,[s("div",W,[s("div",X,[c(o(A,{class:"rounded-none",onClick:t[0]||(t[0]=l=>e.createOpen=!0)},{default:f(()=>[w(r(a.lang().button.add),1)]),_:1},512),[[y,a.can(["create role"])]]),o(L,{show:e.createOpen,onClose:t[1]||(t[1]=l=>e.createOpen=!1),permissions:n.permissions},null,8,["show","permissions"]),o(M,{show:e.editOpen,onClose:t[2]||(t[2]=l=>e.editOpen=!1),role:e.role,permissions:n.permissions},null,8,["show","role","permissions"]),o(q,{show:e.deleteOpen,onClose:t[3]||(t[3]=l=>e.deleteOpen=!1),role:e.role},null,8,["show","role"]),o(J,{show:e.deleteBulkOpen,onClose:t[4]||(t[4]=l=>(e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[])),selectedId:e.selectedId},null,8,["show","selectedId"]),o(Q,{show:e.permissionOpen,onClose:t[5]||(t[5]=l=>e.permissionOpen=!1),role:e.role},null,8,["show","role"])])]),s("div",Y,[s("div",Z,[s("div",ee,[o(G,{modelValue:e.params.perPage,"onUpdate:modelValue":t[6]||(t[6]=l=>e.params.perPage=l),dataSet:e.dataSet},null,8,["modelValue","dataSet"]),c((i(),v($,{onClick:t[7]||(t[7]=l=>e.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:f(()=>[o(d(C),{class:"w-5 h-5"})]),_:1})),[[y,e.selectedId.length!=0&&a.can(["delete role"])],[p,a.lang().tooltip.delete_selected]])]),o(T,{modelValue:e.params.search,"onUpdate:modelValue":t[8]||(t[8]=l=>e.params.search=l),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:a.lang().placeholder.search},null,8,["modelValue","placeholder"])]),s("div",se,[s("table",te,[s("thead",le,[s("tr",ae,[s("th",oe,[o(K,{checked:e.multipleSelect,"onUpdate:checked":t[9]||(t[9]=l=>e.multipleSelect=l),onChange:O},null,8,["checked"])]),re,s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[10]||(t[10]=l=>_("name"))},[s("div",ne,[s("span",null,r(a.lang().label.name),1),o(d(b),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[11]||(t[11]=l=>_("email"))},[s("div",ie,[de,o(d(b),{class:"w-4 h-4"})])]),s("th",pe,r(a.lang().label.permission),1),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[12]||(t[12]=l=>_("created_at"))},[s("div",ce,[s("span",null,r(a.lang().label.created),1),o(d(b),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[13]||(t[13]=l=>_("updated_at"))},[s("div",me,[s("span",null,r(a.lang().label.updated),1),o(d(b),{class:"w-4 h-4"})])]),ue])]),s("tbody",null,[(i(!0),m(x,null,P(h.roles.data,(l,k)=>(i(),m("tr",{key:k,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[s("td",fe,[c(s("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",onChange:I,value:l.id,"onUpdate:modelValue":t[14]||(t[14]=u=>e.selectedId=u)},null,40,he),[[D,e.selectedId]])]),s("td",_e,r(++k),1),s("td",ye,r(l.name),1),s("td",be,r(l.guard_name),1),l.permissions.length==n.permissions.length?c((i(),m("td",{key:0,onClick:u=>(e.permissionOpen=!0,e.role=l),class:"whitespace-nowrap py-4 px-2 sm:py-3 cursor-pointer text-blue-600 dark:text-blue-400 font-bold underline"},[w(r(a.lang().label.all_permission),1)],8,ge)),[[p,a.lang().tooltip.detail]]):l.permissions.length!=0?c((i(),m("td",{key:1,onClick:u=>(e.permissionOpen=!0,e.role=l),class:"whitespace-nowrap py-4 px-2 sm:py-3 cursor-pointer text-blue-600 dark:text-blue-400 font-bold underline"},[w(r(l.permissions.length)+" "+r(a.lang().label.permission),1)],8,we)),[[p,a.lang().tooltip.detail]]):(i(),m("td",ve,r(a.lang().label.no_permission),1)),s("td",ke,r(l.created_at),1),s("td",xe,r(l.updated_at),1),s("td",$e,[s("div",Ce,[s("div",Oe,[c((i(),v(F,{type:"button",onClick:u=>(e.editOpen=!0,e.role=l),class:"px-2 py-1.5 rounded-none"},{default:f(()=>[o(d(z),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[y,a.can(["update role"])],[p,a.lang().tooltip.edit]]),c((i(),v($,{type:"button",onClick:u=>(e.deleteOpen=!0,e.role=l),class:"px-2 py-1.5 rounded-none"},{default:f(()=>[o(d(C),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[y,a.can(["delete role"])],[p,a.lang().tooltip.delete]])])])])]))),128))])])]),s("div",Ie,[o(H,{links:n.roles,filters:e.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{Qe as default};
