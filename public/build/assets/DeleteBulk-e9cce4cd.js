import{u as p,O as _,c as g,b as c,w as d,o as b,a,t as s,d as n,e as u,s as h,f as y}from"./app-4fc0b334.js";import{_ as w}from"./DangerButton-d2e891f3.js";import{_ as k,a as x}from"./SecondaryButton-48f2d563.js";const v={class:"space-y-6"},B=["onSubmit"],C={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},$={class:"mt-6 flex justify-end"},V={__name:"DeleteBulk",props:{show:Boolean,selectedId:Object},emits:["close"],setup(f,{emit:r}){const o=f,e=p({id:[]}),m=()=>{e.post(route("user.destroy-bulk"),{preserveScroll:!0,onSuccess:()=>{r("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return _(()=>{o.show&&(e.id=o.selectedId)}),(t,l)=>(b(),g("section",v,[c(k,{show:o.show,onClose:l[1]||(l[1]=i=>r("close")),maxWidth:"lg"},{default:d(()=>{var i;return[a("form",{class:"p-6",onSubmit:y(m,["prevent"])},[a("h2",C,s(t.lang().label.delete)+" "+s(t.lang().label.user),1),a("p",S,s(t.lang().label.delete_confirm)+" "+s((i=o.selectedId)==null?void 0:i.length)+" "+s(t.lang().label.user)+"? ",1),a("div",$,[c(x,{disabled:n(e).processing,onClick:l[0]||(l[0]=D=>r("close"))},{default:d(()=>[u(s(t.lang().button.close),1)]),_:1},8,["disabled"]),c(w,{class:h(["ml-3",{"opacity-25":n(e).processing}]),disabled:n(e).processing,onClick:m},{default:d(()=>[u(s(n(e).processing?"Delete...":"Delete"),1)]),_:1},8,["class","disabled"])])],40,B)]}),_:1},8,["show"])]))}};export{V as default};
