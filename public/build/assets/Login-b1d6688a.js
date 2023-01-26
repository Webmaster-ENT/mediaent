import{u as w,y as u,w as i,o as d,a as l,b as s,H as h,c as k,t as n,f as c,d as o,L as y,h as f,q as v,e as V}from"./app-91c3a5ed.js";import{_ as x}from"./Checkbox-c45083b3.js";import{_ as $}from"./GuestLayout-adf8483b.js";import{_ as p}from"./InputError-0524f863.js";import{_ as g}from"./InputLabel-fe425aee.js";import{_ as B}from"./PrimaryButton-8496ed43.js";import{_ as b}from"./TextInput-42ffdec0.js";import"./ApplicationLogo-5093c1a1.js";import"./_plugin-vue_export-helper-c27b6911.js";const q={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],S={class:"mt-4"},C={class:"block mt-4"},L={class:"flex items-center"},U={class:"ml-2 text-sm text-gray-600 dark:text-gray-400"},F={class:"flex items-center justify-between mt-4"},A={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(m){const e=w({email:"",password:"",remember:!1}),_=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(a,t)=>(d(),u($,null,{default:i(()=>[l(s(h),{title:a.lang().label.login},null,8,["title"]),m.status?(d(),k("div",q,n(m.status),1)):c("",!0),o("form",{onSubmit:V(_,["prevent"])},[o("div",null,[l(g,{for:"email",value:a.lang().label.email},null,8,["value"]),l(b,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=r=>s(e).email=r),required:"",autofocus:"",autocomplete:"username",placeholder:a.lang().placeholder.email},null,8,["modelValue","placeholder"]),l(p,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),o("div",S,[l(g,{for:"password",value:a.lang().label.password},null,8,["value"]),l(b,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=r=>s(e).password=r),required:"",autocomplete:"current-password",placeholder:a.lang().placeholder.password},null,8,["modelValue","placeholder"]),l(p,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),o("div",C,[o("label",L,[l(x,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=r=>s(e).remember=r)},null,8,["checked"]),o("span",U,n(a.lang().label.remember_me),1)])]),o("div",F,[m.canResetPassword?(d(),u(s(y),{key:0,href:a.route("password.request"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:i(()=>[f(n(a.lang().label.lost_password),1)]),_:1},8,["href"])):c("",!0),l(B,{class:v(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:i(()=>[f(n(s(e).processing?a.lang().button.login+"...":a.lang().button.login),1)]),_:1},8,["class","disabled"])])],40,N)]),_:1}))}};export{A as default};
