"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[70],{5680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>f});var n=t(6540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=o,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return t?n.createElement(f,i(i({ref:a},d),{},{components:t})):n.createElement(f,i({ref:a},d))}));function f(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8715:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=t(8168),o=(t(6540),t(5680));const r={id:"Solution overview",sidebar_position:1,slug:"/solution-overview"},i=void 0,s={unversionedId:"orcfax-solution/Solution overview",id:"orcfax-solution/Solution overview",title:"Solution overview",description:"The Orcfax oracle\u2019s architecture consists of a number of software nodes written",source:"@site/docs/orcfax-solution/solution-overview.md",sourceDirName:"orcfax-solution",slug:"/solution-overview",permalink:"/solution-overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"Solution overview",sidebar_position:1,slug:"/solution-overview"},sidebar:"tutorialSidebar",previous:{title:"FACT utility",permalink:"/utility-token"},next:{title:"Publication models",permalink:"/publication-models"}},l={},c=[{value:"Standards-compliant audit logs",id:"standards-compliant-audit-logs",level:2},{value:"Decentralizing data gathering",id:"decentralizing-data-gathering",level:2},{value:"Cardano Open Oracle Protocol (COOP)",id:"cardano-open-oracle-protocol-coop",level:2},{value:"Levering eUTXO strengths",id:"levering-eutxo-strengths",level:3},{value:"Orcfax beyond DeFi",id:"orcfax-beyond-defi",level:2}],d={toc:c},p="wrapper";function u(e){let{components:a,...r}=e;return(0,o.yg)(p,(0,n.A)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The Orcfax oracle\u2019s architecture consists of a number of software nodes written\npredominantly as Python, Haskell, and Plutus v2 code. These Orcfax nodes\npublish datum about the real world (e.g. the price of ADA in USD) as\nCBOR-serialized reference inputs into Cardano transactions. These datum are\nread and used in business logic by smart contracts and scripts."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Orcfax solution overview",src:t(4309).A,width:"5068",height:"2034"})),(0,o.yg)("p",null,"Real world events can include changes in currency price pairs, sporting event\nresults, supply-chain activity, weather changes, insurance payouts, and public\nspeeches. Orcfax collects this data from a minimum of three independent sources\nvia a decentralized pool of validator nodes. These are published to Cardano\nblockchain transactions in its Plutus V2 eUTXO format. This data can then be\nused as trustworthy Reference Inputs to trigger different kinds of business\nlogic in Cardano smart contracts and dApps. The Orcfax data collection,\nvalidation, and publication workflows are captured as audit log packages on the\ndecentralized Arweave.org network and can be easily browsed and searched via\nthe ",(0,o.yg)("a",{parentName:"p",href:"https://explorer.orcfax.io/"},"Orcfax Explorer"),"."),(0,o.yg)("h2",{id:"standards-compliant-audit-logs"},"Standards-compliant audit logs"),(0,o.yg)("p",null,"Oracles are less trustworthy if they can't demonstrate how their source data\nwas collected and validated."),(0,o.yg)("p",null,"To address this shortfall found in many other first-generation oracle services,\nOrcfax generates standards-compliant\n",(0,o.yg)("a",{parentName:"p",href:"design#5-archive-data-validation-audit-logs"},"archival packages")," that are made\navailable permissionlessly so that everybody has the ability to audit the flow\nof Orcfax data collection, validation, and publication."),(0,o.yg)("p",null,"These archival packages are described using ",(0,o.yg)("a",{parentName:"p",href:"https://schema.org"},"Schema.org"),"\nand ",(0,o.yg)("a",{parentName:"p",href:"https://json-ld.org/"},"JSON-LD")," compliant taxonomies, which have been\npurposefully selected in order to enrich Orcfax data. Additionally, by\nleveraging these taxonomies, Orcfax makes its data\n",(0,o.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Linked_data"},"Linked Data")," and\n",(0,o.yg)("a",{parentName:"p",href:"https://www.telusinternational.com/insights/ai-data/article/how-to-train-ai"},"AI-training"),"\ncompatible, which dramatically enhances value."),(0,o.yg)("p",null,"Schema.org is the single most impactful markup language for making any type\nof metadata machine-readable. In Orcfax's case, that means metadata related to\n",(0,o.yg)("a",{parentName:"p",href:"https://schema.org/Claim"},"Claims")," made about events happening in the real\nworld. This highly structured data from Orcfax feeds will be perfectly\npositioned to serve as the source of a growing data lake of real world fact\nstatements that will have many secondary reference uses beyond DeFi oracle\npublication."),(0,o.yg)("p",null,"To demonstrate the audit-enabling function and re-usability of its archival\npackages, the ",(0,o.yg)("a",{parentName:"p",href:"https://explorer.orcfax.io"},"Orcfax Explorer")," was developed; this\nproduct brings additional value to the Orcfax project by enabling users to\nfreely search for, and review, all Fact Statements published by Orcfax. The\nExplorer does this through purposeful design decisions which have prioritized\naccessibility and ease of use for a dynamically diverse user group."),(0,o.yg)("h2",{id:"decentralizing-data-gathering"},"Decentralizing data gathering"),(0,o.yg)("p",null,"Most leading oracle platforms are beginning to implement some form of\ndecentralized oracle pools as another technique to address the\n",(0,o.yg)("a",{parentName:"p",href:"oracle-basics#what-is-the-oracle-problem"},"oracle problem"),".\nIn its purest form, a decentralized oracle pool uses distributed networking and\ncomputation nodes to achieve consensus on the authenticity and accuracy of\nsource data before it is published on-chain."),(0,o.yg)("p",null,"Unfortunately, most current implementations do not go this far. Instead they\noften receive data from a single, black box provider. They then use an oracle\npool to arrive at a consensus about the ",(0,o.yg)("em",{parentName:"p"},"uniformity")," of that data and not\nnecessarily about its ",(0,o.yg)("em",{parentName:"p"},"authenticity")," or ",(0,o.yg)("em",{parentName:"p"},"accuracy"),"."),(0,o.yg)("p",null,"To address this shortfall found in many other oracle services, Orcfax enforces\na strict source-data triangulation policy for all its oracle feeds ",(0,o.yg)("em",{parentName:"p"},"before"),"\nthat data is sent to a decentralized oracle pool for validation. This allows a\nmore thorough response to the oracle problem by providing nodes the ability to\ncompare data across multiple sources in order to assess the authenticity and\naccuracy of the data; the data is then further interrogated by having all nodes\ncompare the data they collected."),(0,o.yg)("h2",{id:"cardano-open-oracle-protocol-coop"},"Cardano Open Oracle Protocol (COOP)"),(0,o.yg)("p",null,"The Orcfax oracle service uses the Cardano Open Oracle Protocol\n(",(0,o.yg)("a",{parentName:"p",href:"https://github.com/mlabs-haskell/cardano-open-oracle-protocol/"},"COOP"),")\nto publish and format its data feeds."),(0,o.yg)("p",null,"COOP is a set of technical guidelines that specifies a process, and format, for\nthe publication and consumption of off-chain data by smart contracts on the\nCardano blockchain. These guidelines and specification in COOP are free,\nopen-source, and can be implemented by any other project seeking to develop\ntheir own Cardano oracle feeds."),(0,o.yg)("p",null,"The Orcfax team developed the Cardano Open Oracle Protocol as a Catalyst\nfunded research project that maximizes the eUTXO model and design principles\nin order to demonstrate a cost-sensitive, post-Vasil native method for\npublishing secure, signed, datums on-chain for Reference Input consumption by\nCardano dApps."),(0,o.yg)("p",null,"The initial version was developed in collaboration with\n",(0,o.yg)("a",{parentName:"p",href:"https://mlabs.city/"},"MLabs")," consultancy. The Orcfax team has since onboarded\nits own Plutus development in-house and expanded on the beta-version of COOP;\nthis subsequent version included a full schema.org, JSON-LD compliant\nCardano datum specification that anchors machine-readable fact-statements in\nthe worlds' most decentralized and stable L1 blockchain network."),(0,o.yg)("p",null,"However, R&D at Orcfax is ongoing and our team continues to find ways to bring\nvalue to Orcfax products. Current work being developed in collaboration with\nthe same MLabs team is approaching an optimized COOP deployment that will\ninclude, among other things, an improved datum structure to further increase\ncost efficiency and ease of integration for dApps."),(0,o.yg)("h3",{id:"levering-eutxo-strengths"},"Levering eUTXO strengths"),(0,o.yg)("p",null,"The Cardano open oracle protocol (COOP) was designed to take advantage of the\n",(0,o.yg)("a",{parentName:"p",href:"https://cips.cardano.org/cips/cip31/"},"Cardano CIP-31")," reference inputs\nenhancements introduced in Cardano network's Vasil hard fork. During the design\nprocess, the primary design goals for the Cardano Open Oracle Protocol (COOP)\nwere to leverage CIP-31 in order to provide:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Financial sustainability \u2013 minimize the cost and deposit needed to post,\nmaintain, and use COOP datum in eUTXOs, providing opportunities to share costs\namongst stakeholders."),(0,o.yg)("li",{parentName:"ul"},"Data accessibility \u2013 minimize the probability of datum payloads not being\navailable for reference by downstream dApp scripts."),(0,o.yg)("li",{parentName:"ul"},"Security \u2013 minimize the risk of exposure for the cryptographic keys used in\nverifying the authenticity of COOP datums.")),(0,o.yg)("p",null,"COOP was able to meet each of these design goals. The reference inputs\nwithin each Orcfax feed allow the data provider (Orcfax) to publish data points\nonce, while simultaneously allowing multiple consumers to use the data point in\non-chain dApp scripts."),(0,o.yg)("p",null,"This enhancement allows a datum written to a single Cardano eUTXO to be read by\nmultiple consumers without competing with each other for exclusive access to\na transaction output."),(0,o.yg)("h2",{id:"orcfax-beyond-defi"},"Orcfax beyond DeFi"),(0,o.yg)("p",null,"The oracle problem isn't a problem domain limited to scenarios regarding the\nprovision of data feeds to dApps in an effort to underpin the success of\n",(0,o.yg)("em",{parentName:"p"},"truly"),' decentralized finance. Society at large is experiencing a\n"',(0,o.yg)("a",{parentName:"p",href:"https://medium.com/coinmonks/orcfax-the-trust-machine-revisited-c475dbb0a5d6"},"trust crisis"),'".\nWe need better solutions for validating statements of fact about the real\nworld.'),(0,o.yg)("p",null,'Orcfax is responding to that call. Our solution is intentionally designed\nto leverage the distributed consensus breakthroughs achieved through\ndistributed ledger technologies like blockchain in order to provide\ndecentralized, "trustless" fact validation and reference services; What\'s more,\nthe Orcfax solution has been intentionally designed to by leveraging global\nrecord keeping, information management standards so that data created through\nits processes will have many use cases and applications beyond DeFi. Our team\nis particularly interested in on-demand, real-world fact validation to counter\nthe threat of AI-generated falsehoods.'))}u.isMDXComponent=!0},4309:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/2023-07-06--Orcfax-concept-diagram-086dc58d36b4cad3f8883cb33340ec42.png"}}]);