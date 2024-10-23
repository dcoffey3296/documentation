"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64587],{99923:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(74848),i=r(28453);const o={},d="Vualto VuDRM",l={id:"how-to-guides/drm/vualto-vudrm",title:"Vualto VuDRM",description:"This article describes how to configure Vualto VuDRM with THEOplayer.",source:"@site/theoplayer/how-to-guides/04-drm/11-vualto-vudrm.md",sourceDirName:"how-to-guides/04-drm",slug:"/how-to-guides/drm/vualto-vudrm",permalink:"/documentation/pr-preview/pr-147/theoplayer/how-to-guides/drm/vualto-vudrm",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/04-drm/11-vualto-vudrm.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"roku",previous:{title:"Vimond",permalink:"/documentation/pr-preview/pr-147/theoplayer/how-to-guides/drm/vimond"},next:{title:"Verizon Uplynk",permalink:"/documentation/pr-preview/pr-147/theoplayer/how-to-guides/drm/verizon-uplynk"}},s={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Resources",id:"resources",level:2},{value:"Related articles",id:"related-articles",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"vualto-vudrm",children:"Vualto VuDRM"})}),"\n",(0,t.jsx)(n.p,{children:"This article describes how to configure Vualto VuDRM with THEOplayer."}),"\n",(0,t.jsxs)(n.p,{children:["Head to our page on ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-147/theoplayer/how-to-guides/drm/introduction",children:"DRM"})," for more general information."]}),"\n",(0,t.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,t.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'if (HLS) {\n    let drmConfiguration = {\n        "integration": "vudrm",\n        "token": "<TOKEN>",\n        "fairplay": {\n            "licenseAcquisitionURL": "<LICENSE_KEY_URL_FAIRPLAY>",\n            "certificateURL": "CERTIFICATE_URL>"\n        }\n    };\n    player.source = {\n        "sources": {\n            "src": "<HLS_STREAM_URL>",\n            "type": "application/x-mpegurl",\n            "contentProtection": drmConfiguration\n        }\n    }\n} else if (DASH) {\n    let drmConfiguration = {\n        "integration": "vudrm",\n        "token": "<TOKEN>"\n        "playready": {\n            "licenseAcquisitionURL": "<LICENSE_KEY_URL_PLAYREADY>"\n        },\n        "widevine": {\n            "licenseAcquisitionURL": "<LICENSE_KEY_URL_WIDEVINE>"\n        }\n    };\n    player.source = {\n        "sources": {\n            "src": "<DASH_STREAM_URL>",\n            "type": "application/dash+xml",\n            "contentProtection": drmConfiguration\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'DRMConfiguration drmConfiguration = new VudrmDRMConfiguration("<TOKEN>", null,\n                new KeySystemConfiguration("<LICENSE_KEY_URL>"));\nTypedSource typedSource = new TypedSource.Builder()\n    .src("<DASH_STREAM_URL>")\n    .drm(drmConfiguration)\n    .build();\nSourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()\n    .sources(typedSource)\n    .build();\ntheoplayer.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,t.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'// let headers = [["<KEY>": "<VALUE>"]]\nlet drmConfiguration = VudrmDRMConfiguration(\n    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n    certificateURL: "<CERTIFICATE_URL>",\n    token: "<TOKEN>"\n    //, headers: headers\n)\nlet typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)\nlet sourceDescription = SourceDescription(source: typedSource)\ntheoplayer.source = sourceDescription\n'})}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.vualto.com/products/vudrm-drm/",children:"https://www.vualto.com/products/vudrm-drm/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Vualto/vuplay-theoplayer",children:"https://github.com/Vualto/vuplay-theoplayer"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-147/theoplayer/how-to-guides/drm/comcast",children:"Comcast"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-147/theoplayer/how-to-guides/drm/pallycon",children:"PallyCon"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-147/theoplayer/how-to-guides/drm/buydrm-keyos/introduction",children:"BuyDRM KeyOS"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-147/theoplayer/how-to-guides/drm/arris-titanium",children:"Arris Titanium"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-147/theoplayer/how-to-guides/drm/xstream",children:"Xstream"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-147/theoplayer/how-to-guides/drm/verizon-uplynk",children:"Verizon Uplynk"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-147/theoplayer/how-to-guides/drm/vualto-vudrm",children:"Vualto VuDRM"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var t=r(96540);const i={},o=t.createContext(i);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);