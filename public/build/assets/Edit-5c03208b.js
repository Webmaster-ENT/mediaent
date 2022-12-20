import{O as x,u as S,A as w,g as p,a as o,w as u,o as f,d as i,b as t,F as C,D as $,e as g,n as V,t as E,f as j,h as N,C as B}from"./app-ca577fa4.js";import{_ as m,a as F,b as h}from"./TextInput-56afc9df.js";import{_ as D,a as O}from"./SecondaryButton-47b38e23.js";import{_ as U}from"./PrimaryButton-4e0ddc79.js";import{_ as A}from"./Checkbox-43c22e56.js";const M={class:"space-y-6"},q=["onSubmit"],z=i("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Edit role ",-1),L={class:"my-6 space-y-4"},P={class:"flex justify-start items-center space-x-2 mt-2"},R={class:"grid grid-cols-4 gap-2 mt-2"},T=["id","value"],G={class:"flex justify-end"},W={__name:"Edit",props:{show:Boolean,role:Object,permissions:Object},emits:["close"],setup(v,{emit:c}){const a=v,n=x({multipleSelect:!1}),e=S({name:"",permissions:[]}),_=()=>{var r;e.put(route("role.update",(r=a.role)==null?void 0:r.id),{preserveScroll:!0,onSuccess:()=>{c("close"),e.reset()},onError:()=>null,onFinish:()=>null})};w(()=>{var r,s,l;a.show&&(e.name=(r=a.role)==null?void 0:r.name,e.permissions=(s=a.role.permissions)==null?void 0:s.map(d=>d.id)),a.permissions.length==((l=a.role)==null?void 0:l.permissions.length)?n.multipleSelect=!0:n.multipleSelect=!1});const y=r=>{r.target.checked===!1?e.permissions=[]:a.permissions.forEach(s=>{e.permissions.push(s.id)})},k=()=>{a.permissions.length==e.permissions.length?n.multipleSelect=!0:n.multipleSelect=!1};return(r,s)=>(f(),p("section",M,[o(D,{show:a.show,onClose:s[4]||(s[4]=l=>c("close"))},{default:u(()=>[i("form",{class:"p-6",onSubmit:j(_,["prevent"])},[z,i("div",L,[i("div",null,[o(m,{for:"name",value:"Name"}),o(F,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:t(e).name,"onUpdate:modelValue":s[0]||(s[0]=l=>t(e).name=l),required:"",placeholder:"Role Name"},null,8,["modelValue"]),o(h,{class:"mt-2",message:t(e).errors.name},null,8,["message"])]),i("div",null,[o(m,{value:"Permission"}),o(h,{class:"mt-2",message:t(e).errors.permissions},null,8,["message"]),i("div",P,[o(A,{id:"permission-all",checked:n.multipleSelect,"onUpdate:checked":s[1]||(s[1]=l=>n.multipleSelect=l),onChange:y},null,8,["checked"]),o(m,{for:"permission-all",value:"Check all"})]),i("div",R,[(f(!0),p(C,null,$(a.permissions,(l,d)=>(f(),p("div",{class:"flex items-center justify-start space-x-2",key:d},[N(i("input",{onChange:k,class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",id:"permission_"+l.id,value:l.id,"onUpdate:modelValue":s[2]||(s[2]=b=>t(e).permissions=b)},null,40,T),[[B,t(e).permissions]]),o(m,{for:"permission_"+l.id,value:l.name},null,8,["for","value"])]))),128))])])]),i("div",G,[o(O,{disabled:t(e).processing,onClick:s[3]||(s[3]=l=>c("close"))},{default:u(()=>[g(" Close ")]),_:1},8,["disabled"]),o(U,{class:V(["ml-3",{"opacity-25":t(e).processing}]),disabled:t(e).processing,onClick:_},{default:u(()=>[g(E(t(e).processing?"Save...":"Save"),1)]),_:1},8,["class","disabled"])])],40,q)]),_:1},8,["show"])]))}};export{W as default};
