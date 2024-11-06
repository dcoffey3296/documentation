"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41973],{16860:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=i(74848),t=i(28453);const a={},d="Verizon Media Interface",s={id:"how-to-guides/miscellaneous/verizon-media/interface",title:"Verizon Media Interface",description:"This article explains how developers can hook into the Verizon Media Interface. This interface allows developers to query the available assets and ads in a Verizon Media stream, its properties, and subscribe to its events.",source:"@site/theoplayer_versioned_docs/version-v7/how-to-guides/07-miscellaneous/02-verizon-media/05-interface.md",sourceDirName:"how-to-guides/07-miscellaneous/02-verizon-media",slug:"/how-to-guides/miscellaneous/verizon-media/interface",permalink:"/documentation/pr-preview/pr-154/theoplayer/v7/how-to-guides/miscellaneous/verizon-media/interface",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/07-miscellaneous/02-verizon-media/05-interface.md",tags:[],version:"v7",sidebarPosition:5,frontMatter:{},sidebar:"roku",previous:{title:"Verizon Media Configuration",permalink:"/documentation/pr-preview/pr-154/theoplayer/v7/how-to-guides/miscellaneous/verizon-media/configuration"},next:{title:"Introduction",permalink:"/documentation/pr-preview/pr-154/theoplayer/v7/how-to-guides/miscellaneous/error/introduction"}},o={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Using the Verizon Media Interface",id:"using-the-verizon-media-interface",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Related articles",id:"related-articles",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"verizon-media-interface",children:"Verizon Media Interface"})}),"\n",(0,r.jsx)(n.p,{children:"This article explains how developers can hook into the Verizon Media Interface. This interface allows developers to query the available assets and ads in a Verizon Media stream, its properties, and subscribe to its events."}),"\n",(0,r.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.63.0)"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.66.0)"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.65.0)"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.66.0)"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"No"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"using-the-verizon-media-interface",children:"Using the Verizon Media Interface"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VerizonMedia"})," Interface is exposed through your THEOplayer instance (e.g.: ",(0,r.jsx)(n.code,{children:"player.verizonMedia"})," for the Web SDK). Through this interface,"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You can retrieve information (e.g. start and stop time) on the available assets (because THEOplayer extracts this information from its integration with the Asset Info and Preplay service offered by Verizon Media).","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You can also subscribe ",(0,r.jsx)(n.code,{children:"addasset"})," and ",(0,r.jsx)(n.code,{children:"removeasset"})," events, which can be useful when you need to be informed when the assets become available."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["You can retrieve information on the available advertisements (because THEOplayer extracts this information from its integration with the Preplay and Ping service offered by Verizon Media).","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You can also subscribe to ",(0,r.jsx)(n.code,{children:"addadbreak"}),", ",(0,r.jsx)(n.code,{children:"addad"}),", ",(0,r.jsx)(n.code,{children:"removeadbreak"}),", ... events, which can be useful if you want to know when which state is applicable (e.g. to overlay a custom advertisement countdown-timer)."]}),"\n",(0,r.jsx)(n.li,{children:"You can also adjust the ad skip offset of an ad break."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"You can intercept Preplay, Asset Info and Ping responses (because THEOplayer integrates with these services offered by Verizon Media)."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you're looking for more information on how to query the available advertisements and how to subscribe to ad events, then refer to ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v7/how-to-guides/miscellaneous/verizon-media/ads",children:"Verizon Media Ads"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The examples below provide a basic demonstration of how to use the ",(0,r.jsx)(n.code,{children:"VerizonMedia"})," interface. The Github projects linked at ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v7/how-to-guides/miscellaneous/verizon-media/introduction",children:"Verizon Media - Introduction"})," provide more code samples."]}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const player = new THEOplayer.Player(element, {...});\n// verizonMedia events\n[\n    'preplayresponse',\n    'pingresponse',\n    'assetinforesponse'\n].forEach(function(e) {\n    player.verizonMedia.addEventListener(e, console.log);\n});\n// verizonMedia.assets events\n[\n    'addasset',\n    'removeasset'\n].forEach(function(e) {\n    player.verizonMedia.assets.addEventListener(e, console.log);\n});\n// verizonMedia.ads events\n[\n    'addadbreak',\n    'removeadbreak'\n].forEach(function(e) {\n    player.verizonMedia.ads.adBreaks.addEventListener(e, function (e1) {\n        if (e1.type == \"addadbreak\") {\n            // verizonMedia.ads.adBreak[i] events\n            [\n                'adbreakbegin',\n                'adbreakend',\n                'adbreakskip',\n                'updateadbreak'\n            ].forEach(function(e) {\n                e1.adBreak.addEventListener(e, console.log);\n            // verizonMedia.as.adBreak.ads[i] events\n            for (let i = 0; i < e1.adBreak.ads.length; i++) {\n                [\n                    'adbegin',\n                    'adend',\n                    'adfirstquartile',\n                    'admidpoint',\n                    'adthirdquartile',\n                    'adcomplete'\n                ].forEach(function(e) {\n                    e1.adBreak.ads[i].addEventListener(e, console.log);\n                });\n            }\n        }\n    });\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Refer to the ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/VerizonMedia.html",children:"VerizonMedia API reference"})," for more information. Additionally, reviewing ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-html5-sdk/blob/master/reference-apps/verizon-media-app/src/player.js",children:"https://github.com/THEOplayer/samples-html5-sdk/blob/master/reference-apps/verizon-media-app/src/player.js"})," helps to understand the ",(0,r.jsx)(n.code,{children:"VerizonMedia"})," interface."]}),"\n",(0,r.jsx)(n.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'THEOplayerView player = new THEOplayerView(this);\n\nplayer.getVerizonMedia().addEventListener(VerizonMediaEventTypes.PREPLAYRESPONSE, event -> Log.i(TAG, "Event: PREPLAYRESPONSE"));\nplayer.getVerizonMedia().addEventListener(VerizonMediaEventTypes.PINGRESPONSE, event -> Log.i(TAG, "Event: PINGRESPONSE"));\nplayer.getVerizonMedia().addEventListener(VerizonMediaEventTypes.PINGERROR, event -> Log.i(TAG, "Event: PINGERROR"));\nEventListener<? super VerizonMediaAdBreakListEvent> attachAdBreakEventListeners = new EventListener<VerizonMediaAdBreakListEvent>() {\n    @Override\n    public void handleEvent(VerizonMediaAdBreakListEvent event) {\n        Log.i(TAG, "Event: ADDADBREAK");\n        VerizonMediaAdBreak adBreak = event.getAdBreak();\n        VerizonMediaAdList ads = event.getAdBreak().getAds();\n        for (int i = 0; i < ads.length(); i++) {\n            VerizonMediaAd ad = ads.getItem(i);\n            ad.addEventListener(VerizonMediaAdEventTypes.AD_BEGIN, event2 -> Log.i(TAG, "Event: ADBEGIN"));\n            ad.addEventListener(VerizonMediaAdEventTypes.AD_END, event2 -> Log.i(TAG, "Event: ADBEGIN"));\n        }\n        adBreak.addEventListener(VerizonMediaAdBreakEventTypes.ADBREAK_BEGIN, event2 -> Log.i(TAG, "Event: ADBREAKBEGIN"));\n        adBreak.addEventListener(VerizonMediaAdBreakEventTypes.ADBREAK_END, event2 -> Log.i(TAG, "Event: ADBREAKEND"));\n        adBreak.addEventListener(VerizonMediaAdBreakEventTypes.ADBREAK_SKIP, event2 -> Log.i(TAG, "Event: ADBREAKSKIP"));\n        adBreak.addEventListener(VerizonMediaAdBreakEventTypes.UPDATE_ADBREAK, event2 -> Log.i(TAG, "Event: UPDATEADBREAK"));\n    }\n};\n\nplayer.getVerizonMedia().getAds().getAdBreaks().addEventListener(VerizonMediaAdBreakListEventTypes.ADD_ADBREAK, attachAdBreakEventListeners);\n\nplayer.getVerizonMedia().getAds().getAdBreaks().addEventListener(VerizonMediaAdBreakListEventTypes.REMOVE_ADBREAK, event -> Log.i(TAG, "Event: REMOVEADBREAK"))\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Refer to the documentation at ",(0,r.jsx)(n.a,{href:"https://theoplayer-cdn.s3.eu-west-1.amazonaws.com/doc/android/latest/com/theoplayer/android/api/verizonmedia/VerizonMedia.html",children:"VerizonMedia"})," for more information. Additionally, reviewing ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-android-sdk/blob/master/Verizon-Media/app/src/main/java/com/theoplayer/sample/playback/verizonmedia/PlayerActivity.java",children:"https://github.com/THEOplayer/samples-android-sdk/blob/master/Verizon-Media/app/src/main/java/com/theoplayer/sample/playback/verizonmedia/PlayerActivity.java"})," helps to understand the ",(0,r.jsx)(n.code,{children:"VerizonMedia"})," interface."]}),"\n",(0,r.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"let player = THEOplayer()\nplayer.verizonMedia.addEventListener(type: VerizonMediaResponseEventTypes.PREPLAY_RESPONSE, listener: onPreplayResponse)\nplayer.verizonMedia.addEventListener(type: VerizonMediaResponseEventTypes.PING_RESPONSE, listener: onPingResponse)\nplayer.verizonMedia.ads.adBreaks.addEventListener(type: VerizonMediaAdBreakArrayEventTypes.ADD_AD_BREAK, listener: onAddAdbreak)\nplayer.verizonMedia.ads.adBreaks.addEventListener(type: VerizonMediaAdBreakArrayEventTypes.REMOVE_AD_BREAK, listener: onRemoveAdbreak)\n...\nprivate func onAddAdbreak(event: VerizonMediaAddAdBreakEvent) {\n    event.adBreak?.ads.forEach({ (ad) in\n    \tad.addEventListener(type: VerizonMediaAdEventTypes.AD_BEGIN, listener: onAdBegin)\n        ad.addEventListener(type: VerizonMediaAdEventTypes.AD_END, listener: onAdEnd)\n    })\n    event.adBreak?.addEventListener(type: VerizonMediaAdBreakEventTypes.AD_BREAK_BEGIN, listener:\n                                    onAdBreakBegin(event:))\n    event.adBreak?.addEventListener(type: VerizonMediaAdBreakEventTypes.AD_BREAK_END, listener:\n                                    onAdBreakEnd)\n    event.adBreak?.addEventListener(type: VerizonMediaAdBreakEventTypes.AD_BREAK_SKIP, listener:\n                                    onAdBreakSkip)\n    event.adBreak?.addEventListener(type: VerizonMediaAdBreakEventTypes.AD_BREAK_UPDATE, listener:\n                                    onAdBreakUpdate)\n}\n...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Refer to the documentation at ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/ios/Protocols/VerizonMedia.html",children:"VerizonMedia"})," for more information. Additionally, reviewing ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/blob/master/Verizon-Media/Verizon_Media/PlayerViewController.swift",children:"https://github.com/THEOplayer/samples-ios-sdk/blob/master/Verizon-Media/Verizon_Media/PlayerViewController.swift"})," helps to understand the ",(0,r.jsx)(n.code,{children:"VerizonMedia"})," interface."]}),"\n",(0,r.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v7/how-to-guides/miscellaneous/verizon-media/ads",children:"Verizon Media - Ads"}),": this article offers more information on the ",(0,r.jsx)(n.code,{children:"ads"})," parts of the Verizon Media interface."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v7/how-to-guides/miscellaneous/verizon-media/ping",children:"Verizon Media - Ping"}),": this article explains how you can use the Verizon Media Interface to intercept Ping responses."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v7/how-to-guides/miscellaneous/verizon-media/preplay",children:"Verizon Media - Ping"}),": this article explains how you can use the Verizon Media Interface to intercept Preplay responses."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v7/how-to-guides/miscellaneous/verizon-media/introduction",children:"Verizon Media - Introduction"}),": this article links to sample Git projects which query (and subscribe to) the various properties and events offered by the ",(0,r.jsx)(n.code,{children:"VerizonMedia"})," interface."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>s});var r=i(96540);const t={},a=r.createContext(t);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);