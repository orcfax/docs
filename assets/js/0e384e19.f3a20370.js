"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={id:"intro",sidebar_position:1,slug:"/"},i="Introduction",c={unversionedId:"intro",id:"intro",title:"Introduction",description:"Orcfax is a decentralized oracle service that publishes facts about real world events to the Cardano blockchain.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Data authenticity",permalink:"/data-authenticity"}},s={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Learn more",id:"learn-more",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Orcfax is a decentralized ",(0,n.kt)("a",{parentName:"p",href:"oracle-basics"},"oracle service")," that publishes facts about real world events to the ",(0,n.kt)("a",{parentName:"p",href:"https://cardano.org/"},"Cardano")," blockchain."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Orcfax concept diagram",src:r(4157).Z,width:"2682",height:"1260"})),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Learn how your Cardano smart contracts and scripts can ",(0,n.kt)("a",{parentName:"p",href:"consume"},"consume data")," from Orcfax."),(0,n.kt)("p",null,"Using Orcfax's unique auditing and archiving features, you can ",(0,n.kt)("a",{parentName:"p",href:"verify"},"verify data")," published by this oracle."),(0,n.kt)("p",null,"Orcfax's native ",(0,n.kt)("a",{parentName:"p",href:"scorecard"},"FACT token")," is used by Consumers to pay for oracle publication as well by Validators for staking and rewards."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Orcfax concept diagram",src:r(4940).Z,width:"5068",height:"2034"})),(0,n.kt)("h2",{id:"learn-more"},"Learn more"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"solution-overview"},"technical architecture")," section provides a detailed overview of the Orcfax solution and its primary components."),(0,n.kt)("p",null,"We have role-specific manuals for fact statement ",(0,n.kt)("a",{parentName:"p",href:"consume"},"Consumers"),", data ",(0,n.kt)("a",{parentName:"p",href:"validate"},"Validators"),", as well as ",(0,n.kt)("a",{parentName:"p",href:"develop"},"Developers")," working on Orcfax technology."),(0,n.kt)("p",null,"Read our ",(0,n.kt)("a",{parentName:"p",href:"oracle-basics"},"FAQ")," sections to answer any further questions you may have about Orcfax or oracles in general."),(0,n.kt)("p",null,"You can also join our ",(0,n.kt)("a",{parentName:"p",href:"https://dsc.gg/orcfax"},"Discord")," to engage directly with Orcfax team members."))}d.isMDXComponent=!0},4940:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2023-07-06--Orcfax-concept-diagram-086dc58d36b4cad3f8883cb33340ec42.png"},4157:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2023-07-20--Oracle-concept-diagram-0d645f2bd919e5909d18acb5a8e8aef3.png"}}]);