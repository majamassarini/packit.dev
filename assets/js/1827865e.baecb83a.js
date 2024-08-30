"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[56002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,k=u["".concat(c,".").concat(y)]||u[y]||m[y]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},68494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Week 29 in Packit",date:new Date("2024-07-22T00:00:00.000Z"),authors:"flachman",tags:["2024-July",2024,"July"]},l=void 0,o={permalink:"/posts/weekly/2024/week-29",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-29.md",source:"@site/weekly/2024/week-29.md",title:"Week 29 in Packit",description:"Week 29 (July 16th \u2013 July 22nd)",date:"2024-07-22T00:00:00.000Z",formattedDate:"July 22, 2024",tags:[{label:"2024-July",permalink:"/posts/weekly/tags/2024-july"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"July",permalink:"/posts/weekly/tags/july"}],readingTime:.375,hasTruncateMarker:!1,authors:[{name:"Franti\u0161ek Lachman",email:"flachman@redhat.com",url:"https://github.com/lachmanfrantisek",imageURL:"https://github.com/lachmanfrantisek.png",key:"flachman"}],frontMatter:{title:"Week 29 in Packit",date:"2024-07-22T00:00:00.000Z",authors:"flachman",tags:["2024-July","2024","July"]},prevItem:{title:"Week 30 in Packit",permalink:"/posts/weekly/2024/week-30"},nextItem:{title:"Week 28 in Packit",permalink:"/posts/weekly/2024/week-28"}},c={authorsImageUrls:[void 0]},s=[{value:"Week 29 (July 16th \u2013 July 22nd)",id:"week-29-july-16th--july-22nd",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"week-29-july-16th--july-22nd"},"Week 29 (July 16th \u2013 July 22nd)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We have implemented a CLI support for Koji builds against CBS Koji instance. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2267"},"packit#2267"),")"),(0,a.kt)("li",{parentName:"ul"},"Added a new configuration option ",(0,a.kt)("inlineCode",{parentName:"li"},"sync_test_job_statuses_with_builds")," that controls whether test job statuses are updated together with their corresponding build job statuses. When set to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", while tests jobs are waiting for their corresponding build jobs to finish, their statuses remain in pending state and only build job statuses are updated. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2470"},"packit-service#2470"),")")))}m.isMDXComponent=!0}}]);