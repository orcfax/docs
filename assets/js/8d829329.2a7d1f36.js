"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[3414],{474:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>d,default:()=>c,frontMatter:()=>g,metadata:()=>s,toc:()=>o});var n=t(8168),i=(t(6540),t(5680)),r=t(1321);const l='{\n    "@context": "https://schema.org",\n    "type": "Message",\n    "name": "ADA-USD",\n    "isBasedOn": {\n      "@type": "MediaObject",\n      "name": "Exchange data",\n      "additionalType": "Central Exchange Data",\n      "description": "the raw information received by an Orcfax collector from a central exchange (CEX) API"\n    },\n    "sender": "https://api.pro.coinbase.com/products/ADA-USD/ticker",\n    "recipient": "coinbase.tick_generic_jq.0.4.0-rc.4.b637b854f875a71de2ce18a57a8e576cff1d468e",\n    "identifier": "urn:orcfax:e4e54362-4c14-49f6-9d80-08617d81243e",\n    "dateReceived": "2024-08-28T16:20:20Z",\n    "messageAttachment": {\n      "encoding": "application/json;base64",\n      "text": "eyJyZXF1ZXN0X3VybCI6ICJodHRwczovL2FwaS5wcm8uY29pbmJhc2UuY29tL3Byb2R1Y3RzL0FEQS1VU0QvdGlja2VyIiwgInJlc3BvbnNlIjogeyJib2R5IjogeyJhc2siOiAiMC4zNDIyIiwgImJpZCI6ICIwLjM0MjEiLCAicHJpY2UiOiAiMC4zNDIzIiwgInJmcV92b2x1bWUiOiAiMTQ3MDcyNS4zMzYwNTAiLCAic2l6ZSI6ICI3Ny4yOTU2NjA4OCIsICJ0aW1lIjogIjIwMjQtMDgtMjhUMTY6MjA6MjAuNjQ4MTg2WiIsICJ0cmFkZV9pZCI6IDExMDM4MzE5NSwgInZvbHVtZSI6ICIyNDE0ODA1Ni42OTI2OTkzMyJ9LCAiaGVhZGVycyI6IHsiQWNjZXB0LVJhbmdlcyI6IFsiYnl0ZXMiXSwgIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMiOiBbIkNvbnRlbnQtVHlwZSwgQWNjZXB0LCBjYi1zZXNzaW9uLCBjYi1mcCwgY2ItZm9ybS1mYWN0b3IiXSwgIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMiOiBbIkdFVCxQT1NULERFTEVURSxQVVQiXSwgIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbiI6IFsiKiJdLCAiQWNjZXNzLUNvbnRyb2wtRXhwb3NlLUhlYWRlcnMiOiBbImNiLWJlZm9yZSwgY2ItYWZ0ZXIsIGNiLWdkcHIiXSwgIkFjY2Vzcy1Db250cm9sLU1heC1BZ2UiOiBbIjcyMDAiXSwgIkNhY2hlLUNvbnRyb2wiOiBbInB1YmxpYywgbWF4LWFnZT0xLCBtdXN0LXJldmFsaWRhdGUiXSwgIkNmLUNhY2hlLVN0YXR1cyI6IFsiSElUIl0sICJDZi1SYXkiOiBbIjhiYTVhMGVmYWQ2YjYzZTktTEhSIl0sICJDb250ZW50LVR5cGUiOiBbImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgiXSwgIkRhdGUiOiBbIldlZCwgMjggQXVnIDIwMjQgMTY6MjA6MjYgR01UIl0sICJFdGFnIjogWyJXL1wiYTEtNGtPdHdKc0VPY29DMGViKzRtV3B4dys0bnBvXCIiXSwgIlNlcnZlciI6IFsiY2xvdWRmbGFyZSJdLCAiU2V0LUNvb2tpZSI6IFsiX19jZl9ibT1aeklRV185bWhjWjFyaE1JWG9lcXBvMF8zd1lqcXRHT205ZVFjZ1ROT2F3LTE3MjQ4NjIwMjYtMS4wLjEuMS1CeDJjTFBQQVllYWtsOS5VT3NldndGRGZDd3JNbE1LMXZmVkE0aVJvNTFMRDdBRmZtSUNPSzJ2NEZqWS5VQThOT3dHRHdXZm5RbktXemgwSTltdk9zQTsgcGF0aD0vOyBleHBpcmVzPVdlZCwgMjgtQXVnLTI0IDE2OjUwOjI2IEdNVDsgZG9tYWluPS5wcm8uY29pbmJhc2UuY29tOyBIdHRwT25seTsgU2VjdXJlOyBTYW1lU2l0ZT1Ob25lIl0sICJTdHJpY3QtVHJhbnNwb3J0LVNlY3VyaXR5IjogWyJtYXgtYWdlPTE1NTUyMDAwOyBpbmNsdWRlU3ViRG9tYWlucyJdLCAiVmFyeSI6IFsiQWNjZXB0LUVuY29kaW5nIl0sICJYLUNvbnRlbnQtVHlwZS1PcHRpb25zIjogWyJub3NuaWZmIl0sICJYLURucy1QcmVmZXRjaC1Db250cm9sIjogWyJvZmYiXSwgIlgtRG93bmxvYWQtT3B0aW9ucyI6IFsibm9vcGVuIl0sICJYLUZyYW1lLU9wdGlvbnMiOiBbIlNBTUVPUklHSU4iXSwgIlgtWHNzLVByb3RlY3Rpb24iOiBbIjE7IG1vZGU9YmxvY2siXX19fQ=="\n    }\n  }\n',g={id:"cex-3",sidebar_position:3,slug:"/cex-message"},d="Message",s={unversionedId:"Feeds/CER/CEX/cex-3",id:"Feeds/CER/CEX/cex-3",title:"Message",description:"A place for Orcfax to describe the types/properties relevant to a",source:"@site/docs/Feeds/CER/CEX/message.md",sourceDirName:"Feeds/CER/CEX",slug:"/cex-message",permalink:"/cex-message",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"cex-3",sidebar_position:3,slug:"/cex-message"},sidebar:"tutorialSidebar",previous:{title:"Fact Statement Datum",permalink:"/cex-fact-statement-datum"},next:{title:"Validation",permalink:"/cex-validation"}},m={},o=[{value:"Schema.org Types",id:"schemaorg-types",level:2},{value:"Schema.org Properties",id:"schemaorg-properties",level:2},{value:"Message example",id:"message-example",level:2}],p={toc:o},y="wrapper";function c(e){let{components:a,...t}=e;return(0,i.yg)(y,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"message"},"Message"),(0,i.yg)("p",null,"A place for Orcfax to describe the types/properties relevant to a\n",(0,i.yg)("inlineCode",{parentName:"p"},"message.json"),"."),(0,i.yg)("p",null,"Orcfax utilizes the following Schema.org types and properties in its Message\nrecords. The description provided by ",(0,i.yg)("a",{parentName:"p",href:"https://schema.org/"},"Schema.org"),"\nfollows each; if Orcfax maintains a more nuanced understanding, an additional\ndefinition will be provided. If the term appears in its own definition, it will\nbe replaced when possible with a ","[","synonym","]"," in order to aid understanding."),(0,i.yg)("h2",{id:"schemaorg-types"},"Schema.org Types"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Schema.org description"),(0,i.yg)("th",{parentName:"tr",align:null},"Orcfax description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://schema.org/MediaObject"},(0,i.yg)("inlineCode",{parentName:"a"},"MediaObject"))),(0,i.yg)("td",{parentName:"tr",align:null},"An object such as an image, video, audio, or text object embedded in a web page or a downloadable dataset."),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://schema.org/Message"},(0,i.yg)("inlineCode",{parentName:"a"},"Message"))),(0,i.yg)("td",{parentName:"tr",align:null},"A single message from a sender to one or more organizations or people."),(0,i.yg)("td",{parentName:"tr",align:null},"Information from a sender to one or more entities.")))),(0,i.yg)("h2",{id:"schemaorg-properties"},"Schema.org Properties"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Property"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Schema.org description"),(0,i.yg)("th",{parentName:"tr",align:null},"Orcfax definition"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://schema.org/additionalType"},(0,i.yg)("inlineCode",{parentName:"a"},"additionalType"))),(0,i.yg)("td",{parentName:"tr",align:null},"MediaObject"),(0,i.yg)("td",{parentName:"tr",align:null},"Used to add more specific types from external vocabularies when a schema.org equivalent is not available."),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://schema.org/dateReceived"},(0,i.yg)("inlineCode",{parentName:"a"},"dateReceived"))),(0,i.yg)("td",{parentName:"tr",align:null},"Message"),(0,i.yg)("td",{parentName:"tr",align:null},"The date/time the message was received if a single ",(0,i.yg)("inlineCode",{parentName:"td"},"recipient")," exists."),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://schema.org/description"},(0,i.yg)("inlineCode",{parentName:"a"},"description"))),(0,i.yg)("td",{parentName:"tr",align:null},"MediaObject"),(0,i.yg)("td",{parentName:"tr",align:null},"A description of the item."),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://schema.org/encoding"},(0,i.yg)("inlineCode",{parentName:"a"},"encoding"))),(0,i.yg)("td",{parentName:"tr",align:null},"Message"),(0,i.yg)("td",{parentName:"tr",align:null},"A media object that encodes this ",(0,i.yg)("inlineCode",{parentName:"td"},"CreativeWork"),"."),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://schema.org/identifier"},(0,i.yg)("inlineCode",{parentName:"a"},"identifier"))),(0,i.yg)("td",{parentName:"tr",align:null},"Message"),(0,i.yg)("td",{parentName:"tr",align:null},"Used to represent any kind of identifier for any kind of Thing, such as ISBNs, GTIN codes, UUIDs etc."),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://schema.org/isBasedOn"},(0,i.yg)("inlineCode",{parentName:"a"},"isBasedOn"))),(0,i.yg)("td",{parentName:"tr",align:null},"Message"),(0,i.yg)("td",{parentName:"tr",align:null},"A resource from which this work is derived or from which it is a modification or adaptation."),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://schema.org/messageAttachment"},(0,i.yg)("inlineCode",{parentName:"a"},"messageAttachment"))),(0,i.yg)("td",{parentName:"tr",align:null},"Message"),(0,i.yg)("td",{parentName:"tr",align:null},"A ",(0,i.yg)("inlineCode",{parentName:"td"},"CreativeWork")," attached to the message."),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://schema.org/name"},(0,i.yg)("inlineCode",{parentName:"a"},"name"))),(0,i.yg)("td",{parentName:"tr",align:null},"MediaObject, Message"),(0,i.yg)("td",{parentName:"tr",align:null},"The name of the item."),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://schema.org/recipient"},(0,i.yg)("inlineCode",{parentName:"a"},"recipient"))),(0,i.yg)("td",{parentName:"tr",align:null},"Message"),(0,i.yg)("td",{parentName:"tr",align:null},"The participant who is at the receiving end of the action."),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://schema.org/sender"},(0,i.yg)("inlineCode",{parentName:"a"},"sender"))),(0,i.yg)("td",{parentName:"tr",align:null},"Message"),(0,i.yg)("td",{parentName:"tr",align:null},"The participant who is at the sending end of the action."),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://schema.org/text"},(0,i.yg)("inlineCode",{parentName:"a"},"text"))),(0,i.yg)("td",{parentName:"tr",align:null},"Message"),(0,i.yg)("td",{parentName:"tr",align:null},"The textual content of this ",(0,i.yg)("inlineCode",{parentName:"td"},"CreativeWork")),(0,i.yg)("td",{parentName:"tr",align:null})))),(0,i.yg)("h2",{id:"message-example"},"Message example"),(0,i.yg)(r.A,{language:"jsx",mdxType:"CodeBlock"},l),(0,i.yg)("a",{target:"_blank",href:"/schema/cer/cex/Message.json",download:"Message.json"},"Download"))}c.isMDXComponent=!0}}]);