/*! For license information please see 270ad5b8191ffb0cc6f002e286e9508a3dd82bec-776a09a3466491df6341.js.LICENSE.txt */
(self.webpackChunktake_that_design=self.webpackChunktake_that_design||[]).push([[245],{8849:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=n(5697)},function(e,t){e.exports=n(7294)},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=0,s=r.forwardRef((function(e,t){var n=e.title,o=void 0===n?null:n,s=e.description,c=void 0===s?null:s,l=e.size,u=void 0===l?null:l,f=e.color,p=void 0===f?"currentColor":f,m=e.horizontal,d=void 0===m?null:m,v=e.vertical,h=void 0===v?null:v,E=e.rotate,b=void 0===E?null:E,y=e.spin,g=void 0===y?null:y,x=e.style,w=void 0===x?{}:x,k=e.children,O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);i++;var N,S=null!==g&&g,C=r.Children.map(k,(function(e){var t=e;!0!==S&&(S=!0===(null===g?t.props.spin:g));var n=t.props.size;"number"==typeof u&&"number"==typeof t.props.size&&(n=t.props.size/u);var o={size:n,color:null===p?t.props.color:p,horizontal:null===d?t.props.horizontal:d,vertical:null===h?t.props.vertical:h,rotate:null===b?t.props.rotate:b,spin:null===g?t.props.spin:g,inStack:!0};return r.cloneElement(t,o)}));null!==u&&(w.width="string"==typeof u?u:1.5*u+"rem");var j,T="stack_labelledby_"+i,P="stack_describedby_"+i;if(o)N=c?T+" "+P:T;else if(j="presentation",c)throw new Error("title attribute required when description is set");return r.createElement("svg",a({ref:t,viewBox:"0 0 24 24",style:w,role:j,"aria-labelledby":N},O),o&&r.createElement("title",{id:T},o),c&&r.createElement("desc",{id:P},c),S&&r.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }","@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"),C)}));s.displayName="Stack",s.propTypes={size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),children:o.oneOfType([o.arrayOf(o.node),o.node]).isRequired,className:o.string,style:o.object},s.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null};var c=s;n.d(t,"Icon",(function(){return f})),n.d(t,"Stack",(function(){return c}));var l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=0,f=r.forwardRef((function(e,t){var n=e.path,o=e.id,a=void 0===o?++u:o,i=e.title,s=void 0===i?null:i,c=e.description,f=void 0===c?null:c,p=e.size,m=void 0===p?null:p,d=e.color,v=void 0===d?"currentColor":d,h=e.horizontal,E=void 0!==h&&h,b=e.vertical,y=void 0!==b&&b,g=e.rotate,x=void 0===g?0:g,w=e.spin,k=void 0!==w&&w,O=e.style,N=void 0===O?{}:O,S=e.inStack,C=void 0!==S&&S,j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["path","id","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]),T={},P=[];null!==m&&(C?P.push("scale("+m+")"):(N.width="string"==typeof m?m:1.5*m+"rem",N.height=N.width)),E&&P.push("scaleX(-1)"),y&&P.push("scaleY(-1)"),0!==x&&P.push("rotate("+x+"deg)"),null!==v&&(T.fill=v);var _=r.createElement("path",l({d:n,style:T},C?j:{})),Z=_;P.length>0&&(N.transform=P.join(" "),N.transformOrigin="center",C&&(Z=r.createElement("g",{style:N},_,r.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var z,R=Z,D=!0===k||"number"!=typeof k?2:k,L=!C&&(E||y);if(D<0&&(L=!L),k&&(R=r.createElement("g",{style:{animation:"spin"+(L?"-inverse":"")+" linear "+Math.abs(D)+"s infinite",transformOrigin:"center"}},Z,!(E||y||0!==x)&&r.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),C)return R;var M,I="icon_labelledby_"+a,q="icon_describedby_"+a;if(s)z=f?I+" "+q:I;else if(M="presentation",f)throw new Error("title attribute required when description is set");return r.createElement("svg",l({ref:t,viewBox:"0 0 24 24",style:N,role:M,"aria-labelledby":z},j),s&&r.createElement("title",{id:I},s),f&&r.createElement("desc",{id:q},f),!C&&k&&(L?r.createElement("style",null,"@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"):r.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }")),R)}));f.displayName="Icon",f.propTypes={path:o.string.isRequired,size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),style:o.object,inStack:o.bool,className:o.string},f.defaultProps={size:null,color:"currentColor",horizontal:!1,vertical:!1,rotate:0,spin:!1},t.default=f}])},2092:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294);function o(){return(0,r.useState)(null)}},2029:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),t}},8146:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),o=n(2029);function a(e){const t=(0,o.Z)(e);return(0,r.useCallback)((function(...e){return t.current&&t.current(...e)}),[t])}},9585:function(e,t,n){"use strict";var r=n(7294);const o=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,a="undefined"!=typeof document;t.Z=a||o?r.useLayoutEffect:r.useEffect},5654:function(e,t,n){"use strict";var r=n(7294);const o=e=>e&&"function"!=typeof e?t=>{e.current=t}:e;t.Z=function(e,t){return(0,r.useMemo)((()=>function(e,t){const n=o(e),r=o(t);return e=>{n&&n(e),r&&r(e)}}(e,t)),[e,t])}},6454:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294);function o(){const e=(0,r.useRef)(!0),t=(0,r.useRef)((()=>e.current));return(0,r.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}},1681:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),o=n(6454);function a(e){const t=function(e){const t=(0,r.useRef)(e);return t.current=e,t}(e);(0,r.useEffect)((()=>()=>t.current()),[])}const i=2**31-1;function s(e,t,n){const r=n-Date.now();e.current=r<=i?setTimeout(t,r):setTimeout((()=>s(e,t,n)),i)}function c(){const e=(0,o.Z)(),t=(0,r.useRef)();return a((()=>clearTimeout(t.current))),(0,r.useMemo)((()=>{const n=()=>clearTimeout(t.current);return{set:function(r,o=0){e()&&(n(),o<=i?t.current=setTimeout(r,o):s(t,r,Date.now()+o))},clear:n}}),[])}},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},9351:function(e,t,n){"use strict";var r=n(3004),o=!1,a=!1;try{var i={get passive(){return o=!0},get once(){return a=o=!0}};r.Z&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(s){}t.ZP=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!a){var i=r.once,s=r.capture,c=n;!a&&i&&(c=n.__once||function e(r){this.removeEventListener(t,e,s),n.call(this,r)},n.__once=c),e.addEventListener(t,c,o?r:s)}e.addEventListener(t,n,r)}},3004:function(e,t){"use strict";t.Z=!("undefined"==typeof window||!window.document||!window.document.createElement)},3299:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(9351);var o=function(e,t,n,r){var o=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};var a=function(e,t,n,a){return(0,r.ZP)(e,t,n,a),function(){o(e,t,n,a)}}},7216:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,{Z:function(){return r}})},955:function(e,t,n){"use strict";var r=n(7294),o=n(3723),a=n(3061),i=n(1e3);t.Z=e=>{let{imageData:t,isFixed:n=!1,isSmall:s=!1}=e;if(i.Y){const e=(0,o.c)(t.asset);var c;return n?r.createElement("img",{src:null==e||null===(c=e.images.fallback)||void 0===c?void 0:c.src,alt:""}):r.createElement(o.G,{image:e,alt:""})}return r.createElement("img",{src:a.Z.getImageFilePath(t,s?"/small":""),alt:""})}},310:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(7294),o=n(4593),a=n(1082);const i=e=>{let{metaTags:t}=e;const{site:n}=(0,a.useStaticQuery)("63159454"),{description:i="Best of Ionic Themes and Plugins",lang:s="en",meta:c=[],title:l="Take That Design",thumbnail:u,pageUrl:f}=t,p=i||n.siteMetadata.description,m=u?`https://www.takethatdesign.com${u}`:"https://www.takethatdesign.com/images/market/banner.png",d=f||"https://www.takethatdesign.com",v=[{name:"description",content:p},{name:"keywords",content:"prototype,template,theme,ionic,reactnative,marketplace"},{name:"author",content:n.siteMetadata.author}],h=[{property:"og:title",content:l},{property:"og:description",content:p},{property:"og:type",content:"website"},{property:"og:image",content:m},{property:"og:url",content:d},{property:"fb:app_id",content:"719535605519260"}],E=[{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:p},{name:"twitter:image",content:m}];return r.createElement(o.default,{htmlAttributes:{lang:s},bodyAttributes:{class:"has-announcement"},title:l,titleTemplate:`%s | ${n.siteMetadata.title}`,meta:[].concat(v,h,E).concat(c),link:[{rel:"canonical",key:f,href:f}]},r.createElement("script",{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js",integrity:"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",crossorigin:"anonymous"}),r.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"}),r.createElement("script",{src:"https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"}),r.createElement("script",{type:"text/javascript",src:"//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-4e72fd7107058ce5"}))};i.defaultProps={metaTags:{}};var s=i,c=n(8849),l=n.n(c),u=n(5317);var f=()=>r.createElement("span",{className:"logo"},r.createElement("span",{className:"d-bg"}),r.createElement("span",{className:"d-character"},"D"));var p=()=>r.createElement("header",{role:"banner"},r.createElement("div",{className:"top-announcement"},"Blog post: ",r.createElement("a",{href:"https://medium.com/@mrhieu/ive-published-my-first-mobile-app-and-you-should-too-b23c1cab96d7",target:"_blank",rel:"noopener noreferrer"},"I've published my first mobile app and you should, too")),r.createElement("div",{className:"header-wrapper"},r.createElement("div",{className:"container d-flex flex-row align-items-center justify-content-between"},r.createElement("div",{className:"navbar-logo d-flex flex-row align-items-center justify-content-between"},r.createElement(a.Link,{to:"/"},r.createElement(f,null)),r.createElement("div",{className:"tagline"},r.createElement(a.Link,{to:"/"},r.createElement("span",{className:"color-black font-bold"},"Take That Design")))),r.createElement("div",{className:"navbar-menu"},r.createElement("div",{className:"menu-item"},r.createElement(a.Link,{to:"/products",activeClassName:"active",partiallyActive:!0},r.createElement(l(),{className:"menu-icon",path:u.nd9}),r.createElement("span",{className:"menu-text"},"Products"))),r.createElement("div",{className:"menu-item"},r.createElement(a.Link,{to:"/100ions/",activeClassName:"active"},r.createElement("span",{className:"menu-icon-text"},"#"),r.createElement("span",{className:"menu-text"},"100ions"))),r.createElement("div",{className:"menu-item"},r.createElement(a.Link,{to:"/about/",activeClassName:"active"},r.createElement(l(),{className:"menu-icon",path:u.Dls}),r.createElement("span",{className:"menu-text"},"About")))))));var m=()=>r.createElement(r.Fragment,null,r.createElement("form",{action:"https://gumroad.com/follow_from_embed_form",className:"form gumroad-follow-form-embed",method:"post"},r.createElement("input",{name:"seller_id",type:"hidden",value:"9272340532322"}),r.createElement("input",{name:"email",placeholder:"Your email address",type:"email"}),r.createElement("button",{"data-custom-highlight-color":"",type:"submit"},"Subscribe")),r.createElement("div",{className:"form-brand"},r.createElement("span",{className:"text-muted"},"Powered by")," ",r.createElement("a",{href:"https://gumroad.com",target:"_blank",rel:"noopener noreferrer"},"Gumroad")));var d=()=>r.createElement("footer",{className:"footer-wrapper"},r.createElement("div",{className:"container"},r.createElement("div",{className:"email-form"},r.createElement("div",{className:"email-form-label"},"Join 1,250+ happy customers and developers"),r.createElement(m,null)),r.createElement("div",null,r.createElement("div",{className:"external-links"},r.createElement("a",{href:"https://www.facebook.com/takethatdesign",target:"_blank",rel:"noreferrer noopener"},r.createElement(l(),{path:u.JPJ,size:"28px",className:"icon-fb"})),r.createElement("a",{href:"https://twitter.com/takethatdesign",target:"_blank",rel:"noreferrer noopener"},r.createElement(l(),{path:u.SGh,size:"28px",className:"icon-twitter"})),r.createElement("a",{href:"https://market.ionicframework.com/user/66136",target:"_blank",rel:"noreferrer noopener"},r.createElement(l(),{path:u.U8s,size:"28px",className:"icon-market"}))),r.createElement("div",{className:"page-seal"},r.createElement("div",{className:"text-center text-muted"},"┐( ˘_˘ )┌"),r.createElement("div",{className:"text-center text-xxs text-muted"},(new Date).getFullYear(),", by ",r.createElement("a",{href:"https://hieugoesto.com",className:"font-bold text-dark"},"Hieu Pham"))))));var v=e=>{let{children:t,metaTags:n,location:o}=e;return r.createElement("div",{className:"layout-container"},r.createElement(s,{metaTags:n}),r.createElement(p,{location:o}),r.createElement("main",{className:"page-content","aria-label":"Content"},r.createElement("div",{className:"container padder-v"},t)),r.createElement(d,null))}},6792:function(e,t,n){"use strict";n.d(t,{SC:function(){return l},vE:function(){return c}});var r=n(7294);n(5893);const o=["xxl","xl","lg","md","sm","xs"],a=r.createContext({prefixes:{},breakpoints:o,minBreakpoint:"xs"}),{Consumer:i,Provider:s}=a;function c(e,t){const{prefixes:n}=(0,r.useContext)(a);return e||n[t]||t}function l(){const{dir:e}=(0,r.useContext)(a);return"rtl"===e}},9337:function(e,t,n){"use strict";var r=n(7294),o=n(7762),a=n(5654),i=n(8285),s=n(5893);const c=r.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:c,onExiting:l,onExited:u,addEndListener:f,children:p,childRef:m,...d},v)=>{const h=(0,r.useRef)(null),E=(0,a.Z)(h,m),b=e=>{E((0,i.Z)(e))},y=e=>t=>{e&&h.current&&e(h.current,t)},g=(0,r.useCallback)(y(e),[e]),x=(0,r.useCallback)(y(t),[t]),w=(0,r.useCallback)(y(n),[n]),k=(0,r.useCallback)(y(c),[c]),O=(0,r.useCallback)(y(l),[l]),N=(0,r.useCallback)(y(u),[u]),S=(0,r.useCallback)(y(f),[f]);return(0,s.jsx)(o.ZP,{ref:v,...d,onEnter:g,onEntered:w,onEntering:x,onExit:k,onExited:N,onExiting:O,addEndListener:S,nodeRef:h,children:"function"==typeof p?(e,t)=>p(e,{...t,ref:b}):r.cloneElement(p,{ref:b})})}));t.Z=c},8285:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(3935);function o(e){return e&&"setState"in e?r.findDOMNode(e):null!=e?e:null}},7580:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7216);function o(e,t){return function(e){var t=(0,r.Z)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var a=/([A-Z])/g;var i=/^ms-/;function s(e){return function(e){return e.replace(a,"-$1").toLowerCase()}(e).replace(i,"-ms-")}var c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var l=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(s(t))||o(e).getPropertyValue(s(t));Object.keys(t).forEach((function(o){var a=t[o];a||0===a?!function(e){return!(!e||!c.test(e))}(o)?n+=s(o)+": "+a+";":r+=o+"("+a+") ":e.style.removeProperty(s(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},u=n(3299);function f(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),a=(0,u.Z)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),a()}}function p(e,t,n,r){var o,a;null==n&&(o=l(e,"transitionDuration")||"",a=-1===o.indexOf("ms")?1e3:1,n=parseFloat(o)*a||0);var i=f(e,n,r),s=(0,u.Z)(e,"transitionend",t);return function(){i(),s()}}function m(e,t){const n=l(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function d(e,t){const n=m(e,"transitionDuration"),r=m(e,"transitionDelay"),o=p(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}},4509:function(e,t,n){"use strict";function r(e){e.offsetHeight}n.d(t,{Z:function(){return r}})},7762:function(e,t,n){"use strict";n.d(t,{cn:function(){return p},d0:function(){return f},ZP:function(){return h}});var r=n(3366),o=n(1721),a=n(7294),i=n(3935),s=!1,c=a.createContext(null),l="unmounted",u="exited",f="entering",p="entered",m="exiting",d=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o=u,r.appearStatus=f):o=p:o=t.unmountOnExit||t.mountOnEnter?l:u,r.state={status:o},r.nextCallback=null,r}(0,o.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:u}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==p&&(t=f):n!==f&&n!==p||(t=m)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:i.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===u&&this.setState({status:l})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[i.findDOMNode(this),r],a=o[0],c=o[1],l=this.getTimeouts(),u=r?l.appear:l.enter;!e&&!n||s?this.safeSetState({status:p},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,c),this.safeSetState({status:f},(function(){t.props.onEntering(a,c),t.onTransitionEnd(u,(function(){t.safeSetState({status:p},(function(){t.props.onEntered(a,c)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:i.findDOMNode(this);t&&!s?(this.props.onExit(r),this.safeSetState({status:m},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:u},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:u},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:i.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=o[0],s=o[1];this.props.addEndListener(a,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,r.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(c.Provider,{value:null},"function"==typeof n?n(e,o):a.cloneElement(a.Children.only(n),o))},t}(a.Component);function v(){}d.contextType=c,d.propTypes={},d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:v,onEntering:v,onEntered:v,onExit:v,onExiting:v,onExited:v},d.UNMOUNTED=l,d.EXITED=u,d.ENTERING=f,d.ENTERED=p,d.EXITING=m;var h=d},2081:function(e,t,n){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Ch:function(){return l},$c:function(){return c}});var o=n(3366),a=n(7294);n(1143);function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function s(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function c(e,t,n){var r=(0,a.useRef)(void 0!==e),o=(0,a.useState)(t),i=o[0],s=o[1],c=void 0!==e,l=r.current;return r.current=c,!c&&l&&i!==t&&s(t),[c?e:i,(0,a.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}function l(e,t){return Object.keys(t).reduce((function(n,a){var l,u=n,f=u[i(a)],p=u[a],m=(0,o.Z)(u,[i(a),a].map(s)),d=t[a],v=c(p,f,e[d]),h=v[0],E=v[1];return r({},m,((l={})[a]=h,l[d]=E,l))}),e)}n(9712)},3366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=270ad5b8191ffb0cc6f002e286e9508a3dd82bec-776a09a3466491df6341.js.map