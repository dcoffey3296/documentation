"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["93782"],{20164:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>s});var n=JSON.parse('{"id":"how-to-guides/drm/comcast","title":"Comcast","description":"This article describes how to configure Comcast DRM with THEOplayer. Head to our page on DRM for more general information.","source":"@site/theoplayer/how-to-guides/04-drm/03-comcast.md","sourceDirName":"how-to-guides/04-drm","slug":"/how-to-guides/drm/comcast","permalink":"/documentation/pr-preview/pr-158/theoplayer/how-to-guides/drm/comcast","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/04-drm/03-comcast.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"roku","previous":{"title":"Axinom","permalink":"/documentation/pr-preview/pr-158/theoplayer/how-to-guides/drm/axinom"},"next":{"title":"EZDRM","permalink":"/documentation/pr-preview/pr-158/theoplayer/how-to-guides/drm/ezdrm"}}'),i=r("85893"),o=r("50065");let s={},a="Comcast",d={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK",id:"iostvos-sdk",level:5},{value:"Connectors",id:"connectors",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2},{value:"Related articles",id:"related-articles",level:2}];function l(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"comcast",children:"Comcast"})}),"\n",(0,i.jsxs)(t.p,{children:["This article describes how to configure Comcast DRM with THEOplayer. Head to our page on ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-158/theoplayer/how-to-guides/drm/introduction",children:"DRM"})," for more general information."]}),"\n",(0,i.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Unverified through CSS/JavaScript injection*"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Unverified through CSS/JavaScript injection*"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Unverified through CSS/JavaScript injection*"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Unverified through CSS/JavaScript injection*"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Unverified"})]})})]}),"\n",(0,i.jsx)(t.p,{children:"*CSS/JavaScript injection in the project is only possible with the legacy mobile SDKs (up to 4.12.X)."}),"\n",(0,i.jsx)(t.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,i.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'if (HLS) {\n  let drmConfiguration = {\n    integration: "comcast",\n    fairplay: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n      certificateURL: "CERTIFICATE_URL>",\n      token: "<TOKEN>",\n      releasePid: "<RELEASEPID>",\n      accountId: "<ACCOUNT_ID>"\n    }\n  };\n  player.source = {\n    sources: {\n      src: "<HLS_STREAM_URL>",\n      type: "application/x-mpegurl",\n      contentProtection: drmConfiguration\n    }\n  };\n} else if (DASH) {\n  let drmConfiguration = {\n    playready: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_PLAYREADY>"\n    },\n    widevine: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_WIDEVINE>"\n    }\n  };\n  player.source = {\n    sources: {\n      src: "<DASH_STREAM_URL>",\n      type: "application/dash+xml",\n      contentProtection: drmConfiguration\n    }\n  };\n}\n'})}),"\n",(0,i.jsx)(t.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(t.p,{children:"There currently is no integration available in the Android SDK for this DRM system."}),"\n",(0,i.jsxs)(t.p,{children:["Legacy SDK (4.12.X): The Web SDK code should be included in your Android (TV) project. The article at ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-158/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})," explains how you can add CSS and JavaScript files to your project. The sample project at ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-158/theoplayer/how-to-guides/ui/how-to-insert-a-button",children:"How to insert a button"})," demonstrates this."]}),"\n",(0,i.jsx)(t.h5,{id:"iostvos-sdk",children:"iOS/tvOS SDK"}),"\n",(0,i.jsx)(t.p,{children:"There currently is no integration available in the iOS SDK for this DRM system."}),"\n",(0,i.jsxs)(t.p,{children:["Legacy SDK (4.12.X): The Web SDK code should be included in your iOS (TV) project. The article at ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-158/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})," explains how you can add CSS and JavaScript files to your project. The sample project at ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-158/theoplayer/how-to-guides/ui/how-to-insert-a-button",children:"How to insert a button"})," demonstrates this."]}),"\n",(0,i.jsx)(t.h2,{id:"connectors",children:"Connectors"}),"\n",(0,i.jsxs)(t.p,{children:["We are developing open-source DRM connectors that can more easily be maintained and to allow for a modular approach. You can find them in ",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-drm-integration",children:"this Github repo"}),", alongside with guides on how to integrate and use them.\nWhen integrating DRM for the first time or updating your integration, the connectors are to be preferred over the pre-integrations."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Web"}),"\nThe Comcast DRM connector can be found in ",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-drm-integration/tree/master/web/src/integration/comcastdrm",children:"this folder"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Mobile SDKs"}),"\nConnectors are also the way forward for the current mobile SDKs. There currently is no ready-made connector for this DRM provider: you can choose to develop one based on the examples in the repository, or get in contact with us about making one."]}),"\n",(0,i.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Legacy Mobile SDKs (4.12.X): having this work through JavaScript injection has several limitations (e.g.: this will not work with Exoplayer on Android)."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.theplatform.com/help/ent-license-web-services-api-reference",children:"https://docs.theplatform.com/help/ent-license-web-services-api-reference"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-drm-integration",children:"THEOplayer Github Samples DRM Integration repository"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-158/theoplayer/how-to-guides/drm/axinom",children:"Axinom"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-158/theoplayer/how-to-guides/drm/castlabs-drmtoday/introduction",children:"castLabs DRMToday"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-158/theoplayer/how-to-guides/drm/ezdrm",children:"EZDRM"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-158/theoplayer/how-to-guides/drm/intertrust-expressplay",children:"Intertrust ExpressPlay"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-158/theoplayer/how-to-guides/drm/irdeto",children:"Irdeto"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-158/theoplayer/how-to-guides/drm/microsoft-azure",children:"Microsoft Azure"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-158/theoplayer/how-to-guides/drm/nagra-conax-contego",children:"Nagra Conax Contego"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return s}});var n=r(67294);let i={},o=n.createContext(i);function s(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);