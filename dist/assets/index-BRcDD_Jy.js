import{j as c,c as hn,a as he,A as ma,T as pa,I as ot,b as pn,F as ep,P as tp,S as np,d as rp,D as ga,e as ya,f as uh,B as sp,g as yo,h as _a,i as ze,C as ip,k as _o,l as op}from"./mui-Ca9oC7IP.js";import{c as ap,r as T,a as ie}from"./react-DU2EIy90.js";import{u as lp,m as Vn}from"./framer-BU3UZR6b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var hh,Ec=ap;hh=Ec.createRoot,Ec.hydrateRoot;/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Tc="popstate";function cp(n={}){function e(r,s){let{pathname:i,search:o,hash:l}=r.location;return Oo("",{pathname:i,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){return typeof s=="string"?s:Ur(s)}return hp(e,t,null,n)}function le(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function et(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function up(){return Math.random().toString(36).substring(2,10)}function Ic(n,e){return{usr:n.state,key:n.key,idx:e}}function Oo(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Zn(e):e,state:t,key:e&&e.key||r||up()}}function Ur({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Zn(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function hp(n,e,t,r={}){let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l="POP",u=null,d=m();d==null&&(d=0,o.replaceState({...o.state,idx:d},""));function m(){return(o.state||{idx:null}).idx}function p(){l="POP";let x=m(),D=x==null?null:x-d;d=x,u&&u({action:l,location:P.location,delta:D})}function v(x,D){l="PUSH";let C=Oo(P.location,x,D);d=m()+1;let S=Ic(C,d),j=P.createHref(C);try{o.pushState(S,"",j)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;s.location.assign(j)}i&&u&&u({action:l,location:P.location,delta:1})}function _(x,D){l="REPLACE";let C=Oo(P.location,x,D);d=m();let S=Ic(C,d),j=P.createHref(C);o.replaceState(S,"",j),i&&u&&u({action:l,location:P.location,delta:0})}function A(x){return dp(x)}let P={get action(){return l},get location(){return n(s,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Tc,p),u=x,()=>{s.removeEventListener(Tc,p),u=null}},createHref(x){return e(s,x)},createURL:A,encodeLocation(x){let D=A(x);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:v,replace:_,go(x){return o.go(x)}};return P}function dp(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),le(t,"No window.location.(origin|href) available to create URL");let r=typeof n=="string"?n:Ur(n);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=t+r),new URL(r,t)}function dh(n,e,t="/"){return fp(n,e,t,!1)}function fp(n,e,t,r){let s=typeof e=="string"?Zn(e):e,i=It(s.pathname||"/",t);if(i==null)return null;let o=fh(n);mp(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let d=Ip(i);l=Ep(o[u],d,r)}return l}function fh(n,e=[],t=[],r="",s=!1){let i=(o,l,u=s,d)=>{let m={relativePath:d===void 0?o.path||"":d,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(r)&&u)return;le(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length)}let p=Et([r,m.relativePath]),v=t.concat(m);o.children&&o.children.length>0&&(le(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),fh(o.children,e,v,p,u)),!(o.path==null&&!o.index)&&e.push({path:p,score:bp(p,o.index),routesMeta:v})};return n.forEach((o,l)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))i(o,l);else for(let d of mh(o.path))i(o,l,!0,d)}),e}function mh(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=mh(r.join("/")),l=[];return l.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&l.push(...o),l.map(u=>n.startsWith("/")&&u===""?"/":u)}function mp(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:xp(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var pp=/^:[\w-]+$/,gp=3,yp=2,_p=1,vp=10,wp=-2,Rc=n=>n==="*";function bp(n,e){let t=n.split("/"),r=t.length;return t.some(Rc)&&(r+=wp),e&&(r+=yp),t.filter(s=>!Rc(s)).reduce((s,i)=>s+(pp.test(i)?gp:i===""?_p:vp),r)}function xp(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function Ep(n,e,t=!1){let{routesMeta:r}=n,s={},i="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,m=i==="/"?e:e.slice(i.length)||"/",p=Xs({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},m),v=u.route;if(!p&&d&&t&&!r[r.length-1].route.index&&(p=Xs({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},m)),!p)return null;Object.assign(s,p.params),o.push({params:s,pathname:Et([i,p.pathname]),pathnameBase:Sp(Et([i,p.pathnameBase])),route:v}),p.pathnameBase!=="/"&&(i=Et([i,p.pathnameBase]))}return o}function Xs(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=Tp(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((d,{paramName:m,isOptional:p},v)=>{if(m==="*"){let A=l[v]||"";o=i.slice(0,i.length-A.length).replace(/(.)\/+$/,"$1")}const _=l[v];return p&&!_?d[m]=void 0:d[m]=(_||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:n}}function Tp(n,e=!1,t=!0){et(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function Ip(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return et(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function It(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function Rp(n,e="/"){let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?Zn(n):n;return{pathname:t?t.startsWith("/")?t:Ap(t,e):e,search:Np(r),hash:Pp(s)}}function Ap(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function vo(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Cp(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function va(n){let e=Cp(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function wa(n,e,t,r=!1){let s;typeof n=="string"?s=Zn(n):(s={...n},le(!s.pathname||!s.pathname.includes("?"),vo("?","pathname","search",s)),le(!s.pathname||!s.pathname.includes("#"),vo("#","pathname","hash",s)),le(!s.search||!s.search.includes("#"),vo("#","search","hash",s)));let i=n===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=t;else{let p=e.length-1;if(!r&&o.startsWith("..")){let v=o.split("/");for(;v[0]==="..";)v.shift(),p-=1;s.pathname=v.join("/")}l=p>=0?e[p]:"/"}let u=Rp(s,l),d=o&&o!=="/"&&o.endsWith("/"),m=(i||o===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(d||m)&&(u.pathname+="/"),u}var Et=n=>n.join("/").replace(/\/\/+/g,"/"),Sp=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Np=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Pp=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function kp(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var ph=["POST","PUT","PATCH","DELETE"];new Set(ph);var Dp=["GET",...ph];new Set(Dp);var er=T.createContext(null);er.displayName="DataRouter";var wi=T.createContext(null);wi.displayName="DataRouterState";T.createContext(!1);var gh=T.createContext({isTransitioning:!1});gh.displayName="ViewTransition";var Vp=T.createContext(new Map);Vp.displayName="Fetchers";var jp=T.createContext(null);jp.displayName="Await";var tt=T.createContext(null);tt.displayName="Navigation";var Jr=T.createContext(null);Jr.displayName="Location";var _t=T.createContext({outlet:null,matches:[],isDataRoute:!1});_t.displayName="Route";var ba=T.createContext(null);ba.displayName="RouteError";function Op(n,{relative:e}={}){le(tr(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=T.useContext(tt),{hash:s,pathname:i,search:o}=Zr(n,{relative:e}),l=i;return t!=="/"&&(l=i==="/"?t:Et([t,i])),r.createHref({pathname:l,search:o,hash:s})}function tr(){return T.useContext(Jr)!=null}function He(){return le(tr(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Jr).location}var yh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _h(n){T.useContext(tt).static||T.useLayoutEffect(n)}function vt(){let{isDataRoute:n}=T.useContext(_t);return n?Qp():Lp()}function Lp(){le(tr(),"useNavigate() may be used only in the context of a <Router> component.");let n=T.useContext(er),{basename:e,navigator:t}=T.useContext(tt),{matches:r}=T.useContext(_t),{pathname:s}=He(),i=JSON.stringify(va(r)),o=T.useRef(!1);return _h(()=>{o.current=!0}),T.useCallback((u,d={})=>{if(et(o.current,yh),!o.current)return;if(typeof u=="number"){t.go(u);return}let m=wa(u,JSON.parse(i),s,d.relative==="path");n==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Et([e,m.pathname])),(d.replace?t.replace:t.push)(m,d.state,d)},[e,t,i,s,n])}T.createContext(null);function Zr(n,{relative:e}={}){let{matches:t}=T.useContext(_t),{pathname:r}=He(),s=JSON.stringify(va(t));return T.useMemo(()=>wa(n,JSON.parse(s),r,e==="path"),[n,s,r,e])}function Mp(n,e){return vh(n,e)}function vh(n,e,t,r,s){var C;le(tr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=T.useContext(tt),{matches:o}=T.useContext(_t),l=o[o.length-1],u=l?l.params:{},d=l?l.pathname:"/",m=l?l.pathnameBase:"/",p=l&&l.route;{let S=p&&p.path||"";wh(d,!p||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let v=He(),_;if(e){let S=typeof e=="string"?Zn(e):e;le(m==="/"||((C=S.pathname)==null?void 0:C.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${S.pathname}" was given in the \`location\` prop.`),_=S}else _=v;let A=_.pathname||"/",P=A;if(m!=="/"){let S=m.replace(/^\//,"").split("/");P="/"+A.replace(/^\//,"").split("/").slice(S.length).join("/")}let x=dh(n,{pathname:P});et(p||x!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),et(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=zp(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},u,S.params),pathname:Et([m,i.encodeLocation?i.encodeLocation(S.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?m:Et([m,i.encodeLocation?i.encodeLocation(S.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),o,t,r,s);return e&&D?T.createElement(Jr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},D):D}function Up(){let n=Kp(),e=kp(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",n),o=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:i},"ErrorBoundary")," or"," ",T.createElement("code",{style:i},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),t?T.createElement("pre",{style:s},t):null,o)}var Fp=T.createElement(Up,null),$p=class extends T.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.unstable_onError?this.props.unstable_onError(n,e):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?T.createElement(_t.Provider,{value:this.props.routeContext},T.createElement(ba.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Bp({routeContext:n,match:e,children:t}){let r=T.useContext(er);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),T.createElement(_t.Provider,{value:n},t)}function zp(n,e=[],t=null,r=null,s=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let i=n,o=t==null?void 0:t.errors;if(o!=null){let d=i.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);le(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,d+1))}let l=!1,u=-1;if(t)for(let d=0;d<i.length;d++){let m=i[d];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=d),m.route.id){let{loaderData:p,errors:v}=t,_=m.route.loader&&!p.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||_){l=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((d,m,p)=>{let v,_=!1,A=null,P=null;t&&(v=o&&m.route.id?o[m.route.id]:void 0,A=m.route.errorElement||Fp,l&&(u<0&&p===0?(wh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,P=null):u===p&&(_=!0,P=m.route.hydrateFallbackElement||null)));let x=e.concat(i.slice(0,p+1)),D=()=>{let C;return v?C=A:_?C=P:m.route.Component?C=T.createElement(m.route.Component,null):m.route.element?C=m.route.element:C=d,T.createElement(Bp,{match:m,routeContext:{outlet:d,matches:x,isDataRoute:t!=null},children:C})};return t&&(m.route.ErrorBoundary||m.route.errorElement||p===0)?T.createElement($p,{location:t.location,revalidation:t.revalidation,component:A,error:v,children:D(),routeContext:{outlet:null,matches:x,isDataRoute:!0},unstable_onError:r}):D()},null)}function xa(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hp(n){let e=T.useContext(er);return le(e,xa(n)),e}function qp(n){let e=T.useContext(wi);return le(e,xa(n)),e}function Wp(n){let e=T.useContext(_t);return le(e,xa(n)),e}function Ea(n){let e=Wp(n),t=e.matches[e.matches.length-1];return le(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function Gp(){return Ea("useRouteId")}function Kp(){var r;let n=T.useContext(ba),e=qp("useRouteError"),t=Ea("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function Qp(){let{router:n}=Hp("useNavigate"),e=Ea("useNavigate"),t=T.useRef(!1);return _h(()=>{t.current=!0}),T.useCallback(async(s,i={})=>{et(t.current,yh),t.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:e,...i}))},[n,e])}var Ac={};function wh(n,e,t){!e&&!Ac[n]&&(Ac[n]=!0,et(!1,t))}T.memo(Yp);function Yp({routes:n,future:e,state:t,unstable_onError:r}){return vh(n,void 0,t,r,e)}function Xp({to:n,replace:e,state:t,relative:r}){le(tr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=T.useContext(tt);et(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=T.useContext(_t),{pathname:o}=He(),l=vt(),u=wa(n,va(i),o,r==="path"),d=JSON.stringify(u);return T.useEffect(()=>{l(JSON.parse(d),{replace:e,state:t,relative:r})},[l,d,r,e,t]),null}function $e(n){le(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Jp({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:s,static:i=!1}){le(!tr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=n.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:o,navigator:s,static:i,future:{}}),[o,s,i]);typeof t=="string"&&(t=Zn(t));let{pathname:u="/",search:d="",hash:m="",state:p=null,key:v="default"}=t,_=T.useMemo(()=>{let A=It(u,o);return A==null?null:{location:{pathname:A,search:d,hash:m,state:p,key:v},navigationType:r}},[o,u,d,m,p,v,r]);return et(_!=null,`<Router basename="${o}"> is not able to match the URL "${u}${d}${m}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:T.createElement(tt.Provider,{value:l},T.createElement(Jr.Provider,{children:e,value:_}))}function Zp({children:n,location:e}){return Mp(Lo(n),e)}function Lo(n,e=[]){let t=[];return T.Children.forEach(n,(r,s)=>{if(!T.isValidElement(r))return;let i=[...e,s];if(r.type===T.Fragment){t.push.apply(t,Lo(r.props.children,i));return}le(r.type===$e,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),le(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Lo(r.props.children,i)),t.push(o)}),t}var Ms="get",Us="application/x-www-form-urlencoded";function bi(n){return n!=null&&typeof n.tagName=="string"}function eg(n){return bi(n)&&n.tagName.toLowerCase()==="button"}function tg(n){return bi(n)&&n.tagName.toLowerCase()==="form"}function ng(n){return bi(n)&&n.tagName.toLowerCase()==="input"}function rg(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function sg(n,e){return n.button===0&&(!e||e==="_self")&&!rg(n)}var Cs=null;function ig(){if(Cs===null)try{new FormData(document.createElement("form"),0),Cs=!1}catch{Cs=!0}return Cs}var og=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wo(n){return n!=null&&!og.has(n)?(et(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Us}"`),null):n}function ag(n,e){let t,r,s,i,o;if(tg(n)){let l=n.getAttribute("action");r=l?It(l,e):null,t=n.getAttribute("method")||Ms,s=wo(n.getAttribute("enctype"))||Us,i=new FormData(n)}else if(eg(n)||ng(n)&&(n.type==="submit"||n.type==="image")){let l=n.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=n.getAttribute("formaction")||l.getAttribute("action");if(r=u?It(u,e):null,t=n.getAttribute("formmethod")||l.getAttribute("method")||Ms,s=wo(n.getAttribute("formenctype"))||wo(l.getAttribute("enctype"))||Us,i=new FormData(l,n),!ig()){let{name:d,type:m,value:p}=n;if(m==="image"){let v=d?`${d}.`:"";i.append(`${v}x`,"0"),i.append(`${v}y`,"0")}else d&&i.append(d,p)}}else{if(bi(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Ms,r=null,s=Us,o=n}return i&&s==="text/plain"&&(o=i,i=void 0),{action:r,method:t.toLowerCase(),encType:s,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ta(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function lg(n,e,t){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname=`_root.${t}`:e&&It(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${t}`,r}async function cg(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ug(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function hg(n,e,t){let r=await Promise.all(n.map(async s=>{let i=e.routes[s.route.id];if(i){let o=await cg(i,t);return o.links?o.links():[]}return[]}));return pg(r.flat(1).filter(ug).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Cc(n,e,t,r,s,i){let o=(u,d)=>t[d]?u.route.id!==t[d].route.id:!0,l=(u,d)=>{var m;return t[d].pathname!==u.pathname||((m=t[d].route.path)==null?void 0:m.endsWith("*"))&&t[d].params["*"]!==u.params["*"]};return i==="assets"?e.filter((u,d)=>o(u,d)||l(u,d)):i==="data"?e.filter((u,d)=>{var p;let m=r.routes[u.route.id];if(!m||!m.hasLoader)return!1;if(o(u,d)||l(u,d))return!0;if(u.route.shouldRevalidate){let v=u.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((p=t[0])==null?void 0:p.params)||{},nextUrl:new URL(n,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function dg(n,e,{includeHydrateFallback:t}={}){return fg(n.map(r=>{let s=e.routes[r.route.id];if(!s)return[];let i=[s.module];return s.clientActionModule&&(i=i.concat(s.clientActionModule)),s.clientLoaderModule&&(i=i.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(i=i.concat(s.hydrateFallbackModule)),s.imports&&(i=i.concat(s.imports)),i}).flat(1))}function fg(n){return[...new Set(n)]}function mg(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function pg(n,e){let t=new Set;return new Set(e),n.reduce((r,s)=>{let i=JSON.stringify(mg(s));return t.has(i)||(t.add(i),r.push({key:i,link:s})),r},[])}function bh(){let n=T.useContext(er);return Ta(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function gg(){let n=T.useContext(wi);return Ta(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Ia=T.createContext(void 0);Ia.displayName="FrameworkContext";function xh(){let n=T.useContext(Ia);return Ta(n,"You must render this element inside a <HydratedRouter> element"),n}function yg(n,e){let t=T.useContext(Ia),[r,s]=T.useState(!1),[i,o]=T.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:d,onMouseLeave:m,onTouchStart:p}=e,v=T.useRef(null);T.useEffect(()=>{if(n==="render"&&o(!0),n==="viewport"){let P=D=>{D.forEach(C=>{o(C.isIntersecting)})},x=new IntersectionObserver(P,{threshold:.5});return v.current&&x.observe(v.current),()=>{x.disconnect()}}},[n]),T.useEffect(()=>{if(r){let P=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(P)}}},[r]);let _=()=>{s(!0)},A=()=>{s(!1),o(!1)};return t?n!=="intent"?[i,v,{}]:[i,v,{onFocus:Tr(l,_),onBlur:Tr(u,A),onMouseEnter:Tr(d,_),onMouseLeave:Tr(m,A),onTouchStart:Tr(p,_)}]:[!1,v,{}]}function Tr(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function _g({page:n,...e}){let{router:t}=bh(),r=T.useMemo(()=>dh(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?T.createElement(wg,{page:n,matches:r,...e}):null}function vg(n){let{manifest:e,routeModules:t}=xh(),[r,s]=T.useState([]);return T.useEffect(()=>{let i=!1;return hg(n,e,t).then(o=>{i||s(o)}),()=>{i=!0}},[n,e,t]),r}function wg({page:n,matches:e,...t}){let r=He(),{manifest:s,routeModules:i}=xh(),{basename:o}=bh(),{loaderData:l,matches:u}=gg(),d=T.useMemo(()=>Cc(n,e,u,s,r,"data"),[n,e,u,s,r]),m=T.useMemo(()=>Cc(n,e,u,s,r,"assets"),[n,e,u,s,r]),p=T.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let A=new Set,P=!1;if(e.forEach(D=>{var S;let C=s.routes[D.route.id];!C||!C.hasLoader||(!d.some(j=>j.route.id===D.route.id)&&D.route.id in l&&((S=i[D.route.id])!=null&&S.shouldRevalidate)||C.hasClientLoader?P=!0:A.add(D.route.id))}),A.size===0)return[];let x=lg(n,o,"data");return P&&A.size>0&&x.searchParams.set("_routes",e.filter(D=>A.has(D.route.id)).map(D=>D.route.id).join(",")),[x.pathname+x.search]},[o,l,r,s,d,e,n,i]),v=T.useMemo(()=>dg(m,s),[m,s]),_=vg(m);return T.createElement(T.Fragment,null,p.map(A=>T.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...t})),v.map(A=>T.createElement("link",{key:A,rel:"modulepreload",href:A,...t})),_.map(({key:A,link:P})=>T.createElement("link",{key:A,nonce:t.nonce,...P})))}function bg(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Eh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Eh&&(window.__reactRouterVersion="7.9.3")}catch{}function xg({basename:n,children:e,window:t}){let r=T.useRef();r.current==null&&(r.current=cp({window:t,v5Compat:!0}));let s=r.current,[i,o]=T.useState({action:s.action,location:s.location}),l=T.useCallback(u=>{T.startTransition(()=>o(u))},[o]);return T.useLayoutEffect(()=>s.listen(l),[s,l]),T.createElement(Jp,{basename:n,children:e,location:i.location,navigationType:i.action,navigator:s})}var Th=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kt=T.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:s,reloadDocument:i,replace:o,state:l,target:u,to:d,preventScrollReset:m,viewTransition:p,...v},_){let{basename:A}=T.useContext(tt),P=typeof d=="string"&&Th.test(d),x,D=!1;if(typeof d=="string"&&P&&(x=d,Eh))try{let w=new URL(window.location.href),I=d.startsWith("//")?new URL(w.protocol+d):new URL(d),R=It(I.pathname,A);I.origin===w.origin&&R!=null?d=R+I.search+I.hash:D=!0}catch{et(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=Op(d,{relative:s}),[S,j,U]=yg(r,v),$=Rg(d,{replace:o,state:l,target:u,preventScrollReset:m,relative:s,viewTransition:p});function b(w){e&&e(w),w.defaultPrevented||$(w)}let y=T.createElement("a",{...v,...U,href:x||C,onClick:D||i?e:b,ref:bg(_,j),target:u,"data-discover":!P&&t==="render"?"true":void 0});return S&&!P?T.createElement(T.Fragment,null,y,T.createElement(_g,{page:C})):y});Kt.displayName="Link";var Eg=T.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:s=!1,style:i,to:o,viewTransition:l,children:u,...d},m){let p=Zr(o,{relative:d.relative}),v=He(),_=T.useContext(wi),{navigator:A,basename:P}=T.useContext(tt),x=_!=null&&Pg(p)&&l===!0,D=A.encodeLocation?A.encodeLocation(p).pathname:p.pathname,C=v.pathname,S=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;t||(C=C.toLowerCase(),S=S?S.toLowerCase():null,D=D.toLowerCase()),S&&P&&(S=It(S,P)||S);const j=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let U=C===D||!s&&C.startsWith(D)&&C.charAt(j)==="/",$=S!=null&&(S===D||!s&&S.startsWith(D)&&S.charAt(D.length)==="/"),b={isActive:U,isPending:$,isTransitioning:x},y=U?e:void 0,w;typeof r=="function"?w=r(b):w=[r,U?"active":null,$?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let I=typeof i=="function"?i(b):i;return T.createElement(Kt,{...d,"aria-current":y,className:w,ref:m,style:I,to:o,viewTransition:l},typeof u=="function"?u(b):u)});Eg.displayName="NavLink";var Tg=T.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:s,state:i,method:o=Ms,action:l,onSubmit:u,relative:d,preventScrollReset:m,viewTransition:p,...v},_)=>{let A=Sg(),P=Ng(l,{relative:d}),x=o.toLowerCase()==="get"?"get":"post",D=typeof l=="string"&&Th.test(l),C=S=>{if(u&&u(S),S.defaultPrevented)return;S.preventDefault();let j=S.nativeEvent.submitter,U=(j==null?void 0:j.getAttribute("formmethod"))||o;A(j||S.currentTarget,{fetcherKey:e,method:U,navigate:t,replace:s,state:i,relative:d,preventScrollReset:m,viewTransition:p})};return T.createElement("form",{ref:_,method:x,action:P,onSubmit:r?u:C,...v,"data-discover":!D&&n==="render"?"true":void 0})});Tg.displayName="Form";function Ig(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ih(n){let e=T.useContext(er);return le(e,Ig(n)),e}function Rg(n,{target:e,replace:t,state:r,preventScrollReset:s,relative:i,viewTransition:o}={}){let l=vt(),u=He(),d=Zr(n,{relative:i});return T.useCallback(m=>{if(sg(m,e)){m.preventDefault();let p=t!==void 0?t:Ur(u)===Ur(d);l(n,{replace:p,state:r,preventScrollReset:s,relative:i,viewTransition:o})}},[u,l,d,t,r,e,n,s,i,o])}var Ag=0,Cg=()=>`__${String(++Ag)}__`;function Sg(){let{router:n}=Ih("useSubmit"),{basename:e}=T.useContext(tt),t=Gp();return T.useCallback(async(r,s={})=>{let{action:i,method:o,encType:l,formData:u,body:d}=ag(r,e);if(s.navigate===!1){let m=s.fetcherKey||Cg();await n.fetch(m,t,s.action||i,{preventScrollReset:s.preventScrollReset,formData:u,body:d,formMethod:s.method||o,formEncType:s.encType||l,flushSync:s.flushSync})}else await n.navigate(s.action||i,{preventScrollReset:s.preventScrollReset,formData:u,body:d,formMethod:s.method||o,formEncType:s.encType||l,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,e,t])}function Ng(n,{relative:e}={}){let{basename:t}=T.useContext(tt),r=T.useContext(_t);le(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),i={...Zr(n||".",{relative:e})},o=He();if(n==null){i.search=o.search;let l=new URLSearchParams(i.search),u=l.getAll("index");if(u.some(m=>m==="")){l.delete("index"),u.filter(p=>p).forEach(p=>l.append("index",p));let m=l.toString();i.search=m?`?${m}`:""}}return(!n||n===".")&&s.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(i.pathname=i.pathname==="/"?t:Et([t,i.pathname])),Ur(i)}function Pg(n,{relative:e}={}){let t=T.useContext(gh);le(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ih("useViewTransitionState"),s=Zr(n,{relative:e});if(!t.isTransitioning)return!1;let i=It(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=It(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Xs(s.pathname,o)!=null||Xs(s.pathname,i)!=null}const kg=()=>{};var Sc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Dg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,l=o?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=i>>2,p=(i&3)<<4|l>>4;let v=(l&15)<<2|d>>6,_=d&63;u||(_=64,o||(v=64)),r.push(t[m],t[p],t[v],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Dg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||p==null)throw new Vg;const v=i<<2|l>>4;if(r.push(v),d!==64){const _=l<<4&240|d>>2;if(r.push(_),p!==64){const A=d<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Vg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jg=function(n){const e=Rh(n);return Ah.encodeByteArray(e,!0)},Js=function(n){return jg(n).replace(/\./g,"")},Ch=function(n){try{return Ah.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=()=>Og().__FIREBASE_DEFAULTS__,Mg=()=>{if(typeof process>"u"||typeof Sc>"u")return;const n=Sc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ug=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ch(n[1]);return e&&JSON.parse(e)},xi=()=>{try{return kg()||Lg()||Mg()||Ug()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sh=n=>{var e,t;return(t=(e=xi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Fg=n=>{const e=Sh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Nh=()=>{var n;return(n=xi())==null?void 0:n.config},Ph=n=>{var e;return(e=xi())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function kh(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Js(JSON.stringify(t)),Js(JSON.stringify(o)),""].join(".")}const kr={};function zg(){const n={prod:[],emulator:[]};for(const e of Object.keys(kr))kr[e]?n.emulator.push(e):n.prod.push(e);return n}function Hg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Nc=!1;function Dh(n,e){if(typeof window>"u"||typeof document>"u"||!Tn(window.location.host)||kr[n]===e||kr[n]||Nc)return;kr[n]=e;function t(v){return`__firebase__banner__${v}`}const r="__firebase__banner",i=zg().prod.length>0;function o(){const v=document.getElementById(r);v&&v.remove()}function l(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function u(v,_){v.setAttribute("width","24"),v.setAttribute("id",_),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Nc=!0,o()},v}function m(v,_){v.setAttribute("id",_),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function p(){const v=Hg(r),_=t("text"),A=document.getElementById(_)||document.createElement("span"),P=t("learnmore"),x=document.getElementById(P)||document.createElement("a"),D=t("preprendIcon"),C=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const S=v.element;l(S),m(x,P);const j=d();u(C,D),S.append(C,A,x,j),document.body.appendChild(S)}i?(A.innerText="Preview backend disconnected.",C.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(C.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function Wg(){var e;const n=(e=xi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yg(){const n=je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Xg(){return!Wg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jg(){try{return typeof indexedDB=="object"}catch{return!1}}function Zg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="FirebaseError";class wt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ey,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,es.prototype.create)}}class es{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ty(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new wt(s,l,r)}}function ty(n,e){return n.replace(ny,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ny=/\{\$([^}]+)}/g;function ry(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function gn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Pc(i)&&Pc(o)){if(!gn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Pc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ar(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function sy(n,e){const t=new iy(n,e);return t.subscribe.bind(t)}class iy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");oy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=bo),s.error===void 0&&(s.error=bo),s.complete===void 0&&(s.complete=bo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function bo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n){return n&&n._delegate?n._delegate:n}class Qt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new $g;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cy(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ly(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ly(n){return n===ln?void 0:n}function cy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ay(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const hy={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},dy=Y.INFO,fy={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},my=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=fy[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ra{constructor(e){this.name=e,this._logLevel=dy,this._logHandler=my,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const py=(n,e)=>e.some(t=>n instanceof t);let kc,Dc;function gy(){return kc||(kc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yy(){return Dc||(Dc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vh=new WeakMap,Mo=new WeakMap,jh=new WeakMap,xo=new WeakMap,Aa=new WeakMap;function _y(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(qt(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Vh.set(t,n)}).catch(()=>{}),Aa.set(e,n),e}function vy(n){if(Mo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Mo.set(n,e)}let Uo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Mo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function wy(n){Uo=n(Uo)}function by(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Eo(this),e,...t);return jh.set(r,e.sort?e.sort():[e]),qt(r)}:yy().includes(n)?function(...e){return n.apply(Eo(this),e),qt(Vh.get(this))}:function(...e){return qt(n.apply(Eo(this),e))}}function xy(n){return typeof n=="function"?by(n):(n instanceof IDBTransaction&&vy(n),py(n,gy())?new Proxy(n,Uo):n)}function qt(n){if(n instanceof IDBRequest)return _y(n);if(xo.has(n))return xo.get(n);const e=xy(n);return e!==n&&(xo.set(n,e),Aa.set(e,n)),e}const Eo=n=>Aa.get(n);function Ey(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),l=qt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(qt(o.result),u.oldVersion,u.newVersion,qt(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Ty=["get","getKey","getAll","getAllKeys","count"],Iy=["put","add","delete","clear"],To=new Map;function Vc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(To.get(e))return To.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Iy.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ty.includes(t)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return To.set(e,i),i}wy(n=>({...n,get:(e,t,r)=>Vc(e,t)||n.get(e,t,r),has:(e,t)=>!!Vc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ay(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ay(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fo="@firebase/app",jc="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new Ra("@firebase/app"),Cy="@firebase/app-compat",Sy="@firebase/analytics-compat",Ny="@firebase/analytics",Py="@firebase/app-check-compat",ky="@firebase/app-check",Dy="@firebase/auth",Vy="@firebase/auth-compat",jy="@firebase/database",Oy="@firebase/data-connect",Ly="@firebase/database-compat",My="@firebase/functions",Uy="@firebase/functions-compat",Fy="@firebase/installations",$y="@firebase/installations-compat",By="@firebase/messaging",zy="@firebase/messaging-compat",Hy="@firebase/performance",qy="@firebase/performance-compat",Wy="@firebase/remote-config",Gy="@firebase/remote-config-compat",Ky="@firebase/storage",Qy="@firebase/storage-compat",Yy="@firebase/firestore",Xy="@firebase/ai",Jy="@firebase/firestore-compat",Zy="firebase",e0="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o="[DEFAULT]",t0={[Fo]:"fire-core",[Cy]:"fire-core-compat",[Ny]:"fire-analytics",[Sy]:"fire-analytics-compat",[ky]:"fire-app-check",[Py]:"fire-app-check-compat",[Dy]:"fire-auth",[Vy]:"fire-auth-compat",[jy]:"fire-rtdb",[Oy]:"fire-data-connect",[Ly]:"fire-rtdb-compat",[My]:"fire-fn",[Uy]:"fire-fn-compat",[Fy]:"fire-iid",[$y]:"fire-iid-compat",[By]:"fire-fcm",[zy]:"fire-fcm-compat",[Hy]:"fire-perf",[qy]:"fire-perf-compat",[Wy]:"fire-rc",[Gy]:"fire-rc-compat",[Ky]:"fire-gcs",[Qy]:"fire-gcs-compat",[Yy]:"fire-fst",[Jy]:"fire-fst-compat",[Xy]:"fire-vertex","fire-js":"fire-js",[Zy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Map,n0=new Map,Bo=new Map;function Oc(n,e){try{n.container.addComponent(e)}catch(t){Rt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function yn(n){const e=n.name;if(Bo.has(e))return Rt.debug(`There were multiple attempts to register component ${e}.`),!1;Bo.set(e,n);for(const t of Zs.values())Oc(t,n);for(const t of n0.values())Oc(t,n);return!0}function Ca(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ue(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new es("app","Firebase",r0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=e0;function Oh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:$o,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Wt.create("bad-app-name",{appName:String(s)});if(t||(t=Nh()),!t)throw Wt.create("no-options");const i=Zs.get(s);if(i){if(gn(t,i.options)&&gn(r,i.config))return i;throw Wt.create("duplicate-app",{appName:s})}const o=new uy(s);for(const u of Bo.values())o.addComponent(u);const l=new s0(t,r,o);return Zs.set(s,l),l}function Lh(n=$o){const e=Zs.get(n);if(!e&&n===$o&&Nh())return Oh();if(!e)throw Wt.create("no-app",{appName:n});return e}function ct(n,e,t){let r=t0[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rt.warn(o.join(" "));return}yn(new Qt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="firebase-heartbeat-database",o0=1,Fr="firebase-heartbeat-store";let Io=null;function Mh(){return Io||(Io=Ey(i0,o0,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Fr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),Io}async function a0(n){try{const t=(await Mh()).transaction(Fr),r=await t.objectStore(Fr).get(Uh(n));return await t.done,r}catch(e){if(e instanceof wt)Rt.warn(e.message);else{const t=Wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rt.warn(t.message)}}}async function Lc(n,e){try{const r=(await Mh()).transaction(Fr,"readwrite");await r.objectStore(Fr).put(e,Uh(n)),await r.done}catch(t){if(t instanceof wt)Rt.warn(t.message);else{const r=Wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rt.warn(r.message)}}}function Uh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=1024,c0=30;class u0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new d0(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Mc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>c0){const o=f0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Rt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mc(),{heartbeatsToSend:r,unsentEntries:s}=h0(this._heartbeatsCache.heartbeats),i=Js(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Rt.warn(t),""}}}function Mc(){return new Date().toISOString().substring(0,10)}function h0(n,e=l0){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Uc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Uc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class d0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jg()?Zg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await a0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Uc(n){return Js(JSON.stringify({version:2,heartbeats:n})).length}function f0(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(n){yn(new Qt("platform-logger",e=>new Ry(e),"PRIVATE")),yn(new Qt("heartbeat",e=>new u0(e),"PRIVATE")),ct(Fo,jc,n),ct(Fo,jc,"esm2020"),ct("fire-js","")}m0("");function Fh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p0=Fh,$h=new es("auth","Firebase",Fh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new Ra("@firebase/auth");function g0(n,...e){ei.logLevel<=Y.WARN&&ei.warn(`Auth (${In}): ${n}`,...e)}function Fs(n,...e){ei.logLevel<=Y.ERROR&&ei.error(`Auth (${In}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,...e){throw Na(n,...e)}function Ze(n,...e){return Na(n,...e)}function Sa(n,e,t){const r={...p0(),[e]:t};return new es("auth","Firebase",r).create(e,{appName:n.name})}function ut(n){return Sa(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bh(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ye(n,"argument-error"),Sa(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Na(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return $h.create(n,...e)}function q(n,e,...t){if(!n)throw Na(e,...t)}function bt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fs(e),new Error(e)}function At(n,e){n||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function y0(){return Fc()==="http:"||Fc()==="https:"}function Fc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(y0()||Kg()||"connection"in navigator)?navigator.onLine:!0}function v0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t){this.shortDelay=e,this.longDelay=t,At(t>e,"Short delay should be less than long delay!"),this.isMobile=qg()||Qg()}get(){return _0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(n,e){At(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],x0=new ns(3e4,6e4);function Pt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function kt(n,e,t,r,s={}){return Hh(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ts({key:n.config.apiKey,...o}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return Gg()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Tn(n.emulatorConfig.host)&&(d.credentials="include"),zh.fetch()(await qh(n,n.config.apiHost,t,l),d)})}async function Hh(n,e,t){n._canInitEmulator=!1;const r={...w0,...e};try{const s=new T0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ss(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ss(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ss(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ss(n,"user-disabled",o);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Sa(n,m,d);Ye(n,m)}}catch(s){if(s instanceof wt)throw s;Ye(n,"network-request-failed",{message:String(s)})}}async function rs(n,e,t,r,s={}){const i=await kt(n,e,t,r,s);return"mfaPendingCredential"in i&&Ye(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function qh(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Pa(n.config,s):`${n.config.apiScheme}://${s}`;return b0.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function E0(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class T0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ze(this.auth,"network-request-failed")),x0.get())})}}function Ss(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ze(n,e,r);return s.customData._tokenResponse=t,s}function $c(n){return n!==void 0&&n.enterprise!==void 0}class I0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return E0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function R0(n,e){return kt(n,"GET","/v2/recaptchaConfig",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A0(n,e){return kt(n,"POST","/v1/accounts:delete",e)}async function ti(n,e){return kt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function C0(n,e=!1){const t=Se(n),r=await t.getIdToken(e),s=ka(r);q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Dr(Ro(s.auth_time)),issuedAtTime:Dr(Ro(s.iat)),expirationTime:Dr(Ro(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ro(n){return Number(n)*1e3}function ka(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ch(t);return s?JSON.parse(s):(Fs("Failed to decode base64 JWT payload"),null)}catch(s){return Fs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bc(n){const e=ka(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof wt&&S0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function S0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dr(this.lastLoginAt),this.creationTime=Dr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(n){var p;const e=n.auth,t=await n.getIdToken(),r=await $r(n,ti(e,{idToken:t}));q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Wh(s.providerUserInfo):[],o=k0(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),d=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ho(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function P0(n){const e=Se(n);await ni(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function k0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Wh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D0(n,e){const t=await Hh(n,{},async()=>{const r=ts({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await qh(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Tn(n.emulatorConfig.host)&&(u.credentials="include"),zh.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function V0(n,e){return kt(n,"POST","/v2/accounts:revokeToken",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=Bc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await D0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Un;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Un,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xe{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new N0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ho(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await $r(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return C0(this,e)}reload(){return P0(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ni(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(ut(this.auth));const e=await this.getIdToken();return await $r(this,A0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:p,emailVerified:v,isAnonymous:_,providerData:A,stsTokenManager:P}=t;q(p&&P,e,"internal-error");const x=Un.fromJSON(this.name,P);q(typeof p=="string",e,"internal-error"),Ut(r,e.name),Ut(s,e.name),q(typeof v=="boolean",e,"internal-error"),q(typeof _=="boolean",e,"internal-error"),Ut(i,e.name),Ut(o,e.name),Ut(l,e.name),Ut(u,e.name),Ut(d,e.name),Ut(m,e.name);const D=new Xe({uid:p,auth:e,email:s,emailVerified:v,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:x,createdAt:d,lastLoginAt:m});return A&&Array.isArray(A)&&(D.providerData=A.map(C=>({...C}))),u&&(D._redirectEventId=u),D}static async _fromIdTokenResponse(e,t,r=!1){const s=new Un;s.updateFromServerResponse(t);const i=new Xe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ni(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Wh(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Un;l.updateFromIdToken(r);const u=new Xe({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ho(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new Map;function xt(n){At(n instanceof Function,"Expected a class definition");let e=zc.get(n);return e?(At(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gh.type="NONE";const Hc=Gh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(n,e,t){return`firebase:${n}:${e}:${t}`}class Fn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$s(this.userKey,s.apiKey,i),this.fullPersistenceKey=$s("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ti(this.auth,{idToken:e}).catch(()=>{});return t?Xe._fromGetAccountInfoResponse(this.auth,t,e):null}return Xe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Fn(xt(Hc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||xt(Hc);const o=$s(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const m=await d._get(o);if(m){let p;if(typeof m=="string"){const v=await ti(e,{idToken:m}).catch(()=>{});if(!v)break;p=await Xe._fromGetAccountInfoResponse(e,v,m)}else p=Xe._fromJSON(e,m);d!==i&&(l=p),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Fn(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Fn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zh(e))return"Blackberry";if(ed(e))return"Webos";if(Qh(e))return"Safari";if((e.includes("chrome/")||Yh(e))&&!e.includes("edge/"))return"Chrome";if(Jh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Kh(n=je()){return/firefox\//i.test(n)}function Qh(n=je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yh(n=je()){return/crios\//i.test(n)}function Xh(n=je()){return/iemobile/i.test(n)}function Jh(n=je()){return/android/i.test(n)}function Zh(n=je()){return/blackberry/i.test(n)}function ed(n=je()){return/webos/i.test(n)}function Da(n=je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function j0(n=je()){var e;return Da(n)&&!!((e=window.navigator)!=null&&e.standalone)}function O0(){return Yg()&&document.documentMode===10}function td(n=je()){return Da(n)||Jh(n)||ed(n)||Zh(n)||/windows phone/i.test(n)||Xh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n,e=[]){let t;switch(n){case"Browser":t=qc(je());break;case"Worker":t=`${qc(je())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${In}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M0(n,e={}){return kt(n,"GET","/v2/passwordPolicy",Pt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=6;class F0{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??U0,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wc(this),this.idTokenSubscription=new Wc(this),this.beforeStateQueue=new L0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Fn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ti(this,{idToken:e}),r=await Xe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ue(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ni(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=v0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(ut(this));const t=e?Se(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(ut(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await M0(this),t=new F0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new es("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await V0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xt(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await Fn.create(this,[xt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&g0(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function nt(n){return Se(n)}class Wc{constructor(e){this.auth=e,this.observer=null,this.addObserver=sy(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function B0(n){Ei=n}function rd(n){return Ei.loadJS(n)}function z0(){return Ei.recaptchaEnterpriseScript}function H0(){return Ei.gapiScript}function q0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class W0{constructor(){this.enterprise=new G0}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class G0{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const K0="recaptcha-enterprise",sd="NO_RECAPTCHA";class Q0{constructor(e){this.type=K0,this.auth=nt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{R0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new I0(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;$c(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(sd)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new W0().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!t&&$c(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=z0();u.length!==0&&(u+=l),rd(u).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Gc(n,e,t,r=!1,s=!1){const i=new Q0(n);let o;if(s)o=sd;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ri(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Gc(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Gc(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(n,e){const t=Ca(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(gn(i,e??{}))return s;Ye(s,"already-initialized")}return t.initialize({options:e})}function X0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(xt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function J0(n,e,t){const r=nt(n);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=id(e),{host:o,port:l}=Z0(e),u=l===null?"":`:${l}`,d={url:`${i}//${o}${u}/`},m=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(gn(d,r.config.emulator)&&gn(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,Tn(o)?(kh(`${i}//${o}${u}`),Dh("Auth",!0)):e_()}function id(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Z0(n){const e=id(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Kc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Kc(o)}}}function Kc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function e_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,t){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}async function t_(n,e){return kt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(n,e){return rs(n,"POST","/v1/accounts:signInWithPassword",Pt(n,e))}async function r_(n,e){return kt(n,"POST","/v1/accounts:sendOobCode",Pt(n,e))}async function s_(n,e){return r_(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i_(n,e){return rs(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}async function o_(n,e){return rs(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends Va{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Br(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Br(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ri(e,t,"signInWithPassword",n_);case"emailLink":return i_(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ri(e,r,"signUpPassword",t_);case"emailLink":return o_(e,{idToken:t,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(n,e){return rs(n,"POST","/v1/accounts:signInWithIdp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="http://localhost";class _n extends Va{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new _n(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return $n(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,$n(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$n(e,t)}buildRequest(){const e={requestUri:a_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ts(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function c_(n){const e=Rr(Ar(n)).link,t=e?Rr(Ar(e)).deep_link_id:null,r=Rr(Ar(n)).deep_link_id;return(r?Rr(Ar(r)).link:null)||r||t||e||n}class ja{constructor(e){const t=Rr(Ar(e)),r=t.apiKey??null,s=t.oobCode??null,i=l_(t.mode??null);q(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=c_(e);try{return new ja(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.providerId=nr.PROVIDER_ID}static credential(e,t){return Br._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ja.parseLink(t);return q(r,"argument-error"),Br._fromEmailAndCode(e,r.code,r.tenantId)}}nr.PROVIDER_ID="password";nr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Ti{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends ss{constructor(){super("facebook.com")}static credential(e){return _n._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends ss{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _n._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return at.credential(t,r)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends ss{constructor(){super("github.com")}static credential(e){return _n._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends ss{constructor(){super("twitter.com")}static credential(e,t){return _n._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Bt.credential(t,r)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u_(n,e){return rs(n,"POST","/v1/accounts:signUp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Xe._fromIdTokenResponse(e,r,s),o=Qc(r);return new vn({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Qc(r);return new vn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Qc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends wt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,si.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new si(e,t,r,s)}}function od(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?si._fromErrorAndOperation(n,i,e,r):i})}async function h_(n,e,t=!1){const r=await $r(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d_(n,e,t=!1){const{auth:r}=n;if(Ue(r.app))return Promise.reject(ut(r));const s="reauthenticate";try{const i=await $r(n,od(r,s,e,n),t);q(i.idToken,r,"internal-error");const o=ka(i.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(n.uid===l,r,"user-mismatch"),vn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad(n,e,t=!1){if(Ue(n.app))return Promise.reject(ut(n));const r="signIn",s=await od(n,r,e),i=await vn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function f_(n,e){return ad(nt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld(n){const e=nt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function m_(n,e,t){const r=nt(n);await ri(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",s_)}async function p_(n,e,t){if(Ue(n.app))return Promise.reject(ut(n));const r=nt(n),o=await ri(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",u_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ld(n),u}),l=await vn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function g_(n,e,t){return Ue(n.app)?Promise.reject(ut(n)):f_(Se(n),nr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ld(n),r})}function y_(n,e,t,r){return Se(n).onIdTokenChanged(e,t,r)}function __(n,e,t){return Se(n).beforeAuthStateChanged(e,t)}function cd(n,e,t,r){return Se(n).onAuthStateChanged(e,t,r)}function v_(n){return Se(n).signOut()}const ii="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ii,"1"),this.storage.removeItem(ii),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=1e3,b_=10;class hd extends ud{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=td(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);O0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,b_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},w_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hd.type="LOCAL";const x_=hd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd extends ud{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dd.type="SESSION";const fd=dd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ii(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async d=>d(t.origin,i)),u=await E_(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ii.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const d=Oa("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const v=p;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return window}function I_(n){ht().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function R_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function A_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function C_(){return md()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="firebaseLocalStorageDb",S_=1,oi="firebaseLocalStorage",gd="fbase_key";class is{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ri(n,e){return n.transaction([oi],e?"readwrite":"readonly").objectStore(oi)}function N_(){const n=indexedDB.deleteDatabase(pd);return new is(n).toPromise()}function qo(){const n=indexedDB.open(pd,S_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(oi,{keyPath:gd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(oi)?e(r):(r.close(),await N_(),e(await qo()))})})}async function Yc(n,e,t){const r=Ri(n,!0).put({[gd]:e,value:t});return new is(r).toPromise()}async function P_(n,e){const t=Ri(n,!1).get(e),r=await new is(t).toPromise();return r===void 0?null:r.value}function Xc(n,e){const t=Ri(n,!0).delete(e);return new is(t).toPromise()}const k_=800,D_=3;class yd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>D_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return md()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ii._getInstance(C_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await R_(),!this.activeServiceWorker)return;this.sender=new T_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||A_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qo();return await Yc(e,ii,"1"),await Xc(e,ii),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>P_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ri(s,!1).getAll();return new is(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),k_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yd.type="LOCAL";const V_=yd;new ns(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(n,e){return e?xt(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends Va{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $n(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $n(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $n(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function j_(n){return ad(n.auth,new Ma(n),n.bypassAuthState)}function O_(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),d_(t,new Ma(n),n.bypassAuthState)}async function L_(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),h_(t,new Ma(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return j_;case"linkViaPopup":case"linkViaRedirect":return L_;case"reauthViaPopup":case"reauthViaRedirect":return O_;default:Ye(this.auth,"internal-error")}}resolve(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=new ns(2e3,1e4);async function U_(n,e,t){if(Ue(n.app))return Promise.reject(Ze(n,"operation-not-supported-in-this-environment"));const r=nt(n);Bh(n,e,Ti);const s=La(r,t);return new cn(r,"signInViaPopup",e,s).executeNotNull()}class cn extends _d{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const e=Oa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,M_.get())};e()}}cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="pendingRedirect",Bs=new Map;class $_ extends _d{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Bs.get(this.auth._key());if(!e){try{const r=await B_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Bs.set(this.auth._key(),e)}return this.bypassAuthState||Bs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function B_(n,e){const t=wd(e),r=vd(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function z_(n,e){return vd(n)._set(wd(e),"true")}function H_(n,e){Bs.set(n._key(),e)}function vd(n){return xt(n._redirectPersistence)}function wd(n){return $s(F_,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(n,e,t){return W_(n,e,t)}async function W_(n,e,t){if(Ue(n.app))return Promise.reject(ut(n));const r=nt(n);Bh(n,e,Ti),await r._initializationPromise;const s=La(r,t);return await z_(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function G_(n,e){return await nt(n)._initializationPromise,bd(n,e,!1)}async function bd(n,e,t=!1){if(Ue(n.app))return Promise.reject(ut(n));const r=nt(n),s=La(r,e),o=await new $_(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=10*60*1e3;class Q_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!xd(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ze(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=K_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jc(e))}saveEventToCache(e){this.cachedEventUids.add(Jc(e)),this.lastProcessedEventTime=Date.now()}}function Jc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function xd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(n,e={}){return kt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z_=/^https?/;async function ev(n){if(n.config.emulator)return;const{authorizedDomains:e}=await X_(n);for(const t of e)try{if(tv(t))return}catch{}Ye(n,"unauthorized-domain")}function tv(n){const e=zo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Z_.test(t))return!1;if(J_.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=new ns(3e4,6e4);function Zc(){const n=ht().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function rv(n){return new Promise((e,t)=>{var s,i,o;function r(){Zc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zc(),t(Ze(n,"network-request-failed"))},timeout:nv.get()})}if((i=(s=ht().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=ht().gapi)!=null&&o.load)r();else{const l=q0("iframefcb");return ht()[l]=()=>{gapi.load?r():t(Ze(n,"network-request-failed"))},rd(`${H0()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw zs=null,e})}let zs=null;function sv(n){return zs=zs||rv(n),zs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=new ns(5e3,15e3),ov="__/auth/iframe",av="emulator/auth/iframe",lv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uv(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Pa(e,av):`https://${n.config.authDomain}/${ov}`,r={apiKey:e.apiKey,appName:n.name,v:In},s=cv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ts(r).slice(1)}`}async function hv(n){const e=await sv(n),t=ht().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:uv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ze(n,"network-request-failed"),l=ht().setTimeout(()=>{i(o)},iv.get());function u(){ht().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fv=500,mv=600,pv="_blank",gv="http://localhost";class eu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yv(n,e,t,r=fv,s=mv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...dv,width:r.toString(),height:s.toString(),top:i,left:o},d=je().toLowerCase();t&&(l=Yh(d)?pv:t),Kh(d)&&(e=e||gv,u.scrollbars="yes");const m=Object.entries(u).reduce((v,[_,A])=>`${v}${_}=${A},`,"");if(j0(d)&&l!=="_self")return _v(e||"",l),new eu(null);const p=window.open(e||"",l,m);q(p,n,"popup-blocked");try{p.focus()}catch{}return new eu(p)}function _v(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="__/auth/handler",wv="emulator/auth/handler",bv=encodeURIComponent("fac");async function tu(n,e,t,r,s,i){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:In,eventId:s};if(e instanceof Ti){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ry(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))o[m]=p}if(e instanceof ss){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await n._getAppCheckToken(),d=u?`#${bv}=${encodeURIComponent(u)}`:"";return`${xv(n)}?${ts(l).slice(1)}${d}`}function xv({config:n}){return n.emulator?Pa(n,wv):`https://${n.authDomain}/${vv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao="webStorageSupport";class Ev{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fd,this._completeRedirectFn=bd,this._overrideRedirectResult=H_}async _openPopup(e,t,r,s){var o;At((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await tu(e,t,r,zo(),s);return yv(e,i,Oa())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await tu(e,t,r,zo(),s);return I_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(At(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await hv(e),r=new Q_(e);return t.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ao,{type:Ao},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ao];i!==void 0&&t(!!i),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ev(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return td()||Qh()||Da()}}const Tv=Ev;var nu="@firebase/auth",ru="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Av(n){yn(new Qt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nd(n)},d=new $0(r,s,i,u);return X0(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),yn(new Qt("auth-internal",e=>{const t=nt(e.getProvider("auth").getImmediate());return(r=>new Iv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ct(nu,ru,Rv(n)),ct(nu,ru,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=5*60,Sv=Ph("authIdTokenMaxAge")||Cv;let su=null;const Nv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Sv)return;const s=t==null?void 0:t.token;su!==s&&(su=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Pv(n=Lh()){const e=Ca(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Y0(n,{popupRedirectResolver:Tv,persistence:[V_,x_,fd]}),r=Ph("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Nv(i.toString());__(t,o,()=>o(t.currentUser)),y_(t,l=>o(l))}}const s=Sh("auth");return s&&J0(t,`http://${s}`),t}function kv(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}B0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ze("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",kv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Av("Browser");var Dv="firebase",Vv="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct(Dv,Vv,"app");var iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gt,Ed;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function w(){}w.prototype=y.prototype,b.F=y.prototype,b.prototype=new w,b.prototype.constructor=b,b.D=function(I,R,N){for(var E=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)E[ye-2]=arguments[ye];return y.prototype[R].apply(I,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,w){w||(w=0);const I=Array(16);if(typeof y=="string")for(var R=0;R<16;++R)I[R]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(R=0;R<16;++R)I[R]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=b.g[0],w=b.g[1],R=b.g[2];let N=b.g[3],E;E=y+(N^w&(R^N))+I[0]+3614090360&4294967295,y=w+(E<<7&4294967295|E>>>25),E=N+(R^y&(w^R))+I[1]+3905402710&4294967295,N=y+(E<<12&4294967295|E>>>20),E=R+(w^N&(y^w))+I[2]+606105819&4294967295,R=N+(E<<17&4294967295|E>>>15),E=w+(y^R&(N^y))+I[3]+3250441966&4294967295,w=R+(E<<22&4294967295|E>>>10),E=y+(N^w&(R^N))+I[4]+4118548399&4294967295,y=w+(E<<7&4294967295|E>>>25),E=N+(R^y&(w^R))+I[5]+1200080426&4294967295,N=y+(E<<12&4294967295|E>>>20),E=R+(w^N&(y^w))+I[6]+2821735955&4294967295,R=N+(E<<17&4294967295|E>>>15),E=w+(y^R&(N^y))+I[7]+4249261313&4294967295,w=R+(E<<22&4294967295|E>>>10),E=y+(N^w&(R^N))+I[8]+1770035416&4294967295,y=w+(E<<7&4294967295|E>>>25),E=N+(R^y&(w^R))+I[9]+2336552879&4294967295,N=y+(E<<12&4294967295|E>>>20),E=R+(w^N&(y^w))+I[10]+4294925233&4294967295,R=N+(E<<17&4294967295|E>>>15),E=w+(y^R&(N^y))+I[11]+2304563134&4294967295,w=R+(E<<22&4294967295|E>>>10),E=y+(N^w&(R^N))+I[12]+1804603682&4294967295,y=w+(E<<7&4294967295|E>>>25),E=N+(R^y&(w^R))+I[13]+4254626195&4294967295,N=y+(E<<12&4294967295|E>>>20),E=R+(w^N&(y^w))+I[14]+2792965006&4294967295,R=N+(E<<17&4294967295|E>>>15),E=w+(y^R&(N^y))+I[15]+1236535329&4294967295,w=R+(E<<22&4294967295|E>>>10),E=y+(R^N&(w^R))+I[1]+4129170786&4294967295,y=w+(E<<5&4294967295|E>>>27),E=N+(w^R&(y^w))+I[6]+3225465664&4294967295,N=y+(E<<9&4294967295|E>>>23),E=R+(y^w&(N^y))+I[11]+643717713&4294967295,R=N+(E<<14&4294967295|E>>>18),E=w+(N^y&(R^N))+I[0]+3921069994&4294967295,w=R+(E<<20&4294967295|E>>>12),E=y+(R^N&(w^R))+I[5]+3593408605&4294967295,y=w+(E<<5&4294967295|E>>>27),E=N+(w^R&(y^w))+I[10]+38016083&4294967295,N=y+(E<<9&4294967295|E>>>23),E=R+(y^w&(N^y))+I[15]+3634488961&4294967295,R=N+(E<<14&4294967295|E>>>18),E=w+(N^y&(R^N))+I[4]+3889429448&4294967295,w=R+(E<<20&4294967295|E>>>12),E=y+(R^N&(w^R))+I[9]+568446438&4294967295,y=w+(E<<5&4294967295|E>>>27),E=N+(w^R&(y^w))+I[14]+3275163606&4294967295,N=y+(E<<9&4294967295|E>>>23),E=R+(y^w&(N^y))+I[3]+4107603335&4294967295,R=N+(E<<14&4294967295|E>>>18),E=w+(N^y&(R^N))+I[8]+1163531501&4294967295,w=R+(E<<20&4294967295|E>>>12),E=y+(R^N&(w^R))+I[13]+2850285829&4294967295,y=w+(E<<5&4294967295|E>>>27),E=N+(w^R&(y^w))+I[2]+4243563512&4294967295,N=y+(E<<9&4294967295|E>>>23),E=R+(y^w&(N^y))+I[7]+1735328473&4294967295,R=N+(E<<14&4294967295|E>>>18),E=w+(N^y&(R^N))+I[12]+2368359562&4294967295,w=R+(E<<20&4294967295|E>>>12),E=y+(w^R^N)+I[5]+4294588738&4294967295,y=w+(E<<4&4294967295|E>>>28),E=N+(y^w^R)+I[8]+2272392833&4294967295,N=y+(E<<11&4294967295|E>>>21),E=R+(N^y^w)+I[11]+1839030562&4294967295,R=N+(E<<16&4294967295|E>>>16),E=w+(R^N^y)+I[14]+4259657740&4294967295,w=R+(E<<23&4294967295|E>>>9),E=y+(w^R^N)+I[1]+2763975236&4294967295,y=w+(E<<4&4294967295|E>>>28),E=N+(y^w^R)+I[4]+1272893353&4294967295,N=y+(E<<11&4294967295|E>>>21),E=R+(N^y^w)+I[7]+4139469664&4294967295,R=N+(E<<16&4294967295|E>>>16),E=w+(R^N^y)+I[10]+3200236656&4294967295,w=R+(E<<23&4294967295|E>>>9),E=y+(w^R^N)+I[13]+681279174&4294967295,y=w+(E<<4&4294967295|E>>>28),E=N+(y^w^R)+I[0]+3936430074&4294967295,N=y+(E<<11&4294967295|E>>>21),E=R+(N^y^w)+I[3]+3572445317&4294967295,R=N+(E<<16&4294967295|E>>>16),E=w+(R^N^y)+I[6]+76029189&4294967295,w=R+(E<<23&4294967295|E>>>9),E=y+(w^R^N)+I[9]+3654602809&4294967295,y=w+(E<<4&4294967295|E>>>28),E=N+(y^w^R)+I[12]+3873151461&4294967295,N=y+(E<<11&4294967295|E>>>21),E=R+(N^y^w)+I[15]+530742520&4294967295,R=N+(E<<16&4294967295|E>>>16),E=w+(R^N^y)+I[2]+3299628645&4294967295,w=R+(E<<23&4294967295|E>>>9),E=y+(R^(w|~N))+I[0]+4096336452&4294967295,y=w+(E<<6&4294967295|E>>>26),E=N+(w^(y|~R))+I[7]+1126891415&4294967295,N=y+(E<<10&4294967295|E>>>22),E=R+(y^(N|~w))+I[14]+2878612391&4294967295,R=N+(E<<15&4294967295|E>>>17),E=w+(N^(R|~y))+I[5]+4237533241&4294967295,w=R+(E<<21&4294967295|E>>>11),E=y+(R^(w|~N))+I[12]+1700485571&4294967295,y=w+(E<<6&4294967295|E>>>26),E=N+(w^(y|~R))+I[3]+2399980690&4294967295,N=y+(E<<10&4294967295|E>>>22),E=R+(y^(N|~w))+I[10]+4293915773&4294967295,R=N+(E<<15&4294967295|E>>>17),E=w+(N^(R|~y))+I[1]+2240044497&4294967295,w=R+(E<<21&4294967295|E>>>11),E=y+(R^(w|~N))+I[8]+1873313359&4294967295,y=w+(E<<6&4294967295|E>>>26),E=N+(w^(y|~R))+I[15]+4264355552&4294967295,N=y+(E<<10&4294967295|E>>>22),E=R+(y^(N|~w))+I[6]+2734768916&4294967295,R=N+(E<<15&4294967295|E>>>17),E=w+(N^(R|~y))+I[13]+1309151649&4294967295,w=R+(E<<21&4294967295|E>>>11),E=y+(R^(w|~N))+I[4]+4149444226&4294967295,y=w+(E<<6&4294967295|E>>>26),E=N+(w^(y|~R))+I[11]+3174756917&4294967295,N=y+(E<<10&4294967295|E>>>22),E=R+(y^(N|~w))+I[2]+718787259&4294967295,R=N+(E<<15&4294967295|E>>>17),E=w+(N^(R|~y))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+N&4294967295}r.prototype.v=function(b,y){y===void 0&&(y=b.length);const w=y-this.blockSize,I=this.C;let R=this.h,N=0;for(;N<y;){if(R==0)for(;N<=w;)s(this,b,N),N+=this.blockSize;if(typeof b=="string"){for(;N<y;)if(I[R++]=b.charCodeAt(N++),R==this.blockSize){s(this,I),R=0;break}}else for(;N<y;)if(I[R++]=b[N++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=y},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;y=this.o*8;for(var w=b.length-8;w<b.length;++w)b[w]=y&255,y/=256;for(this.v(b),b=Array(16),y=0,w=0;w<4;++w)for(let I=0;I<32;I+=8)b[y++]=this.g[w]>>>I&255;return b};function i(b,y){var w=l;return Object.prototype.hasOwnProperty.call(w,b)?w[b]:w[b]=y(b)}function o(b,y){this.h=y;const w=[];let I=!0;for(let R=b.length-1;R>=0;R--){const N=b[R]|0;I&&N==y||(w[R]=N,I=!1)}this.g=w}var l={};function u(b){return-128<=b&&b<128?i(b,function(y){return new o([y|0],y<0?-1:0)}):new o([b|0],b<0?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return p;if(b<0)return x(d(-b));const y=[];let w=1;for(let I=0;b>=w;I++)y[I]=b/w|0,w*=4294967296;return new o(y,0)}function m(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return x(m(b.substring(1),y));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=d(Math.pow(y,8));let I=p;for(let N=0;N<b.length;N+=8){var R=Math.min(8,b.length-N);const E=parseInt(b.substring(N,N+R),y);R<8?(R=d(Math.pow(y,R)),I=I.j(R).add(d(E))):(I=I.j(w),I=I.add(d(E)))}return I}var p=u(0),v=u(1),_=u(16777216);n=o.prototype,n.m=function(){if(P(this))return-x(this).m();let b=0,y=1;for(let w=0;w<this.g.length;w++){const I=this.i(w);b+=(I>=0?I:4294967296+I)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(A(this))return"0";if(P(this))return"-"+x(this).toString(b);const y=d(Math.pow(b,6));var w=this;let I="";for(;;){const R=j(w,y).g;w=D(w,R.j(y));let N=((w.g.length>0?w.g[0]:w.h)>>>0).toString(b);if(w=R,A(w))return N+I;for(;N.length<6;)N="0"+N;I=N+I}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function A(b){if(b.h!=0)return!1;for(let y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function P(b){return b.h==-1}n.l=function(b){return b=D(this,b),P(b)?-1:A(b)?0:1};function x(b){const y=b.g.length,w=[];for(let I=0;I<y;I++)w[I]=~b.g[I];return new o(w,~b.h).add(v)}n.abs=function(){return P(this)?x(this):this},n.add=function(b){const y=Math.max(this.g.length,b.g.length),w=[];let I=0;for(let R=0;R<=y;R++){let N=I+(this.i(R)&65535)+(b.i(R)&65535),E=(N>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);I=E>>>16,N&=65535,E&=65535,w[R]=E<<16|N}return new o(w,w[w.length-1]&-2147483648?-1:0)};function D(b,y){return b.add(x(y))}n.j=function(b){if(A(this)||A(b))return p;if(P(this))return P(b)?x(this).j(x(b)):x(x(this).j(b));if(P(b))return x(this.j(x(b)));if(this.l(_)<0&&b.l(_)<0)return d(this.m()*b.m());const y=this.g.length+b.g.length,w=[];for(var I=0;I<2*y;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(let R=0;R<b.g.length;R++){const N=this.i(I)>>>16,E=this.i(I)&65535,ye=b.i(R)>>>16,H=b.i(R)&65535;w[2*I+2*R]+=E*H,C(w,2*I+2*R),w[2*I+2*R+1]+=N*H,C(w,2*I+2*R+1),w[2*I+2*R+1]+=E*ye,C(w,2*I+2*R+1),w[2*I+2*R+2]+=N*ye,C(w,2*I+2*R+2)}for(b=0;b<y;b++)w[b]=w[2*b+1]<<16|w[2*b];for(b=y;b<2*y;b++)w[b]=0;return new o(w,0)};function C(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function S(b,y){this.g=b,this.h=y}function j(b,y){if(A(y))throw Error("division by zero");if(A(b))return new S(p,p);if(P(b))return y=j(x(b),y),new S(x(y.g),x(y.h));if(P(y))return y=j(b,x(y)),new S(x(y.g),y.h);if(b.g.length>30){if(P(b)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var w=v,I=y;I.l(b)<=0;)w=U(w),I=U(I);var R=$(w,1),N=$(I,1);for(I=$(I,2),w=$(w,2);!A(I);){var E=N.add(I);E.l(b)<=0&&(R=R.add(w),N=E),I=$(I,1),w=$(w,1)}return y=D(b,R.j(y)),new S(R,y)}for(R=p;b.l(y)>=0;){for(w=Math.max(1,Math.floor(b.m()/y.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),N=d(w),E=N.j(y);P(E)||E.l(b)>0;)w-=I,N=d(w),E=N.j(y);A(N)&&(N=v),R=R.add(N),b=D(b,E)}return new S(R,b)}n.B=function(b){return j(this,b).h},n.and=function(b){const y=Math.max(this.g.length,b.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)&b.i(I);return new o(w,this.h&b.h)},n.or=function(b){const y=Math.max(this.g.length,b.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)|b.i(I);return new o(w,this.h|b.h)},n.xor=function(b){const y=Math.max(this.g.length,b.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)^b.i(I);return new o(w,this.h^b.h)};function U(b){const y=b.g.length+1,w=[];for(let I=0;I<y;I++)w[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(w,b.h)}function $(b,y){const w=y>>5;y%=32;const I=b.g.length-w,R=[];for(let N=0;N<I;N++)R[N]=y>0?b.i(N+w)>>>y|b.i(N+w+1)<<32-y:b.i(N+w);return new o(R,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Ed=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,Gt=o}).apply(typeof iu<"u"?iu:typeof self<"u"?self:typeof window<"u"?window:{});var Ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Td,Cr,Id,Hs,Wo,Rd,Ad,Cd;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ns=="object"&&Ns];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in f))break e;f=f[k]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function d(a,h,f){return d=u,d.apply(null,arguments)}function m(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,k,V){for(var M=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)M[Q-2]=arguments[Q];return h.prototype[k].apply(g,M)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function A(a,h){for(let g=1;g<arguments.length;g++){const k=arguments[g];var f=typeof k;if(f=f!="object"?f:k?Array.isArray(k)?"array":f:"null",f=="array"||f=="object"&&typeof k.length=="number"){f=a.length||0;const V=k.length||0;a.length=f+V;for(let M=0;M<V;M++)a[f+M]=k[M]}else a.push(k)}}class P{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){o.setTimeout(()=>{throw a},0)}function D(){var a=b;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class C{constructor(){this.h=this.g=null}add(h,f){const g=S.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var S=new P(()=>new j,a=>a.reset());class j{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let U,$=!1,b=new C,y=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(w)}};function w(){for(var a;a=D();){try{a.h.call(a.g)}catch(f){x(f)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}$=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function ye(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(ye,R),ye.prototype.init=function(a,h){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ye.Z.h.call(this)},ye.prototype.h=function(){ye.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var H="closure_listenable_"+(Math.random()*1e6|0),ne=0;function ee(a,h,f,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=k,this.key=++ne,this.da=this.fa=!1}function pe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Nn(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function Tm(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function xl(a){const h={};for(const f in a)h[f]=a[f];return h}const El="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tl(a,h){let f,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(f in g)a[f]=g[f];for(let V=0;V<El.length;V++)f=El[V],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function ps(a){this.src=a,this.g={},this.h=0}ps.prototype.add=function(a,h,f,g,k){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const M=Gi(a,h,g,k);return M>-1?(h=a[M],f||(h.fa=!1)):(h=new ee(h,this.src,V,!!g,k),h.fa=f,a.push(h)),h};function Wi(a,h){const f=h.type;if(f in a.g){var g=a.g[f],k=Array.prototype.indexOf.call(g,h,void 0),V;(V=k>=0)&&Array.prototype.splice.call(g,k,1),V&&(pe(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Gi(a,h,f,g){for(let k=0;k<a.length;++k){const V=a[k];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==g)return k}return-1}var Ki="closure_lm_"+(Math.random()*1e6|0),Qi={};function Il(a,h,f,g,k){if(Array.isArray(h)){for(let V=0;V<h.length;V++)Il(a,h[V],f,g,k);return null}return f=Cl(f),a&&a[H]?a.J(h,f,l(g)?!!g.capture:!1,k):Im(a,h,f,!1,g,k)}function Im(a,h,f,g,k,V){if(!h)throw Error("Invalid event type");const M=l(k)?!!k.capture:!!k;let Q=Xi(a);if(Q||(a[Ki]=Q=new ps(a)),f=Q.add(h,f,g,M,V),f.proxy)return f;if(g=Rm(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)N||(k=M),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent(Al(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Rm(){function a(f){return h.call(a.src,a.listener,f)}const h=Am;return a}function Rl(a,h,f,g,k){if(Array.isArray(h))for(var V=0;V<h.length;V++)Rl(a,h[V],f,g,k);else g=l(g)?!!g.capture:!!g,f=Cl(f),a&&a[H]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],f=Gi(h,f,g,k),f>-1&&(pe(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=Xi(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Gi(h,f,g,k)),(f=a>-1?h[a]:null)&&Yi(f))}function Yi(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[H])Wi(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Al(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Xi(h))?(Wi(f,a),f.h==0&&(f.src=null,h[Ki]=null)):pe(a)}}}function Al(a){return a in Qi?Qi[a]:Qi[a]="on"+a}function Am(a,h){if(a.da)a=!0;else{h=new ye(h,this);const f=a.listener,g=a.ha||a.src;a.fa&&Yi(a),a=f.call(g,h)}return a}function Xi(a){return a=a[Ki],a instanceof ps?a:null}var Ji="__closure_events_fn_"+(Math.random()*1e9>>>0);function Cl(a){return typeof a=="function"?a:(a[Ji]||(a[Ji]=function(h){return a.handleEvent(h)}),a[Ji])}function Pe(){I.call(this),this.i=new ps(this),this.M=this,this.G=null}p(Pe,I),Pe.prototype[H]=!0,Pe.prototype.removeEventListener=function(a,h,f,g){Rl(this,a,h,f,g)};function Oe(a,h){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var k=h;h=new R(g,a),Tl(h,k)}k=!0;let V,M;if(f)for(M=f.length-1;M>=0;M--)V=h.g=f[M],k=gs(V,g,!0,h)&&k;if(V=h.g=a,k=gs(V,g,!0,h)&&k,k=gs(V,g,!1,h)&&k,f)for(M=0;M<f.length;M++)V=h.g=f[M],k=gs(V,g,!1,h)&&k}Pe.prototype.N=function(){if(Pe.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let g=0;g<f.length;g++)pe(f[g]);delete a.g[h],a.h--}}this.G=null},Pe.prototype.J=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Pe.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function gs(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let k=!0;for(let V=0;V<h.length;++V){const M=h[V];if(M&&!M.da&&M.capture==f){const Q=M.listener,be=M.ha||M.src;M.fa&&Wi(a.i,M),k=Q.call(be,g)!==!1&&k}}return k&&!g.defaultPrevented}function Cm(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Sl(a){a.g=Cm(()=>{a.g=null,a.i&&(a.i=!1,Sl(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Sm extends I{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Sl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lr(a){I.call(this),this.h=a,this.g={}}p(lr,I);var Nl=[];function Pl(a){Nn(a.g,function(h,f){this.g.hasOwnProperty(f)&&Yi(h)},a),a.g={}}lr.prototype.N=function(){lr.Z.N.call(this),Pl(this)},lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zi=o.JSON.stringify,Nm=o.JSON.parse,Pm=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function kl(){}function Dl(){}var cr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function eo(){R.call(this,"d")}p(eo,R);function to(){R.call(this,"c")}p(to,R);var nn={},Vl=null;function ys(){return Vl=Vl||new Pe}nn.Ia="serverreachability";function jl(a){R.call(this,nn.Ia,a)}p(jl,R);function ur(a){const h=ys();Oe(h,new jl(h))}nn.STAT_EVENT="statevent";function Ol(a,h){R.call(this,nn.STAT_EVENT,a),this.stat=h}p(Ol,R);function Le(a){const h=ys();Oe(h,new Ol(h,a))}nn.Ja="timingevent";function Ll(a,h){R.call(this,nn.Ja,a),this.size=h}p(Ll,R);function hr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function dr(){this.g=!0}dr.prototype.ua=function(){this.g=!1};function km(a,h,f,g,k,V){a.info(function(){if(a.g)if(V){var M="",Q=V.split("&");for(let se=0;se<Q.length;se++){var be=Q[se].split("=");if(be.length>1){const Te=be[0];be=be[1];const st=Te.split("_");M=st.length>=2&&st[1]=="type"?M+(Te+"="+be+"&"):M+(Te+"=redacted&")}}}else M=null;else M=V;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+f+`
`+M})}function Dm(a,h,f,g,k,V,M){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+f+`
`+V+" "+M})}function Pn(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+jm(a,f)+(g?" "+g:"")})}function Vm(a,h){a.info(function(){return"TIMEOUT: "+h})}dr.prototype.info=function(){};function jm(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var f=V[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var k=g[0];if(k!="noop"&&k!="stop"&&k!="close")for(let M=1;M<g.length;M++)g[M]=""}}}}return Zi(V)}catch{return h}}var _s={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ml={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ul;function no(){}p(no,kl),no.prototype.g=function(){return new XMLHttpRequest},Ul=new no;function fr(a){return encodeURIComponent(String(a))}function Om(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Dt(a,h,f,g){this.j=a,this.i=h,this.l=f,this.S=g||1,this.V=new lr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Fl}function Fl(){this.i=null,this.g="",this.h=!1}var $l={},ro={};function so(a,h,f){a.M=1,a.A=ws(rt(h)),a.u=f,a.R=!0,Bl(a,null)}function Bl(a,h){a.F=Date.now(),vs(a),a.B=rt(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),tc(f.i,"t",g),a.C=0,f=a.j.L,a.h=new Fl,a.g=vc(a.j,f?h:null,!a.u),a.P>0&&(a.O=new Sm(d(a.Y,a,a.g),a.P)),h=a.V,f=a.g,g=a.ba;var k="readystatechange";Array.isArray(k)||(k&&(Nl[0]=k.toString()),k=Nl);for(let V=0;V<k.length;V++){const M=Il(f,k[V],g||h.handleEvent,!1,h.h||h);if(!M)break;h.g[M.key]=M}h=a.J?xl(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ur(),km(a.i,a.v,a.B,a.l,a.S,a.u)}Dt.prototype.ba=function(a){a=a.target;const h=this.O;h&&Ot(a)==3?h.j():this.Y(a)},Dt.prototype.Y=function(a){try{if(a==this.g)e:{const Q=Ot(this.g),be=this.g.ya(),se=this.g.ca();if(!(Q<3)&&(Q!=3||this.g&&(this.h.h||this.g.la()||lc(this.g)))){this.K||Q!=4||be==7||(be==8||se<=0?ur(3):ur(2)),io(this);var h=this.g.ca();this.X=h;var f=Lm(this);if(this.o=h==200,Dm(this.i,this.v,this.B,this.l,this.S,Q,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,k=this.g;if((g=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(g)){var V=g;break t}}V=null}if(a=V)Pn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,oo(this,a);else{this.o=!1,this.m=3,Le(12),rn(this),mr(this);break e}}if(this.R){a=!0;let Te;for(;!this.K&&this.C<f.length;)if(Te=Mm(this,f),Te==ro){Q==4&&(this.m=4,Le(14),a=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(Te==$l){this.m=4,Le(15),Pn(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Pn(this.i,this.l,Te,null),oo(this,Te);if(zl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||f.length!=0||this.h.h||(this.m=1,Le(16),a=!1),this.o=this.o&&a,!a)Pn(this.i,this.l,f,"[Invalid Chunked Response]"),rn(this),mr(this);else if(f.length>0&&!this.W){this.W=!0;var M=this.j;M.g==this&&M.aa&&!M.P&&(M.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),po(M),M.P=!0,Le(11))}}else Pn(this.i,this.l,f,null),oo(this,f);Q==4&&rn(this),this.o&&!this.K&&(Q==4?pc(this.j,this):(this.o=!1,vs(this)))}else Jm(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,Le(12)):(this.m=0,Le(13)),rn(this),mr(this)}}}catch{}finally{}};function Lm(a){if(!zl(a))return a.g.la();const h=lc(a.g);if(h==="")return"";let f="";const g=h.length,k=Ot(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return rn(a),mr(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<g;V++)a.h.h=!0,f+=a.h.i.decode(h[V],{stream:!(k&&V==g-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function zl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Mm(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?ro:(f=Number(h.substring(f,g)),isNaN(f)?$l:(g+=1,g+f>h.length?ro:(h=h.slice(g,g+f),a.C=g+f,h)))}Dt.prototype.cancel=function(){this.K=!0,rn(this)};function vs(a){a.T=Date.now()+a.H,Hl(a,a.H)}function Hl(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=hr(d(a.aa,a),h)}function io(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Dt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Vm(this.i,this.B),this.M!=2&&(ur(),Le(17)),rn(this),this.m=2,mr(this)):Hl(this,this.T-a)};function mr(a){a.j.I==0||a.K||pc(a.j,a)}function rn(a){io(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Pl(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function oo(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||ao(f.h,a))){if(!a.L&&ao(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Is(f),Es(f);else break e;mo(f),Le(18)}}else f.xa=k[1],0<f.xa-f.K&&k[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=hr(d(f.Va,f),6e3));Gl(f.h)<=1&&f.ta&&(f.ta=void 0)}else on(f,11)}else if((a.L||f.g==a)&&Is(f),!E(h))for(k=f.Ba.g.parse(h),h=0;h<k.length;h++){let se=k[h];const Te=se[0];if(!(Te<=f.K))if(f.K=Te,se=se[1],f.I==2)if(se[0]=="c"){f.M=se[1],f.ba=se[2];const st=se[3];st!=null&&(f.ka=st,f.j.info("VER="+f.ka));const an=se[4];an!=null&&(f.za=an,f.j.info("SVER="+f.za));const Lt=se[5];Lt!=null&&typeof Lt=="number"&&Lt>0&&(g=1.5*Lt,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Mt=a.g;if(Mt){const As=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(As){var V=g.h;V.g||As.indexOf("spdy")==-1&&As.indexOf("quic")==-1&&As.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(lo(V,V.h),V.h=null))}if(g.G){const go=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;go&&(g.wa=go,oe(g.J,g.G,go))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var M=a;if(g.na=_c(g,g.L?g.ba:null,g.W),M.L){Kl(g.h,M);var Q=M,be=g.O;be&&(Q.H=be),Q.D&&(io(Q),vs(Q)),g.g=M}else fc(g);f.i.length>0&&Ts(f)}else se[0]!="stop"&&se[0]!="close"||on(f,7);else f.I==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?on(f,7):fo(f):se[0]!="noop"&&f.l&&f.l.qa(se),f.A=0)}}ur(4)}catch{}}var Um=class{constructor(a,h){this.g=a,this.map=h}};function ql(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Wl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gl(a){return a.h?1:a.g?a.g.size:0}function ao(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function lo(a,h){a.g?a.g.add(h):a.h=h}function Kl(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ql.prototype.cancel=function(){if(this.i=Ql(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ql(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return _(a.i)}var Yl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fm(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let k,V=null;g>=0?(k=a[f].substring(0,g),V=a[f].substring(g+1)):k=a[f],h(k,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Vt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Vt?(this.l=a.l,pr(this,a.j),this.o=a.o,this.g=a.g,gr(this,a.u),this.h=a.h,co(this,nc(a.i)),this.m=a.m):a&&(h=String(a).match(Yl))?(this.l=!1,pr(this,h[1]||"",!0),this.o=yr(h[2]||""),this.g=yr(h[3]||"",!0),gr(this,h[4]),this.h=yr(h[5]||"",!0),co(this,h[6]||"",!0),this.m=yr(h[7]||"")):(this.l=!1,this.i=new vr(null,this.l))}Vt.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(_r(h,Xl,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(_r(h,Xl,!0),"@"),a.push(fr(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(_r(f,f.charAt(0)=="/"?zm:Bm,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",_r(f,qm)),a.join("")},Vt.prototype.resolve=function(a){const h=rt(this);let f=!!a.j;f?pr(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var g=a.h;if(f)gr(h,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var k=h.h.lastIndexOf("/");k!=-1&&(g=h.h.slice(0,k+1)+g)}if(k=g,k==".."||k==".")g="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){g=k.lastIndexOf("/",0)==0,k=k.split("/");const V=[];for(let M=0;M<k.length;){const Q=k[M++];Q=="."?g&&M==k.length&&V.push(""):Q==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),g&&M==k.length&&V.push("")):(V.push(Q),g=!0)}g=V.join("/")}else g=k}return f?h.h=g:f=a.i.toString()!=="",f?co(h,nc(a.i)):f=!!a.m,f&&(h.m=a.m),h};function rt(a){return new Vt(a)}function pr(a,h,f){a.j=f?yr(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function gr(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function co(a,h,f){h instanceof vr?(a.i=h,Wm(a.i,a.l)):(f||(h=_r(h,Hm)),a.i=new vr(h,a.l))}function oe(a,h,f){a.i.set(h,f)}function ws(a){return oe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function yr(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function _r(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,$m),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function $m(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Xl=/[#\/\?@]/g,Bm=/[#\?:]/g,zm=/[#\?]/g,Hm=/[#\?@]/g,qm=/#/g;function vr(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function sn(a){a.g||(a.g=new Map,a.h=0,a.i&&Fm(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=vr.prototype,n.add=function(a,h){sn(this),this.i=null,a=kn(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Jl(a,h){sn(a),h=kn(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Zl(a,h){return sn(a),h=kn(a,h),a.g.has(h)}n.forEach=function(a,h){sn(this),this.g.forEach(function(f,g){f.forEach(function(k){a.call(h,k,g,this)},this)},this)};function ec(a,h){sn(a);let f=[];if(typeof h=="string")Zl(a,h)&&(f=f.concat(a.g.get(kn(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}n.set=function(a,h){return sn(this),this.i=null,a=kn(this,a),Zl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=ec(this,a),a.length>0?String(a[0]):h):h};function tc(a,h,f){Jl(a,h),f.length>0&&(a.i=null,a.g.set(kn(a,h),_(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const k=fr(f);f=ec(this,f);for(let V=0;V<f.length;V++){let M=k;f[V]!==""&&(M+="="+fr(f[V])),a.push(M)}}return this.i=a.join("&")};function nc(a){const h=new vr;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function kn(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Wm(a,h){h&&!a.j&&(sn(a),a.i=null,a.g.forEach(function(f,g){const k=g.toLowerCase();g!=k&&(Jl(this,g),tc(this,k,f))},a)),a.j=h}function Gm(a,h){const f=new dr;if(o.Image){const g=new Image;g.onload=m(jt,f,"TestLoadImage: loaded",!0,h,g),g.onerror=m(jt,f,"TestLoadImage: error",!1,h,g),g.onabort=m(jt,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=m(jt,f,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Km(a,h){const f=new dr,g=new AbortController,k=setTimeout(()=>{g.abort(),jt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(k),V.ok?jt(f,"TestPingServer: ok",!0,h):jt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),jt(f,"TestPingServer: error",!1,h)})}function jt(a,h,f,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(f)}catch{}}function Qm(){this.g=new Pm}function uo(a){this.i=a.Sb||null,this.h=a.ab||!1}p(uo,kl),uo.prototype.g=function(){return new bs(this.i,this.h)};function bs(a,h){Pe.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(bs,Pe),n=bs.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,br(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,br(this)),this.g&&(this.readyState=3,br(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;rc(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function rc(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?wr(this):br(this),this.readyState==3&&rc(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,wr(this))},n.Na=function(a){this.g&&(this.response=a,wr(this))},n.ga=function(){this.g&&wr(this)};function wr(a){a.readyState=4,a.l=null,a.j=null,a.B=null,br(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function br(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(bs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function sc(a){let h="";return Nn(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function ho(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=sc(f),typeof a=="string"?f!=null&&fr(f):oe(a,h,f))}function de(a){Pe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(de,Pe);var Ym=/^https?$/i,Xm=["POST","PUT"];n=de.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ul.g(),this.g.onreadystatechange=v(d(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){ic(this,V);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)f.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())f.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),k=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Xm,h,void 0)>=0)||g||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,M]of f)this.g.setRequestHeader(V,M);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){ic(this,V)}};function ic(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,oc(a),xs(a)}function oc(a){a.A||(a.A=!0,Oe(a,"complete"),Oe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Oe(this,"complete"),Oe(this,"abort"),xs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xs(this,!0)),de.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ac(this):this.Xa())},n.Xa=function(){ac(this)};function ac(a){if(a.h&&typeof i<"u"){if(a.v&&Ot(a)==4)setTimeout(a.Ca.bind(a),0);else if(Oe(a,"readystatechange"),Ot(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=V===0){let M=String(a.D).match(Yl)[1]||null;!M&&o.self&&o.self.location&&(M=o.self.location.protocol.slice(0,-1)),g=!Ym.test(M?M.toLowerCase():"")}f=g}if(f)Oe(a,"complete"),Oe(a,"success");else{a.o=6;try{var k=Ot(a)>2?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.ca()+"]",oc(a)}}finally{xs(a)}}}}function xs(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||Oe(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ot(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Ot(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Nm(h)}};function lc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Jm(a){const h={};a=(a.g&&Ot(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(E(a[g]))continue;var f=Om(a[g]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[k]||[];h[k]=V,V.push(f)}Tm(h,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function xr(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function cc(a){this.za=0,this.i=[],this.j=new dr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=xr("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=xr("baseRetryDelayMs",5e3,a),this.Za=xr("retryDelaySeedMs",1e4,a),this.Ta=xr("forwardChannelMaxRetries",2,a),this.va=xr("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ql(a&&a.concurrentRequestLimit),this.Ba=new Qm,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=cc.prototype,n.ka=8,n.I=1,n.connect=function(a,h,f,g){Le(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=_c(this,null,this.W),Ts(this)};function fo(a){if(uc(a),a.I==3){var h=a.V++,f=rt(a.J);if(oe(f,"SID",a.M),oe(f,"RID",h),oe(f,"TYPE","terminate"),Er(a,f),h=new Dt(a,a.j,h),h.M=2,h.A=ws(rt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=vc(h.j,null),h.g.ea(h.A)),h.F=Date.now(),vs(h)}yc(a)}function Es(a){a.g&&(po(a),a.g.cancel(),a.g=null)}function uc(a){Es(a),a.v&&(o.clearTimeout(a.v),a.v=null),Is(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ts(a){if(!Wl(a.h)&&!a.m){a.m=!0;var h=a.Ea;U||y(),$||(U(),$=!0),b.add(h,a),a.D=0}}function Zm(a,h){return Gl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=hr(d(a.Ea,a,h),gc(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const k=new Dt(this,this.j,a);let V=this.o;if(this.U&&(V?(V=xl(V),Tl(V,this.U)):V=this.U),this.u!==null||this.R||(k.J=V,V=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=dc(this,k,h),f=rt(this.J),oe(f,"RID",a),oe(f,"CVER",22),this.G&&oe(f,"X-HTTP-Session-Id",this.G),Er(this,f),V&&(this.R?h="headers="+fr(sc(V))+"&"+h:this.u&&ho(f,this.u,V)),lo(this.h,k),this.Ra&&oe(f,"TYPE","init"),this.S?(oe(f,"$req",h),oe(f,"SID","null"),k.U=!0,so(k,f,null)):so(k,f,h),this.I=2}}else this.I==3&&(a?hc(this,a):this.i.length==0||Wl(this.h)||hc(this))};function hc(a,h){var f;h?f=h.l:f=a.V++;const g=rt(a.J);oe(g,"SID",a.M),oe(g,"RID",f),oe(g,"AID",a.K),Er(a,g),a.u&&a.o&&ho(g,a.u,a.o),f=new Dt(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=dc(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),lo(a.h,f),so(f,g,h)}function Er(a,h){a.H&&Nn(a.H,function(f,g){oe(h,g,f)}),a.l&&Nn({},function(f,g){oe(h,g,f)})}function dc(a,h,f){f=Math.min(a.i.length,f);const g=a.l?d(a.l.Ka,a.l,a):null;e:{var k=a.i;let Q=-1;for(;;){const be=["count="+f];Q==-1?f>0?(Q=k[0].g,be.push("ofs="+Q)):Q=0:be.push("ofs="+Q);let se=!0;for(let Te=0;Te<f;Te++){var V=k[Te].g;const st=k[Te].map;if(V-=Q,V<0)Q=Math.max(0,k[Te].g-100),se=!1;else try{V="req"+V+"_"||"";try{var M=st instanceof Map?st:Object.entries(st);for(const[an,Lt]of M){let Mt=Lt;l(Lt)&&(Mt=Zi(Lt)),be.push(V+an+"="+encodeURIComponent(Mt))}}catch(an){throw be.push(V+"type="+encodeURIComponent("_badmap")),an}}catch{g&&g(st)}}if(se){M=be.join("&");break e}}M=void 0}return a=a.i.splice(0,f),h.G=a,M}function fc(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;U||y(),$||(U(),$=!0),b.add(h,a),a.A=0}}function mo(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=hr(d(a.Da,a),gc(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,mc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=hr(d(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Le(10),Es(this),mc(this))};function po(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function mc(a){a.g=new Dt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=rt(a.na);oe(h,"RID","rpc"),oe(h,"SID",a.M),oe(h,"AID",a.K),oe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&oe(h,"TO",a.ia),oe(h,"TYPE","xmlhttp"),Er(a,h),a.u&&a.o&&ho(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=ws(rt(h)),f.u=null,f.R=!0,Bl(f,a)}n.Va=function(){this.C!=null&&(this.C=null,Es(this),mo(this),Le(19))};function Is(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function pc(a,h){var f=null;if(a.g==h){Is(a),po(a),a.g=null;var g=2}else if(ao(a.h,h))f=h.G,Kl(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var k=a.D;g=ys(),Oe(g,new Ll(g,f)),Ts(a)}else fc(a);else if(k=h.m,k==3||k==0&&h.X>0||!(g==1&&Zm(a,h)||g==2&&mo(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),k){case 1:on(a,5);break;case 4:on(a,10);break;case 3:on(a,6);break;default:on(a,2)}}}function gc(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function on(a,h){if(a.j.info("Error code "+h),h==2){var f=d(a.bb,a),g=a.Ua;const k=!g;g=new Vt(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||pr(g,"https"),ws(g),k?Gm(g.toString(),f):Km(g.toString(),f)}else Le(2);a.I=0,a.l&&a.l.pa(h),yc(a),uc(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function yc(a){if(a.I=0,a.ja=[],a.l){const h=Ql(a.h);(h.length!=0||a.i.length!=0)&&(A(a.ja,h),A(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function _c(a,h,f){var g=f instanceof Vt?rt(f):new Vt(f);if(g.g!="")h&&(g.g=h+"."+g.g),gr(g,g.u);else{var k=o.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;const V=new Vt(null);g&&pr(V,g),h&&(V.g=h),k&&gr(V,k),f&&(V.h=f),g=V}return f=a.G,h=a.wa,f&&h&&oe(g,f,h),oe(g,"VER",a.ka),Er(a,g),g}function vc(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new de(new uo({ab:f})):new de(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wc(){}n=wc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Rs(){}Rs.prototype.g=function(a,h){return new qe(a,h)};function qe(a,h){Pe.call(this),this.g=new cc(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!E(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Dn(this)}p(qe,Pe),qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},qe.prototype.close=function(){fo(this.g)},qe.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Zi(a),a=f);h.i.push(new Um(h.Ya++,a)),h.I==3&&Ts(h)},qe.prototype.N=function(){this.g.l=null,delete this.j,fo(this.g),delete this.g,qe.Z.N.call(this)};function bc(a){eo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(bc,eo);function xc(){to.call(this),this.status=1}p(xc,to);function Dn(a){this.g=a}p(Dn,wc),Dn.prototype.ra=function(){Oe(this.g,"a")},Dn.prototype.qa=function(a){Oe(this.g,new bc(a))},Dn.prototype.pa=function(a){Oe(this.g,new xc)},Dn.prototype.oa=function(){Oe(this.g,"b")},Rs.prototype.createWebChannel=Rs.prototype.g,qe.prototype.send=qe.prototype.o,qe.prototype.open=qe.prototype.m,qe.prototype.close=qe.prototype.close,Cd=function(){return new Rs},Ad=function(){return ys()},Rd=nn,Wo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_s.NO_ERROR=0,_s.TIMEOUT=8,_s.HTTP_ERROR=6,Hs=_s,Ml.COMPLETE="complete",Id=Ml,Dl.EventType=cr,cr.OPEN="a",cr.CLOSE="b",cr.ERROR="c",cr.MESSAGE="d",Pe.prototype.listen=Pe.prototype.J,Cr=Dl,de.prototype.listenOnce=de.prototype.K,de.prototype.getLastError=de.prototype.Ha,de.prototype.getLastErrorCode=de.prototype.ya,de.prototype.getStatus=de.prototype.ca,de.prototype.getResponseJson=de.prototype.La,de.prototype.getResponseText=de.prototype.la,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Fa,Td=de}).apply(typeof Ns<"u"?Ns:typeof self<"u"?self:typeof window<"u"?window:{});const ou="@firebase/firestore",au="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}De.UNAUTHENTICATED=new De(null),De.GOOGLE_CREDENTIALS=new De("google-credentials-uid"),De.FIRST_PARTY=new De("first-party-uid"),De.MOCK_USER=new De("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rr="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new Ra("@firebase/firestore");function jn(){return wn.logLevel}function F(n,...e){if(wn.logLevel<=Y.DEBUG){const t=e.map(Ua);wn.debug(`Firestore (${rr}): ${n}`,...t)}}function Ct(n,...e){if(wn.logLevel<=Y.ERROR){const t=e.map(Ua);wn.error(`Firestore (${rr}): ${n}`,...t)}}function qn(n,...e){if(wn.logLevel<=Y.WARN){const t=e.map(Ua);wn.warn(`Firestore (${rr}): ${n}`,...t)}}function Ua(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Sd(n,r,t)}function Sd(n,e,t){let r=`FIRESTORE (${rr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ct(r),new Error(r)}function te(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Sd(e,s,r)}function K(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends wt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(De.UNAUTHENTICATED))}shutdown(){}}class Ov{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Lv{constructor(e){this.t=e,this.currentUser=De.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string",31837,{l:r}),new Nd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string",2055,{h:e}),new De(e)}}class Mv{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=De.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Uv{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Mv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(De.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ue(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){te(this.o===void 0,3512);const r=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new lu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new lu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=$v(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function X(n,e){return n<e?-1:n>e?1:0}function Go(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Co(s)===Co(i)?X(s,i):Co(s)?1:-1}return X(n.length,e.length)}const Bv=55296,zv=57343;function Co(n){const e=n.charCodeAt(0);return e>=Bv&&e<=zv}function Wn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="__name__";class it{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&W(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return it.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof it?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=it.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return X(e.length,t.length)}static compareSegments(e,t){const r=it.isNumericId(e),s=it.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?it.extractNumericId(e).compare(it.extractNumericId(t)):Go(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gt.fromString(e.substring(4,e.length-2))}}class ce extends it{construct(e,t,r){return new ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ce(t)}static emptyPath(){return new ce([])}}const Hv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ce extends it{construct(e,t,r){return new Ce(e,t,r)}static isValidIdentifier(e){return Hv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cu}static keyField(){return new Ce([cu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ce(t)}static emptyPath(){return new Ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(ce.fromString(e))}static fromName(e){return new z(ce.fromString(e).popFirst(5))}static empty(){return new z(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(n,e,t){if(!t)throw new B(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Wv(n,e,t,r){if(e===!0&&r===!0)throw new B(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function uu(n){if(!z.isDocumentKey(n))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Pd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function $a(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function Bn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$a(n);throw new B(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,e){const t={typeString:n};return e&&(t.value=e),t}function os(n,e){if(!Pd(n))throw new B(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new B(L.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=-62135596800,du=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*du);return new ae(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<hu)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/du}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(os(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:we("string",ae._jsonSchemaVersion),seconds:we("number"),nanoseconds:we("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static fromTimestamp(e){return new G(e)}static min(){return new G(new ae(0,0))}static max(){return new G(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=-1;function Gv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new ae(t+1,0):new ae(t,r));return new Yt(s,z.empty(),e)}function Kv(n){return new Yt(n.readTime,n.key,zr)}class Yt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Yt(G.min(),z.empty(),zr)}static max(){return new Yt(G.max(),z.empty(),zr)}}function Qv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==Yv)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},u=>r(u))}),o=!0,i===s&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(s=>s?O.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new O((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(m=>{o[d]=m,++l,l===i&&r(o)},m=>s(m))}})}static doWhile(e,t){return new O((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Jv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ir(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ai.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=-1;function Ci(n){return n==null}function ai(n){return n===0&&1/n==-1/0}function Zv(n){return typeof n=="number"&&Number.isInteger(n)&&!ai(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="";function ew(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=fu(e)),e=tw(n.get(t),e);return fu(e)}function tw(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case kd:t+="";break;default:t+=i}}return t}function fu(n){return n+kd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Rn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Dd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){this.comparator=e,this.root=t||Ae.EMPTY}insert(e,t){return new ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ps(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ps(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ps(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ps(this.root,e,this.comparator,!0)}}class Ps{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ae.RED,this.left=s??Ae.EMPTY,this.right=i??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ae(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ae.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ae(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new pu(this.data.getIterator())}getIteratorFrom(e){return new pu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ee(this.comparator);return t.data=e,t}}class pu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.fields=e,e.sort(Ce.comparator)}static empty(){return new Je([])}unionWith(e){let t=new Ee(Ce.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Vd("Invalid base64 string: "+i):i}}(e);return new Ne(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const nw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(n){if(te(!!n,39018),typeof n=="string"){let e=0;const t=nw.exec(n);if(te(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jt(n){return typeof n=="string"?Ne.fromBase64String(n):Ne.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="server_timestamp",Od="__type__",Ld="__previous_value__",Md="__local_write_time__";function za(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Od])==null?void 0:r.stringValue)===jd}function Si(n){const e=n.mapValue.fields[Ld];return za(e)?Si(e):e}function Hr(n){const e=Xt(n.mapValue.fields[Md].timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t,r,s,i,o,l,u,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m}}const li="(default)";class qr{constructor(e,t){this.projectId=e,this.database=t||li}static empty(){return new qr("","")}get isDefaultDatabase(){return this.database===li}isEqual(e){return e instanceof qr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="__type__",sw="__max__",ks={mapValue:{}},Fd="__vector__",ci="value";function Zt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?za(n)?4:ow(n)?9007199254740991:iw(n)?10:11:W(28295,{value:n})}function gt(n,e){if(n===e)return!0;const t=Zt(n);if(t!==Zt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Hr(n).isEqual(Hr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Xt(s.timestampValue),l=Xt(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Jt(s.bytesValue).isEqual(Jt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ge(s.geoPointValue.latitude)===ge(i.geoPointValue.latitude)&&ge(s.geoPointValue.longitude)===ge(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ge(s.integerValue)===ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ge(s.doubleValue),l=ge(i.doubleValue);return o===l?ai(o)===ai(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return Wn(n.arrayValue.values||[],e.arrayValue.values||[],gt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(mu(o)!==mu(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!gt(o[u],l[u])))return!1;return!0}(n,e);default:return W(52216,{left:n})}}function Wr(n,e){return(n.values||[]).find(t=>gt(t,e))!==void 0}function Gn(n,e){if(n===e)return 0;const t=Zt(n),r=Zt(e);if(t!==r)return X(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ge(i.integerValue||i.doubleValue),u=ge(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return gu(n.timestampValue,e.timestampValue);case 4:return gu(Hr(n),Hr(e));case 5:return Go(n.stringValue,e.stringValue);case 6:return function(i,o){const l=Jt(i),u=Jt(o);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const m=X(l[d],u[d]);if(m!==0)return m}return X(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const l=X(ge(i.latitude),ge(o.latitude));return l!==0?l:X(ge(i.longitude),ge(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return yu(n.arrayValue,e.arrayValue);case 10:return function(i,o){var v,_,A,P;const l=i.fields||{},u=o.fields||{},d=(v=l[ci])==null?void 0:v.arrayValue,m=(_=u[ci])==null?void 0:_.arrayValue,p=X(((A=d==null?void 0:d.values)==null?void 0:A.length)||0,((P=m==null?void 0:m.values)==null?void 0:P.length)||0);return p!==0?p:yu(d,m)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===ks.mapValue&&o===ks.mapValue)return 0;if(i===ks.mapValue)return 1;if(o===ks.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=o.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let p=0;p<u.length&&p<m.length;++p){const v=Go(u[p],m[p]);if(v!==0)return v;const _=Gn(l[u[p]],d[m[p]]);if(_!==0)return _}return X(u.length,m.length)}(n.mapValue,e.mapValue);default:throw W(23264,{he:t})}}function gu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=Xt(n),r=Xt(e),s=X(t.seconds,r.seconds);return s!==0?s:X(t.nanos,r.nanos)}function yu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Gn(t[s],r[s]);if(i)return i}return X(t.length,r.length)}function Kn(n){return Ko(n)}function Ko(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Jt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ko(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ko(t.fields[o])}`;return s+"}"}(n.mapValue):W(61005,{value:n})}function qs(n){switch(Zt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Si(n);return e?16+qs(e):16;case 5:return 2*n.stringValue.length;case 6:return Jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+qs(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Rn(r.fields,(i,o)=>{s+=i.length+qs(o)}),s}(n.mapValue);default:throw W(13486,{value:n})}}function Qo(n){return!!n&&"integerValue"in n}function Ha(n){return!!n&&"arrayValue"in n}function _u(n){return!!n&&"nullValue"in n}function vu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ws(n){return!!n&&"mapValue"in n}function iw(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ud])==null?void 0:r.stringValue)===Fd}function Vr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Rn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Vr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vr(n.arrayValue.values[t]);return e}return{...n}}function ow(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===sw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.value=e}static empty(){return new Ge({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ws(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vr(t)}setAll(e){let t=Ce.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}o?r[l.lastSegment()]=Vr(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ws(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ws(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Rn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ge(Vr(this.value))}}function $d(n){const e=[];return Rn(n.fields,(t,r)=>{const s=new Ce([t]);if(Ws(r)){const i=$d(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Je(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t,r,s,i,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ve(e,0,G.min(),G.min(),G.min(),Ge.empty(),0)}static newFoundDocument(e,t,r,s){return new Ve(e,1,t,G.min(),r,s,0)}static newNoDocument(e,t){return new Ve(e,2,t,G.min(),G.min(),Ge.empty(),0)}static newUnknownDocument(e,t){return new Ve(e,3,t,G.min(),G.min(),Ge.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ge.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t){this.position=e,this.inclusive=t}}function wu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),t.key):r=Gn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function bu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!gt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t="asc"){this.field=e,this.dir=t}}function aw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{}class xe extends Bd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new cw(e,t,r):t==="array-contains"?new dw(e,r):t==="in"?new fw(e,r):t==="not-in"?new mw(e,r):t==="array-contains-any"?new pw(e,r):new xe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new uw(e,r):new hw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Gn(t,this.value)):t!==null&&Zt(this.value)===Zt(t)&&this.matchesComparison(Gn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yt extends Bd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new yt(e,t)}matches(e){return zd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function zd(n){return n.op==="and"}function Hd(n){return lw(n)&&zd(n)}function lw(n){for(const e of n.filters)if(e instanceof yt)return!1;return!0}function Yo(n){if(n instanceof xe)return n.field.canonicalString()+n.op.toString()+Kn(n.value);if(Hd(n))return n.filters.map(e=>Yo(e)).join(",");{const e=n.filters.map(t=>Yo(t)).join(",");return`${n.op}(${e})`}}function qd(n,e){return n instanceof xe?function(r,s){return s instanceof xe&&r.op===s.op&&r.field.isEqual(s.field)&&gt(r.value,s.value)}(n,e):n instanceof yt?function(r,s){return s instanceof yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&qd(o,s.filters[l]),!0):!1}(n,e):void W(19439)}function Wd(n){return n instanceof xe?function(t){return`${t.field.canonicalString()} ${t.op} ${Kn(t.value)}`}(n):n instanceof yt?function(t){return t.op.toString()+" {"+t.getFilters().map(Wd).join(" ,")+"}"}(n):"Filter"}class cw extends xe{constructor(e,t,r){super(e,t,r),this.key=z.fromName(r.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class uw extends xe{constructor(e,t){super(e,"in",t),this.keys=Gd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class hw extends xe{constructor(e,t){super(e,"not-in",t),this.keys=Gd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Gd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>z.fromName(r.referenceValue))}class dw extends xe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ha(t)&&Wr(t.arrayValue,this.value)}}class fw extends xe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wr(this.value.arrayValue,t)}}class mw extends xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Wr(this.value.arrayValue,t)}}class pw extends xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ha(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Wr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,t=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function xu(n,e=null,t=[],r=[],s=null,i=null,o=null){return new gw(n,e,t,r,s,i,o)}function qa(n){const e=K(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Yo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ci(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Kn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Kn(r)).join(",")),e.Te=t}return e.Te}function Wa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!aw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!qd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!bu(n.startAt,e.startAt)&&bu(n.endAt,e.endAt)}function Xo(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function yw(n,e,t,r,s,i,o,l){return new Ni(n,e,t,r,s,i,o,l)}function Ga(n){return new Ni(n)}function Eu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _w(n){return n.collectionGroup!==null}function jr(n){const e=K(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ee(Ce.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new hi(i,r))}),t.has(Ce.keyField().canonicalString())||e.Ie.push(new hi(Ce.keyField(),r))}return e.Ie}function dt(n){const e=K(n);return e.Ee||(e.Ee=vw(e,jr(n))),e.Ee}function vw(n,e){if(n.limitType==="F")return xu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new hi(s.field,i)});const t=n.endAt?new ui(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ui(n.startAt.position,n.startAt.inclusive):null;return xu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Jo(n,e,t){return new Ni(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Pi(n,e){return Wa(dt(n),dt(e))&&n.limitType===e.limitType}function Kd(n){return`${qa(dt(n))}|lt:${n.limitType}`}function On(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Wd(s)).join(", ")}]`),Ci(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Kn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Kn(s)).join(",")),`Target(${r})`}(dt(n))}; limitType=${n.limitType})`}function ki(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of jr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const d=wu(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,jr(r),s)||r.endAt&&!function(o,l,u){const d=wu(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,jr(r),s))}(n,e)}function ww(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qd(n){return(e,t)=>{let r=!1;for(const s of jr(n)){const i=bw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function bw(n,e,t){const r=n.field.isKeyField()?z.comparator(e.key,t.key):function(i,o,l){const u=o.data.field(i),d=l.data.field(i);return u!==null&&d!==null?Gn(u,d):W(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Dd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=new ue(z.comparator);function St(){return xw}const Yd=new ue(z.comparator);function Sr(...n){let e=Yd;for(const t of n)e=e.insert(t.key,t);return e}function Xd(n){let e=Yd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function un(){return Or()}function Jd(){return Or()}function Or(){return new An(n=>n.toString(),(n,e)=>n.isEqual(e))}const Ew=new ue(z.comparator),Tw=new Ee(z.comparator);function J(...n){let e=Tw;for(const t of n)e=e.add(t);return e}const Iw=new Ee(X);function Rw(){return Iw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ai(e)?"-0":e}}function Zd(n){return{integerValue:""+n}}function Aw(n,e){return Zv(e)?Zd(e):Ka(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this._=void 0}}function Cw(n,e,t){return n instanceof di?function(s,i){const o={fields:{[Od]:{stringValue:jd},[Md]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&za(i)&&(i=Si(i)),i&&(o.fields[Ld]=i),{mapValue:o}}(t,e):n instanceof Gr?tf(n,e):n instanceof Kr?nf(n,e):function(s,i){const o=ef(s,i),l=Tu(o)+Tu(s.Ae);return Qo(o)&&Qo(s.Ae)?Zd(l):Ka(s.serializer,l)}(n,e)}function Sw(n,e,t){return n instanceof Gr?tf(n,e):n instanceof Kr?nf(n,e):t}function ef(n,e){return n instanceof fi?function(r){return Qo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class di extends Di{}class Gr extends Di{constructor(e){super(),this.elements=e}}function tf(n,e){const t=rf(e);for(const r of n.elements)t.some(s=>gt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Kr extends Di{constructor(e){super(),this.elements=e}}function nf(n,e){let t=rf(e);for(const r of n.elements)t=t.filter(s=>!gt(s,r));return{arrayValue:{values:t}}}class fi extends Di{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Tu(n){return ge(n.integerValue||n.doubleValue)}function rf(n){return Ha(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Nw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Gr&&s instanceof Gr||r instanceof Kr&&s instanceof Kr?Wn(r.elements,s.elements,gt):r instanceof fi&&s instanceof fi?gt(r.Ae,s.Ae):r instanceof di&&s instanceof di}(n.transform,e.transform)}class Pw{constructor(e,t){this.version=e,this.transformResults=t}}class Tt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tt}static exists(e){return new Tt(void 0,e)}static updateTime(e){return new Tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Vi{}function sf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new af(n.key,Tt.none()):new as(n.key,n.data,Tt.none());{const t=n.data,r=Ge.empty();let s=new Ee(Ce.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Cn(n.key,r,new Je(s.toArray()),Tt.none())}}function kw(n,e,t){n instanceof as?function(s,i,o){const l=s.value.clone(),u=Ru(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Cn?function(s,i,o){if(!Gs(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ru(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(of(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Lr(n,e,t,r){return n instanceof as?function(i,o,l,u){if(!Gs(i.precondition,o))return l;const d=i.value.clone(),m=Au(i.fieldTransforms,u,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Cn?function(i,o,l,u){if(!Gs(i.precondition,o))return l;const d=Au(i.fieldTransforms,u,o),m=o.data;return m.setAll(of(i)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,l){return Gs(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function Dw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=ef(r.transform,s||null);i!=null&&(t===null&&(t=Ge.empty()),t.set(r.field,i))}return t||null}function Iu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Wn(r,s,(i,o)=>Nw(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class as extends Vi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cn extends Vi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function of(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ru(n,e,t){const r=new Map;te(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Sw(o,l,t[s]))}return r}function Au(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,Cw(i,o,e))}return r}class af extends Vi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vw extends Vi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&kw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Lr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Lr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Jd();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const u=sf(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),J())}isEqual(e){return this.batchId===e.batchId&&Wn(this.mutations,e.mutations,(t,r)=>Iu(t,r))&&Wn(this.baseMutations,e.baseMutations,(t,r)=>Iu(t,r))}}class Qa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){te(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Ew}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Qa(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,Z;function Mw(n){switch(n){case L.OK:return W(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return W(15467,{code:n})}}function lf(n){if(n===void 0)return Ct("GRPC error has no .code"),L.UNKNOWN;switch(n){case ve.OK:return L.OK;case ve.CANCELLED:return L.CANCELLED;case ve.UNKNOWN:return L.UNKNOWN;case ve.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case ve.INTERNAL:return L.INTERNAL;case ve.UNAVAILABLE:return L.UNAVAILABLE;case ve.UNAUTHENTICATED:return L.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case ve.NOT_FOUND:return L.NOT_FOUND;case ve.ALREADY_EXISTS:return L.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return L.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case ve.ABORTED:return L.ABORTED;case ve.OUT_OF_RANGE:return L.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return L.UNIMPLEMENTED;case ve.DATA_LOSS:return L.DATA_LOSS;default:return W(39323,{code:n})}}(Z=ve||(ve={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=new Gt([4294967295,4294967295],0);function Cu(n){const e=Uw().encode(n),t=new Ed;return t.update(e),new Uint8Array(t.digest())}function Su(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gt([t,r],0),new Gt([s,i],0)]}class Ya{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Nr(`Invalid padding: ${t}`);if(r<0)throw new Nr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Nr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Nr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Gt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Gt.fromNumber(r)));return s.compare(Fw)===1&&(s=new Gt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Cu(e),[r,s]=Su(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ya(i,s,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const t=Cu(e),[r,s]=Su(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Nr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ls.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ji(G.min(),s,new ue(X),St(),J())}}class ls{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ls(r,t,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class cf{constructor(e,t){this.targetId=e,this.Ce=t}}class uf{constructor(e,t,r=Ne.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Nu{constructor(){this.ve=0,this.Fe=Pu(),this.Me=Ne.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=J(),t=J(),r=J();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:W(38017,{changeType:i})}}),new ls(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Pu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,te(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class $w{constructor(e){this.Ge=e,this.ze=new Map,this.je=St(),this.Je=Ds(),this.He=Ds(),this.Ye=new ue(X)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:W(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Xo(i))if(r===0){const o=new z(i.path);this.et(t,o,Ve.newNoDocument(o,G.min()))}else te(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=Jt(r).toUint8Array()}catch(u){if(u instanceof Vd)return qn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ya(o,s,i)}catch(u){return qn(u instanceof Nr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Xo(l.target)){const u=new z(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Ve.newNoDocument(u,e))}i.Be&&(t.set(o,i.ke()),i.qe())}});let r=J();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new ji(e,t,this.Ye,this.je,r);return this.je=St(),this.Je=Ds(),this.He=Ds(),this.Ye=new ue(X),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Nu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ee(X),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ee(X),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Nu),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ds(){return new ue(z.comparator)}function Pu(){return new ue(z.comparator)}const Bw={asc:"ASCENDING",desc:"DESCENDING"},zw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hw={and:"AND",or:"OR"};class qw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Zo(n,e){return n.useProto3Json||Ci(e)?e:{value:e}}function mi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ww(n,e){return mi(n,e.toTimestamp())}function ft(n){return te(!!n,49232),G.fromTimestamp(function(t){const r=Xt(t);return new ae(r.seconds,r.nanos)}(n))}function Xa(n,e){return ea(n,e).canonicalString()}function ea(n,e){const t=function(s){return new ce(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function df(n){const e=ce.fromString(n);return te(yf(e),10190,{key:e.toString()}),e}function ta(n,e){return Xa(n.databaseId,e.path)}function So(n,e){const t=df(e);if(t.get(1)!==n.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z(mf(t))}function ff(n,e){return Xa(n.databaseId,e)}function Gw(n){const e=df(n);return e.length===4?ce.emptyPath():mf(e)}function na(n){return new ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mf(n){return te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ku(n,e,t){return{name:ta(n,e),fields:t.value.mapValue.fields}}function Kw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:W(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(te(m===void 0||typeof m=="string",58123),Ne.fromBase64String(m||"")):(te(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Ne.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const m=d.code===void 0?L.UNKNOWN:lf(d.code);return new B(m,d.message||"")}(o);t=new uf(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=So(n,r.document.name),i=ft(r.document.updateTime),o=r.document.createTime?ft(r.document.createTime):G.min(),l=new Ge({mapValue:{fields:r.document.fields}}),u=Ve.newFoundDocument(s,i,o,l),d=r.targetIds||[],m=r.removedTargetIds||[];t=new Ks(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=So(n,r.document),i=r.readTime?ft(r.readTime):G.min(),o=Ve.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Ks([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=So(n,r.document),i=r.removedTargetIds||[];t=new Ks([],i,s,null)}else{if(!("filter"in e))return W(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Lw(s,i),l=r.targetId;t=new cf(l,o)}}return t}function Qw(n,e){let t;if(e instanceof as)t={update:ku(n,e.key,e.value)};else if(e instanceof af)t={delete:ta(n,e.key)};else if(e instanceof Cn)t={update:ku(n,e.key,e.data),updateMask:sb(e.fieldMask)};else{if(!(e instanceof Vw))return W(16599,{Vt:e.type});t={verify:ta(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof di)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Gr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Kr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fi)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw W(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ww(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W(27497)}(n,e.precondition)),t}function Yw(n,e){return n&&n.length>0?(te(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?ft(s.updateTime):ft(i);return o.isEqual(G.min())&&(o=ft(i)),new Pw(o,s.transformResults||[])}(t,e))):[]}function Xw(n,e){return{documents:[ff(n,e.path)]}}function Jw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ff(n,s);const i=function(d){if(d.length!==0)return gf(yt.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(m=>function(v){return{field:Ln(v.field),direction:tb(v.dir)}}(m))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Zo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function Zw(n){let e=Gw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){te(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(p){const v=pf(p);return v instanceof yt&&Hd(v)?v.getFilters():[v]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(v=>function(A){return new hi(Mn(A.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(v))}(t.orderBy));let l=null;t.limit&&(l=function(p){let v;return v=typeof p=="object"?p.value:p,Ci(v)?null:v}(t.limit));let u=null;t.startAt&&(u=function(p){const v=!!p.before,_=p.values||[];return new ui(_,v)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const v=!p.before,_=p.values||[];return new ui(_,v)}(t.endAt)),yw(e,s,o,i,l,"F",u,d)}function eb(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function pf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Mn(t.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Mn(t.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Mn(t.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Mn(t.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}}(n):n.fieldFilter!==void 0?function(t){return xe.create(Mn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return yt.create(t.compositeFilter.filters.map(r=>pf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W(1026)}}(t.compositeFilter.op))}(n):W(30097,{filter:n})}function tb(n){return Bw[n]}function nb(n){return zw[n]}function rb(n){return Hw[n]}function Ln(n){return{fieldPath:n.canonicalString()}}function Mn(n){return Ce.fromServerFormat(n.fieldPath)}function gf(n){return n instanceof xe?function(t){if(t.op==="=="){if(vu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NAN"}};if(_u(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NAN"}};if(_u(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(t.field),op:nb(t.op),value:t.value}}}(n):n instanceof yt?function(t){const r=t.getFilters().map(s=>gf(s));return r.length===1?r[0]:{compositeFilter:{op:rb(t.op),filters:r}}}(n):W(54877,{filter:n})}function sb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function yf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t,r,s,i=G.min(),o=G.min(),l=Ne.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Ht(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.yt=e}}function ob(n){const e=Zw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this.Cn=new lb}addToCollectionParentIndex(e,t){return this.Cn.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(Yt.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class lb{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ee(ce.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ee(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_f=41943040;class Be{static withCacheSize(e){return new Be(e,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be.DEFAULT_COLLECTION_PERCENTILE=10,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Be.DEFAULT=new Be(_f,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Be.DISABLED=new Be(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Qn(0)}static cr(){return new Qn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="LruGarbageCollector",cb=1048576;function ju([n,e],[t,r]){const s=X(n,t);return s===0?X(e,r):s}class ub{constructor(e){this.Ir=e,this.buffer=new Ee(ju),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ju(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hb{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){F(Vu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ir(t)?F(Vu,"Ignoring IndexedDB error during garbage collection: ",t):await sr(t)}await this.Vr(3e5)})}}class db{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return O.resolve(Ai.ce);const r=new ub(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Du)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Du):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,o,l,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),jn()<=Y.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function fb(n,e){return new db(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(){this.changes=new An(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Lr(r.mutation,s,Je.empty(),ae.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,t,r=J()){const s=un();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Sr();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=un();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,J()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,s){let i=St();const o=Or(),l=function(){return Or()}();return t.forEach((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Cn)?i=i.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),Lr(m.mutation,d,m.mutation.getFieldMask(),ae.now())):o.set(d.key,Je.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>o.set(d,m)),t.forEach((d,m)=>l.set(d,new pb(m,o.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Or();let s=new ue((o,l)=>o-l),i=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||Je.empty();m=l.applyToLocalView(d,m),r.set(u,m);const p=(s.get(l.batchId)||J()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,m=u.value,p=Jd();m.forEach(v=>{if(!i.has(v)){const _=sf(t.get(v),r.get(v));_!==null&&p.set(v,_),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_w(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):O.resolve(un());let l=zr,u=i;return o.next(d=>O.forEach(d,(m,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(m)?O.resolve():this.remoteDocumentCache.getEntry(e,m).next(v=>{u=u.insert(m,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,J())).next(m=>({batchId:l,changes:Xd(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(r=>{let s=Sr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Sr();return this.indexManager.getCollectionParents(e,i).next(l=>O.forEach(l,u=>{const d=function(p,v){return new Ni(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((p,v)=>{o=o.insert(p,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((u,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,Ve.newInvalidDocument(m)))});let l=Sr();return o.forEach((u,d)=>{const m=i.get(u);m!==void 0&&Lr(m.mutation,d,Je.empty(),ae.now()),ki(t,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return O.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ft(s.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:ob(s.bundledQuery),readTime:ft(s.readTime)}}(t)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.overlays=new ue(z.comparator),this.qr=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=un();return O.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const s=un(),i=t.length+1,o=new z(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return O.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ue((d,m)=>d-m);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=un(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=un(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=s)););return O.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ow(t,r));let i=this.qr.get(t);i===void 0&&(i=J(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(){this.sessionToken=Ne.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.Qr=new Ee(Ie.$r),this.Ur=new Ee(Ie.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Ie(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new Ie(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new z(new ce([])),r=new Ie(t,e),s=new Ie(t,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new z(new ce([])),r=new Ie(t,e),s=new Ie(t,e+1);let i=J();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ie(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return z.comparator(e.key,t.key)||X(e.Yr,t.Yr)}static Kr(e,t){return X(e.Yr,t.Yr)||z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ee(Ie.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jw(i,t,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new Ie(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,t){return O.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Ba:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ie(t,0),s=new Ie(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ee(X);return t.forEach(s=>{const i=new Ie(s,0),o=new Ie(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const o=new Ie(new z(i),0);let l=new Ee(X);return this.Zr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Yr)),!0)},o),O.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){te(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(t.mutations,s=>{const i=new Ie(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Ie(t,0),s=this.Zr.firstAfterOrEqual(r);return O.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.ri=e,this.docs=function(){return new ue(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():Ve.newInvalidDocument(t))}getEntries(e,t){let r=St();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ve.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=St();const o=t.path,l=new z(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Qv(Kv(m),r)<=0||(s.has(m.key)||ki(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,t,r,s){W(9500)}ii(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new xb(this)}getSize(e){return O.resolve(this.size)}}class xb extends mb{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.persistence=e,this.si=new An(t=>qa(t),Wa),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.oi=0,this._i=new Ja,this.targetCount=0,this.ai=Qn.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),O.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Qn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Pr(t),O.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ai(0),this.li=!1,this.li=!0,this.hi=new vb,this.referenceDelegate=e(this),this.Pi=new Eb(this),this.indexManager=new ab,this.remoteDocumentCache=function(s){return new bb(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new ib(t),this.Ii=new yb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _b,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new wb(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){F("MemoryPersistence","Starting transaction:",e);const s=new Tb(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class Tb extends Xv{constructor(e){super(),this.currentSequenceNumber=e}}class Za{constructor(e){this.persistence=e,this.Ri=new Ja,this.Vi=null}static mi(e){return new Za(e)}get fi(){if(this.Vi)return this.Vi;throw W(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),O.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const s=z.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,G.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return O.or([()=>O.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class pi{constructor(e,t){this.persistence=e,this.pi=new An(r=>ew(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=fb(this,t)}static mi(e,t){return new pi(e,t)}Ei(){}di(e){return O.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return O.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?O.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,t).next(l=>{l||(r++,i.removeEntry(o,G.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),O.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),O.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=qs(e.data.value)),t}br(e,t,r){return O.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=J(),s=J();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new el(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Xg()?8:Jv(je())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Ib;return this.Ss(e,t,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,t,o,l.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(jn()<=Y.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",On(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(jn()<=Y.DEBUG&&F("QueryEngine","Query:",On(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(jn()<=Y.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",On(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dt(t))):O.resolve())}ys(e,t){if(Eu(t))return O.resolve(null);let r=dt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Jo(t,null,"F"),r=dt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=J(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Ds(t,l);return this.Cs(t,d,o,u.readTime)?this.ys(e,Jo(t,null,"F")):this.vs(e,d,t,u)}))})))}ws(e,t,r,s){return Eu(t)||s.isEqual(G.min())?O.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(t,i);return this.Cs(t,o,r,s)?O.resolve(null):(jn()<=Y.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),On(t)),this.vs(e,o,t,Gv(s,zr)).next(l=>l))})}Ds(e,t){let r=new Ee(Qd(e));return t.forEach((s,i)=>{ki(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return jn()<=Y.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",On(t)),this.ps.getDocumentsMatchingQuery(e,t,Yt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="LocalStore",Ab=3e8;class Cb{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new ue(X),this.xs=new An(i=>qa(i),Wa),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function Sb(n,e,t,r){return new Cb(n,e,t,r)}async function wf(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=J();for(const d of s){o.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){l.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Ls:d,removedBatchIds:o,addedBatchIds:l}))})})}function Nb(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,d,m){const p=d.batch,v=p.keys();let _=O.resolve();return v.forEach(A=>{_=_.next(()=>m.getEntry(u,A)).next(P=>{const x=d.docVersions.get(A);te(x!==null,48541),P.version.compareTo(x)<0&&(p.applyToRemoteDocument(P,d),P.isValidDocument()&&(P.setReadTime(d.commitVersion),m.addEntry(P)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=J();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function bf(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function Pb(n,e){const t=K(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach((m,p)=>{const v=s.get(p);if(!v)return;l.push(t.Pi.removeMatchingKeys(i,m.removedDocuments,p).next(()=>t.Pi.addMatchingKeys(i,m.addedDocuments,p)));let _=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(Ne.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):m.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(m.resumeToken,r)),s=s.insert(p,_),function(P,x,D){return P.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=Ab?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(v,_,m)&&l.push(t.Pi.updateTargetData(i,_))});let u=St(),d=J();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(kb(i,o,e.documentUpdates).next(m=>{u=m.ks,d=m.qs})),!r.isEqual(G.min())){const m=t.Pi.getLastRemoteSnapshotVersion(i).next(p=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(m)}return O.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.Ms=s,i))}function kb(n,e,t){let r=J(),s=J();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=St();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(G.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):F(tl,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{ks:o,qs:s}})}function Db(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ba),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Vb(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):t.Pi.allocateTargetId(r).next(o=>(s=new Ht(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function ra(n,e,t){const r=K(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ir(o))throw o;F(tl,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Ou(n,e,t){const r=K(n);let s=G.min(),i=J();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,m){const p=K(u),v=p.xs.get(m);return v!==void 0?O.resolve(p.Ms.get(v)):p.Pi.getTargetData(d,m)}(r,o,dt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,t?s:G.min(),t?i:J())).next(l=>(jb(r,ww(e),l),{documents:l,Qs:i})))}function jb(n,e,t){let r=n.Os.get(e)||G.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class Lu{constructor(){this.activeTargetIds=Rw()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ob{constructor(){this.Mo=new Lu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Lu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="ConnectivityMonitor";class Uu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){F(Mu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){F(Mu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs=null;function sa(){return Vs===null?Vs=function(){return 268435456+Math.round(2147483648*Math.random())}():Vs++,"0x"+Vs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="RestConnection",Mb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ub{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===li?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const o=sa(),l=this.zo(e,t.toUriEncodedString());F(No,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(l),m=Tn(d);return this.Jo(e,l,u,r,m).then(p=>(F(No,`Received RPC '${e}' ${o}: `,p),p),p=>{throw qn(No,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,t,r,s,i,o){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=Mb[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="WebChannelConnection";class $b extends Ub{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const o=sa();return new Promise((l,u)=>{const d=new Td;d.setWithCredentials(!0),d.listenOnce(Id.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Hs.NO_ERROR:const p=d.getResponseJson();F(ke,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Hs.TIMEOUT:F(ke,`RPC '${e}' ${o} timed out`),u(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case Hs.HTTP_ERROR:const v=d.getStatus();if(F(ke,`RPC '${e}' ${o} failed with status:`,v,"response text:",d.getResponseText()),v>0){let _=d.getResponseJson();Array.isArray(_)&&(_=_[0]);const A=_==null?void 0:_.error;if(A&&A.status&&A.message){const P=function(D){const C=D.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(C)>=0?C:L.UNKNOWN}(A.status);u(new B(P,A.message))}else u(new B(L.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new B(L.UNAVAILABLE,"Connection failed."));break;default:W(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{F(ke,`RPC '${e}' ${o} completed.`)}});const m=JSON.stringify(s);F(ke,`RPC '${e}' ${o} sending request:`,s),d.send(t,"POST",m,r,15)})}T_(e,t,r){const s=sa(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Cd(),l=Ad(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");F(ke,`Creating RPC '${e}' stream ${s}: ${m}`,u);const p=o.createWebChannel(m,u);this.I_(p);let v=!1,_=!1;const A=new Fb({Yo:x=>{_?F(ke,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(v||(F(ke,`Opening RPC '${e}' stream ${s} transport.`),p.open(),v=!0),F(ke,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},Zo:()=>p.close()}),P=(x,D,C)=>{x.listen(D,S=>{try{C(S)}catch(j){setTimeout(()=>{throw j},0)}})};return P(p,Cr.EventType.OPEN,()=>{_||(F(ke,`RPC '${e}' stream ${s} transport opened.`),A.o_())}),P(p,Cr.EventType.CLOSE,()=>{_||(_=!0,F(ke,`RPC '${e}' stream ${s} transport closed`),A.a_(),this.E_(p))}),P(p,Cr.EventType.ERROR,x=>{_||(_=!0,qn(ke,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),A.a_(new B(L.UNAVAILABLE,"The operation could not be completed")))}),P(p,Cr.EventType.MESSAGE,x=>{var D;if(!_){const C=x.data[0];te(!!C,16349);const S=C,j=(S==null?void 0:S.error)||((D=S[0])==null?void 0:D.error);if(j){F(ke,`RPC '${e}' stream ${s} received error:`,j);const U=j.status;let $=function(w){const I=ve[w];if(I!==void 0)return lf(I)}(U),b=j.message;$===void 0&&($=L.INTERNAL,b="Unknown error status: "+U+" with message "+j.message),_=!0,A.a_(new B($,b)),p.close()}else F(ke,`RPC '${e}' stream ${s} received:`,C),A.u_(C)}}),P(l,Rd.STAT_EVENT,x=>{x.stat===Wo.PROXY?F(ke,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Wo.NOPROXY&&F(ke,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.__()},0),A}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Po(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(n){return new qw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="PersistentStream";class Ef{constructor(e,t,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new xf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(Ct(t.toString()),Ct("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new B(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return F(Fu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(F(Fu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bb extends Ef{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Kw(this.serializer,e),r=function(i){if(!("targetChange"in i))return G.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?ft(o.readTime):G.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=na(this.serializer),t.addTarget=function(i,o){let l;const u=o.target;if(l=Xo(u)?{documents:Xw(i,u)}:{query:Jw(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=hf(i,o.resumeToken);const d=Zo(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(G.min())>0){l.readTime=mi(i,o.snapshotVersion.toTimestamp());const d=Zo(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=eb(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=na(this.serializer),t.removeTarget=e,this.q_(t)}}class zb extends Ef{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Yw(e.writeResults,e.commitTime),r=ft(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=na(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Qw(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{}class qb extends Hb{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,ea(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(L.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,ea(t,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Wb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ct(t),this.aa=!1):F("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="RemoteStore";class Gb{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Sn(this)&&(F(bn,"Restarting streams for network reachability change."),await async function(u){const d=K(u);d.Ea.add(4),await cs(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Li(d)}(this))})}),this.Ra=new Wb(r,s)}}async function Li(n){if(Sn(n))for(const e of n.da)await e(!0)}async function cs(n){for(const e of n.da)await e(!1)}function Tf(n,e){const t=K(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),il(t)?sl(t):or(t).O_()&&rl(t,e))}function nl(n,e){const t=K(n),r=or(t);t.Ia.delete(e),r.O_()&&If(t,e),t.Ia.size===0&&(r.O_()?r.L_():Sn(t)&&t.Ra.set("Unknown"))}function rl(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}or(n).Y_(e)}function If(n,e){n.Va.Ue(e),or(n).Z_(e)}function sl(n){n.Va=new $w({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),or(n).start(),n.Ra.ua()}function il(n){return Sn(n)&&!or(n).x_()&&n.Ia.size>0}function Sn(n){return K(n).Ea.size===0}function Rf(n){n.Va=void 0}async function Kb(n){n.Ra.set("Online")}async function Qb(n){n.Ia.forEach((e,t)=>{rl(n,e)})}async function Yb(n,e){Rf(n),il(n)?(n.Ra.ha(e),sl(n)):n.Ra.set("Unknown")}async function Xb(n,e,t){if(n.Ra.set("Online"),e instanceof uf&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(n,e)}catch(r){F(bn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gi(n,r)}else if(e instanceof Ks?n.Va.Ze(e):e instanceof cf?n.Va.st(e):n.Va.tt(e),!t.isEqual(G.min()))try{const r=await bf(n.localStore);t.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ia.get(d);m&&i.Ia.set(d,m.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const m=i.Ia.get(u);if(!m)return;i.Ia.set(u,m.withResumeToken(Ne.EMPTY_BYTE_STRING,m.snapshotVersion)),If(i,u);const p=new Ht(m.target,u,d,m.sequenceNumber);rl(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){F(bn,"Failed to raise snapshot:",r),await gi(n,r)}}async function gi(n,e,t){if(!ir(e))throw e;n.Ea.add(1),await cs(n),n.Ra.set("Offline"),t||(t=()=>bf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F(bn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Li(n)})}function Af(n,e){return e().catch(t=>gi(n,t,e))}async function Mi(n){const e=K(n),t=en(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ba;for(;Jb(e);)try{const s=await Db(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,Zb(e,s)}catch(s){await gi(e,s)}Cf(e)&&Sf(e)}function Jb(n){return Sn(n)&&n.Ta.length<10}function Zb(n,e){n.Ta.push(e);const t=en(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Cf(n){return Sn(n)&&!en(n).x_()&&n.Ta.length>0}function Sf(n){en(n).start()}async function ex(n){en(n).ra()}async function tx(n){const e=en(n);for(const t of n.Ta)e.ea(t.mutations)}async function nx(n,e,t){const r=n.Ta.shift(),s=Qa.from(r,e,t);await Af(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Mi(n)}async function rx(n,e){e&&en(n).X_&&await async function(r,s){if(function(o){return Mw(o)&&o!==L.ABORTED}(s.code)){const i=r.Ta.shift();en(r).B_(),await Af(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Mi(r)}}(n,e),Cf(n)&&Sf(n)}async function $u(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),F(bn,"RemoteStore received new credentials");const r=Sn(t);t.Ea.add(3),await cs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Li(t)}async function sx(n,e){const t=K(n);e?(t.Ea.delete(2),await Li(t)):e||(t.Ea.add(2),await cs(t),t.Ra.set("Unknown"))}function or(n){return n.ma||(n.ma=function(t,r,s){const i=K(t);return i.sa(),new Bb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:Kb.bind(null,n),t_:Qb.bind(null,n),r_:Yb.bind(null,n),H_:Xb.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),il(n)?sl(n):n.Ra.set("Unknown")):(await n.ma.stop(),Rf(n))})),n.ma}function en(n){return n.fa||(n.fa=function(t,r,s){const i=K(t);return i.sa(),new zb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:ex.bind(null,n),r_:rx.bind(null,n),ta:tx.bind(null,n),na:nx.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Mi(n)):(await n.fa.stop(),n.Ta.length>0&&(F(bn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,l=new ol(e,t,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function al(n,e){if(Ct("AsyncQueue",`${e}: ${n}`),ir(n))return new B(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{static emptySet(e){return new zn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||z.comparator(t.key,r.key):(t,r)=>z.comparator(t.key,r.key),this.keyedMap=Sr(),this.sortedSet=new ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new zn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(){this.ga=new ue(z.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):W(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Yn{constructor(e,t,r,s,i,o,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new Yn(e,t,zn.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class ox{constructor(){this.queries=zu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=K(t),i=s.queries;s.queries=zu(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new B(L.ABORTED,"Firestore shutting down"))}}function zu(){return new An(n=>Kd(n),Pi)}async function ax(n,e){const t=K(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new ix,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=al(o,`Initialization of query '${On(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&ll(t)}async function lx(n,e){const t=K(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function cx(n,e){const t=K(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&ll(t)}function ux(n,e,t){const r=K(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function ll(n){n.Ca.forEach(e=>{e.next()})}var ia,Hu;(Hu=ia||(ia={})).Ma="default",Hu.Cache="cache";class hx{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Yn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Yn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ia.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){this.key=e}}class Pf{constructor(e){this.key=e}}class dx{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=J(),this.mutatedKeys=J(),this.eu=Qd(e),this.tu=new zn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Bu,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,p)=>{const v=s.get(m),_=ki(this.query,p)?p:null,A=!!v&&this.mutatedKeys.has(v.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let x=!1;v&&_?v.data.isEqual(_.data)?A!==P&&(r.track({type:3,doc:_}),x=!0):this.su(v,_)||(r.track({type:2,doc:_}),x=!0,(u&&this.eu(_,u)>0||d&&this.eu(_,d)<0)&&(l=!0)):!v&&_?(r.track({type:0,doc:_}),x=!0):v&&!_&&(r.track({type:1,doc:v}),x=!0,(u||d)&&(l=!0)),x&&(_?(o=o.add(_),i=P?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((m,p)=>function(_,A){const P=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{Rt:x})}};return P(_)-P(A)}(m.type,p.type)||this.eu(m.doc,p.doc)),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,o.length!==0||d?{snapshot:new Yn(this.query,e.tu,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Bu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=J(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new Pf(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new Nf(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=J();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Yn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const cl="SyncEngine";class fx{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class mx{constructor(e){this.key=e,this.hu=!1}}class px{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new An(l=>Kd(l),Pi),this.Iu=new Map,this.Eu=new Set,this.du=new ue(z.comparator),this.Au=new Map,this.Ru=new Ja,this.Vu={},this.mu=new Map,this.fu=Qn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function gx(n,e,t=!0){const r=Lf(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await kf(r,e,t,!0),s}async function yx(n,e){const t=Lf(n);await kf(t,e,!0,!1)}async function kf(n,e,t,r){const s=await Vb(n.localStore,dt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await _x(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Tf(n.remoteStore,s),l}async function _x(n,e,t,r,s){n.pu=(p,v,_)=>async function(P,x,D,C){let S=x.view.ru(D);S.Cs&&(S=await Ou(P.localStore,x.query,!1).then(({documents:b})=>x.view.ru(b,S)));const j=C&&C.targetChanges.get(x.targetId),U=C&&C.targetMismatches.get(x.targetId)!=null,$=x.view.applyChanges(S,P.isPrimaryClient,j,U);return Wu(P,x.targetId,$.au),$.snapshot}(n,p,v,_);const i=await Ou(n.localStore,e,!0),o=new dx(e,i.Qs),l=o.ru(i.documents),u=ls.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=o.applyChanges(l,n.isPrimaryClient,u);Wu(n,t,d.au);const m=new fx(e,t,o);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function vx(n,e,t){const r=K(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Pi(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ra(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&nl(r.remoteStore,s.targetId),oa(r,s.targetId)}).catch(sr)):(oa(r,s.targetId),await ra(r.localStore,s.targetId,!0))}async function wx(n,e){const t=K(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),nl(t.remoteStore,r.targetId))}async function bx(n,e,t){const r=Cx(n);try{const s=await function(o,l){const u=K(o),d=ae.now(),m=l.reduce((_,A)=>_.add(A.key),J());let p,v;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let A=St(),P=J();return u.Ns.getEntries(_,m).next(x=>{A=x,A.forEach((D,C)=>{C.isValidDocument()||(P=P.add(D))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,A)).next(x=>{p=x;const D=[];for(const C of l){const S=Dw(C,p.get(C.key).overlayedDocument);S!=null&&D.push(new Cn(C.key,S,$d(S.value.mapValue),Tt.exists(!0)))}return u.mutationQueue.addMutationBatch(_,d,D,l)}).next(x=>{v=x;const D=x.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(_,x.batchId,D)})}).then(()=>({batchId:v.batchId,changes:Xd(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let d=o.Vu[o.currentUser.toKey()];d||(d=new ue(X)),d=d.insert(l,u),o.Vu[o.currentUser.toKey()]=d}(r,s.batchId,t),await us(r,s.changes),await Mi(r.remoteStore)}catch(s){const i=al(s,"Failed to persist write");t.reject(i)}}async function Df(n,e){const t=K(n);try{const r=await Pb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Au.get(i);o&&(te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?te(o.hu,14607):s.removedDocuments.size>0&&(te(o.hu,42227),o.hu=!1))}),await us(t,r,e)}catch(r){await sr(r)}}function qu(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=K(o);u.onlineState=l;let d=!1;u.queries.forEach((m,p)=>{for(const v of p.Sa)v.va(l)&&(d=!0)}),d&&ll(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xx(n,e,t){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new ue(z.comparator);o=o.insert(i,Ve.newNoDocument(i,G.min()));const l=J().add(i),u=new ji(G.min(),new Map,new ue(X),o,l);await Df(r,u),r.du=r.du.remove(i),r.Au.delete(e),ul(r)}else await ra(r.localStore,e,!1).then(()=>oa(r,e,t)).catch(sr)}async function Ex(n,e){const t=K(n),r=e.batch.batchId;try{const s=await Nb(t.localStore,e);jf(t,r,null),Vf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await us(t,s)}catch(s){await sr(s)}}async function Tx(n,e,t){const r=K(n);try{const s=await function(o,l){const u=K(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,l).next(p=>(te(p!==null,37113),m=p.keys(),u.mutationQueue.removeMutationBatch(d,p))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(r.localStore,e);jf(r,e,t),Vf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await us(r,s)}catch(s){await sr(s)}}function Vf(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function jf(n,e,t){const r=K(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function oa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||Of(n,r)})}function Of(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(nl(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),ul(n))}function Wu(n,e,t){for(const r of t)r instanceof Nf?(n.Ru.addReference(r.key,e),Ix(n,r)):r instanceof Pf?(F(cl,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Of(n,r.key)):W(19791,{wu:r})}function Ix(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(F(cl,"New document in limbo: "+t),n.Eu.add(r),ul(n))}function ul(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new z(ce.fromString(e)),r=n.fu.next();n.Au.set(r,new mx(t)),n.du=n.du.insert(t,r),Tf(n.remoteStore,new Ht(dt(Ga(t.path)),r,"TargetPurposeLimboResolution",Ai.ce))}}async function us(n,e,t){const r=K(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,t).then(d=>{var m;if((d||t)&&r.isPrimaryClient){const p=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(d){s.push(d);const p=el.As(u.targetId,d);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,d){const m=K(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(d,v=>O.forEach(v.Es,_=>m.persistence.referenceDelegate.addReference(p,v.targetId,_)).next(()=>O.forEach(v.ds,_=>m.persistence.referenceDelegate.removeReference(p,v.targetId,_)))))}catch(p){if(!ir(p))throw p;F(tl,"Failed to update sequence numbers: "+p)}for(const p of d){const v=p.targetId;if(!p.fromCache){const _=m.Ms.get(v),A=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(A);m.Ms=m.Ms.insert(v,P)}}}(r.localStore,i))}async function Rx(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){F(cl,"User change. New user:",e.toKey());const r=await wf(t.localStore,e);t.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new B(L.CANCELLED,o))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await us(t,r.Ls)}}function Ax(n,e){const t=K(n),r=t.Au.get(e);if(r&&r.hu)return J().add(r.key);{let s=J();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const l=t.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function Lf(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Df.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ax.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xx.bind(null,e),e.Pu.H_=cx.bind(null,e.eventManager),e.Pu.yu=ux.bind(null,e.eventManager),e}function Cx(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ex.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Tx.bind(null,e),e}class yi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Oi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Sb(this.persistence,new Rb,e.initialUser,this.serializer)}Cu(e){return new vf(Za.mi,this.serializer)}Du(e){return new Ob}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yi.provider={build:()=>new yi};class Sx extends yi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){te(this.persistence.referenceDelegate instanceof pi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new hb(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Be.withCacheSize(this.cacheSizeBytes):Be.DEFAULT;return new vf(r=>pi.mi(r,t),this.serializer)}}class aa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rx.bind(null,this.syncEngine),await sx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ox}()}createDatastore(e){const t=Oi(e.databaseInfo.databaseId),r=function(i){return new $b(i)}(e.databaseInfo);return function(i,o,l,u){return new qb(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,l){return new Gb(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>qu(this.syncEngine,t,0),function(){return Uu.v()?new Uu:new Lb}())}createSyncEngine(e,t){return function(s,i,o,l,u,d,m){const p=new px(s,i,o,l,u,d);return m&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=K(s);F(bn,"RemoteStore shutting down."),i.Ea.add(5),await cs(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}aa.provider={build:()=>new aa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ct("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="FirestoreClient";class Px{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=De.UNAUTHENTICATED,this.clientId=Fa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{F(tn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(F(tn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=al(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ko(n,e){n.asyncQueue.verifyOperationInProgress(),F(tn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await wf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Gu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await kx(n);F(tn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>$u(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>$u(e.remoteStore,s)),n._onlineComponents=e}async function kx(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F(tn,"Using user provided OfflineComponentProvider");try{await ko(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;qn("Error using user provided cache. Falling back to memory cache: "+t),await ko(n,new yi)}}else F(tn,"Using default OfflineComponentProvider"),await ko(n,new Sx(void 0));return n._offlineComponents}async function Mf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F(tn,"Using user provided OnlineComponentProvider"),await Gu(n,n._uninitializedComponentsProvider._online)):(F(tn,"Using default OnlineComponentProvider"),await Gu(n,new aa))),n._onlineComponents}function Dx(n){return Mf(n).then(e=>e.syncEngine)}async function Ku(n){const e=await Mf(n),t=e.eventManager;return t.onListen=gx.bind(null,e.syncEngine),t.onUnlisten=vx.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=yx.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=wx.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="firestore.googleapis.com",Yu=!0;class Xu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ff,this.ssl=Yu}else this.host=e.host,this.ssl=e.ssl??Yu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_f;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cb)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Wv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uf(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hl{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jv;switch(r.type){case"firstParty":return new Uv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Qu.get(t);r&&(F("ComponentProvider","Removing Datastore"),Qu.delete(t),r.terminate())}(this),Promise.resolve()}}function Vx(n,e,t,r={}){var d;n=Bn(n,hl);const s=Tn(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(kh(`https://${l}`),Dh("Firestore",!0)),i.host!==Ff&&i.host!==l&&qn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!gn(u,o)&&(n._setSettings(u),r.mockUserToken)){let m,p;if(typeof r.mockUserToken=="string")m=r.mockUserToken,p=De.MOCK_USER;else{m=Bg(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new De(v)}n._authCredentials=new Ov(new Nd(m,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ui(this.firestore,e,this._query)}}class Re{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}toJSON(){return{type:Re._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(os(t,Re._jsonSchema))return new Re(e,r||null,new z(ce.fromString(t.referencePath)))}}Re._jsonSchemaVersion="firestore/documentReference/1.0",Re._jsonSchema={type:we("string",Re._jsonSchemaVersion),referencePath:we("string")};class Qr extends Ui{constructor(e,t,r){super(e,t,Ga(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new z(e))}withConverter(e){return new Qr(this.firestore,e,this._path)}}function Xn(n,e,...t){if(n=Se(n),arguments.length===1&&(e=Fa.newId()),qv("doc","path",e),n instanceof hl){const r=ce.fromString(e,...t);return uu(r),new Re(n,null,new z(r))}{if(!(n instanceof Re||n instanceof Qr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ce.fromString(e,...t));return uu(r),new Re(n.firestore,n instanceof Qr?n.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="AsyncQueue";class Zu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new xf(this,"async_queue_retry"),this._c=()=>{const r=Po();r&&F(Ju,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Po();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Po();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new dn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ir(e))throw e;F(Ju,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ct("INTERNAL UNHANDLED ERROR: ",eh(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=ol.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&W(47125,{Pc:eh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function eh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class _i extends hl{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Zu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zu(e),this._firestoreClient=void 0,await e}}}function jx(n,e){const t=typeof n=="object"?n:Lh(),r=typeof n=="string"?n:li,s=Ca(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Fg("firestore");i&&Vx(s,...i)}return s}function $f(n){if(n._terminated)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ox(n),n._firestoreClient}function Ox(n){var r,s,i;const e=n._freezeSettings(),t=function(l,u,d,m){return new rw(l,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Uf(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Px(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ke(Ne.fromBase64String(e))}catch(t){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ke(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ke._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(os(e,Ke._jsonSchema))return Ke.fromBase64String(e.bytes)}}Ke._jsonSchemaVersion="firestore/bytes/1.0",Ke._jsonSchema={type:we("string",Ke._jsonSchemaVersion),bytes:we("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mt._jsonSchemaVersion}}static fromJSON(e){if(os(e,mt._jsonSchema))return new mt(e.latitude,e.longitude)}}mt._jsonSchemaVersion="firestore/geoPoint/1.0",mt._jsonSchema={type:we("string",mt._jsonSchemaVersion),latitude:we("number"),longitude:we("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:pt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(os(e,pt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new pt(e.vectorValues);throw new B(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pt._jsonSchemaVersion="firestore/vectorValue/1.0",pt._jsonSchema={type:we("string",pt._jsonSchemaVersion),vectorValues:we("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=/^__.*__$/;class Mx{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Cn(e,this.data,this.fieldMask,t,this.fieldTransforms):new as(e,this.data,t,this.fieldTransforms)}}function zf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ac:n})}}class fl{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new fl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return vi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(zf(this.Ac)&&Lx.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Ux{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Oi(e)}Cc(e,t,r,s=!1){return new fl({Ac:e,methodName:t,Dc:r,path:Ce.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fx(n){const e=n._freezeSettings(),t=Oi(n._databaseId);return new Ux(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $x(n,e,t,r,s,i={}){const o=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Gf("Data must be an object, but it was:",o,r);const l=qf(r,o);let u,d;if(i.merge)u=new Je(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const p of i.mergeFields){const v=Bx(e,p,t);if(!o.contains(v))throw new B(L.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Hx(m,v)||m.push(v)}u=new Je(m),d=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,d=o.fieldTransforms;return new Mx(new Ge(l),u,d)}function Hf(n,e){if(Wf(n=Se(n)))return Gf("Unsupported field value:",e,n),qf(n,e);if(n instanceof Bf)return function(r,s){if(!zf(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Hf(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Aw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ae.fromDate(r);return{timestampValue:mi(s.serializer,i)}}if(r instanceof ae){const i=new ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mi(s.serializer,i)}}if(r instanceof mt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ke)return{bytesValue:hf(s.serializer,r._byteString)};if(r instanceof Re){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof pt)return function(o,l){return{mapValue:{fields:{[Ud]:{stringValue:Fd},[ci]:{arrayValue:{values:o.toArray().map(d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return Ka(l.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${$a(r)}`)}(n,e)}function qf(n,e){const t={};return Dd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rn(n,(r,s)=>{const i=Hf(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Wf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof mt||n instanceof Ke||n instanceof Re||n instanceof Bf||n instanceof pt)}function Gf(n,e,t){if(!Wf(t)||!Pd(t)){const r=$a(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Bx(n,e,t){if((e=Se(e))instanceof dl)return e._internalPath;if(typeof e=="string")return Kf(n,e);throw vi("Field path arguments must be of type string or ",n,!1,void 0,t)}const zx=new RegExp("[~\\*/\\[\\]]");function Kf(n,e,t){if(e.search(zx)>=0)throw vi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new dl(...e.split("."))._internalPath}catch{throw vi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function vi(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new B(L.INVALID_ARGUMENT,l+n+u)}function Hx(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qx extends Qf{data(){return super.data()}}function Yf(n,e){return typeof e=="string"?Kf(n,e):e instanceof dl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gx{convertValue(e,t="none"){switch(Zt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Jt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Rn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[ci].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ge(o.doubleValue));return new pt(t)}convertGeoPoint(e){return new mt(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Si(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Hr(e));default:return null}}convertTimestamp(e){const t=Xt(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ce.fromString(e);te(yf(r),9688,{name:e});const s=new qr(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(t)||Ct(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Pr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fn extends Qf{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Yf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=fn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}fn._jsonSchemaVersion="firestore/documentSnapshot/1.0",fn._jsonSchema={type:we("string",fn._jsonSchemaVersion),bundleSource:we("string","DocumentSnapshot"),bundleName:we("string"),bundle:we("string")};class Qs extends fn{data(e={}){return super.data(e)}}class Hn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Pr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Qs(this._firestore,this._userDataWriter,r.key,r,new Pr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Qs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Pr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Qs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Pr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),m=o.indexOf(l.doc.key)),{type:Qx(l.type),doc:u,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Hn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Fa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Qx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:n})}}Hn._jsonSchemaVersion="firestore/querySnapshot/1.0",Hn._jsonSchema={type:we("string",Hn._jsonSchemaVersion),bundleSource:we("string","QuerySnapshot"),bundleName:we("string"),bundle:we("string")};class Xf extends Gx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ke(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}}function Yr(n,e,t){n=Bn(n,Re);const r=Bn(n.firestore,_i),s=Kx(n.converter,e,t);return Xx(r,[$x(Fx(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Tt.none())])}function Yx(n,...e){var u,d,m;n=Se(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||th(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(th(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(d=p.error)==null?void 0:d.bind(p),e[r+2]=(m=p.complete)==null?void 0:m.bind(p)}let i,o,l;if(n instanceof Re)o=Bn(n.firestore,_i),l=Ga(n._key.path),i={next:p=>{e[r]&&e[r](Jx(o,n,p))},error:e[r+1],complete:e[r+2]};else{const p=Bn(n,Ui);o=Bn(p.firestore,_i),l=p._query;const v=new Xf(o);i={next:_=>{e[r]&&e[r](new Hn(o,v,p,_))},error:e[r+1],complete:e[r+2]},Wx(n._query)}return function(v,_,A,P){const x=new Nx(P),D=new hx(_,x,A);return v.asyncQueue.enqueueAndForget(async()=>ax(await Ku(v),D)),()=>{x.Nu(),v.asyncQueue.enqueueAndForget(async()=>lx(await Ku(v),D))}}($f(o),l,s,i)}function Xx(n,e){return function(r,s){const i=new dn;return r.asyncQueue.enqueueAndForget(async()=>bx(await Dx(r),s,i)),i.promise}($f(n),e)}function Jx(n,e,t){const r=t.docs.get(e._key),s=new Xf(n);return new fn(n,s,e._key,r,new Pr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){rr=s})(In),yn(new Qt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new _i(new Lv(r.getProvider("auth-internal")),new Fv(o,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qr(d.options.projectId,m)}(o,s),o);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),ct(ou,au,e),ct(ou,au,"esm2020")})();const Zx={apiKey:"AIzaSyBeZdi-vHkNuRJ1hA_dQxuSUnOH0MiD1p4",authDomain:"graduation-project-1f851.firebaseapp.com",projectId:"graduation-project-1f851",storageBucket:"graduation-project-1f851.firebasestorage.app",messagingSenderId:"1031629784131",appId:"1:1031629784131:web:062561de1c576d08c540f6",measurementId:"G-QKZR8QKC1W"},Jf=Oh(Zx),Qe=Pv(Jf),Jn=jx(Jf),Zf=T.createContext(),eE=({children:n})=>{const[e,t]=T.useState(null),[r,s]=T.useState(!0);return T.useEffect(()=>{const i=cd(Qe,o=>{t(o),s(!1)});return()=>i()},[]),c.jsx(Zf.Provider,{value:{user:e,loading:r},future:{v7_relativeSplatPath:!0},children:n})},tE=()=>T.useContext(Zf),hs="/assets/logo-C9-rl5M9.png",nE=()=>{const n=He(),{email:e="",password:t=""}=n.state||{},[r,s]=T.useState({email:e,password:t}),[i,o]=T.useState(""),[l,u]=T.useState(!1);function d(v){const{name:_,value:A}=v.target;s(P=>({...P,[_]:A}))}async function m(v){v.preventDefault(),u(!0),o("");try{const{email:_,password:A}=r,x=(await g_(Qe,_,A)).user;await Yr(Xn(Jn,"users",x.uid),{email:x.email,lastLogin:Date.now()},{merge:!0}),window.location.href="/dashboard"}catch(_){_.code==="auth/user-not-found"?o("لا يوجد مستخدم بهذا البريد الإلكتروني."):_.code==="auth/wrong-password"?(o("كلمة المرور غير صحيحة."),s(A=>({...A,password:""}))):_.code==="auth/invalid-email"?o("البريد الإلكتروني غير صالح."):o("حدث خطأ أثناء تسجيل الدخول. حاول مرة أخرى."),setTimeout(()=>o(""),3e3),u(!1)}}async function p(){const v=new at;u(!0),o("");try{const A=(await U_(Qe,v)).user;await Yr(Xn(Jn,"users",A.uid),{name:A.displayName,email:A.email,photoURL:A.photoURL,provider:"google",lastLogin:Date.now()},{merge:!0}),setTimeout(()=>{window.location.href="/dashboard"},1500)}catch(_){console.error(_),o("تعذر تسجيل الدخول باستخدام Google. حاول مرة أخرى."),setTimeout(()=>o(""),3e3)}finally{u(!1)}}return c.jsx("div",{className:"min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 font-[Tajawal]",dir:"rtl",lang:"ar",children:c.jsxs("div",{className:"w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12",children:[c.jsx(Kt,{to:"/main",children:c.jsx("img",{src:hs,alt:"plern Logo",className:"w-20 mx-auto mb-4 cursor-pointer"})}),c.jsxs("h2",{className:"flex flex-wrap justify-center items-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800 gap-1",children:["تسجيل ",c.jsx("div",{className:"text-green-500",children:"الدخول"})]}),c.jsxs("form",{onSubmit:m,children:[c.jsxs("div",{className:"space-y-4 mb-6",children:[c.jsx("input",{name:"email",value:r.email,onChange:d,type:"email",placeholder:"البريد الإلكتروني",required:!0,className:"w-full px-4 py-3 rounded-xl border border-gray-300 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"}),c.jsx("input",{name:"password",value:r.password,onChange:d,type:"password",placeholder:"كلمة المرور",required:!0,className:`w-full px-4 py-3 rounded-xl border border-gray-300 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 ${i==="كلمة المرور غير صحيحة."?"animate-shake":""}`}),i&&c.jsx("p",{className:"text-red-500 text-sm",children:i}),c.jsx("div",{className:"text-right",children:c.jsx(Kt,{to:"/forget-password",className:"text-sm text-blue-500 hover:underline font-medium",children:"نسيت كلمة المرور؟"})})]}),c.jsxs("div",{className:"space-y-6",children:[c.jsx("button",{type:"submit",disabled:l,className:`w-full py-3 bg-green-500 text-white font-bold rounded-full transition-all duration-300 hover:bg-green-600 hover:scale-[1.02] ${l?"opacity-50 cursor-not-allowed":""}`,children:l?"جاري تسجيل الدخول...":"تسجيل الدخول"}),c.jsxs("div",{className:"relative text-center",children:[c.jsx("span",{className:"bg-white px-4 text-gray-500 z-10 relative",children:"أو"}),c.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-px bg-gray-300 -z-0"})]}),c.jsxs("button",{type:"button",onClick:p,className:"w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-full bg-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[c.jsx("img",{src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:"Google logo",className:"w-5 h-5"}),c.jsx("span",{className:"text-sm font-medium text-gray-700",children:"المتابعة باستخدام Google"})]}),c.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600 text-[16px] font-bold",children:[c.jsx("div",{className:"whitespace-nowrap",children:"ليس لديك حساب؟"}),c.jsx("a",{href:"/register",className:"relative inline-block group font-medium overflow-hidden",children:c.jsxs("div",{className:"px-3 py-1 relative",children:[c.jsx("div",{className:"relative z-10 flex items-center gap-1 text-[#22c55e] transition-colors duration-500 group-hover:text-[#1565c0]",children:"إنشاء حساب جديد"}),c.jsx("div",{className:"absolute bottom-0 right-3 h-[2px] w-0 bg-[#1565c0] transition-all duration-500 group-hover:w-[83.5%]"})]})})]})]})]})]})})};function rE(n){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}rE(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var ds=n=>typeof n=="number"&&!isNaN(n),xn=n=>typeof n=="string",Nt=n=>typeof n=="function",sE=n=>xn(n)||ds(n),la=n=>xn(n)||Nt(n)?n:null,iE=(n,e)=>n===!1||ds(n)&&n>0?n:e,ca=n=>T.isValidElement(n)||xn(n)||Nt(n)||ds(n);function oE(n,e,t=300){let{scrollHeight:r,style:s}=n;requestAnimationFrame(()=>{s.minHeight="initial",s.height=r+"px",s.transition=`all ${t}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,t)})})}function aE({enter:n,exit:e,appendPosition:t=!1,collapse:r=!0,collapseDuration:s=300}){return function({children:i,position:o,preventExitTransition:l,done:u,nodeRef:d,isIn:m,playToast:p}){let v=t?`${n}--${o}`:n,_=t?`${e}--${o}`:e,A=T.useRef(0);return T.useLayoutEffect(()=>{let P=d.current,x=v.split(" "),D=C=>{C.target===d.current&&(p(),P.removeEventListener("animationend",D),P.removeEventListener("animationcancel",D),A.current===0&&C.type!=="animationcancel"&&P.classList.remove(...x))};P.classList.add(...x),P.addEventListener("animationend",D),P.addEventListener("animationcancel",D)},[]),T.useEffect(()=>{let P=d.current,x=()=>{P.removeEventListener("animationend",x),r?oE(P,u,s):u()};m||(l?x():(A.current=1,P.className+=` ${_}`,P.addEventListener("animationend",x)))},[m]),ie.createElement(ie.Fragment,null,i)}}function nh(n,e){return{content:em(n.content,n.props),containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,reason:n.removalReason,status:e}}function em(n,e,t=!1){return T.isValidElement(n)&&!xn(n.type)?T.cloneElement(n,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:t}):Nt(n)?n({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:t}):n}function lE({closeToast:n,theme:e,ariaLabel:t="close"}){return ie.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:r=>{r.stopPropagation(),n(!0)},"aria-label":t},ie.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},ie.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function cE({delay:n,isRunning:e,closeToast:t,type:r="default",hide:s,className:i,controlledProgress:o,progress:l,rtl:u,isIn:d,theme:m}){let p=s||o&&l===0,v={animationDuration:`${n}ms`,animationPlayState:e?"running":"paused"};o&&(v.transform=`scaleX(${l})`);let _=hn("Toastify__progress-bar",o?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":u}),A=Nt(i)?i({rtl:u,type:r,defaultClassName:_}):hn(_,i),P={[o&&l>=1?"onTransitionEnd":"onAnimationEnd"]:o&&l<1?null:()=>{d&&t()}};return ie.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":p},ie.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${r}`}),ie.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:A,style:v,...P}))}var uE=1,tm=()=>`${uE++}`;function hE(n,e,t){let r=1,s=0,i=[],o=[],l=e,u=new Map,d=new Set,m=C=>(d.add(C),()=>d.delete(C)),p=()=>{o=Array.from(u.values()),d.forEach(C=>C())},v=({containerId:C,toastId:S,updateId:j})=>{let U=C?C!==n:n!==1,$=u.has(S)&&j==null;return U||$},_=(C,S)=>{u.forEach(j=>{var U;(S==null||S===j.props.toastId)&&((U=j.toggle)==null||U.call(j,C))})},A=C=>{var S,j;(j=(S=C.props)==null?void 0:S.onClose)==null||j.call(S,C.removalReason),C.isActive=!1},P=C=>{if(C==null)u.forEach(A);else{let S=u.get(C);S&&A(S)}p()},x=()=>{s-=i.length,i=[]},D=C=>{var S,j;let{toastId:U,updateId:$}=C.props,b=$==null;C.staleId&&u.delete(C.staleId),C.isActive=!0,u.set(U,C),p(),t(nh(C,b?"added":"updated")),b&&((j=(S=C.props).onOpen)==null||j.call(S))};return{id:n,props:l,observe:m,toggle:_,removeToast:P,toasts:u,clearQueue:x,buildToast:(C,S)=>{if(v(S))return;let{toastId:j,updateId:U,data:$,staleId:b,delay:y}=S,w=U==null;w&&s++;let I={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(S).filter(([N,E])=>E!=null)),toastId:j,updateId:U,data:$,isIn:!1,className:la(S.className||l.toastClassName),progressClassName:la(S.progressClassName||l.progressClassName),autoClose:S.isLoading?!1:iE(S.autoClose,l.autoClose),closeToast(N){u.get(j).removalReason=N,P(j)},deleteToast(){let N=u.get(j);if(N!=null){if(t(nh(N,"removed")),u.delete(j),s--,s<0&&(s=0),i.length>0){D(i.shift());return}p()}}};I.closeButton=l.closeButton,S.closeButton===!1||ca(S.closeButton)?I.closeButton=S.closeButton:S.closeButton===!0&&(I.closeButton=ca(l.closeButton)?l.closeButton:!0);let R={content:C,props:I,staleId:b};l.limit&&l.limit>0&&s>l.limit&&w?i.push(R):ds(y)?setTimeout(()=>{D(R)},y):D(R)},setProps(C){l=C},setToggle:(C,S)=>{let j=u.get(C);j&&(j.toggle=S)},isToastActive:C=>{var S;return(S=u.get(C))==null?void 0:S.isActive},getSnapshot:()=>o}}var Fe=new Map,Xr=[],ua=new Set,dE=n=>ua.forEach(e=>e(n)),nm=()=>Fe.size>0;function fE(){Xr.forEach(n=>sm(n.content,n.options)),Xr=[]}var mE=(n,{containerId:e})=>{var t;return(t=Fe.get(e||1))==null?void 0:t.toasts.get(n)};function rm(n,e){var t;if(e)return!!((t=Fe.get(e))!=null&&t.isToastActive(n));let r=!1;return Fe.forEach(s=>{s.isToastActive(n)&&(r=!0)}),r}function pE(n){if(!nm()){Xr=Xr.filter(e=>n!=null&&e.options.toastId!==n);return}if(n==null||sE(n))Fe.forEach(e=>{e.removeToast(n)});else if(n&&("containerId"in n||"id"in n)){let e=Fe.get(n.containerId);e?e.removeToast(n.id):Fe.forEach(t=>{t.removeToast(n.id)})}}var gE=(n={})=>{Fe.forEach(e=>{e.props.limit&&(!n.containerId||e.id===n.containerId)&&e.clearQueue()})};function sm(n,e){ca(n)&&(nm()||Xr.push({content:n,options:e}),Fe.forEach(t=>{t.buildToast(n,e)}))}function yE(n){var e;(e=Fe.get(n.containerId||1))==null||e.setToggle(n.id,n.fn)}function im(n,e){Fe.forEach(t=>{(e==null||!(e!=null&&e.containerId)||(e==null?void 0:e.containerId)===t.id)&&t.toggle(n,e==null?void 0:e.id)})}function _E(n){let e=n.containerId||1;return{subscribe(t){let r=hE(e,n,dE);Fe.set(e,r);let s=r.observe(t);return fE(),()=>{s(),Fe.delete(e)}},setProps(t){var r;(r=Fe.get(e))==null||r.setProps(t)},getSnapshot(){var t;return(t=Fe.get(e))==null?void 0:t.getSnapshot()}}}function vE(n){return ua.add(n),()=>{ua.delete(n)}}function wE(n){return n&&(xn(n.toastId)||ds(n.toastId))?n.toastId:tm()}function fs(n,e){return sm(n,e),e.toastId}function Fi(n,e){return{...e,type:e&&e.type||n,toastId:wE(e)}}function $i(n){return(e,t)=>fs(e,Fi(n,t))}function re(n,e){return fs(n,Fi("default",e))}re.loading=(n,e)=>fs(n,Fi("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function bE(n,{pending:e,error:t,success:r},s){let i;e&&(i=xn(e)?re.loading(e,s):re.loading(e.render,{...s,...e}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(d,m,p)=>{if(m==null){re.dismiss(i);return}let v={type:d,...o,...s,data:p},_=xn(m)?{render:m}:m;return i?re.update(i,{...v,..._}):re(_.render,{...v,..._}),p},u=Nt(n)?n():n;return u.then(d=>l("success",r,d)).catch(d=>l("error",t,d)),u}re.promise=bE;re.success=$i("success");re.info=$i("info");re.error=$i("error");re.warning=$i("warning");re.warn=re.warning;re.dark=(n,e)=>fs(n,Fi("default",{theme:"dark",...e}));function xE(n){pE(n)}re.dismiss=xE;re.clearWaitingQueue=gE;re.isActive=rm;re.update=(n,e={})=>{let t=mE(n,e);if(t){let{props:r,content:s}=t,i={delay:100,...r,...e,toastId:e.toastId||n,updateId:tm()};i.toastId!==n&&(i.staleId=n);let o=i.render||s;delete i.render,fs(o,i)}};re.done=n=>{re.update(n,{progress:1})};re.onChange=vE;re.play=n=>im(!0,n);re.pause=n=>im(!1,n);function EE(n){var e;let{subscribe:t,getSnapshot:r,setProps:s}=T.useRef(_E(n)).current;s(n);let i=(e=T.useSyncExternalStore(t,r,r))==null?void 0:e.slice();function o(l){if(!i)return[];let u=new Map;return n.newestOnTop&&i.reverse(),i.forEach(d=>{let{position:m}=d.props;u.has(m)||u.set(m,[]),u.get(m).push(d)}),Array.from(u,d=>l(d[0],d[1]))}return{getToastToRender:o,isToastActive:rm,count:i==null?void 0:i.length}}function TE(n){let[e,t]=T.useState(!1),[r,s]=T.useState(!1),i=T.useRef(null),o=T.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:u,closeToast:d,onClick:m,closeOnClick:p}=n;yE({id:n.toastId,containerId:n.containerId,fn:t}),T.useEffect(()=>{if(n.pauseOnFocusLoss)return v(),()=>{_()}},[n.pauseOnFocusLoss]);function v(){document.hasFocus()||D(),window.addEventListener("focus",x),window.addEventListener("blur",D)}function _(){window.removeEventListener("focus",x),window.removeEventListener("blur",D)}function A(b){if(n.draggable===!0||n.draggable===b.pointerType){C();let y=i.current;o.canCloseOnClick=!0,o.canDrag=!0,y.style.transition="none",n.draggableDirection==="x"?(o.start=b.clientX,o.removalDistance=y.offsetWidth*(n.draggablePercent/100)):(o.start=b.clientY,o.removalDistance=y.offsetHeight*(n.draggablePercent===80?n.draggablePercent*1.5:n.draggablePercent)/100)}}function P(b){let{top:y,bottom:w,left:I,right:R}=i.current.getBoundingClientRect();b.nativeEvent.type!=="touchend"&&n.pauseOnHover&&b.clientX>=I&&b.clientX<=R&&b.clientY>=y&&b.clientY<=w?D():x()}function x(){t(!0)}function D(){t(!1)}function C(){o.didMove=!1,document.addEventListener("pointermove",j),document.addEventListener("pointerup",U)}function S(){document.removeEventListener("pointermove",j),document.removeEventListener("pointerup",U)}function j(b){let y=i.current;if(o.canDrag&&y){o.didMove=!0,e&&D(),n.draggableDirection==="x"?o.delta=b.clientX-o.start:o.delta=b.clientY-o.start,o.start!==b.clientX&&(o.canCloseOnClick=!1);let w=n.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`;y.style.transform=`translate3d(${w},0)`,y.style.opacity=`${1-Math.abs(o.delta/o.removalDistance)}`}}function U(){S();let b=i.current;if(o.canDrag&&o.didMove&&b){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance){s(!0),n.closeToast(!0),n.collapseAll();return}b.style.transition="transform 0.2s, opacity 0.2s",b.style.removeProperty("transform"),b.style.removeProperty("opacity")}}let $={onPointerDown:A,onPointerUp:P};return l&&u&&($.onMouseEnter=D,n.stacked||($.onMouseLeave=x)),p&&($.onClick=b=>{m&&m(b),o.canCloseOnClick&&d(!0)}),{playToast:x,pauseToast:D,isRunning:e,preventExitTransition:r,toastRef:i,eventHandlers:$}}var IE=typeof window<"u"?T.useLayoutEffect:T.useEffect,Bi=({theme:n,type:e,isLoading:t,...r})=>ie.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...r});function RE(n){return ie.createElement(Bi,{...n},ie.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function AE(n){return ie.createElement(Bi,{...n},ie.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function CE(n){return ie.createElement(Bi,{...n},ie.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function SE(n){return ie.createElement(Bi,{...n},ie.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function NE(){return ie.createElement("div",{className:"Toastify__spinner"})}var ha={info:AE,warning:RE,success:CE,error:SE,spinner:NE},PE=n=>n in ha;function kE({theme:n,type:e,isLoading:t,icon:r}){let s=null,i={theme:n,type:e};return r===!1||(Nt(r)?s=r({...i,isLoading:t}):T.isValidElement(r)?s=T.cloneElement(r,i):t?s=ha.spinner():PE(e)&&(s=ha[e](i))),s}var DE=n=>{let{isRunning:e,preventExitTransition:t,toastRef:r,eventHandlers:s,playToast:i}=TE(n),{closeButton:o,children:l,autoClose:u,onClick:d,type:m,hideProgressBar:p,closeToast:v,transition:_,position:A,className:P,style:x,progressClassName:D,updateId:C,role:S,progress:j,rtl:U,toastId:$,deleteToast:b,isIn:y,isLoading:w,closeOnClick:I,theme:R,ariaLabel:N}=n,E=hn("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${m}`,{"Toastify__toast--rtl":U},{"Toastify__toast--close-on-click":I}),ye=Nt(P)?P({rtl:U,position:A,type:m,defaultClassName:E}):hn(E,P),H=kE(n),ne=!!j||!u,ee={closeToast:v,type:m,theme:R},pe=null;return o===!1||(Nt(o)?pe=o(ee):T.isValidElement(o)?pe=T.cloneElement(o,ee):pe=lE(ee)),ie.createElement(_,{isIn:y,done:b,position:A,preventExitTransition:t,nodeRef:r,playToast:i},ie.createElement("div",{id:$,tabIndex:0,onClick:d,"data-in":y,className:ye,...s,style:x,ref:r,...y&&{role:S,"aria-label":N}},H!=null&&ie.createElement("div",{className:hn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!w})},H),em(l,n,!e),pe,!n.customProgressBar&&ie.createElement(cE,{...C&&!ne?{key:`p-${C}`}:{},rtl:U,theme:R,delay:u,isRunning:e,isIn:y,closeToast:v,hide:p,type:m,className:D,controlledProgress:ne,progress:j||0})))},VE=(n,e=!1)=>({enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:e}),jE=aE(VE("bounce",!0)),OE={position:"top-right",transition:jE,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:n=>n.altKey&&n.code==="KeyT"};function LE(n){let e={...OE,...n},t=n.stacked,[r,s]=T.useState(!0),i=T.useRef(null),{getToastToRender:o,isToastActive:l,count:u}=EE(e),{className:d,style:m,rtl:p,containerId:v,hotKeys:_}=e;function A(x){let D=hn("Toastify__toast-container",`Toastify__toast-container--${x}`,{"Toastify__toast-container--rtl":p});return Nt(d)?d({position:x,rtl:p,defaultClassName:D}):hn(D,la(d))}function P(){t&&(s(!0),re.play())}return IE(()=>{var x;if(t){let D=i.current.querySelectorAll('[data-in="true"]'),C=12,S=(x=e.position)==null?void 0:x.includes("top"),j=0,U=0;Array.from(D).reverse().forEach(($,b)=>{let y=$;y.classList.add("Toastify__toast--stacked"),b>0&&(y.dataset.collapsed=`${r}`),y.dataset.pos||(y.dataset.pos=S?"top":"bot");let w=j*(r?.2:1)+(r?0:C*b);y.style.setProperty("--y",`${S?w:w*-1}px`),y.style.setProperty("--g",`${C}`),y.style.setProperty("--s",`${1-(r?U:0)}`),j+=y.offsetHeight,U+=.025})}},[r,u,t]),T.useEffect(()=>{function x(D){var C;let S=i.current;_(D)&&((C=S.querySelector('[tabIndex="0"]'))==null||C.focus(),s(!1),re.pause()),D.key==="Escape"&&(document.activeElement===S||S!=null&&S.contains(document.activeElement))&&(s(!0),re.play())}return document.addEventListener("keydown",x),()=>{document.removeEventListener("keydown",x)}},[_]),ie.createElement("section",{ref:i,className:"Toastify",id:v,onMouseEnter:()=>{t&&(s(!1),re.pause())},onMouseLeave:P,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},o((x,D)=>{let C=D.length?{...m}:{...m,pointerEvents:"none"};return ie.createElement("div",{tabIndex:-1,className:A(x),"data-stacked":t,style:C,key:`c-${x}`},D.map(({content:S,props:j})=>ie.createElement(DE,{...j,stacked:t,collapseAll:P,isIn:l(j.toastId,j.containerId),key:`t-${j.key}`},S)))}))}const ME=()=>{const[n,e]=T.useState(!1),[t,r]=T.useState(!1),s=vt(),[i,o]=T.useState(!1),l=He(),{email:u="",password:d=""}=l.state||{},[m,p]=T.useState(""),[v,_]=T.useState({fullName:"",email:u,username:"",password:d,confirmPassword:"",gender:"",agree:!1}),[A,P]=T.useState({}),x="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-right placeholder:text-gray-400 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400",D=y=>re.success(y),C=y=>re.error(y),S=()=>{p(""),P({}),e(!1)};function j(y){const{name:w,type:I,value:R,checked:N}=y.target;_(E=>({...E,[w]:I==="checkbox"?N:R})),P(E=>({...E,[w]:void 0}))}T.useEffect(()=>{(async()=>{try{const w=await G_(Qe);if(!(w!=null&&w.user))return;const I=w.user;await Yr(Xn(Jn,"users",I.uid),{name:I.displayName,photoURL:I.photoURL,provider:"google",gender:"",agree:!0,lastLogin:Date.now()},{merge:!0}),e(!0),D("✅ تم تسجيل الدخول باستخدام Google بنجاح! سيتم تحويلك..."),setTimeout(()=>s("/login"),3e3)}catch(w){w.code!=="auth/no-auth-event"&&(console.error(w),C("❌ فشل إتمام تسجيل الدخول باستخدام Google."))}})()},[s]);const U=y=>{console.error("Firebase Error:",y);let w="❌ حدث خطأ غير متوقع. حاول مرة أخرى.";switch(y.code){case"auth/email-already-in-use":w="❌ هذا البريد الإلكتروني مستخدم بالفعل.";break;case"auth/invalid-email":w="❌ البريد الإلكتروني غير صالح.";break;case"auth/weak-password":w="❌ كلمة المرور ضعيفة جدًا. استخدم 6 أحرف على الأقل.";break;case"auth/operation-not-allowed":w="❌ التسجيل باستخدام البريد الإلكتروني غير مفعل.";break;default:w="❌ حدث خطأ أثناء إنشاء الحساب."}p(w),C(w)},$=async y=>{y.preventDefault(),S(),r(!0),o(!0);const{email:w,password:I,confirmPassword:R,username:N,fullName:E,gender:ye,agree:H}=v;if(I!==R){P({confirmPassword:"كلمات المرور غير متطابقة."}),o(!1);return}try{const ee=(await p_(Qe,w,I)).user;await Yr(Xn(Jn,"users",ee.uid),{fullName:E,username:N,gender:ye,agree:H,provider:"email",email:w,lastLogin:Date.now()},{merge:!0}),e(!0),D("✅ تم إنشاء الحساب بنجاح! سيتم تحويلك إلى صفحة تسجيل الدخول..."),setTimeout(()=>s("/login",{state:{email:w,password:I}}),3e3)}catch(ne){U(ne)}finally{o(!1)}},b=async()=>{S(),o(!0);try{const y=new at;y.setCustomParameters({prompt:"consent"}),await q_(Qe,y)}catch(y){console.error(y),C("❌ فشل بدء تسجيل الدخول باستخدام Google."),o(!1)}};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"relative min-h-screen bg-gray-100 font-[Tajawal]",dir:"rtl",lang:"ar",children:[c.jsx("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[...Array(12)].map((y,w)=>c.jsx("div",{className:"absolute w-2 h-2 bg-blue-300 rounded-full animate-pulse",style:{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${4+Math.random()*4}s`}},w))}),c.jsx("div",{className:"flex items-center justify-center sm:px-6 md:px-8 lg:px-12 min-h-[70vh]",children:c.jsxs("div",{className:"w-full sm:w-[100%] md:w-[80%] lg:w-[60%] max-w-2xl bg-white rounded-2xl shadow-xl p-2 sm:p-6 md:p-6 lg:p-8 xl:p-10 my-10 sm:my-6 md:my-10 lg:my-14",children:[c.jsx(Kt,{to:"/main",children:c.jsx("img",{src:hs,alt:"plrn Logo",className:"w-20 mx-auto mb-4 cursor-pointer"})}),c.jsxs("h2",{className:"flex flex-wrap justify-center items-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800 gap-1",children:["إنشاء ",c.jsx("span",{className:"text-green-500",children:"حساب"})," جديد"]}),n&&c.jsx("div",{className:"text-green-600 text-center font-bold text-lg mb-4",children:"تم إنشاء الحساب بنجاح!..."}),c.jsxs("form",{onSubmit:$,children:[c.jsxs("div",{className:"space-y-4 mb-6",children:[c.jsx("input",{name:"fullName",value:v.fullName,onChange:j,type:"text",placeholder:"الاسم الكامل",required:!0,className:x}),c.jsx("input",{name:"email",value:v.email,onChange:j,type:"email",placeholder:"البريد الإلكتروني",required:!0,className:x}),c.jsx("input",{name:"username",value:v.username,onChange:j,type:"text",placeholder:"اسم المستخدم",required:!0,className:x}),c.jsx("input",{name:"password",value:v.password,onChange:j,type:"password",placeholder:"كلمة المرور",required:!0,className:x}),c.jsx("input",{name:"confirmPassword",value:v.confirmPassword,onChange:j,type:"password",placeholder:"تأكيد كلمة المرور",required:!0,className:x}),c.jsxs("select",{name:"gender",value:v.gender,onChange:j,required:!0,className:x,children:[c.jsx("option",{value:"",children:"اختر الجنس"}),c.jsx("option",{value:"male",children:"ذكر"}),c.jsx("option",{value:"female",children:"أنثى"})]}),c.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[c.jsx("input",{id:"terms",name:"agree",type:"checkbox",checked:v.agree,onChange:j,required:!0,className:"accent-green-500"}),c.jsxs("label",{htmlFor:"terms",className:"flex items-center gap-1 text-[16px] font-bold",children:["أوافق على"," ",c.jsx("a",{href:"/terms",className:"text-[#22c55e] hover:text-[#1565c0] font-bold",children:"الشروط والأحكام"})]})]})]}),c.jsx("button",{type:"submit",disabled:i,className:`w-full py-3 bg-green-500 text-white font-bold rounded-full transition-all duration-300 hover:bg-green-600 hover:scale-[1.02] ${i?"opacity-50 cursor-not-allowed":""}`,children:i?"جارٍ الإنشاء...":"إنشاء الحساب"}),c.jsxs("div",{className:"relative text-center my-4",children:[c.jsx("span",{className:"bg-white px-4 text-gray-500 z-10 relative",children:"أو"}),c.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-px bg-gray-300 -z-0"})]}),c.jsxs("button",{type:"button",onClick:b,className:"w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-full bg-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[c.jsx("img",{src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:"Google logo",className:"w-5 h-5"}),c.jsx("span",{className:"text-sm font-medium text-gray-700",children:"المتابعة باستخدام Google"})]}),c.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 text-[16px] text-gray-600 font-bold mt-4",children:[c.jsx("div",{className:"whitespace-nowrap",children:"لديك حساب بالفعل؟"}),c.jsx("a",{href:"/login",className:"text-[#22c55e] hover:text-[#1565c0] font-bold",children:"تسجيل الدخول"})]})]})]})})]}),t&&m&&c.jsx("div",{className:"text-red-500 text-sm mt-2 text-center",children:m}),c.jsx(LE,{position:"top-center",autoClose:3e3})]})},UE=({toasts:n,removeToast:e})=>(T.useEffect(()=>{const t=n.map(r=>setTimeout(()=>e(r.id),3e3));return()=>t.forEach(clearTimeout)},[n,e]),c.jsx("div",{className:"fixed top-6 right-6 z-50 flex flex-col gap-4 items-end",dir:"rtl",children:n.map(t=>{const r=t.type==="success"?"bg-green-500":t.type==="error"?"bg-red-500":"bg-gray-700";return c.jsx("div",{className:`px-4 py-3 rounded-lg text-white shadow-lg transition-all duration-300 ${r}`,children:c.jsxs("div",{className:"flex items-center justify-between gap-4",children:[c.jsx("span",{className:"text-sm text-black font-medium",children:t.message}),c.jsx("button",{onClick:()=>e(t.id),className:"text-black hover:text-gray-200 text-lg font-bold",children:"×"})]})},t.id)})})),FE=()=>{const[n,e]=T.useState(""),[t,r]=T.useState([]);function s(l,u="success"){const d=Date.now();r(m=>[...m,{id:d,message:l,type:u}])}function i(l){r(u=>u.filter(d=>d.id!==l))}async function o(l){l.preventDefault();try{await m_(Qe,n),s("تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني.","success"),e("")}catch(u){u.code==="auth/user-not-found"?s("لا يوجد مستخدم بهذا البريد الإلكتروني.","error"):u.code==="auth/invalid-email"?s("البريد الإلكتروني غير صالح.","error"):s("حدث خطأ أثناء إرسال الرابط. حاول مرة أخرى.","error")}}return c.jsxs(c.Fragment,{children:[c.jsx(UE,{toasts:t,removeToast:i}),c.jsxs("div",{className:"relative min-h-screen flex items-center justify-center bg-green-50 px-6 font-[Cairo]",dir:"rtl",lang:"ar",children:[c.jsx("div",{className:"absolute inset-0 -z-10 overflow-hidden pointer-events-none",children:[...Array(12)].map((l,u)=>c.jsx("div",{className:"absolute w-2.5 h-2.5 bg-gradient-to-b from-green-200 to-green-300 rounded-full opacity-60 animate-[drift_8s_ease-in-out_infinite]",style:{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${4+Math.random()*4}s`}},u))}),c.jsxs("div",{className:"relative w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 text-center animate-[fadeSlideUp_0.8s_ease-out_forwards]",children:[c.jsxs("div",{className:"absolute -top-8 -left-8 w-36 h-36 pointer-events-none z-0",children:[c.jsx("div",{className:"absolute w-4.5 h-4.5 bg-gradient-to-b from-green-200 to-green-300 rounded-md shadow-md animate-[floatStar_6s_ease-in-out_infinite] rotate-[18deg]",style:{top:"12px",left:"8px"}}),c.jsx("div",{className:"absolute w-3 h-3 bg-gradient-to-b from-green-300 to-green-400 rounded-full shadow-md animate-[floatStar_6s_ease-in-out_infinite]",style:{top:"24px",left:"86px"}}),c.jsx("div",{className:"absolute w-5.5 h-5.5 bg-gradient-to-b from-green-100 to-green-300 rounded-md shadow-md animate-[floatStar_6s_ease-in-out_infinite]",style:{top:"62px",left:"42px"}})]}),c.jsx(Kt,{to:"/main",children:c.jsx("img",{src:hs,alt:"plrn Logo",className:"w-28 mx-auto mb-5"})}),c.jsxs("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:["نسيت ",c.jsx("span",{className:"text-green-400",children:"كلمة "}),"المرور؟"]}),c.jsxs("form",{onSubmit:o,children:[c.jsx("div",{className:"mb-4",children:c.jsx("input",{name:"email",value:n,onChange:l=>e(l.target.value),type:"email",placeholder:"أدخل بريدك الإلكتروني لاستعادة كلمة المرور",required:!0,className:"w-full px-4 py-3 border border-green-300 rounded-lg bg-white text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"})}),c.jsx("button",{type:"submit",className:"w-1/2 py-3 bg-gradient-to-r from-green-500 to-green-400 text-white font-bold rounded-lg shadow-md hover:from-green-600 hover:to-green-500 hover:scale-[1.02] transition-all duration-300",children:"إرسال رابط الاستعادة"}),c.jsx("div",{className:"mt-6 text-sm text-gray-600",children:c.jsxs("span",{children:["تذكرت كلمة المرور؟"," ",c.jsx(Kt,{to:"/login",className:"text-green-500 font-bold hover:underline",children:"تسجيل الدخول"})]})})]})]})]})]})},$E="_container_ngeif_45",BE="_section_ngeif_59",zE="_sectionVisible_ngeif_81",HE="_sectionHidden_ngeif_93",qE="_header_ngeif_107",WE="_title_ngeif_121",GE="_bounceText_ngeif_159",KE="_bounceButton_ngeif_305",QE="_subtitle_ngeif_169",YE="_cardGrid_ngeif_197",XE="_card_ngeif_197",JE="_cardIcon_ngeif_265",ZE="_cardTitle_ngeif_277",eT="_cardDescription_ngeif_291",tT="_gradientYellow_ngeif_343",nT="_gradientGreen_ngeif_351",rT="_gradientBlue_ngeif_359",sT="_gradientPink_ngeif_367",_e={container:$E,section:BE,sectionVisible:zE,sectionHidden:HE,header:qE,title:WE,bounceText:GE,bounceButton:KE,subtitle:QE,cardGrid:YE,card:XE,cardIcon:JE,cardTitle:ZE,cardDescription:eT,gradientYellow:tT,gradientGreen:nT,gradientBlue:rT,gradientPink:sT};function ms(){return c.jsx("div",{children:c.jsx("div",{className:"absolute inset-0 z-0 pointer-events-none",children:[...Array(25)].map((n,e)=>{const t=15+Math.random()*25,r=Math.random()*window.innerWidth,s=Math.random()*window.innerHeight,i=["bg-blue-300","bg-green-300","bg-yellow-300","bg-pink-300","bg-purple-300"];return c.jsx("span",{className:`absolute rounded-full ${i[e%i.length]} opacity-50`,style:{width:`${t}px`,height:`${t}px`,left:`${r}px`,top:`${s}px`,animation:`floatBubble ${5+Math.random()*5}s ease-in-out infinite alternate`}},e)})})})}function iT(){const[n,e]=T.useState("hero"),[t,r]=T.useState(!1),s=lp(),[i,o]=T.useState("#E53E3E"),l=vt(),u=[{id:"hero",name:"الرئيسية"},{id:"programs",name:"البرامج التعليمية"},{id:"about",name:"عن المنصة"},{id:"faq",name:"الأسئلة الشائعة"},{id:"footer",name:"تواصل معنا"}];T.useEffect(()=>{const m=()=>{u.forEach(p=>{const v=document.getElementById(p.id);if(v){const _=v.getBoundingClientRect();_.top<=100&&_.bottom>=100&&e(p.id)}})};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]),T.useEffect(()=>{s.start({rotate:[0,15,-15,0],y:[0,-10,10,0],transition:{repeat:1/0,duration:3,ease:"easeInOut"}});const m=setInterval(()=>{o(`#${Math.floor(Math.random()*16777215).toString(16)}`)},2e3);return()=>clearInterval(m)},[s]);const d=m=>{const p=document.getElementById(m);p&&p.scrollIntoView({behavior:"smooth"}),r(!1)};return c.jsxs("header",{className:"fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-lg rounded-b-xl",children:[c.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex justify-between items-center",children:[c.jsx(Vn.div,{className:"flex items-center cursor-pointer select-none mr-12",animate:{x:[-5,5,-5,0]},transition:{repeat:1/0,duration:4,ease:"easeInOut"},children:c.jsx("img",{src:hs,alt:"بليرن",className:"w-50 h-16 mr-3 animate-float-slow"})}),c.jsxs("div",{className:"hidden md:flex gap-6 items-center font-Tajawal",children:[u.map(m=>c.jsx(Vn.button,{onClick:()=>d(m.id),whileHover:{scale:1.1,rotate:2},style:{color:n===m.id?"#E53E3E":"#4A5568"},className:"font-semibold text-lg cursor-pointer transition-colors duration-300",children:m.name},m.id)),c.jsx(Vn.a,{onClick:()=>l("/login"),animate:s,whileHover:{scale:1.2,rotate:0},className:"ml-6 px-6 py-2 rounded-full bg-gradient-to-r cursor-pointer from-green-400 via-blue-400 to-green-300 text-white font-bold shadow-lg hover:shadow-xl transition-all",children:"تسجيل الدخول"})]}),c.jsx("div",{className:"md:hidden",children:c.jsx("button",{onClick:()=>r(!t),className:"text-gray-700 text-3xl focus:outline-none",children:t?"✖":"☰"})})]}),t&&c.jsx(Vn.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},transition:{duration:.5},className:"md:hidden bg-white/80 backdrop-blur-md rounded-b-xl",children:c.jsx("div",{className:"flex flex-col items-center gap-4 py-6",children:u.map(m=>c.jsx(Vn.button,{onClick:()=>d(m.id),whileHover:{scale:1.05,rotate:[0,5,-5,0]},style:{color:i},className:"font-semibold text-lg transition-colors duration-300",children:m.name},m.id))})})]})}const oT="/assets/logo_v-DKK14XaC.mp4";function aT(){const[n,e]=T.useState(!1),[t,r]=T.useState(!1),[s,i]=T.useState(!1),[o,l]=T.useState(!1),u=vt();return T.useEffect(()=>{const d=[];return d.push(setTimeout(()=>e(!0),2500)),d.push(setTimeout(()=>r(!0),2900)),d.push(setTimeout(()=>i(!0),3e3)),d.push(setTimeout(()=>l(!0),300)),()=>d.forEach(clearTimeout)},[]),c.jsxs("section",{className:"relative w-full min-h-screen overflow-hidden font-tajawal flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 pt-24 md:pt-0",children:[c.jsxs("div",{className:"relative z-10 flex flex-col items-center  text-center md:text-right max-w-xl md:max-w-2xl space-y-6 md:space-y-8 mt-12 md:mt-0",children:[c.jsx("h1",{className:`text-3xl md:text-4xl font-extrabold transform transition-all duration-700 ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:c.jsx("div",{className:"text-green-500 inline-block animate-bounce",children:"منصة تعليمية تفاعلية"})}),c.jsx("p",{className:`text-lg md:text-1xl text-black leading-relaxed max-w-md md:max-w-lg transform transition-all duration-700 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-6"} font-['Cairo_Play']`,children:"منصتنا التعليمية التفاعلية هي الأولى من نوعها في السودان، حيث نحوّل التعلم إلى تجربة مليئة بالمرح والإبداع. من خلال ألعاب تعليمية مبتكرة، نمنح الطلاب الفرصة لاكتشاف المعرفة بطريقة شيقة، تحفّز الفضول وتغذي حب الاستطلاع لديهم. هنا، تتحوّل المناهج إلى مغامرات تعليمية ممتعة، ونصنع جيلًا مبدعًا يتعلّم بشغف وينمو بوعي ومعرفة بأسلوب جديد كليًا."}),c.jsxs("div",{className:`flex flex-col md:flex-row gap-4 md:gap-6 transform transition-all duration-700 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:[c.jsx("a",{onClick:()=>u("/login"),className:"px-8 py-4 bg-green-500 text-white cursor-pointer font-bold rounded-full shadow-lg hover:scale-105 hover:rotate-3 transition-transform duration-500 animate-bounce-slow text-center",children:"ابدأ اللعب الآن"}),c.jsx("a",{href:"#about",className:"px-8 py-4 border-2 border-blue-500 text-blue-600 font-bold rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-500 text-center",children:"تعرف أكثر"})]})]}),c.jsx("div",{className:`relative z-10 mb-12 md:mb-0 transform transition-all duration-700 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:c.jsx("video",{src:oT,autoPlay:!0,loop:!0,muted:!0,className:"w-72 sm:w-80 md:w-96 rounded-lg shadow-lg"})}),c.jsx(ms,{})]})}function lT(){const n=[{title:"تعليم تفاعلي ممتع",description:"ألعاب تعليمية ودروس تفاعلية تحول التعلم إلى مغامرة مشوقة تثري معارف الطفل",icon:"https://cdn-icons-png.flaticon.com/512/4333/4333609.png",circle:"bg-yellow-200"},{title:"متابعة أدائك ",description:"لوحة تحكم ذكية تمكنك من متابعة تقدمك بدقة وسهولة",icon:"https://cdn-icons-png.flaticon.com/512/1827/1827504.png",circle:"bg-green-200"},{title:"مناهج سودانية متكاملة",description:"محتوى تعليمي عالي الجودة مصمم وفق أحدث المناهج السودانية",icon:"https://img.icons8.com/?size=100&id=9Cnmfi1SKARM&format=png&color=000000",circle:"bg-blue-200"},{title:"بيئة آمنة ومحمية",description:"منصة خالية من المشتتات والإعلانات تضمن تجربة تعليمية آمنة",icon:"https://cdn-icons-png.flaticon.com/512/2889/2889676.png",circle:"bg-pink-200"},{title:"تعلم في أي وقت",description:"دروس متاحة 24/7 تتناسب مع جدولكم اليومي ووتيرة تعلم سريعة",icon:"https://img.icons8.com/?size=100&id=hpibXgnvscd8&format=png&color=000000",circle:"bg-purple-200"},{title:"تنمية المهارات",description:"أنشطة تعزز التفكير النقدي والإبداعي وتطور مهاراتك ",icon:"https://img.icons8.com/?size=100&id=w8rjZ3tt8DQG&format=png&color=000000",circle:"bg-teal-200"}],e=T.useRef(null),[t,r]=T.useState(!1);return T.useEffect(()=>{if(window.innerWidth<768){r(!0);return}const s=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&(r(!0),s.unobserve(o.target))})},{threshold:.3});return e.current&&s.observe(e.current),()=>s.disconnect()},[]),c.jsxs("section",{ref:e,className:"w-full min-h-screen py-20 px-6 bg-gray-50 font-tajawal relative overflow-hidden",children:[c.jsxs("div",{className:`text-center mb-16 relative z-10 transition-all duration-700 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}`,children:[c.jsxs("h1",{className:"text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent",children:["لماذا تعد"," ",c.jsx("div",{className:"text-yellow-400 drop-shadow-md animate-bounce",children:"بلــــــيرن"})," ","الخيار الأمثل لتعلمك"]}),c.jsx("p",{className:"text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed",children:"نُقدّم تجربة تعليمية آمنة وممتعة، تمزج بين الإبداع والتكنولوجيا، لتنمية مهارات طفلك بطريقة تفاعلية ومشوقة."})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10",children:n.map((s,i)=>c.jsxs("div",{className:`relative p-8 rounded-3xl shadow-lg backdrop-blur-xl bg-white/40 border border-white/20 hover:border-transparent hover:shadow-2xl transition-all duration-500 group
              ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}
            `,style:{transitionDelay:`${i*150}ms`,animation:`floatCard ${2+i*.5}s ease-in-out infinite alternate`},children:[c.jsx("div",{className:`w-20 h-20 mx-auto flex items-center justify-center rounded-full shadow-md mb-6 transform group-hover:scale-110 transition-transform duration-500 ${s.circle}`,children:c.jsx("img",{src:s.icon,alt:s.title,className:"w-12 h-12"})}),c.jsx("h2",{className:"text-xl md:text-2xl font-bold text-center mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300",children:s.title}),c.jsx("p",{className:"text-gray-700 text-center leading-relaxed max-w-xs mx-auto",children:s.description}),c.jsx("span",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 opacity-0 group-hover:opacity-20 transition-opacity duration-500"})]},i))}),c.jsx(ms,{}),c.jsx("style",{children:`
          @keyframes floatCard {
            0% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0); }
          }
          @keyframes floatBubble {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-25px) translateX(12px); }
            100% { transform: translateY(0) translateX(0); }
          }
        `})]})}function cT(){const[n,e]=T.useState(null),[t,r]=T.useState(!1),s=T.useRef(null),i=[{question:"ما هي الفئة العمرية المناسبة للمنصة؟",answer:"المنصة مناسبة لجميع الاعمار، حيث تم تصميم المحتوى بعناية ليناسب مختلف المراحل العمرية."},{question:"كيف يمكنني متابعة تقدمي  التعليمي؟",answer:"نوفر لوحة تحكم ذكية  تمكنك من متابعة تقدمك  بسهولة، وعرض النتائج والتقارير الشهرية."},{question:"كيف يمكنني كسب النقاط وتحقيق الإنجازات على المنصة؟",answer:"ستتمكن من اكتساب نقاط وإنجازات مع كل درس أو لعبة تكملها، مما يحفز التعلم ويجعل كل تجربة تعليمية ممتعة ومثيرة."},{question:"هل المحتوى متوافق مع المناهج الدراسية؟",answer:"نعم، المحتوى التعليمي مصمم وفق المناهج الدراسية السودانية لدي وزارة التربية والتعليم لضمان الاستفادة القصوى وتحقيق التعلم الفعّال."},{question:"هل كل محتوى المنصة حصري؟",answer:"نعم، جميع الألعاب والدروس التعليمية مصممة حصريًا لتقديم تجربة تفاعلية معتمدة علي الالعاب."}],o=l=>{e(n===l?null:l)};return T.useEffect(()=>{const l=new IntersectionObserver(u=>{u.forEach(d=>{d.isIntersecting&&(r(!0),l.unobserve(d.target))})},{threshold:.3});return s.current&&l.observe(s.current),()=>l.disconnect()},[]),c.jsxs("section",{ref:s,className:"w-full min-h-screen py-16 px-6 bg-gray-50 font-tajawal relative overflow-hidden",children:[c.jsxs("div",{className:`text-center mb-12 relative z-10 transition-all duration-700 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}`,children:[c.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold mb-6 text-black",children:"الأسئلة الشائعة"}),c.jsx("p",{className:"text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed",children:"نعرف أنكم قد تتساءلون عن بعض التفاصيل، لذلك جمعنا أكثر الأسئلة تكرارًا هنا."})]}),c.jsx("div",{className:"max-w-4xl mx-auto space-y-4 relative z-10",children:i.map((l,u)=>{const d=n===u;return c.jsxs("div",{className:`relative border border-gray-300 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 transform ${d?"scale-105 shadow-2xl":"hover:scale-102 hover:shadow-xl"} ${t?"opacity-100 translate-x-0":"opacity-0 translate-x-12"} transition-all duration-700 delay-${u*100}`,children:[c.jsxs("button",{onClick:()=>o(u),className:"w-full flex justify-between items-center px-6 py-4 bg-white text-right text-black font-semibold text-lg md:text-xl focus:outline-none transition-all duration-300",children:[l.question,c.jsx("span",{className:`ml-4 transform transition-transform duration-500 ${d?"rotate-180":"rotate-0"} inline-block`,children:"▼"})]}),c.jsx("div",{className:"px-6 py-4 bg-gray-50 overflow-hidden transition-all duration-500",style:{maxHeight:d?"500px":"0px",opacity:d?1:0,transform:d?"translateX(0)":"translateX(50px)"},children:c.jsx("p",{className:"text-gray-700 leading-relaxed",children:l.answer})})]},u)})}),c.jsx(ms,{})]})}function uT(){const n=[{icon:"https://cdn-icons-png.flaticon.com/512/733/733585.png",url:"https://wa.me/+249 99 792 2457",alt:"WhatsApp"},{icon:"https://cdn-icons-png.flaticon.com/512/2111/2111646.png",url:"https://t.me/Mohamed_albasher",alt:"Telegram"},{icon:"https://cdn-icons-png.flaticon.com/512/733/733547.png",url:"https://facebook.com",alt:"Facebook"},{icon:"https://cdn-icons-png.flaticon.com/512/561/561127.png",url:"mailto:info@Plarn.com",alt:"Email"}],e=[{name:"الرئيسية",href:"#hero"},{name:"البرامج التعليمية",href:"#programs"},{name:"عن المنصة",href:"#about"},{name:"تواصل معنا",href:"#contact"}],t=[{name:"الحاسوب",href:"#arabic"},{name:"الإسعافات الأولية",href:"#science"},{name:"الرياضيات",href:"#math"},{name:"الفيزياء",href:"#english"}],r=T.useRef(null),[s,i]=T.useState(!1);return T.useEffect(()=>{const o=new IntersectionObserver(l=>{l.forEach(u=>{u.isIntersecting&&(i(!0),o.unobserve(u.target))})},{threshold:.3});return r.current&&o.observe(r.current),()=>o.disconnect()},[]),c.jsxs("footer",{ref:r,className:`relative w-full bg-gradient-to-b from-gray-50 to-gray-100 font-tajawal overflow-hidden py-16 px-6 transition-all duration-700 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}`,children:[c.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-3xl font-extrabold mb-4 text-black",children:c.jsx("span",{className:"inline-block animate-bounce-slow",children:"بلــــــيرن"})}),c.jsx("p",{className:"text-gray-700 mb-6 leading-relaxed",children:"منصة تعليمية تفاعلية مبتكرة تقدم تجربة تعلم عبر الالعاب مصممة لتنمية مهاراتك بطريقة إبداعية."}),c.jsx("div",{className:"flex space-x-6 mt-4",children:n.map((o,l)=>c.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",className:"transform transition duration-500 hover:scale-125 hover:-translate-y-1 animate-icon-bounce",children:c.jsx("img",{src:o.icon,alt:o.alt,className:"w-12 h-12"})},l))})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-2xl font-bold mb-4 text-black",children:"روابط سريعة"}),c.jsx("ul",{className:"space-y-2 text-gray-700",children:e.map((o,l)=>c.jsx("li",{children:c.jsx("a",{href:o.href,className:"relative inline-block px-2 py-1 hover:text-green-500 transition-colors before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-green-500 before:transition-all hover:before:w-full",children:o.name})},l))})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-2xl font-bold mb-4 text-black",children:"البرامج التعليمية"}),c.jsx("ul",{className:"space-y-2 text-gray-700",children:t.map((o,l)=>c.jsx("li",{children:c.jsx("a",{href:o.href,className:"relative inline-block px-2 py-1 hover:text-green-500 transition-colors before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-green-500 before:transition-all hover:before:w-full",children:o.name})},l))})]})]}),c.jsxs("div",{className:"mt-16 border-t border-gray-300 pt-6 text-center text-gray-600 space-y-2",children:[c.jsx("p",{className:"text-lg font-semibold",children:"24997922457+ | info@Plarn.com"}),c.jsx("p",{children:"© 2025 بلــــــيرن. جميع الحقوق محفوظة."}),c.jsx("div",{className:"flex justify-center space-x-6 mt-2",children:c.jsx("a",{href:"#privacy",className:"hover:text-green-500 transition-colors",children:"سياسة الخصوصية"})})]}),c.jsx(ms,{})]})}function rh(){const n=[{title:"الحاسوب",description:"نطلق في عالم التكنولوجيا مع مناهج الحاسوب المختلفة، واستمتع بتحديات تفاعلية تكسبك نقاطًا ومهارات أساسية تفتح لك أبواب المستقبل الرقمي.",icon:"https://img.icons8.com/?size=100&id=XKASq08BL6br&format=png&color=000000",gradient:_e.gradientYellow},{title:"الإسعافات الأولية",description:"استعد لتحديات الإسعافات الأولية وتعلّم مهارات الحياة الأساسية، اكسب نقاطك مع كل إنقاذ وكن البطل القادر على التعامل مع أي موقف طارئ بثقة.",icon:"https://img.icons8.com/?size=100&id=kP6pGQWbmasY&format=png&color=000000",gradient:_e.gradientGreen},{title:"الرياضيات",description:"اكتشف مغامرة الأرقام والمنطق! حل الألغاز واكسب نقاطًا بينما تتعلّم بطريقة ممتعة تجعل كل عملية حسابية رحلة شيقة.",icon:"https://img.icons8.com/?size=100&id=80258&format=png&color=000000",gradient:_e.gradientBlue},{title:"الفيزياء",description:"استكشف أسرار الكون من خلال تجارب علمية تفاعلية، أكسب نقاطًا مع كل تجربة واكتشف روعة العلوم في حياتك اليومية بأسلوب ممتع ومشوق.",icon:"https://img.icons8.com/?size=100&id=RPHZmB5ERyjp&format=png&color=000000",gradient:_e.gradientPink}],e=T.useRef(null),[t,r]=T.useState(!1);return T.useEffect(()=>{const s=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&(r(!0),s.unobserve(o.target))})},{threshold:.3});return e.current&&s.observe(e.current),()=>s.disconnect()},[]),c.jsxs(c.Fragment,{children:[c.jsx(iT,{}),c.jsx("section",{id:"hero",children:c.jsx(aT,{})}),c.jsxs("main",{className:_e.container,children:[c.jsxs("section",{id:"m",ref:e,className:_e.section,children:[c.jsxs("div",{className:`${_e.header} ${t?_e.sectionVisible:_e.sectionHidden}`,children:[c.jsxs("h1",{className:_e.title,children:["برامجنا التعليمية ",c.jsx("div",{className:_e.bounceText,children:"الممتعة"})]}),c.jsx("p",{className:_e.subtitle,children:"برامجنا التعليمية مصممة لتجمع بين الفائدة والمتعة، حيث نقدم محتوى متنوع يغطي مختلف المراحل الدراسية."})]}),c.jsx("div",{className:`${_e.cardGrid} ${t?_e.sectionVisible:_e.sectionHidden}`,children:n.map((s,i)=>c.jsxs("div",{className:`${_e.card} ${s.gradient}`,style:{animation:t?`floatCard ${2+i*.5}s ease-in-out infinite alternate`:"none"},children:[c.jsx("img",{src:s.icon,alt:s.title,className:_e.cardIcon}),c.jsx("h2",{className:_e.cardTitle,children:s.title}),c.jsx("p",{className:_e.cardDescription,children:s.description}),c.jsx("a",{href:"#",className:_e.bounceButton,children:"ابدأ اللعب"})]},i))})]}),c.jsx(ms,{}),c.jsx("section",{id:"about",children:c.jsx(lT,{})}),c.jsx("section",{id:"faq",children:c.jsx(cT,{})})]}),c.jsx(uT,{})]})}const hT=({children:n})=>{const{user:e,loading:t}=tE();return t?null:e?n:c.jsx(Xp,{to:"/dashboard"})},ar=he(c.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"})),dT=he(c.jsx("path",{d:"M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"})),sh=he(c.jsx("path",{d:"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 4h5v8l-2.5-1.5L6 12z"})),ml=he(c.jsx("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6"})),Ys=he(c.jsx("path",{d:"M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20zm-6 8h-4v-2h4zm0-4h-4v-2h4z"})),om=he(c.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41zm-6.78.66h5v1.5h-5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2zm6.5 1.25h-5v-1.5h5zm0-2.5h-5v-1.5h5z"})),zi=he(c.jsx("path",{d:"M18 11v2h4v-2zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61M20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4M4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34"})),Hi=he(c.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"})),fT=he(c.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),am=he(c.jsx("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"})),mT=he(c.jsx("path",{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z"})),pT=he(c.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"})),pl=he(c.jsx("path",{d:"M15 7.5V2H9v5.5l3 3zM7.5 9H2v6h5.5l3-3zM9 16.5V22h6v-5.5l-3-3zM16.5 9l-3 3 3 3H22V9z"})),gT=he(c.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})),yT=he(c.jsx("path",{d:"M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4z"})),_T=he(c.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"})),vT=he(c.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"})),wT=he(c.jsx("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"})),bT=he([c.jsx("circle",{cx:"12",cy:"12",r:"3.2"},"0"),c.jsx("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},"1")]),xT=he(c.jsx("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"})),gl=he(c.jsx("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"})),da=he(c.jsx("path",{d:"M19.8 18.4 14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6"})),qi=he(c.jsx("path",{d:"m21.58 16.09-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91M11 11H9v2H8v-2H6v-1h2V8h1v2h2zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="firebasestorage.googleapis.com",cm="storageBucket",ET=2*60*1e3,TT=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends wt{constructor(e,t,r=0){super(Do(e),`Firebase Storage: ${t} (${Do(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Do(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var fe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(fe||(fe={}));function Do(n){return"storage/"+n}function yl(){const n="An unknown error occurred, please check the error payload for server response.";return new me(fe.UNKNOWN,n)}function IT(n){return new me(fe.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function RT(n){return new me(fe.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function AT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new me(fe.UNAUTHENTICATED,n)}function CT(){return new me(fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ST(n){return new me(fe.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function NT(){return new me(fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function PT(){return new me(fe.CANCELED,"User canceled the upload/download.")}function kT(n){return new me(fe.INVALID_URL,"Invalid URL '"+n+"'.")}function DT(n){return new me(fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function VT(){return new me(fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+cm+"' property when initializing the app?")}function jT(){return new me(fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function OT(){return new me(fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function LT(n){return new me(fe.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function fa(n){return new me(fe.INVALID_ARGUMENT,n)}function um(){return new me(fe.APP_DELETED,"The Firebase app was deleted.")}function MT(n){return new me(fe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Mr(n,e){return new me(fe.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ir(n){throw new me(fe.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=We.makeFromUrl(e,t)}catch{return new We(e,"")}if(r.path==="")return r;throw DT(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function d(j){j.path_=decodeURIComponent(j.path)}const m="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${m}/b/${s}/o${v}`,"i"),A={bucket:1,path:3},P=t===lm?"(?:storage.googleapis.com|storage.cloud.google.com)":t,x="([^?#]*)",D=new RegExp(`^https?://${P}/${s}/${x}`,"i"),S=[{regex:l,indices:u,postModify:i},{regex:_,indices:A,postModify:d},{regex:D,indices:{bucket:1,path:2},postModify:d}];for(let j=0;j<S.length;j++){const U=S[j],$=U.regex.exec(e);if($){const b=$[U.indices.bucket];let y=$[U.indices.path];y||(y=""),r=new We(b,y),U.postModify(r);break}}if(r==null)throw kT(e);return r}}class UT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(n,e,t){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let d=!1;function m(...x){d||(d=!0,e.apply(null,x))}function p(x){s=setTimeout(()=>{s=null,n(_,u())},x)}function v(){i&&clearTimeout(i)}function _(x,...D){if(d){v();return}if(x){v(),m.call(null,x,...D);return}if(u()||o){v(),m.call(null,x,...D);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,p(S)}let A=!1;function P(x){A||(A=!0,v(),!d&&(s!==null?(x||(l=2),clearTimeout(s),p(0)):x||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,P(!0)},t),P}function $T(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(n){return n!==void 0}function zT(n){return typeof n=="object"&&!Array.isArray(n)}function _l(n){return typeof n=="string"||n instanceof String}function ih(n){return vl()&&n instanceof Blob}function vl(){return typeof Blob<"u"}function oh(n,e,t,r){if(r<e)throw fa(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw fa(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function hm(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var mn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(mn||(mn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,t,r,s,i,o,l,u,d,m,p,v=!0,_=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=p,this.retry=v,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,P)=>{this.resolve_=A,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new js(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===mn.NO_ERROR,u=i.getStatus();if(!l||HT(u,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===mn.ABORT;r(!1,new js(!1,null,m));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new js(d,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());BT(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=yl();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?um():PT();o(u)}else{const u=NT();o(u)}};this.canceled_?t(!1,new js(!1,null,!0)):this.backoffId_=FT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$T(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class js{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function WT(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function GT(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function KT(n,e){e&&(n["X-Firebase-GMPID"]=e)}function QT(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function YT(n,e,t,r,s,i,o=!0,l=!1){const u=hm(n.urlParams),d=n.url+u,m=Object.assign({},n.headers);return KT(m,e),WT(m,t),GT(m,i),QT(m,r),new qT(d,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function JT(...n){const e=XT();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(vl())return new Blob(n);throw new me(fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ZT(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(n){if(typeof atob>"u")throw LT("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Vo{constructor(e,t){this.data=e,this.contentType=t||null}}function t1(n,e){switch(n){case lt.RAW:return new Vo(dm(e));case lt.BASE64:case lt.BASE64URL:return new Vo(fm(n,e));case lt.DATA_URL:return new Vo(r1(e),s1(e))}throw yl()}function dm(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function n1(n){let e;try{e=decodeURIComponent(n)}catch{throw Mr(lt.DATA_URL,"Malformed data URL.")}return dm(e)}function fm(n,e){switch(n){case lt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Mr(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case lt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Mr(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=e1(e)}catch(s){throw s.message.includes("polyfill")?s:Mr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class mm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Mr(lt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=i1(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function r1(n){const e=new mm(n);return e.base64?fm(lt.BASE64,e.rest):n1(e.rest)}function s1(n){return new mm(n).contentType}function i1(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){let r=0,s="";ih(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(ih(this.data_)){const r=this.data_,s=ZT(r,e,t);return s===null?null:new zt(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new zt(r,!0)}}static getBlob(...e){if(vl()){const t=e.map(r=>r instanceof zt?r.data_:r);return new zt(JT.apply(null,t))}else{const t=e.map(o=>_l(o)?t1(lt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new zt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(n){let e;try{e=JSON.parse(n)}catch{return null}return zT(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function a1(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function gm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(n,e){return e}class Me{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||l1}}let Os=null;function c1(n){return!_l(n)||n.length<2?n:gm(n)}function ym(){if(Os)return Os;const n=[];n.push(new Me("bucket")),n.push(new Me("generation")),n.push(new Me("metageneration")),n.push(new Me("name","fullPath",!0));function e(i,o){return c1(o)}const t=new Me("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new Me("size");return s.xform=r,n.push(s),n.push(new Me("timeCreated")),n.push(new Me("updated")),n.push(new Me("md5Hash",null,!0)),n.push(new Me("cacheControl",null,!0)),n.push(new Me("contentDisposition",null,!0)),n.push(new Me("contentEncoding",null,!0)),n.push(new Me("contentLanguage",null,!0)),n.push(new Me("contentType",null,!0)),n.push(new Me("metadata","customMetadata",!0)),Os=n,Os}function u1(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new We(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function h1(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return u1(r,n),r}function _m(n,e,t){const r=pm(e);return r===null?null:h1(n,r,t)}function d1(n,e,t,r){const s=pm(e);if(s===null||!_l(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(d=>{const m=n.bucket,p=n.fullPath,v="/b/"+o(m)+"/o/"+o(p),_=wl(v,t,r),A=hm({alt:"media",token:d});return _+A})[0]}function f1(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class vm{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(n){if(!n)throw yl()}function m1(n,e){function t(r,s){const i=_m(n,s,e);return wm(i!==null),i}return t}function p1(n,e){function t(r,s){const i=_m(n,s,e);return wm(i!==null),d1(i,s,n.host,n._protocol)}return t}function bm(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=CT():s=AT():t.getStatus()===402?s=RT(n.bucket):t.getStatus()===403?s=ST(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function g1(n){const e=bm(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=IT(n.path)),i.serverResponse=s.serverResponse,i}return t}function y1(n,e,t){const r=e.fullServerUrl(),s=wl(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,l=new vm(s,i,p1(n,t),o);return l.errorHandler=g1(e),l}function _1(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function v1(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=_1(null,e)),r}function w1(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let j=0;j<2;j++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const d=v1(e,r,s),m=f1(d,t),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,v=`\r
--`+u+"--",_=zt.getBlob(p,r,v);if(_===null)throw jT();const A={name:d.fullPath},P=wl(i,n.host,n._protocol),x="POST",D=n.maxUploadRetryTime,C=new vm(P,x,m1(n,t),D);return C.urlParams=A,C.headers=o,C.body=_.uploadData(),C.errorHandler=bm(e),C}class b1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=mn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=mn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=mn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Ir("cannot .send() more than once");if(Tn(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ir("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ir("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ir("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ir("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class x1 extends b1{initXhr(){this.xhr_.responseType="text"}}function xm(){return new x1}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t){this._service=e,t instanceof We?this._location=t:this._location=We.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new En(e,t)}get root(){const e=new We(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gm(this._location.path)}get storage(){return this._service}get parent(){const e=o1(this._location.path);if(e===null)return null;const t=new We(this._location.bucket,e);return new En(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw MT(e)}}function E1(n,e,t){n._throwIfRoot("uploadBytes");const r=w1(n.storage,n._location,ym(),new zt(e,!0),t);return n.storage.makeRequestWithTokens(r,xm).then(s=>({metadata:s,ref:n}))}function T1(n){n._throwIfRoot("getDownloadURL");const e=y1(n.storage,n._location,ym());return n.storage.makeRequestWithTokens(e,xm).then(t=>{if(t===null)throw OT();return t})}function I1(n,e){const t=a1(n._location.path,e),r=new We(n._location.bucket,t);return new En(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(n){return/^[A-Za-z]+:\/\//.test(n)}function A1(n,e){return new En(n,e)}function Em(n,e){if(n instanceof bl){const t=n;if(t._bucket==null)throw VT();const r=new En(t,t._bucket);return e!=null?Em(r,e):r}else return e!==void 0?I1(n,e):n}function C1(n,e){if(e&&R1(e)){if(n instanceof bl)return A1(n,e);throw fa("To use ref(service, url), the first argument must be a Storage instance.")}else return Em(n,e)}function ah(n,e){const t=e==null?void 0:e[cm];return t==null?null:We.makeFromBucketSpec(t,n)}class bl{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=lm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ET,this._maxUploadRetryTime=TT,this._requests=new Set,s!=null?this._bucket=We.makeFromBucketSpec(s,this._host):this._bucket=ah(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=We.makeFromBucketSpec(this._url,e):this._bucket=ah(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){oh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){oh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new En(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new UT(um());{const o=YT(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const lh="@firebase/storage",ch="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1="storage";function N1(n,e,t){return n=Se(n),E1(n,e,t)}function P1(n){return n=Se(n),T1(n)}function k1(n,e){return n=Se(n),C1(n,e)}function D1(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new bl(t,r,s,e,In)}function V1(){yn(new Qt(S1,D1,"PUBLIC").setMultipleInstances(!0)),ct(lh,ch,""),ct(lh,ch,"esm2020")}V1();function j1({isOpen:n=!1,onClose:e,userData:t,userId:r,fb:s,appId:i,darkMode:o,showToast:l}){const[u,d]=T.useState({fullName:"",file:null}),[m,p]=T.useState(""),[v,_]=T.useState(!1);T.useEffect(()=>{t&&(d({fullName:t.fullName||t.name||"",file:null}),p(t.photoURL||""))},[t]);const A=D=>{const{name:C,value:S}=D.target;d(j=>({...j,[C]:S}))},P=D=>{const C=D.target.files[0];C&&(d(S=>({...S,file:C})),p(URL.createObjectURL(C)))},x=async()=>{if(!(s!=null&&s.db)||!r){l("خطأ: لم يتم تهيئة المصادقة أو قاعدة البيانات.","error");return}if(!u.fullName.trim()){l("الرجاء إدخال الاسم الكامل.","warning");return}_(!0);let D=m;try{if(u.file){const S=k1(s.storage,`profile_pictures/${r}/${u.file.name}`);await N1(S,u.file),D=await P1(S)}const C=Xn(s.db,`artifacts/${i}/users/${r}/profile`,"data");await Yr(C,{fullName:u.fullName,photoURL:D,lastUpdated:Date.now()},{merge:!0}),l("تم حفظ الملف الشخصي بنجاح!","success"),e()}catch(C){console.error("Error saving profile:",C);const S=(C==null?void 0:C.code)==="permission-denied"?"فشل الحفظ: يرجى التحقق من قواعد الأمان (write).":"فشل الحفظ: حدث خطأ غير متوقع.";l(S,"error")}finally{_(!1)}};return c.jsxs(ga,{open:n,onClose:e,fullWidth:!0,maxWidth:"sm",PaperProps:{className:`${o?"bg-gray-800 text-white shadow-xl shadow-green-900/50":"bg-white text-gray-900 shadow-lg"} transition-colors duration-300 rounded-xl`},dir:"rtl",children:[c.jsxs(ya,{className:`text-center font-bold text-2xl border-b ${o?"border-gray-700 text-green-400":"border-gray-200 text-green-600"}`,children:[c.jsx(pT,{className:"ml-2"}),"تعديل الملف الشخصي"]}),c.jsxs(uh,{className:"py-6 space-y-6 flex flex-col items-center",children:[c.jsxs(sp,{className:"relative",children:[c.jsx(pn,{src:m||"https://placehold.co/100x100/333333/ffffff?text=?",alt:u.fullName||"User",className:"w-24 h-24 mb-4 border-4 border-green-500 shadow-lg cursor-pointer"}),c.jsx("input",{accept:"image/*",style:{display:"none"},id:"profile-pic-upload",type:"file",onChange:P}),c.jsx("label",{htmlFor:"profile-pic-upload",children:c.jsx(ot,{color:"primary",component:"span",className:"absolute bottom-0 right-0 bg-green-500 hover:bg-green-600 text-white",children:c.jsx(bT,{})})})]}),c.jsx(yo,{margin:"dense",name:"fullName",label:"الاسم الكامل",type:"text",fullWidth:!0,variant:"outlined",value:u.fullName,onChange:A,InputLabelProps:{shrink:!0}}),c.jsx(yo,{margin:"dense",label:"البريد الإلكتروني",type:"email",fullWidth:!0,variant:"outlined",value:(t==null?void 0:t.email)||"",disabled:!0,InputLabelProps:{shrink:!0}}),c.jsx(yo,{margin:"dense",label:"معرّف المستخدم",type:"text",fullWidth:!0,variant:"outlined",value:r||"N/A",disabled:!0,InputLabelProps:{shrink:!0}})]}),c.jsxs(_a,{className:"p-4 flex justify-between",children:[c.jsx(ze,{onClick:e,variant:"outlined",className:`font-bold transition-all ${o?"text-white border-red-500 hover:bg-red-500/10":"text-red-500 border-red-500 hover:bg-red-500/10"}`,disabled:v,children:"إلغاء"}),c.jsx(ze,{onClick:x,variant:"contained",className:"font-bold bg-green-500 hover:bg-green-600 text-white transition-all transform hover:scale-[1.02]",startIcon:c.jsx(xT,{}),disabled:v,children:v?"جاري الحفظ...":"حفظ التعديلات"})]})]})}function O1(){const[n,e]=T.useState(!1),[t,r]=T.useState(!1),[s,i]=T.useState(!1),[o,l]=T.useState([]),[u,d]=T.useState(!0),[m,p]=T.useState(!0),v=vt(),_=H=>{if(!H){w("المسار غير متاح حالياً.","info");return}if(!x||!C){w("يجب تسجيل الدخول أولاً.","warning");return}r(!1),v(`/${H}`,{state:{userId:x,userData:C,darkMode:n}})},[A,P]=T.useState({auth:Qe,db:Jn}),[x,D]=T.useState(null),[C,S]=T.useState(null),[j,U]=T.useState(!1),[$,b]=T.useState([]),y=T.useRef(null),w=(H,ne="success")=>{const ee=Date.now();l(pe=>[...pe,{id:ee,message:H,type:ne}]),setTimeout(()=>l(pe=>pe.filter(Nn=>Nn.id!==ee)),3e3)},I=()=>{const H=Intl.DateTimeFormat().resolvedOptions().timeZone,ne=2;let ee;try{H==="Africa/Khartoum"?ee=new Date().getHours():ee=(new Date().getUTCHours()+ne)%24}catch{ee=(new Date().getUTCHours()+ne)%24}return ee<12?"صباح الخير":ee<18?"مساء الخير":"مساء النور"};T.useEffect(()=>{P({auth:Qe,db:Jn});const H=cd(Qe,ne=>{D(ne?ne.uid:null),U(!0)});return()=>H()},[]),T.useEffect(()=>{if(!j)return;let H=()=>{};if(x&&(A!=null&&A.db)){const ne=Xn(A.db,"users",x);H=Yx(ne,ee=>{if(console.log("Snapshot exists?",ee.exists()),console.log("Data:",ee.data()),ee.exists()){const pe=ee.data();S({fullName:pe.name||"ضيف جديد",photoURL:pe.photoURL||"https://placehold.co/100x100/10b981/ffffff?text=U"})}else S({fullName:"ضيف جديد",photoURL:"https://placehold.co/100x100/10b981/ffffff?text=U"});p(!1)},ee=>{console.error("profile onSnapshot error:",ee),S({fullName:"مستخدم",photoURL:"https://placehold.co/100x100/333333/ffffff?text=?"}),p(!1)})}else j&&!x&&(S({fullName:"مستخدم غير معروف",photoURL:"https://placehold.co/100x100/333333/ffffff?text=?"}),p(!1));return()=>H()},[j,x,A]),T.useEffect(()=>{(async()=>{await new Promise(ee=>setTimeout(ee,350)),b([{id:"computer",name:"الحاسوب",path:"maincomdep",description:"مسار الحاسوب التفاعلي",icon:c.jsx(mT,{})},{id:"firstaid",path:"firstaid",name:"الإسعافات الأولية",description:"أساسيات الإسعاف الأولي",icon:c.jsx(yT,{})},{id:"math",path:"mathdep",name:"الرياضيات",description:"تطوير المهارات الحسابية",icon:c.jsx(om,{})},{id:"physics",path:"physicdep",name:"الفيزياء",description:"مقدمات في الفيزياء",icon:c.jsx(da,{})}])})()},[]),T.useEffect(()=>{const H=setTimeout(()=>d(!1),4e3),ne=new IntersectionObserver(ee=>{ee.forEach(pe=>{pe.isIntersecting&&pe.target.classList.add("visible")})},{threshold:.3});return y.current&&ne.observe(y.current),()=>{clearTimeout(H),ne.disconnect()}},[]);const R=async()=>{try{await v_(A.auth),window.location.href="/login",w("تم تسجيل الخروج بنجاح!","success")}catch(H){console.error("logout error:",H),w("فشل تسجيل الخروج.","error")}},N=()=>e(H=>!H),E=`
    @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;800;900&display=swap');
    .font-\\[Tajawal\\] { font-family: 'Tajawal', sans-serif !important; }
    .animate-bounce-slow { animation: bounce-slow 3s infinite; }
    @keyframes bounce-slow { 0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);} }
    .animate-icon-bounce{ transition: transform 0.5s; }
    .animate-icon-bounce:hover{ transform: translateY(-5px) scale(1.1); }
    .bg-pattern{ background-image: radial-gradient(#22c55e11 1px, transparent 1px), radial-gradient(#3b82f611 1px, transparent 1px); background-position: 0 0, 40px 40px; background-size: 80px 80px; }
    ::-webkit-scrollbar{ width:8px; height:8px; }
    ::-webkit-scrollbar-track{ background: #1f2937; border-radius:10px; }
    ::-webkit-scrollbar-thumb{ background: #34d399; border-radius:10px; border:2px solid #1f2937; }
    ::-webkit-scrollbar-thumb:hover{ background:#10b981; }
  `;if(m)return c.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center font-[Tajawal] bg-gray-900 text-white",dir:"rtl",children:[c.jsxs("svg",{className:"animate-spin h-10 w-10 text-green-400 mb-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[c.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),c.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),c.jsx("div",{className:"text-xl font-bold text-green-400 animate-pulse",children:"جاري تحميل منصة بلــــــيرن..."})]});const ye=()=>c.jsxs(c.Fragment,{children:[c.jsx("div",{className:`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 ${t?"opacity-100 visible":"opacity-0 invisible"}`,onClick:()=>r(!1)}),c.jsxs("aside",{className:`fixed top-0 right-0 h-full w-64 p-6 z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${n?"bg-gray-900 text-white border-l border-green-700/50":"bg-white text-gray-800 border-l border-green-200"} ${t?"translate-x-0":"translate-x-full"}`,children:[c.jsxs("div",{className:"flex flex-col mb-6 pb-4 border-b border-green-600/50 flex-shrink-0",children:[c.jsxs("div",{className:"flex justify-between items-center mb-4",children:[c.jsx("h1",{className:"text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 drop-shadow-lg",children:"بلــــــيرن"}),c.jsx(ot,{onClick:()=>r(!1),color:"inherit",className:"p-1 rounded-full bg-red-500/10 hover:bg-red-500/20",children:c.jsx(fT,{className:"text-red-400"})})]}),c.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 dark:bg-gray-700/50 shadow-inner cursor-pointer hover:shadow-green-500/50 transition-shadow",onClick:()=>i(!0),children:[c.jsx(pn,{src:C==null?void 0:C.photoURL,alt:(C==null?void 0:C.fullName)||"U",sx:{width:48,height:48,border:"2px solid #4ade80"}}),c.jsx("span",{className:"font-extrabold text-lg text-green-300",children:(C==null?void 0:C.fullName)||"مستخدم"})]})]}),c.jsxs("nav",{className:"space-y-4 overflow-y-auto flex-1 pb-4",children:[c.jsx("h4",{className:"text-sm font-bold uppercase tracking-wider text-green-400 opacity-80",children:"القائمة الرئيسية"}),c.jsxs("a",{href:"#hero",onClick:()=>r(!1),className:"flex items-center gap-4 text-lg font-medium py-3 px-2 rounded-xl transition-all duration-200 hover:bg-green-600/30 hover:text-green-300 hover:shadow-md",children:[c.jsx("span",{className:"text-green-400",children:c.jsx(gT,{})}),"الرئيسية"]}),c.jsx("h4",{className:"pt-4 text-sm font-bold uppercase tracking-wider text-blue-400 opacity-80 border-t border-gray-700/50",children:"البرامج التعليمية"}),$.map(H=>c.jsxs("a",{onClick:()=>{var ne;_(H.path,(ne=Qe.currentUser)==null?void 0:ne.uid),r(!1)},className:"flex items-center gap-4 text-lg font-medium py-3 px-2 rounded-xl transition-all duration-200 hover:bg-blue-600/30 hover:text-blue-300 hover:shadow-md",children:[c.jsx("span",{className:"text-blue-400",children:H.icon}),H.name]},H.id))]}),c.jsxs("div",{className:"mt-6 pt-4 border-t border-gray-700/50 flex justify-around flex-shrink-0",children:[c.jsx(ot,{onClick:N,title:"تبديل الثيم",className:"p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20",children:c.jsx(ml,{className:"text-blue-400"})}),c.jsx(ot,{onClick:R,title:"تسجيل الخروج",className:"p-3 rounded-full bg-red-500/10 hover:bg-red-500/20",children:c.jsx(_T,{className:"text-red-400"})}),c.jsx(ot,{title:"الإشعارات",className:"p-3 rounded-full bg-yellow-500/10 hover:bg-yellow-500/20",children:c.jsx(wT,{className:"text-yellow-400"})})]})]})]});return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:E}),c.jsxs("div",{className:`min-h-screen font-[Tajawal] flex ${n?"bg-gray-900 text-white":"bg-green-50 text-gray-800"} bg-pattern`,dir:"rtl",lang:"ar",children:[c.jsx(ye,{}),c.jsx(j1,{isOpen:s,onClose:()=>i(!1),userData:C,userId:x,fb:A,appId:"default-app-id",darkMode:n,showToast:w}),c.jsxs("div",{className:"flex-1 flex flex-col transition-all duration-300",children:[c.jsx(ma,{position:"sticky",className:"shadow-2xl",children:c.jsxs(pa,{className:"flex justify-between w-full p-2 sm:p-4 bg-gradient-to-l from-green-600/90 to-blue-600/90 backdrop-blur-sm shadow-xl",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx(ot,{onClick:()=>r(!0),color:"inherit",title:"قائمة التنقل",children:c.jsx(vT,{className:"text-white hover:scale-110 transition-transform"})}),c.jsx("h1",{className:"text-3xl font-black text-white ml-2 drop-shadow-md",children:"بلــــــيرن"})]}),c.jsxs("div",{className:"flex items-center gap-3 p-1 rounded-full bg-white/10 pr-4 transition-all duration-300 hover:bg-white/20 cursor-pointer",onClick:()=>i(!0),children:[c.jsx(pn,{src:C==null?void 0:C.photoURL,alt:(C==null?void 0:C.fullName)||"U",sx:{width:40,height:40,border:"2px solid white"}}),c.jsx("span",{className:"font-extrabold text-white text-base hidden sm:inline drop-shadow",children:(C==null?void 0:C.fullName)||"مستخدم"})]})]})}),c.jsx(ep,{in:u,timeout:2e3,children:c.jsxs("div",{className:"w-full py-3 text-center text-xl font-black text-white bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 shadow-2xl",children:[I()," 👋 ",(C==null?void 0:C.fullName)||"مستخدم","!"]})}),c.jsxs("main",{className:"flex-1 w-full p-4 sm:p-8",children:[c.jsxs("section",{id:"hero",className:`py-20 max-w-7xl mx-auto w-full text-center rounded-3xl shadow-2xl mb-12 ${n?"bg-gray-800/80":"bg-white/90"}`,children:[c.jsxs("h2",{className:"text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 leading-tight drop-shadow-lg",children:["انطلق في رحلة"," ",c.jsx("span",{className:"text-yellow-400 animate-pulse",children:"التعلم"})," ","باللعب!"]}),c.jsx("p",{className:"text-2xl opacity-90 font-medium max-w-3xl mx-auto mb-10 text-gray-300 dark:text-gray-400",children:"منصة **بلــــــيرن** هي بوابتك نحو تجربة تعليمية ممتعة، حيث يتحول كل درس إلى لعبة مثيرة تطلق العنان لإبداعك."})]}),c.jsxs("section",{id:"programs-overview",className:"py-12 max-w-7xl mx-auto w-full",children:[c.jsx("h2",{className:"text-4xl font-black mb-10 text-purple-400 text-center",children:"برامجنا التعليمية المبتكرة 💡"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6",children:$.map(H=>c.jsx(tp,{elevation:10,id:H.id,className:`rounded-2xl p-6 transition-all duration-300 hover:scale-[1.05] cursor-pointer shadow-xl border-b-4 ${n?"bg-gray-800 hover:bg-gray-700 border-purple-500":"bg-white hover:bg-gray-50 border-purple-400"}`,children:c.jsxs("div",{className:"flex flex-col items-center text-center gap-3",children:[c.jsx("span",{className:"text-4xl text-purple-400 mb-2 p-3 rounded-full bg-purple-500/10",children:H.icon}),c.jsx("h3",{className:"text-xl font-extrabold text-purple-400",children:H.name}),c.jsx("p",{className:"mt-2 text-sm opacity-80",children:H.description}),c.jsx("button",{onClick:()=>{var ne;return _(H.path,(ne=Qe.currentUser)==null?void 0:ne.uid)},className:"mt-2 py-2 px-6 text-xl rounded-full font-extrabold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-[0.98] border-b-4 border-green-700",children:"ابداً اللعب الآن"})]})},H.id))})]})]}),c.jsx(np,{open:o.length>0,autoHideDuration:3e3,onClose:()=>l(H=>H.slice(1)),anchorOrigin:{vertical:"bottom",horizontal:"left"},children:o[0]?c.jsx(rp,{onClose:()=>l(H=>H.slice(1)),severity:o[0].type||"success",sx:{width:"100%",fontFamily:"Tajawal"},children:o[0].message}):null}),c.jsxs("footer",{ref:y,className:`relative w-full overflow-hidden py-20 px-4 sm:px-8 transition-all duration-700 ${n?"bg-gray-900 text-white":"bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"}`,children:[c.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-4xl font-extrabold mb-4 text-green-500",children:c.jsx("span",{className:"inline-block animate-bounce-slow",children:"بلــــــيرن"})}),c.jsx("p",{className:"mb-6 leading-relaxed text-base opacity-90",children:"منصة تعليمية تفاعلية مبتكرة تقدم تجربة تعلم عبر الألعاب مصممة لتنمية مهاراتك بطريقة إبداعية."}),c.jsx("div",{className:"flex gap-4 mt-4 flex-wrap",children:[{icon:"https://cdn-icons-png.flaticon.com/512/733/733585.png",url:"https://wa.me/+249997922457",alt:"WhatsApp"},{icon:"https://cdn-icons-png.flaticon.com/512/2111/2111646.png",url:"https://t.me/Mohamed_albasher",alt:"Telegram"},{icon:"https://cdn-icons-png.flaticon.com/512/733/733547.png",url:"https://facebook.com",alt:"Facebook"},{icon:"https://cdn-icons-png.flaticon.com/512/561/561127.png",url:"mailto:info@Plarn.com",alt:"Email"}].map((H,ne)=>c.jsx("a",{href:H.url,target:"_blank",rel:"noopener noreferrer",className:"transform transition duration-500 hover:scale-110 hover:-translate-y-1 animate-icon-bounce p-1 rounded-full bg-white shadow-xl",children:c.jsx("img",{src:H.icon,alt:H.alt,className:"w-8 h-8 md:w-10 md:h-10",onError:ee=>{ee.target.onerror=null,ee.target.src="https://placehold.co/40x40/cccccc/000000?text=S"}})},ne))})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-2xl font-bold mb-4 text-green-500",children:"روابط سريعة"}),c.jsxs("ul",{className:"space-y-3 text-base",children:[c.jsx("li",{className:"opacity-80",children:c.jsx("a",{href:"#hero",className:"hover:text-green-400 transition-colors",children:"العودة إلى الأعلى"})}),c.jsx("li",{className:"opacity-80",children:c.jsx("a",{href:"#games",className:"hover:text-green-400 transition-colors",children:"استعراض الألعاب"})}),c.jsx("li",{className:"opacity-80",children:c.jsx("a",{href:"#about",className:"hover:text-green-400 transition-colors",children:"حول بليرن"})})]})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-2xl font-bold mb-4 text-green-500",children:"تواصل معنا"}),c.jsx("p",{className:"text-base",children:"نحن هنا للإجابة على جميع استفساراتك."}),c.jsx("p",{className:"mt-2 text-green-400 font-semibold",children:"info@Plarn.com"}),c.jsx("p",{className:"text-green-400 font-semibold",children:"+24997922457"})]})]}),c.jsxs("div",{className:"mt-16 border-t border-gray-300 dark:border-gray-700 pt-6 text-center space-y-2 text-sm",children:[c.jsx("p",{className:"text-base font-semibold",children:"© 2025 بلــــــيرن. جميع الحقوق محفوظة."}),c.jsx("div",{className:"flex justify-center gap-6 mt-2",children:c.jsx("a",{href:"#privacy",className:"hover:text-green-400 transition-colors",children:"سياسة الخصوصية"})})]})]})]})]})]})}function L1(){return c.jsx(ip,{maxWidth:"md",className:"min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 text-center",children:c.jsxs(Vn.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.6},className:"space-y-6",children:[c.jsx(_o,{variant:"h2",className:"text-6xl font-bold text-indigo-600 dark:text-white",children:"404"}),c.jsx(_o,{variant:"h5",className:"text-xl text-gray-700 dark:text-gray-300",children:"الصفحة غير موجودة"}),c.jsx(_o,{variant:"body1",className:"text-gray-600 dark:text-gray-400",children:"يبدو أنك وصلت إلى رابط غير صالح أو أن الصفحة لم تعد موجودة."}),c.jsx(ze,{component:Kt,to:"/",variant:"contained",className:"!bg-indigo-500 hover:!bg-indigo-600 !text-white !px-6 !py-2 !rounded-full !shadow-md",children:"العودة إلى الصفحة الرئيسية"})]})})}const jo=[{hint:"ما هو الهدف الأساسي من دراسة المشكلات البرمجية؟",options:["تطوير لغات برمجة جديدة","فهم المشكلة وتحليلها لإيجاد الحل المناسب","إنشاء ألعاب إلكترونية معقدة","زيادة سرعة الحاسوب"],answer:"فهم المشكلة وتحليلها لإيجاد الحل المناسب"},{hint:"ما هي الخوارزمية؟",options:["لغة برمجة عالية المستوى","مجموعة من الخطوات المنطقية والمتسلسلة لحل مشكلة معينة","برنامج جاهز لتنفيذ مهمة محددة","أداة لتصميم واجهات المستخدم"],answer:"مجموعة من الخطوات المنطقية والمتسلسلة لحل مشكلة معينة"},{hint:"من هو العالم الذي نسبت إليه تسمية 'الخوارزمية'؟",options:["أحمد بن موسى الخوارزمي","ابن الهيثم","جابر بن حيان","البتاني"],answer:"أحمد بن موسى الخوارزمي"},{hint:"ما هي إحدى خصائص الخوارزمية الجيدة؟",options:["أن تكون مكتوبة بلغة برمجة معينة","أن تكون غامضة وغير واضحة","أن تكون عامة ويمكن تطبيقها على أي مدخلات","أن تكون طويلة ومعقدة"],answer:"أن تكون عامة ويمكن تطبيقها على أي مدخلات"},{hint:"ماذا يمثل رمز المستطيل في المخططات الانسيابية؟",options:["البداية أو النهاية","عملية معالجة البيانات","إدخال أو إخراج البيانات","قرار أو اختيار"],answer:"عملية معالجة البيانات"},{hint:"ماذا يمثل رمز المعين (الماس) في المخططات الانسيابية؟",options:["إدخال البيانات","إخراج البيانات","قرار أو اختيار","نقطة ربط"],answer:"قرار أو اختيار"},{hint:"ما هو المخطط الانسيابي الذي يستخدم لتوضيح تسلسل الخطوات في حل مشكلة بسيطة؟",options:["مخطط التفرع","المخطط البسيط","مخطط التكرار","مخطط الربط"],answer:"المخطط البسيط"},{hint:"أي من أنواع المخططات الانسيابية يستخدم لتكرار مجموعة من التعليمات لعدد محدد من المرات؟",options:["مخطط التفرع","المخطط البسيط","مخطط التكرار","مخطط الربط"],answer:"مخطط التكرار"},{hint:"في مرحلة 'تحليل المشكلة' لحل مشكلة برمجية، ماذا نقصد بالمدخلات؟",options:["النتائج النهائية للبرنامج","العمليات التي يقوم بها الحاسوب","البيانات الأساسية المتعلقة بالمشكلة","الأخطاء البرمجية"],answer:"البيانات الأساسية المتعلقة بالمشكلة"},{hint:"ما هو الغرض من مرحلة 'اختبار البرنامج' في دورة حياة تطوير البرنامج؟",options:["كتابة الشفرة البرمجية","تصميم واجهة المستخدم","التأكد من أن البرنامج يحقق الهدف المطلوب وخالٍ من الأخطاء","تحديد المشكلة البرمجية"],answer:"التأكد من أن البرنامج يحقق الهدف المطلوب وخالٍ من الأخطاء"}],M1=ie.forwardRef(function(e,t){return c.jsx(op,{direction:"up",ref:t,...e})});function U1(){const[n,e]=T.useState(!0),[t,r]=T.useState(0),[s,i]=T.useState(0),[o,l]=T.useState(!1),[u,d]=T.useState({open:!1,type:"",text:""}),[m,p]=T.useState(!1),v=T.useRef(null),_=T.useRef(null),A=()=>{if(v.current)try{v.current.currentTime=0,v.current.play()}catch{}},P=()=>{if(_.current)try{_.current.currentTime=0,_.current.play()}catch{}},x=()=>e(U=>!U),D=U=>{if(m||o)return;const $=jo[t];if(U===$.answer)A(),d({open:!0,type:"success",text:"🎉 إجابة صحيحة! سيتم الانتقال للسؤال التالي تلقائيًا."}),p(!0),setTimeout(()=>{t<jo.length-1?r(b=>b+1):(d({open:!0,type:"finished",text:"🎯 لقد أجبت على جميع الأسئلة! ستبدأ اللعبة من جديد."}),r(0)),p(!1)},1500);else{P();const b=Math.min(6,s+1);i(b),b>=6?(l(!0),p(!0),d({open:!0,type:"fail",text:"☠️ تم شنق الرجل! حاول مرة أخرى."})):d({open:!0,type:"error",text:`❌ إجابة خاطئة! المحاولة ${b} / 6`})}},C=()=>{d(U=>({...U,open:!1})),u.type==="fail"&&S()},S=()=>{r(0),i(0),l(!1),p(!1),d({open:!1,type:"",text:""})},j=jo[t];return c.jsxs("div",{className:`min-h-screen font-[Tajawal] flex flex-col ${n?"bg-gray-900 text-white":"bg-green-50 text-gray-800"}`,dir:"rtl",lang:"ar",children:[c.jsx("audio",{ref:v,src:"/../public/sound/correct.mp3",preload:"auto"}),c.jsx("audio",{ref:_,src:"/../public/sound/wrong.mp3",preload:"auto"}),c.jsx(ma,{position:"static",className:`${n?"bg-gray-800":"bg-white"} shadow-md`,children:c.jsxs(pa,{className:"flex justify-between items-center w-full relative",children:[c.jsx("div",{className:"flex items-center gap-2",children:c.jsx("span",{className:"text-lg font-bold text-green-500",children:"بلــــــيرن"})}),c.jsx("span",{className:"absolute left-1/2 transform -translate-x-1/2 text-lg font-bold text-green-500",children:"لعبة الرجل المشنوق"}),c.jsxs("div",{className:"flex items-center gap-2 z-10",children:[c.jsx(ot,{onClick:()=>window.history.back(),color:"inherit",title:"العودة",children:c.jsx(ar,{className:"text-red-400"})}),c.jsx(ot,{onClick:x,color:"inherit",children:c.jsx(ml,{className:"text-blue-400"})})]})]})}),c.jsxs("main",{className:"flex-1 px-6 py-8 text-center",children:[c.jsx("h2",{className:"text-2xl font-bold mb-4 text-green-400",children:"خمن الإجابة الصحيحة"}),c.jsx("p",{className:"mb-8 text-gray-300",children:j.hint}),c.jsxs("div",{className:`relative mx-auto mb-6 transition-all duration-500 ${n?"border-gray-500":"border-gray-800"}`,style:{width:"200px",height:"260px",borderLeft:`5px solid ${n?"#888":"#222"}`,borderTop:`5px solid ${n?"#888":"#222"}`},children:[c.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2",style:{width:"3px",height:"50px",background:n?"#999":"#000"}}),c.jsx("div",{className:"absolute top-[50px] left-1/2 transform -translate-x-1/2",style:{width:"40px",height:"40px",borderRadius:"50%",border:`3px solid ${n?"#ccc":"#111"}`,display:s>=1?"block":"none"}}),c.jsx("div",{className:"absolute top-[90px] left-1/2 transform -translate-x-1/2",style:{width:"3px",height:"60px",background:n?"#ccc":"#111",display:s>=2?"block":"none"}}),c.jsx("div",{className:"absolute top-[100px] left-[calc(50%-25px)]",style:{width:"25px",height:"3px",background:n?"#ccc":"#111",display:s>=3?"block":"none"}}),c.jsx("div",{className:"absolute top-[100px] left-1/2",style:{width:"25px",height:"3px",background:n?"#ccc":"#111",display:s>=4?"block":"none"}}),c.jsx("div",{className:"absolute top-[150px] left-[calc(50%-20px)]",style:{width:"25px",height:"3px",transform:"rotate(-30deg)",background:n?"#ccc":"#111",display:s>=5?"block":"none"}}),c.jsx("div",{className:"absolute top-[150px] left-1/2",style:{width:"25px",height:"3px",transform:"rotate(30deg)",background:n?"#ccc":"#111",display:s>=6?"block":"none"}})]}),c.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-6",children:j.options.map(U=>c.jsx("button",{className:`px-6 py-3 rounded-lg font-bold transition-all ${n?"bg-green-600 hover:bg-green-700":"bg-green-300 hover:bg-green-400"}`,onClick:()=>D(U),disabled:m||o,children:U},U))}),c.jsxs("div",{className:"text-lg font-semibold",children:["المحاولات: ",s," / 6"]})]}),c.jsx("footer",{className:`relative w-full overflow-hidden py-20 px-8 transition-all duration-700 ${n?"bg-gray-900 text-white":"bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"}`,children:c.jsx("div",{className:"text-center text-sm mt-4",children:"© 2025 بلــــــيرن. جميع الحقوق محفوظة."})}),c.jsxs(ga,{open:u.open,onClose:C,TransitionComponent:M1,keepMounted:!0,PaperProps:{style:{borderRadius:16,padding:8,minWidth:320,overflow:"hidden"}},children:[c.jsx(ya,{style:{textAlign:"center",fontWeight:800,color:u.type==="success"?"#064E3B":u.type==="error"||u.type==="fail"?"#7f1d1d":"#0f172a",background:u.type==="success"?"linear-gradient(90deg,#bbf7d0,#86efac)":u.type==="error"||u.type==="fail"?"linear-gradient(90deg,#fecaca,#fda4af)":"linear-gradient(90deg,#e0f2fe,#bae6fd)",padding:"18px 12px"},children:u.type==="success"?"نجاح":u.type==="error"?"خطأ":u.type==="fail"?"تم الشنق!":"معلومة"}),c.jsx(uh,{style:{textAlign:"center",padding:"24px 18px",fontSize:18,color:"#0f172a"},children:u.text}),c.jsx(_a,{style:{justifyContent:"center",paddingBottom:18},children:c.jsx(ze,{onClick:C,variant:"contained",style:{background:u.type==="fail"?"linear-gradient(90deg,#dc2626,#fb7185)":"#3b82f6",color:"white",padding:"10px 24px",borderRadius:12,fontWeight:700},children:u.type==="fail"?"أعد المحاولة":"إغلاق"})})]})]})}const Ls=["begin.jpg","end.jpg","process.jpg","in-out.jpg","point.jpg","arow.jpg","decision.jpg"];function F1(){const[n,e]=T.useState(!0),[t,r]=T.useState([]),[s,i]=T.useState([]),[o,l]=T.useState([]),[u,d]=T.useState(!1),[m,p]=T.useState({open:!1,message:"",color:"green"}),v=new Audio("/sound/correct.mp3"),_=new Audio("/sound/wrong.mp3"),A=()=>{const S=[...Ls,...Ls],j=$1(S).map((U,$)=>({id:$,img:U,flipped:!1}));r(j),i([]),l([]),p({open:!1,message:"",color:"green"})};T.useEffect(()=>{A(),setTimeout(()=>d(!0),500)},[]),T.useEffect(()=>{if(s.length===2){const[S,j]=s;t[S].img===t[j].img?(v.play(),l(U=>[...U,t[S].img]),i([])):(_.play(),setTimeout(()=>{r(U=>U.map(($,b)=>s.includes(b)?{...$,flipped:!1}:$)),i([])},1e3))}},[s,t]),T.useEffect(()=>{o.length===Ls.length&&p({open:!0,message:"🏁 لقد انتهت اللعبة! أحسنت!",color:"blue"})},[o]);const P=S=>{s.length<2&&!t[S].flipped&&(r(j=>j.map((U,$)=>$===S?{...U,flipped:!0}:U)),i(j=>[...j,S]))},x=()=>e(S=>!S),D=()=>{p(S=>({...S,open:!1}))},C=Math.ceil(Math.sqrt(t.length));return c.jsxs("div",{className:`min-h-screen font-[Tajawal] flex flex-col ${n?"bg-gray-900 text-white":"bg-green-50 text-gray-800"}`,dir:"rtl",lang:"ar",children:[c.jsx(ma,{position:"static",className:`${n?"bg-gray-800":"bg-white"} shadow-md`,children:c.jsxs(pa,{className:"relative flex items-center justify-between w-full",children:[c.jsxs("div",{className:"flex items-center gap-2 z-10",children:[c.jsx("img",{src:hs,alt:"Logo",className:"w-10 h-10 object-contain"}),c.jsx("span",{className:"text-lg font-bold text-green-500",children:"بلــــــيرن"})]}),c.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 z-0",children:c.jsx("span",{className:"text-xl font-bold text-green-400",children:"لعبة الذاكرة"})}),c.jsxs("div",{className:"flex items-center gap-2 z-10",children:[c.jsx(ot,{onClick:()=>window.history.back(),color:"inherit",title:"العودة",children:c.jsx(ar,{className:"text-red-400"})}),c.jsx(ot,{onClick:x,color:"inherit",children:c.jsx(ml,{className:"text-blue-400"})})]})]})}),c.jsxs("main",{className:"flex-1 px-6 py-8",children:[c.jsx("h2",{className:"text-2xl font-bold mb-6 text-green-400",children:"لعبة الذاكرة"}),c.jsx("p",{className:"mb-6 text-gray-300",children:"اضغط على أي بطاقة للكشف عن الصورة وحاول مطابقة البطاقات المتشابهة."}),c.jsx("div",{className:"memory-game-blocks grid gap-4 mx-auto",style:{gridTemplateColumns:`repeat(${C}, minmax(80px, 1fr))`,gridTemplateRows:`repeat(${C}, minmax(80px, 1fr))`,maxWidth:"600px"},children:t.map((S,j)=>c.jsxs("div",{className:`game-block ${S.flipped?"is-flipped":""}`,onClick:()=>P(j),children:[c.jsx("div",{className:"face front",children:c.jsx("img",{src:"../imgs/logo.jpg",alt:"Logo",style:{width:"100%",height:"100%",objectFit:"cover"}})}),c.jsx("div",{className:"face back",children:c.jsx("img",{src:`/imgs/${S.img}`,alt:S.img,style:{width:"100%",height:"100%",objectFit:"cover"}})})]},S.id))})]}),c.jsxs(ga,{open:m.open,onClose:D,children:[c.jsx(ya,{style:{color:m.color==="green"?"green":m.color==="red"?"red":"blue"},children:m.message}),c.jsx(_a,{children:o.length===Ls.length?c.jsx(ze,{onClick:A,color:"primary",variant:"contained",children:"🔁 إعادة المحاولة"}):c.jsx(ze,{onClick:D,color:"primary",children:"حسناً"})})]}),c.jsx("footer",{className:`relative w-full overflow-hidden py-20 px-8 transition-all duration-700 ${u?"opacity-100 translate-y-0":"opacity-0 translate-y-12"} ${n?"bg-gray-900 text-white":"bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"}`,children:c.jsx("div",{className:"text-center text-sm mt-4",children:"© 2025 بلــــــيرن. جميع الحقوق محفوظة."})})]})}function $1(n){let e=n.length,t,r;for(;e>0;)r=Math.floor(Math.random()*e),e--,t=n[e],n[e]=n[r],n[r]=t;return n}function B1(){const n=He(),e=vt(),t=x=>{if(!x){showToast("المسار غير متاح حالياً.","info");return}e(`/${x}`)},{userData:r,darkMode:s}=n.state||{},i=localStorage.getItem("userData"),o=r||(i?JSON.parse(i):null),l=(o==null?void 0:o.fullName)||"مستخدم غير معروف",u=(o==null?void 0:o.photoURL)||"https://placehold.co/100x100/10b981/ffffff?text=U",[d,m]=T.useState(!1);T.useEffect(()=>{const x=setTimeout(()=>m(!0),2e3);return()=>clearTimeout(x)},[]);const p=(o==null?void 0:o.progress_array)||[{label:"الوحدة الأولى: أساسيات البرمجة",percentage:50,color:"teal"},{label:"الوحدة الثانية: مدخل للغات البرمجة",percentage:20,color:"pink"},{label:"الوحدة الثالثة: الخوارزميات والمخططات",percentage:0,color:"amber"},{label:"الوحدة الرابعة: مبادئ البرمجة بلغة سكراتش",percentage:0,color:"sky"}],v=["مدخل إلى البرمجة","المكونات المادية للحاسوب","الخوارزميات والمخططات الانسيابية","برمجة بلغة جافا سكربت","التعامل مع البيانات"],_=[{title:"مسابقة أفضل مشروع بلغة سكراتش!",subtitle:"آخر موعد 1 نوفمبر.",color:"amber"},{title:"ورشة عمل: حل المشكلات بالخوارزميات",subtitle:"يوم الثلاثاء القادم.",color:"teal"}],A=[{title:"مختبر سكراتش",category:"الوحدة 4",level:"سهل",levelColor:"green",icon:c.jsx(gl,{})},{title:"مغامرة الخوارزميات",category:"الوحدة 3",level:"متوسط",levelColor:"yellow",icon:c.jsx(qi,{})},{title:"رحلة المترجم",category:"الوحدة 2",level:"صعب",levelColor:"red",icon:c.jsx(am,{})},{title:"صائد الأخطاء",category:"الوحدة 1",level:"متوسط",levelColor:"yellow",icon:c.jsx(Ys,{})},{path:"hangman",title:"لعبة الرجل المشنوق",level:"متوسط",levelColor:"yellow",icon:c.jsx(Ys,{})},{path:"memorycard",title:"لعبة الزاكرة",level:"متوسط",levelColor:"yellow",icon:c.jsx(Ys,{})}],P=(x,D)=>{p[x].percentage=Math.min(100,p[x].percentage+D)};return c.jsxs("div",{className:`min-h-screen font-[Tajawal] ${s?"bg-gray-900 text-white":"bg-green-50 text-gray-800"} flex flex-col items-center justify-start py-6 px-6`,dir:"rtl",children:[c.jsxs("div",{className:`w-full max-w-5xl flex justify-between items-center p-4 mb-6 rounded-2xl shadow-lg ${s?"bg-gray-800/70":"bg-white"}`,children:[c.jsxs("div",{className:"flex items-center space-x-4 space-x-reverse",children:[c.jsx(ze,{onClick:()=>e(-1),variant:"outlined",startIcon:c.jsx(ar,{}),className:"bg-white text-green-600 hover:bg-green-100",children:"العودة"}),c.jsx("h1",{className:"text-2xl font-bold text-green-400",children:"منصة بليرن التعليمية"})]}),c.jsxs("div",{className:"flex items-center space-x-4",children:[c.jsx("span",{className:"font-semibold",children:l}),c.jsx(pn,{src:u,alt:l})]})]}),c.jsxs("div",{className:`w-full max-w-3xl rounded-3xl shadow-2xl p-8 text-center mb-6 transition-all duration-700 ${s?"bg-gray-800/80 border border-green-500/40":"bg-white border border-green-400/40"}`,children:[c.jsxs("h1",{className:"text-3xl font-extrabold mt-4 text-green-400 drop-shadow-lg animate-fadeIn",children:["مرحباً ",l,"! 👋"]}),c.jsx("p",{className:"text-lg mt-2 opacity-80",children:"أهلاً بك في قسم الحاسوب التفاعلي — استعد لخوض تجربة تعليمية ممتعة!"})]}),d&&c.jsxs("div",{className:"container max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:`rounded-2xl p-6 shadow-lg ${s?"bg-gray-800/60":"bg-white"}`,children:[c.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center",children:[c.jsx(pl,{className:"ml-2 text-teal-500"})," تقدمي الدراسي"]}),p.map((x,D)=>c.jsxs("div",{className:"mb-4 group",children:[c.jsxs("div",{className:"flex justify-between mb-1 font-semibold",children:[x.label," ",c.jsxs("span",{children:[x.percentage,"%"]})]}),c.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 h-5 rounded-full overflow-hidden",children:c.jsx("div",{className:`h-full bg-gradient-to-r ${{teal:"from-teal-400 to-cyan-500",pink:"from-pink-500 to-rose-500",amber:"from-amber-400 to-orange-500",sky:"from-sky-400 to-blue-500"}[x.color]} rounded-full transition-all duration-1000 flex justify-center items-center group-hover:scale-x-[1.05]`,style:{width:`${x.percentage}%`},children:x.percentage>=100&&c.jsx(Hi,{fontSize:"small",className:"text-white"})})}),c.jsx(ze,{onClick:()=>P(D,10),disabled:x.percentage>=100,variant:"contained",size:"small",className:"mt-1",children:"+10%"})]},D))]}),c.jsxs("div",{className:`rounded-2xl p-6 shadow-lg ${s?"bg-gray-800/70 text-white":"bg-gray-100 text-gray-800"}`,children:[c.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center",children:[c.jsx(zi,{className:"mr-2 text-amber-400"})," الإعلانات"]}),c.jsx("ul",{className:"space-y-3",children:_.map((x,D)=>c.jsxs("li",{className:"relative p-3 rounded cursor-pointer overflow-hidden group border-l-4",style:{borderColor:x.color==="amber"?s?"#FBBF24":"#D97706":s?"#14B8A6":"#059669"},children:[c.jsx("div",{className:`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-700 ${s?"bg-gradient-to-r from-gray-700/50 via-gray-600/50 to-gray-700/50":"bg-gradient-to-r from-yellow-100 via-amber-100 to-yellow-100"}`}),c.jsxs("div",{className:"relative z-10",children:[c.jsx("p",{className:"font-bold",children:x.title}),c.jsx("p",{className:`text-sm ${s?"text-gray-300":"text-gray-700"}`,children:x.subtitle})]})]},D))})]})]}),c.jsxs("div",{className:"space-y-6 lg:col-span-2",children:[c.jsxs("div",{className:`rounded-2xl p-6 shadow-lg ${s?"bg-gray-800/60":"bg-white"}`,children:[c.jsx("h2",{className:"text-2xl font-bold text-green-400 mb-6 text-center",children:"🧩 الدروس التفاعلية"}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:v.map((x,D)=>{const C=["from-green-200 to-green-400","from-pink-200 to-pink-400","from-amber-200 to-amber-400","from-sky-200 to-sky-400","from-purple-200 to-purple-400"],S=["💻","🖥️","📊","📝","📂"];return c.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.1] hover:rotate-2 cursor-pointer group",children:[c.jsx("div",{className:`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 bg-gradient-to-br ${C[D%C.length]}`}),c.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center p-6 text-center",children:[c.jsx("span",{className:"text-3xl mb-4 transition-transform duration-500 hover:animate-bounce",children:S[D%S.length]}),c.jsx("span",{className:"font-bold text-lg",children:x})]})]},D)})})]}),c.jsxs("div",{className:`rounded-2xl p-6 shadow-lg ${s?"bg-gray-900/70":"bg-white"}`,children:[c.jsx("h2",{className:"text-2xl font-bold text-green-400 mb-6 text-center",children:"🎮 الألعاب"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:A.map((x,D)=>{const C=["from-green-400 to-teal-600","from-yellow-400 to-amber-600","from-red-500 to-rose-600","from-pink-400 to-purple-600"],S=["from-teal-600 to-green-400","from-amber-600 to-yellow-400","from-rose-600 to-red-500","from-purple-600 to-pink-400"];return c.jsxs("div",{onClick:()=>{t(x.path)},className:"relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.05] cursor-pointer group",children:[c.jsx("div",{className:`absolute inset-y-0 left-0 w-0 group-hover:w-1/2 transition-all duration-700 bg-gradient-to-r ${C[D%C.length]}`}),c.jsx("div",{className:`absolute inset-y-0 right-0 w-0 group-hover:w-1/2 transition-all duration-700 bg-gradient-to-l ${S[D%S.length]}`}),c.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center p-6 text-center",children:[c.jsx("span",{className:"text-4xl mb-4",children:x.icon}),c.jsx("h4",{className:`font-bold text-lg ${s?"text-white":"text-gray-800"}`,children:x.title}),c.jsx("p",{className:`text-sm mt-1 ${s?"text-gray-300":"text-gray-700"}`,children:x.category}),c.jsx("span",{className:"mt-2 inline-block px-3 py-1 rounded-full bg-white/30 text-white font-semibold w-max",children:x.level})]})]},D)})})]})]})]}),c.jsx("footer",{className:`w-full mt-12 p-6 text-center rounded-t-3xl shadow-inner ${s?"bg-gray-800 text-gray-300":"bg-green-100 text-gray-700"}`,children:"© 2025 منصة بليرن التعليمية. جميع الحقوق محفوظة."}),c.jsx("style",{children:`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fadeIn { animation: fadeIn 0.7s ease forwards; }

          @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
          .animate-bounce { animation: bounce 0.6s infinite; }
        `})]})}function z1(){const n=He(),e=vt(),{userData:t,darkMode:r}=n.state||{},s=(t==null?void 0:t.fullName)||"مستخدم غير معروف",i=(t==null?void 0:t.photoURL)||"https://placehold.co/100x100/10b981/ffffff?text=U",[o,l]=T.useState(!1);T.useEffect(()=>{const _=setTimeout(()=>l(!0),2e3);return()=>clearTimeout(_)},[]);const u=(t==null?void 0:t.progress_array)||[{label:"الوحدة الأولى: الحركة",percentage:50,color:"teal"},{label:"الوحدة الثانية: القوة والضغط",percentage:20,color:"pink"},{label:"الوحدة الثالثة: الطاقة",percentage:0,color:"amber"},{label:"الوحدة الرابعة: الحرارة",percentage:0,color:"sky"}],d=["الحركة والمفاهيم الأساسية","القوة والضغط","الطاقة بأنواعها","الحرارة والانتقال الحراري","الموجات والصوت"],m=[{title:"مسابقة الفيزياء للمرحلة المتوسطة!",subtitle:"آخر موعد 5 نوفمبر.",color:"amber"},{title:"ورشة عمل: التجارب العملية",subtitle:"يوم الخميس القادم.",color:"teal"}],p=[{title:"تجارب الحركة",category:"الوحدة 1",level:"سهل",icon:c.jsx(da,{})},{title:"محاكاة القوى",category:"الوحدة 2",level:"متوسط",icon:c.jsx(qi,{})},{title:"رحلة الطاقة",category:"الوحدة 3",level:"صعب",icon:c.jsx(sh,{})},{title:"اكتشف الحرارة",category:"الوحدة 4",level:"متوسط",icon:c.jsx(da,{})}],v=(_,A)=>{u[_].percentage=Math.min(100,u[_].percentage+A)};return c.jsxs("div",{className:`min-h-screen font-[Tajawal] ${r?"bg-gray-900 text-white":"bg-green-50 text-gray-800"} flex flex-col items-center justify-start py-6 px-6`,dir:"rtl",children:[c.jsxs("div",{className:`w-full max-w-5xl flex justify-between items-center p-4 mb-6 rounded-2xl shadow-lg ${r?"bg-gray-800/70":"bg-white"}`,children:[c.jsxs("div",{className:"flex items-center space-x-4 space-x-reverse",children:[c.jsx(ze,{onClick:()=>e(-1),variant:"outlined",startIcon:c.jsx(ar,{}),className:"bg-white text-green-600 hover:bg-green-100",children:"العودة"}),c.jsx("h1",{className:"text-2xl font-bold text-green-400",children:"منصة بليرن التعليمية"})]}),c.jsxs("div",{className:"flex items-center space-x-4",children:[c.jsx("span",{className:"font-semibold",children:s}),c.jsx(pn,{src:i,alt:s})]})]}),c.jsxs("div",{className:`w-full max-w-3xl rounded-3xl shadow-2xl p-8 text-center mb-6 transition-all duration-700 ${r?"bg-gray-800/80 border border-green-500/40":"bg-white border border-green-400/40"}`,children:[c.jsxs("h1",{className:"text-3xl font-extrabold mt-4 text-green-400 drop-shadow-lg animate-fadeIn",children:["مرحباً ",s,"! 👋"]}),c.jsx("p",{className:"text-lg mt-2 opacity-80",children:"أهلاً بك في قسم الفيزياء للسنة الثالثة متوسط — استعد لخوض تجربة تعليمية ممتعة!"})]}),o&&c.jsxs("div",{className:"container max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:`rounded-2xl p-6 shadow-lg ${r?"bg-gray-800/60":"bg-white"}`,children:[c.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center",children:[c.jsx(sh,{className:"ml-2 text-teal-500"})," تقدمي الدراسي"]}),u.map((_,A)=>c.jsxs("div",{className:"mb-4 group",children:[c.jsxs("div",{className:"flex justify-between mb-1 font-semibold",children:[_.label," ",c.jsxs("span",{children:[_.percentage,"%"]})]}),c.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 h-5 rounded-full overflow-hidden",children:c.jsx("div",{className:`h-full bg-gradient-to-r ${{teal:"from-teal-400 to-cyan-500",pink:"from-pink-500 to-rose-500",amber:"from-amber-400 to-orange-500",sky:"from-sky-400 to-blue-500"}[_.color]} rounded-full transition-all duration-1000 flex justify-center items-center group-hover:scale-x-[1.05]`,style:{width:`${_.percentage}%`},children:_.percentage>=100&&c.jsx(Hi,{fontSize:"small",className:"text-white"})})}),c.jsx(ze,{onClick:()=>v(A,10),disabled:_.percentage>=100,variant:"contained",size:"small",className:"mt-1",children:"+10%"})]},A))]}),c.jsxs("div",{className:`rounded-2xl p-6 shadow-lg ${r?"bg-gray-800/70 text-white":"bg-gray-100 text-gray-800"}`,children:[c.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center",children:[c.jsx(zi,{className:"mr-2 text-amber-400"})," الإعلانات"]}),c.jsx("ul",{className:"space-y-3",children:m.map((_,A)=>c.jsxs("li",{className:"relative p-3 rounded cursor-pointer overflow-hidden group border-l-4",style:{borderColor:_.color==="amber"?r?"#FBBF24":"#D97706":r?"#14B8A6":"#059669"},children:[c.jsx("div",{className:`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-700 ${r?"bg-gradient-to-r from-gray-700/50 via-gray-600/50 to-gray-700/50":"bg-gradient-to-r from-yellow-100 via-amber-100 to-yellow-100"}`}),c.jsxs("div",{className:"relative z-10",children:[c.jsx("p",{className:"font-bold",children:_.title}),c.jsx("p",{className:`text-sm ${r?"text-gray-300":"text-gray-700"}`,children:_.subtitle})]})]},A))})]})]}),c.jsxs("div",{className:"space-y-6 lg:col-span-2",children:[c.jsxs("div",{className:`rounded-2xl p-6 shadow-lg ${r?"bg-gray-800/60":"bg-white"}`,children:[c.jsx("h2",{className:"text-2xl font-bold text-green-400 mb-6 text-center",children:"📚 الدروس التفاعلية"}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:d.map((_,A)=>{const P=["from-green-200 to-green-400","from-pink-200 to-pink-400","from-amber-200 to-amber-400","from-sky-200 to-sky-400","from-purple-200 to-purple-400"],x=["🧲","⚛️","🔥","💨","🔊"];return c.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.1] hover:rotate-2 cursor-pointer group",children:[c.jsx("div",{className:`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 bg-gradient-to-br ${P[A%P.length]}`}),c.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center p-6 text-center",children:[c.jsx("span",{className:"text-3xl mb-4 transition-transform duration-500 hover:animate-bounce",children:x[A%x.length]}),c.jsx("span",{className:"font-bold text-lg",children:_})]})]},A)})})]}),c.jsxs("div",{className:`rounded-2xl p-6 shadow-lg ${r?"bg-gray-900/70":"bg-white"}`,children:[c.jsx("h2",{className:"text-2xl font-bold text-green-400 mb-6 text-center",children:"🎮 الألعاب"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:p.map((_,A)=>{const P=["from-green-400 to-teal-600","from-yellow-400 to-amber-600","from-red-500 to-rose-600","from-pink-400 to-purple-600"],x=["from-teal-600 to-green-400","from-amber-600 to-yellow-400","from-rose-600 to-red-500","from-purple-600 to-pink-400"];return c.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.05] cursor-pointer group",children:[c.jsx("div",{className:`absolute inset-y-0 left-0 w-0 group-hover:w-1/2 transition-all duration-700 bg-gradient-to-r ${P[A%P.length]}`}),c.jsx("div",{className:`absolute inset-y-0 right-0 w-0 group-hover:w-1/2 transition-all duration-700 bg-gradient-to-l ${x[A%x.length]}`}),c.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center p-6 text-center",children:[c.jsx("span",{className:"text-4xl mb-4",children:_.icon}),c.jsx("h4",{className:`font-bold text-lg ${r?"text-white":"text-gray-800"}`,children:_.title}),c.jsx("p",{className:`text-sm mt-1 ${r?"text-gray-300":"text-gray-700"}`,children:_.category}),c.jsx("span",{className:"mt-2 inline-block px-3 py-1 rounded-full bg-white/30 text-white font-semibold w-max",children:_.level})]})]},A)})})]})]})]}),c.jsx("footer",{className:`w-full mt-12 p-6 text-center rounded-t-3xl shadow-inner ${r?"bg-gray-800 text-gray-300":"bg-green-100 text-gray-700"}`,children:"© 2025 منصة بليرن التعليمية. جميع الحقوق محفوظة."}),c.jsx("style",{children:`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.7s ease forwards; }
        @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .animate-bounce { animation: bounce 0.6s infinite; }
      `})]})}function H1(){const n=He(),e=vt(),{userData:t,darkMode:r}=n.state||{},s=(t==null?void 0:t.fullName)||"مستخدم غير معروف",i=(t==null?void 0:t.photoURL)||"https://placehold.co/100x100/10b981/ffffff?text=U",[o,l]=T.useState(!1);T.useEffect(()=>{const _=setTimeout(()=>l(!0),2e3);return()=>clearTimeout(_)},[]);const u=(t==null?void 0:t.progress_array)||[{label:"الوحدة الأولى: أساسيات الرياضيات",percentage:50,color:"teal"},{label:"الوحدة الثانية: الجبر والمعادلات",percentage:20,color:"pink"},{label:"الوحدة الثالثة: الهندسة",percentage:0,color:"amber"},{label:"الوحدة الرابعة: الإحصاء والاحتمالات",percentage:0,color:"sky"}],d=["الأعداد والعمليات الأساسية","الجبر والمعادلات","الهندسة والقياسات","الإحصاء والاحتمالات","حل المسائل التطبيقية"],m=[{title:"مسابقة أفضل مشروع رياضيات!",subtitle:"آخر موعد 10 نوفمبر.",color:"amber"},{title:"ورشة عمل: حل مسائل الهندسة",subtitle:"يوم الخميس القادم.",color:"teal"}],p=[{title:"مختبر الجبر",category:"الوحدة 2",level:"سهل",levelColor:"green",icon:c.jsx(om,{})},{title:"رحلة الهندسة",category:"الوحدة 3",level:"متوسط",levelColor:"yellow",icon:c.jsx(gl,{})},{title:"تحدي الإحصاء",category:"الوحدة 4",level:"صعب",levelColor:"red",icon:c.jsx(dT,{})},{title:"مغامرة المسائل التطبيقية",category:"الوحدة 1",level:"متوسط",levelColor:"yellow",icon:c.jsx(qi,{})}],v=(_,A)=>{u[_].percentage=Math.min(100,u[_].percentage+A)};return c.jsxs("div",{className:`min-h-screen font-[Tajawal] ${r?"bg-gray-900 text-white":"bg-green-50 text-gray-800"} flex flex-col items-center justify-start py-6 px-6`,dir:"rtl",children:[c.jsxs("div",{className:`w-full max-w-5xl flex justify-between items-center p-4 mb-6 rounded-2xl shadow-lg ${r?"bg-gray-800/70":"bg-white"}`,children:[c.jsxs("div",{className:"flex items-center space-x-4 space-x-reverse",children:[c.jsx(ze,{onClick:()=>e(-1),variant:"outlined",startIcon:c.jsx(ar,{}),className:"bg-white text-green-600 hover:bg-green-100",children:"العودة"}),c.jsx("h1",{className:"text-2xl font-bold text-green-400",children:"منصة بليرن التعليمية"})]}),c.jsxs("div",{className:"flex items-center space-x-4",children:[c.jsx("span",{className:"font-semibold",children:s}),c.jsx(pn,{src:i,alt:s})]})]}),c.jsxs("div",{className:`w-full max-w-3xl rounded-3xl shadow-2xl p-8 text-center mb-6 transition-all duration-700 ${r?"bg-gray-800/80 border border-green-500/40":"bg-white border border-green-400/40"}`,children:[c.jsxs("h1",{className:"text-3xl font-extrabold mt-4 text-green-400 drop-shadow-lg animate-fadeIn",children:["مرحباً ",s,"! 👋"]}),c.jsx("p",{className:"text-lg mt-2 opacity-80",children:"أهلاً بك في قسم الرياضيات التفاعلي — استعد لخوض تجربة تعليمية ممتعة!"})]}),o&&c.jsxs("div",{className:"container max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:`rounded-2xl p-6 shadow-lg ${r?"bg-gray-800/60":"bg-white"}`,children:[c.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center",children:[c.jsx(pl,{className:"ml-2 text-teal-500"})," تقدمي الدراسي"]}),u.map((_,A)=>c.jsxs("div",{className:"mb-4 group",children:[c.jsxs("div",{className:"flex justify-between mb-1 font-semibold",children:[_.label," ",c.jsxs("span",{children:[_.percentage,"%"]})]}),c.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 h-5 rounded-full overflow-hidden",children:c.jsx("div",{className:`h-full bg-gradient-to-r ${{teal:"from-teal-400 to-cyan-500",pink:"from-pink-500 to-rose-500",amber:"from-amber-400 to-orange-500",sky:"from-sky-400 to-blue-500"}[_.color]} rounded-full transition-all duration-1000 flex justify-center items-center group-hover:scale-x-[1.05]`,style:{width:`${_.percentage}%`},children:_.percentage>=100&&c.jsx(Hi,{fontSize:"small",className:"text-white"})})}),c.jsx(ze,{onClick:()=>v(A,10),disabled:_.percentage>=100,variant:"contained",size:"small",className:"mt-1",children:"+10%"})]},A))]}),c.jsxs("div",{className:`rounded-2xl p-6 shadow-lg relative overflow-hidden ${r?"bg-gray-800/70":"bg-white"}`,children:[c.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center relative z-10",children:[c.jsx(zi,{className:"mr-2 text-amber-500"})," الإعلانات"]}),c.jsx("ul",{className:"space-y-3 relative z-10",children:m.map((_,A)=>c.jsxs("li",{className:`p-3 rounded border-l-4 relative overflow-hidden ${_.color==="amber"?r?"border-amber-400 bg-amber-900/30":"border-amber-500 bg-amber-50":r?"border-teal-400 bg-teal-900/30":"border-teal-500 bg-teal-50"} group cursor-pointer`,children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"}),c.jsx("p",{className:"font-bold relative z-10",children:_.title}),c.jsx("p",{className:"text-sm relative z-10",children:_.subtitle})]},A))})]})]}),c.jsxs("div",{className:"space-y-6 lg:col-span-2",children:[c.jsxs("div",{className:`rounded-2xl p-6 shadow-lg relative overflow-hidden ${r?"bg-gray-800/60":"bg-white"}`,children:[c.jsx("h2",{className:"text-2xl font-bold text-green-400 mb-6 text-center",children:"🧮 الدروس التفاعلية"}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:d.map((_,A)=>{const P=["from-green-200 to-green-400","from-pink-200 to-pink-400","from-amber-200 to-amber-400","from-sky-200 to-sky-400","from-purple-200 to-purple-400"],x=["➗","✖️","📐","📊","📝"];return c.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.1] hover:rotate-2 cursor-pointer group",children:[c.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${P[A%P.length]} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}),c.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center p-6 text-center",children:[c.jsx("span",{className:"text-3xl mb-4 transition-transform duration-500 hover:animate-bounce",children:x[A%x.length]}),c.jsx("span",{className:"font-bold text-lg",children:_})]})]},A)})})]}),c.jsxs("div",{className:`rounded-2xl p-6 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4 relative overflow-hidden ${r?"bg-gray-800/60":"bg-white"}`,children:[c.jsx("h2",{className:"text-2xl font-bold text-green-400 mb-4 text-center col-span-full",children:"🎮 الألعاب"}),p.map((_,A)=>{const P=["from-green-300 to-green-500","from-yellow-300 to-yellow-500","from-red-300 to-red-500","from-pink-300 to-pink-500"];return c.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.1] cursor-pointer group flex flex-col items-center justify-center p-6 text-center",children:[c.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${P[A%P.length]} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}),c.jsx("span",{className:"text-4xl mb-4 relative z-10 group-hover:rotate-12",children:_.icon}),c.jsx("h4",{className:`font-bold text-lg relative z-10 ${r?"text-white":"text-gray-800"}`,children:_.title}),c.jsx("p",{className:`text-sm mt-1 relative z-10 ${r?"text-gray-300":"text-gray-700"}`,children:_.category}),c.jsx("span",{className:"mt-2 inline-block px-3 py-1 rounded-full bg-white/30 text-white font-semibold w-max relative z-10",children:_.level})]},A)})]})]})]}),c.jsx("footer",{className:`w-full mt-10 py-6 text-center rounded-t-2xl shadow-inner ${r?"bg-gray-800/70 text-gray-300":"bg-green-100 text-gray-800"}`,children:"جميع الحقوق محفوظة © منصة بليرن 2025"}),c.jsx("style",{children:`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fadeIn { animation: fadeIn 0.7s ease forwards; }

          @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
          .animate-bounce { animation: bounce 0.6s infinite; }
        `})]})}function q1(){const n=He(),e=vt(),{userData:t,darkMode:r}=n.state||{},s=(t==null?void 0:t.fullName)||"مستخدم غير معروف",i=(t==null?void 0:t.photoURL)||"https://placehold.co/100x100/10b981/ffffff?text=U",[o,l]=T.useState(!1);T.useEffect(()=>{const _=setTimeout(()=>l(!0),2e3);return()=>clearTimeout(_)},[]);const u=(t==null?void 0:t.progress_array)||[{label:"الوحدة الأولى: أساسيات الإسعافات الأولية",percentage:40,color:"teal"},{label:"الوحدة الثانية: التعامل مع الجروح والإصابات",percentage:10,color:"pink"},{label:"الوحدة الثالثة: الإنعاش القلبي والتنفس الاصطناعي",percentage:0,color:"amber"},{label:"الوحدة الرابعة: إسعافات الحوادث المنزلية",percentage:0,color:"sky"}],d=["مقدمة في الإسعافات الأولية","الجروح والنزيف","الكسور والإصابات العظمية","الإصابات الحرارية والحروق","الإنعاش القلبي الرئوي CPR"],m=[{title:"ورشة عمل الإسعافات الأولية للطلاب",subtitle:"آخر موعد للتسجيل 15 نوفمبر.",color:"amber"},{title:"مسابقة تطبيق الإسعافات",subtitle:"تنطلق يوم الإثنين القادم.",color:"teal"}],p=[{title:"تحدي الجروح",category:"الوحدة 2",level:"سهل",levelColor:"green",icon:c.jsx(gl,{})},{title:"رحلة الإنعاش",category:"الوحدة 3",level:"متوسط",levelColor:"yellow",icon:c.jsx(qi,{})},{title:"مغامرة الحوادث المنزلية",category:"الوحدة 4",level:"صعب",levelColor:"red",icon:c.jsx(am,{})},{title:"تحدي الإسعافات الأولية",category:"الوحدة 1",level:"متوسط",levelColor:"yellow",icon:c.jsx(Ys,{})}],v=(_,A)=>{u[_].percentage=Math.min(100,u[_].percentage+A)};return c.jsxs("div",{className:`min-h-screen font-[Tajawal] ${r?"bg-gray-900 text-white":"bg-green-50 text-gray-800"} flex flex-col items-center justify-start py-6 px-6`,dir:"rtl",children:[c.jsxs("div",{className:`w-full max-w-5xl flex justify-between items-center p-4 mb-6 rounded-2xl shadow-lg ${r?"bg-gray-800/70":"bg-white"}`,children:[c.jsxs("div",{className:"flex items-center space-x-4 space-x-reverse",children:[c.jsx(ze,{onClick:()=>e(-1),variant:"outlined",startIcon:c.jsx(ar,{}),className:"bg-white text-green-600 hover:bg-green-100",children:"العودة"}),c.jsx("h1",{className:"text-2xl font-bold text-green-400",children:"منصة بليرن التعليمية"})]}),c.jsxs("div",{className:"flex items-center space-x-4",children:[c.jsx("span",{className:"font-semibold",children:s}),c.jsx(pn,{src:i,alt:s})]})]}),c.jsxs("div",{className:`w-full max-w-3xl rounded-3xl shadow-2xl p-8 text-center mb-6 transition-all duration-700 ${r?"bg-gray-800/80 border border-green-500/40":"bg-white border border-green-400/40"}`,children:[c.jsxs("h1",{className:"text-3xl font-extrabold mt-4 text-green-400 drop-shadow-lg animate-fadeIn",children:["مرحباً ",s,"! 👋"]}),c.jsx("p",{className:"text-lg mt-2 opacity-80",children:"أهلاً بك في قسم الإسعافات الأولية التفاعلي — استعد لخوض تجربة تعليمية ممتعة!"})]}),o&&c.jsxs("div",{className:"container max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:`rounded-2xl p-6 shadow-lg ${r?"bg-gray-800/60":"bg-white"}`,children:[c.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center",children:[c.jsx(pl,{className:"ml-2 text-teal-500"})," تقدمي الدراسي"]}),u.map((_,A)=>c.jsxs("div",{className:"mb-4 group",children:[c.jsxs("div",{className:"flex justify-between mb-1 font-semibold",children:[_.label," ",c.jsxs("span",{children:[_.percentage,"%"]})]}),c.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 h-5 rounded-full overflow-hidden",children:c.jsx("div",{className:`h-full bg-gradient-to-r ${{teal:"from-teal-400 to-cyan-500",pink:"from-pink-500 to-rose-500",amber:"from-amber-400 to-orange-500",sky:"from-sky-400 to-blue-500"}[_.color]} rounded-full transition-all duration-1000 flex justify-center items-center group-hover:scale-x-[1.05]`,style:{width:`${_.percentage}%`},children:_.percentage>=100&&c.jsx(Hi,{fontSize:"small",className:"text-white"})})}),c.jsx(ze,{onClick:()=>v(A,10),disabled:_.percentage>=100,variant:"contained",size:"small",className:"mt-1",children:"+10%"})]},A))]}),c.jsxs("div",{className:`rounded-2xl p-6 shadow-lg ${r?"bg-gray-800/70 text-white":"bg-gray-100 text-gray-800"}`,children:[c.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center",children:[c.jsx(zi,{className:"mr-2 text-amber-400"})," الإعلانات"]}),c.jsx("ul",{className:"space-y-3",children:m.map((_,A)=>c.jsxs("li",{className:"relative p-3 rounded cursor-pointer overflow-hidden group border-l-4",style:{borderColor:_.color==="amber"?r?"#FBBF24":"#D97706":r?"#14B8A6":"#059669"},children:[c.jsx("div",{className:`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-700 ${r?"bg-gradient-to-r from-gray-700/50 via-gray-600/50 to-gray-700/50":"bg-gradient-to-r from-yellow-100 via-amber-100 to-yellow-100"}`}),c.jsxs("div",{className:"relative z-10",children:[c.jsx("p",{className:"font-bold",children:_.title}),c.jsx("p",{className:`text-sm ${r?"text-gray-300":"text-gray-700"}`,children:_.subtitle})]})]},A))})]})]}),c.jsxs("div",{className:"space-y-6 lg:col-span-2",children:[c.jsxs("div",{className:`rounded-2xl p-6 shadow-lg ${r?"bg-gray-800/60":"bg-white"}`,children:[c.jsx("h2",{className:"text-2xl font-bold text-green-400 mb-6 text-center",children:"🧩 الدروس التفاعلية"}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:d.map((_,A)=>{const P=["from-green-200 to-green-400","from-pink-200 to-pink-400","from-amber-200 to-amber-400","from-sky-200 to-sky-400","from-purple-200 to-purple-400"],x=["🩹","🏥","🩺","🔥","💉"];return c.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.1] hover:rotate-2 cursor-pointer group",children:[c.jsx("div",{className:`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 bg-gradient-to-br ${P[A%P.length]}`}),c.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center p-6 text-center",children:[c.jsx("span",{className:"text-3xl mb-4 transition-transform duration-500 hover:animate-bounce",children:x[A%x.length]}),c.jsx("span",{className:"font-bold text-lg",children:_})]})]},A)})})]}),c.jsxs("div",{className:`rounded-2xl p-6 shadow-lg ${r?"bg-gray-900/70":"bg-white"}`,children:[c.jsx("h2",{className:"text-2xl font-bold text-green-400 mb-6 text-center",children:"🎮 الألعاب"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:p.map((_,A)=>{const P=["from-green-400 to-teal-600","from-yellow-400 to-amber-600","from-red-500 to-rose-600","from-pink-400 to-purple-600"],x=["from-teal-600 to-green-400","from-amber-600 to-yellow-400","from-rose-600 to-red-500","from-purple-600 to-pink-400"];return c.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.05] cursor-pointer group",children:[c.jsx("div",{className:`absolute inset-y-0 left-0 w-0 group-hover:w-1/2 transition-all duration-700 bg-gradient-to-r ${P[A%P.length]}`}),c.jsx("div",{className:`absolute inset-y-0 right-0 w-0 group-hover:w-1/2 transition-all duration-700 bg-gradient-to-l ${x[A%x.length]}`}),c.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center p-6 text-center",children:[c.jsx("span",{className:"text-4xl mb-4",children:_.icon}),c.jsx("h4",{className:`font-bold text-lg ${r?"text-white":"text-gray-800"}`,children:_.title}),c.jsx("p",{className:`text-sm mt-1 ${r?"text-gray-300":"text-gray-700"}`,children:_.category}),c.jsx("span",{className:"mt-2 inline-block px-3 py-1 rounded-full bg-white/30 text-white font-semibold w-max",children:_.level})]})]},A)})})]})]})]}),c.jsx("footer",{className:`w-full mt-12 p-6 text-center rounded-t-3xl shadow-inner ${r?"bg-gray-800 text-gray-300":"bg-green-100 text-gray-700"}`,children:"© 2025 منصة بليرن التعليمية. جميع الحقوق محفوظة."}),c.jsx("style",{children:`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fadeIn { animation: fadeIn 0.7s ease forwards; }

          @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
          .animate-bounce { animation: bounce 0.6s infinite; }
        `})]})}function W1(){return c.jsx("div",{className:"min-h-screen text-gray-900 relative",children:c.jsx(eE,{children:c.jsx(xg,{children:c.jsxs(Zp,{children:[c.jsx($e,{path:"/",element:c.jsx(rh,{})}),c.jsx($e,{path:"/main",element:c.jsx(rh,{})}),c.jsx($e,{path:"/login",element:c.jsx(nE,{})}),c.jsx($e,{path:"/register",element:c.jsx(ME,{})}),c.jsx($e,{path:"/forget-password",element:c.jsx(FE,{})}),c.jsx($e,{path:"*",element:c.jsx(L1,{})}),c.jsx($e,{path:"maincomdep",element:c.jsx(B1,{})}),c.jsx($e,{path:"physicdep",element:c.jsx(z1,{})}),c.jsx($e,{path:"mathdep",element:c.jsx(H1,{})}),c.jsx($e,{path:"firstaid",element:c.jsx(q1,{})}),c.jsx($e,{path:"/dashboard",element:c.jsx(hT,{children:c.jsx(O1,{})})}),c.jsx($e,{path:"/hangman",element:c.jsx(U1,{})}),c.jsx($e,{path:"/memorycard",element:c.jsx(F1,{})})]})})})})}const G1=document.getElementById("root"),K1=hh(G1);K1.render(c.jsx(W1,{}));
