import{u as p,g as f,a as c,w as d,o as g,d as s,e as t,t as _,b as l,n as x,f as h}from"./app-ca577fa4.js";import{_ as y}from"./DangerButton-1fef13be.js";import{_ as b,a as w}from"./SecondaryButton-47b38e23.js";const k={class:"space-y-6"},C=["onSubmit"],v=s("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Delete role ",-1),D={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},S={class:"mt-6 flex justify-end"},j={__name:"Delete",props:{show:Boolean,role:Object},emits:["close"],setup(u,{emit:r}){const a=u,e=p({}),m=()=>{var n;e.delete(route("role.destroy",(n=a.role)==null?void 0:n.id),{preserveScroll:!0,onSuccess:()=>{r("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return(n,o)=>(g(),f("section",k,[c(b,{show:a.show,onClose:o[1]||(o[1]=i=>r("close")),maxWidth:"lg"},{default:d(()=>{var i;return[s("form",{class:"p-6",onSubmit:h(m,["prevent"])},[v,s("p",D,[t(" Are you sure to delete role "),s("b",null,_((i=a.role)==null?void 0:i.name),1),t("? ")]),s("div",S,[c(w,{disabled:l(e).processing,onClick:o[0]||(o[0]=$=>r("close"))},{default:d(()=>[t(" Close ")]),_:1},8,["disabled"]),c(y,{class:x(["ml-3",{"opacity-25":l(e).processing}]),disabled:l(e).processing,onClick:m},{default:d(()=>[t(_(l(e).processing?"Delete...":"Delete"),1)]),_:1},8,["class","disabled"])])],40,C)]}),_:1},8,["show"])]))}};export{j as default};
