"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6963],{3807:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"orcfax-solution/Data collection","title":"Data collection","description":"Decentralizing data collection\u200b","source":"@site/docs/orcfax-solution/data-collection.md","sourceDirName":"orcfax-solution","slug":"/data-collection","permalink":"/data-collection","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"Data collection","sidebar_position":2,"slug":"/data-collection"},"sidebar":"tutorialSidebar","previous":{"title":"Solution overview","permalink":"/solution-overview"},"next":{"title":"Publication models","permalink":"/publication-models"}}');var a=t(4848),o=t(8453);const r={id:"Data collection",sidebar_position:2,slug:"/data-collection"},s="Data collection",l={},c=[{value:"Decentralizing data collection\u200b",id:"decentralizing-data-collection",level:2},{value:"Leveraging decentralized data gathering on chain",id:"leveraging-decentralized-data-gathering-on-chain",level:2}];function d(e){const i={blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"data-collection",children:"Data collection"})}),"\n",(0,a.jsx)(i.h2,{id:"decentralizing-data-collection",children:"Decentralizing data collection\u200b"}),"\n",(0,a.jsx)(i.p,{children:"Since the roll out of our ADA-USD feed, Orcfax has committed to educating users\non the critical importance of rejecting data derived from single sources and the\nnecessity for source redundancy. Orcfax addresses both of these and avoids\nsingle points of failure or attack by leveraging the principle of triangulation,\nwhich is concerned with the utilization of multiple methods, or sources of\ninformation, in order to derive a comprehensive understanding of phenomena; this\nprinciple also aids in testing the validity of source information by providing\nthe ability to compare the data across sources. This principle has been\nenshrined in Orcfax node development and made evident in the processes by which\nOrcfax nodes collect data."}),"\n",(0,a.jsx)(i.p,{children:"Each Orcfax node is required to query, and receive data from, a minimum of 3\nprimary sources. This principle of triangulation protects the reliability and\nauthenticity of oracle data. In practice, Orcfax node design uses the principle\nof triangulation in order to enable nodes to function even in scenarios where\nsources fail to return data, are compromised, or report anomalous data. In each\nof these scenarios, the principle means that nodes remain flexible and resilient\ngiven that they meet the threshold for minimum data sources which enables the\nnetwork to maintain data integrity and reliability while being unaffected by\noutliers."}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:"Example:"}),"\n",(0,a.jsx)(i.p,{children:"If nodes query 5 sources, but only receive inputs from 4, the nodes can still\nsuccessfully triangulate the data as the received inputs still meet the 3\nsource minimum."}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Triangulation of primary sources",src:t(9917).A+"",width:"3472",height:"4607"})}),"\n",(0,a.jsx)(i.p,{children:"Our adherence to the principle of triangulation allows a more thorough response\nto the oracle problem by providing nodes the ability to compare data across\nmultiple sources which allows them to assess the authenticity and accuracy of\nthe data."}),"\n",(0,a.jsx)(i.h2,{id:"leveraging-decentralized-data-gathering-on-chain",children:"Leveraging decentralized data gathering on chain"}),"\n",(0,a.jsx)(i.p,{children:"The same data collection principles and standards used in Orcfax price feeds are\nalso leveraged in Cardano Native token (CNT) feeds. Orcfax has chosen to\nleverage DEX Liquidity pools in order to report token pair values. This is\nbecause liquidity pools provide a unique and efficient price discovery\nmechanism. Within the pool, a token pair derives comparative value according to\na simple mathematical formula that calculates price, in real time, as users\naffect the token-to-token ratio by adding or removing from either side of the\ncurrency pair. Because of this innate price discovery mechanism in liquidity\npools, Orcfax has the ability to provide a simple and elegant solution for\ndecentralized CNT feeds."}),"\n",(0,a.jsx)(i.p,{children:"Regardless of the CNT feed requested by integrators, Orcfax will leverage its\nnetwork of validator nodes to execute the collection process. Each node will be\nresponsible for querying the cardano ledger, in order to collect the total\nliquidity per token pair on each DEX. These liquidity values are then calculated\nthrough virtual liquidity pooling to derive an aggregated liquidity pool for\nthat token pair."}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Virtual liquidity pooling",src:t(973).A+"",width:"5280",height:"3029"})}),"\n",(0,a.jsx)(i.p,{children:"The virtual liquidity pool will then reflect the aggregated price of that token\npair, as observed by that specific node. This approach removes the risk of low\nliquidity DEXes skewing the price to allow manipulation."}),"\n",(0,a.jsx)(i.p,{children:"Each Orcfax node will perform the same process and share their derived values\nwith the rest of the validator network in order to normalize, validate and\nfinally publish on the Cardano blockchain. This data can then be used as\ntrustworthy reference inputs to trigger different kinds of business logic in\nCardano smart contracts and dApps."})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},9917:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/2024-02--source-triangulation-8207711e3f90a0ab900b0d799cabd16b.jpg"},973:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/2024-02--virtual-liquidity-pooling-a1370d1e4b8c50a9669a0d54d6d7345e.jpg"},8453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>s});var n=t(6540);const a={},o=n.createContext(a);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);