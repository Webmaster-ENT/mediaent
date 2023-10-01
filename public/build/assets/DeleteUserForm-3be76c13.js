import{j as m,u as h,c as y,d as a,t as o,a as t,w as r,O as w,o as k,h as i,b as l,V as v,q as b}from"./app-4f4f8535.js";import{_}from"./DangerButton-a6810478.js";import{_ as x}from"./InputError-7d6c9017.js";import{_ as V}from"./InputLabel-f63dd6a1.js";import{_ as C,a as $}from"./SecondaryButton-9bd214e2.js";import{_ as U}from"./TextInput-ff7ff328.js";const D={class:"space-y-6"},B={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},F={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},K={class:"p-6"},N={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},j={class:"mt-6"},E={class:"mt-6 flex justify-end"},G={__name:"DeleteUserForm",setup(I){const n=m(!1),c=m(null),s=h({password:""}),f=()=>{n.value=!0,w(()=>c.value.focus())},u=()=>{s.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>d(),onError:()=>c.value.focus(),onFinish:()=>s.reset()})},d=()=>{n.value=!1,s.reset()};return(e,p)=>(k(),y("section",D,[a("header",null,[a("h2",B,o(e.lang().profile.delete_account),1),a("p",F,o(e.lang().profile.dalete_account_caption),1)]),t(_,{onClick:f},{default:r(()=>[i(o(e.lang().button.delete_account),1)]),_:1}),t(C,{show:n.value,onClose:d},{default:r(()=>[a("div",K,[a("h2",N,o(e.lang().profile.delete_account_modal_title),1),a("p",S,o(e.lang().profile.delete_account_modal_caption),1),a("div",j,[t(V,{for:"password",value:e.lang().label.password,class:"sr-only"},null,8,["value"]),t(U,{id:"password",ref_key:"passwordInput",ref:c,modelValue:l(s).password,"onUpdate:modelValue":p[0]||(p[0]=g=>l(s).password=g),type:"password",class:"mt-1 block w-full",onKeyup:v(u,["enter"]),placeholder:e.lang().placeholder.password},null,8,["modelValue","onKeyup","placeholder"]),t(x,{message:l(s).errors.password,class:"mt-2"},null,8,["message"])]),a("div",E,[t($,{onClick:d},{default:r(()=>[i(o(e.lang().button.close),1)]),_:1}),t(_,{class:b(["ml-3",{"opacity-25":l(s).processing}]),disabled:l(s).processing,onClick:u},{default:r(()=>[i(o(l(s).processing?e.lang().button.delete_account+"...":e.lang().button.delete_account),1)]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{G as default};
