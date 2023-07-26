"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[373],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9060:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={id:"Design principles",sidebar_position:2,slug:"/design"},o=void 0,l={unversionedId:"orcfax-solution/Design principles",id:"orcfax-solution/Design principles",title:"Design principles",description:"1. Triangulate source data",source:"@site/docs/orcfax-solution/design.md",sourceDirName:"orcfax-solution",slug:"/design",permalink:"/design",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Design principles",sidebar_position:2,slug:"/design"},sidebar:"tutorialSidebar",previous:{title:"Solution overview",permalink:"/solution-overview"},next:{title:"Methodology",permalink:"/methodology"}},c={},s=[{value:"1. Triangulate source data",id:"1-triangulate-source-data",level:2},{value:"2. Decentralize data validation",id:"2-decentralize-data-validation",level:2},{value:"3. Maximize eUTXO capabilities",id:"3-maximize-eutxo-capabilities",level:2},{value:"4. Standardize oracle data formats",id:"4-standardize-oracle-data-formats",level:2},{value:"5. Archive audit logs",id:"5-archive-audit-logs",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1-triangulate-source-data"},"1. Triangulate source data"),(0,n.kt)("h2",{id:"2-decentralize-data-validation"},"2. Decentralize data validation"),(0,n.kt)("h2",{id:"3-maximize-eutxo-capabilities"},"3. Maximize eUTXO capabilities"),(0,n.kt)("h2",{id:"4-standardize-oracle-data-formats"},"4. Standardize oracle data formats"),(0,n.kt)("h2",{id:"5-archive-audit-logs"},"5. Archive audit logs"),(0,n.kt)("p",null,"What our research has shown is that across a wide-variety of disciplines,\nthe primary way to prove that information is authentic is by documenting the\nprocess of data collection, revision, and publication and then protecting that\ninformation from alteration while making it easily accessable for reference and\naudit."),(0,n.kt)("p",null,"There are a number of relevant industry standards and practices for this which\nhave been incorporated into the Orcfax design."),(0,n.kt)("p",null,'This means that users of the Orcfax oracle service can "trust but verify" the\ndata that they are relying on to trigger Cardano smart contract decisions. This\nwill become increasingly more relevant as blockchain infrastructure continues to\nexpand its social and economic impact.'))}p.isMDXComponent=!0}}]);