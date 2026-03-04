const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GeetaAI-CUIEvT2D.js","assets/ProjectNav-BNFeSmDC.js","assets/triangle-alert-RUPlkmFZ.js","assets/Adhyayan-vtLDJPB9.js","assets/UnifiedCore-DRHUvXjs.js","assets/NanoSkills-Dnzt7b0W.js","assets/MathVertical-BinsRi0l.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function xv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var vd={exports:{}},Vo={};var r_;function Dy(){if(r_)return Vo;r_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=e,Vo.jsx=i,Vo.jsxs=i,Vo}var s_;function Ny(){return s_||(s_=1,vd.exports=Dy()),vd.exports}var k=Ny(),xd={exports:{}},ot={};var o_;function Uy(){if(o_)return ot;o_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function S(P,Y,xe){this.props=P,this.context=Y,this.refs=y,this.updater=xe||b}S.prototype.isReactComponent={},S.prototype.setState=function(P,Y){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Y,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function C(){}C.prototype=S.prototype;function N(P,Y,xe){this.props=P,this.context=Y,this.refs=y,this.updater=xe||b}var U=N.prototype=new C;U.constructor=N,w(U,S.prototype),U.isPureReactComponent=!0;var H=Array.isArray;function F(){}var I={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function D(P,Y,xe){var Ce=xe.ref;return{$$typeof:s,type:P,key:Y,ref:Ce!==void 0?Ce:null,props:xe}}function ie(P,Y){return D(P.type,Y,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function $(P){var Y={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(xe){return Y[xe]})}var se=/\/+/g;function ce(P,Y){return typeof P=="object"&&P!==null&&P.key!=null?$(""+P.key):Y.toString(36)}function ae(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(F,F):(P.status="pending",P.then(function(Y){P.status==="pending"&&(P.status="fulfilled",P.value=Y)},function(Y){P.status==="pending"&&(P.status="rejected",P.reason=Y)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,Y,xe,Ce,ze){var te=typeof P;(te==="undefined"||te==="boolean")&&(P=null);var Se=!1;if(P===null)Se=!0;else switch(te){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(P.$$typeof){case s:case e:Se=!0;break;case _:return Se=P._init,O(Se(P._payload),Y,xe,Ce,ze)}}if(Se)return ze=ze(P),Se=Ce===""?"."+ce(P,0):Ce,H(ze)?(xe="",Se!=null&&(xe=Se.replace(se,"$&/")+"/"),O(ze,Y,xe,"",function(Qe){return Qe})):ze!=null&&(G(ze)&&(ze=ie(ze,xe+(ze.key==null||P&&P.key===ze.key?"":(""+ze.key).replace(se,"$&/")+"/")+Se)),Y.push(ze)),1;Se=0;var Ae=Ce===""?".":Ce+":";if(H(P))for(var Xe=0;Xe<P.length;Xe++)Ce=P[Xe],te=Ae+ce(Ce,Xe),Se+=O(Ce,Y,xe,te,ze);else if(Xe=M(P),typeof Xe=="function")for(P=Xe.call(P),Xe=0;!(Ce=P.next()).done;)Ce=Ce.value,te=Ae+ce(Ce,Xe++),Se+=O(Ce,Y,xe,te,ze);else if(te==="object"){if(typeof P.then=="function")return O(ae(P),Y,xe,Ce,ze);throw Y=String(P),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Se}function B(P,Y,xe){if(P==null)return P;var Ce=[],ze=0;return O(P,Ce,"","",function(te){return Y.call(xe,te,ze++)}),Ce}function fe(P){if(P._status===-1){var Y=P._result;Y=Y(),Y.then(function(xe){(P._status===0||P._status===-1)&&(P._status=1,P._result=xe)},function(xe){(P._status===0||P._status===-1)&&(P._status=2,P._result=xe)}),P._status===-1&&(P._status=0,P._result=Y)}if(P._status===1)return P._result.default;throw P._result}var me=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Te={map:B,forEach:function(P,Y,xe){B(P,function(){Y.apply(this,arguments)},xe)},count:function(P){var Y=0;return B(P,function(){Y++}),Y},toArray:function(P){return B(P,function(Y){return Y})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ot.Activity=v,ot.Children=Te,ot.Component=S,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=N,ot.StrictMode=r,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ot.__COMPILER_RUNTIME={__proto__:null,c:function(P){return I.H.useMemoCache(P)}},ot.cache=function(P){return function(){return P.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(P,Y,xe){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ce=w({},P.props),ze=P.key;if(Y!=null)for(te in Y.key!==void 0&&(ze=""+Y.key),Y)!T.call(Y,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&Y.ref===void 0||(Ce[te]=Y[te]);var te=arguments.length-2;if(te===1)Ce.children=xe;else if(1<te){for(var Se=Array(te),Ae=0;Ae<te;Ae++)Se[Ae]=arguments[Ae+2];Ce.children=Se}return D(P.type,ze,Ce)},ot.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ot.createElement=function(P,Y,xe){var Ce,ze={},te=null;if(Y!=null)for(Ce in Y.key!==void 0&&(te=""+Y.key),Y)T.call(Y,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(ze[Ce]=Y[Ce]);var Se=arguments.length-2;if(Se===1)ze.children=xe;else if(1<Se){for(var Ae=Array(Se),Xe=0;Xe<Se;Xe++)Ae[Xe]=arguments[Xe+2];ze.children=Ae}if(P&&P.defaultProps)for(Ce in Se=P.defaultProps,Se)ze[Ce]===void 0&&(ze[Ce]=Se[Ce]);return D(P,te,ze)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(P){return{$$typeof:p,render:P}},ot.isValidElement=G,ot.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:fe}},ot.memo=function(P,Y){return{$$typeof:h,type:P,compare:Y===void 0?null:Y}},ot.startTransition=function(P){var Y=I.T,xe={};I.T=xe;try{var Ce=P(),ze=I.S;ze!==null&&ze(xe,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(F,me)}catch(te){me(te)}finally{Y!==null&&xe.types!==null&&(Y.types=xe.types),I.T=Y}},ot.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ot.use=function(P){return I.H.use(P)},ot.useActionState=function(P,Y,xe){return I.H.useActionState(P,Y,xe)},ot.useCallback=function(P,Y){return I.H.useCallback(P,Y)},ot.useContext=function(P){return I.H.useContext(P)},ot.useDebugValue=function(){},ot.useDeferredValue=function(P,Y){return I.H.useDeferredValue(P,Y)},ot.useEffect=function(P,Y){return I.H.useEffect(P,Y)},ot.useEffectEvent=function(P){return I.H.useEffectEvent(P)},ot.useId=function(){return I.H.useId()},ot.useImperativeHandle=function(P,Y,xe){return I.H.useImperativeHandle(P,Y,xe)},ot.useInsertionEffect=function(P,Y){return I.H.useInsertionEffect(P,Y)},ot.useLayoutEffect=function(P,Y){return I.H.useLayoutEffect(P,Y)},ot.useMemo=function(P,Y){return I.H.useMemo(P,Y)},ot.useOptimistic=function(P,Y){return I.H.useOptimistic(P,Y)},ot.useReducer=function(P,Y,xe){return I.H.useReducer(P,Y,xe)},ot.useRef=function(P){return I.H.useRef(P)},ot.useState=function(P){return I.H.useState(P)},ot.useSyncExternalStore=function(P,Y,xe){return I.H.useSyncExternalStore(P,Y,xe)},ot.useTransition=function(){return I.H.useTransition()},ot.version="19.2.4",ot}var l_;function rp(){return l_||(l_=1,xd.exports=Uy()),xd.exports}var re=rp();const Ly=xv(re);var Sd={exports:{}},ko={},yd={exports:{}},Md={};var c_;function Oy(){return c_||(c_=1,(function(s){function e(O,B){var fe=O.length;O.push(B);e:for(;0<fe;){var me=fe-1>>>1,Te=O[me];if(0<l(Te,B))O[me]=B,O[fe]=Te,fe=me;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var B=O[0],fe=O.pop();if(fe!==B){O[0]=fe;e:for(var me=0,Te=O.length,P=Te>>>1;me<P;){var Y=2*(me+1)-1,xe=O[Y],Ce=Y+1,ze=O[Ce];if(0>l(xe,fe))Ce<Te&&0>l(ze,xe)?(O[me]=ze,O[Ce]=fe,me=Ce):(O[me]=xe,O[Y]=fe,me=Y);else if(Ce<Te&&0>l(ze,fe))O[me]=ze,O[Ce]=fe,me=Ce;else break e}}return B}function l(O,B){var fe=O.sortIndex-B.sortIndex;return fe!==0?fe:O.id-B.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();s.unstable_now=function(){return f.now()-p}}var m=[],h=[],_=1,v=null,g=3,M=!1,b=!1,w=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var B=i(h);B!==null;){if(B.callback===null)r(h);else if(B.startTime<=O)r(h),B.sortIndex=B.expirationTime,e(m,B);else break;B=i(h)}}function H(O){if(w=!1,U(O),!b)if(i(m)!==null)b=!0,F||(F=!0,$());else{var B=i(h);B!==null&&ae(H,B.startTime-O)}}var F=!1,I=-1,T=5,D=-1;function ie(){return y?!0:!(s.unstable_now()-D<T)}function G(){if(y=!1,F){var O=s.unstable_now();D=O;var B=!0;try{e:{b=!1,w&&(w=!1,C(I),I=-1),M=!0;var fe=g;try{t:{for(U(O),v=i(m);v!==null&&!(v.expirationTime>O&&ie());){var me=v.callback;if(typeof me=="function"){v.callback=null,g=v.priorityLevel;var Te=me(v.expirationTime<=O);if(O=s.unstable_now(),typeof Te=="function"){v.callback=Te,U(O),B=!0;break t}v===i(m)&&r(m),U(O)}else r(m);v=i(m)}if(v!==null)B=!0;else{var P=i(h);P!==null&&ae(H,P.startTime-O),B=!1}}break e}finally{v=null,g=fe,M=!1}B=void 0}}finally{B?$():F=!1}}}var $;if(typeof N=="function")$=function(){N(G)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ce=se.port2;se.port1.onmessage=G,$=function(){ce.postMessage(null)}}else $=function(){S(G,0)};function ae(O,B){I=S(function(){O(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(O){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var fe=g;g=B;try{return O()}finally{g=fe}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var fe=g;g=O;try{return B()}finally{g=fe}},s.unstable_scheduleCallback=function(O,B,fe){var me=s.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?me+fe:me):fe=me,O){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=fe+Te,O={id:_++,callback:B,priorityLevel:O,startTime:fe,expirationTime:Te,sortIndex:-1},fe>me?(O.sortIndex=fe,e(h,O),i(m)===null&&O===i(h)&&(w?(C(I),I=-1):w=!0,ae(H,fe-me))):(O.sortIndex=Te,e(m,O),b||M||(b=!0,F||(F=!0,$()))),O},s.unstable_shouldYield=ie,s.unstable_wrapCallback=function(O){var B=g;return function(){var fe=g;g=B;try{return O.apply(this,arguments)}finally{g=fe}}}})(Md)),Md}var u_;function Py(){return u_||(u_=1,yd.exports=Oy()),yd.exports}var Ed={exports:{}},Rn={};var f_;function Fy(){if(f_)return Rn;f_=1;var s=rp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:_}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,_)},Rn.flushSync=function(m){var h=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=h,r.p=_,r.d.f()}},Rn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var _=h.as,v=p(_,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Rn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Rn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,v=p(_,h.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Rn.preloadModule=function(m,h){if(typeof m=="string")if(h){var _=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,h){return m(h)},Rn.useFormState=function(m,h,_){return f.H.useFormState(m,h,_)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.2.4",Rn}var d_;function Iy(){if(d_)return Ed.exports;d_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ed.exports=Fy(),Ed.exports}var h_;function zy(){if(h_)return ko;h_=1;var s=Py(),e=rp(),i=Iy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=d;break}if(A===o){x=!0,o=u,a=d;break}A=A.sibling}if(!x){for(A=d.child;A;){if(A===a){x=!0,a=d,o=u;break}if(A===o){x=!0,o=d,a=u;break}A=A.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),ie=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case F:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case N:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:ce(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ce(t(n))}catch{}}return null}var ae=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},me=[],Te=-1;function P(t){return{current:t}}function Y(t){0>Te||(t.current=me[Te],me[Te]=null,Te--)}function xe(t,n){Te++,me[Te]=t.current,t.current=n}var Ce=P(null),ze=P(null),te=P(null),Se=P(null);function Ae(t,n){switch(xe(te,n),xe(ze,t),xe(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Cg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Cg(n),t=wg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(Ce),xe(Ce,t)}function Xe(){Y(Ce),Y(ze),Y(te)}function Qe(t){t.memoizedState!==null&&xe(Se,t);var n=Ce.current,a=wg(n,t.type);n!==a&&(xe(ze,t),xe(Ce,a))}function et(t){ze.current===t&&(Y(Ce),Y(ze)),Se.current===t&&(Y(Se),zo._currentValue=fe)}var $t,vt;function mt(t){if($t===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",vt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+t+vt}var Dt=!1;function lt(t,n){if(!t||Dt)return"";Dt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(ue){var ne=ue}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(ue){ne=ue}t.call(ve.prototype)}}else{try{throw Error()}catch(ue){ne=ue}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(ue){if(ue&&ne&&typeof ue.stack=="string")return[ue.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],A=d[1];if(x&&A){var z=x.split(`
`),J=A.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===J.length)for(o=z.length-1,u=J.length-1;1<=o&&0<=u&&z[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==J[u]){var pe=`
`+z[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{Dt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?mt(a):""}function Qt(t,n){switch(t.tag){case 26:case 27:case 5:return mt(t.type);case 16:return mt("Lazy");case 13:return t.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return lt(t.type,!1);case 11:return lt(t.type.render,!1);case 1:return lt(t.type,!0);case 31:return mt("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=Qt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var qt=Object.prototype.hasOwnProperty,Et=s.unstable_scheduleCallback,Ut=s.unstable_cancelCallback,je=s.unstable_shouldYield,L=s.unstable_requestPaint,E=s.unstable_now,j=s.unstable_getCurrentPriorityLevel,ge=s.unstable_ImmediatePriority,ye=s.unstable_UserBlockingPriority,he=s.unstable_NormalPriority,We=s.unstable_LowPriority,De=s.unstable_IdlePriority,Ke=s.log,tt=s.unstable_setDisableYieldValue,be=null,Me=null;function Pe(t){if(typeof Ke=="function"&&tt(t),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(be,t)}catch{}}var Oe=Math.clz32?Math.clz32:q,Fe=Math.log,ut=Math.LN2;function q(t){return t>>>=0,t===0?32:31-(Fe(t)/ut|0)|0}var we=256,Re=262144,Ie=4194304;function Ee(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function de(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Ee(o):(x&=A,x!==0?u=Ee(x):a||(a=A&~t,a!==0&&(u=Ee(a))))):(A=o&~d,A!==0?u=Ee(A):x!==0?u=Ee(x):a||(a=o&~t,a!==0&&(u=Ee(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function He(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function bt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xi(t,n,a,o,u,d){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,z=t.expirationTimes,J=t.hiddenUpdates;for(a=x&~a;0<a;){var pe=31-Oe(a),ve=1<<pe;A[pe]=0,z[pe]=-1;var ne=J[pe];if(ne!==null)for(J[pe]=null,pe=0;pe<ne.length;pe++){var ue=ne[pe];ue!==null&&(ue.lane&=-536870913)}a&=~ve}o!==0&&Js(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function Js(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Oe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Vr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Oe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function fl(t,n){var a=n&-n;return a=(a&42)!==0?1:kr(a),(a&(t.suspendedLanes|n))!==0?0:a}function kr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Xr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Li(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:Jg(t.type))}function Wr(t,n){var a=B.p;try{return B.p=t,n()}finally{B.p=a}}var Si=Math.random().toString(36).slice(2),sn="__reactFiber$"+Si,mn="__reactProps$"+Si,Zi="__reactContainer$"+Si,Da="__reactEvents$"+Si,dl="__reactListeners$"+Si,hl="__reactHandles$"+Si,pl="__reactResources$"+Si,fr="__reactMarker$"+Si;function $s(t){delete t[sn],delete t[mn],delete t[Da],delete t[dl],delete t[hl]}function Na(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Zi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Fg(t);t!==null;){if(a=t[sn])return a;t=Fg(t)}return n}t=a,a=t.parentNode}return null}function Ua(t){if(t=t[sn]||t[Zi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function dr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function R(t){var n=t[pl];return n||(n=t[pl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function W(t){t[fr]=!0}var le=new Set,ee={};function K(t,n){Ne(t,n),Ne(t+"Capture",n)}function Ne(t,n){for(ee[t]=n,t=0;t<n.length;t++)le.add(n[t])}var Be=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ue={},qe={};function Ze(t){return qt.call(qe,t)?!0:qt.call(Ue,t)?!1:Be.test(t)?qe[t]=!0:(Ue[t]=!0,!1)}function nt(t,n,a){if(Ze(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function st(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ge(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function ft(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function At(t){if(!t._valueTracker){var n=jt(t)?"checked":"value";t._valueTracker=Yt(t,n,""+t[n])}}function gn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=jt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function ke(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Un=/[\n"\\]/g;function at(t){return t.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ln(t,n,a,o,u,d,x,A){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ft(n)):t.value!==""+ft(n)&&(t.value=""+ft(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?yi(t,x,ft(n)):a!=null?yi(t,x,ft(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ft(A):t.removeAttribute("name")}function jn(t,n,a,o,u,d,x,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){At(t);return}a=a!=null?""+ft(a):"",n=n!=null?""+ft(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),At(t)}function yi(t,n,a){n==="number"&&ke(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Yn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ft(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Lt(t,n,a){if(n!=null&&(n=""+ft(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ft(a):""}function on(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ae(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ft(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),At(t)}function On(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var ln=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mi(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||ln.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ki(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Mi(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Mi(t,d,n[d])}function qr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ax=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(t){return Rx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Qi(){}var pu=null;function mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jr=null,Yr=null;function Rp(t){var n=Ua(t);if(n&&(t=n.stateNode)){var a=t[mn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ln(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+at(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[mn]||null;if(!u)throw Error(r(90));Ln(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&gn(o)}break e;case"textarea":Lt(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Yn(t,!!a.multiple,n,!1)}}}var gu=!1;function Cp(t,n,a){if(gu)return t(n,a);gu=!0;try{var o=t(n);return o}finally{if(gu=!1,(jr!==null||Yr!==null)&&(nc(),jr&&(n=jr,t=Yr,Yr=jr=null,Rp(n),t)))for(n=0;n<t.length;n++)Rp(t[n])}}function eo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[mn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(Ji)try{var to={};Object.defineProperty(to,"passive",{get:function(){_u=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{_u=!1}var La=null,vu=null,gl=null;function wp(){if(gl)return gl;var t,n=vu,a=n.length,o,u="value"in La?La.value:La.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===u[d-o];o++);return gl=u.slice(t,1<o?1-o:void 0)}function _l(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Dp(){return!1}function zn(t){function n(a,o,u,d,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?vl:Dp,this.isPropagationStopped=Dp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=zn(hr),no=v({},hr,{view:0,detail:0}),Cx=zn(no),xu,Su,io,Sl=v({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(xu=t.screenX-io.screenX,Su=t.screenY-io.screenY):Su=xu=0,io=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),Np=zn(Sl),wx=v({},Sl,{dataTransfer:0}),Dx=zn(wx),Nx=v({},no,{relatedTarget:0}),yu=zn(Nx),Ux=v({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),Lx=zn(Ux),Ox=v({},hr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Px=zn(Ox),Fx=v({},hr,{data:0}),Up=zn(Fx),Ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Bx[t])?!!n[t]:!1}function Mu(){return Hx}var Gx=v({},no,{key:function(t){if(t.key){var n=Ix[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vx=zn(Gx),kx=v({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=zn(kx),Xx=v({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),Wx=zn(Xx),qx=v({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jx=zn(qx),Yx=v({},Sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zx=zn(Yx),Kx=v({},hr,{newState:0,oldState:0}),Qx=zn(Kx),Jx=[9,13,27,32],Eu=Ji&&"CompositionEvent"in window,ao=null;Ji&&"documentMode"in document&&(ao=document.documentMode);var $x=Ji&&"TextEvent"in window&&!ao,Op=Ji&&(!Eu||ao&&8<ao&&11>=ao),Pp=" ",Fp=!1;function Ip(t,n){switch(t){case"keyup":return Jx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function eS(t,n){switch(t){case"compositionend":return zp(n);case"keypress":return n.which!==32?null:(Fp=!0,Pp);case"textInput":return t=n.data,t===Pp&&Fp?null:t;default:return null}}function tS(t,n){if(Zr)return t==="compositionend"||!Eu&&Ip(t,n)?(t=wp(),gl=vu=La=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Op&&n.locale!=="ko"?null:n.data;default:return null}}var nS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!nS[t.type]:n==="textarea"}function Hp(t,n,a,o){jr?Yr?Yr.push(o):Yr=[o]:jr=o,n=cc(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ro=null,so=null;function iS(t){Mg(t,0)}function yl(t){var n=dr(t);if(gn(n))return t}function Gp(t,n){if(t==="change")return n}var Vp=!1;if(Ji){var bu;if(Ji){var Tu="oninput"in document;if(!Tu){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Tu=typeof kp.oninput=="function"}bu=Tu}else bu=!1;Vp=bu&&(!document.documentMode||9<document.documentMode)}function Xp(){ro&&(ro.detachEvent("onpropertychange",Wp),so=ro=null)}function Wp(t){if(t.propertyName==="value"&&yl(so)){var n=[];Hp(n,so,t,mu(t)),Cp(iS,n)}}function aS(t,n,a){t==="focusin"?(Xp(),ro=n,so=a,ro.attachEvent("onpropertychange",Wp)):t==="focusout"&&Xp()}function rS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(so)}function sS(t,n){if(t==="click")return yl(n)}function oS(t,n){if(t==="input"||t==="change")return yl(n)}function lS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:lS;function oo(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qt.call(n,u)||!Zn(t[u],n[u]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jp(t,n){var a=qp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qp(a)}}function Yp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Yp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Zp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ke(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ke(t.document)}return n}function Au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var cS=Ji&&"documentMode"in document&&11>=document.documentMode,Kr=null,Ru=null,lo=null,Cu=!1;function Kp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||Kr==null||Kr!==ke(o)||(o=Kr,"selectionStart"in o&&Au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=cc(Ru,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Kr)))}function pr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Qr={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},wu={},Qp={};Ji&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function mr(t){if(wu[t])return wu[t];if(!Qr[t])return t;var n=Qr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qp)return wu[t]=n[a];return t}var Jp=mr("animationend"),$p=mr("animationiteration"),em=mr("animationstart"),uS=mr("transitionrun"),fS=mr("transitionstart"),dS=mr("transitioncancel"),tm=mr("transitionend"),nm=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function Ei(t,n){nm.set(t,n),K(n,[t])}var Ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],Jr=0,Nu=0;function El(){for(var t=Jr,n=Nu=Jr=0;n<t;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var d=si[n];if(si[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&im(a,u,d)}}function bl(t,n,a,o){si[Jr++]=t,si[Jr++]=n,si[Jr++]=a,si[Jr++]=o,Nu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Uu(t,n,a,o){return bl(t,n,a,o),Tl(t)}function gr(t,n){return bl(t,null,null,n),Tl(t)}function im(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Oe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Tl(t){if(50<No)throw No=0,Vf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var $r={};function hS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,o){return new hS(t,n,a,o)}function Lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $i(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function am(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Al(t,n,a,o,u,d){var x=0;if(o=t,typeof t=="function")Lu(t)&&(x=1);else if(typeof t=="string")x=vy(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=Kn(31,a,n,u),t.elementType=D,t.lanes=d,t;case w:return _r(a.children,u,d,n);case y:x=8,u|=24;break;case S:return t=Kn(12,a,n,u|2),t.elementType=S,t.lanes=d,t;case H:return t=Kn(13,a,n,u),t.elementType=H,t.lanes=d,t;case F:return t=Kn(19,a,n,u),t.elementType=F,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:x=10;break e;case C:x=9;break e;case U:x=11;break e;case I:x=14;break e;case T:x=16,o=null;break e}x=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Kn(x,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function _r(t,n,a,o){return t=Kn(7,t,o,n),t.lanes=a,t}function Ou(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function rm(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Pu(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var sm=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=sm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},sm.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var es=[],ts=0,Rl=null,co=0,li=[],ci=0,Oa=null,Oi=1,Pi="";function ea(t,n){es[ts++]=co,es[ts++]=Rl,Rl=t,co=n}function om(t,n,a){li[ci++]=Oi,li[ci++]=Pi,li[ci++]=Oa,Oa=t;var o=Oi;t=Pi;var u=32-Oe(o)-1;o&=~(1<<u),a+=1;var d=32-Oe(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Oi=1<<32-Oe(n)+u|a<<u|o,Pi=d+t}else Oi=1<<d|a<<u|o,Pi=t}function Fu(t){t.return!==null&&(ea(t,1),om(t,1,0))}function Iu(t){for(;t===Rl;)Rl=es[--ts],es[ts]=null,co=es[--ts],es[ts]=null;for(;t===Oa;)Oa=li[--ci],li[ci]=null,Pi=li[--ci],li[ci]=null,Oi=li[--ci],li[ci]=null}function lm(t,n){li[ci++]=Oi,li[ci++]=Pi,li[ci++]=Oa,Oi=n.id,Pi=n.overflow,Oa=t}var Mn=null,Xt=null,yt=!1,Pa=null,ui=!1,zu=Error(r(519));function Fa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(oi(n,t)),zu}function cm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[sn]=t,n[mn]=o,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)_t(Lo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),jn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),on(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ag(n.textContent,a)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||Fa(t,!0)}function um(t){for(Mn=t.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:Mn=Mn.return}}function ns(t){if(t!==Mn)return!1;if(!yt)return um(t),yt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||id(t.type,t.memoizedProps)),a=!a),a&&Xt&&Fa(t),um(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Xt=Pg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Xt=Pg(t)}else n===27?(n=Xt,Ka(t.type)?(t=ld,ld=null,Xt=t):Xt=n):Xt=Mn?di(t.stateNode.nextSibling):null;return!0}function vr(){Xt=Mn=null,yt=!1}function Bu(){var t=Pa;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),Pa=null),t}function uo(t){Pa===null?Pa=[t]:Pa.push(t)}var Hu=P(null),xr=null,ta=null;function Ia(t,n,a){xe(Hu,n._currentValue),n._currentValue=a}function na(t){t._currentValue=Hu.current,Y(Hu)}function Gu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Vu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=u;for(var z=0;z<n.length;z++)if(A.context===n[z]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Gu(d.return,a,t),o||(x=null);break e}d=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),Gu(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function is(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var A=u.type;Zn(u.pendingProps.value,x.value)||(t!==null?t.push(A):t=[A])}}else if(u===Se.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}u=u.return}t!==null&&Vu(n,t,a,o),n.flags|=262144}function Cl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sr(t){xr=t,ta=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return fm(xr,t)}function wl(t,n){return xr===null&&Sr(t),fm(t,n)}function fm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ta===null){if(t===null)throw Error(r(308));ta=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ta=ta.next=n;return a}var pS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},mS=s.unstable_scheduleCallback,gS=s.unstable_NormalPriority,cn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new pS,data:new Map,refCount:0}}function fo(t){t.refCount--,t.refCount===0&&mS(gS,function(){t.controller.abort()})}var ho=null,Xu=0,as=0,rs=null;function _S(t,n){if(ho===null){var a=ho=[];Xu=0,as=Yf(),rs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Xu++,n.then(dm,dm),n}function dm(){if(--Xu===0&&ho!==null){rs!==null&&(rs.status="fulfilled");var t=ho;ho=null,as=0,rs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function vS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var hm=O.S;O.S=function(t,n){K0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&_S(t,n),hm!==null&&hm(t,n)};var yr=P(null);function Wu(){var t=yr.current;return t!==null?t:kt.pooledCache}function Dl(t,n){n===null?xe(yr,yr.current):xe(yr,n.pool)}function pm(){var t=Wu();return t===null?null:{parent:cn._currentValue,pool:t}}var ss=Error(r(460)),qu=Error(r(474)),Nl=Error(r(542)),Ul={then:function(){}};function mm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function gm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,vm(t),t;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,vm(t),t}throw Er=n,ss}}function Mr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Er=a,ss):a}}var Er=null;function _m(){if(Er===null)throw Error(r(459));var t=Er;return Er=null,t}function vm(t){if(t===ss||t===Nl)throw Error(r(483))}var os=null,po=0;function Ll(t){var n=po;return po+=1,os===null&&(os=[]),gm(os,t,n)}function mo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ol(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function xm(t){function n(Z,X){if(t){var Q=Z.deletions;Q===null?(Z.deletions=[X],Z.flags|=16):Q.push(X)}}function a(Z,X){if(!t)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function o(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function u(Z,X){return Z=$i(Z,X),Z.index=0,Z.sibling=null,Z}function d(Z,X,Q){return Z.index=Q,t?(Q=Z.alternate,Q!==null?(Q=Q.index,Q<X?(Z.flags|=67108866,X):Q):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function x(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,X,Q,_e){return X===null||X.tag!==6?(X=Ou(Q,Z.mode,_e),X.return=Z,X):(X=u(X,Q),X.return=Z,X)}function z(Z,X,Q,_e){var Je=Q.type;return Je===w?pe(Z,X,Q.props.children,_e,Q.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===T&&Mr(Je)===X.type)?(X=u(X,Q.props),mo(X,Q),X.return=Z,X):(X=Al(Q.type,Q.key,Q.props,null,Z.mode,_e),mo(X,Q),X.return=Z,X)}function J(Z,X,Q,_e){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=Pu(Q,Z.mode,_e),X.return=Z,X):(X=u(X,Q.children||[]),X.return=Z,X)}function pe(Z,X,Q,_e,Je){return X===null||X.tag!==7?(X=_r(Q,Z.mode,_e,Je),X.return=Z,X):(X=u(X,Q),X.return=Z,X)}function ve(Z,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ou(""+X,Z.mode,Q),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return Q=Al(X.type,X.key,X.props,null,Z.mode,Q),mo(Q,X),Q.return=Z,Q;case b:return X=Pu(X,Z.mode,Q),X.return=Z,X;case T:return X=Mr(X),ve(Z,X,Q)}if(ae(X)||$(X))return X=_r(X,Z.mode,Q,null),X.return=Z,X;if(typeof X.then=="function")return ve(Z,Ll(X),Q);if(X.$$typeof===N)return ve(Z,wl(Z,X),Q);Ol(Z,X)}return null}function ne(Z,X,Q,_e){var Je=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Je!==null?null:A(Z,X,""+Q,_e);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Je?z(Z,X,Q,_e):null;case b:return Q.key===Je?J(Z,X,Q,_e):null;case T:return Q=Mr(Q),ne(Z,X,Q,_e)}if(ae(Q)||$(Q))return Je!==null?null:pe(Z,X,Q,_e,null);if(typeof Q.then=="function")return ne(Z,X,Ll(Q),_e);if(Q.$$typeof===N)return ne(Z,X,wl(Z,Q),_e);Ol(Z,Q)}return null}function ue(Z,X,Q,_e,Je){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Z=Z.get(Q)||null,A(X,Z,""+_e,Je);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case M:return Z=Z.get(_e.key===null?Q:_e.key)||null,z(X,Z,_e,Je);case b:return Z=Z.get(_e.key===null?Q:_e.key)||null,J(X,Z,_e,Je);case T:return _e=Mr(_e),ue(Z,X,Q,_e,Je)}if(ae(_e)||$(_e))return Z=Z.get(Q)||null,pe(X,Z,_e,Je,null);if(typeof _e.then=="function")return ue(Z,X,Q,Ll(_e),Je);if(_e.$$typeof===N)return ue(Z,X,Q,wl(X,_e),Je);Ol(X,_e)}return null}function Ve(Z,X,Q,_e){for(var Je=null,Rt=null,Ye=X,dt=X=0,St=null;Ye!==null&&dt<Q.length;dt++){Ye.index>dt?(St=Ye,Ye=null):St=Ye.sibling;var Ct=ne(Z,Ye,Q[dt],_e);if(Ct===null){Ye===null&&(Ye=St);break}t&&Ye&&Ct.alternate===null&&n(Z,Ye),X=d(Ct,X,dt),Rt===null?Je=Ct:Rt.sibling=Ct,Rt=Ct,Ye=St}if(dt===Q.length)return a(Z,Ye),yt&&ea(Z,dt),Je;if(Ye===null){for(;dt<Q.length;dt++)Ye=ve(Z,Q[dt],_e),Ye!==null&&(X=d(Ye,X,dt),Rt===null?Je=Ye:Rt.sibling=Ye,Rt=Ye);return yt&&ea(Z,dt),Je}for(Ye=o(Ye);dt<Q.length;dt++)St=ue(Ye,Z,dt,Q[dt],_e),St!==null&&(t&&St.alternate!==null&&Ye.delete(St.key===null?dt:St.key),X=d(St,X,dt),Rt===null?Je=St:Rt.sibling=St,Rt=St);return t&&Ye.forEach(function(tr){return n(Z,tr)}),yt&&ea(Z,dt),Je}function $e(Z,X,Q,_e){if(Q==null)throw Error(r(151));for(var Je=null,Rt=null,Ye=X,dt=X=0,St=null,Ct=Q.next();Ye!==null&&!Ct.done;dt++,Ct=Q.next()){Ye.index>dt?(St=Ye,Ye=null):St=Ye.sibling;var tr=ne(Z,Ye,Ct.value,_e);if(tr===null){Ye===null&&(Ye=St);break}t&&Ye&&tr.alternate===null&&n(Z,Ye),X=d(tr,X,dt),Rt===null?Je=tr:Rt.sibling=tr,Rt=tr,Ye=St}if(Ct.done)return a(Z,Ye),yt&&ea(Z,dt),Je;if(Ye===null){for(;!Ct.done;dt++,Ct=Q.next())Ct=ve(Z,Ct.value,_e),Ct!==null&&(X=d(Ct,X,dt),Rt===null?Je=Ct:Rt.sibling=Ct,Rt=Ct);return yt&&ea(Z,dt),Je}for(Ye=o(Ye);!Ct.done;dt++,Ct=Q.next())Ct=ue(Ye,Z,dt,Ct.value,_e),Ct!==null&&(t&&Ct.alternate!==null&&Ye.delete(Ct.key===null?dt:Ct.key),X=d(Ct,X,dt),Rt===null?Je=Ct:Rt.sibling=Ct,Rt=Ct);return t&&Ye.forEach(function(wy){return n(Z,wy)}),yt&&ea(Z,dt),Je}function Vt(Z,X,Q,_e){if(typeof Q=="object"&&Q!==null&&Q.type===w&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:e:{for(var Je=Q.key;X!==null;){if(X.key===Je){if(Je=Q.type,Je===w){if(X.tag===7){a(Z,X.sibling),_e=u(X,Q.props.children),_e.return=Z,Z=_e;break e}}else if(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===T&&Mr(Je)===X.type){a(Z,X.sibling),_e=u(X,Q.props),mo(_e,Q),_e.return=Z,Z=_e;break e}a(Z,X);break}else n(Z,X);X=X.sibling}Q.type===w?(_e=_r(Q.props.children,Z.mode,_e,Q.key),_e.return=Z,Z=_e):(_e=Al(Q.type,Q.key,Q.props,null,Z.mode,_e),mo(_e,Q),_e.return=Z,Z=_e)}return x(Z);case b:e:{for(Je=Q.key;X!==null;){if(X.key===Je)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){a(Z,X.sibling),_e=u(X,Q.children||[]),_e.return=Z,Z=_e;break e}else{a(Z,X);break}else n(Z,X);X=X.sibling}_e=Pu(Q,Z.mode,_e),_e.return=Z,Z=_e}return x(Z);case T:return Q=Mr(Q),Vt(Z,X,Q,_e)}if(ae(Q))return Ve(Z,X,Q,_e);if($(Q)){if(Je=$(Q),typeof Je!="function")throw Error(r(150));return Q=Je.call(Q),$e(Z,X,Q,_e)}if(typeof Q.then=="function")return Vt(Z,X,Ll(Q),_e);if(Q.$$typeof===N)return Vt(Z,X,wl(Z,Q),_e);Ol(Z,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(a(Z,X.sibling),_e=u(X,Q),_e.return=Z,Z=_e):(a(Z,X),_e=Ou(Q,Z.mode,_e),_e.return=Z,Z=_e),x(Z)):a(Z,X)}return function(Z,X,Q,_e){try{po=0;var Je=Vt(Z,X,Q,_e);return os=null,Je}catch(Ye){if(Ye===ss||Ye===Nl)throw Ye;var Rt=Kn(29,Ye,null,Z.mode);return Rt.lanes=_e,Rt.return=Z,Rt}}}var br=xm(!0),Sm=xm(!1),za=!1;function ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Tl(t),im(t,null,a),n}return bl(t,o,n,a),Tl(t)}function go(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Vr(t,a)}}function Zu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ku=!1;function _o(){if(Ku){var t=rs;if(t!==null)throw t}}function vo(t,n,a,o){Ku=!1;var u=t.updateQueue;za=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var z=A,J=z.next;z.next=null,x===null?d=J:x.next=J,x=z;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,A=pe.lastBaseUpdate,A!==x&&(A===null?pe.firstBaseUpdate=J:A.next=J,pe.lastBaseUpdate=z))}if(d!==null){var ve=u.baseState;x=0,pe=J=z=null,A=d;do{var ne=A.lane&-536870913,ue=ne!==A.lane;if(ue?(xt&ne)===ne:(o&ne)===ne){ne!==0&&ne===as&&(Ku=!0),pe!==null&&(pe=pe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ve=t,$e=A;ne=n;var Vt=a;switch($e.tag){case 1:if(Ve=$e.payload,typeof Ve=="function"){ve=Ve.call(Vt,ve,ne);break e}ve=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=$e.payload,ne=typeof Ve=="function"?Ve.call(Vt,ve,ne):Ve,ne==null)break e;ve=v({},ve,ne);break e;case 2:za=!0}}ne=A.callback,ne!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[ne]:ue.push(ne))}else ue={lane:ne,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pe===null?(J=pe=ue,z=ve):pe=pe.next=ue,x|=ne;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ue=A,A=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);pe===null&&(z=ve),u.baseState=z,u.firstBaseUpdate=J,u.lastBaseUpdate=pe,d===null&&(u.shared.lanes=0),Wa|=x,t.lanes=x,t.memoizedState=ve}}function ym(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Mm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ym(a[t],n)}var ls=P(null),Pl=P(0);function Em(t,n){t=fa,xe(Pl,t),xe(ls,n),fa=t|n.baseLanes}function Qu(){xe(Pl,fa),xe(ls,ls.current)}function Ju(){fa=Pl.current,Y(ls),Y(Pl)}var Qn=P(null),fi=null;function Ga(t){var n=t.alternate;xe(nn,nn.current&1),xe(Qn,t),fi===null&&(n===null||ls.current!==null||n.memoizedState!==null)&&(fi=t)}function $u(t){xe(nn,nn.current),xe(Qn,t),fi===null&&(fi=t)}function bm(t){t.tag===22?(xe(nn,nn.current),xe(Qn,t),fi===null&&(fi=t)):Va()}function Va(){xe(nn,nn.current),xe(Qn,Qn.current)}function Jn(t){Y(Qn),fi===t&&(fi=null),Y(nn)}var nn=P(0);function Fl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||sd(a)||od(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,ct=null,Ht=null,un=null,Il=!1,cs=!1,Tr=!1,zl=0,xo=0,us=null,xS=0;function en(){throw Error(r(321))}function ef(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function tf(t,n,a,o,u,d){return ia=d,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?o0:_f,Tr=!1,d=a(o,u),Tr=!1,cs&&(d=Am(n,a,o,u)),Tm(t),d}function Tm(t){O.H=Mo;var n=Ht!==null&&Ht.next!==null;if(ia=0,un=Ht=ct=null,Il=!1,xo=0,us=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&Cl(t)&&(fn=!0))}function Am(t,n,a,o){ct=t;var u=0;do{if(cs&&(us=null),xo=0,cs=!1,25<=u)throw Error(r(301));if(u+=1,un=Ht=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=l0,d=n(a,o)}while(cs);return d}function SS(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?So(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(ct.flags|=1024),n}function nf(){var t=zl!==0;return zl=0,t}function af(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function rf(t){if(Il){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Il=!1}ia=0,un=Ht=ct=null,cs=!1,xo=zl=0,us=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ct.memoizedState=un=t:un=un.next=t,un}function an(){if(Ht===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=un===null?ct.memoizedState:un.next;if(n!==null)un=n,Ht=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},un===null?ct.memoizedState=un=t:un=un.next=t}return un}function Bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(t){var n=xo;return xo+=1,us===null&&(us=[]),t=gm(us,t,n),n=ct,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?o0:_f),t}function Hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return So(t);if(t.$$typeof===N)return En(t)}throw Error(r(438,String(t)))}function sf(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Bl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=ie;return n.index++,a}function aa(t,n){return typeof n=="function"?n(t):n}function Gl(t){var n=an();return of(n,Ht,t)}function of(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var A=x=null,z=null,J=n,pe=!1;do{var ve=J.lane&-536870913;if(ve!==J.lane?(xt&ve)===ve:(ia&ve)===ve){var ne=J.revertLane;if(ne===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ve===as&&(pe=!0);else if((ia&ne)===ne){J=J.next,ne===as&&(pe=!0);continue}else ve={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(A=z=ve,x=d):z=z.next=ve,ct.lanes|=ne,Wa|=ne;ve=J.action,Tr&&a(d,ve),d=J.hasEagerState?J.eagerState:a(d,ve)}else ne={lane:ve,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(A=z=ne,x=d):z=z.next=ne,ct.lanes|=ve,Wa|=ve;J=J.next}while(J!==null&&J!==n);if(z===null?x=d:z.next=A,!Zn(d,t.memoizedState)&&(fn=!0,pe&&(a=rs,a!==null)))throw a;t.memoizedState=d,t.baseState=x,t.baseQueue=z,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function lf(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);Zn(d,n.memoizedState)||(fn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Rm(t,n,a){var o=ct,u=an(),d=yt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Zn((Ht||u).memoizedState,a);if(x&&(u.memoizedState=a,fn=!0),u=u.queue,ff(Dm.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,fs(9,{destroy:void 0},wm.bind(null,o,u,a,n),null),kt===null)throw Error(r(349));d||(ia&127)!==0||Cm(o,n,a)}return a}function Cm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Bl(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function wm(t,n,a,o){n.value=a,n.getSnapshot=o,Nm(n)&&Um(t)}function Dm(t,n,a){return a(function(){Nm(n)&&Um(t)})}function Nm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function Um(t){var n=gr(t,2);n!==null&&kn(n,t,2)}function cf(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),Tr){Pe(!0);try{a()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},n}function Lm(t,n,a,o){return t.baseState=a,of(t,Ht,typeof o=="function"?o:aa)}function yS(t,n,a,o,u){if(Xl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Om(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Om(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=O.T,x={};O.T=x;try{var A=a(u,o),z=O.S;z!==null&&z(x,A),Pm(t,n,A)}catch(J){uf(t,n,J)}finally{d!==null&&x.types!==null&&(d.types=x.types),O.T=d}}else try{d=a(u,o),Pm(t,n,d)}catch(J){uf(t,n,J)}}function Pm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Fm(t,n,o)},function(o){return uf(t,n,o)}):Fm(t,n,a)}function Fm(t,n,a){n.status="fulfilled",n.value=a,Im(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Om(t,a)))}function uf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Im(n),n=n.next;while(n!==o)}t.action=null}function Im(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function zm(t,n){return n}function Bm(t,n){if(yt){var a=kt.formState;if(a!==null){e:{var o=ct;if(yt){if(Xt){t:{for(var u=Xt,d=ui;u.nodeType!==8;){if(!d){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Xt=di(u.nextSibling),o=u.data==="F!";break e}}Fa(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zm,lastRenderedState:n},a.queue=o,a=a0.bind(null,ct,o),o.dispatch=a,o=cf(!1),d=gf.bind(null,ct,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=yS.bind(null,ct,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Hm(t){var n=an();return Gm(n,Ht,t)}function Gm(t,n,a){if(n=of(t,n,zm)[0],t=Gl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=So(n)}catch(x){throw x===ss?Nl:x}else o=n;n=an();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,fs(9,{destroy:void 0},MS.bind(null,u,a),null)),[o,d,t]}function MS(t,n){t.action=n}function Vm(t){var n=an(),a=Ht;if(a!==null)return Gm(n,a,t);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function fs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Bl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function km(){return an().memoizedState}function Vl(t,n,a,o){var u=Pn();ct.flags|=t,u.memoizedState=fs(1|n,{destroy:void 0},a,o===void 0?null:o)}function kl(t,n,a,o){var u=an();o=o===void 0?null:o;var d=u.memoizedState.inst;Ht!==null&&o!==null&&ef(o,Ht.memoizedState.deps)?u.memoizedState=fs(n,d,a,o):(ct.flags|=t,u.memoizedState=fs(1|n,d,a,o))}function Xm(t,n){Vl(8390656,8,t,n)}function ff(t,n){kl(2048,8,t,n)}function ES(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Bl(),ct.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Wm(t){var n=an().memoizedState;return ES({ref:n,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function qm(t,n){return kl(4,2,t,n)}function jm(t,n){return kl(4,4,t,n)}function Ym(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Zm(t,n,a){a=a!=null?a.concat([t]):null,kl(4,4,Ym.bind(null,n,t),a)}function df(){}function Km(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ef(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Qm(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ef(n,o[1]))return o[0];if(o=t(),Tr){Pe(!0);try{t()}finally{Pe(!1)}}return a.memoizedState=[o,n],o}function hf(t,n,a){return a===void 0||(ia&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=J0(),ct.lanes|=t,Wa|=t,a)}function Jm(t,n,a,o){return Zn(a,n)?a:ls.current!==null?(t=hf(t,a,o),Zn(t,n)||(fn=!0),t):(ia&42)===0||(ia&1073741824)!==0&&(xt&261930)===0?(fn=!0,t.memoizedState=a):(t=J0(),ct.lanes|=t,Wa|=t,n)}function $m(t,n,a,o,u){var d=B.p;B.p=d!==0&&8>d?d:8;var x=O.T,A={};O.T=A,gf(t,!1,n,a);try{var z=u(),J=O.S;if(J!==null&&J(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var pe=vS(z,o);yo(t,n,pe,ti(t))}else yo(t,n,o,ti(t))}catch(ve){yo(t,n,{then:function(){},status:"rejected",reason:ve},ti())}finally{B.p=d,x!==null&&A.types!==null&&(x.types=A.types),O.T=x}}function bS(){}function pf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=e0(t).queue;$m(t,u,n,fe,a===null?bS:function(){return t0(t),a(o)})}function e0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:fe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function t0(t){var n=e0(t);n.next===null&&(n=t.alternate.memoizedState),yo(t,n.next.queue,{},ti())}function mf(){return En(zo)}function n0(){return an().memoizedState}function i0(){return an().memoizedState}function TS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();t=Ba(a);var o=Ha(n,t,a);o!==null&&(kn(o,n,a),go(o,n,a)),n={cache:ku()},t.payload=n;return}n=n.return}}function AS(t,n,a){var o=ti();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xl(t)?r0(n,a):(a=Uu(t,n,a,o),a!==null&&(kn(a,t,o),s0(a,n,o)))}function a0(t,n,a){var o=ti();yo(t,n,a,o)}function yo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xl(t))r0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,A=d(x,a);if(u.hasEagerState=!0,u.eagerState=A,Zn(A,x))return bl(t,n,u,0),kt===null&&El(),!1}catch{}if(a=Uu(t,n,u,o),a!==null)return kn(a,t,o),s0(a,n,o),!0}return!1}function gf(t,n,a,o){if(o={lane:2,revertLane:Yf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Xl(t)){if(n)throw Error(r(479))}else n=Uu(t,a,o,2),n!==null&&kn(n,t,2)}function Xl(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function r0(t,n){cs=Il=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function s0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Vr(t,a)}}var Mo={readContext:En,use:Hl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};Mo.useEffectEvent=en;var o0={readContext:En,use:Hl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:En,useEffect:Xm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Vl(4194308,4,Ym.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Vl(4194308,4,t,n)},useInsertionEffect:function(t,n){Vl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(Tr){Pe(!0);try{t()}finally{Pe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(Tr){Pe(!0);try{a(n)}finally{Pe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=AS.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=cf(t);var n=t.queue,a=a0.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:df,useDeferredValue:function(t,n){var a=Pn();return hf(a,t,n)},useTransition:function(){var t=cf(!1);return t=$m.bind(null,ct,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,u=Pn();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),kt===null)throw Error(r(349));(xt&127)!==0||Cm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Xm(Dm.bind(null,o,d,t),[t]),o.flags|=2048,fs(9,{destroy:void 0},wm.bind(null,o,d,a,n),null),a},useId:function(){var t=Pn(),n=kt.identifierPrefix;if(yt){var a=Pi,o=Oi;a=(o&~(1<<32-Oe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=xS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:mf,useFormState:Bm,useActionState:Bm,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gf.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:sf,useCacheRefresh:function(){return Pn().memoizedState=TS.bind(null,ct)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},_f={readContext:En,use:Hl,useCallback:Km,useContext:En,useEffect:ff,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:jm,useMemo:Qm,useReducer:Gl,useRef:km,useState:function(){return Gl(aa)},useDebugValue:df,useDeferredValue:function(t,n){var a=an();return Jm(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Gl(aa)[0],n=an().memoizedState;return[typeof t=="boolean"?t:So(t),n]},useSyncExternalStore:Rm,useId:n0,useHostTransitionStatus:mf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t,n){var a=an();return Lm(a,Ht,t,n)},useMemoCache:sf,useCacheRefresh:i0};_f.useEffectEvent=Wm;var l0={readContext:En,use:Hl,useCallback:Km,useContext:En,useEffect:ff,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:jm,useMemo:Qm,useReducer:lf,useRef:km,useState:function(){return lf(aa)},useDebugValue:df,useDeferredValue:function(t,n){var a=an();return Ht===null?hf(a,t,n):Jm(a,Ht.memoizedState,t,n)},useTransition:function(){var t=lf(aa)[0],n=an().memoizedState;return[typeof t=="boolean"?t:So(t),n]},useSyncExternalStore:Rm,useId:n0,useHostTransitionStatus:mf,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,n){var a=an();return Ht!==null?Lm(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:sf,useCacheRefresh:i0};l0.useEffectEvent=Wm;function vf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Ba(o);u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,o),n!==null&&(kn(n,t,o),go(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,o),n!==null&&(kn(n,t,o),go(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ti(),o=Ba(a);o.tag=2,n!=null&&(o.callback=n),n=Ha(t,o,a),n!==null&&(kn(n,t,a),go(n,t,a))}};function c0(t,n,a,o,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!oo(a,o)||!oo(u,d):!0}function u0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&xf.enqueueReplaceState(n,n.state,null)}function Ar(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function f0(t){Ml(t)}function d0(t){console.error(t)}function h0(t){Ml(t)}function Wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function p0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sf(t,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(t,n)},a}function m0(t){return t=Ba(t),t.tag=3,t}function g0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){p0(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){p0(n,a,o),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function RS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&is(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?ic():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Wf(t,o,u)),!1;case 22:return a.flags|=65536,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Wf(t,o,u)),!1}throw Error(r(435,a.tag))}return Wf(t,o,u),ic(),!1}if(yt)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==zu&&(t=Error(r(422),{cause:o}),uo(oi(t,a)))):(o!==zu&&(n=Error(r(423),{cause:o}),uo(oi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,a),u=Sf(t.stateNode,o,u),Zu(t,u),tn!==4&&(tn=2)),!1;var d=Error(r(520),{cause:o});if(d=oi(d,a),Do===null?Do=[d]:Do.push(d),tn!==4&&(tn=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Sf(a.stateNode,o,t),Zu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(qa===null||!qa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=m0(u),g0(u,t,a,o),Zu(a,u),!1}a=a.return}while(a!==null);return!1}var yf=Error(r(461)),fn=!1;function bn(t,n,a,o){n.child=t===null?Sm(n,null,a,o):br(n,t.child,a,o)}function _0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return Sr(n),o=tf(t,n,a,x,d,u),A=nf(),t!==null&&!fn?(af(t,n,u),ra(t,n,u)):(yt&&A&&Fu(n),n.flags|=1,bn(t,n,o,u),n.child)}function v0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Lu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,x0(t,n,d,o,u)):(t=Al(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!wf(t,u)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(x,o)&&t.ref===n.ref)return ra(t,n,u)}return n.flags|=1,t=$i(d,o),t.ref=n.ref,t.return=n,n.child=t}function x0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(oo(d,o)&&t.ref===n.ref)if(fn=!1,n.pendingProps=o=d,wf(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,ra(t,n,u)}return Mf(t,n,a,o,u)}function S0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return y0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Dl(n,d!==null?d.cachePool:null),d!==null?Em(n,d):Qu(),bm(n);else return o=n.lanes=536870912,y0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Dl(n,d.cachePool),Em(n,d),Va(),n.memoizedState=null):(t!==null&&Dl(n,null),Qu(),Va());return bn(t,n,u,a),n.child}function Eo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function y0(t,n,a,o,u){var d=Wu();return d=d===null?null:{parent:cn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Dl(n,null),Qu(),bm(n),t!==null&&is(t,n,o,!0),n.childLanes=u,null}function ql(t,n){return n=Yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function M0(t,n,a){return br(n,t.child,null,a),t=ql(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function CS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(yt){if(o.mode==="hidden")return t=ql(n,o),n.lanes=536870912,Eo(null,t);if($u(n),(t=Xt)?(t=Og(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=rm(t),a.return=n,n.child=a,Mn=n,Xt=null)):t=null,t===null)throw Fa(n);return n.lanes=536870912,null}return ql(n,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if($u(n),u)if(n.flags&256)n.flags&=-257,n=M0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||is(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(o=kt,o!==null&&(x=fl(o,a),x!==0&&x!==d.retryLane))throw d.retryLane=x,gr(t,x),kn(o,t,x),yf;ic(),n=M0(t,n,a)}else t=d.treeContext,Xt=di(x.nextSibling),Mn=n,yt=!0,Pa=null,ui=!1,t!==null&&lm(n,t),n=ql(n,o),n.flags|=4096;return n}return t=$i(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function jl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Mf(t,n,a,o,u){return Sr(n),a=tf(t,n,a,o,void 0,u),o=nf(),t!==null&&!fn?(af(t,n,u),ra(t,n,u)):(yt&&o&&Fu(n),n.flags|=1,bn(t,n,a,u),n.child)}function E0(t,n,a,o,u,d){return Sr(n),n.updateQueue=null,a=Am(n,o,a,u),Tm(t),o=nf(),t!==null&&!fn?(af(t,n,d),ra(t,n,d)):(yt&&o&&Fu(n),n.flags|=1,bn(t,n,a,d),n.child)}function b0(t,n,a,o,u){if(Sr(n),n.stateNode===null){var d=$r,x=a.contextType;typeof x=="object"&&x!==null&&(d=En(x)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=xf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},ju(n),x=a.contextType,d.context=typeof x=="object"&&x!==null?En(x):$r,d.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(vf(n,a,x,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&xf.enqueueReplaceState(d,d.state,null),vo(n,o,d,u),_o(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var A=n.memoizedProps,z=Ar(a,A);d.props=z;var J=d.context,pe=a.contextType;x=$r,typeof pe=="object"&&pe!==null&&(x=En(pe));var ve=a.getDerivedStateFromProps;pe=typeof ve=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||J!==x)&&u0(n,d,o,x),za=!1;var ne=n.memoizedState;d.state=ne,vo(n,o,d,u),_o(),J=n.memoizedState,A||ne!==J||za?(typeof ve=="function"&&(vf(n,a,ve,o),J=n.memoizedState),(z=za||c0(n,a,z,o,ne,J,x))?(pe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),d.props=o,d.state=J,d.context=x,o=z):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Yu(t,n),x=n.memoizedProps,pe=Ar(a,x),d.props=pe,ve=n.pendingProps,ne=d.context,J=a.contextType,z=$r,typeof J=="object"&&J!==null&&(z=En(J)),A=a.getDerivedStateFromProps,(J=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==ve||ne!==z)&&u0(n,d,o,z),za=!1,ne=n.memoizedState,d.state=ne,vo(n,o,d,u),_o();var ue=n.memoizedState;x!==ve||ne!==ue||za||t!==null&&t.dependencies!==null&&Cl(t.dependencies)?(typeof A=="function"&&(vf(n,a,A,o),ue=n.memoizedState),(pe=za||c0(n,a,pe,o,ne,ue,z)||t!==null&&t.dependencies!==null&&Cl(t.dependencies))?(J||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ue,z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ue,z)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),d.props=o,d.state=ue,d.context=z,o=pe):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,jl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=br(n,t.child,null,u),n.child=br(n,null,a,u)):bn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ra(t,n,u),t}function T0(t,n,a,o){return vr(),n.flags|=256,bn(t,n,a,o),n.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(t){return{baseLanes:t,cachePool:pm()}}function Tf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function A0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(yt){if(u?Ga(n):Va(),(t=Xt)?(t=Og(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=rm(t),a.return=n,n.child=a,Mn=n,Xt=null)):t=null,t===null)throw Fa(n);return od(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Va(),u=n.mode,A=Yl({mode:"hidden",children:A},u),o=_r(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=bf(a),o.childLanes=Tf(t,x,a),n.memoizedState=Ef,Eo(null,o)):(Ga(n),Af(n,A))}var z=t.memoizedState;if(z!==null&&(A=z.dehydrated,A!==null)){if(d)n.flags&256?(Ga(n),n.flags&=-257,n=Rf(t,n,a)):n.memoizedState!==null?(Va(),n.child=t.child,n.flags|=128,n=null):(Va(),A=o.fallback,u=n.mode,o=Yl({mode:"visible",children:o.children},u),A=_r(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,br(n,t.child,null,a),o=n.child,o.memoizedState=bf(a),o.childLanes=Tf(t,x,a),n.memoizedState=Ef,n=Eo(null,o));else if(Ga(n),od(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var J=x.dgst;x=J,o=Error(r(419)),o.stack="",o.digest=x,uo({value:o,source:null,stack:null}),n=Rf(t,n,a)}else if(fn||is(t,n,a,!1),x=(a&t.childLanes)!==0,fn||x){if(x=kt,x!==null&&(o=fl(x,a),o!==0&&o!==z.retryLane))throw z.retryLane=o,gr(t,o),kn(x,t,o),yf;sd(A)||ic(),n=Rf(t,n,a)}else sd(A)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Xt=di(A.nextSibling),Mn=n,yt=!0,Pa=null,ui=!1,t!==null&&lm(n,t),n=Af(n,o.children),n.flags|=4096);return n}return u?(Va(),A=o.fallback,u=n.mode,z=t.child,J=z.sibling,o=$i(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,J!==null?A=$i(J,A):(A=_r(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Eo(null,o),o=n.child,A=t.child.memoizedState,A===null?A=bf(a):(u=A.cachePool,u!==null?(z=cn._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=pm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Tf(t,x,a),n.memoizedState=Ef,Eo(t.child,o)):(Ga(n),a=t.child,t=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Af(t,n){return n=Yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Yl(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function Rf(t,n,a){return br(n,t.child,null,a),t=Af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function R0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Gu(t.return,n,a)}function Cf(t,n,a,o,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=d)}function C0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=nn.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,xe(nn,x),bn(t,n,o,a),o=yt?co:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&R0(t,a,n);else if(t.tag===19)R0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Fl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Cf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Fl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Cf(n,!0,a,null,d,o);break;case"together":Cf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Wa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(is(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=$i(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=$i(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function wf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Cl(t)))}function wS(t,n,a){switch(n.tag){case 3:Ae(n,n.stateNode.containerInfo),Ia(n,cn,t.memoizedState.cache),vr();break;case 27:case 5:Qe(n);break;case 4:Ae(n,n.stateNode.containerInfo);break;case 10:Ia(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$u(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?A0(t,n,a):(Ga(n),t=ra(t,n,a),t!==null?t.sibling:null);Ga(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(is(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return C0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(nn,nn.current),o)break;return null;case 22:return n.lanes=0,S0(t,n,a,n.pendingProps);case 24:Ia(n,cn,t.memoizedState.cache)}return ra(t,n,a)}function w0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!wf(t,a)&&(n.flags&128)===0)return fn=!1,wS(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,yt&&(n.flags&1048576)!==0&&om(n,co,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Mr(n.elementType),n.type=t,typeof t=="function")Lu(t)?(o=Ar(t,o),n.tag=1,n=b0(null,n,t,o,a)):(n.tag=0,n=Mf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===U){n.tag=11,n=_0(null,n,t,o,a);break e}else if(u===I){n.tag=14,n=v0(null,n,t,o,a);break e}}throw n=ce(t)||t,Error(r(306,n,""))}}return n;case 0:return Mf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ar(o,n.pendingProps),b0(t,n,o,u,a);case 3:e:{if(Ae(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Yu(t,n),vo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Ia(n,cn,o),o!==d.cache&&Vu(n,[cn],a,!0),_o(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=T0(t,n,o,a);break e}else if(o!==u){u=oi(Error(r(424)),n),uo(u),n=T0(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Xt=di(t.firstChild),Mn=n,yt=!0,Pa=null,ui=!0,a=Sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(vr(),o===u){n=ra(t,n,a);break e}bn(t,n,o,a)}n=n.child}return n;case 26:return jl(t,n),t===null?(a=Hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,t=n.pendingProps,o=uc(te.current).createElement(a),o[sn]=n,o[mn]=t,Tn(o,a,t),W(o),n.stateNode=o):n.memoizedState=Hg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Qe(n),t===null&&yt&&(o=n.stateNode=Ig(n.type,n.pendingProps,te.current),Mn=n,ui=!0,u=Xt,Ka(n.type)?(ld=u,Xt=di(o.firstChild)):Xt=u),bn(t,n,n.pendingProps.children,a),jl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&yt&&((u=o=Xt)&&(o=ry(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,Mn=n,Xt=di(o.firstChild),ui=!1,u=!0):u=!1),u||Fa(n)),Qe(n),u=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,id(u,d)?o=null:x!==null&&id(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=tf(t,n,SS,null,null,a),zo._currentValue=u),jl(t,n),bn(t,n,o,a),n.child;case 6:return t===null&&yt&&((t=a=Xt)&&(a=sy(a,n.pendingProps,ui),a!==null?(n.stateNode=a,Mn=n,Xt=null,t=!0):t=!1),t||Fa(n)),null;case 13:return A0(t,n,a);case 4:return Ae(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=br(n,null,o,a):bn(t,n,o,a),n.child;case 11:return _0(t,n,n.type,n.pendingProps,a);case 7:return bn(t,n,n.pendingProps,a),n.child;case 8:return bn(t,n,n.pendingProps.children,a),n.child;case 12:return bn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ia(n,n.type,o.value),bn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Sr(n),u=En(u),o=o(u),n.flags|=1,bn(t,n,o,a),n.child;case 14:return v0(t,n,n.type,n.pendingProps,a);case 15:return x0(t,n,n.type,n.pendingProps,a);case 19:return C0(t,n,a);case 31:return CS(t,n,a);case 22:return S0(t,n,a,n.pendingProps);case 24:return Sr(n),o=En(cn),t===null?(u=Wu(),u===null&&(u=kt,d=ku(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},ju(n),Ia(n,cn,u)):((t.lanes&a)!==0&&(Yu(t,n),vo(n,null,null,a),_o()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ia(n,cn,o)):(o=d.cache,Ia(n,cn,o),o!==u.cache&&Vu(n,[cn],a,!0))),bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function sa(t){t.flags|=4}function Df(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(ng())t.flags|=8192;else throw Er=Ul,qu}else t.flags&=-16777217}function D0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Wg(n))if(ng())t.flags|=8192;else throw Er=Ul,qu}function Zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ft():536870912,t.lanes|=n,ms|=n)}function bo(t,n){if(!yt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Wt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function DS(t,n,a){var o=n.pendingProps;switch(Iu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Wt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(cn),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ns(n)?sa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bu())),Wt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(sa(n),d!==null?(Wt(n),D0(n,d)):(Wt(n),Df(n,u,null,o,a))):d?d!==t.memoizedState?(sa(n),Wt(n),D0(n,d)):(Wt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&sa(n),Wt(n),Df(n,u,t,o,a)),null;case 27:if(et(n),a=te.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}t=Ce.current,ns(n)?cm(n):(t=Ig(u,o,a),n.stateNode=t,sa(n))}return Wt(n),null;case 5:if(et(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}if(d=Ce.current,ns(n))cm(n);else{var x=uc(te.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[sn]=n,d[mn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(Tn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&sa(n)}}return Wt(n),Df(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=te.current,ns(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Mn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ag(t.nodeValue,a)),t||Fa(n,!0)}else t=uc(t).createTextNode(o),t[sn]=n,n.stateNode=t}return Wt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ns(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[sn]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),t=!1}else a=Bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Wt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ns(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[sn]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),u=!1}else u=Bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),Wt(n),null);case 4:return Xe(),t===null&&Jf(n.stateNode.containerInfo),Wt(n),null;case 10:return na(n.type),Wt(n),null;case 19:if(Y(nn),o=n.memoizedState,o===null)return Wt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)bo(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Fl(t),d!==null){for(n.flags|=128,bo(o,!1),t=d.updateQueue,n.updateQueue=t,Zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)am(a,t),a=a.sibling;return xe(nn,nn.current&1|2),yt&&ea(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>ec&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Fl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Zl(n,t),bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!yt)return Wt(n),null}else 2*E()-o.renderingStartTime>ec&&a!==536870912&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,a=nn.current,xe(nn,u?a&1|2:a&1),yt&&ea(n,o.treeForkCount),t):(Wt(n),null);case 22:case 23:return Jn(n),Ju(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Y(yr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(cn),Wt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function NS(t,n){switch(Iu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return na(cn),Xe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(r(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y(nn),null;case 4:return Xe(),null;case 10:return na(n.type),null;case 22:case 23:return Jn(n),Ju(),t!==null&&Y(yr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return na(cn),null;case 25:return null;default:return null}}function N0(t,n){switch(Iu(n),n.tag){case 3:na(cn),Xe();break;case 26:case 27:case 5:et(n);break;case 4:Xe();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:Y(nn);break;case 10:na(n.type);break;case 22:case 23:Jn(n),Ju(),t!==null&&Y(yr);break;case 24:na(cn)}}function To(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,x=a.inst;o=d(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){zt(n,n.return,A)}}function ka(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var z=a,J=A;try{J()}catch(pe){zt(u,z,pe)}}}o=o.next}while(o!==d)}}catch(pe){zt(n,n.return,pe)}}function U0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Mm(n,a)}catch(o){zt(t,t.return,o)}}}function L0(t,n,a){a.props=Ar(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function Ao(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){zt(t,n,u)}}function Fi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){zt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(t,n,u)}else a.current=null}function O0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){zt(t,t.return,u)}}function Nf(t,n,a){try{var o=t.stateNode;$S(o,t.type,a,n),o[mn]=n}catch(u){zt(t,t.return,u)}}function P0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ka(t.type)||t.tag===4}function Uf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||P0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi));else if(o!==4&&(o===27&&Ka(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Lf(t,n,a),t=t.sibling;t!==null;)Lf(t,n,a),t=t.sibling}function Kl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ka(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Kl(t,n,a),t=t.sibling;t!==null;)Kl(t,n,a),t=t.sibling}function F0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,o,a),n[sn]=t,n[mn]=a}catch(d){zt(t,t.return,d)}}var oa=!1,dn=!1,Of=!1,I0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function US(t,n){if(t=t.containerInfo,td=_c,t=Zp(t),Au(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var x=0,A=-1,z=-1,J=0,pe=0,ve=t,ne=null;t:for(;;){for(var ue;ve!==a||u!==0&&ve.nodeType!==3||(A=x+u),ve!==d||o!==0&&ve.nodeType!==3||(z=x+o),ve.nodeType===3&&(x+=ve.nodeValue.length),(ue=ve.firstChild)!==null;)ne=ve,ve=ue;for(;;){if(ve===t)break t;if(ne===a&&++J===u&&(A=x),ne===d&&++pe===o&&(z=x),(ue=ve.nextSibling)!==null)break;ve=ne,ne=ve.parentNode}ve=ue}a=A===-1||z===-1?null:{start:A,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(nd={focusedElem:t,selectionRange:a},_c=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Ve=Ar(a.type,u);t=o.getSnapshotBeforeUpdate(Ve,d),o.__reactInternalSnapshotBeforeUpdate=t}catch($e){zt(a,a.return,$e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)rd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function z0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ca(t,a),o&4&&To(5,a);break;case 1:if(ca(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){zt(a,a.return,x)}else{var u=Ar(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){zt(a,a.return,x)}}o&64&&U0(a),o&512&&Ao(a,a.return);break;case 3:if(ca(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mm(t,n)}catch(x){zt(a,a.return,x)}}break;case 27:n===null&&o&4&&F0(a);case 26:case 5:ca(t,a),n===null&&o&4&&O0(a),o&512&&Ao(a,a.return);break;case 12:ca(t,a);break;case 31:ca(t,a),o&4&&G0(t,a);break;case 13:ca(t,a),o&4&&V0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=GS.bind(null,a),oy(t,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||dn,u=oa;var d=dn;oa=o,(dn=n)&&!d?ua(t,a,(a.subtreeFlags&8772)!==0):ca(t,a),oa=u,dn=d}break;case 30:break;default:ca(t,a)}}function B0(t){var n=t.alternate;n!==null&&(t.alternate=null,B0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&$s(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Bn=!1;function la(t,n,a){for(a=a.child;a!==null;)H0(t,n,a),a=a.sibling}function H0(t,n,a){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:dn||Fi(a,n),la(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Fi(a,n);var o=Zt,u=Bn;Ka(a.type)&&(Zt=a.stateNode,Bn=!1),la(t,n,a),Po(a.stateNode),Zt=o,Bn=u;break;case 5:dn||Fi(a,n);case 6:if(o=Zt,u=Bn,Zt=null,la(t,n,a),Zt=o,Bn=u,Zt!==null)if(Bn)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(d){zt(a,n,d)}else try{Zt.removeChild(a.stateNode)}catch(d){zt(a,n,d)}break;case 18:Zt!==null&&(Bn?(t=Zt,Ug(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Es(t)):Ug(Zt,a.stateNode));break;case 4:o=Zt,u=Bn,Zt=a.stateNode.containerInfo,Bn=!0,la(t,n,a),Zt=o,Bn=u;break;case 0:case 11:case 14:case 15:ka(2,a,n),dn||ka(4,a,n),la(t,n,a);break;case 1:dn||(Fi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&L0(a,n,o)),la(t,n,a);break;case 21:la(t,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,la(t,n,a),dn=o;break;default:la(t,n,a)}}function G0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Es(t)}catch(a){zt(n,n.return,a)}}}function V0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Es(t)}catch(a){zt(n,n.return,a)}}function LS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new I0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new I0),n;default:throw Error(r(435,t.tag))}}function Ql(t,n){var a=LS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=VS.bind(null,t,o);o.then(u,u)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,x=n,A=x;e:for(;A!==null;){switch(A.tag){case 27:if(Ka(A.type)){Zt=A.stateNode,Bn=!1;break e}break;case 5:Zt=A.stateNode,Bn=!1;break e;case 3:case 4:Zt=A.stateNode.containerInfo,Bn=!0;break e}A=A.return}if(Zt===null)throw Error(r(160));H0(d,x,u),Zt=null,Bn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)k0(n,t),n=n.sibling}var bi=null;function k0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),o&4&&(ka(3,t,t.return),To(3,t),ka(5,t,t.return));break;case 1:Hn(n,t),Gn(t),o&512&&(dn||a===null||Fi(a,a.return)),o&64&&oa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(Hn(n,t),Gn(t),o&512&&(dn||a===null||Fi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[fr]||d[sn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Tn(d,o,a),d[sn]=t,W(d),o=d;break e;case"link":var x=kg("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(d=x[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break t}}d=u.createElement(o),Tn(d,o,a),u.head.appendChild(d);break;case"meta":if(x=kg("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(d=x[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break t}}d=u.createElement(o),Tn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[sn]=t,W(d),o=d}t.stateNode=o}else Xg(u,t.type,t.stateNode);else t.stateNode=Vg(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Xg(u,t.type,t.stateNode):Vg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Nf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),o&512&&(dn||a===null||Fi(a,a.return)),a!==null&&o&4&&Nf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),o&512&&(dn||a===null||Fi(a,a.return)),t.flags&32){u=t.stateNode;try{On(u,"")}catch(Ve){zt(t,t.return,Ve)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Nf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Of=!0);break;case 6:if(Hn(n,t),Gn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ve){zt(t,t.return,Ve)}}break;case 3:if(hc=null,u=bi,bi=fc(n.containerInfo),Hn(n,t),bi=u,Gn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Es(n.containerInfo)}catch(Ve){zt(t,t.return,Ve)}Of&&(Of=!1,X0(t));break;case 4:o=bi,bi=fc(t.stateNode.containerInfo),Hn(n,t),Gn(t),bi=o;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($l=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,J=oa,pe=dn;if(oa=J||u,dn=pe||z,Hn(n,t),dn=pe,oa=J,Gn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||oa||dn||Rr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(d=z.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=z.stateNode;var ve=z.memoizedProps.style,ne=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;A.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(Ve){zt(z,z.return,Ve)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(Ve){zt(z,z.return,Ve)}}}else if(n.tag===18){if(a===null){z=n;try{var ue=z.stateNode;u?Lg(ue,!0):Lg(z.stateNode,!1)}catch(Ve){zt(z,z.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ql(t,a))));break;case 19:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(P0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Uf(t);Kl(t,d,u);break;case 5:var x=a.stateNode;a.flags&32&&(On(x,""),a.flags&=-33);var A=Uf(t);Kl(t,A,x);break;case 3:case 4:var z=a.stateNode.containerInfo,J=Uf(t);Lf(t,J,z);break;default:throw Error(r(161))}}catch(pe){zt(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function X0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;X0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)z0(t,n.alternate,n),n=n.sibling}function Rr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ka(4,n,n.return),Rr(n);break;case 1:Fi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&L0(n,n.return,a),Rr(n);break;case 27:Po(n.stateNode);case 26:case 5:Fi(n,n.return),Rr(n);break;case 22:n.memoizedState===null&&Rr(n);break;case 30:Rr(n);break;default:Rr(n)}t=t.sibling}}function ua(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:ua(u,d,a),To(4,d);break;case 1:if(ua(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){zt(o,o.return,J)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)ym(z[u],A)}catch(J){zt(o,o.return,J)}}a&&x&64&&U0(d),Ao(d,d.return);break;case 27:F0(d);case 26:case 5:ua(u,d,a),a&&o===null&&x&4&&O0(d),Ao(d,d.return);break;case 12:ua(u,d,a);break;case 31:ua(u,d,a),a&&x&4&&G0(u,d);break;case 13:ua(u,d,a),a&&x&4&&V0(u,d);break;case 22:d.memoizedState===null&&ua(u,d,a),Ao(d,d.return);break;case 30:break;default:ua(u,d,a)}n=n.sibling}}function Pf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&fo(a))}function Ff(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t))}function Ti(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)W0(t,n,a,o),n=n.sibling}function W0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,o),u&2048&&To(9,n);break;case 1:Ti(t,n,a,o);break;case 3:Ti(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t)));break;case 12:if(u&2048){Ti(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,A=d.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){zt(n,n.return,z)}}else Ti(t,n,a,o);break;case 31:Ti(t,n,a,o);break;case 13:Ti(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Ti(t,n,a,o):Ro(t,n):d._visibility&2?Ti(t,n,a,o):(d._visibility|=2,ds(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Pf(x,n);break;case 24:Ti(t,n,a,o),u&2048&&Ff(n.alternate,n);break;default:Ti(t,n,a,o)}}function ds(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,A=a,z=o,J=x.flags;switch(x.tag){case 0:case 11:case 15:ds(d,x,A,z,u),To(8,x);break;case 23:break;case 22:var pe=x.stateNode;x.memoizedState!==null?pe._visibility&2?ds(d,x,A,z,u):Ro(d,x):(pe._visibility|=2,ds(d,x,A,z,u)),u&&J&2048&&Pf(x.alternate,x);break;case 24:ds(d,x,A,z,u),u&&J&2048&&Ff(x.alternate,x);break;default:ds(d,x,A,z,u)}n=n.sibling}}function Ro(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ro(a,o),u&2048&&Pf(o.alternate,o);break;case 24:Ro(a,o),u&2048&&Ff(o.alternate,o);break;default:Ro(a,o)}n=n.sibling}}var Co=8192;function hs(t,n,a){if(t.subtreeFlags&Co)for(t=t.child;t!==null;)q0(t,n,a),t=t.sibling}function q0(t,n,a){switch(t.tag){case 26:hs(t,n,a),t.flags&Co&&t.memoizedState!==null&&xy(a,bi,t.memoizedState,t.memoizedProps);break;case 5:hs(t,n,a);break;case 3:case 4:var o=bi;bi=fc(t.stateNode.containerInfo),hs(t,n,a),bi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Co,Co=16777216,hs(t,n,a),Co=o):hs(t,n,a));break;default:hs(t,n,a)}}function j0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Z0(o,t)}j0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Y0(t),t=t.sibling}function Y0(t){switch(t.tag){case 0:case 11:case 15:wo(t),t.flags&2048&&ka(9,t,t.return);break;case 3:wo(t);break;case 12:wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Jl(t)):wo(t);break;default:wo(t)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Z0(o,t)}j0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ka(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}t=t.sibling}}function Z0(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=t;Sn!==null;){o=Sn;var u=o.sibling,d=o.return;if(B0(o),o===a){Sn=null;break e}if(u!==null){u.return=d,Sn=u;break e}Sn=d}}}var OS={getCacheForType:function(t){var n=En(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return En(cn).controller.signal}},PS=typeof WeakMap=="function"?WeakMap:Map,Nt=0,kt=null,gt=null,xt=0,It=0,$n=null,Xa=!1,ps=!1,If=!1,fa=0,tn=0,Wa=0,Cr=0,zf=0,ei=0,ms=0,Do=null,Vn=null,Bf=!1,$l=0,K0=0,ec=1/0,tc=null,qa=null,_n=0,ja=null,gs=null,da=0,Hf=0,Gf=null,Q0=null,No=0,Vf=null;function ti(){return(Nt&2)!==0&&xt!==0?xt&-xt:O.T!==null?Yf():Li()}function J0(){if(ei===0)if((xt&536870912)===0||yt){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),ei=t}else ei=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ei}function kn(t,n,a){(t===kt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(_s(t,0),Ya(t,xt,ei,!1)),Nn(t,a),((Nt&2)===0||t!==kt)&&(t===kt&&((Nt&2)===0&&(Cr|=a),tn===4&&Ya(t,xt,ei,!1)),Ii(t))}function $0(t,n,a){if((Nt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||He(t,n),u=o?zS(t,n):Xf(t,n,!0),d=o;do{if(u===0){ps&&!o&&Ya(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!FS(a)){u=Xf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var A=t;u=Do;var z=A.current.memoizedState.isDehydrated;if(z&&(_s(A,x).flags|=256),x=Xf(A,x,!1),x!==2){if(If&&!z){A.errorRecoveryDisabledLanes|=d,Cr|=d,u=4;break e}d=Vn,Vn=u,d!==null&&(Vn===null?Vn=d:Vn.push.apply(Vn,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){_s(t,0),Ya(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ya(o,n,ei,!Xa);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=$l+300-E(),10<u)){if(Ya(o,n,ei,!Xa),de(o,0,!0)!==0)break e;da=n,o.timeoutHandle=Dg(eg.bind(null,o,a,Vn,tc,Bf,n,ei,Cr,ms,Xa,d,"Throttled",-0,0),u);break e}eg(o,a,Vn,tc,Bf,n,ei,Cr,ms,Xa,d,null,-0,0)}}break}while(!0);Ii(t)}function eg(t,n,a,o,u,d,x,A,z,J,pe,ve,ne,ue){if(t.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},q0(n,d,ve);var Ve=(d&62914560)===d?$l-E():(d&4194048)===d?K0-E():0;if(Ve=Sy(ve,Ve),Ve!==null){da=d,t.cancelPendingCommit=Ve(lg.bind(null,t,n,d,a,o,u,x,A,z,pe,ve,null,ne,ue)),Ya(t,d,x,!J);return}}lg(t,n,d,a,o,u,x,A,z)}function FS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Zn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(t,n,a,o){n&=~zf,n&=~Cr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Oe(u),x=1<<d;o[d]=-1,u&=~x}a!==0&&Js(t,a,n)}function nc(){return(Nt&6)===0?(Uo(0),!1):!0}function kf(){if(gt!==null){if(It===0)var t=gt.return;else t=gt,ta=xr=null,rf(t),os=null,po=0,t=gt;for(;t!==null;)N0(t.alternate,t),t=t.return;gt=null}}function _s(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ny(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),da=0,kf(),kt=t,gt=a=$i(t.current,null),xt=n,It=0,$n=null,Xa=!1,ps=He(t,n),If=!1,ms=ei=zf=Cr=Wa=tn=0,Vn=Do=null,Bf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Oe(o),d=1<<u;n|=t[u],o&=~d}return fa=n,El(),a}function tg(t,n){ct=null,O.H=Mo,n===ss||n===Nl?(n=_m(),It=3):n===qu?(n=_m(),It=4):It=n===yf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,gt===null&&(tn=1,Wl(t,oi(n,t.current)))}function ng(){var t=Qn.current;return t===null?!0:(xt&4194048)===xt?fi===null:(xt&62914560)===xt||(xt&536870912)!==0?t===fi:!1}function ig(){var t=O.H;return O.H=Mo,t===null?Mo:t}function ag(){var t=O.A;return O.A=OS,t}function ic(){tn=4,Xa||(xt&4194048)!==xt&&Qn.current!==null||(ps=!0),(Wa&134217727)===0&&(Cr&134217727)===0||kt===null||Ya(kt,xt,ei,!1)}function Xf(t,n,a){var o=Nt;Nt|=2;var u=ig(),d=ag();(kt!==t||xt!==n)&&(tc=null,_s(t,n)),n=!1;var x=tn;e:do try{if(It!==0&&gt!==null){var A=gt,z=$n;switch(It){case 8:kf(),x=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var J=It;if(It=0,$n=null,vs(t,A,z,J),a&&ps){x=0;break e}break;default:J=It,It=0,$n=null,vs(t,A,z,J)}}IS(),x=tn;break}catch(pe){tg(t,pe)}while(!0);return n&&t.shellSuspendCounter++,ta=xr=null,Nt=o,O.H=u,O.A=d,gt===null&&(kt=null,xt=0,El()),x}function IS(){for(;gt!==null;)rg(gt)}function zS(t,n){var a=Nt;Nt|=2;var o=ig(),u=ag();kt!==t||xt!==n?(tc=null,ec=E()+500,_s(t,n)):ps=He(t,n);e:do try{if(It!==0&&gt!==null){n=gt;var d=$n;t:switch(It){case 1:It=0,$n=null,vs(t,n,d,1);break;case 2:case 9:if(mm(d)){It=0,$n=null,sg(n);break}n=function(){It!==2&&It!==9||kt!==t||(It=7),Ii(t)},d.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:mm(d)?(It=0,$n=null,sg(n)):(It=0,$n=null,vs(t,n,d,7));break;case 5:var x=null;switch(gt.tag){case 26:x=gt.memoizedState;case 5:case 27:var A=gt;if(x?Wg(x):A.stateNode.complete){It=0,$n=null;var z=A.sibling;if(z!==null)gt=z;else{var J=A.return;J!==null?(gt=J,ac(J)):gt=null}break t}}It=0,$n=null,vs(t,n,d,5);break;case 6:It=0,$n=null,vs(t,n,d,6);break;case 8:kf(),tn=6;break e;default:throw Error(r(462))}}BS();break}catch(pe){tg(t,pe)}while(!0);return ta=xr=null,O.H=o,O.A=u,Nt=a,gt!==null?0:(kt=null,xt=0,El(),tn)}function BS(){for(;gt!==null&&!je();)rg(gt)}function rg(t){var n=w0(t.alternate,t,fa);t.memoizedProps=t.pendingProps,n===null?ac(t):gt=n}function sg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=E0(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=E0(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:rf(n);default:N0(a,n),n=gt=am(n,fa),n=w0(a,n,fa)}t.memoizedProps=t.pendingProps,n===null?ac(t):gt=n}function vs(t,n,a,o){ta=xr=null,rf(n),os=null,po=0;var u=n.return;try{if(RS(t,u,n,a,xt)){tn=1,Wl(t,oi(a,t.current)),gt=null;return}}catch(d){if(u!==null)throw gt=u,d;tn=1,Wl(t,oi(a,t.current)),gt=null;return}n.flags&32768?(yt||o===1?t=!0:ps||(xt&536870912)!==0?t=!1:(Xa=t=!0,(o===2||o===9||o===3||o===6)&&(o=Qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),og(n,t)):ac(n)}function ac(t){var n=t;do{if((n.flags&32768)!==0){og(n,Xa);return}t=n.return;var a=DS(n.alternate,n,fa);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);tn===0&&(tn=5)}function og(t,n){do{var a=NS(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);tn=6,gt=null}function lg(t,n,a,o,u,d,x,A,z){t.cancelPendingCommit=null;do rc();while(_n!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Nu,xi(t,a,d,x,A,z),t===kt&&(gt=kt=null,xt=0),gs=n,ja=t,da=a,Hf=d,Gf=u,Q0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,kS(he,function(){return hg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=B.p,B.p=2,x=Nt,Nt|=4;try{US(t,n,a)}finally{Nt=x,B.p=u,O.T=o}}_n=1,cg(),ug(),fg()}}function cg(){if(_n===1){_n=0;var t=ja,n=gs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=B.p;B.p=2;var u=Nt;Nt|=4;try{k0(n,t);var d=nd,x=Zp(t.containerInfo),A=d.focusedElem,z=d.selectionRange;if(x!==A&&A&&A.ownerDocument&&Yp(A.ownerDocument.documentElement,A)){if(z!==null&&Au(A)){var J=z.start,pe=z.end;if(pe===void 0&&(pe=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(pe,A.value.length);else{var ve=A.ownerDocument||document,ne=ve&&ve.defaultView||window;if(ne.getSelection){var ue=ne.getSelection(),Ve=A.textContent.length,$e=Math.min(z.start,Ve),Vt=z.end===void 0?$e:Math.min(z.end,Ve);!ue.extend&&$e>Vt&&(x=Vt,Vt=$e,$e=x);var Z=jp(A,$e),X=jp(A,Vt);if(Z&&X&&(ue.rangeCount!==1||ue.anchorNode!==Z.node||ue.anchorOffset!==Z.offset||ue.focusNode!==X.node||ue.focusOffset!==X.offset)){var Q=ve.createRange();Q.setStart(Z.node,Z.offset),ue.removeAllRanges(),$e>Vt?(ue.addRange(Q),ue.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),ue.addRange(Q))}}}}for(ve=[],ue=A;ue=ue.parentNode;)ue.nodeType===1&&ve.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ve.length;A++){var _e=ve[A];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}_c=!!td,nd=td=null}finally{Nt=u,B.p=o,O.T=a}}t.current=n,_n=2}}function ug(){if(_n===2){_n=0;var t=ja,n=gs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=B.p;B.p=2;var u=Nt;Nt|=4;try{z0(t,n.alternate,n)}finally{Nt=u,B.p=o,O.T=a}}_n=3}}function fg(){if(_n===4||_n===3){_n=0,L();var t=ja,n=gs,a=da,o=Q0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,gs=ja=null,dg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(qa=null),Xr(a),n=n.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=B.p,B.p=2,O.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var A=o[x];d(A.value,{componentStack:A.stack})}}finally{O.T=n,B.p=u}}(da&3)!==0&&rc(),Ii(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Vf?No++:(No=0,Vf=t):No=0,Uo(0)}}function dg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,fo(n)))}function rc(){return cg(),ug(),fg(),hg()}function hg(){if(_n!==5)return!1;var t=ja,n=Hf;Hf=0;var a=Xr(da),o=O.T,u=B.p;try{B.p=32>a?32:a,O.T=null,a=Gf,Gf=null;var d=ja,x=da;if(_n=0,gs=ja=null,da=0,(Nt&6)!==0)throw Error(r(331));var A=Nt;if(Nt|=4,Y0(d.current),W0(d,d.current,x,a),Nt=A,Uo(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(be,d)}catch{}return!0}finally{B.p=u,O.T=o,dg(t,n)}}function pg(t,n,a){n=oi(a,n),n=Sf(t.stateNode,n,2),t=Ha(t,n,2),t!==null&&(Nn(t,2),Ii(t))}function zt(t,n,a){if(t.tag===3)pg(t,t,a);else for(;n!==null;){if(n.tag===3){pg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qa===null||!qa.has(o))){t=oi(a,t),a=m0(2),o=Ha(n,a,2),o!==null&&(g0(a,o,n,t),Nn(o,2),Ii(o));break}}n=n.return}}function Wf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new PS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(If=!0,u.add(a),t=HS.bind(null,t,n,a),n.then(t,t))}function HS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,kt===t&&(xt&a)===a&&(tn===4||tn===3&&(xt&62914560)===xt&&300>E()-$l?(Nt&2)===0&&_s(t,0):zf|=a,ms===xt&&(ms=0)),Ii(t)}function mg(t,n){n===0&&(n=Ft()),t=gr(t,n),t!==null&&(Nn(t,n),Ii(t))}function GS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),mg(t,a)}function VS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),mg(t,a)}function kS(t,n){return Et(t,n)}var sc=null,xs=null,qf=!1,oc=!1,jf=!1,Za=0;function Ii(t){t!==xs&&t.next===null&&(xs===null?sc=xs=t:xs=xs.next=t),oc=!0,qf||(qf=!0,WS())}function Uo(t,n){if(!jf&&oc){jf=!0;do for(var a=!1,o=sc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Oe(42|t)+1)-1,d&=u&~(x&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,xg(o,d))}else d=xt,d=de(o,o===kt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||He(o,d)||(a=!0,xg(o,d));o=o.next}while(a);jf=!1}}function XS(){gg()}function gg(){oc=qf=!1;var t=0;Za!==0&&ty()&&(t=Za);for(var n=E(),a=null,o=sc;o!==null;){var u=o.next,d=_g(o,n);d===0?(o.next=null,a===null?sc=u:a.next=u,u===null&&(xs=a)):(a=o,(t!==0||(d&3)!==0)&&(oc=!0)),o=u}_n!==0&&_n!==5||Uo(t),Za!==0&&(Za=0)}function _g(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Oe(d),A=1<<x,z=u[x];z===-1?((A&a)===0||(A&o)!==0)&&(u[x]=it(A,n)):z<=n&&(t.expiredLanes|=A),d&=~A}if(n=kt,a=xt,a=de(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ut(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||He(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ut(o),Xr(a)){case 2:case 8:a=ye;break;case 32:a=he;break;case 268435456:a=De;break;default:a=he}return o=vg.bind(null,t),a=Et(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ut(o),t.callbackPriority=2,t.callbackNode=null,2}function vg(t,n){if(_n!==0&&_n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(rc()&&t.callbackNode!==a)return null;var o=xt;return o=de(t,t===kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:($0(t,o,n),_g(t,E()),t.callbackNode!=null&&t.callbackNode===a?vg.bind(null,t):null)}function xg(t,n){if(rc())return null;$0(t,n,!0)}function WS(){iy(function(){(Nt&6)!==0?Et(ge,XS):gg()})}function Yf(){if(Za===0){var t=as;t===0&&(t=we,we<<=1,(we&261888)===0&&(we=256)),Za=t}return Za}function Sg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ml(""+t)}function yg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function qS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Sg((u[mn]||null).action),x=o.submitter;x&&(n=(n=x[mn]||null)?Sg(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var A=new xl("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Za!==0){var z=x?yg(u,x):new FormData(u);pf(a,{pending:!0,data:z,method:u.method,action:d},null,z)}}else typeof d=="function"&&(A.preventDefault(),z=x?yg(u,x):new FormData(u),pf(a,{pending:!0,data:z,method:u.method,action:d},d,z))},currentTarget:u}]})}}for(var Zf=0;Zf<Du.length;Zf++){var Kf=Du[Zf],jS=Kf.toLowerCase(),YS=Kf[0].toUpperCase()+Kf.slice(1);Ei(jS,"on"+YS)}Ei(Jp,"onAnimationEnd"),Ei($p,"onAnimationIteration"),Ei(em,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(uS,"onTransitionRun"),Ei(fS,"onTransitionStart"),Ei(dS,"onTransitionCancel"),Ei(tm,"onTransitionEnd"),Ne("onMouseEnter",["mouseout","mouseover"]),Ne("onMouseLeave",["mouseout","mouseover"]),Ne("onPointerEnter",["pointerout","pointerover"]),Ne("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function Mg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],z=A.instance,J=A.currentTarget;if(A=A.listener,z!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=J;try{d(u)}catch(pe){Ml(pe)}u.currentTarget=null,d=z}else for(x=0;x<o.length;x++){if(A=o[x],z=A.instance,J=A.currentTarget,A=A.listener,z!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=J;try{d(u)}catch(pe){Ml(pe)}u.currentTarget=null,d=z}}}}function _t(t,n){var a=n[Da];a===void 0&&(a=n[Da]=new Set);var o=t+"__bubble";a.has(o)||(Eg(n,t,2,!1),a.add(o))}function Qf(t,n,a){var o=0;n&&(o|=4),Eg(a,t,o,n)}var lc="_reactListening"+Math.random().toString(36).slice(2);function Jf(t){if(!t[lc]){t[lc]=!0,le.forEach(function(a){a!=="selectionchange"&&(ZS.has(a)||Qf(a,!1,t),Qf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[lc]||(n[lc]=!0,Qf("selectionchange",!1,n))}}function Eg(t,n,a,o){switch(Jg(n)){case 2:var u=Ey;break;case 8:u=by;break;default:u=hd}a=u.bind(null,n,a,t),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function $f(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var z=x.tag;if((z===3||z===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=Na(A),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){o=d=x;continue e}A=A.parentNode}}o=o.return}Cp(function(){var J=d,pe=mu(a),ve=[];e:{var ne=nm.get(t);if(ne!==void 0){var ue=xl,Ve=t;switch(t){case"keypress":if(_l(a)===0)break e;case"keydown":case"keyup":ue=Vx;break;case"focusin":Ve="focus",ue=yu;break;case"focusout":Ve="blur",ue=yu;break;case"beforeblur":case"afterblur":ue=yu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=Wx;break;case Jp:case $p:case em:ue=Lx;break;case tm:ue=jx;break;case"scroll":case"scrollend":ue=Cx;break;case"wheel":ue=Zx;break;case"copy":case"cut":case"paste":ue=Px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=Lp;break;case"toggle":case"beforetoggle":ue=Qx}var $e=(n&4)!==0,Vt=!$e&&(t==="scroll"||t==="scrollend"),Z=$e?ne!==null?ne+"Capture":null:ne;$e=[];for(var X=J,Q;X!==null;){var _e=X;if(Q=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||Q===null||Z===null||(_e=eo(X,Z),_e!=null&&$e.push(Oo(X,_e,Q))),Vt)break;X=X.return}0<$e.length&&(ne=new ue(ne,Ve,null,a,pe),ve.push({event:ne,listeners:$e}))}}if((n&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",ne&&a!==pu&&(Ve=a.relatedTarget||a.fromElement)&&(Na(Ve)||Ve[Zi]))break e;if((ue||ne)&&(ne=pe.window===pe?pe:(ne=pe.ownerDocument)?ne.defaultView||ne.parentWindow:window,ue?(Ve=a.relatedTarget||a.toElement,ue=J,Ve=Ve?Na(Ve):null,Ve!==null&&(Vt=c(Ve),$e=Ve.tag,Ve!==Vt||$e!==5&&$e!==27&&$e!==6)&&(Ve=null)):(ue=null,Ve=J),ue!==Ve)){if($e=Np,_e="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&($e=Lp,_e="onPointerLeave",Z="onPointerEnter",X="pointer"),Vt=ue==null?ne:dr(ue),Q=Ve==null?ne:dr(Ve),ne=new $e(_e,X+"leave",ue,a,pe),ne.target=Vt,ne.relatedTarget=Q,_e=null,Na(pe)===J&&($e=new $e(Z,X+"enter",Ve,a,pe),$e.target=Q,$e.relatedTarget=Vt,_e=$e),Vt=_e,ue&&Ve)t:{for($e=KS,Z=ue,X=Ve,Q=0,_e=Z;_e;_e=$e(_e))Q++;_e=0;for(var Je=X;Je;Je=$e(Je))_e++;for(;0<Q-_e;)Z=$e(Z),Q--;for(;0<_e-Q;)X=$e(X),_e--;for(;Q--;){if(Z===X||X!==null&&Z===X.alternate){$e=Z;break t}Z=$e(Z),X=$e(X)}$e=null}else $e=null;ue!==null&&bg(ve,ne,ue,$e,!1),Ve!==null&&Vt!==null&&bg(ve,Vt,Ve,$e,!0)}}e:{if(ne=J?dr(J):window,ue=ne.nodeName&&ne.nodeName.toLowerCase(),ue==="select"||ue==="input"&&ne.type==="file")var Rt=Gp;else if(Bp(ne))if(Vp)Rt=oS;else{Rt=rS;var Ye=aS}else ue=ne.nodeName,!ue||ue.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?J&&qr(J.elementType)&&(Rt=Gp):Rt=sS;if(Rt&&(Rt=Rt(t,J))){Hp(ve,Rt,a,pe);break e}Ye&&Ye(t,ne,J),t==="focusout"&&J&&ne.type==="number"&&J.memoizedProps.value!=null&&yi(ne,"number",ne.value)}switch(Ye=J?dr(J):window,t){case"focusin":(Bp(Ye)||Ye.contentEditable==="true")&&(Kr=Ye,Ru=J,lo=null);break;case"focusout":lo=Ru=Kr=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Kp(ve,a,pe);break;case"selectionchange":if(cS)break;case"keydown":case"keyup":Kp(ve,a,pe)}var dt;if(Eu)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Zr?Ip(t,a)&&(St="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(Op&&a.locale!=="ko"&&(Zr||St!=="onCompositionStart"?St==="onCompositionEnd"&&Zr&&(dt=wp()):(La=pe,vu="value"in La?La.value:La.textContent,Zr=!0)),Ye=cc(J,St),0<Ye.length&&(St=new Up(St,t,null,a,pe),ve.push({event:St,listeners:Ye}),dt?St.data=dt:(dt=zp(a),dt!==null&&(St.data=dt)))),(dt=$x?eS(t,a):tS(t,a))&&(St=cc(J,"onBeforeInput"),0<St.length&&(Ye=new Up("onBeforeInput","beforeinput",null,a,pe),ve.push({event:Ye,listeners:St}),Ye.data=dt)),qS(ve,t,J,a,pe)}Mg(ve,n)})}function Oo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function cc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=eo(t,a),u!=null&&o.unshift(Oo(t,u,d)),u=eo(t,n),u!=null&&o.push(Oo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function KS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bg(t,n,a,o,u){for(var d=n._reactName,x=[];a!==null&&a!==o;){var A=a,z=A.alternate,J=A.stateNode;if(A=A.tag,z!==null&&z===o)break;A!==5&&A!==26&&A!==27||J===null||(z=J,u?(J=eo(a,d),J!=null&&x.unshift(Oo(a,J,z))):u||(J=eo(a,d),J!=null&&x.push(Oo(a,J,z)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var QS=/\r\n?/g,JS=/\u0000|\uFFFD/g;function Tg(t){return(typeof t=="string"?t:""+t).replace(QS,`
`).replace(JS,"")}function Ag(t,n){return n=Tg(n),Tg(t)===n}function Gt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||On(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&On(t,""+o);break;case"className":st(t,"class",o);break;case"tabIndex":st(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":st(t,a,o);break;case"style":Ki(t,o,d);break;case"data":if(n!=="object"){st(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ml(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Gt(t,n,"name",u.name,u,null),Gt(t,n,"formEncType",u.formEncType,u,null),Gt(t,n,"formMethod",u.formMethod,u,null),Gt(t,n,"formTarget",u.formTarget,u,null)):(Gt(t,n,"encType",u.encType,u,null),Gt(t,n,"method",u.method,u,null),Gt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ml(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Qi);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ml(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),nt(t,"popover",o);break;case"xlinkActuate":Ge(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ge(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ge(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ge(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ge(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ge(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":nt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ax.get(a)||a,nt(t,a,o))}}function ed(t,n,a,o,u,d){switch(a){case"style":Ki(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?On(t,o):(typeof o=="number"||typeof o=="bigint")&&On(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ee.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[mn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):nt(t,a,o)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,d,x,a,null)}}u&&Gt(t,n,"srcSet",a.srcSet,a,null),o&&Gt(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var A=d=x=u=null,z=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":x=pe;break;case"checked":z=pe;break;case"defaultChecked":J=pe;break;case"value":d=pe;break;case"defaultValue":A=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:Gt(t,n,o,pe,a,null)}}jn(t,d,A,z,J,x,u,!1);return;case"select":_t("invalid",t),o=x=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:Gt(t,n,u,A,a,null)}n=d,a=x,t.multiple=!!o,n!=null?Yn(t,!!o,n,!1):a!=null&&Yn(t,!!o,a,!0);return;case"textarea":_t("invalid",t),d=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Gt(t,n,x,A,a,null)}on(t,o,u,d);return;case"option":for(z in a)a.hasOwnProperty(z)&&(o=a[z],o!=null)&&(z==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Gt(t,n,z,o,a,null));return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<Lo.length;o++)_t(Lo[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,J,o,a,null)}return;default:if(qr(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&ed(t,n,pe,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Gt(t,n,A,o,a,null))}function $S(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,A=null,z=null,J=null,pe=null;for(ue in a){var ve=a[ue];if(a.hasOwnProperty(ue)&&ve!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":z=ve;default:o.hasOwnProperty(ue)||Gt(t,n,ue,null,o,ve)}}for(var ne in o){var ue=o[ne];if(ve=a[ne],o.hasOwnProperty(ne)&&(ue!=null||ve!=null))switch(ne){case"type":d=ue;break;case"name":u=ue;break;case"checked":J=ue;break;case"defaultChecked":pe=ue;break;case"value":x=ue;break;case"defaultValue":A=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:ue!==ve&&Gt(t,n,ne,ue,o,ve)}}Ln(t,x,A,z,J,pe,d,u);return;case"select":ue=x=A=ne=null;for(d in a)if(z=a[d],a.hasOwnProperty(d)&&z!=null)switch(d){case"value":break;case"multiple":ue=z;default:o.hasOwnProperty(d)||Gt(t,n,d,null,o,z)}for(u in o)if(d=o[u],z=a[u],o.hasOwnProperty(u)&&(d!=null||z!=null))switch(u){case"value":ne=d;break;case"defaultValue":A=d;break;case"multiple":x=d;default:d!==z&&Gt(t,n,u,d,o,z)}n=A,a=x,o=ue,ne!=null?Yn(t,!!a,ne,!1):!!o!=!!a&&(n!=null?Yn(t,!!a,n,!0):Yn(t,!!a,a?[]:"",!1));return;case"textarea":ue=ne=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Gt(t,n,A,null,o,u)}for(x in o)if(u=o[x],d=a[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":ne=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Gt(t,n,x,u,o,d)}Lt(t,ne,ue);return;case"option":for(var Ve in a)ne=a[Ve],a.hasOwnProperty(Ve)&&ne!=null&&!o.hasOwnProperty(Ve)&&(Ve==="selected"?t.selected=!1:Gt(t,n,Ve,null,o,ne));for(z in o)ne=o[z],ue=a[z],o.hasOwnProperty(z)&&ne!==ue&&(ne!=null||ue!=null)&&(z==="selected"?t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol":Gt(t,n,z,ne,o,ue));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)ne=a[$e],a.hasOwnProperty($e)&&ne!=null&&!o.hasOwnProperty($e)&&Gt(t,n,$e,null,o,ne);for(J in o)if(ne=o[J],ue=a[J],o.hasOwnProperty(J)&&ne!==ue&&(ne!=null||ue!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(137,n));break;default:Gt(t,n,J,ne,o,ue)}return;default:if(qr(n)){for(var Vt in a)ne=a[Vt],a.hasOwnProperty(Vt)&&ne!==void 0&&!o.hasOwnProperty(Vt)&&ed(t,n,Vt,void 0,o,ne);for(pe in o)ne=o[pe],ue=a[pe],!o.hasOwnProperty(pe)||ne===ue||ne===void 0&&ue===void 0||ed(t,n,pe,ne,o,ue);return}}for(var Z in a)ne=a[Z],a.hasOwnProperty(Z)&&ne!=null&&!o.hasOwnProperty(Z)&&Gt(t,n,Z,null,o,ne);for(ve in o)ne=o[ve],ue=a[ve],!o.hasOwnProperty(ve)||ne===ue||ne==null&&ue==null||Gt(t,n,ve,ne,o,ue)}function Rg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ey(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,x=u.initiatorType,A=u.duration;if(d&&A&&Rg(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var z=a[o],J=z.startTime;if(J>A)break;var pe=z.transferSize,ve=z.initiatorType;pe&&Rg(ve)&&(z=z.responseEnd,x+=pe*(z<A?1:(A-J)/(z-J)))}if(--o,n+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var td=null,nd=null;function uc(t){return t.nodeType===9?t:t.ownerDocument}function Cg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function id(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ad=null;function ty(){var t=window.event;return t&&t.type==="popstate"?t===ad?!1:(ad=t,!0):(ad=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,ny=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,iy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(t){return Ng.resolve(null).then(t).catch(ay)}:Dg;function ay(t){setTimeout(function(){throw t})}function Ka(t){return t==="head"}function Ug(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Es(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Po(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Po(a);for(var d=a.firstChild;d;){var x=d.nextSibling,A=d.nodeName;d[fr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=x}}else a==="body"&&Po(t.ownerDocument.body);a=u}while(a);Es(n)}function Lg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function rd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rd(a),$s(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ry(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[fr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function sy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function Og(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function sd(t){return t.data==="$?"||t.data==="$~"}function od(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function oy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ld=null;function Pg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Fg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Ig(t,n,a){switch(n=uc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$s(t)}var hi=new Map,zg=new Set;function fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ha=B.d;B.d={f:ly,r:cy,D:uy,C:fy,L:dy,m:hy,X:my,S:py,M:gy};function ly(){var t=ha.f(),n=nc();return t||n}function cy(t){var n=Ua(t);n!==null&&n.tag===5&&n.type==="form"?t0(n):ha.r(t)}var Ss=typeof document>"u"?null:document;function Bg(t,n,a){var o=Ss;if(o&&typeof n=="string"&&n){var u=at(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),zg.has(u)||(zg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Tn(n,"link",t),W(n),o.head.appendChild(n)))}}function uy(t){ha.D(t),Bg("dns-prefetch",t,null)}function fy(t,n){ha.C(t,n),Bg("preconnect",t,n)}function dy(t,n,a){ha.L(t,n,a);var o=Ss;if(o&&t&&n){var u='link[rel="preload"][as="'+at(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+at(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+at(a.imageSizes)+'"]')):u+='[href="'+at(t)+'"]';var d=u;switch(n){case"style":d=ys(t);break;case"script":d=Ms(t)}hi.has(d)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fo(d))||n==="script"&&o.querySelector(Io(d))||(n=o.createElement("link"),Tn(n,"link",t),W(n),o.head.appendChild(n)))}}function hy(t,n){ha.m(t,n);var a=Ss;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+at(o)+'"][href="'+at(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ms(t)}if(!hi.has(d)&&(t=v({rel:"modulepreload",href:t},n),hi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(d)))return}o=a.createElement("link"),Tn(o,"link",t),W(o),a.head.appendChild(o)}}}function py(t,n,a){ha.S(t,n,a);var o=Ss;if(o&&t){var u=R(o).hoistableStyles,d=ys(t);n=n||"default";var x=u.get(d);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(Fo(d)))A.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(d))&&cd(t,a);var z=x=o.createElement("link");W(z),Tn(z,"link",t),z._p=new Promise(function(J,pe){z.onload=J,z.onerror=pe}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,dc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(d,x)}}}function my(t,n){ha.X(t,n);var a=Ss;if(a&&t){var o=R(a).hoistableScripts,u=Ms(t),d=o.get(u);d||(d=a.querySelector(Io(u)),d||(t=v({src:t,async:!0},n),(n=hi.get(u))&&ud(t,n),d=a.createElement("script"),W(d),Tn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function gy(t,n){ha.M(t,n);var a=Ss;if(a&&t){var o=R(a).hoistableScripts,u=Ms(t),d=o.get(u);d||(d=a.querySelector(Io(u)),d||(t=v({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&ud(t,n),d=a.createElement("script"),W(d),Tn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Hg(t,n,a,o){var u=(u=te.current)?fc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ys(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ys(a.href);var d=R(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(Fo(t)))&&!d._p&&(x.instance=d,x.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),d||_y(u,t,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ms(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ys(t){return'href="'+at(t)+'"'}function Fo(t){return'link[rel="stylesheet"]['+t+"]"}function Gg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function _y(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),W(n),t.head.appendChild(n))}function Ms(t){return'[src="'+at(t)+'"]'}function Io(t){return"script[async]"+t}function Vg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+at(a.href)+'"]');if(o)return n.instance=o,W(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),W(o),Tn(o,"style",u),dc(o,a.precedence,t),n.instance=o;case"stylesheet":u=ys(a.href);var d=t.querySelector(Fo(u));if(d)return n.state.loading|=4,n.instance=d,W(d),d;o=Gg(a),(u=hi.get(u))&&cd(o,u),d=(t.ownerDocument||t).createElement("link"),W(d);var x=d;return x._p=new Promise(function(A,z){x.onload=A,x.onerror=z}),Tn(d,"link",o),n.state.loading|=4,dc(d,a.precedence,t),n.instance=d;case"script":return d=Ms(a.src),(u=t.querySelector(Io(d)))?(n.instance=u,W(u),u):(o=a,(u=hi.get(d))&&(o=v({},a),ud(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),W(u),Tn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,dc(o,a.precedence,t));return n.instance}function dc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var hc=null;function kg(t,n,a){if(hc===null){var o=new Map,u=hc=new Map;u.set(a,o)}else u=hc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[fr]||d[sn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var A=o.get(x);A?A.push(d):o.set(x,[d])}}return o}function Xg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function vy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function xy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ys(o.href),d=n.querySelector(Fo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=pc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,W(d);return}d=n.ownerDocument||n,o=Gg(o),(u=hi.get(u))&&cd(o,u),d=d.createElement("link"),W(d);var x=d;x._p=new Promise(function(A,z){x.onload=A,x.onerror=z}),Tn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=pc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var fd=0;function Sy(t,n){return t.stylesheets&&t.count===0&&gc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&fd===0&&(fd=62500*ey());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>fd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mc=null;function gc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mc=new Map,n.forEach(yy,t),mc=null,pc.call(t))}function yy(t,n){if(!(n.state.loading&4)){var a=mc.get(t);if(a)var o=a.get(null);else{a=new Map,mc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=a.get(x)||o,d===o&&a.set(null,u),a.set(x,u),this.count++,o=pc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var zo={$$typeof:N,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function My(t,n,a,o,u,d,x,A,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function qg(t,n,a,o,u,d,x,A,z,J,pe,ve){return t=new My(t,n,a,x,z,J,pe,ve,A),n=1,d===!0&&(n|=24),d=Kn(3,null,null,n),t.current=d,d.stateNode=t,n=ku(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},ju(d),t}function jg(t){return t?(t=$r,t):$r}function Yg(t,n,a,o,u,d){u=jg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ba(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ha(t,o,n),a!==null&&(kn(a,t,n),go(a,t,n))}function Zg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function dd(t,n){Zg(t,n),(t=t.alternate)&&Zg(t,n)}function Kg(t){if(t.tag===13||t.tag===31){var n=gr(t,67108864);n!==null&&kn(n,t,67108864),dd(t,67108864)}}function Qg(t){if(t.tag===13||t.tag===31){var n=ti();n=kr(n);var a=gr(t,n);a!==null&&kn(a,t,n),dd(t,n)}}var _c=!0;function Ey(t,n,a,o){var u=O.T;O.T=null;var d=B.p;try{B.p=2,hd(t,n,a,o)}finally{B.p=d,O.T=u}}function by(t,n,a,o){var u=O.T;O.T=null;var d=B.p;try{B.p=8,hd(t,n,a,o)}finally{B.p=d,O.T=u}}function hd(t,n,a,o){if(_c){var u=pd(o);if(u===null)$f(t,n,o,vc,a),$g(t,o);else if(Ay(u,t,n,a,o))o.stopPropagation();else if($g(t,o),n&4&&-1<Ty.indexOf(t)){for(;u!==null;){var d=Ua(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Ee(d.pendingLanes);if(x!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var z=1<<31-Oe(x);A.entanglements[1]|=z,x&=~z}Ii(d),(Nt&6)===0&&(ec=E()+500,Uo(0))}}break;case 31:case 13:A=gr(d,2),A!==null&&kn(A,d,2),nc(),dd(d,2)}if(d=pd(o),d===null&&$f(t,n,o,vc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else $f(t,n,o,null,a)}}function pd(t){return t=mu(t),md(t)}var vc=null;function md(t){if(vc=null,t=Na(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vc=t,null}function Jg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case ge:return 2;case ye:return 8;case he:case We:return 32;case De:return 268435456;default:return 32}default:return 32}}var gd=!1,Qa=null,Ja=null,$a=null,Bo=new Map,Ho=new Map,er=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(t,n){switch(t){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Ua(n),n!==null&&Kg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Ay(t,n,a,o,u){switch(n){case"focusin":return Qa=Go(Qa,t,n,a,o,u),!0;case"dragenter":return Ja=Go(Ja,t,n,a,o,u),!0;case"mouseover":return $a=Go($a,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Bo.set(d,Go(Bo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Ho.set(d,Go(Ho.get(d)||null,t,n,a,o,u)),!0}return!1}function e_(t){var n=Na(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Wr(t.priority,function(){Qg(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Wr(t.priority,function(){Qg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=pd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);pu=o,a.target.dispatchEvent(o),pu=null}else return n=Ua(a),n!==null&&Kg(n),t.blockedOn=a,!1;n.shift()}return!0}function t_(t,n,a){xc(t)&&a.delete(n)}function Ry(){gd=!1,Qa!==null&&xc(Qa)&&(Qa=null),Ja!==null&&xc(Ja)&&(Ja=null),$a!==null&&xc($a)&&($a=null),Bo.forEach(t_),Ho.forEach(t_)}function Sc(t,n){t.blockedOn===n&&(t.blockedOn=null,gd||(gd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ry)))}var yc=null;function n_(t){yc!==t&&(yc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){yc===t&&(yc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(md(o||a)===null)continue;break}var d=Ua(a);d!==null&&(t.splice(n,3),n-=3,pf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Es(t){function n(z){return Sc(z,t)}Qa!==null&&Sc(Qa,t),Ja!==null&&Sc(Ja,t),$a!==null&&Sc($a,t),Bo.forEach(n),Ho.forEach(n);for(var a=0;a<er.length;a++){var o=er[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<er.length&&(a=er[0],a.blockedOn===null);)e_(a),a.blockedOn===null&&er.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],x=u[mn]||null;if(typeof d=="function")x||n_(a);else if(x){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[mn]||null)A=x.formAction;else if(md(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),n_(a)}}}function i_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _d(t){this._internalRoot=t}Mc.prototype.render=_d.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ti();Yg(a,o,t,n,null,null)},Mc.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Yg(t.current,2,null,t,null,null),nc(),n[Zi]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Li();t={blockedOn:null,target:t,priority:n};for(var a=0;a<er.length&&n!==0&&n<er[a].priority;a++);er.splice(a,0,t),a===0&&e_(t)}};var a_=e.version;if(a_!=="19.2.4")throw Error(r(527,a_,"19.2.4"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Cy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{be=Ec.inject(Cy),Me=Ec}catch{}}return ko.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=f0,d=d0,x=h0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=qg(t,1,!1,null,null,a,o,null,u,d,x,i_),t[Zi]=n.current,Jf(t),new _d(n)},ko.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=f0,x=d0,A=h0,z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=qg(t,1,!0,n,a??null,o,u,z,d,x,A,i_),n.context=jg(null),a=n.current,o=ti(),o=kr(o),u=Ba(o),u.callback=null,Ha(a,u,o),a=o,n.current.lanes=a,Nn(n,a),Ii(n),t[Zi]=n.current,Jf(t),new Mc(n)},ko.version="19.2.4",ko}var p_;function By(){if(p_)return Sd.exports;p_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Sd.exports=zy(),Sd.exports}var Hy=By();const Gy=xv(Hy);var m_="popstate";function Vy(s={}){function e(r,l){let{pathname:c,search:f,hash:p}=r.location;return uh("",{pathname:c,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:nl(l)}return Xy(e,i,null,s)}function Kt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ni(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ky(){return Math.random().toString(36).substring(2,10)}function g_(s,e){return{usr:s.state,key:s.key,idx:e}}function uh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?qs(e):e,state:i,key:e&&e.key||r||ky()}}function nl({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function qs(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function Xy(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,p="POP",m=null,h=_();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function _(){return(f.state||{idx:null}).idx}function v(){p="POP";let y=_(),S=y==null?null:y-h;h=y,m&&m({action:p,location:w.location,delta:S})}function g(y,S){p="PUSH";let C=uh(w.location,y,S);h=_()+1;let N=g_(C,h),U=w.createHref(C);try{f.pushState(N,"",U)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(U)}c&&m&&m({action:p,location:w.location,delta:1})}function M(y,S){p="REPLACE";let C=uh(w.location,y,S);h=_();let N=g_(C,h),U=w.createHref(C);f.replaceState(N,"",U),c&&m&&m({action:p,location:w.location,delta:0})}function b(y){return Wy(y)}let w={get action(){return p},get location(){return s(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(m_,v),m=y,()=>{l.removeEventListener(m_,v),m=null}},createHref(y){return e(l,y)},createURL:b,encodeLocation(y){let S=b(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:g,replace:M,go(y){return f.go(y)}};return w}function Wy(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Kt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:nl(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Sv(s,e,i="/"){return qy(s,e,i,!1)}function qy(s,e,i,r){let l=typeof e=="string"?qs(e):e,c=Ta(l.pathname||"/",i);if(c==null)return null;let f=yv(s);jy(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let h=aM(c);p=nM(f[m],h,r)}return p}function yv(s,e=[],i=[],r="",l=!1){let c=(f,p,m=l,h)=>{let _={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(r)&&m)return;Kt(_.relativePath.startsWith(r),`Absolute route path "${_.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(r.length)}let v=ya([r,_.relativePath]),g=i.concat(_);f.children&&f.children.length>0&&(Kt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),yv(f.children,e,g,v,m)),!(f.path==null&&!f.index)&&e.push({path:v,score:eM(v,f.index),routesMeta:g})};return s.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))c(f,p);else for(let m of Mv(f.path))c(f,p,!0,m)}),e}function Mv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=Mv(r.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function jy(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:tM(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Yy=/^:[\w-]+$/,Zy=3,Ky=2,Qy=1,Jy=10,$y=-2,__=s=>s==="*";function eM(s,e){let i=s.split("/"),r=i.length;return i.some(__)&&(r+=$y),e&&(r+=Ky),i.filter(l=>!__(l)).reduce((l,c)=>l+(Yy.test(c)?Zy:c===""?Qy:Jy),r)}function tM(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function nM(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let p=0;p<r.length;++p){let m=r[p],h=p===r.length-1,_=c==="/"?e:e.slice(c.length)||"/",v=iu({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},_),g=m.route;if(!v&&h&&i&&!r[r.length-1].route.index&&(v=iu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:ya([c,v.pathname]),pathnameBase:lM(ya([c,v.pathnameBase])),route:g}),v.pathnameBase!=="/"&&(c=ya([c,v.pathnameBase]))}return f}function iu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=iM(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:r.reduce((h,{paramName:_,isOptional:v},g)=>{if(_==="*"){let b=p[g]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const M=p[g];return v&&!M?h[_]=void 0:h[_]=(M||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:s}}function iM(s,e=!1,i=!0){Ni(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(r.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function aM(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ni(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Ta(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var rM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function sM(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?qs(s):s,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=v_(i.substring(1),"/"):c=v_(i,e)):c=e,{pathname:c,search:cM(r),hash:uM(l)}}function v_(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function bd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oM(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function sp(s){let e=oM(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function op(s,e,i,r=!1){let l;typeof s=="string"?l=qs(s):(l={...s},Kt(!l.pathname||!l.pathname.includes("?"),bd("?","pathname","search",l)),Kt(!l.pathname||!l.pathname.includes("#"),bd("#","pathname","hash",l)),Kt(!l.search||!l.search.includes("#"),bd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let v=e.length-1;if(!r&&f.startsWith("..")){let g=f.split("/");for(;g[0]==="..";)g.shift(),v-=1;l.pathname=g.join("/")}p=v>=0?e[v]:"/"}let m=sM(l,p),h=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||_)&&(m.pathname+="/"),m}var ya=s=>s.join("/").replace(/\/\/+/g,"/"),lM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),cM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,uM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,fM=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function dM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function hM(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Ev=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function bv(s,e){let i=s;if(typeof i!="string"||!rM.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(Ev)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),p=Ta(f.pathname,e);f.origin===c.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{Ni(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Tv=["POST","PUT","PATCH","DELETE"];new Set(Tv);var pM=["GET",...Tv];new Set(pM);var js=re.createContext(null);js.displayName="DataRouter";var lu=re.createContext(null);lu.displayName="DataRouterState";var mM=re.createContext(!1),Av=re.createContext({isTransitioning:!1});Av.displayName="ViewTransition";var gM=re.createContext(new Map);gM.displayName="Fetchers";var _M=re.createContext(null);_M.displayName="Await";var ri=re.createContext(null);ri.displayName="Navigation";var sl=re.createContext(null);sl.displayName="Location";var Ui=re.createContext({outlet:null,matches:[],isDataRoute:!1});Ui.displayName="Route";var lp=re.createContext(null);lp.displayName="RouteError";var Rv="REACT_ROUTER_ERROR",vM="REDIRECT",xM="ROUTE_ERROR_RESPONSE";function SM(s){if(s.startsWith(`${Rv}:${vM}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function yM(s){if(s.startsWith(`${Rv}:${xM}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new fM(e.status,e.statusText,e.data)}catch{}}function MM(s,{relative:e}={}){Kt(Ys(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=re.useContext(ri),{hash:l,pathname:c,search:f}=ol(s,{relative:e}),p=c;return i!=="/"&&(p=c==="/"?i:ya([i,c])),r.createHref({pathname:p,search:f,hash:l})}function Ys(){return re.useContext(sl)!=null}function Ca(){return Kt(Ys(),"useLocation() may be used only in the context of a <Router> component."),re.useContext(sl).location}var Cv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function wv(s){re.useContext(ri).static||re.useLayoutEffect(s)}function Dv(){let{isDataRoute:s}=re.useContext(Ui);return s?FM():EM()}function EM(){Kt(Ys(),"useNavigate() may be used only in the context of a <Router> component.");let s=re.useContext(js),{basename:e,navigator:i}=re.useContext(ri),{matches:r}=re.useContext(Ui),{pathname:l}=Ca(),c=JSON.stringify(sp(r)),f=re.useRef(!1);return wv(()=>{f.current=!0}),re.useCallback((m,h={})=>{if(Ni(f.current,Cv),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=op(m,JSON.parse(c),l,h.relative==="path");s==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:ya([e,_.pathname])),(h.replace?i.replace:i.push)(_,h.state,h)},[e,i,c,l,s])}re.createContext(null);function bM(){let{matches:s}=re.useContext(Ui),e=s[s.length-1];return e?e.params:{}}function ol(s,{relative:e}={}){let{matches:i}=re.useContext(Ui),{pathname:r}=Ca(),l=JSON.stringify(sp(i));return re.useMemo(()=>op(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function TM(s,e){return Nv(s,e)}function Nv(s,e,i,r,l){Kt(Ys(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=re.useContext(ri),{matches:f}=re.useContext(Ui),p=f[f.length-1],m=p?p.params:{},h=p?p.pathname:"/",_=p?p.pathnameBase:"/",v=p&&p.route;{let C=v&&v.path||"";Lv(h,!v||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let g=Ca(),M;if(e){let C=typeof e=="string"?qs(e):e;Kt(_==="/"||C.pathname?.startsWith(_),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${C.pathname}" was given in the \`location\` prop.`),M=C}else M=g;let b=M.pathname||"/",w=b;if(_!=="/"){let C=_.replace(/^\//,"").split("/");w="/"+b.replace(/^\//,"").split("/").slice(C.length).join("/")}let y=Sv(s,{pathname:w});Ni(v||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Ni(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=DM(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},m,C.params),pathname:ya([_,c.encodeLocation?c.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?_:ya([_,c.encodeLocation?c.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),f,i,r,l);return e&&S?re.createElement(sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},S):S}function AM(){let s=PM(),e=dM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=re.createElement(re.Fragment,null,re.createElement("p",null,"💿 Hey developer 👋"),re.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",re.createElement("code",{style:c},"ErrorBoundary")," or"," ",re.createElement("code",{style:c},"errorElement")," prop on your route.")),re.createElement(re.Fragment,null,re.createElement("h2",null,"Unexpected Application Error!"),re.createElement("h3",{style:{fontStyle:"italic"}},e),i?re.createElement("pre",{style:l},i):null,f)}var RM=re.createElement(AM,null),Uv=class extends re.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=yM(s.digest);i&&(s=i)}let e=s!==void 0?re.createElement(Ui.Provider,{value:this.props.routeContext},re.createElement(lp.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?re.createElement(CM,{error:s},e):e}};Uv.contextType=mM;var Td=new WeakMap;function CM({children:s,error:e}){let{basename:i}=re.useContext(ri);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=SM(e.digest);if(r){let l=Td.get(e);if(l)throw l;let c=bv(r.location,i);if(Ev&&!Td.get(e))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw Td.set(e,f),f}return re.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return s}function wM({routeContext:s,match:e,children:i}){let r=re.useContext(js);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),re.createElement(Ui.Provider,{value:s},i)}function DM(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let _=c.findIndex(v=>v.route.id&&f?.[v.route.id]!==void 0);Kt(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,_+1))}let p=!1,m=-1;if(i)for(let _=0;_<c.length;_++){let v=c[_];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=_),v.route.id){let{loaderData:g,errors:M}=i,b=v.route.loader&&!g.hasOwnProperty(v.route.id)&&(!M||M[v.route.id]===void 0);if(v.route.lazy||b){p=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let h=i&&r?(_,v)=>{r(_,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:hM(i.matches),errorInfo:v})}:void 0;return c.reduceRight((_,v,g)=>{let M,b=!1,w=null,y=null;i&&(M=f&&v.route.id?f[v.route.id]:void 0,w=v.route.errorElement||RM,p&&(m<0&&g===0?(Lv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,y=null):m===g&&(b=!0,y=v.route.hydrateFallbackElement||null)));let S=e.concat(c.slice(0,g+1)),C=()=>{let N;return M?N=w:b?N=y:v.route.Component?N=re.createElement(v.route.Component,null):v.route.element?N=v.route.element:N=_,re.createElement(wM,{match:v,routeContext:{outlet:_,matches:S,isDataRoute:i!=null},children:N})};return i&&(v.route.ErrorBoundary||v.route.errorElement||g===0)?re.createElement(Uv,{location:i.location,revalidation:i.revalidation,component:w,error:M,children:C(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:h}):C()},null)}function cp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function NM(s){let e=re.useContext(js);return Kt(e,cp(s)),e}function UM(s){let e=re.useContext(lu);return Kt(e,cp(s)),e}function LM(s){let e=re.useContext(Ui);return Kt(e,cp(s)),e}function up(s){let e=LM(s),i=e.matches[e.matches.length-1];return Kt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function OM(){return up("useRouteId")}function PM(){let s=re.useContext(lp),e=UM("useRouteError"),i=up("useRouteError");return s!==void 0?s:e.errors?.[i]}function FM(){let{router:s}=NM("useNavigate"),e=up("useNavigate"),i=re.useRef(!1);return wv(()=>{i.current=!0}),re.useCallback(async(l,c={})=>{Ni(i.current,Cv),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var x_={};function Lv(s,e,i){!e&&!x_[s]&&(x_[s]=!0,Ni(!1,i))}re.memo(IM);function IM({routes:s,future:e,state:i,onError:r}){return Nv(s,void 0,i,r,e)}function Ov({to:s,replace:e,state:i,relative:r}){Kt(Ys(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=re.useContext(ri);Ni(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=re.useContext(Ui),{pathname:f}=Ca(),p=Dv(),m=op(s,sp(c),f,r==="path"),h=JSON.stringify(m);return re.useEffect(()=>{p(JSON.parse(h),{replace:e,state:i,relative:r})},[p,h,r,e,i]),null}function Yc(s){Kt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){Kt(!Ys(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=s.replace(/^\/*/,"/"),m=re.useMemo(()=>({basename:p,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[p,l,c,f]);typeof i=="string"&&(i=qs(i));let{pathname:h="/",search:_="",hash:v="",state:g=null,key:M="default"}=i,b=re.useMemo(()=>{let w=Ta(h,p);return w==null?null:{location:{pathname:w,search:_,hash:v,state:g,key:M},navigationType:r}},[p,h,_,v,g,M,r]);return Ni(b!=null,`<Router basename="${p}"> is not able to match the URL "${h}${_}${v}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:re.createElement(ri.Provider,{value:m},re.createElement(sl.Provider,{children:e,value:b}))}function BM({children:s,location:e}){return TM(fh(s),e)}function fh(s,e=[]){let i=[];return re.Children.forEach(s,(r,l)=>{if(!re.isValidElement(r))return;let c=[...e,l];if(r.type===re.Fragment){i.push.apply(i,fh(r.props.children,c));return}Kt(r.type===Yc,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Kt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=fh(r.props.children,c)),i.push(f)}),i}var Zc="get",Kc="application/x-www-form-urlencoded";function cu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function HM(s){return cu(s)&&s.tagName.toLowerCase()==="button"}function GM(s){return cu(s)&&s.tagName.toLowerCase()==="form"}function VM(s){return cu(s)&&s.tagName.toLowerCase()==="input"}function kM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function XM(s,e){return s.button===0&&(!e||e==="_self")&&!kM(s)}var bc=null;function WM(){if(bc===null)try{new FormData(document.createElement("form"),0),bc=!1}catch{bc=!0}return bc}var qM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ad(s){return s!=null&&!qM.has(s)?(Ni(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kc}"`),null):s}function jM(s,e){let i,r,l,c,f;if(GM(s)){let p=s.getAttribute("action");r=p?Ta(p,e):null,i=s.getAttribute("method")||Zc,l=Ad(s.getAttribute("enctype"))||Kc,c=new FormData(s)}else if(HM(s)||VM(s)&&(s.type==="submit"||s.type==="image")){let p=s.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||p.getAttribute("action");if(r=m?Ta(m,e):null,i=s.getAttribute("formmethod")||p.getAttribute("method")||Zc,l=Ad(s.getAttribute("formenctype"))||Ad(p.getAttribute("enctype"))||Kc,c=new FormData(p,s),!WM()){let{name:h,type:_,value:v}=s;if(_==="image"){let g=h?`${h}.`:"";c.append(`${g}x`,"0"),c.append(`${g}y`,"0")}else h&&c.append(h,v)}}else{if(cu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Zc,r=null,l=Kc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function fp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function YM(s,e,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:e&&Ta(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${r}`,l}async function ZM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function KM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function QM(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await ZM(c,i);return f.links?f.links():[]}return[]}));return tE(r.flat(1).filter(KM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function S_(s,e,i,r,l,c){let f=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,p=(m,h)=>i[h].pathname!==m.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,h)=>f(m,h)||p(m,h)):c==="data"?e.filter((m,h)=>{let _=r.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function JM(s,e,{includeHydrateFallback:i}={}){return $M(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function $M(s){return[...new Set(s)]}function eE(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function tE(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(eE(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function Pv(){let s=re.useContext(js);return fp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function nE(){let s=re.useContext(lu);return fp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var dp=re.createContext(void 0);dp.displayName="FrameworkContext";function Fv(){let s=re.useContext(dp);return fp(s,"You must render this element inside a <HydratedRouter> element"),s}function iE(s,e){let i=re.useContext(dp),[r,l]=re.useState(!1),[c,f]=re.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:_,onTouchStart:v}=e,g=re.useRef(null);re.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let w=S=>{S.forEach(C=>{f(C.isIntersecting)})},y=new IntersectionObserver(w,{threshold:.5});return g.current&&y.observe(g.current),()=>{y.disconnect()}}},[s]),re.useEffect(()=>{if(r){let w=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(w)}}},[r]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,g,{}]:[c,g,{onFocus:Xo(p,M),onBlur:Xo(m,b),onMouseEnter:Xo(h,M),onMouseLeave:Xo(_,b),onTouchStart:Xo(v,M)}]:[!1,g,{}]}function Xo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function aE({page:s,...e}){let{router:i}=Pv(),r=re.useMemo(()=>Sv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?re.createElement(sE,{page:s,matches:r,...e}):null}function rE(s){let{manifest:e,routeModules:i}=Fv(),[r,l]=re.useState([]);return re.useEffect(()=>{let c=!1;return QM(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function sE({page:s,matches:e,...i}){let r=Ca(),{future:l,manifest:c,routeModules:f}=Fv(),{basename:p}=Pv(),{loaderData:m,matches:h}=nE(),_=re.useMemo(()=>S_(s,e,h,c,r,"data"),[s,e,h,c,r]),v=re.useMemo(()=>S_(s,e,h,c,r,"assets"),[s,e,h,c,r]),g=re.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let w=new Set,y=!1;if(e.forEach(C=>{let N=c.routes[C.route.id];!N||!N.hasLoader||(!_.some(U=>U.route.id===C.route.id)&&C.route.id in m&&f[C.route.id]?.shouldRevalidate||N.hasClientLoader?y=!0:w.add(C.route.id))}),w.size===0)return[];let S=YM(s,p,l.unstable_trailingSlashAwareDataRequests,"data");return y&&w.size>0&&S.searchParams.set("_routes",e.filter(C=>w.has(C.route.id)).map(C=>C.route.id).join(",")),[S.pathname+S.search]},[p,l.unstable_trailingSlashAwareDataRequests,m,r,c,_,e,s,f]),M=re.useMemo(()=>JM(v,c),[v,c]),b=rE(v);return re.createElement(re.Fragment,null,g.map(w=>re.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...i})),M.map(w=>re.createElement("link",{key:w,rel:"modulepreload",href:w,...i})),b.map(({key:w,link:y})=>re.createElement("link",{key:w,nonce:i.nonce,...y,crossOrigin:y.crossOrigin??i.crossOrigin})))}function oE(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var lE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lE&&(window.__reactRouterVersion="7.13.0")}catch{}function cE({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=re.useRef();l.current==null&&(l.current=Vy({window:r,v5Compat:!0}));let c=l.current,[f,p]=re.useState({action:c.action,location:c.location}),m=re.useCallback(h=>{i===!1?p(h):re.startTransition(()=>p(h))},[i]);return re.useLayoutEffect(()=>c.listen(m),[c,m]),re.createElement(zM,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var Iv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hp=re.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:p,target:m,to:h,preventScrollReset:_,viewTransition:v,unstable_defaultShouldRevalidate:g,...M},b){let{basename:w,unstable_useTransitions:y}=re.useContext(ri),S=typeof h=="string"&&Iv.test(h),C=bv(h,w);h=C.to;let N=MM(h,{relative:l}),[U,H,F]=iE(r,M),I=hE(h,{replace:f,state:p,target:m,preventScrollReset:_,relative:l,viewTransition:v,unstable_defaultShouldRevalidate:g,unstable_useTransitions:y});function T(ie){e&&e(ie),ie.defaultPrevented||I(ie)}let D=re.createElement("a",{...M,...F,href:C.absoluteURL||N,onClick:C.isExternal||c?e:T,ref:oE(b,H),target:m,"data-discover":!S&&i==="render"?"true":void 0});return U&&!S?re.createElement(re.Fragment,null,D,re.createElement(aE,{page:N})):D});hp.displayName="Link";var uE=re.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...h},_){let v=ol(f,{relative:h.relative}),g=Ca(),M=re.useContext(lu),{navigator:b,basename:w}=re.useContext(ri),y=M!=null&&vE(v)&&p===!0,S=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,C=g.pathname,N=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(C=C.toLowerCase(),N=N?N.toLowerCase():null,S=S.toLowerCase()),N&&w&&(N=Ta(N,w)||N);const U=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let H=C===S||!l&&C.startsWith(S)&&C.charAt(U)==="/",F=N!=null&&(N===S||!l&&N.startsWith(S)&&N.charAt(S.length)==="/"),I={isActive:H,isPending:F,isTransitioning:y},T=H?e:void 0,D;typeof r=="function"?D=r(I):D=[r,H?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let ie=typeof c=="function"?c(I):c;return re.createElement(hp,{...h,"aria-current":T,className:D,ref:_,style:ie,to:f,viewTransition:p},typeof m=="function"?m(I):m)});uE.displayName="NavLink";var fE=re.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Zc,action:p,onSubmit:m,relative:h,preventScrollReset:_,viewTransition:v,unstable_defaultShouldRevalidate:g,...M},b)=>{let{unstable_useTransitions:w}=re.useContext(ri),y=gE(),S=_E(p,{relative:h}),C=f.toLowerCase()==="get"?"get":"post",N=typeof p=="string"&&Iv.test(p),U=H=>{if(m&&m(H),H.defaultPrevented)return;H.preventDefault();let F=H.nativeEvent.submitter,I=F?.getAttribute("formmethod")||f,T=()=>y(F||H.currentTarget,{fetcherKey:e,method:I,navigate:i,replace:l,state:c,relative:h,preventScrollReset:_,viewTransition:v,unstable_defaultShouldRevalidate:g});w&&i!==!1?re.startTransition(()=>T()):T()};return re.createElement("form",{ref:b,method:C,action:S,onSubmit:r?m:U,...M,"data-discover":!N&&s==="render"?"true":void 0})});fE.displayName="Form";function dE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zv(s){let e=re.useContext(js);return Kt(e,dE(s)),e}function hE(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let h=Dv(),_=Ca(),v=ol(s,{relative:c});return re.useCallback(g=>{if(XM(g,e)){g.preventDefault();let M=i!==void 0?i:nl(_)===nl(v),b=()=>h(s,{replace:M,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p});m?re.startTransition(()=>b()):b()}},[_,h,v,i,r,e,s,l,c,f,p,m])}var pE=0,mE=()=>`__${String(++pE)}__`;function gE(){let{router:s}=zv("useSubmit"),{basename:e}=re.useContext(ri),i=OM(),r=s.fetch,l=s.navigate;return re.useCallback(async(c,f={})=>{let{action:p,method:m,encType:h,formData:_,body:v}=jM(c,e);if(f.navigate===!1){let g=f.fetcherKey||mE();await r(g,i,f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:v,formMethod:f.method||m,formEncType:f.encType||h,flushSync:f.flushSync})}else await l(f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:v,formMethod:f.method||m,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function _E(s,{relative:e}={}){let{basename:i}=re.useContext(ri),r=re.useContext(Ui);Kt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...ol(s||".",{relative:e})},f=Ca();if(s==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(_=>_==="")){p.delete("index"),m.filter(v=>v).forEach(v=>p.append("index",v));let _=p.toString();c.search=_?`?${_}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ya([i,c.pathname])),nl(c)}function vE(s,{relative:e}={}){let i=re.useContext(Av);Kt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=zv("useViewTransitionState"),l=ol(s,{relative:e});if(!i.isTransitioning)return!1;let c=Ta(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Ta(i.nextLocation.pathname,r)||i.nextLocation.pathname;return iu(l.pathname,f)!=null||iu(l.pathname,c)!=null}const Bv=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();const xE=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const SE=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase());const y_=s=>{const e=SE(s);return e.charAt(0).toUpperCase()+e.slice(1)};var yE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const ME=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const EE=re.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...p},m)=>re.createElement("svg",{ref:m,...yE,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:Bv("lucide",l),...!c&&!ME(p)&&{"aria-hidden":"true"},...p},[...f.map(([h,_])=>re.createElement(h,_)),...Array.isArray(c)?c:[c]]));const Jt=(s,e)=>{const i=re.forwardRef(({className:r,...l},c)=>re.createElement(EE,{ref:c,iconNode:e,className:Bv(`lucide-${xE(y_(s))}`,`lucide-${s}`,r),...l}));return i.displayName=y_(s),i};const bE=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Hv=Jt("activity",bE);const TE=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],AE=Jt("arrow-up",TE);const RE=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],zs=Jt("award",RE);const CE=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],wE=Jt("box",CE);const DE=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],NE=Jt("brain",DE);const UE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Gv=Jt("chevron-down",UE);const LE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],OE=Jt("chevron-right",LE);const PE=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Vv=Jt("chevron-up",PE);const FE=[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]],IE=Jt("command",FE);const zE=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],M_=Jt("cpu",zE);const BE=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],HE=Jt("footprints",BE);const GE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],pp=Jt("globe",GE);const VE=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]],kE=Jt("heart-pulse",VE);const XE=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],WE=Jt("layers",XE);const qE=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Tc=Jt("map-pin",qE);const jE=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],YE=Jt("message-square",jE);const ZE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],KE=Jt("panels-top-left",ZE);const QE=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],JE=Jt("plane",QE);const $E=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],eb=Jt("rocket",$E);const tb=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],nb=Jt("scan",tb);const ib=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],kv=Jt("server",ib);const ab=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],rb=Jt("terminal",ab);const sb=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],dh=Jt("trophy",sb),ob="modulepreload",lb=function(s){return"/pm-systems/"+s},E_={},gi=function(e,i,r){let l=Promise.resolve();if(i&&i.length>0){let m=function(h){return Promise.all(h.map(_=>Promise.resolve(_).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),p=f?.nonce||f?.getAttribute("nonce");l=m(i.map(h=>{if(h=lb(h),h in E_)return;E_[h]=!0;const _=h.endsWith(".css"),v=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${v}`))return;const g=document.createElement("link");if(g.rel=_?"stylesheet":ob,_||(g.as="script"),g.crossOrigin="",g.href=h,p&&g.setAttribute("nonce",p),document.head.appendChild(g),_)return new Promise((M,b)=>{g.addEventListener("load",M),g.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${h}`)))})}))}function c(f){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=f,window.dispatchEvent(p),!p.defaultPrevented)throw f}return l.then(f=>{for(const p of f||[])p.status==="rejected"&&c(p.reason);return e().catch(c)})},cb=re.lazy(()=>gi(()=>import("./GeetaAI-CUIEvT2D.js"),__vite__mapDeps([0,1,2]))),ub=re.lazy(()=>gi(()=>import("./Adhyayan-vtLDJPB9.js"),__vite__mapDeps([3,1]))),Rd=re.lazy(()=>gi(()=>import("./Locked-C_2PTVaE.js"),[])),fb=re.lazy(()=>gi(()=>import("./UnifiedCore-DRHUvXjs.js"),__vite__mapDeps([4,1,2]))),db=re.lazy(()=>gi(()=>import("./NanoSkills-Dnzt7b0W.js"),__vite__mapDeps([5,1,2]))),hb=re.lazy(()=>gi(()=>import("./MathVertical-BinsRi0l.js"),__vite__mapDeps([6,1,2]))),pb={P1:cb,P2:ub,P3:re.lazy(()=>gi(()=>import("./Locked-C_2PTVaE.js"),[])),P4:db,P5:re.lazy(()=>gi(()=>import("./Locked-Mb8LgU6E.js"),[])),P6:re.lazy(()=>gi(()=>import("./Locked-Fft_BIEd.js"),[])),P7:re.lazy(()=>gi(()=>import("./Locked-CJdN_KSK.js"),[])),P8:hb,P9:re.lazy(()=>gi(()=>import("./Locked-CCdO675P.js"),[])),P10:re.lazy(()=>gi(()=>import("./Locked-Dbl-WkfM.js"),[])),P11:Rd,P12:Rd,P13:Rd,P14:fb};const mp="183",mb=0,b_=1,gb=2,Qc=1,_b=2,Jo=3,ur=0,qn=1,xa=2,Ma=0,Bs=1,T_=2,A_=3,R_=4,vb=5,Fr=100,xb=101,Sb=102,yb=103,Mb=104,Eb=200,bb=201,Tb=202,Ab=203,hh=204,ph=205,Rb=206,Cb=207,wb=208,Db=209,Nb=210,Ub=211,Lb=212,Ob=213,Pb=214,mh=0,gh=1,_h=2,Gs=3,vh=4,xh=5,Sh=6,yh=7,Xv=0,Fb=1,Ib=2,ki=0,Wv=1,qv=2,jv=3,Yv=4,Zv=5,Kv=6,Qv=7,Jv=300,Hr=301,Vs=302,Cd=303,wd=304,uu=306,Mh=1e3,Sa=1001,Eh=1002,An=1003,zb=1004,Ac=1005,Dn=1006,Dd=1007,zr=1008,vi=1009,$v=1010,ex=1011,il=1012,gp=1013,qi=1014,Gi=1015,Aa=1016,_p=1017,vp=1018,al=1020,tx=35902,nx=35899,ix=1021,ax=1022,Di=1023,Ra=1026,Br=1027,rx=1028,xp=1029,ks=1030,Sp=1031,yp=1033,Jc=33776,$c=33777,eu=33778,tu=33779,bh=35840,Th=35841,Ah=35842,Rh=35843,Ch=36196,wh=37492,Dh=37496,Nh=37488,Uh=37489,Lh=37490,Oh=37491,Ph=37808,Fh=37809,Ih=37810,zh=37811,Bh=37812,Hh=37813,Gh=37814,Vh=37815,kh=37816,Xh=37817,Wh=37818,qh=37819,jh=37820,Yh=37821,Zh=36492,Kh=36494,Qh=36495,Jh=36283,$h=36284,ep=36285,tp=36286,Bb=3200,sx=0,Hb=1,lr="",mi="srgb",Xs="srgb-linear",au="linear",Bt="srgb",bs=7680,C_=519,Gb=512,Vb=513,kb=514,Mp=515,Xb=516,Wb=517,Ep=518,qb=519,w_=35044,D_="300 es",Vi=2e3,ru=2001;function jb(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function su(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yb(){const s=su("canvas");return s.style.display="block",s}const N_={};function U_(...s){const e="THREE."+s.shift();console.log(e,...s)}function ox(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function rt(...s){s=ox(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function wt(...s){s=ox(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function ou(...s){const e=s.join(" ");e in N_||(N_[e]=!0,rt(...s))}function Zb(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Kb={[mh]:gh,[_h]:Sh,[vh]:yh,[Gs]:xh,[gh]:mh,[Sh]:_h,[yh]:vh,[xh]:Gs};class Zs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nd=Math.PI/180,np=180/Math.PI;function ll(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function Mt(s,e,i){return Math.max(e,Math.min(i,s))}function Qb(s,e){return(s%e+e)%e}function Ud(s,e,i){return(1-i)*s+i*e}function Wo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,i=0){Pt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ks{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,p){let m=r[l+0],h=r[l+1],_=r[l+2],v=r[l+3],g=c[f+0],M=c[f+1],b=c[f+2],w=c[f+3];if(v!==w||m!==g||h!==M||_!==b){let y=m*g+h*M+_*b+v*w;y<0&&(g=-g,M=-M,b=-b,w=-w,y=-y);let S=1-p;if(y<.9995){const C=Math.acos(y),N=Math.sin(C);S=Math.sin(S*C)/N,p=Math.sin(p*C)/N,m=m*S+g*p,h=h*S+M*p,_=_*S+b*p,v=v*S+w*p}else{m=m*S+g*p,h=h*S+M*p,_=_*S+b*p,v=v*S+w*p;const C=1/Math.sqrt(m*m+h*h+_*_+v*v);m*=C,h*=C,_*=C,v*=C}}e[i]=m,e[i+1]=h,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,f){const p=r[l],m=r[l+1],h=r[l+2],_=r[l+3],v=c[f],g=c[f+1],M=c[f+2],b=c[f+3];return e[i]=p*b+_*v+m*M-h*g,e[i+1]=m*b+_*g+h*v-p*M,e[i+2]=h*b+_*M+p*g-m*v,e[i+3]=_*b-p*v-m*g-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(r/2),_=p(l/2),v=p(c/2),g=m(r/2),M=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=g*_*v+h*M*b,this._y=h*M*v-g*_*b,this._z=h*_*b+g*M*v,this._w=h*_*v-g*M*b;break;case"YXZ":this._x=g*_*v+h*M*b,this._y=h*M*v-g*_*b,this._z=h*_*b-g*M*v,this._w=h*_*v+g*M*b;break;case"ZXY":this._x=g*_*v-h*M*b,this._y=h*M*v+g*_*b,this._z=h*_*b+g*M*v,this._w=h*_*v-g*M*b;break;case"ZYX":this._x=g*_*v-h*M*b,this._y=h*M*v+g*_*b,this._z=h*_*b-g*M*v,this._w=h*_*v+g*M*b;break;case"YZX":this._x=g*_*v+h*M*b,this._y=h*M*v+g*_*b,this._z=h*_*b-g*M*v,this._w=h*_*v-g*M*b;break;case"XZY":this._x=g*_*v-h*M*b,this._y=h*M*v-g*_*b,this._z=h*_*b+g*M*v,this._w=h*_*v+g*M*b;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],_=i[6],v=i[10],g=r+p+v;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-h)*M,this._z=(f-l)*M}else if(r>p&&r>v){const M=2*Math.sqrt(1+r-p-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+h)/M}else if(p>v){const M=2*Math.sqrt(1+p-r-v);this._w=(c-h)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-r-p);this._w=(f-l)/M,this._x=(c+h)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,_=i._w;return this._x=r*_+f*p+l*h-c*m,this._y=l*_+f*m+c*p-r*h,this._z=c*_+f*h+r*m-l*p,this._w=f*_-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),_=Math.sin(h);m=Math.sin(m*h)/_,i=Math.sin(i*h)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,i=0,r=0){oe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(L_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(L_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*r),_=2*(p*i-c*l),v=2*(c*r-f*i);return this.x=i+m*h+f*v-p*_,this.y=r+m*_+p*h-c*v,this.z=l+m*v+c*_-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-r*m,this.z=r*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ld.copy(this).projectOnVector(e),this.sub(Ld)}reflect(e){return this.sub(Ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ld=new oe,L_=new Ks;class ht{constructor(e,i,r,l,c,f,p,m,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,p,m,h)}set(e,i,r,l,c,f,p,m,h){const _=this.elements;return _[0]=e,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=f,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],p=r[3],m=r[6],h=r[1],_=r[4],v=r[7],g=r[2],M=r[5],b=r[8],w=l[0],y=l[3],S=l[6],C=l[1],N=l[4],U=l[7],H=l[2],F=l[5],I=l[8];return c[0]=f*w+p*C+m*H,c[3]=f*y+p*N+m*F,c[6]=f*S+p*U+m*I,c[1]=h*w+_*C+v*H,c[4]=h*y+_*N+v*F,c[7]=h*S+_*U+v*I,c[2]=g*w+M*C+b*H,c[5]=g*y+M*N+b*F,c[8]=g*S+M*U+b*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],_=e[8];return i*f*_-i*p*h-r*c*_+r*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],_=e[8],v=_*f-p*h,g=p*m-_*c,M=h*c-f*m,b=i*v+r*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=v*w,e[1]=(l*h-_*r)*w,e[2]=(p*r-l*f)*w,e[3]=g*w,e[4]=(_*i-l*m)*w,e[5]=(l*c-p*i)*w,e[6]=M*w,e[7]=(r*m-h*i)*w,e[8]=(f*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(Od.makeScale(e,i)),this}rotate(e){return this.premultiply(Od.makeRotation(-e)),this}translate(e,i){return this.premultiply(Od.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Od=new ht,O_=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P_=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jb(){const s={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Bt&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Bt&&(l.r=Hs(l.r),l.g=Hs(l.g),l.b=Hs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===lr?au:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ou("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ou("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Xs]:{primaries:e,whitePoint:r,transfer:au,toXYZ:O_,fromXYZ:P_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:O_,fromXYZ:P_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),s}const Tt=Jb();function Ea(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ts;class $b{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ts===void 0&&(Ts=su("canvas")),Ts.width=e.width,Ts.height=e.height;const l=Ts.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ts}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=su("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ea(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ea(i[r]/255)*255):i[r]=Ea(i[r]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e1=0;class bp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Pd(l[f].image)):c.push(Pd(l[f]))}else c=Pd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Pd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$b.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let t1=0;const Fd=new oe;class In extends Zs{constructor(e=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=Sa,l=Sa,c=Dn,f=zr,p=Di,m=vi,h=In.DEFAULT_ANISOTROPY,_=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=ll(),this.name="",this.source=new bp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fd).x}get height(){return this.source.getSize(Fd).y}get depth(){return this.source.getSize(Fd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mh:e.x=e.x-Math.floor(e.x);break;case Sa:e.x=e.x<0?0:1;break;case Eh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mh:e.y=e.y-Math.floor(e.y);break;case Sa:e.y=e.y<0?0:1;break;case Eh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Jv;In.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,h=m[0],_=m[4],v=m[8],g=m[1],M=m[5],b=m[9],w=m[2],y=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(b+y)<.1&&Math.abs(h+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(h+1)/2,U=(M+1)/2,H=(S+1)/2,F=(_+g)/4,I=(v+w)/4,T=(b+y)/4;return N>U&&N>H?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=F/r,c=I/r):U>H?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=F/l,c=T/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=I/c,l=T/c),this.set(r,l,c,i),this}let C=Math.sqrt((y-b)*(y-b)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(y-b)/C,this.y=(v-w)/C,this.z=(g-_)/C,this.w=Math.acos((h+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n1 extends Zs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new In(l),f=r.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new bp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends n1{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class lx extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i1 extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pn{constructor(e,i,r,l,c,f,p,m,h,_,v,g,M,b,w,y){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,p,m,h,_,v,g,M,b,w,y)}set(e,i,r,l,c,f,p,m,h,_,v,g,M,b,w,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=c,S[5]=f,S[9]=p,S[13]=m,S[2]=h,S[6]=_,S[10]=v,S[14]=g,S[3]=M,S[7]=b,S[11]=w,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/As.setFromMatrixColumn(e,0).length(),c=1/As.setFromMatrixColumn(e,1).length(),f=1/As.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=f*_,M=f*v,b=p*_,w=p*v;i[0]=m*_,i[4]=-m*v,i[8]=h,i[1]=M+b*h,i[5]=g-w*h,i[9]=-p*m,i[2]=w-g*h,i[6]=b+M*h,i[10]=f*m}else if(e.order==="YXZ"){const g=m*_,M=m*v,b=h*_,w=h*v;i[0]=g+w*p,i[4]=b*p-M,i[8]=f*h,i[1]=f*v,i[5]=f*_,i[9]=-p,i[2]=M*p-b,i[6]=w+g*p,i[10]=f*m}else if(e.order==="ZXY"){const g=m*_,M=m*v,b=h*_,w=h*v;i[0]=g-w*p,i[4]=-f*v,i[8]=b+M*p,i[1]=M+b*p,i[5]=f*_,i[9]=w-g*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const g=f*_,M=f*v,b=p*_,w=p*v;i[0]=m*_,i[4]=b*h-M,i[8]=g*h+w,i[1]=m*v,i[5]=w*h+g,i[9]=M*h-b,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,M=f*h,b=p*m,w=p*h;i[0]=m*_,i[4]=w-g*v,i[8]=b*v+M,i[1]=v,i[5]=f*_,i[9]=-p*_,i[2]=-h*_,i[6]=M*v+b,i[10]=g-w*v}else if(e.order==="XZY"){const g=f*m,M=f*h,b=p*m,w=p*h;i[0]=m*_,i[4]=-v,i[8]=h*_,i[1]=g*v+w,i[5]=f*_,i[9]=M*v-b,i[2]=b*v-M,i[6]=p*_,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a1,e,r1)}lookAt(e,i,r){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),nr.crossVectors(r,ni),nr.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),nr.crossVectors(r,ni)),nr.normalize(),Rc.crossVectors(ni,nr),l[0]=nr.x,l[4]=Rc.x,l[8]=ni.x,l[1]=nr.y,l[5]=Rc.y,l[9]=ni.y,l[2]=nr.z,l[6]=Rc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],p=r[4],m=r[8],h=r[12],_=r[1],v=r[5],g=r[9],M=r[13],b=r[2],w=r[6],y=r[10],S=r[14],C=r[3],N=r[7],U=r[11],H=r[15],F=l[0],I=l[4],T=l[8],D=l[12],ie=l[1],G=l[5],$=l[9],se=l[13],ce=l[2],ae=l[6],O=l[10],B=l[14],fe=l[3],me=l[7],Te=l[11],P=l[15];return c[0]=f*F+p*ie+m*ce+h*fe,c[4]=f*I+p*G+m*ae+h*me,c[8]=f*T+p*$+m*O+h*Te,c[12]=f*D+p*se+m*B+h*P,c[1]=_*F+v*ie+g*ce+M*fe,c[5]=_*I+v*G+g*ae+M*me,c[9]=_*T+v*$+g*O+M*Te,c[13]=_*D+v*se+g*B+M*P,c[2]=b*F+w*ie+y*ce+S*fe,c[6]=b*I+w*G+y*ae+S*me,c[10]=b*T+w*$+y*O+S*Te,c[14]=b*D+w*se+y*B+S*P,c[3]=C*F+N*ie+U*ce+H*fe,c[7]=C*I+N*G+U*ae+H*me,c[11]=C*T+N*$+U*O+H*Te,c[15]=C*D+N*se+U*B+H*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],_=e[2],v=e[6],g=e[10],M=e[14],b=e[3],w=e[7],y=e[11],S=e[15],C=m*M-h*g,N=p*M-h*v,U=p*g-m*v,H=f*M-h*_,F=f*g-m*_,I=f*v-p*_;return i*(w*C-y*N+S*U)-r*(b*C-y*H+S*F)+l*(b*N-w*H+S*I)-c*(b*U-w*F+y*I)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],_=e[8],v=e[9],g=e[10],M=e[11],b=e[12],w=e[13],y=e[14],S=e[15],C=i*p-r*f,N=i*m-l*f,U=i*h-c*f,H=r*m-l*p,F=r*h-c*p,I=l*h-c*m,T=_*w-v*b,D=_*y-g*b,ie=_*S-M*b,G=v*y-g*w,$=v*S-M*w,se=g*S-M*y,ce=C*se-N*$+U*G+H*ie-F*D+I*T;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ae=1/ce;return e[0]=(p*se-m*$+h*G)*ae,e[1]=(l*$-r*se-c*G)*ae,e[2]=(w*I-y*F+S*H)*ae,e[3]=(g*F-v*I-M*H)*ae,e[4]=(m*ie-f*se-h*D)*ae,e[5]=(i*se-l*ie+c*D)*ae,e[6]=(y*U-b*I-S*N)*ae,e[7]=(_*I-g*U+M*N)*ae,e[8]=(f*$-p*ie+h*T)*ae,e[9]=(r*ie-i*$-c*T)*ae,e[10]=(b*F-w*U+S*C)*ae,e[11]=(v*U-_*F-M*C)*ae,e[12]=(p*D-f*G-m*T)*ae,e[13]=(i*G-r*D+l*T)*ae,e[14]=(w*N-b*H-y*C)*ae,e[15]=(_*H-v*N+g*C)*ae,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,p=e.y,m=e.z,h=c*f,_=c*p;return this.set(h*f+r,h*p-l*m,h*m+l*p,0,h*p+l*m,_*p+r,_*m-l*f,0,h*m-l*p,_*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,_=f+f,v=p+p,g=c*h,M=c*_,b=c*v,w=f*_,y=f*v,S=p*v,C=m*h,N=m*_,U=m*v,H=r.x,F=r.y,I=r.z;return l[0]=(1-(w+S))*H,l[1]=(M+U)*H,l[2]=(b-N)*H,l[3]=0,l[4]=(M-U)*F,l[5]=(1-(g+S))*F,l[6]=(y+C)*F,l[7]=0,l[8]=(b+N)*I,l[9]=(y-C)*I,l[10]=(1-(g+w))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let f=As.set(l[0],l[1],l[2]).length();const p=As.set(l[4],l[5],l[6]).length(),m=As.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ai.copy(this);const h=1/f,_=1/p,v=1/m;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=_,Ai.elements[5]*=_,Ai.elements[6]*=_,Ai.elements[8]*=v,Ai.elements[9]*=v,Ai.elements[10]*=v,i.setFromRotationMatrix(Ai),r.x=f,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,f,p=Vi,m=!1){const h=this.elements,_=2*c/(i-e),v=2*c/(r-l),g=(i+e)/(i-e),M=(r+l)/(r-l);let b,w;if(m)b=c/(f-c),w=f*c/(f-c);else if(p===Vi)b=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(p===ru)b=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,f,p=Vi,m=!1){const h=this.elements,_=2/(i-e),v=2/(r-l),g=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,w;if(m)b=1/(f-c),w=f/(f-c);else if(p===Vi)b=-2/(f-c),w=-(f+c)/(f-c);else if(p===ru)b=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const As=new oe,Ai=new pn,a1=new oe(0,0,0),r1=new oe(1,1,1),nr=new oe,Rc=new oe,ni=new oe,F_=new pn,I_=new Ks;class ji{constructor(e=0,i=0,r=0,l=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],_=l[9],v=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return F_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(F_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return I_.setFromEuler(this),this.setFromQuaternion(I_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class cx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let s1=0;const z_=new oe,Rs=new Ks,pa=new pn,Cc=new oe,qo=new oe,o1=new oe,l1=new Ks,B_=new oe(1,0,0),H_=new oe(0,1,0),G_=new oe(0,0,1),V_={type:"added"},c1={type:"removed"},Cs={type:"childadded",child:null},Id={type:"childremoved",child:null};class ai extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const e=new oe,i=new ji,r=new Ks,l=new oe(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pn},normalMatrix:{value:new ht}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Rs.setFromAxisAngle(e,i),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,i){return Rs.setFromAxisAngle(e,i),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(B_,e)}rotateY(e){return this.rotateOnAxis(H_,e)}rotateZ(e){return this.rotateOnAxis(G_,e)}translateOnAxis(e,i){return z_.copy(e).applyQuaternion(this.quaternion),this.position.add(z_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(B_,e)}translateY(e){return this.translateOnAxis(H_,e)}translateZ(e){return this.translateOnAxis(G_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Cc.copy(e):Cc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(qo,Cc,this.up):pa.lookAt(Cc,qo,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),Rs.setFromRotationMatrix(pa),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(V_),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(c1),Id.child=e,this.dispatchEvent(Id),Id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(V_),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,o1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,l1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,_=m.length;h<_;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),_=f(e.images),v=f(e.shapes),g=f(e.skeletons),M=f(e.animations),b=f(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(p){const m=[];for(const h in p){const _=p[h];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ai.DEFAULT_UP=new oe(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $o extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u1={type:"move"};class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,r),S=this._getHandJoint(h,w);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=_.position.distanceTo(v.position),M=.02,b=.005;h.inputState.pinching&&g>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(u1)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new $o;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Bd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ot{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Tt.workingColorSpace){if(e=Qb(e,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Bd(f,c,e+1/3),this.g=Bd(f,c,e),this.b=Bd(f,c,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function r(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const r=ux[e.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Tt.workingToColorSpace(wn.copy(this),e),Math.round(Mt(wn.r*255,0,255))*65536+Math.round(Mt(wn.g*255,0,255))*256+Math.round(Mt(wn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,c=wn.b,f=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const _=(p+f)/2;if(p===f)m=0,h=0;else{const v=f-p;switch(h=_<=.5?v/(f+p):v/(2-f-p),f){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=_,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=mi){Tt.workingToColorSpace(wn.copy(this),e);const i=wn.r,r=wn.g,l=wn.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+i,ir.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ir),e.getHSL(wc);const r=Ud(ir.h,wc.h,i),l=Ud(ir.s,wc.s,i),c=Ud(ir.l,wc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ot;Ot.NAMES=ux;class f1 extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ri=new oe,ma=new oe,Hd=new oe,ga=new oe,ws=new oe,Ds=new oe,k_=new oe,Gd=new oe,Vd=new oe,kd=new oe,Xd=new rn,Wd=new rn,qd=new rn;class wi{constructor(e=new oe,i=new oe,r=new oe){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ri.subVectors(l,i),ma.subVectors(r,i),Hd.subVectors(e,i);const f=Ri.dot(Ri),p=Ri.dot(ma),m=Ri.dot(Hd),h=ma.dot(ma),_=ma.dot(Hd),v=f*h-p*p;if(v===0)return c.set(0,0,0),null;const g=1/v,M=(h*m-p*_)*g,b=(f*_-p*m)*g;return c.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(e,i,r,l,c,f,p,m){return this.getBarycoord(e,i,r,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(f,ga.y),m.addScaledVector(p,ga.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Xd.setScalar(0),Wd.setScalar(0),qd.setScalar(0),Xd.fromBufferAttribute(e,i),Wd.fromBufferAttribute(e,r),qd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Xd,c.x),f.addScaledVector(Wd,c.y),f.addScaledVector(qd,c.z),f}static isFrontFacing(e,i,r,l){return Ri.subVectors(r,i),ma.subVectors(e,i),Ri.cross(ma).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ri.cross(ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,p;ws.subVectors(l,r),Ds.subVectors(c,r),Gd.subVectors(e,r);const m=ws.dot(Gd),h=Ds.dot(Gd);if(m<=0&&h<=0)return i.copy(r);Vd.subVectors(e,l);const _=ws.dot(Vd),v=Ds.dot(Vd);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*h;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(r).addScaledVector(ws,f);kd.subVectors(e,c);const M=ws.dot(kd),b=Ds.dot(kd);if(b>=0&&M<=b)return i.copy(c);const w=M*h-m*b;if(w<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(r).addScaledVector(Ds,p);const y=_*b-M*v;if(y<=0&&v-_>=0&&M-b>=0)return k_.subVectors(c,l),p=(v-_)/(v-_+(M-b)),i.copy(l).addScaledVector(k_,p);const S=1/(y+w+g);return f=w*S,p=g*S,i.copy(r).addScaledVector(ws,f).addScaledVector(Ds,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class cl{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Ci):Ci.fromBufferAttribute(c,f),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Dc.copy(r.boundingBox)),Dc.applyMatrix4(e.matrixWorld),this.union(Dc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Nc.subVectors(this.max,jo),Ns.subVectors(e.a,jo),Us.subVectors(e.b,jo),Ls.subVectors(e.c,jo),ar.subVectors(Us,Ns),rr.subVectors(Ls,Us),wr.subVectors(Ns,Ls);let i=[0,-ar.z,ar.y,0,-rr.z,rr.y,0,-wr.z,wr.y,ar.z,0,-ar.x,rr.z,0,-rr.x,wr.z,0,-wr.x,-ar.y,ar.x,0,-rr.y,rr.x,0,-wr.y,wr.x,0];return!jd(i,Ns,Us,Ls,Nc)||(i=[1,0,0,0,1,0,0,0,1],!jd(i,Ns,Us,Ls,Nc))?!1:(Uc.crossVectors(ar,rr),i=[Uc.x,Uc.y,Uc.z],jd(i,Ns,Us,Ls,Nc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _a=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Ci=new oe,Dc=new cl,Ns=new oe,Us=new oe,Ls=new oe,ar=new oe,rr=new oe,wr=new oe,jo=new oe,Nc=new oe,Uc=new oe,Dr=new oe;function jd(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Dr.fromArray(s,c);const p=l.x*Math.abs(Dr.x)+l.y*Math.abs(Dr.y)+l.z*Math.abs(Dr.z),m=e.dot(Dr),h=i.dot(Dr),_=r.dot(Dr);if(Math.max(-Math.max(m,h,_),Math.min(m,h,_))>p)return!1}return!0}const hn=new oe,Lc=new Pt;let d1=0;class Wi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=w_,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Lc.fromBufferAttribute(this,i),Lc.applyMatrix3(e),this.setXY(i,Lc.x,Lc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Wo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Wo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Wo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Wo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Wo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==w_&&(e.usage=this.usage),e}}class fx extends Wi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class dx extends Wi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ba extends Wi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const h1=new cl,Yo=new oe,Yd=new oe;class Tp{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):h1.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Yo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(Yd)),this.expandByPoint(Yo.copy(e.center).sub(Yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let p1=0;const pi=new pn,Zd=new ai,Os=new oe,ii=new cl,Zo=new cl,yn=new oe;class wa extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jb(e)?dx:fx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,r){return pi.makeTranslation(e,i,r),this.applyMatrix4(pi),this}scale(e,i,r){return pi.makeScale(e,i,r),this.applyMatrix4(pi),this}lookAt(e){return Zd.lookAt(e),Zd.updateMatrix(),this.applyMatrix4(Zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ba(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];Zo.setFromBufferAttribute(p),this.morphTargetsRelative?(yn.addVectors(ii.min,Zo.min),ii.expandByPoint(yn),yn.addVectors(ii.max,Zo.max),ii.expandByPoint(yn)):(ii.expandByPoint(Zo.min),ii.expandByPoint(Zo.max))}ii.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)yn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,_=p.count;h<_;h++)yn.fromBufferAttribute(p,h),m&&(Os.fromBufferAttribute(e,h),yn.add(Os)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new oe,m[T]=new oe;const h=new oe,_=new oe,v=new oe,g=new Pt,M=new Pt,b=new Pt,w=new oe,y=new oe;function S(T,D,ie){h.fromBufferAttribute(r,T),_.fromBufferAttribute(r,D),v.fromBufferAttribute(r,ie),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,D),b.fromBufferAttribute(c,ie),_.sub(h),v.sub(h),M.sub(g),b.sub(g);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(w.copy(_).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(G),p[T].add(w),p[D].add(w),p[ie].add(w),m[T].add(y),m[D].add(y),m[ie].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,D=C.length;T<D;++T){const ie=C[T],G=ie.start,$=ie.count;for(let se=G,ce=G+$;se<ce;se+=3)S(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const N=new oe,U=new oe,H=new oe,F=new oe;function I(T){H.fromBufferAttribute(l,T),F.copy(H);const D=p[T];N.copy(D),N.sub(H.multiplyScalar(H.dot(D))).normalize(),U.crossVectors(F,D);const G=U.dot(m[T])<0?-1:1;f.setXYZW(T,N.x,N.y,N.z,G)}for(let T=0,D=C.length;T<D;++T){const ie=C[T],G=ie.start,$=ie.count;for(let se=G,ce=G+$;se<ce;se+=3)I(e.getX(se+0)),I(e.getX(se+1)),I(e.getX(se+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const l=new oe,c=new oe,f=new oe,p=new oe,m=new oe,h=new oe,_=new oe,v=new oe;if(e)for(let g=0,M=e.count;g<M;g+=3){const b=e.getX(g+0),w=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,y),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,w),h.fromBufferAttribute(r,y),p.add(_),m.add(_),h.add(_),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)yn.fromBufferAttribute(e,i),yn.normalize(),e.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function e(p,m){const h=p.array,_=p.itemSize,v=p.normalized,g=new h.constructor(m.length*_);let M=0,b=0;for(let w=0,y=m.length;w<y;w++){p.isInterleavedBufferAttribute?M=m[w]*p.data.stride+p.offset:M=m[w]*_;for(let S=0;S<_;S++)g[b++]=h[M++]}return new Wi(g,_,v)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wa,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let _=0,v=h.length;_<v;_++){const g=h[_],M=e(g,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],_=[];for(let v=0,g=h.length;v<g;v++){const M=h[v];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const _=l[h];this.setAttribute(h,_.clone(i))}const c=e.morphAttributes;for(const h in c){const _=[],v=c[h];for(let g=0,M=v.length;g<M;g++)_.push(v[g].clone(i));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,_=f.length;h<_;h++){const v=f[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let m1=0;class ul extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=ll(),this.name="",this.type="Material",this.blending=Bs,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=ph,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==ur&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hh&&(r.blendSrc=this.blendSrc),this.blendDst!==ph&&(r.blendDst=this.blendDst),this.blendEquation!==Fr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const va=new oe,Kd=new oe,Oc=new oe,sr=new oe,Qd=new oe,Pc=new oe,Jd=new oe;class g1{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=va.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Kd.copy(e).add(i).multiplyScalar(.5),Oc.copy(i).sub(e).normalize(),sr.copy(this.origin).sub(Kd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Oc),p=sr.dot(this.direction),m=-sr.dot(Oc),h=sr.lengthSq(),_=Math.abs(1-f*f);let v,g,M,b;if(_>0)if(v=f*m-p,g=f*p-m,b=c*_,v>=0)if(g>=-b)if(g<=b){const w=1/_;v*=w,g*=w,M=v*(v+f*g+2*p)+g*(f*v+g+2*m)+h}else g=c,v=Math.max(0,-(f*g+p)),M=-v*v+g*(g+2*m)+h;else g=-c,v=Math.max(0,-(f*g+p)),M=-v*v+g*(g+2*m)+h;else g<=-b?(v=Math.max(0,-(-f*c+p)),g=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+g*(g+2*m)+h):g<=b?(v=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+h):(v=Math.max(0,-(f*c+p)),g=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+g*(g+2*m)+h);else g=f>0?-c:c,v=Math.max(0,-(f*g+p)),M=-v*v+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Kd).addScaledVector(Oc,g),M}intersectSphere(e,i){va.subVectors(e.center,this.origin);const r=va.dot(this.direction),l=va.dot(va)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=r-f,m=r+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,p,m;const h=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),_>=0?(c=(e.min.y-g.y)*_,f=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,f=(e.min.y-g.y)*_),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),v>=0?(p=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(p=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,i,r,l,c){Qd.subVectors(i,e),Pc.subVectors(r,e),Jd.crossVectors(Qd,Pc);let f=this.direction.dot(Jd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;sr.subVectors(this.origin,e);const m=p*this.direction.dot(Pc.crossVectors(sr,Pc));if(m<0)return null;const h=p*this.direction.dot(Qd.cross(sr));if(h<0||m+h>f)return null;const _=-p*sr.dot(Jd);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ap extends ul{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const X_=new pn,Nr=new g1,Fc=new Tp,W_=new oe,Ic=new oe,zc=new oe,Bc=new oe,$d=new oe,Hc=new oe,q_=new oe,Gc=new oe;class Wn extends ai{constructor(e=new wa,i=new Ap){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Hc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const _=p[m],v=c[m];_!==0&&($d.fromBufferAttribute(v,e),f?Hc.addScaledVector($d,_):Hc.addScaledVector($d.sub(i),_))}i.add(Hc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Fc.copy(r.boundingSphere),Fc.applyMatrix4(c),Nr.copy(e.ray).recast(e.near),!(Fc.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Fc,W_)===null||Nr.origin.distanceToSquared(W_)>(e.far-e.near)**2))&&(X_.copy(c).invert(),Nr.copy(e.ray).applyMatrix4(X_),!(r.boundingBox!==null&&Nr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Nr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(f))for(let b=0,w=g.length;b<w;b++){const y=g[b],S=f[y.materialIndex],C=Math.max(y.start,M.start),N=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let U=C,H=N;U<H;U+=3){const F=p.getX(U),I=p.getX(U+1),T=p.getX(U+2);l=Vc(this,S,e,r,h,_,v,F,I,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let y=b,S=w;y<S;y+=3){const C=p.getX(y),N=p.getX(y+1),U=p.getX(y+2);l=Vc(this,f,e,r,h,_,v,C,N,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,w=g.length;b<w;b++){const y=g[b],S=f[y.materialIndex],C=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=C,H=N;U<H;U+=3){const F=U,I=U+1,T=U+2;l=Vc(this,S,e,r,h,_,v,F,I,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=b,S=w;y<S;y+=3){const C=y,N=y+1,U=y+2;l=Vc(this,f,e,r,h,_,v,C,N,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function _1(s,e,i,r,l,c,f,p){let m;if(e.side===qn?m=r.intersectTriangle(f,c,l,!0,p):m=r.intersectTriangle(l,c,f,e.side===ur,p),m===null)return null;Gc.copy(p),Gc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Gc);return h<i.near||h>i.far?null:{distance:h,point:Gc.clone(),object:s}}function Vc(s,e,i,r,l,c,f,p,m,h){s.getVertexPosition(p,Ic),s.getVertexPosition(m,zc),s.getVertexPosition(h,Bc);const _=_1(s,e,i,r,Ic,zc,Bc,q_);if(_){const v=new oe;wi.getBarycoord(q_,Ic,zc,Bc,v),l&&(_.uv=wi.getInterpolatedAttribute(l,p,m,h,v,new Pt)),c&&(_.uv1=wi.getInterpolatedAttribute(c,p,m,h,v,new Pt)),f&&(_.normal=wi.getInterpolatedAttribute(f,p,m,h,v,new oe),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new oe,materialIndex:0};wi.getNormal(Ic,zc,Bc,g.normal),_.face=g,_.barycoord=v}return _}class v1 extends In{constructor(e=null,i=1,r=1,l,c,f,p,m,h=An,_=An,v,g){super(null,f,p,m,h,_,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eh=new oe,x1=new oe,S1=new ht;class Pr{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=eh.subVectors(r,i).cross(x1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(eh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||S1.getNormalMatrix(e),l=this.coplanarPoint(eh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Tp,y1=new Pt(.5,.5),kc=new oe;class hx{constructor(e=new Pr,i=new Pr,r=new Pr,l=new Pr,c=new Pr,f=new Pr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Vi,r=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],_=c[4],v=c[5],g=c[6],M=c[7],b=c[8],w=c[9],y=c[10],S=c[11],C=c[12],N=c[13],U=c[14],H=c[15];if(l[0].setComponents(h-f,M-_,S-b,H-C).normalize(),l[1].setComponents(h+f,M+_,S+b,H+C).normalize(),l[2].setComponents(h+p,M+v,S+w,H+N).normalize(),l[3].setComponents(h-p,M-v,S-w,H-N).normalize(),r)l[4].setComponents(m,g,y,U).normalize(),l[5].setComponents(h-m,M-g,S-y,H-U).normalize();else if(l[4].setComponents(h-m,M-g,S-y,H-U).normalize(),i===Vi)l[5].setComponents(h+m,M+g,S+y,H+U).normalize();else if(i===ru)l[5].setComponents(m,g,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);const i=y1.distanceTo(e.center);return Ur.radius=.7071067811865476+i,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(kc.x=l.normal.x>0?e.max.x:e.min.x,kc.y=l.normal.y>0?e.max.y:e.min.y,kc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class px extends In{constructor(e=[],i=Hr,r,l,c,f,p,m,h,_){super(e,i,r,l,c,f,p,m,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rl extends In{constructor(e,i,r=qi,l,c,f,p=An,m=An,h,_=Ra,v=1){if(_!==Ra&&_!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,c,f,p,m,_,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class M1 extends rl{constructor(e,i=qi,r=Hr,l,c,f=An,p=An,m,h=Ra){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,r,l,c,f,p,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mx extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gr extends wa{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],_=[],v=[];let g=0,M=0;b("z","y","x",-1,-1,r,i,e,f,c,0),b("z","y","x",1,-1,r,i,-e,f,c,1),b("x","z","y",1,1,e,r,i,l,f,2),b("x","z","y",1,-1,e,r,-i,l,f,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new ba(h,3)),this.setAttribute("normal",new ba(_,3)),this.setAttribute("uv",new ba(v,2));function b(w,y,S,C,N,U,H,F,I,T,D){const ie=U/I,G=H/T,$=U/2,se=H/2,ce=F/2,ae=I+1,O=T+1;let B=0,fe=0;const me=new oe;for(let Te=0;Te<O;Te++){const P=Te*G-se;for(let Y=0;Y<ae;Y++){const xe=Y*ie-$;me[w]=xe*C,me[y]=P*N,me[S]=ce,h.push(me.x,me.y,me.z),me[w]=0,me[y]=0,me[S]=F>0?1:-1,_.push(me.x,me.y,me.z),v.push(Y/I),v.push(1-Te/T),B+=1}}for(let Te=0;Te<T;Te++)for(let P=0;P<I;P++){const Y=g+P+ae*Te,xe=g+P+ae*(Te+1),Ce=g+(P+1)+ae*(Te+1),ze=g+(P+1)+ae*Te;m.push(Y,xe,ze),m.push(xe,Ce,ze),fe+=6}p.addGroup(M,fe,D),M+=fe,g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fu extends wa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,_=m+1,v=e/p,g=i/m,M=[],b=[],w=[],y=[];for(let S=0;S<_;S++){const C=S*g-f;for(let N=0;N<h;N++){const U=N*v-c;b.push(U,-C,0),w.push(0,0,1),y.push(N/p),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let C=0;C<p;C++){const N=C+h*S,U=C+h*(S+1),H=C+1+h*(S+1),F=C+1+h*S;M.push(N,U,F),M.push(U,H,F)}this.setIndex(M),this.setAttribute("position",new ba(b,3)),this.setAttribute("normal",new ba(w,3)),this.setAttribute("uv",new ba(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ws(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Fn(s){const e={};for(let i=0;i<s.length;i++){const r=Ws(s[i]);for(const l in r)e[l]=r[l]}return e}function E1(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function gx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const b1={clone:Ws,merge:Fn};var T1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends ul{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T1,this.fragmentShader=A1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=E1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class R1 extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class th extends ul{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sx,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class C1 extends ul{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class w1 extends ul{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xc=new oe,Wc=new Ks,zi=new oe;class _x extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xc,Wc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,Wc,zi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Xc,Wc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,Wc,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const or=new oe,j_=new Pt,Y_=new Pt;class _i extends _x{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(Nd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,i){return this.getViewBounds(e,j_,Y_),i.subVectors(Y_,j_)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Nd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/h,l*=f.width/m,r*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class vx extends _x{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ps=-90,Fs=1;class D1 extends ai{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new _i(Ps,Fs,e,i);l.layers=this.layers,this.add(l);const c=new _i(Ps,Fs,e,i);c.layers=this.layers,this.add(c);const f=new _i(Ps,Fs,e,i);f.layers=this.layers,this.add(f);const p=new _i(Ps,Fs,e,i);p.layers=this.layers,this.add(p);const m=new _i(Ps,Fs,e,i);m.layers=this.layers,this.add(m);const h=new _i(Ps,Fs,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ru)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(r,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(v,g,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class N1 extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class U1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,rt("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Z_(s,e,i,r){const l=L1(r);switch(i){case ix:return s*e;case rx:return s*e/l.components*l.byteLength;case xp:return s*e/l.components*l.byteLength;case ks:return s*e*2/l.components*l.byteLength;case Sp:return s*e*2/l.components*l.byteLength;case ax:return s*e*3/l.components*l.byteLength;case Di:return s*e*4/l.components*l.byteLength;case yp:return s*e*4/l.components*l.byteLength;case Jc:case $c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case eu:case tu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Th:case Rh:return Math.max(s,16)*Math.max(e,8)/4;case bh:case Ah:return Math.max(s,8)*Math.max(e,8)/2;case Ch:case wh:case Nh:case Uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dh:case Lh:case Oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case zh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case kh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case qh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case jh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Zh:case Kh:case Qh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Jh:case $h:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ep:case tp:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function L1(s){switch(s){case vi:case $v:return{byteLength:1,components:1};case il:case ex:case Aa:return{byteLength:2,components:1};case _p:case vp:return{byteLength:2,components:4};case qi:case gp:case Gi:return{byteLength:4,components:1};case tx:case nx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);function xx(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function O1(s){const e=new WeakMap;function i(p,m){const h=p.array,_=p.usage,v=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,_),p.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function r(p,m,h){const _=m.array,v=m.updateRanges;if(s.bindBuffer(h,p),v.length===0)s.bufferSubData(h,0,_);else{v.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<v.length;M++){const b=v[g],w=v[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++g,v[g]=w)}v.length=g+1;for(let M=0,b=v.length;M<b;M++){const w=v[M];s.bufferSubData(h,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=e.get(p);(!_||_.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var P1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,I1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,V1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,X1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Y1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Z1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,iT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,aT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fT="gl_FragColor = linearToOutputTexel( gl_FragColor );",dT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_T=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ST=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ET=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,QT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$T=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,uA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_A=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,MA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,GA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,XA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$A=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:P1,alphahash_pars_fragment:F1,alphamap_fragment:I1,alphamap_pars_fragment:z1,alphatest_fragment:B1,alphatest_pars_fragment:H1,aomap_fragment:G1,aomap_pars_fragment:V1,batching_pars_vertex:k1,batching_vertex:X1,begin_vertex:W1,beginnormal_vertex:q1,bsdfs:j1,iridescence_fragment:Y1,bumpmap_pars_fragment:Z1,clipping_planes_fragment:K1,clipping_planes_pars_fragment:Q1,clipping_planes_pars_vertex:J1,clipping_planes_vertex:$1,color_fragment:eT,color_pars_fragment:tT,color_pars_vertex:nT,color_vertex:iT,common:aT,cube_uv_reflection_fragment:rT,defaultnormal_vertex:sT,displacementmap_pars_vertex:oT,displacementmap_vertex:lT,emissivemap_fragment:cT,emissivemap_pars_fragment:uT,colorspace_fragment:fT,colorspace_pars_fragment:dT,envmap_fragment:hT,envmap_common_pars_fragment:pT,envmap_pars_fragment:mT,envmap_pars_vertex:gT,envmap_physical_pars_fragment:RT,envmap_vertex:_T,fog_vertex:vT,fog_pars_vertex:xT,fog_fragment:ST,fog_pars_fragment:yT,gradientmap_pars_fragment:MT,lightmap_pars_fragment:ET,lights_lambert_fragment:bT,lights_lambert_pars_fragment:TT,lights_pars_begin:AT,lights_toon_fragment:CT,lights_toon_pars_fragment:wT,lights_phong_fragment:DT,lights_phong_pars_fragment:NT,lights_physical_fragment:UT,lights_physical_pars_fragment:LT,lights_fragment_begin:OT,lights_fragment_maps:PT,lights_fragment_end:FT,logdepthbuf_fragment:IT,logdepthbuf_pars_fragment:zT,logdepthbuf_pars_vertex:BT,logdepthbuf_vertex:HT,map_fragment:GT,map_pars_fragment:VT,map_particle_fragment:kT,map_particle_pars_fragment:XT,metalnessmap_fragment:WT,metalnessmap_pars_fragment:qT,morphinstance_vertex:jT,morphcolor_vertex:YT,morphnormal_vertex:ZT,morphtarget_pars_vertex:KT,morphtarget_vertex:QT,normal_fragment_begin:JT,normal_fragment_maps:$T,normal_pars_fragment:eA,normal_pars_vertex:tA,normal_vertex:nA,normalmap_pars_fragment:iA,clearcoat_normal_fragment_begin:aA,clearcoat_normal_fragment_maps:rA,clearcoat_pars_fragment:sA,iridescence_pars_fragment:oA,opaque_fragment:lA,packing:cA,premultiplied_alpha_fragment:uA,project_vertex:fA,dithering_fragment:dA,dithering_pars_fragment:hA,roughnessmap_fragment:pA,roughnessmap_pars_fragment:mA,shadowmap_pars_fragment:gA,shadowmap_pars_vertex:_A,shadowmap_vertex:vA,shadowmask_pars_fragment:xA,skinbase_vertex:SA,skinning_pars_vertex:yA,skinning_vertex:MA,skinnormal_vertex:EA,specularmap_fragment:bA,specularmap_pars_fragment:TA,tonemapping_fragment:AA,tonemapping_pars_fragment:RA,transmission_fragment:CA,transmission_pars_fragment:wA,uv_pars_fragment:DA,uv_pars_vertex:NA,uv_vertex:UA,worldpos_vertex:LA,background_vert:OA,background_frag:PA,backgroundCube_vert:FA,backgroundCube_frag:IA,cube_vert:zA,cube_frag:BA,depth_vert:HA,depth_frag:GA,distance_vert:VA,distance_frag:kA,equirect_vert:XA,equirect_frag:WA,linedashed_vert:qA,linedashed_frag:jA,meshbasic_vert:YA,meshbasic_frag:ZA,meshlambert_vert:KA,meshlambert_frag:QA,meshmatcap_vert:JA,meshmatcap_frag:$A,meshnormal_vert:eR,meshnormal_frag:tR,meshphong_vert:nR,meshphong_frag:iR,meshphysical_vert:aR,meshphysical_frag:rR,meshtoon_vert:sR,meshtoon_frag:oR,points_vert:lR,points_frag:cR,shadow_vert:uR,shadow_frag:fR,sprite_vert:dR,sprite_frag:hR},Le={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Hi={basic:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Fn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Fn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ot(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Fn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Fn([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Fn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Fn([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Fn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Fn([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Fn([Le.common,Le.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Fn([Le.lights,Le.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Hi.physical={uniforms:Fn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const qc={r:0,b:0,g:0},Lr=new ji,pR=new pn;function mR(s,e,i,r,l,c){const f=new Ot(0);let p=l===!0?0:1,m,h,_=null,v=0,g=null;function M(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){const U=C.backgroundBlurriness>0;N=e.get(N,U)}return N}function b(C){let N=!1;const U=M(C);U===null?y(f,p):U&&U.isColor&&(y(U,1),N=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(C,N){const U=M(N);U&&(U.isCubeTexture||U.mapping===uu)?(h===void 0&&(h=new Wn(new Gr(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Ws(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(H,F,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Lr.copy(N.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pR.makeRotationFromEuler(Lr)),h.material.toneMapped=Tt.getTransfer(U.colorSpace)!==Bt,(_!==U||v!==U.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,_=U,v=U.version,g=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Wn(new fu(2,2),new Yi({name:"BackgroundMaterial",uniforms:Ws(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(U.colorSpace)!==Bt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||v!==U.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,_=U,v=U.version,g=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function y(C,N){C.getRGB(qc,gx(s)),i.buffers.color.setClear(qc.r,qc.g,qc.b,N,c)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,N=1){f.set(C),p=N,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,y(f,p)},render:b,addToRenderList:w,dispose:S}}function gR(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,f=!1;function p(G,$,se,ce,ae){let O=!1;const B=v(G,ce,se,$);c!==B&&(c=B,h(c.object)),O=M(G,ce,se,ae),O&&b(G,ce,se,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,U(G,$,se,ce),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function m(){return s.createVertexArray()}function h(G){return s.bindVertexArray(G)}function _(G){return s.deleteVertexArray(G)}function v(G,$,se,ce){const ae=ce.wireframe===!0;let O=r[$.id];O===void 0&&(O={},r[$.id]=O);const B=G.isInstancedMesh===!0?G.id:0;let fe=O[B];fe===void 0&&(fe={},O[B]=fe);let me=fe[se.id];me===void 0&&(me={},fe[se.id]=me);let Te=me[ae];return Te===void 0&&(Te=g(m()),me[ae]=Te),Te}function g(G){const $=[],se=[],ce=[];for(let ae=0;ae<i;ae++)$[ae]=0,se[ae]=0,ce[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:se,attributeDivisors:ce,object:G,attributes:{},index:null}}function M(G,$,se,ce){const ae=c.attributes,O=$.attributes;let B=0;const fe=se.getAttributes();for(const me in fe)if(fe[me].location>=0){const P=ae[me];let Y=O[me];if(Y===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor)),P===void 0||P.attribute!==Y||Y&&P.data!==Y.data)return!0;B++}return c.attributesNum!==B||c.index!==ce}function b(G,$,se,ce){const ae={},O=$.attributes;let B=0;const fe=se.getAttributes();for(const me in fe)if(fe[me].location>=0){let P=O[me];P===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const Y={};Y.attribute=P,P&&P.data&&(Y.data=P.data),ae[me]=Y,B++}c.attributes=ae,c.attributesNum=B,c.index=ce}function w(){const G=c.newAttributes;for(let $=0,se=G.length;$<se;$++)G[$]=0}function y(G){S(G,0)}function S(G,$){const se=c.newAttributes,ce=c.enabledAttributes,ae=c.attributeDivisors;se[G]=1,ce[G]===0&&(s.enableVertexAttribArray(G),ce[G]=1),ae[G]!==$&&(s.vertexAttribDivisor(G,$),ae[G]=$)}function C(){const G=c.newAttributes,$=c.enabledAttributes;for(let se=0,ce=$.length;se<ce;se++)$[se]!==G[se]&&(s.disableVertexAttribArray(se),$[se]=0)}function N(G,$,se,ce,ae,O,B){B===!0?s.vertexAttribIPointer(G,$,se,ae,O):s.vertexAttribPointer(G,$,se,ce,ae,O)}function U(G,$,se,ce){w();const ae=ce.attributes,O=se.getAttributes(),B=$.defaultAttributeValues;for(const fe in O){const me=O[fe];if(me.location>=0){let Te=ae[fe];if(Te===void 0&&(fe==="instanceMatrix"&&G.instanceMatrix&&(Te=G.instanceMatrix),fe==="instanceColor"&&G.instanceColor&&(Te=G.instanceColor)),Te!==void 0){const P=Te.normalized,Y=Te.itemSize,xe=e.get(Te);if(xe===void 0)continue;const Ce=xe.buffer,ze=xe.type,te=xe.bytesPerElement,Se=ze===s.INT||ze===s.UNSIGNED_INT||Te.gpuType===gp;if(Te.isInterleavedBufferAttribute){const Ae=Te.data,Xe=Ae.stride,Qe=Te.offset;if(Ae.isInstancedInterleavedBuffer){for(let et=0;et<me.locationSize;et++)S(me.location+et,Ae.meshPerAttribute);G.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let et=0;et<me.locationSize;et++)y(me.location+et);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let et=0;et<me.locationSize;et++)N(me.location+et,Y/me.locationSize,ze,P,Xe*te,(Qe+Y/me.locationSize*et)*te,Se)}else{if(Te.isInstancedBufferAttribute){for(let Ae=0;Ae<me.locationSize;Ae++)S(me.location+Ae,Te.meshPerAttribute);G.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ae=0;Ae<me.locationSize;Ae++)y(me.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Ae=0;Ae<me.locationSize;Ae++)N(me.location+Ae,Y/me.locationSize,ze,P,Y*te,Y/me.locationSize*Ae*te,Se)}}else if(B!==void 0){const P=B[fe];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(me.location,P);break;case 3:s.vertexAttrib3fv(me.location,P);break;case 4:s.vertexAttrib4fv(me.location,P);break;default:s.vertexAttrib1fv(me.location,P)}}}}C()}function H(){D();for(const G in r){const $=r[G];for(const se in $){const ce=$[se];for(const ae in ce){const O=ce[ae];for(const B in O)_(O[B].object),delete O[B];delete ce[ae]}}delete r[G]}}function F(G){if(r[G.id]===void 0)return;const $=r[G.id];for(const se in $){const ce=$[se];for(const ae in ce){const O=ce[ae];for(const B in O)_(O[B].object),delete O[B];delete ce[ae]}}delete r[G.id]}function I(G){for(const $ in r){const se=r[$];for(const ce in se){const ae=se[ce];if(ae[G.id]===void 0)continue;const O=ae[G.id];for(const B in O)_(O[B].object),delete O[B];delete ae[G.id]}}}function T(G){for(const $ in r){const se=r[$],ce=G.isInstancedMesh===!0?G.id:0,ae=se[ce];if(ae!==void 0){for(const O in ae){const B=ae[O];for(const fe in B)_(B[fe].object),delete B[fe];delete ae[O]}delete se[ce],Object.keys(se).length===0&&delete r[$]}}}function D(){ie(),f=!0,c!==l&&(c=l,h(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:ie,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:y,disableUnusedAttributes:C}}function _R(s,e,i){let r;function l(h){r=h}function c(h,_){s.drawArrays(r,h,_),i.update(_,r,1)}function f(h,_,v){v!==0&&(s.drawArraysInstanced(r,h,_,v),i.update(_,r,v))}function p(h,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,_,0,v);let M=0;for(let b=0;b<v;b++)M+=_[b];i.update(M,r,1)}function m(h,_,v,g){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<h.length;b++)f(h[b],_[b],g[b]);else{M.multiDrawArraysInstancedWEBGL(r,h,0,_,0,g,0,v);let b=0;for(let w=0;w<v;w++)b+=_[w]*g[w];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function vR(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Di&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const T=I===Aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==vi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Gi&&!T)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const _=m(h);_!==h&&(rt("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:U,maxSamples:H,samples:F}}function xR(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Pr,p=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const M=v.length!==0||g||r!==0||l;return l=g,r=v.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,M){const b=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,S=s.get(v);if(!l||b===null||b.length===0||c&&!y)c?_(null):h();else{const C=c?0:r,N=C*4;let U=S.clippingState||null;m.value=U,U=_(b,g,N,M);for(let H=0;H!==N;++H)U[H]=i[H];S.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,g,M,b){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=m.value,b!==!0||y===null){const S=M+w*4,C=g.matrixWorldInverse;p.getNormalMatrix(C),(y===null||y.length<S)&&(y=new Float32Array(S));for(let N=0,U=M;N!==w;++N,U+=4)f.copy(v[N]).applyMatrix4(C,p),f.normal.toArray(y,U),y[U+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const cr=4,K_=[.125,.215,.35,.446,.526,.582],Ir=20,SR=256,Ko=new vx,Q_=new Ot;let nh=null,ih=0,ah=0,rh=!1;const yR=new oe;class J_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:p=yR}=c;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,ah),this._renderer.xr.enabled=rh,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Hr||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Aa,format:Di,colorSpace:Xs,depthBuffer:!1},l=$_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=MR(c)),this._blurMaterial=bR(c,e,i),this._ggxMaterial=ER(c,e,i)}return l}_compileMaterial(e){const i=new Wn(new wa,e);this._renderer.compile(i,Ko)}_sceneToCubeUV(e,i,r,l,c){const m=new _i(90,1,i,r),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,M=v.toneMapping;v.getClearColor(Q_),v.toneMapping=ki,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wn(new Gr,new Ap({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let S=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,S=!0):(y.color.copy(Q_),S=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):U===1?(m.up.set(0,0,h[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const H=this._cubeSize;Is(l,U*H,N>2?H:0,H,H),v.setRenderTarget(l),S&&v.render(w,m),v.render(e,m)}v.toneMapping=M,v.autoClear=g,e.background=C}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Hr||e.mapping===Vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ev());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Is(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Ko)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[r];p.material=f;const m=f.uniforms,h=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-_*_),g=0+h*1.25,M=v*g,{_lodMax:b}=this,w=this._sizeLods[r],y=3*w*(r>b-cr?r-b+cr:0),S=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,Is(c,y,S,3*w,2*w),l.setRenderTarget(c),l.render(p,Ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Is(e,y,S,3*w,2*w),l.setRenderTarget(e),l.render(p,Ko)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=h;const g=h.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ir-1),w=c/b,y=isFinite(c)?1+Math.floor(_*w):Ir;y>Ir&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ir}`);const S=[];let C=0;for(let I=0;I<Ir;++I){const T=I/w,D=Math.exp(-T*T/2);S.push(D),I===0?C+=D:I<y&&(C+=2*D)}for(let I=0;I<S.length;I++)S[I]=S[I]/C;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=f==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:N}=this;g.dTheta.value=b,g.mipInt.value=N-r;const U=this._sizeLods[l],H=3*U*(l>N-cr?l-N+cr:0),F=4*(this._cubeSize-U);Is(i,H,F,3*U,2*U),m.setRenderTarget(i),m.render(v,Ko)}}function MR(s){const e=[],i=[],r=[];let l=s;const c=s-cr+1+K_.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>s-cr?m=K_[f-s+cr-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),_=-h,v=1+h,g=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,b=6,w=3,y=2,S=1,C=new Float32Array(w*b*M),N=new Float32Array(y*b*M),U=new Float32Array(S*b*M);for(let F=0;F<M;F++){const I=F%3*2/3-1,T=F>2?0:-1,D=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];C.set(D,w*b*F),N.set(g,y*b*F);const ie=[F,F,F,F,F,F];U.set(ie,S*b*F)}const H=new wa;H.setAttribute("position",new Wi(C,w)),H.setAttribute("uv",new Wi(N,y)),H.setAttribute("faceIndex",new Wi(U,S)),r.push(new Wn(H,null)),l>cr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function $_(s,e,i){const r=new Xi(s,e,i);return r.texture.mapping=uu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Is(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function ER(s,e,i){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:SR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function bR(s,e,i){const r=new Float32Array(Ir),l=new oe(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function ev(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function tv(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function du(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Sx extends Xi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new px(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Gr(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:Ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:Ma});c.uniforms.tEquirect.value=i;const f=new Wn(l,c),p=i.minFilter;return i.minFilter===zr&&(i.minFilter=Dn),new D1(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}function TR(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,M=!1){return g==null?null:M?f(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Cd||M===wd)if(e.has(g)){const b=e.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const w=new Sx(b.height);return w.fromEquirectangularTexture(s,g),e.set(g,w),g.addEventListener("dispose",h),p(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,b=M===Cd||M===wd,w=M===Hr||M===Vs;if(b||w){let y=i.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new J_(s)),y=b?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const C=g.image;return b&&C&&C.height>0||w&&C&&m(C)?(r===null&&(r=new J_(s)),y=b?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function p(g,M){return M===Cd?g.mapping=Hr:M===wd&&(g.mapping=Vs),g}function m(g){let M=0;const b=6;for(let w=0;w<b;w++)g[w]!==void 0&&M++;return M===b}function h(g){const M=g.target;M.removeEventListener("dispose",h);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:v}}function AR(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ou("WebGLRenderer: "+r+" extension not supported."),l}}}function RR(s,e,i,r){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",f),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function h(v){const g=[],M=v.index,b=v.attributes.position;let w=0;if(b===void 0)return;if(M!==null){const C=M.array;w=M.version;for(let N=0,U=C.length;N<U;N+=3){const H=C[N+0],F=C[N+1],I=C[N+2];g.push(H,F,F,I,I,H)}}else{const C=b.array;w=b.version;for(let N=0,U=C.length/3-1;N<U;N+=3){const H=N+0,F=N+1,I=N+2;g.push(H,F,F,I,I,H)}}const y=new(b.count>=65535?dx:fx)(g,1);y.version=w;const S=c.get(v);S&&e.remove(S),c.set(v,y)}function _(v){const g=c.get(v);if(g){const M=v.index;M!==null&&g.version<M.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:_}}function CR(s,e,i){let r;function l(g){r=g}let c,f;function p(g){c=g.type,f=g.bytesPerElement}function m(g,M){s.drawElements(r,M,c,g*f),i.update(M,r,1)}function h(g,M,b){b!==0&&(s.drawElementsInstanced(r,M,c,g*f,b),i.update(M,r,b))}function _(g,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,g,0,b);let y=0;for(let S=0;S<b;S++)y+=M[S];i.update(y,r,1)}function v(g,M,b,w){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<g.length;S++)h(g[S]/f,M[S],w[S]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,g,0,w,0,b);let S=0;for(let C=0;C<b;C++)S+=M[C]*w[C];i.update(S,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function wR(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,p){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:wt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function DR(s,e,i){const r=new WeakMap,l=new rn;function c(f,p,m){const h=f.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=_!==void 0?_.length:0;let g=r.get(p);if(g===void 0||g.count!==v){let D=function(){I.dispose(),r.delete(p),p.removeEventListener("dispose",D)};g!==void 0&&g.texture.dispose();const M=p.morphAttributes.position!==void 0,b=p.morphAttributes.normal!==void 0,w=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],S=p.morphAttributes.normal||[],C=p.morphAttributes.color||[];let N=0;M===!0&&(N=1),b===!0&&(N=2),w===!0&&(N=3);let U=p.attributes.position.count*N,H=1;U>e.maxTextureSize&&(H=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const F=new Float32Array(U*H*4*v),I=new lx(F,U,H,v);I.type=Gi,I.needsUpdate=!0;const T=N*4;for(let ie=0;ie<v;ie++){const G=y[ie],$=S[ie],se=C[ie],ce=U*H*4*ie;for(let ae=0;ae<G.count;ae++){const O=ae*T;M===!0&&(l.fromBufferAttribute(G,ae),F[ce+O+0]=l.x,F[ce+O+1]=l.y,F[ce+O+2]=l.z,F[ce+O+3]=0),b===!0&&(l.fromBufferAttribute($,ae),F[ce+O+4]=l.x,F[ce+O+5]=l.y,F[ce+O+6]=l.z,F[ce+O+7]=0),w===!0&&(l.fromBufferAttribute(se,ae),F[ce+O+8]=l.x,F[ce+O+9]=l.y,F[ce+O+10]=l.z,F[ce+O+11]=se.itemSize===4?l.w:1)}}g={count:v,texture:I,size:new Pt(U,H)},r.set(p,g),p.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let M=0;for(let w=0;w<h.length;w++)M+=h[w];const b=p.morphTargetsRelative?1:1-M;m.getUniforms().setValue(s,"morphTargetBaseInfluence",b),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function NR(s,e,i,r,l){let c=new WeakMap;function f(h){const _=l.render.frame,v=h.geometry,g=e.get(h,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==_&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,_))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function p(){c=new WeakMap}function m(h){const _=h.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:p}}const UR={[Wv]:"LINEAR_TONE_MAPPING",[qv]:"REINHARD_TONE_MAPPING",[jv]:"CINEON_TONE_MAPPING",[Yv]:"ACES_FILMIC_TONE_MAPPING",[Kv]:"AGX_TONE_MAPPING",[Qv]:"NEUTRAL_TONE_MAPPING",[Zv]:"CUSTOM_TONE_MAPPING"};function LR(s,e,i,r,l){const c=new Xi(e,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new Xi(e,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),p=new wa;p.setAttribute("position",new ba([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ba([0,2,0,0,2,0],2));const m=new R1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Wn(p,m),_=new vx(-1,1,1,-1,0,1);let v=null,g=null,M=!1,b,w=null,y=[],S=!1;this.setSize=function(C,N){c.setSize(C,N),f.setSize(C,N);for(let U=0;U<y.length;U++){const H=y[U];H.setSize&&H.setSize(C,N)}},this.setEffects=function(C){y=C,S=y.length>0&&y[0].isRenderPass===!0;const N=c.width,U=c.height;for(let H=0;H<y.length;H++){const F=y[H];F.setSize&&F.setSize(N,U)}},this.begin=function(C,N){if(M||C.toneMapping===ki&&y.length===0)return!1;if(w=N,N!==null){const U=N.width,H=N.height;(c.width!==U||c.height!==H)&&this.setSize(U,H)}return S===!1&&C.setRenderTarget(c),b=C.toneMapping,C.toneMapping=ki,!0},this.hasRenderPass=function(){return S},this.end=function(C,N){C.toneMapping=b,M=!0;let U=c,H=f;for(let F=0;F<y.length;F++){const I=y[F];if(I.enabled!==!1&&(I.render(C,H,U,N),I.needsSwap!==!1)){const T=U;U=H,H=T}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,m.defines={},Tt.getTransfer(v)===Bt&&(m.defines.SRGB_TRANSFER="");const F=UR[g];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(w),C.render(h,_),w=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const yx=new In,ip=new rl(1,1),Mx=new lx,Ex=new i1,bx=new px,nv=[],iv=[],av=new Float32Array(16),rv=new Float32Array(9),sv=new Float32Array(4);function Qs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=nv[l];if(c===void 0&&(c=new Float32Array(l),nv[l]=c),e!==0){r.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,s[f].toArray(c,p)}return c}function vn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function xn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function hu(s,e){let i=iv[e];i===void 0&&(i=new Int32Array(e),iv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function OR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function PR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;s.uniform2fv(this.addr,e),xn(i,e)}}function FR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;s.uniform3fv(this.addr,e),xn(i,e)}}function IR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;s.uniform4fv(this.addr,e),xn(i,e)}}function zR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,r))return;sv.set(r),s.uniformMatrix2fv(this.addr,!1,sv),xn(i,r)}}function BR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,r))return;rv.set(r),s.uniformMatrix3fv(this.addr,!1,rv),xn(i,r)}}function HR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,r))return;av.set(r),s.uniformMatrix4fv(this.addr,!1,av),xn(i,r)}}function GR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function VR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;s.uniform2iv(this.addr,e),xn(i,e)}}function kR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;s.uniform3iv(this.addr,e),xn(i,e)}}function XR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;s.uniform4iv(this.addr,e),xn(i,e)}}function WR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function qR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;s.uniform2uiv(this.addr,e),xn(i,e)}}function jR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;s.uniform3uiv(this.addr,e),xn(i,e)}}function YR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;s.uniform4uiv(this.addr,e),xn(i,e)}}function ZR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(ip.compareFunction=i.isReversedDepthBuffer()?Ep:Mp,c=ip):c=yx,i.setTexture2D(e||c,l)}function KR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ex,l)}function QR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||bx,l)}function JR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Mx,l)}function $R(s){switch(s){case 5126:return OR;case 35664:return PR;case 35665:return FR;case 35666:return IR;case 35674:return zR;case 35675:return BR;case 35676:return HR;case 5124:case 35670:return GR;case 35667:case 35671:return VR;case 35668:case 35672:return kR;case 35669:case 35673:return XR;case 5125:return WR;case 36294:return qR;case 36295:return jR;case 36296:return YR;case 35678:case 36198:case 36298:case 36306:case 35682:return ZR;case 35679:case 36299:case 36307:return KR;case 35680:case 36300:case 36308:case 36293:return QR;case 36289:case 36303:case 36311:case 36292:return JR}}function e2(s,e){s.uniform1fv(this.addr,e)}function t2(s,e){const i=Qs(e,this.size,2);s.uniform2fv(this.addr,i)}function n2(s,e){const i=Qs(e,this.size,3);s.uniform3fv(this.addr,i)}function i2(s,e){const i=Qs(e,this.size,4);s.uniform4fv(this.addr,i)}function a2(s,e){const i=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function r2(s,e){const i=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function s2(s,e){const i=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function o2(s,e){s.uniform1iv(this.addr,e)}function l2(s,e){s.uniform2iv(this.addr,e)}function c2(s,e){s.uniform3iv(this.addr,e)}function u2(s,e){s.uniform4iv(this.addr,e)}function f2(s,e){s.uniform1uiv(this.addr,e)}function d2(s,e){s.uniform2uiv(this.addr,e)}function h2(s,e){s.uniform3uiv(this.addr,e)}function p2(s,e){s.uniform4uiv(this.addr,e)}function m2(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=ip:f=yx;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function g2(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Ex,c[f])}function _2(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||bx,c[f])}function v2(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Mx,c[f])}function x2(s){switch(s){case 5126:return e2;case 35664:return t2;case 35665:return n2;case 35666:return i2;case 35674:return a2;case 35675:return r2;case 35676:return s2;case 5124:case 35670:return o2;case 35667:case 35671:return l2;case 35668:case 35672:return c2;case 35669:case 35673:return u2;case 5125:return f2;case 36294:return d2;case 36295:return h2;case 36296:return p2;case 35678:case 36198:case 36298:case 36306:case 35682:return m2;case 35679:case 36299:case 36307:return g2;case 35680:case 36300:case 36308:case 36293:return _2;case 36289:case 36303:case 36311:case 36292:return v2}}class S2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=$R(i.type)}}class y2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=x2(i.type)}}class M2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function ov(s,e){s.seq.push(e),s.map[e.id]=e}function E2(s,e,i){const r=s.name,l=r.length;for(sh.lastIndex=0;;){const c=sh.exec(r),f=sh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){ov(i,h===void 0?new S2(p,s,e):new y2(p,s,e));break}else{let v=i.map[p];v===void 0&&(v=new M2(p),ov(i,v)),i=v}}}class nu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);E2(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function lv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const b2=37297;let T2=0;function A2(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;r.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return r.join(`
`)}const cv=new ht;function R2(s){Tt._getMatrix(cv,Tt.workingColorSpace,s);const e=`mat3( ${cv.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(s)){case au:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function uv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+A2(s.getShaderSource(e),p)}else return c}function C2(s,e){const i=R2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const w2={[Wv]:"Linear",[qv]:"Reinhard",[jv]:"Cineon",[Yv]:"ACESFilmic",[Kv]:"AgX",[Qv]:"Neutral",[Zv]:"Custom"};function D2(s,e){const i=w2[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const jc=new oe;function N2(){Tt.getLuminanceCoefficients(jc);const s=jc.x.toFixed(4),e=jc.y.toFixed(4),i=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function L2(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function O2(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:p}}return i}function el(s){return s!==""}function fv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P2=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(s){return s.replace(P2,I2)}const F2=new Map;function I2(s,e){let i=pt[e];if(i===void 0){const r=F2.get(e);if(r!==void 0)i=pt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ap(i)}const z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hv(s){return s.replace(z2,B2)}function B2(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function pv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const H2={[Qc]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function G2(s){return H2[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const V2={[Hr]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function k2(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":V2[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const X2={[Vs]:"ENVMAP_MODE_REFRACTION"};function W2(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":X2[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const q2={[Xv]:"ENVMAP_BLENDING_MULTIPLY",[Fb]:"ENVMAP_BLENDING_MIX",[Ib]:"ENVMAP_BLENDING_ADD"};function j2(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":q2[s.combine]||"ENVMAP_BLENDING_NONE"}function Y2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Z2(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=G2(i),h=k2(i),_=W2(i),v=j2(i),g=Y2(i),M=U2(i),b=L2(c),w=l.createProgram();let y,S,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(el).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(el).join(`
`),S.length>0&&(S+=`
`)):(y=[pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),S=[pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?pt.tonemapping_pars_fragment:"",i.toneMapping!==ki?D2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,C2("linearToOutputTexel",i.outputColorSpace),N2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(el).join(`
`)),f=ap(f),f=fv(f,i),f=dv(f,i),p=ap(p),p=fv(p,i),p=dv(p,i),f=hv(f),p=hv(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===D_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===D_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=C+y+f,U=C+S+p,H=lv(l,l.VERTEX_SHADER,N),F=lv(l,l.FRAGMENT_SHADER,U);l.attachShader(w,H),l.attachShader(w,F),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(G){if(s.debug.checkShaderErrors){const $=l.getProgramInfoLog(w)||"",se=l.getShaderInfoLog(H)||"",ce=l.getShaderInfoLog(F)||"",ae=$.trim(),O=se.trim(),B=ce.trim();let fe=!0,me=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,H,F);else{const Te=uv(l,H,"vertex"),P=uv(l,F,"fragment");wt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ae+`
`+Te+`
`+P)}else ae!==""?rt("WebGLProgram: Program Info Log:",ae):(O===""||B==="")&&(me=!1);me&&(G.diagnostics={runnable:fe,programLog:ae,vertexShader:{log:O,prefix:y},fragmentShader:{log:B,prefix:S}})}l.deleteShader(H),l.deleteShader(F),T=new nu(l,w),D=O2(l,w)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let ie=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ie===!1&&(ie=l.getProgramParameter(w,b2)),ie},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=T2++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=F,this}let K2=0;class Q2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new J2(e),i.set(e,r)),r}}class J2{constructor(e){this.id=K2++,this.code=e,this.usedTimes=0}}function $2(s,e,i,r,l,c){const f=new cx,p=new Q2,m=new Set,h=[],_=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,D,ie,G,$){const se=G.fog,ce=$.geometry,ae=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,B=e.get(T.envMap||ae,O),fe=B&&B.mapping===uu?B.image.height:null,me=M[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&rt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const Te=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,P=Te!==void 0?Te.length:0;let Y=0;ce.morphAttributes.position!==void 0&&(Y=1),ce.morphAttributes.normal!==void 0&&(Y=2),ce.morphAttributes.color!==void 0&&(Y=3);let xe,Ce,ze,te;if(me){const bt=Hi[me];xe=bt.vertexShader,Ce=bt.fragmentShader}else xe=T.vertexShader,Ce=T.fragmentShader,p.update(T),ze=p.getVertexShaderID(T),te=p.getFragmentShaderID(T);const Se=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Xe=$.isInstancedMesh===!0,Qe=$.isBatchedMesh===!0,et=!!T.map,$t=!!T.matcap,vt=!!B,mt=!!T.aoMap,Dt=!!T.lightMap,lt=!!T.bumpMap,Qt=!!T.normalMap,V=!!T.displacementMap,qt=!!T.emissiveMap,Et=!!T.metalnessMap,Ut=!!T.roughnessMap,je=T.anisotropy>0,L=T.clearcoat>0,E=T.dispersion>0,j=T.iridescence>0,ge=T.sheen>0,ye=T.transmission>0,he=je&&!!T.anisotropyMap,We=L&&!!T.clearcoatMap,De=L&&!!T.clearcoatNormalMap,Ke=L&&!!T.clearcoatRoughnessMap,tt=j&&!!T.iridescenceMap,be=j&&!!T.iridescenceThicknessMap,Me=ge&&!!T.sheenColorMap,Pe=ge&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,Fe=!!T.specularColorMap,ut=!!T.specularIntensityMap,q=ye&&!!T.transmissionMap,we=ye&&!!T.thicknessMap,Re=!!T.gradientMap,Ie=!!T.alphaMap,Ee=T.alphaTest>0,de=!!T.alphaHash,He=!!T.extensions;let it=ki;T.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(it=s.toneMapping);const Ft={shaderID:me,shaderType:T.type,shaderName:T.name,vertexShader:xe,fragmentShader:Ce,defines:T.defines,customVertexShaderID:ze,customFragmentShaderID:te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&$._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&$.instanceColor!==null,instancingMorph:Xe&&$.morphTexture!==null,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Xs,alphaToCoverage:!!T.alphaToCoverage,map:et,matcap:$t,envMap:vt,envMapMode:vt&&B.mapping,envMapCubeUVHeight:fe,aoMap:mt,lightMap:Dt,bumpMap:lt,normalMap:Qt,displacementMap:V,emissiveMap:qt,normalMapObjectSpace:Qt&&T.normalMapType===Hb,normalMapTangentSpace:Qt&&T.normalMapType===sx,metalnessMap:Et,roughnessMap:Ut,anisotropy:je,anisotropyMap:he,clearcoat:L,clearcoatMap:We,clearcoatNormalMap:De,clearcoatRoughnessMap:Ke,dispersion:E,iridescence:j,iridescenceMap:tt,iridescenceThicknessMap:be,sheen:ge,sheenColorMap:Me,sheenRoughnessMap:Pe,specularMap:Oe,specularColorMap:Fe,specularIntensityMap:ut,transmission:ye,transmissionMap:q,thicknessMap:we,gradientMap:Re,opaque:T.transparent===!1&&T.blending===Bs&&T.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Ee,alphaHash:de,combine:T.combine,mapUv:et&&b(T.map.channel),aoMapUv:mt&&b(T.aoMap.channel),lightMapUv:Dt&&b(T.lightMap.channel),bumpMapUv:lt&&b(T.bumpMap.channel),normalMapUv:Qt&&b(T.normalMap.channel),displacementMapUv:V&&b(T.displacementMap.channel),emissiveMapUv:qt&&b(T.emissiveMap.channel),metalnessMapUv:Et&&b(T.metalnessMap.channel),roughnessMapUv:Ut&&b(T.roughnessMap.channel),anisotropyMapUv:he&&b(T.anisotropyMap.channel),clearcoatMapUv:We&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:De&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:be&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&b(T.sheenRoughnessMap.channel),specularMapUv:Oe&&b(T.specularMap.channel),specularColorMapUv:Fe&&b(T.specularColorMap.channel),specularIntensityMapUv:ut&&b(T.specularIntensityMap.channel),transmissionMapUv:q&&b(T.transmissionMap.channel),thicknessMapUv:we&&b(T.thicknessMap.channel),alphaMapUv:Ie&&b(T.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Qt||je),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ce.attributes.uv&&(et||Ie),fog:!!se,useFog:T.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ce.attributes.normal===void 0&&Qt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ae,skinning:$.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:Y,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&ie.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:et&&T.map.isVideoTexture===!0&&Tt.getTransfer(T.map.colorSpace)===Bt,decodeVideoTextureEmissive:qt&&T.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(T.emissiveMap.colorSpace)===Bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===xa,flipSided:T.side===qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ft.vertexUv1s=m.has(1),Ft.vertexUv2s=m.has(2),Ft.vertexUv3s=m.has(3),m.clear(),Ft}function y(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ie in T.defines)D.push(ie),D.push(T.defines[ie]);return T.isRawShaderMaterial===!1&&(S(D,T),C(D,T),D.push(s.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function S(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function C(T,D){f.disableAll(),D.instancing&&f.enable(0),D.instancingColor&&f.enable(1),D.instancingMorph&&f.enable(2),D.matcap&&f.enable(3),D.envMap&&f.enable(4),D.normalMapObjectSpace&&f.enable(5),D.normalMapTangentSpace&&f.enable(6),D.clearcoat&&f.enable(7),D.iridescence&&f.enable(8),D.alphaTest&&f.enable(9),D.vertexColors&&f.enable(10),D.vertexAlphas&&f.enable(11),D.vertexUv1s&&f.enable(12),D.vertexUv2s&&f.enable(13),D.vertexUv3s&&f.enable(14),D.vertexTangents&&f.enable(15),D.anisotropy&&f.enable(16),D.alphaHash&&f.enable(17),D.batching&&f.enable(18),D.dispersion&&f.enable(19),D.batchingColor&&f.enable(20),D.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reversedDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),T.push(f.mask)}function N(T){const D=M[T.type];let ie;if(D){const G=Hi[D];ie=b1.clone(G.uniforms)}else ie=T.uniforms;return ie}function U(T,D){let ie=_.get(D);return ie!==void 0?++ie.usedTimes:(ie=new Z2(s,D,T,l),h.push(ie),_.set(D,ie)),ie}function H(T){if(--T.usedTimes===0){const D=h.indexOf(T);h[D]=h[h.length-1],h.pop(),_.delete(T.cacheKey),T.destroy()}}function F(T){p.remove(T)}function I(){p.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:N,acquireProgram:U,releaseProgram:H,releaseShaderCache:F,programs:h,dispose:I}}function e3(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let p=s.get(f);return p===void 0&&(p={},s.set(f,p)),p}function r(f){s.delete(f)}function l(f,p,m){s.get(f)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function t3(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function mv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function gv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,b,w,y,S){let C=s[e];return C===void 0?(C={id:g.id,object:g,geometry:M,material:b,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:y,group:S},s[e]=C):(C.id=g.id,C.object=g,C.geometry=M,C.material=b,C.materialVariant=f(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=y,C.group=S),e++,C}function m(g,M,b,w,y,S){const C=p(g,M,b,w,y,S);b.transmission>0?r.push(C):b.transparent===!0?l.push(C):i.push(C)}function h(g,M,b,w,y,S){const C=p(g,M,b,w,y,S);b.transmission>0?r.unshift(C):b.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,M){i.length>1&&i.sort(g||t3),r.length>1&&r.sort(M||mv),l.length>1&&l.sort(M||mv)}function v(){for(let g=e,M=s.length;g<M;g++){const b=s[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:v,sort:_}}function n3(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new gv,s.set(r,[f])):l>=c.length?(f=new gv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function i3(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new Ot};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":i={color:new Ot,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=i,i}}}function a3(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let r3=0;function s3(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function o3(s){const e=new i3,i=a3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new oe);const l=new oe,c=new pn,f=new pn;function p(h){let _=0,v=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,b=0,w=0,y=0,S=0,C=0,N=0,U=0,H=0,F=0,I=0;h.sort(s3);for(let D=0,ie=h.length;D<ie;D++){const G=h[D],$=G.color,se=G.intensity,ce=G.distance;let ae=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===ks?ae=G.shadow.map.texture:ae=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=$.r*se,v+=$.g*se,g+=$.b*se;else if(G.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(G.sh.coefficients[O],se);I++}else if(G.isDirectionalLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const B=G.shadow,fe=i.get(G);fe.shadowIntensity=B.intensity,fe.shadowBias=B.bias,fe.shadowNormalBias=B.normalBias,fe.shadowRadius=B.radius,fe.shadowMapSize=B.mapSize,r.directionalShadow[M]=fe,r.directionalShadowMap[M]=ae,r.directionalShadowMatrix[M]=G.shadow.matrix,C++}r.directional[M]=O,M++}else if(G.isSpotLight){const O=e.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy($).multiplyScalar(se),O.distance=ce,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,r.spot[w]=O;const B=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,B.updateMatrices(G),G.castShadow&&F++),r.spotLightMatrix[w]=B.matrix,G.castShadow){const fe=i.get(G);fe.shadowIntensity=B.intensity,fe.shadowBias=B.bias,fe.shadowNormalBias=B.normalBias,fe.shadowRadius=B.radius,fe.shadowMapSize=B.mapSize,r.spotShadow[w]=fe,r.spotShadowMap[w]=ae,U++}w++}else if(G.isRectAreaLight){const O=e.get(G);O.color.copy($).multiplyScalar(se),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=O,y++}else if(G.isPointLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const B=G.shadow,fe=i.get(G);fe.shadowIntensity=B.intensity,fe.shadowBias=B.bias,fe.shadowNormalBias=B.normalBias,fe.shadowRadius=B.radius,fe.shadowMapSize=B.mapSize,fe.shadowCameraNear=B.camera.near,fe.shadowCameraFar=B.camera.far,r.pointShadow[b]=fe,r.pointShadowMap[b]=ae,r.pointShadowMatrix[b]=G.shadow.matrix,N++}r.point[b]=O,b++}else if(G.isHemisphereLight){const O=e.get(G);O.skyColor.copy(G.color).multiplyScalar(se),O.groundColor.copy(G.groundColor).multiplyScalar(se),r.hemi[S]=O,S++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==C||T.numPointShadows!==N||T.numSpotShadows!==U||T.numSpotMaps!==H||T.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=y,r.point.length=b,r.hemi.length=S,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+H-F,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=I,T.directionalLength=M,T.pointLength=b,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=C,T.numPointShadows=N,T.numSpotShadows=U,T.numSpotMaps=H,T.numLightProbes=I,r.version=r3++)}function m(h,_){let v=0,g=0,M=0,b=0,w=0;const y=_.matrixWorldInverse;for(let S=0,C=h.length;S<C;S++){const N=h[S];if(N.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),v++}else if(N.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),f.identity(),c.copy(N.matrixWorld),c.premultiply(y),f.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),b++}else if(N.isPointLight){const U=r.point[g];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),g++}else if(N.isHemisphereLight){const U=r.hemi[w];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(y),w++}}}return{setup:p,setupView:m,state:r}}function _v(s){const e=new o3(s),i=[],r=[];function l(_){h.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function f(_){r.push(_)}function p(){e.setup(i)}function m(_){e.setupView(i,_)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function l3(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new _v(s),e.set(l,[p])):c>=f.length?(p=new _v(s),f.push(p)):p=f[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const c3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,f3=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],d3=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],vv=new pn,Qo=new oe,oh=new oe;function h3(s,e,i){let r=new hx;const l=new Pt,c=new Pt,f=new rn,p=new C1,m=new w1,h={},_=i.maxTextureSize,v={[ur]:qn,[qn]:ur,[xa]:xa},g=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:c3,fragmentShader:u3}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new wa;b.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Wn(b,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let S=this.type;this.render=function(F,I,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;this.type===_b&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qc);const D=s.getRenderTarget(),ie=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Ma),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const se=S!==this.type;se&&I.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(ae=>ae.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,ae=F.length;ce<ae;ce++){const O=F[ce],B=O.shadow;if(B===void 0){rt("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const fe=B.getFrameExtents();l.multiply(fe),c.copy(B.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/fe.x),l.x=c.x*fe.x,B.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/fe.y),l.y=c.y*fe.y,B.mapSize.y=c.y));const me=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=me,B.map===null||se===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Jo){if(O.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Xi(l.x,l.y,{format:ks,type:Aa,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new rl(l.x,l.y,Gi),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=Ra,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=An,B.map.depthTexture.magFilter=An}else O.isPointLight?(B.map=new Sx(l.x),B.map.depthTexture=new M1(l.x,qi)):(B.map=new Xi(l.x,l.y),B.map.depthTexture=new rl(l.x,l.y,qi)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=Ra,this.type===Qc?(B.map.depthTexture.compareFunction=me?Ep:Mp,B.map.depthTexture.minFilter=Dn,B.map.depthTexture.magFilter=Dn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=An,B.map.depthTexture.magFilter=An);B.camera.updateProjectionMatrix()}const Te=B.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Te;P++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,P),s.clear();else{P===0&&(s.setRenderTarget(B.map),s.clear());const Y=B.getViewport(P);f.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),$.viewport(f)}if(O.isPointLight){const Y=B.camera,xe=B.matrix,Ce=O.distance||Y.far;Ce!==Y.far&&(Y.far=Ce,Y.updateProjectionMatrix()),Qo.setFromMatrixPosition(O.matrixWorld),Y.position.copy(Qo),oh.copy(Y.position),oh.add(f3[P]),Y.up.copy(d3[P]),Y.lookAt(oh),Y.updateMatrixWorld(),xe.makeTranslation(-Qo.x,-Qo.y,-Qo.z),vv.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),B._frustum.setFromProjectionMatrix(vv,Y.coordinateSystem,Y.reversedDepth)}else B.updateMatrices(O);r=B.getFrustum(),U(I,T,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===Jo&&C(B,T),B.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(D,ie,G)};function C(F,I){const T=e.update(w);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Xi(l.x,l.y,{format:ks,type:Aa})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(I,null,T,g,w,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(I,null,T,M,w,null)}function N(F,I,T,D){let ie=null;const G=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)ie=G;else if(ie=T.isPointLight===!0?m:p,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const $=ie.uuid,se=I.uuid;let ce=h[$];ce===void 0&&(ce={},h[$]=ce);let ae=ce[se];ae===void 0&&(ae=ie.clone(),ce[se]=ae,I.addEventListener("dispose",H)),ie=ae}if(ie.visible=I.visible,ie.wireframe=I.wireframe,D===Jo?ie.side=I.shadowSide!==null?I.shadowSide:I.side:ie.side=I.shadowSide!==null?I.shadowSide:v[I.side],ie.alphaMap=I.alphaMap,ie.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,ie.map=I.map,ie.clipShadows=I.clipShadows,ie.clippingPlanes=I.clippingPlanes,ie.clipIntersection=I.clipIntersection,ie.displacementMap=I.displacementMap,ie.displacementScale=I.displacementScale,ie.displacementBias=I.displacementBias,ie.wireframeLinewidth=I.wireframeLinewidth,ie.linewidth=I.linewidth,T.isPointLight===!0&&ie.isMeshDistanceMaterial===!0){const $=s.properties.get(ie);$.light=T}return ie}function U(F,I,T,D,ie){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&ie===Jo)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const se=e.update(F),ce=F.material;if(Array.isArray(ce)){const ae=se.groups;for(let O=0,B=ae.length;O<B;O++){const fe=ae[O],me=ce[fe.materialIndex];if(me&&me.visible){const Te=N(F,me,D,ie);F.onBeforeShadow(s,F,I,T,se,Te,fe),s.renderBufferDirect(T,null,se,Te,F,fe),F.onAfterShadow(s,F,I,T,se,Te,fe)}}}else if(ce.visible){const ae=N(F,ce,D,ie);F.onBeforeShadow(s,F,I,T,se,ae,null),s.renderBufferDirect(T,null,se,ae,F,null),F.onAfterShadow(s,F,I,T,se,ae,null)}}const $=F.children;for(let se=0,ce=$.length;se<ce;se++)U($[se],I,T,D,ie)}function H(F){F.target.removeEventListener("dispose",H);for(const T in h){const D=h[T],ie=F.target.uuid;ie in D&&(D[ie].dispose(),delete D[ie])}}}function p3(s,e){function i(){let q=!1;const we=new rn;let Re=null;const Ie=new rn(0,0,0,0);return{setMask:function(Ee){Re!==Ee&&!q&&(s.colorMask(Ee,Ee,Ee,Ee),Re=Ee)},setLocked:function(Ee){q=Ee},setClear:function(Ee,de,He,it,Ft){Ft===!0&&(Ee*=it,de*=it,He*=it),we.set(Ee,de,He,it),Ie.equals(we)===!1&&(s.clearColor(Ee,de,He,it),Ie.copy(we))},reset:function(){q=!1,Re=null,Ie.set(-1,0,0,0)}}}function r(){let q=!1,we=!1,Re=null,Ie=null,Ee=null;return{setReversed:function(de){if(we!==de){const He=e.get("EXT_clip_control");de?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),we=de;const it=Ee;Ee=null,this.setClear(it)}},getReversed:function(){return we},setTest:function(de){de?Se(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(de){Re!==de&&!q&&(s.depthMask(de),Re=de)},setFunc:function(de){if(we&&(de=Kb[de]),Ie!==de){switch(de){case mh:s.depthFunc(s.NEVER);break;case gh:s.depthFunc(s.ALWAYS);break;case _h:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case vh:s.depthFunc(s.EQUAL);break;case xh:s.depthFunc(s.GEQUAL);break;case Sh:s.depthFunc(s.GREATER);break;case yh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=de}},setLocked:function(de){q=de},setClear:function(de){Ee!==de&&(Ee=de,we&&(de=1-de),s.clearDepth(de))},reset:function(){q=!1,Re=null,Ie=null,Ee=null,we=!1}}}function l(){let q=!1,we=null,Re=null,Ie=null,Ee=null,de=null,He=null,it=null,Ft=null;return{setTest:function(bt){q||(bt?Se(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(bt){we!==bt&&!q&&(s.stencilMask(bt),we=bt)},setFunc:function(bt,Nn,xi){(Re!==bt||Ie!==Nn||Ee!==xi)&&(s.stencilFunc(bt,Nn,xi),Re=bt,Ie=Nn,Ee=xi)},setOp:function(bt,Nn,xi){(de!==bt||He!==Nn||it!==xi)&&(s.stencilOp(bt,Nn,xi),de=bt,He=Nn,it=xi)},setLocked:function(bt){q=bt},setClear:function(bt){Ft!==bt&&(s.clearStencil(bt),Ft=bt)},reset:function(){q=!1,we=null,Re=null,Ie=null,Ee=null,de=null,He=null,it=null,Ft=null}}}const c=new i,f=new r,p=new l,m=new WeakMap,h=new WeakMap;let _={},v={},g=new WeakMap,M=[],b=null,w=!1,y=null,S=null,C=null,N=null,U=null,H=null,F=null,I=new Ot(0,0,0),T=0,D=!1,ie=null,G=null,$=null,se=null,ce=null;const ae=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,B=0;const fe=s.getParameter(s.VERSION);fe.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(fe)[1]),O=B>=1):fe.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),O=B>=2);let me=null,Te={};const P=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),xe=new rn().fromArray(P),Ce=new rn().fromArray(Y);function ze(q,we,Re,Ie){const Ee=new Uint8Array(4),de=s.createTexture();s.bindTexture(q,de),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<Re;He++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(we+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return de}const te={};te[s.TEXTURE_2D]=ze(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Se(s.DEPTH_TEST),f.setFunc(Gs),lt(!1),Qt(b_),Se(s.CULL_FACE),mt(Ma);function Se(q){_[q]!==!0&&(s.enable(q),_[q]=!0)}function Ae(q){_[q]!==!1&&(s.disable(q),_[q]=!1)}function Xe(q,we){return v[q]!==we?(s.bindFramebuffer(q,we),v[q]=we,q===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=we),q===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Qe(q,we){let Re=M,Ie=!1;if(q){Re=g.get(we),Re===void 0&&(Re=[],g.set(we,Re));const Ee=q.textures;if(Re.length!==Ee.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let de=0,He=Ee.length;de<He;de++)Re[de]=s.COLOR_ATTACHMENT0+de;Re.length=Ee.length,Ie=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(Re)}function et(q){return b!==q?(s.useProgram(q),b=q,!0):!1}const $t={[Fr]:s.FUNC_ADD,[xb]:s.FUNC_SUBTRACT,[Sb]:s.FUNC_REVERSE_SUBTRACT};$t[yb]=s.MIN,$t[Mb]=s.MAX;const vt={[Eb]:s.ZERO,[bb]:s.ONE,[Tb]:s.SRC_COLOR,[hh]:s.SRC_ALPHA,[Nb]:s.SRC_ALPHA_SATURATE,[wb]:s.DST_COLOR,[Rb]:s.DST_ALPHA,[Ab]:s.ONE_MINUS_SRC_COLOR,[ph]:s.ONE_MINUS_SRC_ALPHA,[Db]:s.ONE_MINUS_DST_COLOR,[Cb]:s.ONE_MINUS_DST_ALPHA,[Ub]:s.CONSTANT_COLOR,[Lb]:s.ONE_MINUS_CONSTANT_COLOR,[Ob]:s.CONSTANT_ALPHA,[Pb]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(q,we,Re,Ie,Ee,de,He,it,Ft,bt){if(q===Ma){w===!0&&(Ae(s.BLEND),w=!1);return}if(w===!1&&(Se(s.BLEND),w=!0),q!==vb){if(q!==y||bt!==D){if((S!==Fr||U!==Fr)&&(s.blendEquation(s.FUNC_ADD),S=Fr,U=Fr),bt)switch(q){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case T_:s.blendFunc(s.ONE,s.ONE);break;case A_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case R_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:wt("WebGLState: Invalid blending: ",q);break}else switch(q){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case T_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case A_:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case R_:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",q);break}C=null,N=null,H=null,F=null,I.set(0,0,0),T=0,y=q,D=bt}return}Ee=Ee||we,de=de||Re,He=He||Ie,(we!==S||Ee!==U)&&(s.blendEquationSeparate($t[we],$t[Ee]),S=we,U=Ee),(Re!==C||Ie!==N||de!==H||He!==F)&&(s.blendFuncSeparate(vt[Re],vt[Ie],vt[de],vt[He]),C=Re,N=Ie,H=de,F=He),(it.equals(I)===!1||Ft!==T)&&(s.blendColor(it.r,it.g,it.b,Ft),I.copy(it),T=Ft),y=q,D=!1}function Dt(q,we){q.side===xa?Ae(s.CULL_FACE):Se(s.CULL_FACE);let Re=q.side===qn;we&&(Re=!Re),lt(Re),q.blending===Bs&&q.transparent===!1?mt(Ma):mt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Ie=q.stencilWrite;p.setTest(Ie),Ie&&(p.setMask(q.stencilWriteMask),p.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),p.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),qt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(q){ie!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),ie=q)}function Qt(q){q!==mb?(Se(s.CULL_FACE),q!==G&&(q===b_?s.cullFace(s.BACK):q===gb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),G=q}function V(q){q!==$&&(O&&s.lineWidth(q),$=q)}function qt(q,we,Re){q?(Se(s.POLYGON_OFFSET_FILL),(se!==we||ce!==Re)&&(se=we,ce=Re,f.getReversed()&&(we=-we),s.polygonOffset(we,Re))):Ae(s.POLYGON_OFFSET_FILL)}function Et(q){q?Se(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function Ut(q){q===void 0&&(q=s.TEXTURE0+ae-1),me!==q&&(s.activeTexture(q),me=q)}function je(q,we,Re){Re===void 0&&(me===null?Re=s.TEXTURE0+ae-1:Re=me);let Ie=Te[Re];Ie===void 0&&(Ie={type:void 0,texture:void 0},Te[Re]=Ie),(Ie.type!==q||Ie.texture!==we)&&(me!==Re&&(s.activeTexture(Re),me=Re),s.bindTexture(q,we||te[q]),Ie.type=q,Ie.texture=we)}function L(){const q=Te[me];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function j(){try{s.compressedTexImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function ge(){try{s.texSubImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function ye(){try{s.texSubImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function We(){try{s.compressedTexSubImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function De(){try{s.texStorage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function Ke(){try{s.texStorage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function tt(){try{s.texImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function be(){try{s.texImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function Me(q){xe.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),xe.copy(q))}function Pe(q){Ce.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Ce.copy(q))}function Oe(q,we){let Re=h.get(we);Re===void 0&&(Re=new WeakMap,h.set(we,Re));let Ie=Re.get(q);Ie===void 0&&(Ie=s.getUniformBlockIndex(we,q.name),Re.set(q,Ie))}function Fe(q,we){const Ie=h.get(we).get(q);m.get(we)!==Ie&&(s.uniformBlockBinding(we,Ie,q.__bindingPointIndex),m.set(we,Ie))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},me=null,Te={},v={},g=new WeakMap,M=[],b=null,w=!1,y=null,S=null,C=null,N=null,U=null,H=null,F=null,I=new Ot(0,0,0),T=0,D=!1,ie=null,G=null,$=null,se=null,ce=null,xe.set(0,0,s.canvas.width,s.canvas.height),Ce.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:Se,disable:Ae,bindFramebuffer:Xe,drawBuffers:Qe,useProgram:et,setBlending:mt,setMaterial:Dt,setFlipSided:lt,setCullFace:Qt,setLineWidth:V,setPolygonOffset:qt,setScissorTest:Et,activeTexture:Ut,bindTexture:je,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:j,texImage2D:tt,texImage3D:be,updateUBOMapping:Oe,uniformBlockBinding:Fe,texStorage2D:De,texStorage3D:Ke,texSubImage2D:ge,texSubImage3D:ye,compressedTexSubImage2D:he,compressedTexSubImage3D:We,scissor:Me,viewport:Pe,reset:ut}}function m3(s,e,i,r,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Pt,_=new WeakMap;let v;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):su("canvas")}function w(L,E,j){let ge=1;const ye=je(L);if((ye.width>j||ye.height>j)&&(ge=j/Math.max(ye.width,ye.height)),ge<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const he=Math.floor(ge*ye.width),We=Math.floor(ge*ye.height);v===void 0&&(v=b(he,We));const De=E?b(he,We):v;return De.width=he,De.height=We,De.getContext("2d").drawImage(L,0,0,he,We),rt("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+he+"x"+We+")."),De}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),L;return L}function y(L){return L.generateMipmaps}function S(L){s.generateMipmap(L)}function C(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(L,E,j,ge,ye=!1){if(L!==null){if(s[L]!==void 0)return s[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=E;if(E===s.RED&&(j===s.FLOAT&&(he=s.R32F),j===s.HALF_FLOAT&&(he=s.R16F),j===s.UNSIGNED_BYTE&&(he=s.R8)),E===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(he=s.R8UI),j===s.UNSIGNED_SHORT&&(he=s.R16UI),j===s.UNSIGNED_INT&&(he=s.R32UI),j===s.BYTE&&(he=s.R8I),j===s.SHORT&&(he=s.R16I),j===s.INT&&(he=s.R32I)),E===s.RG&&(j===s.FLOAT&&(he=s.RG32F),j===s.HALF_FLOAT&&(he=s.RG16F),j===s.UNSIGNED_BYTE&&(he=s.RG8)),E===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(he=s.RG8UI),j===s.UNSIGNED_SHORT&&(he=s.RG16UI),j===s.UNSIGNED_INT&&(he=s.RG32UI),j===s.BYTE&&(he=s.RG8I),j===s.SHORT&&(he=s.RG16I),j===s.INT&&(he=s.RG32I)),E===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(he=s.RGB8UI),j===s.UNSIGNED_SHORT&&(he=s.RGB16UI),j===s.UNSIGNED_INT&&(he=s.RGB32UI),j===s.BYTE&&(he=s.RGB8I),j===s.SHORT&&(he=s.RGB16I),j===s.INT&&(he=s.RGB32I)),E===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),j===s.UNSIGNED_INT&&(he=s.RGBA32UI),j===s.BYTE&&(he=s.RGBA8I),j===s.SHORT&&(he=s.RGBA16I),j===s.INT&&(he=s.RGBA32I)),E===s.RGB&&(j===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),E===s.RGBA){const We=ye?au:Tt.getTransfer(ge);j===s.FLOAT&&(he=s.RGBA32F),j===s.HALF_FLOAT&&(he=s.RGBA16F),j===s.UNSIGNED_BYTE&&(he=We===Bt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function U(L,E){let j;return L?E===null||E===qi||E===al?j=s.DEPTH24_STENCIL8:E===Gi?j=s.DEPTH32F_STENCIL8:E===il&&(j=s.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qi||E===al?j=s.DEPTH_COMPONENT24:E===Gi?j=s.DEPTH_COMPONENT32F:E===il&&(j=s.DEPTH_COMPONENT16),j}function H(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==An&&L.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function F(L){const E=L.target;E.removeEventListener("dispose",F),T(E),E.isVideoTexture&&_.delete(E)}function I(L){const E=L.target;E.removeEventListener("dispose",I),ie(E)}function T(L){const E=r.get(L);if(E.__webglInit===void 0)return;const j=L.source,ge=g.get(j);if(ge){const ye=ge[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&D(L),Object.keys(ge).length===0&&g.delete(j)}r.remove(L)}function D(L){const E=r.get(L);s.deleteTexture(E.__webglTexture);const j=L.source,ge=g.get(j);delete ge[E.__cacheKey],f.memory.textures--}function ie(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(E.__webglFramebuffer[ge]))for(let ye=0;ye<E.__webglFramebuffer[ge].length;ye++)s.deleteFramebuffer(E.__webglFramebuffer[ge][ye]);else s.deleteFramebuffer(E.__webglFramebuffer[ge]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ge])}else{if(Array.isArray(E.__webglFramebuffer))for(let ge=0;ge<E.__webglFramebuffer.length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[ge]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ge=0;ge<E.__webglColorRenderbuffer.length;ge++)E.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ge]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=L.textures;for(let ge=0,ye=j.length;ge<ye;ge++){const he=r.get(j[ge]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),f.memory.textures--),r.remove(j[ge])}r.remove(L)}let G=0;function $(){G=0}function se(){const L=G;return L>=l.maxTextures&&rt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function ce(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ae(L,E){const j=r.get(L);if(L.isVideoTexture&&Et(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&j.__version!==L.version){const ge=L.image;if(ge===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{te(j,L,E);return}}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+E)}function O(L,E){const j=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){te(j,L,E);return}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+E)}function B(L,E){const j=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){te(j,L,E);return}i.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+E)}function fe(L,E){const j=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&j.__version!==L.version){Se(j,L,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+E)}const me={[Mh]:s.REPEAT,[Sa]:s.CLAMP_TO_EDGE,[Eh]:s.MIRRORED_REPEAT},Te={[An]:s.NEAREST,[zb]:s.NEAREST_MIPMAP_NEAREST,[Ac]:s.NEAREST_MIPMAP_LINEAR,[Dn]:s.LINEAR,[Dd]:s.LINEAR_MIPMAP_NEAREST,[zr]:s.LINEAR_MIPMAP_LINEAR},P={[Gb]:s.NEVER,[qb]:s.ALWAYS,[Vb]:s.LESS,[Mp]:s.LEQUAL,[kb]:s.EQUAL,[Ep]:s.GEQUAL,[Xb]:s.GREATER,[Wb]:s.NOTEQUAL};function Y(L,E){if(E.type===Gi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Dn||E.magFilter===Dd||E.magFilter===Ac||E.magFilter===zr||E.minFilter===Dn||E.minFilter===Dd||E.minFilter===Ac||E.minFilter===zr)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,me[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,me[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,me[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Te[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Te[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===An||E.minFilter!==Ac&&E.minFilter!==zr||E.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function xe(L,E){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const ge=E.source;let ye=g.get(ge);ye===void 0&&(ye={},g.set(ge,ye));const he=ce(E);if(he!==L.__cacheKey){ye[he]===void 0&&(ye[he]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,j=!0),ye[he].usedTimes++;const We=ye[L.__cacheKey];We!==void 0&&(ye[L.__cacheKey].usedTimes--,We.usedTimes===0&&D(E)),L.__cacheKey=he,L.__webglTexture=ye[he].texture}return j}function Ce(L,E,j){return Math.floor(Math.floor(L/j)/E)}function ze(L,E,j,ge){const he=L.updateRanges;if(he.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,j,ge,E.data);else{he.sort((be,Me)=>be.start-Me.start);let We=0;for(let be=1;be<he.length;be++){const Me=he[We],Pe=he[be],Oe=Me.start+Me.count,Fe=Ce(Pe.start,E.width,4),ut=Ce(Me.start,E.width,4);Pe.start<=Oe+1&&Fe===ut&&Ce(Pe.start+Pe.count-1,E.width,4)===Fe?Me.count=Math.max(Me.count,Pe.start+Pe.count-Me.start):(++We,he[We]=Pe)}he.length=We+1;const De=s.getParameter(s.UNPACK_ROW_LENGTH),Ke=s.getParameter(s.UNPACK_SKIP_PIXELS),tt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let be=0,Me=he.length;be<Me;be++){const Pe=he[be],Oe=Math.floor(Pe.start/4),Fe=Math.ceil(Pe.count/4),ut=Oe%E.width,q=Math.floor(Oe/E.width),we=Fe,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),s.pixelStorei(s.UNPACK_SKIP_ROWS,q),i.texSubImage2D(s.TEXTURE_2D,0,ut,q,we,Re,j,ge,E.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,De),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ke),s.pixelStorei(s.UNPACK_SKIP_ROWS,tt)}}function te(L,E,j){let ge=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ge=s.TEXTURE_3D);const ye=xe(L,E),he=E.source;i.bindTexture(ge,L.__webglTexture,s.TEXTURE0+j);const We=r.get(he);if(he.version!==We.__version||ye===!0){i.activeTexture(s.TEXTURE0+j);const De=Tt.getPrimaries(Tt.workingColorSpace),Ke=E.colorSpace===lr?null:Tt.getPrimaries(E.colorSpace),tt=E.colorSpace===lr||De===Ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let be=w(E.image,!1,l.maxTextureSize);be=Ut(E,be);const Me=c.convert(E.format,E.colorSpace),Pe=c.convert(E.type);let Oe=N(E.internalFormat,Me,Pe,E.colorSpace,E.isVideoTexture);Y(ge,E);let Fe;const ut=E.mipmaps,q=E.isVideoTexture!==!0,we=We.__version===void 0||ye===!0,Re=he.dataReady,Ie=H(E,be);if(E.isDepthTexture)Oe=U(E.format===Br,E.type),we&&(q?i.texStorage2D(s.TEXTURE_2D,1,Oe,be.width,be.height):i.texImage2D(s.TEXTURE_2D,0,Oe,be.width,be.height,0,Me,Pe,null));else if(E.isDataTexture)if(ut.length>0){q&&we&&i.texStorage2D(s.TEXTURE_2D,Ie,Oe,ut[0].width,ut[0].height);for(let Ee=0,de=ut.length;Ee<de;Ee++)Fe=ut[Ee],q?Re&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,Me,Pe,Fe.data):i.texImage2D(s.TEXTURE_2D,Ee,Oe,Fe.width,Fe.height,0,Me,Pe,Fe.data);E.generateMipmaps=!1}else q?(we&&i.texStorage2D(s.TEXTURE_2D,Ie,Oe,be.width,be.height),Re&&ze(E,be,Me,Pe)):i.texImage2D(s.TEXTURE_2D,0,Oe,be.width,be.height,0,Me,Pe,be.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){q&&we&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Oe,ut[0].width,ut[0].height,be.depth);for(let Ee=0,de=ut.length;Ee<de;Ee++)if(Fe=ut[Ee],E.format!==Di)if(Me!==null)if(q){if(Re)if(E.layerUpdates.size>0){const He=Z_(Fe.width,Fe.height,E.format,E.type);for(const it of E.layerUpdates){const Ft=Fe.data.subarray(it*He/Fe.data.BYTES_PER_ELEMENT,(it+1)*He/Fe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,it,Fe.width,Fe.height,1,Me,Ft)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Fe.width,Fe.height,be.depth,Me,Fe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,Oe,Fe.width,Fe.height,be.depth,0,Fe.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Re&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Fe.width,Fe.height,be.depth,Me,Pe,Fe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ee,Oe,Fe.width,Fe.height,be.depth,0,Me,Pe,Fe.data)}else{q&&we&&i.texStorage2D(s.TEXTURE_2D,Ie,Oe,ut[0].width,ut[0].height);for(let Ee=0,de=ut.length;Ee<de;Ee++)Fe=ut[Ee],E.format!==Di?Me!==null?q?Re&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,Me,Fe.data):i.compressedTexImage2D(s.TEXTURE_2D,Ee,Oe,Fe.width,Fe.height,0,Fe.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Re&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,Me,Pe,Fe.data):i.texImage2D(s.TEXTURE_2D,Ee,Oe,Fe.width,Fe.height,0,Me,Pe,Fe.data)}else if(E.isDataArrayTexture)if(q){if(we&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Oe,be.width,be.height,be.depth),Re)if(E.layerUpdates.size>0){const Ee=Z_(be.width,be.height,E.format,E.type);for(const de of E.layerUpdates){const He=be.data.subarray(de*Ee/be.data.BYTES_PER_ELEMENT,(de+1)*Ee/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,be.width,be.height,1,Me,Pe,He)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Me,Pe,be.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,be.width,be.height,be.depth,0,Me,Pe,be.data);else if(E.isData3DTexture)q?(we&&i.texStorage3D(s.TEXTURE_3D,Ie,Oe,be.width,be.height,be.depth),Re&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Me,Pe,be.data)):i.texImage3D(s.TEXTURE_3D,0,Oe,be.width,be.height,be.depth,0,Me,Pe,be.data);else if(E.isFramebufferTexture){if(we)if(q)i.texStorage2D(s.TEXTURE_2D,Ie,Oe,be.width,be.height);else{let Ee=be.width,de=be.height;for(let He=0;He<Ie;He++)i.texImage2D(s.TEXTURE_2D,He,Oe,Ee,de,0,Me,Pe,null),Ee>>=1,de>>=1}}else if(ut.length>0){if(q&&we){const Ee=je(ut[0]);i.texStorage2D(s.TEXTURE_2D,Ie,Oe,Ee.width,Ee.height)}for(let Ee=0,de=ut.length;Ee<de;Ee++)Fe=ut[Ee],q?Re&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Me,Pe,Fe):i.texImage2D(s.TEXTURE_2D,Ee,Oe,Me,Pe,Fe);E.generateMipmaps=!1}else if(q){if(we){const Ee=je(be);i.texStorage2D(s.TEXTURE_2D,Ie,Oe,Ee.width,Ee.height)}Re&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Pe,be)}else i.texImage2D(s.TEXTURE_2D,0,Oe,Me,Pe,be);y(E)&&S(ge),We.__version=he.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Se(L,E,j){if(E.image.length!==6)return;const ge=xe(L,E),ye=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+j);const he=r.get(ye);if(ye.version!==he.__version||ge===!0){i.activeTexture(s.TEXTURE0+j);const We=Tt.getPrimaries(Tt.workingColorSpace),De=E.colorSpace===lr?null:Tt.getPrimaries(E.colorSpace),Ke=E.colorSpace===lr||We===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const tt=E.isCompressedTexture||E.image[0].isCompressedTexture,be=E.image[0]&&E.image[0].isDataTexture,Me=[];for(let de=0;de<6;de++)!tt&&!be?Me[de]=w(E.image[de],!0,l.maxCubemapSize):Me[de]=be?E.image[de].image:E.image[de],Me[de]=Ut(E,Me[de]);const Pe=Me[0],Oe=c.convert(E.format,E.colorSpace),Fe=c.convert(E.type),ut=N(E.internalFormat,Oe,Fe,E.colorSpace),q=E.isVideoTexture!==!0,we=he.__version===void 0||ge===!0,Re=ye.dataReady;let Ie=H(E,Pe);Y(s.TEXTURE_CUBE_MAP,E);let Ee;if(tt){q&&we&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ut,Pe.width,Pe.height);for(let de=0;de<6;de++){Ee=Me[de].mipmaps;for(let He=0;He<Ee.length;He++){const it=Ee[He];E.format!==Di?Oe!==null?q?Re&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,He,0,0,it.width,it.height,Oe,it.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,He,ut,it.width,it.height,0,it.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,He,0,0,it.width,it.height,Oe,Fe,it.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,He,ut,it.width,it.height,0,Oe,Fe,it.data)}}}else{if(Ee=E.mipmaps,q&&we){Ee.length>0&&Ie++;const de=je(Me[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ut,de.width,de.height)}for(let de=0;de<6;de++)if(be){q?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Me[de].width,Me[de].height,Oe,Fe,Me[de].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Me[de].width,Me[de].height,0,Oe,Fe,Me[de].data);for(let He=0;He<Ee.length;He++){const Ft=Ee[He].image[de].image;q?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,He+1,0,0,Ft.width,Ft.height,Oe,Fe,Ft.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,He+1,ut,Ft.width,Ft.height,0,Oe,Fe,Ft.data)}}else{q?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Oe,Fe,Me[de]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Oe,Fe,Me[de]);for(let He=0;He<Ee.length;He++){const it=Ee[He];q?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,He+1,0,0,Oe,Fe,it.image[de]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,He+1,ut,Oe,Fe,it.image[de])}}}y(E)&&S(s.TEXTURE_CUBE_MAP),he.__version=ye.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ae(L,E,j,ge,ye,he){const We=c.convert(j.format,j.colorSpace),De=c.convert(j.type),Ke=N(j.internalFormat,We,De,j.colorSpace),tt=r.get(E),be=r.get(j);if(be.__renderTarget=E,!tt.__hasExternalTextures){const Me=Math.max(1,E.width>>he),Pe=Math.max(1,E.height>>he);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?i.texImage3D(ye,he,Ke,Me,Pe,E.depth,0,We,De,null):i.texImage2D(ye,he,Ke,Me,Pe,0,We,De,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),qt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,ye,be.__webglTexture,0,V(E)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,ye,be.__webglTexture,he),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(L,E,j){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const ge=E.depthTexture,ye=ge&&ge.isDepthTexture?ge.type:null,he=U(E.stencilBuffer,ye),We=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;qt(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(E),he,E.width,E.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(E),he,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,he,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,L)}else{const ge=E.textures;for(let ye=0;ye<ge.length;ye++){const he=ge[ye],We=c.convert(he.format,he.colorSpace),De=c.convert(he.type),Ke=N(he.internalFormat,We,De,he.colorSpace);qt(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(E),Ke,E.width,E.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(E),Ke,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ke,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qe(L,E,j){const ge=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(E.depthTexture);if(ye.__renderTarget=E,(!ye.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ge){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),ye.__webglTexture===void 0){ye.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E.depthTexture);const tt=c.convert(E.depthTexture.format),be=c.convert(E.depthTexture.type);let Me;E.depthTexture.format===Ra?Me=s.DEPTH_COMPONENT24:E.depthTexture.format===Br&&(Me=s.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Me,E.width,E.height,0,tt,be,null)}}else ae(E.depthTexture,0);const he=ye.__webglTexture,We=V(E),De=ge?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,Ke=E.depthTexture.format===Br?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ra)qt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ke,De,he,0,We):s.framebufferTexture2D(s.FRAMEBUFFER,Ke,De,he,0);else if(E.depthTexture.format===Br)qt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ke,De,he,0,We):s.framebufferTexture2D(s.FRAMEBUFFER,Ke,De,he,0);else throw new Error("Unknown depthTexture format")}function et(L){const E=r.get(L),j=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ge=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ge){const ye=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ge.removeEventListener("dispose",ye)};ge.addEventListener("dispose",ye),E.__depthDisposeCallback=ye}E.__boundDepthTexture=ge}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let ge=0;ge<6;ge++)Qe(E.__webglFramebuffer[ge],L,ge);else{const ge=L.texture.mipmaps;ge&&ge.length>0?Qe(E.__webglFramebuffer[0],L,0):Qe(E.__webglFramebuffer,L,0)}else if(j){E.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ge]),E.__webglDepthbuffer[ge]===void 0)E.__webglDepthbuffer[ge]=s.createRenderbuffer(),Xe(E.__webglDepthbuffer[ge],L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,he)}}else{const ge=L.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Xe(E.__webglDepthbuffer,L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,he)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(L,E,j){const ge=r.get(L);E!==void 0&&Ae(ge.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&et(L)}function vt(L){const E=L.texture,j=r.get(L),ge=r.get(E);L.addEventListener("dispose",I);const ye=L.textures,he=L.isWebGLCubeRenderTarget===!0,We=ye.length>1;if(We||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=E.version,f.memory.textures++),he){j.__webglFramebuffer=[];for(let De=0;De<6;De++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[De]=[];for(let Ke=0;Ke<E.mipmaps.length;Ke++)j.__webglFramebuffer[De][Ke]=s.createFramebuffer()}else j.__webglFramebuffer[De]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let De=0;De<E.mipmaps.length;De++)j.__webglFramebuffer[De]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(We)for(let De=0,Ke=ye.length;De<Ke;De++){const tt=r.get(ye[De]);tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&qt(L)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let De=0;De<ye.length;De++){const Ke=ye[De];j.__webglColorRenderbuffer[De]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[De]);const tt=c.convert(Ke.format,Ke.colorSpace),be=c.convert(Ke.type),Me=N(Ke.internalFormat,tt,be,Ke.colorSpace,L.isXRRenderTarget===!0),Pe=V(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Me,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,j.__webglColorRenderbuffer[De])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(j.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){i.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E);for(let De=0;De<6;De++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ke=0;Ke<E.mipmaps.length;Ke++)Ae(j.__webglFramebuffer[De][Ke],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ke);else Ae(j.__webglFramebuffer[De],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);y(E)&&S(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(We){for(let De=0,Ke=ye.length;De<Ke;De++){const tt=ye[De],be=r.get(tt);let Me=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Me=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Me,be.__webglTexture),Y(Me,tt),Ae(j.__webglFramebuffer,L,tt,s.COLOR_ATTACHMENT0+De,Me,0),y(tt)&&S(Me)}i.unbindTexture()}else{let De=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(De=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(De,ge.__webglTexture),Y(De,E),E.mipmaps&&E.mipmaps.length>0)for(let Ke=0;Ke<E.mipmaps.length;Ke++)Ae(j.__webglFramebuffer[Ke],L,E,s.COLOR_ATTACHMENT0,De,Ke);else Ae(j.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,De,0);y(E)&&S(De),i.unbindTexture()}L.depthBuffer&&et(L)}function mt(L){const E=L.textures;for(let j=0,ge=E.length;j<ge;j++){const ye=E[j];if(y(ye)){const he=C(L),We=r.get(ye).__webglTexture;i.bindTexture(he,We),S(he),i.unbindTexture()}}}const Dt=[],lt=[];function Qt(L){if(L.samples>0){if(qt(L)===!1){const E=L.textures,j=L.width,ge=L.height;let ye=s.COLOR_BUFFER_BIT;const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(L),De=E.length>1;if(De)for(let tt=0;tt<E.length;tt++)i.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const Ke=L.texture.mipmaps;Ke&&Ke.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let tt=0;tt<E.length;tt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),De){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[tt]);const be=r.get(E[tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,j,ge,0,0,j,ge,ye,s.NEAREST),m===!0&&(Dt.length=0,lt.length=0,Dt.push(s.COLOR_ATTACHMENT0+tt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Dt.push(he),lt.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Dt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),De)for(let tt=0;tt<E.length;tt++){i.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,We.__webglColorRenderbuffer[tt]);const be=r.get(E[tt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function V(L){return Math.min(l.maxSamples,L.samples)}function qt(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Et(L){const E=f.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function Ut(L,E){const j=L.colorSpace,ge=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==Xs&&j!==lr&&(Tt.getTransfer(j)===Bt?(ge!==Di||ye!==vi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",j)),E}function je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=se,this.resetTextureUnits=$,this.setTexture2D=ae,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=fe,this.rebindTextures=$t,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function g3(s,e){function i(r,l=lr){let c;const f=Tt.getTransfer(l);if(r===vi)return s.UNSIGNED_BYTE;if(r===_p)return s.UNSIGNED_SHORT_4_4_4_4;if(r===vp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===tx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===nx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===$v)return s.BYTE;if(r===ex)return s.SHORT;if(r===il)return s.UNSIGNED_SHORT;if(r===gp)return s.INT;if(r===qi)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Aa)return s.HALF_FLOAT;if(r===ix)return s.ALPHA;if(r===ax)return s.RGB;if(r===Di)return s.RGBA;if(r===Ra)return s.DEPTH_COMPONENT;if(r===Br)return s.DEPTH_STENCIL;if(r===rx)return s.RED;if(r===xp)return s.RED_INTEGER;if(r===ks)return s.RG;if(r===Sp)return s.RG_INTEGER;if(r===yp)return s.RGBA_INTEGER;if(r===Jc||r===$c||r===eu||r===tu)if(f===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bh||r===Th||r===Ah||r===Rh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===bh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Th)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ah)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ch||r===wh||r===Dh||r===Nh||r===Uh||r===Lh||r===Oh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ch||r===wh)return f===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Dh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Nh)return c.COMPRESSED_R11_EAC;if(r===Uh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Lh)return c.COMPRESSED_RG11_EAC;if(r===Oh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ph||r===Fh||r===Ih||r===zh||r===Bh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===jh||r===Yh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ph)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ih)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zh||r===Kh||r===Qh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Zh)return f===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jh||r===$h||r===ep||r===tp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Jh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===$h)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ep)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===al?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const _3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class x3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new mx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Yi({vertexShader:_3,fragmentShader:v3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Wn(new fu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S3 extends Zs{constructor(e,i){super();const r=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,_=null,v=null,g=null,M=null,b=null;const w=typeof XRWebGLBinding<"u",y=new x3,S={},C=i.getContextAttributes();let N=null,U=null;const H=[],F=[],I=new Pt;let T=null;const D=new _i;D.viewport=new rn;const ie=new _i;ie.viewport=new rn;const G=[D,ie],$=new N1;let se=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let Se=H[te];return Se===void 0&&(Se=new zd,H[te]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(te){let Se=H[te];return Se===void 0&&(Se=new zd,H[te]=Se),Se.getGripSpace()},this.getHand=function(te){let Se=H[te];return Se===void 0&&(Se=new zd,H[te]=Se),Se.getHandSpace()};function ae(te){const Se=F.indexOf(te.inputSource);if(Se===-1)return;const Ae=H[Se];Ae!==void 0&&(Ae.update(te.inputSource,te.frame,h||f),Ae.dispatchEvent({type:te.type,data:te.inputSource}))}function O(){l.removeEventListener("select",ae),l.removeEventListener("selectstart",ae),l.removeEventListener("selectend",ae),l.removeEventListener("squeeze",ae),l.removeEventListener("squeezestart",ae),l.removeEventListener("squeezeend",ae),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",B);for(let te=0;te<H.length;te++){const Se=F[te];Se!==null&&(F[te]=null,H[te].disconnect(Se))}se=null,ce=null,y.reset();for(const te in S)delete S[te];e.setRenderTarget(N),M=null,g=null,v=null,l=null,U=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){p=te,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",ae),l.addEventListener("selectstart",ae),l.addEventListener("selectend",ae),l.addEventListener("squeeze",ae),l.addEventListener("squeezestart",ae),l.addEventListener("squeezeend",ae),l.addEventListener("end",O),l.addEventListener("inputsourceschange",B),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Xe=null,Qe=null;C.depth&&(Qe=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=C.stencil?Br:Ra,Xe=C.stencil?al:qi);const et={colorFormat:i.RGBA8,depthFormat:Qe,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(et),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),U=new Xi(g.textureWidth,g.textureHeight,{format:Di,type:vi,depthTexture:new rl(g.textureWidth,g.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ae={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ae),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Xi(M.framebufferWidth,M.framebufferHeight,{format:Di,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),ze.setContext(l),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(te){for(let Se=0;Se<te.removed.length;Se++){const Ae=te.removed[Se],Xe=F.indexOf(Ae);Xe>=0&&(F[Xe]=null,H[Xe].disconnect(Ae))}for(let Se=0;Se<te.added.length;Se++){const Ae=te.added[Se];let Xe=F.indexOf(Ae);if(Xe===-1){for(let et=0;et<H.length;et++)if(et>=F.length){F.push(Ae),Xe=et;break}else if(F[et]===null){F[et]=Ae,Xe=et;break}if(Xe===-1)break}const Qe=H[Xe];Qe&&Qe.connect(Ae)}}const fe=new oe,me=new oe;function Te(te,Se,Ae){fe.setFromMatrixPosition(Se.matrixWorld),me.setFromMatrixPosition(Ae.matrixWorld);const Xe=fe.distanceTo(me),Qe=Se.projectionMatrix.elements,et=Ae.projectionMatrix.elements,$t=Qe[14]/(Qe[10]-1),vt=Qe[14]/(Qe[10]+1),mt=(Qe[9]+1)/Qe[5],Dt=(Qe[9]-1)/Qe[5],lt=(Qe[8]-1)/Qe[0],Qt=(et[8]+1)/et[0],V=$t*lt,qt=$t*Qt,Et=Xe/(-lt+Qt),Ut=Et*-lt;if(Se.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ut),te.translateZ(Et),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Qe[10]===-1)te.projectionMatrix.copy(Se.projectionMatrix),te.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const je=$t+Et,L=vt+Et,E=V-Ut,j=qt+(Xe-Ut),ge=mt*vt/L*je,ye=Dt*vt/L*je;te.projectionMatrix.makePerspective(E,j,ge,ye,je,L),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function P(te,Se){Se===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(Se.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let Se=te.near,Ae=te.far;y.texture!==null&&(y.depthNear>0&&(Se=y.depthNear),y.depthFar>0&&(Ae=y.depthFar)),$.near=ie.near=D.near=Se,$.far=ie.far=D.far=Ae,(se!==$.near||ce!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),se=$.near,ce=$.far),$.layers.mask=te.layers.mask|6,D.layers.mask=$.layers.mask&-5,ie.layers.mask=$.layers.mask&-3;const Xe=te.parent,Qe=$.cameras;P($,Xe);for(let et=0;et<Qe.length;et++)P(Qe[et],Xe);Qe.length===2?Te($,D,ie):$.projectionMatrix.copy(D.projectionMatrix),Y(te,$,Xe)};function Y(te,Se,Ae){Ae===null?te.matrix.copy(Se.matrixWorld):(te.matrix.copy(Ae.matrixWorld),te.matrix.invert(),te.matrix.multiply(Se.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(Se.projectionMatrix),te.projectionMatrixInverse.copy(Se.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=np*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(te){m=te,g!==null&&(g.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(te){return S[te]};let xe=null;function Ce(te,Se){if(_=Se.getViewerPose(h||f),b=Se,_!==null){const Ae=_.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let Xe=!1;Ae.length!==$.cameras.length&&($.cameras.length=0,Xe=!0);for(let vt=0;vt<Ae.length;vt++){const mt=Ae[vt];let Dt=null;if(M!==null)Dt=M.getViewport(mt);else{const Qt=v.getViewSubImage(g,mt);Dt=Qt.viewport,vt===0&&(e.setRenderTargetTextures(U,Qt.colorTexture,Qt.depthStencilTexture),e.setRenderTarget(U))}let lt=G[vt];lt===void 0&&(lt=new _i,lt.layers.enable(vt),lt.viewport=new rn,G[vt]=lt),lt.matrix.fromArray(mt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(mt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),vt===0&&($.matrix.copy(lt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Xe===!0&&$.cameras.push(lt)}const Qe=l.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=r.getBinding();const vt=v.getDepthInformation(Ae[0]);vt&&vt.isValid&&vt.texture&&y.init(vt,l.renderState)}if(Qe&&Qe.includes("camera-access")&&w){e.state.unbindTexture(),v=r.getBinding();for(let vt=0;vt<Ae.length;vt++){const mt=Ae[vt].camera;if(mt){let Dt=S[mt];Dt||(Dt=new mx,S[mt]=Dt);const lt=v.getCameraImage(mt);Dt.sourceTexture=lt}}}}for(let Ae=0;Ae<H.length;Ae++){const Xe=F[Ae],Qe=H[Ae];Xe!==null&&Qe!==void 0&&Qe.update(Xe,Se,h||f)}xe&&xe(te,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),b=null}const ze=new xx;ze.setAnimationLoop(Ce),this.setAnimationLoop=function(te){xe=te},this.dispose=function(){}}}const Or=new ji,y3=new pn;function M3(s,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,gx(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,C,N,U){S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),v(y,S)):S.isMeshPhongMaterial?(c(y,S),_(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&M(y,S,U)):S.isMeshMatcapMaterial?(c(y,S),b(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),w(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(f(y,S),S.isLineDashedMaterial&&p(y,S)):S.isPointsMaterial?m(y,S,C,N):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===qn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===qn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const C=e.get(S),N=C.envMap,U=C.envMapRotation;N&&(y.envMap.value=N,Or.copy(U),Or.x*=-1,Or.y*=-1,Or.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),y.envMapRotation.value.setFromMatrix4(y3.makeRotationFromEuler(Or)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function p(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,C,N){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*C,y.scale.value=N*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,C){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===qn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function w(y,S){const C=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function E3(s,e,i,r){let l={},c={},f=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,N){const U=N.program;r.uniformBlockBinding(C,U)}function h(C,N){let U=l[C.id];U===void 0&&(b(C),U=_(C),l[C.id]=U,C.addEventListener("dispose",y));const H=N.program;r.updateUBOMapping(C,H);const F=e.render.frame;c[C.id]!==F&&(g(C),c[C.id]=F)}function _(C){const N=v();C.__bindingPointIndex=N;const U=s.createBuffer(),H=C.__size,F=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,H,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,U),U}function v(){for(let C=0;C<p;C++)if(f.indexOf(C)===-1)return f.push(C),C;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const N=l[C.id],U=C.uniforms,H=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let F=0,I=U.length;F<I;F++){const T=Array.isArray(U[F])?U[F]:[U[F]];for(let D=0,ie=T.length;D<ie;D++){const G=T[D];if(M(G,F,D,H)===!0){const $=G.__offset,se=Array.isArray(G.value)?G.value:[G.value];let ce=0;for(let ae=0;ae<se.length;ae++){const O=se[ae],B=w(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,$+ce,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,ce),ce+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(C,N,U,H){const F=C.value,I=N+"_"+U;if(H[I]===void 0)return typeof F=="number"||typeof F=="boolean"?H[I]=F:H[I]=F.clone(),!0;{const T=H[I];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return H[I]=F,!0}else if(T.equals(F)===!1)return T.copy(F),!0}return!1}function b(C){const N=C.uniforms;let U=0;const H=16;for(let I=0,T=N.length;I<T;I++){const D=Array.isArray(N[I])?N[I]:[N[I]];for(let ie=0,G=D.length;ie<G;ie++){const $=D[ie],se=Array.isArray($.value)?$.value:[$.value];for(let ce=0,ae=se.length;ce<ae;ce++){const O=se[ce],B=w(O),fe=U%H,me=fe%B.boundary,Te=fe+me;U+=me,Te!==0&&H-Te<B.storage&&(U+=H-Te),$.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=U,U+=B.storage}}}const F=U%H;return F>0&&(U+=H-F),C.__size=U,C.__cache={},this}function w(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):rt("WebGLRenderer: Unsupported uniform value type.",C),N}function y(C){const N=C.target;N.removeEventListener("dispose",y);const U=f.indexOf(N.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function S(){for(const C in l)s.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:h,dispose:S}}const b3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function T3(){return Bi===null&&(Bi=new v1(b3,16,16,ks,Aa),Bi.name="DFG_LUT",Bi.minFilter=Dn,Bi.magFilter=Dn,Bi.wrapS=Sa,Bi.wrapT=Sa,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class A3{constructor(e={}){const{canvas:i=Yb(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:M=vi}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=f;const w=M,y=new Set([yp,Sp,xp]),S=new Set([vi,qi,il,al,_p,vp]),C=new Uint32Array(4),N=new Int32Array(4);let U=null,H=null;const F=[],I=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let ie=!1;this._outputColorSpace=mi;let G=0,$=0,se=null,ce=-1,ae=null;const O=new rn,B=new rn;let fe=null;const me=new Ot(0);let Te=0,P=i.width,Y=i.height,xe=1,Ce=null,ze=null;const te=new rn(0,0,P,Y),Se=new rn(0,0,P,Y);let Ae=!1;const Xe=new hx;let Qe=!1,et=!1;const $t=new pn,vt=new oe,mt=new rn,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Qt(){return se===null?xe:1}let V=r;function qt(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mp}`),i.addEventListener("webglcontextlost",He,!1),i.addEventListener("webglcontextrestored",it,!1),i.addEventListener("webglcontextcreationerror",Ft,!1),V===null){const W="webgl2";if(V=qt(W,R),V===null)throw qt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw wt("WebGLRenderer: "+R.message),R}let Et,Ut,je,L,E,j,ge,ye,he,We,De,Ke,tt,be,Me,Pe,Oe,Fe,ut,q,we,Re,Ie;function Ee(){Et=new AR(V),Et.init(),we=new g3(V,Et),Ut=new vR(V,Et,e,we),je=new p3(V,Et),Ut.reversedDepthBuffer&&g&&je.buffers.depth.setReversed(!0),L=new wR(V),E=new e3,j=new m3(V,Et,je,E,Ut,we,L),ge=new TR(D),ye=new O1(V),Re=new gR(V,ye),he=new RR(V,ye,L,Re),We=new NR(V,he,ye,Re,L),Fe=new DR(V,Ut,j),Me=new xR(E),De=new $2(D,ge,Et,Ut,Re,Me),Ke=new M3(D,E),tt=new n3,be=new l3(Et),Oe=new mR(D,ge,je,We,b,m),Pe=new h3(D,We,Ut),Ie=new E3(V,L,Ut,je),ut=new _R(V,Et,L),q=new CR(V,Et,L),L.programs=De.programs,D.capabilities=Ut,D.extensions=Et,D.properties=E,D.renderLists=tt,D.shadowMap=Pe,D.state=je,D.info=L}Ee(),w!==vi&&(T=new LR(w,i.width,i.height,l,c));const de=new S3(D,V);this.xr=de,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Et.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Et.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(R){R!==void 0&&(xe=R,this.setSize(P,Y,!1))},this.getSize=function(R){return R.set(P,Y)},this.setSize=function(R,W,le=!0){if(de.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,Y=W,i.width=Math.floor(R*xe),i.height=Math.floor(W*xe),le===!0&&(i.style.width=R+"px",i.style.height=W+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(P*xe,Y*xe).floor()},this.setDrawingBufferSize=function(R,W,le){P=R,Y=W,xe=le,i.width=Math.floor(R*le),i.height=Math.floor(W*le),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(w===vi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,W,le,ee){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,W,le,ee),je.viewport(O.copy(te).multiplyScalar(xe).round())},this.getScissor=function(R){return R.copy(Se)},this.setScissor=function(R,W,le,ee){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,W,le,ee),je.scissor(B.copy(Se).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(R){je.setScissorTest(Ae=R)},this.setOpaqueSort=function(R){Ce=R},this.setTransparentSort=function(R){ze=R},this.getClearColor=function(R){return R.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,le=!0){let ee=0;if(R){let K=!1;if(se!==null){const Ne=se.texture.format;K=y.has(Ne)}if(K){const Ne=se.texture.type,Be=S.has(Ne),Ue=Oe.getClearColor(),qe=Oe.getClearAlpha(),Ze=Ue.r,nt=Ue.g,st=Ue.b;Be?(C[0]=Ze,C[1]=nt,C[2]=st,C[3]=qe,V.clearBufferuiv(V.COLOR,0,C)):(N[0]=Ze,N[1]=nt,N[2]=st,N[3]=qe,V.clearBufferiv(V.COLOR,0,N))}else ee|=V.COLOR_BUFFER_BIT}W&&(ee|=V.DEPTH_BUFFER_BIT),le&&(ee|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&V.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",He,!1),i.removeEventListener("webglcontextrestored",it,!1),i.removeEventListener("webglcontextcreationerror",Ft,!1),Oe.dispose(),tt.dispose(),be.dispose(),E.dispose(),ge.dispose(),We.dispose(),Re.dispose(),Ie.dispose(),De.dispose(),de.dispose(),de.removeEventListener("sessionstart",kr),de.removeEventListener("sessionend",Xr),Li.stop()};function He(R){R.preventDefault(),U_("WebGLRenderer: Context Lost."),ie=!0}function it(){U_("WebGLRenderer: Context Restored."),ie=!1;const R=L.autoReset,W=Pe.enabled,le=Pe.autoUpdate,ee=Pe.needsUpdate,K=Pe.type;Ee(),L.autoReset=R,Pe.enabled=W,Pe.autoUpdate=le,Pe.needsUpdate=ee,Pe.type=K}function Ft(R){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function bt(R){const W=R.target;W.removeEventListener("dispose",bt),Nn(W)}function Nn(R){xi(R),E.remove(R)}function xi(R){const W=E.get(R).programs;W!==void 0&&(W.forEach(function(le){De.releaseProgram(le)}),R.isShaderMaterial&&De.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,le,ee,K,Ne){W===null&&(W=Dt);const Be=K.isMesh&&K.matrixWorld.determinant()<0,Ue=pl(R,W,le,ee,K);je.setMaterial(ee,Be);let qe=le.index,Ze=1;if(ee.wireframe===!0){if(qe=he.getWireframeAttribute(le),qe===void 0)return;Ze=2}const nt=le.drawRange,st=le.attributes.position;let Ge=nt.start*Ze,ft=(nt.start+nt.count)*Ze;Ne!==null&&(Ge=Math.max(Ge,Ne.start*Ze),ft=Math.min(ft,(Ne.start+Ne.count)*Ze)),qe!==null?(Ge=Math.max(Ge,0),ft=Math.min(ft,qe.count)):st!=null&&(Ge=Math.max(Ge,0),ft=Math.min(ft,st.count));const jt=ft-Ge;if(jt<0||jt===1/0)return;Re.setup(K,ee,Ue,le,qe);let Yt,At=ut;if(qe!==null&&(Yt=ye.get(qe),At=q,At.setIndex(Yt)),K.isMesh)ee.wireframe===!0?(je.setLineWidth(ee.wireframeLinewidth*Qt()),At.setMode(V.LINES)):At.setMode(V.TRIANGLES);else if(K.isLine){let gn=ee.linewidth;gn===void 0&&(gn=1),je.setLineWidth(gn*Qt()),K.isLineSegments?At.setMode(V.LINES):K.isLineLoop?At.setMode(V.LINE_LOOP):At.setMode(V.LINE_STRIP)}else K.isPoints?At.setMode(V.POINTS):K.isSprite&&At.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ou("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))At.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const gn=K._multiDrawStarts,ke=K._multiDrawCounts,Un=K._multiDrawCount,at=qe?ye.get(qe).bytesPerElement:1,Ln=E.get(ee).currentProgram.getUniforms();for(let jn=0;jn<Un;jn++)Ln.setValue(V,"_gl_DrawID",jn),At.render(gn[jn]/at,ke[jn])}else if(K.isInstancedMesh)At.renderInstances(Ge,jt,K.count);else if(le.isInstancedBufferGeometry){const gn=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,ke=Math.min(le.instanceCount,gn);At.renderInstances(Ge,jt,ke)}else At.render(Ge,jt)};function Js(R,W,le){R.transparent===!0&&R.side===xa&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,Da(R,W,le),R.side=ur,R.needsUpdate=!0,Da(R,W,le),R.side=xa):Da(R,W,le)}this.compile=function(R,W,le=null){le===null&&(le=R),H=be.get(le),H.init(W),I.push(H),le.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(H.pushLight(K),K.castShadow&&H.pushShadow(K))}),R!==le&&R.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(H.pushLight(K),K.castShadow&&H.pushShadow(K))}),H.setupLights();const ee=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ne=K.material;if(Ne)if(Array.isArray(Ne))for(let Be=0;Be<Ne.length;Be++){const Ue=Ne[Be];Js(Ue,le,K),ee.add(Ue)}else Js(Ne,le,K),ee.add(Ne)}),H=I.pop(),ee},this.compileAsync=function(R,W,le=null){const ee=this.compile(R,W,le);return new Promise(K=>{function Ne(){if(ee.forEach(function(Be){E.get(Be).currentProgram.isReady()&&ee.delete(Be)}),ee.size===0){K(R);return}setTimeout(Ne,10)}Et.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Vr=null;function fl(R){Vr&&Vr(R)}function kr(){Li.stop()}function Xr(){Li.start()}const Li=new xx;Li.setAnimationLoop(fl),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(R){Vr=R,de.setAnimationLoop(R),R===null?Li.stop():Li.start()},de.addEventListener("sessionstart",kr),de.addEventListener("sessionend",Xr),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ie===!0)return;const le=de.enabled===!0&&de.isPresenting===!0,ee=T!==null&&(se===null||le)&&T.begin(D,se);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(W),W=de.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,W,se),H=be.get(R,I.length),H.init(W),I.push(H),$t.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Xe.setFromProjectionMatrix($t,Vi,W.reversedDepth),et=this.localClippingEnabled,Qe=Me.init(this.clippingPlanes,et),U=tt.get(R,F.length),U.init(),F.push(U),de.enabled===!0&&de.isPresenting===!0){const Be=D.xr.getDepthSensingMesh();Be!==null&&Wr(Be,W,-1/0,D.sortObjects)}Wr(R,W,0,D.sortObjects),U.finish(),D.sortObjects===!0&&U.sort(Ce,ze),lt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,lt&&Oe.addToRenderList(U,R),this.info.render.frame++,Qe===!0&&Me.beginShadows();const K=H.state.shadowsArray;if(Pe.render(K,R,W),Qe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&T.hasRenderPass())===!1){const Be=U.opaque,Ue=U.transmissive;if(H.setupLights(),W.isArrayCamera){const qe=W.cameras;if(Ue.length>0)for(let Ze=0,nt=qe.length;Ze<nt;Ze++){const st=qe[Ze];sn(Be,Ue,R,st)}lt&&Oe.render(R);for(let Ze=0,nt=qe.length;Ze<nt;Ze++){const st=qe[Ze];Si(U,R,st,st.viewport)}}else Ue.length>0&&sn(Be,Ue,R,W),lt&&Oe.render(R),Si(U,R,W)}se!==null&&$===0&&(j.updateMultisampleRenderTarget(se),j.updateRenderTargetMipmap(se)),ee&&T.end(D),R.isScene===!0&&R.onAfterRender(D,R,W),Re.resetDefaultState(),ce=-1,ae=null,I.pop(),I.length>0?(H=I[I.length-1],Qe===!0&&Me.setGlobalState(D.clippingPlanes,H.state.camera)):H=null,F.pop(),F.length>0?U=F[F.length-1]:U=null};function Wr(R,W,le,ee){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)H.pushLight(R),R.castShadow&&H.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xe.intersectsSprite(R)){ee&&mt.setFromMatrixPosition(R.matrixWorld).applyMatrix4($t);const Be=We.update(R),Ue=R.material;Ue.visible&&U.push(R,Be,Ue,le,mt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xe.intersectsObject(R))){const Be=We.update(R),Ue=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),mt.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),mt.copy(Be.boundingSphere.center)),mt.applyMatrix4(R.matrixWorld).applyMatrix4($t)),Array.isArray(Ue)){const qe=Be.groups;for(let Ze=0,nt=qe.length;Ze<nt;Ze++){const st=qe[Ze],Ge=Ue[st.materialIndex];Ge&&Ge.visible&&U.push(R,Be,Ge,le,mt.z,st)}}else Ue.visible&&U.push(R,Be,Ue,le,mt.z,null)}}const Ne=R.children;for(let Be=0,Ue=Ne.length;Be<Ue;Be++)Wr(Ne[Be],W,le,ee)}function Si(R,W,le,ee){const{opaque:K,transmissive:Ne,transparent:Be}=R;H.setupLightsView(le),Qe===!0&&Me.setGlobalState(D.clippingPlanes,le),ee&&je.viewport(O.copy(ee)),K.length>0&&mn(K,W,le),Ne.length>0&&mn(Ne,W,le),Be.length>0&&mn(Be,W,le),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function sn(R,W,le,ee){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[ee.id]===void 0){const Ge=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[ee.id]=new Xi(1,1,{generateMipmaps:!0,type:Ge?Aa:vi,minFilter:zr,samples:Ut.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ne=H.state.transmissionRenderTarget[ee.id],Be=ee.viewport||O;Ne.setSize(Be.z*D.transmissionResolutionScale,Be.w*D.transmissionResolutionScale);const Ue=D.getRenderTarget(),qe=D.getActiveCubeFace(),Ze=D.getActiveMipmapLevel();D.setRenderTarget(Ne),D.getClearColor(me),Te=D.getClearAlpha(),Te<1&&D.setClearColor(16777215,.5),D.clear(),lt&&Oe.render(le);const nt=D.toneMapping;D.toneMapping=ki;const st=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),H.setupLightsView(ee),Qe===!0&&Me.setGlobalState(D.clippingPlanes,ee),mn(R,le,ee),j.updateMultisampleRenderTarget(Ne),j.updateRenderTargetMipmap(Ne),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let ft=0,jt=W.length;ft<jt;ft++){const Yt=W[ft],{object:At,geometry:gn,material:ke,group:Un}=Yt;if(ke.side===xa&&At.layers.test(ee.layers)){const at=ke.side;ke.side=qn,ke.needsUpdate=!0,Zi(At,le,ee,gn,ke,Un),ke.side=at,ke.needsUpdate=!0,Ge=!0}}Ge===!0&&(j.updateMultisampleRenderTarget(Ne),j.updateRenderTargetMipmap(Ne))}D.setRenderTarget(Ue,qe,Ze),D.setClearColor(me,Te),st!==void 0&&(ee.viewport=st),D.toneMapping=nt}function mn(R,W,le){const ee=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Ne=R.length;K<Ne;K++){const Be=R[K],{object:Ue,geometry:qe,group:Ze}=Be;let nt=Be.material;nt.allowOverride===!0&&ee!==null&&(nt=ee),Ue.layers.test(le.layers)&&Zi(Ue,W,le,qe,nt,Ze)}}function Zi(R,W,le,ee,K,Ne){R.onBeforeRender(D,W,le,ee,K,Ne),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(D,W,le,ee,R,Ne),K.transparent===!0&&K.side===xa&&K.forceSinglePass===!1?(K.side=qn,K.needsUpdate=!0,D.renderBufferDirect(le,W,ee,K,R,Ne),K.side=ur,K.needsUpdate=!0,D.renderBufferDirect(le,W,ee,K,R,Ne),K.side=xa):D.renderBufferDirect(le,W,ee,K,R,Ne),R.onAfterRender(D,W,le,ee,K,Ne)}function Da(R,W,le){W.isScene!==!0&&(W=Dt);const ee=E.get(R),K=H.state.lights,Ne=H.state.shadowsArray,Be=K.state.version,Ue=De.getParameters(R,K.state,Ne,W,le),qe=De.getProgramCacheKey(Ue);let Ze=ee.programs;ee.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,ee.fog=W.fog;const nt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ee.envMap=ge.get(R.envMap||ee.environment,nt),ee.envMapRotation=ee.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",bt),Ze=new Map,ee.programs=Ze);let st=Ze.get(qe);if(st!==void 0){if(ee.currentProgram===st&&ee.lightsStateVersion===Be)return hl(R,Ue),st}else Ue.uniforms=De.getUniforms(R),R.onBeforeCompile(Ue,D),st=De.acquireProgram(Ue,qe),Ze.set(qe,st),ee.uniforms=Ue.uniforms;const Ge=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=Me.uniform),hl(R,Ue),ee.needsLights=$s(R),ee.lightsStateVersion=Be,ee.needsLights&&(Ge.ambientLightColor.value=K.state.ambient,Ge.lightProbe.value=K.state.probe,Ge.directionalLights.value=K.state.directional,Ge.directionalLightShadows.value=K.state.directionalShadow,Ge.spotLights.value=K.state.spot,Ge.spotLightShadows.value=K.state.spotShadow,Ge.rectAreaLights.value=K.state.rectArea,Ge.ltc_1.value=K.state.rectAreaLTC1,Ge.ltc_2.value=K.state.rectAreaLTC2,Ge.pointLights.value=K.state.point,Ge.pointLightShadows.value=K.state.pointShadow,Ge.hemisphereLights.value=K.state.hemi,Ge.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ge.spotLightMatrix.value=K.state.spotLightMatrix,Ge.spotLightMap.value=K.state.spotLightMap,Ge.pointShadowMatrix.value=K.state.pointShadowMatrix),ee.currentProgram=st,ee.uniformsList=null,st}function dl(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=nu.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function hl(R,W){const le=E.get(R);le.outputColorSpace=W.outputColorSpace,le.batching=W.batching,le.batchingColor=W.batchingColor,le.instancing=W.instancing,le.instancingColor=W.instancingColor,le.instancingMorph=W.instancingMorph,le.skinning=W.skinning,le.morphTargets=W.morphTargets,le.morphNormals=W.morphNormals,le.morphColors=W.morphColors,le.morphTargetsCount=W.morphTargetsCount,le.numClippingPlanes=W.numClippingPlanes,le.numIntersection=W.numClipIntersection,le.vertexAlphas=W.vertexAlphas,le.vertexTangents=W.vertexTangents,le.toneMapping=W.toneMapping}function pl(R,W,le,ee,K){W.isScene!==!0&&(W=Dt),j.resetTextureUnits();const Ne=W.fog,Be=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?W.environment:null,Ue=se===null?D.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Xs,qe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ze=ge.get(ee.envMap||Be,qe),nt=ee.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,st=!!le.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ge=!!le.morphAttributes.position,ft=!!le.morphAttributes.normal,jt=!!le.morphAttributes.color;let Yt=ki;ee.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Yt=D.toneMapping);const At=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,gn=At!==void 0?At.length:0,ke=E.get(ee),Un=H.state.lights;if(Qe===!0&&(et===!0||R!==ae)){const ln=R===ae&&ee.id===ce;Me.setState(ee,R,ln)}let at=!1;ee.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Un.state.version||ke.outputColorSpace!==Ue||K.isBatchedMesh&&ke.batching===!1||!K.isBatchedMesh&&ke.batching===!0||K.isBatchedMesh&&ke.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ke.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ke.instancing===!1||!K.isInstancedMesh&&ke.instancing===!0||K.isSkinnedMesh&&ke.skinning===!1||!K.isSkinnedMesh&&ke.skinning===!0||K.isInstancedMesh&&ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ke.instancingMorph===!1&&K.morphTexture!==null||ke.envMap!==Ze||ee.fog===!0&&ke.fog!==Ne||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Me.numPlanes||ke.numIntersection!==Me.numIntersection)||ke.vertexAlphas!==nt||ke.vertexTangents!==st||ke.morphTargets!==Ge||ke.morphNormals!==ft||ke.morphColors!==jt||ke.toneMapping!==Yt||ke.morphTargetsCount!==gn)&&(at=!0):(at=!0,ke.__version=ee.version);let Ln=ke.currentProgram;at===!0&&(Ln=Da(ee,W,K));let jn=!1,yi=!1,Yn=!1;const Lt=Ln.getUniforms(),on=ke.uniforms;if(je.useProgram(Ln.program)&&(jn=!0,yi=!0,Yn=!0),ee.id!==ce&&(ce=ee.id,yi=!0),jn||ae!==R){je.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Lt.setValue(V,"projectionMatrix",R.projectionMatrix),Lt.setValue(V,"viewMatrix",R.matrixWorldInverse);const Mi=Lt.map.cameraPosition;Mi!==void 0&&Mi.setValue(V,vt.setFromMatrixPosition(R.matrixWorld)),Ut.logarithmicDepthBuffer&&Lt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Lt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),ae!==R&&(ae=R,yi=!0,Yn=!0)}if(ke.needsLights&&(Un.state.directionalShadowMap.length>0&&Lt.setValue(V,"directionalShadowMap",Un.state.directionalShadowMap,j),Un.state.spotShadowMap.length>0&&Lt.setValue(V,"spotShadowMap",Un.state.spotShadowMap,j),Un.state.pointShadowMap.length>0&&Lt.setValue(V,"pointShadowMap",Un.state.pointShadowMap,j)),K.isSkinnedMesh){Lt.setOptional(V,K,"bindMatrix"),Lt.setOptional(V,K,"bindMatrixInverse");const ln=K.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Lt.setValue(V,"boneTexture",ln.boneTexture,j))}K.isBatchedMesh&&(Lt.setOptional(V,K,"batchingTexture"),Lt.setValue(V,"batchingTexture",K._matricesTexture,j),Lt.setOptional(V,K,"batchingIdTexture"),Lt.setValue(V,"batchingIdTexture",K._indirectTexture,j),Lt.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Lt.setValue(V,"batchingColorTexture",K._colorsTexture,j));const On=le.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Fe.update(K,le,Ln),(yi||ke.receiveShadow!==K.receiveShadow)&&(ke.receiveShadow=K.receiveShadow,Lt.setValue(V,"receiveShadow",K.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&W.environment!==null&&(on.envMapIntensity.value=W.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=T3()),yi&&(Lt.setValue(V,"toneMappingExposure",D.toneMappingExposure),ke.needsLights&&fr(on,Yn),Ne&&ee.fog===!0&&Ke.refreshFogUniforms(on,Ne),Ke.refreshMaterialUniforms(on,ee,xe,Y,H.state.transmissionRenderTarget[R.id]),nu.upload(V,dl(ke),on,j)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(nu.upload(V,dl(ke),on,j),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Lt.setValue(V,"center",K.center),Lt.setValue(V,"modelViewMatrix",K.modelViewMatrix),Lt.setValue(V,"normalMatrix",K.normalMatrix),Lt.setValue(V,"modelMatrix",K.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const ln=ee.uniformsGroups;for(let Mi=0,Ki=ln.length;Mi<Ki;Mi++){const qr=ln[Mi];Ie.update(qr,Ln),Ie.bind(qr,Ln)}}return Ln}function fr(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function $s(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(R,W,le){const ee=E.get(R);ee.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=W,E.get(R.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:le,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const le=E.get(R);le.__webglFramebuffer=W,le.__useDefaultFramebuffer=W===void 0};const Na=V.createFramebuffer();this.setRenderTarget=function(R,W=0,le=0){se=R,G=W,$=le;let ee=null,K=!1,Ne=!1;if(R){const Ue=E.get(R);if(Ue.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(V.FRAMEBUFFER,Ue.__webglFramebuffer),O.copy(R.viewport),B.copy(R.scissor),fe=R.scissorTest,je.viewport(O),je.scissor(B),je.setScissorTest(fe),ce=-1;return}else if(Ue.__webglFramebuffer===void 0)j.setupRenderTarget(R);else if(Ue.__hasExternalTextures)j.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const nt=R.depthTexture;if(Ue.__boundDepthTexture!==nt){if(nt!==null&&E.has(nt)&&(R.width!==nt.image.width||R.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(R)}}const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ne=!0);const Ze=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?ee=Ze[W][le]:ee=Ze[W],K=!0):R.samples>0&&j.useMultisampledRTT(R)===!1?ee=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?ee=Ze[le]:ee=Ze,O.copy(R.viewport),B.copy(R.scissor),fe=R.scissorTest}else O.copy(te).multiplyScalar(xe).floor(),B.copy(Se).multiplyScalar(xe).floor(),fe=Ae;if(le!==0&&(ee=Na),je.bindFramebuffer(V.FRAMEBUFFER,ee)&&je.drawBuffers(R,ee),je.viewport(O),je.scissor(B),je.setScissorTest(fe),K){const Ue=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ue.__webglTexture,le)}else if(Ne){const Ue=W;for(let qe=0;qe<R.textures.length;qe++){const Ze=E.get(R.textures[qe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+qe,Ze.__webglTexture,le,Ue)}}else if(R!==null&&le!==0){const Ue=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ue.__webglTexture,le)}ce=-1},this.readRenderTargetPixels=function(R,W,le,ee,K,Ne,Be,Ue=0){if(!(R&&R.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(qe=qe[Be]),qe){je.bindFramebuffer(V.FRAMEBUFFER,qe);try{const Ze=R.textures[Ue],nt=Ze.format,st=Ze.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ue),!Ut.textureFormatReadable(nt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(st)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-ee&&le>=0&&le<=R.height-K&&V.readPixels(W,le,ee,K,we.convert(nt),we.convert(st),Ne)}finally{const Ze=se!==null?E.get(se).__webglFramebuffer:null;je.bindFramebuffer(V.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(R,W,le,ee,K,Ne,Be,Ue=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(qe=qe[Be]),qe)if(W>=0&&W<=R.width-ee&&le>=0&&le<=R.height-K){je.bindFramebuffer(V.FRAMEBUFFER,qe);const Ze=R.textures[Ue],nt=Ze.format,st=Ze.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ue),!Ut.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ge),V.bufferData(V.PIXEL_PACK_BUFFER,Ne.byteLength,V.STREAM_READ),V.readPixels(W,le,ee,K,we.convert(nt),we.convert(st),0);const ft=se!==null?E.get(se).__webglFramebuffer:null;je.bindFramebuffer(V.FRAMEBUFFER,ft);const jt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Zb(V,jt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ge),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ne),V.deleteBuffer(Ge),V.deleteSync(jt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,le=0){const ee=Math.pow(2,-le),K=Math.floor(R.image.width*ee),Ne=Math.floor(R.image.height*ee),Be=W!==null?W.x:0,Ue=W!==null?W.y:0;j.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,Be,Ue,K,Ne),je.unbindTexture()};const Ua=V.createFramebuffer(),dr=V.createFramebuffer();this.copyTextureToTexture=function(R,W,le=null,ee=null,K=0,Ne=0){let Be,Ue,qe,Ze,nt,st,Ge,ft,jt;const Yt=R.isCompressedTexture?R.mipmaps[Ne]:R.image;if(le!==null)Be=le.max.x-le.min.x,Ue=le.max.y-le.min.y,qe=le.isBox3?le.max.z-le.min.z:1,Ze=le.min.x,nt=le.min.y,st=le.isBox3?le.min.z:0;else{const on=Math.pow(2,-K);Be=Math.floor(Yt.width*on),Ue=Math.floor(Yt.height*on),R.isDataArrayTexture?qe=Yt.depth:R.isData3DTexture?qe=Math.floor(Yt.depth*on):qe=1,Ze=0,nt=0,st=0}ee!==null?(Ge=ee.x,ft=ee.y,jt=ee.z):(Ge=0,ft=0,jt=0);const At=we.convert(W.format),gn=we.convert(W.type);let ke;W.isData3DTexture?(j.setTexture3D(W,0),ke=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(j.setTexture2DArray(W,0),ke=V.TEXTURE_2D_ARRAY):(j.setTexture2D(W,0),ke=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const Un=V.getParameter(V.UNPACK_ROW_LENGTH),at=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ln=V.getParameter(V.UNPACK_SKIP_PIXELS),jn=V.getParameter(V.UNPACK_SKIP_ROWS),yi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Yt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Yt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ze),V.pixelStorei(V.UNPACK_SKIP_ROWS,nt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,st);const Yn=R.isDataArrayTexture||R.isData3DTexture,Lt=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const on=E.get(R),On=E.get(W),ln=E.get(on.__renderTarget),Mi=E.get(On.__renderTarget);je.bindFramebuffer(V.READ_FRAMEBUFFER,ln.__webglFramebuffer),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Ki=0;Ki<qe;Ki++)Yn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,K,st+Ki),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(W).__webglTexture,Ne,jt+Ki)),V.blitFramebuffer(Ze,nt,Be,Ue,Ge,ft,Be,Ue,V.DEPTH_BUFFER_BIT,V.NEAREST);je.bindFramebuffer(V.READ_FRAMEBUFFER,null),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||E.has(R)){const on=E.get(R),On=E.get(W);je.bindFramebuffer(V.READ_FRAMEBUFFER,Ua),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,dr);for(let ln=0;ln<qe;ln++)Yn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,on.__webglTexture,K,st+ln):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,on.__webglTexture,K),Lt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,On.__webglTexture,Ne,jt+ln):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,On.__webglTexture,Ne),K!==0?V.blitFramebuffer(Ze,nt,Be,Ue,Ge,ft,Be,Ue,V.COLOR_BUFFER_BIT,V.NEAREST):Lt?V.copyTexSubImage3D(ke,Ne,Ge,ft,jt+ln,Ze,nt,Be,Ue):V.copyTexSubImage2D(ke,Ne,Ge,ft,Ze,nt,Be,Ue);je.bindFramebuffer(V.READ_FRAMEBUFFER,null),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Lt?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(ke,Ne,Ge,ft,jt,Be,Ue,qe,At,gn,Yt.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(ke,Ne,Ge,ft,jt,Be,Ue,qe,At,Yt.data):V.texSubImage3D(ke,Ne,Ge,ft,jt,Be,Ue,qe,At,gn,Yt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ne,Ge,ft,Be,Ue,At,gn,Yt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ne,Ge,ft,Yt.width,Yt.height,At,Yt.data):V.texSubImage2D(V.TEXTURE_2D,Ne,Ge,ft,Be,Ue,At,gn,Yt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Un),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,at),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ln),V.pixelStorei(V.UNPACK_SKIP_ROWS,jn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,yi),Ne===0&&W.generateMipmaps&&V.generateMipmap(ke),je.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&j.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?j.setTextureCube(R,0):R.isData3DTexture?j.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?j.setTexture2DArray(R,0):j.setTexture2D(R,0),je.unbindTexture()},this.resetState=function(){G=0,$=0,se=null,je.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const R3=()=>{const s=re.useRef(null);return re.useEffect(()=>{if(!s.current)return;const e=s.current,i=new f1,r=new _i(75,e.clientWidth/e.clientHeight,.1,1e3);r.position.z=25;const l=new A3({antialias:!1,alpha:!0});l.setSize(e.clientWidth,e.clientHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.appendChild(l.domElement);const c=new Pt(0,0),f=new U1,p=new $o,m=.2,h=new Gr(m,m,m),_=new th({color:43775,flatShading:!0}),v=new th({color:22015,flatShading:!0}),g=new th({color:8900331,emissive:8900331,emissiveIntensity:.5});for(let T=-4;T<5;T++)for(let D=-2;D<3;D++){if(Math.abs(D)===2&&T>1)continue;const ie=new Wn(h,_);ie.position.set(D*m,T*m,0),p.add(ie)}for(let T=-3;T<-1;T++)for(let D=-4;D<-2;D++){const ie=new Wn(h,v);ie.position.set(D*m,T*m,0),p.add(ie);const G=new Wn(h,v);G.position.set(-D*m,T*m,0),p.add(G)}const M=new Wn(h,g);M.position.set(0,3*m,m),p.add(M),i.add(p);const b=[];let w=0;const y=200,S=new Gr(m*1.5,m*1.5,m*1.5);for(let T=0;T<y;T++){const D=new Ap({color:Math.random()>.5?16711935:15631086}),ie=new Wn(S,D);ie.visible=!1,i.add(ie),b.push(ie)}const C=new oe(0,0,0),N=4*m,U=T=>{c.x=T.clientX/e.clientWidth*2-1,c.y=-(T.clientY/e.clientHeight)*2+1};window.addEventListener("mousemove",U);let H;const F=()=>{H=requestAnimationFrame(F);const T=f.getDelta();C.set(c.x*15,c.y*10,0),p.position.lerp(C,.14),p.rotation.y+=(c.x*.3-p.rotation.y)*.1,p.rotation.x+=(-c.y*.2-p.rotation.x)*.1;for(let D=0;D<2;D++){const ie=b[w];ie.position.set(p.position.x+(Math.random()-.5)*.2,p.position.y-N,p.position.z),ie.scale.setScalar(1),ie.visible=!0,ie.life=1,w=(w+1)%y}b.forEach(D=>{const ie=D;ie.visible&&(ie.life-=T*2,ie.scale.setScalar(Math.max(0,ie.life)),ie.life<=0&&(ie.visible=!1))}),l.render(i,r)};F();const I=()=>{r.aspect=e.clientWidth/e.clientHeight,r.updateProjectionMatrix(),l.setSize(e.clientWidth,e.clientHeight)};return window.addEventListener("resize",I),()=>{cancelAnimationFrame(H),window.removeEventListener("resize",I),window.removeEventListener("mousemove",U),e.contains(l.domElement)&&e.removeChild(l.domElement),l.dispose()}},[]),k.jsx("div",{ref:s,className:"fixed inset-0 z-0 pointer-events-none"})},tl=[{id:"P1",title:"GEETA_AI",type:"CONTENT_OPS",icon:M_,desc:"Autonomous content factory scaling worksheet production 15x via Regex middleware & WYSIWYG review tools.",color:"text-[#39FF14]",border:"border-[#39FF14]",stack:"Python, Regex, GAS",metrics:["10->150/wk Scale","90% Cost Redux"]},{id:"P14",title:"UNIFIED_CORE",type:"INFRA",icon:kv,desc:"Merged 3 companies (BrightChamps, FinLit, Schola) into one MySQL/Redis architecture.",color:"text-blue-400",border:"border-blue-500",stack:"MySQL, Redis, React",metrics:["100% Migration","Single SSO"]},{id:"P2",title:"ADHYAYAN_OS",type:"GAMIFICATION",icon:pp,desc:"JSON-driven 'Player' engine transforming static slides into 40+ game types.",color:"text-[#A855F7]",border:"border-[#A855F7]",stack:"JSON Engine, React",metrics:["90% Quiz Compl.","Zero Idle Time"]},{id:"P4",title:"NANO_SKILLS",type:"D2C_GROWTH",icon:eb,desc:"Marketplace for micro-courses driving upsell via virtual currency ('Diamonds').",color:"text-pink-400",border:"border-pink-500",stack:"React, Payment Gtwy",metrics:["3k+ Enrollments","5% Margin Up"]},{id:"P8",title:"MATH_0_TO_1",type:"EDTECH",icon:NE,desc:"Proprietary Math vertical aligned with US Common Core standards.",color:"text-purple-400",border:"border-purple-500",stack:"Curriculum Arch",metrics:["60 Lessons/Wk","Global Rollout"]},{id:"P6",title:"SUMMER_CAMP",type:"GROWTH_OPS",icon:JE,desc:"Full-funnel seasonal product: GeoIP checkout, self-serve scheduling, 5+ live camps, 15+ DIY courses across 30+ countries.",color:"text-yellow-400",border:"border-yellow-500",stack:"GeoIP, React, Stripe/Razorpay",metrics:["30+ Countries","Self-Serve Enroll"]},{id:"P10",title:"PQS_REVAMP",type:"AI_EVAL",icon:M_,desc:"Redesigning BrightChamps' AI teacher scoring system — from binary logic to explainable, multi-modal evaluation with GPT-4o fallback.",color:"text-rose-400",border:"border-rose-500",stack:"GPT-4o, Deepgram, Whisper",metrics:["32 Failure Modes Fixed","Explainable AI"]},{id:"P3",title:"FLEET_MKT",type:"MARKETPLACE",icon:Hv,desc:"Algorithmic truck allocation reducing booking time from 8hrs to 5mins.",color:"text-amber-400",border:"border-amber-500",stack:"Kafka, Go, Postgres",metrics:["8hr -> 5min","Real-Time Alloc"]},{id:"P13",title:"DIGITAL_KYC",type:"ONBOARDING",icon:nb,desc:"Mobile-first driver verification reducing onboarding to 10m.",color:"text-indigo-400",border:"border-indigo-500",stack:"React Native, OpenCV",metrics:["1 Week -> 10m","100% Digital"]},{id:"P7",title:"BUILDWIT",type:"B2B_SAAS",icon:wE,desc:"Web-based feasibility solver for architectural proposals.",color:"text-cyan-400",border:"border-cyan-500",stack:"WebGL, JS",metrics:["10 Paying Clients","MVP Launch"]},{id:"P9",title:"DESIGN_AUTO",type:"WORKFLOW",icon:IE,desc:"Parametric scripts automating 95% of manual design iterations.",color:"text-purple-400",border:"border-purple-500",stack:"Grasshopper, C#",metrics:["95% Time Saved","73L Saved/Mo"]},{id:"P11",title:"GMR_SIM",type:"DIGITAL_TWIN",icon:WE,desc:"4D construction simulations for Airport terminals.",color:"text-teal-400",border:"border-teal-500",stack:"VR, 4D Sim",metrics:["Sequencing","Stakeholder Viz"]}],C3=[{id:"M03",company:"BRIGHTCHAMPS",role:"SR. PRODUCT MANAGER",period:"02/2023 — PRESENT",status:"ACTIVE_OPERATION",color:"text-[#39FF14]",accent:"bg-[#39FF14]",border:"border-[#39FF14]",bg:"bg-[#39FF14]/5",brief:"Leading platform unification and AI automation for a global EdTech serving 30+ countries. Scaling content production 15x and driving monetization via new D2C verticals.",metrics:["30+ Countries","15x Scale","100% Migration"],stack:["React","Python/RAG","MySQL","Redis"],linkedProjects:["P1","P14","P2","P4","P8","P6","P10"]},{id:"M02",company:"WHEELSEYE",role:"PRODUCT MANAGER",period:"03/2022 — 01/2023",status:"MISSION_COMPLETE",color:"text-blue-400",accent:"bg-blue-400",border:"border-blue-400",bg:"bg-blue-400/5",brief:"Transformed manual logistics brokerage into an algorithmic marketplace. Solved the 'Matching Problem' to cut truck confirmation times by 99%.",metrics:["8hr->5min Speed","Digital Bilti","KYC Auto"],stack:["Kafka","Golang","Postgres","Google Maps"],linkedProjects:["P3","P13"]},{id:"M01",company:"ARTH DESIGN",role:"FOUNDER / PM",period:"04/2019 — 02/2022",status:"FOUNDATION_LAID",color:"text-purple-400",accent:"bg-purple-400",border:"border-purple-400",bg:"bg-purple-400/5",brief:"Built 'BuildwIT', a B2B PaaS for automated architectural proposals. Pioneered computational design workflows saving 1000+ man-hours/month.",metrics:["10+ B2B Clients","95% Eff. Gain","Tata Projects"],stack:["Rhino/Grasshopper","Python","Three.js","C#"],linkedProjects:["P7","P9","P11"]}],lh=[{text:"Balashree Medalist",sub:"Presidential Honor (Arts)",icon:zs,color:"text-yellow-400"},{text:"10+ Countries",sub:"Global Design Stints",icon:pp,color:"text-cyan-400"},{text:"Ironman 70.3",sub:"Training In Progress",icon:kE,color:"text-red-400"},{text:"Manhattan Run",sub:"13 Miles / 6 Hours",icon:HE,color:"text-orange-400"}],ch=[{text:"Intern @ COBE",sub:"Copenhagen, Denmark",icon:Tc,color:"text-emerald-400"},{text:"Intern @ Milestone",sub:"New York City",icon:Tc,color:"text-blue-400"},{text:"Intern @ Serrano",sub:"Mexico City",icon:Tc,color:"text-pink-400"},{text:"Intern @ ALA",sub:"Helsinki, Finland",icon:Tc,color:"text-indigo-400"}],w3=[{title:"Best Executed Project",org:"Tata Projects Limited",year:"2021",icon:dh},{title:"Above & Beyond Award",org:"Arth Design Build",year:"2020",icon:zs},{title:"National Winner",org:"Art de Vous Design",year:"2017",icon:zs},{title:"National Finalist",org:"INSDAG Design",year:"2018",icon:zs},{title:"Indian Delegate",org:"HPAIR (Harvard Project)",year:"2016",icon:pp},{title:"Silver Medalist",org:"Inter-IIT Product Design",year:"2015",icon:dh},{title:"National Winner",org:"Beat-D-Euclid",year:"2014",icon:zs},{title:"Zonal Winner",org:"Ethos Transparence",year:"2014",icon:zs}],D3=()=>{const[s,e]=re.useState(!1);re.useEffect(()=>{const r=()=>e(window.scrollY>500);return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const i=()=>window.scrollTo({top:0,behavior:"smooth"});return s?k.jsx("button",{onClick:i,className:"fixed bottom-8 right-8 z-50 p-3 bg-black border border-white/20 text-white hover:border-[#39FF14] hover:text-[#39FF14] transition-all shadow-lg group",children:k.jsx(AE,{size:20,className:"group-hover:-translate-y-1 transition-transform"})}):null},N3=({text:s})=>k.jsxs("div",{className:"relative inline-block group",children:[k.jsx("span",{className:"relative z-10",children:s}),k.jsx("span",{className:"absolute top-0 left-0 -ml-[1px] translate-x-[2px] text-[#FF3131] opacity-0 group-hover:opacity-70 animate-pulse z-0 mix-blend-screen",children:s}),k.jsx("span",{className:"absolute top-0 left-0 -ml-[1px] -translate-x-[2px] text-[#39FF14] opacity-0 group-hover:opacity-70 animate-pulse delay-75 z-0 mix-blend-screen",children:s})]}),Tx=({project:s,compact:e=!1,onClick:i,isSelected:r})=>{const l=s.border||"border-white",c=s.color||"text-white",f=k.jsxs(k.Fragment,{children:[k.jsx("div",{className:`absolute top-0 left-0 w-full h-1 bg-transparent transition-colors duration-300 ${c.replace("text-","bg-")}`}),k.jsxs("div",{className:`absolute inset-0 flex flex-col items-center justify-center text-center z-10 ${e?"p-3":"p-6"}`,children:[k.jsx(s.icon,{className:`text-zinc-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 ${r?c:""} ${e?"w-5 h-5 mb-2":"w-10 h-10 mb-4"}`,strokeWidth:1.5}),k.jsx("h3",{className:`font-black text-white uppercase tracking-tight group-hover:tracking-widest transition-all ${e?"text-[10px] mb-0.5":"text-sm mb-1"}`,children:s.title}),k.jsx("div",{className:`font-mono text-zinc-500 uppercase tracking-wider group-hover:text-[#39FF14] transition-colors ${e?"text-[8px]":"text-[9px]"}`,children:s.type})]}),r&&k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white"}),k.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white"}),k.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white"}),k.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white"})]})]}),p=`group relative bg-[#0a0a0a] border hover:border-white/30 transition-all duration-300 overflow-hidden cursor-pointer 
    ${e?"aspect-[4/3]":"aspect-square"}
    ${r?`${l} shadow-[0_0_15px_rgba(var(--tw-shadow-color),0.3)]`:"border-white/10"}
  `;return i?k.jsx("div",{onClick:i,className:p,children:f}):k.jsx(hp,{to:`/p/${s.id}`,className:p,children:f})},U3=({project:s})=>s?k.jsx("div",{className:"mt-4 border-t border-white/10 pt-4 animate-in fade-in slide-in-from-top-2 duration-300",children:k.jsxs("div",{className:"bg-[#0a0a0a] border border-white/10 p-5 rounded-sm relative overflow-hidden",children:[k.jsx("div",{className:"absolute inset-0 opacity-10 pointer-events-none",style:{backgroundImage:"linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",backgroundSize:"20px 20px"}}),k.jsxs("div",{className:"relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6",children:[k.jsxs("div",{className:"md:col-span-2",children:[k.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[k.jsx("span",{className:`text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 ${s.color}`,children:s.type}),k.jsx("div",{className:"h-px w-8 bg-white/10"})]}),k.jsx("h4",{className:"text-sm font-bold text-white uppercase mb-2 tracking-tight",children:"PROJECT_OBJECTIVE"}),k.jsx("p",{className:"text-xs text-zinc-400 font-mono leading-relaxed",children:s.desc})]}),k.jsxs("div",{className:"space-y-4",children:[k.jsxs("div",{children:[k.jsx("div",{className:"text-[9px] text-zinc-600 font-mono uppercase tracking-widest mb-1",children:"Impact_Metrics"}),k.jsx("div",{className:"flex flex-wrap gap-2",children:s.metrics&&s.metrics.map((e,i)=>k.jsx("span",{className:"text-[10px] font-bold text-white bg-white/5 border border-white/5 px-2 py-1",children:e},i))})]}),k.jsxs("div",{children:[k.jsx("div",{className:"text-[9px] text-zinc-600 font-mono uppercase tracking-widest mb-1",children:"Core_Stack"}),k.jsx("div",{className:`text-[10px] font-mono ${s.color}`,children:s.stack})]})]})]})]})}):null,L3=({mission:s})=>{const[e,i]=re.useState(!1),[r,l]=re.useState(null),[c,f]=re.useState(!1),p=tl.filter(v=>s.linkedProjects.includes(v.id)),m=8,h=p.length>m,_=c?p:p.slice(0,m);return k.jsxs("div",{className:"group relative border-l-2 border-white/10 pl-8 pb-16 last:pb-0",children:[k.jsx("div",{className:`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 bg-[#050505] transition-colors duration-300 ${e?s.border+" "+s.bg:"border-zinc-700 group-hover:border-white"}`}),k.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer mb-6 gap-3",onClick:()=>i(!e),children:[k.jsxs("div",{children:[k.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[k.jsxs("span",{className:`text-[10px] font-mono font-bold tracking-[0.2em] ${s.color}`,children:["//",s.id]}),k.jsx("span",{className:"text-[10px] font-mono text-zinc-500 uppercase tracking-widest",children:s.period})]}),k.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter group-hover:text-zinc-200 transition-colors",children:s.company}),k.jsx("div",{className:"text-xs sm:text-sm font-bold text-zinc-400 uppercase tracking-widest mt-1",children:s.role})]}),k.jsxs("div",{className:`self-start sm:self-auto mt-1 sm:mt-0 flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-white/10 rounded-full transition-all ${e?s.bg:"bg-transparent"}`,children:[k.jsx("div",{className:`w-2 h-2 rounded-full ${e?"animate-pulse "+s.accent:"bg-zinc-600"}`}),k.jsx("span",{className:`text-[9px] font-mono font-bold uppercase tracking-widest ${e?"text-white":"text-zinc-500"}`,children:s.status.replace(/_/g," ")}),k.jsx(OE,{size:14,className:`text-zinc-500 transition-transform duration-300 ${e?"rotate-90":""}`})]})]}),k.jsx("div",{className:`overflow-hidden transition-all duration-500 ease-in-out ${e?"max-h-[1200px] opacity-100":"max-h-0 opacity-50"}`,children:k.jsx("div",{className:"bg-[#0a0a0a] border border-white/10 p-6 md:p-8 rounded-sm mb-6",children:k.jsxs("div",{className:"grid grid-cols-1 gap-8",children:[s.brief&&k.jsxs("div",{className:"border-b border-white/10 pb-6",children:[k.jsx("div",{className:"text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-2",children:"Mission Brief"}),k.jsx("p",{className:"text-sm text-zinc-300 leading-relaxed font-mono",children:s.brief})]}),k.jsxs("div",{children:[k.jsxs("div",{className:"flex items-center justify-between mb-4",children:[k.jsxs("div",{className:"text-[10px] text-zinc-500 font-mono uppercase tracking-widest",children:["Key Projects Delivered ",k.jsx("span",{className:"text-zinc-700 ml-2",children:"// CLICK TO VIEW DETAILS"})]}),k.jsxs("div",{className:"text-[9px] font-mono text-zinc-600",children:["[",p.length," MODULES]"]})]}),p.length>0?k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mb-4",children:_.map(v=>k.jsx("div",{onClick:g=>{g.preventDefault(),g.stopPropagation(),l(r?.id===v.id?null:v)},children:k.jsx(Tx,{project:v,compact:!0,isSelected:r?.id===v.id,onClick:()=>{}})},v.id))}),h&&k.jsx("div",{className:"flex justify-center mt-2",children:k.jsx("button",{onClick:v=>{v.stopPropagation(),f(!c)},className:"flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-[10px] font-mono font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-all rounded-full",children:c?k.jsxs(k.Fragment,{children:["Collapse ",k.jsx(Vv,{size:12})]}):k.jsxs(k.Fragment,{children:["View All Projects ",k.jsx(Gv,{size:12})]})})})]}):k.jsx("div",{className:"h-20 flex items-center justify-center border border-white/5 border-dashed rounded bg-white/[0.01]",children:k.jsx("span",{className:"text-[10px] font-mono text-zinc-700 uppercase",children:"No Public Modules"})}),k.jsx(U3,{project:r})]})]})})})]})},O3=({award:s})=>k.jsxs("div",{className:"flex items-center justify-between p-4 bg-[#0a0a0a] border border-white/10 hover:border-[#39FF14]/30 hover:bg-white/[0.02] transition-all group",children:[k.jsxs("div",{className:"flex items-center gap-4",children:[k.jsx("div",{className:"p-2 rounded bg-white/5 text-zinc-500 group-hover:text-[#39FF14] transition-colors",children:k.jsx(s.icon,{size:18})}),k.jsxs("div",{children:[k.jsx("h4",{className:"text-xs font-bold text-white uppercase tracking-wide group-hover:text-[#39FF14] transition-colors",children:s.title}),k.jsx("div",{className:"text-[9px] font-mono text-zinc-500 uppercase tracking-wider",children:s.org})]})]}),k.jsx("div",{className:"text-[10px] font-mono font-bold text-zinc-600 group-hover:text-white transition-colors",children:s.year})]});function P3(){const{pathname:s}=Ca();return re.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[s]),null}function F3(){const[s,e]=re.useState({x:0,y:0}),[i,r]=re.useState(!1),[l,c]=re.useState(!1),f=8,p=i?tl:tl.slice(0,f);return re.useEffect(()=>{const m=_=>{e({x:_.clientX,y:_.clientY})},h=()=>c(window.scrollY>24);return window.addEventListener("mousemove",m),window.addEventListener("scroll",h,{passive:!0}),()=>{window.removeEventListener("mousemove",m),window.removeEventListener("scroll",h)}},[]),k.jsxs("div",{className:"min-h-screen bg-[#050505] text-[#d1d1d1] font-sans selection:bg-[#39FF14] selection:text-black overflow-x-hidden",children:[k.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&family=Inter:wght@400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        
        .grid-bg {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
        
        .scanline {
          position: fixed; top: 0; left: 0; width: 100%; height: 2px;
          background: rgba(57, 255, 20, 0.1);
          animation: scan 4s linear infinite; pointer-events: none; z-index: 50;
        }
        @keyframes scan { 0% { top: -10px; } 100% { top: 100vh; } }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee { animation: marquee 40s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 40s linear infinite; }

        @keyframes header-enter {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .header-enter { animation: header-enter 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor-blink { animation: blink 1.2s step-end infinite; }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .header-shimmer {
          background: linear-gradient(90deg, transparent 0%, rgba(57,255,20,0.4) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }
      `}),k.jsx("div",{className:"fixed inset-0 grid-bg pointer-events-none z-0"}),k.jsx("div",{className:"scanline"}),k.jsx("div",{className:"fixed pointer-events-none z-0 hidden md:block",style:{left:s.x,top:s.y,transform:"translate(-50%, -50%)",width:"600px",height:"600px",background:"radial-gradient(circle, rgba(57,255,20,0.04) 0%, rgba(57,255,20,0.015) 30%, transparent 70%)",borderRadius:"50%",transition:"left 0.08s ease-out, top 0.08s ease-out"}}),k.jsx(D3,{}),k.jsxs("header",{className:`header-enter fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-500 ${l?"bg-[#050505]/98 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]":"bg-[#050505]/70 border-white/5"}`,children:[k.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between",children:[k.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[k.jsxs("div",{className:"relative flex items-center justify-center w-6 h-6",children:[k.jsx("div",{className:"absolute w-6 h-6 bg-[#39FF14]/10 rounded-full animate-ping",style:{animationDuration:"2.5s"}}),k.jsx("div",{className:"w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]"})]}),k.jsxs("div",{className:"text-xs sm:text-sm font-black tracking-[0.15em] sm:tracking-widest text-white uppercase",children:["SUNEET",k.jsx("span",{className:"text-[#39FF14]",children:".JAGDEV"}),k.jsx("span",{className:"cursor-blink text-[#39FF14] ml-px",children:"_"})]})]}),k.jsxs("div",{className:"flex items-center gap-3 sm:gap-4",children:[k.jsxs("div",{className:"hidden sm:flex items-center gap-1.5 text-[9px] font-mono text-zinc-500 uppercase tracking-widest",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_4px_#39FF14] animate-pulse"}),"Available"]}),k.jsxs("a",{href:"mailto:suneet@jagdev.in",className:"flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 border border-white/15 text-[9px] sm:text-[10px] font-bold tracking-widest text-white hover:bg-[#39FF14] hover:text-black hover:border-[#39FF14] transition-all duration-200 uppercase",children:[k.jsx(YE,{size:10}),k.jsx("span",{className:"hidden xs:inline sm:inline",children:"Contact"})]})]})]}),k.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-px overflow-hidden",children:k.jsx("div",{className:`h-full header-shimmer transition-opacity duration-500 ${l?"opacity-100":"opacity-40"}`})})]}),k.jsxs("main",{className:"relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 max-w-7xl mx-auto",children:[k.jsx("section",{className:"mb-20 sm:mb-32 lg:mb-40 relative overflow-hidden rounded-sm",children:k.jsxs("div",{className:"relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end py-10 sm:py-16 px-0 sm:px-2",children:[k.jsxs("div",{className:"lg:col-span-8",children:[k.jsxs("div",{className:"inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 py-1 border border-[#39FF14]/30 bg-[#39FF14]/5 text-[#39FF14] text-[9px] font-bold tracking-[0.2em] uppercase",children:[k.jsx(rb,{size:10})," System Architect // Product Builder"]}),k.jsxs("h1",{className:"text-5xl sm:text-6xl md:text-[7rem] leading-[0.85] font-black text-white tracking-tighter uppercase mb-6 sm:mb-8",children:[k.jsx(N3,{text:"ARCHITECTING"})," ",k.jsx("br",{}),k.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700",children:"SCALE."})]}),k.jsxs("p",{className:"text-base sm:text-xl md:text-2xl text-white/60 max-w-2xl font-medium leading-relaxed",children:["I transform fragmented chaos into unified systems. Specializing in ",k.jsx("span",{className:"text-white",children:"Platform Consolidation"}),", ",k.jsx("span",{className:"text-white",children:"AI Automation"}),", and ",k.jsx("span",{className:"text-white",children:"Monetization Engines"}),"."]})]}),k.jsx("div",{className:"lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-3 lg:gap-6 mt-2 lg:mt-0",children:[{label:"Global Users",val:"10M+"},{label:"Systems Unified",val:"14+"},{label:"Revenue Impact",val:"+18%"}].map((m,h)=>k.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-2 gap-1",children:[k.jsx("span",{className:"text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-widest",children:m.label}),k.jsx("span",{className:"text-lg sm:text-xl font-bold text-[#39FF14] mono",children:m.val})]},h))})]})}),k.jsxs("section",{className:"mb-20 sm:mb-32 lg:mb-40",children:[k.jsxs("div",{className:"flex items-end justify-between mb-10 sm:mb-16 border-b border-white/10 pb-5 sm:pb-6",children:[k.jsxs("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter flex items-center gap-3 sm:gap-4",children:[k.jsx(kv,{size:24,className:"text-[#39FF14] sm:w-8 sm:h-8"}),"Mission Log"]}),k.jsx("span",{className:"font-mono text-[10px] text-zinc-500 uppercase tracking-widest hidden md:block",children:"// DECRYPTING_CAREER_HISTORY..."})]}),k.jsx("div",{className:"max-w-5xl mx-auto",children:C3.map(m=>k.jsx(L3,{mission:m},m.id))})]}),k.jsxs("section",{className:"mb-20 sm:mb-32 lg:mb-40",children:[k.jsx("div",{className:"flex items-end justify-between mb-8 sm:mb-12",children:k.jsxs("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter flex items-center gap-3 sm:gap-4",children:[k.jsx(KE,{size:24,className:"text-[#39FF14] sm:w-8 sm:h-8"}),"The Build Grid"]})}),k.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10",children:p.map(m=>k.jsx(Tx,{project:m},m.id))}),tl.length>f&&k.jsx("div",{className:"flex justify-center mt-8",children:k.jsx("button",{onClick:()=>r(!i),className:"flex items-center gap-2 text-xs font-bold text-white border border-[#39FF14] px-6 py-3 uppercase tracking-widest hover:bg-[#39FF14] hover:text-black transition-all",children:i?k.jsxs(k.Fragment,{children:["Collapse System ",k.jsx(Vv,{size:14})]}):k.jsxs(k.Fragment,{children:["View All ",tl.length," Ships ",k.jsx(Gv,{size:14})]})})})]}),k.jsxs("section",{className:"mb-20 sm:mb-32",children:[k.jsxs("div",{className:"flex items-end justify-between mb-10 sm:mb-16 border-b border-white/10 pb-5 sm:pb-6",children:[k.jsxs("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter flex items-center gap-3 sm:gap-4",children:[k.jsx(Hv,{size:24,className:"text-[#39FF14] sm:w-8 sm:h-8"}),"Human O.S."]}),k.jsx("span",{className:"font-mono text-[10px] text-zinc-500 uppercase tracking-widest hidden md:block",children:"// DIAGNOSTICS_ONLINE"})]}),k.jsxs("div",{className:"w-full overflow-hidden border-y border-white/10 bg-[#0a0a0a] py-12 relative group",children:[k.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"}),k.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"}),k.jsx("div",{className:"flex gap-6 animate-marquee mb-6 hover:[animation-play-state:paused]",children:[...lh,...lh,...lh].map((m,h)=>k.jsxs("div",{className:"flex-shrink-0 w-[280px] bg-[#050505] border border-white/10 p-5 flex items-center gap-4 hover:border-white/30 hover:bg-white/[0.02] transition-all",children:[k.jsx("div",{className:`p-2.5 rounded bg-white/5 border border-white/5 ${m.color}`,children:k.jsx(m.icon,{size:18})}),k.jsxs("div",{children:[k.jsx("div",{className:"text-[9px] font-mono text-zinc-500 mb-1 uppercase tracking-wider",children:m.sub}),k.jsx("div",{className:"text-xs font-bold text-white uppercase",children:m.text})]})]},`r1-${h}`))}),k.jsx("div",{className:"flex gap-6 animate-marquee-reverse hover:[animation-play-state:paused]",children:[...ch,...ch,...ch].map((m,h)=>k.jsxs("div",{className:"flex-shrink-0 w-[280px] bg-[#050505] border border-white/10 p-5 flex items-center gap-4 hover:border-white/30 hover:bg-white/[0.02] transition-all",children:[k.jsx("div",{className:`p-2.5 rounded bg-white/5 border border-white/5 ${m.color}`,children:k.jsx(m.icon,{size:18})}),k.jsxs("div",{children:[k.jsx("div",{className:"text-[9px] font-mono text-zinc-500 mb-1 uppercase tracking-wider",children:m.sub}),k.jsx("div",{className:"text-xs font-bold text-white uppercase",children:m.text})]})]},`r2-${h}`))})]})]}),k.jsxs("section",{className:"mb-20 sm:mb-32 lg:mb-40",children:[k.jsxs("div",{className:"flex items-end justify-between mb-10 sm:mb-16 border-b border-white/10 pb-5 sm:pb-6",children:[k.jsxs("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter flex items-center gap-3 sm:gap-4",children:[k.jsx(dh,{size:24,className:"text-[#39FF14] sm:w-8 sm:h-8"}),"Trophy Case"]}),k.jsx("span",{className:"font-mono text-[10px] text-zinc-500 uppercase tracking-widest hidden md:block",children:"// HALL_OF_RECORDS"})]}),k.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:w3.map((m,h)=>k.jsx(O3,{award:m},h))})]}),k.jsxs("footer",{className:"pt-16 sm:pt-20 border-t border-white/10 flex flex-col items-center justify-center text-center",children:[k.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-9xl font-black text-white tracking-tighter uppercase mb-6 sm:mb-8 hover:text-[#39FF14] transition-colors cursor-pointer leading-[0.9]",children:["Get In ",k.jsx("br",{})," Touch."]}),k.jsx("div",{className:"flex flex-wrap justify-center gap-6 sm:gap-8 mb-10 sm:mb-12",children:["LinkedIn","Twitter","Email","Github"].map(m=>k.jsx("a",{href:"#",className:"text-xs sm:text-sm font-bold text-zinc-500 hover:text-white uppercase tracking-widest transition-colors",children:m},m))}),k.jsxs("div",{className:"font-mono text-xs text-zinc-700 uppercase tracking-widest mb-10 sm:mb-12 px-4 text-center",children:["© ",new Date().getFullYear()," Suneet Jagdev. Built in React & Tailwind."]})]})]})]})}function I3(){const{id:s}=bM(),e=s,i=e?pb[e]:null;return!e||!i?k.jsx(Ov,{to:"/",replace:!0}):k.jsx(re.Suspense,{fallback:k.jsx("div",{className:"min-h-screen bg-[#050505] flex items-center justify-center text-[#39FF14] font-mono animate-pulse",children:"LOADING_NODE..."}),children:k.jsx(i,{})})}function z3(){return k.jsxs(k.Fragment,{children:[k.jsx(R3,{}),k.jsx(P3,{}),k.jsxs(BM,{children:[k.jsx(Yc,{path:"/",element:k.jsx(F3,{})}),k.jsx(Yc,{path:"/p/:id",element:k.jsx(I3,{})}),k.jsx(Yc,{path:"*",element:k.jsx(Ov,{to:"/",replace:!0})})]})]})}Gy.createRoot(document.getElementById("root")).render(k.jsx(Ly.StrictMode,{children:k.jsx(cE,{basename:"/pm-systems",children:k.jsx(z3,{})})}));export{AE as A,NE as B,OE as C,hp as L,kv as S,rb as T,Hv as a,WE as b,Jt as c,k as j,re as r,bM as u};
