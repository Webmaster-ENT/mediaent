<<<<<<< Updated upstream
<<<<<<<< HEAD:public/build/assets/DeleteUserForm-f51a7ddc.js
import{j as m,u as h,c as y,d as a,t as o,a as t,w as r,O as w,o as k,h as i,b as l,U as v,q as b}from"./app-951b8744.js";import{_}from"./DangerButton-9c2de98d.js";import{_ as x}from"./InputError-f5501a64.js";import{_ as C}from"./InputLabel-a43e8c5e.js";import{_ as U,a as V}from"./SecondaryButton-327dc077.js";import{_ as $}from"./TextInput-8396224a.js";const D={class:"space-y-6"},B={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},F={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},K={class:"p-6"},N={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},j={class:"mt-6"},E={class:"mt-6 flex justify-end"},G={__name:"DeleteUserForm",setup(I){const n=m(!1),c=m(null),s=h({password:""}),f=()=>{n.value=!0,w(()=>c.value.focus())},u=()=>{s.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>d(),onError:()=>c.value.focus(),onFinish:()=>s.reset()})},d=()=>{n.value=!1,s.reset()};return(e,p)=>(k(),y("section",D,[a("header",null,[a("h2",B,o(e.lang().profile.delete_account),1),a("p",F,o(e.lang().profile.dalete_account_caption),1)]),t(_,{onClick:f},{default:r(()=>[i(o(e.lang().button.delete_account),1)]),_:1}),t(U,{show:n.value,onClose:d},{default:r(()=>[a("div",K,[a("h2",N,o(e.lang().profile.delete_account_modal_title),1),a("p",S,o(e.lang().profile.delete_account_modal_caption),1),a("div",j,[t(C,{for:"password",value:e.lang().label.password,class:"sr-only"},null,8,["value"]),t($,{id:"password",ref_key:"passwordInput",ref:c,modelValue:l(s).password,"onUpdate:modelValue":p[0]||(p[0]=g=>l(s).password=g),type:"password",class:"mt-1 block w-full",onKeyup:v(u,["enter"]),placeholder:e.lang().placeholder.password},null,8,["modelValue","onKeyup","placeholder"]),t(x,{message:l(s).errors.password,class:"mt-2"},null,8,["message"])]),a("div",E,[t(V,{onClick:d},{default:r(()=>[i(o(e.lang().button.close),1)]),_:1}),t(_,{class:b(["ml-3",{"opacity-25":l(s).processing}]),disabled:l(s).processing,onClick:u},{default:r(()=>[i(o(l(s).processing?e.lang().button.delete_account+"...":e.lang().button.delete_account),1)]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{G as default};
========
import{j as m,u as h,c as y,d as a,t as o,a as t,w as r,O as w,o as k,h as i,b as l,U as v,q as b}from"./app-54cd0e01.js";import{_}from"./DangerButton-474e4e82.js";import{_ as x}from"./InputError-186f53b4.js";import{_ as C}from"./InputLabel-c1230c76.js";import{_ as U,a as V}from"./SecondaryButton-88dedcfc.js";import{_ as $}from"./TextInput-3391c49a.js";const D={class:"space-y-6"},B={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},F={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},K={class:"p-6"},N={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},j={class:"mt-6"},E={class:"mt-6 flex justify-end"},G={__name:"DeleteUserForm",setup(I){const n=m(!1),c=m(null),s=h({password:""}),f=()=>{n.value=!0,w(()=>c.value.focus())},u=()=>{s.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>d(),onError:()=>c.value.focus(),onFinish:()=>s.reset()})},d=()=>{n.value=!1,s.reset()};return(e,p)=>(k(),y("section",D,[a("header",null,[a("h2",B,o(e.lang().profile.delete_account),1),a("p",F,o(e.lang().profile.dalete_account_caption),1)]),t(_,{onClick:f},{default:r(()=>[i(o(e.lang().button.delete_account),1)]),_:1}),t(U,{show:n.value,onClose:d},{default:r(()=>[a("div",K,[a("h2",N,o(e.lang().profile.delete_account_modal_title),1),a("p",S,o(e.lang().profile.delete_account_modal_caption),1),a("div",j,[t(C,{for:"password",value:e.lang().label.password,class:"sr-only"},null,8,["value"]),t($,{id:"password",ref_key:"passwordInput",ref:c,modelValue:l(s).password,"onUpdate:modelValue":p[0]||(p[0]=g=>l(s).password=g),type:"password",class:"mt-1 block w-full",onKeyup:v(u,["enter"]),placeholder:e.lang().placeholder.password},null,8,["modelValue","onKeyup","placeholder"]),t(x,{message:l(s).errors.password,class:"mt-2"},null,8,["message"])]),a("div",E,[t(V,{onClick:d},{default:r(()=>[i(o(e.lang().button.close),1)]),_:1}),t(_,{class:b(["ml-3",{"opacity-25":l(s).processing}]),disabled:l(s).processing,onClick:u},{default:r(()=>[i(o(l(s).processing?e.lang().button.delete_account+"...":e.lang().button.delete_account),1)]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{G as default};
>>>>>>>> 194ef19a618395a2d7ba3951227ad70577c442cb:public/build/assets/DeleteUserForm-acd7a4ef.js
=======
import{j as m,u as h,c as y,d as a,t as o,a as t,w as r,O as w,o as k,h as i,b as l,U as v,q as b}from"./app-951b8744.js";import{_}from"./DangerButton-9c2de98d.js";import{_ as x}from"./InputError-f5501a64.js";import{_ as C}from"./InputLabel-a43e8c5e.js";import{_ as U,a as V}from"./SecondaryButton-327dc077.js";import{_ as $}from"./TextInput-8396224a.js";const D={class:"space-y-6"},B={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},F={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},K={class:"p-6"},N={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},j={class:"mt-6"},E={class:"mt-6 flex justify-end"},G={__name:"DeleteUserForm",setup(I){const n=m(!1),c=m(null),s=h({password:""}),f=()=>{n.value=!0,w(()=>c.value.focus())},u=()=>{s.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>d(),onError:()=>c.value.focus(),onFinish:()=>s.reset()})},d=()=>{n.value=!1,s.reset()};return(e,p)=>(k(),y("section",D,[a("header",null,[a("h2",B,o(e.lang().profile.delete_account),1),a("p",F,o(e.lang().profile.dalete_account_caption),1)]),t(_,{onClick:f},{default:r(()=>[i(o(e.lang().button.delete_account),1)]),_:1}),t(U,{show:n.value,onClose:d},{default:r(()=>[a("div",K,[a("h2",N,o(e.lang().profile.delete_account_modal_title),1),a("p",S,o(e.lang().profile.delete_account_modal_caption),1),a("div",j,[t(C,{for:"password",value:e.lang().label.password,class:"sr-only"},null,8,["value"]),t($,{id:"password",ref_key:"passwordInput",ref:c,modelValue:l(s).password,"onUpdate:modelValue":p[0]||(p[0]=g=>l(s).password=g),type:"password",class:"mt-1 block w-full",onKeyup:v(u,["enter"]),placeholder:e.lang().placeholder.password},null,8,["modelValue","onKeyup","placeholder"]),t(x,{message:l(s).errors.password,class:"mt-2"},null,8,["message"])]),a("div",E,[t(V,{onClick:d},{default:r(()=>[i(o(e.lang().button.close),1)]),_:1}),t(_,{class:b(["ml-3",{"opacity-25":l(s).processing}]),disabled:l(s).processing,onClick:u},{default:r(()=>[i(o(l(s).processing?e.lang().button.delete_account+"...":e.lang().button.delete_account),1)]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{G as default};
>>>>>>> Stashed changes
