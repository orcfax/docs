"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[649],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>f});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return a?r.createElement(f,o(o({ref:t},d),{},{components:a})):r.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7579:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(8168),n=(a(6540),a(5680));const i={id:"Auditability",sidebar_position:6,slug:"/auditability"},o=void 0,l={unversionedId:"orcfax-solution/Auditability",id:"orcfax-solution/Auditability",title:"Auditability",description:"Standards-compliant audit logs",source:"@site/docs/orcfax-solution/auditability.md",sourceDirName:"orcfax-solution",slug:"/auditability",permalink:"/auditability",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"Auditability",sidebar_position:6,slug:"/auditability"},sidebar:"tutorialSidebar",previous:{title:"Publication models",permalink:"/publication-models"},next:{title:"The Orcfax vision",permalink:"/the-orcfax-vision"}},s={},c=[{value:"Standards-compliant audit logs",id:"standards-compliant-audit-logs",level:2},{value:"The Orcfax Explorer",id:"the-orcfax-explorer",level:3},{value:"Future value",id:"future-value",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"standards-compliant-audit-logs"},"Standards-compliant audit logs"),(0,n.yg)("p",null,"Can oracle solutions be trusted if they cannot, or will not, demonstrate how\ntheir source data was collected and validated? We at Orcfax strongly believe\nthat they should not be."),(0,n.yg)("p",null,"As a response to this question, Orcfax generates standards-compliant archival\npackages that are made available permissionlessly so that anybody has the\nability to audit the flow of Orcfax data collection, validation, and\npublication."),(0,n.yg)("h3",{id:"the-orcfax-explorer"},"The Orcfax Explorer"),(0,n.yg)("p",null,"To demonstrate the audit-enabling function and re-usability of these archival\npackages, while further simplifying the auditing process for users, Orcfax\nlaunched its ",(0,n.yg)("a",{parentName:"p",href:"https://explorer.orcfax.io/"},"Orcfax Explorer"),"; this tool provides\na user friendly dashboard which enables users to quickly and easily navigate all\ndata published by Orcfax, along with complete documentation for all processes\nleading to publication."),(0,n.yg)("p",null,"Each Orcfax fact statement that is published on the Cardano blockchain has a\ncorresponding audit trail that documents how the primary source data was\ncollected and validated before it was published as a Cardano transaction datum.\nThese audit logs are marked up using both industry-standards and open-data\nstandards that enable machine-readable interoperability, like\n",(0,n.yg)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/rfc8493/"},"IETF Bagit"),", which improves digital\nrepository interoperability for digital archival packages."),(0,n.yg)("p",null,"While navigating through the Explorer, users can click on a fact statement card\nto see the detailed summary for that fact statement. The Archive Explorer viewer\nloads the archival audit log package from the Arweave network (via\xa0Arkly.io) and\nprovides the user with an intuitive view of all the audit log files."),(0,n.yg)("p",null,"Click on the link below to view a walkthrough of the Orcfax Explorer!\n",(0,n.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=MVLOBT58PlA"},(0,n.yg)("img",{parentName:"a",src:"https://img.youtube.com/vi/MVLOBT58PlA/0.jpg",alt:"Explorer walkthrough"}))),(0,n.yg)("p",null,"This product brings additional value to the Orcfax solution by giving users the\nability to freely search for, and review, all Fact Statements published by\nOrcfax. The Explorer does this through purposeful user-centered design decisions\nwhich have prioritized accessibility and ease of use for a dynamic and diverse\nuser group."),(0,n.yg)("h2",{id:"future-value"},"Future value"),(0,n.yg)("p",null,"The archival packages created by Orcfax are described using\n",(0,n.yg)("a",{parentName:"p",href:"https://schema.org"},"Schema.org")," and ",(0,n.yg)("a",{parentName:"p",href:"https://json-ld.org/"},"JSON-LD")," compliant\ntaxonomies, which have been purposefully selected in order to enrich Orcfax\ndata. Additionally, by leveraging these taxonomies, Orcfax makes its outputs\n",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Linked_data"},"Linked Data")," and\n",(0,n.yg)("a",{parentName:"p",href:"https://www.telusinternational.com/insights/ai-data/article/how-to-train-ai"},"AI-training"),"\ncompatible, which dramatically enhances downstream value."),(0,n.yg)("p",null,"JSON-LD is the most widely used serialization of the Resource Description\nFramework (RDF); this framework ensures that data is machine-readable.\nAnd schema.org is the single most impactful markup language for making any type\nof metadata machine-readable. In Orcfax's case, that means metadata related to\n",(0,n.yg)("a",{parentName:"p",href:"https://schema.org/Claim"},"Claims")," made about events happening in the real\nworld."),(0,n.yg)("p",null,"The use of these taxonomies, and the highly structured data as aa result, will\nperfectly position Orcfax feeds to serve as the source of a growing data lake of\nreal world fact statements that will have many secondary reference uses beyond\nDeFi oracle publication. The highly machine and human readable data lake of\nvalidated fact statements can be used, for example, to train enterprise or\npersonal AI models with reliable real-world data."),(0,n.yg)("p",null,"Some of the most ",(0,n.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=cEyHsMzbZBs"},"current research on AI"),"\nprogress makes it clear that the in-deterministic nature of Large Language\nModels (LLM) cannot be relied upon for factual citations; these technologies\nneed to be supported and trained by highly structured fact statements about the\nreal world that humans inhabit. We anticipate that the Orcfax protocol, anchored\nby the decentralized resiliency of the Cardano blockchain network, will have the\nability to provide this foundational layer."),(0,n.yg)("p",null,"We anticipate a suite of enterprise service layers on top of this data lake of\ndecentralized, validated fact statements as a secondary revenue stream for the\nOrcfax protocol once we reach a critical mass of feed types, data sources, and\nvalidator nodes."))}p.isMDXComponent=!0}}]);