(self.webpackChunktake_that_design=self.webpackChunktake_that_design||[]).push([[542],{6795:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=n(5697)},function(e,t){e.exports=n(7294)},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=0,i=r.forwardRef((function(e,t){var n=e.title,a=void 0===n?null:n,i=e.description,c=void 0===i?null:i,s=e.size,p=void 0===s?null:s,m=e.color,u=void 0===m?"currentColor":m,d=e.horizontal,f=void 0===d?null:d,h=e.vertical,y=void 0===h?null:h,v=e.rotate,g=void 0===v?null:v,b=e.spin,w=void 0===b?null:b,E=e.style,O=void 0===E?{}:E,k=e.children,x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);l++;var N,z=null!==w&&w,j=r.Children.map(k,(function(e){var t=e;!0!==z&&(z=!0===(null===w?t.props.spin:w));var n=t.props.size;"number"==typeof p&&"number"==typeof t.props.size&&(n=t.props.size/p);var a={size:n,color:null===u?t.props.color:u,horizontal:null===f?t.props.horizontal:f,vertical:null===y?t.props.vertical:y,rotate:null===g?t.props.rotate:g,spin:null===w?t.props.spin:w,inStack:!0};return r.cloneElement(t,a)}));null!==p&&(O.width="string"==typeof p?p:1.5*p+"rem");var T,S="stack_labelledby_"+l,_="stack_describedby_"+l;if(a)N=c?S+" "+_:S;else if(T="presentation",c)throw new Error("title attribute required when description is set");return r.createElement("svg",o({ref:t,viewBox:"0 0 24 24",style:O,role:T,"aria-labelledby":N},x),a&&r.createElement("title",{id:S},a),c&&r.createElement("desc",{id:_},c),z&&r.createElement("style",null,"@keyframes spin { to { transform: rotate(360deg) } }","@keyframes spin-inverse { to { transform: rotate(-360deg) } }"),j)}));i.displayName="Stack",i.propTypes={size:a.oneOfType([a.number,a.string]),color:a.string,horizontal:a.bool,vertical:a.bool,rotate:a.number,spin:a.oneOfType([a.bool,a.number]),children:a.oneOfType([a.arrayOf(a.node),a.node]).isRequired,className:a.string,style:a.object},i.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null};var c=i;n.d(t,"Icon",(function(){return m})),n.d(t,"Stack",(function(){return c}));var s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},p=0,m=r.forwardRef((function(e,t){var n=e.path,a=e.id,o=void 0===a?++p:a,l=e.title,i=void 0===l?null:l,c=e.description,m=void 0===c?null:c,u=e.size,d=void 0===u?null:u,f=e.color,h=void 0===f?"currentColor":f,y=e.horizontal,v=void 0!==y&&y,g=e.vertical,b=void 0!==g&&g,w=e.rotate,E=void 0===w?0:w,O=e.spin,k=void 0!==O&&O,x=e.style,N=void 0===x?{}:x,z=e.inStack,j=void 0!==z&&z,T=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["path","id","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]),S={},_=[];null!==d&&(j?_.push("scale("+d+")"):(N.width="string"==typeof d?d:1.5*d+"rem",N.height=N.width)),v&&_.push("scaleX(-1)"),b&&_.push("scaleY(-1)"),0!==E&&_.push("rotate("+E+"deg)"),null!==h&&(S.fill=h);var P=r.createElement("path",s({d:n,style:S},j?T:{})),C=P;_.length>0&&(N.transform=_.join(" "),N.transformOrigin="center",j&&(C=r.createElement("g",{style:N},P,r.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var V,A=C,I=!0===k||"number"!=typeof k?2:k,R=!j&&(v||b);if(I<0&&(R=!R),k&&(A=r.createElement("g",{style:{animation:"spin"+(R?"-inverse":"")+" linear "+Math.abs(I)+"s infinite",transformOrigin:"center"}},C,!(v||b||0!==E)&&r.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),j)return A;var B,M="icon_labelledby_"+o,q="icon_describedby_"+o;if(i)V=m?M+" "+q:M;else if(B="presentation",m)throw new Error("title attribute required when description is set");return r.createElement("svg",s({ref:t,viewBox:"0 0 24 24",style:N,role:B,"aria-labelledby":V},T),i&&r.createElement("title",{id:M},i),m&&r.createElement("desc",{id:q},m),!j&&k&&(R?r.createElement("style",null,"@keyframes spin-inverse { to { transform: rotate(-360deg) } }"):r.createElement("style",null,"@keyframes spin { to { transform: rotate(360deg) } }")),A)}));m.displayName="Icon",m.propTypes={path:a.string.isRequired,size:a.oneOfType([a.number,a.string]),color:a.string,horizontal:a.bool,vertical:a.bool,rotate:a.number,spin:a.oneOfType([a.bool,a.number]),style:a.object,inStack:a.bool,className:a.string},m.defaultProps={size:null,color:"currentColor",horizontal:!1,vertical:!1,rotate:0,spin:!1},t.default=m}])},2749:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(5414),o=function(e){var t=e.metaTags,n=t.description,o=void 0===n?"Track your watch accuracy":n,l=t.lang,i=void 0===l?"en":l,c=t.meta,s=void 0===c?[]:c,p=t.title,m=void 0===p?"Twelve O'clock App":p,u=t.thumbnail,d=void 0===u?"/images/twelve/thumbnail.png":u,f=t.pageUrl,h=o||"Track your watch accuracy",y=d?"https://www.takethatdesign.com"+d:"https://www.takethatdesign.com/images/twelve/thumbnail.png",v=[{name:"description",content:h},{name:"keywords",content:"watch,accuracy,mechanical,automatic,horology,timegrapher"},{name:"author",content:"Hieu Pham"}],g=[{property:"og:title",content:m},{property:"og:description",content:h},{property:"og:type",content:"website"},{property:"og:image",content:y},{property:"og:url",content:f||"https://www.takethatdesign.com/twelveappofficial"},{property:"fb:app_id",content:"719535605519260"}],b=[{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"Hieu Pham"},{name:"twitter:title",content:m},{name:"twitter:description",content:h},{name:"twitter:image",content:y}];return r.createElement(a.default,{htmlAttributes:{lang:i},title:m,titleTemplate:"%s | Twelve O'clock App",meta:[].concat(v,g,b).concat(s),link:[{rel:"canonical",key:f,href:f}]})};o.defaultProps={metaTags:{}};var l=o,i=n(1597),c=function(e){e.location;return r.createElement("header",{role:"banner"},r.createElement("div",{className:"header-wrapper app-landing"},r.createElement("div",{className:"container d-flex flex-row align-items-center justify-content-between"},r.createElement("div",{className:"navbar-logo d-flex flex-row align-items-center justify-content-between"},r.createElement(i.Link,{to:"/twelveappofficial"},r.createElement("img",{src:"/images/twelve/icon.png",className:"landing-logo",alt:""})),r.createElement("div",{className:"tagline"},r.createElement(i.Link,{to:"/"},r.createElement("span",{className:"color-black font-bold"},"Twelve O'clock App")))))))},s=function(e){var t=e.children,n=e.metaTags,a=e.location;return(0,r.useEffect)((function(){window.FB&&window.FB.CustomerChat.hide()}),[]),r.createElement("div",{className:"layout-container"},r.createElement(l,{metaTags:n}),r.createElement(c,{location:a}),r.createElement("main",{className:"page-content","aria-label":"Content"},r.createElement("div",{className:"container padder-v"},t)))}},2741:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(6795),o=n.n(a),l=n(474),i=n(2749),c={thumbnail:{width:"90%",maxWidth:600}},s=[{title:"Best watch tracking app on iOS",metadata:"by wilf1803 – Oct 12, 2021 · Singapore · Version 1.4.0",rating:5,body:"Intuitive and simple to use. Very pleasant UI..."},{title:"Excellent app, worth your time!",metadata:"Kinnebrew – Sep 22, 2021 · United States · Version 1.3.0",rating:5,body:"How does this app only have 2 reviews?!? I tried the “other” watch timing app (which will remain unnamed, but is the top result in most searches for this type of app), and it was complete garbage. The Twelve O’Clock app does exactly what it says it will do and is super easy to use. No complaints at all. Very happy that I found this to time and track my mechanical watches."},{title:"A bit complicated",metadata:"by rich.v – Sep 24, 2021 · United States · Version 1.3.0",rating:4,body:"A bit complicated until you understand how to use it properly then everything seems to fall in place..."}];t.default=function(e){var t=e.location;return r.createElement(i.Z,{metaTags:{title:"Homepage"},location:t},r.createElement("div",{className:"row"},r.createElement("section",{className:"col-lg-8 offset-lg-2 text-center"},r.createElement("div",{className:"post-content"},r.createElement("h2",{id:"why"},"Welcome to ",r.createElement("br",null)," Twelve O'clock App"),r.createElement("p",{className:"post-body-text"},"The easiest way to track your watch accuracy. ",r.createElement("strong",null,"No devices needed.")),r.createElement("div",{className:"m-b text-center"},r.createElement("a",{href:"https://apps.apple.com/app/twelve-oclock/id1570977980",className:"m-r-sm"},r.createElement("img",{src:"/images/download_appstore.png",height:"48",alt:""})),r.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.takethatdesign.twelveappofficial"},r.createElement("img",{src:"/images/download_android.png",height:"48",alt:""}))),r.createElement("img",{src:"/images/twelve/thumbnail.png",style:c.thumbnail,alt:""}))),r.createElement("section",{className:"col-lg-8 offset-lg-2 text-center"},r.createElement("h4",null,"Ratings and Reviews"),r.createElement("p",{className:"text-sm"},"From App Store and Google Play around the world"),r.createElement("div",{className:"review-list"},s.map((function(e){return r.createElement("div",{className:"review-item",key:e.title},r.createElement("div",{className:"review-item-title"},e.title,r.createElement("div",{className:"rating"},r.createElement(o(),{path:l.Vip,color:"#ff9500",size:"16px"}),r.createElement(o(),{path:l.Vip,color:"#ff9500",size:"16px"}),r.createElement(o(),{path:l.Vip,color:"#ff9500",size:"16px"}),r.createElement(o(),{path:l.Vip,color:"#ff9500",size:"16px"}),r.createElement(o(),{path:5===e.rating?l.Vip:l.KCi,color:"#ff9500",size:"16px"}))),r.createElement("div",{className:"review-item-metadata text-muted"},e.metadata),r.createElement("div",{className:"review-item-body text-sm"},e.body))}))))))}}}]);
//# sourceMappingURL=component---src-pages-twelveappofficial-index-tsx-c3910c3f0d5d7ae92c1b.js.map