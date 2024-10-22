"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73470],{41645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var r=n(74848),a=n(28453);const c={},s="How to programmatically detect text tracks",d={id:"how-to-guides/texttrack/how-to-programmatically-detect-text-tracks",title:"How to programmatically detect text tracks",description:"This article describes how you can use the API to detect text tracks, which can be subtitles, closed captions or metadata.",source:"@site/theoplayer_versioned_docs/version-v4/how-to-guides/10-texttrack/02-how-to-programmatically-detect-text-tracks.md",sourceDirName:"how-to-guides/10-texttrack",slug:"/how-to-guides/texttrack/how-to-programmatically-detect-text-tracks",permalink:"/documentation/pr-preview/pr-146/theoplayer/v4/how-to-guides/texttrack/how-to-programmatically-detect-text-tracks",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/10-texttrack/02-how-to-programmatically-detect-text-tracks.md",tags:[],version:"v4",sidebarPosition:2,frontMatter:{},sidebar:"roku",previous:{title:"How to dynamically change the visible captions?",permalink:"/documentation/pr-preview/pr-146/theoplayer/v4/how-to-guides/texttrack/how-to-dynamically-change-the-visible-captions"},next:{title:"How to programmatically enable or disable text tracks",permalink:"/documentation/pr-preview/pr-146/theoplayer/v4/how-to-guides/texttrack/how-to-programmatically-disable-text-tracks"}},i={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk",level:5},{value:"Roku SDK",id:"roku-sdk",level:5},{value:"Remarks",id:"remarks",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-to-programmatically-detect-text-tracks",children:"How to programmatically detect text tracks"})}),"\n",(0,r.jsx)(t.p,{children:"This article describes how you can use the API to detect text tracks, which can be subtitles, closed captions or metadata."}),"\n",(0,r.jsx)(t.p,{children:"The TextTrack API can be used to implement this functionality.\nImplementing this functionality is a common use-case for developers who want to build their own UI to visualize the available text languages."}),"\n",(0,r.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,r.jsx)(t.p,{children:"The code examples below showcase how to implement the detection of audio tracks across SDKs."}),"\n",(0,r.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsxs)(t.p,{children:["The Web SDK leverages the ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrack.html",children:"TextTrack API"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'function handleAddTrackEvent(addTrackEvent) {\n  var textTrack = addTrackEvent.track;\n}\nplayer.textTracks.addEventListener("addtrack", handleAddTrackEvent);\n'})}),"\n",(0,r.jsx)(t.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,r.jsxs)(t.p,{children:["The Android SDK leverages the ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/track/texttrack/TextTrackList.html",children:"TextTrack API"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"EventListener<AddTrackEvent> handleAudioTrackAdd = new EventListener<AddTrackEvent>() {\n    @Override\n    public void handleEvent(AddTrackEvent addTrackEvent) {\n        TextTrack textTrack = addTrackEvent.getTrack();\n    }\n};\ntpv.getPlayer().getTextTracks().addEventListener(TextTrackListEventTypes.ADDTRACK, handleAudioTrackAdd);\n"})}),"\n",(0,r.jsx)(t.h5,{id:"ios-tvos-sdk",children:"iOS (/tvOS) SDK"}),"\n",(0,r.jsxs)(t.p,{children:["The iOS SDK leverages the ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Protocols/MediaTrackList.html",children:"MediaTrack API"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"func handleAddTrackEvent(addTrackEvent : AddTrackEvent) {\n    var textTrack = addTrackEvent.track\n}\nself.theoplayer.textTracks.addEventListener(type: TextTrackListEventTypes.ADD_TRACK, listener: handleAddTrackEvent)\n"})}),"\n",(0,r.jsx)(t.h5,{id:"roku-sdk",children:"Roku SDK"}),"\n",(0,r.jsx)(t.p,{children:"To obtain an exact moment of recognizing text track we may use an \u201caddedtexttrack\u201d event. This will allow to programmatically detect all text tracks which are loaded with the stream."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-brightscript",children:'function Init(){\n  ...\n  m.THEOplayer.callFunc("addEventListener", "addedtexttrack", "onEventTextTracksChanged")\n  ...\nend function\n\nfunction onEventTextTracksChanged()\n  textTracks= m.player.textTracks\n  ? "Text tracks changed."\n  ? textTracks\nend function\n'})}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A related article on building a Chromeless UI is located at ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-146/theoplayer/v4/how-to-guides/ui/how-to-build-chromeless-ui",children:"How to build a Chromeless UI"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var r=n(96540);const a={},c=r.createContext(a);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);