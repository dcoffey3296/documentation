"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21144],{61968:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=o(74848),t=o(28453);const s={},i="Introduction",a={id:"how-to-guides/miscellaneous/error/introduction",title:"Introduction",description:"We live in an imperfect world, and sometimes things go wrong.",source:"@site/theoplayer_versioned_docs/version-v7/how-to-guides/07-miscellaneous/04-error/00-introduction.md",sourceDirName:"how-to-guides/07-miscellaneous/04-error",slug:"/how-to-guides/miscellaneous/error/introduction",permalink:"/documentation/pr-preview/pr-144/theoplayer/v7/how-to-guides/miscellaneous/error/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/07-miscellaneous/04-error/00-introduction.md",tags:[],version:"v7",sidebarPosition:0,frontMatter:{},sidebar:"roku",previous:{title:"Verizon Media Interface",permalink:"/documentation/pr-preview/pr-144/theoplayer/v7/how-to-guides/miscellaneous/verizon-media/interface"},next:{title:"How to do error handling",permalink:"/documentation/pr-preview/pr-144/theoplayer/v7/how-to-guides/miscellaneous/error/how-to-do-error-handling"}},l={},c=[{value:"Related resources",id:"related-resources",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,n.jsx)(r.p,{children:"We live in an imperfect world, and sometimes things go wrong.\nA viewer might not be able to watch a video stream for a variety of reasons.\nSome example reasons are:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"The video stream is unavailable,"}),"\n",(0,n.jsx)(r.li,{children:"The video stream is not supported on the selected browser,"}),"\n",(0,n.jsx)(r.li,{children:"The THEOplayer license is incorrectly configured."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When an issue occurs, an error should be triggered"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"When a fatal playback issue occurs, THEOplayer overlays an error message on top of the video player.\nThis error message indicates to the viewer that playback is unsuccessful.\nAdditionally, THEOplayer exposes information about the error through the THEOplayer API."}),"\n",(0,n.jsxs)(r.p,{children:["The THEOplayer API allows you to detect errors. As a developer, you can use an event handler to catch (and handle) ",(0,n.jsx)(r.code,{children:"error"})," events.\nThis feature (i.e. being able to intercept errors and act on it) may be mandatory to you to achieve a use-case:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"You want to log the error on an analytics stacks,"}),"\n",(0,n.jsx)(r.li,{children:"You want to replace the default error message of THEOplayer with your own error message,"}),"\n",(0,n.jsx)(r.li,{children:"..."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"THEOplayer associates error codes with errors to categorize types of issues.\nAs a developer, these error codes may help you to log an error on an analytics stack,\nor may help you to generate a custom error message towards your viewer."}),"\n",(0,n.jsx)(r.h2,{id:"related-resources",children:"Related resources"}),"\n",(0,n.jsx)(r.p,{children:"The following resources help you to understand error handling in THEOplayer."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v7/how-to-guides/miscellaneous/error/how-to-do-error-handling",children:"How to do error handling"}),": this article explains how you use event listeners to intercept the ",(0,n.jsx)(r.code,{children:"error"})," event."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v7/how-to-guides/miscellaneous/error/error-codes",children:"Error codes"}),": this article explains what error codes are, and why they are useful"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>a});var n=o(96540);const t={},s=n.createContext(t);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);