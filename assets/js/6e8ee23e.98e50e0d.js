"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[490],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(a),f=r,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return a?n.createElement(m,i(i({ref:t},l),{},{components:a})):n.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},9811:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={id:"consume",sidebar_position:1,slug:"/consume"},i="Consume fact statements",s={unversionedId:"user-manual/consume",id:"user-manual/consume",title:"Consume fact statements",description:"A fact statement is a datum that the Orcfax network publishes to a Cardano",source:"@site/docs/user-manual/consume.md",sourceDirName:"user-manual",slug:"/consume",permalink:"/consume",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"consume",sidebar_position:1,slug:"/consume"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Verify fact statements",permalink:"/verify"}},c={},d=[{value:"UTxO model",id:"utxo-model",level:2},{value:"Datum structure",id:"datum-structure",level:2},{value:"Orcfax JSON-LD schema",id:"orcfax-json-ld-schema",level:3},{value:"Read CBOR datum on-chain",id:"read-cbor-datum-on-chain",level:2},{value:"Read CBOR datum off-chain",id:"read-cbor-datum-off-chain",level:2}],l={toc:d},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"consume-fact-statements"},"Consume fact statements"),(0,r.kt)("p",null,"A fact statement is a datum that the Orcfax network publishes to a Cardano\nblockchain transaction. This This datum can then be used as an input to Cardano smart\ncontracts and dApps."),(0,r.kt)("h2",{id:"utxo-model"},"UTxO model"),(0,r.kt)("p",null,"A single fact statement is associated with a single ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cardano.org/learn/eutxo-explainer/"},"UTxO"),". Each UTxO\nhas a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cardano.org/cardano-testnet/about/feature-overview/#referenceinputs(cip-31)"},"reference input")," encoded as an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cardano.org/cardano-testnet/about/feature-overview/#inlinedatums(cip-32)"},"inline datum"),"."),(0,r.kt)("p",null,"Reference inputs are published using a COOP authentication token with a COOP\nminting policy identifier, currently:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"preprod: ",(0,r.kt)("inlineCode",{parentName:"li"},"5ec8416ecd8af5fe338068b2aee00a028dc1f4c0cd5978fb86d7c038"),"\n(smart contract address:\n",(0,r.kt)("inlineCode",{parentName:"li"},"addr_test1wrtcecfy7np3sduzn99ffuv8qx2sa8v977l0xql8ca7lgkgmktuc0"),")"),(0,r.kt)("li",{parentName:"ul"},"mainnet: ",(0,r.kt)("inlineCode",{parentName:"li"},"84da51fd8041b6a1073f1154ddde0c846d71c4081fc1f7ba66e0e6b5"),"\n(smart contract address:\n",(0,r.kt)("inlineCode",{parentName:"li"},"addr1w8tcecfy7np3sduzn99ffuv8qx2sa8v977l0xql8ca7lgkgq7lqh2"),")")),(0,r.kt)("p",null,"Minting policy identifiers are critical as fact statements should be verified as\ncoming from a known source. These identifiers also provides the ability to\nfilter all of the UTxO at a given smart contract address and to filter out\nthose sent by others to the same address."),(0,r.kt)("p",null,"Users will therefore need to use the following information to identify the\nlatest facts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Minting policy ID."),(0,r.kt)("li",{parentName:"ul"},"Datum format, including:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Most recent (",(0,r.kt)("inlineCode",{parentName:"li"},"ValueReference -> PropertyValue[1] -> value)"),", i.e. the\nlargest POSIX timestamp compared to other fact statement datum,"),(0,r.kt)("li",{parentName:"ul"},'Feed name, e.g. "ADA-USD".')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Users on preprod will find a volume of test data that hasn't been\nretired as Orcfax previously used this space as a testing sandbox. Users can\nignore this data by using the latest preprod policy ID and fact schema.")),(0,r.kt)("p",null,"Unconsumed reference inputs are those still available for smart contracts to use\non-chain. Spending a UTxO with a reference input renders it unusable in a smart\ncontract (though the data will be visible in the historical transaction).\nConsuming reference inputs is sometimes also referred to as garbage collection\nor ",(0,r.kt)("em",{parentName:"p"},"retiring")," of fact statements. Orcfax's mainnet V1 will operate a policy\nwhereby two unspent fact UTxO will remain on-chain at all times."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: maintaining at least two datum on-chain gives smart contracts (and their\ndevelopers) access to the most current datum and the datum before that for\ninspection. The POSIX timestamps denoting a valid-from and valid-through\nperiod should be inspected to ensure that they are still within a valid\nwindow.")),(0,r.kt)("p",null,"For more information about the use of reference inputs and inline datum in COOP,\nsee COOP's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mlabs-haskell/cardano-open-oracle-protocol/blob/9e9c9aedba84d32e424b1dd116b4734e1a42f3bc/coop-docs/00-design.md#cardano-features-enabling-oracles"},"design document"),"."),(0,r.kt)("h2",{id:"datum-structure"},"Datum structure"),(0,r.kt)("p",null,"All fact statements are structured as ",(0,r.kt)("a",{parentName:"p",href:"https://json-ld.org/"},"JSON-LD")," objects\nbefore they are serialized into the Concise Binary Object Representation\n(",(0,r.kt)("a",{parentName:"p",href:"https://cbor.io/"},"CBOR"),") that is used in Cardano transactions."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fact Statement",src:a(1570).Z,width:"3232",height:"1237"})),(0,r.kt)("h3",{id:"orcfax-json-ld-schema"},"Orcfax JSON-LD schema"),(0,r.kt)("p",null,"Orcfax's V1 datum is translated to on-chain CBOR from the following JSON schema\n(example given is from Sep 28, 2023):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://schema.org",\n  "type": "PropertyValue",\n  "name": "ADA-USD|USD-ADA",\n  "value": [\n    0.249495,\n    4.008096354636367\n  ],\n  "valueReference": [\n    {\n      "@type": "PropertyValue",\n      "name": "validFrom",\n      "value": 1695939870811\n    },\n    {\n      "@type": "PropertyValue",\n      "name": "validThrough",\n      "value": 1695943470811\n    }\n  ],\n  "identifier": {\n    "propertyID": "Arkly Identifier",\n    "type": "PropertyValue",\n    "value": "urn:orcfax:4ae10640-10b9-4c23-af1d-c4a9dbd8938d"\n  },\n  "_:contentSignature": "40330ff2597c399ddaaab6c1dbaab52173ef82bf7f08d3ca84585ab5e76429a0"\n}\n')),(0,r.kt)("h2",{id:"read-cbor-datum-on-chain"},"Read CBOR datum on-chain"),(0,r.kt)("p",null,"Orcfax fact statement datum are readable on-chain as Cardano\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/perturbing/vasil-tests/blob/main/reference-inputs-cip-31.md"},"Reference Inputs"),"."),(0,r.kt)("p",null,"To read our ",(0,r.kt)("inlineCode",{parentName:"p"},"ADA-USD|USD-ADA")," Mainnet feed, check the latest transaction\nissued by the ",(0,r.kt)("a",{parentName:"p",href:"https://cexplorer.io/address/addr1w8tcecfy7np3sduzn99ffuv8qx2sa8v977l0xql8ca7lgkgq7lqh2/tx#data"},"feed smart contract"),"."),(0,r.kt)("h2",{id:"read-cbor-datum-off-chain"},"Read CBOR datum off-chain"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pycardano.readthedocs.io/"},"PyCardano")," SDK provides convenient\nhelper functions for converting on-chain CBOR."),(0,r.kt)("p",null,"We created an open-source PyCardano\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orcfax/datum-demo/tree/main#readme"},"demo script")," to read and\nparse on-chain Orcfax datum."),(0,r.kt)("p",null,"This script converts the Cardano transaction's CBOR serialization to human and\nmachine-readable JSON and then logs various details about the Datum as it goes."),(0,r.kt)("p",null,"It's very easy to customize the configuration options of this script to match\nthe requirements of your own dApp."),(0,r.kt)("p",null,"This resource has been made freely available under an open-source Apache\nv2.0 license so that you can test, integrate, and extend your own solutions\nusing the world's most ",(0,r.kt)("a",{parentName:"p",href:"verify"},"trustworthy/trustless")," authenticated fact\nstatement feeds, provided on the world's most decentralized and\n",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/coinmonks/why-cardano-in-2023-b481846028bc"},"stable L1 blockchain"),"\nnetwork."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"demo script output:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'2023-09-28T16:24:13Z INFO :: read_datum.py:264:read_datum() :: entering this script...\n2023-09-28T16:24:13Z INFO :: read_datum.py:265:read_datum() :: oracle smart contract: addr_test1wrtcecfy7np3sduzn99ffuv8qx2sa8v977l0xql8ca7lgkgmktuc0\n2023-09-28T16:24:15Z INFO :: read_datum.py:226:get_latest_utxo() :: inspecting \'862\' UTxOs\n2023-09-28T16:24:15Z WARNING :: read_datum.py:254:get_latest_utxo() :: \'7.00\' hours since datum was published (1695943470811)\n2023-09-28T16:24:15Z INFO :: read_datum.py:191:validate_utxo() :: inspecting the utxo for valid auth tokens\n2023-09-28T16:24:15Z INFO :: read_datum.py:217:validate_utxo() :: the utxo is valid, it contains the correct auth token\n2023-09-28T16:24:15Z INFO :: read_datum.py:79:display_utxo() :: (input) transaction id: 078d548b0ed91b95164d0baaf2b486161e06aab84483d99ed01a2180090ab0f3\n2023-09-28T16:24:15Z INFO :: read_datum.py:80:display_utxo() :: (output) transaction addr: addr_test1wrtcecfy7np3sduzn99ffuv8qx2sa8v977l0xql8ca7lgkgmktuc0\n2023-09-28T16:24:15Z INFO :: read_datum.py:81:display_utxo() :: (output) datum cbor:\n\n590207d8799fa74840636f6e746578745268747470733a2f2f736368656d612e6f7267525f3a636f6e74656e745369676e61747572655840343033333066663235393763333939646461616162366331646261616235323137336566383262663766303864336361383435383561623565373634323961304a6964656e746966696572a34a70726f706572747949445041726b6c79204964656e74696669657244747970654d50726f706572747956616c75654576616c7565582f75726e3a6f72636661783a34616531303634302d313062392d346332332d616631642d633461396462643839333864446e616d654f4144412d5553447c5553442d41444144747970654d50726f706572747956616c75654576616c75659fd87c9f1a0003ce971bfffffffffffffffaffd87c9f1b000e3d57a771924e1bfffffffffffffff1ffff4e76616c75655265666572656e63659fa34540747970654d50726f706572747956616c7565446e616d654976616c696446726f6d4576616c75651b0000018adde4c05ba34540747970654d50726f706572747956616c7565446e616d654c76616c69645468726f7567684576616c75651b0000018ade1baedbff5820303443413030303148424559394b4b34343950314345513850483744544a5954d87a9f1b0000018ade1baedbff581c90b121aa6b689200adf7ed115040a96375d2b68e23633d6864c53a91ff\n\n2023-09-28T16:24:15Z INFO :: read_datum.py:84:display_utxo() :: (output) Tx cost: 3.42214 ADA\n2023-09-28T16:24:15Z INFO :: read_datum.py:151:decode_utxo() ::\n\n{\n  "@context": "https://schema.org",\n  "type": "PropertyValue",\n  "name": "ADA-USD|USD-ADA",\n  "value": [\n    0.249495,\n    4.008096354636367\n  ],\n  "valueReference": [\n    {\n      "@type": "PropertyValue",\n      "name": "validFrom",\n      "value": 1695939870811\n    },\n    {\n      "@type": "PropertyValue",\n      "name": "validThrough",\n      "value": 1695943470811\n    }\n  ],\n  "identifier": {\n    "propertyID": "Arkly Identifier",\n    "type": "PropertyValue",\n    "value": "urn:orcfax:4ae10640-10b9-4c23-af1d-c4a9dbd8938d"\n  },\n  "_:contentSignature": "40330ff2597c399ddaaab6c1dbaab52173ef82bf7f08d3ca84585ab5e76429a0"\n}\n\n2023-09-28T16:24:15Z INFO :: read_datum.py:152:decode_utxo() :: oracle datum identifier (internal): b\'04CA0001HBEY9KK449P1CEQ8PH7DTJYT\'\n2023-09-28T16:24:15Z INFO :: read_datum.py:157:decode_utxo() :: oracle datum timestamp: 2023-09-28T23:24:30Z (1695943470811)\n2023-09-28T16:24:15Z INFO :: read_datum.py:170:pretty_log_value() :: ADA-USD: 0.249495\n2023-09-28T16:24:15Z INFO :: read_datum.py:170:pretty_log_value() :: USD-ADA: 4.008096354636367\n')))}p.isMDXComponent=!0},1570:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-30--Orcfax--fact-statement-0ff642e16e956a03a7829c3106892607.jpg"}}]);