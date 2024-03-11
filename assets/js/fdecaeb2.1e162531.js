"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[3566],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?i.createElement(h,o(o({ref:t},u),{},{components:a})):i.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));const r={title:"Dist-git repository onboarding",sidebar_position:6},o="Dist-git repository onboarding",l={unversionedId:"fedora-releases-guide/dist-git-onboarding",id:"fedora-releases-guide/dist-git-onboarding",title:"Dist-git repository onboarding",description:"Table of contents",source:"@site/docs/fedora-releases-guide/dist-git-onboarding.md",sourceDirName:"fedora-releases-guide",slug:"/fedora-releases-guide/dist-git-onboarding",permalink:"/docs/fedora-releases-guide/dist-git-onboarding",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/fedora-releases-guide/dist-git-onboarding.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Dist-git repository onboarding",sidebar_position:6},sidebar:"autogenerated",previous:{title:"How to do Fedora releases with Packit",permalink:"/docs/fedora-releases-guide/"},next:{title:"Configuration",permalink:"/docs/configuration/"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Setup",id:"setup",level:2},{value:"1. Configuration file",id:"1-configuration-file",level:3},{value:"Jobs",id:"jobs",level:4},{value:"Pull from upstream job",id:"pull-from-upstream-job",level:5},{value:"Koji build job",id:"koji-build-job",level:5},{value:"Bodhi update job",id:"bodhi-update-job",level:5},{value:"Actions",id:"actions",level:4},{value:"2. Monitoring of the package",id:"2-monitoring-of-the-package",level:3},{value:"How to try that for real",id:"how-to-try-that-for-real",level:3},{value:"Release syncing",id:"release-syncing",level:4},{value:"If there is a pending release",id:"if-there-is-a-pending-release",level:4},{value:"If there is no pending release",id:"if-there-is-no-pending-release",level:4},{value:"Koji builds and Bodhi updates",id:"koji-builds-and-bodhi-updates",level:4},{value:"UI",id:"ui",level:2},{value:"Notifications about errors",id:"notifications-about-errors",level:3},{value:"Retriggering",id:"retriggering",level:2},{value:"pull_from_upstream",id:"pull_from_upstream",level:3},{value:"koji_build",id:"koji_build",level:3},{value:"bodhi_update",id:"bodhi_update",level:3},{value:"Full example of a dist-git only configuration",id:"full-example-of-a-dist-git-only-configuration",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dist-git-repository-onboarding"},"Dist-git repository onboarding"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#setup"},"Setup"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#configuration-file"},"1. Configuration file")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#monitoring-of-the-package"},"2. Monitoring")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-try-that-for-real"},"How to try that for real")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#ui"},"UI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#retriggering"},"Retriggering")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#full-example-of-a-dist-git-only-configuration"},"Full example of a configuration"))),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("p",null,"To start using Packit in dist-git, you only need:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"a configuration file"),(0,n.kt)("li",{parentName:"ol"},"enable the monitoring for your package")),(0,n.kt)("h3",{id:"1-configuration-file"},"1. Configuration file"),(0,n.kt)("p",null,"To start using Packit for automating your Fedora releases with setup ",(0,n.kt)("strong",{parentName:"p"},"only")," in dist-git,\nthe main thing you need is to create a configuration file and place it\nin the default (",(0,n.kt)("inlineCode",{parentName:"p"},"rawhide"),") branch of your dist-git repository."),(0,n.kt)("p",null,"As a format, it uses YAML and here are all the valid names:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".packit.yaml")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".packit.yml")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"packit.yaml")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"packit.yml"))),(0,n.kt)("p",null,"In your configuration file, you can define these jobs:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#pull-from-upstream-job"},(0,n.kt)("inlineCode",{parentName:"a"},"pull_from_upstream"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#koji-build-job"},(0,n.kt)("inlineCode",{parentName:"a"},"koji_build"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#bodhi-update-job"},(0,n.kt)("inlineCode",{parentName:"a"},"bodhi_update")))),(0,n.kt)("admonition",{title:"Downstream configuration template",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can use our ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/downstream_configuration_template"},"downstream configuration template"),"\nfor creating your Packit configuration in dist-git repository.")),(0,n.kt)("admonition",{title:"Automate the setup",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can also use ",(0,n.kt)("a",{parentName:"p",href:"/docs/cli/dist-git/init"},"packit dist-git init")," CLI command to create your\nPackit dist-git configuration.")),(0,n.kt)("admonition",{title:"Configuration validation",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For validation of the configuration, you can utilise\nPackit CLI command ",(0,n.kt)("a",{parentName:"p",href:"/docs/cli/validate-config"},(0,n.kt)("inlineCode",{parentName:"a"},"validate-config"))," or our\n",(0,n.kt)("a",{parentName:"p",href:"/posts/pre-commit-hooks#validate-config"},"pre-commit hooks"),".")),(0,n.kt)("h4",{id:"jobs"},"Jobs"),(0,n.kt)("h5",{id:"pull-from-upstream-job"},"Pull from upstream job"),(0,n.kt)("p",null,"When a new upstream release happens and\n",(0,n.kt)("a",{parentName:"p",href:"https://release-monitoring.org/"},"release-monitoring.org")," detects it, you'll\nget dist-git pull requests with it automatically. "),(0,n.kt)("p",null,"Bodhi updates created by the ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/downstream/pull_from_upstream"},(0,n.kt)("inlineCode",{parentName:"a"},"bodhi_update")," job")," as well as ",(0,n.kt)("a",{parentName:"p",href:"https://fedora-infra.github.io/bodhi/6.0/user/automatic_updates.html"},"automatic Bodhi updates")," will close the Bugzilla opened by\nthe Upstream Release Monitoring automatically when they reach stable.\nPackit adds the Bugzilla numbers to the commit message and the changelog in this form ",(0,n.kt)("inlineCode",{parentName:"p"},"- Resolves rhbz#xz"),".\nThere is also an env variable with the list of bugs to be closed\n",(0,n.kt)("inlineCode",{parentName:"p"},"PACKIT_RESOLVED_BUGS")," that you can use in the case you want to customize the changelog creation through an action\nas shown below."),(0,n.kt)("p",null,"If you want to restrict what releases with corresponding tags Packit should react on,\nyou can utilise the configuration options ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/#upstream_tag_include"},(0,n.kt)("inlineCode",{parentName:"a"},"upstream_tag_include"))," and\n",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/#upstream_tag_exclude"},(0,n.kt)("inlineCode",{parentName:"a"},"upstream_tag_exclude")),"."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"It is necessary to set the ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/#upstream_project_url"},(0,n.kt)("inlineCode",{parentName:"a"},"upstream_project_url"))," (upstream project Git repository URL) configuration option. However, upstream tarball URL is taken from the spec file or from ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/#sources"},(0,n.kt)("inlineCode",{parentName:"a"},"sources"))," (see below).")),(0,n.kt)("p",null,"You can check the other customization options ",(0,n.kt)("a",{parentName:"p",href:"/docs/fedora-releases-guide/#customization"},"here"),"."),(0,n.kt)("admonition",{title:"Divergent dist-git branches",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Current default behaviour of the release syncing results in having divergent dist-git branches. If you want to avoid this,\nplease see the details ",(0,n.kt)("a",{parentName:"p",href:"/docs/fedora-releases-guide#keeping-dist-git-branches-non-divergent"},"here"),".")),(0,n.kt)("h5",{id:"koji-build-job"},"Koji build job"),(0,n.kt)("p",null,"You can configure Packit to react to the new commits in your dist-git repository and create\nKoji builds by including a ",(0,n.kt)("inlineCode",{parentName:"p"},"koji_build")," job in the configuration.\nThen, if Packit is informed (via fedora-messaging bus) about a new commit in the configured dist-git branch, it submits a new build in Koji\nlike maintainers usually do. (The commits without any spec file change are skipped.)"),(0,n.kt)("p",null,"By default, only merged pull requests created by Packit are being acted upon, but\nyou can override this behaviour by specifying\n",(0,n.kt)("inlineCode",{parentName:"p"},"allowed_pr_authors")," and/or ",(0,n.kt)("inlineCode",{parentName:"p"},"allowed_committers")," in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/downstream/koji_build"},"job configuration"),". "),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/downstream/koji_build"},"koji_build job")," can be configured like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n- job: koji_build\n  trigger: commit\n  dist_git_branches:\n    - fedora-all\n")),(0,n.kt)("h5",{id:"bodhi-update-job"},"Bodhi update job"),(0,n.kt)("p",null,"You can configure Packit to react to successful Koji builds and create\nBodhi updates by including a ",(0,n.kt)("inlineCode",{parentName:"p"},"bodhi_update")," job in the configuration.\nOnce Packit is informed (via fedora-messaging bus) about the successful Koji build for the configured branch,\nit creates a new update for that branch in Bodhi for you."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/downstream/bodhi_update"},"bodhi_update job")," can be configured like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n- job: bodhi_update\n  trigger: commit\n  dist_git_branches:\n    - fedora-branched # rawhide updates are created automatically\n")),(0,n.kt)("h4",{id:"actions"},"Actions"),(0,n.kt)("p",null,"Actions are a way how to redefine or tweak the Packit's workflows.\nThese are user-defined commands that can replace a part of Packit's job (e.g. to get version, or to create a tarball)\nor are run in a particular step as a hook (with no action run by default)."),(0,n.kt)("p",null,"Take a look at the tables ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/actions/"},"here")," to know what actions are available for each job."),(0,n.kt)("h3",{id:"2-monitoring-of-the-package"},"2. Monitoring of the package"),(0,n.kt)("p",null,"Besides the configuration file, if you use the ",(0,n.kt)("a",{parentName:"p",href:"#pull-from-upstream-job"},(0,n.kt)("inlineCode",{parentName:"a"},"pull_from_upstream")," job"),", you also need\nto have your package monitored by Upstream Release Monitoring:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"make sure there is Fedora mapping for the upstream project in ",(0,n.kt)("a",{parentName:"li",href:"https://release-monitoring.org/projects/"},"https://release-monitoring.org/projects/")),(0,n.kt)("li",{parentName:"ol"},"make sure ",(0,n.kt)("inlineCode",{parentName:"li"},"Monitoring status")," on the left side at ",(0,n.kt)("a",{parentName:"li",href:"https://src.fedoraproject.org/rpms/your-package"},"https://src.fedoraproject.org/rpms/your-package")," is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"Monitoring"))),(0,n.kt)("p",null,"You can check an example of a configuration file ",(0,n.kt)("a",{parentName:"p",href:"#full-example-of-a-dist-git-only-configuration"},"in the section below"),"."),(0,n.kt)("h3",{id:"how-to-try-that-for-real"},"How to try that for real"),(0,n.kt)("h4",{id:"release-syncing"},"Release syncing"),(0,n.kt)("p",null,"If you are interested in the functionality of syncing the release (",(0,n.kt)("a",{parentName:"p",href:"#pull-from-upstream-job"},(0,n.kt)("inlineCode",{parentName:"a"},"pull_from_upstream")," job"),")\nand want to try it out, we recommend triggering the job\nfirst time from a dist-git pull request to make sure Packit is correctly configured (see the following sections)."),(0,n.kt)("h4",{id:"if-there-is-a-pending-release"},"If there is a pending release"),(0,n.kt)("p",null,"If there is a new release pending for your package (bugzilla has been opened by ",(0,n.kt)("a",{parentName:"p",href:"https://release-monitoring.org/"},"release-monitoring.org")," but no rebase done in dist-git yet), do the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"create a ",(0,n.kt)("inlineCode",{parentName:"li"},"rawhide"),"-based pull request with Packit configuration defining the ",(0,n.kt)("a",{parentName:"li",href:"/docs/configuration/downstream/pull_from_upstream"},(0,n.kt)("inlineCode",{parentName:"a"},"pull_from_upstream")," job"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"we recommend firstly setting the ",(0,n.kt)("inlineCode",{parentName:"li"},"dist_git_branches")," for the job to one branch only (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"fedora-rawhide"),")"))),(0,n.kt)("li",{parentName:"ul"},"comment ",(0,n.kt)("inlineCode",{parentName:"li"},"/packit pull-from-upstream --with-pr-config")," on the pull request"),(0,n.kt)("li",{parentName:"ul"},"check the ",(0,n.kt)("a",{parentName:"li",href:"https://dashboard.packit.dev/jobs/pull-from-upstreams"},"dashboard")),(0,n.kt)("li",{parentName:"ul"},"if everything went well, review the pull request(s) in your dist-git repository created by Packit"),(0,n.kt)("li",{parentName:"ul"},"if you are happy with the results ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"you can update the ",(0,n.kt)("inlineCode",{parentName:"li"},"dist_git_branches")," to include the list of desired branches and trigger the syncing for all branches (using the same comment ",(0,n.kt)("inlineCode",{parentName:"li"},"/packit pull-from-upstream --with-pr-config"),") "),(0,n.kt)("li",{parentName:"ul"},"merge the pull request ")))),(0,n.kt)("h4",{id:"if-there-is-no-pending-release"},"If there is no pending release"),(0,n.kt)("p",null,"If there is no pending release and your package has been rebased at least once in the past, you can still try the job using a new testing branch:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"create a branch pointing to a commit before the last rebase, name it e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"packit-test")," and push it (directly to dist-git, not to your fork)"),(0,n.kt)("li",{parentName:"ul"},"create a ",(0,n.kt)("inlineCode",{parentName:"li"},"rawhide"),"-based pull request with Packit configuration defining the ",(0,n.kt)("a",{parentName:"li",href:"/docs/configuration/downstream/pull_from_upstream"},(0,n.kt)("inlineCode",{parentName:"a"},"pull_from_upstream")," job")),(0,n.kt)("li",{parentName:"ul"},"in the configuration, set the ",(0,n.kt)("inlineCode",{parentName:"li"},"dist_git_branches")," option of the ",(0,n.kt)("inlineCode",{parentName:"li"},"pull_from_upstream")," job to the name of the testing branch"),(0,n.kt)("li",{parentName:"ul"},"comment ",(0,n.kt)("inlineCode",{parentName:"li"},"/packit pull-from-upstream --with-pr-config")," on the pull request"),(0,n.kt)("li",{parentName:"ul"},"check the ",(0,n.kt)("a",{parentName:"li",href:"https://dashboard.packit.dev/jobs/pull-from-upstreams"},"dashboard")),(0,n.kt)("li",{parentName:"ul"},"if everything went well, review the pull request in your dist-git repository created by Packit"),(0,n.kt)("li",{parentName:"ul"},"if you are happy with the results, you can change the ",(0,n.kt)("inlineCode",{parentName:"li"},"dist_git_branches")," option to whatever you want, merge your pull request and wait for the next upstream release")),(0,n.kt)("admonition",{title:"Version",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Normally, the version is taken from Upstream Release Monitoring as Packit is triggered by that.\nWhen triggering via comment, the version is retrieved from the latest upstream project release tag.")),(0,n.kt)("admonition",{title:"Reproducing from CLI",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To reproduce the Packit Service behaviour with your credentials from CLI,\nyou can use a ",(0,n.kt)("a",{parentName:"p",href:"/docs/cli/pull-from-upstream"},(0,n.kt)("inlineCode",{parentName:"a"},"packit pull-from-upstream"))," command.\nIt creates dist-git pull requests with the content of the release and the Packit config taken from a local clone.")),(0,n.kt)("h4",{id:"koji-builds-and-bodhi-updates"},"Koji builds and Bodhi updates"),(0,n.kt)("p",null,"The Koji builds are triggered for dist-git pushes to configured branches that contain specfile change\nand meet other requirements (see ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/downstream/koji_build#processing-of-dist-git-events-from-pagure"},"the schema"),").\nThe Bodhi updates are then created when Packit successfuly builds in Koji.\nYou can trigger both of them manually as well, see ",(0,n.kt)("a",{parentName:"p",href:"#retriggering"},"Retriggering section"),"."),(0,n.kt)("admonition",{title:"Reproducing from CLI",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To reproduce the Packit Service behaviour with your credentials from CLI,\nyou can use again Packit commands ",(0,n.kt)("a",{parentName:"p",href:"/docs/cli/build/in-koji"},(0,n.kt)("inlineCode",{parentName:"a"},"packit build in-koji"))," and\n",(0,n.kt)("a",{parentName:"p",href:"/docs/cli/create-update"},(0,n.kt)("inlineCode",{parentName:"a"},"packit create-update")),".")),(0,n.kt)("h2",{id:"ui"},"UI"),(0,n.kt)("p",null,"You can check all the job runs with details and logs in ",(0,n.kt)("a",{parentName:"p",href:"https:/dashboard.packit.dev"},"Packit dashboard"),", specifically:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dashboard.packit.dev/jobs/pull-from-upstreams"},"pull_from_upstream")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dashboard.packit.dev/jobs/downstream-koji-builds"},"koji_build")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dashboard.packit.dev/jobs/bodhi-updates"},"bodhi_update"))),(0,n.kt)("p",null,"You can utilise ",(0,n.kt)("a",{parentName:"p",href:"https://notifications.fedoraproject.org/"},"Fedora Notifications")," as well."),(0,n.kt)("h3",{id:"notifications-about-errors"},"Notifications about errors"),(0,n.kt)("p",null,"Since it is not possible to create issues in dist-git repositories, you can configure a repository where we should\nopen issues in case of errors during the downstream jobs via ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration#issue_repository"},(0,n.kt)("inlineCode",{parentName:"a"},"issue_repository")),"\nconfiguration key. See the details in the link."),(0,n.kt)("h2",{id:"retriggering"},"Retriggering"),(0,n.kt)("h3",{id:"pull_from_upstream"},"pull_from_upstream"),(0,n.kt)("p",null,"Packagers can retrigger the job\nvia a comment in any dist-git pull request:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/packit pull-from-upstream\n")),(0,n.kt)("p",null,"This will take the Packit configuration file from the default branch of the dist-git\nrepository (",(0,n.kt)("inlineCode",{parentName:"p"},"rawhide"),"), same as if the job was triggered by a new release. To use the configuration file from the dist-git pull request you are commenting on, you can add an argument:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/packit pull-from-upstream --with-pr-config\n")),(0,n.kt)("h3",{id:"koji_build"},"koji_build"),(0,n.kt)("p",null,"Packagers can retrigger a build by a comment in a dist-git pull request:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/packit koji-build\n")),(0,n.kt)("p",null,"The build will be triggered for the target branch of the pull request using the most recent commit on the target branch\n(NOT the HEAD commit of the pull request). "),(0,n.kt)("p",null,"If Packit created an issue in the configured ",(0,n.kt)("inlineCode",{parentName:"p"},"issue_repository"),", you can place the same comment in that\nissue to retrigger the builds (see ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration#issue_repository"},(0,n.kt)("inlineCode",{parentName:"a"},"issue_repository"))," for details)."),(0,n.kt)("h3",{id:"bodhi_update"},"bodhi_update"),(0,n.kt)("p",null,"Packagers with write access to the dist-git repository can retrigger an update by a comment in a dist-git pull request:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/packit create-update\n")),(0,n.kt)("p",null,"The update will be triggered for the target branch of the pull request. "),(0,n.kt)("p",null,"If Packit created an issue in the configured ",(0,n.kt)("inlineCode",{parentName:"p"},"issue_repository"),", you can place the same comment in that\nissue to retrigger the updates (see ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration#issue_repository"},(0,n.kt)("inlineCode",{parentName:"a"},"issue_repository"))," for details)."),(0,n.kt)("h2",{id:"full-example-of-a-dist-git-only-configuration"},"Full example of a dist-git only configuration"),(0,n.kt)("p",null,"Let's take a look how the configuration file can look like when you define all three steps.\nIt's quite simple, isn't it?"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'upstream_project_url: https://github.com/upstream/package\njobs:\n\n- job: pull_from_upstream\n  trigger: release\n  dist_git_branches:\n   - fedora-rawhide\n  actions:\n    commit-message:\n      - bash -c \'echo "Update to ${PACKIT_PROJECT_VERSION}"\'\n      - bash -c \'[ -z "$PACKIT_RESOLVED_BUGS" ] || echo ${PACKIT_RESOLVED_BUGS} | tr " " "\\n" | sed "s/^/- Resolves /"\'\n    changelog-entry:\n      - bash -c \'echo "- Update to ${PACKIT_PROJECT_VERSION}"\'\n      - bash -c \'[ -z "$PACKIT_RESOLVED_BUGS" ] || echo ${PACKIT_RESOLVED_BUGS} | tr " " "\\n" | sed "s/^/- Resolves /"\'\n\n- job: koji_build\n  trigger: commit\n  dist_git_branches:\n    - fedora-rawhide\n\n- job: bodhi_update\n  trigger: commit\n  dist_git_branches:\n    - fedora-branched # rawhide updates are created automatically\n')))}c.isMDXComponent=!0}}]);