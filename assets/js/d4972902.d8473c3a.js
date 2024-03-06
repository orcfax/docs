"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[562],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(8168),r=(n(6540),n(5680));const a={id:"Cardano Open Oracle Protocol",sidebar_position:3,slug:"/coop"},i="Cardano Open Oracle Protocol",s={unversionedId:"orcfax-solution/Cardano Open Oracle Protocol",id:"orcfax-solution/Cardano Open Oracle Protocol",title:"Cardano Open Oracle Protocol",description:"The Orcfax oracle service uses the Cardano Open Oracle Protocol",source:"@site/docs/orcfax-solution/coop.md",sourceDirName:"orcfax-solution",slug:"/coop",permalink:"/coop",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"Cardano Open Oracle Protocol",sidebar_position:3,slug:"/coop"},sidebar:"tutorialSidebar",previous:{title:"Data collection",permalink:"/data-collection"},next:{title:"Publication models",permalink:"/publication-models"}},c={},l=[{value:"Levering eUTXO strengths",id:"levering-eutxo-strengths",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"cardano-open-oracle-protocol"},"Cardano Open Oracle Protocol"),(0,r.yg)("p",null,"The Orcfax oracle service uses the Cardano Open Oracle Protocol\n(",(0,r.yg)("a",{parentName:"p",href:"https://github.com/mlabs-haskell/cardano-open-oracle-protocol/"},"COOP"),")\nto publish and format its data feeds. The protocol constitutes a set of\ntechnical guidelines that specify a process, and format, for the publication and\nconsumption of off-chain data by smart contracts on the Cardano blockchain. The\nOrcfax team developed the Cardano Open Oracle Protocol as a Catalyst funded\nresearch project that maximizes the eUTXO model and design principles in order\nto demonstrate a cost-sensitive, post-Vasil native method for publishing secure,\nsigned, datums on-chain for Reference Input consumption by Cardano dApps."),(0,r.yg)("p",null,"The initial version of COOP was developed in collaboration with\n",(0,r.yg)("a",{parentName:"p",href:"https://mlabs.city/"},"MLabs")," consultancy. These guidelines and specification in\nCOOP are free, open-source, and can be implemented by any other project seeking\nto develop their own Cardano oracle feeds."),(0,r.yg)("p",null,"By making it freely available to developers, Orcfax has established the protocol\nas one of many well-structured tools and schemas that will be provided to\ncommunity members in order to aid in viewing and consuming trustworthy off-chain\ndata in their smart contracts."),(0,r.yg)("p",null,"R&D on the protocol is ongoing, and our team continues to find ways to bring\nvalue to Orcfax products. The Orcfax team has since onboarded its own Plutus\ndevelopment in-house and expanded on the beta-version of COOP; the subsequent\nversion included a full schema.org, JSON-LD compliant Cardano datum\nspecification that anchors machine-readable fact-statements in the worlds' most\ndecentralized and stable L1 blockchain network."),(0,r.yg)("p",null,"Current work on the protocol is being done in collaboration with the same MLabs\nteam as our teams. This updated version is working towards an optimized COOP\ndeployment that will include, among other things, an improved datum structure to\nfurther increase cost efficiency and ease of integration for dApps."),(0,r.yg)("h2",{id:"levering-eutxo-strengths"},"Levering eUTXO strengths"),(0,r.yg)("p",null,"The Cardano open oracle protocol (COOP) was designed to take advantage of the\n",(0,r.yg)("a",{parentName:"p",href:"https://cips.cardano.org/cips/cip31/"},"Cardano CIP-31")," reference inputs\nenhancements introduced in Cardano network's Vasil hard fork. During the design\nprocess, the primary design goals for the Cardano Open Oracle Protocol (COOP)\nwere to leverage CIP-31 in order to provide:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Financial sustainability \u2013 minimize the cost and deposit needed to post,\nmaintain, and use COOP datum in eUTXOs, providing opportunities to share costs\namongst stakeholders."),(0,r.yg)("li",{parentName:"ul"},"Data accessibility \u2013 minimize the probability of datum payloads not being\navailable for reference by downstream dApp scripts."),(0,r.yg)("li",{parentName:"ul"},"Security \u2013 minimize the risk of exposure for the cryptographic keys used in\nverifying the authenticity of COOP datums.")),(0,r.yg)("p",null,"COOP was able to meet each of these design goals. The reference inputs\nwithin each Orcfax feed allow the data provider (Orcfax) to publish data points\nonce, while simultaneously allowing multiple consumers to use the data point in\non-chain dApp scripts."),(0,r.yg)("p",null,"This enhancement allows a datum written to a single Cardano eUTXO to be read by\nmultiple consumers without competing with each other for exclusive access to\na transaction output."))}u.isMDXComponent=!0}}]);