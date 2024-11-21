"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["68681"],{14292:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>s,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"getting-started/sdks/ios/migration-from-4.x","title":"Migration from THEOplayer iOS and tvOS SDK 4.x to THEOplayer iOS/tvOS SDK 5.0+","description":"Disclaimer: As this document is published at the date of releasing THEOplayer 5.0, it is not always accurate since the player regularly is updated with new supported features. Please refer to our changelog for more up to date information.","source":"@site/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/03-ios/02-migration-from-4.x.md","sourceDirName":"getting-started/01-sdks/03-ios","slug":"/getting-started/sdks/ios/migration-from-4.x","permalink":"/documentation/pr-preview/pr-163/theoplayer/v7/getting-started/sdks/ios/migration-from-4.x","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/03-ios/02-migration-from-4.x.md","tags":[],"version":"v7","sidebarPosition":2,"frontMatter":{},"sidebar":"ios","previous":{"title":"THEOplayer iOS/tvOS 5.0 Feature Integrations","permalink":"/documentation/pr-preview/pr-163/theoplayer/v7/getting-started/sdks/ios/features"},"next":{"title":"How-to guides","permalink":"/documentation/pr-preview/pr-163/theoplayer/v7/how-to-guides/"}}'),i=n("85893"),a=n("50065");let o={},s="Migration from THEOplayer iOS and tvOS SDK 4.x to THEOplayer iOS/tvOS SDK 5.0+",l={},d=[{value:"What are the differences between 4.x and 5.0?",id:"what-are-the-differences-between-4x-and-50",level:2},{value:"When to migrate?",id:"when-to-migrate",level:2},{value:"When not to migrate?",id:"when-not-to-migrate",level:2},{value:"Migration",id:"migration",level:2},{value:"1. The deprecated (and removed) APIs.",id:"1-the-deprecated-and-removed-apis",level:4},{value:"2. The new integration-based architecture.",id:"2-the-new-integration-based-architecture",level:4}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"migration-from-theoplayer-ios-and-tvos-sdk-4x-to-theoplayer-iostvos-sdk-50",children:"Migration from THEOplayer iOS and tvOS SDK 4.x to THEOplayer iOS/tvOS SDK 5.0+"})}),"\n",(0,i.jsxs)(t.p,{children:["Disclaimer: As this document is published at the date of releasing THEOplayer 5.0, it is not always accurate since the player regularly is updated with new supported features. Please refer to our ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-163/theoplayer/v7/changelog",children:"changelog"})," for more up to date information."]}),"\n",(0,i.jsx)(t.h2,{id:"what-are-the-differences-between-4x-and-50",children:"What are the differences between 4.x and 5.0?"}),"\n",(0,i.jsx)(t.p,{children:"The THEOplayer iOS/tvOS SDK 5.0+ is more performant than the legacy iOS and tvOS SDK (4.12.x), as it removes the dependency on the WebView to handle video-playback and supported features."}),"\n",(0,i.jsx)(t.p,{children:"Removing the WebView dependency will also allow us to move many of the APIs from being asynchronous to being synchronous, such as querying the current time."}),"\n",(0,i.jsxs)(t.p,{children:["The THEOplayer iOS/tvOS SDK 5.0+ moves towards more modularized features, which means there is a base SDK that can handle basic playback and additional feature integrations are provided as separate modules that can be added as desired.\nThis approach gives more flexibility and results in a reduced application size, since non-required parts are not included in the build of the application.\nYou can read more about this ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-163/theoplayer/v7/getting-started/sdks/what-is-new-in-theoplayer-5",children:"here"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Lastly, the THEOplayer iOS/tvOS SDK 5.0+ is released only on package managers (Cocoapods, and Swift packages later) which allow developers to easily fetch and implement the latest player into their app."}),"\n",(0,i.jsx)(t.h2,{id:"when-to-migrate",children:"When to migrate?"}),"\n",(0,i.jsx)(t.p,{children:"THEOplayer iOS/tvOS SDK 5.0+ is a more performant version of our SDK, so we advise you to migrate as soon as possible."}),"\n",(0,i.jsx)(t.p,{children:"However, the 5.0 SDK is built from the ground up so from day 1 it will be not in feature parity with the legacy SDKs."}),"\n",(0,i.jsx)(t.p,{children:"What features are covered already in THEOplayer iOS/tvOS SDK 5.0?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Basic playback (HLS, MP4) with playback events"}),"\n",(0,i.jsx)(t.li,{children:"Fairplay DRM playback"}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-drm-integration",children:"Custom content protection integrations"})}),"\n",(0,i.jsx)(t.li,{children:"Google IMA integration"}),"\n",(0,i.jsx)(t.li,{children:"Google Cast (Chromecast) integration"}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-163/theoplayer/v7/how-to-guides/miscellaneous/picture-in-picture#ios--tvos-sdk",children:"Native picture-in-picture support"})}),"\n",(0,i.jsx)(t.li,{children:"Fullscreen playback"}),"\n",(0,i.jsx)(t.li,{children:"Airplay support"}),"\n",(0,i.jsx)(t.li,{children:"Background audio playback"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If the implemented features are covering your use-cases, feel free to upgrade.\nThe changes due to deprecations in your code will be minimal, THEOplayer iOS/tvOS SDK 5.0+ tries to be backward compatible with the legacy 4.x APIs as much as possible."}),"\n",(0,i.jsx)(t.h2,{id:"when-not-to-migrate",children:"When not to migrate?"}),"\n",(0,i.jsx)(t.p,{children:"If your use-cases rely on missing features and you can not implement them on top of the player."}),"\n",(0,i.jsx)(t.p,{children:"Some features, like:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"DRM pre-integrations"}),"\n",(0,i.jsx)(t.li,{children:"Analytics pre-integrations: Agama, Moat, Conviva, Youbora"}),"\n",(0,i.jsx)(t.li,{children:"Advertisement pre-integrations: THEOAds, Spotx"}),"\n",(0,i.jsx)(t.li,{children:"Server-side ad insertion: Google DAI (coming soon), Yospace, MediaTailor, Verizon Media"}),"\n",(0,i.jsx)(t.li,{children:"VR"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Or features which brought to life via the WebView's middle layer:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Related Content API"}),"\n",(0,i.jsx)(t.li,{children:"Javascript execution"}),"\n",(0,i.jsx)(t.li,{children:"CSS injection"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Or you rely on the default THEOplayer UI."}),"\n",(0,i.jsx)(t.p,{children:"The current THEOplayer iOS/tvOS SDK is chromeless, it means you need to implement your own native UI on top of the player."}),"\n",(0,i.jsx)(t.p,{children:"Soon we will also release a fully native, customizable UI module (connector). Stay tuned!"}),"\n",(0,i.jsx)(t.h2,{id:"migration",children:"Migration"}),"\n",(0,i.jsx)(t.p,{children:"There are 2 main things you need to consider during migration:"}),"\n",(0,i.jsx)(t.h4,{id:"1-the-deprecated-and-removed-apis",children:"1. The deprecated (and removed) APIs."}),"\n",(0,i.jsxs)(t.p,{children:["For these ones please consult with our ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-163/theoplayer/v7/changelog",children:"changelog"})]}),"\n",(0,i.jsx)(t.h4,{id:"2-the-new-integration-based-architecture",children:"2. The new integration-based architecture."}),"\n",(0,i.jsxs)(t.p,{children:["You can read more about the new architecture ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-163/theoplayer/v7/getting-started/sdks/what-is-new-in-theoplayer-5",children:"here"})]}),"\n",(0,i.jsx)(t.p,{children:"Use the latest THEOplayer iOS/tvOS SDK Cocoapod in your Podfile."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"pod 'THEOplayerSDK-core', '~> 5.0'\n"})}),"\n",(0,i.jsx)(t.p,{children:"If you rely on Google IMA advertisement or Google Cast (Chromecast) features, you need to intialized the relevant integrations accordingly before you try to use them."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"For Google IMA:"})}),"\n",(0,i.jsx)(t.p,{children:"Pull the integration from Cocoapods:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"pod 'THEOplayerSDK-Integration-GoogleIMA', '~> 5.0'\n"})}),"\n",(0,i.jsx)(t.p,{children:"Initialize the integration:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"import THEOplayerGoogleIMAIntegration\n...\n\nlet imaIntegration = GoogleIMAIntegrationFactory.createIntegration(on: self.theoplayer)\n\nself.theoplayer.addIntegration(imaIntegration)\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"For Google Cast:"})}),"\n",(0,i.jsx)(t.p,{children:"Pull the integration from Cocoapods:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"pod 'THEOplayerSDK-Integration-GoogleIMA', '~> 5.0'\n"})}),"\n",(0,i.jsx)(t.p,{children:"Initialize the integration:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"import THEOplayerGoogleCastIntegration\n...\n\nlet castConfig = CastConfiguration(strategy: .manual)\nlet castIntegration = GoogleCastIntegrationFactory.createIntegration(on: self.theoplayer, with: castConfig)\n\nself.theoplayer.addIntegration(castIntegration)\n"})}),"\n",(0,i.jsx)(t.p,{children:"After these steps you should be able to compile your project and benefit from THEOplayer iOS/tvOS SDK 5.0."}),"\n",(0,i.jsxs)(t.p,{children:["The Google Cast and Google IMA integration APIs are mapped to ",(0,i.jsx)(t.code,{children:"theoplayer.ads"})," and ",(0,i.jsx)(t.code,{children:"theoplayer.cast.chromecast"})," APIs, but you can also access the same APIs (and new ones) on the integrations itself."]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var r=n(67294);let i={},a=r.createContext(i);function o(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);