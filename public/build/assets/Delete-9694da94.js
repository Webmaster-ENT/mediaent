import{u as f,c as _,b as c,w as m,o as g,a as t,t as o,e as l,d as n,q as b,f as h}from"./app-12de82bd.js";import{_ as y}from"./DangerButton-5f98da71.js";import{_ as w,a as k}from"./SecondaryButton-546acdf2.js";const x={class:"space-y-6"},v=["onSubmit"],C={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},$={class:"mt-6 flex justify-end"},D={__name:"Delete",props:{show:Boolean,permission:Object},emits:["close"],setup(u,{emit:r}){const i=u,s=f({}),p=()=>{var e;s.delete(route("permission.destroy",(e=i.permission)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{r("close"),s.reset()},onError:()=>null,onFinish:()=>null})};return(e,a)=>(g(),_("section",x,[c(w,{show:i.show,onClose:a[1]||(a[1]=d=>r("close")),maxWidth:"lg"},{default:m(()=>{var d;return[t("form",{class:"p-6",onSubmit:h(p,["prevent"])},[t("h2",C,o(e.lang().label.delete)+" "+o(e.lang().label.permission),1),t("p",S,[l(o(e.lang().label.delete_confirm)+" ",1),t("b",null,o((d=i.permission)==null?void 0:d.name),1),l("? ")]),t("div",$,[c(k,{disabled:n(s).processing,onClick:a[0]||(a[0]=B=>r("close"))},{default:m(()=>[l(o(e.lang().button.close),1)]),_:1},8,["disabled"]),c(y,{class:b(["ml-3",{"opacity-25":n(s).processing}]),disabled:n(s).processing,onClick:p},{default:m(()=>[l(o(n(s).processing?e.lang().button.delete+"...":e.lang().button.delete),1)]),_:1},8,["class","disabled"])])],40,v)]}),_:1},8,["show"])]))}};export{D as default};
