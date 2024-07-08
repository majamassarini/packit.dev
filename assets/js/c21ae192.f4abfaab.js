"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[67006],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22766:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"DLRN",authors:"flachman"},i=void 0,l={unversionedId:"automation-tools/dlrn",id:"automation-tools/dlrn",title:"DLRN",description:"- DLRN builds and maintains yum repositories following upstream commits from a Git repo.",source:"@site/research/automation-tools/dlrn.md",sourceDirName:"automation-tools",slug:"/automation-tools/dlrn",permalink:"/research/automation-tools/dlrn",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/automation-tools/dlrn.md",tags:[],version:"current",frontMatter:{title:"DLRN",authors:"flachman"},sidebar:"autogenerated",previous:{title:"Tools/libraries similar or related to the Packit",permalink:"/research/automation-tools/"},next:{title:"RDOPKG",permalink:"/research/automation-tools/rdopkg"}},p={},s=[{value:"\u2795",id:"",level:2},{value:"\u2796",id:"-1",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DLRN builds and maintains yum repositories following upstream commits from a Git repo."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/softwarefactory-project/DLRN"}," \ud83d\udcbb github.com/softwarefactory-project/DLRN"),", ",(0,n.kt)("a",{parentName:"li",href:"https://dlrn.readthedocs.io/en/latest/intro.html"}," \ud83d\udcdc documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://img.shields.io/pypi/pyversions/dlrn.svg",alt:"PyPI - Python Version"}),", ",(0,n.kt)("a",{parentName:"li",href:"https://pypi.org/project/dlrn/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/dlrn.svg",alt:"PyPI"})),", ",(0,n.kt)("a",{parentName:"li",href:"https://src.fedoraproject.org/rpms/dlrn"}," \ud83d\udce6 fedora packages"))),(0,n.kt)("h2",{id:""},"\u2795"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"automatic builds of packages"),(0,n.kt)("li",{parentName:"ul"},"generating of yum repositories",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DLRN does not delete any generated repositories."),(0,n.kt)("li",{parentName:"ul"},"Repositories are unique. e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"/centos7/current/delorean.repo")," can point to ",(0,n.kt)("inlineCode",{parentName:"li"},"/centos7/42/0c/420c638d6325d1ccf50eb5fe430c5d255dcbfb94_52cbbfe7")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dlrn.readthedocs.io/en/latest/api.html"},"REST API"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/api/last_tested_repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/api/repo_status"))))),(0,n.kt)("h2",{id:"-1"},"\u2796"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"heavily coupled to rdopkg/OpenStack workflow (need to use ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/openstack/rpm-packaging"},"RPM Packaging for OpenStack"),"):",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"DLRN uses rdoinfo to retrieve the metadata and repositories associated with each project in RDO (code and distgit) and mock to carry out the actual build in an isolated environment.")))))}m.isMDXComponent=!0}}]);