"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[477],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(o),f=n,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return o?r.createElement(m,i(i({ref:t},s),{},{components:o})):r.createElement(m,i({ref:t},s))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},7e3:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const a={id:"coop",sidebar_position:2,slug:"/coop"},i="Cardano Open Oracle Protocol",c={unversionedId:"key_concepts/coop",id:"key_concepts/coop",title:"Cardano Open Oracle Protocol",description:"The Orcfax oracle service uses Cardano Open Oracle Protocol (COOP) to publish and format its data feeds.",source:"@site/docs/key_concepts/coop.md",sourceDirName:"key_concepts",slug:"/coop",permalink:"/coop",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"coop",sidebar_position:2,slug:"/coop"},sidebar:"tutorialSidebar",previous:{title:"Oracle FAQ",permalink:"/faq"},next:{title:"$FACT token",permalink:"/fact"}},l={},p=[{value:"Objective",id:"objective",level:2},{value:"COOP + Orcfax",id:"coop--orcfax",level:2}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cardano-open-oracle-protocol"},"Cardano Open Oracle Protocol"),(0,n.kt)("p",null,"The Orcfax oracle service uses Cardano Open Oracle Protocol (COOP) to publish and format its data feeds. "),(0,n.kt)("p",null,"COOP is a set of technical guidelines that specifies a process and format for the publication and consumption of off-chain data by smart contracts on the Cardano blockchain."),(0,n.kt)("p",null,"COOP is free and open-source and can be implemented by other service providers to implement their own oracle solution. The reference implementation code and documentation are available at ",(0,n.kt)("a",{parentName:"p",href:"http://openoracle.link"},"OpenOracle.Link")," "),(0,n.kt)("p",null,"COOP was developed by the Orcfax project in consultation with the Cardano development experts at ",(0,n.kt)("a",{parentName:"p",href:"https://mlabs.city"},"MLabs"),". "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"logo for Cardano Open Oracle Protocol",src:o(4368).Z,width:"342",height:"445"})),(0,n.kt)("h2",{id:"objective"},"Objective"),(0,n.kt)("p",null,"The primary goal of the COOP is to define a protocol for consuming authentiacted data that takes advantage of the ",(0,n.kt)("a",{parentName:"p",href:"https://cips.cardano.org/cips/cip31/"},"CIP-31 Reference Input")," feature introduced in the Cardano Vasil hard fork in September 2022. "),(0,n.kt)("p",null,"This enhancement allows a datum written to a single Cardano eUTXO to be read by multiple consumers without competing with each other for exclusive access to transaction output."),(0,n.kt)("p",null,"The main design goals for the Cardano Open Oracle Protocol (COOP) are to leverage CIP-31 to provide:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Financial sustainability \u2013 minimize the cost and deposit needed to post, maintain, and use COOP datum in eUTXOs, providing opportunities to share costs amongst stakeholders."),(0,n.kt)("li",{parentName:"ul"},"Data accessibility \u2013 minimize the probability of datum payloads not being available for reference by downstream dApp scripts."),(0,n.kt)("li",{parentName:"ul"},"Security \u2013 minimize the risk of exposure for the cryptographic keys used in verifying the authenticity of COOP datums.")),(0,n.kt)("h2",{id:"coop--orcfax"},"COOP + Orcfax"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"Orcfax"},"Orcfax")," has integrated the Cardano Open Oracle Protcol (COOP) with its unique data collection, validation, and archiving processes to create the most comprehensive solution to the oracle problem in the blockchain industry."))}u.isMDXComponent=!0},4368:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/coop-logo-nov-2022-20db4eff7bf1d49c07b00b3794342c0f.png"}}]);