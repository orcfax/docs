"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[456],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>f});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,f=h["".concat(l,".").concat(p)]||h[p]||u[p]||i;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(8168),o=(n(6540),n(5680));const i={id:"The Orcfax vision",sidebar_position:3,slug:"/the-orcfax-vision"},r=void 0,s={unversionedId:"orcfax-solution/The Orcfax vision",id:"orcfax-solution/The Orcfax vision",title:"The Orcfax vision",description:"Oracles are a critical piece of blockchain infrastructure that when overlooked,",source:"@site/docs/orcfax-solution/The-Orcfax-vision.md",sourceDirName:"orcfax-solution",slug:"/the-orcfax-vision",permalink:"/the-orcfax-vision",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"The Orcfax vision",sidebar_position:3,slug:"/the-orcfax-vision"},sidebar:"tutorialSidebar",previous:{title:"Publication models",permalink:"/publication-models"},next:{title:"Roadmap",permalink:"/roadmap"}},l={},c=[{value:"Breaking it down",id:"breaking-it-down",level:2},{value:"Triangulation of data points vs single source data points",id:"triangulation-of-data-points-vs-single-source-data-points",level:3},{value:"Decentralized &amp; permissionless pool of validators vs off-chain kyc-ed validators",id:"decentralized--permissionless-pool-of-validators-vs-off-chain-kyc-ed-validators",level:3},{value:"Aggregated &amp; validated by Orcfax vs Aggregated and validated by dApp",id:"aggregated--validated-by-orcfax-vs-aggregated-and-validated-by-dapp",level:3},{value:"Heartbeat &amp; on-demand feeds vs heartbeat feeds only",id:"heartbeat--on-demand-feeds-vs-heartbeat-feeds-only",level:3},{value:"Auditable feeds via user friendly explorer vs difficult to audit on-chain data",id:"auditable-feeds-via-user-friendly-explorer-vs-difficult-to-audit-on-chain-data",level:3},{value:"Standards-based interoperable audit trails vs feed only available on-chain",id:"standards-based-interoperable-audit-trails-vs-feed-only-available-on-chain",level:3},{value:"Cost-effective eUTXO model vs cost-intensive eUTXO model",id:"cost-effective-eutxo-model-vs-cost-intensive-eutxo-model",level:3},{value:"DAO governance &amp; treasury vs Centralized company",id:"dao-governance--treasury-vs-centralized-company",level:3},{value:"Open source vs Closed source",id:"open-source-vs-closed-source",level:3},{value:"What is the Orcfax difference?",id:"what-is-the-orcfax-difference",level:2}],d={toc:c},h="wrapper";function u(e){let{components:t,...i}=e;return(0,o.yg)(h,(0,a.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Oracles are a critical piece of blockchain infrastructure that when overlooked,\nor under-utilized, can have severe impacts on DeFi protocols. An Oracle's\nprimary role is to provide data about the real world, which the blockchain is\ninnately ignorant of. When oracles bring this data on chain, it opens up a\nworld of new possibilities for protocols which can utilize the data to underpin\nbusiness logic and to serve as inputs to trigger smart contract execution.\nThese smart contracts can represent significant financial assets."),(0,o.yg)("p",null,"However, the heavy reliance on oracles to provide these inputs, and the trust\nthat consuming dApps must have in the data being utilized, creates new risk\nvectors: the risk of oracles being compromised, and the risk that oracles will\nfeed blockchain smart contracts with false or inaccurate information; this\nis called the \u201coracle problem\u201d."),(0,o.yg)("p",null,"The Cardano blockchain is a permissionless, public network, and while this fact\ngreatly benefits users and developers, it also means that anyone can develop\nsoftware or services for the purpose of providing smart contracts with data,\nall while claiming to fulfill the role of an oracle. We at Orcfax strongly\nobject to this position."),(0,o.yg)("p",null,'The ability to identify software, or a service, as an "oracle" is reserved for\nthose which have been intentionally designed to solve the \u201coracle problem\u201d, and\nDeFi protocols should look critically at any which do not explicitly address\nthis issue.'),(0,o.yg)("p",null,"The Oracle problem represents several interconnected issues regarding trust;\nOrcfax believes that solving the oracle problem means designing a solution from\nthe bottom up with a focus on addressing decentralization and\naudit-ability."),(0,o.yg)("p",null,"Recent claims within the Cardano community of new oracle solutions mean that\nusers, now more than ever, need to assess the services being offered, the logic\nbehind their design, how they are executed, and the implications of their use."),(0,o.yg)("p",null,'What follows is a short introduction to what we have identified as critical\naspects of an oracle. It is our belief that solutions should be able to\ndemonstrate these aspects in order to claim that their solution is in fact an\noracle, and that it\'s addressing the "oracle problem" through the provided\nservices.'),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"The Orcfax oracle vision",src:n(7140).A,width:"3840",height:"2300"})),(0,o.yg)("h2",{id:"breaking-it-down"},"Breaking it down"),(0,o.yg)("p",null,"The critical aspects of an oracle solution outlined in the above table\ndemonstrate the Orcfax vision for Cardano oracles and how they should be\ndesigned in order to effectively address the oracle problem. To add more\ncontext, and to help users further appreciate how important these are, the\nfollowing will further unpack each aspect, its significance, and how the Orcfax\nsolution provides an answer."),(0,o.yg)("h3",{id:"triangulation-of-data-points-vs-single-source-data-points"},"Triangulation of data points vs single source data points"),(0,o.yg)("p",null,"To avoid single points of failure or attack, Orcfax has adopted the\nmathematical principle of triangulation, which is concerned with the\nutilization of multiple methods, or sources of information, in order to derive\na comprehensive understanding of phenomena in the world; this principle also\naids in testing the validity of source information by providing the ability to\ncompare data across sources. In practice, the principle of triangulation is\nleveraged by our project to develop robust Orcfax nodes. Each of these nodes\nare required to query a min of 3+ primary sources as a validation check. If one\nsource fails, gets hacked, or contributes outlier data, then the remaining\nreliable sources can still be utilized to derive authentic values from."),(0,o.yg)("p",null,"Orcfax released its first price feed (ADA/USD) with three primary sources being\nleveraged in accordance with this principle; however, future updates and\nadditional products will benefit from an increased pool of primary source data\nproviders as Orcfax continues to enhance the reliability and security of its\noracle solution."),(0,o.yg)("h3",{id:"decentralized--permissionless-pool-of-validators-vs-off-chain-kyc-ed-validators"},"Decentralized & permissionless pool of validators vs off-chain kyc-ed validators"),(0,o.yg)("p",null,"Requiring data validators to go through regulatory know-your-customer processes\n(KYC) and/or requiring individuals to sign contracts goes against the very\ndecentralization ethos that Orcfax is championing. ",(0,o.yg)("strong",{parentName:"p"},"Truly decentralized\nnetworks are permissionless"),"; this means that the only limiting factor for\nnetwork participants should be their ability to meet the minimal technical\nrequirement identified for node operation."),(0,o.yg)("p",null,"It is our belief that those sympathetic to the goals of decentralization should\nstrongly object to oracle solutions that require users to rely on trusted third\nparty companies to act as gatekeepers for, what should be, a community\nresource."),(0,o.yg)("h3",{id:"aggregated--validated-by-orcfax-vs-aggregated-and-validated-by-dapp"},"Aggregated & validated by Orcfax vs Aggregated and validated by dApp"),(0,o.yg)("p",null,"The oracle problem represents significant risks for dApps and has implications\nfor the data that their smart contracts rely upon in order to execute\ntransactions. However, dApps can, and should, reduce their risk significantly\nby integrating oracle feeds and leveraging input data that comes from a\ndecentralized validator pool, run by independent operators."),(0,o.yg)("p",null,"Several solutions across Cardano have developed their own in-house, and often\nad hoc, oracle solutions in order to meet the data needs of their smart\ncontracts. Whether this has been for lack of an alternative solution or\nincompatibility with solution providers on offer, dApps inject significant risk\ninto their protocols by relying on oracle solutions which have not been\ndiligently researched and purpose built."),(0,o.yg)("p",null,"Orcfax can help dApps focus on their core services by doing the data gathering,\naggregation, and validation work, which would otherwise unnecessarily slow down\nsmart contract execution, increase transaction costs, and introduce new attack\nvectors for their dApps."),(0,o.yg)("p",null,"It can\u2019t be stressed enough, when dApps and protocols only use their own in\nhouse data solutions, or do their own external data gathering, they create\nserious attack vectors. Choosing not to leverage purpose built solutions can\nalso result in justifiable mistrust amongst the users of their DeFi products,\nas it is often their assets which are put at risk by these design decisions."),(0,o.yg)("h3",{id:"heartbeat--on-demand-feeds-vs-heartbeat-feeds-only"},"Heartbeat & on-demand feeds vs heartbeat feeds only"),(0,o.yg)("p",null,"The number of potential use cases for oracle feeds are numerous, and they are\nincreasing every day as developers create exciting new products, and as\nblockchains position themselves for increased adoption. While there can be\noverlap in the data needs of dApps and their smart contracts, many of these use\ncases have their own distinct requirements in regards to when data must be\navailable on chain."),(0,o.yg)("p",null,"Orcfax recognizes these differences and the unique needs of integrators.\nBecause of this, we have developed services to suit and accommodate dApp\nrequirements. Our solution will now support two distinct publication models:\nheartbeat and on-demand."),(0,o.yg)("p",null,"Our ADA/USD feed went live on mainnet by leveraging the first of these\npublication options\u2013  an Orcfax hourly heartbeat publication model with\ndeviation monitoring."),(0,o.yg)("u",null,"The heartbeat publication model")," gives integrators the ability to access data at regular intervals which can be set according to their needs (e.g. every 5 minutes, once per hour, etc.). This model can be further enhanced when paired with a monitoring feature which adds a deviation formula; heartbeat publication models with deviation add improved precision by guaranteeing data at both a consistent interval and when user-stipulated thresholds have been met (e.g. publish immediately before the next heartbeat if price changes by\xa0x%).",(0,o.yg)("p",null,"In the heartbeat publication model, nodes request and cache primary source data\non the hour and every minute as a result of a monitoring function; this monitor\nthen triggers publication workflows in the event of deviations."),(0,o.yg)("u",null,"The on-demand publication model")," allows complete flexibility and gives dApps even more control of data use by allowing them to request data collection, validation and publication whenever it\u2019s needed by their smart contracts. If an Orcfax feed consumer needs a more current update for a given datum feed (e.g. ADA/USD) than is available on-chain, or through an existing heartbeat publication, then an on-demand publication request can be triggered in order to receive the datum and use it within the same block.",(0,o.yg)("p",null,"This service will dramatically increase feed utility for integrators with use\ncases that can\u2019t justify a consistent heartbeat by allowing their smart\ncontracts and users to trigger Orcfax publication workflows for the data they\nneed, when they need it."),(0,o.yg)("h3",{id:"auditable-feeds-via-user-friendly-explorer-vs-difficult-to-audit-on-chain-data"},"Auditable feeds via user friendly explorer vs difficult to audit on-chain data"),(0,o.yg)("p",null,"When something goes wrong, every user, including non-developers, should be able\nto audit all aspects of the processes involved\u2014 oracles are no different. Users\nmust have the ability to follow detailed documentation that recounts the\nprocesses, their outputs, and how the steps taken resulted in the oracle\nvalues published on-chain and utilized by smart contracts."),(0,o.yg)("p",null,"Not only should this documentation exist in a way that is easy to access, the\ninformation needs to be intelligible for users of diverse skill sets and to\nfuture audiences that may lack context."),(0,o.yg)("p",null,"Orcfax has addressed both of these requirements by creating human and\nmachine-readable audit trails of all oracle solution processes: data\ncollection, formatting, validation, and publication. This is made possible by\nleveraging standards-compliant record-keeping practices that ensure that the\nlinks between all the on-chain and off-chain components are immutable,\ninextricable, and trustworthy."),(0,o.yg)("p",null,"While these records can be interrogated manually on-chain, we have developed a\nuser-friendly\xa0",(0,o.yg)("a",{parentName:"p",href:"https://explorer.orcfax.io/"},"Explorer"),"\xa0interface that makes\nsurfacing these audit trails simple and convenient so that users of Orcfax\nfeeds can \u201cTrust But Verify\u201d. The explorer was developed as a direct response\nto the disregard that other solutions have shown regarding the right of user\naudits, the need to prioritize accessibility, and ease of use; unlike other\noracle solutions, the Orcfax Explorer does not require expert knowledge of\nCardano eUTXO architecture, nor does it force users to execute a complicated\nforensic process to follow on-chain transactions. Everything users need is made\navailable at their finger tips."),(0,o.yg)("h3",{id:"standards-based-interoperable-audit-trails-vs-feed-only-available-on-chain"},"Standards-based interoperable audit trails vs feed only available on-chain"),(0,o.yg)("p",null,"This point complements the previous by focusing on the value of re-use; Orcfax\nstrongly believes that there is significant secondary value for real-world data\nthat has gone through vigorous authenticity and accuracy checks, like the\ninformation that Orcfax publishes to the Cardano blockchain. Therefore, our\naudit trail packages are marked up using a number of key industry standards\nincluding ",(0,o.yg)("a",{parentName:"p",href:"https://ipld.io/"},"IPLD"),", ",(0,o.yg)("a",{parentName:"p",href:"https://json-ld.org/"},"JSON-LD"),",\n",(0,o.yg)("a",{parentName:"p",href:"https://schema.org/"},"Schema.org"),", and\n",(0,o.yg)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/rfc8493/"},"IETF Bagit"),"."),(0,o.yg)("p",null,"The archival packages designed to preserve on-chain data, and their context,\nuse identifiers which link all records associated and creates a permanent link\nback to the on-chain Cardano transactions containing the relevant Orcfax datum.\nThe result is that Orcfax provides blockchain-based trust anchors for fact\nstatements about the real world that are now highly interoperable and re-usable\nbeyond Web3 (e.g. training AI models on validated real-world facts)."),(0,o.yg)("p",null,"Orcfax is committed to continuing its R&D into new ways to reuse feed data and\nto leverage this \u201cdata lake of validated facts\u201d for new value-added services\nand products."),(0,o.yg)("h3",{id:"cost-effective-eutxo-model-vs-cost-intensive-eutxo-model"},"Cost-effective eUTXO model vs cost-intensive eUTXO model"),(0,o.yg)("p",null,"Cardano was designed to off-load as much transaction processing as possible to\noff-chain components in order to minimize on-chain computations and thereby\ndramatically reduce transaction costs. The Cardano blockchain has been able to\naccomplish this without significant security compromises. The Orcfax oracle\narchitecture has been intentionally designed to follow the same design and\ndelegation principles."),(0,o.yg)("p",null,"Orcfax has managed to reduce on-chain interaction to a single certified data\npublication event, all while providing linkages that connect on-chain\ndatapoints with their complete history of supporting documentation of all\noff-chain processes; these records are made available permissionlessly through\ndecentralized storage, and have standards-based security guarantees for\ntheir links back to the on-chain data."),(0,o.yg)("p",null,"Other oracle solutions require users to juggle the handling of numerous NFTs\nand a complicated series of inter-dependent on-chain transactions to support\ntheir workflow, each adding transaction fees along the way. These other\nsolutions are neither efficient nor cost effective for users."),(0,o.yg)("p",null,"Instead Orcfax has designed its solution with a commitment to minimal\ntransaction fees for integrators, making it the most cost-effective and\nlong-term sustainable oracle solution on Cardano. And R&D continues for how\nOrcfax can continue to stand by that claim by optimizing feed publication and\nmaximizing integrator ease of use."),(0,o.yg)("h3",{id:"dao-governance--treasury-vs-centralized-company"},"DAO governance & treasury vs Centralized company"),(0,o.yg)("p",null,"While the Orcfax project was initially established through its incorporation as\na company in the British Virgin Islands, and has continued to leverage this\nposition for development, this was always meant to be temporary. The sole\npurpose of the Orcfax ltd company is to develop and launch the Orcfax oracle\nnetwork and to perform custodial duties for the $FACT token. It is our desire\nthat as soon as specific implementation targets are reached, Orcfax Ltd will\ndissolve itself and initiate the transfer of Orcfax network operations to the\nOrcfax Foundation, which will be operated as a decentralized autonomous\norganization (DAO)."),(0,o.yg)("p",null,"The Orcfax commitment to DAO governance was enshrined in our tokenomics wherein\n5% of the $FACT supply was reserved, within its own distinct ada handle, for\nthe sole purpose of funding the operations of the Orcfax Foundation. After\nOrcfax Ltd has delivered the full roadmap and has dissolved itself, the DAO\nwill become the recipient of the network share of $FACT data feed fees."),(0,o.yg)("p",null,"We envision that the DAO will be run via staked-based voting using $FACT to\ndecide on housekeeping matters, such as which contractor to hire to monitor\ndaily network operations, which developers to hire to add new features, and\ndecisions on network parameters like transaction fee percentages and whether or\nnot to add or remove certain feeds."),(0,o.yg)("p",null,"Importantly, current Orcfax activities and development have been funded via our\nsuccessful $FACT token launch. Many other oracle providers have been funded by\nventure capitalists (VCs) who are averse to any type of DAO/community based\ngovernance that will affect their ability to get a return on their investment\n(e.g. pull value out of the oracle project). We object to these kinds of\nproject financing strategies as they effectively tie the project\u2019s hands and\ncan prevent the development and fostering of decentralization; alignment with\nVCs also causes the project to be beholden to them, whereas we prefer to be\nbeholden to our community."),(0,o.yg)("h3",{id:"open-source-vs-closed-source"},"Open source vs Closed source"),(0,o.yg)("p",null,"The Orcfax team stalwartly believes in the open-source software ethos, which\nprioritizes equitable access by allowing users to copy, inspect, and alter\nsoftware source code for the benefit of their own projects. Another key benefit\nis that it creates a unique auditing environment; the concept of, \u201cmore eyes on\nthe code\u201d, demonstrates this phenomena and is meant to convey scenarios where\nit\u2019s more likely that developers outside the core team are able to spot, and\nwilling to help fix, any bugs or errors in the software."),(0,o.yg)("p",null,"The Orcfax project itself leans heavily on other free and open-source software\ncomponents, and stands on the shoulders of developers who have committed their\nwork to the benefit of the public. Because of this, we recognize the\nresponsibility for our project to pay it forward, and this will be done through\nthe software which we open source."),(0,o.yg)("p",null,"At the core of the Orcfax oracle network is the Cardano Open Oracle Protocol\n(COOP) which we\u2019ve already released under the Apache 2 open-source license.\nThis license allows other projects to adopt COOP code in order to implement\ntheir own oracle products or features. We will continue to open-source more\nOrcfax components as they are are rolled-out into production in the near\nfuture."),(0,o.yg)("h2",{id:"what-is-the-orcfax-difference"},"What is the Orcfax difference?"),(0,o.yg)("p",null,"We believe that the purposeful design of the Orcfax solution and the\nincorporation of the above critical aspects demonstrates how Orcfax sets itself\napart from other oracle solution attempts in the Cardano space. With that said,\nOrcfax isn't finished; our team continues to research the oracle problem, to\ndevelop decentralized solutions, and continues to focus on providing data\nservices which users can trust, but verify. This is the Orcfax difference, and\nand what separates our solution from the others."))}u.isMDXComponent=!0},7140:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/2024--Orcfax-oracle-vision-6000442868965a54a1ee82e47df23ca6.png"}}]);