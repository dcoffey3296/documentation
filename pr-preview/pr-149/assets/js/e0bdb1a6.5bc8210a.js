"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74372],{4970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(74848),r=n(28453);const s={},o="MediaMelon SmartSight",a={id:"how-to-guides/analytics/mediamelon-smartsight",title:"MediaMelon SmartSight",description:"MediaMelon SmartSight is an analytics service maintained by MediaMelon. The library is maintained by the MediaMelon team.",source:"@site/theoplayer/how-to-guides/02-analytics/08-mediamelon-smartsight.md",sourceDirName:"how-to-guides/02-analytics",slug:"/how-to-guides/analytics/mediamelon-smartsight",permalink:"/documentation/pr-preview/pr-149/theoplayer/how-to-guides/analytics/mediamelon-smartsight",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/02-analytics/08-mediamelon-smartsight.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"roku",previous:{title:"Adobe Analytics",permalink:"/documentation/pr-preview/pr-149/theoplayer/how-to-guides/analytics/adobe-analytics"},next:{title:"Wicket Labs",permalink:"/documentation/pr-preview/pr-149/theoplayer/how-to-guides/analytics/wicket-labs"}},l={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Connecting MediaMelon to THEOplayer",id:"connecting-mediamelon-to-theoplayer",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"iOS/tvOS SDK",id:"iostvos-sdk",level:5}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"mediamelon-smartsight",children:"MediaMelon SmartSight"})}),"\n",(0,i.jsx)(t.p,{children:"MediaMelon SmartSight is an analytics service maintained by MediaMelon. The library is maintained by the MediaMelon team."}),"\n",(0,i.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"No"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"A valid THEOplayer license."}),"\n",(0,i.jsx)(t.li,{children:"A MediaMelon SDK."}),"\n",(0,i.jsxs)(t.li,{children:["A MediaMelon Customer ID (",(0,i.jsx)(t.strong,{children:"Note:"})," If you do not know your Customer ID contact MediaMelon at ",(0,i.jsx)(t.a,{href:"mailto:support@mediamelon.com",children:"support@mediamelon.com"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"connecting-mediamelon-to-theoplayer",children:"Connecting MediaMelon to THEOplayer"}),"\n",(0,i.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsxs)(t.p,{children:["For the most up to date information on how to integrate MediaMelon SmartSight with THEOplayer Web SDK, please refer to their integration guide ",(0,i.jsx)(t.a,{href:"https://docs.mediamelon.com/mediamelon/smartsight-player-sdk-integration/web",children:"here"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 1: Add THEOplayer and MediaMelon SDK"}),"\nInclude the following scripts in the web page (before ",(0,i.jsx)(t.code,{children:"THEOplayer.js"})," is loaded):"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"  <script type=\"text/javascript\" src=\"https://PATH_TO_SMARTSIGHT_SDK/mmsmartstreaming_theoplayer.min.js\"><\/script>\n  <script type='text/javascript' src='THEOplayer.js'><\/script>\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 2: Register and Initialize MediaMelon SDK"}),"\nNote: ",(0,i.jsx)(t.code,{children:"<customer_id>"})," is your MediaMelon-assigned Customer ID. If you do not know your Customer ID, contact MediaMelon at ",(0,i.jsx)(t.a,{href:"mailto:support@mediamelon.com",children:"support@mediamelon.com"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"After the player instance has been created, create a new plugin object, register, report player Info and then initialize the plugin as shown below:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:' var theoPlayer = new THEOplayer.Player(element, {\n libraryLocation: "your_library_location",\n license: "your_license_here"\n })\n\nvar mmVideoAssetInfo = {\n      "assetName": "ASSET_NAME",\n      "assetId": "ASSET_ID",\n      "videoId": "VIDEO_ID",\n      "contentType": "CONTENT_TYPE",\n      "genre": "GENRE",\n      "drmProtection": "DRM_PROTECTION",\n      "episodeNumber": "EPISODE_NUMBER",\n      "season": "SEASON",\n      "seriesTitle": "SERIES_TITLE",\n      "videoType": "VIDEO_TYPE",\n      "customTags": {\n          "key1": "VALUE_STRING1",\n          "key2": "VALUE_STRING2"\n      }\n };\n\n var theoPlugin = new mmTheoJSAdapter();\n if(theoPlugin.getRegistrationStatus() === false){\n    theoPlugin.registerMMSmartStreaming("PLAYER_NAME", "CUSTOMER_ID", "SUBSCRIBER_ID", "DOMAIN_NAME", "SUBSCRIBER_TYPE" , "SUBSCRIBER_TAG");\n    theoPlugin.reportPlayerInfo("PLAYER_BRAND", "PLAYER_MODEL", "PLAYER_VERSION");\n }\n \n theoPlugin.reportAppInfo("APP_NAME", "APP_VERSION");\n theoPlugin.setDeviceInfo("DEVICE_MARKETING_NAME");\n theoPlugin.reportVideoQuality("VIDEO_QUALITY");\n theoPlugin.reportDeviceId("DEVICE_ID");\n    \n var isLive = false;    //Set this to true for a live stream or false for a VOD stream\n // If isLive is not set here, it will be handled internally by the SDK.\n theoPlugin.initialize(theoPlayer, "STREAM_URL", mmVideoAssetInfo, isLive);\n \n // Call this Error API to report an App Error.\n theoPlugin.reportAppError("ERROR_MESSAGE", "ERROR_CODE"); \n'})}),"\n",(0,i.jsxs)(t.p,{children:["You can find an explanation of the parameters on the snippet above ",(0,i.jsx)(t.a,{href:"https://docs.mediamelon.com/mediamelon/smartsight-player-sdk-integration/web/theoplayer-web-v2-1#cl-step-4-providing-content-metadata-and-custom-tags",children:"here"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Step 3: (Optional) Providing custom metadata and tags"})}),"\n",(0,i.jsxs)(t.p,{children:["You can also provide custom metadata and tags as shown below in HTML/JS while setting source information. Please use the ",(0,i.jsx)(t.code,{children:"mmVideoAssetInfo"})," structure to provide this information."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'player.source = {\n  sources: [\n    {\n      src: "//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",\n      type: "application/x-mpegurl"\n    }\n  ],\n  mmVideoAssetInfo: {\n    assetName: "Elephants Dream",\n    assetId: "ASSETID_STRING",\n    videoId: "VIDEOID_STRING",\n    customTags: {\n      key1: "VALUE_STRING1",\n      key2: "VALUE_STRING2",\n      key3: "VALUE_STRING3"\n    }\n  }\n};\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Step 4: (Optional) Disable Manifest Fetch"})}),"\n",(0,i.jsxs)(t.p,{children:["If your workflow restricts the manifest to be accessible from both player and SDK simultaneously, then, you can disable the fetch of manifest via the ",(0,i.jsx)(t.code,{children:"disableManifestsFetch"})," API:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'var player = new THEOplayer.Player(element, {\n    libraryLocation : \'path_to_your_library/\',\n    license: \'your_license_here\'\n});\n\n var theoPlugin = new mmTheoJSAdapter();\n if(theoPlugin.getRegistrationStatus() === false){\n    theoPlugin.registerMMSmartStreaming("PLAYER_NAME", "CUSTOMER_ID", "SUBSCRIBER_ID", "DOMAIN_NAME", "SUBSCRIBER_TYPE" , "SUBSCRIBER_TAG");\n    theoPlugin.reportPlayerInfo("PLAYER_BRAND", "PLAYER_MODEL", "PLAYER_VERSION");\n    theoPlugin.disableManifestsFetch(true);\n }\n\ntheoPlugin.initialize(theoPlayer);\n'})}),"\n",(0,i.jsx)(t.p,{children:"If you now host a page with the logic described above implemented correctly, THEOplayer will start sending beacons to your MediaMelon dashboard and you should be seeing data coming in to the MediaMelon dashboard in no time."}),"\n",(0,i.jsx)(t.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,i.jsxs)(t.p,{children:["For the most up to date information on how to integrate MediaMelon SmartSight with THEOplayer Android (TV) SDK, please refer to their integration guide ",(0,i.jsx)(t.a,{href:"https://docs.mediamelon.com/mediamelon/smartsight-player-sdk-integration/android",children:"here"})," where you can find step by step guidance as well as code examples."]}),"\n",(0,i.jsx)(t.h5,{id:"iostvos-sdk",children:"iOS/tvOS SDK"}),"\n",(0,i.jsxs)(t.p,{children:["For the most up to date information on how to integrate MediaMelon SmartSight with THEOplayer iOS/tvOS SDK, please refer to their integration guide ",(0,i.jsx)(t.a,{href:"https://docs.mediamelon.com/mediamelon/smartsight-player-sdk-integration/ios",children:"here for iOS"})," and ",(0,i.jsx)(t.a,{href:"https://docs.mediamelon.com/mediamelon/smartsight-player-sdk-integration/tvos-sdk",children:"here for tvOS"}),", where you can find step by step guidance as well as code examples."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);