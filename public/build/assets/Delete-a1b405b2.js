import{u as p,c as _,a as c,w as d,o as g,d as o,t,h as m,b as l,q as b,e as h}from"./app-951b8744.js";import{_ as y}from"./DangerButton-9c2de98d.js";import{_ as w,a as k}from"./SecondaryButton-327dc077.js";const x={class:"space-y-6"},v=["onSubmit"],C={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},$=["innerHTML"],B={class:"mt-6 flex justify-end"},V={__name:"Delete",props:{show:Boolean,forum:Object},emits:["close"],setup(f,{emit:n}){const r=f,s=p({}),u=()=>{var e;s.delete(route("forum.destroy",(e=r.forum)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{n("close"),s.reset()},onError:()=>null,onFinish:()=>null})};return(e,a)=>(g(),_("section",x,[c(w,{show:r.show,onClose:a[1]||(a[1]=i=>n("close")),maxWidth:"lg"},{default:d(()=>{var i;return[o("form",{class:"p-6",onSubmit:h(u,["prevent"])},[o("h2",C,t(e.lang().label.delete)+" "+t(e.lang().label.forum),1),o("p",S,[m(t(e.lang().label.delete_confirm)+" ",1),o("b",{innerHTML:(i=r.forum)==null?void 0:i.subject},null,8,$)]),o("div",B,[c(k,{disabled:l(s).processing,onClick:a[0]||(a[0]=j=>n("close"))},{default:d(()=>[m(t(e.lang().button.close),1)]),_:1},8,["disabled"]),c(y,{class:b(["ml-3",{"opacity-25":l(s).processing}]),disabled:l(s).processing,onClick:u},{default:d(()=>[m(t(l(s).processing?e.lang().button.delete+"...":e.lang().button.delete),1)]),_:1},8,["class","disabled"])])],40,v)]}),_:1},8,["show"])]))}};export{V as default};