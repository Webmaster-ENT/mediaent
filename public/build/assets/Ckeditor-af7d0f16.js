import{C as d,c as r}from"./Ckeditor.vue_vue_type_style_index_0_lang-0a191e1d.js";import{j as l,l as n,o as p,c,a as u,b as o}from"./app-5c2d75bd.js";const m={class:"fg-block",style:{"--ck-border-radius":"0.5rem"}},f={__name:"Ckeditor",props:{modelValue:String},emits:["update:modelValue"],setup(t,{emit:s}){const e=l(t.modelValue||"");return l({toolbar:["heading","|","bold","italic","link","bulletedList","numberedList","blockQuote"],fontSize:{options:[9,11,13,"default",17,19,21,27,35],supportAllValues:!1},plugins:["Essentials","Paragraph","Heading","List","Bold","Italic"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"}]}}),n(e,()=>{s("update:modelValue",e.value)}),(h,a)=>(p(),c("div",m,[u(o(r.component),{editor:o(d),modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=i=>e.value=i)},null,8,["editor","modelValue"])]))}};export{f as _};
