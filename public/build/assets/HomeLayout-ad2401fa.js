import{j as g,k as O,B as L,J as M,M as q,x as k,s as Q,N as W,O as R,o as D,c as P,d as r,P as re,y as j,w as S,a as _,b as I,F as A,r as F,q as K,t as V,T as ue,h as z,i as ie}from"./app-95aa28db.js";import{o as b,m as ce,u as H,c as ee,l as E,P as T,t as B,p as te,R as C,a as h,y as de,S as fe,h as pe,D as ve,N as J,g as ae,I as me,r as be}from"./use-outside-click-148ae59d.js";import{_ as he}from"./_plugin-vue_export-helper-c27b6911.js";function ge(e){throw new Error("Unexpected object: "+e)}var w=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(w||{});function xe(e,n){let o=n.resolveItems();if(o.length<=0)return null;let c=n.resolveActiveIndex(),t=c??-1,f=(()=>{switch(e.focus){case 0:return o.findIndex(s=>!n.resolveDisabled(s));case 1:{let s=o.slice().reverse().findIndex((l,d,p)=>t!==-1&&p.length-d-1>=t?!1:!n.resolveDisabled(l));return s===-1?s:o.length-1-s}case 2:return o.findIndex((s,l)=>l<=t?!1:!n.resolveDisabled(s));case 3:{let s=o.slice().reverse().findIndex(l=>!n.resolveDisabled(l));return s===-1?s:o.length-1-s}case 4:return o.findIndex(s=>n.resolveId(s)===e.id);case 5:return null;default:ge(e)}})();return f===-1?c:f}function Y(e,n){if(e)return e;let o=n??"button";if(typeof o=="string"&&o.toLowerCase()==="button")return"button"}function le(e,n){let o=g(Y(e.value.type,e.value.as));return O(()=>{o.value=Y(e.value.type,e.value.as)}),L(()=>{var c;o.value||!b(n)||b(n)instanceof HTMLButtonElement&&!((c=b(n))!=null&&c.hasAttribute("type"))&&(o.value="button")}),o}function ye({container:e,accept:n,walk:o,enabled:c}){L(()=>{let t=e.value;if(!t||c!==void 0&&!c.value)return;let f=ce(e);if(!f)return;let s=Object.assign(d=>n(d),{acceptNode:n}),l=f.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,s,!1);for(;l.nextNode();)o(l.currentNode)})}function G(e){return[e.screenX,e.screenY]}function we(){let e=g([-1,-1]);return{wasMoved(n){let o=G(n);return e.value[0]===o[0]&&e.value[1]===o[1]?!1:(e.value=o,!0)},update(n){e.value=G(n)}}}var _e=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(_e||{});let ne=Symbol("DisclosureContext");function X(e){let n=W(ne,null);if(n===null){let o=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,X),o}return n}let se=Symbol("DisclosurePanelContext");function ke(){return W(se,null)}let Ie=M({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:n,attrs:o}){let c=g(e.defaultOpen?0:1),t=g(null),f=g(null),s={buttonId:g(null),panelId:g(null),disclosureState:c,panel:t,button:f,toggleDisclosure(){c.value=H(c.value,{[0]:1,[1]:0})},closeDisclosure(){c.value!==1&&(c.value=1)},close(l){s.closeDisclosure();let d=(()=>l?l instanceof HTMLElement?l:l.value instanceof HTMLElement?b(l):b(s.button):b(s.button))();d==null||d.focus()}};return q(ne,s),ee(k(()=>H(c.value,{[0]:E.Open,[1]:E.Closed}))),()=>{let{defaultOpen:l,...d}=e,p={open:c.value===0,close:s.close};return T({theirProps:d,ourProps:{},slot:p,slots:n,attrs:o,name:"Disclosure"})}}}),Z=M({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-disclosure-button-${B()}`}},setup(e,{attrs:n,slots:o,expose:c}){let t=X("DisclosureButton");O(()=>{t.buttonId.value=e.id}),Q(()=>{t.buttonId.value=null});let f=ke(),s=k(()=>f===null?!1:f.value===t.panelId.value),l=g(null);c({el:l,$el:l}),s.value||L(()=>{t.button.value=l.value});let d=le(k(()=>({as:e.as,type:n.type})),l);function p(){var u;e.disabled||(s.value?(t.toggleDisclosure(),(u=b(t.button))==null||u.focus()):t.toggleDisclosure())}function a(u){var v;if(!e.disabled)if(s.value)switch(u.key){case h.Space:case h.Enter:u.preventDefault(),u.stopPropagation(),t.toggleDisclosure(),(v=b(t.button))==null||v.focus();break}else switch(u.key){case h.Space:case h.Enter:u.preventDefault(),u.stopPropagation(),t.toggleDisclosure();break}}function x(u){switch(u.key){case h.Space:u.preventDefault();break}}return()=>{let u={open:t.disclosureState.value===0},{id:v,...i}=e,m=s.value?{ref:l,type:d.value,onClick:p,onKeydown:a}:{id:v,ref:l,type:d.value,"aria-expanded":e.disabled?void 0:t.disclosureState.value===0,"aria-controls":b(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:p,onKeydown:a,onKeyup:x};return T({ourProps:m,theirProps:i,slot:u,attrs:n,slots:o,name:"DisclosureButton"})}}}),Se=M({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-disclosure-panel-${B()}`}},setup(e,{attrs:n,slots:o,expose:c}){let t=X("DisclosurePanel");O(()=>{t.panelId.value=e.id}),Q(()=>{t.panelId.value=null}),c({el:t.panel,$el:t.panel}),q(se,t.panelId);let f=te(),s=k(()=>f!==null?f.value===E.Open:t.disclosureState.value===0);return()=>{let l={open:t.disclosureState.value===0,close:t.close},{id:d,...p}=e,a={id:d,ref:t.panel};return T({ourProps:a,theirProps:p,slot:l,attrs:n,slots:o,features:C.RenderStrategy|C.Static,visible:s.value,name:"DisclosurePanel"})}}});var De=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(De||{}),Pe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Pe||{});function Me(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let oe=Symbol("MenuContext");function $(e){let n=W(oe,null);if(n===null){let o=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,$),o}return n}let Te=M({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:n,attrs:o}){let c=g(1),t=g(null),f=g(null),s=g([]),l=g(""),d=g(null),p=g(1);function a(u=v=>v){let v=d.value!==null?s.value[d.value]:null,i=me(u(s.value.slice()),y=>b(y.dataRef.domRef)),m=v?i.indexOf(v):null;return m===-1&&(m=null),{items:i,activeItemIndex:m}}let x={menuState:c,buttonRef:t,itemsRef:f,items:s,searchQuery:l,activeItemIndex:d,activationTrigger:p,closeMenu:()=>{c.value=1,d.value=null},openMenu:()=>c.value=0,goToItem(u,v,i){let m=a(),y=xe(u===w.Specific?{focus:w.Specific,id:v}:{focus:u},{resolveItems:()=>m.items,resolveActiveIndex:()=>m.activeItemIndex,resolveId:N=>N.id,resolveDisabled:N=>N.dataRef.disabled});l.value="",d.value=y,p.value=i??1,s.value=m.items},search(u){let v=l.value!==""?0:1;l.value+=u.toLowerCase();let i=(d.value!==null?s.value.slice(d.value+v).concat(s.value.slice(0,d.value+v)):s.value).find(y=>y.dataRef.textValue.startsWith(l.value)&&!y.dataRef.disabled),m=i?s.value.indexOf(i):-1;m===-1||m===d.value||(d.value=m,p.value=1)},clearSearch(){l.value=""},registerItem(u,v){let i=a(m=>[...m,{id:u,dataRef:v}]);s.value=i.items,d.value=i.activeItemIndex,p.value=1},unregisterItem(u){let v=a(i=>{let m=i.findIndex(y=>y.id===u);return m!==-1&&i.splice(m,1),i});s.value=v.items,d.value=v.activeItemIndex,p.value=1}};return de([t,f],(u,v)=>{var i;x.closeMenu(),fe(v,pe.Loose)||(u.preventDefault(),(i=b(t))==null||i.focus())},k(()=>c.value===0)),q(oe,x),ee(k(()=>H(c.value,{[0]:E.Open,[1]:E.Closed}))),()=>{let u={open:c.value===0,close:x.closeMenu};return T({ourProps:{},theirProps:e,slot:u,slots:n,attrs:o,name:"Menu"})}}}),Re=M({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${B()}`}},setup(e,{attrs:n,slots:o,expose:c}){let t=$("MenuButton");c({el:t.buttonRef,$el:t.buttonRef});function f(p){switch(p.key){case h.Space:case h.Enter:case h.ArrowDown:p.preventDefault(),p.stopPropagation(),t.openMenu(),R(()=>{var a;(a=b(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(w.First)});break;case h.ArrowUp:p.preventDefault(),p.stopPropagation(),t.openMenu(),R(()=>{var a;(a=b(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(w.Last)});break}}function s(p){switch(p.key){case h.Space:p.preventDefault();break}}function l(p){e.disabled||(t.menuState.value===0?(t.closeMenu(),R(()=>{var a;return(a=b(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(p.preventDefault(),t.openMenu(),Me(()=>{var a;return(a=b(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let d=le(k(()=>({as:e.as,type:n.type})),t.buttonRef);return()=>{var p;let a={open:t.menuState.value===0},{id:x,...u}=e,v={ref:t.buttonRef,id:x,type:d.value,"aria-haspopup":"menu","aria-controls":(p=b(t.itemsRef))==null?void 0:p.id,"aria-expanded":e.disabled?void 0:t.menuState.value===0,onKeydown:f,onKeyup:s,onClick:l};return T({ourProps:v,theirProps:u,slot:a,attrs:n,slots:o,name:"MenuButton"})}}}),Ee=M({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${B()}`}},setup(e,{attrs:n,slots:o,expose:c}){let t=$("MenuItems"),f=g(null);c({el:t.itemsRef,$el:t.itemsRef}),ye({container:k(()=>b(t.itemsRef)),enabled:k(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function s(a){var x;switch(f.value&&clearTimeout(f.value),a.key){case h.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case h.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let u=t.items.value[t.activeItemIndex.value];(x=b(u.dataRef.domRef))==null||x.click()}t.closeMenu(),ae(b(t.buttonRef));break;case h.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(w.Next);case h.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(w.Previous);case h.Home:case h.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(w.First);case h.End:case h.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(w.Last);case h.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),R(()=>{var u;return(u=b(t.buttonRef))==null?void 0:u.focus({preventScroll:!0})});break;case h.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),R(()=>ve(b(t.buttonRef),a.shiftKey?J.Previous:J.Next));break;default:a.key.length===1&&(t.search(a.key),f.value=setTimeout(()=>t.clearSearch(),350));break}}function l(a){switch(a.key){case h.Space:a.preventDefault();break}}let d=te(),p=k(()=>d!==null?d.value===E.Open:t.menuState.value===0);return()=>{var a,x;let u={open:t.menuState.value===0},{id:v,...i}=e,m={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(x=b(t.buttonRef))==null?void 0:x.id,id:v,onKeydown:s,onKeyup:l,role:"menu",tabIndex:0,ref:t.itemsRef};return T({ourProps:m,theirProps:i,slot:u,attrs:n,slots:o,features:C.RenderStrategy|C.Static,visible:p.value,name:"MenuItems"})}}}),Ne=M({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${B()}`}},setup(e,{slots:n,attrs:o,expose:c}){let t=$("MenuItem"),f=g(null);c({el:f,$el:f});let s=k(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),l=k(()=>({disabled:e.disabled,textValue:"",domRef:f}));O(()=>{var i,m;let y=(m=(i=b(f))==null?void 0:i.textContent)==null?void 0:m.toLowerCase().trim();y!==void 0&&(l.value.textValue=y)}),O(()=>t.registerItem(e.id,l)),Q(()=>t.unregisterItem(e.id)),L(()=>{t.menuState.value===0&&(!s.value||t.activationTrigger.value!==0&&R(()=>{var i,m;return(m=(i=b(f))==null?void 0:i.scrollIntoView)==null?void 0:m.call(i,{block:"nearest"})}))});function d(i){if(e.disabled)return i.preventDefault();t.closeMenu(),ae(b(t.buttonRef))}function p(){if(e.disabled)return t.goToItem(w.Nothing);t.goToItem(w.Specific,e.id)}let a=we();function x(i){a.update(i)}function u(i){!a.wasMoved(i)||e.disabled||s.value||t.goToItem(w.Specific,e.id,0)}function v(i){!a.wasMoved(i)||e.disabled||!s.value||t.goToItem(w.Nothing)}return()=>{let{disabled:i}=e,m={active:s.value,disabled:i,close:t.closeMenu},{id:y,...N}=e;return T({ourProps:{id:y,ref:f,role:"menuitem",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,onClick:d,onFocus:p,onPointerenter:x,onMouseenter:x,onPointermove:u,onMousemove:u,onPointerleave:v,onMouseleave:v},theirProps:N,slot:m,attrs:o,slots:n,name:"MenuItem"})}}});const U="/build/assets/Logo-ENT-Gelap-cf15fe6c.svg";function Oe(e,n){return D(),P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function Be(e,n){return D(),P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}const Ce={class:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},Le={class:"relative flex h-16 items-center justify-between"},$e={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},je=r("span",{class:"sr-only"},"Open main menu",-1),Ae={class:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"},Fe=r("div",{class:"flex flex-shrink-0 items-center mr-16"},[r("img",{class:"block h-12 w-auto lg:hidden",src:U,alt:"Logo ENT"}),r("img",{class:"hidden h-12 w-auto lg:block",src:U,alt:"Logo ENT"})],-1),Ke={class:"hidden sm:ml-6 sm:block mt-1"},Ve={class:"flex space-x-4"},He=["href","aria-current"],Ue=r("span",{class:"py-2 rounded-md text-sm font-medium hover:font-bold"},null,-1),qe=["href"],Qe={class:"space-y-1 px-2 pt-2 pb-3"},We={__name:"NavbarUser",setup(e){const n=[{name:"Article",href:"#article",current:!1},{name:"Forum",href:"#forum",current:!1},{name:"Video",href:"#video",current:!1},{name:"About",href:"#about",current:!1}],o=[{name:"Lifestyle",href:"#lifestyle"},{name:"Hiburan",href:"#hiburan"},{name:"Teknologi",href:"#teknologi"},{name:"Otomotif",href:"#otomotif"}];return(c,t)=>{const f=re("Button");return D(),j(I(Ie),{as:"nav",class:"bg-white shadow-md"},{default:S(({open:s})=>[r("div",Ce,[r("div",Le,[r("div",$e,[_(I(Z),{class:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"},{default:S(()=>[je,s?(D(),j(I(Be),{key:1,class:"block h-6 w-6","aria-hidden":"true"})):(D(),j(I(Oe),{key:0,class:"block h-6 w-6","aria-hidden":"true"}))]),_:2},1024)]),r("div",Ae,[Fe,r("div",Ke,[r("div",Ve,[(D(),P(A,null,F(n,l=>r("a",{key:l.name,href:l.href,class:K([l.current?"text-black ":"text-black hover:bg-white hover:text-black hover:font-bold","px-3 py-2 rounded-md text-sm font-semibold"]),"aria-current":l.current?"page":void 0},V(l.name),11,He)),64)),_(I(Te),{as:"div",class:"relative ml-3"},{default:S(()=>[r("div",null,[_(I(Re),{class:"flex"},{default:S(()=>[Ue,_(I(be),{class:"w-3 h-3 ml-1 mt-3"})]),_:1})]),_(ue,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:S(()=>[_(I(Ee),{class:"absolute mt-2 w-48 origin-top-center rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:S(()=>[(D(),P(A,null,F(o,l=>_(I(Ne),{key:l.name},{default:S(({active:d})=>[r("a",{href:l.href,class:K([d?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},V(l.name),11,qe)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})])])]),_(f,{class:"bg-sky-900 rounded-full px-6 py-1 font-medium hover:font-bold hover:bg-sky-300 text-sm normal-case text-white"},{default:S(()=>[z("Login")]),_:1})])]),_(I(Se),{class:"sm:hidden"},{default:S(()=>[r("div",Qe,[(D(),P(A,null,F(n,l=>_(I(Z),{key:l.name,as:"a",href:l.href,class:K([l.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"]),"aria-current":l.current?"page":void 0},{default:S(()=>[z(V(l.name),1)]),_:2},1032,["href","class","aria-current"])),64))])]),_:1})]),_:1})}}},Xe={},ze={class:"px-4 pb-4 bg-slate-50 md:px-6 md:pb-8 dark:bg-gray-900"},Je=r("div",{class:"sm:flex mx-auto max-w-7xl sm:items-center sm:justify-between"},[r("div",null,[r("a",{class:"flex items-center mb-4 sm:mb-0"},[r("img",{src:U,class:"h-52 pt-6 bg-sky-100 rounded-b-xl p-2",alt:"Logo ENT"})])]),r("div",{class:"md:text-center"},[r("div",{class:"content-center text-gray-500 dark:text-gray-400"},[r("a",{href:"#article",class:"hover:font-black mr-4 md:mx-4 font-bold text-sm"},"Article"),r("a",{href:"#forum",class:"hover:font-black font-bold mx-4 text-sm"},"Forum"),r("a",{href:"#video",class:"hover:font-black font-bold mx-4 text-sm"},"Video"),r("a",{href:"#about",class:"hover:font-black font-bold mx-4 text-sm hover:"},"About")]),r("a",{href:"https://www.facebook.com"},[r("i",{class:"fa-brands fa-facebook-f text-xl text-slate-400 mx-3 md:mt-8 sm:mt-1"})]),r("a",{href:"https://www.instagram.com/entcrews",target:"_blank"},[r("i",{class:"fa-brands fa-instagram text-xl text-slate-400 mt-4 mx-3"})]),r("a",{href:"mailto: ent@gmail.com",target:"_blank"},[r("i",{class:"fa-solid fa-envelope text-xl text-slate-400 mx-3"})]),r("a",{href:"https://www.twitter.com/entcrews",target:"_blank"},[r("i",{class:"fa-brands fa-twitter text-xl text-slate-400 mx-3"})]),r("a",{href:"https://www.youtube.com/@entcrews",target:"_Blank"},[r("i",{class:"fa-brands fa-youtube text-xl text-slate-400 mx-3"})]),r("br"),r("span",{class:"mt-4 text-xs font-bold text-slate-400"},"@ 2023 EEPIS News and Network Team")]),r("div",null,[r("h2",{class:"my-2 font-semibold text-md"},"Location"),r("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.691977074115!2d112.79156701477496!3d-7.2758470947483636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa10ea2ae883%3A0xbe22c55d60ef09c7!2sPoliteknik%20Elektronika%20Negeri%20Surabaya!5e0!3m2!1sid!2sid!4v1675351583121!5m2!1sid!2sid",width:"300",height:"168",style:{border:"0"},allowfullscreen:"",loading:"lazy",class:"rounded-xl",referrerpolicy:"no-referrer-when-downgrade"})])],-1),Ye=[Je];function Ge(e,n,o,c,t,f){return D(),P("footer",ze,Ye)}const Ze=he(Xe,[["render",Ge]]);const et={class:"w-full"},nt={__name:"HomeLayout",setup(e){return(n,o)=>(D(),P("div",et,[_(We),r("main",null,[ie(n.$slots,"default")]),_(Ze)]))}};export{nt as _};
