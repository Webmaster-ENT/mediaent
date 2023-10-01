import{u as v,c as f,a as l,w as u,o as _,d as t,b as s,t as m,f as w,g as y,v as k,h as g,q as x,e as V}from"./app-4f4f8535.js";import{_ as b}from"./InputError-7d6c9017.js";import{_ as n}from"./InputLabel-f63dd6a1.js";import{_ as C,a as S}from"./SecondaryButton-9bd214e2.js";import{_ as $}from"./PrimaryButton-3182d339.js";import{_ as c}from"./TextInput-ff7ff328.js";const U={class:"space-y-6"},N=["onSubmit"],T=t("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Add Video Url ",-1),B={class:"my-6 space-y-2"},j=["src"],q={key:0,className:"text-red-600"},D={class:"my-6 space-y-4"},E={class:"my-6 space-y-4"},L={class:"my-6 space-y-4"},F=t("option",{value:"draft",selected:""},"Draft",-1),M=t("option",{value:"show"},"Show",-1),O=[F,M],R={class:"flex justify-end"},z={props:["id"],data(){return{previewimage:null}},methods:{upload(d){let r=d.target.files[0];this.previewimage=URL.createObjectURL(r),console.log(d.target.files)}}},K=Object.assign(z,{__name:"Create",props:{show:Boolean},emits:["close"],setup(d,{emit:r}){const h=d,e=v({title:"",video_url:"https://www.youtube.com/embed/",status:"draft",thumbnail:null}),p=()=>{e.post(route("video.store"),{preserveScroll:!0,onSuccess:()=>{r("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return(i,o)=>(_(),f("section",U,[l(C,{show:h.show,onClose:o[5]||(o[5]=a=>r("close"))},{default:u(()=>[t("form",{class:"p-6",onSubmit:V(p,["prevent"])},[T,t("div",B,[l(n,{for:"thumbnail",value:"Thumbnail"}),l(c,{id:"thumbnail",type:"file",class:"mt-1 block w-full rounded-none shadow-none",name:"thumbnail",onChange:i.upload,onInput:o[0]||(o[0]=a=>s(e).thumbnail=a.target.files[0]),multiple:""},null,8,["onChange"]),t("img",{src:i.previewimage,alt:"",class:"w-100 md:w-64 mt-4 rounded-md"},null,8,j),s(e).errors.thumbnail?(_(),f("span",q,m(s(e).errors.thumbnail),1)):w("",!0)]),t("div",D,[t("div",null,[l(n,{for:"title",value:"Title"}),l(c,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).title,"onUpdate:modelValue":o[1]||(o[1]=a=>s(e).title=a),required:"",placeholder:"Title"},null,8,["modelValue"]),l(b,{class:"mt-2",message:s(e).errors.title},null,8,["message"])])]),t("div",E,[t("div",null,[l(n,{for:"title",value:"Link YouTube-Embed"}),l(c,{id:"video_url",type:"text",class:"mt-1 block w-full",modelValue:s(e).video_url,"onUpdate:modelValue":o[2]||(o[2]=a=>s(e).video_url=a),required:"",placeholder:"https://www.youtube.com/embed/xxx..."},null,8,["modelValue"]),l(b,{class:"mt-2",message:s(e).errors.title},null,8,["message"])])]),t("div",L,[l(n,{for:"status",value:"Status"}),y(t("select",{id:"status","onUpdate:modelValue":o[3]||(o[3]=a=>s(e).status=a),class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50"},O,512),[[k,s(e).status]])]),t("div",R,[l(S,{disabled:s(e).processing,onClick:o[4]||(o[4]=a=>r("close"))},{default:u(()=>[g(m(i.lang().button.close),1)]),_:1},8,["disabled"]),l($,{class:x(["ml-3",{"opacity-25":s(e).processing}]),disabled:s(e).processing,onClick:p},{default:u(()=>[g(m(s(e).processing?i.lang().button.add+"...":i.lang().button.add),1)]),_:1},8,["class","disabled"])])],40,N)]),_:1},8,["show"])]))}});export{K as default};
