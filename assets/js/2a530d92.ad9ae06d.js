"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[88372],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,b=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(b,s(s({ref:n},d),{},{components:t})):r.createElement(b,s({ref:n},d))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={title:"Statistics as of September '22",authors:"mfocko"},s=void 0,l={unversionedId:"integrations/building-srpm-in-copr/september-2022",id:"integrations/building-srpm-in-copr/september-2022",title:"Statistics as of September '22",description:"Building of SRPMs in Copr has been merged on service' side on January 25th '22.",source:"@site/research/integrations/building-srpm-in-copr/september-2022.md",sourceDirName:"integrations/building-srpm-in-copr",slug:"/integrations/building-srpm-in-copr/september-2022",permalink:"/research/integrations/building-srpm-in-copr/september-2022",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/integrations/building-srpm-in-copr/september-2022.md",tags:[],version:"current",frontMatter:{title:"Statistics as of September '22",authors:"mfocko"},sidebar:"autogenerated",previous:{title:"Building SRPMs in Copr",permalink:"/research/integrations/building-srpm-in-copr/"},next:{title:"console.redhat.com provisioning",permalink:"/research/integrations/console"}},o={},p=[{value:"tl;dr",id:"tldr",level:2},{value:"Count all SRPM builds since SRPM build in Copr was merged",id:"count-all-srpm-builds-since-srpm-build-in-copr-was-merged",level:2},{value:"Count all SRPM builds done in Copr",id:"count-all-srpm-builds-done-in-copr",level:2},{value:"Inspect the usage of SRPM builds in Copr by the trigger",id:"inspect-the-usage-of-srpm-builds-in-copr-by-the-trigger",level:2},{value:"Failed SRPM builds in Copr",id:"failed-srpm-builds-in-copr",level:2},{value:"Projects using Copr",id:"projects-using-copr",level:2},{value:"Pull requests",id:"pull-requests",level:3},{value:"Branch pushes",id:"branch-pushes",level:3},{value:"Releases",id:"releases",level:3},{value:"Projects \xbbnot\xab using Copr",id:"projects-not-using-copr",level:2},{value:"Pull requests",id:"pull-requests-1",level:3},{value:"Branch pushes",id:"branch-pushes-1",level:3},{value:"Releases",id:"releases-1",level:3},{value:"Projects not using Copr in the last 3 months",id:"projects-not-using-copr-in-the-last-3-months",level:2},{value:"Pull requests",id:"pull-requests-2",level:3},{value:"Branch pushes",id:"branch-pushes-2",level:3},{value:"Releases",id:"releases-2",level:3},{value:"Notes",id:"notes",level:2},{value:"Trigger type mapping",id:"trigger-type-mapping",level:3},{value:"Queries",id:"queries",level:3}],d={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Building of SRPMs in Copr has been merged on service' side on January 25th '22."),(0,a.kt)("h2",{id:"tldr"},"tl;dr"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"232k SRPMs built since 25th January."),(0,a.kt)("li",{parentName:"ul"},"119k of them built in Copr."),(0,a.kt)("li",{parentName:"ul"},"3.14% of SRPMs built in Copr failed."),(0,a.kt)("li",{parentName:"ul"},"3x more projects not using Copr for SRPM builds.")),(0,a.kt)("h2",{id:"count-all-srpm-builds-since-srpm-build-in-copr-was-merged"},"Count all SRPM builds since SRPM build in Copr was merged"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*) FROM srpm_builds INNER JOIN pipelines ON srpm_builds.id=srpm_build_id INNER JOIN job_triggers ON job_trigger_id=job_triggers.id WHERE datetime >= '2022-01-25';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," count\n--------\n 232672\n")),(0,a.kt)("h2",{id:"count-all-srpm-builds-done-in-copr"},"Count all SRPM builds done in Copr"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*) FROM srpm_builds INNER JOIN pipelines ON srpm_builds.id=srpm_build_id INNER JOIN job_triggers ON job_trigger_id=job_triggers.id WHERE datetime >= '2022-01-25' AND srpm_builds.copr_build_id <> '';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," count\n--------\n 119457\n")),(0,a.kt)("p",null,"Overall we get 51.34% of SRPM builds done in Copr."),(0,a.kt)("h2",{id:"inspect-the-usage-of-srpm-builds-in-copr-by-the-trigger"},"Inspect the usage of SRPM builds in Copr by the trigger"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*) FROM srpm_builds INNER JOIN pipelines ON srpm_builds.id=srpm_build_id INNER JOIN job_triggers ON job_trigger_id=job_triggers.id where srpm_builds.copr_build_id <> '' AND type='\u2039type goes here\u203a';\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Trigger type"),(0,a.kt)("th",{parentName:"tr",align:null},"Count"),(0,a.kt)("th",{parentName:"tr",align:null},"Percentage"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,a.kt)("td",{parentName:"tr",align:null},"110190"),(0,a.kt)("td",{parentName:"tr",align:null},"92.24")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"branch_push")),(0,a.kt)("td",{parentName:"tr",align:null},"8805"),(0,a.kt)("td",{parentName:"tr",align:null},"7.37")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"release")),(0,a.kt)("td",{parentName:"tr",align:null},"402"),(0,a.kt)("td",{parentName:"tr",align:null},"0.34")))),(0,a.kt)("h2",{id:"failed-srpm-builds-in-copr"},"Failed SRPM builds in Copr"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*) FROM srpm_builds INNER JOIN pipelines ON srpm_builds.id=srpm_build_id INNER JOIN job_triggers ON job_trigger_id=job_triggers.id where srpm_builds.copr_build_id <> '' AND status='failure';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," count\n-------\n  3758\n")),(0,a.kt)("p",null,"Overall 3.14% of SRPM builds done in Copr are failed."),(0,a.kt)("h2",{id:"projects-using-copr"},"Projects using Copr"),(0,a.kt)("h3",{id:"pull-requests"},"Pull requests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      namespace\n----------------------\n jkonecny12\n sdaps\n nmstate\n rhinstaller\n LenkaSeg\n cockpit-project\n ansible-community\n StephenCoady\n evverx\n osbuild\n systemd\n TomasTomecek\n martinpitt\n oamg\n storaged-project\n fedora-infra\n systemd-ci-incubator\n avocado-framework\n mfocko\n packit\n redhat-performance\n(21 rows)\n")),(0,a.kt)("h3",{id:"branch-pushes"},"Branch pushes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   namespace\n---------------\n jkonecny12\n majamassarini\n mfocko\n oamg\n osbuild\n packit\n rhinstaller\n(7 rows)\n")),(0,a.kt)("h3",{id:"releases"},"Releases"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    namespace\n-----------------\n cockpit-project\n fedora-infra\n martinpitt\n osbuild\n packit\n StephenCoady\n(6 rows)\n")),(0,a.kt)("h2",{id:"projects-not-using-copr"},"Projects \xbbnot\xab using Copr"),(0,a.kt)("h3",{id:"pull-requests-1"},"Pull requests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        namespace\n-------------------------\n rear\n t0xic0der\n Madeyro\n jkonecny12\n sdaps\n kdudka\n nmstate\n matusmarhefka\n facebook\n containers\n facebookincubator\n ComplianceAsCode\n rhinstaller\n LenkaSeg\n dmnks\n fedora-sysv\n sgallagher\n antonvoznia\n OpenSCAP\n ondrejbudai\n cockpit-project\n csutils\n ansible-community\n phracek\n abrt\n fedora-iot\n rpm-software-management\n StykMartin\n vex21\n evverx\n redhat-plumbers\n osbuild\n majamassarini\n pcahyna\n systemd\n TomasTomecek\n flexmock\n martinpitt\n facebookexperimental\n httpie\n bus1\n oamg\n rebase-helper\n fedora-infra\n storaged-project\n SecurityCentral\n user-cont\n xsuchy\n avocado-framework\n dbus-fuzzer\n sosreport\n varlink\n r0x0d\n beaker-project\n psss\n sopos\n candlepin\n teemtee\n packit\n restraint-harness\n containerbuildsystem\n beakerlib\n Commonjava\n redhat-performance\n dracutdevs\n osandov\n cronie-crond\n fedora-modularity\n(68 rows)\n")),(0,a.kt)("h3",{id:"branch-pushes-1"},"Branch pushes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        namespace\n-------------------------\n jkonecny12\n kdudka\n thrix\n facebook\n facebookincubator\n rhinstaller\n besser82\n ondrejbudai\n csutils\n abrt\n cri-o\n rpm-software-management\n osbuild\n majamassarini\n TomasTomecek\n lachmanfrantisek\n facebookexperimental\n oamg\n python-bugzilla\n ostreedev\n psss\n teemtee\n packit\n beakerlib\n dracutdevs\n osandov\n(26 rows)\n")),(0,a.kt)("h3",{id:"releases-1"},"Releases"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  namespace\n-------------\n cri-o\n facebook\n fedora-sysv\n oamg\n packit\n t0xic0der\n(6 rows)\n")),(0,a.kt)("h2",{id:"projects-not-using-copr-in-the-last-3-months"},"Projects not using Copr in the last 3 months"),(0,a.kt)("h3",{id:"pull-requests-2"},"Pull requests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        namespace\n-------------------------\n rear\n Madeyro\n kdudka\n nmstate\n facebook\n containers\n facebookincubator\n rhinstaller\n ComplianceAsCode\n dmnks\n fedora-sysv\n sgallagher\n antonvoznia\n OpenSCAP\n ondrejbudai\n csutils\n ansible-community\n abrt\n fedora-iot\n rpm-software-management\n vex21\n evverx\n redhat-plumbers\n majamassarini\n pcahyna\n systemd\n TomasTomecek\n martinpitt\n oamg\n rebase-helper\n storaged-project\n SecurityCentral\n user-cont\n avocado-framework\n xsuchy\n dbus-fuzzer\n sosreport\n varlink\n r0x0d\n beaker-project\n psss\n sopos\n candlepin\n teemtee\n packit\n restraint-harness\n containerbuildsystem\n beakerlib\n Commonjava\n redhat-performance\n dracutdevs\n osandov\n cronie-crond\n fedora-modularity\n(54 rows)\n")),(0,a.kt)("h3",{id:"branch-pushes-2"},"Branch pushes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        namespace\n-------------------------\n jkonecny12\n kdudka\n facebook\n facebookincubator\n rhinstaller\n csutils\n cri-o\n rpm-software-management\n lachmanfrantisek\n oamg\n ostreedev\n psss\n teemtee\n beakerlib\n osandov\n(15 rows)\n")),(0,a.kt)("h3",{id:"releases-2"},"Releases"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  namespace\n-------------\n cri-o\n facebook\n fedora-sysv\n oamg\n(4 rows)\n")),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("h3",{id:"trigger-type-mapping"},"Trigger type mapping"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Trigger Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Table"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pull_requests"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"branch_push")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git_branches"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"release")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"project_releases"))))),(0,a.kt)("h3",{id:"queries"},"Queries"),(0,a.kt)("p",null,"To get SRPMs built in Copr:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT distinct(namespace) FROM srpm_builds INNER JOIN pipelines ON srpm_builds.id=srpm_build_id INNER JOIN job_triggers ON job_trigger_id=job_triggers.id INNER JOIN \u2039TABLE\u203a ON trigger_id=\u2039TABLE\u203a.id INNER JOIN git_projects ON project_id=git_projects.id WHERE srpm_builds.copr_build_id <> '' AND type='\u2039TRIGGER_TYPE\u203a' AND datetime >= '2022-01-25';\n")),(0,a.kt)("p",null,"To get SRPMs built in Sandcastle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT distinct(namespace) FROM srpm_builds INNER JOIN pipelines ON srpm_builds.id=srpm_build_id INNER JOIN job_triggers ON job_trigger_id=job_triggers.id INNER JOIN \u2039TABLE\u203a ON trigger_id=\u2039TABLE\u203a.id INNER JOIN git_projects ON project_id=git_projects.id WHERE srpm_builds.copr_build_id IS NULL AND type='\u2039TRIGGER_TYPE\u203a' AND datetime >= '2022-01-25';\n")))}c.isMDXComponent=!0}}]);