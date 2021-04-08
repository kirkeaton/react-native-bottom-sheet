(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{100:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(16),o=r(101);function a(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,c=void 0!==i&&i,l=a.absolute,s=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+u:u}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},101:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},105:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0),o=r.n(n),a=function(e){var t=e.title,r=e.url;return o.a.createElement("video",{muted:!0,loop:!0,autoPlay:!0,controls:!1,playsInline:!0,title:t,width:"100%"},o.a.createElement("source",{src:r,type:"video/mp4"}))}},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(8),a=(r(0),r(97)),i=r(100),c=r(105),l={id:"getting-started",title:"Getting Started",description:"A performant interactive bottom sheet modal with fully configurable options \ud83d\ude80",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-modal-preview.gif",hide_title:!0,slug:"/modal"},s={unversionedId:"modal/getting-started",id:"modal/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"A performant interactive bottom sheet modal with fully configurable options \ud83d\ude80",source:"@site/docs/modal/getting-started.mdx",slug:"/modal",permalink:"/react-native-bottom-sheet/modal",editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/master/website/docs/modal/getting-started.mdx",version:"current",sidebar:"packages",previous:{title:"FAQ",permalink:"/react-native-bottom-sheet/faq"},next:{title:"Usage",permalink:"/react-native-bottom-sheet/modal/usage"}},u=[{value:"Features",id:"features",children:[]},{value:"Installation",id:"installation",children:[]}],p={toc:u};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"react-native-bottom-sheet-modal"},"React Native Bottom Sheet Modal"),Object(a.b)(c.a,{title:"React Native Bottom Sheet Modal",url:Object(i.a)("video/bottom-sheet-modal-preview.mp4"),mdxType:"Video"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Bottom Sheet Modal")," is wrapper/decorator on top of the ",Object(a.b)("strong",{parentName:"p"},"Bottom Sheet"),", it provides all of its functionalities with extra modal presentation functionalities."),Object(a.b)("p",null,"With the release of the library, support for stack sheet modals were something planned ahead to provide the a native feel & and experience to users."),Object(a.b)("p",null,"The implementation of this feature was inspired by Apple Maps sheet modals \u2764\ufe0f, ",Object(a.b)("a",{parentName:"p",href:"https://github.com/gorhom/react-native-bottom-sheet/blob/master/example/src/screens/advanced/MapExample.tsx"},"check out the Apple Map sheet modals clone"),"."),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"...",Object(a.b)("a",{parentName:"li",href:"/#features"},"Bottom Sheet Features")),Object(a.b)("li",{parentName:"ul"},"Smooth interaction and mounting animation."),Object(a.b)("li",{parentName:"ul"},"Support stack sheet modals.")),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"This feature is already shipped with ",Object(a.b)("inlineCode",{parentName:"p"},"@gorhom/bottom-sheet")," package and it requires no extra dependency."))}d.isMDXComponent=!0},97:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?o.a.createElement(b,c(c({ref:t},s),{},{components:r})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);