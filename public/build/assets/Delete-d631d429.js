import{u as f,c as _,a as d,w as m,o as g,d as o,t,h as l,b as n,q as b,e as h}from"./app-95aa28db.js";import{_ as y}from"./DangerButton-67eed0c6.js";import{_ as w,a as k}from"./SecondaryButton-7124c215.js";const x={class:"space-y-6"},v=["onSubmit"],C={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},$={class:"mt-6 flex justify-end"},D={__name:"Delete",props:{show:Boolean,article:Object},emits:["close"],setup(p,{emit:r}){const i=p,s=f({}),u=()=>{var e;s.delete(route("article.destroy",(e=i.article)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{r("close"),s.reset()},onError:()=>null,onFinish:()=>null})};return(e,a)=>(g(),_("section",x,[d(w,{show:i.show,onClose:a[1]||(a[1]=c=>r("close")),maxWidth:"lg"},{default:m(()=>{var c;return[o("form",{class:"p-6",onSubmit:h(u,["prevent"])},[o("h2",C,t(e.lang().label.delete)+" "+t(e.lang().label.article),1),o("p",S,[l(t(e.lang().label.delete_confirm)+" ",1),o("b",null,t((c=i.article)==null?void 0:c.title),1),l("? ")]),o("div",$,[d(k,{disabled:n(s).processing,onClick:a[0]||(a[0]=B=>r("close"))},{default:m(()=>[l(t(e.lang().button.close),1)]),_:1},8,["disabled"]),d(y,{class:b(["ml-3",{"opacity-25":n(s).processing}]),disabled:n(s).processing,onClick:u},{default:m(()=>[l(t(n(s).processing?e.lang().button.delete+"...":e.lang().button.delete),1)]),_:1},8,["class","disabled"])])],40,v)]}),_:1},8,["show"])]))}};export{D as default};
