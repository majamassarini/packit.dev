"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[23328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},57039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"Git Notes",authors:"phracek"},i=void 0,s={unversionedId:"git-notes/index",id:"git-notes/index",title:"Git Notes",description:"The aim of this research is to provide",source:"@site/research/git-notes/index.md",sourceDirName:"git-notes",slug:"/git-notes/",permalink:"/research/git-notes/",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/git-notes/index.md",tags:[],version:"current",frontMatter:{title:"Git Notes",authors:"phracek"},sidebar:"autogenerated",previous:{title:"Fedora package candidates for onboarding to downstream automation",permalink:"/research/fedora-packages-onboarding/"},next:{title:"Integrations",permalink:"/research/category/integrations"}},l={},p=[{value:"What git_notes.sh does?",id:"what-git_notessh-does",level:2},{value:"Can git notes be used as a database?",id:"can-git-notes-be-used-as-a-database",level:2},{value:"Can git notes be used for storing states?",id:"can-git-notes-be-used-for-storing-states",level:2},{value:"Can we check out the commit and its git notes?",id:"can-we-check-out-the-commit-and-its-git-notes",level:2},{value:"How to push and pull notes to / from git?",id:"how-to-push-and-pull-notes-to--from-git",level:2},{value:"Update .gitconfig for git notes support",id:"update-gitconfig-for-git-notes-support",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The aim of this research is to provide\na feedback around ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-notes"},"git notes")," command."),(0,a.kt)("p",null,"There's a ",(0,a.kt)("a",{target:"_blank",href:n(6448).Z},"git_notes.sh")," script, which\nadds number of notes into your ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," repository."),(0,a.kt)("h2",{id:"what-git_notessh-does"},"What git_notes.sh does?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add N-notes into your git repository.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The notes are added with ",(0,a.kt)("inlineCode",{parentName:"li"},'git node add -f -m "Testing notes ${cnt}\\npackit_test=yes" -m "json=${JSON_NOTE}" ${commit}'),":"))),(0,a.kt)("li",{parentName:"ul"},"Show all notes added by previous command"),(0,a.kt)("li",{parentName:"ul"},"Show specific (2th) note from git.")),(0,a.kt)("h2",{id:"can-git-notes-be-used-as-a-database"},"Can git notes be used as a database?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git notes"),' are basically one liners. We can use a separator and for\nsome things it can be used as a "database". The ',(0,a.kt)("a",{target:"_blank",href:n(6448).Z},"git_notes.sh")," script\nalso stores JSON object into git.\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"multiple")," ",(0,a.kt)("inlineCode",{parentName:"p"},"-m")," options are given, their values\nare concatenated as separate paragraphs."),(0,a.kt)("h2",{id:"can-git-notes-be-used-for-storing-states"},"Can git notes be used for storing states?"),(0,a.kt)("p",null,"Yes, but, first of all, we have to read note from specific commit and then\nappend the state into git note.\nOnly one note per one commit is allowed."),(0,a.kt)("p",null,"For 'editing' git notes, a command\n",(0,a.kt)("inlineCode",{parentName:"p"},'git note add -f -m "some message"')," has to be used.\n",(0,a.kt)("inlineCode",{parentName:"p"},"-f")," option is used for overwriting notes."),(0,a.kt)("h2",{id:"can-we-check-out-the-commit-and-its-git-notes"},"Can we check out the commit and its git notes?"),(0,a.kt)("p",null,"Yes, ",(0,a.kt)("inlineCode",{parentName:"p"},"git notes")," were designed for it. See ",(0,a.kt)("a",{target:"_blank",href:n(6448).Z},"git_notes.sh"),"."),(0,a.kt)("h2",{id:"how-to-push-and-pull-notes-to--from-git"},"How to push and pull notes to / from git?"),(0,a.kt)("p",null,"To push the notes into git use the command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin refs/notes/commits\n")),(0,a.kt)("p",null,"To pull the notes from git use the command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch origin refs/notes/commits:refs/notes/commits\n")),(0,a.kt)("h2",{id:"update-gitconfig-for-git-notes-support"},"Update .gitconfig for git notes support"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\n[remote "origin"]\n    fetch = +refs/notes/*:refs/notes/*\n')))}u.isMDXComponent=!0},6448:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/git_notes-77af9ebf71de76edbd031bf5dffd8214.sh"}}]);