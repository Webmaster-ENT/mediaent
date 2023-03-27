import{o as s,c as a,d as e,F as c,r as u,U as p,Q as f,y as b,w as n,a as l,b as d,L as m,t as i,h as w}from"./app-b2bf0714.js";import{_ as g}from"./HomeLayout-bddec0a6.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{k as y,m as k,n as T}from"./index-b6012404.js";import"./open-closed-ab2ea00a.js";const S={data(){return{images:["../../lifestyle.png","../../illustrasi.png","../../hiburan.png"],theInterval:null,currentSlide:1}},mounted(){this.theInterval=setInterval(this.nextSlide,3e3)},beforeDestroy(){clearInterval(this.theInterval)},methods:{nextSlide(){this.currentSlide===3?this.currentSlide=1:this.currentSlide++}}},j={class:"w-full overflow-hidden"},I={class:"flex items-center"},$=f('<div class="absolute bg-slate-900 bg-opacity-50 w-full h-full"><div class="container mx-auto px-4 py-6 md:py-48 md:px-40"><div class="grid grid-cols-3"><div class="col-span-2"><h1 class="text-white text-xl md:text-7xl font-black"> Media ENT </h1><p class="text-white text-xs md:text-3xl my-4 md:my-24 font-medium"> Platfom media <span class="text-emerald-400"> Jurnalistik </span>yang memberi informasi seputar kampus, teknologi, dan berita terkini. </p><a href="about"><span class="rounded-lg p-1 md:p-3 px-3 md:px-8 bg-white text-sky-900 text-xs md:text-lg font-bold">About ENT </span></a></div></div></div></div>',1),L=["src"];function B(r,o,_,t,h,he){return s(),a("div",j,[e("div",I,[(s(!0),a(c,null,u(h.images,x=>(s(),a("div",{key:"pic-"+x,class:"w-full min-w-full max-w-full relative",style:p({transform:`translateX(${-100*(h.currentSlide-1)}%)`})},[$,e("img",{src:x,class:"w-full"},null,8,L)],4))),128))])])}const H=v(S,[["render",B]]);const N={class:"bg-sky-900"},A={class:"max-w-xs mx-auto overflow-hidden md:max-w-5xl lg:max-w-7xl"},V=e("div",{class:"md:ml-10 text-white pt-10 md:pt-16 mb-4 md:mb-10 md:pl-24"},[e("h1",{class:"text-lg md:text-2xl font-bold"},"Artikel Terbaru"),e("p",{class:"text-xs md:text-sm"}," Kumpulan artikel terbaru seputar kampus, teknologi, dan tren terkini. ")],-1),C={class:"container mx-auto md:px-6 pb-4 md:pb-12 sm:flex sm:flex-wrap sm:gap-3 sm:justify-center"},E={class:"p-3 rounded-2xl shadow-lg overflow-hidden bg-white sm:w-64 md:w-80 lg:w-72 xl:w-96"},M=["src"],O={class:"inline-block text-xs capitalize font-normal mt-4 text-white bg-sky-900 py-1 px-2 rounded-3xl w-auto flex-none"},F={class:"mt-3 text-sm font-bold h-14"},R={class:"text-xs font-medium opacity-80 mt-0 mt-3"},U=["innerHTML"],Y={class:"pt-3 float-right inline-block text-xs font-semibold text-sky-900 w-auto"},z=e("br",null,null,-1),D=e("div",{class:"md:ml-10 text-white mb-4 md:mb-10 md:pl-24"},[e("h1",{class:"text-2xl font-bold"},"Forum"),e("p",{class:"text-xs md:text-sm"}," Wadah komunikasi untuk menambah relasi dan berbagai informasi. ")],-1),W={class:"container mx-auto my-auto md:px-6 pb-4 md:pb-10 sm:flex sm:flex-wrap sm:gap-3 sm:justify-center"},J={class:"p-3 rounded-2xl shadow-lg overflow-hidden mb-6 md:mb-12 bg-white sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"},K={class:"grid grid-cols-6 mx-auto"},P={class:"col-span-5"},Q={class:"uppercase tracking-wide text-xs text-dark font-medium md:text-base lg:text-lg"},X={class:"font-medium text-slate-400 text-xs md:text-sm lg:text-base font"},q=["innerHTML"],G={class:"mt-4 md:mt-6"},Z={class:"flex text-dark items-center text-sm md:text-xl"},ee={class:"mx-2 mr-6"},te={class:"mx-2"},se=e("div",{class:"md:ml-10 text-white mb-4 md:mb-4 md:pl-24"},[e("h1",{class:"text-2xl font-bold"},"Video"),e("p",{class:"text-xs md:text-sm"}," Berbagai informasi menarik bersama ENT Crews melalui konten YouTube. ")],-1),le={class:"container mx-auto md:px-6 pb-4 md:pb-10 sm:flex sm:flex-wrap sm:gap-3 sm:justify-center"},ae={class:"container mx-auto md:p-6 sm:justify-center"},de={class:"grid grid-cols-3"},ie={class:"grid col-span-3 md:grid md:col-span-2"},oe=["src"],ne={class:"md:grid grid-none col-span-3 md:col-span-1 flex md:flex"},re=["href"],me={class:"md:flex mx-1"},ce=["src"],ue={class:"ml-0 md:ml-5 text-white text-xs mb-1 md:mb-4"},we={__name:"Home",props:{articles:Object,forums:Object,videos:Object,vidRecent:Object},setup(r){return(o,_)=>(s(),b(g,null,{default:n(()=>[l(H),e("div",N,[e("div",A,[V,e("div",C,[(s(!0),a(c,null,u(r.articles,t=>(s(),a("div",{key:t.id},[e("div",E,[l(d(m),{href:o.route("detail-article.showArticle",t.slug)},{default:n(()=>[e("img",{class:"rounded-lg w-full aspect-video",src:t.thumbnail,alt:""},null,8,M)]),_:2},1032,["href"]),e("div",O,i(t.category.name),1),e("div",F,[l(d(m),{href:o.route("detail-article.showArticle",t.slug)},{default:n(()=>[e("p",null,i(t.title.substring(0,100)),1)]),_:2},1032,["href"])]),e("div",R,[e("span",{innerHTML:t.summary.substring(0,200)},null,8,U)]),e("div",Y,[l(d(m),{href:o.route("detail-article.showArticle",t.slug)},{default:n(()=>[w("Readmore")]),_:2},1032,["href"])])]),z]))),128))]),D,e("div",W,[(s(!0),a(c,null,u(r.forums,t=>(s(),a("div",{key:t.id},[e("div",J,[e("div",K,[e("div",null,[l(d(y),{class:"text-dark w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"})]),e("div",P,[e("div",Q,i(t.user.name),1),e("p",X," Asked On "+i(t.created_at)+" WIB ",1),l(d(m),{href:o.route("detail-forum.showforum",t.slug)},{default:n(()=>[e("div",{class:"mt-2 text-dark font-semibold mt-7 text-xs md:text-lg",innerHTML:t.subject},null,8,q)]),_:2},1032,["href"]),e("div",G,[l(d(m),{href:o.route("detail-forum.showforum",t.slug)},{default:n(()=>[e("div",Z,[l(d(k),{class:"w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"}),e("span",ee,i(t.likes.length),1),l(d(T),{class:"w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"}),e("span",te,i(t.comments.length),1)])]),_:2},1032,["href"])])])])])]))),128))]),se,e("div",le,[e("div",ae,[e("div",de,[e("div",ie,[e("iframe",{src:r.vidRecent.video_url,class:"rounded-2xl w-full aspect-video mb-5 md:mb-0",frameborder:"0",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},`
                `,8,oe)]),e("div",ne,[(s(!0),a(c,null,u(r.videos,t=>(s(),a("a",{key:t.id,href:t.video_url},[e("div",me,[e("iframe",{src:t.video_url,class:"rounded-md md:rounded-2xl w-full md:w-1/2 aspect-video ml-0 md:ml-5 mb-2 md:mb-14",frameborder:"0",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},`
                      `,8,ce),e("p",ue,i(t.title),1)])],8,re))),128))])])])])])])]),_:1}))}};export{we as default};
