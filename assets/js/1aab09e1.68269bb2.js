"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[5494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_label:"value_parser",title:"specfile.value_parser"},i=void 0,o={unversionedId:"api/specfile/value_parser",id:"api/specfile/value_parser",title:"specfile.value_parser",description:"Node",source:"@site/specfile/api/specfile/value_parser.md",sourceDirName:"api/specfile",slug:"/api/specfile/value_parser",permalink:"/specfile/api/specfile/value_parser",draft:!1,editUrl:"https://github.com/packit/specfile/tree/main/docs/specfile/api/specfile/value_parser.md",tags:[],version:"current",frontMatter:{sidebar_label:"value_parser",title:"specfile.value_parser"},sidebar:"autogenerated",previous:{title:"utils",permalink:"/specfile/api/specfile/utils"},next:{title:"specfile",permalink:"/specfile/"}},s={},p=[{value:"Node",id:"node",level:2},{value:"StringLiteral",id:"stringliteral",level:2},{value:"ShellExpansion",id:"shellexpansion",level:2},{value:"ExpressionExpansion",id:"expressionexpansion",level:2},{value:"MacroSubstitution",id:"macrosubstitution",level:2},{value:"EnclosedMacroSubstitution",id:"enclosedmacrosubstitution",level:2},{value:"ConditionalMacroExpansion",id:"conditionalmacroexpansion",level:2},{value:"BuiltinMacro",id:"builtinmacro",level:2},{value:"ValueParser",id:"valueparser",level:2},{value:"flatten",id:"flatten",level:4},{value:"parse",id:"parse",level:4},{value:"construct_regex",id:"construct_regex",level:4}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"node"},"Node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Node(ABC)\n")),(0,r.kt)("p",null,"Base class for all nodes."),(0,r.kt)("h2",{id:"stringliteral"},"StringLiteral"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class StringLiteral(Node)\n")),(0,r.kt)("p",null,"Node representing string literal."),(0,r.kt)("h2",{id:"shellexpansion"},"ShellExpansion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class ShellExpansion(Node)\n")),(0,r.kt)("p",null,"Node representing shell expansion, e.g. ",(0,r.kt)("em",{parentName:"p"},"%(whoami)"),"."),(0,r.kt)("h2",{id:"expressionexpansion"},"ExpressionExpansion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class ExpressionExpansion(ShellExpansion)\n")),(0,r.kt)("p",null,"Node representing expression expansion, e.g. ",(0,r.kt)("em",{parentName:"p"},"%","[1+1]"),"."),(0,r.kt)("h2",{id:"macrosubstitution"},"MacroSubstitution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class MacroSubstitution(Node)\n")),(0,r.kt)("p",null,"Node representing macro substitution, e.g. ",(0,r.kt)("em",{parentName:"p"},"%version"),"."),(0,r.kt)("h2",{id:"enclosedmacrosubstitution"},"EnclosedMacroSubstitution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class EnclosedMacroSubstitution(Node)\n")),(0,r.kt)("p",null,"Node representing macro substitution enclosed in brackets, e.g. ",(0,r.kt)("em",{parentName:"p"},"%","{","?dist","}"),"."),(0,r.kt)("h2",{id:"conditionalmacroexpansion"},"ConditionalMacroExpansion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class ConditionalMacroExpansion(Node)\n")),(0,r.kt)("p",null,"Node representing conditional macro expansion, e.g. ",(0,r.kt)("em",{parentName:"p"},"%","{","?prerel:0.","}"),"."),(0,r.kt)("h2",{id:"builtinmacro"},"BuiltinMacro"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class BuiltinMacro(Node)\n")),(0,r.kt)("p",null,"Node representing built-in macro, e.g. ",(0,r.kt)("em",{parentName:"p"},"%","{","quote:Ancient Greek","}"),"."),(0,r.kt)("h2",{id:"valueparser"},"ValueParser"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class ValueParser()\n")),(0,r.kt)("h4",{id:"flatten"},"flatten"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef flatten(cls, nodes: List[Node]) -> Generator[Node, None, None]\n")),(0,r.kt)("p",null,"Generator that yields flattened nodes. Conditional macro expansions are treated\nas if their conditions were true and their bodies are flattened."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nodes")," - List of nodes to be flattened.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Yields"),":"),(0,r.kt)("p",null,"  Individual nodes."),(0,r.kt)("h4",{id:"parse"},"parse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef parse(cls, value: str) -> List[Node]\n")),(0,r.kt)("p",null,"Parses a value into a list of nodes."),(0,r.kt)("p",null,"Follows the parsing logic of ",(0,r.kt)("inlineCode",{parentName:"p"},"expandMacro()")," from ",(0,r.kt)("em",{parentName:"p"},"rpm/rpmio/macro.c")," in RPM source."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," - Value string to parse.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  Parsed value as a list of nodes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Raises"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UnterminatedMacroException")," - If there is a macro that doesn","'","t end.")),(0,r.kt)("h4",{id:"construct_regex"},"construct","_","regex"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@classmethod\ndef construct_regex(\n    cls,\n    value: str,\n    modifiable_entities: Set[str],\n    flippable_entities: Set[str],\n    context: Optional["Specfile"] = None\n) -> Tuple[Pattern, Template, Set[str]]\n')),(0,r.kt)("p",null,"Parses the given value and constructs a regex that allows matching\nsubstrings of a different, but similar value to macro substitutions\nrepresenting modifiable entities, and to modifiable substrings\nof the original value.\nAlso constructs a corresponding template that allows updating\nthe original value."),(0,r.kt)("p",null,"For example, for nodes representing the string ",'"',"1.%","{","version_minor","}",'"',", assuming\n",'"',"version_minor",'"'," is a local macro definition (thus a modifiable entity),\nthe resulting regex would be ",'"',"^(?P","<","sub_0",">",")",".","(?P","<","version_minor",">",".+?)$",'"',",\nand the corresponding template would be ",'"',"$","{","sub_0","}",".%","{","version_minor","}",'"',".\nIf a requested new value would be a match to this regex, the ",'"',"version_minor",'"',"\nmacro definition could be modified with the matching substring and the final\nvalue could be determined by performing a substitution on the template\nwith groupdict of the match."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," - Value string to parse."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"modifiable_entities")," - Names of modifiable entities, i.e. local macro definitions\nand tags."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flippable_entities")," - Names of entities that can be enabled/disabled,\ni.e. macro definitions. Must be a subset of modifiable_entities."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"Specfile")," instance that defines the context for macro expansions.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  Tuple in the form of (constructed regex, corresponding template, entities to flip)."))}d.isMDXComponent=!0}}]);