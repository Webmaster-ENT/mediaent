import{C as S,l as I,D as h,E as V,c as v,a,b as d,w as c,F as k,o as n,H as j,d as t,g as p,z as m,h as B,y,r as D,G as P,t as b,I as E}from"./app-95aa28db.js";import{_ as N,a as U}from"./Breadcrumb-b5b8867a.js";import{_ as T}from"./TextInput-cf61d2f0.js";import{_ as z}from"./PrimaryButton-4d03a84c.js";import{_ as A}from"./InfoButton-8f62e364.js";import{_ as F}from"./SelectInput-ed73c7b9.js";import{_ as x}from"./DangerButton-67eed0c6.js";import{r as w,a as H,_ as G}from"./Pagination-810750c2.js";import L from"./Create-fa86bda1.js";import M from"./Edit-c8ac8e5f.js";import Y from"./Delete-99b3253e.js";import q from"./DeleteBulk-270e6539.js";import{_ as J}from"./Checkbox-fe0762d4.js";import{r as $}from"./TrashIcon-53055092.js";import"./use-outside-click-148ae59d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ChevronRightIcon-9765f4ea.js";import"./InputError-a4ea7e03.js";import"./InputLabel-da99fe39.js";import"./SecondaryButton-7124c215.js";const K={class:"space-y-4"},Q={class:"px-4 sm:px-0"},R={class:"rounded-lg overflow-hidden w-fit"},W={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},X={class:"flex justify-between p-2"},Z={class:"flex space-x-2"},ee={class:"overflow-x-auto scrollbar-table"},te={class:"w-full"},se={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},le={class:"dark:bg-gray-900/50 text-left"},ae={class:"px-2 py-4 text-center"},re=t("th",{class:"px-2 py-4 text-center"},"#",-1),oe={class:"flex justify-between items-center"},de=t("span",null,"Video",-1),ne={class:"flex justify-between items-center"},ie=t("span",null,"Title",-1),ce={class:"flex justify-between items-center"},pe=t("span",null,"Status",-1),ue=t("th",{class:"px-2 py-4"},"Action",-1),me={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},fe=["value"],_e={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},he={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ve=["src"],ye={class:"whitespace-nowrap py-4 px-2 sm:py-3"},be={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-capitalize"},we={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ge={class:"flex justify-center items-center"},ke={class:"rounded-md overflow-hidden"},xe={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},Me={__name:"Index",props:{title:String,filters:Object,videos:Object,breadcrumbs:Object,perPage:Number},setup(u){const o=u,e=S({params:{search:o.filters.search,field:o.filters.field,order:o.filters.order,perPage:o.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,video:null,dataSet:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}]}),f=r=>{e.params.field=r,e.params.order=e.params.order==="asc"?"desc":"asc"};I(()=>h._.cloneDeep(e.params),h.debounce(()=>{let r=h.pickBy(e.params);V.Inertia.get(route("video.index"),r,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const C=r=>{var s;r.target.checked===!1?e.selectedId=[]:(s=o.videos)==null||s.data.forEach(i=>{e.selectedId.push(i.id)})},O=()=>{var r;((r=o.videos)==null?void 0:r.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1};return(r,s)=>{const i=E("tooltip");return n(),v(k,null,[a(d(j),{title:o.title},null,8,["title"]),a(N,null,{default:c(()=>[a(U,{title:u.title,breadcrumbs:u.breadcrumbs},null,8,["title","breadcrumbs"]),t("div",K,[t("div",Q,[t("div",R,[p(a(z,{class:"rounded-none",onClick:s[0]||(s[0]=l=>e.createOpen=!0)},{default:c(()=>[B(" Create ")]),_:1},512),[[m,r.can(["create user"])]]),a(L,{show:e.createOpen,onClose:s[1]||(s[1]=l=>e.createOpen=!1)},null,8,["show"]),a(M,{show:e.editOpen,onClose:s[2]||(s[2]=l=>e.editOpen=!1),video:e.video},null,8,["show","video"]),a(Y,{show:e.deleteOpen,onClose:s[3]||(s[3]=l=>e.deleteOpen=!1),video:e.video},null,8,["show","video"]),a(q,{show:e.deleteBulkOpen,onClose:s[4]||(s[4]=l=>(e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[])),selectedId:e.selectedId},null,8,["show","selectedId"])])]),t("div",W,[t("div",X,[t("div",Z,[a(F,{modelValue:e.params.perPage,"onUpdate:modelValue":s[5]||(s[5]=l=>e.params.perPage=l),dataSet:e.dataSet},null,8,["modelValue","dataSet"]),p((n(),y(x,{onClick:s[6]||(s[6]=l=>e.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:c(()=>[a(d($),{class:"w-5 h-5"})]),_:1})),[[m,e.selectedId.length!=0&&r.can(["delete user"])],[i,r.lang().tooltip.delete_selected]])]),a(T,{modelValue:e.params.search,"onUpdate:modelValue":s[7]||(s[7]=l=>e.params.search=l),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:r.lang().placeholder.search},null,8,["modelValue","placeholder"])]),t("div",ee,[t("table",te,[t("thead",se,[t("tr",le,[t("th",ae,[a(J,{checked:e.multipleSelect,"onUpdate:checked":s[8]||(s[8]=l=>e.multipleSelect=l),onChange:C},null,8,["checked"])]),re,t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[9]||(s[9]=l=>f("title"))},[t("div",oe,[de,a(d(w),{class:"w-4 h-4"})])]),t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[10]||(s[10]=l=>f("video_url"))},[t("div",ne,[ie,a(d(w),{class:"w-4 h-4"})])]),t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[11]||(s[11]=l=>f("status"))},[t("div",ce,[pe,a(d(w),{class:"w-4 h-4"})])]),ue])]),t("tbody",null,[(n(!0),v(k,null,D(u.videos.data,(l,g)=>(n(),v("tr",{key:g,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[t("td",me,[p(t("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",onChange:O,value:l.id,"onUpdate:modelValue":s[12]||(s[12]=_=>e.selectedId=_)},null,40,fe),[[P,e.selectedId]])]),t("td",_e,b(++g),1),t("td",he,[t("iframe",{src:l.video_url,class:"rounded",frameborder:"0",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,ve)]),t("td",ye,b(l.title),1),t("td",be,b(l.status),1),t("td",we,[t("div",ge,[t("div",ke,[p((n(),y(A,{type:"button",onClick:_=>(e.editOpen=!0,e.video=l),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[a(d(H),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[m,r.can(["update user"])],[i,r.lang().tooltip.edit]]),p((n(),y(x,{type:"button",onClick:_=>(e.deleteOpen=!0,e.video=l),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[a(d($),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[m,r.can(["delete user"])],[i,r.lang().tooltip.delete]])])])])]))),128))])])]),t("div",xe,[a(G,{links:o.videos,filters:e.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{Me as default};
