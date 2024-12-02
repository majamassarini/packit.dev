"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[95376],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),b=a,k=m["".concat(p,".").concat(b)]||m[b]||u[b]||i;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},75829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Week 46 in Packit",date:new Date("2024-11-18T00:00:00.000Z"),authors:"lbarczio",tags:["2024-November",2024,"November"]},o=void 0,l={permalink:"/posts/weekly/2024/week-46",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-46.md",source:"@site/weekly/2024/week-46.md",title:"Week 46 in Packit",description:"Week 46 (November 12th \u2013 November 18th)",date:"2024-11-18T00:00:00.000Z",formattedDate:"November 18, 2024",tags:[{label:"2024-November",permalink:"/posts/weekly/tags/2024-november"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"November",permalink:"/posts/weekly/tags/november"}],readingTime:.67,hasTruncateMarker:!1,authors:[{name:"Laura Barcziov\xe1",email:"lbarczio@redhat.com",url:"https://github.com/lbarcziova",imageURL:"https://github.com/lbarcziova.png",key:"lbarczio"}],frontMatter:{title:"Week 46 in Packit",date:"2024-11-18T00:00:00.000Z",authors:"lbarczio",tags:["2024-November","2024","November"]},prevItem:{title:"Week 47 in Packit",permalink:"/posts/weekly/2024/week-47"},nextItem:{title:"Week 45 in Packit",permalink:"/posts/weekly/2024/week-45"}},p={authorsImageUrls:[void 0]},c=[{value:"Week 46 (November 12th \u2013 November 18th)",id:"week-46-november-12th--november-18th",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"week-46-november-12th--november-18th"},"Week 46 (November 12th \u2013 November 18th)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Packit configuration file now supports a top-level placeholder key, ",(0,a.kt)("inlineCode",{parentName:"li"},"_"),", which is ignored when parsing the file.\nThis is useful for storing YAML anchors in complex config files, e.g.:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"_:\n  base-test: &base-test\n    job: tests\n    fmf_path: .distro\njobs:\n  - <<: *base-test\n    trigger: pull_request\n    manual_trigger: true\n  - <<: *internal-test\n    trigger: commit\n    use_internal_tf: true\n")),(0,a.kt)("p",null,"(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/packit/packit/pull/2378"},"packit#2378"),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can now define ",(0,a.kt)("inlineCode",{parentName:"li"},"with_opts")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"without_opts")," in target-specific configuration of ",(0,a.kt)("inlineCode",{parentName:"li"},"copr_build")," job to build with ",(0,a.kt)("inlineCode",{parentName:"li"},"--with")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"--without")," rpmbuild options. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2463"},"packit#2463"),")"),(0,a.kt)("li",{parentName:"ul"},"We have made several improvements to our dashboard:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The Copr installation instructions have been updated. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/dashboard/pull/487"},"dashboard#487"),")"),(0,a.kt)("li",{parentName:"ul"},"You can now view the number of new findings from OpenScanHub scans. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/dashboard/pull/489"},"dashboard#489"),")"),(0,a.kt)("li",{parentName:"ul"},"Displaying of Copr builds in Testing Farm run views was improved as well. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/dashboard/pull/481"},"dashboard#481"),")")))))}u.isMDXComponent=!0}}]);