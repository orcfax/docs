"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[1071],{6841:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>d,metadata:()=>g,toc:()=>m});var n=a(8168),r=(a(6540),a(5680)),i=a(1321);const l='{\n    "@context": "https://schema.org",\n    "type": "MediaObject",\n    "identifier": "urn:orcfax:24912186-c418-4041-9abf-1193db67b9a4",\n    "isBasedOn": {\n      "@type": "MediaObject",\n      "name": "the raw information sent to an Orcfax validator by an Orcfax node",\n      "identifier": "urn:orcfax:node:95f1c11b-165a-4c4a-a798-933f4010f34a"\n    },\n    "contributor": {\n      "@type": "Organization",\n      "name": "AS14061 DigitalOcean, LLC",\n      "locationCreated": {\n        "address": {\n          "@type": "PostalAddress",\n          "addressLocality": "Frankfurt am Main",\n          "addressRegion": "Hesse, DE,",\n          "geo": "50.1155,8.6842"\n        }\n      }\n    },\n    "additionalType": [\n      {\n        "@type": "Event",\n        "description": "successful content signature generation for Orcfax node data",\n        "startDate": "2024-08-28T16:20:14Z",\n        "recordedIn": {\n          "@type": "CreativeWork",\n          "description": {\n            "@type": "TextObject",\n            "comment": "an Orcfax content signature is a sha256 digest of a node\'s \'collected timestamp\', \'data-points\' in-order and the \'node identifier\' (uuid)",\n            "sha256": "19216554ba0c96266a11f2f049a2e7c8b2cf5c1435c47bce312f388e9259ae1f"\n          },\n          "hasPart": [\n            {\n              "@type": "CreativeWork",\n              "description": "collecting timestamp",\n              "text": "2024-08-28T16:19:06Z"\n            },\n            {\n              "@type": "CreativeWork",\n              "description": "data points for FACT-ADA",\n              "text": [\n                "[52742.220237, 38948471.832748, 13053671.722435, 10117734.147397, 85270.852632, 34999.655139]",\n                "[1371.059303, 1017216.660158, 344514.409081, 266936.098543, 2153.032776, 937.961447]"\n              ]\n            },\n            {\n              "@type": "CreativeWork",\n              "description": "node identifier (uuid)",\n              "text": "95f1c11b-165a-4c4a-a798-933f4010f34a"\n            }\n          ]\n        }\n      },\n      {\n        "@type": "Event",\n        "description": "average price is determined by dividing total volume of ADA by total volume of FACT",\n        "startDate": "2024-08-28T16:20:14Z",\n        "about": {\n          "@type": "Observation",\n          "measurementMethod": [\n            "volume/liquidity average sum(valueReference[1]) (ADA) divided by sum(valueReference[0]) (FACT)"\n          ],\n          "value": 0.026216944,\n          "valueReference": [\n            "[52742.220237, 38948471.832748, 13053671.722435, 10117734.147397, 85270.852632, 34999.655139]",\n            "[1371.059303, 1017216.660158, 344514.409081, 266936.098543, 2153.032776, 937.961447]"\n          ]\n        }\n      }\n    ]\n  }\n',d={id:"dex-4",sidebar_position:4,slug:"/dex-validation"},o="Validation",g={unversionedId:"Feeds/CER/DEX/dex-4",id:"Feeds/CER/DEX/dex-4",title:"Validation",description:"A place for Orcfax to describe the types/properties relevant to a",source:"@site/docs/Feeds/CER/DEX/validation.md",sourceDirName:"Feeds/CER/DEX",slug:"/dex-validation",permalink:"/dex-validation",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"dex-4",sidebar_position:4,slug:"/dex-validation"},sidebar:"tutorialSidebar",previous:{title:"Message",permalink:"/dex-message"},next:{title:"Incentivized Testnet overview",permalink:"/overview"}},p={},m=[{value:"Schema.org Types",id:"schemaorg-types",level:2},{value:"Schema.org Properties",id:"schemaorg-properties",level:2},{value:"Validation example",id:"validation-example",level:2}],s={toc:m},y="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"validation"},"Validation"),(0,r.yg)("p",null,"A place for Orcfax to describe the types/properties relevant to a\n",(0,r.yg)("inlineCode",{parentName:"p"},"validation.json"),"."),(0,r.yg)("p",null,"Orcfax utilizes the following Schema.org types and properties in its Validation\nrecords. The description provided by ",(0,r.yg)("a",{parentName:"p",href:"https://schema.org/"},"Schema.org"),"\nfollows each; if Orcfax maintains a more nuanced understanding, an additional\ndefinition will be provided. If the term appears in its own definition, it will\nbe replaced when possible with a ","[","synonym","]"," in order to aid understanding."),(0,r.yg)("h2",{id:"schemaorg-types"},"Schema.org Types"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Schema.org description"),(0,r.yg)("th",{parentName:"tr",align:null},"Orcfax description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/CreativeWork"},(0,r.yg)("inlineCode",{parentName:"a"},"CreativeWork"))),(0,r.yg)("td",{parentName:"tr",align:null},"The most generic kind of creative work, including books, movies, photographs, software programs, etc."),(0,r.yg)("td",{parentName:"tr",align:null},"A generic term to encompass a broad spectrum of creative works, including text, images, software programs, their outputs, etc.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/Event"},(0,r.yg)("inlineCode",{parentName:"a"},"Event"))),(0,r.yg)("td",{parentName:"tr",align:null},"An ","[","entity","]"," such as a school, NGO, corporation, club, etc."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/MediaObject"},(0,r.yg)("inlineCode",{parentName:"a"},"MediaObject"))),(0,r.yg)("td",{parentName:"tr",align:null},"An object such as an image, video, audio, or text object embedded in a web page or a downloadable dataset."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/Observation"},(0,r.yg)("inlineCode",{parentName:"a"},"Observation"))),(0,r.yg)("td",{parentName:"tr",align:null},"Used to specify observations about an entity at a particular time"),(0,r.yg)("td",{parentName:"tr",align:null},"Information pertaining to a subject resulting from monitoring.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/Organization"},(0,r.yg)("inlineCode",{parentName:"a"},"Organization"))),(0,r.yg)("td",{parentName:"tr",align:null},"An ","[","entity","]"," such as a school, NGO, corporation, club, etc."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/PostalAddress"},(0,r.yg)("inlineCode",{parentName:"a"},"PostalAddress"))),(0,r.yg)("td",{parentName:"tr",align:null},"The price asked for a given offer by the respective organization or person."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/TextObject"},(0,r.yg)("inlineCode",{parentName:"a"},"TextObject"))),(0,r.yg)("td",{parentName:"tr",align:null},"A text file. The text can be unformatted or contain markup, html, etc."),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"schemaorg-properties"},"Schema.org Properties"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Schema.org description"),(0,r.yg)("th",{parentName:"tr",align:null},"Orcfax definition"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/about"},(0,r.yg)("inlineCode",{parentName:"a"},"about"))),(0,r.yg)("td",{parentName:"tr",align:null},"Event"),(0,r.yg)("td",{parentName:"tr",align:null},"The subject matter of the content."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/additionalType"},(0,r.yg)("inlineCode",{parentName:"a"},"additionalType"))),(0,r.yg)("td",{parentName:"tr",align:null},"MediaObject"),(0,r.yg)("td",{parentName:"tr",align:null},"Used to add more specific types from external vocabularies when a schema.org equivalent is not available."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/address"},(0,r.yg)("inlineCode",{parentName:"a"},"address"))),(0,r.yg)("td",{parentName:"tr",align:null},"Organization"),(0,r.yg)("td",{parentName:"tr",align:null},"Physical address of the item."),(0,r.yg)("td",{parentName:"tr",align:null},"The physical address of the entity which has executed the validation process.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/addressLocality"},(0,r.yg)("inlineCode",{parentName:"a"},"addressLocality"))),(0,r.yg)("td",{parentName:"tr",align:null},"PostalAddress"),(0,r.yg)("td",{parentName:"tr",align:null},"The locality in which the street address is, and which is in the region."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/addressRegion"},(0,r.yg)("inlineCode",{parentName:"a"},"addressRegion"))),(0,r.yg)("td",{parentName:"tr",align:null},"PostalAddress"),(0,r.yg)("td",{parentName:"tr",align:null},"The region in which the locality is, and which is in the country."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/comment"},(0,r.yg)("inlineCode",{parentName:"a"},"comment"))),(0,r.yg)("td",{parentName:"tr",align:null},"TextObject"),(0,r.yg)("td",{parentName:"tr",align:null},"Comments, typically from users."),(0,r.yg)("td",{parentName:"tr",align:null},"Used to give users additional context regarding the record.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/contribution"},(0,r.yg)("inlineCode",{parentName:"a"},"contributor"))),(0,r.yg)("td",{parentName:"tr",align:null},"MediaObject"),(0,r.yg)("td",{parentName:"tr",align:null},"A secondary contributor to the ",(0,r.yg)("inlineCode",{parentName:"td"},"CreativeWork")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"Event"),"."),(0,r.yg)("td",{parentName:"tr",align:null},"The entity which has executed the validation process.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/description"},(0,r.yg)("inlineCode",{parentName:"a"},"description"))),(0,r.yg)("td",{parentName:"tr",align:null},"CreativeWork, Event"),(0,r.yg)("td",{parentName:"tr",align:null},"A description of the item."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/geo"},(0,r.yg)("inlineCode",{parentName:"a"},"geo"))),(0,r.yg)("td",{parentName:"tr",align:null},"PostalAddress"),(0,r.yg)("td",{parentName:"tr",align:null},"The geo coordinates of the place."),(0,r.yg)("td",{parentName:"tr",align:null},"The geographical coordinates of the place where the validation process was executed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/hasPart"},(0,r.yg)("inlineCode",{parentName:"a"},"hasPart"))),(0,r.yg)("td",{parentName:"tr",align:null},"CreativeWork"),(0,r.yg)("td",{parentName:"tr",align:null},"Indicates an item or ",(0,r.yg)("inlineCode",{parentName:"td"},"CreativeWork")," that is part of this item, or CreativeWork."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/identifier"},(0,r.yg)("inlineCode",{parentName:"a"},"identifier"))),(0,r.yg)("td",{parentName:"tr",align:null},"MediaObject"),(0,r.yg)("td",{parentName:"tr",align:null},"Used to represent any kind of identifier for any kind of Thing, such as ISBNs, GTIN codes, UUIDs etc."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/isBasedOn"},(0,r.yg)("inlineCode",{parentName:"a"},"isBasedOn"))),(0,r.yg)("td",{parentName:"tr",align:null},"MediaObject"),(0,r.yg)("td",{parentName:"tr",align:null},"A resource from which this work is derived or from which it is a modification or adaptation."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/locationCreated"},(0,r.yg)("inlineCode",{parentName:"a"},"locationCreated"))),(0,r.yg)("td",{parentName:"tr",align:null},"Organization"),(0,r.yg)("td",{parentName:"tr",align:null},"The location where the ",(0,r.yg)("inlineCode",{parentName:"td"},"CreativeWork")," was created."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/measurementMethod"},(0,r.yg)("inlineCode",{parentName:"a"},"measurementMethod"))),(0,r.yg)("td",{parentName:"tr",align:null},"Observation"),(0,r.yg)("td",{parentName:"tr",align:null},"A subproperty of ",(0,r.yg)("inlineCode",{parentName:"td"},"measurementTechnique")," that can be used for specifying specific methods."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/name"},(0,r.yg)("inlineCode",{parentName:"a"},"name"))),(0,r.yg)("td",{parentName:"tr",align:null},"MediaObject, Organization"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the item."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/recordedIn"},(0,r.yg)("inlineCode",{parentName:"a"},"recordedIn"))),(0,r.yg)("td",{parentName:"tr",align:null},"Event"),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("inlineCode",{parentName:"td"},"CreativeWork")," that captured all or part of this ",(0,r.yg)("inlineCode",{parentName:"td"},"Event"),"."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/sha256"},(0,r.yg)("inlineCode",{parentName:"a"},"sha256"))),(0,r.yg)("td",{parentName:"tr",align:null},"TextObject"),(0,r.yg)("td",{parentName:"tr",align:null},"The SHA-2 SHA256 hash of the content of the item"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/startDate"},(0,r.yg)("inlineCode",{parentName:"a"},"startDate"))),(0,r.yg)("td",{parentName:"tr",align:null},"Event"),(0,r.yg)("td",{parentName:"tr",align:null},"The start date and time of the item."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/text"},(0,r.yg)("inlineCode",{parentName:"a"},"text"))),(0,r.yg)("td",{parentName:"tr",align:null},"CreativeWork"),(0,r.yg)("td",{parentName:"tr",align:null},"The textual content of this ",(0,r.yg)("inlineCode",{parentName:"td"},"CreativeWork"),"."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/value"},(0,r.yg)("inlineCode",{parentName:"a"},"value"))),(0,r.yg)("td",{parentName:"tr",align:null},"Observation"),(0,r.yg)("td",{parentName:"tr",align:null},"The value of a ",(0,r.yg)("inlineCode",{parentName:"td"},"QuantitativeValue")," (including ",(0,r.yg)("inlineCode",{parentName:"td"},"Observation"),") or property value."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://schema.org/valueReference"},(0,r.yg)("inlineCode",{parentName:"a"},"valueReference"))),(0,r.yg)("td",{parentName:"tr",align:null},"Observation"),(0,r.yg)("td",{parentName:"tr",align:null},"A secondary value that provides additional information on the original ",(0,r.yg)("inlineCode",{parentName:"td"},"value"),"."),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"validation-example"},"Validation example"),(0,r.yg)(i.A,{language:"jsx",mdxType:"CodeBlock"},l),(0,r.yg)("a",{target:"_blank",href:"/schema/der/cex/validation.json",download:"validation.json"},"Download"))}c.isMDXComponent=!0}}]);