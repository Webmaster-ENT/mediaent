import{u as m,y as p,w as t,o as c,a as e,b as a,H as u,d as r,t as n,h as f,q as _,e as w}from"./app-ad1d24c1.js";import{_ as g}from"./GuestLayout-3d651f77.js";import{_ as b}from"./InputError-e54aa13f.js";import{_ as h}from"./InputLabel-ac9c143b.js";import{_ as y}from"./PrimaryButton-33e11b17.js";import{_ as v}from"./TextInput-6c84fad4.js";const V={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},$=["onSubmit"],k={class:"flex justify-end mt-4"},H={__name:"ConfirmPassword",setup(B){const s=m({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(o,l)=>(c(),p(g,null,{default:t(()=>[e(a(u),{title:o.lang().label.password_confirmation},null,8,["title"]),r("div",V,n(o.lang().label.confirm_password),1),r("form",{onSubmit:w(i,["prevent"])},[r("div",null,[e(h,{for:"password",value:o.lang().label.password},null,8,["value"]),e(v,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":l[0]||(l[0]=d=>a(s).password=d),required:"",autocomplete:"current-password",autofocus:"",placeholder:o.lang().placeholder.password},null,8,["modelValue","placeholder"]),e(b,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),r("div",k,[e(y,{class:_(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>[f(n(a(s).processing?o.lang().button.confirm_password+"...":o.lang().button.confirm_password),1)]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{H as default};
