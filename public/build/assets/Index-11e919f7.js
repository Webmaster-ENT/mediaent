import{C as S,p as I,D as b,E as j,c as w,a as l,b as d,w as c,F as k,o as n,H as V,d as t,g as p,z as f,h as B,y as v,r as D,G as P,t as _,I as U}from"./app-b7288bfd.js";import{_ as E,a as H}from"./Breadcrumb-4ce3b050.js";import{_ as N}from"./TextInput-cb7272b9.js";import{_ as A}from"./PrimaryButton-24653cbd.js";import{_ as L}from"./InfoButton-286fb69b.js";import{_ as M}from"./SelectInput-33bf9056.js";import{_ as x}from"./DangerButton-3d583602.js";import{b as $,r as h,a as T,_ as z}from"./Pagination-aa2a91f5.js";import"./moment-fbc5633a.js";import F from"./Create-4bacb1b7.js";import G from"./Edit-1971af0a.js";import q from"./Delete-6613b5c7.js";import J from"./DeleteBulk-a428cd57.js";import{_ as K}from"./Checkbox-86b6e020.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./InputError-6f8ed131.js";import"./InputLabel-5cc4fa5d.js";import"./SecondaryButton-fbaac25a.js";import"./Ckeditor-43810ae0.js";const Q={class:"space-y-4"},R={class:"px-4 sm:px-0"},W={class:"rounded-lg overflow-hidden w-fit"},X={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},Y={class:"flex justify-between p-2"},Z={class:"flex space-x-2"},ee={class:"overflow-x-auto scrollbar-table"},te={class:"w-full"},se={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},ae={class:"dark:bg-gray-900/50 text-left"},le={class:"px-2 py-4 text-center"},re=t("th",{class:"px-2 py-4 text-center"},"#",-1),oe={class:"flex justify-between items-center"},de=t("span",null,"Subject",-1),ne={class:"flex justify-between items-center"},ie=t("span",null,"Author",-1),ce={class:"flex justify-between items-center"},pe=t("span",null,"Created",-1),ue={class:"flex justify-between items-center"},me=t("span",null,"Updated",-1),fe=t("th",{class:"px-2 py-4"},"Action",-1),_e={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},he=["value"],ye={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},be={class:"whitespace-nowrap py-4 px-2 sm:py-3"},we=["innerHTML"],ve={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ge={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ke={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-capitalize"},xe={class:"whitespace-nowrap py-4 px-2 sm:py-3"},$e={class:"flex justify-center items-center"},Ce={class:"rounded-md overflow-hidden"},Oe={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},Je={__name:"Index",props:{title:String,filters:Object,forums:Object,breadcrumbs:Object,perPage:Number},setup(u){const o=u,e=S({params:{search:o.filters.search,field:o.filters.field,order:o.filters.order,perPage:o.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,forum:null,dataSet:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}]}),m=r=>{e.params.field=r,e.params.order=e.params.order==="asc"?"desc":"asc"};I(()=>b._.cloneDeep(e.params),b.debounce(()=>{let r=b.pickBy(e.params);j.Inertia.get(route("forum.index"),r,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const C=r=>{var s;r.target.checked===!1?e.selectedId=[]:(s=o.forums)==null||s.data.forEach(i=>{e.selectedId.push(i.id)})},O=()=>{var r;((r=o.forums)==null?void 0:r.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1};return(r,s)=>{const i=U("tooltip");return n(),w(k,null,[l(d(V),{title:o.title},null,8,["title"]),l(E,null,{default:c(()=>[l(H,{title:u.title,breadcrumbs:u.breadcrumbs},null,8,["title","breadcrumbs"]),t("div",Q,[t("div",R,[t("div",W,[p(l(A,{class:"rounded-none",onClick:s[0]||(s[0]=a=>e.createOpen=!0)},{default:c(()=>[B(" Create ")]),_:1},512),[[f,r.can(["create user"])]]),l(F,{show:e.createOpen,onClose:s[1]||(s[1]=a=>e.createOpen=!1)},null,8,["show"]),l(G,{show:e.editOpen,onClose:s[2]||(s[2]=a=>e.editOpen=!1),forum:e.forum},null,8,["show","forum"]),l(q,{show:e.deleteOpen,onClose:s[3]||(s[3]=a=>e.deleteOpen=!1),forum:e.forum},null,8,["show","forum"]),l(J,{show:e.deleteBulkOpen,onClose:s[4]||(s[4]=a=>(e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[])),selectedId:e.selectedId},null,8,["show","selectedId"])])]),t("div",X,[t("div",Y,[t("div",Z,[l(M,{modelValue:e.params.perPage,"onUpdate:modelValue":s[5]||(s[5]=a=>e.params.perPage=a),dataSet:e.dataSet},null,8,["modelValue","dataSet"]),p((n(),v(x,{onClick:s[6]||(s[6]=a=>e.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:c(()=>[l(d($),{class:"w-5 h-5"})]),_:1})),[[f,e.selectedId.length!=0&&r.can(["delete user"])],[i,r.lang().tooltip.delete_selected]])]),l(N,{modelValue:e.params.search,"onUpdate:modelValue":s[7]||(s[7]=a=>e.params.search=a),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:r.lang().placeholder.search},null,8,["modelValue","placeholder"])]),t("div",ee,[t("table",te,[t("thead",se,[t("tr",ae,[t("th",le,[l(K,{checked:e.multipleSelect,"onUpdate:checked":s[8]||(s[8]=a=>e.multipleSelect=a),onChange:C},null,8,["checked"])]),re,t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[9]||(s[9]=a=>m("subject"))},[t("div",oe,[de,l(d(h),{class:"w-4 h-4"})])]),t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[10]||(s[10]=a=>m("created_at"))},[t("div",ne,[ie,l(d(h),{class:"w-4 h-4"})])]),t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[11]||(s[11]=a=>m("created_at"))},[t("div",ce,[pe,l(d(h),{class:"w-4 h-4"})])]),t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[12]||(s[12]=a=>m("updated_at"))},[t("div",ue,[me,l(d(h),{class:"w-4 h-4"})])]),fe])]),t("tbody",null,[(n(!0),w(k,null,D(u.forums.data,(a,g)=>(n(),w("tr",{key:g,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[t("td",_e,[p(t("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",onChange:O,value:a.id,"onUpdate:modelValue":s[13]||(s[13]=y=>e.selectedId=y)},null,40,he),[[P,e.selectedId]])]),t("td",ye,_(++g),1),t("td",be,[t("div",{innerHTML:a.subject},null,8,we)]),t("td",ve,_(a.user.name),1),t("td",ge,_(a.created_at),1),t("td",ke,_(a.updated_at),1),t("td",xe,[t("div",$e,[t("div",Ce,[p((n(),v(L,{type:"button",onClick:y=>(e.editOpen=!0,e.forum=a),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[l(d(T),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[f,r.can(["update user"])],[i,r.lang().tooltip.edit]]),p((n(),v(x,{type:"button",onClick:y=>(e.deleteOpen=!0,e.forum=a),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[l(d($),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[f,r.can(["delete user"])],[i,r.lang().tooltip.delete]])])])])]))),128))])])]),t("div",Oe,[l(z,{links:o.forums,filters:e.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{Je as default};
