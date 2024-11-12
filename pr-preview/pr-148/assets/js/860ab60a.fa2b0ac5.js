"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67169],{48546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(74848),r=n(28453);const a={},i="How can we avoid that the player keeps looking for chunks/segments if they are not found",s={id:"faq/how-to-avoid-loading-chuncks-when-not-found",title:"How can we avoid that the player keeps looking for chunks/segments if they are not found",description:"You can use the Network API events to detect whether the stream is offline and implement the behavior you prefer. This is working for HLS and is being implemented (2020) for DASH as well.",source:"@site/theoplayer_versioned_docs/version-v7/faq/46-how-to-avoid-loading-chuncks-when-not-found.md",sourceDirName:"faq",slug:"/faq/how-to-avoid-loading-chuncks-when-not-found",permalink:"/documentation/pr-preview/pr-148/theoplayer/v7/faq/how-to-avoid-loading-chuncks-when-not-found",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/faq/46-how-to-avoid-loading-chuncks-when-not-found.md",tags:[],version:"v7",sidebarPosition:46,frontMatter:{},sidebar:"faq",previous:{title:"What aspects of THEOplayer do we need to take into account to deploy a proper Content Security Policy (CSP)",permalink:"/documentation/pr-preview/pr-148/theoplayer/v7/faq/whats-aspects-to-take-into-account-when-developing-csp"},next:{title:"Can we show a custom message on 403 on mp4",permalink:"/documentation/pr-preview/pr-148/theoplayer/v7/faq/can-we-show-custom-message-on-403-on-mp4"}},h={},l=[{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"how-can-we-avoid-that-the-player-keeps-looking-for-chunkssegments-if-they-are-not-found",children:"How can we avoid that the player keeps looking for chunks/segments if they are not found"})}),"\n",(0,o.jsx)(t.p,{children:"You can use the Network API events to detect whether the stream is offline and implement the behavior you prefer. This is working for HLS and is being implemented (2020) for DASH as well."}),"\n",(0,o.jsx)(t.p,{children:"When a playlist is loaded that returns 404, the player fails and returns error. However, when the playlist is present but the segments are not available (404), the player will keep looking for segments, if left on its own, in an attempt to play back the video as soon as it\u2019s available."}),"\n",(0,o.jsx)(t.p,{children:"In this case, however, you can decide to implement a behavior managing this situation by using the Network API, and more precisely the offline event. After some attempts, this event is thrown to indicate that the stream is offline."}),"\n",(0,o.jsx)(t.p,{children:"The opposite event, online, is also present in the API, and it is Thrown to indicate that the stream has come back online and the player can continue playback. As this usually occurs after an 'offline' event is thrown, the two events may be used in combination to provide more elaborate behaviors."}),"\n",(0,o.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["On some platforms (e.g.: iPads) when the segments are unavailable, an ",(0,o.jsx)(t.code,{children:"error"})," event is thrown, differently than for the majority of platforms. This inconsistency is due to the lack of MSE (and EME) support on such platforms, which triggers the more generic error event."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,o.jsx)(t.p,{children:"The following resources provide more information:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/NetworkEventMap.html",children:"Network API events"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v7/how-to-guides/network/introduction",children:"Network: How to use the Network API"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var o=n(96540);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);