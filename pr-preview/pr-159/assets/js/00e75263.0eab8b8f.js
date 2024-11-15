"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["95785"],{56444:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>i});var n=JSON.parse('{"id":"faq/which-error-related-events-does-player-expose","title":"Which error related events does the player expose","description":"THEOplayer exposes different types of errors. Refer to \\"How to do error handling\\"","source":"@site/theoplayer_versioned_docs/version-v6/faq/15-which-error-related-events-does-player-expose.md","sourceDirName":"faq","slug":"/faq/which-error-related-events-does-player-expose","permalink":"/documentation/pr-preview/pr-159/theoplayer/v6/faq/which-error-related-events-does-player-expose","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/faq/15-which-error-related-events-does-player-expose.md","tags":[],"version":"v6","sidebarPosition":15,"frontMatter":{},"sidebar":"faq","previous":{"title":"How to know whether a live stream is playing","permalink":"/documentation/pr-preview/pr-159/theoplayer/v6/faq/how-to-know-when-livestream-is-playing"},"next":{"title":"Why did my subtitles stop working","permalink":"/documentation/pr-preview/pr-159/theoplayer/v6/faq/why-did-subtitles-stop-working"}}'),s=r("85893"),o=r("50065");let i={},l="Which error related events does the player expose",d={},a=[];function c(e){let t={a:"a",code:"code",h1:"h1",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"which-error-related-events-does-the-player-expose",children:"Which error related events does the player expose"})}),"\n",(0,s.jsxs)(t.p,{children:['THEOplayer exposes different types of errors. Refer to "',(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-159/theoplayer/v6/how-to-guides/miscellaneous/error/how-to-do-error-handling",children:"How to do error handling"}),'"\nfor information on how to programmatically detect an ',(0,s.jsx)(t.code,{children:"error"})," event through an event listener."]}),"\n",(0,s.jsxs)(t.p,{children:["Note that only the ",(0,s.jsx)(t.code,{children:"error"}),' events in the "Player API" are fatal.\nError events dispatched in different APIs (e.g. Ads API) are considered non-fatal, because some level of playback might still be possible, or the video player might recover from it.']}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"API"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Event"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Use"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Example/how to trigger"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Player"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"error"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Triggered for media issues, NOT network issues"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"A poorly encoded segment"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"segmentnotfound (not on iOS + only for DASH)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"A segment was not found"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"A 404 returned on a segment"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Ads API"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"aderror"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Something went wrong during ad handling"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Empty ad tag / Adblocker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Network API (web only)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"offline"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Thrown to indicate that the stream is offline"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["DASH: take whole stream offline ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"HLS: take 1 segment offline is enough"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Chromecast API"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"error"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Thrown to indicate that there was an error while casting / trying to cast"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Unplugged Chromecast power cable during casting"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Android Player API"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"NoSupportedRepresentationFoundEvent"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Indicates that none of the provided representations is supported by the player"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Trying to play a 4k stream encoded in AV1"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return i}});var n=r(67294);let s={},o=n.createContext(s);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);