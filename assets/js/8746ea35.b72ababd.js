"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[6310],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(r),m=a,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(d,p(p({ref:t},c),{},{components:r})):n.createElement(d,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,p[1]=s;for(var o=2;o<i;o++)p[o]=r[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_label:"spec_parser",title:"specfile.spec_parser"},p=void 0,s={unversionedId:"api/specfile/spec_parser",id:"api/specfile/spec_parser",title:"specfile.spec_parser",description:"SpecParser",source:"@site/specfile/api/specfile/spec_parser.md",sourceDirName:"api/specfile",slug:"/api/specfile/spec_parser",permalink:"/specfile/api/specfile/spec_parser",draft:!1,editUrl:"https://github.com/packit/specfile/tree/main/docs/specfile/api/specfile/spec_parser.md",tags:[],version:"current",frontMatter:{sidebar_label:"spec_parser",title:"specfile.spec_parser"},sidebar:"autogenerated",previous:{title:"sources",permalink:"/specfile/api/specfile/sources"},next:{title:"tags",permalink:"/specfile/api/specfile/tags"}},l={},o=[{value:"SpecParser",id:"specparser",level:2},{value:"parse",id:"parse",level:4}],c={toc:o},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"specparser"},"SpecParser"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class SpecParser()\n")),(0,a.kt)("p",null,"Class that represents a spec file parser."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sourcedir")," - Path to sources and patches."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"macros")," - List of extra macro definitions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"force_parse")," - Whether to attempt to parse the spec file even if one or more\nsources required to be present at parsing time are not available.\nSuch sources include sources referenced from shell expansions\nin tag values and sources included using the ",(0,a.kt)("em",{parentName:"li"},"%include")," directive."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"rpm.spec")," instance representing parsed spec file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tainted")," - Indication that parsing of the spec file was forced and one or more\nsources required to be present at parsing time were not available\nand were replaced with dummy files.")),(0,a.kt)("h4",{id:"parse"},"parse"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def parse(\n        content: str,\n        extra_macros: Optional[List[Tuple[str,\n                                          Optional[str]]]] = None) -> None\n")),(0,a.kt)("p",null,"Parses the content of a spec file and updates the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tainted")," attributes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"content")," - String representing the content of a spec file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"extra_macros")," - List of extra macro definitions.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Raises"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RPMException")," - If parsing error occurs.")))}f.isMDXComponent=!0}}]);