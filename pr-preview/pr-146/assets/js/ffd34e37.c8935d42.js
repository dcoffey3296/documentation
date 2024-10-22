"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79919],{54489:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=t(74848),a=t(28453);const c={slug:"/connectors/web/adscript/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\ud83d\ude80 "}},i="adscript-connector-web",o={id:"external/web-connectors/adscript/README",title:"Getting started",description:"Set up your connector in just a few minutes!",source:"@site/theoplayer/external/web-connectors/adscript/README.md",sourceDirName:"external/web-connectors/adscript",slug:"/connectors/web/adscript/getting-started",permalink:"/documentation/pr-preview/pr-146/theoplayer/connectors/web/adscript/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/web-connectors/blob/-/adscript/README.md",tags:[],version:"current",frontMatter:{slug:"/connectors/web/adscript/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\ud83d\ude80 "}}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"npm",id:"npm",level:3},{value:"yarn",id:"yarn",level:3},{value:"Usage",id:"usage",level:2},{value:"Updating metadata",id:"updating-metadata",level:2},{value:"Updating userInfo",id:"updating-userinfo",level:2}];function l(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"adscript-connector-web",children:"adscript-connector-web"})}),"\n",(0,r.jsx)(e.p,{children:"The AdScript connector provides an AdScript integration for THEOplayer."}),"\n",(0,r.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(e.p,{children:["Install using your favorite package manager for Node (such as ",(0,r.jsx)(e.code,{children:"npm"})," or ",(0,r.jsx)(e.code,{children:"yarn"}),"):"]}),"\n",(0,r.jsx)(e.h3,{id:"npm",children:"npm"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"npm install @theoplayer/adscript-connector-web\n"})}),"\n",(0,r.jsx)(e.h3,{id:"yarn",children:"yarn"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"yarn add @theoplayer/adscript-connector-web\n"})}),"\n",(0,r.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(e.p,{children:"First you need to add the AdScript connector to your app :"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Add as a regular script"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'\n<script type="text/javascript" src="path/to/adscript-connector.umd.js"><\/script>\n<script type="text/javascript">\n    const player = new THEOplayer.Player(element, configuration);\n\n    // Define your configuration for the connector:\n    const adScriptConfig = {\n        implementationId: \'your-implementation-id\', // Replace this!\n        metadata: {\n            "assetid": "v0000001",\n            "type": "content",\n            "program": "Big Buck Bunny",\n            "title": "Sample Video - Extended",\n            "length": "635",\n            "crossId": "000 111 22222",\n            "livestream": "0",\n            "channelId": "",\n            "attribute": "1"\n        },\n        debug: false\n    }\n\n    // Create the AdScriptConnector:\n    const adScriptConnector = new THEOplayerAdScriptConnector.AdScriptConnector(player, adScriptConfig);\n<\/script>\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Add as an ES2015 module"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'\n<script type="module">\n    import {AdScriptConnector} from "@theoplayer/adscript-connector-web";\n\n    const player = new THEOplayer.Player(element, configuration);\n\n    // Define your configuration for the connector:\n    const adScriptConfig = {\n        implementationId: \'your-implementation-id\', // Replace this!\n        metadata: {\n            "assetid": "v0000001",\n            "type": "content",\n            "program": "Big Buck Bunny",\n            "title": "Sample Video - Extended",\n            "length": "635",\n            "crossId": "000 111 22222",\n            "livestream": "0",\n            "channelId": "",\n            "attribute": "1"\n        },\n        debug: false\n    }\n\n    // Create the AdScriptConnector:\n    const adScriptConnector = new AdScriptConnector(player, adScriptConfig);\n<\/script>\n'})}),"\n",(0,r.jsx)(e.h2,{id:"updating-metadata",children:"Updating metadata"}),"\n",(0,r.jsx)(e.p,{children:"If the metadata has changed during playback, you can update it with:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"adScriptConnector.updateMetadata(newMetadata);\n"})}),"\n",(0,r.jsx)(e.h2,{id:"updating-userinfo",children:"Updating userInfo"}),"\n",(0,r.jsx)(e.p,{children:"If the user info has changed during playback, you can update it with:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"adScriptConnector.updateUser(i12n);\n"})})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>o});var r=t(96540);const a={},c=r.createContext(a);function i(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);