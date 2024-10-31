"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49228],{22347:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var a=r(74848),n=r(28453);const c={},i="How to programmatically detect text track changes",s={id:"how-to-guides/texttrack/how-to-detect-text-track-changes",title:"How to programmatically detect text track changes",description:'This article describes how you can use the THEOplayer API to detect text track quality changes. A text track "change" is triggered by enabling (or disabling) a subtitle or closed captions track.',source:"@site/theoplayer_versioned_docs/version-v4/how-to-guides/10-texttrack/07-how-to-detect-text-track-changes.md",sourceDirName:"how-to-guides/10-texttrack",slug:"/how-to-guides/texttrack/how-to-detect-text-track-changes",permalink:"/documentation/pr-preview/pr-150/theoplayer/v4/how-to-guides/texttrack/how-to-detect-text-track-changes",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/10-texttrack/07-how-to-detect-text-track-changes.md",tags:[],version:"v4",sidebarPosition:7,frontMatter:{},sidebar:"roku",previous:{title:"How to track ID3 cues / tags?",permalink:"/documentation/pr-preview/pr-150/theoplayer/v4/how-to-guides/texttrack/how-to-track-id3-cues-tags"},next:{title:"How to detect active text track cues",permalink:"/documentation/pr-preview/pr-150/theoplayer/v4/how-to-guides/texttrack/how-to-detect-active-text-track-cues"}},o={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"Android SDK",id:"android-sdk",level:3},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:3},{value:"Roku SDK",id:"roku-sdk",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"how-to-programmatically-detect-text-track-changes",children:"How to programmatically detect text track changes"})}),"\n",(0,a.jsx)(t.p,{children:'This article describes how you can use the THEOplayer API to detect text track quality changes. A text track "change" is triggered by enabling (or disabling) a subtitle or closed captions track.'}),"\n",(0,a.jsxs)(t.p,{children:["The TextTrack API provides this functionality.\nMore specifically, as a developer, you'll subscribe to the ",(0,a.jsx)(t.code,{children:"change"})," event in the TextTrack API."]}),"\n",(0,a.jsx)(t.p,{children:"Implementing this functionality is a common use-case for developers who want to build their own UI, and annotate the subtitle (or closed captions) track that is currently active."}),"\n",(0,a.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,a.jsx)(t.p,{children:"THEOplayer allows you to track text track changes on the following SDKs."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,a.jsx)(t.th,{children:"Roku SDK"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsxs)(t.p,{children:["The TextTrack API is available across all of our base SDKs. As described in the introduction, to detect text track changes, you want to detect the ",(0,a.jsx)(t.code,{children:"change"})," event in the ",(0,a.jsx)(t.code,{children:"TextTrack"})," API."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#web-sdk",children:"Web SDK"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#android-sdk",children:"Android SDK"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS SDK"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#roku-sdk",children:"Roku SDK"})}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,a.jsx)(t.p,{children:"The implementation of the Web SDK applies to all web-based platforms, including Tizen and webOS."}),"\n",(0,a.jsxs)(t.p,{children:["The Web SDK exposes the TextTrack API through ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/classes/ChromelessPlayer.html#texttracks",children:(0,a.jsx)(t.code,{children:"player.textTracks"})}),".\nThis ",(0,a.jsx)(t.code,{children:"textTracks"})," property is a ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTracksList.html",children:(0,a.jsx)(t.code,{children:"TextTrackList"})})," that inherits from the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TrackList.html",children:(0,a.jsx)(t.code,{children:"TrackList"})}),".\nThis ",(0,a.jsx)(t.code,{children:"TrackList"})," dispatches the events from the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TrackListEventMap.html",children:(0,a.jsx)(t.code,{children:"TrackListEventMap"})}),".\nThis ",(0,a.jsx)(t.code,{children:"TrackListEventMap"})," contains the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TrackListEventMap.html#change",children:(0,a.jsx)(t.code,{children:"change"})})," event, as well as the ",(0,a.jsx)(t.code,{children:"addtrack"})," and ",(0,a.jsx)(t.code,{children:"removetrack"})," event."]}),"\n",(0,a.jsx)(t.p,{children:"The code below allows you to detect text track changes."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'player.textTracks.addEventListener("change", function (event) {\n  const track = event.track;\n  const isEnabled = track.mode == "showing";\n  console.log(track, track.label, track.kind, track.type, isEnabled);\n});\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The properties of a text ",(0,a.jsx)(t.code,{children:"track"})," (e.g. ",(0,a.jsx)(t.code,{children:"mode"}),", ",(0,a.jsx)(t.code,{children:"kind"}),") are described in ",(0,a.jsxs)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrack.html",children:["the ",(0,a.jsx)(t.code,{children:"TextTrack"})," API reference"]}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"android-sdk",children:"Android SDK"}),"\n",(0,a.jsx)(t.p,{children:"The implementation of the Android SDK applies to all Android-based platforms, including Android TV and Fire TV."}),"\n",(0,a.jsxs)(t.p,{children:["The Android SDK exposes the TextTrack API through ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/Player.html#getTextTracks",children:(0,a.jsx)(t.code,{children:"player.getTextTracks()"})}),".\nThis ",(0,a.jsx)(t.code,{children:"getTextTracks()"})," method returns a ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/track/texttrack/TextTrackList.html",children:(0,a.jsx)(t.code,{children:"TextTrackList"})})," that inherits from the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/track/TrackList.html",children:(0,a.jsx)(t.code,{children:"TrackList"})}),".\nThis ",(0,a.jsx)(t.code,{children:"TrackList"})," dispatches the events from the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/event/track/texttrack/list/TextTrackListEventTypes.html",children:(0,a.jsx)(t.code,{children:"TextTrackListEventTypes"})}),".\nThe ",(0,a.jsx)(t.code,{children:"TextTrackListEventTypes"})," contains the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/event/track/texttrack/list/TextTrackListEventTypes.html#TRACKLISTCHANGE",children:(0,a.jsx)(t.code,{children:"TRACKLISTCHANGE"})})," event, as well as the ",(0,a.jsx)(t.code,{children:"ADDTRACK"})," and ",(0,a.jsx)(t.code,{children:"REMOVETRACK"})," event."]}),"\n",(0,a.jsx)(t.p,{children:"The code below allows you to detect text track changes."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'player.getTextTracks().addEventListener(TextTrackListEventTypes.TRACKLISTCHANGE, trackListChangeEvent -> {\n    TextTrack track = trackListChangeEvent.getTrack();\n    boolean isEnabled = (track.getMode().getMode().equals("showing"));\n    System.out.println(track.getLabel() + ", " + track.getKind() + ", " + track.getType().getType() + ", " + isEnabled);\n});\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The properties of a text ",(0,a.jsx)(t.code,{children:"track"})," (e.g. ",(0,a.jsx)(t.code,{children:"mode"}),", ",(0,a.jsx)(t.code,{children:"kind"}),") are described in the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/track/texttrack/TextTrack.html",children:(0,a.jsx)(t.code,{children:"TextTrack"})})," and ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/track/Track.html",children:(0,a.jsx)(t.code,{children:"Track"})})," API references."]}),"\n",(0,a.jsx)(t.h3,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,a.jsx)(t.p,{children:"The implementation of the iOS SDK applies to all iOS-based platforms, including iPadOS and tvOS."}),"\n",(0,a.jsxs)(t.p,{children:["The iOS SDK exposes the TrackTrack API through ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Classes/THEOplayer.html#/s:13THEOplayerSDK0A0C10textTracksAA13TextTrackList_pvp",children:(0,a.jsx)(t.code,{children:"player.textTracks"})}),".\nThis ",(0,a.jsx)(t.code,{children:"textTracks"})," property is a ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Protocols/TextTrackList.html",children:(0,a.jsx)(t.code,{children:"TextTrackList"})}),".\nThis ",(0,a.jsx)(t.code,{children:"TextTrackList"})," dispatches the events from the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Structs/TextTrackListEventTypes.html",children:(0,a.jsx)(t.code,{children:"TextTrackListEventTypes"})}),".\nThe ",(0,a.jsx)(t.code,{children:"TextTrackListEventTypes"})," contains the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Structs/TextTrackListEventTypes.html#/s:13THEOplayerSDK23TextTrackListEventTypesV6CHANGEAA0F4TypeCyAA0d6ChangeF0CGvpZ",children:(0,a.jsx)(t.code,{children:"CHANGE"})})," event, as well as the ",(0,a.jsx)(t.code,{children:"ADD_TRACK"})," and ",(0,a.jsx)(t.code,{children:"REMOVE_TRACK"})," event."]}),"\n",(0,a.jsx)(t.p,{children:"The code below allows you to detect text track changes."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'player?.textTracks.addEventListener(type: TextTrackListEventTypes.CHANGE, listener: { (event) in\n    let track : TextTrack = event.track as! TextTrack\n    let isEnabled = (track.mode.rawValue == "showing")\n    print(track.label, track.kind, track.type, isEnabled)\n})\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The properties of a text ",(0,a.jsx)(t.code,{children:"track"})," (e.g. ",(0,a.jsx)(t.code,{children:"mode"}),", ",(0,a.jsx)(t.code,{children:"kind"}),") are described in the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Protocols/TextTrack.html",children:(0,a.jsx)(t.code,{children:"TextTrack"})})," and ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Protocols/Track.html",children:(0,a.jsx)(t.code,{children:"Track"})})," API references."]}),"\n",(0,a.jsx)(t.h3,{id:"roku-sdk",children:"Roku SDK"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"This subsection is in maintenance. Reach out to our team if you need help."})}),"\n",(0,a.jsx)(t.h1,{id:"related-articles",children:"Related articles"}),"\n",(0,a.jsx)(t.p,{children:"Are you reading this article because you're interested in subtitles and closed captions? Continue reading below."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-150/theoplayer/v4/how-to-guides/texttrack/how-to-programmatically-detect-text-tracks",children:"How to programmatically detect text tracks"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-150/theoplayer/v4/how-to-guides/texttrack/how-to-dynamically-change-the-visible-captions",children:"How to dynamically change the visible captions"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-150/theoplayer/v4/how-to-guides/texttrack/how-to-programmatically-disable-text-tracks",children:"How to programmatically disable text tracks"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-150/theoplayer/v4/how-to-guides/texttrack/how-to-insert-subtitles",children:"How to insert subtitles"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:['Refer to "',(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-150/theoplayer/v4/how-to-guides/texttrack/how-to-track-id3-cues-tags",children:"How to track id3 cues"}),"\" if you're interested in timed metadata (id3, emsg, EventStream, EXT-X-DATERANGE, ...)."]}),"\n",(0,a.jsx)(t.p,{children:"Are you reading this article because you're implementing a custom UI? Then you'll find the following articles interesting:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-150/theoplayer/v4/how-to-guides/ui/how-to-build-chromeless-ui",children:"How to build a Chromeless UI"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-150/theoplayer/v4/how-to-guides/mediatrack/how-to-detect-video-track-quality-changes",children:"How to detect video track quality changes"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-150/theoplayer/v4/how-to-guides/mediatrack/how-to-detect-audio-track-changes",children:"How to detect audio track changes"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var a=r(96540);const n={},c=a.createContext(n);function i(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);