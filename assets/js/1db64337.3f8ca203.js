"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[372],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),h=l(a),f=r,p=h["".concat(s,".").concat(f)]||h[f]||u[f]||o;return a?n.createElement(p,i(i({ref:t},d),{},{components:a})):n.createElement(p,i({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[h]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6777:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={id:"overview",sidebar_position:2,slug:"/overview"},i="Solution overview",c={unversionedId:"overview",id:"overview",title:"Solution overview",description:"Orcfax concept diagram",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/overview",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"overview",sidebar_position:2,slug:"/overview"},sidebar:"tutorialSidebar",previous:{title:"Introducing Orcfax",permalink:"/"},next:{title:"Oracle FAQ",permalink:"/faq"}},s={},l=[{value:"Data collection",id:"data-collection",level:3},{value:"Data validation",id:"data-validation",level:3},{value:"$FACT rewards",id:"fact-rewards",level:3},{value:"Data publication",id:"data-publication",level:3},{value:"Data consumption",id:"data-consumption",level:3},{value:"Reference data",id:"reference-data",level:3}],d={toc:l},h="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(h,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"solution-overview"},"Solution overview"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Orcfax concept diagram",src:a(7491).Z,width:"6694",height:"3732"})),(0,r.kt)("h3",{id:"data-collection"},"Data collection"),(0,r.kt)("p",null,"The Orcfax oracle service collects data about real world events from various primary sources using a network of decentralized nodes. "),(0,r.kt)("p",null,"Nodes are run independently and permissionlessly by anyone that is able to install the free software and commit a small amount of Orcfax tokens as their stake. $FACT is the name of this Cardano native token that is used within the Orcfax network to pay for data publication and to reward oracle pool participants."),(0,r.kt)("p",null,"Wherever possible, Orcfax collects raw data from at least three independent sources to triangulate and average the information. For example, to determine the price of ADA to U.S. dollars, Orcfax nodes will query APIs at Kraken, Binance, and CoinGecko."),(0,r.kt)("h3",{id:"data-validation"},"Data validation"),(0,r.kt)("p",null,'The collected source data is normalized into a standard schema, hashed, and then circulated within the decentralized oracle pool to validate that the exact same data has been collected and tabulated. The data points published by the Orcfax oracle are rich in context and therefore referred to as "fact statements", to reflect their semantic maturity as formally structured declarations about real world events and entities.'),(0,r.kt)("p",null,'Orcfax maintains public audit logs so that the flow of information through the oracle service can be carefully monitored and protected. If there are any data anomolies at this collection and normalization stage, it\'s a red flag that some part of the data may have been corrupted, whether accidently or intentionally. Nodes that submit innacurate or false data will be punished by having a portion of their staked $FACT tokens deducted as a penalty ("slashed") and their node reputation score will be affected. '),(0,r.kt)("h3",{id:"fact-rewards"},"$FACT rewards"),(0,r.kt)("p",null,"After successfully collecting the source data and achieving network consensus on its normalized form, a lottery is held by the oracle protocol to randomly assign a publication reward of $FACT tokens to one of the successful oracle nodes. This reward is a share of the publication fee paid by the data Consumer who requested the publication of a fact statement. This creates the incentive structure for oracle nodes to participate in the network."),(0,r.kt)("h3",{id:"data-publication"},"Data publication"),(0,r.kt)("p",null,"The Orcfax oracle nodes create a fact statement record that is formatted in compliance with the Cardano Open Oracle Protocol. This includes markup in JSON-LD linked data format in compliance with the relevant schema.org ontologies. Using this ubuqitous de-facto standard to express facts about the real world great improves the discoverability and re-use of data published via the Orcfax network, including use in fact checking services, search indexes, and machine-readable AI."),(0,r.kt)("h3",{id:"data-consumption"},"Data consumption"),(0,r.kt)("p",null,"Cardano dApps that need real-world oracle data submit a Data Catalog request to an Orcfax node. The Data Catalog lists the fact statement types that are available for publication (e.g. ADA/USD price, U.S. Consumer Price Index), their cost, along with their interval frequency (e.g. one per minute, once per month, etc.). "),(0,r.kt)("p",null,"The Cardano smart contract or script uses the fact statement ID from the catalog to request a specific data point from the decentralized oracle pool. If that particular fact statement has already been published in a previous transaction, the Orcfax node will reply with the UTXO identifier that the Consumer can use for free as a CIP-31 Reference Input in their script. "),(0,r.kt)("p",null,"Otherwise the Consumer will submit the applicable fee in $FACT token. This is used to pay for the Cardano transaction fee and deposit. The Consumer will receive a signed transaction from Orcfax that they Submit to the Cardano network. The signed transaction contains the fact statement record in the transaction Datum as well as an exclusive security token to prove it came from an Orcfax authorized Publisher. "),(0,r.kt)("p",null,"The Consumer can reference this signed transaction and the fact statement in the Datum in their own script and submit both transactions together in the same block. This gives the fact statement user access to this data on-chain one block before anyone else can read it as a published Reference Input. This creates a possible business advantage and incentive to be the first to pay for a new fact statement."),(0,r.kt)("p",null,"Orcfax is also arranging for a number of sponsored data feeds where funds are held in escrow to pay the fee for the regular publication a given fact statement type, making this data available as a free CIP-31 Reference Input to on-chain smart contracts and scripts."),(0,r.kt)("h3",{id:"reference-data"},"Reference data"),(0,r.kt)("p",null,"Orcfax produces a concise fact statement record to bundle into the limited space of a Cardano transaction Datum. It also creates a more detailed fact statement Claim record which contains all the provenance audit log information needed to investigate and verify the claim made in the fact statement. Orcfax formats these claims in compliance with the schema.org ontology used by professional fact checking services."),(0,r.kt)("p",null,"A checksum hash of the entire claim record is included in the on-chain fact statement datum so that this full record is inextricably linked to an on-chain transaction allowing for downstream verification. Orcfax stores these audit trail packages permantly on the Arweave decentralized storage network."),(0,r.kt)("p",null,"Users of Orcfax data that want to independently verify its authentictiy and accuracy can consult their own Cardano full nodes or trusted blockchain explorer. They can search for specific UTXO transaction and read the fact statement content provided in its datum directly from their copy of the blockchain. This transaction will include a security token issued under the minting policy ID of the publisher. When these tokens and the publisher's public policy ID match it proves that this datum was provided from this source."),(0,r.kt)("p",null,"In fact, the entire fact statement claim record is formated in compliance with schema.org linked data ontologies to improve search indexing, provide machine-readable data for AI services, and integrate with existing, independent fact-checking services. Considered collectively, all the data that has been published by Orcfax provides a valuable knowledgebase for future historical reference and re-use. Over time, the exponential growth in quantiy and utility of this archive will further underpin the valuation of the $FACT token."),(0,r.kt)("p",null,"The fact statement ID can be used to resolve to the full Orcfax documentation package on Arweave for a given fact statement. This record can be read from an independent Arweave node or block explorer for additional security guarantees. The hash of this claim record on Arweave will correspond to the same checksum hash stored in the concise on-chain version of the same fact statement."),(0,r.kt)("p",null,"Orcfax hosts a convenient block explorer at ",(0,r.kt)("a",{parentName:"p",href:"https://fact.page"},"Fact.Page")," to research and display the contents and context of all the transaction data that has ever been published via the Orcfax oracle service."))}u.isMDXComponent=!0},7491:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/orcfax-concept-diagram-nov-2022-1068b3f1d3d85543e6365df3448fe813.png"}}]);