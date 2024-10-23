"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7395],{48890:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>a});var r=i(74848),l=i(28453);const t={slug:"/flutter/changelog",title:"Changelog",sidebar_custom_props:{icon:"\ud83d\udcf0"},toc_min_heading_level:2,toc_max_heading_level:2},d=void 0,s={id:"external/flutter-theoplayer-sdk/flutter_theoplayer_sdk/CHANGELOG",title:"Changelog",description:"8.2.0",source:"@site/theoplayer/external/flutter-theoplayer-sdk/flutter_theoplayer_sdk/CHANGELOG.md",sourceDirName:"external/flutter-theoplayer-sdk/flutter_theoplayer_sdk",slug:"/flutter/changelog",permalink:"/documentation/pr-preview/pr-147/theoplayer/flutter/changelog",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/-/flutter_theoplayer_sdk/CHANGELOG.md",tags:[],version:"current",frontMatter:{slug:"/flutter/changelog",title:"Changelog",sidebar_custom_props:{icon:"\ud83d\udcf0"},toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"flutter",previous:{title:"The THEOplayer component",permalink:"/documentation/pr-preview/pr-147/theoplayer/flutter/guides/theoplayer-component"},next:{title:"Knowledge base",permalink:"/documentation/pr-preview/pr-147/theoplayer/knowledge-base/"}},o={},a=[{value:"8.2.0",id:"820",level:2},{value:"8.0.0",id:"800",level:2},{value:"7.12.0",id:"7120",level:2},{value:"7.3.1",id:"731",level:2},{value:"7.3.0",id:"730",level:2},{value:"7.0.0",id:"700",level:2},{value:"Versioning changes",id:"versioning-changes",level:3},{value:"1.0.3",id:"103",level:2},{value:"1.0.2",id:"102",level:2},{value:"1.0.1",id:"101",level:2},{value:"1.0.0",id:"100",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"820",children:"8.2.0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed an issue where play/pause buttons were not connected in the Picture-in-Picture window on Android."}),"\n",(0,r.jsx)(n.li,{children:"Updated THEOplayer to 8.2.0."}),"\n",(0,r.jsx)(n.li,{children:"Updated Kotlin version to 1.9.25 (to match with THEOplayer Android SDK)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"800",children:"8.0.0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Updated THEOplayer to 8.0.0."}),"\n",(0,r.jsxs)(n.li,{children:["Added Picture-in-Picture support with ",(0,r.jsx)(n.code,{children:"THEOplayer.setPresentationMode(PresentationMode.PIP)"})," API for WEB and ",(0,r.jsx)(n.code,{children:"THEOplayer.setAllowAutomaticPictureInPicture(bool)"})," for Android and iOS."]}),"\n",(0,r.jsx)(n.li,{children:"Removed iOS 12 support. The minimum supported iOS version is now iOS 13."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"7120",children:"7.12.0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Updated THEOplayer to 7.12.0."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"731",children:"7.3.1"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed an issue where playback failed with license error when using Texture-based (SURFACE_TEXTURE, SURFACE_PRODUCER) rendering."}),"\n",(0,r.jsx)(n.li,{children:"Fixed an issue where player lifecycle callbacks were triggered multiple times when using Texture-based (SURFACE_TEXTURE, SURFACE_PRODUCER) rendering."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"730",children:"7.3.0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Updated THEOplayer to 7.3.0."}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"AndroidConfig.viewComposition"})," to support Texture-based rendering."]}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"AndroidViewComposition.SURFACE_TEXTURE"})," to use SurfaceTexture on native Android (instead of PlatformViews)."]}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"AndroidViewComposition.SURFACE_PRODUCER"})," to use SurfaceProducer on native Android (instead of PlatformViews).","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Only works from ",(0,r.jsx)(n.a,{href:"https://docs.flutter.dev/release/breaking-changes/android-surface-plugins#timeline",children:"Flutter 3.22.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Supports ",(0,r.jsx)(n.a,{href:"https://docs.flutter.dev/release/breaking-changes/android-surface-plugins#summary",children:"Texture-based rendering with Impeller"})," rendering engine"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Added Support for continuing playback when transitioning the app into background with ",(0,r.jsx)(n.code,{children:"THEOplayer.setAllowBackgroundPlayback(boolean)"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Added Fullscreen support with ",(0,r.jsx)(n.code,{children:"THEOplayer.setPresentationMode(PresentationMode)"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Deprecated ",(0,r.jsx)(n.code,{children:"AndroidConfig.useHybridComposition"})," in favor of ",(0,r.jsx)(n.code,{children:"AndroidConfig.viewComposition"})," (use ",(0,r.jsx)(n.code,{children:"AndroidViewComposition.HYBRID_COMPOSITION"})," for the previous behaviour)."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"700",children:"7.0.0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Updated THEOplayer to 7.0.0."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"versioning-changes",children:"Versioning changes"}),"\n",(0,r.jsx)(n.p,{children:"We are updating the version numbering for THEOplayer Flutter SDK to more closely match the underlying native THEOplayer SDKs."}),"\n",(0,r.jsx)(n.p,{children:"Here are the notable changes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"major"})," version will be matching the underlying native SDK major version."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"minor"})," version will reflect new features added in THEOplayer Flutter SDK."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"patch"})," version will be increased when there is a need for a hotfix on top of the minor version bump."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Note: Breaking changes in THEOplayer Flutter SDK will only occur while increasing the ",(0,r.jsx)(n.strong,{children:"major"})," version."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"103",children:"1.0.3"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Updated THEOplayer to 6.10.1."}),"\n",(0,r.jsx)(n.li,{children:"Added and coupled application lifecycle listener."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"102",children:"1.0.2"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Service release, no new features."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"101",children:"1.0.1"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Updated minimum Dart version to 3.3.0."}),"\n",(0,r.jsx)(n.li,{children:"Updated minimum Flutter version to 3.19.0."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"100",children:"1.0.0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Initial release."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>s});var r=i(96540);const l={},t=r.createContext(l);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);