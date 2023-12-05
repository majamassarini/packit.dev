"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[1434],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=n,h=c["".concat(s,".").concat(f)]||c[f]||m[f]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15332:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Zuul CI",authors:["ttomecek","jpopelka"]},i=void 0,l={unversionedId:"testing/zuul",id:"testing/zuul",title:"Zuul CI",description:"Outdated, see https://github.com/packit-service/packit-service-zuul",source:"@site/research/testing/zuul.md",sourceDirName:"testing",slug:"/testing/zuul",permalink:"/research/testing/zuul",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/testing/zuul.md",tags:[],version:"current",frontMatter:{title:"Zuul CI",authors:["ttomecek","jpopelka"]},sidebar:"autogenerated",previous:{title:"Research Openshift tests in Zuul alternatives",permalink:"/research/testing/openshift-zuul-test-alternatives"},next:{title:"User Interface",permalink:"/research/category/user-interface"}},s={},p=[{value:"On-boarding",id:"on-boarding",level:2},{value:"Assorted notes &amp; Gotchas",id:"assorted-notes--gotchas",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Outdated, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/packit-service/packit-service-zuul"},"https://github.com/packit-service/packit-service-zuul"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://zuul-ci.org/"},"Zuul")," is a CI system invented in OpenStack community.\n",(0,n.kt)("a",{parentName:"p",href:"https://softwarefactory-project.io"},"Softwarefactory")," (SF) is project which is hosting a bunch of services to ease\ndevelopment of open source projects. Zuul is one of the services."),(0,n.kt)("p",null,"Zuul is a heavy Ansible user."),(0,n.kt)("h2",{id:"on-boarding"},"On-boarding"),(0,n.kt)("p",null,"In-order to get on-board SF, you need to do these things:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Let Zuul know about your repo: ",(0,n.kt)("a",{parentName:"p",href:"https://softwarefactory-project.io/r/15927"},"https://softwarefactory-project.io/r/15927")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ansible.softwarefactory-project.io/docs/user/config_repo.html#config-repo"},"Docs")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Install SF GitHub app: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apps/softwarefactory-project-zuul"},"softwarefactory-project-zuul"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create .zuul.yaml and define noop job inside to test the connection: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/packit-service/ogr/pull/120/commits/23046836e2774a1c5de6620d93d9a88b21a98751"},"https://github.com/packit-service/ogr/pull/120/commits/23046836e2774a1c5de6620d93d9a88b21a98751"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://ansible.softwarefactory-project.io/docs/user/zuul_user.html"},"Zuul SF Documentation")))),(0,n.kt)("h2",{id:"assorted-notes--gotchas"},"Assorted notes & Gotchas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Zuul accepts a config file named .zuul.yaml: it can be in the root of your repo (or somewhere else, which is pretty confusing).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Results: once the testing is done, there is a new comment posted in the PR with links to each job: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/packit-service/ogr/pull/120#issuecomment-511790688"},"https://github.com/packit-service/ogr/pull/120#issuecomment-511790688")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ARA report contains GUI for the playbook run: ",(0,n.kt)("a",{parentName:"li",href:"https://softwarefactory-project.io/logs/20/120/2e2b6a2c173b8be04c33c94fd75fa2d1febbecba/check/tests/e9adb06/"},"https://softwarefactory-project.io/logs/20/120/2e2b6a2c173b8be04c33c94fd75fa2d1febbecba/check/tests/e9adb06/")),(0,n.kt)("li",{parentName:"ul"},"There is also a zuul-info/ directory with Ansible vars and generated inventory file (which contains Zuul Ansible vars)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Zuul is a fairly complex system and can feel intimidating for a beginner (I'm still scared). The core building block of Zuul is a job:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://zuul-ci.org/docs/zuul/user/config.html#job"},"Job documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://zuul-ci.org/docs/zuul/user/jobs.html#job-content"},"Different job documentation")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This is where your locally cloned repo is: ",(0,n.kt)("inlineCode",{parentName:"p"},'project_dir: "{{ ansible_user_dir }}/{{ zuul.project.src_dir }}"')),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Executor: A piece of Zuul's infra where Ansible is being invoked"),(0,n.kt)("li",{parentName:"ul"},"Node: a VM where our tests are running"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A list of available nodes which are available for testing: ",(0,n.kt)("a",{parentName:"p",href:"https://softwarefactory-project.io/zuul/t/local/labels"},"https://softwarefactory-project.io/zuul/t/local/labels"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A repo with existing jobs, playbooks and roles which OpenStack is using: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/openstack-infra/zuul-jobs/blob/master/zuul.yaml"},"https://github.com/openstack-infra/zuul-jobs/blob/master/zuul.yaml"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"More useful links:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Existing SF jobs: ",(0,n.kt)("a",{parentName:"li",href:"https://softwarefactory-project.io/cgit/config/tree/zuul.d/_jobs-base.yaml#n58"},"https://softwarefactory-project.io/cgit/config/tree/zuul.d/_jobs-base.yaml#n58")),(0,n.kt)("li",{parentName:"ul"},"Our Zuul tenant: ",(0,n.kt)("a",{parentName:"li",href:"https://softwarefactory-project.io/zuul/t/local/status"},"https://softwarefactory-project.io/zuul/t/local/status")),(0,n.kt)("li",{parentName:"ul"},"Zuul pipelines defined in SF: ",(0,n.kt)("a",{parentName:"li",href:"https://softwarefactory-project.io/cgit/config/tree/zuul.d/_pipelines.yaml"},"https://softwarefactory-project.io/cgit/config/tree/zuul.d/_pipelines.yaml")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can join internal IRC channel #sf-ops for questions. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/morucci"},"Fabien")," is super-duper helpful.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Good luck and have fun!"))))}m.isMDXComponent=!0}}]);