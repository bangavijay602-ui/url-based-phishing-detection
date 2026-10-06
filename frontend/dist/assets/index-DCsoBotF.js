(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function QM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mx={exports:{}},Wc={},Ex={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),JM=Symbol.for("react.portal"),e1=Symbol.for("react.fragment"),t1=Symbol.for("react.strict_mode"),n1=Symbol.for("react.profiler"),i1=Symbol.for("react.provider"),r1=Symbol.for("react.context"),s1=Symbol.for("react.forward_ref"),o1=Symbol.for("react.suspense"),a1=Symbol.for("react.memo"),l1=Symbol.for("react.lazy"),Gm=Symbol.iterator;function c1(t){return t===null||typeof t!="object"?null:(t=Gm&&t[Gm]||t["@@iterator"],typeof t=="function"?t:null)}var wx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tx=Object.assign,Ax={};function oo(t,e,n){this.props=t,this.context=e,this.refs=Ax,this.updater=n||wx}oo.prototype.isReactComponent={};oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bx(){}bx.prototype=oo.prototype;function Gh(t,e,n){this.props=t,this.context=e,this.refs=Ax,this.updater=n||wx}var jh=Gh.prototype=new bx;jh.constructor=Gh;Tx(jh,oo.prototype);jh.isPureReactComponent=!0;var jm=Array.isArray,Cx=Object.prototype.hasOwnProperty,Wh={current:null},Rx={key:!0,ref:!0,__self:!0,__source:!0};function Px(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Cx.call(e,i)&&!Rx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ea,type:t,key:s,ref:o,props:r,_owner:Wh.current}}function u1(t,e){return{$$typeof:Ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ea}function d1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wm=/\/+/g;function bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?d1(""+t.key):e.toString(36)}function Ol(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ea:case JM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+bu(o,0):i,jm(r)?(n="",t!=null&&(n=t.replace(Wm,"$&/")+"/"),Ol(r,e,n,"",function(c){return c})):r!=null&&(Xh(r)&&(r=u1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Wm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",jm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+bu(s,a);o+=Ol(s,e,n,l,r)}else if(l=c1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+bu(s,a++),o+=Ol(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ja(t,e,n){if(t==null)return t;var i=[],r=0;return Ol(t,i,"","",function(s){return e.call(n,s,r++)}),i}function f1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},kl={transition:null},h1={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:kl,ReactCurrentOwner:Wh};function Lx(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:ja,forEach:function(t,e,n){ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ja(t,function(){e++}),e},toArray:function(t){return ja(t,function(e){return e})||[]},only:function(t){if(!Xh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=oo;Xe.Fragment=e1;Xe.Profiler=n1;Xe.PureComponent=Gh;Xe.StrictMode=t1;Xe.Suspense=o1;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h1;Xe.act=Lx;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Tx({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Cx.call(e,l)&&!Rx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ea,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:r1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:i1,_context:t},t.Consumer=t};Xe.createElement=Px;Xe.createFactory=function(t){var e=Px.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:s1,render:t}};Xe.isValidElement=Xh;Xe.lazy=function(t){return{$$typeof:l1,_payload:{_status:-1,_result:t},_init:f1}};Xe.memo=function(t,e){return{$$typeof:a1,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=kl.transition;kl.transition={};try{t()}finally{kl.transition=e}};Xe.unstable_act=Lx;Xe.useCallback=function(t,e){return en.current.useCallback(t,e)};Xe.useContext=function(t){return en.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return en.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return en.current.useEffect(t,e)};Xe.useId=function(){return en.current.useId()};Xe.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return en.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};Xe.useRef=function(t){return en.current.useRef(t)};Xe.useState=function(t){return en.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return en.current.useTransition()};Xe.version="18.3.1";Ex.exports=Xe;var ne=Ex.exports;const Nx=QM(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p1=ne,m1=Symbol.for("react.element"),g1=Symbol.for("react.fragment"),v1=Object.prototype.hasOwnProperty,x1=p1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y1={key:!0,ref:!0,__self:!0,__source:!0};function Dx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)v1.call(e,i)&&!y1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:m1,type:t,key:s,ref:o,props:r,_owner:x1.current}}Wc.Fragment=g1;Wc.jsx=Dx;Wc.jsxs=Dx;Mx.exports=Wc;var S=Mx.exports,jd={},Ix={exports:{}},An={},Ux={exports:{}},Fx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,Q){var N=I.length;I.push(Q);e:for(;0<N;){var P=N-1>>>1,re=I[P];if(0<r(re,Q))I[P]=Q,I[N]=re,N=P;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var Q=I[0],N=I.pop();if(N!==Q){I[0]=N;e:for(var P=0,re=I.length,fe=re>>>1;P<fe;){var O=2*(P+1)-1,$=I[O],te=O+1,X=I[te];if(0>r($,N))te<re&&0>r(X,$)?(I[P]=X,I[te]=N,P=te):(I[P]=$,I[O]=N,P=O);else if(te<re&&0>r(X,N))I[P]=X,I[te]=N,P=te;else break e}}return Q}function r(I,Q){var N=I.sortIndex-Q.sortIndex;return N!==0?N:I.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,x=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var Q=n(c);Q!==null;){if(Q.callback===null)i(c);else if(Q.startTime<=I)i(c),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(c)}}function M(I){if(y=!1,v(I),!x)if(n(l)!==null)x=!0,Y(C);else{var Q=n(c);Q!==null&&K(M,Q.startTime-I)}}function C(I,Q){x=!1,y&&(y=!1,f(L),L=-1),p=!0;var N=h;try{for(v(Q),d=n(l);d!==null&&(!(d.expirationTime>Q)||I&&!w());){var P=d.callback;if(typeof P=="function"){d.callback=null,h=d.priorityLevel;var re=P(d.expirationTime<=Q);Q=t.unstable_now(),typeof re=="function"?d.callback=re:d===n(l)&&i(l),v(Q)}else i(l);d=n(l)}if(d!==null)var fe=!0;else{var O=n(c);O!==null&&K(M,O.startTime-Q),fe=!1}return fe}finally{d=null,h=N,p=!1}}var b=!1,A=null,L=-1,V=5,_=-1;function w(){return!(t.unstable_now()-_<V)}function W(){if(A!==null){var I=t.unstable_now();_=I;var Q=!0;try{Q=A(!0,I)}finally{Q?j():(b=!1,A=null)}}else b=!1}var j;if(typeof g=="function")j=function(){g(W)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,ie=Z.port2;Z.port1.onmessage=W,j=function(){ie.postMessage(null)}}else j=function(){m(W,0)};function Y(I){A=I,b||(b=!0,j())}function K(I,Q){L=m(function(){I(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,Y(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var Q=3;break;default:Q=h}var N=h;h=Q;try{return I()}finally{h=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,Q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var N=h;h=I;try{return Q()}finally{h=N}},t.unstable_scheduleCallback=function(I,Q,N){var P=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?P+N:P):N=P,I){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=N+re,I={id:u++,callback:Q,priorityLevel:I,startTime:N,expirationTime:re,sortIndex:-1},N>P?(I.sortIndex=N,e(c,I),n(l)===null&&I===n(c)&&(y?(f(L),L=-1):y=!0,K(M,N-P))):(I.sortIndex=re,e(l,I),x||p||(x=!0,Y(C))),I},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(I){var Q=h;return function(){var N=h;h=Q;try{return I.apply(this,arguments)}finally{h=N}}}})(Fx);Ux.exports=Fx;var _1=Ux.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S1=ne,wn=_1;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ox=new Set,ta={};function Zr(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(ta[t]=e,t=0;t<e.length;t++)Ox.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wd=Object.prototype.hasOwnProperty,M1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xm={},$m={};function E1(t){return Wd.call($m,t)?!0:Wd.call(Xm,t)?!1:M1.test(t)?$m[t]=!0:(Xm[t]=!0,!1)}function w1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T1(t,e,n,i){if(e===null||typeof e>"u"||w1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var $h=/[\-:]([a-z])/g;function Yh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($h,Yh);Vt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($h,Yh);Vt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($h,Yh);Vt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function qh(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(T1(e,n,r,i)&&(n=null),i||r===null?E1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=S1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),gs=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),Kh=Symbol.for("react.strict_mode"),Xd=Symbol.for("react.profiler"),kx=Symbol.for("react.provider"),Bx=Symbol.for("react.context"),Zh=Symbol.for("react.forward_ref"),$d=Symbol.for("react.suspense"),Yd=Symbol.for("react.suspense_list"),Qh=Symbol.for("react.memo"),Wi=Symbol.for("react.lazy"),zx=Symbol.for("react.offscreen"),Ym=Symbol.iterator;function mo(t){return t===null||typeof t!="object"?null:(t=Ym&&t[Ym]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,Cu;function No(t){if(Cu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cu=e&&e[1]||""}return`
`+Cu+t}var Ru=!1;function Pu(t,e){if(!t||Ru)return"";Ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ru=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?No(t):""}function A1(t){switch(t.tag){case 5:return No(t.type);case 16:return No("Lazy");case 13:return No("Suspense");case 19:return No("SuspenseList");case 0:case 2:case 15:return t=Pu(t.type,!1),t;case 11:return t=Pu(t.type.render,!1),t;case 1:return t=Pu(t.type,!0),t;default:return""}}function qd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case gs:return"Portal";case Xd:return"Profiler";case Kh:return"StrictMode";case $d:return"Suspense";case Yd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Bx:return(t.displayName||"Context")+".Consumer";case kx:return(t._context.displayName||"Context")+".Provider";case Zh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qh:return e=t.displayName||null,e!==null?e:qd(t.type)||"Memo";case Wi:e=t._payload,t=t._init;try{return qd(t(e))}catch{}}return null}function b1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qd(e);case 8:return e===Kh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function C1(t){var e=Vx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=C1(t))}function Hx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Vx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kd(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gx(t,e){e=e.checked,e!=null&&qh(t,"checked",e,!1)}function Zd(t,e){Gx(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qd(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Km(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qd(t,e,n){(e!=="number"||oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Do=Array.isArray;function Is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Jd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Do(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function jx(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Qm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ef(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $a,Xx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R1=["Webkit","ms","Moz","O"];Object.keys(Vo).forEach(function(t){R1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vo[e]=Vo[t]})});function $x(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vo.hasOwnProperty(t)&&Vo[t]?(""+e).trim():e+"px"}function Yx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=$x(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var P1=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tf(t,e){if(e){if(P1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function nf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rf=null;function Jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sf=null,Us=null,Fs=null;function Jm(t){if(t=Aa(t)){if(typeof sf!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Kc(e),sf(t.stateNode,t.type,e))}}function qx(t){Us?Fs?Fs.push(t):Fs=[t]:Us=t}function Kx(){if(Us){var t=Us,e=Fs;if(Fs=Us=null,Jm(t),e)for(t=0;t<e.length;t++)Jm(e[t])}}function Zx(t,e){return t(e)}function Qx(){}var Lu=!1;function Jx(t,e,n){if(Lu)return t(e,n);Lu=!0;try{return Zx(t,e,n)}finally{Lu=!1,(Us!==null||Fs!==null)&&(Qx(),Kx())}}function ia(t,e){var n=t.stateNode;if(n===null)return null;var i=Kc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var of=!1;if(Ci)try{var go={};Object.defineProperty(go,"passive",{get:function(){of=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{of=!1}function L1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ho=!1,ac=null,lc=!1,af=null,N1={onError:function(t){Ho=!0,ac=t}};function D1(t,e,n,i,r,s,o,a,l){Ho=!1,ac=null,L1.apply(N1,arguments)}function I1(t,e,n,i,r,s,o,a,l){if(D1.apply(this,arguments),Ho){if(Ho){var c=ac;Ho=!1,ac=null}else throw Error(ce(198));lc||(lc=!0,af=c)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ey(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function eg(t){if(Qr(t)!==t)throw Error(ce(188))}function U1(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return eg(r),t;if(s===i)return eg(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function ty(t){return t=U1(t),t!==null?ny(t):null}function ny(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ny(t);if(e!==null)return e;t=t.sibling}return null}var iy=wn.unstable_scheduleCallback,tg=wn.unstable_cancelCallback,F1=wn.unstable_shouldYield,O1=wn.unstable_requestPaint,wt=wn.unstable_now,k1=wn.unstable_getCurrentPriorityLevel,ep=wn.unstable_ImmediatePriority,ry=wn.unstable_UserBlockingPriority,cc=wn.unstable_NormalPriority,B1=wn.unstable_LowPriority,sy=wn.unstable_IdlePriority,Xc=null,oi=null;function z1(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(Xc,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:G1,V1=Math.log,H1=Math.LN2;function G1(t){return t>>>=0,t===0?32:31-(V1(t)/H1|0)|0}var Ya=64,qa=4194304;function Io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function uc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Io(a):(s&=o,s!==0&&(i=Io(s)))}else o=n&~r,o!==0?i=Io(o):s!==0&&(i=Io(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function j1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=j1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function lf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function oy(){var t=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),t}function Nu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function X1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function tp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function ay(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ly,np,cy,uy,dy,cf=!1,Ka=[],Qi=null,Ji=null,er=null,ra=new Map,sa=new Map,$i=[],$1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ng(t,e){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(e.pointerId)}}function vo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Aa(e),e!==null&&np(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Y1(t,e,n,i,r){switch(e){case"focusin":return Qi=vo(Qi,t,e,n,i,r),!0;case"dragenter":return Ji=vo(Ji,t,e,n,i,r),!0;case"mouseover":return er=vo(er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ra.set(s,vo(ra.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,sa.set(s,vo(sa.get(s)||null,t,e,n,i,r)),!0}return!1}function fy(t){var e=Ur(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=ey(n),e!==null){t.blockedOn=e,dy(t.priority,function(){cy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);rf=i,n.target.dispatchEvent(i),rf=null}else return e=Aa(n),e!==null&&np(e),t.blockedOn=n,!1;e.shift()}return!0}function ig(t,e,n){Bl(t)&&n.delete(e)}function q1(){cf=!1,Qi!==null&&Bl(Qi)&&(Qi=null),Ji!==null&&Bl(Ji)&&(Ji=null),er!==null&&Bl(er)&&(er=null),ra.forEach(ig),sa.forEach(ig)}function xo(t,e){t.blockedOn===e&&(t.blockedOn=null,cf||(cf=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,q1)))}function oa(t){function e(r){return xo(r,t)}if(0<Ka.length){xo(Ka[0],t);for(var n=1;n<Ka.length;n++){var i=Ka[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qi!==null&&xo(Qi,t),Ji!==null&&xo(Ji,t),er!==null&&xo(er,t),ra.forEach(e),sa.forEach(e),n=0;n<$i.length;n++)i=$i[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<$i.length&&(n=$i[0],n.blockedOn===null);)fy(n),n.blockedOn===null&&$i.shift()}var Os=Ui.ReactCurrentBatchConfig,dc=!0;function K1(t,e,n,i){var r=rt,s=Os.transition;Os.transition=null;try{rt=1,ip(t,e,n,i)}finally{rt=r,Os.transition=s}}function Z1(t,e,n,i){var r=rt,s=Os.transition;Os.transition=null;try{rt=4,ip(t,e,n,i)}finally{rt=r,Os.transition=s}}function ip(t,e,n,i){if(dc){var r=uf(t,e,n,i);if(r===null)Hu(t,e,i,fc,n),ng(t,i);else if(Y1(r,t,e,n,i))i.stopPropagation();else if(ng(t,i),e&4&&-1<$1.indexOf(t)){for(;r!==null;){var s=Aa(r);if(s!==null&&ly(s),s=uf(t,e,n,i),s===null&&Hu(t,e,i,fc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Hu(t,e,i,null,n)}}var fc=null;function uf(t,e,n,i){if(fc=null,t=Jh(i),t=Ur(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ey(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fc=t,null}function hy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k1()){case ep:return 1;case ry:return 4;case cc:case B1:return 16;case sy:return 536870912;default:return 16}default:return 16}}var Ki=null,rp=null,zl=null;function py(){if(zl)return zl;var t,e=rp,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return zl=r.slice(t,1<i?1-i:void 0)}function Vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Za(){return!0}function rg(){return!1}function bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Za:rg,this.isPropagationStopped=rg,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),e}var ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sp=bn(ao),Ta=vt({},ao,{view:0,detail:0}),Q1=bn(Ta),Du,Iu,yo,$c=vt({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:op,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(Du=t.screenX-yo.screenX,Iu=t.screenY-yo.screenY):Iu=Du=0,yo=t),Du)},movementY:function(t){return"movementY"in t?t.movementY:Iu}}),sg=bn($c),J1=vt({},$c,{dataTransfer:0}),eE=bn(J1),tE=vt({},Ta,{relatedTarget:0}),Uu=bn(tE),nE=vt({},ao,{animationName:0,elapsedTime:0,pseudoElement:0}),iE=bn(nE),rE=vt({},ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sE=bn(rE),oE=vt({},ao,{data:0}),og=bn(oE),aE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cE[t])?!!e[t]:!1}function op(){return uE}var dE=vt({},Ta,{key:function(t){if(t.key){var e=aE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:op,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fE=bn(dE),hE=vt({},$c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ag=bn(hE),pE=vt({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:op}),mE=bn(pE),gE=vt({},ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),vE=bn(gE),xE=vt({},$c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yE=bn(xE),_E=[9,13,27,32],ap=Ci&&"CompositionEvent"in window,Go=null;Ci&&"documentMode"in document&&(Go=document.documentMode);var SE=Ci&&"TextEvent"in window&&!Go,my=Ci&&(!ap||Go&&8<Go&&11>=Go),lg=" ",cg=!1;function gy(t,e){switch(t){case"keyup":return _E.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function ME(t,e){switch(t){case"compositionend":return vy(e);case"keypress":return e.which!==32?null:(cg=!0,lg);case"textInput":return t=e.data,t===lg&&cg?null:t;default:return null}}function EE(t,e){if(xs)return t==="compositionend"||!ap&&gy(t,e)?(t=py(),zl=rp=Ki=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return my&&e.locale!=="ko"?null:e.data;default:return null}}var wE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ug(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wE[t.type]:e==="textarea"}function xy(t,e,n,i){qx(i),e=hc(e,"onChange"),0<e.length&&(n=new sp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var jo=null,aa=null;function TE(t){Ry(t,0)}function Yc(t){var e=Ss(t);if(Hx(e))return t}function AE(t,e){if(t==="change")return e}var yy=!1;if(Ci){var Fu;if(Ci){var Ou="oninput"in document;if(!Ou){var dg=document.createElement("div");dg.setAttribute("oninput","return;"),Ou=typeof dg.oninput=="function"}Fu=Ou}else Fu=!1;yy=Fu&&(!document.documentMode||9<document.documentMode)}function fg(){jo&&(jo.detachEvent("onpropertychange",_y),aa=jo=null)}function _y(t){if(t.propertyName==="value"&&Yc(aa)){var e=[];xy(e,aa,t,Jh(t)),Jx(TE,e)}}function bE(t,e,n){t==="focusin"?(fg(),jo=e,aa=n,jo.attachEvent("onpropertychange",_y)):t==="focusout"&&fg()}function CE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yc(aa)}function RE(t,e){if(t==="click")return Yc(e)}function PE(t,e){if(t==="input"||t==="change")return Yc(e)}function LE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:LE;function la(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Wd.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function hg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pg(t,e){var n=hg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hg(n)}}function Sy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function My(){for(var t=window,e=oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=oc(t.document)}return e}function lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NE(t){var e=My(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sy(n.ownerDocument.documentElement,n)){if(i!==null&&lp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=pg(n,s);var o=pg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DE=Ci&&"documentMode"in document&&11>=document.documentMode,ys=null,df=null,Wo=null,ff=!1;function mg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ff||ys==null||ys!==oc(i)||(i=ys,"selectionStart"in i&&lp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wo&&la(Wo,i)||(Wo=i,i=hc(df,"onSelect"),0<i.length&&(e=new sp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ys)))}function Qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _s={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},ku={},Ey={};Ci&&(Ey=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function qc(t){if(ku[t])return ku[t];if(!_s[t])return t;var e=_s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ey)return ku[t]=e[n];return t}var wy=qc("animationend"),Ty=qc("animationiteration"),Ay=qc("animationstart"),by=qc("transitionend"),Cy=new Map,gg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){Cy.set(t,e),Zr(e,[t])}for(var Bu=0;Bu<gg.length;Bu++){var zu=gg[Bu],IE=zu.toLowerCase(),UE=zu[0].toUpperCase()+zu.slice(1);pr(IE,"on"+UE)}pr(wy,"onAnimationEnd");pr(Ty,"onAnimationIteration");pr(Ay,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(by,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function vg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,I1(i,e,void 0,t),t.currentTarget=null}function Ry(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;vg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;vg(r,a,c),s=l}}}if(lc)throw t=af,lc=!1,af=null,t}function ut(t,e){var n=e[vf];n===void 0&&(n=e[vf]=new Set);var i=t+"__bubble";n.has(i)||(Py(e,t,2,!1),n.add(i))}function Vu(t,e,n){var i=0;e&&(i|=4),Py(n,t,i,e)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[Ja]){t[Ja]=!0,Ox.forEach(function(n){n!=="selectionchange"&&(FE.has(n)||Vu(n,!1,t),Vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ja]||(e[Ja]=!0,Vu("selectionchange",!1,e))}}function Py(t,e,n,i){switch(hy(e)){case 1:var r=K1;break;case 4:r=Z1;break;default:r=ip}n=r.bind(null,e,n,t),r=void 0,!of||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Hu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ur(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Jx(function(){var c=s,u=Jh(n),d=[];e:{var h=Cy.get(t);if(h!==void 0){var p=sp,x=t;switch(t){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":p=fE;break;case"focusin":x="focus",p=Uu;break;case"focusout":x="blur",p=Uu;break;case"beforeblur":case"afterblur":p=Uu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=sg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=eE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=mE;break;case wy:case Ty:case Ay:p=iE;break;case by:p=vE;break;case"scroll":p=Q1;break;case"wheel":p=yE;break;case"copy":case"cut":case"paste":p=sE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ag}var y=(e&4)!==0,m=!y&&t==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,v;g!==null;){v=g;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,f!==null&&(M=ia(g,f),M!=null&&y.push(ua(g,M,v)))),m)break;g=g.return}0<y.length&&(h=new p(h,x,null,n,u),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==rf&&(x=n.relatedTarget||n.fromElement)&&(Ur(x)||x[Ri]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Ur(x):null,x!==null&&(m=Qr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(y=sg,M="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=ag,M="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?h:Ss(p),v=x==null?h:Ss(x),h=new y(M,g+"leave",p,n,u),h.target=m,h.relatedTarget=v,M=null,Ur(u)===c&&(y=new y(f,g+"enter",x,n,u),y.target=v,y.relatedTarget=m,M=y),m=M,p&&x)t:{for(y=p,f=x,g=0,v=y;v;v=ts(v))g++;for(v=0,M=f;M;M=ts(M))v++;for(;0<g-v;)y=ts(y),g--;for(;0<v-g;)f=ts(f),v--;for(;g--;){if(y===f||f!==null&&y===f.alternate)break t;y=ts(y),f=ts(f)}y=null}else y=null;p!==null&&xg(d,h,p,y,!1),x!==null&&m!==null&&xg(d,m,x,y,!0)}}e:{if(h=c?Ss(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=AE;else if(ug(h))if(yy)C=PE;else{C=CE;var b=bE}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=RE);if(C&&(C=C(t,c))){xy(d,C,n,u);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Qd(h,"number",h.value)}switch(b=c?Ss(c):window,t){case"focusin":(ug(b)||b.contentEditable==="true")&&(ys=b,df=c,Wo=null);break;case"focusout":Wo=df=ys=null;break;case"mousedown":ff=!0;break;case"contextmenu":case"mouseup":case"dragend":ff=!1,mg(d,n,u);break;case"selectionchange":if(DE)break;case"keydown":case"keyup":mg(d,n,u)}var A;if(ap)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else xs?gy(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(my&&n.locale!=="ko"&&(xs||L!=="onCompositionStart"?L==="onCompositionEnd"&&xs&&(A=py()):(Ki=u,rp="value"in Ki?Ki.value:Ki.textContent,xs=!0)),b=hc(c,L),0<b.length&&(L=new og(L,t,null,n,u),d.push({event:L,listeners:b}),A?L.data=A:(A=vy(n),A!==null&&(L.data=A)))),(A=SE?ME(t,n):EE(t,n))&&(c=hc(c,"onBeforeInput"),0<c.length&&(u=new og("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=A))}Ry(d,e)})}function ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ia(t,n),s!=null&&i.unshift(ua(t,s,r)),s=ia(t,e),s!=null&&i.push(ua(t,s,r))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ia(n,s),l!=null&&o.unshift(ua(n,l,a))):r||(l=ia(n,s),l!=null&&o.push(ua(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OE=/\r\n?/g,kE=/\u0000|\uFFFD/g;function yg(t){return(typeof t=="string"?t:""+t).replace(OE,`
`).replace(kE,"")}function el(t,e,n){if(e=yg(e),yg(t)!==e&&n)throw Error(ce(425))}function pc(){}var hf=null,pf=null;function mf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gf=typeof setTimeout=="function"?setTimeout:void 0,BE=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,zE=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(t){return _g.resolve(null).then(t).catch(VE)}:gf;function VE(t){setTimeout(function(){throw t})}function Gu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),oa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);oa(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var lo=Math.random().toString(36).slice(2),si="__reactFiber$"+lo,da="__reactProps$"+lo,Ri="__reactContainer$"+lo,vf="__reactEvents$"+lo,HE="__reactListeners$"+lo,GE="__reactHandles$"+lo;function Ur(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sg(t);t!==null;){if(n=t[si])return n;t=Sg(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[si]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Kc(t){return t[da]||null}var xf=[],Ms=-1;function mr(t){return{current:t}}function ft(t){0>Ms||(t.current=xf[Ms],xf[Ms]=null,Ms--)}function at(t,e){Ms++,xf[Ms]=t.current,t.current=e}var cr={},Yt=mr(cr),cn=mr(!1),jr=cr;function js(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function mc(){ft(cn),ft(Yt)}function Mg(t,e,n){if(Yt.current!==cr)throw Error(ce(168));at(Yt,e),at(cn,n)}function Ly(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,b1(t)||"Unknown",r));return vt({},n,i)}function gc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,jr=Yt.current,at(Yt,t),at(cn,cn.current),!0}function Eg(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=Ly(t,e,jr),i.__reactInternalMemoizedMergedChildContext=t,ft(cn),ft(Yt),at(Yt,t)):ft(cn),at(cn,n)}var xi=null,Zc=!1,ju=!1;function Ny(t){xi===null?xi=[t]:xi.push(t)}function jE(t){Zc=!0,Ny(t)}function gr(){if(!ju&&xi!==null){ju=!0;var t=0,e=rt;try{var n=xi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,Zc=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),iy(ep,gr),r}finally{rt=e,ju=!1}}return null}var Es=[],ws=0,vc=null,xc=0,Nn=[],Dn=0,Wr=null,_i=1,Si="";function br(t,e){Es[ws++]=xc,Es[ws++]=vc,vc=t,xc=e}function Dy(t,e,n){Nn[Dn++]=_i,Nn[Dn++]=Si,Nn[Dn++]=Wr,Wr=t;var i=_i;t=Si;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var s=32-Qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-Qn(e)+r|n<<r|i,Si=s+t}else _i=1<<s|n<<r|i,Si=t}function cp(t){t.return!==null&&(br(t,1),Dy(t,1,0))}function up(t){for(;t===vc;)vc=Es[--ws],Es[ws]=null,xc=Es[--ws],Es[ws]=null;for(;t===Wr;)Wr=Nn[--Dn],Nn[Dn]=null,Si=Nn[--Dn],Nn[Dn]=null,_i=Nn[--Dn],Nn[Dn]=null}var Sn=null,_n=null,ht=!1,Yn=null;function Iy(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,_n=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:_i,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,_n=null,!0):!1;default:return!1}}function yf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _f(t){if(ht){var e=_n;if(e){var n=e;if(!wg(t,e)){if(yf(t))throw Error(ce(418));e=tr(n.nextSibling);var i=Sn;e&&wg(t,e)?Iy(i,n):(t.flags=t.flags&-4097|2,ht=!1,Sn=t)}}else{if(yf(t))throw Error(ce(418));t.flags=t.flags&-4097|2,ht=!1,Sn=t}}}function Tg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function tl(t){if(t!==Sn)return!1;if(!ht)return Tg(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mf(t.type,t.memoizedProps)),e&&(e=_n)){if(yf(t))throw Uy(),Error(ce(418));for(;e;)Iy(t,e),e=tr(e.nextSibling)}if(Tg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=Sn?tr(t.stateNode.nextSibling):null;return!0}function Uy(){for(var t=_n;t;)t=tr(t.nextSibling)}function Ws(){_n=Sn=null,ht=!1}function dp(t){Yn===null?Yn=[t]:Yn.push(t)}var WE=Ui.ReactCurrentBatchConfig;function _o(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function nl(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ag(t){var e=t._init;return e(t._payload)}function Fy(t){function e(f,g){if(t){var v=f.deletions;v===null?(f.deletions=[g],f.flags|=16):v.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=sr(f,g),f.index=0,f.sibling=null,f}function s(f,g,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<g?(f.flags|=2,g):v):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,v,M){return g===null||g.tag!==6?(g=Zu(v,f.mode,M),g.return=f,g):(g=r(g,v),g.return=f,g)}function l(f,g,v,M){var C=v.type;return C===vs?u(f,g,v.props.children,M,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Wi&&Ag(C)===g.type)?(M=r(g,v.props),M.ref=_o(f,g,v),M.return=f,M):(M=Yl(v.type,v.key,v.props,null,f.mode,M),M.ref=_o(f,g,v),M.return=f,M)}function c(f,g,v,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Qu(v,f.mode,M),g.return=f,g):(g=r(g,v.children||[]),g.return=f,g)}function u(f,g,v,M,C){return g===null||g.tag!==7?(g=Hr(v,f.mode,M,C),g.return=f,g):(g=r(g,v),g.return=f,g)}function d(f,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Zu(""+g,f.mode,v),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wa:return v=Yl(g.type,g.key,g.props,null,f.mode,v),v.ref=_o(f,null,g),v.return=f,v;case gs:return g=Qu(g,f.mode,v),g.return=f,g;case Wi:var M=g._init;return d(f,M(g._payload),v)}if(Do(g)||mo(g))return g=Hr(g,f.mode,v,null),g.return=f,g;nl(f,g)}return null}function h(f,g,v,M){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(f,g,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wa:return v.key===C?l(f,g,v,M):null;case gs:return v.key===C?c(f,g,v,M):null;case Wi:return C=v._init,h(f,g,C(v._payload),M)}if(Do(v)||mo(v))return C!==null?null:u(f,g,v,M,null);nl(f,v)}return null}function p(f,g,v,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(v)||null,a(g,f,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Wa:return f=f.get(M.key===null?v:M.key)||null,l(g,f,M,C);case gs:return f=f.get(M.key===null?v:M.key)||null,c(g,f,M,C);case Wi:var b=M._init;return p(f,g,v,b(M._payload),C)}if(Do(M)||mo(M))return f=f.get(v)||null,u(g,f,M,C,null);nl(g,M)}return null}function x(f,g,v,M){for(var C=null,b=null,A=g,L=g=0,V=null;A!==null&&L<v.length;L++){A.index>L?(V=A,A=null):V=A.sibling;var _=h(f,A,v[L],M);if(_===null){A===null&&(A=V);break}t&&A&&_.alternate===null&&e(f,A),g=s(_,g,L),b===null?C=_:b.sibling=_,b=_,A=V}if(L===v.length)return n(f,A),ht&&br(f,L),C;if(A===null){for(;L<v.length;L++)A=d(f,v[L],M),A!==null&&(g=s(A,g,L),b===null?C=A:b.sibling=A,b=A);return ht&&br(f,L),C}for(A=i(f,A);L<v.length;L++)V=p(A,f,L,v[L],M),V!==null&&(t&&V.alternate!==null&&A.delete(V.key===null?L:V.key),g=s(V,g,L),b===null?C=V:b.sibling=V,b=V);return t&&A.forEach(function(w){return e(f,w)}),ht&&br(f,L),C}function y(f,g,v,M){var C=mo(v);if(typeof C!="function")throw Error(ce(150));if(v=C.call(v),v==null)throw Error(ce(151));for(var b=C=null,A=g,L=g=0,V=null,_=v.next();A!==null&&!_.done;L++,_=v.next()){A.index>L?(V=A,A=null):V=A.sibling;var w=h(f,A,_.value,M);if(w===null){A===null&&(A=V);break}t&&A&&w.alternate===null&&e(f,A),g=s(w,g,L),b===null?C=w:b.sibling=w,b=w,A=V}if(_.done)return n(f,A),ht&&br(f,L),C;if(A===null){for(;!_.done;L++,_=v.next())_=d(f,_.value,M),_!==null&&(g=s(_,g,L),b===null?C=_:b.sibling=_,b=_);return ht&&br(f,L),C}for(A=i(f,A);!_.done;L++,_=v.next())_=p(A,f,L,_.value,M),_!==null&&(t&&_.alternate!==null&&A.delete(_.key===null?L:_.key),g=s(_,g,L),b===null?C=_:b.sibling=_,b=_);return t&&A.forEach(function(W){return e(f,W)}),ht&&br(f,L),C}function m(f,g,v,M){if(typeof v=="object"&&v!==null&&v.type===vs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Wa:e:{for(var C=v.key,b=g;b!==null;){if(b.key===C){if(C=v.type,C===vs){if(b.tag===7){n(f,b.sibling),g=r(b,v.props.children),g.return=f,f=g;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Wi&&Ag(C)===b.type){n(f,b.sibling),g=r(b,v.props),g.ref=_o(f,b,v),g.return=f,f=g;break e}n(f,b);break}else e(f,b);b=b.sibling}v.type===vs?(g=Hr(v.props.children,f.mode,M,v.key),g.return=f,f=g):(M=Yl(v.type,v.key,v.props,null,f.mode,M),M.ref=_o(f,g,v),M.return=f,f=M)}return o(f);case gs:e:{for(b=v.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(f,g.sibling),g=r(g,v.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=Qu(v,f.mode,M),g.return=f,f=g}return o(f);case Wi:return b=v._init,m(f,g,b(v._payload),M)}if(Do(v))return x(f,g,v,M);if(mo(v))return y(f,g,v,M);nl(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,v),g.return=f,f=g):(n(f,g),g=Zu(v,f.mode,M),g.return=f,f=g),o(f)):n(f,g)}return m}var Xs=Fy(!0),Oy=Fy(!1),yc=mr(null),_c=null,Ts=null,fp=null;function hp(){fp=Ts=_c=null}function pp(t){var e=yc.current;ft(yc),t._currentValue=e}function Sf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){_c=t,fp=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(fp!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(_c===null)throw Error(ce(308));Ts=t,_c.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var Fr=null;function mp(t){Fr===null?Fr=[t]:Fr.push(t)}function ky(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,mp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function gp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function By(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,mp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function Hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tp(t,n)}}function bg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sc(t,e,n,i){var r=t.updateQueue;Xi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(h=e,p=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=vt({},d,h);break e;case 2:Xi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=d}}function Cg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var ba={},ai=mr(ba),fa=mr(ba),ha=mr(ba);function Or(t){if(t===ba)throw Error(ce(174));return t}function vp(t,e){switch(at(ha,e),at(fa,t),at(ai,ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ef(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ef(e,t)}ft(ai),at(ai,e)}function $s(){ft(ai),ft(fa),ft(ha)}function zy(t){Or(ha.current);var e=Or(ai.current),n=ef(e,t.type);e!==n&&(at(fa,t),at(ai,n))}function xp(t){fa.current===t&&(ft(ai),ft(fa))}var pt=mr(0);function Mc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wu=[];function yp(){for(var t=0;t<Wu.length;t++)Wu[t]._workInProgressVersionPrimary=null;Wu.length=0}var Gl=Ui.ReactCurrentDispatcher,Xu=Ui.ReactCurrentBatchConfig,Xr=0,gt=null,Rt=null,Ut=null,Ec=!1,Xo=!1,pa=0,XE=0;function Ht(){throw Error(ce(321))}function _p(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function Sp(t,e,n,i,r,s){if(Xr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gl.current=t===null||t.memoizedState===null?KE:ZE,t=n(i,r),Xo){s=0;do{if(Xo=!1,pa=0,25<=s)throw Error(ce(301));s+=1,Ut=Rt=null,e.updateQueue=null,Gl.current=QE,t=n(i,r)}while(Xo)}if(Gl.current=wc,e=Rt!==null&&Rt.next!==null,Xr=0,Ut=Rt=gt=null,Ec=!1,e)throw Error(ce(300));return t}function Mp(){var t=pa!==0;return pa=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?gt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Bn(){if(Rt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Ut===null?gt.memoizedState:Ut.next;if(e!==null)Ut=e,Rt=t;else{if(t===null)throw Error(ce(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ut===null?gt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function ma(t,e){return typeof e=="function"?e(t):e}function $u(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Xr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,gt.lanes|=u,$r|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ei(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,$r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ei(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Vy(){}function Hy(t,e){var n=gt,i=Bn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,Ep(Wy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,ga(9,jy.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(ce(349));Xr&30||Gy(n,e,r)}return r}function Gy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jy(t,e,n,i){e.value=n,e.getSnapshot=i,Xy(e)&&$y(t)}function Wy(t,e,n){return n(function(){Xy(e)&&$y(t)})}function Xy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function $y(t){var e=Pi(t,1);e!==null&&Jn(e,t,1,-1)}function Rg(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},e.queue=t,t=t.dispatch=qE.bind(null,gt,t),[e.memoizedState,t]}function ga(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Yy(){return Bn().memoizedState}function jl(t,e,n,i){var r=ni();gt.flags|=t,r.memoizedState=ga(1|e,n,void 0,i===void 0?null:i)}function Qc(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&_p(i,o.deps)){r.memoizedState=ga(e,n,s,i);return}}gt.flags|=t,r.memoizedState=ga(1|e,n,s,i)}function Pg(t,e){return jl(8390656,8,t,e)}function Ep(t,e){return Qc(2048,8,t,e)}function qy(t,e){return Qc(4,2,t,e)}function Ky(t,e){return Qc(4,4,t,e)}function Zy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qy(t,e,n){return n=n!=null?n.concat([t]):null,Qc(4,4,Zy.bind(null,e,t),n)}function wp(){}function Jy(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_p(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function e_(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_p(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function t_(t,e,n){return Xr&21?(ei(n,e)||(n=oy(),gt.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function $E(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Xu.transition;Xu.transition={};try{t(!1),e()}finally{rt=n,Xu.transition=i}}function n_(){return Bn().memoizedState}function YE(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},i_(t))r_(e,n);else if(n=ky(t,e,n,i),n!==null){var r=Zt();Jn(n,t,i,r),s_(n,e,i)}}function qE(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(i_(t))r_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ei(a,o)){var l=e.interleaved;l===null?(r.next=r,mp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ky(t,e,r,i),n!==null&&(r=Zt(),Jn(n,t,i,r),s_(n,e,i))}}function i_(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function r_(t,e){Xo=Ec=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function s_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tp(t,n)}}var wc={readContext:kn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},KE={readContext:kn,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:Pg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jl(4194308,4,Zy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return jl(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=YE.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:Rg,useDebugValue:wp,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=Rg(!1),e=t[0];return t=$E.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=ni();if(ht){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Ot===null)throw Error(ce(349));Xr&30||Gy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Pg(Wy.bind(null,i,s,t),[t]),i.flags|=2048,ga(9,jy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=Ot.identifierPrefix;if(ht){var n=Si,i=_i;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZE={readContext:kn,useCallback:Jy,useContext:kn,useEffect:Ep,useImperativeHandle:Qy,useInsertionEffect:qy,useLayoutEffect:Ky,useMemo:e_,useReducer:$u,useRef:Yy,useState:function(){return $u(ma)},useDebugValue:wp,useDeferredValue:function(t){var e=Bn();return t_(e,Rt.memoizedState,t)},useTransition:function(){var t=$u(ma)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Vy,useSyncExternalStore:Hy,useId:n_,unstable_isNewReconciler:!1},QE={readContext:kn,useCallback:Jy,useContext:kn,useEffect:Ep,useImperativeHandle:Qy,useInsertionEffect:qy,useLayoutEffect:Ky,useMemo:e_,useReducer:Yu,useRef:Yy,useState:function(){return Yu(ma)},useDebugValue:wp,useDeferredValue:function(t){var e=Bn();return Rt===null?e.memoizedState=t:t_(e,Rt.memoizedState,t)},useTransition:function(){var t=Yu(ma)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Vy,useSyncExternalStore:Hy,useId:n_,unstable_isNewReconciler:!1};function Xn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jc={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=rr(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(Jn(e,t,r,i),Hl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=rr(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(Jn(e,t,r,i),Hl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=rr(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(Jn(e,t,i,n),Hl(e,t,i))}};function Lg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!la(n,i)||!la(r,s):!0}function o_(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=un(e)?jr:Yt.current,i=e.contextTypes,s=(i=i!=null)?js(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ng(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jc.enqueueReplaceState(e,e.state,null)}function Ef(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},gp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=un(e)?jr:Yt.current,r.context=js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jc.enqueueReplaceState(r,r.state,null),Sc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",i=e;do n+=A1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JE=typeof WeakMap=="function"?WeakMap:Map;function a_(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ac||(Ac=!0,If=i),wf(t,e)},n}function l_(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){wf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wf(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new JE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=hw.bind(null,t,e,n),e.then(t,t))}function Ig(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ug(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var ew=Ui.ReactCurrentOwner,ln=!1;function Kt(t,e,n,i){e.child=t===null?Oy(e,null,n,i):Xs(e,t.child,n,i)}function Fg(t,e,n,i,r){n=n.render;var s=e.ref;return ks(e,r),i=Sp(t,e,n,i,s,r),n=Mp(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(ht&&n&&cp(e),e.flags|=1,Kt(t,e,i,r),e.child)}function Og(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Np(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,c_(t,e,s,i,r)):(t=Yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:la,n(o,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function c_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(la(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Li(t,e,r)}return Tf(t,e,n,i,r)}function u_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(bs,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(bs,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(bs,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(bs,yn),yn|=i;return Kt(t,e,r,n),e.child}function d_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tf(t,e,n,i,r){var s=un(n)?jr:Yt.current;return s=js(e,s),ks(e,r),n=Sp(t,e,n,i,s,r),i=Mp(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(ht&&i&&cp(e),e.flags|=1,Kt(t,e,n,r),e.child)}function kg(t,e,n,i,r){if(un(n)){var s=!0;gc(e)}else s=!1;if(ks(e,r),e.stateNode===null)Wl(t,e),o_(e,n,i),Ef(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=un(n)?jr:Yt.current,c=js(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Ng(e,o,i,c),Xi=!1;var h=e.memoizedState;o.state=h,Sc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||cn.current||Xi?(typeof u=="function"&&(Mf(e,n,u,i),l=e.memoizedState),(a=Xi||Lg(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,By(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Xn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=un(n)?jr:Yt.current,l=js(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Ng(e,o,i,l),Xi=!1,h=e.memoizedState,o.state=h,Sc(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||cn.current||Xi?(typeof p=="function"&&(Mf(e,n,p,i),x=e.memoizedState),(c=Xi||Lg(e,n,c,i,h,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Af(t,e,n,i,s,r)}function Af(t,e,n,i,r,s){d_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Eg(e,n,!1),Li(t,e,s);i=e.stateNode,ew.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&Eg(e,n,!0),e.child}function f_(t){var e=t.stateNode;e.pendingContext?Mg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mg(t,e.context,!1),vp(t,e.containerInfo)}function Bg(t,e,n,i,r){return Ws(),dp(r),e.flags|=256,Kt(t,e,n,i),e.child}var bf={dehydrated:null,treeContext:null,retryLane:0};function Cf(t){return{baseLanes:t,cachePool:null,transitions:null}}function h_(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(pt,r&1),t===null)return _f(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nu(o,i,0,null),t=Hr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cf(n),e.memoizedState=bf,t):Tp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return tw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Hr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Cf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bf,i}return s=t.child,t=s.sibling,i=sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Tp(t,e){return e=nu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function il(t,e,n,i){return i!==null&&dp(i),Xs(e,t.child,null,n),t=Tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=qu(Error(ce(422))),il(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nu({mode:"visible",children:i.children},r,0,null),s=Hr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xs(e,t.child,null,o),e.child.memoizedState=Cf(o),e.memoizedState=bf,s);if(!(e.mode&1))return il(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=qu(s,i,void 0),il(t,e,o,i)}if(a=(o&t.childLanes)!==0,ln||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),Jn(i,t,r,-1))}return Lp(),i=qu(Error(ce(421))),il(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=pw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_n=tr(r.nextSibling),Sn=e,ht=!0,Yn=null,t!==null&&(Nn[Dn++]=_i,Nn[Dn++]=Si,Nn[Dn++]=Wr,_i=t.id,Si=t.overflow,Wr=e),e=Tp(e,i.children),e.flags|=4096,e)}function zg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Sf(t.return,e,n)}function Ku(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function p_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zg(t,n,e);else if(t.tag===19)zg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Mc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ku(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Mc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ku(e,!0,n,null,s);break;case"together":Ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nw(t,e,n){switch(e.tag){case 3:f_(e),Ws();break;case 5:zy(e);break;case 1:un(e.type)&&gc(e);break;case 4:vp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(yc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?h_(t,e,n):(at(pt,pt.current&1),t=Li(t,e,n),t!==null?t.sibling:null);at(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return p_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,u_(t,e,n)}return Li(t,e,n)}var m_,Rf,g_,v_;m_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rf=function(){};g_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Or(ai.current);var s=null;switch(n){case"input":r=Kd(t,r),i=Kd(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Jd(t,r),i=Jd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=pc)}tf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ta.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ta.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};v_=function(t,e,n,i){n!==i&&(e.flags|=4)};function So(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function iw(t,e,n){var i=e.pendingProps;switch(up(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return un(e.type)&&mc(),Gt(e),null;case 3:return i=e.stateNode,$s(),ft(cn),ft(Yt),yp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(Of(Yn),Yn=null))),Rf(t,e),Gt(e),null;case 5:xp(e);var r=Or(ha.current);if(n=e.type,t!==null&&e.stateNode!=null)g_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Gt(e),null}if(t=Or(ai.current),tl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[da]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<Uo.length;r++)ut(Uo[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":qm(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Zm(i,s),ut("invalid",i)}tf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&el(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&el(i.textContent,a,t),r=["children",""+a]):ta.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":Xa(i),Km(i,s,!0);break;case"textarea":Xa(i),Qm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=pc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[si]=e,t[da]=i,m_(t,e,!1,!1),e.stateNode=t;e:{switch(o=nf(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<Uo.length;r++)ut(Uo[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":qm(t,i),r=Kd(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Zm(t,i),r=Jd(t,i),ut("invalid",t);break;default:r=i}tf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Yx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&na(t,l):typeof l=="number"&&na(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&qh(t,s,l,o))}switch(n){case"input":Xa(t),Km(t,i,!1);break;case"textarea":Xa(t),Qm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Is(t,!!i.multiple,s,!1):i.defaultValue!=null&&Is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=pc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)v_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Or(ha.current),Or(ai.current),tl(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:el(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&el(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return Gt(e),null;case 13:if(ft(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&_n!==null&&e.mode&1&&!(e.flags&128))Uy(),Ws(),e.flags|=98560,s=!1;else if(s=tl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[si]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else Yn!==null&&(Of(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Pt===0&&(Pt=3):Lp())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return $s(),Rf(t,e),t===null&&ca(e.stateNode.containerInfo),Gt(e),null;case 10:return pp(e.type._context),Gt(e),null;case 17:return un(e.type)&&mc(),Gt(e),null;case 19:if(ft(pt),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)So(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Mc(t),o!==null){for(e.flags|=128,So(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>qs&&(e.flags|=128,i=!0,So(s,!1),e.lanes=4194304)}else{if(!i)if(t=Mc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),So(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Gt(e),null}else 2*wt()-s.renderingStartTime>qs&&n!==1073741824&&(e.flags|=128,i=!0,So(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=pt.current,at(pt,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return Pp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function rw(t,e){switch(up(e),e.tag){case 1:return un(e.type)&&mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),ft(cn),ft(Yt),yp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xp(e),null;case 13:if(ft(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(pt),null;case 4:return $s(),null;case 10:return pp(e.type._context),null;case 22:case 23:return Pp(),null;case 24:return null;default:return null}}var rl=!1,$t=!1,sw=typeof WeakSet=="function"?WeakSet:Set,Se=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function Pf(t,e,n){try{n()}catch(i){_t(t,e,i)}}var Vg=!1;function ow(t,e){if(hf=dc,t=My(),lp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pf={focusedElem:t,selectionRange:n},dc=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,m=x.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Xn(e.type,y),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(M){_t(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return x=Vg,Vg=!1,x}function $o(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Pf(e,n,s)}r=r.next}while(r!==i)}}function eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Lf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function x_(t){var e=t.alternate;e!==null&&(t.alternate=null,x_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[da],delete e[vf],delete e[HE],delete e[GE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function y_(t){return t.tag===5||t.tag===3||t.tag===4}function Hg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||y_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pc));else if(i!==4&&(t=t.child,t!==null))for(Nf(t,e,n),t=t.sibling;t!==null;)Nf(t,e,n),t=t.sibling}function Df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Df(t,e,n),t=t.sibling;t!==null;)Df(t,e,n),t=t.sibling}var Bt=null,$n=!1;function Oi(t,e,n){for(n=n.child;n!==null;)__(t,e,n),n=n.sibling}function __(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(Xc,n)}catch{}switch(n.tag){case 5:$t||As(n,e);case 6:var i=Bt,r=$n;Bt=null,Oi(t,e,n),Bt=i,$n=r,Bt!==null&&($n?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&($n?(t=Bt,n=n.stateNode,t.nodeType===8?Gu(t.parentNode,n):t.nodeType===1&&Gu(t,n),oa(t)):Gu(Bt,n.stateNode));break;case 4:i=Bt,r=$n,Bt=n.stateNode.containerInfo,$n=!0,Oi(t,e,n),Bt=i,$n=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pf(n,e,o),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!$t&&(As(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){_t(n,e,a)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Oi(t,e,n),$t=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function Gg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sw),e.forEach(function(i){var r=mw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,$n=!1;break e;case 3:Bt=a.stateNode.containerInfo,$n=!0;break e;case 4:Bt=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(Bt===null)throw Error(ce(160));__(s,o,r),Bt=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){_t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)S_(e,t),e=e.sibling}function S_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),ti(t),i&4){try{$o(3,t,t.return),eu(3,t)}catch(y){_t(t,t.return,y)}try{$o(5,t,t.return)}catch(y){_t(t,t.return,y)}}break;case 1:Vn(e,t),ti(t),i&512&&n!==null&&As(n,n.return);break;case 5:if(Vn(e,t),ti(t),i&512&&n!==null&&As(n,n.return),t.flags&32){var r=t.stateNode;try{na(r,"")}catch(y){_t(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Gx(r,s),nf(a,o);var c=nf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Yx(r,d):u==="dangerouslySetInnerHTML"?Xx(r,d):u==="children"?na(r,d):qh(r,u,d,c)}switch(a){case"input":Zd(r,s);break;case"textarea":jx(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Is(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Is(r,!!s.multiple,s.defaultValue,!0):Is(r,!!s.multiple,s.multiple?[]:"",!1))}r[da]=s}catch(y){_t(t,t.return,y)}}break;case 6:if(Vn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){_t(t,t.return,y)}}break;case 3:if(Vn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{oa(e.containerInfo)}catch(y){_t(t,t.return,y)}break;case 4:Vn(e,t),ti(t);break;case 13:Vn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Cp=wt())),i&4&&Gg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||u,Vn(e,t),$t=c):Vn(e,t),ti(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Se=t,u=t.child;u!==null;){for(d=Se=u;Se!==null;){switch(h=Se,p=h.child,h.tag){case 0:case 11:case 14:case 15:$o(4,h,h.return);break;case 1:As(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){_t(i,n,y)}}break;case 5:As(h,h.return);break;case 22:if(h.memoizedState!==null){Wg(d);continue}}p!==null?(p.return=h,Se=p):Wg(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$x("display",o))}catch(y){_t(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){_t(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Vn(e,t),ti(t),i&4&&Gg(t);break;case 21:break;default:Vn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(y_(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(na(r,""),i.flags&=-33);var s=Hg(t);Df(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Hg(t);Nf(t,a,o);break;default:throw Error(ce(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function aw(t,e,n){Se=t,M_(t)}function M_(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||rl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=rl;var c=$t;if(rl=o,($t=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?Xg(r):l!==null?(l.return=o,Se=l):Xg(r);for(;s!==null;)Se=s,M_(s),s=s.sibling;Se=r,rl=a,$t=c}jg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):jg(t)}}function jg(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&oa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}$t||e.flags&512&&Lf(e)}catch(h){_t(e,e.return,h)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Wg(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Xg(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{eu(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{Lf(e)}catch(l){_t(e,s,l)}break;case 5:var o=e.return;try{Lf(e)}catch(l){_t(e,o,l)}}}catch(l){_t(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var lw=Math.ceil,Tc=Ui.ReactCurrentDispatcher,Ap=Ui.ReactCurrentOwner,On=Ui.ReactCurrentBatchConfig,Ze=0,Ot=null,Ct=null,zt=0,yn=0,bs=mr(0),Pt=0,va=null,$r=0,tu=0,bp=0,Yo=null,on=null,Cp=0,qs=1/0,vi=null,Ac=!1,If=null,ir=null,sl=!1,Zi=null,bc=0,qo=0,Uf=null,Xl=-1,$l=0;function Zt(){return Ze&6?wt():Xl!==-1?Xl:Xl=wt()}function rr(t){return t.mode&1?Ze&2&&zt!==0?zt&-zt:WE.transition!==null?($l===0&&($l=oy()),$l):(t=rt,t!==0||(t=window.event,t=t===void 0?16:hy(t.type)),t):1}function Jn(t,e,n,i){if(50<qo)throw qo=0,Uf=null,Error(ce(185));wa(t,n,i),(!(Ze&2)||t!==Ot)&&(t===Ot&&(!(Ze&2)&&(tu|=n),Pt===4&&Yi(t,zt)),dn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(qs=wt()+500,Zc&&gr()))}function dn(t,e){var n=t.callbackNode;W1(t,e);var i=uc(t,t===Ot?zt:0);if(i===0)n!==null&&tg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&tg(n),e===1)t.tag===0?jE($g.bind(null,t)):Ny($g.bind(null,t)),zE(function(){!(Ze&6)&&gr()}),n=null;else{switch(ay(i)){case 1:n=ep;break;case 4:n=ry;break;case 16:n=cc;break;case 536870912:n=sy;break;default:n=cc}n=P_(n,E_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function E_(t,e){if(Xl=-1,$l=0,Ze&6)throw Error(ce(327));var n=t.callbackNode;if(Bs()&&t.callbackNode!==n)return null;var i=uc(t,t===Ot?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Cc(t,i);else{e=i;var r=Ze;Ze|=2;var s=T_();(Ot!==t||zt!==e)&&(vi=null,qs=wt()+500,Vr(t,e));do try{dw();break}catch(a){w_(t,a)}while(!0);hp(),Tc.current=s,Ze=r,Ct!==null?e=0:(Ot=null,zt=0,e=Pt)}if(e!==0){if(e===2&&(r=lf(t),r!==0&&(i=r,e=Ff(t,r))),e===1)throw n=va,Vr(t,0),Yi(t,i),dn(t,wt()),n;if(e===6)Yi(t,i);else{if(r=t.current.alternate,!(i&30)&&!cw(r)&&(e=Cc(t,i),e===2&&(s=lf(t),s!==0&&(i=s,e=Ff(t,s))),e===1))throw n=va,Vr(t,0),Yi(t,i),dn(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Cr(t,on,vi);break;case 3:if(Yi(t,i),(i&130023424)===i&&(e=Cp+500-wt(),10<e)){if(uc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=gf(Cr.bind(null,t,on,vi),e);break}Cr(t,on,vi);break;case 4:if(Yi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*lw(i/1960))-i,10<i){t.timeoutHandle=gf(Cr.bind(null,t,on,vi),i);break}Cr(t,on,vi);break;case 5:Cr(t,on,vi);break;default:throw Error(ce(329))}}}return dn(t,wt()),t.callbackNode===n?E_.bind(null,t):null}function Ff(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=Cc(t,e),t!==2&&(e=on,on=n,e!==null&&Of(e)),t}function Of(t){on===null?on=t:on.push.apply(on,t)}function cw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yi(t,e){for(e&=~bp,e&=~tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function $g(t){if(Ze&6)throw Error(ce(327));Bs();var e=uc(t,0);if(!(e&1))return dn(t,wt()),null;var n=Cc(t,e);if(t.tag!==0&&n===2){var i=lf(t);i!==0&&(e=i,n=Ff(t,i))}if(n===1)throw n=va,Vr(t,0),Yi(t,e),dn(t,wt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,on,vi),dn(t,wt()),null}function Rp(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(qs=wt()+500,Zc&&gr())}}function Yr(t){Zi!==null&&Zi.tag===0&&!(Ze&6)&&Bs();var e=Ze;Ze|=1;var n=On.transition,i=rt;try{if(On.transition=null,rt=1,t)return t()}finally{rt=i,On.transition=n,Ze=e,!(Ze&6)&&gr()}}function Pp(){yn=bs.current,ft(bs)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,BE(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(up(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&mc();break;case 3:$s(),ft(cn),ft(Yt),yp();break;case 5:xp(i);break;case 4:$s();break;case 13:ft(pt);break;case 19:ft(pt);break;case 10:pp(i.type._context);break;case 22:case 23:Pp()}n=n.return}if(Ot=t,Ct=t=sr(t.current,null),zt=yn=e,Pt=0,va=null,bp=tu=$r=0,on=Yo=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Fr=null}return t}function w_(t,e){do{var n=Ct;try{if(hp(),Gl.current=wc,Ec){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ec=!1}if(Xr=0,Ut=Rt=gt=null,Xo=!1,pa=0,Ap.current=null,n===null||n.return===null){Pt=1,va=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Ig(o);if(p!==null){p.flags&=-257,Ug(p,o,a,s,e),p.mode&1&&Dg(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){Dg(s,c,e),Lp();break e}l=Error(ce(426))}}else if(ht&&a.mode&1){var m=Ig(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ug(m,o,a,s,e),dp(Ys(l,a));break e}}s=l=Ys(l,a),Pt!==4&&(Pt=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=a_(s,l,e);bg(s,f);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ir===null||!ir.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=l_(s,a,e);bg(s,M);break e}}s=s.return}while(s!==null)}b_(n)}catch(C){e=C,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function T_(){var t=Tc.current;return Tc.current=wc,t===null?wc:t}function Lp(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ot===null||!($r&268435455)&&!(tu&268435455)||Yi(Ot,zt)}function Cc(t,e){var n=Ze;Ze|=2;var i=T_();(Ot!==t||zt!==e)&&(vi=null,Vr(t,e));do try{uw();break}catch(r){w_(t,r)}while(!0);if(hp(),Ze=n,Tc.current=i,Ct!==null)throw Error(ce(261));return Ot=null,zt=0,Pt}function uw(){for(;Ct!==null;)A_(Ct)}function dw(){for(;Ct!==null&&!F1();)A_(Ct)}function A_(t){var e=R_(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?b_(t):Ct=e,Ap.current=null}function b_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rw(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Ct=null;return}}else if(n=iw(n,e,yn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Pt===0&&(Pt=5)}function Cr(t,e,n){var i=rt,r=On.transition;try{On.transition=null,rt=1,fw(t,e,n,i)}finally{On.transition=r,rt=i}return null}function fw(t,e,n,i){do Bs();while(Zi!==null);if(Ze&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(X1(t,s),t===Ot&&(Ct=Ot=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,P_(cc,function(){return Bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var o=rt;rt=1;var a=Ze;Ze|=4,Ap.current=null,ow(t,n),S_(n,t),NE(pf),dc=!!hf,pf=hf=null,t.current=n,aw(n),O1(),Ze=a,rt=o,On.transition=s}else t.current=n;if(sl&&(sl=!1,Zi=t,bc=r),s=t.pendingLanes,s===0&&(ir=null),z1(n.stateNode),dn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ac)throw Ac=!1,t=If,If=null,t;return bc&1&&t.tag!==0&&Bs(),s=t.pendingLanes,s&1?t===Uf?qo++:(qo=0,Uf=t):qo=0,gr(),null}function Bs(){if(Zi!==null){var t=ay(bc),e=On.transition,n=rt;try{if(On.transition=null,rt=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,bc=0,Ze&6)throw Error(ce(331));var r=Ze;for(Ze|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var u=Se;switch(u.tag){case 0:case 11:case 15:$o(8,u,s)}var d=u.child;if(d!==null)d.return=u,Se=d;else for(;Se!==null;){u=Se;var h=u.sibling,p=u.return;if(x_(u),u===c){Se=null;break}if(h!==null){h.return=p,Se=h;break}Se=p}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$o(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Se=f;break e}Se=s.return}}var g=t.current;for(Se=g;Se!==null;){o=Se;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Se=v;else e:for(o=g;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:eu(9,a)}}catch(C){_t(a,a.return,C)}if(a===o){Se=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Se=M;break e}Se=a.return}}if(Ze=r,gr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(Xc,t)}catch{}i=!0}return i}finally{rt=n,On.transition=e}}return!1}function Yg(t,e,n){e=Ys(n,e),e=a_(t,e,1),t=nr(t,e,1),e=Zt(),t!==null&&(wa(t,1,e),dn(t,e))}function _t(t,e,n){if(t.tag===3)Yg(t,t,n);else for(;e!==null;){if(e.tag===3){Yg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=Ys(n,t),t=l_(e,t,1),e=nr(e,t,1),t=Zt(),e!==null&&(wa(e,1,t),dn(e,t));break}}e=e.return}}function hw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(zt&n)===n&&(Pt===4||Pt===3&&(zt&130023424)===zt&&500>wt()-Cp?Vr(t,0):bp|=n),dn(t,e)}function C_(t,e){e===0&&(t.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var n=Zt();t=Pi(t,e),t!==null&&(wa(t,e,n),dn(t,n))}function pw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),C_(t,n)}function mw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),C_(t,n)}var R_;R_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,nw(t,e,n);ln=!!(t.flags&131072)}else ln=!1,ht&&e.flags&1048576&&Dy(e,xc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wl(t,e),t=e.pendingProps;var r=js(e,Yt.current);ks(e,n),r=Sp(null,e,i,t,r,n);var s=Mp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,gc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gp(e),r.updater=Jc,e.stateNode=r,r._reactInternals=e,Ef(e,i,t,n),e=Af(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&cp(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Wl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=vw(i),t=Xn(i,t),r){case 0:e=Tf(null,e,i,t,n);break e;case 1:e=kg(null,e,i,t,n);break e;case 11:e=Fg(null,e,i,t,n);break e;case 14:e=Og(null,e,i,Xn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Tf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),kg(t,e,i,r,n);case 3:e:{if(f_(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,By(t,e),Sc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(ce(423)),e),e=Bg(t,e,i,n,r);break e}else if(i!==r){r=Ys(Error(ce(424)),e),e=Bg(t,e,i,n,r);break e}else for(_n=tr(e.stateNode.containerInfo.firstChild),Sn=e,ht=!0,Yn=null,n=Oy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),i===r){e=Li(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return zy(e),t===null&&_f(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,mf(i,r)?o=null:s!==null&&mf(i,s)&&(e.flags|=32),d_(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&_f(e),null;case 13:return h_(t,e,n);case 4:return vp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xs(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Fg(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,at(yc,i._currentValue),i._currentValue=o,s!==null)if(ei(s.value,o)){if(s.children===r.children&&!cn.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ti(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ks(e,n),r=kn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),Og(t,e,i,r,n);case 15:return c_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Wl(t,e),e.tag=1,un(i)?(t=!0,gc(e)):t=!1,ks(e,n),o_(e,i,r),Ef(e,i,r,n),Af(null,e,i,!0,t,n);case 19:return p_(t,e,n);case 22:return u_(t,e,n)}throw Error(ce(156,e.tag))};function P_(t,e){return iy(t,e)}function gw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new gw(t,e,n,i)}function Np(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vw(t){if(typeof t=="function")return Np(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zh)return 11;if(t===Qh)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Np(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vs:return Hr(n.children,r,s,e);case Kh:o=8,r|=8;break;case Xd:return t=Un(12,n,e,r|2),t.elementType=Xd,t.lanes=s,t;case $d:return t=Un(13,n,e,r),t.elementType=$d,t.lanes=s,t;case Yd:return t=Un(19,n,e,r),t.elementType=Yd,t.lanes=s,t;case zx:return nu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kx:o=10;break e;case Bx:o=9;break e;case Zh:o=11;break e;case Qh:o=14;break e;case Wi:o=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Un(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Hr(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function nu(t,e,n,i){return t=Un(22,t,i,e),t.elementType=zx,t.lanes=n,t.stateNode={isHidden:!1},t}function Zu(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function Qu(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nu(0),this.expirationTimes=Nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Dp(t,e,n,i,r,s,o,a,l){return t=new xw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gp(s),t}function yw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function L_(t){if(!t)return cr;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(un(n))return Ly(t,n,e)}return e}function N_(t,e,n,i,r,s,o,a,l){return t=Dp(n,i,!0,t,r,s,o,a,l),t.context=L_(null),n=t.current,i=Zt(),r=rr(n),s=Ti(i,r),s.callback=e??null,nr(n,s,r),t.current.lanes=r,wa(t,r,i),dn(t,i),t}function iu(t,e,n,i){var r=e.current,s=Zt(),o=rr(r);return n=L_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,o),t!==null&&(Jn(t,r,o,s),Hl(t,r,o)),o}function Rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ip(t,e){qg(t,e),(t=t.alternate)&&qg(t,e)}function _w(){return null}var D_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Up(t){this._internalRoot=t}ru.prototype.render=Up.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));iu(t,e,null,null)};ru.prototype.unmount=Up.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){iu(null,t,null,null)}),e[Ri]=null}};function ru(t){this._internalRoot=t}ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=uy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$i.length&&e!==0&&e<$i[n].priority;n++);$i.splice(n,0,t),n===0&&fy(t)}};function Fp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kg(){}function Sw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Rc(o);s.call(c)}}var o=N_(e,i,t,0,null,!1,!1,"",Kg);return t._reactRootContainer=o,t[Ri]=o.current,ca(t.nodeType===8?t.parentNode:t),Yr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Rc(l);a.call(c)}}var l=Dp(t,0,!1,null,null,!1,!1,"",Kg);return t._reactRootContainer=l,t[Ri]=l.current,ca(t.nodeType===8?t.parentNode:t),Yr(function(){iu(e,l,n,i)}),l}function ou(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Rc(o);a.call(l)}}iu(e,o,t,r)}else o=Sw(n,e,t,r,i);return Rc(o)}ly=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Io(e.pendingLanes);n!==0&&(tp(e,n|1),dn(e,wt()),!(Ze&6)&&(qs=wt()+500,gr()))}break;case 13:Yr(function(){var i=Pi(t,1);if(i!==null){var r=Zt();Jn(i,t,1,r)}}),Ip(t,1)}};np=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=Zt();Jn(e,t,134217728,n)}Ip(t,134217728)}};cy=function(t){if(t.tag===13){var e=rr(t),n=Pi(t,e);if(n!==null){var i=Zt();Jn(n,t,e,i)}Ip(t,e)}};uy=function(){return rt};dy=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};sf=function(t,e,n){switch(e){case"input":if(Zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kc(i);if(!r)throw Error(ce(90));Hx(i),Zd(i,r)}}}break;case"textarea":jx(t,n);break;case"select":e=n.value,e!=null&&Is(t,!!n.multiple,e,!1)}};Zx=Rp;Qx=Yr;var Mw={usingClientEntryPoint:!1,Events:[Aa,Ss,Kc,qx,Kx,Rp]},Mo={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ew={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ty(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||_w,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{Xc=ol.inject(Ew),oi=ol}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mw;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fp(e))throw Error(ce(200));return yw(t,e,null,n)};An.createRoot=function(t,e){if(!Fp(t))throw Error(ce(299));var n=!1,i="",r=D_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Dp(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,ca(t.nodeType===8?t.parentNode:t),new Up(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=ty(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Yr(t)};An.hydrate=function(t,e,n){if(!su(e))throw Error(ce(200));return ou(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!Fp(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=D_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=N_(e,null,t,1,n??null,r,!1,s,o),t[Ri]=e.current,ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ru(e)};An.render=function(t,e,n){if(!su(e))throw Error(ce(200));return ou(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!su(t))throw Error(ce(40));return t._reactRootContainer?(Yr(function(){ou(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};An.unstable_batchedUpdates=Rp;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!su(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return ou(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function I_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I_)}catch(t){console.error(t)}}I_(),Ix.exports=An;var ww=Ix.exports,Zg=ww;jd.createRoot=Zg.createRoot,jd.hydrateRoot=Zg.hydrateRoot;const Op=ne.createContext({});function au(t){const e=ne.useRef(null);return e.current===null&&(e.current=t()),e.current}const lu=ne.createContext(null),Ca=ne.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class Tw extends ne.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Aw({children:t,isPresent:e}){const n=ne.useId(),i=ne.useRef(null),r=ne.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=ne.useContext(Ca);return ne.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),S.jsx(Tw,{isPresent:e,childRef:i,sizeRef:r,children:ne.cloneElement(t,{ref:i})})}const bw=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=au(Cw),l=ne.useId(),c=ne.useCallback(d=>{a.set(d,!0);for(const h of a.values())if(!h)return;i&&i()},[a,i]),u=ne.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:d=>(a.set(d,!1),()=>a.delete(d))}),s?[Math.random(),c]:[n,c]);return ne.useMemo(()=>{a.forEach((d,h)=>a.set(h,!1))},[n]),ne.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=S.jsx(Aw,{isPresent:n,children:t})),S.jsx(lu.Provider,{value:u,children:t})};function Cw(){return new Map}function U_(t=!0){const e=ne.useContext(lu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=ne.useId();ne.useEffect(()=>{t&&r(s)},[t]);const o=ne.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const al=t=>t.key||"";function Qg(t){const e=[];return ne.Children.forEach(t,n=>{ne.isValidElement(n)&&e.push(n)}),e}const kp=typeof window<"u",Bp=kp?ne.useLayoutEffect:ne.useEffect,cu=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=U_(o),c=ne.useMemo(()=>Qg(t),[t]),u=o&&!a?[]:c.map(al),d=ne.useRef(!0),h=ne.useRef(c),p=au(()=>new Map),[x,y]=ne.useState(c),[m,f]=ne.useState(c);Bp(()=>{d.current=!1,h.current=c;for(let M=0;M<m.length;M++){const C=al(m[M]);u.includes(C)?p.delete(C):p.get(C)!==!0&&p.set(C,!1)}},[m,u.length,u.join("-")]);const g=[];if(c!==x){let M=[...c];for(let C=0;C<m.length;C++){const b=m[C],A=al(b);u.includes(A)||(M.splice(C,0,b),g.push(b))}s==="wait"&&g.length&&(M=g),f(Qg(M)),y(c);return}const{forceRender:v}=ne.useContext(Op);return S.jsx(S.Fragment,{children:m.map(M=>{const C=al(M),b=o&&!a?!1:c===m||u.includes(C),A=()=>{if(p.has(C))p.set(C,!0);else return;let L=!0;p.forEach(V=>{V||(L=!1)}),L&&(v==null||v(),f(h.current),o&&(l==null||l()),i&&i())};return S.jsx(bw,{isPresent:b,initial:!d.current||n?void 0:!1,custom:b?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:b?void 0:A,children:M},C)})})},Mn=t=>t;let F_=Mn;function zp(t){let e;return()=>(e===void 0&&(e=t()),e)}const Ks=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Ai=t=>t*1e3,bi=t=>t/1e3,Rw={useManualTiming:!1};function Pw(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,d=!1)=>{const p=d&&i?e:n;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const ll=["read","resolveKeyframes","update","preRender","render","postRender"],Lw=40;function O_(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=ll.reduce((f,g)=>(f[g]=Pw(s),f),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:h}=o,p=()=>{const f=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,Lw),1),r.timestamp=f,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),h.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},x=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:ll.reduce((f,g)=>{const v=o[g];return f[g]=(M,C=!1,b=!1)=>(n||x(),v.schedule(M,C,b)),f},{}),cancel:f=>{for(let g=0;g<ll.length;g++)o[ll[g]].cancel(f)},state:r,steps:o}}const{schedule:lt,cancel:ur,state:It,steps:Ju}=O_(typeof requestAnimationFrame<"u"?requestAnimationFrame:Mn,!0),k_=ne.createContext({strict:!1}),Jg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Zs={};for(const t in Jg)Zs[t]={isEnabled:e=>Jg[t].some(n=>!!e[n])};function Nw(t){for(const e in t)Zs[e]={...Zs[e],...t[e]}}const Dw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Pc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Dw.has(t)}let B_=t=>!Pc(t);function Iw(t){t&&(B_=e=>e.startsWith("on")?!Pc(e):t(e))}try{Iw(require("@emotion/is-prop-valid").default)}catch{}function Uw(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(B_(r)||n===!0&&Pc(r)||!e&&!Pc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function Fw(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const uu=ne.createContext({});function xa(t){return typeof t=="string"||Array.isArray(t)}function du(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Vp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Hp=["initial",...Vp];function fu(t){return du(t.animate)||Hp.some(e=>xa(t[e]))}function z_(t){return!!(fu(t)||t.variants)}function Ow(t,e){if(fu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||xa(n)?n:void 0,animate:xa(i)?i:void 0}}return t.inherit!==!1?e:{}}function kw(t){const{initial:e,animate:n}=Ow(t,ne.useContext(uu));return ne.useMemo(()=>({initial:e,animate:n}),[e0(e),e0(n)])}function e0(t){return Array.isArray(t)?t.join(" "):t}const Bw=Symbol.for("motionComponentSymbol");function Cs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function zw(t,e,n){return ne.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Cs(n)&&(n.current=i))},[e])}const Gp=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Vw="framerAppearId",V_="data-"+Gp(Vw),{schedule:jp}=O_(queueMicrotask,!1),H_=ne.createContext({});function Hw(t,e,n,i,r){var s,o;const{visualElement:a}=ne.useContext(uu),l=ne.useContext(k_),c=ne.useContext(lu),u=ne.useContext(Ca).reducedMotion,d=ne.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const h=d.current,p=ne.useContext(H_);h&&!h.projection&&r&&(h.type==="html"||h.type==="svg")&&Gw(d.current,n,r,p);const x=ne.useRef(!1);ne.useInsertionEffect(()=>{h&&x.current&&h.update(n,c)});const y=n[V_],m=ne.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return Bp(()=>{h&&(x.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),jp.render(h.render),m.current&&h.animationState&&h.animationState.animateChanges())}),ne.useEffect(()=>{h&&(!m.current&&h.animationState&&h.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var f;(f=window.MotionHandoffMarkAsComplete)===null||f===void 0||f.call(window,y)}),m.current=!1))}),h}function Gw(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:G_(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Cs(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function G_(t){if(t)return t.options.allowProjection!==!1?t.projection:G_(t.parent)}function jw({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&Nw(t);function a(c,u){let d;const h={...ne.useContext(Ca),...c,layoutId:Ww(c)},{isStatic:p}=h,x=kw(c),y=i(c,p);if(!p&&kp){Xw();const m=$w(h);d=m.MeasureLayout,x.visualElement=Hw(r,y,h,e,m.ProjectionNode)}return S.jsxs(uu.Provider,{value:x,children:[d&&x.visualElement?S.jsx(d,{visualElement:x.visualElement,...h}):null,n(r,c,zw(y,x.visualElement,u),y,p,x.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=ne.forwardRef(a);return l[Bw]=r,l}function Ww({layoutId:t}){const e=ne.useContext(Op).id;return e&&t!==void 0?e+"-"+t:t}function Xw(t,e){ne.useContext(k_).strict}function $w(t){const{drag:e,layout:n}=Zs;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const Yw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Wp(t){return typeof t!="string"||t.includes("-")?!1:!!(Yw.indexOf(t)>-1||/[A-Z]/u.test(t))}function t0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Xp(t,e,n,i){if(typeof e=="function"){const[r,s]=t0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=t0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const kf=t=>Array.isArray(t),qw=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Kw=t=>kf(t)?t[t.length-1]||0:t,Ft=t=>!!(t&&t.getVelocity);function ql(t){const e=Ft(t)?t.get():t;return qw(e)?e.toValue():e}function Zw({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:Qw(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const j_=t=>(e,n)=>{const i=ne.useContext(uu),r=ne.useContext(lu),s=()=>Zw(t,e,i,r);return n?s():au(s)};function Qw(t,e,n,i){const r={},s=i(t,{});for(const h in s)r[h]=ql(s[h]);let{initial:o,animate:a}=t;const l=fu(t),c=z_(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!du(d)){const h=Array.isArray(d)?d:[d];for(let p=0;p<h.length;p++){const x=Xp(t,h[p]);if(x){const{transitionEnd:y,transition:m,...f}=x;for(const g in f){let v=f[g];if(Array.isArray(v)){const M=u?v.length-1:0;v=v[M]}v!==null&&(r[g]=v)}for(const g in y)r[g]=y[g]}}}return r}const co=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Jr=new Set(co),W_=t=>e=>typeof e=="string"&&e.startsWith(t),X_=W_("--"),Jw=W_("var(--"),$p=t=>Jw(t)?eT.test(t.split("/*")[0].trim()):!1,eT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,$_=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Ni=(t,e,n)=>n>e?e:n<t?t:n,uo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ya={...uo,transform:t=>Ni(0,1,t)},cl={...uo,default:1},Ra=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ji=Ra("deg"),li=Ra("%"),Ue=Ra("px"),tT=Ra("vh"),nT=Ra("vw"),n0={...li,parse:t=>li.parse(t)/100,transform:t=>li.transform(t*100)},iT={borderWidth:Ue,borderTopWidth:Ue,borderRightWidth:Ue,borderBottomWidth:Ue,borderLeftWidth:Ue,borderRadius:Ue,radius:Ue,borderTopLeftRadius:Ue,borderTopRightRadius:Ue,borderBottomRightRadius:Ue,borderBottomLeftRadius:Ue,width:Ue,maxWidth:Ue,height:Ue,maxHeight:Ue,top:Ue,right:Ue,bottom:Ue,left:Ue,padding:Ue,paddingTop:Ue,paddingRight:Ue,paddingBottom:Ue,paddingLeft:Ue,margin:Ue,marginTop:Ue,marginRight:Ue,marginBottom:Ue,marginLeft:Ue,backgroundPositionX:Ue,backgroundPositionY:Ue},rT={rotate:ji,rotateX:ji,rotateY:ji,rotateZ:ji,scale:cl,scaleX:cl,scaleY:cl,scaleZ:cl,skew:ji,skewX:ji,skewY:ji,distance:Ue,translateX:Ue,translateY:Ue,translateZ:Ue,x:Ue,y:Ue,z:Ue,perspective:Ue,transformPerspective:Ue,opacity:ya,originX:n0,originY:n0,originZ:Ue},i0={...uo,transform:Math.round},Yp={...iT,...rT,zIndex:i0,size:Ue,fillOpacity:ya,strokeOpacity:ya,numOctaves:i0},sT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},oT=co.length;function aT(t,e,n){let i="",r=!0;for(let s=0;s<oT;s++){const o=co[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=$_(a,Yp[o]);if(!l){r=!1;const u=sT[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function qp(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Jr.has(l)){o=!0;continue}else if(X_(l)){r[l]=c;continue}else{const u=$_(c,Yp[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=aT(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const lT={offset:"stroke-dashoffset",array:"stroke-dasharray"},cT={offset:"strokeDashoffset",array:"strokeDasharray"};function uT(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?lT:cT;t[s.offset]=Ue.transform(-i);const o=Ue.transform(e),a=Ue.transform(n);t[s.array]=`${o} ${a}`}function r0(t,e,n){return typeof t=="string"?t:Ue.transform(e+n*t)}function dT(t,e,n){const i=r0(e,t.x,t.width),r=r0(n,t.y,t.height);return`${i} ${r}`}function Kp(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,d){if(qp(t,c,d),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:p,dimensions:x}=t;h.transform&&(x&&(p.transform=h.transform),delete h.transform),x&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=dT(x,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),i!==void 0&&(h.scale=i),o!==void 0&&uT(h,o,a,l,!1)}const Zp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Y_=()=>({...Zp(),attrs:{}}),Qp=t=>typeof t=="string"&&t.toLowerCase()==="svg";function q_(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const K_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Z_(t,e,n,i){q_(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(K_.has(r)?r:Gp(r),e.attrs[r])}const Lc={};function fT(t){Object.assign(Lc,t)}function Q_(t,{layout:e,layoutId:n}){return Jr.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Lc[t]||t==="opacity")}function Jp(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(Ft(r[o])||e.style&&Ft(e.style[o])||Q_(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function J_(t,e,n){const i=Jp(t,e,n);for(const r in t)if(Ft(t[r])||Ft(e[r])){const s=co.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function hT(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const s0=["x","y","width","height","cx","cy","r"],pT={useVisualState:j_({scrapeMotionValuesFromProps:J_,createRenderState:Y_,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(Jr.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<s0.length;a++){const l=s0[a];t[l]!==e[l]&&(o=!0)}o&&lt.read(()=>{hT(n,i),lt.render(()=>{Kp(i,r,Qp(n.tagName),t.transformTemplate),Z_(n,i)})})}})},mT={useVisualState:j_({scrapeMotionValuesFromProps:Jp,createRenderState:Zp})};function eS(t,e,n){for(const i in e)!Ft(e[i])&&!Q_(i,n)&&(t[i]=e[i])}function gT({transformTemplate:t},e){return ne.useMemo(()=>{const n=Zp();return qp(n,e,t),Object.assign({},n.vars,n.style)},[e])}function vT(t,e){const n=t.style||{},i={};return eS(i,n,t),Object.assign(i,gT(t,e)),i}function xT(t,e){const n={},i=vT(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function yT(t,e,n,i){const r=ne.useMemo(()=>{const s=Y_();return Kp(s,e,Qp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};eS(s,t.style,t),r.style={...s,...r.style}}return r}function _T(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Wp(n)?yT:xT)(i,s,o,n),c=Uw(i,typeof n=="string",t),u=n!==ne.Fragment?{...c,...l,ref:r}:{},{children:d}=i,h=ne.useMemo(()=>Ft(d)?d.get():d,[d]);return ne.createElement(n,{...u,children:h})}}function ST(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Wp(i)?pT:mT,preloadedFeatures:t,useRender:_T(r),createVisualElement:e,Component:i};return jw(o)}}function tS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function hu(t,e,n){const i=t.getProps();return Xp(i,e,n!==void 0?n:i.custom,t)}const MT=zp(()=>window.ScrollTimeline!==void 0);class ET{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(MT()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class wT extends ET{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function em(t,e){return t?t[e]||t.default||t:void 0}const Bf=2e4;function nS(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Bf;)e+=n,i=t.next(e);return e>=Bf?1/0:e}function tm(t){return typeof t=="function"}function o0(t,e){t.timeline=e,t.onfinish=null}const nm=t=>Array.isArray(t)&&typeof t[0]=="number",TT={linearEasing:void 0};function AT(t,e){const n=zp(t);return()=>{var i;return(i=TT[e])!==null&&i!==void 0?i:n()}}const Nc=AT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),iS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(Ks(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function rS(t){return!!(typeof t=="function"&&Nc()||!t||typeof t=="string"&&(t in zf||Nc())||nm(t)||Array.isArray(t)&&t.every(rS))}const Fo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,zf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Fo([0,.65,.55,1]),circOut:Fo([.55,0,1,.45]),backIn:Fo([.31,.01,.66,-.59]),backOut:Fo([.33,1.53,.69,.99])};function sS(t,e){if(t)return typeof t=="function"&&Nc()?iS(t,e):nm(t)?Fo(t):Array.isArray(t)?t.map(n=>sS(n,e)||zf.easeOut):zf[t]}const Wn={x:!1,y:!1};function oS(){return Wn.x||Wn.y}function bT(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function aS(t,e){const n=bT(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function a0(t){return e=>{e.pointerType==="touch"||oS()||t(e)}}function CT(t,e,n={}){const[i,r,s]=aS(t,n),o=a0(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=a0(d=>{c(d),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const lS=(t,e)=>e?t===e?!0:lS(t,e.parentElement):!1,im=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,RT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function PT(t){return RT.has(t.tagName)||t.tabIndex!==-1}const Oo=new WeakSet;function l0(t){return e=>{e.key==="Enter"&&t(e)}}function ed(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const LT=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=l0(()=>{if(Oo.has(n))return;ed(n,"down");const r=l0(()=>{ed(n,"up")}),s=()=>ed(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function c0(t){return im(t)&&!oS()}function NT(t,e,n={}){const[i,r,s]=aS(t,n),o=a=>{const l=a.currentTarget;if(!c0(a)||Oo.has(l))return;Oo.add(l);const c=e(a),u=(p,x)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",h),!(!c0(p)||!Oo.has(l))&&(Oo.delete(l),typeof c=="function"&&c(p,{success:x}))},d=p=>{u(p,n.useGlobalTarget||lS(l,p.target))},h=p=>{u(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",h,r)};return i.forEach(a=>{!PT(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>LT(c,r),r)}),s}function DT(t){return t==="x"||t==="y"?Wn[t]?null:(Wn[t]=!0,()=>{Wn[t]=!1}):Wn.x||Wn.y?null:(Wn.x=Wn.y=!0,()=>{Wn.x=Wn.y=!1})}const cS=new Set(["width","height","top","left","right","bottom",...co]);let Kl;function IT(){Kl=void 0}const ci={now:()=>(Kl===void 0&&ci.set(It.isProcessing||Rw.useManualTiming?It.timestamp:performance.now()),Kl),set:t=>{Kl=t,queueMicrotask(IT)}};function rm(t,e){t.indexOf(e)===-1&&t.push(e)}function sm(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class om{constructor(){this.subscriptions=[]}add(e){return rm(this.subscriptions,e),()=>sm(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function uS(t,e){return e?t*(1e3/e):0}const u0=30,UT=t=>!isNaN(parseFloat(t));class FT{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=ci.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=ci.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=UT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new om);const i=this.events[e].add(n);return e==="change"?()=>{i(),lt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ci.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>u0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,u0);return uS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qs(t,e){return new FT(t,e)}function OT(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Qs(n))}function kT(t,e){const n=hu(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=Kw(s[o]);OT(t,o,a)}}function BT(t){return!!(Ft(t)&&t.add)}function Vf(t,e){const n=t.getValue("willChange");if(BT(n))return n.add(e)}function dS(t){return t.props[V_]}const fS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,zT=1e-7,VT=12;function HT(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=fS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>zT&&++a<VT);return o}function Pa(t,e,n,i){if(t===e&&n===i)return Mn;const r=s=>HT(s,0,1,t,n);return s=>s===0||s===1?s:fS(r(s),e,i)}const hS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,pS=t=>e=>1-t(1-e),mS=Pa(.33,1.53,.69,.99),am=pS(mS),gS=hS(am),vS=t=>(t*=2)<1?.5*am(t):.5*(2-Math.pow(2,-10*(t-1))),lm=t=>1-Math.sin(Math.acos(t)),xS=pS(lm),yS=hS(lm),_S=t=>/^0[^.\s]+$/u.test(t);function GT(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||_S(t):!0}const Ko=t=>Math.round(t*1e5)/1e5,cm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function jT(t){return t==null}const WT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,um=(t,e)=>n=>!!(typeof n=="string"&&WT.test(n)&&n.startsWith(t)||e&&!jT(n)&&Object.prototype.hasOwnProperty.call(n,e)),SS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(cm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},XT=t=>Ni(0,255,t),td={...uo,transform:t=>Math.round(XT(t))},kr={test:um("rgb","red"),parse:SS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+td.transform(t)+", "+td.transform(e)+", "+td.transform(n)+", "+Ko(ya.transform(i))+")"};function $T(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Hf={test:um("#"),parse:$T,transform:kr.transform},Rs={test:um("hsl","hue"),parse:SS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+li.transform(Ko(e))+", "+li.transform(Ko(n))+", "+Ko(ya.transform(i))+")"},Xt={test:t=>kr.test(t)||Hf.test(t)||Rs.test(t),parse:t=>kr.test(t)?kr.parse(t):Rs.test(t)?Rs.parse(t):Hf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?kr.transform(t):Rs.transform(t)},YT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function qT(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(cm))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(YT))===null||n===void 0?void 0:n.length)||0)>0}const MS="number",ES="color",KT="var",ZT="var(",d0="${}",QT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function _a(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(QT,l=>(Xt.test(l)?(i.color.push(s),r.push(ES),n.push(Xt.parse(l))):l.startsWith(ZT)?(i.var.push(s),r.push(KT),n.push(l)):(i.number.push(s),r.push(MS),n.push(parseFloat(l))),++s,d0)).split(d0);return{values:n,split:a,indexes:i,types:r}}function wS(t){return _a(t).values}function TS(t){const{split:e,types:n}=_a(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===MS?s+=Ko(r[o]):a===ES?s+=Xt.transform(r[o]):s+=r[o]}return s}}const JT=t=>typeof t=="number"?0:t;function eA(t){const e=wS(t);return TS(t)(e.map(JT))}const dr={test:qT,parse:wS,createTransformer:TS,getAnimatableNone:eA},tA=new Set(["brightness","contrast","saturate","opacity"]);function nA(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(cm)||[];if(!i)return t;const r=n.replace(i,"");let s=tA.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const iA=/\b([a-z-]*)\(.*?\)/gu,Gf={...dr,getAnimatableNone:t=>{const e=t.match(iA);return e?e.map(nA).join(" "):t}},rA={...Yp,color:Xt,backgroundColor:Xt,outlineColor:Xt,fill:Xt,stroke:Xt,borderColor:Xt,borderTopColor:Xt,borderRightColor:Xt,borderBottomColor:Xt,borderLeftColor:Xt,filter:Gf,WebkitFilter:Gf},dm=t=>rA[t];function AS(t,e){let n=dm(t);return n!==Gf&&(n=dr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const sA=new Set(["auto","none","0"]);function oA(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!sA.has(s)&&_a(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=AS(n,r)}const f0=t=>t===uo||t===Ue,h0=(t,e)=>parseFloat(t.split(", ")[e]),p0=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return h0(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?h0(s[1],t):0}},aA=new Set(["x","y","z"]),lA=co.filter(t=>!aA.has(t));function cA(t){const e=[];return lA.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Js={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:p0(4,13),y:p0(5,14)};Js.translateX=Js.x;Js.translateY=Js.y;const Gr=new Set;let jf=!1,Wf=!1;function bS(){if(Wf){const t=Array.from(Gr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=cA(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Wf=!1,jf=!1,Gr.forEach(t=>t.complete()),Gr.clear()}function CS(){Gr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Wf=!0)})}function uA(){CS(),bS()}class fm{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Gr.add(this),jf||(jf=!0,lt.read(CS),lt.resolveKeyframes(bS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Gr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Gr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const RS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),dA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function fA(t){const e=dA.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function PS(t,e,n=1){const[i,r]=fA(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return RS(o)?parseFloat(o):o}return $p(r)?PS(r,e,n+1):r}const LS=t=>e=>e.test(t),hA={test:t=>t==="auto",parse:t=>t},NS=[uo,Ue,li,ji,nT,tT,hA],m0=t=>NS.find(LS(t));class DS extends fm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),$p(c))){const u=PS(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!cS.has(i)||e.length!==2)return;const[r,s]=e,o=m0(r),a=m0(s);if(o!==a)if(f0(o)&&f0(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)GT(e[r])&&i.push(r);i.length&&oA(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Js[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=Js[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const g0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(dr.test(t)||t==="0")&&!t.startsWith("url("));function pA(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function mA(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=g0(r,e),a=g0(s,e);return!o||!a?!1:pA(t)||(n==="spring"||tm(n))&&i}const gA=t=>t!==null;function pu(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(gA),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const vA=40;class IS{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ci.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>vA?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&uA(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=ci.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!mA(e,i,r,s))if(o)this.options.duration=0;else{l&&l(pu(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const mt=(t,e,n)=>t+(e-t)*n;function nd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function xA({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=nd(l,a,t+1/3),s=nd(l,a,t),o=nd(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Dc(t,e){return n=>n>0?e:t}const id=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},yA=[Hf,kr,Rs],_A=t=>yA.find(e=>e.test(t));function v0(t){const e=_A(t);if(!e)return!1;let n=e.parse(t);return e===Rs&&(n=xA(n)),n}const x0=(t,e)=>{const n=v0(t),i=v0(e);if(!n||!i)return Dc(t,e);const r={...n};return s=>(r.red=id(n.red,i.red,s),r.green=id(n.green,i.green,s),r.blue=id(n.blue,i.blue,s),r.alpha=mt(n.alpha,i.alpha,s),kr.transform(r))},SA=(t,e)=>n=>e(t(n)),La=(...t)=>t.reduce(SA),Xf=new Set(["none","hidden"]);function MA(t,e){return Xf.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function EA(t,e){return n=>mt(t,e,n)}function hm(t){return typeof t=="number"?EA:typeof t=="string"?$p(t)?Dc:Xt.test(t)?x0:AA:Array.isArray(t)?US:typeof t=="object"?Xt.test(t)?x0:wA:Dc}function US(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>hm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function wA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=hm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function TA(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const AA=(t,e)=>{const n=dr.createTransformer(e),i=_a(t),r=_a(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Xf.has(t)&&!r.values.length||Xf.has(e)&&!i.values.length?MA(t,e):La(US(TA(i,r),r.values),n):Dc(t,e)};function FS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?mt(t,e,n):hm(t)(t,e)}const bA=5;function OS(t,e,n){const i=Math.max(e-bA,0);return uS(n-t(i),e-i)}const yt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},rd=.001;function CA({duration:t=yt.duration,bounce:e=yt.bounce,velocity:n=yt.velocity,mass:i=yt.mass}){let r,s,o=1-e;o=Ni(yt.minDamping,yt.maxDamping,o),t=Ni(yt.minDuration,yt.maxDuration,bi(t)),o<1?(r=c=>{const u=c*o,d=u*t,h=u-n,p=$f(c,o),x=Math.exp(-d);return rd-h/p*x},s=c=>{const d=c*o*t,h=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,x=Math.exp(-d),y=$f(Math.pow(c,2),o);return(-r(c)+rd>0?-1:1)*((h-p)*x)/y}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-rd+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=PA(r,s,a);if(t=Ai(t),isNaN(l))return{stiffness:yt.stiffness,damping:yt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const RA=12;function PA(t,e,n){let i=n;for(let r=1;r<RA;r++)i=i-t(i)/e(i);return i}function $f(t,e){return t*Math.sqrt(1-e*e)}const LA=["duration","bounce"],NA=["stiffness","damping","mass"];function y0(t,e){return e.some(n=>t[n]!==void 0)}function DA(t){let e={velocity:yt.velocity,stiffness:yt.stiffness,damping:yt.damping,mass:yt.mass,isResolvedFromDuration:!1,...t};if(!y0(t,NA)&&y0(t,LA))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Ni(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:yt.mass,stiffness:r,damping:s}}else{const n=CA(t);e={...e,...n,mass:yt.mass},e.isResolvedFromDuration=!0}return e}function kS(t=yt.visualDuration,e=yt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:h,isResolvedFromDuration:p}=DA({...n,velocity:-bi(n.velocity||0)}),x=h||0,y=c/(2*Math.sqrt(l*u)),m=o-s,f=bi(Math.sqrt(l/u)),g=Math.abs(m)<5;i||(i=g?yt.restSpeed.granular:yt.restSpeed.default),r||(r=g?yt.restDelta.granular:yt.restDelta.default);let v;if(y<1){const C=$f(f,y);v=b=>{const A=Math.exp(-y*f*b);return o-A*((x+y*f*m)/C*Math.sin(C*b)+m*Math.cos(C*b))}}else if(y===1)v=C=>o-Math.exp(-f*C)*(m+(x+f*m)*C);else{const C=f*Math.sqrt(y*y-1);v=b=>{const A=Math.exp(-y*f*b),L=Math.min(C*b,300);return o-A*((x+y*f*m)*Math.sinh(L)+C*m*Math.cosh(L))/C}}const M={calculatedDuration:p&&d||null,next:C=>{const b=v(C);if(p)a.done=C>=d;else{let A=0;y<1&&(A=C===0?Ai(x):OS(v,C,b));const L=Math.abs(A)<=i,V=Math.abs(o-b)<=r;a.done=L&&V}return a.value=a.done?o:b,a},toString:()=>{const C=Math.min(nS(M),Bf),b=iS(A=>M.next(C*A).value,C,30);return C+"ms "+b}};return M}function _0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],h={done:!1,value:d},p=L=>a!==void 0&&L<a||l!==void 0&&L>l,x=L=>a===void 0?l:l===void 0||Math.abs(a-L)<Math.abs(l-L)?a:l;let y=n*e;const m=d+y,f=o===void 0?m:o(m);f!==m&&(y=f-d);const g=L=>-y*Math.exp(-L/i),v=L=>f+g(L),M=L=>{const V=g(L),_=v(L);h.done=Math.abs(V)<=c,h.value=h.done?f:_};let C,b;const A=L=>{p(h.value)&&(C=L,b=kS({keyframes:[h.value,x(h.value)],velocity:OS(v,L,h.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return A(0),{calculatedDuration:null,next:L=>{let V=!1;return!b&&C===void 0&&(V=!0,M(L),A(L)),C!==void 0&&L>=C?b.next(L-C):(!V&&M(L),h)}}}const IA=Pa(.42,0,1,1),UA=Pa(0,0,.58,1),BS=Pa(.42,0,.58,1),FA=t=>Array.isArray(t)&&typeof t[0]!="number",OA={linear:Mn,easeIn:IA,easeInOut:BS,easeOut:UA,circIn:lm,circInOut:yS,circOut:xS,backIn:am,backInOut:gS,backOut:mS,anticipate:vS},S0=t=>{if(nm(t)){F_(t.length===4);const[e,n,i,r]=t;return Pa(e,n,i,r)}else if(typeof t=="string")return OA[t];return t};function kA(t,e,n){const i=[],r=n||FS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Mn:e;a=La(l,a)}i.push(a)}return i}function BA(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(F_(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=kA(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const h=Ks(t[d],t[d+1],u);return a[d](h)};return n?u=>c(Ni(t[0],t[s-1],u)):c}function zA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Ks(0,e,i);t.push(mt(n,1,r))}}function VA(t){const e=[0];return zA(e,t.length-1),e}function HA(t,e){return t.map(n=>n*e)}function GA(t,e){return t.map(()=>e||BS).splice(0,t.length-1)}function Ic({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=FA(i)?i.map(S0):S0(i),s={done:!1,value:e[0]},o=HA(n&&n.length===e.length?n:VA(e),t),a=BA(o,e,{ease:Array.isArray(r)?r:GA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const jA=t=>{const e=({timestamp:n})=>t(n);return{start:()=>lt.update(e,!0),stop:()=>ur(e),now:()=>It.isProcessing?It.timestamp:ci.now()}},WA={decay:_0,inertia:_0,tween:Ic,keyframes:Ic,spring:kS},XA=t=>t/100;class mu extends IS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||fm,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=tm(n)?n:WA[n]||Ic;let l,c;a!==Ic&&typeof e[0]!="number"&&(l=La(XA,FS(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=nS(u));const{calculatedDuration:d}=u,h=d+r,p=h*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:h,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:L}=this.options;return{done:!0,value:L[L.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:h,repeat:p,repeatType:x,repeatDelay:y,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const f=this.currentTime-h*(this.speed>=0?1:-1),g=this.speed>=0?f<0:f>u;this.currentTime=Math.max(f,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let v=this.currentTime,M=s;if(p){const L=Math.min(this.currentTime,u)/d;let V=Math.floor(L),_=L%1;!_&&L>=1&&(_=1),_===1&&V--,V=Math.min(V,p+1),!!(V%2)&&(x==="reverse"?(_=1-_,y&&(_-=y/d)):x==="mirror"&&(M=o)),v=Ni(0,1,_)*d}const C=g?{done:!1,value:l[0]}:M.next(v);a&&(C.value=a(C.value));let{done:b}=C;!g&&c!==null&&(b=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return A&&r!==void 0&&(C.value=pu(l,this.options,r)),m&&m(C.value),A&&this.finish(),C}get duration(){const{resolved:e}=this;return e?bi(e.calculatedDuration):0}get time(){return bi(this.currentTime)}set time(e){e=Ai(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=bi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=jA,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}function $A(t){return new mu(t)}const YA=new Set(["opacity","clipPath","filter","transform"]);function qA(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=sS(a,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const KA=zp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Uc=10,ZA=2e4;function QA(t){return tm(t.type)||t.type==="spring"||!rS(t.ease)}function JA(t,e){const n=new mu({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<ZA;)i=n.sample(s),r.push(i.value),s+=Uc;return{times:void 0,keyframes:r,duration:s-Uc,ease:"linear"}}const zS={anticipate:vS,backInOut:gS,circInOut:yS};function eb(t){return t in zS}class M0 extends IS{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new DS(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Nc()&&eb(s)&&(s=zS[s]),QA(this.options)){const{onComplete:d,onUpdate:h,motionValue:p,element:x,...y}=this.options,m=JA(e,y);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const u=qA(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(o0(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:d}=this.options;a.set(pu(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return bi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return bi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Ai(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Mn;const{animation:i}=n;o0(i,e)}return Mn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:d,element:h,...p}=this.options,x=new mu({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),y=Ai(this.time);c.setWithVelocity(x.sample(y-Uc).value,x.sample(y).value,Uc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return KA()&&i&&YA.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const tb={type:"spring",stiffness:500,damping:25,restSpeed:10},nb=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),ib={type:"keyframes",duration:.8},rb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},sb=(t,{keyframes:e})=>e.length>2?ib:Jr.has(t)?t.startsWith("scale")?nb(e[1]):tb:rb;function ob({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const pm=(t,e,n,i={},r,s)=>o=>{const a=em(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Ai(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};ob(a)||(u={...u,...sb(t,u)}),u.duration&&(u.duration=Ai(u.duration)),u.repeatDelay&&(u.repeatDelay=Ai(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const h=pu(u.keyframes,a);if(h!==void 0)return lt.update(()=>{u.onUpdate(h),u.onComplete()}),new wT([])}return!s&&M0.supports(u)?new M0(u):new mu(u)};function ab({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function VS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const d in l){const h=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),p=l[d];if(p===void 0||u&&ab(u,d))continue;const x={delay:n,...em(o||{},d)};let y=!1;if(window.MotionHandoffAnimation){const f=dS(t);if(f){const g=window.MotionHandoffAnimation(f,d,lt);g!==null&&(x.startTime=g,y=!0)}}Vf(t,d),h.start(pm(d,h,p,t.shouldReduceMotion&&cS.has(d)?{type:!1}:x,t,y));const m=h.animation;m&&c.push(m)}return a&&Promise.all(c).then(()=>{lt.update(()=>{a&&kT(t,a)})}),c}function Yf(t,e,n={}){var i;const r=hu(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(VS(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:h}=s;return lb(t,e,u+c,d,h,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function lb(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(cb).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Yf(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function cb(t,e){return t.sortNodePosition(e)}function ub(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Yf(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Yf(t,e,n);else{const r=typeof e=="function"?hu(t,e,n.custom):e;i=Promise.all(VS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const db=Hp.length;function HS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?HS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<db;n++){const i=Hp[n],r=t.props[i];(xa(r)||r===!1)&&(e[i]=r)}return e}const fb=[...Vp].reverse(),hb=Vp.length;function pb(t){return e=>Promise.all(e.map(({animation:n,options:i})=>ub(t,n,i)))}function mb(t){let e=pb(t),n=E0(),i=!0;const r=l=>(c,u)=>{var d;const h=hu(t,u,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(h){const{transition:p,transitionEnd:x,...y}=h;c={...c,...y,...x}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=HS(t.parent)||{},d=[],h=new Set;let p={},x=1/0;for(let m=0;m<hb;m++){const f=fb[m],g=n[f],v=c[f]!==void 0?c[f]:u[f],M=xa(v),C=f===l?g.isActive:null;C===!1&&(x=m);let b=v===u[f]&&v!==c[f]&&M;if(b&&i&&t.manuallyAnimateOnMount&&(b=!1),g.protectedKeys={...p},!g.isActive&&C===null||!v&&!g.prevProp||du(v)||typeof v=="boolean")continue;const A=gb(g.prevProp,v);let L=A||f===l&&g.isActive&&!b&&M||m>x&&M,V=!1;const _=Array.isArray(v)?v:[v];let w=_.reduce(r(f),{});C===!1&&(w={});const{prevResolvedValues:W={}}=g,j={...W,...w},Z=K=>{L=!0,h.has(K)&&(V=!0,h.delete(K)),g.needsAnimating[K]=!0;const I=t.getValue(K);I&&(I.liveStyle=!1)};for(const K in j){const I=w[K],Q=W[K];if(p.hasOwnProperty(K))continue;let N=!1;kf(I)&&kf(Q)?N=!tS(I,Q):N=I!==Q,N?I!=null?Z(K):h.add(K):I!==void 0&&h.has(K)?Z(K):g.protectedKeys[K]=!0}g.prevProp=v,g.prevResolvedValues=w,g.isActive&&(p={...p,...w}),i&&t.blockInitialAnimation&&(L=!1),L&&(!(b&&A)||V)&&d.push(..._.map(K=>({animation:K,options:{type:f}})))}if(h.size){const m={};h.forEach(f=>{const g=t.getBaseTarget(f),v=t.getValue(f);v&&(v.liveStyle=!0),m[f]=g??null}),d.push({animation:m})}let y=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(d):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(h=>{var p;return(p=h.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const d=o(l);for(const h in n)n[h].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=E0(),i=!0}}}function gb(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!tS(e,t):!1}function _r(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function E0(){return{animate:_r(!0),whileInView:_r(),whileHover:_r(),whileTap:_r(),whileDrag:_r(),whileFocus:_r(),exit:_r()}}class vr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class vb extends vr{constructor(e){super(e),e.animationState||(e.animationState=mb(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();du(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let xb=0;class yb extends vr{constructor(){super(...arguments),this.id=xb++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const _b={animation:{Feature:vb},exit:{Feature:yb}};function Sa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Na(t){return{point:{x:t.pageX,y:t.pageY}}}const Sb=t=>e=>im(e)&&t(e,Na(e));function Zo(t,e,n,i){return Sa(t,e,Sb(n),i)}const w0=(t,e)=>Math.abs(t-e);function Mb(t,e){const n=w0(t.x,e.x),i=w0(t.y,e.y);return Math.sqrt(n**2+i**2)}class GS{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=od(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=Mb(d.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:x}=d,{timestamp:y}=It;this.history.push({...x,timestamp:y});const{onStart:m,onMove:f}=this.handlers;h||(m&&m(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),f&&f(this.lastMoveEvent,d)},this.handlePointerMove=(d,h)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=sd(h,this.transformPagePoint),lt.update(this.updatePoint,!0)},this.handlePointerUp=(d,h)=>{this.end();const{onEnd:p,onSessionEnd:x,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=od(d.type==="pointercancel"?this.lastMoveEventInfo:sd(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,m),x&&x(d,m)},!im(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Na(e),a=sd(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=It;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,od(a,this.history)),this.removeListeners=La(Zo(this.contextWindow,"pointermove",this.handlePointerMove),Zo(this.contextWindow,"pointerup",this.handlePointerUp),Zo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),ur(this.updatePoint)}}function sd(t,e){return e?{point:e(t.point)}:t}function T0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function od({point:t},e){return{point:t,delta:T0(t,jS(e)),offset:T0(t,Eb(e)),velocity:wb(e,.1)}}function Eb(t){return t[0]}function jS(t){return t[t.length-1]}function wb(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=jS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Ai(e)));)n--;if(!i)return{x:0,y:0};const s=bi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const WS=1e-4,Tb=1-WS,Ab=1+WS,XS=.01,bb=0-XS,Cb=0+XS;function Tn(t){return t.max-t.min}function Rb(t,e,n){return Math.abs(t-e)<=n}function A0(t,e,n,i=.5){t.origin=i,t.originPoint=mt(e.min,e.max,t.origin),t.scale=Tn(n)/Tn(e),t.translate=mt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=Tb&&t.scale<=Ab||isNaN(t.scale))&&(t.scale=1),(t.translate>=bb&&t.translate<=Cb||isNaN(t.translate))&&(t.translate=0)}function Qo(t,e,n,i){A0(t.x,e.x,n.x,i?i.originX:void 0),A0(t.y,e.y,n.y,i?i.originY:void 0)}function b0(t,e,n){t.min=n.min+e.min,t.max=t.min+Tn(e)}function Pb(t,e,n){b0(t.x,e.x,n.x),b0(t.y,e.y,n.y)}function C0(t,e,n){t.min=e.min-n.min,t.max=t.min+Tn(e)}function Jo(t,e,n){C0(t.x,e.x,n.x),C0(t.y,e.y,n.y)}function Lb(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?mt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?mt(n,t,i.max):Math.min(t,n)),t}function R0(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function Nb(t,{top:e,left:n,bottom:i,right:r}){return{x:R0(t.x,n,r),y:R0(t.y,e,i)}}function P0(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function Db(t,e){return{x:P0(t.x,e.x),y:P0(t.y,e.y)}}function Ib(t,e){let n=.5;const i=Tn(t),r=Tn(e);return r>i?n=Ks(e.min,e.max-i,t.min):i>r&&(n=Ks(t.min,t.max-r,e.min)),Ni(0,1,n)}function Ub(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const qf=.35;function Fb(t=qf){return t===!1?t=0:t===!0&&(t=qf),{x:L0(t,"left","right"),y:L0(t,"top","bottom")}}function L0(t,e,n){return{min:N0(t,e),max:N0(t,n)}}function N0(t,e){return typeof t=="number"?t:t[e]||0}const D0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ps=()=>({x:D0(),y:D0()}),I0=()=>({min:0,max:0}),Et=()=>({x:I0(),y:I0()});function Ln(t){return[t("x"),t("y")]}function $S({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Ob({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function kb(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function ad(t){return t===void 0||t===1}function Kf({scale:t,scaleX:e,scaleY:n}){return!ad(t)||!ad(e)||!ad(n)}function Rr(t){return Kf(t)||YS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function YS(t){return U0(t.x)||U0(t.y)}function U0(t){return t&&t!=="0%"}function Fc(t,e,n){const i=t-n,r=e*i;return n+r}function F0(t,e,n,i,r){return r!==void 0&&(t=Fc(t,r,i)),Fc(t,n,i)+e}function Zf(t,e=0,n=1,i,r){t.min=F0(t.min,e,n,i,r),t.max=F0(t.max,e,n,i,r)}function qS(t,{x:e,y:n}){Zf(t.x,e.translate,e.scale,e.originPoint),Zf(t.y,n.translate,n.scale,n.originPoint)}const O0=.999999999999,k0=1.0000000000001;function Bb(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ns(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,qS(t,o)),i&&Rr(s.latestValues)&&Ns(t,s.latestValues))}e.x<k0&&e.x>O0&&(e.x=1),e.y<k0&&e.y>O0&&(e.y=1)}function Ls(t,e){t.min=t.min+e,t.max=t.max+e}function B0(t,e,n,i,r=.5){const s=mt(t.min,t.max,r);Zf(t,e,n,s,i)}function Ns(t,e){B0(t.x,e.x,e.scaleX,e.scale,e.originX),B0(t.y,e.y,e.scaleY,e.scale,e.originY)}function KS(t,e){return $S(kb(t.getBoundingClientRect(),e))}function zb(t,e,n){const i=KS(t,n),{scroll:r}=e;return r&&(Ls(i.x,r.offset.x),Ls(i.y,r.offset.y)),i}const ZS=({current:t})=>t?t.ownerDocument.defaultView:null,Vb=new WeakMap;class Hb{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Et(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Na(u).point)},s=(u,d)=>{const{drag:h,dragPropagation:p,onDragStart:x}=this.getProps();if(h&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=DT(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ln(m=>{let f=this.getAxisMotionValue(m).get()||0;if(li.test(f)){const{projection:g}=this.visualElement;if(g&&g.layout){const v=g.layout.layoutBox[m];v&&(f=Tn(v)*(parseFloat(f)/100))}}this.originPoint[m]=f}),x&&lt.postRender(()=>x(u,d)),Vf(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:x,onDrag:y}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:m}=d;if(p&&this.currentDirection===null){this.currentDirection=Gb(m),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",d.point,m),this.updateAxis("y",d.point,m),this.visualElement.render(),y&&y(u,d)},a=(u,d)=>this.stop(u,d),l=()=>Ln(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new GS(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:ZS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&lt.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!ul(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=Lb(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Cs(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=Nb(r.layoutBox,n):this.constraints=!1,this.elastic=Fb(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Ln(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=Ub(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Cs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=zb(i,r.root,this.visualElement.getTransformPagePoint());let o=Db(r.layout.layoutBox,s);if(n){const a=n(Ob(o));this.hasMutatedConstraints=!!a,a&&(o=$S(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Ln(u=>{if(!ul(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const h=r?200:1e6,p=r?40:1e7,x={type:"inertia",velocity:i?e[u]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,x)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Vf(this.visualElement,e),i.start(pm(e,i,0,n,this.visualElement,!1))}stopAnimation(){Ln(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Ln(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Ln(n=>{const{drag:i}=this.getProps();if(!ul(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-mt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Cs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Ln(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=Ib({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Ln(o=>{if(!ul(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(mt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;Vb.set(this.visualElement,this);const e=this.visualElement.current,n=Zo(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Cs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),lt.read(i);const o=Sa(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Ln(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=qf,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function ul(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function Gb(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class jb extends vr{constructor(e){super(e),this.removeGroupControls=Mn,this.removeListeners=Mn,this.controls=new Hb(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Mn}unmount(){this.removeGroupControls(),this.removeListeners()}}const z0=t=>(e,n)=>{t&&lt.postRender(()=>t(e,n))};class Wb extends vr{constructor(){super(...arguments),this.removePointerDownListener=Mn}onPointerDown(e){this.session=new GS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ZS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:z0(e),onStart:z0(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&lt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Zo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Zl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function V0(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Eo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ue.test(t))t=parseFloat(t);else return t;const n=V0(t,e.target.x),i=V0(t,e.target.y);return`${n}% ${i}%`}},Xb={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=dr.parse(t);if(r.length>5)return i;const s=dr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=mt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class $b extends ne.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;fT(Yb),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Zl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||lt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),jp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function QS(t){const[e,n]=U_(),i=ne.useContext(Op);return S.jsx($b,{...t,layoutGroup:i,switchLayoutGroup:ne.useContext(H_),isPresent:e,safeToRemove:n})}const Yb={borderRadius:{...Eo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Eo,borderTopRightRadius:Eo,borderBottomLeftRadius:Eo,borderBottomRightRadius:Eo,boxShadow:Xb};function qb(t,e,n){const i=Ft(t)?t:Qs(t);return i.start(pm("",i,e,n)),i.animation}function Kb(t){return t instanceof SVGElement&&t.tagName!=="svg"}const Zb=(t,e)=>t.depth-e.depth;class Qb{constructor(){this.children=[],this.isDirty=!1}add(e){rm(this.children,e),this.isDirty=!0}remove(e){sm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Zb),this.isDirty=!1,this.children.forEach(e)}}function Jb(t,e){const n=ci.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(ur(i),t(s-e))};return lt.read(i,!0),()=>ur(i)}const JS=["TopLeft","TopRight","BottomLeft","BottomRight"],eC=JS.length,H0=t=>typeof t=="string"?parseFloat(t):t,G0=t=>typeof t=="number"||Ue.test(t);function tC(t,e,n,i,r,s){r?(t.opacity=mt(0,n.opacity!==void 0?n.opacity:1,nC(i)),t.opacityExit=mt(e.opacity!==void 0?e.opacity:1,0,iC(i))):s&&(t.opacity=mt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<eC;o++){const a=`border${JS[o]}Radius`;let l=j0(e,a),c=j0(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||G0(l)===G0(c)?(t[a]=Math.max(mt(H0(l),H0(c),i),0),(li.test(c)||li.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=mt(e.rotate||0,n.rotate||0,i))}function j0(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const nC=eM(0,.5,xS),iC=eM(.5,.95,Mn);function eM(t,e,n){return i=>i<t?0:i>e?1:n(Ks(t,e,i))}function W0(t,e){t.min=e.min,t.max=e.max}function Rn(t,e){W0(t.x,e.x),W0(t.y,e.y)}function X0(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function $0(t,e,n,i,r){return t-=e,t=Fc(t,1/n,i),r!==void 0&&(t=Fc(t,1/r,i)),t}function rC(t,e=0,n=1,i=.5,r,s=t,o=t){if(li.test(e)&&(e=parseFloat(e),e=mt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=mt(s.min,s.max,i);t===s&&(a-=e),t.min=$0(t.min,e,n,a,r),t.max=$0(t.max,e,n,a,r)}function Y0(t,e,[n,i,r],s,o){rC(t,e[n],e[i],e[r],e.scale,s,o)}const sC=["x","scaleX","originX"],oC=["y","scaleY","originY"];function q0(t,e,n,i){Y0(t.x,e,sC,n?n.x:void 0,i?i.x:void 0),Y0(t.y,e,oC,n?n.y:void 0,i?i.y:void 0)}function K0(t){return t.translate===0&&t.scale===1}function tM(t){return K0(t.x)&&K0(t.y)}function Z0(t,e){return t.min===e.min&&t.max===e.max}function aC(t,e){return Z0(t.x,e.x)&&Z0(t.y,e.y)}function Q0(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function nM(t,e){return Q0(t.x,e.x)&&Q0(t.y,e.y)}function J0(t){return Tn(t.x)/Tn(t.y)}function ev(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class lC{constructor(){this.members=[]}add(e){rm(this.members,e),e.scheduleRender()}remove(e){if(sm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function cC(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:h,skewX:p,skewY:x}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),h&&(i+=`rotateY(${h}deg) `),p&&(i+=`skewX(${p}deg) `),x&&(i+=`skewY(${x}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Pr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ko=typeof window<"u"&&window.MotionDebug!==void 0,ld=["","X","Y","Z"],uC={visibility:"hidden"},tv=1e3;let dC=0;function cd(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function iM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=dS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",lt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&iM(i)}function rM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=dC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ko&&(Pr.totalNodes=Pr.resolvedTargetDeltas=Pr.recalculatedProjection=0),this.nodes.forEach(pC),this.nodes.forEach(yC),this.nodes.forEach(_C),this.nodes.forEach(mC),ko&&window.MotionDebug.record(Pr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Qb)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new om),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Kb(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const h=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=Jb(h,250),Zl.hasAnimatedSinceResize&&(Zl.hasAnimatedSinceResize=!1,this.nodes.forEach(iv))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h,hasRelativeTargetChanged:p,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||TC,{onLayoutAnimationStart:m,onLayoutAnimationComplete:f}=u.getProps(),g=!this.targetLayout||!nM(this.targetLayout,x)||p,v=!h&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||h&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,v);const M={...em(y,"layout"),onPlay:m,onComplete:f};(u.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M)}else h||iv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ur(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(SC),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&iM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(nv);return}this.isUpdating||this.nodes.forEach(vC),this.isUpdating=!1,this.nodes.forEach(xC),this.nodes.forEach(fC),this.nodes.forEach(hC),this.clearAllSnapshots();const a=ci.now();It.delta=Ni(0,1e3/60,a-It.timestamp),It.timestamp=a,It.isProcessing=!0,Ju.update.process(It),Ju.preRender.process(It),Ju.render.process(It),It.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,jp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(gC),this.sharedNodes.forEach(MC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,lt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){lt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Et(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!tM(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Rr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),AC(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Et();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(bC))){const{scroll:u}=this.root;u&&(Ls(l.x,u.offset.x),Ls(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=Et();if(Rn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:h}=u;u!==this.root&&d&&h.layoutScroll&&(d.wasRoot&&Rn(l,o),Ls(l.x,d.offset.x),Ls(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=Et();Rn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Ns(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Rr(u.latestValues)&&Ns(l,u.latestValues)}return Rr(this.latestValues)&&Ns(l,this.latestValues),l}removeTransform(o){const a=Et();Rn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Rr(c.latestValues))continue;Kf(c.latestValues)&&c.updateSnapshot();const u=Et(),d=c.measurePageBox();Rn(u,d),q0(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Rr(this.latestValues)&&q0(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==It.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:h}=this.options;if(!(!this.layout||!(d||h))){if(this.resolvedRelativeTargetAt=It.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Et(),this.relativeTargetOrigin=Et(),Jo(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Rn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Et(),this.targetWithTransforms=Et()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Pb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Rn(this.target,this.layout.layoutBox),qS(this.target,this.targetDelta)):Rn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Et(),this.relativeTargetOrigin=Et(),Jo(this.relativeTargetOrigin,this.target,p.target),Rn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ko&&Pr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Kf(this.parent.latestValues)||YS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===It.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Rn(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,p=this.treeScale.y;Bb(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Et());const{target:x}=a;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(X0(this.prevProjectionDelta.x,this.projectionDelta.x),X0(this.prevProjectionDelta.y,this.projectionDelta.y)),Qo(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==p||!ev(this.projectionDelta.x,this.prevProjectionDelta.x)||!ev(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),ko&&Pr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ps(),this.projectionDelta=Ps(),this.projectionDeltaWithTransform=Ps()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Ps();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=Et(),p=l?l.source:void 0,x=this.layout?this.layout.source:void 0,y=p!==x,m=this.getStack(),f=!m||m.members.length<=1,g=!!(y&&!f&&this.options.crossfade===!0&&!this.path.some(wC));this.animationProgress=0;let v;this.mixTargetDelta=M=>{const C=M/1e3;rv(d.x,o.x,C),rv(d.y,o.y,C),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Jo(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),EC(this.relativeTarget,this.relativeTargetOrigin,h,C),v&&aC(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=Et()),Rn(v,this.relativeTarget)),y&&(this.animationValues=u,tC(u,c,this.latestValues,C,g,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ur(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=lt.update(()=>{Zl.hasAnimatedSinceResize=!0,this.currentAnimation=qb(0,tv,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(tv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&sM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Et();const d=Tn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const h=Tn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}Rn(a,l),Ns(a,u),Qo(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new lC),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&cd("z",o,c,this.animationValues);for(let u=0;u<ld.length;u++)cd(`rotate${ld[u]}`,o,c,this.animationValues),cd(`skew${ld[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return uC;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=ql(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=ql(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Rr(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const h=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=cC(this.projectionDeltaWithTransform,this.treeScale,h),u&&(c.transform=u(h,c.transform));const{x:p,y:x}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${x.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:c.opacity=d===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const y in Lc){if(h[y]===void 0)continue;const{correct:m,applyTo:f}=Lc[y],g=c.transform==="none"?h[y]:m(h[y],d);if(f){const v=f.length;for(let M=0;M<v;M++)c[f[M]]=g}else c[y]=g}return this.options.layoutId&&(c.pointerEvents=d===this?ql(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(nv),this.root.sharedNodes.clear()}}}function fC(t){t.updateLayout()}function hC(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Ln(d=>{const h=o?n.measuredBox[d]:n.layoutBox[d],p=Tn(h);h.min=i[d].min,h.max=h.min+p}):sM(s,n.layoutBox,i)&&Ln(d=>{const h=o?n.measuredBox[d]:n.layoutBox[d],p=Tn(i[d]);h.max=h.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Ps();Qo(a,i,n.layoutBox);const l=Ps();o?Qo(l,t.applyTransform(r,!0),n.measuredBox):Qo(l,i,n.layoutBox);const c=!tM(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:h,layout:p}=d;if(h&&p){const x=Et();Jo(x,n.layoutBox,h.layoutBox);const y=Et();Jo(y,i,p.layoutBox),nM(x,y)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=x,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function pC(t){ko&&Pr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function mC(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function gC(t){t.clearSnapshot()}function nv(t){t.clearMeasurements()}function vC(t){t.isLayoutDirty=!1}function xC(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function iv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function yC(t){t.resolveTargetDelta()}function _C(t){t.calcProjection()}function SC(t){t.resetSkewAndRotation()}function MC(t){t.removeLeadSnapshot()}function rv(t,e,n){t.translate=mt(e.translate,0,n),t.scale=mt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function sv(t,e,n,i){t.min=mt(e.min,n.min,i),t.max=mt(e.max,n.max,i)}function EC(t,e,n,i){sv(t.x,e.x,n.x,i),sv(t.y,e.y,n.y,i)}function wC(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const TC={duration:.45,ease:[.4,0,.1,1]},ov=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),av=ov("applewebkit/")&&!ov("chrome/")?Math.round:Mn;function lv(t){t.min=av(t.min),t.max=av(t.max)}function AC(t){lv(t.x),lv(t.y)}function sM(t,e,n){return t==="position"||t==="preserve-aspect"&&!Rb(J0(e),J0(n),.2)}function bC(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const CC=rM({attachResizeListener:(t,e)=>Sa(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ud={current:void 0},oM=rM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ud.current){const t=new CC({});t.mount(window),t.setOptions({layoutScroll:!0}),ud.current=t}return ud.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),RC={pan:{Feature:Wb},drag:{Feature:jb,ProjectionNode:oM,MeasureLayout:QS}};function cv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&lt.postRender(()=>s(e,Na(e)))}class PC extends vr{mount(){const{current:e}=this.node;e&&(this.unmount=CT(e,n=>(cv(this.node,n,"Start"),i=>cv(this.node,i,"End"))))}unmount(){}}class LC extends vr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=La(Sa(this.node.current,"focus",()=>this.onFocus()),Sa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function uv(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&lt.postRender(()=>s(e,Na(e)))}class NC extends vr{mount(){const{current:e}=this.node;e&&(this.unmount=NT(e,n=>(uv(this.node,n,"Start"),(i,{success:r})=>uv(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Qf=new WeakMap,dd=new WeakMap,DC=t=>{const e=Qf.get(t.target);e&&e(t)},IC=t=>{t.forEach(DC)};function UC({root:t,...e}){const n=t||document;dd.has(n)||dd.set(n,{});const i=dd.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(IC,{root:t,...e})),i[r]}function FC(t,e,n){const i=UC(e);return Qf.set(t,n),i.observe(t),()=>{Qf.delete(t),i.unobserve(t)}}const OC={some:0,all:1};class kC extends vr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:OC[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),h=c?u:d;h&&h(l)};return FC(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(BC(e,n))&&this.startObserver()}unmount(){}}function BC({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const zC={inView:{Feature:kC},tap:{Feature:NC},focus:{Feature:LC},hover:{Feature:PC}},VC={layout:{ProjectionNode:oM,MeasureLayout:QS}},Jf={current:null},aM={current:!1};function HC(){if(aM.current=!0,!!kp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Jf.current=t.matches;t.addListener(e),e()}else Jf.current=!1}const GC=[...NS,Xt,dr],jC=t=>GC.find(LS(t)),dv=new WeakMap;function WC(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Ft(r))t.addValue(i,r);else if(Ft(s))t.addValue(i,Qs(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,Qs(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const fv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class XC{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=fm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=ci.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,lt.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=fu(n),this.isVariantNode=z_(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in h){const x=h[p];l[p]!==void 0&&Ft(x)&&x.set(l[p],!1)}}mount(e){this.current=e,dv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),aM.current||HC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Jf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){dv.delete(this.current),this.projection&&this.projection.unmount(),ur(this.notifyUpdate),ur(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Jr.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&lt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Zs){const n=Zs[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Et()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<fv.length;i++){const r=fv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=WC(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Qs(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(RS(r)||_S(r))?r=parseFloat(r):!jC(r)&&dr.test(n)&&(r=AS(e,n)),this.setBaseTarget(e,Ft(r)?r.get():r)),Ft(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Xp(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Ft(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new om),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class lM extends XC{constructor(){super(...arguments),this.KeyframeResolver=DS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ft(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function $C(t){return window.getComputedStyle(t)}class YC extends lM{constructor(){super(...arguments),this.type="html",this.renderInstance=q_}readValueFromInstance(e,n){if(Jr.has(n)){const i=dm(n);return i&&i.default||0}else{const i=$C(e),r=(X_(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return KS(e,n)}build(e,n,i){qp(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Jp(e,n,i)}}class qC extends lM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Et}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Jr.has(n)){const i=dm(n);return i&&i.default||0}return n=K_.has(n)?n:Gp(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return J_(e,n,i)}build(e,n,i){Kp(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){Z_(e,n,i,r)}mount(e){this.isSVGTag=Qp(e.tagName),super.mount(e)}}const KC=(t,e)=>Wp(t)?new qC(e):new YC(e,{allowProjection:t!==ne.Fragment}),ZC=ST({..._b,...zC,...RC,...VC},KC),st=Fw(ZC);function QC(t){const e=au(()=>Qs(t)),{isStatic:n}=ne.useContext(Ca);if(n){const[,i]=ne.useState(t);ne.useEffect(()=>e.on("change",i),[])}return e}function hv(t){return typeof t=="number"?t:parseFloat(t)}function JC(t,e={}){const{isStatic:n}=ne.useContext(Ca),i=ne.useRef(null),r=QC(Ft(t)?hv(t.get()):t),s=ne.useRef(r.get()),o=ne.useRef(()=>{}),a=()=>{const c=i.current;c&&c.time===0&&c.sample(It.delta),l(),i.current=$A({keyframes:[r.get(),s.current],velocity:r.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:o.current})},l=()=>{i.current&&i.current.stop()};return ne.useInsertionEffect(()=>r.attach((c,u)=>n?u(c):(s.current=c,o.current=u,lt.update(a),r.get()),l),[JSON.stringify(e)]),Bp(()=>{if(Ft(t))return t.on("change",c=>r.set(hv(c)))},[r]),r}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mm="169",eR=0,pv=1,tR=2,cM=1,nR=2,gi=3,fr=0,fn=1,yi=2,or=0,zs=1,Oc=2,mv=3,gv=4,iR=5,Dr=100,rR=101,sR=102,oR=103,aR=104,lR=200,cR=201,uR=202,dR=203,eh=204,th=205,fR=206,hR=207,pR=208,mR=209,gR=210,vR=211,xR=212,yR=213,_R=214,nh=0,ih=1,rh=2,eo=3,sh=4,oh=5,ah=6,lh=7,uM=0,SR=1,MR=2,ar=0,ER=1,wR=2,TR=3,AR=4,bR=5,CR=6,RR=7,dM=300,to=301,no=302,ch=303,uh=304,gu=306,dh=1e3,Br=1001,fh=1002,Fn=1003,PR=1004,dl=1005,qn=1006,fd=1007,zr=1008,Di=1009,fM=1010,hM=1011,Ma=1012,gm=1013,qr=1014,Mi=1015,Da=1016,vm=1017,xm=1018,io=1020,pM=35902,mM=1021,gM=1022,Zn=1023,vM=1024,xM=1025,Vs=1026,ro=1027,yM=1028,ym=1029,_M=1030,_m=1031,Sm=1033,Ql=33776,Jl=33777,ec=33778,tc=33779,hh=35840,ph=35841,mh=35842,gh=35843,vh=36196,xh=37492,yh=37496,_h=37808,Sh=37809,Mh=37810,Eh=37811,wh=37812,Th=37813,Ah=37814,bh=37815,Ch=37816,Rh=37817,Ph=37818,Lh=37819,Nh=37820,Dh=37821,nc=36492,Ih=36494,Uh=36495,SM=36283,Fh=36284,Oh=36285,kh=36286,LR=3200,NR=3201,DR=0,IR=1,qi="",ii="srgb",xr="srgb-linear",Mm="display-p3",vu="display-p3-linear",kc="linear",dt="srgb",Bc="rec709",zc="p3",ns=7680,vv=519,UR=512,FR=513,OR=514,MM=515,kR=516,BR=517,zR=518,VR=519,xv=35044,yv="300 es",Ei=2e3,Vc=2001;class fo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hd=Math.PI/180,Bh=180/Math.PI;function Ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function an(t,e,n){return Math.max(e,Math.min(n,t))}function HR(t,e){return(t%e+e)%e}function pd(t,e,n){return(1-n)*t+n*e}function wo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],x=i[8],y=r[0],m=r[3],f=r[6],g=r[1],v=r[4],M=r[7],C=r[2],b=r[5],A=r[8];return s[0]=o*y+a*g+l*C,s[3]=o*m+a*v+l*b,s[6]=o*f+a*M+l*A,s[1]=c*y+u*g+d*C,s[4]=c*m+u*v+d*b,s[7]=c*f+u*M+d*A,s[2]=h*y+p*g+x*C,s[5]=h*m+p*v+x*b,s[8]=h*f+p*M+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,x=n*d+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(md.makeScale(e,n)),this}rotate(e){return this.premultiply(md.makeRotation(-e)),this}translate(e,n){return this.premultiply(md.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const md=new Ge;function EM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function GR(){const t=Hc("canvas");return t.style.display="block",t}const _v={};function ic(t){t in _v||(_v[t]=!0,console.warn(t))}function jR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function WR(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function XR(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Sv=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mv=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),To={[xr]:{transfer:kc,primaries:Bc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ii]:{transfer:dt,primaries:Bc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[vu]:{transfer:kc,primaries:zc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Mv),fromReference:t=>t.applyMatrix3(Sv)},[Mm]:{transfer:dt,primaries:zc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Mv),fromReference:t=>t.applyMatrix3(Sv).convertLinearToSRGB()}},$R=new Set([xr,vu]),tt={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!$R.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=To[e].toReference,r=To[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return To[t].primaries},getTransfer:function(t){return t===qi?kc:To[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(To[e].luminanceCoefficients)}};function Hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function gd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let is;class YR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{is===void 0&&(is=Hc("canvas")),is.width=e.width,is.height=e.height;const i=is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=is}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hs(n[i]/255)*255):n[i]=Hs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qR=0;class wM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qR++}),this.uuid=Ia(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vd(r[o].image)):s.push(vd(r[o]))}else s=vd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function vd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?YR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KR=0;class hn extends fo{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Br,r=Br,s=qn,o=zr,a=Zn,l=Di,c=hn.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KR++}),this.uuid=Ia(),this.name="",this.source=new wM(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dh:e.x=e.x-Math.floor(e.x);break;case Br:e.x=e.x<0?0:1;break;case fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dh:e.y=e.y-Math.floor(e.y);break;case Br:e.y=e.y<0?0:1;break;case fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=dM;hn.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,n=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],x=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(p+1)/2,C=(f+1)/2,b=(u+h)/4,A=(d+y)/4,L=(x+m)/4;return v>M&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=A/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=L/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-x)*(m-x)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(d-y)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ZR extends fo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new wM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends ZR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class TM extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QR extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ua{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=y;return}if(d!==y||l!==h||c!==p||u!==x){let m=1-a;const f=l*h+c*p+u*x+d*y,g=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const C=Math.sqrt(v),b=Math.atan2(C,f*g);m=Math.sin(m*b)/C,a=Math.sin(a*b)/C}const M=a*g;if(l=l*m+h*M,c=c*m+p*M,u=u*m+x*M,d=d*m+y*M,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+u*d+l*p-c*h,e[n+1]=l*x+u*h+c*d-a*p,e[n+2]=c*x+u*p+a*h-l*d,e[n+3]=u*x-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"YZX":this._x=h*u*d+c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d-h*p*x;break;case"XZY":this._x=h*u*d-c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ev.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ev.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xd=new B,Ev=new Ua;class Fa{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),hl.subVectors(this.max,Ao),rs.subVectors(e.a,Ao),ss.subVectors(e.b,Ao),os.subVectors(e.c,Ao),ki.subVectors(ss,rs),Bi.subVectors(os,ss),Sr.subVectors(rs,os);let n=[0,-ki.z,ki.y,0,-Bi.z,Bi.y,0,-Sr.z,Sr.y,ki.z,0,-ki.x,Bi.z,0,-Bi.x,Sr.z,0,-Sr.x,-ki.y,ki.x,0,-Bi.y,Bi.x,0,-Sr.y,Sr.x,0];return!yd(n,rs,ss,os,hl)||(n=[1,0,0,0,1,0,0,0,1],!yd(n,rs,ss,os,hl))?!1:(pl.crossVectors(ki,Bi),n=[pl.x,pl.y,pl.z],yd(n,rs,ss,os,hl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new B,new B,new B,new B,new B,new B,new B,new B],Hn=new B,fl=new Fa,rs=new B,ss=new B,os=new B,ki=new B,Bi=new B,Sr=new B,Ao=new B,hl=new B,pl=new B,Mr=new B;function yd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Mr.fromArray(t,s);const a=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=e.dot(Mr),c=n.dot(Mr),u=i.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const JR=new Fa,bo=new B,_d=new B;class Oa{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):JR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const n=bo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(bo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_d.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(_d)),this.expandByPoint(bo.copy(e.center).sub(_d))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new B,Sd=new B,ml=new B,zi=new B,Md=new B,gl=new B,Ed=new B;class Em{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Sd.copy(e).add(n).multiplyScalar(.5),ml.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(Sd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ml),a=zi.dot(this.direction),l=-zi.dot(ml),c=zi.lengthSq(),u=Math.abs(1-o*o);let d,h,p,x;if(u>0)if(d=o*l-a,h=o*a-l,x=s*u,d>=0)if(h>=-x)if(h<=x){const y=1/u;d*=y,h*=y,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Sd).addScaledVector(ml,h),p}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){Md.subVectors(n,e),gl.subVectors(i,e),Ed.crossVectors(Md,gl);let o=this.direction.dot(Ed),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(gl.crossVectors(zi,gl));if(l<0)return null;const c=a*this.direction.dot(Md.cross(zi));if(c<0||l+c>o)return null;const u=-a*zi.dot(Ed);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,s,o,a,l,c,u,d,h,p,x,y,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,p,x,y,m)}set(e,n,i,r,s,o,a,l,c,u,d,h,p,x,y,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,x=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+x*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=x+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,x=c*u,y=c*d;n[0]=h+y*a,n[4]=x*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-x,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,x=c*u,y=c*d;n[0]=h-y*a,n[4]=-o*d,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*u,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,x=a*u,y=a*d;n[0]=l*u,n[4]=x*c-p,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=p*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,x=a*l,y=a*c;n[0]=l*u,n[4]=y-h*d,n[8]=x*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+x,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,p=o*c,x=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+y,n[5]=o*u,n[9]=p*d-x,n[2]=x*d-p,n[6]=a*u,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e2,e,t2)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Vi.crossVectors(i,vn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Vi.crossVectors(i,vn)),Vi.normalize(),vl.crossVectors(vn,Vi),r[0]=Vi.x,r[4]=vl.x,r[8]=vn.x,r[1]=Vi.y,r[5]=vl.y,r[9]=vn.y,r[2]=Vi.z,r[6]=vl.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],x=i[2],y=i[6],m=i[10],f=i[14],g=i[3],v=i[7],M=i[11],C=i[15],b=r[0],A=r[4],L=r[8],V=r[12],_=r[1],w=r[5],W=r[9],j=r[13],Z=r[2],ie=r[6],Y=r[10],K=r[14],I=r[3],Q=r[7],N=r[11],P=r[15];return s[0]=o*b+a*_+l*Z+c*I,s[4]=o*A+a*w+l*ie+c*Q,s[8]=o*L+a*W+l*Y+c*N,s[12]=o*V+a*j+l*K+c*P,s[1]=u*b+d*_+h*Z+p*I,s[5]=u*A+d*w+h*ie+p*Q,s[9]=u*L+d*W+h*Y+p*N,s[13]=u*V+d*j+h*K+p*P,s[2]=x*b+y*_+m*Z+f*I,s[6]=x*A+y*w+m*ie+f*Q,s[10]=x*L+y*W+m*Y+f*N,s[14]=x*V+y*j+m*K+f*P,s[3]=g*b+v*_+M*Z+C*I,s[7]=g*A+v*w+M*ie+C*Q,s[11]=g*L+v*W+M*Y+C*N,s[15]=g*V+v*j+M*K+C*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],x=e[3],y=e[7],m=e[11],f=e[15];return x*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+y*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],x=e[12],y=e[13],m=e[14],f=e[15],g=d*m*c-y*h*c+y*l*p-a*m*p-d*l*f+a*h*f,v=x*h*c-u*m*c-x*l*p+o*m*p+u*l*f-o*h*f,M=u*y*c-x*d*c+x*a*p-o*y*p-u*a*f+o*d*f,C=x*d*l-u*y*l-x*a*h+o*y*h+u*a*m-o*d*m,b=n*g+i*v+r*M+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=g*A,e[1]=(y*h*s-d*m*s-y*r*p+i*m*p+d*r*f-i*h*f)*A,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*f+i*l*f)*A,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*A,e[4]=v*A,e[5]=(u*m*s-x*h*s+x*r*p-n*m*p-u*r*f+n*h*f)*A,e[6]=(x*l*s-o*m*s-x*r*c+n*m*c+o*r*f-n*l*f)*A,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*A,e[8]=M*A,e[9]=(x*d*s-u*y*s-x*i*p+n*y*p+u*i*f-n*d*f)*A,e[10]=(o*y*s-x*a*s+x*i*c-n*y*c-o*i*f+n*a*f)*A,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(u*y*r-x*d*r+x*i*h-n*y*h-u*i*m+n*d*m)*A,e[14]=(x*a*r-o*y*r-x*i*l+n*y*l+o*i*m-n*a*m)*A,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,x=s*d,y=o*u,m=o*d,f=a*d,g=l*c,v=l*u,M=l*d,C=i.x,b=i.y,A=i.z;return r[0]=(1-(y+f))*C,r[1]=(p+M)*C,r[2]=(x-v)*C,r[3]=0,r[4]=(p-M)*b,r[5]=(1-(h+f))*b,r[6]=(m+g)*b,r[7]=0,r[8]=(x+v)*A,r[9]=(m-g)*A,r[10]=(1-(h+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=as.set(r[0],r[1],r[2]).length();const o=as.set(r[4],r[5],r[6]).length(),a=as.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/s,u=1/o,d=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,n.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ei){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,x;if(a===Ei)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Vc)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*u;let x,y;if(a===Ei)x=(o+s)*d,y=-2*d;else if(a===Vc)x=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const as=new B,Gn=new St,e2=new B(0,0,0),t2=new B(1,1,1),Vi=new B,vl=new B,vn=new B,wv=new St,Tv=new Ua;class Ii{constructor(e=0,n=0,i=0,r=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-an(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Tv.setFromEuler(this),this.setFromQuaternion(Tv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";let AM=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},n2=0;const Av=new B,ls=new Ua,hi=new St,xl=new B,Co=new B,i2=new B,r2=new Ua,bv=new B(1,0,0),Cv=new B(0,1,0),Rv=new B(0,0,1),Pv={type:"added"},s2={type:"removed"},cs={type:"childadded",child:null},wd={type:"childremoved",child:null};class Qt extends fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n2++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new B,n=new Ii,i=new Ua,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Ge}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new AM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(bv,e)}rotateY(e){return this.rotateOnAxis(Cv,e)}rotateZ(e){return this.rotateOnAxis(Rv,e)}translateOnAxis(e,n){return Av.copy(e).applyQuaternion(this.quaternion),this.position.add(Av.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bv,e)}translateY(e){return this.translateOnAxis(Cv,e)}translateZ(e){return this.translateOnAxis(Rv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xl.copy(e):xl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Co,xl,this.up):hi.lookAt(xl,Co,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),ls.setFromRotationMatrix(hi),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pv),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(s2),wd.child=e,this.dispatchEvent(wd),wd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pv),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,i2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,r2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new B(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new B,pi=new B,Td=new B,mi=new B,us=new B,ds=new B,Lv=new B,Ad=new B,bd=new B,Cd=new B,Rd=new Tt,Pd=new Tt,Ld=new Tt;class Kn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),pi.subVectors(i,n),Td.subVectors(e,n);const o=jn.dot(jn),a=jn.dot(pi),l=jn.dot(Td),c=pi.dot(pi),u=pi.dot(Td),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,x=(o*u-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Rd.setScalar(0),Pd.setScalar(0),Ld.setScalar(0),Rd.fromBufferAttribute(e,n),Pd.fromBufferAttribute(e,i),Ld.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Rd,s.x),o.addScaledVector(Pd,s.y),o.addScaledVector(Ld,s.z),o}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),pi.subVectors(e,n),jn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),jn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;us.subVectors(r,i),ds.subVectors(s,i),Ad.subVectors(e,i);const l=us.dot(Ad),c=ds.dot(Ad);if(l<=0&&c<=0)return n.copy(i);bd.subVectors(e,r);const u=us.dot(bd),d=ds.dot(bd);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(us,o);Cd.subVectors(e,s);const p=us.dot(Cd),x=ds.dot(Cd);if(x>=0&&p<=x)return n.copy(s);const y=p*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(ds,a);const m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return Lv.subVectors(s,r),a=(d-u)/(d-u+(p-x)),n.copy(r).addScaledVector(Lv,a);const f=1/(m+y+h);return o=y*f,a=h*f,n.copy(i).addScaledVector(us,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},yl={h:0,s:0,l:0};function Nd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=HR(e,1),n=an(n,0,1),i=an(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Nd(o,s,e+1/3),this.g=Nd(o,s,e),this.b=Nd(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=ii){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ii){const i=bM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=gd(e.r),this.g=gd(e.g),this.b=gd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return tt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(an(Wt.r*255,0,255))*65536+Math.round(an(Wt.g*255,0,255))*256+Math.round(an(Wt.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=ii){tt.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==ii?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(yl);const i=pd(Hi.h,yl.h,n),r=pd(Hi.s,yl.s,n),s=pd(Hi.l,yl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new We;We.NAMES=bM;let o2=0;class ho extends fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o2++}),this.uuid=Ia(),this.name="",this.type="Material",this.blending=zs,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=th,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eh&&(i.blendSrc=this.blendSrc),this.blendDst!==th&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class CM extends ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=uM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new B,_l=new nt;class En{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xv,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(e),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=wo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=wo(n,this.array)),n}setX(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=wo(n,this.array)),n}setY(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=wo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=wo(n,this.array)),n}setW(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xv&&(e.usage=this.usage),e}}class RM extends En{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class PM extends En{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Jt extends En{constructor(e,n,i){super(new Float32Array(e),n,i)}}let a2=0;const Pn=new St,Dd=new Qt,fs=new B,xn=new Fa,Ro=new Fa,Dt=new B;class pn extends fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a2++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(EM(e)?PM:RM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return Dd.lookAt(e),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(xn.min,Ro.min),xn.expandByPoint(Dt),Dt.addVectors(xn.max,Ro.max),xn.expandByPoint(Dt)):(xn.expandByPoint(Ro.min),xn.expandByPoint(Ro.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(e,c),Dt.add(fs)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new B,l[L]=new B;const c=new B,u=new B,d=new B,h=new nt,p=new nt,x=new nt,y=new B,m=new B;function f(L,V,_){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,V),d.fromBufferAttribute(i,_),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,V),x.fromBufferAttribute(s,_),u.sub(c),d.sub(c),p.sub(h),x.sub(h);const w=1/(p.x*x.y-x.x*p.y);isFinite(w)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(w),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(w),a[L].add(y),a[V].add(y),a[_].add(y),l[L].add(m),l[V].add(m),l[_].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let L=0,V=g.length;L<V;++L){const _=g[L],w=_.start,W=_.count;for(let j=w,Z=w+W;j<Z;j+=3)f(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const v=new B,M=new B,C=new B,b=new B;function A(L){C.fromBufferAttribute(r,L),b.copy(C);const V=a[L];v.copy(V),v.sub(C.multiplyScalar(C.dot(V))).normalize(),M.crossVectors(b,V);const w=M.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,w)}for(let L=0,V=g.length;L<V;++L){const _=g[L],w=_.start,W=_.count;for(let j=w,Z=w+W;j<Z;j+=3)A(e.getX(j+0)),A(e.getX(j+1)),A(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,x=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let f=0;f<u;f++)h[x++]=c[p++]}return new En(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nv=new St,Er=new Em,Sl=new Oa,Dv=new B,Ml=new B,El=new B,wl=new B,Id=new B,Tl=new B,Iv=new B,Al=new B;class wi extends Qt{constructor(e=new pn,n=new CM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Tl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Id.fromBufferAttribute(d,e),o?Tl.addScaledVector(Id,u):Tl.addScaledVector(Id.sub(n),u))}n.add(Tl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(Sl.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Sl,Dv)===null||Er.origin.distanceToSquared(Dv)>(e.far-e.near)**2))&&(Nv.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Nv),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const m=h[x],f=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,C=v;M<C;M+=3){const b=a.getX(M),A=a.getX(M+1),L=a.getX(M+2);r=bl(this,f,e,i,c,u,d,b,A,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=x,f=y;m<f;m+=3){const g=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);r=bl(this,o,e,i,c,u,d,g,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const m=h[x],f=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,C=v;M<C;M+=3){const b=M,A=M+1,L=M+2;r=bl(this,f,e,i,c,u,d,b,A,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,f=y;m<f;m+=3){const g=m,v=m+1,M=m+2;r=bl(this,o,e,i,c,u,d,g,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function l2(t,e,n,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fr,a),l===null)return null;Al.copy(a),Al.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Al);return c<n.near||c>n.far?null:{distance:c,point:Al.clone(),object:t}}function bl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ml),t.getVertexPosition(l,El),t.getVertexPosition(c,wl);const u=l2(t,e,n,i,Ml,El,wl,Iv);if(u){const d=new B;Kn.getBarycoord(Iv,Ml,El,wl,d),r&&(u.uv=Kn.getInterpolatedAttribute(r,a,l,c,d,new nt)),s&&(u.uv1=Kn.getInterpolatedAttribute(s,a,l,c,d,new nt)),o&&(u.normal=Kn.getInterpolatedAttribute(o,a,l,c,d,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};Kn.getNormal(Ml,El,wl,h.normal),u.face=h,u.barycoord=d}return u}class ka extends pn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(d,2));function x(y,m,f,g,v,M,C,b,A,L,V){const _=M/A,w=C/L,W=M/2,j=C/2,Z=b/2,ie=A+1,Y=L+1;let K=0,I=0;const Q=new B;for(let N=0;N<Y;N++){const P=N*w-j;for(let re=0;re<ie;re++){const fe=re*_-W;Q[y]=fe*g,Q[m]=P*v,Q[f]=Z,c.push(Q.x,Q.y,Q.z),Q[y]=0,Q[m]=0,Q[f]=b>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(re/A),d.push(1-N/L),K+=1}}for(let N=0;N<L;N++)for(let P=0;P<A;P++){const re=h+P+ie*N,fe=h+P+ie*(N+1),O=h+(P+1)+ie*(N+1),$=h+(P+1)+ie*N;l.push(re,fe,$),l.push(fe,O,$),I+=6}a.addGroup(p,I,V),p+=I,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=so(t[n]);for(const r in i)e[r]=i[r]}return e}function c2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function LM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const u2={clone:so,merge:qt};var d2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d2,this.fragmentShader=f2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=c2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class NM extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new B,Uv=new nt,Fv=new nt;class In extends NM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bh*2*Math.atan(Math.tan(hd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,n){return this.getViewBounds(e,Uv,Fv),n.subVectors(Fv,Uv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const hs=-90,ps=1;class h2 extends Qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(hs,ps,e,n);r.layers=this.layers,this.add(r);const s=new In(hs,ps,e,n);s.layers=this.layers,this.add(s);const o=new In(hs,ps,e,n);o.layers=this.layers,this.add(o);const a=new In(hs,ps,e,n);a.layers=this.layers,this.add(a);const l=new In(hs,ps,e,n);l.layers=this.layers,this.add(l);const c=new In(hs,ps,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class DM extends hn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:to,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class p2 extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new DM(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ka(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:or});s.uniforms.tEquirect.value=n;const o=new wi(r,s),a=n.minFilter;return n.minFilter===zr&&(n.minFilter=qn),new h2(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ud=new B,m2=new B,g2=new Ge;class Lr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ud.subVectors(i,n).cross(m2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ud),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||g2.getNormalMatrix(e),r=this.coplanarPoint(Ud).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new Oa,Cl=new B;class IM{constructor(e=new Lr,n=new Lr,i=new Lr,r=new Lr,s=new Lr,o=new Lr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],x=r[9],y=r[10],m=r[11],f=r[12],g=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-p,M-f).normalize(),i[1].setComponents(l+s,h+c,m+p,M+f).normalize(),i[2].setComponents(l+o,h+u,m+x,M+g).normalize(),i[3].setComponents(l-o,h-u,m-x,M-g).normalize(),i[4].setComponents(l-a,h-d,m-y,M-v).normalize(),n===Ei)i[5].setComponents(l+a,h+d,m+y,M+v).normalize();else if(n===Vc)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Cl.x=r.normal.x>0?e.max.x:e.min.x,Cl.y=r.normal.y>0?e.max.y:e.min.y,Cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function UM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function v2(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<d.length;p++){const x=d[h],y=d[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,x=d.length;p<x;p++){const y=d[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class xu extends pn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],x=[],y=[],m=[];for(let f=0;f<u;f++){const g=f*h-o;for(let v=0;v<c;v++){const M=v*d-s;x.push(M,-g,0),y.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const v=g+c*f,M=g+c*(f+1),C=g+1+c*(f+1),b=g+1+c*f;p.push(v,M,b),p.push(M,C,b)}this.setIndex(p),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.width,e.height,e.widthSegments,e.heightSegments)}}var x2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y2=`#ifdef USE_ALPHAHASH
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
#endif`,_2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w2=`#ifdef USE_AOMAP
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
#endif`,T2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A2=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,b2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L2=`#ifdef USE_IRIDESCENCE
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
#endif`,N2=`#ifdef USE_BUMPMAP
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
#endif`,D2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,z2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,V2=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,H2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G2=`vec3 transformedNormal = objectNormal;
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
#endif`,j2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y2="gl_FragColor = linearToOutputTexel( gl_FragColor );",q2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K2=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Z2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q2=`#ifdef USE_ENVMAP
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
#endif`,J2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eP=`#ifdef USE_ENVMAP
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
#endif`,tP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sP=`#ifdef USE_GRADIENTMAP
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
}`,oP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cP=`uniform bool receiveShadow;
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
#endif`,uP=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,dP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,gP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vP=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,xP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,yP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_P=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bP=`#if defined( USE_POINTS_UV )
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
#endif`,CP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DP=`#ifdef USE_MORPHTARGETS
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
#endif`,IP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zP=`#ifdef USE_NORMALMAP
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
#endif`,VP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$P=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nL=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,iL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rL=`#ifdef USE_SKINNING
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
#endif`,sL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oL=`#ifdef USE_SKINNING
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
#endif`,aL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uL=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dL=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fL=`#ifdef USE_TRANSMISSION
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
#endif`,hL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xL=`uniform sampler2D t2D;
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
}`,yL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_L=`#ifdef ENVMAP_TYPE_CUBE
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
}`,SL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ML=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EL=`#include <common>
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
}`,wL=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TL=`#define DISTANCE
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
}`,AL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,bL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RL=`uniform float scale;
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
}`,PL=`uniform vec3 diffuse;
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
}`,LL=`#include <common>
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
}`,NL=`uniform vec3 diffuse;
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
}`,DL=`#define LAMBERT
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
}`,IL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,UL=`#define MATCAP
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
}`,FL=`#define MATCAP
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
}`,OL=`#define NORMAL
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
}`,kL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BL=`#define PHONG
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
}`,zL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,VL=`#define STANDARD
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
}`,HL=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,GL=`#define TOON
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
}`,jL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,WL=`uniform float size;
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
}`,XL=`uniform vec3 diffuse;
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
}`,$L=`#include <common>
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
}`,YL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,qL=`uniform float rotation;
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
}`,KL=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:x2,alphahash_pars_fragment:y2,alphamap_fragment:_2,alphamap_pars_fragment:S2,alphatest_fragment:M2,alphatest_pars_fragment:E2,aomap_fragment:w2,aomap_pars_fragment:T2,batching_pars_vertex:A2,batching_vertex:b2,begin_vertex:C2,beginnormal_vertex:R2,bsdfs:P2,iridescence_fragment:L2,bumpmap_pars_fragment:N2,clipping_planes_fragment:D2,clipping_planes_pars_fragment:I2,clipping_planes_pars_vertex:U2,clipping_planes_vertex:F2,color_fragment:O2,color_pars_fragment:k2,color_pars_vertex:B2,color_vertex:z2,common:V2,cube_uv_reflection_fragment:H2,defaultnormal_vertex:G2,displacementmap_pars_vertex:j2,displacementmap_vertex:W2,emissivemap_fragment:X2,emissivemap_pars_fragment:$2,colorspace_fragment:Y2,colorspace_pars_fragment:q2,envmap_fragment:K2,envmap_common_pars_fragment:Z2,envmap_pars_fragment:Q2,envmap_pars_vertex:J2,envmap_physical_pars_fragment:uP,envmap_vertex:eP,fog_vertex:tP,fog_pars_vertex:nP,fog_fragment:iP,fog_pars_fragment:rP,gradientmap_pars_fragment:sP,lightmap_pars_fragment:oP,lights_lambert_fragment:aP,lights_lambert_pars_fragment:lP,lights_pars_begin:cP,lights_toon_fragment:dP,lights_toon_pars_fragment:fP,lights_phong_fragment:hP,lights_phong_pars_fragment:pP,lights_physical_fragment:mP,lights_physical_pars_fragment:gP,lights_fragment_begin:vP,lights_fragment_maps:xP,lights_fragment_end:yP,logdepthbuf_fragment:_P,logdepthbuf_pars_fragment:SP,logdepthbuf_pars_vertex:MP,logdepthbuf_vertex:EP,map_fragment:wP,map_pars_fragment:TP,map_particle_fragment:AP,map_particle_pars_fragment:bP,metalnessmap_fragment:CP,metalnessmap_pars_fragment:RP,morphinstance_vertex:PP,morphcolor_vertex:LP,morphnormal_vertex:NP,morphtarget_pars_vertex:DP,morphtarget_vertex:IP,normal_fragment_begin:UP,normal_fragment_maps:FP,normal_pars_fragment:OP,normal_pars_vertex:kP,normal_vertex:BP,normalmap_pars_fragment:zP,clearcoat_normal_fragment_begin:VP,clearcoat_normal_fragment_maps:HP,clearcoat_pars_fragment:GP,iridescence_pars_fragment:jP,opaque_fragment:WP,packing:XP,premultiplied_alpha_fragment:$P,project_vertex:YP,dithering_fragment:qP,dithering_pars_fragment:KP,roughnessmap_fragment:ZP,roughnessmap_pars_fragment:QP,shadowmap_pars_fragment:JP,shadowmap_pars_vertex:eL,shadowmap_vertex:tL,shadowmask_pars_fragment:nL,skinbase_vertex:iL,skinning_pars_vertex:rL,skinning_vertex:sL,skinnormal_vertex:oL,specularmap_fragment:aL,specularmap_pars_fragment:lL,tonemapping_fragment:cL,tonemapping_pars_fragment:uL,transmission_fragment:dL,transmission_pars_fragment:fL,uv_pars_fragment:hL,uv_pars_vertex:pL,uv_vertex:mL,worldpos_vertex:gL,background_vert:vL,background_frag:xL,backgroundCube_vert:yL,backgroundCube_frag:_L,cube_vert:SL,cube_frag:ML,depth_vert:EL,depth_frag:wL,distanceRGBA_vert:TL,distanceRGBA_frag:AL,equirect_vert:bL,equirect_frag:CL,linedashed_vert:RL,linedashed_frag:PL,meshbasic_vert:LL,meshbasic_frag:NL,meshlambert_vert:DL,meshlambert_frag:IL,meshmatcap_vert:UL,meshmatcap_frag:FL,meshnormal_vert:OL,meshnormal_frag:kL,meshphong_vert:BL,meshphong_frag:zL,meshphysical_vert:VL,meshphysical_frag:HL,meshtoon_vert:GL,meshtoon_frag:jL,points_vert:WL,points_frag:XL,shadow_vert:$L,shadow_frag:YL,sprite_vert:qL,sprite_frag:KL},he={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ri={basic:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new We(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:qt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:qt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new We(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:qt([he.points,he.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:qt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:qt([he.common,he.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:qt([he.sprite,he.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:qt([he.common,he.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:qt([he.lights,he.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ri.physical={uniforms:qt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Rl={r:0,b:0,g:0},Tr=new Ii,ZL=new St;function QL(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function x(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function y(g){let v=!1;const M=x(g);M===null?f(a,l):M&&M.isColor&&(f(M,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,v){const M=x(v);M&&(M.isCubeTexture||M.mapping===gu)?(u===void 0&&(u=new wi(new ka(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:so(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Tr.copy(v.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ZL.makeRotationFromEuler(Tr)),u.material.toneMapped=tt.getTransfer(M.colorSpace)!==dt,(d!==M||h!==M.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new wi(new xu(2,2),new hr({name:"BackgroundMaterial",uniforms:so(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=tt.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function f(g,v){g.getRGB(Rl,LM(t)),i.buffers.color.setClear(Rl.r,Rl.g,Rl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,f(a,l)},render:y,addToRenderList:m}}function JL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(_,w,W,j,Z){let ie=!1;const Y=d(j,W,w);s!==Y&&(s=Y,c(s.object)),ie=p(_,j,W,Z),ie&&x(_,j,W,Z),Z!==null&&e.update(Z,t.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,M(_,w,W,j),Z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function u(_){return t.deleteVertexArray(_)}function d(_,w,W){const j=W.wireframe===!0;let Z=i[_.id];Z===void 0&&(Z={},i[_.id]=Z);let ie=Z[w.id];ie===void 0&&(ie={},Z[w.id]=ie);let Y=ie[j];return Y===void 0&&(Y=h(l()),ie[j]=Y),Y}function h(_){const w=[],W=[],j=[];for(let Z=0;Z<n;Z++)w[Z]=0,W[Z]=0,j[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:W,attributeDivisors:j,object:_,attributes:{},index:null}}function p(_,w,W,j){const Z=s.attributes,ie=w.attributes;let Y=0;const K=W.getAttributes();for(const I in K)if(K[I].location>=0){const N=Z[I];let P=ie[I];if(P===void 0&&(I==="instanceMatrix"&&_.instanceMatrix&&(P=_.instanceMatrix),I==="instanceColor"&&_.instanceColor&&(P=_.instanceColor)),N===void 0||N.attribute!==P||P&&N.data!==P.data)return!0;Y++}return s.attributesNum!==Y||s.index!==j}function x(_,w,W,j){const Z={},ie=w.attributes;let Y=0;const K=W.getAttributes();for(const I in K)if(K[I].location>=0){let N=ie[I];N===void 0&&(I==="instanceMatrix"&&_.instanceMatrix&&(N=_.instanceMatrix),I==="instanceColor"&&_.instanceColor&&(N=_.instanceColor));const P={};P.attribute=N,N&&N.data&&(P.data=N.data),Z[I]=P,Y++}s.attributes=Z,s.attributesNum=Y,s.index=j}function y(){const _=s.newAttributes;for(let w=0,W=_.length;w<W;w++)_[w]=0}function m(_){f(_,0)}function f(_,w){const W=s.newAttributes,j=s.enabledAttributes,Z=s.attributeDivisors;W[_]=1,j[_]===0&&(t.enableVertexAttribArray(_),j[_]=1),Z[_]!==w&&(t.vertexAttribDivisor(_,w),Z[_]=w)}function g(){const _=s.newAttributes,w=s.enabledAttributes;for(let W=0,j=w.length;W<j;W++)w[W]!==_[W]&&(t.disableVertexAttribArray(W),w[W]=0)}function v(_,w,W,j,Z,ie,Y){Y===!0?t.vertexAttribIPointer(_,w,W,Z,ie):t.vertexAttribPointer(_,w,W,j,Z,ie)}function M(_,w,W,j){y();const Z=j.attributes,ie=W.getAttributes(),Y=w.defaultAttributeValues;for(const K in ie){const I=ie[K];if(I.location>=0){let Q=Z[K];if(Q===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor)),Q!==void 0){const N=Q.normalized,P=Q.itemSize,re=e.get(Q);if(re===void 0)continue;const fe=re.buffer,O=re.type,$=re.bytesPerElement,te=O===t.INT||O===t.UNSIGNED_INT||Q.gpuType===gm;if(Q.isInterleavedBufferAttribute){const X=Q.data,le=X.stride,ae=Q.offset;if(X.isInstancedInterleavedBuffer){for(let Me=0;Me<I.locationSize;Me++)f(I.location+Me,X.meshPerAttribute);_.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Me=0;Me<I.locationSize;Me++)m(I.location+Me);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let Me=0;Me<I.locationSize;Me++)v(I.location+Me,P/I.locationSize,O,N,le*$,(ae+P/I.locationSize*Me)*$,te)}else{if(Q.isInstancedBufferAttribute){for(let X=0;X<I.locationSize;X++)f(I.location+X,Q.meshPerAttribute);_.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let X=0;X<I.locationSize;X++)m(I.location+X);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let X=0;X<I.locationSize;X++)v(I.location+X,P/I.locationSize,O,N,P*$,P/I.locationSize*X*$,te)}}else if(Y!==void 0){const N=Y[K];if(N!==void 0)switch(N.length){case 2:t.vertexAttrib2fv(I.location,N);break;case 3:t.vertexAttrib3fv(I.location,N);break;case 4:t.vertexAttrib4fv(I.location,N);break;default:t.vertexAttrib1fv(I.location,N)}}}}g()}function C(){L();for(const _ in i){const w=i[_];for(const W in w){const j=w[W];for(const Z in j)u(j[Z].object),delete j[Z];delete w[W]}delete i[_]}}function b(_){if(i[_.id]===void 0)return;const w=i[_.id];for(const W in w){const j=w[W];for(const Z in j)u(j[Z].object),delete j[Z];delete w[W]}delete i[_.id]}function A(_){for(const w in i){const W=i[w];if(W[_.id]===void 0)continue;const j=W[_.id];for(const Z in j)u(j[Z].object),delete j[Z];delete W[_.id]}}function L(){V(),o=!0,s!==r&&(s=r,c(s.object))}function V(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:V,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function e3(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let x=0;for(let y=0;y<d;y++)x+=u[y];for(let y=0;y<h.length;y++)n.update(x,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function t3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Zn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===Da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Di&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mi&&!L)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:C,maxSamples:b}}function n3(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Lr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,v=g*4;let M=f.clippingState||null;l.value=M,M=u(x,h,v,p);for(let C=0;C!==v;++C)M[C]=n[C];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,x){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const f=p+y*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,M=p;v!==y;++v,M+=4)o.copy(d[v]).applyMatrix4(g,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function i3(t){let e=new WeakMap;function n(o,a){return a===ch?o.mapping=to:a===uh&&(o.mapping=no),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ch||a===uh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new p2(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class r3 extends NM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=4,Ov=[.125,.215,.35,.446,.526,.582],Ir=20,Fd=new r3,kv=new We;let Od=null,kd=0,Bd=0,zd=!1;const Nr=(1+Math.sqrt(5))/2,ms=1/Nr,Bv=[new B(-Nr,ms,0),new B(Nr,ms,0),new B(-ms,0,Nr),new B(ms,0,Nr),new B(0,Nr,-ms),new B(0,Nr,ms),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class zv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Od=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Od,kd,Bd),this._renderer.xr.enabled=zd,e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===to||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Od=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Da,format:Zn,colorSpace:xr,depthBuffer:!1},r=Vv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s3(s)),this._blurMaterial=o3(s,e,n)}return r}_compileMaterial(e){const n=new wi(this._lodPlanes[0],e);this._renderer.compile(n,Fd)}_sceneToCubeUV(e,n,i,r){const a=new In(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(kv),u.toneMapping=ar,u.autoClear=!1;const p=new CM({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),x=new wi(new ka,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(kv),y=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;Pl(r,g*v,f>2?v:0,v,v),u.setRenderTarget(r),y&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===to||e.mapping===no;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Fd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bv[(r-s-1)%Bv.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new wi(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ir-1),y=s/x,m=isFinite(s)?1+Math.floor(u*y):Ir;m>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);const f=[];let g=0;for(let A=0;A<Ir;++A){const L=A/y,V=Math.exp(-L*L/2);f.push(V),A===0?g+=V:A<m&&(g+=2*V)}for(let A=0;A<f.length;A++)f[A]=f[A]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const M=this._sizeLods[r],C=3*M*(r>v-Ds?r-v+Ds:0),b=4*(this._cubeSize-M);Pl(n,C,b,3*M,2*M),l.setRenderTarget(n),l.render(d,Fd)}}function s3(t){const e=[],n=[],i=[];let r=t;const s=t-Ds+1+Ov.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ds?l=Ov[o-t+Ds-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,y=3,m=2,f=1,g=new Float32Array(y*x*p),v=new Float32Array(m*x*p),M=new Float32Array(f*x*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,L=b>2?0:-1,V=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];g.set(V,y*x*b),v.set(h,m*x*b);const _=[b,b,b,b,b,b];M.set(_,f*x*b)}const C=new pn;C.setAttribute("position",new En(g,y)),C.setAttribute("uv",new En(v,m)),C.setAttribute("faceIndex",new En(M,f)),e.push(C),r>Ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Vv(t,e,n){const i=new Kr(t,e,n);return i.texture.mapping=gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function o3(t,e,n){const i=new Float32Array(Ir),r=new B(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wm(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Hv(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wm(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Gv(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function wm(){return`

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
	`}function a3(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ch||l===uh,u=l===to||l===no;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new zv(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new zv(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function l3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ic("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function c3(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const y=h.morphAttributes[x];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const y=p[x];for(let m=0,f=y.length;m<f;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,x=d.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let v=0,M=g.length;v<M;v+=3){const C=g[v+0],b=g[v+1],A=g[v+2];h.push(C,b,b,A,A,C)}}else if(x!==void 0){const g=x.array;y=x.version;for(let v=0,M=g.length/3-1;v<M;v+=3){const C=v+0,b=v+1,A=v+2;h.push(C,b,b,A,A,C)}}else return;const m=new(EM(h)?PM:RM)(h,1);m.version=y;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function u3(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,h*o,x),n.update(p,i,x))}function u(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];n.update(m,i,1)}function d(h,p,x,y){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,x);let f=0;for(let g=0;g<x;g++)f+=p[g];for(let g=0;g<y.length;g++)n.update(f,i,y[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function d3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function f3(t,e,n){const i=new WeakMap,r=new Tt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let _=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var p=_;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let C=a.attributes.position.count*M,b=1;C>e.maxTextureSize&&(b=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*b*4*d),L=new TM(A,C,b,d);L.type=Mi,L.needsUpdate=!0;const V=M*4;for(let w=0;w<d;w++){const W=f[w],j=g[w],Z=v[w],ie=C*b*4*w;for(let Y=0;Y<W.count;Y++){const K=Y*V;x===!0&&(r.fromBufferAttribute(W,Y),A[ie+K+0]=r.x,A[ie+K+1]=r.y,A[ie+K+2]=r.z,A[ie+K+3]=0),y===!0&&(r.fromBufferAttribute(j,Y),A[ie+K+4]=r.x,A[ie+K+5]=r.y,A[ie+K+6]=r.z,A[ie+K+7]=0),m===!0&&(r.fromBufferAttribute(Z,Y),A[ie+K+8]=r.x,A[ie+K+9]=r.y,A[ie+K+10]=r.z,A[ie+K+11]=Z.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new nt(C,b)},i.set(a,h),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const y=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function h3(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class FM extends hn{constructor(e,n,i,r,s,o,a,l,c,u=Vs){if(u!==Vs&&u!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Vs&&(i=qr),i===void 0&&u===ro&&(i=io),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const OM=new hn,jv=new FM(1,1),kM=new TM,BM=new QR,zM=new DM,Wv=[],Xv=[],$v=new Float32Array(16),Yv=new Float32Array(9),qv=new Float32Array(4);function po(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wv[r];if(s===void 0&&(s=new Float32Array(r),Wv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function yu(t,e){let n=Xv[e];n===void 0&&(n=new Int32Array(e),Xv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function p3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function m3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function g3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function v3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function x3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Lt(n,i))return;qv.set(i),t.uniformMatrix2fv(this.addr,!1,qv),Nt(n,i)}}function y3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Lt(n,i))return;Yv.set(i),t.uniformMatrix3fv(this.addr,!1,Yv),Nt(n,i)}}function _3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Lt(n,i))return;$v.set(i),t.uniformMatrix4fv(this.addr,!1,$v),Nt(n,i)}}function S3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function M3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function E3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function w3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function T3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function A3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function b3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function C3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function R3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(jv.compareFunction=MM,s=jv):s=OM,n.setTexture2D(e||s,r)}function P3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||BM,r)}function L3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||zM,r)}function N3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||kM,r)}function D3(t){switch(t){case 5126:return p3;case 35664:return m3;case 35665:return g3;case 35666:return v3;case 35674:return x3;case 35675:return y3;case 35676:return _3;case 5124:case 35670:return S3;case 35667:case 35671:return M3;case 35668:case 35672:return E3;case 35669:case 35673:return w3;case 5125:return T3;case 36294:return A3;case 36295:return b3;case 36296:return C3;case 35678:case 36198:case 36298:case 36306:case 35682:return R3;case 35679:case 36299:case 36307:return P3;case 35680:case 36300:case 36308:case 36293:return L3;case 36289:case 36303:case 36311:case 36292:return N3}}function I3(t,e){t.uniform1fv(this.addr,e)}function U3(t,e){const n=po(e,this.size,2);t.uniform2fv(this.addr,n)}function F3(t,e){const n=po(e,this.size,3);t.uniform3fv(this.addr,n)}function O3(t,e){const n=po(e,this.size,4);t.uniform4fv(this.addr,n)}function k3(t,e){const n=po(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function B3(t,e){const n=po(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function z3(t,e){const n=po(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function V3(t,e){t.uniform1iv(this.addr,e)}function H3(t,e){t.uniform2iv(this.addr,e)}function G3(t,e){t.uniform3iv(this.addr,e)}function j3(t,e){t.uniform4iv(this.addr,e)}function W3(t,e){t.uniform1uiv(this.addr,e)}function X3(t,e){t.uniform2uiv(this.addr,e)}function $3(t,e){t.uniform3uiv(this.addr,e)}function Y3(t,e){t.uniform4uiv(this.addr,e)}function q3(t,e,n){const i=this.cache,r=e.length,s=yu(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||OM,s[o])}function K3(t,e,n){const i=this.cache,r=e.length,s=yu(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||BM,s[o])}function Z3(t,e,n){const i=this.cache,r=e.length,s=yu(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||zM,s[o])}function Q3(t,e,n){const i=this.cache,r=e.length,s=yu(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||kM,s[o])}function J3(t){switch(t){case 5126:return I3;case 35664:return U3;case 35665:return F3;case 35666:return O3;case 35674:return k3;case 35675:return B3;case 35676:return z3;case 5124:case 35670:return V3;case 35667:case 35671:return H3;case 35668:case 35672:return G3;case 35669:case 35673:return j3;case 5125:return W3;case 36294:return X3;case 36295:return $3;case 36296:return Y3;case 35678:case 36198:case 36298:case 36306:case 35682:return q3;case 35679:case 36299:case 36307:return K3;case 35680:case 36300:case 36308:case 36293:return Z3;case 36289:case 36303:case 36311:case 36292:return Q3}}class eN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=D3(n.type)}}class tN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=J3(n.type)}}class nN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Vd=/(\w+)(\])?(\[|\.)?/g;function Kv(t,e){t.seq.push(e),t.map[e.id]=e}function iN(t,e,n){const i=t.name,r=i.length;for(Vd.lastIndex=0;;){const s=Vd.exec(i),o=Vd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Kv(n,c===void 0?new eN(a,t,e):new tN(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new nN(a),Kv(n,d)),n=d}}}class rc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);iN(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Zv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const rN=37297;let sN=0;function oN(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function aN(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===zc&&n===Bc?i="LinearDisplayP3ToLinearSRGB":e===Bc&&n===zc&&(i="LinearSRGBToLinearDisplayP3"),t){case xr:case vu:return[i,"LinearTransferOETF"];case ii:case Mm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Qv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+oN(t.getShaderSource(e),o)}else return r}function lN(t,e){const n=aN(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function cN(t,e){let n;switch(e){case ER:n="Linear";break;case wR:n="Reinhard";break;case TR:n="Cineon";break;case AR:n="ACESFilmic";break;case CR:n="AgX";break;case RR:n="Neutral";break;case bR:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ll=new B;function uN(){tt.getLuminanceCoefficients(Ll);const t=Ll.x.toFixed(4),e=Ll.y.toFixed(4),n=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function fN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Bo(t){return t!==""}function Jv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ex(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pN=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(t){return t.replace(pN,gN)}const mN=new Map;function gN(t,e){let n=He[e];if(n===void 0){const i=mN.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zh(n)}const vN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tx(t){return t.replace(vN,xN)}function xN(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nx(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yN(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===cM?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===nR?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function _N(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case to:case no:e="ENVMAP_TYPE_CUBE";break;case gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SN(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case no:e="ENVMAP_MODE_REFRACTION";break}return e}function MN(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case uM:e="ENVMAP_BLENDING_MULTIPLY";break;case SR:e="ENVMAP_BLENDING_MIX";break;case MR:e="ENVMAP_BLENDING_ADD";break}return e}function EN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function wN(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=yN(n),c=_N(n),u=SN(n),d=MN(n),h=EN(n),p=dN(n),x=fN(s),y=r.createProgram();let m,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Bo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Bo).join(`
`),f.length>0&&(f+=`
`)):(m=[nx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),f=[nx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ar?"#define TONE_MAPPING":"",n.toneMapping!==ar?He.tonemapping_pars_fragment:"",n.toneMapping!==ar?cN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,lN("linearToOutputTexel",n.outputColorSpace),uN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bo).join(`
`)),o=zh(o),o=Jv(o,n),o=ex(o,n),a=zh(a),a=Jv(a,n),a=ex(a,n),o=tx(o),a=tx(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===yv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=g+m+o,M=g+f+a,C=Zv(r,r.VERTEX_SHADER,v),b=Zv(r,r.FRAGMENT_SHADER,M);r.attachShader(y,C),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(w){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(y).trim(),j=r.getShaderInfoLog(C).trim(),Z=r.getShaderInfoLog(b).trim();let ie=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ie=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,b);else{const K=Qv(r,C,"vertex"),I=Qv(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+W+`
`+K+`
`+I)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(j===""||Z==="")&&(Y=!1);Y&&(w.diagnostics={runnable:ie,programLog:W,vertexShader:{log:j,prefix:m},fragmentShader:{log:Z,prefix:f}})}r.deleteShader(C),r.deleteShader(b),L=new rc(r,y),V=hN(r,y)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let V;this.getAttributes=function(){return V===void 0&&A(this),V};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(y,rN)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sN++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=b,this}let TN=0;class AN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bN(e),n.set(e,i)),i}}class bN{constructor(e){this.id=TN++,this.code=e,this.usedTimes=0}}function CN(t,e,n,i,r,s,o){const a=new AM,l=new AN,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let x=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function f(_,w,W,j,Z){const ie=j.fog,Y=Z.geometry,K=_.isMeshStandardMaterial?j.environment:null,I=(_.isMeshStandardMaterial?n:e).get(_.envMap||K),Q=I&&I.mapping===gu?I.image.height:null,N=y[_.type];_.precision!==null&&(x=r.getMaxPrecision(_.precision),x!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",x,"instead."));const P=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,re=P!==void 0?P.length:0;let fe=0;Y.morphAttributes.position!==void 0&&(fe=1),Y.morphAttributes.normal!==void 0&&(fe=2),Y.morphAttributes.color!==void 0&&(fe=3);let O,$,te,X;if(N){const rn=ri[N];O=rn.vertexShader,$=rn.fragmentShader}else O=_.vertexShader,$=_.fragmentShader,l.update(_),te=l.getVertexShaderID(_),X=l.getFragmentShaderID(_);const le=t.getRenderTarget(),ae=Z.isInstancedMesh===!0,Me=Z.isBatchedMesh===!0,Re=!!_.map,Ae=!!_.matcap,D=!!I,Ie=!!_.aoMap,Pe=!!_.lightMap,Fe=!!_.bumpMap,Te=!!_.normalMap,je=!!_.displacementMap,De=!!_.emissiveMap,R=!!_.metalnessMap,E=!!_.roughnessMap,z=_.anisotropy>0,ee=_.clearcoat>0,oe=_.dispersion>0,J=_.iridescence>0,be=_.sheen>0,pe=_.transmission>0,_e=z&&!!_.anisotropyMap,Ye=ee&&!!_.clearcoatMap,ue=ee&&!!_.clearcoatNormalMap,ve=ee&&!!_.clearcoatRoughnessMap,Oe=J&&!!_.iridescenceMap,ke=J&&!!_.iridescenceThicknessMap,Ee=be&&!!_.sheenColorMap,qe=be&&!!_.sheenRoughnessMap,Ve=!!_.specularMap,ot=!!_.specularColorMap,U=!!_.specularIntensityMap,xe=pe&&!!_.transmissionMap,q=pe&&!!_.thicknessMap,se=!!_.gradientMap,me=!!_.alphaMap,ye=_.alphaTest>0,Ke=!!_.alphaHash,At=!!_.extensions;let nn=ar;_.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(nn=t.toneMapping);const Qe={shaderID:N,shaderType:_.type,shaderName:_.name,vertexShader:O,fragmentShader:$,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:X,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:x,batching:Me,batchingColor:Me&&Z._colorsTexture!==null,instancing:ae,instancingColor:ae&&Z.instanceColor!==null,instancingMorph:ae&&Z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:xr,alphaToCoverage:!!_.alphaToCoverage,map:Re,matcap:Ae,envMap:D,envMapMode:D&&I.mapping,envMapCubeUVHeight:Q,aoMap:Ie,lightMap:Pe,bumpMap:Fe,normalMap:Te,displacementMap:p&&je,emissiveMap:De,normalMapObjectSpace:Te&&_.normalMapType===IR,normalMapTangentSpace:Te&&_.normalMapType===DR,metalnessMap:R,roughnessMap:E,anisotropy:z,anisotropyMap:_e,clearcoat:ee,clearcoatMap:Ye,clearcoatNormalMap:ue,clearcoatRoughnessMap:ve,dispersion:oe,iridescence:J,iridescenceMap:Oe,iridescenceThicknessMap:ke,sheen:be,sheenColorMap:Ee,sheenRoughnessMap:qe,specularMap:Ve,specularColorMap:ot,specularIntensityMap:U,transmission:pe,transmissionMap:xe,thicknessMap:q,gradientMap:se,opaque:_.transparent===!1&&_.blending===zs&&_.alphaToCoverage===!1,alphaMap:me,alphaTest:ye,alphaHash:Ke,combine:_.combine,mapUv:Re&&m(_.map.channel),aoMapUv:Ie&&m(_.aoMap.channel),lightMapUv:Pe&&m(_.lightMap.channel),bumpMapUv:Fe&&m(_.bumpMap.channel),normalMapUv:Te&&m(_.normalMap.channel),displacementMapUv:je&&m(_.displacementMap.channel),emissiveMapUv:De&&m(_.emissiveMap.channel),metalnessMapUv:R&&m(_.metalnessMap.channel),roughnessMapUv:E&&m(_.roughnessMap.channel),anisotropyMapUv:_e&&m(_.anisotropyMap.channel),clearcoatMapUv:Ye&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:qe&&m(_.sheenRoughnessMap.channel),specularMapUv:Ve&&m(_.specularMap.channel),specularColorMapUv:ot&&m(_.specularColorMap.channel),specularIntensityMapUv:U&&m(_.specularIntensityMap.channel),transmissionMapUv:xe&&m(_.transmissionMap.channel),thicknessMapUv:q&&m(_.thicknessMap.channel),alphaMapUv:me&&m(_.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Te||z),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!Y.attributes.uv&&(Re||me),fog:!!ie,useFog:_.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:fe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:nn,decodeVideoTexture:Re&&_.map.isVideoTexture===!0&&tt.getTransfer(_.map.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===yi,flipSided:_.side===fn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:At&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&_.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function g(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const W in _.defines)w.push(W),w.push(_.defines[W]);return _.isRawShaderMaterial===!1&&(v(w,_),M(w,_),w.push(t.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function v(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function M(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),_.push(a.mask)}function C(_){const w=y[_.type];let W;if(w){const j=ri[w];W=u2.clone(j.uniforms)}else W=_.uniforms;return W}function b(_,w){let W;for(let j=0,Z=u.length;j<Z;j++){const ie=u[j];if(ie.cacheKey===w){W=ie,++W.usedTimes;break}}return W===void 0&&(W=new wN(t,w,_,s),u.push(W)),W}function A(_){if(--_.usedTimes===0){const w=u.indexOf(_);u[w]=u[u.length-1],u.pop(),_.destroy()}}function L(_){l.remove(_)}function V(){l.dispose()}return{getParameters:f,getProgramCacheKey:g,getUniforms:C,acquireProgram:b,releaseProgram:A,releaseShaderCache:L,programs:u,dispose:V}}function RN(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function PN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ix(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function rx(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,x,y,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:y,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=y,f.group=m),e++,f}function a(d,h,p,x,y,m){const f=o(d,h,p,x,y,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,x,y,m){const f=o(d,h,p,x,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||PN),i.length>1&&i.sort(h||ix),r.length>1&&r.sort(h||ix)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function LN(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new rx,t.set(i,[o])):r>=s.length?(o=new rx,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function NN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new We};break;case"SpotLight":n={position:new B,direction:new B,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function DN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let IN=0;function UN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function FN(t){const e=new NN,n=DN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new St,o=new St;function a(c){let u=0,d=0,h=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,x=0,y=0,m=0,f=0,g=0,v=0,M=0,C=0,b=0,A=0;c.sort(UN);for(let V=0,_=c.length;V<_;V++){const w=c[V],W=w.color,j=w.intensity,Z=w.distance,ie=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=W.r*j,d+=W.g*j,h+=W.b*j;else if(w.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(w.sh.coefficients[Y],j);A++}else if(w.isDirectionalLight){const Y=e.get(w);if(Y.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const K=w.shadow,I=n.get(w);I.shadowIntensity=K.intensity,I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=w.shadow.matrix,g++}i.directional[p]=Y,p++}else if(w.isSpotLight){const Y=e.get(w);Y.position.setFromMatrixPosition(w.matrixWorld),Y.color.copy(W).multiplyScalar(j),Y.distance=Z,Y.coneCos=Math.cos(w.angle),Y.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),Y.decay=w.decay,i.spot[y]=Y;const K=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,K.updateMatrices(w),w.castShadow&&b++),i.spotLightMatrix[y]=K.matrix,w.castShadow){const I=n.get(w);I.shadowIntensity=K.intensity,I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=ie,M++}y++}else if(w.isRectAreaLight){const Y=e.get(w);Y.color.copy(W).multiplyScalar(j),Y.halfWidth.set(w.width*.5,0,0),Y.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=Y,m++}else if(w.isPointLight){const Y=e.get(w);if(Y.color.copy(w.color).multiplyScalar(w.intensity),Y.distance=w.distance,Y.decay=w.decay,w.castShadow){const K=w.shadow,I=n.get(w);I.shadowIntensity=K.intensity,I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,I.shadowCameraNear=K.camera.near,I.shadowCameraFar=K.camera.far,i.pointShadow[x]=I,i.pointShadowMap[x]=ie,i.pointShadowMatrix[x]=w.shadow.matrix,v++}i.point[x]=Y,x++}else if(w.isHemisphereLight){const Y=e.get(w);Y.skyColor.copy(w.color).multiplyScalar(j),Y.groundColor.copy(w.groundColor).multiplyScalar(j),i.hemi[f]=Y,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==x||L.spotLength!==y||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==g||L.numPointShadows!==v||L.numSpotShadows!==M||L.numSpotMaps!==C||L.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,L.directionalLength=p,L.pointLength=x,L.spotLength=y,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=g,L.numPointShadows=v,L.numSpotShadows=M,L.numSpotMaps=C,L.numLightProbes=A,i.version=IN++)}function l(c,u){let d=0,h=0,p=0,x=0,y=0;const m=u.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const v=c[f];if(v.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(v.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function sx(t){const e=new FN(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ON(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new sx(t),e.set(r,[a])):s>=o.length?(a=new sx(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class kN extends ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BN extends ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HN(t,e,n){let i=new IM;const r=new nt,s=new nt,o=new Tt,a=new kN({depthPacking:NR}),l=new BN,c={},u=n.maxTextureSize,d={[fr]:fn,[fn]:fr,[yi]:yi},h=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:zN,fragmentShader:VN}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new pn;x.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new wi(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cM;let f=this.type;this.render=function(b,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const V=t.getRenderTarget(),_=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),W=t.state;W.setBlending(or),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const j=f!==gi&&this.type===gi,Z=f===gi&&this.type!==gi;for(let ie=0,Y=b.length;ie<Y;ie++){const K=b[ie],I=K.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const Q=I.getFrameExtents();if(r.multiply(Q),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,I.mapSize.y=s.y)),I.map===null||j===!0||Z===!0){const P=this.type!==gi?{minFilter:Fn,magFilter:Fn}:{};I.map!==null&&I.map.dispose(),I.map=new Kr(r.x,r.y,P),I.map.texture.name=K.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const N=I.getViewportCount();for(let P=0;P<N;P++){const re=I.getViewport(P);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),W.viewport(o),I.updateMatrices(K,P),i=I.getFrustum(),M(A,L,I.camera,K,this.type)}I.isPointLightShadow!==!0&&this.type===gi&&g(I,L),I.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(V,_,w)};function g(b,A){const L=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Kr(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(A,null,L,h,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(A,null,L,p,y,null)}function v(b,A,L,V){let _=null;const w=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)_=w;else if(_=L.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=_.uuid,j=A.uuid;let Z=c[W];Z===void 0&&(Z={},c[W]=Z);let ie=Z[j];ie===void 0&&(ie=_.clone(),Z[j]=ie,A.addEventListener("dispose",C)),_=ie}if(_.visible=A.visible,_.wireframe=A.wireframe,V===gi?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:d[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const W=t.properties.get(_);W.light=L}return _}function M(b,A,L,V,_){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&_===gi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const j=e.update(b),Z=b.material;if(Array.isArray(Z)){const ie=j.groups;for(let Y=0,K=ie.length;Y<K;Y++){const I=ie[Y],Q=Z[I.materialIndex];if(Q&&Q.visible){const N=v(b,Q,V,_);b.onBeforeShadow(t,b,A,L,j,N,I),t.renderBufferDirect(L,null,j,N,b,I),b.onAfterShadow(t,b,A,L,j,N,I)}}}else if(Z.visible){const ie=v(b,Z,V,_);b.onBeforeShadow(t,b,A,L,j,ie,null),t.renderBufferDirect(L,null,j,ie,b,null),b.onAfterShadow(t,b,A,L,j,ie,null)}}const W=b.children;for(let j=0,Z=W.length;j<Z;j++)M(W[j],A,L,V,_)}function C(b){b.target.removeEventListener("dispose",C);for(const L in c){const V=c[L],_=b.target.uuid;_ in V&&(V[_].dispose(),delete V[_])}}}const GN={[nh]:ih,[rh]:ah,[sh]:lh,[eo]:oh,[ih]:nh,[ah]:rh,[lh]:sh,[oh]:eo};function jN(t){function e(){let U=!1;const xe=new Tt;let q=null;const se=new Tt(0,0,0,0);return{setMask:function(me){q!==me&&!U&&(t.colorMask(me,me,me,me),q=me)},setLocked:function(me){U=me},setClear:function(me,ye,Ke,At,nn){nn===!0&&(me*=At,ye*=At,Ke*=At),xe.set(me,ye,Ke,At),se.equals(xe)===!1&&(t.clearColor(me,ye,Ke,At),se.copy(xe))},reset:function(){U=!1,q=null,se.set(-1,0,0,0)}}}function n(){let U=!1,xe=!1,q=null,se=null,me=null;return{setReversed:function(ye){xe=ye},setTest:function(ye){ye?te(t.DEPTH_TEST):X(t.DEPTH_TEST)},setMask:function(ye){q!==ye&&!U&&(t.depthMask(ye),q=ye)},setFunc:function(ye){if(xe&&(ye=GN[ye]),se!==ye){switch(ye){case nh:t.depthFunc(t.NEVER);break;case ih:t.depthFunc(t.ALWAYS);break;case rh:t.depthFunc(t.LESS);break;case eo:t.depthFunc(t.LEQUAL);break;case sh:t.depthFunc(t.EQUAL);break;case oh:t.depthFunc(t.GEQUAL);break;case ah:t.depthFunc(t.GREATER);break;case lh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=ye}},setLocked:function(ye){U=ye},setClear:function(ye){me!==ye&&(t.clearDepth(ye),me=ye)},reset:function(){U=!1,q=null,se=null,me=null}}}function i(){let U=!1,xe=null,q=null,se=null,me=null,ye=null,Ke=null,At=null,nn=null;return{setTest:function(Qe){U||(Qe?te(t.STENCIL_TEST):X(t.STENCIL_TEST))},setMask:function(Qe){xe!==Qe&&!U&&(t.stencilMask(Qe),xe=Qe)},setFunc:function(Qe,rn,ui){(q!==Qe||se!==rn||me!==ui)&&(t.stencilFunc(Qe,rn,ui),q=Qe,se=rn,me=ui)},setOp:function(Qe,rn,ui){(ye!==Qe||Ke!==rn||At!==ui)&&(t.stencilOp(Qe,rn,ui),ye=Qe,Ke=rn,At=ui)},setLocked:function(Qe){U=Qe},setClear:function(Qe){nn!==Qe&&(t.clearStencil(Qe),nn=Qe)},reset:function(){U=!1,xe=null,q=null,se=null,me=null,ye=null,Ke=null,At=null,nn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,x=!1,y=null,m=null,f=null,g=null,v=null,M=null,C=null,b=new We(0,0,0),A=0,L=!1,V=null,_=null,w=null,W=null,j=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,Y=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),ie=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),ie=Y>=2);let I=null,Q={};const N=t.getParameter(t.SCISSOR_BOX),P=t.getParameter(t.VIEWPORT),re=new Tt().fromArray(N),fe=new Tt().fromArray(P);function O(U,xe,q,se){const me=new Uint8Array(4),ye=t.createTexture();t.bindTexture(U,ye),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<q;Ke++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(xe+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ye}const $={};$[t.TEXTURE_2D]=O(t.TEXTURE_2D,t.TEXTURE_2D,1),$[t.TEXTURE_CUBE_MAP]=O(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[t.TEXTURE_2D_ARRAY]=O(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),$[t.TEXTURE_3D]=O(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),te(t.DEPTH_TEST),s.setFunc(eo),Pe(!1),Fe(pv),te(t.CULL_FACE),D(or);function te(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function X(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function le(U,xe){return u[U]!==xe?(t.bindFramebuffer(U,xe),u[U]=xe,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=xe),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function ae(U,xe){let q=h,se=!1;if(U){q=d.get(xe),q===void 0&&(q=[],d.set(xe,q));const me=U.textures;if(q.length!==me.length||q[0]!==t.COLOR_ATTACHMENT0){for(let ye=0,Ke=me.length;ye<Ke;ye++)q[ye]=t.COLOR_ATTACHMENT0+ye;q.length=me.length,se=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,se=!0);se&&t.drawBuffers(q)}function Me(U){return p!==U?(t.useProgram(U),p=U,!0):!1}const Re={[Dr]:t.FUNC_ADD,[rR]:t.FUNC_SUBTRACT,[sR]:t.FUNC_REVERSE_SUBTRACT};Re[oR]=t.MIN,Re[aR]=t.MAX;const Ae={[lR]:t.ZERO,[cR]:t.ONE,[uR]:t.SRC_COLOR,[eh]:t.SRC_ALPHA,[gR]:t.SRC_ALPHA_SATURATE,[pR]:t.DST_COLOR,[fR]:t.DST_ALPHA,[dR]:t.ONE_MINUS_SRC_COLOR,[th]:t.ONE_MINUS_SRC_ALPHA,[mR]:t.ONE_MINUS_DST_COLOR,[hR]:t.ONE_MINUS_DST_ALPHA,[vR]:t.CONSTANT_COLOR,[xR]:t.ONE_MINUS_CONSTANT_COLOR,[yR]:t.CONSTANT_ALPHA,[_R]:t.ONE_MINUS_CONSTANT_ALPHA};function D(U,xe,q,se,me,ye,Ke,At,nn,Qe){if(U===or){x===!0&&(X(t.BLEND),x=!1);return}if(x===!1&&(te(t.BLEND),x=!0),U!==iR){if(U!==y||Qe!==L){if((m!==Dr||v!==Dr)&&(t.blendEquation(t.FUNC_ADD),m=Dr,v=Dr),Qe)switch(U){case zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Oc:t.blendFunc(t.ONE,t.ONE);break;case mv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Oc:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case mv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}f=null,g=null,M=null,C=null,b.set(0,0,0),A=0,y=U,L=Qe}return}me=me||xe,ye=ye||q,Ke=Ke||se,(xe!==m||me!==v)&&(t.blendEquationSeparate(Re[xe],Re[me]),m=xe,v=me),(q!==f||se!==g||ye!==M||Ke!==C)&&(t.blendFuncSeparate(Ae[q],Ae[se],Ae[ye],Ae[Ke]),f=q,g=se,M=ye,C=Ke),(At.equals(b)===!1||nn!==A)&&(t.blendColor(At.r,At.g,At.b,nn),b.copy(At),A=nn),y=U,L=!1}function Ie(U,xe){U.side===yi?X(t.CULL_FACE):te(t.CULL_FACE);let q=U.side===fn;xe&&(q=!q),Pe(q),U.blending===zs&&U.transparent===!1?D(or):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const se=U.stencilWrite;o.setTest(se),se&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),je(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):X(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(U){V!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),V=U)}function Fe(U){U!==eR?(te(t.CULL_FACE),U!==_&&(U===pv?t.cullFace(t.BACK):U===tR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):X(t.CULL_FACE),_=U}function Te(U){U!==w&&(ie&&t.lineWidth(U),w=U)}function je(U,xe,q){U?(te(t.POLYGON_OFFSET_FILL),(W!==xe||j!==q)&&(t.polygonOffset(xe,q),W=xe,j=q)):X(t.POLYGON_OFFSET_FILL)}function De(U){U?te(t.SCISSOR_TEST):X(t.SCISSOR_TEST)}function R(U){U===void 0&&(U=t.TEXTURE0+Z-1),I!==U&&(t.activeTexture(U),I=U)}function E(U,xe,q){q===void 0&&(I===null?q=t.TEXTURE0+Z-1:q=I);let se=Q[q];se===void 0&&(se={type:void 0,texture:void 0},Q[q]=se),(se.type!==U||se.texture!==xe)&&(I!==q&&(t.activeTexture(q),I=q),t.bindTexture(U,xe||$[U]),se.type=U,se.texture=xe)}function z(){const U=Q[I];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(U){re.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function Ee(U){fe.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),fe.copy(U))}function qe(U,xe){let q=l.get(xe);q===void 0&&(q=new WeakMap,l.set(xe,q));let se=q.get(U);se===void 0&&(se=t.getUniformBlockIndex(xe,U.name),q.set(U,se))}function Ve(U,xe){const se=l.get(xe).get(U);a.get(xe)!==se&&(t.uniformBlockBinding(xe,se,U.__bindingPointIndex),a.set(xe,se))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,Q={},u={},d=new WeakMap,h=[],p=null,x=!1,y=null,m=null,f=null,g=null,v=null,M=null,C=null,b=new We(0,0,0),A=0,L=!1,V=null,_=null,w=null,W=null,j=null,re.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:te,disable:X,bindFramebuffer:le,drawBuffers:ae,useProgram:Me,setBlending:D,setMaterial:Ie,setFlipSided:Pe,setCullFace:Fe,setLineWidth:Te,setPolygonOffset:je,setScissorTest:De,activeTexture:R,bindTexture:E,unbindTexture:z,compressedTexImage2D:ee,compressedTexImage3D:oe,texImage2D:ve,texImage3D:Oe,updateUBOMapping:qe,uniformBlockBinding:Ve,texStorage2D:Ye,texStorage3D:ue,texSubImage2D:J,texSubImage3D:be,compressedTexSubImage2D:pe,compressedTexSubImage3D:_e,scissor:ke,viewport:Ee,reset:ot}}function ox(t,e,n,i){const r=WN(i);switch(n){case mM:return t*e;case vM:return t*e;case xM:return t*e*2;case yM:return t*e/r.components*r.byteLength;case ym:return t*e/r.components*r.byteLength;case _M:return t*e*2/r.components*r.byteLength;case _m:return t*e*2/r.components*r.byteLength;case gM:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case Sm:return t*e*4/r.components*r.byteLength;case Ql:case Jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ec:case tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ph:case gh:return Math.max(t,16)*Math.max(e,8)/4;case hh:case mh:return Math.max(t,8)*Math.max(e,8)/2;case vh:case xh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case wh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Th:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case bh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case nc:case Ih:case Uh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case SM:case Fh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Oh:case kh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function WN(t){switch(t){case Di:case fM:return{byteLength:1,components:1};case Ma:case hM:case Da:return{byteLength:2,components:1};case vm:case xm:return{byteLength:2,components:4};case qr:case gm:case Mi:return{byteLength:4,components:1};case pM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function XN(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,E){return p?new OffscreenCanvas(R,E):Hc("canvas")}function y(R,E,z){let ee=1;const oe=De(R);if((oe.width>z||oe.height>z)&&(ee=z/Math.max(oe.width,oe.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(ee*oe.width),be=Math.floor(ee*oe.height);d===void 0&&(d=x(J,be));const pe=E?x(J,be):d;return pe.width=J,pe.height=be,pe.getContext("2d").drawImage(R,0,0,J,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+J+"x"+be+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Fn&&R.minFilter!==qn}function f(R){t.generateMipmap(R)}function g(R,E,z,ee,oe=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=E;if(E===t.RED&&(z===t.FLOAT&&(J=t.R32F),z===t.HALF_FLOAT&&(J=t.R16F),z===t.UNSIGNED_BYTE&&(J=t.R8)),E===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.R8UI),z===t.UNSIGNED_SHORT&&(J=t.R16UI),z===t.UNSIGNED_INT&&(J=t.R32UI),z===t.BYTE&&(J=t.R8I),z===t.SHORT&&(J=t.R16I),z===t.INT&&(J=t.R32I)),E===t.RG&&(z===t.FLOAT&&(J=t.RG32F),z===t.HALF_FLOAT&&(J=t.RG16F),z===t.UNSIGNED_BYTE&&(J=t.RG8)),E===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RG8UI),z===t.UNSIGNED_SHORT&&(J=t.RG16UI),z===t.UNSIGNED_INT&&(J=t.RG32UI),z===t.BYTE&&(J=t.RG8I),z===t.SHORT&&(J=t.RG16I),z===t.INT&&(J=t.RG32I)),E===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RGB8UI),z===t.UNSIGNED_SHORT&&(J=t.RGB16UI),z===t.UNSIGNED_INT&&(J=t.RGB32UI),z===t.BYTE&&(J=t.RGB8I),z===t.SHORT&&(J=t.RGB16I),z===t.INT&&(J=t.RGB32I)),E===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),z===t.UNSIGNED_INT&&(J=t.RGBA32UI),z===t.BYTE&&(J=t.RGBA8I),z===t.SHORT&&(J=t.RGBA16I),z===t.INT&&(J=t.RGBA32I)),E===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),E===t.RGBA){const be=oe?kc:tt.getTransfer(ee);z===t.FLOAT&&(J=t.RGBA32F),z===t.HALF_FLOAT&&(J=t.RGBA16F),z===t.UNSIGNED_BYTE&&(J=be===dt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(R,E){let z;return R?E===null||E===qr||E===io?z=t.DEPTH24_STENCIL8:E===Mi?z=t.DEPTH32F_STENCIL8:E===Ma&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qr||E===io?z=t.DEPTH_COMPONENT24:E===Mi?z=t.DEPTH_COMPONENT32F:E===Ma&&(z=t.DEPTH_COMPONENT16),z}function M(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Fn&&R.minFilter!==qn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){const E=R.target;E.removeEventListener("dispose",C),A(E),E.isVideoTexture&&u.delete(E)}function b(R){const E=R.target;E.removeEventListener("dispose",b),V(E)}function A(R){const E=i.get(R);if(E.__webglInit===void 0)return;const z=R.source,ee=h.get(z);if(ee){const oe=ee[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&L(R),Object.keys(ee).length===0&&h.delete(z)}i.remove(R)}function L(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const z=R.source,ee=h.get(z);delete ee[E.__cacheKey],o.memory.textures--}function V(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let oe=0;oe<E.__webglFramebuffer[ee].length;oe++)t.deleteFramebuffer(E.__webglFramebuffer[ee][oe]);else t.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[ee]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=R.textures;for(let ee=0,oe=z.length;ee<oe;ee++){const J=i.get(z[ee]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(z[ee])}i.remove(R)}let _=0;function w(){_=0}function W(){const R=_;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),_+=1,R}function j(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Z(R,E){const z=i.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(z,R,E);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+E)}function ie(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){fe(z,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+E)}function Y(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){fe(z,R,E);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+E)}function K(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){O(z,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+E)}const I={[dh]:t.REPEAT,[Br]:t.CLAMP_TO_EDGE,[fh]:t.MIRRORED_REPEAT},Q={[Fn]:t.NEAREST,[PR]:t.NEAREST_MIPMAP_NEAREST,[dl]:t.NEAREST_MIPMAP_LINEAR,[qn]:t.LINEAR,[fd]:t.LINEAR_MIPMAP_NEAREST,[zr]:t.LINEAR_MIPMAP_LINEAR},N={[UR]:t.NEVER,[VR]:t.ALWAYS,[FR]:t.LESS,[MM]:t.LEQUAL,[OR]:t.EQUAL,[zR]:t.GEQUAL,[kR]:t.GREATER,[BR]:t.NOTEQUAL};function P(R,E){if(E.type===Mi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===qn||E.magFilter===fd||E.magFilter===dl||E.magFilter===zr||E.minFilter===qn||E.minFilter===fd||E.minFilter===dl||E.minFilter===zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,I[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,I[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,I[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Q[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==dl&&E.minFilter!==zr||E.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function re(R,E){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",C));const ee=E.source;let oe=h.get(ee);oe===void 0&&(oe={},h.set(ee,oe));const J=j(E);if(J!==R.__cacheKey){oe[J]===void 0&&(oe[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),oe[J].usedTimes++;const be=oe[R.__cacheKey];be!==void 0&&(oe[R.__cacheKey].usedTimes--,be.usedTimes===0&&L(E)),R.__cacheKey=J,R.__webglTexture=oe[J].texture}return z}function fe(R,E,z){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const oe=re(R,E),J=E.source;n.bindTexture(ee,R.__webglTexture,t.TEXTURE0+z);const be=i.get(J);if(J.version!==be.__version||oe===!0){n.activeTexture(t.TEXTURE0+z);const pe=tt.getPrimaries(tt.workingColorSpace),_e=E.colorSpace===qi?null:tt.getPrimaries(E.colorSpace),Ye=E.colorSpace===qi||pe===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ue=y(E.image,!1,r.maxTextureSize);ue=je(E,ue);const ve=s.convert(E.format,E.colorSpace),Oe=s.convert(E.type);let ke=g(E.internalFormat,ve,Oe,E.colorSpace,E.isVideoTexture);P(ee,E);let Ee;const qe=E.mipmaps,Ve=E.isVideoTexture!==!0,ot=be.__version===void 0||oe===!0,U=J.dataReady,xe=M(E,ue);if(E.isDepthTexture)ke=v(E.format===ro,E.type),ot&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,ke,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,ke,ue.width,ue.height,0,ve,Oe,null));else if(E.isDataTexture)if(qe.length>0){Ve&&ot&&n.texStorage2D(t.TEXTURE_2D,xe,ke,qe[0].width,qe[0].height);for(let q=0,se=qe.length;q<se;q++)Ee=qe[q],Ve?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Ee.width,Ee.height,ve,Oe,Ee.data):n.texImage2D(t.TEXTURE_2D,q,ke,Ee.width,Ee.height,0,ve,Oe,Ee.data);E.generateMipmaps=!1}else Ve?(ot&&n.texStorage2D(t.TEXTURE_2D,xe,ke,ue.width,ue.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,ve,Oe,ue.data)):n.texImage2D(t.TEXTURE_2D,0,ke,ue.width,ue.height,0,ve,Oe,ue.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ve&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,ke,qe[0].width,qe[0].height,ue.depth);for(let q=0,se=qe.length;q<se;q++)if(Ee=qe[q],E.format!==Zn)if(ve!==null)if(Ve){if(U)if(E.layerUpdates.size>0){const me=ox(Ee.width,Ee.height,E.format,E.type);for(const ye of E.layerUpdates){const Ke=Ee.data.subarray(ye*me/Ee.data.BYTES_PER_ELEMENT,(ye+1)*me/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,ye,Ee.width,Ee.height,1,ve,Ke,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,Ee.width,Ee.height,ue.depth,ve,Ee.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,ke,Ee.width,Ee.height,ue.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,Ee.width,Ee.height,ue.depth,ve,Oe,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,ke,Ee.width,Ee.height,ue.depth,0,ve,Oe,Ee.data)}else{Ve&&ot&&n.texStorage2D(t.TEXTURE_2D,xe,ke,qe[0].width,qe[0].height);for(let q=0,se=qe.length;q<se;q++)Ee=qe[q],E.format!==Zn?ve!==null?Ve?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,Ee.width,Ee.height,ve,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,q,ke,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Ee.width,Ee.height,ve,Oe,Ee.data):n.texImage2D(t.TEXTURE_2D,q,ke,Ee.width,Ee.height,0,ve,Oe,Ee.data)}else if(E.isDataArrayTexture)if(Ve){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,ke,ue.width,ue.height,ue.depth),U)if(E.layerUpdates.size>0){const q=ox(ue.width,ue.height,E.format,E.type);for(const se of E.layerUpdates){const me=ue.data.subarray(se*q/ue.data.BYTES_PER_ELEMENT,(se+1)*q/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,se,ue.width,ue.height,1,ve,Oe,me)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,Oe,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,ue.width,ue.height,ue.depth,0,ve,Oe,ue.data);else if(E.isData3DTexture)Ve?(ot&&n.texStorage3D(t.TEXTURE_3D,xe,ke,ue.width,ue.height,ue.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,Oe,ue.data)):n.texImage3D(t.TEXTURE_3D,0,ke,ue.width,ue.height,ue.depth,0,ve,Oe,ue.data);else if(E.isFramebufferTexture){if(ot)if(Ve)n.texStorage2D(t.TEXTURE_2D,xe,ke,ue.width,ue.height);else{let q=ue.width,se=ue.height;for(let me=0;me<xe;me++)n.texImage2D(t.TEXTURE_2D,me,ke,q,se,0,ve,Oe,null),q>>=1,se>>=1}}else if(qe.length>0){if(Ve&&ot){const q=De(qe[0]);n.texStorage2D(t.TEXTURE_2D,xe,ke,q.width,q.height)}for(let q=0,se=qe.length;q<se;q++)Ee=qe[q],Ve?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ve,Oe,Ee):n.texImage2D(t.TEXTURE_2D,q,ke,ve,Oe,Ee);E.generateMipmaps=!1}else if(Ve){if(ot){const q=De(ue);n.texStorage2D(t.TEXTURE_2D,xe,ke,q.width,q.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Oe,ue)}else n.texImage2D(t.TEXTURE_2D,0,ke,ve,Oe,ue);m(E)&&f(ee),be.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function O(R,E,z){if(E.image.length!==6)return;const ee=re(R,E),oe=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const J=i.get(oe);if(oe.version!==J.__version||ee===!0){n.activeTexture(t.TEXTURE0+z);const be=tt.getPrimaries(tt.workingColorSpace),pe=E.colorSpace===qi?null:tt.getPrimaries(E.colorSpace),_e=E.colorSpace===qi||be===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ye=E.isCompressedTexture||E.image[0].isCompressedTexture,ue=E.image[0]&&E.image[0].isDataTexture,ve=[];for(let se=0;se<6;se++)!Ye&&!ue?ve[se]=y(E.image[se],!0,r.maxCubemapSize):ve[se]=ue?E.image[se].image:E.image[se],ve[se]=je(E,ve[se]);const Oe=ve[0],ke=s.convert(E.format,E.colorSpace),Ee=s.convert(E.type),qe=g(E.internalFormat,ke,Ee,E.colorSpace),Ve=E.isVideoTexture!==!0,ot=J.__version===void 0||ee===!0,U=oe.dataReady;let xe=M(E,Oe);P(t.TEXTURE_CUBE_MAP,E);let q;if(Ye){Ve&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,qe,Oe.width,Oe.height);for(let se=0;se<6;se++){q=ve[se].mipmaps;for(let me=0;me<q.length;me++){const ye=q[me];E.format!==Zn?ke!==null?Ve?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,ye.width,ye.height,ke,ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,qe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,ye.width,ye.height,ke,Ee,ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,qe,ye.width,ye.height,0,ke,Ee,ye.data)}}}else{if(q=E.mipmaps,Ve&&ot){q.length>0&&xe++;const se=De(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,qe,se.width,se.height)}for(let se=0;se<6;se++)if(ue){Ve?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ve[se].width,ve[se].height,ke,Ee,ve[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,ve[se].width,ve[se].height,0,ke,Ee,ve[se].data);for(let me=0;me<q.length;me++){const Ke=q[me].image[se].image;Ve?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,Ke.width,Ke.height,ke,Ee,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,qe,Ke.width,Ke.height,0,ke,Ee,Ke.data)}}else{Ve?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ke,Ee,ve[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,ke,Ee,ve[se]);for(let me=0;me<q.length;me++){const ye=q[me];Ve?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,ke,Ee,ye.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,qe,ke,Ee,ye.image[se])}}}m(E)&&f(t.TEXTURE_CUBE_MAP),J.__version=oe.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function $(R,E,z,ee,oe,J){const be=s.convert(z.format,z.colorSpace),pe=s.convert(z.type),_e=g(z.internalFormat,be,pe,z.colorSpace);if(!i.get(E).__hasExternalTextures){const ue=Math.max(1,E.width>>J),ve=Math.max(1,E.height>>J);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,J,_e,ue,ve,E.depth,0,be,pe,null):n.texImage2D(oe,J,_e,ue,ve,0,be,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Fe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,oe,i.get(z).__webglTexture,0,Pe(E)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,oe,i.get(z).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(R,E,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const ee=E.depthTexture,oe=ee&&ee.isDepthTexture?ee.type:null,J=v(E.stencilBuffer,oe),be=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=Pe(E);Fe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,J,E.width,E.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,R)}else{const ee=E.textures;for(let oe=0;oe<ee.length;oe++){const J=ee[oe],be=s.convert(J.format,J.colorSpace),pe=s.convert(J.type),_e=g(J.internalFormat,be,pe,J.colorSpace),Ye=Pe(E);z&&Fe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,_e,E.width,E.height):Fe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,_e,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,_e,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function X(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const ee=i.get(E.depthTexture).__webglTexture,oe=Pe(E);if(E.depthTexture.format===Vs)Fe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(E.depthTexture.format===ro)Fe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function le(R){const E=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const oe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",oe)};ee.addEventListener("dispose",oe),E.__depthDisposeCallback=oe}E.__boundDepthTexture=ee}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");X(E.__webglFramebuffer,R)}else if(z){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=t.createRenderbuffer(),te(E.__webglDepthbuffer[ee],R,!1);else{const oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),te(E.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,oe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(R,E,z){const ee=i.get(R);E!==void 0&&$(ee.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&le(R)}function Me(R){const E=R.texture,z=i.get(R),ee=i.get(E);R.addEventListener("dispose",b);const oe=R.textures,J=R.isWebGLCubeRenderTarget===!0,be=oe.length>1;if(be||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let _e=0;_e<E.mipmaps.length;_e++)z.__webglFramebuffer[pe][_e]=t.createFramebuffer()}else z.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)z.__webglFramebuffer[pe]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(be)for(let pe=0,_e=oe.length;pe<_e;pe++){const Ye=i.get(oe[pe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Fe(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){const _e=oe[pe];z.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);const Ye=s.convert(_e.format,_e.colorSpace),ue=s.convert(_e.type),ve=g(_e.internalFormat,Ye,ue,_e.colorSpace,R.isXRRenderTarget===!0),Oe=Pe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,ve,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),te(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),P(t.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)$(z.__webglFramebuffer[pe][_e],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else $(z.__webglFramebuffer[pe],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(E)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let pe=0,_e=oe.length;pe<_e;pe++){const Ye=oe[pe],ue=i.get(Ye);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),P(t.TEXTURE_2D,Ye),$(z.__webglFramebuffer,R,Ye,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),m(Ye)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,ee.__webglTexture),P(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)$(z.__webglFramebuffer[_e],R,E,t.COLOR_ATTACHMENT0,pe,_e);else $(z.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,pe,0);m(E)&&f(pe),n.unbindTexture()}R.depthBuffer&&le(R)}function Re(R){const E=R.textures;for(let z=0,ee=E.length;z<ee;z++){const oe=E[z];if(m(oe)){const J=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(oe).__webglTexture;n.bindTexture(J,be),f(J),n.unbindTexture()}}}const Ae=[],D=[];function Ie(R){if(R.samples>0){if(Fe(R)===!1){const E=R.textures,z=R.width,ee=R.height;let oe=t.COLOR_BUFFER_BIT;const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(R),pe=E.length>1;if(pe)for(let _e=0;_e<E.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);const Ye=i.get(E[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ye,0)}t.blitFramebuffer(0,0,z,ee,0,0,z,ee,oe,t.NEAREST),l===!0&&(Ae.length=0,D.length=0,Ae.push(t.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ae.push(J),D.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<E.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);const Ye=i.get(E[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Pe(R){return Math.min(r.maxSamples,R.samples)}function Fe(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Te(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function je(R,E){const z=R.colorSpace,ee=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==xr&&z!==qi&&(tt.getTransfer(z)===dt?(ee!==Zn||oe!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function De(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=w,this.setTexture2D=Z,this.setTexture2DArray=ie,this.setTexture3D=Y,this.setTextureCube=K,this.rebindTextures=ae,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Fe}function $N(t,e){function n(i,r=qi){let s;const o=tt.getTransfer(r);if(i===Di)return t.UNSIGNED_BYTE;if(i===vm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===xm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===pM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===fM)return t.BYTE;if(i===hM)return t.SHORT;if(i===Ma)return t.UNSIGNED_SHORT;if(i===gm)return t.INT;if(i===qr)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===Da)return t.HALF_FLOAT;if(i===mM)return t.ALPHA;if(i===gM)return t.RGB;if(i===Zn)return t.RGBA;if(i===vM)return t.LUMINANCE;if(i===xM)return t.LUMINANCE_ALPHA;if(i===Vs)return t.DEPTH_COMPONENT;if(i===ro)return t.DEPTH_STENCIL;if(i===yM)return t.RED;if(i===ym)return t.RED_INTEGER;if(i===_M)return t.RG;if(i===_m)return t.RG_INTEGER;if(i===Sm)return t.RGBA_INTEGER;if(i===Ql||i===Jl||i===ec||i===tc)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ql)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ql)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hh||i===ph||i===mh||i===gh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ph)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vh||i===xh||i===yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vh||i===xh)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_h||i===Sh||i===Mh||i===Eh||i===wh||i===Th||i===Ah||i===bh||i===Ch||i===Rh||i===Ph||i===Lh||i===Nh||i===Dh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_h)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Eh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Th)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ah)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ch)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ph)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nc||i===Ih||i===Uh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===nc)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ih)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===SM||i===Fh||i===Oh||i===kh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===nc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===io?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class YN extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zo extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qN={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qN)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new zo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const KN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZN=`
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

}`;class QN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new hn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hr({vertexShader:KN,fragmentShader:ZN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wi(new xu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JN extends fo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,x=null;const y=new QN,m=n.getContextAttributes();let f=null,g=null;const v=[],M=[],C=new nt;let b=null;const A=new In;A.layers.enable(1),A.viewport=new Tt;const L=new In;L.layers.enable(2),L.viewport=new Tt;const V=[A,L],_=new YN;_.layers.enable(1),_.layers.enable(2);let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let $=v[O];return $===void 0&&($=new Hd,v[O]=$),$.getTargetRaySpace()},this.getControllerGrip=function(O){let $=v[O];return $===void 0&&($=new Hd,v[O]=$),$.getGripSpace()},this.getHand=function(O){let $=v[O];return $===void 0&&($=new Hd,v[O]=$),$.getHandSpace()};function j(O){const $=M.indexOf(O.inputSource);if($===-1)return;const te=v[$];te!==void 0&&(te.update(O.inputSource,O.frame,c||o),te.dispatchEvent({type:O.type,data:O.inputSource}))}function Z(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",ie);for(let O=0;O<v.length;O++){const $=M[O];$!==null&&(M[O]=null,v[O].disconnect($))}w=null,W=null,y.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,g=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,$),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Kr(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,te=null,X=null;m.depth&&(X=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=m.stencil?ro:Vs,te=m.stencil?io:qr);const le={colorFormat:n.RGBA8,depthFormat:X,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Kr(h.textureWidth,h.textureHeight,{format:Zn,type:Di,depthTexture:new FM(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ie(O){for(let $=0;$<O.removed.length;$++){const te=O.removed[$],X=M.indexOf(te);X>=0&&(M[X]=null,v[X].disconnect(te))}for(let $=0;$<O.added.length;$++){const te=O.added[$];let X=M.indexOf(te);if(X===-1){for(let ae=0;ae<v.length;ae++)if(ae>=M.length){M.push(te),X=ae;break}else if(M[ae]===null){M[ae]=te,X=ae;break}if(X===-1)break}const le=v[X];le&&le.connect(te)}}const Y=new B,K=new B;function I(O,$,te){Y.setFromMatrixPosition($.matrixWorld),K.setFromMatrixPosition(te.matrixWorld);const X=Y.distanceTo(K),le=$.projectionMatrix.elements,ae=te.projectionMatrix.elements,Me=le[14]/(le[10]-1),Re=le[14]/(le[10]+1),Ae=(le[9]+1)/le[5],D=(le[9]-1)/le[5],Ie=(le[8]-1)/le[0],Pe=(ae[8]+1)/ae[0],Fe=Me*Ie,Te=Me*Pe,je=X/(-Ie+Pe),De=je*-Ie;if($.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(De),O.translateZ(je),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),le[10]===-1)O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const R=Me+je,E=Re+je,z=Fe-De,ee=Te+(X-De),oe=Ae*Re/E*R,J=D*Re/E*R;O.projectionMatrix.makePerspective(z,ee,oe,J,R,E),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function Q(O,$){$===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices($.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;let $=O.near,te=O.far;y.texture!==null&&(y.depthNear>0&&($=y.depthNear),y.depthFar>0&&(te=y.depthFar)),_.near=L.near=A.near=$,_.far=L.far=A.far=te,(w!==_.near||W!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,W=_.far);const X=O.parent,le=_.cameras;Q(_,X);for(let ae=0;ae<le.length;ae++)Q(le[ae],X);le.length===2?I(_,A,L):_.projectionMatrix.copy(A.projectionMatrix),N(O,_,X)};function N(O,$,te){te===null?O.matrix.copy($.matrixWorld):(O.matrix.copy(te.matrixWorld),O.matrix.invert(),O.matrix.multiply($.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Bh*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(O){l=O,h!==null&&(h.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let P=null;function re(O,$){if(u=$.getViewerPose(c||o),x=$,u!==null){const te=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let X=!1;te.length!==_.cameras.length&&(_.cameras.length=0,X=!0);for(let ae=0;ae<te.length;ae++){const Me=te[ae];let Re=null;if(p!==null)Re=p.getViewport(Me);else{const D=d.getViewSubImage(h,Me);Re=D.viewport,ae===0&&(e.setRenderTargetTextures(g,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(g))}let Ae=V[ae];Ae===void 0&&(Ae=new In,Ae.layers.enable(ae),Ae.viewport=new Tt,V[ae]=Ae),Ae.matrix.fromArray(Me.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Me.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Re.x,Re.y,Re.width,Re.height),ae===0&&(_.matrix.copy(Ae.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),X===!0&&_.cameras.push(Ae)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")){const ae=d.getDepthInformation(te[0]);ae&&ae.isValid&&ae.texture&&y.init(e,ae,r.renderState)}}for(let te=0;te<v.length;te++){const X=M[te],le=v[te];X!==null&&le!==void 0&&le.update(X,$,c||o)}P&&P(O,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),x=null}const fe=new UM;fe.setAnimationLoop(re),this.setAnimationLoop=function(O){P=O},this.dispose=function(){}}}const Ar=new Ii,eD=new St;function tD(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,LM(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,v,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===fn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===fn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),v=g.envMap,M=g.envMapRotation;v&&(m.envMap.value=v,Ar.copy(M),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),m.envMapRotation.value.setFromMatrix4(eD.makeRotationFromEuler(Ar)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=v*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nD(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const M=v.program;i.uniformBlockBinding(g,M)}function c(g,v){let M=r[g.id];M===void 0&&(x(g),M=u(g),r[g.id]=M,g.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(g,C);const b=e.render.frame;s[g.id]!==b&&(h(g),s[g.id]=b)}function u(g){const v=d();g.__bindingPointIndex=v;const M=t.createBuffer(),C=g.__size,b=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],M=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,A=M.length;b<A;b++){const L=Array.isArray(M[b])?M[b]:[M[b]];for(let V=0,_=L.length;V<_;V++){const w=L[V];if(p(w,b,V,C)===!0){const W=w.__offset,j=Array.isArray(w.value)?w.value:[w.value];let Z=0;for(let ie=0;ie<j.length;ie++){const Y=j[ie],K=y(Y);typeof Y=="number"||typeof Y=="boolean"?(w.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,W+Z,w.__data)):Y.isMatrix3?(w.__data[0]=Y.elements[0],w.__data[1]=Y.elements[1],w.__data[2]=Y.elements[2],w.__data[3]=0,w.__data[4]=Y.elements[3],w.__data[5]=Y.elements[4],w.__data[6]=Y.elements[5],w.__data[7]=0,w.__data[8]=Y.elements[6],w.__data[9]=Y.elements[7],w.__data[10]=Y.elements[8],w.__data[11]=0):(Y.toArray(w.__data,Z),Z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,M,C){const b=g.value,A=v+"_"+M;if(C[A]===void 0)return typeof b=="number"||typeof b=="boolean"?C[A]=b:C[A]=b.clone(),!0;{const L=C[A];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return C[A]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function x(g){const v=g.uniforms;let M=0;const C=16;for(let A=0,L=v.length;A<L;A++){const V=Array.isArray(v[A])?v[A]:[v[A]];for(let _=0,w=V.length;_<w;_++){const W=V[_],j=Array.isArray(W.value)?W.value:[W.value];for(let Z=0,ie=j.length;Z<ie;Z++){const Y=j[Z],K=y(Y),I=M%C,Q=I%K.boundary,N=I+Q;M+=Q,N!==0&&C-N<K.storage&&(M+=C-N),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=K.storage}}}const b=M%C;return b>0&&(M+=C-b),g.__size=M,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class iD{constructor(e={}){const{canvas:n=GR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),x=new Int32Array(4);let y=null,m=null;const f=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=ar,this.toneMappingExposure=1;const v=this;let M=!1,C=0,b=0,A=null,L=-1,V=null;const _=new Tt,w=new Tt;let W=null;const j=new We(0);let Z=0,ie=n.width,Y=n.height,K=1,I=null,Q=null;const N=new Tt(0,0,ie,Y),P=new Tt(0,0,ie,Y);let re=!1;const fe=new IM;let O=!1,$=!1;const te=new St,X=new St,le=new B,ae=new Tt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function Ae(){return A===null?K:1}let D=i;function Ie(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mm}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",ye,!1),D===null){const F="webgl2";if(D=Ie(F,T),D===null)throw Ie(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Pe,Fe,Te,je,De,R,E,z,ee,oe,J,be,pe,_e,Ye,ue,ve,Oe,ke,Ee,qe,Ve,ot,U;function xe(){Pe=new l3(D),Pe.init(),Ve=new $N(D,Pe),Fe=new t3(D,Pe,e,Ve),Te=new jN(D),Fe.reverseDepthBuffer&&Te.buffers.depth.setReversed(!0),je=new d3(D),De=new RN,R=new XN(D,Pe,Te,De,Fe,Ve,je),E=new i3(v),z=new a3(v),ee=new v2(D),ot=new JL(D,ee),oe=new c3(D,ee,je,ot),J=new h3(D,oe,ee,je),ke=new f3(D,Fe,R),ue=new n3(De),be=new CN(v,E,z,Pe,Fe,ot,ue),pe=new tD(v,De),_e=new LN,Ye=new ON(Pe),Oe=new QL(v,E,z,Te,J,h,l),ve=new HN(v,J,Fe),U=new nD(D,je,Fe,Te),Ee=new e3(D,Pe,je),qe=new u3(D,Pe,je),je.programs=be.programs,v.capabilities=Fe,v.extensions=Pe,v.properties=De,v.renderLists=_e,v.shadowMap=ve,v.state=Te,v.info=je}xe();const q=new JN(v,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(ie,Y,!1))},this.getSize=function(T){return T.set(ie,Y)},this.setSize=function(T,F,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=T,Y=F,n.width=Math.floor(T*K),n.height=Math.floor(F*K),H===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(ie*K,Y*K).floor()},this.setDrawingBufferSize=function(T,F,H){ie=T,Y=F,K=H,n.width=Math.floor(T*H),n.height=Math.floor(F*H),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(_)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,F,H,G){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,F,H,G),Te.viewport(_.copy(N).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(P)},this.setScissor=function(T,F,H,G){T.isVector4?P.set(T.x,T.y,T.z,T.w):P.set(T,F,H,G),Te.scissor(w.copy(P).multiplyScalar(K).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(T){Te.setScissorTest(re=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){Q=T},this.getClearColor=function(T){return T.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(T=!0,F=!0,H=!0){let G=0;if(T){let k=!1;if(A!==null){const de=A.texture.format;k=de===Sm||de===_m||de===ym}if(k){const de=A.texture.type,ge=de===Di||de===qr||de===Ma||de===io||de===vm||de===xm,we=Oe.getClearColor(),Ce=Oe.getClearAlpha(),Be=we.r,ze=we.g,Le=we.b;ge?(p[0]=Be,p[1]=ze,p[2]=Le,p[3]=Ce,D.clearBufferuiv(D.COLOR,0,p)):(x[0]=Be,x[1]=ze,x[2]=Le,x[3]=Ce,D.clearBufferiv(D.COLOR,0,x))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),_e.dispose(),Ye.dispose(),De.dispose(),E.dispose(),z.dispose(),J.dispose(),ot.dispose(),U.dispose(),be.dispose(),q.dispose(),q.removeEventListener("sessionstart",Um),q.removeEventListener("sessionend",Fm),yr.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=je.autoReset,F=ve.enabled,H=ve.autoUpdate,G=ve.needsUpdate,k=ve.type;xe(),je.autoReset=T,ve.enabled=F,ve.autoUpdate=H,ve.needsUpdate=G,ve.type=k}function ye(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ke(T){const F=T.target;F.removeEventListener("dispose",Ke),At(F)}function At(T){nn(T),De.remove(T)}function nn(T){const F=De.get(T).programs;F!==void 0&&(F.forEach(function(H){be.releaseProgram(H)}),T.isShaderMaterial&&be.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,H,G,k,de){F===null&&(F=Me);const ge=k.isMesh&&k.matrixWorld.determinant()<0,we=YM(T,F,H,G,k);Te.setMaterial(G,ge);let Ce=H.index,Be=1;if(G.wireframe===!0){if(Ce=oe.getWireframeAttribute(H),Ce===void 0)return;Be=2}const ze=H.drawRange,Le=H.attributes.position;let it=ze.start*Be,ct=(ze.start+ze.count)*Be;de!==null&&(it=Math.max(it,de.start*Be),ct=Math.min(ct,(de.start+de.count)*Be)),Ce!==null?(it=Math.max(it,0),ct=Math.min(ct,Ce.count)):Le!=null&&(it=Math.max(it,0),ct=Math.min(ct,Le.count));const xt=ct-it;if(xt<0||xt===1/0)return;ot.setup(k,G,we,H,Ce);let mn,Je=Ee;if(Ce!==null&&(mn=ee.get(Ce),Je=qe,Je.setIndex(mn)),k.isMesh)G.wireframe===!0?(Te.setLineWidth(G.wireframeLinewidth*Ae()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(k.isLine){let Ne=G.linewidth;Ne===void 0&&(Ne=1),Te.setLineWidth(Ne*Ae()),k.isLineSegments?Je.setMode(D.LINES):k.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else k.isPoints?Je.setMode(D.POINTS):k.isSprite&&Je.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Je.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Pe.get("WEBGL_multi_draw"))Je.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ne=k._multiDrawStarts,kt=k._multiDrawCounts,et=k._multiDrawCount,zn=Ce?ee.get(Ce).bytesPerElement:1,es=De.get(G).currentProgram.getUniforms();for(let gn=0;gn<et;gn++)es.setValue(D,"_gl_DrawID",gn),Je.render(Ne[gn]/zn,kt[gn])}else if(k.isInstancedMesh)Je.renderInstances(it,xt,k.count);else if(H.isInstancedBufferGeometry){const Ne=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,kt=Math.min(H.instanceCount,Ne);Je.renderInstances(it,xt,kt)}else Je.render(it,xt)};function Qe(T,F,H){T.transparent===!0&&T.side===yi&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,Ga(T,F,H),T.side=fr,T.needsUpdate=!0,Ga(T,F,H),T.side=yi):Ga(T,F,H)}this.compile=function(T,F,H=null){H===null&&(H=T),m=Ye.get(H),m.init(F),g.push(m),H.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),T!==H&&T.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const G=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const de=k.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){const we=de[ge];Qe(we,H,k),G.add(we)}else Qe(de,H,k),G.add(de)}),g.pop(),m=null,G},this.compileAsync=function(T,F,H=null){const G=this.compile(T,F,H);return new Promise(k=>{function de(){if(G.forEach(function(ge){De.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){k(T);return}setTimeout(de,10)}Pe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let rn=null;function ui(T){rn&&rn(T)}function Um(){yr.stop()}function Fm(){yr.start()}const yr=new UM;yr.setAnimationLoop(ui),typeof self<"u"&&yr.setContext(self),this.setAnimationLoop=function(T){rn=T,q.setAnimationLoop(T),T===null?yr.stop():yr.start()},q.addEventListener("sessionstart",Um),q.addEventListener("sessionend",Fm),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,A),m=Ye.get(T,g.length),m.init(F),g.push(m),X.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),fe.setFromProjectionMatrix(X),$=this.localClippingEnabled,O=ue.init(this.clippingPlanes,$),y=_e.get(T,f.length),y.init(),f.push(y),q.enabled===!0&&q.isPresenting===!0){const de=v.xr.getDepthSensingMesh();de!==null&&Eu(de,F,-1/0,v.sortObjects)}Eu(T,F,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(I,Q),Re=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Re&&Oe.addToRenderList(y,T),this.info.render.frame++,O===!0&&ue.beginShadows();const H=m.state.shadowsArray;ve.render(H,T,F),O===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=y.opaque,k=y.transmissive;if(m.setupLights(),F.isArrayCamera){const de=F.cameras;if(k.length>0)for(let ge=0,we=de.length;ge<we;ge++){const Ce=de[ge];km(G,k,T,Ce)}Re&&Oe.render(T);for(let ge=0,we=de.length;ge<we;ge++){const Ce=de[ge];Om(y,T,Ce,Ce.viewport)}}else k.length>0&&km(G,k,T,F),Re&&Oe.render(T),Om(y,T,F);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,F),ot.resetDefaultState(),L=-1,V=null,g.pop(),g.length>0?(m=g[g.length-1],O===!0&&ue.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Eu(T,F,H,G){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||fe.intersectsSprite(T)){G&&ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(X);const ge=J.update(T),we=T.material;we.visible&&y.push(T,ge,we,H,ae.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||fe.intersectsObject(T))){const ge=J.update(T),we=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ae.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ae.copy(ge.boundingSphere.center)),ae.applyMatrix4(T.matrixWorld).applyMatrix4(X)),Array.isArray(we)){const Ce=ge.groups;for(let Be=0,ze=Ce.length;Be<ze;Be++){const Le=Ce[Be],it=we[Le.materialIndex];it&&it.visible&&y.push(T,ge,it,H,ae.z,Le)}}else we.visible&&y.push(T,ge,we,H,ae.z,null)}}const de=T.children;for(let ge=0,we=de.length;ge<we;ge++)Eu(de[ge],F,H,G)}function Om(T,F,H,G){const k=T.opaque,de=T.transmissive,ge=T.transparent;m.setupLightsView(H),O===!0&&ue.setGlobalState(v.clippingPlanes,H),G&&Te.viewport(_.copy(G)),k.length>0&&Ha(k,F,H),de.length>0&&Ha(de,F,H),ge.length>0&&Ha(ge,F,H),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function km(T,F,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Kr(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float")?Da:Di,minFilter:zr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const de=m.state.transmissionRenderTarget[G.id],ge=G.viewport||_;de.setSize(ge.z,ge.w);const we=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(j),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),Re&&Oe.render(H);const Ce=v.toneMapping;v.toneMapping=ar;const Be=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),O===!0&&ue.setGlobalState(v.clippingPlanes,G),Ha(T,H,G),R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Le=0,it=F.length;Le<it;Le++){const ct=F[Le],xt=ct.object,mn=ct.geometry,Je=ct.material,Ne=ct.group;if(Je.side===yi&&xt.layers.test(G.layers)){const kt=Je.side;Je.side=fn,Je.needsUpdate=!0,Bm(xt,H,G,mn,Je,Ne),Je.side=kt,Je.needsUpdate=!0,ze=!0}}ze===!0&&(R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de))}v.setRenderTarget(we),v.setClearColor(j,Z),Be!==void 0&&(G.viewport=Be),v.toneMapping=Ce}function Ha(T,F,H){const G=F.isScene===!0?F.overrideMaterial:null;for(let k=0,de=T.length;k<de;k++){const ge=T[k],we=ge.object,Ce=ge.geometry,Be=G===null?ge.material:G,ze=ge.group;we.layers.test(H.layers)&&Bm(we,F,H,Ce,Be,ze)}}function Bm(T,F,H,G,k,de){T.onBeforeRender(v,F,H,G,k,de),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,F,H,G,T,de),k.transparent===!0&&k.side===yi&&k.forceSinglePass===!1?(k.side=fn,k.needsUpdate=!0,v.renderBufferDirect(H,F,G,k,T,de),k.side=fr,k.needsUpdate=!0,v.renderBufferDirect(H,F,G,k,T,de),k.side=yi):v.renderBufferDirect(H,F,G,k,T,de),T.onAfterRender(v,F,H,G,k,de)}function Ga(T,F,H){F.isScene!==!0&&(F=Me);const G=De.get(T),k=m.state.lights,de=m.state.shadowsArray,ge=k.state.version,we=be.getParameters(T,k.state,de,F,H),Ce=be.getProgramCacheKey(we);let Be=G.programs;G.environment=T.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(T.isMeshStandardMaterial?z:E).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",Ke),Be=new Map,G.programs=Be);let ze=Be.get(Ce);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===ge)return Vm(T,we),ze}else we.uniforms=be.getUniforms(T),T.onBeforeCompile(we,v),ze=be.acquireProgram(we,Ce),Be.set(Ce,ze),G.uniforms=we.uniforms;const Le=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=ue.uniform),Vm(T,we),G.needsLights=KM(T),G.lightsStateVersion=ge,G.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMap.value=k.state.directionalShadowMap,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotShadowMap.value=k.state.spotShadowMap,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMap.value=k.state.pointShadowMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function zm(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=rc.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Vm(T,F){const H=De.get(T);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function YM(T,F,H,G,k){F.isScene!==!0&&(F=Me),R.resetTextureUnits();const de=F.fog,ge=G.isMeshStandardMaterial?F.environment:null,we=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:xr,Ce=(G.isMeshStandardMaterial?z:E).get(G.envMap||ge),Be=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!H.morphAttributes.position,it=!!H.morphAttributes.normal,ct=!!H.morphAttributes.color;let xt=ar;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(xt=v.toneMapping);const mn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Je=mn!==void 0?mn.length:0,Ne=De.get(G),kt=m.state.lights;if(O===!0&&($===!0||T!==V)){const Cn=T===V&&G.id===L;ue.setState(G,T,Cn)}let et=!1;G.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==kt.state.version||Ne.outputColorSpace!==we||k.isBatchedMesh&&Ne.batching===!1||!k.isBatchedMesh&&Ne.batching===!0||k.isBatchedMesh&&Ne.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ne.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ne.instancing===!1||!k.isInstancedMesh&&Ne.instancing===!0||k.isSkinnedMesh&&Ne.skinning===!1||!k.isSkinnedMesh&&Ne.skinning===!0||k.isInstancedMesh&&Ne.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ne.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ne.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ne.instancingMorph===!1&&k.morphTexture!==null||Ne.envMap!==Ce||G.fog===!0&&Ne.fog!==de||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ue.numPlanes||Ne.numIntersection!==ue.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==ze||Ne.morphTargets!==Le||Ne.morphNormals!==it||Ne.morphColors!==ct||Ne.toneMapping!==xt||Ne.morphTargetsCount!==Je)&&(et=!0):(et=!0,Ne.__version=G.version);let zn=Ne.currentProgram;et===!0&&(zn=Ga(G,F,k));let es=!1,gn=!1,wu=!1;const Mt=zn.getUniforms(),Fi=Ne.uniforms;if(Te.useProgram(zn.program)&&(es=!0,gn=!0,wu=!0),G.id!==L&&(L=G.id,gn=!0),es||V!==T){Fe.reverseDepthBuffer?(te.copy(T.projectionMatrix),WR(te),XR(te),Mt.setValue(D,"projectionMatrix",te)):Mt.setValue(D,"projectionMatrix",T.projectionMatrix),Mt.setValue(D,"viewMatrix",T.matrixWorldInverse);const Cn=Mt.map.cameraPosition;Cn!==void 0&&Cn.setValue(D,le.setFromMatrixPosition(T.matrixWorld)),Fe.logarithmicDepthBuffer&&Mt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Mt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),V!==T&&(V=T,gn=!0,wu=!0)}if(k.isSkinnedMesh){Mt.setOptional(D,k,"bindMatrix"),Mt.setOptional(D,k,"bindMatrixInverse");const Cn=k.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Mt.setValue(D,"boneTexture",Cn.boneTexture,R))}k.isBatchedMesh&&(Mt.setOptional(D,k,"batchingTexture"),Mt.setValue(D,"batchingTexture",k._matricesTexture,R),Mt.setOptional(D,k,"batchingIdTexture"),Mt.setValue(D,"batchingIdTexture",k._indirectTexture,R),Mt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Mt.setValue(D,"batchingColorTexture",k._colorsTexture,R));const Tu=H.morphAttributes;if((Tu.position!==void 0||Tu.normal!==void 0||Tu.color!==void 0)&&ke.update(k,H,zn),(gn||Ne.receiveShadow!==k.receiveShadow)&&(Ne.receiveShadow=k.receiveShadow,Mt.setValue(D,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Fi.envMap.value=Ce,Fi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Fi.envMapIntensity.value=F.environmentIntensity),gn&&(Mt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&qM(Fi,wu),de&&G.fog===!0&&pe.refreshFogUniforms(Fi,de),pe.refreshMaterialUniforms(Fi,G,K,Y,m.state.transmissionRenderTarget[T.id]),rc.upload(D,zm(Ne),Fi,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(rc.upload(D,zm(Ne),Fi,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Mt.setValue(D,"center",k.center),Mt.setValue(D,"modelViewMatrix",k.modelViewMatrix),Mt.setValue(D,"normalMatrix",k.normalMatrix),Mt.setValue(D,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Cn=G.uniformsGroups;for(let Au=0,ZM=Cn.length;Au<ZM;Au++){const Hm=Cn[Au];U.update(Hm,zn),U.bind(Hm,zn)}}return zn}function qM(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function KM(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,F,H){De.get(T.texture).__webglTexture=F,De.get(T.depthTexture).__webglTexture=H;const G=De.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const H=De.get(T);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,H=0){A=T,C=F,b=H;let G=!0,k=null,de=!1,ge=!1;if(T){const Ce=De.get(T);if(Ce.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(Ce.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Ce.__hasExternalTextures)R.rebindTextures(T,De.get(T.texture).__webglTexture,De.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Le=T.depthTexture;if(Ce.__boundDepthTexture!==Le){if(Le!==null&&De.has(Le)&&(T.width!==Le.image.width||T.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ge=!0);const ze=De.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?k=ze[F][H]:k=ze[F],de=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?k=De.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?k=ze[H]:k=ze,_.copy(T.viewport),w.copy(T.scissor),W=T.scissorTest}else _.copy(N).multiplyScalar(K).floor(),w.copy(P).multiplyScalar(K).floor(),W=re;if(Te.bindFramebuffer(D.FRAMEBUFFER,k)&&G&&Te.drawBuffers(T,k),Te.viewport(_),Te.scissor(w),Te.setScissorTest(W),de){const Ce=De.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ce.__webglTexture,H)}else if(ge){const Ce=De.get(T.texture),Be=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.__webglTexture,H||0,Be)}L=-1},this.readRenderTargetPixels=function(T,F,H,G,k,de,ge){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){Te.bindFramebuffer(D.FRAMEBUFFER,we);try{const Ce=T.texture,Be=Ce.format,ze=Ce.type;if(!Fe.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-G&&H>=0&&H<=T.height-k&&D.readPixels(F,H,G,k,Ve.convert(Be),Ve.convert(ze),de)}finally{const Ce=A!==null?De.get(A).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,F,H,G,k,de,ge){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){const Ce=T.texture,Be=Ce.format,ze=Ce.type;if(!Fe.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-G&&H>=0&&H<=T.height-k){Te.bindFramebuffer(D.FRAMEBUFFER,we);const Le=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(F,H,G,k,Ve.convert(Be),Ve.convert(ze),0);const it=A!==null?De.get(A).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,it);const ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await jR(D,ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(Le),D.deleteSync(ct),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,H=0){T.isTexture!==!0&&(ic("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-H),k=Math.floor(T.image.width*G),de=Math.floor(T.image.height*G),ge=F!==null?F.x:0,we=F!==null?F.y:0;R.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,ge,we,k,de),Te.unbindTexture()},this.copyTextureToTexture=function(T,F,H=null,G=null,k=0){T.isTexture!==!0&&(ic("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],F=arguments[2],k=arguments[3]||0,H=null);let de,ge,we,Ce,Be,ze;H!==null?(de=H.max.x-H.min.x,ge=H.max.y-H.min.y,we=H.min.x,Ce=H.min.y):(de=T.image.width,ge=T.image.height,we=0,Ce=0),G!==null?(Be=G.x,ze=G.y):(Be=0,ze=0);const Le=Ve.convert(F.format),it=Ve.convert(F.type);R.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const ct=D.getParameter(D.UNPACK_ROW_LENGTH),xt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),mn=D.getParameter(D.UNPACK_SKIP_PIXELS),Je=D.getParameter(D.UNPACK_SKIP_ROWS),Ne=D.getParameter(D.UNPACK_SKIP_IMAGES),kt=T.isCompressedTexture?T.mipmaps[k]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,kt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,kt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,we),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,Be,ze,de,ge,Le,it,kt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,Be,ze,kt.width,kt.height,Le,kt.data):D.texSubImage2D(D.TEXTURE_2D,k,Be,ze,de,ge,Le,it,kt),D.pixelStorei(D.UNPACK_ROW_LENGTH,ct),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ne),k===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,F,H=null,G=null,k=0){T.isTexture!==!0&&(ic("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,T=arguments[2],F=arguments[3],k=arguments[4]||0);let de,ge,we,Ce,Be,ze,Le,it,ct;const xt=T.isCompressedTexture?T.mipmaps[k]:T.image;H!==null?(de=H.max.x-H.min.x,ge=H.max.y-H.min.y,we=H.max.z-H.min.z,Ce=H.min.x,Be=H.min.y,ze=H.min.z):(de=xt.width,ge=xt.height,we=xt.depth,Ce=0,Be=0,ze=0),G!==null?(Le=G.x,it=G.y,ct=G.z):(Le=0,it=0,ct=0);const mn=Ve.convert(F.format),Je=Ve.convert(F.type);let Ne;if(F.isData3DTexture)R.setTexture3D(F,0),Ne=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)R.setTexture2DArray(F,0),Ne=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const kt=D.getParameter(D.UNPACK_ROW_LENGTH),et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),zn=D.getParameter(D.UNPACK_SKIP_PIXELS),es=D.getParameter(D.UNPACK_SKIP_ROWS),gn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,Be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ze),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ne,k,Le,it,ct,de,ge,we,mn,Je,xt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ne,k,Le,it,ct,de,ge,we,mn,xt.data):D.texSubImage3D(Ne,k,Le,it,ct,de,ge,we,mn,Je,xt),D.pixelStorei(D.UNPACK_ROW_LENGTH,kt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,zn),D.pixelStorei(D.UNPACK_SKIP_ROWS,es),D.pixelStorei(D.UNPACK_SKIP_IMAGES,gn),k===0&&F.generateMipmaps&&D.generateMipmap(Ne),Te.unbindTexture()},this.initRenderTarget=function(T){De.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){C=0,b=0,A=null,Te.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Mm?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===vu?"display-p3":"srgb"}}class Tm{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=n}clone(){return new Tm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rD extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ea extends ho{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gc=new B,jc=new B,ax=new St,Po=new Em,Nl=new Oa,Gd=new B,lx=new B;class sD extends Qt{constructor(e=new pn,n=new ea){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Gc.fromBufferAttribute(n,r-1),jc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Gc.distanceTo(jc);e.setAttribute("lineDistance",new Jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(r),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;ax.copy(r).invert(),Po.copy(e.ray).applyMatrix4(ax);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let y=p,m=x-1;y<m;y+=c){const f=u.getX(y),g=u.getX(y+1),v=Dl(this,e,Po,l,f,g);v&&n.push(v)}if(this.isLineLoop){const y=u.getX(x-1),m=u.getX(p),f=Dl(this,e,Po,l,y,m);f&&n.push(f)}}else{const p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let y=p,m=x-1;y<m;y+=c){const f=Dl(this,e,Po,l,y,y+1);f&&n.push(f)}if(this.isLineLoop){const y=Dl(this,e,Po,l,x-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Dl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Gc.fromBufferAttribute(o,r),jc.fromBufferAttribute(o,s),n.distanceSqToSegment(Gc,jc,Gd,lx)>i)return;Gd.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Gd);if(!(l<e.near||l>e.far))return{distance:l,point:lx.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const cx=new B,ux=new B;class sc extends sD{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)cx.fromBufferAttribute(n,r),ux.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+cx.distanceTo(ux);e.setAttribute("lineDistance",new Jt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class VM extends ho{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dx=new St,Vh=new Em,Il=new Oa,Ul=new B;class oD extends Qt{constructor(e=new pn,n=new VM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(r),Il.radius+=s,e.ray.intersectsSphere(Il)===!1)return;dx.copy(r).invert(),Vh.copy(e.ray).applyMatrix4(dx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let x=h,y=p;x<y;x++){const m=c.getX(x);Ul.fromBufferAttribute(d,m),fx(Ul,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=h,y=p;x<y;x++)Ul.fromBufferAttribute(d,x),fx(Ul,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fx(t,e,n,i,r,s,o){const a=Vh.distanceSqToPoint(t);if(a<n){const l=new B;Vh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class _u extends pn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(s.slice(),3)),this.setAttribute("uv",new Jt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const v=new B,M=new B,C=new B;for(let b=0;b<n.length;b+=3)p(n[b+0],v),p(n[b+1],M),p(n[b+2],C),l(v,M,C,g)}function l(g,v,M,C){const b=C+1,A=[];for(let L=0;L<=b;L++){A[L]=[];const V=g.clone().lerp(M,L/b),_=v.clone().lerp(M,L/b),w=b-L;for(let W=0;W<=w;W++)W===0&&L===b?A[L][W]=V:A[L][W]=V.clone().lerp(_,W/w)}for(let L=0;L<b;L++)for(let V=0;V<2*(b-L)-1;V++){const _=Math.floor(V/2);V%2===0?(h(A[L][_+1]),h(A[L+1][_]),h(A[L][_])):(h(A[L][_+1]),h(A[L+1][_+1]),h(A[L+1][_]))}}function c(g){const v=new B;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(g),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function u(){const g=new B;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const M=m(g)/2/Math.PI+.5,C=f(g)/Math.PI+.5;o.push(M,1-C)}x(),d()}function d(){for(let g=0;g<o.length;g+=6){const v=o[g+0],M=o[g+2],C=o[g+4],b=Math.max(v,M,C),A=Math.min(v,M,C);b>.9&&A<.1&&(v<.2&&(o[g+0]+=1),M<.2&&(o[g+2]+=1),C<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function p(g,v){const M=g*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function x(){const g=new B,v=new B,M=new B,C=new B,b=new nt,A=new nt,L=new nt;for(let V=0,_=0;V<s.length;V+=9,_+=6){g.set(s[V+0],s[V+1],s[V+2]),v.set(s[V+3],s[V+4],s[V+5]),M.set(s[V+6],s[V+7],s[V+8]),b.set(o[_+0],o[_+1]),A.set(o[_+2],o[_+3]),L.set(o[_+4],o[_+5]),C.copy(g).add(v).add(M).divideScalar(3);const w=m(C);y(b,_+0,g,w),y(A,_+2,v,w),y(L,_+4,M,w)}}function y(g,v,M,C){C<0&&g.x===1&&(o[v]=g.x-1),M.x===0&&M.z===0&&(o[v]=C/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.vertices,e.indices,e.radius,e.details)}}class Am extends _u{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Am(e.radius,e.detail)}}class bm extends _u{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new bm(e.radius,e.detail)}}class hx extends pn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new B,s=new B;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],h=d.start,p=d.count;for(let x=h,y=h+p;x<y;x+=3)for(let m=0;m<3;m++){const f=a.getX(x+m),g=a.getX(x+(m+1)%3);r.fromBufferAttribute(o,f),s.fromBufferAttribute(o,g),px(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,d=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),px(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new Jt(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function px(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}class aD extends sc{constructor(e=10,n=10,i=4473924,r=8947848){i=new We(i),r=new We(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,p=0,x=-a;h<=n;h++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const y=h===s?i:r;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const u=new pn;u.setAttribute("position",new Jt(l,3)),u.setAttribute("color",new Jt(c,3));const d=new ea({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mm);const lD=({threatMode:t=!1})=>{const e=ne.useRef(null),n=ne.useRef(t);return n.current=t,ne.useEffect(()=>{const i=e.current;if(!i)return;const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=new rD;s.fog=new Tm(329485,.002);const o=new In(60,window.innerWidth/window.innerHeight,1,1e3);o.position.z=240,o.position.y=20;const a=new iD({alpha:!0,antialias:!0,powerPreference:"high-performance"});a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(a.domElement);const l=new zo;s.add(l);const c=r?40:90,u=55,d=new Float32Array(c*3),h=[],p={x:260,y:160,z:120};for(let O=0;O<c;O++)d[O*3]=(Math.random()-.5)*p.x,d[O*3+1]=(Math.random()-.5)*p.y+10,d[O*3+2]=(Math.random()-.5)*p.z,h.push({x:(Math.random()-.5)*.18,y:(Math.random()-.5)*.18,z:(Math.random()-.5)*.12});const x=new pn;x.setAttribute("position",new En(d,3));const y=new VM({color:61695,size:2.8,transparent:!0,opacity:.8,blending:Oc}),m=new oD(x,y);l.add(m);const f=new Float32Array(c*c*6),g=new Float32Array(c*c*6),v=new pn;v.setAttribute("position",new En(f,3)),v.setAttribute("color",new En(g,3));const M=new ea({vertexColors:!0,transparent:!0,opacity:.45,blending:Oc}),C=new sc(v,M);l.add(C);const b=new Am(36,1),A=new hx(b),L=new ea({color:35071,transparent:!0,opacity:.18}),V=new sc(A,L);V.position.set(0,0,-40),l.add(V);const _=new bm(18,0),w=new hx(_),W=new ea({color:9133302,transparent:!0,opacity:.28}),j=new sc(w,W);j.position.set(0,0,-40),l.add(j);const Z=new aD(500,36,61695,1976635);Z.position.y=-80;const ie=Z.material;ie.transparent=!0,ie.opacity=.12,l.add(Z);let Y=0,K=0,I=0,Q=0;const N=O=>{const $=window.innerWidth/2,te=window.innerHeight/2;Y=(O.clientX-$)*.04,K=(O.clientY-te)*.04};window.addEventListener("mousemove",N,{passive:!0});const P=()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",P);let re;const fe=()=>{re=requestAnimationFrame(fe),I+=(Y-I)*.05,Q+=(K-Q)*.05,l.rotation.y=I*.015,l.rotation.x=Q*.01,r||(V.rotation.y+=.003,V.rotation.x+=.0018,j.rotation.y-=.005,j.rotation.z+=.0025);const O=n.current,$=O?new We(16722517):new We(61695),te=O?new We(16711748):new We(35071);y.color.lerp($,.05),L.color.lerp(te,.05);const X=x.attributes.position.array;let le=0;for(let ae=0;ae<c;ae++){r||(X[ae*3]+=h[ae].x,X[ae*3+1]+=h[ae].y,X[ae*3+2]+=h[ae].z,Math.abs(X[ae*3])>p.x/2&&(h[ae].x*=-1),Math.abs(X[ae*3+1]-10)>p.y/2&&(h[ae].y*=-1),Math.abs(X[ae*3+2])>p.z/2&&(h[ae].z*=-1));for(let Me=ae+1;Me<c;Me++){const Re=X[ae*3]-X[Me*3],Ae=X[ae*3+1]-X[Me*3+1],D=X[ae*3+2]-X[Me*3+2],Ie=Re*Re+Ae*Ae+D*D;if(Ie<u*u){const Pe=1-Math.sqrt(Ie)/u;f[le*6]=X[ae*3],f[le*6+1]=X[ae*3+1],f[le*6+2]=X[ae*3+2],f[le*6+3]=X[Me*3],f[le*6+4]=X[Me*3+1],f[le*6+5]=X[Me*3+2];const Fe=O?1:0,Te=O?.15:.94,je=O?.33:1;g[le*6]=Fe*Pe,g[le*6+1]=Te*Pe,g[le*6+2]=je*Pe,g[le*6+3]=Fe*Pe,g[le*6+4]=Te*Pe,g[le*6+5]=je*Pe,le++}}}x.attributes.position.needsUpdate=!0,v.attributes.position.needsUpdate=!0,v.attributes.color.needsUpdate=!0,v.setDrawRange(0,le*2),a.render(s,o)};return fe(),()=>{cancelAnimationFrame(re),window.removeEventListener("resize",P),window.removeEventListener("mousemove",N),i.contains(a.domElement)&&i.removeChild(a.domElement),a.dispose(),x.dispose(),y.dispose(),v.dispose(),M.dispose(),b.dispose(),L.dispose(),_.dispose(),W.dispose()}},[]),S.jsx("div",{ref:e,className:"fixed inset-0 pointer-events-none z-0 overflow-hidden","aria-hidden":"true"})};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cD=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),HM=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dD=ne.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>ne.createElement("svg",{ref:l,...uD,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:HM("lucide",r),...a},[...o.map(([c,u])=>ne.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=(t,e)=>{const n=ne.forwardRef(({className:i,...r},s)=>ne.createElement(dD,{ref:s,iconNode:e,className:HM(`lucide-${cD(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=$e("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fD=$e("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hD=$e("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=$e("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pD=$e("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mD=$e("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gD=$e("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vD=$e("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xD=$e("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=$e("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=$e("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yD=$e("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _D=$e("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=$e("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=$e("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=$e("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SD=$e("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=$e("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MD=$e("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=$e("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=$e("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ED=$e("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wD=$e("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TD=$e("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=$e("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AD=$e("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bD=$e("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CD=$e("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=$e("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=$e("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=$e("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=$e("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=$e("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RD=$e("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PD=$e("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=$e("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=$e("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Lo="http://localhost:8000".replace(/\/$/,""),LD=12e3;async function Fl(t,e={}){const n=new AbortController,i=setTimeout(()=>n.abort(),LD);try{return await fetch(t,{...e,signal:n.signal})}catch(r){throw r.name==="AbortError"?new Error("Analysis timed out. Please try again."):r}finally{clearTimeout(i)}}const Dm={getBaseUrl(){return Lo},async checkHealth(){try{const t=await Fl(`${Lo}/health`);if(!t.ok)throw new Error(`Health check returned status ${t.status}`);return await t.json()}catch{return{status:"unreachable",model_loaded:!1,model_version:"offline"}}},async predictUrl(t){const e=performance.now();let n;try{n=await Fl(`${Lo}/predict`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t.trim()})})}catch(o){throw o.message&&o.message.includes("timed out")?o:new Error("Detection service is temporarily unavailable. Ensure backend is running.")}if(!n.ok){let o="Please enter a valid URL.";try{const a=await n.json();a.detail&&(Array.isArray(a.detail)?o=a.detail.map(l=>l.msg||l).join(", "):o=String(a.detail))}catch{}throw new Error(o)}const i=await n.json(),r=n.headers.get("X-Process-Time-Ms"),s=r?parseFloat(r):Math.round(performance.now()-e);return{...i,processing_time_ms:s,model_version:i.model_version||"phishing-v1.0"}},async getHistory(t=1,e=20){try{const n=await Fl(`${Lo}/history?page=${t}&limit=${e}`);if(!n.ok)throw new Error(`Failed to fetch history (HTTP ${n.status})`);return await n.json()}catch(n){return console.warn("Scan history unavailable:",n),{total:0,page:1,limit:e,items:[]}}},async getPrediction(t){const e=await Fl(`${Lo}/history/${t}`);if(!e.ok)throw new Error(`Prediction record #${t} not found.`);return await e.json()}},vx=({onHealthUpdate:t})=>{const[e,n]=ne.useState({status:"checking",model_loaded:!1,model_version:"..."}),[i,r]=ne.useState(!1),s=async()=>{r(!0);const a=await Dm.checkHealth();n(a),r(!1),t&&t(a)};ne.useEffect(()=>{s();const a=setInterval(s,15e3);return()=>clearInterval(a)},[]);const o=e.status==="healthy"&&e.model_loaded;return S.jsxs("div",{className:`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono transition-all duration-300 ${o?"bg-emerald-950/40 border-emerald-500/30 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]":"bg-rose-950/40 border-rose-500/30 text-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.15)]"}`,title:`Model Version: ${e.model_version}`,children:[S.jsxs("span",{className:"relative flex h-2 w-2",children:[o&&S.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),S.jsx("span",{className:`relative inline-flex rounded-full h-2 w-2 ${o?"bg-emerald-500":"bg-rose-500"}`})]}),S.jsx("span",{className:"font-medium tracking-wide",children:o?"Detection Engine Online":"Detection Engine Offline"}),o&&S.jsx("span",{className:"text-[10px] text-emerald-400/70 border-l border-emerald-500/20 pl-1.5 hidden sm:inline",children:e.model_version}),S.jsx("button",{onClick:s,disabled:i,className:"text-slate-400 hover:text-slate-200 transition-colors ml-0.5 p-0.5",title:"Refresh Engine Status","aria-label":"Refresh Engine Status",children:S.jsx(bD,{className:`w-3 h-3 ${i?"animate-spin text-cyan-400":""}`})})]})},ND=({activeTab:t,setActiveTab:e,onOpenAbout:n})=>{const[i,r]=ne.useState(!1),[s,o]=ne.useState(!1);ne.useEffect(()=>{const l=()=>{r(window.scrollY>20)};return window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]);const a=[{id:"scanner",label:"Scanner",icon:RD},{id:"dashboard",label:"Dashboard",icon:Cm},{id:"history",label:"Scan History",icon:XM}];return S.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-3 ${i?"bg-[#05070D]/90 backdrop-blur-md border-b border-cyan-500/15 shadow-[0_4px_30px_rgba(0,0,0,0.8)]":"bg-transparent border-b border-transparent"}`,children:[S.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[S.jsxs("div",{onClick:()=>e("scanner"),className:"flex items-center gap-3 cursor-pointer group",children:[S.jsxs("div",{className:"relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-violet-600/20 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300",children:[S.jsx(Va,{className:"w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300"}),S.jsx("div",{className:"absolute inset-0 rounded-xl bg-cyan-400/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity"})]}),S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsx("span",{className:"font-mono text-sm tracking-widest text-cyan-400 font-bold",children:"PHISHGUARD"}),S.jsx("span",{className:"px-1.5 py-0.2 rounded text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30",children:"AI"})]}),S.jsx("p",{className:"text-[10px] text-slate-400 font-mono tracking-wider hidden sm:block",children:"NEURAL THREAT INTERCEPTOR"})]})]}),S.jsxs("nav",{className:"hidden md:flex items-center gap-1 bg-slate-900/40 p-1 rounded-full border border-slate-800/80 backdrop-blur-sm",children:[a.map(l=>{const c=l.icon,u=t===l.id;return S.jsxs("button",{onClick:()=>e(l.id),className:`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${u?"bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(0,240,255,0.2)] font-semibold":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,children:[S.jsx(c,{className:`w-3.5 h-3.5 ${u?"text-cyan-400":"text-slate-400"}`}),S.jsx("span",{children:l.label})]},l.id)}),S.jsxs("button",{onClick:n,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition-colors",title:"System Architecture & Threat Specs",children:[S.jsx(gx,{className:"w-3.5 h-3.5"}),S.jsx("span",{children:"Architecture"})]})]}),S.jsx("div",{className:"hidden sm:flex items-center gap-3",children:S.jsx(vx,{})}),S.jsxs("div",{className:"flex md:hidden items-center gap-2",children:[S.jsx(vx,{}),S.jsx("button",{onClick:()=>o(!s),className:"p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white","aria-label":"Toggle Navigation Menu",children:s?S.jsx(Lm,{className:"w-5 h-5"}):S.jsx(AD,{className:"w-5 h-5"})})]})]}),s&&S.jsxs("div",{className:"md:hidden mt-3 p-4 rounded-2xl bg-[#080B12]/95 border border-cyan-500/20 backdrop-blur-xl shadow-2xl flex flex-col gap-2",children:[a.map(l=>{const c=l.icon,u=t===l.id;return S.jsxs("button",{onClick:()=>{e(l.id),o(!1)},className:`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-mono transition-colors text-left ${u?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/30":"text-slate-300 hover:bg-slate-800/50"}`,children:[S.jsx(c,{className:"w-4 h-4 text-cyan-400"}),S.jsx("span",{children:l.label})]},l.id)}),S.jsxs("button",{onClick:()=>{n(),o(!1)},className:"flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-mono text-slate-300 hover:bg-slate-800/50 transition-colors text-left",children:[S.jsx(gx,{className:"w-4 h-4 text-cyan-400"}),S.jsx("span",{children:"Architecture & Threat Model"})]})]})]})},DD=()=>S.jsxs("div",{className:"text-center max-w-4xl mx-auto pt-24 sm:pt-28 pb-6 px-4",children:[S.jsxs(st.div,{initial:{opacity:0,y:-15},animate:{opacity:1,y:0},transition:{duration:.5},className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 shadow-[0_0_15px_rgba(0,240,255,0.15)]",children:[S.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"}),S.jsx("span",{className:"tracking-wide",children:"NEURAL URL INTERCEPTOR • XGBOOST ACTIVE"})]}),S.jsxs(st.h1,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5",children:["AI-Powered URL"," ",S.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 drop-shadow-[0_0_25px_rgba(0,240,255,0.3)]",children:"Phishing Detection"})]}),S.jsx(st.p,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed mb-6",children:"Analyze suspicious URLs in real time using machine-learning based threat detection."}),S.jsxs(st.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-slate-400",children:[S.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800",children:[S.jsx(Mu,{className:"w-3.5 h-3.5 text-cyan-400"}),S.jsx("span",{children:"99.81% Test Accuracy"})]}),S.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800",children:[S.jsx(Nm,{className:"w-3.5 h-3.5 text-blue-400"}),S.jsx("span",{children:"Sub-Millisecond Inference"})]}),S.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800",children:[S.jsx(Ba,{className:"w-3.5 h-3.5 text-violet-400"}),S.jsx("span",{children:"33 Lexical Features"})]}),S.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800",children:[S.jsx(Su,{className:"w-3.5 h-3.5 text-emerald-400"}),S.jsx("span",{children:"Zero Server-Side Crawl (No SSRF)"})]})]})]}),xx=[{id:1,label:"Parsing URL & Normalizing Structure",icon:Pm},{id:2,label:"Extracting 33 Syntactic Features",icon:Ba},{id:3,label:"Analyzing Threat Patterns & Entropy",icon:Cm},{id:4,label:"Running ML Model (XGBoost)",icon:Va},{id:5,label:"Generating Risk Assessment",icon:$M}],ID=({url:t,onAnimationComplete:e,apiFinished:n=!1})=>{const[i,r]=ne.useState(0);return ne.useEffect(()=>{const o=setInterval(()=>{r(a=>a<xx.length-1?a+1:(clearInterval(o),e&&setTimeout(e,150),a))},280);return()=>clearInterval(o)},[e]),S.jsxs("div",{className:"relative w-full overflow-hidden rounded-2xl bg-[#080B12]/90 border border-cyan-500/30 p-8 shadow-[0_0_50px_rgba(0,240,255,0.2)] backdrop-blur-xl",children:[S.jsx("div",{className:"absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse shadow-[0_0_15px_#00f0ff]"}),S.jsx(st.div,{initial:{top:"0%"},animate:{top:["0%","100%","0%"]},transition:{repeat:1/0,duration:2.2,ease:"linear"},className:"absolute inset-x-0 h-24 bg-gradient-to-b from-cyan-500/10 via-cyan-400/20 to-transparent pointer-events-none"}),S.jsxs("div",{className:"relative z-10 flex flex-col items-center text-center",children:[S.jsxs("div",{className:"relative w-28 h-28 mb-6 flex items-center justify-center",children:[S.jsx(st.div,{animate:{rotate:360},transition:{repeat:1/0,duration:6,ease:"linear"},className:"absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/40"}),S.jsx(st.div,{animate:{rotate:-360},transition:{repeat:1/0,duration:4,ease:"linear"},className:"absolute inset-2 rounded-full border border-blue-500/50"}),S.jsx(st.div,{animate:{rotate:360},transition:{repeat:1/0,duration:2,ease:"linear"},className:"absolute inset-0 rounded-full",style:{background:"conic-gradient(from 0deg, rgba(0, 240, 255, 0.4) 0deg, transparent 90deg, transparent 360deg)"}}),S.jsx(st.div,{animate:{scale:[1,1.15,1],opacity:[.7,1,.7]},transition:{repeat:1/0,duration:1.2,ease:"easeInOut"},className:"w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_20px_#00f0ff]",children:S.jsx(Va,{className:"w-6 h-6 text-slate-950 font-bold"})}),S.jsx("div",{className:"absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400"}),S.jsx("div",{className:"absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400"}),S.jsx("div",{className:"absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400"}),S.jsx("div",{className:"absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400"})]}),S.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 max-w-full mb-6",children:[S.jsx("span",{className:"text-cyan-400 font-bold",children:"TARGET:"}),S.jsx("span",{className:"truncate max-w-xs sm:max-w-md",children:t})]}),S.jsx("div",{className:"w-full max-w-md space-y-2.5",children:xx.map((s,o)=>{const a=s.icon,l=o<i,c=o===i;return S.jsxs(st.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{duration:.2,delay:o*.05},className:`flex items-center justify-between px-4 py-2.5 rounded-xl border text-xs font-mono transition-all duration-300 ${l?"bg-emerald-950/20 border-emerald-500/30 text-emerald-300":c?"bg-cyan-950/40 border-cyan-400/60 text-cyan-200 shadow-[0_0_15px_rgba(0,240,255,0.2)]":"bg-slate-900/30 border-slate-800/50 text-slate-500"}`,children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:`w-6 h-6 rounded-lg flex items-center justify-center ${l?"bg-emerald-500/20 text-emerald-400":c?"bg-cyan-500/20 text-cyan-400 animate-pulse":"bg-slate-800 text-slate-600"}`,children:S.jsx(a,{className:"w-3.5 h-3.5"})}),S.jsx("span",{className:c?"font-semibold text-cyan-100":"",children:s.label})]}),S.jsx("div",{children:l?S.jsx(jM,{className:"w-4 h-4 text-emerald-400"}):c?S.jsx("span",{className:"inline-block w-3 h-3 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin"}):S.jsx("span",{className:"text-[10px] text-slate-600 font-mono",children:"WAITING"})})]},s.id)})}),S.jsx("p",{className:"mt-6 text-[11px] font-mono text-cyan-400/70 tracking-widest uppercase animate-pulse",children:"Autonomous Neural Interceptor Active..."})]})]})};var Im={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),P=N.getContext("2d");P.fillRect(0,0,1,1);var re=N.transferToImageBitmap();P.createPattern(re,"no-repeat")}catch{return!1}return!0}();function l(){}function c(N){var P=n.exports.Promise,re=P!==void 0?P:e.Promise;return typeof re=="function"?new re(N):(N(l,l),null)}var u=function(N,P){return{transform:function(re){if(N)return re;if(P.has(re))return P.get(re);var fe=new OffscreenCanvas(re.width,re.height),O=fe.getContext("2d");return O.drawImage(re,0,0),P.set(re,fe),fe},clear:function(){P.clear()}}}(a,new Map),d=function(){var N=Math.floor(16.666666666666668),P,re,fe={},O=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(P=function($){var te=Math.random();return fe[te]=requestAnimationFrame(function X(le){O===le||O+N-1<le?(O=le,delete fe[te],$()):fe[te]=requestAnimationFrame(X)}),te},re=function($){fe[$]&&cancelAnimationFrame(fe[$])}):(P=function($){return setTimeout($,N)},re=function($){return clearTimeout($)}),{frame:P,cancel:re}}(),h=function(){var N,P,re={};function fe(O){function $(te,X){O.postMessage({options:te||{},callback:X})}O.init=function(X){var le=X.transferControlToOffscreen();O.postMessage({canvas:le},[le])},O.fire=function(X,le,ae){if(P)return $(X,null),P;var Me=Math.random().toString(36).slice(2);return P=c(function(Re){function Ae(D){D.data.callback===Me&&(delete re[Me],O.removeEventListener("message",Ae),P=null,u.clear(),ae(),Re())}O.addEventListener("message",Ae),$(X,Me),re[Me]=Ae.bind(null,{data:{callback:Me}})}),P},O.reset=function(){O.postMessage({reset:!0});for(var X in re)re[X](),delete re[X]}}return function(){if(N)return N;if(!i&&s){var O=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([O])))}catch($){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",$),null}fe(N)}return N}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function x(N,P){return P?P(N):N}function y(N){return N!=null}function m(N,P,re){return x(N&&y(N[P])?N[P]:p[P],re)}function f(N){return N<0?0:Math.floor(N)}function g(N,P){return Math.floor(Math.random()*(P-N))+N}function v(N){return parseInt(N,16)}function M(N){return N.map(C)}function C(N){var P=String(N).replace(/[^0-9a-f]/gi,"");return P.length<6&&(P=P[0]+P[0]+P[1]+P[1]+P[2]+P[2]),{r:v(P.substring(0,2)),g:v(P.substring(2,4)),b:v(P.substring(4,6))}}function b(N){var P=m(N,"origin",Object);return P.x=m(P,"x",Number),P.y=m(P,"y",Number),P}function A(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function L(N){var P=N.getBoundingClientRect();N.width=P.width,N.height=P.height}function V(N){var P=document.createElement("canvas");return P.style.position="fixed",P.style.top="0px",P.style.left="0px",P.style.pointerEvents="none",P.style.zIndex=N,P}function _(N,P,re,fe,O,$,te,X,le){N.save(),N.translate(P,re),N.rotate($),N.scale(fe,O),N.arc(0,0,1,te,X,le),N.restore()}function w(N){var P=N.angle*(Math.PI/180),re=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-P+(.5*re-Math.random()*re),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function W(N,P){P.x+=Math.cos(P.angle2D)*P.velocity+P.drift,P.y+=Math.sin(P.angle2D)*P.velocity+P.gravity,P.velocity*=P.decay,P.flat?(P.wobble=0,P.wobbleX=P.x+10*P.scalar,P.wobbleY=P.y+10*P.scalar,P.tiltSin=0,P.tiltCos=0,P.random=1):(P.wobble+=P.wobbleSpeed,P.wobbleX=P.x+10*P.scalar*Math.cos(P.wobble),P.wobbleY=P.y+10*P.scalar*Math.sin(P.wobble),P.tiltAngle+=.1,P.tiltSin=Math.sin(P.tiltAngle),P.tiltCos=Math.cos(P.tiltAngle),P.random=Math.random()+2);var re=P.tick++/P.totalTicks,fe=P.x+P.random*P.tiltCos,O=P.y+P.random*P.tiltSin,$=P.wobbleX+P.random*P.tiltCos,te=P.wobbleY+P.random*P.tiltSin;if(N.fillStyle="rgba("+P.color.r+", "+P.color.g+", "+P.color.b+", "+(1-re)+")",N.beginPath(),o&&P.shape.type==="path"&&typeof P.shape.path=="string"&&Array.isArray(P.shape.matrix))N.fill(K(P.shape.path,P.shape.matrix,P.x,P.y,Math.abs($-fe)*.1,Math.abs(te-O)*.1,Math.PI/10*P.wobble));else if(P.shape.type==="bitmap"){var X=Math.PI/10*P.wobble,le=Math.abs($-fe)*.1,ae=Math.abs(te-O)*.1,Me=P.shape.bitmap.width*P.scalar,Re=P.shape.bitmap.height*P.scalar,Ae=new DOMMatrix([Math.cos(X)*le,Math.sin(X)*le,-Math.sin(X)*ae,Math.cos(X)*ae,P.x,P.y]);Ae.multiplySelf(new DOMMatrix(P.shape.matrix));var D=N.createPattern(u.transform(P.shape.bitmap),"no-repeat");D.setTransform(Ae),N.globalAlpha=1-re,N.fillStyle=D,N.fillRect(P.x-Me/2,P.y-Re/2,Me,Re),N.globalAlpha=1}else if(P.shape==="circle")N.ellipse?N.ellipse(P.x,P.y,Math.abs($-fe)*P.ovalScalar,Math.abs(te-O)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI):_(N,P.x,P.y,Math.abs($-fe)*P.ovalScalar,Math.abs(te-O)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI);else if(P.shape==="star")for(var Ie=Math.PI/2*3,Pe=4*P.scalar,Fe=8*P.scalar,Te=P.x,je=P.y,De=5,R=Math.PI/De;De--;)Te=P.x+Math.cos(Ie)*Fe,je=P.y+Math.sin(Ie)*Fe,N.lineTo(Te,je),Ie+=R,Te=P.x+Math.cos(Ie)*Pe,je=P.y+Math.sin(Ie)*Pe,N.lineTo(Te,je),Ie+=R;else N.moveTo(Math.floor(P.x),Math.floor(P.y)),N.lineTo(Math.floor(P.wobbleX),Math.floor(O)),N.lineTo(Math.floor($),Math.floor(te)),N.lineTo(Math.floor(fe),Math.floor(P.wobbleY));return N.closePath(),N.fill(),P.tick<P.totalTicks}function j(N,P,re,fe,O){var $=P.slice(),te=N.getContext("2d"),X,le,ae=c(function(Me){function Re(){X=le=null,te.clearRect(0,0,fe.width,fe.height),u.clear(),O(),Me()}function Ae(){i&&!(fe.width===r.width&&fe.height===r.height)&&(fe.width=N.width=r.width,fe.height=N.height=r.height),!fe.width&&!fe.height&&(re(N),fe.width=N.width,fe.height=N.height),te.clearRect(0,0,fe.width,fe.height),$=$.filter(function(D){return W(te,D)}),$.length?X=d.frame(Ae):Re()}X=d.frame(Ae),le=Re});return{addFettis:function(Me){return $=$.concat(Me),ae},canvas:N,promise:ae,reset:function(){X&&d.cancel(X),le&&le()}}}function Z(N,P){var re=!N,fe=!!m(P||{},"resize"),O=!1,$=m(P,"disableForReducedMotion",Boolean),te=s&&!!m(P||{},"useWorker"),X=te?h():null,le=re?A:L,ae=N&&X?!!N.__confetti_initialized:!1,Me=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Re;function Ae(Ie,Pe,Fe){for(var Te=m(Ie,"particleCount",f),je=m(Ie,"angle",Number),De=m(Ie,"spread",Number),R=m(Ie,"startVelocity",Number),E=m(Ie,"decay",Number),z=m(Ie,"gravity",Number),ee=m(Ie,"drift",Number),oe=m(Ie,"colors",M),J=m(Ie,"ticks",Number),be=m(Ie,"shapes"),pe=m(Ie,"scalar"),_e=!!m(Ie,"flat"),Ye=b(Ie),ue=Te,ve=[],Oe=N.width*Ye.x,ke=N.height*Ye.y;ue--;)ve.push(w({x:Oe,y:ke,angle:je,spread:De,startVelocity:R,color:oe[ue%oe.length],shape:be[g(0,be.length)],ticks:J,decay:E,gravity:z,drift:ee,scalar:pe,flat:_e}));return Re?Re.addFettis(ve):(Re=j(N,ve,le,Pe,Fe),Re.promise)}function D(Ie){var Pe=$||m(Ie,"disableForReducedMotion",Boolean),Fe=m(Ie,"zIndex",Number);if(Pe&&Me)return c(function(R){R()});re&&Re?N=Re.canvas:re&&!N&&(N=V(Fe),document.body.appendChild(N)),fe&&!ae&&le(N);var Te={width:N.width,height:N.height};X&&!ae&&X.init(N),ae=!0,X&&(N.__confetti_initialized=!0);function je(){if(X){var R={getBoundingClientRect:function(){if(!re)return N.getBoundingClientRect()}};le(R),X.postMessage({resize:{width:R.width,height:R.height}});return}Te.width=Te.height=null}function De(){Re=null,fe&&(O=!1,e.removeEventListener("resize",je)),re&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,ae=!1)}return fe&&!O&&(O=!0,e.addEventListener("resize",je,!1)),X?X.fire(Ie,Te,De):Ae(Ie,Te,De)}return D.reset=function(){X&&X.reset(),Re&&Re.reset()},D}var ie;function Y(){return ie||(ie=Z(null,{useWorker:!0,resize:!0})),ie}function K(N,P,re,fe,O,$,te){var X=new Path2D(N),le=new Path2D;le.addPath(X,new DOMMatrix(P));var ae=new Path2D;return ae.addPath(le,new DOMMatrix([Math.cos(te)*O,Math.sin(te)*O,-Math.sin(te)*$,Math.cos(te)*$,re,fe])),ae}function I(N){if(!o)throw new Error("path confetti are not supported in this browser");var P,re;typeof N=="string"?P=N:(P=N.path,re=N.matrix);var fe=new Path2D(P),O=document.createElement("canvas"),$=O.getContext("2d");if(!re){for(var te=1e3,X=te,le=te,ae=0,Me=0,Re,Ae,D=0;D<te;D+=2)for(var Ie=0;Ie<te;Ie+=2)$.isPointInPath(fe,D,Ie,"nonzero")&&(X=Math.min(X,D),le=Math.min(le,Ie),ae=Math.max(ae,D),Me=Math.max(Me,Ie));Re=ae-X,Ae=Me-le;var Pe=10,Fe=Math.min(Pe/Re,Pe/Ae);re=[Fe,0,0,Fe,-Math.round(Re/2+X)*Fe,-Math.round(Ae/2+le)*Fe]}return{type:"path",path:P,matrix:re}}function Q(N){var P,re=1,fe="#000000",O='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?P=N:(P=N.text,re="scalar"in N?N.scalar:re,O="fontFamily"in N?N.fontFamily:O,fe="color"in N?N.color:fe);var $=10*re,te=""+$+"px "+O,X=new OffscreenCanvas($,$),le=X.getContext("2d");le.font=te;var ae=le.measureText(P),Me=Math.ceil(ae.actualBoundingBoxRight+ae.actualBoundingBoxLeft),Re=Math.ceil(ae.actualBoundingBoxAscent+ae.actualBoundingBoxDescent),Ae=2,D=ae.actualBoundingBoxLeft+Ae,Ie=ae.actualBoundingBoxAscent+Ae;Me+=Ae+Ae,Re+=Ae+Ae,X=new OffscreenCanvas(Me,Re),le=X.getContext("2d"),le.font=te,le.fillStyle=fe,le.fillText(P,D,Ie);var Pe=1/re;return{type:"bitmap",bitmap:X.transferToImageBitmap(),matrix:[Pe,0,0,Pe,-Me*Pe/2,-Re*Pe/2]}}n.exports=function(){return Y().apply(this,arguments)},n.exports.reset=function(){Y().reset()},n.exports.create=Z,n.exports.shapeFromPath=I,n.exports.shapeFromText=Q})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Im,!1);const UD=Im.exports;Im.exports.create;const FD=({score:t,level:e})=>{const n=JC(0,{stiffness:45,damping:15}),[i,r]=ne.useState(0);ne.useEffect(()=>{n.set(t);const u=n.on("change",d=>{r(Math.round(d))});return()=>u()},[t,n]);const s=e==="Medium"||t>=35&&t<61,o=e==="High"||t>=61,a=o?"#ff2a55":s?"#f59e0b":"#00ff88",l=o?"0 0 25px rgba(255,42,85,0.4)":s?"0 0 25px rgba(245,158,11,0.4)":"0 0 25px rgba(0,255,136,0.4)",c=-90+i/100*180;return S.jsxs("div",{className:"flex flex-col items-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md",children:[S.jsxs("div",{className:"w-full flex items-center justify-between text-xs font-mono text-slate-400 mb-2",children:[S.jsx("span",{children:"SECURITY RISK INDEX"}),S.jsxs("span",{className:"font-bold px-2 py-0.5 rounded text-[11px] tracking-wider uppercase border",style:{color:a,borderColor:`${a}40`,backgroundColor:`${a}15`,boxShadow:l},children:[e," RISK"]})]}),S.jsxs("div",{className:"relative w-64 h-36 flex items-end justify-center overflow-hidden my-2",children:[S.jsxs("svg",{viewBox:"0 0 200 110",className:"w-64 h-36",children:[S.jsxs("defs",{children:[S.jsxs("linearGradient",{id:"gaugeGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[S.jsx("stop",{offset:"0%",stopColor:"#00ff88"}),S.jsx("stop",{offset:"45%",stopColor:"#f59e0b"}),S.jsx("stop",{offset:"100%",stopColor:"#ff2a55"})]}),S.jsxs("filter",{id:"gaugeGlow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[S.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),S.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),S.jsx("path",{d:"M 20 100 A 80 80 0 0 1 180 100",fill:"none",stroke:"rgba(30, 41, 59, 0.8)",strokeWidth:"14",strokeLinecap:"round"}),S.jsx("path",{d:"M 20 100 A 80 80 0 0 1 180 100",fill:"none",stroke:"url(#gaugeGradient)",strokeWidth:"14",strokeLinecap:"round",strokeDasharray:"251.2",strokeDashoffset:251.2-251.2*i/100,style:{transition:"stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1)"},filter:"url(#gaugeGlow)"}),S.jsx("text",{x:"22",y:"108",fill:"#64748b",fontSize:"8",fontFamily:"monospace",children:"0"}),S.jsx("text",{x:"96",y:"24",fill:"#64748b",fontSize:"8",fontFamily:"monospace",children:"50"}),S.jsx("text",{x:"170",y:"108",fill:"#64748b",fontSize:"8",fontFamily:"monospace",children:"100"})]}),S.jsxs("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center",children:[S.jsx(st.div,{className:"w-1.5 h-16 origin-bottom rounded-full",style:{backgroundColor:a,boxShadow:l,transform:`rotate(${c}deg)`},transition:{type:"spring",stiffness:60,damping:15}}),S.jsx("div",{className:"w-5 h-5 rounded-full border-2 border-slate-900 -mt-2.5 z-10",style:{backgroundColor:a}})]})]}),S.jsxs("div",{className:"text-center mt-2",children:[S.jsxs("div",{className:"flex items-baseline justify-center gap-1",children:[S.jsx("span",{className:"text-4xl font-extrabold font-mono tracking-tight text-white",children:i}),S.jsx("span",{className:"text-slate-400 font-mono text-sm",children:"/ 100"})]}),S.jsx("p",{className:"text-xs font-mono text-slate-400 mt-1",children:o?"High probability of malicious intent or credential harvesting":s?"Suspicious structure detected; exercise caution":"Statistical profile aligns with verified legitimate domains"})]}),S.jsxs("div",{className:"w-full mt-4 pt-4 border-t border-slate-800/80",children:[S.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-slate-400 mb-1.5",children:[S.jsx("span",{children:"0 (SAFE)"}),S.jsx("span",{children:"35"}),S.jsx("span",{children:"61"}),S.jsx("span",{children:"100 (THREAT)"})]}),S.jsx("div",{className:"w-full h-2 rounded-full bg-slate-800 overflow-hidden relative",children:S.jsx(st.div,{initial:{width:0},animate:{width:`${i}%`},transition:{duration:.8,ease:"easeOut"},className:"h-full rounded-full",style:{background:"linear-gradient(90deg, #00ff88, #f59e0b, #ff2a55)",boxShadow:l}})})]})]})};function OD(t){const e=t.toLowerCase();return e.includes("http instead")||e.includes("unencrypted")?Su:e.includes("ip address")?Hh:e.includes("keyword")||e.includes("credential")?ED:e.includes("subdomain")||e.includes("directory")?wD:e.includes("entropy")||e.includes("randomness")?Nm:e.includes("punycode")||e.includes("obfuscation")?SD:PD}const kD=({reasons:t,prediction:e})=>{const[n,i]=ne.useState(!0),r=e==="Phishing";return S.jsxs("div",{className:"w-full rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md overflow-hidden",children:[S.jsxs("button",{onClick:()=>i(!n),className:"w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors text-left","aria-expanded":n,children:[S.jsxs("div",{className:"flex items-center gap-2.5",children:[r?S.jsx(za,{className:"w-4 h-4 text-rose-400"}):S.jsx(mx,{className:"w-4 h-4 text-emerald-400"}),S.jsx("span",{className:"text-sm font-mono font-semibold tracking-wide text-white",children:r?"Threat Factor Decomposition":"Security Verification Indicators"}),S.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700",children:[t.length," ",t.length===1?"factor":"factors"]})]}),S.jsxs("div",{className:"flex items-center gap-1 text-slate-400 hover:text-slate-200 text-xs font-mono",children:[S.jsx("span",{children:n?"Collapse":"Expand"}),n?S.jsx(vD,{className:"w-4 h-4"}):S.jsx(pD,{className:"w-4 h-4"})]})]}),S.jsx(cu,{initial:!1,children:n&&S.jsx(st.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"px-6 pb-6 pt-2 border-t border-slate-800/60",children:t.length===0?S.jsxs("div",{className:"flex items-center gap-3 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-300 text-xs font-mono",children:[S.jsx(mx,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}),S.jsx("span",{children:"No significant risk indicators detected. URL characteristics conform to verified benign domain models."})]}):S.jsx("div",{className:"space-y-2.5",children:t.map((s,o)=>{const a=OD(s);return S.jsxs(st.div,{initial:{opacity:0,x:-12},animate:{opacity:1,x:0},transition:{duration:.25,delay:o*.08},className:"flex items-start gap-3 p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20 hover:border-rose-500/40 transition-colors",children:[S.jsx("div",{className:"p-1.5 rounded-lg bg-rose-500/10 text-rose-400 flex-shrink-0 mt-0.5",children:S.jsx(a,{className:"w-3.5 h-3.5"})}),S.jsx("div",{className:"flex-1",children:S.jsx("p",{className:"text-xs font-mono text-rose-200/90 leading-relaxed",children:s})}),S.jsx("span",{className:"text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30",children:"DETECTED"})]},o)})})})})]})};function yx(t){if(!t)return 0;const e=t.length,n={};for(let r=0;r<e;r++){const s=t[r];n[s]=(n[s]||0)+1}let i=0;for(const r in n){const s=n[r]/e;i-=s*Math.log2(s)}return parseFloat(i.toFixed(3))}function BD(t){const e=t.trim();let n;try{const p=/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(e);n=new URL(p?e:`http://${e}`)}catch{return{protocol:"unknown",hostname:e.split("/")[0]||"invalid",domain:"invalid",subdomainCount:0,tld:"none",path:"/",queryParamCount:0,urlLength:e.length,hasIpAddress:!1,isHttps:!1,entropy:yx(e),specialCharCount:(e.match(/[^a-zA-Z0-9]/g)||[]).length}}const i=n.hostname.toLowerCase(),r=n.protocol.toLowerCase()==="https:",o=/^(\d{1,3}\.){3}\d{1,3}$/.test(i)||i.startsWith("[")&&i.endsWith("]"),a=i.split("."),l=a.length>1?a[a.length-1]:"",c=a.filter(p=>p!=="www"),u=o?0:Math.max(0,c.length-2),d=o?i:a.length>=2?a.slice(-2).join("."):i,h=Array.from(n.searchParams.keys());return{protocol:n.protocol.replace(":","").toUpperCase(),hostname:i,domain:d,subdomainCount:u,tld:l,path:n.pathname||"/",queryParamCount:h.length,urlLength:e.length,hasIpAddress:o,isHttps:r,entropy:yx(e),specialCharCount:(e.match(/[^a-zA-Z0-9]/g)||[]).length}}function zD(t,e=48){if(!t)return"";if(t.length<=e)return t;const n=t.substring(0,Math.floor(e*.65)),i=t.substring(t.length-Math.floor(e*.25));return`${n}...${i}`}const VD=({url:t})=>{const e=BD(t),n=[{label:"Protocol",value:e.protocol,sub:e.isHttps?"Encrypted (TLS/SSL)":"Insecure Plaintext",icon:e.isHttps?Su:TD,alert:!e.isHttps,safe:e.isHttps},{label:"Apex Domain",value:e.domain,sub:e.tld?`TLD: .${e.tld}`:"No TLD found",icon:Hh,alert:e.hasIpAddress,safe:!e.hasIpAddress},{label:"Subdomain Nesting",value:`${e.subdomainCount}`,sub:e.subdomainCount>=2?"High nesting anomaly":"Normal hierarchy",icon:_D,alert:e.subdomainCount>=2,safe:e.subdomainCount<2},{label:"URL Length",value:`${e.urlLength} chars`,sub:e.urlLength>75?"Abnormally long URL":"Typical length",icon:MD,alert:e.urlLength>75,safe:e.urlLength<=75},{label:"Character Entropy",value:`${e.entropy} bits`,sub:e.entropy>4.2?"Elevated DGA randomness":"Natural language pattern",icon:Ba,alert:e.entropy>4.2,safe:e.entropy<=4.2},{label:"Host Structure",value:e.hasIpAddress?"RAW IP ADDRESS":"DNS HOSTNAME",sub:e.hasIpAddress?"Flagged Host Indicator":"Registered Name",icon:e.hasIpAddress?za:Rm,alert:e.hasIpAddress,safe:!e.hasIpAddress}];return S.jsxs("div",{className:"w-full rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 backdrop-blur-md",children:[S.jsxs("div",{className:"flex items-center justify-between mb-4",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(Hh,{className:"w-4 h-4 text-cyan-400"}),S.jsx("h3",{className:"text-sm font-mono font-semibold text-white tracking-wide",children:"URL INTELLIGENCE & LEXICAL TELEMETRY"})]}),S.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:["Path: ",S.jsx("code",{className:"text-slate-300 bg-slate-800/60 px-1.5 py-0.5 rounded",children:e.path})]})]}),S.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",children:n.map((i,r)=>{const s=i.icon;return S.jsxs(st.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.2,delay:r*.05},className:`p-3 rounded-xl border flex flex-col justify-between ${i.alert?"bg-rose-950/20 border-rose-500/30":"bg-slate-950/40 border-slate-800"}`,children:[S.jsxs("div",{className:"flex items-center justify-between mb-2",children:[S.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase tracking-wider",children:i.label}),S.jsx(s,{className:`w-3.5 h-3.5 ${i.alert?"text-rose-400":"text-cyan-400"}`})]}),S.jsxs("div",{children:[S.jsx("div",{className:`text-xs font-mono font-bold truncate ${i.alert?"text-rose-300":"text-slate-100"}`,title:i.value,children:i.value}),S.jsx("div",{className:"text-[10px] text-slate-500 truncate mt-0.5",children:i.sub})]})]},i.label)})})]})},HD=({result:t,onReset:e})=>{const[n,i]=Nx.useState(!1),r=t.prediction==="Phishing";ne.useEffect(()=>{if(!r)try{UD({particleCount:35,spread:60,origin:{y:.6},colors:["#00ff88","#00f0ff","#3b82f6"]})}catch{}},[r]);const s=()=>{const a=`PhishGuard AI Scan Result:
Target: ${t.url}
Verdict: ${t.prediction.toUpperCase()}
Predicted Probability: ${(t.probability*100).toFixed(2)}%
Risk Level: ${t.risk_level} (${t.risk_score}/100)
Reasons: ${t.reasons.length>0?t.reasons.join(", "):"None"}
Model: ${t.model_version||"phishing-v1.0"}`;navigator.clipboard.writeText(a),i(!0),setTimeout(()=>i(!1),2e3)},o=(t.probability*100).toFixed(2);return S.jsxs(st.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95},transition:{duration:.5,ease:[.16,1,.3,1]},className:`w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border backdrop-blur-2xl transition-all duration-500 ${r?"bg-gradient-to-b from-rose-950/40 via-[#080B12]/90 to-[#05070D] border-rose-500/40 shadow-[0_0_60px_rgba(255,42,85,0.25)]":"bg-gradient-to-b from-emerald-950/30 via-[#080B12]/90 to-[#05070D] border-emerald-500/30 shadow-[0_0_60px_rgba(0,255,136,0.2)]"}`,children:[S.jsx("div",{className:`h-1.5 w-full ${r?"bg-gradient-to-r from-rose-600 via-red-500 to-amber-500 animate-pulse":"bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500"}`}),S.jsxs("div",{className:"p-6 sm:p-8 space-y-6",children:[S.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80",children:[S.jsxs("div",{className:"flex items-center gap-4",children:[S.jsx(st.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:200,delay:.1},className:`w-16 h-16 rounded-2xl flex items-center justify-center border shadow-xl ${r?"bg-rose-500/20 border-rose-500/50 text-rose-400 shadow-[0_0_30px_rgba(255,42,85,0.3)]":"bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_30px_rgba(0,255,136,0.3)]"}`,children:r?S.jsx(za,{className:"w-9 h-9 animate-pulse"}):S.jsx(Mu,{className:"w-9 h-9"})}),S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-slate-400",children:"ASSESSMENT VERDICT"}),S.jsxs("span",{className:`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${r?"bg-rose-500/20 border-rose-500 text-rose-300":"bg-emerald-500/20 border-emerald-500 text-emerald-300"}`,children:[t.risk_level," RISK"]})]}),S.jsx("h2",{className:`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight mt-0.5 ${r?"text-rose-400 drop-shadow-[0_0_15px_rgba(255,42,85,0.4)]":"text-emerald-400 drop-shadow-[0_0_15px_rgba(0,255,136,0.4)]"}`,children:r?"PHISHING DETECTED":"LEGITIMATE URL"}),S.jsxs("p",{className:"text-xs font-mono text-slate-400 break-all max-w-xl mt-1",children:[S.jsx("span",{className:"text-slate-500",children:"TARGET:"})," ",t.url]})]})]}),S.jsxs("div",{className:"flex items-center gap-2 self-stretch md:self-auto justify-end",children:[S.jsxs("button",{onClick:s,className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 text-xs font-mono transition-colors",title:"Copy Scan Summary",children:[n?S.jsx(GM,{className:"w-3.5 h-3.5 text-emerald-400"}):S.jsx(WM,{className:"w-3.5 h-3.5"}),S.jsx("span",{children:n?"Copied":"Share"})]}),S.jsxs("button",{onClick:e,className:"flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)]",children:[S.jsx(CD,{className:"w-3.5 h-3.5"}),S.jsx("span",{children:"Scan Another"})]})]})]}),S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[S.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/40 border border-slate-800",children:[S.jsx("div",{className:"text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1",children:"PREDICTED PROBABILITY"}),S.jsx("div",{className:"flex items-baseline gap-2",children:S.jsxs("span",{className:"text-3xl font-extrabold font-mono text-white",children:[o,"%"]})}),S.jsx("p",{className:"text-[11px] text-slate-500 font-mono mt-1",children:"Neural model classification confidence"})]}),S.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/40 border border-slate-800",children:[S.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1",children:[S.jsx(yD,{className:"w-3.5 h-3.5 text-cyan-400"}),S.jsx("span",{children:"INFERENCE LATENCY"})]}),S.jsx("div",{className:"text-3xl font-extrabold font-mono text-cyan-300",children:t.processing_time_ms?`${t.processing_time_ms} ms`:"&lt; 1 ms"}),S.jsx("p",{className:"text-[11px] text-slate-500 font-mono mt-1",children:"Feature extraction & model scoring"})]}),S.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/40 border border-slate-800",children:[S.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1",children:[S.jsx(Ba,{className:"w-3.5 h-3.5 text-violet-400"}),S.jsx("span",{children:"MODEL ENGINE"})]}),S.jsx("div",{className:"text-3xl font-extrabold font-mono text-violet-300",children:"XGBoost"}),S.jsxs("p",{className:"text-[11px] text-slate-500 font-mono mt-1",children:[t.model_version||"phishing-v1.0"," • 33 Features"]})]})]}),S.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[S.jsx("div",{className:"lg:col-span-5 flex",children:S.jsx("div",{className:"w-full",children:S.jsx(FD,{score:t.risk_score,level:t.risk_level})})}),S.jsx("div",{className:"lg:col-span-7 flex",children:S.jsx(kD,{reasons:t.reasons,prediction:t.prediction})})]}),S.jsx(VD,{url:t.url})]})]})},GD=[{label:"Benign Target",url:"https://www.google.com",safe:!0},{label:"Phishing Target",url:"http://secure-login-example.xyz/verify",safe:!1},{label:"Credential Spoof",url:"http://192.168.1.1/update-account-bank-security-login/verify.php",safe:!1},{label:"Shortened Link",url:"https://bit.ly/secure-link",safe:!1}],_x=({onScanCompleted:t,onThreatDetected:e})=>{const[n,i]=ne.useState(""),[r,s]=ne.useState(!1),[o,a]=ne.useState(null),[l,c]=ne.useState(null),[u,d]=ne.useState(null),[h,p]=ne.useState(!1),x=async f=>{const g=(f||n).trim();if(!g){a("Please enter a valid URL to analyze.");return}a(null),s(!0),c(null),d(null),p(!1);try{const v=await Dm.predictUrl(g);d(v),p(!0)}catch(v){s(!1),a(v.message||"An error occurred during threat analysis."),e&&e(!1)}},y=()=>{if(u)c(u),s(!1),t&&t(u),e&&e(u.prediction==="Phishing");else{const f=setInterval(()=>{d(g=>(g&&(clearInterval(f),c(g),s(!1),t&&t(g),e&&e(g.prediction==="Phishing")),g))},100);setTimeout(()=>clearInterval(f),5e3)}},m=()=>{c(null),s(!1),d(null),i(""),a(null),e&&e(!1)};return S.jsx("div",{className:"w-full max-w-4xl mx-auto px-4 py-4",children:S.jsx(cu,{mode:"wait",children:l?S.jsx(HD,{result:l,onReset:m},"result"):r?S.jsx(st.div,{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.3},children:S.jsx(ID,{url:n,apiFinished:h,onAnimationComplete:y})},"scanning"):S.jsxs(st.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,y:-15},transition:{duration:.4},className:"relative rounded-3xl bg-[#080B12]/80 border border-cyan-500/25 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(0,240,255,0.2)]",children:[S.jsx("div",{className:"absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"}),S.jsxs("form",{onSubmit:f=>{f.preventDefault(),x()},className:"space-y-4",children:[S.jsxs("div",{className:"relative flex flex-col sm:flex-row items-stretch gap-2.5 p-1.5 rounded-2xl bg-slate-950/70 border border-slate-800 focus-within:border-cyan-400/80 focus-within:shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300",children:[S.jsxs("div",{className:"flex items-center pl-4 pr-2 flex-1",children:[S.jsx(Pm,{className:"w-5 h-5 text-cyan-400/70 mr-3 flex-shrink-0"}),S.jsx("input",{type:"text",value:n,onChange:f=>{i(f.target.value),o&&a(null)},placeholder:"https://enter-url-to-scan.com/verify","aria-label":"URL to inspect for phishing",className:"w-full bg-transparent text-white font-mono text-sm placeholder:text-slate-500 focus:outline-none py-3"}),n&&S.jsx("button",{type:"button",onClick:()=>i(""),className:"text-slate-500 hover:text-slate-300 p-1","aria-label":"Clear URL",children:S.jsx(Lm,{className:"w-4 h-4"})})]}),S.jsxs(st.button,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},className:"flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all cursor-pointer flex-shrink-0",children:[S.jsx($M,{className:"w-4 h-4"}),S.jsx("span",{children:"SCAN URL"}),S.jsx(fD,{className:"w-4 h-4"})]})]}),o&&S.jsxs(st.div,{initial:{opacity:0,y:-5},animate:{opacity:1,y:0},className:"flex items-center justify-between p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/30 text-rose-300 text-xs font-mono",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(xD,{className:"w-4 h-4 text-rose-400 flex-shrink-0"}),S.jsx("span",{children:o})]}),S.jsx("button",{type:"button",onClick:()=>x(),className:"underline hover:text-rose-100 uppercase tracking-wider text-[11px]",children:"TRY AGAIN"})]}),S.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400",children:[S.jsx("span",{className:"text-[11px] text-slate-500 uppercase tracking-wider",children:"QUICK TELEMETRY SAMPLES:"}),S.jsx("div",{className:"flex flex-wrap items-center gap-2",children:GD.map(f=>S.jsx("button",{type:"button",onClick:()=>{i(f.url),x(f.url)},className:"px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors text-[11px]",children:f.label},f.label))})]})]})]},"input")})})},jD=({historyItems:t,totalScansCount:e})=>{const n=e||t.length,i=t.filter(l=>l.prediction==="Phishing").length,r=t.filter(l=>l.prediction==="Legitimate").length,s=t.map(l=>l.processing_time_ms).filter(l=>typeof l=="number"&&l>0),o=s.length>0?(s.reduce((l,c)=>l+c,0)/s.length).toFixed(1):"0.8",a=[{label:"TOTAL URLS SCANNED",value:n.toLocaleString(),sub:"Logged in database",icon:Rm,accent:"text-cyan-400",border:"border-cyan-500/30",bg:"from-cyan-950/20 to-slate-900/40",glow:"shadow-[0_0_20px_rgba(0,240,255,0.1)]"},{label:"THREATS INTERCEPTED",value:i.toLocaleString(),sub:n>0?`${(i/n*100).toFixed(1)}% detection rate`:"0% flagged",icon:za,accent:"text-rose-400",border:"border-rose-500/30",bg:"from-rose-950/20 to-slate-900/40",glow:"shadow-[0_0_20px_rgba(255,42,85,0.1)]"},{label:"LEGITIMATE URLS",value:r.toLocaleString(),sub:n>0?`${(r/n*100).toFixed(1)}% verified benign`:"0% benign",icon:Mu,accent:"text-emerald-400",border:"border-emerald-500/30",bg:"from-emerald-950/20 to-slate-900/40",glow:"shadow-[0_0_20px_rgba(0,255,136,0.1)]"},{label:"AVG INFERENCE SPEED",value:`${o} ms`,sub:"Sub-millisecond ML runtime",icon:Nm,accent:"text-violet-400",border:"border-violet-500/30",bg:"from-violet-950/20 to-slate-900/40",glow:"shadow-[0_0_20px_rgba(139,92,246,0.1)]"}];return S.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full",children:a.map((l,c)=>{const u=l.icon;return S.jsxs(st.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.3,delay:c*.08},whileHover:{y:-4,scale:1.01},className:`p-5 rounded-2xl border bg-gradient-to-br ${l.bg} ${l.border} ${l.glow} backdrop-blur-md transition-all duration-300 relative overflow-hidden group`,children:[S.jsx("div",{className:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"}),S.jsxs("div",{className:"flex items-center justify-between mb-3",children:[S.jsx("span",{className:"text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase",children:l.label}),S.jsx("div",{className:`p-2 rounded-xl bg-slate-900/80 border border-slate-800 ${l.accent}`,children:S.jsx(u,{className:"w-4 h-4"})})]}),S.jsx("div",{className:"text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight",children:l.value}),S.jsx("div",{className:"text-xs font-mono text-slate-400 mt-1",children:l.sub})]},l.label)})})},Sx=({items:t,total:e,currentPage:n,pageSize:i,onPageChange:r,isLoading:s=!1})=>{const[o,a]=ne.useState(""),[l,c]=ne.useState("All"),[u,d]=ne.useState(null),h=(y,m)=>{navigator.clipboard.writeText(m),d(y),setTimeout(()=>d(null),1800)},p=t.filter(y=>{const m=y.url.toLowerCase().includes(o.toLowerCase()),f=l==="All"?!0:y.prediction===l;return m&&f}),x=Math.max(1,Math.ceil(e/i));return S.jsxs("div",{className:"w-full rounded-2xl bg-[#080B12]/80 border border-slate-800/80 p-6 backdrop-blur-xl shadow-xl",children:[S.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[S.jsxs("div",{className:"flex items-center gap-2.5",children:[S.jsx(XM,{className:"w-5 h-5 text-cyan-400"}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-base font-mono font-bold text-white tracking-wide",children:"HISTORICAL TELEMETRY LOGS"}),S.jsxs("p",{className:"text-xs font-mono text-slate-400",children:[e," verified classification events stored in database"]})]})]}),S.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[S.jsxs("div",{className:"relative flex items-center bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 focus-within:border-cyan-400 text-xs font-mono",children:[S.jsx(Pm,{className:"w-3.5 h-3.5 text-slate-400 mr-2"}),S.jsx("input",{type:"text",value:o,onChange:y=>a(y.target.value),placeholder:"Filter by URL domain...",className:"bg-transparent text-white placeholder:text-slate-500 focus:outline-none w-40 sm:w-52"})]}),S.jsx("div",{className:"flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs font-mono",children:["All","Phishing","Legitimate"].map(y=>S.jsx("button",{onClick:()=>c(y),className:`px-2.5 py-1 rounded-lg transition-colors text-[11px] font-semibold ${l===y?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40":"text-slate-400 hover:text-slate-200"}`,children:y},y))})]})]}),S.jsx("div",{className:"overflow-x-auto",children:S.jsxs("table",{className:"w-full text-left border-collapse text-xs font-mono",children:[S.jsx("thead",{children:S.jsxs("tr",{className:"border-b border-slate-800 text-slate-400 text-[11px] uppercase tracking-wider",children:[S.jsx("th",{className:"pb-3 pl-3 font-semibold",children:"TARGET URL"}),S.jsx("th",{className:"pb-3 px-3 font-semibold",children:"VERDICT"}),S.jsx("th",{className:"pb-3 px-3 font-semibold",children:"PREDICTED PROBABILITY"}),S.jsx("th",{className:"pb-3 px-3 font-semibold",children:"RISK LEVEL"}),S.jsx("th",{className:"pb-3 px-3 font-semibold",children:"LATENCY"}),S.jsx("th",{className:"pb-3 pr-3 font-semibold",children:"TIMESTAMP"})]})}),S.jsx("tbody",{className:"divide-y divide-slate-800/50",children:p.length===0?S.jsx("tr",{children:S.jsx("td",{colSpan:6,className:"py-12 text-center text-slate-500 font-mono",children:s?"Fetching audit trail from database...":"No telemetry records match the current filter criteria."})}):p.map((y,m)=>{const f=y.prediction==="Phishing",g=y.created_at?new Date(y.created_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"Recent";return S.jsxs(st.tr,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,delay:m*.02},className:"hover:bg-slate-800/40 transition-colors group",children:[S.jsx("td",{className:"py-3.5 pl-3 max-w-xs sm:max-w-md",children:S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("button",{onClick:()=>h(y.id,y.url),className:"text-slate-500 hover:text-cyan-300 opacity-60 group-hover:opacity-100 transition-opacity p-1",title:"Copy Full URL",children:u===y.id?S.jsx(GM,{className:"w-3.5 h-3.5 text-emerald-400"}):S.jsx(WM,{className:"w-3.5 h-3.5"})}),S.jsx("span",{className:"text-slate-200 truncate font-mono text-xs hover:text-white",title:y.url,children:zD(y.url,44)})]})}),S.jsx("td",{className:"py-3.5 px-3",children:S.jsxs("span",{className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase border ${f?"bg-rose-500/15 border-rose-500/40 text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.15)]":"bg-emerald-500/15 border-emerald-500/40 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.15)]"}`,children:[f?S.jsx(za,{className:"w-3 h-3 text-rose-400"}):S.jsx(Mu,{className:"w-3 h-3 text-emerald-400"}),S.jsx("span",{children:y.prediction})]})}),S.jsxs("td",{className:"py-3.5 px-3 text-slate-200 font-bold",children:[(y.probability*100).toFixed(2),"%"]}),S.jsx("td",{className:"py-3.5 px-3",children:S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("span",{className:`font-semibold ${f?"text-rose-400":"text-emerald-400"}`,children:y.risk_level}),S.jsxs("span",{className:"text-[11px] text-slate-500",children:["(",y.risk_score,"/100)"]})]})}),S.jsx("td",{className:"py-3.5 px-3 text-slate-400",children:y.processing_time_ms?`${y.processing_time_ms} ms`:"&lt; 1 ms"}),S.jsx("td",{className:"py-3.5 pr-3 text-slate-500 text-[11px]",children:g})]},y.id||m)})})]})}),x>1&&S.jsxs("div",{className:"flex items-center justify-between border-t border-slate-800 pt-4 mt-4 text-xs font-mono text-slate-400",children:[S.jsxs("span",{children:["Page ",n," of ",x]}),S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsx("button",{onClick:()=>r(n-1),disabled:n<=1,className:"p-1.5 rounded-lg bg-slate-900 border border-slate-800 disabled:opacity-40 hover:border-cyan-500/40 text-slate-300 transition-colors","aria-label":"Previous Page",children:S.jsx(mD,{className:"w-4 h-4"})}),S.jsx("button",{onClick:()=>r(n+1),disabled:n>=x,className:"p-1.5 rounded-lg bg-slate-900 border border-slate-800 disabled:opacity-40 hover:border-cyan-500/40 text-slate-300 transition-colors","aria-label":"Next Page",children:S.jsx(gD,{className:"w-4 h-4"})})]})]})]})},WD=({isOpen:t,onClose:e})=>t?S.jsx(cu,{children:S.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto",children:[S.jsx(st.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e,className:"fixed inset-0 bg-black/80 backdrop-blur-md"}),S.jsxs(st.div,{initial:{opacity:0,scale:.95,y:15},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:15},className:"relative w-full max-w-3xl rounded-3xl bg-[#080B12] border border-cyan-500/30 p-6 sm:p-8 shadow-[0_0_60px_rgba(0,240,255,0.2)] text-slate-200 z-10 max-h-[90vh] overflow-y-auto",children:[S.jsxs("div",{className:"flex items-center justify-between pb-6 border-b border-slate-800",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400",children:S.jsx(Va,{className:"w-6 h-6"})}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-xl font-mono font-bold text-white tracking-wide",children:"SYSTEM ARCHITECTURE & THREAT MODEL"}),S.jsx("p",{className:"text-xs font-mono text-cyan-400",children:"PhishGuard AI • XGBoost Classifier (phishing-v1.0)"})]})]}),S.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors",children:S.jsx(Lm,{className:"w-5 h-5"})})]}),S.jsxs("div",{className:"py-6 space-y-6 text-xs font-mono leading-relaxed",children:[S.jsx("div",{className:"p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300",children:S.jsx("p",{children:"PhishGuard AI intercepts phishing campaigns at the URL ingress point. Unlike legacy signature blacklists that fail against dynamic short-lived domains, our system leverages a gradient-boosted tree ensemble trained on the 235,795-record PhiUSIIL dataset, generating deterministic risk scores in under 1 millisecond."})}),S.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[S.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/40 border border-slate-800",children:[S.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold mb-2",children:[S.jsx(Su,{className:"w-4 h-4"}),S.jsx("span",{children:"Zero-Crawl Safety (No SSRF)"})]}),S.jsx("p",{className:"text-slate-400 text-[11px]",children:"The server strictly evaluates lexical and syntactic properties directly from the URL. It never visits or renders the target webpage, eliminating SSRF vulnerabilities and malware execution vectors."})]}),S.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/40 border border-slate-800",children:[S.jsxs("div",{className:"flex items-center gap-2 text-violet-400 font-bold mb-2",children:[S.jsx(Ba,{className:"w-4 h-4"}),S.jsx("span",{children:"33 Neural Features"})]}),S.jsx("p",{className:"text-slate-400 text-[11px]",children:"Extracts character entropy, continuation rate, subdomain depth, delimiter frequencies, credential injection keywords, IP hostnames, and punycode spoofing indicators in real time."})]}),S.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/40 border border-slate-800",children:[S.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold mb-2",children:[S.jsx(jM,{className:"w-4 h-4"}),S.jsx("span",{children:"Validated Thresholds"})]}),S.jsx("p",{className:"text-slate-400 text-[11px]",children:"Thresholds calibrated on validation precision-recall curve: Low Risk (<0.15), Decision Boundary (0.39), High Risk (≥0.61). Untouched test evaluation achieved 99.81% accuracy with only 7 false positives across 20,228 benign sites."})]}),S.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/40 border border-slate-800",children:[S.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-bold mb-2",children:[S.jsx(Rm,{className:"w-4 h-4"}),S.jsx("span",{children:"FastAPI & Audit Trail"})]}),S.jsx("p",{className:"text-slate-400 text-[11px]",children:"High-throughput asynchronous REST API backed by SQLite/PostgreSQL with Pydantic validation, structured latency tracking, and request auditing."})]})]}),S.jsxs("div",{className:"border border-slate-800 rounded-xl overflow-hidden",children:[S.jsx("div",{className:"bg-slate-900 px-4 py-2 text-[11px] font-bold text-white border-b border-slate-800",children:"EMPIRICAL BENCHMARK (VALIDATION PARTITION)"}),S.jsx("div",{className:"p-4 overflow-x-auto",children:S.jsxs("table",{className:"w-full text-left text-[11px]",children:[S.jsx("thead",{children:S.jsxs("tr",{className:"text-slate-400 border-b border-slate-800",children:[S.jsx("th",{className:"pb-2",children:"Model"}),S.jsx("th",{className:"pb-2",children:"Accuracy"}),S.jsx("th",{className:"pb-2",children:"Phishing Recall"}),S.jsx("th",{className:"pb-2",children:"Phishing Precision"}),S.jsx("th",{className:"pb-2",children:"ROC-AUC"})]})}),S.jsxs("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:[S.jsxs("tr",{children:[S.jsx("td",{className:"py-2 text-white font-bold",children:"XGBoost (Active)"}),S.jsx("td",{className:"py-2 text-emerald-400 font-semibold",children:"99.77%"}),S.jsx("td",{className:"py-2",children:"99.48%"}),S.jsx("td",{className:"py-2",children:"99.98%"}),S.jsx("td",{className:"py-2",children:"0.9982"})]}),S.jsxs("tr",{children:[S.jsx("td",{className:"py-2",children:"Random Forest"}),S.jsx("td",{className:"py-2",children:"99.75%"}),S.jsx("td",{className:"py-2",children:"99.45%"}),S.jsx("td",{className:"py-2",children:"99.97%"}),S.jsx("td",{className:"py-2",children:"0.9983"})]}),S.jsxs("tr",{children:[S.jsx("td",{className:"py-2",children:"Logistic Regression"}),S.jsx("td",{className:"py-2",children:"99.73%"}),S.jsx("td",{className:"py-2",children:"99.37%"}),S.jsx("td",{className:"py-2",children:"99.99%"}),S.jsx("td",{className:"py-2",children:"0.9985"})]})]})]})})]})]}),S.jsxs("div",{className:"pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500",children:[S.jsx("span",{children:"Powered by PhiUSIIL Benchmark • FastAPI Backend"}),S.jsx("button",{onClick:e,className:"px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors",children:"Close"})]})]})]})}):null,XD=()=>{const[t,e]=ne.useState("scanner"),[n,i]=ne.useState(!1),[r,s]=ne.useState(!1),[o,a]=ne.useState([]),[l,c]=ne.useState(0),[u,d]=ne.useState(1),[h,p]=ne.useState(!1),x=async(m=1)=>{p(!0);try{const f=await Dm.getHistory(m,15);a(f.items),c(f.total),d(f.page)}catch(f){console.warn("Failed to load history:",f)}finally{p(!1)}};ne.useEffect(()=>{x(1)},[]);const y=m=>{i(m.prediction==="Phishing"),x(u)};return S.jsxs("div",{className:"relative min-h-screen bg-[#05070D] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200",children:[S.jsx(lD,{threatMode:n}),S.jsx(ND,{activeTab:t,setActiveTab:m=>e(m),onOpenAbout:()=>s(!0)}),S.jsx("main",{className:"relative z-10 flex-1 flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16",children:S.jsxs(cu,{mode:"wait",children:[t==="scanner"&&S.jsxs(st.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.3},className:"w-full flex flex-col items-center",children:[S.jsx(DD,{}),S.jsx(_x,{onScanCompleted:y,onThreatDetected:i}),o.length>0&&S.jsxs("div",{className:"w-full max-w-4xl mt-10 pt-8 border-t border-slate-800/80",children:[S.jsxs("div",{className:"flex items-center justify-between mb-4",children:[S.jsxs("span",{className:"text-xs font-mono font-bold text-slate-400 tracking-wider flex items-center gap-2",children:[S.jsx(Cm,{className:"w-3.5 h-3.5 text-cyan-400"}),"RECENT INTERCEPTIONS"]}),S.jsxs("button",{onClick:()=>e("history"),className:"text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1",children:[S.jsx("span",{children:"View All History"}),S.jsx(hD,{className:"w-3.5 h-3.5"})]})]}),S.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:o.slice(0,3).map(m=>{const f=m.prediction==="Phishing";return S.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors",children:[S.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[S.jsx("span",{className:`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold border ${f?"bg-rose-500/15 border-rose-500/40 text-rose-300":"bg-emerald-500/15 border-emerald-500/40 text-emerald-300"}`,children:m.prediction}),S.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:[(m.probability*100).toFixed(1),"%"]})]}),S.jsx("div",{className:"text-xs font-mono text-slate-300 truncate",title:m.url,children:m.url})]},m.id)})})]})]},"scanner-view"),t==="dashboard"&&S.jsxs(st.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.3},className:"w-full pt-28 space-y-8",children:[S.jsxs("div",{children:[S.jsx("h2",{className:"text-3xl font-extrabold font-mono text-white tracking-tight",children:"CYBERSECURITY COMMAND CENTER"}),S.jsx("p",{className:"text-xs font-mono text-cyan-400 mt-1",children:"Real-time threat landscape analytics • XGBoost Model Telemetry"})]}),S.jsx(jD,{historyItems:o,totalScansCount:l}),S.jsx("div",{className:"pt-4",children:S.jsx(_x,{onScanCompleted:y,onThreatDetected:i})}),S.jsx(Sx,{items:o,total:l,currentPage:u,pageSize:15,onPageChange:m=>x(m),isLoading:h})]},"dashboard-view"),t==="history"&&S.jsxs(st.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.3},className:"w-full pt-28 space-y-6",children:[S.jsxs("div",{children:[S.jsx("h2",{className:"text-3xl font-extrabold font-mono text-white tracking-tight",children:"CLASSIFICATION AUDIT LOGS"}),S.jsx("p",{className:"text-xs font-mono text-cyan-400 mt-1",children:"Full persistence audit trail queried from SQLite / PostgreSQL backend"})]}),S.jsx(Sx,{items:o,total:l,currentPage:u,pageSize:15,onPageChange:m=>x(m),isLoading:h})]},"history-view")]})}),S.jsx(WD,{isOpen:r,onClose:()=>s(!1)}),S.jsx("footer",{className:"relative z-10 border-t border-slate-800/80 bg-[#05070D]/90 backdrop-blur-md py-6 px-4",children:S.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(Va,{className:"w-4 h-4 text-cyan-400"}),S.jsx("span",{className:"text-slate-400 font-semibold",children:"PHISHGUARD AI"}),S.jsx("span",{children:"• Powered by XGBoost on PhiUSIIL (235k samples)"})]}),S.jsxs("div",{className:"flex items-center gap-4",children:[S.jsx("span",{className:"text-slate-400",children:"Zero Network Crawl / SSRF Immune"}),S.jsx("button",{onClick:()=>s(!0),className:"text-cyan-400 hover:text-cyan-300 underline",children:"View System Specs"})]})]})})]})};jd.createRoot(document.getElementById("root")).render(S.jsx(Nx.StrictMode,{children:S.jsx(XD,{})}));
