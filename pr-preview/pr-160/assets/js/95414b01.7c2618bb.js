"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["7990"],{13084:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>i,default:()=>c,assets:()=>d,toc:()=>l,frontMatter:()=>o});var s=JSON.parse('{"id":"faq/can-we-use-hls-or-dash-ads","title":"Can we use HLS or DASH ads","description":"Yes, we support HLS and DASH ads through a THEOAdDescription for the THEOplayer Web SDK 2.84.0 and up. HLS and DASH ads are currently not supported on any other SDKs. Our Google IMA integration does not support HLS or DASH ads.","source":"@site/theoplayer/faq/40-can-we-use-hls-or-dash-ads.md","sourceDirName":"faq","slug":"/faq/can-we-use-hls-or-dash-ads","permalink":"/documentation/pr-preview/pr-160/theoplayer/faq/can-we-use-hls-or-dash-ads","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/40-can-we-use-hls-or-dash-ads.md","tags":[],"version":"current","sidebarPosition":40,"frontMatter":{},"sidebar":"faq","previous":{"title":"What are the player seeking and seeked events and when are they fired","permalink":"/documentation/pr-preview/pr-160/theoplayer/faq/what-are-the-player-seeking-and-seeked-events"},"next":{"title":"How to change text in THEOplayer","permalink":"/documentation/pr-preview/pr-160/theoplayer/faq/how-to-change-text-in-theoplayer"}}'),a=n("85893"),t=n("50065");let o={},i="Can we use HLS or DASH ads",d={},l=[{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2}];function p(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"can-we-use-hls-or-dash-ads",children:"Can we use HLS or DASH ads"})}),"\n",(0,a.jsxs)(r.p,{children:["Yes, we support HLS and DASH ads through a ",(0,a.jsx)(r.code,{children:"THEOAdDescription"})," for the THEOplayer Web SDK 2.84.0 and up. HLS and DASH ads are currently not supported on any other SDKs. Our Google IMA integration does not support HLS or DASH ads."]}),"\n",(0,a.jsxs)(r.p,{children:["To be able to play HLS or DASH advertisements, make sure to add ",(0,a.jsx)(r.code,{children:"allowedMimeTypes"})," with the corresponding mime-types to your player configuration. When no ",(0,a.jsx)(r.code,{children:"allowedMimeTypes"})," are specified, THEOplayer will only play progressive media types (non-streaming) as advertisements. When ",(0,a.jsx)(r.code,{children:"allowedMimeTypes"})," are specified, THEOplayer will first prioritize DASH, then HLS, then progressive media types."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'new THEOplayer.Player(element, {\n  ads: {\n    allowedMimeTypes: [\n      "application/dash+xml",\n      "application/x-mpegURL",\n      "application/vnd.apple.mpegurl",\n      "video/mp4",\n      "video/3gpp", // See the Remark about 3gpp at the bottom.\n      "video/webm"\n    ]\n  }\n});\n'})}),"\n",(0,a.jsx)(r.p,{children:"This is currently only supported using the web pipeline. There is no support for native iOS or Android."}),"\n",(0,a.jsx)(r.p,{children:"Using HLS ads is useful for preloading advertisements on low-end devices such as older smart TVs."}),"\n",(0,a.jsx)(r.p,{children:"THEOplayer supports various media file formats for ads. This includes mp4-based progressive download, by far the most used format for ads, currently providing the widest coverage across devices."}),"\n",(0,a.jsx)(r.p,{children:"If your reason for using HLS ads is the wish to use ABR to be more flexible regarding bandwidth, rest assured: VAST can (and usually does) contain multiple media files in several resolutions, qualities and formats. Among these, the most appropriate will be chosen to be played on your device or desktop browser."}),"\n",(0,a.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"With the Google IMA integration, HLS and DASH ads are never played, even on platforms with native support."}),"\n",(0,a.jsxs)(r.li,{children:["Although browsers consider ",(0,a.jsx)(r.code,{children:"3gpp"})," a video codec, sometimes their support is just for the audio part. There could be cases where no video is shown. Avoid this legacy format when possible."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsx)(r.p,{children:"The following resources provide more information:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"https://www.iab.com/guidelines/?post_type=iab_guideline",children:"IAB Standards, Guidelines & Best Practices"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/Ads.html",children:"API reference \u2013 Ads interface"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/documentation/pr-preview/pr-160/theoplayer/knowledge-base/advertisement/user-guide",children:"THEOplayer Advertising User Guide"})}),"\n"]})]})}function c(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return o}});var s=n(67294);let a={},t=s.createContext(a);function o(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);