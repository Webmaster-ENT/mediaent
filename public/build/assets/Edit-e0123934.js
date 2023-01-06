import{G as w,u as $,B as C,c as p,b as o,w as f,o as g,a as r,t as m,d as t,F as x,i as V,e as _,q as j,f as B,h as E,N as F}from"./app-12de82bd.js";import{_ as v}from"./InputError-dca05aa1.js";import{_ as d}from"./InputLabel-995c1864.js";import{_ as N,a as U}from"./SecondaryButton-546acdf2.js";import{_ as q}from"./PrimaryButton-615ccef1.js";import{_ as D}from"./TextInput-115f98fb.js";import{_ as M}from"./Checkbox-3c8c7303.js";const O={class:"space-y-6"},z=["onSubmit"],A={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},G={class:"my-6 space-y-4"},L={class:"flex justify-start items-center space-x-2 mt-2"},T={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2"},H=["id","value"],I={class:"flex justify-end"},Y={__name:"Edit",props:{show:Boolean,role:Object,permissions:Object},emits:["close"],setup(b,{emit:c}){const i=b,n=w({multipleSelect:!1}),e=$({name:"",permissions:[]}),h=()=>{var s;e.put(route("role.update",(s=i.role)==null?void 0:s.id),{preserveScroll:!0,onSuccess:()=>{c("close"),e.reset(),n.multipleSelect=!1},onError:()=>null,onFinish:()=>null})};C(()=>{var s,l,a;i.show&&(e.name=(s=i.role)==null?void 0:s.name,e.permissions=(l=i.role.permissions)==null?void 0:l.map(u=>u.id)),i.permissions.length==((a=i.role)==null?void 0:a.permissions.length)?n.multipleSelect=!0:n.multipleSelect=!1});const y=s=>{s.target.checked===!1?e.permissions=[]:i.permissions.forEach(l=>{e.permissions.push(l.id)})},k=()=>{i.permissions.length==e.permissions.length?n.multipleSelect=!0:n.multipleSelect=!1};return(s,l)=>(g(),p("section",O,[o(N,{show:i.show,onClose:l[4]||(l[4]=a=>c("close"))},{default:f(()=>[r("form",{class:"p-6",onSubmit:B(h,["prevent"])},[r("h2",A,m(s.lang().label.edit)+" "+m(s.lang().label.role),1),r("div",G,[r("div",null,[o(d,{for:"name",value:s.lang().label.role},null,8,["value"]),o(D,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:t(e).name,"onUpdate:modelValue":l[0]||(l[0]=a=>t(e).name=a),required:"",placeholder:s.lang().placeholder.name},null,8,["modelValue","placeholder"]),o(v,{class:"mt-2",message:t(e).errors.name},null,8,["message"])]),r("div",null,[o(d,{value:s.lang().label.permission},null,8,["value"]),o(v,{class:"mt-2",message:t(e).errors.permissions},null,8,["message"]),r("div",L,[o(M,{id:"permission-all",checked:n.multipleSelect,"onUpdate:checked":l[1]||(l[1]=a=>n.multipleSelect=a),onChange:y},null,8,["checked"]),o(d,{for:"permission-all",value:s.lang().label.check_all},null,8,["value"])]),r("div",T,[(g(!0),p(x,null,V(i.permissions,(a,u)=>(g(),p("div",{class:"flex items-center justify-start space-x-2",key:u},[E(r("input",{onChange:k,class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",id:"permission_"+a.id,value:a.id,"onUpdate:modelValue":l[2]||(l[2]=S=>t(e).permissions=S)},null,40,H),[[F,t(e).permissions]]),o(d,{for:"permission_"+a.id,value:a.name},null,8,["for","value"])]))),128))])])]),r("div",I,[o(U,{disabled:t(e).processing,onClick:l[3]||(l[3]=a=>c("close"))},{default:f(()=>[_(m(s.lang().button.close),1)]),_:1},8,["disabled"]),o(q,{class:j(["ml-3",{"opacity-25":t(e).processing}]),disabled:t(e).processing,onClick:h},{default:f(()=>[_(m(t(e).processing?s.lang().button.save+"...":s.lang().button.save),1)]),_:1},8,["class","disabled"])])],40,z)]),_:1},8,["show"])]))}};export{Y as default};
