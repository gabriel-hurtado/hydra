(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1532],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,h=b["".concat(u,".").concat(d)]||b[d]||c[d]||l;return t?r.createElement(h,i(i({ref:n},s),{},{components:t})):r.createElement(h,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=b;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},3899:function(e,n,t){"use strict";t.d(n,{Z:function(){return u},T:function(){return p}});var r=t(2122),a=t(7294),l=t(6742),i=t(2263),o=t(907);function u(e){return a.createElement(l.Z,(0,r.Z)({},e,{to:(n=e.to,u=(0,o.zu)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==u?void 0:u.name)?t:"current"]+n),target:"_blank"}));var n,t,u}function p(e){var n,t=null!=(n=e.text)?n:"Example";return a.createElement(u,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example"}))}},8795:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=t(2122),a=t(9756),l=(t(7294),t(3905)),i=t(3899),o=["components"],u={id:"joblib_launcher",title:"Joblib Launcher plugin",sidebar_label:"Joblib Launcher plugin"},p=void 0,s={unversionedId:"plugins/joblib_launcher",id:"plugins/joblib_launcher",isDocsHomePage:!1,title:"Joblib Launcher plugin",description:"PyPI",source:"@site/docs/plugins/joblib_launcher.md",sourceDirName:"plugins",slug:"/plugins/joblib_launcher",permalink:"/docs/next/plugins/joblib_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/joblib_launcher.md",version:"current",lastUpdatedBy:"victorjoos",lastUpdatedAt:1624469319,formattedLastUpdatedAt:"6/23/2021",frontMatter:{id:"joblib_launcher",title:"Joblib Launcher plugin",sidebar_label:"Joblib Launcher plugin"},sidebar:"docs",previous:{title:"Colorlog plugin",permalink:"/docs/next/plugins/colorlog"},next:{title:"Ray Launcher plugin",permalink:"/docs/next/plugins/ray_launcher"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],b={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pypi.org/project/hydra-joblib-launcher/"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-joblib-launcher",alt:"PyPI"})),"\n",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-joblib-launcher",alt:"PyPI - License"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-joblib-launcher",alt:"PyPI - Python Version"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-joblib-launcher"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-joblib-launcher.svg",alt:"PyPI - Downloads"})),(0,l.kt)(i.T,{text:"Example application",to:"plugins/hydra_joblib_launcher/example",mdxType:"ExampleGithubLink"}),(0,l.kt)(i.T,{text:"Plugin source",to:"plugins/hydra_joblib_launcher",mdxType:"ExampleGithubLink"})),(0,l.kt)("p",null,"The Joblib Launcher plugin provides a launcher for parallel tasks based on ",(0,l.kt)("a",{parentName:"p",href:"https://joblib.readthedocs.io/en/latest/parallel.html"},(0,l.kt)("inlineCode",{parentName:"a"},"Joblib.Parallel")),"."),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-joblib-launcher --upgrade\n")),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Once installed, add ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra/launcher=joblib")," to your command line. Alternatively, override ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/launcher: joblib\n")),(0,l.kt)("p",null,"By default, process-based parallelism using all available CPU cores is used. By overriding the default configuration, it is e.g. possible limit the number of parallel executions."),(0,l.kt)("p",null,"The JobLibLauncherConf backing the config is defined ",(0,l.kt)(i.Z,{to:"plugins/hydra_joblib_launcher/hydra_plugins/hydra_joblib_launcher/config.py",mdxType:"GithubLink"},"here"),":"),(0,l.kt)("p",null,"You can discover the Joblib Launcher parameters with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app.py hydra/launcher=joblib --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"your_app.py":!0,"hydra/launcher":"joblib","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0},"# @package hydra.launcher\n_target_: hydra_plugins.hydra_joblib_launcher.joblib_launcher.JoblibLauncher\nn_jobs: 10\nbackend: null\nprefer: processes\nrequire: null\nverbose: 0\ntimeout: null\npre_dispatch: 2*n_jobs\nbatch_size: auto\ntemp_folder: null\nmax_nbytes: null\nmmap_mode: r\n")),(0,l.kt)("p",null,"There are several standard approaches for configuring plugins. Check ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/patterns/configuring_plugins"},"this page")," for more information."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://joblib.readthedocs.io/en/latest/parallel.html"},(0,l.kt)("inlineCode",{parentName:"a"},"Joblib.Parallel")," documentation")," for full details about the parameters above."),(0,l.kt)("div",{class:"alert alert--info",role:"alert"},"NOTE: The only supported JobLib backend is Loky (process-based parallelism)."),(0,l.kt)("br",null),(0,l.kt)("p",null,"An ",(0,l.kt)(i.Z,{to:"plugins/hydra_joblib_launcher/example",mdxType:"GithubLink"},"example application")," using this launcher is provided in the plugin repository."),(0,l.kt)("p",null,"Starting the app with ",(0,l.kt)("inlineCode",{parentName:"p"},"python my_app.py --multirun task=1,2,3,4,5")," will launch five parallel executions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py --multirun task=1,2,3,4,5\n[HYDRA] Joblib.Parallel(n_jobs=-1,verbose=0,timeout=None,pre_dispatch=2*n_jobs,batch_size=auto,temp_folder=None,max_nbytes=None,mmap_mode=r,backend=loky) is launching 5 jobs\n[HYDRA] Launching jobs, sweep output dir : multirun/2020-02-18/10-00-00\n[__main__][INFO] - Process ID 14336 executing task 2 ...\n[__main__][INFO] - Process ID 14333 executing task 1 ...\n[__main__][INFO] - Process ID 14334 executing task 3 ...\n[__main__][INFO] - Process ID 14335 executing task 4 ...\n[__main__][INFO] - Process ID 14337 executing task 5 ...\n")))}d.isMDXComponent=!0}}]);