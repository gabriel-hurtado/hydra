(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4805],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return b}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=s(t),b=r,d=h["".concat(p,".").concat(b)]||h[b]||u[b]||l;return t?a.createElement(d,i(i({ref:n},c),{},{components:t})):a.createElement(d,i({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=h;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8189:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return h}});var a=t(2122),r=t(9756),l=(t(7294),t(3905)),i=["components"],o={id:"joblib_launcher",title:"Joblib Launcher plugin",sidebar_label:"Joblib Launcher plugin"},p=void 0,s={unversionedId:"plugins/joblib_launcher",id:"version-1.0/plugins/joblib_launcher",isDocsHomePage:!1,title:"Joblib Launcher plugin",description:"PyPI",source:"@site/versioned_docs/version-1.0/plugins/joblib_launcher.md",sourceDirName:"plugins",slug:"/plugins/joblib_launcher",permalink:"/docs/1.0/plugins/joblib_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/plugins/joblib_launcher.md",version:"1.0",lastUpdatedBy:"SaintMalik",lastUpdatedAt:1629398765,formattedLastUpdatedAt:"8/19/2021",frontMatter:{id:"joblib_launcher",title:"Joblib Launcher plugin",sidebar_label:"Joblib Launcher plugin"},sidebar:"version-1.0/docs",previous:{title:"Colorlog plugin",permalink:"/docs/1.0/plugins/colorlog"},next:{title:"Ray Launcher plugin",permalink:"/docs/1.0/plugins/ray_launcher"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],u={toc:c};function h(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pypi.org/project/hydra-joblib-launcher/"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-joblib-launcher",alt:"PyPI"})),"\n",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-joblib-launcher",alt:"PyPI - License"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-joblib-launcher",alt:"PyPI - Python Version"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-joblib-launcher"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-joblib-launcher.svg",alt:"PyPI - Downloads"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_joblib_launcher/example"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_joblib_launcher"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"}))),(0,l.kt)("p",null,"The Joblib Launcher plugin provides a launcher for parallel tasks based on ",(0,l.kt)("a",{parentName:"p",href:"https://joblib.readthedocs.io/en/latest/parallel.html"},(0,l.kt)("inlineCode",{parentName:"a"},"Joblib.Parallel")),"."),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-joblib-launcher --upgrade\n")),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Once installed, add ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra/launcher=joblib")," to your command line. Alternatively, override ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/launcher: joblib\n")),(0,l.kt)("p",null,"By default, process-based parallelism using all available CPU cores is used. By overriding the default configuration, it is e.g. possible limit the number of parallel executions."),(0,l.kt)("p",null,"The JobLibLauncherConf backing the config is defined ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_joblib_launcher/hydra_plugins/hydra_joblib_launcher/config.py"},"here"),":"),(0,l.kt)("p",null,"You can discover the Joblib Launcher parameters with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app.py hydra/launcher=joblib --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"your_app.py":!0,"hydra/launcher":"joblib","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0},"# @package hydra.launcher\n_target_: hydra_plugins.hydra_joblib_launcher.joblib_launcher.JoblibLauncher\nn_jobs: 10\nbackend: null\nprefer: processes\nrequire: null\nverbose: 0\ntimeout: null\npre_dispatch: 2*n_jobs\nbatch_size: auto\ntemp_folder: null\nmax_nbytes: null\nmmap_mode: r\n")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://joblib.readthedocs.io/en/latest/parallel.html"},(0,l.kt)("inlineCode",{parentName:"a"},"Joblib.Parallel")," documentation")," for full details about the parameters above."),(0,l.kt)("div",{class:"alert alert--info",role:"alert"},"NOTE: The only supported JobLib backend is Loky (process-based parallelism)."),(0,l.kt)("br",null),(0,l.kt)("p",null,"An ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_joblib_launcher/example"},"example application")," using this launcher is provided in the plugin repository."),(0,l.kt)("p",null,"Starting the app with ",(0,l.kt)("inlineCode",{parentName:"p"},"python my_app.py --multirun task=1,2,3,4,5")," will launch five parallel executions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py --multirun task=1,2,3,4,5\n[HYDRA] Joblib.Parallel(n_jobs=-1,verbose=0,timeout=None,pre_dispatch=2*n_jobs,batch_size=auto,temp_folder=None,max_nbytes=None,mmap_mode=r,backend=loky) is launching 5 jobs\n[HYDRA] Launching jobs, sweep output dir : multirun/2020-02-18/10-00-00\n[__main__][INFO] - Process ID 14336 executing task 2 ...\n[__main__][INFO] - Process ID 14333 executing task 1 ...\n[__main__][INFO] - Process ID 14334 executing task 3 ...\n[__main__][INFO] - Process ID 14335 executing task 4 ...\n[__main__][INFO] - Process ID 14337 executing task 5 ...\n")))}h.isMDXComponent=!0}}]);