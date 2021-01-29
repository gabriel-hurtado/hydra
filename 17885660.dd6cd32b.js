(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{268:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=m(n),u=a,d=b["".concat(o,".").concat(u)]||b[u]||p[u]||i;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),i=(n(0),n(268)),o={id:"automatic_schema_matching",title:"Automatic schema-matching",hide_title:!0},c={unversionedId:"upgrades/1.0_to_1.1/automatic_schema_matching",id:"upgrades/1.0_to_1.1/automatic_schema_matching",isDocsHomePage:!1,title:"Automatic schema-matching",description:"In Hydra 1.0, when config file is loaded, if a config with a matching name and group is present in the ConfigStore,",source:"@site/docs/upgrades/1.0_to_1.1/automatic_schema_matching.md",slug:"/upgrades/1.0_to_1.1/automatic_schema_matching",permalink:"/docs/next/upgrades/1.0_to_1.1/automatic_schema_matching",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/upgrades/1.0_to_1.1/automatic_schema_matching.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1611886389,sidebar:"docs",previous:{title:"Changes to Package Header",permalink:"/docs/next/upgrades/1.0_to_1.1/changes_to_package_header"},next:{title:"Config path changes",permalink:"/docs/next/upgrades/0.11_to_1.0/config_path_changes"}},l=[{value:"Migration",id:"migration",children:[]}],s={toc:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In Hydra 1.0, when config file is loaded, if a config with a matching name and group is present in the ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigStore"),",\nit is used as the schema for the newly loaded config."),Object(i.b)("p",null,"There are several problems with this approach:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Inflexible"),": This approach can only be used when a schema should validate a single config file.\nIt does not work if you want to use the same schema to validate multiple config files."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Surprising"),": This hidden behavior can be surprising. There is no way to tell this is going to happen when looking at a given\nconfig file.")),Object(i.b)("p",null,"Hydra 1.1 deprecates this behavior in favor of an explicit config extension via the Defaults List.",Object(i.b)("br",{parentName:"p"}),"\n","This upgrade page aims to provide the TLDR. It is highly recommended that you read the following pages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/advanced/defaults_list"}),"Background: The Defaults List")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/patterns/extending_configs"}),"Background: Extending configs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/tutorials/structured_config/schema"}),"Tutorial: Structured config schema"))),Object(i.b)("h3",{id:"migration"},"Migration"),Object(i.b)("p",null,"The migration involves two steps for each config file."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Store use a different name when storing the schema into the config store. Common choices:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"base_")," prefix, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"base_mysql"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"_schema")," suffix, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"mysql_schema"),"."))),Object(i.b)("li",{parentName:"ol"},"Add the schema to the Defaults List in the config file.")),Object(i.b)("h4",{id:"hydra-10"},"Hydra 1.0"),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'}),"# @package _group_\nhost: localhost\nport: 3306\n\n\n\n\n\n\n"))),Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="Schema for db/mysql.yaml"',title:'"Schema',for:!0,'db/mysql.yaml"':!0}),'@dataclass\nclass MySQLConfig:\n    host: str\n    port: int\n\ncs = ConfigStore.instance()\ncs.store(group="db",\n         name="mysql", \n         node=MySQLConfig)\n')))),Object(i.b)("h4",{id:"hydra-11"},"Hydra 1.1"),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml" {1,2}',title:'"db/mysql.yaml"',"{1,2}":!0}),"defaults:\n  - base_mysql\n\nhost: localhost\nport: 3306\n\n\n\n\n"))),Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="Schema for db/mysql.yaml" {8}',title:'"Schema',for:!0,'db/mysql.yaml"':!0,"{8}":!0}),'@dataclass\nclass MySQLConfig:\n    host: str\n    port: int\n\ncs = ConfigStore.instance()\ncs.store(group="db",\n         name="base_mysql", \n         node=MySQLConfig)\n')))))}m.isMDXComponent=!0}}]);