"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50605],{61412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=n(74848),r=n(28453);const o={},s="Introduction",d={id:"how-to-guides/drm/buydrm-keyos/introduction",title:"Introduction",description:"This article describes how to configure BuyDRM KeyOS DRM with THEOplayer.",source:"@site/theoplayer_versioned_docs/version-v7/how-to-guides/04-drm/01-buydrm-keyos/00-introduction.md",sourceDirName:"how-to-guides/04-drm/01-buydrm-keyos",slug:"/how-to-guides/drm/buydrm-keyos/introduction",permalink:"/documentation/pr-preview/pr-155/theoplayer/v7/how-to-guides/drm/buydrm-keyos/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/04-drm/01-buydrm-keyos/00-introduction.md",tags:[],version:"v7",sidebarPosition:0,frontMatter:{},sidebar:"roku",previous:{title:"Multi-key HLS",permalink:"/documentation/pr-preview/pr-155/theoplayer/v7/how-to-guides/drm/multikey-hls"},next:{title:"How to use THEOplayer with KeyOS BuyDRM",permalink:"/documentation/pr-preview/pr-155/theoplayer/v7/how-to-guides/drm/buydrm-keyos/how-to-use-with-theoplayer"}},c={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Code Examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Resources",id:"resources",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,i.jsx)(t.p,{children:"This article describes how to configure BuyDRM KeyOS DRM with THEOplayer."}),"\n",(0,i.jsxs)(t.p,{children:["Head to our page on ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v7/how-to-guides/drm/introduction",children:"DRM"})," for more general information."]}),"\n",(0,i.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,i.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'if (HLS) {\n  let drmConfiguration = {\n    integration: "keyos",\n    customdata: "<CUSTOMDATA>",\n    fairplay: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n      certificateURL: "CERTIFICATE_URL>"\n    }\n  };\n  player.source = {\n    sources: {\n      src: "<HLS_STREAM_URL>",\n      type: "application/x-mpegurl",\n      contentProtection: drmConfiguration\n    }\n  };\n} else if (DASH) {\n  let drmConfiguration = {\n    integration: "keyos",\n    customdata: "<CUSTOMDATA>",\n    playready: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_PLAYREADY>"\n    },\n    widevine: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_WIDEVINE>"\n    }\n  };\n  player.source = {\n    sources: {\n      src: "<DASH_STREAM_URL>",\n      type: "application/dash+xml",\n      contentProtection: drmConfiguration\n    }\n  };\n}\n'})}),"\n",(0,i.jsx)(t.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'DRMConfiguration drmConfiguration = KeyOSDRMConfiguration.Builder\n    .keyOsDrm()\n    .widevine(\n        new KeyOSKeySystemConfiguration("<CUSTOM_DATA>", "<LICENSE_KEY_URL_WIDEVINE>")\n    )\n    .build();\nTypedSource typedSource = new TypedSource.Builder()\n    .src("<DASH_STREAM_URL>")\n    .drm(drmConfiguration)\n    .build();\nSourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()\n    .sources(typedSource)\n    .build();\ntheoplayer.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,i.jsx)(t.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:'public static var buyDRMkeyOS: SourceDescription {\n    let licenseAcquisitionURL: String = "<LICENSE_KEY_URL_FAIRPLAY>"\n    let certificateURL: String = "<CERTIFICATE_URL_FAIRPLAY>"\n    let token: String = "<TOKEN_FAIRPLAY>"\n    let type: String = "application/x-mpegURL"\n    let src = "<HLS_STREAM_URL>"\n    let drm: KeyOSDRMConfiguration = KeyOSDRMConfiguration(licenseAcquisitionURL: licenseAcquisitionURL, certificateURL: certificateURL, customdata: token)\n    let typedSource: TypedSource = TypedSource(src: src, type: type, drm: drm)\n    let source: SourceDescription = SourceDescription(source: typedSource)\n    return source\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://test.buydrm.com/sites/default/files/pdf/webinar/050217_DeployingKeyOSMulti-DRM_withTHEOPLayer_Webinar.pdf",children:"https://test.buydrm.com/sites/default/files/pdf/webinar/050217_DeployingKeyOSMulti-DRM_withTHEOPLayer_Webinar.pdf"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v7/how-to-guides/drm/buydrm-keyos/how-to-use-with-theoplayer",children:"How to use THEOplayer with KeyOS BuyDRM"})}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var i=n(96540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);