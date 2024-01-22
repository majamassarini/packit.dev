"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[9910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_label:"macros",title:"specfile.macros"},o=void 0,i={unversionedId:"api/specfile/macros",id:"api/specfile/macros",title:"specfile.macros",description:"Macro",source:"@site/specfile/api/specfile/macros.md",sourceDirName:"api/specfile",slug:"/api/specfile/macros",permalink:"/specfile/api/specfile/macros",draft:!1,editUrl:"https://github.com/packit/specfile/tree/main/docs/specfile/api/specfile/macros.md",tags:[],version:"current",frontMatter:{sidebar_label:"macros",title:"specfile.macros"},sidebar:"autogenerated",previous:{title:"macro_definitions",permalink:"/specfile/api/specfile/macro_definitions"},next:{title:"options",permalink:"/specfile/api/specfile/options"}},p={},s=[{value:"Macro",id:"macro",level:2},{value:"Macros",id:"macros",level:2},{value:"dump",id:"dump",level:4},{value:"expand",id:"expand",level:4},{value:"remove",id:"remove",level:4},{value:"define",id:"define",level:4},{value:"reinit",id:"reinit",level:4}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"macro"},"Macro"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Macro(collections.abc.Hashable)\n")),(0,r.kt)("p",null,"Class that represents a RPM macro."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - Name of the macro."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," - Options (parameters) of the macro."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"body")," - Macro body."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"level")," - Macro level (source)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"used")," - Indicates that the macro has been used (expanded).")),(0,r.kt)("h2",{id:"macros"},"Macros"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Macros()\n")),(0,r.kt)("h4",{id:"dump"},"dump"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef dump(cls) -> List[Macro]\n")),(0,r.kt)("p",null,"Dumps all macros defined in the global context."),(0,r.kt)("p",null,"This is not 100% accurate, since macros can be defined multiple times,\nbut only the last definition is listed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  List of ",(0,r.kt)("inlineCode",{parentName:"p"},"Macro")," instances."),(0,r.kt)("h4",{id:"expand"},"expand"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@staticmethod\ndef expand(expression: str) -> str\n")),(0,r.kt)("p",null,"Expands an expression in the global context."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expression")," - Expression to expand.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  Expanded expression."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Raises"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RPMException")," - If expansion error occurs.")),(0,r.kt)("h4",{id:"remove"},"remove"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef remove(cls, macro: str) -> None\n")),(0,r.kt)("p",null,"Removes all definitions of a macro in the global context."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"macro")," - Macro name.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Raises"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MacroRemovalException")," - If there were too many unsuccessful\nretries to remove the macro.")),(0,r.kt)("h4",{id:"define"},"define"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef define(cls, macro: str, body: str) -> None\n")),(0,r.kt)("p",null,"Defines a macro in the global context."),(0,r.kt)("p",null,"Removes all existing definitions first. It is not possible to define a macro\nwith options. The new macro will always have ",(0,r.kt)("inlineCode",{parentName:"p"},"MacroLevel.OLDSPEC")," level."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"macro")," - Macro name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"body")," - Macro body.")),(0,r.kt)("h4",{id:"reinit"},"reinit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef reinit(cls, level_threshold: MacroLevel = MacroLevel.RPMRC) -> None\n")),(0,r.kt)("p",null,"Reinitializes macros in the global context."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"level_threshold")," - Only macros up to this level remain defined.")))}u.isMDXComponent=!0}}]);