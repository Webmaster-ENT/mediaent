import{u as p,B as _,c as b,a,w as c,o as g,d as l,b as o,h as m,t as d,q as h,e as v}from"./app-95aa28db.js";import{_ as w}from"./InputError-a4ea7e03.js";import{_ as j}from"./InputLabel-da99fe39.js";import{_ as y,a as $}from"./SecondaryButton-7124c215.js";import{_ as k}from"./PrimaryButton-4d03a84c.js";import{_ as V}from"./Ckeditor-c9fac5e7.js";import"./Ckeditor.vue_vue_type_style_index_0_lang-26af85cd.js";const x={class:"space-y-6"},B=["onSubmit"],C=l("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Edit Forum ",-1),E={class:"my-6 space-y-4"},S={class:"flex justify-end"},O={__name:"Edit",props:{show:Boolean,forum:Object},emits:["close"],setup(f,{emit:n}){const r=f,s=p({subject:""}),u=()=>{var e;s.put(route("forum.update",(e=r.forum)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{n("close"),s.reset()},onError:()=>null,onFinish:()=>null})};return _(()=>{var e;r.show&&(s.subject=(e=r.forum)==null?void 0:e.subject)}),(e,t)=>(g(),b("section",x,[a(y,{show:r.show,onClose:t[2]||(t[2]=i=>n("close"))},{default:c(()=>[l("form",{class:"p-6",onSubmit:v(u,["prevent"])},[C,l("div",E,[l("div",null,[a(j,{for:"title",value:"Title"}),a(V,{id:"subject",class:"mt-1 block w-full",modelValue:o(s).subject,"onUpdate:modelValue":t[0]||(t[0]=i=>o(s).subject=i),required:""},null,8,["modelValue"]),a(w,{class:"mt-2",message:o(s).errors.subject},null,8,["message"])])]),l("div",S,[a($,{disabled:o(s).processing,onClick:t[1]||(t[1]=i=>n("close"))},{default:c(()=>[m(d(e.lang().button.close),1)]),_:1},8,["disabled"]),a(k,{class:h(["ml-3",{"opacity-25":o(s).processing}]),disabled:o(s).processing,onClick:u},{default:c(()=>[m(d(o(s).processing?e.lang().button.save+"...":e.lang().button.save),1)]),_:1},8,["class","disabled"])])],40,B)]),_:1},8,["show"])]))}};export{O as default};
