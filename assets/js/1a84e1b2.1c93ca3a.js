"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[555],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>f});var i=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,f=u["".concat(s,".").concat(p)]||u[p]||h[p]||o;return n?i.createElement(f,r(r({ref:t},d),{},{components:n})):i.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(8168),a=(n(6540),n(5680));const o={id:"faq-1",sidebar_position:2,slug:"/utility-token"},r="FACT utility",l={unversionedId:"FACT token/faq-1",id:"FACT token/faq-1",title:"FACT utility",description:"The Orcfax platform includes a Cardano-native utility token which has been named",source:"@site/docs/FACT token/utility-token.md",sourceDirName:"FACT token",slug:"/utility-token",permalink:"/utility-token",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"faq-1",sidebar_position:2,slug:"/utility-token"},sidebar:"tutorialSidebar",previous:{title:"FACT Tokenomics",permalink:"/tokenomics"},next:{title:"Solution overview",permalink:"/solution-overview"}},s={},c=[{value:"Utility 1: Payment",id:"utility-1-payment",level:2},{value:"Utility 2: Staking",id:"utility-2-staking",level:2},{value:"Utility 3: Rewards",id:"utility-3-rewards",level:2},{value:"Validator incentives",id:"validator-incentives",level:3},{value:"Utility 4: Voting",id:"utility-4-voting",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...o}=e;return(0,a.yg)(u,(0,i.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"fact-utility"},"FACT utility"),(0,a.yg)("p",null,"The Orcfax platform includes a Cardano-native utility token which has been named\n$FACT. This utility token has been designed with a limited number of explicit\nuses. $FACT can be  used for:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Payment by consumers for data publication, either by a heartbeat publication\nmodel or an on-demand publication model"),(0,a.yg)("li",{parentName:"ol"},"Staking by our data validator nodes to participate in oracle processes"),(0,a.yg)("li",{parentName:"ol"},"Reward payments to validators for participation in the Orcfax node network"),(0,a.yg)("li",{parentName:"ol"},"Voting power in Orcfax DAO governance decisions")),(0,a.yg)("p",null,"Importantly, Orcfax has grounded the utility of the token by minting a fixed\nsupply; there will only ever be ",(0,a.yg)("a",{parentName:"p",href:"tokenomics"},"1 Billion FACT tokens"),", and 50% of\nthis total supply has been reserved for validator node rewards to\nincentivize participation."),(0,a.yg)("h2",{id:"utility-1-payment"},"Utility 1: Payment"),(0,a.yg)("p",null,"The FACT token is used in the Orcfax network as the form of payment for the fees\ncharged to publish new fact statements."),(0,a.yg)("p",null,"Orcfax feed consumers (e.g. dApp, smart contract) seeking to fund feeds which\nare published on a user-stipulated heartbeat schedule will have the cost of\npublication quoted in FACT."),(0,a.yg)("p",null,"Alternatively, if an Orcfax feed consumer needs a more current update for a\ngiven datum feed (e.g. ADA/USD) than is available on-chain, then an on-demand\npublication request can be triggered. The cost of publishing this new fact datum\non-chain will likewise be quoted in $FACT."),(0,a.yg)("p",null,"While consumers will also have the ability to pay in ADA, these transactions\nwill incur an additional fee (covering the costs of converting the ADA to FACT)\ntokens in order to fulfill the feed payment. The ADA which was used to fund\npublication will be sold for FACT."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Orcfax Economic Model",src:n(1331).A,width:"5261",height:"3041"})),(0,a.yg)("h2",{id:"utility-2-staking"},"Utility 2: Staking"),(0,a.yg)("p",null,"$FACT will also be used by Orcfax validator node operators as staked collateral\nto incentivize good performance and trust in the network."),(0,a.yg)("p",null,"To become an Orcfax Validator, users are required to 1) mint and/or hold a\nValidator license, and 2) deposit $FACT tokens into the Orcfax validator smart\ncontract."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"There are only 100 validator licenses available for node operation. During\nthe origin minting process, each license cost 100,000 $FACT."),(0,a.yg)("li",{parentName:"ol"},"The required $FACT deposit will be determined by market value as of 1 March\n2024, whereby either 500,000 $FACT or 10,000 USD equivalent in $FACT will be\nrequired (i.e. whichever $FACT amount is larger on that date).")),(0,a.yg)("p",null,"By requiring operators to put up a certain amount of $FACT to run a node,\noperators demonstrate their \u201cskin in the game\u201d. Orcfax decided on the required\namount of $FACT which simultaneously encourages a diverse community of node\noperators while also discouraging bad actors."),(0,a.yg)("p",null,"On January 9th, 2024 Orcfax announced published its\n",(0,a.yg)("a",{parentName:"p",href:"https://medium.com/@orcfax/orcfax-validator-license-announcement-5da07ef1439c"},"Orcfax Validator License Announcement"),", which outlined what\npotential node operators and non-validators could look forwardd to as licenses\nbecame available and as the incentivized testnet (ITN) was rolled out."),(0,a.yg)("p",null,"If, for whatever reason, a node reports irregular data or has persistent\nnetworking issues, then their deposited stake will be slashed by the protocol.\nThis is both a penalty for jeopardizing the integrity of the Orcfax network, as\nwell as an incentive to re-calibrate their node operations."),(0,a.yg)("h2",{id:"utility-3-rewards"},"Utility 3: Rewards"),(0,a.yg)("p",null,"When a fact statement is published on chain the validator that was randomly\nselected to put that statement on-chain will be rewarded with FACT tokens. This\nmeans that because the amount of Validator licenses are limited, more feeds\nmeans more rewards will be distributed to each active validator."),(0,a.yg)("p",null,"The initial version of the validator network (V1) will be designed to select\nvalidators at random to publish a fact statement, giving all validators an equal\nchance of earning a reward. Future models will weight this random distribution\nby biasing rewards to those with higher $FACT delegation."),(0,a.yg)("p",null,"A full 50% of the FACT token allocation has been reserved to subsidize the\npayment of validator node rewards. This will incentivize network participation\nlong enough to allow the network to become fully self-sustaining via its\npublication fees."),(0,a.yg)("h3",{id:"validator-incentives"},"Validator incentives"),(0,a.yg)("p",null,"Validators have the ability to estimate potential rewards that they can expect\nby utilizing the ",(0,a.yg)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1aH4Zwtn8KUTtrdzBBZFK1_Kulb7_a4uJGjzLhmPTLFc/edit#gid=1934045699"},"initial rewards calculator"),"."),(0,a.yg)("p",null,"The calculator allows users to simulate certain scenarios by modifying the most\nimportant parameters that define the estimated rewards (like number of feeds).\nThe yellow fields can be modified by the user. Some fields include notes to help\nusers understand how the calculation works."),(0,a.yg)("h2",{id:"utility-4-voting"},"Utility 4: Voting"),(0,a.yg)("p",null,"Governance of the Orcfax network, including its technical operations, R&D,\ncommunity management, new feed nominations, fee schedule, etc., will all be\ntransitioned from Orcfax Ltd. to a Decentralized Autonomous Organization after\nthe network has proven to be healthy and self-sustaining."),(0,a.yg)("p",null,"As different proposals are brought to the Orcfax DAO for approval, the FACT\ntoken will serve as stake in weighted voting scores. That is to say, the more\nFACT that an Orcfax DAO member holds, the more weight their up or down\nvotes will have."))}h.isMDXComponent=!0},1331:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-02--Orcfax-economic-model2-65ad7c5cecb3f96d1ba042082b9876ef.jpg"}}]);