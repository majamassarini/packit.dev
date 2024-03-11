"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[7109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27031:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={title:"srpm",date:new Date("2019-06-28T00:00:00.000Z"),sidebar_position:8},o="packit srpm",p={unversionedId:"cli/srpm",id:"cli/srpm",title:"srpm",description:"Create a SRPM of the present content in the upstream repository.",source:"@site/docs/cli/srpm.md",sourceDirName:"cli",slug:"/cli/srpm",permalink:"/docs/cli/srpm",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/cli/srpm.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"srpm",date:"2019-06-28T00:00:00.000Z",sidebar_position:8},sidebar:"autogenerated",previous:{title:"pull-from-upstream",permalink:"/docs/cli/pull-from-upstream"},next:{title:"sync-from-downstream",permalink:"/docs/cli/sync-from-downstream"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Help",id:"help",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"packit-srpm"},(0,i.kt)("inlineCode",{parentName:"h1"},"packit srpm")),(0,i.kt)("p",null,"Create a SRPM of the present content in the upstream repository."),(0,i.kt)("p",null,"By default, packit uses ",(0,i.kt)("inlineCode",{parentName:"p"},"git describe --tags --match '*.*'")," to create a unique\nversion of the snapshot and ",(0,i.kt)("inlineCode",{parentName:"p"},'git archive -o "{package_name}-{version}.tar.gz"\n--prefix "{package_name}-{version}/" HEAD')," to create a tarball with upstream\nsources."),(0,i.kt)("p",null,"You can override the archive and version commands in ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/"},"packit.yaml"),", e.g. this is\nwhat we use in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/packit/ogr/blob/main/.packit.yaml"},"ogr"),", a library which packit is using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'actions:\n  create-archive:\n    - python3 setup.py sdist --dist-dir ./fedora/\n    - bash -c "ls -1t ./fedora/*.tar.gz | head -n 1"\n  get-current-version: python3 setup.py --version\n')),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upstream project is using git."),(0,i.kt)("li",{parentName:"ul"},"Packit config file placed in the upstream repository.")),(0,i.kt)("h2",{id:"tutorial"},"Tutorial"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/"},"Place a config file for packit in the root of your upstream repository."),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now we would generate a SRPM for ogr project:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'$ packit srpm\nVersion in spec file is "0.0.3".\nSRPM: /home/tt/g/user-cont/ogr/python-ogr-0.0.4.dev11+gc9956c9.d20190318-1.fc29.src.rpm\n')),(0,i.kt)("p",{parentName:"li"},"We can now build the package:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ rpmbuild --rebuild /home/tt/g/user-cont/ogr/python-ogr-0.0.4.dev11+gc9956c9.d20190318-1.fc29.src.rpm\nInstalling /home/tt/g/user-cont/ogr/python-ogr-0.0.4.dev11+gc9956c9.d20190318-1.fc29.src.rpm\nExecuting(%prep): /bin/sh -e /var/tmp/rpm-tmp.95VZ3c\n+ umask 022\n+ cd /home/tt/rpmbuild/BUILD\n+ cd /home/tt/rpmbuild/BUILD\n+ rm -rf ogr-0.0.4.dev11+gc9956c9.d20190318\n+ /usr/bin/gzip -dc /home/tt/rpmbuild/SOURCES/ogr-0.0.4.dev11+gc9956c9.d20190318.tar.gz\n+ /usr/bin/tar -xof -\n+ STATUS=0\n...\nExecuting(%build): /bin/sh -e /var/tmp/rpm-tmp.aYyTMP\n...\nExecuting(%install): /bin/sh -e /var/tmp/rpm-tmp.fotlPv\n...\n+ exit 0\nProvides: python3-ogr = 0.0.4.dev11+gc9956c9.d20190318-1.fc29 python3.7dist(ogr) = 0.0.4.dev11+gc9956c9.d20190318 python3dist(ogr) = 0.0.4.dev11+gc9956c9.d20190318\nRequires(rpmlib): rpmlib(CompressedFileNames) <= 3.0.4-1 rpmlib(FileDigests) <= 4.6.0-1 rpmlib(PartialHardlinkSets) <= 4.0.4-1 rpmlib(PayloadFilesHavePrefix) <= 4.0-1\nRequires: python(abi) = 3.7 python3.7dist(gitpython) python3.7dist(libpagure) python3.7dist(pygithub) python3.7dist(python-gitlab)\nChecking for unpackaged file(s): /usr/lib/rpm/check-files /home/tt/rpmbuild/BUILDROOT/python-ogr-0.0.4.dev11+gc9956c9.d20190318-1.fc29.x86_64\nWrote: /home/tt/rpmbuild/RPMS/noarch/python3-ogr-0.0.4.dev11+gc9956c9.d20190318-1.fc29.noarch.rpm\n+ exit 0\n")))),(0,i.kt)("h2",{id:"help"},"Help"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage: packit srpm [OPTIONS] [PATH_OR_URL]\n\n  Create new SRPM (.src.rpm file) using content of the upstream repository.\n\n  PATH_OR_URL argument is a local path or a URL to the upstream git\n  repository, it defaults to the current working directory\n\nOptions:\n  --output FILE                   Write the SRPM to FILE instead of current\n                                  dir.\n  --upstream-ref TEXT             Git ref of the last upstream commit in the\n                                  current branch from which packit should\n                                  generate patches (this option implies the\n                                  repository is source-git).\n  --update-release / --no-update-release\n                                  Specifies whether to update Release.\n                                  Defaults to value set in configuration,\n                                  which defaults to yes.\n  --bump / --no-bump              Deprecated. Use --[no-]update-release\n                                  instead.\n  --release-suffix TEXT           Specifies release suffix. Allows to override\n                                  default generated:{current_time}.{sanitized_\n                                  current_branch}{git_desc_suffix}\n  --default-release-suffix        Allows to use default, packit-generated,\n                                  release suffix when some release_suffix is\n                                  specified in the configuration.\n  -p, --package TEXT              Package to source build, if more than one\n                                  available, like in a monorepo configuration.\n                                  Use it multiple times to select multiple\n                                  packages.Defaults to all the packages listed\n                                  inside the config.\n  -h, --help                      Show this message and exit.\n")))}m.isMDXComponent=!0}}]);