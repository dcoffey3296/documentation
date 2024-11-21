"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["3732"],{22651:function(e,n,i){i.r(n),i.d(n,{metadata:()=>o,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>s,frontMatter:()=>a});var o=JSON.parse('{"id":"how-to-guides/ads/google-dai","title":"Google Dynamic Ad Insertion (DAI)","description":"Google DAI is a Server-Side Ad-Insertion solution offered by Google where THEOplayer is pre-integrated and offers playback for HLS and DASH Streams. A demo can be found at\xa0https://demo.theoplayer.com/google-dai.","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/01-ads/08-google-dai.md","sourceDirName":"how-to-guides/01-ads","slug":"/how-to-guides/ads/google-dai","permalink":"/documentation/pr-preview/pr-162/theoplayer/v4/how-to-guides/ads/google-dai","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/01-ads/08-google-dai.md","tags":[],"version":"v4","sidebarPosition":8,"frontMatter":{},"sidebar":"roku","previous":{"title":"SpotX","permalink":"/documentation/pr-preview/pr-162/theoplayer/v4/how-to-guides/ads/spotx"},"next":{"title":"Prebid.js","permalink":"/documentation/pr-preview/pr-162/theoplayer/v4/how-to-guides/ads/prebidjs"}}'),r=i("85893"),t=i("50065");let a={},l="Google Dynamic Ad Insertion (DAI)",d={},s=[{value:"SDKs",id:"sdks",level:2},{value:"Web SDK",id:"web-sdk",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Starting Template",id:"starting-template",level:3},{value:"Integrating Google DAI",id:"integrating-google-dai",level:3},{value:"Android SDK",id:"android-sdk",level:2},{value:"Android SDK",id:"android-sdk-1",level:4},{value:"1. Importing Google DAI feature module.",id:"1-importing-google-dai-feature-module",level:5},{value:"2. Creating an instance of Google DAI Integration.",id:"2-creating-an-instance-of-google-dai-integration",level:5},{value:"3. Using a Google DAI Source.",id:"3-using-a-google-dai-source",level:5},{value:"Notes",id:"notes",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:4},{value:"1. Importing Google DAI dependency.",id:"1-importing-google-dai-dependency",level:5},{value:"2. Using a Google DAI Source.",id:"2-using-a-google-dai-source",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"google-dynamic-ad-insertion-dai",children:"Google Dynamic Ad Insertion (DAI)"})}),"\n",(0,r.jsxs)(n.p,{children:["Google DAI is a Server-Side Ad-Insertion solution offered by Google where THEOplayer is pre-integrated and offers playback for HLS and DASH Streams. A demo can be found at\xa0",(0,r.jsx)(n.a,{href:"https://demo.theoplayer.com/google-dai",children:"https://demo.theoplayer.com/google-dai"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Your THEOplayer SDK needs to have the ",(0,r.jsx)(n.code,{children:"google-dai"})," module enabled."]}),"\n",(0,r.jsx)(n.li,{children:"You need to include the Google DAI JavaScript SDK as this is a dependency."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"starting-template",children:"Starting Template"}),"\n",(0,r.jsxs)(n.p,{children:["The first thing you need is a valid THEOplayer setup. If you have no experience with setting up our player, we have an excellent ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-162/theoplayer/v4/getting-started/sdks/web/getting-started",children:"getting started guide"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To get THEOplayer to work, you only need to do three things:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Reference the THEOplayer JavaScript library (and optionally the default CSS styles)."}),"\n",(0,r.jsx)(n.li,{children:"Add a container which can hold your video player with HTML."}),"\n",(0,r.jsxs)(n.li,{children:["Create your player through JavaScript using our ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/web/classes/Player.html",children:"API"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A basic HTML page with a working THEOplayer could like the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <title>THEOplayer Web SDK: Getting Started</title>\n        <metaname="viewport"content="width=device-width, initial-scale=1.0">\n        <link rel="stylesheet" type="text/css" href=\'/path/to/ui.css\'>\x3c!-- ads THEOplayer CSS --\x3e\n    </head>\n    <body>\n\n        <div class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"></div>\n\n        <script type=\'text/javascript\' src=\'/path/to/THEOplayer.js\'><\/script>\x3c!-- ads THEOplayer library --\x3e\n        <script>\n\n            var element = document.querySelector(\'.theoplayer-container\');\n            var player = new THEOplayer.Player(element);\n\n            player.source = {\n                sources : [{\n                    src : \'your.m3u8\',\n                    type : \'application/x-mpegurl\'\n                }]\n            };\n\n        <\/script>\n    </body>\n</html>\n'})}),"\n",(0,r.jsx)(n.p,{children:"Pretty self-explanatory, isn't it?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<link rel="stylesheet" type="text/css" href="/path/to/ui.css" />\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<script type="text/javascript" src="/path/to/THEOplayer.js"><\/script>\n'})}),"\n",(0,r.jsx)(n.p,{children:"The two snippets above are the references to the JS and CSS library."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<div\n  class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"\n></div>\n'})}),"\n",(0,r.jsx)(n.p,{children:"The snippet above is your HTML container."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"<script>\n\nvar element = document.querySelector('.theoplayer-container');\nvar player = new THEOplayer.Player(element);\n\nplayer.source = {\n    sources : [{\n        src : 'your.mpd',\n        type : 'application/dash+xml'\n    }]\n};\n\n<\/script>\n"})}),"\n",(0,r.jsx)(n.p,{children:"The snippet above initializes your player, including a HLS source."}),"\n",(0,r.jsx)(n.h3,{id:"integrating-google-dai",children:"Integrating Google DAI"}),"\n",(0,r.jsx)(n.p,{children:"Add a Google DAI JavaScript library."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'<script\n  type="text/javascript"\n  src="//imasdk.googleapis.com/js/sdkloader/ima3_dai.js"\n><\/script>\n'})}),"\n",(0,r.jsx)(n.p,{children:"Add a Google DAI ad configuration to the sources."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'const TYPES = {\n  hls: "application/vnd.apple.mpegurl",\n  dash: "application/dash+xml"\n};\n\n// example and reference tester at https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai/vastinspector\nconst SOURCES = {\n  dash: {\n    vod: {\n      integration: "google-dai",\n      availabilityType: "vod",\n      apiKey: null,\n      contentSourceID: "<contentSourceID>",\n      videoID: "<videoID>"\n    },\n    live: {\n      integration: "google-dai",\n      availabilityType: "live",\n      apiKey: null,\n      assetKey: "<assetKey>"\n    }\n  },\n  hls: {\n    vod: {\n      integration: "google-dai",\n      availabilityType: "vod",\n      apiKey: null,\n      contentSourceID: "<contentSourceID>",\n      videoID: "<videoID>"\n    },\n    live: {\n      integration: "google-dai",\n      availabilityType: "live",\n      apiKey: null,\n      assetKey: "<assetKey>"\n    }\n  }\n};\n// Configure THEOplayer Source\nconst MANIFEST_TYPE = "hls"; // \'hls\' / \'dash\'\nconst AVAILABILITY_TYPE = "vod"; // \'vod\' or \'live\'\n\nplayer.source = {\n  sources: {\n    type: TYPES[MANIFEST_TYPE],\n    ssai: SOURCES[MANIFEST_TYPE][AVAILABILITY_TYPE]\n  }\n};\n'})}),"\n",(0,r.jsx)(n.h2,{id:"android-sdk",children:"Android SDK"}),"\n",(0,r.jsx)(n.p,{children:"The usage of Google IMA differs across the two Android-based SDKs."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The Android SDK requires you to add the ",(0,r.jsx)(n.code,{children:"GoogleDaiIntegration"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The Legacy Android SDK (4.12.x) requires you to:","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Have the ",(0,r.jsx)(n.code,{children:"google-dai"})," feature flag enabled."]}),"\n",(0,r.jsx)(n.li,{children:"Include the Google DAI dependency library in your Android project."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"android-sdk-1",children:"Android SDK"}),"\n",(0,r.jsx)(n.p,{children:"Using Google DAI in the Android SDK consists of 3 steps:"}),"\n",(0,r.jsx)(n.h5,{id:"1-importing-google-dai-feature-module",children:"1. Importing Google DAI feature module."}),"\n",(0,r.jsxs)(n.p,{children:["Add ",(0,r.jsx)(n.code,{children:"implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-dai:+'"})," to your module ",(0,r.jsx)(n.code,{children:"build.gradle"})," file, as demonstrated below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:"dependencies {\n    // ...\n    implementation 'com.theoplayer.theoplayer-sdk-android:core:+'\n    implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-dai:+'\n    // ...\n}\n"})}),"\n",(0,r.jsx)(n.h5,{id:"2-creating-an-instance-of-google-dai-integration",children:"2. Creating an instance of Google DAI Integration."}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"GoogleDaiIntegration"})," through the ",(0,r.jsx)(n.code,{children:"GoogleDaiIntegrationFactory"}),", and add it to your player instance, as demonstrated below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"THEOplayerView theoPlayerView = ...;\nGoogleDaiIntegration daiIntegration = GoogleDaiIntegrationFactory.createGoogleDaiIntegration(theoPlayerView);\ntheoPlayerView.getPlayer().addIntegration(daiIntegration);\n"})}),"\n",(0,r.jsx)(n.h5,{id:"3-using-a-google-dai-source",children:"3. Using a Google DAI Source."}),"\n",(0,r.jsxs)(n.p,{children:["Use a ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/source/ssai/dai/GoogleDaiVodConfiguration.html",children:"GoogleDaiVodConfiguration"}),"\nor ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/source/ssai/dai/GoogleDaiLiveConfiguration.html",children:"GoogleDaiLiveConfiguration"}),"\nto create a ",(0,r.jsx)(n.code,{children:"GoogleDaiTypedSource"})," to request stream, as demonstrated below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SourceDescription sourceDescription = new SourceDescription.Builder(\n    new GoogleDaiTypedSource.Builder(\n        new GoogleDaiVodConfiguration.Builder("api_key", "content_source_id", "video_id")\n            .build()\n    )\n    .type(SourceType.DASH)\n    .build()\n)\n.build();\n'})}),"\n",(0,r.jsx)(n.p,{children:"OR"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SourceDescription sourceDescription = new SourceDescription.Builder(\n    new GoogleDaiTypedSource.Builder(\n        new GoogleDaiLiveConfiguration.Builder("api_key", "asset_key")\n            .build()\n    )\n    .type(SourceType.DASH)\n    .build()\n)\n.build();\n'})}),"\n",(0,r.jsx)(n.p,{children:"Then, set the source on the player:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"playerView.getPlayer().setSource(sourceDescription);\n"})}),"\n",(0,r.jsx)(n.h5,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(n.p,{children:["The available ad events are different between the Android SDK and the Legacy Android SDK (4.12.x).\nMore information is available at ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-162/theoplayer/v4/how-to-guides/ads/how-to-subscribe-to-ad-events#android-sdk",children:'"How to subscribe to ad events"'}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/ads/dai/GoogleDaiIntegration.html",children:"GoogleDaiIntegration"})," instance exposes a number of methods. For example:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/ads/dai/GoogleDaiIntegration.html#requestStream(StreamRequest,AdsRenderingSettings)",children:"requestStream(StreamRequest, AdsRenderingSettings)"})," can be used to request stream through the native Google DAI API."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/ads/dai/GoogleDaiIntegration.html#contentTimeForStreamTime(double)",children:"contentTimeForStreamTime(double)"}),"\n/ ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/ads/dai/GoogleDaiIntegration.html#streamTimeForContentTime(double)",children:"streamTimeForContentTime(double)"})," can be used to convert content time to stream time and vice versa."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,r.jsx)(n.p,{children:"Using Google DAI in the Android SDK consists of 2 steps:"}),"\n",(0,r.jsx)(n.h5,{id:"1-importing-google-dai-dependency",children:"1. Importing Google DAI dependency."}),"\n",(0,r.jsxs)(n.p,{children:["Add ",(0,r.jsx)(n.code,{children:"implementation 'com.google.ads.interactivemedia.v3:interactivemedia:3.25.1'"})," to your module ",(0,r.jsx)(n.code,{children:"build.gradle"})," file, as demonstrated below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:"dependencies {\n    // ...\n    implementation files('libs/theoplayer.aar')\n    implementation 'com.google.ads.interactivemedia.v3:interactivemedia:3.25.1'\n    // ...\n}\n"})}),"\n",(0,r.jsx)(n.h5,{id:"2-using-a-google-dai-source",children:"2. Using a Google DAI Source."}),"\n",(0,r.jsxs)(n.p,{children:["Use a ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/source/ssai/dai/GoogleDaiVodConfiguration.html",children:"GoogleDaiVodConfiguration"}),"\nor ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/source/ssai/dai/GoogleDaiLiveConfiguration.html",children:"GoogleDaiLiveConfiguration"}),"\nto create a ",(0,r.jsx)(n.code,{children:"GoogleDaiTypedSource"})," to request stream, as demonstrated below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SourceDescription sourceDescription = new SourceDescription.Builder(\n    new GoogleDaiTypedSource.Builder(\n        new GoogleDaiVodConfiguration.Builder("api_key", "content_source_id", "video_id")\n            .build()\n    )\n    .type(SourceType.DASH)\n    .build()\n)\n.build();\n'})}),"\n",(0,r.jsx)(n.p,{children:"OR"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SourceDescription sourceDescription = new SourceDescription.Builder(\n    new GoogleDaiTypedSource.Builder(\n        new GoogleDaiLiveConfiguration.Builder("api_key", "asset_key")\n            .build()\n    )\n    .type(SourceType.DASH)\n    .build()\n)\n.build();\n'})}),"\n",(0,r.jsx)(n.p,{children:"Then, set the source on the player:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"playerView.getPlayer().setSource(sourceDescription);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,r.jsxs)(n.p,{children:["First, your THEOplayer SDK needs to have the ",(0,r.jsx)(n.code,{children:"google-dai"})," module enabled."]}),"\n",(0,r.jsx)(n.p,{children:"Then, you need to include the Google DAI (Interactive Media Ads SDK) framework to your project following these steps:"}),"\n",(0,r.jsxs)(n.p,{children:["Step 1: Download ",(0,r.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/ios/dai/download",children:"Google DAI (Interactive Media Ads SDK) framework"})]}),"\n",(0,r.jsxs)(n.p,{children:["Step 2: Check ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-162/theoplayer/v4/getting-started/sdks/ios/getting-started",children:"How to Configure Framework Section to add Google DAI Framework"})]}),"\n",(0,r.jsx)(n.p,{children:"Finally, add a Google DAI ad configuration to the sources."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'//Google DAI HLS VOD Stream\nprivate var GoogleDAIVOD: SourceDescription {\n           let daiConfig = GoogleDAIVodConfiguration(videoID: "tears-of-steel", contentSourceID: "19463", apiKey: "", authToken: nil, streamActivityMonitorID: nil, adTagParameters: nil)\n           let typedSource = GoogleDAITypedSource(ssai: daiConfig)\n           return SourceDescription(source: typedSource)\n    }\n//Google DAI HLS VOD Stream\nprivate var GoogleDAILIVE: SourceDescription {\n           let daiConfig = GoogleDAILiveConfiguration(assetKey: "sN_IYUG8STe1ZzhIIE_ksA", apiKey: "", authToken: nil, streamActivityMonitorID: nil, adTagParameters: nil)\n           let typedSource = GoogleDAITypedSource(ssai: daiConfig)\n           return SourceDescription(source: typedSource)\n       }\n// Configure the player\'s source to initilaise playback\ntheoplayer.source = GoogleDAIVOD  //VOD Source\ntheoplayer.source = GoogleDAILIVE  //Live Source\n'})}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"THEOplayer SDK and Google DAI are fully pre-integrate to deliver Server-Side Ad Insertion solution, allowing customers to play streams in a breeze."}),"\n",(0,r.jsx)(n.p,{children:"Extra resources:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/GoogleDAIConfiguration.html",children:"Google DAI Pre-Integration API"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-162/theoplayer/v4/getting-started/sdks/web/getting-started",children:"THEOplayer Getting Started Guide"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads",children:"Google DAI website"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Related articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai",children:"Google DAI HTML Reference"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/android/dai",children:"Google DAI Android Reference"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/ios/dai",children:"Google DAI iOS Reference"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return a}});var o=i(67294);let r={},t=o.createContext(r);function a(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);