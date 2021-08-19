(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6358],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5992:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],s={id:"composition",title:"Config composition",sidebar_label:"Config composition"},l=void 0,c={unversionedId:"tutorial/composition",id:"version-0.11/tutorial/composition",isDocsHomePage:!1,title:"Config composition",description:"As software gets more complex, we resort to modularity and composition to keep it manageable.",source:"@site/versioned_docs/version-0.11/tutorial/5_composition.md",sourceDirName:"tutorial",slug:"/tutorial/composition",permalink:"/docs/0.11/tutorial/composition",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/tutorial/5_composition.md",version:"0.11",lastUpdatedBy:"SaintMalik",lastUpdatedAt:1629398765,formattedLastUpdatedAt:"8/19/2021",sidebarPosition:5,frontMatter:{id:"composition",title:"Config composition",sidebar_label:"Config composition"},sidebar:"version-0.11/docs",previous:{title:"Defaults",permalink:"/docs/0.11/tutorial/defaults"},next:{title:"Multi-run",permalink:"/docs/0.11/tutorial/multi-run"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As software gets more complex, we resort to modularity and composition to keep it manageable.\nWe can do the same with configs: suppose we want our working example to support multiple databases, with\nmultiple schemas per database, and different UIs. We wouldn't write a separate class\nfor each permutation of db, schema and UI, so we shouldn't write separate configs either. We use\nthe same solution in configuration as in writing the underlying software: composition. "),(0,a.kt)("p",null,"To do this in Hydra, we first add a ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"ui")," config group:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 db\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 mysql.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 postgresql.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 schema\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 school.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 support.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 warehouse.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 ui\n\u2502\xa0\xa0     \u251c\u2500\u2500 full.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 view.yaml\n\u2514\u2500\u2500 my_app.py\n")),(0,a.kt)("p",null,"With these configs, we already have 12 possible combinations. Without composition we would need 12 separate configs,\nand a single change (such as renaming ",(0,a.kt)("inlineCode",{parentName:"p"},"db.user")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"db.username"),") would need to be done separately in every one of them. "),(0,a.kt)("p",null,"This is a maintainability nightmare -- but composition can come to the rescue."),(0,a.kt)("p",null,"Configuration file: ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - db: mysql\n  - ui: full\n  - schema: school\n")),(0,a.kt)("p",null,"The defaults are ordered:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If there are two configurations that defines the same value, the second one would win. "),(0,a.kt)("li",{parentName:"ul"},"If two configurations are contributing to the same dictionary the result would be the combined dictionary.")),(0,a.kt)("p",null,"When running this, we will compose a configuration with ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"full")," ui and the ",(0,a.kt)("inlineCode",{parentName:"p"},"school")," database schema (which we are seeing for the first time here):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\nschema:\n  database: school\n  tables:\n  - fields:\n    - name: string\n    - class: int\n    name: students\n  - fields:\n    - profession: string\n    - time: data\n    - class: int\n    name: exams\nui:\n  windows:\n    create_db: true\n    view: true\n")),(0,a.kt)("p",null,"In much the same way you can compose any of the other 11 configurations by adding appropriate overrides such as ",(0,a.kt)("inlineCode",{parentName:"p"},"db=postgresql"),"."))}m.isMDXComponent=!0}}]);