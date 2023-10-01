import{u as p,B as _,c as h,a as c,w as i,o as b,d as l,t as o,b as a,h as u,q as g,e as x}from"./app-4f4f8535.js";import{_ as y}from"./DangerButton-a6810478.js";import{_ as w,a as k}from"./SecondaryButton-9bd214e2.js";const B={class:"space-y-6"},v=["onSubmit"],C=l("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Delete article ",-1),D={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},S={class:"mt-6 flex justify-end"},V={__name:"DeleteBulk",props:{show:Boolean,selectedId:Object},emits:["close"],setup(f,{emit:n}){const s=f,e=p({id:[],thumbnail:[]}),d=()=>{e.post(route("article.destroy-bulk"),{preserveScroll:!0,onSuccess:()=>{n("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return _(()=>{s.show&&(e.id=s.selectedId,e.thumbnail=s.selectedThumbnail)}),(m,t)=>(b(),h("section",B,[c(w,{show:s.show,onClose:t[1]||(t[1]=r=>n("close")),maxWidth:"lg"},{default:i(()=>{var r;return[l("form",{class:"p-6",onSubmit:x(d,["prevent"])},[C,l("p",D,o(m.lang().label.delete_confirm)+" "+o((r=s.selectedId)==null?void 0:r.length)+" article? ",1),l("div",S,[c(k,{disabled:a(e).processing,onClick:t[0]||(t[0]=$=>n("close"))},{default:i(()=>[u(o(m.lang().button.close),1)]),_:1},8,["disabled"]),c(y,{class:g(["ml-3",{"opacity-25":a(e).processing}]),disabled:a(e).processing,onClick:d},{default:i(()=>[u(o(a(e).processing?"Delete...":"Delete"),1)]),_:1},8,["class","disabled"])])],40,v)]}),_:1},8,["show"])]))}};export{V as default};
