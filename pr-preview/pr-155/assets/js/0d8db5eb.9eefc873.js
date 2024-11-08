"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8813],{50550:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=a(74848),n=a(28453);const r={},d="How to programmatically detect video track quality changes",o={id:"how-to-guides/mediatrack/how-to-detect-video-track-quality-changes",title:"How to programmatically detect video track quality changes",description:"This article describes how you can use the API to detect video track quality changes.",source:"@site/theoplayer_versioned_docs/version-v6/how-to-guides/06-mediatrack/07-how-to-detect-video-track-quality-changes.md",sourceDirName:"how-to-guides/06-mediatrack",slug:"/how-to-guides/mediatrack/how-to-detect-video-track-quality-changes",permalink:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/mediatrack/how-to-detect-video-track-quality-changes",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/06-mediatrack/07-how-to-detect-video-track-quality-changes.md",tags:[],version:"v6",sidebarPosition:7,frontMatter:{},sidebar:"roku",previous:{title:"How to reduce data usage on mobile devices",permalink:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/mediatrack/how-to-reduce-data-usage-on-mobile-devices"},next:{title:"How to programmatically detect audio track changes",permalink:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/mediatrack/how-to-detect-audio-track-changes"}},c={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk",level:5},{value:"Remarks",id:"remarks",level:2},{value:"Related articles",id:"related-articles",level:2}];function s(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"how-to-programmatically-detect-video-track-quality-changes",children:"How to programmatically detect video track quality changes"})}),"\n",(0,i.jsx)(t.p,{children:"This article describes how you can use the API to detect video track quality changes."}),"\n",(0,i.jsx)(t.p,{children:"The VideoTrack API, which is a sub-API of the MediaTrack API, can be used to implement this functionality.\nImplementing this functionality is a common use-case for developers who want to build their own UI to visualize the available video track qualities."}),"\n",(0,i.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,i.jsx)(t.p,{children:"The code examples below how to implement the detection of video track qualities across SDK."}),"\n",(0,i.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsxs)(t.p,{children:["The Web SDK leverages the ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/MediaTrack.html",children:"MediaTrack API"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'// detect video tracks being added to the player\nplayer.videoTracks.addEventListener("addtrack", function (e0) {\n  // detect quality changes of a track\n  e0.track.addEventListener("activequalitychanged", function (e1) {\n    console.log("activequalitychanged event detected!", e1);\n  });\n});\n'})}),"\n",(0,i.jsx)(t.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,i.jsxs)(t.p,{children:["The Android SDK leverages the ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/player/track/mediatrack/MediaTrackList.html",children:"MediaTrack API"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'EventListener<AddTrackEvent> handleAddTrackEvent = new EventListener<AddTrackEvent>() {\n    EventListener<ActiveQualityChangedEvent> handleActiveQualityChangedEvent = new EventListener<ActiveQualityChangedEvent>() {\n        @Override\n        public void handleEvent(ActiveQualityChangedEvent activeQualityChangedEvent) {\n            System.out.println("activequalitychanged event detected! " + activeQualityChangedEvent.getQuality().toString());\n        }\n    };\n    @Override\n    public void handleEvent(AddTrackEvent addTrackEvent) {\n        addTrackEvent.getTrack().addEventListener(VideoTrackEventTypes.ACTIVEQUALITYCHANGEDEVENT, handleActiveQualityChangedEvent);\n    }\n};\ntpv.getPlayer().getVideoTracks().addEventListener(VideoTrackListEventTypes.ADDTRACK, handleAddTrackEvent);\n'})}),"\n",(0,i.jsx)(t.h5,{id:"ios-tvos-sdk",children:"iOS (/tvOS) SDK"}),"\n",(0,i.jsx)(t.p,{children:"Currently not available due to iOS limitations."}),"\n",(0,i.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A related article on building a Chromeless UI is located at ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/ui/how-to-build-chromeless-ui",children:"How to build a Chromeless UI"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/mediatrack/how-to-detect-audio-tracks",children:"How to programmatically detect audio tracks"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/mediatrack/how-to-detect-video-track-quality-changes",children:"How to programmatically detect video track quality changes"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/mediatrack/how-to-enable-disable-audio-tracks",children:"How to programmatically enable or disable audio tracks"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/mediatrack/how-to-select-video-track-quality",children:"How to programmatically select a video track quality"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>d,x:()=>o});var i=a(96540);const n={},r=i.createContext(n);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);