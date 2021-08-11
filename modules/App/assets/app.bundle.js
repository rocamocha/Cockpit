(function () {
  'use strict';

  window.Vue=function(e){function t(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const n=t("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"),o=t("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function r(e){if(T(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=F(o)?l(o):r(o);if(s)for(const e in s)t[e]=s[e];}return t}return F(e)||M(e)?e:void 0}const s=/;(?![^(]*\))/g,i=/:(.+)/;function l(e){const t={};return e.split(s).forEach((e=>{if(e){const n=e.split(i);n.length>1&&(t[n[0].trim()]=n[1].trim());}})),t}function c(e){let t="";if(F(e))t=e;else if(T(e))for(let n=0;n<e.length;n++){const o=c(e[n]);o&&(t+=o+" ");}else if(M(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const a=t("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"),u=t("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"),p=t("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr");function f(e,t){if(e===t)return !0;let n=$(e),o=$(t);if(n||o)return !(!n||!o)&&e.getTime()===t.getTime();if(n=T(e),o=T(t),n||o)return !(!n||!o)&&function(e,t){if(e.length!==t.length)return !1;let n=!0;for(let o=0;n&&o<e.length;o++)n=f(e[o],t[o]);return n}(e,t);if(n=M(e),o=M(t),n||o){if(!n||!o)return !1;if(Object.keys(e).length!==Object.keys(t).length)return !1;for(const n in e){const o=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(o&&!r||!o&&r||!f(e[n],t[n]))return !1}}return String(e)===String(t)}function d(e,t){return e.findIndex((e=>f(e,t)))}const h=(e,t)=>t&&t.__v_isRef?h(e,t.value):N(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:E(t)?{[`Set(${t.size})`]:[...t.values()]}:!M(t)||T(t)||V(t)?t:String(t),m={},g=[],v=()=>{},y=()=>!1,b=/^on[^a-z]/,_=e=>b.test(e),S=e=>e.startsWith("onUpdate:"),x=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1);},w=Object.prototype.hasOwnProperty,k=(e,t)=>w.call(e,t),T=Array.isArray,N=e=>"[object Map]"===I(e),E=e=>"[object Set]"===I(e),$=e=>e instanceof Date,R=e=>"function"==typeof e,F=e=>"string"==typeof e,A=e=>"symbol"==typeof e,M=e=>null!==e&&"object"==typeof e,O=e=>M(e)&&R(e.then)&&R(e.catch),P=Object.prototype.toString,I=e=>P.call(e),V=e=>"[object Object]"===I(e),B=e=>F(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,L=t(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),j=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},U=/-(\w)/g,H=j((e=>e.replace(U,((e,t)=>t?t.toUpperCase():"")))),D=/\B([A-Z])/g,W=j((e=>e.replace(D,"-$1").toLowerCase())),z=j((e=>e.charAt(0).toUpperCase()+e.slice(1))),K=j((e=>e?`on${z(e)}`:"")),G=(e,t)=>!Object.is(e,t),q=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t);},J=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n});},Z=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Q;const X=[];class Y{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Q&&(this.parent=Q,this.index=(Q.scopes||(Q.scopes=[])).push(this)-1);}run(e){if(this.active)try{return this.on(),e()}finally{this.off();}}on(){this.active&&(X.push(this),Q=this);}off(){this.active&&(X.pop(),Q=X[X.length-1]);}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index);}this.active=!1;}}}function ee(e,t){(t=t||Q)&&t.active&&t.effects.push(e);}const te=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ne=e=>(e.w&ie)>0,oe=e=>(e.n&ie)>0,re=new WeakMap;let se=0,ie=1;const le=[];let ce;const ae=Symbol(""),ue=Symbol("");class pe{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],ee(this,n);}run(){if(!this.active)return this.fn();if(!le.includes(this))try{return le.push(ce=this),he.push(de),de=!0,ie=1<<++se,se<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ie;})(this):fe(this),this.fn()}finally{se<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const r=t[o];ne(r)&&!oe(r)?r.delete(e):t[n++]=r,r.w&=~ie,r.n&=~ie;}t.length=n;}})(this),ie=1<<--se,ge(),le.pop();const e=le.length;ce=e>0?le[e-1]:void 0;}}stop(){this.active&&(fe(this),this.onStop&&this.onStop(),this.active=!1);}}function fe(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0;}}let de=!0;const he=[];function me(){he.push(de),de=!1;}function ge(){const e=he.pop();de=void 0===e||e;}function ve(e,t,n){if(!ye())return;let o=re.get(e);o||re.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=te()),be(r);}function ye(){return de&&void 0!==ce}function be(e,t){let n=!1;se<=30?oe(e)||(e.n|=ie,n=!ne(e)):n=!e.has(ce),n&&(e.add(ce),ce.deps.push(e));}function _e(e,t,n,o,r,s){const i=re.get(e);if(!i)return;let l=[];if("clear"===t)l=[...i.values()];else if("length"===n&&T(e))i.forEach(((e,t)=>{("length"===t||t>=o)&&l.push(e);}));else switch(void 0!==n&&l.push(i.get(n)),t){case"add":T(e)?B(n)&&l.push(i.get("length")):(l.push(i.get(ae)),N(e)&&l.push(i.get(ue)));break;case"delete":T(e)||(l.push(i.get(ae)),N(e)&&l.push(i.get(ue)));break;case"set":N(e)&&l.push(i.get(ae));}if(1===l.length)l[0]&&Se(l[0]);else {const e=[];for(const t of l)t&&e.push(...t);Se(te(e));}}function Se(e,t){for(const n of T(e)?e:[...e])(n!==ce||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run());}const xe=t("__proto__,__v_isRef,__isVue"),Ce=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(A)),we=Re(),ke=Re(!1,!0),Te=Re(!0),Ne=Re(!0,!0),Ee=$e();function $e(){const e={};return ["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=yt(this);for(let t=0,r=this.length;t<r;t++)ve(n,0,t+"");const o=n[t](...e);return -1===o||!1===o?n[t](...e.map(yt)):o};})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){me();const n=yt(this)[t].apply(this,e);return ge(),n};})),e}function Re(e=!1,t=!1){return function(n,o,r){if("__v_isReactive"===o)return !e;if("__v_isReadonly"===o)return e;if("__v_raw"===o&&r===(e?t?at:ct:t?lt:it).get(n))return n;const s=T(n);if(!e&&s&&k(Ee,o))return Reflect.get(Ee,o,r);const i=Reflect.get(n,o,r);if(A(o)?Ce.has(o):xe(o))return i;if(e||ve(n,0,o),t)return i;if(Ct(i)){return !s||!B(o)?i.value:i}return M(i)?e?dt(i):pt(i):i}}function Fe(e=!1){return function(t,n,o,r){let s=t[n];if(!e&&(o=yt(o),s=yt(s),!T(t)&&Ct(s)&&!Ct(o)))return s.value=o,!0;const i=T(t)&&B(n)?Number(n)<t.length:k(t,n),l=Reflect.set(t,n,o,r);return t===yt(r)&&(i?G(o,s)&&_e(t,"set",n,o):_e(t,"add",n,o)),l}}const Ae={get:we,set:Fe(),deleteProperty:function(e,t){const n=k(e,t),o=Reflect.deleteProperty(e,t);return o&&n&&_e(e,"delete",t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return A(t)&&Ce.has(t)||ve(e,0,t),n},ownKeys:function(e){return ve(e,0,T(e)?"length":ae),Reflect.ownKeys(e)}},Me={get:Te,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Oe=x({},Ae,{get:ke,set:Fe(!0)}),Pe=x({},Me,{get:Ne}),Ie=e=>M(e)?pt(e):e,Ve=e=>M(e)?dt(e):e,Be=e=>e,Le=e=>Reflect.getPrototypeOf(e);function je(e,t,n=!1,o=!1){const r=yt(e=e.__v_raw),s=yt(t);t!==s&&!n&&ve(r,0,t),!n&&ve(r,0,s);const{has:i}=Le(r),l=o?Be:n?Ve:Ie;return i.call(r,t)?l(e.get(t)):i.call(r,s)?l(e.get(s)):void(e!==r&&e.get(t))}function Ue(e,t=!1){const n=this.__v_raw,o=yt(n),r=yt(e);return e!==r&&!t&&ve(o,0,e),!t&&ve(o,0,r),e===r?n.has(e):n.has(e)||n.has(r)}function He(e,t=!1){return e=e.__v_raw,!t&&ve(yt(e),0,ae),Reflect.get(e,"size",e)}function De(e){e=yt(e);const t=yt(this);return Le(t).has.call(t,e)||(t.add(e),_e(t,"add",e,e)),this}function We(e,t){t=yt(t);const n=yt(this),{has:o,get:r}=Le(n);let s=o.call(n,e);s||(e=yt(e),s=o.call(n,e));const i=r.call(n,e);return n.set(e,t),s?G(t,i)&&_e(n,"set",e,t):_e(n,"add",e,t),this}function ze(e){const t=yt(this),{has:n,get:o}=Le(t);let r=n.call(t,e);r||(e=yt(e),r=n.call(t,e)),o&&o.call(t,e);const s=t.delete(e);return r&&_e(t,"delete",e,void 0),s}function Ke(){const e=yt(this),t=0!==e.size,n=e.clear();return t&&_e(e,"clear",void 0,void 0),n}function Ge(e,t){return function(n,o){const r=this,s=r.__v_raw,i=yt(s),l=t?Be:e?Ve:Ie;return !e&&ve(i,0,ae),s.forEach(((e,t)=>n.call(o,l(e),l(t),r)))}}function qe(e,t,n){return function(...o){const r=this.__v_raw,s=yt(r),i=N(s),l="entries"===e||e===Symbol.iterator&&i,c="keys"===e&&i,a=r[e](...o),u=n?Be:t?Ve:Ie;return !t&&ve(s,0,c?ue:ae),{next(){const{value:e,done:t}=a.next();return t?{value:e,done:t}:{value:l?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Je(e){return function(...t){return "delete"!==e&&this}}function Ze(){const e={get(e){return je(this,e)},get size(){return He(this)},has:Ue,add:De,set:We,delete:ze,clear:Ke,forEach:Ge(!1,!1)},t={get(e){return je(this,e,!1,!0)},get size(){return He(this)},has:Ue,add:De,set:We,delete:ze,clear:Ke,forEach:Ge(!1,!0)},n={get(e){return je(this,e,!0)},get size(){return He(this,!0)},has(e){return Ue.call(this,e,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:Ge(!0,!1)},o={get(e){return je(this,e,!0,!0)},get size(){return He(this,!0)},has(e){return Ue.call(this,e,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:Ge(!0,!0)};return ["keys","values","entries",Symbol.iterator].forEach((r=>{e[r]=qe(r,!1,!1),n[r]=qe(r,!0,!1),t[r]=qe(r,!1,!0),o[r]=qe(r,!0,!0);})),[e,n,t,o]}const[Qe,Xe,Ye,et]=Ze();function tt(e,t){const n=t?e?et:Ye:e?Xe:Qe;return (t,o,r)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(k(n,o)&&o in t?n:t,o,r)}const nt={get:tt(!1,!1)},ot={get:tt(!1,!0)},rt={get:tt(!0,!1)},st={get:tt(!0,!0)},it=new WeakMap,lt=new WeakMap,ct=new WeakMap,at=new WeakMap;function ut(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>I(e).slice(8,-1))(e))}function pt(e){return e&&e.__v_isReadonly?e:ht(e,!1,Ae,nt,it)}function ft(e){return ht(e,!1,Oe,ot,lt)}function dt(e){return ht(e,!0,Me,rt,ct)}function ht(e,t,n,o,r){if(!M(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const i=ut(e);if(0===i)return e;const l=new Proxy(e,2===i?o:n);return r.set(e,l),l}function mt(e){return gt(e)?mt(e.__v_raw):!(!e||!e.__v_isReactive)}function gt(e){return !(!e||!e.__v_isReadonly)}function vt(e){return mt(e)||gt(e)}function yt(e){const t=e&&e.__v_raw;return t?yt(t):e}function bt(e){return J(e,"__v_skip",!0),e}function _t(e){ye()&&((e=yt(e)).dep||(e.dep=te()),be(e.dep));}function St(e,t){(e=yt(e)).dep&&Se(e.dep);}const xt=e=>M(e)?pt(e):e;function Ct(e){return Boolean(e&&!0===e.__v_isRef)}function wt(e){return Tt(e)}class kt{constructor(e,t=!1){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:yt(e),this._value=t?e:xt(e);}get value(){return _t(this),this._value}set value(e){e=this._shallow?e:yt(e),G(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:xt(e),St(this));}}function Tt(e,t=!1){return Ct(e)?e:new kt(e,t)}function Nt(e){return Ct(e)?e.value:e}const Et={get:(e,t,n)=>Nt(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return Ct(r)&&!Ct(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function $t(e){return mt(e)?e:new Proxy(e,Et)}class Rt{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:n}=e((()=>_t(this)),(()=>St(this)));this._get=t,this._set=n;}get value(){return this._get()}set value(e){this._set(e);}}class Ft{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0;}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e;}}function At(e,t){return Ct(e[t])?e[t]:new Ft(e,t)}class Mt{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new pe(e,(()=>{this._dirty||(this._dirty=!0,St(this));})),this.__v_isReadonly=n;}get value(){const e=yt(this);return _t(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e);}}function Ot(e,t){let n,o;R(e)?(n=e,o=v):(n=e.get,o=e.set);return new Mt(n,o,R(e)||!e.set)}function Pt(e,t,...n){const o=e.vnode.props||m;let r=n;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in o){const e=`${"modelValue"===i?"model":i}Modifiers`,{number:t,trim:s}=o[e]||m;s?r=n.map((e=>e.trim())):t&&(r=n.map(Z));}let l,c=o[l=K(t)]||o[l=K(H(t))];!c&&s&&(c=o[l=K(W(t))]),c&&Rr(c,e,6,r);const a=o[l+"Once"];if(a){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,Rr(a,e,6,r);}}function It(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(void 0!==r)return r;const s=e.emits;let i={},l=!1;if(!R(e)){const o=e=>{const n=It(e,t,!0);n&&(l=!0,x(i,n));};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o);}return s||l?(T(s)?s.forEach((e=>i[e]=null)):x(i,s),o.set(e,i),i):(o.set(e,null),null)}function Vt(e,t){return !(!e||!_(t))&&(t=t.slice(2).replace(/Once$/,""),k(e,t[0].toLowerCase()+t.slice(1))||k(e,W(t))||k(e,t))}let Bt=null,Lt=null;function jt(e){const t=Bt;return Bt=e,Lt=e&&e.type.__scopeId||null,t}function Ut(e,t=Bt,n){if(!t)return e;if(e._n)return e;const o=(...n)=>{o._d&&Lo(-1);const r=jt(t),s=e(...n);return jt(r),o._d&&Lo(1),s};return o._n=!0,o._c=!0,o._d=!0,o}function Ht(e){const{type:t,vnode:n,proxy:o,withProxy:r,props:s,propsOptions:[i],slots:l,attrs:c,emit:a,render:u,renderCache:p,data:f,setupState:d,ctx:h,inheritAttrs:m}=e;let g;const v=jt(e);try{let e;if(4&n.shapeFlag){const t=r||o;g=Xo(u.call(t,t,p,s,d,f,h)),e=c;}else {const n=t;0,g=Xo(n(s,n.length>1?{attrs:c,slots:l,emit:a}:null)),e=t.props?c:Wt(c);}let v=g;if(e&&!1!==m){const t=Object.keys(e),{shapeFlag:n}=v;t.length&&(1&n||6&n)&&(i&&t.some(S)&&(e=zt(e,i)),v=Zo(v,e));}0,n.dirs&&(v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),g=v;}catch(y){Oo.length=0,Fr(y,e,1),g=qo(Ao);}return jt(v),g}function Dt(e){let t;for(let n=0;n<e.length;n++){const o=e[n];if(!Ho(o))return;if(o.type!==Ao||"v-if"===o.children){if(t)return;t=o;}}return t}const Wt=e=>{let t;for(const n in e)("class"===n||"style"===n||_(n))&&((t||(t={}))[n]=e[n]);return t},zt=(e,t)=>{const n={};for(const o in e)S(o)&&o.slice(9)in t||(n[o]=e[o]);return n};function Kt(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return !0;for(let r=0;r<o.length;r++){const s=o[r];if(t[s]!==e[s]&&!Vt(n,s))return !0}return !1}function Gt({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent;}const qt={name:"Suspense",__isSuspense:!0,process(e,t,n,o,r,s,i,l,c,a){null==e?function(e,t,n,o,r,s,i,l,c){const{p:a,o:{createElement:u}}=c,p=u("div"),f=e.suspense=Zt(e,r,o,t,p,n,s,i,l,c);a(null,f.pendingBranch=e.ssContent,p,null,o,f,s,i),f.deps>0?(Jt(e,"onPending"),Jt(e,"onFallback"),a(null,e.ssFallback,t,n,o,null,s,i),Yt(f,e.ssFallback)):f.resolve();}(t,n,o,r,s,i,l,c,a):function(e,t,n,o,r,s,i,l,{p:c,um:a,o:{createElement:u}}){const p=t.suspense=e.suspense;p.vnode=t,t.el=e.el;const f=t.ssContent,d=t.ssFallback,{activeBranch:h,pendingBranch:m,isInFallback:g,isHydrating:v}=p;if(m)p.pendingBranch=f,Do(f,m)?(c(m,f,p.hiddenContainer,null,r,p,s,i,l),p.deps<=0?p.resolve():g&&(c(h,d,n,o,r,null,s,i,l),Yt(p,d))):(p.pendingId++,v?(p.isHydrating=!1,p.activeBranch=m):a(m,r,p),p.deps=0,p.effects.length=0,p.hiddenContainer=u("div"),g?(c(null,f,p.hiddenContainer,null,r,p,s,i,l),p.deps<=0?p.resolve():(c(h,d,n,o,r,null,s,i,l),Yt(p,d))):h&&Do(f,h)?(c(h,f,n,o,r,p,s,i,l),p.resolve(!0)):(c(null,f,p.hiddenContainer,null,r,p,s,i,l),p.deps<=0&&p.resolve()));else if(h&&Do(f,h))c(h,f,n,o,r,p,s,i,l),Yt(p,f);else if(Jt(t,"onPending"),p.pendingBranch=f,p.pendingId++,c(null,f,p.hiddenContainer,null,r,p,s,i,l),p.deps<=0)p.resolve();else {const{timeout:e,pendingId:t}=p;e>0?setTimeout((()=>{p.pendingId===t&&p.fallback(d);}),e):0===e&&p.fallback(d);}}(e,t,n,o,r,i,l,c,a);},hydrate:function(e,t,n,o,r,s,i,l,c){const a=t.suspense=Zt(t,o,n,e.parentNode,document.createElement("div"),null,r,s,i,l,!0),u=c(e,a.pendingBranch=t.ssContent,n,a,s,i);0===a.deps&&a.resolve();return u},create:Zt,normalize:function(e){const{shapeFlag:t,children:n}=e,o=32&t;e.ssContent=Qt(o?n.default:n),e.ssFallback=o?Qt(n.fallback):qo(Comment);}};function Jt(e,t){const n=e.props&&e.props[t];R(n)&&n();}function Zt(e,t,n,o,r,s,i,l,c,a,u=!1){const{p:p,m:f,um:d,n:h,o:{parentNode:m,remove:g}}=a,v=Z(e.props&&e.props.timeout),y={vnode:e,parent:t,parentComponent:n,isSVG:i,container:o,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:"number"==typeof v?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(e=!1){const{vnode:t,activeBranch:n,pendingBranch:o,pendingId:r,effects:s,parentComponent:i,container:l}=y;if(y.isHydrating)y.isHydrating=!1;else if(!e){const e=n&&o.transition&&"out-in"===o.transition.mode;e&&(n.transition.afterLeave=()=>{r===y.pendingId&&f(o,l,t,0);});let{anchor:t}=y;n&&(t=h(n),d(n,i,y,!0)),e||f(o,l,t,0);}Yt(y,o),y.pendingBranch=null,y.isInFallback=!1;let c=y.parent,a=!1;for(;c;){if(c.pendingBranch){c.effects.push(...s),a=!0;break}c=c.parent;}a||Jr(s),y.effects=[],Jt(t,"onResolve");},fallback(e){if(!y.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:o,container:r,isSVG:s}=y;Jt(t,"onFallback");const i=h(n),a=()=>{y.isInFallback&&(p(null,e,r,i,o,null,s,l,c),Yt(y,e));},u=e.transition&&"out-in"===e.transition.mode;u&&(n.transition.afterLeave=a),y.isInFallback=!0,d(n,o,null,!0),u||a();},move(e,t,n){y.activeBranch&&f(y.activeBranch,e,t,n),y.container=e;},next:()=>y.activeBranch&&h(y.activeBranch),registerDep(e,t){const n=!!y.pendingBranch;n&&y.deps++;const o=e.vnode.el;e.asyncDep.catch((t=>{Fr(t,e,0);})).then((r=>{if(e.isUnmounted||y.isUnmounted||y.pendingId!==e.suspenseId)return;e.asyncResolved=!0;const{vnode:s}=e;vr(e,r),o&&(s.el=o);const l=!o&&e.subTree.el;t(e,s,m(o||e.subTree.el),o?null:h(e.subTree),y,i,c),l&&g(l),Gt(e,s.el),n&&0==--y.deps&&y.resolve();}));},unmount(e,t){y.isUnmounted=!0,y.activeBranch&&d(y.activeBranch,n,e,t),y.pendingBranch&&d(y.pendingBranch,n,e,t);}};return y}function Qt(e){let t;if(R(e)){const n=e._c;n&&(e._d=!1,Io()),e=e(),n&&(e._d=!0,t=Po,Vo());}if(T(e)){const t=Dt(e);e=t;}return e=Xo(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter((t=>t!==e))),e}function Xt(e,t){t&&t.pendingBranch?T(e)?t.effects.push(...e):t.effects.push(e):Jr(e);}function Yt(e,t){e.activeBranch=t;const{vnode:n,parentComponent:o}=e,r=n.el=t.el;o&&o.subTree===n&&(o.vnode.el=r,Gt(o,r));}function en(e,t){if(ar){let n=ar.provides;const o=ar.parent&&ar.parent.provides;o===n&&(n=ar.provides=Object.create(o)),n[e]=t;}}function tn(e,t,n=!1){const o=ar||Bt;if(o){const r=null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&R(t)?t.call(o.proxy):t}}function nn(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nn((()=>{e.isMounted=!0;})),Rn((()=>{e.isUnmounting=!0;})),e}const on=[Function,Array],rn={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:on,onEnter:on,onAfterEnter:on,onEnterCancelled:on,onBeforeLeave:on,onLeave:on,onAfterLeave:on,onLeaveCancelled:on,onBeforeAppear:on,onAppear:on,onAfterAppear:on,onAppearCancelled:on},setup(e,{slots:t}){const n=ur(),o=nn();let r;return ()=>{const s=t.default&&pn(t.default(),!0);if(!s||!s.length)return;const i=yt(e),{mode:l}=i,c=s[0];if(o.isLeaving)return cn(c);const a=an(c);if(!a)return cn(c);const u=ln(a,i,o,n);un(a,u);const p=n.subTree,f=p&&an(p);let d=!1;const{getTransitionKey:h}=a.type;if(h){const e=h();void 0===r?r=e:e!==r&&(r=e,d=!0);}if(f&&f.type!==Ao&&(!Do(a,f)||d)){const e=ln(f,i,o,n);if(un(f,e),"out-in"===l)return o.isLeaving=!0,e.afterLeave=()=>{o.isLeaving=!1,n.update();},cn(c);"in-out"===l&&a.type!==Ao&&(e.delayLeave=(e,t,n)=>{sn(o,f)[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave;},u.delayedLeave=n;});}return c}}};function sn(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function ln(e,t,n,o){const{appear:r,mode:s,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:a,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:d,onLeaveCancelled:h,onBeforeAppear:m,onAppear:g,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),_=sn(n,e),S=(e,t)=>{e&&Rr(e,o,9,t);},x={mode:s,persisted:i,beforeEnter(t){let o=l;if(!n.isMounted){if(!r)return;o=m||l;}t._leaveCb&&t._leaveCb(!0);const s=_[b];s&&Do(e,s)&&s.el._leaveCb&&s.el._leaveCb(),S(o,[t]);},enter(e){let t=c,o=a,s=u;if(!n.isMounted){if(!r)return;t=g||c,o=v||a,s=y||u;}let i=!1;const l=e._enterCb=t=>{i||(i=!0,S(t?s:o,[e]),x.delayedLeave&&x.delayedLeave(),e._enterCb=void 0);};t?(t(e,l),t.length<=1&&l()):l();},leave(t,o){const r=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return o();S(p,[t]);let s=!1;const i=t._leaveCb=n=>{s||(s=!0,o(),S(n?h:d,[t]),t._leaveCb=void 0,_[r]===e&&delete _[r]);};_[r]=e,f?(f(t,i),f.length<=1&&i()):i();},clone:e=>ln(e,t,n,o)};return x}function cn(e){if(mn(e))return (e=Zo(e)).children=null,e}function an(e){return mn(e)?e.children?e.children[0]:void 0:e}function un(e,t){6&e.shapeFlag&&e.component?un(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t;}function pn(e,t=!1){let n=[],o=0;for(let r=0;r<e.length;r++){const s=e[r];s.type===Ro?(128&s.patchFlag&&o++,n=n.concat(pn(s.children,t))):(t||s.type!==Ao)&&n.push(s);}if(o>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function fn(e){return R(e)?{setup:e,name:e.name}:e}const dn=e=>!!e.type.__asyncLoader;function hn(e,{vnode:{ref:t,props:n,children:o}}){const r=qo(e,n,o);return r.ref=t,r}const mn=e=>e.type.__isKeepAlive,gn={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=ur(),o=n.ctx;if(!o.renderer)return t.default;const r=new Map,s=new Set;let i=null;const l=n.suspense,{renderer:{p:c,m:a,um:u,o:{createElement:p}}}=o,f=p("div");function d(e){xn(e),u(e,n,l);}function h(e){r.forEach(((t,n)=>{const o=Cr(t.type);!o||e&&e(o)||m(n);}));}function m(e){const t=r.get(e);i&&t.type===i.type?i&&xn(i):d(t),r.delete(e),s.delete(e);}o.activate=(e,t,n,o,r)=>{const s=e.component;a(e,t,n,0,l),c(s.vnode,e,t,n,s,l,o,e.slotScopeIds,r),ho((()=>{s.isDeactivated=!1,s.a&&q(s.a);const t=e.props&&e.props.onVnodeMounted;t&&bo(t,s.parent,e);}),l);},o.deactivate=e=>{const t=e.component;a(e,f,null,1,l),ho((()=>{t.da&&q(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&bo(n,t.parent,e),t.isDeactivated=!0;}),l);},ns((()=>[e.include,e.exclude]),(([e,t])=>{e&&h((t=>vn(e,t))),t&&h((e=>!vn(t,e)));}),{flush:"post",deep:!0});let g=null;const v=()=>{null!=g&&r.set(g,Cn(n.subTree));};return Nn(v),$n(v),Rn((()=>{r.forEach((e=>{const{subTree:t,suspense:o}=n,r=Cn(t);if(e.type!==r.type)d(e);else {xn(r);const e=r.component.da;e&&ho(e,o);}}));})),()=>{if(g=null,!t.default)return null;const n=t.default(),o=n[0];if(n.length>1)return i=null,n;if(!(Ho(o)&&(4&o.shapeFlag||128&o.shapeFlag)))return i=null,o;let l=Cn(o);const c=l.type,a=Cr(dn(l)?l.type.__asyncResolved||{}:c),{include:u,exclude:p,max:f}=e;if(u&&(!a||!vn(u,a))||p&&a&&vn(p,a))return i=l,o;const d=null==l.key?c:l.key,h=r.get(d);return l.el&&(l=Zo(l),128&o.shapeFlag&&(o.ssContent=l)),g=d,h?(l.el=h.el,l.component=h.component,l.transition&&un(l,l.transition),l.shapeFlag|=512,s.delete(d),s.add(d)):(s.add(d),f&&s.size>parseInt(f,10)&&m(s.values().next().value)),l.shapeFlag|=256,i=l,o}}};function vn(e,t){return T(e)?e.some((e=>vn(e,t))):F(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function yn(e,t){_n(e,"a",t);}function bn(e,t){_n(e,"da",t);}function _n(e,t,n=ar){const o=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent;}e();});if(wn(t,o,n),n){let e=n.parent;for(;e&&e.parent;)mn(e.parent.vnode)&&Sn(o,t,n,e),e=e.parent;}}function Sn(e,t,n,o){const r=wn(t,e,o,!0);Fn((()=>{C(o[t],r);}),n);}function xn(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t;}function Cn(e){return 128&e.shapeFlag?e.ssContent:e}function wn(e,t,n=ar,o=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;me(),pr(n);const r=Rr(t,n,e,o);return fr(),ge(),r});return o?r.unshift(s):r.push(s),s}}const kn=e=>(t,n=ar)=>(!gr||"sp"===e)&&wn(e,t,n),Tn=kn("bm"),Nn=kn("m"),En=kn("bu"),$n=kn("u"),Rn=kn("bum"),Fn=kn("um"),An=kn("sp"),Mn=kn("rtg"),On=kn("rtc");function Pn(e,t=ar){wn("ec",e,t);}let In=!0;function Vn(e){const t=jn(e),n=e.proxy,o=e.ctx;In=!1,t.beforeCreate&&Bn(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:i,watch:l,provide:c,inject:a,created:u,beforeMount:p,mounted:f,beforeUpdate:d,updated:h,activated:m,deactivated:g,beforeUnmount:y,unmounted:b,render:_,renderTracked:S,renderTriggered:x,errorCaptured:C,serverPrefetch:w,expose:k,inheritAttrs:N,components:E,directives:$}=t;if(a&&function(e,t,n=v,o=!1){T(e)&&(e=Wn(e));for(const r in e){const n=e[r];let s;s=M(n)?"default"in n?tn(n.from||r,n.default,!0):tn(n.from||r):tn(n),Ct(s)&&o?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[r]=s;}}(a,o,null,e.appContext.config.unwrapInjectedRef),i)for(const v in i){const e=i[v];R(e)&&(o[v]=e.bind(n));}if(r){const t=r.call(n,n);M(t)&&(e.data=pt(t));}if(In=!0,s)for(const T in s){const e=s[T],t=Ot({get:R(e)?e.bind(n,n):R(e.get)?e.get.bind(n,n):v,set:!R(e)&&R(e.set)?e.set.bind(n):v});Object.defineProperty(o,T,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e});}if(l)for(const v in l)Ln(l[v],o,n,v);if(c){const e=R(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{en(t,e[t]);}));}function F(e,t){T(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n));}if(u&&Bn(u,e,"c"),F(Tn,p),F(Nn,f),F(En,d),F($n,h),F(yn,m),F(bn,g),F(Pn,C),F(On,S),F(Mn,x),F(Rn,y),F(Fn,b),F(An,w),T(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t});}));}else e.exposed||(e.exposed={});_&&e.render===v&&(e.render=_),null!=N&&(e.inheritAttrs=N),E&&(e.components=E),$&&(e.directives=$);}function Bn(e,t,n){Rr(T(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n);}function Ln(e,t,n,o){const r=o.includes(".")?ss(n,o):()=>n[o];if(F(e)){const n=t[e];R(n)&&ns(r,n);}else if(R(e))ns(r,e.bind(n));else if(M(e))if(T(e))e.forEach((e=>Ln(e,t,n,o)));else {const o=R(e.handler)?e.handler.bind(n):t[e.handler];R(o)&&ns(r,o,e);}}function jn(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,l=s.get(t);let c;return l?c=l:r.length||n||o?(c={},r.length&&r.forEach((e=>Un(c,e,i,!0))),Un(c,t,i)):c=t,s.set(t,c),c}function Un(e,t,n,o=!1){const{mixins:r,extends:s}=t;s&&Un(e,s,n,!0),r&&r.forEach((t=>Un(e,t,n,!0)));for(const i in t)if(o&&"expose"===i);else {const o=Hn[i]||n&&n[i];e[i]=o?o(e[i],t[i]):t[i];}return e}const Hn={data:Dn,props:Kn,emits:Kn,methods:Kn,computed:Kn,beforeCreate:zn,created:zn,beforeMount:zn,mounted:zn,beforeUpdate:zn,updated:zn,beforeDestroy:zn,destroyed:zn,activated:zn,deactivated:zn,errorCaptured:zn,serverPrefetch:zn,components:Kn,directives:Kn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=x(Object.create(null),e);for(const o in t)n[o]=zn(e[o],t[o]);return n},provide:Dn,inject:function(e,t){return Kn(Wn(e),Wn(t))}};function Dn(e,t){return t?e?function(){return x(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function Wn(e){if(T(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function zn(e,t){return e?[...new Set([].concat(e,t))]:t}function Kn(e,t){return e?x(x(Object.create(null),e),t):t}function Gn(e,t,n,o){const[r,s]=e.propsOptions;let i,l=!1;if(t)for(let c in t){if(L(c))continue;const a=t[c];let u;r&&k(r,u=H(c))?s&&s.includes(u)?(i||(i={}))[u]=a:n[u]=a:Vt(e.emitsOptions,c)||a!==o[c]&&(o[c]=a,l=!0);}if(s){const t=yt(n),o=i||m;for(let i=0;i<s.length;i++){const l=s[i];n[l]=qn(r,t,l,o[l],e,!k(o,l));}}return l}function qn(e,t,n,o,r,s){const i=e[n];if(null!=i){const e=k(i,"default");if(e&&void 0===o){const e=i.default;if(i.type!==Function&&R(e)){const{propsDefaults:s}=r;n in s?o=s[n]:(pr(r),o=s[n]=e.call(null,t),fr());}else o=e;}i[0]&&(s&&!e?o=!1:!i[1]||""!==o&&o!==W(n)||(o=!0));}return o}function Jn(e,t,n=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const s=e.props,i={},l=[];let c=!1;if(!R(e)){const o=e=>{c=!0;const[n,o]=Jn(e,t,!0);x(i,n),o&&l.push(...o);};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o);}if(!s&&!c)return o.set(e,g),g;if(T(s))for(let u=0;u<s.length;u++){const e=H(s[u]);Zn(e)&&(i[e]=m);}else if(s)for(const u in s){const e=H(u);if(Zn(e)){const t=s[u],n=i[e]=T(t)||R(t)?{type:t}:t;if(n){const t=Yn(Boolean,n.type),o=Yn(String,n.type);n[0]=t>-1,n[1]=o<0||t<o,(t>-1||k(n,"default"))&&l.push(e);}}}const a=[i,l];return o.set(e,a),a}function Zn(e){return "$"!==e[0]}function Qn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Xn(e,t){return Qn(e)===Qn(t)}function Yn(e,t){return T(t)?t.findIndex((t=>Xn(t,e))):R(t)&&Xn(t,e)?0:-1}const eo=e=>"_"===e[0]||"$stable"===e,to=e=>T(e)?e.map(Xo):[Xo(e)],no=(e,t,n)=>{const o=Ut((e=>to(t(e))),n);return o._c=!1,o},oo=(e,t,n)=>{const o=e._ctx;for(const r in e){if(eo(r))continue;const n=e[r];if(R(n))t[r]=no(0,n,o);else if(null!=n){const e=to(n);t[r]=()=>e;}}},ro=(e,t)=>{const n=to(t);e.slots.default=()=>n;};function so(e,t,n,o){const r=e.dirs,s=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];s&&(l.oldValue=s[i].value);let c=l.dir[o];c&&(me(),Rr(c,n,8,[e.el,l,e,t]),ge());}}function io(){return {app:null,config:{isNativeTag:y,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lo=0;function co(e,t){return function(n,o=null){null==o||M(o)||(o=null);const r=io(),s=new Set;let i=!1;const l=r.app={_uid:lo++,_component:n,_props:o,_container:null,_context:r,_instance:null,version:ps,get config(){return r.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&R(e.install)?(s.add(e),e.install(l,...t)):R(e)&&(s.add(e),e(l,...t))),l),mixin:e=>(r.mixins.includes(e)||r.mixins.push(e),l),component:(e,t)=>t?(r.components[e]=t,l):r.components[e],directive:(e,t)=>t?(r.directives[e]=t,l):r.directives[e],mount(s,c,a){if(!i){const u=qo(n,o);return u.appContext=r,c&&t?t(u,s):e(u,s,a),i=!0,l._container=s,s.__vue_app__=l,u.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__);},provide:(e,t)=>(r.provides[e]=t,l)};return l}}let ao=!1;const uo=e=>/svg/.test(e.namespaceURI)&&"foreignObject"!==e.tagName,po=e=>8===e.nodeType;function fo(e){const{mt:t,p:n,o:{patchProp:o,nextSibling:r,parentNode:s,remove:i,insert:l,createComment:c}}=e,a=(n,o,i,l,c,m=!1)=>{const g=po(n)&&"["===n.data,v=()=>d(n,o,i,l,c,g),{type:y,ref:b,shapeFlag:_}=o,S=n.nodeType;o.el=n;let x=null;switch(y){case Fo:3!==S?x=v():(n.data!==o.children&&(ao=!0,n.data=o.children),x=r(n));break;case Ao:x=8!==S||g?v():r(n);break;case Mo:if(1===S){x=n;const e=!o.children.length;for(let t=0;t<o.staticCount;t++)e&&(o.children+=x.outerHTML),t===o.staticCount-1&&(o.anchor=x),x=r(x);return x}x=v();break;case Ro:x=g?f(n,o,i,l,c,m):v();break;default:if(1&_)x=1!==S||o.type.toLowerCase()!==n.tagName.toLowerCase()?v():u(n,o,i,l,c,m);else if(6&_){o.slotScopeIds=c;const e=s(n);if(t(o,e,null,i,l,uo(e),m),x=g?h(n):r(n),dn(o)){let t;g?(t=qo(Ro),t.anchor=x?x.previousSibling:e.lastChild):t=3===n.nodeType?Qo(""):qo("div"),t.el=n,o.component.subTree=t;}}else 64&_?x=8!==S?v():o.type.hydrate(n,o,i,l,c,m,e,p):128&_&&(x=o.type.hydrate(n,o,i,l,uo(s(n)),c,m,e,a));}return null!=b&&yo(b,null,l,o),x},u=(e,t,n,r,s,l)=>{l=l||!!t.dynamicChildren;const{type:c,props:a,patchFlag:u,shapeFlag:f,dirs:d}=t,h="input"===c&&d||"option"===c;if(h||-1!==u){if(d&&so(t,null,n,"created"),a)if(h||!l||16&u||32&u)for(const t in a)(h&&t.endsWith("value")||_(t)&&!L(t))&&o(e,t,null,a[t]);else a.onClick&&o(e,"onClick",null,a.onClick);let c;if((c=a&&a.onVnodeBeforeMount)&&bo(c,n,t),d&&so(t,null,n,"beforeMount"),((c=a&&a.onVnodeMounted)||d)&&Xt((()=>{c&&bo(c,n,t),d&&so(t,null,n,"mounted");}),r),16&f&&(!a||!a.innerHTML&&!a.textContent)){let o=p(e.firstChild,t,e,n,r,s,l);for(;o;){ao=!0;const e=o;o=o.nextSibling,i(e);}}else 8&f&&e.textContent!==t.children&&(ao=!0,e.textContent=t.children);}return e.nextSibling},p=(e,t,o,r,s,i,l)=>{l=l||!!t.dynamicChildren;const c=t.children,u=c.length;for(let p=0;p<u;p++){const t=l?c[p]:c[p]=Xo(c[p]);if(e)e=a(e,t,r,s,i,l);else {if(t.type===Fo&&!t.children)continue;ao=!0,n(null,t,o,null,r,s,uo(o),i);}}return e},f=(e,t,n,o,i,a)=>{const{slotScopeIds:u}=t;u&&(i=i?i.concat(u):u);const f=s(e),d=p(r(e),t,f,n,o,i,a);return d&&po(d)&&"]"===d.data?r(t.anchor=d):(ao=!0,l(t.anchor=c("]"),f,d),d)},d=(e,t,o,l,c,a)=>{if(ao=!0,t.el=null,a){const t=h(e);for(;;){const n=r(e);if(!n||n===t)break;i(n);}}const u=r(e),p=s(e);return i(e),n(null,t,p,u,o,l,uo(p),c),u},h=e=>{let t=0;for(;e;)if((e=r(e))&&po(e)&&("["===e.data&&t++,"]"===e.data)){if(0===t)return r(e);t--;}return e};return [(e,t)=>{if(!t.hasChildNodes())return n(null,e,t),void Qr();ao=!1,a(t.firstChild,e,null,null,null),Qr(),ao&&console.error("Hydration completed but contains mismatches.");},a]}const ho=Xt;function mo(e){return vo(e)}function go(e){return vo(e,fo)}function vo(e,t){const{insert:n,remove:o,patchProp:r,createElement:s,createText:i,createComment:l,setText:c,setElementText:a,parentNode:u,nextSibling:p,setScopeId:f=v,cloneNode:d,insertStaticContent:h}=e,y=(e,t,n,o=null,r=null,s=null,i=!1,l=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Do(e,t)&&(o=X(e),z(e,r,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:a,ref:u,shapeFlag:p}=t;switch(a){case Fo:b(e,t,n,o);break;case Ao:_(e,t,n,o);break;case Mo:null==e&&S(t,n,o,i);break;case Ro:F(e,t,n,o,r,s,i,l,c);break;default:1&p?C(e,t,n,o,r,s,i,l,c):6&p?A(e,t,n,o,r,s,i,l,c):(64&p||128&p)&&a.process(e,t,n,o,r,s,i,l,c,te);}null!=u&&r&&yo(u,e&&e.ref,s,t||e,!t);},b=(e,t,o,r)=>{if(null==e)n(t.el=i(t.children),o,r);else {const n=t.el=e.el;t.children!==e.children&&c(n,t.children);}},_=(e,t,o,r)=>{null==e?n(t.el=l(t.children||""),o,r):t.el=e.el;},S=(e,t,n,o)=>{[e.el,e.anchor]=h(e.children,t,n,o);},C=(e,t,n,o,r,s,i,l,c)=>{i=i||"svg"===t.type,null==e?w(t,n,o,r,s,i,l,c):E(e,t,r,s,i,l,c);},w=(e,t,o,i,l,c,u,p)=>{let f,h;const{type:m,props:g,shapeFlag:v,transition:y,patchFlag:b,dirs:_}=e;if(e.el&&void 0!==d&&-1===b)f=e.el=d(e.el);else {if(f=e.el=s(e.type,c,g&&g.is,g),8&v?a(f,e.children):16&v&&N(e.children,f,null,i,l,c&&"foreignObject"!==m,u,p),_&&so(e,null,i,"created"),g){for(const t in g)"value"===t||L(t)||r(f,t,null,g[t],c,e.children,i,l,Q);"value"in g&&r(f,"value",null,g.value),(h=g.onVnodeBeforeMount)&&bo(h,i,e);}T(f,e,e.scopeId,u,i);}_&&so(e,null,i,"beforeMount");const S=(!l||l&&!l.pendingBranch)&&y&&!y.persisted;S&&y.beforeEnter(f),n(f,t,o),((h=g&&g.onVnodeMounted)||S||_)&&ho((()=>{h&&bo(h,i,e),S&&y.enter(f),_&&so(e,null,i,"mounted");}),l);},T=(e,t,n,o,r)=>{if(n&&f(e,n),o)for(let s=0;s<o.length;s++)f(e,o[s]);if(r){if(t===r.subTree){const t=r.vnode;T(e,t,t.scopeId,t.slotScopeIds,r.parent);}}},N=(e,t,n,o,r,s,i,l,c=0)=>{for(let a=c;a<e.length;a++){const c=e[a]=l?Yo(e[a]):Xo(e[a]);y(null,c,t,n,o,r,s,i,l);}},E=(e,t,n,o,s,i,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:p,dirs:f}=t;u|=16&e.patchFlag;const d=e.props||m,h=t.props||m;let g;if((g=h.onVnodeBeforeUpdate)&&bo(g,n,t,e),f&&so(t,e,n,"beforeUpdate"),u>0){if(16&u)R(c,t,d,h,n,o,s);else if(2&u&&d.class!==h.class&&r(c,"class",null,h.class,s),4&u&&r(c,"style",d.style,h.style,s),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const l=i[t],a=d[l],u=h[l];u===a&&"value"!==l||r(c,l,a,u,s,e.children,n,o,Q);}}1&u&&e.children!==t.children&&a(c,t.children);}else l||null!=p||R(c,t,d,h,n,o,s);const v=s&&"foreignObject"!==t.type;p?$(e.dynamicChildren,p,c,n,o,v,i):l||B(e,t,c,null,n,o,v,i,!1),((g=h.onVnodeUpdated)||f)&&ho((()=>{g&&bo(g,n,t,e),f&&so(t,e,n,"updated");}),o);},$=(e,t,n,o,r,s,i)=>{for(let l=0;l<t.length;l++){const c=e[l],a=t[l],p=c.el&&(c.type===Ro||!Do(c,a)||6&c.shapeFlag||64&c.shapeFlag)?u(c.el):n;y(c,a,p,null,o,r,s,i,!0);}},R=(e,t,n,o,s,i,l)=>{if(n!==o){for(const c in o){if(L(c))continue;const a=o[c],u=n[c];a!==u&&"value"!==c&&r(e,c,u,a,l,t.children,s,i,Q);}if(n!==m)for(const c in n)L(c)||c in o||r(e,c,n[c],null,l,t.children,s,i,Q);"value"in o&&r(e,"value",n.value,o.value);}},F=(e,t,o,r,s,l,c,a,u)=>{const p=t.el=e?e.el:i(""),f=t.anchor=e?e.anchor:i("");let{patchFlag:d,dynamicChildren:h,slotScopeIds:m}=t;m&&(a=a?a.concat(m):m),null==e?(n(p,o,r),n(f,o,r),N(t.children,o,f,s,l,c,a,u)):d>0&&64&d&&h&&e.dynamicChildren?($(e.dynamicChildren,h,o,s,l,c,a),(null!=t.key||s&&t===s.subTree)&&_o(e,t,!0)):B(e,t,o,f,s,l,c,a,u);},A=(e,t,n,o,r,s,i,l,c)=>{t.slotScopeIds=l,null==e?512&t.shapeFlag?r.ctx.activate(t,n,o,i,c):M(t,n,o,r,s,i,c):P(e,t,c);},M=(e,t,n,o,r,s,i)=>{const l=e.component=function(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||lr,s={uid:cr++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,update:null,scope:new Y(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jn(o,r),emitsOptions:It(o,r),emit:null,emitted:null,propsDefaults:m,inheritAttrs:o.inheritAttrs,ctx:m,data:m,props:m,attrs:m,slots:m,refs:m,setupState:m,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};s.ctx={_:s},s.root=t?t.root:s,s.emit=Pt.bind(null,s),e.ce&&e.ce(s);return s}(e,o,r);if(mn(e)&&(l.ctx.renderer=te),function(e,t=!1){gr=t;const{props:n,children:o}=e.vnode,r=dr(e);(function(e,t,n,o=!1){const r={},s={};J(s,Wo,1),e.propsDefaults=Object.create(null),Gn(e,t,r,s);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);e.props=n?o?r:ft(r):e.type.props?r:s,e.attrs=s;})(e,n,r,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=yt(t),J(t,"_",n)):oo(t,e.slots={});}else e.slots={},t&&ro(e,t);J(e.slots,Wo,1);})(e,o);r?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=bt(new Proxy(e.ctx,sr));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?_r(e):null;pr(e),me();const r=$r(o,e,0,[e.props,n]);if(ge(),fr(),O(r)){if(r.then(fr,fr),t)return r.then((t=>{vr(e,t);})).catch((t=>{Fr(t,e,0);}));e.asyncDep=r;}else vr(e,r);}else br(e);}(e,t):void 0;gr=!1;}(l),l.asyncDep){if(r&&r.registerDep(l,I),!e.el){const e=l.subTree=qo(Ao);_(null,e,t,n);}}else I(l,e,t,n,r,s,i);},P=(e,t,n)=>{const o=t.component=e.component;if(function(e,t,n){const{props:o,children:r,component:s}=e,{props:i,children:l,patchFlag:c}=t,a=s.emitsOptions;if(t.dirs||t.transition)return !0;if(!(n&&c>=0))return !(!r&&!l||l&&l.$stable)||o!==i&&(o?!i||Kt(o,i,a):!!i);if(1024&c)return !0;if(16&c)return o?Kt(o,i,a):!!i;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(i[n]!==o[n]&&!Vt(a,n))return !0}}return !1}(e,t,n)){if(o.asyncDep&&!o.asyncResolved)return void V(o,t,n);o.next=t,function(e){const t=Or.indexOf(e);t>Pr&&Or.splice(t,1);}(o.update),o.update();}else t.component=e.component,t.el=e.el,o.vnode=t;},I=(e,t,n,o,r,s,i)=>{const l=new pe((()=>{if(e.isMounted){let t,{next:n,bu:o,u:c,parent:a,vnode:p}=e,f=n;n?(n.el=p.el,V(e,n,i)):n=p,l.allowRecurse=!1,o&&q(o),(t=n.props&&n.props.onVnodeBeforeUpdate)&&bo(t,a,n,p),l.allowRecurse=!0;const d=Ht(e),h=e.subTree;e.subTree=d,y(h,d,u(h.el),X(h),e,r,s),n.el=d.el,null===f&&Gt(e,d.el),c&&ho(c,r),(t=n.props&&n.props.onVnodeUpdated)&&ho((()=>bo(t,a,n,p)),r);}else {let i;const{el:c,props:a}=t,{bm:u,m:p,parent:f}=e;if(l.allowRecurse=!1,u&&q(u),(i=a&&a.onVnodeBeforeMount)&&bo(i,f,t),l.allowRecurse=!0,c&&oe){const n=()=>{e.subTree=Ht(e),oe(c,e.subTree,e,r,null);};dn(t)?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n();}else {const i=e.subTree=Ht(e);y(null,i,n,o,e,r,s),t.el=i.el;}if(p&&ho(p,r),i=a&&a.onVnodeMounted){const e=t;ho((()=>bo(i,f,e)),r);}256&t.shapeFlag&&e.a&&ho(e.a,r),e.isMounted=!0,t=n=o=null;}}),(()=>Kr(e.update)),e.scope),c=e.update=l.run.bind(l);c.id=e.uid,l.allowRecurse=c.allowRecurse=!0,c();},V=(e,t,n)=>{t.component=e;const o=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,o){const{props:r,attrs:s,vnode:{patchFlag:i}}=e,l=yt(r),[c]=e.propsOptions;let a=!1;if(!(o||i>0)||16&i){let o;Gn(e,t,r,s)&&(a=!0);for(const s in l)t&&(k(t,s)||(o=W(s))!==s&&k(t,o))||(c?!n||void 0===n[s]&&void 0===n[o]||(r[s]=qn(c,l,s,void 0,e,!0)):delete r[s]);if(s!==l)for(const e in s)t&&k(t,e)||(delete s[e],a=!0);}else if(8&i){const n=e.vnode.dynamicProps;for(let o=0;o<n.length;o++){let i=n[o];const u=t[i];if(c)if(k(s,i))u!==s[i]&&(s[i]=u,a=!0);else {const t=H(i);r[t]=qn(c,l,t,u,e,!1);}else u!==s[i]&&(s[i]=u,a=!0);}}a&&_e(e,"set","$attrs");}(e,t.props,o,n),((e,t,n)=>{const{vnode:o,slots:r}=e;let s=!0,i=m;if(32&o.shapeFlag){const e=t._;e?n&&1===e?s=!1:(x(r,t),n||1!==e||delete r._):(s=!t.$stable,oo(t,r)),i=t;}else t&&(ro(e,t),i={default:1});if(s)for(const l in r)eo(l)||l in i||delete r[l];})(e,t.children,n),me(),Zr(void 0,e.update),ge();},B=(e,t,n,o,r,s,i,l,c=!1)=>{const u=e&&e.children,p=e?e.shapeFlag:0,f=t.children,{patchFlag:d,shapeFlag:h}=t;if(d>0){if(128&d)return void U(u,f,n,o,r,s,i,l,c);if(256&d)return void j(u,f,n,o,r,s,i,l,c)}8&h?(16&p&&Q(u,r,s),f!==u&&a(n,f)):16&p?16&h?U(u,f,n,o,r,s,i,l,c):Q(u,r,s,!0):(8&p&&a(n,""),16&h&&N(f,n,o,r,s,i,l,c));},j=(e,t,n,o,r,s,i,l,c)=>{const a=(e=e||g).length,u=(t=t||g).length,p=Math.min(a,u);let f;for(f=0;f<p;f++){const o=t[f]=c?Yo(t[f]):Xo(t[f]);y(e[f],o,n,null,r,s,i,l,c);}a>u?Q(e,r,s,!0,!1,p):N(t,n,o,r,s,i,l,c,p);},U=(e,t,n,o,r,s,i,l,c)=>{let a=0;const u=t.length;let p=e.length-1,f=u-1;for(;a<=p&&a<=f;){const o=e[a],u=t[a]=c?Yo(t[a]):Xo(t[a]);if(!Do(o,u))break;y(o,u,n,null,r,s,i,l,c),a++;}for(;a<=p&&a<=f;){const o=e[p],a=t[f]=c?Yo(t[f]):Xo(t[f]);if(!Do(o,a))break;y(o,a,n,null,r,s,i,l,c),p--,f--;}if(a>p){if(a<=f){const e=f+1,p=e<u?t[e].el:o;for(;a<=f;)y(null,t[a]=c?Yo(t[a]):Xo(t[a]),n,p,r,s,i,l,c),a++;}}else if(a>f)for(;a<=p;)z(e[a],r,s,!0),a++;else {const d=a,h=a,m=new Map;for(a=h;a<=f;a++){const e=t[a]=c?Yo(t[a]):Xo(t[a]);null!=e.key&&m.set(e.key,a);}let v,b=0;const _=f-h+1;let S=!1,x=0;const C=new Array(_);for(a=0;a<_;a++)C[a]=0;for(a=d;a<=p;a++){const o=e[a];if(b>=_){z(o,r,s,!0);continue}let u;if(null!=o.key)u=m.get(o.key);else for(v=h;v<=f;v++)if(0===C[v-h]&&Do(o,t[v])){u=v;break}void 0===u?z(o,r,s,!0):(C[u-h]=a+1,u>=x?x=u:S=!0,y(o,t[u],n,null,r,s,i,l,c),b++);}const w=S?function(e){const t=e.slice(),n=[0];let o,r,s,i,l;const c=e.length;for(o=0;o<c;o++){const c=e[o];if(0!==c){if(r=n[n.length-1],e[r]<c){t[o]=r,n.push(o);continue}for(s=0,i=n.length-1;s<i;)l=s+i>>1,e[n[l]]<c?s=l+1:i=l;c<e[n[s]]&&(s>0&&(t[o]=n[s-1]),n[s]=o);}}s=n.length,i=n[s-1];for(;s-- >0;)n[s]=i,i=t[i];return n}(C):g;for(v=w.length-1,a=_-1;a>=0;a--){const e=h+a,p=t[e],f=e+1<u?t[e+1].el:o;0===C[a]?y(null,p,n,f,r,s,i,l,c):S&&(v<0||a!==w[v]?D(p,n,f,2):v--);}}},D=(e,t,o,r,s=null)=>{const{el:i,type:l,transition:c,children:a,shapeFlag:u}=e;if(6&u)return void D(e.component.subTree,t,o,r);if(128&u)return void e.suspense.move(t,o,r);if(64&u)return void l.move(e,t,o,te);if(l===Ro){n(i,t,o);for(let e=0;e<a.length;e++)D(a[e],t,o,r);return void n(e.anchor,t,o)}if(l===Mo)return void(({el:e,anchor:t},o,r)=>{let s;for(;e&&e!==t;)s=p(e),n(e,o,r),e=s;n(t,o,r);})(e,t,o);if(2!==r&&1&u&&c)if(0===r)c.beforeEnter(i),n(i,t,o),ho((()=>c.enter(i)),s);else {const{leave:e,delayLeave:r,afterLeave:s}=c,l=()=>n(i,t,o),a=()=>{e(i,(()=>{l(),s&&s();}));};r?r(i,l,a):a();}else n(i,t,o);},z=(e,t,n,o=!1,r=!1)=>{const{type:s,props:i,ref:l,children:c,dynamicChildren:a,shapeFlag:u,patchFlag:p,dirs:f}=e;if(null!=l&&yo(l,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const d=1&u&&f;let h;if((h=i&&i.onVnodeBeforeUnmount)&&bo(h,t,e),6&u)Z(e.component,n,o);else {if(128&u)return void e.suspense.unmount(n,o);d&&so(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,r,te,o):a&&(s!==Ro||p>0&&64&p)?Q(a,t,n,!1,!0):(s===Ro&&(128&p||256&p)||!r&&16&u)&&Q(c,t,n),o&&K(e);}((h=i&&i.onVnodeUnmounted)||d)&&ho((()=>{h&&bo(h,t,e),d&&so(e,null,t,"unmounted");}),n);},K=e=>{const{type:t,el:n,anchor:r,transition:s}=e;if(t===Ro)return void G(n,r);if(t===Mo)return void(({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=p(e),o(e),e=n;o(t);})(e);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave();};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:o}=s,r=()=>t(n,i);o?o(e.el,i,r):r();}else i();},G=(e,t)=>{let n;for(;e!==t;)n=p(e),o(e),e=n;o(t);},Z=(e,t,n)=>{const{bum:o,scope:r,update:s,subTree:i,um:l}=e;o&&q(o),r.stop(),s&&(s.active=!1,z(i,e,t,n)),l&&ho(l,t),ho((()=>{e.isUnmounted=!0;}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve());},Q=(e,t,n,o=!1,r=!1,s=0)=>{for(let i=s;i<e.length;i++)z(e[i],t,n,o,r);},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&z(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),Qr(),t._vnode=e;},te={p:y,um:z,m:D,r:K,mt:M,mc:N,pc:B,pbc:$,n:X,o:e};let ne,oe;return t&&([ne,oe]=t(te)),{render:ee,hydrate:ne,createApp:co(ee,ne)}}function yo(e,t,n,o,r=!1){if(T(e))return void e.forEach(((e,s)=>yo(e,t&&(T(t)?t[s]:t),n,o,r)));if(dn(o)&&!r)return;const s=4&o.shapeFlag?Sr(o.component)||o.component.proxy:o.el,i=r?null:s,{i:l,r:c}=e,a=t&&t.r,u=l.refs===m?l.refs={}:l.refs,p=l.setupState;if(null!=a&&a!==c&&(F(a)?(u[a]=null,k(p,a)&&(p[a]=null)):Ct(a)&&(a.value=null)),F(c)){const e=()=>{u[c]=i,k(p,c)&&(p[c]=i);};i?(e.id=-1,ho(e,n)):e();}else if(Ct(c)){const e=()=>{c.value=i;};i?(e.id=-1,ho(e,n)):e();}else R(c)&&$r(c,l,12,[i,u]);}function bo(e,t,n,o=null){Rr(e,t,7,[n,o]);}function _o(e,t,n=!1){const o=e.children,r=t.children;if(T(o)&&T(r))for(let s=0;s<o.length;s++){const e=o[s];let t=r[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=r[s]=Yo(r[s]),t.el=e.el),n||_o(e,t));}}const So=e=>e&&(e.disabled||""===e.disabled),xo=e=>"undefined"!=typeof SVGElement&&e instanceof SVGElement,Co=(e,t)=>{const n=e&&e.to;if(F(n)){if(t){return t(n)}return null}return n};function wo(e,t,n,{o:{insert:o},m:r},s=2){0===s&&o(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:c,children:a,props:u}=e,p=2===s;if(p&&o(i,t,n),(!p||So(u))&&16&c)for(let f=0;f<a.length;f++)r(a[f],t,n,2);p&&o(l,t,n);}const ko={__isTeleport:!0,process(e,t,n,o,r,s,i,l,c,a){const{mc:u,pc:p,pbc:f,o:{insert:d,querySelector:h,createText:m}}=a,g=So(t.props);let{shapeFlag:v,children:y,dynamicChildren:b}=t;if(null==e){const e=t.el=m(""),a=t.anchor=m("");d(e,n,o),d(a,n,o);const p=t.target=Co(t.props,h),f=t.targetAnchor=m("");p&&(d(f,p),i=i||xo(p));const b=(e,t)=>{16&v&&u(y,e,t,r,s,i,l,c);};g?b(n,a):p&&b(p,f);}else {t.el=e.el;const o=t.anchor=e.anchor,u=t.target=e.target,d=t.targetAnchor=e.targetAnchor,m=So(e.props),v=m?n:u,y=m?o:d;if(i=i||xo(u),b?(f(e.dynamicChildren,b,v,r,s,i,l),_o(e,t,!0)):c||p(e,t,v,y,r,s,i,l,!1),g)m||wo(t,n,o,a,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=Co(t.props,h);e&&wo(t,e,null,a,0);}else m&&wo(t,u,d,a,1);}},remove(e,t,n,o,{um:r,o:{remove:s}},i){const{shapeFlag:l,children:c,anchor:a,targetAnchor:u,target:p,props:f}=e;if(p&&s(u),(i||!So(f))&&(s(a),16&l))for(let d=0;d<c.length;d++){const e=c[d];r(e,t,n,!0,!!e.dynamicChildren);}},move:wo,hydrate:function(e,t,n,o,r,s,{o:{nextSibling:i,parentNode:l,querySelector:c}},a){const u=t.target=Co(t.props,c);if(u){const c=u._lpa||u.firstChild;16&t.shapeFlag&&(So(t.props)?(t.anchor=a(i(e),t,l(e),n,o,r,s),t.targetAnchor=c):(t.anchor=i(e),t.targetAnchor=a(c,t,u,n,o,r,s)),u._lpa=t.targetAnchor&&i(t.targetAnchor));}return t.anchor&&i(t.anchor)}},To="components";const No=Symbol();function Eo(e,t,n=!0,o=!1){const r=Bt||ar;if(r){const n=r.type;if(e===To){const e=Cr(n);if(e&&(e===t||e===H(t)||e===z(H(t))))return n}const s=$o(r[e]||n[e],t)||$o(r.appContext[e],t);return !s&&o?n:s}}function $o(e,t){return e&&(e[t]||e[H(t)]||e[z(H(t))])}const Ro=Symbol(void 0),Fo=Symbol(void 0),Ao=Symbol(void 0),Mo=Symbol(void 0),Oo=[];let Po=null;function Io(e=!1){Oo.push(Po=e?null:[]);}function Vo(){Oo.pop(),Po=Oo[Oo.length-1]||null;}let Bo=1;function Lo(e){Bo+=e;}function jo(e){return e.dynamicChildren=Bo>0?Po||g:null,Vo(),Bo>0&&Po&&Po.push(e),e}function Uo(e,t,n,o,r){return jo(qo(e,t,n,o,r,!0))}function Ho(e){return !!e&&!0===e.__v_isVNode}function Do(e,t){return e.type===t.type&&e.key===t.key}const Wo="__vInternal",zo=({key:e})=>null!=e?e:null,Ko=({ref:e})=>null!=e?F(e)||Ct(e)||R(e)?{i:Bt,r:e}:e:null;function Go(e,t=null,n=null,o=0,r=null,s=(e===Ro?0:1),i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zo(t),ref:t&&Ko(t),scopeId:Lt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null};return l?(er(c,n),128&s&&e.normalize(c)):n&&(c.shapeFlag|=F(n)?8:16),Bo>0&&!i&&Po&&(c.patchFlag>0||6&s)&&32!==c.patchFlag&&Po.push(c),c}const qo=function(e,t=null,n=null,o=0,s=null,i=!1){e&&e!==No||(e=Ao);if(Ho(e)){const o=Zo(e,t,!0);return n&&er(o,n),o}l=e,R(l)&&"__vccOpts"in l&&(e=e.__vccOpts);var l;if(t){t=Jo(t);let{class:e,style:n}=t;e&&!F(e)&&(t.class=c(e)),M(n)&&(vt(n)&&!T(n)&&(n=x({},n)),t.style=r(n));}const a=F(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:M(e)?4:R(e)?2:0;return Go(e,t,n,o,s,a,i,!0)};function Jo(e){return e?vt(e)||Wo in e?x({},e):e:null}function Zo(e,t,n=!1){const{props:o,ref:r,patchFlag:s,children:i}=e,l=t?tr(o||{},t):o;return {__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&zo(l),ref:t&&t.ref?n&&r?T(r)?r.concat(Ko(t)):[r,Ko(t)]:Ko(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ro?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zo(e.ssContent),ssFallback:e.ssFallback&&Zo(e.ssFallback),el:e.el,anchor:e.anchor}}function Qo(e=" ",t=0){return qo(Fo,null,e,t)}function Xo(e){return null==e||"boolean"==typeof e?qo(Ao):T(e)?qo(Ro,null,e.slice()):"object"==typeof e?Yo(e):qo(Fo,null,String(e))}function Yo(e){return null===e.el||e.memo?e:Zo(e)}function er(e,t){let n=0;const{shapeFlag:o}=e;if(null==t)t=null;else if(T(t))n=16;else if("object"==typeof t){if(1&o||64&o){const n=t.default;return void(n&&(n._c&&(n._d=!1),er(e,n()),n._c&&(n._d=!0)))}{n=32;const o=t._;o||Wo in t?3===o&&Bt&&(1===Bt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Bt;}}else R(t)?(t={default:t,_ctx:Bt},n=32):(t=String(t),64&o?(n=16,t=[Qo(t)]):n=8);e.children=t,e.shapeFlag|=n;}function tr(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const e in o)if("class"===e)t.class!==o.class&&(t.class=c([t.class,o.class]));else if("style"===e)t.style=r([t.style,o.style]);else if(_(e)){const n=t[e],r=o[e];n!==r&&(t[e]=n?[].concat(n,r):r);}else ""!==e&&(t[e]=o[e]);}return t}function nr(e){return e.some((e=>!Ho(e)||e.type!==Ao&&!(e.type===Ro&&!nr(e.children))))?e:null}const or=e=>e?dr(e)?Sr(e)||e.proxy:or(e.parent):null,rr=x(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>or(e.parent),$root:e=>or(e.root),$emit:e=>e.emit,$options:e=>jn(e),$forceUpdate:e=>()=>Kr(e.update),$nextTick:e=>zr.bind(e.proxy),$watch:e=>rs.bind(e)}),sr={get({_:e},t){const{ctx:n,setupState:o,data:r,props:s,accessCache:i,type:l,appContext:c}=e;let a;if("$"!==t[0]){const l=i[t];if(void 0!==l)switch(l){case 0:return o[t];case 1:return r[t];case 3:return n[t];case 2:return s[t]}else {if(o!==m&&k(o,t))return i[t]=0,o[t];if(r!==m&&k(r,t))return i[t]=1,r[t];if((a=e.propsOptions[0])&&k(a,t))return i[t]=2,s[t];if(n!==m&&k(n,t))return i[t]=3,n[t];In&&(i[t]=4);}}const u=rr[t];let p,f;return u?("$attrs"===t&&ve(e,0,t),u(e)):(p=l.__cssModules)&&(p=p[t])?p:n!==m&&k(n,t)?(i[t]=3,n[t]):(f=c.config.globalProperties,k(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:o,setupState:r,ctx:s}=e;if(r!==m&&k(r,t))r[t]=n;else if(o!==m&&k(o,t))o[t]=n;else if(k(e.props,t))return !1;return ("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:s}},i){let l;return void 0!==n[i]||e!==m&&k(e,i)||t!==m&&k(t,i)||(l=s[0])&&k(l,i)||k(o,i)||k(rr,i)||k(r.config.globalProperties,i)}},ir=x({},sr,{get(e,t){if(t!==Symbol.unscopables)return sr.get(e,t,e)},has:(e,t)=>"_"!==t[0]&&!n(t)}),lr=io();let cr=0;let ar=null;const ur=()=>ar||Bt,pr=e=>{ar=e,e.scope.on();},fr=()=>{ar&&ar.scope.off(),ar=null;};function dr(e){return 4&e.vnode.shapeFlag}let hr,mr,gr=!1;function vr(e,t,n){R(t)?e.render=t:M(t)&&(e.setupState=$t(t)),br(e);}function yr(e){hr=e,mr=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,ir));};}function br(e,t,n){const o=e.type;if(!e.render){if(hr&&!o.render){const t=o.template;if(t){const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:i}=o,l=x(x({isCustomElement:n,delimiters:s},r),i);o.render=hr(t,l);}}e.render=o.render||v,mr&&mr(e);}pr(e),me(),Vn(e),ge(),fr();}function _r(e){const t=t=>{e.exposed=t||{};};let n;return {get attrs(){return n||(n=function(e){return new Proxy(e.attrs,{get:(t,n)=>(ve(e,0,"$attrs"),t[n])})}(e))},slots:e.slots,emit:e.emit,expose:t}}function Sr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy($t(bt(e.exposed)),{get:(t,n)=>n in t?t[n]:n in rr?rr[n](e):void 0}))}const xr=/(?:^|[-_])(\w)/g;function Cr(e){return R(e)&&e.displayName||e.name}function wr(e,t,n=!1){let o=Cr(t);if(!o&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(o=e[1]);}if(!o&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};o=n(e.components||e.parent.type.components)||n(e.appContext.components);}return o?o.replace(xr,(e=>e.toUpperCase())).replace(/[-_]/g,""):n?"App":"Anonymous"}const kr=[];function Tr(e,...t){me();const n=kr.length?kr[kr.length-1].component:null,o=n&&n.appContext.config.warnHandler,r=function(){let e=kr[kr.length-1];if(!e)return [];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode;}return t}();if(o)$r(o,n,11,[e+t.join(""),n&&n.proxy,r.map((({vnode:e})=>`at <${wr(n,e.type)}>`)).join("\n"),r]);else {const n=[`[Vue warn]: ${e}`,...t];r.length&&n.push("\n",...function(e){const t=[];return e.forEach(((e,n)=>{t.push(...0===n?[]:["\n"],...function({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=` at <${wr(e.component,e.type,!!e.component&&null==e.component.parent)}`,r=">"+n;return e.props?[o,...Nr(e.props),r]:[o+r]}(e));})),t}(r)),console.warn(...n);}ge();}function Nr(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach((n=>{t.push(...Er(n,e[n]));})),n.length>3&&t.push(" ..."),t}function Er(e,t,n){return F(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"==typeof t||"boolean"==typeof t||null==t?n?t:[`${e}=${t}`]:Ct(t)?(t=Er(e,yt(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):R(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=yt(t),n?t:[`${e}=`,t])}function $r(e,t,n,o){let r;try{r=o?e(...o):e();}catch(s){Fr(s,t,n);}return r}function Rr(e,t,n,o){if(R(e)){const r=$r(e,t,n,o);return r&&O(r)&&r.catch((e=>{Fr(e,t,n);})),r}const r=[];for(let s=0;s<e.length;s++)r.push(Rr(e[s],t,n,o));return r}function Fr(e,t,n,o=!0){if(t){let o=t.parent;const r=t.proxy,s=n;for(;o;){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,s))return;o=o.parent;}const i=t.appContext.config.errorHandler;if(i)return void $r(i,null,10,[e,r,s])}!function(e,t,n,o=!0){console.error(e);}(e,0,0,o);}let Ar=!1,Mr=!1;const Or=[];let Pr=0;const Ir=[];let Vr=null,Br=0;const Lr=[];let jr=null,Ur=0;const Hr=Promise.resolve();let Dr=null,Wr=null;function zr(e){const t=Dr||Hr;return e?t.then(this?e.bind(this):e):t}function Kr(e){Or.length&&Or.includes(e,Ar&&e.allowRecurse?Pr+1:Pr)||e===Wr||(null==e.id?Or.push(e):Or.splice(function(e){let t=Pr+1,n=Or.length;for(;t<n;){const o=t+n>>>1;Xr(Or[o])<e?t=o+1:n=o;}return t}(e.id),0,e),Gr());}function Gr(){Ar||Mr||(Mr=!0,Dr=Hr.then(Yr));}function qr(e,t,n,o){T(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?o+1:o)||n.push(e),Gr();}function Jr(e){qr(e,jr,Lr,Ur);}function Zr(e,t=null){if(Ir.length){for(Wr=t,Vr=[...new Set(Ir)],Ir.length=0,Br=0;Br<Vr.length;Br++)Vr[Br]();Vr=null,Br=0,Wr=null,Zr(e,t);}}function Qr(e){if(Lr.length){const e=[...new Set(Lr)];if(Lr.length=0,jr)return void jr.push(...e);for(jr=e,jr.sort(((e,t)=>Xr(e)-Xr(t))),Ur=0;Ur<jr.length;Ur++)jr[Ur]();jr=null,Ur=0;}}const Xr=e=>null==e.id?1/0:e.id;function Yr(e){Mr=!1,Ar=!0,Zr(e),Or.sort(((e,t)=>Xr(e)-Xr(t)));try{for(Pr=0;Pr<Or.length;Pr++){const e=Or[Pr];e&&!1!==e.active&&$r(e,null,14);}}finally{Pr=0,Or.length=0,Qr(),Ar=!1,Dr=null,(Or.length||Ir.length||Lr.length)&&Yr(e);}}function es(e,t){return os(e,null,{flush:"post"})}const ts={};function ns(e,t,n){return os(e,t,n)}function os(e,t,{immediate:n,deep:o,flush:r}=m){const s=ar;let i,l,c=!1,a=!1;if(Ct(e)?(i=()=>e.value,c=!!e._shallow):mt(e)?(i=()=>e,o=!0):T(e)?(a=!0,c=e.some(mt),i=()=>e.map((e=>Ct(e)?e.value:mt(e)?is(e):R(e)?$r(e,s,2):void 0))):i=R(e)?t?()=>$r(e,s,2):()=>{if(!s||!s.isUnmounted)return l&&l(),Rr(e,s,3,[u])}:v,t&&o){const e=i;i=()=>is(e());}let u=e=>{l=h.onStop=()=>{$r(e,s,4);};},p=a?[]:ts;const f=()=>{if(h.active)if(t){const e=h.run();(o||c||(a?e.some(((e,t)=>G(e,p[t]))):G(e,p)))&&(l&&l(),Rr(t,s,3,[e,p===ts?void 0:p,u]),p=e);}else h.run();};let d;f.allowRecurse=!!t,d="sync"===r?f:"post"===r?()=>ho(f,s&&s.suspense):()=>{!s||s.isMounted?function(e){qr(e,Vr,Ir,Br);}(f):f();};const h=new pe(i,d);return t?n?f():p=h.run():"post"===r?ho(h.run.bind(h),s&&s.suspense):h.run(),()=>{h.stop(),s&&s.scope&&C(s.scope.effects,h);}}function rs(e,t,n){const o=this.proxy,r=F(e)?e.includes(".")?ss(o,e):()=>o[e]:e.bind(o,o);let s;R(t)?s=t:(s=t.handler,n=t);const i=ar;pr(this);const l=os(r,s.bind(o),n);return i?pr(i):fr(),l}function ss(e,t){const n=t.split(".");return ()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function is(e,t=new Set){if(!M(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),Ct(e))is(e.value,t);else if(T(e))for(let n=0;n<e.length;n++)is(e[n],t);else if(E(e)||N(e))e.forEach((e=>{is(e,t);}));else if(V(e))for(const n in e)is(e[n],t);return e}function ls(){const e=ur();return e.setupContext||(e.setupContext=_r(e))}function cs(e,t,n){const o=arguments.length;return 2===o?M(t)&&!T(t)?Ho(t)?qo(e,null,[t]):qo(e,t):qo(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):3===o&&Ho(n)&&(n=[n]),qo(e,t,n))}const as=Symbol("");function us(e,t){const n=e.memo;if(n.length!=t.length)return !1;for(let o=0;o<n.length;o++)if(n[o]!==t[o])return !1;return Bo>0&&Po&&Po.push(e),!0}const ps="3.2.1",fs="undefined"!=typeof document?document:null,ds=new Map,hs={insert:(e,t,n)=>{t.insertBefore(e,n||null);},remove:e=>{const t=e.parentNode;t&&t.removeChild(e);},createElement:(e,t,n,o)=>{const r=t?fs.createElementNS("http://www.w3.org/2000/svg",e):fs.createElement(e,n?{is:n}:void 0);return "select"===e&&o&&null!=o.multiple&&r.setAttribute("multiple",o.multiple),r},createText:e=>fs.createTextNode(e),createComment:e=>fs.createComment(e),setText:(e,t)=>{e.nodeValue=t;},setElementText:(e,t)=>{e.textContent=t;},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>fs.querySelector(e),setScopeId(e,t){e.setAttribute(t,"");},cloneNode(e){const t=e.cloneNode(!0);return "_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,o){const r=n?n.previousSibling:t.lastChild;let s=ds.get(e);if(!s){const t=fs.createElement("template");if(t.innerHTML=o?`<svg>${e}</svg>`:e,s=t.content,o){const e=s.firstChild;for(;e.firstChild;)s.appendChild(e.firstChild);s.removeChild(e);}ds.set(e,s);}return t.insertBefore(s.cloneNode(!0),n),[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const ms=/\s*!important$/;function gs(e,t,n){if(T(n))n.forEach((n=>gs(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else {const o=function(e,t){const n=ys[t];if(n)return n;let o=H(t);if("filter"!==o&&o in e)return ys[t]=o;o=z(o);for(let r=0;r<vs.length;r++){const n=vs[r]+o;if(n in e)return ys[t]=n}return t}(e,t);ms.test(n)?e.setProperty(W(o),n.replace(ms,""),"important"):e[o]=n;}}const vs=["Webkit","Moz","ms"],ys={};const bs="http://www.w3.org/1999/xlink";let _s=Date.now,Ss=!1;if("undefined"!=typeof window){_s()>document.createEvent("Event").timeStamp&&(_s=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Ss=!!(e&&Number(e[1])<=53);}let xs=0;const Cs=Promise.resolve(),ws=()=>{xs=0;};function ks(e,t,n,o){e.addEventListener(t,n,o);}function Ts(e,t,n,o,r=null){const s=e._vei||(e._vei={}),i=s[t];if(o&&i)i.value=o;else {const[n,l]=function(e){let t;if(Ns.test(e)){let n;for(t={};n=e.match(Ns);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0;}return [W(e.slice(2)),t]}(t);if(o){ks(e,n,s[t]=function(e,t){const n=e=>{const o=e.timeStamp||_s();(Ss||o>=n.attached-1)&&Rr(function(e,t){if(T(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0;},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e]);};return n.value=e,n.attached=(()=>xs||(Cs.then(ws),xs=_s()))(),n}(o,r),l);}else i&&(!function(e,t,n,o){e.removeEventListener(t,n,o);}(e,n,i,l),s[t]=void 0);}}const Ns=/(?:Once|Passive|Capture)$/;const Es=/^on[a-z]/;function $s(e,t){const n=fn(e);class o extends Fs{constructor(e){super(n,e,t);}}return o.def=n,o}const Rs="undefined"!=typeof HTMLElement?HTMLElement:class{};class Fs extends Rs{constructor(e,t={},n){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"});for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);new MutationObserver((e=>{for(const t of e)this._setAttr(t.attributeName);})).observe(this,{attributes:!0});}connectedCallback(){this._connected=!0,this._instance||(this._resolveDef(),Ni(this._createVNode(),this.shadowRoot));}disconnectedCallback(){this._connected=!1,zr((()=>{this._connected||(Ni(null,this.shadowRoot),this._instance=null);}));}_resolveDef(){if(this._resolved)return;const e=e=>{this._resolved=!0;for(const r of Object.keys(this))"_"!==r[0]&&this._setProp(r,this[r]);const{props:t,styles:n}=e,o=t?T(t)?t:Object.keys(t):[];for(const r of o.map(H))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(e){this._setProp(r,e);}});this._applyStyles(n);},t=this._def.__asyncLoader;t?t().then(e):e(this._def);}_setAttr(e){this._setProp(H(e),Z(this.getAttribute(e)),!1);}_getProp(e){return this._props[e]}_setProp(e,t,n=!0){t!==this._props[e]&&(this._props[e]=t,this._instance&&Ni(this._createVNode(),this.shadowRoot),n&&(!0===t?this.setAttribute(W(e),""):"string"==typeof t||"number"==typeof t?this.setAttribute(W(e),t+""):t||this.removeAttribute(W(e))));}_createVNode(){const e=qo(this._def,x({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0,e.emit=(e,...t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}));};let t=this;for(;t=t&&(t.parentNode||t.host);)if(t instanceof Fs){e.parent=t._instance;break}}),e}_applyStyles(e){e&&e.forEach((e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t);}));}}function As(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{As(n.activeBranch,t);}));}for(;e.component;)e=e.component.subTree;if(1&e.shapeFlag&&e.el)Ms(e.el,t);else if(e.type===Ro)e.children.forEach((e=>As(e,t)));else if(e.type===Mo){let{el:n,anchor:o}=e;for(;n&&(Ms(n,t),n!==o);)n=n.nextSibling;}}function Ms(e,t){if(1===e.nodeType){const n=e.style;for(const e in t)n.setProperty(`--${e}`,t[e]);}}const Os="transition",Ps="animation",Is=(e,{slots:t})=>cs(rn,Us(e),t);Is.displayName="Transition";const Vs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Bs=Is.props=x({},rn.props,Vs),Ls=(e,t=[])=>{T(e)?e.forEach((e=>e(...t))):e&&e(...t);},js=e=>!!e&&(T(e)?e.some((e=>e.length>1)):e.length>1);function Us(e){const t={};for(const x in e)x in Vs||(t[x]=e[x]);if(!1===e.css)return t;const{name:n="v",type:o,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:a=i,appearToClass:u=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=e,h=function(e){if(null==e)return null;if(M(e))return [Hs(e.enter),Hs(e.leave)];{const t=Hs(e);return [t,t]}}(r),m=h&&h[0],g=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:_,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:w=y,onAppearCancelled:k=b}=t,T=(e,t,n)=>{Ws(e,t?u:l),Ws(e,t?a:i),n&&n();},N=(e,t)=>{Ws(e,d),Ws(e,f),t&&t();},E=e=>(t,n)=>{const r=e?w:y,i=()=>T(t,e,n);Ls(r,[t,i]),zs((()=>{Ws(t,e?c:s),Ds(t,e?u:l),js(r)||Gs(t,o,m,i);}));};return x(t,{onBeforeEnter(e){Ls(v,[e]),Ds(e,s),Ds(e,i);},onBeforeAppear(e){Ls(C,[e]),Ds(e,c),Ds(e,a);},onEnter:E(!1),onAppear:E(!0),onLeave(e,t){const n=()=>N(e,t);Ds(e,p),Qs(),Ds(e,f),zs((()=>{Ws(e,p),Ds(e,d),js(_)||Gs(e,o,g,n);})),Ls(_,[e,n]);},onEnterCancelled(e){T(e,!1),Ls(b,[e]);},onAppearCancelled(e){T(e,!0),Ls(k,[e]);},onLeaveCancelled(e){N(e),Ls(S,[e]);}})}function Hs(e){return Z(e)}function Ds(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t);}function Ws(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0));}function zs(e){requestAnimationFrame((()=>{requestAnimationFrame(e);}));}let Ks=0;function Gs(e,t,n,o){const r=e._endId=++Ks,s=()=>{r===e._endId&&o();};if(n)return setTimeout(s,n);const{type:i,timeout:l,propCount:c}=qs(e,t);if(!i)return o();const a=i+"end";let u=0;const p=()=>{e.removeEventListener(a,f),s();},f=t=>{t.target===e&&++u>=c&&p();};setTimeout((()=>{u<c&&p();}),l+1),e.addEventListener(a,f);}function qs(e,t){const n=window.getComputedStyle(e),o=e=>(n[e]||"").split(", "),r=o("transitionDelay"),s=o("transitionDuration"),i=Js(r,s),l=o("animationDelay"),c=o("animationDuration"),a=Js(l,c);let u=null,p=0,f=0;t===Os?i>0&&(u=Os,p=i,f=s.length):t===Ps?a>0&&(u=Ps,p=a,f=c.length):(p=Math.max(i,a),u=p>0?i>a?Os:Ps:null,f=u?u===Os?s.length:c.length:0);return {type:u,timeout:p,propCount:f,hasTransform:u===Os&&/\b(transform|all)(,|$)/.test(n.transitionProperty)}}function Js(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>Zs(t)+Zs(e[n]))))}function Zs(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Qs(){return document.body.offsetHeight}const Xs=new WeakMap,Ys=new WeakMap,ei={name:"TransitionGroup",props:x({},Bs,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ur(),o=nn();let r,s;return $n((()=>{if(!r.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!function(e,t,n){const o=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&o.classList.remove(e)));}));n.split(/\s+/).forEach((e=>e&&o.classList.add(e))),o.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(o);const{hasTransform:s}=qs(o);return r.removeChild(o),s}(r[0].el,n.vnode.el,t))return;r.forEach(ti),r.forEach(ni);const o=r.filter(oi);Qs(),o.forEach((e=>{const n=e.el,o=n.style;Ds(n,t),o.transform=o.webkitTransform=o.transitionDuration="";const r=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",r),n._moveCb=null,Ws(n,t));};n.addEventListener("transitionend",r);}));})),()=>{const i=yt(e),l=Us(i);let c=i.tag||Ro;r=s,s=t.default?pn(t.default()):[];for(let e=0;e<s.length;e++){const t=s[e];null!=t.key&&un(t,ln(t,l,o,n));}if(r)for(let e=0;e<r.length;e++){const t=r[e];un(t,ln(t,l,o,n)),Xs.set(t,t.el.getBoundingClientRect());}return qo(c,null,s)}}};function ti(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb();}function ni(e){Ys.set(e,e.el.getBoundingClientRect());}function oi(e){const t=Xs.get(e),n=Ys.get(e),o=t.left-n.left,r=t.top-n.top;if(o||r){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${o}px,${r}px)`,t.transitionDuration="0s",e}}const ri=e=>{const t=e.props["onUpdate:modelValue"];return T(t)?e=>q(t,e):t};function si(e){e.target.composing=!0;}function ii(e){const t=e.target;t.composing&&(t.composing=!1,function(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n);}(t,"input"));}const li={created(e,{modifiers:{lazy:t,trim:n,number:o}},r){e._assign=ri(r);const s=o||r.props&&"number"===r.props.type;ks(e,t?"change":"input",(t=>{if(t.target.composing)return;let o=e.value;n?o=o.trim():s&&(o=Z(o)),e._assign(o);})),n&&ks(e,"change",(()=>{e.value=e.value.trim();})),t||(ks(e,"compositionstart",si),ks(e,"compositionend",ii),ks(e,"change",ii));},mounted(e,{value:t}){e.value=null==t?"":t;},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:r}},s){if(e._assign=ri(s),e.composing)return;if(document.activeElement===e){if(n)return;if(o&&e.value.trim()===t)return;if((r||"number"===e.type)&&Z(e.value)===t)return}const i=null==t?"":t;e.value!==i&&(e.value=i);}},ci={deep:!0,created(e,t,n){e._assign=ri(n),ks(e,"change",(()=>{const t=e._modelValue,n=di(e),o=e.checked,r=e._assign;if(T(t)){const e=d(t,n),s=-1!==e;if(o&&!s)r(t.concat(n));else if(!o&&s){const n=[...t];n.splice(e,1),r(n);}}else if(E(t)){const e=new Set(t);o?e.add(n):e.delete(n),r(e);}else r(hi(e,o));}));},mounted:ai,beforeUpdate(e,t,n){e._assign=ri(n),ai(e,t,n);}};function ai(e,{value:t,oldValue:n},o){e._modelValue=t,T(t)?e.checked=d(t,o.props.value)>-1:E(t)?e.checked=t.has(o.props.value):t!==n&&(e.checked=f(t,hi(e,!0)));}const ui={created(e,{value:t},n){e.checked=f(t,n.props.value),e._assign=ri(n),ks(e,"change",(()=>{e._assign(di(e));}));},beforeUpdate(e,{value:t,oldValue:n},o){e._assign=ri(o),t!==n&&(e.checked=f(t,o.props.value));}},pi={deep:!0,created(e,{value:t,modifiers:{number:n}},o){const r=E(t);ks(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?Z(di(e)):di(e)));e._assign(e.multiple?r?new Set(t):t:t[0]);})),e._assign=ri(o);},mounted(e,{value:t}){fi(e,t);},beforeUpdate(e,t,n){e._assign=ri(n);},updated(e,{value:t}){fi(e,t);}};function fi(e,t){const n=e.multiple;if(!n||T(t)||E(t)){for(let o=0,r=e.options.length;o<r;o++){const r=e.options[o],s=di(r);if(n)r.selected=T(t)?d(t,s)>-1:t.has(s);else if(f(di(r),t))return void(e.selectedIndex!==o&&(e.selectedIndex=o))}n||-1===e.selectedIndex||(e.selectedIndex=-1);}}function di(e){return "_value"in e?e._value:e.value}function hi(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const mi={created(e,t,n){gi(e,t,n,null,"created");},mounted(e,t,n){gi(e,t,n,null,"mounted");},beforeUpdate(e,t,n,o){gi(e,t,n,o,"beforeUpdate");},updated(e,t,n,o){gi(e,t,n,o,"updated");}};function gi(e,t,n,o,r){let s;switch(e.tagName){case"SELECT":s=pi;break;case"TEXTAREA":s=li;break;default:switch(n.props&&n.props.type){case"checkbox":s=ci;break;case"radio":s=ui;break;default:s=li;}}const i=s[r];i&&i(e,t,n,o);}const vi=["ctrl","shift","alt","meta"],yi={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>vi.some((n=>e[`${n}Key`]&&!t.includes(n)))},bi={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_i={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Si(e,t);},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e);},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),Si(e,!0),o.enter(e)):o.leave(e,(()=>{Si(e,!1);})):Si(e,t));},beforeUnmount(e,{value:t}){Si(e,t);}};function Si(e,t){e.style.display=t?e._vod:"none";}const xi=x({patchProp:(e,t,n,r,s=!1,i,l,c,a)=>{"class"===t?function(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t;}(e,r,s):"style"===t?function(e,t,n){const o=e.style;if(n)if(F(n)){if(t!==n){const t=o.display;o.cssText=n,"_vod"in e&&(o.display=t);}}else {for(const e in n)gs(o,e,n[e]);if(t&&!F(t))for(const e in t)null==n[e]&&gs(o,e,"");}else e.removeAttribute("style");}(e,n,r):_(t)?S(t)||Ts(e,t,0,r,l):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):function(e,t,n,o){if(o)return "innerHTML"===t||!!(t in e&&Es.test(t)&&R(n));if("spellcheck"===t||"draggable"===t)return !1;if("form"===t)return !1;if("list"===t&&"INPUT"===e.tagName)return !1;if("type"===t&&"TEXTAREA"===e.tagName)return !1;if(Es.test(t)&&F(n))return !1;return t in e}(e,t,r,s))?function(e,t,n,o,r,s,i){if("innerHTML"===t||"textContent"===t)return o&&i(o,r,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName){e._value=n;const o=null==n?"":n;return e.value!==o&&(e.value=o),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const o=typeof e[t];if(""===n&&"boolean"===o)return void(e[t]=!0);if(null==n&&"string"===o)return e[t]="",void e.removeAttribute(t);if("number"===o){try{e[t]=0;}catch(l){}return void e.removeAttribute(t)}}try{e[t]=n;}catch(c){}}(e,t,r,i,l,c,a):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),function(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(bs,t.slice(6,t.length)):e.setAttributeNS(bs,t,n);else {const r=o(t);null==n||r&&!1===n?e.removeAttribute(t):e.setAttribute(t,r?"":n);}}(e,t,r,s));}},hs);let Ci,wi=!1;function ki(){return Ci||(Ci=mo(xi))}function Ti(){return Ci=wi?Ci:go(xi),wi=!0,Ci}const Ni=(...e)=>{ki().render(...e);},Ei=(...e)=>{Ti().hydrate(...e);};function $i(e){if(F(e)){return document.querySelector(e)}return e}function Ri(e){throw e}function Fi(e){}function Ai(e,t,n,o){const r=new SyntaxError(String(e));return r.code=e,r.loc=t,r}const Mi=Symbol(""),Oi=Symbol(""),Pi=Symbol(""),Ii=Symbol(""),Vi=Symbol(""),Bi=Symbol(""),Li=Symbol(""),ji=Symbol(""),Ui=Symbol(""),Hi=Symbol(""),Di=Symbol(""),Wi=Symbol(""),zi=Symbol(""),Ki=Symbol(""),Gi=Symbol(""),qi=Symbol(""),Ji=Symbol(""),Zi=Symbol(""),Qi=Symbol(""),Xi=Symbol(""),Yi=Symbol(""),el=Symbol(""),tl=Symbol(""),nl=Symbol(""),ol=Symbol(""),rl=Symbol(""),sl=Symbol(""),il=Symbol(""),ll=Symbol(""),cl=Symbol(""),al=Symbol(""),ul=Symbol(""),pl=Symbol(""),fl=Symbol(""),dl=Symbol(""),hl=Symbol(""),ml=Symbol(""),gl=Symbol(""),vl=Symbol(""),yl=Symbol(""),bl={[Mi]:"Fragment",[Oi]:"Teleport",[Pi]:"Suspense",[Ii]:"KeepAlive",[Vi]:"BaseTransition",[Bi]:"openBlock",[Li]:"createBlock",[ji]:"createElementBlock",[Ui]:"createVNode",[Hi]:"createElementVNode",[Di]:"createCommentVNode",[Wi]:"createTextVNode",[zi]:"createStaticVNode",[Ki]:"resolveComponent",[Gi]:"resolveDynamicComponent",[qi]:"resolveDirective",[Ji]:"resolveFilter",[Zi]:"withDirectives",[Qi]:"renderList",[Xi]:"renderSlot",[Yi]:"createSlots",[el]:"toDisplayString",[tl]:"mergeProps",[nl]:"normalizeClass",[ol]:"normalizeStyle",[rl]:"normalizeProps",[sl]:"guardReactiveProps",[il]:"toHandlers",[ll]:"camelize",[cl]:"capitalize",[al]:"toHandlerKey",[ul]:"setBlockTracking",[pl]:"pushScopeId",[fl]:"popScopeId",[dl]:"withScopeId",[hl]:"withCtx",[ml]:"unref",[gl]:"isRef",[vl]:"withMemo",[yl]:"isMemoSame"};const _l={source:"",start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function Sl(e,t,n,o,r,s,i,l=!1,c=!1,a=!1,u=_l){return e&&(l?(e.helper(Bi),e.helper(Zl(e.inSSR,a))):e.helper(Jl(e.inSSR,a)),i&&e.helper(Zi)),{type:13,tag:t,props:n,children:o,patchFlag:r,dynamicProps:s,directives:i,isBlock:l,disableTracking:c,isComponent:a,loc:u}}function xl(e,t=_l){return {type:17,loc:t,elements:e}}function Cl(e,t=_l){return {type:15,loc:t,properties:e}}function wl(e,t){return {type:16,loc:_l,key:F(e)?kl(e,!0):e,value:t}}function kl(e,t=!1,n=_l,o=0){return {type:4,loc:n,content:e,isStatic:t,constType:t?3:o}}function Tl(e,t=_l){return {type:8,loc:t,children:e}}function Nl(e,t=[],n=_l){return {type:14,loc:n,callee:e,arguments:t}}function El(e,t,n=!1,o=!1,r=_l){return {type:18,params:e,returns:t,newline:n,isSlot:o,loc:r}}function $l(e,t,n,o=!0){return {type:19,test:e,consequent:t,alternate:n,newline:o,loc:_l}}const Rl=e=>4===e.type&&e.isStatic,Fl=(e,t)=>e===t||e===W(t);function Al(e){return Fl(e,"Teleport")?Oi:Fl(e,"Suspense")?Pi:Fl(e,"KeepAlive")?Ii:Fl(e,"BaseTransition")?Vi:void 0}const Ml=/^\d|[^\$\w]/,Ol=e=>!Ml.test(e),Pl=/[A-Za-z_$\xA0-\uFFFF]/,Il=/[\.\?\w$\xA0-\uFFFF]/,Vl=/\s+[.[]\s*|\s*[.[]\s+/g,Bl=e=>{e=e.trim().replace(Vl,(e=>e.trim()));let t=0,n=[],o=0,r=0,s=null;for(let i=0;i<e.length;i++){const l=e.charAt(i);switch(t){case 0:if("["===l)n.push(t),t=1,o++;else if("("===l)n.push(t),t=2,r++;else if(!(0===i?Pl:Il).test(l))return !1;break;case 1:"'"===l||'"'===l||"`"===l?(n.push(t),t=3,s=l):"["===l?o++:"]"===l&&(--o||(t=n.pop()));break;case 2:if("'"===l||'"'===l||"`"===l)n.push(t),t=3,s=l;else if("("===l)r++;else if(")"===l){if(i===e.length-1)return !1;--r||(t=n.pop());}break;case 3:l===s&&(t=n.pop(),s=null);}}return !o&&!r};function Ll(e,t,n){const o={source:e.source.substr(t,n),start:jl(e.start,e.source,t),end:e.end};return null!=n&&(o.end=jl(e.start,e.source,t+n)),o}function jl(e,t,n=t.length){return Ul(x({},e),t,n)}function Ul(e,t,n=t.length){let o=0,r=-1;for(let s=0;s<n;s++)10===t.charCodeAt(s)&&(o++,r=s);return e.offset+=n,e.line+=o,e.column=-1===r?e.column+n:n-r,e}function Hl(e,t,n=!1){for(let o=0;o<e.props.length;o++){const r=e.props[o];if(7===r.type&&(n||r.exp)&&(F(t)?r.name===t:t.test(r.name)))return r}}function Dl(e,t,n=!1,o=!1){for(let r=0;r<e.props.length;r++){const s=e.props[r];if(6===s.type){if(n)continue;if(s.name===t&&(s.value||o))return s}else if("bind"===s.name&&(s.exp||o)&&Wl(s.arg,t))return s}}function Wl(e,t){return !(!e||!Rl(e)||e.content!==t)}function zl(e){return 5===e.type||2===e.type}function Kl(e){return 7===e.type&&"slot"===e.name}function Gl(e){return 1===e.type&&3===e.tagType}function ql(e){return 1===e.type&&2===e.tagType}function Jl(e,t){return e||t?Ui:Hi}function Zl(e,t){return e||t?Li:ji}const Ql=new Set([rl,sl]);function Xl(e,t=[]){if(e&&!F(e)&&14===e.type){const n=e.callee;if(!F(n)&&Ql.has(n))return Xl(e.arguments[0],t.concat(e))}return [e,t]}function Yl(e,t,n){let o;let r,s=13===e.type?e.props:e.arguments[2],i=[];if(s&&!F(s)&&14===s.type){const e=Xl(s);s=e[0],i=e[1],r=i[i.length-1];}if(null==s||F(s))o=Cl([t]);else if(14===s.type){const e=s.arguments[0];F(e)||15!==e.type?s.callee===il?o=Nl(n.helper(tl),[Cl([t]),s]):s.arguments.unshift(Cl([t])):e.properties.unshift(t),!o&&(o=s);}else if(15===s.type){let e=!1;if(4===t.key.type){const n=t.key.content;e=s.properties.some((e=>4===e.key.type&&e.key.content===n));}e||s.properties.unshift(t),o=s;}else o=Nl(n.helper(tl),[Cl([t]),s]),r&&r.callee===sl&&(r=i[i.length-2]);13===e.type?r?r.arguments[0]=o:e.props=o:r?r.arguments[0]=o:e.arguments[2]=o;}function ec(e,t){return `_${t}_${e.replace(/[^\w]/g,"_")}`}function tc(e,{helper:t,removeHelper:n,inSSR:o}){e.isBlock||(e.isBlock=!0,n(Jl(o,e.isComponent)),t(Bi),t(Zl(o,e.isComponent)));}const nc=/&(gt|lt|amp|apos|quot);/g,oc={gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},rc={delimiters:["{{","}}"],getNamespace:()=>0,getTextMode:()=>0,isVoidTag:y,isPreTag:y,isCustomElement:y,decodeEntities:e=>e.replace(nc,((e,t)=>oc[t])),onError:Ri,onWarn:Fi,comments:!1};function sc(e,t={}){const n=function(e,t){const n=x({},rc);let o;for(o in t)n[o]=void 0===t[o]?rc[o]:t[o];return {options:n,column:1,line:1,offset:0,originalSource:e,source:e,inPre:!1,inVPre:!1,onWarn:n.onWarn}}(e,t),o=bc(n);return function(e,t=_l){return {type:0,children:e,helpers:[],components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:t}}(ic(n,0,[]),_c(n,o))}function ic(e,t,n){const o=Sc(n),r=o?o.ns:0,s=[];for(;!Tc(e,t,n);){const i=e.source;let l;if(0===t||1===t)if(!e.inVPre&&xc(i,e.options.delimiters[0]))l=gc(e,t);else if(0===t&&"<"===i[0])if(1===i.length);else if("!"===i[1])l=xc(i,"\x3c!--")?ac(e):xc(i,"<!DOCTYPE")?uc(e):xc(i,"<![CDATA[")&&0!==r?cc(e,n):uc(e);else if("/"===i[1])if(2===i.length);else {if(">"===i[2]){Cc(e,3);continue}if(/[a-z]/i.test(i[2])){dc(e,1,o);continue}l=uc(e);}else /[a-z]/i.test(i[1])?l=pc(e,n):"?"===i[1]&&(l=uc(e));if(l||(l=vc(e,t)),T(l))for(let e=0;e<l.length;e++)lc(s,l[e]);else lc(s,l);}let i=!1;if(2!==t&&1!==t){const t="preserve"!==e.options.whitespace;for(let n=0;n<s.length;n++){const o=s[n];if(e.inPre||2!==o.type)3!==o.type||e.options.comments||(i=!0,s[n]=null);else if(/[^\t\r\n\f ]/.test(o.content))t&&(o.content=o.content.replace(/[\t\r\n\f ]+/g," "));else {const e=s[n-1],r=s[n+1];!e||!r||t&&(3===e.type||3===r.type||1===e.type&&1===r.type&&/[\r\n]/.test(o.content))?(i=!0,s[n]=null):o.content=" ";}}if(e.inPre&&o&&e.options.isPreTag(o.tag)){const e=s[0];e&&2===e.type&&(e.content=e.content.replace(/^\r?\n/,""));}}return i?s.filter(Boolean):s}function lc(e,t){if(2===t.type){const n=Sc(e);if(n&&2===n.type&&n.loc.end.offset===t.loc.start.offset)return n.content+=t.content,n.loc.end=t.loc.end,void(n.loc.source+=t.loc.source)}e.push(t);}function cc(e,t){Cc(e,9);const n=ic(e,3,t);return 0===e.source.length||Cc(e,3),n}function ac(e){const t=bc(e);let n;const o=/--(\!)?>/.exec(e.source);if(o){n=e.source.slice(4,o.index);const t=e.source.slice(0,o.index);let r=1,s=0;for(;-1!==(s=t.indexOf("\x3c!--",r));)Cc(e,s-r+1),r=s+1;Cc(e,o.index+o[0].length-r+1);}else n=e.source.slice(4),Cc(e,e.source.length);return {type:3,content:n,loc:_c(e,t)}}function uc(e){const t=bc(e),n="?"===e.source[1]?1:2;let o;const r=e.source.indexOf(">");return -1===r?(o=e.source.slice(n),Cc(e,e.source.length)):(o=e.source.slice(n,r),Cc(e,r+1)),{type:3,content:o,loc:_c(e,t)}}function pc(e,t){const n=e.inPre,o=e.inVPre,r=Sc(t),s=dc(e,0,r),i=e.inPre&&!n,l=e.inVPre&&!o;if(s.isSelfClosing||e.options.isVoidTag(s.tag))return i&&(e.inPre=!1),l&&(e.inVPre=!1),s;t.push(s);const c=e.options.getTextMode(s,r),a=ic(e,c,t);if(t.pop(),s.children=a,Nc(e.source,s.tag))dc(e,1,r);else if(0===e.source.length&&"script"===s.tag.toLowerCase()){const e=a[0];e&&xc(e.loc.source,"\x3c!--");}return s.loc=_c(e,s.loc.start),i&&(e.inPre=!1),l&&(e.inVPre=!1),s}const fc=t("if,else,else-if,for,slot");function dc(e,t,n){const o=bc(e),r=/^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e.source),s=r[1],i=e.options.getNamespace(s,n);Cc(e,r[0].length),wc(e);const l=bc(e),c=e.source;e.options.isPreTag(s)&&(e.inPre=!0);let a=hc(e,t);0===t&&!e.inVPre&&a.some((e=>7===e.type&&"pre"===e.name))&&(e.inVPre=!0,x(e,l),e.source=c,a=hc(e,t).filter((e=>"v-pre"!==e.name)));let u=!1;if(0===e.source.length||(u=xc(e.source,"/>"),Cc(e,u?2:1)),1===t)return;let p=0;return e.inVPre||("slot"===s?p=2:"template"===s?a.some((e=>7===e.type&&fc(e.name)))&&(p=3):function(e,t,n){const o=n.options;if(o.isCustomElement(e))return !1;if("component"===e||/^[A-Z]/.test(e)||Al(e)||o.isBuiltInComponent&&o.isBuiltInComponent(e)||o.isNativeTag&&!o.isNativeTag(e))return !0;for(let r=0;r<t.length;r++){const e=t[r];if(6===e.type){if("is"===e.name&&e.value&&e.value.content.startsWith("vue:"))return !0}else {if("is"===e.name)return !0;"bind"===e.name&&Wl(e.arg,"is");}}}(s,a,e)&&(p=1)),{type:1,ns:i,tag:s,tagType:p,props:a,isSelfClosing:u,children:[],loc:_c(e,o),codegenNode:void 0}}function hc(e,t){const n=[],o=new Set;for(;e.source.length>0&&!xc(e.source,">")&&!xc(e.source,"/>");){if(xc(e.source,"/")){Cc(e,1),wc(e);continue}const r=mc(e,o);0===t&&n.push(r),/^[^\t\r\n\f />]/.test(e.source),wc(e);}return n}function mc(e,t){const n=bc(e),o=/^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e.source)[0];t.has(o),t.add(o);{const e=/["'<]/g;for(;e.exec(o););}let r;Cc(e,o.length),/^[\t\r\n\f ]*=/.test(e.source)&&(wc(e),Cc(e,1),wc(e),r=function(e){const t=bc(e);let n;const o=e.source[0],r='"'===o||"'"===o;if(r){Cc(e,1);const t=e.source.indexOf(o);-1===t?n=yc(e,e.source.length,4):(n=yc(e,t,4),Cc(e,1));}else {const t=/^[^\t\r\n\f >]+/.exec(e.source);if(!t)return;const o=/["'<=`]/g;for(;o.exec(t[0]););n=yc(e,t[0].length,4);}return {content:n,isQuoted:r,loc:_c(e,t)}}(e));const s=_c(e,n);if(!e.inVPre&&/^(v-|:|\.|@|#)/.test(o)){const t=/(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(o);let i,l=xc(o,"."),c=t[1]||(l||xc(o,":")?"bind":xc(o,"@")?"on":"slot");if(t[2]){const r="slot"===c,s=o.lastIndexOf(t[2]),l=_c(e,kc(e,n,s),kc(e,n,s+t[2].length+(r&&t[3]||"").length));let a=t[2],u=!0;a.startsWith("[")?(u=!1,a.endsWith("]"),a=a.substr(1,a.length-2)):r&&(a+=t[3]||""),i={type:4,content:a,isStatic:u,constType:u?3:0,loc:l};}if(r&&r.isQuoted){const e=r.loc;e.start.offset++,e.start.column++,e.end=jl(e.start,r.content),e.source=e.source.slice(1,-1);}const a=t[3]?t[3].substr(1).split("."):[];return l&&a.push("prop"),{type:7,name:c,exp:r&&{type:4,content:r.content,isStatic:!1,constType:0,loc:r.loc},arg:i,modifiers:a,loc:s}}return {type:6,name:o,value:r&&{type:2,content:r.content,loc:r.loc},loc:s}}function gc(e,t){const[n,o]=e.options.delimiters,r=e.source.indexOf(o,n.length);if(-1===r)return;const s=bc(e);Cc(e,n.length);const i=bc(e),l=bc(e),c=r-n.length,a=e.source.slice(0,c),u=yc(e,c,t),p=u.trim(),f=u.indexOf(p);f>0&&Ul(i,a,f);return Ul(l,a,c-(u.length-p.length-f)),Cc(e,o.length),{type:5,content:{type:4,isStatic:!1,constType:0,content:p,loc:_c(e,i,l)},loc:_c(e,s)}}function vc(e,t){const n=["<",e.options.delimiters[0]];3===t&&n.push("]]>");let o=e.source.length;for(let s=0;s<n.length;s++){const t=e.source.indexOf(n[s],1);-1!==t&&o>t&&(o=t);}const r=bc(e);return {type:2,content:yc(e,o,t),loc:_c(e,r)}}function yc(e,t,n){const o=e.source.slice(0,t);return Cc(e,t),2===n||3===n||-1===o.indexOf("&")?o:e.options.decodeEntities(o,4===n)}function bc(e){const{column:t,line:n,offset:o}=e;return {column:t,line:n,offset:o}}function _c(e,t,n){return {start:t,end:n=n||bc(e),source:e.originalSource.slice(t.offset,n.offset)}}function Sc(e){return e[e.length-1]}function xc(e,t){return e.startsWith(t)}function Cc(e,t){const{source:n}=e;Ul(e,n,t),e.source=n.slice(t);}function wc(e){const t=/^[\t\r\n\f ]+/.exec(e.source);t&&Cc(e,t[0].length);}function kc(e,t,n){return jl(t,e.originalSource.slice(t.offset,n),n)}function Tc(e,t,n){const o=e.source;switch(t){case 0:if(xc(o,"</"))for(let e=n.length-1;e>=0;--e)if(Nc(o,n[e].tag))return !0;break;case 1:case 2:{const e=Sc(n);if(e&&Nc(o,e.tag))return !0;break}case 3:if(xc(o,"]]>"))return !0}return !o}function Nc(e,t){return xc(e,"</")&&e.substr(2,t.length).toLowerCase()===t.toLowerCase()&&/[\t\r\n\f />]/.test(e[2+t.length]||">")}function Ec(e,t){Rc(e,t,$c(e,e.children[0]));}function $c(e,t){const{children:n}=e;return 1===n.length&&1===t.type&&!ql(t)}function Rc(e,t,n=!1){let o=!0;const{children:r}=e,s=r.length;let i=0;for(let l=0;l<r.length;l++){const e=r[l];if(1===e.type&&0===e.tagType){const r=n?0:Fc(e,t);if(r>0){if(r<3&&(o=!1),r>=2){e.codegenNode.patchFlag="-1",e.codegenNode=t.hoist(e.codegenNode),i++;continue}}else {const n=e.codegenNode;if(13===n.type){const o=Ic(n);if((!o||512===o||1===o)&&Oc(e,t)>=2){const o=Pc(e);o&&(n.props=t.hoist(o));}n.dynamicProps&&(n.dynamicProps=t.hoist(n.dynamicProps));}}}else if(12===e.type){const n=Fc(e.content,t);n>0&&(n<3&&(o=!1),n>=2&&(e.codegenNode=t.hoist(e.codegenNode),i++));}if(1===e.type){const n=1===e.tagType;n&&t.scopes.vSlot++,Rc(e,t),n&&t.scopes.vSlot--;}else if(11===e.type)Rc(e,t,1===e.children.length);else if(9===e.type)for(let n=0;n<e.branches.length;n++)Rc(e.branches[n],t,1===e.branches[n].children.length);}o&&i&&t.transformHoist&&t.transformHoist(r,t,e),i&&i===s&&1===e.type&&0===e.tagType&&e.codegenNode&&13===e.codegenNode.type&&T(e.codegenNode.children)&&(e.codegenNode.children=t.hoist(xl(e.codegenNode.children)));}function Fc(e,t){const{constantCache:n}=t;switch(e.type){case 1:if(0!==e.tagType)return 0;const o=n.get(e);if(void 0!==o)return o;const r=e.codegenNode;if(13!==r.type)return 0;if(Ic(r))return n.set(e,0),0;{let o=3;const s=Oc(e,t);if(0===s)return n.set(e,0),0;s<o&&(o=s);for(let r=0;r<e.children.length;r++){const s=Fc(e.children[r],t);if(0===s)return n.set(e,0),0;s<o&&(o=s);}if(o>1)for(let r=0;r<e.props.length;r++){const s=e.props[r];if(7===s.type&&"bind"===s.name&&s.exp){const r=Fc(s.exp,t);if(0===r)return n.set(e,0),0;r<o&&(o=r);}}return r.isBlock&&(t.removeHelper(Bi),t.removeHelper(Zl(t.inSSR,r.isComponent)),r.isBlock=!1,t.helper(Jl(t.inSSR,r.isComponent))),n.set(e,o),o}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Fc(e.content,t);case 4:return e.constType;case 8:let s=3;for(let n=0;n<e.children.length;n++){const o=e.children[n];if(F(o)||A(o))continue;const r=Fc(o,t);if(0===r)return 0;r<s&&(s=r);}return s;default:return 0}}const Ac=new Set([nl,ol,rl,sl]);function Mc(e,t){if(14===e.type&&!F(e.callee)&&Ac.has(e.callee)){const n=e.arguments[0];if(4===n.type)return Fc(n,t);if(14===n.type)return Mc(n,t)}return 0}function Oc(e,t){let n=3;const o=Pc(e);if(o&&15===o.type){const{properties:e}=o;for(let o=0;o<e.length;o++){const{key:r,value:s}=e[o],i=Fc(r,t);if(0===i)return i;if(i<n&&(n=i),4!==s.type)return 14===s.type?Mc(s,t):0;const l=Fc(s,t);if(0===l)return l;l<n&&(n=l);}}return n}function Pc(e){const t=e.codegenNode;if(13===t.type)return t.props}function Ic(e){const t=e.patchFlag;return t?parseInt(t,10):void 0}function Vc(e,{filename:t="",prefixIdentifiers:n=!1,hoistStatic:o=!1,cacheHandlers:r=!1,nodeTransforms:s=[],directiveTransforms:i={},transformHoist:l=null,isBuiltInComponent:c=v,isCustomElement:a=v,expressionPlugins:u=[],scopeId:p=null,slotted:f=!0,ssr:d=!1,inSSR:h=!1,ssrCssVars:g="",bindingMetadata:y=m,inline:b=!1,isTS:_=!1,onError:S=Ri,onWarn:x=Fi,compatConfig:C}){const w=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),k={selfName:w&&z(H(w[1])),prefixIdentifiers:n,hoistStatic:o,cacheHandlers:r,nodeTransforms:s,directiveTransforms:i,transformHoist:l,isBuiltInComponent:c,isCustomElement:a,expressionPlugins:u,scopeId:p,slotted:f,ssr:d,inSSR:h,ssrCssVars:g,bindingMetadata:y,inline:b,isTS:_,onError:S,onWarn:x,compatConfig:C,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new Map,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(e){const t=k.helpers.get(e)||0;return k.helpers.set(e,t+1),e},removeHelper(e){const t=k.helpers.get(e);if(t){const n=t-1;n?k.helpers.set(e,n):k.helpers.delete(e);}},helperString:e=>`_${bl[k.helper(e)]}`,replaceNode(e){k.parent.children[k.childIndex]=k.currentNode=e;},removeNode(e){const t=e?k.parent.children.indexOf(e):k.currentNode?k.childIndex:-1;e&&e!==k.currentNode?k.childIndex>t&&(k.childIndex--,k.onNodeRemoved()):(k.currentNode=null,k.onNodeRemoved()),k.parent.children.splice(t,1);},onNodeRemoved:()=>{},addIdentifiers(e){},removeIdentifiers(e){},hoist(e){F(e)&&(e=kl(e)),k.hoists.push(e);const t=kl(`_hoisted_${k.hoists.length}`,!1,e.loc,2);return t.hoisted=e,t},cache:(e,t=!1)=>function(e,t,n=!1){return {type:20,index:e,value:t,isVNode:n,loc:_l}}(k.cached++,e,t)};return k}function Bc(e,t){const n=Vc(e,t);Lc(e,n),t.hoistStatic&&Ec(e,n),t.ssr||function(e,t){const{helper:n}=t,{children:o}=e;if(1===o.length){const n=o[0];if($c(e,n)&&n.codegenNode){const o=n.codegenNode;13===o.type&&tc(o,t),e.codegenNode=o;}else e.codegenNode=n;}else if(o.length>1){let o=64;e.codegenNode=Sl(t,n(Mi),void 0,e.children,o+"",void 0,void 0,!0,void 0,!1);}}(e,n),e.helpers=[...n.helpers.keys()],e.components=[...n.components],e.directives=[...n.directives],e.imports=n.imports,e.hoists=n.hoists,e.temps=n.temps,e.cached=n.cached;}function Lc(e,t){t.currentNode=e;const{nodeTransforms:n}=t,o=[];for(let s=0;s<n.length;s++){const r=n[s](e,t);if(r&&(T(r)?o.push(...r):o.push(r)),!t.currentNode)return;e=t.currentNode;}switch(e.type){case 3:t.ssr||t.helper(Di);break;case 5:t.ssr||t.helper(el);break;case 9:for(let n=0;n<e.branches.length;n++)Lc(e.branches[n],t);break;case 10:case 11:case 1:case 0:!function(e,t){let n=0;const o=()=>{n--;};for(;n<e.children.length;n++){const r=e.children[n];F(r)||(t.parent=e,t.childIndex=n,t.onNodeRemoved=o,Lc(r,t));}}(e,t);}t.currentNode=e;let r=o.length;for(;r--;)o[r]();}function jc(e,t){const n=F(e)?t=>t===e:t=>e.test(t);return (e,o)=>{if(1===e.type){const{props:r}=e;if(3===e.tagType&&r.some(Kl))return;const s=[];for(let i=0;i<r.length;i++){const l=r[i];if(7===l.type&&n(l.name)){r.splice(i,1),i--;const n=t(e,l,o);n&&s.push(n);}}return s}}}const Uc="/*#__PURE__*/";function Hc(e,t={}){const n=function(e,{mode:t="function",prefixIdentifiers:n="module"===t,sourceMap:o=!1,filename:r="template.vue.html",scopeId:s=null,optimizeImports:i=!1,runtimeGlobalName:l="Vue",runtimeModuleName:c="vue",ssr:a=!1,isTS:u=!1,inSSR:p=!1}){const f={mode:t,prefixIdentifiers:n,sourceMap:o,filename:r,scopeId:s,optimizeImports:i,runtimeGlobalName:l,runtimeModuleName:c,ssr:a,isTS:u,inSSR:p,source:e.loc.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper:e=>`_${bl[e]}`,push(e,t){f.code+=e;},indent(){d(++f.indentLevel);},deindent(e=!1){e?--f.indentLevel:d(--f.indentLevel);},newline(){d(f.indentLevel);}};function d(e){f.push("\n"+"  ".repeat(e));}return f}(e,t);t.onContextCreated&&t.onContextCreated(n);const{mode:o,push:r,prefixIdentifiers:s,indent:i,deindent:l,newline:c,ssr:a}=n,u=e.helpers.length>0,p=!s&&"module"!==o;!function(e,t){const{push:n,newline:o,runtimeGlobalName:r}=t,s=r,i=e=>`${bl[e]}: _${bl[e]}`;if(e.helpers.length>0&&(n(`const _Vue = ${s}\n`),e.hoists.length)){n(`const { ${[Ui,Hi,Di,Wi,zi].filter((t=>e.helpers.includes(t))).map(i).join(", ")} } = _Vue\n`);}(function(e,t){if(!e.length)return;t.pure=!0;const{push:n,newline:o}=t;o(),e.forEach(((e,r)=>{e&&(n(`const _hoisted_${r+1} = `),Kc(e,t),o());})),t.pure=!1;})(e.hoists,t),o(),n("return ");}(e,n);if(r(`function ${a?"ssrRender":"render"}(${(a?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ")}) {`),i(),p&&(r("with (_ctx) {"),i(),u&&(r(`const { ${e.helpers.map((e=>`${bl[e]}: _${bl[e]}`)).join(", ")} } = _Vue`),r("\n"),c())),e.components.length&&(Dc(e.components,"component",n),(e.directives.length||e.temps>0)&&c()),e.directives.length&&(Dc(e.directives,"directive",n),e.temps>0&&c()),e.temps>0){r("let ");for(let t=0;t<e.temps;t++)r(`${t>0?", ":""}_temp${t}`);}return (e.components.length||e.directives.length||e.temps)&&(r("\n"),c()),a||r("return "),e.codegenNode?Kc(e.codegenNode,n):r("null"),p&&(l(),r("}")),l(),r("}"),{ast:e,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}function Dc(e,t,{helper:n,push:o,newline:r,isTS:s}){const i=n("component"===t?Ki:qi);for(let l=0;l<e.length;l++){let n=e[l];const c=n.endsWith("__self");c&&(n=n.slice(0,-6)),o(`const ${ec(n,t)} = ${i}(${JSON.stringify(n)}${c?", true":""})${s?"!":""}`),l<e.length-1&&r();}}function Wc(e,t){const n=e.length>3||!1;t.push("["),n&&t.indent(),zc(e,t,n),n&&t.deindent(),t.push("]");}function zc(e,t,n=!1,o=!0){const{push:r,newline:s}=t;for(let i=0;i<e.length;i++){const l=e[i];F(l)?r(l):T(l)?Wc(l,t):Kc(l,t),i<e.length-1&&(n?(o&&r(","),s()):o&&r(", "));}}function Kc(e,t){if(F(e))t.push(e);else if(A(e))t.push(t.helper(e));else switch(e.type){case 1:case 9:case 11:Kc(e.codegenNode,t);break;case 2:!function(e,t){t.push(JSON.stringify(e.content),e);}(e,t);break;case 4:Gc(e,t);break;case 5:!function(e,t){const{push:n,helper:o,pure:r}=t;r&&n(Uc);n(`${o(el)}(`),Kc(e.content,t),n(")");}(e,t);break;case 12:Kc(e.codegenNode,t);break;case 8:qc(e,t);break;case 3:!function(e,t){const{push:n,helper:o,pure:r}=t;r&&n(Uc);n(`${o(Di)}(${JSON.stringify(e.content)})`,e);}(e,t);break;case 13:!function(e,t){const{push:n,helper:o,pure:r}=t,{tag:s,props:i,children:l,patchFlag:c,dynamicProps:a,directives:u,isBlock:p,disableTracking:f,isComponent:d}=e;u&&n(o(Zi)+"(");p&&n(`(${o(Bi)}(${f?"true":""}), `);r&&n(Uc);const h=p?Zl(t.inSSR,d):Jl(t.inSSR,d);n(o(h)+"(",e),zc(function(e){let t=e.length;for(;t--&&null==e[t];);return e.slice(0,t+1).map((e=>e||"null"))}([s,i,l,c,a]),t),n(")"),p&&n(")");u&&(n(", "),Kc(u,t),n(")"));}(e,t);break;case 14:!function(e,t){const{push:n,helper:o,pure:r}=t,s=F(e.callee)?e.callee:o(e.callee);r&&n(Uc);n(s+"(",e),zc(e.arguments,t),n(")");}(e,t);break;case 15:!function(e,t){const{push:n,indent:o,deindent:r,newline:s}=t,{properties:i}=e;if(!i.length)return void n("{}",e);const l=i.length>1||!1;n(l?"{":"{ "),l&&o();for(let c=0;c<i.length;c++){const{key:e,value:o}=i[c];Jc(e,t),n(": "),Kc(o,t),c<i.length-1&&(n(","),s());}l&&r(),n(l?"}":" }");}(e,t);break;case 17:!function(e,t){Wc(e.elements,t);}(e,t);break;case 18:!function(e,t){const{push:n,indent:o,deindent:r}=t,{params:s,returns:i,body:l,newline:c,isSlot:a}=e;a&&n(`_${bl[hl]}(`);n("(",e),T(s)?zc(s,t):s&&Kc(s,t);n(") => "),(c||l)&&(n("{"),o());i?(c&&n("return "),T(i)?Wc(i,t):Kc(i,t)):l&&Kc(l,t);(c||l)&&(r(),n("}"));a&&n(")");}(e,t);break;case 19:!function(e,t){const{test:n,consequent:o,alternate:r,newline:s}=e,{push:i,indent:l,deindent:c,newline:a}=t;if(4===n.type){const e=!Ol(n.content);e&&i("("),Gc(n,t),e&&i(")");}else i("("),Kc(n,t),i(")");s&&l(),t.indentLevel++,s||i(" "),i("? "),Kc(o,t),t.indentLevel--,s&&a(),s||i(" "),i(": ");const u=19===r.type;u||t.indentLevel++;Kc(r,t),u||t.indentLevel--;s&&c(!0);}(e,t);break;case 20:!function(e,t){const{push:n,helper:o,indent:r,deindent:s,newline:i}=t;n(`_cache[${e.index}] || (`),e.isVNode&&(r(),n(`${o(ul)}(-1),`),i());n(`_cache[${e.index}] = `),Kc(e.value,t),e.isVNode&&(n(","),i(),n(`${o(ul)}(1),`),i(),n(`_cache[${e.index}]`),s());n(")");}(e,t);break;case 21:zc(e.body,t,!0,!1);}}function Gc(e,t){const{content:n,isStatic:o}=e;t.push(o?JSON.stringify(n):n,e);}function qc(e,t){for(let n=0;n<e.children.length;n++){const o=e.children[n];F(o)?t.push(o):Kc(o,t);}}function Jc(e,t){const{push:n}=t;if(8===e.type)n("["),qc(e,t),n("]");else if(e.isStatic){n(Ol(e.content)?e.content:JSON.stringify(e.content),e);}else n(`[${e.content}]`,e);}const Zc=jc(/^(if|else|else-if)$/,((e,t,n)=>function(e,t,n,o){if(!("else"===t.name||t.exp&&t.exp.content.trim())){t.exp=kl("true",!1,t.exp?t.exp.loc:e.loc);}if("if"===t.name){const r=Qc(e,t),s={type:9,loc:e.loc,branches:[r]};if(n.replaceNode(s),o)return o(s,r,!0)}else {const r=n.parent.children;let s=r.indexOf(e);for(;s-- >=-1;){const i=r[s];if(!i||2!==i.type||i.content.trim().length){if(i&&9===i.type){n.removeNode();const r=Qc(e,t);i.branches.push(r);const s=o&&o(i,r,!1);Lc(r,n),s&&s(),n.currentNode=null;}break}n.removeNode(i);}}}(e,t,n,((e,t,o)=>{const r=n.parent.children;let s=r.indexOf(e),i=0;for(;s-- >=0;){const e=r[s];e&&9===e.type&&(i+=e.branches.length);}return ()=>{if(o)e.codegenNode=Xc(t,i,n);else {(function(e){for(;;)if(19===e.type){if(19!==e.alternate.type)return e;e=e.alternate;}else 20===e.type&&(e=e.value);}(e.codegenNode)).alternate=Xc(t,i+e.branches.length-1,n);}}}))));function Qc(e,t){return {type:10,loc:e.loc,condition:"else"===t.name?void 0:t.exp,children:3!==e.tagType||Hl(e,"for")?[e]:e.children,userKey:Dl(e,"key")}}function Xc(e,t,n){return e.condition?$l(e.condition,Yc(e,t,n),Nl(n.helper(Di),['""',"true"])):Yc(e,t,n)}function Yc(e,t,n){const{helper:o}=n,r=wl("key",kl(`${t}`,!1,_l,2)),{children:s}=e,i=s[0];if(1!==s.length||1!==i.type){if(1===s.length&&11===i.type){const e=i.codegenNode;return Yl(e,r,n),e}{let t=64;return Sl(n,o(Mi),Cl([r]),s,t+"",void 0,void 0,!0,!1,!1,e.loc)}}{const e=i.codegenNode,t=14===(l=e).type&&l.callee===vl?l.arguments[1].returns:l;return 13===t.type&&tc(t,n),Yl(t,r,n),e}var l;}const ea=jc("for",((e,t,n)=>{const{helper:o,removeHelper:r}=n;return function(e,t,n,o){if(!t.exp)return;const r=ra(t.exp);if(!r)return;const{scopes:s}=n,{source:i,value:l,key:c,index:a}=r,u={type:11,loc:t.loc,source:i,valueAlias:l,keyAlias:c,objectIndexAlias:a,parseResult:r,children:Gl(e)?e.children:[e]};n.replaceNode(u),s.vFor++;const p=o&&o(u);return ()=>{s.vFor--,p&&p();}}(e,t,n,(t=>{const s=Nl(o(Qi),[t.source]),i=Hl(e,"memo"),l=Dl(e,"key"),c=l&&(6===l.type?kl(l.value.content,!0):l.exp),a=l?wl("key",c):null,u=4===t.source.type&&t.source.constType>0,p=u?64:l?128:256;return t.codegenNode=Sl(n,o(Mi),void 0,s,p+"",void 0,void 0,!0,!u,!1,e.loc),()=>{let l;const p=Gl(e),{children:f}=t,d=1!==f.length||1!==f[0].type,h=ql(e)?e:p&&1===e.children.length&&ql(e.children[0])?e.children[0]:null;if(h?(l=h.codegenNode,p&&a&&Yl(l,a,n)):d?l=Sl(n,o(Mi),a?Cl([a]):void 0,e.children,"64",void 0,void 0,!0,void 0,!1):(l=f[0].codegenNode,p&&a&&Yl(l,a,n),l.isBlock!==!u&&(l.isBlock?(r(Bi),r(Zl(n.inSSR,l.isComponent))):r(Jl(n.inSSR,l.isComponent))),l.isBlock=!u,l.isBlock?(o(Bi),o(Zl(n.inSSR,l.isComponent))):o(Jl(n.inSSR,l.isComponent))),i){const e=El(ia(t.parseResult,[kl("_cached")]));e.body={type:21,body:[Tl(["const _memo = (",i.exp,")"]),Tl(["if (_cached",...c?[" && _cached.key === ",c]:[],` && ${n.helperString(yl)}(_cached, _memo)) return _cached`]),Tl(["const _item = ",l]),kl("_item.memo = _memo"),kl("return _item")],loc:_l},s.arguments.push(e,kl("_cache"),kl(String(n.cached++)));}else s.arguments.push(El(ia(t.parseResult),l,!0));}}))}));const ta=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,na=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,oa=/^\(|\)$/g;function ra(e,t){const n=e.loc,o=e.content,r=o.match(ta);if(!r)return;const[,s,i]=r,l={source:sa(n,i.trim(),o.indexOf(i,s.length)),value:void 0,key:void 0,index:void 0};let c=s.trim().replace(oa,"").trim();const a=s.indexOf(c),u=c.match(na);if(u){c=c.replace(na,"").trim();const e=u[1].trim();let t;if(e&&(t=o.indexOf(e,a+c.length),l.key=sa(n,e,t)),u[2]){const r=u[2].trim();r&&(l.index=sa(n,r,o.indexOf(r,l.key?t+e.length:a+c.length)));}}return c&&(l.value=sa(n,c,a)),l}function sa(e,t,n){return kl(t,!1,Ll(e,n,t.length))}function ia({value:e,key:t,index:n},o=[]){return function(e){let t=e.length;for(;t--&&!e[t];);return e.slice(0,t+1).map(((e,t)=>e||kl("_".repeat(t+1),!1)))}([e,t,n,...o])}const la=kl("undefined",!1),ca=(e,t)=>{if(1===e.type&&(1===e.tagType||3===e.tagType)){const n=Hl(e,"slot");if(n)return t.scopes.vSlot++,()=>{t.scopes.vSlot--;}}},aa=(e,t,n)=>El(e,t,!1,!0,t.length?t[0].loc:n);function ua(e,t,n=aa){t.helper(hl);const{children:o,loc:r}=e,s=[],i=[];let l=t.scopes.vSlot>0||t.scopes.vFor>0;const c=Hl(e,"slot",!0);if(c){const{arg:e,exp:t}=c;e&&!Rl(e)&&(l=!0),s.push(wl(e||kl("default",!0),n(t,o,r)));}let a=!1,u=!1;const p=[],f=new Set;for(let m=0;m<o.length;m++){const e=o[m];let r;if(!Gl(e)||!(r=Hl(e,"slot",!0))){3!==e.type&&p.push(e);continue}if(c)break;a=!0;const{children:d,loc:h}=e,{arg:g=kl("default",!0),exp:v}=r;let y;Rl(g)?y=g?g.content:"default":l=!0;const b=n(v,d,h);let _,S,x;if(_=Hl(e,"if"))l=!0,i.push($l(_.exp,pa(g,b),la));else if(S=Hl(e,/^else(-if)?$/,!0)){let e,t=m;for(;t--&&(e=o[t],3===e.type););if(e&&Gl(e)&&Hl(e,"if")){o.splice(m,1),m--;let e=i[i.length-1];for(;19===e.alternate.type;)e=e.alternate;e.alternate=S.exp?$l(S.exp,pa(g,b),la):pa(g,b);}}else if(x=Hl(e,"for")){l=!0;const e=x.parseResult||ra(x.exp);e&&i.push(Nl(t.helper(Qi),[e.source,El(ia(e),pa(g,b),!0)]));}else {if(y){if(f.has(y))continue;f.add(y),"default"===y&&(u=!0);}s.push(wl(g,b));}}if(!c){const e=(e,t)=>wl("default",n(e,t,r));a?p.length&&p.some((e=>da(e)))&&(u||s.push(e(void 0,p))):s.push(e(void 0,o));}const d=l?2:fa(e.children)?3:1;let h=Cl(s.concat(wl("_",kl(d+"",!1))),r);return i.length&&(h=Nl(t.helper(Yi),[h,xl(i)])),{slots:h,hasDynamicSlots:l}}function pa(e,t){return Cl([wl("name",e),wl("fn",t)])}function fa(e){for(let t=0;t<e.length;t++){const n=e[t];switch(n.type){case 1:if(2===n.tagType||fa(n.children))return !0;break;case 9:if(fa(n.branches))return !0;break;case 10:case 11:if(fa(n.children))return !0}}return !1}function da(e){return 2!==e.type&&12!==e.type||(2===e.type?!!e.content.trim():da(e.content))}const ha=new WeakMap,ma=(e,t)=>function(){if(1!==(e=t.currentNode).type||0!==e.tagType&&1!==e.tagType)return;const{tag:n,props:o}=e,r=1===e.tagType;let s=r?function(e,t,n=!1){let{tag:o}=e;const r=ba(o),s=Dl(e,"is");if(s)if(r){const e=6===s.type?s.value&&kl(s.value.content,!0):s.exp;if(e)return Nl(t.helper(Gi),[e])}else 6===s.type&&s.value.content.startsWith("vue:")&&(o=s.value.content.slice(4));const i=!r&&Hl(e,"is");if(i&&i.exp)return Nl(t.helper(Gi),[i.exp]);const l=Al(o)||t.isBuiltInComponent(o);if(l)return n||t.helper(l),l;return t.helper(Ki),t.components.add(o),ec(o,"component")}(e,t):`"${n}"`;let i,l,c,a,u,p,f=0,d=M(s)&&s.callee===Gi||s===Oi||s===Pi||!r&&("svg"===n||"foreignObject"===n||Dl(e,"key",!0));if(o.length>0){const n=ga(e,t);i=n.props,f=n.patchFlag,u=n.dynamicPropNames;const o=n.directives;p=o&&o.length?xl(o.map((e=>function(e,t){const n=[],o=ha.get(e);o?n.push(t.helperString(o)):(t.helper(qi),t.directives.add(e.name),n.push(ec(e.name,"directive")));const{loc:r}=e;e.exp&&n.push(e.exp);e.arg&&(e.exp||n.push("void 0"),n.push(e.arg));if(Object.keys(e.modifiers).length){e.arg||(e.exp||n.push("void 0"),n.push("void 0"));const t=kl("true",!1,r);n.push(Cl(e.modifiers.map((e=>wl(e,t))),r));}return xl(n,e.loc)}(e,t)))):void 0;}if(e.children.length>0){s===Ii&&(d=!0,f|=1024);if(r&&s!==Oi&&s!==Ii){const{slots:n,hasDynamicSlots:o}=ua(e,t);l=n,o&&(f|=1024);}else if(1===e.children.length&&s!==Oi){const n=e.children[0],o=n.type,r=5===o||8===o;r&&0===Fc(n,t)&&(f|=1),l=r||2===o?n:e.children;}else l=e.children;}0!==f&&(c=String(f),u&&u.length&&(a=function(e){let t="[";for(let n=0,o=e.length;n<o;n++)t+=JSON.stringify(e[n]),n<o-1&&(t+=", ");return t+"]"}(u))),e.codegenNode=Sl(t,s,i,l,c,a,p,!!d,!1,r,e.loc);};function ga(e,t,n=e.props,o=!1){const{tag:r,loc:s}=e,i=1===e.tagType;let l=[];const c=[],a=[];let u=0,p=!1,f=!1,d=!1,h=!1,m=!1,g=!1;const v=[],y=({key:e,value:n})=>{if(Rl(e)){const o=e.content,r=_(o);if(i||!r||"onclick"===o.toLowerCase()||"onUpdate:modelValue"===o||L(o)||(h=!0),r&&L(o)&&(g=!0),20===n.type||(4===n.type||8===n.type)&&Fc(n,t)>0)return;"ref"===o?p=!0:"class"===o?f=!0:"style"===o?d=!0:"key"===o||v.includes(o)||v.push(o),!i||"class"!==o&&"style"!==o||v.includes(o)||v.push(o);}else m=!0;};for(let _=0;_<n.length;_++){const i=n[_];if(6===i.type){const{loc:e,name:t,value:n}=i;let o=!0;if("ref"===t&&(p=!0),"is"===t&&(ba(r)||n&&n.content.startsWith("vue:")))continue;l.push(wl(kl(t,!0,Ll(e,0,t.length)),kl(n?n.content:"",o,n?n.loc:e)));}else {const{name:n,arg:u,exp:p,loc:f}=i,d="bind"===n,h="on"===n;if("slot"===n)continue;if("once"===n||"memo"===n)continue;if("is"===n||d&&Wl(u,"is")&&ba(r))continue;if(h&&o)continue;if(!u&&(d||h)){m=!0,p&&(l.length&&(c.push(Cl(va(l),s)),l=[]),c.push(d?p:{type:14,loc:f,callee:t.helper(il),arguments:[p]}));continue}const g=t.directiveTransforms[n];if(g){const{props:n,needRuntime:r}=g(i,e,t);!o&&n.forEach(y),l.push(...n),r&&(a.push(i),A(r)&&ha.set(i,r));}else a.push(i);}}let b;if(c.length?(l.length&&c.push(Cl(va(l),s)),b=c.length>1?Nl(t.helper(tl),c,s):c[0]):l.length&&(b=Cl(va(l),s)),m?u|=16:(f&&!i&&(u|=2),d&&!i&&(u|=4),v.length&&(u|=8),h&&(u|=32)),0!==u&&32!==u||!(p||g||a.length>0)||(u|=512),!t.inSSR&&b)switch(b.type){case 15:let e=-1,n=-1,o=!1;for(let t=0;t<b.properties.length;t++){const r=b.properties[t].key;Rl(r)?"class"===r.content?e=t:"style"===r.content&&(n=t):r.isHandlerKey||(o=!0);}const r=b.properties[e],s=b.properties[n];o?b=Nl(t.helper(rl),[b]):(r&&!Rl(r.value)&&(r.value=Nl(t.helper(nl),[r.value])),s&&!Rl(s.value)&&d&&(s.value=Nl(t.helper(ol),[s.value])));break;case 14:break;default:b=Nl(t.helper(rl),[Nl(t.helper(sl),[b])]);}return {props:b,directives:a,patchFlag:u,dynamicPropNames:v}}function va(e){const t=new Map,n=[];for(let o=0;o<e.length;o++){const r=e[o];if(8===r.key.type||!r.key.isStatic){n.push(r);continue}const s=r.key.content,i=t.get(s);i?("style"===s||"class"===s||s.startsWith("on"))&&ya(i,r):(t.set(s,r),n.push(r));}return n}function ya(e,t){17===e.value.type?e.value.elements.push(t.value):e.value=xl([e.value,t.value],e.loc);}function ba(e){return e[0].toLowerCase()+e.slice(1)==="component"}const _a=(e,t)=>{if(ql(e)){const{children:n,loc:o}=e,{slotName:r,slotProps:s}=function(e,t){let n,o='"default"';const r=[];for(let s=0;s<e.props.length;s++){const t=e.props[s];6===t.type?t.value&&("name"===t.name?o=JSON.stringify(t.value.content):(t.name=H(t.name),r.push(t))):"bind"===t.name&&Wl(t.arg,"name")?t.exp&&(o=t.exp):("bind"===t.name&&t.arg&&Rl(t.arg)&&(t.arg.content=H(t.arg.content)),r.push(t));}if(r.length>0){const{props:o,directives:s}=ga(e,t,r);n=o;}return {slotName:o,slotProps:n}}(e,t),i=[t.prefixIdentifiers?"_ctx.$slots":"$slots",r];s&&i.push(s),n.length&&(s||i.push("{}"),i.push(El([],n,!1,!1,o))),t.scopeId&&!t.slotted&&(s||i.push("{}"),n.length||i.push("undefined"),i.push("true")),e.codegenNode=Nl(t.helper(Xi),i,o);}};const Sa=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^\s*function(?:\s+[\w$]+)?\s*\(/,xa=(e,t,n,o)=>{const{loc:r,modifiers:s,arg:i}=e;let l;if(4===i.type)if(i.isStatic){l=kl(K(H(i.content)),!0,i.loc);}else l=Tl([`${n.helperString(al)}(`,i,")"]);else l=i,l.children.unshift(`${n.helperString(al)}(`),l.children.push(")");let c=e.exp;c&&!c.content.trim()&&(c=void 0);let a=n.cacheHandlers&&!c&&!n.inVOnce;if(c){const e=Bl(c.content),t=!(e||Sa.test(c.content)),n=c.content.includes(";");(t||a&&e)&&(c=Tl([`${t?"$event":"(...args)"} => ${n?"{":"("}`,c,n?"}":")"]));}let u={props:[wl(l,c||kl("() => {}",!1,r))]};return o&&(u=o(u)),a&&(u.props[0].value=n.cache(u.props[0].value)),u.props.forEach((e=>e.key.isHandlerKey=!0)),u},Ca=(e,t,n)=>{const{exp:o,modifiers:r,loc:s}=e,i=e.arg;return 4!==i.type?(i.children.unshift("("),i.children.push(') || ""')):i.isStatic||(i.content=`${i.content} || ""`),r.includes("camel")&&(4===i.type?i.content=i.isStatic?H(i.content):`${n.helperString(ll)}(${i.content})`:(i.children.unshift(`${n.helperString(ll)}(`),i.children.push(")"))),n.inSSR||(r.includes("prop")&&wa(i,"."),r.includes("attr")&&wa(i,"^")),!o||4===o.type&&!o.content.trim()?{props:[wl(i,kl("",!0,s))]}:{props:[wl(i,o)]}},wa=(e,t)=>{4===e.type?e.content=e.isStatic?t+e.content:`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(")"));},ka=(e,t)=>{if(0===e.type||1===e.type||11===e.type||10===e.type)return ()=>{const n=e.children;let o,r=!1;for(let e=0;e<n.length;e++){const t=n[e];if(zl(t)){r=!0;for(let r=e+1;r<n.length;r++){const s=n[r];if(!zl(s)){o=void 0;break}o||(o=n[e]={type:8,loc:t.loc,children:[t]}),o.children.push(" + ",s),n.splice(r,1),r--;}}}if(r&&(1!==n.length||0!==e.type&&(1!==e.type||0!==e.tagType||e.props.find((e=>7===e.type&&!t.directiveTransforms[e.name])))))for(let e=0;e<n.length;e++){const o=n[e];if(zl(o)||8===o.type){const r=[];2===o.type&&" "===o.content||r.push(o),t.ssr||0!==Fc(o,t)||r.push("1"),n[e]={type:12,content:o,loc:o.loc,codegenNode:Nl(t.helper(Wi),r)};}}}},Ta=new WeakSet,Na=(e,t)=>{if(1===e.type&&Hl(e,"once",!0)){if(Ta.has(e)||t.inVOnce)return;return Ta.add(e),t.inVOnce=!0,t.helper(ul),()=>{t.inVOnce=!1;const e=t.currentNode;e.codegenNode&&(e.codegenNode=t.cache(e.codegenNode,!0));}}},Ea=(e,t,n)=>{const{exp:o,arg:r}=e;if(!o)return $a();const s=o.loc.source,i=4===o.type?o.content:s;if(!i.trim()||!Bl(i))return $a();const l=r||kl("modelValue",!0),c=r?Rl(r)?`onUpdate:${r.content}`:Tl(['"onUpdate:" + ',r]):"onUpdate:modelValue";let a;a=Tl([`${n.isTS?"($event: any)":"$event"} => (`,o," = $event)"]);const u=[wl(l,e.exp),wl(c,a)];if(e.modifiers.length&&1===t.tagType){const t=e.modifiers.map((e=>(Ol(e)?e:JSON.stringify(e))+": true")).join(", "),n=r?Rl(r)?`${r.content}Modifiers`:Tl([r,' + "Modifiers"']):"modelModifiers";u.push(wl(n,kl(`{ ${t} }`,!1,e.loc,2)));}return $a(u)};function $a(e=[]){return {props:e}}const Ra=new WeakSet,Fa=(e,t)=>{if(1===e.type){const n=Hl(e,"memo");if(!n||Ra.has(e))return;return Ra.add(e),()=>{const o=e.codegenNode||t.currentNode.codegenNode;o&&13===o.type&&(1!==e.tagType&&tc(o,t),e.codegenNode=Nl(t.helper(vl),[n.exp,El(void 0,o),"_cache",String(t.cached++)]));}}};function Aa(e,t={}){const n=t.onError||Ri,o="module"===t.mode;!0===t.prefixIdentifiers?n(Ai(45)):o&&n(Ai(46));t.cacheHandlers&&n(Ai(47)),t.scopeId&&!o&&n(Ai(48));const r=F(e)?sc(e,t):e,[s,i]=[[Na,Zc,Fa,ea,_a,ma,ca,ka],{on:xa,bind:Ca,model:Ea}];return Bc(r,x({},t,{prefixIdentifiers:false,nodeTransforms:[...s,...t.nodeTransforms||[]],directiveTransforms:x({},i,t.directiveTransforms||{})})),Hc(r,x({},t,{prefixIdentifiers:false}))}const Ma=Symbol(""),Oa=Symbol(""),Pa=Symbol(""),Ia=Symbol(""),Va=Symbol(""),Ba=Symbol(""),La=Symbol(""),ja=Symbol(""),Ua=Symbol(""),Ha=Symbol("");var Da;let Wa;Da={[Ma]:"vModelRadio",[Oa]:"vModelCheckbox",[Pa]:"vModelText",[Ia]:"vModelSelect",[Va]:"vModelDynamic",[Ba]:"withModifiers",[La]:"withKeys",[ja]:"vShow",[Ua]:"Transition",[Ha]:"TransitionGroup"},Object.getOwnPropertySymbols(Da).forEach((e=>{bl[e]=Da[e];}));const za=t("style,iframe,script,noscript",!0),Ka={isVoidTag:p,isNativeTag:e=>a(e)||u(e),isPreTag:e=>"pre"===e,decodeEntities:function(e,t=!1){return Wa||(Wa=document.createElement("div")),t?(Wa.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,Wa.children[0].getAttribute("foo")):(Wa.innerHTML=e,Wa.textContent)},isBuiltInComponent:e=>Fl(e,"Transition")?Ua:Fl(e,"TransitionGroup")?Ha:void 0,getNamespace(e,t){let n=t?t.ns:0;if(t&&2===n)if("annotation-xml"===t.tag){if("svg"===e)return 1;t.props.some((e=>6===e.type&&"encoding"===e.name&&null!=e.value&&("text/html"===e.value.content||"application/xhtml+xml"===e.value.content)))&&(n=0);}else /^m(?:[ions]|text)$/.test(t.tag)&&"mglyph"!==e&&"malignmark"!==e&&(n=0);else t&&1===n&&("foreignObject"!==t.tag&&"desc"!==t.tag&&"title"!==t.tag||(n=0));if(0===n){if("svg"===e)return 1;if("math"===e)return 2}return n},getTextMode({tag:e,ns:t}){if(0===t){if("textarea"===e||"title"===e)return 1;if(za(e))return 2}return 0}},Ga=(e,t)=>{const n=l(e);return kl(JSON.stringify(n),!1,t,3)};const qa=t("passive,once,capture"),Ja=t("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),Za=t("left,right"),Qa=t("onkeyup,onkeydown,onkeypress",!0),Xa=(e,t)=>Rl(e)&&"onclick"===e.content.toLowerCase()?kl(t,!0):4!==e.type?Tl(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e,Ya=(e,t)=>{1!==e.type||0!==e.tagType||"script"!==e.tag&&"style"!==e.tag||t.removeNode();},eu=[e=>{1===e.type&&e.props.forEach(((t,n)=>{6===t.type&&"style"===t.name&&t.value&&(e.props[n]={type:7,name:"bind",arg:kl("style",!0,t.loc),exp:Ga(t.value.content,t.loc),modifiers:[],loc:t.loc});}));}],tu={cloak:()=>({props:[]}),html:(e,t,n)=>{const{exp:o,loc:r}=e;return t.children.length&&(t.children.length=0),{props:[wl(kl("innerHTML",!0,r),o||kl("",!0))]}},text:(e,t,n)=>{const{exp:o,loc:r}=e;return t.children.length&&(t.children.length=0),{props:[wl(kl("textContent",!0),o?Nl(n.helperString(el),[o],r):kl("",!0))]}},model:(e,t,n)=>{const o=Ea(e,t,n);if(!o.props.length||1===t.tagType)return o;const{tag:r}=t,s=n.isCustomElement(r);if("input"===r||"textarea"===r||"select"===r||s){let e=Pa,i=!1;if("input"===r||s){const n=Dl(t,"type");if(n){if(7===n.type)e=Va;else if(n.value)switch(n.value.content){case"radio":e=Ma;break;case"checkbox":e=Oa;break;case"file":i=!0;}}else (function(e){return e.props.some((e=>!(7!==e.type||"bind"!==e.name||e.arg&&4===e.arg.type&&e.arg.isStatic)))})(t)&&(e=Va);}else "select"===r&&(e=Ia);i||(o.needRuntime=n.helper(e));}return o.props=o.props.filter((e=>!(4===e.key.type&&"modelValue"===e.key.content))),o},on:(e,t,n)=>xa(e,0,n,(t=>{const{modifiers:o}=e;if(!o.length)return t;let{key:r,value:s}=t.props[0];const{keyModifiers:i,nonKeyModifiers:l,eventOptionModifiers:c}=((e,t,n,o)=>{const r=[],s=[],i=[];for(let l=0;l<t.length;l++){const n=t[l];qa(n)?i.push(n):Za(n)?Rl(e)?Qa(e.content)?r.push(n):s.push(n):(r.push(n),s.push(n)):Ja(n)?s.push(n):r.push(n);}return {keyModifiers:r,nonKeyModifiers:s,eventOptionModifiers:i}})(r,o);if(l.includes("right")&&(r=Xa(r,"onContextmenu")),l.includes("middle")&&(r=Xa(r,"onMouseup")),l.length&&(s=Nl(n.helper(Ba),[s,JSON.stringify(l)])),!i.length||Rl(r)&&!Qa(r.content)||(s=Nl(n.helper(La),[s,JSON.stringify(i)])),c.length){const e=c.map(z).join("");r=Rl(r)?kl(`${r.content}${e}`,!0):Tl(["(",r,`) + "${e}"`]);}return {props:[wl(r,s)]}})),show:(e,t,n)=>({props:[],needRuntime:n.helper(ja)})};const nu=Object.create(null);function ou(e,t){if(!F(e)){if(!e.nodeType)return v;e=e.innerHTML;}const n=e,o=nu[n];if(o)return o;if("#"===e[0]){const t=document.querySelector(e);e=t?t.innerHTML:"";}const{code:r}=function(e,t={}){return Aa(e,x({},Ka,t,{nodeTransforms:[Ya,...eu,...t.nodeTransforms||[]],directiveTransforms:x({},tu,t.directiveTransforms||{}),transformHoist:null}))}(e,x({hoistStatic:!0,onError:void 0,onWarn:v},t)),s=new Function(r)();return s._rc=!0,nu[n]=s}return yr(ou),e.$computed=function(){},e.$fromRefs=function(){return null},e.$raw=function(){return null},e.$ref=function(){},e.BaseTransition=rn,e.Comment=Ao,e.EffectScope=Y,e.Fragment=Ro,e.KeepAlive=gn,e.ReactiveEffect=pe,e.Static=Mo,e.Suspense=qt,e.Teleport=ko,e.Text=Fo,e.Transition=Is,e.TransitionGroup=ei,e.VueElement=Fs,e.callWithAsyncErrorHandling=Rr,e.callWithErrorHandling=$r,e.camelize=H,e.capitalize=z,e.cloneVNode=Zo,e.compatUtils=null,e.compile=ou,e.computed=Ot,e.createApp=(...e)=>{const t=ki().createApp(...e),{mount:n}=t;return t.mount=e=>{const o=$i(e);if(!o)return;const r=t._component;R(r)||r.render||r.template||(r.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t},e.createBlock=Uo,e.createCommentVNode=function(e="",t=!1){return t?(Io(),Uo(Ao,null,e)):qo(Ao,null,e)},e.createElementBlock=function(e,t,n,o,r,s){return jo(Go(e,t,n,o,r,s,!0))},e.createElementVNode=Go,e.createHydrationRenderer=go,e.createRenderer=mo,e.createSSRApp=(...e)=>{const t=Ti().createApp(...e),{mount:n}=t;return t.mount=e=>{const t=$i(e);if(t)return n(t,!0,t instanceof SVGElement)},t},e.createSlots=function(e,t){for(let n=0;n<t.length;n++){const o=t[n];if(T(o))for(let t=0;t<o.length;t++)e[o[t].name]=o[t].fn;else o&&(e[o.name]=o.fn);}return e},e.createStaticVNode=function(e,t){const n=qo(Mo,null,e);return n.staticCount=t,n},e.createTextVNode=Qo,e.createVNode=qo,e.customRef=function(e){return new Rt(e)},e.defineAsyncComponent=function(e){R(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:o,delay:r=200,timeout:s,suspensible:i=!0,onError:l}=e;let c,a=null,u=0;const p=()=>{let e;return a||(e=a=t().catch((e=>{if(e=e instanceof Error?e:new Error(String(e)),l)return new Promise(((t,n)=>{l(e,(()=>t((u++,a=null,p()))),(()=>n(e)),u+1);}));throw e})).then((t=>e!==a&&a?a:(t&&(t.__esModule||"Module"===t[Symbol.toStringTag])&&(t=t.default),c=t,t))))};return fn({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return c},setup(){const e=ar;if(c)return ()=>hn(c,e);const t=t=>{a=null,Fr(t,e,13,!o);};if(i&&e.suspense)return p().then((t=>()=>hn(t,e))).catch((e=>(t(e),()=>o?qo(o,{error:e}):null)));const l=wt(!1),u=wt(),f=wt(!!r);return r&&setTimeout((()=>{f.value=!1;}),r),null!=s&&setTimeout((()=>{if(!l.value&&!u.value){const e=new Error(`Async component timed out after ${s}ms.`);t(e),u.value=e;}}),s),p().then((()=>{l.value=!0,e.parent&&mn(e.parent.vnode)&&Kr(e.parent.update);})).catch((e=>{t(e),u.value=e;})),()=>l.value&&c?hn(c,e):u.value&&o?qo(o,{error:u.value}):n&&!f.value?qo(n):void 0}})},e.defineComponent=fn,e.defineCustomElement=$s,e.defineEmits=function(){return null},e.defineExpose=function(e){},e.defineProps=function(){return null},e.defineSSRCustomElement=e=>$s(e,Ei),e.effect=function(e,t){e.effect&&(e=e.effect.fn);const n=new pe(e);t&&(x(n,t),t.scope&&ee(n,t.scope)),t&&t.lazy||n.run();const o=n.run.bind(n);return o.effect=n,o},e.effectScope=function(e){return new Y(e)},e.getCurrentInstance=ur,e.getCurrentScope=function(){return Q},e.getTransitionRawChildren=pn,e.guardReactiveProps=Jo,e.h=cs,e.handleError=Fr,e.hydrate=Ei,e.initCustomFormatter=function(){},e.inject=tn,e.isMemoSame=us,e.isProxy=vt,e.isReactive=mt,e.isReadonly=gt,e.isRef=Ct,e.isRuntimeOnly=()=>!hr,e.isVNode=Ho,e.markRaw=bt,e.mergeDefaults=function(e,t){for(const n in t){const o=e[n];o?o.default=t[n]:null===o&&(e[n]={default:t[n]});}return e},e.mergeProps=tr,e.nextTick=zr,e.normalizeClass=c,e.normalizeProps=function(e){if(!e)return null;let{class:t,style:n}=e;return t&&!F(t)&&(e.class=c(t)),n&&(e.style=r(n)),e},e.normalizeStyle=r,e.onActivated=yn,e.onBeforeMount=Tn,e.onBeforeUnmount=Rn,e.onBeforeUpdate=En,e.onDeactivated=bn,e.onErrorCaptured=Pn,e.onMounted=Nn,e.onRenderTracked=On,e.onRenderTriggered=Mn,e.onScopeDispose=function(e){Q&&Q.cleanups.push(e);},e.onServerPrefetch=An,e.onUnmounted=Fn,e.onUpdated=$n,e.openBlock=Io,e.popScopeId=function(){Lt=null;},e.provide=en,e.proxyRefs=$t,e.pushScopeId=function(e){Lt=e;},e.queuePostFlushCb=Jr,e.reactive=pt,e.readonly=dt,e.ref=wt,e.registerRuntimeCompiler=yr,e.render=Ni,e.renderList=function(e,t,n,o){let r;const s=n&&n[o];if(T(e)||F(e)){r=new Array(e.length);for(let n=0,o=e.length;n<o;n++)r[n]=t(e[n],n,void 0,s&&s[n]);}else if("number"==typeof e){r=new Array(e);for(let n=0;n<e;n++)r[n]=t(n+1,n,void 0,s&&s[n]);}else if(M(e))if(e[Symbol.iterator])r=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else {const n=Object.keys(e);r=new Array(n.length);for(let o=0,i=n.length;o<i;o++){const i=n[o];r[o]=t(e[i],i,o,s&&s[o]);}}else r=[];return n&&(n[o]=r),r},e.renderSlot=function(e,t,n={},o,r){if(Bt.isCE)return qo("slot","default"===t?null:{name:t},o&&o());let s=e[t];s&&s._c&&(s._d=!1),Io();const i=s&&nr(s(n)),l=Uo(Ro,{key:n.key||`_${t}`},i||(o?o():[]),i&&1===e._?64:-2);return !r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l},e.resolveComponent=function(e,t){return Eo(To,e,!0,t)||e},e.resolveDirective=function(e){return Eo("directives",e)},e.resolveDynamicComponent=function(e){return F(e)?Eo(To,e,!1)||e:e||No},e.resolveFilter=null,e.resolveTransitionHooks=ln,e.setBlockTracking=Lo,e.setDevtoolsHook=function(t){e.devtools=t;},e.setTransitionHooks=un,e.shallowReactive=ft,e.shallowReadonly=function(e){return ht(e,!0,Pe,st,at)},e.shallowRef=function(e){return Tt(e,!0)},e.ssrContextKey=as,e.ssrUtils=null,e.stop=function(e){e.effect.stop();},e.toDisplayString=e=>null==e?"":T(e)||M(e)&&e.toString===P?JSON.stringify(e,h,2):String(e),e.toHandlerKey=K,e.toHandlers=function(e){const t={};for(const n in e)t[K(n)]=e[n];return t},e.toRaw=yt,e.toRef=At,e.toRefs=function(e){const t=T(e)?new Array(e.length):{};for(const n in e)t[n]=At(e,n);return t},e.transformVNodeArgs=function(e){},e.triggerRef=function(e){St(e);},e.unref=Nt,e.useAttrs=function(){return ls().attrs},e.useCssModule=function(e="$style"){return m},e.useCssVars=function(e){const t=ur();if(!t)return;const n=()=>As(t.subTree,e(t.proxy));es(n),Nn((()=>{const e=new MutationObserver(n);e.observe(t.subTree.el.parentNode,{childList:!0}),Fn((()=>e.disconnect()));}));},e.useSSRContext=()=>{},e.useSlots=function(){return ls().slots},e.useTransitionState=nn,e.vModelCheckbox=ci,e.vModelDynamic=mi,e.vModelRadio=ui,e.vModelSelect=pi,e.vModelText=li,e.vShow=_i,e.version=ps,e.warn=Tr,e.watch=ns,e.watchEffect=function(e,t){return os(e,null,t)},e.watchPostEffect=es,e.watchSyncEffect=function(e,t){return os(e,null,{flush:"sync"})},e.withAsyncContext=function(e){const t=ur();let n=e();return fr(),O(n)&&(n=n.catch((e=>{throw pr(t),e}))),[n,()=>pr(t)]},e.withCtx=Ut,e.withDefaults=function(e,t){return null},e.withDirectives=function(e,t){if(null===Bt)return e;const n=Bt.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[e,s,i,l=m]=t[r];R(e)&&(e={mounted:e,updated:e}),e.deep&&is(s),o.push({dir:e,instance:n,value:s,oldValue:void 0,arg:i,modifiers:l});}return e},e.withKeys=(e,t)=>n=>{if(!("key"in n))return;const o=W(n.key);return t.some((e=>e===o||bi[e]===o))?e(n):void 0},e.withMemo=function(e,t,n,o){const r=n[o];if(r&&us(r,e))return r;const s=t();return s.memo=e.slice(),n[o]=s},e.withModifiers=(e,t)=>(n,...o)=>{for(let e=0;e<t.length;e++){const o=yi[t[e]];if(o&&o(n,t))return}return e(n,...o)},e.withScopeId=e=>Ut,Object.defineProperty(e,"__esModule",{value:!0}),e}({});

  /*!
    * vue-router v4.0.11
    * (c) 2021 Eduardo San Martin Morote
    * @license MIT
    */
  window.VueRouter=function(e,t){const n="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,r=e=>n?Symbol(e):"_vr_"+e,o=r("rvlm"),a=r("rvd"),c=r("r"),s=r("rl"),i=r("rvl"),l="undefined"!=typeof window;const u=Object.assign;function f(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o);}return n}const p=()=>{},h=/\/$/;function d(e,t,n="/"){let r,o={},a="",c="";const s=t.indexOf("?"),i=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),a=t.slice(s+1,i>-1?i:t.length),o=e(a)),i>-1&&(r=r||t.slice(0,i),c=t.slice(i,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,c=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],1!==c&&"."!==a){if(".."!==a)break;c--;}return n.slice(0,c).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+c,path:r,query:o,hash:c}}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t){return (e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return !1;for(const n in e)if(!y(e[n],t[n]))return !1;return !0}function y(e,t){return Array.isArray(e)?b(e,t):Array.isArray(t)?b(t,e):e===t}function b(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var w,E;!function(e){e.pop="pop",e.push="push";}(w||(w={})),function(e){e.back="back",e.forward="forward",e.unknown="";}(E||(E={}));function R(e){if(!e)if(l){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"");}else e="/";return "/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(h,"")}const A=/^[^#]+#/;function k(e,t){return e.replace(A,"#")+t}const O=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return {behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e);}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset);}function j(e,t){return (history.state?history.state.position-t:-1)+e}const x=new Map;let C=()=>location.protocol+"//"+location.host;function $(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return "/"!==n[0]&&(n="/"+n),m(n,"")}return m(n,e)+r+o}function S(e,t,n,r=!1,o=!1){return {back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?O():null}}function L(e){const t=function(e){const{history:t,location:n}=window,r={value:$(e,n)},o={value:t.state};function a(r,a,c){const s=e.indexOf("#"),i=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:C()+e+r;try{t[c?"replaceState":"pushState"](a,"",i),o.value=a;}catch(e){console.error(e),n[c?"replace":"assign"](i);}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const c=u({},o.value,t.state,{forward:e,scroll:O()});a(c.current,c,!0),a(e,u({},S(r.value,e,null),{position:c.position+1},n),!1),r.value=e;},replace:function(e,n){a(e,u({},t.state,S(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e;}}}(e=R(e)),n=function(e,t,n,r){let o=[],a=[],c=null;const s=({state:a})=>{const s=$(e,location),i=n.value,l=t.value;let u=0;if(a){if(n.value=s,t.value=a,c&&c===i)return void(c=null);u=l?a.position-l.position:0;}else r(s);o.forEach((e=>{e(n.value,i,{delta:u,type:w.pop,direction:u?u>0?E.forward:E.back:E.unknown});}));};function i(){const{history:e}=window;e.state&&e.replaceState(u({},e.state,{scroll:O()}),"");}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",i),{pauseListeners:function(){c=n.value;},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1);};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",i);}}}(e,t.state,t.location,t.replace);const r=u({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e);},createHref:k.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function q(e){return "string"==typeof e||"symbol"==typeof e}const M={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_=r("nf");var T;function B(e,t){return u(new Error,{type:e,[_]:!0},t)}function G(e,t){return e instanceof Error&&_ in e&&(null==t||!!(e.type&t))}e.NavigationFailureType=void 0,(T=e.NavigationFailureType||(e.NavigationFailureType={}))[T.aborted=4]="aborted",T[T.cancelled=8]="cancelled",T[T.duplicated=16]="duplicated";const F="[^/]+?",I={sensitive:!1,strict:!1,start:!0,end:!0},K=/[.+*?^${}()[\]/\\]/g;function U(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++;}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function V(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=U(r[n],o[n]);if(e)return e;n++;}return o.length-r.length}const H={type:0,value:""},W=/[a-zA-Z0-9_]/;function D(e,t,n){const r=function(e,t){const n=u({},I,t),r=[];let o=n.start?"^":"";const a=[];for(const t of e){const e=t.length?[]:[90];n.strict&&!t.length&&(o+="/");for(let r=0;r<t.length;r++){const c=t[r];let s=40+(n.sensitive?.25:0);if(0===c.type)r||(o+="/"),o+=c.value.replace(K,"\\$&"),s+=40;else if(1===c.type){const{value:e,repeatable:n,optional:i,regexp:l}=c;a.push({name:e,repeatable:n,optional:i});const u=l||F;if(u!==F){s+=10;try{new RegExp(`(${u})`);}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let f=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(f=i&&t.length<2?`(?:/${f})`:"/"+f),i&&(f+="?"),o+=f,s+=20,i&&(s+=-8),n&&(s+=-20),".*"===u&&(s+=-50);}e.push(s);}r.push(e);}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001;}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const c=new RegExp(o,n.sensitive?"":"i");return {re:c,score:r,keys:a,parse:function(e){const t=e.match(c),n={};if(!t)return null;for(let e=1;e<t.length;e++){const r=t[e]||"",o=a[e-1];n[o.name]=r&&o.repeatable?r.split("/"):r;}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:c,optional:s}=e,i=a in t?t[a]:"";if(Array.isArray(i)&&!c)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(i)?i.join("/"):i;if(!l){if(!s)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0);}n+=l;}}return n}}}(function(e){if(!e)return [[]];if("/"===e)return [[H]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let a;function c(){a&&o.push(a),a=[];}let s,i=0,l="",u="";function f(){l&&(0===n?a.push({type:0,value:l}):1===n||2===n||3===n?(a.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),l="");}function p(){l+=s;}for(;i<e.length;)if(s=e[i++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(l&&f(),c()):":"===s?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===s?n=2:W.test(s)?p():(f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--,u="";break;default:t("Unknown state");}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),c(),o}(e.path),n),o=u(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function N(e,t){const n=[],r=new Map;function o(e,n,r){const s=!r,i=function(e){return {path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:z(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);i.aliasOf=r&&r.record;const l=Y(t,e),f=[i];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)f.push(u({},i,{components:r?r.record.components:i.components,path:e,aliasOf:r?r.record:i}));}let h,d;for(const t of f){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u);}if(h=D(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),s&&e.name&&!Q(h)&&a(e.name)),"children"in i){const e=i.children;for(let t=0;t<e.length;t++)o(e[t],h,r&&r.children[t]);}r=r||h,c(h);}return d?()=>{a(d);}:p}function a(e){if(q(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a));}else {const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a));}}function c(e){let t=0;for(;t<n.length&&V(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!Q(e)&&r.set(e.record.name,e);}return t=Y({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,c,s={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw B(1,{location:e});c=o.record.name,s=u(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),a=o.stringify(s);}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(s=o.parse(a),c=o.record.name);else {if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw B(1,{location:e,currentLocation:t});c=o.record.name,s=u({},t.params,e.params),a=o.stringify(s);}const i=[];let l=o;for(;l;)i.unshift(l.record),l=l.parent;return {name:c,path:a,params:s,matched:i,meta:X(i)}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function z(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function Q(e){for(;e;){if(e.record.aliasOf)return !0;e=e.parent;}return !1}function X(e){return e.reduce(((e,t)=>u(e,t.meta)),{})}function Y(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Z=/#/g,J=/&/g,ee=/\//g,te=/=/g,ne=/\?/g,re=/\+/g,oe=/%5B/g,ae=/%5D/g,ce=/%5E/g,se=/%60/g,ie=/%7B/g,le=/%7C/g,ue=/%7D/g,fe=/%20/g;function pe(e){return encodeURI(""+e).replace(le,"|").replace(oe,"[").replace(ae,"]")}function he(e){return pe(e).replace(re,"%2B").replace(fe,"+").replace(Z,"%23").replace(J,"%26").replace(se,"`").replace(ie,"{").replace(ue,"}").replace(ce,"^")}function de(e){return null==e?"":function(e){return pe(e).replace(Z,"%23").replace(ne,"%3F")}(e).replace(ee,"%2F")}function me(e){try{return decodeURIComponent(""+e)}catch(e){}return ""+e}function ge(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const r=n[e].replace(re," "),o=r.indexOf("="),a=me(o<0?r:r.slice(0,o)),c=o<0?null:me(r.slice(o+1));if(a in t){let e=t[a];Array.isArray(e)||(e=t[a]=[e]),e.push(c);}else t[a]=c;}return t}function ve(e){let t="";for(let n in e){const r=e[n];if(n=he(n).replace(te,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map((e=>e&&he(e))):[r&&he(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e));}));}return t}function ye(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r);}return t}function be(){let e=[];return {add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1);}},list:()=>e,reset:function(){e=[];}}}function we(e,n,r){const o=()=>{e[n].delete(r);};t.onUnmounted(o),t.onDeactivated(o),t.onActivated((()=>{e[n].add(r);})),e[n].add(r);}function Ee(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return ()=>new Promise(((c,s)=>{const i=e=>{var i;!1===e?s(B(4,{from:n,to:t})):e instanceof Error?s(e):"string"==typeof(i=e)||i&&"object"==typeof i?s(B(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),c());},l=e.call(r&&r.instances[o],t,n,i);let u=Promise.resolve(l);e.length<3&&(u=u.then(i)),u.catch((e=>s(e)));}))}function Re(e,t,r,o){const a=[];for(const s of e)for(const e in s.components){let i=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(c=i)||"displayName"in c||"props"in c||"__vccOpts"in c){const n=(i.__vccOpts||i)[t];n&&a.push(Ee(n,r,o,s,e));}else {let c=i();a.push((()=>c.then((a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const c=(i=a).__esModule||n&&"Module"===i[Symbol.toStringTag]?a.default:a;var i;s.components[e]=c;const l=(c.__vccOpts||c)[t];return l&&Ee(l,r,o,s,e)()}))));}}var c;return a}function Ae(e){const n=t.inject(c),r=t.inject(s),o=t.computed((()=>n.resolve(t.unref(e.to)))),a=t.computed((()=>{const{matched:e}=o.value,{length:t}=e,n=e[t-1],a=r.matched;if(!n||!a.length)return -1;const c=a.findIndex(g.bind(null,n));if(c>-1)return c;const s=Oe(e[t-2]);return t>1&&Oe(n)===s&&a[a.length-1].path!==s?a.findIndex(g.bind(null,e[t-2])):c})),i=t.computed((()=>a.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return !1}else if(!Array.isArray(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return !1}return !0}(r.params,o.value.params))),l=t.computed((()=>a.value>-1&&a.value===r.matched.length-1&&v(r.params,o.value.params)));return {route:o,href:t.computed((()=>o.value.href)),isActive:i,isExactActive:l,navigate:function(r={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return !0}(r)?n[t.unref(e.replace)?"replace":"push"](t.unref(e.to)).catch(p):Promise.resolve()}}}const ke=t.defineComponent({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ae,setup(e,{slots:n}){const r=t.reactive(Ae(e)),{options:o}=t.inject(c),a=t.computed((()=>({[Pe(e.activeClass,o.linkActiveClass,"router-link-active")]:r.isActive,[Pe(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive})));return ()=>{const o=n.default&&n.default(r);return e.custom?o:t.h("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:a.value},o)}}});function Oe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Pe=(e,t,n)=>null!=e?e:null!=t?t:n;function je(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const xe=t.defineComponent({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:n,slots:r}){const c=t.inject(i),s=t.computed((()=>e.route||c.value)),l=t.inject(a,0),f=t.computed((()=>s.value.matched[l]));t.provide(a,l+1),t.provide(o,f),t.provide(i,s);const p=t.ref();return t.watch((()=>[p.value,f.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&g(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)));}),{flush:"post"}),()=>{const o=s.value,a=f.value,c=a&&a.components[e.name],i=e.name;if(!c)return je(r.default,{Component:c,route:o});const l=a.props[e.name],h=l?!0===l?o.params:"function"==typeof l?l(o):l:null,d=t.h(c,u({},h,n,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[i]=null);},ref:p}));return je(r.default,{Component:d,route:o})||d}}});function Ce(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}return e.RouterLink=ke,e.RouterView=xe,e.START_LOCATION=M,e.createMemoryHistory=function(e=""){let t=[],n=[""],r=0;function o(e){r++,r===n.length||n.splice(r),n.push(e);}const a={location:"",state:{},base:e,createHref:k.bind(null,e),replace(e){n.splice(r--,1),o(e);},push(e,t){o(e);},listen:e=>(t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1);}),destroy(){t=[],n=[""],r=0;},go(e,o=!0){const a=this.location,c=e<0?E.back:E.forward;r=Math.max(0,Math.min(r+e,n.length-1)),o&&function(e,n,{direction:r,delta:o}){const a={direction:r,delta:o,type:w.pop};for(const r of t)r(e,n,a);}(this.location,a,{direction:c,delta:e});}};return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n[r]}),a},e.createRouter=function(e){const n=N(e.routes,e),r=e.parseQuery||ge,o=e.stringifyQuery||ve,a=e.history,h=be(),m=be(),y=be(),b=t.shallowRef(M);let E=M;l&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const R=f.bind(null,(e=>""+e)),A=f.bind(null,de),k=f.bind(null,me);function C(e,t){if(t=u({},t||b.value),"string"==typeof e){const o=d(r,e,t.path),c=n.resolve({path:o.path},t),s=a.createHref(o.fullPath);return u(o,c,{params:k(c.params),hash:me(o.hash),redirectedFrom:void 0,href:s})}let c;if("path"in e)c=u({},e,{path:d(r,e.path,t.path).path});else {const n=u({},e.params);for(const e in n)null==n[e]&&delete n[e];c=u({},e,{params:A(e.params)}),t.params=A(t.params);}const s=n.resolve(c,t),i=e.hash||"";s.params=R(k(s.params));const l=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(o,u({},e,{hash:(f=i,pe(f).replace(ie,"{").replace(ue,"}").replace(ce,"^")),path:s.path}));var f;const p=a.createHref(l);return u({fullPath:l,hash:i,query:o===ve?ye(e.query):e.query||{}},s,{redirectedFrom:void 0,href:p})}function $(e){return "string"==typeof e?d(r,e,b.value.path):u({},e)}function S(e,t){if(E!==e)return B(8,{from:t,to:e})}function L(e){return T(e)}function _(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return "string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=$(r):{path:r},r.params={}),u({query:e.query,hash:e.hash,params:e.params},r)}}function T(e,t){const n=E=C(e),r=b.value,a=e.state,c=e.force,s=!0===e.replace,i=_(n);if(i)return T(u($(i),{state:a,force:c,replace:s}),t||n);const l=n;let f;return l.redirectedFrom=t,!c&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&g(t.matched[r],n.matched[o])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(o,r,n)&&(f=B(16,{to:l,from:r}),Y(r,r,!0,!1)),(f?Promise.resolve(f):I(l,r)).catch((e=>G(e)?e:Q(e,l,r))).then((e=>{if(e){if(G(e,2))return T(u($(e.to),{state:a,force:c,replace:s}),t||l)}else e=U(l,r,!0,s,a);return K(l,r,e),e}))}function F(e,t){const n=S(e,t);return n?Promise.reject(n):Promise.resolve()}function I(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let c=0;c<a;c++){const a=t.matched[c];a&&(e.matched.find((e=>g(e,a)))?r.push(a):n.push(a));const s=e.matched[c];s&&(t.matched.find((e=>g(e,s)))||o.push(s));}return [n,r,o]}(e,t);n=Re(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach((r=>{n.push(Ee(r,e,t));}));const c=F.bind(null,e,t);return n.push(c),Ce(n).then((()=>{n=[];for(const r of h.list())n.push(Ee(r,e,t));return n.push(c),Ce(n)})).then((()=>{n=Re(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Ee(r,e,t));}));return n.push(c),Ce(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Ee(o,e,t));else n.push(Ee(r.beforeEnter,e,t));return n.push(c),Ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Re(a,"beforeRouteEnter",e,t),n.push(c),Ce(n)))).then((()=>{n=[];for(const r of m.list())n.push(Ee(r,e,t));return n.push(c),Ce(n)})).catch((e=>G(e,8)?e:Promise.reject(e)))}function K(e,t,n){for(const r of y.list())r(e,t,n);}function U(e,t,n,r,o){const c=S(e,t);if(c)return c;const s=t===M,i=l?history.state:{};n&&(r||s?a.replace(e.fullPath,u({scroll:s&&i&&i.scroll},o)):a.push(e.fullPath,o)),b.value=e,Y(e,t,n,s),X();}let V;function H(){V=a.listen(((e,t,n)=>{const r=C(e),o=_(r);if(o)return void T(u(o,{replace:!0}),r).catch(p);E=r;const c=b.value;var s,i;l&&(s=j(c.fullPath,n.delta),i=O(),x.set(s,i)),I(r,c).catch((e=>G(e,12)?e:G(e,2)?(T(e.to,r).then((e=>{G(e,20)&&!n.delta&&n.type===w.pop&&a.go(-1,!1);})).catch(p),Promise.reject()):(n.delta&&a.go(-n.delta,!1),Q(e,r,c)))).then((e=>{(e=e||U(r,c,!1))&&(n.delta?a.go(-n.delta,!1):n.type===w.pop&&G(e,20)&&a.go(-1,!1)),K(r,c,e);})).catch(p);}));}let W,D=be(),z=be();function Q(e,t,n){X(e);const r=z.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function X(e){W||(W=!0,H(),D.list().forEach((([t,n])=>e?n(e):t())),D.reset());}function Y(n,r,o,a){const{scrollBehavior:c}=e;if(!l||!c)return Promise.resolve();const s=!o&&function(e){const t=x.get(e);return x.delete(e),t}(j(n.fullPath,0))||(a||!o)&&history.state&&history.state.scroll||null;return t.nextTick().then((()=>c(n,r,s))).then((e=>e&&P(e))).catch((e=>Q(e,n,r)))}const Z=e=>a.go(e);let J;const ee=new Set;return {currentRoute:b,addRoute:function(e,t){let r,o;return q(e)?(r=n.getRecordMatcher(e),o=t):o=e,n.addRoute(o,r)},removeRoute:function(e){const t=n.getRecordMatcher(e);t&&n.removeRoute(t);},hasRoute:function(e){return !!n.getRecordMatcher(e)},getRoutes:function(){return n.getRoutes().map((e=>e.record))},resolve:C,options:e,push:L,replace:function(e){return L(u($(e),{replace:!0}))},go:Z,back:()=>Z(-1),forward:()=>Z(1),beforeEach:h.add,beforeResolve:m.add,afterEach:y.add,onError:z.add,isReady:function(){return W&&b.value!==M?Promise.resolve():new Promise(((e,t)=>{D.add([e,t]);}))},install(e){e.component("RouterLink",ke),e.component("RouterView",xe),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>t.unref(b)}),l&&!J&&b.value===M&&(J=!0,L(a.location).catch((e=>{})));const n={};for(const e in M)n[e]=t.computed((()=>b.value[e]));e.provide(c,this),e.provide(s,t.reactive(n)),e.provide(i,b);const r=e.unmount;ee.add(e),e.unmount=function(){ee.delete(e),ee.size<1&&(E=M,V&&V(),b.value=M,J=!1,W=!1),r();};}}},e.createRouterMatcher=N,e.createWebHashHistory=function(e){return (e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),L(e)},e.createWebHistory=L,e.isNavigationFailure=G,e.matchedRouteKey=o,e.onBeforeRouteLeave=function(e){const n=t.inject(o,{}).value;n&&we(n,"leaveGuards",e);},e.onBeforeRouteUpdate=function(e){const n=t.inject(o,{}).value;n&&we(n,"updateGuards",e);},e.parseQuery=ge,e.routeLocationKey=s,e.routerKey=c,e.routerViewLocationKey=i,e.stringifyQuery=ve,e.useLink=Ae,e.useRoute=function(){return t.inject(s)},e.useRouter=function(){return t.inject(c)},e.viewDepthKey=a,Object.defineProperty(e,"__esModule",{value:!0}),e}({},Vue);

  // WebReflection / element-notifier
  function onMutation(callback, root) {

      let loop = function loop(nodes, added, removed, connected, pass) {

          for (let i = 0, length = nodes.length; i < length; i++) {

              let node = nodes[i];

              if (pass || 'querySelectorAll' in node) {

                  if (connected) {
                      if (!added.has(node)) {
                          added.add(node);
                          removed["delete"](node);
                          callback(node, connected);
                      }
                  } else if (!removed.has(node)) {
                      removed.add(node);
                      added["delete"](node);
                      callback(node, connected);
                  }

                  if (!pass) loop((node.shadowRoot || node)['querySelectorAll']('*'), added, removed, connected, true);
              }
          }
      };

      let observer = new MutationObserver(records => {
          for (let added = new Set(), removed = new Set(), i = 0, length = records.length; i < length; i++) {
              let _records$i = records[i],
                  addedNodes = _records$i.addedNodes,
                  removedNodes = _records$i.removedNodes;
              loop(removedNodes, added, removed, false, false);
              loop(addedNodes, added, removed, true, false);
          }
      });

      observer.observe(root || document, {
          subtree: true,
          childList: true
      });

      return observer;
  }

  function on$1(element, name, delegate, fn) {

      if (!fn) {
         element.addEventListener(name, arguments[2]);
      } else {
          element.addEventListener(name, function (e) {

              let target = e.target;

              while (target !== element) {

                  if (!target) {
                      break;
                  }

                  if (target.matches(delegate)){
                      return fn.apply(target, arguments);
                  }

                  target = target.parentNode;
              }
          }, true);
      }

      return element;
  }

  function trigger(ele, name, data = {}) {
      ele.dispatchEvent(new CustomEvent(name, Object.assign({bubbles: true}, data)));
  }

  on$1(document.documentElement, 'click', function(e) {

      let dropdowns = document.body.querySelectorAll('kiss-dropdown[open="true"]'),
          dp = e.target.closest('kiss-dropdown');

      for (let i=0;i<dropdowns.length;i++) {
          if (!dp || dp!==dropdowns[i]) dropdowns[i].close();
      }

  });

  customElements.define('kiss-dropdown', class extends HTMLElement {

      connectedCallback() {

          this.addEventListener('click', (e) => {

              if (e.target.matches('input,select,textarea')) {
                  return;
              }
              
              if (this.getAttribute('open') == 'true') {

                  if (this.getAttribute('autohide') == 'false') {
                      return
                  }

                  this.close();
              } else {
                  this.open();
              }
          });
      }

      open() {
          this.setAttribute('open', 'true');
      }

      close() {
          this.removeAttribute('open');
      }
  });

  customElements.define('kiss-dialog', class extends HTMLElement {

      connectedCallback() {

          on$1(this, 'click', '[kiss-dialog-close]', e => {
              e.preventDefault();
              this.close();
          });
      }

      show() {
          this.setAttribute('open', 'true');
      }

      close() {
          this.removeAttribute('open');
      }
  });

  on$1(document.documentElement, 'click', '[kiss-offcanvas]', function (e) {

      e.preventDefault();

      let offcanvas = document.querySelector(this.getAttribute('kiss-offcanvas') || this.getAttribute('href'));

      if (offcanvas && offcanvas.show) {
          offcanvas.show();
      }
  });

  customElements.define('kiss-offcanvas', class extends HTMLElement {

      connectedCallback() {

          let $self = this, pointerStart = null;

          on$1(this, 'pointerdown', e => pointerStart = e.target);
          on$1(this, 'pointerup', e => {

              if (e.target == this && pointerStart == this) {

                  e.preventDefault();

                  if (!this.matches('[modal="true"]')) {
                      this.close();
                  }
              }
          });


          on$1(this, 'click', '[kiss-offcanvas-close]', function(e){

              if (this.getAttribute('kiss-offcanvas-close') != 'no-prevent') {
                  e.preventDefault();
              }

              $self.close();
          });

      }

      show() {
          this.setAttribute('open', 'true');
      }

      close() {
          this.removeAttribute('open');
      }
  });

  on$1(document.documentElement, 'click', '[kiss-popoutmenu]', function (e) {

      e.preventDefault();

      let menu = document.querySelector(this.getAttribute('kiss-popoutmenu') || this.getAttribute('href'));

      if (menu && menu.show) {

          let position = this.getAttribute('kiss-popoutmenu-pos');

          menu.show(position ? this : null, position);
      }
  });

  customElements.define('kiss-popoutmenu', class extends HTMLElement {

      connectedCallback() {

          on$1(this, 'click', e => {

              if (e.target.matches('[kiss-popoutmenu-close]') || e.target.closest('[kiss-popoutmenu-close]')) {
                  return this.close();
              }

              if (this.getAttribute('modal') !== 'true') {
                  this.close();
              }
          });
      }

      show(ele, position = 'left') {

          let content = this.querySelector('kiss-content');

          if (content) {
              content.style.position = '';
              content.style.top = '';
              content.style.left = '';
          }

          if (content && ele) {

              let rect = ele.getBoundingClientRect(),
                  left = rect.left,
                  top = rect.top + ele.offsetHeight;

              switch (position) {
                  case "right":
                      left = rect.right - content.offsetWidth;
                      break;

                  case "center":
                      left = (rect.right - ele.offsetWidth/2) - content.offsetWidth / 2;
                      break;

                  case "left":
                  default:
                      left = rect.left;
                      break;
              }

              if (left + content.offsetWidth > this.offsetWidth) {
                  left = rect.right - content.offsetWidth;
              }

              content.style.position = 'absolute';
              content.style.top = `${top}px`;
              content.style.left = `${left}px`;

          }

          this.setAttribute('open', 'true');
      }

      close() {
          this.removeAttribute('open');
          trigger(this, 'popoutmenuclose');
      }
  });

  customElements.define('kiss-parallax', class extends HTMLElement {

      connectedCallback() {

          let $this = this;

          this.speed = .3;
          this.mobilePx = 450;
          this.mobileDisable = this.getAttribute('mobile') == 'false';
          this.conditions = [];
          this.active = true;

          this.transform = this.getAttribute('transform') || 'translateY';

          this.winHeight = window.innerHeight;
          this.accumulated = 0;
          this.getRect();

          this.startScroll = this.targetR.top - this.winHeight > 0
            ? this.targetR.top - this.winHeight
            : 0;

          window.addEventListener('scroll', event => {
              requestAnimationFrame(() => {
                  if ($this.mobileDisable && window.innerWidth < this.mobilePx) return

                  if ($this.active) {
                    $this.update();
                  }
              });
          });
      }

      // HELPERS
      scrollY() {
          return window.scrollY || window.pageYOffset;
      }

      getTranslation() {
          const dist = this.scrollY() - this.startScroll;
          const translation = (dist * this.speed) + this.accumulated;
          return translation >= 0 ? translation : 0;
      }

      getRect() {
          this.targetR = this.getBoundingClientRect();
          return this.targetR;
      }

      inWindow() {
          this.getRect();

          const top = this.targetR.top;
          const bottom = this.targetR.bottom;

          return top < this.winHeight && bottom > 0;
      }

      update() {

          if (this._isHidden()) {
              return;
          }

          let translate = this.getTranslation();
          let percent = ((translate / this.speed)/this.winHeight) * 100;

          if (percent < 0) percent = 0;
          if (percent > 100) percent = 100;

          let style = {transform : '', filter: ''}, mod;

          this.transform.split(' ').forEach(prop => {

              mod = prop.split('*');
              prop = mod[0];
              mod = Number(mod[1] || 1);

              switch (prop) {
                  case 'translateX':
                  case 'translateY':
                      style.transform += ` ${prop}(${(translate * mod)}px)`;
                      break;

                  case 'rotate':
                  case 'rotateX':
                  case 'rotateY':
                      style.transform += ` ${prop}(${(translate * mod)}deg)`;
                      break;

                  case 'opacity':
                      style.opacity = (mod < 0 ?  (percent/100) : 1 - (percent/100)) * Math.abs(mod);
                      break;
              }
          });

          Object.assign(this.style, style);
      }

      _isHidden() {
          return (this.offsetTop === null)
      }
  });

  function debounce(func, wait, immediate) {

      let timeout;

      return function () {
          let context = this, args = arguments;
          let later = () => {
              timeout = null;
              if (!immediate) func.apply(context, args);
          };
          let callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
      };
  }

  customElements.define('kiss-row', class extends HTMLElement {

      connectedCallback() {

          document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(() => {
              this.update();

              setTimeout(() => {
                  this.update();
              }, 500);
          }));

          let debouncedUpdate = debounce(() => this.update() , 15);

          window.addEventListener('resize', debouncedUpdate);
          onMutation(debouncedUpdate, this);
          setTimeout(() => this.update(), 0);
      }

      update() {

          if (this.getAttribute('collapse') == 'true') return;

          if (!this.children.length || this._isHidden(this)) return;

          let firstVisible = null, children = this.children, top, diff;

          for (let i = 0; i < children.length; i++) {

              if (!firstVisible && !this._isHidden(children[i])) {
                  firstVisible = children[i];
              }

              children[i].classList.remove('kiss-row-margin');
          }

          if (!firstVisible) return;

          top = firstVisible.offsetTop;

          for (let i = 0; i < children.length; i++) {

              diff = Math.abs(top - (!this._isHidden(children[i]) ? children[i].offsetTop : top));

              if (diff > 1) {
                  children[i].classList.add('kiss-row-margin');
              }
          }
      }

      disconnectedCallback() {

      }

      _isHidden(el) {
          return (el.offsetTop === null)
      }
  });

  customElements.define('kiss-svg', class extends HTMLElement {

      static get observedAttributes() {
          return ['src'];
      }

      connectedCallback() {
          this.update();
      }

      attributeChangedCallback(attrName, oldVal, newVal) {
          if (attrName == 'src') this.update();
      }

      update() {

          let url = this.getAttribute('src');
          let width = this.getAttribute('width');
          let height = this.getAttribute('height');

          if (!url.trim()) {
              this.innerHTML = '';
              return;
          }

          if (width && height) {
              this.innerHTML = `<canvas width="${width}" height="${height}"></canvas>`;
          }

          fetch(url).then(response => response.text()).then(content => {

              content = content.trim();

              let attrs = {
                  width: this.getAttribute('width') || '',
                  height: this.getAttribute('height') || ''
              };

              if (!content.match(/^<svg/)) {
                  this.innerHTML = '';
                  return;
              }

              this.innerHTML = content;

              let svg = this.children[0];

              Object.keys(attrs).forEach(attr => attrs[attr] && svg.setAttribute(attr, attrs[attr]));
          }).catch(() => {
              this.innerHTML = '';
          });
      }

  });

  let tooltipContainer = null;

  on$1(document.documentElement, 'mouseenter', '[kiss-tooltip]', function(e) {

      e.preventDefault();

      if (!tooltipContainer) {

          tooltipContainer = document.createElement('kiss-tooltip');
          document.body.appendChild(tooltipContainer);

      }

      tooltipContainer.show(this.getAttribute('aria-label'), this, this.getAttribute('kiss-tooltip'));
  });


  customElements.define('kiss-tooltip', class extends HTMLElement {

      connectedCallback() {

      }

      show(text, ele, position = 'bottom') {

          this.innerText = text;
          this.setAttribute('show', 'true');

          if (ele) {
              let rect = ele.getBoundingClientRect(),
              left = null,
              top = null,
              offset = 5;

              switch (position) {
                  case "right":
                      top = (rect.top + rect.height / 2) - this.offsetHeight / 2;
                      left = rect.right + offset;
                      break;

                  case "bottom":
                      top = rect.bottom + offset;
                      left = rect.left;
                      break;
                  default:
                      left = rect.left;
                      break;
              }

              Object.assign(this.style, {
                  top: `${top}px`,
                  left: `${left}px`
              });

              this.$element = ele;

              if (!ele.__tooltiped) {

                  on$1(ele, 'mouseleave', e => {
                      tooltipContainer.hide();
                  });

                  ele.__tooltiped = true;
              }

          }
      }

      hide() {
          this.setAttribute('show', 'false');
      }

      isActive() {
          return this.getAttribute('show') == 'true';
      }
  });

  HTMLElement.prototype.on = function(event, selector, handler) {
      return on$1(this, event, selector, handler)
  };

  HTMLElement.prototype.onMutation = function(cb) {
      return onMutation(cb, this)
  };

  /**
   * JSONStorage - a simple storage helper inspired by the redis api.
   *
   * @author     Artur Heinze
   * @copyright  (c) since 2012 Artur Heinze
   * @license    MIT - http://opensource.org/licenses/MIT
   * @url        https://github.com/aheinze/JSONStorage
   */
  (function (global) {

      function Store(name, adapter) {

          var $this = this;

          this.name = name;
          this.adapter = adapter;
          this.data = adapter.load(name);
          this.data.__ex = this.data.__ex || {}; // expires data container

          // cleanup expires data
          (function () {

              var time = (new Date()).getTime();

              for (var key in $this.data.__ex) {
                  if ($this.data.__ex[key] < time) {
                      delete $this.data[key];
                      delete $this.data.__ex[key];
                  }
              }

          })();
      }

      Store.prototype.store = function () {
          try {
              this.adapter.store(this.name, this.data);
          } catch (e) { }
      };

      Store.prototype.toString = function () {
          return JSON.stringify(this.data);
      };

      Store.prototype.flushdb = function () {

          var $this = this;

          this.data = {};
          this.data.__ex = {};

          setTimeout(function () {
              $this.store();
          }, 0); // async saving!?

          return true;
      };

      Store.prototype.get = function (key, def) {

          if (this.data.__ex[key] && this.data.__ex[key] < (new Date()).getTime()) {
              delete this.data[key];
              delete this.data.__ex[key];
          }

          return this.data[key] !== undefined ? this.data[key] : def;
      };

      Store.prototype.set = function (key, value) {
          this.data[key] = value;
          this.store();
      };

      Store.prototype.setex = function (key, seconds, value) {
          this.set(key, value);
          this.expire(key, seconds);
      };

      Store.prototype.expire = function (key, seconds) {
          if (this.data[key]) this.data.__ex[key] = (new Date()).getTime() + (seconds * 1000);
      };

      Store.prototype.exists = function (key) {
          return this.get(key, "___no___") !== "___no___";
      };

      Store.prototype.del = function () {

          var keys = arguments,
              key = null,
              removed = 0;

          for (var i = 0; i < keys.length; i++) {

              key = keys[i];

              if (this.exists(key)) {
                  delete this.data[key];

                  if (this.data.__ex[key]) {
                      delete this.data.__ex[key];
                  }

                  removed++;
              }
          }

          this.store();

          return removed;
      };

      Store.prototype.type = function (key) {

          key = this.get(key);

          if (typeof (key) === 'object') {
              return JSON.stringify(key)[0] === "[" ? "list" : "set";
          }

          return typeof (key);
      };

      Store.prototype.append = function (key, value) {

          value = String(value);

          var current = String(this.get(key, "")),
              newone = current + value;

          this.set(key, newone);

          return newone.length;
      };

      Store.prototype.incr = function (key, by) {

          by = by || 1;

          var current = Number(this.get(key, 0)),
              newone = current + by;

          this.set(key, newone);

          return newone;
      };

      Store.prototype.decr = function (key, by) {
          by = by || 1;
          return this.incr(key, (by * -1));
      };

      /* List methods */

      Store.prototype.llen = function (key) {
          return this.get(key, []).length;
      };

      Store.prototype.lpush = function (key, value) {
          var list = this.get(key, []),
              ret = list.unshift(value);

          this.set(key, list);
          return ret;
      };

      Store.prototype.rpush = function (key, value) {
          var list = this.get(key, []),
              ret = list.push(value);

          this.set(key, list);
          return ret;
      };

      Store.prototype.lset = function (key, index, value) {
          var list = this.get(key, []);

          if (index < 0) {
              index = list.length - Math.abs(index);
          }

          if (list[index]) {
              list[index] = value;
              this.set(key, list);
              return true;
          }

          return false;
      };

      Store.prototype.lindex = function (key, index) {
          var list = this.get(key, []);

          if (index < 0) {
              index = list.length - Math.abs(index);
          }

          return list[index] ? list[index] : null;
      };

      /* Hash methods */

      Store.prototype.hset = function (key, field, value) {
          var set = this.get(key, {});

          set[field] = value;
          this.set(key, set);
      };

      Store.prototype.hget = function (key, field, def) {
          var set = this.get(key, {});

          return set[field] !== undefined ? set[field] : def;
      };

      Store.prototype.hgetall = function (key) {
          return this.get(key, {});
      };

      Store.prototype.hexists = function (key, field) {
          var set = this.get(key, {});

          return (set[field] !== undefined);
      };

      Store.prototype.hkeys = function (key) {
          var set = this.get(key, {}),
              keys = [],
              name = null;

          for (name in set) {
              if (set.hasOwnProperty(name)) {
                  keys.push(name);
              }
          }

          return keys;
      };

      Store.prototype.hvals = function (key) {
          var set = this.get(key, {}),
              vals = [],
              name = null;

          for (name in set) {
              if (set.hasOwnProperty(name)) {
                  vals.push(keys[name]);
              }
          }

          return vals;
      };

      Store.prototype.hlen = function (key) {
          return this.hkeys(key).length;
      };

      Store.prototype.hdel = function (key) {

          if (!this.exists(key)) return 0;

          var set = this.get(key, {}),
              field = null,
              removed = 0;

          for (var i = 1; i < arguments.length; i++) {

              field = arguments[i];

              if (set[field] !== undefined) {
                  delete set[field];
                  removed++;
              }
          }

          this.set(key, set);

          return removed;
      };

      Store.prototype.hincrby = function (key, field, by) {
          by = by || 1;
          var current = Number(this.hget(key, field, 0)),
              newone = current + by;

          this.hset(key, field, newone);

          return newone;
      };

      Store.prototype.hmget = function (key) {
          var set = this.get(key, {}),
              field = null,
              values = [];

          for (var i = 1; i < arguments.length; i++) {
              field = arguments[i];
              values.push(set[field] !== undefined ? set[field] : null);
          }

          return values;
      };

      Store.prototype.hmset = function (key) {
          var set = this.get(key, {}),
              field = null,
              value = null;

          for (var i = 1; i < arguments.length; i++) {
              field = arguments[i];
              value = arguments[(i + 1)] ? arguments[(i + 1)] : null;
              set[field] = value;
              i = i + 1;
          }

          this.set(key, set);
      };

      var JSONStorage = {

          select: function (name, adapter) {
              return (new Store(name, typeof (adapter) == 'object' ? adapter : (this.adapters[adapter] || this.adapters['memory'])));
          },

          adapters: {

              memory: (function () {
                  var dbs = {};

                  return {
                      load: function (name) {
                          return dbs[name] || {};
                      },
                      store: function (name, data) {
                          dbs[name] = data;
                      }
                  }
              })(),

              local: {
                  load: function (name) {
                      return global.localStorage["jsonstorage." + name] ? JSON.parse(global.localStorage["jsonstorage." + name]) : {};
                  },
                  store: function (name, data) {
                      global.localStorage["jsonstorage." + name] = JSON.stringify(data);
                  }
              },

              session: {
                  load: function (name) {
                      return global.sessionStorage["jsonstorage." + name] ? JSON.parse(global.sessionStorage["jsonstorage." + name]) : {};
                  },
                  store: function (name, data) {
                      global.sessionStorage["jsonstorage." + name] = JSON.stringify(data);
                  }
              }
          }
      };

      // AMD support
      if (typeof define === 'function' && define.amd) {
          define(function () {
              return JSONStorage;
          });
          // CommonJS and Node.js module support.
      } else if (typeof exports !== 'undefined') {
          // Support Node.js specific `module.exports` (which can be a function)
          if (typeof module != 'undefined' && module.exports) {
              exports = module.exports = JSONStorage;
          }
          // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
          exports.JSONStorage = JSONStorage;
      } else {
          global.JSONStorage = JSONStorage;
      }

  })(typeof window === 'undefined' ? {} : window);

  /**
   * Translation tool
   */
  (function(global){

          function extend(destination, source) {

              if (!destination || !source) return destination;

              for (var field in source) {
                  if (destination[field] === source[field]) continue;
                  destination[field] = source[field];
              }

              return destination;
          }


          var i18n = {

                  __data : {},

                  register: function(key, data){

                      switch(arguments.length) {
                          case 1:
                              extend(this.__data, key);
                              break;
                          case 2:
                              this.__data[key] = data;
                              break;
                      }
                  },
                  get: function(key){

                      var args = arguments.length ==1 ? [] : Array.prototype.slice.call(arguments, 1);

                      if (!this.__data[key]) {
                          return this.printf(key, args);
                      }

                      return this.printf(String(this.__data[key]), args);
                  },

                  key: function(key) {
                    return this.__data[key] ? this.__data[key] : null;
                  },

                  printf: function() {
                      // From: http://phpjs.org/functions
                        // +   original by: Ash Searle (http://hexmen.com/blog/)
                        // + namespaced by: Michael White (http://getsprink.com)
                        // +    tweaked by: Jack
                        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                        // +      input by: Paulo Freitas
                        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                        // +      input by: Brett Zamir (http://brett-zamir.me)
                        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                        // +   improved by: Dj
                        // +   improved by: Allidylls
                        // *     example 1: sprintf("%01.2f", 123.1);
                        // *     returns 1: 123.10
                        // *     example 2: sprintf("[%10s]", 'monkey');
                        // *     returns 2: '[    monkey]'
                        // *     example 3: sprintf("[%'#10s]", 'monkey');
                        // *     returns 3: '[####monkey]'
                        // *     example 4: sprintf("%d", 123456789012345);
                        // *     returns 4: '123456789012345'
                        var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;
                        var a = arguments,
                          i = 0,
                          format = a[i++];

                        // pad()
                        var pad = function (str, len, chr, leftJustify) {
                          if (!chr) {
                            chr = ' ';
                          }
                          var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
                          return leftJustify ? str + padding : padding + str;
                        };

                        // justify()
                        var justify = function (value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
                          var diff = minWidth - value.length;
                          if (diff > 0) {
                            if (leftJustify || !zeroPad) {
                              value = pad(value, minWidth, customPadChar, leftJustify);
                            } else {
                              value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
                            }
                          }
                          return value;
                        };

                        // formatBaseX()
                        var formatBaseX = function (value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
                          // Note: casts negative numbers to positive ones
                          var number = value >>> 0;
                          prefix = prefix && number && {
                            '2': '0b',
                            '8': '0',
                            '16': '0x'
                          }[base] || '';
                          value = prefix + pad(number.toString(base), precision || 0, '0', false);
                          return justify(value, prefix, leftJustify, minWidth, zeroPad);
                        };

                        // formatString()
                        var formatString = function (value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
                          if (precision != null) {
                            value = value.slice(0, precision);
                          }
                          return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
                        };

                        // doFormat()
                        var doFormat = function (substring, valueIndex, flags, minWidth, _, precision, type) {
                          var number;
                          var prefix;
                          var method;
                          var textTransform;
                          var value;

                          if (substring === '%%') {
                            return '%';
                          }

                          // parse flags
                          var leftJustify = false,
                            positivePrefix = '',
                            zeroPad = false,
                            prefixBaseX = false,
                            customPadChar = ' ';
                          var flagsl = flags.length;
                          for (var j = 0; flags && j < flagsl; j++) {
                            switch (flags.charAt(j)) {
                            case ' ':
                              positivePrefix = ' ';
                              break;
                            case '+':
                              positivePrefix = '+';
                              break;
                            case '-':
                              leftJustify = true;
                              break;
                            case "'":
                              customPadChar = flags.charAt(j + 1);
                              break;
                            case '0':
                              zeroPad = true;
                              break;
                            case '#':
                              prefixBaseX = true;
                              break;
                            }
                          }

                          // parameters may be null, undefined, empty-string or real valued
                          // we want to ignore null, undefined and empty-string values
                          if (!minWidth) {
                            minWidth = 0;
                          } else if (minWidth === '*') {
                            minWidth = +a[i++];
                          } else if (minWidth.charAt(0) == '*') {
                            minWidth = +a[minWidth.slice(1, -1)];
                          } else {
                            minWidth = +minWidth;
                          }

                          // Note: undocumented perl feature:
                          if (minWidth < 0) {
                            minWidth = -minWidth;
                            leftJustify = true;
                          }

                          if (!isFinite(minWidth)) {
                            throw new Error('sprintf: (minimum-)width must be finite');
                          }

                          if (!precision) {
                            precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type === 'd') ? 0 : undefined;
                          } else if (precision === '*') {
                            precision = +a[i++];
                          } else if (precision.charAt(0) == '*') {
                            precision = +a[precision.slice(1, -1)];
                          } else {
                            precision = +precision;
                          }

                          // grab value using valueIndex if required?
                          value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

                          switch (type) {
                          case 's':
                            return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
                          case 'c':
                            return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
                          case 'b':
                            return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                          case 'o':
                            return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                          case 'x':
                            return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                          case 'X':
                            return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
                          case 'u':
                            return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                          case 'i':
                          case 'd':
                            number = +value || 0;
                            number = Math.round(number - number % 1); // Plain Math.round doesn't just truncate
                            prefix = number < 0 ? '-' : positivePrefix;
                            value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                            return justify(value, prefix, leftJustify, minWidth, zeroPad);
                          case 'e':
                          case 'E':
                          case 'f': // Should handle locales (as per setlocale)
                          case 'F':
                          case 'g':
                          case 'G':
                            number = +value;
                            prefix = number < 0 ? '-' : positivePrefix;
                            method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                            textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                            value = prefix + Math.abs(number)[method](precision);
                            return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
                          default:
                            return substring;
                          }
                        };

                        return format.replace(regex, doFormat);
                  }

          };

          // AMD support
          if (typeof define === 'function' && define.amd) {
              define(function () { return i18n; });

          // CommonJS and Node.js module support.
          } else if (typeof exports !== 'undefined') {
              // Support Node.js specific `module.exports` (which can be a function)
              if (typeof module != 'undefined' && module.exports) {
               exports = module.exports = i18n;
              }
              // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
              exports.i18n = i18n;
          } else {
              // browser client
              window.i18n = i18n;
          }

  })();

  let formatSize = function (bytes) {
      if (bytes == 0) { return "0.00 B"; }
      let e = Math.floor(Math.log(bytes) / Math.log(1024));
      return ((bytes / Math.pow(1024, e)).toFixed(2) + ' ' + ' KMGTP'.charAt(e) + 'B').replace('.00', '');
  };

  let formatNumber = function(num, round = 2) {
      return (new Intl.NumberFormat(navigator.language, { style: 'decimal', maximumFractionDigits: round})).format(num);
  };

  let formatDuration = function (time) {
      // Hours, minutes and seconds
      let hrs = ~~(time / 3600);
      let mins = ~~((time % 3600) / 60);
      let secs = ~~time % 60;

      // Output like "1:01" or "4:03:59" or "123:03:59"
      let ret = "";

      if (hrs > 0) {
          ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
      }

      ret += "" + mins + ":" + (secs < 10 ? "0" : "");
      ret += "" + secs;
      return ret;
  };

  let on = function (element, name, delegate, fn) {

      if (!fn) {
          element.addEventListener(name, arguments[2]);
      } else {
          element.addEventListener(name, function (e) {

              let target = e.target;

              while (target !== element) {

                  if (!target) {
                      break;
                  }

                  if (target.matches(delegate)) {
                      return fn.apply(target, arguments);
                  }

                  target = target.parentNode;
              }
          });
      }

      return element;
  };

  let toKebabCase = function(str) {
      return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
  };

  let copyText = function (text, cb) {
      var inp = document.createElement('textarea');
      document.body.appendChild(inp);
      inp.value = text;
      inp.select();
      try { document.execCommand('copy', false); } catch (e) { }
      inp.remove();
      if (cb) cb();
  };

  let interpolate = function (str, params) {
      const names = Object.keys(params);
      const vals = Object.values(params);
      return new Function(...names, `return \`${str}\`;`)(...vals);
  };

  let uuid = function() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
  };

  let truncate = function(text, length, clamp = '...') {
      let content = text || '';
      return content.length > length ? content.slice(0, length) + clamp : content;
  };

  let stripTags = function(input, allowed) {

      // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
      allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
      const tags = /<\/?([a-z0-9]*)\b[^>]*>?/gi;
      const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
      let after = input;

      after = (after.substring(after.length - 1) === '<') ? after.substring(0, after.length - 1) : after;

      while (true) {
          const before = after;
          after = before.replace(commentsAndPhpTags, '').replace(tags, ($0, $1) => {
              return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
          });
          if (before === after) {
              return after
          }
      }
  };

  var utils = {
      copyText,
      formatSize,
      formatDuration,
      formatNumber,
      interpolate,
      on,
      toKebabCase,
      uuid,
      truncate,
      stripTags
  };

  var ui$1 = {

      notify: function (message, status, timeout) {

          if (timeout !== false && !timeout) {
              timeout = 2500;
          }

          new Noty({
              type: status || 'info',
              text: message,
              timeout: timeout,
              layout: 'topCenter',
              theme: 'app',
              progressBar: true
          }).show();
      },

      block: function (content) {

      },

      unblock: function () {

      },

      offcanvas: function (content, options) {

          let id = Math.random().toString(36).substring(2) + Date.now().toString(36),
              size = '';

          options = options || {};

          switch (options.size) {
              case 'large':
                  size = 'kiss-width-1-3@m kiss-width-1-4@xl';
                  break;
              case 'xlarge':
                  size = 'kiss-width-2-3@m kiss-width-1-2@xl';
                  break;
              case 'xxlarge':
                  size = 'kiss-width-3-4';
                  break;
              case 'screen':
                  size = 'kiss-width-1-1';
                  break;
          }

          document.body.insertAdjacentHTML('beforeend', `
            <kiss-offcanvas id="offcanvas-${id}" flip="${(options.flip && 'true') || ''}">
                <kiss-content class="${size}">
                    ${content}
                </kiss-content>
            </kiss-offcanvas>
        `);

          let offcanvas = document.getElementById(`offcanvas-${id}`);

          offcanvas.__close = offcanvas.close;
          offcanvas.__show = offcanvas.show;

          offcanvas.close = function() {
              offcanvas.__close();
              setTimeout(() => {
                  offcanvas.parentNode.removeChild(offcanvas);
              }, 300);
          };

          offcanvas.show = function() {
              offcanvas.__show();

              setTimeout(() => {
                  let ele = offcanvas.querySelector('[autofocus]');

                  if (ele) {
                      ele.focus();
                  }
              }, 300);
          };

          return offcanvas;
      },


      dialog: function (content, options, dialogtype) {

          let id = Math.random().toString(36).substring(2) + Date.now().toString(36);

          document.body.insertAdjacentHTML('beforeend', `
            <kiss-dialog id="dialog-${id}" size="${(options && options.size) || ''}" type="${dialogtype}">
                <kiss-content class="animated fadeInUp faster">
                    ${content}
                </kiss-content>
            </kiss-dialog>
        `);

          let dialog = document.getElementById(`dialog-${id}`);

          dialog.__close = dialog.close;
          dialog.__show = dialog.show;

          dialog.close = function() {
              dialog.__close();
              dialog.parentNode.removeChild(dialog);
          };

          dialog.show = function() {
              dialog.__show();

              setTimeout(() => {
                  let ele = dialog.querySelector('[autofocus]');

                  if (ele) {
                      ele.focus();
                  }
              }, 300);
          };

          return dialog;
      },

      alert: function (content, options) {

          let dialog = this.dialog(/*html*/`
            <div class="kiss-margin">
                ${content}
            </div>
            <div class="kiss-margin-top kiss-flex kiss-flex-middle">
                <button type="button" class="kiss-button kiss-button-primary kiss-flex-1" kiss-dialog-close>${App.i18n.get('Ok')}</button>
            </div>
        `, options, 'alert');

          dialog.show();
      },

      confirm: function (text, onconfirm, oncancel, options) {

          let dialog = this.dialog(/*html*/`
            <div class="kiss-margin-bottom">
                ${text}
            </div>
            <div class="kiss-margin-top kiss-flex kiss-flex-middle kiss-button-group">
                <button type="button" class="kiss-button-cancel kiss-button kiss-flex-1">${App.i18n.get('Cancel')}</button>
                <button type="button" class="kiss-button-confirm kiss-button kiss-button-primary kiss-flex-1">${App.i18n.get('Ok')}</button>
            </div>
        `, options, 'confirm');

          App.utils.on(dialog, 'click', '.kiss-button-confirm', () => {
              if (onconfirm) onconfirm();
              dialog.close();
          });

          App.utils.on(dialog, 'click', '.kiss-button-cancel', () => {
              if (oncancel) oncancel();
              dialog.close();
          });

          dialog.show();
      },

      prompt: function (text, value = '', clb, options) {
          let dialog = this.dialog(/*html*/`
            <form>
                <div class="kiss-margin kiss-text-bold">${text}</div>
                <div class="kiss-margin-bottom">
                    <input class="kiss-width-1-1 kiss-input" type="text" required>
                </div>
                <div class="kiss-margin-top kiss-flex kiss-flex-middle kiss-button-group">
                    <button type="button" class="kiss-button-cancel kiss-button kiss-flex-1">${App.i18n.get('Cancel')}</button>
                    <button type="submit" class="kiss-button-confirm kiss-button kiss-button-primary kiss-flex-1">${App.i18n.get('Ok')}</button>
                </div>
            </form>
        `, options, 'confirm');

          let input = dialog.querySelector('.kiss-input');

          input.value = value;

          App.utils.on(dialog, 'submit', (e) => {
              e.preventDefault();
              if (clb) clb(input.value);
              dialog.close();
          });

          App.utils.on(dialog, 'click', '.kiss-button-cancel', () => {
              dialog.close();
          });

          dialog.show();

          setTimeout(() => input.focus(), 300);
      }
  };

  var assets = {

      _ress: {},

      require: function (ress, onSuccess, onError) {

          onSuccess = onSuccess || function () { };
          onError = onError || function () { };

          var req = [],
              ress = Array.isArray(ress) ? ress : [ress];

          for (var i = 0, len = ress.length; i < len; i++) {

              if (!ress[i]) continue;

              if (!this._ress[ress[i]]) {

                  if (ress[i].match(/\.js$/i)) {
                      this._ress[ress[i]] = this.getScript(ress[i]);
                  } else if (ress[i].match(/\.(jpg|jpeg|gif|png)$/i)) {
                      this._ress[ress[i]] = this.getImage(ress[i]);
                  } else if (ress[i].match(/\.css$/i)) {
                      this._ress[ress[i]] = this.getCss(ress[i]);
                  } else {
                      continue;
                  }
              }

              req.push(this._ress[ress[i]]);
          }

          return Promise.all(req).then(onSuccess).catch(function (e) {
              onError.apply(self, [e]);
          });
      },

      getScript: function (url) {

          return new Promise(function (resolve, reject) {

              var script = document.createElement('script');

              script.async = true;

              script.onload = function () {
                  resolve(url);
              };

              script.onerror = function () {
                  reject(url);
              };

              script.src = (url.match(/^(\/\/|http)/) ? url : App.base(url)) + '?v=' + App.version;

              document.getElementsByTagName('head')[0].appendChild(script);

          });
      },

      getCss: function (url) {

          return new Promise(function (resolve, reject) {

              var link = document.createElement('link');
              link.type = 'text/css';
              link.rel = 'stylesheet';
              link.href = (url.match(/^(\/\/|http)/) ? url : App.base(url)) + '?v=' + App.version;

              document.getElementsByTagName('head')[0].appendChild(link);

              var img = document.createElement('img');
              img.onerror = function () {
                  resolve(url);
              };
              img.src = link.href + '?v=' + App.version;
          });
      },

      getImage: function (url) {

          return new Promise(function (resolve, reject) {

              var img = document.createElement('img');

              img.onload = function () { resolve(url); };
              img.onerror = function () { reject(url); };

              img.src = (url.match(/^(\/\/|http)/) ? url : App.base(url)) + '?v=' + App.version;
          });
      }
  };

  var ui = {

      offcanvas(component, data, callbacks, options) {

          let offcanvas;

          data = data || {};
          callbacks = callbacks || {};

          let def = {

              $viewSetup(app) {

                  app.mixin({
                      methods: {
                          $close() {

                              if (this.$el.closest) {
                                  this.$el.closest('kiss-offcanvas').close();
                              } else {
                                  this.$el.parentNode.closest('kiss-offcanvas').close();
                              }
                          },
                          $call(name, ...args) {
                              if (callbacks[name]) {
                                  callbacks[name](...args);
                              }
                          }
                      }
                  });
              },

              data() {
                  return  {
                      data
                  }
              },

              components: {
                  'vue-offcanvas-content': component
              }
          };

          offcanvas = App.ui.offcanvas(/*html*/`
            <div class="vue-offcanvas">
                <vue-offcanvas-content v-bind="data"></vue-offcanvas-content>
            </div>
        `, options || {});

          offcanvas.$view = offcanvas.querySelector('.vue-offcanvas');

          VueView.compile(offcanvas.$view, def);
          setTimeout(() => offcanvas.show());

          return offcanvas;
      },

      modal(url, data, callbacks, options) {

          data = data || {};
          callbacks = callbacks || {};

          let def = {

              $viewSetup(app) {

                  app.mixin({
                      methods: {
                          $close() {

                              if (this.$el.closest) {
                                  this.$el.closest('kiss-dialog').close();
                              } else {
                                  this.$el.parentNode.closest('kiss-dialog').close();
                              }
                          },
                          $call(name, ...args) {
                              if (callbacks[name]) {
                                  callbacks[name](...args);
                              }
                          }
                      }
                  });
              },

              data() {
                  return  {
                      data
                  }
              },

              components: {
                  'vue-dialog-content':  url
              }
          };

          let dialog = App.ui.dialog(/*html*/`
            <div class="vue-modal">
                <vue-dialog-content v-bind="data"></vue-dialog-content>
            </div>
        `, options || {});

          dialog.$view = dialog.querySelector('.vue-modal');

          VueView.compile(dialog.$view, def);
          dialog.show();

          return dialog;
      }
  };

  /**
   * Dynamic vue template (Vue 3.x)
   */
  (function() {

      let VueView = {

          ready: new Promise(function(resolve) {
              document.addEventListener('DOMContentLoaded', e => resolve());
          }),

          components: {},

          component(name, def) {
              this.components[name] = def;
          },

          compile(el, def) {
              this.ready.then(() => {
                  this._compile(el, def);
              });
          },

          _compile: async function(el, definition) {

              let script = definition ? null : el.querySelector('script');
              let template = definition ? null : el.querySelector('template');
              let def = definition || {}, app;

              if (script) {
                  let module = await import(`data:text/javascript;charset=utf-8,${encodeURIComponent(script.innerHTML)}`);
                  def = module.default;
                  script.parentNode.removeChild(script);
              }

              if (template) {
                  def.template = template.innerHTML;
                  template.parentNode.removeChild(template);
              }

              def = Object.assign({}, def || {});

              def.components = def.components || {};

              Object.keys(def.components).forEach(name => {

                  if (typeof(def.components[name]) == 'string') {
                      def.components[name] = (function(url) {
                          return Vue.defineAsyncComponent(() => App.utils.import(url));
                      })(def.components[name]);
                  }
              });

              app = Vue.createApp(def);

              Object.keys(VueView.components).forEach(name => {

                  if (typeof(VueView.components[name]) == 'string') {
                      app.component(name, Vue.defineAsyncComponent(() => App.utils.import(VueView.components[name])));
                  } else {
                      app.component(name, VueView.components[name]);
                  }
              });

              app.mixin({
                  data() {
                      return {
                          App: window.App
                      }
                  },

                  methods: {
                      t(key) {
                          return App.i18n.get(key);
                      },

                      $route(url) {
                          return App.route(url);
                      },

                      $base(url) {
                          return App.base(url);
                      },

                      $request(url, data) {
                          return App.request(url, data);
                      }
                  }
              });

              // view router
              if (def.$router && window.VueRouter) {

                  def.$router = Object.assign({
                      history: VueRouter.createWebHashHistory(),
                      routes: []
                  }, def.$router);

                  def.$router.routes.forEach(route => {

                      if (typeof(route.component) == 'string') {
                          route.component = (function(url) {
                              return Vue.defineAsyncComponent(() => App.utils.import(url));
                          })(route.component);
                      }
                  });

                  app.use(new VueRouter.createRouter(def.$router));
              }

              if (def.$viewSetup) {
                  def.$viewSetup(app);
              }

              app.mount(el);
              el.setAttribute('init', true);

              return app;
          }
      };

      class VueElement extends HTMLElement {
          connectedCallback() {
              VueView.compile(this);
          }
      }

      customElements.define('vue-view', VueElement);

      VueView.ui = ui;

      window.VueView = VueView;

  })();

  customElements.define('app-avatar', class extends HTMLElement {

      static get observedAttributes() {
          return ['name', 'size', 'color'];
      }

      constructor() {
          super();
      }

      connectedCallback() {
          setTimeout(() => this.draw(), 0);
      }

      attributeChangedCallback(name, oldValue, newValue) {
          this.draw();
      }

      disconnectedCallback() {

      }

      draw() {

          this.innerHTML = '<canvas></canvas>';

          let name = this.getAttribute('name') || '';
          let size = this.getAttribute('size') || 60;
          let color = this.getAttribute('color') || null;

          let canvas = this.querySelector('canvas');

          let colours = [
              "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50",
              "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"
          ],

              nameSplit = String(name).toUpperCase().split(' '),
              initials, charIndex, colourIndex, context, dataURI;


          if (nameSplit.length == 1) {
              initials = nameSplit[0] ? nameSplit[0].charAt(0) : '?';
          } else {
              initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
          }

          charIndex = (initials == '?' ? 72 : initials.charCodeAt(0)) - 64;
          colourIndex = charIndex % 20;
          canvas.width = size;
          canvas.height = size;
          context = canvas.getContext("2d");

          context.fillStyle = color ? color : colours[colourIndex - 1];
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.font = Math.round(canvas.width / 2) + "px Arial";
          context.textAlign = "center";
          context.fillStyle = "#FFF";
          context.fillText(initials, size / 2, size / 1.5);

          dataURI = canvas.toDataURL();

          this.canvas = canvas;

          return dataURI;
      }
  });

  customElements.define('app-actionbar', class extends HTMLElement {

      constructor() {
          super();
      }

      connectedCallback() {

          let idle = setInterval(() => {

              if (this.offsetHeight) {
                  clearInterval(idle);
                  this.update();
              }
          }, 10);

          // just to be sure
          window.addEventListener("load", evt => {
              this.update();
          });
      }

      disconnectedCallback() {
          document.body.style.paddingBottom = '';
      }

      update() {

          if (this.getAttribute('space') !== 'false') {
              document.body.style.paddingBottom = `calc(2rem + ${this.offsetHeight}px)`;
          }
      }
  });

  const fn = e => {

      let element = e.target, closest = e.target.matches('app-fieldcontainer') ? e.target : null;

      while ((element = element.parentElement)) {
          if (element.matches('app-fieldcontainer')) {
              closest = element;
          }
      }

      let containers = document.querySelectorAll('app-fieldcontainer');

      containers.forEach(container => {

          if (container !== closest) {
              container.removeAttribute('active');
          }
      });
  };


  document.addEventListener('click', fn);
  document.addEventListener('focusin', fn);

  customElements.define('app-fieldcontainer', class extends HTMLElement {

      constructor() {
          super();
      }

      connectedCallback() {

          this.addEventListener('click', e => this.setAttribute('active','true'));
          this.addEventListener('focusin', e => this.setAttribute('active','true'));
      }

      disconnectedCallback() {

      }
  });

  customElements.define('app-frame', class extends HTMLElement {

      static get observedAttributes() {
          return ['src'];
      }

      constructor() {
          super();
      }

      connectedCallback() {

          this.innerHTML = '<iframe></iframe>';

          setTimeout(() => {

              this.iframe = this.querySelector('iframe');

              if (this.getAttribute('seamless') == 'true') {
                  this.iframe.style.height = '0px';
                  setInterval(() => this.resize(), 150);
              }

              this.update();

          }, 0);
      }

      disconnectedCallback() {
          this.observer.disconnect();
      }

      attributeChangedCallback(name, oldValue, newValue) {

          if (!this.iframe) {
              return;
          }

          this.update();
      }

      update() {
          this.iframe.src = this.getAttribute('src') || '';
      }

      resize() {

          if (!this.iframe.contentDocument.body) {
              return;
          }

          if (this._offsetHeight == this.iframe.contentDocument.body.offsetHeight) {
              return;
          }

          this._offsetHeight = this.iframe.contentDocument.body.offsetHeight;

          this.iframe.style.height = this._offsetHeight+'px';

      }
  });

  customElements.define('app-loader', class extends HTMLElement {

      static get observedAttributes() {
          return ['label', 'mode']; 
      }

      constructor() {
          super();
      }

      connectedCallback() {
          this.render();
      }

      attributeChangedCallback(oldvalue, newvalue) {
          if (oldvalue != newvalue)this.render();
      }

      render() {

          let template;
          let mode = this.getAttribute('mode');

          switch (mode) {
              case 'dots':
                  template = '<div></div><div></div><div></div><div></div>';
                  break;
              default:

                  if (mode !== 'orbit') {
                      this.setAttribute('mode', 'orbit');
                  }

                  template = '<div><div></div><div></div><div></div></div>';
          }

          this.innerHTML = template;
      }
  });

  customElements.define('app-loader-cover', class extends HTMLElement {

      static get observedAttributes() {
          return ['label', 'mode']; 
      }

      constructor() {
          super();
      }

      connectedCallback() {
          this.innerHTML = `
        <div>
            <app-loader></app-loader>
            <div class="app-loader-cover-label"></div> 
        </div>
        `;

          this.label = this.querySelector('.app-loader-cover-label');
          this.loader = this.querySelector('app-loader');

          this.render();
      }

      attributeChangedCallback() {
          this.render();
      }

      render() {

          this.label.innerText = this.getAttribute('label') || '';
          this.loader.setAttribute('mode', this.getAttribute('mode'));
      }
  });

  customElements.define('app-scrollcontainer', class extends HTMLElement {

      static get observedAttributes() {
          return ['boundary'];
      }

      constructor() {
          super();
      }

      connectedCallback() {

          document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(() => {
              setTimeout(() => this.expand());
          }));

          window.addEventListener('resize',  () => requestAnimationFrame(() => {
              setTimeout(() => this.expand());
          }));

          window.addEventListener('load',  () => requestAnimationFrame(() => {
              setTimeout(() => this.expand());
          }));
      }

      attributeChangedCallback(oldvalue, newvalue) {
          if (oldvalue != newvalue)this.expand();
      }

      expand() {

          this.style.maxHeight = '';

          let rect = this.getBoundingClientRect();
          let mode = this.getAttribute('mode');

          if (rect.top > window.innerHeight) {
              return;
          }

          let maxHeight = window.innerHeight - rect.top;

          switch (mode) {
              case 'boundary':

                  let boundary = this.getAttribute('boundary');

                  if (boundary) {
                      boundary = document.querySelector(boundary);

                      if (boundary) {
                          maxHeight = boundary.getBoundingClientRect().top - rect.top;
                      }
                  }

                  if (maxHeight > window.innerHeight) {
                      return;
                  }

                  break;
          }


          this.style.maxHeight = `${maxHeight}px`;
      }
  });

  customElements.define('app-tabs', class extends HTMLElement {

      static get observedAttributes() {
          return [];
      }

      constructor() {
          super();
      }

      connectedCallback() {

          if (this.getAttribute('static') == 'true') {
              return;
          }

          this.activeIndex = Number(this.getAttribute('index') || 0);

          this.nav = document.createElement("ul");

          this.nav.classList.add('app-tabs-nav');
          this.prepend(this.nav);

          this.render();

          this.addEventListener('click', e => {
              if (!e.target.classList.contains('app-tabs-nav-link')) return;
              this.setIndex(e.target.getAttribute('index'));
              e.preventDefault();
          });
      }

      attributeChangedCallback(oldvalue, newvalue) {
          if (oldvalue != newvalue) this.render();
      }

      setIndex(index) {

          this.activeIndex = Number(index);

          this.tabs.forEach((tab, idx) => {

              this.nav.children[idx].setAttribute('active', this.activeIndex == idx ? 'true' : 'false');
              tab.setAttribute('active', this.activeIndex == idx ? 'true' : 'false');
          });
      }

      render() {

          if (this.getAttribute('static') == 'true') {
              return;
          }

          this.tabs = [];

          this.nav.innerHTML = '';

          let item;

          for (let i = 0; i < this.children.length; i++) {

              if (this.children[i].tagName.toLowerCase() == 'tab') {

                  item = document.createElement("li");
                  item.innerHTML = `<a class="app-tabs-nav-link" index="${this.tabs.length}">${this.children[i].getAttribute('caption') || 'Tab'}</a>`;
                  this.nav.append(item);

                  this.tabs.push(this.children[i]);

                  this.children[i].setAttribute('active', 'false');
                  item.setAttribute('active', 'false');
              }
          }

          this.setIndex(this.activeIndex);
      }
  });

  // General
  VueView.component('vue-draggable', Vue.defineAsyncComponent(() => {
      return new Promise(resolve => {
          App.assets.require(['app:assets/vendor/Sortable.js']).then(() => {
              App.assets.require(['app:assets/vendor/vue/components/vue-draggable.js']).then(() => resolve(window.vuedraggable));
          });
      })
  }));

  // Fields
  VueView.component('field-boolean', 'app:assets/vue-components/field-boolean.js');
  VueView.component('field-code', 'app:assets/vue-components/field-code.js');
  VueView.component('field-color', 'app:assets/vue-components/field-color.js');
  VueView.component('field-date', 'app:assets/vue-components/field-date.js');
  VueView.component('field-datetime', 'app:assets/vue-components/field-datetime.js');
  VueView.component('field-nav', 'app:assets/vue-components/field-nav.js');
  VueView.component('field-number', 'app:assets/vue-components/field-number.js');
  VueView.component('field-object', 'app:assets/vue-components/field-object.js');
  VueView.component('field-select', 'app:assets/vue-components/field-select.js');
  VueView.component('field-set', 'app:assets/vue-components/field-set.js');
  VueView.component('field-text', 'app:assets/vue-components/field-text.js');
  VueView.component('field-time', 'app:assets/vue-components/field-time.js');
  VueView.component('field-wysiwyg', 'app:assets/vue-components/field-wysiwyg.js');

  let html = document.documentElement;
  let App$1 = {

      base_url: (html.getAttribute("data-base") || '').replace(/\/$/, ''),
      version: (html.getAttribute("data-version") || '0.0.1'),

      _events: {},
      _paths: {},

      base: function (url) {

          let path = url.match(/^(\w+)\:/);

          if (path && this._paths[path[1]]) {
              return url.replace(path[0], this._paths[path[1]]);
          }

          return this.base_url + url;
      },

      route: function (url) {
          return this.base_url + url;
      },

      reroute: function (url) {
          location.href = url.match(/^http/) ? url : this.route(url);
      },

      request: function (url, data, type) {

          url = this.route(url);
          type = type || 'json';

          return new Promise(function (fulfill, reject) {

              let xhr = new XMLHttpRequest();

              xhr.open('post', url, true);
              xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

              url += (url.indexOf('?') !== -1 ? '&' : '?') + 'nc=' + Math.random().toString(36).substr(2);

              if (data) {

                  if (typeof (data) === 'object' && data instanceof HTMLFormElement) {
                      data = new FormData(data);
                  } else if (typeof (data) === 'object' && data instanceof FormData) ; else if (typeof (data) === 'object') {

                      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                      data = JSON.stringify(data || {});
                  }
              }

              xhr.onloadend = function () {

                  let resdata = xhr.responseText;

                  if (type == 'json') {
                      try {
                          resdata = JSON.parse(xhr.responseText);
                      } catch (e) {
                          resdata = null;
                      }
                  }

                  if (this.status == 200) {
                      fulfill(resdata, xhr);
                  } else {
                      reject(resdata, xhr);
                  }
              };

              // send the collected data as JSON
              xhr.send(data);
          });
      },

      on: function (name, fn) {
          if (!this._events[name]) this._events[name] = [];
          this._events[name].push(fn);
      },

      off: function (name, fn) {
          if (!this._events[name]) return;

          if (!fn) {
              this._events[name] = [];
          } else {

              for (let i = 0; i < this._events[name].length; i++) {
                  if (this._events[name][i] === fn) {
                      this._events[name].splice(i, 1);
                      break;
                  }
              }
          }
      },

      trigger: function (name, params) {

          if (!this._events[name]) return;

          let event = { name, params };

          for (let i = 0; i < this._events[name].length; i++) {
              this._events[name][i].apply(App$1, [event]);
          }
      },

      deferred: function () {

          let resolve, fail;

          let d = new Promise(function (fullfill, reject) {
              resolve = fullfill;
              fail = reject;
          });

          d.resolve = function (data) {
              resolve(data);
          };

          d.reject = function (data) {
              fail(data);
          };

          return d;
      }
  };

  // general services
  App$1.session = window.JSONStorage ? window.JSONStorage.select("app", "session") : null;
  App$1.storage = window.JSONStorage ? window.JSONStorage.select("app", "local") : null;
  App$1.memory = window.JSONStorage ? window.JSONStorage.select("app", "memory") : null;
  App$1.i18n = window.i18n || null;
  App$1.assets = assets;
  App$1.ui = ui$1;
  App$1.utils = utils;

  // custom utils
  App$1.utils.import = function(uri) {
      return import(App$1.base(uri)+'?v='+App$1.version);
  };

  window.App = App$1;

}());
