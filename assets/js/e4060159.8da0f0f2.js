"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[450],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=s(r),p=a,d=f["".concat(l,".").concat(p)]||f[p]||h[p]||i;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[f]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={id:"Reference",sidebar_position:7,slug:"/reference"},c="Fact statement reference",o={unversionedId:"technical-architecture/Reference",id:"technical-architecture/Reference",title:"Fact statement reference",description:"Users should not have to trust but should verify. This has driven our system",source:"@site/docs/technical-architecture/reference.md",sourceDirName:"technical-architecture",slug:"/reference",permalink:"/reference",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"Reference",sidebar_position:7,slug:"/reference"},sidebar:"tutorialSidebar",previous:{title:"Fact statement archiving",permalink:"/archiving"},next:{title:"Decentralization roadmap",permalink:"/decentralization"}},l={},s=[],u={toc:s},f="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fact-statement-reference"},"Fact statement reference"),(0,a.kt)("br",null),"Users should not have to trust but should verify. This has driven our system design which captures and archives the entire Orcfax workflow. From Collection, to the publication event, the whole data collection process-- including evidence of the fact statement which got published within a smart contract, along with the use of it-- all gets bundled into an international standards compliant (ISO) archival package using bag-it, which is then stored off chain in a\xa0decentralized storage network.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Orcfax, through the practical course of business,\xa0 will create a massive decentralized digital archive of facts, which will have high utility and value for research, and to inform or train future price action or machine learning models. Users will be able to search through this archive through the Orcfax Fact Explorer by leveraging the identifying information that hey have at hand.",(0,a.kt)("br",null))}h.isMDXComponent=!0}}]);