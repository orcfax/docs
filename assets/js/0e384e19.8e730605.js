"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),h=n,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={id:"intro",sidebar_position:1,slug:"/"},o="Introducing Orcfax",c={unversionedId:"intro",id:"intro",title:"Introducing Orcfax",description:"Orcfax is an oracle service that publishes facts about real world events to the Cardano blockchain.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Solution overview",permalink:"/docs/overview"}},s={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Learn more",id:"learn-more",level:2},{value:"Research-driven and standard compliant",id:"research-driven-and-standard-compliant",level:2},{value:"A chain of custody for information",id:"a-chain-of-custody-for-information",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introducing-orcfax"},"Introducing Orcfax"),(0,n.kt)("p",null,"Orcfax is an ",(0,n.kt)("a",{parentName:"p",href:"faq#what-is-an-oracle"},"oracle service")," that publishes facts about real world events to the ",(0,n.kt)("a",{parentName:"p",href:"https://cardano.org/"},"Cardano")," blockchain."),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Learn how your Cardano smart contracts and scripts can ",(0,n.kt)("a",{parentName:"p",href:"consume"},"consume data")," from Orcfax."),(0,n.kt)("p",null,"Using Orcfax's unique auditing and archiving features, you can ",(0,n.kt)("a",{parentName:"p",href:"verify"},"verify data")," published by this oracle."),(0,n.kt)("h2",{id:"learn-more"},"Learn more"),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"overview"},"Solution overview")," for a high-level explanation of the Orcfax oracle service."),(0,n.kt)("p",null,"Read our ",(0,n.kt)("a",{parentName:"p",href:"FAQ"},"FAQ")," to answer questions you may have about oracles in general."),(0,n.kt)("p",null,"Find out more about the ",(0,n.kt)("a",{parentName:"p",href:"coop"},"Cardano Open Oracle Protocol")," (COOP) that is implemented by the Orcfax service."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Orcfax concept diagram",src:r(7406).Z,width:"1907",height:"769"})),(0,n.kt)("h2",{id:"research-driven-and-standard-compliant"},"Research-driven and standard compliant"),(0,n.kt)("p",null,"Orcfax is the most comprehensive solution to the ",(0,n.kt)("a",{parentName:"p",href:"faq#what-is-the-oracle-problem"},"oracle problem")," because it is designed to be a standards-compliant recordkeeping system that integrates on-chain publication with decentralized data collection, validation, and archiving. "),(0,n.kt)("p",null,"Orcfax's sytem requirements were derived from an extensive analysis of blockchain, IT, and legal standards. These are managed in a comprehensive requirements knowledgebase. We also reviewed existing oracle services and completed a comparative analysis of how facts are proven to be authentic and accurate in disciplines such as law, historiograpy, and philosophy. "),(0,n.kt)("p",null,"First-generation oracle providers have mostly ignored industry standards and academic research findings that exist outside of the blockchain industry echo chamber. In particular ISO quality standards that provide well-established international guidelines and practices for ensuring the authenticity and accuracy of digital information; the very thing that oracles should be most concerned about. Orcfax stands out because it has been designed from the ground-up to be a standards-compliant, digital record-keeping system."),(0,n.kt)("h2",{id:"a-chain-of-custody-for-information"},"A chain of custody for information"),(0,n.kt)("p",null,"What our research has shown is that across a wide-variety of disciplines, the primary way to prove that information is authentic is by documenting the process of data collection, revision, and publication and then protecting that information from alteration while making it easily accessable for reference and audit. "),(0,n.kt)("p",null,"There are a number of relevant industry standards and practices for this which have been incorporated into the Orcfax design."),(0,n.kt)("p",null,'This means that users of the Orcfax oracle service can "trust but verify" the data that they are relying on to trigger Cardano smart contract decisions. This will become increasingly more relevant as blockchain infrastructure continues to expand its social and economic impact.'))}p.isMDXComponent=!0},7406:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/orcfax-concept-diagram-march-2023-b5cb99e1149b9d978624b52e90b32174.png"}}]);