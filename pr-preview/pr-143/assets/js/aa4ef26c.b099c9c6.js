"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73445],{50181:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(74848),r=n(28453);const s={},o="Picture-in-Picture",l={id:"how-to-guides/miscellaneous/picture-in-picture",title:"Picture-in-Picture",description:"This guide explains what Picture-in-Picture (PiP) is, describes how to implement it and links relevant resources.",source:"@site/theoplayer_versioned_docs/version-v4/how-to-guides/07-miscellaneous/07-picture-in-picture.md",sourceDirName:"how-to-guides/07-miscellaneous",slug:"/how-to-guides/miscellaneous/picture-in-picture",permalink:"/documentation/pr-preview/pr-143/theoplayer/v4/how-to-guides/miscellaneous/picture-in-picture",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/07-miscellaneous/07-picture-in-picture.md",tags:[],version:"v4",sidebarPosition:7,frontMatter:{},sidebar:"roku",previous:{title:"Clipping",permalink:"/documentation/pr-preview/pr-143/theoplayer/v4/how-to-guides/miscellaneous/clipping"},next:{title:"Using hlsDateRange property",permalink:"/documentation/pr-preview/pr-143/theoplayer/v4/how-to-guides/miscellaneous/using-hlsdatarange-property"}},a={},c=[{value:"SDKs",id:"sdks",level:2},{value:"How to use Picture-in-Picture",id:"how-to-use-picture-in-picture",level:2},{value:"Code Examples",id:"code-examples",level:2},{value:"Enable Picture-In-Picture mode",id:"enable-picture-in-picture-mode",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android / Fire TV SDK",id:"android--fire-tv-sdk",level:5},{value:"iOS / tvOS SDK",id:"ios--tvos-sdk",level:5},{value:"Observe events in Picture-In-Picture",id:"observe-events-in-picture-in-picture",level:3},{value:"Android SDK",id:"android-sdk",level:5},{value:"Returning from PiP Mode: Playback Behavior",id:"returning-from-pip-mode-playback-behavior",level:6},{value:"1. <strong>ACTIVITY PiPType:</strong>",id:"1-activity-piptype",level:6},{value:"2. <strong>DIALOG PiPType:</strong>",id:"2-dialog-piptype",level:6},{value:"3. <strong>CUSTOM PiPType:</strong>",id:"3-custom-piptype",level:6},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"in-app Picture in Picture",id:"in-app-picture-in-picture",level:6},{value:"out-of-app Picture in Picture",id:"out-of-app-picture-in-picture",level:6},{value:"Sample applications",id:"sample-applications",level:2},{value:"Web SDK",id:"web-sdk-1",level:3},{value:"Android SDK",id:"android-sdk-1",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Known Limitations",id:"known-limitations",level:2},{value:"Resources",id:"resources",level:2},{value:"Web SDK",id:"web-sdk-2",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-1",level:5},{value:"Android SDK",id:"android-sdk-2",level:5}];function d(e){const i={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h5:"h5",h6:"h6",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"picture-in-picture",children:"Picture-in-Picture"})}),"\n",(0,t.jsx)(i.p,{children:"This guide explains what Picture-in-Picture (PiP) is, describes how to implement it and links relevant resources."}),"\n",(0,t.jsx)(i.p,{children:"The Picture-in-Picture feature allows developers to create a floating player. This is commonly used to let the video remain playing on screen even if:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The user scrolls to another section of the page (causing the original player to no longer be visible)."}),"\n",(0,t.jsx)(i.li,{children:"The user sends the application to the background."}),"\n",(0,t.jsx)(i.li,{children:"The user opens a new page within the same application."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"sdks",children:"SDKs"}),"\n",(0,t.jsx)(i.p,{children:"The below table makes a comparison of the available THEOplayer APIs specifically targeting in or out of app PiP use cases. This table does not represent the possibilities on the platforms with THEOplayer."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"Type"}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"Roku SDK"}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"Fire TV SDK"}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{style:{textAlign:"center"},children:[(0,t.jsx)(i.strong,{children:"in-app"}),(0,t.jsx)("sup",{children:"1"})]}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsxs)(i.td,{style:{textAlign:"center"},children:["No",(0,t.jsx)("sup",{children:"3"})]}),(0,t.jsxs)(i.td,{style:{textAlign:"center"},children:["No",(0,t.jsx)("sup",{children:"3"})]}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsxs)(i.td,{style:{textAlign:"center"},children:["No",(0,t.jsx)("sup",{children:"3"})]}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"N/A"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{style:{textAlign:"center"},children:[(0,t.jsx)(i.strong,{children:"out-of-app"}),(0,t.jsx)("sup",{children:"2"})]}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"N/A"})]})]})]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)("sup",{children:"1"})," While using in-app picture-in-picture, the visibility of the PiP window is contained to the inside of the app. In other words, it will go to background/foreground with the application."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)("sup",{children:"2"})," While using out-of-app picture-in-picture, the visibility of the PiP windows is not contained to the inside of the app. It can remain visible while the user navigates to other views, pages or apps."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)("sup",{children:"3"})," On Android/Fire TV SDK, there is no API to explicitly only allow in-app PiP. The existing ",(0,t.jsx)(i.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/pip/package-summary.html",children:"PiP API"})," activates both in and out of app PiP."]}),"\n",(0,t.jsx)(i.h2,{id:"how-to-use-picture-in-picture",children:"How to use Picture-in-Picture"}),"\n",(0,t.jsx)(i.p,{children:"Picture-in-Picture is an interesting option on both desktop and mobile to keep showing the video while the user navigates to different parts of the content. PiP in THEOplayer presents several possibilities: this section shows how to enable, configure and observe the Picture-in-Picture option for all available SDKs. A distinction is made between in-app and out-of-app Picture-in-picture, where in the latter the PiP-window can also remain visible if the application is sent to background or another view is presented."}),"\n",(0,t.jsx)(i.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,t.jsx)(i.h3,{id:"enable-picture-in-picture-mode",children:"Enable Picture-In-Picture mode"}),"\n",(0,t.jsx)(i.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,t.jsx)(i.p,{children:"In this SDK, PiP is enabled by default if the player configuration contains any PiP configuration (see below image). For this reason, there is no need to use any specific snippet to enable it.\nNote that in this SDK out-of-app Picture is (currently) not supported."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Picture-in-Picture",src:n(2037).A+"",title:"Picture-in-Picture",width:"1255",height:"882"})}),"\n",(0,t.jsx)(i.p,{children:"The PiP configuration for this SDK includes 3 properties:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"position"}),': (optional, possible values: "top-left", "top-right", "bottom-left", "bottom-right")',(0,t.jsx)(i.br,{}),"\n","The corner in which the player should be shown while in PiP mode. Defaults to the bottom right corner."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"visibility"}),": (optional, a number from 0 to 1)",(0,t.jsx)(i.br,{}),"\n","The maximum percentage of the original player position that should be visible to enable PiP automatically. If not configured, PiP can only be turned on by setting ",(0,t.jsx)(i.a,{href:"pathname:///theoplayer/v4/api-reference/web/types/PresentationMode.html",children:"presentationMode"}),' to "picture-in-picture".']}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"retainPresentationModeOnSourceChange"}),": (optional, possible values: true or false)",(0,t.jsx)(i.br,{}),"\n","If set to true, the previous ",(0,t.jsx)(i.a,{href:"pathname:///theoplayer/v4/api-reference/web/types/PresentationMode.html",children:"presentationMode"})," is retained even as the source changes. It is set to false by default."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:'var playerConfig = {\n    /* ... */\n    pip: {\n        visibility: 0.7,\n        position: "bottom-left",\n        retainPresentationModeOnSourceChange: true\n    }\n};\n'})}),"\n",(0,t.jsx)(i.h5,{id:"android--fire-tv-sdk",children:"Android / Fire TV SDK"}),"\n",(0,t.jsxs)(i.p,{children:["If you want to use Picture-In-Picture in your application you can instantiate the player with a PiPConfiguration, to be passed in the THEOplayerConfig.\nWhen passing a PipConfiguration, the Android SDK will ",(0,t.jsx)(i.strong,{children:"always"})," make use of out-of-app PiP."]}),"\n",(0,t.jsx)(i.p,{children:"Note that to make use of out-of-app PiP the minimum required Android version is Oreo (API level 26)."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:"val playerConfig = THEOplayerConfig.Builder()\n    .pipConfiguration(PipConfiguration.Builder().build())\n    .build()\n\nval tpv = THEOplayerView(context, playerConfig)\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Once the Picture-In-Picture mode is enabled, the player's ",(0,t.jsx)(i.em,{children:"pip"})," property can be accessed."]}),"\n",(0,t.jsx)(i.p,{children:"To enable PiP mode with the required PiP type, you can utilize the following steps:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Access the PiP Manager:"})," Begin by accessing the PiP manager associated with your ",(0,t.jsx)(i.code,{children:"THEOplayerView"}),". This manager reference is available through the ",(0,t.jsx)(i.code,{children:"theoPlayerView"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsxs)(i.strong,{children:["Invoke ",(0,t.jsx)(i.code,{children:"enterPiP()"}),":"]})," Call the ",(0,t.jsx)(i.code,{children:"enterPiP(PiPType.ACTIVITY)"})," method on the PiP manager. By doing so, you initiate PiP mode using the ",(0,t.jsx)(i.code,{children:"ACTIVITY"})," PiP type."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Here's the implementation:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:"theoPlayerView.piPManager?.enterPiP(PiPType.ACTIVITY)\n"})}),"\n",(0,t.jsx)(i.p,{children:"THEOplayer supports three PiP types:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"ACTIVITY"})," This mode generates a separate Android activity that functions as the PiP window."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"DIALOG"})," In this mode, a dialog window is utilized as the PiP window. The video content is displayed within the dialog."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"CUSTOM"})," Unlike the predefined PiP types, ",(0,t.jsx)(i.code,{children:"CUSTOM"})," empowers you as the developer to design and implement your own PiP window. You have the flexibility to tailor the PiP experience to your app's specific requirements. For details on implementing a custom PiP window, explore this ",(0,t.jsx)(i.a,{href:"https://developer.android.com/develop/ui/views/picture-in-picture",children:"Android documentation"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h5,{id:"ios--tvos-sdk",children:"iOS / tvOS SDK"}),"\n",(0,t.jsxs)(i.p,{children:["If you want to use Picture-In-Picture in your application you can instantiate the player with a PiPConfiguration, to be passed in the THEOplayerConfiguration.\nUsing this PiPConfiguration you can configure whether the player should retain its presentation mode upon source-change. You can also choose whether to make use of out-of-app PiP (=",(0,t.jsx)(i.code,{children:"nativePictureInPicture"}),").\nNote that to make use of out-of-app PiP the minimum required iOS version is 14.0."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-swift",children:"/* Configure whether presentation mode should be retained on source changes and whether to use native PiP */\nlet pipConfig = PiPConfiguration(retainPresentationModeOnSourceChange: true, nativePictureInPicture: true)\nlet playerConfig = THEOplayerConfiguration(... , pip: pipConfig)\nvar theoplayer = THEOplayer(configuration: playerConfig)\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Once the Picture-In-Picture mode is enabled, the player's ",(0,t.jsx)(i.em,{children:"pip"})," property can be accessed."]}),"\n",(0,t.jsxs)(i.p,{children:["While using ",(0,t.jsx)(i.strong,{children:"in-app"})," PiP you can use the ",(0,t.jsx)(i.em,{children:"configure(movable:defaultCorner:)"})," method of the player's ",(0,t.jsx)(i.em,{children:"pip"})," property to configure the picture-in-picture."]}),"\n",(0,t.jsx)(i.p,{children:"You can configure:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"whether the PiP view is movable or not (default to true);"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"the default corner of the PiP view (default to bottom right);"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-swift",children:"theoplayer.pip!.configure(movable: false, defaultCorner: .bottomLeft)\n"})}),"\n",(0,t.jsx)(i.p,{children:"Notes:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"configure"})," is only available when using in-app PiP."]}),"\n",(0,t.jsxs)(i.li,{children:["tvOS only supports in-app PiP, which is ",(0,t.jsx)(i.strong,{children:"enabled by default"})," if the OS version supports it (minimum tvOS 14.0)."]}),"\n",(0,t.jsx)(i.li,{children:"iPadOS 14.0 (and above) also supports in-app PiP."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"observe-events-in-picture-in-picture",children:"Observe events in Picture-In-Picture"}),"\n",(0,t.jsx)(i.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,t.jsxs)(i.p,{children:["For the Android SDK it is possible to listen for a ",(0,t.jsx)(i.code,{children:"PlayerEventTypes.PRESENTATIONMODECHANGE"})," event or verify the presentationMode of the player in case you need to find out what the presentation mode is at a given moment or detect a change."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:"// Assuming you have an instance of the player called 'theoplayer'\ntheoplayer.addEventListener(PlayerEventTypes.PRESENTATIONMODECHANGE) { event ->\n    val currentMode = event.presentationMode\n    if (currentMode == PresentationMode.PICTURE_IN_PICTURE) {\n        // Currently in PiP\n    }\n}\n\n// The listener above will be triggered by one of:\ntheoPlayerView.piPManager?.enterPiP(PiPType.ACTIVITY)\ntheoPlayerView.piPManager?.exitPiP()\n"})}),"\n",(0,t.jsx)(i.h6,{id:"returning-from-pip-mode-playback-behavior",children:"Returning from PiP Mode: Playback Behavior"}),"\n",(0,t.jsxs)(i.h6,{id:"1-activity-piptype",children:["1. ",(0,t.jsx)(i.strong,{children:"ACTIVITY PiPType:"})]}),"\n",(0,t.jsxs)(i.p,{children:["When your app uses the ",(0,t.jsx)(i.code,{children:"ACTIVITY"})," PiP type and the user closes the PiP window, the playback and its restoration follows these steps:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Playback Pausing:"})," Upon returning from PiP mode, playback is automatically paused, provided that ",(0,t.jsx)(i.code,{children:"theoPlayerView.settings.setAllowBackgroundPlayback(false)"})," is set to false (which is the default setting)."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Resuming Playback:"})," To resume playback, check whether your app's activity is in the foreground. If it is, call the ",(0,t.jsx)(i.code,{children:"play()"})," method on the player instance."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Here's a code snippet demonstrating how to resume playback after exiting PiP mode:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:"theoPlayer.addEventListener(PlayerEventTypes.PRESENTATIONMODECHANGE) {\n    if (it.presentationMode == PresentationMode.INLINE) {\n        // Playback pauses after closing PiP window\n        if (lifecycle.currentState == Lifecycle.State.STARTED) {\n            theoPlayerView.player.play()\n        }\n    }\n}\n"})}),"\n",(0,t.jsxs)(i.h6,{id:"2-dialog-piptype",children:["2. ",(0,t.jsx)(i.strong,{children:"DIALOG PiPType:"})]}),"\n",(0,t.jsxs)(i.p,{children:["For the ",(0,t.jsx)(i.code,{children:"DIALOG"})," PiP type, in order to correctly exit PiP window you should override ",(0,t.jsx)(i.code,{children:"onPictureInPictureModeChanged"})," and call ",(0,t.jsx)(i.code,{children:"piPManager.exitPiP()"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:"override fun onPictureInPictureModeChanged(\n    isInPictureInPictureMode: Boolean,\n    newConfig: Configuration\n) {\n    super.onPictureInPictureModeChanged(isInPictureInPictureMode, newConfig)\n\n    if (!isInPictureInPictureMode) {\n        theoPlayerView.piPManager?.exitPiP()\n    }\n}\n"})}),"\n",(0,t.jsx)(i.p,{children:"This example ensures that playback pauses if an Activity that holds THEOplayer is in the background and background playback is not allowed, providing a smoother transition for users returning from PiP mode."}),"\n",(0,t.jsxs)(i.h6,{id:"3-custom-piptype",children:["3. ",(0,t.jsx)(i.strong,{children:"CUSTOM PiPType:"})]}),"\n",(0,t.jsxs)(i.p,{children:["For the ",(0,t.jsx)(i.code,{children:"CUSTOM"})," PiP type, you are responsible for implementing your own PiP window and handling the necessary tasks for entering and exiting PiP mode."]}),"\n",(0,t.jsxs)(i.p,{children:["Managing playback after returning from PiP mode is in your hands as a developer. You can reference the provided code snippet for the ",(0,t.jsx)(i.code,{children:"ACTIVITY"})," type as a starting point and adapt it to match your app's unique design and logic."]}),"\n",(0,t.jsx)(i.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,t.jsx)(i.h6,{id:"in-app-picture-in-picture",children:"in-app Picture in Picture"}),"\n",(0,t.jsxs)(i.p,{children:["Using the notification center you can listen to the ",(0,t.jsx)(i.em,{children:"PictureInPictureMoved"})," notification. This notification will be pushed every time the picture-in-picture view moves to a different corner."]}),"\n",(0,t.jsxs)(i.p,{children:["In the callback, you can retrieve the previous and the new corner in the userInfo dictionary respectively with the ",(0,t.jsx)(i.em,{children:"PictureInPictureOldCornerUserInfoKey"})," and the ",(0,t.jsx)(i.em,{children:"PictureInPictureNewCornerUserInfoKey"})," keys."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-swift",children:'NotificationCenter.default.addObserver(self, selector: #selector(onPiPMoved), name: Notification.Name.PictureInPictureMoved, object: nil)\n\n@objc func onPiPMoved(notif: Notification) {\n    let userInfo = notif.userInfo as! [String: Any]\n    let oldCorner : PictureInPictureCorner = userInfo[PictureInPictureOldCornerUserInfoKey]! as! PictureInPictureCorner\n    let newCorner : PictureInPictureCorner = userInfo[PictureInPictureNewCornerUserInfoKey]! as! PictureInPictureCorner\n    print("PiP has moved from \\(oldCorner) to \\(newCorner)")\n}\n'})}),"\n",(0,t.jsx)(i.h6,{id:"out-of-app-picture-in-picture",children:"out-of-app Picture in Picture"}),"\n",(0,t.jsxs)(i.p,{children:["By using your own implementation of the ",(0,t.jsx)(i.a,{href:"https://developer.apple.com/documentation/avkit/avpictureinpicturecontrollerdelegate",children:"AVPictureinpictureControllerDelegate"})," you are able to listen to a number of events.\nThese contain, but are not limited to, when the player will enter/exit PiP, has entered/exited PiP, ... To achieve this you just have to set your implementation of the delegate as the one of the ",(0,t.jsx)(i.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Protocols/PictureInPicture.html",children:"PictureInPictureController"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-swift",children:"class CustomPiPDelegate: NSObject, AVPictureInPictureControllerDelegate {\n    func pictureInPictureControllerDidStartPictureInPicture(_ pictureInPictureController: AVPictureInPictureController) {\n        // Custom action when picture in picture started\n    }\n    // ... Others here.\n}\n\nlet customDelegate = CustomPiPDelegate()\nvar THEOPiP = theoplayer?.pip\nif #available(iOS 14.0, *) {\n    THEOPiP?.nativePictureInPictureDelegate = customDelegate\n} else {\n    // Fallback on earlier versions\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"sample-applications",children:"Sample applications"}),"\n",(0,t.jsx)(i.h3,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,t.jsx)(i.p,{children:"A demo of this feature can be found at"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://demo.theoplayer.com/picture-in-picture",children:"https://demo.theoplayer.com/picture-in-picture"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"To see PiP in action, start the video and scroll down on the page."}),"\n",(0,t.jsx)(i.h3,{id:"android-sdk-1",children:"Android SDK"}),"\n",(0,t.jsx)(i.p,{children:"A sample app for Picture-In-Picture could be found here:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/THEOplayer/samples-android-sdk/tree/master/pip-handling",children:"https://github.com/THEOplayer/samples-android-sdk/tree/master/pip-handling"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(i.p,{children:"The following remarks can help:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["PiP is a presentation mode of the player. As such, you can listen for a ",(0,t.jsx)(i.em,{children:"presentationmodechange"})," event or verify the presentationMode of the player in case you need to find out what the presentation mode is at a given moment or detect a change."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["This feature is not completely the same on all SDKs, as the options may vary. For example, in the Web SDK it is not possible to drag and drop the floating player to a new position (PiP is not ",(0,t.jsx)(i.em,{children:"movable"}),")."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"known-limitations",children:"Known Limitations"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"iOS: VR360 is not supported in combination with PiP."}),"\n",(0,t.jsx)(i.li,{children:"iOS: Only SSAI is supported, no CSAI (both are supported for Android)"}),"\n",(0,t.jsx)(i.li,{children:"iOS: No support for sideloaded textTracks."}),"\n",(0,t.jsx)(i.li,{children:"Android TV: A limitation from the Android Framework - When the player is showing a native Google IMA advertising while being in Picture-in-Picture mode and the user triggers something which moves the PiP window (such as opening the keyboard) then the view showing the advertisement might be misaligned."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsx)(i.p,{children:"The following resources provide more information:"}),"\n",(0,t.jsx)(i.h5,{id:"web-sdk-2",children:"Web SDK"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PiPConfiguration.html",children:"PipConfiguration API Reference"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerConfiguration.html",children:"PlayerConfiguration API Reference"})}),"\n"]}),"\n",(0,t.jsx)(i.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-1",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Classes/PiPConfiguration.html",children:"PipConfiguration API Reference"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Protocols/PictureInPicture.html",children:"PictureInPicture API Reference"})}),"\n"]}),"\n",(0,t.jsx)(i.h5,{id:"android-sdk-2",children:"Android SDK"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/pip/PipConfiguration.Builder.html",children:"PipConfiguration API Reference"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/pip/PiPManager.html",children:"PiPManager API Reference"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2037:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/picture-in-picture-778462f302e24a4b44a176d0fa345cd1.png"},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>l});var t=n(96540);const r={},s=t.createContext(r);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);