<<<<<<< Updated upstream
<<<<<<<< HEAD:public/build/assets/DeleteBulk-4a146225.js
import{u as p,B as _,c as g,a as c,w as d,o as h,d as a,t as s,b as n,h as u,q as b,e as y}from"./app-951b8744.js";import{_ as w}from"./DangerButton-9c2de98d.js";import{_ as k,a as x}from"./SecondaryButton-327dc077.js";const B={class:"space-y-6"},v=["onSubmit"],C={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},$={class:"mt-6 flex justify-end"},V={__name:"DeleteBulk",props:{show:Boolean,selectedId:Object},emits:["close"],setup(f,{emit:r}){const o=f,e=p({id:[]}),m=()=>{e.post(route("user.destroy-bulk"),{preserveScroll:!0,onSuccess:()=>{r("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return _(()=>{o.show&&(e.id=o.selectedId)}),(t,l)=>(h(),g("section",B,[c(k,{show:o.show,onClose:l[1]||(l[1]=i=>r("close")),maxWidth:"lg"},{default:d(()=>{var i;return[a("form",{class:"p-6",onSubmit:y(m,["prevent"])},[a("h2",C,s(t.lang().label.delete)+" "+s(t.lang().label.user),1),a("p",S,s(t.lang().label.delete_confirm)+" "+s((i=o.selectedId)==null?void 0:i.length)+" "+s(t.lang().label.user)+"? ",1),a("div",$,[c(x,{disabled:n(e).processing,onClick:l[0]||(l[0]=D=>r("close"))},{default:d(()=>[u(s(t.lang().button.close),1)]),_:1},8,["disabled"]),c(w,{class:b(["ml-3",{"opacity-25":n(e).processing}]),disabled:n(e).processing,onClick:m},{default:d(()=>[u(s(n(e).processing?"Delete...":"Delete"),1)]),_:1},8,["class","disabled"])])],40,v)]}),_:1},8,["show"])]))}};export{V as default};
========
import{u as p,B as _,c as g,a as c,w as d,o as h,d as a,t as s,b as n,h as u,q as b,e as y}from"./app-54cd0e01.js";import{_ as w}from"./DangerButton-474e4e82.js";import{_ as k,a as x}from"./SecondaryButton-88dedcfc.js";const B={class:"space-y-6"},v=["onSubmit"],C={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},$={class:"mt-6 flex justify-end"},V={__name:"DeleteBulk",props:{show:Boolean,selectedId:Object},emits:["close"],setup(f,{emit:r}){const o=f,e=p({id:[]}),m=()=>{e.post(route("user.destroy-bulk"),{preserveScroll:!0,onSuccess:()=>{r("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return _(()=>{o.show&&(e.id=o.selectedId)}),(t,l)=>(h(),g("section",B,[c(k,{show:o.show,onClose:l[1]||(l[1]=i=>r("close")),maxWidth:"lg"},{default:d(()=>{var i;return[a("form",{class:"p-6",onSubmit:y(m,["prevent"])},[a("h2",C,s(t.lang().label.delete)+" "+s(t.lang().label.user),1),a("p",S,s(t.lang().label.delete_confirm)+" "+s((i=o.selectedId)==null?void 0:i.length)+" "+s(t.lang().label.user)+"? ",1),a("div",$,[c(x,{disabled:n(e).processing,onClick:l[0]||(l[0]=D=>r("close"))},{default:d(()=>[u(s(t.lang().button.close),1)]),_:1},8,["disabled"]),c(w,{class:b(["ml-3",{"opacity-25":n(e).processing}]),disabled:n(e).processing,onClick:m},{default:d(()=>[u(s(n(e).processing?"Delete...":"Delete"),1)]),_:1},8,["class","disabled"])])],40,v)]}),_:1},8,["show"])]))}};export{V as default};
>>>>>>>> 194ef19a618395a2d7ba3951227ad70577c442cb:public/build/assets/DeleteBulk-4b9bf9ec.js
=======
import{u as p,B as _,c as g,a as c,w as d,o as h,d as a,t as s,b as n,h as u,q as b,e as y}from"./app-951b8744.js";import{_ as w}from"./DangerButton-9c2de98d.js";import{_ as k,a as x}from"./SecondaryButton-327dc077.js";const B={class:"space-y-6"},v=["onSubmit"],C={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},$={class:"mt-6 flex justify-end"},V={__name:"DeleteBulk",props:{show:Boolean,selectedId:Object},emits:["close"],setup(f,{emit:r}){const o=f,e=p({id:[]}),m=()=>{e.post(route("user.destroy-bulk"),{preserveScroll:!0,onSuccess:()=>{r("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return _(()=>{o.show&&(e.id=o.selectedId)}),(t,l)=>(h(),g("section",B,[c(k,{show:o.show,onClose:l[1]||(l[1]=i=>r("close")),maxWidth:"lg"},{default:d(()=>{var i;return[a("form",{class:"p-6",onSubmit:y(m,["prevent"])},[a("h2",C,s(t.lang().label.delete)+" "+s(t.lang().label.user),1),a("p",S,s(t.lang().label.delete_confirm)+" "+s((i=o.selectedId)==null?void 0:i.length)+" "+s(t.lang().label.user)+"? ",1),a("div",$,[c(x,{disabled:n(e).processing,onClick:l[0]||(l[0]=D=>r("close"))},{default:d(()=>[u(s(t.lang().button.close),1)]),_:1},8,["disabled"]),c(w,{class:b(["ml-3",{"opacity-25":n(e).processing}]),disabled:n(e).processing,onClick:m},{default:d(()=>[u(s(n(e).processing?"Delete...":"Delete"),1)]),_:1},8,["class","disabled"])])],40,v)]}),_:1},8,["show"])]))}};export{V as default};
>>>>>>> Stashed changes
