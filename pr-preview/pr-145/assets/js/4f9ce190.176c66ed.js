"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92032],{17165:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>a});var r=i(74848),s=i(28453);const n={},d="Prebid.js",o={id:"how-to-guides/ads/prebidjs",title:"Prebid.js",description:"This article explains how you can connect THEOplayer with Prebid.js.",source:"@site/theoplayer_versioned_docs/version-v4/how-to-guides/01-ads/09-prebidjs.md",sourceDirName:"how-to-guides/01-ads",slug:"/how-to-guides/ads/prebidjs",permalink:"/documentation/pr-preview/pr-145/theoplayer/v4/how-to-guides/ads/prebidjs",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/01-ads/09-prebidjs.md",tags:[],version:"v4",sidebarPosition:9,frontMatter:{},sidebar:"roku",previous:{title:"Google Dynamic Ad Insertion (DAI)",permalink:"/documentation/pr-preview/pr-145/theoplayer/v4/how-to-guides/ads/google-dai"},next:{title:"Google IMA",permalink:"/documentation/pr-preview/pr-145/theoplayer/v4/how-to-guides/ads/google-ima"}},l={},a=[{value:"SDKs",id:"sdks",level:2},{value:"Connecting Prebid.js and THEOplayer",id:"connecting-prebidjs-and-theoplayer",level:2},{value:"Code Examples",id:"code-examples",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Resources",id:"resources",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"prebidjs",children:"Prebid.js"})}),"\n",(0,r.jsx)(t.p,{children:"This article explains how you can connect THEOplayer with Prebid.js.\nPrebid.js is an open-source header bidding solution.\nOn the client-side, you can request bids from multiple ad networks, take a winning bid and select its associated advertisement.\nYou want to configure and play this selected advertisement in THEOplayer."}),"\n",(0,r.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"N/A was selected because Prebid.js is a separate library.\nYou can connect Prebid.js with THEOplayer on any platform that supports both Prebid.js and THEOplayer."}),"\n",(0,r.jsx)(t.h2,{id:"connecting-prebidjs-and-theoplayer",children:"Connecting Prebid.js and THEOplayer"}),"\n",(0,r.jsx)(t.p,{children:"Prebid.js allows you to request bids.\nThis request will respond with bids through a callback function.\nIn this callback function, you have to select a winning bid, extract the ad tag URL.\nYou can configure this URL as THEOplayer's ad source."}),"\n",(0,r.jsx)(t.h3,{id:"code-examples",children:"Code Examples"}),"\n",(0,r.jsxs)(t.p,{children:["The code example below is based on the documentation offered by Prebid.org at ",(0,r.jsx)(t.a,{href:"http://prebid.org/dev-docs/examples/instream-banner-mix.html",children:"http://prebid.org/dev-docs/examples/instream-banner-mix.html"}),"."]}),"\n",(0,r.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsxs)(t.p,{children:["The sample application at ",(0,r.jsx)(t.a,{href:"https://jsfiddle.net/thijsl/hjcegyuw/",children:"https://jsfiddle.net/thijsl/hjcegyuw/"})," is an example of implementing Prebid.js on top of the THEOplayer Web SDK."]}),"\n",(0,r.jsxs)(t.p,{children:['The example above schedules advertisements as pre-rolls (or mid-rolls or post-rolls).\nYou can also dynamically schedule advertisements with the Ads API, as explained in "',(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-145/theoplayer/v4/how-to-guides/ads/how-to-set-up-vast-and-vmap",children:"How to set up VAST and VMAP"}),'".']}),"\n",(0,r.jsx)(t.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,r.jsxs)(t.p,{children:["Refer to ",(0,r.jsx)(t.a,{href:"http://prebid.org/prebid-mobile/pbm-api/android/code-integration-android.html",children:"http://prebid.org/prebid-mobile/pbm-api/android/code-integration-android.html"}),".\nThe same THEOplayer API to configure advertisements is available on the Android SDK."]}),"\n",(0,r.jsx)(t.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,r.jsxs)(t.p,{children:["Refer to ",(0,r.jsx)(t.a,{href:"http://prebid.org/prebid-mobile/pbm-api/ios/code-integration-ios.html",children:"http://prebid.org/prebid-mobile/pbm-api/ios/code-integration-ios.html"}),".\nThe same THEOplayer API to configure advertisements is available on the iOS SDK."]}),"\n",(0,r.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsx)(t.p,{children:"The following resources provide more information:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://prebid.org/overview/intro.html",children:"https://prebid.org/overview/intro.html"}),": What is Prebid?"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://prebid.org/prebid-video/video-overview.html",children:"https://prebid.org/prebid-video/video-overview.html"}),": Prebid.js for Video Overview"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://prebid.org/prebid-video/video-getting-started.html",children:"https://prebid.org/prebid-video/video-getting-started.html"}),": Getting started with Prebid.js for Video"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/prebid/Prebid.js/tree/57c666626c269cdabb9aac6944a889f2b944f0c0/modules",children:"https://github.com/prebid/Prebid.js/tree/57c666626c269cdabb9aac6944a889f2b944f0c0/modules"}),": Adapters on Github."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/prebid/Prebid.js/tree/master/modules",children:"https://github.com/prebid/Prebid.js/tree/master/modules"}),": Information on how to connect with different bidders."]}),"\n",(0,r.jsxs)(t.li,{children:["Some adapters might provide test data. (e.g. ",(0,r.jsx)(t.a,{href:"https://github.com/prebid/Prebid.js/blob/57c666626c269cdabb9aac6944a889f2b944f0c0/modules/spotxBidAdapter.md",children:"https://github.com/prebid/Prebid.js/blob/57c666626c269cdabb9aac6944a889f2b944f0c0/modules/spotxBidAdapter.md"}),")"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>o});var r=i(96540);const s={},n=r.createContext(s);function d(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);