"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19026],{31312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(74848),a=n(28453);const r={},o="Which subtitle and CC formats are supported on native Safari",s={id:"faq/which-subtitle-and-cc-formats-are-supported-on-native-safari",title:"Which subtitle and CC formats are supported on native Safari",description:"The Safari browser on iOS uses the native Safari video player.",source:"@site/theoplayer_versioned_docs/version-v6/faq/67-which-subtitle-and-cc-formats-are-supported-on-native-safari.md",sourceDirName:"faq",slug:"/faq/which-subtitle-and-cc-formats-are-supported-on-native-safari",permalink:"/documentation/pr-preview/pr-155/theoplayer/v6/faq/which-subtitle-and-cc-formats-are-supported-on-native-safari",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/faq/67-which-subtitle-and-cc-formats-are-supported-on-native-safari.md",tags:[],version:"v6",sidebarPosition:67,frontMatter:{},sidebar:"faq",previous:{title:"Why is my PlayReady stream not working in Chromium Edge?",permalink:"/documentation/pr-preview/pr-155/theoplayer/v6/faq/Why-is-my-Playready-stream-not-working-in-Chromium-Edge"},next:{title:"How to navigate through the documentation and resources",permalink:"/documentation/pr-preview/pr-155/theoplayer/v6/faq/how-to-navigate-through-the-documentation-and-resources"}},d={},c=[{value:"WebVTT",id:"webvtt",level:3},{value:"TTML",id:"ttml",level:3},{value:"CEA608 and CEA708",id:"cea608-and-cea708",level:3},{value:"Known Limitation",id:"known-limitation",level:2},{value:"Resources",id:"resources",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"which-subtitle-and-cc-formats-are-supported-on-native-safari",children:"Which subtitle and CC formats are supported on native Safari"})}),"\n",(0,i.jsxs)(t.p,{children:["The Safari browser on iOS uses the native Safari video player.\nSafari on the desktop also uses its native player when using FairPlay or when the ",(0,i.jsx)(t.code,{children:"useNativePlayback"})," flag is enabled."]}),"\n",(0,i.jsx)(t.h3,{id:"webvtt",children:"WebVTT"}),"\n",(0,i.jsxs)(t.p,{children:["For displaying webvtt subtitles, Safari on iOS requires the ",(0,i.jsx)(t.code,{children:"SUBTITLES"})," attribute in the ",(0,i.jsx)(t.code,{children:"EXT-X-STREAM-INF"})," tag of the m3u8 file.\nThis ",(0,i.jsx)(t.code,{children:"SUBTITLES"})," attribute is optional on browsers such as Chrome and Firefox and when Safari does not use its native video player."]}),"\n",(0,i.jsx)(t.h3,{id:"ttml",children:"TTML"}),"\n",(0,i.jsxs)(t.p,{children:["TTML subtitles aren't supported through native Safari. However, THEOplayer should be able to handle TTML subtitles on desktop Safari as long as FairPlay is not being used and the ",(0,i.jsx)(t.code,{children:"useNativePlayback"})," flag is not enabled."]}),"\n",(0,i.jsx)(t.h3,{id:"cea608-and-cea708",children:"CEA608 and CEA708"}),"\n",(0,i.jsx)(t.p,{children:"CEA608 and CEA708 subtitles are supported."}),"\n",(0,i.jsx)(t.h2,{id:"known-limitation",children:"Known Limitation"}),"\n",(0,i.jsxs)(t.p,{children:["When multiple subtitles with mode ",(0,i.jsx)(t.code,{children:"hidden"})," are configured, only one will fire its events such as ",(0,i.jsx)(t.code,{children:"addcue"})," and ",(0,i.jsx)(t.code,{children:"cuechange"})," when using Safari's native player."]}),"\n",(0,i.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsx)(t.p,{children:"The following resources provide more information:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc8216#section-4.3.4.2",children:"HLS Specification - #EXT-X-STREAM-INF"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v6/knowledge-base/playback/subtitles-and-closed-captions/introduction",children:"THEOplayer introduction to subtitles and closed captions"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/texttrack/introduction",children:"THEOplayer introduction texttracks"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(96540);const a={},r=i.createContext(a);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);