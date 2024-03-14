"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[3908],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(i),m=n,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return i?a.createElement(f,o(o({ref:t},p),{},{components:i})):a.createElement(f,o({ref:t},p))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<r;d++)o[d]=i[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},49262:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));const r={title:"Bodhi updates",sidebar_position:3},o="job: bodhi_update",s={unversionedId:"configuration/downstream/bodhi_update",id:"configuration/downstream/bodhi_update",title:"Bodhi updates",description:"Create a new update in",source:"@site/docs/configuration/downstream/bodhi_update.md",sourceDirName:"configuration/downstream",slug:"/configuration/downstream/bodhi_update",permalink:"/docs/configuration/downstream/bodhi_update",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/configuration/downstream/bodhi_update.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Bodhi updates",sidebar_position:3},sidebar:"autogenerated",previous:{title:"Koji builds",permalink:"/docs/configuration/downstream/koji_build"},next:{title:"Downstream configuration template",permalink:"/docs/configuration/downstream_configuration_template"}},l={},d=[{value:"Supported triggers",id:"supported-triggers",level:2},{value:"Required parameters",id:"required-parameters",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Example",id:"example",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"job-bodhi_update"},(0,n.kt)("inlineCode",{parentName:"h1"},"job: bodhi_update")),(0,n.kt)("p",null,"Create a new update in\n",(0,n.kt)("a",{parentName:"p",href:"https://bodhi.fedoraproject.org"},"Fedora Bodhi")," for successful\nKoji build.\nA Packit config file needs to be in the dist-git repository\nto allow this job to be triggered.\nPackit loads the config from the default dist-git branch (usually ",(0,n.kt)("inlineCode",{parentName:"p"},"rawhide"),"). Packit configs on other branches are ignored."),(0,n.kt)("p",null,"For now, the Bodhi update is created only for builds submitted by the Packit FAS user.\n(See ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/downstream/koji_build"},(0,n.kt)("inlineCode",{parentName:"a"},"koji_build"))," job for more details on how to set this up.)\nThis is just for the early stage of this job, and\nwe can easily turn off that filter.\nLet us know if you need this condition to be removed."),(0,n.kt)("p",null,"There is no UI provided by Packit for the job,\nbut it is visible across Fedora systems\nlike a manually created Bodhi update, and you can utilise\n",(0,n.kt)("a",{parentName:"p",href:"https://apps.fedoraproject.org/notifications/about"},"Fedora Notifications"),"\nto tweak the notifications settings."),(0,n.kt)("p",null,"For retriggering the job, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/fedora-releases-guide/dist-git-onboarding#retriggering"},"our release guide"),"."),(0,n.kt)("admonition",{title:"Downstream configuration template",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can use our ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/downstream_configuration_template"},"downstream configuration template"),"\nfor creating your Packit configuration in dist-git repository.")),(0,n.kt)("admonition",{title:"Automate the setup",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can also use ",(0,n.kt)("a",{parentName:"p",href:"/docs/cli/dist-git/init"},"packit dist-git init")," CLI command to create your\nPackit dist-git configuration.")),(0,n.kt)("h2",{id:"supported-triggers"},"Supported triggers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"commit")," - Packit uses the original action as a config trigger, so you need to use ",(0,n.kt)("inlineCode",{parentName:"li"},"commit")," as a trigger.\nThe real trigger is a successful Koji build (that was triggered from a commit).")),(0,n.kt)("h2",{id:"required-parameters"},"Required parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"dist_git_branches")," - the name of the dist-git branch(es) the build we want to use is coming from.\nYou can also use the ",(0,n.kt)("a",{parentName:"li",href:"/docs/configuration#aliases"},"aliases provided by Packit"),"\nto not need to change the config file when the new system version is released.")),(0,n.kt)("h2",{id:"optional-parameters"},"Optional parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"allowed_builders")," - a list of accounts whose successful Koji builds will trigger Bodhi updates\n(defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"['packit']"),"). As each item of the list you can specify:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"name of a FAS account, e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"my-fas")),(0,n.kt)("li",{parentName:"ul"},"name of a group - starting with ",(0,n.kt)("inlineCode",{parentName:"li"},"@"),", e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"@my-sig")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"all_admins")," alias - allowing all users with admin access to the dist-git repo"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"all_committers")," alias - allowing all users with commit access to the dist-git repo")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"issue_repository: https://github.com/my-username/packit-notifications\n\njobs:\n- job: bodhi_update\n  trigger: commit\n  dist_git_branches:\n    - fedora-branched # rawhide updates are created automatically\n    - epel-8\n")))}c.isMDXComponent=!0}}]);