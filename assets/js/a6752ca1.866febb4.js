"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[3593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Working on the next major RHEL release, in your upstream repo",date:new Date("2020-10-04T00:00:00.000Z"),authors:"ttomecek",tags:["downstream"]},i=void 0,l={permalink:"/posts/fedora-eln",editUrl:"https://github.com/packit/packit.dev/tree/main/posts/fedora-eln/index.md",source:"@site/posts/fedora-eln/index.md",title:"Working on the next major RHEL release, in your upstream repo",description:"Fedora EL Ni\xf1o (ELN) is such an",date:"2020-10-04T00:00:00.000Z",formattedDate:"October 4, 2020",tags:[{label:"downstream",permalink:"/posts/tags/downstream"}],readingTime:2.29,hasTruncateMarker:!0,authors:[{name:"Tom\xe1\u0161 Tome\u010dek",email:"ttomecek@redhat.com",url:"https://github.com/TomasTomecek",imageURL:"https://github.com/TomasTomecek.png",key:"ttomecek"}],frontMatter:{title:"Working on the next major RHEL release, in your upstream repo",date:"2020-10-04T00:00:00.000Z",authors:"ttomecek",tags:["downstream"]},prevItem:{title:"2021 in Numbers",permalink:"/posts/2021-in-numbers"}},s={authorsImageUrls:[void 0]},p=[{value:"You can do this easily with Packit",id:"you-can-do-this-easily-with-packit",level:3},{value:"A real-life example",id:"a-real-life-example",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.fedoraproject.org/en-US/eln/"},"Fedora EL Ni\xf1o")," (ELN) is such an\nawesome idea. It enables building rawhide packages in two distinct buildroots:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"the standard Fedora Rawhide buildroot and"),(0,r.kt)("li",{parentName:"ol"},"a second one, which mimics Red Hat Enterprise Linux")),(0,r.kt)("p",null,"This way you can make sure that your new upstream release builds fine in the\nnext RHEL."),(0,r.kt)("p",null,"But this feedback might be a little bit too late: the upstream\nrelease already happened and the code was imported in Fedora dist-git, so\nfixing an issue will require repeating the whole process. Wouldn't it be better\nto know if the upstream change builds fine in ELN ",(0,r.kt)("strong",{parentName:"p"},"while")," working on the\ncode?"),(0,r.kt)("p",null,"Oh, wait!"),(0,r.kt)("h3",{id:"you-can-do-this-easily-with-packit"},"You can do this easily with Packit"),(0,r.kt)("p",null,"If your GitHub project is not using Packit yet, ",(0,r.kt)("a",{parentName:"p",href:"https://packit.dev/docs/guide"},"here's a\nguide")," how to start."),(0,r.kt)("p",null,"Once it's set up, you need to make sure that your pull requests are also being\nbuilt in the ",(0,r.kt)("inlineCode",{parentName:"p"},"fedora-eln")," target:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"jobs:\n  - job: copr_build\n    trigger: pull_request\n    metadata:\n      targets:\n        - fedora-development\n        - fedora-eln\n")),(0,r.kt)("p",null,"With this config, changes from every pull request will be built in all\ndevelopment versions of Fedora (at the time of writing this, it's Rawhide and\nFedora 33) and in Fedora ELN."),(0,r.kt)("p",null,"Easy, right?"),(0,r.kt)("p",null,"Packit can also trigger builds when you push to a branch. If you want to have\nup to date builds of your main branch for ELN and development versions of\nFedora, here's how to set it up:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"jobs:\n  - job: copr_build\n    trigger: commit\n    metadata:\n      targets:\n        - fedora-development\n        - fedora-eln\n      branch: main\n")),(0,r.kt)("h3",{id:"a-real-life-example"},"A real-life example"),(0,r.kt)("p",null,"If you got here and you're still not sure why you'd need this, I can give\nyou a real-life example."),(0,r.kt)("p",null,"Recently, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jkonecny12"},"Jirka Konecny")," from the RHEL\nInstaller team reached out to us that they would love to use Packit as a CI\nsystem. He set it up and now all the anaconda PRs are being built and tested on\n",(0,r.kt)("inlineCode",{parentName:"p"},"Fedora Rawhide x86_64"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Anaconda PR passing tests",src:n(36356).Z,width:"1205",height:"725"})),(0,r.kt)("p",null,"Jirka continued and added Fedora ELN as an additional target. The build failed\nbecause one of build requirements was not available in ELN:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Fedora ELN - Developmental modular packages for the next Enterprise Linux release               2.7 kB/s | 2.3 kB     00:0\nNo matching package to install: 'metacity'\nNot all dependencies satisfied\nError: Some packages could not be found.\n")),(0,r.kt)("p",null,"Since the team discovered this during their upstream development process, they\ncan react to the issue right away. It would have been pretty late if they found this\nwhile the next major RHEL is reaching alpha - at this moment they should\nhave enough time to fix the problem and make sure anaconda builds fine in ELN."),(0,r.kt)("p",null,"So, are you convinced? Let us know if you need help setting up Packit in your\nupstream repositories :)"))}c.isMDXComponent=!0},36356:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/anaconda-rawhide-tests-passing-4fd8c7a3455a72981b0fe9509fdd48fb.png"}}]);