<<<<<<< HEAD:public/build/assets/UpdateProfileInformationForm-66bcda5c.js
<<<<<<< Updated upstream
<<<<<<<< HEAD:public/build/assets/UpdateProfileInformationForm-66bcda5c.js
import{V as k,u as x,c as m,d as s,t as o,a as l,b as a,h as u,w as d,g as V,z as b,f as p,q as w,T as S,e as B,o as f,L as N}from"./app-951b8744.js";import{_ as g}from"./InputError-f5501a64.js";import{_}from"./InputLabel-a43e8c5e.js";import{_ as $}from"./PrimaryButton-92fef9db.js";import{_ as v}from"./TextInput-8396224a.js";const q={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},C={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},E=["onSubmit"],P={key:0},T={class:"text-sm mt-2 text-gray-800 dark:text-gray-200"},U={class:"flex items-center gap-4"},z={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},j={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:Boolean,status:String},setup(y){const c=y,i=k().props.value.auth.user,t=x({name:i.name,email:i.email}),h=()=>{t.patch(route("profile.update"),{preserveScroll:!0})};return(e,r)=>(f(),m("section",null,[s("header",null,[s("h2",q,o(e.lang().profile.profile_information),1),s("p",C,o(e.lang().profile.update_profile),1)]),s("form",{onSubmit:B(h,["prevent"]),class:"mt-6 space-y-6"},[s("div",null,[l(_,{for:"name",value:e.lang().label.name},null,8,["value"]),l(v,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:a(t).name,"onUpdate:modelValue":r[0]||(r[0]=n=>a(t).name=n),required:"",autofocus:"",autocomplete:"name",placeholder:e.lang().placeholder.name},null,8,["modelValue","placeholder"]),l(g,{class:"mt-2",message:a(t).errors.name},null,8,["message"])]),s("div",null,[l(_,{for:"email",value:e.lang().label.email},null,8,["value"]),l(v,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:a(t).email,"onUpdate:modelValue":r[1]||(r[1]=n=>a(t).email=n),required:"",autocomplete:"email",placeholder:e.lang().placeholder.email},null,8,["modelValue","placeholder"]),l(g,{class:"mt-2",message:a(t).errors.email},null,8,["message"])]),c.mustVerifyEmail&&a(i).email_verified_at===null?(f(),m("div",P,[s("p",T,[u(o(e.lang().profile.unverified_email)+" ",1),l(a(N),{href:e.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:d(()=>[u(o(e.lang().profile.resend_email_verification),1)]),_:1},8,["href"])]),V(s("div",{class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},o(e.lang().profile.sent_verification_email),513),[[b,c.status==="verification-link-sent"]])])):p("",!0),s("div",U,[l($,{class:w({"opacity-25":a(t).processing}),disabled:a(t).processing},{default:d(()=>[u(o(a(t).processing?e.lang().button.save+"...":e.lang().button.save),1)]),_:1},8,["class","disabled"]),l(S,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:d(()=>[a(t).recentlySuccessful?(f(),m("p",z,o(e.lang().profile.saved),1)):p("",!0)]),_:1})])],40,E)]))}};export{j as default};
========
import{V as k,u as x,c as m,d as s,t as o,a as l,b as a,h as u,w as d,g as V,z as b,f as p,q as w,T as S,e as B,o as f,L as N}from"./app-54cd0e01.js";import{_ as g}from"./InputError-186f53b4.js";import{_}from"./InputLabel-c1230c76.js";import{_ as $}from"./PrimaryButton-93146dfe.js";import{_ as v}from"./TextInput-3391c49a.js";const q={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},C={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},E=["onSubmit"],P={key:0},T={class:"text-sm mt-2 text-gray-800 dark:text-gray-200"},U={class:"flex items-center gap-4"},z={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},j={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:Boolean,status:String},setup(y){const c=y,i=k().props.value.auth.user,t=x({name:i.name,email:i.email}),h=()=>{t.patch(route("profile.update"),{preserveScroll:!0})};return(e,r)=>(f(),m("section",null,[s("header",null,[s("h2",q,o(e.lang().profile.profile_information),1),s("p",C,o(e.lang().profile.update_profile),1)]),s("form",{onSubmit:B(h,["prevent"]),class:"mt-6 space-y-6"},[s("div",null,[l(_,{for:"name",value:e.lang().label.name},null,8,["value"]),l(v,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:a(t).name,"onUpdate:modelValue":r[0]||(r[0]=n=>a(t).name=n),required:"",autofocus:"",autocomplete:"name",placeholder:e.lang().placeholder.name},null,8,["modelValue","placeholder"]),l(g,{class:"mt-2",message:a(t).errors.name},null,8,["message"])]),s("div",null,[l(_,{for:"email",value:e.lang().label.email},null,8,["value"]),l(v,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:a(t).email,"onUpdate:modelValue":r[1]||(r[1]=n=>a(t).email=n),required:"",autocomplete:"email",placeholder:e.lang().placeholder.email},null,8,["modelValue","placeholder"]),l(g,{class:"mt-2",message:a(t).errors.email},null,8,["message"])]),c.mustVerifyEmail&&a(i).email_verified_at===null?(f(),m("div",P,[s("p",T,[u(o(e.lang().profile.unverified_email)+" ",1),l(a(N),{href:e.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:d(()=>[u(o(e.lang().profile.resend_email_verification),1)]),_:1},8,["href"])]),V(s("div",{class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},o(e.lang().profile.sent_verification_email),513),[[b,c.status==="verification-link-sent"]])])):p("",!0),s("div",U,[l($,{class:w({"opacity-25":a(t).processing}),disabled:a(t).processing},{default:d(()=>[u(o(a(t).processing?e.lang().button.save+"...":e.lang().button.save),1)]),_:1},8,["class","disabled"]),l(S,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:d(()=>[a(t).recentlySuccessful?(f(),m("p",z,o(e.lang().profile.saved),1)):p("",!0)]),_:1})])],40,E)]))}};export{j as default};
>>>>>>>> 194ef19a618395a2d7ba3951227ad70577c442cb:public/build/assets/UpdateProfileInformationForm-5da9e43a.js
=======
import{V as k,u as x,c as m,d as s,t as o,a as l,b as a,h as u,w as d,g as V,z as b,f as p,q as w,T as S,e as B,o as f,L as N}from"./app-951b8744.js";import{_ as g}from"./InputError-f5501a64.js";import{_}from"./InputLabel-a43e8c5e.js";import{_ as $}from"./PrimaryButton-92fef9db.js";import{_ as v}from"./TextInput-8396224a.js";const q={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},C={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},E=["onSubmit"],P={key:0},T={class:"text-sm mt-2 text-gray-800 dark:text-gray-200"},U={class:"flex items-center gap-4"},z={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},j={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:Boolean,status:String},setup(y){const c=y,i=k().props.value.auth.user,t=x({name:i.name,email:i.email}),h=()=>{t.patch(route("profile.update"),{preserveScroll:!0})};return(e,r)=>(f(),m("section",null,[s("header",null,[s("h2",q,o(e.lang().profile.profile_information),1),s("p",C,o(e.lang().profile.update_profile),1)]),s("form",{onSubmit:B(h,["prevent"]),class:"mt-6 space-y-6"},[s("div",null,[l(_,{for:"name",value:e.lang().label.name},null,8,["value"]),l(v,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:a(t).name,"onUpdate:modelValue":r[0]||(r[0]=n=>a(t).name=n),required:"",autofocus:"",autocomplete:"name",placeholder:e.lang().placeholder.name},null,8,["modelValue","placeholder"]),l(g,{class:"mt-2",message:a(t).errors.name},null,8,["message"])]),s("div",null,[l(_,{for:"email",value:e.lang().label.email},null,8,["value"]),l(v,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:a(t).email,"onUpdate:modelValue":r[1]||(r[1]=n=>a(t).email=n),required:"",autocomplete:"email",placeholder:e.lang().placeholder.email},null,8,["modelValue","placeholder"]),l(g,{class:"mt-2",message:a(t).errors.email},null,8,["message"])]),c.mustVerifyEmail&&a(i).email_verified_at===null?(f(),m("div",P,[s("p",T,[u(o(e.lang().profile.unverified_email)+" ",1),l(a(N),{href:e.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:d(()=>[u(o(e.lang().profile.resend_email_verification),1)]),_:1},8,["href"])]),V(s("div",{class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},o(e.lang().profile.sent_verification_email),513),[[b,c.status==="verification-link-sent"]])])):p("",!0),s("div",U,[l($,{class:w({"opacity-25":a(t).processing}),disabled:a(t).processing},{default:d(()=>[u(o(a(t).processing?e.lang().button.save+"...":e.lang().button.save),1)]),_:1},8,["class","disabled"]),l(S,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:d(()=>[a(t).recentlySuccessful?(f(),m("p",z,o(e.lang().profile.saved),1)):p("",!0)]),_:1})])],40,E)]))}};export{j as default};
>>>>>>> Stashed changes
=======
import{V as k,u as x,c as m,d as s,t as o,a as l,b as a,h as u,w as d,g as V,z as b,f as p,q as w,T as S,e as B,o as f,L as N}from"./app-728b89d2.js";import{_ as g}from"./InputError-cefd0f0a.js";import{_}from"./InputLabel-578fc447.js";import{_ as $}from"./PrimaryButton-3c1c600e.js";import{_ as v}from"./TextInput-427e4c6b.js";const q={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},C={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},E=["onSubmit"],P={key:0},T={class:"text-sm mt-2 text-gray-800 dark:text-gray-200"},U={class:"flex items-center gap-4"},z={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},j={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:Boolean,status:String},setup(y){const c=y,i=k().props.value.auth.user,t=x({name:i.name,email:i.email}),h=()=>{t.patch(route("profile.update"),{preserveScroll:!0})};return(e,r)=>(f(),m("section",null,[s("header",null,[s("h2",q,o(e.lang().profile.profile_information),1),s("p",C,o(e.lang().profile.update_profile),1)]),s("form",{onSubmit:B(h,["prevent"]),class:"mt-6 space-y-6"},[s("div",null,[l(_,{for:"name",value:e.lang().label.name},null,8,["value"]),l(v,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:a(t).name,"onUpdate:modelValue":r[0]||(r[0]=n=>a(t).name=n),required:"",autofocus:"",autocomplete:"name",placeholder:e.lang().placeholder.name},null,8,["modelValue","placeholder"]),l(g,{class:"mt-2",message:a(t).errors.name},null,8,["message"])]),s("div",null,[l(_,{for:"email",value:e.lang().label.email},null,8,["value"]),l(v,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:a(t).email,"onUpdate:modelValue":r[1]||(r[1]=n=>a(t).email=n),required:"",autocomplete:"email",placeholder:e.lang().placeholder.email},null,8,["modelValue","placeholder"]),l(g,{class:"mt-2",message:a(t).errors.email},null,8,["message"])]),c.mustVerifyEmail&&a(i).email_verified_at===null?(f(),m("div",P,[s("p",T,[u(o(e.lang().profile.unverified_email)+" ",1),l(a(N),{href:e.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:d(()=>[u(o(e.lang().profile.resend_email_verification),1)]),_:1},8,["href"])]),V(s("div",{class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},o(e.lang().profile.sent_verification_email),513),[[b,c.status==="verification-link-sent"]])])):p("",!0),s("div",U,[l($,{class:w({"opacity-25":a(t).processing}),disabled:a(t).processing},{default:d(()=>[u(o(a(t).processing?e.lang().button.save+"...":e.lang().button.save),1)]),_:1},8,["class","disabled"]),l(S,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:d(()=>[a(t).recentlySuccessful?(f(),m("p",z,o(e.lang().profile.saved),1)):p("",!0)]),_:1})])],40,E)]))}};export{j as default};
>>>>>>> acabfee555d0c6a341cb64a54654ddac7323d6a7:public/build/assets/UpdateProfileInformationForm-b7758ee1.js