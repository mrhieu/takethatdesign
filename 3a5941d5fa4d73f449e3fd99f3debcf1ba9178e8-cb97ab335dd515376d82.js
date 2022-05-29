"use strict";(self.webpackChunktake_that_design=self.webpackChunktake_that_design||[]).push([[57],{1674:function(e,t,n){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.isArray(e)?e:Object.keys(e).map((function(t){return e[t].name=t,e[t]}))}function o(e){var t,n,o,i,a=e.enabled,c=e.enableEvents,s=e.placement,f=e.flip,u=e.offset,l=e.fixed,p=e.containerPadding,d=e.arrowElement,m=e.popperConfig,v=void 0===m?{}:m,h=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(v.modifiers);return Object.assign({},v,{placement:s,enabled:a,strategy:l?"fixed":v.strategy,modifiers:r(Object.assign({},h,{eventListeners:{enabled:c},preventOverflow:Object.assign({},h.preventOverflow,{options:p?Object.assign({padding:p},null==(t=h.preventOverflow)?void 0:t.options):null==(n=h.preventOverflow)?void 0:n.options}),offset:{options:Object.assign({offset:u},null==(o=h.offset)?void 0:o.options)},arrow:Object.assign({},h.arrow,{enabled:!!d,options:Object.assign({},null==(i=h.arrow)?void 0:i.options,{element:d})}),flip:Object.assign({enabled:!!f},h.flip)}))})}n.d(t,{ZP:function(){return o}})},451:function(e,t,n){n.d(t,{f:function(){return d}});var r=n(424),o=n(3299),i=n(7216),a=n(7294),c=n(5655),s=n(2473),f=n.n(s),u=function(){};function l(e){return 0===e.button}function p(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var d=function(e){return e&&("current"in e?e.current:e)},m={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=n.disabled,v=n.clickTrigger,h=void 0===v?"click":v,y=(0,a.useRef)(!1),g=(0,a.useRef)(!1),b=(0,a.useCallback)((function(t){var n=d(e);f()(!!n,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),y.current=!n||p(t)||!l(t)||!!(0,r.Z)(n,t.target)||g.current,g.current=!1}),[e]),w=(0,c.Z)((function(t){var n=d(e);n&&(0,r.Z)(n,t.target)&&(g.current=!0)})),O=(0,c.Z)((function(e){y.current||t(e)}));(0,a.useEffect)((function(){if(!s&&null!=e){var t=(0,i.Z)(d(e)),n=(t.defaultView||window).event,r=null;m[h]&&(r=(0,o.Z)(t,m[h],w,!0));var a=(0,o.Z)(t,h,b,!0),c=(0,o.Z)(t,h,(function(e){e!==n?O(e):n=void 0})),f=[];return"ontouchstart"in t.documentElement&&(f=[].slice.call(t.body.children).map((function(e){return(0,o.Z)(e,"mousemove",u)}))),function(){null==r||r(),a(),c(),f.forEach((function(e){return e()}))}}}),[e,s,h,b,w,O])}},2467:function(e,t,n){n.d(t,{Z:function(){return De}});var r=n(3433),o=n(9439),i=n(7294);function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=Object.prototype.hasOwnProperty;function f(e,t,n){var r,o=a(e.keys());try{for(o.s();!(r=o.n()).done;)if(u(n=r.value,t))return n}catch(i){o.e(i)}finally{o.f()}}function u(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&u(e[r],t[r]););return-1===r}if(n===Set){if(e.size!==t.size)return!1;var i,c=a(e);try{for(c.s();!(i=c.n()).done;){if((o=r=i.value)&&"object"==typeof o&&!(o=f(t,o)))return!1;if(!t.has(o))return!1}}catch(d){c.e(d)}finally{c.f()}return!0}if(n===Map){if(e.size!==t.size)return!1;var l,p=a(e);try{for(p.s();!(l=p.n()).done;){if((o=(r=l.value)[0])&&"object"==typeof o&&!(o=f(t,o)))return!1;if(!u(r[1],t.get(o)))return!1}}catch(d){p.e(d)}finally{p.f()}return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return-1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return-1===r}if(!n||"object"==typeof e){for(n in r=0,e){if(s.call(e,n)&&++r&&!s.call(t,n))return!1;if(!(n in t)||!u(e[n],t[n]))return!1}return Object.keys(t).length===r}}return e!=e&&t!=t}var l=n(6400);var p=function(e){var t=(0,l.Z)();return[e[0],(0,i.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]};function d(e){return e.split("-")[0]}function m(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function v(e){return e instanceof m(e).Element||e instanceof Element}function h(e){return e instanceof m(e).HTMLElement||e instanceof HTMLElement}function y(e){return"undefined"!=typeof ShadowRoot&&(e instanceof m(e).ShadowRoot||e instanceof ShadowRoot)}var g=Math.max,b=Math.min,w=Math.round;function O(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(h(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=w(n.width)/a||1),i>0&&(o=w(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function x(e){var t=O(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function j(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&y(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function E(e){return e?(e.nodeName||"").toLowerCase():null}function P(e){return m(e).getComputedStyle(e)}function Z(e){return["table","td","th"].indexOf(E(e))>=0}function k(e){return((v(e)?e.ownerDocument:e.document)||window.document).documentElement}function D(e){return"html"===E(e)?e:e.assignedSlot||e.parentNode||(y(e)?e.host:null)||k(e)}function C(e){return h(e)&&"fixed"!==P(e).position?e.offsetParent:null}function A(e){for(var t=m(e),n=C(e);n&&Z(n)&&"static"===P(n).position;)n=C(n);return n&&("html"===E(n)||"body"===E(n)&&"static"===P(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&h(e)&&"fixed"===P(e).position)return null;var n=D(e);for(y(n)&&(n=n.host);h(n)&&["html","body"].indexOf(E(n))<0;){var r=P(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function N(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function S(e,t,n){return g(e,b(t,n))}function R(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function L(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var T="top",M="bottom",B="right",W="left",H="auto",_=[T,M,B,W],F="start",V="end",I="viewport",U="popper",q=_.reduce((function(e,t){return e.concat([t+"-"+F,t+"-"+V])}),[]),z=[].concat(_,[H]).reduce((function(e,t){return e.concat([t,t+"-"+F,t+"-"+V])}),[]),K=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];var $={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,c=d(n.placement),s=N(c),f=[W,B].indexOf(c)>=0?"height":"width";if(i&&a){var u=function(e,t){return R("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:L(e,_))}(o.padding,n),l=x(i),p="y"===s?T:W,m="y"===s?M:B,v=n.rects.reference[f]+n.rects.reference[s]-a[s]-n.rects.popper[f],h=a[s]-n.rects.reference[s],y=A(i),g=y?"y"===s?y.clientHeight||0:y.clientWidth||0:0,b=v/2-h/2,w=u[p],O=g-l[f]-u[m],j=g/2-l[f]/2+b,E=S(w,j,O),P=s;n.modifiersData[r]=((t={})[P]=E,t.centerOffset=E-j,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&j(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function X(e){return e.split("-")[1]}var Y={top:"auto",right:"auto",bottom:"auto",left:"auto"};function G(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,c=e.position,s=e.gpuAcceleration,f=e.adaptive,u=e.roundOffsets,l=e.isFixed,p=a.x,d=void 0===p?0:p,v=a.y,h=void 0===v?0:v,y="function"==typeof u?u({x:d,y:h}):{x:d,y:h};d=y.x,h=y.y;var g=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),O=W,x=T,j=window;if(f){var E=A(n),Z="clientHeight",D="clientWidth";if(E===m(n)&&"static"!==P(E=k(n)).position&&"absolute"===c&&(Z="scrollHeight",D="scrollWidth"),E=E,o===T||(o===W||o===B)&&i===V)x=M,h-=(l&&E===j&&j.visualViewport?j.visualViewport.height:E[Z])-r.height,h*=s?1:-1;if(o===W||(o===T||o===M)&&i===V)O=B,d-=(l&&E===j&&j.visualViewport?j.visualViewport.width:E[D])-r.width,d*=s?1:-1}var C,N=Object.assign({position:c},f&&Y),S=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:w(t*r)/r||0,y:w(n*r)/r||0}}({x:d,y:h}):{x:d,y:h};return d=S.x,h=S.y,s?Object.assign({},N,((C={})[x]=b?"0":"",C[O]=g?"0":"",C.transform=(j.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",C)):Object.assign({},N,((t={})[x]=b?h+"px":"",t[O]=g?d+"px":"",t.transform="",t))}var J={passive:!0};var Q={left:"right",right:"left",bottom:"top",top:"bottom"};function ee(e){return e.replace(/left|right|bottom|top/g,(function(e){return Q[e]}))}var te={start:"end",end:"start"};function ne(e){return e.replace(/start|end/g,(function(e){return te[e]}))}function re(e){var t=m(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function oe(e){return O(k(e)).left+re(e).scrollLeft}function ie(e){var t=P(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ae(e){return["html","body","#document"].indexOf(E(e))>=0?e.ownerDocument.body:h(e)&&ie(e)?e:ae(D(e))}function ce(e,t){var n;void 0===t&&(t=[]);var r=ae(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=m(r),a=o?[i].concat(i.visualViewport||[],ie(r)?r:[]):r,c=t.concat(a);return o?c:c.concat(ce(D(a)))}function se(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function fe(e,t){return t===I?se(function(e){var t=m(e),n=k(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,c=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,c=r.offsetTop)),{width:o,height:i,x:a+oe(e),y:c}}(e)):v(t)?function(e){var t=O(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):se(function(e){var t,n=k(e),r=re(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=g(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=g(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-r.scrollLeft+oe(e),s=-r.scrollTop;return"rtl"===P(o||n).direction&&(c+=g(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:c,y:s}}(k(e)))}function ue(e,t,n){var r="clippingParents"===t?function(e){var t=ce(D(e)),n=["absolute","fixed"].indexOf(P(e).position)>=0&&h(e)?A(e):e;return v(n)?t.filter((function(e){return v(e)&&j(e,n)&&"body"!==E(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=fe(e,n);return t.top=g(r.top,t.top),t.right=b(r.right,t.right),t.bottom=b(r.bottom,t.bottom),t.left=g(r.left,t.left),t}),fe(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function le(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?d(o):null,a=o?X(o):null,c=n.x+n.width/2-r.width/2,s=n.y+n.height/2-r.height/2;switch(i){case T:t={x:c,y:n.y-r.height};break;case M:t={x:c,y:n.y+n.height};break;case B:t={x:n.x+n.width,y:s};break;case W:t={x:n.x-r.width,y:s};break;default:t={x:n.x,y:n.y}}var f=i?N(i):null;if(null!=f){var u="y"===f?"height":"width";switch(a){case F:t[f]=t[f]-(n[u]/2-r[u]/2);break;case V:t[f]=t[f]+(n[u]/2-r[u]/2)}}return t}function pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,c=n.rootBoundary,s=void 0===c?I:c,f=n.elementContext,u=void 0===f?U:f,l=n.altBoundary,p=void 0!==l&&l,d=n.padding,m=void 0===d?0:d,h=R("number"!=typeof m?m:L(m,_)),y=u===U?"reference":U,g=e.rects.popper,b=e.elements[p?y:u],w=ue(v(b)?b:b.contextElement||k(e.elements.popper),a,s),x=O(e.elements.reference),j=le({reference:x,element:g,strategy:"absolute",placement:o}),E=se(Object.assign({},g,j)),P=u===U?E:x,Z={top:w.top-P.top+h.top,bottom:P.bottom-w.bottom+h.bottom,left:w.left-P.left+h.left,right:P.right-w.right+h.right},D=e.modifiersData.offset;if(u===U&&D){var C=D[o];Object.keys(Z).forEach((function(e){var t=[B,M].indexOf(e)>=0?1:-1,n=[T,M].indexOf(e)>=0?"y":"x";Z[e]+=C[n]*t}))}return Z}function de(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function me(e){return[T,B,M,W].some((function(t){return e[t]>=0}))}var ve={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=z.reduce((function(e,n){return e[n]=function(e,t,n){var r=d(e),o=[W,T].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],c=i[1];return a=a||0,c=(c||0)*o,[W,B].indexOf(r)>=0?{x:c,y:a}:{x:a,y:c}}(n,t.rects,i),e}),{}),c=a[t.placement],s=c.x,f=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=f),t.modifiersData[r]=a}};var he={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,c=void 0!==a&&a,s=n.boundary,f=n.rootBoundary,u=n.altBoundary,l=n.padding,p=n.tether,m=void 0===p||p,v=n.tetherOffset,h=void 0===v?0:v,y=pe(t,{boundary:s,rootBoundary:f,padding:l,altBoundary:u}),w=d(t.placement),O=X(t.placement),j=!O,E=N(w),P="x"===E?"y":"x",Z=t.modifiersData.popperOffsets,k=t.rects.reference,D=t.rects.popper,C="function"==typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,R="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,H={x:0,y:0};if(Z){if(i){var _,V="y"===E?T:W,I="y"===E?M:B,U="y"===E?"height":"width",q=Z[E],z=q+y[V],K=q-y[I],$=m?-D[U]/2:0,Y=O===F?k[U]:D[U],G=O===F?-D[U]:-k[U],J=t.elements.arrow,Q=m&&J?x(J):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[V],ne=ee[I],re=S(0,k[U],Q[U]),oe=j?k[U]/2-$-re-te-R.mainAxis:Y-re-te-R.mainAxis,ie=j?-k[U]/2+$+re+ne+R.mainAxis:G+re+ne+R.mainAxis,ae=t.elements.arrow&&A(t.elements.arrow),ce=ae?"y"===E?ae.clientTop||0:ae.clientLeft||0:0,se=null!=(_=null==L?void 0:L[E])?_:0,fe=q+ie-se,ue=S(m?b(z,q+oe-se-ce):z,q,m?g(K,fe):K);Z[E]=ue,H[E]=ue-q}if(c){var le,de="x"===E?T:W,me="x"===E?M:B,ve=Z[P],he="y"===P?"height":"width",ye=ve+y[de],ge=ve-y[me],be=-1!==[T,W].indexOf(w),we=null!=(le=null==L?void 0:L[P])?le:0,Oe=be?ye:ve-k[he]-D[he]-we+R.altAxis,xe=be?ve+k[he]+D[he]-we-R.altAxis:ge,je=m&&be?function(e,t,n){var r=S(e,t,n);return r>n?n:r}(Oe,ve,xe):S(m?Oe:ye,ve,m?xe:ge);Z[P]=je,H[P]=je-ve}t.modifiersData[r]=H}},requiresIfExists:["offset"]};function ye(e,t,n){void 0===n&&(n=!1);var r,o,i=h(t),a=h(t)&&function(e){var t=e.getBoundingClientRect(),n=w(t.width)/e.offsetWidth||1,r=w(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),c=k(t),s=O(e,a),f={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!n)&&(("body"!==E(t)||ie(c))&&(f=(r=t)!==m(r)&&h(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:re(r)),h(t)?((u=O(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):c&&(u.x=oe(c))),{x:s.left+f.scrollLeft-u.x,y:s.top+f.scrollTop-u.y,width:s.width,height:s.height}}function ge(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var be={placement:"bottom",modifiers:[],strategy:"absolute"};function we(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Oe(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?be:o;return function(e,t,n){void 0===n&&(n=i);var o,a,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},be,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],f=!1,u={state:c,setOptions:function(n){var o="function"==typeof n?n(c.options):n;l(),c.options=Object.assign({},i,c.options,o),c.scrollParents={reference:v(e)?ce(e):e.contextElement?ce(e.contextElement):[],popper:ce(t)};var a=function(e){var t=ge(e);return K.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,c.options.modifiers)));return c.orderedModifiers=a.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:c,name:t,instance:u,options:r}),a=function(){};s.push(i||a)}})),u.update()},forceUpdate:function(){if(!f){var e=c.elements,t=e.reference,n=e.popper;if(we(t,n)){c.rects={reference:ye(t,A(n),"fixed"===c.options.strategy),popper:x(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var o=c.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,l=o.name;"function"==typeof i&&(c=i({state:c,options:s,name:l,instance:u})||c)}else c.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(c)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){l(),f=!0}};if(!we(e,t))return u;function l(){s.forEach((function(e){return e()})),s=[]}return u.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var xe=Oe({defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=pe(t,{elementContext:"reference"}),c=pe(t,{altBoundary:!0}),s=de(a,r),f=de(c,o,i),u=me(s),l=me(f);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=le({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,c=n.roundOffsets,s=void 0===c||c,f={placement:d(t.placement),variation:X(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,G(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,G(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,c=void 0===a||a,s=m(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",n.update,J)})),c&&s.addEventListener("resize",n.update,J),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",n.update,J)})),c&&s.removeEventListener("resize",n.update,J)}},data:{}},ve,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,c=void 0===a||a,s=n.fallbackPlacements,f=n.padding,u=n.boundary,l=n.rootBoundary,p=n.altBoundary,m=n.flipVariations,v=void 0===m||m,h=n.allowedAutoPlacements,y=t.options.placement,g=d(y),b=s||(g===y||!v?[ee(y)]:function(e){if(d(e)===H)return[];var t=ee(e);return[ne(e),t,ne(t)]}(y)),w=[y].concat(b).reduce((function(e,n){return e.concat(d(n)===H?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,c=n.flipVariations,s=n.allowedAutoPlacements,f=void 0===s?z:s,u=X(r),l=u?c?q:q.filter((function(e){return X(e)===u})):_,p=l.filter((function(e){return f.indexOf(e)>=0}));0===p.length&&(p=l);var m=p.reduce((function(t,n){return t[n]=pe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[d(n)],t}),{});return Object.keys(m).sort((function(e,t){return m[e]-m[t]}))}(t,{placement:n,boundary:u,rootBoundary:l,padding:f,flipVariations:v,allowedAutoPlacements:h}):n)}),[]),O=t.rects.reference,x=t.rects.popper,j=new Map,E=!0,P=w[0],Z=0;Z<w.length;Z++){var k=w[Z],D=d(k),C=X(k)===F,A=[T,M].indexOf(D)>=0,N=A?"width":"height",S=pe(t,{placement:k,boundary:u,rootBoundary:l,altBoundary:p,padding:f}),R=A?C?B:W:C?M:T;O[N]>x[N]&&(R=ee(R));var L=ee(R),V=[];if(i&&V.push(S[D]<=0),c&&V.push(S[R]<=0,S[L]<=0),V.every((function(e){return e}))){P=k,E=!1;break}j.set(k,V)}if(E)for(var I=function(e){var t=w.find((function(t){var n=j.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},U=v?3:1;U>0;U--){if("break"===I(U))break}t.placement!==P&&(t.modifiersData[r]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},he,$]}),je=["enabled","placement","strategy","modifiers"];function Ee(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var Pe={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:function(){}},Ze={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,n=e.reference,r=e.popper;if("removeAttribute"in n){var o=(n.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==r.id}));o.length?n.setAttribute("aria-describedby",o.join(",")):n.removeAttribute("aria-describedby")}}},fn:function(e){var t,n=e.state.elements,r=n.popper,o=n.reference,i=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===i&&"setAttribute"in o){var a=o.getAttribute("aria-describedby");if(a&&-1!==a.split(",").indexOf(r.id))return;o.setAttribute("aria-describedby",a?"".concat(a,",").concat(r.id):r.id)}}},ke=[];var De=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.enabled,c=void 0===a||a,s=n.placement,f=void 0===s?"bottom":s,l=n.strategy,d=void 0===l?"absolute":l,m=n.modifiers,v=void 0===m?ke:m,h=Ee(n,je),y=(0,i.useRef)(v),g=(0,i.useRef)(),b=(0,i.useCallback)((function(){var e;null==(e=g.current)||e.update()}),[]),w=(0,i.useCallback)((function(){var e;null==(e=g.current)||e.forceUpdate()}),[]),O=p((0,i.useState)({placement:f,update:b,forceUpdate:w,attributes:{},styles:{popper:{},arrow:{}}})),x=(0,o.Z)(O,2),j=x[0],E=x[1],P=(0,i.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,n={},r={};Object.keys(t.elements).forEach((function(e){n[e]=t.styles[e],r[e]=t.attributes[e]})),E({state:t,styles:n,attributes:r,update:b,forceUpdate:w,placement:t.placement})}}}),[b,w,E]),Z=(0,i.useMemo)((function(){return u(y.current,v)||(y.current=v),y.current}),[v]);return(0,i.useEffect)((function(){g.current&&c&&g.current.setOptions({placement:f,strategy:d,modifiers:[].concat((0,r.Z)(Z),[P,Pe])})}),[d,f,P,c,Z]),(0,i.useEffect)((function(){if(c&&null!=e&&null!=t)return g.current=xe(e,t,Object.assign({},h,{placement:f,strategy:d,modifiers:[].concat((0,r.Z)(Z),[Ze,P])})),function(){null!=g.current&&(g.current.destroy(),g.current=void 0,E((function(e){return Object.assign({},e,{attributes:{},styles:{popper:{}}})})))}}),[c,e,t]),j}},6536:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),o=n(3004),i=(0,r.createContext)(o.Z?window:void 0);i.Provider;function a(){return(0,r.useContext)(i)}},3557:function(e,t,n){n.d(t,{Z:function(){return ue}});var r=n(4942),o=n(5987),i=n(3433),a=n(9439),c=n(424),s=n(7294),f=n(2260),u=(n(2473),n(5210)),l=n(1822),p=n(5900),d=n.n(p),m=n(3935),v=n(3924),h=n(2467),y=n(3299),g=n(7216),b=n(5655),w=n(451),O=function(){};var x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.disabled,o=n.clickTrigger,i=t||O;(0,w.Z)(e,i,{disabled:r,clickTrigger:o});var a=(0,b.Z)((function(e){27===e.keyCode&&i(e)}));(0,s.useEffect)((function(){if(!r&&null!=e){var t=(0,g.Z)((0,w.f)(e)),n=(t.defaultView||window).event,o=(0,y.Z)(t,"keyup",(function(e){e!==n?a(e):n=void 0}));return function(){o()}}}),[e,r,a])},j=n(3004),E=n(6536),P=function(e,t){var n;return j.Z?null==e?(t||(0,g.Z)()).body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(n=e)&&n.nodeType&&e||null):null};function Z(e,t){var n=(0,E.Z)(),r=(0,s.useState)((function(){return P(e,null==n?void 0:n.document)})),o=(0,a.Z)(r,2),i=o[0],c=o[1];if(!i){var f=P(e);f&&c(f)}return(0,s.useEffect)((function(){t&&i&&t(i)}),[t,i]),(0,s.useEffect)((function(){var t=P(e);t!==i&&c(t)}),[e,i]),i}var k=n(1674),D=n(5893),C=s.forwardRef((function(e,t){var n=e.flip,r=e.offset,o=e.placement,i=e.containerPadding,c=e.popperConfig,f=void 0===c?{}:c,u=e.transition,p=(0,v.Z)(),d=(0,a.Z)(p,2),y=d[0],g=d[1],b=(0,v.Z)(),w=(0,a.Z)(b,2),O=w[0],j=w[1],E=(0,l.Z)(g,t),P=Z(e.container),C=Z(e.target),A=(0,s.useState)(!e.show),N=(0,a.Z)(A,2),S=N[0],R=N[1],L=(0,h.Z)(C,y,(0,k.ZP)({placement:o,enableEvents:!!e.show,containerPadding:i||5,flip:n,offset:r,arrowElement:O,popperConfig:f}));e.show?S&&R(!1):e.transition||S||R(!0);var T=e.show||u&&!S;if(x(y,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!T)return null;var M=e.children(Object.assign({},L.attributes.popper,{style:L.styles.popper,ref:E}),{popper:L,placement:o,show:!!e.show,arrowProps:Object.assign({},L.attributes.arrow,{style:L.styles.arrow,ref:j})});if(u){var B=e.onExit,W=e.onExiting,H=e.onEnter,_=e.onEntering,F=e.onEntered;M=(0,D.jsx)(u,{in:e.show,appear:!0,onExit:B,onExiting:W,onExited:function(){R(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:H,onEntering:_,onEntered:F,children:M})}return P?m.createPortal(M,P):null}));C.displayName="Overlay";var A=C;var N=n(9541),S=n(8870),R=(0,S.Z)("popover-header"),L=(0,S.Z)("popover-body"),T=n(249),M=["bsPrefix","placement","className","style","children","body","arrowProps","popper","show"];function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=s.forwardRef((function(e,t){var n=e.bsPrefix,r=e.placement,i=e.className,c=e.style,s=e.children,f=e.body,u=e.arrowProps,l=(e.popper,e.show,(0,o.Z)(e,M)),p=(0,N.vE)(n,"popover"),m=(0,N.SC)(),v=(null==r?void 0:r.split("-"))||[],h=(0,a.Z)(v,1)[0],y=(0,T.z)(h,m);return(0,D.jsxs)("div",W(W({ref:t,role:"tooltip",style:c,"x-placement":h,className:d()(i,p,h&&"bs-popover-".concat(y))},l),{},{children:[(0,D.jsx)("div",W({className:"popover-arrow"},u)),f?(0,D.jsx)(L,{children:s}):s]}))}));H.defaultProps={placement:"right"};var _=Object.assign(H,{Header:R,Body:L,POPPER_OFFSET:[0,8]});var F,V=n(5160),I=n(1868),U=n(9059),q=n(3275),z=["className","children","transitionClasses"];function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=(F={},(0,r.Z)(F,V.d0,"show"),(0,r.Z)(F,V.cn,"show"),F),Y=s.forwardRef((function(e,t){var n=e.className,r=e.children,i=e.transitionClasses,a=void 0===i?{}:i,c=(0,o.Z)(e,z),f=(0,s.useCallback)((function(e,t){(0,U.Z)(e),null==c.onEnter||c.onEnter(e,t)}),[c]);return(0,D.jsx)(q.Z,$($({ref:t,addEndListener:I.Z},c),{},{onEnter:f,childRef:r.ref,children:function(e,t){return s.cloneElement(r,$($({},t),{},{className:d()("fade",n,r.props.className,X[e],a[e])}))}}))}));Y.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Y.displayName="Fade";var G=Y,J=n(8305),Q=["children","transition","popperConfig"];function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne={transition:G,rootClose:!1,show:!1,placement:"top"};var re=s.forwardRef((function(e,t){var n,r,i,c,f=e.children,u=e.transition,p=e.popperConfig,m=void 0===p?{}:p,v=(0,o.Z)(e,Q),h=(0,s.useRef)({}),y=(n=v.offset,r=(0,s.useRef)(null),i=(0,N.vE)(void 0,"popover"),c=(0,s.useMemo)((function(){return{name:"offset",options:{offset:function(){return r.current&&(e=r.current,t=i,e.classList?t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" "))?n||_.POPPER_OFFSET:n||[0,0];var e,t}}}}),[n,i]),[r,[c]]),g=(0,a.Z)(y,2),b=g[0],w=g[1],O=(0,l.Z)(t,b),x=!0===u?G:u||void 0;return(0,D.jsx)(A,te(te({},v),{},{ref:O,popperConfig:te(te({},m),{},{modifiers:w.concat(m.modifiers||[])}),transition:x,children:function(e,t){var n,r,o=t.arrowProps,i=t.popper,a=t.show;!function(e,t){var n=e.ref,r=t.ref;e.ref=n.__wrapped||(n.__wrapped=function(e){return n((0,J.Z)(e))}),t.ref=r.__wrapped||(r.__wrapped=function(e){return r((0,J.Z)(e))})}(e,o);var c=null==i?void 0:i.placement,l=Object.assign(h.current,{state:null==i?void 0:i.state,scheduleUpdate:null==i?void 0:i.update,placement:c,outOfBoundaries:(null==i||null==(n=i.state)||null==(r=n.modifiersData.hide)?void 0:r.isReferenceHidden)||!1});return"function"==typeof f?f(te(te(te({},e),{},{placement:c,show:a},!u&&a&&{className:"show"}),{},{popper:l,arrowProps:o})):s.cloneElement(f,te(te({},e),{},{placement:c,arrowProps:o,popper:l,className:d()(f.props.className,!u&&a&&"show"),style:te(te({},f.props.style),e.style)}))}}))}));re.displayName="Overlay",re.defaultProps=ne;var oe=re,ie=["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"];function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function se(e,t,n){var r=(0,a.Z)(t,1)[0],o=r.currentTarget,s=r.relatedTarget||r.nativeEvent[n];s&&s===o||(0,c.Z)(o,s)||e.apply(void 0,(0,i.Z)(t))}function fe(e){var t=e.trigger,n=e.overlay,r=e.children,i=e.popperConfig,c=void 0===i?{}:i,p=e.show,d=e.defaultShow,m=void 0!==d&&d,v=e.onToggle,h=e.delay,y=e.placement,g=e.flip,b=void 0===g?y&&-1!==y.indexOf("auto"):g,w=(0,o.Z)(e,ie),O=(0,s.useRef)(null),x=(0,l.Z)(O,r.ref),j=(0,f.Z)(),E=(0,s.useRef)(""),P=(0,u.$c)(p,m,v),Z=(0,a.Z)(P,2),k=Z[0],C=Z[1],A=function(e){return e&&"object"==typeof e?e:{show:e,hide:e}}(h),N="function"!=typeof r?s.Children.only(r).props:{},S=N.onFocus,R=N.onBlur,L=N.onClick,T=(0,s.useCallback)((function(){j.clear(),E.current="show",A.show?j.set((function(){"show"===E.current&&C(!0)}),A.show):C(!0)}),[A.show,C,j]),M=(0,s.useCallback)((function(){j.clear(),E.current="hide",A.hide?j.set((function(){"hide"===E.current&&C(!1)}),A.hide):C(!1)}),[A.hide,C,j]),B=(0,s.useCallback)((function(){T(),null==S||S.apply(void 0,arguments)}),[T,S]),W=(0,s.useCallback)((function(){M(),null==R||R.apply(void 0,arguments)}),[M,R]),H=(0,s.useCallback)((function(){C(!k),null==L||L.apply(void 0,arguments)}),[L,C,k]),_=(0,s.useCallback)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];se(T,t,"fromElement")}),[T]),F=(0,s.useCallback)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];se(M,t,"toElement")}),[M]),V=null==t?[]:[].concat(t),I={ref:function(e){x((0,J.Z)(e))}};return-1!==V.indexOf("click")&&(I.onClick=H),-1!==V.indexOf("focus")&&(I.onFocus=B,I.onBlur=W),-1!==V.indexOf("hover")&&(I.onMouseOver=_,I.onMouseOut=F),(0,D.jsxs)(D.Fragment,{children:["function"==typeof r?r(I):(0,s.cloneElement)(r,I),(0,D.jsx)(oe,ce(ce({},w),{},{show:k,onHide:M,flip:b,placement:y,popperConfig:c,target:O.current,children:n}))]})}fe.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var ue=fe},9474:function(e,t,n){var r=n(4942),o=n(9439),i=n(5987),a=n(5900),c=n.n(a),s=n(7294),f=n(9541),u=n(249),l=n(5893),p=["bsPrefix","placement","className","style","children","arrowProps","popper","show"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=s.forwardRef((function(e,t){var n=e.bsPrefix,r=e.placement,a=e.className,s=e.style,d=e.children,v=e.arrowProps,h=(e.popper,e.show,(0,i.Z)(e,p));n=(0,f.vE)(n,"tooltip");var y=(0,f.SC)(),g=(null==r?void 0:r.split("-"))||[],b=(0,o.Z)(g,1)[0],w=(0,u.z)(b,y);return(0,l.jsxs)("div",m(m({ref:t,style:s,role:"tooltip","x-placement":b,className:c()(a,n,"bs-tooltip-".concat(w))},h),{},{children:[(0,l.jsx)("div",m({className:"tooltip-arrow"},v)),(0,l.jsx)("div",{className:"".concat(n,"-inner"),children:d})]}))}));v.defaultProps={placement:"right"},v.displayName="Tooltip",t.Z=v},249:function(e,t,n){n.d(t,{z:function(){return f}});var r=n(3144),o=n(5671),i=n(136),a=n(6215),c=n(1120);function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var o=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}n(7294).Component;function f(e,t){var n=e;return"left"===e?n=t?"end":"start":"right"===e&&(n=t?"start":"end"),n}},424:function(e,t,n){function r(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,{Z:function(){return r}})},25:function(e,t,n){var r=n(7294),o=n(1597),i=n(3557),a=n(9474),c=n(8885),s=n(5492);t.Z=function(e){var t=e.data,n=e.onTagClick,f=c.Z.getProductUrl(t),u=function(e,t){n({type:e,name:t})},l=t.productImage.thumbnails.slice(0,3);return r.createElement("div",{className:"product-item"},l.length>0&&r.createElement("div",{className:"item-image-stack",role:"button",tabIndex:0,onKeyDown:function(){},style:{backgroundColor:t.productImage.color.hex},onClick:function(){(0,o.navigate)("/"+f)}},l.map((function(e){return r.createElement(s.Z,{key:e._key,imageData:e,isFixed:!0,isSmall:!0})})),(new Date).getTime()-new Date(t.createdAt).getTime()<2592e6&&r.createElement("div",{className:"label-new"},"NEW")),r.createElement("div",{className:"item-footer"},r.createElement("div",{className:"item-info"},r.createElement("div",{className:"item-icon"},r.createElement(o.Link,{to:"/"+f,title:t.title},r.createElement(s.Z,{imageData:t.productImage.icon}))),r.createElement("div",{className:"font-bold text-ellipsis"},r.createElement(o.Link,{to:"/"+f,title:t.title},t.title)),r.createElement("div",{className:"text-muted text-sm text-ellipsis",title:t.shortDescription},t.shortDescription),r.createElement("div",{className:"item-tags"},r.createElement(i.Z,{overlay:r.createElement(a.Z,null,"Framework")},r.createElement("button",{onClick:function(){return u("framework",t.framework.title)},className:"tag tag-sm"},t.framework.title)),r.createElement(i.Z,{overlay:r.createElement(a.Z,null,"Category")},r.createElement("button",{onClick:function(){return u("category",t.category.title)},className:"tag tag-sm"},t.category.title)))),r.createElement(o.Link,{to:"/"+f,title:t.title,className:"item-price"},0===t.price&&r.createElement("span",{className:"text-danger"},"Free"),0!==t.price&&r.createElement("span",null,"$",t.price))))}},2473:function(e){var t=function(){};e.exports=t}}]);
//# sourceMappingURL=3a5941d5fa4d73f449e3fd99f3debcf1ba9178e8-cb97ab335dd515376d82.js.map