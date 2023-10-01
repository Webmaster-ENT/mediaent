import{u as H,c as e,a as o,b as s,w as x,F as r,o as l,H as j,d as t,L as p,r as v,t as a,e as b,g as y,z as k,f as I,h as w}from"./app-4f4f8535.js";import{_ as N}from"./HomeLayout-768009f2.js";import{_ as C}from"./TextInput-ff7ff328.js";import{m as _,n as B,k as f,T as M,l as L}from"./index-56bcfca4.js";import"./open-closed-dd18bdc1.js";import"./_plugin-vue_export-helper-c27b6911.js";const O={class:"pt-5 overflow-y-auto","scroll-region":""},U={class:"mx-auto max-w-7xl sm:px-6 px-4 lg:px-8"},$=t("div",{class:"flex items-center pt-2 md:text-lg text-xs"},[t("i",{class:"fa-solid fa-chevron-left mr-1"}),t("span",{class:"font-bold"},"Back to Article")],-1),E={class:"mx-auto max-w-8xl sm:px-6 lg:px-8"},F={class:"text-gray-500 bg-white rounded-lg"},z={class:"flex flex-wrap justify-center"},D={class:"font-bold md:w-1/2 md:text-6xl text-3xl text-center text-gray-900 mb-4 px-2"},P={class:"w-50 md:w-3/4"},W={class:"md:text-xl text-sm text-center capitalize"},q={class:"text-center my-4"},R={class:"inline-flex items-center md:px-4 px-3 md:py-2 py-1 bg-blue-600 border border-transparent rounded-full font-semibold md:text-xs text-xs text-white uppercase tracking-widest hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150",disabled:""},X={class:"relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple md:my-4 my-2 px-5"},G=["src"],J={class:"md:my-10 mt-10 prose lg:prose-xl md:max-w-4xl md:px-6 px-12 mx-auto",style:{"text-align":"justify"}},K=["innerHTML"],Q={class:"md:mt-6 px-6"},Y={class:"flex md:mb-12 my-4 text-black items-center text-sm md:text-xl"},Z={key:0},tt={key:0},et=["onSubmit"],st={type:"submit"},lt={key:1},ot=["onClick"],dt=["onSubmit"],it={className:"mt-4"},nt={type:"submit"},at={key:1},ct={class:"mx-2 md:mr-6 mr-4 font-medium text-md"},mt={class:"mx-2 font-medium text-md"},rt={class:"grid grid-cols-2 px-6"},ut={key:0},ht=t("div",{class:"text-md font-bold text-slate-900"},[t("i",{class:"fa-solid fa-chevron-left"}),w(" PREVIOUS ")],-1),xt={class:"uppercase hover:font-bold"},_t={key:1,class:"text-left"},ft=t("span",{class:"text-md font-bold text-slate-900"},"This First Article",-1),pt=[ft],vt={key:0,class:"flex text-right"},bt=t("div",{class:"text-md font-semibold text-slate-900 hover:font-black"},[w(" NEXT "),t("i",{class:"fa-solid fa-chevron-right"})],-1),wt={class:"uppercase hover:font-bold"},gt={key:1,class:"text-right"},yt=t("span",{class:"text-md font-bold text-slate-900"},"This Last Article",-1),kt=[yt],Ct=t("br",null,null,-1),Lt=t("div",{class:"mt-7 flex max-w-xs overflow-hidden mx-auto md:max-w-xl lg:max-w-3xl"},[t("a",{class:"md:w-full w-3/4 mx-auto text-white md:py-2 h-full bg-sky-900 rounded-xl text-center",type:"",href:"#comment"},[t("b",{class:"text-white"},[w("Add a Comment"),t("i",{class:"fa-solid fa-pen-to-square ml-4"})])])],-1),St=t("br",null,null,-1),Tt=t("br",null,null,-1),Vt=t("br",null,null,-1),At=t("hr",{class:"mx-auto border-t-2 md:w-full w-10/12"},null,-1),Ht=t("br",null,null,-1),jt={key:0},It={class:"py-2 md:py-6 md:ml-24 px-6 lg:p-8"},Nt={class:"flex"},Bt={class:""},Mt={class:"ml-3 uppercase tracking-wide text-xs text-black font-medium md:text-base lg:text-lg"},Ot={class:"flex justify-between"},Ut={class:"flex ml-3 font-medium text-sm opacity-50"},$t={key:0},Et=["onClick"],Ft=["innerHTML"],zt={key:1},Dt={class:"py-2 md:py-6 md:ml-24 px-6 lg:p-8"},Pt={class:"flex"},Wt={class:""},qt={class:"ml-3 uppercase tracking-wide text-xs text-black font-medium md:text-base lg:text-lg"},Rt={class:"flex justify-between"},Xt={class:"flex ml-3 font-medium text-sm opacity-50"},Gt=["innerHTML"],Jt={key:0,id:"comment"},Kt={class:"lg:p-8 w-full"},Qt=["onSubmit"],Yt={class:"flex max-w-xs overflow-hidden mx-auto w-full md:max-w-xl lg:max-w-3xl"},Zt={type:"submit"},te={key:1,id:"comment"},ee={class:"lg:p-8 w-full"},se={class:"flex max-w-xs overflow-hidden mx-auto w-full md:max-w-xl lg:max-w-3xl"},ce={__name:"ShowArticle",props:{articles:Object,previous:Object,next:Object,articleid:Number,userid:Number},setup(n){const u=n,m=H({id:u.articles.id,comment:"",like:u.articles.like,_method:"put"});function S(c){m.delete(route("article.delete-like",c))}const g=()=>{m.post(route("article.create-like",u.articleid,{preserveScroll:c=>Object.keys(c.props.errors).length}))};function T(c){m.delete(route("article.delete-comment",c,{preserveScroll:!0}))}const V=()=>{m.post(route("article.create-comment",u.articleid))};return(c,h)=>(l(),e(r,null,[o(s(j),{title:"Article"}),o(N,null,{default:x(()=>[t("div",O,[t("div",U,[o(s(p),{href:c.route("all-article.allarticle")},{default:x(()=>[$]),_:1},8,["href"])]),t("div",E,[(l(!0),e(r,null,v(n.articles,d=>(l(),e("div",{class:"container mx-auto pt-4",key:d.id},[t("section",F,[t("div",z,[t("h1",D,a(d.title),1),t("div",P,[t("p",W,a(d.updated_at)+" | "+a(d.user.name),1),t("div",q,[t("button",R,a(d.category.name),1)]),t("div",X,[t("img",{src:"../../"+d.thumbnail,class:"w-full rounded-3xl mt-4"},null,8,G)]),t("div",J,[t("span",{innerHTML:d.body,class:"md:text-xl text-sm"},null,8,K)]),t("div",Q,[t("div",Y,[n.userid!=null?(l(),e("div",Z,[d.likes_user==""?(l(),e("div",tt,[t("form",{onSubmit:b(g,["prevent"])},[t("button",st,[o(s(_),{class:"w-4 h-4 mt-1 md:w-5 md:h-5 lg:w-6 lg:h-6"})])],40,et)])):(l(),e("div",lt,[(l(!0),e(r,null,v(d.likes_user,i=>(l(),e(r,{key:i},[y(t("div",null,[t("button",{onClick:A=>S(i.id),tabindex:"-1",type:"button",class:"mt-1"},[o(s(_),{class:"w-4 h-4 text-yellow-700 md:w-5 md:h-5 lg:w-6 lg:h-6"})],8,ot)],512),[[k,i.user_id==n.userid]]),y(t("div",null,[t("form",{onSubmit:b(g,["prevent"])},[t("div",it,[t("button",nt,[o(s(_),{class:"w-4 h-4 mt-1 md:w-5 md:h-5 lg:w-6 lg:h-6"})])])],40,dt)],512),[[k,i.user_id!=n.userid]])],64))),128))]))])):(l(),e("div",at,[o(s(_),{class:"w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"})])),t("span",ct,a(d.likes.length),1),o(s(B),{class:"w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"}),t("span",mt,a(d.comments.length),1)])]),t("div",rt,[t("div",null,[n.previous!=null?(l(),e("div",ut,[o(s(p),{href:c.route("detail-article.showArticle",n.previous.slug),"preserve-scroll":""},{default:x(()=>[ht,t("span",xt,a(n.previous.title),1)]),_:1},8,["href"])])):(l(),e("div",_t,pt))]),t("div",null,[n.next!=null?(l(),e("div",vt,[o(s(p),{href:c.route("detail-article.showArticle",n.next.slug),"preserve-scroll":""},{default:x(()=>[bt,t("span",wt,a(n.next.title),1)]),_:1},8,["href"])])):(l(),e("div",gt,kt))])]),Ct,Lt,St,Tt,(l(!0),e(r,null,v(d.comments,i=>(l(),e("div",{key:i.id},[Vt,At,Ht,n.userid!=null?(l(),e("div",jt,[t("div",It,[t("div",Nt,[t("div",Bt,[o(s(f),{class:"text-sky-900 w-10 h-10 my-auto md:w-12 md:h-12 lg:w-14 lg:h-14"})]),t("div",null,[t("div",Mt,a(i.user.name),1),t("div",Ot,[t("p",Ut," Commented On "+a(i.created_at)+" WIB ",1),i.user_id==c.$page.props.auth.user.id?(l(),e("div",$t,[t("button",{onClick:A=>T(i.id),tabindex:"-1",type:"button",class:"mx-4 my-auto"},[o(s(M),{class:"w-4 h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 text-rose-700"})],8,Et)])):I("",!0)]),t("div",{class:"md:mt-4 mt-2 ml-3 text-black font-normal text-base md:text-xl lg:text-2xl",innerHTML:i.comment},null,8,Ft)])])])])):(l(),e("div",zt,[t("div",Dt,[t("div",Pt,[t("div",Wt,[o(s(f),{class:"text-sky-900 w-10 h-10 my-auto md:w-12 md:h-12 lg:w-14 lg:h-14"})]),t("div",null,[t("div",qt,a(i.user.name),1),t("div",Rt,[t("p",Xt," Commented On "+a(i.created_at)+" WIB ",1)]),t("div",{class:"md:mt-4 mt-2 ml-3 text-black font-normal text-base md:text-xl lg:text-2xl",innerHTML:i.comment},null,8,Gt)])])])]))]))),128))])])])]))),128)),n.userid!=null?(l(),e("div",Jt,[t("div",Kt,[t("form",{onSubmit:b(V,["prevent"])},[t("div",Yt,[o(s(f),{class:"text-sky-900 w-12 h-12 my-auto mr-2 md:w-14 md:h-14 lg:w-16 lg:h-16"}),o(C,{id:"title",type:"text",placeholder:"Comment ..",class:"mt-4 mb-4 bg-sky-900 text-white block w-full placeholder:text-slate-100 placeholder:italic focus:border-sky-900 focus:ring-sky-900",modelValue:s(m).comment,"onUpdate:modelValue":h[0]||(h[0]=d=>s(m).comment=d)},null,8,["modelValue"]),t("button",Zt,[o(s(L),{class:"text-sky-900 w-8 h-8 my-auto ml-2"})])])],40,Qt)])])):(l(),e("div",te,[t("div",ee,[t("div",se,[o(s(f),{class:"text-sky-900 w-12 h-12 my-auto mr-2 md:w-14 md:h-14 lg:w-16 lg:h-16"}),o(C,{id:"title",type:"text",placeholder:"Login for comment ..",class:"mt-4 mb-4 bg-sky-900 text-white block w-full placeholder:text-slate-100 placeholder:italic focus:border-sky-900 focus:ring-sky-900",modelValue:s(m).comment,"onUpdate:modelValue":h[1]||(h[1]=d=>s(m).comment=d),disabled:""},null,8,["modelValue"]),t("button",null,[o(s(L),{class:"text-sky-900 w-8 h-8 my-auto ml-2"})])])])]))])])]),_:1})],64))}};export{ce as default};
