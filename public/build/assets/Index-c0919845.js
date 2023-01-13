import{C as I,m as O,D as h,E as j,u as V,c as _,a as r,b as d,w as n,F as v,o as p,H as B,d as e,h as b,A as x,e as y,t as u,L as w,z as D,i as N,G as E,I as P}from"./app-8bbff316.js";import{_ as U}from"./AuthenticatedLayout-91427651.js";import{_ as A}from"./Breadcrumb-49739945.js";import{_ as L}from"./TextInput-dcc3efd2.js";import{_ as F}from"./PrimaryButton-64aaa19a.js";import{_ as T}from"./SelectInput-a35fa8ae.js";import{_ as H}from"./DangerButton-58c0cd09.js";import{r as z,a as m,_ as G}from"./Pagination-5e10350c.js";import M from"./Delete-d33524f8.js";import{_ as q}from"./Checkbox-707e2df2.js";import"./ApplicationLogo-1663650a.js";import"./SecondaryButton-0140ce4b.js";const J={class:"space-y-4"},K={class:"px-4 sm:px-0"},Q={class:"rounded-lg overflow-hidden w-fit"},R={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},W={class:"flex justify-between p-2"},X={class:"flex space-x-2"},Y={class:"overflow-x-auto scrollbar-table"},Z={class:"w-full"},ee={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},te={class:"dark:bg-gray-900/50 text-left"},se={class:"px-2 py-4 text-center"},ae={class:"flex justify-between items-center"},le=e("span",null,"Thumbnail",-1),re={class:"flex justify-between items-center"},oe=e("span",null,"Title",-1),de={class:"flex justify-between items-center"},ne=e("span",null,"Status",-1),ie={class:"flex justify-between items-center"},ce=e("span",null,"Like",-1),pe=e("th",{class:"px-2 py-4"},"Action",-1),ue={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},me=["value","onUpdate:modelValue"],fe={class:"whitespace-nowrap py-4 px-2 sm:py-3"},he=e("span",{class:"flex justify-start items-center"},null,-1),_e=["src"],be={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ye={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ge={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ve={class:"whitespace-nowrap py-4 px-2 sm:py-3"},xe=["onClick"],we={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},Pe={__name:"Index",props:{title:String,filters:Object,videos:Object,roles:Object,breadcrumbs:Object,perPage:Number},setup(i){const o=i,t=I({params:{search:o.filters.search,field:o.filters.field,order:o.filters.order,perPage:o.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,video:null,dataSet:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}]}),c=l=>{t.params.field=l,t.params.order=t.params.order==="asc"?"desc":"asc"};O(()=>h._.cloneDeep(t.params),h.debounce(()=>{let l=h.pickBy(t.params);j.Inertia.get(route("video.index"),l,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const k=l=>{var s;l.target.checked===!1?t.selectedId=[]:(s=o.videos)==null||s.data.forEach(f=>{t.selectedId.push(f.id)})},$=()=>{var l;((l=o.videos)==null?void 0:l.data.length)==t.selectedId.length?t.multipleSelect=!0:t.multipleSelect=!1},C=V();function S(l){confirm("Are you sure you want to Delete")&&C.delete(route("video.destroy",l))}return(l,s)=>{const f=E("tooltip");return p(),_(v,null,[r(d(B),{title:o.title},null,8,["title"]),r(U,null,{default:n(()=>[r(A,{title:i.title,breadcrumbs:i.breadcrumbs},null,8,["title","breadcrumbs"]),e("div",J,[e("div",K,[e("div",Q,[b(r(F,{class:"rounded-none",onClick:s[0]||(s[0]=a=>t.createOpen=!0)},{default:n(()=>[y(u(l.lang().button.add),1)]),_:1},512),[[x,l.can(["create video"])]]),r(d(w),{tabindex:"1",type:"button",className:"px-4 py-2 text-sm text-white bg-blue-500 rounded",href:l.route("video.create")},{default:n(()=>[y("Create")]),_:1},8,["href"]),r(M,{show:t.deleteOpen,onClose:s[1]||(s[1]=a=>t.deleteOpen=!1),video:t.video},null,8,["show","video"])])]),e("div",R,[e("div",W,[e("div",X,[r(T,{modelValue:t.params.perPage,"onUpdate:modelValue":s[2]||(s[2]=a=>t.params.perPage=a),dataSet:t.dataSet},null,8,["modelValue","dataSet"]),b((p(),D(H,{onClick:s[3]||(s[3]=a=>t.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:n(()=>[r(d(z),{class:"w-5 h-5"})]),_:1})),[[x,t.selectedId.length!=0&&l.can(["delete video"])],[f,l.lang().tooltip.delete_selected]])]),r(L,{modelValue:t.params.search,"onUpdate:modelValue":s[4]||(s[4]=a=>t.params.search=a),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:l.lang().placeholder.search},null,8,["modelValue","placeholder"])]),e("div",Y,[e("table",Z,[e("thead",ee,[e("tr",te,[e("th",se,[r(q,{checked:t.multipleSelect,"onUpdate:checked":s[5]||(s[5]=a=>t.multipleSelect=a),onChange:k},null,8,["checked"])]),e("th",{class:"px-2 py-4 cursor-pointer",onClick:s[6]||(s[6]=a=>c("title"))},[e("div",ae,[le,r(d(m),{class:"w-4 h-4"})])]),e("th",{class:"px-2 py-4 cursor-pointer",onClick:s[7]||(s[7]=a=>c("updated_at"))},[e("div",re,[oe,r(d(m),{class:"w-4 h-4"})])]),e("th",{class:"px-2 py-4 cursor-pointer",onClick:s[8]||(s[8]=a=>c("updated_at"))},[e("div",de,[ne,r(d(m),{class:"w-4 h-4"})])]),e("th",{class:"px-2 py-4 cursor-pointer",onClick:s[9]||(s[9]=a=>c("updated_at"))},[e("div",ie,[ce,r(d(m),{class:"w-4 h-4"})])]),pe])]),e("tbody",null,[(p(!0),_(v,null,N(i.videos.data,a=>(p(),_("tr",{key:l.index,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[e("td",ue,[b(e("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",onChange:$,value:a.id,"onUpdate:modelValue":g=>a.selectedId=g},null,40,me),[[P,a.selectedId]])]),e("td",fe,[he,e("img",{src:a.thumbnail,class:"w-32 rounded",alt:""},null,8,_e)]),e("td",be,u(a.title),1),e("td",ye,u(a.status),1),e("td",ge,u(a.like),1),e("td",ve,[r(d(w),{tabIndex:"1",className:"px-4 py-2 text-sm text-white bg-blue-500 rounded",href:l.route("video.edit",a.id)},{default:n(()=>[y(" Edit ")]),_:2},1032,["href"]),e("button",{onClick:g=>S(a.id),tabIndex:"-1",type:"button",className:"mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"}," Delete ",8,xe)])]))),128))])])]),e("div",we,[r(G,{links:o.videos,filters:t.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{Pe as default};
