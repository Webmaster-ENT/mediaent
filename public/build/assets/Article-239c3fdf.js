import{y as c,w as o,o as e,a,b as l,H as m,d as t,c as n,r as u,t as i,h as _,L as x,F as h}from"./app-16ecd9e4.js";import{_ as p}from"./HomeLayout-f7c2194c.js";import"./index-190b2432.js";import"./open-closed-1dce7dc0.js";import"./_plugin-vue_export-helper-c27b6911.js";const f={class:"bg-sky-900"},w={class:"max-w-xs mx-auto overflow-hidden md:max-w-5xl lg:max-w-7xl"},b={class:"container mx-auto my-auto py-8 md:py-12 px-6 pb-12 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center"},g={class:"p-4 rounded-2xl shadow-lg overflow-hidden mb-10 bg-white sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"},y=["src"],v={class:"inline-block text-xs font-normal mt-4 text-white bg-sky-900 py-1 px-2 rounded-3xl w-auto flex-none"},k={class:"mt-3 text-sm font-bold h-14"},L={class:"text-xs font-medium opacity-80 mt-3"},B=["innerHTML"],H={class:"pt-3 float-right inline-block text-xs font-semibold text-sky-900 w-auto"},A=t("br",null,null,-1),C={__name:"Article",props:{articles:Object},setup(r){return(d,N)=>(e(),c(p,null,{default:o(()=>[a(l(m),{title:"Article"}),t("div",f,[t("div",w,[t("div",b,[(e(!0),n(h,null,u(r.articles,s=>(e(),n("div",{key:s.id},[t("div",g,[t("img",{class:"rounded-2xl w-full aspect-video",src:s.thumbnail,alt:""},null,8,y),t("div",v,i(s.category.name),1),t("div",k,[t("p",null,i(s.title.substring(0,100)),1)]),t("div",L,[t("span",{innerHTML:s.summary.substring(0,200)},null,8,B)]),t("div",H,[a(l(x),{href:d.route("detail-article.showArticle",s.slug)},{default:o(()=>[_("Readmore")]),_:2},1032,["href"])])]),A]))),128))])])])]),_:1}))}};export{C as default};
