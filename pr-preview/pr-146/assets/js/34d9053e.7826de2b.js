"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33206],{99459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var a=n(74848),r=n(28453);const i={},s="How to track ID3 cues / tags?",d={id:"how-to-guides/texttrack/how-to-track-id3-cues-tags",title:"How to track ID3 cues / tags?",description:"The question above is commonly asked by the developers who want to introduce a certain behavior depending on the metadata contained by the ID3 cues. For example, the developer wants:",source:"@site/theoplayer_versioned_docs/version-v6/how-to-guides/10-texttrack/06-how-to-track-id3-cues-tags.md",sourceDirName:"how-to-guides/10-texttrack",slug:"/how-to-guides/texttrack/how-to-track-id3-cues-tags",permalink:"/documentation/pr-preview/pr-146/theoplayer/v6/how-to-guides/texttrack/how-to-track-id3-cues-tags",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/10-texttrack/06-how-to-track-id3-cues-tags.md",tags:[],version:"v6",sidebarPosition:6,frontMatter:{},sidebar:"roku",previous:{title:"How to implement preview thumbnails in THEOplayer",permalink:"/documentation/pr-preview/pr-146/theoplayer/v6/how-to-guides/texttrack/how-to-implement-preview-thumbnails"},next:{title:"How to programmatically detect text track changes",permalink:"/documentation/pr-preview/pr-146/theoplayer/v6/how-to-guides/texttrack/how-to-detect-text-track-changes"}},c={},o=[{value:"SDKs",id:"sdks",level:2},{value:"Tracking ID3",id:"tracking-id3",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Listening for timed metadata events",id:"listening-for-timed-metadata-events",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Track the enter event",id:"track-the-enter-event",level:3},{value:"Web SDK",id:"web-sdk-1",level:5},{value:"Android SDK",id:"android-sdk-1",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-1",level:5},{value:"Sample application",id:"sample-application",level:2},{value:"Resources",id:"resources",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"how-to-track-id3-cues--tags",children:"How to track ID3 cues / tags?"})}),"\n",(0,a.jsx)(t.p,{children:"The question above is commonly asked by the developers who want to introduce a certain behavior depending on the metadata contained by the ID3 cues. For example, the developer wants:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"to schedule advertisements dynamically by using information passed on by the ID3 metadata."}),"\n",(0,a.jsx)(t.li,{children:"to overlay certain text on top of the player (e.g. the score of a football match)."}),"\n",(0,a.jsx)(t.li,{children:"..."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ID3",children:"ID3"})," is a type of metadata which can be inserted in HTTP livestreams. Once an ID3 cue is inserted, it'll be added to a THEOplayer ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/TextTrack.html",children:"TextTrack"}),".\nThe demo at ",(0,a.jsx)(t.a,{href:"https://demo.theoplayer.com/audio-id3-metadata",children:"https://demo.theoplayer.com/audio-id3-metadata"})," demonstrates a usage of ID3 metadata. Just before the song changes, an ",(0,a.jsx)(t.code,{children:"enter"})," event will be dispatched, the song information (title, album, etc.) is contained within this ",(0,a.jsx)(t.code,{children:"enter"})," event, and can be used to update the UI."]}),"\n",(0,a.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"tracking-id3",children:"Tracking ID3"}),"\n",(0,a.jsx)(t.p,{children:"This guide will show a couple of examples of tracking ID3 cues / tags, including:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"how to listen for timed metadata events"}),"\n",(0,a.jsxs)(t.li,{children:["how to track the ",(0,a.jsx)(t.em,{children:"enter"})," event"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,a.jsx)(t.h3,{id:"listening-for-timed-metadata-events",children:"Listening for timed metadata events"}),"\n",(0,a.jsx)(t.p,{children:"Below you can find an example of how timed metadata events can be captured when using THEOplayer."}),"\n",(0,a.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'var player = theoplayer.player(0);\nplayer.textTracks.addEventListener("addtrack", function (addTrackEvent) {\n  var track = addTrackEvent.track;\n  // assert track.kind === "metadata"\n\n  track.addEventListener("cuechange", function (cueChangeEvent) {\n    // here you can access the cue and other properties of the track and display the metadata to the outside\n  });\n});\n'})}),"\n",(0,a.jsx)(t.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"EventListener<CueChangeEvent> cueChangeListener = (CueChangeEvent event) -> {\n    event.getTextTrack().getCues();\n};\n\nEventListener<AddTrackEvent> handleTrackCreation = (AddTrackEvent event) -> {\n    event.getTrack().addEventListener(TextTrackEventTypes.CUECHANGE, cueChangeListener);\n};\n\nthis.tpv.getPlayer().getTextTracks().addEventListener(TextTrackListEventTypes.ADDTRACK, handleTrackCreation);\n"})}),"\n",(0,a.jsx)(t.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"let cueChangeListener = { (event: CueChangeEvent) in\n    // do something with the cue\n}\n\nlet handleTrackCreation = { (event: AddTrackEvent) in\n    if let textTrack = event.track as? TextTrack {\n        _ = textTrack.addEventListener(type: TextTrackEventTypes.CUE_CHANGE, listener: cueChangeListener)\n    }\n}\n\n_ = player.textTracks.addEventListener(type: TextTrackListEventTypes.ADD_TRACK, listener: handleTrackCreation)\n"})}),"\n",(0,a.jsx)(t.h3,{id:"track-the-enter-event",children:"Track the enter event"}),"\n",(0,a.jsxs)(t.p,{children:["The snippet below explains how you correctly track the ",(0,a.jsx)(t.code,{children:"enter"})," event, which is part of the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/TextTrack.html",children:"TextTrack API"}),". The ",(0,a.jsx)(t.code,{children:"enter"})," event maps to the moment in time when the ID3 cue is relevant."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["\u26a0 ",(0,a.jsx)(t.strong,{children:"Migrating from version 3.x or lower"})]}),"\n",(0,a.jsxs)(t.p,{children:["Previously, the ",(0,a.jsx)(t.code,{children:"exit"})," event was used to signal when an ID3 cue becomes relevant.\nAs of THEOplayer version 4.0, the ",(0,a.jsx)(t.code,{children:"enter"})," event is used instead."]}),"\n"]}),"\n",(0,a.jsx)(t.h5,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'function enterListener(e2) {\n  // log enter event\n  console.log(e2);\n}\nfunction handleTrackCreation(e0) {\n  e0.track.cues.forEach(function (cue) {\n    cue.addEventListener("enter", enterListener);\n  });\n\n  // detect cues being added to the track\n  e0.track.addEventListener("addcue", function (e1) {\n    // detect a cue being shown from a track\n    e1.cue.addEventListener("enter", enterListener);\n  });\n}\nplayer.textTracks.addEventListener("addtrack", handleTrackCreation);\n'})}),"\n",(0,a.jsx)(t.h5,{id:"android-sdk-1",children:"Android SDK"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'final EventListener<EnterCueEvent> enterListener = new EventListener<EnterCueEvent>() {\n    @Override\n    public void handleEvent(EnterCueEvent enterCueEvent) {\n        System.out.println("enterCueEvent: " + enterCueEvent.getCue().getContent());\n\n    }\n};\nEventListener<AddTrackEvent> handleTrackCreation = new EventListener<AddTrackEvent>() {\n    @Override\n    public void handleEvent(AddTrackEvent addTrackEvent) {\n        addTrackEvent.getTrack().addEventListener(TextTrackEventTypes.ENTERCUE, enterListener);\n\n    }\n};\ntpv.getPlayer().getTextTracks().addEventListener(TextTrackListEventTypes.ADDTRACK, handleTrackCreation);\n'})}),"\n",(0,a.jsx)(t.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-1",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"let enterListener = { (event: EnterCueEvent) in\n    // do something with the cue\n}\n\nlet handleTrackCreation = { (event: AddTrackEvent) in\n    if let textTrack = event.track as? TextTrack {\n        _ = textTrack.addEventListener(type: TextTrackEventTypes.ENTER_CUE, listener: enterListener)\n    }\n}\n\n_ = player.textTracks.addEventListener(type: TextTrackListEventTypes.ADD_TRACK, listener: handleTrackCreation)\n"})}),"\n",(0,a.jsx)(t.h2,{id:"sample-application",children:"Sample application"}),"\n",(0,a.jsx)(t.p,{children:"The demo below illustrates the use of ID3 in production."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Demo: ",(0,a.jsx)(t.a,{href:"https://demo.theoplayer.com/audio-id3-metadata",children:"https://demo.theoplayer.com/audio-id3-metadata"})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/TextTrack.html",children:"Reference API - TextTrack"})}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"http://id3.org/",children:"http://id3.org/"}),": ID3.org Home"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ID3",children:"https://en.wikipedia.org/wiki/ID3"}),": Wikipedia - ID3"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://dev.w3.org/html5/html-sourcing-inband-tracks/",children:"https://dev.w3.org/html5/html-sourcing-inband-tracks/"}),": External resource - Sourcing In-band Media Resource Tracks from Media Containers into HTML"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var a=n(96540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);