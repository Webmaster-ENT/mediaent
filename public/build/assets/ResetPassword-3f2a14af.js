<<<<<<<< HEAD:public/build/assets/ResetPassword-9f2bdf90.js
import{u as f,y as w,w as p,o as _,a,b as e,H as g,d as t,h as b,t as h,q as V,e as v}from"./app-951b8744.js";import{_ as k}from"./GuestLayout-b7b91f79.js";import{_ as n}from"./InputError-f5501a64.js";import{_ as i}from"./InputLabel-a43e8c5e.js";import{_ as y}from"./PrimaryButton-92fef9db.js";import{_ as m}from"./TextInput-8396224a.js";import"./ApplicationLogo-0cee92e4.js";import"./_plugin-vue_export-helper-c27b6911.js";const S=["onSubmit"],$={class:"mt-4"},q={class:"mt-4"},B={class:"flex items-center justify-end mt-4"},M={__name:"ResetPassword",props:{email:String,token:String},setup(u){const d=u,s=f({token:d.token,email:d.email,password:"",password_confirmation:""}),c=()=>{s.post(route("password.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return(o,l)=>(_(),w(k,null,{default:p(()=>[a(e(g),{title:o.lang().label.reset_password},null,8,["title"]),t("form",{onSubmit:v(c,["prevent"])},[t("div",null,[a(i,{for:"email",value:o.lang().label.email},null,8,["value"]),a(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":l[0]||(l[0]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username",placeholder:o.lang().placeholder.email},null,8,["modelValue","placeholder"]),a(n,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",$,[a(i,{for:"password",value:o.lang().label.password},null,8,["value"]),a(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":l[1]||(l[1]=r=>e(s).password=r),required:"",autocomplete:"new-password",placeholder:o.lang().placeholder.password},null,8,["modelValue","placeholder"]),a(n,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",q,[a(i,{for:"password_confirmation",value:o.lang().label.password_confirmation},null,8,["value"]),a(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":l[2]||(l[2]=r=>e(s).password_confirmation=r),required:"",autocomplete:"new-password",placeholder:o.lang().placeholder.password_confirmation},null,8,["modelValue","placeholder"]),a(n,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",B,[a(y,{class:V({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:p(()=>[b(h(e(s).processing?o.lang().button.reset_password+"...":o.lang().button.reset_password),1)]),_:1},8,["class","disabled"])])],40,S)]),_:1}))}};export{M as default};
========
import{u as f,y as w,w as p,o as _,a,b as e,H as g,d as t,h as b,t as h,q as V,e as v}from"./app-54cd0e01.js";import{_ as k}from"./GuestLayout-bacaf802.js";import{_ as n}from"./InputError-186f53b4.js";import{_ as i}from"./InputLabel-c1230c76.js";import{_ as y}from"./PrimaryButton-93146dfe.js";import{_ as m}from"./TextInput-3391c49a.js";import"./ApplicationLogo-c0b38ff1.js";import"./_plugin-vue_export-helper-c27b6911.js";const S=["onSubmit"],$={class:"mt-4"},q={class:"mt-4"},B={class:"flex items-center justify-end mt-4"},M={__name:"ResetPassword",props:{email:String,token:String},setup(u){const d=u,s=f({token:d.token,email:d.email,password:"",password_confirmation:""}),c=()=>{s.post(route("password.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return(o,l)=>(_(),w(k,null,{default:p(()=>[a(e(g),{title:o.lang().label.reset_password},null,8,["title"]),t("form",{onSubmit:v(c,["prevent"])},[t("div",null,[a(i,{for:"email",value:o.lang().label.email},null,8,["value"]),a(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":l[0]||(l[0]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username",placeholder:o.lang().placeholder.email},null,8,["modelValue","placeholder"]),a(n,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",$,[a(i,{for:"password",value:o.lang().label.password},null,8,["value"]),a(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":l[1]||(l[1]=r=>e(s).password=r),required:"",autocomplete:"new-password",placeholder:o.lang().placeholder.password},null,8,["modelValue","placeholder"]),a(n,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",q,[a(i,{for:"password_confirmation",value:o.lang().label.password_confirmation},null,8,["value"]),a(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":l[2]||(l[2]=r=>e(s).password_confirmation=r),required:"",autocomplete:"new-password",placeholder:o.lang().placeholder.password_confirmation},null,8,["modelValue","placeholder"]),a(n,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",B,[a(y,{class:V({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:p(()=>[b(h(e(s).processing?o.lang().button.reset_password+"...":o.lang().button.reset_password),1)]),_:1},8,["class","disabled"])])],40,S)]),_:1}))}};export{M as default};
>>>>>>>> 194ef19a618395a2d7ba3951227ad70577c442cb:public/build/assets/ResetPassword-3f2a14af.js