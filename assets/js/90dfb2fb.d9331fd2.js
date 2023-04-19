"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[199],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return a?r.createElement(m,i(i({ref:t},h),{},{components:a})):r.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8264:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={id:"faq",sidebar_position:1,slug:"/faq"},i="Oracle FAQ",s={unversionedId:"key_concepts/faq",id:"key_concepts/faq",title:"Oracle FAQ",description:"Frequently Asked Questions:",source:"@site/docs/key_concepts/faq.md",sourceDirName:"key_concepts",slug:"/faq",permalink:"/faq",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"faq",sidebar_position:1,slug:"/faq"},sidebar:"tutorialSidebar",previous:{title:"$FACT token",permalink:"/FAX-TOKEN"},next:{title:"Cardano Open Oracle Protocol",permalink:"/coop"}},l={},c=[{value:"What is an oracle?",id:"what-is-an-oracle",level:2},{value:"What is a smart contract?",id:"what-is-a-smart-contract",level:2},{value:"What is the oracle problem?",id:"what-is-the-oracle-problem",level:2}],h={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"oracle-faq"},"Oracle FAQ"),(0,n.kt)("p",null,"Frequently Asked Questions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#oracle-faq"},"Oracle FAQ"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#what-is-an-oracle"},"What is an oracle?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#what-is-a-smart-contract"},"What is a smart contract?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#what-is-the-oracle-problem"},"What is the oracle problem?"))))),(0,n.kt)("h2",{id:"what-is-an-oracle"},"What is an oracle?"),(0,n.kt)("p",null,"Oracles like ",(0,n.kt)("a",{parentName:"p",href:"https://orcfax.link"},"Orcfax"),", ",(0,n.kt)("a",{parentName:"p",href:"https://chain.link"},"Chainlink"),", ",(0,n.kt)("a",{parentName:"p",href:"https://charli3.io"},"Charli3"),", etc. are the technical component in blockchain architectures that deliver information about the real-world to on-chain smart contracts."),(0,n.kt)("p",null,"The name is derived from people in the ancient world who delivered messages and knowledge from the gods to the mortals."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The oracle at Delphi",src:a(349).Z,width:"1068",height:"616"})),(0,n.kt)("p",null,"Software oracles process information from online sources such as website content and open datasets but mostly from server-based application programming interfaces (API). These are the most common types of oracles and are used, for example, by algorithmic stablecoins or automated market maker (AMM) exchanges to monitor for changes in currency exchange rates."),(0,n.kt)("p",null,"Hardware oracles collect and publish information from physical sources such as sensors and barcode scanners. These are found in supply-chain scenarios or earth data use cases such as tree planting verification."),(0,n.kt)("h2",{id:"what-is-a-smart-contract"},"What is a smart contract?"),(0,n.kt)("p",null,"Smart contracts are software programs that execute conditional logic on next-generation blockchains like Cardano  (e.g. when event X happens, trigger action Y).  Because their source code is immutably stored and run on decentralized blockchain networks, they constrain the range of permissible user actions and their effects. "),(0,n.kt)("p",null,'This means that they can reasonably be expected to have the same outcome each time they are triggered. Therefore smart contracts are often referred to as having "trustless" qualities. The term "trustless" is a popular word to characterize blockchain technology because its cryptographic proofs and distributed consensus algorithms ensure that its shared data is authentic, accurate, and secure without reliance on a trusted third-party to verify the information.'),(0,n.kt)("p",null,"Smart contracts are the key enabler for the explosion of the trillion-dollar DeFi industry. What most people don\u2019t realize however, is that the vast majority of smart contracts are critically dependent on off-chain data provided by a very small group of oracle service providers. "),(0,n.kt)("p",null,"This is because almost all smart contracts need reliable real-world facts to serve as inputs to their application logic. This data must be \u201ctrustworthy\u201d because the execution of smart contract logic can have significant economic and social consequences. Especially considering that the consequences of a blockchain transaction are irreversible by their very design. "),(0,n.kt)("p",null,"For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A change in the Bitcoin to ADA price may trigger a limit order in a DeFi smart contract."),(0,n.kt)("li",{parentName:"ul"},"The final score in a sports event may trigger a payout in a betting dApp smart contract."),(0,n.kt)("li",{parentName:"ul"},"An extreme weather event may trigger a payout for a crop insurance smart contract."),(0,n.kt)("li",{parentName:"ul"},"The words spoken in a political speech and authenticated via blockchain notarization may trigger policy changes or protests.")),(0,n.kt)("h2",{id:"what-is-the-oracle-problem"},"What is the oracle problem?"),(0,n.kt)("p",null,"Introducing false data about real-world events into smart contracts via an oracle feed is a potentially lucrative attack vector for bad actors as it can be used to trigger financial payouts from smart contract scripts. Unfortunately, there are significant challenges to preventing a so-called \u201cman-in-the-middle\u201d attack and proving that external real-world data introduced to smart contracts can be trusted to be authentic and accurate."),(0,n.kt)("p",null,"Collectively, the blockchain industry refers to these challenges as ",(0,n.kt)("strong",{parentName:"p"},"\u201cThe Oracle Problem.\u201d")),(0,n.kt)("p",null,"First-generation oracle providers each claim to have solved the oracle problem in their own way but what is not talked about enough is that most of these are still permissioned, black boxes. That is to say, they rely on off-chain deals to authorize and pay for access to their data which is usually sourced from a single trusted provider."),(0,n.kt)("p",null,"Smart contract developers or users of their dApps are not able to audit the provenance and flow of this data inside these black boxes, either before deciding to make an important financial decision based on that data or afterwards, to independently investigate whether any fraudulent activity has occurred or where mistakes where made. There is no clarity on how the oracle magically produced the singular data point that is eventually reported on-chain without any further context. Smart contract users are forced to trust the brand-reputation of the oracle provider as their only touchstone."),(0,n.kt)("p",null,"To be fair, most leading oracle platforms are now beginning to implement some form of decentralized oracle pools as another technique to address the oracle problem. In its purest form, a decentralized oracle pool uses distributed networking and computation nodes to validate the authenticity and accuracy of source data before it is published on-chain."),(0,n.kt)("p",null,"Unfortunately, most current implementations do not go this far. Instead they often receive data from a single, black box provider. They then use an oracle pool to arrive at a consensus about the uniformity of that data and not necessarily about its authenticity or accuracy. Unfortunately, a decentralized pool of oracle nodes is irrelevant if it is bottlenecked by a single upstream provider. To truly solve the oracle problem, multiple data sources should be collected and validated."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"overview"},"Orcfax oracle service")," addresses this problem and solves a number of related oracle problems."))}u.isMDXComponent=!0},349:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/oracle-of-delphi-bw-8ee89cabe2fda05cfb0d67aaea6e84b0.png"}}]);