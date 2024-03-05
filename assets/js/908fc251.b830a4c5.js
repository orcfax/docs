"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[535],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(8168),i=(n(6540),n(5680));const a={id:"Operational requirements",sidebar_position:2,slug:"/operational-requirements"},o=void 0,l={unversionedId:"node-operation/Operational requirements",id:"node-operation/Operational requirements",title:"Operational requirements",description:"Orcfax is a decentralized oracle solution that publishes data about real world",source:"@site/docs/node-operation/operational-requirements.md",sourceDirName:"node-operation",slug:"/operational-requirements",permalink:"/operational-requirements",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Operational requirements",sidebar_position:2,slug:"/operational-requirements"},sidebar:"tutorialSidebar",previous:{title:"Validator model introduction",permalink:"/validator-intro"},next:{title:"Technical requirements",permalink:"/technical-requirements"}},s={},d=[{value:"Rationale",id:"rationale",level:2},{value:"The Validator License",id:"the-validator-license",level:2},{value:"Mint date",id:"mint-date",level:3},{value:"The $FACT deposit",id:"the-fact-deposit",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Orcfax is a decentralized oracle solution that publishes data about real world\nevents to the Cardano blockchain. The decentralized oracle feeds issued by\nOrcfax are made possible by leveraging a network of independent nodes which are\nresponsible for collecting and aggregating multiple primary data sources while\nproviding full audit logs of the complete oracle process."),(0,i.yg)("p",null,"Those interested in running an Orcfax node will be required to do the following:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Reserve, mint and hold a Validator license"),(0,i.yg)("li",{parentName:"ol"},"Deposit FACT tokens in our validator smart contract")),(0,i.yg)("h2",{id:"rationale"},"Rationale"),(0,i.yg)("p",null,"The use of a license and the required deposit is designed strategically to\nprovide network security, clarity, and fairness within the Validator Network."),(0,i.yg)("p",null,"The Validator License is an NFT that represents the right to operate an Orcfax\nvalidator node. The NFT is non-redeemable, but tradable on the secondary\nmarkets."),(0,i.yg)("p",null,"The Deposit is a redeemable amount of $FACT staked by validators for network\nparticipation. It ensures validator accountability and is subject to slashing\n(penalty) for actions that harm the oracle network (e.g. poor node network\nresponse time, contributing non-conformant data, etc). Validators will be able\nto reclaim their deposited $FACT anytime. However, removing the required stake\namount will result in losing the ability to run their node until a deposit is\nadded once again."),(0,i.yg)("h2",{id:"the-validator-license"},"The Validator License"),(0,i.yg)("p",null,"The decentralized Orcfax network will consist of 100 nodes. This means that only\n100 licenses are available. This decision to limit network size was made in\nconsultation with the Orcfax community."),(0,i.yg)("p",null,"Each of these licenses will cost 100,000 $FACT to mint."),(0,i.yg)("p",null,"The ability to demonstrate interest in acquiring a license was first made\navailable through a reservation process, whereby users were required to submit a\ntransaction to themselves with a minimum of 250,000 $FACT during a one week\nperiod. A ranking system was then employed to score user reservations based on\ntwo factors:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"timeliness of the submitted reservation transaction"),(0,i.yg)("li",{parentName:"ol"},"the total $FACT submitted in the transaction (above andd beyond the minimum\nrequirement of 250K).\nThis ranking system wwas designed to provide greater opportunity to all while\nalso disincentivizing \u201cwhales\u201d and bots from acquiring multiple licenses for the\npurposes of speculation.")),(0,i.yg)("p",null,"The reservation process started on February 17th, 2024 at 19:00:00 UTC and ended\nexactly 1 week later on February 24th at 19:00:00 UTC. During, andd after, the\nreservation period, users were able to track the status of their reservation\nthrough a realtime ",(0,i.yg)("a",{parentName:"p",href:"https://status.orcfax.io/validators"},"leaderboard"),"."),(0,i.yg)("p",null,"At the end of the reservation process the top 100 valid reservations were\nwhitelisted to mint their validator license at a later date, and were required\nto retain the $FACT amount in their wallet that they reserved with up to the\nminting date in order to keep their whitelist status. The remaining valid\nreservations will be held in reserve in case some don\u2019t exercise their rights to\nmint a license, or a reservation entry is invalidated due to fund movement prior\nto the mint event."),(0,i.yg)("h3",{id:"mint-date"},"Mint date"),(0,i.yg)("p",null,"The date at which whitelisted wallets may mint their licenses will be announced\nshortly. Please watch our Discord for timely updates."),(0,i.yg)("p",null,"The Orcfax team will share a time-window for whitelisted wallets to mint their\nLicense NFTs. In case of unclaimed licenses, a second round will open for the\ngroup of wallets held in reserve."),(0,i.yg)("p",null,"The minting price of the license will be 100,000 $FACT."),(0,i.yg)("p",null,"The $FACT accrued through the minting process will be transferred to the\n",(0,i.yg)("a",{parentName:"p",href:"tokenomics#ecosystem"},"ecosystem wallet"),". This allocation is for future\npartnerships, (centralized) exchange liquidity, marketing campaigns and\ndeveloper grants. The funds within this wallet have been set aside to fund\nresearch, and to develop tools/services that contribute to the growth of the\nOrcfax ecosystem."),(0,i.yg)("h2",{id:"the-fact-deposit"},"The $FACT deposit"),(0,i.yg)("p",null,"On March 1, 2024 The required $FACT deposit for node operation was set at\n500,000 $FACT. This sum was determined through market value, whereby either\n500,000 $FACT or 10,000 USD equivalent in $FACT on March 1st would be required\n(i.e. whichever $FACT amount is larger on that date)."))}p.isMDXComponent=!0}}]);