"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[67799],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},72705:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Redict"},o=void 0,p={unversionedId:"specifics/redict",id:"specifics/redict",title:"Redict",description:"Seamless migration between providers",source:"@site/deployment/specifics/redict.md",sourceDirName:"specifics",slug:"/specifics/redict",permalink:"/deployment/specifics/redict",draft:!1,editUrl:"https://github.com/packit/deployment/tree/main/docs/deployment/specifics/redict.md",tags:[],version:"current",frontMatter:{title:"Redict"},sidebar:"autogenerated",previous:{title:"Packit Service",permalink:"/deployment/specifics/packit-service"},next:{title:"Testing Changes",permalink:"/deployment/testing-changes"}},l={},c=[{value:"Seamless migration between providers",id:"seamless-migration-between-providers",level:2}],s={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"seamless-migration-between-providers"},"Seamless migration between providers"),(0,a.kt)("p",null,"We have tested a seamless migration from Redis to Redict on our production\ndeployment. To reproduce:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We have deployed Redict to our production cluster."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Defaults have been changed to:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"with_redis: false\nwith_redict: true\n")),(0,a.kt)("p",{parentName:"li"},"These can be changed in their respective ",(0,a.kt)("inlineCode",{parentName:"p"},"vars/")," files.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"DEPLOYMENT=prod TAGS=redict make deploy\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Using remote shell and ",(0,a.kt)("inlineCode",{parentName:"p"},"redict-cli")," run:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"replicaof redis 6379\n")),(0,a.kt)("p",{parentName:"li"},"This converts the Redict instance into a read-only replica of the Redis.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the data exchange is done, change ",(0,a.kt)("strong",{parentName:"p"},"all")," references in variables to\nredis to point to the new hostname, in this case ",(0,a.kt)("inlineCode",{parentName:"p"},"redis \u2192 redict"),"."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"DEPLOYMENT=prod TAGS=packit-service-beat,fedmsg,packit-worker,packit-service make deploy\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Simultaneously run the deployment with the changed hostnames and via\n",(0,a.kt)("inlineCode",{parentName:"p"},"redict-cli")," run:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"replicaof no one\n")),(0,a.kt)("p",{parentName:"li"},"to make the redict deployment the primary one.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(optional) For safety reasons and easier rollback, it's possible to convert\nthe former Redis deployment into a replica of Redict, just in case it needs\nto be reverted without loss of data. For this you can run in ",(0,a.kt)("inlineCode",{parentName:"p"},"redis-cli"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"replicaof redict 6379\n")))),(0,a.kt)("admonition",{title:"References to Redis",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Redis is being referenced from:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"packit-service")," (API endpoint)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"packit-service-fedmsg")," (Fedora Messaging listener)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"packit-service-beat")," (triggers periodic tasks)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"packit-worker")," (runs the jobs provided by API, Fedora Messaging and \u201cbeat\u201d)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"flower")," (monitoring of the Celery queues)"))))}d.isMDXComponent=!0}}]);