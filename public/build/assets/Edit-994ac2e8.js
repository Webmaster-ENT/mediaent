import{K as w,d as $,G as C,c as p,a as o,e as f,o as g,b as r,t as m,u as i,F as x,k as V,g as _,z as j,h as E,j as B,Q as F}from"./app-aef0e047.js";import{_ as v}from"./InputError-3af520c6.js";import{_ as d}from"./InputLabel-73e7eebb.js";import{_ as N,a as U}from"./SecondaryButton-d3c614f5.js";import{_ as z}from"./PrimaryButton-ddf908f7.js";import{_ as D}from"./TextInput-cc890a82.js";import{_ as M}from"./Checkbox-785c9584.js";const O={class:"space-y-6"},q=["onSubmit"],A={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},G={class:"my-6 space-y-4"},K={class:"flex justify-start items-center space-x-2 mt-2"},L={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2"},Q=["id","value"],T={class:"flex justify-end"},Y={__name:"Edit",props:{show:Boolean,role:Object,permissions:Object},emits:["close"],setup(b,{emit:c}){const t=b,n=w({multipleSelect:!1}),e=$({name:"",permissions:[]}),h=()=>{var s;e.put(route("role.update",(s=t.role)==null?void 0:s.id),{preserveScroll:!0,onSuccess:()=>{c("close"),e.reset(),n.multipleSelect=!1},onError:()=>null,onFinish:()=>null})};C(()=>{var s,l,a;t.show&&(e.name=(s=t.role)==null?void 0:s.name,e.permissions=(l=t.role.permissions)==null?void 0:l.map(u=>u.id)),t.permissions.length==((a=t.role)==null?void 0:a.permissions.length)?n.multipleSelect=!0:n.multipleSelect=!1});const y=s=>{s.target.checked===!1?e.permissions=[]:t.permissions.forEach(l=>{e.permissions.push(l.id)})},k=()=>{t.permissions.length==e.permissions.length?n.multipleSelect=!0:n.multipleSelect=!1};return(s,l)=>(g(),p("section",O,[o(N,{show:t.show,onClose:l[4]||(l[4]=a=>c("close"))},{default:f(()=>[r("form",{class:"p-6",onSubmit:E(h,["prevent"])},[r("h2",A,m(s.lang().label.edit)+" "+m(s.lang().label.role),1),r("div",G,[r("div",null,[o(d,{for:"name",value:s.lang().label.role},null,8,["value"]),o(D,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:i(e).name,"onUpdate:modelValue":l[0]||(l[0]=a=>i(e).name=a),required:"",placeholder:s.lang().placeholder.name},null,8,["modelValue","placeholder"]),o(v,{class:"mt-2",message:i(e).errors.name},null,8,["message"])]),r("div",null,[o(d,{value:s.lang().label.permission},null,8,["value"]),o(v,{class:"mt-2",message:i(e).errors.permissions},null,8,["message"]),r("div",K,[o(M,{id:"permission-all",checked:n.multipleSelect,"onUpdate:checked":l[1]||(l[1]=a=>n.multipleSelect=a),onChange:y},null,8,["checked"]),o(d,{for:"permission-all",value:s.lang().label.check_all},null,8,["value"])]),r("div",L,[(g(!0),p(x,null,V(t.permissions,(a,u)=>(g(),p("div",{class:"flex items-center justify-start space-x-2",key:u},[B(r("input",{onChange:k,class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",id:"permission_"+a.id,value:a.id,"onUpdate:modelValue":l[2]||(l[2]=S=>i(e).permissions=S)},null,40,Q),[[F,i(e).permissions]]),o(d,{for:"permission_"+a.id,value:a.name},null,8,["for","value"])]))),128))])])]),r("div",T,[o(U,{disabled:i(e).processing,onClick:l[3]||(l[3]=a=>c("close"))},{default:f(()=>[_(m(s.lang().button.close),1)]),_:1},8,["disabled"]),o(z,{class:j(["ml-3",{"opacity-25":i(e).processing}]),disabled:i(e).processing,onClick:h},{default:f(()=>[_(m(i(e).processing?s.lang().button.save+"...":s.lang().button.save),1)]),_:1},8,["class","disabled"])])],40,q)]),_:1},8,["show"])]))}};export{Y as default};
