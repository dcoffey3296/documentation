"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12608],{28271:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>d,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var n=i(74848),s=i(28453);const r={},d="UpdateMonetizedStreamLayout",o={type:"api",id:"update-monetized-stream-layout",title:"UpdateMonetizedStreamLayout",description:"",slug:"/update-monetized-stream-layout",frontMatter:{},api:{operationId:"UpdateMonetizedStreamLayout",responses:{204:{description:"Updated",content:{"application/json":{schema:{properties:{id:{type:"string"},state:{enum:["create","creating","created","update","updating","delete","deleting","deleted","retrieve","retrieved","link"],type:"string"},type:{enum:["ad-break","monetized-stream","device","device-context","bootstrap","deployment","local-deployment","credentials","credentials-context","hardware-interface","networking","stream","stream-status","stream-event","alias","data-center","docker-stack","docker-service","docker-process"],type:"string"},payload:{properties:{backdropURI:{type:"string"},assetURI:{type:"string"},originPath:{type:"string"},networkCode:{type:"string"},assetKey:{type:"string"},layout:{enum:["SINGLE","DOUBLE","LSHAPE_AD","LSHAPE_CONTENT"],type:"string"},segmentOrigin:{type:"string"},origin:{type:"string"},streamId:{type:"string"},version:{type:"string"},labels:{items:{type:"string"},type:"array"},description:{type:"string"},name:{type:"string"}},type:"object",description:"Obtain the return type of a function type"}},required:["id","state","type","payload"],type:"object",description:"From T, pick a set of properties whose keys are in the union K"}}}}},description:"Updates the default layout for an existing monetized stream (signaling service).",tags:["Monetized-Stream"],security:[],parameters:[{description:"The Monetized stream identifier.",in:"path",name:"monetizedStreamId",required:!0,schema:{type:"string"}}],requestBody:{required:!0,content:{"application/json":{schema:{properties:{layout:{enum:["SINGLE","DOUBLE","LSHAPE_AD","LSHAPE_CONTENT"],type:"string"}},type:"object",description:"From T, pick a set of properties whose keys are in the union K"}}}},method:"patch",path:"/monetized-streams/{monetizedStreamId}/layout",servers:[{url:"/api/v1"}],securitySchemes:{apiKeyAuth:{type:"apiKey",name:"X-API-KEY",in:"header"}},jsonRequestBodyExample:{layout:"SINGLE"},info:{title:"THEOads Api",version:"",description:"The THEOads REST API allows you to create and manage monetized streams, which are deployments of signaling services. Each monetized stream corresponds to an origin stream that is monetized using THEOads (SGAI). For detailed information on the various parameters and their usage, please refer to the getting started guide.",license:{name:"MIT"},contact:{}},postman:{name:"Update Monetized Stream Layout",description:{content:"Updates the default layout for an existing monetized stream (signaling service).",type:"text/plain"},url:{path:["monetized-streams",":monetizedStreamId","layout"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The Monetized stream identifier.",type:"text/plain"},type:"any",value:"<string>",key:"monetizedStreamId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'{\n  "layout": "<string>"\n}',options:{raw:{language:"json"}}}}},source:"@site/theoads/api/ads-client.swagger.json",sourceDirName:".",permalink:"/documentation/pr-preview/pr-155/theoads/api/signaling/update-monetized-stream-layout",previous:{title:"CreateMonetizedStreamBreak",permalink:"/documentation/pr-preview/pr-155/theoads/api/signaling/create-monetized-stream-break"},next:{title:"Status",permalink:"/documentation/pr-preview/pr-155/theoads/api/signaling/status"}},a=[];function c(e){const t={code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"updatemonetizedstreamlayout",children:"UpdateMonetizedStreamLayout"})}),"\n",(0,n.jsx)(t.p,{children:"Updates the default layout for an existing monetized stream (signaling service)."}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"monetizedStreamId"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(t.p,{children:"The Monetized stream identifier."})})]})})})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Request Body "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"layout"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Possible values:"})," [",(0,n.jsx)(t.code,{children:"SINGLE"}),", ",(0,n.jsx)(t.code,{children:"DOUBLE"}),", ",(0,n.jsx)(t.code,{children:"LSHAPE_AD"}),", ",(0,n.jsx)(t.code,{children:"LSHAPE_CONTENT"}),"]"]})})]})})})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"204"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Updated"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"state"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Possible values:"})," [",(0,n.jsx)(t.code,{children:"create"}),", ",(0,n.jsx)(t.code,{children:"creating"}),", ",(0,n.jsx)(t.code,{children:"created"}),", ",(0,n.jsx)(t.code,{children:"update"}),", ",(0,n.jsx)(t.code,{children:"updating"}),", ",(0,n.jsx)(t.code,{children:"delete"}),", ",(0,n.jsx)(t.code,{children:"deleting"}),", ",(0,n.jsx)(t.code,{children:"deleted"}),", ",(0,n.jsx)(t.code,{children:"retrieve"}),", ",(0,n.jsx)(t.code,{children:"retrieved"}),", ",(0,n.jsx)(t.code,{children:"link"}),"]"]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"type"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Possible values:"})," [",(0,n.jsx)(t.code,{children:"ad-break"}),", ",(0,n.jsx)(t.code,{children:"monetized-stream"}),", ",(0,n.jsx)(t.code,{children:"device"}),", ",(0,n.jsx)(t.code,{children:"device-context"}),", ",(0,n.jsx)(t.code,{children:"bootstrap"}),", ",(0,n.jsx)(t.code,{children:"deployment"}),", ",(0,n.jsx)(t.code,{children:"local-deployment"}),", ",(0,n.jsx)(t.code,{children:"credentials"}),", ",(0,n.jsx)(t.code,{children:"credentials-context"}),", ",(0,n.jsx)(t.code,{children:"hardware-interface"}),", ",(0,n.jsx)(t.code,{children:"networking"}),", ",(0,n.jsx)(t.code,{children:"stream"}),", ",(0,n.jsx)(t.code,{children:"stream-status"}),", ",(0,n.jsx)(t.code,{children:"stream-event"}),", ",(0,n.jsx)(t.code,{children:"alias"}),", ",(0,n.jsx)(t.code,{children:"data-center"}),", ",(0,n.jsx)(t.code,{children:"docker-stack"}),", ",(0,n.jsx)(t.code,{children:"docker-service"}),", ",(0,n.jsx)(t.code,{children:"docker-process"}),"]"]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"payload"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(t.p,{children:"Obtain the return type of a function type"})}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"backdropURI"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"assetURI"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"originPath"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"networkCode"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"assetKey"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"layout"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Possible values:"})," [",(0,n.jsx)(t.code,{children:"SINGLE"}),", ",(0,n.jsx)(t.code,{children:"DOUBLE"}),", ",(0,n.jsx)(t.code,{children:"LSHAPE_AD"}),", ",(0,n.jsx)(t.code,{children:"LSHAPE_CONTENT"}),"]"]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"segmentOrigin"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"origin"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"streamId"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"version"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"labels"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"description"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})})]})})]})})]})]})})]})})})]})]})}function l(e){void 0===e&&(e={});const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);