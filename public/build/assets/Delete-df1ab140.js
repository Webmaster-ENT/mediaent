import{u as f,c as _,a as c,w as u,o as g,d as o,t,h as l,b as n,q as b,e as h}from"./app-95aa28db.js";import{_ as y}from"./DangerButton-67eed0c6.js";import{_ as w,a as k}from"./SecondaryButton-7124c215.js";const x={class:"space-y-6"},v=["onSubmit"],C={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},$={class:"mt-6 flex justify-end"},D={__name:"Delete",props:{show:Boolean,user:Object},emits:["close"],setup(p,{emit:r}){const i=p,s=f({}),m=()=>{var e;s.delete(route("user.destroy",(e=i.user)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{r("close"),s.reset()},onError:()=>null,onFinish:()=>null})};return(e,a)=>(g(),_("section",x,[c(w,{show:i.show,onClose:a[1]||(a[1]=d=>r("close")),maxWidth:"lg"},{default:u(()=>{var d;return[o("form",{class:"p-6",onSubmit:h(m,["prevent"])},[o("h2",C,t(e.lang().label.delete)+" "+t(e.lang().label.user),1),o("p",S,[l(t(e.lang().label.delete_confirm)+" ",1),o("b",null,t((d=i.user)==null?void 0:d.name),1),l("? ")]),o("div",$,[c(k,{disabled:n(s).processing,onClick:a[0]||(a[0]=B=>r("close"))},{default:u(()=>[l(t(e.lang().button.close),1)]),_:1},8,["disabled"]),c(y,{class:b(["ml-3",{"opacity-25":n(s).processing}]),disabled:n(s).processing,onClick:m},{default:u(()=>[l(t(n(s).processing?e.lang().button.delete+"...":e.lang().button.delete),1)]),_:1},8,["class","disabled"])])],40,v)]}),_:1},8,["show"])]))}};export{D as default};
