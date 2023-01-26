import{u,B as _,c as h,a as i,w as c,o as g,d as l,t as o,b as a,h as f,q as b,e as x}from"./app-91c3a5ed.js";import{_ as y}from"./DangerButton-834ae98d.js";import{_ as w,a as k}from"./SecondaryButton-3c3e149e.js";const v={class:"space-y-6"},B=["onSubmit"],C=l("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Delete Video Url ",-1),D={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},S={class:"mt-6 flex justify-end"},N={__name:"DeleteBulk",props:{show:Boolean,selectedId:Object},emits:["close"],setup(p,{emit:n}){const s=p,e=u({id:[]}),d=()=>{e.post(route("video.destroy-bulk"),{preserveScroll:!0,onSuccess:()=>{n("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return _(()=>{s.show&&(e.id=s.selectedId)}),(m,t)=>(g(),h("section",v,[i(w,{show:s.show,onClose:t[1]||(t[1]=r=>n("close")),maxWidth:"lg"},{default:c(()=>{var r;return[l("form",{class:"p-6",onSubmit:x(d,["prevent"])},[C,l("p",D,o(m.lang().label.delete_confirm)+" "+o((r=s.selectedId)==null?void 0:r.length)+" video? ",1),l("div",S,[i(k,{disabled:a(e).processing,onClick:t[0]||(t[0]=$=>n("close"))},{default:c(()=>[f(o(m.lang().button.close),1)]),_:1},8,["disabled"]),i(y,{class:b(["ml-3",{"opacity-25":a(e).processing}]),disabled:a(e).processing,onClick:d},{default:c(()=>[f(o(a(e).processing?"Delete...":"Delete"),1)]),_:1},8,["class","disabled"])])],40,B)]}),_:1},8,["show"])]))}};export{N as default};
