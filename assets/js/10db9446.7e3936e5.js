"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[8823],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62566:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Pull from upstream",sidebar_position:1},o="job: pull_from_upstream",s={unversionedId:"configuration/downstream/pull_from_upstream",id:"configuration/downstream/pull_from_upstream",title:"Pull from upstream",description:"A dist-git only job that opens a new dist-git pull request in",source:"@site/docs/configuration/downstream/pull_from_upstream.md",sourceDirName:"configuration/downstream",slug:"/configuration/downstream/pull_from_upstream",permalink:"/docs/configuration/downstream/pull_from_upstream",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/configuration/downstream/pull_from_upstream.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Pull from upstream",sidebar_position:1},sidebar:"autogenerated",previous:{title:"Downstream jobs",permalink:"/docs/category/downstream-jobs"},next:{title:"Koji builds",permalink:"/docs/configuration/downstream/koji_build"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"First setup",id:"first-setup",level:2},{value:"Supported triggers",id:"supported-triggers",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Retriggering",id:"retriggering",level:2},{value:"Example",id:"example",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"job-pull_from_upstream"},(0,n.kt)("inlineCode",{parentName:"h1"},"job: pull_from_upstream")),(0,n.kt)("p",null,"A dist-git only job that opens a new dist-git pull request in\nsrc.fedoraproject.org when a new upstream release happens using a notification\nfrom ",(0,n.kt)("a",{parentName:"p",href:"https://release-monitoring.org/"},"release-monitoring.org"),". Upstream Release Monitoring creates a Bugzilla\nfor the new upstream release and this Bugzilla is by default referenced in the dist-git changelog as\n",(0,n.kt)("inlineCode",{parentName:"p"},"- Resolves rhbz#xz")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"- Resolves rhbz#xz")," in the commit message. This behaviour can be customized\nusing ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/actions#syncing-the-release"},"actions"),"."),(0,n.kt)("p",null,"This job utilizes the same logic as ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/upstream/propose_downstream"},(0,n.kt)("inlineCode",{parentName:"a"},"propose_downstream"))," with the only\nexception that it is defined and executed in dist-git."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The job is defined in a Packit config in the default branch of the dist-git\nrepository (",(0,n.kt)("inlineCode",{parentName:"li"},"rawhide"),"). Packit configs on other branches are ignored."),(0,n.kt)("li",{parentName:"ul"},"Upstream release monitoring is active for the package. ",(0,n.kt)("a",{parentName:"li",href:"https://docs.fedoraproject.org/en-US/package-maintainers/Upstream_Release_Monitoring/"},"The monitoring\nstatus"),"\nin dist-git should be set to ",(0,n.kt)("inlineCode",{parentName:"li"},"Monitoring"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/configuration#upstream_project_url"},(0,n.kt)("inlineCode",{parentName:"a"},"upstream_project_url"))," pointing to a Git repository is defined in the configuration.")),(0,n.kt)("h2",{id:"first-setup"},"First setup"),(0,n.kt)("p",null,"When setting up this job for the first time, please follow the recommended actions from\n",(0,n.kt)("a",{parentName:"p",href:"/docs/fedora-releases-guide#first-setup"},"our release guide"),"."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please, use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration#issue_repository"},(0,n.kt)("inlineCode",{parentName:"a"},"issue_repository"))," option to get information about\npossible failures during the update process (otherwise, you will not be notified about the job failures).\nUse a repository you maintain as we will create issues about failures here.")),(0,n.kt)("h2",{id:"supported-triggers"},"Supported triggers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"release"))),(0,n.kt)("h2",{id:"optional-parameters"},"Optional parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"dist_git_branches")," - a (list of) branch(es) in dist-git where packit should work (defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"main"),").\nYou can also use the ",(0,n.kt)("a",{parentName:"li",href:"/docs/configuration#aliases"},"aliases provided by Packit"),"\nto not need to change the config file when the new system version is released.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For more details and customization options, also check\n",(0,n.kt)("a",{parentName:"p",href:"/docs/fedora-releases-guide#pull-from-upstream-job"},"our release guide"),".")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Current default behaviour of the release syncing results in having divergent dist-git branches. If you want to avoid this,\nplease see the details ",(0,n.kt)("a",{parentName:"p",href:"/docs/fedora-releases-guide#keeping-dist-git-branches-non-divergent"},"here"),".")),(0,n.kt)("h2",{id:"retriggering"},"Retriggering"),(0,n.kt)("p",null,"Packagers with write access to the dist-git repository can retrigger the job\nvia a comment in any dist-git pull request:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/packit pull-from-upstream\n")),(0,n.kt)("p",null,"This will take the Packit configuration file from the default branch of the dist-git\nrepository (",(0,n.kt)("inlineCode",{parentName:"p"},"rawhide"),"), same as if the job was triggered by a new release.\nYou can monitor the job in ",(0,n.kt)("a",{parentName:"p",href:"https://dashboard.packit.dev/jobs/pull-from-upstreams"},"Packit Dashboard"),".\nTo use the configuration file from the dist-git pull request you are commenting on, you can add an argument:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/packit pull-from-upstream --with-pr-config\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"pull-from-upstream")," triggered by the Upstream Release Monitoring automatically handles the Bugzilla created by Upstream\nRelease Monitoring (by default adds ",(0,n.kt)("inlineCode",{parentName:"p"},"Resolves")," to changelog/commit and exposes ",(0,n.kt)("inlineCode",{parentName:"p"},"PACKIT_RESOLVED_BUGS")," to the ",(0,n.kt)("inlineCode",{parentName:"p"},"changelog-entry")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"commit-message"),"\nactions). In case of retriggering, you need to specify the bugs like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/packit pull-from-upstream --resolved-bugs rhbz#123,rhbz#124\n")),(0,n.kt)("p",null,"You can find the bugzilla by listing all the bugzillas created by Upstream Release Monitoring:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://bugzilla.redhat.com/buglist.cgi?bug_status=NEW&bug_status=ASSIGNED&columnlist=product%2Ccomponent%2Cassigned_to%2Cstatus%2Csummary%2Clast_change_time%2Cseverity%2Cpriority&email1=%22upstream-release-monitoring%40fedoraproject.org%22&emailreporter1=1&emailtype1=substring&order=id%20DESC%2C%20&query_format=advanced"},"https://bugzilla.redhat.com/buglist.cgi?bug_status=NEW&bug_status=ASSIGNED&columnlist=product%2Ccomponent%2Cassigned_to%2Cstatus%2Csummary%2Clast_change_time%2Cseverity%2Cpriority&email1=%22upstream-release-monitoring%40fedoraproject.org%22&emailreporter1=1&emailtype1=substring&order=id%20DESC%2C%20&query_format=advanced")),(0,n.kt)("p",null,"You can also append ",(0,n.kt)("inlineCode",{parentName:"p"},"&component={your-package-name}")," to the query above to constraint the result to your package only."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"upstream_project_url: https://github.com/packit/packit\nissue_repository: https://github.com/my-username/packit-notifications\n\njobs:\n- job: pull_from_upstream\n  trigger: release\n  dist_git_branches:\n    - fedora-all\n    - epel-9\n")),(0,n.kt)("p",null,"Once a new upstream release happens, Packit will open a pull request with it in\nall active Fedora releases and EPEL 9."))}c.isMDXComponent=!0}}]);