import{u as f,B as _,c as g,a as l,w as d,o as b,d as n,t as r,b as o,h as p,q as h,e as v}from"./app-951b8744.js";import{_ as w}from"./InputError-f5501a64.js";import{_ as y}from"./InputLabel-a43e8c5e.js";import{_ as $,a as k}from"./SecondaryButton-327dc077.js";import{_ as V}from"./PrimaryButton-92fef9db.js";import{_ as B}from"./TextInput-8396224a.js";const C={class:"space-y-6"},S=["onSubmit"],E={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},N={class:"my-6 space-y-4"},j={class:"flex justify-end"},O={__name:"Edit",props:{show:Boolean,permission:Object},emits:["close"],setup(u,{emit:i}){const t=u,e=f({name:""}),c=()=>{var s;e.put(route("permission.update",(s=t.permission)==null?void 0:s.id),{preserveScroll:!0,onSuccess:()=>{i("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return _(()=>{var s;t.show&&(e.name=(s=t.permission)==null?void 0:s.name)}),(s,a)=>(b(),g("section",C,[l($,{show:t.show,onClose:a[2]||(a[2]=m=>i("close"))},{default:d(()=>[n("form",{class:"p-6",onSubmit:v(c,["prevent"])},[n("h2",E,r(s.lang().label.edit)+" "+r(s.lang().label.permission),1),n("div",N,[n("div",null,[l(y,{for:"name",value:s.lang().label.role},null,8,["value"]),l(B,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:o(e).name,"onUpdate:modelValue":a[0]||(a[0]=m=>o(e).name=m),required:"",placeholder:s.lang().placeholder.name},null,8,["modelValue","placeholder"]),l(w,{class:"mt-2",message:o(e).errors.name},null,8,["message"])])]),n("div",j,[l(k,{disabled:o(e).processing,onClick:a[1]||(a[1]=m=>i("close"))},{default:d(()=>[p(r(s.lang().button.close),1)]),_:1},8,["disabled"]),l(V,{class:h(["ml-3",{"opacity-25":o(e).processing}]),disabled:o(e).processing,onClick:c},{default:d(()=>[p(r(o(e).processing?s.lang().button.save+"...":s.lang().button.save),1)]),_:1},8,["class","disabled"])])],40,S)]),_:1},8,["show"])]))}};export{O as default};
