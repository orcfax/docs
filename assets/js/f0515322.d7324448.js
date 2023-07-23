"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[93],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,f=d["".concat(l,".").concat(p)]||d[p]||h[p]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={id:"Publication",sidebar_position:5,slug:"/publication"},o="Fact statement publication",c={unversionedId:"technical-architecture/Publication",id:"technical-architecture/Publication",title:"Fact statement publication",description:"If Orcfax can vouch for the accuracy and authenticity of the data being queried,",source:"@site/docs/technical-architecture/publication.md",sourceDirName:"technical-architecture",slug:"/publication",permalink:"/publication",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"Publication",sidebar_position:5,slug:"/publication"},sidebar:"tutorialSidebar",previous:{title:"Data validation",permalink:"/Data validation"},next:{title:"Fact statement archiving",permalink:"/archiving"}},l={},s=[],u={toc:s},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fact-statement-publication"},"Fact statement publication"),(0,r.kt)("br",null),"If Orcfax can vouch for the accuracy and authenticity of the data being queried, (through the Collection, Normalization, and Calculation processes) then one of the independent Orcfax nodes will be randomly delegated the responsibility for submitting the unsigned transaction to the consumer. The consumer will then publish the validated data on-chain as a reference input within their transaction, granting them premium first-block access to that data.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This random selection serves as another guard that enables Orcfax to ensure that there isn't one trusted third party responsible for taking data publication on-chain. And this is made possible by having each node technically equivalent and capable of executing all processes leading up to and including the task of publishing the data on-chain should the task be delegated to them.",(0,r.kt)("br",null),(0,r.kt)("br",null),'The data points published by the Orcfax oracle are rich in context and therefore referred to as "fact statements" to reflect their semantic maturity as formally structured declarations about real world events and entities.',(0,r.kt)("br",null),(0,r.kt)("br",null),"The Orcfax oracle nodes create a fact statement record that is formatted in compliance with the Cardano Open Oracle Protocol. This includes markup in JSON-LD linked data format, which is in compliance with the relevant schema.org ontologies. Using this ubiquitous de-facto standard to express facts about the real world greatly improves the discoverability and re-use value of data published via the Orcfax network, including use in fact checking services, search indexes, and machine-readable datasets for training machine learning models.",(0,r.kt)("br",null),(0,r.kt)("p",null,"The following is an example of an Orcfax $FACT statement with all provenance\ninformation captured for future auditability."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "@context": "https://schema.org",\n  "type": "Claim",\n  "description": "The price of 1 ADA at 2023-07-19 16:38:42.364056 is 0.31068563\n  84666667 USD",\n  "claimInterpreter": "Orcfax",\n  "about": {\n    "@type": "PropertyValue",\n    "name": "ADA price in USD"\n  },\n  "value": 0.3106856384666667,\n  "unitCode": "USD",\n  "valueReference": [\n    {\n      "@type": "PropertyValue",\n      "name": "validFrom",\n      "value": 1689790926\n    },\n    {\n      "@type": "PropertyValue",\n      "name": "validThrough",\n      "value": 1689791226\n    }\n  ],\n  "appearance": [\n    "message-ADA-USD-Wed-19-Jul-2023-16:38:41-GMT-kraken-collector-0.0.0-dev.jso\n    n",\n    "message-ADA-USD-Wed-19-Jul-2023-16:38:42-GMT-kucoin-collector-0.0.0-dev.jso\n    n",\n    "message-ADA-USD-Wed-19-Jul-2023-16:38:42-GMT-coinbase-collector-0.0.0-dev.j\n    son"\n  ],\n  "isBasedOn": {\n    "@type": "CreativeWork",\n    "name": "validation-ADA-USD-Orcfax-2023-07-19-18:22:06.510809+00:00.json"\n  },\n  "creator": "Orcfax Validator Node: v0.0.0",\n  "identifier": "9168fc06-5de0-4970-b77d-491821284514",\n  "license": "https://creativecommons.org/licenses/by/4.0/"\n}\n')),(0,r.kt)("p",null,"In the course of feed discovery, feed consumers will can querry the network for\na feed or specific fact sstatement; if that particular fact statement has\nalready been published in a previous transaction, an Orcfax node will reply with\nthe UTXO identifier that the Consumer can use for free as a CIP-31 Reference\nInput in their script.",(0,r.kt)("br",null)),(0,r.kt)("br",null),"Otherwise the Consumer will submit the applicable fee in $FACT tokens. This is used to pay for the Cardano transaction fee and deposit. The Consumer will receive a signed transaction from Orcfax that they will then Submit to the Cardano network. The signed transaction contains the fact statement record in the transaction Datum as well as an exclusive security token to prove it came from an Orcfax authorized Publisher.",(0,r.kt)("br",null),(0,r.kt)("br",null),"The Consumer can reference this signed transaction and the fact statement in the Datum within their own script and submit both transactions together in the same block. This gives the fact statement user access to this data on-chain one block before anyone else can read it as a published Reference Input. This creates a possible business advantage and incentive to be the first to pay for a new fact statement.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Orcfax has arranged for a number of sponsored data feeds where funds are held in escrow to pay the fee for the regular publication of a given fact statement type, making this data available as a free CIP-31 Reference Input to on-chain smart contracts and scripts; in the future, this arrangement could be imitated and could benefit a group of consumers that have shared interest in maintaining the publication of a given feed. the parties would agree to maintain a wallet where funds would be held in escrow to guarantee that a feed was kept active.",(0,r.kt)("br",null),(0,r.kt)("p",null,"An exacmple $FACT datum derived from the Orcfax ADA/USD price feed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "@context": "https://schema.org/",\n  "type": "PropertyValue",\n  "name": "ADA/USD",\n  "value": 0.3172074226666667,\n  "valueReference": [\n    {\n      "@type": "PropertyValue",\n      "name": "validFrom",\n      "value": 1689963052\n    },\n    {\n      "@type": "PropertyValue",\n      "name": "validThrough",\n      "value": 1689963352\n    }\n  ],\n  "identifier": {\n    "type": "PropertyValue",\n    "PropertyID": "Arkly Identifier",\n    "value": "orcfax:036b901d-b25b-400d-bd44-674af4ed96cf"\n  },\n  "_:SecurityToken": "32R43243223432432"\n}\n')))}h.isMDXComponent=!0}}]);