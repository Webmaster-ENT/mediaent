import{u as v,B as b,c as h,a as i,w as u,o as y,d as o,t as r,b as t,g as w,v as k,h as p,q as x,e as V}from"./app-91c3a5ed.js";import{_ as f}from"./InputError-0524f863.js";import{_ as c}from"./InputLabel-fe425aee.js";import{_ as S,a as $}from"./SecondaryButton-3c3e149e.js";import{_ as B}from"./PrimaryButton-8496ed43.js";import{_}from"./TextInput-42ffdec0.js";const C={class:"space-y-6"},E=["onSubmit"],T={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},U=o("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Add Video Url ",-1),q={class:"my-6 space-y-4"},D={class:"my-6 space-y-4"},N={class:"my-6 space-y-1"},j=o("option",{value:"draft",selected:""},"Draft",-1),F=o("option",{value:"show"},"Show",-1),M=[j,F],z={class:"flex justify-end"},I={__name:"Edit",props:{show:Boolean,video:Object},emits:["close"],setup(g,{emit:n}){const d=g,e=v({title:"",video_url:"",status:""}),m=()=>{var l;e.put(route("video.update",(l=d.video)==null?void 0:l.id),{preserveScroll:!0,onSuccess:()=>{n("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return b(()=>{var l,s,a;d.show&&(e.title=(l=d.video)==null?void 0:l.title,e.video_url=(s=d.video)==null?void 0:s.video_url,e.status=(a=d.video)==null?void 0:a.status)}),(l,s)=>(y(),h("section",C,[i(S,{show:d.show,onClose:s[4]||(s[4]=a=>n("close"))},{default:u(()=>[o("form",{class:"p-6",onSubmit:V(m,["prevent"])},[o("h2",T,r(l.lang().label.edit)+" "+r(l.lang().label.video),1),U,o("div",q,[o("div",null,[i(c,{for:"title",value:"Title"}),i(_,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:t(e).title,"onUpdate:modelValue":s[0]||(s[0]=a=>t(e).title=a),required:"",placeholder:"Title"},null,8,["modelValue"]),i(f,{class:"mt-2",message:t(e).errors.title},null,8,["message"])])]),o("div",D,[o("div",null,[i(c,{for:"title",value:"Link YouTube-Embed"}),i(_,{id:"video_url",type:"text",class:"mt-1 block w-full",modelValue:t(e).video_url,"onUpdate:modelValue":s[1]||(s[1]=a=>t(e).video_url=a),required:"",placeholder:"https://www.youtube.com/embed/xxx..."},null,8,["modelValue"]),i(f,{class:"mt-2",message:t(e).errors.title},null,8,["message"])])]),o("div",N,[i(c,{for:"status",value:"Status"}),w(o("select",{id:"status","onUpdate:modelValue":s[2]||(s[2]=a=>t(e).status=a),class:"block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50"},M,512),[[k,t(e).status]])]),o("div",z,[i($,{disabled:t(e).processing,onClick:s[3]||(s[3]=a=>n("close"))},{default:u(()=>[p(r(l.lang().button.close),1)]),_:1},8,["disabled"]),i(B,{class:x(["ml-3",{"opacity-25":t(e).processing}]),disabled:t(e).processing,onClick:m},{default:u(()=>[p(r(t(e).processing?l.lang().button.save+"...":l.lang().button.save),1)]),_:1},8,["class","disabled"])])],40,E)]),_:1},8,["show"])]))}};export{I as default};
