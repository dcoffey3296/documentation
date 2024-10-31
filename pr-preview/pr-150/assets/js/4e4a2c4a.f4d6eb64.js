"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40447],{40534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=n(74848),s=n(28453);const i={},l="HTTP Live Streaming",o={id:"knowledge-base/streaming/http-live-streaming",title:"HTTP Live Streaming",description:"HTTP Live Streaming (also known as HLS) is a protocol implemented by Apple for streaming of audio and/or video content over HTTP. HLS has become over the last years a de facto standard for streaming content online. The main reasons for this are:",source:"@site/theoplayer_versioned_docs/version-v7/knowledge-base/04-streaming/01-http-live-streaming.md",sourceDirName:"knowledge-base/04-streaming",slug:"/knowledge-base/streaming/http-live-streaming",permalink:"/documentation/pr-preview/pr-150/theoplayer/v7/knowledge-base/streaming/http-live-streaming",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/knowledge-base/04-streaming/01-http-live-streaming.md",tags:[],version:"v7",sidebarPosition:1,frontMatter:{},sidebar:"roku",previous:{title:"Streaming",permalink:"/documentation/pr-preview/pr-150/theoplayer/v7/knowledge-base/streaming/introduction"},next:{title:"What are the recommended stream settings?",permalink:"/documentation/pr-preview/pr-150/theoplayer/v7/knowledge-base/streaming/what-are-the-recommended-stream-settings"}},d={},a=[{value:"THEOplayer and HLS: HTML5 vs. Flash",id:"theoplayer-and-hls-html5-vs-flash",level:2},{value:"Supported platforms and browsers",id:"supported-platforms-and-browsers",level:2}];function c(e){const t={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"http-live-streaming",children:"HTTP Live Streaming"})}),"\n",(0,r.jsx)(t.p,{children:"HTTP Live Streaming (also known as HLS) is a protocol implemented by Apple for streaming of audio and/or video content over HTTP. HLS has become over the last years a de facto standard for streaming content online. The main reasons for this are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Adaptive streaming: HLS is able to dynamically adjust playback quality to match the device and network conditions such as the available speed of wired or wireless networks. This method of adaptive streaming allows the protocol to deliver better viewer experiences."}),"\n",(0,r.jsx)(t.li,{children:"Support for live, video-on-demand (VOD) and time-shifted (DVR) streaming."}),"\n",(0,r.jsx)(t.li,{children:"HTTP transactions: Because HLS only makes use of standard HTTP requests it is capable of traversing any firewall or proxy server that let through standard HTTP traffic. This also allows content to be delivered via widely available CDNs."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The HLS protocol also specifies a standard encryption mechanism with AES-128 for content protection, offers support for subtitles and closed captions, advertisements, ..."}),"\n",(0,r.jsx)(t.h2,{id:"theoplayer-and-hls-html5-vs-flash",children:"THEOplayer and HLS: HTML5 vs. Flash"}),"\n",(0,r.jsx)(t.p,{children:"HTTP Live Streaming is currently the only protocol capable of streaming to Apples iPhone and iPad devices. However, besides Safari on Mac, most other browsers do not directly support playback of the HLS protocol. Other solutions for playback of HLS require primarily the installation of external browser plug-ins such as Flash, Silverlight or QuickTime."}),"\n",(0,r.jsx)(t.p,{children:"With THEOplayer it is possible to stream live, VOD or DVR content with HLS directly to HTML5 platforms without the need to have any plug-ins or apps installed. THEOplayer offers support for HLS on almost all modern devices and browsers. This includes desktop devices running Windows, Linux and OS X, but also mobile devices running Android or Windows Phone."}),"\n",(0,r.jsx)(t.h2,{id:"supported-platforms-and-browsers",children:"Supported platforms and browsers"}),"\n",(0,r.jsx)(t.p,{children:"THEOplayer offers support for HTTP Live Streaming on the following HTML5 platforms and browsers without the need to have any apps or plug-ins such as Flash, Silverlight or QuickTime installed:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Platform"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Browser"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"Windows"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Internet Explorer (*)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Edge"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Chrome"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Firefox"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Opera"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Vivaldi"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"OS X"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Safari"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Chrome"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Firefox (**)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Opera"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Vivaldi"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"Linux"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Chrome"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Firefox (***)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Opera"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"Android"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Chrome for Android"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Firefox for Android"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Opera"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"iOS"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Safari"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Chrome for iOS"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Opera Mini"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Opera Coast"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"Windows Phone 8.1"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Internet Explorer"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"(*) = Version 10+"}),"\n",(0,r.jsx)(t.p,{children:"(**) = As of Firefox 35+"}),"\n",(0,r.jsx)(t.p,{children:"(***) = Requires gstreamer H.264 plug-in to be installed"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);