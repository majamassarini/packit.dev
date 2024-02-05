"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[155],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=l,k=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:l,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const i={sidebar_label:"tags",title:"specfile.tags"},r=void 0,s={unversionedId:"api/specfile/tags",id:"api/specfile/tags",title:"specfile.tags",description:"get\\tag\\name\\_regex",source:"@site/specfile/api/specfile/tags.md",sourceDirName:"api/specfile",slug:"/api/specfile/tags",permalink:"/specfile/api/specfile/tags",draft:!1,editUrl:"https://github.com/packit/specfile/tree/main/docs/specfile/api/specfile/tags.md",tags:[],version:"current",frontMatter:{sidebar_label:"tags",title:"specfile.tags"},sidebar:"autogenerated",previous:{title:"spec_parser",permalink:"/specfile/api/specfile/spec_parser"},next:{title:"utils",permalink:"/specfile/api/specfile/utils"}},o={},p=[{value:"get_tag_name_regex",id:"get_tag_name_regex",level:4},{value:"Comment",id:"comment",level:2},{value:"Comments",id:"comments",level:2},{value:"__init__",id:"__init__",level:4},{value:"raw",id:"raw",level:4},{value:"parse",id:"parse",level:4},{value:"Tag",id:"tag",level:2},{value:"__init__",id:"__init__-1",level:4},{value:"normalized_name",id:"normalized_name",level:4},{value:"expanded_value",id:"expanded_value",level:4},{value:"get_position",id:"get_position",level:4},{value:"Tags",id:"tags",level:2},{value:"__init__",id:"__init__-2",level:4},{value:"find",id:"find",level:4},{value:"parse",id:"parse-1",level:4},{value:"get_raw_section_data",id:"get_raw_section_data",level:4}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"get_tag_name_regex"},"get","_","tag","_","name","_","regex"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_tag_name_regex(name: str) -> str\n")),(0,l.kt)("p",null,"Contructs regex corresponding to the specified tag name."),(0,l.kt)("h2",{id:"comment"},"Comment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Comment()\n")),(0,l.kt)("p",null,"Class that represents a comment."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text")," - Text of the comment."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prefix")," - Comment prefix (hash character usually surrounded by some amount of whitespace).")),(0,l.kt)("h2",{id:"comments"},"Comments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Comments(UserList[Comment])\n")),(0,l.kt)("p",null,"Class that represents comments associated with a tag, that is consecutive comment lines\nlocated directly above a tag definition."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data")," - List of individual comments.")),(0,l.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(data: Optional[List[Comment]] = None,\n             preceding_lines: Optional[List[str]] = None) -> None\n")),(0,l.kt)("p",null,"Initializes a comments object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data")," - List of individual comments."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"preceding_lines")," - Extra lines that precede comments associated with a tag.")),(0,l.kt)("h4",{id:"raw"},"raw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef raw() -> List[str]\n")),(0,l.kt)("p",null,"List of comment texts"),(0,l.kt)("h4",{id:"parse"},"parse"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'@classmethod\ndef parse(cls, lines: List[str]) -> "Comments"\n')),(0,l.kt)("p",null,"Parses list of lines into comments."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lines")," - List of lines that precede a tag definition.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  New instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"Comments")," class."),(0,l.kt)("h2",{id:"tag"},"Tag"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Tag()\n")),(0,l.kt)("p",null,"Class that represents a spec file tag."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," - Name of the tag."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," - Literal value of the tag as stored in the spec file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"comments")," - List of comments associated with the tag.")),(0,l.kt)("h4",{id:"__init__-1"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(name: str,\n             value: str,\n             separator: str,\n             comments: Comments,\n             valid: bool = True,\n             prefix: Optional[str] = None,\n             suffix: Optional[str] = None,\n             context: Optional["Specfile"] = None) -> None\n')),(0,l.kt)("p",null,"Initializes a tag object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," - Name of the tag."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," - Literal value of the tag as stored in the spec file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"separator")," - Separator between name and literal value (colon usually surrounded by some\namount of whitespace)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"comments")," - List of comments associated with the tag."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"valid")," - Whether the tag is not located in a false branch of a condition."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prefix")," - Characters preceding the tag on a line."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"suffix")," - Characters following the tag on a line."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"context")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Specfile")," instance that defines the context for macro expansions.")),(0,l.kt)("h4",{id:"normalized_name"},"normalized","_","name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef normalized_name() -> str\n")),(0,l.kt)("p",null,"Normalized name of the tag. The first character is capitalized\nand the rest lowercased."),(0,l.kt)("h4",{id:"expanded_value"},"expanded","_","value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef expanded_value() -> Optional[str]\n")),(0,l.kt)("p",null,"Value of the tag after expanding macros."),(0,l.kt)("h4",{id:"get_position"},"get","_","position"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def get_position(container: "Tags") -> int\n')),(0,l.kt)("p",null,"Gets position of this tag in a section."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"container")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Tags")," instance that contains this tag.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  Position expressed as line number (starting from 0)."),(0,l.kt)("h2",{id:"tags"},"Tags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Tags(UserList[Tag])\n")),(0,l.kt)("p",null,"Class that represents all tags in a certain %package section."),(0,l.kt)("p",null,"Tags can be accessed by index or conveniently by name as attributes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# print name of the first tag\nprint(tags[0].name)\n\n# set value of Url tag\ntags.url = 'https://example.com'\n\n# remove Source1 tag\ndel tags.source1\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data")," - List of individual tags.")),(0,l.kt)("h4",{id:"__init__-2"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(data: Optional[List[Tag]] = None,\n             remainder: Optional[List[str]] = None) -> None\n")),(0,l.kt)("p",null,"Initializes a tags object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data")," - List of individual tags."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"remainder")," - Leftover lines in a section that can","'","t be parsed into tags.")),(0,l.kt)("h4",{id:"find"},"find"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def find(name: str, position: Optional[int] = None) -> int\n")),(0,l.kt)("p",null,"Finds a tag with the specified name. If position is not specified,\nreturns the first valid matching tag. If there is no such tag, returns\nthe first match, if any. If position is specified and there is a matching\ntag at that position, it is returned, otherwise ",(0,l.kt)("inlineCode",{parentName:"p"},"ValueError")," is raised."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," - Name of the tag to find."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"position")," - Optional position in the spec file.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  Index of the matching tag."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Raises"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ValueError")," - If there is no match.")),(0,l.kt)("h4",{id:"parse-1"},"parse"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'@classmethod\ndef parse(cls,\n          section: Section,\n          context: Optional["Specfile"] = None) -> "Tags"\n')),(0,l.kt)("p",null,"Parses a section into tags."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"section")," - Section to parse."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"context")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Specfile")," instance that defines the context for macro expansions.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  New instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"Tags")," class."),(0,l.kt)("h4",{id:"get_raw_section_data"},"get","_","raw","_","section","_","data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_raw_section_data() -> List[str]\n")),(0,l.kt)("p",null,"Reconstructs section data from tags."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  List of lines forming the reconstructed section data."))}c.isMDXComponent=!0}}]);