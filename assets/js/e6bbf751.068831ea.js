"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[8578],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var l=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,l,n=function(e,t){if(null==e)return{};var o,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)o=a[l],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)o=a[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=l.createContext({}),s=function(e){var t=l.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(o),h=n,f=m["".concat(p,".").concat(h)]||m[h]||u[h]||a;return o?l.createElement(f,r(r({ref:t},c),{},{components:o})):l.createElement(f,r({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,r=new Array(a);r[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,r[1]=i;for(var s=2;s<a;s++)r[s]=o[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,o)}h.displayName="MDXCreateElement"},99443:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=o(87462),n=(o(67294),o(3905));const a={title:"Temporal",authors:"TomasTomecek"},r=void 0,i={unversionedId:"workflow-engines/temporal",id:"workflow-engines/temporal",title:"Temporal",description:"https://docs.temporal.io/",source:"@site/research/workflow-engines/temporal.md",sourceDirName:"workflow-engines",slug:"/workflow-engines/temporal",permalink:"/research/workflow-engines/temporal",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/workflow-engines/temporal.md",tags:[],version:"current",frontMatter:{title:"Temporal",authors:"TomasTomecek"},sidebar:"autogenerated",previous:{title:"Selinon",permalink:"/research/workflow-engines/selinon"}},p={},s=[{value:"Polling example",id:"polling-example",level:2},{value:"Dynamic execution",id:"dynamic-execution",level:2},{value:"Where can temporal help?",id:"where-can-temporal-help",level:3},{value:"UI",id:"ui",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,l.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://temporal.io/images/logos/logo-temporal-with-copy.svg",alt:"https://docs.temporal.io/"})),(0,n.kt)("p",null,"From the docs:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Temporal is a scalable and reliable runtime for Reentrant Processes called Temporal Workflow Executions."),(0,n.kt)("p",{parentName:"blockquote"},"A Temporal Workflow Execution is a durable, reliable, and scalable function execution. It is the main unit of execution of a Temporal Application."),(0,n.kt)("p",{parentName:"blockquote"},"Each Temporal Workflow Execution has exclusive access to its local state. It executes concurrently to all other Workflow Executions, and communicates with other Workflow Executions through Signals and the environment through Activities. While a single Workflow Execution has limits on size and throughput, a Temporal Application can consist of millions to billions of Workflow Executions.")),(0,n.kt)("p",null,"After going through the docs and\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/temporalio/samples-python/"},"examples"),", it isn't ",(0,n.kt)("em",{parentName:"p"},"so"),"\ndifferent from celery. It definitely has more features and is far more\nadvanced."),(0,n.kt)("p",null,"Before reading further, please skim through this page: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.temporal.io/application-development/features"},"https://docs.temporal.io/application-development/features")),(0,n.kt)("p",null,"Let's dive right into the first example."),(0,n.kt)("h2",{id:"polling-example"},"Polling example"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/temporalio/samples-python/blob/main/polling/"},"https://github.com/temporalio/samples-python/blob/main/polling/")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/temporalio/samples-python/blob/4ef3a3779d1485a27ba5abd94180b7680aeeaafc/polling/infrequent/workflows.py#L10-L22"},"https://github.com/temporalio/samples-python/blob/4ef3a3779d1485a27ba5abd94180b7680aeeaafc/polling/infrequent/workflows.py#L10-L22")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'@workflow.defn\nclass GreetingWorkflow:\n    @workflow.run\n    async def run(self, name: str) -> str:\n        return await workflow.execute_activity(\n            compose_greeting,\n            ComposeGreetingInput("Hello", name),\n            start_to_close_timeout=timedelta(seconds=2),\n            retry_policy=RetryPolicy(\n                backoff_coefficient=1.0,\n                initial_interval=timedelta(seconds=60),\n            ),\n        )\n')),(0,n.kt)("p",null,"There are three ways how to perform polling. To be quite honest, we already do something similar with celery."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/temporalio/samples-python/blob/main/polling/infrequent/workflows.py"},"Infrequent polling"),": retry with backoff, we already do this."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/temporalio/samples-python/blob/main/polling/frequent/workflows.py"},"Frequent polling"),": similar to 1), only the frequency is different"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/temporalio/samples-python/blob/main/polling/periodic_sequence/workflows.py"},"Periodic sequence"),": similar to 2), except they poll in a child workflow")),(0,n.kt)("p",null,"Polling and retry works similarly to celery."),(0,n.kt)("h2",{id:"dynamic-execution"},"Dynamic execution"),(0,n.kt)("p",null,"This is where we'd really need help. In Packit we always have two inputs:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Configuration (packit.yaml)"),(0,n.kt)("li",{parentName:"ol"},"Event")),(0,n.kt)("p",null,"And off these two we construct a chain of tasks. That would be a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.temporal.io/workflows#workflow-execution"},"Temporal Workflow"),"."),(0,n.kt)("p",null,"With celery, creating tasks is okay, but very dynamic. We struggle with the\nfirst part: how to efficiently get from those 2 inputs to the series of tasks.\nOnce we're in handlers, things are good."),(0,n.kt)("h3",{id:"where-can-temporal-help"},"Where can temporal help?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Signals: sending data to active workflows, ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/temporalio/samples-python/blob/main/hello/hello_signal.py"},"example")),(0,n.kt)("li",{parentName:"ul"},"Workflows and activities: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/temporalio/samples-python/blob/main/hello/hello_parallel_activity.py"},"https://github.com/temporalio/samples-python/blob/main/hello/hello_parallel_activity.py"))),(0,n.kt)("p",null,"Every new event would spawn a new workflow. That would somewhat resemble our\npipeline. Celery tasks seem equivalent to activities."),(0,n.kt)("p",null,"Signals: I can't see how they would be useful in our workflow. We can just\nupdate values in database if we need communication between tasks."),(0,n.kt)("h2",{id:"ui"},(0,n.kt)("a",{parentName:"h2",href:"https://temporal.io/blog/temporal-ui-beta"},"UI")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://images.ctfassets.net/0uuz8ydxyd9p/5W5ooANY9KiGkFK1DXNPuV/ce3951c20624fe957a9dbe348dee9489/159999018-d82dfe25-394b-4332-b6e8-a4fedeceec34.png",alt:"v2 UI"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://images.ctfassets.net/0uuz8ydxyd9p/64FDx5ZtpsBT5m4CPyoxB5/dc14fdf20e25ae1c71a65b09bffd506e/160000073-fcc79ef6-4be3-4f4a-98c8-2831007a26f6.png",alt:"v2 UI workflow"})),(0,n.kt)("p",null,"The UI looks like the biggest Temporal benefit. The introspection is just amazing."),(0,n.kt)("h2",{id:"deployment"},"Deployment"),(0,n.kt)("p",null,"It's hard to tell what is the best deployment of temporal: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.temporal.io/cluster-deployment-guide#elasticsearch"},"https://docs.temporal.io/cluster-deployment-guide#elasticsearch")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/temporalio/docker-compose/blob/main/docker-compose-postgres12.yml"},"Example docker-compose with psql")),(0,n.kt)("p",null,"But overall looks to be more complex than celery."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Temporal offers richer workflow engine over celery. It wouldn't be trivial to\nport our solution from celery to temporal."),(0,n.kt)("p",null,"Except for the UI, I don't see a big advantage in temporal. Hunor has ideas how\nwe can improve processing of events. That sounds like a time better spent\nrather than migrating to a new platform."))}u.isMDXComponent=!0}}]);