"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[822],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9924:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={id:"Problem statement",sidebar_position:1,slug:"/problem-statement"},i="Problem statement",l={unversionedId:"oracle-problem/Problem statement",id:"oracle-problem/Problem statement",title:"Problem statement",description:"TLDR; can my dApp trust this real-world data to be authentic and accurate?",source:"@site/docs/oracle-problem/problem-statement.md",sourceDirName:"oracle-problem",slug:"/problem-statement",permalink:"/problem-statement",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"Problem statement",sidebar_position:1,slug:"/problem-statement"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Single-source data",permalink:"/single-source"}},c={},s=[{value:"Orcfax: a comprehensive solution",id:"orcfax-a-comprehensive-solution",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"problem-statement"},"Problem statement"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TLDR; can my dApp trust this real-world data to be authentic and accurate?")),(0,a.kt)("p",null,"The trillion dollar DeFi industry is critically dependent on real-world data\nprovided by oracles. However, oracle engineering is still in an early stage.\nThere are still many opportunities to introduce false data about real-world\nevents into oracle data collection, validation and publication pipelines."),(0,a.kt)("p",null,"This is a very lucrative attack vector for bad actors as introducing false\noracle data can trigger large financial payouts from smart contract scripts.\nUnfortunately, there are significant challenges to preventing a so-called\n\u201cman-in-the-middle\u201d attack and proving that external real-world data introduced\nto smart contracts can be trusted to be authentic and accurate."),(0,a.kt)("p",null,"Collectively, the blockchain industry refers to these challenges as \u201cThe Oracle\nProblem.\u201d"),(0,a.kt)("h2",{id:"orcfax-a-comprehensive-solution"},"Orcfax: a comprehensive ",(0,a.kt)("a",{parentName:"h2",href:"solution-overview"},"solution")),(0,a.kt)("p",null,'The oracle problem is not just limited to providing data feeds for DeFi. Society\nat large is experiencing a "',(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://medium.com/coinmonks/orcfax-the-trust-machine-revisited-c475dbb0a5d6"},"trust crisis")),'" and needs better solutions\nfor validating statements of fact about the real world. Orcfax is intentionally\ndesigned to leverage the distributed consensus breakthroughs achieved with\nblockchain technology to provide decentralized, "trustless"\nfact validation and reference services that will have many applications beyond\nDeFi applications. Orcfax is particulary interested in on-demand, real-world\nfact validation to counter the threat of AI-generated falsehoods.'))}u.isMDXComponent=!0}}]);