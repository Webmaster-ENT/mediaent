import{u as c,y as f,w as i,o as n,a as t,b as a,H as p,d as o,t as l,c as _,f as g,h as b,q as w,e as h}from"./app-16ecd9e4.js";import{_ as y}from"./GuestLayout-604474d3.js";import{_ as k}from"./InputError-861198d7.js";import{_ as v}from"./InputLabel-7d84f288.js";import{_ as V}from"./PrimaryButton-e3d881b5.js";import{_ as x}from"./TextInput-b0bc02ab.js";const $={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},B={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},N=["onSubmit"],S={class:"flex items-center justify-end mt-4"},D={__name:"ForgotPassword",props:{status:String},setup(r){const e=c({email:""}),d=()=>{e.post(route("password.email"))};return(s,m)=>(n(),f(y,null,{default:i(()=>[t(a(p),{title:s.lang().label.password_forgot},null,8,["title"]),o("div",$,l(s.lang().label.forgot_password),1),r.status?(n(),_("div",B,l(r.status),1)):g("",!0),o("form",{onSubmit:h(d,["prevent"])},[o("div",null,[t(v,{for:"email",value:s.lang().label.email},null,8,["value"]),t(x,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:a(e).email,"onUpdate:modelValue":m[0]||(m[0]=u=>a(e).email=u),required:"",autofocus:"",autocomplete:"username",placeholder:s.lang().placeholder.email},null,8,["modelValue","placeholder"]),t(k,{class:"mt-2",message:a(e).errors.email},null,8,["message"])]),o("div",S,[t(V,{class:w({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:i(()=>[b(l(a(e).processing?s.lang().button.forgot_password+"...":s.lang().button.forgot_password),1)]),_:1},8,["class","disabled"])])],40,N)]),_:1}))}};export{D as default};