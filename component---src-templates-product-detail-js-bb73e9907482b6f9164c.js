(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{CVNw:function(e,t,r){r("bWfx"),r("V+eJ"),r("91GP"),r("2Spj"),r("hHhE"),r("rE2o"),r("ioFf"),r("HAE/"),e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=r("17x9")},function(e,t){e.exports=r("q1tI")},function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(0),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=0,u=n.forwardRef((function(e,t){var r=e.title,a=void 0===r?null:r,u=e.description,s=void 0===u?null:u,c=e.size,l=void 0===c?null:c,d=e.color,f=void 0===d?"currentColor":d,m=e.horizontal,h=void 0===m?null:m,g=e.vertical,b=void 0===g?null:g,p=e.rotate,v=void 0===p?null:p,w=e.spin,y=void 0===w?null:w,T=e.style,O=void 0===T?{}:T,M=e.children,C=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);o++;var x,N=null!==y&&y,k=n.Children.map(M,(function(e){var t=e;!0!==N&&(N=!0===(null===y?t.props.spin:y));var r=t.props.size;"number"==typeof l&&"number"==typeof t.props.size&&(r=t.props.size/l);var a={size:r,color:null===f?t.props.color:f,horizontal:null===h?t.props.horizontal:h,vertical:null===b?t.props.vertical:b,rotate:null===v?t.props.rotate:v,spin:null===y?t.props.spin:y,inStack:!0};return n.cloneElement(t,a)}));null!==l&&(O.width="string"==typeof l?l:1.5*l+"rem");var P,j="stack_labelledby_"+o,S="stack_describedby_"+o;if(a)x=s?j+" "+S:j;else if(P="presentation",s)throw new Error("title attribute required when description is set");return n.createElement("svg",i({ref:t,viewBox:"0 0 24 24",style:O,role:P,"aria-labelledby":x},C),a&&n.createElement("title",{id:j},a),s&&n.createElement("desc",{id:S},s),N&&n.createElement("style",null,"@keyframes spin { to { transform: rotate(360deg) } }","@keyframes spin-inverse { to { transform: rotate(-360deg) } }"),k)}));u.displayName="Stack",u.propTypes={size:a.oneOfType([a.number,a.string]),color:a.string,horizontal:a.bool,vertical:a.bool,rotate:a.number,spin:a.oneOfType([a.bool,a.number]),children:a.oneOfType([a.arrayOf(a.node),a.node]).isRequired,className:a.string,style:a.object},u.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null};var s=u;r.d(t,"Icon",(function(){return d})),r.d(t,"Stack",(function(){return s}));var c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=0,d=n.forwardRef((function(e,t){var r=e.path,a=e.title,i=void 0===a?null:a,o=e.description,u=void 0===o?null:o,s=e.size,d=void 0===s?null:s,f=e.color,m=void 0===f?"currentColor":f,h=e.horizontal,g=void 0!==h&&h,b=e.vertical,p=void 0!==b&&b,v=e.rotate,w=void 0===v?0:v,y=e.spin,T=void 0!==y&&y,O=e.style,M=void 0===O?{}:O,C=e.inStack,x=void 0!==C&&C,N=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["path","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]);l++;var k={},P=[];null!==d&&(x?P.push("scale("+d+")"):(M.width="string"==typeof d?d:1.5*d+"rem",M.height=M.width)),g&&P.push("scaleX(-1)"),p&&P.push("scaleY(-1)"),0!==w&&P.push("rotate("+w+"deg)"),null!==m&&(k.fill=m);var j=n.createElement("path",c({d:r,style:k},x?N:{})),S=j;P.length>0&&(M.transform=P.join(" "),M.transformOrigin="center",x&&(S=n.createElement("g",{style:M},j,n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var E,U=S,D=!0===T||"number"!=typeof T?2:T,z=!x&&(g||p);if(D<0&&(z=!z),T&&(U=n.createElement("g",{style:{animation:"spin"+(z?"-inverse":"")+" linear "+Math.abs(D)+"s infinite",transformOrigin:"center"}},S,!(g||p||0!==w)&&n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),x)return U;var W,Y="icon_labelledby_"+l,q="icon_describedby_"+l;if(i)E=u?Y+" "+q:Y;else if(W="presentation",u)throw new Error("title attribute required when description is set");return n.createElement("svg",c({ref:t,viewBox:"0 0 24 24",style:M,role:W,"aria-labelledby":E},N),i&&n.createElement("title",{id:Y},i),u&&n.createElement("desc",{id:q},u),!x&&T&&(z?n.createElement("style",null,"@keyframes spin-inverse { to { transform: rotate(-360deg) } }"):n.createElement("style",null,"@keyframes spin { to { transform: rotate(360deg) } }")),U)}));d.displayName="Icon",d.propTypes={path:a.string.isRequired,size:a.oneOfType([a.number,a.string]),color:a.string,horizontal:a.bool,vertical:a.bool,rotate:a.number,spin:a.oneOfType([a.bool,a.number]),style:a.object,inStack:a.bool,className:a.string},d.defaultProps={size:null,color:null,horizontal:!1,vertical:!1,rotate:0,spin:!1},t.default=d}])},uHri:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),i=r("Wbzz");r("pIFo"),r("SRfc"),r("bWfx"),r("a1Th"),r("h7Nl"),r("Btvt");function o(e,t){if(t.length<e)throw new TypeError(e+" argument"+e>1?"s":" required, but only "+t.length+" present")}function u(e){o(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function s(e){o(1,arguments);var t=u(e);return!isNaN(t)}var c={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function l(e){return function(t){var r=t||{},n=r.width?String(r.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var d={date:l({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:l({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:l({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},f={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};r("xfY5"),r("rGqo"),r("yt8O");function m(e){return function(t,r){var n,a=r||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;n=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;n=e.values[s]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}}function h(e){return function(t,r){var n=String(t),a=r||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=n.match(o);if(!u)return null;var s,c=u[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(l)?function(e,t){for(var r=0;r<e.length;r++)if(t(e[r]))return r}(l,(function(e){return e.test(n)})):function(e,t){for(var r in e)if(e.hasOwnProperty(r)&&t(e[r]))return r}(l,(function(e){return e.test(n)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(c.length)}}}var g,b={code:"en-US",formatDistance:function(e,t,r){var n;return r=r||{},n="string"==typeof c[e]?c[e]:1===t?c[e].one:c[e].other.replace("{{count}}",t),r.addSuffix?r.comparison>0?"in "+n:n+" ago":n},formatLong:d,formatRelative:function(e,t,r,n){return f[e]},localize:{ordinalNumber:function(e,t){var r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},era:m({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:m({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:m({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:m({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:m({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(g={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var r=String(e),n=t||{},a=r.match(g.matchPattern);if(!a)return null;var i=a[0],o=r.match(g.parsePattern);if(!o)return null;var u=g.valueCallback?g.valueCallback(o[0]):o[0];return{value:u=n.valueCallback?n.valueCallback(u):u,rest:r.slice(i.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function p(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function v(e,t){o(2,arguments);var r=u(e).getTime(),n=p(t);return new Date(r+n)}function w(e,t){o(2,arguments);var r=p(t);return v(e,-r)}function y(e,t){for(var r=e<0?"-":"",n=Math.abs(e).toString();n.length<t;)n="0"+n;return r+n}var T={y:function(e,t){var r=e.getUTCFullYear(),n=r>0?r:1-r;return y("yy"===t?n%100:n,t.length)},M:function(e,t){var r=e.getUTCMonth();return"M"===t?String(r+1):y(r+1,2)},d:function(e,t){return y(e.getUTCDate(),t.length)},a:function(e,t){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return r.toUpperCase();case"aaaaa":return r[0];case"aaaa":default:return"am"===r?"a.m.":"p.m."}},h:function(e,t){return y(e.getUTCHours()%12||12,t.length)},H:function(e,t){return y(e.getUTCHours(),t.length)},m:function(e,t){return y(e.getUTCMinutes(),t.length)},s:function(e,t){return y(e.getUTCSeconds(),t.length)},S:function(e,t){var r=t.length,n=e.getUTCMilliseconds();return y(Math.floor(n*Math.pow(10,r-3)),t.length)}};function O(e){o(1,arguments);var t=1,r=u(e),n=r.getUTCDay(),a=(n<t?7:0)+n-t;return r.setUTCDate(r.getUTCDate()-a),r.setUTCHours(0,0,0,0),r}function M(e){o(1,arguments);var t=u(e),r=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(r+1,0,4),n.setUTCHours(0,0,0,0);var a=O(n),i=new Date(0);i.setUTCFullYear(r,0,4),i.setUTCHours(0,0,0,0);var s=O(i);return t.getTime()>=a.getTime()?r+1:t.getTime()>=s.getTime()?r:r-1}function C(e){o(1,arguments);var t=M(e),r=new Date(0);r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0);var n=O(r);return n}function x(e,t){o(1,arguments);var r=t||{},n=r.locale,a=n&&n.options&&n.options.weekStartsOn,i=null==a?0:p(a),s=null==r.weekStartsOn?i:p(r.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=u(e),l=c.getUTCDay(),d=(l<s?7:0)+l-s;return c.setUTCDate(c.getUTCDate()-d),c.setUTCHours(0,0,0,0),c}function N(e,t){o(1,arguments);var r=u(e,t),n=r.getUTCFullYear(),a=t||{},i=a.locale,s=i&&i.options&&i.options.firstWeekContainsDate,c=null==s?1:p(s),l=null==a.firstWeekContainsDate?c:p(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(n+1,0,l),d.setUTCHours(0,0,0,0);var f=x(d,t),m=new Date(0);m.setUTCFullYear(n,0,l),m.setUTCHours(0,0,0,0);var h=x(m,t);return r.getTime()>=f.getTime()?n+1:r.getTime()>=h.getTime()?n:n-1}function k(e,t){o(1,arguments);var r=t||{},n=r.locale,a=n&&n.options&&n.options.firstWeekContainsDate,i=null==a?1:p(a),u=null==r.firstWeekContainsDate?i:p(r.firstWeekContainsDate),s=N(e,t),c=new Date(0);c.setUTCFullYear(s,0,u),c.setUTCHours(0,0,0,0);var l=x(c,t);return l}var P="midnight",j="noon",S="morning",E="afternoon",U="evening",D="night";function z(e,t){var r=e>0?"-":"+",n=Math.abs(e),a=Math.floor(n/60),i=n%60;if(0===i)return r+String(a);var o=t||"";return r+String(a)+o+y(i,2)}function W(e,t){return e%60==0?(e>0?"-":"+")+y(Math.abs(e)/60,2):Y(e,t)}function Y(e,t){var r=t||"",n=e>0?"-":"+",a=Math.abs(e);return n+y(Math.floor(a/60),2)+r+y(a%60,2)}var q={G:function(e,t,r){var n=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if("yo"===t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return r.ordinalNumber(a,{unit:"year"})}return T.y(e,t)},Y:function(e,t,r,n){var a=N(e,n),i=a>0?a:1-a;return"YY"===t?y(i%100,2):"Yo"===t?r.ordinalNumber(i,{unit:"year"}):y(i,t.length)},R:function(e,t){return y(M(e),t.length)},u:function(e,t){return y(e.getUTCFullYear(),t.length)},Q:function(e,t,r){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return y(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return y(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){var n=e.getUTCMonth();switch(t){case"M":case"MM":return T.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){var n=e.getUTCMonth();switch(t){case"L":return String(n+1);case"LL":return y(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){var a=function(e,t){o(1,arguments);var r=u(e),n=x(r,t).getTime()-k(r,t).getTime();return Math.round(n/6048e5)+1}(e,n);return"wo"===t?r.ordinalNumber(a,{unit:"week"}):y(a,t.length)},I:function(e,t,r){var n=function(e){o(1,arguments);var t=u(e),r=O(t).getTime()-C(t).getTime();return Math.round(r/6048e5)+1}(e);return"Io"===t?r.ordinalNumber(n,{unit:"week"}):y(n,t.length)},d:function(e,t,r){return"do"===t?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):T.d(e,t)},D:function(e,t,r){var n=function(e){o(1,arguments);var t=u(e),r=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=t.getTime(),a=r-n;return Math.floor(a/864e5)+1}(e);return"Do"===t?r.ordinalNumber(n,{unit:"dayOfYear"}):y(n,t.length)},E:function(e,t,r){var n=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){var a=e.getUTCDay(),i=(a-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return y(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(a,{width:"short",context:"formatting"});case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){var a=e.getUTCDay(),i=(a-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return y(i,t.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});case"cccccc":return r.day(a,{width:"short",context:"standalone"});case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,r){var n=e.getUTCDay(),a=0===n?7:n;switch(t){case"i":return String(a);case"ii":return y(a,t.length);case"io":return r.ordinalNumber(a,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,r){var n,a=e.getUTCHours();switch(n=12===a?j:0===a?P:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,r){var n,a=e.getUTCHours();switch(n=a>=17?U:a>=12?E:a>=4?S:D,t){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,t,r){if("ho"===t){var n=e.getUTCHours()%12;return 0===n&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return T.h(e,t)},H:function(e,t,r){return"Ho"===t?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):T.H(e,t)},K:function(e,t,r){var n=e.getUTCHours()%12;return"Ko"===t?r.ordinalNumber(n,{unit:"hour"}):y(n,t.length)},k:function(e,t,r){var n=e.getUTCHours();return 0===n&&(n=24),"ko"===t?r.ordinalNumber(n,{unit:"hour"}):y(n,t.length)},m:function(e,t,r){return"mo"===t?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):T.m(e,t)},s:function(e,t,r){return"so"===t?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):T.s(e,t)},S:function(e,t){return T.S(e,t)},X:function(e,t,r,n){var a=(n._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return W(a);case"XXXX":case"XX":return Y(a);case"XXXXX":case"XXX":default:return Y(a,":")}},x:function(e,t,r,n){var a=(n._originalDate||e).getTimezoneOffset();switch(t){case"x":return W(a);case"xxxx":case"xx":return Y(a);case"xxxxx":case"xxx":default:return Y(a,":")}},O:function(e,t,r,n){var a=(n._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+z(a,":");case"OOOO":default:return"GMT"+Y(a,":")}},z:function(e,t,r,n){var a=(n._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+z(a,":");case"zzzz":default:return"GMT"+Y(a,":")}},t:function(e,t,r,n){var a=n._originalDate||e;return y(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,r,n){return y((n._originalDate||e).getTime(),t.length)}};function L(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function H(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var A={p:H,P:function(e,t){var r,n=e.match(/(P+)(p+)?/),a=n[1],i=n[2];if(!i)return L(e,t);switch(a){case"P":r=t.dateTime({width:"short"});break;case"PP":r=t.dateTime({width:"medium"});break;case"PPP":r=t.dateTime({width:"long"});break;case"PPPP":default:r=t.dateTime({width:"full"})}return r.replace("{{date}}",L(a,t)).replace("{{time}}",H(i,t))}};function _(e){var t=new Date(e.getTime()),r=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*r+t.getTime()%6e4}r("V+eJ");var I=["D","DD"],F=["YY","YYYY"];function X(e){return-1!==I.indexOf(e)}function B(e){return-1!==F.indexOf(e)}function G(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var R=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Q=/^'([^]*?)'?$/,J=/''/g,Z=/[a-zA-Z]/;function K(e){return e.match(Q)[1].replace(J,"'")}var $=r("CVNw"),ee=r.n($),te="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z",re=r("7oih"),ne=r("ZEsj"),ae=r("qKvR");r.d(t,"query",(function(){return ie}));t.default=function(e){var t=e.data,r=t.markdownRemark.html,n=t.markdownRemark.frontmatter;return Object(ae.a)(re.a,null,Object(ae.a)(ne.a,{title:n.title,thumbnail:n.icon}),Object(ae.a)(a.a.Fragment,null,Object(ae.a)("div",{className:"product-toolbar m-b"},Object(ae.a)(i.Link,{className:"btn btn-link btn-sm",to:"/"},Object(ae.a)(ee.a,{className:"icon-sm link-icon",path:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"})," Back")),Object(ae.a)("article",{className:"product-detail h-entry",itemScope:!0,itemType:"http://schema.org/BlogPosting"},Object(ae.a)("div",{className:"product-summary"},Object(ae.a)("div",{className:"item-icon"},Object(ae.a)("img",{src:n.icon,alt:""})),Object(ae.a)("div",{className:"item-info"},Object(ae.a)("div",{className:"item-title"},n.title),Object(ae.a)("div",null,"Created on ",function(e,t,r){o(2,arguments);var n=String(t),a=r||{},i=a.locale||b,c=i.options&&i.options.firstWeekContainsDate,l=null==c?1:p(c),d=null==a.firstWeekContainsDate?l:p(a.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=i.options&&i.options.weekStartsOn,m=null==f?0:p(f),h=null==a.weekStartsOn?m:p(a.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var g=u(e);if(!s(g))throw new RangeError("Invalid time value");var v=_(g),y=w(g,v),T={firstWeekContainsDate:d,weekStartsOn:h,locale:i,_originalDate:g},O=n.match(V).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,A[t])(e,i.formatLong,T):e})).join("").match(R).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return K(e);var r=q[t];if(r)return!a.useAdditionalWeekYearTokens&&B(e)&&G(e),!a.useAdditionalDayOfYearTokens&&X(e)&&G(e),r(y,e,i.localize,T);if(t.match(Z))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return O}(new Date(n.createdAt),"MMM dd, yyyy")),Object(ae.a)("div",null,n.framework," · ",n.category),Object(ae.a)("div",{className:"tags"},Object(ae.a)(ee.a,{className:"icon-sm mb-2 mr-2",path:"M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z"}),n.tags.map((function(e){return Object(ae.a)("div",{key:e,className:"tag tag-sm"},e)})))),Object(ae.a)("div",null,Object(ae.a)("div",{className:"btn-group m-b btn-block btn-buy"},Object(ae.a)("button",{type:"button",className:"btn btn-dark btn-block btn-lg dropdown-toggle btn-split","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Buy now",Object(ae.a)("div",{className:"btn-addon",title:"USD$"+n.price},"$",n.price)),Object(ae.a)("div",{className:"dropdown-menu"},n.gumroadUrl&&Object(ae.a)("a",{className:"dropdown-item",href:n.gumroadUrl,target:"_blank",rel:"noopener noreferrer"},Object(ae.a)(ee.a,{className:"icon-sm",path:te})," Pay via Gumroad"),n.paypalUrl&&Object(ae.a)("a",{className:"dropdown-item",href:n.paypalUrl,target:"_blank","data-toggle":"tooltip","data-placement":"top","data-html":"true",title:"Please Add a note <br><strong>'{{ metadata.title }}'</strong><br> during your payment",rel:"noopener noreferrer"},Object(ae.a)(ee.a,{className:"icon-sm",path:te})," Pay via Paypal"),Object(ae.a)("div",{className:"dropdown-divider"}),n.githubUrl&&Object(ae.a)("a",{className:"dropdown-item",href:n.githubUrl,target:"_blank",rel:"noopener noreferrer"},Object(ae.a)(ee.a,{className:"icon-sm",path:te})," View on Github"),n.marketUrl&&Object(ae.a)("a",{className:"dropdown-item",href:n.marketUrl,target:"_blank",rel:"noopener noreferrer"},Object(ae.a)(ee.a,{className:"icon-sm",path:te})," View on Ionic Market"))))),Object(ae.a)("div",{className:"product-thumbnail-container"},Object(ae.a)("ul",{className:"thumbnail-list"},n.thumbnails.map((function(e,t){return Object(ae.a)("li",{key:e,className:"thumbnail-item","data-fancybox":"gallery","data-caption":"Screenshot #"+(t+1),"data-src":e},Object(ae.a)("img",{src:e,alt:""}))})))),Object(ae.a)("div",{className:"product-content e-content",itemProp:"articleBody",dangerouslySetInnerHTML:{__html:r}}))))};var ie="3348433455"},xfY5:function(e,t,r){"use strict";var n=r("dyZX"),a=r("aagx"),i=r("LZWt"),o=r("Xbzi"),u=r("apmT"),s=r("eeVq"),c=r("kJMx").f,l=r("EemH").f,d=r("hswa").f,f=r("qncB").trim,m=n.Number,h=m,g=m.prototype,b="Number"==i(r("Kuth")(g)),p="trim"in String.prototype,v=function(e){var t=u(e,!1);if("string"==typeof t&&t.length>2){var r,n,a,i=(t=p?t.trim():f(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var o,s=t.slice(2),c=0,l=s.length;c<l;c++)if((o=s.charCodeAt(c))<48||o>a)return NaN;return parseInt(s,n)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof m&&(b?s((function(){g.valueOf.call(r)})):"Number"!=i(r))?o(new h(v(t)),r,m):v(t)};for(var w,y=r("nh4g")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;y.length>T;T++)a(h,w=y[T])&&!a(m,w)&&d(m,w,l(h,w));m.prototype=g,g.constructor=m,r("KroJ")(n,"Number",m)}}}]);
//# sourceMappingURL=component---src-templates-product-detail-js-bb73e9907482b6f9164c.js.map