import{u as _,B as V,c as h,a,w as c,o as y,d as n,t as i,b as s,h as w,q as k,e as $}from"./app-5c2d75bd.js";import{_ as d}from"./InputError-e9ae88e2.js";import{_ as t}from"./InputLabel-223c234d.js";import{_ as S,a as B}from"./SecondaryButton-362622be.js";import{_ as C}from"./PrimaryButton-668a2f39.js";import{_ as U}from"./SelectInput-4c5f59cb.js";import{_ as u}from"./TextInput-dc854951.js";const E={class:"space-y-6"},j=["onSubmit"],q={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},N={class:"my-6 space-y-4"},F={class:"flex justify-end"},H={__name:"Edit",props:{show:Boolean,user:Object,roles:Object},emits:["close"],setup(b,{emit:p}){const m=b,e=_({name:"",email:"",password:"",password_confirmation:"",role:""}),f=()=>{var l;e.put(route("user.update",(l=m.user)==null?void 0:l.id),{preserveScroll:!0,onSuccess:()=>{p("close"),e.reset()},onError:()=>null,onFinish:()=>null})};V(()=>{var l,o,r,g;m.show&&(e.name=(l=m.user)==null?void 0:l.name,e.email=(o=m.user)==null?void 0:o.email,e.role=((r=m.user)==null?void 0:r.roles)==0?"":(g=m.user)==null?void 0:g.roles[0].name)});const v=m.roles.map(l=>({label:l.name,value:l.name}));return(l,o)=>(y(),h("section",E,[a(S,{show:m.show,onClose:o[6]||(o[6]=r=>p("close"))},{default:c(()=>[n("form",{class:"p-6",onSubmit:$(f,["prevent"])},[n("h2",q,i(l.lang().label.edit)+" "+i(l.lang().label.user),1),n("div",N,[n("div",null,[a(t,{for:"name",value:l.lang().label.name},null,8,["value"]),a(u,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).name=r),required:"",placeholder:l.lang().placeholder.name},null,8,["modelValue","placeholder"]),a(d,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),n("div",null,[a(t,{for:"email",value:l.lang().label.email},null,8,["value"]),a(u,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).email=r),placeholder:l.lang().placeholder.email},null,8,["modelValue","placeholder"]),a(d,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),n("div",null,[a(t,{for:"password",value:l.lang().label.password},null,8,["value"]),a(u,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[2]||(o[2]=r=>s(e).password=r),placeholder:l.lang().placeholder.password},null,8,["modelValue","placeholder"]),a(d,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),n("div",null,[a(t,{for:"password_confirmation",value:l.lang().label.password_confirmation},null,8,["value"]),a(u,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=r=>s(e).password_confirmation=r),placeholder:l.lang().placeholder.password_confirmation},null,8,["modelValue","placeholder"]),a(d,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),n("div",null,[a(t,{for:"role",value:l.lang().label.role},null,8,["value"]),a(U,{id:"role",class:"mt-1 block w-full",modelValue:s(e).role,"onUpdate:modelValue":o[4]||(o[4]=r=>s(e).role=r),required:"",dataSet:s(v)},null,8,["modelValue","dataSet"]),a(d,{class:"mt-2",message:s(e).errors.role},null,8,["message"])])]),n("div",F,[a(B,{disabled:s(e).processing,onClick:o[5]||(o[5]=r=>p("close"))},{default:c(()=>[w(i(l.lang().button.close),1)]),_:1},8,["disabled"]),a(C,{class:k(["ml-3",{"opacity-25":s(e).processing}]),disabled:s(e).processing,onClick:f},{default:c(()=>[w(i(s(e).processing?l.lang().button.save+"...":l.lang().button.save),1)]),_:1},8,["class","disabled"])])],40,j)]),_:1},8,["show"])]))}};export{H as default};
