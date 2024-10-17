"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13620],{89475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(74848),d=a(28453);const i={},n="How to programmatically detect audio tracks",o={id:"how-to-guides/mediatrack/how-to-detect-audio-tracks",title:"How to programmatically detect audio tracks",description:"This article describes how you can use the API to detect audio tracks.",source:"@site/theoplayer_versioned_docs/version-v6/how-to-guides/06-mediatrack/02-how-to-detect-audio-tracks.md",sourceDirName:"how-to-guides/06-mediatrack",slug:"/how-to-guides/mediatrack/how-to-detect-audio-tracks",permalink:"/documentation/pr-preview/pr-144/theoplayer/v6/how-to-guides/mediatrack/how-to-detect-audio-tracks",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/06-mediatrack/02-how-to-detect-audio-tracks.md",tags:[],version:"v6",sidebarPosition:2,frontMatter:{},sidebar:"roku",previous:{title:"How to programmatically enable or disable audio tracks",permalink:"/documentation/pr-preview/pr-144/theoplayer/v6/how-to-guides/mediatrack/how-to-enable-disable-audio-tracks"},next:{title:"How to programmatically select a video track quality",permalink:"/documentation/pr-preview/pr-144/theoplayer/v6/how-to-guides/mediatrack/how-to-select-video-track-quality"}},c={},s=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk",level:5},{value:"Roku SDK",id:"roku-sdk",level:5},{value:"Remarks",id:"remarks",level:2},{value:"Related articles",id:"related-articles",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-to-programmatically-detect-audio-tracks",children:"How to programmatically detect audio tracks"})}),"\n",(0,r.jsx)(t.p,{children:"This article describes how you can use the API to detect audio tracks."}),"\n",(0,r.jsx)(t.p,{children:"The AudioTrack API, which is a sub-API of the MediaTrack API, can be used to implement this functionality.\nImplementing this functionality is a common use-case for developers who want to build their own UI to visualize the available audio languages."}),"\n",(0,r.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,r.jsx)(t.p,{children:"The code examples below how to implement the detection of audio tracks across SDK."}),"\n",(0,r.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsxs)(t.p,{children:["The Web SDK leverages the ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/MediaTrack.html",children:"MediaTrack API"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'function handleAddTrackEvent(addTrackEvent) {\n  var audioTrack = addTrackEvent.track;\n}\nplayer.audioTracks.addEventListener("addtrack", handleAddTrackEvent);\n'})}),"\n",(0,r.jsx)(t.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,r.jsxs)(t.p,{children:["The Android SDK leverages the ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/player/track/mediatrack/MediaTrackList.html",children:"MediaTrack API"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"EventListener<AddTrackEvent> handleAddTrackEvent= new EventListener<AddTrackEvent>() {\n    @Override\n    public void handleEvent(AddTrackEvent addTrackEvent) {\n        MediaTrack audioTrack = addTrackEvent.getTrack();\n    }\n};\ntpv.getPlayer().getAudioTracks().addEventListener(AudioTrackListEventTypes.ADDTRACK, handleAddTrackEvent);\n"})}),"\n",(0,r.jsx)(t.h5,{id:"ios-tvos-sdk",children:"iOS (/tvOS) SDK"}),"\n",(0,r.jsxs)(t.p,{children:["The iOS SDK leverages the ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Protocols/MediaTrackList.html",children:"MediaTrack API"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"func handleAddTrackEvent(addTrackEvent : AddTrackEvent) {\n    var audioTrack = addTrackEvent .track\n}\nself.theoplayer.audioTracks.addEventListener(type: AudioTrackListEventTypes.ADD_TRACK, listener: handleAddTrackEvent)\n"})}),"\n",(0,r.jsx)(t.h5,{id:"roku-sdk",children:"Roku SDK"}),"\n",(0,r.jsxs)(t.p,{children:["Snippet below allows you to detect added audio tracks. In this example, we have used the ",(0,r.jsx)(t.code,{children:"addedaudiotrack"})," event to propagate information about audio tracks. Basically, all we have to do is to add an event listener."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-brightscript",children:'function Init()\n  ...\n  m.THEOplayer.callFunc("addEventListener", "addedaudiotrack", "onAudioTracksChanged")\n  ...\nend function\n\nfunction onAudioTracksChanged()\n  audioTracks = m.player.audioTracks\n  ? "Audio tracks changed."\n  ? audioTracks\nend function\n'})}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A related article on building a Chromeless UI is located at ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v6/how-to-guides/ui/how-to-build-chromeless-ui",children:"How to build a Chromeless UI"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v6/how-to-guides/mediatrack/how-to-detect-video-track-qualities",children:"How to programmatically detect video track qualities"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v6/how-to-guides/mediatrack/how-to-detect-video-track-quality-changes",children:"How to programmatically detect video track quality changes"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v6/how-to-guides/mediatrack/how-to-enable-disable-audio-tracks",children:"How to programmatically enable or disable audio tracks"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v6/how-to-guides/mediatrack/how-to-select-video-track-quality",children:"How to programmatically select a video track quality"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>o});var r=a(96540);const d={},i=r.createContext(d);function n(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);