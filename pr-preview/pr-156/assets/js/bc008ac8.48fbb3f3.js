"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["46689"],{59543:function(e,n,i){i.r(n),i.d(n,{metadata:()=>a,contentTitle:()=>t,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>s});var a=JSON.parse('{"id":"how-to-guides/miscellaneous/verizon-media/ads","title":"Verizon Media Ads","description":"Verizon Media offers support for server-side ad-insertion (SSAI).","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/07-miscellaneous/02-verizon-media/02-ads.md","sourceDirName":"how-to-guides/07-miscellaneous/02-verizon-media","slug":"/how-to-guides/miscellaneous/verizon-media/ads","permalink":"/documentation/pr-preview/pr-156/theoplayer/v4/how-to-guides/miscellaneous/verizon-media/ads","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/07-miscellaneous/02-verizon-media/02-ads.md","tags":[],"version":"v4","sidebarPosition":2,"frontMatter":{},"sidebar":"roku","previous":{"title":"Preplay","permalink":"/documentation/pr-preview/pr-156/theoplayer/v4/how-to-guides/miscellaneous/verizon-media/preplay"},"next":{"title":"Ping","permalink":"/documentation/pr-preview/pr-156/theoplayer/v4/how-to-guides/miscellaneous/verizon-media/ping"}}'),d=i("85893"),r=i("50065");let s={},t="Verizon Media Ads",l={},o=[{value:"SDKs",id:"sdks",level:2},{value:"Global Configuration",id:"global-configuration",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Roku SDK",id:"roku-sdk",level:5},{value:"Verizon Media Ads API",id:"verizon-media-ads-api",level:2},{value:"Web SDK",id:"web-sdk-1",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"iOS (tvOS) SDK",id:"ios-tvos-sdk",level:5},{value:"Roku SDK",id:"roku-sdk-1",level:5},{value:"Related articles",id:"related-articles",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"verizon-media-ads",children:"Verizon Media Ads"})}),"\n",(0,d.jsxs)(n.p,{children:["Verizon Media offers support for ",(0,d.jsx)(n.a,{href:"https://www.verizondigitalmedia.com/media-platform/streaming/smartplay/#Server-side-Ad-Insertion",children:"server-side ad-insertion"})," (SSAI)."]}),"\n",(0,d.jsx)(n.p,{children:"This article explains how to use the Verizon Media's Ads API exposed by THEOplayer to hook into these SSAI advertisements.\nAdditionally, this API allows developers to manipulate the ad-related UX and UI."}),"\n",(0,d.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,d.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,d.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,d.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,d.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,d.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,d.jsx)(n.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.63.0)"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.66.0)"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.65.0)"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.66.0)"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"global-configuration",children:"Global Configuration"}),"\n",(0,d.jsx)(n.p,{children:"The examples below demonstrate how to pass along global configuration for the Verizon Media ads. These settings can be overwritten."}),"\n",(0,d.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"var player = new THEOplayer.Player(element, {\n  verizonMedia: {\n    defaultSkipOffset: 2, // Ad breaks added by SSAI are by default skippable after two seconds. Optional and defaults to unskippable.\n    onSeekOverAd: \"play-last\" // When seeking over ad breaks, this configuration decides how to snapback and play any missed ad breaks.\n    // Possible values are currently 'play-none', 'play-last' and 'play-all' where 'play-none' is the default.\n  }\n  // ... Other configuration goes here\n});\n"})}),"\n",(0,d.jsx)(n.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-java",children:"VerizonMediaConfiguration verizonMediaConfig = new VerizonMediaConfiguration.Builder()\n                .defaultSkipOffset(5)\n                .skippedAdStrategy(SkippedAdStrategy.PLAY_ALL) // When seeking over ad breaks, this configuration decides how to snapback and play any missed ad breaks.\n                                                               // Possible values are currently 'play-none', 'play-last' and 'play-all' where 'play-none' is the default.\n                .build();\n\nTHEOplayerConfig playerConfig = new THEOplayerConfig.Builder()\n                .verizonMediaConfiguration(verizonMediaConfig)\n                .build();\n\nthis.tpv = new THEOplayerView(Activity, playerConfig);\n"})}),"\n",(0,d.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-swift",children:"let verizonMediaPlayerConf = VerizonMediaConfiguration(\n            defaultSkipOffset: 5,\n            onSeekOverAd: SkippedAdStrategy.PLAY_ALL) // When seeking over ad breaks, this configuration decides how to snapback and play any missed ad breaks.\n                                                      // Possible values are currently 'play-none', 'play-last' and 'play-all' where 'play-none' is the default.\n\nlet playerConf = THEOplayerConfiguration(verizonMedia: verizonMediaPlayerConf)\n\nlet player = THEOplayer(configuration: playerConf)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"roku-sdk",children:"Roku SDK"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-brightscript",children:'function Init()\n  ...\n    m.player = m.top.findNode("THEOPlayer")\n    m.player.configuration = {\n      "license": "" \' put the THEOplayer license between apostrophes,\n      "verizonMedia" : {\n		    "defaultSkipOffset": 5,\n		    "onSeekOverAd": "play-last"\n      }\n    }\n  ...\nend function\n'})}),"\n",(0,d.jsx)(n.h2,{id:"verizon-media-ads-api",children:"Verizon Media Ads API"}),"\n",(0,d.jsx)(n.p,{children:"Specifying a source which contains server-side ads configured through the Verizon Media pre-integration will have the player expose an Ads API specific to Verizon Media."}),"\n",(0,d.jsx)(n.h5,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,d.jsx)(n.p,{children:"Specifying a source which performs SSAI will have the player expose information about this SSAI on the player.verizonMedia.ads API:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"player.verizonMedia.ads.adBreaks"}),": Specifies all ad breaks that are currently in the stream by using SSAI through Preplay."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"player.verizonMedia.ads.currentAdBreak"}),": If applicable, returns the ad break that is currently being played."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"player.verizonMedia.ads.currentAds"}),": If applicable, returns a list of the current ads being played."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"player.verizonMedia.ads.skip()"}),": If there is an ad break playing, and it is skippable, skip the ad break to the next content (or next seek point in case of snapback)"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Calling the ",(0,d.jsx)(n.code,{children:"vdms.ads.skip()"})," function on a live stream will not have any effect."]}),"\n",(0,d.jsx)(n.p,{children:"In addition, event listeners are available to listen to new ad breaks:"}),"\n",(0,d.jsx)(n.p,{children:"For adbreaks there are the following events defined :"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adbreakbegin"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adbreakend"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adbreakskip"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"addadbreak"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"removeadbreak"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"For ads there are the following events defined :"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adbegin"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adchange"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adend"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adfirstquartile"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"admidpoint"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adthirdquartile"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adcomplete"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:'// Sample source snippet\n\nplayer.verizonMedia.ads.adBreaks.addEventListener("addadbreak", (event) => {\n  // do something with event.adBreak as it is an ad break added through SSAI, an example:\n  const adBreak = event.adBreak;\n  if (adBreak.duration <= 15) {\n    adBreak.skipOffset = -1; // Do not allow skipping of short ad breaks\n  } else if (adBreak.duration > 60) {\n    adBreak.skipOffset = 10; // Allow skipping of long ad breaks after ten seconds\n  } else {\n    adBreak.skipOffset = 0; // For all other ad breaks, allow immediate skipping\n  }\n  // subscribe to additional events\n  event.adBreak.addEventListener("adbreakbegin", console.log);\n  event.adBreak.addEventListener("adbreakend", console.log);\n  for (var i = 0; i < event.adBreak.ads.length; i++) {\n    event.adBreak.ads[i].addEventListener("adbegin", console.log);\n    event.adBreak.ads[i].addEventListener("adend", console.log);\n  }\n});\n'})}),"\n",(0,d.jsx)(n.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,d.jsx)(n.p,{children:"Specifying a source which performs SSAI will have the player expose information about this SSAI on the player.verizonMedia.ads API:"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"player.verizonMedia.ads.adBreaks"}),": Specifies all ad breaks that are currently in the stream by using SSAI through Preplay.\n",(0,d.jsx)(n.code,{children:"player.verizonMedia.ads.currentAdBreak"}),": If applicable, returns the ad break that is currently being played.\n",(0,d.jsx)(n.code,{children:"player.verizonMedia.ads.currentAds"}),": If applicable, returns a list of the current ads being played.\n",(0,d.jsx)(n.code,{children:"player.verizonMedia.ads.skip()"}),": If there is an ad break playing, and it is skippable, skip the ad break to the next content (or next seek point in case of snapback)\nskip()"]}),"\n",(0,d.jsxs)(n.p,{children:["Calling the ",(0,d.jsx)(n.code,{children:"vdms.ads.skip()"})," function on a live stream will not have any effect."]}),"\n",(0,d.jsx)(n.p,{children:"In addition, event listeners are available to listen for specific events:"}),"\n",(0,d.jsx)(n.p,{children:"On the ad break list the following listeners can be added:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"addadbreak"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"removeadbreak"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"On an ad break the following listeners can be added:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adbreakbegin"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adbreakend"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adbreakskip"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adbreakupdate"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"On the ad list inside an ad break the following listeners can be added:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"removead"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"On an individual ad the following listeners can be added:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adbegin"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adend"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adfirstquartile"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"admidpoint"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adthirdquartile"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adcomplete"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-java",children:"EventListener<VerizonMediaAdEvent> adListener = (VerizonMediaAdEvent event) -> {\n            // Do something with the ad\n            event.getAd();\n};\n\nEventListener<VerizonMediaAdBreakEvent> adBreakListener = (VerizonMediaAdBreakEvent event) -> {\n            // Do something with the adbreak\n            event.getAdBreak();\n};\n\nEventListener<VerizonMediaAdBreakListEvent> adBreakListListener = (VerizonMediaAdBreakListEvent event) -> {\n            // Do something with the adbreak\n            event.getAdBreak().addEventListener(VerizonMediaAdBreakEventTypes.ADBREAK_BEGIN, adBreakListener);\n            event.getAdBreak().addEventListener(VerizonMediaAdBreakEventTypes.ADBREAK_END, adBreakListener);\n\n            Iterator<VerizonMediaAd> ads =  event.getAdBreak().getAds().iterator();\n            while (ads.hasNext()) {\n                ads.next().addEventListener(VerizonMediaAdEventTypes.AD_BEGIN, adListener);\n            }\n};\n\nthis.tpv.getPlayer().getVerizonMedia().getAds().getAdBreaks().addEventListener(VerizonMediaAdBreakListEventTypes.ADD_ADBREAK, adBreakListListener);\n"})}),"\n",(0,d.jsx)(n.h5,{id:"ios-tvos-sdk",children:"iOS (tvOS) SDK"}),"\n",(0,d.jsx)(n.p,{children:"Specifying a source which performs SSAI will have the player expose information about this SSAI on the player.verizonMedia.ads API:"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"player.verizonMedia.ads.adBreaks"}),": Specifies all ad breaks that are currently in the stream by using SSAI through Preplay.\n",(0,d.jsx)(n.code,{children:"player.verizonMedia.ads.currentAdBreak"}),": If applicable, returns the ad break that is currently being played.\n",(0,d.jsx)(n.code,{children:"player.verizonMedia.ads.currentAds"}),": If applicable, returns a list of the current ads being played.\n",(0,d.jsx)(n.code,{children:"player.verizonMedia.ads.skip()"}),": If there is an ad break playing, and it is skippable, skip the ad break to the next content (or next seek point in case of snapback)\nskip()"]}),"\n",(0,d.jsxs)(n.p,{children:["Calling the ",(0,d.jsx)(n.code,{children:"vdms.ads.skip()"})," function on a live stream will not have any effect."]}),"\n",(0,d.jsx)(n.p,{children:"In addition, event listeners are available to listen for specific events:"}),"\n",(0,d.jsx)(n.p,{children:"On the ad break list the following listeners can be added:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"addadbreak"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"removeadbreak"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"On an ad break the following listeners can be added:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adbreakbegin"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adbreakend"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adbreakskip"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adbreakupdate"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"On the ad list inside an ad break the following listeners can be added:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"removead"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"On an individual ad the following listeners can be added:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adbegin"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adend"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adfirstquartile"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"admidpoint"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adthirdquartile"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.em,{children:"adcomplete"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-swift",children:"let adListener = { (event: VerizonMediaAdBeginEvent) in\n            if let ad = event.ad {\n                // do something with the ad.\n            }\n}\n\nlet adBreakBeginListener = { (event: VerizonMediaAdBreakBeginEvent) in\n            if let adbreak = event.adBreak {\n                // do something with the ad break.\n            }\n}\n\nlet adBreakArrayListener = { (event: VerizonMediaAddAdBreakEvent) in\n            if let adbreak = event.adBreak {\n                _ = adbreak.addEventListener(type: VerizonMediaAdBreakEventTypes.AD_BREAK_BEGIN, listener: adBreakBeginListener)\n                _ = adbreak.ads.first?.addEventListener(type: VerizonMediaAdEventTypes.AD_BEGIN, listener: adListener)\n            }\n}\n\nlet adBreakArrayListenerRef = player.verizonMedia.ads.adBreaks.addEventListener(type: VerizonMediaAdBreakArrayEventTypes.ADD_AD_BREAK, listener: adBreakArrayListener)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"roku-sdk-1",children:"Roku SDK"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\n<component name="TestScene" extends="Scene">\n    <interface>\n        <function name="callbackOnEventAddAdBreak"/>\n    </interface>\n\n    <script type = "text/brightscript" >\n\n        <![CDATA[\n\n        function Init()\n            m.player = m.top.findNode("TestPlayer")\n            m.player.configuration = {\n              "license": "" \' put the THEOplayer license between apostrophes\n            }\n            m.player.callFunc("addEventListener", m.player.Event.addadbreak, "callbackOnEventAddAdBreak")\n\n            setSource()\n        end function\n\n        function setSource()\n	        ...\n        end function\n\n        function callbackOnEventAddAdBreak(eventData)\n		    verizonMedia = m.player.verizonMedia\n\n			\' search in loop for currently added ad break\n		    for each adBreak in verizonMedia.ads.adBreaks\n		        if adBreak.startTime = eventData.adBreak.startTime\n			        \' set proper skip offset time depending on ad break duration\n		            if adBreak.duration <= 15\n		                adBreak.skipOffset = -1\n		            else if adBreak.duration > 60\n		                adBreak.skipOffset = 10\n		            else\n		                adBreak.skipOffset = 0\n		            end if\n		        end if\n		    end for\n\n			\' assigning whole object instead of changing value of field is required due to roku specific architecture\n		    m.player.verizonMedia = verizonMedia\n\n			\' log data about all ads inside currently added ad break\n		    for each ad in eventData.adBreak.ads\n		        ? "adBegin : "; ad.startTime\n		        ? "adEnd : "; ad.endTime\n		    end for\n        end function\n        ]]>\n\n    <\/script>\n\n    <children>\n        <THEOplayer id="TestPlayer"/>\n    </children>\n</component>\n'})}),"\n",(0,d.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"/documentation/pr-preview/pr-156/theoplayer/v4/how-to-guides/miscellaneous/verizon-media/preplay",children:"Verizon Media - Preplay"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"/documentation/pr-preview/pr-156/theoplayer/v4/how-to-guides/miscellaneous/verizon-media/ping",children:"Verizon Media - Ping"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return s}});var a=i(67294);let d={},r=a.createContext(d);function s(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);