"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30724],{68304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(74848),s=r(28453);const o={},i="Which error related events does the player expose",l={id:"faq/which-error-related-events-does-player-expose",title:"Which error related events does the player expose",description:'THEOplayer exposes different types of errors. Refer to "How to do error handling"',source:"@site/theoplayer_versioned_docs/version-v7/faq/15-which-error-related-events-does-player-expose.md",sourceDirName:"faq",slug:"/faq/which-error-related-events-does-player-expose",permalink:"/documentation/pr-preview/pr-142/theoplayer/v7/faq/which-error-related-events-does-player-expose",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/faq/15-which-error-related-events-does-player-expose.md",tags:[],version:"v7",sidebarPosition:15,frontMatter:{},sidebar:"faq",previous:{title:"How to know whether a live stream is playing",permalink:"/documentation/pr-preview/pr-142/theoplayer/v7/faq/how-to-know-when-livestream-is-playing"},next:{title:"Why did my subtitles stop working",permalink:"/documentation/pr-preview/pr-142/theoplayer/v7/faq/why-did-subtitles-stop-working"}},d={},c=[];function a(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"which-error-related-events-does-the-player-expose",children:"Which error related events does the player expose"})}),"\n",(0,n.jsxs)(t.p,{children:['THEOplayer exposes different types of errors. Refer to "',(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-142/theoplayer/v7/how-to-guides/miscellaneous/error/how-to-do-error-handling",children:"How to do error handling"}),'"\nfor information on how to programmatically detect an ',(0,n.jsx)(t.code,{children:"error"})," event through an event listener."]}),"\n",(0,n.jsxs)(t.p,{children:["Note that only the ",(0,n.jsx)(t.code,{children:"error"}),' events in the "Player API" are fatal.\nError events dispatched in different APIs (e.g. Ads API) are considered non-fatal, because some level of playback might still be possible, or the video player might recover from it.']}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"API"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Event"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Use"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Example/how to trigger"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Player"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"error"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Triggered for media issues, NOT network issues"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"A poorly encoded segment"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"segmentnotfound (not on iOS + only for DASH)"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"A segment was not found"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"A 404 returned on a segment"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Ads API"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"aderror"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Something went wrong during ad handling"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Empty ad tag / Adblocker"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Network API (web only)"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"offline"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Thrown to indicate that the stream is offline"}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:["DASH: take whole stream offline ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"HLS: take 1 segment offline is enough"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Chromecast API"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"error"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Thrown to indicate that there was an error while casting / trying to cast"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Unplugged Chromecast power cable during casting"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Android Player API"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"NoSupportedRepresentationFoundEvent"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Indicates that none of the provided representations is supported by the player"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Trying to play a 4k stream encoded in AV1"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var n=r(96540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);