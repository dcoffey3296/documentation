"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43082],{22358:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var n=a(74848),r=a(28453);const t={},o="MediaTailor",s={id:"how-to-guides/ads/mediatailor",title:"MediaTailor",description:"MediaTailor is a service that provides scalable ad insertion and channel assembly. It is able to serve targeted ad content to viewers and create linear streams while maintaining broadcast quality in over-the-top (OTT) video applications. It supports HLS and DASH for both VOD and live workflows.",source:"@site/theoplayer_versioned_docs/version-v7/how-to-guides/01-ads/12-mediatailor.md",sourceDirName:"how-to-guides/01-ads",slug:"/how-to-guides/ads/mediatailor",permalink:"/documentation/pr-preview/pr-142/theoplayer/v7/how-to-guides/ads/mediatailor",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/01-ads/12-mediatailor.md",tags:[],version:"v7",sidebarPosition:12,frontMatter:{},sidebar:"roku",previous:{title:"How to subscribe to ad events",permalink:"/documentation/pr-preview/pr-142/theoplayer/v7/how-to-guides/ads/how-to-subscribe-to-ad-events"},next:{title:"Introduction",permalink:"/documentation/pr-preview/pr-142/theoplayer/v7/how-to-guides/analytics/introduction"}},d={},l=[{value:"Web SDK",id:"web-sdk",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Limitations",id:"limitations",level:4},{value:"Android SDK",id:"android-sdk",level:3},{value:"Android SDK",id:"android-sdk-1",level:4},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:4},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:3}];function c(e){const i={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"mediatailor",children:"MediaTailor"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://docs.aws.amazon.com/mediatailor/index.html",children:"MediaTailor"})," is a service that provides scalable ad insertion and channel assembly. It is able to serve targeted ad content to viewers and create linear streams while maintaining broadcast quality in over-the-top (OTT) video applications. It supports HLS and DASH for both VOD and live workflows."]}),"\n",(0,n.jsx)(i.p,{children:"At the moment of writing only linear ads are supported, but it is possible to expand it to non-linear and companion ads as well."}),"\n",(0,n.jsx)(i.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,n.jsx)(i.h4,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(i.p,{children:"There are three requirements to use a MediaTailor stream with THEOplayer:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Have a THEOplayer build with the ",(0,n.jsx)(i.code,{children:"mediatailor"})," feature flag set."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"src"})," is set to the session initialization URL."]}),"\n",(0,n.jsxs)(i.li,{children:["The integration parameter is set with the value ",(0,n.jsx)(i.code,{children:"mediatailor"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"If everything is set up correctly, THEOplayer will play the stream and send the necessary tracking beacons."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",children:"const player = new THEOplayer.Player(element, {\n    libraryLocation: 'path/to/theoplayer',\n    license: 'your-license-here',\n    ...\n});\n\nplayer.source = {\n    sources: [\n        {\n            src: '<mediatailorURL>/v1/session/<hashed-account-id>/<origin-id>/<asset-id>',\n            integration: 'mediatailor'\n        }\n    ]\n}\n"})}),"\n",(0,n.jsx)(i.h4,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsx)(i.p,{children:"The scope of the MediaTailor integration for now is limited to sending the tracking beacons. This encapsulates only the events that can be sent with the default implementation of THEOplayer. For example skipping an ad is not yet supported so the events that correspond to skipping an ad will never occur."}),"\n",(0,n.jsxs)(i.p,{children:["Seeking is only disabled during an ad, no logic is in place for playing an ad if the user ",(0,n.jsx)(i.em,{children:"seeked"})," past it."]}),"\n",(0,n.jsx)(i.h3,{id:"android-sdk",children:"Android SDK"}),"\n",(0,n.jsx)(i.h4,{id:"android-sdk-1",children:"Android SDK"}),"\n",(0,n.jsxs)(i.p,{children:["To use a MediaTailor stream with THEOplayer on Android SDK, first import our MediaTailor module dependency in your ",(0,n.jsx)(i.code,{children:"build.gradle"})," file."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"implementation 'com.theoplayer.theoplayer-sdk-android:core:+'\nimplementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-mediatailor:+' // add MediaTailor dependency\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Then, add the MediaTailor integration to the ",(0,n.jsx)(i.code,{children:"Player"})]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"MediaTailorIntegration mediaTailor = MediaTailorIntegrationFactory.createMediaTailorIntegration(theoPlayerView);\ntheoPlayerView.getPlayer().addIntegration(mediaTailor);\n"})}),"\n",(0,n.jsx)(i.p,{children:"Finally, set a MediaTailorSource to play."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:'MediaTailorSource mediaTailorSource = new MediaTailorSource.Builder()\n    .src("<mediatailorURL>/v1/session/<hashed-account-id>/<origin-id>/<asset-id>")\n    .build();\n\nSourceDescription sourceDescription = new SourceDescription.Builder()\n    .sources(mediaTailorSource)\n    .build();\n\ntheoPlayerView.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,n.jsx)(i.h4,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,n.jsxs)(i.p,{children:["For the Legacy Android SDK (4.12.x), make sure to have a THEOplayer build with the ",(0,n.jsx)(i.code,{children:"mediatailor"})," feature flag set.\nAnd then set a MediaTailorSource to play similar to the Android SDK shown above."]}),"\n",(0,n.jsx)(i.h3,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,n.jsx)(i.p,{children:"To use a MediaTailor stream with THEOplayer on the iOS SDK, you have to:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["make sure that your SDK build has the ",(0,n.jsx)(i.code,{children:"mediatailor"})," flag enabled (similarly to the other SDKs)"]}),"\n",(0,n.jsx)(i.li,{children:"set a MediaTailorSource to play, as follows"}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-swift",children:' player.source = SourceDescription(\n    source: MediaTailorSource(\n        src: "<mediatailorURL>/v1/session/<hashed-account-id>/<origin-id>/<asset-id>",\n        type: "application/x-mpegurl"\n    )\n )\n'})}),"\n",(0,n.jsx)(i.p,{children:"Note that the MediaTailor URL must have the same structure as described above (Web SDK). Different URL structures may result in playback errors."})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,i,a)=>{a.d(i,{R:()=>o,x:()=>s});var n=a(96540);const r={},t=n.createContext(r);function o(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);