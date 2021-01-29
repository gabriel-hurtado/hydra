(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{257:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(8),a=(t(0),t(268)),o={id:"debugging",title:"Debugging",sidebar_label:"Debugging"},c={unversionedId:"tutorials/basic/running_your_app/debugging",id:"tutorials/basic/running_your_app/debugging",isDocsHomePage:!1,title:"Debugging",description:"Hydra provides a few options to improve debuggability.",source:"@site/docs/tutorials/basic/running_your_app/5_debugging.md",slug:"/tutorials/basic/running_your_app/debugging",permalink:"/docs/next/tutorials/basic/running_your_app/debugging",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/basic/running_your_app/5_debugging.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1611886389,sidebar_label:"Debugging",sidebar:"docs",previous:{title:"Logging",permalink:"/docs/next/tutorials/basic/running_your_app/logging"},next:{title:"Tab completion",permalink:"/docs/next/tutorials/basic/running_your_app/tab_completion"}},l=[{value:"Printing the configuration",id:"printing-the-configuration",children:[]},{value:"Info",id:"info",children:[]}],u={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hydra provides a few options to improve debuggability."),Object(a.b)("h3",{id:"printing-the-configuration"},"Printing the configuration"),Object(a.b)("p",null,"Print the config for your app without running your function by adding ",Object(a.b)("inlineCode",{parentName:"p"},"--cfg")," or ",Object(a.b)("inlineCode",{parentName:"p"},"-c")," to the command line."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"--cfg")," option takes one argument indicating which part of the config to print:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"job"),": Your config"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hydra"),": Hydra's config"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"all"),": The full config, which is a union of ",Object(a.b)("inlineCode",{parentName:"li"},"job")," and ",Object(a.b)("inlineCode",{parentName:"li"},"hydra"),".")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# A normal run:\n$ python my_app.py\nMySQL connecting to localhost with user=root and password=1234\n\n# just show the config without running your function:\n$ python my_app.py --cfg job\ndb:\n  host: localhost\n  user: root\n  password: 1234\n")),Object(a.b)("p",null,"The printed config includes any modifications done via the command line:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:"{3}","{3}":!0}),"$ python my_app.py db.host=10.0.0.1 --cfg job\ndb:\n  host: 10.0.0.1\n  user: root\n  password: 1234\n")),Object(a.b)("p",null,"You can use --package or -p to display a subset of the configuration:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"python my_app.py --cfg hydra --package hydra.job\n# @package hydra.job\nname: my_app\nconfig_name: config\n...\n")),Object(a.b)("h3",{id:"info"},"Info"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"--info")," flag can provide information about various aspects of Hydra and your application:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--info all"),": Default behavior, prints everything"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--info config"),": Prints information useful to understanding the config composition:",Object(a.b)("br",{parentName:"li"}),"Config Search Path, Defaults Tree, Defaults List and the final config."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--info defaults"),": Prints the Final Defaults List"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--info defaults-tree"),": Prints the Defaults Tree"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--info plugins"),": Prints information about installed plugins")))}p.isMDXComponent=!0},268:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),p=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},g=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(t),g=r,d=b["".concat(o,".").concat(g)]||b[g]||s[g]||a;return t?i.a.createElement(d,c(c({ref:n},u),{},{components:t})):i.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);