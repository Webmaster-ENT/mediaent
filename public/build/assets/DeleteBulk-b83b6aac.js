import{u,A as _,g as f,a as n,w as i,o as h,d as a,t as d,b as o,e as m,n as g,f as x}from"./app-ca577fa4.js";import{_ as y}from"./DangerButton-1fef13be.js";import{_ as b,a as w}from"./SecondaryButton-47b38e23.js";const k={class:"space-y-6"},C=["onSubmit"],v=a("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Delete permission ",-1),B={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},D={class:"mt-6 flex justify-end"},V={__name:"DeleteBulk",props:{show:Boolean,selectedId:Object},emits:["close"],setup(p,{emit:l}){const s=p,e=u({id:[]}),c=()=>{e.post(route("permission.destroy-bulk"),{preserveScroll:!0,onSuccess:()=>{l("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return _(()=>{s.show&&(e.id=s.selectedId)}),(S,t)=>(h(),f("section",k,[n(b,{show:s.show,onClose:t[1]||(t[1]=r=>l("close")),maxWidth:"lg"},{default:i(()=>{var r;return[a("form",{class:"p-6",onSubmit:x(c,["prevent"])},[v,a("p",B," Are you sure to delete "+d((r=s.selectedId)==null?void 0:r.length)+" permission? ",1),a("div",D,[n(w,{disabled:o(e).processing,onClick:t[0]||(t[0]=$=>l("close"))},{default:i(()=>[m(" Close ")]),_:1},8,["disabled"]),n(y,{class:g(["ml-3",{"opacity-25":o(e).processing}]),disabled:o(e).processing,onClick:c},{default:i(()=>[m(d(o(e).processing?"Delete...":"Delete"),1)]),_:1},8,["class","disabled"])])],40,C)]}),_:1},8,["show"])]))}};export{V as default};