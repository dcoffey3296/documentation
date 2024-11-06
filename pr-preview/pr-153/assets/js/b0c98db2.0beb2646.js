"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76241],{4920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=t(74848),o=t(28453);const i={},s="Introduction",d={id:"how-to-guides/drm/castlabs-drmtoday/introduction",title:"Introduction",description:"This article describes how to configure castLabs DRMToday with THEOplayer.",source:"@site/theoplayer_versioned_docs/version-v7/how-to-guides/04-drm/02-castlabs-drmtoday/00-introduction.md",sourceDirName:"how-to-guides/04-drm/02-castlabs-drmtoday",slug:"/how-to-guides/drm/castlabs-drmtoday/introduction",permalink:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/drm/castlabs-drmtoday/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/04-drm/02-castlabs-drmtoday/00-introduction.md",tags:[],version:"v7",sidebarPosition:0,frontMatter:{},sidebar:"roku",previous:{title:"How to use THEOplayer with KeyOS BuyDRM",permalink:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/drm/buydrm-keyos/how-to-use-with-theoplayer"},next:{title:"How to do offline playback with DRMToday on iOS",permalink:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/drm/castlabs-drmtoday/offline-playback-with-offline-drm"}},c={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Resources",id:"resources",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,r.jsx)(n.p,{children:"This article describes how to configure castLabs DRMToday with THEOplayer."}),"\n",(0,r.jsxs)(n.p,{children:["Head to our page on ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/drm/introduction",children:"DRM"})," for more general information."]}),"\n",(0,r.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'if (HLS) {\n  let drmConfiguration = {\n    integration: "drmtoday",\n    merchant: "<MERCHANT>",\n    sessionId: "<SESSION_ID>",\n    token: "<TOKEN>",\n    userId: "<USER_ID>",\n    fairplay: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n      certificateURL: "CERTIFICATE_URL>"\n    }\n  };\n  player.source = {\n    sources: {\n      src: "<HLS_STREAM_URL>",\n      type: "application/x-mpegurl",\n      contentProtection: drmConfiguration\n    }\n  };\n} else if (DASH) {\n  let drmConfiguration = {\n    integration: "drmtoday",\n    merchant: "<MERCHANT>",\n    sessionId: "<SESSION_ID>",\n    token: "<TOKEN>",\n    userId: "<USER_ID>",\n    playready: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_PLAYREADY>"\n    },\n    widevine: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_WIDEVINE>"\n    }\n  };\n  player.source = {\n    sources: {\n      src: "<DASH_STREAM_URL>",\n      type: "application/dash+xml",\n      contentProtection: drmConfiguration\n    }\n  };\n}\n'})}),"\n",(0,r.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'DRMConfiguration drmConfiguration = DRMTodayConfiguration.Builder\n    .drmToday(\n        new KeySystemConfiguration("<LICENSE_KEY_URL_WIDEVINE>")\n    )\n    .merchant("<MERCHANT>")\n    .sessionId("<SESSION_ID>")\n    .token("<TOKEN>")\n    .userId("<USER_ID>")\n    .build();\nTypedSource typedSource = new TypedSource.Builder()\n    .src("<DASH_STREAM_URL>")\n    .drm(drmConfiguration)\n    .build();\nSourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()\n    .sources(typedSource)\n    .build();\ntheoplayer.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,r.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'let drmConfiguration = DRMTodayDRMConfiguration(\n    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n    certificateURL: "<CERTIFICATE_URL>",\n    merchant: "<MERCHANT>",\n    sessionId: "<SESSION_ID>",\n    token: "<TOKEN>",\n    userId: "<USER_ID>"\n)\nlet typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)\nlet sourceDescription = SourceDescription(source: typedSource)\ntheoplayer.source = sourceDescription\n'})}),"\n",(0,r.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://castlabs.com/drmtoday/",children:"https://castlabs.com/drmtoday/"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);