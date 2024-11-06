"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95530],{14962:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var s=d(74848),i=d(28453);const t={},a="How to subscribe to ad events",r={id:"how-to-guides/ads/how-to-subscribe-to-ad-events",title:"How to subscribe to ad events",description:"When building a custom UI, or when logging events to an analytics service,",source:"@site/theoplayer_versioned_docs/version-v6/how-to-guides/01-ads/11-how-to-subscribe-to-ad-events.md",sourceDirName:"how-to-guides/01-ads",slug:"/how-to-guides/ads/how-to-subscribe-to-ad-events",permalink:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/how-to-subscribe-to-ad-events",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/01-ads/11-how-to-subscribe-to-ad-events.md",tags:[],version:"v6",sidebarPosition:11,frontMatter:{},sidebar:"roku",previous:{title:"Google IMA",permalink:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/google-ima"},next:{title:"MediaTailor",permalink:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/mediatailor"}},o={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Subscribing to an event",id:"subscribing-to-an-event",level:2},{value:"Client-side ads",id:"client-side-ads",level:3},{value:"Web SDK",id:"web-sdk",level:4},{value:"Android SDK",id:"android-sdk",level:4},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:4},{value:"Server-side ads",id:"server-side-ads",level:3},{value:"Ad begin and end",id:"ad-begin-and-end",level:2},{value:"Client-side ads",id:"client-side-ads-1",level:3},{value:"Web SDK",id:"web-sdk-1",level:4},{value:"Android SDK",id:"android-sdk-1",level:4},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-1",level:4},{value:"Server-side ads",id:"server-side-ads-1",level:3},{value:"Ad error",id:"ad-error",level:2},{value:"Client-side ads",id:"client-side-ads-2",level:3},{value:"Web SDK",id:"web-sdk-2",level:4},{value:"Android SDK",id:"android-sdk-2",level:4},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-2",level:4},{value:"Server-side ads",id:"server-side-ads-2",level:3},{value:"Ad block detection",id:"ad-block-detection",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"how-to-subscribe-to-ad-events",children:"How to subscribe to ad events"})}),"\n",(0,s.jsx)(n.p,{children:"When building a custom UI, or when logging events to an analytics service,\napp developers often need to be able to listen (and react) to ad events.\nFor example, if an ad break starts, they want to draw a countdown on top of their UI.\nAlternatively, when an ad error occurs, they want to log this to an analytics server."}),"\n",(0,s.jsx)(n.p,{children:"This article explains how you can programmatically subscribe to ad-related events across different SDKs."}),"\n",(0,s.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"No"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"subscribing-to-an-event",children:"Subscribing to an event"}),"\n",(0,s.jsx)(n.p,{children:"This subsection explains how you detect ad-related events.\nThe other subsections zoom in on particular use-cases, such as detecting the beginning and end of an ad."}),"\n",(0,s.jsx)(n.h3,{id:"client-side-ads",children:"Client-side ads"}),"\n",(0,s.jsxs)(n.p,{children:["If you are scheduling ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/how-to-set-up-vast-and-vmap",children:"client-side advertisements"}),",\nthen you use the ",(0,s.jsx)(n.code,{children:"Ads"})," interface to detect ad events throughout the Web, Android and iOS SDK."]}),"\n",(0,s.jsx)(n.h4,{id:"web-sdk",children:"Web SDK"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Player"})," API exposes an ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/classes/ChromelessPlayer.html#ads",children:(0,s.jsx)(n.code,{children:"ads"})})," property which belongs to the ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/Ads.html",children:(0,s.jsx)(n.code,{children:"Ads"})})," interface.\nBecause this ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/Ads.html",children:(0,s.jsx)(n.code,{children:"Ads"})})," interface inherits from ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/AdsEventMap.html",children:(0,s.jsx)(n.code,{children:"EventDispatcher<AdsEventMap>"})}),",\nyou can leverage event listeners in this interface."]}),"\n",(0,s.jsxs)(n.p,{children:["The ad-related events are documented in ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/AdsEventMap.html",children:(0,s.jsx)(n.code,{children:"AdsEventMap"})}),".\nTo subscribe to an event, you select an event from this page, use the ",(0,s.jsx)(n.code,{children:"Ads"})," interface,\ncall the ",(0,s.jsx)(n.code,{children:"addEventListener"})," method, and set the event as the first parameter, and the callback as the second parameter."]}),"\n",(0,s.jsx)(n.p,{children:"For example, if you want to track the start of an ad break, you could use the following snippet:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'player.ads.addEventListener("adbreakbegin", function (event) {\n  console.log(event);\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"The following snippet should log most events to the console."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'player.ads.addEventListener(\n  [\n    "adbegin",\n    "adbreakbegin",\n    "adbreakchange",\n    "adbreakend",\n    "adbuffering",\n    "addad",\n    "addadbreak",\n    "adend",\n    "aderror",\n    "adfirstquartile",\n    "adimpression",\n    "adloaded",\n    "admetadata",\n    "admidpoint",\n    "adskip",\n    "adthirdquartile",\n    "removeadbreak",\n    "updatead",\n    "updateadbreak"\n  ],\n  console.log\n);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Note that when dealing with client-side advertisements, you have different types of integrations, as explained at ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/how-to-set-up-vast-and-vmap",children:"How to setup VAST and VMAP"}),".\nThe impact of this is that some events are not available throughout all integrations."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you schedule ",(0,s.jsx)(n.code,{children:"https://cdn.theoplayer.com/demos/preroll.xml"}),', which is a single linear VAST ad, through the "Google IMA integration" at ',(0,s.jsx)(n.a,{href:"https://demo.theoplayer.com/advertisement-tester",children:"https://demo.theoplayer.com/advertisement-tester"}),", the above snippet will trigger the following events:"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"addad"}),", ",(0,s.jsx)(n.code,{children:"updateadbreak"}),", ",(0,s.jsx)(n.code,{children:"updatead"}),", ",(0,s.jsx)(n.code,{children:"adloaded"}),", ",(0,s.jsx)(n.code,{children:"adbreakbegin"}),", ",(0,s.jsx)(n.code,{children:"adbegin"}),", ",(0,s.jsx)(n.code,{children:"adimpression"}),", ",(0,s.jsx)(n.code,{children:"adfirstquartile"}),", ",(0,s.jsx)(n.code,{children:"admidpoint"}),", ",(0,s.jsx)(n.code,{children:"adthirdquartile"}),", ",(0,s.jsx)(n.code,{children:"adend"}),", ",(0,s.jsx)(n.code,{children:"adbreakend"}),", ",(0,s.jsx)(n.code,{children:"removeadbreak"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'When you do the same for the "default THEOplayer integration", you get the following events:'}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"adloaded"}),",",(0,s.jsx)(n.code,{children:"adbreakchange"}),",",(0,s.jsx)(n.code,{children:"adbreakbegin"}),",",(0,s.jsx)(n.code,{children:"adbegin"}),",",(0,s.jsx)(n.code,{children:"adend"}),",",(0,s.jsx)(n.code,{children:"adbreakend"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"android-sdk",children:"Android SDK"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Player"})," API exposes an ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/player/Player.html#getAds--",children:(0,s.jsx)(n.code,{children:"getAds()"})})," method which belongs to the ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/ads/Ads.html",children:(0,s.jsx)(n.code,{children:"Ads"})})," interface.\nBecause this ",(0,s.jsx)(n.code,{children:"Ads"})," interface inherits from ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/event/ads/AdEvent.html",children:(0,s.jsx)(n.code,{children:"EventDispatcher<AdEvent>"})}),",\nyou can leverage event listeners in this interface."]}),"\n",(0,s.jsx)(n.p,{children:"The available ad events are different between the Android SDK and the Legacy Android SDK (4.12.x):"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The Android SDK (currently) only allows ad playback through ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/google-ima#android-sdk",children:"Google IMA"}),".\nThe available events are documented in ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaAdEventType.html",children:(0,s.jsx)(n.code,{children:"GoogleImaAdEventType"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The Legacy Android SDK (4.12.x) events are documented in ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/event/ads/AdEvent.html",children:(0,s.jsx)(n.code,{children:"AdEvent"})})," and ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/event/ads/AdsEventTypes.html",children:(0,s.jsx)(n.code,{children:"AdsEventTypes"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To subscribe to an event, you select an appropriate ",(0,s.jsx)(n.code,{children:"GoogleImaAdEventType"})," or ",(0,s.jsx)(n.code,{children:"AdsEventType"}),", use the ",(0,s.jsx)(n.code,{children:"Ads"})," interface,\ncall the ",(0,s.jsx)(n.code,{children:"addEventListener"})," method, and set the event as the first parameter, and the callback as the second parameter."]}),"\n",(0,s.jsx)(n.p,{children:"For example, if you want to track the start of an ad break with the Android SDK, you could use the following snippet:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'theoPlayer.getAds().addEventListener(GoogleImaAdEventType.AD_BREAK_STARTED, googleImaAdEvent -> Log.d("ADS", "AD_BREAK_STARTED"));\n'})}),"\n",(0,s.jsx)(n.p,{children:"On the other hand, if you want to track the start of an ad break with the Legacy Android SDK (4.12.x), you could use the following snippet:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'player.getAds().addEventListener(AdsEventTypes.AD_BREAK_BEGIN, event -> Log.i(TAG, "Event: AD_BEGIN, ad=" + event.getAdBreak()));\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Note: code samples are available on our ",(0,s.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-android-sdk/blob/master/Basic-Ads/app/src/main/java/com/theoplayer/sample/ads/basic/PlayerActivity.java",children:"samples-android-sdk"})," Github repository."]}),"\n",(0,s.jsx)(n.h4,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Player"})," API exposes an ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Classes/THEOplayer.html#/s:13THEOplayerSDK0A0C3adsAA3Ads_pvp",children:(0,s.jsx)(n.code,{children:"ads"})})," property which belongs to the ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Protocols/Ads.html",children:(0,s.jsx)(n.code,{children:"Ads"})})," interface.\nBecause this ",(0,s.jsx)(n.code,{children:"Ads"})," interface inherits from ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Ads%20Events.html",children:(0,s.jsx)(n.code,{children:"EventDispatcher"})}),",\nyou can leverage event listeners in this interface."]}),"\n",(0,s.jsxs)(n.p,{children:["The ad-related events are documented in ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Ads%20Events.html",children:"Ads Events"}),".\nTo subscribe to an event, you select an event from this page, use the ",(0,s.jsx)(n.code,{children:"Ads"})," interface,\ncall the ",(0,s.jsx)(n.code,{children:"addEventListener"})," method, and set the event as the first parameter, and the callback as the second parameter."]}),"\n",(0,s.jsx)(n.p,{children:"For example, if you want to track the start of an ad break, you could use the following snippet:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"player.ads.addEventListener(type: AdsEventTypes.AD_BREAK_BEGIN) { (event) in\n    print(event)\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note: code samples are available on our ",(0,s.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/blob/master/Basic-Ads/Basic_Ads/PlayerViewController.swift",children:"samples-ios-sdk"})," Github repository."]}),"\n",(0,s.jsx)(n.h3,{id:"server-side-ads",children:"Server-side ads"}),"\n",(0,s.jsxs)(n.p,{children:["If you're scheduling server-side ads, you might need to use a different interface than the ",(0,s.jsx)(n.code,{children:"Ads"})," interface which you use when scheduling client-side ads."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/google-ima",children:"Google DAI"}),": if you're using Google DAI, you can use the same API as the one for client-side ads, as described in the sections above."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/yospace",children:"Yospace"}),": if you're using Yospace, you must use the Yospace interface.\nYou can read more about detecting ad-related events with Yospace at our ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/yospace#integrating-yospace",children:"Yospace documentation"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/ads",children:"Verizon Media"}),": if you're using Verizon Media, you must use the Verizon interface.\nYou can read more about detecting ad-related events with Verizon Media at our ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/ads#verizon-media-ads-api",children:"Verizon Media documentation"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you're building a custom server-side ad insertion solution, you might be interested in using our ",(0,s.jsx)(n.code,{children:"TextTrack"})," API to detect id3/emsg/EventStream/EXT-X-DATERANGE cues,\nand the ",(0,s.jsx)(n.code,{children:"timeupdate"})," event in the ",(0,s.jsx)(n.code,{children:"Player"})," interface to determine the current playhead position."]}),"\n",(0,s.jsx)(n.h2,{id:"ad-begin-and-end",children:"Ad begin and end"}),"\n",(0,s.jsx)(n.p,{children:"Detecting the start and stop of ad breaks and individual ad pods is a common requirement.\nThe THEOplayer API expose event listeners which allow applications to hook into these events."}),"\n",(0,s.jsx)(n.h3,{id:"client-side-ads-1",children:"Client-side ads"}),"\n",(0,s.jsxs)(n.p,{children:["If you are scheduling ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/how-to-set-up-vast-and-vmap",children:"client-side advertisements"}),",\nthen you use the ",(0,s.jsx)(n.code,{children:"Ads"})," interface to detect the start and stop of ads."]}),"\n",(0,s.jsx)(n.h4,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,s.jsxs)(n.p,{children:["This use-case is an application of ",(0,s.jsx)(n.a,{href:"#subscribing-to-an-event",children:"Subscribing to an event"}),", and relates to the following events:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"adbegin"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"adbreakbegin"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"adbreakend"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"adend"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For example, the following snippet would trigger the callback when an ad break begins:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'player.ads.addEventListener("adbreakbegin", function (event) {\n  console.log(event);\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can swap ",(0,s.jsx)(n.code,{children:"adbreakbegin"})," for the other events, or supply an array instead:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'player.ads.addEventListener(\n  ["adbegin", "adbreakbegin", "adbreakend", "adend"],\n  function (event) {\n    console.log(event);\n  }\n);\n'})}),"\n",(0,s.jsx)(n.h4,{id:"android-sdk-1",children:"Android SDK"}),"\n",(0,s.jsxs)(n.p,{children:["This use-case is an application of ",(0,s.jsx)(n.a,{href:"#subscribing-to-an-event",children:"Subscribing to an event"}),", and relates to the following events:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"adbegin"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"adbreakbegin"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"adbreakend"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"adend"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'player.getAds().addEventListener(AdsEventTypes.AD_BREAK_BEGIN, event -> Log.i(TAG, "Event: AD_BREAK_BEGIN, ad=" + event.getAdBreak()));\n'})}),"\n",(0,s.jsx)(n.h4,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-1",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,s.jsxs)(n.p,{children:["This use-case is an application of ",(0,s.jsx)(n.a,{href:"#subscribing-to-an-event",children:"Subscribing to an event"}),", and relates to the following events:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"adbegin"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"adbreakbegin"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"adbreakend"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"adend"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"player.ads.addEventListener(type: AdsEventTypes.AD_BREAK_BEGIN) { (event) in\n    print(event)\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"server-side-ads-1",children:"Server-side ads"}),"\n",(0,s.jsxs)(n.p,{children:["If you're scheduling server-side ads, you might need to use a different interface than the ",(0,s.jsx)(n.code,{children:"Ads"})," interface which you use when scheduling client-side ads."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/google-ima",children:"Google DAI"}),": if you're using Google DAI, you can use the same API as the one for client-side ads, as described in the sections above."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/yospace",children:"Yospace"}),": if you're using Yospace, you must use the Yospace interface.\nYou can read more about detecting ad-related events with Yospace at our ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/yospace#integrating-yospace",children:"Yospace documentation"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/ads",children:"Verizon Media"}),": if you're using Verizon Media, you must use the Verizon interface.\nYou can read more about detecting ad-related events with Verizon Media at our ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/ads#verizon-media-ads-api",children:"Verizon Media documentation"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you're building a custom server-side ad insertion solution, you might be interested in using our ",(0,s.jsx)(n.code,{children:"TextTrack"})," API to detect id3/emsg/EventStream/EXT-X-DATERANGE cues,\nand the ",(0,s.jsx)(n.code,{children:"timeupdate"})," event in the ",(0,s.jsx)(n.code,{children:"Player"})," interface to determine the current playhead position."]}),"\n",(0,s.jsx)(n.h2,{id:"ad-error",children:"Ad error"}),"\n",(0,s.jsx)(n.p,{children:'Ad error events might be triggered when an ad blocker is active, or when an "empty" ad is returned.\nAs an app developer, you might want to detect this, and possibly react to it.'}),"\n",(0,s.jsx)(n.h3,{id:"client-side-ads-2",children:"Client-side ads"}),"\n",(0,s.jsxs)(n.p,{children:["If you are scheduling ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/how-to-set-up-vast-and-vmap",children:"client-side advertisements"}),",\nthen you use the ",(0,s.jsx)(n.code,{children:"Ads"})," interface to detect the ad errors."]}),"\n",(0,s.jsx)(n.h4,{id:"web-sdk-2",children:"Web SDK"}),"\n",(0,s.jsxs)(n.p,{children:["This use-case is an application of ",(0,s.jsx)(n.a,{href:"#subscribing-to-an-event",children:"Subscribing to an event"}),", specifically the ",(0,s.jsx)(n.code,{children:"aderror"})," event."]}),"\n",(0,s.jsx)(n.p,{children:"The following snippet would trigger the callback when an ad error occurs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'player.ads.addEventListener("aderror", function (event) {\n  console.log(event);\n});\n'})}),"\n",(0,s.jsx)(n.h4,{id:"android-sdk-2",children:"Android SDK"}),"\n",(0,s.jsxs)(n.p,{children:["This use-case is an application of ",(0,s.jsx)(n.a,{href:"#subscribing-to-an-event",children:"Subscribing to an event"}),", specifically the ",(0,s.jsx)(n.code,{children:"aderror"})," event."]}),"\n",(0,s.jsx)(n.p,{children:"The following snippet would trigger the callback when an ad error occurs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'player.getAds().addEventListener(AdsEventTypes.AD_ERROR, event -> Log.i(TAG, "Event: AD_ERROR, ad=" + event.getError()));\n'})}),"\n",(0,s.jsx)(n.h4,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-2",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,s.jsxs)(n.p,{children:["This use-case is an application of ",(0,s.jsx)(n.a,{href:"#subscribing-to-an-event",children:"Subscribing to an event"}),", specifically the ",(0,s.jsx)(n.code,{children:"aderror"})," event."]}),"\n",(0,s.jsx)(n.p,{children:"The following snippet would trigger the callback when an ad error occurs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"player.ads.addEventListener(type: AdsEventTypes.AD_ERROR) { (event) in\n    print(event)\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"server-side-ads-2",children:"Server-side ads"}),"\n",(0,s.jsxs)(n.p,{children:["If you're scheduling server-side ads, you might need to use a different interface than the ",(0,s.jsx)(n.code,{children:"Ads"})," interface which you use when scheduling client-side ads."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/google-ima",children:"Google DAI"}),": if you're using Google DAI, you can use the same API as the one for client-side ads, as described in the sections above."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/yospace",children:"Yospace"}),": if you're using Yospace, you must use the Yospace interface.\nYou can read more about detecting ad-related events with Yospace at our ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/yospace#integrating-yospace",children:"Yospace documentation"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/ads",children:"Verizon Media"}),": if you're using Verizon Media, you must use the Verizon interface.\nYou can read more about detecting ad-related events with Verizon Media at our ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/ads#verizon-media-ads-api",children:"Verizon Media documentation"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you're building a custom server-side ad insertion solution, you might be interested in using our ",(0,s.jsx)(n.code,{children:"TextTrack"})," API to detect id3/emsg/EventStream/EXT-X-DATERANGE cues,\nand the ",(0,s.jsx)(n.code,{children:"timeupdate"})," event in the ",(0,s.jsx)(n.code,{children:"Player"})," interface to determine the current playhead position."]}),"\n",(0,s.jsx)(n.h2,{id:"ad-block-detection",children:"Ad block detection"}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the article on ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/ads/block-detection",children:"ad block detection"})," for more information on detecting (and responding) to ad blockers."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>a,x:()=>r});var s=d(96540);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);