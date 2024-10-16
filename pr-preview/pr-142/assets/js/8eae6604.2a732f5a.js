"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6656],{25605:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=o(74848),a=o(28453);const n={},i="How to use THEOplayer iOS SDK on an M1 mac",s={id:"faq/how-to-use-theoplayer-ios-sdk-on-m1",title:"How to use THEOplayer iOS SDK on an M1 mac",description:"The iPhone simulators on M1 MacBooks use the arm64 architecture, therefore any binaries linked during compilation time that do not support the architecture will result in compilation error. Many third party frameworks lack the support for this particular architecture, and this causes unfortunate limitations for development.",source:"@site/theoplayer_versioned_docs/version-v4/faq/74-how-to-use-theoplayer-ios-sdk-on-m1.md",sourceDirName:"faq",slug:"/faq/how-to-use-theoplayer-ios-sdk-on-m1",permalink:"/documentation/pr-preview/pr-142/theoplayer/v4/faq/how-to-use-theoplayer-ios-sdk-on-m1",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/74-how-to-use-theoplayer-ios-sdk-on-m1.md",tags:[],version:"v4",sidebarPosition:74,frontMatter:{},sidebar:"faq",previous:{title:"How to use the Media Session API",permalink:"/documentation/pr-preview/pr-142/theoplayer/v4/faq/how-to-use-media-session-api"},next:{title:"Widevine CDM deprecation notice for old browser versions",permalink:"/documentation/pr-preview/pr-142/theoplayer/v4/faq/old-widevine-cdm-deprecation-notice"}},h={},l=[{value:"What are the features that lack arm64 simulator support?",id:"what-are-the-features-that-lack-arm64-simulator-support",level:4},{value:"What is the alternative solution?",id:"what-is-the-alternative-solution",level:4},{value:"What about the future?",id:"what-about-the-future",level:4}];function c(e){const t={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-to-use-theoplayer-ios-sdk-on-an-m1-mac",children:"How to use THEOplayer iOS SDK on an M1 mac"})}),"\n",(0,r.jsx)(t.p,{children:"The iPhone simulators on M1 MacBooks use the arm64 architecture, therefore any binaries linked during compilation time that do not support the architecture will result in compilation error. Many third party frameworks lack the support for this particular architecture, and this causes unfortunate limitations for development."}),"\n",(0,r.jsxs)(t.p,{children:["Previous to writing this article (specifically with THEOplayer ",(0,r.jsx)(t.strong,{children:"versions 3.0.0 and below"}),"), THEOplayer depended on few of these frameworks that lack the arm64 architecture, which in turn resulted in deciding to omit it. As of ",(0,r.jsx)(t.strong,{children:"version 3.1.0"})," and in part of our effort to optimize our modularization, the THEOplayer framework will be delivered with the arm64 architecture support as long as no feature is included that adds a dependency to an unsupported third party framework."]}),"\n",(0,r.jsx)(t.admonition,{type:"important",children:(0,r.jsxs)(t.p,{children:["To include the new architecture, import the ",(0,r.jsx)(t.strong,{children:".xcframework"})," package into your project instead of the ",(0,r.jsx)(t.strong,{children:".framework"})," package. The ",(0,r.jsx)(t.strong,{children:".framework"})," is a fat framework and cannot include two arm64 architectures for device and simulator."]})}),"\n",(0,r.jsx)(t.h4,{id:"what-are-the-features-that-lack-arm64-simulator-support",children:"What are the features that lack arm64 simulator support?"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Google IMA / Google DAI"}),"\nThe Google IMA & DAI features rely on the ",(0,r.jsx)(t.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/download",children:"GoogleInteractiveMediaAds"})," framework which lacks the architecture in its fat framework binary. You can follow developer requests and updates from the IMA team in this ",(0,r.jsx)(t.a,{href:"https://groups.google.com/g/ima-sdk/c/y-5OHtAQ5rk?pli=1",children:"Google Groups conversation"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Google Cast / Chromecast"}),"\nThe Chromecast feature relies on the ",(0,r.jsx)(t.a,{href:"https://developers.google.com/cast/docs/ios_sender#manual_setup",children:"GoogleCast"})," framework which lacks the architecture in its fat framework binary."]}),"\n",(0,r.jsxs)(t.p,{children:["Other features that do not support the architecture are: ",(0,r.jsx)(t.strong,{children:"Agama, Moat & Yospace."})]}),"\n",(0,r.jsx)(t.h4,{id:"what-is-the-alternative-solution",children:"What is the alternative solution?"}),"\n",(0,r.jsxs)(t.p,{children:["In case you require one of the features in the section above to be included in your THEOplayer iOS SDK, then the suggested temporary solution is to use Apple's ",(0,r.jsx)(t.a,{href:"https://support.apple.com/en-us/HT211861",children:"Rosetta"})," to be able to run the framework on an iPhone simulator on an M1 mac. Rosetta will launch the simulator in ",(0,r.jsx)(t.strong,{children:"x86_64"})," architecture instead of ",(0,r.jsx)(t.strong,{children:"arm64"})," and the framework will successfully be linked during compilation."]}),"\n",(0,r.jsx)(t.h4,{id:"what-about-the-future",children:"What about the future?"}),"\n",(0,r.jsxs)(t.p,{children:["Whenever a third party dependency adds support to the architecture, we will address the situation and update our SDK framework. To stay up to date with changes related to our iOS SDK, check out our ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-142/theoplayer/v4/changelog",children:"changelog"})," where we post new updates and features with every new release."]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>s});var r=o(96540);const a={},n=r.createContext(a);function i(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);