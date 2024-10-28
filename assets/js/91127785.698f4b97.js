"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[81977],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(r),k=a,f=s["".concat(l,".").concat(k)]||s[k]||u[k]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},51037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Week 39 in Packit",date:new Date("2024-09-30T00:00:00.000Z"),authors:"flachman",tags:["2024-September",2024,"September"]},o=void 0,p={permalink:"/posts/weekly/2024/week-39",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-39.md",source:"@site/weekly/2024/week-39.md",title:"Week 39 in Packit",description:"Week 39 (September 24th \u2013 September 30th)",date:"2024-09-30T00:00:00.000Z",formattedDate:"September 30, 2024",tags:[{label:"2024-September",permalink:"/posts/weekly/tags/2024-september"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"September",permalink:"/posts/weekly/tags/september"}],readingTime:.235,hasTruncateMarker:!1,authors:[{name:"Franti\u0161ek Lachman",email:"flachman@redhat.com",url:"https://github.com/lachmanfrantisek",imageURL:"https://github.com/lachmanfrantisek.png",key:"flachman"}],frontMatter:{title:"Week 39 in Packit",date:"2024-09-30T00:00:00.000Z",authors:"flachman",tags:["2024-September","2024","September"]},prevItem:{title:"Week 40 in Packit",permalink:"/posts/weekly/2024/week-40"},nextItem:{title:"Week 38 in Packit",permalink:"/posts/weekly/2024/week-38"}},l={authorsImageUrls:[void 0]},c=[{value:"Week 39 (September 24th \u2013 September 30th)",id:"week-39-september-24th--september-30th",level:2}],m={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"week-39-september-24th--september-30th"},"Week 39 (September 24th \u2013 September 30th)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check for ",(0,a.kt)("inlineCode",{parentName:"li"},"upstream_project_url")," presence in the configuration when ",(0,a.kt)("inlineCode",{parentName:"li"},"pull_from_upstream")," job is configured was removed from ",(0,a.kt)("inlineCode",{parentName:"li"},"validate-config"),", as this is no longer required. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2423"},"packit#2423"),")"),(0,a.kt)("li",{parentName:"ul"},"We have added a note about retriggering ",(0,a.kt)("inlineCode",{parentName:"li"},"pull_from_upstream")," job from dist-git pull requests. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2542"},"packit-service#2542"),")")))}u.isMDXComponent=!0}}]);