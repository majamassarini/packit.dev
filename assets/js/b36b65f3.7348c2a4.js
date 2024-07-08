"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[79466],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>w});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,w=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?o.createElement(w,l(l({ref:t},c),{},{components:r})):o.createElement(w,l({ref:t},c))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98370:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={title:"Argo Workflows",authors:"lbarcziova"},l=void 0,i={unversionedId:"workflow-engines/argo-workflows",id:"workflow-engines/argo-workflows",title:"Argo Workflows",description:"- docs//argoproj.github.io/argo-workflows/",source:"@site/research/workflow-engines/argo-workflows.md",sourceDirName:"workflow-engines",slug:"/workflow-engines/argo-workflows",permalink:"/research/workflow-engines/argo-workflows",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/workflow-engines/argo-workflows.md",tags:[],version:"current",frontMatter:{title:"Argo Workflows",authors:"lbarcziova"},sidebar:"autogenerated",previous:{title:"Airflow",permalink:"/research/workflow-engines/airflow"},next:{title:"Celery Canvas",permalink:"/research/workflow-engines/celery-canvas"}},s={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"docs: ",(0,n.kt)("a",{parentName:"p",href:"https://argoproj.github.io/argo-workflows/"},"https://argoproj.github.io/argo-workflows/")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. Argo Workflows is implemented as a Kubernetes CRD (Custom Resource Definition)."),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Define workflows where each step in the workflow is a container."),(0,n.kt)("li",{parentName:"ul"},"Model multi-step workflows as a sequence of tasks or capture the dependencies between tasks using a directed acyclic graph (DAG)."),(0,n.kt)("li",{parentName:"ul"},"Easily run compute intensive jobs for machine learning or data processing in a fraction of the time using Argo Workflows on Kubernetes.")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"example of multi-step workflow config:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: argoproj.io/v1alpha1\nkind: Workflow\nmetadata:\n  generateName: steps-\nspec:\n  entrypoint: hello-hello-hello\n\n  # This spec contains two templates: hello-hello-hello and whalesay\n  templates:\n    - name: hello-hello-hello\n      # Instead of just running a container\n      # This template has a sequence of steps\n      steps:\n        - - name: hello1 # hello1 is run before the following steps\n            template: whalesay\n            arguments:\n              parameters:\n                - name: message\n                  value: "hello1"\n        - - name: hello2a # double dash => run after previous step\n            template: whalesay\n            arguments:\n              parameters:\n                - name: message\n                  value: "hello2a"\n          - name: hello2b # single dash => run in parallel with previous step\n            template: whalesay\n            arguments:\n              parameters:\n                - name: message\n                  value: "hello2b"\n\n    # This is the same template as from the previous example\n    - name: whalesay\n      inputs:\n        parameters:\n          - name: message\n      container:\n        image: docker/whalesay\n        command: [cowsay]\n        args: ["{{inputs.parameters.message}}"]\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"it can be specified which Role (i.e. which permissions) the ServiceAccount that Argo uses by binding a\nRole to a ServiceAccount using a RoleBinding (by default, ServiceAccount from the namespace from which it is run, which will almost always have insufficient privileges by default)")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"All pods in a workflow run with the service account specified in workflow.spec.serviceAccountName, or if omitted, the default service account of the workflow's namespace.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"provides UI"),(0,n.kt)("li",{parentName:"ul"},"workflows can be run using ",(0,n.kt)("inlineCode",{parentName:"li"},"Argo CLI")," or directly ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl")),(0,n.kt)("li",{parentName:"ul"},"provides an API and client libraries:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"for Python there is an auto-generated one without good documentation: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/argoproj/argo-workflows/tree/master/sdks/python"},"https://github.com/argoproj/argo-workflows/tree/master/sdks/python")),(0,n.kt)("li",{parentName:"ul"},"example:")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# imports\n\nmanifest = IoArgoprojWorkflowV1alpha1Workflow(\n    metadata=ObjectMeta(generate_name='hello-world-'),\n    spec=IoArgoprojWorkflowV1alpha1WorkflowSpec(\n        entrypoint='whalesay',\n        templates=[\n            IoArgoprojWorkflowV1alpha1Template(\n                name='whalesay',\n                container=Container(\n                    image='docker/whalesay:latest', command=['cowsay'], args=['hello world']))]))\n\napi_client = argo_workflows.ApiClient(configuration)\napi_instance = workflow_service_api.WorkflowServiceApi(api_client)\n\nif __name__ == '__main__':\n    api_response = api_instance.create_workflow(\n        namespace='argo',\n        body=IoArgoprojWorkflowV1alpha1WorkflowCreateRequest(workflow=manifest),\n        _check_return_type=False)\n    pprint(api_response)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"complex architecture: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/argoproj/argo-workflows/blob/master/docs/architecture.md"},"https://github.com/argoproj/argo-workflows/blob/master/docs/architecture.md")),(0,n.kt)("li",{parentName:"ul"},"doesn't look like a fit for us - not that flexible definition of tasks that we would need")))}m.isMDXComponent=!0}}]);