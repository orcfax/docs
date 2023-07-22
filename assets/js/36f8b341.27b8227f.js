"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[39],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),f=i,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={id:"Data validation",sidebar_position:3,slug:"/Data validation"},o="Data validation",l={unversionedId:"technical-architecture/Data validation",id:"technical-architecture/Data validation",title:"Data validation",description:"At launch, the Orcfax Federated Network of nodes on mainnet will consist of five",source:"@site/docs/technical-architecture/validation.md",sourceDirName:"technical-architecture",slug:"/Data validation",permalink:"/Data validation",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"Data validation",sidebar_position:3,slug:"/Data validation"},sidebar:"tutorialSidebar",previous:{title:"Data calculation",permalink:"/Data calculation"},next:{title:"Fact statement publication",permalink:"/publication"}},c={},s=[],d={toc:s},p="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-validation"},"Data validation"),(0,i.kt)("br",null),"At launch, the Orcfax Federated Network of nodes on mainnet will consist of five independent participants within our sidechain blockchain of validator nodes. However, we believe that the success of our incentivized testnet will result in the rapid adoption of our system by additional participants. Even if node operators did not participate in our testnet, adoption on mainnet will be aided in part by the Orcfax staking incentivization model. The goal of Orcfax being, mass adoption to the point that the system will utilize hundreds of these independent, geographically and server diverse, nodes.",(0,i.kt)("br",null),(0,i.kt)("br",null),"In order to participate as a validator node, operators will be required to stake a designated amount of $FACT. In order to drive adoption and equitable access for participants, the requisite amount of $FACT will be kept relatively low. In addition to this, the system has been designed not to privilege nodes with stake above and beyond this set threshold.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Because each node will be implemented using the same software executables, each node will maintain equivalent technical functionality. What this means in practice is that each participant will have the exact same technical specifications, capabilities, and code; each will be capable of executing all Orcfax processes (e.g. Collection, Validation, Publishing, etc). Importantly, staking more than the  required $FACT will also not affect a node\u2019s chances of being delegated the responsibility for submitting transactions or increase their proportional share of pool rewards. These decisions have been made in effort to positively affect mass-adoption.",(0,i.kt)("br",null))}u.isMDXComponent=!0}}]);