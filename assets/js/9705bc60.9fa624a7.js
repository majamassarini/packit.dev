"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[8230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,k=u["".concat(p,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3652:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Week 14 in Packit",date:new Date("2024-04-08T00:00:00.000Z"),authors:"flachman",tags:["2024-April",2024,"April"]},l=void 0,o={permalink:"/posts/weekly/2024/week-14",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-14.md",source:"@site/weekly/2024/week-14.md",title:"Week 14 in Packit",description:"Week 14 (April 2nd \u2013 April 8th)",date:"2024-04-08T00:00:00.000Z",formattedDate:"April 8, 2024",tags:[{label:"2024-April",permalink:"/posts/weekly/tags/2024-april"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"April",permalink:"/posts/weekly/tags/april"}],readingTime:.24,hasTruncateMarker:!1,authors:[{name:"Franti\u0161ek Lachman",email:"flachman@redhat.com",url:"https://github.com/lachmanfrantisek",imageURL:"https://github.com/lachmanfrantisek.png",key:"flachman"}],frontMatter:{title:"Week 14 in Packit",date:"2024-04-08T00:00:00.000Z",authors:"flachman",tags:["2024-April","2024","April"]},nextItem:{title:"Week 13 in Packit",permalink:"/posts/weekly/2024/week-13"}},p={authorsImageUrls:[void 0]},c=[{value:"Week 14 (April 2nd \u2013 April 8th)",id:"week-14-april-2nd--april-8th",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"week-14-april-2nd--april-8th"},"Week 14 (April 2nd \u2013 April 8th)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We have fixed a race condition that could occur when multiple ",(0,a.kt)("inlineCode",{parentName:"li"},"copr_build")," jobs sharing a Copr project but having different targets were running at the same time. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2274"},"packit#2274"),")"),(0,a.kt)("li",{parentName:"ul"},"We have fixed reporting of tests with ",(0,a.kt)("inlineCode",{parentName:"li"},"manual_trigger: True"),". (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2389"},"packit-service#2389"),")")))}m.isMDXComponent=!0}}]);