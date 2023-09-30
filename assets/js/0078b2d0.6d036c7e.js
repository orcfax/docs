"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[703],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return a?r.createElement(m,i(i({ref:t},h),{},{components:a})):r.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={id:"faq-1",sidebar_position:1,slug:"/oracle-basics"},i="Oracle basics",s={unversionedId:"FAQ/faq-1",id:"FAQ/faq-1",title:"Oracle basics",description:"What is an oracle?",source:"@site/docs/FAQ/faq-1.md",sourceDirName:"FAQ",slug:"/oracle-basics",permalink:"/oracle-basics",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"faq-1",sidebar_position:1,slug:"/oracle-basics"},sidebar:"tutorialSidebar",previous:{title:"Roadmap",permalink:"/roadmap"},next:{title:"The Orcfax ISPO",permalink:"/The-orcfax-ispo"}},c={},l=[{value:"What is an oracle?",id:"what-is-an-oracle",level:2},{value:"What is a smart contract?",id:"what-is-a-smart-contract",level:2},{value:"What is the oracle problem?",id:"what-is-the-oracle-problem",level:2},{value:"What is the real world?",id:"what-is-the-real-world",level:2},{value:"What is a fact?",id:"what-is-a-fact",level:2}],h={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"oracle-basics"},"Oracle basics"),(0,n.kt)("h2",{id:"what-is-an-oracle"},"What is an oracle?"),(0,n.kt)("p",null,"Oracles like ",(0,n.kt)("a",{parentName:"p",href:"https://orcfax.io/"},"Orcfax"),", ",(0,n.kt)("a",{parentName:"p",href:"https://chain.link"},"Chainlink"),",\n",(0,n.kt)("a",{parentName:"p",href:"https://charli3.io"},"Charli3"),", etc. are the technical component in blockchain\narchitectures that deliver data about the real-world to on-chain smart contracts\n."),(0,n.kt)("p",null,"The name is derived from people in the ancient world who delivered messages and\nknowledge from the gods to the mortals."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The oracle at Delphi",src:a(349).Z,width:"1068",height:"616"})),(0,n.kt)("p",null,"Software oracles process information from online sources such as website content\nand open datasets but mostly from server-based application programming\ninterfaces (API). These are the most common types of oracles and are used, for\nexample, by algorithmic stablecoins or automated market maker (AMM) exchanges to\nmonitor for changes in currency exchange rates."),(0,n.kt)("h2",{id:"what-is-a-smart-contract"},"What is a smart contract?"),(0,n.kt)("p",null,"Smart contracts are software programs that execute conditional logic on\nnext-generation blockchains like Cardano  (e.g. when event X happens, trigger\naction Y).  Because their source code is immutably stored and run on\ndecentralized blockchain networks, they constrain the range of permissible user\nactions and their effects."),(0,n.kt)("p",null,'This means that they can reasonably be expected to have the same outcome each\ntime they are triggered. Therefore smart contracts are often referred to as\nhaving "trustless" qualities. The term "trustless" is a popular word to\ncharacterize blockchain technology because its cryptographic proofs and\ndistributed consensus algorithms ensure that its shared data is authentic,\naccurate, and secure without reliance on a trusted third-party to verify the\ninformation.'),(0,n.kt)("p",null,"Smart contracts are the key enabler for the explosion of the trillion-dollar\nDeFi industry. What most people don\u2019t realize however, is that the vast majority\nof smart contracts are critically dependent on off-chain data\nprovided by a very small group of oracle service providers."),(0,n.kt)("p",null,"This is because almost all smart contracts need reliable real-world facts to\nserve as inputs to their application logic. This data must be \u201ctrustworthy\u201d\nbecause the execution of smart contract logic can have significant economic\nand social consequences. Especially considering that the consequences of a\nblockchain transaction are irreversible by their very design."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A change in the Bitcoin to ADA price may trigger a limit order in a DeFi smart\ncontract."),(0,n.kt)("li",{parentName:"ul"},"The final score in a sports event may trigger a payout in a betting dApp smart\ncontract."),(0,n.kt)("li",{parentName:"ul"},"An extreme weather event may trigger a payout for a crop insurance smart contract."),(0,n.kt)("li",{parentName:"ul"},"The words spoken in a political speech and authenticated via blockchain\nnotarization may trigger policy changes or protests.")),(0,n.kt)("h2",{id:"what-is-the-oracle-problem"},"What is the oracle problem?"),(0,n.kt)("p",null,'The blockchain industry refers to the "oracle problem" to refer to the various\nissues related to ensuring that on-chain smart contracts can trust real world\ndata inputs to be authentic and accurate.'),(0,n.kt)("p",null,"The trillion dollar DeFi industry is critically dependent on real-world data\nprovided by oracles. However, oracle engineering is still in an early stage.\nThere are still many opportunities to introduce false data about real-world\nevents into oracle data collection, validation and publication pipelines."),(0,n.kt)("p",null,"This is a very lucrative attack vector for bad actors as introducing false\noracle data can trigger large financial payouts from smart contract scripts.\nUnfortunately, there are significant challenges to preventing a so-called\n\u201cman-in-the-middle\u201d attack and proving that external real-world data introduced\nto smart contracts can be trusted to be authentic and accurate."),(0,n.kt)("p",null,"Most oracle providers provide little to no traceability on how their\npublished, on-chain data is collected and validated to be authentic and\naccurate. Their users simply see a single magic data point appear on chain. The\ncontext of creation and use is provided by the on-chain transaction, not the\noracle datum itself."),(0,n.kt)("p",null,"Most leading oracle platforms are beginning to implement some form of\ndecentralized oracle pools as another technique to address the oracle problem.\nIn its purest form, a decentralized oracle pool uses distributed networking and\ncomputation nodes to achieve consensus on the authenticity and accuracy of\nsource data before it is published on-chain."),(0,n.kt)("p",null,"Unfortunately, most current implementations do not go this far. Instead they\noften receive data from a single, black box provider. They then use an oracle\npool to arrive at a consensus about the ",(0,n.kt)("em",{parentName:"p"},"uniformity")," of that data and not\nnecessarily about its ",(0,n.kt)("em",{parentName:"p"},"authenticity")," or ",(0,n.kt)("em",{parentName:"p"},"accuracy"),"."),(0,n.kt)("p",null,"**Orcfax is a second-generation oracle that directly tackles"),(0,n.kt)("h2",{id:"what-is-the-real-world"},"What is the real world?"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"What is the real world?",src:a(418).Z,width:"8871",height:"5523"})),(0,n.kt)("h2",{id:"what-is-a-fact"},"What is a fact?"),(0,n.kt)("p",null,"A fact is something that is known to have happened or to exist, especially\nsomething for which proof exists, or about which there is information.\n(Cambridge Dictionary, 2021)"),(0,n.kt)("p",null,'Truths can be interpretive, opinionated, exclusionary, contextual or personal,\ne.g. "this cylinder makes pretty shadows that are blue and circular".'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Facts lead to truths",src:a(2630).Z,width:"1072",height:"866"})),(0,n.kt)("p",null,'Fact statements are more definitive, e.g.\n"the name of this image file is what-is-true.png". Orcfax publishes fact\nstatements about the real world to the Cardano blockchain.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The nature of facts",src:a(7231).Z,width:"2548",height:"1494"})))}p.isMDXComponent=!0},2630:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2023-09-05--Orcfax--The-Nature-Of-Facts-dce167f475f28fc7e840d457f8a2a73e.png"},7231:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2023-09-06--Orcfax--Nature-of-Facts-1c23f79edd7bcf70174e3d83e2cfce92.png"},418:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2023-09-28--Orcfax-What-Is-The-Real-World-213d33548ce6bb09912248d1e619b551.jpg"},349:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/oracle-of-delphi-bw-8ee89cabe2fda05cfb0d67aaea6e84b0.png"}}]);