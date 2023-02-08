import{u as b,c as v,a as l,w as i,o as y,d as o,b as s,g as h,v as w,h as c,t as m,q as k,e as x}from"./app-95aa28db.js";import{_ as p}from"./InputError-a4ea7e03.js";import{_ as n}from"./InputLabel-da99fe39.js";import{_ as V,a as S}from"./SecondaryButton-7124c215.js";import{_ as $}from"./PrimaryButton-4d03a84c.js";import{_ as f}from"./TextInput-cf61d2f0.js";const C={class:"space-y-6"},B=["onSubmit"],T=o("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Add Video Url ",-1),U={class:"my-6 space-y-4"},q={class:"my-6 space-y-4"},D={class:"my-6 space-y-4"},E=o("option",{value:"draft",selected:""},"Draft",-1),N=o("option",{value:"show"},"Show",-1),F=[E,N],M={class:"flex justify-end"},H={__name:"Create",props:{show:Boolean},emits:["close"],setup(_,{emit:r}){const g=_,e=b({title:"",video_url:"https://www.youtube.com/embed/",status:"draft"}),u=()=>{e.post(route("video.store"),{preserveScroll:!0,onSuccess:()=>{r("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return(d,t)=>(y(),v("section",C,[l(V,{show:g.show,onClose:t[4]||(t[4]=a=>r("close"))},{default:i(()=>[o("form",{class:"p-6",onSubmit:x(u,["prevent"])},[T,o("div",U,[o("div",null,[l(n,{for:"title",value:"Title"}),l(f,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).title,"onUpdate:modelValue":t[0]||(t[0]=a=>s(e).title=a),required:"",placeholder:"Title"},null,8,["modelValue"]),l(p,{class:"mt-2",message:s(e).errors.title},null,8,["message"])])]),o("div",q,[o("div",null,[l(n,{for:"title",value:"Link YouTube-Embed"}),l(f,{id:"video_url",type:"text",class:"mt-1 block w-full",modelValue:s(e).video_url,"onUpdate:modelValue":t[1]||(t[1]=a=>s(e).video_url=a),required:"",placeholder:"https://www.youtube.com/embed/xxx..."},null,8,["modelValue"]),l(p,{class:"mt-2",message:s(e).errors.title},null,8,["message"])])]),o("div",D,[l(n,{for:"status",value:"Status"}),h(o("select",{id:"status","onUpdate:modelValue":t[2]||(t[2]=a=>s(e).status=a),class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50"},F,512),[[w,s(e).status]])]),o("div",M,[l(S,{disabled:s(e).processing,onClick:t[3]||(t[3]=a=>r("close"))},{default:i(()=>[c(m(d.lang().button.close),1)]),_:1},8,["disabled"]),l($,{class:k(["ml-3",{"opacity-25":s(e).processing}]),disabled:s(e).processing,onClick:u},{default:i(()=>[c(m(s(e).processing?d.lang().button.add+"...":d.lang().button.add),1)]),_:1},8,["class","disabled"])])],40,B)]),_:1},8,["show"])]))}};export{H as default};
