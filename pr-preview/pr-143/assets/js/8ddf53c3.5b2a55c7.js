"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38507],{98961:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var i=n(74848),r=n(28453);const s={},a="CreateMonetizedStreamBreak",d={type:"api",id:"create-monetized-stream-break",title:"CreateMonetizedStreamBreak",description:"",slug:"/create-monetized-stream-break",frontMatter:{},api:{operationId:"CreateMonetizedStreamBreak",responses:{201:{description:"Created",content:{"application/json":{schema:{}}}}},description:"Creates an ad break on an existing monetized stream (signaling service).",tags:["Monetized-Stream"],security:[],parameters:[{description:"The Monetized stream identifier.",in:"path",name:"monetizedStreamId",required:!0,schema:{type:"string"}}],requestBody:{required:!0,content:{"application/json":{schema:{properties:{source:{type:"string"},duration:{type:"number",format:"double"},startDate:{type:"string"},layout:{enum:["SINGLE","DOUBLE","LSHAPE_AD","LSHAPE_CONTENT"],type:"string"},labels:{items:{type:"string"},type:"array"},description:{type:"string"},id:{type:"string"},name:{type:"string"}},type:"object",description:"Obtain the return type of a function type"}}}},method:"post",path:"/monetized-streams/{monetizedStreamId}/break",servers:[{url:"/api/v1"}],securitySchemes:{apiKeyAuth:{type:"apiKey",name:"X-API-KEY",in:"header"}},jsonRequestBodyExample:{source:"string",duration:0,startDate:"string",layout:"SINGLE",labels:["string"],description:"string",id:"string",name:"string"},info:{title:"THEOads Api",version:"",description:"The THEOads REST API allows you to create and manage monetized streams, which are deployments of signaling services. Each monetized stream corresponds to an origin stream that is monetized using THEOads (SGAI). For detailed information on the various parameters and their usage, please refer to the getting started guide.",license:{name:"MIT"},contact:{}},postman:{name:"Create Monetized Stream Break",description:{content:"Creates an ad break on an existing monetized stream (signaling service).",type:"text/plain"},url:{path:["monetized-streams",":monetizedStreamId","break"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The Monetized stream identifier.",type:"text/plain"},type:"any",value:"<string>",key:"monetizedStreamId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n  "source": "<string>",\n  "duration": "<double>",\n  "startDate": "<string>",\n  "layout": "<string>",\n  "labels": [\n    "<string>",\n    "<string>"\n  ],\n  "description": "<string>",\n  "id": "<string>",\n  "name": "<string>"\n}',options:{raw:{language:"json"}}}}},source:"@site/theoads/api/ads-client.swagger.json",sourceDirName:".",permalink:"/documentation/pr-preview/pr-143/theoads/api/signaling/create-monetized-stream-break",previous:{title:"DeleteMonetizedStream",permalink:"/documentation/pr-preview/pr-143/theoads/api/signaling/delete-monetized-stream"},next:{title:"UpdateMonetizedStreamLayout",permalink:"/documentation/pr-preview/pr-143/theoads/api/signaling/update-monetized-stream-layout"}},o=[];function l(e){const t={code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"createmonetizedstreambreak",children:"CreateMonetizedStreamBreak"})}),"\n",(0,i.jsx)(t.p,{children:"Creates an ad break on an existing monetized stream (signaling service)."}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"monetizedStreamId"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(t.p,{children:"The Monetized stream identifier."})})]})})})]}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Request Body "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,i.jsx)("div",{})]})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"source"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"duration"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" double"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"startDate"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"layout"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Possible values:"})," [",(0,i.jsx)(t.code,{children:"SINGLE"}),", ",(0,i.jsx)(t.code,{children:"DOUBLE"}),", ",(0,i.jsx)(t.code,{children:"LSHAPE_AD"}),", ",(0,i.jsx)(t.code,{children:"LSHAPE_CONTENT"}),"]"]})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"labels"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string[]"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"description"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})})]})]}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"201"})}),(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"Created"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("td",{children:(0,i.jsx)("span",{style:{opacity:"0.6"},children:" undefined"})})})})]})})]})})})]})]})}function c(e){void 0===e&&(e={});const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);