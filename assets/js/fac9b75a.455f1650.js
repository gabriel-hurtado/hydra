(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5034],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return t?n.createElement(h,o(o({ref:r},d),{},{components:t})):n.createElement(h,o({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3899:function(e,r,t){"use strict";t.d(r,{Z:function(){return l},T:function(){return s}});var n=t(2122),a=t(7294),i=t(6742),o=t(2263),p=t(907);function l(e){return a.createElement(i.Z,(0,n.Z)({},e,{to:(r=e.to,l=(0,p.zu)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==l?void 0:l.name)?t:"current"]+r),target:"_blank"}));var r,t,l}function s(e){var r,t=null!=(r=e.text)?r:"Example";return a.createElement(l,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example"}))}},6634:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var n=t(2122),a=t(9756),i=(t(7294),t(3905)),o=t(3899),p=["components"],l={id:"nevergrad_sweeper",title:"Nevergrad Sweeper plugin",sidebar_label:"Nevergrad Sweeper plugin"},s=void 0,d={unversionedId:"plugins/nevergrad_sweeper",id:"version-1.1/plugins/nevergrad_sweeper",isDocsHomePage:!1,title:"Nevergrad Sweeper plugin",description:"PyPI",source:"@site/versioned_docs/version-1.1/plugins/nevergrad_sweeper.md",sourceDirName:"plugins",slug:"/plugins/nevergrad_sweeper",permalink:"/docs/plugins/nevergrad_sweeper",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.1/plugins/nevergrad_sweeper.md",version:"1.1",lastUpdatedBy:"Toshihiko Yanase",lastUpdatedAt:1629338760,formattedLastUpdatedAt:"8/19/2021",frontMatter:{id:"nevergrad_sweeper",title:"Nevergrad Sweeper plugin",sidebar_label:"Nevergrad Sweeper plugin"},sidebar:"version-1.1/docs",previous:{title:"Ax Sweeper plugin",permalink:"/docs/plugins/ax_sweeper"},next:{title:"Optuna Sweeper plugin",permalink:"/docs/plugins/optuna_sweeper"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Example of training using Nevergrad hyperparameter search",id:"example-of-training-using-nevergrad-hyperparameter-search",children:[]},{value:"Defining the parameters",id:"defining-the-parameters",children:[{value:"Defining through commandline override",id:"defining-through-commandline-override",children:[]},{value:"Defining through config file",id:"defining-through-config-file",children:[]}]}],c={toc:u};function m(e){var r=e.components,t=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/hydra-nevergrad-sweeper/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-nevergrad-sweeper",alt:"PyPI"})),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-nevergrad-sweeper",alt:"PyPI - License"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-nevergrad-sweeper",alt:"PyPI - Python Version"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-nevergrad-sweeper"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-nevergrad-sweeper.svg",alt:"PyPI - Downloads"})),(0,i.kt)(o.T,{text:"Example application",to:"plugins/hydra_nevergrad_sweeper/example",mdxType:"ExampleGithubLink"}),(0,i.kt)(o.T,{text:"Plugin source",to:"plugins/hydra_nevergrad_sweeper",mdxType:"ExampleGithubLink"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/"},"Nevergrad")," is a derivative-free optimization platform providing a library of state-of-the-art algorithms for hyperparameter search. This plugin provides Hydra applications a mechanism to use ",(0,i.kt)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/"},"Nevergrad")," algorithms to optimize experiment/application parameters."),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-nevergrad-sweeper --upgrade\n")),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Once installed, add ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra/sweeper=nevergrad")," to your command. Alternatively, override ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra/sweeper")," in your config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/sweeper: nevergrad\n")),(0,i.kt)("p",null,"The default configuration is ",(0,i.kt)(o.Z,{to:"plugins/hydra_nevergrad_sweeper/hydra_plugins/hydra_nevergrad_sweeper/config.py",mdxType:"GithubLink"},"here"),".\nThere are several standard approaches for configuring plugins. Check ",(0,i.kt)("a",{parentName:"p",href:"/docs/patterns/configuring_plugins"},"this page")," for more information."),(0,i.kt)("h2",{id:"example-of-training-using-nevergrad-hyperparameter-search"},"Example of training using Nevergrad hyperparameter search"),(0,i.kt)("p",null,"We include an example of how to use this plugin. The file ",(0,i.kt)(o.Z,{to:"plugins/hydra_nevergrad_sweeper/example/my_app.py",mdxType:"GithubLink"},"example/my_app.py")," implements an example of minimizing a (dummy) function using a mixture of continuous and discrete parameters."),(0,i.kt)("p",null,"You can discover the Nevergrad sweeper parameters with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app hydra/sweeper=nevergrad --cfg hydra -p hydra.sweeper"',title:'"$',python:!0,your_app:!0,"hydra/sweeper":"nevergrad","--cfg":!0,hydra:!0,"-p":!0,'hydra.sweeper"':!0},"# @package hydra.sweeper\n_target_: hydra_plugins.hydra_nevergrad_sweeper.core.NevergradSweeper\noptim:\n  optimizer: NGOpt\n  budget: 80\n  num_workers: 10\n  noisy: false\n  maximize: false\n  seed: null\nparametrization: {}\nversion: 1\n")),(0,i.kt)("p",null,"The function decorated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@hydra.main()")," returns a float which we want to minimize, the minimum is 0 and reached for:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"db: mnist\nlr: 0.12\ndropout: 0.33\nbatch_size=4\n")),(0,i.kt)("p",null,"To run hyperparameter search and look for the best parameters for this function, clone the code and run the following command in the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins/hydra_nevergrad_sweeper")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python example/my_app.py -m\n")),(0,i.kt)("p",null,"You can also override the search space parametrization:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python example/my_app.py --multirun db=mnist,cifar batch_size=4,8,16 \\\n'lr=tag(log, interval(0.001, 1))' 'dropout=interval(0,1)'\n")),(0,i.kt)("p",null,"The initialization of the sweep and the first 5 evaluations (out of 100) look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"[2020-10-08 20:13:53,592][HYDRA] NevergradSweeper(optimizer=NGOpt, budget=100, num_workers=10) minimization\n[2020-10-08 20:13:53,593][HYDRA] with parametrization Dict(batch_size=Choice(choices=Tuple(4,8,16),weights=Array{(1,3)}),db=Choice(choices=Tuple(mnist,cifar),weights=Array{(1,2)}),dropout=Scalar{Cl(0,1,b)}[sigma=Log{exp=2.0}],lr=Log{exp=3.162277660168379,Cl(0.001,1,b)}):{'db': 'mnist', 'lr': 0.03162277660168379, 'dropout': 0.5, 'batch_size': 8}\n[2020-10-08 20:13:53,593][HYDRA] Sweep output dir: multirun/2020-10-08/20-13-53\n[2020-10-08 20:13:55,023][HYDRA] Launching 10 jobs locally\n[2020-10-08 20:13:55,023][HYDRA]        #0 : db=mnist lr=0.03162277660168379 dropout=0.5 batch_size=16\n[2020-10-08 20:13:55,217][__main__][INFO] - dummy_training(dropout=0.500, lr=0.032, db=mnist, batch_size=16) = 13.258\n[2020-10-08 20:13:55,218][HYDRA]        #1 : db=cifar lr=0.018178519762066934 dropout=0.5061074452336254 batch_size=4\n[2020-10-08 20:13:55,408][__main__][INFO] - dummy_training(dropout=0.506, lr=0.018, db=cifar, batch_size=4) = 0.278\n[2020-10-08 20:13:55,409][HYDRA]        #2 : db=cifar lr=0.10056825918734161 dropout=0.6399687427725211 batch_size=4\n[2020-10-08 20:13:55,595][__main__][INFO] - dummy_training(dropout=0.640, lr=0.101, db=cifar, batch_size=4) = 0.329\n[2020-10-08 20:13:55,596][HYDRA]        #3 : db=mnist lr=0.06617542958182834 dropout=0.5059497416026679 batch_size=8\n[2020-10-08 20:13:55,812][__main__][INFO] - dummy_training(dropout=0.506, lr=0.066, db=mnist, batch_size=8) = 5.230\n[2020-10-08 20:13:55,813][HYDRA]        #4 : db=mnist lr=0.16717013388679514 dropout=0.6519070394318255 batch_size=4\n...\n[2020-10-08 20:14:27,988][HYDRA] Best parameters: db=cifar lr=0.11961221693764439 dropout=0.37285878409770895 batch_size=4\n")),(0,i.kt)("p",null,"and the final 2 evaluations look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"[HYDRA]     #8 : db=mnist batch_size=4 lr=0.094 dropout=0.381\n[__main__][INFO] - my_app.py(dropout=0.381, lr=0.094, db=mnist, batch_size=4) = 1.077\n[HYDRA]     #9 : db=mnist batch_size=4 lr=0.094 dropout=0.381\n[__main__][INFO] - my_app.py(dropout=0.381, lr=0.094, db=mnist, batch_size=4) = 1.077\n[HYDRA] Best parameters: db=mnist batch_size=4 lr=0.094 dropout=0.381\n")),(0,i.kt)("p",null,"The run also creates an ",(0,i.kt)("inlineCode",{parentName:"p"},"optimization_results.yaml")," file in your sweep folder with the parameters recommended by the optimizer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"best_evaluated_result: 0.381\n\nbest_evaluated_params:\n  batch_size: 4\n  db: mnist\n  dropout: 0.381\n  lr: 0.094\n\nname: nevergrad\n")),(0,i.kt)("h2",{id:"defining-the-parameters"},"Defining the parameters"),(0,i.kt)("p",null,"The plugin supports two types of parameters: ",(0,i.kt)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/parametrization_ref.html#nevergrad.p.Choice"},"Choices")," and ",(0,i.kt)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/parametrization_ref.html#nevergrad.p.Scalar"},"Scalars"),". They can be defined either through config file or commandline override."),(0,i.kt)("h3",{id:"defining-through-commandline-override"},"Defining through commandline override"),(0,i.kt)("p",null,"Hydra provides a override parser that support rich syntax. More documentation can be found in (",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced/override_grammar/basic"},"OverrideGrammer/Basic"),") and (",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced/override_grammar/extended"},"OverrideGrammer/Extended"),"). We recommend you go through them first before proceeding with this doc."),(0,i.kt)("h4",{id:"choices"},"Choices"),(0,i.kt)("p",null,"To override a field with choices:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},"'key=1,5'\n'key=shuffle(range(1, 8))'\n'key=range(1,5)'\n")),(0,i.kt)("p",null,"You can tag an override with ",(0,i.kt)("inlineCode",{parentName:"p"},"ordered")," to indicate it's a ",(0,i.kt)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/parametrization_ref.html#nevergrad.p.TransitionChoice"},(0,i.kt)("inlineCode",{parentName:"a"},"TransitionChoice"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},"`key=tag(ordered, choice(1,2,3))`\n")),(0,i.kt)("h4",{id:"scalar"},"Scalar"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},"`key=interval(1,12)`             # Interval are float by default\n`key=int(interval(1,8))`         # Scalar bounds cast to a int\n`key=tag(log, interval(1,12))`   # call ng.p.Log if tagged with log\n")),(0,i.kt)("h3",{id:"defining-through-config-file"},"Defining through config file"),(0,i.kt)("h4",{id:"choices-1"},"Choices"),(0,i.kt)("p",null,"Choices are defined with a list in a config file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"db:\n  - mnist\n  - cifar\n")),(0,i.kt)("h4",{id:"scalars"},"Scalars"),(0,i.kt)("p",null,"Scalars can be defined in config files, with fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"init"),": optional initial value"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lower")," : optional lower bound"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"upper"),": optional upper bound"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"log"),": set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," for log distributed values"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"step"),": optional step size for looking for better parameters. In linear mode, this is an additive step; in logarithmic mode it is multiplicative."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"integer"),": set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," for integers (favor floats over integers whenever possible)")),(0,i.kt)("p",null,"Providing only ",(0,i.kt)("inlineCode",{parentName:"p"},"lower")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"upper")," bound will set the initial value to the middle of the range and the step to a sixth of the range.\n",(0,i.kt)("strong",{parentName:"p"},"Note"),": unbounded scalars (scalars with no upper and/or lower bounds) can only be defined through a config file."))}m.isMDXComponent=!0}}]);