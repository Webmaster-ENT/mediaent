import{u as p,B as g,c as _,a as i,w as c,o as b,d as a,t,b as n,h as u,q as h,e as y}from"./app-95aa28db.js";import{_ as w}from"./DangerButton-67eed0c6.js";import{_ as k,a as B}from"./SecondaryButton-7124c215.js";const v={class:"space-y-6"},x=["onSubmit"],C={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},$={class:"mt-6 flex justify-end"},j={__name:"DeleteBulk",props:{show:Boolean,selectedId:Object},emits:["close"],setup(f,{emit:r}){const o=f,e=p({id:[]}),m=()=>{e.post(route("role.destroy-bulk"),{preserveScroll:!0,onSuccess:()=>{r("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return g(()=>{o.show&&(e.id=o.selectedId)}),(s,l)=>(b(),_("section",v,[i(k,{show:o.show,onClose:l[1]||(l[1]=d=>r("close")),maxWidth:"lg"},{default:c(()=>{var d;return[a("form",{class:"p-6",onSubmit:y(m,["prevent"])},[a("h2",C,t(s.lang().label.delete)+" "+t(s.lang().label.role),1),a("p",S,t(s.lang().label.delete_confirm)+" "+t((d=o.selectedId)==null?void 0:d.length)+" "+t(s.lang().label.role)+"? ",1),a("div",$,[i(B,{disabled:n(e).processing,onClick:l[0]||(l[0]=E=>r("close"))},{default:c(()=>[u(t(s.lang().button.close),1)]),_:1},8,["disabled"]),i(w,{class:h(["ml-3",{"opacity-25":n(e).processing}]),disabled:n(e).processing,onClick:m},{default:c(()=>[u(t(n(e).processing?s.lang().button.delete+"...":s.lang().button.delete),1)]),_:1},8,["class","disabled"])])],40,x)]}),_:1},8,["show"])]))}};export{j as default};
