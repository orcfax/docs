"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[976],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),g=a,y=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(8168),a=(r(6540),r(5680));const o={id:"Introduction",sidebar_position:1,slug:"/"},i=void 0,c={unversionedId:"Introduction",id:"Introduction",title:"Introduction",description:"Orcfax is a decentralized oracle service",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"Introduction",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Solution overview",permalink:"/solution-overview"}},s={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Learn more",id:"learn-more",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Orcfax is a decentralized ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"oracle-basics#what-is-an-oracle"},"oracle"))," service\ndesigned to publish data about real world events to the\n",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://medium.com/coinmonks/why-cardano-in-2023-b481846028bc"},"Cardano")),"\nblockchain in a way that fully addresses the oracle problem which has impeded\nthe decentralization initiative since the desire to build services on top of\nblockchain ledgers. The  second-generation oracle feeds issued by Orcfax are\nused to publish accurate and independently verifiable facts about the real world\nby collecting and aggregating multiple primary data sources while providing full\naudit logs of the complete oracle process\u2013 this enables Orcfax to deliver\nauthentic and accurate data that users can trust but verify. The Orcfax solution\nwill initially offer currency price-pair feeds but will expand to report on\nmyriad and diverse feed types according to market demand."),(0,a.yg)("p",null,"Orcfax data is made available to on-chain\n",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"oracle-basics#what-is-a-smart-contract"},"smart contracts"))," in Cardano's eUTXO\nnative format using the ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"solution-overview#cardano-open-oracle-protocol-coop"},"Cardano Open Oracle Protcol"))," (COOP)."),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("p",null,"Check our developer manual for instructions on how to:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"consume"},"Consume Orcfax data")),": Get your Cardano dApps, smart contracts,\nand scripts consuming data from Orcfax oracle feeds.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"verify"},"Verify Orcfax data")),": Using our unique auditing and archiving\nfeatures, you can verify the authenticity and accuracy of every fact statement\npublished by Orcfax, including its source data and validation history."))),(0,a.yg)("h2",{id:"learn-more"},"Learn more"),(0,a.yg)("p",null,"The ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"solution-overview"},"Solution Overview"))," section provides a high level\ndescription the Orcfax technical architecture and its primary components."),(0,a.yg)("p",null,"Learn more about the ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"tokenomics"},"tokenomics"))," and\n",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"utility-token"},"utility"))," of the Orcfax service's native FACT token."),(0,a.yg)("p",null,"Read our FAQ sections to answer any further questions you may have about Orcfax\nor oracles in general."),(0,a.yg)("p",null,"You can also join our ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://dsc.gg/orcfax"},"Discord"))," to engage directly\nwith Orcfax team members."))}d.isMDXComponent=!0}}]);