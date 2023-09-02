"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[27],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={id:"faq-1",sidebar_position:1,slug:"/utility-token"},o="FACT utility",l={unversionedId:"FACT token/faq-1",id:"FACT token/faq-1",title:"FACT utility",description:"The Orcfax platform includes a Cardano-native utility token named FACT.",source:"@site/docs/FACT token/utility-token.md",sourceDirName:"FACT token",slug:"/utility-token",permalink:"/utility-token",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"faq-1",sidebar_position:1,slug:"/utility-token"},sidebar:"tutorialSidebar",previous:{title:"IETF Bagit",permalink:"/bagit"},next:{title:"FACT Tokenomics",permalink:"/tokenomics"}},s={},c=[{value:"Utility 1: Payment",id:"utility-1-payment",level:2},{value:"Utility 2: Staking",id:"utility-2-staking",level:2},{value:"Utility 3: Rewards",id:"utility-3-rewards",level:2},{value:"Utility 4: Voting",id:"utility-4-voting",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fact-utility"},"FACT utility"),(0,r.kt)("p",null,"The Orcfax platform includes a Cardano-native utility token named FACT."),(0,r.kt)("p",null,"The FACT token is used for:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Payment for on-demand, oracle data publication"),(0,r.kt)("li",{parentName:"ol"},"Staking by our data validator nodes"),(0,r.kt)("li",{parentName:"ol"},"Reward payments to validators"),(0,r.kt)("li",{parentName:"ol"},"Voting power in Orcfax DAO governance decisions")),(0,r.kt)("p",null,"The $FACT token will first become available on the open market via the\n",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@orcfax/orcfax-token-launch-in-collaboration-with-wingriders-launchpad-39d63da2b379"},"Wingriders Launchpad"),"."),(0,r.kt)("p",null,"There is a fixed supply of ",(0,r.kt)("a",{parentName:"p",href:"tokenomics"},"1 Billion FACT tokens")," with 50% reserved\nfor validator node rewards."),(0,r.kt)("h2",{id:"utility-1-payment"},"Utility 1: Payment"),(0,r.kt)("p",null,"The FACT token is used in the Orcfax network as the form of payment for the fees\ncharged to publish new fact statements."),(0,r.kt)("p",null,"If an Orcfax feed consumer (e.g. dApp, smart contract) would like a more current\nupdate for a given datum feed (e.g. ADA/USD), then an on-demand publication\nrequest can be triggered. The cost of publishing this new fact datum on-chain is\nquoted and paid in FACT."),(0,r.kt)("h2",{id:"utility-2-staking"},"Utility 2: Staking"),(0,r.kt)("p",null,"The FACT token is used by Orcfax validator node operators as staked collateral\nto incentivize good performance and trust in the network."),(0,r.kt)("p",null,"If, for whatever reason, a node reports irregular data or has persistent\nnetworking issues then their deposited stake will be slashed by the protocol.\nThis is both a penalty for jeopardizing the integrity of the Orcfax network,\nas well as an incentive to re-calibrate their node operations."),(0,r.kt)("h2",{id:"utility-3-rewards"},"Utility 3: Rewards"),(0,r.kt)("p",null,"The FACT token is used to reward Orcfax validator node operators. Each time a\nfact datum is published by an Orcfax node, the participating validators split\nthe FACT publication payment."),(0,r.kt)("p",null,"As well, one validator node is nominated randomly\neach publication event to publish the fact datum and submit the audit log\narchival package to the Arweave network. These random nodes are rewarded for\nthis function in FACT."),(0,r.kt)("p",null,"A full 50% of the FACT token allocation is reserved to pay validator node\nrewards. This will incentivize network participation long enough to allow the\nnetwork to become fully self-sustaining via its publication fees."),(0,r.kt)("h2",{id:"utility-4-voting"},"Utility 4: Voting"),(0,r.kt)("p",null,"Governance of the Orcfax network, including its technical operations, R&D,\ncommunity management, new feed nominations, fee schedule, etc., will all be\ntransitioned from Orcfax Ltd. to a Decentralized Autonomous Organization after\nthe network has proven to be healthy and self-sustaining."),(0,r.kt)("p",null,"As different proposals are brought to the Orcfax DAO for approval, the FACT\ntoken will serve as stake in weighted voting scores. That is to say, the more\nFACT that an Orcfax DAO member holds, the more weight their up or down\nvotes will have."))}p.isMDXComponent=!0}}]);