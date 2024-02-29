"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[70],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>f});var n=a(6540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=o,f=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(8168),o=(a(6540),a(5680));const r={id:"Solution overview",sidebar_position:1,slug:"/solution-overview"},i=void 0,s={unversionedId:"orcfax-solution/Solution overview",id:"orcfax-solution/Solution overview",title:"Solution overview",description:"Orcfax is an oracle designed to publish trustworthy data to smart contracts on",source:"@site/docs/orcfax-solution/solution-overview.md",sourceDirName:"orcfax-solution",slug:"/solution-overview",permalink:"/solution-overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"Solution overview",sidebar_position:1,slug:"/solution-overview"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Data collection",permalink:"/data-collection"}},c={},l=[{value:"Collection",id:"collection",level:2},{value:"The Cardano Open Oracle Protocol (COOP)",id:"the-cardano-open-oracle-protocol-coop",level:2},{value:"Standards &amp; best practice compliance",id:"standards--best-practice-compliance",level:2},{value:"Orcfax beyond DeFi",id:"orcfax-beyond-defi",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Orcfax is an oracle designed to publish trustworthy data to smart contracts on\nthe Cardano blockchain. The oracle\u2019s architecture consists of a number of\nsoftware nodes written predominantly in Python, Haskell, and Plutus v2 code.\nThese Orcfax nodes publish datum about the real world\n(e.g. the price of ADA in USD) a CBOR-serialized reference inputs into Cardano\ntransactions. These datum are read and used in business logic by smart contracts\nand scripts."),(0,o.yg)("p",null,"The subject of this data can be nearly limitless in possibilities, and can\ninclude changes in currency price pairs, supply-chain activity, insurance, as\nwell as data on-chain (e.g. the prices of Cardano native tokens or CNTs)."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Orcfax solution overview",src:a(4309).A,width:"5068",height:"2034"})),(0,o.yg)("p",null,"Once published, this data can be used as trustworthy Reference Inputs to trigger\ndifferent kinds of business logic in Cardano smart contracts and dApps. The\nOrcfax data collection, validation, and publication workflows are captured as\naudit log packages on the decentralized Arweave.org network and can be easily\nbrowsed and searched via the ",(0,o.yg)("a",{parentName:"p",href:"https://explorer.orcfax.io/"},"Orcfax Explorer"),"."),(0,o.yg)("p",null,"All data collection, validation, and publication workflows are captured within\narchival packages, which contain complete audit logs of Orcfax processes. These\npackages are secured through decentralized storage and are made easily\naccessible through the ",(0,o.yg)("a",{parentName:"p",href:"https://explorer.orcfax.io/"},"Orcfax Explorer")," dashboard."),(0,o.yg)("h2",{id:"collection"},"Collection"),(0,o.yg)("p",null,"Most leading oracle platforms are beginning to implement some form of\ndecentralized oracle pools as another technique to address the\n",(0,o.yg)("a",{parentName:"p",href:"oracle-basics#what-is-the-oracle-problem"},"oracle problem"),".\nIn its purest form, a decentralized oracle pool uses distributed networking and\ncomputation nodes to achieve consensus on the authenticity and accuracy of\nsource data before it is published on-chain."),(0,o.yg)("p",null,"Unfortunately, most current implementations do not go this far. Instead they\noften receive data from a single, black box provider. They then use an oracle\npool to arrive at a consensus about the ",(0,o.yg)("em",{parentName:"p"},"uniformity")," of that data and not\nnecessarily about its ",(0,o.yg)("em",{parentName:"p"},"authenticity")," or ",(0,o.yg)("em",{parentName:"p"},"accuracy"),"."),(0,o.yg)("p",null,"To address this shortfall found in many other oracle services, Orcfax enforces\na strict source-data triangulation policy for all its oracle feeds. This means\nthat the Orcfax solution will collect data from a minimum of three independent\nsources via a decentralized pool of validator nodes. These data points are then\nvalidated, aggregated, normalized by the nodes before finally being published\nwithin a Cardano blockchain transaction by leveraging its Plutus V2 eUTXO format\nand the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/mlabs-haskell/cardano-open-oracle-protocol/blob/9e9c9aedba84d32e424b1dd116b4734e1a42f3bc/coop-docs/00-design.md#:~:text=Cardano%20features%20enabling%20Oracles"},"CIPs")," implemented in the Vasil\nhard fork for reference inputs and inline datum."),(0,o.yg)("p",null,"More on this topic can be found in ",(0,o.yg)("a",{parentName:"p",href:"data-collection"},"Data collection"),"."),(0,o.yg)("h2",{id:"the-cardano-open-oracle-protocol-coop"},"The Cardano Open Oracle Protocol (COOP)"),(0,o.yg)("p",null,"The rules for how to structure and publish this data has been released as the\nopen-source Cardano Open Oracle Protocol (",(0,o.yg)("a",{parentName:"p",href:"https://github.com/mlabs-haskell/cardano-open-oracle-protocol/"},"COOP"),") under an Apache 2.0 license. This protocol\nallows Orcfax, and other publication services, to streamline their solutions\nwhile also increasing cost efficiency. The COOP was designed as a purpose-built\nset of software tools and processes to publish datum to the Cardano blockchain."),(0,o.yg)("p",null,"By making it freely available to developers, Orcfax has established the protocol\nas one of many well-structured tools and schemas that will be provided to\ncommunity members in order to aid in viewing and consuming trustworthy off-chain\ndata in their smart contracts."),(0,o.yg)("h2",{id:"standards--best-practice-compliance"},"Standards & best practice compliance"),(0,o.yg)("p",null,"The Orcfax Team\u2019s world class experience with information management\ntechnologies and expertise in other related fields has informed solution\ndevelopment at every stage. Orcfax is developing an oracle solution which we\nbelieve will be the most comprehensive solution to the oracle problem. This will\nbe in part because it has been designed to be a standards-compliant\nrecordkeeping system that integrates on-chain publication with decentralized\ndata collection, validation, and archiving processes."),(0,o.yg)("p",null,"The Orcfax system requirements were meticulously derived from the extensive\nanalysis and review of blockchain, information technology, and legal standards\nbeing utilized within the information management industry. The outputs of this\nresearch are managed in a comprehensive requirements knowledge base from which\nOrcfax has derived system requirements. In addition to these standards and best\npractices, our team continually reviews existing oracle services in order to\nmaintain a comparative analysis of other oracle services and how those solutions\nattempt to guarantee the accuracy and authenticity of their data."),(0,o.yg)("p",null,"Our analysis continues to reveal gaps both in how existing oracle providers\nconceptualize the oracle problem, and in the efficacy of their attempts to\naddress it. These service providers have broadly ignored industry standards and\nacademic research findings that exist outside of the blockchain industry\u2019s echo\nchamber. Of particular significance are the ISO quality standards that provide\nwell-established international guidelines and practices for ensuring the\nauthenticity and accuracy of digital information\u2013 the very thing that oracles\nshould be most concerned with."),(0,o.yg)("p",null,"Orcfax stands apart from other oracle solutions because it has leveraged\nrelevant multidisciplinary assets in order to inform its development, from the\nground-up, as a standards-compliant, digital record-keeping system."),(0,o.yg)("h2",{id:"orcfax-beyond-defi"},"Orcfax beyond DeFi"),(0,o.yg)("p",null,"The oracle problem isn't a problem domain limited to scenarios regarding the\nprovision of data feeds to dApps in an effort to underpin the success of\n",(0,o.yg)("em",{parentName:"p"},"truly"),' decentralized finance. Society at large is experiencing a\n"',(0,o.yg)("a",{parentName:"p",href:"https://medium.com/coinmonks/orcfax-the-trust-machine-revisited-c475dbb0a5d6"},"trust crisis"),'".\nWe need better solutions for validating statements of fact about the real\nworld.'),(0,o.yg)("p",null,'Orcfax is responding to that call. Our solution is intentionally designed\nto leverage the distributed consensus breakthroughs achieved through\ndistributed ledger technologies like blockchain in order to provide\ndecentralized, "trustless" fact validation and reference services; What\'s more,\nthe Orcfax solution has been intentionally designed to by leveraging global\nrecord keeping, information management standards so that data created through\nits processes will have many use cases and applications beyond DeFi. Our team\nis particularly interested in on-demand, real-world fact validation to counter\nthe threat of AI-generated falsehoods.'))}p.isMDXComponent=!0},4309:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/2023-07-06--Orcfax-concept-diagram-086dc58d36b4cad3f8883cb33340ec42.png"}}]);