"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[39],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={id:"Data validation",sidebar_position:3,slug:"/Data validation"},o="Data validation",l={unversionedId:"technical-architecture/Data validation",id:"technical-architecture/Data validation",title:"Data validation",description:"At launch, the Orcfax Federated Network of nodes on mainnet will consist of five independent participants within our sidechain blockchain of validator nodes.",source:"@site/docs/technical-architecture/validation.md",sourceDirName:"technical-architecture",slug:"/Data validation",permalink:"/Data validation",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"Data validation",sidebar_position:3,slug:"/Data validation"},sidebar:"tutorialSidebar",previous:{title:"Data calculation",permalink:"/Data calculation"},next:{title:"Fact statement publication",permalink:"/publication"}},c={},s=[],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-validation"},"Data validation"),(0,i.kt)("p",null,"At launch, the Orcfax Federated Network of nodes on mainnet will consist of five independent participants within our sidechain blockchain of validator nodes.\nHowever, we believe that the success of our incentivized testnet will result in\nthe rapid adoption of our system by additional participants. Even if node\noperators did not participate in our testnet, adoption on mainnet will be aided\nin part by the Orcfax staking incentivization model. The goal of Orcfax being,\nmass adoption to the point that the system will utilize hundreds of these\nindependent, geographically and server diverse, nodes.",(0,i.kt)("br",null)),(0,i.kt)("br",null),"In order to participate as a validator node, operators will be required to stake a designated amount of $FACT. In order to drive adoption and equitable access for participants, the requisite amount of $FACT will be kept relatively low. In addition to this, the system has been designed not to privilege nodes with stake above and beyond this set threshold.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Because each node will be implemented using the same software executables, each node will maintain equivalent technical functionality. What this means in practice is that each participant will have the exact same technical specifications, capabilities, and code; each will be capable of executing all Orcfax processes (e.g. Collection, Validation, Publishing, etc). Importantly, staking more than the  required $FACT will also not affect a node\u2019s chances of being delegated the responsibility for submitting transactions or increase their proportional share of pool rewards. These decisions have been made in effort to positively affect mass-adoption.",(0,i.kt)("br",null))}u.isMDXComponent=!0}}]);