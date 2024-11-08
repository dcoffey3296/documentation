"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72457],{19657:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=t(74848),i=t(28453);const o={},s="Xstream",d={id:"how-to-guides/drm/xstream",title:"Xstream",description:"This article describes how to configure Xstream DRM with THEOplayer.",source:"@site/theoplayer_versioned_docs/version-v6/how-to-guides/04-drm/13-xstream.md",sourceDirName:"how-to-guides/04-drm",slug:"/how-to-guides/drm/xstream",permalink:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/drm/xstream",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/04-drm/13-xstream.md",tags:[],version:"v6",sidebarPosition:13,frontMatter:{},sidebar:"roku",previous:{title:"Verizon Uplynk",permalink:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/drm/verizon-uplynk"},next:{title:"How to play a Clear-Key-protected stream in THEOplayer?",permalink:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/drm/how-to-play-clear-key-protected-stream"}},l={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Related articles",id:"related-articles",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"xstream",children:"Xstream"})}),"\n",(0,r.jsx)(n.p,{children:"This article describes how to configure Xstream DRM with THEOplayer."}),"\n",(0,r.jsxs)(n.p,{children:["Head to our page on ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/drm/introduction",children:"DRM"})," for more general information."]}),"\n",(0,r.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'if (HLS) {\n  let drmConfiguration = {\n    integration: "xstream",\n    streamId: "<STREAM_ID>",\n    ticketAcquisitionURL: "<TICKET_ACQUISITION_URL>"\n    /*"fairplay": {\n            "licenseAcquisitionURL": "<LICENSE_KEY_URL_FAIRPLAY>",\n            "certificateURL": "CERTIFICATE_URL>"\n        }*/\n  };\n  player.source = {\n    sources: {\n      src: "<HLS_STREAM_URL>",\n      type: "application/x-mpegurl",\n      contentProtection: drmConfiguration\n    }\n  };\n} else if (DASH) {\n  let drmConfiguration = {\n    integration: "xstream",\n    streamId: "<STREAM_ID>",\n    ticketAcquisitionURL: "<TICKET_ACQUISITION_URL>"\n    /*"playready": {\n            "licenseAcquisitionURL": "<LICENSE_KEY_URL_PLAYREADY>"\n        },\n        "widevine": {\n            "licenseAcquisitionURL": "<LICENSE_KEY_URL_WIDEVINE>"\n        }*/\n  };\n  player.source = {\n    sources: {\n      src: "<DASH_STREAM_URL>",\n      type: "application/dash+xml",\n      contentProtection: drmConfiguration\n    }\n  };\n}\n'})}),"\n",(0,r.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'DRMConfiguration drmConfiguration = new XstreamConfiguration.Builder("<STREAM_ID>", "<TICKET_ACQUISITION_URL>")\n    .widevine(\n        KeySystemConfiguration.Builder.keySystemConfiguration("LA_URL").build()\n    )\n    .build()\nTypedSource typedSource = new TypedSource.Builder()\n    .src("<DASH_STREAM_URL>")\n    .drm(drmConfiguration)\n    .build();\nSourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()\n    .sources(typedSource)\n    .build();\ntheoplayer.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,r.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'let drmConfiguration = XstreamDRMConfiguration(\n    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n    certificateURL: "<CERTIFICATE_URL>",\n    streamId: "<STREAM_ID>",\n    ticketAcquisitionURL: "<TICKET_ACQUISITION_URL>"\n)\nlet typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)\nlet sourceDescription = SourceDescription(source: typedSource)\ntheoplayer.source = sourceDescription\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/drm/comcast",children:"Comcast"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/drm/pallycon",children:"PallyCon"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/drm/buydrm-keyos/introduction",children:"BuyDRM KeyOS"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/drm/arris-titanium",children:"Arris Titanium"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/drm/xstream",children:"Xstream"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/drm/verizon-uplynk",children:"Verizon Uplynk"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/drm/vualto-vudrm",children:"Vualto VuDRM"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var r=t(96540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);