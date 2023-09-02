"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[897],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5882:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={id:"faq-2",sidebar_position:2,slug:"/what-is-a-smart-contract"},i="What is a smart contract?",c={unversionedId:"FAQ/faq-2",id:"FAQ/faq-2",title:"What is a smart contract?",description:"Smart contracts are software programs that execute conditional logic on",source:"@site/docs/FAQ/faq-2.md",sourceDirName:"FAQ",slug:"/what-is-a-smart-contract",permalink:"/what-is-a-smart-contract",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"faq-2",sidebar_position:2,slug:"/what-is-a-smart-contract"},sidebar:"tutorialSidebar",previous:{title:"What is an oracle?",permalink:"/what-is-an-oracle"},next:{title:"What is the oracle problem?",permalink:"/what-is-the-oracle-problem"}},s={},l=[],p={toc:l},u="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-a-smart-contract"},"What is a smart contract?"),(0,n.kt)("p",null,"Smart contracts are software programs that execute conditional logic on\nnext-generation blockchains like Cardano  (e.g. when event X happens, trigger\naction Y).  Because their source code is immutably stored and run on\ndecentralized blockchain networks, they constrain the range of permissible user\nactions and their effects."),(0,n.kt)("p",null,'This means that they can reasonably be expected to have the same outcome each\ntime they are triggered. Therefore smart contracts are often referred to as\nhaving "trustless" qualities. The term "trustless" is a popular word to\ncharacterize blockchain technology because its cryptographic proofs and\ndistributed consensus algorithms ensure that its shared data is authentic,\naccurate, and secure without reliance on a trusted third-party to verify the\ninformation.'),(0,n.kt)("p",null,"Smart contracts are the key enabler for the explosion of the trillion-dollar\nDeFi industry. What most people don\u2019t realize however, is that the vast majority\nof smart contracts are critically dependent on off-chain data provided by a very\nsmall group of oracle service providers."),(0,n.kt)("p",null,"This is because almost all smart contracts need reliable real-world facts to\nserve as inputs to their application logic. This data must be \u201ctrustworthy\u201d\nbecause the execution of smart contract logic can have significant economic\nand social consequences. Especially considering that the consequences of a\nblockchain transaction are irreversible by their very design."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A change in the Bitcoin to ADA price may trigger a limit order in a DeFi smart\ncontract."),(0,n.kt)("li",{parentName:"ul"},"The final score in a sports event may trigger a payout in a betting dApp smart\ncontract."),(0,n.kt)("li",{parentName:"ul"},"An extreme weather event may trigger a payout for a crop insurance smart contract."),(0,n.kt)("li",{parentName:"ul"},"The words spoken in a political speech and authenticated via blockchain\nnotarization may trigger policy changes or protests.")))}h.isMDXComponent=!0}}]);