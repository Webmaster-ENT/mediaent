import{o as y,c as O,d,k as A,s as S,x as w,j as _,i as m,g as b,z as k,a as D,w as E,q as j,b as h,T as P,y as T,L as B,S as L,K as U,F as z,N,M as R}from"./app-96fff0c4.js";function X(e,t){return y(),O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z","clip-rule":"evenodd"})])}const H={class:"relative"},Z={__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white dark:bg-gray-700"]}},setup(e){const t=e,r=i=>{o.value&&i.key==="Escape"&&(o.value=!1)};A(()=>document.addEventListener("keydown",r)),S(()=>document.removeEventListener("keydown",r));const a=w(()=>({48:"w-48"})[t.width.toString()]),n=w(()=>t.align==="left"?"origin-top-left left-0":t.align==="right"?"origin-top-right right-0":"origin-top"),o=_(!1);return(i,s)=>(y(),O("div",H,[d("div",{onClick:s[0]||(s[0]=l=>o.value=!o.value)},[m(i.$slots,"trigger")]),b(d("div",{class:"fixed inset-0 z-40",onClick:s[1]||(s[1]=l=>o.value=!1)},null,512),[[k,o.value]]),D(P,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:E(()=>[b(d("div",{class:j(["absolute z-50 mt-2 rounded-md shadow-lg",[h(a),h(n)]]),style:{display:"none"},onClick:s[2]||(s[2]=l=>o.value=!1)},[d("div",{class:j(["rounded-md ring-1 ring-black ring-opacity-5",e.contentClasses])},[m(i.$slots,"content")],2)],2),[[k,o.value]])]),_:3})]))}},ee={__name:"DropdownLink",setup(e){return(t,r)=>(y(),T(h(B),{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},{default:E(()=>[m(t.$slots,"default")]),_:3}))}};function $(e,t,...r){if(e in t){let n=t[e];return typeof n=="function"?n(...r):n}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,$),a}var M=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(M||{}),V=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(V||{});function te({visible:e=!0,features:t=0,ourProps:r,theirProps:a,...n}){var o;let i=F(a,r),s=Object.assign(n,{props:i});if(e||t&2&&i.static)return v(s);if(t&1){let l=(o=i.unmount)==null||o?0:1;return $(l,{[0](){return null},[1](){return v({...n,props:{...i,hidden:!0,style:{display:"none"}}})}})}return v(s)}function v({props:e,attrs:t,slots:r,slot:a,name:n}){var o;let{as:i,...s}=q(e,["unmount","static"]),l=(o=r.default)==null?void 0:o.call(r,a),g={};if(a){let c=!1,f=[];for(let[u,p]of Object.entries(a))typeof p=="boolean"&&(c=!0),p===!0&&f.push(u);c&&(g["data-headlessui-state"]=f.join(" "))}if(i==="template"){if(l=C(l??[]),Object.keys(s).length>0||Object.keys(t).length>0){let[c,...f]=l??[];if(!K(c)||f.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(t)).sort((u,p)=>u.localeCompare(p)).map(u=>`  - ${u}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(u=>`  - ${u}`).join(`
`)].join(`
`));return L(c,Object.assign({},s,g))}return Array.isArray(l)&&l.length===1?l[0]:l}return U(i,Object.assign({},s,g),{default:()=>l})}function C(e){return e.flatMap(t=>t.type===z?C(t.children):[t])}function F(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let a of e)for(let n in a)n.startsWith("on")&&typeof a[n]=="function"?(r[n]!=null||(r[n]=[]),r[n].push(a[n])):t[n]=a[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(a=>[a,void 0])));for(let a in r)Object.assign(t,{[a](n,...o){let i=r[a];for(let s of i){if(n instanceof Event&&n.defaultPrevented)return;s(n,...o)}}});return t}function q(e,t=[]){let r=Object.assign({},e);for(let a of t)a in r&&delete r[a];return r}function K(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let W=0;function Y(){return++W}function ne(){return Y()}var G=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(G||{});function ae(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let x=Symbol("Context");var I=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(I||{});function re(){return J()!==null}function J(){return N(x,null)}function oe(e){R(x,e)}export{V as O,te as P,M as R,ee as _,Z as a,G as b,oe as c,re as f,I as l,ae as o,J as p,X as r,ne as t,$ as u,q as w};
