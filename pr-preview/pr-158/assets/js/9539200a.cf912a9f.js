"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["48674"],{53417:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>s,default:()=>p,assets:()=>l,toc:()=>h,frontMatter:()=>r});var n=JSON.parse('{"id":"faq/what-are-the-limitations-of-AirPlay","title":"What are the limitations of AirPlay","description":"When casting through AirPlay your viewer is relying on the native Apple video player.","source":"@site/theoplayer_versioned_docs/version-v7/faq/71-what-are-the-limitations-of-AirPlay.md","sourceDirName":"faq","slug":"/faq/what-are-the-limitations-of-AirPlay","permalink":"/documentation/pr-preview/pr-158/theoplayer/v7/faq/what-are-the-limitations-of-AirPlay","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/faq/71-what-are-the-limitations-of-AirPlay.md","tags":[],"version":"v7","sidebarPosition":71,"frontMatter":{},"sidebar":"faq","previous":{"title":"How to investigate a ticket","permalink":"/documentation/pr-preview/pr-158/theoplayer/v7/faq/how-to-investigate-a-ticket"},"next":{"title":"What are the Edgio challenges","permalink":"/documentation/pr-preview/pr-158/theoplayer/v7/faq/what-are-the-edgio-challenges"}}'),a=i("85893"),o=i("50065");let r={},s="What are the limitations of AirPlay",l={},h=[];function d(e){let t={a:"a",admonition:"admonition",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"what-are-the-limitations-of-airplay",children:"What are the limitations of AirPlay"})}),"\n",(0,a.jsxs)(t.p,{children:["When casting through ",(0,a.jsx)(t.a,{href:"https://www.theoplayer.com/theoplayer-demo-airplay",children:"AirPlay"})," your viewer is relying on the native Apple video player.\nThis setup gives rise to a number of limitations, as a third-party video player (i.e. THEOplayer) cannot circumvent the limitations of this native Apple video player."]}),"\n",(0,a.jsx)(t.p,{children:"Some of these limitations include, but are not limited to, the following:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"AirPlay does not support client-side ad-insertion.\nInstead, you could consider using server-side ad-insertion, or disabling client-side ad-insertion when allowing AirPlay."}),"\n",(0,a.jsx)(t.li,{children:"AirPlay does not support VR/360 videos. Instead, you should disable AirPlay for VR/360 videos."}),"\n",(0,a.jsx)(t.li,{children:"AirPlay does not support MPEG-DASH. Instead, you should use HLS if you want to allow AirPlay."}),"\n",(0,a.jsxs)(t.li,{children:["AirPlay does not support UI customization.\nInstead, you could implement a ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-158/theoplayer/v4/getting-started/sdks/tvos/getting-started",children:"tvOS application"})," to offer a custom playback experience on an Apple TV."]}),"\n",(0,a.jsxs)(t.li,{children:["AirPlay does not support some closed captions and subtitle formats, including CEA-608 and ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-158/theoplayer/v7/how-to-guides/texttrack/how-to-insert-subtitles",children:"sideloaded (WebVTT) subtitles"}),".\nInstead, you must use subtitles that are supported natively."]}),"\n",(0,a.jsx)(t.li,{children:"AirPlay does not support manual quality switches. Instead, viewers can only rely on automatic quality selection."}),"\n",(0,a.jsx)(t.li,{children:"AirPlay may not have proper support for LL-HLS. The delay might be greater than you expect, and stuttering may occur."}),"\n",(0,a.jsx)(t.li,{children:"AirPlay does not support authentication cookies. AirPlay streams run on a device other than the device initiating the session.\nThis means authentication cookies will not be available to retrieve playlists, encryption keys, ...\nThere is also no way to intercept these requests from the initiating device (other than DRM license requests)."}),"\n"]}),"\n",(0,a.jsxs)(t.admonition,{title:"Does native Safari support it?",type:"info",children:[(0,a.jsx)(t.p,{children:"When you want to know whether the native AirPlay video player supports a certain feature, you can compare the experience with the native Safari video player."}),(0,a.jsx)(t.p,{children:"For example, if you want to know whether MPEG-DASH is supported, you can enter your MPEG-DASH URL in the address bar of Safari, hit enter, and observe the results. The same results are most likely true for the native AirPlay video player."})]})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return r}});var n=i(67294);let a={},o=n.createContext(a);function r(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);