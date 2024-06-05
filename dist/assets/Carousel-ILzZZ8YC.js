import{_ as ke,r as s,t as Ae,v as B,j as c,w as Me,x as Ke,q as z,s as P,y as Le,z as _e,A as Ue,D as We,E as ce,T as Xe,J as He}from"./index-HaxtoTjL.js";function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},F.apply(this,arguments)}function le(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function Be(e){var t=Fe(e,"string");return typeof t=="symbol"?t:String(t)}function Fe(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qe(e,t,o){var r=s.useRef(e!==void 0),u=s.useState(t),i=u[0],h=u[1],C=e!==void 0,g=r.current;return r.current=C,!C&&g&&i!==t&&h(t),[C?e:i,s.useCallback(function(x){for(var d=arguments.length,f=new Array(d>1?d-1:0),v=1;v<d;v++)f[v-1]=arguments[v];o&&o.apply(void 0,[x].concat(f)),h(x)},[o])]}function ze(e,t){return Object.keys(t).reduce(function(o,r){var u,i=o,h=i[le(r)],C=i[r],g=ke(i,[le(r),r].map(Be)),x=t[r],d=qe(C,h,e[x]),f=d[0],v=d[1];return F({},g,(u={},u[r]=f,u[x]=v,u))},e)}const Je=["onKeyDown"];function Ve(e,t){if(e==null)return{};var o={},r=Object.keys(e),u,i;for(i=0;i<r.length;i++)u=r[i],!(t.indexOf(u)>=0)&&(o[u]=e[u]);return o}function Ye(e){return!e||e.trim()==="#"}const fe=s.forwardRef((e,t)=>{let{onKeyDown:o}=e,r=Ve(e,Je);const[u]=Ae(Object.assign({tagName:"a"},r)),i=B(h=>{u.onKeyDown(h),o==null||o(h)});return Ye(r.href)||r.role==="button"?c.jsx("a",Object.assign({ref:t},r,u,{onKeyDown:i})):c.jsx("a",Object.assign({ref:t},r,{onKeyDown:o}))});fe.displayName="Anchor";const de=fe;function Ge(e,t){const o=s.useRef(!0);s.useEffect(()=>{if(o.current){o.current=!1;return}return e()},t)}const q=2**31-1;function ve(e,t,o){const r=o-Date.now();e.current=r<=q?setTimeout(t,r):setTimeout(()=>ve(e,t,o),q)}function Qe(){const e=Me(),t=s.useRef();return Ke(()=>clearTimeout(t.current)),s.useMemo(()=>{const o=()=>clearTimeout(t.current);function r(u,i=0){e()&&(o(),i<=q?t.current=setTimeout(u,i):ve(t,u,Date.now()+i))}return{set:r,clear:o}},[])}const pe=s.forwardRef(({className:e,bsPrefix:t,as:o="div",...r},u)=>(t=z(t,"carousel-caption"),c.jsx(o,{ref:u,className:P(e,t),...r})));pe.displayName="CarouselCaption";const Ze=pe,me=s.forwardRef(({as:e="div",bsPrefix:t,className:o,...r},u)=>{const i=P(o,z(t,"carousel-item"));return c.jsx(e,{ref:u,...r,className:i})});me.displayName="CarouselItem";const et=me,tt=40;function nt(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"&&getComputedStyle(e.parentNode).display!=="none"}const he=s.forwardRef(({defaultActiveIndex:e=0,...t},o)=>{const{as:r="div",bsPrefix:u,slide:i=!0,fade:h=!1,controls:C=!0,indicators:g=!0,indicatorLabels:x=[],activeIndex:d,onSelect:f,onSlide:v,onSlid:T,interval:D=5e3,keyboard:J=!0,onKeyDown:A,pause:N="hover",onMouseOver:M,onMouseOut:K,wrap:I=!0,touch:V=!0,onTouchStart:L,onTouchMove:_,onTouchEnd:U,prevIcon:xe=c.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:Y="Previous",nextIcon:be=c.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:G="Next",variant:Q,className:ye,children:W,...Ce}=ze({defaultActiveIndex:e,...t},{activeIndex:"onSelect"}),b=z(u,"carousel"),R=Le(),S=s.useRef(null),[Z,ee]=s.useState("next"),[ge,$]=s.useState(!1),[E,te]=s.useState(!1),[l,je]=s.useState(d||0);s.useEffect(()=>{!E&&d!==l&&(S.current?ee(S.current):ee((d||0)>l?"next":"prev"),i&&te(!0),je(d||0))},[d,E,l,i]),s.useEffect(()=>{S.current&&(S.current=null)});let j=0,ne;_e(W,(n,a)=>{++j,a===d&&(ne=n.props.interval)});const re=Ue(ne),p=s.useCallback(n=>{if(E)return;let a=l-1;if(a<0){if(!I)return;a=j-1}S.current="prev",f==null||f(a,n)},[E,l,f,I,j]),m=B(n=>{if(E)return;let a=l+1;if(a>=j){if(!I)return;a=0}S.current="next",f==null||f(a,n)}),X=s.useRef();s.useImperativeHandle(o,()=>({element:X.current,prev:p,next:m}));const se=B(()=>{!document.hidden&&nt(X.current)&&(R?p():m())}),w=Z==="next"?"start":"end";Ge(()=>{i||(v==null||v(l,w),T==null||T(l,w))},[l]);const we=`${b}-item-${Z}`,Ne=`${b}-item-${w}`,Re=s.useCallback(n=>{We(n),v==null||v(l,w)},[v,l,w]),Se=s.useCallback(()=>{te(!1),T==null||T(l,w)},[T,l,w]),Ee=s.useCallback(n=>{if(J&&!/input|textarea/i.test(n.target.tagName))switch(n.key){case"ArrowLeft":n.preventDefault(),R?m(n):p(n);return;case"ArrowRight":n.preventDefault(),R?p(n):m(n);return}A==null||A(n)},[J,A,p,m,R]),Te=s.useCallback(n=>{N==="hover"&&$(!0),M==null||M(n)},[N,M]),De=s.useCallback(n=>{$(!1),K==null||K(n)},[K]),oe=s.useRef(0),k=s.useRef(0),ae=Qe(),Ie=s.useCallback(n=>{oe.current=n.touches[0].clientX,k.current=0,N==="hover"&&$(!0),L==null||L(n)},[N,L]),Oe=s.useCallback(n=>{n.touches&&n.touches.length>1?k.current=0:k.current=n.touches[0].clientX-oe.current,_==null||_(n)},[_]),Pe=s.useCallback(n=>{if(V){const a=k.current;Math.abs(a)>tt&&(a>0?p(n):m(n))}N==="hover"&&ae.set(()=>{$(!1)},D||void 0),U==null||U(n)},[V,N,p,m,ae,D,U]),ie=D!=null&&!ge&&!E,H=s.useRef();s.useEffect(()=>{var n,a;if(!ie)return;const y=R?p:m;return H.current=window.setInterval(document.visibilityState?se:y,(n=(a=re.current)!=null?a:D)!=null?n:void 0),()=>{H.current!==null&&clearInterval(H.current)}},[ie,p,m,re,D,se,R]);const ue=s.useMemo(()=>g&&Array.from({length:j},(n,a)=>y=>{f==null||f(a,y)}),[g,j,f]);return c.jsxs(r,{ref:X,...Ce,onKeyDown:Ee,onMouseOver:Te,onMouseOut:De,onTouchStart:Ie,onTouchMove:Oe,onTouchEnd:Pe,className:P(ye,b,i&&"slide",h&&`${b}-fade`,Q&&`${b}-${Q}`),children:[g&&c.jsx("div",{className:`${b}-indicators`,children:ce(W,(n,a)=>c.jsx("button",{type:"button","data-bs-target":"","aria-label":x!=null&&x.length?x[a]:`Slide ${a+1}`,className:a===l?"active":void 0,onClick:ue?ue[a]:void 0,"aria-current":a===l},a))}),c.jsx("div",{className:`${b}-inner`,children:ce(W,(n,a)=>{const y=a===l;return i?c.jsx(Xe,{in:y,onEnter:y?Re:void 0,onEntered:y?Se:void 0,addEndListener:He,children:(O,$e)=>s.cloneElement(n,{...$e,className:P(n.props.className,y&&O!=="entered"&&we,(O==="entered"||O==="exiting")&&"active",(O==="entering"||O==="exiting")&&Ne)})}):s.cloneElement(n,{className:P(n.props.className,y&&"active")})})}),C&&c.jsxs(c.Fragment,{children:[(I||d!==0)&&c.jsxs(de,{className:`${b}-control-prev`,onClick:p,children:[xe,Y&&c.jsx("span",{className:"visually-hidden",children:Y})]}),(I||d!==j-1)&&c.jsxs(de,{className:`${b}-control-next`,onClick:m,children:[be,G&&c.jsx("span",{className:"visually-hidden",children:G})]})]})]})});he.displayName="Carousel";const st=Object.assign(he,{Caption:Ze,Item:et});export{st as C,et as a,ze as u};