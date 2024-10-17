"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84661],{41736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(74848),r=n(28453);const a={sidebar_position:1,slug:"/android/guides/custom-ui"},i="Making a custom UI",s={id:"external/android-ui/docs/guides/custom-ui",title:"Making a custom UI",description:"Although the default UI was designed to support a variety of usage scenarios, you may still run into a case that it doesn't handle very well. Perhaps you want to move some buttons around, or add like and dislike buttons to the control bar, or perhaps integrate a text chat component inside your player. In these situations, you may want to build a custom player UI to create a truly unique experience for your viewers.",source:"@site/open-video-ui/external/android-ui/docs/guides/custom-ui.md",sourceDirName:"external/android-ui/docs/guides",slug:"/android/guides/custom-ui",permalink:"/documentation/pr-preview/pr-144/open-video-ui/android/guides/custom-ui",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/android-ui/blob/-/docs/guides/custom-ui.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/android/guides/custom-ui"},sidebar:"android",previous:{title:"How-to guides",permalink:"/documentation/pr-preview/pr-144/open-video-ui/android/guides"},next:{title:"Setting up Chromecast",permalink:"/documentation/pr-preview/pr-144/open-video-ui/android/guides/chromecast"}},l={},d=[{value:"A basic player",id:"a-basic-player",level:2},{value:"Using the player&#39;s state",id:"using-the-players-state",level:2},{value:"More examples",id:"more-examples",level:2},{value:"Default UI",id:"default-ui",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"making-a-custom-ui",children:"Making a custom UI"})}),"\n",(0,o.jsx)(t.p,{children:"Although the default UI was designed to support a variety of usage scenarios, you may still run into a case that it doesn't handle very well. Perhaps you want to move some buttons around, or add like and dislike buttons to the control bar, or perhaps integrate a text chat component inside your player. In these situations, you may want to build a custom player UI to create a truly unique experience for your viewers."}),"\n",(0,o.jsx)(t.p,{children:"In this guide, you will build a custom player from scratch, starting from a basic player and gradually adding more features. Finally, we will look at some more complete examples of custom players, which you can use as reference for your own UI."}),"\n",(0,o.jsx)(t.h2,{id:"a-basic-player",children:"A basic player"}),"\n",(0,o.jsx)(t.p,{children:"We'll start by making the most basic player possible: one with just a play button."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'setContent {\n    UIController(\n        config = THEOplayerConfig.Builder().build(),\n        source = SourceDescription.Builder("https://example.com/stream.m3u8").build(),\n        centerChrome = {\n            PlayButton()\n        }\n    )\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"UIController"})," component is the main container of our custom UI. It handles creating and managing the underlying THEOplayer instance, using the given ",(0,o.jsx)(t.code,{children:"config"})," and ",(0,o.jsx)(t.code,{children:"source"})," properties."]}),"\n",(0,o.jsxs)(t.p,{children:["It also provides a skeleton layout for plugging in our playback controls, using ",(0,o.jsx)(t.a,{href:"https://developer.android.com/jetpack/compose/layouts/basics#slot-based-layouts",children:"slots"})," such as ",(0,o.jsx)(t.code,{children:"topChrome"})," or ",(0,o.jsx)(t.code,{children:"centerChrome"}),". We pass a composable lambda as the ",(0,o.jsx)(t.code,{children:"centerChrome"})," parameter, in which we create a ",(0,o.jsx)(t.code,{children:"PlayButton"}),". This will place a play button in the center of our player."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Screenshot",src:n(49406).A+"",width:"1277",height:"605"})}),"\n",(0,o.jsx)(t.p,{children:"We can add more components so the user can mute or seek the player, or go fullscreen."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'setContent {\n    UIController(\n        config = THEOplayerConfig.Builder().build(),\n        source = SourceDescription.Builder("https://example.com/stream.m3u8").build(),\n        centerOverlay = {\n            LoadingSpinner()\n        },\n        centerChrome = {\n            PlayButton(\n                iconModifier = Modifier.size(96.dp),\n                contentPadding = PaddingValues(8.dp)\n            )\n        },\n        bottomChrome = {\n            SeekBar()\n            Row(verticalAlignment = Alignment.CenterVertically) {\n                MuteButton()\n                CurrentTimeDisplay(showDuration = true)\n                Spacer(modifier = Modifier.weight(1f))\n                FullscreenButton()\n            }\n        }\n    )\n}\n'})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"LoadingSpinner"})," is a circular loading spinner that is automatically shown when the player is waiting for more data. It is placed in the ",(0,o.jsx)(t.code,{children:"centerOverlay"})," slot, which appears in the center of the player but behind the ",(0,o.jsx)(t.code,{children:"centerChrome"})," slot."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"SeekBar"})," is a seek bar, showing the player's current position in the video, and allowing the user to seek to a different time."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"MuteButton"})," is a button to mute or unmute the player's audio."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"CurrentTimeDisplay"})," is a text showing the player's current position in hours, minutes and seconds. By setting ",(0,o.jsx)(t.code,{children:"showDuration = true"}),", the text will also show the player's total video duration."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"FullscreenButton"})," is a button to make the player take up the entire screen."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Additionally, we change the size and padding of the play button, to make it bigger and easier to tap."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Screenshot",src:n(53847).A+"",width:"1277",height:"605"})}),"\n",(0,o.jsx)(t.h2,{id:"using-the-players-state",children:"Using the player's state"}),"\n",(0,o.jsx)(t.p,{children:"You might have noticed that all buttons are visible immediately, even before the video starts playing for the first time. Most of the time however, you want to initially show only the play button, and then show the rest of the buttons after the video has started playing. To do this, you should check the player's current state and then adjust your player layout accordingly."}),"\n",(0,o.jsxs)(t.p,{children:["Within any of the composable lambdas you pass to ",(0,o.jsx)(t.code,{children:"UIController"}),", you can use ",(0,o.jsx)(t.code,{children:"Player.current"})," to access the current player. This ",(0,o.jsx)(t.code,{children:"Player"})," object exposes properties for the player's current time, duration, paused and muted states, etc. See ",(0,o.jsx)(t.a,{href:"https://github.com/THEOplayer/android-ui/blob/main/ui/src/main/java/com/theoplayer/android/ui/Player.kt",children:(0,o.jsx)(t.code,{children:"Player.kt"})})," for the full list of properties."]}),"\n",(0,o.jsxs)(t.p,{children:["You can then perform any logic on these properties to adjust your player layout. For example, you can check the ",(0,o.jsx)(t.code,{children:"firstPlay"})," property to see if the player has already started playing for the first time, and only show certain buttons if that property is ",(0,o.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'setContent {\n    UIController(\n        config = THEOplayerConfig.Builder().build(),\n        source = SourceDescription.Builder("https://example.com/stream.m3u8").build(),\n        centerChrome = {\n            PlayButton(\n                iconModifier = Modifier.size(96.dp),\n                contentPadding = PaddingValues(8.dp)\n            )\n        },\n        bottomChrome = {\n            // Retrieve the player\'s state\n            val state = Player.current\n            // Show the bottom control bar only if we have already started playing before\n            if (state?.firstPlay == true) {\n                SeekBar()\n                Row(verticalAlignment = Alignment.CenterVertically) {\n                    MuteButton()\n                    CurrentTimeDisplay(showDuration = true)\n                    Spacer(modifier = Modifier.weight(1f))\n                    FullscreenButton()\n                }\n            }\n        }\n    )\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["All of the ",(0,o.jsx)(t.code,{children:"Player"})," properties are backed by an observable ",(0,o.jsx)(t.a,{href:"https://developer.android.com/reference/kotlin/androidx/compose/runtime/State",children:(0,o.jsx)(t.code,{children:"State"})}),", so composables that read these properties will automatically re-compose whenever that property changes. This means you don't need any extra logic to re-draw the bottom control bar whenever ",(0,o.jsx)(t.code,{children:"firstPlay"})," changes from ",(0,o.jsx)(t.code,{children:"false"})," to ",(0,o.jsx)(t.code,{children:"true"}),". This also makes it easy to create your own custom player components. ",(0,o.jsx)(t.a,{href:"https://developer.android.com/jetpack/compose/state",children:"See the Jetpack Compose documentation for more information."})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:"@Composable\nfun MyCurrentTimeDisplay(\n) {\n    val player = Player.current\n    val currentTime = player?.currentTime ?: 0.0\n    // This text will automatically update whenever the current time changes\n    Text(text = currentTime.toString())\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"more-examples",children:"More examples"}),"\n",(0,o.jsx)(t.h3,{id:"default-ui",children:"Default UI"}),"\n",(0,o.jsxs)(t.p,{children:["It may sound odd to mention the default UI when we're talking about custom UIs. But in fact, the default UI is built in ",(0,o.jsx)(t.em,{children:"exactly the same way"})," as a custom one!"]}),"\n",(0,o.jsx)(t.p,{children:"The default UI comes with all the bells and whistles that you'd expect from a fully-featured player: buttons to play or mute the video, a seek bar to seek through the video, menus to change the audio language and subtitles, and support for casting to Chromecast."}),"\n",(0,o.jsxs)(t.p,{children:["Have a look at ",(0,o.jsx)(t.a,{href:"https://github.com/THEOplayer/android-ui/blob/main/ui/src/main/java/com/theoplayer/android/ui/DefaultUI.kt",children:(0,o.jsx)(t.code,{children:"DefaultUI.kt"})})," to learn how the default layout is implemented, and perhaps copy some ideas for your own UI."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},49406:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/custom-ui-basic-1083cd0c52b63808ba61800b0a336944.png"},53847:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/custom-ui-seekbar-ebca039cc2324cfd56ec2d8053a56e3c.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var o=n(96540);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);