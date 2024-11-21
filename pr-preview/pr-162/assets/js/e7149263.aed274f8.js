"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["33951"],{44541:function(e,t,a){a.r(t),a.d(t,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>s,toc:()=>o,frontMatter:()=>c});var r=JSON.parse('{"id":"how-to-guides/mediatrack/how-to-detect-audio-track-changes","title":"How to programmatically detect audio track changes","description":"This article describes how you can use the THEOplayer API to detect audio track quality changes.","source":"@site/theoplayer/how-to-guides/06-mediatrack/08-how-to-detect-audio-track-changes.md","sourceDirName":"how-to-guides/06-mediatrack","slug":"/how-to-guides/mediatrack/how-to-detect-audio-track-changes","permalink":"/documentation/pr-preview/pr-162/theoplayer/how-to-guides/mediatrack/how-to-detect-audio-track-changes","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/06-mediatrack/08-how-to-detect-audio-track-changes.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to programmatically detect video track quality changes","permalink":"/documentation/pr-preview/pr-162/theoplayer/how-to-guides/mediatrack/how-to-detect-video-track-quality-changes"},"next":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-162/theoplayer/how-to-guides/miscellaneous/introduction"}}'),i=a("85893"),n=a("50065");let c={},d="How to programmatically detect audio track changes",s={},o=[{value:"SDKs",id:"sdks",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"Android SDK",id:"android-sdk",level:3},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:3},{value:"Roku SDK",id:"roku-sdk",level:3}];function l(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"how-to-programmatically-detect-audio-track-changes",children:"How to programmatically detect audio track changes"})}),"\n",(0,i.jsx)(t.p,{children:'This article describes how you can use the THEOplayer API to detect audio track quality changes.\nAn audio track "change" is triggered by enabling (or disabling) an audio track.'}),"\n",(0,i.jsxs)(t.p,{children:["The AudioTrack API provides this functionality.\nMore specifically, as a developer, you'll subscribe to the ",(0,i.jsx)(t.code,{children:"change"})," event in the AudioTrack API."]}),"\n",(0,i.jsx)(t.p,{children:"Implementing this functionality is a common use-case for developers who want to build their own UI, and annotate the audio track that is currently active."}),"\n",(0,i.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsx)(t.p,{children:"THEOplayer allows you to track audio track changes on the following SDKs."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,i.jsx)(t.th,{children:"Roku SDK"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsxs)(t.p,{children:["The AudioTrack API is available across all of our base SDKs. As described in the introduction, to detect text track changes, you want to detect the ",(0,i.jsx)(t.code,{children:"change"})," event in the ",(0,i.jsx)(t.code,{children:"AudioTrack"})," API."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#web-sdk",children:"Web SDK"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#android-sdk",children:"Android SDK"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS SDK"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#roku-sdk",children:"Roku SDK"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(t.p,{children:"The implementation of the Web SDK applies to all web-based platforms, including Tizen and webOS."}),"\n",(0,i.jsxs)(t.p,{children:["The Web SDK exposes the AudioTrack API through ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/classes/ChromelessPlayer.html#audiotracks",children:(0,i.jsx)(t.code,{children:"player.audioTracks"})}),".\nThis ",(0,i.jsx)(t.code,{children:"audioTracks"})," property is a ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/MediaTrackList.html",children:(0,i.jsx)(t.code,{children:"MediaTrackList"})})," that inherits from the ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/TrackList.html",children:(0,i.jsx)(t.code,{children:"TrackList"})}),".\nThis ",(0,i.jsx)(t.code,{children:"TrackList"})," dispatches the events from the ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/TrackListEventMap.html",children:(0,i.jsx)(t.code,{children:"TrackListEventMap"})}),".\nThis ",(0,i.jsx)(t.code,{children:"TrackListEventMap"})," contains the ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/TrackListEventMap.html#change",children:(0,i.jsx)(t.code,{children:"change"})})," event, as well as the ",(0,i.jsx)(t.code,{children:"addtrack"})," and ",(0,i.jsx)(t.code,{children:"removetrack"})," event."]}),"\n",(0,i.jsx)(t.p,{children:"The code below allows you to detect text track changes."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'player.audioTracks.addEventListener("change", function (event) {\n  const track = event.track;\n  console.log(track, track.label, track.language, track.enabled);\n});\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The properties of a media ",(0,i.jsx)(t.code,{children:"track"})," (e.g. ",(0,i.jsx)(t.code,{children:"enabled"}),", ",(0,i.jsx)(t.code,{children:"language"}),") are described in ",(0,i.jsxs)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/MediaTrack.html",children:["the ",(0,i.jsx)(t.code,{children:"MediaTrack"})," API reference"]}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(t.p,{children:"The implementation of the Android SDK applies to all Android-based platforms, including Android TV and Fire TV."}),"\n",(0,i.jsxs)(t.p,{children:["The Android SDK exposes the AudioTrack API through ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/player/Player.html#getAudioTracks--",children:(0,i.jsx)(t.code,{children:"player.getAudioTracks()"})}),".\nThis ",(0,i.jsx)(t.code,{children:"getAudioTracks()"})," method returns a ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/player/track/mediatrack/MediaTrackList.html",children:(0,i.jsx)(t.code,{children:"MediaTrackList"})})," that inherits from the ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/player/track/TrackList.html",children:(0,i.jsx)(t.code,{children:"TrackList"})}),".\nThis ",(0,i.jsx)(t.code,{children:"TrackList"})," dispatches the events from the ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/event/track/mediatrack/audio/list/AudioTrackListEventTypes.html",children:(0,i.jsx)(t.code,{children:"AudioTrackListEventTypes"})}),".\nThe ",(0,i.jsx)(t.code,{children:"AudioTrackListEventTypes"})," contains the ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/event/track/mediatrack/audio/list/AudioTrackListEventTypes.html#TRACKLISTCHANGE",children:(0,i.jsx)(t.code,{children:"TRACKLISTCHANGE"})})," event, as well as the ",(0,i.jsx)(t.code,{children:"ADDTRACK"})," and ",(0,i.jsx)(t.code,{children:"REMOVETRACK"})," event."]}),"\n",(0,i.jsx)(t.p,{children:"The code below allows you to detect audio track changes."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'player.getAudioTracks().addEventListener(AudioTrackListEventTypes.TRACKLISTCHANGE, trackListChangeEvent -> {\n    MediaTrack track = trackListChangeEvent.getTrack();\n    System.out.println(track.getLabel() + ", " + track.getLanguage() + ", " + track.isEnabled());\n});\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The properties of a media ",(0,i.jsx)(t.code,{children:"track"})," (e.g. ",(0,i.jsx)(t.code,{children:"enabled"}),", ",(0,i.jsx)(t.code,{children:"language"}),") are described in the ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/player/track/mediatrack/MediaTrack.html",children:(0,i.jsx)(t.code,{children:"MediaTrack"})})," and ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/player/track/Track.html",children:(0,i.jsx)(t.code,{children:"Track"})})," API references."]}),"\n",(0,i.jsx)(t.h3,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,i.jsx)(t.p,{children:"The implementation of the iOS SDK applies to all iOS-based platforms, including iPadOS and tvOS."}),"\n",(0,i.jsxs)(t.p,{children:["The iOS SDK exposes the AudioTrack API through ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/ios/Classes/THEOplayer.html#/s:13THEOplayerSDK0A0C11audioTracksAA14AudioTrackList_pvp",children:(0,i.jsx)(t.code,{children:"player.audioTracks"})}),".\nThis ",(0,i.jsx)(t.code,{children:"audioTracks"})," property is a ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/ios/Protocols/MediaTrackList.html",children:(0,i.jsx)(t.code,{children:"MediaTrackList"})}),".\nThis ",(0,i.jsx)(t.code,{children:"MediaTrackList"})," dispatches the events from the ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/ios/Structs/AudioTrackListEventTypes.html",children:(0,i.jsx)(t.code,{children:"AudioTrackListEventTypes"})}),".\nThe ",(0,i.jsx)(t.code,{children:"AudioTrackListEventTypes"})," contains the ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/ios/Structs/AudioTrackListEventTypes.html#/s:13THEOplayerSDK24AudioTrackListEventTypesV6CHANGEAA0F4TypeCyAA0d6ChangeF0CGvpZ",children:(0,i.jsx)(t.code,{children:"CHANGE"})})," event, as well as the ",(0,i.jsx)(t.code,{children:"ADD_TRACK"})," and ",(0,i.jsx)(t.code,{children:"REMOVE_TRACK"})," event."]}),"\n",(0,i.jsx)(t.p,{children:"The code below allows you to detect audio track changes."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"player?.audioTracks.addEventListener(type: AudioTrackListEventTypes.CHANGE, listener: { (event) in\n    let track : AudioTrack = event.track as! AudioTrack\n    print(track.label, track.language, track.enabled)\n})\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The properties of a media ",(0,i.jsx)(t.code,{children:"track"})," (e.g. ",(0,i.jsx)(t.code,{children:"enabled"}),", ",(0,i.jsx)(t.code,{children:"language"}),") are described in the ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/ios/Protocols/MediaTrack.html",children:(0,i.jsx)(t.code,{children:"MediaTrack"})})," and ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/ios/Protocols/Track.html",children:(0,i.jsx)(t.code,{children:"Track"})})," API references."]}),"\n",(0,i.jsx)(t.h3,{id:"roku-sdk",children:"Roku SDK"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This subsection is in maintenance. Reach out to our team if you need help."})}),"\n",(0,i.jsx)(t.h1,{id:"related-articles",children:"Related articles"}),"\n",(0,i.jsx)(t.p,{children:"Are you reading this article because you're interested in audio tracks? Continue reading below."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-162/theoplayer/how-to-guides/mediatrack/how-to-detect-audio-tracks",children:"How to programmatically detect audio tracks"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-162/theoplayer/how-to-guides/mediatrack/how-to-enable-disable-audio-tracks",children:"How to enable and disable audio tracks"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Are you reading this article because you're implementing a custom UI? Then you'll find the following articles interesting:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-162/theoplayer/how-to-guides/ui/how-to-build-chromeless-ui",children:"How to build a Chromeless UI"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-162/theoplayer/how-to-guides/mediatrack/how-to-detect-video-track-quality-changes",children:"How to detect video track quality changes"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-162/theoplayer/how-to-guides/texttrack/how-to-detect-text-track-changes",children:"How to detect text track changes"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return d},a:function(){return c}});var r=a(67294);let i={},n=r.createContext(i);function c(e){let t=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);