"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3425],{159:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>h,default:()=>x,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"orcfax-feeds/CER/CEX/cex-3","title":"Message","description":"A description of the types/properties relevant to a message.json.","source":"@site/docs/orcfax-feeds/CER/CEX/message.mdx","sourceDirName":"orcfax-feeds/CER/CEX","slug":"/cex-message","permalink":"/cex-message","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"cex-3","sidebar_position":3,"slug":"/cex-message"},"sidebar":"tutorialSidebar","previous":{"title":"Fact Statement Datum","permalink":"/cex-fact-statement-datum"},"next":{"title":"Validation","permalink":"/cex-validation"}}');var d=i(4848),c=i(8453),r=i(1432);const n=JSON.parse('{"@context":"https://schema.org","type":"Message","name":"ADA-USD","isBasedOn":{"@type":"MediaObject","name":"Exchange data","additionalType":"Central Exchange Data","description":"the raw information received by an Orcfax collector from a central exchange (CEX) API"},"sender":"https://api.pro.coinbase.com/products/ADA-USD/ticker","recipient":"coinbase.tick_generic_jq.0.4.0-rc.4.b637b854f875a71de2ce18a57a8e576cff1d468e","identifier":"urn:orcfax:e4e54362-4c14-49f6-9d80-08617d81243e","dateReceived":"2024-08-28T16:20:20Z","messageAttachment":{"encoding":"application/json;base64","text":"eyJyZXF1ZXN0X3VybCI6ICJodHRwczovL2FwaS5wcm8uY29pbmJhc2UuY29tL3Byb2R1Y3RzL0FEQS1VU0QvdGlja2VyIiwgInJlc3BvbnNlIjogeyJib2R5IjogeyJhc2siOiAiMC4zNDIyIiwgImJpZCI6ICIwLjM0MjEiLCAicHJpY2UiOiAiMC4zNDIzIiwgInJmcV92b2x1bWUiOiAiMTQ3MDcyNS4zMzYwNTAiLCAic2l6ZSI6ICI3Ny4yOTU2NjA4OCIsICJ0aW1lIjogIjIwMjQtMDgtMjhUMTY6MjA6MjAuNjQ4MTg2WiIsICJ0cmFkZV9pZCI6IDExMDM4MzE5NSwgInZvbHVtZSI6ICIyNDE0ODA1Ni42OTI2OTkzMyJ9LCAiaGVhZGVycyI6IHsiQWNjZXB0LVJhbmdlcyI6IFsiYnl0ZXMiXSwgIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMiOiBbIkNvbnRlbnQtVHlwZSwgQWNjZXB0LCBjYi1zZXNzaW9uLCBjYi1mcCwgY2ItZm9ybS1mYWN0b3IiXSwgIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMiOiBbIkdFVCxQT1NULERFTEVURSxQVVQiXSwgIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbiI6IFsiKiJdLCAiQWNjZXNzLUNvbnRyb2wtRXhwb3NlLUhlYWRlcnMiOiBbImNiLWJlZm9yZSwgY2ItYWZ0ZXIsIGNiLWdkcHIiXSwgIkFjY2Vzcy1Db250cm9sLU1heC1BZ2UiOiBbIjcyMDAiXSwgIkNhY2hlLUNvbnRyb2wiOiBbInB1YmxpYywgbWF4LWFnZT0xLCBtdXN0LXJldmFsaWRhdGUiXSwgIkNmLUNhY2hlLVN0YXR1cyI6IFsiSElUIl0sICJDZi1SYXkiOiBbIjhiYTVhMGVmYWQ2YjYzZTktTEhSIl0sICJDb250ZW50LVR5cGUiOiBbImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgiXSwgIkRhdGUiOiBbIldlZCwgMjggQXVnIDIwMjQgMTY6MjA6MjYgR01UIl0sICJFdGFnIjogWyJXL1wiYTEtNGtPdHdKc0VPY29DMGViKzRtV3B4dys0bnBvXCIiXSwgIlNlcnZlciI6IFsiY2xvdWRmbGFyZSJdLCAiU2V0LUNvb2tpZSI6IFsiX19jZl9ibT1aeklRV185bWhjWjFyaE1JWG9lcXBvMF8zd1lqcXRHT205ZVFjZ1ROT2F3LTE3MjQ4NjIwMjYtMS4wLjEuMS1CeDJjTFBQQVllYWtsOS5VT3NldndGRGZDd3JNbE1LMXZmVkE0aVJvNTFMRDdBRmZtSUNPSzJ2NEZqWS5VQThOT3dHRHdXZm5RbktXemgwSTltdk9zQTsgcGF0aD0vOyBleHBpcmVzPVdlZCwgMjgtQXVnLTI0IDE2OjUwOjI2IEdNVDsgZG9tYWluPS5wcm8uY29pbmJhc2UuY29tOyBIdHRwT25seTsgU2VjdXJlOyBTYW1lU2l0ZT1Ob25lIl0sICJTdHJpY3QtVHJhbnNwb3J0LVNlY3VyaXR5IjogWyJtYXgtYWdlPTE1NTUyMDAwOyBpbmNsdWRlU3ViRG9tYWlucyJdLCAiVmFyeSI6IFsiQWNjZXB0LUVuY29kaW5nIl0sICJYLUNvbnRlbnQtVHlwZS1PcHRpb25zIjogWyJub3NuaWZmIl0sICJYLURucy1QcmVmZXRjaC1Db250cm9sIjogWyJvZmYiXSwgIlgtRG93bmxvYWQtT3B0aW9ucyI6IFsibm9vcGVuIl0sICJYLUZyYW1lLU9wdGlvbnMiOiBbIlNBTUVPUklHSU4iXSwgIlgtWHNzLVByb3RlY3Rpb24iOiBbIjE7IG1vZGU9YmxvY2siXX19fQ=="}}'),a={id:"cex-3",sidebar_position:3,slug:"/cex-message"},h="Message",l={},o=[{value:"Schema.org Types",id:"schemaorg-types",level:2},{value:"Schema.org Properties",id:"schemaorg-properties",level:2},{value:"Message example",id:"message-example",level:2}];function j(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.header,{children:(0,d.jsx)(s.h1,{id:"message",children:"Message"})}),"\n",(0,d.jsxs)(s.p,{children:["A description of the types/properties relevant to a ",(0,d.jsx)(s.code,{children:"message.json"}),"."]}),"\n",(0,d.jsxs)(s.p,{children:["Orcfax utilizes the following Schema.org types and properties in its Message\nrecords. The description provided by ",(0,d.jsx)(s.a,{href:"https://schema.org/",children:"Schema.org"})," follows each; if\nOrcfax maintains a more nuanced understanding, an additional definition will be\nprovided. If the term appears in its own definition, it will be replaced when\npossible with a [synonym] in order to aid understanding."]}),"\n",(0,d.jsx)(s.h2,{id:"schemaorg-types",children:"Schema.org Types"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Schema.org description"}),(0,d.jsx)(s.th,{children:"Orcfax description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://schema.org/MediaObject",children:(0,d.jsx)(s.code,{children:"MediaObject"})})}),(0,d.jsx)(s.td,{children:"An object such as an image, video, audio, or text object embedded in a web page or a downloadable dataset."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://schema.org/Message",children:(0,d.jsx)(s.code,{children:"Message"})})}),(0,d.jsx)(s.td,{children:"A single message from a sender to one or more organizations or people."}),(0,d.jsx)(s.td,{children:"Information from a sender to one or more entities."})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"schemaorg-properties",children:"Schema.org Properties"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Property"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Schema.org description"}),(0,d.jsx)(s.th,{children:"Orcfax definition"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://schema.org/additionalType",children:(0,d.jsx)(s.code,{children:"additionalType"})})}),(0,d.jsx)(s.td,{children:"MediaObject"}),(0,d.jsx)(s.td,{children:"Used to add more specific types from external vocabularies when a schema.org equivalent is not available."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://schema.org/dateReceived",children:(0,d.jsx)(s.code,{children:"dateReceived"})})}),(0,d.jsx)(s.td,{children:"Message"}),(0,d.jsxs)(s.td,{children:["The date/time the message was received if a single ",(0,d.jsx)(s.code,{children:"recipient"})," exists."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://schema.org/description",children:(0,d.jsx)(s.code,{children:"description"})})}),(0,d.jsx)(s.td,{children:"MediaObject"}),(0,d.jsx)(s.td,{children:"A description of the item."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://schema.org/encoding",children:(0,d.jsx)(s.code,{children:"encoding"})})}),(0,d.jsx)(s.td,{children:"Message"}),(0,d.jsxs)(s.td,{children:["A media object that encodes this ",(0,d.jsx)(s.code,{children:"CreativeWork"}),"."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://schema.org/identifier",children:(0,d.jsx)(s.code,{children:"identifier"})})}),(0,d.jsx)(s.td,{children:"Message"}),(0,d.jsx)(s.td,{children:"Used to represent any kind of identifier for any kind of Thing, such as ISBNs, GTIN codes, UUIDs etc."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://schema.org/isBasedOn",children:(0,d.jsx)(s.code,{children:"isBasedOn"})})}),(0,d.jsx)(s.td,{children:"Message"}),(0,d.jsx)(s.td,{children:"A resource from which this work is derived or from which it is a modification or adaptation."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://schema.org/messageAttachment",children:(0,d.jsx)(s.code,{children:"messageAttachment"})})}),(0,d.jsx)(s.td,{children:"Message"}),(0,d.jsxs)(s.td,{children:["A ",(0,d.jsx)(s.code,{children:"CreativeWork"})," attached to the message."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://schema.org/name",children:(0,d.jsx)(s.code,{children:"name"})})}),(0,d.jsx)(s.td,{children:"MediaObject, Message"}),(0,d.jsx)(s.td,{children:"The name of the item."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://schema.org/recipient",children:(0,d.jsx)(s.code,{children:"recipient"})})}),(0,d.jsx)(s.td,{children:"Message"}),(0,d.jsx)(s.td,{children:"The participant who is at the receiving end of the action."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://schema.org/sender",children:(0,d.jsx)(s.code,{children:"sender"})})}),(0,d.jsx)(s.td,{children:"Message"}),(0,d.jsx)(s.td,{children:"The participant who is at the sending end of the action."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://schema.org/text",children:(0,d.jsx)(s.code,{children:"text"})})}),(0,d.jsx)(s.td,{children:"Message"}),(0,d.jsxs)(s.td,{children:["The textual content of this ",(0,d.jsx)(s.code,{children:"CreativeWork"})]}),(0,d.jsx)(s.td,{})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"message-example",children:"Message example"}),"\n",(0,d.jsx)(r.A,{language:"jsx",children:JSON.stringify(n,null,2)}),"\n",(0,d.jsx)("a",{target:"_blank",href:"/schema/cer/cex/Message.json",download:"Message.json",children:(0,d.jsx)(s.p,{children:"Download"})})]})}function x(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}}}]);