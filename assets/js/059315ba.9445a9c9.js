"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[2207],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(r),k=n,h=m["".concat(c,".").concat(k)]||m[k]||u[k]||i;return r?a.createElement(h,o(o({ref:t},s),{},{components:r})):a.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},38645:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={title:"Week 36 in Packit",date:new Date("2023-09-11T00:00:00.000Z"),authors:"flachman",tags:["2023-September",2023,"September"]},o=void 0,p={permalink:"/posts/weekly/2023/week-36",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2023/week-36.md",source:"@site/weekly/2023/week-36.md",title:"Week 36 in Packit",description:"Week 36 (September 5th \u2013 September 11th)",date:"2023-09-11T00:00:00.000Z",formattedDate:"September 11, 2023",tags:[{label:"2023-September",permalink:"/posts/weekly/tags/2023-september"},{label:"2023",permalink:"/posts/weekly/tags/2023"},{label:"September",permalink:"/posts/weekly/tags/september"}],readingTime:.855,hasTruncateMarker:!1,authors:[{name:"Franti\u0161ek Lachman",email:"flachman@redhat.com",url:"https://github.com/lachmanfrantisek",imageURL:"https://github.com/lachmanfrantisek.png",key:"flachman"}],frontMatter:{title:"Week 36 in Packit",date:"2023-09-11T00:00:00.000Z",authors:"flachman",tags:["2023-September","2023","September"]},nextItem:{title:"Week 35 in Packit",permalink:"/posts/weekly/2023/week-35"}},c={authorsImageUrls:[void 0]},l=[{value:"Week 36 (September 5th \u2013 September 11th)",id:"week-36-september-5th--september-11th",level:2}],s={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"week-36-september-5th--september-11th"},"Week 36 (September 5th \u2013 September 11th)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Packit now supports ",(0,n.kt)("inlineCode",{parentName:"li"},"commit-message")," action that can be used to override the default commit message produced by Packit during ",(0,n.kt)("inlineCode",{parentName:"li"},"propose-downstream")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"pull-from-upstream"),". Please pay attention to ",(0,n.kt)("a",{parentName:"li",href:"https://packit.dev/docs/configuration/actions#commit-message"},"our documentation")," with regards to the usage of this action. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2070"},"packit#2070"),")"),(0,n.kt)("li",{parentName:"ul"},"Packit CLI now supports testing the ",(0,n.kt)("inlineCode",{parentName:"li"},"pull-from-upstream")," workflow.\nUse the ",(0,n.kt)("inlineCode",{parentName:"li"},"packit pull-from-upstream")," command from the ",(0,n.kt)("inlineCode",{parentName:"li"},"packit")," RPM package. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2063"},"packit#2063"),")"),(0,n.kt)("li",{parentName:"ul"},"Packit now passes ",(0,n.kt)("inlineCode",{parentName:"li"},"initiator")," context for tmt to the Testing Farm. You can use ",(0,n.kt)("a",{parentName:"li",href:"https://tmt.readthedocs.io/en/latest/spec/context.html#initiator"},"this option")," to run or skip certain tests when they're run by Packit. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2176"},"packit-service#2176"),")"),(0,n.kt)("li",{parentName:"ul"},"Testing Farm started additionally exposing regexes on top of the exact compose names in the /composes/ endpoints, and we now support this as well when checking the validity of compose. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2168"},"packit-service#2168"),")"),(0,n.kt)("li",{parentName:"ul"},"We have disabled the jitter for retrying Bodhi update tasks to prevent race conditions causing not created updates. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2170"},"packit-service#2170"),")"),(0,n.kt)("li",{parentName:"ul"},"We have fixed a bug in ",(0,n.kt)("inlineCode",{parentName:"li"},"get_fork")," method for Pagure about checking the usernames for a match when going through existing forks. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/ogr/pull/800"},"ogr#800"),")")))}u.isMDXComponent=!0}}]);