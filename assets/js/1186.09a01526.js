"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1186],{6022:(t,e,a)=>{function r(t,e){t.accDescr&&e.setAccDescription?.(t.accDescr),t.accTitle&&e.setAccTitle?.(t.accTitle),t.title&&e.setDiagramTitle?.(t.title)}a.d(e,{S:()=>r}),(0,a(5567).K2)(r,"populateCommonDb")},1186:(t,e,a)=>{a.d(e,{diagram:()=>x});var r=a(6022),n=a(5039),o=a(1021),l=a(5567),i=a(8731),c={packet:[]},s=structuredClone(c),d=l.UI.packet,k=(0,l.K2)((()=>{const t=(0,n.$t)({...d,...(0,l.zj)().packet});return t.showBits&&(t.paddingY+=10),t}),"getConfig"),p=(0,l.K2)((()=>s.packet),"getPacket"),b={pushWord:(0,l.K2)((t=>{t.length>0&&s.packet.push(t)}),"pushWord"),getPacket:p,getConfig:k,clear:(0,l.K2)((()=>{(0,l.IU)(),s=structuredClone(c)}),"clear"),setAccTitle:l.SV,getAccTitle:l.iN,setDiagramTitle:l.ke,getDiagramTitle:l.ab,getAccDescription:l.m7,setAccDescription:l.EI},g=(0,l.K2)((t=>{(0,r.S)(t,b);let e=-1,a=[],n=1;const{bitsPerRow:o}=b.getConfig();for(let{start:r,end:i,label:c}of t.blocks){if(i&&i<r)throw new Error(`Packet block ${r} - ${i} is invalid. End must be greater than start.`);if(r!==e+1)throw new Error(`Packet block ${r} - ${i??r} is not contiguous. It should start from ${e+1}.`);for(e=i??r,l.Rm.debug(`Packet block ${r} - ${e} with label ${c}`);a.length<=o+1&&b.getPacket().length<1e4;){const[t,e]=h({start:r,end:i,label:c},n,o);if(a.push(t),t.end+1===n*o&&(b.pushWord(a),a=[],n++),!e)break;({start:r,end:i,label:c}=e)}}b.pushWord(a)}),"populate"),h=(0,l.K2)(((t,e,a)=>{if(void 0===t.end&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*a?[t,void 0]:[{start:t.start,end:e*a-1,label:t.label},{start:e*a,end:t.end,label:t.label}]}),"getNextFittingBlock"),f={parse:(0,l.K2)((async t=>{const e=await(0,i.qg)("packet",t);l.Rm.debug(e),g(e)}),"parse")},u=(0,l.K2)(((t,e,a,r)=>{const n=r.db,i=n.getConfig(),{rowHeight:c,paddingY:s,bitWidth:d,bitsPerRow:k}=i,p=n.getPacket(),b=n.getDiagramTitle(),g=c+s,h=g*(p.length+1)-(b?0:c),f=d*k+2,u=(0,o.D)(e);u.attr("viewbox",`0 0 ${f} ${h}`),(0,l.a$)(u,h,f,i.useMaxWidth);for(const[o,l]of p.entries())$(u,l,o,i);u.append("text").text(b).attr("x",f/2).attr("y",h-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")}),"draw"),$=(0,l.K2)(((t,e,a,{rowHeight:r,paddingX:n,paddingY:o,bitWidth:l,bitsPerRow:i,showBits:c})=>{const s=t.append("g"),d=a*(r+o)+o;for(const k of e){const t=k.start%i*l+1,e=(k.end-k.start+1)*l-n;if(s.append("rect").attr("x",t).attr("y",d).attr("width",e).attr("height",r).attr("class","packetBlock"),s.append("text").attr("x",t+e/2).attr("y",d+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(k.label),!c)continue;const a=k.end===k.start,o=d-2;s.append("text").attr("x",t+(a?e/2:0)).attr("y",o).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",a?"middle":"start").text(k.start),a||s.append("text").attr("x",t+e).attr("y",o).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(k.end)}}),"drawWord"),w={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},x={parser:f,db:b,renderer:{draw:u},styles:(0,l.K2)((({packet:t}={})=>{const e=(0,n.$t)(w,t);return`\n\t.packetByte {\n\t\tfont-size: ${e.byteFontSize};\n\t}\n\t.packetByte.start {\n\t\tfill: ${e.startByteColor};\n\t}\n\t.packetByte.end {\n\t\tfill: ${e.endByteColor};\n\t}\n\t.packetLabel {\n\t\tfill: ${e.labelColor};\n\t\tfont-size: ${e.labelFontSize};\n\t}\n\t.packetTitle {\n\t\tfill: ${e.titleColor};\n\t\tfont-size: ${e.titleFontSize};\n\t}\n\t.packetBlock {\n\t\tstroke: ${e.blockStrokeColor};\n\t\tstroke-width: ${e.blockStrokeWidth};\n\t\tfill: ${e.blockFillColor};\n\t}\n\t`}),"styles")}}}]);