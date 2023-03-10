import{j as m,u as v,c as w,d as o,t as n,a as r,b as e,w as f,q as y,T as h,e as V,o as _,h as b,f as k}from"./app-8521b5f5.js";import{_ as d}from"./InputError-f52356e1.js";import{_ as p}from"./InputLabel-7bb2fd7b.js";import{_ as S}from"./PrimaryButton-f193d88b.js";import{_ as u}from"./TextInput-f4d5a70c.js";const I={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},N={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},P=["onSubmit"],U={class:"flex items-center gap-4"},$={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},j={__name:"UpdatePasswordForm",setup(x){const c=m(null),i=m(null),s=v({current_password:"",password:"",password_confirmation:""}),g=()=>{s.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),c.value.focus()),s.errors.current_password&&(s.reset("current_password"),i.value.focus())}})};return(a,l)=>(_(),w("section",null,[o("header",null,[o("h2",I,n(a.lang().profile.update_password),1),o("p",N,n(a.lang().profile.update_password_caption),1)]),o("form",{onSubmit:V(g,["prevent"]),class:"mt-6 space-y-6"},[o("div",null,[r(p,{for:"current_password",value:a.lang().profile.current_password},null,8,["value"]),r(u,{id:"current_password",ref_key:"currentPasswordInput",ref:i,modelValue:e(s).current_password,"onUpdate:modelValue":l[0]||(l[0]=t=>e(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password",placeholder:a.lang().placeholder.password},null,8,["modelValue","placeholder"]),r(d,{message:e(s).errors.current_password,class:"mt-2"},null,8,["message"])]),o("div",null,[r(p,{for:"password",value:a.lang().profile.new_password},null,8,["value"]),r(u,{id:"password",ref_key:"passwordInput",ref:c,modelValue:e(s).password,"onUpdate:modelValue":l[1]||(l[1]=t=>e(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password",placeholder:a.lang().placeholder.password},null,8,["modelValue","placeholder"]),r(d,{message:e(s).errors.password,class:"mt-2"},null,8,["message"])]),o("div",null,[r(p,{for:"password_confirmation",value:a.lang().label.password_confirmation},null,8,["value"]),r(u,{id:"password_confirmation",modelValue:e(s).password_confirmation,"onUpdate:modelValue":l[2]||(l[2]=t=>e(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password",placeholder:a.lang().placeholder.password},null,8,["modelValue","placeholder"]),r(d,{message:e(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),o("div",U,[r(S,{class:y({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:f(()=>[b(n(e(s).processing?a.lang().button.save+"...":a.lang().button.save),1)]),_:1},8,["class","disabled"]),r(h,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:f(()=>[e(s).recentlySuccessful?(_(),w("p",$,n(a.lang().profile.saved),1)):k("",!0)]),_:1})])],40,P)]))}};export{j as default};
