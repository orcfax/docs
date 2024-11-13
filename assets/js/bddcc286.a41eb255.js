"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3839],{5144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"developer-manual/consume","title":"Consuming Orcfax Statements","description":"This document aims to explain how dApp developers (i.e. integrators) can","source":"@site/docs/developer-manual/consume.md","sourceDirName":"developer-manual","slug":"/consume","permalink":"/consume","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"consume","sidebar_position":1,"slug":"/consume"},"sidebar":"tutorialSidebar","previous":{"title":"Validation","permalink":"/dex-validation"},"next":{"title":"Verify fact statements","permalink":"/verify"}}');var i=n(4848),a=n(8453);const r={id:"consume",sidebar_position:1,slug:"/consume"},d="Consuming Orcfax Statements",l={},c=[{value:"Overview",id:"overview",level:2},{value:"Orcfax",id:"orcfax",level:3},{value:"Orcfax-publish",id:"orcfax-publish",level:3},{value:"Examples",id:"examples",level:2},{value:"Details",id:"details",level:2},{value:"Steps",id:"steps",level:3},{value:"Verify FSP UTXO",id:"verify-fsp-utxo",level:3},{value:"Extract FS script hash",id:"extract-fs-script-hash",level:3},{value:"Verify FS UTXOs",id:"verify-fs-utxos",level:3},{value:"Coercing FS data",id:"coercing-fs-data",level:3},{value:"Verifying the feed ID",id:"verifying-the-feed-id",level:3},{value:"Verifying the created at",id:"verifying-the-created-at",level:3},{value:"Coercing the body",id:"coercing-the-body",level:3},{value:"Notes",id:"notes",level:2},{value:"Example datum",id:"example-datum",level:2},{value:"Deployments",id:"deployments",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"consuming-orcfax-statements",children:"Consuming Orcfax Statements"})}),"\n",(0,i.jsx)(t.p,{children:"This document aims to explain how dApp developers (i.e. integrators) can\nintegrate Orcfax feeds into their dApp with all the technical details included."}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.h3,{id:"orcfax",children:"Orcfax"}),"\n",(0,i.jsx)(t.p,{children:"Orcfax is a Cardano native oracle platform."}),"\n",(0,i.jsx)(t.p,{children:"Orcfax is organized into feeds. Generally a feed concerns time series data, such\nas the exchange rate from ADA to USD. A feed is a data pipeline that specifies\nhow data is sourced, processed, and the format of its outputs."}),"\n",(0,i.jsxs)(t.p,{children:["One part of the overall protocol is getting the data on-chain to be consumable\nby dApps and their end users. The part of a feed's output that ends up on-chain\nis called a ",(0,i.jsx)(t.strong,{children:"statement"}),". A statement is included in the datum of a transaction\ninput, and thus available to dApps via the reference input field."]}),"\n",(0,i.jsx)(t.h3,{id:"orcfax-publish",children:"Orcfax-publish"}),"\n",(0,i.jsxs)(t.p,{children:["The part of the overall protocol getting the data on-chain is called\n",(0,i.jsx)(t.strong,{children:"Orcfax-publish"}),". Orcfax-publish consists of three Plutus V2 scripts:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"FactStatement (FS)"}),"\n",(0,i.jsx)(t.li,{children:"FactStatementPointer (FSP)"}),"\n",(0,i.jsx)(t.li,{children:"Constitution (C)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The FS script is the main script. It can be employed in both Mint and Spend\npurposes. It can mint only a single asset class we call FS token. An FS token\ncan only exist at the FS script address (staking credentials are irrelevant\nhere)."}),"\n",(0,i.jsx)(t.p,{children:"The presence of an FS token in a UTXO verifies that the associated statement is\nauthentic."}),"\n",(0,i.jsx)(t.p,{children:"Both the FSP and C scripts are simple updatable state scripts. That is, they\nallow a UTXO at the script address to hold a validity token and a piece of state\n(in the datum). When required, a twinned auth token is used to spend this UTXO\nand output another with the same validity token and a new state."}),"\n",(0,i.jsx)(t.p,{children:"In the case of the FSP, the state is simply the FS script hash. Orcfax reserves\nthe ability to update the FS script should business or developmental needs\nrequire (e.g. in order to migrate to Plutus V3), and the FS script allows Orcfax\nto do this without impacting integrators. By first finding the FSP in the\nreference inputs of a script context, a validator can recognize the correct FS\nscript hash."}),"\n",(0,i.jsx)(t.p,{children:"The C script represents the Constitution. It holds the current valid pubkey that\nis permitted to sign statements. The FS script checks that every statement\npublished has a valid signature with respect to this pubkey. The Constitution is\nnot utilized by integrators, and plays no further part in this document."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/orcfax/orcfax-examples",children:"Orcfax-examples"})," contains simple demo dApps that illustrate\nhow to integrate Orcfax oracle feeds. It also contains helpers for creating your\nown mock Orcfax-publish to facilitate testing."]}),"\n",(0,i.jsx)(t.h2,{id:"details",children:"Details"}),"\n",(0,i.jsx)(t.h3,{id:"steps",children:"Steps"}),"\n",(0,i.jsx)(t.p,{children:"To integrate an orcfax statement safely in a plutus script, the script must\nperform the following steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Verify FSP UTXO from reference inputs. Extract FS script hash from inline\ndatum."}),"\n",(0,i.jsx)(t.li,{children:"Verify FS UTXO. Extract the inline datum and parse as a bytearray. The value\nis the FS script hash, which determines the FS token."}),"\n",(0,i.jsx)(t.li,{children:"From reference inputs, find the input(s) containing an FS token. These are\nthe FS inputs."}),"\n",(0,i.jsxs)(t.li,{children:["For each FS input, extract the inline datum and parse. The datum will be of\ntype ",(0,i.jsx)(t.code,{children:"FsDat<t>"})," (described below)."]}),"\n",(0,i.jsx)(t.li,{children:"Extract the statement from the datum."}),"\n",(0,i.jsxs)(t.li,{children:["Verify that the statement's ",(0,i.jsx)(t.code,{children:"feed_id"})," is the one required for the\nintegration."]}),"\n",(0,i.jsxs)(t.li,{children:["Verify that the statement's ",(0,i.jsx)(t.code,{children:"created_at"})," timestamp is within the timeframe\nestablished by your specific business rules."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"verify-fsp-utxo",children:"Verify FSP UTXO"}),"\n",(0,i.jsx)(t.p,{children:"The FSP script hash must first be ascertained from a given deployment (Example\ndeployments listed below). This will provide the policy ID part of an FSP asset\nclass."}),"\n",(0,i.jsx)(t.p,{children:"The FSP UTXO will contain the FSP script token. The FSP script token has the\nfollowing token name (expressed in base 16/ hex):"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-aiken",children:'fsp_script=#"000de140"\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This is derived from ",(0,i.jsx)(t.code,{children:"cip-67"})," script NFT label."]}),"\n",(0,i.jsx)(t.h3,{id:"extract-fs-script-hash",children:"Extract FS script hash"}),"\n",(0,i.jsx)(t.p,{children:"All datums are inlined, including that of the FSP state. The FSP datum is\nsimply:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-aiken",children:"pub type FspDat = ByteArray\n"})}),"\n",(0,i.jsx)(t.p,{children:"The value is the FS script hash. When Orcfax upgrades the Orcfax-publish\nprotocol, the value of the datum will be updated to reflect the new FS script,\nwhile the FSP script will remain the same."}),"\n",(0,i.jsx)(t.h3,{id:"verify-fs-utxos",children:"Verify FS UTXOs"}),"\n",(0,i.jsx)(t.p,{children:"An FS UTXO must contain an FS token. The FS token is the only asset class of the\nFS script, and has token name of the empty bytearray."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Note: Integrators must verify an FS UTXO via an FS token. Anyone can put a\nUTXO at the FS script address with any data they like."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"coercing-fs-data",children:"Coercing FS data"}),"\n",(0,i.jsx)(t.p,{children:"An FS UTXO will have an inlined datum. The datum datatype is a parameterized\ndatatype and is expressed in aiken lang as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-aiken",children:"pub type Datum<t> {\n  statement : Statement<t>,\n  context : Context\n}\n\n/// Used by consumers\npub type Statement<t> {\n  feed_id : ByteArray,\n  created_at : Int,\n  body : t,\n}\n\n/// Used by orcfax validator\npub type Context {\n  collect_after : Int, // Slot number\n  collector : ByteArray, // Pkh\n}\n"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Note: only the statement part of the datum is relevant to integrators. The\n",(0,i.jsx)(t.code,{children:"Context"})," part can be treated simply as ",(0,i.jsx)(t.code,{children:"Data"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"verifying-the-feed-id",children:"Verifying the feed ID"}),"\n",(0,i.jsx)(t.p,{children:"Integrators must verify the feed ID is as expected."}),"\n",(0,i.jsx)(t.p,{children:"Integrators should establish the expected feed ID from Orcfax documentation on\nthe feed definition. The feed ID is a human readable label and decomposes as:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sample",children:"<feed_type>/<feed_name>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Warning: Orcfax reserves the possibility to use a ",(0,i.jsx)(t.code,{children:"versioned_feed_id"})," as the\nvalue in the statement. A versioned feed ID has the following form:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sample",children:"<feed_type>/<feed_name>/<feed_version>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["For this reason integrators must check that the ",(0,i.jsx)(t.code,{children:"feed_id"})," value begins with the\nexpected bytes, rather than assume that there is equality."]}),"\n",(0,i.jsx)(t.h3,{id:"verifying-the-created-at",children:"Verifying the created at"}),"\n",(0,i.jsxs)(t.p,{children:["Generally a dApp will require the ability to ascertain ",(0,i.jsx)(t.strong,{children:"when"})," a statement was\ndeemed true. For example, that the statement represents the ADA-USD exchange\nrate in the last hour, not simply at some previous point in time."]}),"\n",(0,i.jsx)(t.p,{children:'The "right" way to handle time is down to the business logic and the\nintegrator\'s needs.'}),"\n",(0,i.jsx)(t.p,{children:"One way integrators might choose to do this is as follows:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Verify that the validity range of the transaction is 'short' (say ~1h)."}),"\n",(0,i.jsxs)(t.li,{children:["Check that the value of ",(0,i.jsx)(t.code,{children:"created_at"})," falls within the bounds of this validity\nrange."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"coercing-the-body",children:"Coercing the body"}),"\n",(0,i.jsx)(t.p,{children:"For feeds of type current exchange rate (CER), the body is:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-aiken",children:"pub type Rational {\n  num: Int,\n  denom: Int,\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.p,{children:"In the case that an integrator is expecting only one type of body within\nstatements, we can simplify the types. For example, for CER feeds the types\nbecome:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-aiken",children:"type RationalStatement {\n  feed_id : ByteArray,\n  created_at: Int,\n  body : Rational,\n}\n\ntype RationalDatum {\n  statement : RationalStatement,\n  _context : Data\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"example-datum",children:"Example datum"}),"\n",(0,i.jsx)(t.p,{children:"Some example hex encoded CBOR:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sample",children:"D87982D879834E4345522F464143542D4144412F331B0000019012C8CCD3D879821981951A000F4\n240D879821B0000019012C90F89581C694F647F6C6FEE725EAF731938613059AC560E573D9FA656\n0850EAB0\n"})}),"\n",(0,i.jsx)(t.p,{children:"Which can be deserialized as:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cbor",children:"121([\n  121([\n    \"CER/FACT-ADA/3\",\n    1718302067923,\n    121([\n      33173,\n      1000000\n    ])\n    ]),\n  121([\n    1718302085001,\n    h'694F647F6C6FEE725EAF731938613059AC560E573D9FA6560850EAB0'\n  ])\n])\n"})}),"\n",(0,i.jsx)(t.h2,{id:"deployments",children:"Deployments"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Network"}),(0,i.jsx)(t.th,{children:"Link"}),(0,i.jsx)(t.th,{children:"FSP hash"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"preview"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://preview.cexplorer.io/script/0690081bc113f74e04640ea78a87d88abbd2f18831c44c4064524230",children:"cexplorer.io"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"0690081bc113f74e04640ea78a87d88abbd2f18831c44c4064524230"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"preprod"}),(0,i.jsx)(t.td,{children:"n/a"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"mainnet"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://cexplorer.io/policy/8793893b5dda6a513ba63c80e9d7b2d4f108060c11979bfc7d863ff0",children:"cexplorer.io"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"8793893b5dda6a513ba63c80e9d7b2d4f108060c11979bfc7d863ff0"})})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(6540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);