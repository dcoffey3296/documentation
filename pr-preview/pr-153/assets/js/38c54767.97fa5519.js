"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74584],{62621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(74848),r=n(28453);const s={slug:"/flutter/guides/limitations"},o="Limitations and Known Issues",l={id:"external/flutter-theoplayer-sdk/doc/limitations",title:"Limitations and Known Issues",description:"This sections lists any limitations and known issues in the current package version.",source:"@site/theoplayer_versioned_docs/version-v7/external/flutter-theoplayer-sdk/doc/limitations.md",sourceDirName:"external/flutter-theoplayer-sdk/doc",slug:"/flutter/guides/limitations",permalink:"/documentation/pr-preview/pr-153/theoplayer/v7/flutter/guides/limitations",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/-/doc/limitations.md",tags:[],version:"v7",frontMatter:{slug:"/flutter/guides/limitations"},sidebar:"flutter",previous:{title:"Using a custom DRM integration",permalink:"/documentation/pr-preview/pr-153/theoplayer/v7/flutter/guides/custom_drm"},next:{title:"The THEOplayer component",permalink:"/documentation/pr-preview/pr-153/theoplayer/v7/flutter/guides/theoplayer-component"}},a={},c=[{value:"Platform support",id:"platform-support",level:2},{value:"Platform differences",id:"platform-differences",level:2},{value:"Version limitations",id:"version-limitations",level:2},{value:"Fullscreen and Picture-in-picture",id:"fullscreen-and-picture-in-picture",level:2},{value:"UI",id:"ui",level:2},{value:"Missing features",id:"missing-features",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"limitations-and-known-issues",children:"Limitations and Known Issues"})}),"\n",(0,i.jsx)(t.p,{children:"This sections lists any limitations and known issues in the current package version."}),"\n",(0,i.jsx)(t.h2,{id:"platform-support",children:"Platform support"}),"\n",(0,i.jsx)(t.p,{children:"THEOplayer Flutter SDK is capable of running on"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"iOS 12 and above"}),"\n",(0,i.jsx)(t.li,{children:"Android 5 and above"}),"\n",(0,i.jsx)(t.li,{children:"Mainstream web browsers (Firefox 120+, Chrome 119+, Safari 17+, Microsoft Edge 119+)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"However, it is not optimized for those devices."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"For the best experience, we suggest to target"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"iOS 14 and above"}),"\n",(0,i.jsx)(t.li,{children:"Android 10 and above"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In a later phase, we will optimize the SDKs for lower operating system versions as much as possible."}),"\n",(0,i.jsx)(t.h2,{id:"platform-differences",children:"Platform differences"}),"\n",(0,i.jsxs)(t.p,{children:["The underlying native platform SDKs have different feature set.\nFirst check the Dart documentation if you see behaviour differences on certain platforms.\nWe try to keep the documentation in sync as much as possible.\nIf you see no difference mentioned in behaviour, please consult with the ",(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/docs/theoplayer/",children:"native SDK documentations"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"version-limitations",children:"Version limitations"}),"\n",(0,i.jsx)(t.p,{children:"THEOplayer Flutter SDK only compatible with THEOplayer 6.x and above."}),"\n",(0,i.jsx)(t.h2,{id:"fullscreen-and-picture-in-picture",children:"Fullscreen and Picture-in-picture"}),"\n",(0,i.jsx)(t.p,{children:"THEOplayer Flutter SDK doesn't have a built-in presentation mode switch,\nso only in-app Fullscreen and Picture-and-Picture mode can be achieved by implementing the logic on app-level."}),"\n",(0,i.jsx)(t.p,{children:"The example project within the SDK package contains an example use-case for Fullscreen."}),"\n",(0,i.jsx)(t.h2,{id:"ui",children:"UI"}),"\n",(0,i.jsx)(t.p,{children:"Currently, THEOplayer Flutter SDK is completely chromeless, the UI needs to be implemented on top of the public APIs on the Flutter level."}),"\n",(0,i.jsx)(t.h2,{id:"missing-features",children:"Missing features"}),"\n",(0,i.jsx)(t.p,{children:"THEOplayer Flutter SDK is not in feature parity yet with the native SDKs, new features will be added continuously."}),"\n",(0,i.jsxs)(t.p,{children:["For the current feature list, please visit the ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v7/getting-started/frameworks/flutter/getting-started",children:"README"})," page."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);