import{C as I,l as S,D as h,E as V,c as v,a,b as d,w as c,F as k,o as n,H as j,d as t,g as p,z as m,h as B,y,r as P,G as D,t as b,I as T}from"./app-8521b5f5.js";import{_ as U,a as E}from"./Breadcrumb-02aa5735.js";import{_ as N}from"./TextInput-f4d5a70c.js";import{_ as z}from"./PrimaryButton-f193d88b.js";import{_ as A}from"./InfoButton-02ce1062.js";import{_ as F}from"./SelectInput-4d28b6d0.js";import{_ as x}from"./DangerButton-98f000a0.js";import{_ as H}from"./Pagination-23452d19.js";import{T as $,a as w,P as G}from"./index-b3b182e5.js";import L from"./Create-7800850a.js";import M from"./Edit-55bcc515.js";import Y from"./Delete-066220c4.js";import q from"./DeleteBulk-65e6f2be.js";import{_ as J}from"./Checkbox-443efd07.js";import"./open-closed-f7982a25.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./InputError-f52356e1.js";import"./InputLabel-7bb2fd7b.js";import"./SecondaryButton-7609af2d.js";const K={class:"space-y-4"},Q={class:"px-4 sm:px-0"},R={class:"rounded-lg overflow-hidden w-fit"},W={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},X={class:"flex justify-between p-2"},Z={class:"flex space-x-2"},ee={class:"overflow-x-auto scrollbar-table"},te={class:"w-full"},se={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},le={class:"dark:bg-gray-900/50 text-left"},ae={class:"px-2 py-4 text-center"},oe=t("th",{class:"px-2 py-4 text-center"},"#",-1),re={class:"flex justify-between items-center"},de=t("span",null,"Video",-1),ne={class:"flex justify-between items-center"},ie=t("span",null,"Title",-1),ce={class:"flex justify-between items-center"},pe=t("span",null,"Status",-1),ue=t("th",{class:"px-2 py-4"},"Action",-1),me={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},fe=["value"],_e={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},he={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ve=["src"],ye={class:"whitespace-nowrap py-4 px-2 sm:py-3"},be={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-capitalize"},we={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ge={class:"flex justify-center items-center"},ke={class:"rounded-md overflow-hidden"},xe={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},Le={__name:"Index",props:{title:String,filters:Object,videos:Object,breadcrumbs:Object,perPage:Number},setup(u){const r=u,e=I({params:{search:r.filters.search,field:r.filters.field,order:r.filters.order,perPage:r.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,video:null,dataSet:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}]}),f=o=>{e.params.field=o,e.params.order=e.params.order==="asc"?"desc":"asc"};S(()=>h._.cloneDeep(e.params),h.debounce(()=>{let o=h.pickBy(e.params);V.Inertia.get(route("video.index"),o,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const C=o=>{var s;o.target.checked===!1?e.selectedId=[]:(s=r.videos)==null||s.data.forEach(i=>{e.selectedId.push(i.id)})},O=()=>{var o;((o=r.videos)==null?void 0:o.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1};return(o,s)=>{const i=T("tooltip");return n(),v(k,null,[a(d(j),{title:r.title},null,8,["title"]),a(U,null,{default:c(()=>[a(E,{title:u.title,breadcrumbs:u.breadcrumbs},null,8,["title","breadcrumbs"]),t("div",K,[t("div",Q,[t("div",R,[p(a(z,{class:"rounded-none",onClick:s[0]||(s[0]=l=>e.createOpen=!0)},{default:c(()=>[B(" Create ")]),_:1},512),[[m,o.can(["create user"])]]),a(L,{show:e.createOpen,onClose:s[1]||(s[1]=l=>e.createOpen=!1)},null,8,["show"]),a(M,{show:e.editOpen,onClose:s[2]||(s[2]=l=>e.editOpen=!1),video:e.video},null,8,["show","video"]),a(Y,{show:e.deleteOpen,onClose:s[3]||(s[3]=l=>e.deleteOpen=!1),video:e.video},null,8,["show","video"]),a(q,{show:e.deleteBulkOpen,onClose:s[4]||(s[4]=l=>(e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[])),selectedId:e.selectedId},null,8,["show","selectedId"])])]),t("div",W,[t("div",X,[t("div",Z,[a(F,{modelValue:e.params.perPage,"onUpdate:modelValue":s[5]||(s[5]=l=>e.params.perPage=l),dataSet:e.dataSet},null,8,["modelValue","dataSet"]),p((n(),y(x,{onClick:s[6]||(s[6]=l=>e.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:c(()=>[a(d($),{class:"w-5 h-5"})]),_:1})),[[m,e.selectedId.length!=0&&o.can(["delete user"])],[i,o.lang().tooltip.delete_selected]])]),a(N,{modelValue:e.params.search,"onUpdate:modelValue":s[7]||(s[7]=l=>e.params.search=l),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:o.lang().placeholder.search},null,8,["modelValue","placeholder"])]),t("div",ee,[t("table",te,[t("thead",se,[t("tr",le,[t("th",ae,[a(J,{checked:e.multipleSelect,"onUpdate:checked":s[8]||(s[8]=l=>e.multipleSelect=l),onChange:C},null,8,["checked"])]),oe,t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[9]||(s[9]=l=>f("title"))},[t("div",re,[de,a(d(w),{class:"w-4 h-4"})])]),t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[10]||(s[10]=l=>f("video_url"))},[t("div",ne,[ie,a(d(w),{class:"w-4 h-4"})])]),t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[11]||(s[11]=l=>f("status"))},[t("div",ce,[pe,a(d(w),{class:"w-4 h-4"})])]),ue])]),t("tbody",null,[(n(!0),v(k,null,P(u.videos.data,(l,g)=>(n(),v("tr",{key:g,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[t("td",me,[p(t("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",onChange:O,value:l.id,"onUpdate:modelValue":s[12]||(s[12]=_=>e.selectedId=_)},null,40,fe),[[D,e.selectedId]])]),t("td",_e,b(++g),1),t("td",he,[t("iframe",{src:l.video_url,class:"rounded",frameborder:"0",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,ve)]),t("td",ye,b(l.title),1),t("td",be,b(l.status),1),t("td",we,[t("div",ge,[t("div",ke,[p((n(),y(A,{type:"button",onClick:_=>(e.editOpen=!0,e.video=l),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[a(d(G),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[m,o.can(["update user"])],[i,o.lang().tooltip.edit]]),p((n(),y(x,{type:"button",onClick:_=>(e.deleteOpen=!0,e.video=l),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[a(d($),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[m,o.can(["delete user"])],[i,o.lang().tooltip.delete]])])])])]))),128))])])]),t("div",xe,[a(H,{links:r.videos,filters:e.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{Le as default};
