import{c as Lp,r as x,a as se}from"./react-CQsPSZZR.js";import{j as p,c as cn,a as qe,A as Mp,T as jp,I as Pn,b as Ao,F as Up,P as lc,S as Fp,d as Bp,D as $p,e as zp,f as qp,B as Hp,g as lo,h as Wp,i as So,C as Gp,k as co}from"./mui-8DXeADck.js";import{u as Kp,m as kn}from"./framer-BTlro4A5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Xu,cc=Lp;Xu=cc.createRoot,cc.hydrateRoot;/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var uc="popstate";function Qp(n={}){function e(r,s){let{pathname:i,search:a,hash:l}=r.location;return Co("",{pathname:i,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){return typeof s=="string"?s:Dr(s)}return Yp(e,t,null,n)}function ae(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Ye(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Xp(){return Math.random().toString(36).substring(2,10)}function hc(n,e){return{usr:n.state,key:n.key,idx:e}}function Co(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Kn(e):e,state:t,key:e&&e.key||r||Xp()}}function Dr({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Kn(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function Yp(n,e,t,r={}){let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,l="POP",c=null,h=f();h==null&&(h=0,a.replaceState({...a.state,idx:h},""));function f(){return(a.state||{idx:null}).idx}function m(){l="POP";let R=f(),V=R==null?null:R-h;h=R,c&&c({action:l,location:N.location,delta:V})}function v(R,V){l="PUSH";let k=Co(N.location,R,V);h=f()+1;let C=hc(k,h),M=N.createHref(k);try{a.pushState(C,"",M)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;s.location.assign(M)}i&&c&&c({action:l,location:N.location,delta:1})}function I(R,V){l="REPLACE";let k=Co(N.location,R,V);h=f();let C=hc(k,h),M=N.createHref(k);a.replaceState(C,"",M),i&&c&&c({action:l,location:N.location,delta:0})}function P(R){return Jp(R)}let N={get action(){return l},get location(){return n(s,a)},listen(R){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(uc,m),c=R,()=>{s.removeEventListener(uc,m),c=null}},createHref(R){return e(s,R)},createURL:P,encodeLocation(R){let V=P(R);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:v,replace:I,go(R){return a.go(R)}};return N}function Jp(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),ae(t,"No window.location.(origin|href) available to create URL");let r=typeof n=="string"?n:Dr(n);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=t+r),new URL(r,t)}function Yu(n,e,t="/"){return Zp(n,e,t,!1)}function Zp(n,e,t,r){let s=typeof e=="string"?Kn(e):e,i=Tt(s.pathname||"/",t);if(i==null)return null;let a=Ju(n);em(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let h=hm(i);l=cm(a[c],h,r)}return l}function Ju(n,e=[],t=[],r="",s=!1){let i=(a,l,c=s,h)=>{let f={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(r)&&c)return;ae(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length)}let m=wt([r,f.relativePath]),v=t.concat(f);a.children&&a.children.length>0&&(ae(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Ju(a.children,e,v,m,c)),!(a.path==null&&!a.index)&&e.push({path:m,score:am(m,a.index),routesMeta:v})};return n.forEach((a,l)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))i(a,l);else for(let h of Zu(a.path))i(a,l,!0,h)}),e}function Zu(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=Zu(r.join("/")),l=[];return l.push(...a.map(c=>c===""?i:[i,c].join("/"))),s&&l.push(...a),l.map(c=>n.startsWith("/")&&c===""?"/":c)}function em(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:lm(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var tm=/^:[\w-]+$/,nm=3,rm=2,sm=1,im=10,om=-2,dc=n=>n==="*";function am(n,e){let t=n.split("/"),r=t.length;return t.some(dc)&&(r+=om),e&&(r+=rm),t.filter(s=>!dc(s)).reduce((s,i)=>s+(tm.test(i)?nm:i===""?sm:im),r)}function lm(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function cm(n,e,t=!1){let{routesMeta:r}=n,s={},i="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],h=l===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",m=$s({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},f),v=c.route;if(!m&&h&&t&&!r[r.length-1].route.index&&(m=$s({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!m)return null;Object.assign(s,m.params),a.push({params:s,pathname:wt([i,m.pathname]),pathnameBase:mm(wt([i,m.pathnameBase])),route:v}),m.pathnameBase!=="/"&&(i=wt([i,m.pathnameBase]))}return a}function $s(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=um(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((h,{paramName:f,isOptional:m},v)=>{if(f==="*"){let P=l[v]||"";a=i.slice(0,i.length-P.length).replace(/(.)\/+$/,"$1")}const I=l[v];return m&&!I?h[f]=void 0:h[f]=(I||"").replace(/%2F/g,"/"),h},{}),pathname:i,pathnameBase:a,pattern:n}}function um(n,e=!1,t=!0){Ye(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function hm(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ye(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Tt(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function dm(n,e="/"){let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?Kn(n):n;return{pathname:t?t.startsWith("/")?t:fm(t,e):e,search:gm(r),hash:_m(s)}}function fm(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function uo(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function pm(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function oa(n){let e=pm(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function aa(n,e,t,r=!1){let s;typeof n=="string"?s=Kn(n):(s={...n},ae(!s.pathname||!s.pathname.includes("?"),uo("?","pathname","search",s)),ae(!s.pathname||!s.pathname.includes("#"),uo("#","pathname","hash",s)),ae(!s.search||!s.search.includes("#"),uo("#","search","hash",s)));let i=n===""||s.pathname==="",a=i?"/":s.pathname,l;if(a==null)l=t;else{let m=e.length-1;if(!r&&a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),m-=1;s.pathname=v.join("/")}l=m>=0?e[m]:"/"}let c=dm(s,l),h=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(h||f)&&(c.pathname+="/"),c}var wt=n=>n.join("/").replace(/\/\/+/g,"/"),mm=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),gm=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,_m=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function ym(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var eh=["POST","PUT","PATCH","DELETE"];new Set(eh);var vm=["GET",...eh];new Set(vm);var Qn=x.createContext(null);Qn.displayName="DataRouter";var di=x.createContext(null);di.displayName="DataRouterState";x.createContext(!1);var th=x.createContext({isTransitioning:!1});th.displayName="ViewTransition";var wm=x.createContext(new Map);wm.displayName="Fetchers";var Em=x.createContext(null);Em.displayName="Await";var Je=x.createContext(null);Je.displayName="Navigation";var Hr=x.createContext(null);Hr.displayName="Location";var mt=x.createContext({outlet:null,matches:[],isDataRoute:!1});mt.displayName="Route";var la=x.createContext(null);la.displayName="RouteError";function Tm(n,{relative:e}={}){ae(Xn(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=x.useContext(Je),{hash:s,pathname:i,search:a}=Gr(n,{relative:e}),l=i;return t!=="/"&&(l=i==="/"?t:wt([t,i])),r.createHref({pathname:l,search:a,hash:s})}function Xn(){return x.useContext(Hr)!=null}function gt(){return ae(Xn(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Hr).location}var nh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function rh(n){x.useContext(Je).static||x.useLayoutEffect(n)}function Wr(){let{isDataRoute:n}=x.useContext(mt);return n?Om():bm()}function bm(){ae(Xn(),"useNavigate() may be used only in the context of a <Router> component.");let n=x.useContext(Qn),{basename:e,navigator:t}=x.useContext(Je),{matches:r}=x.useContext(mt),{pathname:s}=gt(),i=JSON.stringify(oa(r)),a=x.useRef(!1);return rh(()=>{a.current=!0}),x.useCallback((c,h={})=>{if(Ye(a.current,nh),!a.current)return;if(typeof c=="number"){t.go(c);return}let f=aa(c,JSON.parse(i),s,h.relative==="path");n==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:wt([e,f.pathname])),(h.replace?t.replace:t.push)(f,h.state,h)},[e,t,i,s,n])}x.createContext(null);function Gr(n,{relative:e}={}){let{matches:t}=x.useContext(mt),{pathname:r}=gt(),s=JSON.stringify(oa(t));return x.useMemo(()=>aa(n,JSON.parse(s),r,e==="path"),[n,s,r,e])}function Im(n,e){return sh(n,e)}function sh(n,e,t,r,s){var k;ae(Xn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=x.useContext(Je),{matches:a}=x.useContext(mt),l=a[a.length-1],c=l?l.params:{},h=l?l.pathname:"/",f=l?l.pathnameBase:"/",m=l&&l.route;{let C=m&&m.path||"";ih(h,!m||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let v=gt(),I;if(e){let C=typeof e=="string"?Kn(e):e;ae(f==="/"||((k=C.pathname)==null?void 0:k.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${C.pathname}" was given in the \`location\` prop.`),I=C}else I=v;let P=I.pathname||"/",N=P;if(f!=="/"){let C=f.replace(/^\//,"").split("/");N="/"+P.replace(/^\//,"").split("/").slice(C.length).join("/")}let R=Yu(n,{pathname:N});Ye(m||R!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),Ye(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=Cm(R&&R.map(C=>Object.assign({},C,{params:Object.assign({},c,C.params),pathname:wt([f,i.encodeLocation?i.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?f:wt([f,i.encodeLocation?i.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),a,t,r,s);return e&&V?x.createElement(Hr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},V):V}function xm(){let n=Vm(),e=ym(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",n),a=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:i},"ErrorBoundary")," or"," ",x.createElement("code",{style:i},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),t?x.createElement("pre",{style:s},t):null,a)}var Rm=x.createElement(xm,null),Am=class extends x.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.unstable_onError?this.props.unstable_onError(n,e):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?x.createElement(mt.Provider,{value:this.props.routeContext},x.createElement(la.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Sm({routeContext:n,match:e,children:t}){let r=x.useContext(Qn);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),x.createElement(mt.Provider,{value:n},t)}function Cm(n,e=[],t=null,r=null,s=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let i=n,a=t==null?void 0:t.errors;if(a!=null){let h=i.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);ae(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,h+1))}let l=!1,c=-1;if(t)for(let h=0;h<i.length;h++){let f=i[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:v}=t,I=f.route.loader&&!m.hasOwnProperty(f.route.id)&&(!v||v[f.route.id]===void 0);if(f.route.lazy||I){l=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((h,f,m)=>{let v,I=!1,P=null,N=null;t&&(v=a&&f.route.id?a[f.route.id]:void 0,P=f.route.errorElement||Rm,l&&(c<0&&m===0?(ih("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,N=null):c===m&&(I=!0,N=f.route.hydrateFallbackElement||null)));let R=e.concat(i.slice(0,m+1)),V=()=>{let k;return v?k=P:I?k=N:f.route.Component?k=x.createElement(f.route.Component,null):f.route.element?k=f.route.element:k=h,x.createElement(Sm,{match:f,routeContext:{outlet:h,matches:R,isDataRoute:t!=null},children:k})};return t&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?x.createElement(Am,{location:t.location,revalidation:t.revalidation,component:P,error:v,children:V(),routeContext:{outlet:null,matches:R,isDataRoute:!0},unstable_onError:r}):V()},null)}function ca(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pm(n){let e=x.useContext(Qn);return ae(e,ca(n)),e}function km(n){let e=x.useContext(di);return ae(e,ca(n)),e}function Nm(n){let e=x.useContext(mt);return ae(e,ca(n)),e}function ua(n){let e=Nm(n),t=e.matches[e.matches.length-1];return ae(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function Dm(){return ua("useRouteId")}function Vm(){var r;let n=x.useContext(la),e=km("useRouteError"),t=ua("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function Om(){let{router:n}=Pm("useNavigate"),e=ua("useNavigate"),t=x.useRef(!1);return rh(()=>{t.current=!0}),x.useCallback(async(s,i={})=>{Ye(t.current,nh),t.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:e,...i}))},[n,e])}var fc={};function ih(n,e,t){!e&&!fc[n]&&(fc[n]=!0,Ye(!1,t))}x.memo(Lm);function Lm({routes:n,future:e,state:t,unstable_onError:r}){return sh(n,void 0,t,r,e)}function Mm({to:n,replace:e,state:t,relative:r}){ae(Xn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=x.useContext(Je);Ye(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=x.useContext(mt),{pathname:a}=gt(),l=Wr(),c=aa(n,oa(i),a,r==="path"),h=JSON.stringify(c);return x.useEffect(()=>{l(JSON.parse(h),{replace:e,state:t,relative:r})},[l,h,r,e,t]),null}function Mt(n){ae(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function jm({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:s,static:i=!1}){ae(!Xn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=n.replace(/^\/*/,"/"),l=x.useMemo(()=>({basename:a,navigator:s,static:i,future:{}}),[a,s,i]);typeof t=="string"&&(t=Kn(t));let{pathname:c="/",search:h="",hash:f="",state:m=null,key:v="default"}=t,I=x.useMemo(()=>{let P=Tt(c,a);return P==null?null:{location:{pathname:P,search:h,hash:f,state:m,key:v},navigationType:r}},[a,c,h,f,m,v,r]);return Ye(I!=null,`<Router basename="${a}"> is not able to match the URL "${c}${h}${f}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:x.createElement(Je.Provider,{value:l},x.createElement(Hr.Provider,{children:e,value:I}))}function Um({children:n,location:e}){return Im(Po(n),e)}function Po(n,e=[]){let t=[];return x.Children.forEach(n,(r,s)=>{if(!x.isValidElement(r))return;let i=[...e,s];if(r.type===x.Fragment){t.push.apply(t,Po(r.props.children,i));return}ae(r.type===Mt,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ae(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Po(r.props.children,i)),t.push(a)}),t}var Ps="get",ks="application/x-www-form-urlencoded";function fi(n){return n!=null&&typeof n.tagName=="string"}function Fm(n){return fi(n)&&n.tagName.toLowerCase()==="button"}function Bm(n){return fi(n)&&n.tagName.toLowerCase()==="form"}function $m(n){return fi(n)&&n.tagName.toLowerCase()==="input"}function zm(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function qm(n,e){return n.button===0&&(!e||e==="_self")&&!zm(n)}var Es=null;function Hm(){if(Es===null)try{new FormData(document.createElement("form"),0),Es=!1}catch{Es=!0}return Es}var Wm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ho(n){return n!=null&&!Wm.has(n)?(Ye(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ks}"`),null):n}function Gm(n,e){let t,r,s,i,a;if(Bm(n)){let l=n.getAttribute("action");r=l?Tt(l,e):null,t=n.getAttribute("method")||Ps,s=ho(n.getAttribute("enctype"))||ks,i=new FormData(n)}else if(Fm(n)||$m(n)&&(n.type==="submit"||n.type==="image")){let l=n.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=n.getAttribute("formaction")||l.getAttribute("action");if(r=c?Tt(c,e):null,t=n.getAttribute("formmethod")||l.getAttribute("method")||Ps,s=ho(n.getAttribute("formenctype"))||ho(l.getAttribute("enctype"))||ks,i=new FormData(l,n),!Hm()){let{name:h,type:f,value:m}=n;if(f==="image"){let v=h?`${h}.`:"";i.append(`${v}x`,"0"),i.append(`${v}y`,"0")}else h&&i.append(h,m)}}else{if(fi(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Ps,r=null,s=ks,a=n}return i&&s==="text/plain"&&(a=i,i=void 0),{action:r,method:t.toLowerCase(),encType:s,formData:i,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ha(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Km(n,e,t){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname=`_root.${t}`:e&&Tt(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${t}`,r}async function Qm(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xm(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Ym(n,e,t){let r=await Promise.all(n.map(async s=>{let i=e.routes[s.route.id];if(i){let a=await Qm(i,t);return a.links?a.links():[]}return[]}));return tg(r.flat(1).filter(Xm).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function pc(n,e,t,r,s,i){let a=(c,h)=>t[h]?c.route.id!==t[h].route.id:!0,l=(c,h)=>{var f;return t[h].pathname!==c.pathname||((f=t[h].route.path)==null?void 0:f.endsWith("*"))&&t[h].params["*"]!==c.params["*"]};return i==="assets"?e.filter((c,h)=>a(c,h)||l(c,h)):i==="data"?e.filter((c,h)=>{var m;let f=r.routes[c.route.id];if(!f||!f.hasLoader)return!1;if(a(c,h)||l(c,h))return!0;if(c.route.shouldRevalidate){let v=c.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((m=t[0])==null?void 0:m.params)||{},nextUrl:new URL(n,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Jm(n,e,{includeHydrateFallback:t}={}){return Zm(n.map(r=>{let s=e.routes[r.route.id];if(!s)return[];let i=[s.module];return s.clientActionModule&&(i=i.concat(s.clientActionModule)),s.clientLoaderModule&&(i=i.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(i=i.concat(s.hydrateFallbackModule)),s.imports&&(i=i.concat(s.imports)),i}).flat(1))}function Zm(n){return[...new Set(n)]}function eg(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function tg(n,e){let t=new Set;return new Set(e),n.reduce((r,s)=>{let i=JSON.stringify(eg(s));return t.has(i)||(t.add(i),r.push({key:i,link:s})),r},[])}function oh(){let n=x.useContext(Qn);return ha(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function ng(){let n=x.useContext(di);return ha(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var da=x.createContext(void 0);da.displayName="FrameworkContext";function ah(){let n=x.useContext(da);return ha(n,"You must render this element inside a <HydratedRouter> element"),n}function rg(n,e){let t=x.useContext(da),[r,s]=x.useState(!1),[i,a]=x.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:h,onMouseLeave:f,onTouchStart:m}=e,v=x.useRef(null);x.useEffect(()=>{if(n==="render"&&a(!0),n==="viewport"){let N=V=>{V.forEach(k=>{a(k.isIntersecting)})},R=new IntersectionObserver(N,{threshold:.5});return v.current&&R.observe(v.current),()=>{R.disconnect()}}},[n]),x.useEffect(()=>{if(r){let N=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(N)}}},[r]);let I=()=>{s(!0)},P=()=>{s(!1),a(!1)};return t?n!=="intent"?[i,v,{}]:[i,v,{onFocus:yr(l,I),onBlur:yr(c,P),onMouseEnter:yr(h,I),onMouseLeave:yr(f,P),onTouchStart:yr(m,I)}]:[!1,v,{}]}function yr(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function sg({page:n,...e}){let{router:t}=oh(),r=x.useMemo(()=>Yu(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?x.createElement(og,{page:n,matches:r,...e}):null}function ig(n){let{manifest:e,routeModules:t}=ah(),[r,s]=x.useState([]);return x.useEffect(()=>{let i=!1;return Ym(n,e,t).then(a=>{i||s(a)}),()=>{i=!0}},[n,e,t]),r}function og({page:n,matches:e,...t}){let r=gt(),{manifest:s,routeModules:i}=ah(),{basename:a}=oh(),{loaderData:l,matches:c}=ng(),h=x.useMemo(()=>pc(n,e,c,s,r,"data"),[n,e,c,s,r]),f=x.useMemo(()=>pc(n,e,c,s,r,"assets"),[n,e,c,s,r]),m=x.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let P=new Set,N=!1;if(e.forEach(V=>{var C;let k=s.routes[V.route.id];!k||!k.hasLoader||(!h.some(M=>M.route.id===V.route.id)&&V.route.id in l&&((C=i[V.route.id])!=null&&C.shouldRevalidate)||k.hasClientLoader?N=!0:P.add(V.route.id))}),P.size===0)return[];let R=Km(n,a,"data");return N&&P.size>0&&R.searchParams.set("_routes",e.filter(V=>P.has(V.route.id)).map(V=>V.route.id).join(",")),[R.pathname+R.search]},[a,l,r,s,h,e,n,i]),v=x.useMemo(()=>Jm(f,s),[f,s]),I=ig(f);return x.createElement(x.Fragment,null,m.map(P=>x.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...t})),v.map(P=>x.createElement("link",{key:P,rel:"modulepreload",href:P,...t})),I.map(({key:P,link:N})=>x.createElement("link",{key:P,nonce:t.nonce,...N})))}function ag(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var lh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lh&&(window.__reactRouterVersion="7.9.3")}catch{}function lg({basename:n,children:e,window:t}){let r=x.useRef();r.current==null&&(r.current=Qp({window:t,v5Compat:!0}));let s=r.current,[i,a]=x.useState({action:s.action,location:s.location}),l=x.useCallback(c=>{x.startTransition(()=>a(c))},[a]);return x.useLayoutEffect(()=>s.listen(l),[s,l]),x.createElement(jm,{basename:n,children:e,location:i.location,navigationType:i.action,navigator:s})}var ch=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wt=x.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:s,reloadDocument:i,replace:a,state:l,target:c,to:h,preventScrollReset:f,viewTransition:m,...v},I){let{basename:P}=x.useContext(Je),N=typeof h=="string"&&ch.test(h),R,V=!1;if(typeof h=="string"&&N&&(R=h,lh))try{let y=new URL(window.location.href),T=h.startsWith("//")?new URL(y.protocol+h):new URL(h),b=Tt(T.pathname,P);T.origin===y.origin&&b!=null?h=b+T.search+T.hash:V=!0}catch{Ye(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=Tm(h,{relative:s}),[C,M,$]=rg(r,v),W=dg(h,{replace:a,state:l,target:c,preventScrollReset:f,relative:s,viewTransition:m});function E(y){e&&e(y),y.defaultPrevented||W(y)}let _=x.createElement("a",{...v,...$,href:R||k,onClick:V||i?e:E,ref:ag(I,M),target:c,"data-discover":!N&&t==="render"?"true":void 0});return C&&!N?x.createElement(x.Fragment,null,_,x.createElement(sg,{page:k})):_});Wt.displayName="Link";var cg=x.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:s=!1,style:i,to:a,viewTransition:l,children:c,...h},f){let m=Gr(a,{relative:h.relative}),v=gt(),I=x.useContext(di),{navigator:P,basename:N}=x.useContext(Je),R=I!=null&&_g(m)&&l===!0,V=P.encodeLocation?P.encodeLocation(m).pathname:m.pathname,k=v.pathname,C=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;t||(k=k.toLowerCase(),C=C?C.toLowerCase():null,V=V.toLowerCase()),C&&N&&(C=Tt(C,N)||C);const M=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let $=k===V||!s&&k.startsWith(V)&&k.charAt(M)==="/",W=C!=null&&(C===V||!s&&C.startsWith(V)&&C.charAt(V.length)==="/"),E={isActive:$,isPending:W,isTransitioning:R},_=$?e:void 0,y;typeof r=="function"?y=r(E):y=[r,$?"active":null,W?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let T=typeof i=="function"?i(E):i;return x.createElement(Wt,{...h,"aria-current":_,className:y,ref:f,style:T,to:a,viewTransition:l},typeof c=="function"?c(E):c)});cg.displayName="NavLink";var ug=x.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:s,state:i,method:a=Ps,action:l,onSubmit:c,relative:h,preventScrollReset:f,viewTransition:m,...v},I)=>{let P=mg(),N=gg(l,{relative:h}),R=a.toLowerCase()==="get"?"get":"post",V=typeof l=="string"&&ch.test(l),k=C=>{if(c&&c(C),C.defaultPrevented)return;C.preventDefault();let M=C.nativeEvent.submitter,$=(M==null?void 0:M.getAttribute("formmethod"))||a;P(M||C.currentTarget,{fetcherKey:e,method:$,navigate:t,replace:s,state:i,relative:h,preventScrollReset:f,viewTransition:m})};return x.createElement("form",{ref:I,method:R,action:N,onSubmit:r?c:k,...v,"data-discover":!V&&n==="render"?"true":void 0})});ug.displayName="Form";function hg(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function uh(n){let e=x.useContext(Qn);return ae(e,hg(n)),e}function dg(n,{target:e,replace:t,state:r,preventScrollReset:s,relative:i,viewTransition:a}={}){let l=Wr(),c=gt(),h=Gr(n,{relative:i});return x.useCallback(f=>{if(qm(f,e)){f.preventDefault();let m=t!==void 0?t:Dr(c)===Dr(h);l(n,{replace:m,state:r,preventScrollReset:s,relative:i,viewTransition:a})}},[c,l,h,t,r,e,n,s,i,a])}var fg=0,pg=()=>`__${String(++fg)}__`;function mg(){let{router:n}=uh("useSubmit"),{basename:e}=x.useContext(Je),t=Dm();return x.useCallback(async(r,s={})=>{let{action:i,method:a,encType:l,formData:c,body:h}=Gm(r,e);if(s.navigate===!1){let f=s.fetcherKey||pg();await n.fetch(f,t,s.action||i,{preventScrollReset:s.preventScrollReset,formData:c,body:h,formMethod:s.method||a,formEncType:s.encType||l,flushSync:s.flushSync})}else await n.navigate(s.action||i,{preventScrollReset:s.preventScrollReset,formData:c,body:h,formMethod:s.method||a,formEncType:s.encType||l,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,e,t])}function gg(n,{relative:e}={}){let{basename:t}=x.useContext(Je),r=x.useContext(mt);ae(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),i={...Gr(n||".",{relative:e})},a=gt();if(n==null){i.search=a.search;let l=new URLSearchParams(i.search),c=l.getAll("index");if(c.some(f=>f==="")){l.delete("index"),c.filter(m=>m).forEach(m=>l.append("index",m));let f=l.toString();i.search=f?`?${f}`:""}}return(!n||n===".")&&s.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(i.pathname=i.pathname==="/"?t:wt([t,i.pathname])),Dr(i)}function _g(n,{relative:e}={}){let t=x.useContext(th);ae(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=uh("useViewTransitionState"),s=Gr(n,{relative:e});if(!t.isTransitioning)return!1;let i=Tt(t.currentLocation.pathname,r)||t.currentLocation.pathname,a=Tt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return $s(s.pathname,a)!=null||$s(s.pathname,i)!=null}const yg=()=>{};var mc={};/**
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
 */const hh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},vg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},dh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let v=(l&15)<<2|h>>6,I=h&63;c||(I=64,a||(v=64)),r.push(t[f],t[m],t[v],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(hh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new wg;const v=i<<2|l>>4;if(r.push(v),h!==64){const I=l<<4&240|h>>2;if(r.push(I),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eg=function(n){const e=hh(n);return dh.encodeByteArray(e,!0)},zs=function(n){return Eg(n).replace(/\./g,"")},fh=function(n){try{return dh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bg=()=>Tg().__FIREBASE_DEFAULTS__,Ig=()=>{if(typeof process>"u"||typeof mc>"u")return;const n=mc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&fh(n[1]);return e&&JSON.parse(e)},pi=()=>{try{return yg()||bg()||Ig()||xg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ph=n=>{var e,t;return(t=(e=pi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Rg=n=>{const e=ph(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},mh=()=>{var n;return(n=pi())==null?void 0:n.config},gh=n=>{var e;return(e=pi())==null?void 0:e[`_${n}`]};/**
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
 */class Ag{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function En(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _h(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Sg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[zs(JSON.stringify(t)),zs(JSON.stringify(a)),""].join(".")}const Rr={};function Cg(){const n={prod:[],emulator:[]};for(const e of Object.keys(Rr))Rr[e]?n.emulator.push(e):n.prod.push(e);return n}function Pg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let gc=!1;function yh(n,e){if(typeof window>"u"||typeof document>"u"||!En(window.location.host)||Rr[n]===e||Rr[n]||gc)return;Rr[n]=e;function t(v){return`__firebase__banner__${v}`}const r="__firebase__banner",i=Cg().prod.length>0;function a(){const v=document.getElementById(r);v&&v.remove()}function l(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function c(v,I){v.setAttribute("width","24"),v.setAttribute("id",I),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function h(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{gc=!0,a()},v}function f(v,I){v.setAttribute("id",I),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function m(){const v=Pg(r),I=t("text"),P=document.getElementById(I)||document.createElement("span"),N=t("learnmore"),R=document.getElementById(N)||document.createElement("a"),V=t("preprendIcon"),k=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const C=v.element;l(C),f(R,N);const M=h();c(k,V),C.append(k,P,R,M),document.body.appendChild(C)}i?(P.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function Ng(){var e;const n=(e=pi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Og(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lg(){const n=Ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Mg(){return!Ng()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jg(){try{return typeof indexedDB=="object"}catch{return!1}}function Ug(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Fg="FirebaseError";class _t extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Fg,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kr.prototype.create)}}class Kr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Bg(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new _t(s,l,r)}}function Bg(n,e){return n.replace($g,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $g=/\{\$([^}]+)}/g;function zg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function fn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(_c(i)&&_c(a)){if(!fn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function _c(n){return n!==null&&typeof n=="object"}/**
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
 */function Qr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Er(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function qg(n,e){const t=new Hg(n,e);return t.subscribe.bind(t)}class Hg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Wg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=fo),s.error===void 0&&(s.error=fo),s.complete===void 0&&(s.complete=fo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function fo(){}/**
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
 */function Ae(n){return n&&n._delegate?n._delegate:n}class Gt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const on="[DEFAULT]";/**
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
 */class Gg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ag;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qg(e))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=on){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=on){return this.instances.has(e)}getOptions(e=on){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=on){return this.component?this.component.multipleInstances?e:on:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kg(n){return n===on?void 0:n}function Qg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Xg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Gg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const Yg={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Jg=X.INFO,Zg={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},e_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Zg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fa{constructor(e){this.name=e,this._logLevel=Jg,this._logHandler=e_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const t_=(n,e)=>e.some(t=>n instanceof t);let yc,vc;function n_(){return yc||(yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function r_(){return vc||(vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vh=new WeakMap,ko=new WeakMap,wh=new WeakMap,po=new WeakMap,pa=new WeakMap;function s_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(zt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&vh.set(t,n)}).catch(()=>{}),pa.set(e,n),e}function i_(n){if(ko.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ko.set(n,e)}let No={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ko.get(n);if(e==="objectStoreNames")return n.objectStoreNames||wh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return zt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function o_(n){No=n(No)}function a_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(mo(this),e,...t);return wh.set(r,e.sort?e.sort():[e]),zt(r)}:r_().includes(n)?function(...e){return n.apply(mo(this),e),zt(vh.get(this))}:function(...e){return zt(n.apply(mo(this),e))}}function l_(n){return typeof n=="function"?a_(n):(n instanceof IDBTransaction&&i_(n),t_(n,n_())?new Proxy(n,No):n)}function zt(n){if(n instanceof IDBRequest)return s_(n);if(po.has(n))return po.get(n);const e=l_(n);return e!==n&&(po.set(n,e),pa.set(e,n)),e}const mo=n=>pa.get(n);function c_(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=zt(a);return r&&a.addEventListener("upgradeneeded",c=>{r(zt(a.result),c.oldVersion,c.newVersion,zt(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const u_=["get","getKey","getAll","getAllKeys","count"],h_=["put","add","delete","clear"],go=new Map;function wc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(go.get(e))return go.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=h_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||u_.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return go.set(e,i),i}o_(n=>({...n,get:(e,t,r)=>wc(e,t)||n.get(e,t,r),has:(e,t)=>!!wc(e,t)||n.has(e,t)}));/**
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
 */class d_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(f_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function f_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Do="@firebase/app",Ec="0.14.3";/**
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
 */const bt=new fa("@firebase/app"),p_="@firebase/app-compat",m_="@firebase/analytics-compat",g_="@firebase/analytics",__="@firebase/app-check-compat",y_="@firebase/app-check",v_="@firebase/auth",w_="@firebase/auth-compat",E_="@firebase/database",T_="@firebase/data-connect",b_="@firebase/database-compat",I_="@firebase/functions",x_="@firebase/functions-compat",R_="@firebase/installations",A_="@firebase/installations-compat",S_="@firebase/messaging",C_="@firebase/messaging-compat",P_="@firebase/performance",k_="@firebase/performance-compat",N_="@firebase/remote-config",D_="@firebase/remote-config-compat",V_="@firebase/storage",O_="@firebase/storage-compat",L_="@firebase/firestore",M_="@firebase/ai",j_="@firebase/firestore-compat",U_="firebase",F_="12.3.0";/**
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
 */const Vo="[DEFAULT]",B_={[Do]:"fire-core",[p_]:"fire-core-compat",[g_]:"fire-analytics",[m_]:"fire-analytics-compat",[y_]:"fire-app-check",[__]:"fire-app-check-compat",[v_]:"fire-auth",[w_]:"fire-auth-compat",[E_]:"fire-rtdb",[T_]:"fire-data-connect",[b_]:"fire-rtdb-compat",[I_]:"fire-fn",[x_]:"fire-fn-compat",[R_]:"fire-iid",[A_]:"fire-iid-compat",[S_]:"fire-fcm",[C_]:"fire-fcm-compat",[P_]:"fire-perf",[k_]:"fire-perf-compat",[N_]:"fire-rc",[D_]:"fire-rc-compat",[V_]:"fire-gcs",[O_]:"fire-gcs-compat",[L_]:"fire-fst",[j_]:"fire-fst-compat",[M_]:"fire-vertex","fire-js":"fire-js",[U_]:"fire-js-all"};/**
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
 */const qs=new Map,$_=new Map,Oo=new Map;function Tc(n,e){try{n.container.addComponent(e)}catch(t){bt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pn(n){const e=n.name;if(Oo.has(e))return bt.debug(`There were multiple attempts to register component ${e}.`),!1;Oo.set(e,n);for(const t of qs.values())Tc(t,n);for(const t of $_.values())Tc(t,n);return!0}function ma(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function je(n){return n==null?!1:n.settings!==void 0}/**
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
 */const z_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new Kr("app","Firebase",z_);/**
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
 */class q_{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
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
 */const Tn=F_;function Eh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Vo,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw qt.create("bad-app-name",{appName:String(s)});if(t||(t=mh()),!t)throw qt.create("no-options");const i=qs.get(s);if(i){if(fn(t,i.options)&&fn(r,i.config))return i;throw qt.create("duplicate-app",{appName:s})}const a=new Xg(s);for(const c of Oo.values())a.addComponent(c);const l=new q_(t,r,a);return qs.set(s,l),l}function Th(n=Vo){const e=qs.get(n);if(!e&&n===Vo&&mh())return Eh();if(!e)throw qt.create("no-app",{appName:n});return e}function it(n,e,t){let r=B_[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bt.warn(a.join(" "));return}pn(new Gt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const H_="firebase-heartbeat-database",W_=1,Vr="firebase-heartbeat-store";let _o=null;function bh(){return _o||(_o=c_(H_,W_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Vr)}catch(t){console.warn(t)}}}}).catch(n=>{throw qt.create("idb-open",{originalErrorMessage:n.message})})),_o}async function G_(n){try{const t=(await bh()).transaction(Vr),r=await t.objectStore(Vr).get(Ih(n));return await t.done,r}catch(e){if(e instanceof _t)bt.warn(e.message);else{const t=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bt.warn(t.message)}}}async function bc(n,e){try{const r=(await bh()).transaction(Vr,"readwrite");await r.objectStore(Vr).put(e,Ih(n)),await r.done}catch(t){if(t instanceof _t)bt.warn(t.message);else{const r=qt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});bt.warn(r.message)}}}function Ih(n){return`${n.name}!${n.options.appId}`}/**
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
 */const K_=1024,Q_=30;class X_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new J_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ic();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Q_){const a=Z_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ic(),{heartbeatsToSend:r,unsentEntries:s}=Y_(this._heartbeatsCache.heartbeats),i=zs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return bt.warn(t),""}}}function Ic(){return new Date().toISOString().substring(0,10)}function Y_(n,e=K_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),xc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),xc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class J_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jg()?Ug().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await G_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function xc(n){return zs(JSON.stringify({version:2,heartbeats:n})).length}function Z_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function ey(n){pn(new Gt("platform-logger",e=>new d_(e),"PRIVATE")),pn(new Gt("heartbeat",e=>new X_(e),"PRIVATE")),it(Do,Ec,n),it(Do,Ec,"esm2020"),it("fire-js","")}ey("");function xh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ty=xh,Rh=new Kr("auth","Firebase",xh());/**
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
 */const Hs=new fa("@firebase/auth");function ny(n,...e){Hs.logLevel<=X.WARN&&Hs.warn(`Auth (${Tn}): ${n}`,...e)}function Ns(n,...e){Hs.logLevel<=X.ERROR&&Hs.error(`Auth (${Tn}): ${n}`,...e)}/**
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
 */function Ge(n,...e){throw _a(n,...e)}function Xe(n,...e){return _a(n,...e)}function ga(n,e,t){const r={...ty(),[e]:t};return new Kr("auth","Firebase",r).create(e,{appName:n.name})}function ot(n){return ga(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ah(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ge(n,"argument-error"),ga(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _a(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Rh.create(n,...e)}function q(n,e,...t){if(!n)throw _a(e,...t)}function yt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ns(e),new Error(e)}function It(n,e){n||yt(e)}/**
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
 */function Lo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function ry(){return Rc()==="http:"||Rc()==="https:"}function Rc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function sy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ry()||Vg()||"connection"in navigator)?navigator.onLine:!0}function iy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Xr{constructor(e,t){this.shortDelay=e,this.longDelay=t,It(t>e,"Short delay should be less than long delay!"),this.isMobile=kg()||Og()}get(){return sy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ya(n,e){It(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Sh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ay=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ly=new Xr(3e4,6e4);function St(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ct(n,e,t,r,s={}){return Ch(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Qr({key:n.config.apiKey,...a}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:c,...i};return Dg()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&En(n.emulatorConfig.host)&&(h.credentials="include"),Sh.fetch()(await Ph(n,n.config.apiHost,t,l),h)})}async function Ch(n,e,t){n._canInitEmulator=!1;const r={...oy,...e};try{const s=new uy(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ts(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ts(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Ts(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Ts(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ga(n,f,h);Ge(n,f)}}catch(s){if(s instanceof _t)throw s;Ge(n,"network-request-failed",{message:String(s)})}}async function Yr(n,e,t,r,s={}){const i=await Ct(n,e,t,r,s);return"mfaPendingCredential"in i&&Ge(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ph(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?ya(n.config,s):`${n.config.apiScheme}://${s}`;return ay.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function cy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),ly.get())})}}function Ts(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Xe(n,e,r);return s.customData._tokenResponse=t,s}function Ac(n){return n!==void 0&&n.enterprise!==void 0}class hy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return cy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function dy(n,e){return Ct(n,"GET","/v2/recaptchaConfig",St(n,e))}/**
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
 */async function fy(n,e){return Ct(n,"POST","/v1/accounts:delete",e)}async function Ws(n,e){return Ct(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ar(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function py(n,e=!1){const t=Ae(n),r=await t.getIdToken(e),s=va(r);q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ar(yo(s.auth_time)),issuedAtTime:Ar(yo(s.iat)),expirationTime:Ar(yo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yo(n){return Number(n)*1e3}function va(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ns("JWT malformed, contained fewer than 3 sections"),null;try{const s=fh(t);return s?JSON.parse(s):(Ns("Failed to decode base64 JWT payload"),null)}catch(s){return Ns("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sc(n){const e=va(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Or(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof _t&&my(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function my({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class gy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ar(this.lastLoginAt),this.creationTime=Ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gs(n){var m;const e=n.auth,t=await n.getIdToken(),r=await Or(n,Ws(e,{idToken:t}));q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?kh(s.providerUserInfo):[],a=yy(n.providerData,i),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Mo(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function _y(n){const e=Ae(n);await Gs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yy(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function vy(n,e){const t=await Ch(n,{},async()=>{const r=Qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Ph(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&En(n.emulatorConfig.host)&&(c.credentials="include"),Sh.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wy(n,e){return Ct(n,"POST","/v2/accounts:revokeToken",St(n,e))}/**
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
 */class Ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=Sc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await vy(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Ln;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ln,this.toJSON())}_performRefresh(){return yt("not implemented")}}/**
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
 */function Lt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ke{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new gy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Or(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return py(this,e)}reload(){return _y(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ke({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Gs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(ot(this.auth));const e=await this.getIdToken();return await Or(this,fy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:v,isAnonymous:I,providerData:P,stsTokenManager:N}=t;q(m&&N,e,"internal-error");const R=Ln.fromJSON(this.name,N);q(typeof m=="string",e,"internal-error"),Lt(r,e.name),Lt(s,e.name),q(typeof v=="boolean",e,"internal-error"),q(typeof I=="boolean",e,"internal-error"),Lt(i,e.name),Lt(a,e.name),Lt(l,e.name),Lt(c,e.name),Lt(h,e.name),Lt(f,e.name);const V=new Ke({uid:m,auth:e,email:s,emailVerified:v,displayName:r,isAnonymous:I,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:R,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(V.providerData=P.map(k=>({...k}))),c&&(V._redirectEventId=c),V}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ln;s.updateFromServerResponse(t);const i=new Ke({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Gs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?kh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ln;l.updateFromIdToken(r);const c=new Ke({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Mo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const Cc=new Map;function vt(n){It(n instanceof Function,"Expected a class definition");let e=Cc.get(n);return e?(It(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Cc.set(n,e),e)}/**
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
 */class Nh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Nh.type="NONE";const Pc=Nh;/**
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
 */function Ds(n,e,t){return`firebase:${n}:${e}:${t}`}class Mn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ds(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ds("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ws(this.auth,{idToken:e}).catch(()=>{});return t?Ke._fromGetAccountInfoResponse(this.auth,t,e):null}return Ke._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Mn(vt(Pc),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||vt(Pc);const a=Ds(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){let m;if(typeof f=="string"){const v=await Ws(e,{idToken:f}).catch(()=>{});if(!v)break;m=await Ke._fromGetAccountInfoResponse(e,v,f)}else m=Ke._fromJSON(e,f);h!==i&&(l=m),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Mn(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Mn(i,e,r))}}/**
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
 */function kc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jh(e))return"Blackberry";if(Uh(e))return"Webos";if(Vh(e))return"Safari";if((e.includes("chrome/")||Oh(e))&&!e.includes("edge/"))return"Chrome";if(Mh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dh(n=Ve()){return/firefox\//i.test(n)}function Vh(n=Ve()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Oh(n=Ve()){return/crios\//i.test(n)}function Lh(n=Ve()){return/iemobile/i.test(n)}function Mh(n=Ve()){return/android/i.test(n)}function jh(n=Ve()){return/blackberry/i.test(n)}function Uh(n=Ve()){return/webos/i.test(n)}function wa(n=Ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ey(n=Ve()){var e;return wa(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Ty(){return Lg()&&document.documentMode===10}function Fh(n=Ve()){return wa(n)||Mh(n)||Uh(n)||jh(n)||/windows phone/i.test(n)||Lh(n)}/**
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
 */function Bh(n,e=[]){let t;switch(n){case"Browser":t=kc(Ve());break;case"Worker":t=`${kc(Ve())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tn}/${r}`}/**
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
 */class by{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Iy(n,e={}){return Ct(n,"GET","/v2/passwordPolicy",St(n,e))}/**
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
 */const xy=6;class Ry{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??xy,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Ay{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nc(this),this.idTokenSubscription=new Nc(this),this.beforeStateQueue=new by(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Mn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ws(this,{idToken:e}),r=await Ke._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(je(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(ot(this));const t=e?Ae(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Iy(this),t=new Ry(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Kr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await wy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vt(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await Mn.create(this,[vt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&ny(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ze(n){return Ae(n)}class Nc{constructor(e){this.auth=e,this.observer=null,this.addObserver=qg(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let mi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sy(n){mi=n}function $h(n){return mi.loadJS(n)}function Cy(){return mi.recaptchaEnterpriseScript}function Py(){return mi.gapiScript}function ky(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Ny{constructor(){this.enterprise=new Dy}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Dy{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Vy="recaptcha-enterprise",zh="NO_RECAPTCHA";class Oy{constructor(e){this.type=Vy,this.auth=Ze(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{dy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new hy(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,a,l){const c=window.grecaptcha;Ac(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(zh)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ny().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&Ac(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Cy();c.length!==0&&(c+=l),$h(c).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Dc(n,e,t,r=!1,s=!1){const i=new Oy(n);let a;if(s)a=zh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ks(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Dc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Dc(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
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
 */function Ly(n,e){const t=ma(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(fn(i,e??{}))return s;Ge(s,"already-initialized")}return t.initialize({options:e})}function My(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(vt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jy(n,e,t){const r=Ze(n);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=qh(e),{host:a,port:l}=Uy(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(fn(h,r.config.emulator)&&fn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,En(a)?(_h(`${i}//${a}${c}`),yh("Auth",!0)):Fy()}function qh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Uy(n){const e=qh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Vc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Vc(a)}}}function Vc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Fy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ea{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yt("not implemented")}_getIdTokenResponse(e){return yt("not implemented")}_linkToIdToken(e,t){return yt("not implemented")}_getReauthenticationResolver(e){return yt("not implemented")}}async function By(n,e){return Ct(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function $y(n,e){return Yr(n,"POST","/v1/accounts:signInWithPassword",St(n,e))}async function zy(n,e){return Ct(n,"POST","/v1/accounts:sendOobCode",St(n,e))}async function qy(n,e){return zy(n,e)}/**
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
 */async function Hy(n,e){return Yr(n,"POST","/v1/accounts:signInWithEmailLink",St(n,e))}async function Wy(n,e){return Yr(n,"POST","/v1/accounts:signInWithEmailLink",St(n,e))}/**
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
 */class Lr extends Ea{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Lr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Lr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ks(e,t,"signInWithPassword",$y);case"emailLink":return Hy(e,{email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ks(e,r,"signUpPassword",By);case"emailLink":return Wy(e,{idToken:t,email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jn(n,e){return Yr(n,"POST","/v1/accounts:signInWithIdp",St(n,e))}/**
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
 */const Gy="http://localhost";class mn extends Ea{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ge("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new mn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return jn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,jn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jn(e,t)}buildRequest(){const e={requestUri:Gy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qr(t)}return e}}/**
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
 */function Ky(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qy(n){const e=wr(Er(n)).link,t=e?wr(Er(e)).deep_link_id:null,r=wr(Er(n)).deep_link_id;return(r?wr(Er(r)).link:null)||r||t||e||n}class Ta{constructor(e){const t=wr(Er(e)),r=t.apiKey??null,s=t.oobCode??null,i=Ky(t.mode??null);q(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Qy(e);try{return new Ta(t)}catch{return null}}}/**
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
 */class Yn{constructor(){this.providerId=Yn.PROVIDER_ID}static credential(e,t){return Lr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ta.parseLink(t);return q(r,"argument-error"),Lr._fromEmailAndCode(e,r.code,r.tenantId)}}Yn.PROVIDER_ID="password";Yn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Jr extends gi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class jt extends Jr{constructor(){super("facebook.com")}static credential(e){return mn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
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
 */class rt extends Jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mn._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return rt.credential(t,r)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
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
 */class Ut extends Jr{constructor(){super("github.com")}static credential(e){return mn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
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
 */class Ft extends Jr{constructor(){super("twitter.com")}static credential(e,t){return mn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ft.credential(t,r)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
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
 */async function Xy(n,e){return Yr(n,"POST","/v1/accounts:signUp",St(n,e))}/**
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
 */class gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ke._fromIdTokenResponse(e,r,s),a=Oc(r);return new gn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Oc(r);return new gn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Oc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Qs extends _t{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Qs(e,t,r,s)}}function Hh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qs._fromErrorAndOperation(n,i,e,r):i})}async function Yy(n,e,t=!1){const r=await Or(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gn._forOperation(n,"link",r)}/**
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
 */async function Jy(n,e,t=!1){const{auth:r}=n;if(je(r.app))return Promise.reject(ot(r));const s="reauthenticate";try{const i=await Or(n,Hh(r,s,e,n),t);q(i.idToken,r,"internal-error");const a=va(i.idToken);q(a,r,"internal-error");const{sub:l}=a;return q(n.uid===l,r,"user-mismatch"),gn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ge(r,"user-mismatch"),i}}/**
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
 */async function Wh(n,e,t=!1){if(je(n.app))return Promise.reject(ot(n));const r="signIn",s=await Hh(n,r,e),i=await gn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Zy(n,e){return Wh(Ze(n),e)}/**
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
 */async function Gh(n){const e=Ze(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function e0(n,e,t){const r=Ze(n);await Ks(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",qy)}async function t0(n,e,t){if(je(n.app))return Promise.reject(ot(n));const r=Ze(n),a=await Ks(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Xy).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Gh(n),c}),l=await gn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function n0(n,e,t){return je(n.app)?Promise.reject(ot(n)):Zy(Ae(n),Yn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Gh(n),r})}function r0(n,e,t,r){return Ae(n).onIdTokenChanged(e,t,r)}function s0(n,e,t){return Ae(n).beforeAuthStateChanged(e,t)}function Kh(n,e,t,r){return Ae(n).onAuthStateChanged(e,t,r)}function i0(n){return Ae(n).signOut()}const Xs="__sak";/**
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
 */class Qh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xs,"1"),this.storage.removeItem(Xs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const o0=1e3,a0=10;class Xh extends Qh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Ty()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,a0):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},o0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xh.type="LOCAL";const l0=Xh;/**
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
 */class Yh extends Qh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yh.type="SESSION";const Jh=Yh;/**
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
 */function c0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _i{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new _i(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await c0(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_i.receivers=[];/**
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
 */function ba(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class u0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=ba("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const v=m;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function at(){return window}function h0(n){at().location.href=n}/**
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
 */function Zh(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function d0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function p0(){return Zh()?self:null}/**
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
 */const ed="firebaseLocalStorageDb",m0=1,Ys="firebaseLocalStorage",td="fbase_key";class Zr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yi(n,e){return n.transaction([Ys],e?"readwrite":"readonly").objectStore(Ys)}function g0(){const n=indexedDB.deleteDatabase(ed);return new Zr(n).toPromise()}function jo(){const n=indexedDB.open(ed,m0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ys,{keyPath:td})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ys)?e(r):(r.close(),await g0(),e(await jo()))})})}async function Lc(n,e,t){const r=yi(n,!0).put({[td]:e,value:t});return new Zr(r).toPromise()}async function _0(n,e){const t=yi(n,!1).get(e),r=await new Zr(t).toPromise();return r===void 0?null:r.value}function Mc(n,e){const t=yi(n,!0).delete(e);return new Zr(t).toPromise()}const y0=800,v0=3;class nd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>v0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_i._getInstance(p0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await d0(),!this.activeServiceWorker)return;this.sender=new u0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||f0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jo();return await Lc(e,Xs,"1"),await Mc(e,Xs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>_0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Mc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=yi(s,!1).getAll();return new Zr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),y0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nd.type="LOCAL";const w0=nd;new Xr(3e4,6e4);/**
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
 */function Ia(n,e){return e?vt(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class xa extends Ea{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function E0(n){return Wh(n.auth,new xa(n),n.bypassAuthState)}function T0(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Jy(t,new xa(n),n.bypassAuthState)}async function b0(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Yy(t,new xa(n),n.bypassAuthState)}/**
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
 */class rd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return E0;case"linkViaPopup":case"linkViaRedirect":return b0;case"reauthViaPopup":case"reauthViaRedirect":return T0;default:Ge(this.auth,"internal-error")}}resolve(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const I0=new Xr(2e3,1e4);async function x0(n,e,t){if(je(n.app))return Promise.reject(Xe(n,"operation-not-supported-in-this-environment"));const r=Ze(n);Ah(n,e,gi);const s=Ia(r,t);return new an(r,"signInViaPopup",e,s).executeNotNull()}class an extends rd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,an.currentPopupAction&&an.currentPopupAction.cancel(),an.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const e=ba();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,an.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,I0.get())};e()}}an.currentPopupAction=null;/**
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
 */const R0="pendingRedirect",Vs=new Map;class A0 extends rd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vs.get(this.auth._key());if(!e){try{const r=await S0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vs.set(this.auth._key(),e)}return this.bypassAuthState||Vs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S0(n,e){const t=id(e),r=sd(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function C0(n,e){return sd(n)._set(id(e),"true")}function P0(n,e){Vs.set(n._key(),e)}function sd(n){return vt(n._redirectPersistence)}function id(n){return Ds(R0,n.config.apiKey,n.name)}/**
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
 */function k0(n,e,t){return N0(n,e,t)}async function N0(n,e,t){if(je(n.app))return Promise.reject(ot(n));const r=Ze(n);Ah(n,e,gi),await r._initializationPromise;const s=Ia(r,t);return await C0(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function D0(n,e){return await Ze(n)._initializationPromise,od(n,e,!1)}async function od(n,e,t=!1){if(je(n.app))return Promise.reject(ot(n));const r=Ze(n),s=Ia(r,e),a=await new A0(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const V0=10*60*1e3;class O0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!L0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ad(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=V0&&this.cachedEventUids.clear(),this.cachedEventUids.has(jc(e))}saveEventToCache(e){this.cachedEventUids.add(jc(e)),this.lastProcessedEventTime=Date.now()}}function jc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ad({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function L0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ad(n);default:return!1}}/**
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
 */async function M0(n,e={}){return Ct(n,"GET","/v1/projects",e)}/**
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
 */const j0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,U0=/^https?/;async function F0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await M0(n);for(const t of e)try{if(B0(t))return}catch{}Ge(n,"unauthorized-domain")}function B0(n){const e=Lo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!U0.test(t))return!1;if(j0.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const $0=new Xr(3e4,6e4);function Uc(){const n=at().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function z0(n){return new Promise((e,t)=>{var s,i,a;function r(){Uc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uc(),t(Xe(n,"network-request-failed"))},timeout:$0.get()})}if((i=(s=at().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=at().gapi)!=null&&a.load)r();else{const l=ky("iframefcb");return at()[l]=()=>{gapi.load?r():t(Xe(n,"network-request-failed"))},$h(`${Py()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Os=null,e})}let Os=null;function q0(n){return Os=Os||z0(n),Os}/**
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
 */const H0=new Xr(5e3,15e3),W0="__/auth/iframe",G0="emulator/auth/iframe",K0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Q0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function X0(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ya(e,G0):`https://${n.config.authDomain}/${W0}`,r={apiKey:e.apiKey,appName:n.name,v:Tn},s=Q0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Qr(r).slice(1)}`}async function Y0(n){const e=await q0(n),t=at().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:X0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:K0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Xe(n,"network-request-failed"),l=at().setTimeout(()=>{i(a)},H0.get());function c(){at().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const J0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Z0=500,ev=600,tv="_blank",nv="http://localhost";class Fc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rv(n,e,t,r=Z0,s=ev){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...J0,width:r.toString(),height:s.toString(),top:i,left:a},h=Ve().toLowerCase();t&&(l=Oh(h)?tv:t),Dh(h)&&(e=e||nv,c.scrollbars="yes");const f=Object.entries(c).reduce((v,[I,P])=>`${v}${I}=${P},`,"");if(Ey(h)&&l!=="_self")return sv(e||"",l),new Fc(null);const m=window.open(e||"",l,f);q(m,n,"popup-blocked");try{m.focus()}catch{}return new Fc(m)}function sv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const iv="__/auth/handler",ov="emulator/auth/handler",av=encodeURIComponent("fac");async function Bc(n,e,t,r,s,i){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Tn,eventId:s};if(e instanceof gi){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",zg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof Jr){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${av}=${encodeURIComponent(c)}`:"";return`${lv(n)}?${Qr(l).slice(1)}${h}`}function lv({config:n}){return n.emulator?ya(n,ov):`https://${n.authDomain}/${iv}`}/**
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
 */const vo="webStorageSupport";class cv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jh,this._completeRedirectFn=od,this._overrideRedirectResult=P0}async _openPopup(e,t,r,s){var a;It((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Bc(e,t,r,Lo(),s);return rv(e,i,ba())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Bc(e,t,r,Lo(),s);return h0(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(It(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Y0(e),r=new O0(e);return t.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vo,{type:vo},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[vo];i!==void 0&&t(!!i),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=F0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fh()||Vh()||wa()}}const uv=cv;var $c="@firebase/auth",zc="1.11.0";/**
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
 */class hv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fv(n){pn(new Gt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bh(n)},h=new Ay(r,s,i,c);return My(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),pn(new Gt("auth-internal",e=>{const t=Ze(e.getProvider("auth").getImmediate());return(r=>new hv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),it($c,zc,dv(n)),it($c,zc,"esm2020")}/**
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
 */const pv=5*60,mv=gh("authIdTokenMaxAge")||pv;let qc=null;const gv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>mv)return;const s=t==null?void 0:t.token;qc!==s&&(qc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _v(n=Th()){const e=ma(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ly(n,{popupRedirectResolver:uv,persistence:[w0,l0,Jh]}),r=gh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=gv(i.toString());s0(t,a,()=>a(t.currentUser)),r0(t,l=>a(l))}}const s=ph("auth");return s&&jy(t,`http://${s}`),t}function yv(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Sy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Xe("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",yv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fv("Browser");var vv="firebase",wv="12.3.0";/**
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
 */it(vv,wv,"app");var Hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ht,ld;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function y(){}y.prototype=_.prototype,E.F=_.prototype,E.prototype=new y,E.prototype.constructor=E,E.D=function(T,b,A){for(var w=Array(arguments.length-2),me=2;me<arguments.length;me++)w[me-2]=arguments[me];return _.prototype[b].apply(T,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,y){y||(y=0);const T=Array(16);if(typeof _=="string")for(var b=0;b<16;++b)T[b]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(b=0;b<16;++b)T[b]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=E.g[0],y=E.g[1],b=E.g[2];let A=E.g[3],w;w=_+(A^y&(b^A))+T[0]+3614090360&4294967295,_=y+(w<<7&4294967295|w>>>25),w=A+(b^_&(y^b))+T[1]+3905402710&4294967295,A=_+(w<<12&4294967295|w>>>20),w=b+(y^A&(_^y))+T[2]+606105819&4294967295,b=A+(w<<17&4294967295|w>>>15),w=y+(_^b&(A^_))+T[3]+3250441966&4294967295,y=b+(w<<22&4294967295|w>>>10),w=_+(A^y&(b^A))+T[4]+4118548399&4294967295,_=y+(w<<7&4294967295|w>>>25),w=A+(b^_&(y^b))+T[5]+1200080426&4294967295,A=_+(w<<12&4294967295|w>>>20),w=b+(y^A&(_^y))+T[6]+2821735955&4294967295,b=A+(w<<17&4294967295|w>>>15),w=y+(_^b&(A^_))+T[7]+4249261313&4294967295,y=b+(w<<22&4294967295|w>>>10),w=_+(A^y&(b^A))+T[8]+1770035416&4294967295,_=y+(w<<7&4294967295|w>>>25),w=A+(b^_&(y^b))+T[9]+2336552879&4294967295,A=_+(w<<12&4294967295|w>>>20),w=b+(y^A&(_^y))+T[10]+4294925233&4294967295,b=A+(w<<17&4294967295|w>>>15),w=y+(_^b&(A^_))+T[11]+2304563134&4294967295,y=b+(w<<22&4294967295|w>>>10),w=_+(A^y&(b^A))+T[12]+1804603682&4294967295,_=y+(w<<7&4294967295|w>>>25),w=A+(b^_&(y^b))+T[13]+4254626195&4294967295,A=_+(w<<12&4294967295|w>>>20),w=b+(y^A&(_^y))+T[14]+2792965006&4294967295,b=A+(w<<17&4294967295|w>>>15),w=y+(_^b&(A^_))+T[15]+1236535329&4294967295,y=b+(w<<22&4294967295|w>>>10),w=_+(b^A&(y^b))+T[1]+4129170786&4294967295,_=y+(w<<5&4294967295|w>>>27),w=A+(y^b&(_^y))+T[6]+3225465664&4294967295,A=_+(w<<9&4294967295|w>>>23),w=b+(_^y&(A^_))+T[11]+643717713&4294967295,b=A+(w<<14&4294967295|w>>>18),w=y+(A^_&(b^A))+T[0]+3921069994&4294967295,y=b+(w<<20&4294967295|w>>>12),w=_+(b^A&(y^b))+T[5]+3593408605&4294967295,_=y+(w<<5&4294967295|w>>>27),w=A+(y^b&(_^y))+T[10]+38016083&4294967295,A=_+(w<<9&4294967295|w>>>23),w=b+(_^y&(A^_))+T[15]+3634488961&4294967295,b=A+(w<<14&4294967295|w>>>18),w=y+(A^_&(b^A))+T[4]+3889429448&4294967295,y=b+(w<<20&4294967295|w>>>12),w=_+(b^A&(y^b))+T[9]+568446438&4294967295,_=y+(w<<5&4294967295|w>>>27),w=A+(y^b&(_^y))+T[14]+3275163606&4294967295,A=_+(w<<9&4294967295|w>>>23),w=b+(_^y&(A^_))+T[3]+4107603335&4294967295,b=A+(w<<14&4294967295|w>>>18),w=y+(A^_&(b^A))+T[8]+1163531501&4294967295,y=b+(w<<20&4294967295|w>>>12),w=_+(b^A&(y^b))+T[13]+2850285829&4294967295,_=y+(w<<5&4294967295|w>>>27),w=A+(y^b&(_^y))+T[2]+4243563512&4294967295,A=_+(w<<9&4294967295|w>>>23),w=b+(_^y&(A^_))+T[7]+1735328473&4294967295,b=A+(w<<14&4294967295|w>>>18),w=y+(A^_&(b^A))+T[12]+2368359562&4294967295,y=b+(w<<20&4294967295|w>>>12),w=_+(y^b^A)+T[5]+4294588738&4294967295,_=y+(w<<4&4294967295|w>>>28),w=A+(_^y^b)+T[8]+2272392833&4294967295,A=_+(w<<11&4294967295|w>>>21),w=b+(A^_^y)+T[11]+1839030562&4294967295,b=A+(w<<16&4294967295|w>>>16),w=y+(b^A^_)+T[14]+4259657740&4294967295,y=b+(w<<23&4294967295|w>>>9),w=_+(y^b^A)+T[1]+2763975236&4294967295,_=y+(w<<4&4294967295|w>>>28),w=A+(_^y^b)+T[4]+1272893353&4294967295,A=_+(w<<11&4294967295|w>>>21),w=b+(A^_^y)+T[7]+4139469664&4294967295,b=A+(w<<16&4294967295|w>>>16),w=y+(b^A^_)+T[10]+3200236656&4294967295,y=b+(w<<23&4294967295|w>>>9),w=_+(y^b^A)+T[13]+681279174&4294967295,_=y+(w<<4&4294967295|w>>>28),w=A+(_^y^b)+T[0]+3936430074&4294967295,A=_+(w<<11&4294967295|w>>>21),w=b+(A^_^y)+T[3]+3572445317&4294967295,b=A+(w<<16&4294967295|w>>>16),w=y+(b^A^_)+T[6]+76029189&4294967295,y=b+(w<<23&4294967295|w>>>9),w=_+(y^b^A)+T[9]+3654602809&4294967295,_=y+(w<<4&4294967295|w>>>28),w=A+(_^y^b)+T[12]+3873151461&4294967295,A=_+(w<<11&4294967295|w>>>21),w=b+(A^_^y)+T[15]+530742520&4294967295,b=A+(w<<16&4294967295|w>>>16),w=y+(b^A^_)+T[2]+3299628645&4294967295,y=b+(w<<23&4294967295|w>>>9),w=_+(b^(y|~A))+T[0]+4096336452&4294967295,_=y+(w<<6&4294967295|w>>>26),w=A+(y^(_|~b))+T[7]+1126891415&4294967295,A=_+(w<<10&4294967295|w>>>22),w=b+(_^(A|~y))+T[14]+2878612391&4294967295,b=A+(w<<15&4294967295|w>>>17),w=y+(A^(b|~_))+T[5]+4237533241&4294967295,y=b+(w<<21&4294967295|w>>>11),w=_+(b^(y|~A))+T[12]+1700485571&4294967295,_=y+(w<<6&4294967295|w>>>26),w=A+(y^(_|~b))+T[3]+2399980690&4294967295,A=_+(w<<10&4294967295|w>>>22),w=b+(_^(A|~y))+T[10]+4293915773&4294967295,b=A+(w<<15&4294967295|w>>>17),w=y+(A^(b|~_))+T[1]+2240044497&4294967295,y=b+(w<<21&4294967295|w>>>11),w=_+(b^(y|~A))+T[8]+1873313359&4294967295,_=y+(w<<6&4294967295|w>>>26),w=A+(y^(_|~b))+T[15]+4264355552&4294967295,A=_+(w<<10&4294967295|w>>>22),w=b+(_^(A|~y))+T[6]+2734768916&4294967295,b=A+(w<<15&4294967295|w>>>17),w=y+(A^(b|~_))+T[13]+1309151649&4294967295,y=b+(w<<21&4294967295|w>>>11),w=_+(b^(y|~A))+T[4]+4149444226&4294967295,_=y+(w<<6&4294967295|w>>>26),w=A+(y^(_|~b))+T[11]+3174756917&4294967295,A=_+(w<<10&4294967295|w>>>22),w=b+(_^(A|~y))+T[2]+718787259&4294967295,b=A+(w<<15&4294967295|w>>>17),w=y+(A^(b|~_))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+b&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.v=function(E,_){_===void 0&&(_=E.length);const y=_-this.blockSize,T=this.C;let b=this.h,A=0;for(;A<_;){if(b==0)for(;A<=y;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<_;)if(T[b++]=E.charCodeAt(A++),b==this.blockSize){s(this,T),b=0;break}}else for(;A<_;)if(T[b++]=E[A++],b==this.blockSize){s(this,T),b=0;break}}this.h=b,this.o+=_},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var y=E.length-8;y<E.length;++y)E[y]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,y=0;y<4;++y)for(let T=0;T<32;T+=8)E[_++]=this.g[y]>>>T&255;return E};function i(E,_){var y=l;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=_(E)}function a(E,_){this.h=_;const y=[];let T=!0;for(let b=E.length-1;b>=0;b--){const A=E[b]|0;T&&A==_||(y[b]=A,T=!1)}this.g=y}var l={};function c(E){return-128<=E&&E<128?i(E,function(_){return new a([_|0],_<0?-1:0)}):new a([E|0],E<0?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return R(h(-E));const _=[];let y=1;for(let T=0;E>=y;T++)_[T]=E/y|0,y*=4294967296;return new a(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return R(f(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=h(Math.pow(_,8));let T=m;for(let A=0;A<E.length;A+=8){var b=Math.min(8,E.length-A);const w=parseInt(E.substring(A,A+b),_);b<8?(b=h(Math.pow(_,b)),T=T.j(b).add(h(w))):(T=T.j(y),T=T.add(h(w)))}return T}var m=c(0),v=c(1),I=c(16777216);n=a.prototype,n.m=function(){if(N(this))return-R(this).m();let E=0,_=1;for(let y=0;y<this.g.length;y++){const T=this.i(y);E+=(T>=0?T:4294967296+T)*_,_*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(N(this))return"-"+R(this).toString(E);const _=h(Math.pow(E,6));var y=this;let T="";for(;;){const b=M(y,_).g;y=V(y,b.j(_));let A=((y.g.length>0?y.g[0]:y.h)>>>0).toString(E);if(y=b,P(y))return A+T;for(;A.length<6;)A="0"+A;T=A+T}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function N(E){return E.h==-1}n.l=function(E){return E=V(this,E),N(E)?-1:P(E)?0:1};function R(E){const _=E.g.length,y=[];for(let T=0;T<_;T++)y[T]=~E.g[T];return new a(y,~E.h).add(v)}n.abs=function(){return N(this)?R(this):this},n.add=function(E){const _=Math.max(this.g.length,E.g.length),y=[];let T=0;for(let b=0;b<=_;b++){let A=T+(this.i(b)&65535)+(E.i(b)&65535),w=(A>>>16)+(this.i(b)>>>16)+(E.i(b)>>>16);T=w>>>16,A&=65535,w&=65535,y[b]=w<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function V(E,_){return E.add(R(_))}n.j=function(E){if(P(this)||P(E))return m;if(N(this))return N(E)?R(this).j(R(E)):R(R(this).j(E));if(N(E))return R(this.j(R(E)));if(this.l(I)<0&&E.l(I)<0)return h(this.m()*E.m());const _=this.g.length+E.g.length,y=[];for(var T=0;T<2*_;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(let b=0;b<E.g.length;b++){const A=this.i(T)>>>16,w=this.i(T)&65535,me=E.i(b)>>>16,Fe=E.i(b)&65535;y[2*T+2*b]+=w*Fe,k(y,2*T+2*b),y[2*T+2*b+1]+=A*Fe,k(y,2*T+2*b+1),y[2*T+2*b+1]+=w*me,k(y,2*T+2*b+1),y[2*T+2*b+2]+=A*me,k(y,2*T+2*b+2)}for(E=0;E<_;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=_;E<2*_;E++)y[E]=0;return new a(y,0)};function k(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function C(E,_){this.g=E,this.h=_}function M(E,_){if(P(_))throw Error("division by zero");if(P(E))return new C(m,m);if(N(E))return _=M(R(E),_),new C(R(_.g),R(_.h));if(N(_))return _=M(E,R(_)),new C(R(_.g),_.h);if(E.g.length>30){if(N(E)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var y=v,T=_;T.l(E)<=0;)y=$(y),T=$(T);var b=W(y,1),A=W(T,1);for(T=W(T,2),y=W(y,2);!P(T);){var w=A.add(T);w.l(E)<=0&&(b=b.add(y),A=w),T=W(T,1),y=W(y,1)}return _=V(E,b.j(_)),new C(b,_)}for(b=m;E.l(_)>=0;){for(y=Math.max(1,Math.floor(E.m()/_.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),A=h(y),w=A.j(_);N(w)||w.l(E)>0;)y-=T,A=h(y),w=A.j(_);P(A)&&(A=v),b=b.add(A),E=V(E,w)}return new C(b,E)}n.B=function(E){return M(this,E).h},n.and=function(E){const _=Math.max(this.g.length,E.g.length),y=[];for(let T=0;T<_;T++)y[T]=this.i(T)&E.i(T);return new a(y,this.h&E.h)},n.or=function(E){const _=Math.max(this.g.length,E.g.length),y=[];for(let T=0;T<_;T++)y[T]=this.i(T)|E.i(T);return new a(y,this.h|E.h)},n.xor=function(E){const _=Math.max(this.g.length,E.g.length),y=[];for(let T=0;T<_;T++)y[T]=this.i(T)^E.i(T);return new a(y,this.h^E.h)};function $(E){const _=E.g.length+1,y=[];for(let T=0;T<_;T++)y[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(y,E.h)}function W(E,_){const y=_>>5;_%=32;const T=E.g.length-y,b=[];for(let A=0;A<T;A++)b[A]=_>0?E.i(A+y)>>>_|E.i(A+y+1)<<32-_:E.i(A+y);return new a(b,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,ld=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Ht=a}).apply(typeof Hc<"u"?Hc:typeof self<"u"?self:typeof window<"u"?window:{});var bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cd,Tr,ud,Ls,Uo,hd,dd,fd;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof bs=="object"&&bs];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var S=o[g];if(!(S in d))break e;d=d[S]}o=o[o.length-1],g=d[o],u=u(g),u!=g&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var d=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&d.push([g,u[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function c(o,u,d){return o.call.apply(o.bind,arguments)}function h(o,u,d){return h=c,h.apply(null,arguments)}function f(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function m(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(g,S,D){for(var j=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)j[Q-2]=arguments[Q];return u.prototype[S].apply(g,j)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function I(o){const u=o.length;if(u>0){const d=Array(u);for(let g=0;g<u;g++)d[g]=o[g];return d}return[]}function P(o,u){for(let g=1;g<arguments.length;g++){const S=arguments[g];var d=typeof S;if(d=d!="object"?d:S?Array.isArray(S)?"array":d:"null",d=="array"||d=="object"&&typeof S.length=="number"){d=o.length||0;const D=S.length||0;o.length=d+D;for(let j=0;j<D;j++)o[d+j]=S[j]}else o.push(S)}}class N{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function R(o){a.setTimeout(()=>{throw o},0)}function V(){var o=E;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class k{constructor(){this.h=this.g=null}add(u,d){const g=C.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var C=new N(()=>new M,o=>o.reset());class M{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let $,W=!1,E=new k,_=()=>{const o=Promise.resolve(void 0);$=()=>{o.then(y)}};function y(){for(var o;o=V();){try{o.h.call(o.g)}catch(d){R(d)}var u=C;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}W=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,u),a.removeEventListener("test",d,u)}catch{}return o}();function w(o){return/^[\s\xa0]*$/.test(o)}function me(o,u){b.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}m(me,b),me.prototype.init=function(o,u){const d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&me.Z.h.call(this)},me.prototype.h=function(){me.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Fe="closure_listenable_"+(Math.random()*1e6|0),B=0;function ue(o,u,d,g,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=S,this.key=++B,this.da=this.fa=!1}function re(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ce(o,u,d){for(const g in o)u.call(d,o[g],g,o)}function Mi(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function al(o){const u={};for(const d in o)u[d]=o[d];return u}const ll="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cl(o,u){let d,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(d in g)o[d]=g[d];for(let D=0;D<ll.length;D++)d=ll[D],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function ls(o){this.src=o,this.g={},this.h=0}ls.prototype.add=function(o,u,d,g,S){const D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);const j=Ui(o,u,g,S);return j>-1?(u=o[j],d||(u.fa=!1)):(u=new ue(u,this.src,D,!!g,S),u.fa=d,o.push(u)),u};function ji(o,u){const d=u.type;if(d in o.g){var g=o.g[d],S=Array.prototype.indexOf.call(g,u,void 0),D;(D=S>=0)&&Array.prototype.splice.call(g,S,1),D&&(re(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ui(o,u,d,g){for(let S=0;S<o.length;++S){const D=o[S];if(!D.da&&D.listener==u&&D.capture==!!d&&D.ha==g)return S}return-1}var Fi="closure_lm_"+(Math.random()*1e6|0),Bi={};function ul(o,u,d,g,S){if(Array.isArray(u)){for(let D=0;D<u.length;D++)ul(o,u[D],d,g,S);return null}return d=fl(d),o&&o[Fe]?o.J(u,d,l(g)?!!g.capture:!1,S):ap(o,u,d,!1,g,S)}function ap(o,u,d,g,S,D){if(!u)throw Error("Invalid event type");const j=l(S)?!!S.capture:!!S;let Q=zi(o);if(Q||(o[Fi]=Q=new ls(o)),d=Q.add(u,d,g,j,D),d.proxy)return d;if(g=lp(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)A||(S=j),S===void 0&&(S=!1),o.addEventListener(u.toString(),g,S);else if(o.attachEvent)o.attachEvent(dl(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function lp(){function o(d){return u.call(o.src,o.listener,d)}const u=cp;return o}function hl(o,u,d,g,S){if(Array.isArray(u))for(var D=0;D<u.length;D++)hl(o,u[D],d,g,S);else g=l(g)?!!g.capture:!!g,d=fl(d),o&&o[Fe]?(o=o.i,D=String(u).toString(),D in o.g&&(u=o.g[D],d=Ui(u,d,g,S),d>-1&&(re(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[D],o.h--)))):o&&(o=zi(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Ui(u,d,g,S)),(d=o>-1?u[o]:null)&&$i(d))}function $i(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Fe])ji(u.i,o);else{var d=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(d,g,o.capture):u.detachEvent?u.detachEvent(dl(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=zi(u))?(ji(d,o),d.h==0&&(d.src=null,u[Fi]=null)):re(o)}}}function dl(o){return o in Bi?Bi[o]:Bi[o]="on"+o}function cp(o,u){if(o.da)o=!0;else{u=new me(u,this);const d=o.listener,g=o.ha||o.src;o.fa&&$i(o),o=d.call(g,u)}return o}function zi(o){return o=o[Fi],o instanceof ls?o:null}var qi="__closure_events_fn_"+(Math.random()*1e9>>>0);function fl(o){return typeof o=="function"?o:(o[qi]||(o[qi]=function(u){return o.handleEvent(u)}),o[qi])}function Pe(){T.call(this),this.i=new ls(this),this.M=this,this.G=null}m(Pe,T),Pe.prototype[Fe]=!0,Pe.prototype.removeEventListener=function(o,u,d,g){hl(this,o,u,d,g)};function Oe(o,u){var d,g=o.G;if(g)for(d=[];g;g=g.G)d.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new b(u,o);else if(u instanceof b)u.target=u.target||o;else{var S=u;u=new b(g,o),cl(u,S)}S=!0;let D,j;if(d)for(j=d.length-1;j>=0;j--)D=u.g=d[j],S=cs(D,g,!0,u)&&S;if(D=u.g=o,S=cs(D,g,!0,u)&&S,S=cs(D,g,!1,u)&&S,d)for(j=0;j<d.length;j++)D=u.g=d[j],S=cs(D,g,!1,u)&&S}Pe.prototype.N=function(){if(Pe.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let g=0;g<d.length;g++)re(d[g]);delete o.g[u],o.h--}}this.G=null},Pe.prototype.J=function(o,u,d,g){return this.i.add(String(o),u,!1,d,g)},Pe.prototype.K=function(o,u,d,g){return this.i.add(String(o),u,!0,d,g)};function cs(o,u,d,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let S=!0;for(let D=0;D<u.length;++D){const j=u[D];if(j&&!j.da&&j.capture==d){const Q=j.listener,ve=j.ha||j.src;j.fa&&ji(o.i,j),S=Q.call(ve,g)!==!1&&S}}return S&&!g.defaultPrevented}function up(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function pl(o){o.g=up(()=>{o.g=null,o.i&&(o.i=!1,pl(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class hp extends T{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:pl(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nr(o){T.call(this),this.h=o,this.g={}}m(nr,T);var ml=[];function gl(o){Ce(o.g,function(u,d){this.g.hasOwnProperty(d)&&$i(u)},o),o.g={}}nr.prototype.N=function(){nr.Z.N.call(this),gl(this)},nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hi=a.JSON.stringify,dp=a.JSON.parse,fp=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function _l(){}function yl(){}var rr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Wi(){b.call(this,"d")}m(Wi,b);function Gi(){b.call(this,"c")}m(Gi,b);var en={},vl=null;function us(){return vl=vl||new Pe}en.Ia="serverreachability";function wl(o){b.call(this,en.Ia,o)}m(wl,b);function sr(o){const u=us();Oe(u,new wl(u))}en.STAT_EVENT="statevent";function El(o,u){b.call(this,en.STAT_EVENT,o),this.stat=u}m(El,b);function Le(o){const u=us();Oe(u,new El(u,o))}en.Ja="timingevent";function Tl(o,u){b.call(this,en.Ja,o),this.size=u}m(Tl,b);function ir(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function or(){this.g=!0}or.prototype.ua=function(){this.g=!1};function pp(o,u,d,g,S,D){o.info(function(){if(o.g)if(D){var j="",Q=D.split("&");for(let ne=0;ne<Q.length;ne++){var ve=Q[ne].split("=");if(ve.length>1){const Te=ve[0];ve=ve[1];const tt=Te.split("_");j=tt.length>=2&&tt[1]=="type"?j+(Te+"="+ve+"&"):j+(Te+"=redacted&")}}}else j=null;else j=D;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+d+`
`+j})}function mp(o,u,d,g,S,D,j){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+d+`
`+D+" "+j})}function An(o,u,d,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+_p(o,d)+(g?" "+g:"")})}function gp(o,u){o.info(function(){return"TIMEOUT: "+u})}or.prototype.info=function(){};function _p(o,u){if(!o.g)return u;if(!u)return null;try{const D=JSON.parse(u);if(D){for(o=0;o<D.length;o++)if(Array.isArray(D[o])){var d=D[o];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var S=g[0];if(S!="noop"&&S!="stop"&&S!="close")for(let j=1;j<g.length;j++)g[j]=""}}}}return Hi(D)}catch{return u}}var hs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},bl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Il;function Ki(){}m(Ki,_l),Ki.prototype.g=function(){return new XMLHttpRequest},Il=new Ki;function ar(o){return encodeURIComponent(String(o))}function yp(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function Pt(o,u,d,g){this.j=o,this.i=u,this.l=d,this.S=g||1,this.V=new nr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new xl}function xl(){this.i=null,this.g="",this.h=!1}var Rl={},Qi={};function Xi(o,u,d){o.M=1,o.A=fs(et(u)),o.u=d,o.R=!0,Al(o,null)}function Al(o,u){o.F=Date.now(),ds(o),o.B=et(o.A);var d=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),Fl(d.i,"t",g),o.C=0,d=o.j.L,o.h=new xl,o.g=sc(o.j,d?u:null,!o.u),o.P>0&&(o.O=new hp(h(o.Y,o,o.g),o.P)),u=o.V,d=o.g,g=o.ba;var S="readystatechange";Array.isArray(S)||(S&&(ml[0]=S.toString()),S=ml);for(let D=0;D<S.length;D++){const j=ul(d,S[D],g||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.J?al(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),sr(),pp(o.i,o.v,o.B,o.l,o.S,o.u)}Pt.prototype.ba=function(o){o=o.target;const u=this.O;u&&Dt(o)==3?u.j():this.Y(o)},Pt.prototype.Y=function(o){try{if(o==this.g)e:{const Q=Dt(this.g),ve=this.g.ya(),ne=this.g.ca();if(!(Q<3)&&(Q!=3||this.g&&(this.h.h||this.g.la()||Gl(this.g)))){this.K||Q!=4||ve==7||(ve==8||ne<=0?sr(3):sr(2)),Yi(this);var u=this.g.ca();this.X=u;var d=vp(this);if(this.o=u==200,mp(this.i,this.v,this.B,this.l,this.S,Q,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,S=this.g;if((g=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(g)){var D=g;break t}}D=null}if(o=D)An(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ji(this,o);else{this.o=!1,this.m=3,Le(12),tn(this),lr(this);break e}}if(this.R){o=!0;let Te;for(;!this.K&&this.C<d.length;)if(Te=wp(this,d),Te==Qi){Q==4&&(this.m=4,Le(14),o=!1),An(this.i,this.l,null,"[Incomplete Response]");break}else if(Te==Rl){this.m=4,Le(15),An(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else An(this.i,this.l,Te,null),Ji(this,Te);if(Sl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||d.length!=0||this.h.h||(this.m=1,Le(16),o=!1),this.o=this.o&&o,!o)An(this.i,this.l,d,"[Invalid Chunked Response]"),tn(this),lr(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),oo(j),j.P=!0,Le(11))}}else An(this.i,this.l,d,null),Ji(this,d);Q==4&&tn(this),this.o&&!this.K&&(Q==4?ec(this.j,this):(this.o=!1,ds(this)))}else Vp(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,Le(12)):(this.m=0,Le(13)),tn(this),lr(this)}}}catch{}finally{}};function vp(o){if(!Sl(o))return o.g.la();const u=Gl(o.g);if(u==="")return"";let d="";const g=u.length,S=Dt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return tn(o),lr(o),"";o.h.i=new a.TextDecoder}for(let D=0;D<g;D++)o.h.h=!0,d+=o.h.i.decode(u[D],{stream:!(S&&D==g-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function Sl(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function wp(o,u){var d=o.C,g=u.indexOf(`
`,d);return g==-1?Qi:(d=Number(u.substring(d,g)),isNaN(d)?Rl:(g+=1,g+d>u.length?Qi:(u=u.slice(g,g+d),o.C=g+d,u)))}Pt.prototype.cancel=function(){this.K=!0,tn(this)};function ds(o){o.T=Date.now()+o.H,Cl(o,o.H)}function Cl(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ir(h(o.aa,o),u)}function Yi(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Pt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(gp(this.i,this.B),this.M!=2&&(sr(),Le(17)),tn(this),this.m=2,lr(this)):Cl(this,this.T-o)};function lr(o){o.j.I==0||o.K||ec(o.j,o)}function tn(o){Yi(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,gl(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Ji(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||Zi(d.h,o))){if(!o.L&&Zi(d.h,o)&&d.I==3){try{var g=d.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)ys(d),gs(d);else break e;io(d),Le(18)}}else d.xa=S[1],0<d.xa-d.K&&S[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ir(h(d.Va,d),6e3));Nl(d.h)<=1&&d.ta&&(d.ta=void 0)}else rn(d,11)}else if((o.L||d.g==o)&&ys(d),!w(u))for(S=d.Ba.g.parse(u),u=0;u<S.length;u++){let ne=S[u];const Te=ne[0];if(!(Te<=d.K))if(d.K=Te,ne=ne[1],d.I==2)if(ne[0]=="c"){d.M=ne[1],d.ba=ne[2];const tt=ne[3];tt!=null&&(d.ka=tt,d.j.info("VER="+d.ka));const sn=ne[4];sn!=null&&(d.za=sn,d.j.info("SVER="+d.za));const Vt=ne[5];Vt!=null&&typeof Vt=="number"&&Vt>0&&(g=1.5*Vt,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ot=o.g;if(Ot){const ws=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ws){var D=g.h;D.g||ws.indexOf("spdy")==-1&&ws.indexOf("quic")==-1&&ws.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(eo(D,D.h),D.h=null))}if(g.G){const ao=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;ao&&(g.wa=ao,ie(g.J,g.G,ao))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var j=o;if(g.na=rc(g,g.L?g.ba:null,g.W),j.L){Dl(g.h,j);var Q=j,ve=g.O;ve&&(Q.H=ve),Q.D&&(Yi(Q),ds(Q)),g.g=j}else Jl(g);d.i.length>0&&_s(d)}else ne[0]!="stop"&&ne[0]!="close"||rn(d,7);else d.I==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?rn(d,7):so(d):ne[0]!="noop"&&d.l&&d.l.qa(ne),d.A=0)}}sr(4)}catch{}}var Ep=class{constructor(o,u){this.g=o,this.map=u}};function Pl(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function kl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Nl(o){return o.h?1:o.g?o.g.size:0}function Zi(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function eo(o,u){o.g?o.g.add(u):o.h=u}function Dl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Pl.prototype.cancel=function(){if(this.i=Vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Vl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return I(o.i)}var Ol=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tp(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const g=o[d].indexOf("=");let S,D=null;g>=0?(S=o[d].substring(0,g),D=o[d].substring(g+1)):S=o[d],u(S,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function kt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof kt?(this.l=o.l,cr(this,o.j),this.o=o.o,this.g=o.g,ur(this,o.u),this.h=o.h,to(this,Bl(o.i)),this.m=o.m):o&&(u=String(o).match(Ol))?(this.l=!1,cr(this,u[1]||"",!0),this.o=hr(u[2]||""),this.g=hr(u[3]||"",!0),ur(this,u[4]),this.h=hr(u[5]||"",!0),to(this,u[6]||"",!0),this.m=hr(u[7]||"")):(this.l=!1,this.i=new fr(null,this.l))}kt.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(dr(u,Ll,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(dr(u,Ll,!0),"@"),o.push(ar(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(dr(d,d.charAt(0)=="/"?xp:Ip,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",dr(d,Ap)),o.join("")},kt.prototype.resolve=function(o){const u=et(this);let d=!!o.j;d?cr(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var g=o.h;if(d)ur(u,o.u);else if(d=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var S=u.h.lastIndexOf("/");S!=-1&&(g=u.h.slice(0,S+1)+g)}if(S=g,S==".."||S==".")g="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){g=S.lastIndexOf("/",0)==0,S=S.split("/");const D=[];for(let j=0;j<S.length;){const Q=S[j++];Q=="."?g&&j==S.length&&D.push(""):Q==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),g&&j==S.length&&D.push("")):(D.push(Q),g=!0)}g=D.join("/")}else g=S}return d?u.h=g:d=o.i.toString()!=="",d?to(u,Bl(o.i)):d=!!o.m,d&&(u.m=o.m),u};function et(o){return new kt(o)}function cr(o,u,d){o.j=d?hr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ur(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function to(o,u,d){u instanceof fr?(o.i=u,Sp(o.i,o.l)):(d||(u=dr(u,Rp)),o.i=new fr(u,o.l))}function ie(o,u,d){o.i.set(u,d)}function fs(o){return ie(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function hr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function dr(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,bp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function bp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ll=/[#\/\?@]/g,Ip=/[#\?:]/g,xp=/[#\?]/g,Rp=/[#\?@]/g,Ap=/#/g;function fr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function nn(o){o.g||(o.g=new Map,o.h=0,o.i&&Tp(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=fr.prototype,n.add=function(o,u){nn(this),this.i=null,o=Sn(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Ml(o,u){nn(o),u=Sn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function jl(o,u){return nn(o),u=Sn(o,u),o.g.has(u)}n.forEach=function(o,u){nn(this),this.g.forEach(function(d,g){d.forEach(function(S){o.call(u,S,g,this)},this)},this)};function Ul(o,u){nn(o);let d=[];if(typeof u=="string")jl(o,u)&&(d=d.concat(o.g.get(Sn(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}n.set=function(o,u){return nn(this),this.i=null,o=Sn(this,o),jl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Ul(this,o),o.length>0?String(o[0]):u):u};function Fl(o,u,d){Ml(o,u),d.length>0&&(o.i=null,o.g.set(Sn(o,u),I(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var d=u[g];const S=ar(d);d=Ul(this,d);for(let D=0;D<d.length;D++){let j=S;d[D]!==""&&(j+="="+ar(d[D])),o.push(j)}}return this.i=o.join("&")};function Bl(o){const u=new fr;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Sn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Sp(o,u){u&&!o.j&&(nn(o),o.i=null,o.g.forEach(function(d,g){const S=g.toLowerCase();g!=S&&(Ml(this,g),Fl(this,S,d))},o)),o.j=u}function Cp(o,u){const d=new or;if(a.Image){const g=new Image;g.onload=f(Nt,d,"TestLoadImage: loaded",!0,u,g),g.onerror=f(Nt,d,"TestLoadImage: error",!1,u,g),g.onabort=f(Nt,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=f(Nt,d,"TestLoadImage: timeout",!1,u,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Pp(o,u){const d=new or,g=new AbortController,S=setTimeout(()=>{g.abort(),Nt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(D=>{clearTimeout(S),D.ok?Nt(d,"TestPingServer: ok",!0,u):Nt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Nt(d,"TestPingServer: error",!1,u)})}function Nt(o,u,d,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(d)}catch{}}function kp(){this.g=new fp}function no(o){this.i=o.Sb||null,this.h=o.ab||!1}m(no,_l),no.prototype.g=function(){return new ps(this.i,this.h)};function ps(o,u){Pe.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ps,Pe),n=ps.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,mr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,pr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,mr(this)),this.g&&(this.readyState=3,mr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;$l(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function $l(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?pr(this):mr(this),this.readyState==3&&$l(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,pr(this))},n.Na=function(o){this.g&&(this.response=o,pr(this))},n.ga=function(){this.g&&pr(this)};function pr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,mr(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function mr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function zl(o){let u="";return Ce(o,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function ro(o,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=zl(d),typeof o=="string"?d!=null&&ar(d):ie(o,u,d))}function he(o){Pe.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(he,Pe);var Np=/^https?$/i,Dp=["POST","PUT"];n=he.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Il.g(),this.g.onreadystatechange=v(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(D){ql(this,D);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)d.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),S=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Dp,u,void 0)>=0)||g||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,j]of d)this.g.setRequestHeader(D,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(D){ql(this,D)}};function ql(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Hl(o),ms(o)}function Hl(o){o.A||(o.A=!0,Oe(o,"complete"),Oe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Oe(this,"complete"),Oe(this,"abort"),ms(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ms(this,!0)),he.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Wl(this):this.Xa())},n.Xa=function(){Wl(this)};function Wl(o){if(o.h&&typeof i<"u"){if(o.v&&Dt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Oe(o,"readystatechange"),Dt(o)==4){o.h=!1;try{const D=o.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=D===0){let j=String(o.D).match(Ol)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),g=!Np.test(j?j.toLowerCase():"")}d=g}if(d)Oe(o,"complete"),Oe(o,"success");else{o.o=6;try{var S=Dt(o)>2?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.ca()+"]",Hl(o)}}finally{ms(o)}}}}function ms(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||Oe(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Dt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Dt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),dp(u)}};function Gl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Vp(o){const u={};o=(o.g&&Dt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(w(o[g]))continue;var d=yp(o[g]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=u[S]||[];u[S]=D,D.push(d)}Mi(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function gr(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Kl(o){this.za=0,this.i=[],this.j=new or,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gr("baseRetryDelayMs",5e3,o),this.Za=gr("retryDelaySeedMs",1e4,o),this.Ta=gr("forwardChannelMaxRetries",2,o),this.va=gr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Pl(o&&o.concurrentRequestLimit),this.Ba=new kp,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Kl.prototype,n.ka=8,n.I=1,n.connect=function(o,u,d,g){Le(0),this.W=o,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=rc(this,null,this.W),_s(this)};function so(o){if(Ql(o),o.I==3){var u=o.V++,d=et(o.J);if(ie(d,"SID",o.M),ie(d,"RID",u),ie(d,"TYPE","terminate"),_r(o,d),u=new Pt(o,o.j,u),u.M=2,u.A=fs(et(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=u.A,d=!0),d||(u.g=sc(u.j,null),u.g.ea(u.A)),u.F=Date.now(),ds(u)}nc(o)}function gs(o){o.g&&(oo(o),o.g.cancel(),o.g=null)}function Ql(o){gs(o),o.v&&(a.clearTimeout(o.v),o.v=null),ys(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function _s(o){if(!kl(o.h)&&!o.m){o.m=!0;var u=o.Ea;$||_(),W||($(),W=!0),E.add(u,o),o.D=0}}function Op(o,u){return Nl(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ir(h(o.Ea,o,u),tc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const S=new Pt(this,this.j,o);let D=this.o;if(this.U&&(D?(D=al(D),cl(D,this.U)):D=this.U),this.u!==null||this.R||(S.J=D,D=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Yl(this,S,u),d=et(this.J),ie(d,"RID",o),ie(d,"CVER",22),this.G&&ie(d,"X-HTTP-Session-Id",this.G),_r(this,d),D&&(this.R?u="headers="+ar(zl(D))+"&"+u:this.u&&ro(d,this.u,D)),eo(this.h,S),this.Ra&&ie(d,"TYPE","init"),this.S?(ie(d,"$req",u),ie(d,"SID","null"),S.U=!0,Xi(S,d,null)):Xi(S,d,u),this.I=2}}else this.I==3&&(o?Xl(this,o):this.i.length==0||kl(this.h)||Xl(this))};function Xl(o,u){var d;u?d=u.l:d=o.V++;const g=et(o.J);ie(g,"SID",o.M),ie(g,"RID",d),ie(g,"AID",o.K),_r(o,g),o.u&&o.o&&ro(g,o.u,o.o),d=new Pt(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Yl(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),eo(o.h,d),Xi(d,g,u)}function _r(o,u){o.H&&Ce(o.H,function(d,g){ie(u,g,d)}),o.l&&Ce({},function(d,g){ie(u,g,d)})}function Yl(o,u,d){d=Math.min(o.i.length,d);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var S=o.i;let Q=-1;for(;;){const ve=["count="+d];Q==-1?d>0?(Q=S[0].g,ve.push("ofs="+Q)):Q=0:ve.push("ofs="+Q);let ne=!0;for(let Te=0;Te<d;Te++){var D=S[Te].g;const tt=S[Te].map;if(D-=Q,D<0)Q=Math.max(0,S[Te].g-100),ne=!1;else try{D="req"+D+"_"||"";try{var j=tt instanceof Map?tt:Object.entries(tt);for(const[sn,Vt]of j){let Ot=Vt;l(Vt)&&(Ot=Hi(Vt)),ve.push(D+sn+"="+encodeURIComponent(Ot))}}catch(sn){throw ve.push(D+"type="+encodeURIComponent("_badmap")),sn}}catch{g&&g(tt)}}if(ne){j=ve.join("&");break e}}j=void 0}return o=o.i.splice(0,d),u.G=o,j}function Jl(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;$||_(),W||($(),W=!0),E.add(u,o),o.A=0}}function io(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ir(h(o.Da,o),tc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Zl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ir(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Le(10),gs(this),Zl(this))};function oo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Zl(o){o.g=new Pt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=et(o.na);ie(u,"RID","rpc"),ie(u,"SID",o.M),ie(u,"AID",o.K),ie(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&ie(u,"TO",o.ia),ie(u,"TYPE","xmlhttp"),_r(o,u),o.u&&o.o&&ro(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=fs(et(u)),d.u=null,d.R=!0,Al(d,o)}n.Va=function(){this.C!=null&&(this.C=null,gs(this),io(this),Le(19))};function ys(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function ec(o,u){var d=null;if(o.g==u){ys(o),oo(o),o.g=null;var g=2}else if(Zi(o.h,u))d=u.G,Dl(o.h,u),g=1;else return;if(o.I!=0){if(u.o)if(g==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var S=o.D;g=us(),Oe(g,new Tl(g,d)),_s(o)}else Jl(o);else if(S=u.m,S==3||S==0&&u.X>0||!(g==1&&Op(o,u)||g==2&&io(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),S){case 1:rn(o,5);break;case 4:rn(o,10);break;case 3:rn(o,6);break;default:rn(o,2)}}}function tc(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function rn(o,u){if(o.j.info("Error code "+u),u==2){var d=h(o.bb,o),g=o.Ua;const S=!g;g=new kt(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||cr(g,"https"),fs(g),S?Cp(g.toString(),d):Pp(g.toString(),d)}else Le(2);o.I=0,o.l&&o.l.pa(u),nc(o),Ql(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function nc(o){if(o.I=0,o.ja=[],o.l){const u=Vl(o.h);(u.length!=0||o.i.length!=0)&&(P(o.ja,u),P(o.ja,o.i),o.h.i.length=0,I(o.i),o.i.length=0),o.l.oa()}}function rc(o,u,d){var g=d instanceof kt?et(d):new kt(d);if(g.g!="")u&&(g.g=u+"."+g.g),ur(g,g.u);else{var S=a.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;const D=new kt(null);g&&cr(D,g),u&&(D.g=u),S&&ur(D,S),d&&(D.h=d),g=D}return d=o.G,u=o.wa,d&&u&&ie(g,d,u),ie(g,"VER",o.ka),_r(o,g),g}function sc(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new he(new no({ab:d})):new he(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ic(){}n=ic.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function vs(){}vs.prototype.g=function(o,u){return new $e(o,u)};function $e(o,u){Pe.call(this),this.g=new Kl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!w(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!w(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Cn(this)}m($e,Pe),$e.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){so(this.g)},$e.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Hi(o),o=d);u.i.push(new Ep(u.Ya++,o)),u.I==3&&_s(u)},$e.prototype.N=function(){this.g.l=null,delete this.j,so(this.g),delete this.g,$e.Z.N.call(this)};function oc(o){Wi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}m(oc,Wi);function ac(){Gi.call(this),this.status=1}m(ac,Gi);function Cn(o){this.g=o}m(Cn,ic),Cn.prototype.ra=function(){Oe(this.g,"a")},Cn.prototype.qa=function(o){Oe(this.g,new oc(o))},Cn.prototype.pa=function(o){Oe(this.g,new ac)},Cn.prototype.oa=function(){Oe(this.g,"b")},vs.prototype.createWebChannel=vs.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,fd=function(){return new vs},dd=function(){return us()},hd=en,Uo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,Ls=hs,bl.COMPLETE="complete",ud=bl,yl.EventType=rr,rr.OPEN="a",rr.CLOSE="b",rr.ERROR="c",rr.MESSAGE="d",Pe.prototype.listen=Pe.prototype.J,Tr=yl,he.prototype.listenOnce=he.prototype.K,he.prototype.getLastError=he.prototype.Ha,he.prototype.getLastErrorCode=he.prototype.ya,he.prototype.getStatus=he.prototype.ca,he.prototype.getResponseJson=he.prototype.La,he.prototype.getResponseText=he.prototype.la,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Fa,cd=he}).apply(typeof bs<"u"?bs:typeof self<"u"?self:typeof window<"u"?window:{});const Wc="@firebase/firestore",Gc="4.9.2";/**
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
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
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
 */let Jn="12.3.0";/**
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
 */const _n=new fa("@firebase/firestore");function Nn(){return _n.logLevel}function U(n,...e){if(_n.logLevel<=X.DEBUG){const t=e.map(Ra);_n.debug(`Firestore (${Jn}): ${n}`,...t)}}function xt(n,...e){if(_n.logLevel<=X.ERROR){const t=e.map(Ra);_n.error(`Firestore (${Jn}): ${n}`,...t)}}function $n(n,...e){if(_n.logLevel<=X.WARN){const t=e.map(Ra);_n.warn(`Firestore (${Jn}): ${n}`,...t)}}function Ra(n){if(typeof n=="string")return n;try{/**
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
 */function H(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,pd(n,r,t)}function pd(n,e,t){let r=`FIRESTORE (${Jn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw xt(r),new Error(r)}function ee(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||pd(e,s,r)}function K(n,e){return n}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends _t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class un{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class md{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ev{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ne.UNAUTHENTICATED))}shutdown(){}}class Tv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class bv{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ee(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new un,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new un)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string",31837,{l:r}),new md(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string",2055,{h:e}),new Ne(e)}}class Iv{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class xv{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Iv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,je(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ee(this.o===void 0,3512);const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Kc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ee(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Kc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Av(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Aa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Av(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function Fo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return wo(s)===wo(i)?Y(s,i):wo(s)?1:-1}return Y(n.length,e.length)}const Sv=55296,Cv=57343;function wo(n){const e=n.charCodeAt(0);return e>=Sv&&e<=Cv}function zn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Qc="__name__";class nt{constructor(e,t,r){t===void 0?t=0:t>e.length&&H(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&H(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return nt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=nt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Y(e.length,t.length)}static compareSegments(e,t){const r=nt.isNumericId(e),s=nt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?nt.extractNumericId(e).compare(nt.extractNumericId(t)):Fo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ht.fromString(e.substring(4,e.length-2))}}class le extends nt{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new le(t)}static emptyPath(){return new le([])}}const Pv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends nt{construct(e,t,r){return new Re(e,t,r)}static isValidIdentifier(e){return Pv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qc}static keyField(){return new Re([Qc])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new F(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new F(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(t)}static emptyPath(){return new Re([])}}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(le.fromString(e))}static fromName(e){return new z(le.fromString(e).popFirst(5))}static empty(){return new z(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new le(e.slice()))}}/**
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
 */function kv(n,e,t){if(!t)throw new F(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Nv(n,e,t,r){if(e===!0&&r===!0)throw new F(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Xc(n){if(!z.isDocumentKey(n))throw new F(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Sa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H(12329,{type:typeof n})}function Un(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Sa(n);throw new F(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ye(n,e){const t={typeString:n};return e&&(t.value=e),t}function es(n,e){if(!gd(n))throw new F(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new F(L.INVALID_ARGUMENT,t);return!0}/**
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
 */const Yc=-62135596800,Jc=1e6;class oe{static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Jc);return new oe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Yc)throw new F(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jc}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(es(e,oe._jsonSchema))return new oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Yc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}oe._jsonSchemaVersion="firestore/timestamp/1.0",oe._jsonSchema={type:ye("string",oe._jsonSchemaVersion),seconds:ye("number"),nanoseconds:ye("number")};/**
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
 */class G{static fromTimestamp(e){return new G(e)}static min(){return new G(new oe(0,0))}static max(){return new G(new oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Mr=-1;function Dv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new oe(t+1,0):new oe(t,r));return new Kt(s,z.empty(),e)}function Vv(n){return new Kt(n.readTime,n.key,Mr)}class Kt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Kt(G.min(),z.empty(),Mr)}static max(){return new Kt(G.max(),z.empty(),Mr)}}function Ov(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
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
 */const Lv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Zn(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==Lv)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(s=>s?O.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new O((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new O((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function jv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function er(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class vi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}vi.ce=-1;/**
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
 */const Ca=-1;function wi(n){return n==null}function Js(n){return n===0&&1/n==-1/0}function Uv(n){return typeof n=="number"&&Number.isInteger(n)&&!Js(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const _d="";function Fv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Zc(e)),e=Bv(n.get(t),e);return Zc(e)}function Bv(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case _d:t+="";break;default:t+=i}}return t}function Zc(n){return n+_d+""}/**
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
 */function eu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function bn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function yd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ce{constructor(e,t){this.comparator=e,this.root=t||xe.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Is(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Is(this.root,e,this.comparator,!1)}getReverseIterator(){return new Is(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Is(this.root,e,this.comparator,!0)}}class Is{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??xe.RED,this.left=s??xe.EMPTY,this.right=i??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new xe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw H(43730,{key:this.key,value:this.value});if(this.right.isRed())throw H(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw H(27949);return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw H(57766)}get value(){throw H(16141)}get color(){throw H(16727)}get left(){throw H(29726)}get right(){throw H(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ee{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tu(this.data.getIterator())}getIteratorFrom(e){return new tu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ee(this.comparator);return t.data=e,t}}class tu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qe{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new Qe([])}unionWith(e){let t=new Ee(Re.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return zn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class vd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vd("Invalid base64 string: "+i):i}}(e);return new Se(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const $v=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(n){if(ee(!!n,39018),typeof n=="string"){let e=0;const t=$v.exec(n);if(ee(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pe(n.seconds),nanos:pe(n.nanos)}}function pe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xt(n){return typeof n=="string"?Se.fromBase64String(n):Se.fromUint8Array(n)}/**
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
 */const wd="server_timestamp",Ed="__type__",Td="__previous_value__",bd="__local_write_time__";function Pa(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ed])==null?void 0:r.stringValue)===wd}function Ei(n){const e=n.mapValue.fields[Td];return Pa(e)?Ei(e):e}function jr(n){const e=Qt(n.mapValue.fields[bd].timestampValue);return new oe(e.seconds,e.nanos)}/**
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
 */class zv{constructor(e,t,r,s,i,a,l,c,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const Zs="(default)";class Ur{constructor(e,t){this.projectId=e,this.database=t||Zs}static empty(){return new Ur("","")}get isDefaultDatabase(){return this.database===Zs}isEqual(e){return e instanceof Ur&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Id="__type__",qv="__max__",xs={mapValue:{}},xd="__vector__",ei="value";function Yt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pa(n)?4:Wv(n)?9007199254740991:Hv(n)?10:11:H(28295,{value:n})}function ft(n,e){if(n===e)return!0;const t=Yt(n);if(t!==Yt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return jr(n).isEqual(jr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Qt(s.timestampValue),l=Qt(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Xt(s.bytesValue).isEqual(Xt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return pe(s.geoPointValue.latitude)===pe(i.geoPointValue.latitude)&&pe(s.geoPointValue.longitude)===pe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return pe(s.integerValue)===pe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=pe(s.doubleValue),l=pe(i.doubleValue);return a===l?Js(a)===Js(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return zn(n.arrayValue.values||[],e.arrayValue.values||[],ft);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(eu(a)!==eu(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!ft(a[c],l[c])))return!1;return!0}(n,e);default:return H(52216,{left:n})}}function Fr(n,e){return(n.values||[]).find(t=>ft(t,e))!==void 0}function qn(n,e){if(n===e)return 0;const t=Yt(n),r=Yt(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=pe(i.integerValue||i.doubleValue),c=pe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return nu(n.timestampValue,e.timestampValue);case 4:return nu(jr(n),jr(e));case 5:return Fo(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Xt(i),c=Xt(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Y(l[h],c[h]);if(f!==0)return f}return Y(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Y(pe(i.latitude),pe(a.latitude));return l!==0?l:Y(pe(i.longitude),pe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ru(n.arrayValue,e.arrayValue);case 10:return function(i,a){var v,I,P,N;const l=i.fields||{},c=a.fields||{},h=(v=l[ei])==null?void 0:v.arrayValue,f=(I=c[ei])==null?void 0:I.arrayValue,m=Y(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return m!==0?m:ru(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===xs.mapValue&&a===xs.mapValue)return 0;if(i===xs.mapValue)return 1;if(a===xs.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const v=Fo(c[m],f[m]);if(v!==0)return v;const I=qn(l[c[m]],h[f[m]]);if(I!==0)return I}return Y(c.length,f.length)}(n.mapValue,e.mapValue);default:throw H(23264,{he:t})}}function nu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=Qt(n),r=Qt(e),s=Y(t.seconds,r.seconds);return s!==0?s:Y(t.nanos,r.nanos)}function ru(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=qn(t[s],r[s]);if(i)return i}return Y(t.length,r.length)}function Hn(n){return Bo(n)}function Bo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Qt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Xt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Bo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Bo(t.fields[a])}`;return s+"}"}(n.mapValue):H(61005,{value:n})}function Ms(n){switch(Yt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ei(n);return e?16+Ms(e):16;case 5:return 2*n.stringValue.length;case 6:return Xt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ms(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return bn(r.fields,(i,a)=>{s+=i.length+Ms(a)}),s}(n.mapValue);default:throw H(13486,{value:n})}}function $o(n){return!!n&&"integerValue"in n}function ka(n){return!!n&&"arrayValue"in n}function su(n){return!!n&&"nullValue"in n}function iu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function js(n){return!!n&&"mapValue"in n}function Hv(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Id])==null?void 0:r.stringValue)===xd}function Sr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return bn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Sr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Sr(n.arrayValue.values[t]);return e}return{...n}}function Wv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===qv}/**
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
 */class He{constructor(e){this.value=e}static empty(){return new He({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!js(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sr(t)}setAll(e){let t=Re.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Sr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());js(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];js(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){bn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new He(Sr(this.value))}}function Rd(n){const e=[];return bn(n.fields,(t,r)=>{const s=new Re([t]);if(js(r)){const i=Rd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Qe(e)}/**
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
 */class De{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new De(e,0,G.min(),G.min(),G.min(),He.empty(),0)}static newFoundDocument(e,t,r,s){return new De(e,1,t,G.min(),r,s,0)}static newNoDocument(e,t){return new De(e,2,t,G.min(),G.min(),He.empty(),0)}static newUnknownDocument(e,t){return new De(e,3,t,G.min(),G.min(),He.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=He.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=He.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ti{constructor(e,t){this.position=e,this.inclusive=t}}function ou(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(a.referenceValue),t.key):r=qn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function au(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ft(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ni{constructor(e,t="asc"){this.field=e,this.dir=t}}function Gv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ad{}class we extends Ad{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Qv(e,t,r):t==="array-contains"?new Jv(e,r):t==="in"?new Zv(e,r):t==="not-in"?new ew(e,r):t==="array-contains-any"?new tw(e,r):new we(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Xv(e,r):new Yv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(qn(t,this.value)):t!==null&&Yt(this.value)===Yt(t)&&this.matchesComparison(qn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pt extends Ad{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new pt(e,t)}matches(e){return Sd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Sd(n){return n.op==="and"}function Cd(n){return Kv(n)&&Sd(n)}function Kv(n){for(const e of n.filters)if(e instanceof pt)return!1;return!0}function zo(n){if(n instanceof we)return n.field.canonicalString()+n.op.toString()+Hn(n.value);if(Cd(n))return n.filters.map(e=>zo(e)).join(",");{const e=n.filters.map(t=>zo(t)).join(",");return`${n.op}(${e})`}}function Pd(n,e){return n instanceof we?function(r,s){return s instanceof we&&r.op===s.op&&r.field.isEqual(s.field)&&ft(r.value,s.value)}(n,e):n instanceof pt?function(r,s){return s instanceof pt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Pd(a,s.filters[l]),!0):!1}(n,e):void H(19439)}function kd(n){return n instanceof we?function(t){return`${t.field.canonicalString()} ${t.op} ${Hn(t.value)}`}(n):n instanceof pt?function(t){return t.op.toString()+" {"+t.getFilters().map(kd).join(" ,")+"}"}(n):"Filter"}class Qv extends we{constructor(e,t,r){super(e,t,r),this.key=z.fromName(r.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class Xv extends we{constructor(e,t){super(e,"in",t),this.keys=Nd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Yv extends we{constructor(e,t){super(e,"not-in",t),this.keys=Nd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Nd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>z.fromName(r.referenceValue))}class Jv extends we{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ka(t)&&Fr(t.arrayValue,this.value)}}class Zv extends we{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fr(this.value.arrayValue,t)}}class ew extends we{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Fr(this.value.arrayValue,t)}}class tw extends we{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ka(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Fr(this.value.arrayValue,r))}}/**
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
 */class nw{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function lu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new nw(n,e,t,r,s,i,a)}function Na(n){const e=K(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>zo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Hn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Hn(r)).join(",")),e.Te=t}return e.Te}function Da(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Gv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Pd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!au(n.startAt,e.startAt)&&au(n.endAt,e.endAt)}function qo(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ti{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function rw(n,e,t,r,s,i,a,l){return new Ti(n,e,t,r,s,i,a,l)}function Va(n){return new Ti(n)}function cu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sw(n){return n.collectionGroup!==null}function Cr(n){const e=K(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ee(Re.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ni(i,r))}),t.has(Re.keyField().canonicalString())||e.Ie.push(new ni(Re.keyField(),r))}return e.Ie}function lt(n){const e=K(n);return e.Ee||(e.Ee=iw(e,Cr(n))),e.Ee}function iw(n,e){if(n.limitType==="F")return lu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ni(s.field,i)});const t=n.endAt?new ti(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ti(n.startAt.position,n.startAt.inclusive):null;return lu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ho(n,e,t){return new Ti(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function bi(n,e){return Da(lt(n),lt(e))&&n.limitType===e.limitType}function Dd(n){return`${Na(lt(n))}|lt:${n.limitType}`}function Dn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>kd(s)).join(", ")}]`),wi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Hn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Hn(s)).join(",")),`Target(${r})`}(lt(n))}; limitType=${n.limitType})`}function Ii(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Cr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=ou(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Cr(r),s)||r.endAt&&!function(a,l,c){const h=ou(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Cr(r),s))}(n,e)}function ow(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vd(n){return(e,t)=>{let r=!1;for(const s of Cr(n)){const i=aw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function aw(n,e,t){const r=n.field.isKeyField()?z.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?qn(c,h):H(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H(19790,{direction:n.dir})}}/**
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
 */class In{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){bn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return yd(this.inner)}size(){return this.innerSize}}/**
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
 */const lw=new ce(z.comparator);function Rt(){return lw}const Od=new ce(z.comparator);function br(...n){let e=Od;for(const t of n)e=e.insert(t.key,t);return e}function Ld(n){let e=Od;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ln(){return Pr()}function Md(){return Pr()}function Pr(){return new In(n=>n.toString(),(n,e)=>n.isEqual(e))}const cw=new ce(z.comparator),uw=new Ee(z.comparator);function J(...n){let e=uw;for(const t of n)e=e.add(t);return e}const hw=new Ee(Y);function dw(){return hw}/**
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
 */function Oa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Js(e)?"-0":e}}function jd(n){return{integerValue:""+n}}function fw(n,e){return Uv(e)?jd(e):Oa(n,e)}/**
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
 */class xi{constructor(){this._=void 0}}function pw(n,e,t){return n instanceof ri?function(s,i){const a={fields:{[Ed]:{stringValue:wd},[bd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Pa(i)&&(i=Ei(i)),i&&(a.fields[Td]=i),{mapValue:a}}(t,e):n instanceof Br?Fd(n,e):n instanceof $r?Bd(n,e):function(s,i){const a=Ud(s,i),l=uu(a)+uu(s.Ae);return $o(a)&&$o(s.Ae)?jd(l):Oa(s.serializer,l)}(n,e)}function mw(n,e,t){return n instanceof Br?Fd(n,e):n instanceof $r?Bd(n,e):t}function Ud(n,e){return n instanceof si?function(r){return $o(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ri extends xi{}class Br extends xi{constructor(e){super(),this.elements=e}}function Fd(n,e){const t=$d(e);for(const r of n.elements)t.some(s=>ft(s,r))||t.push(r);return{arrayValue:{values:t}}}class $r extends xi{constructor(e){super(),this.elements=e}}function Bd(n,e){let t=$d(e);for(const r of n.elements)t=t.filter(s=>!ft(s,r));return{arrayValue:{values:t}}}class si extends xi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function uu(n){return pe(n.integerValue||n.doubleValue)}function $d(n){return ka(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function gw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Br&&s instanceof Br||r instanceof $r&&s instanceof $r?zn(r.elements,s.elements,ft):r instanceof si&&s instanceof si?ft(r.Ae,s.Ae):r instanceof ri&&s instanceof ri}(n.transform,e.transform)}class _w{constructor(e,t){this.version=e,this.transformResults=t}}class Et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Et}static exists(e){return new Et(void 0,e)}static updateTime(e){return new Et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Us(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ri{}function zd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Hd(n.key,Et.none()):new ts(n.key,n.data,Et.none());{const t=n.data,r=He.empty();let s=new Ee(Re.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new xn(n.key,r,new Qe(s.toArray()),Et.none())}}function yw(n,e,t){n instanceof ts?function(s,i,a){const l=s.value.clone(),c=du(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof xn?function(s,i,a){if(!Us(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=du(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(qd(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function kr(n,e,t,r){return n instanceof ts?function(i,a,l,c){if(!Us(i.precondition,a))return l;const h=i.value.clone(),f=fu(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof xn?function(i,a,l,c){if(!Us(i.precondition,a))return l;const h=fu(i.fieldTransforms,c,a),f=a.data;return f.setAll(qd(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,l){return Us(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function vw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Ud(r.transform,s||null);i!=null&&(t===null&&(t=He.empty()),t.set(r.field,i))}return t||null}function hu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&zn(r,s,(i,a)=>gw(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ts extends Ri{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class xn extends Ri{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function du(n,e,t){const r=new Map;ee(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,mw(a,l,t[s]))}return r}function fu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,pw(i,a,e))}return r}class Hd extends Ri{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ww extends Ri{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ew{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&yw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=kr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=kr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Md();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=zd(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),J())}isEqual(e){return this.batchId===e.batchId&&zn(this.mutations,e.mutations,(t,r)=>hu(t,r))&&zn(this.baseMutations,e.baseMutations,(t,r)=>hu(t,r))}}class La{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ee(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return cw}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new La(e,t,r,s)}}/**
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
 */class Tw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var _e,Z;function Iw(n){switch(n){case L.OK:return H(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return H(15467,{code:n})}}function Wd(n){if(n===void 0)return xt("GRPC error has no .code"),L.UNKNOWN;switch(n){case _e.OK:return L.OK;case _e.CANCELLED:return L.CANCELLED;case _e.UNKNOWN:return L.UNKNOWN;case _e.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case _e.INTERNAL:return L.INTERNAL;case _e.UNAVAILABLE:return L.UNAVAILABLE;case _e.UNAUTHENTICATED:return L.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case _e.NOT_FOUND:return L.NOT_FOUND;case _e.ALREADY_EXISTS:return L.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return L.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case _e.ABORTED:return L.ABORTED;case _e.OUT_OF_RANGE:return L.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return L.UNIMPLEMENTED;case _e.DATA_LOSS:return L.DATA_LOSS;default:return H(39323,{code:n})}}(Z=_e||(_e={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xw(){return new TextEncoder}/**
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
 */const Rw=new Ht([4294967295,4294967295],0);function pu(n){const e=xw().encode(n),t=new ld;return t.update(e),new Uint8Array(t.digest())}function mu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ht([t,r],0),new Ht([s,i],0)]}class Ma{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ir(`Invalid padding: ${t}`);if(r<0)throw new Ir(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ir(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ir(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ht.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Ht.fromNumber(r)));return s.compare(Rw)===1&&(s=new Ht([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=pu(e),[r,s]=mu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ma(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=pu(e),[r,s]=mu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ir extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ai{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ns.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ai(G.min(),s,new ce(Y),Rt(),J())}}class ns{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ns(r,t,J(),J(),J())}}/**
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
 */class Fs{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Gd{constructor(e,t){this.targetId=e,this.Ce=t}}class Kd{constructor(e,t,r=Se.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class gu{constructor(){this.ve=0,this.Fe=_u(),this.Me=Se.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=J(),t=J(),r=J();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:H(38017,{changeType:i})}}),new ns(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=_u()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ee(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Aw{constructor(e){this.Ge=e,this.ze=new Map,this.je=Rt(),this.Je=Rs(),this.He=Rs(),this.Ye=new ce(Y)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:H(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(qo(i))if(r===0){const a=new z(i.path);this.et(t,a,De.newNoDocument(a,G.min()))}else ee(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),c=l?this.ct(l,e,a):1;if(c!==0){this.it(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Xt(r).toUint8Array()}catch(c){if(c instanceof vd)return $n("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ma(a,s,i)}catch(c){return $n(c instanceof Ir?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&qo(l.target)){const c=new z(l.target.path);this.It(c).has(a)||this.Et(a,c)||this.et(a,c,De.newNoDocument(c,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=J();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Ai(e,t,this.Ye,this.je,r);return this.je=Rt(),this.Je=Rs(),this.He=Rs(),this.Ye=new ce(Y),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new gu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ee(Y),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ee(Y),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new gu),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Rs(){return new ce(z.comparator)}function _u(){return new ce(z.comparator)}const Sw={asc:"ASCENDING",desc:"DESCENDING"},Cw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Pw={and:"AND",or:"OR"};class kw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Wo(n,e){return n.useProto3Json||wi(e)?e:{value:e}}function ii(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Nw(n,e){return ii(n,e.toTimestamp())}function ct(n){return ee(!!n,49232),G.fromTimestamp(function(t){const r=Qt(t);return new oe(r.seconds,r.nanos)}(n))}function ja(n,e){return Go(n,e).canonicalString()}function Go(n,e){const t=function(s){return new le(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Xd(n){const e=le.fromString(n);return ee(tf(e),10190,{key:e.toString()}),e}function Ko(n,e){return ja(n.databaseId,e.path)}function Eo(n,e){const t=Xd(e);if(t.get(1)!==n.databaseId.projectId)throw new F(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z(Jd(t))}function Yd(n,e){return ja(n.databaseId,e)}function Dw(n){const e=Xd(n);return e.length===4?le.emptyPath():Jd(e)}function Qo(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Jd(n){return ee(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function yu(n,e,t){return{name:Ko(n,e),fields:t.value.mapValue.fields}}function Vw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:H(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(ee(f===void 0||typeof f=="string",58123),Se.fromBase64String(f||"")):(ee(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Se.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?L.UNKNOWN:Wd(h.code);return new F(f,h.message||"")}(a);t=new Kd(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Eo(n,r.document.name),i=ct(r.document.updateTime),a=r.document.createTime?ct(r.document.createTime):G.min(),l=new He({mapValue:{fields:r.document.fields}}),c=De.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Fs(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Eo(n,r.document),i=r.readTime?ct(r.readTime):G.min(),a=De.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Fs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Eo(n,r.document),i=r.removedTargetIds||[];t=new Fs([],i,s,null)}else{if(!("filter"in e))return H(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new bw(s,i),l=r.targetId;t=new Gd(l,a)}}return t}function Ow(n,e){let t;if(e instanceof ts)t={update:yu(n,e.key,e.value)};else if(e instanceof Hd)t={delete:Ko(n,e.key)};else if(e instanceof xn)t={update:yu(n,e.key,e.data),updateMask:qw(e.fieldMask)};else{if(!(e instanceof ww))return H(16599,{Vt:e.type});t={verify:Ko(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof ri)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Br)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof $r)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof si)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw H(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Nw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H(27497)}(n,e.precondition)),t}function Lw(n,e){return n&&n.length>0?(ee(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?ct(s.updateTime):ct(i);return a.isEqual(G.min())&&(a=ct(i)),new _w(a,s.transformResults||[])}(t,e))):[]}function Mw(n,e){return{documents:[Yd(n,e.path)]}}function jw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Yd(n,s);const i=function(h){if(h.length!==0)return ef(pt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(v){return{field:Vn(v.field),direction:Bw(v.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Wo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function Uw(n){let e=Dw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ee(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const v=Zd(m);return v instanceof pt&&Cd(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(v=>function(P){return new ni(On(P.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(v))}(t.orderBy));let l=null;t.limit&&(l=function(m){let v;return v=typeof m=="object"?m.value:m,wi(v)?null:v}(t.limit));let c=null;t.startAt&&(c=function(m){const v=!!m.before,I=m.values||[];return new ti(I,v)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const v=!m.before,I=m.values||[];return new ti(I,v)}(t.endAt)),rw(e,s,a,i,l,"F",c,h)}function Fw(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=On(t.unaryFilter.field);return we.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=On(t.unaryFilter.field);return we.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=On(t.unaryFilter.field);return we.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=On(t.unaryFilter.field);return we.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return H(61313);default:return H(60726)}}(n):n.fieldFilter!==void 0?function(t){return we.create(On(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return H(58110);default:return H(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return pt.create(t.compositeFilter.filters.map(r=>Zd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H(1026)}}(t.compositeFilter.op))}(n):H(30097,{filter:n})}function Bw(n){return Sw[n]}function $w(n){return Cw[n]}function zw(n){return Pw[n]}function Vn(n){return{fieldPath:n.canonicalString()}}function On(n){return Re.fromServerFormat(n.fieldPath)}function ef(n){return n instanceof we?function(t){if(t.op==="=="){if(iu(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NAN"}};if(su(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(iu(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NOT_NAN"}};if(su(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vn(t.field),op:$w(t.op),value:t.value}}}(n):n instanceof pt?function(t){const r=t.getFilters().map(s=>ef(s));return r.length===1?r[0]:{compositeFilter:{op:zw(t.op),filters:r}}}(n):H(54877,{filter:n})}function qw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function tf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class $t{constructor(e,t,r,s,i=G.min(),a=G.min(),l=Se.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new $t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Hw{constructor(e){this.yt=e}}function Ww(n){const e=Uw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ho(e,e.limit,"L"):e}/**
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
 */class Gw{constructor(){this.Cn=new Kw}addToCollectionParentIndex(e,t){return this.Cn.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(Kt.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(Kt.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class Kw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ee(le.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ee(le.comparator)).toArray()}}/**
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
 */const vu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nf=41943040;class Be{static withCacheSize(e){return new Be(e,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Be.DEFAULT_COLLECTION_PERCENTILE=10,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Be.DEFAULT=new Be(nf,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Be.DISABLED=new Be(-1,0,0);/**
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
 */class Wn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Wn(0)}static cr(){return new Wn(-1)}}/**
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
 */const wu="LruGarbageCollector",Qw=1048576;function Eu([n,e],[t,r]){const s=Y(n,t);return s===0?Y(e,r):s}class Xw{constructor(e){this.Ir=e,this.buffer=new Ee(Eu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Eu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Yw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){U(wu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){er(t)?U(wu,"Ignoring IndexedDB error during garbage collection: ",t):await Zn(t)}await this.Vr(3e5)})}}class Jw{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return O.resolve(vi.ce);const r=new Xw(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(vu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vu):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Nn()<=X.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function Zw(n,e){return new Jw(n,e)}/**
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
 */class eE{constructor(){this.changes=new In(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class tE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class nE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&kr(r.mutation,s,Qe.empty(),oe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,t,r=J()){const s=ln();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=br();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=ln();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,J()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=Rt();const a=Pr(),l=function(){return Pr()}();return t.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof xn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),kr(f.mutation,h,f.mutation.getFieldMask(),oe.now())):a.set(h.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>l.set(h,new tE(f,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Pr();let s=new ce((a,l)=>a-l),i=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||Qe.empty();f=l.applyToLocalView(h,f),r.set(c,f);const m=(s.get(l.batchId)||J()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,m=Md();f.forEach(v=>{if(!i.has(v)){const I=zd(t.get(v),r.get(v));I!==null&&m.set(v,I),i=i.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):O.resolve(ln());let l=Mr,c=i;return a.next(h=>O.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{c=c.insert(f,v)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,J())).next(f=>({batchId:l,changes:Ld(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(r=>{let s=br();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=br();return this.indexManager.getCollectionParents(e,i).next(l=>O.forEach(l,c=>{const h=function(m,v){return new Ti(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,v)=>{a=a.insert(m,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,De.newInvalidDocument(f)))});let l=br();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&kr(f.mutation,h,Qe.empty(),oe.now()),Ii(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class rE{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return O.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ct(s.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:Ww(s.bundledQuery),readTime:ct(s.readTime)}}(t)),O.resolve()}}/**
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
 */class sE{constructor(){this.overlays=new ce(z.comparator),this.qr=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ln();return O.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const s=ln(),i=t.length+1,a=new z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return O.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ce((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=ln(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=ln(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return O.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Tw(t,r));let i=this.qr.get(t);i===void 0&&(i=J(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class iE{constructor(){this.sessionToken=Se.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
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
 */class Ua{constructor(){this.Qr=new Ee(be.$r),this.Ur=new Ee(be.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new be(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new be(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new z(new le([])),r=new be(t,e),s=new be(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new z(new le([])),r=new be(t,e),s=new be(t,e+1);let i=J();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new be(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class be{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return z.comparator(e.key,t.key)||Y(e.Yr,t.Yr)}static Kr(e,t){return Y(e.Yr,t.Yr)||z.comparator(e.key,t.key)}}/**
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
 */class oE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ee(be.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ew(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new be(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,t){return O.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Ca:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new be(t,0),s=new be(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const l=this.Xr(a.Yr);i.push(l)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ee(Y);return t.forEach(s=>{const i=new be(s,0),a=new be(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const a=new be(new z(i),0);let l=new Ee(Y);return this.Zr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Yr)),!0)},a),O.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ee(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(t.mutations,s=>{const i=new be(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new be(t,0),s=this.Zr.firstAfterOrEqual(r);return O.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class aE{constructor(e){this.ri=e,this.docs=function(){return new ce(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():De.newInvalidDocument(t))}getEntries(e,t){let r=Rt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():De.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Rt();const a=t.path,l=new z(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Ov(Vv(f),r)<=0||(s.has(f.key)||Ii(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,t,r,s){H(9500)}ii(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new lE(this)}getSize(e){return O.resolve(this.size)}}class lE extends eE{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class cE{constructor(e){this.persistence=e,this.si=new In(t=>Na(t),Da),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.oi=0,this._i=new Ua,this.targetCount=0,this.ai=Wn.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),O.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Wn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Pr(t),O.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this._i.containsKey(t))}}/**
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
 */class rf{constructor(e,t){this.ui={},this.overlays={},this.ci=new vi(0),this.li=!1,this.li=!0,this.hi=new iE,this.referenceDelegate=e(this),this.Pi=new cE(this),this.indexManager=new Gw,this.remoteDocumentCache=function(s){return new aE(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Hw(t),this.Ii=new rE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new oE(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const s=new uE(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class uE extends Mv{constructor(e){super(),this.currentSequenceNumber=e}}class Fa{constructor(e){this.persistence=e,this.Ri=new Ua,this.Vi=null}static mi(e){return new Fa(e)}get fi(){if(this.Vi)return this.Vi;throw H(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),O.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const s=z.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,G.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return O.or([()=>O.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class oi{constructor(e,t){this.persistence=e,this.pi=new In(r=>Fv(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Zw(this,t)}static mi(e,t){return new oi(e,t)}Ei(){}di(e){return O.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return O.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?O.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(l=>{l||(r++,i.removeEntry(a,G.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),O.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),O.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ms(e.data.value)),t}br(e,t,r){return O.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ba{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=J(),s=J();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ba(e,t.fromCache,r,s)}}/**
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
 */class hE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dE{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Mg()?8:jv(Ve())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new hE;return this.Ss(e,t,a).next(l=>{if(i.result=l,this.Vs)return this.bs(e,t,a,l.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Nn()<=X.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Dn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(Nn()<=X.DEBUG&&U("QueryEngine","Query:",Dn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Nn()<=X.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Dn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lt(t))):O.resolve())}ys(e,t){if(cu(t))return O.resolve(null);let r=lt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ho(t,null,"F"),r=lt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=J(...i);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.Ds(t,l);return this.Cs(t,h,a,c.readTime)?this.ys(e,Ho(t,null,"F")):this.vs(e,h,t,c)}))})))}ws(e,t,r,s){return cu(t)||s.isEqual(G.min())?O.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?O.resolve(null):(Nn()<=X.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Dn(t)),this.vs(e,a,t,Dv(s,Mr)).next(l=>l))})}Ds(e,t){let r=new Ee(Vd(e));return t.forEach((s,i)=>{Ii(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Nn()<=X.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Dn(t)),this.ps.getDocumentsMatchingQuery(e,t,Kt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const $a="LocalStore",fE=3e8;class pE{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new ce(Y),this.xs=new In(i=>Na(i),Da),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nE(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function mE(n,e,t,r){return new pE(n,e,t,r)}async function sf(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=J();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:l}))})})}function gE(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const m=h.batch,v=m.keys();let I=O.resolve();return v.forEach(P=>{I=I.next(()=>f.getEntry(c,P)).next(N=>{const R=h.docVersions.get(P);ee(R!==null,48541),N.version.compareTo(R)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=J();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function of(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function _E(n,e){const t=K(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach((f,m)=>{const v=s.get(m);if(!v)return;l.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.Pi.addMatchingKeys(i,f.addedDocuments,m)));let I=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(Se.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),s=s.insert(m,I),function(N,R,V){return N.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=fE?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(v,I,f)&&l.push(t.Pi.updateTargetData(i,I))});let c=Rt(),h=J();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(yE(i,a,e.documentUpdates).next(f=>{c=f.ks,h=f.qs})),!r.isEqual(G.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next(m=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.Ms=s,i))}function yE(n,e,t){let r=J(),s=J();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Rt();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(G.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):U($a,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{ks:a,qs:s}})}function vE(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ca),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wE(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new $t(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function Xo(n,e,t){const r=K(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!er(a))throw a;U($a,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Tu(n,e,t){const r=K(n);let s=G.min(),i=J();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const m=K(c),v=m.xs.get(f);return v!==void 0?O.resolve(m.Ms.get(v)):m.Pi.getTargetData(h,f)}(r,a,lt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:G.min(),t?i:J())).next(l=>(EE(r,ow(e),l),{documents:l,Qs:i})))}function EE(n,e,t){let r=n.Os.get(e)||G.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class bu{constructor(){this.activeTargetIds=dw()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TE{constructor(){this.Mo=new bu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new bu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bE{Oo(e){}shutdown(){}}/**
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
 */const Iu="ConnectivityMonitor";class xu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){U(Iu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){U(Iu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let As=null;function Yo(){return As===null?As=function(){return 268435456+Math.round(2147483648*Math.random())}():As++,"0x"+As.toString(16)}/**
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
 */const To="RestConnection",IE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xE{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Zs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=Yo(),l=this.zo(e,t.toUriEncodedString());U(To,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:h}=new URL(l),f=En(h);return this.Jo(e,l,c,r,f).then(m=>(U(To,`Received RPC '${e}' ${a}: `,m),m),m=>{throw $n(To,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=IE[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class RE{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ke="WebChannelConnection";class AE extends xE{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Yo();return new Promise((l,c)=>{const h=new cd;h.setWithCredentials(!0),h.listenOnce(ud.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ls.NO_ERROR:const m=h.getResponseJson();U(ke,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case Ls.TIMEOUT:U(ke,`RPC '${e}' ${a} timed out`),c(new F(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ls.HTTP_ERROR:const v=h.getStatus();if(U(ke,`RPC '${e}' ${a} failed with status:`,v,"response text:",h.getResponseText()),v>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const P=I==null?void 0:I.error;if(P&&P.status&&P.message){const N=function(V){const k=V.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(k)>=0?k:L.UNKNOWN}(P.status);c(new F(N,P.message))}else c(new F(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new F(L.UNAVAILABLE,"Connection failed."));break;default:H(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{U(ke,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);U(ke,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=Yo(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=fd(),l=dd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=i.join("");U(ke,`Creating RPC '${e}' stream ${s}: ${f}`,c);const m=a.createWebChannel(f,c);this.I_(m);let v=!1,I=!1;const P=new RE({Yo:R=>{I?U(ke,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(v||(U(ke,`Opening RPC '${e}' stream ${s} transport.`),m.open(),v=!0),U(ke,`RPC '${e}' stream ${s} sending:`,R),m.send(R))},Zo:()=>m.close()}),N=(R,V,k)=>{R.listen(V,C=>{try{k(C)}catch(M){setTimeout(()=>{throw M},0)}})};return N(m,Tr.EventType.OPEN,()=>{I||(U(ke,`RPC '${e}' stream ${s} transport opened.`),P.o_())}),N(m,Tr.EventType.CLOSE,()=>{I||(I=!0,U(ke,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(m))}),N(m,Tr.EventType.ERROR,R=>{I||(I=!0,$n(ke,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),P.a_(new F(L.UNAVAILABLE,"The operation could not be completed")))}),N(m,Tr.EventType.MESSAGE,R=>{var V;if(!I){const k=R.data[0];ee(!!k,16349);const C=k,M=(C==null?void 0:C.error)||((V=C[0])==null?void 0:V.error);if(M){U(ke,`RPC '${e}' stream ${s} received error:`,M);const $=M.status;let W=function(y){const T=_e[y];if(T!==void 0)return Wd(T)}($),E=M.message;W===void 0&&(W=L.INTERNAL,E="Unknown error status: "+$+" with message "+M.message),I=!0,P.a_(new F(W,E)),m.close()}else U(ke,`RPC '${e}' stream ${s} received:`,k),P.u_(k)}}),N(l,hd.STAT_EVENT,R=>{R.stat===Uo.PROXY?U(ke,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===Uo.NOPROXY&&U(ke,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function bo(){return typeof document<"u"?document:null}/**
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
 */function Si(n){return new kw(n,!0)}/**
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
 */class af{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ru="PersistentStream";class lf{constructor(e,t,r,s,i,a,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new af(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(xt(t.toString()),xt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new F(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return U(Ru,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(U(Ru,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SE extends lf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Vw(this.serializer,e),r=function(i){if(!("targetChange"in i))return G.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?G.min():a.readTime?ct(a.readTime):G.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Qo(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=qo(c)?{documents:Mw(i,c)}:{query:jw(i,c).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Qd(i,a.resumeToken);const h=Wo(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(G.min())>0){l.readTime=ii(i,a.snapshotVersion.toTimestamp());const h=Wo(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Fw(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Qo(this.serializer),t.removeTarget=e,this.q_(t)}}class CE extends lf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Lw(e.writeResults,e.commitTime),r=ct(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Qo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Ow(this.serializer,r))};this.q_(t)}}/**
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
 */class PE{}class kE extends PE{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new F(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,Go(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(L.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,Go(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(L.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class NE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xt(t),this.aa=!1):U("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const yn="RemoteStore";class DE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Rn(this)&&(U(yn,"Restarting streams for network reachability change."),await async function(c){const h=K(c);h.Ea.add(4),await rs(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Ci(h)}(this))})}),this.Ra=new NE(r,s)}}async function Ci(n){if(Rn(n))for(const e of n.da)await e(!0)}async function rs(n){for(const e of n.da)await e(!1)}function cf(n,e){const t=K(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Wa(t)?Ha(t):tr(t).O_()&&qa(t,e))}function za(n,e){const t=K(n),r=tr(t);t.Ia.delete(e),r.O_()&&uf(t,e),t.Ia.size===0&&(r.O_()?r.L_():Rn(t)&&t.Ra.set("Unknown"))}function qa(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}tr(n).Y_(e)}function uf(n,e){n.Va.Ue(e),tr(n).Z_(e)}function Ha(n){n.Va=new Aw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),tr(n).start(),n.Ra.ua()}function Wa(n){return Rn(n)&&!tr(n).x_()&&n.Ia.size>0}function Rn(n){return K(n).Ea.size===0}function hf(n){n.Va=void 0}async function VE(n){n.Ra.set("Online")}async function OE(n){n.Ia.forEach((e,t)=>{qa(n,e)})}async function LE(n,e){hf(n),Wa(n)?(n.Ra.ha(e),Ha(n)):n.Ra.set("Unknown")}async function ME(n,e,t){if(n.Ra.set("Online"),e instanceof Kd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))}(n,e)}catch(r){U(yn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ai(n,r)}else if(e instanceof Fs?n.Va.Ze(e):e instanceof Gd?n.Va.st(e):n.Va.tt(e),!t.isEqual(G.min()))try{const r=await of(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(Se.EMPTY_BYTE_STRING,f.snapshotVersion)),uf(i,c);const m=new $t(f.target,c,h,f.sequenceNumber);qa(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){U(yn,"Failed to raise snapshot:",r),await ai(n,r)}}async function ai(n,e,t){if(!er(e))throw e;n.Ea.add(1),await rs(n),n.Ra.set("Offline"),t||(t=()=>of(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U(yn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ci(n)})}function df(n,e){return e().catch(t=>ai(n,t,e))}async function Pi(n){const e=K(n),t=Jt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ca;for(;jE(e);)try{const s=await vE(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,UE(e,s)}catch(s){await ai(e,s)}ff(e)&&pf(e)}function jE(n){return Rn(n)&&n.Ta.length<10}function UE(n,e){n.Ta.push(e);const t=Jt(n);t.O_()&&t.X_&&t.ea(e.mutations)}function ff(n){return Rn(n)&&!Jt(n).x_()&&n.Ta.length>0}function pf(n){Jt(n).start()}async function FE(n){Jt(n).ra()}async function BE(n){const e=Jt(n);for(const t of n.Ta)e.ea(t.mutations)}async function $E(n,e,t){const r=n.Ta.shift(),s=La.from(r,e,t);await df(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Pi(n)}async function zE(n,e){e&&Jt(n).X_&&await async function(r,s){if(function(a){return Iw(a)&&a!==L.ABORTED}(s.code)){const i=r.Ta.shift();Jt(r).B_(),await df(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Pi(r)}}(n,e),ff(n)&&pf(n)}async function Au(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),U(yn,"RemoteStore received new credentials");const r=Rn(t);t.Ea.add(3),await rs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ci(t)}async function qE(n,e){const t=K(n);e?(t.Ea.delete(2),await Ci(t)):e||(t.Ea.add(2),await rs(t),t.Ra.set("Unknown"))}function tr(n){return n.ma||(n.ma=function(t,r,s){const i=K(t);return i.sa(),new SE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:VE.bind(null,n),t_:OE.bind(null,n),r_:LE.bind(null,n),H_:ME.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),Wa(n)?Ha(n):n.Ra.set("Unknown")):(await n.ma.stop(),hf(n))})),n.ma}function Jt(n){return n.fa||(n.fa=function(t,r,s){const i=K(t);return i.sa(),new CE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:FE.bind(null,n),r_:zE.bind(null,n),ta:BE.bind(null,n),na:$E.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Pi(n)):(await n.fa.stop(),n.Ta.length>0&&(U(yn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Ga{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Ga(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ka(n,e){if(xt("AsyncQueue",`${e}: ${n}`),er(n))return new F(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Fn{static emptySet(e){return new Fn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||z.comparator(t.key,r.key):(t,r)=>z.comparator(t.key,r.key),this.keyedMap=br(),this.sortedSet=new ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Fn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Su{constructor(){this.ga=new ce(z.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):H(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Gn{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Gn(e,t,Fn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class HE{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class WE{constructor(){this.queries=Cu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=K(t),i=s.queries;s.queries=Cu(),i.forEach((a,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new F(L.ABORTED,"Firestore shutting down"))}}function Cu(){return new In(n=>Dd(n),bi)}async function GE(n,e){const t=K(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new HE,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Ka(a,`Initialization of query '${Dn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Qa(t)}async function KE(n,e){const t=K(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function QE(n,e){const t=K(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&Qa(t)}function XE(n,e,t){const r=K(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Qa(n){n.Ca.forEach(e=>{e.next()})}var Jo,Pu;(Pu=Jo||(Jo={})).Ma="default",Pu.Cache="cache";class YE{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Gn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Gn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Jo.Cache}}/**
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
 */class mf{constructor(e){this.key=e}}class gf{constructor(e){this.key=e}}class JE{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=J(),this.mutatedKeys=J(),this.eu=Vd(e),this.tu=new Fn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Su,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const v=s.get(f),I=Ii(this.query,m)?m:null,P=!!v&&this.mutatedKeys.has(v.key),N=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let R=!1;v&&I?v.data.isEqual(I.data)?P!==N&&(r.track({type:3,doc:I}),R=!0):this.su(v,I)||(r.track({type:2,doc:I}),R=!0,(c&&this.eu(I,c)>0||h&&this.eu(I,h)<0)&&(l=!0)):!v&&I?(r.track({type:0,doc:I}),R=!0):v&&!I&&(r.track({type:1,doc:v}),R=!0,(c||h)&&(l=!0)),R&&(I?(a=a.add(I),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((f,m)=>function(I,P){const N=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H(20277,{Rt:R})}};return N(I)-N(P)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,h=c!==this.Za;return this.Za=c,a.length!==0||h?{snapshot:new Gn(this.query,e.tu,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Su,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=J(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new gf(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new mf(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=J();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Gn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Xa="SyncEngine";class ZE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class eT{constructor(e){this.key=e,this.hu=!1}}class tT{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new In(l=>Dd(l),bi),this.Iu=new Map,this.Eu=new Set,this.du=new ce(z.comparator),this.Au=new Map,this.Ru=new Ua,this.Vu={},this.mu=new Map,this.fu=Wn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function nT(n,e,t=!0){const r=Tf(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await _f(r,e,t,!0),s}async function rT(n,e){const t=Tf(n);await _f(t,e,!0,!1)}async function _f(n,e,t,r){const s=await wE(n.localStore,lt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await sT(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&cf(n.remoteStore,s),l}async function sT(n,e,t,r,s){n.pu=(m,v,I)=>async function(N,R,V,k){let C=R.view.ru(V);C.Cs&&(C=await Tu(N.localStore,R.query,!1).then(({documents:E})=>R.view.ru(E,C)));const M=k&&k.targetChanges.get(R.targetId),$=k&&k.targetMismatches.get(R.targetId)!=null,W=R.view.applyChanges(C,N.isPrimaryClient,M,$);return Nu(N,R.targetId,W.au),W.snapshot}(n,m,v,I);const i=await Tu(n.localStore,e,!0),a=new JE(e,i.Qs),l=a.ru(i.documents),c=ns.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);Nu(n,t,h.au);const f=new ZE(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function iT(n,e,t){const r=K(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!bi(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Xo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&za(r.remoteStore,s.targetId),Zo(r,s.targetId)}).catch(Zn)):(Zo(r,s.targetId),await Xo(r.localStore,s.targetId,!0))}async function oT(n,e){const t=K(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),za(t.remoteStore,r.targetId))}async function aT(n,e,t){const r=pT(n);try{const s=await function(a,l){const c=K(a),h=oe.now(),f=l.reduce((I,P)=>I.add(P.key),J());let m,v;return c.persistence.runTransaction("Locally write mutations","readwrite",I=>{let P=Rt(),N=J();return c.Ns.getEntries(I,f).next(R=>{P=R,P.forEach((V,k)=>{k.isValidDocument()||(N=N.add(V))})}).next(()=>c.localDocuments.getOverlayedDocuments(I,P)).next(R=>{m=R;const V=[];for(const k of l){const C=vw(k,m.get(k.key).overlayedDocument);C!=null&&V.push(new xn(k.key,C,Rd(C.value.mapValue),Et.exists(!0)))}return c.mutationQueue.addMutationBatch(I,h,V,l)}).next(R=>{v=R;const V=R.applyToLocalDocumentSet(m,N);return c.documentOverlayCache.saveOverlays(I,R.batchId,V)})}).then(()=>({batchId:v.batchId,changes:Ld(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Vu[a.currentUser.toKey()];h||(h=new ce(Y)),h=h.insert(l,c),a.Vu[a.currentUser.toKey()]=h}(r,s.batchId,t),await ss(r,s.changes),await Pi(r.remoteStore)}catch(s){const i=Ka(s,"Failed to persist write");t.reject(i)}}async function yf(n,e){const t=K(n);try{const r=await _E(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ee(a.hu,14607):s.removedDocuments.size>0&&(ee(a.hu,42227),a.hu=!1))}),await ss(t,r,e)}catch(r){await Zn(r)}}function ku(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=K(a);c.onlineState=l;let h=!1;c.queries.forEach((f,m)=>{for(const v of m.Sa)v.va(l)&&(h=!0)}),h&&Qa(c)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lT(n,e,t){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new ce(z.comparator);a=a.insert(i,De.newNoDocument(i,G.min()));const l=J().add(i),c=new Ai(G.min(),new Map,new ce(Y),a,l);await yf(r,c),r.du=r.du.remove(i),r.Au.delete(e),Ya(r)}else await Xo(r.localStore,e,!1).then(()=>Zo(r,e,t)).catch(Zn)}async function cT(n,e){const t=K(n),r=e.batch.batchId;try{const s=await gE(t.localStore,e);wf(t,r,null),vf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ss(t,s)}catch(s){await Zn(s)}}async function uT(n,e,t){const r=K(n);try{const s=await function(a,l){const c=K(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(m=>(ee(m!==null,37113),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);wf(r,e,t),vf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ss(r,s)}catch(s){await Zn(s)}}function vf(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function wf(n,e,t){const r=K(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Zo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||Ef(n,r)})}function Ef(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(za(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Ya(n))}function Nu(n,e,t){for(const r of t)r instanceof mf?(n.Ru.addReference(r.key,e),hT(n,r)):r instanceof gf?(U(Xa,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Ef(n,r.key)):H(19791,{wu:r})}function hT(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(U(Xa,"New document in limbo: "+t),n.Eu.add(r),Ya(n))}function Ya(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new z(le.fromString(e)),r=n.fu.next();n.Au.set(r,new eT(t)),n.du=n.du.insert(t,r),cf(n.remoteStore,new $t(lt(Va(t.path)),r,"TargetPurposeLimboResolution",vi.ce))}}async function ss(n,e,t){const r=K(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{a.push(r.pu(c,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){s.push(h);const m=Ba.As(c.targetId,h);i.push(m)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(c,h){const f=K(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,v=>O.forEach(v.Es,I=>f.persistence.referenceDelegate.addReference(m,v.targetId,I)).next(()=>O.forEach(v.ds,I=>f.persistence.referenceDelegate.removeReference(m,v.targetId,I)))))}catch(m){if(!er(m))throw m;U($a,"Failed to update sequence numbers: "+m)}for(const m of h){const v=m.targetId;if(!m.fromCache){const I=f.Ms.get(v),P=I.snapshotVersion,N=I.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(v,N)}}}(r.localStore,i))}async function dT(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){U(Xa,"User change. New user:",e.toKey());const r=await sf(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new F(L.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ss(t,r.Ls)}}function fT(n,e){const t=K(n),r=t.Au.get(e);if(r&&r.hu)return J().add(r.key);{let s=J();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Tf(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=yf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lT.bind(null,e),e.Pu.H_=QE.bind(null,e.eventManager),e.Pu.yu=XE.bind(null,e.eventManager),e}function pT(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uT.bind(null,e),e}class li{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Si(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return mE(this.persistence,new dE,e.initialUser,this.serializer)}Cu(e){return new rf(Fa.mi,this.serializer)}Du(e){return new TE}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}li.provider={build:()=>new li};class mT extends li{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ee(this.persistence.referenceDelegate instanceof oi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Yw(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Be.withCacheSize(this.cacheSizeBytes):Be.DEFAULT;return new rf(r=>oi.mi(r,t),this.serializer)}}class ea{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ku(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dT.bind(null,this.syncEngine),await qE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new WE}()}createDatastore(e){const t=Si(e.databaseInfo.databaseId),r=function(i){return new AE(i)}(e.databaseInfo);return function(i,a,l,c){return new kE(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new DE(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>ku(this.syncEngine,t,0),function(){return xu.v()?new xu:new bE}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,f){const m=new tT(s,i,a,l,c,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=K(s);U(yn,"RemoteStore shutting down."),i.Ea.add(5),await rs(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ea.provider={build:()=>new ea};/**
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
 */class gT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Zt="FirestoreClient";class _T{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ne.UNAUTHENTICATED,this.clientId=Aa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{U(Zt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U(Zt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ka(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Io(n,e){n.asyncQueue.verifyOperationInProgress(),U(Zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await sf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Du(n,e){n.asyncQueue.verifyOperationInProgress();const t=await yT(n);U(Zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Au(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Au(e.remoteStore,s)),n._onlineComponents=e}async function yT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(Zt,"Using user provided OfflineComponentProvider");try{await Io(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;$n("Error using user provided cache. Falling back to memory cache: "+t),await Io(n,new li)}}else U(Zt,"Using default OfflineComponentProvider"),await Io(n,new mT(void 0));return n._offlineComponents}async function bf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(Zt,"Using user provided OnlineComponentProvider"),await Du(n,n._uninitializedComponentsProvider._online)):(U(Zt,"Using default OnlineComponentProvider"),await Du(n,new ea))),n._onlineComponents}function vT(n){return bf(n).then(e=>e.syncEngine)}async function Vu(n){const e=await bf(n),t=e.eventManager;return t.onListen=nT.bind(null,e.syncEngine),t.onUnlisten=iT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=oT.bind(null,e.syncEngine),t}/**
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
 */function If(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ou=new Map;/**
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
 */const xf="firestore.googleapis.com",Lu=!0;class Mu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xf,this.ssl=Lu}else this.host=e.host,this.ssl=e.ssl??Lu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=nf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Qw)throw new F(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Nv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=If(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new F(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new F(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new F(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ja{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ev;switch(r.type){case"firstParty":return new xv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ou.get(t);r&&(U("ComponentProvider","Removing Datastore"),Ou.delete(t),r.terminate())}(this),Promise.resolve()}}function wT(n,e,t,r={}){var h;n=Un(n,Ja);const s=En(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(_h(`https://${l}`),yh("Firestore",!0)),i.host!==xf&&i.host!==l&&$n("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!fn(c,a)&&(n._setSettings(c),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Ne.MOCK_USER;else{f=Sg(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new F(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ne(v)}n._authCredentials=new Tv(new md(f,m))}}/**
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
 */class ki{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ki(this.firestore,e,this._query)}}class Ie{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ie(this.firestore,e,this._key)}toJSON(){return{type:Ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(es(t,Ie._jsonSchema))return new Ie(e,r||null,new z(le.fromString(t.referencePath)))}}Ie._jsonSchemaVersion="firestore/documentReference/1.0",Ie._jsonSchema={type:ye("string",Ie._jsonSchemaVersion),referencePath:ye("string")};class zr extends ki{constructor(e,t,r){super(e,t,Va(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ie(this.firestore,null,new z(e))}withConverter(e){return new zr(this.firestore,e,this._path)}}function Ni(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=Aa.newId()),kv("doc","path",e),n instanceof Ja){const r=le.fromString(e,...t);return Xc(r),new Ie(n,null,new z(r))}{if(!(n instanceof Ie||n instanceof zr))throw new F(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Xc(r),new Ie(n.firestore,n instanceof zr?n.converter:null,new z(r))}}/**
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
 */const ju="AsyncQueue";class Uu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new af(this,"async_queue_retry"),this._c=()=>{const r=bo();r&&U(ju,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=bo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=bo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new un;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!er(e))throw e;U(ju,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,xt("INTERNAL UNHANDLED ERROR: ",Fu(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Ga.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&H(47125,{Pc:Fu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Fu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Bu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class ci extends Ja{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Uu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Uu(e),this._firestoreClient=void 0,await e}}}function ET(n,e){const t=typeof n=="object"?n:Th(),r=typeof n=="string"?n:Zs,s=ma(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Rg("firestore");i&&wT(s,...i)}return s}function Rf(n){if(n._terminated)throw new F(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||TT(n),n._firestoreClient}function TT(n){var r,s,i;const e=n._freezeSettings(),t=function(l,c,h,f){return new zv(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,If(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new _T(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class We{constructor(e){this._byteString=e}static fromBase64String(e){try{return new We(Se.fromBase64String(e))}catch(t){throw new F(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new We(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:We._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(es(e,We._jsonSchema))return We.fromBase64String(e.bytes)}}We._jsonSchemaVersion="firestore/bytes/1.0",We._jsonSchema={type:ye("string",We._jsonSchemaVersion),bytes:ye("string")};/**
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
 */class Za{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Af{constructor(e){this._methodName=e}}/**
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
 */class ut{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ut._jsonSchemaVersion}}static fromJSON(e){if(es(e,ut._jsonSchema))return new ut(e.latitude,e.longitude)}}ut._jsonSchemaVersion="firestore/geoPoint/1.0",ut._jsonSchema={type:ye("string",ut._jsonSchemaVersion),latitude:ye("number"),longitude:ye("number")};/**
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
 */class ht{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ht._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(es(e,ht._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ht(e.vectorValues);throw new F(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ht._jsonSchemaVersion="firestore/vectorValue/1.0",ht._jsonSchema={type:ye("string",ht._jsonSchemaVersion),vectorValues:ye("object")};/**
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
 */const bT=/^__.*__$/;class IT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new xn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ts(e,this.data,t,this.fieldTransforms)}}function Sf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H(40011,{Ac:n})}}class el{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new el({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ui(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Sf(this.Ac)&&bT.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class xT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Si(e)}Cc(e,t,r,s=!1){return new el({Ac:e,methodName:t,Dc:r,path:Re.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function RT(n){const e=n._freezeSettings(),t=Si(n._databaseId);return new xT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function AT(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Nf("Data must be an object, but it was:",a,r);const l=Pf(r,a);let c,h;if(i.merge)c=new Qe(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const v=ST(e,m,t);if(!a.contains(v))throw new F(L.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);PT(f,v)||f.push(v)}c=new Qe(f),h=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=a.fieldTransforms;return new IT(new He(l),c,h)}function Cf(n,e){if(kf(n=Ae(n)))return Nf("Unsupported field value:",e,n),Pf(n,e);if(n instanceof Af)return function(r,s){if(!Sf(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Cf(l,s.wc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=oe.fromDate(r);return{timestampValue:ii(s.serializer,i)}}if(r instanceof oe){const i=new oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ii(s.serializer,i)}}if(r instanceof ut)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof We)return{bytesValue:Qd(s.serializer,r._byteString)};if(r instanceof Ie){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ja(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ht)return function(a,l){return{mapValue:{fields:{[Id]:{stringValue:xd},[ei]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return Oa(l.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Sa(r)}`)}(n,e)}function Pf(n,e){const t={};return yd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bn(n,(r,s)=>{const i=Cf(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function kf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof oe||n instanceof ut||n instanceof We||n instanceof Ie||n instanceof Af||n instanceof ht)}function Nf(n,e,t){if(!kf(t)||!gd(t)){const r=Sa(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function ST(n,e,t){if((e=Ae(e))instanceof Za)return e._internalPath;if(typeof e=="string")return Df(n,e);throw ui("Field path arguments must be of type string or ",n,!1,void 0,t)}const CT=new RegExp("[~\\*/\\[\\]]");function Df(n,e,t){if(e.search(CT)>=0)throw ui(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Za(...e.split("."))._internalPath}catch{throw ui(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ui(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new F(L.INVALID_ARGUMENT,l+n+c)}function PT(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Vf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Of("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class kT extends Vf{data(){return super.data()}}function Of(n,e){return typeof e=="string"?Df(n,e):e instanceof Za?e._internalPath:e._delegate._internalPath}/**
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
 */function NT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class DT{convertValue(e,t="none"){switch(Yt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return bn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[ei].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>pe(a.doubleValue));return new ht(t)}convertGeoPoint(e){return new ut(pe(e.latitude),pe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ei(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(jr(e));default:return null}}convertTimestamp(e){const t=Qt(e);return new oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);ee(tf(r),9688,{name:e});const s=new Ur(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(t)||xt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function VT(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class xr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hn extends Vf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Of("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=hn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}hn._jsonSchemaVersion="firestore/documentSnapshot/1.0",hn._jsonSchema={type:ye("string",hn._jsonSchemaVersion),bundleSource:ye("string","DocumentSnapshot"),bundleName:ye("string"),bundle:ye("string")};class Bs extends hn{data(e={}){return super.data(e)}}class Bn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new xr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Bs(this._firestore,this._userDataWriter,r.key,r,new xr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Bs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new xr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Bs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new xr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:OT(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Bn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Aa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function OT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H(61501,{type:n})}}Bn._jsonSchemaVersion="firestore/querySnapshot/1.0",Bn._jsonSchema={type:ye("string",Bn._jsonSchemaVersion),bundleSource:ye("string","QuerySnapshot"),bundleName:ye("string"),bundle:ye("string")};class Lf extends DT{constructor(e){super(),this.firestore=e}convertBytes(e){return new We(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ie(this.firestore,null,t)}}function tl(n,e,t){n=Un(n,Ie);const r=Un(n.firestore,ci),s=VT(n.converter,e,t);return MT(r,[AT(RT(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Et.none())])}function LT(n,...e){var c,h,f;n=Ae(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Bu(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Bu(e[r])){const m=e[r];e[r]=(c=m.next)==null?void 0:c.bind(m),e[r+1]=(h=m.error)==null?void 0:h.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let i,a,l;if(n instanceof Ie)a=Un(n.firestore,ci),l=Va(n._key.path),i={next:m=>{e[r]&&e[r](jT(a,n,m))},error:e[r+1],complete:e[r+2]};else{const m=Un(n,ki);a=Un(m.firestore,ci),l=m._query;const v=new Lf(a);i={next:I=>{e[r]&&e[r](new Bn(a,v,m,I))},error:e[r+1],complete:e[r+2]},NT(n._query)}return function(v,I,P,N){const R=new gT(N),V=new YE(I,R,P);return v.asyncQueue.enqueueAndForget(async()=>GE(await Vu(v),V)),()=>{R.Nu(),v.asyncQueue.enqueueAndForget(async()=>KE(await Vu(v),V))}}(Rf(a),l,s,i)}function MT(n,e){return function(r,s){const i=new un;return r.asyncQueue.enqueueAndForget(async()=>aT(await vT(r),s,i)),i.promise}(Rf(n),e)}function jT(n,e,t){const r=t.docs.get(e._key),s=new Lf(n);return new hn(n,s,e._key,r,new xr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Jn=s})(Tn),pn(new Gt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ci(new bv(r.getProvider("auth-internal")),new Rv(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new F(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ur(h.options.projectId,f)}(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),it(Wc,Gc,e),it(Wc,Gc,"esm2020")})();const UT={apiKey:"AIzaSyCZ_6FzE9FtnUo432UycdOLALXId_0yJyU",authDomain:"playlearn-b96ec.firebaseapp.com",projectId:"playlearn-b96ec",storageBucket:"playlearn-b96ec.firebasestorage.app",messagingSenderId:"859742926301",appId:"1:859742926301:web:4ffe88885e48d9af157234",measurementId:"G-MLV3W579GH"},Mf=Eh(UT),dt=_v(Mf),hi=ET(Mf),jf=x.createContext(),FT=({children:n})=>{const[e,t]=x.useState(null),[r,s]=x.useState(!0);return x.useEffect(()=>{const i=Kh(dt,a=>{t(a),s(!1)});return()=>i()},[]),p.jsx(jf.Provider,{value:{user:e,loading:r},future:{v7_relativeSplatPath:!0},children:n})},BT=()=>x.useContext(jf),Di="/assets/logo-C9-rl5M9.png",$T=()=>{const n=gt(),{email:e="",password:t=""}=n.state||{},[r,s]=x.useState({email:e,password:t}),[i,a]=x.useState(""),[l,c]=x.useState(!1);function h(v){const{name:I,value:P}=v.target;s(N=>({...N,[I]:P}))}async function f(v){v.preventDefault(),c(!0),a("");try{const{email:I,password:P}=r;await n0(dt,I,P),window.location.href="/dashboard"}catch(I){I.code==="auth/user-not-found"?a("لا يوجد مستخدم بهذا البريد الإلكتروني."):I.code==="auth/wrong-password"?(a("كلمة المرور غير صحيحة."),s(P=>({...P,password:""}))):I.code==="auth/invalid-email"?a("البريد الإلكتروني غير صالح."):a("حدث خطأ أثناء تسجيل الدخول. حاول مرة أخرى."),setTimeout(()=>a(""),3e3),c(!1)}}async function m(){const v=new rt;c(!0),a("");try{const P=(await x0(dt,v)).user;await tl(Ni(hi,"users",P.uid),{name:P.displayName,email:P.email,photoURL:P.photoURL,provider:"google"}),setTimeout(()=>{window.location.href="/dashboard"},1500)}catch(I){console.error(I),a("تعذر تسجيل الدخول باستخدام Google. حاول مرة أخرى."),setTimeout(()=>a(""),3e3)}finally{c(!1)}}return p.jsx("div",{className:"min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 font-[Tajawal]",dir:"rtl",lang:"ar",children:p.jsxs("div",{className:"w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12",children:[p.jsx(Wt,{to:"/main",children:p.jsx("img",{src:Di,alt:"plern Logo",className:"w-20 mx-auto mb-4 cursor-pointer"})}),p.jsxs("h2",{className:"flex flex-wrap justify-center items-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800 gap-1",children:["تسجيل ",p.jsx("div",{className:"text-green-500",children:"الدخول"})]}),p.jsxs("form",{onSubmit:f,children:[p.jsxs("div",{className:"space-y-4 mb-6",children:[p.jsx("input",{name:"email",value:r.email,onChange:h,type:"email",placeholder:"البريد الإلكتروني",required:!0,className:"w-full px-4 py-3 rounded-xl border border-gray-300 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"}),p.jsx("input",{name:"password",value:r.password,onChange:h,type:"password",placeholder:"كلمة المرور",required:!0,className:`w-full px-4 py-3 rounded-xl border border-gray-300 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 ${i==="كلمة المرور غير صحيحة."?"animate-shake":""}`}),i&&p.jsx("p",{className:"text-red-500 text-sm",children:i}),p.jsx("div",{className:"text-right",children:p.jsx(Wt,{to:"/forget-password",className:"text-sm text-blue-500 hover:underline font-medium",children:"نسيت كلمة المرور؟"})})]}),p.jsxs("div",{className:"space-y-6",children:[p.jsx("button",{type:"submit",disabled:l,className:`w-full py-3 bg-green-500 text-white font-bold rounded-full transition-all duration-300 hover:bg-green-600 hover:scale-[1.02] ${l?"opacity-50 cursor-not-allowed":""}`,children:l?"جاري تسجيل الدخول...":"تسجيل الدخول"}),p.jsxs("div",{className:"relative text-center",children:[p.jsx("span",{className:"bg-white px-4 text-gray-500 z-10 relative",children:"أو"}),p.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-px bg-gray-300 -z-0"})]}),p.jsxs("button",{type:"button",onClick:m,className:"w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-full bg-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[p.jsx("img",{src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:"Google logo",className:"w-5 h-5"}),p.jsx("span",{className:"text-sm font-medium text-gray-700",children:"المتابعة باستخدام Google"})]}),p.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600 text-[16px] font-bold",children:[p.jsx("div",{className:"whitespace-nowrap",children:"ليس لديك حساب؟"}),p.jsx("a",{href:"/register",className:"relative inline-block group font-medium overflow-hidden",children:p.jsxs("div",{className:"px-3 py-1 relative",children:[p.jsx("div",{className:"relative z-10 flex items-center gap-1 text-[#22c55e] transition-colors duration-500 group-hover:text-[#1565c0]",children:"إنشاء حساب جديد"}),p.jsx("div",{className:"absolute bottom-0 right-3 h-[2px] w-0 bg-[#1565c0] transition-all duration-500 group-hover:w-[83.5%]"})]})})]})]})]})]})})};function zT(n){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}zT(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var is=n=>typeof n=="number"&&!isNaN(n),vn=n=>typeof n=="string",At=n=>typeof n=="function",qT=n=>vn(n)||is(n),ta=n=>vn(n)||At(n)?n:null,HT=(n,e)=>n===!1||is(n)&&n>0?n:e,na=n=>x.isValidElement(n)||vn(n)||At(n)||is(n);function WT(n,e,t=300){let{scrollHeight:r,style:s}=n;requestAnimationFrame(()=>{s.minHeight="initial",s.height=r+"px",s.transition=`all ${t}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,t)})})}function GT({enter:n,exit:e,appendPosition:t=!1,collapse:r=!0,collapseDuration:s=300}){return function({children:i,position:a,preventExitTransition:l,done:c,nodeRef:h,isIn:f,playToast:m}){let v=t?`${n}--${a}`:n,I=t?`${e}--${a}`:e,P=x.useRef(0);return x.useLayoutEffect(()=>{let N=h.current,R=v.split(" "),V=k=>{k.target===h.current&&(m(),N.removeEventListener("animationend",V),N.removeEventListener("animationcancel",V),P.current===0&&k.type!=="animationcancel"&&N.classList.remove(...R))};N.classList.add(...R),N.addEventListener("animationend",V),N.addEventListener("animationcancel",V)},[]),x.useEffect(()=>{let N=h.current,R=()=>{N.removeEventListener("animationend",R),r?WT(N,c,s):c()};f||(l?R():(P.current=1,N.className+=` ${I}`,N.addEventListener("animationend",R)))},[f]),se.createElement(se.Fragment,null,i)}}function $u(n,e){return{content:Uf(n.content,n.props),containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,reason:n.removalReason,status:e}}function Uf(n,e,t=!1){return x.isValidElement(n)&&!vn(n.type)?x.cloneElement(n,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:t}):At(n)?n({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:t}):n}function KT({closeToast:n,theme:e,ariaLabel:t="close"}){return se.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:r=>{r.stopPropagation(),n(!0)},"aria-label":t},se.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},se.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function QT({delay:n,isRunning:e,closeToast:t,type:r="default",hide:s,className:i,controlledProgress:a,progress:l,rtl:c,isIn:h,theme:f}){let m=s||a&&l===0,v={animationDuration:`${n}ms`,animationPlayState:e?"running":"paused"};a&&(v.transform=`scaleX(${l})`);let I=cn("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":c}),P=At(i)?i({rtl:c,type:r,defaultClassName:I}):cn(I,i),N={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{h&&t()}};return se.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},se.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${r}`}),se.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:P,style:v,...N}))}var XT=1,Ff=()=>`${XT++}`;function YT(n,e,t){let r=1,s=0,i=[],a=[],l=e,c=new Map,h=new Set,f=k=>(h.add(k),()=>h.delete(k)),m=()=>{a=Array.from(c.values()),h.forEach(k=>k())},v=({containerId:k,toastId:C,updateId:M})=>{let $=k?k!==n:n!==1,W=c.has(C)&&M==null;return $||W},I=(k,C)=>{c.forEach(M=>{var $;(C==null||C===M.props.toastId)&&(($=M.toggle)==null||$.call(M,k))})},P=k=>{var C,M;(M=(C=k.props)==null?void 0:C.onClose)==null||M.call(C,k.removalReason),k.isActive=!1},N=k=>{if(k==null)c.forEach(P);else{let C=c.get(k);C&&P(C)}m()},R=()=>{s-=i.length,i=[]},V=k=>{var C,M;let{toastId:$,updateId:W}=k.props,E=W==null;k.staleId&&c.delete(k.staleId),k.isActive=!0,c.set($,k),m(),t($u(k,E?"added":"updated")),E&&((M=(C=k.props).onOpen)==null||M.call(C))};return{id:n,props:l,observe:f,toggle:I,removeToast:N,toasts:c,clearQueue:R,buildToast:(k,C)=>{if(v(C))return;let{toastId:M,updateId:$,data:W,staleId:E,delay:_}=C,y=$==null;y&&s++;let T={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(C).filter(([A,w])=>w!=null)),toastId:M,updateId:$,data:W,isIn:!1,className:ta(C.className||l.toastClassName),progressClassName:ta(C.progressClassName||l.progressClassName),autoClose:C.isLoading?!1:HT(C.autoClose,l.autoClose),closeToast(A){c.get(M).removalReason=A,N(M)},deleteToast(){let A=c.get(M);if(A!=null){if(t($u(A,"removed")),c.delete(M),s--,s<0&&(s=0),i.length>0){V(i.shift());return}m()}}};T.closeButton=l.closeButton,C.closeButton===!1||na(C.closeButton)?T.closeButton=C.closeButton:C.closeButton===!0&&(T.closeButton=na(l.closeButton)?l.closeButton:!0);let b={content:k,props:T,staleId:E};l.limit&&l.limit>0&&s>l.limit&&y?i.push(b):is(_)?setTimeout(()=>{V(b)},_):V(b)},setProps(k){l=k},setToggle:(k,C)=>{let M=c.get(k);M&&(M.toggle=C)},isToastActive:k=>{var C;return(C=c.get(k))==null?void 0:C.isActive},getSnapshot:()=>a}}var Ue=new Map,qr=[],ra=new Set,JT=n=>ra.forEach(e=>e(n)),Bf=()=>Ue.size>0;function ZT(){qr.forEach(n=>zf(n.content,n.options)),qr=[]}var eb=(n,{containerId:e})=>{var t;return(t=Ue.get(e||1))==null?void 0:t.toasts.get(n)};function $f(n,e){var t;if(e)return!!((t=Ue.get(e))!=null&&t.isToastActive(n));let r=!1;return Ue.forEach(s=>{s.isToastActive(n)&&(r=!0)}),r}function tb(n){if(!Bf()){qr=qr.filter(e=>n!=null&&e.options.toastId!==n);return}if(n==null||qT(n))Ue.forEach(e=>{e.removeToast(n)});else if(n&&("containerId"in n||"id"in n)){let e=Ue.get(n.containerId);e?e.removeToast(n.id):Ue.forEach(t=>{t.removeToast(n.id)})}}var nb=(n={})=>{Ue.forEach(e=>{e.props.limit&&(!n.containerId||e.id===n.containerId)&&e.clearQueue()})};function zf(n,e){na(n)&&(Bf()||qr.push({content:n,options:e}),Ue.forEach(t=>{t.buildToast(n,e)}))}function rb(n){var e;(e=Ue.get(n.containerId||1))==null||e.setToggle(n.id,n.fn)}function qf(n,e){Ue.forEach(t=>{(e==null||!(e!=null&&e.containerId)||(e==null?void 0:e.containerId)===t.id)&&t.toggle(n,e==null?void 0:e.id)})}function sb(n){let e=n.containerId||1;return{subscribe(t){let r=YT(e,n,JT);Ue.set(e,r);let s=r.observe(t);return ZT(),()=>{s(),Ue.delete(e)}},setProps(t){var r;(r=Ue.get(e))==null||r.setProps(t)},getSnapshot(){var t;return(t=Ue.get(e))==null?void 0:t.getSnapshot()}}}function ib(n){return ra.add(n),()=>{ra.delete(n)}}function ob(n){return n&&(vn(n.toastId)||is(n.toastId))?n.toastId:Ff()}function os(n,e){return zf(n,e),e.toastId}function Vi(n,e){return{...e,type:e&&e.type||n,toastId:ob(e)}}function Oi(n){return(e,t)=>os(e,Vi(n,t))}function te(n,e){return os(n,Vi("default",e))}te.loading=(n,e)=>os(n,Vi("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function ab(n,{pending:e,error:t,success:r},s){let i;e&&(i=vn(e)?te.loading(e,s):te.loading(e.render,{...s,...e}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(h,f,m)=>{if(f==null){te.dismiss(i);return}let v={type:h,...a,...s,data:m},I=vn(f)?{render:f}:f;return i?te.update(i,{...v,...I}):te(I.render,{...v,...I}),m},c=At(n)?n():n;return c.then(h=>l("success",r,h)).catch(h=>l("error",t,h)),c}te.promise=ab;te.success=Oi("success");te.info=Oi("info");te.error=Oi("error");te.warning=Oi("warning");te.warn=te.warning;te.dark=(n,e)=>os(n,Vi("default",{theme:"dark",...e}));function lb(n){tb(n)}te.dismiss=lb;te.clearWaitingQueue=nb;te.isActive=$f;te.update=(n,e={})=>{let t=eb(n,e);if(t){let{props:r,content:s}=t,i={delay:100,...r,...e,toastId:e.toastId||n,updateId:Ff()};i.toastId!==n&&(i.staleId=n);let a=i.render||s;delete i.render,os(a,i)}};te.done=n=>{te.update(n,{progress:1})};te.onChange=ib;te.play=n=>qf(!0,n);te.pause=n=>qf(!1,n);function cb(n){var e;let{subscribe:t,getSnapshot:r,setProps:s}=x.useRef(sb(n)).current;s(n);let i=(e=x.useSyncExternalStore(t,r,r))==null?void 0:e.slice();function a(l){if(!i)return[];let c=new Map;return n.newestOnTop&&i.reverse(),i.forEach(h=>{let{position:f}=h.props;c.has(f)||c.set(f,[]),c.get(f).push(h)}),Array.from(c,h=>l(h[0],h[1]))}return{getToastToRender:a,isToastActive:$f,count:i==null?void 0:i.length}}function ub(n){let[e,t]=x.useState(!1),[r,s]=x.useState(!1),i=x.useRef(null),a=x.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:c,closeToast:h,onClick:f,closeOnClick:m}=n;rb({id:n.toastId,containerId:n.containerId,fn:t}),x.useEffect(()=>{if(n.pauseOnFocusLoss)return v(),()=>{I()}},[n.pauseOnFocusLoss]);function v(){document.hasFocus()||V(),window.addEventListener("focus",R),window.addEventListener("blur",V)}function I(){window.removeEventListener("focus",R),window.removeEventListener("blur",V)}function P(E){if(n.draggable===!0||n.draggable===E.pointerType){k();let _=i.current;a.canCloseOnClick=!0,a.canDrag=!0,_.style.transition="none",n.draggableDirection==="x"?(a.start=E.clientX,a.removalDistance=_.offsetWidth*(n.draggablePercent/100)):(a.start=E.clientY,a.removalDistance=_.offsetHeight*(n.draggablePercent===80?n.draggablePercent*1.5:n.draggablePercent)/100)}}function N(E){let{top:_,bottom:y,left:T,right:b}=i.current.getBoundingClientRect();E.nativeEvent.type!=="touchend"&&n.pauseOnHover&&E.clientX>=T&&E.clientX<=b&&E.clientY>=_&&E.clientY<=y?V():R()}function R(){t(!0)}function V(){t(!1)}function k(){a.didMove=!1,document.addEventListener("pointermove",M),document.addEventListener("pointerup",$)}function C(){document.removeEventListener("pointermove",M),document.removeEventListener("pointerup",$)}function M(E){let _=i.current;if(a.canDrag&&_){a.didMove=!0,e&&V(),n.draggableDirection==="x"?a.delta=E.clientX-a.start:a.delta=E.clientY-a.start,a.start!==E.clientX&&(a.canCloseOnClick=!1);let y=n.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;_.style.transform=`translate3d(${y},0)`,_.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function $(){C();let E=i.current;if(a.canDrag&&a.didMove&&E){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){s(!0),n.closeToast(!0),n.collapseAll();return}E.style.transition="transform 0.2s, opacity 0.2s",E.style.removeProperty("transform"),E.style.removeProperty("opacity")}}let W={onPointerDown:P,onPointerUp:N};return l&&c&&(W.onMouseEnter=V,n.stacked||(W.onMouseLeave=R)),m&&(W.onClick=E=>{f&&f(E),a.canCloseOnClick&&h(!0)}),{playToast:R,pauseToast:V,isRunning:e,preventExitTransition:r,toastRef:i,eventHandlers:W}}var hb=typeof window<"u"?x.useLayoutEffect:x.useEffect,Li=({theme:n,type:e,isLoading:t,...r})=>se.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...r});function db(n){return se.createElement(Li,{...n},se.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function fb(n){return se.createElement(Li,{...n},se.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function pb(n){return se.createElement(Li,{...n},se.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function mb(n){return se.createElement(Li,{...n},se.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function gb(){return se.createElement("div",{className:"Toastify__spinner"})}var sa={info:fb,warning:db,success:pb,error:mb,spinner:gb},_b=n=>n in sa;function yb({theme:n,type:e,isLoading:t,icon:r}){let s=null,i={theme:n,type:e};return r===!1||(At(r)?s=r({...i,isLoading:t}):x.isValidElement(r)?s=x.cloneElement(r,i):t?s=sa.spinner():_b(e)&&(s=sa[e](i))),s}var vb=n=>{let{isRunning:e,preventExitTransition:t,toastRef:r,eventHandlers:s,playToast:i}=ub(n),{closeButton:a,children:l,autoClose:c,onClick:h,type:f,hideProgressBar:m,closeToast:v,transition:I,position:P,className:N,style:R,progressClassName:V,updateId:k,role:C,progress:M,rtl:$,toastId:W,deleteToast:E,isIn:_,isLoading:y,closeOnClick:T,theme:b,ariaLabel:A}=n,w=cn("Toastify__toast",`Toastify__toast-theme--${b}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":$},{"Toastify__toast--close-on-click":T}),me=At(N)?N({rtl:$,position:P,type:f,defaultClassName:w}):cn(w,N),Fe=yb(n),B=!!M||!c,ue={closeToast:v,type:f,theme:b},re=null;return a===!1||(At(a)?re=a(ue):x.isValidElement(a)?re=x.cloneElement(a,ue):re=KT(ue)),se.createElement(I,{isIn:_,done:E,position:P,preventExitTransition:t,nodeRef:r,playToast:i},se.createElement("div",{id:W,tabIndex:0,onClick:h,"data-in":_,className:me,...s,style:R,ref:r,..._&&{role:C,"aria-label":A}},Fe!=null&&se.createElement("div",{className:cn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!y})},Fe),Uf(l,n,!e),re,!n.customProgressBar&&se.createElement(QT,{...k&&!B?{key:`p-${k}`}:{},rtl:$,theme:b,delay:c,isRunning:e,isIn:_,closeToast:v,hide:m,type:f,className:V,controlledProgress:B,progress:M||0})))},wb=(n,e=!1)=>({enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:e}),Eb=GT(wb("bounce",!0)),Tb={position:"top-right",transition:Eb,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:n=>n.altKey&&n.code==="KeyT"};function bb(n){let e={...Tb,...n},t=n.stacked,[r,s]=x.useState(!0),i=x.useRef(null),{getToastToRender:a,isToastActive:l,count:c}=cb(e),{className:h,style:f,rtl:m,containerId:v,hotKeys:I}=e;function P(R){let V=cn("Toastify__toast-container",`Toastify__toast-container--${R}`,{"Toastify__toast-container--rtl":m});return At(h)?h({position:R,rtl:m,defaultClassName:V}):cn(V,ta(h))}function N(){t&&(s(!0),te.play())}return hb(()=>{var R;if(t){let V=i.current.querySelectorAll('[data-in="true"]'),k=12,C=(R=e.position)==null?void 0:R.includes("top"),M=0,$=0;Array.from(V).reverse().forEach((W,E)=>{let _=W;_.classList.add("Toastify__toast--stacked"),E>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=C?"top":"bot");let y=M*(r?.2:1)+(r?0:k*E);_.style.setProperty("--y",`${C?y:y*-1}px`),_.style.setProperty("--g",`${k}`),_.style.setProperty("--s",`${1-(r?$:0)}`),M+=_.offsetHeight,$+=.025})}},[r,c,t]),x.useEffect(()=>{function R(V){var k;let C=i.current;I(V)&&((k=C.querySelector('[tabIndex="0"]'))==null||k.focus(),s(!1),te.pause()),V.key==="Escape"&&(document.activeElement===C||C!=null&&C.contains(document.activeElement))&&(s(!0),te.play())}return document.addEventListener("keydown",R),()=>{document.removeEventListener("keydown",R)}},[I]),se.createElement("section",{ref:i,className:"Toastify",id:v,onMouseEnter:()=>{t&&(s(!1),te.pause())},onMouseLeave:N,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},a((R,V)=>{let k=V.length?{...f}:{...f,pointerEvents:"none"};return se.createElement("div",{tabIndex:-1,className:P(R),"data-stacked":t,style:k,key:`c-${R}`},V.map(({content:C,props:M})=>se.createElement(vb,{...M,stacked:t,collapseAll:N,isIn:l(M.toastId,M.containerId),key:`t-${M.key}`},C)))}))}const zu=async(n,e)=>{if(!(n!=null&&n.uid))throw new Error("User UID is missing");const t=Ni(hi,"users",n.uid);await tl(t,{uid:n.uid,email:n.email,...e,createdAt:new Date().toISOString()})},Ib=()=>{const[n,e]=x.useState(!1),[t,r]=x.useState(!1),s=Wr(),[i,a]=x.useState(!1),l=_=>te.success(_),c=_=>te.error(_),h=()=>{P(""),k({}),e(!1)},f=gt(),{email:m,password:v}=f.state||{},[I,P]=x.useState(""),[N,R]=x.useState({fullName:"",email:"",username:"",password:"",confirmPassword:"",gender:"",agree:!1}),[V,k]=x.useState({}),C="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-right placeholder:text-gray-400 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400";function M(_){const{name:y,type:T,value:b,checked:A}=_.target;R(w=>({...w,[y]:T==="checkbox"?A:b})),k(w=>({...w,[y]:void 0}))}x.useEffect(()=>{(async()=>{try{const y=await D0(dt);if(!y||!y.user)return;const T=y.user;await zu(T,{name:T.displayName,photoURL:T.photoURL,provider:"google",gender:"",agree:!0}),e(!0),l("✅ تم تسجيل الدخول باستخدام Google بنجاح! سيتم تحويلك..."),setTimeout(()=>s("/login"),3e3)}catch(y){y.code!=="auth/no-auth-event"&&(console.error(y),c("❌ فشل إتمام تسجيل الدخول باستخدام Google."))}})()},[s]);const $=_=>{console.error("Firebase Error:",_);let y="❌ حدث خطأ غير متوقع. حاول مرة أخرى.";switch(_.code){case"auth/email-already-in-use":y="❌ هذا البريد الإلكتروني مستخدم بالفعل.";break;case"auth/invalid-email":y="❌ البريد الإلكتروني غير صالح.";break;case"auth/weak-password":y="❌ كلمة المرور ضعيفة جدًا. استخدم 6 أحرف على الأقل.";break;case"auth/operation-not-allowed":y="❌ التسجيل باستخدام البريد الإلكتروني غير مفعل.";break;default:y="❌ حدث خطأ أثناء إنشاء الحساب."}P(y),c(y)},W=async _=>{_.preventDefault(),h(),r(!0),a(!0);const{email:y,password:T,confirmPassword:b,username:A,fullName:w,gender:me,agree:Fe}=N;if(T!==b){k({confirmPassword:"كلمات المرور غير متطابقة."}),a(!1);return}try{const ue=(await t0(dt,y,T)).user;await zu(ue,{fullName:w,username:A,gender:me,agree:Fe,provider:"email"}),e(!0),l("✅ تم إنشاء الحساب بنجاح! سيتم تحويلك إلى صفحة تسجيل الدخول..."),setTimeout(()=>s("/login",{state:{email:y,password:T}}),3e3)}catch(B){$(B)}finally{a(!1)}},E=async()=>{h(),a(!0);try{const _=new rt;_.setCustomParameters({prompt:"consent"}),await k0(dt,_)}catch(_){console.error(_),c("❌ فشل بدء تسجيل الدخول باستخدام Google."),a(!1)}};return p.jsxs(p.Fragment,{children:[p.jsx("button",{type:"submit",disabled:i,children:i?"جاري التسجيل...":"تسجيل"}),p.jsxs("div",{className:"relative min-h-screen bg-gray-100 font-[Tajawal]",dir:"rtl",lang:"ar",children:[p.jsx("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[...Array(12)].map((_,y)=>p.jsx("div",{className:"absolute w-2 h-2 bg-blue-300 rounded-full animate-pulse",style:{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${4+Math.random()*4}s`}},y))}),p.jsx("div",{className:"flex items-center justify-center sm:px-6 md:px-8 lg:px-12 min-h-[70vh]",children:p.jsxs("div",{className:"w-full sm:w-[100%] md:w-[80%] lg:w-[60%] max-w-2xl bg-white rounded-2xl shadow-xl p-2 sm:p-6 md:p-6 lg:p-8 xl:p-10 my-10 sm:my-6 md:my-10 lg:my-14",children:[p.jsx(Wt,{to:"/main",children:p.jsx("img",{src:Di,alt:"plrn Logo",className:"w-20 mx-auto mb-4 cursor-pointer"})}),p.jsxs("h2",{className:"flex flex-wrap justify-center items-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800 gap-1",children:["إنشاء ",p.jsx("span",{className:"text-green-500",children:"حساب"})," جديد"]}),n&&p.jsx("div",{className:"text-green-600 text-center font-bold text-lg mb-4",children:"تم إنشاء الحساب بنجاح!..."}),p.jsxs("form",{onSubmit:W,children:[p.jsxs("div",{className:"space-y-4 mb-6",children:[p.jsx("input",{name:"fullName",value:N.fullName,onChange:M,type:"text",placeholder:"الاسم الكامل",required:!0,className:C}),p.jsx("input",{name:"email",value:N.email,onChange:M,type:"email",placeholder:"البريد الإلكتروني",required:!0,className:C}),V.email&&p.jsx("div",{className:"text-red-500 text-sm mt-1 text-right",children:V.email}),p.jsx("input",{name:"username",value:N.username,onChange:M,type:"text",placeholder:"اسم المستخدم",required:!0,className:C}),p.jsx("input",{name:"password",value:N.password,onChange:M,type:"password",placeholder:"كلمة المرور",required:!0,className:C}),V.password&&p.jsx("div",{className:"text-red-500 text-sm mt-1 text-right",children:V.password}),p.jsx("input",{name:"confirmPassword",value:N.confirmPassword,onChange:M,type:"password",placeholder:"تأكيد كلمة المرور",required:!0,className:C}),V.confirmPassword&&p.jsx("div",{className:"text-red-500 text-sm mt-1 text-right",children:V.confirmPassword}),p.jsxs("select",{name:"gender",value:N.gender,onChange:M,required:!0,className:C,children:[p.jsx("option",{value:"",children:"اختر الجنس"}),p.jsx("option",{value:"male",children:"ذكر"}),p.jsx("option",{value:"female",children:"أنثى"})]})]}),p.jsxs("div",{className:"space-y-6",children:[p.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[p.jsx("input",{id:"terms",name:"agree",type:"checkbox",checked:N.agree,onChange:M,required:!0,className:"accent-green-500"}),p.jsxs("label",{htmlFor:"terms",className:"flex items-center gap-1 text-[16px] font-bold",children:["أوافق على"," ",p.jsx("a",{href:"/terms",className:"relative inline-block group font-medium overflow-hidden",children:p.jsxs("div",{className:"px-1 py-0.5 relative",children:[p.jsxs("div",{className:"relative z-10 text-[#22c55e] transition-colors duration-500 group-hover:text-[#1565c0] text-[16px] font-bold",children:["الشروط ",p.jsx("span",{children:"و"}),"الأحكام"]}),p.jsx("div",{className:"absolute bottom-0 right-0 h-[2px] w-0 bg-[#1565c0] transition-all duration-500 group-hover:w-[85%]"})]})})]})]}),V.general&&p.jsx("div",{className:"text-red-500 text-sm text-center",children:V.general}),p.jsx("button",{type:"submit",disabled:i,className:`w-full py-3 bg-green-500 text-white font-bold rounded-full transition-all duration-300 hover:bg-green-600 hover:scale-[1.02] ${i?"opacity-50 cursor-not-allowed":""}`,children:i?"جارٍ الإنشاء...":"إنشاء الحساب"}),p.jsxs("div",{className:"relative text-center",children:[p.jsx("span",{className:"bg-white px-4 text-gray-500 z-10 relative",children:"أو"}),p.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-px bg-gray-300 -z-0"})]}),p.jsxs("button",{type:"button",onClick:E,className:"w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-full bg-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[p.jsx("img",{src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:"Google logo",className:"w-5 h-5"}),p.jsx("span",{className:"text-sm font-medium text-gray-700",children:"المتابعة باستخدام Google"})]}),p.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 text-[16px] text-gray-600 font-bold",children:[p.jsx("div",{className:"whitespace-nowrap",children:"لديك حساب بالفعل؟"}),p.jsx("a",{href:"/login",className:"relative inline-block group font-medium overflow-hidden",children:p.jsxs("div",{className:"px-3 py-1 relative",children:[p.jsx("div",{className:"relative z-10 flex items-center gap-1 text-[#22c55e] transition-colors duration-500 group-hover:text-[#1565c0]",children:"تسجيل الدخول"}),p.jsx("div",{className:"absolute bottom-0 right-3 h-[2px] w-0 bg-[#1565c0] transition-all duration-500 group-hover:w-[83.5%]"})]})})]})]})]})]})})]}),t&&I&&p.jsx("div",{className:"text-red-500 text-sm mt-2 text-center",children:I}),p.jsx(bb,{position:"top-center",autoClose:3e3})]})},xb=({toasts:n,removeToast:e})=>(x.useEffect(()=>{const t=n.map(r=>setTimeout(()=>e(r.id),3e3));return()=>t.forEach(clearTimeout)},[n,e]),p.jsx("div",{className:"fixed top-6 right-6 z-50 flex flex-col gap-4 items-end",dir:"rtl",children:n.map(t=>{const r=t.type==="success"?"bg-green-500":t.type==="error"?"bg-red-500":"bg-gray-700";return p.jsx("div",{className:`px-4 py-3 rounded-lg text-white shadow-lg transition-all duration-300 ${r}`,children:p.jsxs("div",{className:"flex items-center justify-between gap-4",children:[p.jsx("span",{className:"text-sm text-black font-medium",children:t.message}),p.jsx("button",{onClick:()=>e(t.id),className:"text-black hover:text-gray-200 text-lg font-bold",children:"×"})]})},t.id)})})),Rb=()=>{const[n,e]=x.useState(""),[t,r]=x.useState([]);function s(l,c="success"){const h=Date.now();r(f=>[...f,{id:h,message:l,type:c}])}function i(l){r(c=>c.filter(h=>h.id!==l))}async function a(l){l.preventDefault();try{await e0(dt,n),s("تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني.","success"),e("")}catch(c){c.code==="auth/user-not-found"?s("لا يوجد مستخدم بهذا البريد الإلكتروني.","error"):c.code==="auth/invalid-email"?s("البريد الإلكتروني غير صالح.","error"):s("حدث خطأ أثناء إرسال الرابط. حاول مرة أخرى.","error")}}return p.jsxs(p.Fragment,{children:[p.jsx(xb,{toasts:t,removeToast:i}),p.jsxs("div",{className:"relative min-h-screen flex items-center justify-center bg-green-50 px-6 font-[Cairo]",dir:"rtl",lang:"ar",children:[p.jsx("div",{className:"absolute inset-0 -z-10 overflow-hidden pointer-events-none",children:[...Array(12)].map((l,c)=>p.jsx("div",{className:"absolute w-2.5 h-2.5 bg-gradient-to-b from-green-200 to-green-300 rounded-full opacity-60 animate-[drift_8s_ease-in-out_infinite]",style:{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${4+Math.random()*4}s`}},c))}),p.jsxs("div",{className:"relative w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 text-center animate-[fadeSlideUp_0.8s_ease-out_forwards]",children:[p.jsxs("div",{className:"absolute -top-8 -left-8 w-36 h-36 pointer-events-none z-0",children:[p.jsx("div",{className:"absolute w-4.5 h-4.5 bg-gradient-to-b from-green-200 to-green-300 rounded-md shadow-md animate-[floatStar_6s_ease-in-out_infinite] rotate-[18deg]",style:{top:"12px",left:"8px"}}),p.jsx("div",{className:"absolute w-3 h-3 bg-gradient-to-b from-green-300 to-green-400 rounded-full shadow-md animate-[floatStar_6s_ease-in-out_infinite]",style:{top:"24px",left:"86px"}}),p.jsx("div",{className:"absolute w-5.5 h-5.5 bg-gradient-to-b from-green-100 to-green-300 rounded-md shadow-md animate-[floatStar_6s_ease-in-out_infinite]",style:{top:"62px",left:"42px"}})]}),p.jsx(Wt,{to:"/main",children:p.jsx("img",{src:Di,alt:"plrn Logo",className:"w-28 mx-auto mb-5"})}),p.jsxs("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:["نسيت ",p.jsx("span",{className:"text-green-400",children:"كلمة "}),"المرور؟"]}),p.jsxs("form",{onSubmit:a,children:[p.jsx("div",{className:"mb-4",children:p.jsx("input",{name:"email",value:n,onChange:l=>e(l.target.value),type:"email",placeholder:"أدخل بريدك الإلكتروني لاستعادة كلمة المرور",required:!0,className:"w-full px-4 py-3 border border-green-300 rounded-lg bg-white text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"})}),p.jsx("button",{type:"submit",className:"w-1/2 py-3 bg-gradient-to-r from-green-500 to-green-400 text-white font-bold rounded-lg shadow-md hover:from-green-600 hover:to-green-500 hover:scale-[1.02] transition-all duration-300",children:"إرسال رابط الاستعادة"}),p.jsx("div",{className:"mt-6 text-sm text-gray-600",children:p.jsxs("span",{children:["تذكرت كلمة المرور؟"," ",p.jsx(Wt,{to:"/login",className:"text-green-500 font-bold hover:underline",children:"تسجيل الدخول"})]})})]})]})]})]})},Ab="_container_ngeif_45",Sb="_section_ngeif_59",Cb="_sectionVisible_ngeif_81",Pb="_sectionHidden_ngeif_93",kb="_header_ngeif_107",Nb="_title_ngeif_121",Db="_bounceText_ngeif_159",Vb="_bounceButton_ngeif_305",Ob="_subtitle_ngeif_169",Lb="_cardGrid_ngeif_197",Mb="_card_ngeif_197",jb="_cardIcon_ngeif_265",Ub="_cardTitle_ngeif_277",Fb="_cardDescription_ngeif_291",Bb="_gradientYellow_ngeif_343",$b="_gradientGreen_ngeif_351",zb="_gradientBlue_ngeif_359",qb="_gradientPink_ngeif_367",ge={container:Ab,section:Sb,sectionVisible:Cb,sectionHidden:Pb,header:kb,title:Nb,bounceText:Db,bounceButton:Vb,subtitle:Ob,cardGrid:Lb,card:Mb,cardIcon:jb,cardTitle:Ub,cardDescription:Fb,gradientYellow:Bb,gradientGreen:$b,gradientBlue:zb,gradientPink:qb};function as(){return p.jsx("div",{children:p.jsx("div",{className:"absolute inset-0 z-0 pointer-events-none",children:[...Array(25)].map((n,e)=>{const t=15+Math.random()*25,r=Math.random()*window.innerWidth,s=Math.random()*window.innerHeight,i=["bg-blue-300","bg-green-300","bg-yellow-300","bg-pink-300","bg-purple-300"];return p.jsx("span",{className:`absolute rounded-full ${i[e%i.length]} opacity-50`,style:{width:`${t}px`,height:`${t}px`,left:`${r}px`,top:`${s}px`,animation:`floatBubble ${5+Math.random()*5}s ease-in-out infinite alternate`}},e)})})})}function Hb(){const[n,e]=x.useState("hero"),[t,r]=x.useState(!1),s=Kp(),[i,a]=x.useState("#E53E3E"),l=Wr(),c=[{id:"hero",name:"الرئيسية"},{id:"programs",name:"البرامج التعليمية"},{id:"about",name:"عن المنصة"},{id:"faq",name:"الأسئلة الشائعة"},{id:"footer",name:"تواصل معنا"}];x.useEffect(()=>{const f=()=>{c.forEach(m=>{const v=document.getElementById(m.id);if(v){const I=v.getBoundingClientRect();I.top<=100&&I.bottom>=100&&e(m.id)}})};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]),x.useEffect(()=>{s.start({rotate:[0,15,-15,0],y:[0,-10,10,0],transition:{repeat:1/0,duration:3,ease:"easeInOut"}});const f=setInterval(()=>{a(`#${Math.floor(Math.random()*16777215).toString(16)}`)},2e3);return()=>clearInterval(f)},[s]);const h=f=>{const m=document.getElementById(f);m&&m.scrollIntoView({behavior:"smooth"}),r(!1)};return p.jsxs("header",{className:"fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-lg rounded-b-xl",children:[p.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex justify-between items-center",children:[p.jsx(kn.div,{className:"flex items-center cursor-pointer select-none mr-12",animate:{x:[-5,5,-5,0]},transition:{repeat:1/0,duration:4,ease:"easeInOut"},children:p.jsx("img",{src:Di,alt:"بليرن",className:"w-50 h-16 mr-3 animate-float-slow"})}),p.jsxs("div",{className:"hidden md:flex gap-6 items-center font-Tajawal",children:[c.map(f=>p.jsx(kn.button,{onClick:()=>h(f.id),whileHover:{scale:1.1,rotate:2},style:{color:n===f.id?"#E53E3E":"#4A5568"},className:"font-semibold text-lg cursor-pointer transition-colors duration-300",children:f.name},f.id)),p.jsx(kn.a,{onClick:()=>l("/login"),animate:s,whileHover:{scale:1.2,rotate:0},className:"ml-6 px-6 py-2 rounded-full bg-gradient-to-r cursor-pointer from-green-400 via-blue-400 to-green-300 text-white font-bold shadow-lg hover:shadow-xl transition-all",children:"تسجيل الدخول"})]}),p.jsx("div",{className:"md:hidden",children:p.jsx("button",{onClick:()=>r(!t),className:"text-gray-700 text-3xl focus:outline-none",children:t?"✖":"☰"})})]}),t&&p.jsx(kn.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},transition:{duration:.5},className:"md:hidden bg-white/80 backdrop-blur-md rounded-b-xl",children:p.jsx("div",{className:"flex flex-col items-center gap-4 py-6",children:c.map(f=>p.jsx(kn.button,{onClick:()=>h(f.id),whileHover:{scale:1.05,rotate:[0,5,-5,0]},style:{color:i},className:"font-semibold text-lg transition-colors duration-300",children:f.name},f.id))})})]})}const Wb="/assets/logo_v-DKK14XaC.mp4";function Gb(){const[n,e]=x.useState(!1),[t,r]=x.useState(!1),[s,i]=x.useState(!1),[a,l]=x.useState(!1),c=Wr();return x.useEffect(()=>{const h=[];return h.push(setTimeout(()=>e(!0),2500)),h.push(setTimeout(()=>r(!0),2900)),h.push(setTimeout(()=>i(!0),3e3)),h.push(setTimeout(()=>l(!0),300)),()=>h.forEach(clearTimeout)},[]),p.jsxs("section",{className:"relative w-full min-h-screen overflow-hidden font-tajawal flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 pt-24 md:pt-0",children:[p.jsxs("div",{className:"relative z-10 flex flex-col items-center  text-center md:text-right max-w-xl md:max-w-2xl space-y-6 md:space-y-8 mt-12 md:mt-0",children:[p.jsx("h1",{className:`text-3xl md:text-4xl font-extrabold transform transition-all duration-700 ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:p.jsx("div",{className:"text-green-500 inline-block animate-bounce",children:"منصة تعليمية تفاعلية"})}),p.jsx("p",{className:`text-lg md:text-1xl text-black leading-relaxed max-w-md md:max-w-lg transform transition-all duration-700 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-6"} font-['Cairo_Play']`,children:"منصتنا التعليمية التفاعلية هي الأولى من نوعها في السودان، حيث نحوّل التعلم إلى تجربة مليئة بالمرح والإبداع. من خلال ألعاب تعليمية مبتكرة، نمنح الطلاب الفرصة لاكتشاف المعرفة بطريقة شيقة، تحفّز الفضول وتغذي حب الاستطلاع لديهم. هنا، تتحوّل المناهج إلى مغامرات تعليمية ممتعة، ونصنع جيلًا مبدعًا يتعلّم بشغف وينمو بوعي ومعرفة بأسلوب جديد كليًا."}),p.jsxs("div",{className:`flex flex-col md:flex-row gap-4 md:gap-6 transform transition-all duration-700 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:[p.jsx("a",{onClick:()=>c("/login"),className:"px-8 py-4 bg-green-500 text-white cursor-pointer font-bold rounded-full shadow-lg hover:scale-105 hover:rotate-3 transition-transform duration-500 animate-bounce-slow text-center",children:"ابدأ اللعب الآن"}),p.jsx("a",{href:"#about",className:"px-8 py-4 border-2 border-blue-500 text-blue-600 font-bold rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-500 text-center",children:"تعرف أكثر"})]})]}),p.jsx("div",{className:`relative z-10 mb-12 md:mb-0 transform transition-all duration-700 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:p.jsx("video",{src:Wb,autoPlay:!0,loop:!0,muted:!0,className:"w-72 sm:w-80 md:w-96 rounded-lg shadow-lg"})}),p.jsx(as,{})]})}function Kb(){const n=[{title:"تعليم تفاعلي ممتع",description:"ألعاب تعليمية ودروس تفاعلية تحول التعلم إلى مغامرة مشوقة تثري معارف الطفل",icon:"https://cdn-icons-png.flaticon.com/512/4333/4333609.png",circle:"bg-yellow-200"},{title:"متابعة أدائك ",description:"لوحة تحكم ذكية تمكنك من متابعة تقدمك بدقة وسهولة",icon:"https://cdn-icons-png.flaticon.com/512/1827/1827504.png",circle:"bg-green-200"},{title:"مناهج سودانية متكاملة",description:"محتوى تعليمي عالي الجودة مصمم وفق أحدث المناهج السودانية",icon:"https://img.icons8.com/?size=100&id=9Cnmfi1SKARM&format=png&color=000000",circle:"bg-blue-200"},{title:"بيئة آمنة ومحمية",description:"منصة خالية من المشتتات والإعلانات تضمن تجربة تعليمية آمنة",icon:"https://cdn-icons-png.flaticon.com/512/2889/2889676.png",circle:"bg-pink-200"},{title:"تعلم في أي وقت",description:"دروس متاحة 24/7 تتناسب مع جدولكم اليومي ووتيرة تعلم سريعة",icon:"https://img.icons8.com/?size=100&id=hpibXgnvscd8&format=png&color=000000",circle:"bg-purple-200"},{title:"تنمية المهارات",description:"أنشطة تعزز التفكير النقدي والإبداعي وتطور مهاراتك ",icon:"https://img.icons8.com/?size=100&id=w8rjZ3tt8DQG&format=png&color=000000",circle:"bg-teal-200"}],e=x.useRef(null),[t,r]=x.useState(!1);return x.useEffect(()=>{if(window.innerWidth<768){r(!0);return}const s=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(r(!0),s.unobserve(a.target))})},{threshold:.3});return e.current&&s.observe(e.current),()=>s.disconnect()},[]),p.jsxs("section",{ref:e,className:"w-full min-h-screen py-20 px-6 bg-gray-50 font-tajawal relative overflow-hidden",children:[p.jsxs("div",{className:`text-center mb-16 relative z-10 transition-all duration-700 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}`,children:[p.jsxs("h1",{className:"text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent",children:["لماذا تعد"," ",p.jsx("div",{className:"text-yellow-400 drop-shadow-md animate-bounce",children:"بلــــــيرن"})," ","الخيار الأمثل لتعلمك"]}),p.jsx("p",{className:"text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed",children:"نُقدّم تجربة تعليمية آمنة وممتعة، تمزج بين الإبداع والتكنولوجيا، لتنمية مهارات طفلك بطريقة تفاعلية ومشوقة."})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10",children:n.map((s,i)=>p.jsxs("div",{className:`relative p-8 rounded-3xl shadow-lg backdrop-blur-xl bg-white/40 border border-white/20 hover:border-transparent hover:shadow-2xl transition-all duration-500 group
              ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}
            `,style:{transitionDelay:`${i*150}ms`,animation:`floatCard ${2+i*.5}s ease-in-out infinite alternate`},children:[p.jsx("div",{className:`w-20 h-20 mx-auto flex items-center justify-center rounded-full shadow-md mb-6 transform group-hover:scale-110 transition-transform duration-500 ${s.circle}`,children:p.jsx("img",{src:s.icon,alt:s.title,className:"w-12 h-12"})}),p.jsx("h2",{className:"text-xl md:text-2xl font-bold text-center mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300",children:s.title}),p.jsx("p",{className:"text-gray-700 text-center leading-relaxed max-w-xs mx-auto",children:s.description}),p.jsx("span",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 opacity-0 group-hover:opacity-20 transition-opacity duration-500"})]},i))}),p.jsx(as,{}),p.jsx("style",{children:`
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
        `})]})}function Qb(){const[n,e]=x.useState(null),[t,r]=x.useState(!1),s=x.useRef(null),i=[{question:"ما هي الفئة العمرية المناسبة للمنصة؟",answer:"المنصة مناسبة لجميع الاعمار، حيث تم تصميم المحتوى بعناية ليناسب مختلف المراحل العمرية."},{question:"كيف يمكنني متابعة تقدمي  التعليمي؟",answer:"نوفر لوحة تحكم ذكية  تمكنك من متابعة تقدمك  بسهولة، وعرض النتائج والتقارير الشهرية."},{question:"كيف يمكنني كسب النقاط وتحقيق الإنجازات على المنصة؟",answer:"ستتمكن من اكتساب نقاط وإنجازات مع كل درس أو لعبة تكملها، مما يحفز التعلم ويجعل كل تجربة تعليمية ممتعة ومثيرة."},{question:"هل المحتوى متوافق مع المناهج الدراسية؟",answer:"نعم، المحتوى التعليمي مصمم وفق المناهج الدراسية السودانية لدي وزارة التربية والتعليم لضمان الاستفادة القصوى وتحقيق التعلم الفعّال."},{question:"هل كل محتوى المنصة حصري؟",answer:"نعم، جميع الألعاب والدروس التعليمية مصممة حصريًا لتقديم تجربة تفاعلية معتمدة علي الالعاب."}],a=l=>{e(n===l?null:l)};return x.useEffect(()=>{const l=new IntersectionObserver(c=>{c.forEach(h=>{h.isIntersecting&&(r(!0),l.unobserve(h.target))})},{threshold:.3});return s.current&&l.observe(s.current),()=>l.disconnect()},[]),p.jsxs("section",{ref:s,className:"w-full min-h-screen py-16 px-6 bg-gray-50 font-tajawal relative overflow-hidden",children:[p.jsxs("div",{className:`text-center mb-12 relative z-10 transition-all duration-700 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}`,children:[p.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold mb-6 text-black",children:"الأسئلة الشائعة"}),p.jsx("p",{className:"text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed",children:"نعرف أنكم قد تتساءلون عن بعض التفاصيل، لذلك جمعنا أكثر الأسئلة تكرارًا هنا."})]}),p.jsx("div",{className:"max-w-4xl mx-auto space-y-4 relative z-10",children:i.map((l,c)=>{const h=n===c;return p.jsxs("div",{className:`relative border border-gray-300 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 transform ${h?"scale-105 shadow-2xl":"hover:scale-102 hover:shadow-xl"} ${t?"opacity-100 translate-x-0":"opacity-0 translate-x-12"} transition-all duration-700 delay-${c*100}`,children:[p.jsxs("button",{onClick:()=>a(c),className:"w-full flex justify-between items-center px-6 py-4 bg-white text-right text-black font-semibold text-lg md:text-xl focus:outline-none transition-all duration-300",children:[l.question,p.jsx("span",{className:`ml-4 transform transition-transform duration-500 ${h?"rotate-180":"rotate-0"} inline-block`,children:"▼"})]}),p.jsx("div",{className:"px-6 py-4 bg-gray-50 overflow-hidden transition-all duration-500",style:{maxHeight:h?"500px":"0px",opacity:h?1:0,transform:h?"translateX(0)":"translateX(50px)"},children:p.jsx("p",{className:"text-gray-700 leading-relaxed",children:l.answer})})]},c)})}),p.jsx(as,{})]})}function Xb(){const n=[{icon:"https://cdn-icons-png.flaticon.com/512/733/733585.png",url:"https://wa.me/+249 99 792 2457",alt:"WhatsApp"},{icon:"https://cdn-icons-png.flaticon.com/512/2111/2111646.png",url:"https://t.me/Mohamed_albasher",alt:"Telegram"},{icon:"https://cdn-icons-png.flaticon.com/512/733/733547.png",url:"https://facebook.com",alt:"Facebook"},{icon:"https://cdn-icons-png.flaticon.com/512/561/561127.png",url:"mailto:info@Plarn.com",alt:"Email"}],e=[{name:"الرئيسية",href:"#hero"},{name:"البرامج التعليمية",href:"#programs"},{name:"عن المنصة",href:"#about"},{name:"تواصل معنا",href:"#contact"}],t=[{name:"الحاسوب",href:"#arabic"},{name:"الإسعافات الأولية",href:"#science"},{name:"الرياضيات",href:"#math"},{name:"الفيزياء",href:"#english"}],r=x.useRef(null),[s,i]=x.useState(!1);return x.useEffect(()=>{const a=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&(i(!0),a.unobserve(c.target))})},{threshold:.3});return r.current&&a.observe(r.current),()=>a.disconnect()},[]),p.jsxs("footer",{ref:r,className:`relative w-full bg-gradient-to-b from-gray-50 to-gray-100 font-tajawal overflow-hidden py-16 px-6 transition-all duration-700 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}`,children:[p.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-3xl font-extrabold mb-4 text-black",children:p.jsx("span",{className:"inline-block animate-bounce-slow",children:"بلــــــيرن"})}),p.jsx("p",{className:"text-gray-700 mb-6 leading-relaxed",children:"منصة تعليمية تفاعلية مبتكرة تقدم تجربة تعلم عبر الالعاب مصممة لتنمية مهاراتك بطريقة إبداعية."}),p.jsx("div",{className:"flex space-x-6 mt-4",children:n.map((a,l)=>p.jsx("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:"transform transition duration-500 hover:scale-125 hover:-translate-y-1 animate-icon-bounce",children:p.jsx("img",{src:a.icon,alt:a.alt,className:"w-12 h-12"})},l))})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-2xl font-bold mb-4 text-black",children:"روابط سريعة"}),p.jsx("ul",{className:"space-y-2 text-gray-700",children:e.map((a,l)=>p.jsx("li",{children:p.jsx("a",{href:a.href,className:"relative inline-block px-2 py-1 hover:text-green-500 transition-colors before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-green-500 before:transition-all hover:before:w-full",children:a.name})},l))})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-2xl font-bold mb-4 text-black",children:"البرامج التعليمية"}),p.jsx("ul",{className:"space-y-2 text-gray-700",children:t.map((a,l)=>p.jsx("li",{children:p.jsx("a",{href:a.href,className:"relative inline-block px-2 py-1 hover:text-green-500 transition-colors before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-green-500 before:transition-all hover:before:w-full",children:a.name})},l))})]})]}),p.jsxs("div",{className:"mt-16 border-t border-gray-300 pt-6 text-center text-gray-600 space-y-2",children:[p.jsx("p",{className:"text-lg font-semibold",children:"24997922457+ | info@Plarn.com"}),p.jsx("p",{children:"© 2025 بلــــــيرن. جميع الحقوق محفوظة."}),p.jsx("div",{className:"flex justify-center space-x-6 mt-2",children:p.jsx("a",{href:"#privacy",className:"hover:text-green-500 transition-colors",children:"سياسة الخصوصية"})})]}),p.jsx(as,{})]})}function qu(){const n=[{title:"الحاسوب",description:"نطلق في عالم التكنولوجيا مع مناهج الحاسوب المختلفة، واستمتع بتحديات تفاعلية تكسبك نقاطًا ومهارات أساسية تفتح لك أبواب المستقبل الرقمي.",icon:"https://img.icons8.com/?size=100&id=XKASq08BL6br&format=png&color=000000",gradient:ge.gradientYellow},{title:"الإسعافات الأولية",description:"استعد لتحديات الإسعافات الأولية وتعلّم مهارات الحياة الأساسية، اكسب نقاطك مع كل إنقاذ وكن البطل القادر على التعامل مع أي موقف طارئ بثقة.",icon:"https://img.icons8.com/?size=100&id=kP6pGQWbmasY&format=png&color=000000",gradient:ge.gradientGreen},{title:"الرياضيات",description:"اكتشف مغامرة الأرقام والمنطق! حل الألغاز واكسب نقاطًا بينما تتعلّم بطريقة ممتعة تجعل كل عملية حسابية رحلة شيقة.",icon:"https://img.icons8.com/?size=100&id=80258&format=png&color=000000",gradient:ge.gradientBlue},{title:"الفيزياء",description:"استكشف أسرار الكون من خلال تجارب علمية تفاعلية، أكسب نقاطًا مع كل تجربة واكتشف روعة العلوم في حياتك اليومية بأسلوب ممتع ومشوق.",icon:"https://img.icons8.com/?size=100&id=RPHZmB5ERyjp&format=png&color=000000",gradient:ge.gradientPink}],e=x.useRef(null),[t,r]=x.useState(!1);return x.useEffect(()=>{const s=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(r(!0),s.unobserve(a.target))})},{threshold:.3});return e.current&&s.observe(e.current),()=>s.disconnect()},[]),p.jsxs(p.Fragment,{children:[p.jsx(Hb,{}),p.jsx("section",{id:"hero",children:p.jsx(Gb,{})}),p.jsxs("main",{className:ge.container,children:[p.jsxs("section",{id:"m",ref:e,className:ge.section,children:[p.jsxs("div",{className:`${ge.header} ${t?ge.sectionVisible:ge.sectionHidden}`,children:[p.jsxs("h1",{className:ge.title,children:["برامجنا التعليمية ",p.jsx("div",{className:ge.bounceText,children:"الممتعة"})]}),p.jsx("p",{className:ge.subtitle,children:"برامجنا التعليمية مصممة لتجمع بين الفائدة والمتعة، حيث نقدم محتوى متنوع يغطي مختلف المراحل الدراسية."})]}),p.jsx("div",{className:`${ge.cardGrid} ${t?ge.sectionVisible:ge.sectionHidden}`,children:n.map((s,i)=>p.jsxs("div",{className:`${ge.card} ${s.gradient}`,style:{animation:t?`floatCard ${2+i*.5}s ease-in-out infinite alternate`:"none"},children:[p.jsx("img",{src:s.icon,alt:s.title,className:ge.cardIcon}),p.jsx("h2",{className:ge.cardTitle,children:s.title}),p.jsx("p",{className:ge.cardDescription,children:s.description}),p.jsx("a",{href:"#",className:ge.bounceButton,children:"ابدأ اللعب"})]},i))})]}),p.jsx(as,{}),p.jsx("section",{id:"about",children:p.jsx(Kb,{})}),p.jsx("section",{id:"faq",children:p.jsx(Qb,{})})]}),p.jsx(Xb,{})]})}const Yb=({children:n})=>{const{user:e,loading:t}=BT();return t?null:e?n:p.jsx(Mm,{to:"/dashboard"})},Jb=qe(p.jsx("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6"})),Zb=qe(p.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41zm-6.78.66h5v1.5h-5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2zm6.5 1.25h-5v-1.5h5zm0-2.5h-5v-1.5h5z"})),eI=qe(p.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),tI=qe(p.jsx("path",{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z"})),nI=qe(p.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"})),rI=qe(p.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})),sI=qe(p.jsx("path",{d:"M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4z"})),iI=qe(p.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"})),oI=qe(p.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"})),aI=qe(p.jsx("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"})),lI=qe([p.jsx("circle",{cx:"12",cy:"12",r:"3.2"},"0"),p.jsx("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},"1")]),cI=qe(p.jsx("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"})),uI=qe(p.jsx("path",{d:"M19.8 18.4 14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6"}));/**
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
 */const Hf="firebasestorage.googleapis.com",Wf="storageBucket",hI=2*60*1e3,dI=10*60*1e3;/**
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
 */class fe extends _t{constructor(e,t,r=0){super(xo(e),`Firebase Storage: ${t} (${xo(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var de;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(de||(de={}));function xo(n){return"storage/"+n}function nl(){const n="An unknown error occurred, please check the error payload for server response.";return new fe(de.UNKNOWN,n)}function fI(n){return new fe(de.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function pI(n){return new fe(de.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mI(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new fe(de.UNAUTHENTICATED,n)}function gI(){return new fe(de.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _I(n){return new fe(de.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function yI(){return new fe(de.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vI(){return new fe(de.CANCELED,"User canceled the upload/download.")}function wI(n){return new fe(de.INVALID_URL,"Invalid URL '"+n+"'.")}function EI(n){return new fe(de.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function TI(){return new fe(de.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Wf+"' property when initializing the app?")}function bI(){return new fe(de.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function II(){return new fe(de.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function xI(n){return new fe(de.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ia(n){return new fe(de.INVALID_ARGUMENT,n)}function Gf(){return new fe(de.APP_DELETED,"The Firebase app was deleted.")}function RI(n){return new fe(de.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Nr(n,e){return new fe(de.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function vr(n){throw new fe(de.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class ze{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=ze.makeFromUrl(e,t)}catch{return new ze(e,"")}if(r.path==="")return r;throw EI(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),c={bucket:1,path:3};function h(M){M.path_=decodeURIComponent(M.path)}const f="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",I=new RegExp(`^https?://${m}/${f}/b/${s}/o${v}`,"i"),P={bucket:1,path:3},N=t===Hf?"(?:storage.googleapis.com|storage.cloud.google.com)":t,R="([^?#]*)",V=new RegExp(`^https?://${N}/${s}/${R}`,"i"),C=[{regex:l,indices:c,postModify:i},{regex:I,indices:P,postModify:h},{regex:V,indices:{bucket:1,path:2},postModify:h}];for(let M=0;M<C.length;M++){const $=C[M],W=$.regex.exec(e);if(W){const E=W[$.indices.bucket];let _=W[$.indices.path];_||(_=""),r=new ze(E,_),$.postModify(r);break}}if(r==null)throw wI(e);return r}}class AI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function SI(n,e,t){let r=1,s=null,i=null,a=!1,l=0;function c(){return l===2}let h=!1;function f(...R){h||(h=!0,e.apply(null,R))}function m(R){s=setTimeout(()=>{s=null,n(I,c())},R)}function v(){i&&clearTimeout(i)}function I(R,...V){if(h){v();return}if(R){v(),f.call(null,R,...V);return}if(c()||a){v(),f.call(null,R,...V);return}r<64&&(r*=2);let C;l===1?(l=2,C=0):C=(r+Math.random())*1e3,m(C)}let P=!1;function N(R){P||(P=!0,v(),!h&&(s!==null?(R||(l=2),clearTimeout(s),m(0)):R||(l=1)))}return m(0),i=setTimeout(()=>{a=!0,N(!0)},t),N}function CI(n){n(!1)}/**
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
 */function PI(n){return n!==void 0}function kI(n){return typeof n=="object"&&!Array.isArray(n)}function rl(n){return typeof n=="string"||n instanceof String}function Hu(n){return sl()&&n instanceof Blob}function sl(){return typeof Blob<"u"}function Wu(n,e,t,r){if(r<e)throw ia(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw ia(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function il(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Kf(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var dn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(dn||(dn={}));/**
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
 */function NI(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class DI{constructor(e,t,r,s,i,a,l,c,h,f,m,v=!0,I=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=v,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,N)=>{this.resolve_=P,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ss(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const c=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===dn.NO_ERROR,c=i.getStatus();if(!l||NI(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===dn.ABORT;r(!1,new Ss(!1,null,f));return}const h=this.successCodes_.indexOf(c)!==-1;r(!0,new Ss(h,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());PI(c)?i(c):i()}catch(c){a(c)}else if(l!==null){const c=nl();c.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,c)):a(c)}else if(s.canceled){const c=this.appDelete_?Gf():vI();a(c)}else{const c=yI();a(c)}};this.canceled_?t(!1,new Ss(!1,null,!0)):this.backoffId_=SI(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&CI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ss{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function VI(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function OI(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function LI(n,e){e&&(n["X-Firebase-GMPID"]=e)}function MI(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function jI(n,e,t,r,s,i,a=!0,l=!1){const c=Kf(n.urlParams),h=n.url+c,f=Object.assign({},n.headers);return LI(f,e),VI(f,t),OI(f,i),MI(f,r),new DI(h,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,l)}/**
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
 */function UI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function FI(...n){const e=UI();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(sl())return new Blob(n);throw new fe(de.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function BI(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function $I(n){if(typeof atob>"u")throw xI("base-64");return atob(n)}/**
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
 */const st={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ro{constructor(e,t){this.data=e,this.contentType=t||null}}function zI(n,e){switch(n){case st.RAW:return new Ro(Qf(e));case st.BASE64:case st.BASE64URL:return new Ro(Xf(n,e));case st.DATA_URL:return new Ro(HI(e),WI(e))}throw nl()}function Qf(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function qI(n){let e;try{e=decodeURIComponent(n)}catch{throw Nr(st.DATA_URL,"Malformed data URL.")}return Qf(e)}function Xf(n,e){switch(n){case st.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Nr(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case st.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Nr(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=$I(e)}catch(s){throw s.message.includes("polyfill")?s:Nr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Yf{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Nr(st.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=GI(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function HI(n){const e=new Yf(n);return e.base64?Xf(st.BASE64,e.rest):qI(e.rest)}function WI(n){return new Yf(n).contentType}function GI(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Bt{constructor(e,t){let r=0,s="";Hu(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Hu(this.data_)){const r=this.data_,s=BI(r,e,t);return s===null?null:new Bt(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Bt(r,!0)}}static getBlob(...e){if(sl()){const t=e.map(r=>r instanceof Bt?r.data_:r);return new Bt(FI.apply(null,t))}else{const t=e.map(a=>rl(a)?zI(st.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let l=0;l<a.length;l++)s[i++]=a[l]}),new Bt(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Jf(n){let e;try{e=JSON.parse(n)}catch{return null}return kI(e)?e:null}/**
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
 */function KI(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function QI(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Zf(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function XI(n,e){return e}class Me{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||XI}}let Cs=null;function YI(n){return!rl(n)||n.length<2?n:Zf(n)}function ep(){if(Cs)return Cs;const n=[];n.push(new Me("bucket")),n.push(new Me("generation")),n.push(new Me("metageneration")),n.push(new Me("name","fullPath",!0));function e(i,a){return YI(a)}const t=new Me("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new Me("size");return s.xform=r,n.push(s),n.push(new Me("timeCreated")),n.push(new Me("updated")),n.push(new Me("md5Hash",null,!0)),n.push(new Me("cacheControl",null,!0)),n.push(new Me("contentDisposition",null,!0)),n.push(new Me("contentEncoding",null,!0)),n.push(new Me("contentLanguage",null,!0)),n.push(new Me("contentType",null,!0)),n.push(new Me("metadata","customMetadata",!0)),Cs=n,Cs}function JI(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new ze(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function ZI(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return JI(r,n),r}function tp(n,e,t){const r=Jf(e);return r===null?null:ZI(n,r,t)}function ex(n,e,t,r){const s=Jf(e);if(s===null||!rl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(h=>{const f=n.bucket,m=n.fullPath,v="/b/"+a(f)+"/o/"+a(m),I=il(v,t,r),P=Kf({alt:"media",token:h});return I+P})[0]}function tx(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class np{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function rp(n){if(!n)throw nl()}function nx(n,e){function t(r,s){const i=tp(n,s,e);return rp(i!==null),i}return t}function rx(n,e){function t(r,s){const i=tp(n,s,e);return rp(i!==null),ex(i,s,n.host,n._protocol)}return t}function sp(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=gI():s=mI():t.getStatus()===402?s=pI(n.bucket):t.getStatus()===403?s=_I(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function sx(n){const e=sp(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=fI(n.path)),i.serverResponse=s.serverResponse,i}return t}function ix(n,e,t){const r=e.fullServerUrl(),s=il(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,l=new np(s,i,rx(n,t),a);return l.errorHandler=sx(e),l}function ox(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function ax(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=ox(null,e)),r}function lx(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let C="";for(let M=0;M<2;M++)C=C+Math.random().toString().slice(2);return C}const c=l();a["Content-Type"]="multipart/related; boundary="+c;const h=ax(e,r,s),f=tx(h,t),m="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+h.contentType+`\r
\r
`,v=`\r
--`+c+"--",I=Bt.getBlob(m,r,v);if(I===null)throw bI();const P={name:h.fullPath},N=il(i,n.host,n._protocol),R="POST",V=n.maxUploadRetryTime,k=new np(N,R,nx(n,t),V);return k.urlParams=P,k.headers=a,k.body=I.uploadData(),k.errorHandler=sp(e),k}class cx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=dn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=dn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=dn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw vr("cannot .send() more than once");if(En(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw vr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ux extends cx{initXhr(){this.xhr_.responseType="text"}}function ip(){return new ux}/**
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
 */class wn{constructor(e,t){this._service=e,t instanceof ze?this._location=t:this._location=ze.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new wn(e,t)}get root(){const e=new ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zf(this._location.path)}get storage(){return this._service}get parent(){const e=KI(this._location.path);if(e===null)return null;const t=new ze(this._location.bucket,e);return new wn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw RI(e)}}function hx(n,e,t){n._throwIfRoot("uploadBytes");const r=lx(n.storage,n._location,ep(),new Bt(e,!0),t);return n.storage.makeRequestWithTokens(r,ip).then(s=>({metadata:s,ref:n}))}function dx(n){n._throwIfRoot("getDownloadURL");const e=ix(n.storage,n._location,ep());return n.storage.makeRequestWithTokens(e,ip).then(t=>{if(t===null)throw II();return t})}function fx(n,e){const t=QI(n._location.path,e),r=new ze(n._location.bucket,t);return new wn(n.storage,r)}/**
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
 */function px(n){return/^[A-Za-z]+:\/\//.test(n)}function mx(n,e){return new wn(n,e)}function op(n,e){if(n instanceof ol){const t=n;if(t._bucket==null)throw TI();const r=new wn(t,t._bucket);return e!=null?op(r,e):r}else return e!==void 0?fx(n,e):n}function gx(n,e){if(e&&px(e)){if(n instanceof ol)return mx(n,e);throw ia("To use ref(service, url), the first argument must be a Storage instance.")}else return op(n,e)}function Gu(n,e){const t=e==null?void 0:e[Wf];return t==null?null:ze.makeFromBucketSpec(t,n)}class ol{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=Hf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hI,this._maxUploadRetryTime=dI,this._requests=new Set,s!=null?this._bucket=ze.makeFromBucketSpec(s,this._host):this._bucket=Gu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ze.makeFromBucketSpec(this._url,e):this._bucket=Gu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Wu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Wu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wn(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new AI(Gf());{const a=jI(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Ku="@firebase/storage",Qu="0.14.0";/**
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
 */const _x="storage";function yx(n,e,t){return n=Ae(n),hx(n,e,t)}function vx(n){return n=Ae(n),dx(n)}function wx(n,e){return n=Ae(n),gx(n,e)}function Ex(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new ol(t,r,s,e,Tn)}function Tx(){pn(new Gt(_x,Ex,"PUBLIC").setMultipleInstances(!0)),it(Ku,Qu,""),it(Ku,Qu,"esm2020")}Tx();function bx({isOpen:n=!1,onClose:e,userData:t,userId:r,fb:s,appId:i,darkMode:a,showToast:l}){const[c,h]=x.useState({fullName:"",file:null}),[f,m]=x.useState(""),[v,I]=x.useState(!1);x.useEffect(()=>{t&&(h({fullName:t.fullName||t.name||"",file:null}),m(t.photoURL||""))},[t]);const P=V=>{const{name:k,value:C}=V.target;h(M=>({...M,[k]:C}))},N=V=>{const k=V.target.files[0];k&&(h(C=>({...C,file:k})),m(URL.createObjectURL(k)))},R=async()=>{if(!(s!=null&&s.db)||!r){l("خطأ: لم يتم تهيئة المصادقة أو قاعدة البيانات.","error");return}if(!c.fullName.trim()){l("الرجاء إدخال الاسم الكامل.","warning");return}I(!0);let V=f;try{if(c.file){const C=wx(s.storage,`profile_pictures/${r}/${c.file.name}`);await yx(C,c.file),V=await vx(C)}const k=Ni(s.db,`artifacts/${i}/users/${r}/profile`,"data");await tl(k,{fullName:c.fullName,photoURL:V,lastUpdated:Date.now()},{merge:!0}),l("تم حفظ الملف الشخصي بنجاح!","success"),e()}catch(k){console.error("Error saving profile:",k);const C=(k==null?void 0:k.code)==="permission-denied"?"فشل الحفظ: يرجى التحقق من قواعد الأمان (write).":"فشل الحفظ: حدث خطأ غير متوقع.";l(C,"error")}finally{I(!1)}};return p.jsxs($p,{open:n,onClose:e,fullWidth:!0,maxWidth:"sm",PaperProps:{className:`${a?"bg-gray-800 text-white shadow-xl shadow-green-900/50":"bg-white text-gray-900 shadow-lg"} transition-colors duration-300 rounded-xl`},dir:"rtl",children:[p.jsxs(zp,{className:`text-center font-bold text-2xl border-b ${a?"border-gray-700 text-green-400":"border-gray-200 text-green-600"}`,children:[p.jsx(nI,{className:"ml-2"}),"تعديل الملف الشخصي"]}),p.jsxs(qp,{className:"py-6 space-y-6 flex flex-col items-center",children:[p.jsxs(Hp,{className:"relative",children:[p.jsx(Ao,{src:f||"https://placehold.co/100x100/333333/ffffff?text=?",alt:c.fullName||"User",className:"w-24 h-24 mb-4 border-4 border-green-500 shadow-lg cursor-pointer"}),p.jsx("input",{accept:"image/*",style:{display:"none"},id:"profile-pic-upload",type:"file",onChange:N}),p.jsx("label",{htmlFor:"profile-pic-upload",children:p.jsx(Pn,{color:"primary",component:"span",className:"absolute bottom-0 right-0 bg-green-500 hover:bg-green-600 text-white",children:p.jsx(lI,{})})})]}),p.jsx(lo,{margin:"dense",name:"fullName",label:"الاسم الكامل",type:"text",fullWidth:!0,variant:"outlined",value:c.fullName,onChange:P,InputLabelProps:{shrink:!0}}),p.jsx(lo,{margin:"dense",label:"البريد الإلكتروني",type:"email",fullWidth:!0,variant:"outlined",value:(t==null?void 0:t.email)||"",disabled:!0,InputLabelProps:{shrink:!0}}),p.jsx(lo,{margin:"dense",label:"معرّف المستخدم",type:"text",fullWidth:!0,variant:"outlined",value:r||"N/A",disabled:!0,InputLabelProps:{shrink:!0}})]}),p.jsxs(Wp,{className:"p-4 flex justify-between",children:[p.jsx(So,{onClick:e,variant:"outlined",className:`font-bold transition-all ${a?"text-white border-red-500 hover:bg-red-500/10":"text-red-500 border-red-500 hover:bg-red-500/10"}`,disabled:v,children:"إلغاء"}),p.jsx(So,{onClick:R,variant:"contained",className:"font-bold bg-green-500 hover:bg-green-600 text-white transition-all transform hover:scale-[1.02]",startIcon:p.jsx(cI,{}),disabled:v,children:v?"جاري الحفظ...":"حفظ التعديلات"})]})]})}function Ix(){const[n,e]=x.useState(!0),[t,r]=x.useState(!1),[s,i]=x.useState(!1),[a,l]=x.useState([]),[c,h]=x.useState(!0),[f,m]=x.useState(!0),[v,I]=x.useState({auth:dt,db:hi}),[P,N]=x.useState(null),[R,V]=x.useState(null),[k,C]=x.useState(!1),[M,$]=x.useState([]),[W,E]=x.useState([]),_=x.useRef(null),y=(B,ue="success")=>{const re=Date.now();l(Ce=>[...Ce,{id:re,message:B,type:ue}]),setTimeout(()=>l(Ce=>Ce.filter(Mi=>Mi.id!==re)),3e3)},T=()=>{const B=new Date().getHours();return B<12?"صباح الخير":B<18?"مساء الخير":"مساء النور"};x.useEffect(()=>{I({auth:dt,db:hi});const B=Kh(dt,ue=>{N(ue?ue.uid:null),C(!0)});return()=>B()},[]),x.useEffect(()=>{if(!k)return;let B=()=>{};if(P&&(v!=null&&v.db)){const ue=Ni(v.db,"users",P);B=LT(ue,re=>{if(console.log("Snapshot exists?",re.exists()),console.log("Data:",re.data()),re.exists()){const Ce=re.data();V({fullName:Ce.name||"ضيف جديد",photoURL:Ce.photoURL||"https://placehold.co/100x100/10b981/ffffff?text=U"})}else V({fullName:"ضيف جديد",photoURL:"https://placehold.co/100x100/10b981/ffffff?text=U"});m(!1)},re=>{console.error("profile onSnapshot error:",re),V({fullName:"مستخدم",photoURL:"https://placehold.co/100x100/333333/ffffff?text=?"}),m(!1)})}else k&&!P&&(V({fullName:"مستخدم غير معروف",photoURL:"https://placehold.co/100x100/333333/ffffff?text=?"}),m(!1));return()=>B()},[k,P,v]),x.useEffect(()=>{(async()=>{await new Promise(Ce=>setTimeout(Ce,350));const ue=[{id:"computer",name:"الحاسوب",description:"مسار الحاسوب التفاعلي",icon:p.jsx(tI,{})},{id:"firstaid",name:"الإسعافات الأولية",description:"أساسيات الإسعاف الأولي",icon:p.jsx(sI,{})},{id:"math",name:"الرياضيات",description:"تطوير المهارات الحسابية",icon:p.jsx(Zb,{})},{id:"physics",name:"الالفيزياء",description:"مقدمات في الفيزياء",icon:p.jsx(uI,{})}],re=[{id:"g1",title:"لعبة الحروف",icon:"🔤",description:"تعلم الحروف العربية بطريقة ممتعة وتفاعلية."},{id:"g2",title:"لعبة الألوان",icon:"🎨",description:"استكشاف الألوان من خلال التحديات البصرية."},{id:"g3",title:"لعبة الأشكال",icon:"🟠",description:"تمييز الأشكال الهندسية وتطوير المهارات البصرية."},{id:"g4",title:"لعبة الأرقام",icon:"🔢",description:"تعلم الأرقام العربية من خلال اللعب."},{id:"g5",title:"لعبة الحيوانات",icon:"🐘",description:"تعرف على الحيوانات وأصواتها بطريقة ممتعة."},{id:"g6",title:"لعبة الفواكه",icon:"🍎",description:"تمييز الفواكه وتعلم أسمائها."}];E(ue),$(re)})()},[]),x.useEffect(()=>{const B=setTimeout(()=>h(!1),4e3),ue=new IntersectionObserver(re=>{re.forEach(Ce=>{Ce.isIntersecting&&Ce.target.classList.add("visible")})},{threshold:.3});return _.current&&ue.observe(_.current),()=>{clearTimeout(B),ue.disconnect()}},[]);const b=async()=>{try{await i0(v.auth),y("تم تسجيل الخروج بنجاح!","success")}catch(B){console.error("logout error:",B),y("فشل تسجيل الخروج.","error")}},A=()=>e(B=>!B),w=()=>{const B=document.getElementById("games");B&&B.scrollIntoView({behavior:"smooth"})},me=`
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
  `;if(f)return p.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center font-[Tajawal] bg-gray-900 text-white",dir:"rtl",children:[p.jsxs("svg",{className:"animate-spin h-10 w-10 text-green-400 mb-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[p.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),p.jsx("div",{className:"text-xl font-bold text-green-400 animate-pulse",children:"جاري تحميل منصة بلــــــيرن..."})]});const Fe=()=>p.jsxs(p.Fragment,{children:[p.jsx("div",{className:`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 ${t?"opacity-100 visible":"opacity-0 invisible"}`,onClick:()=>r(!1)}),p.jsxs("aside",{className:`fixed top-0 right-0 h-full w-64 p-6 z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${n?"bg-gray-900 text-white border-l border-green-700/50":"bg-white text-gray-800 border-l border-green-200"} ${t?"translate-x-0":"translate-x-full"}`,children:[p.jsxs("div",{className:"flex flex-col mb-6 pb-4 border-b border-green-600/50 flex-shrink-0",children:[p.jsxs("div",{className:"flex justify-between items-center mb-4",children:[p.jsx("h1",{className:"text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 drop-shadow-lg",children:"بلــــــيرن"}),p.jsx(Pn,{onClick:()=>r(!1),color:"inherit",className:"p-1 rounded-full bg-red-500/10 hover:bg-red-500/20",children:p.jsx(eI,{className:"text-red-400"})})]}),p.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 dark:bg-gray-700/50 shadow-inner cursor-pointer hover:shadow-green-500/50 transition-shadow",onClick:()=>i(!0),children:[p.jsx(Ao,{src:R==null?void 0:R.photoURL,alt:(R==null?void 0:R.fullName)||"U",sx:{width:48,height:48,border:"2px solid #4ade80"}}),p.jsx("span",{className:"font-extrabold text-lg text-green-300",children:(R==null?void 0:R.fullName)||"مستخدم"})]})]}),p.jsxs("nav",{className:"space-y-4 overflow-y-auto flex-1 pb-4",children:[p.jsx("h4",{className:"text-sm font-bold uppercase tracking-wider text-green-400 opacity-80",children:"القائمة الرئيسية"}),p.jsxs("a",{href:"#hero",onClick:()=>r(!1),className:"flex items-center gap-4 text-lg font-medium py-3 px-2 rounded-xl transition-all duration-200 hover:bg-green-600/30 hover:text-green-300 hover:shadow-md",children:[p.jsx("span",{className:"text-green-400",children:p.jsx(rI,{})}),"الرئيسية"]}),p.jsx("h4",{className:"pt-4 text-sm font-bold uppercase tracking-wider text-blue-400 opacity-80 border-t border-gray-700/50",children:"البرامج التعليمية"}),W.map(B=>p.jsxs("a",{href:`#${B.id}`,onClick:()=>r(!1),className:"flex items-center gap-4 text-lg font-medium py-3 px-2 rounded-xl transition-all duration-200 hover:bg-blue-600/30 hover:text-blue-300 hover:shadow-md",children:[p.jsx("span",{className:"text-blue-400",children:B.icon}),B.name]},B.id)),p.jsx("h4",{className:"pt-4 text-sm font-bold uppercase tracking-wider text-yellow-400 opacity-80 border-t border-gray-700/50",children:"الألعاب التعليمية"}),M.slice(0,3).map((B,ue)=>p.jsxs("a",{href:"#games",onClick:()=>r(!1),className:"flex items-center gap-4 text-lg font-medium py-3 px-2 rounded-xl transition-all duration-200 hover:bg-yellow-600/30 opacity-90 hover:opacity-100",children:[p.jsx("span",{className:"text-xl leading-none",children:B.icon}),B.title]},B.id)),p.jsx("a",{href:"#games",onClick:()=>r(!1),className:"block text-center text-sm font-bold pt-2 text-yellow-500 hover:underline",children:"عرض كل الألعاب..."})]}),p.jsxs("div",{className:"mt-6 pt-4 border-t border-gray-700/50 flex justify-around flex-shrink-0",children:[p.jsx(Pn,{onClick:A,title:"تبديل الثيم",className:"p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20",children:p.jsx(Jb,{className:"text-blue-400"})}),p.jsx(Pn,{onClick:b,title:"تسجيل الخروج",className:"p-3 rounded-full bg-red-500/10 hover:bg-red-500/20",children:p.jsx(iI,{className:"text-red-400"})}),p.jsx(Pn,{title:"الإشعارات",className:"p-3 rounded-full bg-yellow-500/10 hover:bg-yellow-500/20",children:p.jsx(aI,{className:"text-yellow-400"})})]})]})]});return p.jsxs(p.Fragment,{children:[p.jsx("style",{children:me}),p.jsxs("div",{className:`min-h-screen font-[Tajawal] flex ${n?"bg-gray-900 text-white":"bg-green-50 text-gray-800"} bg-pattern`,dir:"rtl",lang:"ar",children:[p.jsx(Fe,{}),p.jsx(bx,{isOpen:s,onClose:()=>i(!1),userData:R,userId:P,fb:v,appId:"default-app-id",darkMode:n,showToast:y}),p.jsxs("div",{className:"flex-1 flex flex-col transition-all duration-300",children:[p.jsx(Mp,{position:"sticky",className:"shadow-2xl",children:p.jsxs(jp,{className:"flex justify-between w-full p-2 sm:p-4 bg-gradient-to-l from-green-600/90 to-blue-600/90 backdrop-blur-sm shadow-xl",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx(Pn,{onClick:()=>r(!0),color:"inherit",title:"قائمة التنقل",children:p.jsx(oI,{className:"text-white hover:scale-110 transition-transform"})}),p.jsx("h1",{className:"text-3xl font-black text-white ml-2 drop-shadow-md",children:"بلــــــيرن"})]}),p.jsxs("div",{className:"flex items-center gap-3 p-1 rounded-full bg-white/10 pr-4 transition-all duration-300 hover:bg-white/20 cursor-pointer",onClick:()=>i(!0),children:[p.jsx(Ao,{src:R==null?void 0:R.photoURL,alt:(R==null?void 0:R.fullName)||"U",sx:{width:40,height:40,border:"2px solid white"}}),p.jsx("span",{className:"font-extrabold text-white text-base hidden sm:inline drop-shadow",children:(R==null?void 0:R.fullName)||"مستخدم"})]})]})}),p.jsx(Up,{in:c,timeout:1e3,children:p.jsxs("div",{className:"w-full py-3 text-center text-xl font-black text-white bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 shadow-2xl",children:[T()," 👋 ",(R==null?void 0:R.fullName)||"مستخدم","!"]})}),p.jsxs("main",{className:"flex-1 w-full p-4 sm:p-8",children:[p.jsxs("section",{id:"hero",className:`py-20 max-w-7xl mx-auto w-full text-center rounded-3xl shadow-2xl mb-12 ${n?"bg-gray-800/80":"bg-white/90"}`,children:[p.jsxs("h2",{className:"text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 leading-tight drop-shadow-lg",children:["انطلق في رحلة"," ",p.jsx("span",{className:"text-yellow-400 animate-pulse",children:"التعلم"})," ","باللعب!"]}),p.jsx("p",{className:"text-2xl opacity-90 font-medium max-w-3xl mx-auto mb-10 text-gray-300 dark:text-gray-400",children:"منصة **بلــــــيرن** هي بوابتك نحو تجربة تعليمية ممتعة، حيث يتحول كل درس إلى لعبة مثيرة تطلق العنان لإبداعك."}),p.jsx("button",{onClick:w,className:"mt-4 py-4 px-12 text-xl rounded-full font-extrabold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-[0.98] border-b-4 border-green-700",children:"ابداً اللعب الآن 🚀"})]}),p.jsxs("section",{id:"programs-overview",className:"py-12 max-w-7xl mx-auto w-full",children:[p.jsx("h2",{className:"text-4xl font-black mb-10 text-purple-400 text-center",children:"برامجنا التعليمية المبتكرة 💡"}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:W.map(B=>p.jsx(lc,{elevation:10,id:B.id,className:`rounded-2xl p-6 transition-all duration-300 hover:scale-[1.05] cursor-pointer shadow-xl border-b-4 ${n?"bg-gray-800 hover:bg-gray-700 border-purple-500":"bg-white hover:bg-gray-50 border-purple-400"}`,children:p.jsxs("div",{className:"flex flex-col items-center text-center gap-3",children:[p.jsx("span",{className:"text-4xl text-purple-400 mb-2 p-3 rounded-full bg-purple-500/10",children:B.icon}),p.jsx("h3",{className:"text-xl font-extrabold text-purple-400",children:B.name}),p.jsx("p",{className:"mt-2 text-sm opacity-80",children:B.description})]})},B.id))})]}),p.jsxs("section",{id:"games",className:"py-12 max-w-7xl mx-auto w-full",children:[p.jsx("h2",{className:"text-4xl font-black mb-10 text-yellow-400 text-center",children:"ألعابنا التعليمية المميزة 🕹️"}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:M.map(B=>p.jsxs(lc,{elevation:10,className:`rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] cursor-pointer shadow-2xl hover:shadow-yellow-500/30 border-t-4 ${n?"bg-gray-800 text-white border-yellow-500":"bg-white text-gray-800 border-yellow-400"}`,children:[p.jsx("div",{className:"text-5xl mb-4 text-center",children:B.icon}),p.jsx("h3",{className:"text-xl font-extrabold text-yellow-400 mb-2 text-center",children:B.title}),p.jsx("p",{className:"text-sm text-center opacity-80 h-10",children:B.description}),p.jsx("button",{className:"mt-6 w-full py-3 rounded-xl font-bold text-gray-900 bg-yellow-400 hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl active:scale-[0.98]",children:"ابدأ اللعب"})]},B.id))})]})]}),p.jsx(Fp,{open:a.length>0,autoHideDuration:3e3,onClose:()=>l(B=>B.slice(1)),anchorOrigin:{vertical:"bottom",horizontal:"left"},children:a[0]?p.jsx(Bp,{onClose:()=>l(B=>B.slice(1)),severity:a[0].type||"success",sx:{width:"100%",fontFamily:"Tajawal"},children:a[0].message}):null}),p.jsxs("footer",{ref:_,className:`relative w-full overflow-hidden py-20 px-4 sm:px-8 transition-all duration-700 ${n?"bg-gray-900 text-white":"bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"}`,children:[p.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-4xl font-extrabold mb-4 text-green-500",children:p.jsx("span",{className:"inline-block animate-bounce-slow",children:"بلــــــيرن"})}),p.jsx("p",{className:"mb-6 leading-relaxed text-base opacity-90",children:"منصة تعليمية تفاعلية مبتكرة تقدم تجربة تعلم عبر الألعاب مصممة لتنمية مهاراتك بطريقة إبداعية."}),p.jsx("div",{className:"flex gap-4 mt-4 flex-wrap",children:[{icon:"https://cdn-icons-png.flaticon.com/512/733/733585.png",url:"https://wa.me/+249997922457",alt:"WhatsApp"},{icon:"https://cdn-icons-png.flaticon.com/512/2111/2111646.png",url:"https://t.me/Mohamed_albasher",alt:"Telegram"},{icon:"https://cdn-icons-png.flaticon.com/512/733/733547.png",url:"https://facebook.com",alt:"Facebook"},{icon:"https://cdn-icons-png.flaticon.com/512/561/561127.png",url:"mailto:info@Plarn.com",alt:"Email"}].map((B,ue)=>p.jsx("a",{href:B.url,target:"_blank",rel:"noopener noreferrer",className:"transform transition duration-500 hover:scale-110 hover:-translate-y-1 animate-icon-bounce p-1 rounded-full bg-white shadow-xl",children:p.jsx("img",{src:B.icon,alt:B.alt,className:"w-8 h-8 md:w-10 md:h-10",onError:re=>{re.target.onerror=null,re.target.src="https://placehold.co/40x40/cccccc/000000?text=S"}})},ue))})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-2xl font-bold mb-4 text-green-500",children:"روابط سريعة"}),p.jsxs("ul",{className:"space-y-3 text-base",children:[p.jsx("li",{className:"opacity-80",children:p.jsx("a",{href:"#hero",className:"hover:text-green-400 transition-colors",children:"العودة إلى الأعلى"})}),p.jsx("li",{className:"opacity-80",children:p.jsx("a",{href:"#games",className:"hover:text-green-400 transition-colors",children:"استعراض الألعاب"})}),p.jsx("li",{className:"opacity-80",children:p.jsx("a",{href:"#about",className:"hover:text-green-400 transition-colors",children:"حول بليرن"})})]})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-2xl font-bold mb-4 text-green-500",children:"تواصل معنا"}),p.jsx("p",{className:"text-base",children:"نحن هنا للإجابة على جميع استفساراتك."}),p.jsx("p",{className:"mt-2 text-green-400 font-semibold",children:"info@Plarn.com"}),p.jsx("p",{className:"text-green-400 font-semibold",children:"+24997922457"})]})]}),p.jsxs("div",{className:"mt-16 border-t border-gray-300 dark:border-gray-700 pt-6 text-center space-y-2 text-sm",children:[p.jsx("p",{className:"text-base font-semibold",children:"© 2025 بلــــــيرن. جميع الحقوق محفوظة."}),p.jsx("div",{className:"flex justify-center gap-6 mt-2",children:p.jsx("a",{href:"#privacy",className:"hover:text-green-400 transition-colors",children:"سياسة الخصوصية"})})]})]})]})]})]})}function xx(){return p.jsx(Gp,{maxWidth:"md",className:"min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 text-center",children:p.jsxs(kn.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.6},className:"space-y-6",children:[p.jsx(co,{variant:"h2",className:"text-6xl font-bold text-indigo-600 dark:text-white",children:"404"}),p.jsx(co,{variant:"h5",className:"text-xl text-gray-700 dark:text-gray-300",children:"الصفحة غير موجودة"}),p.jsx(co,{variant:"body1",className:"text-gray-600 dark:text-gray-400",children:"يبدو أنك وصلت إلى رابط غير صالح أو أن الصفحة لم تعد موجودة."}),p.jsx(So,{component:Wt,to:"/",variant:"contained",className:"!bg-indigo-500 hover:!bg-indigo-600 !text-white !px-6 !py-2 !rounded-full !shadow-md",children:"العودة إلى الصفحة الرئيسية"})]})})}function Rx(){return p.jsx("div",{className:"min-h-screen text-gray-900 relative",children:p.jsx(FT,{children:p.jsx(lg,{children:p.jsxs(Um,{children:[p.jsx(Mt,{path:"/",element:p.jsx(qu,{})}),p.jsx(Mt,{path:"/main",element:p.jsx(qu,{})}),p.jsx(Mt,{path:"/login",element:p.jsx($T,{})}),p.jsx(Mt,{path:"/register",element:p.jsx(Ib,{})}),p.jsx(Mt,{path:"/forget-password",element:p.jsx(Rb,{})}),p.jsx(Mt,{path:"*",element:p.jsx(xx,{})}),p.jsx(Mt,{path:"/dashboard",element:p.jsx(Yb,{children:p.jsx(Ix,{})})})]})})})})}const Ax=document.getElementById("root"),Sx=Xu(Ax);Sx.render(se.createElement(Rx));
