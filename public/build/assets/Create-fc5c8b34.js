import{u as p,c as _,a as t,w as i,o as b,d as a,b as e,h as m,t as d,q as g,e as h}from"./app-95aa28db.js";import{_ as v}from"./InputError-a4ea7e03.js";import{_ as w}from"./InputLabel-da99fe39.js";import{_ as y,a as $}from"./SecondaryButton-7124c215.js";import{_ as j}from"./PrimaryButton-4d03a84c.js";import{_ as k}from"./Ckeditor-c9fac5e7.js";import"./Ckeditor.vue_vue_type_style_index_0_lang-26af85cd.js";const C={class:"space-y-6"},V=["onSubmit"],x=a("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Add Forum ",-1),S={class:"my-6 space-y-4"},B={class:"flex justify-end"},I={__name:"Create",props:{show:Boolean},emits:["close"],setup(u,{emit:l}){const f=u,s=p({subject:""}),c=()=>{s.post(route("forum.store"),{preserveScroll:!0,onSuccess:()=>{l("close"),s.reset()},onError:()=>null,onFinish:()=>null})};return(r,o)=>(b(),_("section",C,[t(y,{show:f.show,onClose:o[2]||(o[2]=n=>l("close"))},{default:i(()=>[a("form",{class:"p-6",onSubmit:h(c,["prevent"])},[x,a("div",S,[a("div",null,[t(w,{for:"subject",value:"Isi Forum"}),t(k,{id:"subject",class:"mt-1 block w-full",modelValue:e(s).subject,"onUpdate:modelValue":o[0]||(o[0]=n=>e(s).subject=n),required:""},null,8,["modelValue"]),t(v,{class:"mt-2",message:e(s).errors.subject},null,8,["message"])])]),a("div",B,[t($,{disabled:e(s).processing,onClick:o[1]||(o[1]=n=>l("close"))},{default:i(()=>[m(d(r.lang().button.close),1)]),_:1},8,["disabled"]),t(j,{class:g(["ml-3",{"opacity-25":e(s).processing}]),disabled:e(s).processing,onClick:c},{default:i(()=>[m(d(e(s).processing?r.lang().button.add+"...":r.lang().button.add),1)]),_:1},8,["class","disabled"])])],40,V)]),_:1},8,["show"])]))}};export{I as default};
