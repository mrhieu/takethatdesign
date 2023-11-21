"use strict";(self.webpackChunktake_that_design=self.webpackChunktake_that_design||[]).push([[691],{5111:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(8146);function r(e,t,a,r=!1){const s=(0,l.Z)(a);(0,n.useEffect)((()=>{const a="function"==typeof e?e():e;return a.addEventListener(t,s,r),()=>a.removeEventListener(t,s,r)}),[e])}},8833:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){const t=(0,n.useRef)(null);return(0,n.useEffect)((()=>{t.current=e})),t.current}},3735:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=(a(2092),a(2029),a(8146));a(5111);a(6454),a(8833);a(9585);new WeakMap;var r=a(861),s=a(5893);const c=["onKeyDown"];const i=n.forwardRef(((e,t)=>{let{onKeyDown:a}=e,n=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,c);const[i]=(0,r.FT)(Object.assign({tagName:"a"},n)),o=(0,l.Z)((e=>{i.onKeyDown(e),null==a||a(e)}));return(u=n.href)&&"#"!==u.trim()&&"button"!==n.role?(0,s.jsx)("a",Object.assign({ref:t},n,{onKeyDown:a})):(0,s.jsx)("a",Object.assign({ref:t},n,i,{onKeyDown:o}));var u}));i.displayName="Anchor";var o=i},861:function(e,t,a){a.d(t,{FT:function(){return s}});var n=a(7294),l=a(5893);const r=["as","disabled"];function s({tagName:e,disabled:t,href:a,target:n,rel:l,role:r,onClick:s,tabIndex:c=0,type:i}){e||(e=null!=a||null!=n||null!=l?"a":"button");const o={tagName:e};if("button"===e)return[{type:i||"button",disabled:t},o];const u=n=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(a))&&n.preventDefault(),t?n.stopPropagation():null==s||s(n)};return"a"===e&&(a||(a="#"),t&&(a=void 0)),[{role:null!=r?r:"button",disabled:void 0,tabIndex:t?void 0:c,href:a,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?l:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},o]}const c=n.forwardRef(((e,t)=>{let{as:a,disabled:n}=e,c=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,r);const[i,{tagName:o}]=s(Object.assign({tagName:a,disabled:n},c));return(0,l.jsx)(o,Object.assign({},c,i,{ref:t}))}));c.displayName="Button",t.ZP=c},5665:function(e,t,a){a.r(t),a.d(t,{default:function(){return O}});var n=a(7294),l=a(1082),r=a(8849),s=a.n(r),c=a(5317),i=a(310),o=a(8146);var u=function(e,t){const a=(0,n.useRef)(!0);(0,n.useEffect)((()=>{if(!a.current)return e();a.current=!1}),t)},d=a(2029),m=a(1681),f=a(3735),v=a(4184),p=a.n(v),E=a(2081),N=a(6792),h=a(5893);const g=n.forwardRef((({className:e,bsPrefix:t,as:a="div",...n},l)=>(t=(0,N.vE)(t,"carousel-caption"),(0,h.jsx)(a,{ref:l,className:p()(e,t),...n}))));g.displayName="CarouselCaption";var b=g;const x=n.forwardRef((({as:e="div",bsPrefix:t,className:a,...n},l)=>{const r=p()(a,(0,N.vE)(t,"carousel-item"));return(0,h.jsx)(e,{ref:l,...n,className:r})}));x.displayName="CarouselItem";var y=x;function k(e,t){let a=0;return n.Children.map(e,(e=>n.isValidElement(e)?t(e,a++):e))}var w=a(7580),C=a(4509),j=a(9337);const I=n.forwardRef((({defaultActiveIndex:e=0,...t},a)=>{const{as:l="div",bsPrefix:r,slide:s=!0,fade:c=!1,controls:i=!0,indicators:v=!0,indicatorLabels:g=[],activeIndex:b,onSelect:x,onSlide:y,onSlid:I,interval:T=5e3,keyboard:D=!0,onKeyDown:Z,pause:S="hover",onMouseOver:P,onMouseOut:O,wrap:L=!0,touch:R=!0,onTouchStart:$,onTouchMove:M,onTouchEnd:_,prevIcon:A=(0,h.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:K="Previous",nextIcon:z=(0,h.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:U="Next",variant:V,className:G,children:F,...q}=(0,E.Ch)({defaultActiveIndex:e,...t},{activeIndex:"onSelect"}),H=(0,N.vE)(r,"carousel"),W=(0,N.SC)(),X=(0,n.useRef)(null),[B,Q]=(0,n.useState)("next"),[J,Y]=(0,n.useState)(!1),[ee,te]=(0,n.useState)(!1),[ae,ne]=(0,n.useState)(b||0);(0,n.useEffect)((()=>{ee||b===ae||(X.current?Q(X.current):Q((b||0)>ae?"next":"prev"),s&&te(!0),ne(b||0))}),[b,ee,ae,s]),(0,n.useEffect)((()=>{X.current&&(X.current=null)}));let le,re=0;!function(e,t){let a=0;n.Children.forEach(e,(e=>{n.isValidElement(e)&&t(e,a++)}))}(F,((e,t)=>{++re,t===b&&(le=e.props.interval)}));const se=(0,d.Z)(le),ce=(0,n.useCallback)((e=>{if(ee)return;let t=ae-1;if(t<0){if(!L)return;t=re-1}X.current="prev",null==x||x(t,e)}),[ee,ae,x,L,re]),ie=(0,o.Z)((e=>{if(ee)return;let t=ae+1;if(t>=re){if(!L)return;t=0}X.current="next",null==x||x(t,e)})),oe=(0,n.useRef)();(0,n.useImperativeHandle)(a,(()=>({element:oe.current,prev:ce,next:ie})));const ue=(0,o.Z)((()=>{!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;const t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(oe.current)&&(W?ce():ie())})),de="next"===B?"start":"end";u((()=>{s||(null==y||y(ae,de),null==I||I(ae,de))}),[ae]);const me=`${H}-item-${B}`,fe=`${H}-item-${de}`,ve=(0,n.useCallback)((e=>{(0,C.Z)(e),null==y||y(ae,de)}),[y,ae,de]),pe=(0,n.useCallback)((()=>{te(!1),null==I||I(ae,de)}),[I,ae,de]),Ee=(0,n.useCallback)((e=>{if(D&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(W?ie(e):ce(e));case"ArrowRight":return e.preventDefault(),void(W?ce(e):ie(e))}null==Z||Z(e)}),[D,Z,ce,ie,W]),Ne=(0,n.useCallback)((e=>{"hover"===S&&Y(!0),null==P||P(e)}),[S,P]),he=(0,n.useCallback)((e=>{Y(!1),null==O||O(e)}),[O]),ge=(0,n.useRef)(0),be=(0,n.useRef)(0),xe=(0,m.Z)(),ye=(0,n.useCallback)((e=>{ge.current=e.touches[0].clientX,be.current=0,"hover"===S&&Y(!0),null==$||$(e)}),[S,$]),ke=(0,n.useCallback)((e=>{e.touches&&e.touches.length>1?be.current=0:be.current=e.touches[0].clientX-ge.current,null==M||M(e)}),[M]),we=(0,n.useCallback)((e=>{if(R){const t=be.current;Math.abs(t)>40&&(t>0?ce(e):ie(e))}"hover"===S&&xe.set((()=>{Y(!1)}),T||void 0),null==_||_(e)}),[R,S,ce,ie,xe,T,_]),Ce=null!=T&&!J&&!ee,je=(0,n.useRef)();(0,n.useEffect)((()=>{var e,t;if(!Ce)return;const a=W?ce:ie;return je.current=window.setInterval(document.visibilityState?ue:a,null!=(e=null!=(t=se.current)?t:T)?e:void 0),()=>{null!==je.current&&clearInterval(je.current)}}),[Ce,ce,ie,se,T,ue,W]);const Ie=(0,n.useMemo)((()=>v&&Array.from({length:re},((e,t)=>e=>{null==x||x(t,e)}))),[v,re,x]);return(0,h.jsxs)(l,{ref:oe,...q,onKeyDown:Ee,onMouseOver:Ne,onMouseOut:he,onTouchStart:ye,onTouchMove:ke,onTouchEnd:we,className:p()(G,H,s&&"slide",c&&`${H}-fade`,V&&`${H}-${V}`),children:[v&&(0,h.jsx)("div",{className:`${H}-indicators`,children:k(F,((e,t)=>(0,h.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=g&&g.length?g[t]:`Slide ${t+1}`,className:t===ae?"active":void 0,onClick:Ie?Ie[t]:void 0,"aria-current":t===ae},t)))}),(0,h.jsx)("div",{className:`${H}-inner`,children:k(F,((e,t)=>{const a=t===ae;return s?(0,h.jsx)(j.Z,{in:a,onEnter:a?ve:void 0,onEntered:a?pe:void 0,addEndListener:w.Z,children:(t,l)=>n.cloneElement(e,{...l,className:p()(e.props.className,a&&"entered"!==t&&me,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&fe)})}):n.cloneElement(e,{className:p()(e.props.className,a&&"active")})}))}),i&&(0,h.jsxs)(h.Fragment,{children:[(L||0!==b)&&(0,h.jsxs)(f.Z,{className:`${H}-control-prev`,onClick:ce,children:[A,K&&(0,h.jsx)("span",{className:"visually-hidden",children:K})]}),(L||b!==re-1)&&(0,h.jsxs)(f.Z,{className:`${H}-control-next`,onClick:ie,children:[z,U&&(0,h.jsx)("span",{className:"visually-hidden",children:U})]})]})]})}));I.displayName="Carousel";var T=Object.assign(I,{Caption:b,Item:y});var D=()=>n.createElement(T,{className:"hero-slide",controls:!1,interval:8e3},n.createElement(T.Item,null,n.createElement("div",{className:"slide-item slide-twelve"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-7"},n.createElement("div",{className:"slide-description"},n.createElement("div",null,n.createElement("div",{className:"slide-title"},"Twelve O'clock App"),n.createElement("div",{className:"slide-subtitle"},"I've published an app for mechanical watch lovers (like myself!) using Ionic React 5."),n.createElement(l.Link,{to:"/twelveappofficial",className:"slide-cta"},"Try it"),n.createElement("p",{className:"text-xs mt-2"},"It's a free app with in-app purchase features")))),n.createElement("div",{className:"col-md-5"},n.createElement("div",{className:"slide-images"},n.createElement("img",{src:"/images/Group_12_Pro_Max.png",alt:"",className:"image-item"}),n.createElement("img",{src:"/images/Group_8_Plus.png",alt:"",className:"image-item"}),n.createElement("img",{src:"/images/Group_Pixel_4.png",alt:"",className:"image-item"})))))),n.createElement(T.Item,null,n.createElement("div",{className:"slide-item slide-latest"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-7"},n.createElement("div",{className:"slide-description"},n.createElement("div",null,n.createElement("div",{className:"slide-title"},"Tinder Ionic Vue"),n.createElement("div",{className:"slide-subtitle"},"Tinder UI is ",n.createElement("strong",null,"finally")," available in Ionic Vue (Vue 3, Ionic 5)"),n.createElement(l.Link,{to:"/theme/tinder-vue-5/",className:"slide-cta"},"Take a look")))),n.createElement("div",{className:"col-md-5"},n.createElement("div",{className:"slide-images"},n.createElement("img",{src:"https://cdn.sanity.io/images/o607ve1z/leafdb/69e9f77a530a23933f44af0a435ff9065694281e-828x1792.png?w=600&h=1299&fit=crop",alt:"",className:"image-item"}),n.createElement("img",{src:"https://cdn.sanity.io/images/o607ve1z/leafdb/702f933c560210df77808d7e3f1003553c2beb68-828x1792.png?w=600&h=1299&fit=crop",alt:"",className:"image-item"}),n.createElement("img",{src:"https://cdn.sanity.io/images/o607ve1z/leafdb/098d367392c2673d38f6f514565e0b1399b4a2f6-828x1792.png?w=600&h=1299&fit=crop",alt:"",className:"image-item"}))))))),Z=a(955),S=a(3061);var P=e=>{let{listData:t}=e;const a=t.splice(0,6);return n.createElement("div",{className:"featured-products"},n.createElement("div",{className:"row"},a.map((e=>n.createElement("div",{className:"product-item col-xl-2 col-lg-3 col-md-4 col-6",key:e.id},n.createElement("div",{className:"item-icon"},n.createElement(l.Link,{to:`/${S.Z.getProductUrl(e)}`},n.createElement(Z.Z,{imageData:e.productImage.icon})),(e=>(new Date).getTime()-new Date(e.createdAt).getTime()<2592e6)(e)&&n.createElement("div",{className:"label-new"},"NEW")),n.createElement("div",{className:"item-title text-ellipsis"},n.createElement(l.Link,{to:`/${S.Z.getProductUrl(e)}`},e.title),n.createElement("div",{className:"item-short-description text-muted text-ellipsis"},e.shortDescription)))))))};var O=e=>{let{location:t}=e;const a=(0,l.useStaticQuery)("3215699906"),{edges:r}=a.allSanityProduct,o=r.filter((e=>{let{node:t}=e;return"THEME"===t.category.title.toUpperCase()})).map((e=>e.node)),u=r.filter((e=>{let{node:t}=e;return"PLUGIN"===t.category.title.toUpperCase()})).map((e=>e.node));return n.createElement(i.Z,{metaTags:{pageUrl:t.href}},n.createElement("div",{className:"hero-slide-wrapper"},n.createElement(D,null)),n.createElement("div",{className:"featured-products-wrapper"},n.createElement("div",{className:"featured-header"},n.createElement("div",{className:"feature-title"},"Themes"),n.createElement(l.Link,{to:"/products?q=Theme",className:"link-more"},"All Themes",n.createElement(s(),{path:c.zrb,color:"#007bff",size:"20px"}))),n.createElement(P,{listData:o})),n.createElement("div",{className:"featured-products-wrapper"},n.createElement("div",{className:"featured-header"},n.createElement("div",{className:"feature-title"},"Plugins"),n.createElement(l.Link,{to:"/products?q=Plugin",className:"link-more"},"All Plugins",n.createElement(s(),{path:c.zrb,color:"#007bff",size:"20px"}))),n.createElement(P,{listData:u})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-19e31f77deeba04a9d21.js.map