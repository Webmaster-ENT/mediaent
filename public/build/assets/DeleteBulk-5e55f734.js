import{u as f,O as g,c as _,a as d,w as c,o as b,d as a,t,b as n,e as p,s as h,f as y}from"./app-69b8270a.js";import{_ as w}from"./DangerButton-863b00f1.js";import{_ as k,a as v}from"./SecondaryButton-193f132e.js";const x={class:"space-y-6"},B=["onSubmit"],C={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},$={class:"mt-6 flex justify-end"},j={__name:"DeleteBulk",props:{show:Boolean,selectedId:Object},emits:["close"],setup(u,{emit:r}){const o=u,e=f({id:[]}),m=()=>{e.post(route("permission.destroy-bulk"),{preserveScroll:!0,onSuccess:()=>{r("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return g(()=>{o.show&&(e.id=o.selectedId)}),(s,l)=>(b(),_("section",x,[d(k,{show:o.show,onClose:l[1]||(l[1]=i=>r("close")),maxWidth:"lg"},{default:c(()=>{var i;return[a("form",{class:"p-6",onSubmit:y(m,["prevent"])},[a("h2",C,t(s.lang().label.delete)+" "+t(s.lang().label.permission),1),a("p",S,t(s.lang().label.delete_confirm)+" "+t((i=o.selectedId)==null?void 0:i.length)+" "+t(s.lang().label.permission)+"? ",1),a("div",$,[d(v,{disabled:n(e).processing,onClick:l[0]||(l[0]=E=>r("close"))},{default:c(()=>[p(t(s.lang().button.close),1)]),_:1},8,["disabled"]),d(w,{class:h(["ml-3",{"opacity-25":n(e).processing}]),disabled:n(e).processing,onClick:m},{default:c(()=>[p(t(n(e).processing?s.lang().button.delete+"...":s.lang().button.delete),1)]),_:1},8,["class","disabled"])])],40,B)]}),_:1},8,["show"])]))}};export{j as default};
