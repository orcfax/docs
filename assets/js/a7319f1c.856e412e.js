"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[751],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(r),f=n,p=h["".concat(l,".").concat(f)]||h[f]||d[f]||i;return r?a.createElement(p,o(o({ref:t},u),{},{components:r})):a.createElement(p,o({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[h]="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={id:"Archiving",sidebar_position:6,slug:"/archiving"},o="Fact statement archiving",c={unversionedId:"technical-architecture/Archiving",id:"technical-architecture/Archiving",title:"Fact statement archiving",description:"A major value add of the Orcfax system is its capture and archiving of the",source:"@site/docs/technical-architecture/archiving.md",sourceDirName:"technical-architecture",slug:"/archiving",permalink:"/archiving",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"Archiving",sidebar_position:6,slug:"/archiving"},sidebar:"tutorialSidebar",previous:{title:"Fact statement publication",permalink:"/publication"},next:{title:"Fact statement reference",permalink:"/reference"}},l={},s=[],u={toc:s},h="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fact-statement-archiving"},"Fact statement archiving"),(0,n.kt)("p",null,"A major value add of the Orcfax system is its capture and archiving of the\nentire workflow. From Collection, Normalization, Calculation, to Validation and\nthe publication event, the entire process generates audit logs that are bundled\ninto structured archival information packages which then get stored off chain in\na\xa0decentralized storage network called Arweave. The originally queried datum,\nthe Fact Statement from which it is pulled, the source data and the algorithms\nutilized for calculation, every step will be transparently available for the\nCardano community. The result of this is that Orcfax will effectively create a\nsecondary product from these processes, which is the development of a giant data\nlake of all the data that has ever been successfully processed by the Orcfax\nOracle network. This product, while secondary at present, is itself a colossal\nvalue add in terms of reusability. Orcfax, through the practical course of\nbusiness,\xa0 will create a massive decentralized digital archive of facts, which\ncan be used for auditing purposes, for research, and to inform or train future\nprice action or machine learning models.",(0,n.kt)("br",null)),(0,n.kt)("br",null),"There are two prominent use cases that highlight the value and reusability of the data coming out of this archival process. The first lies in the auditability of the data.",(0,n.kt)("br",null),(0,n.kt)("br",null),"Example",(0,n.kt)("br",null),"One of the data sources feeding into Orcfax is compromised, so that the Oracle itself is operating as intended, but the data source is not. The consequences of which would be immediately evident on on-chain; inaccurate data could cause a liquidation, or any other kind of event.",(0,n.kt)("br",null),(0,n.kt)("br",null),"Unfortunately, in the case of this example, once the smart contract has executed, it can\u2019t be reversed. However, because Orcfax has maintained audit logs of its workflow for every published fact, anyone can go back in time to discern where the liability lies. This has been made possible by the collection and validation of not just the target data, but also data relating to context and provenance. All of these extra facts enable auditability, and even have value off chain as well; the Orcfax process has been developed to provide solutions to larger, more global, issues around trust and auditability. Society at large for years has grappled with the problem of how to preserve our digital information and the memory of society; how do we keep information online and how do we finance these efforts in perpetuity? These are questions that many people have, that reveal how many do not realize just how vulnerable our global digital memory infrastructure is at present, and have been front of mind during the Orcfax development process.",(0,n.kt)("br",null),(0,n.kt)("br",null),"Orcfax, through the practical course of business,\xa0 will create a massive decentralized digital archive of facts, which will have high utility and value for research, and to inform or train future price action or machine learning models. This is seen as the second prominent use case, which is a value add made possible by our processes.",(0,n.kt)("br",null))}d.isMDXComponent=!0}}]);