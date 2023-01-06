import{G as O,D as V,J as h,K as j,c as y,b as r,d as n,w as u,F as w,o as i,H as I,a as e,h as c,p as m,e as v,t as d,s as b,i as B,M as D,N}from"./app-655895f6.js";import{_ as P,r as U}from"./AuthenticatedLayout-8d581d8e.js";import{_ as E}from"./Breadcrumb-7249469f.js";import{_ as A}from"./TextInput-ed5d16c6.js";import{_ as F}from"./PrimaryButton-990bcccf.js";import{r as x,a as k,_ as H,b as M,c as G}from"./Pagination-a56eb3a1.js";import{_ as J}from"./SelectInput-456ca768.js";import{_ as $}from"./DangerButton-7605e33a.js";import{_ as K}from"./Checkbox-169b0d7f.js";import"./ApplicationLogo-abd9c064.js";const L={class:"space-y-4"},T={class:"px-4 sm:px-0"},q={class:"rounded-lg overflow-hidden w-fit"},z={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},Q={class:"flex justify-between p-2"},R={class:"flex space-x-2"},W={class:"overflow-x-auto scrollbar-table"},X={class:"w-full"},Y={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},Z={class:"dark:bg-gray-900/50 text-left"},ee={class:"px-2 py-4 text-center"},te=e("th",{class:"px-2 py-4 text-center"},"#",-1),se={class:"flex justify-between items-center"},ae=e("span",null,"title",-1),le={class:"flex justify-between items-center"},re=e("th",{class:"px-2 py-4 sr-only"},"Action",-1),oe={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},de=["value"],ne={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},ie={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ce={class:"flex justify-start items-center"},pe={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ue={class:"whitespace-nowrap py-4 px-2 sm:py-3"},me={class:"whitespace-nowrap py-4 px-2 sm:py-3"},fe={class:"whitespace-nowrap py-4 px-2 sm:py-3"},_e={class:"whitespace-nowrap py-4 px-2 sm:py-3"},he={class:"flex justify-center items-center"},ye={class:"rounded-md overflow-hidden"},be={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},je={__name:"pp",props:{title:String,filters:Object,articles:Object,breadcrumbs:Object,perPage:Number},setup(f){const o=f,t=O({params:{search:o.filters.search,field:o.filters.field,order:o.filters.order,perPage:o.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,article:null,dataSet:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}]}),g=s=>{t.params.field=s,t.params.order=t.params.order==="asc"?"desc":"asc"};V(()=>h._.cloneDeep(t.params),h.debounce(()=>{let s=h.pickBy(t.params);j.Inertia.get(route("article.index"),s,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const S=s=>{var a;s.target.checked===!1?t.selectedId=[]:(a=o.articles)==null||a.data.forEach(p=>{t.selectedId.push(p.id)})},C=()=>{var s;((s=o.articles)==null?void 0:s.data.length)==t.selectedId.length?t.multipleSelect=!0:t.multipleSelect=!1};return(s,a)=>{const p=D("tooltip");return i(),y(w,null,[r(n(I),{title:o.title},null,8,["title"]),r(P,null,{default:u(()=>[r(E,{title:f.title,breadcrumbs:f.breadcrumbs},null,8,["title","breadcrumbs"]),e("div",L,[e("div",T,[e("div",q,[c(r(F,{class:"rounded-none",onClick:a[0]||(a[0]=l=>t.createOpen=!0)},{default:u(()=>[v(d(s.lang().button.add),1)]),_:1},512),[[m,s.can(["create article"])]])])]),e("div",z,[e("div",Q,[e("div",R,[r(J,{modelValue:t.params.perPage,"onUpdate:modelValue":a[1]||(a[1]=l=>t.params.perPage=l),dataSet:t.dataSet},null,8,["modelValue","dataSet"]),c((i(),b($,{onClick:a[2]||(a[2]=l=>t.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:u(()=>[r(n(x),{class:"w-5 h-5"})]),_:1})),[[m,t.selectedId.length!=0&&s.can(["delete article"])],[p,s.lang().tooltip.delete_selected]])]),r(A,{modelValue:t.params.search,"onUpdate:modelValue":a[3]||(a[3]=l=>t.params.search=l),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:s.lang().placeholder.search},null,8,["modelValue","placeholder"])]),e("div",W,[e("table",X,[e("thead",Y,[e("tr",Z,[e("th",ee,[r(K,{checked:t.multipleSelect,"onUpdate:checked":a[4]||(a[4]=l=>t.multipleSelect=l),onChange:S},null,8,["checked"])]),te,e("th",{class:"px-2 py-4 cursor-pointer",onClick:a[5]||(a[5]=l=>g("title"))},[e("div",se,[ae,r(n(k),{class:"w-4 h-4"})])]),e("th",{class:"px-2 py-4 cursor-pointer",onClick:a[6]||(a[6]=l=>g("updated_at"))},[e("div",le,[e("span",null,d(s.lang().label.updated),1),r(n(k),{class:"w-4 h-4"})])]),re])]),e("tbody",null,[(i(!0),y(w,null,B(f.articles,l=>(i(),y("tr",{key:s.index,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[e("td",oe,[c(e("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",onChange:C,value:l.id,"onUpdate:modelValue":a[7]||(a[7]=_=>t.selectedId=_)},null,40,de),[[N,t.selectedId]])]),e("td",ne,d(++s.index),1),e("td",ie,[e("span",ce,[v(d(l.name)+" ",1),c(r(n(U),{class:"ml-[2px] w-4 h-4 text-blue-600 dark:text-white"},null,512),[[m,l.email_verified_at]])])]),e("td",pe,d(l.title),1),e("td",ue,d(l.body),1),e("td",me,d(l.created_at),1),e("td",fe,d(l.updated_at),1),e("td",_e,[e("div",he,[e("div",ye,[c((i(),b(M,{type:"button",onClick:_=>(t.editOpen=!0,t.article=l),class:"px-2 py-1.5 rounded-none"},{default:u(()=>[r(n(G),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[m,s.can(["update article"])],[p,s.lang().tooltip.edit]]),c((i(),b($,{type:"button",onClick:_=>(t.deleteOpen=!0,t.article=l),class:"px-2 py-1.5 rounded-none"},{default:u(()=>[r(n(x),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[m,s.can(["delete article"])],[p,s.lang().tooltip.delete]])])])])]))),128))])])]),e("div",be,[r(H,{links:o.articles,filters:t.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{je as default};
