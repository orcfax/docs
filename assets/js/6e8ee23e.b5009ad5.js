"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[490],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),f=u(a),l=r,m=f["".concat(i,".").concat(l)]||f[l]||p[l]||o;return a?n.createElement(m,c(c({ref:t},s),{},{components:a})):n.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=l;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[f]="string"==typeof e?e:r,c[1]=d;for(var u=2;u<o;u++)c[u]=a[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}l.displayName="MDXCreateElement"},9811:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={id:"consume",sidebar_position:1,slug:"/consume"},c="Consume fact statements",d={unversionedId:"user-manual/consume",id:"user-manual/consume",title:"Consume fact statements",description:"A fact statement is a datum that the Orcfax network publishes to a Cardano",source:"@site/docs/user-manual/consume.md",sourceDirName:"user-manual",slug:"/consume",permalink:"/consume",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"consume",sidebar_position:1,slug:"/consume"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Verify fact statements",permalink:"/verify"}},i={},u=[{value:"Read CBOR datum on-chain",id:"read-cbor-datum-on-chain",level:2},{value:"Read CBOR datum off-chain",id:"read-cbor-datum-off-chain",level:2}],s={toc:u},f="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(f,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"consume-fact-statements"},"Consume fact statements"),(0,r.kt)("p",null,"A fact statement is a datum that the Orcfax network publishes to a Cardano\nblockchain transaction. This data point becomes an input to Cardano smart\ncontracts and dApps."),(0,r.kt)("p",null,"All fact statements are structured as ",(0,r.kt)("a",{parentName:"p",href:"https://json-ld.org/"},"JSON-LD")," files\nbefore they are serialized into the Concise Binary Object Representation\n(",(0,r.kt)("a",{parentName:"p",href:"https://cbor.io/"},"CBOR"),") that is used in Cardano transactions."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fact Statement",src:a(1570).Z,width:"3232",height:"1237"})),(0,r.kt)("h2",{id:"read-cbor-datum-on-chain"},"Read CBOR datum on-chain"),(0,r.kt)("p",null,"Orcfax fact statement datum are readable on-chain as Cardano\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/perturbing/vasil-tests/blob/main/reference-inputs-cip-31.md"},"Reference Inputs"),"."),(0,r.kt)("p",null,"To read our ",(0,r.kt)("inlineCode",{parentName:"p"},"ADA-USD|USD-ADA")," Mainnet feed, check the latest transaction\nissued by the ",(0,r.kt)("a",{parentName:"p",href:"https://cexplorer.io/address/addr1w8tcecfy7np3sduzn99ffuv8qx2sa8v977l0xql8ca7lgkgq7lqh2/tx#data"},"feed smart contract"),"."),(0,r.kt)("h2",{id:"read-cbor-datum-off-chain"},"Read CBOR datum off-chain"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pycardano.readthedocs.io/"},"PyCardano")," SDK provides convenient\nhelper functions for converting on-chain CBOR."),(0,r.kt)("p",null,"We created an open-source PyCardano\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orcfax/datum-demo/tree/main#readme"},"demo script")," to read and\nparse on-chain Orcfax datum."),(0,r.kt)("p",null,"This script converts the Cardano transaction's CBOR serialization to human and\nmachine-readable JSON and then logs various details about the Datum as it goes."),(0,r.kt)("p",null,"It's very easy to customize the configuration options of this script to match\nthe requirements of your own dApp."),(0,r.kt)("p",null,"It is made freely available under an open-source Apache v2.0 license so that\nyou can test, integrate, and extend your own solutions using the on-chain,\nauthenticated fact statement feeds provided by the Orcfax oracle service."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"demo script output:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'2023-09-28T16:24:13Z INFO :: read_datum.py:264:read_datum() :: entering this script...\n2023-09-28T16:24:13Z INFO :: read_datum.py:265:read_datum() :: oracle smart contract: addr_test1wrtcecfy7np3sduzn99ffuv8qx2sa8v977l0xql8ca7lgkgmktuc0\n2023-09-28T16:24:15Z INFO :: read_datum.py:226:get_latest_utxo() :: inspecting \'862\' UTxOs\n2023-09-28T16:24:15Z WARNING :: read_datum.py:254:get_latest_utxo() :: \'7.00\' hours since datum was published (1695943470811)\n2023-09-28T16:24:15Z INFO :: read_datum.py:191:validate_utxo() :: inspecting the utxo for valid auth tokens\n2023-09-28T16:24:15Z INFO :: read_datum.py:217:validate_utxo() :: the utxo is valid, it contains the correct auth token\n2023-09-28T16:24:15Z INFO :: read_datum.py:79:display_utxo() :: (input) transaction id: 078d548b0ed91b95164d0baaf2b486161e06aab84483d99ed01a2180090ab0f3\n2023-09-28T16:24:15Z INFO :: read_datum.py:80:display_utxo() :: (output) transaction addr: addr_test1wrtcecfy7np3sduzn99ffuv8qx2sa8v977l0xql8ca7lgkgmktuc0\n2023-09-28T16:24:15Z INFO :: read_datum.py:81:display_utxo() :: (output) datum cbor:\n\n590207d8799fa74840636f6e746578745268747470733a2f2f736368656d612e6f7267525f3a636f6e74656e745369676e61747572655840343033333066663235393763333939646461616162366331646261616235323137336566383262663766303864336361383435383561623565373634323961304a6964656e746966696572a34a70726f706572747949445041726b6c79204964656e74696669657244747970654d50726f706572747956616c75654576616c7565582f75726e3a6f72636661783a34616531303634302d313062392d346332332d616631642d633461396462643839333864446e616d654f4144412d5553447c5553442d41444144747970654d50726f706572747956616c75654576616c75659fd87c9f1a0003ce971bfffffffffffffffaffd87c9f1b000e3d57a771924e1bfffffffffffffff1ffff4e76616c75655265666572656e63659fa34540747970654d50726f706572747956616c7565446e616d654976616c696446726f6d4576616c75651b0000018adde4c05ba34540747970654d50726f706572747956616c7565446e616d654c76616c69645468726f7567684576616c75651b0000018ade1baedbff5820303443413030303148424559394b4b34343950314345513850483744544a5954d87a9f1b0000018ade1baedbff581c90b121aa6b689200adf7ed115040a96375d2b68e23633d6864c53a91ff\n\n2023-09-28T16:24:15Z INFO :: read_datum.py:84:display_utxo() :: (output) Tx cost: 3.42214 ADA\n2023-09-28T16:24:15Z INFO :: read_datum.py:151:decode_utxo() ::\n\n{\n  "@context": "https://schema.org",\n  "type": "PropertyValue",\n  "name": "ADA-USD|USD-ADA",\n  "value": [\n    0.249495,\n    4.008096354636367\n  ],\n  "valueReference": [\n    {\n      "@type": "PropertyValue",\n      "name": "validFrom",\n      "value": 1695939870811\n    },\n    {\n      "@type": "PropertyValue",\n      "name": "validThrough",\n      "value": 1695943470811\n    }\n  ],\n  "identifier": {\n    "propertyID": "Arkly Identifier",\n    "type": "PropertyValue",\n    "value": "urn:orcfax:4ae10640-10b9-4c23-af1d-c4a9dbd8938d"\n  },\n  "_:contentSignature": "40330ff2597c399ddaaab6c1dbaab52173ef82bf7f08d3ca84585ab5e76429a0"\n}\n\n2023-09-28T16:24:15Z INFO :: read_datum.py:152:decode_utxo() :: oracle datum identifier (internal): b\'04CA0001HBEY9KK449P1CEQ8PH7DTJYT\'\n2023-09-28T16:24:15Z INFO :: read_datum.py:157:decode_utxo() :: oracle datum timestamp: 2023-09-28T23:24:30Z (1695943470811)\n2023-09-28T16:24:15Z INFO :: read_datum.py:170:pretty_log_value() :: ADA-USD: 0.249495\n2023-09-28T16:24:15Z INFO :: read_datum.py:170:pretty_log_value() :: USD-ADA: 4.008096354636367\n')))}p.isMDXComponent=!0},1570:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-30--Orcfax--fact-statement-0ff642e16e956a03a7829c3106892607.jpg"}}]);