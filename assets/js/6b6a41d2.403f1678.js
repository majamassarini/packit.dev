"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[6424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_label:"sourcelist",title:"specfile.sourcelist"},l=void 0,o={unversionedId:"api/specfile/sourcelist",id:"api/specfile/sourcelist",title:"specfile.sourcelist",description:"SourcelistEntry",source:"@site/specfile/api/specfile/sourcelist.md",sourceDirName:"api/specfile",slug:"/api/specfile/sourcelist",permalink:"/specfile/api/specfile/sourcelist",draft:!1,editUrl:"https://github.com/packit/specfile/tree/main/docs/specfile/api/specfile/sourcelist.md",tags:[],version:"current",frontMatter:{sidebar_label:"sourcelist",title:"specfile.sourcelist"},sidebar:"autogenerated",previous:{title:"sections",permalink:"/specfile/api/specfile/sections"},next:{title:"sources",permalink:"/specfile/api/specfile/sources"}},s={},c=[{value:"SourcelistEntry",id:"sourcelistentry",level:2},{value:"__init__",id:"__init__",level:4},{value:"expanded_location",id:"expanded_location",level:4},{value:"Sourcelist",id:"sourcelist",level:2},{value:"__init__",id:"__init__-1",level:4},{value:"parse",id:"parse",level:4},{value:"get_raw_section_data",id:"get_raw_section_data",level:4}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sourcelistentry"},"SourcelistEntry"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class SourcelistEntry()\n")),(0,r.kt)("p",null,"Class that represents a spec file source/patch in a ",(0,r.kt)("em",{parentName:"p"},"%sourcelist"),"/",(0,r.kt)("em",{parentName:"p"},"%patchlist"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"location")," - Literal location of the source/patch as stored in the spec file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"comments")," - List of comments associated with the source/patch."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valid")," - Whether the entry is not located in a false branch of a condition.")),(0,r.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(location: str,\n             comments: Comments,\n             valid: bool = True,\n             context: Optional["Specfile"] = None) -> None\n')),(0,r.kt)("p",null,"Initializes a sourcelist entry object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"location")," - Literal location of the source/patch as stored in the spec file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"comments")," - List of comments associated with the source/patch."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valid")," - Whether the entry is not located in a false branch of a condition."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"Specfile")," instance that defines the context for macro expansions.")),(0,r.kt)("h4",{id:"expanded_location"},"expanded","_","location"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef expanded_location() -> str\n")),(0,r.kt)("p",null,"URL of the source/patch after expanding macros."),(0,r.kt)("h2",{id:"sourcelist"},"Sourcelist"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Sourcelist(UserList[SourcelistEntry])\n")),(0,r.kt)("p",null,"Class that represents entries in a ",(0,r.kt)("em",{parentName:"p"},"%sourcelist"),"/",(0,r.kt)("em",{parentName:"p"},"%patchlist")," section."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data")," - List of individual sources/patches.")),(0,r.kt)("h4",{id:"__init__-1"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(data: Optional[List[SourcelistEntry]] = None,\n             remainder: Optional[List[str]] = None) -> None\n")),(0,r.kt)("p",null,"Initializes a sourcelist object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data")," - List of individual sources/patches."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remainder")," - Leftover lines in a section that can","'","t be parsed into sources/patches.")),(0,r.kt)("h4",{id:"parse"},"parse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@classmethod\ndef parse(cls,\n          section: Section,\n          context: Optional["Specfile"] = None) -> "Sourcelist"\n')),(0,r.kt)("p",null,"Parses a section into sources/patches."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"section")," - ",(0,r.kt)("em",{parentName:"li"},"%sourcelist"),"/",(0,r.kt)("em",{parentName:"li"},"%patchlist")," section."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"Specfile")," instance that defines the context for macro expansions.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  New instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Sourcelist")," class."),(0,r.kt)("h4",{id:"get_raw_section_data"},"get","_","raw","_","section","_","data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def get_raw_section_data() -> List[str]\n")),(0,r.kt)("p",null,"Reconstructs section data from sources/patches."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  List of lines forming the reconstructed section data."))}m.isMDXComponent=!0}}]);