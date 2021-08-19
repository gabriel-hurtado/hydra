(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4676],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),l=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(d.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,y=p["".concat(d,".").concat(m)]||p[m]||s[m]||i;return t?n.createElement(y,a(a({ref:r},c),{},{components:t})):n.createElement(y,a({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var u={};for(var d in r)hasOwnProperty.call(r,d)&&(u[d]=r[d]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9240:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],u={id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},d=void 0,l={unversionedId:"configure_hydra/workdir",id:"version-0.11/configure_hydra/workdir",isDocsHomePage:!1,title:"Customizing working directory pattern",description:"Run output directory grouped by day:",source:"@site/versioned_docs/version-0.11/configure_hydra/workdir.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/workdir",permalink:"/docs/0.11/configure_hydra/workdir",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/configure_hydra/workdir.md",version:"0.11",lastUpdatedBy:"SaintMalik",lastUpdatedAt:1629398765,formattedLastUpdatedAt:"8/19/2021",frontMatter:{id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},sidebar:"version-0.11/docs",previous:{title:"Customizing logging",permalink:"/docs/0.11/configure_hydra/logging"},next:{title:"Customizing Application's help",permalink:"/docs/0.11/configure_hydra/app_help"}},c=[{value:"Configuring hydra.job.override_dirname",id:"configuring-hydrajoboverride_dirname",children:[]},{value:"Customizing outputs with substitution through the CLI",id:"customizing-outputs-with-substitution-through-the-cli",children:[]}],s={toc:c};function p(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Run output directory grouped by day:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: ./outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n")),(0,i.kt)("p",null,"Sweep sub directory contains the the job number and the override parameters for the job instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  sweep:\n    subdir: ${hydra.job.num}_${hydra.job.num}_${hydra.job.override_dirname}\n")),(0,i.kt)("p",null,"Run output directory grouped by job name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${hydra.job.name}/${now:%Y-%m-%d_%H-%M-%S}\n")),(0,i.kt)("p",null,"Run output directory can contain user configuration variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${now:%Y-%m-%d_%H-%M-%S}/opt:${optimizer.type}\n\n")),(0,i.kt)("p",null,"Run output directory can contain override parameters for the job"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}\n")),(0,i.kt)("h3",{id:"configuring-hydrajoboverride_dirname"},"Configuring hydra.job.override_dirname"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hydra.job.override_dirname")," can be configured via hydra.job.config.override_dirname.\nYou can exclude keys such as ",(0,i.kt)("inlineCode",{parentName:"p"},"random_seed")," or change the separator used to construct override_dirname."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    config:\n      # configuration for the ${hydra.job.override_dirname} runtime variable\n      override_dirname:\n        kv_sep: '='\n        item_sep: ','\n        exclude_keys: []\n")),(0,i.kt)("h3",{id:"customizing-outputs-with-substitution-through-the-cli"},"Customizing outputs with substitution through the CLI"),(0,i.kt)("p",null,"Outputs can also be configured through the CLI, like any other configuration."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"python train.py model.nb_layers=3 hydra.run.dir=3_layers")),(0,i.kt)("p",null,"This feature can become really powerful to write multiruns without boilerplate using substitution."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"python train.py --multirun model.nb_layers=1,2,3,5 hydra.sweep.dir=multiruns/layers_effect hydra.sweep.subdir=\\","$","{model.nb_layers}")),(0,i.kt)("p",null,"With bash, be careful to escape the $ symbol. Otherwise, bash will try to resolve the substitution, instead of passing it to Hydra."))}p.isMDXComponent=!0}}]);