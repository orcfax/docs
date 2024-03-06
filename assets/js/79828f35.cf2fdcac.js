"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[251],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,m=u["".concat(s,".").concat(p)]||u[p]||h[p]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(8168),i=(n(6540),n(5680));const o={id:"Publication models",sidebar_position:5,slug:"/publication-models"},r="Publication models",l={unversionedId:"orcfax-solution/Publication models",id:"orcfax-solution/Publication models",title:"Publication models",description:"How data is brought on-chain through an Orcfax oracle feed depends entirely on",source:"@site/docs/orcfax-solution/publication-models.md",sourceDirName:"orcfax-solution",slug:"/publication-models",permalink:"/publication-models",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"Publication models",sidebar_position:5,slug:"/publication-models"},sidebar:"tutorialSidebar",previous:{title:"Cardano Open Oracle Protocol",permalink:"/coop"},next:{title:"Auditability",permalink:"/auditability"}},s={},c=[{value:"The heartbeat publication model",id:"the-heartbeat-publication-model",level:2},{value:"The on-demand publication model",id:"the-on-demand-publication-model",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...o}=e;return(0,i.yg)(u,(0,a.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"publication-models"},"Publication models"),(0,i.yg)("p",null,"How data is brought on-chain through an Orcfax oracle feed depends entirely on\nthe use case and the needs of integrating dApps; there are many different oracle\nuse cases, and each needs something different from Orcfax. While there can be\noverlap in the data needs of smart contracts, many of these use cases have their\nown distinct requirements regarding when data is needed. Because of the varied\nneeds of our integrators, Orcfax is developing publication options that allow\nintegrators to choose services that best meet their needs. Orcfax feeds will now\nsupport two distinct publication models: our existing heartbeat model, and a new\non-demand model."),(0,i.yg)("p",null,"By providing the ability for consumers to choose the publication model, Orcfax\nwill enable dApps to increase flexibility and cost efficiency by choosing how\nbest to receive their data: hourly, daily or when there\u2019s a real-time\nrequirement for the data (e.g. liquidations)."),(0,i.yg)("h2",{id:"the-heartbeat-publication-model"},"The heartbeat publication model"),(0,i.yg)("p",null,"The heartbeat publication model gives integrators the ability to access data at\nregular intervals which can be set according to their needs (e.g. every 5\nminutes, once per hour, etc.). This model can be further enhanced when paired\nwith a monitoring feature which adds a deviation formula; heartbeat publication\nmodels with deviation add improved precision by guaranteeing data at both a\nconsistent interval and when user-stipulated thresholds have been met (e.g.\npublish immediately before the next heartbeat if price changes by x%)."),(0,i.yg)("p",null,"In the heartbeat publication model, nodes request and cache primary source data\nevery minute. Publications are made at a fixed rate (in this case on the hour)\nthat is set by the integrator, and additional publications can be triggered by\nutilizing the monitoring function in the event of deviations."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"the heartbeat model",src:n(5653).A,width:"1920",height:"1080"})),(0,i.yg)("p",null,"This publication model is often referred to as a Push based oracle, as the\noracle service is parameterized to publish (push)\ndata, and does so continuously at predefined intervals so long as the feed\nremains funded."),(0,i.yg)("p",null,"The benefits of the heartbeat (or push) publication model is that integrators\nreceive data continuously. However, if the dApp provides services which only\nneed data inputs for specific actions, at unpredictable times, or to verify\ncomponents of a transaction, then this model can be nonoptimal or costly given\nthe rate at which data is received versus instances of data use."),(0,i.yg)("h2",{id:"the-on-demand-publication-model"},"The on-demand publication model"),(0,i.yg)("p",null,"The on-demand publication model allows complete flexibility and gives dApps even\nmore control of data use by allowing them to request data collection, validation\nand publication whenever it\u2019s needed by their smart contracts."),(0,i.yg)("p",null,"If an Orcfax feed consumer needs a more current update for a given datum feed\n(e.g. ADA/FACT) than is available on-chain or through an existing heartbeat\npublication schedule, then:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"A dApp can request an updated datum by posting an utxo with a specific datum\nin an orders smart contract;"),(0,i.yg)("li",{parentName:"ol"},"This request is observed by the validator scripts;"),(0,i.yg)("li",{parentName:"ol"},"A validator node will be selected to submit the requested datum to the feeds\nsmart contract;"),(0,i.yg)("li",{parentName:"ol"},"The dApp can then use a script to inspect the requested datum and build a\ndApp transaction.")),(0,i.yg)("p",null,"And all of these actions can happen within the same block."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"the on-demand model",src:n(7780).A,width:"1920",height:"1080"})),(0,i.yg)("p",null,"This publication model is often referred to as a Pull based oracle, as the\noracle service is directly triggered by requests made through a smart contract."),(0,i.yg)("p",null,"The benefits of the on-demand (or pull) publication model is that integrators\nexperience greater control over when data is made available. This service\ndramatically increases feed utility for dApps with use cases that can\u2019t justify\na consistent heartbeat. Instead, the on demand publication model allows their\nsmart contracts, and/or users to trigger Orcfax publication workflows for the\ndata they need, when they need it."))}h.isMDXComponent=!0},5653:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/2024-02--heartbeat-94821312f34a86203e2fc1710abd78b9.gif"},7780:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/2024-02--on-demand-758b2bc3b02b23a4fe5049ac31e0b6aa.gif"}}]);