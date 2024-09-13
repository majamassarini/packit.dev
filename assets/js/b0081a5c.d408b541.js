"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[49672],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Variable files"},l=void 0,o={unversionedId:"vars",id:"vars",title:"Variable files",description:"template.yml is a general variable file template.",source:"@site/deployment/vars.md",sourceDirName:".",slug:"/vars",permalink:"/deployment/vars",draft:!1,editUrl:"https://github.com/packit/deployment/tree/main/docs/deployment/vars.md",tags:[],version:"current",frontMatter:{title:"Variable files"},sidebar:"autogenerated",previous:{title:"Generating TLS Certificates",permalink:"/deployment/tls-certs"}},p={},s=[],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/packit/deployment/blob/main/vars/template.yml"},"template.yml")," is a general variable file template."),(0,a.kt)("p",null,"There are also ",(0,a.kt)("inlineCode",{parentName:"p"},"{service}/{deployment}_template.yml")," files,\nwhere"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{service}")," is either ",(0,a.kt)("inlineCode",{parentName:"li"},"packit")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"stream")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{deployment}")," is one of ",(0,a.kt)("inlineCode",{parentName:"li"},"prod"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"stg")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"dev"))),(0,a.kt)("p",null,"You have to copy ",(0,a.kt)("inlineCode",{parentName:"p"},"{service}/{deployment}_template.yml")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"{service}/{deployment}.yml"),"\ndepending on what service and environment you want to deploy to\nand fill in missing values.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"{service}/{deployment}.yml")," files are ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore"),"d so you can't\npush them to the git repo by mistake."),(0,a.kt)("p",null,"The Ansible playbooks then include one of the variable files depending on the\nvalue of ",(0,a.kt)("inlineCode",{parentName:"p"},"SERVICE")," (optional, defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"packit"),") and ",(0,a.kt)("inlineCode",{parentName:"p"},"DEPLOYMENT"),"\nenvironment variables and processes all the templates with\nvariables defined in the file."))}d.isMDXComponent=!0}}]);