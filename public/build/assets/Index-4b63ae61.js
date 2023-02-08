import{o as c,c as p,d as e,C as $,l as S,D as m,E as C,a,b as o,w as d,F as w,H as O,L as h,h as V,r as j,g as x,G as I,t as b,z as B,y as D,I as N}from"./app-95aa28db.js";import{_ as P,a as z}from"./Breadcrumb-b5b8867a.js";import{_ as E}from"./TextInput-cf61d2f0.js";import{_ as M}from"./SelectInput-ed73c7b9.js";import{_ as U}from"./DangerButton-67eed0c6.js";import{r as g,a as L,_ as T}from"./Pagination-810750c2.js";import A from"./Delete-d631d429.js";import{_ as F}from"./Checkbox-fe0762d4.js";import{r as H}from"./TrashIcon-53055092.js";import"./use-outside-click-148ae59d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ChevronRightIcon-9765f4ea.js";import"./SecondaryButton-7124c215.js";function G(n,i){return c(),p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M12 15a3 3 0 100-6 3 3 0 000 6z"}),e("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z","clip-rule":"evenodd"})])}const q={class:"space-y-4"},J={class:"px-4 sm:px-0"},K={class:"rounded-lg overflow-hidden w-fit"},Q={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},R={class:"flex justify-between p-2"},W={class:"flex space-x-2"},X={class:"overflow-x-auto scrollbar-table"},Y={class:"w-full"},Z={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},ee={class:"dark:bg-gray-900/50 text-center"},te={class:"px-2 py-4 text-center"},se=e("th",{class:"px-2 py-4 text-center"},"#",-1),re={class:"flex justify-between items-center"},ae=e("span",null,"Thumbnail",-1),le={class:"flex justify-between items-center"},oe=e("span",null,"Title",-1),ie={class:"flex justify-between items-center"},ne=e("span",null,"Status",-1),de=e("th",{class:"px-2 py-4"},"Action",-1),ce={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},pe=["value"],ue={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},fe={class:"whitespace-nowrap py-4 px-2 sm:py-3"},me=["src"],he={class:"whitespace-nowrap py-4 px-2 sm:py-3"},be={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ge={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ye={class:"flex justify-center items-center"},_e={class:"rounded-md overflow-hidden"},we={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},Pe={__name:"Index",props:{title:String,filters:Object,articles:Object,breadcrumbs:Object,perPage:Number},setup(n){const i=n,t=$({params:{search:i.filters.search,field:i.filters.field,order:i.filters.order,perPage:i.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,article:null,dataSet:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}]}),u=l=>{t.params.field=l,t.params.order=t.params.order==="asc"?"desc":"asc"};S(()=>m._.cloneDeep(t.params),m.debounce(()=>{let l=m.pickBy(t.params);C.Inertia.get(route("article.index"),l,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const v=l=>{var s;l.target.checked===!1?t.selectedId=[]:(s=i.articles)==null||s.data.forEach(f=>{t.selectedId.push(f.id)})},k=()=>{var l;((l=i.articles)==null?void 0:l.data.length)==t.selectedId.length?t.multipleSelect=!0:t.multipleSelect=!1};return(l,s)=>{const f=N("tooltip");return c(),p(w,null,[a(o(O),{title:i.title},null,8,["title"]),a(P,null,{default:d(()=>[a(z,{title:n.title,breadcrumbs:n.breadcrumbs},null,8,["title","breadcrumbs"]),e("div",q,[e("div",J,[e("div",K,[a(o(h),{tabiprimndex:"1",type:"button",className:"inline-flex items-center px-4 py-2 bg-primary dark:bg-primary border border-transparent rounded-md font-semibold text-xs text-white dark:text-white uppercase tracking-widest hover:bg-primary/80 dark:hover:bg-primary/90 focus:bg-primary/80 dark:focus:bg-primary/80 active:bg-primary dark:active:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-primary transition ease-in-out duration-150 disabled:bg-primary/80",href:l.route("article.create")},{default:d(()=>[V("Create")]),_:1},8,["href"]),a(A,{show:t.deleteOpen,onClose:s[0]||(s[0]=r=>t.deleteOpen=!1),article:t.article},null,8,["show","article"])])]),e("div",Q,[e("div",R,[e("div",W,[a(M,{modelValue:t.params.perPage,"onUpdate:modelValue":s[1]||(s[1]=r=>t.params.perPage=r),dataSet:t.dataSet},null,8,["modelValue","dataSet"])]),a(E,{modelValue:t.params.search,"onUpdate:modelValue":s[2]||(s[2]=r=>t.params.search=r),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:l.lang().placeholder.search},null,8,["modelValue","placeholder"])]),e("div",X,[e("table",Y,[e("thead",Z,[e("tr",ee,[e("th",te,[a(F,{checked:t.multipleSelect,"onUpdate:checked":s[3]||(s[3]=r=>t.multipleSelect=r),onChange:v},null,8,["checked"])]),se,e("th",{class:"px-2 py-4 cursor-pointer",onClick:s[4]||(s[4]=r=>u("name"))},[e("div",re,[ae,a(o(g),{class:"w-4 h-4"})])]),e("th",{class:"px-2 py-4 cursor-pointer",onClick:s[5]||(s[5]=r=>u("title"))},[e("div",le,[oe,a(o(g),{class:"w-4 h-4"})])]),e("th",{class:"px-2 py-4 cursor-pointer",onClick:s[6]||(s[6]=r=>u("status"))},[e("div",ie,[ne,a(o(g),{class:"w-4 h-4"})])]),de])]),e("tbody",null,[(c(!0),p(w,null,j(n.articles.data,(r,y)=>(c(),p("tr",{key:y,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[e("td",ce,[x(e("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",onChange:k,value:r.id,"onUpdate:modelValue":s[7]||(s[7]=_=>t.selectedId=_)},null,40,pe),[[I,t.selectedId]])]),e("td",ue,b(++y),1),e("td",fe,[e("img",{src:r.thumbnail,class:"w-32 rounded",alt:""},null,8,me)]),e("td",he,b(r.title),1),e("td",be,b(r.status),1),e("td",ge,[e("div",ye,[e("div",_e,[a(o(h),{class:"px-2 py-1.5 inline-flex items-center px-4 py-2 bg-yellow-600 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-yellow-500 active:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150",href:l.route("article.show",r.slug)},{default:d(()=>[a(o(G),{class:"w-4 h-4"})]),_:2},1032,["href"]),a(o(h),{class:"px-2 py-1.5 inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150",href:l.route("article.edit",r.id)},{default:d(()=>[a(o(L),{class:"w-4 h-4"})]),_:2},1032,["href"]),x((c(),D(U,{type:"button",onClick:_=>(t.deleteOpen=!0,t.article=r),class:"px-2 py-1.5 rounded-none"},{default:d(()=>[a(o(H),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[B,l.can(["delete user"])],[f,l.lang().tooltip.delete]])])])])]))),128))])])]),e("div",we,[a(T,{links:i.articles,filters:t.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{Pe as default};
