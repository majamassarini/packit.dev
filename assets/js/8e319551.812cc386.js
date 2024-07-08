"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[16251],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),y=n,f=m["".concat(c,".").concat(y)]||m[y]||u[y]||o;return a?r.createElement(f,i(i({ref:t},s),{},{components:a})):r.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},21588:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Week 19 in Packit",date:new Date("2024-05-13T00:00:00.000Z"),authors:"flachman",tags:["2024-May",2024,"May"]},i=void 0,l={permalink:"/posts/weekly/2024/week-19",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-19.md",source:"@site/weekly/2024/week-19.md",title:"Week 19 in Packit",description:"Week 19 (May 7th \u2013 May 13th)",date:"2024-05-13T00:00:00.000Z",formattedDate:"May 13, 2024",tags:[{label:"2024-May",permalink:"/posts/weekly/tags/2024-may"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"May",permalink:"/posts/weekly/tags/may"}],readingTime:.215,hasTruncateMarker:!1,authors:[{name:"Franti\u0161ek Lachman",email:"flachman@redhat.com",url:"https://github.com/lachmanfrantisek",imageURL:"https://github.com/lachmanfrantisek.png",key:"flachman"}],frontMatter:{title:"Week 19 in Packit",date:"2024-05-13T00:00:00.000Z",authors:"flachman",tags:["2024-May","2024","May"]},prevItem:{title:"Week 20 in Packit",permalink:"/posts/weekly/2024/week-20"},nextItem:{title:"Week 18 in Packit",permalink:"/posts/weekly/2024/week-18"}},c={authorsImageUrls:[void 0]},p=[{value:"Week 19 (May 7th \u2013 May 13th)",id:"week-19-may-7th--may-13th",level:2}],s={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"week-19-may-7th--may-13th"},"Week 19 (May 7th \u2013 May 13th)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added a ",(0,n.kt)("inlineCode",{parentName:"li"},"scan-in-osh")," subcommand in the CLI to perform a scan through OpenScanHub. By default it performs a full scan of the packages and a differential scan can be performed through ",(0,n.kt)("inlineCode",{parentName:"li"},"--base-srpm")," option. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2301"},"packit#2301"),")")))}u.isMDXComponent=!0}}]);