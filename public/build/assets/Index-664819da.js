import{O as I,z as j,Q as b,R as V,g as w,a,b as d,w as p,F as g,o as n,H as B,d as s,h as u,v as _,e as D,c as v,D as N,r as P,C as U,t as i}from"./app-ca577fa4.js";import{_ as A,a as E}from"./AuthenticatedLayout-2708d8be.js";import{a as F}from"./TextInput-56afc9df.js";import{_ as k}from"./PrimaryButton-4e0ddc79.js";import{_ as H}from"./SelectInput-ed23fbec.js";import{_ as $}from"./DangerButton-1fef13be.js";import{r as O,a as h,_ as R,b as z}from"./Pagination-27f50247.js";import L from"./Create-babd424d.js";import M from"./Edit-e28a20b6.js";import Q from"./Delete-045555f5.js";import T from"./DeleteBulk-1f2a23d9.js";import{_ as q}from"./Checkbox-43c22e56.js";import"./index-b2f45f9f.js";import"./SecondaryButton-47b38e23.js";const G={class:"space-y-4"},J={class:"px-4 sm:px-0"},K={class:"rounded-lg overflow-hidden w-fit"},W={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},X={class:"flex justify-between p-2"},Y={class:"flex space-x-2"},Z={class:"overflow-x-auto scrollbar-table"},ee={class:"w-full"},se={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},te={class:"dark:bg-gray-900/50 text-left"},le={class:"px-2 py-4 text-center"},ae=s("th",{class:"px-2 py-4 text-center"},"#",-1),re={class:"flex justify-between items-center"},oe=s("span",null,"Name",-1),de={class:"flex justify-between items-center"},ne=s("span",null,"Email",-1),ie=s("th",{class:"px-2 py-4"},"Role",-1),ce={class:"flex justify-between items-center"},pe=s("span",null,"Created",-1),ue={class:"flex justify-between items-center"},me=s("span",null,"Updated",-1),fe=s("th",{class:"px-2 py-4 sr-only"},"Action",-1),_e={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},he=["value"],ye={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},be={class:"whitespace-nowrap py-4 px-2 sm:py-3"},we={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ve={class:"whitespace-nowrap py-4 px-2 sm:py-3"},xe={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ge={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ke={class:"whitespace-nowrap py-4 px-2 sm:py-3"},$e={class:"flex justify-center items-center"},Oe={class:"rounded-md overflow-hidden"},Ce={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},ze={__name:"Index",props:{title:String,filters:Object,users:Object,roles:Object,breadcrumbs:Object,perPage:Number},setup(m){const o=m,e=I({params:{search:o.filters.search,field:o.filters.field,order:o.filters.order,perPage:o.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,user:null,dataSet:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}]}),f=r=>{e.params.field=r,e.params.order=e.params.order==="asc"?"desc":"asc"};j(()=>b.exports._.cloneDeep(e.params),b.exports.debounce(()=>{let r=b.exports.pickBy(e.params);V.Inertia.get(route("user.index"),r,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const C=r=>{var t;r.target.checked===!1?e.selectedId=[]:(t=o.users)==null||t.data.forEach(c=>{e.selectedId.push(c.id)})},S=()=>{var r;((r=o.users)==null?void 0:r.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1};return(r,t)=>{const c=P("tooltip");return n(),w(g,null,[a(d(B),{title:o.title},null,8,["title"]),a(A,null,{default:p(()=>[a(E,{title:m.title,breadcrumbs:m.breadcrumbs},null,8,["title","breadcrumbs"]),s("div",G,[s("div",J,[s("div",K,[u(a(k,{class:"rounded-none",onClick:t[0]||(t[0]=l=>e.createOpen=!0)},{default:p(()=>[D(" Add ")]),_:1},512),[[_,r.can(["create user"])]]),a(L,{show:e.createOpen,onClose:t[1]||(t[1]=l=>e.createOpen=!1),roles:o.roles},null,8,["show","roles"]),a(M,{show:e.editOpen,onClose:t[2]||(t[2]=l=>e.editOpen=!1),user:e.user,roles:o.roles},null,8,["show","user","roles"]),a(Q,{show:e.deleteOpen,onClose:t[3]||(t[3]=l=>e.deleteOpen=!1),user:e.user},null,8,["show","user"]),a(T,{show:e.deleteBulkOpen,onClose:t[4]||(t[4]=l=>(e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[])),selectedId:e.selectedId},null,8,["show","selectedId"])])]),s("div",W,[s("div",X,[s("div",Y,[a(H,{modelValue:e.params.perPage,"onUpdate:modelValue":t[5]||(t[5]=l=>e.params.perPage=l),dataSet:e.dataSet},null,8,["modelValue","dataSet"]),u((n(),v($,{onClick:t[6]||(t[6]=l=>e.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:p(()=>[a(d(O),{class:"w-5 h-5"})]),_:1})),[[_,e.selectedId.length!=0&&r.can(["delete user"])],[c,"Delete All Selected"]])]),a(F,{modelValue:e.params.search,"onUpdate:modelValue":t[7]||(t[7]=l=>e.params.search=l),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:"Search..."},null,8,["modelValue"])]),s("div",Z,[s("table",ee,[s("thead",se,[s("tr",te,[s("th",le,[a(q,{checked:e.multipleSelect,"onUpdate:checked":t[8]||(t[8]=l=>e.multipleSelect=l),onChange:C},null,8,["checked"])]),ae,s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[9]||(t[9]=l=>f("name"))},[s("div",re,[oe,a(d(h),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[10]||(t[10]=l=>f("email"))},[s("div",de,[ne,a(d(h),{class:"w-4 h-4"})])]),ie,s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[11]||(t[11]=l=>f("created_at"))},[s("div",ce,[pe,a(d(h),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[12]||(t[12]=l=>f("updated_at"))},[s("div",ue,[me,a(d(h),{class:"w-4 h-4"})])]),fe])]),s("tbody",null,[(n(!0),w(g,null,N(m.users.data,(l,x)=>(n(),w("tr",{key:x,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[s("td",_e,[u(s("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",onChange:S,value:l.id,"onUpdate:modelValue":t[13]||(t[13]=y=>e.selectedId=y)},null,40,he),[[U,e.selectedId]])]),s("td",ye,i(++x),1),s("td",be,i(l.name),1),s("td",we,i(l.email),1),s("td",ve,i(l.roles.length==0?"not selected":l.roles[0].name),1),s("td",xe,i(l.created_at),1),s("td",ge,i(l.updated_at),1),s("td",ke,[s("div",$e,[s("div",Oe,[u((n(),v(k,{type:"button",onClick:y=>(e.editOpen=!0,e.user=l),class:"px-2 py-1.5 rounded-none"},{default:p(()=>[a(d(z),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[_,r.can(["update user"])],[c,"Edit"]]),u((n(),v($,{type:"button",onClick:y=>(e.deleteOpen=!0,e.user=l),class:"px-2 py-1.5 rounded-none"},{default:p(()=>[a(d(O),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[_,r.can(["delete user"])],[c,"Delete"]])])])])]))),128))])])]),s("div",Ce,[a(R,{links:o.users,filters:e.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{ze as default};
