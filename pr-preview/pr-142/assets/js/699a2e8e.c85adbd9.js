"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5764],{63664:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(74848),i=r(28453);const o={},d="Nagra Conax Contego",s={id:"how-to-guides/drm/nagra-conax-contego",title:"Nagra Conax Contego",description:"This article describes how to configure Conax DRM with THEOplayer.",source:"@site/theoplayer/how-to-guides/04-drm/08-nagra-conax-contego.md",sourceDirName:"how-to-guides/04-drm",slug:"/how-to-guides/drm/nagra-conax-contego",permalink:"/documentation/pr-preview/pr-142/theoplayer/how-to-guides/drm/nagra-conax-contego",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/04-drm/08-nagra-conax-contego.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"roku",previous:{title:"Microsoft Azure",permalink:"/documentation/pr-preview/pr-142/theoplayer/how-to-guides/drm/microsoft-azure"},next:{title:"Verimatrix MultiRights",permalink:"/documentation/pr-preview/pr-142/theoplayer/how-to-guides/drm/verimatrix-multirights"}},a={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"Related articles",id:"related-articles",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"nagra-conax-contego",children:"Nagra Conax Contego"})}),"\n",(0,t.jsxs)(n.p,{children:["This article describes how to configure ",(0,t.jsx)(n.a,{href:"https://dtv.nagra.com/scalable-service-protection",children:"Conax"})," DRM with THEOplayer."]}),"\n",(0,t.jsxs)(n.p,{children:["Head to our page on ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-142/theoplayer/how-to-guides/drm/introduction",children:"DRM"})," for more general information."]}),"\n",(0,t.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,t.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'if (HLS) {\n  if (CLASSIC_MODEL) {\n    let drmConfiguration = {\n      integration: "conax",\n      token: "<CONAX_TOKEN>",\n      deviceId: "<DEVICE_ID>",\n      fairplay: {\n        licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n        certificateURL: "CERTIFICATE_URL>"\n      }\n    };\n    player.source = {\n      sources: {\n        src: "<HLS_STREAM_URL>",\n        type: "application/x-mpegurl",\n        contentProtection: drmConfiguration\n      }\n    };\n  } else if (UPFRONT_MODEL) {\n    let drmConfiguration = {\n      integration: "conax",\n      fairplay: {\n        licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n        certificateURL: "CERTIFICATE_URL>"\n      },\n      headers: {\n        PreAuthorization: "<CONAX_PREAUTHORIZATION_TOKEN>"\n      }\n    };\n    player.source = {\n      sources: {\n        src: "<HLS_STREAM_URL>",\n        type: "application/x-mpegurl",\n        contentProtection: drmConfiguration\n      }\n    };\n  } else {\n    // player throws an Invalid Conax configuration error\n  }\n} else if (DASH) {\n  let drmConfiguration = {\n    integration: "conax",\n    token: "<CONAX_TOKEN>",\n    deviceId: "<DEVICE_ID>",\n    playready: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_PLAYREADY>"\n    },\n    widevine: {\n      licenseAcquisitionURL: "<LICENSE_KEY_URL_WIDEVINE>"\n    }\n  };\n  player.source = {\n    sources: {\n      src: "<DASH_STREAM_URL>",\n      type: "application/dash+xml",\n      contentProtection: drmConfiguration\n    }\n  };\n}\n'})}),"\n",(0,t.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'DRMConfiguration drmConfiguration = ConaxDRMConfiguration.Builder.conaxDrm("<DEVICE_ID>", "<CONAX_TOKEN>")\n    .widevine(\n        new KeySystemConfiguration(\n            "<LICENSE_KEY_URL_WIDEVINE>"\n        )\n    )\n    .build();\nTypedSource typedSource = new TypedSource.Builder()\n    .src("<DASH_STREAM_URL>")\n    .drm(drmConfiguration)\n    .build();\nSourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()\n    .sources(typedSource)\n    .build();\ntheoplayer.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,t.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-142/theoplayer/how-to-guides/drm/axinom",children:"Axinom"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-142/theoplayer/how-to-guides/drm/castlabs-drmtoday/introduction",children:"castLabs DRMToday"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-142/theoplayer/how-to-guides/drm/ezdrm",children:"EZDRM"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-142/theoplayer/how-to-guides/drm/intertrust-expressplay",children:"Intertrust ExpressPlay"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-142/theoplayer/how-to-guides/drm/irdeto",children:"Irdeto"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-142/theoplayer/how-to-guides/drm/microsoft-azure",children:"Microsoft Azure"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-142/theoplayer/how-to-guides/drm/verimatrix-multirights",children:"Verimatrix MultiRights"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-142/theoplayer/how-to-guides/drm/vimond",children:"Vimond"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-142/theoplayer/how-to-guides/drm/vualto-vudrm",children:"Vualto VuDRM"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-142/theoplayer/how-to-guides/drm/verizon-uplynk",children:"Verizon Uplynk"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>s});var t=r(96540);const i={},o=t.createContext(i);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);