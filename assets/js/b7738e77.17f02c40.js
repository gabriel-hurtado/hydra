(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7426],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7172:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],l={id:"rq_launcher",title:"RQ Launcher plugin",sidebar_label:"RQ Launcher plugin"},s=void 0,p={unversionedId:"plugins/rq_launcher",id:"version-1.0/plugins/rq_launcher",isDocsHomePage:!1,title:"RQ Launcher plugin",description:"PyPI",source:"@site/versioned_docs/version-1.0/plugins/rq_launcher.md",sourceDirName:"plugins",slug:"/plugins/rq_launcher",permalink:"/docs/1.0/plugins/rq_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/plugins/rq_launcher.md",version:"1.0",lastUpdatedBy:"victorjoos",lastUpdatedAt:1624469319,formattedLastUpdatedAt:"6/23/2021",frontMatter:{id:"rq_launcher",title:"RQ Launcher plugin",sidebar_label:"RQ Launcher plugin"},sidebar:"version-1.0/docs",previous:{title:"Ray Launcher plugin",permalink:"/docs/1.0/plugins/ray_launcher"},next:{title:"Submitit Launcher plugin",permalink:"/docs/1.0/plugins/submitit_launcher"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],c={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/hydra-rq-launcher/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-rq-launcher",alt:"PyPI"})),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-rq-launcher",alt:"PyPI - License"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-rq-launcher",alt:"PyPI - Python Version"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-rq-launcher"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-rq-launcher.svg",alt:"PyPI - Downloads"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_rq_launcher/example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_rq_launcher"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"}))),(0,i.kt)("p",null,"The RQ Launcher plugin provides a launcher for distributed execution and job queuing based on ",(0,i.kt)("a",{parentName:"p",href:"https://python-rq.org"},"Redis Queue (RQ)"),"."),(0,i.kt)("p",null,"RQ launcher allows parallelizing across multiple nodes and scheduling jobs in queues. Usage of this plugin requires a ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/topics/quickstart"},"Redis server"),". When parallelisation on a single node is intended, the Joblib launcher may be preferable, since it works without a database."),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-rq-launcher --upgrade\n")),(0,i.kt)("p",null,"Usage of this plugin requires a ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/topics/quickstart"},"Redis server"),"."),(0,i.kt)("p",null,"Note that RQ does ",(0,i.kt)("a",{parentName:"p",href:"https://python-rq.org/docs/#limitations"},"not support Windows"),"."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Once installed, add ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra/launcher=rq")," to your command line. Alternatively, override ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/launcher: rq\n")),(0,i.kt)("p",null,"The configuration packaged with the plugin is defined ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_rq_launcher/hydra_plugins/hydra_rq_launcher/config.py"},"here"),". The default configuration is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app.py hydra/launcher=rq --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"your_app.py":!0,"hydra/launcher":"rq","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0},'# @package hydra.launcher\n_target_: hydra_plugins.hydra_rq_launcher.rq_launcher.RQLauncher\nenqueue:\n  job_timeout: null                  # maximum runtime of the job before it\'s killed (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit\n  ttl: null                          # maximum queued time before the job before is discarded (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit\n  result_ttl: null                   # how long successful jobs and their results are kept (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit\n  failure_ttl: null                  # specifies how long failed jobs are kept (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit\n  at_front: false                    # place job at the front of the queue, instead of the back\n  job_id: null                       # job id, will be overidden automatically by a uuid unless specified explicitly\n  description: null                  # description, will be overidden automatically unless specified explicitly\nqueue: default                       # queue name\nredis:\n  host: ${env:REDIS_HOST,localhost}  # host address via REDIS_HOST environment variable, default: localhost\n  port: ${env:REDIS_PORT,6379}       # port via REDIS_PORT environment variable, default: 6379\n  db: ${env:REDIS_DB,0}              # database via REDIS_DB environment variable, default: 0\n  password: ${env:REDIS_PASSWORD,}   # password via REDIS_PASSWORD environment variable, default: no password\n  mock: ${env:REDIS_MOCK,False}      # switch to run without redis server in single thread, for testing purposes only\nstop_after_enqueue: false            # stop after enqueueing by raising custom exception\nwait_polling: 1.0                    # wait time in seconds when polling results\n')),(0,i.kt)("p",null,"The plugin is using environment variables to store Redis connection information. The environment variables ",(0,i.kt)("inlineCode",{parentName:"p"},"REDIS_HOST"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"REDIS_PORT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"REDIS_DB"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"REDIS_PASSWORD"),", are used for the host address, port, database, and password of the server, respectively."),(0,i.kt)("p",null,"For example, they might be set as follows when using ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"zsh")," as a shell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},'export REDIS_HOST="localhost"\nexport REDIS_PORT="6379"\nexport REDIS_DB="0"\nexport REDIS_PASSWORD=""\n')),(0,i.kt)("p",null,"Assuming configured environment variables, workers connecting to the Redis server can be launched using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},"rq worker --url redis://:$REDIS_PASSWORD@$REDIS_HOST:$REDIS_PORT/$REDIS_DB\n")),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_rq_launcher/example"},"example application")," using this launcher is provided in the plugin repository."),(0,i.kt)("p",null,"Starting the app with ",(0,i.kt)("inlineCode",{parentName:"p"},"python my_app.py --multirun task=1,2,3,4,5")," will enqueue five jobs to be processed by worker instances:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py --multirun task=1,2,3,4,5\n\n[HYDRA] RQ Launcher is enqueuing 5 job(s) in queue : default\n[HYDRA] Sweep output dir : multirun/2020-06-15/18-00-00\n[HYDRA] Enqueued 13b3da4e-03f7-4d16-9ca8-cfb3c48afeae\n[HYDRA]     #1 : task=1\n[HYDRA] Enqueued 00c6a32d-e5a4-432c-a0f3-b9d4ef0dd585\n[HYDRA]     #2 : task=2\n[HYDRA] Enqueued 63b90f27-0711-4c95-8f63-70164fd850df\n[HYDRA]     #3 : task=3\n[HYDRA] Enqueued b1d49825-8b28-4516-90ca-8106477e1eb1\n[HYDRA]     #4 : task=4\n[HYDRA] Enqueued ed96bdaa-087d-4c7f-9ecb-56daf948d5e2\n[HYDRA]     #5 : task=5\n[HYDRA] Finished enqueuing\n[HYDRA] Polling job statuses every 1.0 sec\n")),(0,i.kt)("p",null,"Note that any dependencies need to be installed in the Python environment used to run the RQ worker. For serialization of jobs ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cloudpickle/cloudpickle"},(0,i.kt)("inlineCode",{parentName:"a"},"cloudpickle"))," is used."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://python-rq.org/"},"RQ documentation")," holds further information on ",(0,i.kt)("a",{parentName:"p",href:"http://python-rq.org/docs/monitoring/"},"job monitoring"),", which can be done via console or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nvie/rq-dashboard"},"web interfaces"),", and provides ",(0,i.kt)("a",{parentName:"p",href:"https://python-rq.org/patterns/"},"patterns")," for worker and exception handling."))}d.isMDXComponent=!0}}]);