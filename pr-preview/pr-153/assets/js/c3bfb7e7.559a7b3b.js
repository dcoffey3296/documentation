"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94568],{34261:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var a=i(74848),n=i(28453);const r={},s="What does the error message \u201cSomething went wrong determining the initial period of the provided MPEG-DASH stream\u201d mean",o={id:"faq/error-message-initial-period-provided-MPEG-DASH",title:"What does the error message \u201cSomething went wrong determining the initial period of the provided MPEG-DASH stream\u201d mean",description:'This error, "Something went wrong determining the initial period of the provided MPEG-DASH stream", occurs whenever the player struggles to play a DASH stream due to problems determining the availability of the segments for that stream. The recommended solution for this is to make sure that the segments result available, based on the data provided in the manifest, at the time at which the manifest is requested.',source:"@site/theoplayer_versioned_docs/version-v6/faq/65-error-message-initial-period-provided-MPEG-DASH.md",sourceDirName:"faq",slug:"/faq/error-message-initial-period-provided-MPEG-DASH",permalink:"/documentation/pr-preview/pr-153/theoplayer/v6/faq/error-message-initial-period-provided-MPEG-DASH",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/faq/65-error-message-initial-period-provided-MPEG-DASH.md",tags:[],version:"v6",sidebarPosition:65,frontMatter:{},sidebar:"faq",previous:{title:"Page and Source domains",permalink:"/documentation/pr-preview/pr-153/theoplayer/v6/faq/page-and-source-domains"},next:{title:"Why is my PlayReady stream not working in Chromium Edge?",permalink:"/documentation/pr-preview/pr-153/theoplayer/v6/faq/Why-is-my-Playready-stream-not-working-in-Chromium-Edge"}},d={},h=[{value:"Long Answer",id:"long-answer",level:2}];function l(e){const t={blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"what-does-the-error-message-something-went-wrong-determining-the-initial-period-of-the-provided-mpeg-dash-stream-mean",children:"What does the error message \u201cSomething went wrong determining the initial period of the provided MPEG-DASH stream\u201d mean"})}),"\n",(0,a.jsx)(t.p,{children:'This error, "Something went wrong determining the initial period of the provided MPEG-DASH stream", occurs whenever the player struggles to play a DASH stream due to problems determining the availability of the segments for that stream. The recommended solution for this is to make sure that the segments result available, based on the data provided in the manifest, at the time at which the manifest is requested.'}),"\n",(0,a.jsx)(t.h2,{id:"long-answer",children:"Long Answer"}),"\n",(0,a.jsx)(t.p,{children:'A number of fixes and improvements we made available in several releases throughout 2020 brought THEOplayer to apply the DASH specification regarding segments availability more strictly than in previous versions. In other words, the player now requires, for successful playback, that the manifest indicates correctly the availability of segments. This is especially relevant for dynamic Media Presentations (MPD@type="dynamic").'}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"How to check whether your segments are available at the right time"}),"\nFor the segments to be correctly played, they must be available at the time when the manifest is requested/served. In other words,"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"\u201cstart of segment availability\u201d < \u201cmanifest is requested/served\u201d < \u201cend of segment availability\u201d"})}),"\n",(0,a.jsx)(t.p,{children:"How is the segment availability time calculated? The DASH specification indicates that:"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"For services with MPD@type='dynamic', the Segment availability start time of a Media Segment is the sum of"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"the value of the MPD@availabilityStartTime,"}),"\n",(0,a.jsx)(t.li,{children:"the PeriodStart time of the containing Period as defined in 5.3.2.1,"}),"\n",(0,a.jsx)(t.li,{children:"the MPD start time of the Media Segment, and"}),"\n",(0,a.jsx)(t.li,{children:"the MPD duration of the Media Segment."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"[\u2026]\nThe Segment availability end time of a Media Segment is the sum of the Segment availability start time, the MPD duration of the Media Segment and the value of the attribute @timeShiftBufferDepth for this Representation."}),"\n",(0,a.jsx)(t.p,{children:"If the @availabilityTimeOffset attribute is present for a Representation, then the adjusted segment availability start time is determined by subtracting the value of @availabilityTimeOffset from the Segment availability start time. This adjusted segment availability start time provides a time instant in wall-clock time at which a Segment becomes an available Segment. Note that if the @availabilityTimeComplete flag is set to true for such a Representation, then the entire Segment may not yet be available at the adjusted segment availability start time."}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var a=i(96540);const n={},r=a.createContext(n);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);