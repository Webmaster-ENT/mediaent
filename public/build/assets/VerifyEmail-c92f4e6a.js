import{u,x as g,y as _,w as a,o as n,a as o,b as t,H as p,d as i,t as r,c as b,f as y,h as l,q as h,L as k,e as v}from"./app-8521b5f5.js";import{_ as x}from"./GuestLayout-eaa744e9.js";import{_ as S}from"./PrimaryButton-f193d88b.js";import"./ApplicationLogo-cde89394.js";import"./_plugin-vue_export-helper-c27b6911.js";const V={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},w={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},B=["onSubmit"],L={class:"mt-4 flex items-center justify-between"},q={__name:"VerifyEmail",props:{status:String},setup(c){const m=c,s=u(),d=()=>{s.post(route("verification.send"))},f=g(()=>m.status==="verification-link-sent");return(e,N)=>(n(),_(x,null,{default:a(()=>[o(t(p),{title:e.lang().label.email_verification},null,8,["title"]),i("div",V,r(e.lang().label.verify_email),1),t(f)?(n(),b("div",w,r(e.lang().label.verify_email_notification),1)):y("",!0),i("form",{onSubmit:v(d,["prevent"])},[i("div",L,[o(S,{class:h({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:a(()=>[l(r(t(s).processing?e.lang().button.resend_email+"...":e.lang().button.resend_email),1)]),_:1},8,["class","disabled"]),o(t(k),{href:e.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:a(()=>[l("Log Out")]),_:1},8,["href"])])],40,B)]),_:1}))}};export{q as default};
