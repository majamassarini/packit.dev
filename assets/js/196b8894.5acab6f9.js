"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[97840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=m(n),c=o,k=s["".concat(p,".").concat(c)]||s[c]||d[c]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},63418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(87462),o=(n(67294),n(3905));const r={title:"Continuous Deployment"},i="Continuous Deployment",l={unversionedId:"continuous-deployment",id:"continuous-deployment",title:"Continuous Deployment",description:"Automatic redeployment",source:"@site/deployment/continuous-deployment.md",sourceDirName:".",slug:"/continuous-deployment",permalink:"/deployment/continuous-deployment",draft:!1,editUrl:"https://github.com/packit/deployment/tree/main/docs/deployment/continuous-deployment.md",tags:[],version:"current",frontMatter:{title:"Continuous Deployment"},sidebar:"autogenerated",previous:{title:"Deployment",permalink:"/deployment/"},next:{title:"Images",permalink:"/deployment/images"}},p={},m=[{value:"Automatic redeployment",id:"automatic-redeployment",level:2},{value:"Details",id:"details",level:3},{value:"Manual production re-deployment",id:"manual-production-re-deployment",level:2},{value:"Manually import a newer image",id:"manually-import-a-newer-image",level:2},{value:"Details",id:"details-1",level:3},{value:"Reverting to older deployment/revision/image",id:"reverting-to-older-deploymentrevisionimage",level:2}],u={toc:m},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"continuous-deployment"},"Continuous Deployment"),(0,o.kt)("h2",{id:"automatic-redeployment"},"Automatic redeployment"),(0,o.kt)("p",null,"tl;dr"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Newer images in registry are automatically imported and re-deployed.")),(0,o.kt)("h3",{id:"details"},"Details"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/latest/openshift_images/image-streams-manage.html"},"ImageStreams"),"\nas intermediary between an image registry (Quay.io) and a Deployment/StatefulSet.\nIt has several significant benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We can automatically trigger Deployment when a new image is pushed to the registry."),(0,o.kt)("li",{parentName:"ul"},"We can roll back/revert/undo the Deployment.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Image registry")," \u2192 ",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u2192 ",(0,o.kt)("inlineCode",{parentName:"p"},"ImageStream")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"StatefulSet")),(0,o.kt)("h2",{id:"manual-production-re-deployment"},"Manual production re-deployment"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Trigger ",(0,o.kt)("inlineCode",{parentName:"p"},":prod")," images builds"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/packit/deployment/blob/main/scripts/move_stable.py"},"scripts/move_stable.py")," to move ",(0,o.kt)("inlineCode",{parentName:"li"},"stable")," branches to a newer commit."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Import images -> re-deploy"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you don't want to wait for ",(0,o.kt)("a",{parentName:"li",href:"#continuous-deployment"},"it to be done automatically"),", you can\n",(0,o.kt)("a",{parentName:"li",href:"#manually-import-a-newer-image"},"do that manually")," once the images are built (check Actions in each repo).")))),(0,o.kt)("h2",{id:"manually-import-a-newer-image"},"Manually import a newer image"),(0,o.kt)("p",null,"tl;dr"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"DEPLOYMENT=prod make import-images"))),(0,o.kt)("h3",{id:"details-1"},"Details"),(0,o.kt)("p",null,"If you need to import (and deploy) newer image(s) before the ",(0,o.kt)("inlineCode",{parentName:"p"},"CronJob")," does\n(see above), you can do that manually:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ oc get is\n$ oc import-image is/$NAME:prod\n")),(0,o.kt)("p",null,"once a new image is pushed/built in registry. (",(0,o.kt)("inlineCode",{parentName:"p"},"$NAME")," is name of an image stream from ",(0,o.kt)("inlineCode",{parentName:"p"},"oc get is"),")"),(0,o.kt)("p",null,"There's also ",(0,o.kt)("inlineCode",{parentName:"p"},"import-images")," target in the Makefile, so ",(0,o.kt)("inlineCode",{parentName:"p"},"DEPLOYMENT=prod make import-images")," does this for you for all images (image streams)."),(0,o.kt)("p",null,"To see the history of imported images in an image stream:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ oc describe is/$NAME:prod\n")),(0,o.kt)("h2",{id:"reverting-to-older-deploymentrevisionimage"},"Reverting to older deployment/revision/image"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Deployment"),"s can be reverted with ",(0,o.kt)("inlineCode",{parentName:"p"},"oc rollout undo"),", example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ oc rollout undo deploy/packit-service [--to-revision=X]\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," is revision number.\nSee also ",(0,o.kt)("inlineCode",{parentName:"p"},"oc rollout history deploy/packit-service [--revision=X]"),"."),(0,o.kt)("p",null,"It's more tricky in case of ",(0,o.kt)("inlineCode",{parentName:"p"},"StatefulSet")," which we use for workers.\n",(0,o.kt)("inlineCode",{parentName:"p"},"oc rollout undo")," does not work with ",(0,o.kt)("inlineCode",{parentName:"p"},"StatefulSet")," for us\n(the newest image is always used, reason unknown).\nSo when you happen to deploy a broken worker, and you want to revert/undo it\nbecause you don't know what's the cause/fix yet, you have to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select older image (hash)"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ oc describe is/packit-worker\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tag the older image"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ oc tag --source=docker quay.io/packit/packit-worker@sha256:\u2039older-hash\u203a \\\n      packit-prod/packit-worker:\u2039deployment\u203a\n")),(0,o.kt)("p",{parentName:"li"},"And see the ",(0,o.kt)("inlineCode",{parentName:"p"},"packit-worker-x")," pods being re-deployed from the older image.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you've built a fixed image, run"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ oc tag quay.io/packit/packit-worker:\u2039deployment\u203a \\\n    packit-prod/packit-worker:\u2039deployment\u203a\n")))),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"This is automatic (it can even take some time) on stg, but not on prod.\nOn prod, where we don't want the images to\nbe imported as soon as they're built, we run a\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/packit/deployment/blob/main/cron-jobs/import-images/job-import-images.yaml"},"CronJob"),"\nto import them (and hence re-deploy) at the day & time (currently at 2AM on Tuesday) we want.",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);