"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[9070],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>f});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,f=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(8168),o=(n(6540),n(5680));const i={id:"Solution overview",sidebar_position:1,slug:"/solution-overview"},r="Solution overview",s={unversionedId:"orcfax-solution/Solution overview",id:"orcfax-solution/Solution overview",title:"Solution overview",description:"Orcfax is an oracle designed to publish trustworthy data to smart contracts on",source:"@site/docs/orcfax-solution/solution-overview.md",sourceDirName:"orcfax-solution",slug:"/solution-overview",permalink:"/solution-overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"Solution overview",sidebar_position:1,slug:"/solution-overview"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Data collection",permalink:"/data-collection"}},l={},c=[{value:"Collection",id:"collection",level:2},{value:"v1 Orcfax Protocol",id:"v1-orcfax-protocol",level:2},{value:"Publication",id:"publication",level:2},{value:"Standards &amp; best practice compliance",id:"standards--best-practice-compliance",level:2},{value:"Orcfax beyond DeFi",id:"orcfax-beyond-defi",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...i}=e;return(0,o.yg)(u,(0,a.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"solution-overview"},"Solution overview"),(0,o.yg)("p",null,"Orcfax is an oracle designed to publish trustworthy data to smart contracts on\nthe Cardano blockchain. The oracle\u2019s architecture consists of a number of\nsoftware nodes written predominantly in Python, Haskell, and Plutus v2 code.\nThese Orcfax nodes publish datum about the real world\n(e.g. the price of ADA in USD) as CBOR-serialized reference inputs into Cardano\ntransactions. These datum are read and used in business logic by smart contracts\nand scripts."),(0,o.yg)("p",null,"The subject of this data can be nearly limitless in possibilities, and can\ninclude changes in current exchange rates (CER), supply-chain activity,\ninsurance, as well as data on-chain\n(e.g. the prices of Cardano native tokens or CNTs)."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Orcfax solution overview",src:n(4309).A,width:"5068",height:"2034"})),(0,o.yg)("p",null,"Once published, this data can be used as trustworthy reference inputs to trigger\ndifferent kinds of business logic in Cardano smart contracts and dApps. All of\nthis data relating to Orcfax workflows (including collection, validation,\nand publication) is captured within archival packages, which when combined\nrepresent complete audit logs of Orcfax processes. These packages are secured\nthrough decentralized storage and are made easily accessible through the\nOrcfax ",(0,o.yg)("a",{parentName:"p",href:"https://explorer.orcfax.io/"},"Explorer"),"."),(0,o.yg)("p",null,"More can be read about the Explorer in the\n",(0,o.yg)("a",{parentName:"p",href:"auditability#the-orcfax-explorer"},"The Orcfax Explorer")," section."),(0,o.yg)("h2",{id:"collection"},"Collection"),(0,o.yg)("p",null,"Most leading oracle platforms are beginning to implement some form of\ndecentralized oracle pools as another technique to address the\n",(0,o.yg)("a",{parentName:"p",href:"oracle-basics#what-is-the-oracle-problem"},"oracle problem"),".\nIn its purest form, a decentralized oracle pool uses distributed networking and\ncomputation nodes to achieve consensus on the authenticity and accuracy of\nsource data before it is published on-chain."),(0,o.yg)("p",null,"Unfortunately, most current implementations do not go this far. Instead they\noften receive data from a single, black box provider. They then use an oracle\npool to arrive at a consensus about the ",(0,o.yg)("em",{parentName:"p"},"uniformity")," of that data and not\nnecessarily about its ",(0,o.yg)("em",{parentName:"p"},"authenticity")," or ",(0,o.yg)("em",{parentName:"p"},"accuracy"),"."),(0,o.yg)("p",null,"To address this shortfall found in many other oracle services, Orcfax enforces\na strict triangulation policy for all its oracle feeds. This means that the\nOrcfax solution will collect data from a minimum of three independent\nsources via a decentralized pool of validator nodes. These data points are then\nnormalized, aggregated, and validated by the nodes before finally being\npublished within a Cardano blockchain transaction via its Plutus V2 eUTXO\nformat."),(0,o.yg)("p",null,"More on this topic can be found in ",(0,o.yg)("a",{parentName:"p",href:"data-collection"},"Data collection"),"."),(0,o.yg)("h2",{id:"v1-orcfax-protocol"},"v1 Orcfax Protocol"),(0,o.yg)("p",null,"The rules for how this data is structure and published is defined through the v1\ndeployment of the upgraded Orcfax Protocol. Further details can be found in\nthe Orcfax ",(0,o.yg)("a",{parentName:"p",href:"/consume"},"developer manual")),(0,o.yg)("p",null,"The upgraded protocol allows Orcfax to streamline its solutions while also\nincreasing cost efficiency. The Orcfax Protocol was designed as a purpose-built\nset of software tools and processes to publish datum to the Cardano blockchain."),(0,o.yg)("p",null,"More about the ",(0,o.yg)("a",{parentName:"p",href:"orcfax-protocol"},"Orcfax Protocol")," will be published closer to\nits mainnet release."),(0,o.yg)("h2",{id:"publication"},"Publication"),(0,o.yg)("p",null,"After the data has been collected, normalized, and validated, the next step is\nto publish it on-chain; how publication is executed is largely dependent on the\nbusiness needs of Orcfax feed integrators and the use cases these feeds enable."),(0,o.yg)("p",null,"These use cases are wide ranging and innovation in the blockchain space means\nthat new use cases for Orcfax feeds continue to evolve. Because of this, there\noften isn't a one size fits all solution for how to bring data on-chain. Orcfax\nrecognizes just how dynamic the development landscape and is leveraging ongoing\nR&D along with integrator feedback in order to meet those changing needs."),(0,o.yg)("p",null,"One way that Orcfax is addressing varying integrator needs is through the\ndevelopment of options in terms of feed publication models; these models allow\nintegrators to choose a service which meets the needs of their projects."),(0,o.yg)("p",null,"By adding flexibility to the Orcfax solution, dApps can make business decisions\nthat improve cost efficiency and value to their stakeholders."),(0,o.yg)("p",null,"More on this topic can be found in ",(0,o.yg)("a",{parentName:"p",href:"publication-models"},"Publication models"),"."),(0,o.yg)("h2",{id:"standards--best-practice-compliance"},"Standards & best practice compliance"),(0,o.yg)("p",null,"The Orcfax Team\u2019s world class experience with information management\ntechnologies and expertise in other related fields has informed solution\ndevelopment at every stage. Orcfax is developing an oracle solution which we\nbelieve will be the most comprehensive solution to the oracle problem. This will\nbe in part because it has been designed to be a standards-compliant\nrecordkeeping system that integrates on-chain publication with decentralized\ndata collection, validation, and archiving processes."),(0,o.yg)("p",null,"The Orcfax system requirements were meticulously derived from the extensive\nanalysis and review of blockchain, information technology, and legal standards\nbeing utilized within the information management industry. The outputs of this\nresearch are managed in a comprehensive requirements knowledge base from which\nOrcfax has derived system requirements. In addition to these standards and best\npractices, our team continually reviews existing oracle services in order to\nmaintain a comparative analysis of other oracle services and how those solutions\nattempt to guarantee the accuracy and authenticity of their data."),(0,o.yg)("p",null,"Our analysis continues to reveal gaps both in how existing oracle providers\nconceptualize the oracle problem, and in the efficacy of their attempts to\naddress it. These service providers have broadly ignored industry standards and\nacademic research findings that exist outside of the blockchain industry\u2019s echo\nchamber. Of particular significance are the ISO quality standards that provide\nwell-established international guidelines and practices for ensuring the\nauthenticity and accuracy of digital information\u2013 the very thing that oracles\nshould be most concerned with."),(0,o.yg)("p",null,"Orcfax stands apart from other oracle solutions because it has leveraged\nrelevant multidisciplinary assets in order to inform its development from the\nground-up as a standards-compliant digital record-keeping system."),(0,o.yg)("p",null,"More on this topic can be found in ",(0,o.yg)("a",{parentName:"p",href:"auditability"},"Auditability"),"."),(0,o.yg)("h2",{id:"orcfax-beyond-defi"},"Orcfax beyond DeFi"),(0,o.yg)("p",null,"The oracle problem limited to DeFi and its quest to ",(0,o.yg)("em",{parentName:"p"},"truly"),' decentralized\nfinance; society as a whole is experiencing a\n"',(0,o.yg)("a",{parentName:"p",href:"https://medium.com/coinmonks/orcfax-the-trust-machine-revisited-c475dbb0a5d6"},"trust crisis"),'".\nWe need better solutions for validating statements of fact about the real\nworld.'),(0,o.yg)("p",null,'Orcfax is responding to that call. Our solution is intentionally designed\nto leverage the distributed consensus breakthroughs achieved through\ndistributed ledger technologies like blockchain in order to provide\ndecentralized, "trustless" fact validation and reference services; What\'s more,\nthe Orcfax solution has been intentionally designed to leverage global\nrecord keeping and information management standards so that data created through\nits processes will have many use cases and applications beyond DeFi. Our team\nis particularly interested in on-demand, real-world fact validation to counter\nthe threat of AI-generated falsehoods.'))}h.isMDXComponent=!0},4309:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/2023-07-06--Orcfax-concept-diagram-086dc58d36b4cad3f8883cb33340ec42.png"}}]);