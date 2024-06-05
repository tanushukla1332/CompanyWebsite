import{g as Q,r as Y,e as tt,f as D,h as et,i as k,P as T}from"./index-X24CLK-L.js";var z={},M=function(){return M=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},M.apply(this,arguments)},nt=function(){function e(t,n,i){var r=this;this.endVal=n,this.options=i,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(o){r.startTime||(r.startTime=o);var a=o-r.startTime;r.remaining=r.duration-a,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(a,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(a,r.startVal,r.endVal-r.startVal,r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(a/r.duration);var s=r.countDown?r.frameVal<r.endVal:r.frameVal>r.endVal;r.frameVal=s?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),a<r.duration?r.rAF=requestAnimationFrame(r.count):r.finalEndVal!==null?r.update(r.finalEndVal):r.options.onCompleteCallback&&r.options.onCompleteCallback()},this.formatNumber=function(o){var a,s,l,u,f=o<0?"-":"";a=Math.abs(o).toFixed(r.options.decimalPlaces);var d=(a+="").split(".");if(s=d[0],l=d.length>1?r.options.decimal+d[1]:"",r.options.useGrouping){u="";for(var v=3,p=0,b=0,S=s.length;b<S;++b)r.options.useIndianSeparators&&b===4&&(v=2,p=1),b!==0&&p%v==0&&(u=r.options.separator+u),p++,u=s[S-b-1]+u;s=u}return r.options.numerals&&r.options.numerals.length&&(s=s.replace(/[0-9]/g,function(h){return r.options.numerals[+h]}),l=l.replace(/[0-9]/g,function(h){return r.options.numerals[+h]})),f+r.options.prefix+s+l+r.options.suffix},this.easeOutExpo=function(o,a,s,l){return s*(1-Math.pow(2,-10*o/l))*1024/1023+a},this.options=M(M({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof t=="string"?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return r.handleScroll(r)}),window.onscroll=function(){window.onScrollFns.forEach(function(o){return o()})},this.handleScroll(this)))}return e.prototype.handleScroll=function(t){if(t&&window&&!t.once){var n=window.innerHeight+window.scrollY,i=t.el.getBoundingClientRect(),r=i.top+window.pageYOffset,o=i.top+i.height+window.pageYOffset;o<n&&o>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>o||r>n)&&!t.paused&&t.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var n=t-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var i=this.countDown?1:-1;this.endVal=t+i*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(t){var n;if(this.el){var i=this.formattingFn(t);!((n=this.options.plugin)===null||n===void 0)&&n.render?this.options.plugin.render(this.el,i):this.el.tagName==="INPUT"?this.el.value=i:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=i:this.el.innerHTML=i}},e.prototype.ensureNumber=function(t){return typeof t=="number"&&!isNaN(t)},e.prototype.validateValue=function(t){var n=Number(t);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}();const rt=Object.freeze(Object.defineProperty({__proto__:null,CountUp:nt},Symbol.toStringTag,{value:"Module"})),it=Q(rt);Object.defineProperty(z,"__esModule",{value:!0});var g=Y,ot=it;function at(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i,r,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=o.call(n)).done)&&(s.push(i.value),s.length!==t);l=!0);}catch(f){u=!0,r=f}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw r}}return s}}function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$(Object(n),!0).forEach(function(i){st(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function st(e,t,n){return t=pt(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},I.apply(this,arguments)}function lt(e,t){if(e==null)return{};var n={},i=Object.keys(e),r,o;for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Z(e,t){if(e==null)return{};var n=lt(e,t),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function ut(e,t){return ct(e)||at(e,t)||ft(e,t)||dt()}function ct(e){if(Array.isArray(e))return e}function ft(e,t){if(e){if(typeof e=="string")return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,t)}}function W(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function dt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function pt(e){var t=ht(e,"string");return typeof t=="symbol"?t:String(t)}var mt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?g.useLayoutEffect:g.useEffect;function R(e){var t=g.useRef(e);return mt(function(){t.current=e}),g.useCallback(function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return t.current.apply(void 0,i)},[])}var gt=function(t,n){var i=n.decimal,r=n.decimals,o=n.duration,a=n.easingFn,s=n.end,l=n.formattingFn,u=n.numerals,f=n.prefix,d=n.separator,v=n.start,p=n.suffix,b=n.useEasing,S=n.useGrouping,h=n.useIndianSeparators,E=n.enableScrollSpy,m=n.scrollSpyDelay,P=n.scrollSpyOnce,O=n.plugin;return new ot.CountUp(t,s,{startVal:v,duration:o,decimal:i,decimalPlaces:r,easingFn:a,formattingFn:l,numerals:u,separator:d,prefix:f,suffix:p,plugin:O,useEasing:b,useIndianSeparators:h,useGrouping:S,enableScrollSpy:E,scrollSpyDelay:m,scrollSpyOnce:P})},vt=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],yt={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},X=function(t){var n=Object.fromEntries(Object.entries(t).filter(function(V){var x=ut(V,2),C=x[1];return C!==void 0})),i=g.useMemo(function(){return A(A({},yt),n)},[t]),r=i.ref,o=i.startOnMount,a=i.enableReinitialize,s=i.delay,l=i.onEnd,u=i.onStart,f=i.onPauseResume,d=i.onReset,v=i.onUpdate,p=Z(i,vt),b=g.useRef(),S=g.useRef(),h=g.useRef(!1),E=R(function(){return gt(typeof r=="string"?r:r.current,p)}),m=R(function(V){var x=b.current;if(x&&!V)return x;var C=E();return b.current=C,C}),P=R(function(){var V=function(){return m(!0).start(function(){l==null||l({pauseResume:O,reset:y,start:w,update:c})})};s&&s>0?S.current=setTimeout(V,s*1e3):V(),u==null||u({pauseResume:O,reset:y,update:c})}),O=R(function(){m().pauseResume(),f==null||f({reset:y,start:w,update:c})}),y=R(function(){m().el&&(S.current&&clearTimeout(S.current),m().reset(),d==null||d({pauseResume:O,start:w,update:c}))}),c=R(function(V){m().update(V),v==null||v({pauseResume:O,reset:y,start:w})}),w=R(function(){y(),P()}),j=R(function(V){o&&(V&&y(),P())});return g.useEffect(function(){h.current?a&&j(!0):(h.current=!0,j())},[a,h,j,s,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),g.useEffect(function(){return function(){y()}},[y]),{start:w,pauseResume:O,reset:y,update:c,getCountUp:m}},bt=["className","redraw","containerProps","children","style"],St=function(t){var n=t.className,i=t.redraw,r=t.containerProps,o=t.children,a=t.style,s=Z(t,bt),l=g.useRef(null),u=g.useRef(!1),f=X(A(A({},s),{},{ref:l,startOnMount:typeof o!="function"||t.delay===0,enableReinitialize:!1})),d=f.start,v=f.reset,p=f.update,b=f.pauseResume,S=f.getCountUp,h=R(function(){d()}),E=R(function(O){t.preserveValue||v(),p(O)}),m=R(function(){if(typeof t.children=="function"&&!(l.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}S()});g.useEffect(function(){m()},[m]),g.useEffect(function(){u.current&&E(t.end)},[t.end,E]);var P=i&&t;return g.useEffect(function(){i&&u.current&&h()},[h,i,P]),g.useEffect(function(){!i&&u.current&&h()},[h,i,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),g.useEffect(function(){u.current=!0},[]),typeof o=="function"?o({countUpRef:l,start:d,reset:v,update:p,pauseResume:b,getCountUp:S}):g.createElement("span",I({className:n,ref:l,style:a},r),typeof t.start<"u"?S().formattingFn(t.start):"")},Kt=z.default=St;z.useCountUp=X;var J="Expected a function",G=NaN,Et="[object Symbol]",Ot=/^\s+|\s+$/g,wt=/^[-+]0x[0-9a-f]+$/i,Pt=/^0b[01]+$/i,Vt=/^0o[0-7]+$/i,Tt=parseInt,Rt=typeof D=="object"&&D&&D.Object===Object&&D,jt=typeof self=="object"&&self&&self.Object===Object&&self,xt=Rt||jt||Function("return this")(),Ct=Object.prototype,Dt=Ct.toString,Ft=Math.max,Mt=Math.min,_=function(){return xt.Date.now()};function At(e,t,n){var i,r,o,a,s,l,u=0,f=!1,d=!1,v=!0;if(typeof e!="function")throw new TypeError(J);t=H(t)||0,U(n)&&(f=!!n.leading,d="maxWait"in n,o=d?Ft(H(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v);function p(c){var w=i,j=r;return i=r=void 0,u=c,a=e.apply(j,w),a}function b(c){return u=c,s=setTimeout(E,t),f?p(c):a}function S(c){var w=c-l,j=c-u,V=t-w;return d?Mt(V,o-j):V}function h(c){var w=c-l,j=c-u;return l===void 0||w>=t||w<0||d&&j>=o}function E(){var c=_();if(h(c))return m(c);s=setTimeout(E,S(c))}function m(c){return s=void 0,v&&i?p(c):(i=r=void 0,a)}function P(){s!==void 0&&clearTimeout(s),u=0,i=l=r=s=void 0}function O(){return s===void 0?a:m(_())}function y(){var c=_(),w=h(c);if(i=arguments,r=this,l=c,w){if(s===void 0)return b(l);if(d)return s=setTimeout(E,t),p(l)}return s===void 0&&(s=setTimeout(E,t)),a}return y.cancel=P,y.flush=O,y}function Ut(e,t,n){var i=!0,r=!0;if(typeof e!="function")throw new TypeError(J);return U(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),At(e,t,{leading:i,maxWait:t,trailing:r})}function U(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function _t(e){return!!e&&typeof e=="object"}function It(e){return typeof e=="symbol"||_t(e)&&Dt.call(e)==Et}function H(e){if(typeof e=="number")return e;if(It(e))return G;if(U(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=U(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ot,"");var n=Pt.test(e);return n||Vt.test(e)?Tt(e.slice(2),n?2:8):wt.test(e)?G:+e}var Lt=Ut;const F=tt(Lt);var zt=["accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt","async","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","challenge","charSet","checked","cite","classID","className","colSpan","cols","content","contentEditable","contextMenu","controls","controlsList","coords","crossOrigin","data","dateTime","default","defer","dir","disabled","download","draggable","encType","form","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","headers","height","hidden","high","href","hrefLang","htmlFor","httpEquiv","icon","id","inputMode","integrity","is","keyParams","keyType","kind","label","lang","list","loop","low","manifest","marginHeight","marginWidth","max","maxLength","media","mediaGroup","method","min","minLength","multiple","muted","name","noValidate","nonce","open","optimum","pattern","placeholder","poster","preload","profile","radioGroup","readOnly","rel","required","reversed","role","rowSpan","rows","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","span","spellCheck","src","srcDoc","srcLang","srcSet","start","step","style","summary","tabIndex","target","title","type","useMap","value","width","wmode","wrap"],Nt=["about","datatype","inlist","prefix","property","resource","typeof","vocab"],kt=["onCopy","onCut","onPaste","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onInvalid","onReset","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onLoad","onError","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd","onToggle"],$t=/data-([a-zA-Z0-9\-]*)/,Wt=/aria-([a-zA-Z0-9\-]*)/,Gt=function(t,n,i){t===void 0&&(t={}),n===void 0&&(n=[]),i===void 0&&(i=[]);var r=Object.assign({},t),o=Object.keys(r).filter(function(a){return n.indexOf(a)!==-1?!1:!!(i.indexOf(a)>-1||zt.indexOf(a)!==-1||Nt.indexOf(a)!==-1||$t.test(a)||Wt.test(a)||kt.indexOf(a)!==-1)});return Object.keys(r).forEach(function(a){o.indexOf(a)===-1&&delete r[a]}),r};function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?q(Object(n),!0).forEach(function(i){Ht(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Ht(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,L(e,t)}function L(e,t){return L=Object.setPrototypeOf||function(i,r){return i.__proto__=r,i},L(e,t)}var N=function(e){qt(t,e);function t(i){var r;return r=e.call(this,i)||this,r.onScrollThrottled=F(r.onScroll.bind(K(r)),i.throttleScroll,{trailing:!1}),r.onResizeThrottled=F(r.onResize.bind(K(r)),i.throttleResize,{trailing:!1}),r.state={inViewport:!1,progress:0,lastScrollPosition:null,lastScrollTime:null},r}var n=t.prototype;return n.componentDidMount=function(){addEventListener("resize",this.onResizeThrottled),addEventListener("scroll",this.onScrollThrottled),this.props.triggerOnLoad&&this.checkStatus()},n.componentDidUpdate=function(r,o){r.throttleScroll!==this.props.throttleScroll&&(removeEventListener("scroll",this.onScrollThrottled),this.onScrollThrottled=F(this.onScroll.bind(this),this.props.throttleScroll,{trailing:!1}),addEventListener("scroll",this.onScrollThrottled)),r.throttleResize!==this.props.throttleResize&&(removeEventListener("resize",this.onResizeThrottled),this.onResizeThrottled=F(this.onResize.bind(this),this.props.throttleResize,{trailing:!1}),addEventListener("resize",this.onResizeThrottled))},n.componentWillUnmount=function(){removeEventListener("resize",this.onResizeThrottled),removeEventListener("scroll",this.onScrollThrottled)},n.onResize=function(){this.checkStatus()},n.onScroll=function(){this.checkStatus()},n.checkStatus=function(){var r=this.props,o=r.containerRef,a=r.onEnter,s=r.onExit,l=r.onProgress,u=this.state,f=u.lastScrollPosition,d=u.lastScrollTime,v=et.findDOMNode(this.element),p=v.getBoundingClientRect(),b=0,S=typeof o=="string"?document.querySelector(o):o,h=o===document.documentElement?Math.max(o.clientHeight,window.innerHeight||0):S.clientHeight,E=p.top<=h&&p.bottom>=b,m=window.scrollY,P=f&&d?Math.abs((f-m)/(d-Date.now())):null;if(E){var O=Math.max(0,Math.min(1,1-p.bottom/(h+p.height)));this.state.inViewport||(this.setState({inViewport:E}),a({progress:O,velocity:P},this)),l({progress:O,velocity:P},this),this.setState({lastScrollPosition:m,lastScrollTime:Date.now()});return}if(this.state.inViewport){var y=p.top<=h?1:0;this.setState({lastScrollPosition:m,lastScrollTime:Date.now(),inViewport:E,progress:y}),l({progress:y,velocity:P},this),s({progress:y,velocity:P},this)}},n.render=function(){var r=this,o=this.props,a=o.children,s=o.component,l=k.isValidElement(s)?"cloneElement":"createElement";return k[l](s,B(B({},Gt(this.props,["onProgress"])),{},{ref:function(f){r.element=f}}),a)},t}(Y.Component);N.propTypes={component:T.oneOfType([T.element,T.node]),containerRef:T.oneOfType([T.object,T.string]),throttleResize:T.number,throttleScroll:T.number,triggerOnLoad:T.bool,onEnter:T.func,onExit:T.func,onProgress:T.func};N.defaultProps={component:"div",containerRef:typeof document<"u"?document.documentElement:"html",throttleResize:100,throttleScroll:100,triggerOnLoad:!0,onEnter:function(){},onExit:function(){},onProgress:function(){}};const Yt=N;export{Yt as S,Kt as _};