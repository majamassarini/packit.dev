"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[55031],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=h(a),u=o,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||s;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:o,i[1]=r;for(var h=2;h<s;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48126:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var n=a(87462),o=(a(67294),a(3905));const s={title:"Do you like your changelogs? What DevConf.CZ attendees think",date:new Date("2024-07-01T00:00:00.000Z"),authors:["flachman","lbarczio"]},i=void 0,r={permalink:"/posts/changelogs",editUrl:"https://github.com/packit/packit.dev/tree/main/posts/changelogs/index.md",source:"@site/posts/changelogs/index.md",title:"Do you like your changelogs? What DevConf.CZ attendees think",description:"Last month, we had the pleasure of engaging with a dynamic audience during our interactive talk on changelogs at the DevConf in Brno, Czech Republic. In case you missed it, you can watch the recording here. Throughout the session, we explored various aspects of changelog usage, including their content, format, and the potential for automation. By asking a series of questions to the attendees, we gathered insights and opinions that highlighted both common practices and divergent viewpoints within the community. In this follow-up article, we aim to summarise the key findings from our discussion, analyse the trends and preferences that emerged, and offer our reflections on the role of changelogs in software development.",date:"2024-07-01T00:00:00.000Z",formattedDate:"July 1, 2024",tags:[],readingTime:8.45,hasTruncateMarker:!0,authors:[{name:"Franti\u0161ek Lachman",email:"flachman@redhat.com",url:"https://github.com/lachmanfrantisek",imageURL:"https://github.com/lachmanfrantisek.png",key:"flachman"},{name:"Laura Barcziov\xe1",email:"lbarczio@redhat.com",url:"https://github.com/lbarcziova",imageURL:"https://github.com/lbarcziova.png",key:"lbarczio"}],frontMatter:{title:"Do you like your changelogs? What DevConf.CZ attendees think",date:"2024-07-01T00:00:00.000Z",authors:["flachman","lbarczio"]},prevItem:{title:"SAST using OpenScanHub is here!",permalink:"/posts/openscanhub-prototype"},nextItem:{title:"DevConf.CZ 2024 and week around for Packit",permalink:"/posts/devconf-2024"}},l={authorsImageUrls:[void 0,void 0]},h=[{value:"Content",id:"content",level:2},{value:"Formats",id:"formats",level:2},{value:"Tools",id:"tools",level:2},{value:"towncrier",id:"towncrier",level:3},{value:"Automation based on commit messages",id:"automation-based-on-commit-messages",level:2},{value:"Packit blog-post generator",id:"packit-blog-post-generator",level:2},{value:"Nice changelog examples",id:"nice-changelog-examples",level:2},{value:"Space for improvement?",id:"space-for-improvement",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:h},c="wrapper";function m(e){let{components:t,...s}=e;return(0,o.kt)(c,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Last month, we had the pleasure of engaging with a dynamic audience during our interactive talk on changelogs at the ",(0,o.kt)("a",{parentName:"p",href:"https://www.devconf.info/cz/"},"DevConf")," in Brno, Czech Republic. In case you missed it, you can watch the recording ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/TSifrKWNQT0?si=kRlu7PcQZwSwpy0R"},"here"),". Throughout the session, we explored various aspects of changelog usage, including their content, format, and the potential for automation. By asking a series of questions to the attendees, we gathered insights and opinions that highlighted both common practices and divergent viewpoints within the community. In this follow-up article, we aim to summarise the key findings from our discussion, analyse the trends and preferences that emerged, and offer our reflections on the role of changelogs in software development."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"foto from the conference 1",src:a(53310).Z,width:"1625",height:"1083"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"foto from the conference 2",src:a(24124).Z,width:"1625",height:"1083"})),(0,o.kt)("h2",{id:"content"},"Content"),(0,o.kt)("p",null,"One of the first questions we posed to our audience during the talk was, ",(0,o.kt)("em",{parentName:"p"},'"What do you, as a user, like to see in changelogs?"')," The most popular elements that the audience showed to like to see in changelogs were ",(0,o.kt)("em",{parentName:"p"},"breaking changes")," and ",(0,o.kt)("em",{parentName:"p"},"new features"),". Interest in breaking changes indicates that users prioritise being informed about changes that might disrupt their current setup or workflow. As for the features, this shows a strong interest in understanding the latest enhancements and functionalities added to the software. Users appreciate knowing what new capabilities they can leverage. On a similar note, the information about deprecated functionality is also highly valuable for the audience. This can help users plan migrations and avoid using obsolete features. The audience also expressed a clear desire to understand the purpose and context of a new release. Responses such as ",(0,o.kt)("em",{parentName:"p"},'"why"'),", ",(0,o.kt)("em",{parentName:"p"},'"purpose"'),", ",(0,o.kt)("em",{parentName:"p"},'"reasons"'),", ",(0,o.kt)("em",{parentName:"p"},'"relations"'),", and ",(0,o.kt)("em",{parentName:"p"},'"changes motivation"')," highlight this need. Understanding the rationale behind changes helps users comprehend the development trajectory and decision-making process. Another interesting response was the desire to know ",(0,o.kt)("em",{parentName:"p"},'"am I affected"'),", indicating that users primarily care about whether they need to take action or can safely ignore the update. There was also a response ",(0,o.kt)("em",{parentName:"p"},'"not a copy of commit msgs"'),". But we will get into that later\u2026"),(0,o.kt)("h2",{id:"formats"},"Formats"),(0,o.kt)("p",null,"The question that followed was, ",(0,o.kt)("em",{parentName:"p"},'"What format do you prefer for changelogs?"')," The most popular format by far was ",(0,o.kt)("em",{parentName:"p"},"Markdown"),". Its simplicity, readability, and widespread use in the developer community make it highly appealing. Markdown's flexibility in formatting and ease of conversion to other formats also contribute to its popularity. This preference may also indicate its frequent use in blog posts or other articles, as Markdown can be easily rendered."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Plain text")," files were also a prominent choice. We assume this could be for their simplicity and universal compatibility, making them accessible across various platforms and tools."),(0,o.kt)("p",null,"Other notable formats included ",(0,o.kt)("em",{parentName:"p"},"ReStructuredText"),", ",(0,o.kt)("em",{parentName:"p"},"LaTeX"),", ",(0,o.kt)("em",{parentName:"p"},"YAML"),", and ",(0,o.kt)("em",{parentName:"p"},"blog posts"),". These formats cater to specific needs, such as enhanced formatting capabilities, structured data representation, or providing more detailed explanations and context. Several unique and creative preferences also emerged, such as ",(0,o.kt)("em",{parentName:"p"},"Asciidoc"),", ",(0,o.kt)("em",{parentName:"p"},"email"),", and ",(0,o.kt)("em",{parentName:"p"},"PDFs"),". This variety of preferences highlights that the needs of different projects and their users vary significantly."),(0,o.kt)("h2",{id:"tools"},"Tools"),(0,o.kt)("p",null,"Following the format, we\u2019ve tried to collect tooling (if any) used by the audience to help with the changelog management. People mentioned various text editors, IDEs and of course, ",(0,o.kt)("em",{parentName:"p"},"chatgpt"),"/",(0,o.kt)("em",{parentName:"p"},"ai"),". But let\u2019s take a look at one specific tool worth sharing:"),(0,o.kt)("h3",{id:"towncrier"},"towncrier"),(0,o.kt)("p",null,"From ",(0,o.kt)("a",{parentName:"p",href:"https://towncrier.readthedocs.io/en/stable/index.html"},"the project\u2019s homepage"),", ",(0,o.kt)("em",{parentName:"p"},"towncrier delivers the news which is convenient to those that hear it, not those that write it.")," During a development, ",(0,o.kt)("em",{parentName:"p"},'"news fragments"')," (~text files) are created and when there is a new release, one can merge those together. Being user-centric and storing the fragments in git (and being able to review) makes it a really interesting choice worth exploring. Sadly, the pre-commit hooks can\u2019t remind you that you\u2019ve forgotten to add a new ",(0,o.kt)("em",{parentName:"p"},"news fragment"),". Luckily, there is help in the form of a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sanitizers/chronographer-github-app"},"Chronographer GitHub application")," created by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webknjaz"},"Sviatoslav Sydorenko (@webknjaz)")," (who was by coincidence also present at the talk)"),(0,o.kt)("p",null,"Quite interestingly, 11% of the responders mentioned that no automation is used \u2013 there is an opportunity for improvement! (But to be fair, it can also mean that someone from the projects wants to prepare something really useful and do this all by hand.)"),(0,o.kt)("p",null,"There were also some tools like ",(0,o.kt)("em",{parentName:"p"},"coffee"),", ",(0,o.kt)("em",{parentName:"p"},"potato"),", ",(0,o.kt)("em",{parentName:"p"},"postal pigeons")," or ",(0,o.kt)("em",{parentName:"p"},"beer")," that we weren\u2019t able to find documentation for. If you find these, let us know so we can add some links...;-)"),(0,o.kt)("p",null,"There were also various git-based solutions suggested which leads us to the next question:"),(0,o.kt)("h2",{id:"automation-based-on-commit-messages"},"Automation based on commit messages"),(0,o.kt)("p",null,"This is a tricky one, right? It might seem like an obvious choice of getting the input for our changelogs. But\u2026 yes, there is a \u201cbut\u201d. There are two main reasons why one wants to avoid using commit messages for this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Commit messages are meant to be read by developers."),(0,o.kt)("li",{parentName:"ul"},"Commit itself represents a change meaningful for developers, not users.")),(0,o.kt)("p",null,"Based on these observations, we came up with the following rules in our team (and talk attendees mentioned the same):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The content of the changelog should be created for users, not developers."),(0,o.kt)("li",{parentName:"ul"},"Changelog should be created for the user-focused level of change => in our case, pull-request."),(0,o.kt)("li",{parentName:"ul"},"Changelog should be created by the author of the change when the change is being developed.")),(0,o.kt)("p",null,"Of course, one can still use commits for this, but we don\u2019t think it\u2019s a good idea to have two goals for one text. If you really want to go this way, there is a ",(0,o.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/"},"Conventional Commits project"),". If nothing else, it can bring more attention to the commit messages and provide well-defined rules for the project contributors. (Talk attendees also mentioned git-cliff as a changelog generator for ",(0,o.kt)("em",{parentName:"p"},"Conventional Commits"),".) You can also use this format independently to user-facing changelog. (Or, maybe as a base info for a human creating the changelog.) To mention also other responses, there were various git-log based solutions mentioned including the functionality provided directly by git-forges."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Conventional Commits: search for a user (nothing found)",src:a(52641).Z,width:"1333",height:"425"})),(0,o.kt)("h2",{id:"packit-blog-post-generator"},"Packit blog-post generator"),(0,o.kt)("p",null,"As a follow-up to the previous questions, we\u2019ve shown a solution we use in Packit. We researched and tried various solutions but this is what finally works for us:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When submitting a pull-request, you put your changelog into a pull-request description.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Packit workflow 1: pull-request",src:a(6548).Z,width:"1103",height:"648"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you forget, a GitHub action will mark the PR red to remind you. (You can also put \u201cN/A\u201d if there is no user-facing change and the PR should be skipped for this check.)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"There is a GitHub action that we manually trigger when a new release should be prepared \u2013 as a result, new pull request is created with the aggregated changelog and version being updated.\nWhen this pull request is merged, the content of the changelog is also put into GitHub release description and from that taken when preparing downstream (i.e. Fedora) updates"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Packit workflow 2: Manual triggering of Github workflow that prepares the changelog",src:a(69858).Z,width:"1219",height:"539"}),"\n",(0,o.kt)("img",{alt:"Packit workflow 3: Content of the pull request created by the workflow",src:a(18849).Z,width:"1596",height:"326"}),"\n",(0,o.kt)("img",{alt:"Packit workflow 4: Published release with the changelog from the pull request",src:a(43739).Z,width:"1476",height:"555"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"In Packit, most of our users do not install our packages manually but use our service. When doing a new deployment (by moving stable branches in our repositories), we collect the code snippets and prepare an update post that is published on our project page.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Packit workflow 5: Published blog post with changelog from the pull request",src:a(92349).Z,width:"1149",height:"555"})),(0,o.kt)("p",null,"Important bit is that in both ways the changelog snippets are used, there is a review in place. So, you can still revisit the text, combine more entries together or remove if this is not relevant to the user after all."),(0,o.kt)("p",null,"You can, but don\u2019t need to use the same, but try to think about this, have a discussion within a team. The discussion itself can help you think more about your users."),(0,o.kt)("h2",{id:"nice-changelog-examples"},"Nice changelog examples"),(0,o.kt)("p",null,"Thanks to our fellow attendees, we can share some examples to be inspired by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/signalapp/Signal-Desktop/releases"},"https://github.com/signalapp/Signal-Desktop/releases")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/blob/main/CHANGELOG.md"},"https://github.com/packit/packit/blob/main/CHANGELOG.md")," (This wasn\u2019t us who suggested this...;)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yarl.aio-libs.org/en/latest/changes/"},"https://yarl.aio-libs.org/en/latest/changes/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/systemd/systemd/releases"},"https://github.com/systemd/systemd/releases")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getgrav.org/#changelog"},"https://getgrav.org/#changelog")," (Nice visualisation!)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cockpit-project.org/blog"},"https://cockpit-project.org/blog")," (Yes, blog posts can be used as well!)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.djangoproject.com/en/5.0/releases/5.0/"},"https://docs.djangoproject.com/en/5.0/releases/5.0/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ClusterLabs/pcs/blob/main/CHANGELOG.md"},"https://github.com/ClusterLabs/pcs/blob/main/CHANGELOG.md")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://qgis.org/en/site/forusers/visualchangelogs.html"},"https://qgis.org/en/site/forusers/visualchangelogs.html")," (Visual changelogs!)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ksh93/ksh/releases"},"https://github.com/ksh93/ksh/releases")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Hypfer/Valetudo/releases"},"https://github.com/Hypfer/Valetudo/releases")," (screenshots, breaking changes, personal opinions,...)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.home-assistant.io/blog/categories/release-notes/"},"https://www.home-assistant.io/blog/categories/release-notes/")," (screenshots, a lot of screenshots, deprecations, new plugins,..)")),(0,o.kt)("h2",{id:"space-for-improvement"},"Space for improvement?"),(0,o.kt)("p",null,"In addition to preferences, we also sought feedback on potential improvements for managing changelogs. The responses highlighted several key areas where the audience sees opportunities for enhancement:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AI:")," A significant number of responses emphasized the need for AI integration in changelog management, specifically using generative AI for writing changelogs was mentioned."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Standardization and consistency:")," Several responses called for standardizing the format and content of changelogs. Consistency in how changelogs are written and maintained can improve readability and usability. Specific suggestions included using templates and setting ground rules, such as always including issue IDs in commits."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Automation and integration with development tools:")," Improving the automation tools and Integrating changelog generation with existing development tools and CI/CD pipelines was another common suggestion. This could streamline the process, ensuring that changelogs are automatically updated and maintained as part of the development workflow."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Improving quality:")," Improving the quality of changelog messages was a recurring theme. Responses suggested focusing on clear, concise, and meaningful wording and also highlighted the need for changelogs to be more user-oriented rather than developer-centric.")),(0,o.kt)("p",null,"Several responses addressed specific needs, such as differentiating upstream and downstream changelogs, supporting all CI systems, and referencing the tickets associated with changes. Additionally, there were responses emphasizing the importance of keeping changelogs simple and easy to understand."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"And now what?"),(0,o.kt)("p",null,"What you can do now? Improve changelog in your project. Get involved in the project you like and help with the changelogs. Read the changelos."),(0,o.kt)("p",null,"What we can do together? Let\u2019s collaborate on the tools and share good practices!"),(0,o.kt)("p",null,"And what about the standardisation? Let\u2019s create a new standard! ",(0,o.kt)("a",{parentName:"p",href:"https://xkcd.com/927/"},"https://xkcd.com/927/")),(0,o.kt)("p",null,"With that, let\u2019s quote a response from one of our attendees:\n",(0,o.kt)("em",{parentName:"p"},'"Many more people read the changelog than write it, so it\'s worth it to put in the effort."')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This post was also posted at ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@laura.barcziova/do-you-like-your-changelogs-what-devconf-cz-attendees-think-771f51a4e3b0"},"medium.com"),"."))}m.isMDXComponent=!0},52641:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/conventional_commits-35ef8be2b4387f5212676cac467c6af2.png"},53310:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/devconf_changelogs1-eff1b9245492904ddb031a20f181f890.jpg"},24124:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/devconf_changelogs2-7aedea2abc34a2ce6316feb21a428277.jpg"},6548:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/packit_workflow1-35f10086cac60a86bcbb4a80d9addd3f.png"},69858:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/packit_workflow2-8bf805ef977f91ba63dcf92ef71715b4.png"},18849:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/packit_workflow3-7beb93a0fe0d14db1816c880e0bc802b.png"},43739:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/packit_workflow4-c0745cfcdcae87a4c5c7132b9926ff74.png"},92349:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/packit_workflow5-dddf27668b755420ae946f0459e0f3e6.png"}}]);