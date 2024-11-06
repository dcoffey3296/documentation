"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85544],{35051:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(74848),r=t(28453);const s={slug:"/getting-started/frameworks/react-native/ads"},a="Advertisements",o={id:"external/react-native-theoplayer/doc/ads",title:"Advertisements",description:"Overview",source:"@site/theoplayer_versioned_docs/version-v6/external/react-native-theoplayer/doc/ads.md",sourceDirName:"external/react-native-theoplayer/doc",slug:"/getting-started/frameworks/react-native/ads",permalink:"/documentation/pr-preview/pr-153/theoplayer/v6/getting-started/frameworks/react-native/ads",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/ads.md",tags:[],version:"v6",frontMatter:{slug:"/getting-started/frameworks/react-native/ads"},sidebar:"react-native",previous:{title:"Adaptive Bitrate (ABR)",permalink:"/documentation/pr-preview/pr-153/theoplayer/v6/getting-started/frameworks/react-native/abr"},next:{title:"Audio Control Management on Android",permalink:"/documentation/pr-preview/pr-153/theoplayer/v6/getting-started/frameworks/react-native/audio-control"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Getting started with Google IMA",id:"getting-started-with-google-ima",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Source description",id:"source-description",level:3},{value:"Getting started with Google DAI",id:"getting-started-with-google-dai",level:2},{value:"Source description",id:"source-description-1",level:3},{value:"Using the Ads API",id:"using-the-ads-api",level:2},{value:"Subscribing to ad events",id:"subscribing-to-ad-events",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"advertisements",children:"Advertisements"})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["A good starting point to get acquainted with THEOplayer's advertising features\nis THEOplayer's ",(0,i.jsx)(n.a,{href:"https://www.theoplayer.com/docs/theoplayer/knowledge-base/advertisement/user-guide/",children:"Knowledge Base"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["While THEOplayer supports a wide range of\ndifferent ",(0,i.jsx)(n.a,{href:"https://www.theoplayer.com/docs/theoplayer/knowledge-base/advertisement/user-guide/#an-overview-of-theoplayers-different-ad-types",children:"ad types"}),",\n",(0,i.jsx)(n.code,{children:"THEOplayerView"})," currently supports:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["client-side ad insertion (CSAI) through ",(0,i.jsx)(n.a,{href:"#getting-started-with-google-ima",children:"Google IMA"})]}),"\n",(0,i.jsxs)(n.li,{children:["server-side ad insertion (SSAI) through ",(0,i.jsx)(n.a,{href:"#getting-started-with-google-dai",children:"Google DAI"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In the next section we discuss how to integrate them on each platform."}),"\n",(0,i.jsxs)(n.p,{children:["Additional functionality, such as scheduling ads at runtime, is provided by the ",(0,i.jsx)(n.a,{href:"#using-the-ads-api",children:"ads API"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The final section describes how to subscribe and add custom logic to ",(0,i.jsx)(n.a,{href:"#subscribing-to-ad-events",children:"ad events"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started-with-google-ima",children:"Getting started with Google IMA"}),"\n",(0,i.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"First enable Google IMA support, which requires a different approach on each platform."}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Android/AndroidTV"}),(0,i.jsxs)(n.p,{children:["The Android SDK is modular-based, so enabling Google IMA is limited to including\nthe ima extension in gradle by setting this flag in your ",(0,i.jsx)(n.code,{children:"gradle.properties"}),":"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# Enable THEOplayer Extensions (default: disabled)\nTHEOplayer_extensionGoogleIMA = true\n"})})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"iOS/tvOS"}),(0,i.jsxs)(n.p,{children:['To enable Google IMA you can add the "GOOGLE_IMA" ',(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v6/getting-started/frameworks/react-native/creating-minimal-app#getting-started-on-ios-and-tvos",children:"feature flag"})," to react-native-theoplayer.json (or theoplayer-config.json)"]})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Web"}),(0,i.jsxs)(n.p,{children:["To enable Google IMA on web, it suffices to add this script in the web page's header section, as shown\nin the example app's ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/develop/example/web/public/index.html",children:"index.html"}),":"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'\n<head>\n  \x3c!-- Optionally load Google IMA/DAI libraries --\x3e\n  <script type="text/javascript" src="//imasdk.googleapis.com/js/sdkloader/ima3.js"><\/script>\n</head>\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"source-description",children:"Source description"}),"\n",(0,i.jsxs)(n.p,{children:["When providing the player with a source that includes a list of ads, make sure to\nset the ",(0,i.jsx)(n.code,{children:"integration"})," property to ",(0,i.jsx)(n.code,{children:'"google-ima"'}),", as shown in one of the sources of the example app:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const imaSource = {\n  sources: [\n    {\n      src: 'https://cdn.theoplayer.com/video/dash/webvtt-embedded-in-isobmff/Manifest.mpd',\n      type: 'application/dash+xml',\n    },\n  ],\n  ads: [\n    {\n      integration: 'google-ima' as AdIntegrationKind,\n      sources: {\n        src: 'https://cdn.theoplayer.com/demos/ads/vast/dfp-preroll-no-skip.xml',\n      },\n    },\n  ],\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The API's ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/source/ads/Ads.ts",children:(0,i.jsx)(n.code,{children:"AdSource"})})," description provides additional information on\nthe configurable properties."]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started-with-google-dai",children:"Getting started with Google DAI"}),"\n",(0,i.jsx)(n.p,{children:"First enable Google DAI support, which requires a different approach on each platform."}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Android/AndroidTV"}),(0,i.jsxs)(n.p,{children:["The Android SDK is modular-based, so enabling Google DAI is limited to including\nthe dai extension in gradle by enabling this flag in your ",(0,i.jsx)(n.code,{children:"gradle.properties"}),":"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# Enable THEOplayer Extensions (default: disabled)\nTHEOplayer_extensionGoogleDAI = true\n"})}),(0,i.jsx)(n.p,{children:"Note that DAI support for Android is available as of SDK version 4.3.0."})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"iOS"}),(0,i.jsxs)(n.p,{children:['Google DAI is part of the Google IMA SDK. To enable it, you add the "GOOGLE_IMA" ',(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v6/getting-started/frameworks/react-native/creating-minimal-app#getting-started-on-ios-and-tvos",children:"feature flag"})," to react-native-theoplayer.json (or theoplayer-config.json)"]})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Web"}),(0,i.jsxs)(n.p,{children:["To enable Google DAI on web, it suffices to add this script in the web page's header section, as shown\nin the example app's ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/develop/example/web/public/index.html",children:"index.html"}),":"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'\n<head>\n  \x3c!-- Optionally load Google IMA/DAI libraries --\x3e\n  <script type="text/javascript" src="//imasdk.googleapis.com/js/sdkloader/ima3_dai.js"><\/script>\n</head>\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"source-description-1",children:"Source description"}),"\n",(0,i.jsxs)(n.p,{children:["Providing a Google DAI source description to the player requires providing an ",(0,i.jsx)(n.code,{children:"ssai"})," object and\nspecifying ",(0,i.jsx)(n.code,{children:'"google-dai"'})," as integration type:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const daiSource = {\n  sources: {\n    ssai: {\n      integration: 'google-dai',\n      availabilityType: 'vod',\n      contentSourceID: '2528370',\n      videoID: 'tears-of-steel',\n    } as GoogleDAIVodConfiguration,\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A full description of the available source properties can be found in the\n",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/source/ads/ssai/GoogleDAIConfiguration.ts",children:"API"})," definition."]}),"\n",(0,i.jsx)(n.h2,{id:"using-the-ads-api",children:"Using the Ads API"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/player/THEOplayer.ts",children:"THEOplayer"})," provides an ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/ads/AdsAPI.ts",children:"AdsAPI"})," that enables additional\nfeatures\nsuch as:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Querying whether an ad is currently playing;"}),"\n",(0,i.jsx)(n.li,{children:"Skipping the current ad (if possible);"}),"\n",(0,i.jsx)(n.li,{children:"Getting the ad break that is currently playing;"}),"\n",(0,i.jsx)(n.li,{children:"Getting a list of ads that are currently playing (only available for web);"}),"\n",(0,i.jsx)(n.li,{children:"Getting a list of ad breaks that are still scheduled. Once an ad break starts, it is removed from the list;"}),"\n",(0,i.jsx)(n.li,{children:"Manually scheduling a client-side ad."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"THEOplayer"})," is provided with a callback on the ",(0,i.jsx)(n.code,{children:"THEOplayerView"})," component:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const onPlayerReady = (player: THEOplayer) => {\n  this.player = player;\n}\n\n<THEOplayerView onPlayerReady={onPlayerReady}/>\n"})}),"\n",(0,i.jsx)(n.p,{children:"After which the AdsAPI can be used:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const isPlayingAd = () => {\n  return this.player.ads.playing();\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Google DAI has its own ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/ads/GoogleDai.ts",children:"API"}),", which includes DAI-specific features, such as\nconverting time stamps between stream time and content time, and manipulating the ",(0,i.jsx)(n.code,{children:"snapback"})," flag that prevents\nusers from seeking across ad breaks."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Convert timestamps using the DAI ads api.\nconst streamTimeForContentTime = (contentTime: number): Promise<number> | undefined => {\n  return this.player.ads.dai?.streamTimeForContentTime(contentTime);\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"subscribing-to-ad-events",children:"Subscribing to ad events"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/player/THEOplayer.ts",children:"THEOplayer"})," allows you to subscribe to ad events:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const onAdEvent = (event: AdEvent) => {\n  console.log(event)\n}\nplayer.addEventListener(PlayerEventType.AD_EVENT, onAdEvent);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/event/AdEvent.ts",children:"AdEvent"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/ads/Ad.ts",children:"Ad"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/ads/AdBreak.ts",children:"AdBreak"}),"  for\nmore information."]}),"\n",(0,i.jsx)(n.p,{children:"Note that the availability of the events being dispatched depends on the platform."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);