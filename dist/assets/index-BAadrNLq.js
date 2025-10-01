import{j as y,c as Zt,a as Fo,A as qf,T as Hf,I as Hi,b as Wf,F as Gf,P as Kf,S as Qf,d as Xf,C as Yf,e as Wi,B as Jf}from"./mui-ymtZXdBe.js";import{c as Zf,r as A,a as se}from"./react-DU2EIy90.js";import{u as em,m as yn}from"./framer-Cnh_e_hz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var vu,Ml=Zf;vu=Ml.createRoot,Ml.hydrateRoot;/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fl="popstate";function tm(n={}){function e(r,s){let{pathname:i,search:a,hash:l}=r.location;return ao("",{pathname:i,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){return typeof s=="string"?s:Er(s)}return rm(e,t,null,n)}function ie(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function $e(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nm(){return Math.random().toString(36).substring(2,10)}function jl(n,e){return{usr:n.state,key:n.key,idx:e}}function ao(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?On(e):e,state:t,key:e&&e.key||r||nm()}}function Er({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function On(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function rm(n,e,t,r={}){let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,l="POP",u=null,h=f();h==null&&(h=0,a.replaceState({...a.state,idx:h},""));function f(){return(a.state||{idx:null}).idx}function g(){l="POP";let S=f(),V=S==null?null:S-h;h=S,u&&u({action:l,location:k.location,delta:V})}function E(S,V){l="PUSH";let D=ao(k.location,S,V);h=f()+1;let N=jl(D,h),F=k.createHref(D);try{a.pushState(N,"",F)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;s.location.assign(F)}i&&u&&u({action:l,location:k.location,delta:1})}function b(S,V){l="REPLACE";let D=ao(k.location,S,V);h=f();let N=jl(D,h),F=k.createHref(D);a.replaceState(N,"",F),i&&u&&u({action:l,location:k.location,delta:0})}function P(S){return sm(S)}let k={get action(){return l},get location(){return n(s,a)},listen(S){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Fl,g),u=S,()=>{s.removeEventListener(Fl,g),u=null}},createHref(S){return e(s,S)},createURL:P,encodeLocation(S){let V=P(S);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:E,replace:b,go(S){return a.go(S)}};return k}function sm(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),ie(t,"No window.location.(origin|href) available to create URL");let r=typeof n=="string"?n:Er(n);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=t+r),new URL(r,t)}function Eu(n,e,t="/"){return im(n,e,t,!1)}function im(n,e,t,r){let s=typeof e=="string"?On(e):e,i=ht(s.pathname||"/",t);if(i==null)return null;let a=wu(n);om(a);let l=null;for(let u=0;l==null&&u<a.length;++u){let h=ym(i);l=pm(a[u],h,r)}return l}function wu(n,e=[],t=[],r="",s=!1){let i=(a,l,u=s,h)=>{let f={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(r)&&u)return;ie(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length)}let g=lt([r,f.relativePath]),E=t.concat(f);a.children&&a.children.length>0&&(ie(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),wu(a.children,e,E,g,u)),!(a.path==null&&!a.index)&&e.push({path:g,score:fm(g,a.index),routesMeta:E})};return n.forEach((a,l)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))i(a,l);else for(let h of Tu(a.path))i(a,l,!0,h)}),e}function Tu(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=Tu(r.join("/")),l=[];return l.push(...a.map(u=>u===""?i:[i,u].join("/"))),s&&l.push(...a),l.map(u=>n.startsWith("/")&&u===""?"/":u)}function om(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:mm(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var am=/^:[\w-]+$/,lm=3,cm=2,um=1,hm=10,dm=-2,Ul=n=>n==="*";function fm(n,e){let t=n.split("/"),r=t.length;return t.some(Ul)&&(r+=dm),e&&(r+=cm),t.filter(s=>!Ul(s)).reduce((s,i)=>s+(am.test(i)?lm:i===""?um:hm),r)}function mm(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function pm(n,e,t=!1){let{routesMeta:r}=n,s={},i="/",a=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",g=Ss({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),E=u.route;if(!g&&h&&t&&!r[r.length-1].route.index&&(g=Ss({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!g)return null;Object.assign(s,g.params),a.push({params:s,pathname:lt([i,g.pathname]),pathnameBase:wm(lt([i,g.pathnameBase])),route:E}),g.pathnameBase!=="/"&&(i=lt([i,g.pathnameBase]))}return a}function Ss(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=gm(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((h,{paramName:f,isOptional:g},E)=>{if(f==="*"){let P=l[E]||"";a=i.slice(0,i.length-P.length).replace(/(.)\/+$/,"$1")}const b=l[E];return g&&!b?h[f]=void 0:h[f]=(b||"").replace(/%2F/g,"/"),h},{}),pathname:i,pathnameBase:a,pattern:n}}function gm(n,e=!1,t=!0){$e(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function ym(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $e(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function ht(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function _m(n,e="/"){let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?On(n):n;return{pathname:t?t.startsWith("/")?t:vm(t,e):e,search:Tm(r),hash:Im(s)}}function vm(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Gi(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Em(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function jo(n){let e=Em(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function Uo(n,e,t,r=!1){let s;typeof n=="string"?s=On(n):(s={...n},ie(!s.pathname||!s.pathname.includes("?"),Gi("?","pathname","search",s)),ie(!s.pathname||!s.pathname.includes("#"),Gi("#","pathname","hash",s)),ie(!s.search||!s.search.includes("#"),Gi("#","search","hash",s)));let i=n===""||s.pathname==="",a=i?"/":s.pathname,l;if(a==null)l=t;else{let g=e.length-1;if(!r&&a.startsWith("..")){let E=a.split("/");for(;E[0]==="..";)E.shift(),g-=1;s.pathname=E.join("/")}l=g>=0?e[g]:"/"}let u=_m(s,l),h=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}var lt=n=>n.join("/").replace(/\/\/+/g,"/"),wm=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Tm=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Im=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function bm(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Iu=["POST","PUT","PATCH","DELETE"];new Set(Iu);var Am=["GET",...Iu];new Set(Am);var Ln=A.createContext(null);Ln.displayName="DataRouter";var Ys=A.createContext(null);Ys.displayName="DataRouterState";A.createContext(!1);var bu=A.createContext({isTransitioning:!1});bu.displayName="ViewTransition";var Rm=A.createContext(new Map);Rm.displayName="Fetchers";var xm=A.createContext(null);xm.displayName="Await";var ze=A.createContext(null);ze.displayName="Navigation";var Nr=A.createContext(null);Nr.displayName="Location";var rt=A.createContext({outlet:null,matches:[],isDataRoute:!1});rt.displayName="Route";var Bo=A.createContext(null);Bo.displayName="RouteError";function Sm(n,{relative:e}={}){ie(Mn(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=A.useContext(ze),{hash:s,pathname:i,search:a}=Dr(n,{relative:e}),l=i;return t!=="/"&&(l=i==="/"?t:lt([t,i])),r.createHref({pathname:l,search:a,hash:s})}function Mn(){return A.useContext(Nr)!=null}function st(){return ie(Mn(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Nr).location}var Au="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ru(n){A.useContext(ze).static||A.useLayoutEffect(n)}function Vr(){let{isDataRoute:n}=A.useContext(rt);return n?Bm():Cm()}function Cm(){ie(Mn(),"useNavigate() may be used only in the context of a <Router> component.");let n=A.useContext(Ln),{basename:e,navigator:t}=A.useContext(ze),{matches:r}=A.useContext(rt),{pathname:s}=st(),i=JSON.stringify(jo(r)),a=A.useRef(!1);return Ru(()=>{a.current=!0}),A.useCallback((u,h={})=>{if($e(a.current,Au),!a.current)return;if(typeof u=="number"){t.go(u);return}let f=Uo(u,JSON.parse(i),s,h.relative==="path");n==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:lt([e,f.pathname])),(h.replace?t.replace:t.push)(f,h.state,h)},[e,t,i,s,n])}A.createContext(null);function Dr(n,{relative:e}={}){let{matches:t}=A.useContext(rt),{pathname:r}=st(),s=JSON.stringify(jo(t));return A.useMemo(()=>Uo(n,JSON.parse(s),r,e==="path"),[n,s,r,e])}function Pm(n,e){return xu(n,e)}function xu(n,e,t,r,s){var D;ie(Mn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=A.useContext(ze),{matches:a}=A.useContext(rt),l=a[a.length-1],u=l?l.params:{},h=l?l.pathname:"/",f=l?l.pathnameBase:"/",g=l&&l.route;{let N=g&&g.path||"";Su(h,!g||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let E=st(),b;if(e){let N=typeof e=="string"?On(e):e;ie(f==="/"||((D=N.pathname)==null?void 0:D.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${N.pathname}" was given in the \`location\` prop.`),b=N}else b=E;let P=b.pathname||"/",k=P;if(f!=="/"){let N=f.replace(/^\//,"").split("/");k="/"+P.replace(/^\//,"").split("/").slice(N.length).join("/")}let S=Eu(n,{pathname:k});$e(g||S!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),$e(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=Om(S&&S.map(N=>Object.assign({},N,{params:Object.assign({},u,N.params),pathname:lt([f,i.encodeLocation?i.encodeLocation(N.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?f:lt([f,i.encodeLocation?i.encodeLocation(N.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathnameBase])})),a,t,r,s);return e&&V?A.createElement(Nr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},V):V}function km(){let n=Um(),e=bm(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",n),a=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:i},"ErrorBoundary")," or"," ",A.createElement("code",{style:i},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),t?A.createElement("pre",{style:s},t):null,a)}var Nm=A.createElement(km,null),Vm=class extends A.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.unstable_onError?this.props.unstable_onError(n,e):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?A.createElement(rt.Provider,{value:this.props.routeContext},A.createElement(Bo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Dm({routeContext:n,match:e,children:t}){let r=A.useContext(Ln);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),A.createElement(rt.Provider,{value:n},t)}function Om(n,e=[],t=null,r=null,s=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let i=n,a=t==null?void 0:t.errors;if(a!=null){let h=i.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);ie(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,h+1))}let l=!1,u=-1;if(t)for(let h=0;h<i.length;h++){let f=i[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=h),f.route.id){let{loaderData:g,errors:E}=t,b=f.route.loader&&!g.hasOwnProperty(f.route.id)&&(!E||E[f.route.id]===void 0);if(f.route.lazy||b){l=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((h,f,g)=>{let E,b=!1,P=null,k=null;t&&(E=a&&f.route.id?a[f.route.id]:void 0,P=f.route.errorElement||Nm,l&&(u<0&&g===0?(Su("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,k=null):u===g&&(b=!0,k=f.route.hydrateFallbackElement||null)));let S=e.concat(i.slice(0,g+1)),V=()=>{let D;return E?D=P:b?D=k:f.route.Component?D=A.createElement(f.route.Component,null):f.route.element?D=f.route.element:D=h,A.createElement(Dm,{match:f,routeContext:{outlet:h,matches:S,isDataRoute:t!=null},children:D})};return t&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?A.createElement(Vm,{location:t.location,revalidation:t.revalidation,component:P,error:E,children:V(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:r}):V()},null)}function $o(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lm(n){let e=A.useContext(Ln);return ie(e,$o(n)),e}function Mm(n){let e=A.useContext(Ys);return ie(e,$o(n)),e}function Fm(n){let e=A.useContext(rt);return ie(e,$o(n)),e}function zo(n){let e=Fm(n),t=e.matches[e.matches.length-1];return ie(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function jm(){return zo("useRouteId")}function Um(){var r;let n=A.useContext(Bo),e=Mm("useRouteError"),t=zo("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function Bm(){let{router:n}=Lm("useNavigate"),e=zo("useNavigate"),t=A.useRef(!1);return Ru(()=>{t.current=!0}),A.useCallback(async(s,i={})=>{$e(t.current,Au),t.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:e,...i}))},[n,e])}var Bl={};function Su(n,e,t){!e&&!Bl[n]&&(Bl[n]=!0,$e(!1,t))}A.memo($m);function $m({routes:n,future:e,state:t,unstable_onError:r}){return xu(n,void 0,t,r,e)}function zm({to:n,replace:e,state:t,relative:r}){ie(Mn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=A.useContext(ze);$e(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=A.useContext(rt),{pathname:a}=st(),l=Vr(),u=Uo(n,jo(i),a,r==="path"),h=JSON.stringify(u);return A.useEffect(()=>{l(JSON.parse(h),{replace:e,state:t,relative:r})},[l,h,r,e,t]),null}function xt(n){ie(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qm({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:s,static:i=!1}){ie(!Mn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=n.replace(/^\/*/,"/"),l=A.useMemo(()=>({basename:a,navigator:s,static:i,future:{}}),[a,s,i]);typeof t=="string"&&(t=On(t));let{pathname:u="/",search:h="",hash:f="",state:g=null,key:E="default"}=t,b=A.useMemo(()=>{let P=ht(u,a);return P==null?null:{location:{pathname:P,search:h,hash:f,state:g,key:E},navigationType:r}},[a,u,h,f,g,E,r]);return $e(b!=null,`<Router basename="${a}"> is not able to match the URL "${u}${h}${f}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:A.createElement(ze.Provider,{value:l},A.createElement(Nr.Provider,{children:e,value:b}))}function Hm({children:n,location:e}){return Pm(lo(n),e)}function lo(n,e=[]){let t=[];return A.Children.forEach(n,(r,s)=>{if(!A.isValidElement(r))return;let i=[...e,s];if(r.type===A.Fragment){t.push.apply(t,lo(r.props.children,i));return}ie(r.type===xt,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ie(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=lo(r.props.children,i)),t.push(a)}),t}var gs="get",ys="application/x-www-form-urlencoded";function Js(n){return n!=null&&typeof n.tagName=="string"}function Wm(n){return Js(n)&&n.tagName.toLowerCase()==="button"}function Gm(n){return Js(n)&&n.tagName.toLowerCase()==="form"}function Km(n){return Js(n)&&n.tagName.toLowerCase()==="input"}function Qm(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Xm(n,e){return n.button===0&&(!e||e==="_self")&&!Qm(n)}var cs=null;function Ym(){if(cs===null)try{new FormData(document.createElement("form"),0),cs=!1}catch{cs=!0}return cs}var Jm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ki(n){return n!=null&&!Jm.has(n)?($e(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ys}"`),null):n}function Zm(n,e){let t,r,s,i,a;if(Gm(n)){let l=n.getAttribute("action");r=l?ht(l,e):null,t=n.getAttribute("method")||gs,s=Ki(n.getAttribute("enctype"))||ys,i=new FormData(n)}else if(Wm(n)||Km(n)&&(n.type==="submit"||n.type==="image")){let l=n.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=n.getAttribute("formaction")||l.getAttribute("action");if(r=u?ht(u,e):null,t=n.getAttribute("formmethod")||l.getAttribute("method")||gs,s=Ki(n.getAttribute("formenctype"))||Ki(l.getAttribute("enctype"))||ys,i=new FormData(l,n),!Ym()){let{name:h,type:f,value:g}=n;if(f==="image"){let E=h?`${h}.`:"";i.append(`${E}x`,"0"),i.append(`${E}y`,"0")}else h&&i.append(h,g)}}else{if(Js(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=gs,r=null,s=ys,a=n}return i&&s==="text/plain"&&(a=i,i=void 0),{action:r,method:t.toLowerCase(),encType:s,formData:i,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function qo(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ep(n,e,t){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname=`_root.${t}`:e&&ht(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${t}`,r}async function tp(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function np(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function rp(n,e,t){let r=await Promise.all(n.map(async s=>{let i=e.routes[s.route.id];if(i){let a=await tp(i,t);return a.links?a.links():[]}return[]}));return ap(r.flat(1).filter(np).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function $l(n,e,t,r,s,i){let a=(u,h)=>t[h]?u.route.id!==t[h].route.id:!0,l=(u,h)=>{var f;return t[h].pathname!==u.pathname||((f=t[h].route.path)==null?void 0:f.endsWith("*"))&&t[h].params["*"]!==u.params["*"]};return i==="assets"?e.filter((u,h)=>a(u,h)||l(u,h)):i==="data"?e.filter((u,h)=>{var g;let f=r.routes[u.route.id];if(!f||!f.hasLoader)return!1;if(a(u,h)||l(u,h))return!0;if(u.route.shouldRevalidate){let E=u.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((g=t[0])==null?void 0:g.params)||{},nextUrl:new URL(n,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function sp(n,e,{includeHydrateFallback:t}={}){return ip(n.map(r=>{let s=e.routes[r.route.id];if(!s)return[];let i=[s.module];return s.clientActionModule&&(i=i.concat(s.clientActionModule)),s.clientLoaderModule&&(i=i.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(i=i.concat(s.hydrateFallbackModule)),s.imports&&(i=i.concat(s.imports)),i}).flat(1))}function ip(n){return[...new Set(n)]}function op(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function ap(n,e){let t=new Set;return new Set(e),n.reduce((r,s)=>{let i=JSON.stringify(op(s));return t.has(i)||(t.add(i),r.push({key:i,link:s})),r},[])}function Cu(){let n=A.useContext(Ln);return qo(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function lp(){let n=A.useContext(Ys);return qo(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Ho=A.createContext(void 0);Ho.displayName="FrameworkContext";function Pu(){let n=A.useContext(Ho);return qo(n,"You must render this element inside a <HydratedRouter> element"),n}function cp(n,e){let t=A.useContext(Ho),[r,s]=A.useState(!1),[i,a]=A.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:h,onMouseLeave:f,onTouchStart:g}=e,E=A.useRef(null);A.useEffect(()=>{if(n==="render"&&a(!0),n==="viewport"){let k=V=>{V.forEach(D=>{a(D.isIntersecting)})},S=new IntersectionObserver(k,{threshold:.5});return E.current&&S.observe(E.current),()=>{S.disconnect()}}},[n]),A.useEffect(()=>{if(r){let k=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(k)}}},[r]);let b=()=>{s(!0)},P=()=>{s(!1),a(!1)};return t?n!=="intent"?[i,E,{}]:[i,E,{onFocus:ar(l,b),onBlur:ar(u,P),onMouseEnter:ar(h,b),onMouseLeave:ar(f,P),onTouchStart:ar(g,b)}]:[!1,E,{}]}function ar(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function up({page:n,...e}){let{router:t}=Cu(),r=A.useMemo(()=>Eu(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?A.createElement(dp,{page:n,matches:r,...e}):null}function hp(n){let{manifest:e,routeModules:t}=Pu(),[r,s]=A.useState([]);return A.useEffect(()=>{let i=!1;return rp(n,e,t).then(a=>{i||s(a)}),()=>{i=!0}},[n,e,t]),r}function dp({page:n,matches:e,...t}){let r=st(),{manifest:s,routeModules:i}=Pu(),{basename:a}=Cu(),{loaderData:l,matches:u}=lp(),h=A.useMemo(()=>$l(n,e,u,s,r,"data"),[n,e,u,s,r]),f=A.useMemo(()=>$l(n,e,u,s,r,"assets"),[n,e,u,s,r]),g=A.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let P=new Set,k=!1;if(e.forEach(V=>{var N;let D=s.routes[V.route.id];!D||!D.hasLoader||(!h.some(F=>F.route.id===V.route.id)&&V.route.id in l&&((N=i[V.route.id])!=null&&N.shouldRevalidate)||D.hasClientLoader?k=!0:P.add(V.route.id))}),P.size===0)return[];let S=ep(n,a,"data");return k&&P.size>0&&S.searchParams.set("_routes",e.filter(V=>P.has(V.route.id)).map(V=>V.route.id).join(",")),[S.pathname+S.search]},[a,l,r,s,h,e,n,i]),E=A.useMemo(()=>sp(f,s),[f,s]),b=hp(f);return A.createElement(A.Fragment,null,g.map(P=>A.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...t})),E.map(P=>A.createElement("link",{key:P,rel:"modulepreload",href:P,...t})),b.map(({key:P,link:k})=>A.createElement("link",{key:P,nonce:t.nonce,...k})))}function fp(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var ku=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ku&&(window.__reactRouterVersion="7.9.3")}catch{}function mp({basename:n,children:e,window:t}){let r=A.useRef();r.current==null&&(r.current=tm({window:t,v5Compat:!0}));let s=r.current,[i,a]=A.useState({action:s.action,location:s.location}),l=A.useCallback(u=>{A.startTransition(()=>a(u))},[a]);return A.useLayoutEffect(()=>s.listen(l),[s,l]),A.createElement(qm,{basename:n,children:e,location:i.location,navigationType:i.action,navigator:s})}var Nu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lt=A.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:s,reloadDocument:i,replace:a,state:l,target:u,to:h,preventScrollReset:f,viewTransition:g,...E},b){let{basename:P}=A.useContext(ze),k=typeof h=="string"&&Nu.test(h),S,V=!1;if(typeof h=="string"&&k&&(S=h,ku))try{let _=new URL(window.location.href),T=h.startsWith("//")?new URL(_.protocol+h):new URL(h),I=ht(T.pathname,P);T.origin===_.origin&&I!=null?h=I+T.search+T.hash:V=!0}catch{$e(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=Sm(h,{relative:s}),[N,F,$]=cp(r,E),W=_p(h,{replace:a,state:l,target:u,preventScrollReset:f,relative:s,viewTransition:g});function w(_){e&&e(_),_.defaultPrevented||W(_)}let p=A.createElement("a",{...E,...$,href:S||D,onClick:V||i?e:w,ref:fp(b,F),target:u,"data-discover":!k&&t==="render"?"true":void 0});return N&&!k?A.createElement(A.Fragment,null,p,A.createElement(up,{page:D})):p});Lt.displayName="Link";var pp=A.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:s=!1,style:i,to:a,viewTransition:l,children:u,...h},f){let g=Dr(a,{relative:h.relative}),E=st(),b=A.useContext(Ys),{navigator:P,basename:k}=A.useContext(ze),S=b!=null&&Ip(g)&&l===!0,V=P.encodeLocation?P.encodeLocation(g).pathname:g.pathname,D=E.pathname,N=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;t||(D=D.toLowerCase(),N=N?N.toLowerCase():null,V=V.toLowerCase()),N&&k&&(N=ht(N,k)||N);const F=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let $=D===V||!s&&D.startsWith(V)&&D.charAt(F)==="/",W=N!=null&&(N===V||!s&&N.startsWith(V)&&N.charAt(V.length)==="/"),w={isActive:$,isPending:W,isTransitioning:S},p=$?e:void 0,_;typeof r=="function"?_=r(w):_=[r,$?"active":null,W?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let T=typeof i=="function"?i(w):i;return A.createElement(Lt,{...h,"aria-current":p,className:_,ref:f,style:T,to:a,viewTransition:l},typeof u=="function"?u(w):u)});pp.displayName="NavLink";var gp=A.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:s,state:i,method:a=gs,action:l,onSubmit:u,relative:h,preventScrollReset:f,viewTransition:g,...E},b)=>{let P=wp(),k=Tp(l,{relative:h}),S=a.toLowerCase()==="get"?"get":"post",V=typeof l=="string"&&Nu.test(l),D=N=>{if(u&&u(N),N.defaultPrevented)return;N.preventDefault();let F=N.nativeEvent.submitter,$=(F==null?void 0:F.getAttribute("formmethod"))||a;P(F||N.currentTarget,{fetcherKey:e,method:$,navigate:t,replace:s,state:i,relative:h,preventScrollReset:f,viewTransition:g})};return A.createElement("form",{ref:b,method:S,action:k,onSubmit:r?u:D,...E,"data-discover":!V&&n==="render"?"true":void 0})});gp.displayName="Form";function yp(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vu(n){let e=A.useContext(Ln);return ie(e,yp(n)),e}function _p(n,{target:e,replace:t,state:r,preventScrollReset:s,relative:i,viewTransition:a}={}){let l=Vr(),u=st(),h=Dr(n,{relative:i});return A.useCallback(f=>{if(Xm(f,e)){f.preventDefault();let g=t!==void 0?t:Er(u)===Er(h);l(n,{replace:g,state:r,preventScrollReset:s,relative:i,viewTransition:a})}},[u,l,h,t,r,e,n,s,i,a])}var vp=0,Ep=()=>`__${String(++vp)}__`;function wp(){let{router:n}=Vu("useSubmit"),{basename:e}=A.useContext(ze),t=jm();return A.useCallback(async(r,s={})=>{let{action:i,method:a,encType:l,formData:u,body:h}=Zm(r,e);if(s.navigate===!1){let f=s.fetcherKey||Ep();await n.fetch(f,t,s.action||i,{preventScrollReset:s.preventScrollReset,formData:u,body:h,formMethod:s.method||a,formEncType:s.encType||l,flushSync:s.flushSync})}else await n.navigate(s.action||i,{preventScrollReset:s.preventScrollReset,formData:u,body:h,formMethod:s.method||a,formEncType:s.encType||l,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,e,t])}function Tp(n,{relative:e}={}){let{basename:t}=A.useContext(ze),r=A.useContext(rt);ie(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),i={...Dr(n||".",{relative:e})},a=st();if(n==null){i.search=a.search;let l=new URLSearchParams(i.search),u=l.getAll("index");if(u.some(f=>f==="")){l.delete("index"),u.filter(g=>g).forEach(g=>l.append("index",g));let f=l.toString();i.search=f?`?${f}`:""}}return(!n||n===".")&&s.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(i.pathname=i.pathname==="/"?t:lt([t,i.pathname])),Er(i)}function Ip(n,{relative:e}={}){let t=A.useContext(bu);ie(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Vu("useViewTransitionState"),s=Dr(n,{relative:e});if(!t.isTransitioning)return!1;let i=ht(t.currentLocation.pathname,r)||t.currentLocation.pathname,a=ht(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Ss(s.pathname,a)!=null||Ss(s.pathname,i)!=null}const bp=()=>{};var zl={};/**
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
 */const Du=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ap=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ou={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let E=(l&15)<<2|h>>6,b=h&63;u||(b=64,a||(E=64)),r.push(t[f],t[g],t[E],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Du(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ap(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new Rp;const E=i<<2|l>>4;if(r.push(E),h!==64){const b=l<<4&240|h>>2;if(r.push(b),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Rp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xp=function(n){const e=Du(n);return Ou.encodeByteArray(e,!0)},Cs=function(n){return xp(n).replace(/\./g,"")},Lu=function(n){try{return Ou.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Sp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cp=()=>Sp().__FIREBASE_DEFAULTS__,Pp=()=>{if(typeof process>"u"||typeof zl>"u")return;const n=zl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Lu(n[1]);return e&&JSON.parse(e)},Zs=()=>{try{return bp()||Cp()||Pp()||kp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mu=n=>{var e,t;return(t=(e=Zs())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Np=n=>{const e=Mu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Fu=()=>{var n;return(n=Zs())==null?void 0:n.config},ju=n=>{var e;return(e=Zs())==null?void 0:e[`_${n}`]};/**
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
 */class Vp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Fn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Uu(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Dp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Cs(JSON.stringify(t)),Cs(JSON.stringify(a)),""].join(".")}const mr={};function Op(){const n={prod:[],emulator:[]};for(const e of Object.keys(mr))mr[e]?n.emulator.push(e):n.prod.push(e);return n}function Lp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ql=!1;function Bu(n,e){if(typeof window>"u"||typeof document>"u"||!Fn(window.location.host)||mr[n]===e||mr[n]||ql)return;mr[n]=e;function t(E){return`__firebase__banner__${E}`}const r="__firebase__banner",i=Op().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function l(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function u(E,b){E.setAttribute("width","24"),E.setAttribute("id",b),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function h(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{ql=!0,a()},E}function f(E,b){E.setAttribute("id",b),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function g(){const E=Lp(r),b=t("text"),P=document.getElementById(b)||document.createElement("span"),k=t("learnmore"),S=document.getElementById(k)||document.createElement("a"),V=t("preprendIcon"),D=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const N=E.element;l(N),f(S,k);const F=h();u(D,V),N.append(D,P,S,F),document.body.appendChild(N)}i?(P.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Fp(){var e;const n=(e=Zs())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Up(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $p(){const n=xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zp(){return!Fp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qp(){try{return typeof indexedDB=="object"}catch{return!1}}function Hp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Wp="FirebaseError";class yt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Wp,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Or.prototype.create)}}class Or{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Gp(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new yt(s,l,r)}}function Gp(n,e){return n.replace(Kp,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Kp=/\{\$([^}]+)}/g;function Qp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function nn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Hl(i)&&Hl(a)){if(!nn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Hl(n){return n!==null&&typeof n=="object"}/**
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
 */function Lr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function cr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Xp(n,e){const t=new Yp(n,e);return t.subscribe.bind(t)}class Yp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Jp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Qi),s.error===void 0&&(s.error=Qi),s.complete===void 0&&(s.complete=Qi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qi(){}/**
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
 */function Ve(n){return n&&n._delegate?n._delegate:n}class rn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xt="[DEFAULT]";/**
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
 */class Zp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Vp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tg(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eg(n){return n===Xt?void 0:n}function tg(n){return n.instantiationMode==="EAGER"}/**
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
 */class ng{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const rg={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},sg=Q.INFO,ig={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},og=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=ig[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wo{constructor(e){this.name=e,this._logLevel=sg,this._logHandler=og,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const ag=(n,e)=>e.some(t=>n instanceof t);let Wl,Gl;function lg(){return Wl||(Wl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cg(){return Gl||(Gl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $u=new WeakMap,co=new WeakMap,zu=new WeakMap,Xi=new WeakMap,Go=new WeakMap;function ug(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Nt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&$u.set(t,n)}).catch(()=>{}),Go.set(e,n),e}function hg(n){if(co.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});co.set(n,e)}let uo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return co.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function dg(n){uo=n(uo)}function fg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Yi(this),e,...t);return zu.set(r,e.sort?e.sort():[e]),Nt(r)}:cg().includes(n)?function(...e){return n.apply(Yi(this),e),Nt($u.get(this))}:function(...e){return Nt(n.apply(Yi(this),e))}}function mg(n){return typeof n=="function"?fg(n):(n instanceof IDBTransaction&&hg(n),ag(n,lg())?new Proxy(n,uo):n)}function Nt(n){if(n instanceof IDBRequest)return ug(n);if(Xi.has(n))return Xi.get(n);const e=mg(n);return e!==n&&(Xi.set(n,e),Go.set(e,n)),e}const Yi=n=>Go.get(n);function pg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Nt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Nt(a.result),u.oldVersion,u.newVersion,Nt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const gg=["get","getKey","getAll","getAllKeys","count"],yg=["put","add","delete","clear"],Ji=new Map;function Kl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ji.get(e))return Ji.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=yg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gg.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&u.done]))[0]};return Ji.set(e,i),i}dg(n=>({...n,get:(e,t,r)=>Kl(e,t)||n.get(e,t,r),has:(e,t)=>!!Kl(e,t)||n.has(e,t)}));/**
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
 */class _g{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function vg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ho="@firebase/app",Ql="0.14.3";/**
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
 */const dt=new Wo("@firebase/app"),Eg="@firebase/app-compat",wg="@firebase/analytics-compat",Tg="@firebase/analytics",Ig="@firebase/app-check-compat",bg="@firebase/app-check",Ag="@firebase/auth",Rg="@firebase/auth-compat",xg="@firebase/database",Sg="@firebase/data-connect",Cg="@firebase/database-compat",Pg="@firebase/functions",kg="@firebase/functions-compat",Ng="@firebase/installations",Vg="@firebase/installations-compat",Dg="@firebase/messaging",Og="@firebase/messaging-compat",Lg="@firebase/performance",Mg="@firebase/performance-compat",Fg="@firebase/remote-config",jg="@firebase/remote-config-compat",Ug="@firebase/storage",Bg="@firebase/storage-compat",$g="@firebase/firestore",zg="@firebase/ai",qg="@firebase/firestore-compat",Hg="firebase",Wg="12.3.0";/**
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
 */const fo="[DEFAULT]",Gg={[ho]:"fire-core",[Eg]:"fire-core-compat",[Tg]:"fire-analytics",[wg]:"fire-analytics-compat",[bg]:"fire-app-check",[Ig]:"fire-app-check-compat",[Ag]:"fire-auth",[Rg]:"fire-auth-compat",[xg]:"fire-rtdb",[Sg]:"fire-data-connect",[Cg]:"fire-rtdb-compat",[Pg]:"fire-fn",[kg]:"fire-fn-compat",[Ng]:"fire-iid",[Vg]:"fire-iid-compat",[Dg]:"fire-fcm",[Og]:"fire-fcm-compat",[Lg]:"fire-perf",[Mg]:"fire-perf-compat",[Fg]:"fire-rc",[jg]:"fire-rc-compat",[Ug]:"fire-gcs",[Bg]:"fire-gcs-compat",[$g]:"fire-fst",[qg]:"fire-fst-compat",[zg]:"fire-vertex","fire-js":"fire-js",[Hg]:"fire-js-all"};/**
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
 */const Ps=new Map,Kg=new Map,mo=new Map;function Xl(n,e){try{n.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Sn(n){const e=n.name;if(mo.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;mo.set(e,n);for(const t of Ps.values())Xl(t,n);for(const t of Kg.values())Xl(t,n);return!0}function Ko(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ne(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Qg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new Or("app","Firebase",Qg);/**
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
 */class Xg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const jn=Wg;function qu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:fo,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Vt.create("bad-app-name",{appName:String(s)});if(t||(t=Fu()),!t)throw Vt.create("no-options");const i=Ps.get(s);if(i){if(nn(t,i.options)&&nn(r,i.config))return i;throw Vt.create("duplicate-app",{appName:s})}const a=new ng(s);for(const u of mo.values())a.addComponent(u);const l=new Xg(t,r,a);return Ps.set(s,l),l}function Hu(n=fo){const e=Ps.get(n);if(!e&&n===fo&&Fu())return qu();if(!e)throw Vt.create("no-app",{appName:n});return e}function Dt(n,e,t){let r=Gg[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(a.join(" "));return}Sn(new rn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Yg="firebase-heartbeat-database",Jg=1,wr="firebase-heartbeat-store";let Zi=null;function Wu(){return Zi||(Zi=pg(Yg,Jg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(wr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),Zi}async function Zg(n){try{const t=(await Wu()).transaction(wr),r=await t.objectStore(wr).get(Gu(n));return await t.done,r}catch(e){if(e instanceof yt)dt.warn(e.message);else{const t=Vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}}async function Yl(n,e){try{const r=(await Wu()).transaction(wr,"readwrite");await r.objectStore(wr).put(e,Gu(n)),await r.done}catch(t){if(t instanceof yt)dt.warn(t.message);else{const r=Vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(r.message)}}}function Gu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ey=1024,ty=30;class ny{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Jl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ty){const a=iy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){dt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Jl(),{heartbeatsToSend:r,unsentEntries:s}=ry(this._heartbeatsCache.heartbeats),i=Cs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return dt.warn(t),""}}}function Jl(){return new Date().toISOString().substring(0,10)}function ry(n,e=ey){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Zl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Zl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class sy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qp()?Hp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Zg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Zl(n){return Cs(JSON.stringify({version:2,heartbeats:n})).length}function iy(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function oy(n){Sn(new rn("platform-logger",e=>new _g(e),"PRIVATE")),Sn(new rn("heartbeat",e=>new ny(e),"PRIVATE")),Dt(ho,Ql,n),Dt(ho,Ql,"esm2020"),Dt("fire-js","")}oy("");function Ku(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ay=Ku,Qu=new Or("auth","Firebase",Ku());/**
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
 */const ks=new Wo("@firebase/auth");function ly(n,...e){ks.logLevel<=Q.WARN&&ks.warn(`Auth (${jn}): ${n}`,...e)}function _s(n,...e){ks.logLevel<=Q.ERROR&&ks.error(`Auth (${jn}): ${n}`,...e)}/**
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
 */function Fe(n,...e){throw Xo(n,...e)}function Be(n,...e){return Xo(n,...e)}function Qo(n,e,t){const r={...ay(),[e]:t};return new Or("auth","Firebase",r).create(e,{appName:n.name})}function Qe(n){return Qo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xu(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Fe(n,"argument-error"),Qo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Qu.create(n,...e)}function z(n,e,...t){if(!n)throw Xo(e,...t)}function ot(n){const e="INTERNAL ASSERTION FAILED: "+n;throw _s(e),new Error(e)}function ft(n,e){n||ot(e)}/**
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
 */function po(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function cy(){return ec()==="http:"||ec()==="https:"}function ec(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function uy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cy()||Up()||"connection"in navigator)?navigator.onLine:!0}function hy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Mr{constructor(e,t){this.shortDelay=e,this.longDelay=t,ft(t>e,"Short delay should be less than long delay!"),this.isMobile=Mp()||Bp()}get(){return uy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yo(n,e){ft(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Yu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],my=new Mr(3e4,6e4);function _t(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function vt(n,e,t,r,s={}){return Ju(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Lr({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return jp()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Fn(n.emulatorConfig.host)&&(h.credentials="include"),Yu.fetch()(await Zu(n,n.config.apiHost,t,l),h)})}async function Ju(n,e,t){n._canInitEmulator=!1;const r={...dy,...e};try{const s=new gy(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw us(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw us(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw us(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw us(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Qo(n,f,h);Fe(n,f)}}catch(s){if(s instanceof yt)throw s;Fe(n,"network-request-failed",{message:String(s)})}}async function Fr(n,e,t,r,s={}){const i=await vt(n,e,t,r,s);return"mfaPendingCredential"in i&&Fe(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Zu(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Yo(n.config,s):`${n.config.apiScheme}://${s}`;return fy.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function py(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),my.get())})}}function us(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Be(n,e,r);return s.customData._tokenResponse=t,s}function tc(n){return n!==void 0&&n.enterprise!==void 0}class yy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return py(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _y(n,e){return vt(n,"GET","/v2/recaptchaConfig",_t(n,e))}/**
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
 */async function vy(n,e){return vt(n,"POST","/v1/accounts:delete",e)}async function Ns(n,e){return vt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function pr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ey(n,e=!1){const t=Ve(n),r=await t.getIdToken(e),s=Jo(r);z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:pr(eo(s.auth_time)),issuedAtTime:pr(eo(s.iat)),expirationTime:pr(eo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function eo(n){return Number(n)*1e3}function Jo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return _s("JWT malformed, contained fewer than 3 sections"),null;try{const s=Lu(t);return s?JSON.parse(s):(_s("Failed to decode base64 JWT payload"),null)}catch(s){return _s("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function nc(n){const e=Jo(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Tr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof yt&&wy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function wy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Ty{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class go{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pr(this.lastLoginAt),this.creationTime=pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vs(n){var g;const e=n.auth,t=await n.getIdToken(),r=await Tr(n,Ns(e,{idToken:t}));z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?eh(s.providerUserInfo):[],a=by(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new go(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function Iy(n){const e=Ve(n);await Vs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function by(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function eh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Ay(n,e){const t=await Ju(n,{},async()=>{const r=Lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Zu(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Fn(n.emulatorConfig.host)&&(u.credentials="include"),Yu.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ry(n,e){return vt(n,"POST","/v2/accounts:revokeToken",_t(n,e))}/**
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
 */class Tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=nc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ay(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Tn;return r&&(z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function Rt(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class je{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Ty(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new go(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ey(this,e)}reload(){return Iy(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new je({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Vs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ne(this.auth.app))return Promise.reject(Qe(this.auth));const e=await this.getIdToken();return await Tr(this,vy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:g,emailVerified:E,isAnonymous:b,providerData:P,stsTokenManager:k}=t;z(g&&k,e,"internal-error");const S=Tn.fromJSON(this.name,k);z(typeof g=="string",e,"internal-error"),Rt(r,e.name),Rt(s,e.name),z(typeof E=="boolean",e,"internal-error"),z(typeof b=="boolean",e,"internal-error"),Rt(i,e.name),Rt(a,e.name),Rt(l,e.name),Rt(u,e.name),Rt(h,e.name),Rt(f,e.name);const V=new je({uid:g,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:S,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(V.providerData=P.map(D=>({...D}))),u&&(V._redirectEventId=u),V}static async _fromIdTokenResponse(e,t,r=!1){const s=new Tn;s.updateFromServerResponse(t);const i=new je({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?eh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Tn;l.updateFromIdToken(r);const u=new je({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new go(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const rc=new Map;function at(n){ft(n instanceof Function,"Expected a class definition");let e=rc.get(n);return e?(ft(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,rc.set(n,e),e)}/**
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
 */class th{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}th.type="NONE";const sc=th;/**
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
 */function vs(n,e,t){return`firebase:${n}:${e}:${t}`}class In{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vs(this.userKey,s.apiKey,i),this.fullPersistenceKey=vs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ns(this.auth,{idToken:e}).catch(()=>{});return t?je._fromGetAccountInfoResponse(this.auth,t,e):null}return je._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new In(at(sc),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||at(sc);const a=vs(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){let g;if(typeof f=="string"){const E=await Ns(e,{idToken:f}).catch(()=>{});if(!E)break;g=await je._fromGetAccountInfoResponse(e,E,f)}else g=je._fromJSON(e,f);h!==i&&(l=g),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new In(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new In(i,e,r))}}/**
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
 */function ic(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ih(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ah(e))return"Blackberry";if(lh(e))return"Webos";if(rh(e))return"Safari";if((e.includes("chrome/")||sh(e))&&!e.includes("edge/"))return"Chrome";if(oh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nh(n=xe()){return/firefox\//i.test(n)}function rh(n=xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sh(n=xe()){return/crios\//i.test(n)}function ih(n=xe()){return/iemobile/i.test(n)}function oh(n=xe()){return/android/i.test(n)}function ah(n=xe()){return/blackberry/i.test(n)}function lh(n=xe()){return/webos/i.test(n)}function Zo(n=xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function xy(n=xe()){var e;return Zo(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Sy(){return $p()&&document.documentMode===10}function ch(n=xe()){return Zo(n)||oh(n)||lh(n)||ah(n)||/windows phone/i.test(n)||ih(n)}/**
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
 */function uh(n,e=[]){let t;switch(n){case"Browser":t=ic(xe());break;case"Worker":t=`${ic(xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jn}/${r}`}/**
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
 */class Cy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Py(n,e={}){return vt(n,"GET","/v2/passwordPolicy",_t(n,e))}/**
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
 */const ky=6;class Ny{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ky,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Vy{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oc(this),this.idTokenSubscription=new oc(this),this.beforeStateQueue=new Cy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=at(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await In.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ns(this,{idToken:e}),r=await je._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ne(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ne(this.app))return Promise.reject(Qe(this));const t=e?Ve(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ne(this.app)?Promise.reject(Qe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ne(this.app)?Promise.reject(Qe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Py(this),t=new Ny(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Or("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ry(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&at(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await In.create(this,[at(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Ne(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&ly(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function qe(n){return Ve(n)}class oc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xp(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ei={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dy(n){ei=n}function hh(n){return ei.loadJS(n)}function Oy(){return ei.recaptchaEnterpriseScript}function Ly(){return ei.gapiScript}function My(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Fy{constructor(){this.enterprise=new jy}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class jy{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Uy="recaptcha-enterprise",dh="NO_RECAPTCHA";class By{constructor(e){this.type=Uy,this.auth=qe(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{_y(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new yy(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;tc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(dh)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Fy().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&tc(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Oy();u.length!==0&&(u+=l),hh(u).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function ac(n,e,t,r=!1,s=!1){const i=new By(n);let a;if(s)a=dh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ds(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await ac(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ac(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
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
 */function $y(n,e){const t=Ko(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(nn(i,e??{}))return s;Fe(s,"already-initialized")}return t.initialize({options:e})}function zy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(at);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qy(n,e,t){const r=qe(n);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=fh(e),{host:a,port:l}=Hy(e),u=l===null?"":`:${l}`,h={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(nn(h,r.config.emulator)&&nn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Fn(a)?(Uu(`${i}//${a}${u}`),Bu("Auth",!0)):Wy()}function fh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Hy(n){const e=fh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:lc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:lc(a)}}}function lc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Wy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ea{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,t){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function Gy(n,e){return vt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ky(n,e){return Fr(n,"POST","/v1/accounts:signInWithPassword",_t(n,e))}async function Qy(n,e){return vt(n,"POST","/v1/accounts:sendOobCode",_t(n,e))}async function Xy(n,e){return Qy(n,e)}/**
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
 */async function Yy(n,e){return Fr(n,"POST","/v1/accounts:signInWithEmailLink",_t(n,e))}async function Jy(n,e){return Fr(n,"POST","/v1/accounts:signInWithEmailLink",_t(n,e))}/**
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
 */class Ir extends ea{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ir(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ir(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ds(e,t,"signInWithPassword",Ky);case"emailLink":return Yy(e,{email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ds(e,r,"signUpPassword",Gy);case"emailLink":return Jy(e,{idToken:t,email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bn(n,e){return Fr(n,"POST","/v1/accounts:signInWithIdp",_t(n,e))}/**
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
 */const Zy="http://localhost";class sn extends ea{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new sn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return bn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,bn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bn(e,t)}buildRequest(){const e={requestUri:Zy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Lr(t)}return e}}/**
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
 */function e_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function t_(n){const e=lr(cr(n)).link,t=e?lr(cr(e)).deep_link_id:null,r=lr(cr(n)).deep_link_id;return(r?lr(cr(r)).link:null)||r||t||e||n}class ta{constructor(e){const t=lr(cr(e)),r=t.apiKey??null,s=t.oobCode??null,i=e_(t.mode??null);z(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=t_(e);try{return new ta(t)}catch{return null}}}/**
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
 */class Un{constructor(){this.providerId=Un.PROVIDER_ID}static credential(e,t){return Ir._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ta.parseLink(t);return z(r,"argument-error"),Ir._fromEmailAndCode(e,r.code,r.tenantId)}}Un.PROVIDER_ID="password";Un.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Un.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ti{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jr extends ti{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class St extends jr{constructor(){super("facebook.com")}static credential(e){return sn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
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
 */class Ke extends jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return sn._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ke.credential(t,r)}catch{return null}}}Ke.GOOGLE_SIGN_IN_METHOD="google.com";Ke.PROVIDER_ID="google.com";/**
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
 */class Ct extends jr{constructor(){super("github.com")}static credential(e){return sn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
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
 */class Pt extends jr{constructor(){super("twitter.com")}static credential(e,t){return sn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Pt.credential(t,r)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
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
 */async function n_(n,e){return Fr(n,"POST","/v1/accounts:signUp",_t(n,e))}/**
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
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await je._fromIdTokenResponse(e,r,s),a=cc(r);return new on({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=cc(r);return new on({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function cc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Os extends yt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Os.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Os(e,t,r,s)}}function mh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Os._fromErrorAndOperation(n,i,e,r):i})}async function r_(n,e,t=!1){const r=await Tr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return on._forOperation(n,"link",r)}/**
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
 */async function s_(n,e,t=!1){const{auth:r}=n;if(Ne(r.app))return Promise.reject(Qe(r));const s="reauthenticate";try{const i=await Tr(n,mh(r,s,e,n),t);z(i.idToken,r,"internal-error");const a=Jo(i.idToken);z(a,r,"internal-error");const{sub:l}=a;return z(n.uid===l,r,"user-mismatch"),on._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Fe(r,"user-mismatch"),i}}/**
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
 */async function ph(n,e,t=!1){if(Ne(n.app))return Promise.reject(Qe(n));const r="signIn",s=await mh(n,r,e),i=await on._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function i_(n,e){return ph(qe(n),e)}/**
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
 */async function gh(n){const e=qe(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function o_(n,e,t){const r=qe(n);await Ds(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Xy)}async function a_(n,e,t){if(Ne(n.app))return Promise.reject(Qe(n));const r=qe(n),a=await Ds(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",n_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&gh(n),u}),l=await on._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function l_(n,e,t){return Ne(n.app)?Promise.reject(Qe(n)):i_(Ve(n),Un.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gh(n),r})}function c_(n,e,t,r){return Ve(n).onIdTokenChanged(e,t,r)}function u_(n,e,t){return Ve(n).beforeAuthStateChanged(e,t)}function h_(n,e,t,r){return Ve(n).onAuthStateChanged(e,t,r)}function d_(n){return Ve(n).signOut()}const Ls="__sak";/**
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
 */class yh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ls,"1"),this.storage.removeItem(Ls),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const f_=1e3,m_=10;class _h extends yh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ch(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Sy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,m_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},f_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_h.type="LOCAL";const p_=_h;/**
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
 */class vh extends yh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vh.type="SESSION";const Eh=vh;/**
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
 */function g_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ni{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ni(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),u=await g_(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ni.receivers=[];/**
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
 */function na(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class y_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const h=na("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(E.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Xe(){return window}function __(n){Xe().location.href=n}/**
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
 */function wh(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function v_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function E_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function w_(){return wh()?self:null}/**
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
 */const Th="firebaseLocalStorageDb",T_=1,Ms="firebaseLocalStorage",Ih="fbase_key";class Ur{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ri(n,e){return n.transaction([Ms],e?"readwrite":"readonly").objectStore(Ms)}function I_(){const n=indexedDB.deleteDatabase(Th);return new Ur(n).toPromise()}function yo(){const n=indexedDB.open(Th,T_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ms,{keyPath:Ih})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ms)?e(r):(r.close(),await I_(),e(await yo()))})})}async function uc(n,e,t){const r=ri(n,!0).put({[Ih]:e,value:t});return new Ur(r).toPromise()}async function b_(n,e){const t=ri(n,!1).get(e),r=await new Ur(t).toPromise();return r===void 0?null:r.value}function hc(n,e){const t=ri(n,!0).delete(e);return new Ur(t).toPromise()}const A_=800,R_=3;class bh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>R_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ni._getInstance(w_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await v_(),!this.activeServiceWorker)return;this.sender=new y_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||E_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yo();return await uc(e,Ls,"1"),await hc(e,Ls),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>uc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>b_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ri(s,!1).getAll();return new Ur(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bh.type="LOCAL";const x_=bh;new Mr(3e4,6e4);/**
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
 */function ra(n,e){return e?at(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class sa extends ea{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function S_(n){return ph(n.auth,new sa(n),n.bypassAuthState)}function C_(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),s_(t,new sa(n),n.bypassAuthState)}async function P_(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),r_(t,new sa(n),n.bypassAuthState)}/**
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
 */class Ah{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return S_;case"linkViaPopup":case"linkViaRedirect":return P_;case"reauthViaPopup":case"reauthViaRedirect":return C_;default:Fe(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const k_=new Mr(2e3,1e4);async function N_(n,e,t){if(Ne(n.app))return Promise.reject(Be(n,"operation-not-supported-in-this-environment"));const r=qe(n);Xu(n,e,ti);const s=ra(r,t);return new Yt(r,"signInViaPopup",e,s).executeNotNull()}class Yt extends Ah{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yt.currentPopupAction&&Yt.currentPopupAction.cancel(),Yt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=na();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,k_.get())};e()}}Yt.currentPopupAction=null;/**
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
 */const V_="pendingRedirect",Es=new Map;class D_ extends Ah{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Es.get(this.auth._key());if(!e){try{const r=await O_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Es.set(this.auth._key(),e)}return this.bypassAuthState||Es.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function O_(n,e){const t=xh(e),r=Rh(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function L_(n,e){return Rh(n)._set(xh(e),"true")}function M_(n,e){Es.set(n._key(),e)}function Rh(n){return at(n._redirectPersistence)}function xh(n){return vs(V_,n.config.apiKey,n.name)}/**
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
 */function F_(n,e,t){return j_(n,e,t)}async function j_(n,e,t){if(Ne(n.app))return Promise.reject(Qe(n));const r=qe(n);Xu(n,e,ti),await r._initializationPromise;const s=ra(r,t);return await L_(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function U_(n,e){return await qe(n)._initializationPromise,Sh(n,e,!1)}async function Sh(n,e,t=!1){if(Ne(n.app))return Promise.reject(Qe(n));const r=qe(n),s=ra(r,e),a=await new D_(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const B_=10*60*1e3;class $_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!z_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ch(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Be(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=B_&&this.cachedEventUids.clear(),this.cachedEventUids.has(dc(e))}saveEventToCache(e){this.cachedEventUids.add(dc(e)),this.lastProcessedEventTime=Date.now()}}function dc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ch({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function z_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ch(n);default:return!1}}/**
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
 */async function q_(n,e={}){return vt(n,"GET","/v1/projects",e)}/**
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
 */const H_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,W_=/^https?/;async function G_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await q_(n);for(const t of e)try{if(K_(t))return}catch{}Fe(n,"unauthorized-domain")}function K_(n){const e=po(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!W_.test(t))return!1;if(H_.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Q_=new Mr(3e4,6e4);function fc(){const n=Xe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function X_(n){return new Promise((e,t)=>{var s,i,a;function r(){fc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fc(),t(Be(n,"network-request-failed"))},timeout:Q_.get()})}if((i=(s=Xe().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=Xe().gapi)!=null&&a.load)r();else{const l=My("iframefcb");return Xe()[l]=()=>{gapi.load?r():t(Be(n,"network-request-failed"))},hh(`${Ly()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw ws=null,e})}let ws=null;function Y_(n){return ws=ws||X_(n),ws}/**
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
 */const J_=new Mr(5e3,15e3),Z_="__/auth/iframe",ev="emulator/auth/iframe",tv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rv(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Yo(e,ev):`https://${n.config.authDomain}/${Z_}`,r={apiKey:e.apiKey,appName:n.name,v:jn},s=nv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Lr(r).slice(1)}`}async function sv(n){const e=await Y_(n),t=Xe().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:rv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Be(n,"network-request-failed"),l=Xe().setTimeout(()=>{i(a)},J_.get());function u(){Xe().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const iv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ov=500,av=600,lv="_blank",cv="http://localhost";class mc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uv(n,e,t,r=ov,s=av){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...iv,width:r.toString(),height:s.toString(),top:i,left:a},h=xe().toLowerCase();t&&(l=sh(h)?lv:t),nh(h)&&(e=e||cv,u.scrollbars="yes");const f=Object.entries(u).reduce((E,[b,P])=>`${E}${b}=${P},`,"");if(xy(h)&&l!=="_self")return hv(e||"",l),new mc(null);const g=window.open(e||"",l,f);z(g,n,"popup-blocked");try{g.focus()}catch{}return new mc(g)}function hv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const dv="__/auth/handler",fv="emulator/auth/handler",mv=encodeURIComponent("fac");async function pc(n,e,t,r,s,i){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:jn,eventId:s};if(e instanceof ti){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Qp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof jr){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${mv}=${encodeURIComponent(u)}`:"";return`${pv(n)}?${Lr(l).slice(1)}${h}`}function pv({config:n}){return n.emulator?Yo(n,fv):`https://${n.authDomain}/${dv}`}/**
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
 */const to="webStorageSupport";class gv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Eh,this._completeRedirectFn=Sh,this._overrideRedirectResult=M_}async _openPopup(e,t,r,s){var a;ft((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await pc(e,t,r,po(),s);return uv(e,i,na())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await pc(e,t,r,po(),s);return __(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ft(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await sv(e),r=new $_(e);return t.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(to,{type:to},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[to];i!==void 0&&t(!!i),Fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=G_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ch()||rh()||Zo()}}const yv=gv;var gc="@firebase/auth",yc="1.11.0";/**
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
 */class _v{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ev(n){Sn(new rn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uh(n)},h=new Vy(r,s,i,u);return zy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Sn(new rn("auth-internal",e=>{const t=qe(e.getProvider("auth").getImmediate());return(r=>new _v(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(gc,yc,vv(n)),Dt(gc,yc,"esm2020")}/**
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
 */const wv=5*60,Tv=ju("authIdTokenMaxAge")||wv;let _c=null;const Iv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Tv)return;const s=t==null?void 0:t.token;_c!==s&&(_c=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bv(n=Hu()){const e=Ko(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$y(n,{popupRedirectResolver:yv,persistence:[x_,p_,Eh]}),r=ju("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Iv(i.toString());u_(t,a,()=>a(t.currentUser)),c_(t,l=>a(l))}}const s=Mu("auth");return s&&qy(t,`http://${s}`),t}function Av(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Dy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Be("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Av().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ev("Browser");var Rv="firebase",xv="12.3.0";/**
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
 */Dt(Rv,xv,"app");var vc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ot,Ph;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,p){function _(){}_.prototype=p.prototype,w.F=p.prototype,w.prototype=new _,w.prototype.constructor=w,w.D=function(T,I,R){for(var v=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)v[ge-2]=arguments[ge];return p.prototype[I].apply(T,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,p,_){_||(_=0);const T=Array(16);if(typeof p=="string")for(var I=0;I<16;++I)T[I]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(I=0;I<16;++I)T[I]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=w.g[0],_=w.g[1],I=w.g[2];let R=w.g[3],v;v=p+(R^_&(I^R))+T[0]+3614090360&4294967295,p=_+(v<<7&4294967295|v>>>25),v=R+(I^p&(_^I))+T[1]+3905402710&4294967295,R=p+(v<<12&4294967295|v>>>20),v=I+(_^R&(p^_))+T[2]+606105819&4294967295,I=R+(v<<17&4294967295|v>>>15),v=_+(p^I&(R^p))+T[3]+3250441966&4294967295,_=I+(v<<22&4294967295|v>>>10),v=p+(R^_&(I^R))+T[4]+4118548399&4294967295,p=_+(v<<7&4294967295|v>>>25),v=R+(I^p&(_^I))+T[5]+1200080426&4294967295,R=p+(v<<12&4294967295|v>>>20),v=I+(_^R&(p^_))+T[6]+2821735955&4294967295,I=R+(v<<17&4294967295|v>>>15),v=_+(p^I&(R^p))+T[7]+4249261313&4294967295,_=I+(v<<22&4294967295|v>>>10),v=p+(R^_&(I^R))+T[8]+1770035416&4294967295,p=_+(v<<7&4294967295|v>>>25),v=R+(I^p&(_^I))+T[9]+2336552879&4294967295,R=p+(v<<12&4294967295|v>>>20),v=I+(_^R&(p^_))+T[10]+4294925233&4294967295,I=R+(v<<17&4294967295|v>>>15),v=_+(p^I&(R^p))+T[11]+2304563134&4294967295,_=I+(v<<22&4294967295|v>>>10),v=p+(R^_&(I^R))+T[12]+1804603682&4294967295,p=_+(v<<7&4294967295|v>>>25),v=R+(I^p&(_^I))+T[13]+4254626195&4294967295,R=p+(v<<12&4294967295|v>>>20),v=I+(_^R&(p^_))+T[14]+2792965006&4294967295,I=R+(v<<17&4294967295|v>>>15),v=_+(p^I&(R^p))+T[15]+1236535329&4294967295,_=I+(v<<22&4294967295|v>>>10),v=p+(I^R&(_^I))+T[1]+4129170786&4294967295,p=_+(v<<5&4294967295|v>>>27),v=R+(_^I&(p^_))+T[6]+3225465664&4294967295,R=p+(v<<9&4294967295|v>>>23),v=I+(p^_&(R^p))+T[11]+643717713&4294967295,I=R+(v<<14&4294967295|v>>>18),v=_+(R^p&(I^R))+T[0]+3921069994&4294967295,_=I+(v<<20&4294967295|v>>>12),v=p+(I^R&(_^I))+T[5]+3593408605&4294967295,p=_+(v<<5&4294967295|v>>>27),v=R+(_^I&(p^_))+T[10]+38016083&4294967295,R=p+(v<<9&4294967295|v>>>23),v=I+(p^_&(R^p))+T[15]+3634488961&4294967295,I=R+(v<<14&4294967295|v>>>18),v=_+(R^p&(I^R))+T[4]+3889429448&4294967295,_=I+(v<<20&4294967295|v>>>12),v=p+(I^R&(_^I))+T[9]+568446438&4294967295,p=_+(v<<5&4294967295|v>>>27),v=R+(_^I&(p^_))+T[14]+3275163606&4294967295,R=p+(v<<9&4294967295|v>>>23),v=I+(p^_&(R^p))+T[3]+4107603335&4294967295,I=R+(v<<14&4294967295|v>>>18),v=_+(R^p&(I^R))+T[8]+1163531501&4294967295,_=I+(v<<20&4294967295|v>>>12),v=p+(I^R&(_^I))+T[13]+2850285829&4294967295,p=_+(v<<5&4294967295|v>>>27),v=R+(_^I&(p^_))+T[2]+4243563512&4294967295,R=p+(v<<9&4294967295|v>>>23),v=I+(p^_&(R^p))+T[7]+1735328473&4294967295,I=R+(v<<14&4294967295|v>>>18),v=_+(R^p&(I^R))+T[12]+2368359562&4294967295,_=I+(v<<20&4294967295|v>>>12),v=p+(_^I^R)+T[5]+4294588738&4294967295,p=_+(v<<4&4294967295|v>>>28),v=R+(p^_^I)+T[8]+2272392833&4294967295,R=p+(v<<11&4294967295|v>>>21),v=I+(R^p^_)+T[11]+1839030562&4294967295,I=R+(v<<16&4294967295|v>>>16),v=_+(I^R^p)+T[14]+4259657740&4294967295,_=I+(v<<23&4294967295|v>>>9),v=p+(_^I^R)+T[1]+2763975236&4294967295,p=_+(v<<4&4294967295|v>>>28),v=R+(p^_^I)+T[4]+1272893353&4294967295,R=p+(v<<11&4294967295|v>>>21),v=I+(R^p^_)+T[7]+4139469664&4294967295,I=R+(v<<16&4294967295|v>>>16),v=_+(I^R^p)+T[10]+3200236656&4294967295,_=I+(v<<23&4294967295|v>>>9),v=p+(_^I^R)+T[13]+681279174&4294967295,p=_+(v<<4&4294967295|v>>>28),v=R+(p^_^I)+T[0]+3936430074&4294967295,R=p+(v<<11&4294967295|v>>>21),v=I+(R^p^_)+T[3]+3572445317&4294967295,I=R+(v<<16&4294967295|v>>>16),v=_+(I^R^p)+T[6]+76029189&4294967295,_=I+(v<<23&4294967295|v>>>9),v=p+(_^I^R)+T[9]+3654602809&4294967295,p=_+(v<<4&4294967295|v>>>28),v=R+(p^_^I)+T[12]+3873151461&4294967295,R=p+(v<<11&4294967295|v>>>21),v=I+(R^p^_)+T[15]+530742520&4294967295,I=R+(v<<16&4294967295|v>>>16),v=_+(I^R^p)+T[2]+3299628645&4294967295,_=I+(v<<23&4294967295|v>>>9),v=p+(I^(_|~R))+T[0]+4096336452&4294967295,p=_+(v<<6&4294967295|v>>>26),v=R+(_^(p|~I))+T[7]+1126891415&4294967295,R=p+(v<<10&4294967295|v>>>22),v=I+(p^(R|~_))+T[14]+2878612391&4294967295,I=R+(v<<15&4294967295|v>>>17),v=_+(R^(I|~p))+T[5]+4237533241&4294967295,_=I+(v<<21&4294967295|v>>>11),v=p+(I^(_|~R))+T[12]+1700485571&4294967295,p=_+(v<<6&4294967295|v>>>26),v=R+(_^(p|~I))+T[3]+2399980690&4294967295,R=p+(v<<10&4294967295|v>>>22),v=I+(p^(R|~_))+T[10]+4293915773&4294967295,I=R+(v<<15&4294967295|v>>>17),v=_+(R^(I|~p))+T[1]+2240044497&4294967295,_=I+(v<<21&4294967295|v>>>11),v=p+(I^(_|~R))+T[8]+1873313359&4294967295,p=_+(v<<6&4294967295|v>>>26),v=R+(_^(p|~I))+T[15]+4264355552&4294967295,R=p+(v<<10&4294967295|v>>>22),v=I+(p^(R|~_))+T[6]+2734768916&4294967295,I=R+(v<<15&4294967295|v>>>17),v=_+(R^(I|~p))+T[13]+1309151649&4294967295,_=I+(v<<21&4294967295|v>>>11),v=p+(I^(_|~R))+T[4]+4149444226&4294967295,p=_+(v<<6&4294967295|v>>>26),v=R+(_^(p|~I))+T[11]+3174756917&4294967295,R=p+(v<<10&4294967295|v>>>22),v=I+(p^(R|~_))+T[2]+718787259&4294967295,I=R+(v<<15&4294967295|v>>>17),v=_+(R^(I|~p))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+p&4294967295,w.g[1]=w.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.v=function(w,p){p===void 0&&(p=w.length);const _=p-this.blockSize,T=this.C;let I=this.h,R=0;for(;R<p;){if(I==0)for(;R<=_;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<p;)if(T[I++]=w.charCodeAt(R++),I==this.blockSize){s(this,T),I=0;break}}else for(;R<p;)if(T[I++]=w[R++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=p},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var p=1;p<w.length-8;++p)w[p]=0;p=this.o*8;for(var _=w.length-8;_<w.length;++_)w[_]=p&255,p/=256;for(this.v(w),w=Array(16),p=0,_=0;_<4;++_)for(let T=0;T<32;T+=8)w[p++]=this.g[_]>>>T&255;return w};function i(w,p){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=p(w)}function a(w,p){this.h=p;const _=[];let T=!0;for(let I=w.length-1;I>=0;I--){const R=w[I]|0;T&&R==p||(_[I]=R,T=!1)}this.g=_}var l={};function u(w){return-128<=w&&w<128?i(w,function(p){return new a([p|0],p<0?-1:0)}):new a([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(w<0)return S(h(-w));const p=[];let _=1;for(let T=0;w>=_;T++)p[T]=w/_|0,_*=4294967296;return new a(p,0)}function f(w,p){if(w.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(w.charAt(0)=="-")return S(f(w.substring(1),p));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(p,8));let T=g;for(let R=0;R<w.length;R+=8){var I=Math.min(8,w.length-R);const v=parseInt(w.substring(R,R+I),p);I<8?(I=h(Math.pow(p,I)),T=T.j(I).add(h(v))):(T=T.j(_),T=T.add(h(v)))}return T}var g=u(0),E=u(1),b=u(16777216);n=a.prototype,n.m=function(){if(k(this))return-S(this).m();let w=0,p=1;for(let _=0;_<this.g.length;_++){const T=this.i(_);w+=(T>=0?T:4294967296+T)*p,p*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(k(this))return"-"+S(this).toString(w);const p=h(Math.pow(w,6));var _=this;let T="";for(;;){const I=F(_,p).g;_=V(_,I.j(p));let R=((_.g.length>0?_.g[0]:_.h)>>>0).toString(w);if(_=I,P(_))return R+T;for(;R.length<6;)R="0"+R;T=R+T}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(let p=0;p<w.g.length;p++)if(w.g[p]!=0)return!1;return!0}function k(w){return w.h==-1}n.l=function(w){return w=V(this,w),k(w)?-1:P(w)?0:1};function S(w){const p=w.g.length,_=[];for(let T=0;T<p;T++)_[T]=~w.g[T];return new a(_,~w.h).add(E)}n.abs=function(){return k(this)?S(this):this},n.add=function(w){const p=Math.max(this.g.length,w.g.length),_=[];let T=0;for(let I=0;I<=p;I++){let R=T+(this.i(I)&65535)+(w.i(I)&65535),v=(R>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);T=v>>>16,R&=65535,v&=65535,_[I]=v<<16|R}return new a(_,_[_.length-1]&-2147483648?-1:0)};function V(w,p){return w.add(S(p))}n.j=function(w){if(P(this)||P(w))return g;if(k(this))return k(w)?S(this).j(S(w)):S(S(this).j(w));if(k(w))return S(this.j(S(w)));if(this.l(b)<0&&w.l(b)<0)return h(this.m()*w.m());const p=this.g.length+w.g.length,_=[];for(var T=0;T<2*p;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(let I=0;I<w.g.length;I++){const R=this.i(T)>>>16,v=this.i(T)&65535,ge=w.i(I)>>>16,Oe=w.i(I)&65535;_[2*T+2*I]+=v*Oe,D(_,2*T+2*I),_[2*T+2*I+1]+=R*Oe,D(_,2*T+2*I+1),_[2*T+2*I+1]+=v*ge,D(_,2*T+2*I+1),_[2*T+2*I+2]+=R*ge,D(_,2*T+2*I+2)}for(w=0;w<p;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=p;w<2*p;w++)_[w]=0;return new a(_,0)};function D(w,p){for(;(w[p]&65535)!=w[p];)w[p+1]+=w[p]>>>16,w[p]&=65535,p++}function N(w,p){this.g=w,this.h=p}function F(w,p){if(P(p))throw Error("division by zero");if(P(w))return new N(g,g);if(k(w))return p=F(S(w),p),new N(S(p.g),S(p.h));if(k(p))return p=F(w,S(p)),new N(S(p.g),p.h);if(w.g.length>30){if(k(w)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var _=E,T=p;T.l(w)<=0;)_=$(_),T=$(T);var I=W(_,1),R=W(T,1);for(T=W(T,2),_=W(_,2);!P(T);){var v=R.add(T);v.l(w)<=0&&(I=I.add(_),R=v),T=W(T,1),_=W(_,1)}return p=V(w,I.j(p)),new N(I,p)}for(I=g;w.l(p)>=0;){for(_=Math.max(1,Math.floor(w.m()/p.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),R=h(_),v=R.j(p);k(v)||v.l(w)>0;)_-=T,R=h(_),v=R.j(p);P(R)&&(R=E),I=I.add(R),w=V(w,v)}return new N(I,w)}n.B=function(w){return F(this,w).h},n.and=function(w){const p=Math.max(this.g.length,w.g.length),_=[];for(let T=0;T<p;T++)_[T]=this.i(T)&w.i(T);return new a(_,this.h&w.h)},n.or=function(w){const p=Math.max(this.g.length,w.g.length),_=[];for(let T=0;T<p;T++)_[T]=this.i(T)|w.i(T);return new a(_,this.h|w.h)},n.xor=function(w){const p=Math.max(this.g.length,w.g.length),_=[];for(let T=0;T<p;T++)_[T]=this.i(T)^w.i(T);return new a(_,this.h^w.h)};function $(w){const p=w.g.length+1,_=[];for(let T=0;T<p;T++)_[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(_,w.h)}function W(w,p){const _=p>>5;p%=32;const T=w.g.length-_,I=[];for(let R=0;R<T;R++)I[R]=p>0?w.i(R+_)>>>p|w.i(R+_+1)<<32-p:w.i(R+_);return new a(I,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Ph=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Ot=a}).apply(typeof vc<"u"?vc:typeof self<"u"?self:typeof window<"u"?window:{});var hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kh,ur,Nh,Ts,_o,Vh,Dh,Oh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof hs=="object"&&hs];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var x=o[m];if(!(x in d))break e;d=d[x]}o=o[o.length-1],m=d[o],c=c(m),c!=m&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var d=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.push([m,c[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,d){return o.call.apply(o.bind,arguments)}function h(o,c,d){return h=u,h.apply(null,arguments)}function f(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function g(o,c){function d(){}d.prototype=c.prototype,o.Z=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(m,x,C){for(var M=Array(arguments.length-2),K=2;K<arguments.length;K++)M[K-2]=arguments[K];return c.prototype[x].apply(m,M)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function b(o){const c=o.length;if(c>0){const d=Array(c);for(let m=0;m<c;m++)d[m]=o[m];return d}return[]}function P(o,c){for(let m=1;m<arguments.length;m++){const x=arguments[m];var d=typeof x;if(d=d!="object"?d:x?Array.isArray(x)?"array":d:"null",d=="array"||d=="object"&&typeof x.length=="number"){d=o.length||0;const C=x.length||0;o.length=d+C;for(let M=0;M<C;M++)o[d+M]=x[M]}else o.push(x)}}class k{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function S(o){a.setTimeout(()=>{throw o},0)}function V(){var o=w;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class D{constructor(){this.h=this.g=null}add(c,d){const m=N.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var N=new k(()=>new F,o=>o.reset());class F{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let $,W=!1,w=new D,p=()=>{const o=Promise.resolve(void 0);$=()=>{o.then(_)}};function _(){for(var o;o=V();){try{o.h.call(o.g)}catch(d){S(d)}var c=N;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}W=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,c),a.removeEventListener("test",d,c)}catch{}return o}();function v(o){return/^[\s\xa0]*$/.test(o)}function ge(o,c){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}g(ge,I),ge.prototype.init=function(o,c){const d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ge.Z.h.call(this)},ge.prototype.h=function(){ge.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Oe="closure_listenable_"+(Math.random()*1e6|0),zt=0;function qt(o,c,d,m,x){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=x,this.key=++zt,this.da=this.fa=!1}function it(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Qr(o,c,d){for(const m in o)c.call(d,o[m],m,o)}function mf(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function La(o){const c={};for(const d in o)c[d]=o[d];return c}const Ma="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fa(o,c){let d,m;for(let x=1;x<arguments.length;x++){m=arguments[x];for(d in m)o[d]=m[d];for(let C=0;C<Ma.length;C++)d=Ma[C],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function Xr(o){this.src=o,this.g={},this.h=0}Xr.prototype.add=function(o,c,d,m,x){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const M=Ti(o,c,m,x);return M>-1?(c=o[M],d||(c.fa=!1)):(c=new qt(c,this.src,C,!!m,x),c.fa=d,o.push(c)),c};function wi(o,c){const d=c.type;if(d in o.g){var m=o.g[d],x=Array.prototype.indexOf.call(m,c,void 0),C;(C=x>=0)&&Array.prototype.splice.call(m,x,1),C&&(it(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ti(o,c,d,m){for(let x=0;x<o.length;++x){const C=o[x];if(!C.da&&C.listener==c&&C.capture==!!d&&C.ha==m)return x}return-1}var Ii="closure_lm_"+(Math.random()*1e6|0),bi={};function ja(o,c,d,m,x){if(Array.isArray(c)){for(let C=0;C<c.length;C++)ja(o,c[C],d,m,x);return null}return d=$a(d),o&&o[Oe]?o.J(c,d,l(m)?!!m.capture:!1,x):pf(o,c,d,!1,m,x)}function pf(o,c,d,m,x,C){if(!c)throw Error("Invalid event type");const M=l(x)?!!x.capture:!!x;let K=Ri(o);if(K||(o[Ii]=K=new Xr(o)),d=K.add(c,d,m,M,C),d.proxy)return d;if(m=gf(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)R||(x=M),x===void 0&&(x=!1),o.addEventListener(c.toString(),m,x);else if(o.attachEvent)o.attachEvent(Ba(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function gf(){function o(d){return c.call(o.src,o.listener,d)}const c=yf;return o}function Ua(o,c,d,m,x){if(Array.isArray(c))for(var C=0;C<c.length;C++)Ua(o,c[C],d,m,x);else m=l(m)?!!m.capture:!!m,d=$a(d),o&&o[Oe]?(o=o.i,C=String(c).toString(),C in o.g&&(c=o.g[C],d=Ti(c,d,m,x),d>-1&&(it(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete o.g[C],o.h--)))):o&&(o=Ri(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ti(c,d,m,x)),(d=o>-1?c[o]:null)&&Ai(d))}function Ai(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Oe])wi(c.i,o);else{var d=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(d,m,o.capture):c.detachEvent?c.detachEvent(Ba(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=Ri(c))?(wi(d,o),d.h==0&&(d.src=null,c[Ii]=null)):it(o)}}}function Ba(o){return o in bi?bi[o]:bi[o]="on"+o}function yf(o,c){if(o.da)o=!0;else{c=new ge(c,this);const d=o.listener,m=o.ha||o.src;o.fa&&Ai(o),o=d.call(m,c)}return o}function Ri(o){return o=o[Ii],o instanceof Xr?o:null}var xi="__closure_events_fn_"+(Math.random()*1e9>>>0);function $a(o){return typeof o=="function"?o:(o[xi]||(o[xi]=function(c){return o.handleEvent(c)}),o[xi])}function Ie(){T.call(this),this.i=new Xr(this),this.M=this,this.G=null}g(Ie,T),Ie.prototype[Oe]=!0,Ie.prototype.removeEventListener=function(o,c,d,m){Ua(this,o,c,d,m)};function Se(o,c){var d,m=o.G;if(m)for(d=[];m;m=m.G)d.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new I(c,o);else if(c instanceof I)c.target=c.target||o;else{var x=c;c=new I(m,o),Fa(c,x)}x=!0;let C,M;if(d)for(M=d.length-1;M>=0;M--)C=c.g=d[M],x=Yr(C,m,!0,c)&&x;if(C=c.g=o,x=Yr(C,m,!0,c)&&x,x=Yr(C,m,!1,c)&&x,d)for(M=0;M<d.length;M++)C=c.g=d[M],x=Yr(C,m,!1,c)&&x}Ie.prototype.N=function(){if(Ie.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const d=o.g[c];for(let m=0;m<d.length;m++)it(d[m]);delete o.g[c],o.h--}}this.G=null},Ie.prototype.J=function(o,c,d,m){return this.i.add(String(o),c,!1,d,m)},Ie.prototype.K=function(o,c,d,m){return this.i.add(String(o),c,!0,d,m)};function Yr(o,c,d,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let x=!0;for(let C=0;C<c.length;++C){const M=c[C];if(M&&!M.da&&M.capture==d){const K=M.listener,fe=M.ha||M.src;M.fa&&wi(o.i,M),x=K.call(fe,m)!==!1&&x}}return x&&!m.defaultPrevented}function _f(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function za(o){o.g=_f(()=>{o.g=null,o.i&&(o.i=!1,za(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class vf extends T{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:za(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hn(o){T.call(this),this.h=o,this.g={}}g(Hn,T);var qa=[];function Ha(o){Qr(o.g,function(c,d){this.g.hasOwnProperty(d)&&Ai(c)},o),o.g={}}Hn.prototype.N=function(){Hn.Z.N.call(this),Ha(this)},Hn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Si=a.JSON.stringify,Ef=a.JSON.parse,wf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Wa(){}function Ga(){}var Wn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ci(){I.call(this,"d")}g(Ci,I);function Pi(){I.call(this,"c")}g(Pi,I);var Ht={},Ka=null;function Jr(){return Ka=Ka||new Ie}Ht.Ia="serverreachability";function Qa(o){I.call(this,Ht.Ia,o)}g(Qa,I);function Gn(o){const c=Jr();Se(c,new Qa(c))}Ht.STAT_EVENT="statevent";function Xa(o,c){I.call(this,Ht.STAT_EVENT,o),this.stat=c}g(Xa,I);function Ce(o){const c=Jr();Se(c,new Xa(c,o))}Ht.Ja="timingevent";function Ya(o,c){I.call(this,Ht.Ja,o),this.size=c}g(Ya,I);function Kn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function Qn(){this.g=!0}Qn.prototype.ua=function(){this.g=!1};function Tf(o,c,d,m,x,C){o.info(function(){if(o.g)if(C){var M="",K=C.split("&");for(let te=0;te<K.length;te++){var fe=K[te].split("=");if(fe.length>1){const ye=fe[0];fe=fe[1];const We=ye.split("_");M=We.length>=2&&We[1]=="type"?M+(ye+"="+fe+"&"):M+(ye+"=redacted&")}}}else M=null;else M=C;return"XMLHTTP REQ ("+m+") [attempt "+x+"]: "+c+`
`+d+`
`+M})}function If(o,c,d,m,x,C,M){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+x+"]: "+c+`
`+d+`
`+C+" "+M})}function mn(o,c,d,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Af(o,d)+(m?" "+m:"")})}function bf(o,c){o.info(function(){return"TIMEOUT: "+c})}Qn.prototype.info=function(){};function Af(o,c){if(!o.g)return c;if(!c)return null;try{const C=JSON.parse(c);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var d=C[o];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var x=m[0];if(x!="noop"&&x!="stop"&&x!="close")for(let M=1;M<m.length;M++)m[M]=""}}}}return Si(C)}catch{return c}}var Zr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ja={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Za;function ki(){}g(ki,Wa),ki.prototype.g=function(){return new XMLHttpRequest},Za=new ki;function Xn(o){return encodeURIComponent(String(o))}function Rf(o){var c=1;o=o.split(":");const d=[];for(;c>0&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function Et(o,c,d,m){this.j=o,this.i=c,this.l=d,this.S=m||1,this.V=new Hn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new el}function el(){this.i=null,this.g="",this.h=!1}var tl={},Ni={};function Vi(o,c,d){o.M=1,o.A=ts(He(c)),o.u=d,o.R=!0,nl(o,null)}function nl(o,c){o.F=Date.now(),es(o),o.B=He(o.A);var d=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),pl(d.i,"t",m),o.C=0,d=o.j.L,o.h=new el,o.g=Vl(o.j,d?c:null,!o.u),o.P>0&&(o.O=new vf(h(o.Y,o,o.g),o.P)),c=o.V,d=o.g,m=o.ba;var x="readystatechange";Array.isArray(x)||(x&&(qa[0]=x.toString()),x=qa);for(let C=0;C<x.length;C++){const M=ja(d,x[C],m||c.handleEvent,!1,c.h||c);if(!M)break;c.g[M.key]=M}c=o.J?La(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Gn(),Tf(o.i,o.v,o.B,o.l,o.S,o.u)}Et.prototype.ba=function(o){o=o.target;const c=this.O;c&&It(o)==3?c.j():this.Y(o)},Et.prototype.Y=function(o){try{if(o==this.g)e:{const K=It(this.g),fe=this.g.ya(),te=this.g.ca();if(!(K<3)&&(K!=3||this.g&&(this.h.h||this.g.la()||Tl(this.g)))){this.K||K!=4||fe==7||(fe==8||te<=0?Gn(3):Gn(2)),Di(this);var c=this.g.ca();this.X=c;var d=xf(this);if(this.o=c==200,If(this.i,this.v,this.B,this.l,this.S,K,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,x=this.g;if((m=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(m)){var C=m;break t}}C=null}if(o=C)mn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Oi(this,o);else{this.o=!1,this.m=3,Ce(12),Wt(this),Yn(this);break e}}if(this.R){o=!0;let ye;for(;!this.K&&this.C<d.length;)if(ye=Sf(this,d),ye==Ni){K==4&&(this.m=4,Ce(14),o=!1),mn(this.i,this.l,null,"[Incomplete Response]");break}else if(ye==tl){this.m=4,Ce(15),mn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else mn(this.i,this.l,ye,null),Oi(this,ye);if(rl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),K!=4||d.length!=0||this.h.h||(this.m=1,Ce(16),o=!1),this.o=this.o&&o,!o)mn(this.i,this.l,d,"[Invalid Chunked Response]"),Wt(this),Yn(this);else if(d.length>0&&!this.W){this.W=!0;var M=this.j;M.g==this&&M.aa&&!M.P&&(M.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),zi(M),M.P=!0,Ce(11))}}else mn(this.i,this.l,d,null),Oi(this,d);K==4&&Wt(this),this.o&&!this.K&&(K==4?Cl(this.j,this):(this.o=!1,es(this)))}else $f(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ce(12)):(this.m=0,Ce(13)),Wt(this),Yn(this)}}}catch{}finally{}};function xf(o){if(!rl(o))return o.g.la();const c=Tl(o.g);if(c==="")return"";let d="";const m=c.length,x=It(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Wt(o),Yn(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<m;C++)o.h.h=!0,d+=o.h.i.decode(c[C],{stream:!(x&&C==m-1)});return c.length=0,o.h.g+=d,o.C=0,o.h.g}function rl(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Sf(o,c){var d=o.C,m=c.indexOf(`
`,d);return m==-1?Ni:(d=Number(c.substring(d,m)),isNaN(d)?tl:(m+=1,m+d>c.length?Ni:(c=c.slice(m,m+d),o.C=m+d,c)))}Et.prototype.cancel=function(){this.K=!0,Wt(this)};function es(o){o.T=Date.now()+o.H,sl(o,o.H)}function sl(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Kn(h(o.aa,o),c)}function Di(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Et.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(bf(this.i,this.B),this.M!=2&&(Gn(),Ce(17)),Wt(this),this.m=2,Yn(this)):sl(this,this.T-o)};function Yn(o){o.j.I==0||o.K||Cl(o.j,o)}function Wt(o){Di(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,Ha(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Oi(o,c){try{var d=o.j;if(d.I!=0&&(d.g==o||Li(d.h,o))){if(!o.L&&Li(d.h,o)&&d.I==3){try{var m=d.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var x=m;if(x[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)os(d),ss(d);else break e;$i(d),Ce(18)}}else d.xa=x[1],0<d.xa-d.K&&x[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Kn(h(d.Va,d),6e3));al(d.h)<=1&&d.ta&&(d.ta=void 0)}else Kt(d,11)}else if((o.L||d.g==o)&&os(d),!v(c))for(x=d.Ba.g.parse(c),c=0;c<x.length;c++){let te=x[c];const ye=te[0];if(!(ye<=d.K))if(d.K=ye,te=te[1],d.I==2)if(te[0]=="c"){d.M=te[1],d.ba=te[2];const We=te[3];We!=null&&(d.ka=We,d.j.info("VER="+d.ka));const Qt=te[4];Qt!=null&&(d.za=Qt,d.j.info("SVER="+d.za));const bt=te[5];bt!=null&&typeof bt=="number"&&bt>0&&(m=1.5*bt,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const At=o.g;if(At){const ls=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ls){var C=m.h;C.g||ls.indexOf("spdy")==-1&&ls.indexOf("quic")==-1&&ls.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Mi(C,C.h),C.h=null))}if(m.G){const qi=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;qi&&(m.wa=qi,ne(m.J,m.G,qi))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var M=o;if(m.na=Nl(m,m.L?m.ba:null,m.W),M.L){ll(m.h,M);var K=M,fe=m.O;fe&&(K.H=fe),K.D&&(Di(K),es(K)),m.g=M}else xl(m);d.i.length>0&&is(d)}else te[0]!="stop"&&te[0]!="close"||Kt(d,7);else d.I==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?Kt(d,7):Bi(d):te[0]!="noop"&&d.l&&d.l.qa(te),d.A=0)}}Gn(4)}catch{}}var Cf=class{constructor(o,c){this.g=o,this.map=c}};function il(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ol(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function al(o){return o.h?1:o.g?o.g.size:0}function Li(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Mi(o,c){o.g?o.g.add(c):o.h=c}function ll(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}il.prototype.cancel=function(){if(this.i=cl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function cl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.G);return c}return b(o.i)}var ul=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pf(o,c){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const m=o[d].indexOf("=");let x,C=null;m>=0?(x=o[d].substring(0,m),C=o[d].substring(m+1)):x=o[d],c(x,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function wt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof wt?(this.l=o.l,Jn(this,o.j),this.o=o.o,this.g=o.g,Zn(this,o.u),this.h=o.h,Fi(this,gl(o.i)),this.m=o.m):o&&(c=String(o).match(ul))?(this.l=!1,Jn(this,c[1]||"",!0),this.o=er(c[2]||""),this.g=er(c[3]||"",!0),Zn(this,c[4]),this.h=er(c[5]||"",!0),Fi(this,c[6]||"",!0),this.m=er(c[7]||"")):(this.l=!1,this.i=new nr(null,this.l))}wt.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(tr(c,hl,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(tr(c,hl,!0),"@"),o.push(Xn(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(tr(d,d.charAt(0)=="/"?Vf:Nf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",tr(d,Of)),o.join("")},wt.prototype.resolve=function(o){const c=He(this);let d=!!o.j;d?Jn(c,o.j):d=!!o.o,d?c.o=o.o:d=!!o.g,d?c.g=o.g:d=o.u!=null;var m=o.h;if(d)Zn(c,o.u);else if(d=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var x=c.h.lastIndexOf("/");x!=-1&&(m=c.h.slice(0,x+1)+m)}if(x=m,x==".."||x==".")m="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){m=x.lastIndexOf("/",0)==0,x=x.split("/");const C=[];for(let M=0;M<x.length;){const K=x[M++];K=="."?m&&M==x.length&&C.push(""):K==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),m&&M==x.length&&C.push("")):(C.push(K),m=!0)}m=C.join("/")}else m=x}return d?c.h=m:d=o.i.toString()!=="",d?Fi(c,gl(o.i)):d=!!o.m,d&&(c.m=o.m),c};function He(o){return new wt(o)}function Jn(o,c,d){o.j=d?er(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Zn(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function Fi(o,c,d){c instanceof nr?(o.i=c,Lf(o.i,o.l)):(d||(c=tr(c,Df)),o.i=new nr(c,o.l))}function ne(o,c,d){o.i.set(c,d)}function ts(o){return ne(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function er(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function tr(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,kf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function kf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var hl=/[#\/\?@]/g,Nf=/[#\?:]/g,Vf=/[#\?]/g,Df=/[#\?@]/g,Of=/#/g;function nr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Gt(o){o.g||(o.g=new Map,o.h=0,o.i&&Pf(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=nr.prototype,n.add=function(o,c){Gt(this),this.i=null,o=pn(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function dl(o,c){Gt(o),c=pn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function fl(o,c){return Gt(o),c=pn(o,c),o.g.has(c)}n.forEach=function(o,c){Gt(this),this.g.forEach(function(d,m){d.forEach(function(x){o.call(c,x,m,this)},this)},this)};function ml(o,c){Gt(o);let d=[];if(typeof c=="string")fl(o,c)&&(d=d.concat(o.g.get(pn(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)d=d.concat(o[c]);return d}n.set=function(o,c){return Gt(this),this.i=null,o=pn(this,o),fl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=ml(this,o),o.length>0?String(o[0]):c):c};function pl(o,c,d){dl(o,c),d.length>0&&(o.i=null,o.g.set(pn(o,c),b(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var d=c[m];const x=Xn(d);d=ml(this,d);for(let C=0;C<d.length;C++){let M=x;d[C]!==""&&(M+="="+Xn(d[C])),o.push(M)}}return this.i=o.join("&")};function gl(o){const c=new nr;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function pn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Lf(o,c){c&&!o.j&&(Gt(o),o.i=null,o.g.forEach(function(d,m){const x=m.toLowerCase();m!=x&&(dl(this,m),pl(this,x,d))},o)),o.j=c}function Mf(o,c){const d=new Qn;if(a.Image){const m=new Image;m.onload=f(Tt,d,"TestLoadImage: loaded",!0,c,m),m.onerror=f(Tt,d,"TestLoadImage: error",!1,c,m),m.onabort=f(Tt,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=f(Tt,d,"TestLoadImage: timeout",!1,c,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function Ff(o,c){const d=new Qn,m=new AbortController,x=setTimeout(()=>{m.abort(),Tt(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(C=>{clearTimeout(x),C.ok?Tt(d,"TestPingServer: ok",!0,c):Tt(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),Tt(d,"TestPingServer: error",!1,c)})}function Tt(o,c,d,m,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),m(d)}catch{}}function jf(){this.g=new wf}function ji(o){this.i=o.Sb||null,this.h=o.ab||!1}g(ji,Wa),ji.prototype.g=function(){return new ns(this.i,this.h)};function ns(o,c){Ie.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(ns,Ie),n=ns.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,sr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,rr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,sr(this)),this.g&&(this.readyState=3,sr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;yl(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function yl(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?rr(this):sr(this),this.readyState==3&&yl(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,rr(this))},n.Na=function(o){this.g&&(this.response=o,rr(this))},n.ga=function(){this.g&&rr(this)};function rr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,sr(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function sr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ns.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function _l(o){let c="";return Qr(o,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Ui(o,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=_l(d),typeof o=="string"?d!=null&&Xn(d):ne(o,c,d))}function le(o){Ie.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(le,Ie);var Uf=/^https?$/i,Bf=["POST","PUT"];n=le.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Za.g(),this.g.onreadystatechange=E(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){vl(this,C);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var x in m)d.set(x,m[x]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())d.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),x=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Bf,c,void 0)>=0)||m||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,M]of d)this.g.setRequestHeader(C,M);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){vl(this,C)}};function vl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,El(o),rs(o)}function El(o){o.A||(o.A=!0,Se(o,"complete"),Se(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Se(this,"complete"),Se(this,"abort"),rs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rs(this,!0)),le.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?wl(this):this.Xa())},n.Xa=function(){wl(this)};function wl(o){if(o.h&&typeof i<"u"){if(o.v&&It(o)==4)setTimeout(o.Ca.bind(o),0);else if(Se(o,"readystatechange"),It(o)==4){o.h=!1;try{const C=o.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=C===0){let M=String(o.D).match(ul)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),m=!Uf.test(M?M.toLowerCase():"")}d=m}if(d)Se(o,"complete"),Se(o,"success");else{o.o=6;try{var x=It(o)>2?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.ca()+"]",El(o)}}finally{rs(o)}}}}function rs(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,c||Se(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function It(o){return o.g?o.g.readyState:0}n.ca=function(){try{return It(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Ef(c)}};function Tl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function $f(o){const c={};o=(o.g&&It(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(v(o[m]))continue;var d=Rf(o[m]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=c[x]||[];c[x]=C,C.push(d)}mf(c,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ir(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Il(o){this.za=0,this.i=[],this.j=new Qn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ir("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ir("baseRetryDelayMs",5e3,o),this.Za=ir("retryDelaySeedMs",1e4,o),this.Ta=ir("forwardChannelMaxRetries",2,o),this.va=ir("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new il(o&&o.concurrentRequestLimit),this.Ba=new jf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Il.prototype,n.ka=8,n.I=1,n.connect=function(o,c,d,m){Ce(0),this.W=o,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Nl(this,null,this.W),is(this)};function Bi(o){if(bl(o),o.I==3){var c=o.V++,d=He(o.J);if(ne(d,"SID",o.M),ne(d,"RID",c),ne(d,"TYPE","terminate"),or(o,d),c=new Et(o,o.j,c),c.M=2,c.A=ts(He(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=c.A,d=!0),d||(c.g=Vl(c.j,null),c.g.ea(c.A)),c.F=Date.now(),es(c)}kl(o)}function ss(o){o.g&&(zi(o),o.g.cancel(),o.g=null)}function bl(o){ss(o),o.v&&(a.clearTimeout(o.v),o.v=null),os(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function is(o){if(!ol(o.h)&&!o.m){o.m=!0;var c=o.Ea;$||p(),W||($(),W=!0),w.add(c,o),o.D=0}}function zf(o,c){return al(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Kn(h(o.Ea,o,c),Pl(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const x=new Et(this,this.j,o);let C=this.o;if(this.U&&(C?(C=La(C),Fa(C,this.U)):C=this.U),this.u!==null||this.R||(x.J=C,C=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Rl(this,x,c),d=He(this.J),ne(d,"RID",o),ne(d,"CVER",22),this.G&&ne(d,"X-HTTP-Session-Id",this.G),or(this,d),C&&(this.R?c="headers="+Xn(_l(C))+"&"+c:this.u&&Ui(d,this.u,C)),Mi(this.h,x),this.Ra&&ne(d,"TYPE","init"),this.S?(ne(d,"$req",c),ne(d,"SID","null"),x.U=!0,Vi(x,d,null)):Vi(x,d,c),this.I=2}}else this.I==3&&(o?Al(this,o):this.i.length==0||ol(this.h)||Al(this))};function Al(o,c){var d;c?d=c.l:d=o.V++;const m=He(o.J);ne(m,"SID",o.M),ne(m,"RID",d),ne(m,"AID",o.K),or(o,m),o.u&&o.o&&Ui(m,o.u,o.o),d=new Et(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),c&&(o.i=c.G.concat(o.i)),c=Rl(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Mi(o.h,d),Vi(d,m,c)}function or(o,c){o.H&&Qr(o.H,function(d,m){ne(c,m,d)}),o.l&&Qr({},function(d,m){ne(c,m,d)})}function Rl(o,c,d){d=Math.min(o.i.length,d);const m=o.l?h(o.l.Ka,o.l,o):null;e:{var x=o.i;let K=-1;for(;;){const fe=["count="+d];K==-1?d>0?(K=x[0].g,fe.push("ofs="+K)):K=0:fe.push("ofs="+K);let te=!0;for(let ye=0;ye<d;ye++){var C=x[ye].g;const We=x[ye].map;if(C-=K,C<0)K=Math.max(0,x[ye].g-100),te=!1;else try{C="req"+C+"_"||"";try{var M=We instanceof Map?We:Object.entries(We);for(const[Qt,bt]of M){let At=bt;l(bt)&&(At=Si(bt)),fe.push(C+Qt+"="+encodeURIComponent(At))}}catch(Qt){throw fe.push(C+"type="+encodeURIComponent("_badmap")),Qt}}catch{m&&m(We)}}if(te){M=fe.join("&");break e}}M=void 0}return o=o.i.splice(0,d),c.G=o,M}function xl(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;$||p(),W||($(),W=!0),w.add(c,o),o.A=0}}function $i(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Kn(h(o.Da,o),Pl(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Sl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Kn(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ce(10),ss(this),Sl(this))};function zi(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Sl(o){o.g=new Et(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=He(o.na);ne(c,"RID","rpc"),ne(c,"SID",o.M),ne(c,"AID",o.K),ne(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&ne(c,"TO",o.ia),ne(c,"TYPE","xmlhttp"),or(o,c),o.u&&o.o&&Ui(c,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=ts(He(c)),d.u=null,d.R=!0,nl(d,o)}n.Va=function(){this.C!=null&&(this.C=null,ss(this),$i(this),Ce(19))};function os(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Cl(o,c){var d=null;if(o.g==c){os(o),zi(o),o.g=null;var m=2}else if(Li(o.h,c))d=c.G,ll(o.h,c),m=1;else return;if(o.I!=0){if(c.o)if(m==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var x=o.D;m=Jr(),Se(m,new Ya(m,d)),is(o)}else xl(o);else if(x=c.m,x==3||x==0&&c.X>0||!(m==1&&zf(o,c)||m==2&&$i(o)))switch(d&&d.length>0&&(c=o.h,c.i=c.i.concat(d)),x){case 1:Kt(o,5);break;case 4:Kt(o,10);break;case 3:Kt(o,6);break;default:Kt(o,2)}}}function Pl(o,c){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*c}function Kt(o,c){if(o.j.info("Error code "+c),c==2){var d=h(o.bb,o),m=o.Ua;const x=!m;m=new wt(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Jn(m,"https"),ts(m),x?Mf(m.toString(),d):Ff(m.toString(),d)}else Ce(2);o.I=0,o.l&&o.l.pa(c),kl(o),bl(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function kl(o){if(o.I=0,o.ja=[],o.l){const c=cl(o.h);(c.length!=0||o.i.length!=0)&&(P(o.ja,c),P(o.ja,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.oa()}}function Nl(o,c,d){var m=d instanceof wt?He(d):new wt(d);if(m.g!="")c&&(m.g=c+"."+m.g),Zn(m,m.u);else{var x=a.location;m=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;const C=new wt(null);m&&Jn(C,m),c&&(C.g=c),x&&Zn(C,x),d&&(C.h=d),m=C}return d=o.G,c=o.wa,d&&c&&ne(m,d,c),ne(m,"VER",o.ka),or(o,m),m}function Vl(o,c,d){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new le(new ji({ab:d})):new le(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dl(){}n=Dl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function as(){}as.prototype.g=function(o,c){return new De(o,c)};function De(o,c){Ie.call(this),this.g=new Il(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!v(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new gn(this)}g(De,Ie),De.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},De.prototype.close=function(){Bi(this.g)},De.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Si(o),o=d);c.i.push(new Cf(c.Ya++,o)),c.I==3&&is(c)},De.prototype.N=function(){this.g.l=null,delete this.j,Bi(this.g),delete this.g,De.Z.N.call(this)};function Ol(o){Ci.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}g(Ol,Ci);function Ll(){Pi.call(this),this.status=1}g(Ll,Pi);function gn(o){this.g=o}g(gn,Dl),gn.prototype.ra=function(){Se(this.g,"a")},gn.prototype.qa=function(o){Se(this.g,new Ol(o))},gn.prototype.pa=function(o){Se(this.g,new Ll)},gn.prototype.oa=function(){Se(this.g,"b")},as.prototype.createWebChannel=as.prototype.g,De.prototype.send=De.prototype.o,De.prototype.open=De.prototype.m,De.prototype.close=De.prototype.close,Oh=function(){return new as},Dh=function(){return Jr()},Vh=Ht,_o={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Zr.NO_ERROR=0,Zr.TIMEOUT=8,Zr.HTTP_ERROR=6,Ts=Zr,Ja.COMPLETE="complete",Nh=Ja,Ga.EventType=Wn,Wn.OPEN="a",Wn.CLOSE="b",Wn.ERROR="c",Wn.MESSAGE="d",Ie.prototype.listen=Ie.prototype.J,ur=Ga,le.prototype.listenOnce=le.prototype.K,le.prototype.getLastError=le.prototype.Ha,le.prototype.getLastErrorCode=le.prototype.ya,le.prototype.getStatus=le.prototype.ca,le.prototype.getResponseJson=le.prototype.La,le.prototype.getResponseText=le.prototype.la,le.prototype.send=le.prototype.ea,le.prototype.setWithCredentials=le.prototype.Fa,kh=le}).apply(typeof hs<"u"?hs:typeof self<"u"?self:typeof window<"u"?window:{});const Ec="@firebase/firestore",wc="4.9.2";/**
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
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
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
 */let Bn="12.3.0";/**
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
 */const an=new Wo("@firebase/firestore");function _n(){return an.logLevel}function j(n,...e){if(an.logLevel<=Q.DEBUG){const t=e.map(ia);an.debug(`Firestore (${Bn}): ${n}`,...t)}}function mt(n,...e){if(an.logLevel<=Q.ERROR){const t=e.map(ia);an.error(`Firestore (${Bn}): ${n}`,...t)}}function Cn(n,...e){if(an.logLevel<=Q.WARN){const t=e.map(ia);an.warn(`Firestore (${Bn}): ${n}`,...t)}}function ia(n){if(typeof n=="string")return n;try{/**
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
 */function q(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Lh(n,r,t)}function Lh(n,e,t){let r=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw mt(r),new Error(r)}function Z(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Lh(e,s,r)}function G(n,e){return n}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class en{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Mh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ae.UNAUTHENTICATED))}shutdown(){}}class Cv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Pv{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new en;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new en,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new en)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string",31837,{l:r}),new Mh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string",2055,{h:e}),new Ae(e)}}class kv{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Nv{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new kv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ne(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0,3512);const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,j("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Tc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Tc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Dv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class oa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Dv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function X(n,e){return n<e?-1:n>e?1:0}function vo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return no(s)===no(i)?X(s,i):no(s)?1:-1}return X(n.length,e.length)}const Ov=55296,Lv=57343;function no(n){const e=n.charCodeAt(0);return e>=Ov&&e<=Lv}function Pn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Ic="__name__";class Ge{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&q(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ge.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ge?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ge.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return X(e.length,t.length)}static compareSegments(e,t){const r=Ge.isNumericId(e),s=Ge.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ge.extractNumericId(e).compare(Ge.extractNumericId(t)):vo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ot.fromString(e.substring(4,e.length-2))}}class oe extends Ge{construct(e,t,r){return new oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new oe(t)}static emptyPath(){return new oe([])}}const Mv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends Ge{construct(e,t,r){return new we(e,t,r)}static isValidIdentifier(e){return Mv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ic}static keyField(){return new we([Ic])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new U(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new U(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(oe.fromString(e))}static fromName(e){return new B(oe.fromString(e).popFirst(5))}static empty(){return new B(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new oe(e.slice()))}}/**
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
 */function Fv(n,e,t){if(!t)throw new U(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function jv(n,e,t,r){if(e===!0&&r===!0)throw new U(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function bc(n){if(!B.isDocumentKey(n))throw new U(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Fh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function aa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function An(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=aa(n);throw new U(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function de(n,e){const t={typeString:n};return e&&(t.value=e),t}function Br(n,e){if(!Fh(n))throw new U(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new U(L.INVALID_ARGUMENT,t);return!0}/**
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
 */const Ac=-62135596800,Rc=1e6;class re{static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Rc);return new re(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ac)throw new U(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rc}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:re._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Br(e,re._jsonSchema))return new re(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ac;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}re._jsonSchemaVersion="firestore/timestamp/1.0",re._jsonSchema={type:de("string",re._jsonSchemaVersion),seconds:de("number"),nanoseconds:de("number")};/**
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
 */class H{static fromTimestamp(e){return new H(e)}static min(){return new H(new re(0,0))}static max(){return new H(new re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const br=-1;function Uv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new re(t+1,0):new re(t,r));return new Mt(s,B.empty(),e)}function Bv(n){return new Mt(n.readTime,n.key,br)}class Mt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Mt(H.min(),B.empty(),br)}static max(){return new Mt(H.max(),B.empty(),br)}}function $v(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
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
 */const zv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $n(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==zv)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(s=>s?O.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new O((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new O((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Hv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function zn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class si{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}si.ce=-1;/**
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
 */const la=-1;function ii(n){return n==null}function Fs(n){return n===0&&1/n==-1/0}function Wv(n){return typeof n=="number"&&Number.isInteger(n)&&!Fs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const jh="";function Gv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=xc(e)),e=Kv(n.get(t),e);return xc(e)}function Kv(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case jh:t+="";break;default:t+=i}}return t}function xc(n){return n+jh+""}/**
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
 */function Sc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function un(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Uh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ae{constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ds(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ds(this.root,e,this.comparator,!1)}getReverseIterator(){return new ds(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ds(this.root,e,this.comparator,!0)}}class ds{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ee.RED,this.left=s??Ee.EMPTY,this.right=i??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ee(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ee.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pe{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Cc(this.data.getIterator())}getIteratorFrom(e){return new Cc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class Cc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ue{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new pe(we.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Pn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Bh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bh("Invalid base64 string: "+i):i}}(e);return new Te(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const Qv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ft(n){if(Z(!!n,39018),typeof n=="string"){let e=0;const t=Qv.exec(n);if(Z(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function jt(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
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
 */const $h="server_timestamp",zh="__type__",qh="__previous_value__",Hh="__local_write_time__";function ca(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[zh])==null?void 0:r.stringValue)===$h}function oi(n){const e=n.mapValue.fields[qh];return ca(e)?oi(e):e}function Ar(n){const e=Ft(n.mapValue.fields[Hh].timestampValue);return new re(e.seconds,e.nanos)}/**
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
 */class Xv{constructor(e,t,r,s,i,a,l,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const js="(default)";class Rr{constructor(e,t){this.projectId=e,this.database=t||js}static empty(){return new Rr("","")}get isDefaultDatabase(){return this.database===js}isEqual(e){return e instanceof Rr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Wh="__type__",Yv="__max__",fs={mapValue:{}},Gh="__vector__",Us="value";function Ut(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ca(n)?4:Zv(n)?9007199254740991:Jv(n)?10:11:q(28295,{value:n})}function tt(n,e){if(n===e)return!0;const t=Ut(n);if(t!==Ut(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ar(n).isEqual(Ar(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ft(s.timestampValue),l=Ft(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return jt(s.bytesValue).isEqual(jt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ce(s.geoPointValue.latitude)===ce(i.geoPointValue.latitude)&&ce(s.geoPointValue.longitude)===ce(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ce(s.integerValue)===ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ce(s.doubleValue),l=ce(i.doubleValue);return a===l?Fs(a)===Fs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Pn(n.arrayValue.values||[],e.arrayValue.values||[],tt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Sc(a)!==Sc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!tt(a[u],l[u])))return!1;return!0}(n,e);default:return q(52216,{left:n})}}function xr(n,e){return(n.values||[]).find(t=>tt(t,e))!==void 0}function kn(n,e){if(n===e)return 0;const t=Ut(n),r=Ut(e);if(t!==r)return X(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=ce(i.integerValue||i.doubleValue),u=ce(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Pc(n.timestampValue,e.timestampValue);case 4:return Pc(Ar(n),Ar(e));case 5:return vo(n.stringValue,e.stringValue);case 6:return function(i,a){const l=jt(i),u=jt(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=X(l[h],u[h]);if(f!==0)return f}return X(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=X(ce(i.latitude),ce(a.latitude));return l!==0?l:X(ce(i.longitude),ce(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return kc(n.arrayValue,e.arrayValue);case 10:return function(i,a){var E,b,P,k;const l=i.fields||{},u=a.fields||{},h=(E=l[Us])==null?void 0:E.arrayValue,f=(b=u[Us])==null?void 0:b.arrayValue,g=X(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((k=f==null?void 0:f.values)==null?void 0:k.length)||0);return g!==0?g:kc(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===fs.mapValue&&a===fs.mapValue)return 0;if(i===fs.mapValue)return 1;if(a===fs.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const E=vo(u[g],f[g]);if(E!==0)return E;const b=kn(l[u[g]],h[f[g]]);if(b!==0)return b}return X(u.length,f.length)}(n.mapValue,e.mapValue);default:throw q(23264,{he:t})}}function Pc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=Ft(n),r=Ft(e),s=X(t.seconds,r.seconds);return s!==0?s:X(t.nanos,r.nanos)}function kc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=kn(t[s],r[s]);if(i)return i}return X(t.length,r.length)}function Nn(n){return Eo(n)}function Eo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ft(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return jt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Eo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Eo(t.fields[a])}`;return s+"}"}(n.mapValue):q(61005,{value:n})}function Is(n){switch(Ut(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=oi(n);return e?16+Is(e):16;case 5:return 2*n.stringValue.length;case 6:return jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Is(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return un(r.fields,(i,a)=>{s+=i.length+Is(a)}),s}(n.mapValue);default:throw q(13486,{value:n})}}function wo(n){return!!n&&"integerValue"in n}function ua(n){return!!n&&"arrayValue"in n}function Nc(n){return!!n&&"nullValue"in n}function Vc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bs(n){return!!n&&"mapValue"in n}function Jv(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Wh])==null?void 0:r.stringValue)===Gh}function gr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return un(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=gr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gr(n.arrayValue.values[t]);return e}return{...n}}function Zv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Yv}/**
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
 */class Le{constructor(e){this.value=e}static empty(){return new Le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!bs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gr(t)}setAll(e){let t=we.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=gr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());bs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];bs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){un(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Le(gr(this.value))}}function Kh(n){const e=[];return un(n.fields,(t,r)=>{const s=new we([t]);if(bs(r)){const i=Kh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ue(e)}/**
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
 */class Re{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Re(e,0,H.min(),H.min(),H.min(),Le.empty(),0)}static newFoundDocument(e,t,r,s){return new Re(e,1,t,H.min(),r,s,0)}static newNoDocument(e,t){return new Re(e,2,t,H.min(),H.min(),Le.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,H.min(),H.min(),Le.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bs{constructor(e,t){this.position=e,this.inclusive=t}}function Dc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),t.key):r=kn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Oc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!tt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class $s{constructor(e,t="asc"){this.field=e,this.dir=t}}function eE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Qh{}class me extends Qh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new nE(e,t,r):t==="array-contains"?new iE(e,r):t==="in"?new oE(e,r):t==="not-in"?new aE(e,r):t==="array-contains-any"?new lE(e,r):new me(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new rE(e,r):new sE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(kn(t,this.value)):t!==null&&Ut(this.value)===Ut(t)&&this.matchesComparison(kn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nt extends Qh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new nt(e,t)}matches(e){return Xh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Xh(n){return n.op==="and"}function Yh(n){return tE(n)&&Xh(n)}function tE(n){for(const e of n.filters)if(e instanceof nt)return!1;return!0}function To(n){if(n instanceof me)return n.field.canonicalString()+n.op.toString()+Nn(n.value);if(Yh(n))return n.filters.map(e=>To(e)).join(",");{const e=n.filters.map(t=>To(t)).join(",");return`${n.op}(${e})`}}function Jh(n,e){return n instanceof me?function(r,s){return s instanceof me&&r.op===s.op&&r.field.isEqual(s.field)&&tt(r.value,s.value)}(n,e):n instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Jh(a,s.filters[l]),!0):!1}(n,e):void q(19439)}function Zh(n){return n instanceof me?function(t){return`${t.field.canonicalString()} ${t.op} ${Nn(t.value)}`}(n):n instanceof nt?function(t){return t.op.toString()+" {"+t.getFilters().map(Zh).join(" ,")+"}"}(n):"Filter"}class nE extends me{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class rE extends me{constructor(e,t){super(e,"in",t),this.keys=ed("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sE extends me{constructor(e,t){super(e,"not-in",t),this.keys=ed("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ed(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}class iE extends me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ua(t)&&xr(t.arrayValue,this.value)}}class oE extends me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&xr(this.value.arrayValue,t)}}class aE extends me{constructor(e,t){super(e,"not-in",t)}matches(e){if(xr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!xr(this.value.arrayValue,t)}}class lE extends me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ua(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>xr(this.value.arrayValue,r))}}/**
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
 */class cE{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Lc(n,e=null,t=[],r=[],s=null,i=null,a=null){return new cE(n,e,t,r,s,i,a)}function ha(n){const e=G(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>To(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ii(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Nn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Nn(r)).join(",")),e.Te=t}return e.Te}function da(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!eE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Jh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Oc(n.startAt,e.startAt)&&Oc(n.endAt,e.endAt)}function Io(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ai{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function uE(n,e,t,r,s,i,a,l){return new ai(n,e,t,r,s,i,a,l)}function fa(n){return new ai(n)}function Mc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hE(n){return n.collectionGroup!==null}function yr(n){const e=G(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new pe(we.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new $s(i,r))}),t.has(we.keyField().canonicalString())||e.Ie.push(new $s(we.keyField(),r))}return e.Ie}function Ye(n){const e=G(n);return e.Ee||(e.Ee=dE(e,yr(n))),e.Ee}function dE(n,e){if(n.limitType==="F")return Lc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new $s(s.field,i)});const t=n.endAt?new Bs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Bs(n.startAt.position,n.startAt.inclusive):null;return Lc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function bo(n,e,t){return new ai(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function li(n,e){return da(Ye(n),Ye(e))&&n.limitType===e.limitType}function td(n){return`${ha(Ye(n))}|lt:${n.limitType}`}function vn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Zh(s)).join(", ")}]`),ii(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Nn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Nn(s)).join(",")),`Target(${r})`}(Ye(n))}; limitType=${n.limitType})`}function ci(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of yr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const h=Dc(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,yr(r),s)||r.endAt&&!function(a,l,u){const h=Dc(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,yr(r),s))}(n,e)}function fE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nd(n){return(e,t)=>{let r=!1;for(const s of yr(n)){const i=mE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function mE(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),h=l.data.field(i);return u!==null&&h!==null?kn(u,h):q(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:n.dir})}}/**
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
 */class hn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){un(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Uh(this.inner)}size(){return this.innerSize}}/**
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
 */const pE=new ae(B.comparator);function pt(){return pE}const rd=new ae(B.comparator);function hr(...n){let e=rd;for(const t of n)e=e.insert(t.key,t);return e}function sd(n){let e=rd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Jt(){return _r()}function id(){return _r()}function _r(){return new hn(n=>n.toString(),(n,e)=>n.isEqual(e))}const gE=new ae(B.comparator),yE=new pe(B.comparator);function Y(...n){let e=yE;for(const t of n)e=e.add(t);return e}const _E=new pe(X);function vE(){return _E}/**
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
 */function ma(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fs(e)?"-0":e}}function od(n){return{integerValue:""+n}}function EE(n,e){return Wv(e)?od(e):ma(n,e)}/**
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
 */class ui{constructor(){this._=void 0}}function wE(n,e,t){return n instanceof zs?function(s,i){const a={fields:{[zh]:{stringValue:$h},[Hh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ca(i)&&(i=oi(i)),i&&(a.fields[qh]=i),{mapValue:a}}(t,e):n instanceof Sr?ld(n,e):n instanceof Cr?cd(n,e):function(s,i){const a=ad(s,i),l=Fc(a)+Fc(s.Ae);return wo(a)&&wo(s.Ae)?od(l):ma(s.serializer,l)}(n,e)}function TE(n,e,t){return n instanceof Sr?ld(n,e):n instanceof Cr?cd(n,e):t}function ad(n,e){return n instanceof qs?function(r){return wo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class zs extends ui{}class Sr extends ui{constructor(e){super(),this.elements=e}}function ld(n,e){const t=ud(e);for(const r of n.elements)t.some(s=>tt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Cr extends ui{constructor(e){super(),this.elements=e}}function cd(n,e){let t=ud(e);for(const r of n.elements)t=t.filter(s=>!tt(s,r));return{arrayValue:{values:t}}}class qs extends ui{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Fc(n){return ce(n.integerValue||n.doubleValue)}function ud(n){return ua(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function IE(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Sr&&s instanceof Sr||r instanceof Cr&&s instanceof Cr?Pn(r.elements,s.elements,tt):r instanceof qs&&s instanceof qs?tt(r.Ae,s.Ae):r instanceof zs&&s instanceof zs}(n.transform,e.transform)}class bE{constructor(e,t){this.version=e,this.transformResults=t}}class ct{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ct}static exists(e){return new ct(void 0,e)}static updateTime(e){return new ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function As(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class hi{}function hd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new fd(n.key,ct.none()):new $r(n.key,n.data,ct.none());{const t=n.data,r=Le.empty();let s=new pe(we.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new dn(n.key,r,new Ue(s.toArray()),ct.none())}}function AE(n,e,t){n instanceof $r?function(s,i,a){const l=s.value.clone(),u=Uc(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof dn?function(s,i,a){if(!As(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Uc(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(dd(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function vr(n,e,t,r){return n instanceof $r?function(i,a,l,u){if(!As(i.precondition,a))return l;const h=i.value.clone(),f=Bc(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof dn?function(i,a,l,u){if(!As(i.precondition,a))return l;const h=Bc(i.fieldTransforms,u,a),f=a.data;return f.setAll(dd(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,l){return As(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function RE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=ad(r.transform,s||null);i!=null&&(t===null&&(t=Le.empty()),t.set(r.field,i))}return t||null}function jc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Pn(r,s,(i,a)=>IE(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class $r extends hi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dn extends hi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function dd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Uc(n,e,t){const r=new Map;Z(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,TE(a,l,t[s]))}return r}function Bc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,wE(i,a,e))}return r}class fd extends hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xE extends hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class SE{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&AE(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=vr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=vr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=id();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=hd(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Y())}isEqual(e){return this.batchId===e.batchId&&Pn(this.mutations,e.mutations,(t,r)=>jc(t,r))&&Pn(this.baseMutations,e.baseMutations,(t,r)=>jc(t,r))}}class pa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Z(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return gE}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new pa(e,t,r,s)}}/**
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
 */class CE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class PE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,J;function kE(n){switch(n){case L.OK:return q(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function md(n){if(n===void 0)return mt("GRPC error has no .code"),L.UNKNOWN;switch(n){case he.OK:return L.OK;case he.CANCELLED:return L.CANCELLED;case he.UNKNOWN:return L.UNKNOWN;case he.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case he.INTERNAL:return L.INTERNAL;case he.UNAVAILABLE:return L.UNAVAILABLE;case he.UNAUTHENTICATED:return L.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case he.NOT_FOUND:return L.NOT_FOUND;case he.ALREADY_EXISTS:return L.ALREADY_EXISTS;case he.PERMISSION_DENIED:return L.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case he.ABORTED:return L.ABORTED;case he.OUT_OF_RANGE:return L.OUT_OF_RANGE;case he.UNIMPLEMENTED:return L.UNIMPLEMENTED;case he.DATA_LOSS:return L.DATA_LOSS;default:return q(39323,{code:n})}}(J=he||(he={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function NE(){return new TextEncoder}/**
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
 */const VE=new Ot([4294967295,4294967295],0);function $c(n){const e=NE().encode(n),t=new Ph;return t.update(e),new Uint8Array(t.digest())}function zc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ot([t,r],0),new Ot([s,i],0)]}class ga{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new dr(`Invalid padding: ${t}`);if(r<0)throw new dr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new dr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new dr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ot.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Ot.fromNumber(r)));return s.compare(VE)===1&&(s=new Ot([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=$c(e),[r,s]=zc(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ga(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=$c(e),[r,s]=zc(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class dr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class di{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,zr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new di(H.min(),s,new ae(X),pt(),Y())}}class zr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new zr(r,t,Y(),Y(),Y())}}/**
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
 */class Rs{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class pd{constructor(e,t){this.targetId=e,this.Ce=t}}class gd{constructor(e,t,r=Te.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class qc{constructor(){this.ve=0,this.Fe=Hc(),this.Me=Te.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Y(),t=Y(),r=Y();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:q(38017,{changeType:i})}}),new zr(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Hc()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class DE{constructor(e){this.Ge=e,this.ze=new Map,this.je=pt(),this.Je=ms(),this.He=ms(),this.Ye=new ae(X)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:q(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Io(i))if(r===0){const a=new B(i.path);this.et(t,a,Re.newNoDocument(a,H.min()))}else Z(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=jt(r).toUint8Array()}catch(u){if(u instanceof Bh)return Cn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ga(a,s,i)}catch(u){return Cn(u instanceof dr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Io(l.target)){const u=new B(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Re.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=Y();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new di(e,t,this.Ye,this.je,r);return this.je=pt(),this.Je=ms(),this.He=ms(),this.Ye=new ae(X),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new qc,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new pe(X),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new pe(X),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||j("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new qc),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ms(){return new ae(B.comparator)}function Hc(){return new ae(B.comparator)}const OE={asc:"ASCENDING",desc:"DESCENDING"},LE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ME={and:"AND",or:"OR"};class FE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ao(n,e){return n.useProto3Json||ii(e)?e:{value:e}}function Hs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function jE(n,e){return Hs(n,e.toTimestamp())}function Je(n){return Z(!!n,49232),H.fromTimestamp(function(t){const r=Ft(t);return new re(r.seconds,r.nanos)}(n))}function ya(n,e){return Ro(n,e).canonicalString()}function Ro(n,e){const t=function(s){return new oe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function _d(n){const e=oe.fromString(n);return Z(Id(e),10190,{key:e.toString()}),e}function xo(n,e){return ya(n.databaseId,e.path)}function ro(n,e){const t=_d(e);if(t.get(1)!==n.databaseId.projectId)throw new U(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(Ed(t))}function vd(n,e){return ya(n.databaseId,e)}function UE(n){const e=_d(n);return e.length===4?oe.emptyPath():Ed(e)}function So(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ed(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Wc(n,e,t){return{name:xo(n,e),fields:t.value.mapValue.fields}}function BE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Z(f===void 0||typeof f=="string",58123),Te.fromBase64String(f||"")):(Z(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Te.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?L.UNKNOWN:md(h.code);return new U(f,h.message||"")}(a);t=new gd(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ro(n,r.document.name),i=Je(r.document.updateTime),a=r.document.createTime?Je(r.document.createTime):H.min(),l=new Le({mapValue:{fields:r.document.fields}}),u=Re.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Rs(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ro(n,r.document),i=r.readTime?Je(r.readTime):H.min(),a=Re.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Rs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ro(n,r.document),i=r.removedTargetIds||[];t=new Rs([],i,s,null)}else{if(!("filter"in e))return q(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new PE(s,i),l=r.targetId;t=new pd(l,a)}}return t}function $E(n,e){let t;if(e instanceof $r)t={update:Wc(n,e.key,e.value)};else if(e instanceof fd)t={delete:xo(n,e.key)};else if(e instanceof dn)t={update:Wc(n,e.key,e.data),updateMask:YE(e.fieldMask)};else{if(!(e instanceof xE))return q(16599,{Vt:e.type});t={verify:xo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof zs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Sr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Cr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof qs)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw q(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q(27497)}(n,e.precondition)),t}function zE(n,e){return n&&n.length>0?(Z(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Je(s.updateTime):Je(i);return a.isEqual(H.min())&&(a=Je(i)),new bE(a,s.transformResults||[])}(t,e))):[]}function qE(n,e){return{documents:[vd(n,e.path)]}}function HE(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=vd(n,s);const i=function(h){if(h.length!==0)return Td(nt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(E){return{field:En(E.field),direction:KE(E.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Ao(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function WE(n){let e=UE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Z(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const E=wd(g);return E instanceof nt&&Yh(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(E=>function(P){return new $s(wn(P.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(E))}(t.orderBy));let l=null;t.limit&&(l=function(g){let E;return E=typeof g=="object"?g.value:g,ii(E)?null:E}(t.limit));let u=null;t.startAt&&(u=function(g){const E=!!g.before,b=g.values||[];return new Bs(b,E)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const E=!g.before,b=g.values||[];return new Bs(b,E)}(t.endAt)),uE(e,s,a,i,l,"F",u,h)}function GE(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=wn(t.unaryFilter.field);return me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=wn(t.unaryFilter.field);return me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=wn(t.unaryFilter.field);return me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=wn(t.unaryFilter.field);return me.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(n):n.fieldFilter!==void 0?function(t){return me.create(wn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return nt.create(t.compositeFilter.filters.map(r=>wd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(t.compositeFilter.op))}(n):q(30097,{filter:n})}function KE(n){return OE[n]}function QE(n){return LE[n]}function XE(n){return ME[n]}function En(n){return{fieldPath:n.canonicalString()}}function wn(n){return we.fromServerFormat(n.fieldPath)}function Td(n){return n instanceof me?function(t){if(t.op==="=="){if(Vc(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NAN"}};if(Nc(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Vc(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NAN"}};if(Nc(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:En(t.field),op:QE(t.op),value:t.value}}}(n):n instanceof nt?function(t){const r=t.getFilters().map(s=>Td(s));return r.length===1?r[0]:{compositeFilter:{op:XE(t.op),filters:r}}}(n):q(54877,{filter:n})}function YE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Id(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class kt{constructor(e,t,r,s,i=H.min(),a=H.min(),l=Te.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class JE{constructor(e){this.yt=e}}function ZE(n){const e=WE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?bo(e,e.limit,"L"):e}/**
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
 */class e0{constructor(){this.Cn=new t0}addToCollectionParentIndex(e,t){return this.Cn.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(Mt.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(Mt.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class t0{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new pe(oe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pe(oe.comparator)).toArray()}}/**
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
 */const Gc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},bd=41943040;class ke{static withCacheSize(e){return new ke(e,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ke.DEFAULT_COLLECTION_PERCENTILE=10,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ke.DEFAULT=new ke(bd,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ke.DISABLED=new ke(-1,0,0);/**
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
 */class Vn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Vn(0)}static cr(){return new Vn(-1)}}/**
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
 */const Kc="LruGarbageCollector",n0=1048576;function Qc([n,e],[t,r]){const s=X(n,t);return s===0?X(e,r):s}class r0{constructor(e){this.Ir=e,this.buffer=new pe(Qc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Qc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class s0{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){j(Kc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zn(t)?j(Kc,"Ignoring IndexedDB error during garbage collection: ",t):await $n(t)}await this.Vr(3e5)})}}class i0{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return O.resolve(si.ce);const r=new r0(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Gc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gc):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,t))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),_n()<=Q.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function o0(n,e){return new i0(n,e)}/**
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
 */class a0{constructor(){this.changes=new hn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class l0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class c0{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&vr(r.mutation,s,Ue.empty(),re.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Y()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Y()){const s=Jt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=hr();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Jt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Y()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=pt();const a=_r(),l=function(){return _r()}();return t.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof dn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),vr(f.mutation,h,f.mutation.getFieldMask(),re.now())):a.set(h.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>l.set(h,new l0(f,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const r=_r();let s=new ae((a,l)=>a-l),i=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||Ue.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(s.get(l.batchId)||Y()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=id();f.forEach(E=>{if(!i.has(E)){const b=hd(t.get(E),r.get(E));b!==null&&g.set(E,b),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):O.resolve(Jt());let l=br,u=i;return a.next(h=>O.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{u=u.insert(f,E)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,Y())).next(f=>({batchId:l,changes:sd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let s=hr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=hr();return this.indexManager.getCollectionParents(e,i).next(l=>O.forEach(l,u=>{const h=function(g,E){return new ai(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,E)=>{a=a.insert(g,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Re.newInvalidDocument(f)))});let l=hr();return a.forEach((u,h)=>{const f=i.get(u);f!==void 0&&vr(f.mutation,h,Ue.empty(),re.now()),ci(t,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class u0{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return O.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Je(s.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:ZE(s.bundledQuery),readTime:Je(s.readTime)}}(t)),O.resolve()}}/**
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
 */class h0{constructor(){this.overlays=new ae(B.comparator),this.qr=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Jt();return O.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const s=Jt(),i=t.length+1,a=new B(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return O.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ae((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Jt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Jt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return O.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new CE(t,r));let i=this.qr.get(t);i===void 0&&(i=Y(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class d0{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
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
 */class _a{constructor(){this.Qr=new pe(_e.$r),this.Ur=new pe(_e.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new _e(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new _e(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new B(new oe([])),r=new _e(t,e),s=new _e(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new B(new oe([])),r=new _e(t,e),s=new _e(t,e+1);let i=Y();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new _e(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return B.comparator(e.key,t.key)||X(e.Yr,t.Yr)}static Kr(e,t){return X(e.Yr,t.Yr)||B.comparator(e.key,t.key)}}/**
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
 */class f0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new pe(_e.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new SE(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new _e(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,t){return O.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?la:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new _e(t,0),s=new _e(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const l=this.Xr(a.Yr);i.push(l)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(X);return t.forEach(s=>{const i=new _e(s,0),a=new _e(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const a=new _e(new B(i),0);let l=new pe(X);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Yr)),!0)},a),O.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Z(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(t.mutations,s=>{const i=new _e(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new _e(t,0),s=this.Zr.firstAfterOrEqual(r);return O.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class m0{constructor(e){this.ri=e,this.docs=function(){return new ae(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let r=pt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Re.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=pt();const a=t.path,l=new B(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||$v(Bv(f),r)<=0||(s.has(f.key)||ci(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,t,r,s){q(9500)}ii(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new p0(this)}getSize(e){return O.resolve(this.size)}}class p0 extends a0{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class g0{constructor(e){this.persistence=e,this.si=new hn(t=>ha(t),da),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.oi=0,this._i=new _a,this.targetCount=0,this.ai=Vn.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),O.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Vn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Pr(t),O.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this._i.containsKey(t))}}/**
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
 */class Ad{constructor(e,t){this.ui={},this.overlays={},this.ci=new si(0),this.li=!1,this.li=!0,this.hi=new d0,this.referenceDelegate=e(this),this.Pi=new g0(this),this.indexManager=new e0,this.remoteDocumentCache=function(s){return new m0(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new JE(t),this.Ii=new u0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new h0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new f0(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){j("MemoryPersistence","Starting transaction:",e);const s=new y0(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class y0 extends qv{constructor(e){super(),this.currentSequenceNumber=e}}class va{constructor(e){this.persistence=e,this.Ri=new _a,this.Vi=null}static mi(e){return new va(e)}get fi(){if(this.Vi)return this.Vi;throw q(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),O.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const s=B.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return O.or([()=>O.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Ws{constructor(e,t){this.persistence=e,this.pi=new hn(r=>Gv(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=o0(this,t)}static mi(e,t){return new Ws(e,t)}Ei(){}di(e){return O.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return O.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?O.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(l=>{l||(r++,i.removeEntry(a,H.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),O.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),O.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Is(e.data.value)),t}br(e,t,r){return O.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ea{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=Y(),s=Y();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ea(e,t.fromCache,r,s)}}/**
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
 */class _0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class v0{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return zp()?8:Hv(xe())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new _0;return this.Ss(e,t,a).next(l=>{if(i.result=l,this.Vs)return this.bs(e,t,a,l.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(_n()<=Q.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",vn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(_n()<=Q.DEBUG&&j("QueryEngine","Query:",vn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(_n()<=Q.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",vn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ye(t))):O.resolve())}ys(e,t){if(Mc(t))return O.resolve(null);let r=Ye(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=bo(t,null,"F"),r=Ye(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Y(...i);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(t,l);return this.Cs(t,h,a,u.readTime)?this.ys(e,bo(t,null,"F")):this.vs(e,h,t,u)}))})))}ws(e,t,r,s){return Mc(t)||s.isEqual(H.min())?O.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?O.resolve(null):(_n()<=Q.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vn(t)),this.vs(e,a,t,Uv(s,br)).next(l=>l))})}Ds(e,t){let r=new pe(nd(e));return t.forEach((s,i)=>{ci(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return _n()<=Q.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",vn(t)),this.ps.getDocumentsMatchingQuery(e,t,Mt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const wa="LocalStore",E0=3e8;class w0{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new ae(X),this.xs=new hn(i=>ha(i),da),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new c0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function T0(n,e,t,r){return new w0(n,e,t,r)}async function Rd(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=Y();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:l}))})})}function I0(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,E=g.keys();let b=O.resolve();return E.forEach(P=>{b=b.next(()=>f.getEntry(u,P)).next(k=>{const S=h.docVersions.get(P);Z(S!==null,48541),k.version.compareTo(S)<0&&(g.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Y();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function xd(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function b0(n,e){const t=G(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach((f,g)=>{const E=s.get(g);if(!E)return;l.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.Pi.addMatchingKeys(i,f.addedDocuments,g)));let b=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?b=b.withResumeToken(Te.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(g,b),function(k,S,V){return k.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=E0?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(E,b,f)&&l.push(t.Pi.updateTargetData(i,b))});let u=pt(),h=Y();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(A0(i,a,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(H.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next(g=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.Ms=s,i))}function A0(n,e,t){let r=Y(),s=Y();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=pt();return t.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(H.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):j(wa,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:a,qs:s}})}function R0(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=la),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function x0(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new kt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function Co(n,e,t){const r=G(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!zn(a))throw a;j(wa,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Xc(n,e,t){const r=G(n);let s=H.min(),i=Y();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const g=G(u),E=g.xs.get(f);return E!==void 0?O.resolve(g.Ms.get(E)):g.Pi.getTargetData(h,f)}(r,a,Ye(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:H.min(),t?i:Y())).next(l=>(S0(r,fE(e),l),{documents:l,Qs:i})))}function S0(n,e,t){let r=n.Os.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class Yc{constructor(){this.activeTargetIds=vE()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class C0{constructor(){this.Mo=new Yc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Yc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class P0{Oo(e){}shutdown(){}}/**
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
 */const Jc="ConnectivityMonitor";class Zc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){j(Jc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){j(Jc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ps=null;function Po(){return ps===null?ps=function(){return 268435456+Math.round(2147483648*Math.random())}():ps++,"0x"+ps.toString(16)}/**
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
 */const so="RestConnection",k0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class N0{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===js?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=Po(),l=this.zo(e,t.toUriEncodedString());j(so,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(l),f=Fn(h);return this.Jo(e,l,u,r,f).then(g=>(j(so,`Received RPC '${e}' ${a}: `,g),g),g=>{throw Cn(so,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=k0[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class V0{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const be="WebChannelConnection";class D0 extends N0{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Po();return new Promise((l,u)=>{const h=new kh;h.setWithCredentials(!0),h.listenOnce(Nh.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ts.NO_ERROR:const g=h.getResponseJson();j(be,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case Ts.TIMEOUT:j(be,`RPC '${e}' ${a} timed out`),u(new U(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ts.HTTP_ERROR:const E=h.getStatus();if(j(be,`RPC '${e}' ${a} failed with status:`,E,"response text:",h.getResponseText()),E>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const P=b==null?void 0:b.error;if(P&&P.status&&P.message){const k=function(V){const D=V.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(D)>=0?D:L.UNKNOWN}(P.status);u(new U(k,P.message))}else u(new U(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new U(L.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{j(be,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);j(be,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=Po(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Oh(),l=Dh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");j(be,`Creating RPC '${e}' stream ${s}: ${f}`,u);const g=a.createWebChannel(f,u);this.I_(g);let E=!1,b=!1;const P=new V0({Yo:S=>{b?j(be,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(E||(j(be,`Opening RPC '${e}' stream ${s} transport.`),g.open(),E=!0),j(be,`RPC '${e}' stream ${s} sending:`,S),g.send(S))},Zo:()=>g.close()}),k=(S,V,D)=>{S.listen(V,N=>{try{D(N)}catch(F){setTimeout(()=>{throw F},0)}})};return k(g,ur.EventType.OPEN,()=>{b||(j(be,`RPC '${e}' stream ${s} transport opened.`),P.o_())}),k(g,ur.EventType.CLOSE,()=>{b||(b=!0,j(be,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(g))}),k(g,ur.EventType.ERROR,S=>{b||(b=!0,Cn(be,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),P.a_(new U(L.UNAVAILABLE,"The operation could not be completed")))}),k(g,ur.EventType.MESSAGE,S=>{var V;if(!b){const D=S.data[0];Z(!!D,16349);const N=D,F=(N==null?void 0:N.error)||((V=N[0])==null?void 0:V.error);if(F){j(be,`RPC '${e}' stream ${s} received error:`,F);const $=F.status;let W=function(_){const T=he[_];if(T!==void 0)return md(T)}($),w=F.message;W===void 0&&(W=L.INTERNAL,w="Unknown error status: "+$+" with message "+F.message),b=!0,P.a_(new U(W,w)),g.close()}else j(be,`RPC '${e}' stream ${s} received:`,D),P.u_(D)}}),k(l,Vh.STAT_EVENT,S=>{S.stat===_o.PROXY?j(be,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===_o.NOPROXY&&j(be,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function io(){return typeof document<"u"?document:null}/**
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
 */function fi(n){return new FE(n,!0)}/**
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
 */class Sd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const eu="PersistentStream";class Cd{constructor(e,t,r,s,i,a,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Sd(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(mt(t.toString()),mt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new U(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return j(eu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(j(eu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class O0 extends Cd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=BE(this.serializer,e),r=function(i){if(!("targetChange"in i))return H.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?Je(a.readTime):H.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=So(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=Io(u)?{documents:qE(i,u)}:{query:HE(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=yd(i,a.resumeToken);const h=Ao(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(H.min())>0){l.readTime=Hs(i,a.snapshotVersion.toTimestamp());const h=Ao(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=GE(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=So(this.serializer),t.removeTarget=e,this.q_(t)}}class L0 extends Cd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=zE(e.writeResults,e.commitTime),r=Je(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=So(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>$E(this.serializer,r))};this.q_(t)}}/**
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
 */class M0{}class F0 extends M0{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new U(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,Ro(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(L.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,Ro(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(L.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class j0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(mt(t),this.aa=!1):j("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ln="RemoteStore";class U0{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{fn(this)&&(j(ln,"Restarting streams for network reachability change."),await async function(u){const h=G(u);h.Ea.add(4),await qr(h),h.Ra.set("Unknown"),h.Ea.delete(4),await mi(h)}(this))})}),this.Ra=new j0(r,s)}}async function mi(n){if(fn(n))for(const e of n.da)await e(!0)}async function qr(n){for(const e of n.da)await e(!1)}function Pd(n,e){const t=G(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Aa(t)?ba(t):qn(t).O_()&&Ia(t,e))}function Ta(n,e){const t=G(n),r=qn(t);t.Ia.delete(e),r.O_()&&kd(t,e),t.Ia.size===0&&(r.O_()?r.L_():fn(t)&&t.Ra.set("Unknown"))}function Ia(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}qn(n).Y_(e)}function kd(n,e){n.Va.Ue(e),qn(n).Z_(e)}function ba(n){n.Va=new DE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),qn(n).start(),n.Ra.ua()}function Aa(n){return fn(n)&&!qn(n).x_()&&n.Ia.size>0}function fn(n){return G(n).Ea.size===0}function Nd(n){n.Va=void 0}async function B0(n){n.Ra.set("Online")}async function $0(n){n.Ia.forEach((e,t)=>{Ia(n,e)})}async function z0(n,e){Nd(n),Aa(n)?(n.Ra.ha(e),ba(n)):n.Ra.set("Unknown")}async function q0(n,e,t){if(n.Ra.set("Online"),e instanceof gd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))}(n,e)}catch(r){j(ln,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gs(n,r)}else if(e instanceof Rs?n.Va.Ze(e):e instanceof pd?n.Va.st(e):n.Va.tt(e),!t.isEqual(H.min()))try{const r=await xd(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Te.EMPTY_BYTE_STRING,f.snapshotVersion)),kd(i,u);const g=new kt(f.target,u,h,f.sequenceNumber);Ia(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){j(ln,"Failed to raise snapshot:",r),await Gs(n,r)}}async function Gs(n,e,t){if(!zn(e))throw e;n.Ea.add(1),await qr(n),n.Ra.set("Offline"),t||(t=()=>xd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{j(ln,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await mi(n)})}function Vd(n,e){return e().catch(t=>Gs(n,t,e))}async function pi(n){const e=G(n),t=Bt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:la;for(;H0(e);)try{const s=await R0(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,W0(e,s)}catch(s){await Gs(e,s)}Dd(e)&&Od(e)}function H0(n){return fn(n)&&n.Ta.length<10}function W0(n,e){n.Ta.push(e);const t=Bt(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Dd(n){return fn(n)&&!Bt(n).x_()&&n.Ta.length>0}function Od(n){Bt(n).start()}async function G0(n){Bt(n).ra()}async function K0(n){const e=Bt(n);for(const t of n.Ta)e.ea(t.mutations)}async function Q0(n,e,t){const r=n.Ta.shift(),s=pa.from(r,e,t);await Vd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await pi(n)}async function X0(n,e){e&&Bt(n).X_&&await async function(r,s){if(function(a){return kE(a)&&a!==L.ABORTED}(s.code)){const i=r.Ta.shift();Bt(r).B_(),await Vd(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pi(r)}}(n,e),Dd(n)&&Od(n)}async function tu(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),j(ln,"RemoteStore received new credentials");const r=fn(t);t.Ea.add(3),await qr(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await mi(t)}async function Y0(n,e){const t=G(n);e?(t.Ea.delete(2),await mi(t)):e||(t.Ea.add(2),await qr(t),t.Ra.set("Unknown"))}function qn(n){return n.ma||(n.ma=function(t,r,s){const i=G(t);return i.sa(),new O0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:B0.bind(null,n),t_:$0.bind(null,n),r_:z0.bind(null,n),H_:q0.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),Aa(n)?ba(n):n.Ra.set("Unknown")):(await n.ma.stop(),Nd(n))})),n.ma}function Bt(n){return n.fa||(n.fa=function(t,r,s){const i=G(t);return i.sa(),new L0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:G0.bind(null,n),r_:X0.bind(null,n),ta:K0.bind(null,n),na:Q0.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await pi(n)):(await n.fa.stop(),n.Ta.length>0&&(j(ln,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Ra{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new en,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Ra(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xa(n,e){if(mt("AsyncQueue",`${e}: ${n}`),zn(n))return new U(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Rn{static emptySet(e){return new Rn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=hr(),this.sortedSet=new ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Rn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Rn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class nu{constructor(){this.ga=new ae(B.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):q(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Dn{constructor(e,t,r,s,i,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Dn(e,t,Rn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&li(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class J0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Z0{constructor(){this.queries=ru(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=G(t),i=s.queries;s.queries=ru(),i.forEach((a,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new U(L.ABORTED,"Firestore shutting down"))}}function ru(){return new hn(n=>td(n),li)}async function ew(n,e){const t=G(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new J0,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=xa(a,`Initialization of query '${vn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Sa(t)}async function tw(n,e){const t=G(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function nw(n,e){const t=G(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&Sa(t)}function rw(n,e,t){const r=G(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Sa(n){n.Ca.forEach(e=>{e.next()})}var ko,su;(su=ko||(ko={})).Ma="default",su.Cache="cache";class sw{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Dn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Dn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ko.Cache}}/**
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
 */class Ld{constructor(e){this.key=e}}class Md{constructor(e){this.key=e}}class iw{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Y(),this.mutatedKeys=Y(),this.eu=nd(e),this.tu=new Rn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new nu,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const E=s.get(f),b=ci(this.query,g)?g:null,P=!!E&&this.mutatedKeys.has(E.key),k=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let S=!1;E&&b?E.data.isEqual(b.data)?P!==k&&(r.track({type:3,doc:b}),S=!0):this.su(E,b)||(r.track({type:2,doc:b}),S=!0,(u&&this.eu(b,u)>0||h&&this.eu(b,h)<0)&&(l=!0)):!E&&b?(r.track({type:0,doc:b}),S=!0):E&&!b&&(r.track({type:1,doc:E}),S=!0,(u||h)&&(l=!0)),S&&(b?(a=a.add(b),i=k?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((f,g)=>function(b,P){const k=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Rt:S})}};return k(b)-k(P)}(f.type,g.type)||this.eu(f.doc,g.doc)),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,a.length!==0||h?{snapshot:new Dn(this.query,e.tu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new nu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Y(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new Md(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new Ld(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=Y();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Dn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ca="SyncEngine";class ow{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class aw{constructor(e){this.key=e,this.hu=!1}}class lw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new hn(l=>td(l),li),this.Iu=new Map,this.Eu=new Set,this.du=new ae(B.comparator),this.Au=new Map,this.Ru=new _a,this.Vu={},this.mu=new Map,this.fu=Vn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function cw(n,e,t=!0){const r=zd(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Fd(r,e,t,!0),s}async function uw(n,e){const t=zd(n);await Fd(t,e,!0,!1)}async function Fd(n,e,t,r){const s=await x0(n.localStore,Ye(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await hw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Pd(n.remoteStore,s),l}async function hw(n,e,t,r,s){n.pu=(g,E,b)=>async function(k,S,V,D){let N=S.view.ru(V);N.Cs&&(N=await Xc(k.localStore,S.query,!1).then(({documents:w})=>S.view.ru(w,N)));const F=D&&D.targetChanges.get(S.targetId),$=D&&D.targetMismatches.get(S.targetId)!=null,W=S.view.applyChanges(N,k.isPrimaryClient,F,$);return ou(k,S.targetId,W.au),W.snapshot}(n,g,E,b);const i=await Xc(n.localStore,e,!0),a=new iw(e,i.Qs),l=a.ru(i.documents),u=zr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,u);ou(n,t,h.au);const f=new ow(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function dw(n,e,t){const r=G(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!li(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Co(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ta(r.remoteStore,s.targetId),No(r,s.targetId)}).catch($n)):(No(r,s.targetId),await Co(r.localStore,s.targetId,!0))}async function fw(n,e){const t=G(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ta(t.remoteStore,r.targetId))}async function mw(n,e,t){const r=ww(n);try{const s=await function(a,l){const u=G(a),h=re.now(),f=l.reduce((b,P)=>b.add(P.key),Y());let g,E;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let P=pt(),k=Y();return u.Ns.getEntries(b,f).next(S=>{P=S,P.forEach((V,D)=>{D.isValidDocument()||(k=k.add(V))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,P)).next(S=>{g=S;const V=[];for(const D of l){const N=RE(D,g.get(D.key).overlayedDocument);N!=null&&V.push(new dn(D.key,N,Kh(N.value.mapValue),ct.exists(!0)))}return u.mutationQueue.addMutationBatch(b,h,V,l)}).next(S=>{E=S;const V=S.applyToLocalDocumentSet(g,k);return u.documentOverlayCache.saveOverlays(b,S.batchId,V)})}).then(()=>({batchId:E.batchId,changes:sd(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let h=a.Vu[a.currentUser.toKey()];h||(h=new ae(X)),h=h.insert(l,u),a.Vu[a.currentUser.toKey()]=h}(r,s.batchId,t),await Hr(r,s.changes),await pi(r.remoteStore)}catch(s){const i=xa(s,"Failed to persist write");t.reject(i)}}async function jd(n,e){const t=G(n);try{const r=await b0(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Z(a.hu,14607):s.removedDocuments.size>0&&(Z(a.hu,42227),a.hu=!1))}),await Hr(t,r,e)}catch(r){await $n(r)}}function iu(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=G(a);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const E of g.Sa)E.va(l)&&(h=!0)}),h&&Sa(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pw(n,e,t){const r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new ae(B.comparator);a=a.insert(i,Re.newNoDocument(i,H.min()));const l=Y().add(i),u=new di(H.min(),new Map,new ae(X),a,l);await jd(r,u),r.du=r.du.remove(i),r.Au.delete(e),Pa(r)}else await Co(r.localStore,e,!1).then(()=>No(r,e,t)).catch($n)}async function gw(n,e){const t=G(n),r=e.batch.batchId;try{const s=await I0(t.localStore,e);Bd(t,r,null),Ud(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Hr(t,s)}catch(s){await $n(s)}}async function yw(n,e,t){const r=G(n);try{const s=await function(a,l){const u=G(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(Z(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Bd(r,e,t),Ud(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Hr(r,s)}catch(s){await $n(s)}}function Ud(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Bd(n,e,t){const r=G(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function No(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||$d(n,r)})}function $d(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ta(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Pa(n))}function ou(n,e,t){for(const r of t)r instanceof Ld?(n.Ru.addReference(r.key,e),_w(n,r)):r instanceof Md?(j(Ca,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||$d(n,r.key)):q(19791,{wu:r})}function _w(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(j(Ca,"New document in limbo: "+t),n.Eu.add(r),Pa(n))}function Pa(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new B(oe.fromString(e)),r=n.fu.next();n.Au.set(r,new aw(t)),n.du=n.du.insert(t,r),Pd(n.remoteStore,new kt(Ye(fa(t.path)),r,"TargetPurposeLimboResolution",si.ce))}}async function Hr(n,e,t){const r=G(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{a.push(r.pu(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Ea.As(u.targetId,h);i.push(g)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,h){const f=G(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>O.forEach(h,E=>O.forEach(E.Es,b=>f.persistence.referenceDelegate.addReference(g,E.targetId,b)).next(()=>O.forEach(E.ds,b=>f.persistence.referenceDelegate.removeReference(g,E.targetId,b)))))}catch(g){if(!zn(g))throw g;j(wa,"Failed to update sequence numbers: "+g)}for(const g of h){const E=g.targetId;if(!g.fromCache){const b=f.Ms.get(E),P=b.snapshotVersion,k=b.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(E,k)}}}(r.localStore,i))}async function vw(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){j(Ca,"User change. New user:",e.toKey());const r=await Rd(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new U(L.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Hr(t,r.Ls)}}function Ew(n,e){const t=G(n),r=t.Au.get(e);if(r&&r.hu)return Y().add(r.key);{let s=Y();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function zd(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ew.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pw.bind(null,e),e.Pu.H_=nw.bind(null,e.eventManager),e.Pu.yu=rw.bind(null,e.eventManager),e}function ww(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yw.bind(null,e),e}class Ks{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return T0(this.persistence,new v0,e.initialUser,this.serializer)}Cu(e){return new Ad(va.mi,this.serializer)}Du(e){return new C0}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ks.provider={build:()=>new Ks};class Tw extends Ks{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Z(this.persistence.referenceDelegate instanceof Ws,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new s0(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ke.withCacheSize(this.cacheSizeBytes):ke.DEFAULT;return new Ad(r=>Ws.mi(r,t),this.serializer)}}class Vo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>iu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vw.bind(null,this.syncEngine),await Y0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Z0}()}createDatastore(e){const t=fi(e.databaseInfo.databaseId),r=function(i){return new D0(i)}(e.databaseInfo);return function(i,a,l,u){return new F0(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new U0(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>iu(this.syncEngine,t,0),function(){return Zc.v()?new Zc:new P0}())}createSyncEngine(e,t){return function(s,i,a,l,u,h,f){const g=new lw(s,i,a,l,u,h);return f&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=G(s);j(ln,"RemoteStore shutting down."),i.Ea.add(5),await qr(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Vo.provider={build:()=>new Vo};/**
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
 */class Iw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):mt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const $t="FirestoreClient";class bw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ae.UNAUTHENTICATED,this.clientId=oa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{j($t,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(j($t,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new en;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=xa(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function oo(n,e){n.asyncQueue.verifyOperationInProgress(),j($t,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Rd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function au(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Aw(n);j($t,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>tu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>tu(e.remoteStore,s)),n._onlineComponents=e}async function Aw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j($t,"Using user provided OfflineComponentProvider");try{await oo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Cn("Error using user provided cache. Falling back to memory cache: "+t),await oo(n,new Ks)}}else j($t,"Using default OfflineComponentProvider"),await oo(n,new Tw(void 0));return n._offlineComponents}async function qd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j($t,"Using user provided OnlineComponentProvider"),await au(n,n._uninitializedComponentsProvider._online)):(j($t,"Using default OnlineComponentProvider"),await au(n,new Vo))),n._onlineComponents}function Rw(n){return qd(n).then(e=>e.syncEngine)}async function lu(n){const e=await qd(n),t=e.eventManager;return t.onListen=cw.bind(null,e.syncEngine),t.onUnlisten=dw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=uw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=fw.bind(null,e.syncEngine),t}/**
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
 */function Hd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const cu=new Map;/**
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
 */const Wd="firestore.googleapis.com",uu=!0;class hu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new U(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wd,this.ssl=uu}else this.host=e.host,this.ssl=e.ssl??uu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=bd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<n0)throw new U(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hd(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new U(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new U(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new U(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ka{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Sv;switch(r.type){case"firstParty":return new Nv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=cu.get(t);r&&(j("ComponentProvider","Removing Datastore"),cu.delete(t),r.terminate())}(this),Promise.resolve()}}function xw(n,e,t,r={}){var h;n=An(n,ka);const s=Fn(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(Uu(`https://${l}`),Bu("Firestore",!0)),i.host!==Wd&&i.host!==l&&Cn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!nn(u,a)&&(n._setSettings(u),r.mockUserToken)){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=Ae.MOCK_USER;else{f=Dp(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new U(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ae(E)}n._authCredentials=new Cv(new Mh(f,g))}}/**
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
 */class gi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gi(this.firestore,e,this._query)}}class ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ve(this.firestore,e,this._key)}toJSON(){return{type:ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Br(t,ve._jsonSchema))return new ve(e,r||null,new B(oe.fromString(t.referencePath)))}}ve._jsonSchemaVersion="firestore/documentReference/1.0",ve._jsonSchema={type:de("string",ve._jsonSchemaVersion),referencePath:de("string")};class Pr extends gi{constructor(e,t,r){super(e,t,fa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ve(this.firestore,null,new B(e))}withConverter(e){return new Pr(this.firestore,e,this._path)}}function Na(n,e,...t){if(n=Ve(n),arguments.length===1&&(e=oa.newId()),Fv("doc","path",e),n instanceof ka){const r=oe.fromString(e,...t);return bc(r),new ve(n,null,new B(r))}{if(!(n instanceof ve||n instanceof Pr))throw new U(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return bc(r),new ve(n.firestore,n instanceof Pr?n.converter:null,new B(r))}}/**
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
 */const du="AsyncQueue";class fu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Sd(this,"async_queue_retry"),this._c=()=>{const r=io();r&&j(du,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=io();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=io();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new en;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!zn(e))throw e;j(du,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,mt("INTERNAL UNHANDLED ERROR: ",mu(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Ra.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&q(47125,{Pc:mu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function mu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function pu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Qs extends ka{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new fu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fu(e),this._firestoreClient=void 0,await e}}}function Sw(n,e){const t=typeof n=="object"?n:Hu(),r=typeof n=="string"?n:js,s=Ko(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Np("firestore");i&&xw(s,...i)}return s}function Gd(n){if(n._terminated)throw new U(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Cw(n),n._firestoreClient}function Cw(n){var r,s,i;const e=n._freezeSettings(),t=function(l,u,h,f){return new Xv(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Hd(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new bw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Me{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Me(Te.fromBase64String(e))}catch(t){throw new U(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Me(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Me._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Br(e,Me._jsonSchema))return Me.fromBase64String(e.bytes)}}Me._jsonSchemaVersion="firestore/bytes/1.0",Me._jsonSchema={type:de("string",Me._jsonSchemaVersion),bytes:de("string")};/**
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
 */class Va{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Kd{constructor(e){this._methodName=e}}/**
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
 */class Ze{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ze._jsonSchemaVersion}}static fromJSON(e){if(Br(e,Ze._jsonSchema))return new Ze(e.latitude,e.longitude)}}Ze._jsonSchemaVersion="firestore/geoPoint/1.0",Ze._jsonSchema={type:de("string",Ze._jsonSchemaVersion),latitude:de("number"),longitude:de("number")};/**
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
 */class et{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:et._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Br(e,et._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new et(e.vectorValues);throw new U(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}et._jsonSchemaVersion="firestore/vectorValue/1.0",et._jsonSchema={type:de("string",et._jsonSchemaVersion),vectorValues:de("object")};/**
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
 */const Pw=/^__.*__$/;class kw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new dn(e,this.data,this.fieldMask,t,this.fieldTransforms):new $r(e,this.data,t,this.fieldTransforms)}}function Qd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ac:n})}}class Da{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Da({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Xs(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Qd(this.Ac)&&Pw.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Nw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||fi(e)}Cc(e,t,r,s=!1){return new Da({Ac:e,methodName:t,Dc:r,path:we.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vw(n){const e=n._freezeSettings(),t=fi(n._databaseId);return new Nw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Dw(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Zd("Data must be an object, but it was:",a,r);const l=Yd(r,a);let u,h;if(i.merge)u=new Ue(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const E=Ow(e,g,t);if(!a.contains(E))throw new U(L.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Mw(f,E)||f.push(E)}u=new Ue(f),h=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=a.fieldTransforms;return new kw(new Le(l),u,h)}function Xd(n,e){if(Jd(n=Ve(n)))return Zd("Unsupported field value:",e,n),Yd(n,e);if(n instanceof Kd)return function(r,s){if(!Qd(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=Xd(l,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return EE(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=re.fromDate(r);return{timestampValue:Hs(s.serializer,i)}}if(r instanceof re){const i=new re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hs(s.serializer,i)}}if(r instanceof Ze)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Me)return{bytesValue:yd(s.serializer,r._byteString)};if(r instanceof ve){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ya(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof et)return function(a,l){return{mapValue:{fields:{[Wh]:{stringValue:Gh},[Us]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return ma(l.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${aa(r)}`)}(n,e)}function Yd(n,e){const t={};return Uh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):un(n,(r,s)=>{const i=Xd(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Jd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof re||n instanceof Ze||n instanceof Me||n instanceof ve||n instanceof Kd||n instanceof et)}function Zd(n,e,t){if(!Jd(t)||!Fh(t)){const r=aa(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Ow(n,e,t){if((e=Ve(e))instanceof Va)return e._internalPath;if(typeof e=="string")return ef(n,e);throw Xs("Field path arguments must be of type string or ",n,!1,void 0,t)}const Lw=new RegExp("[~\\*/\\[\\]]");function ef(n,e,t){if(e.search(Lw)>=0)throw Xs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Va(...e.split("."))._internalPath}catch{throw Xs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Xs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new U(L.INVALID_ARGUMENT,l+n+u)}function Mw(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class tf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(nf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Fw extends tf{data(){return super.data()}}function nf(n,e){return typeof e=="string"?ef(n,e):e instanceof Va?e._internalPath:e._delegate._internalPath}/**
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
 */function jw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uw{convertValue(e,t="none"){switch(Ut(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(jt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return un(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Us].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>ce(a.doubleValue));return new et(t)}convertGeoPoint(e){return new Ze(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=oi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ar(e));default:return null}}convertTimestamp(e){const t=Ft(e);return new re(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=oe.fromString(e);Z(Id(r),9688,{name:e});const s=new Rr(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(t)||mt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Bw(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class fr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tn extends tf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(nf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new U(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=tn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}tn._jsonSchemaVersion="firestore/documentSnapshot/1.0",tn._jsonSchema={type:de("string",tn._jsonSchemaVersion),bundleSource:de("string","DocumentSnapshot"),bundleName:de("string"),bundle:de("string")};class xs extends tn{data(e={}){return super.data(e)}}class xn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new fr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new xs(this._firestore,this._userDataWriter,r.key,r,new fr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new xs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new xs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:$w(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new U(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=oa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $w(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}xn._jsonSchemaVersion="firestore/querySnapshot/1.0",xn._jsonSchema={type:de("string",xn._jsonSchemaVersion),bundleSource:de("string","QuerySnapshot"),bundleName:de("string"),bundle:de("string")};class rf extends Uw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Me(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ve(this.firestore,null,t)}}function sf(n,e,t){n=An(n,ve);const r=An(n.firestore,Qs),s=Bw(n.converter,e);return qw(r,[Dw(Vw(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ct.none())])}function zw(n,...e){var u,h,f;n=Ve(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||pu(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(pu(e[r])){const g=e[r];e[r]=(u=g.next)==null?void 0:u.bind(g),e[r+1]=(h=g.error)==null?void 0:h.bind(g),e[r+2]=(f=g.complete)==null?void 0:f.bind(g)}let i,a,l;if(n instanceof ve)a=An(n.firestore,Qs),l=fa(n._key.path),i={next:g=>{e[r]&&e[r](Hw(a,n,g))},error:e[r+1],complete:e[r+2]};else{const g=An(n,gi);a=An(g.firestore,Qs),l=g._query;const E=new rf(a);i={next:b=>{e[r]&&e[r](new xn(a,E,g,b))},error:e[r+1],complete:e[r+2]},jw(n._query)}return function(E,b,P,k){const S=new Iw(k),V=new sw(b,S,P);return E.asyncQueue.enqueueAndForget(async()=>ew(await lu(E),V)),()=>{S.Nu(),E.asyncQueue.enqueueAndForget(async()=>tw(await lu(E),V))}}(Gd(a),l,s,i)}function qw(n,e){return function(r,s){const i=new en;return r.asyncQueue.enqueueAndForget(async()=>mw(await Rw(r),s,i)),i.promise}(Gd(n),e)}function Hw(n,e,t){const r=t.docs.get(e._key),s=new rf(n);return new tn(n,s,e._key,r,new fr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Bn=s})(jn),Sn(new rn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Qs(new Pv(r.getProvider("auth-internal")),new Vv(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new U(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rr(h.options.projectId,f)}(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Dt(Ec,wc,e),Dt(Ec,wc,"esm2020")})();const Ww={apiKey:"AIzaSyCZ_6FzE9FtnUo432UycdOLALXId_0yJyU",authDomain:"playlearn-b96ec.firebaseapp.com",projectId:"playlearn-b96ec",storageBucket:"playlearn-b96ec.firebasestorage.app",messagingSenderId:"859742926301",appId:"1:859742926301:web:4ffe88885e48d9af157234",measurementId:"G-MLV3W579GH"},of=qu(Ww),ut=bv(of),Oa=Sw(of),af=A.createContext(),Gw=({children:n})=>{const[e,t]=A.useState(null),[r,s]=A.useState(!0);return A.useEffect(()=>{const i=h_(ut,a=>{t(a),s(!1)});return()=>i()},[]),y.jsx(af.Provider,{value:{user:e,loading:r},future:{v7_relativeSplatPath:!0},children:n})},Kw=()=>A.useContext(af),yi="/assets/logo-C9-rl5M9.png",Qw=()=>{const n=st(),{email:e="",password:t=""}=n.state||{},[r,s]=A.useState({email:e,password:t}),[i,a]=A.useState(""),[l,u]=A.useState(!1);function h(E){const{name:b,value:P}=E.target;s(k=>({...k,[b]:P}))}async function f(E){E.preventDefault(),u(!0),a("");try{const{email:b,password:P}=r;await l_(ut,b,P),window.location.href="/dashboard"}catch(b){b.code==="auth/user-not-found"?a("لا يوجد مستخدم بهذا البريد الإلكتروني."):b.code==="auth/wrong-password"?(a("كلمة المرور غير صحيحة."),s(P=>({...P,password:""}))):b.code==="auth/invalid-email"?a("البريد الإلكتروني غير صالح."):a("حدث خطأ أثناء تسجيل الدخول. حاول مرة أخرى."),setTimeout(()=>a(""),3e3),u(!1)}}async function g(){const E=new Ke;u(!0),a("");try{const P=(await N_(ut,E)).user;await sf(Na(Oa,"users",P.uid),{name:P.displayName,email:P.email,photoURL:P.photoURL,provider:"google"}),setTimeout(()=>{window.location.href="/dashboard"},1500)}catch(b){console.error(b),a("تعذر تسجيل الدخول باستخدام Google. حاول مرة أخرى."),setTimeout(()=>a(""),3e3)}finally{u(!1)}}return y.jsx("div",{className:"min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 font-[Tajawal]",dir:"rtl",lang:"ar",children:y.jsxs("div",{className:"w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12",children:[y.jsx(Lt,{to:"/main",children:y.jsx("img",{src:yi,alt:"plern Logo",className:"w-20 mx-auto mb-4 cursor-pointer"})}),y.jsxs("h2",{className:"flex flex-wrap justify-center items-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800 gap-1",children:["تسجيل ",y.jsx("div",{className:"text-green-500",children:"الدخول"})]}),y.jsxs("form",{onSubmit:f,children:[y.jsxs("div",{className:"space-y-4 mb-6",children:[y.jsx("input",{name:"email",value:r.email,onChange:h,type:"email",placeholder:"البريد الإلكتروني",required:!0,className:"w-full px-4 py-3 rounded-xl border border-gray-300 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"}),y.jsx("input",{name:"password",value:r.password,onChange:h,type:"password",placeholder:"كلمة المرور",required:!0,className:`w-full px-4 py-3 rounded-xl border border-gray-300 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 ${i==="كلمة المرور غير صحيحة."?"animate-shake":""}`}),i&&y.jsx("p",{className:"text-red-500 text-sm",children:i}),y.jsx("div",{className:"text-right",children:y.jsx(Lt,{to:"/forget-password",className:"text-sm text-blue-500 hover:underline font-medium",children:"نسيت كلمة المرور؟"})})]}),y.jsxs("div",{className:"space-y-6",children:[y.jsx("button",{type:"submit",disabled:l,className:`w-full py-3 bg-green-500 text-white font-bold rounded-full transition-all duration-300 hover:bg-green-600 hover:scale-[1.02] ${l?"opacity-50 cursor-not-allowed":""}`,children:l?"جاري تسجيل الدخول...":"تسجيل الدخول"}),y.jsxs("div",{className:"relative text-center",children:[y.jsx("span",{className:"bg-white px-4 text-gray-500 z-10 relative",children:"أو"}),y.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-px bg-gray-300 -z-0"})]}),y.jsxs("button",{type:"button",onClick:g,className:"w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-full bg-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[y.jsx("img",{src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:"Google logo",className:"w-5 h-5"}),y.jsx("span",{className:"text-sm font-medium text-gray-700",children:"المتابعة باستخدام Google"})]}),y.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600 text-[16px] font-bold",children:[y.jsx("div",{className:"whitespace-nowrap",children:"ليس لديك حساب؟"}),y.jsx("a",{href:"/register",className:"relative inline-block group font-medium overflow-hidden",children:y.jsxs("div",{className:"px-3 py-1 relative",children:[y.jsx("div",{className:"relative z-10 flex items-center gap-1 text-[#22c55e] transition-colors duration-500 group-hover:text-[#1565c0]",children:"إنشاء حساب جديد"}),y.jsx("div",{className:"absolute bottom-0 right-3 h-[2px] w-0 bg-[#1565c0] transition-all duration-500 group-hover:w-[83.5%]"})]})})]})]})]})]})})};function Xw(n){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}Xw(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Wr=n=>typeof n=="number"&&!isNaN(n),cn=n=>typeof n=="string",gt=n=>typeof n=="function",Yw=n=>cn(n)||Wr(n),Do=n=>cn(n)||gt(n)?n:null,Jw=(n,e)=>n===!1||Wr(n)&&n>0?n:e,Oo=n=>A.isValidElement(n)||cn(n)||gt(n)||Wr(n);function Zw(n,e,t=300){let{scrollHeight:r,style:s}=n;requestAnimationFrame(()=>{s.minHeight="initial",s.height=r+"px",s.transition=`all ${t}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,t)})})}function eT({enter:n,exit:e,appendPosition:t=!1,collapse:r=!0,collapseDuration:s=300}){return function({children:i,position:a,preventExitTransition:l,done:u,nodeRef:h,isIn:f,playToast:g}){let E=t?`${n}--${a}`:n,b=t?`${e}--${a}`:e,P=A.useRef(0);return A.useLayoutEffect(()=>{let k=h.current,S=E.split(" "),V=D=>{D.target===h.current&&(g(),k.removeEventListener("animationend",V),k.removeEventListener("animationcancel",V),P.current===0&&D.type!=="animationcancel"&&k.classList.remove(...S))};k.classList.add(...S),k.addEventListener("animationend",V),k.addEventListener("animationcancel",V)},[]),A.useEffect(()=>{let k=h.current,S=()=>{k.removeEventListener("animationend",S),r?Zw(k,u,s):u()};f||(l?S():(P.current=1,k.className+=` ${b}`,k.addEventListener("animationend",S)))},[f]),se.createElement(se.Fragment,null,i)}}function gu(n,e){return{content:lf(n.content,n.props),containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,reason:n.removalReason,status:e}}function lf(n,e,t=!1){return A.isValidElement(n)&&!cn(n.type)?A.cloneElement(n,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:t}):gt(n)?n({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:t}):n}function tT({closeToast:n,theme:e,ariaLabel:t="close"}){return se.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:r=>{r.stopPropagation(),n(!0)},"aria-label":t},se.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},se.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function nT({delay:n,isRunning:e,closeToast:t,type:r="default",hide:s,className:i,controlledProgress:a,progress:l,rtl:u,isIn:h,theme:f}){let g=s||a&&l===0,E={animationDuration:`${n}ms`,animationPlayState:e?"running":"paused"};a&&(E.transform=`scaleX(${l})`);let b=Zt("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":u}),P=gt(i)?i({rtl:u,type:r,defaultClassName:b}):Zt(b,i),k={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{h&&t()}};return se.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":g},se.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${r}`}),se.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:P,style:E,...k}))}var rT=1,cf=()=>`${rT++}`;function sT(n,e,t){let r=1,s=0,i=[],a=[],l=e,u=new Map,h=new Set,f=D=>(h.add(D),()=>h.delete(D)),g=()=>{a=Array.from(u.values()),h.forEach(D=>D())},E=({containerId:D,toastId:N,updateId:F})=>{let $=D?D!==n:n!==1,W=u.has(N)&&F==null;return $||W},b=(D,N)=>{u.forEach(F=>{var $;(N==null||N===F.props.toastId)&&(($=F.toggle)==null||$.call(F,D))})},P=D=>{var N,F;(F=(N=D.props)==null?void 0:N.onClose)==null||F.call(N,D.removalReason),D.isActive=!1},k=D=>{if(D==null)u.forEach(P);else{let N=u.get(D);N&&P(N)}g()},S=()=>{s-=i.length,i=[]},V=D=>{var N,F;let{toastId:$,updateId:W}=D.props,w=W==null;D.staleId&&u.delete(D.staleId),D.isActive=!0,u.set($,D),g(),t(gu(D,w?"added":"updated")),w&&((F=(N=D.props).onOpen)==null||F.call(N))};return{id:n,props:l,observe:f,toggle:b,removeToast:k,toasts:u,clearQueue:S,buildToast:(D,N)=>{if(E(N))return;let{toastId:F,updateId:$,data:W,staleId:w,delay:p}=N,_=$==null;_&&s++;let T={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(N).filter(([R,v])=>v!=null)),toastId:F,updateId:$,data:W,isIn:!1,className:Do(N.className||l.toastClassName),progressClassName:Do(N.progressClassName||l.progressClassName),autoClose:N.isLoading?!1:Jw(N.autoClose,l.autoClose),closeToast(R){u.get(F).removalReason=R,k(F)},deleteToast(){let R=u.get(F);if(R!=null){if(t(gu(R,"removed")),u.delete(F),s--,s<0&&(s=0),i.length>0){V(i.shift());return}g()}}};T.closeButton=l.closeButton,N.closeButton===!1||Oo(N.closeButton)?T.closeButton=N.closeButton:N.closeButton===!0&&(T.closeButton=Oo(l.closeButton)?l.closeButton:!0);let I={content:D,props:T,staleId:w};l.limit&&l.limit>0&&s>l.limit&&_?i.push(I):Wr(p)?setTimeout(()=>{V(I)},p):V(I)},setProps(D){l=D},setToggle:(D,N)=>{let F=u.get(D);F&&(F.toggle=N)},isToastActive:D=>{var N;return(N=u.get(D))==null?void 0:N.isActive},getSnapshot:()=>a}}var Pe=new Map,kr=[],Lo=new Set,iT=n=>Lo.forEach(e=>e(n)),uf=()=>Pe.size>0;function oT(){kr.forEach(n=>df(n.content,n.options)),kr=[]}var aT=(n,{containerId:e})=>{var t;return(t=Pe.get(e||1))==null?void 0:t.toasts.get(n)};function hf(n,e){var t;if(e)return!!((t=Pe.get(e))!=null&&t.isToastActive(n));let r=!1;return Pe.forEach(s=>{s.isToastActive(n)&&(r=!0)}),r}function lT(n){if(!uf()){kr=kr.filter(e=>n!=null&&e.options.toastId!==n);return}if(n==null||Yw(n))Pe.forEach(e=>{e.removeToast(n)});else if(n&&("containerId"in n||"id"in n)){let e=Pe.get(n.containerId);e?e.removeToast(n.id):Pe.forEach(t=>{t.removeToast(n.id)})}}var cT=(n={})=>{Pe.forEach(e=>{e.props.limit&&(!n.containerId||e.id===n.containerId)&&e.clearQueue()})};function df(n,e){Oo(n)&&(uf()||kr.push({content:n,options:e}),Pe.forEach(t=>{t.buildToast(n,e)}))}function uT(n){var e;(e=Pe.get(n.containerId||1))==null||e.setToggle(n.id,n.fn)}function ff(n,e){Pe.forEach(t=>{(e==null||!(e!=null&&e.containerId)||(e==null?void 0:e.containerId)===t.id)&&t.toggle(n,e==null?void 0:e.id)})}function hT(n){let e=n.containerId||1;return{subscribe(t){let r=sT(e,n,iT);Pe.set(e,r);let s=r.observe(t);return oT(),()=>{s(),Pe.delete(e)}},setProps(t){var r;(r=Pe.get(e))==null||r.setProps(t)},getSnapshot(){var t;return(t=Pe.get(e))==null?void 0:t.getSnapshot()}}}function dT(n){return Lo.add(n),()=>{Lo.delete(n)}}function fT(n){return n&&(cn(n.toastId)||Wr(n.toastId))?n.toastId:cf()}function Gr(n,e){return df(n,e),e.toastId}function _i(n,e){return{...e,type:e&&e.type||n,toastId:fT(e)}}function vi(n){return(e,t)=>Gr(e,_i(n,t))}function ee(n,e){return Gr(n,_i("default",e))}ee.loading=(n,e)=>Gr(n,_i("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function mT(n,{pending:e,error:t,success:r},s){let i;e&&(i=cn(e)?ee.loading(e,s):ee.loading(e.render,{...s,...e}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(h,f,g)=>{if(f==null){ee.dismiss(i);return}let E={type:h,...a,...s,data:g},b=cn(f)?{render:f}:f;return i?ee.update(i,{...E,...b}):ee(b.render,{...E,...b}),g},u=gt(n)?n():n;return u.then(h=>l("success",r,h)).catch(h=>l("error",t,h)),u}ee.promise=mT;ee.success=vi("success");ee.info=vi("info");ee.error=vi("error");ee.warning=vi("warning");ee.warn=ee.warning;ee.dark=(n,e)=>Gr(n,_i("default",{theme:"dark",...e}));function pT(n){lT(n)}ee.dismiss=pT;ee.clearWaitingQueue=cT;ee.isActive=hf;ee.update=(n,e={})=>{let t=aT(n,e);if(t){let{props:r,content:s}=t,i={delay:100,...r,...e,toastId:e.toastId||n,updateId:cf()};i.toastId!==n&&(i.staleId=n);let a=i.render||s;delete i.render,Gr(a,i)}};ee.done=n=>{ee.update(n,{progress:1})};ee.onChange=dT;ee.play=n=>ff(!0,n);ee.pause=n=>ff(!1,n);function gT(n){var e;let{subscribe:t,getSnapshot:r,setProps:s}=A.useRef(hT(n)).current;s(n);let i=(e=A.useSyncExternalStore(t,r,r))==null?void 0:e.slice();function a(l){if(!i)return[];let u=new Map;return n.newestOnTop&&i.reverse(),i.forEach(h=>{let{position:f}=h.props;u.has(f)||u.set(f,[]),u.get(f).push(h)}),Array.from(u,h=>l(h[0],h[1]))}return{getToastToRender:a,isToastActive:hf,count:i==null?void 0:i.length}}function yT(n){let[e,t]=A.useState(!1),[r,s]=A.useState(!1),i=A.useRef(null),a=A.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:u,closeToast:h,onClick:f,closeOnClick:g}=n;uT({id:n.toastId,containerId:n.containerId,fn:t}),A.useEffect(()=>{if(n.pauseOnFocusLoss)return E(),()=>{b()}},[n.pauseOnFocusLoss]);function E(){document.hasFocus()||V(),window.addEventListener("focus",S),window.addEventListener("blur",V)}function b(){window.removeEventListener("focus",S),window.removeEventListener("blur",V)}function P(w){if(n.draggable===!0||n.draggable===w.pointerType){D();let p=i.current;a.canCloseOnClick=!0,a.canDrag=!0,p.style.transition="none",n.draggableDirection==="x"?(a.start=w.clientX,a.removalDistance=p.offsetWidth*(n.draggablePercent/100)):(a.start=w.clientY,a.removalDistance=p.offsetHeight*(n.draggablePercent===80?n.draggablePercent*1.5:n.draggablePercent)/100)}}function k(w){let{top:p,bottom:_,left:T,right:I}=i.current.getBoundingClientRect();w.nativeEvent.type!=="touchend"&&n.pauseOnHover&&w.clientX>=T&&w.clientX<=I&&w.clientY>=p&&w.clientY<=_?V():S()}function S(){t(!0)}function V(){t(!1)}function D(){a.didMove=!1,document.addEventListener("pointermove",F),document.addEventListener("pointerup",$)}function N(){document.removeEventListener("pointermove",F),document.removeEventListener("pointerup",$)}function F(w){let p=i.current;if(a.canDrag&&p){a.didMove=!0,e&&V(),n.draggableDirection==="x"?a.delta=w.clientX-a.start:a.delta=w.clientY-a.start,a.start!==w.clientX&&(a.canCloseOnClick=!1);let _=n.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;p.style.transform=`translate3d(${_},0)`,p.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function $(){N();let w=i.current;if(a.canDrag&&a.didMove&&w){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){s(!0),n.closeToast(!0),n.collapseAll();return}w.style.transition="transform 0.2s, opacity 0.2s",w.style.removeProperty("transform"),w.style.removeProperty("opacity")}}let W={onPointerDown:P,onPointerUp:k};return l&&u&&(W.onMouseEnter=V,n.stacked||(W.onMouseLeave=S)),g&&(W.onClick=w=>{f&&f(w),a.canCloseOnClick&&h(!0)}),{playToast:S,pauseToast:V,isRunning:e,preventExitTransition:r,toastRef:i,eventHandlers:W}}var _T=typeof window<"u"?A.useLayoutEffect:A.useEffect,Ei=({theme:n,type:e,isLoading:t,...r})=>se.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...r});function vT(n){return se.createElement(Ei,{...n},se.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function ET(n){return se.createElement(Ei,{...n},se.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function wT(n){return se.createElement(Ei,{...n},se.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function TT(n){return se.createElement(Ei,{...n},se.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function IT(){return se.createElement("div",{className:"Toastify__spinner"})}var Mo={info:ET,warning:vT,success:wT,error:TT,spinner:IT},bT=n=>n in Mo;function AT({theme:n,type:e,isLoading:t,icon:r}){let s=null,i={theme:n,type:e};return r===!1||(gt(r)?s=r({...i,isLoading:t}):A.isValidElement(r)?s=A.cloneElement(r,i):t?s=Mo.spinner():bT(e)&&(s=Mo[e](i))),s}var RT=n=>{let{isRunning:e,preventExitTransition:t,toastRef:r,eventHandlers:s,playToast:i}=yT(n),{closeButton:a,children:l,autoClose:u,onClick:h,type:f,hideProgressBar:g,closeToast:E,transition:b,position:P,className:k,style:S,progressClassName:V,updateId:D,role:N,progress:F,rtl:$,toastId:W,deleteToast:w,isIn:p,isLoading:_,closeOnClick:T,theme:I,ariaLabel:R}=n,v=Zt("Toastify__toast",`Toastify__toast-theme--${I}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":$},{"Toastify__toast--close-on-click":T}),ge=gt(k)?k({rtl:$,position:P,type:f,defaultClassName:v}):Zt(v,k),Oe=AT(n),zt=!!F||!u,qt={closeToast:E,type:f,theme:I},it=null;return a===!1||(gt(a)?it=a(qt):A.isValidElement(a)?it=A.cloneElement(a,qt):it=tT(qt)),se.createElement(b,{isIn:p,done:w,position:P,preventExitTransition:t,nodeRef:r,playToast:i},se.createElement("div",{id:W,tabIndex:0,onClick:h,"data-in":p,className:ge,...s,style:S,ref:r,...p&&{role:N,"aria-label":R}},Oe!=null&&se.createElement("div",{className:Zt("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!_})},Oe),lf(l,n,!e),it,!n.customProgressBar&&se.createElement(nT,{...D&&!zt?{key:`p-${D}`}:{},rtl:$,theme:I,delay:u,isRunning:e,isIn:p,closeToast:E,hide:g,type:f,className:V,controlledProgress:zt,progress:F||0})))},xT=(n,e=!1)=>({enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:e}),ST=eT(xT("bounce",!0)),CT={position:"top-right",transition:ST,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:n=>n.altKey&&n.code==="KeyT"};function PT(n){let e={...CT,...n},t=n.stacked,[r,s]=A.useState(!0),i=A.useRef(null),{getToastToRender:a,isToastActive:l,count:u}=gT(e),{className:h,style:f,rtl:g,containerId:E,hotKeys:b}=e;function P(S){let V=Zt("Toastify__toast-container",`Toastify__toast-container--${S}`,{"Toastify__toast-container--rtl":g});return gt(h)?h({position:S,rtl:g,defaultClassName:V}):Zt(V,Do(h))}function k(){t&&(s(!0),ee.play())}return _T(()=>{var S;if(t){let V=i.current.querySelectorAll('[data-in="true"]'),D=12,N=(S=e.position)==null?void 0:S.includes("top"),F=0,$=0;Array.from(V).reverse().forEach((W,w)=>{let p=W;p.classList.add("Toastify__toast--stacked"),w>0&&(p.dataset.collapsed=`${r}`),p.dataset.pos||(p.dataset.pos=N?"top":"bot");let _=F*(r?.2:1)+(r?0:D*w);p.style.setProperty("--y",`${N?_:_*-1}px`),p.style.setProperty("--g",`${D}`),p.style.setProperty("--s",`${1-(r?$:0)}`),F+=p.offsetHeight,$+=.025})}},[r,u,t]),A.useEffect(()=>{function S(V){var D;let N=i.current;b(V)&&((D=N.querySelector('[tabIndex="0"]'))==null||D.focus(),s(!1),ee.pause()),V.key==="Escape"&&(document.activeElement===N||N!=null&&N.contains(document.activeElement))&&(s(!0),ee.play())}return document.addEventListener("keydown",S),()=>{document.removeEventListener("keydown",S)}},[b]),se.createElement("section",{ref:i,className:"Toastify",id:E,onMouseEnter:()=>{t&&(s(!1),ee.pause())},onMouseLeave:k,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},a((S,V)=>{let D=V.length?{...f}:{...f,pointerEvents:"none"};return se.createElement("div",{tabIndex:-1,className:P(S),"data-stacked":t,style:D,key:`c-${S}`},V.map(({content:N,props:F})=>se.createElement(RT,{...F,stacked:t,collapseAll:k,isIn:l(F.toastId,F.containerId),key:`t-${F.key}`},N)))}))}const yu=async(n,e)=>{if(!(n!=null&&n.uid))throw new Error("User UID is missing");const t=Na(Oa,"users",n.uid);await sf(t,{uid:n.uid,email:n.email,...e,createdAt:new Date().toISOString()})},kT=()=>{const[n,e]=A.useState(!1),[t,r]=A.useState(!1),s=Vr(),[i,a]=A.useState(!1),l=p=>ee.success(p),u=p=>ee.error(p),h=()=>{P(""),D({}),e(!1)},f=st(),{email:g,password:E}=f.state||{},[b,P]=A.useState(""),[k,S]=A.useState({fullName:"",email:"",username:"",password:"",confirmPassword:"",gender:"",agree:!1}),[V,D]=A.useState({}),N="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-right placeholder:text-gray-400 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400";function F(p){const{name:_,type:T,value:I,checked:R}=p.target;S(v=>({...v,[_]:T==="checkbox"?R:I})),D(v=>({...v,[_]:void 0}))}A.useEffect(()=>{(async()=>{try{const _=await U_(ut);if(!_||!_.user)return;const T=_.user;await yu(T,{name:T.displayName,photoURL:T.photoURL,provider:"google",gender:"",agree:!0}),e(!0),l("✅ تم تسجيل الدخول باستخدام Google بنجاح! سيتم تحويلك..."),setTimeout(()=>s("/login"),3e3)}catch(_){_.code!=="auth/no-auth-event"&&(console.error(_),u("❌ فشل إتمام تسجيل الدخول باستخدام Google."))}})()},[s]);const $=p=>{console.error("Firebase Error:",p);let _="❌ حدث خطأ غير متوقع. حاول مرة أخرى.";switch(p.code){case"auth/email-already-in-use":_="❌ هذا البريد الإلكتروني مستخدم بالفعل.";break;case"auth/invalid-email":_="❌ البريد الإلكتروني غير صالح.";break;case"auth/weak-password":_="❌ كلمة المرور ضعيفة جدًا. استخدم 6 أحرف على الأقل.";break;case"auth/operation-not-allowed":_="❌ التسجيل باستخدام البريد الإلكتروني غير مفعل.";break;default:_="❌ حدث خطأ أثناء إنشاء الحساب."}P(_),u(_)},W=async p=>{p.preventDefault(),h(),r(!0),a(!0);const{email:_,password:T,confirmPassword:I,username:R,fullName:v,gender:ge,agree:Oe}=k;if(T!==I){D({confirmPassword:"كلمات المرور غير متطابقة."}),a(!1);return}try{const qt=(await a_(ut,_,T)).user;await yu(qt,{fullName:v,username:R,gender:ge,agree:Oe,provider:"email"}),e(!0),l("✅ تم إنشاء الحساب بنجاح! سيتم تحويلك إلى صفحة تسجيل الدخول..."),setTimeout(()=>s("/login",{state:{email:_,password:T}}),3e3)}catch(zt){$(zt)}finally{a(!1)}},w=async()=>{h(),a(!0);try{const p=new Ke;p.setCustomParameters({prompt:"consent"}),await F_(ut,p)}catch(p){console.error(p),u("❌ فشل بدء تسجيل الدخول باستخدام Google."),a(!1)}};return y.jsxs(y.Fragment,{children:[y.jsx("button",{type:"submit",disabled:i,children:i?"جاري التسجيل...":"تسجيل"}),y.jsxs("div",{className:"relative min-h-screen bg-gray-100 font-[Tajawal]",dir:"rtl",lang:"ar",children:[y.jsx("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[...Array(12)].map((p,_)=>y.jsx("div",{className:"absolute w-2 h-2 bg-blue-300 rounded-full animate-pulse",style:{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${4+Math.random()*4}s`}},_))}),y.jsx("div",{className:"flex items-center justify-center sm:px-6 md:px-8 lg:px-12 min-h-[70vh]",children:y.jsxs("div",{className:"w-full sm:w-[100%] md:w-[80%] lg:w-[60%] max-w-2xl bg-white rounded-2xl shadow-xl p-2 sm:p-6 md:p-6 lg:p-8 xl:p-10 my-10 sm:my-6 md:my-10 lg:my-14",children:[y.jsx(Lt,{to:"/main",children:y.jsx("img",{src:yi,alt:"plrn Logo",className:"w-20 mx-auto mb-4 cursor-pointer"})}),y.jsxs("h2",{className:"flex flex-wrap justify-center items-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800 gap-1",children:["إنشاء ",y.jsx("span",{className:"text-green-500",children:"حساب"})," جديد"]}),n&&y.jsx("div",{className:"text-green-600 text-center font-bold text-lg mb-4",children:"تم إنشاء الحساب بنجاح!..."}),y.jsxs("form",{onSubmit:W,children:[y.jsxs("div",{className:"space-y-4 mb-6",children:[y.jsx("input",{name:"fullName",value:k.fullName,onChange:F,type:"text",placeholder:"الاسم الكامل",required:!0,className:N}),y.jsx("input",{name:"email",value:k.email,onChange:F,type:"email",placeholder:"البريد الإلكتروني",required:!0,className:N}),V.email&&y.jsx("div",{className:"text-red-500 text-sm mt-1 text-right",children:V.email}),y.jsx("input",{name:"username",value:k.username,onChange:F,type:"text",placeholder:"اسم المستخدم",required:!0,className:N}),y.jsx("input",{name:"password",value:k.password,onChange:F,type:"password",placeholder:"كلمة المرور",required:!0,className:N}),V.password&&y.jsx("div",{className:"text-red-500 text-sm mt-1 text-right",children:V.password}),y.jsx("input",{name:"confirmPassword",value:k.confirmPassword,onChange:F,type:"password",placeholder:"تأكيد كلمة المرور",required:!0,className:N}),V.confirmPassword&&y.jsx("div",{className:"text-red-500 text-sm mt-1 text-right",children:V.confirmPassword}),y.jsxs("select",{name:"gender",value:k.gender,onChange:F,required:!0,className:N,children:[y.jsx("option",{value:"",children:"اختر الجنس"}),y.jsx("option",{value:"male",children:"ذكر"}),y.jsx("option",{value:"female",children:"أنثى"})]})]}),y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[y.jsx("input",{id:"terms",name:"agree",type:"checkbox",checked:k.agree,onChange:F,required:!0,className:"accent-green-500"}),y.jsxs("label",{htmlFor:"terms",className:"flex items-center gap-1 text-[16px] font-bold",children:["أوافق على"," ",y.jsx("a",{href:"/terms",className:"relative inline-block group font-medium overflow-hidden",children:y.jsxs("div",{className:"px-1 py-0.5 relative",children:[y.jsxs("div",{className:"relative z-10 text-[#22c55e] transition-colors duration-500 group-hover:text-[#1565c0] text-[16px] font-bold",children:["الشروط ",y.jsx("span",{children:"و"}),"الأحكام"]}),y.jsx("div",{className:"absolute bottom-0 right-0 h-[2px] w-0 bg-[#1565c0] transition-all duration-500 group-hover:w-[85%]"})]})})]})]}),V.general&&y.jsx("div",{className:"text-red-500 text-sm text-center",children:V.general}),y.jsx("button",{type:"submit",disabled:i,className:`w-full py-3 bg-green-500 text-white font-bold rounded-full transition-all duration-300 hover:bg-green-600 hover:scale-[1.02] ${i?"opacity-50 cursor-not-allowed":""}`,children:i?"جارٍ الإنشاء...":"إنشاء الحساب"}),y.jsxs("div",{className:"relative text-center",children:[y.jsx("span",{className:"bg-white px-4 text-gray-500 z-10 relative",children:"أو"}),y.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-px bg-gray-300 -z-0"})]}),y.jsxs("button",{type:"button",onClick:w,className:"w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-full bg-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[y.jsx("img",{src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:"Google logo",className:"w-5 h-5"}),y.jsx("span",{className:"text-sm font-medium text-gray-700",children:"المتابعة باستخدام Google"})]}),y.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 text-[16px] text-gray-600 font-bold",children:[y.jsx("div",{className:"whitespace-nowrap",children:"لديك حساب بالفعل؟"}),y.jsx("a",{href:"/login",className:"relative inline-block group font-medium overflow-hidden",children:y.jsxs("div",{className:"px-3 py-1 relative",children:[y.jsx("div",{className:"relative z-10 flex items-center gap-1 text-[#22c55e] transition-colors duration-500 group-hover:text-[#1565c0]",children:"تسجيل الدخول"}),y.jsx("div",{className:"absolute bottom-0 right-3 h-[2px] w-0 bg-[#1565c0] transition-all duration-500 group-hover:w-[83.5%]"})]})})]})]})]})]})})]}),t&&b&&y.jsx("div",{className:"text-red-500 text-sm mt-2 text-center",children:b}),y.jsx(PT,{position:"top-center",autoClose:3e3})]})},NT=({toasts:n,removeToast:e})=>(A.useEffect(()=>{const t=n.map(r=>setTimeout(()=>e(r.id),3e3));return()=>t.forEach(clearTimeout)},[n,e]),y.jsx("div",{className:"fixed top-6 right-6 z-50 flex flex-col gap-4 items-end",dir:"rtl",children:n.map(t=>{const r=t.type==="success"?"bg-green-500":t.type==="error"?"bg-red-500":"bg-gray-700";return y.jsx("div",{className:`px-4 py-3 rounded-lg text-white shadow-lg transition-all duration-300 ${r}`,children:y.jsxs("div",{className:"flex items-center justify-between gap-4",children:[y.jsx("span",{className:"text-sm text-black font-medium",children:t.message}),y.jsx("button",{onClick:()=>e(t.id),className:"text-black hover:text-gray-200 text-lg font-bold",children:"×"})]})},t.id)})})),VT=()=>{const[n,e]=A.useState(""),[t,r]=A.useState([]);function s(l,u="success"){const h=Date.now();r(f=>[...f,{id:h,message:l,type:u}])}function i(l){r(u=>u.filter(h=>h.id!==l))}async function a(l){l.preventDefault();try{await o_(ut,n),s("تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني.","success"),e("")}catch(u){u.code==="auth/user-not-found"?s("لا يوجد مستخدم بهذا البريد الإلكتروني.","error"):u.code==="auth/invalid-email"?s("البريد الإلكتروني غير صالح.","error"):s("حدث خطأ أثناء إرسال الرابط. حاول مرة أخرى.","error")}}return y.jsxs(y.Fragment,{children:[y.jsx(NT,{toasts:t,removeToast:i}),y.jsxs("div",{className:"relative min-h-screen flex items-center justify-center bg-green-50 px-6 font-[Cairo]",dir:"rtl",lang:"ar",children:[y.jsx("div",{className:"absolute inset-0 -z-10 overflow-hidden pointer-events-none",children:[...Array(12)].map((l,u)=>y.jsx("div",{className:"absolute w-2.5 h-2.5 bg-gradient-to-b from-green-200 to-green-300 rounded-full opacity-60 animate-[drift_8s_ease-in-out_infinite]",style:{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${4+Math.random()*4}s`}},u))}),y.jsxs("div",{className:"relative w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 text-center animate-[fadeSlideUp_0.8s_ease-out_forwards]",children:[y.jsxs("div",{className:"absolute -top-8 -left-8 w-36 h-36 pointer-events-none z-0",children:[y.jsx("div",{className:"absolute w-4.5 h-4.5 bg-gradient-to-b from-green-200 to-green-300 rounded-md shadow-md animate-[floatStar_6s_ease-in-out_infinite] rotate-[18deg]",style:{top:"12px",left:"8px"}}),y.jsx("div",{className:"absolute w-3 h-3 bg-gradient-to-b from-green-300 to-green-400 rounded-full shadow-md animate-[floatStar_6s_ease-in-out_infinite]",style:{top:"24px",left:"86px"}}),y.jsx("div",{className:"absolute w-5.5 h-5.5 bg-gradient-to-b from-green-100 to-green-300 rounded-md shadow-md animate-[floatStar_6s_ease-in-out_infinite]",style:{top:"62px",left:"42px"}})]}),y.jsx(Lt,{to:"/main",children:y.jsx("img",{src:yi,alt:"plrn Logo",className:"w-28 mx-auto mb-5"})}),y.jsxs("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:["نسيت ",y.jsx("span",{className:"text-green-400",children:"كلمة "}),"المرور؟"]}),y.jsxs("form",{onSubmit:a,children:[y.jsx("div",{className:"mb-4",children:y.jsx("input",{name:"email",value:n,onChange:l=>e(l.target.value),type:"email",placeholder:"أدخل بريدك الإلكتروني لاستعادة كلمة المرور",required:!0,className:"w-full px-4 py-3 border border-green-300 rounded-lg bg-white text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"})}),y.jsx("button",{type:"submit",className:"w-1/2 py-3 bg-gradient-to-r from-green-500 to-green-400 text-white font-bold rounded-lg shadow-md hover:from-green-600 hover:to-green-500 hover:scale-[1.02] transition-all duration-300",children:"إرسال رابط الاستعادة"}),y.jsx("div",{className:"mt-6 text-sm text-gray-600",children:y.jsxs("span",{children:["تذكرت كلمة المرور؟"," ",y.jsx(Lt,{to:"/login",className:"text-green-500 font-bold hover:underline",children:"تسجيل الدخول"})]})})]})]})]})]})},DT="_container_ngeif_45",OT="_section_ngeif_59",LT="_sectionVisible_ngeif_81",MT="_sectionHidden_ngeif_93",FT="_header_ngeif_107",jT="_title_ngeif_121",UT="_bounceText_ngeif_159",BT="_bounceButton_ngeif_305",$T="_subtitle_ngeif_169",zT="_cardGrid_ngeif_197",qT="_card_ngeif_197",HT="_cardIcon_ngeif_265",WT="_cardTitle_ngeif_277",GT="_cardDescription_ngeif_291",KT="_gradientYellow_ngeif_343",QT="_gradientGreen_ngeif_351",XT="_gradientBlue_ngeif_359",YT="_gradientPink_ngeif_367",ue={container:DT,section:OT,sectionVisible:LT,sectionHidden:MT,header:FT,title:jT,bounceText:UT,bounceButton:BT,subtitle:$T,cardGrid:zT,card:qT,cardIcon:HT,cardTitle:WT,cardDescription:GT,gradientYellow:KT,gradientGreen:QT,gradientBlue:XT,gradientPink:YT};function Kr(){return y.jsx("div",{children:y.jsx("div",{className:"absolute inset-0 z-0 pointer-events-none",children:[...Array(25)].map((n,e)=>{const t=15+Math.random()*25,r=Math.random()*window.innerWidth,s=Math.random()*window.innerHeight,i=["bg-blue-300","bg-green-300","bg-yellow-300","bg-pink-300","bg-purple-300"];return y.jsx("span",{className:`absolute rounded-full ${i[e%i.length]} opacity-50`,style:{width:`${t}px`,height:`${t}px`,left:`${r}px`,top:`${s}px`,animation:`floatBubble ${5+Math.random()*5}s ease-in-out infinite alternate`}},e)})})})}function JT(){const[n,e]=A.useState("hero"),[t,r]=A.useState(!1),s=em(),[i,a]=A.useState("#E53E3E"),l=Vr(),u=[{id:"hero",name:"الرئيسية"},{id:"programs",name:"البرامج التعليمية"},{id:"about",name:"عن المنصة"},{id:"faq",name:"الأسئلة الشائعة"},{id:"footer",name:"تواصل معنا"}];A.useEffect(()=>{const f=()=>{u.forEach(g=>{const E=document.getElementById(g.id);if(E){const b=E.getBoundingClientRect();b.top<=100&&b.bottom>=100&&e(g.id)}})};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]),A.useEffect(()=>{s.start({rotate:[0,15,-15,0],y:[0,-10,10,0],transition:{repeat:1/0,duration:3,ease:"easeInOut"}});const f=setInterval(()=>{a(`#${Math.floor(Math.random()*16777215).toString(16)}`)},2e3);return()=>clearInterval(f)},[s]);const h=f=>{const g=document.getElementById(f);g&&g.scrollIntoView({behavior:"smooth"}),r(!1)};return y.jsxs("header",{className:"fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-lg rounded-b-xl",children:[y.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex justify-between items-center",children:[y.jsx(yn.div,{className:"flex items-center cursor-pointer select-none mr-12",animate:{x:[-5,5,-5,0]},transition:{repeat:1/0,duration:4,ease:"easeInOut"},children:y.jsx("img",{src:yi,alt:"بليرن",className:"w-50 h-16 mr-3 animate-float-slow"})}),y.jsxs("div",{className:"hidden md:flex gap-6 items-center font-Tajawal",children:[u.map(f=>y.jsx(yn.button,{onClick:()=>h(f.id),whileHover:{scale:1.1,rotate:2},style:{color:n===f.id?"#E53E3E":"#4A5568"},className:"font-semibold text-lg cursor-pointer transition-colors duration-300",children:f.name},f.id)),y.jsx(yn.a,{onClick:()=>l("/login"),animate:s,whileHover:{scale:1.2,rotate:0},className:"ml-6 px-6 py-2 rounded-full bg-gradient-to-r cursor-pointer from-green-400 via-blue-400 to-green-300 text-white font-bold shadow-lg hover:shadow-xl transition-all",children:"تسجيل الدخول"})]}),y.jsx("div",{className:"md:hidden",children:y.jsx("button",{onClick:()=>r(!t),className:"text-gray-700 text-3xl focus:outline-none",children:t?"✖":"☰"})})]}),t&&y.jsx(yn.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},transition:{duration:.5},className:"md:hidden bg-white/80 backdrop-blur-md rounded-b-xl",children:y.jsx("div",{className:"flex flex-col items-center gap-4 py-6",children:u.map(f=>y.jsx(yn.button,{onClick:()=>h(f.id),whileHover:{scale:1.05,rotate:[0,5,-5,0]},style:{color:i},className:"font-semibold text-lg transition-colors duration-300",children:f.name},f.id))})})]})}const ZT="/assets/logo_v-DKK14XaC.mp4";function eI(){const[n,e]=A.useState(!1),[t,r]=A.useState(!1),[s,i]=A.useState(!1),[a,l]=A.useState(!1),u=Vr();return A.useEffect(()=>{const h=[];return h.push(setTimeout(()=>e(!0),2500)),h.push(setTimeout(()=>r(!0),2900)),h.push(setTimeout(()=>i(!0),3e3)),h.push(setTimeout(()=>l(!0),300)),()=>h.forEach(clearTimeout)},[]),y.jsxs("section",{className:"relative w-full min-h-screen overflow-hidden font-tajawal flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 pt-24 md:pt-0",children:[y.jsxs("div",{className:"relative z-10 flex flex-col items-center  text-center md:text-right max-w-xl md:max-w-2xl space-y-6 md:space-y-8 mt-12 md:mt-0",children:[y.jsx("h1",{className:`text-3xl md:text-4xl font-extrabold transform transition-all duration-700 ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:y.jsx("div",{className:"text-green-500 inline-block animate-bounce",children:"منصة تعليمية تفاعلية"})}),y.jsx("p",{className:`text-lg md:text-1xl text-black leading-relaxed max-w-md md:max-w-lg transform transition-all duration-700 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-6"} font-['Cairo_Play']`,children:"منصتنا التعليمية التفاعلية هي الأولى من نوعها في السودان، حيث نحوّل التعلم إلى تجربة مليئة بالمرح والإبداع. من خلال ألعاب تعليمية مبتكرة، نمنح الطلاب الفرصة لاكتشاف المعرفة بطريقة شيقة، تحفّز الفضول وتغذي حب الاستطلاع لديهم. هنا، تتحوّل المناهج إلى مغامرات تعليمية ممتعة، ونصنع جيلًا مبدعًا يتعلّم بشغف وينمو بوعي ومعرفة بأسلوب جديد كليًا."}),y.jsxs("div",{className:`flex flex-col md:flex-row gap-4 md:gap-6 transform transition-all duration-700 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:[y.jsx("a",{onClick:()=>u("/login"),className:"px-8 py-4 bg-green-500 text-white cursor-pointer font-bold rounded-full shadow-lg hover:scale-105 hover:rotate-3 transition-transform duration-500 animate-bounce-slow text-center",children:"ابدأ اللعب الآن"}),y.jsx("a",{href:"#about",className:"px-8 py-4 border-2 border-blue-500 text-blue-600 font-bold rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-500 text-center",children:"تعرف أكثر"})]})]}),y.jsx("div",{className:`relative z-10 mb-12 md:mb-0 transform transition-all duration-700 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:y.jsx("video",{src:ZT,autoPlay:!0,loop:!0,muted:!0,className:"w-72 sm:w-80 md:w-96 rounded-lg shadow-lg"})}),y.jsx(Kr,{})]})}function tI(){const n=[{title:"تعليم تفاعلي ممتع",description:"ألعاب تعليمية ودروس تفاعلية تحول التعلم إلى مغامرة مشوقة تثري معارف الطفل",icon:"https://cdn-icons-png.flaticon.com/512/4333/4333609.png",circle:"bg-yellow-200"},{title:"متابعة أدائك ",description:"لوحة تحكم ذكية تمكنك من متابعة تقدمك بدقة وسهولة",icon:"https://cdn-icons-png.flaticon.com/512/1827/1827504.png",circle:"bg-green-200"},{title:"مناهج سودانية متكاملة",description:"محتوى تعليمي عالي الجودة مصمم وفق أحدث المناهج السودانية",icon:"https://img.icons8.com/?size=100&id=9Cnmfi1SKARM&format=png&color=000000",circle:"bg-blue-200"},{title:"بيئة آمنة ومحمية",description:"منصة خالية من المشتتات والإعلانات تضمن تجربة تعليمية آمنة",icon:"https://cdn-icons-png.flaticon.com/512/2889/2889676.png",circle:"bg-pink-200"},{title:"تعلم في أي وقت",description:"دروس متاحة 24/7 تتناسب مع جدولكم اليومي ووتيرة تعلم سريعة",icon:"https://img.icons8.com/?size=100&id=hpibXgnvscd8&format=png&color=000000",circle:"bg-purple-200"},{title:"تنمية المهارات",description:"أنشطة تعزز التفكير النقدي والإبداعي وتطور مهاراتك ",icon:"https://img.icons8.com/?size=100&id=w8rjZ3tt8DQG&format=png&color=000000",circle:"bg-teal-200"}],e=A.useRef(null),[t,r]=A.useState(!1);return A.useEffect(()=>{if(window.innerWidth<768){r(!0);return}const s=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(r(!0),s.unobserve(a.target))})},{threshold:.3});return e.current&&s.observe(e.current),()=>s.disconnect()},[]),y.jsxs("section",{ref:e,className:"w-full min-h-screen py-20 px-6 bg-gray-50 font-tajawal relative overflow-hidden",children:[y.jsxs("div",{className:`text-center mb-16 relative z-10 transition-all duration-700 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}`,children:[y.jsxs("h1",{className:"text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent",children:["لماذا تعد"," ",y.jsx("div",{className:"text-yellow-400 drop-shadow-md animate-bounce",children:"بلــــــيرن"})," ","الخيار الأمثل لتعلمك"]}),y.jsx("p",{className:"text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed",children:"نُقدّم تجربة تعليمية آمنة وممتعة، تمزج بين الإبداع والتكنولوجيا، لتنمية مهارات طفلك بطريقة تفاعلية ومشوقة."})]}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10",children:n.map((s,i)=>y.jsxs("div",{className:`relative p-8 rounded-3xl shadow-lg backdrop-blur-xl bg-white/40 border border-white/20 hover:border-transparent hover:shadow-2xl transition-all duration-500 group
              ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}
            `,style:{transitionDelay:`${i*150}ms`,animation:`floatCard ${2+i*.5}s ease-in-out infinite alternate`},children:[y.jsx("div",{className:`w-20 h-20 mx-auto flex items-center justify-center rounded-full shadow-md mb-6 transform group-hover:scale-110 transition-transform duration-500 ${s.circle}`,children:y.jsx("img",{src:s.icon,alt:s.title,className:"w-12 h-12"})}),y.jsx("h2",{className:"text-xl md:text-2xl font-bold text-center mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300",children:s.title}),y.jsx("p",{className:"text-gray-700 text-center leading-relaxed max-w-xs mx-auto",children:s.description}),y.jsx("span",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 opacity-0 group-hover:opacity-20 transition-opacity duration-500"})]},i))}),y.jsx(Kr,{}),y.jsx("style",{children:`
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
        `})]})}function nI(){const[n,e]=A.useState(null),[t,r]=A.useState(!1),s=A.useRef(null),i=[{question:"ما هي الفئة العمرية المناسبة للمنصة؟",answer:"المنصة مناسبة لجميع الاعمار، حيث تم تصميم المحتوى بعناية ليناسب مختلف المراحل العمرية."},{question:"كيف يمكنني متابعة تقدمي  التعليمي؟",answer:"نوفر لوحة تحكم ذكية  تمكنك من متابعة تقدمك  بسهولة، وعرض النتائج والتقارير الشهرية."},{question:"كيف يمكنني كسب النقاط وتحقيق الإنجازات على المنصة؟",answer:"ستتمكن من اكتساب نقاط وإنجازات مع كل درس أو لعبة تكملها، مما يحفز التعلم ويجعل كل تجربة تعليمية ممتعة ومثيرة."},{question:"هل المحتوى متوافق مع المناهج الدراسية؟",answer:"نعم، المحتوى التعليمي مصمم وفق المناهج الدراسية السودانية لدي وزارة التربية والتعليم لضمان الاستفادة القصوى وتحقيق التعلم الفعّال."},{question:"هل كل محتوى المنصة حصري؟",answer:"نعم، جميع الألعاب والدروس التعليمية مصممة حصريًا لتقديم تجربة تفاعلية معتمدة علي الالعاب."}],a=l=>{e(n===l?null:l)};return A.useEffect(()=>{const l=new IntersectionObserver(u=>{u.forEach(h=>{h.isIntersecting&&(r(!0),l.unobserve(h.target))})},{threshold:.3});return s.current&&l.observe(s.current),()=>l.disconnect()},[]),y.jsxs("section",{ref:s,className:"w-full min-h-screen py-16 px-6 bg-gray-50 font-tajawal relative overflow-hidden",children:[y.jsxs("div",{className:`text-center mb-12 relative z-10 transition-all duration-700 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}`,children:[y.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold mb-6 text-black",children:"الأسئلة الشائعة"}),y.jsx("p",{className:"text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed",children:"نعرف أنكم قد تتساءلون عن بعض التفاصيل، لذلك جمعنا أكثر الأسئلة تكرارًا هنا."})]}),y.jsx("div",{className:"max-w-4xl mx-auto space-y-4 relative z-10",children:i.map((l,u)=>{const h=n===u;return y.jsxs("div",{className:`relative border border-gray-300 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 transform ${h?"scale-105 shadow-2xl":"hover:scale-102 hover:shadow-xl"} ${t?"opacity-100 translate-x-0":"opacity-0 translate-x-12"} transition-all duration-700 delay-${u*100}`,children:[y.jsxs("button",{onClick:()=>a(u),className:"w-full flex justify-between items-center px-6 py-4 bg-white text-right text-black font-semibold text-lg md:text-xl focus:outline-none transition-all duration-300",children:[l.question,y.jsx("span",{className:`ml-4 transform transition-transform duration-500 ${h?"rotate-180":"rotate-0"} inline-block`,children:"▼"})]}),y.jsx("div",{className:"px-6 py-4 bg-gray-50 overflow-hidden transition-all duration-500",style:{maxHeight:h?"500px":"0px",opacity:h?1:0,transform:h?"translateX(0)":"translateX(50px)"},children:y.jsx("p",{className:"text-gray-700 leading-relaxed",children:l.answer})})]},u)})}),y.jsx(Kr,{})]})}function rI(){const n=[{icon:"https://cdn-icons-png.flaticon.com/512/733/733585.png",url:"https://wa.me/+249 99 792 2457",alt:"WhatsApp"},{icon:"https://cdn-icons-png.flaticon.com/512/2111/2111646.png",url:"https://t.me/Mohamed_albasher",alt:"Telegram"},{icon:"https://cdn-icons-png.flaticon.com/512/733/733547.png",url:"https://facebook.com",alt:"Facebook"},{icon:"https://cdn-icons-png.flaticon.com/512/561/561127.png",url:"mailto:info@Plarn.com",alt:"Email"}],e=[{name:"الرئيسية",href:"#hero"},{name:"البرامج التعليمية",href:"#programs"},{name:"عن المنصة",href:"#about"},{name:"تواصل معنا",href:"#contact"}],t=[{name:"الحاسوب",href:"#arabic"},{name:"الإسعافات الأولية",href:"#science"},{name:"الرياضيات",href:"#math"},{name:"الفيزياء",href:"#english"}],r=A.useRef(null),[s,i]=A.useState(!1);return A.useEffect(()=>{const a=new IntersectionObserver(l=>{l.forEach(u=>{u.isIntersecting&&(i(!0),a.unobserve(u.target))})},{threshold:.3});return r.current&&a.observe(r.current),()=>a.disconnect()},[]),y.jsxs("footer",{ref:r,className:`relative w-full bg-gradient-to-b from-gray-50 to-gray-100 font-tajawal overflow-hidden py-16 px-6 transition-all duration-700 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}`,children:[y.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-3xl font-extrabold mb-4 text-black",children:y.jsx("span",{className:"inline-block animate-bounce-slow",children:"بلــــــيرن"})}),y.jsx("p",{className:"text-gray-700 mb-6 leading-relaxed",children:"منصة تعليمية تفاعلية مبتكرة تقدم تجربة تعلم عبر الالعاب مصممة لتنمية مهاراتك بطريقة إبداعية."}),y.jsx("div",{className:"flex space-x-6 mt-4",children:n.map((a,l)=>y.jsx("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:"transform transition duration-500 hover:scale-125 hover:-translate-y-1 animate-icon-bounce",children:y.jsx("img",{src:a.icon,alt:a.alt,className:"w-12 h-12"})},l))})]}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-2xl font-bold mb-4 text-black",children:"روابط سريعة"}),y.jsx("ul",{className:"space-y-2 text-gray-700",children:e.map((a,l)=>y.jsx("li",{children:y.jsx("a",{href:a.href,className:"relative inline-block px-2 py-1 hover:text-green-500 transition-colors before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-green-500 before:transition-all hover:before:w-full",children:a.name})},l))})]}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-2xl font-bold mb-4 text-black",children:"البرامج التعليمية"}),y.jsx("ul",{className:"space-y-2 text-gray-700",children:t.map((a,l)=>y.jsx("li",{children:y.jsx("a",{href:a.href,className:"relative inline-block px-2 py-1 hover:text-green-500 transition-colors before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-green-500 before:transition-all hover:before:w-full",children:a.name})},l))})]})]}),y.jsxs("div",{className:"mt-16 border-t border-gray-300 pt-6 text-center text-gray-600 space-y-2",children:[y.jsx("p",{className:"text-lg font-semibold",children:"24997922457+ | info@Plarn.com"}),y.jsx("p",{children:"© 2025 بلــــــيرن. جميع الحقوق محفوظة."}),y.jsx("div",{className:"flex justify-center space-x-6 mt-2",children:y.jsx("a",{href:"#privacy",className:"hover:text-green-500 transition-colors",children:"سياسة الخصوصية"})})]}),y.jsx(Kr,{})]})}function _u(){const n=[{title:"الحاسوب",description:"نطلق في عالم التكنولوجيا مع مناهج الحاسوب المختلفة، واستمتع بتحديات تفاعلية تكسبك نقاطًا ومهارات أساسية تفتح لك أبواب المستقبل الرقمي.",icon:"https://img.icons8.com/?size=100&id=XKASq08BL6br&format=png&color=000000",gradient:ue.gradientYellow},{title:"الإسعافات الأولية",description:"استعد لتحديات الإسعافات الأولية وتعلّم مهارات الحياة الأساسية، اكسب نقاطك مع كل إنقاذ وكن البطل القادر على التعامل مع أي موقف طارئ بثقة.",icon:"https://img.icons8.com/?size=100&id=kP6pGQWbmasY&format=png&color=000000",gradient:ue.gradientGreen},{title:"الرياضيات",description:"اكتشف مغامرة الأرقام والمنطق! حل الألغاز واكسب نقاطًا بينما تتعلّم بطريقة ممتعة تجعل كل عملية حسابية رحلة شيقة.",icon:"https://img.icons8.com/?size=100&id=80258&format=png&color=000000",gradient:ue.gradientBlue},{title:"الفيزياء",description:"استكشف أسرار الكون من خلال تجارب علمية تفاعلية، أكسب نقاطًا مع كل تجربة واكتشف روعة العلوم في حياتك اليومية بأسلوب ممتع ومشوق.",icon:"https://img.icons8.com/?size=100&id=RPHZmB5ERyjp&format=png&color=000000",gradient:ue.gradientPink}],e=A.useRef(null),[t,r]=A.useState(!1);return A.useEffect(()=>{const s=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(r(!0),s.unobserve(a.target))})},{threshold:.3});return e.current&&s.observe(e.current),()=>s.disconnect()},[]),y.jsxs(y.Fragment,{children:[y.jsx(JT,{}),y.jsx("section",{id:"hero",children:y.jsx(eI,{})}),y.jsxs("main",{className:ue.container,children:[y.jsxs("section",{id:"m",ref:e,className:ue.section,children:[y.jsxs("div",{className:`${ue.header} ${t?ue.sectionVisible:ue.sectionHidden}`,children:[y.jsxs("h1",{className:ue.title,children:["برامجنا التعليمية ",y.jsx("div",{className:ue.bounceText,children:"الممتعة"})]}),y.jsx("p",{className:ue.subtitle,children:"برامجنا التعليمية مصممة لتجمع بين الفائدة والمتعة، حيث نقدم محتوى متنوع يغطي مختلف المراحل الدراسية."})]}),y.jsx("div",{className:`${ue.cardGrid} ${t?ue.sectionVisible:ue.sectionHidden}`,children:n.map((s,i)=>y.jsxs("div",{className:`${ue.card} ${s.gradient}`,style:{animation:t?`floatCard ${2+i*.5}s ease-in-out infinite alternate`:"none"},children:[y.jsx("img",{src:s.icon,alt:s.title,className:ue.cardIcon}),y.jsx("h2",{className:ue.cardTitle,children:s.title}),y.jsx("p",{className:ue.cardDescription,children:s.description}),y.jsx("a",{href:"#",className:ue.bounceButton,children:"ابدأ اللعب"})]},i))})]}),y.jsx(Kr,{}),y.jsx("section",{id:"about",children:y.jsx(tI,{})}),y.jsx("section",{id:"faq",children:y.jsx(nI,{})})]}),y.jsx(rI,{})]})}const sI=({children:n})=>{const{user:e,loading:t}=Kw();return t?null:e?n:y.jsx(zm,{to:"/dashboard"})},iI=Fo(y.jsx("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6"})),oI=Fo(y.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"})),aI=Fo(y.jsx("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"})),lI=()=>y.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[y.jsx("div",{className:"absolute top-10 left-10 w-20 h-20 bg-green-300 rounded-full opacity-30 animate-pulse"}),y.jsx("div",{className:"absolute bottom-10 right-10 w-24 h-24 bg-blue-300 rounded-full opacity-30 animate-ping"})]});function cI(){var W,w;const[n,e]=A.useState(null),[t,r]=A.useState(!0),[s,i]=A.useState(!0),[a,l]=A.useState([]),[u,h]=A.useState(!0),f=A.useRef(null),[g,E]=A.useState(!1),b=(p,_="success")=>{const T=Date.now();l(I=>[...I,{id:T,message:p,type:_}])},P=p=>{l(_=>_.filter(T=>T.id!==p))},k=()=>{const p=new Date().getHours();return p<12?"صباح الخير":p<18?"مساء الخير":"مساء النور"};A.useEffect(()=>{const p=ut.currentUser;if(!p){window.location.href="/login";return}const _=zw(Na(Oa,"users",p.uid),R=>{e(R.exists()?R.data():null),r(!1)}),T=setTimeout(()=>h(!1),4e3),I=new IntersectionObserver(R=>{R.forEach(v=>{v.isIntersecting&&(E(!0),I.unobserve(v.target))})},{threshold:.3});return f.current&&I.observe(f.current),()=>{_(),clearTimeout(T),I.disconnect()}},[]);const S=()=>{d_(ut).then(()=>{b("تم تسجيل الخروج بنجاح!","success"),setTimeout(()=>{window.location.href="/login"},2e3)})},V=()=>i(p=>!p),D=[{title:"لعبة الحروف",icon:"🔤",description:"تعلم الحروف العربية بطريقة ممتعة وتفاعلية."},{title:"لعبة الألوان",icon:"🎨",description:"استكشاف الألوان من خلال التحديات البصرية."},{title:"لعبة الأشكال",icon:"🟠",description:"تمييز الأشكال الهندسية وتطوير المهارات البصرية."},{title:"لعبة الأرقام",icon:"🔢",description:"تعلم الأرقام العربية من خلال اللعب."},{title:"لعبة الحيوانات",icon:"🐘",description:"تعرف على الحيوانات وأصواتها بطريقة ممتعة."},{title:"لعبة الفواكه",icon:"🍎",description:"تمييز الفواكه وتعلم أسمائها."}],N=[{name:"الرئيسية",href:"#hero"},{name:"البرامج التعليمية",href:"#programs"},{name:"عن المنصة",href:"#about"},{name:"تواصل معنا",href:"#contact"}],F=[{name:"الحاسوب",href:"#arabic"},{name:"الإسعافات الأولية",href:"#science"},{name:"الرياضيات",href:"#math"},{name:"الفيزياء",href:"#english"}],$=[{icon:"https://cdn-icons-png.flaticon.com/512/733/733585.png",url:"https://wa.me/+249997922457",alt:"WhatsApp"},{icon:"https://cdn-icons-png.flaticon.com/512/2111/2111646.png",url:"https://t.me/Mohamed_albasher",alt:"Telegram"},{icon:"https://cdn-icons-png.flaticon.com/512/733/733547.png",url:"https://facebook.com",alt:"Facebook"},{icon:"https://cdn-icons-png.flaticon.com/512/561/561127.png",url:"mailto:info@Plarn.com",alt:"Email"}];return t?y.jsx("div",{className:"min-h-screen flex items-center justify-center text-gray-300 font-[Tajawal] bg-gray-900",children:"جاري تحميل البيانات..."}):y.jsxs("div",{className:`min-h-screen font-[Tajawal] flex flex-col ${s?"bg-gray-900 text-white":"bg-green-50 text-gray-800"}`,dir:"rtl",lang:"ar",children:[y.jsx(qf,{position:"static",className:`${s?"bg-gray-800":"bg-white"} shadow-md`,children:y.jsxs(Hf,{className:"flex justify-between w-full",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"text-2xl text-green-400",children:"🌟"}),y.jsx("span",{className:"text-lg font-bold text-green-500",children:"منصة الألعاب"})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(Hi,{onClick:V,color:"inherit",children:y.jsx(iI,{className:"text-blue-400"})}),y.jsx(Hi,{onClick:S,color:"inherit",children:y.jsx(oI,{className:"text-red-400"})})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(Hi,{color:"inherit",children:y.jsx(aI,{className:"text-yellow-400"})}),y.jsx(Wf,{src:n==null?void 0:n.photoURL}),y.jsx("span",{className:"font-semibold",children:(n==null?void 0:n.fullName)||"مستخدم"})]})]})}),y.jsx(Gf,{in:u,timeout:1e3,children:y.jsxs("div",{className:"w-full py-4 text-center text-xl font-bold text-white bg-gradient-to-r from-green-500 via-blue-500 to-purple-500",children:[k()," 👋 ",(n==null?void 0:n.fullName)||"مستخدم","!"]})}),y.jsxs("main",{className:"flex-1 px-6 py-8",children:[y.jsx("h2",{className:"text-2xl font-bold mb-6 text-green-400",children:"الألعاب المتاحة"}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:D.map((p,_)=>y.jsxs(Kf,{elevation:4,className:`rounded-xl p-6 transition-all hover:scale-[1.02] ${s?"bg-gradient-to-br from-gray-800 to-gray-700 text-white":"bg-gradient-to-br from-white to-green-100 text-gray-800"}`,children:[y.jsx("div",{className:"text-4xl mb-4",children:p.icon}),y.jsx("h3",{className:"text-lg font-bold text-green-400 mb-2",children:p.title}),y.jsx("p",{className:"text-sm",children:p.description})]},_))})]}),y.jsx(Qf,{open:a.length>0,autoHideDuration:3e3,onClose:()=>P(a[0].id),children:y.jsx(Xf,{severity:((W=a[0])==null?void 0:W.type)||"success",children:(w=a[0])==null?void 0:w.message})}),y.jsxs("footer",{ref:f,className:`relative w-full overflow-hidden py-20 px-8 transition-all duration-700 ${g?"opacity-100 translate-y-0":"opacity-0 translate-y-12"} ${s?"bg-gray-900 text-white":"bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"}`,children:[y.jsx(lI,{}),y.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-4xl font-extrabold mb-4 text-green-500",children:y.jsx("span",{className:"inline-block animate-bounce-slow",children:"بلــــــيرن"})}),y.jsx("p",{className:"mb-6 leading-relaxed text-base",children:"منصة تعليمية تفاعلية مبتكرة تقدم تجربة تعلم عبر الألعاب مصممة لتنمية مهاراتك بطريقة إبداعية."}),y.jsx("div",{className:"flex gap-4 mt-4 flex-wrap",children:$.map((p,_)=>y.jsx("a",{href:p.url,target:"_blank",rel:"noopener noreferrer",className:"transform transition duration-500 hover:scale-110 hover:-translate-y-1 animate-icon-bounce",children:y.jsx("img",{src:p.icon,alt:p.alt,className:"w-10 h-10"})},_))})]}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-2xl font-bold mb-4 text-green-500",children:"روابط سريعة"}),y.jsx("ul",{className:"space-y-3 text-base",children:N.map((p,_)=>y.jsx("li",{children:y.jsx("a",{href:p.href,className:"relative inline-block px-2 py-1 hover:text-green-400 transition-colors before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-green-400 before:transition-all hover:before:w-full",children:p.name})},_))})]}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-2xl font-bold mb-4 text-green-500",children:"البرامج التعليمية"}),y.jsx("ul",{className:"space-y-3 text-base",children:F.map((p,_)=>y.jsx("li",{children:y.jsx("a",{href:p.href,className:"relative inline-block px-2 py-1 hover:text-green-400 transition-colors before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-green-400 before:transition-all hover:before:w-full",children:p.name})},_))})]})]}),y.jsxs("div",{className:"mt-16 border-t border-gray-300 dark:border-gray-700 pt-6 text-center space-y-2 text-sm",children:[y.jsx("p",{className:"text-base font-semibold",children:"+24997922457 | info@Plarn.com"}),y.jsx("p",{children:"© 2025 بلــــــيرن. جميع الحقوق محفوظة."}),y.jsx("div",{className:"flex justify-center gap-6 mt-2",children:y.jsx("a",{href:"#privacy",className:"hover:text-green-400 transition-colors",children:"سياسة الخصوصية"})})]})]})]})}function uI(){return y.jsx(Yf,{maxWidth:"md",className:"min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 text-center",children:y.jsxs(yn.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.6},className:"space-y-6",children:[y.jsx(Wi,{variant:"h2",className:"text-6xl font-bold text-indigo-600 dark:text-white",children:"404"}),y.jsx(Wi,{variant:"h5",className:"text-xl text-gray-700 dark:text-gray-300",children:"الصفحة غير موجودة"}),y.jsx(Wi,{variant:"body1",className:"text-gray-600 dark:text-gray-400",children:"يبدو أنك وصلت إلى رابط غير صالح أو أن الصفحة لم تعد موجودة."}),y.jsx(Jf,{component:Lt,to:"/",variant:"contained",className:"!bg-indigo-500 hover:!bg-indigo-600 !text-white !px-6 !py-2 !rounded-full !shadow-md",children:"العودة إلى الصفحة الرئيسية"})]})})}function hI(){return y.jsx("div",{className:"min-h-screen text-gray-900 relative",children:y.jsx(Gw,{children:y.jsx(mp,{children:y.jsxs(Hm,{children:[y.jsx(xt,{path:"/",element:y.jsx(_u,{})}),y.jsx(xt,{path:"/main",element:y.jsx(_u,{})}),y.jsx(xt,{path:"/login",element:y.jsx(Qw,{})}),y.jsx(xt,{path:"/register",element:y.jsx(kT,{})}),y.jsx(xt,{path:"/forget-password",element:y.jsx(VT,{})}),y.jsx(xt,{path:"*",element:y.jsx(uI,{})}),y.jsx(xt,{path:"/dashboard",element:y.jsx(sI,{children:y.jsx(cI,{})})})]})})})})}const dI=document.getElementById("root"),fI=vu(dI);fI.render(y.jsx(hI,{}));
