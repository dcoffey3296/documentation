"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["57557"],{30360:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>d,default:()=>p,assets:()=>l,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"how-to-guides/drm/intertrust-expressplay","title":"Intertrust ExpressPlay","description":"This article describes how to configure Intertrust ExpressPlay DRM with THEOplayer.","source":"@site/theoplayer/how-to-guides/04-drm/05-intertrust-expressplay.md","sourceDirName":"how-to-guides/04-drm","slug":"/how-to-guides/drm/intertrust-expressplay","permalink":"/documentation/pr-preview/pr-161/theoplayer/how-to-guides/drm/intertrust-expressplay","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/04-drm/05-intertrust-expressplay.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"roku","previous":{"title":"EZDRM","permalink":"/documentation/pr-preview/pr-161/theoplayer/how-to-guides/drm/ezdrm"},"next":{"title":"Irdeto","permalink":"/documentation/pr-preview/pr-161/theoplayer/how-to-guides/drm/irdeto"}}'),i=n("85893"),s=n("50065");let o={},d="Intertrust ExpressPlay",l={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Resources",id:"resources",level:2},{value:"Related articles",id:"related-articles",level:2}];function a(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"intertrust-expressplay",children:"Intertrust ExpressPlay"})}),"\n",(0,i.jsx)(r.p,{children:"This article describes how to configure Intertrust ExpressPlay DRM with THEOplayer."}),"\n",(0,i.jsxs)(r.p,{children:["Head to our page on ",(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-161/theoplayer/how-to-guides/drm/introduction",children:"DRM"})," for more general information."]}),"\n",(0,i.jsx)(r.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Unverified"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Unverified"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Unverified"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Unverified"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,i.jsx)(r.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,i.jsx)(r.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:'if (HLS) {\n  let drmConfiguration = {\n    integration: "expressplay",\n    fairplay: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n      certificateURL: "CERTIFICATE_URL>"\n    }\n  };\n  player.source = {\n    sources: {\n      src: "<HLS_STREAM_URL>",\n      type: "application/x-mpegurl",\n      contentProtection: drmConfiguration\n    }\n  };\n} else if (DASH) {\n  let drmConfiguration = {\n    integration: "expressplay",\n    playready: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_PLAYREADY>"\n    },\n    widevine: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_WIDEVINE>"\n    }\n  };\n  player.source = {\n    sources: {\n      src: "<DASH_STREAM_URL>",\n      type: "application/dash+xml",\n      contentProtection: drmConfiguration\n    }\n  };\n}\n'})}),"\n",(0,i.jsx)(r.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Not verified."})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'DRMConfiguration drmConfiguration = new DRMConfiguration.Builder()\n    .widevine(\n        new KeySystemConfiguration(\n            "<LICENSE_KEY_URL_WIDEVINE>"\n        )\n    )\n    .build();\nTypedSource typedSource = new TypedSource.Builder()\n    .src("<DASH_STREAM_URL>")\n    .drm(drmConfiguration)\n    .build();\nSourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()\n    .sources(typedSource)\n    .build();\ntheoplayer.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,i.jsx)(r.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Not verified."})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-swift",children:'// let headers = [["<KEY>": "<VALUE>"]]\nlet drmConfiguration = FairPlayDRMConfiguration(\n    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n    certificateURL: "<CERTIFICATE_URL>"\n        // , headers: headers, licenseType: <LICENSE_TYPE>\n)\nlet typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)\nlet sourceDescription = SourceDescription(source: typedSource)\ntheoplayer.source = sourceDescription\n'})}),"\n",(0,i.jsx)(r.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://www.verimatrix.com/partners/profile/theoplayer",children:"https://www.verimatrix.com/partners/profile/theoplayer"})}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-161/theoplayer/how-to-guides/drm/axinom",children:"Axinom"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-161/theoplayer/how-to-guides/drm/castlabs-drmtoday/introduction",children:"castLabs DRMToday"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-161/theoplayer/how-to-guides/drm/ezdrm",children:"EZDRM"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-161/theoplayer/how-to-guides/drm/intertrust-expressplay",children:"Intertrust ExpressPlay"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-161/theoplayer/how-to-guides/drm/irdeto",children:"Irdeto"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-161/theoplayer/how-to-guides/drm/microsoft-azure",children:"Microsoft Azure"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-161/theoplayer/how-to-guides/drm/nagra-conax-contego",children:"Nagra Conax Contego"})}),"\n"]})]})}function p(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return o}});var t=n(67294);let i={},s=t.createContext(i);function o(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);