import{m as x,l as w,x as g,y as p,o as u,z as h,a as l,w as n,h as r,A as c,d as s,T as i,s as v,b,j as y,g as k,B as _,c as B}from"./app-69b8270a.js";const C={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},E=s("div",{class:"absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"},null,-1),S=[E],T={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const a=e;x(()=>a.show,()=>{a.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const d=()=>{a.closeable&&t("close")},m=o=>{o.key==="Escape"&&a.show&&d()};w(()=>document.addEventListener("keydown",m)),g(()=>{document.removeEventListener("keydown",m),document.body.style.overflow=null});const f=p(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl","3xl":"sm:max-w-3xl","4xl":"sm:max-w-4xl"})[a.maxWidth]);return(o,z)=>(u(),h(_,{to:"body"},[l(i,{"leave-active-class":"duration-200"},{default:n(()=>[r(s("div",C,[l(i,{"enter-active-class":"ease-out duration-200","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:n(()=>[r(s("div",{class:"fixed inset-0 transform transition-all",onClick:d},S,512),[[c,e.show]])]),_:1}),l(i,{"enter-active-class":"ease-out duration-200","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:n(()=>[r(s("div",{class:v(["mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",b(f)])},[e.show?y(o.$slots,"default",{key:0}):k("",!0)],2),[[c,e.show]])]),_:3})],512),[[c,e.show]])]),_:3})]))}},$=["type"],V={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(e){return(t,a)=>(u(),B("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150"},[y(t.$slots,"default")],8,$))}};export{T as _,V as a};
