import{u as p,B as _,c as h,a as c,w as i,o as g,d as l,t as o,b as a,h as u,q as b,e as x}from"./app-16ecd9e4.js";import{_ as y}from"./DangerButton-ccd050c2.js";import{_ as w,a as k}from"./SecondaryButton-25b4b7f1.js";const B={class:"space-y-6"},v=["onSubmit"],C=l("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Delete Forum ",-1),D={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},S={class:"mt-6 flex justify-end"},N={__name:"DeleteBulk",props:{show:Boolean,selectedId:Object},emits:["close"],setup(f,{emit:r}){const s=f,e=p({id:[]}),d=()=>{e.post(route("forum.destroy-bulk"),{preserveScroll:!0,onSuccess:()=>{r("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return _(()=>{s.show&&(e.id=s.selectedId)}),(m,t)=>(g(),h("section",B,[c(w,{show:s.show,onClose:t[1]||(t[1]=n=>r("close")),maxWidth:"lg"},{default:i(()=>{var n;return[l("form",{class:"p-6",onSubmit:x(d,["prevent"])},[C,l("p",D,o(m.lang().label.delete_confirm)+" "+o((n=s.selectedId)==null?void 0:n.length)+" forum? ",1),l("div",S,[c(k,{disabled:a(e).processing,onClick:t[0]||(t[0]=$=>r("close"))},{default:i(()=>[u(o(m.lang().button.close),1)]),_:1},8,["disabled"]),c(y,{class:b(["ml-3",{"opacity-25":a(e).processing}]),disabled:a(e).processing,onClick:d},{default:i(()=>[u(o(a(e).processing?"Delete...":"Delete"),1)]),_:1},8,["class","disabled"])])],40,v)]}),_:1},8,["show"])]))}};export{N as default};
