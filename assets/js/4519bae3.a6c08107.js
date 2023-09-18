"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[2224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"Deployment and testing strategies",authors:"lbarczio"},l=void 0,o={unversionedId:"deployment/verification",id:"deployment/verification",title:"Deployment and testing strategies",description:"Blue-Green deployment",source:"@site/research/deployment/verification.md",sourceDirName:"deployment",slug:"/deployment/verification",permalink:"/research/deployment/verification",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/deployment/verification.md",tags:[],version:"current",frontMatter:{title:"Deployment and testing strategies",authors:"lbarczio"},sidebar:"autogenerated",previous:{title:"Cloud databases",permalink:"/research/deployment/distributed-workers/AWS-SQS-RDS"},next:{title:"Workers scaling",permalink:"/research/deployment/workers-scaling"}},s={},u=[{value:"Blue-Green deployment",id:"blue-green-deployment",level:2},{value:"Canary deployment",id:"canary-deployment",level:2},{value:"A/B testing",id:"ab-testing",level:2},{value:"Shadow deployment",id:"shadow-deployment",level:2},{value:"Comparison",id:"comparison",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"blue-green-deployment"},"Blue-Green deployment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"two identical environments, a \u201cblue\u201d and a \u201cgreen\u201d environment with different versions\nof a service"),(0,a.kt)("li",{parentName:"ul"},"once the software is working in the green environment, router can be switched so that all incoming requests go to the\ngreen environment - the blue one is now idle"),(0,a.kt)("li",{parentName:"ul"},"replicating a production environment can be complex and expensive")),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"similar to our current approach in Packit service - staging and production environment"),(0,a.kt)("li",{parentName:"ul"},"requires more resources")),(0,a.kt)("h2",{id:"canary-deployment"},"Canary deployment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"running two versions of the application simultaneously - stable, canary"),(0,a.kt)("li",{parentName:"ul"},"the new version of the application is gradually deployed while getting a very small amount of live traffic"),(0,a.kt)("li",{parentName:"ul"},"test in production with real users and use cases and compare different service versions side by side"),(0,a.kt)("li",{parentName:"ul"},"based on the following assumptions:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"multiple versions of application can exist together at the same time, getting live traffic"),(0,a.kt)("li",{parentName:"ol"},"some customers might hit a production server in one request and a canary server in another\n(if no sticky session mechanism used)"))),(0,a.kt)("li",{parentName:"ul"},"usually the traffic is split based on weight (e.g. 90 percent of the requests go to new version, 10 percent go to old version)"),(0,a.kt)("li",{parentName:"ul"},"good for performance and error rate monitoring, when tests are unreliable or lacking")),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"for our use case this could be done on different levels, e.g. do the canary deployment only for the worker,\nalso for the service"),(0,a.kt)("li",{parentName:"ul"},"to split the traffic on the route level, it is possible to set up a route with multiple services (each service\ndifferent version) in Openshift with defining weight for each (",(0,a.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/3.11/architecture/networking/routes.html#alternateBackends"},"docs"),"):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: v1\nkind: Route\nmetadata:\n  name: route-alternate-service\n  annotations:\n    haproxy.router.openshift.io/balance: roundrobin\nspec:\n  host: www.example.com\n  to:\n    kind: Service\n    name: service-name\n    weight: 20\n  alternateBackends:\n  - kind: Service\n    name: service-name2\n    weight: 10\n  - kind: Service\n    name: service-name3\n    weight: 10\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"one service can back up more pods, grouping is done by labels"),(0,a.kt)("li",{parentName:"ul"},"Celery routing - also for retrying the jobs and routing them after failure to the stable version worker - requires\nchanges in code"),(0,a.kt)("li",{parentName:"ul"},"one database - inconsistency, change between versions and then simultaneous use is risky")),(0,a.kt)("h2",{id:"ab-testing"},"A/B testing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"different versions of the same service run simultaneously as \u201cexperiments\u201d in the same environment for a period of time"),(0,a.kt)("li",{parentName:"ul"},"released to subset of users under specific condition"),(0,a.kt)("li",{parentName:"ul"},"primarily focused on experimentation and exploration"),(0,a.kt)("li",{parentName:"ul"},"for testing new features")),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"probably not really relevant to us")),(0,a.kt)("h2",{id:"shadow-deployment"},"Shadow deployment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the new version is available alongside the old version, but a copy or forked version of traffic to the\nolder version is sent to the new version for production testing"),(0,a.kt)("li",{parentName:"ul"},"doesn\u2019t affect users"),(0,a.kt)("li",{parentName:"ul"},"service tested with production traffic"),(0,a.kt)("li",{parentName:"ul"},"more expensive, more complex setup")),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"lot of operations need to be mocked (e.g. so we don't set the Github status 2 times) - requires extra\ncoding work and doesn't verify the code so well")),(0,a.kt)("h2",{id:"comparison"},"Comparison"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/architecture/application-deployment-and-testing-strategies"},"Source")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Deployment or testing pattern"),(0,a.kt)("th",{parentName:"tr",align:null},"Zero downtime"),(0,a.kt)("th",{parentName:"tr",align:null},"Real production traffic testing"),(0,a.kt)("th",{parentName:"tr",align:null},"Releasing to users based on conditions"),(0,a.kt)("th",{parentName:"tr",align:null},"Rollback duration"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Blue/green (Version 2 is released alongside Version 1; the traffic is switched to Version 2 after it is tested. )"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"Instant")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Canary (Version 2 is released to a subset of users, followed by a full rollout.)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"Fast")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A/B (Version 2 is released, under specific conditions, to a subset of users.)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"Fast")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Shadow (Version 2 receives real-world traffic without impacting user requests.)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"Does not apply")))))}d.isMDXComponent=!0}}]);