"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7213],{84457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(74848),s=n(28453);const i={},l="What are the recommended stream settings?",d={id:"knowledge-base/streaming/what-are-the-recommended-stream-settings",title:"What are the recommended stream settings?",description:"There are many options to encode your streams. These encoding are often related to the content you are streaming. For example, fast motion movies like sporting events might require higher frame rates and more bandwidth compared to video of static landscape webcams.",source:"@site/theoplayer_versioned_docs/version-v7/knowledge-base/04-streaming/02-what-are-the-recommended-stream-settings.md",sourceDirName:"knowledge-base/04-streaming",slug:"/knowledge-base/streaming/what-are-the-recommended-stream-settings",permalink:"/documentation/pr-preview/pr-147/theoplayer/v7/knowledge-base/streaming/what-are-the-recommended-stream-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/knowledge-base/04-streaming/02-what-are-the-recommended-stream-settings.md",tags:[],version:"v7",sidebarPosition:2,frontMatter:{},sidebar:"roku",previous:{title:"HTTP Live Streaming",permalink:"/documentation/pr-preview/pr-147/theoplayer/v7/knowledge-base/streaming/http-live-streaming"},next:{title:"Cross Origin Resource Sharing (CORS)",permalink:"/documentation/pr-preview/pr-147/theoplayer/v7/knowledge-base/cors/introduction"}},a={},c=[];function o(e){const t={a:"a",h1:"h1",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"what-are-the-recommended-stream-settings",children:"What are the recommended stream settings?"})}),"\n",(0,r.jsx)(t.p,{children:"There are many options to encode your streams. These encoding are often related to the content you are streaming. For example, fast motion movies like sporting events might require higher frame rates and more bandwidth compared to video of static landscape webcams."}),"\n",(0,r.jsx)(t.p,{children:"The video and audio codecs which are recommended are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Video: H.264 in Baseline Profile, Main Profile or High Profile. We advise against the usage of B-frames as this requires the entire chunk to be available before playback can start. It is important to take into account not all platforms will be able to play back the High profile. When setting up encoding profiles, keep in mind the platforms you intend to support."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Audio: AAC-LC or HE-AAC. It is however important to use the same codec for all audio tracks. Using the same sampling frequency and bitrate is not required, but deviating from this might result in audible changes between streams. Also, when using HE-AAC it is highly recommended stating this in the stream's CODEC-attribute."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"In regard to packaging, both raw-audio files (.aac, .mp3, ...) and MPEG Transport Streams can be used. For video, it is recommended to add a full IDR frame (keyframe) at the start of each video chunk."}),"\n",(0,r.jsx)(t.p,{children:"The following configurations for adaptive streams have proven to work well on most content. Keep in mind some content can be displayed better when tweaking these parameters:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"#"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Resolution"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Video settings"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Video bitrate"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Frame rate"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Audio settings"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Audio bitrate"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Audio sample rate"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"480x270"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Baseline 3.0"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"500k"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"25 fps"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"HE-AAC"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"128k"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"44.1kHz"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"640x360"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Baseline 3.0"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"900k"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"25 fps"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"HE-AAC"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"128k"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"44.1kHz"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"960x540"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Baseline 3.1"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1800k"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"25 fps"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"HE-AAC"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"128k"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"44.1kHz"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1280x720"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Main 3.1"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"4500k"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"25 fps"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"HE-AAC"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"128k"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"44.1kHz"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1920x1080"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"High 4.0"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"8500k"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"25 fps"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"HE-AAC"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"128k"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"44.1kHz"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"For manifest generation, we always advice to add at least the CODECS and RESOLUTION as they will speed up the adaptive bitrate capabilities of the player."}),"\n",(0,r.jsxs)(t.p,{children:["As a reference, Apple also provides a list of recommendations in regard to HLS: ",(0,r.jsx)(t.a,{href:"https://developer.apple.com/library/ios/technotes/tn2224/_index.html#//apple_ref/doc/uid/DTS40009745-CH1-SETTINGSFILES",children:"TN2224"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);