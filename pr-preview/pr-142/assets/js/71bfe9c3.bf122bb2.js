"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45655],{22134:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=n(74848),i=n(28453);const r={},d="CreateMonetizedStream",c={type:"api",id:"create-monetized-stream",title:"CreateMonetizedStream",description:"",slug:"/create-monetized-stream",frontMatter:{},api:{operationId:"CreateMonetizedStream",responses:{201:{description:"Created",content:{"application/json":{schema:{properties:{id:{type:"string"},state:{enum:["create","creating","created","update","updating","delete","deleting","deleted","retrieve","retrieved","link"],type:"string"},type:{enum:["ad-break","monetized-stream","device","device-context","bootstrap","deployment","local-deployment","credentials","credentials-context","hardware-interface","networking","stream","stream-status","stream-event","alias","data-center","docker-stack","docker-service","docker-process"],type:"string"},payload:{properties:{backdropURI:{type:"string"},assetURI:{type:"string"},originPath:{type:"string"},networkCode:{type:"string"},assetKey:{type:"string"},layout:{enum:["SINGLE","DOUBLE","LSHAPE_AD","LSHAPE_CONTENT"],type:"string"},segmentOrigin:{type:"string"},origin:{type:"string"},streamId:{type:"string"},version:{type:"string"},labels:{items:{type:"string"},type:"array"},description:{type:"string"},name:{type:"string"}},type:"object",description:"Obtain the return type of a function type"}},required:["id","state","type","payload"],type:"object",description:"From T, pick a set of properties whose keys are in the union K"}}}}},description:"Creates and deploys a new monetized stream in the environment, resulting in a deployment of a signaling service.",tags:["Monetized-Stream"],security:[],parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{properties:{backdropURI:{type:"string"},assetURI:{type:"string"},originPath:{type:"string"},networkCode:{type:"string"},assetKey:{type:"string"},layout:{enum:["SINGLE","DOUBLE","LSHAPE_AD","LSHAPE_CONTENT"],type:"string"},segmentOrigin:{type:"string"},origin:{type:"string"},streamId:{type:"string"},version:{type:"string"},labels:{items:{type:"string"},type:"array"},description:{type:"string"},name:{type:"string"}},type:"object",description:"Obtain the return type of a function type"}}}},method:"post",path:"/monetized-streams",servers:[{url:"/api/v1"}],securitySchemes:{apiKeyAuth:{type:"apiKey",name:"X-API-KEY",in:"header"}},jsonRequestBodyExample:{backdropURI:"string",assetURI:"string",originPath:"string",networkCode:"string",assetKey:"string",layout:"SINGLE",segmentOrigin:"string",origin:"string",streamId:"string",version:"string",labels:["string"],description:"string",name:"string"},info:{title:"THEOads Api",version:"",description:"The THEOads REST API allows you to create and manage monetized streams, which are deployments of signaling services. Each monetized stream corresponds to an origin stream that is monetized using THEOads (SGAI). For detailed information on the various parameters and their usage, please refer to the getting started guide.",license:{name:"MIT"},contact:{}},postman:{name:"Create Monetized Stream",description:{content:"Creates and deploys a new monetized stream in the environment, resulting in a deployment of a signaling service.",type:"text/plain"},url:{path:["monetized-streams"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n  "backdropURI": "<string>",\n  "assetURI": "<string>",\n  "originPath": "<string>",\n  "networkCode": "<string>",\n  "assetKey": "<string>",\n  "layout": "<string>",\n  "segmentOrigin": "<string>",\n  "origin": "<string>",\n  "streamId": "<string>",\n  "version": "<string>",\n  "labels": [\n    "<string>",\n    "<string>"\n  ],\n  "description": "<string>",\n  "name": "<string>"\n}',options:{raw:{language:"json"}}}}},source:"@site/theoads/api/ads-client.swagger.json",sourceDirName:".",permalink:"/documentation/pr-preview/pr-142/theoads/api/signaling/create-monetized-stream",previous:{title:"GetMonetizedStreams",permalink:"/documentation/pr-preview/pr-142/theoads/api/signaling/get-monetized-streams"},next:{title:"GetMonetizedStream",permalink:"/documentation/pr-preview/pr-142/theoads/api/signaling/get-monetized-stream"}},o=[];function l(e){const t={code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"createmonetizedstream",children:"CreateMonetizedStream"})}),"\n",(0,s.jsx)(t.p,{children:"Creates and deploys a new monetized stream in the environment, resulting in a deployment of a signaling service."}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Request Body "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,s.jsx)("div",{})]})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"backdropURI"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"assetURI"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"originPath"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"networkCode"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"assetKey"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"layout"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Possible values:"})," [",(0,s.jsx)(t.code,{children:"SINGLE"}),", ",(0,s.jsx)(t.code,{children:"DOUBLE"}),", ",(0,s.jsx)(t.code,{children:"LSHAPE_AD"}),", ",(0,s.jsx)(t.code,{children:"LSHAPE_CONTENT"}),"]"]})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"segmentOrigin"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"origin"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"streamId"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"version"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"labels"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string[]"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"description"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})})]})]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"201"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Created"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"state"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Possible values:"})," [",(0,s.jsx)(t.code,{children:"create"}),", ",(0,s.jsx)(t.code,{children:"creating"}),", ",(0,s.jsx)(t.code,{children:"created"}),", ",(0,s.jsx)(t.code,{children:"update"}),", ",(0,s.jsx)(t.code,{children:"updating"}),", ",(0,s.jsx)(t.code,{children:"delete"}),", ",(0,s.jsx)(t.code,{children:"deleting"}),", ",(0,s.jsx)(t.code,{children:"deleted"}),", ",(0,s.jsx)(t.code,{children:"retrieve"}),", ",(0,s.jsx)(t.code,{children:"retrieved"}),", ",(0,s.jsx)(t.code,{children:"link"}),"]"]})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"type"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Possible values:"})," [",(0,s.jsx)(t.code,{children:"ad-break"}),", ",(0,s.jsx)(t.code,{children:"monetized-stream"}),", ",(0,s.jsx)(t.code,{children:"device"}),", ",(0,s.jsx)(t.code,{children:"device-context"}),", ",(0,s.jsx)(t.code,{children:"bootstrap"}),", ",(0,s.jsx)(t.code,{children:"deployment"}),", ",(0,s.jsx)(t.code,{children:"local-deployment"}),", ",(0,s.jsx)(t.code,{children:"credentials"}),", ",(0,s.jsx)(t.code,{children:"credentials-context"}),", ",(0,s.jsx)(t.code,{children:"hardware-interface"}),", ",(0,s.jsx)(t.code,{children:"networking"}),", ",(0,s.jsx)(t.code,{children:"stream"}),", ",(0,s.jsx)(t.code,{children:"stream-status"}),", ",(0,s.jsx)(t.code,{children:"stream-event"}),", ",(0,s.jsx)(t.code,{children:"alias"}),", ",(0,s.jsx)(t.code,{children:"data-center"}),", ",(0,s.jsx)(t.code,{children:"docker-stack"}),", ",(0,s.jsx)(t.code,{children:"docker-service"}),", ",(0,s.jsx)(t.code,{children:"docker-process"}),"]"]})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"payload"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(t.p,{children:"Obtain the return type of a function type"})}),(0,s.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"backdropURI"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"assetURI"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"originPath"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"networkCode"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"assetKey"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"layout"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Possible values:"})," [",(0,s.jsx)(t.code,{children:"SINGLE"}),", ",(0,s.jsx)(t.code,{children:"DOUBLE"}),", ",(0,s.jsx)(t.code,{children:"LSHAPE_AD"}),", ",(0,s.jsx)(t.code,{children:"LSHAPE_CONTENT"}),"]"]})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"segmentOrigin"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"origin"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"streamId"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"version"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"labels"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string[]"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"description"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})})]})})]})})]})]})})]})})})]})]})}function a(e){void 0===e&&(e={});const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var s=n(96540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);