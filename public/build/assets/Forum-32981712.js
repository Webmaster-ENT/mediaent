import{_ as c}from"./HomeLayout-610efa68.js";import{y as r,w as o,o as d,d as t,c as m,r as _,a as s,b as l,t as a,L as h,F as x}from"./app-1c51429c.js";import{r as u,a as w,b as p}from"./UserCircleIcon-66b88620.js";import"./open-closed-0063789e.js";import"./_plugin-vue_export-helper-c27b6911.js";const g={class:"bg-sky-900"},f={class:"max-w-xs mx-auto overflow-hidden md:max-w-5xl lg:max-w-7xl"},v={class:"py-4 md:py-6 md:ml-24 lg:p-8"},b={class:"flex"},k={class:"mt-1.5"},y={class:"ml-3 uppercase tracking-wide text-xs text-white font-medium md:text-base lg:text-lg"},B={class:"ml-3 font-medium text-slate-400 text-xs md:text-sm lg:text-base font"},L=["innerHTML"],F={class:"mt-4 md:mt-6"},$={class:"flex ml-3 text-white items-center text-sm md:text-xl"},j={class:"mx-2 mr-6"},H={class:"mx-2"},M=t("hr",{class:"m-auto border-t-2 my-2 w-4/5"},null,-1),D={__name:"Forum",props:{forums:Object},setup(n){return(i,N)=>(d(),r(c,null,{default:o(()=>[t("div",g,[t("div",f,[(d(!0),m(x,null,_(n.forums,e=>(d(),m("div",{key:e.id},[t("div",null,[t("div",v,[t("div",b,[s(l(u),{class:"text-white w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"}),t("div",k,[t("div",y,a(e.user.name),1),t("p",B," Asked On "+a(e.created_at)+" WIB ",1),s(l(h),{href:i.route("detail-forum.showforum",e.slug)},{default:o(()=>[t("div",{class:"mt-2 ml-3 text-white font-semibold mt-7 text-base md:text-xl lg:text-2xl",innerHTML:e.subject},null,8,L)]),_:2},1032,["href"]),t("div",F,[t("div",$,[s(l(w),{class:"w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"}),t("span",j,a(e.likes.length),1),s(l(p),{class:"w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"}),t("span",H,a(e.comments.length),1)])])])])])]),M]))),128))])])]),_:1}))}};export{D as default};
