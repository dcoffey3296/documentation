"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17683],{69550:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=i(74848),o=i(28453);const r={},n="Chromecast Application Customization",s={id:"getting-started/sdks/chromecast/chromecast-app-customization",title:"Chromecast Application Customization",description:"This article provides information on how to customize the look and feel of a Chromecast Sender application or a Chromecast Receiver Application.",source:"@site/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/06-chromecast/01-chromecast-app-customization.md",sourceDirName:"getting-started/01-sdks/06-chromecast",slug:"/getting-started/sdks/chromecast/chromecast-app-customization",permalink:"/documentation/pr-preview/pr-151/theoplayer/v7/getting-started/sdks/chromecast/chromecast-app-customization",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/06-chromecast/01-chromecast-app-customization.md",tags:[],version:"v7",sidebarPosition:1,frontMatter:{},sidebar:"chromecast",previous:{title:"Getting started on Chromecast",permalink:"/documentation/pr-preview/pr-151/theoplayer/v7/getting-started/sdks/chromecast/getting-started"},next:{title:"How-to guides",permalink:"/documentation/pr-preview/pr-151/theoplayer/v7/how-to-guides/"}},c={},l=[{value:"Background",id:"background",level:2},{value:"Google, Chromecast and THEOplayer",id:"google-chromecast-and-theoplayer",level:3},{value:"Sender applications",id:"sender-applications",level:4},{value:"Receiver applications",id:"receiver-applications",level:4},{value:"Sender application vs Receiver application",id:"sender-application-vs-receiver-application",level:3},{value:"Customizing a Sender application",id:"customizing-a-sender-application",level:2},{value:"Default UI",id:"default-ui",level:3},{value:"Chromeless UI",id:"chromeless-ui",level:3},{value:"Altering Default UI",id:"altering-default-ui",level:3},{value:"Customizing a Receiver application",id:"customizing-a-receiver-application",level:2},{value:"Default Receiver application",id:"default-receiver-application",level:3},{value:"Custom Receiver application with THEOplayer Chromecast SDK",id:"custom-receiver-application-with-theoplayer-chromecast-sdk",level:3},{value:"Custom Receiver application without THEOplayer Chromecast SDK",id:"custom-receiver-application-without-theoplayer-chromecast-sdk",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Notes",id:"notes",level:2},{value:"Resources",id:"resources",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"chromecast-application-customization",children:"Chromecast Application Customization"})}),"\n",(0,a.jsxs)(t.p,{children:["This article provides information on how to customize the look and feel of a Chromecast ",(0,a.jsx)(t.a,{href:"https://developers.google.com/cast/glossary#sender",children:"Sender application"})," or a Chromecast ",(0,a.jsx)(t.a,{href:"https://developers.google.com/cast/glossary#receiver",children:"Receiver Application"}),".\n",(0,a.jsx)(t.img,{alt:"Casting approaches",src:i(88562).A+"",title:"Casting approaches",width:"1056",height:"535"})]}),"\n",(0,a.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,a.jsxs)(t.p,{children:["This section provides background information on Google, THEOplayer SDKs, Sender apps and Receiver apps. Feel free to skip\ndirectly to the sections on ",(0,a.jsx)(t.a,{href:"#customizing-a-sender-application",children:"Customizing a Sender Application"})," or ",(0,a.jsx)(t.a,{href:"#customizing-a-receiver-application",children:"Customizing a Receiver application"}),"\nif you are already familiar with these background topics."]}),"\n",(0,a.jsx)(t.h3,{id:"google-chromecast-and-theoplayer",children:"Google, Chromecast and THEOplayer"}),"\n",(0,a.jsxs)(t.p,{children:["Google's point of entry to Chromecast is located at ",(0,a.jsx)(t.a,{href:"https://developers.google.com/cast/docs/developers",children:"https://developers.google.com/cast/docs/developers"}),". In this article, they write about sender applications and\ntheir three Cast APIs, and about receiver applications and their four options."]}),"\n",(0,a.jsx)(t.h4,{id:"sender-applications",children:"Sender applications"}),"\n",(0,a.jsx)(t.p,{children:"Google describes three Cast APIs: the Android API, the iOS API and the Web Sender API. The THEOplayer SDKs integrate these Cast APIs and expose a wrapper API for developers to use instead."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["The THEOplayer Android SDK implements the ",(0,a.jsx)(t.a,{href:"https://developers.google.com/android/reference/com/google/android/gms/cast/package-summary",children:"Android API"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["The THEOplayer iOS SDK implements the ",(0,a.jsx)(t.a,{href:"https://developers.google.com/cast/docs/reference/ios",children:"iOS API"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["The THEOplayer Web SDK implements the ",(0,a.jsx)(t.a,{href:"https://developers.google.com/cast/docs/reference/web_sender",children:"Web Sender API"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"receiver-applications",children:"Receiver applications"}),"\n",(0,a.jsx)(t.p,{children:"Google describes four types of receiver applications:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://developers.google.com/cast/docs/web_receiver#default_media_web_receiver",children:"Default Media Receiver"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://developers.google.com/cast/docs/styled_receiver",children:"Styled Media Receiver"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://developers.google.com/cast/docs/web_receiver#custom_web_receiver",children:"Custom Receiver"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://developers.google.com/cast/docs/android_tv_receiver",children:"Android TV Receiver"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:'The THEOplayer Chromecast Receiver SDK fits in the category of a "Custom Receiver". You integrate this THEOplayer SDK in your HTML5 Chromecast Receiver application.'}),"\n",(0,a.jsx)(t.h3,{id:"sender-application-vs-receiver-application",children:"Sender application vs Receiver application"}),"\n",(0,a.jsxs)(t.p,{children:["When talking about customizing a Chromecast application, one needs to make a distinction between customizing ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-151/theoplayer/v7/how-to-guides/cast/chromecast/introduction",children:"a Sender application versus a Receiver application"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"Chromecast Sender application"}),' is the application on a "sender device" (e.g. smartphone, browser, ...) which initiates\nthe Chromecast session. You use the Sender application to start (and stop) Chromecast playback, to pause the video or to mute it,\nto seek to a different position in the scrub bar, and so on.\nThe unique UI components related to Chromecast in a Sender application are limited to a Chromecast button which starts/stops a Chromecast session.\nThe default controls (e.g. play, pause, scrub bar) are used to control the Receiver application.']}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["In a Sender application, you use either the THEOplayer ",(0,a.jsx)(t.a,{href:"https://www.theoplayer.com/sdk/html5",children:"Web"}),", ",(0,a.jsx)(t.a,{href:"https://www.theoplayer.com/sdk/ios",children:"iOS"})," or ",(0,a.jsx)(t.a,{href:"https://www.theoplayer.com/sdk/android",children:"Android"})," SDK."]})}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"Chromecast Receiver application"})," is the application which is loaded on your Chromecast-enabled device (e.g. Chromecast Ultra, Android TV, ...).\nThe UI of a Receiver application is typically quite simple:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"When a video is playing, the video is playing fullscreen without any elements overlaying it."}),"\n",(0,a.jsx)(t.li,{children:"When a video is paused, there is timeline indicating the playhead position and an element (e.g. a pause button)\nindicating that the playback is paused. Sometimes, when a video is paused, a poster image (i.e. thumbnail) and some text are shown\nto describe the active content."}),"\n",(0,a.jsx)(t.li,{children:"When an app and/or stream starts to load, you might see a brand logo and/or a spinning wheel."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["In a Receiver application, you use the THEOplayer ",(0,a.jsx)(t.a,{href:"https://www.theoplayer.com/sdk/chromecast",children:"Chromecast Receiver SDK"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"customizing-a-sender-application",children:"Customizing a Sender application"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["If you are using the THEOplayer Web, iOS or Android SDK in your Sender application, confirm that the ",(0,a.jsx)(t.code,{children:"chromecast"})," ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-151/theoplayer/v7/faq/theoplayer-features-modules",children:"module is enabled"})," for your SDK.\nThis feature exposes a Chromecast API you can benefit from. Additionally, ensure that you ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-151/theoplayer/v7/how-to-guides/cast/chromecast/enable-chromecast-on-the-sender",children:"include the Chromecast library"}),"."]})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["Please refer to\n",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-151/theoplayer/v7/how-to-guides/cast/chromecast/connecting-from-custom-sender-applications",children:'"Connecting from custom Sender applications"'}),"\nif you are not using THEOplayer's ",(0,a.jsx)(t.code,{children:"chromecast"})," feature."]})}),"\n",(0,a.jsx)(t.p,{children:"Generally speaking, there are three types of user interfaces:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Default UI: you use THEOplayer's default UI, and you're happy with it."}),"\n",(0,a.jsx)(t.li,{children:"Chromeless UI: you've build a Chromeless UI from scratch on top of THEOplayer."}),"\n",(0,a.jsx)(t.li,{children:"Altering Default UI: you use THEOplayer's default UI, but you've changed some things around. (e.g. different colors, a new button, ....)"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"default-ui",children:"Default UI"}),"\n",(0,a.jsxs)(t.p,{children:["THEOplayer automatically inserts a Chromecast button in its default video player UI if you are using THEOplayer's default UI.\n",(0,a.jsx)(t.img,{alt:"Chromecast button",src:i(19682).A+"",title:"Chromecast button",width:"1346",height:"752"}),"\nThe UI of this button changes when the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/types/CastState.html",children:"Chromecast state"})," changes.\nPlease see below if you want to alter this default UI."]}),"\n",(0,a.jsx)(t.h3,{id:"chromeless-ui",children:"Chromeless UI"}),"\n",(0,a.jsxs)(t.p,{children:["You are in charge of all UI components if you are using THEOplayer's Chromeless UI.\nTypically, you want to insert a Chromecast button, and connect that button with our Cast API to start\n(e.g. ",(0,a.jsx)(t.code,{children:"player.cast.chromecast.start()"}),") and stop (",(0,a.jsx)(t.code,{children:"player.cast.chromecast.stop()"}),") a Chromecast session. Additionally, you might want to change the appearance of this\nbutton when the state of your casting session transitions (e.g. ",(0,a.jsx)(t.code,{children:"player.cast.chromecast.addEventListener('statechange', function() {...});"}),")."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Web: ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/Chromecast.html",children:"Chromecast API"}),", ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/VendorCast.html",children:"Cast API"}),", ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/VendorCastEventMap.html",children:"Cast Events API"})]}),"\n",(0,a.jsxs)(t.li,{children:["iOS: ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/ios/Protocols/Chromecast.html",children:"Chromecast API"}),", ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/ios/ChromeCast%20Events.html#/s:13THEOplayerSDK16StateChangeEventC",children:"Chromecast Events API"})]}),"\n",(0,a.jsxs)(t.li,{children:["Android: ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/android/com/theoplayer/android/api/cast/chromecast/Chromecast.html",children:"Chromecast API"}),", ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/android/com/theoplayer/android/api/event/chromecast/CastStateChangeEvent.html",children:"Chromecast Events API"})]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Familiarize yourself with the above APIs if you want to change the appearance of your Chromeless UI and its relation to Chromecast."}),"\n",(0,a.jsx)(t.h3,{id:"altering-default-ui",children:"Altering Default UI"}),"\n",(0,a.jsxs)(t.p,{children:["If you are using THEOplayer's default UI, but want to use your own button instead, then you can hide THEO's default button, and ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-151/theoplayer/v7/how-to-guides/ui/how-to-insert-a-button",children:"insert a new one"}),' instead. You also need to use our Cast API described in the above "Chromeless UI" section.']}),"\n",(0,a.jsx)(t.h2,{id:"customizing-a-receiver-application",children:"Customizing a Receiver application"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-151/theoplayer/v7/how-to-guides/cast/chromecast/introduction",children:"Three Receiver application set-ups"})," are common:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"You connect with THEOplayer's default Receiver application."}),"\n",(0,a.jsx)(t.li,{children:"You connect with a custom Receiver application powered by the THEOplayer Chromecast Receiver SDK."}),"\n",(0,a.jsx)(t.li,{children:"You connect with a custom Receiver application which doesn't contain any THEOplayer SDK or code."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["You can provide Chromecast metadata in all three set-ups. Providing ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/SourceDescription.html#metadata",children:"Chromecast metadata"})," will make your Receiver application show relevant info (e.g. a title, a thumbnail, ...) when\nyour application is buffering or paused."]}),"\n",(0,a.jsx)(t.h3,{id:"default-receiver-application",children:"Default Receiver application"}),"\n",(0,a.jsx)(t.p,{children:"If you are connected to THEOplayer's default Receiver application, you cannot modify its appearance."}),"\n",(0,a.jsxs)(t.p,{children:["If you want to change the UI, you need to ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-151/theoplayer/v7/how-to-guides/cast/chromecast/connecting-from-custom-sender-applications",children:"connect your sender application with a different Receiver application ID"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"custom-receiver-application-with-theoplayer-chromecast-sdk",children:"Custom Receiver application with THEOplayer Chromecast SDK"}),"\n",(0,a.jsxs)(t.p,{children:["You can build a custom Receiver application by using our ",(0,a.jsx)(t.a,{href:"https://www.theoplayer.com/sdk/chromecast",children:"Chromecast Receiver SDK"}),".\nOnce you went through its ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-151/theoplayer/v7/getting-started/sdks/chromecast/getting-started",children:"Getting Started Guide"}),", you'll notice\nthat the UI is similar to the default UI. However, through this approach, you have the option to alter the UI as described by the ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-151/theoplayer/v7/getting-started/sdks/chromecast/getting-started#optional-alter-default-ui",children:"Getting Started Guide"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"custom-receiver-application-without-theoplayer-chromecast-sdk",children:"Custom Receiver application without THEOplayer Chromecast SDK"}),"\n",(0,a.jsxs)(t.p,{children:["You can ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-151/theoplayer/v7/how-to-guides/cast/chromecast/connecting-from-custom-sender-applications",children:"connect your sender application with a custom Receiver application"})," which does not use the THEOplayer Chromecast SDK.\nNaturally, you're responsibile for the look and feel of this custom Receiver application."]}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"Identify whether you want to adjust the UI and UX of the Sender application or the Receiver application."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If it's the Sender application, determine whether you are changing\na Sender app which leverages the THEOplayer Web, iOS or Android SDK to enable casting."}),"\n",(0,a.jsx)(t.li,{children:"If it's the Receiver application, determine whether you are changing our default Receiver application,\na custom Receiver application using the THEOplayer Chromecast SDK or 3) a custom Receiver application which is not using the THEOplayer Chromecast."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Then, decide which states and which components you want to customize. Finally, identify which THEOplayer APIs are relevant\nfor your use-cases."}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Google describes their Chromecast UX guideliness at ",(0,a.jsx)(t.a,{href:"https://developers.google.com/cast/docs/ux_guidelines/",children:"https://developers.google.com/cast/docs/ux_guidelines/"}),"."]}),"\n",(0,a.jsx)(t.li,{children:'This article is currently categorized under the "Getting Started" guides of our Chromecast SDK, which is also known as our Chromecast Receiver SDK.\nNaturally: you leverage a Chromecast Receiver SDK in a Chromecast Receiver application. In result, this categorization might be confusing to some readers,\nbecause we have discussed concepts and APIs which relate to a Sender application.\nHowever, we do feel that it\'s valuable to discuss the bigger picture surrounding a Chromecast Receiver SDK, and that includes its relationship\nwith a Sender application, and how to customize both.'}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-151/theoplayer/v7/getting-started/sdks/chromecast/getting-started",children:"Getting started on Chromecast"}),". This article contains sample code. Note that the THEOplayer\nChromecast SDK also contains a sample Receiver application."]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-151/theoplayer/v7/how-to-guides/cast/chromecast/enable-chromecast-on-the-sender",children:"Enable Chromecast on the Sender"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-151/theoplayer/v7/how-to-guides/cast/chromecast/introduction",children:"Chromecast Introduction"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-151/theoplayer/v7/how-to-guides/cast/chromecast/how-to-configure-to-a-different-stream",children:"How to configure a different stream to Chromecast"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},88562:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/casting-approaches-45dc2983f20d11409d27d3248b57a6ef.png"},19682:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/chromecast-active-53e1680cf7234d5d0c029e99356dd548.png"},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>s});var a=i(96540);const o={},r=a.createContext(o);function n(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);