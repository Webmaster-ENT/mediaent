import{o as s,c as d,d as t,F as c,r as u,U as p,Q as f,y as b,w as n,a as l,b as a,L as r,t as i,h as g}from"./app-ad1d24c1.js";import{_ as w}from"./HomeLayout-30e8d94d.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{k,m as y,n as T}from"./index-b4ea0a60.js";import"./open-closed-333816d4.js";const S={data(){return{images:["../../lifestyle.png","../../illustrasi.png","../../hiburan.png"],theInterval:null,currentSlide:1}},mounted(){this.theInterval=setInterval(this.nextSlide,3e3)},beforeDestroy(){clearInterval(this.theInterval)},methods:{nextSlide(){this.currentSlide===3?this.currentSlide=1:this.currentSlide++}}},j={class:"w-full overflow-hidden"},I={class:"flex items-center"},$=f('<div class="absolute bg-slate-900 bg-opacity-50 w-full h-full"><div class="container mx-auto px-4 py-6 md:py-48 md:px-40"><div class="grid grid-cols-3"><div class="col-span-2"><h1 class="text-white text-xl md:text-7xl font-black"> Media ENT </h1><p class="text-white text-xs md:text-3xl my-4 md:my-24 font-medium"> Platfom media <span class="text-emerald-400"> Jurnalistik </span>yang memberi informasi seputar kampus, teknologi, dan berita terkini. </p><span class="rounded-lg p-1 md:p-3 px-3 md:px-8 bg-white text-sky-900 text-xs md:text-lg font-bold">About ENT</span></div></div></div></div>',1),L=["src"];function B(m,o,_,e,h,ht){return s(),d("div",j,[t("div",I,[(s(!0),d(c,null,u(h.images,x=>(s(),d("div",{key:"pic-"+x,class:"w-full min-w-full max-w-full relative",style:p({transform:`translateX(${-100*(h.currentSlide-1)}%)`})},[$,t("img",{src:x,class:"w-full"},null,8,L)],4))),128))])])}const H=v(S,[["render",B]]);const N={class:"bg-sky-900"},A={class:"max-w-xs mx-auto overflow-hidden md:max-w-5xl lg:max-w-7xl"},V=t("div",{class:"md:ml-10 text-white pt-10 md:pt-16 mb-4 md:mb-10 md:pl-24"},[t("h1",{class:"text-lg md:text-2xl font-bold"},"Artikel Terbaru"),t("p",{class:"text-xs md:text-sm"}," Kumpulan artikel terbaru seputar kampus, teknologi, dan tren terkini. ")],-1),C={class:"container mx-auto md:px-6 pb-4 md:pb-12 sm:flex sm:flex-wrap sm:gap-3 sm:justify-center"},E={class:"p-3 rounded-2xl shadow-lg overflow-hidden bg-white sm:w-64 md:w-80 lg:w-72 xl:w-96"},M=["src"],O={class:"inline-block text-xs capitalize font-normal mt-4 text-white bg-sky-900 py-1 px-2 rounded-3xl w-auto flex-none"},F={class:"mt-3 text-sm font-bold h-14"},R={class:"text-xs font-medium opacity-80 mt-0 mt-3"},U=["innerHTML"],z={class:"pt-3 float-right inline-block text-xs font-semibold text-sky-900 w-auto"},D=t("br",null,null,-1),W=t("div",{class:"md:ml-10 text-white mb-4 md:mb-10 md:pl-24"},[t("h1",{class:"text-2xl font-bold"},"Forum"),t("p",{class:"text-xs md:text-sm"}," Wadah komunikasi untuk menambah relasi dan berbagai informasi. ")],-1),Y={class:"container mx-auto my-auto md:px-6 pb-4 md:pb-10 sm:flex sm:flex-wrap sm:gap-3 sm:justify-center"},J={class:"p-3 rounded-2xl shadow-lg overflow-hidden mb-6 md:mb-12 bg-white sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"},K={class:"grid grid-cols-6 mx-auto"},P={class:"col-span-5"},Q={class:"uppercase tracking-wide text-xs text-dark font-medium md:text-base lg:text-lg"},X={class:"font-medium text-slate-400 text-xs md:text-sm lg:text-base font"},q=["innerHTML"],G={class:"mt-4 md:mt-6"},Z={class:"flex text-dark items-center text-sm md:text-xl"},tt={class:"mx-2 mr-6"},et={class:"mx-2"},st=t("div",{class:"md:ml-10 text-white mb-4 md:mb-4 md:pl-24"},[t("h1",{class:"text-2xl font-bold"},"Video"),t("p",{class:"text-xs md:text-sm"}," Berbagai informasi menarik bersama ENT Crews melalui konten YouTube. ")],-1),lt={class:"container mx-auto md:px-6 pb-4 md:pb-10 sm:flex sm:flex-wrap sm:gap-3 sm:justify-center"},dt={class:"container mx-auto md:p-6 sm:justify-center"},at={class:"grid grid-cols-3"},it={class:"grid col-span-3 md:grid md:col-span-2"},ot=["src"],nt={class:"md:grid grid-none col-span-3 md:col-span-1 flex md:flex"},mt=["href"],rt={class:"md:flex mx-1"},ct=["src","alt"],ut={class:"ml-0 md:ml-5 text-white text-xs mb-1 md:mb-4"},gt={__name:"Home",props:{articles:Object,forums:Object,videos:Object,vidRecent:Object},setup(m){return(o,_)=>(s(),b(w,null,{default:n(()=>[l(H),t("div",N,[t("div",A,[V,t("div",C,[(s(!0),d(c,null,u(m.articles,e=>(s(),d("div",{key:e.id},[t("div",E,[l(a(r),{href:o.route("detail-article.showArticle",e.slug)},{default:n(()=>[t("img",{class:"rounded-lg w-full aspect-video",src:e.thumbnail,alt:""},null,8,M)]),_:2},1032,["href"]),t("div",O,i(e.category.name),1),t("div",F,[l(a(r),{href:o.route("detail-article.showArticle",e.slug)},{default:n(()=>[t("p",null,i(e.title.substring(0,100)),1)]),_:2},1032,["href"])]),t("div",R,[t("span",{innerHTML:e.summary.substring(0,200)},null,8,U)]),t("div",z,[l(a(r),{href:o.route("detail-article.showArticle",e.slug)},{default:n(()=>[g("Readmore")]),_:2},1032,["href"])])]),D]))),128))]),W,t("div",Y,[(s(!0),d(c,null,u(m.forums,e=>(s(),d("div",{key:e.id},[t("div",J,[t("div",K,[t("div",null,[l(a(k),{class:"text-dark w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"})]),t("div",P,[t("div",Q,i(e.user.name),1),t("p",X," Asked On "+i(e.created_at)+" WIB ",1),l(a(r),{href:o.route("detail-forum.showforum",e.slug)},{default:n(()=>[t("div",{class:"mt-2 text-dark font-semibold mt-7 text-xs md:text-lg",innerHTML:e.subject},null,8,q)]),_:2},1032,["href"]),t("div",G,[l(a(r),{href:o.route("detail-forum.showforum",e.slug)},{default:n(()=>[t("div",Z,[l(a(y),{class:"w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"}),t("span",tt,i(e.likes.length),1),l(a(T),{class:"w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"}),t("span",et,i(e.comments.length),1)])]),_:2},1032,["href"])])])])])]))),128))]),st,t("div",lt,[t("div",dt,[t("div",at,[t("div",it,[t("iframe",{src:m.vidRecent.video_url,class:"rounded-2xl w-full aspect-video mb-5 md:mb-0",frameborder:"0",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},`
                `,8,ot)]),t("div",nt,[(s(!0),d(c,null,u(m.videos,e=>(s(),d("a",{key:e.id,href:e.video_url},[t("div",rt,[t("img",{src:"storage/images/video/"+e.thumbnail,alt:e.title,class:"rounded-md md:rounded-2xl w-full md:w-1/2 aspect-video ml-0 md:ml-5 mb-2 md:mb-14"},null,8,ct),t("p",ut,i(e.title),1)])],8,mt))),128))])])])])])])]),_:1}))}};export{gt as default};
