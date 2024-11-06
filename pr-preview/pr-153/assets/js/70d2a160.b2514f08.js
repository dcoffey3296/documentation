"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1888],{17105:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(74848),d=s(28453);const r={},i="How to subscribe to ad events",a={id:"how-to-guides/ads/how-to-subscribe-to-ad-events",title:"How to subscribe to ad events",description:"When building a custom UI, or when logging events to an analytics service, app developers often need to be able to listen (and react) to ad events. For example, if an ad break starts, they want to draw a countdown on top of their UI. Alternatively, when an ad error occurs, they want to log this to an analytics server.",source:"@site/theoplayer_versioned_docs/version-v7/how-to-guides/01-ads/11-how-to-subscribe-to-ad-events.md",sourceDirName:"how-to-guides/01-ads",slug:"/how-to-guides/ads/how-to-subscribe-to-ad-events",permalink:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/ads/how-to-subscribe-to-ad-events",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/01-ads/11-how-to-subscribe-to-ad-events.md",tags:[],version:"v7",sidebarPosition:11,frontMatter:{},sidebar:"roku",previous:{title:"Google IMA",permalink:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/ads/google-ima"},next:{title:"MediaTailor",permalink:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/ads/mediatailor"}},o={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Subscribing to an event",id:"subscribing-to-an-event",level:2},{value:"Client-side ads",id:"client-side-ads",level:3},{value:"Web SDK",id:"web-sdk",level:4},{value:"Android SDK",id:"android-sdk",level:4},{value:"iOS/tvOS SDK",id:"iostvos-sdk",level:4},{value:"Ad begin and end",id:"ad-begin-and-end",level:2},{value:"Web SDK",id:"web-sdk-1",level:4},{value:"Android SDK",id:"android-sdk-1",level:4},{value:"iOS/tvOS SDK",id:"iostvos-sdk-1",level:4},{value:"Ad error",id:"ad-error",level:2},{value:"Web SDK",id:"web-sdk-2",level:4},{value:"Android SDK",id:"android-sdk-2",level:4},{value:"iOS/tvOS SDK",id:"iostvos-sdk-2",level:4},{value:"Server-side ads",id:"server-side-ads",level:3},{value:"Ad block detection",id:"ad-block-detection",level:2},{value:"Resources",id:"resources",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"how-to-subscribe-to-ad-events",children:"How to subscribe to ad events"})}),"\n",(0,t.jsx)(n.p,{children:"When building a custom UI, or when logging events to an analytics service, app developers often need to be able to listen (and react) to ad events. For example, if an ad break starts, they want to draw a countdown on top of their UI. Alternatively, when an ad error occurs, they want to log this to an analytics server."}),"\n",(0,t.jsx)(n.p,{children:"This article explains how you can programmatically subscribe to ad-related events across different SDKs."}),"\n",(0,t.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"subscribing-to-an-event",children:"Subscribing to an event"}),"\n",(0,t.jsx)(n.p,{children:"This subsection explains how you detect ad-related events.\nThe other subsections zoom in on particular use-cases, such as detecting the beginning and end of an ad."}),"\n",(0,t.jsx)(n.h3,{id:"client-side-ads",children:"Client-side ads"}),"\n",(0,t.jsxs)(n.p,{children:["If you are scheduling ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/ads/how-to-set-up-vast-and-vmap",children:"client-side advertisements"}),", then you use the ",(0,t.jsx)(n.code,{children:"Ads"})," interface to detect ad events throughout the Web, Android and iOS SDK."]}),"\n",(0,t.jsx)(n.h4,{id:"web-sdk",children:"Web SDK"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Player"})," API exposes an ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/classes/ChromelessPlayer.html#ads",children:(0,t.jsx)(n.code,{children:"ads"})})," property which belongs to the ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/Ads.html",children:(0,t.jsx)(n.code,{children:"Ads"})})," interface. Because this ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/Ads.html",children:(0,t.jsx)(n.code,{children:"Ads"})})," interface inherits from ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/AdsEventMap.html",children:(0,t.jsx)(n.code,{children:"EventDispatcher<AdsEventMap>"})}),",\nyou can leverage event listeners in this interface."]}),"\n",(0,t.jsxs)(n.p,{children:["The ad-related events are documented in ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/AdsEventMap.html",children:(0,t.jsx)(n.code,{children:"AdsEventMap"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To subscribe to an event, you select an event from this page, use the ",(0,t.jsx)(n.code,{children:"Ads"})," interface, call the ",(0,t.jsx)(n.code,{children:"addEventListener"})," method, and set the event as the first parameter, and the callback as the second parameter."]}),"\n",(0,t.jsx)(n.p,{children:"For example, if you want to track the start of an ad break, you could use the following snippet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'player.ads.addEventListener("adbreakbegin", function (event) {\n  console.log(event);\n});\n'})}),"\n",(0,t.jsx)(n.p,{children:"The following snippet should log most events to the console."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'player.ads.addEventListener(\n  [\n    "adbegin",\n    "adbreakbegin",\n    "adbreakchange",\n    "adbreakend",\n    "adbuffering",\n    "addad",\n    "addadbreak",\n    "adend",\n    "aderror",\n    "adfirstquartile",\n    "adimpression",\n    "adloaded",\n    "admetadata",\n    "admidpoint",\n    "adskip",\n    "adthirdquartile",\n    "removeadbreak",\n    "updatead",\n    "updateadbreak"\n  ],\n  console.log\n);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note that when dealing with client-side advertisements, you have different types of integrations, as explained at ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/ads/how-to-set-up-vast-and-vmap",children:"How to setup VAST and VMAP"}),". The impact of this is that some events are not available throughout all integrations."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, if you schedule ",(0,t.jsx)(n.code,{children:"https://cdn.theoplayer.com/demos/preroll.xml"}),', which is a single linear VAST ad, through the "Google IMA integration" ',(0,t.jsx)(n.a,{href:"https://www.theoplayer.com/theoplayer-demo-advertisement-tester-vpaid-vast-vmap",children:"on our advertisement tester"}),", the above snippet will trigger the following events:"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"addad"}),", ",(0,t.jsx)(n.code,{children:"updateadbreak"}),", ",(0,t.jsx)(n.code,{children:"updatead"}),", ",(0,t.jsx)(n.code,{children:"adloaded"}),", ",(0,t.jsx)(n.code,{children:"adbreakbegin"}),", ",(0,t.jsx)(n.code,{children:"adbegin"}),", ",(0,t.jsx)(n.code,{children:"adimpression"}),", ",(0,t.jsx)(n.code,{children:"adfirstquartile"}),", ",(0,t.jsx)(n.code,{children:"admidpoint"}),", ",(0,t.jsx)(n.code,{children:"adthirdquartile"}),", ",(0,t.jsx)(n.code,{children:"adend"}),", ",(0,t.jsx)(n.code,{children:"adbreakend"}),", ",(0,t.jsx)(n.code,{children:"removeadbreak"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When you do the same for the ",(0,t.jsx)(n.code,{children:"csai"})," ad integration, you get the following events:"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"adloaded"}),",",(0,t.jsx)(n.code,{children:"adbreakchange"}),",",(0,t.jsx)(n.code,{children:"adbreakbegin"}),",",(0,t.jsx)(n.code,{children:"adbegin"}),",",(0,t.jsx)(n.code,{children:"adend"}),",",(0,t.jsx)(n.code,{children:"adbreakend"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"android-sdk",children:"Android SDK"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Player"})," API exposes an ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/android/com/theoplayer/android/api/player/Player.html#getAds--",children:(0,t.jsx)(n.code,{children:"getAds()"})})," method which belongs to the ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/android/com/theoplayer/android/api/ads/Ads.html",children:(0,t.jsx)(n.code,{children:"Ads"})})," interface. Because this ",(0,t.jsx)(n.code,{children:"Ads"})," interface inherits from ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/android/com/theoplayer/android/api/event/ads/AdEvent.html",children:(0,t.jsx)(n.code,{children:"EventDispatcher<AdEvent>"})}),",you can leverage event listeners in this interface."]}),"\n",(0,t.jsxs)(n.p,{children:["The Android SDK currently only allows ad playback through ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/ads/google-ima#android-sdk",children:"Google IMA"}),". The available events are documented in ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaAdEventType.html",children:(0,t.jsx)(n.code,{children:"GoogleImaAdEventType"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To subscribe to an event, you select an appropriate ",(0,t.jsx)(n.code,{children:"GoogleImaAdEventType"})," or ",(0,t.jsx)(n.code,{children:"AdsEventType"}),", use the ",(0,t.jsx)(n.code,{children:"Ads"})," interface, call the ",(0,t.jsx)(n.code,{children:"addEventListener"})," method, and set the event as the first parameter, and the callback as the second parameter."]}),"\n",(0,t.jsx)(n.p,{children:"For example, if you want to track the start of an ad break with the Android SDK, you could use the following snippet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'theoPlayer.ads.addEventListener(GoogleImaAdEventType.AD_BREAK_STARTED) {\n    Log.d("ADS", "AD_BREAK_STARTED")\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"iostvos-sdk",children:"iOS/tvOS SDK"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Player"})," API exposes an ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/ios/Classes/THEOplayer.html#/s:13THEOplayerSDK0A0C3adsAA3Ads_pvp",children:(0,t.jsx)(n.code,{children:"ads"})})," property which belongs to the ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/ios/Protocols/Ads.html",children:(0,t.jsx)(n.code,{children:"Ads"})})," interface. Because this ",(0,t.jsx)(n.code,{children:"Ads"})," interface inherits from ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/ios/Ads%20Events.html",children:(0,t.jsx)(n.code,{children:"EventDispatcher"})}),",\nyou can leverage event listeners in this interface."]}),"\n",(0,t.jsxs)(n.p,{children:["The ad-related events are documented in ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/ios/Structs/AdsEventTypes.html",children:"AdsEventTypes"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To subscribe to an event, you select an event from this page, use the ",(0,t.jsx)(n.code,{children:"Ads"})," interface, call the ",(0,t.jsx)(n.code,{children:"addEventListener"})," method, and set the event as the first parameter, and the callback as the second parameter."]}),"\n",(0,t.jsx)(n.p,{children:"For example, if you want to track the start of an ad break, you could use the following snippet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"player.ads.addEventListener(type: AdsEventTypes.AD_BREAK_BEGIN) { (event) in\n    print(event)\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ad-begin-and-end",children:"Ad begin and end"}),"\n",(0,t.jsx)(n.p,{children:"Detecting the start and stop of ad breaks and individual ad pods is a common requirement."}),"\n",(0,t.jsx)(n.p,{children:"The THEOplayer API exposes event listeners which allow applications to hook into these events."}),"\n",(0,t.jsx)(n.h4,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,t.jsxs)(n.p,{children:["This use-case is an application of ",(0,t.jsx)(n.a,{href:"#subscribing-to-an-event",children:"Subscribing to an event"}),", and relates to the following events:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"adbegin"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"adbreakbegin"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"adbreakend"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"adend"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example, the following snippet would trigger the callback when an ad break begins:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'player.ads.addEventListener("adbreakbegin", function (event) {\n  console.log(event);\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can swap ",(0,t.jsx)(n.code,{children:"adbreakbegin"})," for the other events, or supply an array instead:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'player.ads.addEventListener(\n  ["adbegin", "adbreakbegin", "adbreakend", "adend"],\n  function (event) {\n    console.log(event);\n  }\n);\n'})}),"\n",(0,t.jsx)(n.h4,{id:"android-sdk-1",children:"Android SDK"}),"\n",(0,t.jsxs)(n.p,{children:["This use-case is an application of ",(0,t.jsx)(n.a,{href:"#subscribing-to-an-event",children:"Subscribing to an event"}),", and relates to the following events:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"STARTED"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AD_BREAK_STARTED"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AD_PERIOD_STARTED"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AD_BREAK_ENDED"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AD_PERIOD_ENDED"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"COMPLETED"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ALL_ADS_COMPLETED"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'theoPlayer.ads.addEventListener(GoogleImaAdEventType.AD_BREAK_STARTED) {\n    Log.d("ADS", "AD_BREAK_STARTED")\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"iostvos-sdk-1",children:"iOS/tvOS SDK"}),"\n",(0,t.jsxs)(n.p,{children:["This use-case is an application of ",(0,t.jsx)(n.a,{href:"#subscribing-to-an-event",children:"Subscribing to an event"}),", and relates to the following events:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AD_BEGIN"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AD_BREAK_BEGIN"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AD_END"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AD_BREAK_END"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"player.ads.addEventListener(type: AdsEventTypes.AD_BREAK_BEGIN) { (event) in\n    print(event)\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ad-error",children:"Ad error"}),"\n",(0,t.jsx)(n.p,{children:'Ad error events might be triggered when an ad blocker is active, or when an "empty" ad is returned. As an app developer, you might want to detect and possibly react to this.'}),"\n",(0,t.jsxs)(n.p,{children:["If you are scheduling ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/ads/how-to-set-up-vast-and-vmap",children:"client-side advertisements"})," then you use the ",(0,t.jsx)(n.code,{children:"Ads"})," interface to detect the ad errors."]}),"\n",(0,t.jsx)(n.h4,{id:"web-sdk-2",children:"Web SDK"}),"\n",(0,t.jsxs)(n.p,{children:["This use-case is an application of ",(0,t.jsx)(n.a,{href:"#subscribing-to-an-event",children:"Subscribing to an event"}),", specifically the ",(0,t.jsx)(n.code,{children:"aderror"})," event."]}),"\n",(0,t.jsx)(n.p,{children:"The following snippet would trigger the callback when an ad error occurs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'player.ads.addEventListener("aderror", function (event) {\n  console.log(event);\n});\n'})}),"\n",(0,t.jsx)(n.h4,{id:"android-sdk-2",children:"Android SDK"}),"\n",(0,t.jsxs)(n.p,{children:["This use-case is an application of ",(0,t.jsx)(n.a,{href:"#subscribing-to-an-event",children:"Subscribing to an event"}),", specifically the ",(0,t.jsx)(n.code,{children:"AD_ERROR"})," event."]}),"\n",(0,t.jsx)(n.p,{children:"The following snippet would trigger the callback when an ad error occurs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'theoPlayer.ads.addEventListener(GoogleImaAdEventType.AD_ERROR) {\n    Log.d("ADS", "AD_ERROR")\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"iostvos-sdk-2",children:"iOS/tvOS SDK"}),"\n",(0,t.jsxs)(n.p,{children:["This use-case is an application of ",(0,t.jsx)(n.a,{href:"#subscribing-to-an-event",children:"Subscribing to an event"}),", specifically the ",(0,t.jsx)(n.code,{children:"AD_ERROR"})," event."]}),"\n",(0,t.jsx)(n.p,{children:"The following snippet would trigger the callback when an ad error occurs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"player.ads.addEventListener(type: AdsEventTypes.AD_ERROR) { (event) in\n    print(event)\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"server-side-ads",children:"Server-side ads"}),"\n",(0,t.jsxs)(n.p,{children:["If you're scheduling server-side ads, you might need to use a different interface than the ",(0,t.jsx)(n.code,{children:"Ads"})," interface which you use when scheduling client-side ads."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/ads/google-ima",children:"Google DAI"}),": if you're using Google DAI, you can use the same API as the one for client-side ads, as described in the sections above."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/ads/yospace",children:"Yospace"}),": if you're using Yospace, you must use the Yospace interface. You can read more about detecting ad-related events with Yospace at our ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/ads/yospace",children:"Yospace documentation"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/miscellaneous/verizon-media/ads",children:"Verizon Media"}),": if you're using Verizon Media, you must use the Verizon interface. You can read more about detecting ad-related events with Verizon Media at our ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/miscellaneous/verizon-media/ads#verizon-media-ads-api",children:"Verizon Media documentation"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you're building a custom server-side ad insertion solution, you might be interested in using our ",(0,t.jsx)(n.code,{children:"TextTrack"})," API to detect ",(0,t.jsx)(n.code,{children:"id3/emsg/EventStream/EXT-X-DATERANGE"})," cues, and the ",(0,t.jsx)(n.code,{children:"timeupdate"})," event in the ",(0,t.jsx)(n.code,{children:"Player"})," interface to determine the current playhead position."]}),"\n",(0,t.jsx)(n.h2,{id:"ad-block-detection",children:"Ad block detection"}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the article on ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v7/how-to-guides/ads/block-detection",children:"ad block detection"})," for more information on detecting (and responding) to ad blockers."]}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["More samples are available on our GitHub repository for ",(0,t.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-html5-sdk",children:"Web"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-android-sdk",children:"Android"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-ios-sdk",children:"iOS"})," SDKs."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.theoplayer.com/theoplayer-demo-advertisement-tester-vpaid-vast-vmap",children:"THEOplayer advertisement tester"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(96540);const d={},r=t.createContext(d);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);