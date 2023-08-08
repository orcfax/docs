"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[873],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?o.createElement(m,i(i({ref:t},s),{},{components:r})):o.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={id:"coop",sidebar_position:4,slug:"/coop"},i="Cardano Open Oracle Protocol",c={unversionedId:"coop/coop",id:"coop/coop",title:"Cardano Open Oracle Protocol",description:"The Orcfax oracle service uses Cardano Open Oracle Protocol (COOP) to publish",source:"@site/docs/coop/coop.md",sourceDirName:"coop",slug:"/coop",permalink:"/coop",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"coop",sidebar_position:4,slug:"/coop"},sidebar:"tutorialSidebar",previous:{title:"Roadmap",permalink:"/roadmap"},next:{title:"eUTXO native",permalink:"/eUXTO"}},l={},p=[{value:"Objective",id:"objective",level:2},{value:"COOP + Orcfax",id:"coop--orcfax",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cardano-open-oracle-protocol"},"Cardano Open Oracle Protocol"),(0,n.kt)("p",null,"The Orcfax oracle service uses Cardano Open Oracle Protocol (COOP) to publish\nand format its data feeds."),(0,n.kt)("p",null,"COOP is a set of technical guidelines that specifies a process and format for\nthe publication and consumption of off-chain data by smart contracts on the\nCardano blockchain."),(0,n.kt)("p",null,"COOP is free and open-source and can be implemented by other service providers\nto implement their own oracle solution."),(0,n.kt)("h2",{id:"objective"},"Objective"),(0,n.kt)("p",null,"The primary goal of the COOP is to define a protocol for consuming authenticated\ndata that takes advantage of the\n",(0,n.kt)("a",{parentName:"p",href:"https://cips.cardano.org/cips/cip31/"},"CIP-31 Reference Input")," feature\nintroduced in the Cardano Vasil hard fork in 2022."),(0,n.kt)("p",null,"This enhancement allows a datum written to a single Cardano eUTXO to be read by\nmultiple consumers without competing with each other for exclusive access to\ntransaction output."),(0,n.kt)("p",null,"The main design goals for the Cardano Open Oracle Protocol (COOP) are to\nleverage CIP-31 to provide:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Financial sustainability \u2013 minimize the cost and deposit needed to post,\nmaintain, and use COOP datum in eUTXOs, providing opportunities to share costs\namongst stakeholders."),(0,n.kt)("li",{parentName:"ul"},"Data accessibility \u2013 minimize the probability of datum payloads not being\navailable for reference by downstream dApp scripts."),(0,n.kt)("li",{parentName:"ul"},"Security \u2013 minimize the risk of exposure for the cryptographic keys used in\nverifying the authenticity of COOP datums.")),(0,n.kt)("h2",{id:"coop--orcfax"},"COOP + Orcfax"),(0,n.kt)("p",null,"The Orcfax oracle service has integrated the Cardano Open Oracle Protcol (COOP)\nwith its unique data collection, validation, and archiving processes to create\nthe most comprehensive solution to the ",(0,n.kt)("a",{parentName:"p",href:"oracle-problem"},"oracle problem")," in the\nblockchain industry."))}d.isMDXComponent=!0}}]);