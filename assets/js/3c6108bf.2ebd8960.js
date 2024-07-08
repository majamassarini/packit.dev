"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[97089],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="Weekly roles of the Packit team",l={unversionedId:"weekly-roles/index",id:"weekly-roles/index",title:"Weekly roles of the Packit team",description:"Sharing responsibility in a team",source:"@site/agile/weekly-roles/index.md",sourceDirName:"weekly-roles",slug:"/weekly-roles/",permalink:"/agile/weekly-roles/",draft:!1,editUrl:"https://github.com/packit/agile/tree/main/docs/agile/weekly-roles/index.md",tags:[],version:"current",frontMatter:{},sidebar:"autogenerated",previous:{title:"Packit Agile Documentation",permalink:"/agile/"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"weekly-roles-of-the-packit-team"},"Weekly roles of the Packit team"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sharing responsibility in a team",src:r(88539).Z,width:"1024",height:"1024"})),(0,a.kt)("p",null,"This repository handles the weekly rotating roles of the Packit team.\nRotating roles represent work that needs to be done each week (e.g. releasing,\nmonitoring, communicating with the users). They are described in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/packit/agile/issues?q=is%3Aissue+is%3Aopen+label%3Aroles"},"issues using the ",(0,a.kt)("inlineCode",{parentName:"a"},"roles")," label"),".\nThese issues are automatically cloned every Friday and team members are assigned to them."),(0,a.kt)("p",null,"The repository contains:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"clone_roles.py")," - script that does the cloning of the issues, assigning of the team members\nand closing the old ones"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},".github/workflows/rotate_roles.yaml")," - Github action that runs the script periodically (each Friday)")),(0,a.kt)("p",null,"You can read more about the process in the following blog post series:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/@laura.barcziova/how-to-run-an-open-source-service-fb3303240e69"},"How to run an open-source service?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/@laura.barcziova/inception-of-rotating-roles-9caf971b3096"},"Inception of rotating roles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/@laura.barcziova/share-team-responsibilities-efficiently-9a202aad7bd0"},"Share team responsibilities efficiently")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/@laura.barcziova/role-rotation-tutorial-957ed3545ef2"},"Role rotation tutorial"))))}m.isMDXComponent=!0},88539:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/title-96ae28aad57afd73e14a8306cb87e445.png"}}]);