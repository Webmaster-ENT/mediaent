import{u as f,c as _,a as d,w as m,o as g,d as o,t,h as a,b as n,q as b,e as k}from"./app-8521b5f5.js";import{_ as h}from"./DangerButton-98f000a0.js";import{_ as y,a as w}from"./SecondaryButton-7609af2d.js";const x={class:"space-y-6"},v=["onSubmit"],C={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},$={class:"mt-6 flex justify-end"},D={__name:"DeleteLike",props:{show:Boolean,like:Object},emits:["close"],setup(p,{emit:i}){const r=p,s=f({}),u=()=>{var e;s.delete(route("article.delete-like",(e=r.like)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{i("close"),s.reset()},onError:()=>null,onFinish:()=>null})};return(e,l)=>(g(),_("section",x,[d(y,{show:r.show,onClose:l[1]||(l[1]=c=>i("close")),maxWidth:"lg"},{default:m(()=>{var c;return[o("form",{class:"p-6",onSubmit:k(u,["prevent"])},[o("h2",C,t(e.lang().label.delete)+" "+t(e.lang().label.like),1),o("p",S,[a(t(e.lang().label.delete_confirm)+" ",1),o("b",null,t((c=r.like)==null?void 0:c.like),1),a("? ")]),o("div",$,[d(w,{disabled:n(s).processing,onClick:l[0]||(l[0]=B=>i("close"))},{default:m(()=>[a(t(e.lang().button.close),1)]),_:1},8,["disabled"]),d(h,{class:b(["ml-3",{"opacity-25":n(s).processing}]),disabled:n(s).processing,onClick:u},{default:m(()=>[a(t(n(s).processing?e.lang().button.delete+"...":e.lang().button.delete),1)]),_:1},8,["class","disabled"])])],40,v)]}),_:1},8,["show"])]))}};export{D as default};
