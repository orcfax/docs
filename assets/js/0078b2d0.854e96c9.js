"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[2502],{5680:(e,t,a)=>{a.d(t,{xA:()=>h,yg:()=>m});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(8168),r=(a(6540),a(5680));const o={id:"faq-1",sidebar_position:1,slug:"/oracle-basics"},i="Oracle basics",s={unversionedId:"FAQ/faq-1",id:"FAQ/faq-1",title:"Oracle basics",description:"What is a blockchain oracle?",source:"@site/docs/FAQ/faq-1.md",sourceDirName:"FAQ",slug:"/oracle-basics",permalink:"/oracle-basics",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"faq-1",sidebar_position:1,slug:"/oracle-basics"},sidebar:"tutorialSidebar",previous:{title:"Terms of service",permalink:"/terms-of-service"},next:{title:"The Orcfax ISPO",permalink:"/orcfax-ispo"}},c={},l=[{value:"What is a blockchain oracle?",id:"what-is-a-blockchain-oracle",level:2},{value:"What is a smart contract?",id:"what-is-a-smart-contract",level:2},{value:"What is the oracle problem?",id:"what-is-the-oracle-problem",level:2},{value:"What is the real world?",id:"what-is-the-real-world",level:2},{value:"What is a fact?",id:"what-is-a-fact",level:2}],h={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.yg)(p,(0,n.A)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"oracle-basics"},"Oracle basics"),(0,r.yg)("h2",{id:"what-is-a-blockchain-oracle"},"What is a blockchain oracle?"),(0,r.yg)("p",null,"Blockchain oracles such as ",(0,r.yg)("a",{parentName:"p",href:"https://orcfax.io/"},"Orcfax"),", ",(0,r.yg)("a",{parentName:"p",href:"https://chain.link"},"Chainlink"),",\n",(0,r.yg)("a",{parentName:"p",href:"https://charli3.io"},"Charli3"),", etc. are the technical component in blockchain\narchitectures which bring data about the real world on-chain for consumption by\nsmart contracts."),(0,r.yg)("p",null,"The name is derived from people in the ancient world who delivered messages and\nknowledge from the gods to the mortals."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"The oracle at Delphi",src:a(3334).A,width:"1068",height:"616"})),(0,r.yg)("p",null,"Software oracles process information from online sources such as website\ncontent and open datasets but mostly from server-based application programming\ninterfaces (API). These are the most common types of oracles and are used by\nalgorithmic stablecoins or automated market maker (AMM) exchanges to monitor for\nchanges in currency exchange rates."),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"https://cointelegraph.com/learn/what-is-a-blockchain-oracle-and-how-does-it-work"},"this article"),"\nfor some further information about oracles and their role in blockchain networks\n."),(0,r.yg)("h2",{id:"what-is-a-smart-contract"},"What is a smart contract?"),(0,r.yg)("p",null,"Smart contracts are software programs that execute conditional logic on\nnext-generation blockchains like Cardano (e.g. when event X happens, trigger\naction Y). Because their source code is immutably stored and run on\ndecentralized blockchain networks, they constrain the range of permissible user\nactions and their effects."),(0,r.yg)("p",null,'This means that they can reasonably be expected to have the same outcome each\ntime they are triggered. It is for this reason that smart contracts are often\nreferred to as having "trustless" qualities. The term "trustless" is a popular\nword to characterize blockchain technology because its cryptographic proofs and\ndistributed consensus algorithms ensure that its shared data is authentic,\naccurate, and secure without reliance on a trusted third-party to verify the\ninformation.'),(0,r.yg)("p",null,"Smart contracts are the key enabler for the explosion of the trillion-dollar\nDeFi industry. What most people don\u2019t realize however, is that the vast\nmajority of smart contracts are critically dependent on off-chain data\nprovided by a very small group of oracle service providers."),(0,r.yg)("p",null,"This is because almost all smart contracts need reliable real-world facts to\nserve as inputs to their application logic. This data must be \u201ctrustworthy\u201d\nbecause the execution of smart contract logic can have significant economic\nand social consequences. Especially considering that the consequences of a\nblockchain transaction are irreversible by their very design."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Example:"),(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},"A change in the Bitcoin to ADA price may trigger a limit order in a DeFi\nsmart contract."),(0,r.yg)("li",{parentName:"ul"},"The final score in a sports event may trigger a payout in a betting dApp\nsmart contract."),(0,r.yg)("li",{parentName:"ul"},"An extreme weather event may trigger a payout for a crop insurance smart\ncontract."),(0,r.yg)("li",{parentName:"ul"},"The words spoken in a political speech and authenticated via blockchain\nnotarization may trigger policy changes."))),(0,r.yg)("h2",{id:"what-is-the-oracle-problem"},"What is the oracle problem?"),(0,r.yg)("p",null,'The blockchain industry uses the "oracle problem" to refer to the various\nissues related to ensuring that on-chain smart contracts can trust real world\ndata inputs to be authentic and accurate.'),(0,r.yg)("p",null,"The DeFi industry is critically dependent on real-world data\nprovided by oracles. However, oracle engineering is still in an early stage.\nThere are still many opportunities to introduce false data about real-world\nevents into oracle data collection, validation and publication pipelines."),(0,r.yg)("p",null,"This is a very lucrative attack vector for bad actors as introducing false\noracle data can trigger large financial payouts from smart contract scripts.\nUnfortunately, there are significant challenges to preventing a so-called\n\u201cman-in-the-middle\u201d attack and proving that external real-world data introduced\nto smart contracts can be trusted to be authentic and accurate."),(0,r.yg)("p",null,"Most oracle providers provide little to no traceability on how their\npublished, on-chain data is collected and validated to be authentic and\naccurate. Their users simply see a data point appear on chain. The\ncontext of creation and use is provided by the on-chain transaction, not the\noracle datum itself."),(0,r.yg)("p",null,"Most leading oracle platforms are beginning to implement some form of\ndecentralized oracle pools as another technique to address the oracle problem.\nIn its purest form, a decentralized oracle pool uses distributed networking and\ncomputation nodes to achieve consensus on the authenticity and accuracy of\nsource data before it is published on-chain."),(0,r.yg)("p",null,"Unfortunately, most current implementations do not go this far. Instead they\noften receive data from a single, black box provider. They then might use an\noracle pool to arrive at a consensus about the ",(0,r.yg)("em",{parentName:"p"},"uniformity")," of that data and\nnot necessarily about its ",(0,r.yg)("em",{parentName:"p"},"authenticity")," or ",(0,r.yg)("em",{parentName:"p"},"accuracy"),"."),(0,r.yg)("p",null,"Orcfax has been, and continues to be, intentionally designed to addresses\nthe multiple layers of the oracle problem and to do so in a more comprehensive\nway than eny other oracle service."),(0,r.yg)("h2",{id:"what-is-the-real-world"},"What is the real world?"),(0,r.yg)("p",null,"As a research-driven project, Orcfax adopts symbol grounding from cognitive\nscience along with space-time perspective from physics to first define the\ncomponents of the real world and then map these to the applicable standards\nthat best describe them."),(0,r.yg)("p",null,"Space-time is a conceptual model at the root of the Theory of Relativity that\ncombines three dimensions of space with one dimension of time. Anything that\nhappens within this four-dimensional grid is called an event. Reporting on\nevents is what oracles do."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"What is the real world?",src:a(5091).A,width:"2069",height:"1933"})),(0,r.yg)("h2",{id:"what-is-a-fact"},"What is a fact?"),(0,r.yg)("p",null,"A fact is something that is known to have happened or to exist, especially\nsomething for which proof exists, or about which there is information.\n(Cambridge Dictionary, 2021)"),(0,r.yg)("p",null,'Truths can be interpretive, opinionated, exclusionary, contextual or personal\n(e.g. "this cylinder makes pretty shadows that are blue and circular").'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Facts lead to truths",src:a(5168).A,width:"1072",height:"866"})),(0,r.yg)("p",null,'Fact statements are more definitive\n(e.g."the name of this image file is what-is-true.png"). Orcfax publishes Fact\nStatements about the real world to the Cardano blockchain.'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"The nature of facts",src:a(3319).A,width:"2548",height:"1494"})))}d.isMDXComponent=!0},5168:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/2023-09-05--Orcfax--The-Nature-Of-Facts-dce167f475f28fc7e840d457f8a2a73e.png"},3319:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/2023-09-06--Orcfax--Nature-of-Facts-1c23f79edd7bcf70174e3d83e2cfce92.png"},5091:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/2023-09-30--Orcfax-What-Is-The-Real-World-3b6b2b60f57b1393edce022a279fe841.jpg"},3334:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/oracle-of-delphi-bw-8ee89cabe2fda05cfb0d67aaea6e84b0.png"}}]);