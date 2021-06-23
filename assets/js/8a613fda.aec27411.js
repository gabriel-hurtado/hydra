(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1938],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(n),f=o,d=g["".concat(p,".").concat(f)]||g[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3899:function(e,t,n){"use strict";n.d(t,{Z:function(){return p},T:function(){return l}});var r=n(2122),o=n(7294),a=n(6742),i=n(2263),s=n(907);function p(e){return o.createElement(a.Z,(0,r.Z)({},e,{to:(t=e.to,p=(0,s.zu)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==p?void 0:p.name)?n:"current"]+t),target:"_blank"}));var t,n,p}function l(e){var t,n=null!=(t=e.text)?t:"Example";return o.createElement(p,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},4374:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=n(3899),s=["components"],p={id:"config_groups",title:"Grouping config files"},l=void 0,c={unversionedId:"tutorials/basic/your_first_app/config_groups",id:"tutorials/basic/your_first_app/config_groups",isDocsHomePage:!1,title:"Grouping config files",description:"Suppose you want to benchmark your application on each of PostgreSQL and MySQL. To do this, use config groups.",source:"@site/docs/tutorials/basic/your_first_app/4_config_groups.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/config_groups",permalink:"/docs/next/tutorials/basic/your_first_app/config_groups",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/basic/your_first_app/4_config_groups.md",version:"current",lastUpdatedBy:"victorjoos",lastUpdatedAt:1624469319,formattedLastUpdatedAt:"6/23/2021",sidebarPosition:4,frontMatter:{id:"config_groups",title:"Grouping config files"},sidebar:"docs",previous:{title:"Using the config object",permalink:"/docs/next/tutorials/basic/your_first_app/using_config"},next:{title:"Selecting default configs",permalink:"/docs/next/tutorials/basic/your_first_app/defaults"}},u=[{value:"Creating config groups",id:"creating-config-groups",children:[]},{value:"Using config groups",id:"using-config-groups",children:[]},{value:"Advanced topics",id:"advanced-topics",children:[]}],g={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.T,{to:"examples/tutorials/basic/your_first_hydra_app/4_config_groups",mdxType:"ExampleGithubLink"}),(0,a.kt)("p",null,"Suppose you want to benchmark your application on each of PostgreSQL and MySQL. To do this, use config groups. "),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Config Group"))," is a named group with a set of valid options.\nSelecting a non-existent config option generates an error message with the valid options."),(0,a.kt)("h3",{id:"creating-config-groups"},"Creating config groups"),(0,a.kt)("p",null,"To create a config group, create a directory. e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"db")," to hold a file for each database configuration option.\nSince we are expecting to have multiple config groups, we will proactively move all the configuration files\ninto a ",(0,a.kt)("inlineCode",{parentName:"p"},"conf")," directory."),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col col--4"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Directory layout"',title:'"Directory','layout"':!0},"\u251c\u2500 conf\n\u2502  \u2514\u2500 db\n\u2502      \u251c\u2500 mysql.yaml\n\u2502      \u2514\u2500 postgresql.yaml\n\u2514\u2500\u2500 my_app.py\n"))),(0,a.kt)("div",{className:"col col--4"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"driver: mysql\nuser: omry\npassword: secret\n\n\n"))),(0,a.kt)("div",{className:"col col--4"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/postgresql.yaml"',title:'"db/postgresql.yaml"'},"driver: postgresql\nuser: postgres_user\npassword: drowssap\ntimeout: 10\n\n")))),(0,a.kt)("h3",{id:"using-config-groups"},"Using config groups"),(0,a.kt)("p",null,"Since we moved all the configs into the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf")," directory, we need to tell Hydra where to find them using the ",(0,a.kt)("inlineCode",{parentName:"p"},"config_path")," parameter.\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"config_path")," is a directory relative to ",(0,a.kt)("inlineCode",{parentName:"strong"},"my_app.py")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py" {1}',title:'"my_app.py"',"{1}":!0},'@hydra.main(config_path="conf")\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"my_app.py")," without requesting a configuration will print an empty config."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\n{}\n")),(0,a.kt)("p",null,"Select an item from a config group with ",(0,a.kt)("inlineCode",{parentName:"p"},"+GROUP=OPTION"),", e.g: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{2}","{2}":!0},"$ python my_app.py +db=postgresql\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 10\n  user: postgres_user\n")),(0,a.kt)("p",null,"By default, the config group determines where the config content is placed inside the final config object.\nIn Hydra, the path to the config content is referred to as the config ",(0,a.kt)("inlineCode",{parentName:"p"},"package"),".\nThe package of ",(0,a.kt)("inlineCode",{parentName:"p"},"db/postgresql.yaml")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"db"),":"),(0,a.kt)("p",null,"Like before, you can still override individual values in the resulting config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py +db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\n")),(0,a.kt)("h3",{id:"advanced-topics"},"Advanced topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Config content can be relocated via package overrides. See ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/advanced/overriding_packages"},"Reference Manual/Packages"),".    "),(0,a.kt)("li",{parentName:"ul"},"Multiple options can be selected from the same Config Group by specifying them as a list.",(0,a.kt)("br",{parentName:"li"}),"See ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/patterns/select_multiple_configs_from_config_group"},"Common Patterns/Selecting multiple configs from a Config Group"))))}f.isMDXComponent=!0}}]);