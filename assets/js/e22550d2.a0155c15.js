"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[59176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),h=a,k=s["".concat(u,".").concat(h)]||s[h]||y[h]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"July 2023",date:new Date("2023-07-10T13:49:53.000Z"),tags:[2023]},i=void 0,o={permalink:"/posts/weekly/July-2023",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/July-2023.md",source:"@site/weekly/July-2023.md",title:"July 2023",description:"Week 27 (July 4th \u2013 July 10th)",date:"2023-07-10T13:49:53.000Z",formattedDate:"July 10, 2023",tags:[{label:"2023",permalink:"/posts/weekly/tags/2023"}],readingTime:.81,hasTruncateMarker:!1,authors:[],frontMatter:{title:"July 2023",date:"2023-07-10T13:49:53.000Z",tags:["2023"]},prevItem:{title:"Week 31 in Packit",permalink:"/posts/weekly/2023/week-31"},nextItem:{title:"June 2023",permalink:"/posts/weekly/June-2023"}},u={authorsImageUrls:[]},p=[{value:"Week 27 (July 4th \u2013 July 10th)",id:"week-27-july-4th--july-10th",level:2},{value:"Week 28 (July 11th \u2013 July 17th)",id:"week-28-july-11th--july-17th",level:2},{value:"Weeks 29\u201330 (July 18th \u2013 July 31st)",id:"weeks-2930-july-18th--july-31st",level:2}],c={toc:p},s="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"week-27-july-4th--july-10th"},"Week 27 (July 4th \u2013 July 10th)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Packit now correctly reloads upstream specfile after running ",(0,a.kt)("inlineCode",{parentName:"li"},"pre-sync")," action. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2006"},"packit#2006"),")")),(0,a.kt)("h2",{id:"week-28-july-11th--july-17th"},"Week 28 (July 11th \u2013 July 17th)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Packit now includes instructions on how to checkout the dist-git PR locally when syncing the release.\n(",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2116"},"packit-service#2116"),")"),(0,a.kt)("li",{parentName:"ul"},"We have fixed a bug in processing options of ",(0,a.kt)("inlineCode",{parentName:"li"},"%prep")," macros in our ",(0,a.kt)("inlineCode",{parentName:"li"},"specfile")," library. For instance, when a quoted\nstring appeared inside an expression expansion, it could lead to improper parsing, rendering the spec file invalid\nafter accessing the options. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/specfile/pull/253"},"specfile#253"),")"),(0,a.kt)("li",{parentName:"ul"},"packit.dev has a new format! As the content has expanded a lot in the recent year, we decided to switch to using\n",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Docosaurus"),":\nnow all the documentation is in one place and this format also enables additional features for our blog posts.\n(",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit.dev/pull/694"},"packit.dev#694"),")")),(0,a.kt)("h2",{id:"weeks-2930-july-18th--july-31st"},"Weeks 29\u201330 (July 18th \u2013 July 31st)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With plenty of team members on vacation, we didn't manage to implement any significant new features during these two weeks.")))}y.isMDXComponent=!0}}]);