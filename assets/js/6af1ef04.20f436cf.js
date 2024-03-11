"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[5621],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),k=n,f=s["".concat(c,".").concat(k)]||s[k]||m[k]||i;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},10504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Week 7 in Packit",date:new Date("2024-02-19T00:00:00.000Z"),authors:"lbarczio",tags:["2024-February",2024,"February"]},o=void 0,l={permalink:"/posts/weekly/2024/week-7",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-7.md",source:"@site/weekly/2024/week-7.md",title:"Week 7 in Packit",description:"Week 7 (February 13th \u2013 February 19th)",date:"2024-02-19T00:00:00.000Z",formattedDate:"February 19, 2024",tags:[{label:"2024-February",permalink:"/posts/weekly/tags/2024-february"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"February",permalink:"/posts/weekly/tags/february"}],readingTime:.565,hasTruncateMarker:!1,authors:[{name:"Laura Barcziov\xe1",email:"lbarczio@redhat.com",url:"https://github.com/lbarcziova",imageURL:"https://github.com/lbarcziova.png",key:"lbarczio"}],frontMatter:{title:"Week 7 in Packit",date:"2024-02-19T00:00:00.000Z",authors:"lbarczio",tags:["2024-February","2024","February"]},prevItem:{title:"Week 8 in Packit",permalink:"/posts/weekly/2024/week-8"},nextItem:{title:"Week 6 in Packit",permalink:"/posts/weekly/2024/week-6"}},c={authorsImageUrls:[void 0]},p=[{value:"Week 7 (February 13th \u2013 February 19th)",id:"week-7-february-13th--february-19th",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"week-7-february-13th--february-19th"},"Week 7 (February 13th \u2013 February 19th)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Packit now supports special value ",(0,n.kt)("inlineCode",{parentName:"li"},"ignore")," for ",(0,n.kt)("inlineCode",{parentName:"li"},"trigger")," in jobs configuration that indicates not to execute the job at all.\nThis can be useful for templates or temporarily disabled jobs. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2234"},"packit#2234"),")"),(0,n.kt)("li",{parentName:"ul"},"We have fixed the caching of data for the usage API endpoint. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2350"},"packit-service#2350"),")"),(0,n.kt)("li",{parentName:"ul"},"We have fixed an issue that caused loading the same data multiple times on the dashboard within the project views. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2349"},"packit-service#2349"),")"),(0,n.kt)("li",{parentName:"ul"},"We have also fixed crashing of dashboard's ",(0,n.kt)("inlineCode",{parentName:"li"},"Usage")," page in case of unsuccessful queries. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/dashboard/pull/378"},"dashboard#378"),")"),(0,n.kt)("li",{parentName:"ul"},"We have fixed parsing of resolved Bugzillas in comments with multiple arguments specified,\ne.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"/packit pull-from-upstream --with-pr-config --resolved-bugs rhbz#123"),". (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2346"},"packit-service#2346"),")")))}m.isMDXComponent=!0}}]);