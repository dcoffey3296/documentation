"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["61455"],{43791:function(e,t,r){r.r(t),r.d(t,{metadata:()=>i,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>s});var i=JSON.parse('{"id":"how-to-guides/mediatrack/how-to-start-with-specific-quality","title":"How to start with a specific quality?","description":"This question is typically asked because developers want their HLS or MPEG-DASH stream to start with a specific rendition of the manifest. They want to implement this use-case to speed up the time-to-first frame, or to serve a better quality to the customer, or to serve a different quality on different platforms.","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/06-mediatrack/05-how-to-start-with-specific-quality.md","sourceDirName":"how-to-guides/06-mediatrack","slug":"/how-to-guides/mediatrack/how-to-start-with-specific-quality","permalink":"/documentation/pr-preview/pr-160/theoplayer/v4/how-to-guides/mediatrack/how-to-start-with-specific-quality","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/06-mediatrack/05-how-to-start-with-specific-quality.md","tags":[],"version":"v4","sidebarPosition":5,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to programmatically detect video track qualities","permalink":"/documentation/pr-preview/pr-160/theoplayer/v4/how-to-guides/mediatrack/how-to-detect-video-track-qualities"},"next":{"title":"How to reduce data usage on mobile devices","permalink":"/documentation/pr-preview/pr-160/theoplayer/v4/how-to-guides/mediatrack/how-to-reduce-data-usage-on-mobile-devices"}}'),n=r("85893"),a=r("50065");let s={},o="How to start with a specific quality?",l={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"how-to-start-with-a-specific-quality",children:"How to start with a specific quality?"})}),"\n",(0,n.jsx)(t.p,{children:"This question is typically asked because developers want their HLS or MPEG-DASH stream to start with a specific rendition of the manifest. They want to implement this use-case to speed up the time-to-first frame, or to serve a better quality to the customer, or to serve a different quality on different platforms."}),"\n",(0,n.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,n.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'var player = new THEOplayer.Player(element, playerConfig);\nplayer.videoTracks.addEventListener("addtrack", function (e0) {\n  player.videoTracks[0].targetQuality = player.videoTracks[0].qualities[0]; // start with a specific quality\n  player.addEventListener("progress", attachABRResetLogic);\n});\n\nfunction attachABRResetLogic() {\n  if (player.buffered.length > 0) {\n    // switch to normal ABR when THEOplayer buffered beyond 10 seconds\n    if (player.buffered.end(player.buffered.length - 1) > 10) {\n      player.videoTracks[0].targetQuality = null;\n      player.removeEventListener("progress", attachABRResetLogic);\n    }\n  }\n}\n\nplayer.source = {\n  sources: [\n    {\n      src: "//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"\n    }\n  ]\n};\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.code,{children:"targetQuality"})," property to pass on an array of qualities. THEOplayer will only be able to render qualities belonging to this array through its ABR algorithm. Viewers can still select the quality through the quality selector."]}),"\n",(0,n.jsxs)(t.p,{children:["When the ",(0,n.jsx)(t.code,{children:"addtrack"})," event is dispatched, THEOplayer has not yet started buffered, so you can adjust the ",(0,n.jsx)(t.code,{children:"targetQuality"}),". The ",(0,n.jsx)(t.code,{children:"targetQuality"})," property allows you to specify a set of qualities that THEOplayer can use for ABR selection. THEOplayer will have to select the set quality if only one quality is provided. You reset the ABR selection by setting ",(0,n.jsx)(t.code,{children:"targetQuality"})," to null."]}),"\n",(0,n.jsx)(t.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"private Player theoplayer;\nprivate TimeRanges buffered;\n\ntheoplayer.getVideoTracks().addEventListener(VideoTrackListEventTypes.ADDTRACK, new EventListener<AddTrackEvent>() {\n    @Override\n    public void handleEvent(AddTrackEvent addTrackEvent) {\n        theoplayer.getVideoTracks().getItem(0).setTargetQuality(theoplayer.getVideoTracks().getItem(0).getQualities().getItem(0));\n        theoplayer.addEventListener(PlayerEventTypes.PROGRESS, new EventListener<ProgressEvent>() {\n            @Override\n            public void handleEvent(ProgressEvent progressEvent) {\n                attachABRResetLogic();\n            }\n        });\n    }\n});\nprivate void attachABRResetLogic() {\n    theoplayer.requestBuffered(result -> buffered = result);\n    if (buffered.length() > 0){\n        //Switch to normal ABR when THEOplayer buffered beyond 10 seconds\n        if (buffered.getEnd(buffered.length() - 1) > 10) {\n            theoplayer.getVideoTracks().getItem(0).setTargetQuality(null);\n            theoplayer.removeEventListener(PlayerEventTypes.PROGRESS, new EventListener<ProgressEvent>() {\n                @Override\n                public void handleEvent(ProgressEvent progressEvent) {\n                    attachABRResetLogic();\n                }\n            });\n        }\n    }\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This is not possible on iOS (and with DRM streams in MacOS Safari) due to the fact that playback control on the Apple HLS-playback pipeline is very limited."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/MediaTrack.html",children:"MediaTrack API"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return s}});var i=r(67294);let n={},a=i.createContext(n);function s(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);