"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[7812],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),k=a,h=m["".concat(p,".").concat(k)]||m[k]||u[k]||i;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},31333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Week 46 in Packit",date:new Date("2023-11-20T00:00:00.000Z"),authors:"lbarczio",tags:["2023-November",2023,"November"]},o=void 0,l={permalink:"/posts/weekly/2023/week-46",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2023/week-46.md",source:"@site/weekly/2023/week-46.md",title:"Week 46 in Packit",description:"Week 46 (November 14th \u2013 November 20th)",date:"2023-11-20T00:00:00.000Z",formattedDate:"November 20, 2023",tags:[{label:"2023-November",permalink:"/posts/weekly/tags/2023-november"},{label:"2023",permalink:"/posts/weekly/tags/2023"},{label:"November",permalink:"/posts/weekly/tags/november"}],readingTime:.755,hasTruncateMarker:!1,authors:[{name:"Laura Barcziov\xe1",email:"lbarczio@redhat.com",url:"https://github.com/lbarcziova",imageURL:"https://github.com/lbarcziova.png",key:"lbarczio"}],frontMatter:{title:"Week 46 in Packit",date:"2023-11-20T00:00:00.000Z",authors:"lbarczio",tags:["2023-November","2023","November"]},prevItem:{title:"Week 47 in Packit",permalink:"/posts/weekly/2023/week-47"},nextItem:{title:"Week 45 in Packit",permalink:"/posts/weekly/2023/week-45"}},p={authorsImageUrls:[void 0]},c=[{value:"Week 46 (November 14th \u2013 November 20th)",id:"week-46-november-14th--november-20th",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"week-46-november-14th--november-20th"},"Week 46 (November 14th \u2013 November 20th)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Packit now supports pre-release version in ",(0,a.kt)("inlineCode",{parentName:"li"},"propose_downstream")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"pull_from_upstream"),".\nA spec file update might be required, see ",(0,a.kt)("a",{parentName:"li",href:"/docs/pre-releases"},"the documentation")," for more details.\n(",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2149"},"packit#2149"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In relation to that, specfile library has a new method, ",(0,a.kt)("inlineCode",{parentName:"li"},"Specfile.update_version()"),", that allows updating spec file\nversion even if it is a pre-release. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/specfile/pull/317"},"specfile#317"),")"))),(0,a.kt)("li",{parentName:"ul"},"Packit can now check, using the new ",(0,a.kt)("inlineCode",{parentName:"li"},"update_version_mask")," configuration option, that the proposed version of new release\nand the current version of the dist-git branch are compatible and sync the dist-git branch only in that case.\n(",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2156"},"packit#2156"),")"),(0,a.kt)("li",{parentName:"ul"},"Packit is now able to get the version from spec file even if the ",(0,a.kt)("inlineCode",{parentName:"li"},"Version")," tag is not present in the specfile directly,\nbut e.g. imported from another file. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2157"},"packit#2157"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PACKIT_COPR_PROJECT")," env var that is exposed to Testing Farm now includes the Copr project of the additional build\nspecified in comment, if present. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2253"},"packit-service#2253"),")")))}u.isMDXComponent=!0}}]);