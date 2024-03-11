"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[6631],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,k=s["".concat(l,".").concat(f)]||s[f]||m[f]||i;return r?a.createElement(k,o(o({ref:t},u),{},{components:r})):a.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36033:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Week 9 in Packit",date:new Date("2024-03-04T00:00:00.000Z"),authors:"mfocko",tags:["2024-February",2024,"February"]},o=void 0,c={permalink:"/posts/weekly/2024/week-9",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-9.md",source:"@site/weekly/2024/week-9.md",title:"Week 9 in Packit",description:"Week 9 (February 27th \u2013 March 4th)",date:"2024-03-04T00:00:00.000Z",formattedDate:"March 4, 2024",tags:[{label:"2024-February",permalink:"/posts/weekly/tags/2024-february"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"February",permalink:"/posts/weekly/tags/february"}],readingTime:.315,hasTruncateMarker:!1,authors:[{name:"Matej Focko",email:"mfocko@redhat.com",url:"https://github.com/mfocko",imageURL:"https://github.com/mfocko.png",key:"mfocko"}],frontMatter:{title:"Week 9 in Packit",date:"2024-03-04T00:00:00.000Z",authors:"mfocko",tags:["2024-February","2024","February"]},nextItem:{title:"Week 8 in Packit",permalink:"/posts/weekly/2024/week-8"}},l={authorsImageUrls:[void 0]},p=[{value:"Week 9 (February 27th \u2013 March 4th)",id:"week-9-february-27th--march-4th",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"week-9-february-27th--march-4th"},"Week 9 (February 27th \u2013 March 4th)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We have fixed the bug about Packit overwriting the final state of the build in case the build start is being processed later than the end of the build. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2358"},"packit-service#2358"),")"),(0,n.kt)("li",{parentName:"ul"},"We have improved the reporting of configuration errors in GitLab. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2357"},"packit-service#2357"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GitLabProject.get_file_content()")," can now correctly handle file paths starting with ",(0,n.kt)("inlineCode",{parentName:"li"},"./"),". (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/ogr/pull/844"},"ogr#844"),")")))}m.isMDXComponent=!0}}]);