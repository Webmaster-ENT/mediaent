import{u as f,c as _,a as c,w as m,o as g,d as t,t as o,h as l,b as n,q as b,e as h}from"./app-31bf2fcd.js";import{_ as v}from"./DangerButton-53b0bd49.js";import{_ as y,a as w}from"./SecondaryButton-03bbd897.js";const k={class:"space-y-6"},x=["onSubmit"],C={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},$={class:"mt-6 flex justify-end"},D={__name:"Delete",props:{show:Boolean,video:Object},emits:["close"],setup(p,{emit:r}){const i=p,s=f({}),u=()=>{var e;s.delete(route("video.destroy",(e=i.video)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{r("close"),s.reset()},onError:()=>null,onFinish:()=>null})};return(e,a)=>(g(),_("section",k,[c(y,{show:i.show,onClose:a[1]||(a[1]=d=>r("close")),maxWidth:"lg"},{default:m(()=>{var d;return[t("form",{class:"p-6",onSubmit:h(u,["prevent"])},[t("h2",C,o(e.lang().label.delete)+" "+o(e.lang().label.video),1),t("p",S,[l(o(e.lang().label.delete_confirm)+" ",1),t("b",null,o((d=i.video)==null?void 0:d.title),1),l("? ")]),t("div",$,[c(w,{disabled:n(s).processing,onClick:a[0]||(a[0]=B=>r("close"))},{default:m(()=>[l(o(e.lang().button.close),1)]),_:1},8,["disabled"]),c(v,{class:b(["ml-3",{"opacity-25":n(s).processing}]),disabled:n(s).processing,onClick:u},{default:m(()=>[l(o(n(s).processing?e.lang().button.delete+"...":e.lang().button.delete),1)]),_:1},8,["class","disabled"])])],40,x)]}),_:1},8,["show"])]))}};export{D as default};
