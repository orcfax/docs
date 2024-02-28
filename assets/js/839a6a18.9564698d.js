"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[354],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>f});var i=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,f=p["".concat(s,".").concat(u)]||p[u]||h[u]||r;return t?i.createElement(f,o(o({ref:n},d),{},{components:t})):i.createElement(f,o({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(8168),a=(t(6540),t(5680));const r={id:"faq-4",sidebar_position:4,slug:"/Technical-questions"},o="Technical Questions",l={unversionedId:"FAQ/faq-4",id:"FAQ/faq-4",title:"Technical Questions",description:"What are the minimum technical requirements for node operations?",source:"@site/docs/FAQ/faq-4.md",sourceDirName:"FAQ",slug:"/Technical-questions",permalink:"/Technical-questions",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"faq-4",sidebar_position:4,slug:"/Technical-questions"},sidebar:"tutorialSidebar",previous:{title:"The $FACT Launch",permalink:"/The-$FACT-launch"},next:{title:"Consume fact statements",permalink:"/consume"}},s={},c=[{value:"What are the minimum technical requirements for node operations?",id:"what-are-the-minimum-technical-requirements-for-node-operations",level:2},{value:"Phase 1 is federated, what does that mean?",id:"phase-1-is-federated-what-does-that-mean",level:2},{value:"Where can I find the price data in the datum?",id:"where-can-i-find-the-price-data-in-the-datum",level:2}],d={toc:c},p="wrapper";function h(e){let{components:n,...r}=e;return(0,a.yg)(p,(0,i.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"technical-questions"},"Technical Questions"),(0,a.yg)("h2",{id:"what-are-the-minimum-technical-requirements-for-node-operations"},"What are the minimum technical requirements for node operations?"),(0,a.yg)("p",null,"While we believe that accessibility plays a large role in decentralization, and\nhave made design choices which we hope allows a broader range of participation\nwithin the network, it is still important to be aware of what will be required\ntechnically from those who choose to participate. In addition to a validator\nlicense and the minimum $FACT deposit, operators will be expected to be\nfamiliar with:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The Cardano network"),(0,a.yg)("li",{parentName:"ul"},"Operating Linux servers")),(0,a.yg)("p",null,"Additional information regarding technical requirements and updates to this\nsection should be anticipated as R&D continues in preparation for the\nincentivized testnet."),(0,a.yg)("h2",{id:"phase-1-is-federated-what-does-that-mean"},"Phase 1 is federated, what does that mean?"),(0,a.yg)("p",null,"Phase 1 is only the first step in realizing Orcfax's decentralization vision,\nwhile enabling the team to continue developing important components and gaining\ninvaluable knowledge for future phases. These incremental development\nthresholds help to move Orcfax data up the \u201ctrustless\u201d spectrum, even in this\ninitial federated phase."),(0,a.yg)("p",null,"While our team\u2019s goal for Orcfax is for it to become fully decentralized, phase\n1 will use our federated node network so that we can continue critical R&D for\nour incentivized test net, and after that our decentralized model. Our team\nuses the term \u201cfederated\u201d because Orcfax uses 5 geographically dispersed\ncollector nodes; this model incorporates decentralized best practices such as\nthe node\u2019s geographical distribution in order to aid in regional consistency\nand the prevention of single sources of failure. Additionally, each of these\nfederated nodes queries 3 different primary-source data providers at the same\ntime, which gives Orcfax a decentralized data collection mechanism, and all of\nthis is auditable in our world class standards compliant archival packages and\nExplorer app."),(0,a.yg)("p",null,"Our most recent development ",(0,a.yg)("a",{parentName:"p",href:"http://docs.orcfax.io/roadmap"},"roadmap")," update has\nOrcfax running the Incentivized Testnet Dec23-May24 and then transitioning to\nindependent validator nodes publishing to Mainnet in June 2024."),(0,a.yg)("h2",{id:"where-can-i-find-the-price-data-in-the-datum"},"Where can I find the price data in the datum?"),(0,a.yg)("p",null,"In this example we will use an off-chain datum. We will use this\n",(0,a.yg)("a",{parentName:"p",href:"https://preprod.cexplorer.io/datum/9ced750ebbb2c9a9eac2e07a91525cadd3bfab23950089faa3e3a55517d1033f"},"datum"),"\n, within which the price data can be found in the following portion:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:'language-"list":',metastring:"[","[":!0},'                            {\n                                "fields": [\n                                    {\n                                        "int": 2540017902\n                                    },\n                                    {\n                                        "int": 1.8446744073709552e+19\n                                    }\n                                ],\n                                "constructor": 3\n                            },\n                            {\n                                "fields": [\n                                    {\n                                        "int": 39369801260558197\n                                    },\n                                    {\n                                        "int": 1.8446744073709552e+19\n                                    }\n                                ],\n                                "constructor": 3\n                            }\n                        ]\n')),(0,a.yg)("p",null,"The first ",(0,a.yg)("inlineCode",{parentName:"p"},"\u201cfields\u201d")," (we\u2019ll call it f1) conveys ADA-USD, the second (f2)\nconveys USD-ADA. Within each of these, the first int (we'll call it int1)\nrepresents a price pair."),(0,a.yg)("p",null,"With this in mind, f1, int1 gives the ADA-USD price as an integer (2540017902),\nand the second (f1, int2) gives the number of decimals as ",(0,a.yg)("inlineCode",{parentName:"p"},"longint"),"\n(1.8446744073709552e+19)."),(0,a.yg)("p",null,"The same is true for f2, int1 which gives the price pair for USD-ADA as an\ninteger; with f2, int2 giving the number of decimals."),(0,a.yg)("p",null,"Using Python, you can find out the price by executing the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-from",metastring:"ctypes import c_longlong",ctypes:!0,import:!0,c_longlong:!0},"price = p1 * pow(10, c_longlong(p2).value)\n")),(0,a.yg)("p",null,"With the following results:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Off-chain Datum",src:t(1434).A,width:"378",height:"123"})))}h.isMDXComponent=!0},1434:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2023-10-03--off-chain-datum-walkthrough-9ff0fd4273ec97d9311e19019888f716.png"}}]);