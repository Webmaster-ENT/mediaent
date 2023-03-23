import{C as S,l as j,D as b,E as B,c as w,a as r,b as d,w as u,F as k,o as i,H as V,d as s,g as p,z as m,h as x,t as o,y as g,r as P,G as D,I as U}from"./app-5c2d75bd.js";import{_ as E,a as N}from"./Breadcrumb-df05d7ec.js";import{_ as T}from"./TextInput-dc854951.js";import{_ as A}from"./PrimaryButton-668a2f39.js";import{_ as F}from"./InfoButton-a70878bf.js";import{_ as H}from"./SelectInput-4c5f59cb.js";import{_ as $}from"./DangerButton-cac0d6ca.js";import{_ as z}from"./Pagination-26547f49.js";import{T as C,a as _,d as G,P as L}from"./index-419b2018.js";import M from"./Create-4eab44ca.js";import q from"./Edit-cd2384eb.js";import J from"./Delete-254cdee1.js";import K from"./DeleteBulk-1d6b3529.js";import{_ as Q}from"./Checkbox-98eb893e.js";import"./open-closed-b539d91d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./InputError-e9ae88e2.js";import"./InputLabel-223c234d.js";import"./SecondaryButton-362622be.js";const R={class:"space-y-4"},W={class:"px-4 sm:px-0"},X={class:"rounded-lg overflow-hidden w-fit"},Y={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},Z={class:"flex justify-between p-2"},ee={class:"flex space-x-2"},se={class:"overflow-x-auto scrollbar-table"},te={class:"w-full"},le={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},ae={class:"dark:bg-gray-900/50 text-left"},re={class:"px-2 py-4 text-center"},oe=s("th",{class:"px-2 py-4 text-center"},"#",-1),ne={class:"flex justify-between items-center"},de={class:"flex justify-between items-center"},ie={class:"px-2 py-4"},pe={class:"flex justify-between items-center"},ce={class:"flex justify-between items-center"},ue=s("th",{class:"px-2 py-4 sr-only"},"Action",-1),me={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},fe=["value"],he={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},_e={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ye={class:"flex justify-start items-center"},be={class:"whitespace-nowrap py-4 px-2 sm:py-3"},we={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ge={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ve={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ke={class:"whitespace-nowrap py-4 px-2 sm:py-3"},xe={class:"flex justify-center items-center"},$e={class:"rounded-md overflow-hidden"},Ce={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},qe={__name:"Index",props:{title:String,filters:Object,users:Object,roles:Object,breadcrumbs:Object,perPage:Number},setup(f){const n=f,e=S({params:{search:n.filters.search,field:n.filters.field,order:n.filters.order,perPage:n.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,user:null,dataSet:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}]}),h=a=>{e.params.field=a,e.params.order=e.params.order==="asc"?"desc":"asc"};j(()=>b._.cloneDeep(e.params),b.debounce(()=>{let a=b.pickBy(e.params);B.Inertia.get(route("user.index"),a,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const O=a=>{var t;a.target.checked===!1?e.selectedId=[]:(t=n.users)==null||t.data.forEach(c=>{e.selectedId.push(c.id)})},I=()=>{var a;((a=n.users)==null?void 0:a.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1};return(a,t)=>{const c=U("tooltip");return i(),w(k,null,[r(d(V),{title:n.title},null,8,["title"]),r(E,null,{default:u(()=>[r(N,{title:f.title,breadcrumbs:f.breadcrumbs},null,8,["title","breadcrumbs"]),s("div",R,[s("div",W,[s("div",X,[p(r(A,{class:"rounded-none",onClick:t[0]||(t[0]=l=>e.createOpen=!0)},{default:u(()=>[x(o(a.lang().button.add),1)]),_:1},512),[[m,a.can(["create user"])]]),r(M,{show:e.createOpen,onClose:t[1]||(t[1]=l=>e.createOpen=!1),roles:n.roles},null,8,["show","roles"]),r(q,{show:e.editOpen,onClose:t[2]||(t[2]=l=>e.editOpen=!1),user:e.user,roles:n.roles},null,8,["show","user","roles"]),r(J,{show:e.deleteOpen,onClose:t[3]||(t[3]=l=>e.deleteOpen=!1),user:e.user},null,8,["show","user"]),r(K,{show:e.deleteBulkOpen,onClose:t[4]||(t[4]=l=>(e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[])),selectedId:e.selectedId},null,8,["show","selectedId"])])]),s("div",Y,[s("div",Z,[s("div",ee,[r(H,{modelValue:e.params.perPage,"onUpdate:modelValue":t[5]||(t[5]=l=>e.params.perPage=l),dataSet:e.dataSet},null,8,["modelValue","dataSet"]),p((i(),g($,{onClick:t[6]||(t[6]=l=>e.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:u(()=>[r(d(C),{class:"w-5 h-5"})]),_:1})),[[m,e.selectedId.length!=0&&a.can(["delete user"])],[c,a.lang().tooltip.delete_selected]])]),r(T,{modelValue:e.params.search,"onUpdate:modelValue":t[7]||(t[7]=l=>e.params.search=l),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:a.lang().placeholder.search},null,8,["modelValue","placeholder"])]),s("div",se,[s("table",te,[s("thead",le,[s("tr",ae,[s("th",re,[r(Q,{checked:e.multipleSelect,"onUpdate:checked":t[8]||(t[8]=l=>e.multipleSelect=l),onChange:O},null,8,["checked"])]),oe,s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[9]||(t[9]=l=>h("name"))},[s("div",ne,[s("span",null,o(a.lang().label.name),1),r(d(_),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[10]||(t[10]=l=>h("email"))},[s("div",de,[s("span",null,o(a.lang().label.email),1),r(d(_),{class:"w-4 h-4"})])]),s("th",ie,o(a.lang().label.role),1),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[11]||(t[11]=l=>h("created_at"))},[s("div",pe,[s("span",null,o(a.lang().label.created),1),r(d(_),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[12]||(t[12]=l=>h("updated_at"))},[s("div",ce,[s("span",null,o(a.lang().label.updated),1),r(d(_),{class:"w-4 h-4"})])]),ue])]),s("tbody",null,[(i(!0),w(k,null,P(f.users.data,(l,v)=>(i(),w("tr",{key:v,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[s("td",me,[p(s("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",onChange:I,value:l.id,"onUpdate:modelValue":t[13]||(t[13]=y=>e.selectedId=y)},null,40,fe),[[D,e.selectedId]])]),s("td",he,o(++v),1),s("td",_e,[s("span",ye,[x(o(l.name)+" ",1),p(r(d(G),{class:"ml-[2px] w-4 h-4 text-blue-600 dark:text-white"},null,512),[[m,l.email_verified_at]])])]),s("td",be,o(l.email),1),s("td",we,o(l.roles.length==0?"not selected":l.roles[0].name),1),s("td",ge,o(l.created_at),1),s("td",ve,o(l.updated_at),1),s("td",ke,[s("div",xe,[s("div",$e,[p((i(),g(F,{type:"button",onClick:y=>(e.editOpen=!0,e.user=l),class:"px-2 py-1.5 rounded-none"},{default:u(()=>[r(d(L),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[m,a.can(["update user"])],[c,a.lang().tooltip.edit]]),p((i(),g($,{type:"button",onClick:y=>(e.deleteOpen=!0,e.user=l),class:"px-2 py-1.5 rounded-none"},{default:u(()=>[r(d(C),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[m,a.can(["delete user"])],[c,a.lang().tooltip.delete]])])])])]))),128))])])]),s("div",Ce,[r(z,{links:n.users,filters:e.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{qe as default};
