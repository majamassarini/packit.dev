"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[18823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Pull from upstream",sidebar_position:1},o="job: pull_from_upstream",s={unversionedId:"configuration/downstream/pull_from_upstream",id:"configuration/downstream/pull_from_upstream",title:"Pull from upstream",description:"A dist-git only job that opens a new dist-git pull request in",source:"@site/docs/configuration/downstream/pull_from_upstream.md",sourceDirName:"configuration/downstream",slug:"/configuration/downstream/pull_from_upstream",permalink:"/docs/configuration/downstream/pull_from_upstream",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/configuration/downstream/pull_from_upstream.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Pull from upstream",sidebar_position:1},sidebar:"autogenerated",previous:{title:"Downstream jobs",permalink:"/docs/category/downstream-jobs"},next:{title:"Koji builds",permalink:"/docs/configuration/downstream/koji_build"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Optional",id:"optional",level:3},{value:"First setup",id:"first-setup",level:2},{value:"Supported triggers",id:"supported-triggers",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Retriggering",id:"retriggering",level:2},{value:"Example",id:"example",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"job-pull_from_upstream"},(0,r.kt)("inlineCode",{parentName:"h1"},"job: pull_from_upstream")),(0,r.kt)("p",null,"A dist-git only job that opens a new dist-git pull request in\nsrc.fedoraproject.org when a new upstream release happens using a notification\nfrom ",(0,r.kt)("a",{parentName:"p",href:"https://release-monitoring.org/"},"release-monitoring.org"),". Upstream Release Monitoring creates a Bugzilla\nfor the new upstream release and this Bugzilla is by default referenced in the dist-git changelog as\n",(0,r.kt)("inlineCode",{parentName:"p"},"- Resolves rhbz#xz")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"- Resolves rhbz#xz")," in the commit message. "),(0,r.kt)("p",null,"Bodhi updates created by the ",(0,r.kt)("inlineCode",{parentName:"p"},"bodhi_update")," job as well as ",(0,r.kt)("a",{parentName:"p",href:"https://fedora-infra.github.io/bodhi/6.0/user/automatic_updates.html"},"automatic Bodhi updates")," will have this Bugzilla assigned and it will be closed when they reach stable.\nThere is also an env variable with the list of bugs to be closed\n",(0,r.kt)("inlineCode",{parentName:"p"},"PACKIT_RESOLVED_BUGS")," that you can use in the case you want to customize the changelog creation but still have\nthe bugs automatically closed."),(0,r.kt)("p",null,"This job behaviour can be customized\nusing ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration/actions#syncing-the-release"},"actions"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"PACKIT_RESOLVED_BUGS")," env variable is\navailable both for the ",(0,r.kt)("inlineCode",{parentName:"p"},"commit-message")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"changelog-entry")," actions."),(0,r.kt)("p",null,"This job utilizes the same logic as ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration/upstream/propose_downstream"},(0,r.kt)("inlineCode",{parentName:"a"},"propose_downstream"))," with the only\nexception that it is defined and executed in dist-git."),(0,r.kt)("admonition",{title:"Downstream configuration template",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use our ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration/downstream_configuration_template"},"downstream configuration template"),"\nfor creating your Packit configuration in dist-git repository.")),(0,r.kt)("admonition",{title:"Automate the setup",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also use ",(0,r.kt)("a",{parentName:"p",href:"/docs/cli/dist-git/init"},"packit dist-git init")," CLI command to create your\nPackit dist-git configuration.")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The job is defined in a Packit config in the default branch of the dist-git\nrepository (",(0,r.kt)("inlineCode",{parentName:"li"},"rawhide"),"). Packit configs on other branches are ignored."),(0,r.kt)("li",{parentName:"ul"},"Upstream release monitoring is active for the package. ",(0,r.kt)("a",{parentName:"li",href:"https://docs.fedoraproject.org/en-US/package-maintainers/Upstream_Release_Monitoring/"},"The monitoring\nstatus"),"\nin dist-git should be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"Monitoring"),".")),(0,r.kt)("h3",{id:"optional"},"Optional"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/configuration#upstream_project_url"},(0,r.kt)("inlineCode",{parentName:"a"},"upstream_project_url"))," pointing to a Git repository.\nIf this is not configured, no repository will be cloned (no interaction with it will occur),\nand the ",(0,r.kt)("a",{parentName:"li",href:"/docs/configuration/actions"},"actions")," will be executed in an arbitrary directory.")),(0,r.kt)("h2",{id:"first-setup"},"First setup"),(0,r.kt)("p",null,"When setting up this job for the first time, please follow the recommended actions from\n",(0,r.kt)("a",{parentName:"p",href:"/docs/fedora-releases-guide/dist-git-onboarding#release-syncing"},"our release guide"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please, use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration#issue_repository"},(0,r.kt)("inlineCode",{parentName:"a"},"issue_repository"))," option to get information about\npossible failures during the update process (otherwise, you will not be notified about the job failures).\nUse a repository you maintain as we will create issues about failures here.")),(0,r.kt)("h2",{id:"supported-triggers"},"Supported triggers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"release"))),(0,r.kt)("h2",{id:"optional-parameters"},"Optional parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dist_git_branches")," - a (list of) branch(es) in dist-git where packit should work (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"main"),").\nYou can also use the ",(0,r.kt)("a",{parentName:"li",href:"/docs/configuration#aliases"},"aliases provided by Packit"),"\nto not need to change the config file when the new system version is released.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more details and customization options, also check\n",(0,r.kt)("a",{parentName:"p",href:"/docs/fedora-releases-guide/dist-git-onboarding#pull-from-upstream-job"},"our release guide"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Current default behaviour of the release syncing results in having divergent dist-git branches. If you want to avoid this,\nplease see the details ",(0,r.kt)("a",{parentName:"p",href:"/docs/fedora-releases-guide#keeping-dist-git-branches-non-divergent"},"here"),".")),(0,r.kt)("h2",{id:"retriggering"},"Retriggering"),(0,r.kt)("p",null,"Packagers can retrigger the job\nvia a comment in any dist-git pull request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/packit pull-from-upstream\n")),(0,r.kt)("p",null,"This will take the Packit configuration file from the default branch of the dist-git\nrepository (",(0,r.kt)("inlineCode",{parentName:"p"},"rawhide"),"), same as if the job was triggered by a new release.\nYou can monitor the job in ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.packit.dev/jobs/pull-from-upstreams"},"Packit Dashboard"),".\nTo use the configuration file from the dist-git pull request you are commenting on, you can add an argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/packit pull-from-upstream --with-pr-config\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pull-from-upstream")," automatically handles the Bugzilla created by Upstream\nRelease Monitoring (by default adds ",(0,r.kt)("inlineCode",{parentName:"p"},"Resolves")," to changelog/commit and exposes ",(0,r.kt)("inlineCode",{parentName:"p"},"PACKIT_RESOLVED_BUGS")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"changelog-entry")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"commit-message"),"\nactions). If you want to override the referenced resolved bug set by Packit, you can retrigger ",(0,r.kt)("inlineCode",{parentName:"p"},"pull_from_upstream")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/packit pull-from-upstream --resolved-bugs rhbz#123,rhbz#124\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"upstream_project_url: https://github.com/packit/packit\nissue_repository: https://github.com/my-username/packit-notifications\n\njobs:\n- job: pull_from_upstream\n  trigger: release\n  dist_git_branches:\n    - fedora-all\n    - epel-9\n")),(0,r.kt)("p",null,"Once a new upstream release happens, Packit will open a pull request with it in\nall active Fedora releases and EPEL 9."))}d.isMDXComponent=!0}}]);