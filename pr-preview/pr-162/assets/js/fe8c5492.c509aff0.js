"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["27794"],{43766:function(e,s,i){i.r(s),i.d(s,{metadata:()=>t,contentTitle:()=>l,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>a});var t=JSON.parse('{"id":"faq/how-to-investigate-a-ticket","title":"How to investigate a ticket","description":"This article describes how our team typically investigates an issue (i.e. bug) reported to us through a Service Desk ticket.","source":"@site/theoplayer_versioned_docs/version-v6/faq/70-how-to-investigate-a-ticket.md","sourceDirName":"faq","slug":"/faq/how-to-investigate-a-ticket","permalink":"/documentation/pr-preview/pr-162/theoplayer/v6/faq/how-to-investigate-a-ticket","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/faq/70-how-to-investigate-a-ticket.md","tags":[],"version":"v6","sidebarPosition":70,"frontMatter":{},"sidebar":"faq","previous":{"title":"How to create a (great) ticket","permalink":"/documentation/pr-preview/pr-162/theoplayer/v6/faq/how-to-create-a-ticket"},"next":{"title":"What are the limitations of AirPlay","permalink":"/documentation/pr-preview/pr-162/theoplayer/v6/faq/what-are-the-limitations-of-AirPlay"}}'),n=i("85893"),r=i("50065");let a={},l="How to investigate a ticket",c={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Guide",id:"guide",level:2},{value:"Reproduce the issue",id:"reproduce-the-issue",level:3},{value:"Check other versions",id:"check-other-versions",level:3},{value:"Narrow the scope",id:"narrow-the-scope",level:3},{value:"Scope affected platforms",id:"scope-affected-platforms",level:4},{value:"Scope affected THEOplayer versions",id:"scope-affected-theoplayer-versions",level:4},{value:"Scope affected video players",id:"scope-affected-video-players",level:4},{value:"Investigation",id:"investigation",level:3},{value:"API",id:"api",level:4},{value:"Playback",id:"playback",level:4},{value:"Advertisements",id:"advertisements",level:4},{value:"Analytics",id:"analytics",level:4},{value:"DRM",id:"drm",level:4},{value:"Remarks",id:"remarks",level:2}];function h(e){let s={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"how-to-investigate-a-ticket",children:"How to investigate a ticket"})}),"\n",(0,n.jsx)(s.p,{children:"This article describes how our team typically investigates an issue (i.e. bug) reported to us through a Service Desk ticket.\nWe encourage you to go through these steps before creating a ticket, and to document your findings in your ticket."}),"\n",(0,n.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The ticket is well-described and/or ",(0,n.jsx)(s.a,{href:"/documentation/pr-preview/pr-162/theoplayer/v6/faq/how-to-create-a-ticket#creating-a-great-ticket",children:"C.R.U.S.P."}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["The reported 'Current behavior' can be easily understood.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Illustrations, screenshots or screen recordings are provided to further elaborate on the issue."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["The reported 'Expected behavior' can be easily understood.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The affected SDK(s) are correctly labelled."}),"\n",(0,n.jsx)(s.li,{children:"(The affected browsers are correctly labelled.)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["A reliable and simple reproduction page, stream or application has been shared.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Customer-specific application logic has been stripped when a reproduction page or application has been shared."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"guide",children:"Guide"}),"\n",(0,n.jsx)(s.p,{children:"Investigating an issue typically consists of 4 phases:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Reproducing the issue;"}),"\n",(0,n.jsx)(s.li,{children:"Checking whether it can be reproduced with the latest version (or other versions) of THEOplayer;"}),"\n",(0,n.jsx)(s.li,{children:"Pre-investigating the issue, and narrowing down the scope;"}),"\n",(0,n.jsx)(s.li,{children:"Investigating the root cause and determine the next action item."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"THEOplayer Jira Service Desk",src:i(5243).Z+"",width:"935",height:"151"})}),"\n",(0,n.jsx)(s.h3,{id:"reproduce-the-issue",children:"Reproduce the issue"}),"\n",(0,n.jsx)(s.p,{children:"The first step is to reproduce the issue. Take the reproduction stream/page/application, and confirm the issue."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"If the issue can be reproduced: continue the investigation."}),"\n",(0,n.jsx)(s.li,{children:"If the issue cannot be reproduced: request more information from the reporter."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"THEOplayer Jira Service Desk",src:i(99968).Z+"",width:"956",height:"430"})}),"\n",(0,n.jsx)(s.h3,{id:"check-other-versions",children:"Check other versions"}),"\n",(0,n.jsx)(s.p,{children:"The second step is to check if the issue can still be reproduced with the latest version (or other versions) of THEOplayer."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"If using a more recent version fixes the issue: deploy the latest version of THEOplayer."}),"\n",(0,n.jsx)(s.li,{children:"If an older version addresses the issue: investigate a potential regression."}),"\n",(0,n.jsx)(s.li,{children:"If this doesn't fix the issue: continue scoping the issue."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"narrow-the-scope",children:"Narrow the scope"}),"\n",(0,n.jsx)(s.p,{children:"The goal of this step is to narrow down the scope of the issue.\nAfter this phase, we want to determine the influence of the following components."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Affected platforms;","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Affected browsers;"}),"\n",(0,n.jsx)(s.li,{children:"Affected operating systems;"}),"\n",(0,n.jsx)(s.li,{children:"Affected SDKs;"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"Affected THEOplayer versions;"}),"\n",(0,n.jsx)(s.li,{children:"Affected video players."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"THEOplayer Jira Service Desk",src:i(88245).Z+"",width:"954",height:"170"})}),"\n",(0,n.jsx)(s.h4,{id:"scope-affected-platforms",children:"Scope affected platforms"}),"\n",(0,n.jsx)(s.p,{children:"It's always useful to know which browsers, SDKs and operating systems are affected by the issue."}),"\n",(0,n.jsx)(s.h4,{id:"scope-affected-theoplayer-versions",children:"Scope affected THEOplayer versions"}),"\n",(0,n.jsx)(s.p,{children:"Whilst it's critical to share which THEOplayer versions are affected, it's even more useful to identify older (or newer) versions which are unaffected by the issue. If that's the case, THEOplayer can identify a regression, which speeds up the R&D-process."}),"\n",(0,n.jsx)(s.p,{children:"Check which older versions are unaffected."}),"\n",(0,n.jsx)(s.h4,{id:"scope-affected-video-players",children:"Scope affected video players"}),"\n",(0,n.jsx)(s.p,{children:"In case of an AV playback issue (e.g. freezes, errors, ...),\ncomparing with other video players can help in understanding whether there's a server-side issue (e.g. encoding, packaging, CDN)\nor a client-side video player issue.\nIf all video players suffer from the issue, it's possible that the stream is not optimally encoded, packaged, etc."}),"\n",(0,n.jsx)(s.p,{children:"Tips for comparing with other video players:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"If it's an HLS stream: Native Safari, AVPlayer, HLS.js, Shaka Player"}),"\n",(0,n.jsx)(s.li,{children:"If it's an MPEG-DASH stream: DASH.js, ExoPlayer, Shaka Player"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"investigation",children:"Investigation"}),"\n",(0,n.jsx)(s.p,{children:"The goal of this step is to identify the cause.\nLet's discuss causes related to the API, Playback, Advertisements, Analytics and DRM."}),"\n",(0,n.jsx)(s.h4,{id:"api",children:"API"}),"\n",(0,n.jsx)(s.p,{children:"Developers implement THEOplayer through a specific API related to a specific feature.\nSometimes, an issue is caused by using a set of API-logic which triggers an edge-case.\nSometimes, a nice-to-have API might break in a new update, which in turn breaks a must-have feature."}),"\n",(0,n.jsx)(s.p,{children:"If you can identify which API-statement causes the issue,"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"you can evaluate if you can temporarily disable the statement, and potentially identify a workaround,"}),"\n",(0,n.jsx)(s.li,{children:"and the R&D-team knows to what the root cause is related."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Below is a list of proposed action items:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Use a near-empty THEOplayer page (or application). Don't use autoplay or preload, or poster images, or ...; limit the API to the absolute minimum."}),"\n",(0,n.jsx)(s.li,{children:"Gradually, add new statements, until the issue can be reproduced."}),"\n",(0,n.jsx)(s.li,{children:"Try alternative approaches, values and states."}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"playback",children:"Playback"}),"\n",(0,n.jsx)(s.p,{children:"Playback issues are related to video and audio freezes, start-up failures, and crashes during playback."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Double-check the pre-investigation."}),"\n",(0,n.jsx)(s.li,{children:"Extract information from the reporter why the issue is surfacing just now. Often, playback issues are caused by server-side changes."}),"\n",(0,n.jsx)(s.li,{children:"Extract information from the reporter whether every asset is suffering from the issue."}),"\n",(0,n.jsxs)(s.li,{children:["Check whether the issue can be reproduced with other streams:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["HLS: ",(0,n.jsxs)(s.a,{href:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",children:["https://cdn.theoplayer.com/video/star",(0,n.jsx)(s.em,{children:"wars_episode_vii-the_force_awakens_official_comic-con_2015_reel"}),"(2015)/index.m3u8"]})]}),"\n",(0,n.jsxs)(s.li,{children:["MPEG-DASH: ",(0,n.jsx)(s.a,{href:"https://amssamples.streaming.mediaservices.windows.net/634cd01c-6822-4630-8444-8dd6279f94c6/CaminandesLlamaDrama4K.ism/manifest(format=mpd-time-csf)",children:"https://amssamples.streaming.mediaservices.windows.net/634cd01c-6822-4630-8444-8dd6279f94c6/CaminandesLlamaDrama4K.ism/manifest(format=mpd-time-csf)"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"Check if the issue is related to a specific video or audio quality. Manually switch to a specific quality or track, and verify whether the issue can still be reproduced. Often, the issues are caused by glitching quality-changes, or a badly encoded quality."}),"\n",(0,n.jsx)(s.li,{children:"Check what is logged in chrome://media-internals."}),"\n",(0,n.jsxs)(s.li,{children:["Check whether there are ",(0,n.jsx)(s.a,{href:"/documentation/pr-preview/pr-162/theoplayer/v6/faq/how-to-remove-cors-restrictions",children:"CORS-issues"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"In-case DRM is used, check whether the issue can also be reproduced if the asset is unprotected."}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"advertisements",children:"Advertisements"}),"\n",(0,n.jsx)(s.p,{children:"Advertisement set-ups can be quite complex, and the related issues can be quite subtle."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Check whether simpler versions of your set-up suffers from the issue:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"In-case multiple ads are scheduled, check whether single ads suffer from the issue."}),"\n",(0,n.jsx)(s.li,{children:"In-case pre-rolls/mid-rolls are scheduled, check whether the issue is still present if you schedule it as a post-roll/mid-roll instead."}),"\n",(0,n.jsx)(s.li,{children:"In-case multiple ad pods are used inside an ad-break, check whether the issue can be reproduced with single ad pods."}),"\n",(0,n.jsx)(s.li,{children:"In-case a VPAID is scheduled, check whether a VAST works instead."}),"\n",(0,n.jsx)(s.li,{children:"In-case a VMAP is scheduled, check whether an altered VMAP works instead."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["In-case Google IMA is used, check whether the issue can be reproduced at ",(0,n.jsx)(s.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/html5/vastinspector",children:"https://developers.google.com/interactive-media-ads/docs/sdks/html5/vastinspector"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"In-case a SSAI solution is used, check whether other clients also suffer from the issue."}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"analytics",children:"Analytics"}),"\n",(0,n.jsx)(s.p,{children:"Issues related to an analytics service usually comes in three shapes:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["No data is being logged in the analytics service:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Check whether the analytics service requires a third-party SDK. If so, check whether this has been included."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Data is being logged incorrectly:","\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Try alternative configurations. When is it working incorrectly?"}),"\n",(0,n.jsx)(s.li,{children:"Identify the maintainer: is it THEOplayer or the analytics vendor?"}),"\n",(0,n.jsx)(s.li,{children:"Find the reference implementation or documentation, and compare with the current implementation."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"drm",children:"DRM"}),"\n",(0,n.jsx)(s.p,{children:"Sometimes issues are flagged as a DRM issue, whilst they are actually more generic playback issues:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Check whether the issue can also be reproduced with unprotected streams."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"In-case the issue is related to adding DRM:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Double-check the pre-investigation. It's valuable information if -for example- the issue can be reproduced on Chrome, but not on Firefox, as this could imply that this is a platform-specific decoding issue."}),"\n",(0,n.jsx)(s.li,{children:"Check whether the issue is related to Widevine, PlayReady, FairPlay, or all."}),"\n",(0,n.jsx)(s.li,{children:"Extract information from the customer whether every DRM-protected asset is suffering from this issue."}),"\n",(0,n.jsxs)(s.li,{children:["Check whether the issue can be reproduced with reference DRM streams. (e.g. ",(0,n.jsx)(s.a,{href:"https://demo.theoplayer.com/drm-aes-protection-128-encryption",children:"https://demo.theoplayer.com/drm-aes-protection-128-encryption"}),")"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The following resources might assist in your debugging efforts:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://demo.theoplayer.com/test-your-stream-with-statistics",children:"https://demo.theoplayer.com/test-your-stream-with-statistics"}),": logs a number of events and states."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://www.chromium.org/audio-video/media-internals",children:"https://www.chromium.org/audio-video/media-internals"}),": chrome://media-internals can help with identifying A/V decoding issues."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://ffmpeg.org/ffprobe.html",children:"ffprobe"})," can help with analyzing streams and segments."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://gpac.github.io/mp4box.js/test/filereader.html",children:"MP4Box.js"})," can help with analyzing MP4 files."]}),"\n",(0,n.jsxs)(s.li,{children:["Apple's ",(0,n.jsx)(s.a,{href:"https://developer.apple.com/documentation/http_live_streaming/about_apple_s_http_live_streaming_tools",children:"HLS Tools"})," can help (e.g. Media Stream Validator)."]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5243:function(e,s,i){i.d(s,{Z:function(){return t}});let t=i.p+"assets/images/ticket-4-stages-c1b32aaf31118677b8e12ea0a6f913ec.png"},99968:function(e,s,i){i.d(s,{Z:function(){return t}});let t=i.p+"assets/images/ticket-reproduce-4f68ae49865e31e6696b3dddb622e3ad.png"},88245:function(e,s,i){i.d(s,{Z:function(){return t}});let t=i.p+"assets/images/tickets-scope-1be0844416f48492be33a162c15ac16b.png"},50065:function(e,s,i){i.d(s,{Z:function(){return l},a:function(){return a}});var t=i(67294);let n={},r=t.createContext(n);function a(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);