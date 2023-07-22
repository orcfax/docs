"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,f=u["".concat(c,".").concat(p)]||u[p]||h[p]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"Data collection",sidebar_position:2,slug:"/collection"},i="Data collection",l={unversionedId:"technical-architecture/Data collection",id:"technical-architecture/Data collection",title:"Data collection",description:"Data collection is another critical breakthrough that Orcfax has introduced. The",source:"@site/docs/technical-architecture/collection.md",sourceDirName:"technical-architecture",slug:"/collection",permalink:"/collection",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Data collection",sidebar_position:2,slug:"/collection"},sidebar:"tutorialSidebar",previous:{title:"Architecture overview",permalink:"/architecture-overview"},next:{title:"Data calculation",permalink:"/Data calculation"}},c={},s=[],d={toc:s},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-collection"},"Data collection"),(0,a.kt)("p",null,"Data collection is another critical breakthrough that Orcfax has introduced. The\nOrcfax oracle service collects data about real world events from various primary\nsources using a network of nodes. These nodes are run independently and\npermissionlessly by anyone that is able to install our open source software and\ncommit a small amount of $FACT tokens as stake.",(0,a.kt)("br",null)),(0,a.kt)("br",null),"These Orcfax nodes are initiated through executables made available through the Orcfax GitHub repo, which will be transitioned to a fully decentralized Git repo at a later date. These executables will ensure and enforce that every node is operating the exact same software. Additional safeguards have also been implemented to prevent tampering with this software in order to mitigate the risks associated with man in the middle attacks.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Orcfax executables are fully open sourced and are visible online along with our pipeline in order to facilitate user review. We believe that our community should be able to review a release and follow it down to the command level to see what new changes were made to the software. Users will be able to review the pipeline that generated the executable and its signature so that authenticity of the software release is safeguarded. This will also allow Orcfax to limit participation within the validator network to those running the appropriately signed executable. For now, these will be developed by the project, which is currently Orcfax Ltd. as the corporate entity. However, handing over the governance of the network, along with long-term maintenance and development, and transitioning to a decentralized autonomous organization is a long-term priority of Orcfax and is reflected in our roadmap.",(0,a.kt)("br",null),(0,a.kt)("br",null),"First and foremost, at the very front end of collecting data, Orcfax nodes will triangulate their data collection. What that means is that Orcfax doesn\u2019t rely on any one or two single sources. Our system requires a minimum of three separate independent data sources for the same data which can be queried by our network of decentralized oracle pool nodes.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Example If the target data was the outcome or score of a football match between Manchester United and Chelsea, Orcfax nodes could hit a sports website and scrape the results, do the same for a second, and for the third. At the end, the node has received information regarding the target from three independent sources.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Grounding this example, nodes executing their Collection function will receive at least three API responses similar to the below example.",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "@context": "https://schema.org",\n  "type": "Message",\n  "name": "ADA-USD",\n  "sender": "api-name",\n  "identifier": "",\n  "dateReceived": "Wed, 19 Jul 2023 16:38:41 GMT",\n  "messageAttachment": {\n    "encoding": "application/json;base64",\n    "text": ""\n  }\n}\n')),(0,a.kt)("p",null,"These API responses will allow nodes to triangulate the target data;\ntriangulation of data is a scientific principle that Orcfax has adopted as a\nmethod for developing comprehensive understandings of the phenomena which it\nreport on; it is a system requirement that each Orcfax feed utilizes a minimum\nof three sources (S1, S2, S3, Sn+1) but can accommodate a dynamic number of\nsources in order to compensate for type or the need for more sources to achieve\nvalidity. These three sources can comprise of application programming interfaces\n(API\u2019s), internet of things (IoT) devices, weather stations, and crowdsourced\nreporting data (eg a series of geotagged photographs)."))}h.isMDXComponent=!0}}]);