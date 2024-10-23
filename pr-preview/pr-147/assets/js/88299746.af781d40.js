"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60242],{45543:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var i=t(74848),n=t(28453);const o={},s="Verimatrix MultiRights",l={id:"how-to-guides/drm/verimatrix-multirights",title:"Verimatrix MultiRights",description:"This article describes how to configure Verimatrix MultiRights with THEOplayer. MultiRights is a multi-DRM solution by Verimatrix.",source:"@site/theoplayer_versioned_docs/version-v7/how-to-guides/04-drm/09-verimatrix-multirights.md",sourceDirName:"how-to-guides/04-drm",slug:"/how-to-guides/drm/verimatrix-multirights",permalink:"/documentation/pr-preview/pr-147/theoplayer/v7/how-to-guides/drm/verimatrix-multirights",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/04-drm/09-verimatrix-multirights.md",tags:[],version:"v7",sidebarPosition:9,frontMatter:{},sidebar:"roku",previous:{title:"Nagra Conax Contego",permalink:"/documentation/pr-preview/pr-147/theoplayer/v7/how-to-guides/drm/nagra-conax-contego"},next:{title:"Vimond",permalink:"/documentation/pr-preview/pr-147/theoplayer/v7/how-to-guides/drm/vimond"}},d={},a=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Connectors",id:"connectors",level:2},{value:"Resources",id:"resources",level:2},{value:"Related articles",id:"related-articles",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"verimatrix-multirights",children:"Verimatrix MultiRights"})}),"\n",(0,i.jsxs)(r.p,{children:["This article describes how to configure Verimatrix MultiRights with THEOplayer. ",(0,i.jsx)(r.a,{href:"https://www.verimatrix.com/solutions/multirights-ott",children:"MultiRights"})," is a multi-DRM solution by ",(0,i.jsx)(r.a,{href:"https://www.verimatrix.com/",children:"Verimatrix"}),".\nHead to our page on ",(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-147/theoplayer/v7/how-to-guides/drm/introduction",children:"DRM"})," for more general information."]}),"\n",(0,i.jsx)(r.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Unverified"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,i.jsx)(r.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,i.jsx)(r.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:'if (HLS) {\n  let drmConfiguration = {\n    integration: "verimatrix",\n    fairplay: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n      certificateURL: "CERTIFICATE_URL>"\n    }\n  };\n  player.source = {\n    sources: {\n      src: "<HLS_STREAM_URL>",\n      type: "application/x-mpegurl",\n      contentProtection: drmConfiguration\n    }\n  };\n} else if (DASH) {\n  let drmConfiguration = {\n    integration: "verimatrix",\n    playready: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_PLAYREADY>"\n    },\n    widevine: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_WIDEVINE>"\n    }\n  };\n  player.source = {\n    sources: {\n      src: "<DASH_STREAM_URL>",\n      type: "application/dash+xml",\n      contentProtection: drmConfiguration\n    }\n  };\n}\n'})}),"\n",(0,i.jsx)(r.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'DRMConfiguration drmConfiguration = new DRMConfiguration.Builder()\n    .widevine(\n        new KeySystemConfiguration(\n            "<LICENSE_KEY_URL_WIDEVINE>"\n        )\n    )\n    .build();\nTypedSource typedSource = new TypedSource.Builder()\n    .src("<DASH_STREAM_URL>")\n    .drm(drmConfiguration)\n    .build();\nSourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()\n    .sources(typedSource)\n    .build();\ntheoplayer.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,i.jsx)(r.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-swift",children:'let drmConfiguration = VerimatrixDRMConfiguration(\n        licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n        certificateURL: "<CERTIFICATE_URL>"\n    )\nlet typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)\nlet sourceDescription = SourceDescription(source: typedSource)\ntheoplayer.source = sourceDescription\n'})}),"\n",(0,i.jsx)(r.h2,{id:"connectors",children:"Connectors"}),"\n",(0,i.jsxs)(r.p,{children:["We are developing open-source DRM connectors that can more easily be maintained and to allow for a modular approach. You can find them in ",(0,i.jsx)(r.a,{href:"https://github.com/THEOplayer/samples-drm-integration",children:"this Github repo"}),", alongside with guides on how to integrate and use them.\nWhen integrating DRM for the first time or updating your integration, the connectors are to be preferred over the pre-integrations."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Web"}),"\nThe Verimatrix DRM connector can be found in ",(0,i.jsx)(r.a,{href:"https://github.com/THEOplayer/samples-drm-integration/tree/master/web/src/integration/verimatrixcoredrm",children:"this folder"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Android"}),"\nThe Verimatrix DRM connector can be found in ",(0,i.jsx)(r.a,{href:"https://github.com/THEOplayer/samples-drm-integration/tree/master/android/app/src/main/java/com/theoplayer/contentprotectionintegration/integration/verimatrixcoredrm",children:"this folder"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"iOS"}),"\nThe Verimatrix DRM connector can be found ",(0,i.jsx)(r.a,{href:"https://github.com/THEOplayer/samples-drm-integration/blob/master/ios/ContentProtectionIntegration/integration/VerimatrixCoreDRMIntegration.swift",children:"here"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://github.com/THEOplayer/samples-drm-integration",children:"THEOplayer Github Samples DRM Integration repository"})}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-147/theoplayer/v7/how-to-guides/drm/comcast",children:"Comcast"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-147/theoplayer/v7/how-to-guides/drm/pallycon",children:"PallyCon"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-147/theoplayer/v7/how-to-guides/drm/buydrm-keyos/introduction",children:"BuyDRM KeyOS"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-147/theoplayer/v7/how-to-guides/drm/arris-titanium",children:"Arris Titanium"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-147/theoplayer/v7/how-to-guides/drm/xstream",children:"Xstream"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-147/theoplayer/v7/how-to-guides/drm/verizon-uplynk",children:"Verizon Uplynk"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-147/theoplayer/v7/how-to-guides/drm/vualto-vudrm",children:"Vualto VuDRM"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>l});var i=t(96540);const n={},o=i.createContext(n);function s(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);